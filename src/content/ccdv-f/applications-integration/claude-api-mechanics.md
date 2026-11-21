## One endpoint, six ways to stop

Strip away the SDKs and the frameworks and every Claude application is the same conversation: you POST a list of messages to `/v1/messages`, you get back a list of content blocks and a reason the model stopped. Learn that shape properly and most "why is my app behaving oddly?" questions answer themselves. This lesson follows a single request from body to response, then shows what each field obliges your code to do. API mechanics is 6.8% of CCDV-F, the third-largest of this domain's six sub-skills, and it rewards precision: the exam will happily ask what `stop_reason: "tool_use"` obliges *you* to do next.

## The big idea

The Messages API is **stateless**. The server keeps no memory of your conversation, so "multi-turn" simply means you resend the growing list of messages each time. Everything the model knows — system prompt, prior turns, tool results — travels in the request body.

Two consequences follow. Context is your responsibility: trim, summarise or cache it yourself. And every response *describes what happened* rather than merely containing text — `stop_reason` says whether the model finished, was cut off, wants a tool, or declined.

## Start here

### The request

| Field | Required | Meaning |
| --- | --- | --- |
| `model` | yes | Which model to call; pin an explicit identifier in production |
| `max_tokens` | yes | Hard ceiling on generated tokens, not a target |
| `messages` | yes | Ordered turns with `role` of `user` or `assistant` |
| `system` | no | The system prompt, sent top-level rather than as a message |
| `output_config` | no | Effort level and structured-output format; see the current docs |
| `stop_sequences` | no | Custom strings that end generation |
| `tools` | no | JSON-schema tool definitions the model may call |
| `stream` | no | Return server-sent events instead of one JSON body |

Headers are unglamorous and frequently examined: `x-api-key` carries the credential, `anthropic-version` selects the API version, and `content-type: application/json` is required. Beta features add an `anthropic-beta` header — check the current docs for which features still need it.

The response mirrors the request's block structure:

```json
{
  "id": "msg_01XFDUDYJgAACzvnptvVoYEL",
  "type": "message",
  "role": "assistant",
  "content": [{ "type": "text", "text": "Billing dispute — route to Finance." }],
  "stop_reason": "end_turn",
  "stop_sequence": null,
  "usage": { "input_tokens": 412, "output_tokens": 18 }
}
```

`content` is a **list of blocks**. Today it might hold one text block; with tools it holds `tool_use` blocks, and with extended thinking it can hold thinking blocks. Code that assumes `response.content[0].text` exists will break the first time a tool is involved — iterate and switch on `type`.

`usage` is your cost meter: input and output tokens on every response, plus cache counters when prompt caching is active.

### The six stop reasons

| `stop_reason` | What happened | What your code must do |
| --- | --- | --- |
| `end_turn` | Model finished naturally | Consume the text |
| `max_tokens` | Hit your ceiling; output is truncated | Treat as incomplete: raise the ceiling, continue, or fail closed |
| `stop_sequence` | One of your strings matched; see the `stop_sequence` field | The marker is not part of the generated text |
| `tool_use` | Model wants a tool executed | Run it, append `tool_result`, call again |
| `pause_turn` | A server-side tool loop paused the turn | Send the response back to continue |
| `refusal` | Model declined on safety grounds | Surface a safe fallback; do not retry blindly |

### Turns and roles

Messages alternate `user` and `assistant`. Consecutive messages with the same role are combined into a single turn, and conversations conventionally start with `user`. An `assistant` message placed last acts as a **prefill**: the model continues from your partial text, a neat way to force JSON or suppress a preamble, though it interacts with extended thinking — verify current constraints.

Tool results go back as a `user` message containing `tool_result` blocks whose `tool_use_id` matches the earlier `tool_use` block's `id`; mixing up those identifiers is the classic multi-turn tool bug.

### Streaming

With `stream: true` the response arrives as server-sent events in a fixed order:

1. `message_start` — envelope plus input token usage, then `content_block_start`.
2. `content_block_delta` — repeated fragments: `text_delta` for prose, `input_json_delta` for tool arguments.
3. `content_block_stop` — block complete; then `message_delta` with final `stop_reason` and output usage; then `message_stop`. Interleaved are `ping` keep-alives and, on failure, an `error` event.

Tool arguments arrive as **fragments of a JSON string**, so concatenate them and parse only at `content_block_stop`; parsing each delta is a reliable way to crash.

### Images, documents and token counting

Multimodal input uses content blocks too: an `image` block with a base64 or URL source, or a `document` block for a PDF or plain text. Both consume input tokens, often heavily, so cost estimates must account for them; size and format limits change over time, so check the current docs rather than memorising numbers.

To estimate before sending, call `POST /v1/messages/count_tokens` with the same body and read `input_tokens` — it generates nothing, so it is safe as a pre-flight budget guard.

### Errors and retryability

| Status | Class | Retry? |
| --- | --- | --- |
| 400 | `invalid_request_error` | No — fix the request (bad parameter, schema, or balance) |
| 401 / 403 | `authentication_error` / `permission_error` | No — fix the key or access |
| 404 / 413 | `not_found_error` / `request_too_large` | No — wrong model id, or input too large |
| 429 | `rate_limit_error` | Yes — back off and honour any retry hint |
| 500 | `api_error` | Yes — transient server fault |
| 529 | `overloaded_error` | Yes — transient capacity, back off more gently |

Only 429, 408/409 and 5xx are worth retrying, and only with capped exponential backoff plus jitter. Retrying a 400 in a loop turns a one-line bug into an outage.

## Worked example

A request is one POST with an `x-api-key`, an `anthropic-version`, and a JSON body. The client below handles the two stop reasons that most often reach production:

```python
import anthropic

client = anthropic.Anthropic()  # reads ANTHROPIC_API_KEY from the environment

resp = client.messages.create(
    model=settings.model_id,          # pinned in config, not a moving alias
    max_tokens=300,
    system=settings.triage_system,    # system prompt is top-level
    messages=[{"role": "user", "content": ticket_text}],
    stop_sequences=["\n\n"],
)

if resp.stop_reason == "max_tokens":
    raise IncompleteAnswer("truncated at the ceiling")   # never show this to a user
if resp.stop_reason == "refusal":
    return SAFE_FALLBACK

text = "".join(b.text for b in resp.content if b.type == "text")
log.info("call_ok", tokens=resp.usage.input_tokens + resp.usage.output_tokens)
```

<learning-block type="mistake" title="Three mechanics mistakes that reach production">

Reading only `content[0].text` — breaks on `tool_use` and thinking blocks. Ignoring `stop_reason` — ships truncated answers. Assuming the API remembers the previous turn — sends a follow-up with no history and wonders why the model lost the thread. All three are statelessness or block-list errors in disguise.

</learning-block>

<learning-block type="check" title="On the exam">

Expect questions mapping `stop_reason` to the correct next action, distinguishing retryable from non-retryable statuses, and identifying what is *not* part of the request body (`system` is not a message; `max_tokens` is required). Also be ready to say what streaming deltas must be accumulated before parsing: tool-use JSON.

</learning-block>

## Try it yourself

**A response returns `stop_reason: "tool_use"` with one `tool_use` block. What exactly goes back in the next request?**

<details><summary>Reveal the explanation</summary>

Resend the full history: the original user message, the assistant message containing the model's `tool_use` block *verbatim*, then a new `user` message holding a `tool_result` block whose `tool_use_id` matches the block's `id`, with the tool's output as `content`. Do not invent an assistant text message summarising the call, and do not drop the `tool_use` block — the pairing of `id` and `tool_use_id` is what lets the model connect result to request. Keep looping while `stop_reason` remains `tool_use`, with an iteration cap to prevent runaway agents.
</details>

## Remember

- `/v1/messages` is stateless: the client resends the whole conversation every turn.
- `content` is a list of typed blocks; never assume the first block is text.
- `stop_reason` is the contract — `end_turn`, `max_tokens`, `stop_sequence`, `tool_use`, `pause_turn`, `refusal`.
- Streaming ends with `message_delta` (usage and stop reason); `usage` is the accounting source of truth, and `count_tokens` is the pre-flight estimate.
- Retry 408/409, 429 and 5xx with capped backoff and jitter; fix, don’t retry, every other 4xx.
