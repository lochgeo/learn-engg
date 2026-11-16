## Which file, which scope, which mode?

Claude Code questions rarely ask you to define a term. They describe a small failure — the agent ignored a convention, a rule would not stick, the CI job parsed nothing — and ask where you would fix it. Almost every answer comes down to three choices: memory or configuration, shared or personal, interactive or headless. This check drills that choice until it is quick.

## Your study plan

Budget about **95 minutes**, in four passes:

1. **Memory and components** — 20 min. Redraw the component table from memory: `CLAUDE.md`, rules, skills, commands, subagents, and who invokes each.
2. **Settings, permissions and safety** — 25 min. Write the precedence stack and the deny → ask → allow order on one page, then explain to yourself why a user allow cannot beat a project deny.
3. **Sessions and reusable workflows** — 20 min. Practise `/init`, `/resume`, `/rewind`, `/compact` and `/clear`, and write one command file with `$ARGUMENTS`.
4. **Headless, MCP and this check** — 30 min. Run `claude -p` with JSON output, then answer the questions below from a blank page.

## First choose the tool

| Clue in the question | Start with |
| --- | --- |
| "The agent keeps using the wrong package manager" | Project `CLAUDE.md`; run `/init` and refine it |
| "My personal notes must not reach the team" | `CLAUDE.local.md` or `.claude/settings.local.json` |
| "The organisation must enforce a boundary" | Managed settings, which outrank local files and flags |
| "A tool call should be blocked outright" | A `deny` permission rule — it beats every allow |
| "The agent should decide when to use a procedure" | A skill, discovered via its `description` |
| "A human should trigger a fixed prompt" | A command in `.claude/commands/`, invoked by name |
| "A side task would flood the main conversation" | A subagent with its own context and tool list |
| "Claude went down the wrong path and edited files" | `/rewind`, restoring code, conversation or both |
| "The context is full but the task continues" | `/compact`, optionally with focus instructions |
| "A script must run the agent unattended" | `claude -p` with `--output-format json` or `stream-json` |

## Mastery check

### 1. The wrong test command

A new teammate's sessions keep running `npm test`, but the repository uses pnpm. The team wants the fix to apply to everyone. Where does it belong?

- A. `.claude/settings.local.json`
- B. The project `CLAUDE.md`
- C. `~/.claude/CLAUDE.md`
- D. `.mcp.json`

<details><summary>Answer and reasoning</summary>

**B.** Choosing a package manager is project knowledge, so it belongs in committed project memory. **A** is personal and uncommitted, so teammates would not receive it. **C** applies to all of that person's projects but not to anyone else, and it would wrongly impose pnpm everywhere. **D** configures MCP servers and has nothing to say about build commands.
</details>

### 2. Memory versus enforcement

Which statement about `CLAUDE.md` and `settings.json` is correct?

- A. `CLAUDE.md` enforces permissions; `settings.json` supplies project knowledge.
- B. Both are advisory and are ignored when a tool is denied.
- C. `CLAUDE.md` supplies instructions to the model; `settings.json` configures behaviour such as permissions.
- D. `settings.json` is sent to the model as part of the prompt on every turn.

<details><summary>Answer and reasoning</summary>

**C.** Memory is context, settings are configuration. **A** reverses the two roles. **B** is half-right but mislabels memory: a deny rule is enforced regardless of what `CLAUDE.md` says, yet `CLAUDE.md` is not "advisory" in the sense of being ignored — it shapes behaviour through the prompt. **D** confuses the two: the model sees instructions, not the settings file as a prompt payload.
</details>

### 3. Multiple response: permission rules

Which statements are true? Select all that apply.

- A. Deny rules are evaluated before ask and allow rules.
- B. A deny rule in user settings can be overridden by a more specific project allow rule.
- C. Arrays merge across settings scopes; scalars are overridden by the higher scope.
- D. A broad deny such as `Bash(aws *)` blocks a narrower allow such as `Bash(aws s3 ls)`.
- E. Managed settings rank below project settings.

<details><summary>Answer and reasoning</summary>

**A, C, D.** Evaluation order is deny, then ask, then allow, and specificity does not change that order — so **D** follows, and **B** is false because a deny from any scope beats an allow from any other. **C** describes the merge rule for settings. **E** inverts the stack: managed settings are the highest layer, not the lowest.
</details>

### 4. The stuck permission

A developer adds an allow rule for a command to `.claude/settings.local.json`, but Claude Code still prompts. Which explanation is most likely?

- A. Allow rules only work in user settings.
- B. A matching ask or deny rule exists at another scope, and those are evaluated first.
- C. The settings file must be named `settings.json` to take effect.
- D. Permission rules require a restart of the operating system.

<details><summary>Answer and reasoning</summary>

**B.** Ask and deny rules outrank allow, and they apply across scopes, so a project ask or a managed deny will still prompt or block. **A** is false: project, local, user and managed scopes can all carry rules. **C** is false: `.claude/settings.local.json` is a valid local settings file. **D** is nonsense; a new session is enough, and many settings reload without one.
</details>

### 5. Multiple response: headless automation

Which practices are correct for running Claude Code in CI? Select all that apply.

- A. Use `claude -p` so the process exits instead of waiting for input.
- B. Use `--output-format json` when you need one parseable result object.
- C. Use `--output-format stream-json` and parse each line as its own event.
- D. Invoke `/review` and read its output from standard input.
- E. Treat exit status and the `is_error` field as part of the contract.

<details><summary>Answer and reasoning</summary>

**A, B, C, E.** Headless mode is the non-interactive interface, and both output formats are designed for machines; the stream is newline-delimited, so per-line parsing is required. **D** is wrong: slash commands are an interactive-session surface, not an automation input. Ignoring `is_error` is the classic CI bug — the process can succeed at the transport level while the agent reports failure.
</details>

### 6. Undoing a wrong turn

Claude edited four files and then went down the wrong path three prompts ago. You want the earlier code *and* the earlier conversation, while keeping the session. What do you use?

- A. `/clear`
- B. `/compact`
- C. `/rewind`
- D. `/resume`

<details><summary>Answer and reasoning</summary>

**C.** Checkpoints are created automatically at prompts, and `/rewind` can restore code, conversation or both, or summarise from a chosen point. **A** discards the session's context entirely. **B** frees context by summarising but does not restore files. **D** reopens or switches sessions; it does not roll one back.
</details>

### 7. Sharing a tool server

A team wants one MCP server configuration available to everyone who clones the repository, with no per-developer setup. Which configuration achieves this?

- A. Local-scope MCP, stored in `~/.claude.json`
- B. User-scope MCP, stored in `~/.claude.json`
- C. Project-scope MCP, stored in `.mcp.json` and committed
- D. An entry in `CLAUDE.local.md`

<details><summary>Answer and reasoning</summary>

**C.** Project scope is the only MCP scope designed to travel through version control. **A** is the default but private to one user and one project. **B** follows the user across projects but is still private. **D** is memory, not server configuration, and a local memory file is not shared anyway.
</details>

### 8. Skill or command?

The team wants Claude to reach for its migration checklist whenever a database migration is requested, without anyone typing a special name. What should they build?

- A. A skill whose `description` states when it applies
- B. A command that must be invoked as `/migrate`
- C. An entry in `~/.claude/settings.json`
- D. A deny rule for database tools

<details><summary>Answer and reasoning</summary>

**A.** Skills are discovered from their descriptions and loaded when a request matches, which is exactly "reach for it on its own". **B** works only when a human remembers the name — useful, but not what was asked. **C** configures behaviour, not reusable instructions. **D** would block the work rather than guide it.
</details>

### 9. Short scenario: the unsafe shortcut

A developer proposes running with `bypassPermissions` in the main repository so the agent stops asking for approval. Give the objection and a safer arrangement.

<details><summary>Answer and reasoning</summary>

`bypassPermissions` removes the approval boundary, and prompt-injected content or a misread instruction can then delete or exfiltrate without a checkpoint in the way. The safe arrangement is to keep `default` or `plan` for exploratory work, allow the specific commands the task needs, deny secrets and destructive patterns, and reserve bypass for a disposable container or VM with no credentials and no production network access. "Auto" mode is not a licence to skip this: a classifier reviewing actions reduces prompts, it does not make an untrusted repository safe.
</details>

## Exam-day checklist

- Ask "memory or configuration, shared or personal?" before choosing a file.
- Recite the settings stack: managed, command line, local, project, user.
- Recite the permission order: deny, ask, allow — across all scopes.
- Name the invoker: model for skills, human for commands, main agent for subagents.
- For sessions, distinguish rollback (`/rewind`), summarise (`/compact`), reset (`/clear`), reopen (`/resume`).
- For automation, check `-p`, output format, turn cap, exit status and `is_error`.

## Remember

- Memory teaches; settings enforce. Deny beats ask beats allow, and scope does not rescue an allow.
- `.claude/settings.json` is shared team configuration; `.claude/settings.local.json` is yours.
- Skills are discovered, commands are typed, subagents are delegated.
- `/rewind` is the undo for code and conversation; checkpoints are automatic.
- Headless mode returns data, not conversation: parse it, cap it, and check for failure.
- Project MCP lives in `.mcp.json`; local and user scopes live in `~/.claude.json`.
