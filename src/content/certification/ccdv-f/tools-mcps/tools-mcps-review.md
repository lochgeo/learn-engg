## Tools and MCPs: practice & mastery check

This domain is 10.6% of CCDV-F and it rewards a particular kind of judgement: given a failure, name the layer it came from. Tool definitions fail at the contract, MCP integrations fail at the protocol boundary, and customisations fail at the "wrong mechanism for the job" boundary. The questions below are written the way the exam writes them — a situation, four plausible responses, one that actually fixes the cause.

## Your study plan for today

About **100 minutes**, with a short break after the second block:

1. **Tool implementation** — 25 min. Re-read the worked example, then rewrite one real tool description until it states trigger, formats and side effects.
2. **MCP server development** — 25 min. Draw the host/client/server diagram from memory and trace one `initialize` plus one `tools/call`.
3. **Agentic customisation** — 20 min. For each mechanism, write one sentence on when it is the wrong choice.
4. **This mastery check** — 30 min. Answer without reveals, then mark the reason each distractor fails.

## First choose the tool

| The need | The choice |
| --- | --- |
| The model needs data or an action it cannot reach | A tool, with a JSON Schema input |
| The same capability must work in several hosts | An MCP server |
| A procedure followed occasionally, with scripts or reference files | A skill with progressive disclosure |
| A fact that is true in every session | `CLAUDE.md` |
| A constraint that must never be broken | A rule, enforced in CI where possible |
| Exploration that would flood the main context | A subagent with a self-contained brief |
| A repeatable action the human starts deliberately | A slash command |
| An irreversible external effect | A tool with a preview step and explicit confirmation |
| A slow or flaky dependency | A tool with a timeout, a definite error and an idempotency key |
| A third-party data source the user must approve | An MCP server, consented to per host |

## Mastery check

### 1. The missing observation

A tool handler raises an exception before it can return anything. What must the next message in the conversation contain?

- A. A user message saying the tool failed
- B. A `tool_result` with the matching `tool_use_id` and `is_error` set to true
- C. An assistant message that retries the same call
- D. Nothing; the model will notice the silence

<details><summary>Answer and reasoning</summary>

**B.** Every `tool_use` must be answered by a `tool_result` carrying its id in the next user message. A is wrong because unpaired prose leaves the `tool_use` block unmatched and gives the model no structured observation. C is wrong because the assistant cannot speak again until the results arrive. D is wrong because silence is not information — the turn simply stalls.

</details>

### 2. What makes a tool callable

Which changes most improve the chance that a model calls a tool correctly? Select **three**.

- A. The description states when to use the tool and when not to
- B. Required fields are limited to what the tool genuinely needs, each with a format hint
- C. One tool with a `mode` argument covers five operations
- D. Error results name the failure and the next step
- E. The description restates the internal class hierarchy

<details><summary>Answer and reasoning</summary>

**A, B, D.** Descriptions are the trigger surface, tight required fields prevent invented arguments, and actionable errors let the model recover in one step. C is wrong because a mode argument is a field models routinely get wrong; split the tool. E is wrong because implementation detail crowds out the information the model can act on.

</details>

### 3. Three calls, two results

The model emits three `tool_use` blocks in one turn. Your code runs two and returns two `tool_result` blocks. What is wrong, and what should you do?

<details><summary>Answer and reasoning</summary>

The turn is incomplete: every `tool_use` id needs a result, so the third call must also return a `tool_result` — a real result, or an `is_error` result explaining why it was not run. Send all three in one user message. The independent calls themselves may run concurrently; that is the point of parallel tool use, and concurrency does not excuse a missing result.

</details>

### 4. The duplicate charge

A `charge_card` tool times out. The model retries, and the customer is charged twice. What is the correct fix?

- A. Add "never retry a payment" to the system prompt
- B. Send an idempotency key so a repeat call is a no-op
- C. Increase the timeout so it never fires
- D. Remove the tool and take payments out of band

<details><summary>Answer and reasoning</summary>

**B.** The first request reached the processor, so only the downstream service can collapse the duplicate. A is a preference, not a control, and the model may still retry after a different failure. C hides the symptom on a slow network. D removes a capability the product needs.

</details>

### 5. Who owns the conversation

Which statement about MCP roles is correct?

- A. The server calls the model to decide which tool to run
- B. The host creates one client per server and enforces consent
- C. The client exposes server tools straight to the model, bypassing the host
- D. A server must implement tools, resources and prompts to be valid

<details><summary>Answer and reasoning</summary>

**B.** The host owns the model, the UI and the policy; each server gets its own client connection. A is wrong because a server may only *request* sampling, and only if the client declared that capability. C is wrong because the host mediates. D is wrong because a server may expose any subset of the primitives.

</details>

### 6. Protocol facts

Select **three** true statements.

- A. A notification has no `id` and receives no response
- B. On stdio, protocol messages go to stdout and logs go to stderr
- C. A response carries either `result` or `error`, not both
- D. Streamable HTTP requires a streaming response for every request
- E. Parallel tool calls require JSON-RPC batching

<details><summary>Answer and reasoning</summary>

**A, B, C.** D is wrong because streaming is available, not mandatory for every message. E is wrong because parallel tool use is a model-level behaviour — several `tool_use` blocks in one assistant turn — and has nothing to do with JSON-RPC batches.

</details>

### 7. The undeclared capability

After the handshake, a server sends a `sampling/createMessage` request to a client that declared no sampling capability. What is the error?

<details><summary>Answer and reasoning</summary>

Capabilities are negotiated, not assumed. Neither side may use a feature the other did not declare in `initialize`, so the server must gate the request on the client's declared capabilities — here it should not send it at all and should fall back to its own logic. If the request is sent, the client is entitled to reject it as unsupported. A related failure is sending anything before `initialize` and `notifications/initialized` have completed.

</details>

### 8. The right mechanism

A repository's test command is `pnpm test -- --runInBand`, it is true in every session, and agents keep guessing wrong. Where does it go?

- A. A skill, because it is project knowledge
- B. A subagent, because it is specialised
- C. `CLAUDE.md`, because it is a fact every session needs
- D. A tool, because the model must run it

<details><summary>Answer and reasoning</summary>

**C.** One line, always relevant, costing almost nothing. A is wrong because a skill should be loaded when relevant, and this is relevant every time. B is wrong because isolation adds nothing and hides the fact from the main agent. D is wrong because the missing thing is knowledge, not capability — though a test-running tool may also exist.

</details>

### 9. "Done — all good"

A subagent returns one line: "Done — all good." The main agent cannot continue because it does not know which files changed. What was missing?

<details><summary>Answer and reasoning</summary>

The **return contract** in the brief. A subagent starts with a fresh context, so it inherits no conversation and its summary is the only channel back. The brief should have specified the goal, the inputs, the constraints and an exact return format — for example a table of file, change, risk — plus a definition of done. "Be thorough" would not have fixed this; an explicit output schema would.

</details>

## Exam-day checklist

- For any tool question, check four things in order: name, description (trigger and disambiguation), schema (required fields and formats), result (paired id, `is_error`, actionable text).
- If effects could repeat, ask about idempotency before anything else.
- Distinguish the API layer (`tool_use`, `tool_result`, `is_error`) from the protocol layer (`tools/call`, `inputSchema`, `isError`).
- On any MCP question, locate the host first: it owns the model and consent, and it — not the model — attaches resources.
- Reject options that let a server call the model directly or reuse the client's token upstream.
- For a "which mechanism" question, ask who triggers it and whether it belongs in context every session.

## Remember

- A `tool_use` without a matching `tool_result` is an unfinished turn, not a failed call.
- Descriptions carry the trigger; schemas carry the arguments; results carry the recovery path.
- MCP is host-mediated: model, consent and policy sit in the host, capability is declared in the handshake.
- Customise with the smallest mechanism: fact, constraint, procedure, isolation, capability, entry point.
- Sprawl looks like overlapping descriptions and duplicated procedures; fix it by deleting, not by adding.
- When a scenario fails, name the layer before naming the fix.
