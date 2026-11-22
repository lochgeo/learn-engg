## Prompt and Context Engineering: practice & mastery check

## Your study plan for today

This domain is one skill seen from three angles: decide what the model sees, phrase the request, then defend the boundary where text becomes data. A focused pass takes about **95 minutes**:

1. **Context engineering** — 25 min
2. **Prompt engineering** — 25 min
3. **Structured output and defensive parsing** — 20 min
4. **This mastery check** — 25 min

After each lesson, close it and rebuild its main table from memory. Mark it complete only when you can explain the failure each technique prevents, not just name the technique. Take a five-minute break before the check.

## First choose the tool

Most questions describe a failure; name it first, and the fix usually follows. Use this table as a lookup.

| Clue in the question | Reach for |
| --- | --- |
| Output keeps drifting in shape | JSON schema / structured outputs, or prefill |
| Output must trigger an action | Tool use with `input_schema`; `tool_choice` to force |
| Long documents plus one question | Documents first, question last |
| Same system prompt every call, latency matters | Stable prefix with `cache_control` |
| Conversation has grown to 80k tokens | Summarise/compact, re-inject ids and constraints |
| Corpus too large to pre-load | Just-in-time retrieval via identifiers and tools |
| Prompt full of "never" and "don't" | Rewrite as positive behaviour |
| Format must be imitated | Few-shot examples as real message turns |
| Hard multi-step reasoning | Extended thinking with a budget |
| Quick shape control, no thinking mode | Assistant prefill |
| Reply may be cut off | Check `stop_reason` for `max_tokens` first |
| Model declined the request | Handle `refusal`; do not auto-retry |
| Untrusted text in the prompt | Delimit as data, least privilege, validate output |
| Comparing two prompt versions | Held-out set, one variable, stable grader |

## Mastery check

Try each without looking first. For multiple-response questions, select every correct option.

### 1. Ordering a long-document prompt

You must answer one question over twelve policy PDFs. Where does the question go, and why?

<details><summary>Answer and reasoning</summary>

Last, after the documents. Long-context guidance puts long-form data near the top and the query at the end; Anthropic's own tests report gains of up to 30% for multi-document inputs. Material in the middle of a long context is recalled least reliably ("lost in the middle"), so the question is the worst thing to bury. A short restatement of the key constraints just before the question also helps them survive.

</details>

### 2. Cache invalidation

A system prompt begins with the current date and the user's name. Cache hit rate is near zero. What is the best fix?

A. Increase `max_tokens` so the cache has room.
B. Move the date and name into the final user turn; cache tools and the system prompt.
C. Put `cache_control` on every block.
D. Shorten the system prompt.

<details><summary>Answer and reasoning</summary>

**B.** Caching requires a byte-identical prefix, so any value that changes per request must come after the cache breakpoint. A adds nothing and may even hurt attention. C misunderstands breakpoints: there is a limited number, and marking volatile blocks does not make them stable. D may reduce cost but the prefix still changes every minute, so the cache still misses.

</details>

### 3. Reducing context rot

Which changes reduce context rot in a long support conversation? Select all that apply.

A. Remove documents and tool results that were never used.
B. Put the current question after the supporting material.
C. Raise the effort so the model explores more.
D. Repeat non-negotiable constraints after the history.
E. Append the whole history again "for completeness".

<details><summary>Answer and reasoning</summary>

**A, B and D.** Removing unused material raises signal density, correct ordering fights lost-in-the-middle, and repetition at the end is placement rather than redundancy. C is unrelated to context and adds no signal. E doubles the dilution and the chance of contradiction — exactly the failure being tested.

</details>

### 4. A biased example set

A classifier is given six few-shot examples, all labelled "approve". It now approves almost everything. What is the best next step?

A. Add ten more "approve" examples for consistency.
B. Add borderline reject and approve cases, each showing the reason for the decision.
C. Raise the effort.
D. Remove all examples and rely on the instructions.

<details><summary>Answer and reasoning</summary>

**B.** Examples teach the decision boundary as well as the format; the set currently teaches "always approve". A strengthens the bias. C does not change the prior the examples taught and makes results less reproducible. D discards useful format guidance and leaves the boundary undefined — usually worse than a balanced set.

</details>

### 5. Prefill or thinking?

A hard reconciliation task runs on a model with extended thinking, and the final answer must be JSON. What is the best approach?

A. Prefill `{` and also instruct "think step by step".
B. Enable extended thinking, keep reasoning in thinking blocks, and constrain the final answer with a schema; do not prefill.
C. Disable thinking and prefill `{`, because prefill guarantees JSON.
D. Ask for JSON in the prompt and strip fences with a regex.

<details><summary>Answer and reasoning</summary>

**B.** Thinking buys the reasoning; the schema buys the shape. A mixes mechanisms and can conflict with prefill support. C sacrifices the capability the task needs, and prefill only fixes the first character, not correctness. D is the fragile pattern: it works until the model adds a preamble or truncates.

</details>

### 6. Valid shape, wrong data

Structured outputs return a schema-valid invoice whose total does not match its line items. Which statements are true? Select all that apply.

A. Schema validation cannot catch semantic errors.
B. You should add business checks such as "line items sum to the total".
C. The API violated the schema.
D. The parser must have a bug.
E. A bounded repair loop that reports the failed business check can help.

<details><summary>Answer and reasoning</summary>

**A, B and E.** Constrained decoding guarantees structure, not truth. C is wrong: the object satisfied the schema, which is why it parsed. D is wrong for the same reason — the parser did its job. E is the practical response, provided the loop is capped and the error message is specific.

</details>

### 7. The truncated reply

A response has `stop_reason` set to `max_tokens` and ends mid-object. A lenient fallback parser returns the partial object as a success. What is wrong, and what should happen instead?

<details><summary>Answer and reasoning</summary>

The fallback disguises truncation as valid data, so downstream code trusts a half-filled record — the most dangerous outcome. Treat `max_tokens` as an error before parsing: raise the output limit where the task allows, ask for a shorter or split result, or reduce the input. Then validate and, if needed, retry once. Never return a partial object as success.

</details>

### 8. Injection with a refund tool

A support bot summarises inbound emails and can call a refund tool. Which combination is appropriate? Select all that apply.

A. Wrap the email in a named untrusted block and state that it is data, not instructions.
B. Rely on the tags alone, since they prevent injection.
C. Cap the refund amount server-side and require human confirmation.
D. Put the payment API key in the system prompt so the model can call it directly.
E. Authorise and validate the tool call on the server before acting.

<details><summary>Answer and reasoning</summary>

**A, C and E.** Delimiting reduces accidental instruction-following, while server-side caps, confirmation and authorisation contain the damage when it fails. B is the classic trap: a tag is a label, not a security boundary. D is the opposite of least privilege — a secret in context can be exfiltrated by the same injection you are defending against.

</details>

## Exam-day checklist

- Separate what the scenario **observes** from what it **asks**; the fix must address the stated failure.
- When "more context" appears as an option, check for dilution, ordering and contradictions first.
- Cache questions: find the token that changes per request; that is the prefix breaker.
- Structured-output questions: check `stop_reason` before blaming the parser.
- Injection questions: tags are mitigation, never the boundary.
- Prefill and extended thinking are alternatives with different jobs — do not pick both for one need.
- Every retry loop needs a cap and separate handling for refusal and truncation.
- For "best", "first" and "next" wording, prefer the smallest change that fixes the named cause.

## Remember

- Context is a budget: choose the smallest useful set, order it well, and cache the stable prefix.
- Long evidence first, question last, critical constraints repeated near the end.
- Prompts need role, task, constraints, format and examples — and positive instructions.
- Prefill controls the start; extended thinking buys reasoning; schemas control the shape.
- Check `stop_reason`, iterate content blocks by type, and validate with Pydantic or zod.
- Treat every model reply as untrusted input, and bound every repair loop.
