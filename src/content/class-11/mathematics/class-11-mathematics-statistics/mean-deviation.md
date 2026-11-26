## When the deviations cancel, take the size

The mean is a balance point: the deviations $x_i-\bar{x}$ add to zero. That is useful for checking a mean, but it makes them useless for measuring spread — the large positive and negative deviations cancel and leave nothing behind. If we want a single number that answers "how far do the observations typically sit from the centre?", we must discard the signs. Replacing each deviation by its absolute value does exactly that, and the resulting average is the **mean deviation**.

## 1. Definition

The mean deviation of observations $x_1,\ldots,x_n$ about a chosen point $a$ is

$$
\text{M.D. about }a=\frac{1}{n}\sum_{i=1}^{n}|x_i-a|.
$$

For data in which $x_i$ occurs $f_i$ times and $N=\sum f_i$,

$$
\text{M.D. about }a=\frac{\sum f_i\,|x_i-a|}{N}.
$$

The point $a$ is usually the mean $\bar{x}$ or the median $M$, so we speak of "mean deviation about the mean" or "mean deviation about the median". The vertical bars matter: $|x_i-a|$ is the distance from $a$, never a signed quantity. Mean deviation has the same units as the data.

## 2. Which centre to use

Both choices are used in practice, and it helps to know how they behave.

- **About the mean:** distances are measured from the balance point, so extreme values influence the answer through both $\bar{x}$ and their own large distances.
- **About the median:** the median has a special property — among all possible choices of $a$, the sum $\sum|x_i-a|$ is **smallest when $a$ is the median**.

Here is the reasoning behind that property. Suppose the ordered observations are $x_{(1)}\le\cdots\le x_{(n)}$. Move $a$ a small distance $t$ to the right. Every observation to the right of $a$ gets $t$ closer, reducing its distance by $t$; every observation to the left gets $t$ further away, increasing its distance by $t$. The net change is $t\big(\#\text{left}-\#\text{right}\big)$. This is negative while more observations lie to the right than to the left, zero at the median, and positive afterwards. So the total absolute deviation falls until $a$ reaches the median and rises after it. Consequently

$$
\text{M.D. about the median}\ \le\ \text{M.D. about the mean}.
$$

Equality can occur for symmetric data; the inequality is strict when the data are skewed.

## 3. A worked example

Six reaction times, in seconds, were recorded:

$$
2,\ 4,\ 6,\ 8,\ 10,\ 24.
$$

The total is $54$, so the mean is $\bar{x}=54/6=9\ \text{s}$. Ordered data give the median $M=\dfrac{6+8}{2}=7\ \text{s}$.

**About the mean $9$:**

| $x_i$ | $2$ | $4$ | $6$ | $8$ | $10$ | $24$ |
| --- | --- | --- | --- | --- | --- | --- |
| $|x_i-9|$ | $7$ | $5$ | $3$ | $1$ | $1$ | $15$ |

The distances sum to $7+5+3+1+1+15=32$, so

$$
\text{M.D. about mean}=\frac{32}{6}=\frac{16}{3}\approx5.33\ \text{s}.
$$

**About the median $7$:** the distances are $5,3,1,1,3,17$, summing to $30$, so

$$
\text{M.D. about median}=\frac{30}{6}=5\ \text{s}.
$$

**Sanity check.** The value $24\ \text{s}$ is an outlier. It pulls the mean ($9$) above the median ($7$), and the mean deviation about the median ($5$) is indeed smaller than that about the mean ($5.33$), exactly as the minimisation property predicts.

<learning-block type="mistake" title="Forgetting the absolute value">

A classic error is to compute $\dfrac{1}{n}\sum(x_i-\bar{x})$ instead of $\dfrac{1}{n}\sum|x_i-\bar{x}|$. The first expression is always zero — we proved that in the previous lesson — so the "mean deviation" would come out as $0$ for every data set. If your mean deviation is zero for non-identical observations, you have dropped the vertical bars.

</learning-block>

## Try it yourself

**A.** Find the mean deviation about the mean of $3,6,9,12,15$.

<details><summary>Show the reasoning</summary>

The mean is $\dfrac{3+6+9+12+15}{5}=9$. Distances from $9$ are $6,3,0,3,6$, summing to $18$. Hence the mean deviation is $18/5=3.6$.

</details>

**B.** Find the mean deviation about the median of $1,2,3,4,5,6,20$.

<details><summary>Show the reasoning</summary>

With $7$ observations the median is the $4$th, namely $4$. Distances are $3,2,1,0,1,2,16$, summing to $25$. The mean deviation about the median is $25/7\approx3.57$.

</details>

**C.** Values $2,4,6,8,10$ have frequencies $3,2,1,2,2$. Find the mean deviation about the mean.

<details><summary>Show the reasoning</summary>

Here $N=10$ and $\sum fx=6+8+6+16+20=56$, so $\bar{x}=5.6$. Weighted distances are $3(3.6)+2(1.6)+1(0.4)+2(2.4)+2(4.4)=10.8+3.2+0.4+4.8+8.8=28$. Therefore the mean deviation is $28/10=2.8$.

</details>

## Remember

- Mean deviation measures average distance from a centre; absolute values remove the cancelling signs.
- Use $\dfrac{\sum f_i|x_i-a|}{N}$ for frequency data and remember to weight each distance by its frequency.
- The sum of absolute deviations is minimised at the median, so the median version is never larger than the mean version.
- It carries the same unit as the observations, and a zero answer for varying data means you forgot the absolute value.
- Absolute values are awkward to manipulate algebraically. The next lesson replaces them with squares, which leads to variance and standard deviation.
