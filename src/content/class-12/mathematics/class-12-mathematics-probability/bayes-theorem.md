## Reasoning backwards from an observed result

A factory has two machines. Machine A makes most items but has a small defect rate; Machine B makes fewer items but has a higher defect rate. You pick one item at random and find that it is defective. Which machine is more likely to have produced it?

This is the reverse of a forward probability question. Forward: *if* Machine A made it, how likely is a defect? Reverse: *given* a defect, how likely is Machine A? Bayes' theorem answers this reversal cleanly by combining prior probabilities with conditional evidence.

## 1. Partitioning the sample space

Bayes' theorem is usually stated using a partition. Events $E_1,E_2,\ldots,E_n$ form a **partition** of the sample space $S$ if:

1. They are mutually exclusive: $E_i\cap E_j=\varnothing$ for $i\ne j$.
2. They are exhaustive: $E_1\cup E_2\cup\cdots\cup E_n=S$.
3. Each has positive probability: $P(E_i)>0$.

Think of $E_1,\ldots,E_n$ as possible causes, scenarios, or sources. Exactly one of them occurs.

## 2. The law of total probability

Let $A$ be any event with $P(A)>0$, and let $E_1,\ldots,E_n$ be a partition of $S$. Since $A$ can occur together with exactly one of the $E_i$,

$$
A=(A\cap E_1)\cup (A\cap E_2)\cup \cdots \cup (A\cap E_n),
$$

and these pieces are mutually exclusive. Therefore

$$
P(A)=\sum_{i=1}^{n} P(A\cap E_i).
$$

Using the multiplication theorem $P(A\cap E_i)=P(E_i)P(A\mid E_i)$, we get the **law of total probability**:

$$
P(A)=\sum_{i=1}^{n} P(E_i)P(A\mid E_i).
$$

This formula computes an overall probability by weighting each scenario's conditional probability by how likely that scenario is.

## 3. Bayes' theorem

We want the reverse conditional probability $P(E_k\mid A)$: the probability that cause $E_k$ occurred given that $A$ was observed.

Start from the definition of conditional probability:

$$
P(E_k\mid A)=\frac{P(E_k\cap A)}{P(A)}.
$$

Now replace the numerator using the multiplication theorem and the denominator using total probability:

$$
P(E_k\mid A)=\frac{P(E_k)P(A\mid E_k)}{\displaystyle\sum_{i=1}^{n} P(E_i)P(A\mid E_i)}, \qquad k=1,2,\ldots,n.
$$

This is **Bayes' theorem**.

- $P(E_k)$ is the **prior probability** of cause $E_k$, known before observing $A$.
- $P(A\mid E_k)$ is the **likelihood** of observing $A$ if $E_k$ is the cause.
- $P(E_k\mid A)$ is the **posterior probability**, updated after observing $A$.

<learning-block type="concept" title="What Bayes' theorem really does">

Bayes' theorem does not invent information. It redistributes probability among causes in proportion to how well each cause explains the observed evidence. A rare cause can become likely after strong evidence, but only through the numbers, not by intuition alone.

</learning-block>

## 4. Worked example: defective item from two machines

A factory produces items using Machine A and Machine B. Machine A produces 60% of the items and Machine B produces 40%. Of the items produced by Machine A, 2% are defective; of those produced by Machine B, 5% are defective. One item is chosen at random and found to be defective. What is the probability that it was produced by Machine A?

Let $E_A$ be "item from Machine A", $E_B$ be "item from Machine B", and $D$ be "item is defective". The events $E_A,E_B$ form a partition.

Given:

$$
P(E_A)=0.60,\quad P(E_B)=0.40,
$$

$$
P(D\mid E_A)=0.02,\quad P(D\mid E_B)=0.05.
$$

First compute the total probability of a defect:

$$
P(D)=P(E_A)P(D\mid E_A)+P(E_B)P(D\mid E_B)=0.60(0.02)+0.40(0.05).
$$

$$
P(D)=0.012+0.020=0.032.
$$

Now apply Bayes' theorem:

$$
P(E_A\mid D)=\frac{P(E_A)P(D\mid E_A)}{P(D)}=\frac{0.012}{0.032}=\frac{12}{32}=\frac{3}{8}=0.375.
$$

**Sanity check:** although Machine A makes 60% of all items, it makes only $0.012/0.032=37.5\%$ of the defective items because its defect rate is lower. Machine B contributes the remaining 62.5%. The posterior moved away from the larger prior because the evidence favoured Machine B. Also, $P(E_A\mid D)+P(E_B\mid D)=0.375+0.625=1$.

## 5. A tabular way to stay organised

For numerical problems, a cause-evidence table prevents denominator mistakes:

| Cause $E_i$ | Prior $P(E_i)$ | Likelihood $P(A\mid E_i)$ | Joint $P(E_i)P(A\mid E_i)$ | Posterior $P(E_i\mid A)$ |
| --- | ---: | ---: | ---: | ---: |
| $E_A$ | 0.60 | 0.02 | 0.012 | $0.012/0.032=0.375$ |
| $E_B$ | 0.40 | 0.05 | 0.020 | $0.020/0.032=0.625$ |
| **Total** | 1.00 | — | 0.032 | 1.000 |

The joint column adds to $P(A)$, and the posterior column must add to 1.

<learning-block type="mistake" title="Do not use $P(A\mid E_k)$ as the answer">

$P(D\mid E_A)=0.02$ is the probability that an item is defective given it came from Machine A. The question asked the reverse: $P(E_A\mid D)$. Bayes' theorem is needed whenever the condition in the data and the condition in the question are swapped.

</learning-block>

## Try it yourself

1. In a college, 70% of students are day scholars and 30% are hostellers. The probability that a day scholar passes an exam is 0.8, and the probability that a hosteller passes is 0.9. A student is chosen at random and is found to have passed. Find the probability that the student is a hosteller.

<details><summary>Show the reasoning</summary>

Let $H$ be hosteller, $D$ be day scholar, and $P$ be pass.

$$
P(P)=P(D)P(P\mid D)+P(H)P(P\mid H)=0.7(0.8)+0.3(0.9)=0.56+0.27=0.83.
$$

$$
P(H\mid P)=\frac{P(H)P(P\mid H)}{P(P)}=\frac{0.27}{0.83}=\frac{27}{83}\approx 0.3253.
$$

</details>

2. A test for a disease is positive in 99% of people who have the disease and in 5% of people who do not. If 1% of the population has the disease, find the probability that a person who tests positive actually has the disease.

<details><summary>Show the reasoning</summary>

Let $D$ be disease and $T$ be positive test. Then $P(D)=0.01$, $P(D')=0.99$, $P(T\mid D)=0.99$, $P(T\mid D')=0.05$.

$$
P(T)=0.01(0.99)+0.99(0.05)=0.0099+0.0495=0.0594.
$$

$$
P(D\mid T)=\frac{0.0099}{0.0594}=\frac{1}{6}\approx 0.1667.
$$

Even with a good test, the low prior makes a positive result less certain than many people expect.

</details>

3. Three urns contain red and black balls: Urn I has 3 red and 1 black, Urn II has 2 red and 2 black, Urn III has 1 red and 3 black. An urn is chosen at random and one ball is drawn; it is red. Find the probability it came from Urn I.

<details><summary>Show the reasoning</summary>

$P(U_1)=P(U_2)=P(U_3)=1/3$. $P(R\mid U_1)=3/4$, $P(R\mid U_2)=2/4$, $P(R\mid U_3)=1/4$.

$$
P(R)=\frac{1}{3}\left(\frac{3}{4}+\frac{2}{4}+\frac{1}{4}\right)=\frac{1}{3}\cdot\frac{6}{4}=\frac{1}{2}.
$$

$$
P(U_1\mid R)=\frac{(1/3)(3/4)}{1/2}=\frac{1/4}{1/2}=\frac{1}{2}.
$$

</details>

## Remember

- Bayes' theorem reverses conditioning: it finds $P(E_k\mid A)$ from $P(A\mid E_k)$ and priors.
- The denominator is the total probability $P(A)=\sum_i P(E_i)P(A\mid E_i)$, not just one branch.
- Priors, likelihoods, joints, and posteriors are different objects; a table helps keep them separate.
- Posterior probabilities across a partition must add to 1.
- A high likelihood $P(A\mid E_k)$ does not automatically mean a high posterior $P(E_k\mid A)$; the prior matters.

Next, we move from events to numerical outcomes by introducing random variables and their probability distributions.
