## Your study plan for this chapter

Sets is a small toolkit with sharp edges: most lost marks come from choosing the wrong symbol or forgetting one overlap, not from hard algebra. A focused first pass takes about **1 hour 50 minutes**, plus a short break.

| Step | Module | Minutes |
| --- | --- | --- |
| 1 | Sets, notation and types of sets | 20 |
| 2 | Set operations | 20 |
| 3 | Venn diagrams and counting | 25 |
| 4 | Power sets and intervals | 20 |
| 5 | Short break | 10 |
| 6 | This mastery check | 25 |

After each step, close the explanation and redo its "Try it yourself" questions from a blank page. Mark the step done only when you can state the rule before reading it.

The optional **JEE Main timed practice** module is a $50$-minute mixed paper. Save it until the tools below feel separate in your head; its purpose is choosing the right one under pressure.

## First choose the tool

| Clue in the question | Reach for |
| --- | --- |
| "Write in roster / set-builder form" | Membership test: list members or state the rule. |
| $x\in A$ versus $A\subseteq B$ | Elements relate by $\in$; collections relate by $\subseteq$. |
| "How many subsets / proper subsets" | $2^n$, $2^n-1$, $2^n-2$ for a finite $n$-element set. |
| Union, intersection, difference | Membership test with "or", "and", "and not". |
| "Neither", "at least one", an overlap given | $n(A\cup B)=n(A)+n(B)-n(A\cap B)$. |
| Three sets, "exactly one / two / all three" | Include–exclude, or label the eight Venn regions. |
| Power set of a power set | $n(\mathcal{P}(\mathcal{P}(A)))=2^{2^n}$. |
| Subsets containing a fixed element | Fix it in and count $2^{n-1}$ (or $2^{n-2}$ with one excluded). |
| Brackets, endpoints, complements of intervals | Inequality translation; complement in the stated universe. |
| "$A=B$?" | Show $A\subseteq B$ and $B\subseteq A$; check duplicates are ignored. |

## Mastery check

Try each question before opening its answer. All sets are finite unless intervals are mentioned.

### 1. Roster form

Write $\{x\in\mathbb{Z}: x^2\le 9\}$ in roster form.

<details><summary>Answer and reasoning</summary>

$x^2\le 9$ means $-3\le x\le 3$ for integers, so the set is $\{-3,-2,-1,0,1,2,3\}$. The rule is well-defined, so listing is legitimate.
</details>

### 2. Equal sets

Are $\{1,2,3\}$ and $\{3,1,2,2\}$ equal? Are they equivalent?

<details><summary>Answer and reasoning</summary>

Yes to both. Order is irrelevant and the repeated $2$ is ignored, so the two sets have exactly the same members. Equal sets are automatically equivalent because their cardinalities match.
</details>

### 3. Counting subsets

How many subsets, proper subsets and non-empty proper subsets does a set with four elements have?

<details><summary>Answer and reasoning</summary>

$2^4=16$ subsets, $2^4-1=15$ proper subsets, and $2^4-2=14$ non-empty proper subsets. The last count removes both the whole set and $\emptyset$.
</details>

### 4. Two-set survey

In a class of $50$, $30$ students play cricket, $20$ play football and $8$ play both. How many play at least one sport, and how many play neither?

<details><summary>Answer and reasoning</summary>

$n(C\cup F)=30+20-8=42$. Neither: $50-42=8$. Check with regions: cricket only $22$, football only $12$, both $8$, neither $8$, summing to $50$.
</details>

### 5. De Morgan check

With $U=\{1,2,3,4,5,6\}$, $A=\{1,2,3\}$ and $B=\{3,4,5\}$, verify $(A\cap B)'=A'\cup B'$.

<details><summary>Answer and reasoning</summary>

$A\cap B=\{3\}$, so $(A\cap B)'=\{1,2,4,5,6\}$. Also $A'=\{4,5,6\}$ and $B'=\{1,2,6\}$, whose union is $\{1,2,4,5,6\}$. The identity holds.
</details>

### 6. Three-set survey

Of $150$ people, $80$ read magazine P, $70$ read Q and $60$ read R; $30$ read P and Q, $25$ read Q and R, $20$ read P and R; $10$ read all three. Find how many read at least one, exactly one and exactly two.

<details><summary>Answer and reasoning</summary>

At least one: $80+70+60-(30+25+20)+10=210-75+10=145$. Exactly one: $210-2(75)+3(10)=90$. Exactly two: $75-3(10)=45$. Check: $90+45+10=145$, and $150-145=5$ read none.
</details>

### 7. Symmetric difference

If $n(A)=12$, $n(B)=9$ and $n(A\cap B)=4$, find $n(A\triangle B)$, where $A\triangle B=(A\setminus B)\cup(B\setminus A)$.

<details><summary>Answer and reasoning</summary>

$A\setminus B$ has $12-4=8$ elements and $B\setminus A$ has $9-4=5$. These parts are disjoint, so $n(A\triangle B)=8+5=13$, equivalently $12+9-2(4)=13$.
</details>

### 8. Reverse power-set count

A set $A$ satisfies $n(\mathcal{P}(\mathcal{P}(A)))=256$. Find $n(A)$.

<details><summary>Answer and reasoning</summary>

$256=2^8$, so $2^{n(A)}=8=2^3$, giving $n(A)=3$. Then $\mathcal{P}(A)$ has $8$ members and its power set has $2^8=256$, as stated.
</details>

### 9. Intervals

Find $[1,5]\cap(2,6]$, decide whether $(1,2)\cup(2,3)$ is an interval, and write the complement of $[1,3]$ in $\mathbb{R}$.

<details><summary>Answer and reasoning</summary>

$[1,5]\cap(2,6]=(2,5]$, since the lower bound is excluded by the second set and the upper bound is included by the first. $(1,2)\cup(2,3)$ is not an interval because the point $2$ is missing. The complement of $[1,3]$ in $\mathbb{R}$ is $(-\infty,1)\cup(3,\infty)$.
</details>

### 10. Explain, don't just calculate

Why do $A\subseteq B$ and $B\subseteq A$ together force $A=B$, and why is $\{1,2\}\in\{\{1\},\{2\}\}$ true while $2\in\{\{1\},\{2\}\}$ is false?

<details><summary>Answer</summary>

Equality of sets means having the same elements. The first inclusion puts every element of $A$ inside $B$, and the second puts every element of $B$ inside $A$; no element can be in one without being in the other. For the second part, look at the members actually listed: they are the sets $\{1\}$ and $\{2\}$. The object $\{2\}$ is one of them, so it is a member; the number $2$ is not listed as a member, so it is not.
</details>

## Self-check

You are ready for the timed set when you can:

- switch between roster and set-builder notation without changing membership;
- tell $\in$ from $\subseteq$ in a single glance, including for the empty set;
- justify $2^n$ by independent choices rather than memorising it;
- write each of union, intersection, difference and complement as a membership test;
- apply inclusion–exclusion for two sets and for three sets, adding the triple back;
- distinguish "exactly two" from "at least two" in a Venn question;
- count subsets with a fixed element included or excluded;
- translate interval notation into inequalities and take complements in the right universe;
- notice when given counts are impossible, such as a negative "neither" value.

If one item still feels shaky, revisit that lesson and redo its questions without the reveal.
