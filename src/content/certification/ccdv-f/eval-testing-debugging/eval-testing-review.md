## A demo is not evidence

One impressive answer in a notebook proves that the system *can* work. It says nothing about the invoice with a missing currency, the customer who changes language mid-thread, or the prompt edit that fixes one slice while quietly breaking another. Evaluation is how you replace "looks good to me" with a number you can defend — and testing is how you keep that number from drifting.

This check spans evaluation, testing and debugging together, because in practice they are one loop: measure, diagnose, change, measure again.

## Your study plan

Budget about **100 minutes**, in four passes:

1. **Eval design** — 25 min. Build a small golden set (a fixed collection of inputs with agreed expected outcomes): representative inputs, edge cases, and the rubric or assertion for each.
2. **Testing and regression** — 25 min. Version prompts and eval sets together; practise reading a score by slice — a subgroup such as refunds or one language — not just the average.
3. **Debugging with evidence** — 25 min. Work the taxonomy: status codes, `stop_reason`, validator errors, retrieval scores, token counts, latency.
4. **This mastery check** — 25 min. Answer from a blank page, then explain each wrong option back to yourself.

## First choose the tool

Most exam scenarios hand you a symptom and ask for the next move. Use this table to go from the clue in the question to the right starting point:

| Clue in the question | Start with |
| --- | --- |
| A field has one correct value | Deterministic assertion, not a judge |
| A summary has many acceptable forms | Rubric-guided LLM judge, calibrated to human labels |
| You changed the prompt | Run the full eval set and diff per slice against the previous version |
| Scores move between identical runs | Repeat runs and report variance or a tolerance |
| "It answered but cited nothing" | Retrieval recall and context inspection |
| `stop_reason` is `max_tokens` | Raise or restructure output; truncation is not an error to retry |
| `stop_reason` is `refusal` | Policy handling; a retry cannot change a classifier decision |
| A tool call keeps failing validation | Log the arguments, tighten the schema, return an `is_error` tool result |
| 429 with a `retry-after` header | Back off and reduce concurrency |
| 529 or repeated 5xx | Bounded retry, then degrade or fall back |
| A user sees a spinner forever | Define timeout, retry and honest failure states |

## Mastery check

Answer from memory first, then open each reveal to check the reasoning — a question you get right by reading the options is not yet learned.

### 1. Choosing the measure

A pipeline extracts `invoice_total` and `currency` from PDFs. Which evaluation gives the most trustworthy signal?

- A. Field-level assertions against a golden set with known values
- B. A single LLM judge scoring each extraction from 1 to 10
- C. Manual review of three sample invoices
- D. Checking that the output parses as JSON

<details><summary>Answer and reasoning</summary>

**A.** The task has a correct answer, so exact or normalised comparison is cheap, stable and explainable. **B** adds judge noise to a problem that does not need judgement, and a 1–10 score hides which field was wrong. **C** is a demo, not a measurement: three samples cannot cover layouts, currencies or missing fields. **D** is necessary but weak — `{"invoice_total": 0}` parses perfectly while being wrong.
</details>

### 2. Multiple response: a defensible eval set

Which practices make an eval set trustworthy? Select all that apply.

- A. Sample real traffic, including known failures and edge cases
- B. Hold out cases that were never used to tune the prompt
- C. Version the eval set alongside the prompt it measures
- D. Keep only the cases the current prompt already passes
- E. Let the same model generate the expected answers without review

<details><summary>Answer and reasoning</summary>

**A, B, C.** Representation, hold-out discipline and versioning are what let a score mean something over time. **D** is survivorship bias: the set becomes easiest exactly where the system is weakest, and regressions disappear from view. **E** is circular — the model's own output becomes the standard, so errors are graded as correct.
</details>

### 3. The average hides the regression

Prompt v8 lifts the overall score from 78 to 81, but the refunds slice falls from 92 to 61. What is the right next step?

- A. Ship, because the aggregate improved
- B. Inspect the refunds failures before deciding; judge per slice, not only overall
- C. Delete the refunds cases because they are outliers
- D. Lower the effort level until the slice recovers

<details><summary>Answer and reasoning</summary>

**B.** An average is a weighted summary, and a small slice can collapse while the total rises. Slices expose that trade-off. **A** ships a known regression because the headline number looks better. **C** removes the evidence rather than the defect. **D** treats run-to-run noise as the cause without checking whether the failures are systematic; changing generation settings may alter wording, not fix a missing instruction.
</details>

### 4. Judging open-ended output

You need to grade support replies for tone and completeness. What makes an LLM judge credible?

- A. A written rubric plus calibration against a sample of human-labelled cases
- B. Using the same model that wrote the replies, with no checks
- C. One run with no written criteria
- D. Replacing all deterministic assertions with judge scores

<details><summary>Answer and reasoning</summary>

**A.** A rubric makes the criteria explicit, and calibration measures whether the judge agrees with people before you trust thousands of verdicts. **B** is self-grading without evidence of validity. **C** gives no criteria and no calibration, so it cannot distinguish a good reply from a familiar one. **D** throws away cheap, exact checks where they exist; judges are for qualities that assertions cannot capture.
</details>

### 5. Multiple response: symptom to signal

Which mappings are correct? Select all that apply.

- A. `stop_reason: "max_tokens"` means the response was truncated
- B. An empty retrieval result means the model refused
- C. A `tool_use` block obliges your loop to return a `tool_result`
- D. A 429 is retryable with backoff
- E. A schema validation failure means the API rejected malformed JSON

<details><summary>Answer and reasoning</summary>

**A, C, D.** These follow directly from the response contract. **B** confuses two different failures: a refusal comes from a safety classifier and appears in `stop_reason`, while an empty retrieval is a context problem. **E** is wrong because the API does not enforce your application schema; validation happens in your code, after a successful response.
</details>

### 6. Short scenario: two kinds of "busy"

One request returns 429 with a `retry-after` header; another returns 529. Explain the difference and the response to each.

<details><summary>Answer and reasoning</summary>

429 is a rate limit on your account or key: you are sending too much, so honour `retry-after`, add jittered backoff and reduce concurrency or batch size. 529 means the service is overloaded: the request may be fine, so retry a bounded number of times with backoff, then degrade gracefully or fall back. Both are transient; neither justifies an immediate tight loop, and neither should be confused with a 400, which will fail identically every time.
</details>

### 7. Noise in the measurement

Two runs of the same eval set with identical requests produce different scores. What is the sound conclusion?

- A. The eval set is invalid and must be rewritten
- B. Identical requests guarantee identical output, so the harness is broken
- C. Some variation is expected; repeat runs and report a range or tolerance
- D. Pin the model version and assume the variation disappears

<details><summary>Answer and reasoning</summary>

**C.** Identical requests reduce sampling randomness but do not promise bit-identical output across runs and infrastructure. Repeats turn a misleading single number into a distribution. **A** overreacts: variance is information, not invalidity. **B** asserts a guarantee the API does not make. **D** confuses a stable model version with run-to-run variation, which also comes from infrastructure and batching.
</details>

### 8. Short scenario: the flaky tool call

A tool occasionally receives `{"quantity": "two"}` when the schema expects an integer. Give a diagnosis-and-repair sequence.

<details><summary>Answer and reasoning</summary>

Reproduce with the exact request, then log the raw `tool_use` input and the validator error rather than the rendered answer. Validate in your handler, return a `tool_result` with `is_error: true` that names the offending field and the expected type, and let the model retry within a bounded loop. Then reduce recurrence: tighten the schema and descriptions, use enums where the domain is closed, add a worked example, and add this input to the eval set. Do not silently coerce bad values or scrape JSON out of prose — both hide the defect.
</details>

### 9. Where the cost went

A chat feature's cost per conversation rises every turn, while `max_tokens` stays fixed. Which explanation fits best?

- A. Output tokens grow because the cap is too high
- B. The whole history is resent each turn, so input tokens accumulate
- C. The model is retrying internally without telling you
- D. Caching has been disabled by the system prompt

<details><summary>Answer and reasoning</summary>

**B.** Stateless APIs resend the conversation, so input grows with each turn; `max_tokens` limits only the completion. The fix is context management — summarise or compact, retrieve fewer chunks, cache stable prefixes — not a smaller output cap. **A** contradicts the fixed cap. **C** invents hidden retries; you would see them in latency and request logs. **D** names a real cost factor, but disabling a cache does not by itself produce steady per-turn growth.
</details>

## Exam-day checklist

Run through these in the last few minutes before the exam:

- Ask whether the task has one correct answer; if so, assert, do not judge.
- Check that the eval set is representative, held out and versioned.
- Read scores per slice before trusting an average.
- Calibrate any judge against human labels and keep the rubric explicit.
- Reproduce with the smallest failing input, then read status code, `stop_reason`, validator message and retrieval score before editing the prompt.
- Retry only transient faults, with backoff, jitter, a cap and idempotency.
- Design the user-facing failure message at the same time as the happy path.

## Remember

- A demo shows possibility; an eval set shows reliability.
- Deterministic checks for deterministic facts, rubrics for qualities.
- Average scores conceal slice regressions; version prompts and sets together.
- `stop_reason` separates truncation, refusal, tool use and a natural finish.
- Retry transients, never 400s; honour `retry-after`; cap the loop.
- Trace requests with ids, prompt versions and token counts.
- Honest errors beat confident fabrication and endless spinners.
