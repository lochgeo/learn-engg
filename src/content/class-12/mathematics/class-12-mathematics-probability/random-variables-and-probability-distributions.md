## Turning outcomes into numbers

When you toss three coins, the sample space is $\{HHH,HHT,HTH,THH,HTT,THT,TTH,TTT\}$. That is useful, but often you care about a number: *how many heads?* The answer is 0, 1, 2, or 3, depending on the outcome. A random variable is the rule that makes this numerical link precise.

Once outcomes are expressed as numbers, you can describe their distribution, compute an average value, and measure how spread out the values are. This is the language used by the binomial distribution and many later probability models.

## 1. What a random variable is

A **random variable** is a function that assigns a real number to each outcome of a random experiment. It is usually denoted by a capital letter such as $X$, $Y$, or $Z$.

For three coin tosses, let $X$ be the number of heads. Then

$$
X(HHH)=3,\quad X(HHT)=2,\quad X(HTH)=2,\quad X(THH)=2,
$$

$$
X(HTT)=1,\quad X(THT)=1,\quad X(TTH)=1,\quad X(TTT)=0.
$$

The values taken by $X$ are $0,1,2,3$. The randomness comes from the experiment; once the outcome is known, the value of $X$ is determined.

In this chapter we focus on **discrete random variables**, which take a finite or countably infinite set of values (often integers).

## 2. Probability distribution of a discrete random variable

The **probability distribution** of a discrete random variable $X$ lists the possible values $x_1,x_2,\ldots,x_n$ and their probabilities $p_1,p_2,\ldots,p_n$, where $p_i=P(X=x_i)$.

It is often written as a table:

| $x_i$ | $x_1$ | $x_2$ | $\cdots$ | $x_n$ |
| --- | ---: | ---: | :---: | ---: |
| $P(X=x_i)$ | $p_1$ | $p_2$ | $\cdots$ | $p_n$ |

A valid probability distribution must satisfy:

$$
p_i\ge 0 \quad \text{for each }i, \qquad \text{and} \qquad \sum_{i=1}^{n} p_i=1.
$$

The second condition is a powerful check: if the probabilities do not add to 1, something is missing or miscalculated.

## 3. Mean, variance, and standard deviation

The distribution tells you how probability is spread over values. Two summary numbers are especially important.

### Mean or expectation

The **mean** (or **expected value**) of $X$ is

$$
E(X)=\mu=\sum_{i=1}^{n} x_i p_i.
$$

It is the probability-weighted average of the values of $X$. It need not be one of the possible outcomes; for example, the expected number on a fair die is 3.5.

### Variance and standard deviation

The **variance** measures spread around the mean:

$$
\operatorname{Var}(X)=\sigma^2=\sum_{i=1}^{n} (x_i-\mu)^2 p_i.
$$

An equivalent computational form is often faster:

$$
\operatorname{Var}(X)=E(X^2)-[E(X)]^2, \qquad \text{where} \qquad E(X^2)=\sum_{i=1}^{n} x_i^2 p_i.
$$

The **standard deviation** is $\sigma=\sqrt{\operatorname{Var}(X)}$. It has the same units as $X$.

<learning-block type="concept" title="Why variance uses squares">

Deviations $x_i-\mu$ can be positive or negative, and their weighted sum is zero. Squaring makes every deviation contribute non-negative spread, while larger deviations contribute more strongly.

</learning-block>

## 4. Worked example: a full distribution

A fair coin is tossed three times. Let $X$ be the number of heads. Find the probability distribution of $X$, then compute $E(X)$ and $\operatorname{Var}(X)$.

There are $8$ equally likely outcomes. The number of outcomes giving $k$ heads is $\binom{3}{k}$:

$$
P(X=0)=\frac{1}{8},\quad P(X=1)=\frac{3}{8},\quad P(X=2)=\frac{3}{8},\quad P(X=3)=\frac{1}{8}.
$$

So the distribution is:

| $x_i$ | 0 | 1 | 2 | 3 |
| --- | ---: | ---: | ---: | ---: |
| $p_i=P(X=x_i)$ | $1/8$ | $3/8$ | $3/8$ | $1/8$ |

**Check:** $\frac{1}{8}+\frac{3}{8}+\frac{3}{8}+\frac{1}{8}=\frac{8}{8}=1$.

Now compute the mean:

$$
E(X)=0\cdot\frac{1}{8}+1\cdot\frac{3}{8}+2\cdot\frac{3}{8}+3\cdot\frac{1}{8}=\frac{0+3+6+3}{8}=\frac{12}{8}=\frac{3}{2}=1.5.
$$

For variance, use $E(X^2)$:

$$
E(X^2)=0^2\cdot\frac{1}{8}+1^2\cdot\frac{3}{8}+2^2\cdot\frac{3}{8}+3^2\cdot\frac{1}{8}=\frac{0+3+12+9}{8}=\frac{24}{8}=3.
$$

Therefore

$$
\operatorname{Var}(X)=E(X^2)-[E(X)]^2=3-\left(\frac{3}{2}\right)^2=3-\frac{9}{4}=\frac{3}{4}=0.75.
$$

The standard deviation is $\sigma=\sqrt{0.75}=\frac{\sqrt{3}}{2}\approx 0.866$.

**Sanity check:** the expected value 1.5 is the middle of 0 to 3, which fits the symmetric distribution. The variance is positive, and the spread is moderate because most probability lies at 1 and 2.

<learning-block type="mistake" title="Do not average the values without their probabilities">

For a distribution, $E(X)$ is not $\frac{x_1+\cdots+x_n}{n}$ unless all probabilities are equal. Each value must be weighted by $P(X=x_i)$. Also, when using $\operatorname{Var}(X)=E(X^2)-[E(X)]^2$, square the mean at the end; do not replace $E(X^2)$ by $[E(X)]^2$.

</learning-block>

## Try it yourself

1. A discrete random variable $X$ has the distribution below. Find the value of $k$.

   | $x$ | 0 | 1 | 2 | 3 |
   | --- | ---: | ---: | ---: | ---: |
   | $P(X=x)$ | 0.1 | $k$ | 0.3 | 0.2 |

<details><summary>Show the reasoning</summary>

The probabilities must add to 1:

$$
0.1+k+0.3+0.2=1 \implies k+0.6=1 \implies k=0.4.
$$

</details>

2. For the distribution in Question 1 (with $k=0.4$), find $E(X)$.

<details><summary>Show the reasoning</summary>

$$
E(X)=0(0.1)+1(0.4)+2(0.3)+3(0.2)=0+0.4+0.6+0.6=1.6.
$$

</details>

3. Two fair dice are thrown. Let $X$ be the number of sixes obtained. Write the probability distribution of $X$.

<details><summary>Show the reasoning</summary>

Each die gives a six with probability $1/6$ and a non-six with probability $5/6$, independently. Thus

$$
P(X=0)=\frac{5}{6}\cdot\frac{5}{6}=\frac{25}{36},\quad
P(X=1)=2\cdot\frac{1}{6}\cdot\frac{5}{6}=\frac{10}{36},\quad
P(X=2)=\frac{1}{6}\cdot\frac{1}{6}=\frac{1}{36}.
$$

The distribution is $X\in\{0,1,2\}$ with probabilities $25/36,10/36,1/36$.

</details>

## Remember

- A random variable assigns a real number to every outcome of a random experiment.
- A discrete probability distribution must have $p_i\ge 0$ and $\sum p_i=1$.
- The mean is $E(X)=\sum x_i p_i$, a probability-weighted average.
- Variance is $\operatorname{Var}(X)=\sum (x_i-\mu)^2p_i=E(X^2)-[E(X)]^2$.
- Always check the total probability before trusting a mean or variance calculation.

Next, we study an especially important family of discrete distributions: Bernoulli trials and the binomial distribution.
