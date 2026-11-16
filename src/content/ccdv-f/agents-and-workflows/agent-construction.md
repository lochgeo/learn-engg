## Four lines of `query()` hide a hundred decisions

Here is a complete agent in the Claude Agent SDK:

```python
async for message in query(prompt="Audit this repo for risky migrations."):
    print(message)
```

It reads files, runs commands and stops on its own. The interesting engineering is everything those four lines chose for you: which tools exist, who may call them, how many turns are allowed, when a human is asked, and what counts as done.

Building agents is 5.3% of the CCDV-F blueprint — the largest sub-skill in the Agents and Workflows domain. The exam asks you to configure a loop, not recite it, so know which option solves which symptom.

## The big idea

The **Claude Agent SDK** is a *harness*, not a model wrapper. It supplies the agentic loop, built-in tools, a permission system, hooks, MCP connectivity, subagents and session management. You supply a prompt and an options object; the harness turns "the model asked to read a file" into a real file read with an audit trail — a great deal of behaviour for free, living in a runtime you did not write.

## The loop you are configuring

Underneath every SDK call is the cycle from the raw API:

```
prompt
  → model responds with content blocks
  → any tool_use block is executed by the harness
  → tool_result blocks are appended to the transcript
  → model is called again
  → repeat until a final answer, a turn limit, or a denial
```

Against the Messages API you watch `stop_reason` to know whether the model wants a tool call (`"tool_use"`) or has finished. The SDK consumes that and hands you typed messages instead: assistant text and `tool_use` blocks, `tool_result` blocks fed back in, and a final `ResultMessage` carrying `num_turns`, duration and cost. Log that last one — it is your only reliable record of what a run cost.

Two entry points share that loop; the distinction is whether the conversation persists.

| | `query()` | `ClaudeSDKClient` |
| --- | --- | --- |
| Shape | one prompt in, an async stream out | a live session you connect to and talk with |
| State | self-contained per call | persists across turns, resumable by session id |
| Interruption | stop consuming | `interrupt()` mid-run |
| Fits | batch jobs, CI checks | chat, iterative work, review between turns |

If the user might say "now do the other one", you want `ClaudeSDKClient`. If it is a cron job, `query()` keeps the code honest.

## The options that carry the marks

| Option | Controls | Symptom it fixes |
| --- | --- | --- |
| `allowed_tools` | allowlist of tool names | over-broad capability, surprise side effects |
| `permission_mode` | how approvals are handled | unattended runs stalling, or unsafe autonomy |
| `max_turns` | hard cap on loop iterations | runaway loops, unbounded spend |
| `setting_sources` | which filesystem settings load | production inheriting a developer's local config |
| `mcp_servers` | external tool servers | reaching systems the built-ins cannot |
| `hooks` | deterministic callbacks around tool use | policy a prompt cannot enforce |

Two deserve emphasis. **`allowed_tools` is an allowlist, not a suggestion:** an unlisted tool is unavailable no matter what the system prompt says, which is how you enforce read-only review — and conversely, rules the run must obey belong in code, not in `system_prompt`, which only sets role and output shape. **`setting_sources` is your isolation switch:** the SDK loads no filesystem settings by default, so opting in to `["project"]` is a deliberate decision to inherit `CLAUDE.md` and project config. Check the current docs for defaults in your pinned version. Permission modes then run from ask-everything to ask-nothing:

| Mode | Behaviour | Use when |
| --- | --- | --- |
| `default` | asks before tools that need approval | a human is present |
| `acceptEdits` | auto-approves edits, still gates other tools | trusted repo, unattended refactors |
| `plan` | analysis only, no modifying actions | read-only review, or a plan to approve |
| `bypassPermissions` | runs everything without asking | a disposable sandbox, never a shared machine |

## Worked example: a policy the prompt cannot enforce

Prompts are advisory; hooks are deterministic. `PreToolUse` runs before a tool call and can allow, deny or rewrite it; `PostToolUse` runs after and can inspect or annotate the result.

```python
from claude_agent_sdk import ClaudeAgentOptions, HookMatcher
async def confine_writes(input_data, tool_use_id, context):
    path = input_data.get("tool_input", {}).get("file_path", "")
    if path and not path.startswith("/srv/repo/"):
        return {"hookSpecificOutput": {"hookEventName": "PreToolUse",
                "permissionDecision": "deny",
                "permissionDecisionReason": "writes are confined to /srv/repo"}}
    return {}          # no objection: normal permission handling applies

options = ClaudeAgentOptions(
    allowed_tools=["Read", "Write", "Edit", "Bash"],
    hooks={"PreToolUse": [HookMatcher(matcher="Write|Edit", hooks=[confine_writes])]},
)
```

"Never write outside the repo" is a policy, so it must hold on a bad turn; a hook either fires or it does not. The same mechanism redacts secrets on `PostToolUse`, logs every `Bash` command, and refuses destructive ones. Hook payloads and matcher syntax have shifted between releases, so verify the return contract against the docs for the version you pin.

## Custom tools: a schema, then an MCP server

Anything the built-ins cannot do becomes a tool. The SDK wraps your function as an in-process MCP server, which is why the allowlisted name carries a prefix.

```python
import json
from claude_agent_sdk import tool, create_sdk_mcp_server, ClaudeAgentOptions
@tool("lookup_invoice", "Fetch one invoice by id.", {"invoice_id": str})
async def lookup_invoice(args):
    row = db.invoices.get(args["invoice_id"])
    if row is None:
        return {"content": [{"type": "text", "text": "not found"}], "is_error": True}
    return {"content": [{"type": "text", "text": json.dumps(row)}]}

billing = create_sdk_mcp_server(name="billing", version="1.0.0", tools=[lookup_invoice])
options = ClaudeAgentOptions(
    mcp_servers={"billing": billing},
    allowed_tools=["mcp__billing__lookup_invoice"],   # server name + tool name
)
```

The schema is prompt engineering: it is the model's only description of what the tool accepts. Return failures as results with `is_error` rather than raising — an exception kills the run, while an error result lets the model retry or route around the problem.

## When to hand-roll the loop instead

Hand-roll `while` plus `messages.create` when your deployment cannot carry the SDK's runtime dependency, you need non-Claude providers, you must control context compaction precisely, the task is a **workflow** where the loop adds unwanted freedom, or each step must sit inside an existing scheduler. Do not hand-roll merely to "own the loop" in production: you would rebuild permissions, hooks, retries and tool plumbing, and the exam treats that as a design error.

## On the exam

<learning-block type="check" title="Four distinctions that decide questions">

- **Allowlist beats prompt.** Guarantees live in `allowed_tools`, `permission_mode` or a hook, never only in the system prompt.
- **`mcp__server__tool`.** A custom tool that is defined but not allowlisted under its qualified name is simply absent.
- **`max_turns` is the brake.** It is not a token budget and it does not limit one expensive tool call.
- **`acceptEdits` is not `bypassPermissions`.** One auto-approves edits; the other removes the gate entirely.

</learning-block>

## Try it yourself

**A.** A nightly agent reads a repository and posts a report to Slack, with no human present. It keeps trying to run `git push`. What do you change, and why not the system prompt?

<details><summary>Reveal the explanation</summary>

Constrain capability. Remove `Bash` from `allowed_tools`, or allow only named read commands, and let a `PreToolUse` hook matching `Bash` deny anything outside an allowlist of prefixes. A prompt sentence is advice; the run is unattended and the guarantee must be code. If the model still tries, the denial is logged and the loop continues with the remaining tools.
</details>

## Remember

- The Agent SDK is the harness — loop, built-in tools, permissions, hooks, MCP, sessions. You configure; it executes.
- `query()` is one-shot; `ClaudeSDKClient` is a persistent session with `interrupt()`.
- The loop runs prompt → model → `tool_use` → harness executes → `tool_result` → model, until a final answer or `max_turns`.
- `allowed_tools` and `permission_mode` are enforceable, and `PreToolUse`/`PostToolUse` hooks make policy deterministic; the system prompt is advisory.
- Custom tools are in-process MCP servers, allowlisted as `mcp__server__tool`, with failures returned as `is_error` results.
- Hand-roll only for a real constraint: no runtime, other providers, custom compaction, or a fixed workflow.
