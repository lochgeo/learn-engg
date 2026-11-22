## You already know the shapes; now learn their names

Sketch a document pipeline and you draw boxes and arrows: extract, summarise, check, revise. Sketch a support triage system and the boxes change but the *grammar* does not — split, classify, fan out, merge, critique. Those recurring grammars are the agent patterns, and naming them turns a vague design argument into a choice among a handful of options.

This lesson is 4.9% of the CCDV-F blueprint. The exam gives you a symptom — "quality is inconsistent", "the task splits unpredictably", "we cannot resume after a crash" — and expects you to name the pattern and the framework that fits.

## The big idea

A **pattern** is a control-flow shape: who decides what runs next, and how results combine. A **framework** is a library that makes one or more shapes convenient. Confusing them is the expensive mistake, because a framework swaps in a sprint and a pattern swaps in a redesign.

Two questions classify any pattern. **Is the next step fixed in code, or chosen by the model?** Fixed means workflow, chosen means agency. And **do parallel branches do different work (sectioning) or the same work for agreement (voting)?**

## The pattern catalogue

| Pattern | Shape | Solves | Main cost |
| --- | --- | --- | --- |
| Prompt chaining | step → step → step | a task with clean stages and a gate between them | latency adds up; early errors propagate |
| Routing | classify, then dispatch to a specialist | heterogeneous inputs | misclassification sends work down the wrong path |
| Parallelisation | fan out, then aggregate | latency, or confidence through agreement | token cost multiplies |
| Orchestrator-workers | a model decides the subtasks | work you cannot decompose in advance | nondeterminism, uneven worker quality |
| Evaluator-optimiser | generate, judge by rubric, revise | quality where good is recognisable but hard to specify | two calls per round; needs a stop rule |
| Reflection | the model critiques itself | cheap polish | weak grounding; it praises its own errors |
| Memory and planning | external state plus an explicit task list | long horizons, resumption, multi-session work | state design and staleness |

**Chaining** puts a programmatic gate between stages — validate JSON before continuing, or stop when a field is missing. You get accuracy per step and a precise failure location.

**Routing** keeps each specialist prompt short and testable; measure the classifier separately and give it an explicit `unknown` route rather than forcing a bad fit.

**Parallelisation** is *sectioning* when branches get different slices (security, performance, tests) and *voting* when they get the same task and you take the consensus. Sectioning cuts wall-clock time; voting buys reliability at a linear token cost.

**Orchestrator-workers** differs from parallelisation in one exam-critical way: the subtask list is written by a model at runtime, not by your code. That is what makes it right for open-ended research and wrong for a predictable pipeline.

**Evaluator-optimiser** needs two things the naive version omits: a judge scoring **named criteria**, and a **hard iteration cap** in code. A model asked to keep improving will keep inventing improvements.

**Reflection** is the cheap special case — same model, self-critique, rewrite. It catches surface slips and cannot catch a fact the generator also believes. Use it for polish; use a test, schema or retrieved document when correctness matters.

**Memory** is anything outliving one context window: a scratchpad, task list, notes store, vector index, project `CLAUDE.md`. It needs a write policy, or it becomes a landfill the model retrieves from indiscriminately.

**Planning** makes the task list explicit so work can resume and a human can inspect intent; a plan with no replanning trigger is worse than none.

<learning-block type="mistake" title="Reflection is not verification">

"Have the model check its own work" is offered as a reliability strategy in almost every design review. It is a *quality* strategy with a weak signal: a critic sharing the generator's context cannot detect a hallucination it also believes. Verification needs something outside the loop — a test that runs, a schema that validates, a document that is retrieved, a person who signs off.

</learning-block>

## Worked example: evaluator-optimiser with a stop rule

```python
import json
from anthropic import Anthropic

client = Anthropic()
MODEL = "<current-sonnet-model-id>"  # see the docs for the exact id
task = "Summarise the breaking changes in the billing SDK for our mobile team."

RUBRIC = """Score 1-5 for: claims supported by file:line evidence;
breaking changes with a migration step; no invented API names.
Return JSON only: {"score": int, "issues": [str]}"""

def call(system, user, max_tokens):
    r = client.messages.create(model=MODEL, max_tokens=max_tokens, system=system,
                               messages=[{"role": "user", "content": user}])
    return next(b.text for b in r.content if b.type == "text")

def judge(task, text):
    return json.loads(call(RUBRIC, f"TASK:\n{task}\n\nDRAFT:\n{text}", 300))

feedback = None
for _ in range(3):                     # the cap lives in code, not in the prompt
    prompt = task if feedback is None else f"{task}\n\nReviewer feedback to address:\n{feedback}"
    text = call("Write concise migration notes for engineers.", prompt, 1500)
    verdict = judge(task, text)
    if verdict["score"] >= 4 and not verdict["issues"]:
        break
    feedback = "\n".join(verdict["issues"])
```

The rubric named evidence and invented API names as *failures*, so the judge has something concrete to look for; "make it better" would produce polite, useless notes and an endless loop. And a score of 4 with open issues still earns a revision — the stop condition is the conjunction, not the score alone.

## Frameworks: same patterns, different ergonomics

The patterns above are framework-neutral. The libraries below package them with different ergonomics and different defaults.

| Framework | Mental model | Strengths | Watch out for |
| --- | --- | --- | --- |
| **Claude Agent SDK** | a harness around the agentic loop, Claude-first | built-in tools, permissions, hooks, MCP, subagents — least glue for Claude work | tied to the Claude runtime; the loop is largely its own |
| **Strands Agents** (AWS) | model-driven loop; tools are decorators | small surface, quick multi-agent composition, comfortable on Bedrock | smaller ecosystem; fewer built-in safety primitives |
| **LangGraph** | explicit state machine: nodes, edges, typed state, checkpoints | durability, resumption, cycles, human-in-the-loop interrupts | you design and maintain the graph; more boilerplate |
| **PydanticAI** | typed agents with validated outputs | strong typing, testability, model-agnostic providers | no permission system or sandbox out of the box |

Match the framework to the pattern, not to a leaderboard:

- **Durable, resumable, approval-heavy graph** → LangGraph. Checkpointing is the feature, not a detail.
- **Typed outputs, heavy unit testing, several providers** → PydanticAI.
- **All-in on Claude, and you want the harness** → Claude Agent SDK.
- **A minimal loop on AWS** → Strands.
- **A fixed pipeline with two model calls** → none of them. Write forty lines.

## Lock-in, honestly

Three kinds, expiring at different speeds. **Model lock-in** — prompts tuned to one family — is portable with an evaluation set and a provider abstraction, though never free. **Orchestration lock-in** — graph definitions, checkpoint formats, state schemas — is stickiest, because operational tooling grows around it. **Capability lock-in** is the sneaky one: once you depend on built-in sandboxing, hooks or session resumption, replacing the framework means rebuilding safety, not swapping an import.

What survives a reorg: prompts, tool schemas and rubrics kept as plain data rather than framework objects; the framework behind a thin internal interface; and an evaluation suite that is framework-independent, so a migration is measured rather than argued about. Choose for the next year, not the next demo — can you resume a crashed run, inspect state mid-flight, cap spend, and require approval before a destructive step?

## On the exam

<learning-block type="check" title="Pattern recognition cues">

- "Subtasks known in advance, run together" → **parallelisation (sectioning)**. "Subtasks discovered while working" → **orchestrator-workers**.
- "Same task, several attempts, take the consensus" → **parallelisation (voting)**.
- "Quality varies but reviewers agree on what good looks like" → **evaluator-optimiser** with a rubric and a cap.
- "Must resume after a crash, with approval mid-graph" → **LangGraph-style durable graph**.
- "Forgets what it decided three sessions ago" → **memory design**, not a bigger context window.

</learning-block>

## Try it yourself

**A.** A review agent occasionally cites functions that do not exist. The team adds a second pass where the same model reviews its own comments. Does that fix it, and if not, what does?

<details><summary>Reveal the explanation</summary>

Mostly not: the critic shares the generator's context and its mistaken belief, so it is likely to approve the invented name. The fix is an external signal — verify each cited symbol with `Grep` or a language server before emitting the comment, and drop or flag anything unverified. That converts reflection into grounding.
</details>

## Remember

- Pattern = control flow (fixed or model-chosen, one path or many); framework = convenience. Choose the pattern first.
- Chaining buys per-step accuracy and localised failures; routing buys specialisation; both need measurable gates.
- Parallelisation is sectioning or voting; orchestrator-workers is when a model writes the subtask list.
- Evaluator-optimiser needs named criteria and a code-level cap; reflection is polish, not verification.
- Memory needs a write policy; planning needs a replanning trigger.
- Match the framework to the pattern, keep prompts and schemas portable, and isolate the framework behind your own interface.
