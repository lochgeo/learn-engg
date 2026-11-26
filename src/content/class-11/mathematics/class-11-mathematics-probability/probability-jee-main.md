## JEE Main sprint: how to use this set

This is a **50-minute, no-notes** paper for after the chapter lessons and mastery check. Work Section A in about 12 minutes, Section B in 15, Section C in 13 and Section D in 10. Mark anything that stalls for more than 90 seconds and move on; a wrong answer with a written method is more useful than a guessed one.

Before calculating, name the tool: counting in an equally likely space, a union or complement, a conditional ratio, an independence product, or total probability. The paper is self-contained and needs no external constants.

For the assertion–reason questions in Section C, choose:

- **A** — both the assertion and the reason are true, and the reason correctly explains the assertion;
- **B** — both are true, but the reason is not the correct explanation;
- **C** — the assertion is true but the reason is false;
- **D** — the assertion is false but the reason is true.

## Formula and conditions sheet

| Situation | Start with | Condition to check |
| --- | --- | --- |
| Equally likely finite outcomes | $P(E)=\dfrac{\lvert E\rvert}{\lvert S\rvert}$ | The outcomes really are equally likely |
| "Or", union | $P(A\cup B)=P(A)+P(B)-P(A\cap B)$ | Subtract the overlap unless the events are disjoint |
| "Not", "none", "at least one" | $P(E')=1-P(E)$ | $E$ and $E'$ are disjoint and exhaustive |
| "And", intersection | $P(A\cap B)=P(B)P(A\mid B)$ | The same intersection in both orders |
| "Given that", conditional | $P(A\mid B)=\dfrac{P(A\cap B)}{P(B)}$ | $P(B)>0$; the given event goes below |
| Mutually exclusive | $P(A\cap B)=0$ | Then $P(A\cup B)=P(A)+P(B)$ |
| Independent | $P(A\cap B)=P(A)P(B)$ | Verify from the statement; do not assume |
| Partition plus an observation | Total probability, then Bayes | The cases are disjoint, exhaustive, and priors are included |
| Repeated identical trials | $\binom nr p^r(1-p)^{n-r}$ | Trials independent and $p$ constant |

<learning-block type="mistake" title="The fastest sanity checks">

Every probability lies in $[0,1]$; a union is at least as likely as either event alone; an intersection is no more likely than either event; an event and its complement sum to 1; posterior probabilities over a partition sum to 1. If a check fails, revisit the setup before moving on. Also ask which event is "given" — writing $P(A\mid B)$ when $P(B\mid A)$ was asked is the most common error in this chapter.

</learning-block>

## Section A — 10 rapid MCQs

### 1. Exactly one head

Two fair coins are tossed together. The probability of exactly one head is:

- A. $\frac14$
- B. $\frac13$
- C. $\frac12$
- D. $\frac34$

<details><summary>Answer</summary>

**C.** $S=\{HH,HT,TH,TT\}$ and the favourable set is $\{HT,TH\}$, so $P=\frac{2}{4}=\frac12$.

</details>

### 2. King or heart

One card is drawn from a well-shuffled pack of 52. The probability that it is a king or a heart is:

- A. $\frac{17}{52}$
- B. $\frac{4}{13}$
- C. $\frac14$
- D. $\frac{1}{52}$

<details><summary>Answer</summary>

**B.** $P(K\cup H)=\frac{4}{52}+\frac{13}{52}-\frac{1}{52}=\frac{16}{52}=\frac{4}{13}$. Option A is the trap: it counts the king of hearts twice.

</details>

### 3. Prime on a die

A fair die is thrown once. The probability that the number shown is prime is:

- A. $\frac16$
- B. $\frac13$
- C. $\frac12$
- D. $\frac23$

<details><summary>Answer</summary>

**C.** The primes on a die are $2,3,5$ — three of the six equally likely outcomes. Note that $1$ is not prime, so $\frac46$ is wrong.

</details>

### 4. Complement

If $P(A)=0.7$, then $P(A')$ is:

- A. $0.3$
- B. $0.7$
- C. $1$
- D. $0$

<details><summary>Answer</summary>

**A.** An event and its complement are disjoint and exhaustive, so $P(A')=1-P(A)=1-0.7=0.3$.

</details>

### 5. A name for a condition

If events $A$ and $B$ satisfy $P(A\cap B)=P(A)P(B)$, they are called:

- A. mutually exclusive
- B. independent
- C. exhaustive
- D. complementary

<details><summary>Answer</summary>

**B.** That product relation is exactly the definition of independence. Mutual exclusivity would require $P(A\cap B)=0$, which is a different condition.

</details>

### 6. A bag of balls

A bag contains 4 red and 6 blue balls. One ball is drawn at random. The probability that it is red is:

- A. $\frac25$
- B. $\frac35$
- C. $\frac46$
- D. $\frac23$

<details><summary>Answer</summary>

**A.** There are 10 equally likely balls, 4 of them red, so $P=\frac{4}{10}=\frac25$.

</details>

### 7. Two dice

When two dice are thrown and the ordered pair of numbers is recorded, the number of outcomes in the sample space is:

- A. $6$
- B. $12$
- C. $36$
- D. $21$

<details><summary>Answer</summary>

**C.** Each die has 6 outcomes, so there are $6\times6=36$ ordered pairs. Option D would come from incorrectly treating $(i,j)$ and $(j,i)$ as the same outcome.

</details>

### 8. Conditional probability

For events $A$ and $B$ with $P(B)>0$, the conditional probability $P(A\mid B)$ equals:

- A. $\dfrac{P(A\cap B)}{P(A)}$
- B. $\dfrac{P(A\cap B)}{P(B)}$
- C. $\dfrac{P(A)}{P(B)}$
- D. $\dfrac{P(B)}{P(A\cap B)}$

<details><summary>Answer</summary>

**B.** By definition $P(A\mid B)=\dfrac{P(A\cap B)}{P(B)}$. The event after "given" supplies the denominator; option A is $P(B\mid A)$.

</details>

### 9. The addition rule

For any two events $A$ and $B$, which is always true?

- A. $P(A\cup B)=P(A)+P(B)$
- B. $P(A\cup B)=P(A)+P(B)-P(A\cap B)$
- C. $P(A\cup B)=P(A)+P(B)+P(A\cap B)$
- D. $P(A\cup B)=P(A)-P(B)$

<details><summary>Answer</summary>

**B.** Adding the probabilities counts the intersection twice, so it must be subtracted once. Option A is valid only when the events are mutually exclusive.

</details>

### 10. Three coins

Three fair coins are tossed. The probability that all three show heads is:

- A. $\frac12$
- B. $\frac14$
- C. $\frac16$
- D. $\frac18$

<details><summary>Answer</summary>

**D.** There are $2^3=8$ equally likely outcomes and only $HHH$ is favourable, so $P=\frac18$.

</details>

## Section B — 5 numerical-value questions

### 11. A sum of seven

Two fair dice are thrown. Find the probability that the sum of the numbers is 7.

<details><summary>Answer</summary>

The favourable ordered pairs are $(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)$ — six of the 36 outcomes. Hence $P=\frac{6}{36}=\frac16$.

</details>

### 12. Two white balls without replacement

A bag contains 6 white and 4 black balls. Two balls are drawn at random without replacement. Find the probability that both are white.

<details><summary>Answer</summary>

$P(W_1\cap W_2)=P(W_1)P(W_2\mid W_1)=\dfrac{6}{10}\cdot\dfrac{5}{9}=\dfrac{30}{90}=\dfrac13$. After the first white ball is removed, 5 white balls remain among 9.

</details>

### 13. A union with overlap

Given $P(A)=0.4$, $P(B)=0.5$ and $P(A\cap B)=0.15$, find $P(A\cup B)$.

<details><summary>Answer</summary>

$P(A\cup B)=0.4+0.5-0.15=0.75=\frac34$. Since the intersection is non-zero the events are not mutually exclusive, so the subtraction is essential. The answer lies between $\max(0.4,0.5)$ and $0.9$, as required.

</details>

### 14. At least one of two independent events

Events $A$ and $B$ are independent with $P(A)=\frac12$ and $P(B)=\frac13$. Find the probability that at least one of them occurs.

<details><summary>Answer</summary>

Use the complement: $P(A'\cap B')=P(A')P(B')=\frac12\cdot\frac23=\frac13$, so $P(A\cup B)=1-\frac13=\frac23$. Direct addition gives the same result: $\frac12+\frac13-\frac16=\frac23$.

</details>

### 15. Exactly two heads in five tosses

A fair coin is tossed 5 times. Find the probability of getting exactly 2 heads.

<details><summary>Answer</summary>

With $5$ independent trials and success probability $\frac12$, $P(X=2)=\binom52\left(\frac12\right)^5=\dfrac{10}{32}=\dfrac{5}{16}$.

</details>

## Section C — 3 assertion–reason questions

### 16. Exclusive and independent

**Assertion (A):** Two mutually exclusive events with positive probabilities cannot be independent.

**Reason (R):** For mutually exclusive events $P(A\cap B)=0$, whereas independence requires $P(A\cap B)=P(A)P(B)>0$.

- A. Both true, and R correctly explains A.
- B. Both true, but R does not explain A.
- C. A true, R false.
- D. A false, R true.

<details><summary>Answer</summary>

**A.** Because $P(A)>0$ and $P(B)>0$, their product is positive while the intersection is zero. The two conditions are incompatible, and R gives exactly that argument.

</details>

### 17. A faulty inference

**Assertion (A):** Mutually exclusive events are always independent.

**Reason (R):** For mutually exclusive events, $P(A\cap B)=0$.

- A. Both true, and R correctly explains A.
- B. Both true, but R does not explain A.
- C. A true, R false.
- D. A false, R true.

<details><summary>Answer</summary>

**D.** R is true, but A is false: with positive probabilities, independence would require $P(A\cap B)=P(A)P(B)>0$, contradicting $P(A\cap B)=0$. For example, "even" and "odd" on a die are mutually exclusive but certainly not independent.

</details>

### 18. Two true statements, different purposes

**Assertion (A):** For any events $A$ and $B$, $P(A\cup B)=P(A)+P(B)-P(A\cap B)$.

**Reason (R):** For independent events, $P(A\cap B)=P(A)P(B)$.

- A. Both true, and R correctly explains A.
- B. Both true, but R does not explain A.
- C. A true, R false.
- D. A false, R true.

<details><summary>Answer</summary>

**B.** Both statements are true. The addition rule follows from splitting $A\cup B$ into the disjoint sets $A$ and $B-A$, and it holds whether or not the events are independent. R describes a different fact — how to evaluate the intersection *if* independence is given — so it is not the explanation of A.

</details>

## Section D — 2 matching / multi-statement questions

### 19. Match the probabilities

A fair die is thrown once. Match each event in Column I with its probability in Column II.

| Column I — event | Column II — probability |
| --- | --- |
| (i) An even number | (a) $\frac16$ |
| (ii) A number divisible by 5 | (b) $\frac12$ |
| (iii) A multiple of 3 | (c) $\frac13$ |

<details><summary>Answer</summary>

(i) $\to$ (b), (ii) $\to$ (a), (iii) $\to$ (c). The favourable sets are $\{2,4,6\}$ with $3$ outcomes, $\{5\}$ with $1$ outcome and $\{3,6\}$ with $2$ outcomes, giving $\frac{3}{6}=\frac12$, $\frac16$ and $\frac{2}{6}=\frac13$ respectively.

</details>

### 20. Which statements are correct?

Two fair dice are thrown. Let $A$ be "the sum is even" and $B$ be "the first die shows an even number". Consider the statements:

1. $P(A)=\frac12$;
2. $P(B)=\frac12$;
3. $A$ and $B$ are independent;
4. $P(A\cap B)=\frac16$.

Which statements are correct? Give a reason for each.

<details><summary>Answer</summary>

Statements (1), (2) and (3) are correct; statement (4) is false.

The sum is even exactly when the two dice have the same parity: $3\times3+3\times3=18$ pairs, so $P(A)=\frac{18}{36}=\frac12$. The first die is even in $3\times6=18$ pairs, so $P(B)=\frac12$. For the intersection, an even first die and an even sum force the second die to be even too: $3\times3=9$ pairs, so $P(A\cap B)=\frac{9}{36}=\frac14$, not $\frac16$. Since $P(A)P(B)=\frac12\cdot\frac12=\frac14=P(A\cap B)$, the events are independent. As a further check, $P(A\mid B)=\frac{1/4}{1/2}=\frac12=P(A)$.

</details>

## Review by error, not by score

| If you missed… | Revisit | Then retry |
| --- | --- | --- |
| 1, 6, 7, 10, 11, 15, 19 | Random experiments and events | Write the sample space first; count ordered pairs for two dice. |
| 2, 3, 4, 9, 13 | Probability axioms | Subtract the overlap in a union; use the complement for "none". |
| 8, 12 | Conditional probability | Put the given event in the denominator; for without-replacement draws, update the remaining counts. |
| 5, 14, 16, 17, 20 | Independent events | Verify $P(A\cap B)=P(A)P(B)$; contrast it with $P(A\cap B)=0$. |
| 18, or any question solved by memory | Mixed probability problems | Translate the wording into a tool and justify the choice in one sentence. |

<learning-block type="recap" title="Ready to move on?">

Aim for at least 16 correct out of 20 with a named method for every question. Any question you answer correctly but cannot justify is a revision target, not a mastered topic.

</learning-block>
