## 53 items, 120 minutes, and a clock that will not negotiate

A full mock is not a test of how much you know; it is a test of how you spend 120 minutes. Knowing the material and never reaching item 44 is a fail with extra steps. This lesson is about the mechanics of the sitting: the pace, the order, the traps inside the options, and what you do with the wreckage afterwards.

It is an **unofficial study guide**. The item count, timing and pass mark below come from the published exam facts; confirm any scoring detail — especially how multiple-response items are marked — in Anthropic's current official exam guide.

## The arithmetic before the strategy

Fifty-three items in 120 minutes is 2.26 minutes each. Round it to 2.2 and hold it as an average, not a rule: some items take 40 seconds, some take four minutes.

| Checkpoint | Clock reading if you are on pace |
| --- | --- |
| Item 10 answered | 23 minutes |
| Item 20 answered | 45 minutes |
| Item 30 answered | 68 minutes |
| Item 40 answered | 90 minutes |
| Item 50 answered | 113 minutes |
| Item 53 answered | 120 minutes |

If you look up at item 30 and the clock says 85, you are 17 minutes behind and one decision away from leaving items blank. Blank items score nothing regardless of how well you understood them.

### The two-pass approach

- **Pass 1, minutes 0–95.** Answer what you can inside about 90 seconds. The moment an item needs a real calculation, a memory you do not have, or a third re-read, choose your best option, flag it (mark for review), and move. Never leave a blank in pass 1.
- **Pass 2, minutes 95–118.** Return to flags. Now you have time to think, and thinking is cheaper when the rest of the paper is already answered.
- **Minutes 118–120.** Confirm nothing is blank. Do not start a new train of thought.

Pass 1 at roughly 1.8 minutes per item is deliberately faster than the average. You are buying the 25 minutes of pass-2 thinking with that speed. Multiple-response items deserve 2.5 to 3 minutes, so take them from the single-choice items that you already know cold.

## Read the instruction before the options

Multiple-response prompts tell you how many answers they want, and candidates lose marks by answering the question they expected rather than the one printed.

| Stem wording | What it demands |
| --- | --- |
| "Select two" or "Choose two" | Exactly two. Count your ticks before you move on. |
| "Select three" | Exactly three; use the stem's constraints to choose, not the plausibility of each option |
| "Select all that apply" | No count to anchor you: judge every option true or false independently |

For "select all that apply", stop looking for the best answer. Score each option on its own as true or false, then submit the true set. The usual error is treating it as single-choice and picking the strongest of four, which silently discards a second correct statement.

Do not assume partial credit exists for these items. Check the current official guide for how they are marked, and plan as though each one is all-or-nothing — that is the assumption that keeps your count honest.

## Scenario questions: eliminate against requirements

Scenario items are long because they contain constraints, and the correct option is the one that satisfies all of them with the least machinery. Treat the stem as a requirements document, not a story. Read the final question first, then hunt the constraints:

1. **Does it meet every stated requirement?** One unmet constraint disqualifies an option, however elegant the rest of it.
2. **Is it the smallest change that works?** A rewrite is rarely the answer when the scenario describes a working system with one defect.
3. **Does it preserve verification?** Options that remove your ability to check the output are usually wrong, even when they are faster.
4. **Does it invent something?** A tool, permission or dataset not mentioned in the scenario cannot be part of the answer.

<learning-block type="mistake" title="Eliminating on plausibility instead of constraints">

The most common elimination error is ruling out the correct option because it sounds boring. "Add a test case for the failing input" loses to "redesign the agent with a reasoning loop" in the reader's imagination, even when the scenario describes a single reproducible bug. Ask what the scenario actually needs, not what would make a good conference talk.

</learning-block>

## The distractors that keep winning

Each distractor sells a feeling; the check in the right-hand column is what kills it.

| Distractor | Why it attracts | The check that kills it |
| --- | --- | --- |
| More agency | Autonomy sounds like a better product | Does the scenario ask for determinism, auditability or a bounded task? Agency fights all three |
| More prompt text | Adding rules feels like engineering | Does the new text give a testable criterion, or just volume the model must wade through? |
| Skipping evaluation | Shipping quickly sounds pragmatic | Is there a requirement to verify, or a failure mode you could not detect without a test? |
| One giant prompt instead of a workflow | Fewer moving parts | Does the task have stages with different tools, permissions or retries? |
| Exposing every tool to the agent | Capability looks like progress | Does each tool have a purpose and a reason the model should hold it? Least privilege is the default |

Notice the pattern: each distractor trades a real property — determinism, concision, verification, structure, least privilege — for the feeling of doing more.

## When to change an answer

Most answer changes make the score worse; make one only when you can state the reason in a single sentence.

| Change it | Leave it |
| --- | --- |
| You misread the stem: a selection count, a "not", a constraint | You simply feel uneasy about a choice you reasoned through |
| You recall a specific fact that contradicts your pick | A later item merely reminds you of this one |
| Your choice violates a requirement you have now spotted | You are near the end and want to feel finished |
| You flagged it for a calculation and have now done the arithmetic | Time pressure, with no new information |

First instincts are not magic, but they are usually based on more reading than the panic at minute 110. Change on evidence, never on mood.

## The debrief, written immediately

Do the debrief before you close the laptop. Memory of *why* you chose a wrong option decays within the hour.

```text
MOCK: date, provider, conditions (timed? no notes?)

Score: _____   Raw: ___/53   Items left blank: ___
Pace: minute at item 30: ___   Flags: ___   Flags cleared: ___

Misses, one line each:
  Q__  domain: __________  my answer: ___  correct: ___
       cause: knowledge | misread | elimination | time
       the sentence I should have known: ____________________

Pattern held (2+ times): ______________________________
Next block: domain __________, ___ min, artefact ____________
```

Fill the cause column honestly, because each cause has a different cure. **Knowledge** misses need study. **Misread** misses need a reading drill: underline the instruction before the options. **Elimination** misses need constraint practice, not more content. **Time** misses need pace work — and a blank answer is always a pace miss, never a knowledge miss.

### A worked debrief

A mock returns 8 misses. Sorting them: three are Security and Safety items where the correct answer restricted a tool's scope; two are Applications items where streaming was confused with batching; one is a misread "select three" answered with two; two are blanks at the end of the paper.

That is three causes, not eight failures. Give them three blocks: forty minutes on least privilege and tool scoping; thirty minutes on streaming versus batch request patterns; twenty minutes answering ten multiple-response stems with only the instruction and no options, counting selections out loud. The blanks are solved by the two-pass pace in this lesson, not by content revision.

## Reading your score against 720

The scaled score runs 100–1000 and 720 passes. A raw mock percentage is **not** that score, and inventing a conversion is how candidates talk themselves into sitting an exam too early. If your mock reports a scaled score, compare it to 720 directly. If it reports raw accuracy, use margin and trend instead.

| What the mocks show | What to do |
| --- | --- |
| Two consecutive mocks comfortably clear of the line, no weak domain | Book it; keep short spaced reviews |
| Above the line overall, but one heavy domain below 60% | One targeted block on that domain before booking |
| Hovering near the line, misses spread evenly | Two more weeks of the weekly rhythm, then re-mock |
| Clearly below, with blanks still appearing | Fix pace and the two heaviest domains before any new topic |

<learning-block type="check" title="On the exam">

Count the selections. A multiple-response item answered with two ticks where three were required fails as surely as one answered from ignorance, and it costs nothing to check. Before you leave any item, re-read the instruction line — not the scenario, the instruction.

</learning-block>

## Try it yourself

**You finish item 30 at minute 80, with 9 flags and 23 items untouched. Diagnose the position and decide the next ten minutes.**

<details>
<summary>Reveal the explanation</summary>

On pace you would have finished item 30 at minute 68, so you are 12 minutes behind, with 23 items and 40 minutes left. That is 1.74 minutes per remaining item — faster than the 2.2 average — before any pass-2 time exists. Starting pass 2 now is the trap: it would feel productive while guaranteeing blanks.

The ten minutes go to the cheapest unattended items, not the flags. Work forward at speed, spending no more than 90 seconds on any item, and flag freely. Clear only the flags you can settle in under a minute as you pass them; the expensive ones wait until the paper is complete. The rule is blunt: an unanswered item is a certain zero, a flagged item is a maybe.

</details>

## Remember

- 53 items, 120 minutes: 2.2 minutes is the average, not the target for every item.
- Pass 1 answers everything by about minute 95; pass 2 spends the remaining time on flags and blanks.
- "Select two" means two; "select all that apply" means judge each option true or false on its own.
- Eliminate against the scenario's stated constraints, and prefer the smallest change that keeps verification intact.
- Change an answer only for new evidence — a misread, a recalled fact, a broken requirement.
- Convert misses into blocks by cause: knowledge, misread, elimination, time. Blanks are a pace failure.
- Raw mock accuracy is not the scaled score; compare scaled mocks to 720 and raw mocks to margin and trend.
