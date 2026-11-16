## The cheapest model that passes your evals is the right one

Model selection is not a search for the "best" model. It is constraint satisfaction: find the least expensive option that clears a quality bar inside a latency budget, a context limit and a modality requirement. This sub-skill is worth 2.7%, and its questions are usually scenarios where the most capable model is technically correct but commercially wrong.

## The big idea

Start from the workload, not from a leaderboard. Three questions decide almost every case:

1. **How hard is the task, and what does an error cost?** Multi-step reasoning, ambiguity and tool loops need capability; a wrong answer in a regulated workflow needs more capability still.
2. **What must fit in one request?** Long documents, images and tool schemas all consume the shared context budget.
3. **What latency and unit cost does the product tolerate?** A chat UI and an overnight report have opposite constraints.

Capability, latency and cost trade against each other, but not smoothly: the expensive tier is often several times the price for a modest accuracy gain that only matters on the hardest slice of traffic.

## Start here

### The three tiers

| Tier | Positioning | Typical work | Cost of being wrong |
| --- | --- | --- | --- |
| **Opus** | Highest capability | Hard multi-step reasoning, long-horizon agents, nuanced analysis and writing | Lowest, but slowest and most expensive |
| **Sonnet** | Balanced production default | Coding, support automation, structured analysis, tool use | Moderate on both axes |
| **Haiku** | Fastest and cheapest | Classification, extraction, routing, moderation, short replies | Highest risk of shallow reasoning |

Tier names are stable; exact model IDs, context sizes and modality support are not. Always confirm against the current model overview before committing an architecture.

### Reading task difficulty

Difficulty is not "how long the prompt is". These signals matter more:

- the number of dependent steps, especially when each step needs a tool result;
- ambiguity that requires judgement rather than lookup;
- synthesis across many documents where contradictions must be reconciled;
- strict output contracts and domain vocabulary;
- the cost of a wrong answer, including review labour and customer harm.

A task that is easy but high-stakes may still deserve escalation. A task that is hard but cheap to verify — generating a draft that a human edits — often does not.

### Context length and modality

Every request must fit input plus output in the model's context window. Long contracts, codebases and transcripts push you toward a larger-context tier; images and PDFs require multimodal support. Larger context is not free: more input tokens raise cost and time to first token, and very long contexts can dilute attention. Retrieval of the relevant sections often beats stuffing the whole corpus.

### Latency budgets

- **Interactive**: time to first token dominates perceived speed. Stream, keep prompts lean, use a faster tier or lower effort, and cap output length.
- **Agentic**: one user request may be dozens of sequential calls, so per-step latency multiplies. Prefer parallel tool calls and avoid escalating every step.
- **Background**: throughput and cost dominate. Use the Batch API and the strongest model you need, because nobody is watching the clock.

<learning-block type="concept" title="Capability is not the same as fitness">

The strongest model is fit for the task only if it also fits the latency, context and cost envelope. Selection is a conjunction of constraints, not a ranking.

</learning-block>

### Cascades and fallbacks

A **cascade** sends every request to a cheap model first, checks confidence or a grader, and escalates only the doubtful ones. A **fallback** handles failure — overload, refusal, timeout — by trying another model or tier. They solve different problems and are often confused.

If the cheap call costs $C_c$, the strong call costs $C_s$, and a fraction $r$ of traffic escalates, the average is:

$$
C_{\text{avg}} = C_c + r\,C_s
$$

With $C_c = 1$ unit, $C_s = 10$ units and $r = 0.15$, the average is $2.5$ units against $10$ for routing everything to the strong model. The saving is real only if the gate is accurate: a weak gate escalates too little (quality fails) or too often (you pay twice and add latency to the escalated path). Evaluate the gate separately from the models.

### Eval-driven selection

1. Collect a representative set of real inputs, including the hard tail and known failures.
2. Define a grader: exact match for extraction, rubric or model-graded checks for prose, test pass rate for code.
3. Run candidates at the effort levels you would actually deploy, then record quality, p95 latency and cost per successful task.
4. Choose the cheapest candidate that clears the bar with margin; keep the next tier as a documented fallback.
5. Re-run the eval whenever the prompt, model or effort changes.

Public benchmarks are a prior, not evidence. They rarely match your data distribution, your output contract or your tolerance for refusal.

### Upgrades and deprecations

Pin model IDs in configuration, never in scattered code. Before an upgrade, read the migration guide for breaking changes — thinking configuration, prefill support and tool-choice behaviour have all changed between generations. Then run shadow traffic against the new model, compare on your eval set, and canary a small percentage before switching. Keep the previous model available as a fallback, and track retirement dates. Prompts tuned for one model often need re-tuning for the next, including a fresh effort sweep.

## Worked example: three workloads, three answers

| Workload | Binding constraints | Choice | Reasoning |
| --- | --- | --- | --- |
| Triage two million support tickets a month into twelve categories | p95 under 1.5 s, cost-sensitive, short text | **Haiku**, low effort, batch for backfill | Classification is shallow; a confidence gate escalates the uncertain 10–15% to Sonnet |
| Interactive coding agent editing several files with tests | 30 s per turn, tool loops, correctness visible | **Sonnet**, high effort, streaming | Strong tool use at interactive speed; escalate to Opus only when tests keep failing |
| Nightly risk review of 300-page contracts | Accuracy critical, six-hour window, PDF input | **Opus**, high effort, Batch API | Depth and long-context synthesis matter; latency is irrelevant overnight, and batch halves the price |

The coding agent illustrates the subtlety: Sonnet is chosen not because it is the best model, but because it is the best model that keeps a 30-second turn viable. The escalation to Opus is a fallback for a measurable failure signal, not a default.

```python
def answer(ticket: str) -> str:
    cheap = call_model(TIER_FAST, ticket, effort="low", max_tokens=200)
    if cheap.confidence >= 0.85:          # gate scored on your eval set
        return cheap.text
    strong = call_model(TIER_BALANCED, ticket, effort="medium", max_tokens=600)
    return strong.text
```

## On the exam

<learning-block type="check" title="On the exam">

- "Most capable" is not automatically "most appropriate"; read the latency and volume clues first.
- High-volume, short, well-specified tasks point to Haiku; hard multi-step or high-stakes work points to Opus; the balanced middle is Sonnet.
- A cascade saves money only when the escalation rate and gate accuracy are measured.
- Fallback is about failure handling; cascade is about quality routing. Do not swap the terms.
- A model upgrade is an eval event, not a config change.
- When an option promises a fixed percentage saving from caching or batching, check the workload actually repeats a prefix or tolerates delay.

</learning-block>

## Try it yourself

**A team routes every request to the top tier because "quality matters". Traffic is 90% simple FAQ answers and 10% complex policy disputes. What would you change, and what must you measure before trusting the change?**

<details>
<summary>Reveal the explanation</summary>

Split the traffic: send FAQ-style requests to a cheaper, faster tier and reserve the top tier for disputes, either by a classifier or by the same cheap model reporting low confidence. Measure quality on both slices separately, plus the escalation rate and the added latency for escalated requests. The saving comes from the 90% slice, but the risk sits in the 10% — if the router sends a dispute to the cheap tier and it answers confidently, the average cost falls while the thing you cared about gets worse.
</details>

## Remember

- Select the cheapest model that clears the quality bar inside the latency, context and modality limits.
- Task difficulty comes from dependent steps, ambiguity, synthesis and error cost — not prompt length.
- Long context and multimodality narrow the candidate set before price does.
- Cascades route by confidence; fallbacks handle failure. Measure the gate, not just the models.
- Evals on your own data beat leaderboards, and they must be re-run after every model or prompt change.
- Pin model IDs, shadow-test upgrades, canary, and keep a fallback until the retirement date.
