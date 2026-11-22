## The agent is not the place to put your process

Every team that adopts an agent accumulates instructions fast: a paragraph appended to the system prompt, a rule nobody reads, three skills that overlap, a subagent that exists because someone was curious. Agentic customisation is the discipline of choosing the smallest mechanism that fixes the observed problem. It is 4.1% of CCDV-F, and the exam asks it as a series of "which mechanism" scenarios rather than as definitions.

## The big idea

Two questions sort almost every option: **who triggers it**, and **does it change what is in the model's context at all**. A project instruction file is always present. A skill is loaded only when its description matches the task. A subagent gets its own context window and returns a summary. A tool adds a capability, not an instruction.

## Start here

| Mechanism | Trigger | Where it lives | Best for |
| --- | --- | --- | --- |
| `CLAUDE.md` | Always, every session | Repository file | Stable project facts: build and test commands, layout, conventions |
| Rule | Always, or scoped by path | Agent configuration | Short hard constraints, such as never editing generated files |
| Skill | Model matches the description, or the user invokes it | A directory containing `SKILL.md` | A repeatable procedure with steps, scripts and reference files |
| Subagent | Model delegates, or the user invokes it | Its own definition file | Work needing an isolated context, a restricted tool set or a specialism |
| Slash command | The user types it | Command file | An explicit, repeatable entry point that takes arguments |
| Tool (including MCP) | The model calls it mid-turn | Code or an MCP server | A capability the model lacks: read a system, take an action |

### Separate facts, constraints and procedures

Most bloated instruction files are three documents wearing one coat:

- **A fact that is true every session** belongs in `CLAUDE.md` — "tests run with `pnpm test`, and the API client is generated into `src/gen`".
- **A constraint that must never break** belongs in a rule, and ideally in CI. If violating it must fail, a prompt is not the enforcement mechanism.
- **A procedure followed sometimes** belongs in a skill. It should not cost context on the days you are not doing it.

### Skills: structure and progressive disclosure

A skill is a folder, not a prompt:

```text
.claude/skills/release-check/
  SKILL.md
  references/runbook.md
  scripts/check_versions.py
```

`SKILL.md` opens with front matter — `name` and `description` — then the procedure itself. Loading happens in three stages: the **description is always available** because it is the trigger surface; the **body loads when the skill is invoked**; **bundled files load only when the skill tells the model to read them**. That is progressive disclosure, and it is why the description must state both when to use the skill and when not to, while the body stays short and points at references instead of inlining them.

### Subagents: briefs and context isolation

A subagent starts with a fresh context. It does not inherit the conversation, the files already read, or the conclusions already reached, so the brief must be self-contained: the goal, the inputs (paths, ids, versions), the constraints, the return format, and what "done" means. In exchange you get isolation — exploration noise and dead ends stay out of the main thread — plus parallelism and a narrower tool set. The cost is that the summary is lossy: anything the main agent needs later must be in the return contract.

<learning-block type="example" title="A skill and a subagent for the same repository">

```markdown
---
name: release-check
description: Run this repository's pre-release checklist before tagging a version. Use when asked to prepare, verify or cut a release. Do not use for ordinary pull-request review.
---

# Release check

1. Read `references/runbook.md` and follow it in order.
2. Run `python scripts/check_versions.py` and stop if it exits non-zero.
3. Confirm CHANGELOG.md has an entry for the version being tagged.
4. Report each step as pass, fail or skipped, quoting the output that decided it.
```

```markdown
---
name: migration-auditor
description: Audits a repository for deprecated API usage during a dependency upgrade. Returns a table of file, line, risk and replacement. Use when a version bump may affect call sites.
tools: Read, Grep, Glob
---

You audit one repository. The task gives you the repository root and the target version.
Read docs/migration-notes.md before searching. Do not edit files.
For each finding return: file, line, the offending call, why it breaks on the target
version, and the minimal replacement. If there are no findings, say so and list the
patterns you searched for.
```

The skill encodes a procedure the main agent should follow. The subagent encodes a job worth doing in a separate window and reporting back. Both are versioned text, so both can be reviewed like code.

</learning-block>

## Choosing, then keeping it small

Work down this list and stop at the first match:

- True every session → `CLAUDE.md`.
- Must never happen → rule, enforced in code where possible.
- A procedure used sometimes → skill.
- Needs isolation, parallelism or a narrower tool set → subagent.
- A missing capability → tool or MCP server.
- A deliberate human entry point → slash command.

Then defend the collection:

- **One source of truth.** A skill that restates the runbook will drift from it; link to the file instead.
- **Overlapping descriptions cause mis-triggers.** If two skills could plausibly fire on the same request, merge them or sharpen both descriptions.
- **Version and test.** Keep customisations in git. Test the trigger (does it fire on a realistic prompt, and stay quiet on a near-miss?) and the output (a small fixed task set you re-run after every edit).
- **Delete what does not earn its place.** If removing a customisation changes nothing measurable, it is context cost and maintenance with no return.

## On the exam

<learning-block type="check" title="On the exam">

Expect "which mechanism" scenarios with one clearly correct fit. The distractors are usually plausible but misplaced: a subagent used to store a persistent project fact, a skill used as a hard guardrail, a rule used to hold a 40-line procedure, or a tool proposed for something that is purely an instruction. Ask what triggers it and whether the context should always carry it.

</learning-block>

## Try it yourself

**Three teams each keep a 40-line deployment procedure inside `CLAUDE.md`, and the copies have drifted. What would you change?**

<details><summary>Reveal the explanation</summary>

Move the procedure into one skill owned by the team that runs deployments, with the long detail in `references/` and any checks as scripts. Leave `CLAUDE.md` with the two or three facts every session needs — that deployments use the skill, and where the runbook lives. Genuine guardrails ("never deploy from a dirty tree") move into the release script or CI, so they fail loudly instead of being remembered. One source of truth, loaded only when relevant.

</details>

## Remember

- Ask who triggers it and whether it belongs in context every session before choosing a mechanism.
- `CLAUDE.md` holds facts, rules hold constraints, skills hold procedures, subagents hold isolated work, tools hold capability.
- Skills load in stages: description always, body on invoke, bundled files on demand — so the description is the trigger.
- A subagent brief must be self-contained, and its return contract must carry everything the main agent needs.
- Keep customisations in version control and test both the trigger and the output.
- Overlapping descriptions and duplicated procedures are the two reliable signs of sprawl.
