## Never trust a string that should have been an object

The model's native output is text. Your program wants an object with fields, types and an enum. Between those two facts sits the least glamorous and most failure-prone part of an LLM feature: turning a reply into data you can trust. Most "the AI integration is flaky" bugs are parsing bugs wearing a costume.

Structured output and defensive parsing carry about **2.6%** of CCDV-F. Expect questions that hand you a response object and ask which branch is missing, or that show a retry loop and ask why it never terminates.

## Start here: two routes to structure

| Route | How it works | Use it when |
| --- | --- | --- |
| Structured outputs | You supply a JSON schema; the API constrains generation so the reply matches it | the reply *is* the data (extraction, classification) |
| Tool use | You define a tool with an `input_schema`; the model returns a `tool_use` block | the model must choose an action, with arguments |
| Prefill plus parsing | Start the assistant turn with `{` and parse the rest | older models only; Claude 4.6 and later reject assistant prefill |

With structured outputs, the shape is guaranteed but the *content* is not: a schema-valid object can still name the wrong vendor, invent a total, or pick an enum value that is legal but false. Validation confirms shape; it never confirms truth.

Tool use is the portable route. The `input` of a `tool_use` block matches your `input_schema`; you execute, then return a `tool_result` in the next user turn. Forcing `tool_choice` to one tool makes it behave like structured extraction. Check the current docs for which structured-output features are generally available versus beta — that changes.

### Design the schema for the failure, not the demo

- Mark truly required fields as required; make genuinely optional ones nullable rather than absent.
- Use `enum` for closed sets and explain each value in its description.
- Prefer flat objects over four levels of nesting; deep schemas produce more semantic errors.
- Write descriptions as instructions: "total in minor units (pence), integer" prevents a whole class of bugs.
- Do not model a union of five shapes if two fields and an enum will do.

## Parse at the boundary, once

Treat model output like an HTTP body from an untrusted server: validate at the edge, then pass typed objects inward.

```python
from typing import Literal
from pydantic import BaseModel, Field

class LineItem(BaseModel):
    description: str
    amount_pence: int = Field(ge=0)

class Invoice(BaseModel):
    vendor: str
    total_pence: int = Field(ge=0)
    currency: Literal["GBP", "USD", "EUR"]
    line_items: list[LineItem] = Field(min_length=1)

invoice = Invoice.model_validate_json(reply_text)  # raises on bad shape
```

Pydantic's `model_validate_json` gives a typed object or a structured error. In TypeScript, zod's `safeParse` does the same without throwing. The point is that no `any` and no `as Invoice` crosses the boundary — a cast only silences the compiler.

### Read `stop_reason` before you read `content`

| `stop_reason` | What happened | Correct handling |
| --- | --- | --- |
| `end_turn` | normal completion | validate and use |
| `max_tokens` | output cut off | do **not** parse; raise the limit, shorten the ask, or split the task |
| `tool_use` | model wants a tool | execute, append `tool_result`, call again |
| `refusal` | model declined | surface it, log it, do not auto-retry the same request |
| `stop_sequence` | your stop string matched | expected only if you set one |

Truncated JSON is the classic silent failure: a lenient regex can "recover" a plausible partial object and hide the truncation. Never let a partial object look like a successful one.

### Content is a list of blocks

`response.content` is a list, not a string. It can hold text blocks, `tool_use` blocks, thinking blocks, and citation-bearing text. Code that does `response.content[0].text` works until the first tool call and then raises.

```python
text = "".join(b.text for b in response.content if b.type == "text")
calls = [b for b in response.content if b.type == "tool_use"]
```

Collect by type. Concatenating several text blocks is usually right; if order matters, keep the list.

### Code fences are a symptom

A model that wraps JSON in a markdown fence is telling you the prompt asked for "JSON" as prose. Three fixes, in order of preference: use structured outputs, force a tool, or prefill the assistant turn with `{`. A regex strip is a patch, not a design — it fails on prose preambles, nested fences and trailing commentary.

## Repair and retry, with a limit

Even with a schema, semantics can fail your own checks: line items that do not sum to the total, a date in the future. The robust pattern is a bounded repair loop.

```ts
async function extract(raw: string): Promise<Invoice> {
  let input = raw;
  for (let attempt = 0; attempt < 3; attempt++) {
    const res = await callModel(input);
    if (res.stop_reason === "refusal") throw new RefusalError(res);
    if (res.stop_reason === "max_tokens") throw new TruncatedError(res);
    const parsed = Invoice.safeParse(JSON.parse(res.text));
    if (parsed.success) return parsed.data;
    input = `${raw}\n\nYour previous reply failed validation:\n${parsed.error.message}\nReturn corrected JSON only.`;
  }
  throw new ValidationError("extraction failed after 3 attempts");
}
```

Three rules make this safe: a hard attempt cap, the validation error fed back in compact form, and a distinct exception for refusal and truncation so they are not retried as malformed JSON. Log the raw reply on failure — without it you cannot tell a prompt bug from a schema bug.

## Streaming, citations, and partial data

- **Streaming**: text arrives as `text_delta` events; tool arguments arrive as `input_json_delta` fragments that form valid JSON only at the end. Accumulate, parse once, and never validate mid-stream. Show a skeleton rather than parsing fractions.
- **Citations**: with citations enabled on document blocks, text blocks carry a `citations` array with `cited_text` and character indices. Verify each cited span exists in the source; a citation proves provenance, not correctness.
- **Type-safe boundaries**: parse model output once, at the edge, into your domain type. Everything downstream — UI, database, billing — sees the type, never the raw string.

<learning-block type="check" title="On the exam">

- A crash on `content[0].text` → the first block was `tool_use` or thinking.
- A "successful" parse with missing fields → check `stop_reason`; it was probably `max_tokens`.
- A retry loop that never ends → no attempt cap, or refusals retried as validation errors.
- A schema-valid but wrong object → shape validation is not semantic validation; add business checks.
- Random parse failures under load → streaming deltas parsed before completion.

</learning-block>

## Try it yourself

A classifier returns `stop_reason: "end_turn"` and the text `Sure! Here is the JSON: {"label": "billing"}` wrapped in a markdown fence. Your parser throws. What are the two best fixes, and which would you ship?

<details><summary>Reveal the explanation</summary>

First, stop asking for JSON in prose: use structured outputs with an enum schema for `label`, or a forced tool whose `input_schema` has that enum. The fence and preamble disappear because the constraint applies at generation, not at parsing. Second, if that route is unavailable, prefill the assistant turn with `{` so the reply must start inside the object. A regex that strips fences is a fallback, not a fix: it breaks on a nested fence, a different preamble, or a truncated reply. Ship the schema route, keep the strip as a last-resort guard, and still check `stop_reason` and validate.

</details>

## Remember

- Structured outputs guarantee shape; they never guarantee the content is true.
- Tool use is the portable route to structure, and `tool_choice` can force it.
- Check `stop_reason` first: `max_tokens` means truncated, `refusal` means declined — neither is a parse error.
- Iterate over `content` blocks by type; never assume the first block is text.
- Validate with Pydantic or zod at the boundary, then pass typed objects inward.
- Bound every repair loop, feed back a compact error, and log the raw reply.
