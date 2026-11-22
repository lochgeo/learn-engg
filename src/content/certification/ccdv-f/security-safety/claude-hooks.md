## When "please don't" is not enough

A line in `CLAUDE.md` that says "never run destructive commands" is advice. Claude usually follows it, and occasionally does not — because it is a language model reading text, and text can be ambiguous, stale, or contradicted by something else in the context. For a rule that must hold every time, you need code that runs whether the model cooperates or not. That is what **Claude Code hooks** are: commands your harness runs at defined lifecycle points, the deterministic layer under the probabilistic one, worth about **1%** of this exam — usually a single question on which control belongs in a hook rather than a prompt.

## The big idea

A hook is enforcement; a prompt is guidance.

The model chooses its tool calls, but it does not choose whether your hook runs. When a `PreToolUse` hook denies a call, the call does not proceed, and the model receives the reason so it can try something else. That is categorically different from an instruction, which the model may weigh against other context.

Three properties define the design space. Hooks are **event-driven** — they attach to lifecycle events, not to particular prompts. They are **deterministic**: same input, same decision, provided the script does not crash. And they sit **outside the model**, which sees the rule only as an outcome — it cannot be talked out of it, only failed by a bug.

## Start here

### The events you will be asked about

| Event | Fires | Typical use |
| --- | --- | --- |
| **PreToolUse** | before a tool call executes | allow, deny, or ask; validate paths and commands; enforce policy |
| **PostToolUse** | after a tool call returns | audit logging, lint/format the edited file, scan output for secrets, feed a correction back |
| **UserPromptSubmit** | when a prompt is submitted | inject standing context, reject prompts that break house rules |
| **SessionStart / SessionEnd / Stop** | session opens, closes, or the model finishes | load context, flush audit records, verify completion |

The full list and the exact payload fields are version-sensitive, so check the current Claude Code hooks documentation rather than memorising field names.

### Decisions and exit codes

For `PreToolUse`, the hook expresses one of three outcomes:

| Decision | Effect | Use for |
| --- | --- | --- |
| **allow** | the call proceeds without prompting | routine, low-risk operations |
| **deny** | the call is blocked; the reason goes back to the model | policy violations, protected paths, forbidden commands |
| **ask** | the user is prompted to approve | genuinely ambiguous or high-consequence calls |

The exit-code contract is the part most often tested:

- **exit 0** — success. Any JSON on stdout is interpreted as a structured decision; plain stdout may be shown to the user depending on the event.
- **exit 2** — blocking error. The tool call is stopped and stderr is fed to the model as the explanation.
- **any other non-zero** — non-blocking error. The failure is surfaced, but **the tool call proceeds**.

That last line is a security trap. A hook script that crashes on a parsing error exits 1 and the dangerous command runs. Fail closed deliberately: wrap the logic, and on any unexpected exception emit an explicit deny.

### Matchers

A matcher selects which tool calls the hook applies to. It is configured alongside the command, matches on tool name, and commonly accepts a regular expression, so `Bash` targets shell calls while `Edit|Write` targets file modification. Omitting the matcher, or using a catch-all, applies the hook to every tool — a reasonable default for auditing, a poor one for a slow check on every call.

<learning-block type="concept" title="Allowlists, not blocklists">

A hook that denies `rm -rf` is defeated by `rm -r -f`, by a script that runs it, or by a command assembled at runtime. Prefer a positive rule: permit the specific commands the project needs, and deny everything else. The same logic applies to paths — an allowlist of writable directories is enforceable; a blocklist is a puzzle for the model to solve.

</learning-block>

## Worked example

### A project guard for shell commands and edits

Settings live in `.claude/settings.json` (project scope) and the hook bodies are ordinary scripts.

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "$CLAUDE_PROJECT_DIR/.claude/hooks/guard-bash.py"
          }
        ]
      }
    ],
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          {
            "type": "command",
            "command": "$CLAUDE_PROJECT_DIR/.claude/hooks/audit-edit.py"
          }
        ]
      }
    ]
  }
}
```

The guard receives the proposed call as JSON on stdin — event name, tool name and tool input, among other fields — and answers by exit code, or with structured JSON when it needs to say "ask". A minimal, fail-closed shape:

```python
import json, sys

ALLOWED = {"pytest", "ruff", "git status", "git diff"}

try:
    event = json.load(sys.stdin)
    command = (event.get("tool_input") or {}).get("command", "").strip()
    if any(command == ok or command.startswith(ok + " ") for ok in ALLOWED):
        sys.exit(0)      # no objection: the call proceeds
    print(f"blocked: {command!r} is not on the project allowlist", file=sys.stderr)
    sys.exit(2)          # exit 2 = block, stderr is shown to the model
except Exception as exc:  # parse failure, missing field, anything unexpected
    print(f"guard error, failing closed: {exc}", file=sys.stderr)
    sys.exit(2)
```

The `except` branch is the point of the exercise. Without it, a malformed payload becomes an allow.

### Auditing and observability

- **Log every decision**, not just denials: timestamp, session id, tool, a hash of arguments, decision, and rule matched. Denials alone hide near-misses.
- **Redact and retain deliberately.** Tool inputs routinely contain tokens, connection strings and personal data; hash or truncate before the log line leaves the process, and apply the same retention and access rules as any other sensitive log.
- **Test the hooks themselves.** Feed each script recorded payloads — allowed, denied, malformed, empty — and assert the exit code. Put that in CI, because a hook is production code with a security mandate.
- **Watch the deny rate.** A spike means either an attack or an over-tight rule; both need a human. A deny rate of zero over weeks may mean the hook is not running.

## On the exam

If the requirement is "must", "always", "never", "cannot be bypassed", or "even if the model is wrong", the answer is a hook, a permission, or another deterministic control — not a prompt edit. If the requirement is tone, style, or preferred approach, a prompt or `CLAUDE.md` is appropriate. Watch for answers that propose a hook for output *content* it cannot see, or that conflate PostToolUse (too late to prevent) with PreToolUse.

## Try it yourself

**A team wants to stop Claude Code from editing anything under `db/migrations/`. Which event, which decision, and what must be true of the script when it fails?**

<details><summary>Reveal the explanation</summary>

`PreToolUse` with a matcher covering the file-editing tools (`Edit|Write`, and any other tool that writes files in your setup), returning **deny** when the target path resolves inside `db/migrations/`. PostToolUse would be too late — the file would already be changed. The script must **fail closed**: an exception, an unparsable payload or an unresolved path should produce a deny, not exit 1, because exit codes other than 0 and 2 are non-blocking and let the edit through. Resolve symlinks and relative paths before comparing, or the rule is trivially bypassed.

</details>

## Remember

- Prompts guide, hooks enforce; hooks are code the model cannot negotiate with.
- PreToolUse prevents; PostToolUse audits and repairs after the fact.
- Decisions are allow, deny or ask; reserve ask for genuinely high-consequence calls.
- Exit 2 blocks and returns stderr to the model; other non-zero codes are non-blocking errors, so fail closed explicitly.
- Matchers select by tool name and can use patterns; a catch-all matcher is fine for logging, expensive for checks.
- Test hook scripts with recorded payloads, log every decision with redaction, and watch for a zero deny rate.
