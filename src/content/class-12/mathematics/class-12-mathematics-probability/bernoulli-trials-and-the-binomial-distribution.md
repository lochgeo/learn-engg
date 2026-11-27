## Repeating the same yes/no experiment

Many probability questions have the same structure: repeat a trial several times, each time record whether a particular event happens, and count how many times it happens. A coin lands heads or not. A manufactured item is defective or not. A student answers a multiple-choice question correctly or not.

When the trials are identical and independent, the count follows a binomial distribution. This module names the assumptions carefully, derives the probability formula, and shows how to use it without losing track of what $n$, $p$, and $r$ mean.

## 1. Bernoulli trials

A **Bernoulli trial** is a single random experiment with exactly two outcomes, conventionally called success and failure.

- The probability of success is denoted by $p$.
- The probability of failure is $q=1-p$.
- Success does not mean "good" in everyday language; it simply means the outcome being counted.

A sequence of trials is called **Bernoulli trials** when:

1. The number of trials is fixed.
2. Each trial has only two possible outcomes: success or failure.
3. The probability of success $p$ remains the same in every trial.
4. The trials are independent.

If any of these conditions fails, the binomial formula may not apply. For example, drawing cards without replacement breaks independence and changes the success probability.

## 2. The binomial distribution

Let $X$ be the number of successes in $n$ Bernoulli trials, each with success probability $p$. Then $X$ can take values $0,1,2,\ldots,n$. The probability that exactly $r$ successes occur is

$$
P(X=r)=\binom{n}{r}p^r q^{n-r}, \qquad r=0,1,\ldots,n,
$$

where $q=1-p$ and $\binom{n}{r}=\frac{n!}{r!(n-r)!}$.

### Why this formula holds

Consider any particular sequence with exactly $r$ successes and $n-r$ failures, for example

$$
S, S, F, S, F, \ldots
$$

Because trials are independent and $p$ is constant, the probability of this specific sequence is

$$
p^r q^{n-r}.
$$

But the $r$ successes can appear in different positions. The number of ways to choose which $r$ trials out of $n$ are successes is $\binom{n}{r}$. Each of those sequences has the same probability and they are mutually exclusive. Adding them gives

$$
P(X=r)=\binom{n}{r}p^r q^{n-r}.
$$

<learning-block type="concept" title="Read the three factors">

In $\binom{n}{r}p^r q^{n-r}$, the combination counts *where* successes occur, $p^r$ accounts for $r$ successes, and $q^{n-r}$ accounts for the remaining failures. Missing any one of these factors gives a wrong answer.

</learning-block>

## 3. Mean and variance

For a binomial random variable $X\sim B(n,p)$,

$$
E(X)=np, \qquad \operatorname{Var}(X)=npq, \qquad q=1-p.
$$

These results match intuition. If you attempt $n$ trials and each succeeds with probability $p$, you expect about $np$ successes. The spread depends on both $p$ and $q$, and is largest when $p=q=1/2$ for a fixed $n$.

You do not need to re-derive these in every problem, but you should know what they mean and be able to use them.

## 4. Worked example

A fair die is thrown 5 times. Getting a 6 is counted as a success. Find the probability of getting (i) exactly 2 sixes, (ii) at least 4 sixes.

Here each throw is a Bernoulli trial with

$$
n=5,\qquad p=\frac{1}{6},\qquad q=1-p=\frac{5}{6}.
$$

Let $X$ be the number of sixes.

### (i) Exactly 2 sixes

$$
P(X=2)=\binom{5}{2}\left(\frac{1}{6}\right)^2\left(\frac{5}{6}\right)^3.
$$

Compute each part: $\binom{5}{2}=10$, $(1/6)^2=1/36$, $(5/6)^3=125/216$. Therefore

$$
P(X=2)=10\cdot\frac{1}{36}\cdot\frac{125}{216}=\frac{1250}{7776}=\frac{625}{3888}\approx 0.1608.
$$

### (ii) At least 4 sixes

"At least 4" means $X=4$ or $X=5$:

$$
P(X\ge 4)=P(X=4)+P(X=5).
$$

$$
P(X=4)=\binom{5}{4}\left(\frac{1}{6}\right)^4\left(\frac{5}{6}\right)^1=5\cdot\frac{1}{1296}\cdot\frac{5}{6}=\frac{25}{7776}.
$$

$$
P(X=5)=\binom{5}{5}\left(\frac{1}{6}\right)^5\left(\frac{5}{6}\right)^0=1\cdot\frac{1}{7776}\cdot 1=\frac{1}{7776}.
$$

So

$$
P(X\ge 4)=\frac{25+1}{7776}=\frac{26}{7776}=\frac{13}{3888}\approx 0.003343.
$$

**Sanity check:** exactly 2 sixes should be much more likely than at least 4 sixes because $p=1/6$ is small. The values $0.1608$ and $0.003343$ agree with that intuition. Also, the mean is $np=5/6\approx 0.833$, so high counts should be rare.

<learning-block type="mistake" title="Do not forget the combination factor">

A common error is to write $P(X=2)=(1/6)^2(5/6)^3$ and miss $\binom{5}{2}$. That calculates only one order, such as success-success-failure-failure-failure. The combination counts all possible positions of the successes.

</learning-block>

## 5. Choosing when to use the binomial model

Before applying the formula, quickly test the four Bernoulli conditions:

| Check | Question to ask | If it fails |
| --- | --- | --- |
| Fixed $n$ | Is the number of trials fixed in advance? | Binomial formula does not directly apply. |
| Two outcomes | Can each trial be classified as success/failure? | Redefine success clearly, or use another model. |
| Constant $p$ | Is the success probability the same each time? | Without-replacement sampling may need hypergeometric thinking. |
| Independence | Does one trial affect another? | Conditional or dependent-trial methods may be needed. |

In board and JEE problems, phrases like "repeated throws", "independent shots", "with replacement", or "each item is defective with probability..." usually signal a binomial model.

## Try it yourself

1. A fair coin is tossed 4 times. Find the probability of getting exactly 3 heads.

<details><summary>Show the reasoning</summary>

Here $n=4$, $r=3$, $p=1/2$, $q=1/2$.

$$
P(X=3)=\binom{4}{3}\left(\frac{1}{2}\right)^3\left(\frac{1}{2}\right)^1=4\cdot\frac{1}{16}=\frac{1}{4}.
$$

</details>

2. The probability that a shooter hits a target is 0.7. If he fires 3 independent shots, find the probability that he hits the target at least once.

<details><summary>Show the reasoning</summary>

Use the complement: "at least once" is $1-P(\text{no hits})$. With $p=0.7$, $q=0.3$,

$$
P(X\ge 1)=1-P(X=0)=1-\binom{3}{0}(0.7)^0(0.3)^3=1-0.027=0.973.
$$

</details>

3. For a binomial distribution with $n=10$ and $p=0.4$, find the mean and variance.

<details><summary>Show the reasoning</summary>

$$
E(X)=np=10(0.4)=4.
$$

$$
\operatorname{Var}(X)=npq=10(0.4)(0.6)=2.4.
$$

</details>

## Remember

- Bernoulli trials have fixed $n$, two outcomes per trial, constant $p$, and independence.
- The binomial probability is $P(X=r)=\binom{n}{r}p^r q^{n-r}$ for $r=0,1,\ldots,n$.
- The combination counts positions of successes; it is not optional.
- For $X\sim B(n,p)$, $E(X)=np$ and $\operatorname{Var}(X)=npq$.
- "At least", "at most", and "none" questions are often easiest using complements or a sum of a few binomial terms.

Next, the practice module brings conditional probability, Bayes' theorem, random variables, and binomial calculations together so you can choose the right method quickly.
