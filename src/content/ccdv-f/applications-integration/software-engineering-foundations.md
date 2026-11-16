## The model is a dependency, so treat it like one

A Claude call is a network request to a rate-limited, occasionally slow, occasionally overloaded service that returns variable output. That is not exotic — it is the same profile as any third-party API — yet teams routinely call it from inside a request handler with no timeout, no retry policy, no type safety and no trace ID. This lesson is the ordinary software engineering that makes the extraordinary part survivable.

Software engineering foundations is 7.4% of CCDV-F, the second-largest sub-skill here. Exam questions tend to be concrete: which error do you retry, where does the idempotency key live, why jitter.

## The big idea

Wrap the model behind a **narrow, typed, injected interface**, give every call a deadline and a retry policy, and make side effects idempotent. Everything else — queues, logging, config, review — is applying known practice to a component whose failure modes include "confidently wrong".

The organising question for any design choice: *if this call fails halfway, what state is the system in, and who cleans it up?*

## Start here

### Typed clients and narrow interfaces

Use the official SDK for your language: it gives typed request and response objects, typed exceptions, streaming helpers and automatic retries. Hand-rolling HTTP calls means re-implementing all of that, usually without the types.

Then define your own boundary, narrower than the SDK. Callers should ask for `classify(ticket)` and receive a domain object, not construct message arrays.

```python
from typing import Protocol

class Classifier(Protocol):
    def classify(self, ticket: str) -> Classification: ...

class ClaudeClassifier:
    def __init__(self, client, prompt, model_id):   # injected, not global
        self._client, self._prompt, self._model_id = client, prompt, model_id

    def classify(self, ticket: str) -> Classification:
        resp = self._client.messages.create(
            model=self._model_id, max_tokens=16,
            system=self._prompt, messages=[{"role": "user", "content": ticket}],
        )
        return Classification.parse(text_of(resp))   # validation lives here
```

Three payoffs: tests can pass a fake `Classifier` with no network, orchestration code never learns about content blocks, and changing model tier or prompt becomes a one-line construction change.

**Dependency injection** is the same idea applied to lifetimes. Pass the client and settings into the constructor so each environment, tenant or test supplies its own. Module-level singletons read environment variables at import time, which makes tests order-dependent and secrets awkward.

### Timeouts, retries and jitter

Every call needs a timeout, and the workflow needs a *deadline* that is shorter than the caller's — otherwise your retry budget outlives the user's patience. The SDK retries some failures by default (configurable via `max_retries`); know the setting rather than stacking a second retry loop on top and multiplying attempts.

```python
import random, time

RETRYABLE = {408, 409, 429, 500, 502, 503, 529}

def with_backoff(fn, *, attempts=4, base=0.5, cap=8.0):
    for i in range(1, attempts + 1):
        try:
            return fn()
        except Exception as exc:
            status = getattr(exc, "status_code", None)
            if status not in RETRYABLE or i == attempts:
                raise
            ceiling = min(cap, base * 2 ** (i - 1))
            time.sleep(random.uniform(0, ceiling))   # full jitter
```

Exponential growth keeps total wait bounded; **jitter** stops a fleet of workers that all received a 429 from retrying in lockstep and re-creating the spike. Honour a server-provided retry hint when one exists, and cap total attempts — an unbounded retry loop converts a blip into a bill.

### Idempotency

Retrying a *read* is safe. Retrying a *write* is not: a duplicated "issue refund" or "send email" is a customer-visible defect. The Messages API does not provide an idempotency-key header, so idempotency is your design problem.

The standard shape is an intent record with a deterministic key: write `refund:{ticket_id}` to your database with a unique constraint *before* calling any external system, record the outcome, and let replays check that row first. Where a downstream payment or mail provider supports its own idempotency key, pass the same key through. Retries then become safe by construction rather than by luck.

### Rate limits and queues

Limits apply to requests per minute and tokens per minute, counted at organisation level and varying by model tier, so check the current docs for numbers. Useful habits:

- Use a client-side token bucket so bursty workloads smooth out before they hit 429.
- Give interactive traffic and batch jobs separate budgets or keys, so a backfill cannot starve the chat product.
- Move slow, non-interactive work to a queue with retries, a dead-letter queue and a visibility timeout.
- Use the Batch API for large, latency-tolerant workloads; it is built for volume rather than immediacy.
- Acknowledge webhooks fast (return 2xx) and do the model work asynchronously, or the sender will retry and duplicate the job.

### SSE versus WebSockets

| Need | Choose | Why |
| --- | --- | --- |
| Stream model text to a browser | Server-sent events | One-way, plain HTTP, reconnects automatically, proxy-friendly |
| Live voice or interruption ("barge-in") | WebSockets | Bidirectional, low-latency, handles control frames |
| Fire-and-forget long job | Queue plus polling or webhook | Decouples user request from model latency |

Token streaming needs only server-to-client flow, so SSE is the simpler correct answer. Reach for WebSockets when the *client* must also be sending continuously — audio, collaborative editing, real-time interruption.

### Structured logging and trace IDs

Log JSON, not prose. One line per model call, with a `trace_id` propagated from the inbound request through every tool call, plus `prompt_version`, `model_id`, token counts, latency, `stop_reason` and outcome. Then a support engineer can reconstruct an entire interaction from one identifier.

Log metadata by default and full prompt text only behind an explicit, reviewed policy with redaction. The fastest way to leak personal data is a debug log of raw messages.

### Configuration, CI/CD and review

Configuration lives outside code: model identifier, prompt version, effort level, feature flags, timeouts. Validate it at startup so a typo fails immediately instead of at 2 a.m. (The configuration lesson goes deeper.)

CI should type-check, lint, run unit tests against recorded fixtures, and run the evaluation gate. Recorded responses keep unit tests fast and deterministic; the evaluation set is where real model variation is measured.

In code review, read prompt diffs the way you read code diffs: does the change alter behaviour, is it covered by an evaluation case, could it increase token usage, does it widen a tool's permissions? Reject secrets in diffs, bare `except` blocks around model calls, and any place where `stop_reason` is ignored.

<learning-block type="concept" title="The retry amplification trap">

One retry layer is a resilience feature. Two are an amplifier. If the SDK retries three times and your wrapper retries three times and your queue retries three times, a single failure can become twenty-seven calls — enough to exhaust a rate limit and turn a transient fault into a sustained one. Pick one owner for retries per call path and document it.

</learning-block>

## Worked example

A support agent calls Claude, then posts the reply to a helpdesk API. The Claude call times out after the reply was generated but before the response was read, so the worker retries — and the customer receives the same reply twice.

The fix has three parts. A per-call timeout plus an overall deadline so the worker gives up quickly. An idempotency record keyed on the ticket and reply revision, written before the helpdesk post. And one retry owner, so the queue's retry re-checks that record instead of blindly re-posting. None of this involves prompting; all of it decides whether the feature is trustworthy.

<learning-block type="check" title="On the exam">

Know the retryable set (408, 409, 429 and 5xx), the reason for jitter (decorrelate retries), and why the Messages API forces you to design idempotency yourself. For transport questions, map one-way token streaming to SSE and bidirectional audio to WebSockets. For observability, remember that a trace ID plus the prompt/model version triple is what makes an incident diagnosable.

</learning-block>

## Try it yourself

**Five hundred workers all receive a 429 at the same moment and all sleep for exactly two seconds. What happens, and what does jitter change?**

<details><summary>Reveal the explanation</summary>

They wake together and fire 500 requests simultaneously, re-triggering the rate limit — a self-inflicted thundering herd. Fixed delays synchronise a fleet; random jitter spreads wake-ups across the interval, so the offered load ramps instead of spiking. Jitter does not reduce total attempts, it reshapes them in time. Combine it with a cap and a server-provided retry hint, and add queue-level concurrency limits so the herd never forms in the first place.
</details>

## Remember

- Put the model behind a narrow typed interface and inject client, config and prompts.
- Set a per-call timeout and an overall deadline; let exactly one layer own retries.
- Back off exponentially with jitter, retry only 408/409, 429 and 5xx, and cap attempts.
- Side effects need idempotency keys of your own design — the Messages API does not provide one.
- SSE for one-way streaming, WebSockets for bidirectional interaction, queues for long work.
- Log structured events with a trace ID and the prompt/model version triple; keep secrets and raw personal data out.
