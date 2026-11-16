## An AI system is never "finished", only current

Traditional software is released when the code stops changing. A Claude application is released when the *model, prompt, retrieval corpus and evaluation set* are momentarily in agreement — and any of those can move underneath you next week. That is why the life cycle for AI applications stretches past deployment into monitoring, controlled change, and eventually retirement.

This is 2.8% of CCDV-F: a small slice, but it supplies the frame that the bigger design questions hang on.

## The big idea

Think of five phases and, crucially, three loops *backwards*. Discovery feeds design; design feeds build; build feeds operate; operate feeds retirement. But operations also feeds discovery (new failure modes), build (prompt fixes), and design (a component proved unnecessary). A healthy team treats those return arrows as planned work, not as interruptions.

The unifying principle: **every artifact that can change behaviour is versioned and evaluated together**. Code alone is not enough. A prompt edit with no code change can move accuracy by ten points.

## Start here

| Phase | Question it answers | Main outputs | Exit gate |
| --- | --- | --- | --- |
| Discovery | Is this worth building, and what does success mean? | Problem statement, requirements, risk register, baseline | Sponsor accepts measurable goal |
| Design | How does it work, and where does the model sit? | Architecture, model/prompt strategy, evaluation plan, data-flow review | Architecture and privacy review sign-off |
| Build | Does it meet the bar? | Code, versioned prompts, evaluation sets, tool integrations | Evaluation thresholds pass in CI |
| Operate | Is it still meeting the bar? | Traces, dashboards, sampled quality reviews, incident logs | SLOs met; no open severe incidents |
| Retire | How do we remove it safely? | Migration plan, data retention decision, archived artifacts | Users migrated, data disposed, access revoked |

### SDLC models, and where they strain

- **Waterfall** assumes requirements freeze early. Claude applications rarely obey: the first evaluation set often reveals that the task was harder, or easier, than assumed.
- **Iterative/agile** fits better, but the "increment" must include evaluation evidence, not just demoable behaviour.
- **Evaluation-driven development** is the AI-native variant: write the evaluation set before the prompt, then iterate prompt, retrieval and model tier against it. The eval set *is* the specification.
- **Continuous deployment with guarded rollout** suits mature teams: small prompt changes, automatic evaluation, canary traffic, fast rollback.

### Version three things, record all three

Prompts, model identifiers and evaluation datasets each get their own version, and every production trace records the triple, for example `prompt=triage@v7 model=sonnet-pinned eval=golden@v3`. Without that triple you cannot answer "what changed when quality dropped?", which is the only question that matters during an incident.

Pin an explicit model identifier in production rather than an alias that silently advances. Aliases are convenient in prototypes and dangerous in regulated workflows.

### Evaluation in CI

Evaluation is not a quarterly ritual; it is a build step. A typical gate runs three sets:

| Set | Contents | Failure response |
| --- | --- | --- |
| Golden set | Representative inputs with expected labels or rubrics | Accuracy below threshold blocks merge |
| Adversarial set | Prompt injection, out-of-scope requests, edge cases | Any safety regression blocks merge |
| Cost/latency set | Long inputs, maximum tool loops | Budget or latency breach blocks merge |

```yaml
# .github/workflows/claude-eval.yml
name: claude-eval
on: [pull_request]
jobs:
  evaluate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: pip install -r requirements.txt
      - name: Evaluation gate
        env:
          ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
        run: >
          python -m eval.run
          --dataset eval/golden-v3.jsonl
          --prompt prompts/triage/v7.md
          --min-accuracy 0.90
          --max-p95-latency 2.5
```

The same job should publish the report as an artifact so reviewers can see *which* cases regressed, not just that a number went down.

### Operating: monitoring and drift

Production monitoring has four layers. Infrastructure metrics (error rate, latency) come free from your platform. Token and cost accounting comes from the `usage` field on every response. Behavioural monitoring samples real traffic and scores it, either with a rubric-based judge or with human review. Finally, input-distribution monitoring watches for drift: a new product launch changes the vocabulary of tickets, and yesterday's prompt no longer covers it.

Drift has three common sources — a shifted input mix, a changed retrieval corpus, and a model or prompt upgrade. All three show up the same way: quality metrics sag while error rates stay flat.

<learning-block type="concept" title="Why 'the API is up' is not a health check">

A 200 OK tells you a request succeeded, not that the answer was right. Availability monitoring and quality monitoring are separate concerns, and an AI system can be perfectly available while confidently wrong. Mature operations dashboards show both, and alerts fire on either.

</learning-block>

### Change and incident management

A prompt edit is a production change: review it, evaluate it, roll it out gradually, and know how to reverse it. Rollback should be a configuration change (flip the pinned prompt version), not a redeploy.

Incidents get a severity, an owner, and a timeline. The first mitigation is usually to **pin back to the last known-good triple**. The postmortem then asks a different question from ordinary software: was this a code defect, a prompt defect, a data defect, or an evaluation gap that let the defect through? That last one is the most valuable answer, because it improves the gate rather than just the code.

### Deprecation, retirement and review gates

Model providers retire model versions on a published schedule. Keep an upgrade runbook: list pinned versions, run the full evaluation set against the candidate, compare cost and latency, then canary. Never let a deprecation date be the first time you test a new model.

Retirement is a phase, not an afterthought. Point users at the replacement, export anything the business must keep, delete prompts and retrieved documents that contain personal data, revoke API keys and tool credentials, and archive the evaluation set so a future team can learn from it.

Compliance gates vary by industry but usually include privacy review (what personal data enters a prompt, where it is stored, how long), security review (key handling, tool permissions, injection exposure), and a human-oversight decision for consequential actions. Build the gate into the pipeline early; retrofitting a privacy review onto a shipped feature is how projects lose a quarter.

## Worked example

A team ships a ticket-triage assistant. In month two, accuracy on "billing dispute" tickets falls from 0.93 to 0.81 while latency and error rates are unchanged. The trace triple shows the prompt and model are unchanged, so the team checks retrieval and finds a new billing portal renamed every plan. The corpus was stale.

The fix is a corpus refresh plus a regression case per renamed plan. The lasting fix is a monitor on retrieval hit rate, and a rule that any product rename triggers an evaluation-set update. That is the life cycle working as intended: an operational signal became a build artifact and then a design safeguard.

## On the exam

<learning-block type="check" title="On the exam">

Questions here tend to ask which phase owns an activity, or what to do when behaviour degrades without a code change. Anchor on two ideas: every behaviour-changing artifact is versioned and evaluated, and the first incident response is to identify and pin back the version triple. Also expect the distinction between availability monitoring and quality monitoring — a system can be up and wrong.

</learning-block>

## Try it yourself

**Your prompt change raises golden-set accuracy from 0.88 to 0.92 but the adversarial set now has two injection successes. Ship it?**

<details><summary>Reveal the explanation</summary>

No. The gate is not an average; it is a set of independent thresholds, and safety is a threshold with no tolerance. The correct next step is to understand *why* the new prompt became more injectable — often because it grants the model more discretion over tool use or inlines untrusted text closer to instructions — then fix that and re-run both sets. Trading a safety regression for four points of accuracy is not a trade the life cycle permits, because the cost of one injection is unbounded while the benefit is marginal.
</details>

## Remember

- Five phases — discovery, design, build, operate, retire — with feedback loops back from operations.
- Version prompts, model identifiers and datasets together, and log the triple on every request.
- Evaluation is a CI gate with separate golden, adversarial, and cost/latency thresholds.
- Availability is not quality; monitor behaviour and input drift, not just HTTP status.
- Rollback to a known-good pinned version first, diagnose second, then close the evaluation gap.
- Keep an upgrade runbook ready before a model deprecation is announced, and plan retirement from day one.
