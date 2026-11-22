## A tool is only as good as the sentence that describes it

A capable model can read a schema and call a tool correctly — or call it at the wrong moment, with a plausible-looking id that does not exist, and then apologise to the user instead of retrying. The difference is rarely model quality. It is how the tool was written down: its name, its description, its schema, and the shape of what comes back. Tool implementation carries 4.4% of CCDV-F, and it is the part you can reason about from first principles, because every failure has a visible cause.

## The big idea

A tool call is a short conversation, not a remote function call. The model proposes a call in a `tool_use` block; your code decides whether to run it; you reply with a `tool_result` block carrying the same `tool_use_id`. The model never sees your implementation. It sees a name, a description, a JSON Schema, and whatever your code sends back.

So every design question reduces to three:

- Can the model tell **when** this tool applies, and when it does not?
- Can it construct **valid arguments** from the schema and description alone?
- Can it understand the **outcome** well enough to choose the next step?

<learning-block type="concept" title="The schema is the contract">

`input_schema` is JSON Schema. Required fields are the minimum the tool genuinely needs; the description on each property is an instruction to the model, not a comment for humans. A schema that accepts anything is a schema that will be given anything.

</learning-block>

## Start here

Every tool definition has the same three parts.

| Field | What it is for | What breaks without it |
| --- | --- | --- |
| `name` | Stable identifier the model emits | Ambiguous or renamed tools get missed |
| `description` | When to use it, what it returns, what it costs | The model guesses, or calls it at the wrong time |
| `input_schema` | Types, formats, required fields, bounds | Invalid arguments and silent coercion |

### Write descriptions the model can act on

The description is the highest-leverage text in the integration. A good one covers three things:

- **Purpose and trigger** — "Use when the user asks about the delivery status of an order they own."
- **Disambiguation** — name the neighbouring tool it must not be confused with, and how to choose between them.
- **Formats, units and side effects** — id shape, currency, time zone, ISO dates, whether it writes, and what fields come back.

"Gets order info" tells the model nothing it could not guess from the name.

### Prefer narrow, idempotent tools

One tool that does five things forces the model to encode a mode into an argument, and a mode is exactly the field models get wrong. Split it: `get_order`, `cancel_order`, `refund_order`. Narrow tools also give you narrow permissions and readable logs.

Idempotency matters most for writes. If a call times out, the model's reasonable next move is to retry. A tool that creates a *second* refund on retry is a production incident. Accept an idempotency key, or design the operation to be naturally repeatable ("set status to shipped" rather than "advance status").

<learning-block type="mistake" title="The retry that duplicates a payment">

A `charge_card` tool times out after 20 seconds, so your code returns a timeout result. The model, sensibly, calls it again — and the customer is charged twice, because the first request did reach the processor. The fix is not a better error message: it is an idempotency key your code sends on both attempts, so the second call is a no-op.

</learning-block>

## Worked example: the full loop

A read-only lookup, defined tightly enough that the model rarely needs a second attempt.

```json
{
  "name": "get_order_status",
  "description": "Look up the current delivery status of one customer order. Use when the user asks where an order is or when it will arrive. Read-only: never changes the order. Returns status, carrier, expected date and the latest scan.",
  "input_schema": {
    "type": "object",
    "properties": {
      "order_id": {
        "type": "string",
        "description": "Order id exactly as shown to the customer, format ORD-###### (e.g. ORD-004512).",
        "pattern": "^ORD-[0-9]{6}$"
      },
      "include_events": {
        "type": "boolean",
        "description": "Include carrier scan history. Default false; use only when the user asks for a history or a delay explanation."
      }
    },
    "required": ["order_id"],
    "additionalProperties": false
  }
}
```

Your code validates `order_id` against the pattern **before** touching the database. Validation is not a courtesy to the model; it is the boundary between a suggestion and an effect. The model then emits:

```json
{ "type": "tool_use", "id": "toolu_01Qk9xT2mB7", "name": "get_order_status",
  "input": { "order_id": "ORD-004512", "include_events": false } }
```

You answer with the id echoed exactly, and the result as text:

```json
{ "type": "tool_result", "tool_use_id": "toolu_01Qk9xT2mB7", "is_error": false,
  "content": [{ "type": "text", "text": "ORD-004512: in transit. Carrier: Northwind.\nExpected 2026-11-18. Last scan 2026-11-15 09:40, regional depot." }] }
```

<learning-block type="example" title="The same call, failing usefully">

```json
{ "type": "tool_result", "tool_use_id": "toolu_01Qk9xT2mB7", "is_error": true,
  "content": [{ "type": "text", "text": "No order ORD-004512 exists for this account. Closest match: ORD-004521, delivered 2026-11-02. Ask the user to re-check the number; do not retry this id." }] }
```

This is an error the model can act on: it names the failure, offers a candidate, states the next step, and forbids a pointless retry.

</learning-block>

## Errors, confirmation and timeouts

- **`is_error: true` is for failures the model should reason about** — not found, permission denied, invalid argument, upstream down. Include the failing input and the next step.
- **Never return an empty success on failure.** A `tool_result` saying "OK" when nothing happened teaches the model to trust a lie.
- **Confirmation belongs in the design.** For irreversible actions, expose a read-only preview and a separate commit tool, or require human approval in your own code. "Please confirm first" in a system prompt is a preference, not a control.
- **Time out and say whether the effect may have landed** — "request sent, outcome unknown" is different from "rejected before sending".
- **Parallel calls are the default.** The model may emit several `tool_use` blocks in one turn; run independent ones concurrently and return every `tool_result` in a single user message. A missing result stalls the loop.
- **`tool_choice`** steers selection: `auto`, `any`, a specific tool, or `none`. Use forced forms for a known first step, not as a permanent cage.
- **Observability is correctness.** Log tool name, arguments, duration, error flag and the paired ids. When a run goes wrong, that log is the only record of what the model was told.

## On the exam

<learning-block type="check" title="On the exam">

Expect a bad definition and a question about what the model will do with it. The recurring causes are: the description never said *when* to use the tool, the schema was too permissive, the error text was unactionable, or a write was not idempotent. Note the trap answer that "fixes" duplicate side effects with a prompt instruction instead of an idempotency key.

</learning-block>

## Try it yourself

**A support agent keeps calling `search_knowledge_base` with the query `"help"`. What is the most likely cause, and what would you change?**

<details><summary>Reveal the explanation</summary>

The parameter description probably says nothing about what belongs in the query, so the model has no rule for building one. Add: "A specific natural-language question of one or two sentences, including product names and error codes; never a bare word such as 'help'." Put a worked example in the description. Loosening the schema would make it worse, and a bigger model would only mask the ambiguity.

</details>

## Remember

- The model sees only `name`, `description`, `input_schema` and your `tool_result` — design for that reader.
- Pair each `tool_result` to its `tool_use_id`; return all results for parallel calls in one message.
- Validate in code and treat the schema as a boundary, not a guarantee.
- Use `is_error` for real failures, and write messages that say what happened and what to do next.
- Make writes idempotent and keep irreversible effects behind an explicit confirmation step.
- Log every call: name, arguments, duration, error flag and ids.
