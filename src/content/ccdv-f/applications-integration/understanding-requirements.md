## Before you write a prompt, write down what "done" means

Most Claude projects that disappoint do not fail at the model call. They fail because nobody agreed in advance what a correct answer looks like, who checks it, and how much it may cost. A requirements document is how you make that agreement concrete: it fixes which parts of the problem the model should own, which parts must stay deterministic, and how you will know the system works when the output differs slightly on every run.

This lesson sits in Applications and Integration, the largest CCDV-F domain at 33.1% of the exam blueprint. Understanding requirements is a 3.4% slice, and it is the slice that every later design question quietly assumes. We will look at what a requirement must capture, who owns each job, and how to turn a vague ask into a gate that runs on every change.

## The big idea

Requirements are a contract with three parties: the business that pays for the system, the users who depend on it, and the engineers who must operate it at 3 a.m. For a Claude application you need a fourth clause that ordinary software does not need: a **tolerance for variation**. "Correct" becomes a distribution, not a single string.

In practice, requirements work has two jobs. First, separate what the system must *do* from how well it must do it. Second, decide deliberately where the model stops and code begins — because a probabilistic component inside a deterministic guarantee is a bug waiting to happen.

## Start here

### Functional versus non-functional

| Kind | Answers | Examples for a Claude application |
| --- | --- | --- |
| Functional | What must it do? | Classify a support ticket; draft a reply; extract line items from a PDF invoice |
| Non-functional — latency | How fast? | First token under 1 s on p50; full answer under 6 s on p95 |
| Non-functional — cost | At what price? | Under a set budget per resolved ticket; monthly spend ceiling |
| Non-functional — privacy | What may it see or keep? | No customer card numbers in prompts; no prompt text retained in logs; data residency |
| Non-functional — safety | What must never happen? | No medical or legal advice; no refund above a threshold without human approval |
| Non-functional — quality | How good is good enough? | 90% routing accuracy on a labelled set; zero policy violations on a red-team set |

Non-functional requirements are where Claude projects actually get judged. A feature that answers beautifully but costs four times the budget, or leaks a customer name into a log aggregator, has failed.

### Who owns which job

| Job | Owner | Reason |
| --- | --- | --- |
| Reading messy free text: intent, entities, tone | Model | Rules cannot enumerate human phrasing |
| Drafting prose in a brand voice | Model | Fluency is the model's strength |
| Choosing one label from a fixed taxonomy | Model proposes, code validates | Code rejects anything outside the allowed set |
| Arithmetic, tax, refund amounts, dates | Code | Must be exact and reproducible |
| Policy ceilings ("never refund above X") | Code | Must be guaranteed, not probable |
| Deciding to escalate | Model proposes, code applies threshold | The rule must be auditable |

The pattern to memorise: **the model interprets and drafts; code decides and enforces.** Any requirement containing "must always" or "must never" belongs to code, with the model's output treated as untrusted input.

## Worked example

### Turning a vague ask into testable acceptance criteria

A product manager says: "Use Claude to make support triage better." That sentence is not a requirement. Interrogate it: better at what, measured on which tickets, and what may it never do?

Suppose the answers are: route tickets to one of five queues, reply within a couple of seconds, keep cost near two cents a ticket, and never promise a refund. Those become an executable gate that runs on every prompt change:

```python
# eval/acceptance.py — one threshold per agreed requirement
from dataclasses import dataclass

@dataclass(frozen=True)
class Acceptance:
    min_routing_accuracy: float = 0.90    # quality: 200 labelled tickets
    max_p95_first_token_s: float = 2.0    # latency
    max_cost_per_request_usd: float = 0.02  # cost
    max_policy_violations: int = 0        # safety

def failures(report, spec=Acceptance()):
    out = []
    if report.routing_accuracy < spec.min_routing_accuracy:
        out.append(f"routing accuracy {report.routing_accuracy:.2f}")
    if report.p95_first_token_s > spec.max_p95_first_token_s:
        out.append(f"p95 first token {report.p95_first_token_s:.2f}s")
    if report.cost_per_request_usd > spec.max_cost_per_request_usd:
        out.append(f"cost/request {report.cost_per_request_usd:.3f}")
    if report.policy_violations > spec.max_policy_violations:
        out.append(f"{report.policy_violations} policy violations")
    return out  # empty list means the build may ship
```

Notice what is absent: no requirement that two runs produce the same words. Instead the gate asserts **properties on aggregate** — accuracy over a dataset, a percentile latency, a spending cap, a count of forbidden behaviours. That is what an acceptance criterion for a non-deterministic system looks like.

<learning-block type="check" title="On the exam">

Expect questions that hand you a requirement and ask what kind it is, or which part of the system should implement it. The reliable test: if the requirement can be violated by one unlucky sample, it needs an evaluation threshold, not a single golden answer. If it can be violated by one malicious prompt, it needs a hard-coded guarantee in code.

</learning-block>

## Ambiguity and scope

Ambiguity shows up in three costumes, and each has a different fix:

- **Lexical** — "summarise the ticket" (how long? for whom?). Resolve by specifying audience and a length range.
- **Boundary** — "handle refund requests" (which ones? partial? disputed?). Resolve by listing in-scope and explicitly out-of-scope cases.
- **Evaluative** — "be helpful" (by whose standard?). Resolve with a rubric and examples of good and bad output.

Write the out-of-scope list as carefully as the in-scope list. The cheapest scope decision you will ever make is to *not* build a capability, and the most expensive is to discover at launch that reviewers assumed it was included.

Scope also has a version boundary. "Summarise tickets" today, "and reply to them" next quarter — if both arrive in one prompt, your evaluation set silently mixes two tasks and your accuracy number means nothing.

## Success metrics

Pick a small number of metrics, and tie each to a decision someone will actually make.

| Metric | What it tells you | Typical decision it drives |
| --- | --- | --- |
| Task success rate on a labelled set | Does it do the job at all? | Ship or block a prompt change |
| Human acceptance rate | Do agents keep the draft? | Whether to invest in tone tuning |
| Escalation rate | Is it handling the hard tail? | Staffing and scope review |
| Cost per resolved ticket | Is it economically viable? | Model tier and caching strategy |
| p95 latency | Is it usable in the loop? | Streaming, caching, smaller model |

A metric nobody acts on is decoration. "Number of tokens used" is telemetry; "cost per resolved ticket against a budget" is a success metric.

<learning-block type="mistake" title="The golden-answer trap">

Writing "the reply must equal this exact text" as an acceptance criterion. Claude is non-deterministic, so that test flakes on day one and gets deleted — after which nothing protects quality. Assert the *properties* that matter (states the correct refund amount, offers no unauthorised discount, addresses the customer by name) and score them over many samples.

</learning-block>

## Try it yourself

**Requirement:** "The assistant must answer billing questions in under two seconds and must never reveal another customer's data."

<details><summary>Reveal the explanation</summary>

Split it. "Answer billing questions" is functional, and needs a definition of *answer* plus a labelled set. "Under two seconds" is a non-functional latency requirement, but ambiguous: time to first token or time to complete? For a chat interface, specify p95 time-to-first-token, which streaming can meet.

"Never reveal another customer's data" is a safety requirement that must not rest on prompt wording alone: enforce it in the retrieval layer by scoping every query to the authenticated customer's ID, then test with adversarial prompts. A model instruction is a mitigation; an access-control filter is a guarantee.
</details>

## Remember

- Functional requirements say what the system does; non-functional requirements say how well, how fast, how cheaply, and within which limits.
- The model interprets and drafts; deterministic code decides and enforces every "always" and "never".
- Acceptance criteria for a Claude application are thresholds over datasets, not exact expected strings.
- Latency, cost, privacy and safety are first-class requirements, not polish added after launch.
- Write the out-of-scope list, and keep separate tasks in separate prompts and separate evaluation sets.
- Every success metric should map to a decision someone will make.
