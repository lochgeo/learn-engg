## Why square the deviations?

Absolute deviations measure spread well but are awkward to handle: $|x|$ has a corner at zero and does not combine neatly with sums. Squaring removes the sign just as effectively and gives a smooth function whose algebra we can rearrange. The price is that large deviations are penalised more heavily — which is often exactly what we want, since an outlier should matter more than a small wobble. The result of averaging the squared deviations is the **variance**; its square root, which returns to the original units, is the **standard deviation**.

## 1. Definitions

For observations $x_1,\ldots,x_n$ with mean $\bar{x}$, the **variance** is

$$
\sigma^{2}=\frac{1}{n}\sum_{i=1}^{n}(x_i-\bar{x})^{2},
$$

and the **standard deviation** is

$$
\sigma=\sqrt{\frac{1}{n}\sum_{i=1}^{n}(x_i-\bar{x})^{2}}.
$$

For frequency data with $N=\sum f_i$,

$$
\sigma^{2}=\frac{\sum f_i(x_i-\bar{x})^{2}}{N},\qquad \sigma=\sqrt{\frac{\sum f_i(x_i-\bar{x})^{2}}{N}}.
$$

The divisor is $n$ (or $N$), as used in the Class 11 definition of population variance. A different convention with divisor $n-1$ appears when estimating a population variance from a sample in later statistics; do not mix the two in the same problem.

Variance is measured in **squared units** — if $x$ is in seconds, $\sigma^{2}$ is in $\text{s}^2$. Standard deviation is in the same units as the data, which makes it the more readable measure. Both are zero exactly when all observations are equal.

## 2. A shortcut formula

Expanding the definition gives a form that avoids writing every deviation:

$$
\begin{aligned}
\sigma^{2}
&=\frac{1}{n}\sum (x_i-\bar{x})^{2}\\
&=\frac{1}{n}\sum\left(x_i^{2}-2\bar{x}x_i+\bar{x}^{2}\right)\\
&=\frac{1}{n}\sum x_i^{2}-2\bar{x}\left(\frac{1}{n}\sum x_i\right)+\bar{x}^{2}\\
&=\overline{x^{2}}-2\bar{x}^{2}+\bar{x}^{2}\\
&=\overline{x^{2}}-\bar{x}^{2}.
\end{aligned}
$$

In words: **variance equals the mean of the squares minus the square of the mean**. For frequency data the same algebra gives

$$
\sigma^{2}=\frac{\sum f_i x_i^{2}}{N}-\left(\frac{\sum f_i x_i}{N}\right)^{2}.
$$

This form is faster when the mean is not a whole number, because it avoids subtracting a decimal from every observation. Its two large terms can nearly cancel, so keep enough decimal places.

## 3. How transformations affect spread

- Adding a constant $k$ to every observation shifts the mean by $k$ but leaves every deviation — and hence $\sigma$ — unchanged.
- Multiplying every observation by a positive constant $k$ multiplies the mean by $k$ and the standard deviation by $k$; the variance is multiplied by $k^{2}$.

Thus if $y_i=kx_i+c$ with $k>0$, then $\bar{y}=k\bar{x}+c$ and $\sigma_y=k\sigma_x$. These facts turn up often in JEE questions.

## 4. A worked example

Find the variance and standard deviation of $3,5,7,9,11$ (measurements in metres).

**Step 1 — the mean.** $\bar{x}=\dfrac{3+5+7+9+11}{5}=\dfrac{35}{5}=7\ \text{m}$.

**Step 2 — squared deviations.** The deviations are $-4,-2,0,2,4$, so the squares are $16,4,0,4,16$, summing to $40$.

**Step 3 — variance and standard deviation.**

$$
\sigma^{2}=\frac{40}{5}=8\ \text{m}^{2},\qquad \sigma=\sqrt{8}=2\sqrt{2}\approx2.83\ \text{m}.
$$

**Step 4 — check with the shortcut.** $\sum x_i^{2}=9+25+49+81+121=285$, so $\overline{x^{2}}=285/5=57$ and $\bar{x}^{2}=49$. Then $\sigma^{2}=57-49=8$, agreeing with the direct route.

**Sanity check.** The observations lie $4\ \text{m}$ from the centre at the extremes, so a standard deviation near $2.8\ \text{m}$ — roughly two thirds of that maximum distance — is reasonable. It cannot exceed the largest deviation of $4\ \text{m}$.

<learning-block type="mistake" title="Variance or standard deviation, and which divisor?">

Two errors dominate. First, giving $8$ as "the standard deviation" when the question asked for $\sigma$: variance is $8\ \text{m}^2$, standard deviation is $\sqrt{8}\approx2.83\ \text{m}$ — remember the square root and the unit. Second, dividing by $n-1$ out of habit; the definition used throughout this chapter divides by $n$. Check the unit of your answer: if the data are in metres, a standard deviation in $\text{m}^2$ signals that you have reported the variance.

</learning-block>

## Try it yourself

**A.** Find the variance and standard deviation of $2,4,6,8,10$.

<details><summary>Show the reasoning</summary>

The mean is $6$. Deviations $-4,-2,0,2,4$ have squares summing to $40$, so $\sigma^{2}=40/5=8$ and $\sigma=2\sqrt{2}\approx2.83$. This matches the previous example: shifting every value by $-1$ leaves the spread unchanged.

</details>

**B.** Find the variance of $1,2,3,4,5$ using the shortcut formula.

<details><summary>Show the reasoning</summary>

$\bar{x}=3$ and $\sum x_i^{2}=1+4+9+16+25=55$, so $\overline{x^{2}}=11$. Hence $\sigma^{2}=11-3^{2}=2$, and $\sigma=\sqrt{2}\approx1.41$.

</details>

**C.** A set has mean $20$ and standard deviation $4$. Each observation is multiplied by $3$ and then increased by $5$. Find the new mean and standard deviation.

<details><summary>Show the reasoning</summary>

With $y_i=3x_i+5$, the new mean is $3(20)+5=65$. Multiplying by $3$ scales the standard deviation to $3(4)=12$; adding $5$ changes no deviation, so the standard deviation stays $12$. (The coefficient of variation changes from $4/20=20\%$ to $12/65\approx18.46\%$, since the added constant breaks scale invariance.)

</details>

## Remember

- Variance averages squared deviations; standard deviation is its square root and shares the data's unit.
- Use $\sigma^{2}=\overline{x^{2}}-\bar{x}^{2}$ to avoid a non-integer mean, and keep enough digits because the terms nearly cancel.
- The Class 11 definition divides by $n$; divisor $n-1$ belongs to a different context.
- Adding a constant changes the mean only; multiplying by $k$ scales the mean by $k$, the standard deviation by $k$ and the variance by $k^{2}$.
- So far the data have been listed value by value. The next lesson handles data already grouped into class intervals, where all three measures need a frequency-based method.
