## Every token has a meter running — learn to read it

Most AI cost surprises are not caused by a price change. They come from four token buckets being confused, a cache breakpoint in the wrong place, or a cheap model that fails often enough to need a second attempt. This sub-skill is 2.8% of the exam, and its questions are arithmetic with a story attached.

## The big idea

You are billed per token, and not all input tokens cost the same. Uncached input, cache writes, cache reads and output each have their own multiplier, and the Batch API applies a further discount to the whole request. Optimise **cost per successful task**, not cost per call: a model that is half the price but succeeds 70% of the time can be the more expensive choice.

## Start here

### The four buckets

Almost every invoice line comes from one of four buckets:

| Bucket | What it counts | Multiplier on base input price |
| --- | --- | --- |
| Input | Tokens after the last cache breakpoint | $1$ |
| Cache write, 5-minute TTL | Tokens written to a new cache entry | $1.25$ |
| Cache write, 1-hour TTL | Same, with the longer lifetime | $2$ |
| Cache read | Tokens served from an existing entry | $0.1$ |
| Output | Every generated token, including thinking | Output price, not input price |

Total input is $I_{\text{total}} = I + W_5 + W_1 + R$. The cost of one request, with $b = 1$ for a batch request and $b = 0$ otherwise, is:

$$
C = 0.5^{b}\left(I p_{in} + 1.25\,W_5 p_{in} + 2\,W_1 p_{in} + 0.1\,R p_{in} + O p_{out}\right)
$$

Where $p_{in}$ and $p_{out}$ are the published prices per token for the model you actually deployed. Some current models price cache reads below the standard 0.1 multiplier, so check the pricing table rather than assuming.

### Prompt caching: short and long TTL

`cache_control` marks a prefix for reuse. The default entry lives five minutes and is refreshed at no extra cost each time it is read; a one-hour TTL is available for twice the base input price on the write.

The economics are simple. A five-minute write costs 1.25 units instead of 1, and each later read costs 0.1. Caching wins from the **second** use. With a one-hour write at 2 units, it wins from the **third**. If a prefix is used once, caching loses money.

Pitfalls worth memorising:

- **Minimum length.** Prompts below the model's minimum cacheable length are silently not cached, with no error. Minimums differ by model and are commonly in the low thousands of tokens.
- **Breakpoint placement.** Put the breakpoint on the last block that is identical across requests. A timestamp or per-request context after the documents turns every request into a fresh write.
- **Time counts from the request start**, and generation time is included, so a long streamed answer eats into the TTL.
- **Parallel requests miss.** A cache entry exists only after the first response starts; fan-out at the same instant produces multiple writes.
- **Any change to tools, system prompt, thinking configuration, effort or speed** can invalidate part or all of the prefix.
- **Batch caching is best-effort**, because requests are processed concurrently.

### The Batch API discount

Batch processing halves the price of every token and is designed for work that can wait. Most batches finish within an hour, results are available for 29 days, and requests expire if not processed within 24 hours. Results can arrive out of order, so match them by `custom_id`.

Batch does not support streaming or fast mode, and `max_tokens: 0` cache pre-warming is not allowed. It is the right tool for backfills, offline evals, moderation sweeps and overnight reports. Batch and cache discounts stack, but expect a lower cache hit rate than synchronous traffic.

### Context trimming and summarisation

A conversation that grows without bound eventually fails on the context window, and even before that it pays for the whole history on every turn. Options, in rough order of preference:

1. **Retrieve instead of accumulate** — send the relevant passages, not the whole corpus.
2. **Drop or prune old turns**, or summarise at a natural boundary, keeping pinned facts.
3. **Cap tool output**, since one verbose tool result can dwarf the conversation.

Trimming has a caching consequence: the cache covers `tools`, then `system`, then `messages` as a prefix. Removing early messages changes that prefix and invalidates the cache from the edit onward.

Summarise deliberately, then let a new cache entry form, rather than editing the front of the prompt on every turn. Keep `max_tokens` tight enough to stop runaway generation, but loose enough for legitimate long answers.

### Monitoring, budgets and alerts

Every response carries `usage`: `input_tokens`, `cache_creation_input_tokens`, `cache_read_input_tokens` and `output_tokens`. Log them per feature and per model, and aggregate daily. Useful signals:

- tokens per request, split by bucket;
- cache hit rate, meaning reads divided by total input;
- spend run-rate against the monthly budget, with alerts at 50%, 80% and 100%;
- cost per successful task, which is the only figure that reflects retries.

Console usage and cost analytics give the organisation view; application logs give the per-feature view. You need both to answer "which endpoint caused this?"

### Cost per successful task

One more formula turns per-request cost into a business metric:

$$
C_{\text{success}} = \frac{C_{\text{attempt}} \times n_{\text{attempts}}}{n_{\text{success}}}
$$

A cheap model at 1 unit per attempt with a 70% success rate costs about 1.43 units per success before retries. A stronger model at 4 units with a 96% success rate costs about 4.17. The cheap model still wins here — but add a human review step for its failures and the ranking can reverse. That is the comparison the exam wants.

## Worked example

A support assistant sends a 40,000-token policy document with 1,000 questions a day, gets 300-token answers, and adds 200 tokens of question and instructions. Treat $p_{in} = 1$ unit and $p_{out} = 5$ units: illustrative units, not prices.

**No caching.** Each request is $40{,}200$ input units plus $300 \times 5 = 1{,}500$ output units, so $41{,}700$ units. For the day: $41{,}700{,}000$ units.

**With a five-minute cache.** The first request writes the document: $40{,}000 \times 1.25 = 50{,}000$, plus 200 input and 1,500 output, giving 51,700 units. Later requests read it: $40{,}000 \times 0.1 = 4{,}000$, plus 200 and 1,500, giving 5,700 units each. The day costs $51{,}700 + 999 \times 5{,}700 = 5{,}746{,}000$ units — about 86% less.

Then account for reliability. If 6% of requests fail and are retried once, attempts average 1.06 per success, so cost per successful task is $5{,}746 \times 1.06 \approx 6{,}091$ units. That is the number to put in a dashboard.

```python
import os

P_IN = float(os.environ["PRICE_INPUT_PER_TOKEN"])
P_OUT = float(os.environ["PRICE_OUTPUT_PER_TOKEN"])

def request_cost(usage, batch: bool = False) -> float:
    cost = (
        usage.input_tokens * P_IN
        + usage.cache_creation_input_tokens * 1.25 * P_IN
        + usage.cache_read_input_tokens * 0.10 * P_IN
        + usage.output_tokens * P_OUT
    )
    return cost * (0.5 if batch else 1.0)

def cost_per_success(total_cost: float, successes: int) -> float:
    return total_cost / successes if successes else float("inf")
```

Note that the 1-hour cache write multiplier would be 2.0, not 1.25, and some models price reads below 0.10. Keep those constants in configuration so a pricing change is one edit, not a hunt.

## On the exam

<learning-block type="check" title="On the exam">

- Batch halves the bill but forbids streaming and fast mode, and results can arrive out of order.
- A 5-minute cache write costs 1.25 times input and a read costs 0.1 times; the 1-hour write costs twice input.
- Caching a prefix used once is a loss, not a saving.
- Thinking tokens are output tokens for billing and count toward `max_tokens`.
- Repeatedly trimming the front of a conversation destroys the cached prefix.
- Cost per successful task includes retries and failures; cost per call does not.

</learning-block>

## Try it yourself

**A team enables a one-hour cache for a prompt used exactly twice a day, 40,000 tokens each time. They expect a large saving. What will actually happen?**

<details>
<summary>Reveal the explanation</summary>

The 1-hour write costs twice the base input price, and a read costs 0.1, so two uses cost $2 + 0.1 = 2.1$ units against $2$ units uncached — slightly worse, before counting the risk that the second use falls outside the hour. The 5-minute TTL would win from the second use, but only if both uses happen inside five minutes. For two uses a day, caching the document is the wrong optimisation; reducing the document or using the Batch API is more promising.
</details>

## Remember

- Total input is uncached input plus cache writes plus cache reads; output is billed separately, including thinking.
- Multipliers: 1.25 for a five-minute write, 2 for a one-hour write, 0.1 for a read, 0.5 for batch.
- Five-minute caching breaks even on the second use; one-hour caching needs a third.
- Cache the stable prefix and keep timestamps and per-request context after the breakpoint.
- Trimming and summarisation solve the context window but can invalidate the cache.
- Track cache hit rate, tokens per request and cost per successful task, with budget alerts.
