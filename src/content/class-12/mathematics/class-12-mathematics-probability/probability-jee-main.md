## JEE Main sprint: how to use this set

This is a **50-minute, no-notes** practice set for after you complete the Probability chapter. Use $g=10\ \text{m/s}^2$ unless a question states otherwise. Spend roughly 15 minutes on Section A, 15 minutes on Section B, 10 minutes on Section C, and 10 minutes on Section D. If a question takes more than 90 seconds without a clear plan, mark it and move on.

Before calculating, name the tool: conditional probability, multiplication theorem, independence test, total probability, Bayes' theorem, random-variable summary, or binomial distribution.

## Conditions and formula sheet

| Situation | Formula / test | Check before using |
| --- | --- | --- |
| Conditional probability | $P(A\mid B)=\dfrac{P(A\cap B)}{P(B)}$ | $P(B)>0$; denominator is the condition. |
| Multiplication theorem | $P(A\cap B)=P(A)P(B\mid A)=P(B)P(A\mid B)$ | Use the order matching the story. |
| Independent events | $P(A\cap B)=P(A)P(B)$ | Do not confuse with mutually exclusive. |
| Total probability | $P(A)=\sum_i P(E_i)P(A\mid E_i)$ | $E_i$ must form a partition. |
| Bayes' theorem | $P(E_k\mid A)=\dfrac{P(E_k)P(A\mid E_k)}{\sum_i P(E_i)P(A\mid E_i)}$ | Posterior probabilities should add to 1. |
| Random variable mean | $E(X)=\sum x_i p_i$ | Check $\sum p_i=1$. |
| Variance | $\operatorname{Var}(X)=E(X^2)-[E(X)]^2$ | Square the mean after computing $E(X)$. |
| Binomial probability | $P(X=r)=\binom{n}{r}p^r q^{n-r}$ | Fixed $n$, two outcomes, constant $p$, independence. |

<learning-block type="mistake" title="Fast checks before you commit">

If a probability is negative or greater than 1, a posterior does not add to 1, or a binomial term is missing $\binom{n}{r}$, stop. In Bayes problems, confirm whether the question asks for $P(\text{cause}\mid \text{effect})$ or the reverse.

</learning-block>

## Section A — 10 rapid MCQs

### 1. Conditional probability

If $P(A)=0.4$, $P(B)=0.5$, and $P(A\cap B)=0.2$, then $P(A\mid B)$ is:

- A. $0.2$
- B. $0.4$
- C. $0.5$
- D. $0.8$

<details><summary>Answer</summary>

**B.** $P(A\mid B)=\dfrac{P(A\cap B)}{P(B)}=\dfrac{0.2}{0.5}=0.4$.

</details>

### 2. The reverse condition

With the same data as Question 1, $P(B\mid A)$ is:

- A. $0.4$
- B. $0.5$
- C. $0.25$
- D. $0.2$

<details><summary>Answer</summary>

**B.** $P(B\mid A)=\dfrac{P(A\cap B)}{P(A)}=\dfrac{0.2}{0.4}=0.5$.

</details>

### 3. Multiplication theorem

A box has 3 red and 2 blue balls. Two balls are drawn without replacement. The probability that both are red is:

- A. $\frac{9}{25}$
- B. $\frac{3}{10}$
- C. $\frac{6}{25}$
- D. $\frac{2}{5}$

<details><summary>Answer</summary>

**B.** $P(R_1\cap R_2)=\dfrac{3}{5}\cdot\dfrac{2}{4}=\dfrac{6}{20}=\dfrac{3}{10}$.

</details>

### 4. Independence

Two events $A$ and $B$ are independent with $P(A)=0.3$ and $P(B)=0.4$. Then $P(A\cap B)$ is:

- A. $0.7$
- B. $0.1$
- C. $0.12$
- D. $0.58$

<details><summary>Answer</summary>

**C.** For independent events, $P(A\cap B)=P(A)P(B)=0.3\times 0.4=0.12$.

</details>

### 5. Mutually exclusive versus independent

If $A$ and $B$ are mutually exclusive and $P(A)>0$, $P(B)>0$, then:

- A. $A$ and $B$ must be independent
- B. $A$ and $B$ cannot be independent
- C. $P(A\cap B)=P(A)P(B)$
- D. $P(A\mid B)=P(A)$

<details><summary>Answer</summary>

**B.** Mutually exclusive means $P(A\cap B)=0$, but independence would require $P(A\cap B)=P(A)P(B)>0$. Therefore they cannot be independent.

</details>

### 6. Bayes' denominator

In Bayes' theorem, the denominator $\sum_i P(E_i)P(A\mid E_i)$ equals:

- A. $P(E_k)$
- B. $P(A\mid E_k)$
- C. $P(A)$
- D. $P(E_k\mid A)$

<details><summary>Answer</summary>

**C.** By the law of total probability, $\sum_i P(E_i)P(A\mid E_i)=P(A)$.

</details>

### 7. Valid probability distribution

Which of the following can be a probability distribution of a random variable $X$ taking values $0,1,2$?

- A. $0.3,0.4,0.4$
- B. $0.5,-0.1,0.6$
- C. $0.2,0.5,0.3$
- D. $0.1,0.2,0.3$

<details><summary>Answer</summary>

**C.** The probabilities must be non-negative and add to 1. Option C gives $0.2+0.5+0.3=1$.

</details>

### 8. Expectation

A random variable $X$ takes values $1,2,3$ with probabilities $0.2,0.5,0.3$ respectively. Then $E(X)$ is:

- A. $2.0$
- B. $2.1$
- C. $2.2$
- D. $1.8$

<details><summary>Answer</summary>

**B.** $E(X)=1(0.2)+2(0.5)+3(0.3)=0.2+1.0+0.9=2.1$.

</details>

### 9. Binomial probability

A fair coin is tossed 6 times. The probability of exactly 2 heads is:

- A. $\frac{15}{64}$
- B. $\frac{1}{64}$
- C. $\frac{6}{64}$
- D. $\frac{20}{64}$

<details><summary>Answer</summary>

**A.** $P(X=2)=\binom{6}{2}\left(\frac{1}{2}\right)^6=\dfrac{15}{64}$.

</details>

### 10. Binomial mean and variance

For $X\sim B(12,1/3)$, the mean and variance are:

- A. $4$ and $8/3$
- B. $3$ and $8/3$
- C. $4$ and $4/3$
- D. $8$ and $8/3$

<details><summary>Answer</summary>

**A.** $E(X)=np=12\cdot\frac{1}{3}=4$. $\operatorname{Var}(X)=npq=12\cdot\frac{1}{3}\cdot\frac{2}{3}=\frac{8}{3}$.

</details>

## Section B — 5 numerical-value questions

### 11. Conditional probability value

If $P(A)=0.6$, $P(B)=0.5$, and $P(A\cup B)=0.8$, find $P(A\mid B)$.

<details><summary>Answer</summary>

$P(A\cap B)=P(A)+P(B)-P(A\cup B)=0.6+0.5-0.8=0.3$.

$P(A\mid B)=\dfrac{0.3}{0.5}=0.6$.

</details>

### 12. Total probability

Urn I has 2 white and 3 black balls. Urn II has 4 white and 1 black ball. One urn is selected at random and a ball is drawn. Find the probability that the ball is white.

<details><summary>Answer</summary>

$P(W)=P(U_1)P(W\mid U_1)+P(U_2)P(W\mid U_2)=\dfrac{1}{2}\cdot\dfrac{2}{5}+\dfrac{1}{2}\cdot\dfrac{4}{5}=\dfrac{1}{5}+\dfrac{2}{5}=\dfrac{3}{5}=0.6$.

</details>

### 13. Bayes' posterior

Using Question 12, if the drawn ball is white, find the probability that it came from Urn II.

<details><summary>Answer</summary>

$P(U_2\mid W)=\dfrac{P(U_2)P(W\mid U_2)}{P(W)}=\dfrac{(1/2)(4/5)}{3/5}=\dfrac{2/5}{3/5}=\dfrac{2}{3}$.

</details>

### 14. Variance from a distribution

A random variable $X$ has distribution $P(X=0)=0.1$, $P(X=1)=0.4$, $P(X=2)=0.3$, $P(X=3)=0.2$. Find $\operatorname{Var}(X)$.

<details><summary>Answer</summary>

$E(X)=0(0.1)+1(0.4)+2(0.3)+3(0.2)=1.6$.

$E(X^2)=0(0.1)+1(0.4)+4(0.3)+9(0.2)=0.4+1.2+1.8=3.4$.

$\operatorname{Var}(X)=3.4-(1.6)^2=3.4-2.56=0.84$.

</details>

### 15. Binomial at least probability

A fair die is thrown 4 times. Find the probability of getting at least one six. Give the answer as a simplified fraction.

<details><summary>Answer</summary>

$P(\text{at least one six})=1-P(\text{no six})=1-\left(\dfrac{5}{6}\right)^4=1-\dfrac{625}{1296}=\dfrac{671}{1296}$.

</details>

## Section C — 3 assertion–reason questions

For each question, choose:

- A. Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.
- B. Both Assertion and Reason are true, but Reason is not the correct explanation of Assertion.
- C. Assertion is true, but Reason is false.
- D. Assertion is false, but Reason is true.

### 16. Conditional probability and independence

**Assertion (A):** If $P(A\mid B)=P(A)$ and $P(B)>0$, then $A$ and $B$ are independent.

**Reason (R):** $P(A\cap B)=P(B)P(A\mid B)$ for $P(B)>0$.

<details><summary>Answer</summary>

**A.** Reason R is the multiplication theorem. Substituting $P(A\mid B)=P(A)$ into R gives $P(A\cap B)=P(A)P(B)$, which is exactly the condition for independence. Both are true and R explains A.

</details>

### 17. Mutually exclusive events

**Assertion (A):** Two mutually exclusive events with positive probabilities can be independent.

**Reason (R):** If $A$ and $B$ are mutually exclusive, then $P(A\cap B)=0$.

<details><summary>Answer</summary>

**D.** Reason R is true by definition of mutually exclusive events. Assertion A is false because independence would require $P(A\cap B)=P(A)P(B)>0$, which contradicts $P(A\cap B)=0$.

</details>

### 18. Binomial variance

**Assertion (A):** For a binomial random variable with $n=10$ and $p=0.5$, the variance is 2.5.

**Reason (R):** For $X\sim B(n,p)$, $\operatorname{Var}(X)=npq$ where $q=1-p$.

<details><summary>Answer</summary>

**A.** R is the correct variance formula for a binomial distribution. Using it, $\operatorname{Var}(X)=10(0.5)(0.5)=2.5$, so A is true and R correctly explains A.

</details>

## Section D — 2 matching or multi-statement questions

### 19. Match the problem to the tool

Match each problem in Column I with the most direct tool in Column II.

| Column I | Column II |
| --- | --- |
| (P) A defective item is found; find probability it came from Machine A. | (1) Binomial distribution |
| (Q) Two cards drawn without replacement; find probability both are aces. | (2) Bayes' theorem |
| (R) Five independent shots, probability of exactly 3 hits. | (3) Multiplication theorem |
| (S) Given $P(X=x)$ table, find $\sum x_i p_i$. | (4) Expectation of a random variable |

Choose the correct option:

- A. P-2, Q-3, R-1, S-4
- B. P-3, Q-2, R-1, S-4
- C. P-2, Q-1, R-3, S-4
- D. P-2, Q-3, R-4, S-1

<details><summary>Answer</summary>

**A.** P is a reverse-cause question: Bayes' theorem. Q is sequential without replacement: multiplication theorem. R is fixed independent trials with exact count: binomial. S is the definition of expectation.

</details>

### 20. Multi-statement: binomial model

Let $X$ be the number of heads in 4 tosses of a fair coin. Consider the statements:

1. $X$ can take values $0,1,2,3,4$.
2. $P(X=2)=3/8$.
3. $E(X)=2$.
4. $\operatorname{Var}(X)=2$.

Which statements are correct?

- A. 1, 2 and 3 only
- B. 1 and 3 only
- C. 2, 3 and 4 only
- D. 1, 2, 3 and 4

<details><summary>Answer</summary>

**A.** 

Statement 1 is true: number of heads in 4 tosses is 0 to 4.

Statement 2 is true: $P(X=2)=\binom{4}{2}(1/2)^4=6/16=3/8$.

Statement 3 is true: $E(X)=np=4(1/2)=2$.

Statement 4 is false: $\operatorname{Var}(X)=npq=4(1/2)(1/2)=1$, not 2.

</details>

## If you got these wrong, revisit...

| Questions missed | Revisit | Focus on |
| --- | --- | --- |
| 1, 2, 11 | Conditional probability | Identify the condition first; use its probability as denominator. |
| 3, 12 | Multiplication theorem and independent events | Update probabilities after each stage; use total probability for alternative routes. |
| 4, 5, 16, 17 | Multiplication theorem and independent events | Distinguish independence from mutually exclusive; test with $P(A\cap B)=P(A)P(B)$. |
| 6, 13, 19(P) | Bayes’ theorem | Compute total probability denominator and reverse the condition carefully. |
| 7, 8, 14 | Random variables and probability distributions | Check $\sum p_i=1$, weight by probabilities, and use $E(X^2)-[E(X)]^2$. |
| 9, 10, 15, 18, 20 | Bernoulli trials and the binomial distribution | Include $\binom{n}{r}$, use complements for "at least one", and apply $np,npq$. |

<learning-block type="recap" title="Score target">

A solid first pass is 16+ correct out of 20 with clear method choices. Any wrong answer caused by a wrong denominator, a missing combination factor, or a reversed condition should be corrected before moving on.

</learning-block>
