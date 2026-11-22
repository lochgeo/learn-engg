## The repo, not the prompt, is the real input

A chat window forgets your build command the moment you close it. Claude Code is built around the opposite assumption: the project itself should carry the instructions, the permissions boundary, and the reusable workflows, so that a fresh session starts already knowing how *this* team works. Operating it well is mostly a question of putting each piece of knowledge in the right file.

This lesson maps those pieces — what the agent knows, what it may do, and how you drive it — so that a broken session points you at one file instead of a guess.

This is Domain 3, **Claude Code Operation**, worth about 3.1% of CCDV-F. The weighting is small, but the distinctions it tests — which file wins, which component is model-invoked, what headless mode actually returns — are the ones that quietly break real automation.

## The big idea

Claude Code has three layers, and almost every exam question is really asking which layer you are in:

- **Memory** — what the agent knows before you speak: `CLAUDE.md` files, rules, imports.
- **Control** — what it is allowed to do: permission rules and settings precedence.
- **Interface** — how you drive it: interactive sessions, slash commands, headless mode, MCP.

A session is a workspace, not a chat log. Its conversation, file checkpoints and working directory travel together, which is why resuming and rewinding behave the way they do.

## Start here

### The components at a glance

| Component | Where it lives | Who pulls it in | Committed? |
| --- | --- | --- | --- |
| `CLAUDE.md` | repo root, subdirectories, `~/.claude/` | loaded automatically at session start | project file, yes |
| Rules | `.claude/rules/*.md`, `~/.claude/rules/*.md` | loaded with project or user memory | yes |
| Skills | `.claude/skills/<name>/SKILL.md` | model-invoked by `description`, or typed as a slash command | yes |
| Commands | `.claude/commands/<name>.md` | you invoke `/name` | yes |
| Subagents | `.claude/agents/<name>.md` | delegated by the main agent or invoked explicitly | yes |
| Settings | `.claude/settings.json`, `.claude/settings.local.json`, `~/.claude/settings.json` | read at start-up and on change | project yes, local no |
| MCP servers | `.mcp.json`, `~/.claude.json` | connected at start-up | project scope yes |

### Memory has a pecking order

`CLAUDE.md` loads from several places, broadest first: organisation-managed policy, then your user file (`~/.claude/CLAUDE.md`), then the project file, then `CLAUDE.local.md` for your private notes, then `CLAUDE.md` files in subdirectories, which load on demand when you work in those directories. More specific guidance sits closer to the work, so a package-level file can override a habit described at the root.

Two habits make this hierarchy useful rather than noisy:

- Run `/init` once per repository. It reads the codebase and writes a starting `CLAUDE.md` with build commands, test commands and architecture; if one already exists it suggests improvements instead of overwriting. Keep it to roughly two screens and treat it as a cheat sheet, not documentation.
- Put durable facts there — the package manager, the lint command, the shape of the codebase — and use `@path/to/file` imports for longer references. Team-wide "must never do this" rules belong in rules files or managed settings, not in a comment.

### Settings and permissions

`settings.json` precedence, highest first: **managed settings**, then command-line `--settings`, then `.claude/settings.local.json`, then `.claude/settings.json`, then `~/.claude/settings.json`. Scalars at a higher level win; arrays merge. Crucially, permission rules do **not** follow that simple "higher wins" story: they are evaluated **deny, then ask, then allow**, and a deny from any scope beats an allow from any other scope. There is no narrow exception carved out of a broad deny.

Permission rules name a tool and often a pattern:

```json
{
  "permissions": {
    "allow": ["Bash(npm run test:*)", "Read(./docs/**)"],
    "ask": ["Bash(git push:*)"],
    "deny": ["Read(./.env)", "Bash(rm -rf:*)"]
  }
}
```

The permission **mode** sets the baseline: `default` asks before edits and commands, `acceptEdits` auto-accepts file edits, `plan` explores read-only and proposes a plan, `auto` lets a background classifier review risky actions, `dontAsk` denies anything not pre-approved, and `bypassPermissions` skips checks and belongs only in a sandbox or container.

Start complex work in plan mode, review each diff before accepting it, then narrow permissions deliberately.

## Worked example

A team wants a repeatable "review the diff" workflow and a nightly headless check — a non-interactive run that CI can schedule. First the interactive setup:

```text
$ claude
> /init
  Created CLAUDE.md (build, test and lint commands detected)
> /memory
  Opened memory files: CLAUDE.md, ~/.claude/CLAUDE.md
> /permissions
  allow  Bash(pytest:*)
  ask    Bash(git push:*)
  deny   Read(./.env)
> /agents
  Created reviewer (tools: Read, Grep, Glob)
> /compact keep the API constraints, drop the file listings
```

The custom command is just a file, `.claude/commands/review.md`, with frontmatter and an argument:

```markdown
---
description: Review the staged diff for correctness and test gaps
argument-hint: [focus-area]
allowed-tools: Read, Grep, Bash(git diff:*)
---

Review the staged changes, concentrating on $ARGUMENTS.
Report correctness bugs first, then missing tests. Do not edit files.
```

Typing `/review caching` substitutes the argument. A skill does something similar but is discovered by the model from its `description`; it is the right home for a capability the agent should reach for on its own, while a command is a button a human presses.

A subagent is a separate context window with its own prompt and tool list, which keeps a long review from flooding the main conversation; its definition lives in `.claude/agents/`, so changes to an agent are reviewed like code, while its memory comes from the same `CLAUDE.md` hierarchy.

Now the headless run, in CI:

```bash
claude -p "Run the test suite and summarise failures" \
  --allowedTools "Bash(pytest:*)" \
  --output-format json > result.json
```

`-p` is non-interactive: it prints the final answer and exits. `--output-format json` returns one object containing `result`, `session_id`, `is_error`, `usage` and cost metadata; `stream-json` emits one JSON event per line instead, which is what you parse for progress. `--include-partial-messages` adds token-level events.

For a machine-readable answer rather than prose, pass a JSON schema with the run. Use `--max-turns` to cap agentic loops, and resume with `--resume SESSION_ID` when the job needs a second pass.

<learning-block type="example" title="Streaming JSON is a log, not a document">

With `--output-format stream-json`, each line is a complete event. A typical sequence is an init event carrying the session id and tools, assistant events, tool-result events, and a final `result` event. Parse line by line and keep the last `result`. Do not feed the whole stream to a JSON parser at once, and do not assume the text appears only in the final event.

</learning-block>

## On the exam

So far you have built the map; on the exam you read symptoms against it. Expect questions that give you a symptom and ask for the correct component or scope, plus a few on headless output.

<learning-block type="check" title="The four distinctions that get tested">

- **Memory versus permission.** "The agent keeps using npm instead of pnpm" is a `CLAUDE.md` problem. "The agent ran a destructive command" is a settings and permission-mode problem.
- **Shared versus personal.** Team conventions go in the committed project files; your machine-specific paths and tokens go in `CLAUDE.local.md` or `.claude/settings.local.json`.
- **Skill versus command.** A skill is selected by the model from its description; a command is selected by a human typing its name.
- **Interactive versus headless.** Slash commands belong to a session. Automation uses `claude -p` with an output format, and treats the exit status and `is_error` as the contract.

</learning-block>

## Try it yourself

**A teammate's allow rule for `Bash(git status)` is ignored, while a project deny rule for `Bash(git push:*)` still blocks them. They conclude the settings files are corrupt. What is actually happening?**

<details>
<summary>Reveal the explanation</summary>

Nothing is corrupt. Permission evaluation is deny, then ask, then allow, and deny rules from any scope are applied before any allow rule. A user-level allow cannot override a project-level deny, and a narrower allow cannot carve an exception out of a broader deny. If the action must be permitted, the deny rule itself has to be changed by whoever owns that scope — or the action must be re-scoped so it no longer matches the deny pattern.
</details>

## Remember

- `CLAUDE.md` is loaded memory; `settings.json` is enforced configuration. Do not put secrets or policy in the wrong one.
- Settings precedence runs managed, command line, local project, shared project, user — but permissions run deny, ask, allow across every scope.
- `/init` bootstraps project memory; keep it short, concrete and committed.
- Skills are model-invoked, commands are human-invoked, subagents get their own context.
- `/rewind` restores code, conversation or both from automatic checkpoints; `/compact` spends context wisely; `/clear` starts clean; `/resume` reopens a session and `/rename` labels it.
- Headless mode is `claude -p` plus an output format; parse `stream-json` line by line and check `is_error`.
- MCP scopes: local (private, this project), project (`.mcp.json`, shared), user (all your projects).
