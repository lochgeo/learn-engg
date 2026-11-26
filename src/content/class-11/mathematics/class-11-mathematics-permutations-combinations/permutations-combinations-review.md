## Your study plan for this chapter

Counting is a toolkit, not one formula. A focused first pass takes about **2 hours**, followed by this mastery check:

1. **The counting principle** — 20 min (multiply stages, add alternatives, factorials)
2. **Permutations** — 20 min (order matters, ${}^nP_r$, repeated objects)
3. **Combinations** — 20 min (order irrelevant, ${}^nC_r$, symmetry, Pascal)
4. **Restrictions and arrangements** — 25 min (fixed positions, blocks, gaps, circles)
5. **Mixed counting problems** — 25 min (case splits, complements, distributions)
6. **This mastery check** — 25 min

Work each module's questions from a blank page before reading the reveals. After the core pass, use the optional **JEE Main timed practice** module for a $50$-minute paper; its value lies in choosing the right tool quickly, not in learning new material.

## First choose the tool

| Clue in the question | Start with |
| --- | --- |
| Several stages joined by "and" | Multiply the counts at each stage. |
| Alternatives joined by "or" that cannot overlap | Add the counts. |
| Positions, roles or order are distinct | Permutation ${}^nP_r = \dfrac{n!}{(n-r)!}$. |
| Only membership of a group matters | Combination ${}^nC_r = \dfrac{n!}{r!\,(n-r)!}$. |
| Objects repeat, such as letters of a word | $\dfrac{n!}{p!\,q!\cdots}$, dividing by each repeated count |
| Two or more objects must be adjacent | Block method; multiply by internal arrangements. |
| Objects must never be adjacent | Complement (total minus together), or the gap method. |
| Seating around a circle | $(n-1)!$; halve only if reflections are identified. |
| "At least one" or "at most one" | Complement: total minus the failing case. |
| Several allowed compositions | Exact, disjoint cases; add their counts. |
| Distinct objects into distinct boxes | $k^n$, or inclusion–exclusion if every box must be filled. |
| Select a group, then assign roles | ${}^nC_r$ multiplied by the arrangements of the roles. |

## Mastery check

Try every question without looking at the answer first. Write a one-line reason for the tool you choose, then check the working.

### 1. Two notations

Evaluate ${}^8P_3$ and ${}^8C_3$, and state how they are related.

<details><summary>Answer and reasoning</summary>

${}^8P_3 = 8\times7\times6 = 336$ and ${}^8C_3 = \dfrac{8\times7\times6}{3!} = 56$. They satisfy ${}^8P_3 = {}^8C_3\times3! = 56\times6 = 336$: each unordered selection has $3!$ internal orders.

</details>

### 2. Forming numbers

How many 4-digit numbers can be formed from the digits $1,2,3,4,5,6$ with no digit repeated?

<details><summary>Answer and reasoning</summary>

Order matters and digits are not reused, so ${}^6P_4 = 6\times5\times4\times3 = 360$ numbers.

</details>

### 3. Repeated letters

How many distinct arrangements are there of the letters of SUCCESS?

<details><summary>Answer and reasoning</summary>

SUCCESS has 7 letters: S appears 3 times, C twice, U and E once each. Hence

$$\frac{7!}{3!\,2!} = \frac{5040}{12} = 420.$$

</details>

### 4. A mixed selection

A group of 3 is chosen from 5 men and 4 women and must contain exactly 2 women. How many groups are possible?

<details><summary>Answer and reasoning</summary>

Choose 2 women from 4 and 1 man from 5, then multiply:

$${}^4C_2\times{}^5C_1 = 6\times5 = 30.$$

</details>

### 5. A pair together

Six friends sit in a row and two particular friends must sit together. How many arrangements are possible?

<details><summary>Answer and reasoning</summary>

Tie the pair into a block: 5 objects give $5! = 120$ orders, and the block has $2! = 2$ internal orders. Total $120\times2 = 240$.

</details>

### 6. Around a table

How many ways can 8 distinct people be seated around a circular table?

<details><summary>Answer and reasoning</summary>

Rotating a seating does not create a new arrangement, so fix one person and arrange the rest: $(8-1)! = 7! = 5040$.

</details>

### 7. At least one

A committee of 4 is chosen from 6 men and 4 women. How many committees contain at least one woman?

<details><summary>Answer and reasoning</summary>

Count all committees and subtract those with no women:

$${}^{10}C_4 - {}^6C_4 = 210 - 15 = 195.$$

</details>

### 8. Counting diagonals

How many diagonals does an octagon have?

<details><summary>Answer and reasoning</summary>

Each of the 8 vertices connects by a diagonal to $8-3 = 5$ other vertices (not itself and not its two neighbours). Each diagonal is counted twice, so

$$\frac{8(8-3)}{2} = \frac{8\times5}{2} = 20.$$

</details>

### 9. Every box filled

Five distinct books are distributed among 3 students so that each student receives at least one book. How many distributions are possible?

<details><summary>Answer and reasoning</summary>

Use inclusion–exclusion:

$$3^5 - \binom{3}{1}2^5 + \binom{3}{2}1^5 = 243 - 96 + 3 = 150.$$

</details>

### 10. Selection with roles

A team of 6 is chosen from 8 men and 5 women, with at least 3 men and at least 2 women. A captain is then chosen from the team. How many outcomes are possible?

<details><summary>Answer and reasoning</summary>

The valid compositions are 3 men 3 women and 4 men 2 women:

$${}^8C_3\times{}^5C_3 + {}^8C_4\times{}^5C_2 = 56\times10 + 70\times10 = 560 + 700 = 1260 \text{ teams.}$$

Each team has 6 choices of captain, giving $1260\times6 = 7560$ outcomes. As a check, a composition of 5 men 1 woman fails the "at least 2 women" rule, and 2 men 4 women fails the "at least 3 men" rule, so the case list is complete.

</details>

## Self-check

You are ready for the timed set when you can:

- decide quickly whether order matters in a question and justify the choice;
- derive ${}^nP_r$ and ${}^nC_r$ rather than only quoting them;
- handle repeated objects by dividing out the internal arrangements;
- apply block, gap and complement methods to adjacency conditions;
- state and use $(n-1)!$ for circular arrangements;
- rewrite "at least one" as a subtraction from the total;
- split a question into exact, non-overlapping cases and add them;
- count distributions of distinct objects and enforce a non-empty condition;
- check a restricted answer against the corresponding unrestricted total.

If one item still feels shaky, revisit that module and redo its questions before attempting the timed paper.
