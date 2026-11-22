## A focused plan for this domain

Domain 5 is smaller than the big engineering domains, but it is unusually easy to lose marks on vocabulary: thinking versus effort, cache write versus cache read, cascade versus fallback. The plan below is about two hours and deliberately mixes concepts with arithmetic.

## Your study plan

1. **Tokens, context and non-determinism** — 25 min. Read the fundamentals lesson, then explain aloud why a 20-turn chat costs more than a 10-turn chat.
2. **The request dials** — 30 min. Sketch one request and label `max_tokens`, thinking mode, effort, streaming and cache breakpoint. For each, say what it does and does not change.
3. **Selection and cost together** — 30 min. Pick a model for two workloads from your own experience, then compute a cost per successful task with placeholder prices.
4. **This mastery check** — 35 min. Answer first, reveal second. For every wrong option, write the reason it is wrong.

Do not read the answers until you have committed to a choice. Each step feeds the next, and the mastery check assumes you have done the first three.

## First choose the tool

When a scenario question appears, scan it for the deciding clue before comparing model names.

| Clue in the question | Start with |
| --- | --- |
| High-volume, short, well-specified classification | Haiku, low effort, batch if asynchronous |
| Hard multi-step reasoning, or an error is expensive | Opus, higher effort, streaming if interactive |
| Balanced coding or tool use at interactive speed | Sonnet, medium or high effort |
| The same long instructions or documents on every call | Prompt caching on the stable prefix |
| Overnight bulk work where nobody waits | Batch API, 50% cheaper |
| "This model does not support assistant message prefill" | Drop the final assistant turn; move the rule into the system prompt |
| Slow first token, or a long wait after a fast start | Shrink or cache the input for TTFT; shorten the output or lower effort for total time |

## Mastery check

### 1. The shared budget

A request sends 180,000 input tokens and asks for a 30,000-token report on a model with a 200,000-token context window. What happens?

A. It succeeds, because the input is below the window.
B. It fails or truncates, because input and output share the window.
C. It succeeds, because output tokens are not counted against the window.
D. The API automatically summarises the input to make room.

<details><summary>Answer and reasoning</summary>

**B.** The context window covers input plus output, so 180,000 + 30,000 exceeds 200,000. A is the classic error of counting only the prompt. C invents a separate output allowance. D describes a feature the API does not perform silently — your application must trim or summarise.
</details>

### 2. Why outputs vary

The same prompt, sent twice with the same settings, produces slightly different wording. What is the best explanation?

A. The model learned from the first response.
B. Sampling and runtime non-determinism make exact repetition unlikely.
C. The API cache returned an older answer.
D. The second request used a different model tier.

<details><summary>Answer and reasoning</summary>

**B.** Generation samples from a probability distribution, and batching or infrastructure effects add variation. A is wrong because weights do not change during inference. C confuses prompt caching, which reuses input, not outputs. D is unsupported by the scenario, and a silent tier change is not normal behaviour.
</details>

### 3. The latency budget

Time to first token is 1.5 s and the answer is 900 tokens at 45 tokens per second, so the user waits about 21.5 s. The product needs 8 s. Which change addresses the problem most directly?

A. Enable streaming.
B. Cut the answer to about 250 tokens and lower effort.
C. Add prompt caching for the system prompt.
D. Send the request through the Batch API.

<details><summary>Answer and reasoning</summary>

**B.** Total latency is TTFT plus output tokens divided by OTPS; 750 fewer tokens at 45 tokens per second saves about 16.7 s. Streaming improves perceived responsiveness but not completion time. Caching might shave part of the 1.5 s but leaves roughly 20 s of generation. Batch is asynchronous and unsuitable for an interactive 8-second requirement.
</details>

### 4. Thinking and the ceiling

A request sets `max_tokens` to 2,048 and manual thinking with `budget_tokens` of 4,096. What is the correct fix?

A. Raise `max_tokens` above the thinking budget.
B. Lower `budget_tokens` to 512.
C. Set effort to low.
D. Disable streaming.

<details><summary>Answer and reasoning</summary>

**A.** Manual thinking budgets must be at least 1,024 and below `max_tokens`. B violates the 1,024 minimum. C and D do not affect the relationship: thinking tokens count toward the same output ceiling, which is why the ceiling must be raised. Adaptive thinking with an effort level is the modern alternative to a manual budget.
</details>

### 5. The prefill rejection

A conversation ends with an assistant message containing `"{"` to force JSON output. The API returns "This model does not support assistant message prefill". What should you do?

A. Add another user message after the assistant turn.
B. Remove the trailing assistant turn and use a structured-output schema or system instruction.
C. Increase `max_tokens`.
D. Enable extended thinking.

<details><summary>Answer and reasoning</summary>

**B.** Claude 4.6 and later models reject last-assistant-turn prefill. Structured outputs or a clear system contract achieve the same goal without an unsupported parameter. A might make the request legal but leaves a malformed conversation and still does not enforce a schema. C and D are unrelated to the error.
</details>

### 6. Cascade or fallback?

A service tries the fast tier first, checks a confidence score, and sends low-confidence items to the stronger tier. When the fast tier returns a 529 overload error, the service retries on another tier. Which statement is correct?

A. Both behaviours are cascades.
B. Both behaviours are fallbacks.
C. The confidence routing is a cascade; the overload retry is a fallback.
D. The confidence routing is a fallback; the overload retry is a cascade.

<details><summary>Answer and reasoning</summary>

**C.** A cascade routes on quality signals to save money; a fallback handles failure such as overload, refusal or timeout. A and B collapse two different mechanisms. D reverses the definitions, which is the most common trap in this topic.
</details>

### 7. Batch facts

Which statements about the Batch API are true? Select all that apply.

A. Eligible usage is charged at 50% of standard prices.
B. It supports streaming responses.
C. Results can arrive out of order and must be matched by `custom_id`.
D. Requests that are not processed within 24 hours expire.
E. Fast mode can be combined with batch requests.

<details><summary>Answer and reasoning</summary>

**A, C and D.** Batch is half price, keyed by `custom_id`, and expires after 24 hours. B is false because results arrive as a file rather than a stream. E is false because fast mode targets synchronous latency and is explicitly unsupported in batches.
</details>

### 8. Three workloads

Which choice best fits a nightly review of 300-page contracts where accuracy is critical and a six-hour window is acceptable?

A. Haiku with low effort and streaming.
B. Sonnet with low effort for interactive use.
C. Opus with high effort through the Batch API.
D. Haiku through the Batch API.

<details><summary>Answer and reasoning</summary>

**C.** Long-document synthesis and high error cost favour the strongest tier, and the overnight window makes batch the cheap delivery route. A and B optimise for latency nobody needs. D saves money but puts the hardest requirement — accuracy on long contracts — on the weakest tier.
</details>

### 9. Cost per successful task

Model A costs 2 units per attempt and succeeds 80% of the time; failed attempts need 12 units of human review. Model B costs 5 units per attempt and succeeds 96% of the time with no review. Which is cheaper per successful task?

A. Model A, because each attempt is cheaper.
B. Model B, at about 5.2 units versus about 5.5 for A.
C. They are equal once retries are counted.
D. Cannot be determined without the token prices.

<details><summary>Answer and reasoning</summary>

**B.** For A, expected cost per request is $2 + 0.2 \times 12 = 4.4$ units, and dividing by the 0.8 success rate gives 5.5 per success. For B, $5 / 0.96 \approx 5.21$. A is the per-call fallacy the exam is testing. C ignores the review cost. D is wrong because the comparison is already expressed in consistent units.
</details>

## Exam-day checklist

- Read every option for the words **input**, **output** and **total**; most context-window distractors hide there.
- Translate "faster" into either TTFT or OTPS before choosing an answer.
- Keep cache multipliers straight: 1.25 write for five minutes, 2 for one hour, 0.1 read, 0.5 batch.
- Check that a proposed optimisation is legal: batch has no streaming, fast mode has premium pricing and separate limits, prefill is gone on newer models.
- Prefer answers that measure — evals, gates, success rates — over answers that assert a model is "best".
- Treat absolutes such as "always deterministic" and "never hallucinates" as red flags.

## Remember

- The context window is input plus output, and history is resent on every turn.
- Sampling makes exact repetition unrealistic; validate outputs instead of demanding determinism.
- Thinking tokens are billed as output and consume `max_tokens`; effort is behavioural, not a strict budget.
- Choose the cheapest model that passes your evals inside the latency, context and modality limits.
- Cache the stable prefix, batch what can wait, and trim or summarise when the window fills.
