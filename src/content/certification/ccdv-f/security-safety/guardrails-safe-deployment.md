## Guardrails are what you keep when the model is wrong

Every model call has a non-zero chance of being wrong, and in production "non-zero" means "daily". Guardrails are the engineering around that fact: the checks that catch a bad input before it reaches the model, a bad action before it reaches a system, and a bad answer before it reaches a customer. They are not a substitute for a good prompt — they are what remains when the prompt does not work.

Safe deployment adds the other half: how you find out a guardrail is failing, and how you turn the feature off at 02:00 without a deploy. This sub-skill carries roughly **2.3%** of the exam, so expect a question about *which layer* or *which response* is appropriate.

## The big idea

Assume each layer fails independently, and make sure no single failure is fatal.

Defence in depth is not belt-and-braces duplication; it is placing different *kinds* of check where each is strongest:

- a deterministic check where the risk is deterministic (schemas, allowlists, rate limits);
- a model-based check where the risk is semantic (tone, relevance, policy);
- a human where the cost of being wrong is unacceptable.

The layered design also tells you what to do on failure. If a request fails the schema check, retrying may fix it. If it fails the policy check, retrying usually just burns tokens. If it is a high-value refund, no automated retry is appropriate at all.

## Start here

### The four layers

| Layer | Typical controls | Catches | Blind spot |
| --- | --- | --- | --- |
| **Input** | length and type validation, allowlisted formats, moderation classifier, injection heuristics, per-user rate limits | abuse, malformed payloads, obvious attacks, floods | novel phrasing; indirect injection arriving later via a tool |
| **Model** | system prompt with role and refusal policy, tool definitions scoped narrowly, effort and token caps, safety training | most ordinary misuse | anything the context can talk it out of |
| **Tools** | permissions, allowlists, sandboxing, approval gates, argument validation against the user's rights | unauthorised or over-broad actions | a permitted action used for a harmful purpose |
| **Output** | structured-output schema validation, groundedness and citation checks, PII and secret scanning, HTML/markdown sanitising, disclaimer policy | malformed, unsupported or leaky answers | subtle misinformation that passes every check |

Two habits worth memorising:

- **Validate structure with code, not prose.** If you need JSON, use a schema (tool inputs, structured outputs, or a validator) rather than asking politely for valid JSON and hoping.
- **Bound consumption.** Max tokens per call, max tool steps per turn, a timeout, and a per-tenant daily budget. Without these, a loop is a billing incident.

### Block, retry, or escalate

| Situation | Response | Why |
| --- | --- | --- |
| Output fails a schema or format check | **Retry** with the validation error appended, once or twice | The failure is mechanical and the fix is local |
| Output is off-topic, poorly grounded, or lower quality | **Retry** with a tightened prompt, or repair | Quality is recoverable |
| Input clearly violates policy (weapons, malware, abuse) | **Block** with a clear refusal | No reformulation should succeed |
| Request is ambiguous or the user is frustrated | **Block** politely and ask one clarifying question | Guessing is the bigger risk |
| Action is irreversible or high value (payment, deletion, external email) | **Escalate to a human** | No automated path should hold that authority |
| Distress, safety, legal or medical stakes | **Escalate to a human** | Correctness is not the only failure mode |
| Rate limit or budget exhausted | **Block** with a retry-after message | Protects availability for everyone |

The pattern: **retry is for mechanical faults, block is for policy, escalation is for consequence.**

## Worked example

### A validated ticket-triage endpoint

The endpoint returns a strict shape, checks it in code, and fails closed to a human queue.

```typescript
import { z } from "zod";

const Triage = z.object({
  category: z.enum(["billing", "bug", "account", "other"]),
  urgency: z.enum(["low", "normal", "high"]),
  summary: z.string().max(400),
  needs_human: z.boolean(),
});

async function triage(ticket: Ticket, user: User) {
  if (ticket.body.length > 20_000) return { status: "blocked", reason: "too_large" };
  if (!(await limiter.allow(user.id))) return { status: "blocked", reason: "rate_limited" };

  let lastError = "";
  for (let attempt = 0; attempt < 2; attempt++) {
    const raw = await callClaude({ prompt: buildPrompt(ticket, lastError) });
    const parsed = Triage.safeParse(extractJson(raw));
    if (parsed.success) {
      const clean = redactPii(parsed.data.summary);
      if (parsed.data.needs_human) return { status: "escalated", summary: clean };
      return { status: "ok", ...parsed.data, summary: clean };
    }
    lastError = parsed.error.message;
  }
  // Fail closed: two attempts is enough; a human takes over.
  return { status: "escalated", reason: "schema_failure" };
}
```

Note the shape of the design: bounded attempts, typed enums instead of free text where a category is needed, PII redaction on the way out, and a human queue as the fallback rather than a guessed answer.

A validated endpoint is only half the work; the other half is getting it into production without exposing everyone at once.

### Roll it out in stages

1. **Red-team before launch.** Run a repeatable suite: jailbreak prompts, injection strings inside documents, PII-extraction attempts, tool-abuse chains, and ordinary edge cases (empty input, huge input, other languages). Keep it in CI so a prompt change cannot silently reopen a hole.
2. **Shadow mode.** Run the new prompt or model alongside the old one, log both, and compare — without showing users the new output.
3. **Canary.** Send a small percentage of traffic (or one internal team) to the new version. Watch refusal rate, tool-error rate, escalation rate, latency, cost per request and thumbs-down rate against the baseline.
4. **Ramp.** Increase only while the guardrail metrics hold. Keep the previous version deployable.
5. **Kill switch.** A feature flag that disables the model feature and falls back to a deterministic path — a form, a template, a human queue. Test the switch before you need it; an untested kill switch is a rumour.
6. **Monitor continuously.** Alert on distribution shifts, not just errors: sudden refusal spikes, unusual tool-call patterns, prompt-injection detections, cost per tenant.
7. **Incident response.** Detect, contain (kill switch, revoke credentials, restrict tools), preserve transcripts and logs, eradicate and fix, restore, then review. Rotation of any credential the model could have seen belongs in containment, not clean-up.

<learning-block type="mistake" title="The three tempting wrong answers">

*"Add it to the system prompt."* Instructions help, but they are probabilistic and cannot enforce anything. *"Filter the output."* Output filters cannot un-send an email or un-delete a bucket; they act after the effect. *"Set effort to low."* Effort changes token spend, not adversarial success — and it does not make the model deterministic. When a question offers one of these as the only guardrail, look for the answer that puts a deterministic control at the boundary.

</learning-block>

## On the exam

Questions here are usually resource-allocation questions: given a limited engineering budget and a specific risk, which control buys the most safety? Match the *nature* of the risk to the layer — mechanical risks get code, semantic risks get models, consequential risks get humans. Also be ready to say why a canary beats a full launch, and what a kill switch must fall back *to*.

## Try it yourself

**A summarisation feature returns fluent answers that occasionally cite a policy number that does not exist. Where does the fix belong, and what would you measure after shipping it?**

<details><summary>Reveal the explanation</summary>

This is an output-layer grounding failure, not an injection or a tool problem. Fix it by validating citations against the retrieved source set in code — drop or flag any identifier that is not present in the context — and by requiring the answer to quote the supporting span. Strengthening the prompt ("only cite real policies") is a helpful addition but not the fix. After shipping, measure the rate of unsupported citations on a labelled sample, plus refusal and escalation rates to confirm you have not simply made the assistant useless.

</details>

## Remember

- Layer input, model, tools and output; each layer catches a different *kind* of failure.
- Retry mechanical faults, block policy violations, escalate consequential decisions.
- Bound every loop: attempts, steps, tokens, time, spend.
- Validate structure with schemas in code; never parse free text and hope.
- Red-team with a repeatable suite in CI, then shadow, canary, ramp — with a tested kill switch and a deterministic fallback.
- Monitor distributions, not just errors, and rehearse the incident-response path before an incident.
