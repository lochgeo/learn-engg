## A model that does one thing: predict the next token

Every cost, latency and quality decision in this domain rests on one mental model: a large language model (LLM) is a next-token predictor, not a database and not a program with memory. Get that picture right and context budgets, streaming, caching and model choice become bookkeeping rather than trivia. This sub-skill carries 5.2% — small on its own, but load-bearing for everything after it.

This lesson builds that picture piece by piece — tokens, context, sampling and latency — so the lessons that follow can refer back to it.

## The big idea

A model receives a sequence of tokens and returns a probability distribution over the next token. Generation is a loop: pick a token, append it, run the model again. Nothing else happens between calls.

Three consequences follow:

- **Everything the model can use must be in the context you send.** If a fact is not in the prompt, the weights or a tool result, the model cannot retrieve it.
- **Output length drives both time and money**, because each generated token is another forward pass.
- **The API is stateless.** A "conversation" is a list of messages you resend in full on every turn.

<learning-block type="concept" title="Autoregression in one sentence">

The model maps a token sequence to a distribution over the next token; text is produced by sampling from that distribution, appending the sample, and repeating until a stop condition is met.

</learning-block>

## Start here

### Tokens are not words

Text is split into **tokens** — the units the model actually reads and generates — by a tokeniser. Common English words are often one token; rarer words, code, JSON punctuation and non-Latin scripts split into several. For planning, ordinary English prose is roughly **four characters per token**, or about **three-quarters of a word per token**. Treat that as an estimate, never a guarantee.

| Content | Rough token cost | Why |
| --- | --- | --- |
| Plain English | ~1 token per 4 characters | Common words are single tokens |
| Code and JSON | Higher per character | Punctuation and identifiers split |

Two prompts that look the same length can differ by a factor of two in cost, so measure with the token-counting endpoint rather than counting words.

### The context window is a shared budget

The **context window** is the total number of tokens a model can hold in one request: **input plus output**. Everything competes for that space — the system prompt and tool definitions, the full message history, retrieved documents and images, and the tokens about to be generated.

A long chat does not remember earlier turns for free. Each turn resends the history, so input tokens grow with conversation length while the window stays fixed. When the budget runs out, the request fails or must be trimmed, which is why context management gets its own lesson.

<learning-block type="mistake" title="The window is not a memory limit">

The context window is a per-request ceiling, not "how much the model remembers". Two conversations of ten turns cost twice as much as one of ten turns, and a single conversation can exceed the window even though the model saw every message once. Memory is something your application implements by resending, trimming or summarising.

</learning-block>

### Sampling settings and why identical prompts vary

The model scores candidate tokens, then turns those scores into probabilities. **Temperature** rescales the distribution: near zero the top token almost always wins; higher values flatten it and admit variety. **Top_p** (nucleus sampling) keeps only the smallest set of tokens whose probabilities sum to a threshold, then samples inside that set.

On current Claude models these parameters are largely retired: with API version `2026-10-21`, a request that sends `temperature`, `top_p` or `top_k` returns a 400 error, and current SDKs no longer expose them. Determinism is not guaranteed in any case. The durable idea is that **sampling settings are a style dial, not a correctness dial**. Variation still enters through model updates, batching effects, changing tool results, timestamps in prompts, and any difference in the context prefix.

Design for variation instead of fighting it: validate against a schema, retry with feedback, score with evals, and never rely on exact string equality.

### Zero-, single- and multi-shot prompting

| Pattern | What you send | Good for | Cost |
| --- | --- | --- | --- |
| Zero-shot | Instructions only | Simple, well-specified tasks | Cheapest input |
| Single-shot | One worked example | Fixing format or tone | Small, predictable |
| Multi-shot (few-shot) | Several examples, including edge cases | Classification, extraction, house style | Highest input, best consistency |

Examples are the cheapest specification you have, but every example is input tokens on every request. Put them in the stable prefix so prompt caching can reuse them, and keep them consistent — contradictory examples teach contradiction.

### System and user content

The **system** prompt carries role, policy and output contract: who the model is, what it must never do, what format to return. **User** messages carry the task and its data. Keep durable rules in the system prompt and per-request material in the user turn; that split also determines what can be cached and what changes each call.

A system prompt is an instruction channel, not a security boundary. Anything a user can paste into a message can attempt to override behaviour, so enforce permissions in code, not in prose.

### Knowledge cut-off and hallucination

The **knowledge cut-off** is the end of the model's training data. It cannot know later events unless you supply them. A **hallucination** is fluent, confident output that is not supported by evidence: a fabricated citation, an API method that does not exist, a wrong number in a table.

Hallucination is a natural failure of next-token prediction — the model optimises for likely continuation, not truth. Mitigate with retrieved source text, explicit permission to say "I don't know", required citations, schema validation, and evals that check facts rather than tone.

### Latency and throughput

- **Time to first token (TTFT)** is the wait before anything appears; it grows with input size and thinking, because the prompt is processed first.
- **Output tokens per second (OTPS)** is the generation rate once streaming begins, so **total latency** is roughly TTFT plus output tokens divided by OTPS.
- **Throughput** is completed requests or tokens per unit time across concurrent work — capacity, not user experience.

Streaming does not make a response finish sooner. It moves the wait from "nothing, then everything" to "something almost immediately", which is usually what an interactive product needs.

## Worked example

A support assistant answers questions against a fixed policy document. Measure the input before sending, then estimate the wait.

```python
import os
import anthropic

client = anthropic.Anthropic()
MODEL = os.environ["CLAUDE_MODEL"]  # your current model ID

system = "You are a support assistant. Answer in at most 120 words, citing policy sections."
policy = open("policy.md").read()
question = "Can a customer return an opened item after 30 days?"
messages = [{"role": "user", "content": policy + "\n\nQuestion: " + question}]

count = client.messages.count_tokens(model=MODEL, system=system, messages=messages)
print("input tokens:", count.input_tokens)      # e.g. 8_412

response = client.messages.create(
    model=MODEL, max_tokens=400, system=system, messages=messages
)
print(response.usage)                           # input=8412 output=287
print(response.stop_reason)                     # "end_turn"
```

With 8,412 input tokens and a 400-token cap, the request occupies at most 8,812 tokens of the window — comfortably inside a standard window, but only because nothing else is attached.

If TTFT is 0.9 s and generation runs at 60 tokens per second, 287 output tokens take about 4.8 s, so the user waits roughly 5.7 s. Halving the answer saves about 2.4 s; shrinking the policy document saves TTFT but risks removing the answer.

## On the exam

<learning-block type="check" title="On the exam">

- The context window is **input plus output**. "Reply with a 2,000-token report" consumes budget before a single token is generated.
- Tokens are not words. Any option quoting a fixed token-per-word ratio is probably the distractor.
- Temperature and top_p change variety, not truth; recent API versions reject both, and determinism is never guaranteed.
- System versus user is a design decision about durability, not a hierarchy of truth.
- Streaming improves perceived latency, not total duration; throughput is a capacity metric.

</learning-block>

## Try it yourself

**A team sends a 60-page document (about 45,000 tokens) with every question, then asks 500 short questions per day. They report that the first answer each morning is slow and expensive, while later answers are normal. What is the most likely explanation, and what would you measure first?**

<details>
<summary>Reveal the explanation</summary>

The document is paid for as fresh input on every request unless it is cached. The slow, expensive first request fits a cold cache being written; later requests can reuse the prefix. Measure `cache_creation_input_tokens` and `cache_read_input_tokens` in the response usage. If both are zero, the prompt is below the model's minimum cacheable length or the breakpoint is in the wrong place. Also check that document plus answer fits the window: 45,000 tokens is fine on a large-context model, but not alongside a very long reply.
</details>

## Remember

- A model predicts the next token; there is no built-in memory, database or state between calls.
- The context window is one shared budget for input and output, and history is resent every turn.
- English prose runs near four characters per token; measure rather than guess.
- Identical prompts can vary; validate and retry instead of assuming determinism.
- Latency is TTFT plus generation time; streaming changes perception, not duration.
