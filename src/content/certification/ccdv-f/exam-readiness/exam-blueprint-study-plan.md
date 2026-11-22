## Fifty-three items, eight domains, one honest plan

The CCDV-F paper is short enough to finish and wide enough to punish aimless reading. Fifty-three items in 120 minutes leaves roughly 2.2 minutes per question, and the eight domains are weighted so unevenly that a candidate who studies alphabetically can spend a fortnight on 5.7% of the paper.

This is an **unofficial study guide**. It is built from the published exam facts and domain weights, and every number below should be checked against Anthropic's current official exam guide before you book. Policies, prices and item counts change; the shape of a good plan does not.

## What you are actually sitting

Memorise these eight facts; everything else in this lesson builds on them.

| Fact | Detail |
| --- | --- |
| Items | 53 |
| Time | 120 minutes, about 2.2 minutes per item |
| Format | Multiple-choice and multiple-response |
| Score | Scaled 100–1000; **720 to pass** |
| Fee | $125 per attempt |
| Result validity | 12 months |
| Delivery | Pearson VUE, online proctored or at a test centre |
| Retakes | Wait 14 days after the first attempt, 30 after the second, 90 after the third; no more than four attempts in any rolling 12 months |

Two consequences follow immediately. First, a 720 pass line on a 100–1000 scale means you cannot coast on a strong domain: the paper is small, so a handful of items carries real weight. Second, $125 and a 14-day minimum wait make a speculative attempt expensive — in money, and in the fortnight you lose before you may sit it again.

## The eight domains and what they weigh

The published weights, turned into item counts so you can feel the size of each domain.

| Domain | Weight | Share of 53 items (approx.) |
| --- | --- | --- |
| Applications and Integration | 33.1% | 18 |
| Model Selection and Optimisation | 16.8% | 9 |
| Agents and Workflows | 14.7% | 8 |
| Prompt and Context Engineering | 11.0% | 6 |
| Tools and MCPs | 10.6% | 6 |
| Security and Safety | 8.1% | 4 |
| Claude Code | 3.1% | 2 |
| Evaluation, Testing and Debugging | 2.6% | 1 |

The item counts are arithmetic on the official weights, rounded, and they will not total exactly 53. Use them to feel the size of a domain, not to predict individual questions.

Read the table as a budget. **Applications and Integration alone is a third of the paper.** Add Model Selection and Agents and you have 64.6% — nearly two thirds — in three domains. That is where your evenings should go first.

Weight is not the same as difficulty, though. A 2.6% domain can still contain the item you miss, and Evaluation, Testing and Debugging supplies a habit of mind — build a test set, check the output, diagnose the failure — that leaks into the big scenario questions. Cover everything; invest by weight.

## A four-week plan that front-loads the weight

With the weights in hand, the order of study is almost forced.

Four weeks at roughly eight hours each is about 32 hours. Front-loading means the two heaviest domains land while your energy is highest and while there is still time to revisit them.

| Week | Focus | Weight covered | Hours | Output you can point to |
| --- | --- | --- | --- | --- |
| 1 | Applications and Integration | 33.1% | 10 | A working script that sends a request, handles the response shape and streams output |
| 2 | Agents and Workflows, then Model Selection and Optimisation | 31.5% | 9 | A small agent loop with an explicit stop condition, plus a written model-choice trade-off |
| 3 | Prompt and Context Engineering, then Tools and MCPs | 21.6% | 7 | A system prompt with examples, and one tool schema with a tightened description |
| 4 | Security and Safety, Claude Code, Evaluation | 13.8% | 6 | An injection checklist, one evaluation set of ten cases, two timed mocks |

Weeks 1 and 2 carry 64.6% of the marks. Week 4 carries the remainder and is deliberately lighter so that consolidation and full mocks fit inside it. If you must compress, cut reading time, not mock time.

### The weekly rhythm

| Slot | Time | What happens |
| --- | --- | --- |
| Monday | 90 min | Read one domain's material, then close it and write a one-page summary from memory |
| Tuesday | 60 min | Build the smallest artefact that exercises the domain |
| Wednesday | 45 min | 10–15 practice items, each tagged with its domain before you answer |
| Thursday | 45 min | Redo only the misses, closed book, and write down why the wrong option attracted you |
| Saturday | 90 min | Mixed set drawn from every domain covered so far |
| Sunday | 30 min | Rewrite the summary sheet; no new material, no new questions |

The Tuesday artefact matters more than it looks. Recall fades; a script you debugged, or a schema you had to tighten because the model kept calling the wrong tool, produces the kind of memory that survives a scenario question.

## Practice questions are diagnostics, not a scoreboard

Tag every item by domain before you answer. After marking, you want a table of accuracy per domain, not one overall percentage — the overall figure hides the only information that changes your plan.

| Result on a 10-item domain set | Verdict | Next action |
| --- | --- | --- |
| 9–10 | holding | Revisit in ten days, spaced |
| 7–8 | fragile | One focused re-read, then five fresh items |
| 5–6 | weak | Rebuild from the primary documentation, then re-test |
| 0–4 | effectively unlearned | Study before testing again; more questions will not help yet |

A worked re-weighting shows why this beats chasing a total. Suppose you sit 18 Applications items and score 55%, then spend six hours lifting that to 80%. That is roughly four and a half extra items on a 53-item paper — over 8% of the raw total, from one domain. The same six hours spread evenly across all eight domains would move almost nothing.

## The day before

- No new material. Re-read your summary sheets only.
- Skim your error log and rewrite the three mistakes you keep repeating, in your own words.
- One short, mixed set of ten items for timing feel, then stop. Do not chase a score at 9 p.m.
- Confirm the appointment, the test-centre location and the identification you must bring. Check the current official guide for the accepted ID rules.
- Sleep. A 120-minute proctored paper rewards a rested reader more than a final hour of revision.

The aim is to arrive rested and clear, not to squeeze in one more topic.

<learning-block type="recap" title="On the exam">

Weight decides sequence, not the syllabus. Applications and Integration at 33.1% and Model Selection at 16.8% will supply roughly half the paper between them, so a candidate who has never wired a request to a real endpoint is studying the wrong 3%. Build something, test it, then read the theory that explains what you saw.

</learning-block>

## Try it yourself

**You have one week left, six hours, and a diagnostic sheet reading: Applications 60%, Agents 85%, Model Selection 70%, Prompt and Context 90%, Tools and MCPs 65%, Security 50%, Claude Code 80%, Evaluation 40%. Where do the hours go?**

<details>
<summary>Reveal the explanation</summary>

Weight the gap, not the score. Applications is 33.1% and still weak, so it takes the largest block — about two hours rebuilding request and integration fundamentals, then a fresh set of items. Security at 8.1% and 50% accuracy deserves an hour: it is small but underperforming, and injection questions also appear inside integration scenarios. Evaluation at 40% is tempting to ignore because it is 2.6%, but an hour spent building a ten-case test set pays twice — once in its own item, and again in any scenario that asks you to verify an output. Model Selection and Tools and MCPs take a single hour between them. Prompt and Context and Agents are already strong: fifteen minutes of spaced recall, no more.

</details>

## Remember

- Unofficial guide: verify items, fee, pass mark, validity and retake rules against Anthropic's current official exam guide before booking.
- 53 items, 120 minutes, scaled 100–1000, 720 to pass, $125, 12-month validity, Pearson VUE proctored.
- Retakes wait 14, then 30, then 90 days, with at most four attempts per rolling 12 months.
- Applications and Integration is 33.1% of the paper; with Model Selection and Agents it is 64.6%.
- Front-load the heavy domains in weeks 1 and 2, and keep week 4 for mocks and consolidation.
- Mark practice by domain and act on gaps weighted by domain share, not on the overall percentage.
