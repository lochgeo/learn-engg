## Your study plan for today

Probability is a small set of rules applied to many wordings. The trick is recognising which rule a phrase calls for. A focused first pass, including this check, takes about **2¼ hours**:

1. **Random experiments and events** — 22 min
2. **Probability axioms** — 22 min
3. **Conditional probability** — 22 min
4. **Independent events** — 22 min
5. **Mixed probability problems** — 22 min
6. **This mastery check** — 25 min

Work every question on paper before opening its answer. Mark a topic complete only when you can explain *why* the chosen tool applies, not merely when the number matches. Take a short break before the mastery check.

The **JEE Main timed practice** module follows this one. Use it once these ten questions feel routine; its value lies in choosing the right tool quickly under pressure.

## First choose the tool

| Clue in the question | Start with |
| --- | --- |
| "list the possible results", "sample space" | Write $S$; events are subsets, and outcomes may or may not be equally likely |
| "equally likely", "fair die", "well-shuffled pack" | $P(E)=\dfrac{|E|}{|S|}$ — count favourable and total outcomes |
| "or", "either", "at least one" | Union: $P(A\cup B)=P(A)+P(B)-P(A\cap B)$ |
| "not", "none", "neither" | Complement: $P(E')=1-P(E)$ |
| "and", "both" | Intersection: $P(A\cap B)=P(B)P(A\mid B)$ |
| "given that", "if it is known that" | Conditional: $P(A\mid B)=\dfrac{P(A\cap B)}{P(B)}$ — the given event goes below |
| "cannot occur together", "mutually exclusive" | $P(A\cap B)=0$; add probabilities directly |
| "does not affect", "independent", "unrelated" | $P(A\cap B)=P(A)P(B)$; $P(\text{at least one})=1-P(A')P(B')$ |
| "one of several boxes/urns, then an observation" | Total probability, then Bayes' theorem to reverse the condition |
| "repeated trials", "same success chance each time" | Binomial: $\binom nr p^r(1-p)^{n-r}$; at least one: $1-(1-p)^n$ |
| "odds in favour/against" | Convert $p$ to $p:(1-p)$, or odds $a:b$ to $\dfrac{a}{a+b}$ |

## Mastery check

Try all ten without looking at the answers.

### 1. A standard deck

One card is drawn from a well-shuffled pack of 52. Find the probability that it is a face card (jack, queen or king).

<details><summary>Answer and reasoning</summary>

There are $3$ face ranks times $4$ suits, so $12$ favourable cards out of $52$: $P=\dfrac{12}{52}=\dfrac{3}{13}$. All cards are equally likely, so counting applies.

</details>

### 2. An exhaustive pair of events

A die is thrown. Let $A$ be "the number is greater than 3" and $B$ be "the number is at most 5". Find $P(A\cup B)$.

<details><summary>Answer and reasoning</summary>

$A=\{4,5,6\}$ and $B=\{1,2,3,4,5\}$, so $A\cup B=\{1,2,3,4,5,6\}=S$ and the probability is $1$. The formula agrees: $P(A\cup B)=\frac36+\frac56-\frac26=1$, since $A\cap B=\{4,5\}$.

</details>

### 3. Neither event occurs

For two events $A,B$, $P(A)=0.4$, $P(B)=0.5$ and $P(A\cap B)=0.2$. Find the probability that neither occurs.

<details><summary>Answer and reasoning</summary>

$P(A\cup B)=0.4+0.5-0.2=0.7$, so $P(A'\cap B')=1-P(A\cup B)=0.3$. De Morgan's law identifies $A'\cap B'$ with the complement of the union.

</details>

### 4. Drawing without replacement

A bag contains 5 red and 3 blue balls. Two balls are drawn at random without replacement. Find the probability that both are red, and the probability that the second is red given that the first is red.

<details><summary>Answer and reasoning</summary>

$P(R_1\cap R_2)=\dfrac58\cdot\dfrac47=\dfrac{20}{56}=\dfrac5{14}$. For the conditional probability, divide by $P(R_1)=\frac58$: $P(R_2\mid R_1)=\dfrac{4}{7}$, which is also the intuitive answer after one red ball has been removed.

</details>

### 5. Independent events

$A$ and $B$ are independent with $P(A)=0.6$ and $P(B)=0.3$. Find $P(A\cup B)$ and the probability that exactly one of them occurs.

<details><summary>Answer and reasoning</summary>

$P(A\cap B)=P(A)P(B)=0.18$, so $P(A\cup B)=0.6+0.3-0.18=0.72$. Exactly one means $(A\cap B')\cup(A'\cap B)$: $(0.6)(0.7)+(0.4)(0.3)=0.42+0.12=0.54$. The four disjoint probabilities $0.18+0.42+0.12+0.28=1$ check out.

</details>

### 6. Exclusive is not independent

If $A$ and $B$ are mutually exclusive with $P(A)=0.3$ and $P(B)=0.4$, find $P(A\cup B)$ and decide whether $A$ and $B$ are independent.

<details><summary>Answer and reasoning</summary>

Mutual exclusivity gives $P(A\cap B)=0$, so $P(A\cup B)=0.3+0.4=0.7$. Independence would need $P(A\cap B)=P(A)P(B)=0.12\ne0$, so they are **not** independent; knowing $A$ occurred rules out $B$.

</details>

### 7. Conditioning on a sum

Two fair dice are thrown. Given that the sum is 7, find the probability that at least one die shows a 5.

<details><summary>Answer and reasoning</summary>

The sum-7 outcomes are $(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)$ — six equally likely outcomes. Two of them, $(2,5)$ and $(5,2)$, contain a 5. Hence $P=\dfrac26=\dfrac13$.

</details>

### 8. Three coins

Three fair coins are tossed together. Find the probability of exactly two heads and of at least one head.

<details><summary>Answer and reasoning</summary>

There are $2^3=8$ equally likely outcomes. Exactly two heads occurs in $\binom32=3$ ways, so $P=\frac38$. At least one head is the complement of all tails: $1-\frac18=\frac78$.

</details>

### 9. Reversing the condition

Box I contains 2 white and 3 black balls; box II contains 3 white and 2 black balls. A box is chosen at random and one ball is drawn; it is white. Find the probability the ball came from box I.

<details><summary>Answer and reasoning</summary>

$P(W)=\frac12\cdot\frac25+\frac12\cdot\frac35=\frac12$. Then $P(\text{I}\mid W)=\dfrac{(1/2)(2/5)}{1/2}=\dfrac25$. Box II has more white balls, so its posterior $\frac35$ is larger than box I's $\frac25$ — a useful sanity check.

</details>

### 10. Repeated independent trials

A shooter hits with probability $0.8$ on each shot, independently. In three shots, find the probability of exactly two hits and of at least one hit.

<details><summary>Answer and reasoning</summary>

$P(X=2)=\binom32(0.8)^2(0.2)=0.384$. Also $P(X\ge1)=1-P(X=0)=1-(0.2)^3=0.992$. As a check, the full distribution $0.008,0.096,0.384,0.512$ sums to $1$.

</details>

## Self-check

You are ready for the timed set when you can:

- write a sample space for one or two coins, a die, or two dice, and list any event as a subset;
- distinguish equally likely from unequally likely outcomes before counting;
- derive $P(A\cup B)=P(A)+P(B)-P(A\cap B)$ and say when it becomes plain addition;
- use $P(E')=1-P(E)$ for "at least one" and "none" questions;
- compute $P(A\mid B)$ with the correct denominator and explain why it differs from $P(B\mid A)$;
- test independence numerically and explain why mutually exclusive events with positive probabilities are not independent;
- use total probability and Bayes' theorem, carrying the priors through both;
- apply $\binom nr p^r(1-p)^{n-r}$ only when trials are independent with constant $p$;
- convert between probability and odds without losing which side is in favour;
- sanity-check every answer for range, direction and a sum-to-one partition.

If one item still feels shaky, revisit that module and redo its questions without the reveal before starting the JEE Main set.
