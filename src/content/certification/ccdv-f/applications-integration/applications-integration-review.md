## Your study plan for today

Applications and Integration is a third of the exam, but it is not a third of the material to memorise. It is a small set of decisions — where the model stops, how the call is shaped, how change is controlled — applied to many scenarios. A focused pass takes about **2 hours 20 minutes**, with a short break in the middle:

1. **Requirements and the life cycle** — 35 min. Read both lessons, then write a five-line requirement set for a feature you know, with one acceptance threshold and one guarantee that must live in code.
2. **API mechanics** — 40 min. Drill the six stop reasons, the retryable error classes, and the streaming event order until you can reproduce them from memory.
3. **Engineering and configuration** — 30 min. Be able to explain timeouts, jitter, idempotency, pinned model identifiers and canary rollback without notes.
4. **Design and this mastery check** — 35 min. Sketch the support-assistant layers from memory, then answer the questions below from a blank page.

Mark a lesson complete only when you can explain *why* a design choice applies, not just name it. The questions below are deliberately scenario-shaped, because the exam is too.

## First choose the tool

| Clue in the question | Reach for |
| --- | --- |
| Outputs vary between runs, quality must be judged | Acceptance thresholds over an evaluation set |
| Requirement says "must always" or "must never" | Deterministic enforcement in code, model output treated as untrusted |
| User is waiting and reading prose | SSE streaming, budgeted on time-to-first-token |
| Large volume, nobody waiting | Batch API |
| Model asks to run a function | Execute the tool, return `tool_result` with matching id, loop |
| Answer stops mid-sentence | `stop_reason` was `max_tokens`; treat output as incomplete |
| Response is 429 or 529 | Retry with capped exponential backoff and jitter |
| Response is 400, 401, 403 or 413 | Fix the request or credential; do not retry |
| Long, stable instructions resent every call | Prompt caching with a breakpoint after the stable prefix |
| A 40-page document for one question | Retrieval and reranking, not the whole corpus |
| A bad release must be undone in seconds | Flip the flag or registry to the previous pinned version |
| Client must interrupt mid-answer (voice) | WebSockets rather than SSE |

## Mastery check

Try each without looking first. For multiple-choice items, be able to say why the other options are wrong — that is where the marks actually live. Each answer below explains the reasoning, so read it even when you chose correctly.

### 1. Classify the requirement

A ticket assistant must route messages to one of five queues, extract order numbers, and keep p95 time-to-first-token under two seconds. Which is the non-functional requirement?

- **A.** Route to one of five queues
- **B.** p95 time-to-first-token under two seconds
- **C.** Extract order numbers
- **D.** Draft a reply for the agent

<details><summary>Answer and reasoning</summary>

**B.** Latency is a quality attribute of *how* the system performs, not a description of what it does. A, C and D are functional: they name behaviours with observable outputs. The distractor pattern to notice is that non-functional requirements often contain a number, but not every numbered requirement is non-functional — "five queues" is a scope fact.
</details>

### 2. Where does the guarantee live?

"Never refund more than the customer originally paid." Where should this be enforced?

- **A.** In the system prompt, in capitals
- **B.** In an orchestrator check plus a billing service that computes the ceiling
- **C.** In a few-shot example showing a refusal
- **D.** In a post-launch review of sampled conversations

<details><summary>Answer and reasoning</summary>

**B.** The ceiling is arithmetic over account data, so a domain service computes it, and the orchestrator rejects any `issue_refund` tool call above it. A and C are probabilistic mitigations: a model under pressure can miss an instruction or a single example. D detects harm after a customer has received money. Prompt wording explains the rule to the user; code makes it true.
</details>

### 3. The half-written answer

A response arrives with HTTP 200 and `stop_reason: "max_tokens"`. What is the correct handling?

- **A.** Display the text; the request succeeded
- **B.** Treat the output as incomplete — raise the ceiling, continue, or fail closed
- **C.** Retry the identical request unchanged
- **D.** Switch to a more capable model tier

<details><summary>Answer and reasoning</summary>

**B.** `max_tokens` means the model hit *your* ceiling, so the content is truncated, not wrong and not an error. A ships a half-sentence to a customer. C repeats the same setting and truncates again, wasting tokens. D does not address a budget you set too low; a bigger model with the same ceiling truncates too. The exam angle: stop reason is part of the response contract, not an exception path.
</details>

### 4. What do you retry?

Select all that your client should retry automatically with backoff: **400**, **401**, **429**, **500**, **529**.

<details><summary>Answer and reasoning</summary>

**429, 500 and 529.** Rate limiting and transient server or capacity faults are the only categories where the same request may succeed later. **400** is a malformed request — bad parameter, bad schema, unusable input — and will fail identically forever.

**401** is a credential problem: retrying cannot fix a wrong key, and a hot loop of unauthorised calls is noise that can mask the real fault. Remember that 429 carries a retry hint worth honouring, and that jitter prevents a fleet from retrying in lockstep.
</details>

### 5. Mode for a nightly backfill

Every night, 400,000 archived emails must be summarised and tagged. No human watches the job, and results are read the next morning. Which mode?

- **A.** One synchronous request per email from the web tier
- **B.** SSE streaming per email
- **C.** The Batch API
- **D.** WebSockets to a worker pool

<details><summary>Answer and reasoning</summary>

**C.** The workload is large, latency-tolerant and non-interactive — exactly the Batch API's shape, which is built for throughput and cost efficiency. A works but couples a bulk job to request handlers and invites timeout and rate-limit pain. B optimises perceived latency nobody is perceiving, while adding stream-handling complexity. D solves bidirectional interaction, which is not the problem here.
</details>

### 6. Making caching actually hit

A support assistant sends the same 6,000-token policy section and tool definitions with every request, followed by the user's question. Which change gives the best cache behaviour?

- **A.** Put the user's question first, then the policy section
- **B.** Keep system prompt, tool definitions and policy text byte-stable at the start, mark a cache breakpoint, and put variable content last
- **C.** Enable streaming, which caches output tokens
- **D.** Raise the output ceiling so identical prefixes are reused

<details><summary>Answer and reasoning</summary>

**B.** Prompt caching works on stable prefixes: anything that changes before the breakpoint invalidates the cached portion. A guarantees a miss on every request. C confuses transport with caching — streaming affects delivery, not prefix reuse. D is unrelated to caching and would not make a prefix reusable. The practical discipline is to order a prompt from most stable to least stable.
</details>

### 7. Shipping a prompt change

A prompt edit improves the golden set by four points. How should it reach production?

- **A.** Edit `triage/v7.md` in place and redeploy
- **B.** Create `v8`, pass the evaluation gates, canary it on a small percentage, and roll back by flipping the registry if metrics regress
- **C.** Deploy to all traffic; the rollback button is ready
- **D.** Lower the effort level in production instead

<details><summary>Answer and reasoning</summary>

**B.** A is the trap that destroys auditability: last week's outputs can no longer be explained because the prompt changed underneath them. C relies on detection being immediate, and it is not; every user is exposed during the window. D changes an unrelated setting and does not deliver the improvement. Immutable prompt versions plus a canary plus a configuration-level rollback is the pattern the life cycle expects.
</details>

### 8. The duplicate email

A worker calls Claude, the response is generated, then the request times out before the reply is read. The worker retries, and the customer receives the same email twice. What is the most robust fix?

- **A.** Increase the timeout
- **B.** Add more retries with jitter
- **C.** Write an idempotency record keyed on ticket and reply revision before sending, and check it on replay
- **D.** Ask the model to check whether the email was already sent

<details><summary>Answer and reasoning</summary>

**C.** Timeouts are inevitable, so the fix must make repetition harmless: a unique intent record turns the second attempt into a no-op. A reduces frequency but never eliminates the window. B increases the chance of duplication. D asks a stateless model to know system state it cannot see — a category error. Note that the Messages API has no idempotency header, so this record is your responsibility.
</details>

### 9. Quality sagged, nothing changed

Routing accuracy falls from 0.93 to 0.81 over a week. Error rate, latency and cost are flat, and no code was deployed. What should you check first?

- **A.** Whether the API is down
- **B.** The prompt, model and corpus versions in recent traces, then the input distribution
- **C.** Whether users are submitting worse tickets
- **D.** Whether `max_tokens` is too low

<details><summary>Answer and reasoning</summary>

**B.** Flat error rates rule out an outage (A). Behaviour-changing artifacts include the retrieval corpus, and a stale corpus after a product rename is the classic silent regression. Traces carry the version triple precisely so this question is answerable. C is a hypothesis to test with data, not a first check — and it is unfalsifiable as stated. D would show up as `max_tokens` stop reasons, not as wrong routing.
</details>

## Exam-day checklist

- Read the scenario twice and identify **who is waiting** — that usually settles sync, streaming or batch.
- When two options both "work", prefer the one that guarantees behaviour in code over the one that instructs the model.
- For any API question, ask whether the answer concerns `stop_reason`, retryability, or block structure; most do.
- Treat "edit in place", "deploy to 100%", "retry the 400" and "put the rule in the prompt" as red flags.
- If an option depends on a specific model version, price or parameter limit, be suspicious — the exam favours durable principles.

## Remember

- Requirements: separate functional from non-functional, and put every guarantee in code.
- Life cycle: version prompt, model and dataset together; evaluate in CI; roll back to the known-good triple first.
- API: stateless messages, typed content blocks, six stop reasons, retry only 429 and 5xx.
- Engineering: narrow interfaces, timeouts, jittered backoff, one retry owner, idempotent side effects.
- Design: layers with contracts, a degradation ladder, retrieval scoped by permission, cost caps.
- Configuration: typed validation at startup, pinned models in production, canary, audited changes.
