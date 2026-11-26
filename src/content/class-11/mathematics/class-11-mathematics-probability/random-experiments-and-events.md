## Why we need a language for uncertainty

A coin tossed once gives heads or tails; we cannot say which, yet we can say a great deal about what happens if it is tossed a thousand times. Probability begins by naming the things we can list in advance. Before any number is assigned, we need a careful description of *what could happen* and of the groups of outcomes we care about. That description is the work of this lesson.

## 1. Random experiments and outcomes

An **experiment** is any action or observation we perform. It is a **random experiment** when it satisfies three conditions:

1. it can be repeated under essentially the same conditions;
2. its result is not certain — more than one result is possible;
3. every possible result can be listed in advance.

Tossing a coin, rolling a die and drawing a card from a shuffled pack are random experiments. Measuring the boiling point of pure water at one atmosphere is not: the result is fixed, so there is nothing uncertain to describe.

Each possible result is an **outcome** (or sample point). An outcome cannot be split further within the experiment we have chosen. If we roll a die and only care whether the number is even, then "even" is a *group* of outcomes, not a single one.

## 2. The sample space

The **sample space** $S$ is the set of all possible outcomes of a random experiment. It is the universal set for that experiment.

| Experiment | Sample space |
| --- | --- |
| Toss one coin | $S=\{H,T\}$ |
| Toss two coins | $S=\{HH,HT,TH,TT\}$ |
| Roll one die | $S=\{1,2,3,4,5,6\}$ |
| Roll two dice | $S=\{(i,j):1\le i,j\le 6\}$, with $n(S)=36$ |
| Toss a coin until the first head | $S=\{H,TH,TTH,\ldots\}$ |

A sample space may be finite (the first four rows) or infinite (the last row). Choosing it well is a modelling decision: the same physical action can have different sample spaces depending on what we record. When two dice are rolled, recording only their sum gives $S=\{2,3,\ldots,12\}$, but those eleven outcomes are **not equally likely** — a fact that matters greatly in the next lesson.

## 3. Events

An **event** is any subset of the sample space. It "occurs" when the actual outcome belongs to that subset. The empty set $\varnothing$ is the **impossible event** (it never occurs); $S$ itself is the **certain event** (it always occurs). An event with exactly one outcome is a **simple** or **elementary** event; one with more than one is a **compound** event.

Because events are sets, the whole algebra of sets applies. For events $A$ and $B$:

| Notation | Meaning | Set operation |
| --- | --- | --- |
| $A\cup B$ | $A$ or $B$ (or both) occurs | union |
| $A\cap B$ | both $A$ and $B$ occur | intersection |
| $A-B$ | $A$ occurs but $B$ does not | difference |
| $A'$ | $A$ does not occur | complement in $S$ |

Two useful identities follow from the set definitions and will be used repeatedly:

$$(A\cup B)'=A'\cap B',\qquad (A\cap B)'=A'\cup B'.$$

These are **De Morgan's laws**: "not ($A$ or $B$)" means "not $A$ **and** not $B$", and "not ($A$ and $B$)" means "not $A$ **or** not $B$".

## 4. Special relationships between events

**Mutually exclusive (disjoint) events.** $A$ and $B$ are mutually exclusive if they cannot occur together: $A\cap B=\varnothing$. Rolling a 2 and rolling a 5 on one die are mutually exclusive.

**Exhaustive events.** A collection $A_1,\ldots,A_k$ is exhaustive if together they cover the whole sample space: $A_1\cup\cdots\cup A_k=S$. "Even" and "odd" on a die are both mutually exclusive *and* exhaustive.

**Complementary events.** $A'$ is the complement of $A$: it is mutually exclusive with $A$ and exhaustive with it.

Do not confuse "mutually exclusive" with "independent". The first is about *not happening together*; independence, met in a later lesson, is about one event leaving the other's probability unchanged. They are different ideas.

## 5. The counting relation behind the addition rule

When $S$ is finite, writing $|A|$ for the number of outcomes in event $A$, the number in a union is

$$|A\cup B|=|A|+|B|-|A\cap B|.$$

**Why?** Adding $|A|$ and $|B|$ counts every outcome of $A\cap B$ twice; subtracting the intersection once corrects the double count. If $A$ and $B$ are disjoint, $|A\cap B|=0$ and the relation becomes $|A\cup B|=|A|+|B|$. Similarly, since $A$ and $A'$ split $S$ into two disjoint parts,

$$|A|+|A'|=|S|,\qquad\text{so}\qquad |A'|=|S|-|A|.$$

These are statements about *counting*, not yet about probability. In the next lesson, giving every outcome an equal share of probability turns them into the addition and complement rules for probabilities.

## 6. A worked example with two dice

Two fair dice are rolled; record the ordered pair $(i,j)$. Let

- $A$ = "the sum is at least 10",
- $B$ = "both dice show the same number" (a doublet).

List the outcomes. $A=\{(4,6),(5,5),(6,4),(5,6),(6,5),(6,6)\}$, so $|A|=6$. $B=\{(1,1),(2,2),(3,3),(4,4),(5,5),(6,6)\}$, so $|B|=6$. The overlap is $A\cap B=\{(5,5),(6,6)\}$, so $|A\cap B|=2$. Therefore

$$|A\cup B|=6+6-2=10.$$

**Sanity check.** The union must contain at least the larger of the two events (6 outcomes) and at most their total (12). Our answer 10 lies in that range. Counting directly confirms it: the union consists of the six sum-at-least-10 pairs plus $(1,1),(2,2),(3,3),(4,4)$ — ten outcomes.

<learning-block type="mistake" title="Counting the overlap twice">

The most common error is reporting $|A|+|B|=12$ for the union without subtracting $|A\cap B|$. This double counts $(5,5)$ and $(6,6)$. Always ask first whether the two events can occur together; only when $A\cap B=\varnothing$ may you simply add. A second error is to list *unordered* pairs for two dice: $(4,6)$ and $(6,4)$ are different outcomes, so the sample space has 36 points, not 21.

</learning-block>

## Try it yourself

**A.** Two coins are tossed. Write the sample space and list the event "at least one head" as a set.

<details><summary>Show the reasoning</summary>

$S=\{HH,HT,TH,TT\}$. The event is $\{HH,HT,TH\}$ — three outcomes. Its complement is $\{TT\}$, "no heads".

</details>

**B.** A die is thrown once. Let $E$ be "an even number" and $P$ be "a prime number". Find $E\cup P$, $E\cap P$ and $E-P$.

<details><summary>Show the reasoning</summary>

$E=\{2,4,6\}$ and $P=\{2,3,5\}$. Hence $E\cup P=\{2,3,4,5,6\}$, $E\cap P=\{2\}$ (2 is the only even prime), and $E-P=\{4,6\}$. The union has 5 outcomes, consistent with $|E|+|P|-|E\cap P|=3+3-1=5$.

</details>

**C.** In the two-dice example above, describe $A'\cap B'$ in words and count its outcomes.

<details><summary>Show the reasoning</summary>

By De Morgan's law, $A'\cap B'=(A\cup B)'$. So it means "the sum is less than 10 **and** the two dice differ". Since $|A\cup B|=10$ out of 36 outcomes, $|A'\cap B'|=36-10=26$.

</details>

## Remember

- A random experiment has a listable set of possible outcomes and an unpredictable result; the sample space $S$ is that complete list.
- An event is a subset of $S$; use $\cup$, $\cap$, $-$ and $'$ to build new events, and De Morgan's laws to rewrite "not".
- Mutually exclusive means $A\cap B=\varnothing$; exhaustive means the events together fill $S$; complementary means both.
- For finite spaces, $|A\cup B|=|A|+|B|-|A\cap B|$ and $|A'|=|S|-|A|$ — the counting origin of the probability rules.
- The next lesson attaches probability to the outcomes of a finite space and turns these counting identities into the axioms of probability.
