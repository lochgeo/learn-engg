## Behaviour that lives in a file, not in a commit

In a Claude application, "configuration" includes things ordinary apps never had: the prompt text, the model tier, the effort level, the retrieval thresholds. Change any one of them and behaviour changes as surely as a code edit — but none of them shows up in a diff review unless you deliberately put them there.

Configuration and environment management is 4.1% of CCDV-F. The exam likes the operational questions: which values belong in a secret manager, how you validate config at startup, and how you roll back a bad prompt in under a minute. We will sort values into the right homes, validate them at boot, version prompts and models, and roll changes out behind flags.

## The big idea

Separate **what the system is** from **where it runs** from **how it is tuned**, and make every one of them explicit, validated, versioned and recorded.

The test for whether something should be configuration: would you ever want to change it without rebuilding? Prompt text, model identifier, effort level, token ceilings, feature flags, retrieval cut-offs — yes. Business rules with legal weight — no, those belong in code with tests.

## Start here

| Class | Examples | Where it lives | Who may change it |
| --- | --- | --- | --- |
| Secrets | API key, database URL, signing keys | Secret manager; `.env` locally only | Rotated by ops, never read by developers in prod |
| Environment identity | `dev` / `staging` / `prod`, region, tenant | Platform config or environment variables | Platform team |
| Behavioural tuning | Model id, prompt version, effort level, `max_tokens`, thresholds | Versioned config file, deployed with the app | Engineering, via reviewed change |
| Feature flags | Enable refunds, canary percentage, kill switch | Flag service or config service | Product/on-call, audited |
| Business rules | Refund ceilings, eligibility, tax | Code, with unit tests | Engineering, via code review |

### Environments must not leak into each other

| Environment | Data | Model | Purpose |
| --- | --- | --- | --- |
| Dev | Synthetic or fixtures | Cheapest adequate tier, alias allowed | Fast iteration |
| Staging | De-identified or synthetic, prod-like volume | Same pinned id as prod | Pre-release evaluation and load tests |
| Prod | Real customer data | Pinned id, no aliases | Serving users |

Separate credentials per environment. One key shared across dev and prod means a stray script in a notebook can spend the production budget or touch production data. Dev may use an alias so it tracks the newest model; production must pin, because a silent model change is an uncontrolled experiment on your users.

### Validate at startup

Configuration that is read as loose strings fails late and obscurely. Parse it into a typed object once, at boot, and refuse to start if it is wrong.

```python
from typing import Literal
from pydantic import Field, SecretStr
from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_prefix="APP_", extra="forbid")

    env: Literal["dev", "staging", "prod"]
    anthropic_api_key: SecretStr          # never printed, never logged
    model_id: str                         # pinned identifier, not an alias
    prompt_version: str = "triage@v7"
    effort: Literal["low", "medium", "high"] = "medium"
    max_tokens: int = Field(512, ge=1, le=4096)
    canary_percent: int = Field(0, ge=0, le=100)

settings = Settings()   # raises immediately on a typo or a missing key
```

`extra="forbid"` turns a misspelled variable into a startup error instead of a silently ignored setting. `SecretStr` keeps the key out of tracebacks and logs. In TypeScript the same job is done by a zod schema parsed over `process.env`, with `z.coerce` to convert strings and `.default()` for optional values.

Validate *ranges*, not just types: an unrecognised effort level or a `max_tokens` of zero passes a naive string or integer check but is invalid configuration.

### Version prompts like code

Store prompts as files (`prompts/triage/v7.md`), immutable once shipped, and resolve a logical name to a version per environment through a registry. Review prompt changes as pull requests, evaluate them in CI, and record the resolved version plus a content hash on every request.

Immutability matters: editing `v7.md` in place destroys your ability to explain last Tuesday's output. A change is `v8.md`, and the registry decides who sees it.

Model identifiers get the same treatment. Keep a small table of approved identifiers per task and environment, with the date they were validated, and an owner for upgrades. When a provider announces a deprecation, that table is your work queue — not a surprise.

### Feature flags, canaries, rollback

Flags decouple deployment from release. Use them for progressive rollout and as kill switches, and make assignment **sticky**: hash the user or conversation ID so a person does not flip between prompt versions mid-conversation.

A canary sends a small percentage of traffic to the new prompt or model while the old one serves the rest, then compares task success, latency, cost and refusal rate. Ship when the comparison is neutral or better; roll back on a threshold breach, automatically if you can. Because rollback is a flag or registry change, recovery takes seconds rather than a deploy cycle.

Two disciplines keep flags honest: every flag has an owner and an expiry date, and temporary flags are deleted after rollout. A codebase with forty stale flags is a system whose behaviour nobody can describe.

### Auditability

For each request, log the effective configuration: environment, model id, prompt version, effort level, thresholds, and flag states. For each change, record who approved it, what the evaluation showed, and when it took effect. That record is what lets you answer a regulator, a customer, or your own postmortem without guessing.

<learning-block type="mistake" title="Secrets in the wrong three places">

Keys leak through prompts ("here is the API key so you can call the tool"), through structured logs (logging the whole config object), and through client bundles (a frontend that calls Anthropic directly). None of these is exotic; all three are common. Credentials stay server-side, are referenced rather than inlined, and are never placed in a prompt — a model that can read a key can also repeat it.

</learning-block>

## Worked example

An engineer wants to raise `max_tokens` from 512 to 1024 for one endpoint because replies are truncating. The change touches a config file, not code. CI runs the evaluation set with the new value; the cost/latency gate shows p95 output tokens up 30% and per-request cost above budget.

The engineer instead raises the ceiling only for the long-form endpoint, adds a truncation-rate metric, and ships behind a 10% canary. After a day with no increase in `max_tokens` stop reasons and cost inside budget, the canary goes to 100%. The flag is deleted a week later. Nothing about that sequence required a model change, and everything about it was governed.

## On the exam

<learning-block type="check" title="What the exam asks">

Expect distinctions between secrets, environment identity and behavioural tuning, and questions about where a prompt belongs (versioned file plus registry, not a string literal). Remember that production pins model identifiers, canary limits blast radius, and rollback should be a configuration change rather than a redeploy. Validation happens at startup, with `extra="forbid"` or its zod equivalent.

</learning-block>

## Try it yourself

**Why is a 10% canary of a new prompt safer than deploying it to 100% of traffic with a rollback button ready?**

<details><summary>Reveal the explanation</summary>

Rollback only helps after you *detect* a problem, and detection takes time — minutes to hours, depending on how quickly quality metrics move. In that window a 100% deployment exposes every user, including the ones with the most sensitive cases. A canary limits exposure to a tenth of traffic while giving you a statistically useful sample to compare against the control group. It also makes the comparison causal: same day, same input mix, two variants. The rollback button is still needed; it is the second line of defence, not the first.
</details>

## Remember

- Separate secrets, environment identity, behavioural tuning, flags and business rules — each has a different owner and change process.
- One credential set per environment; dev may use aliases, production pins explicit model identifiers.
- Validate configuration into a typed object at startup, with range checks and unknown-key rejection.
- Prompts and model ids are versioned artifacts, reviewed and evaluated like code, and recorded per request.
- Canary limits blast radius; rollback should be a flag or registry change measured in seconds.
- Audit both the effective configuration per request and the approval trail per change.
