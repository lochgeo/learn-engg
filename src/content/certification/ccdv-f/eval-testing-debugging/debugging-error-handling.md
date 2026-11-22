## A blank answer is a diagnosis

The model returns an empty string, your UI shows "Something went wrong", and the logs contain a 200. Nothing crashed, yet the feature is broken — and the reason is almost never "the model is bad". Claude systems fail at boundaries: a transport limit, a decoder limit, a schema your code assumed, or context that never arrived. Debugging means finding *which* boundary before changing a single prompt word.

This is Domain 4, **Debugging and Error Handling**, worth about 2.6% of CCDV-F. The questions are practical: given a symptom, which signal do you trust, and what do you tell the user?

## The big idea

Treat a model response as untrusted input from a remote service. That habit generates most of the correct answers:

- Every response carries metadata — `stop_reason`, `usage`, request id — and it identifies the fault faster than the text does.
- Every failure has a layer: network, API, generation, parsing, validation, retrieval, product logic. Fix the layer, not the symptom.
- Every retry needs a reason. Retrying a deterministic 400 wastes time; retrying a 429 without backoff makes it worse.

## Start here

### The error taxonomy

| Symptom | Signal to check | First move |
| --- | --- | --- |
| 400, malformed request | error type and message | fix the payload; do not retry |
| 401 or 403 | credentials, workspace, key permissions | fix auth; do not loop |
| 429 rate limited | rate-limit headers, `retry-after` | back off with jitter; reduce concurrency |
| 500 or 529 | server fault, overload | bounded retry, then fallback |
| Timeout or connection error | client timeout, streaming state | retry idempotently; stream long outputs |
| Empty or partial answer | `stop_reason` | distinguish refusal from truncation |
| Tool arguments rejected | your validator output | return an error `tool_result`; let the model repair |
| Confident answer, wrong facts | retrieved chunks | fix retrieval; the model was not asked well |

### Read `stop_reason` before the text

`stop_reason` is the model's own account of why generation ended. It separates failures that all look like "it stopped":

- `end_turn` — a natural finish. If the content is wrong, suspect prompting or retrieval.
- `max_tokens` — the output hit your cap. The answer is truncated, not refused. Raise the cap, ask for a shorter form, or continue.
- `refusal` — a safety classifier intervened; content may be empty or partial. Rephrase, or route to a policy-compliant path. Retrying the identical prompt cannot help.
- `tool_use` — the model wants a tool result; your loop owes it a `tool_result` before it can finish.
- `model_context_window_exceeded` — the conversation outgrew the window; compact, retrieve less, or start fresh.

A 200 with `stop_reason: "max_tokens"` is not an API error, and no retry will fix it. That distinction is worth memorising.

<learning-block type="concept" title="Malformed JSON and schema mismatch are different bugs">

**Malformed JSON** means the text could not be parsed at all — common when a model writes JSON as prose instead of using tool use or structured output. **Schema mismatch** means parsing succeeded but the object violates your contract: a string where an integer belongs, a missing required field, an enum value you never defined. The first is a formatting problem; the second is a specification problem. Both should return to the model as a correctable tool error, not reach the user as a crash.

</learning-block>

## A workflow that beats guessing

1. **Reproduce** with the smallest failing input. Keep the exact prompt, model setting, tool list and retrieved context; a bug you cannot replay is a rumour.
2. **Isolate** the layer. Call the API alone, then add parsing, then tools, then retrieval. The first layer that fails is the one to fix.
3. **Trace** the request end to end: request id, prompt version, token counts, latency, `stop_reason`, tool calls, validation errors.
4. **Compare** against a known-good case. Diff the prompt, schema and retrieved chunks; most regressions are a one-line edit or a changed chunk, so run the eval set before and after the change.

<learning-block type="mistake" title="Do not debug by rewriting the prompt first">

Rewording the instruction is tempting. But if `stop_reason` is `max_tokens`, or the retriever returned nothing, or the schema required a field the model cannot know, prompt edits only add noise. Check metadata, then context, then the prompt — in that order.

</learning-block>

## Worked example

A support assistant calls an order-lookup tool. One request in twenty crashes instead of answering. The fix is a boundary check:

```python
class OrderArgs(BaseModel):
    order_id: str

resp = client.messages.create(model=MODEL, max_tokens=512,
                              tools=[LOOKUP_ORDER], messages=messages)

if resp.stop_reason == "tool_use":
    call = next(b for b in resp.content if b.type == "tool_use")
    try:
        args = OrderArgs.model_validate(call.input)
        result = {"type": "tool_result", "tool_use_id": call.id,
                  "content": fetch_order(args.order_id)}
    except ValidationError as exc:
        result = {"type": "tool_result", "tool_use_id": call.id,
                  "is_error": True,
                  "content": f"Invalid arguments: {exc}"}
elif resp.stop_reason == "max_tokens":
    log.warning("truncated", extra={"message_id": resp.id})
```

The `tool_result` with `is_error: true` is the important part: the model can read the validation message and correct itself next turn, instead of a stack trace reaching the user. Malformed JSON needs the same treatment — report the parse error, do not guess at half-valid arguments.

Now the trace line that exposed the other bug:

```text
trace=8f21 prompt=order-assistant@v7 in=1842 out=512 stop=max_tokens
tool=lookup_order latency_ms=1180 cache_read=0 retries=0
```

`out=512` matching `max_tokens` exactly, with `stop=max_tokens`, says the answer was cut off. Raising the cap fixed it; the prompt was never the problem. Log token counts per request and per prompt version, including cache reads, so context growth and cost are visible before `model_context_window_exceeded` arrives.

<learning-block type="example" title="Retries and fallbacks, chosen by cause">

Retry only what can succeed again: 429, 408, 409, 5xx, timeouts. The official SDKs retry a small number of times by default with exponential backoff — check the current defaults rather than assuming them. Add jitter, cap attempts, use idempotency keys for writes, and open a circuit breaker after repeated failure. A fallback model is a product decision; one that silently changes quality is a trap.

</learning-block>

## On the exam

<learning-block type="check" title="What the questions reward">

- Naming the failure from evidence: status code, `stop_reason`, validator message, retrieval score.
- Refusing to retry non-retryable errors, and refusing to "fix" truncation with prompt edits.
- Telling a refusal apart from an empty retrieval and a truncated answer.

</learning-block>

### Honest user-facing errors

| Cause | Bad message | Better message |
| --- | --- | --- |
| Rate limit | "Something went wrong" | "We are handling a lot of requests. Retrying in a few seconds." |
| Refusal | "Error 500" | "I can't help with that request. Here is what I can do instead." |
| Truncation | silently cut text | "The answer was too long; showing the first part" with a continue action |
| Retrieval miss | fabricated answer | "I couldn't find that in the documents I have access to." |

## Try it yourself

**A request returns HTTP 200, `stop_reason: "refusal"`, and an almost empty `content` array. A teammate proposes retrying three times, then raising `max_tokens`. What is wrong with that plan?**

<details>
<summary>Reveal the explanation</summary>

Retrying the identical prompt cannot change a classifier decision, and `max_tokens` has no effect on a refusal — the response was not truncated. Check whether the request can be made policy-compliant, for example by narrowing the task, and return an honest message. Log the refusal with its request id: a spike in refusals is a product signal, not a transient error.
</details>

## Remember

- Metadata first: status code, `stop_reason`, `usage`, request id, validator message.
- Truncation and refusal are successful responses with different fixes; neither is transient.
- Parse, validate and return errors as `is_error` tool results instead of crashing.
- Retry only transient faults, with backoff, jitter, a cap and idempotency.
- Reproduce, isolate, trace, compare; log prompt versions and token counts so regressions are visible.
- Tell the user what happened and what to do next; never fabricate a gap away.
