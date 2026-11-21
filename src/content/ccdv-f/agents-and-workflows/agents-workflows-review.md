## Study plan for this domain

This lesson turns the chapter into a timed rehearsal: a short plan, then scenario questions written in the style the exam uses.

Agents and Workflows is 14.7% of the paper and rewards judgement more than recall. Budget about **two hours**:

1. **Architecture: workflow, agent or supervisor** — 25 min. Re-read the decision order and the trade-off ledger.
2. **Construction with the Agent SDK** — 30 min. Focus on `allowed_tools`, `permission_mode`, `max_turns`, hooks and MCP tool naming.
3. **Patterns and frameworks** — 25 min. Be able to name the pattern from a one-line symptom.
4. **This mastery check** — 40 min, closed book, then mark every miss against the lesson it came from.

Write your answer before opening each reveal. A question you get right by reading the options is not yet learned.

## First choose the tool

| Clue in the question | Start with |
| --- | --- |
| "The steps are the same every time" | A deterministic workflow — chain or route in code |
| "Auditors must see exactly what ran" | Workflow, with a model call only where judgement is needed |
| "The model must decide what to do next" | A single agent loop |
| "One thread of reasoning, tools, a final answer" | Single agent with a tight `allowed_tools` list |
| "Several independent investigations, then a synthesis" | Supervisor with subagents and typed hand-offs |
| "The work is too big for one context window" | Subagents for context isolation |
| "Inputs come in a few distinct kinds" | Routing to specialised chains |
| "Subtasks are only discoverable at runtime" | Orchestrator-workers |
| "Quality is inconsistent but reviewers agree on good" | Evaluator-optimiser with a named rubric |
| "A policy must hold even on a bad model turn" | `PreToolUse` hook or a restricted allowlist |
| "Must resume after a crash, with approval mid-run" | A durable graph (LangGraph-style) |
| "Typed outputs and heavy unit tests" | PydanticAI-style typed agents |
| "Cost tripled and reports repeat each other" | Fix the hand-off contract before changing models |

## Mastery check

### 1. Choosing a shape

A nightly job pulls yesterday's orders, validates each against a schema, sends the two failures to a human queue, and emails a summary. Which architecture?

- **A.** A single agent with database tools and `max_turns=20`
- **B.** A prompt-chained workflow, with failures routed to human review
- **C.** A supervisor with one worker per order
- **D.** An orchestrator that decides the steps at runtime

<details><summary>Answer and reasoning</summary>

**B.** The path is knowable in advance and the volume is high, so fixed code is cheaper, faster and auditable; the model writes the summary, the program owns the flow. **A** adds nondeterminism and unbounded turns to a solved problem. **C** multiplies cost for no benefit — orders do not need independent reasoning. **D** is the same error with more jargon: if the steps never change, letting a model choose them only adds failure modes.
</details>

### 2. What crosses the boundary

A supervisor runs three subagents. Which statements are true? Select all that apply.

- **A.** Each subagent has its own context window
- **B.** The supervisor automatically inherits each worker's full transcript
- **C.** The supervisor sees only what each worker returns
- **D.** Isolation reduces context pollution but can lose detail the contract did not request
- **E.** Subagents always use the same model as the supervisor

<details><summary>Answer and reasoning</summary>

**A, C, D.** **B** is the classic trap: there is no shared transcript, which is exactly why nuance disappears. **E** is false and expensive to believe — tiering cheap workers on Haiku and reserving the strong model for planning and synthesis is a standard optimisation. If you chose **B**, re-read the subagent section: the boundary is the whole design problem.
</details>

### 3. The tool that never gets called

You register a custom tool named `lookup_invoice` on an in-process MCP server called `billing`, then set `allowed_tools=["lookup_invoice"]`. The model never calls it. Why?

- **A.** The tool schema is invalid
- **B.** Custom tools cannot be exposed through MCP
- **C.** MCP tools are allowlisted as `mcp__billing__lookup_invoice`; the bare name matches nothing
- **D.** `max_turns` is too low

<details><summary>Answer and reasoning</summary>

**C.** The qualified name is how the harness addresses server plus tool; an unlisted tool is absent from the model's toolset, so this is configuration, not model behaviour. **A** would surface as a registration or validation error. **B** is backwards: in-process MCP servers are the SDK's mechanism for custom tools. **D** would truncate a run, not suppress one specific tool.
</details>

### 4. Unattended, but not reckless

A nightly job refactors code in a disposable checkout and posts a diff. No human is present. Which configuration is most appropriate?

- **A.** `permission_mode="default"`
- **B.** `permission_mode="plan"`
- **C.** `permission_mode="bypassPermissions"`
- **D.** `permission_mode="acceptEdits"` with a narrow `allowed_tools` list and a `PreToolUse` hook on `Bash`

<details><summary>Answer and reasoning</summary>

**D.** You need edits to proceed without a prompt, while keeping capability scoped and destructive commands gated. **A** stalls waiting for approval nobody will give. **B** forbids the modification the job exists to make. **C** removes every gate, so one bad turn can reach anything the process can reach — acceptable only in a hard sandbox, and the question does not promise one.
</details>

### 5. When not to use the SDK

Which are legitimate reasons to hand-roll the agent loop? Select all that apply.

- **A.** You must support non-Claude providers
- **B.** Your deployment cannot ship the SDK's runtime dependency
- **C.** You need precise control over context compaction
- **D.** The task is a fixed workflow where an open loop adds no value
- **E.** You want to avoid defining tool schemas

<details><summary>Answer and reasoning</summary>

**A, B, C, D.** Each names a real constraint the harness cannot meet. **E** is not a reason: hand-rolling still requires schemas, and you would also rebuild permissions, retries and tool plumbing. If you picked **E**, you are optimising for the first afternoon rather than the first incident.
</details>

### 6. The guide that never converges

A team generates migration guides and a reviewer keeps finding real problems. They loop "critique, then rewrite" with no iteration limit, and the guide changes every round without improving. What is the best fix?

- **A.** Raise the effort so the drafts differ more
- **B.** Switch to a larger model and keep the loop
- **C.** Score against named rubric criteria, stop when they pass, and cap the rounds in code
- **D.** Remove the reviewer and rely on the generator's self-reflection

<details><summary>Answer and reasoning</summary>

**C.** The loop lacked both a measurable target and a brake, so "improvement" became churn. Named criteria make the verdict checkable; a code-level cap guarantees termination. **A** adds cost and variance, not quality. **B** costs more per round without fixing the stop condition. **D** removes the only external signal — self-reflection shares the generator's blind spots and is the weakest option here.
</details>

### 7. Reading the symptom

"We need a long-running agent that survives a process restart, pauses for approval before deploying, and resumes exactly where it stopped." Which choice fits best?

- **A.** Claude Agent SDK with `query()` in a loop
- **B.** Strands Agents with agents-as-tools
- **C.** LangGraph, because checkpointed state and interrupts are its core features
- **D.** A single prompt with a very large context window

<details><summary>Answer and reasoning</summary>

**C.** Durable execution plus mid-graph human approval is precisely the state-machine model: nodes, edges, checkpoints and interrupts. **A** gives you sessions but not a graph you can pause at a named node and resume after a crash. **B** is a lean loop, not a durability layer. **D** conflates memory with state — a big window still dies with the process.
</details>

### 8. The fan-out that duplicated itself

A supervisor sends five workers to audit five services; cost tripled and the reports overlap heavily. Which change addresses the cause?

- **A.** Give the supervisor a stronger model
- **B.** Partition by service in each hand-off, add evidence pointers, and require a short report schema
- **C.** Increase `max_turns` for the workers
- **D.** Replace the supervisor with a single agent and hope

<details><summary>Answer and reasoning</summary>

**B.** Overlap means the objectives were not disjoint and the contract did not force evidence — workers re-derived the same findings. Explicit scope plus `evidence[]` plus a word cap removes both duplication and unverifiable prose. **A** buys better synthesis over bad inputs. **C** lets each worker wander further, raising cost. **D** discards the parallel structure that the workload actually justified; fix the contract first.
</details>

## Exam-day checklist

- Ask the three questions in order: can I draw the flowchart, is one thread enough, does the work genuinely split?
- Reject any option that adds agency where the path is already known, or subagents where one context suffices.
- Any claim that subagents share memory or transcripts is false — the report is the only channel.
- Separate what is enforceable (`allowed_tools`, `permission_mode`, hooks, `max_turns`) from what is advisory (the system prompt).
- Remember the `mcp__server__tool` naming rule whenever a custom tool "isn't being called".
- For quality loops, look for a rubric **and** a stop condition; for durability, look for checkpoints and interrupts.
- When two options both "work", choose the one with bounded cost and a localised failure.
- Flag any option that removes a permission gate without also promising an isolated sandbox.

## Remember

- Workflow when the path is knowable; single agent when it is not; subagents only for breadth, isolation or parallelism.
- The loop is prompt → model → `tool_use` → execute → `tool_result` → model, ended by a final answer or a turn cap.
- Isolation is the subagent's gift and its tax: clean context in exchange for a lossy boundary.
- Guarantees live in configuration and hooks; prompts only advise.
- Patterns name the control flow, frameworks make it convenient — pick the pattern first, then the ergonomics.
- Every evaluator loop needs named criteria and a brake; every memory needs a write policy; every plan needs a replanning trigger.
