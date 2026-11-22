## One model, many dials — learn which one to turn

Two requests to the same model can behave very differently — in latency, output length and cost — because of settings that are easy to confuse: a thinking budget, an effort level, a token ceiling, a transport choice and a cache breakpoint. This is the largest sub-skill in the domain at 6.1%, and most of its questions reduce to "which dial actually changes this behaviour?"

## The big idea

A request is a bundle of independent controls. Thinking controls whether the model reasons before answering; effort controls how much work it does overall; `max_tokens` is a hard ceiling; streaming is only a delivery mechanism; speed selects a faster inference configuration; caching reuses a prefix. Confusing one control with another is the classic exam error. Model tiers follow the same logic: **Opus** is the most capable, **Sonnet** balances capability with speed and cost, and **Haiku** optimises latency and price at high volume. Exact IDs and context sizes change — check the current model overview.

| Control | What it changes | What it does not change |
| --- | --- | --- |
| `max_tokens` | Hard ceiling on generated tokens | A target length or a quality setting |
| `thinking` | Whether and how the model reasons first | The output token ceiling |
| `output_config.effort` | Overall token spend, including thinking and tools | A strict numeric budget |
| `speed: "fast"` | Inference throughput | Intelligence, or time to first token |

## Start here

### Thinking: adaptive is the default direction

- **Adaptive** (`{"type": "adaptive"}`) lets the model decide when and how deeply to think. On current models this is the default direction, and `effort` is the recommended control.
- **Enabled** (`{"type": "enabled", "budget_tokens": n}`) is manual extended thinking. The budget must be at least 1,024 and below `max_tokens`.
- **Disabled** turns thinking off; some models reject it at high effort levels. **Between tools** turns off up-front thinking but returns short progress notes between tool calls as thinking blocks.

Thinking tokens are billed as output, count toward `max_tokens` even when the thinking text is summarised or omitted, and in a tool loop the thinking blocks from the latest assistant turn must be passed back unchanged.

### Effort and fast mode

`output_config.effort` accepts `low`, `medium`, `high`, `xhigh` and `max` on supporting models. Higher levels spend more tokens on reasoning, explanations and tool calls, and take longer. It is a **behavioural signal, not a strict token budget**: at low effort the model may still think on a genuinely hard problem. Defaults vary by model, so set it explicitly when latency matters.

**Fast mode** (`speed: "fast"`) runs a supporting model with significantly faster output-token generation at premium pricing. The gain is in generation rate, not time to first token; availability and rate limits are model- and organisation-specific, it is unavailable with the Batch API, and switching speeds can cause a prompt-cache miss.

### max_tokens is a ceiling

`max_tokens` is required and caps everything the model generates, including thinking. Hitting it returns `stop_reason: "max_tokens"` and a truncated answer — the fix is a larger ceiling, not a blind retry. When running high effort, leave generous room.

<learning-block type="mistake" title="Raising effort without raising the ceiling">

A team switches from `medium` to `high` effort, keeps `max_tokens` at 1,024, and sees answers cut off mid-sentence. Effort increased reasoning tokens, which now consume the same 1,024-token ceiling before the visible answer is finished. Raise `max_tokens` and stream the response so long generations do not time out.

</learning-block>

### Streaming and server-sent events

The Messages API streams over ordinary HTTP using **server-sent events (SSE)**. No WebSocket is required, and the SDKs wrap the same event stream.

A streamed response follows a predictable sequence: `message_start`, then for each block `content_block_start`, repeated `content_block_delta`, and `content_block_stop`, then `message_delta` with the stop reason and final usage, and `message_stop`. Delta types include `text_delta`, `input_json_delta` for tool arguments, and `thinking_delta` plus `signature_delta` for reasoning. `ping` events keep the connection alive.

Streaming improves perceived latency, avoids client and server timeouts on long outputs, and lets you cancel work early. It does not make the full answer arrive sooner. SDK helpers also accumulate the final message, so you can stream to the user and still inspect `usage` and `stop_reason` at the end.

Use the async client in a web server so one slow request does not block others, and cap concurrency with a semaphore so you stay inside rate limits. Independent calls — several documents, several classification batches — can run concurrently to hide latency; a **single** conversation cannot, because each turn depends on the previous one. Use the synchronous client for scripts and notebooks, and rely on SDK retries with backoff for transient errors.

### Counting, prefill and stop sequences

- `client.messages.count_tokens(...)` returns the **input** token count for a proposed request, including system prompt and tools. There is no endpoint that counts output; measure that from `usage` after the call.
- **Prefill** means ending the request with a partial assistant turn to steer format. Claude 4.6 and later models reject last-assistant-turn prefill with an error, so use a system instruction or structured outputs instead.
- **Stop sequences** end generation when produced. The stop sequence is excluded from the output, `stop_reason` is `"stop_sequence"`, and whitespace-only sequences are a poor choice because they trigger almost immediately.

### Tool use

Tool definitions describe name, description and JSON schema. When the model wants a tool it returns a `tool_use` block and `stop_reason: "tool_use"`; your code executes it and sends a `tool_result` block back in a user turn, then repeats until `end_turn`. Validate arguments before execution — the schema guides the model but does not enforce your business rules.

### Prompt caching

`cache_control: {"type": "ephemeral"}` marks a cacheable prefix. It can be set once at the top level (automatic caching, which moves the breakpoint forward as a conversation grows) or on individual blocks (explicit breakpoints, up to four). The default lifetime is five minutes, and a one-hour TTL is available at higher write cost. Cache the stable prefix — tools, system prompt, documents, examples — and keep the varying user question after it.

## Worked example

A policy assistant streams its answer, thinks adaptively, and caches the policy document.

```python
import os
import anthropic

client = anthropic.Anthropic()
MODEL = os.environ["CLAUDE_MODEL"]

with client.messages.stream(
    model=MODEL,
    max_tokens=8000,                 # room for thinking plus the answer
    system=[
        {"type": "text", "text": "Answer only from the policy. Cite sections."},
        {"type": "text", "text": POLICY, "cache_control": {"type": "ephemeral"}},
    ],
    thinking={"type": "adaptive"},
    output_config={"effort": "medium"},
    messages=[{"role": "user", "content": "Can I return an opened item after 30 days?"}],
) as stream:
    for text in stream.text_stream:
        print(text, end="", flush=True)
    final = stream.get_final_message()

print(final.stop_reason, final.usage)   # "end_turn" plus usage counts
# e.g. input=214, output=412, cache_read=11800
```

The matching SSE traffic begins like this:

```text
event: message_start
data: {"type":"message_start","message":{"usage":{"input_tokens":214,"cache_read_input_tokens":11800}}}

event: content_block_delta
data: {"type":"content_block_delta","index":1,"delta":{"type":"text_delta","text":"Opened items"}}

event: message_delta
data: {"type":"message_delta","delta":{"stop_reason":"end_turn"},"usage":{"output_tokens":412}}
```

The `max_tokens` of 8,000 exists because thinking is charged against it. If it were 1,024, the reasoning could exhaust the ceiling and the visible answer would stop at `stop_reason: "max_tokens"`. The cache read of 11,800 tokens confirms the policy prefix was reused rather than reprocessed.

## On the exam

<learning-block type="check" title="On the exam">

- Thinking tokens count toward `max_tokens`; a thinking budget must be at least 1,024 and below `max_tokens`.
- Effort is behavioural, not a hard cap. Do not expect a precise token count from it.
- Fast mode raises output tokens per second, not time to first token, and is incompatible with batch.
- Streaming is SSE over HTTP; WebSockets are not part of the Messages API.
- Prefill is unsupported on Claude 4.6 and later — prefer structured outputs.

</learning-block>

## Try it yourself

**A developer sends `max_tokens=1024` with `thinking={"type": "enabled", "budget_tokens": 2048}` and receives a validation error. They fix the error, then find answers ending mid-sentence with `stop_reason: "max_tokens"`. What are the two separate mistakes?**

<details>
<summary>Reveal the explanation</summary>

First, the manual thinking budget must be smaller than `max_tokens`, so a 2,048-token budget under a 1,024-token ceiling is invalid. Second, after making the numbers legal, the ceiling is still too small: thinking and the answer share it, so reasoning consumes the budget and the visible response is truncated. Raise `max_tokens` well above the thinking budget, or switch to adaptive thinking and use effort as the control.
</details>

## Remember

- `max_tokens` caps thinking plus visible output; it is a ceiling, not a target.
- Thinking modes are adaptive, enabled with a budget, disabled, and between tools; support varies by model.
- Effort trades thoroughness for tokens and latency; fast mode trades price for generation speed only.
- Streaming is SSE over HTTP, improves perceived latency, and lets you cancel or avoid timeouts.
- Count input tokens with the counting endpoint; take output counts from `usage`.
- Cache the stable prefix, not the varying question, and remember that newer models reject prefill.
