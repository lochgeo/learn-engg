## Design the seams, not the prompt

Prompts are the visible part of a Claude application and the least important part of its architecture. What decides whether the system is fast, affordable, auditable and safe is where you put the seams: what streams, what is retried, what is cached, what a human approves, and what happens when the model is unavailable or wrong.

Application design is the heaviest sub-skill in this domain at 8.6% of CCDV-F. Expect scenario questions: here is a workload, which mode, which layer, which failure plan. We will build the layer map, choose a processing mode, then walk a full support-assistant design from requirements to evaluations.

## The big idea

A production Claude application is **layers with explicit contracts**. The model sits in the middle, wrapped by a gateway that owns retries and accounting, driven by an orchestrator that owns control flow, fed by prompt assembly and retrieval, and bounded by business logic that owns every irreversible decision.

Two rules generate most of the design:

1. **The model proposes, the system disposes.** Anything with a side effect or a guarantee is executed by code after validation.
2. **Every layer must have a defined behaviour when the layer below misbehaves.** Timeout, refusal, truncation, empty retrieval — each needs a plan, not a stack trace.

## Start here

### The layers

| Layer | Owns | Must not own |
| --- | --- | --- |
| Edge/API | Auth, tenant scoping, rate limits, trace ID creation | Prompt wording |
| Orchestration | Turn loop, tool dispatch, budgets, retries, stop-reason handling | Business rules |
| Prompt assembly | System prompt, few-shot examples, retrieved context, output contract | Live prices or eligibility logic |
| Retrieval | Chunking, embedding, search, reranking, citation, ACL filtering | Answer generation |
| Model gateway | SDK client, pinned model, timeouts, token accounting, fallbacks | Conversation state |
| Domain services | Pricing, entitlement, refunds, ticketing | Natural-language generation |
| Cross-cutting | Config, structured logs, evaluations, cost dashboards | — |

The prompt-assembly boundary is the one teams blur most. If a number in the prompt must be exact, it should be computed by a domain service and passed in as data — never derived by the model from prose.

### Synchronous, streaming, batch, async

| Mode | Use when | Cost of choosing it |
| --- | --- | --- |
| Synchronous | Short bounded task, result needed immediately (classification, extraction) | User waits; long generations risk timeouts |
| Streaming (SSE) | User reads while text is produced | Mid-stream failures are awkward to recover; needs a final-message check |
| Batch API | Large, latency-tolerant volume (nightly backfill, bulk tagging) | No interactivity; results arrive later |
| Queue plus webhook | Long job with UI elsewhere, or fan-out work | More infrastructure; duplicate delivery must be handled |

Streaming improves *perceived* latency without reducing total latency, so pair it with a time-to-first-token budget rather than a total-duration budget. Batch trades immediacy for throughput and cost efficiency; it is the wrong tool when a human is watching.

### Retrieval, caching and human oversight

Retrieval is a security boundary as much as a quality feature. Filter by the caller's permissions **inside the query**, not by instructing the model to ignore documents it should not see. Then rerank, cite, and keep a freshness signal so stale documents can be identified.

Caching happens at two levels. Prompt caching rewards a stable prefix: put the system prompt, tool definitions and long reference material first, mark a cache breakpoint, and vary only the user-specific tail. Application caching is different — cache idempotent lookups with a TTL, but never serve one customer's personalised answer to another.

Human-in-the-loop is a design decision about reversibility. Drafts that a human edits before sending need only a review UI. Irreversible actions — refunds, deletions, outbound legal statements — need an explicit approval gate that the orchestrator enforces, with the tool withheld from the model until approval is granted.

### Graceful degradation

Define a ladder and make each rung observable:

1. Primary model, full context.
2. Smaller/faster tier with a shortened context (quality drop, still useful).
3. Cached answer or curated FAQ match, clearly labelled.
4. Human handoff or a queued retry with an honest message.

Never let the bottom rung be an unhandled exception or a blank panel. The ladder is also a cost control: most traffic should be served by a rung appropriate to its difficulty.

## Worked design: a support assistant

**Requirements.** Answer product questions from a help centre, draft replies for agents, escalate billing disputes, keep p95 time-to-first-token under two seconds, and never issue a refund without approval.

```text
             ┌──────────────────────────────────────────────┐
             │  Web chat  ·  Agent console  ·  Email intake │
             └───────────────────┬──────────────────────────┘
                                 │ HTTPS, SSE for chat
             ┌───────────────────▼──────────────────────────┐
             │ Edge: authn, tenant scope, rate limit, trace │
             └───────────────────┬──────────────────────────┘
                                 │
             ┌───────────────────▼──────────────────────────┐
             │ Orchestrator                                 │
             │  · turn loop, max 6 tool iterations          │
             │  · validates every tool call against policy  │
             │  · stop_reason handling, deadline, fallback  │
             └───┬──────────────┬───────────────┬───────────┘
                 │              │               │
      ┌──────────▼───┐  ┌───────▼──────┐  ┌─────▼──────────┐
      │ Prompt        │  │ Retrieval    │  │ Domain services│
      │ assembly      │  │ embed → top-k│  │ pricing,       │
      │ system+tools  │  │ → rerank     │  │ refunds,       │
      │ +cached docs  │  │ → ACL filter │  │ ticketing      │
      └──────────┬───┘  └───────┬──────┘  └─────┬──────────┘
                 │              │               │
             ┌───▼──────────────▼───────────────▼───────────┐
             │ Model gateway: pinned model, timeouts,       │
             │ prompt caching, token + cost accounting      │
             └───────────────────┬──────────────────────────┘
                                 │
             ┌───────────────────▼──────────────────────────┐
             │ Telemetry + evals: traces, sampled scoring,  │
             │ cost per conversation, drift alerts          │
             └──────────────────────────────────────────────┘
```

**Request flow.** The edge authenticates and stamps a trace ID. The orchestrator retrieves help-centre passages scoped to the tenant, assembles a prompt whose stable prefix is cache-marked, and streams a response. If the model emits `tool_use` for `lookup_order`, the orchestrator executes it and returns `tool_result`; if it emits `tool_use` for `issue_refund`, the call is withheld, an approval task is created, and the user is told a human will confirm.

If `stop_reason` is `max_tokens`, the partial answer is discarded and the fallback ladder engages. If retrieval returns nothing above threshold, the prompt says so and the orchestrator offers a handoff rather than letting the model improvise.

**SLOs and budgets.** p95 time-to-first-token under two seconds; 99.5% availability of the chat path; task success on the evaluation set at or above the agreed threshold; escalation rate monitored as a scope signal; a per-conversation cost ceiling enforced by iteration and token caps.

**Evaluations.** A golden set of real tickets with graded answers, an adversarial set of injection and out-of-scope requests, a regression set of past incidents, and a cost/latency set with maximum-length conversations. All four run in CI; the adversarial set has zero tolerance.

<learning-block type="mistake" title="Putting the business rule in the prompt">

"Never refund more than the customer paid" written only in the system prompt is a suggestion the model can miss under pressure. The reliable design computes the maximum in `billing_service`, rejects over-limit tool calls in the orchestrator, and uses the prompt only to explain the limit politely. Prompt instructions shape behaviour; code guarantees it.

</learning-block>

## On the exam

<learning-block type="check" title="What the exam asks">

Scenario questions reward matching workload to mode (interactive chat → streaming; nightly bulk → Batch API) and identifying which layer should own a rule (authorisation → domain service, not prompt). If a question offers "instruct the model to refuse" versus "filter before the model sees it", the second is almost always right for privacy.

</learning-block>

## Try it yourself

**A team adds a 40-page policy PDF to every request so the model can answer policy questions. Latency and cost both rise sharply. What design change helps most?**

<details><summary>Reveal the explanation</summary>

Retrieve the relevant few sections instead of shipping the whole document, and cache the stable part of what remains. Retrieval cuts input tokens from tens of thousands to a few thousand and usually improves accuracy by reducing distraction. Prompt caching then discounts the repeated prefix — system prompt, tool definitions, and any always-included reference text — provided it is byte-stable and placed before the variable content. Putting the PDF at the end of the prompt defeats caching and keeps paying full price for it.
</details>

## Remember

- Layers with contracts: edge, orchestration, prompt assembly, retrieval, gateway, domain services, telemetry.
- Model proposes, system disposes — irreversible actions are gated in code, not in prose.
- Streaming buys perceived latency, Batch buys throughput; match the mode to who is waiting.
- Scope retrieval by permission in the query, and put cache breakpoints on stable prefixes.
- Design a degradation ladder down to human handoff, and make each rung observable.
- Enforce cost with token caps, iteration caps and per-conversation budgets; measure quality with evaluations, not vibes.
