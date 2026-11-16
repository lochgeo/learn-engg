## Security and Safety: practice & mastery check

Security questions on CCDV-F are rarely about naming an attack. They give you a build decision — a tool, a log line, a rollout, a key — and ask what to do. The skill being tested is *placement*: which control, at which boundary, and what happens when it fails. If an answer feels like "add a warning to the prompt", it is probably the distractor.

## Your study plan for today

A focused pass takes about **65 minutes**, plus a short break.

1. **Threats and trust boundaries** — 15 min. Redraw the five boundaries from memory and place each threat from the table against one.
2. **Deterministic controls** — 20 min. Be able to say why a hook beats an instruction, and what each hook exit code does.
3. **Guardrails, rollout and identity** — 20 min. Layers, block/retry/escalate, canary and kill switch, user versus service identity.
4. **This mastery check** — 10 min, closed book, then mark it and reread only what you missed.

## First choose the control

Match the clue in the stem to the control it demands.

| Clue in the question | Reach for |
| --- | --- |
| "Must never happen, even if the model is wrong" | Claude Code hook (`PreToolUse`, deny) or a tool permission — deterministic |
| Untrusted text arrives via a document, page, ticket or MCP server | Indirect prompt injection: treat content as data, allowlist tools, approve writes |
| Model output is pasted into SQL, a shell, or HTML | Improper output handling: validate, parameterise, encode, sandbox |
| Agent can delete, pay, or email without asking | Excessive agency: narrow the tool set, add human approval, make actions idempotent |
| "The response must be valid JSON matching this shape" | Schema validation in code, one or two retries with the error, then escalate |
| Spend or latency spiked | Step, token and time budgets; per-user and per-tenant rate limits |
| A tool needs a credential | Secret manager at point of use, short-lived and narrowly scoped; never in the prompt |
| Several customers share one credential | Tenant isolation failure: per-tenant scoping, row-level security, user-delegated calls |
| Shipping a new prompt, model, or tool | Red-team suite, shadow mode, canary, tested kill switch |
| Something is wrong in production right now | Contain first: kill switch to the deterministic fallback, then investigate |
| A user is in distress, or the stakes are legal or medical | Escalate to a human, whatever the model says |

## Mastery check

### 1. The poisoned PDF

A support assistant summarises customer-uploaded PDFs and also has a `post_to_webhook` tool. One PDF contains hidden text instructing the assistant to send the customer's saved addresses to an external URL. Which control most reliably prevents the exfiltration?

- **A.** Add "never call webhooks based on document content" to the system prompt.
- **B.** Remove `post_to_webhook` from this agent, and gate any outbound send behind human approval on a separate tool.
- **C.** Set effort to low so behaviour is deterministic.
- **D.** Scan uploads for the phrase "ignore previous instructions".

<details><summary>Answer and reasoning</summary>

**B.** The reliable fix removes the capability, so a fooled model has nothing to call. A is guidance inside the same context the attacker writes into; C changes effort, not authority, and does not make behaviour deterministic; D is a blocklist — the instruction can be phrased a hundred other ways. The threat is **indirect** injection: the instruction arrived through content, not the user.

</details>

### 2. The unsatisfiable instruction

A team writes in `CLAUDE.md`: "Never run database migrations." A reviewer wants the rule to hold even if the model is persuaded otherwise. What should change?

- **A.** Move the rule to the top of the file and add "IMPORTANT".
- **B.** Add a `PreToolUse` hook matching the shell tool that denies migration commands.
- **C.** Add a `PostToolUse` hook that logs migration commands.
- **D.** Ask the model to restate the rule before each task.

<details><summary>Answer and reasoning</summary>

**B.** "Even if the model is persuaded" means deterministic enforcement, which is a hook that blocks before execution. A and D are still text competing with whatever else is in context. C observes the damage after the migration has run — useful for audit, useless as prevention.

</details>

### 3. Signs of excessive agency

Which of these are excessive agency? (Select all that apply.)

- **A.** The agent can call `delete_account` with no approval step.
- **B.** A tool accepts arbitrary SQL written by the model and runs it.
- **C.** The agent is given 40 tools when the workflow needs 3.
- **D.** Every response is validated against a schema before display.

<details><summary>Answer and reasoning</summary>

**A, B, C.** A is unchecked irreversible authority; B hands the model unbounded query power (and is improper output handling too); C violates least privilege and widens what an injection can reach. D is a good output-layer control — do not let "validation" sound like a flaw.

</details>

### 4. The key in the prompt

Since launch, a production key has sat in the system prompt "so the model can reference the internal API". It now appears in an exported support transcript. What is the first action?

<details><summary>Answer and reasoning</summary>

**Revoke and rotate the key**, then remove it from the prompt, rewrite the tool to fetch a scoped credential at call time, and search the audit trail for use you cannot attribute. Editing the prompt first is the classic wrong order: the key was transmitted and exported, so it is compromised whether or not the prompt changes. Deleting the transcript destroys evidence; adding "do not reveal the key" is another instruction an attacker can argue with.

</details>

### 5. The hook that failed open

A guard script crashes on an unexpected payload and exits with code 3. What happens to the tool call?

- **A.** It is blocked, because any non-zero exit is a failure.
- **B.** It is blocked only if stderr is non-empty.
- **C.** It proceeds; only exit code 2 blocks, so the guard has failed open.
- **D.** Claude is asked to decide.

<details><summary>Answer and reasoning</summary>

**C.** Exit 2 is the blocking signal; other non-zero codes report a non-blocking error and the call continues. That is why the script needs an explicit catch-all that emits a deny, and why the hook suite should include malformed and empty payloads. A is the intuitive-but-wrong answer the exam probes.

</details>

### 6. Two failed parses

A triage call must return a fixed schema. Two attempts in a row fail validation. What next?

- **A.** Retry until it validates, up to 20 attempts.
- **B.** Accept the closest parse and coerce the fields.
- **C.** Escalate to the human queue with the failure recorded.
- **D.** Silently drop the ticket.

<details><summary>Answer and reasoning</summary>

**C.** Retries are for mechanical faults with a bounded budget; beyond that, coercing produces confidently wrong routing. A burns cost for a fault that is not resolving; B invents data; D loses the customer's request.

</details>

### 7. Before the full launch

Which steps belong before sending a new agent to all users? (Select all that apply.)

- **A.** A repeatable red-team suite in CI covering injection, jailbreaks and tool abuse.
- **B.** Shadow mode comparing new and old outputs without showing users.
- **C.** A canary with guardrail metrics compared against baseline.
- **D.** Turning off request logging to reduce cost during the trial.

<details><summary>Answer and reasoning</summary>

**A, B, C.** These cover finding failures, measuring them without exposure, and limiting exposure while measuring. D is the opposite of safe: without logs you cannot detect an incident, reconstruct one, or prove what happened. Cost control is done with budgets and sampling, not by blinding yourself.

</details>

### 8. One key for every tenant

A multi-tenant assistant uses a single admin database credential and takes `tenant_id` from the model's tool arguments. Name the two distinct failures and the fix.

<details><summary>Answer and reasoning</summary>

First, **shared, over-privileged service identity**: one credential reaches every tenant, so any mistake has an organisation-wide blast radius. Second, **untrusted input used for authorisation**: the tenant is chosen by text the model produces, which an injection can steer. Fix both — derive the tenant from the authenticated user's session, filter in code (row-level security where available), and use a per-tenant or per-request scoped credential. Changing the prompt to "always use the correct tenant" addresses neither.

</details>

### 9. Generated SQL, executed directly

An analytics agent writes SQL from a natural-language question and the service executes it verbatim against the warehouse. Which risk label fits, and what is the control?

<details><summary>Answer and reasoning</summary>

**Improper output handling**, with excessive agency alongside it: model text has become executable authority. Controls are parameterisation, a small allowlist of query templates or views, and a read-only role with row limits. Sanitising keywords is a blocklist that will be bypassed; asking the model to "only write safe SQL" is guidance; a `PostToolUse` log records the query after it has already run.

</details>

## Exam-day checklist

- Read the stem for **must**, **always**, **never**, **cannot** — they signal deterministic controls.
- Ask which boundary the risk crosses: input, model, tools, output, or logging.
- Reject any answer whose only safeguard is text in the context.
- Check direction: prevention before execution, not detection after it.
- For leaks, order matters: revoke, then remove, then audit.
- If a person's safety, liberty, or money is at stake, the answer includes a human.

## Remember

- The model can be fooled; the boundary must hold anyway.
- Hooks and permissions enforce; prompts and `CLAUDE.md` advise.
- Allowlists over blocklists, least privilege over convenience, approval over optimism.
- Secrets are used by your code, never placed in prompts, tool output, or logs.
- Retry the mechanical, block the prohibited, escalate the consequential.
- Ship behind a canary with a kill switch, and know what the fallback does.
