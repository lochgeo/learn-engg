## A refund bot that should not be allowed to improvise

A support team wants an assistant that reads a customer email, checks the order, applies the refund policy and replies. Nine cases in ten follow those three steps in order; the tenth is a customer already refunded twice who is threatening a chargeback, and no flowchart survives that. That ratio is the architecture question: where is the path fixed, and where does the model choose?

Agents and workflows are 14.7% of the CCDV-F blueprint, and this architecture sub-skill is 4.5% of it. The exam rarely asks for a definition — it hands you a task and asks which shape fits.

## The big idea

Anthropic draws one line that everything here hangs from:

- A **workflow** orchestrates LLMs and tools through **predefined code paths**. Your program decides what runs next.
- An **agent** lets the LLM **dynamically direct its own process and tool use**. The model decides what runs next.

Both call the same Messages API. The difference is who holds the wheel between steps, and that decides cost, debuggability, and how badly a bad day goes.

## Start here

| | Fixed workflow | Single agent | Supervisor + subagents |
| --- | --- | --- | --- |
| Picks the next step | your code | the model, step by step | supervisor plans, workers execute |
| Cost | lowest, predictable | grows with turns | highest: overlapping contexts |
| Failure mode | one bad step, fixed once | loops and drift | vague delegation, lost detail |
| Fits | known, auditable work | one open-ended thread | many independent subtasks |

Ask in order: **can you draw the flowchart?** Then build a workflow — that is the simplest structure that meets the requirement. If not, **is one thread of reasoning enough?** Then build a single agent. Only when the work splits into independent investigations do you add subagents.

### Why the dull option wins

A workflow is a pipeline with model calls where judgement is needed. Every step is inspectable, the bill is bounded by the graph rather than the model's mood, the routing logic can be unit-tested without calling a model, and an auditor can be shown the path. Reach for agency only when the flowchart genuinely cannot be drawn.

## The single agent loop

```
prompt + tool definitions
  → model returns content blocks, some of type tool_use
  → your code runs the tools and appends tool_result blocks
  → call the model again with the grown transcript
  → repeat until stop_reason is not "tool_use", or a turn cap fires
```

Three properties follow.

- **The model chooses the tool; your code only executes it.** That is what makes the system agentic; if a router chose the tool, you would have a workflow instead.
- **Context accumulates**, so a ten-turn run pays for turn one ten times.
- **You need a hard stop**, because the loop has no sense of "too expensive to continue".

## Supervisors and subagents

A **supervisor** decomposes the task, delegates pieces and synthesises the results. Workers are ordinary agents: they see a task, use tools, return a report. Two levels are almost always enough; a third is impressive in a diagram and miserable to debug, because a failure five hops down arrives as an oddly bland summary.

A **subagent** runs in its **own context window**. The parent never sees the transcript, only what the worker returns, and that single fact drives everything.

- **Wins:** isolation (forty file dumps stay out of the parent), parallelism, narrow prompts, and model tiering — Haiku for cheap workers, a stronger tier for planning and synthesis.
- **Costs:** detail dies at the boundary, workers duplicate each other's reading, tracing becomes a tree, and the supervisor cannot nudge a worker mid-run.

Because the boundary is lossy, it must be typed. A hand-off contract states what goes down — objective, inputs, constraints, output schema, turn budget — and what comes back — summary, evidence, confidence, open questions. If you cannot name the return fields, the subtask is not yet defined.

## Worked example: a supervisor with two isolated workers

```python
from dataclasses import dataclass
import asyncio

@dataclass(frozen=True)
class Handoff:
    objective: str             # one imperative sentence
    inputs: dict               # concrete paths, ids, urls
    constraints: list[str]     # read-only, allowed commands, deadline
    schema: dict               # JSON Schema the report must satisfy
    max_turns: int = 8

@dataclass
class Report:
    summary: str               # 200 words maximum
    evidence: list[str]        # file:line, url, command output
    confidence: str            # high | medium | low
    open_questions: list[str]

REPORT_SCHEMA = {...}          # summary, evidence, confidence, open_questions

async def run_worker(h: Handoff) -> Report:
    """One isolated agent loop; returns only the Report."""
    ...

async def supervise(task: str) -> str:
    jobs = [
        Handoff("Find every caller of charge_card()",
                {"repo": "."}, ["read-only", "git grep only"], REPORT_SCHEMA),
        Handoff("List billing tests and whether they pass",
                {"repo": ".", "suite": "tests/billing"},
                ["read-only", "pytest tests/billing only"], REPORT_SCHEMA),
    ]
    reports = await asyncio.gather(*(run_worker(j) for j in jobs))
    return synthesise(task, reports)   # one Messages API call over the reports
```

The `asyncio.gather` is the parallel win: two clean contexts at once. `REPORT_SCHEMA` is the reliability win: a worker returning prose fails validation and gets one retry with the error attached, rather than quietly degrading the synthesis.

## The trade-off ledger

The worked example shows one shape in action; the ledger below puts all three side by side on the axes exam questions probe.

| Axis | Workflow | Single agent | Supervisor + subagents |
| --- | --- | --- | --- |
| Cost | bounded by the graph | grows with turns | grows with turns × workers |
| Latency | lowest, parallel by design | serial | parallel, with more overhead |
| Reliability | highest: deterministic | good until contexts grow | good with tight contracts, fragile without |
| Human in the loop | insert an approval node | gate a tool call, or interrupt | approve the plan before fan-out |

That last row matters. In a workflow, review is just another node. In an agent, review means pausing a running loop — real, but designed for. In a supervisor, the cheapest gate is **approve the plan, then let the workers run**.

## On the exam

<learning-block type="check" title="Three claims that are always wrong">

1. *"Agentic is more advanced, so use it when unsure."* The blueprint rewards the simplest structure that meets the requirement; an auditable workflow beats an agent that is merely impressive.
2. *"Subagents share what they learned."* They do not. Only the returned report crosses the boundary — the most common distractor in this domain.
3. *"The supervisor must run on the biggest model."* Delegation is cheap, synthesis is expensive. Strong tier for planning and synthesis, cheaper tier for narrow workers.

</learning-block>

## Try it yourself

**A.** A nightly job pulls yesterday's orders, validates each row, retries the two that fail, and emails a summary. Workflow or agent?

<details><summary>Reveal the explanation</summary>

Workflow. You can draw the flowchart, the steps never vary, and "retry the failing rows" is ordinary program logic rather than a judgement needing a model. Keep the control flow in code, and use a model call only to write the summary.
</details>

**B.** A supervisor sends three workers to investigate separate services. The final answer omits a worker's finding that one service has no retry logic. Where is the defect?

<details><summary>Reveal the explanation</summary>

At the hand-off boundary, not in the worker: either the report schema had no field for risks, or the summary compressed them away. Add `risks` or `open_questions`, require evidence pointers, and instruct synthesis to address every risk raised. Then re-query that worker by id if its report is thin.
</details>

## Remember

- A workflow has predefined code paths; an agent lets the model direct its own process and tool use. The deciding question is whether you can draw the flowchart.
- The loop is prompt → model → `tool_use` → execute → `tool_result` → model, until `stop_reason` is no longer `tool_use` or a turn cap fires.
- A supervisor decomposes, delegates and synthesises; two levels are almost always enough.
- Subagents buy context isolation, parallelism, specialisation and tiering; they cost information at the boundary and harder tracing.
- Contracts run both ways: objective, inputs, constraints, schema and budget down; summary, evidence, confidence and open questions back.
- Human review is cheapest before fan-out: approve the plan, then let the workers run.
