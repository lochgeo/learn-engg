## Which series is more consistent?

Two cricketers average 50 runs. One scores 48, 49, 50, 51, 52 every time; the other scores 5, 20, 50, 80, 95. Their means are identical, yet nobody would call them equally reliable. The mean tells you where a distribution is centred; the standard deviation tells you how scattered it is. To compare two distributions fairly — especially when their centres differ — we need a measure of spread that is adjusted for the size of the mean.

## 1. Two cases to distinguish

- **Equal means.** Compare the standard deviations directly. The smaller $\sigma$ means the observations cluster more tightly around the same centre, so that series is more **consistent**.
- **Unequal means.** A raw standard deviation is not enough, because it is expressed in the units of a quantity whose typical size may be very different. Compare **relative** spread instead.

## 2. The coefficient of variation

The **coefficient of variation** (CV) expresses the standard deviation as a percentage of the mean:

$$
\text{CV}=\frac{\sigma}{\bar{x}}\times100\%.
$$

It is dimensionless, so it can compare series measured on different scales or with different means. A smaller CV means greater consistency; a larger CV means greater variability. Since variance is $\sigma^2$, never substitute variance directly into this formula — take the square root first.

The CV is most meaningful when the mean is positive and comfortably away from zero. If $\bar{x}\approx0$, the ratio becomes unstable, and this is one reason to report the standard deviation instead.

## 3. Scaling and consistency

If every observation is multiplied by a positive constant $k$ and nothing is added, then $\bar{y}=k\bar{x}$ and $\sigma_y=k\sigma_x$, so

$$
\text{CV}_y=\frac{k\sigma_x}{k\bar{x}}\times100\%=\text{CV}_x.
$$

Multiplying all values by a common factor leaves consistency unchanged. Adding a constant does **not** have this property: it raises the mean while leaving $\sigma$ fixed, so the CV falls. This distinction is a frequent source of JEE traps.

## 4. A worked example

Five innings are recorded for two players, with scores in runs:

$$
\text{A: }30,\ 35,\ 40,\ 45,\ 50,\qquad \text{B: }62,\ 71,\ 80,\ 89,\ 98.
$$

**Player A.** The mean is $\bar{x}_A=\dfrac{200}{5}=40$. Deviations are $-10,-5,0,5,10$ with squares $100,25,0,25,100$, so

$$
\sigma_A^{2}=\frac{250}{5}=50,\qquad \sigma_A=\sqrt{50}\approx7.07,\qquad \text{CV}_A=\frac{7.07}{40}\times100\%\approx17.68\%.
$$

**Player B.** The mean is $\bar{x}_B=\dfrac{400}{5}=80$. Deviations are $-18,-9,0,9,18$ with squares $324,81,0,81,324$, so

$$
\sigma_B^{2}=\frac{810}{5}=162,\qquad \sigma_B=\sqrt{162}\approx12.73,\qquad \text{CV}_B=\frac{12.73}{80}\times100\%\approx15.91\%.
$$

**Interpretation.** Player B has the *larger* standard deviation, $12.73$ versus $7.07$, but the *smaller* coefficient of variation, $15.91\%$ versus $17.68\%$. Relative to their own averages, B's scores fluctuate less: B is the more consistent player. Judging by standard deviation alone would give the wrong answer here.

**Sanity check.** Each player's deviations are symmetric multiples of $5$ and $9$ respectively, so both means are the middle entry. Dividing $\sigma$ by the mean compares spread in units of "one run per run of average", which is why the percentages are of the same order.

<learning-block type="mistake" title="Comparing standard deviations of different-sized means">

The common error is to say "A is more consistent because $7.07<12.73$". That comparison is only valid when the means are equal. Here B's average ($80$) is twice A's ($40$), so a larger absolute spread can still be a smaller relative spread. Whenever the means differ, calculate $\text{CV}=\sigma/\bar{x}\times100\%$ for both series before deciding. A second error is dividing by variance instead of standard deviation; square-root first.

</learning-block>

## Try it yourself

**A.** Series P has mean $50$ and standard deviation $5$; series Q has mean $200$ and standard deviation $18$. Which is more consistent?

<details><summary>Show the reasoning</summary>

$\text{CV}_P=\dfrac{5}{50}\times100\%=10\%$ and $\text{CV}_Q=\dfrac{18}{200}\times100\%=9\%$. Q has the larger standard deviation but the smaller coefficient of variation, so Q is more consistent.

</details>

**B.** Every observation of a series is doubled, with nothing added. What happens to its mean, standard deviation, variance and coefficient of variation?

<details><summary>Show the reasoning</summary>

Mean and standard deviation both double, variance becomes four times as large, and the coefficient of variation is unchanged because the factor $2$ cancels between $\sigma$ and $\bar{x}$.

</details>

**C.** Two series have the same mean $30$ but standard deviations $4$ and $6$. Which is more consistent, and why is no CV needed?

<details><summary>Show the reasoning</summary>

With equal means, comparing $\sigma$ directly is enough: $\text{CV}=4/30\times100\%\approx13.33\%$ versus $6/30\times100\%=20\%$. The series with $\sigma=4$ is more consistent, since a common denominator cannot reverse the ordering.

</details>

## Remember

- Compare standard deviations only when the means are equal; otherwise use $\text{CV}=\sigma/\bar{x}\times100\%$.
- Lower CV means more consistent; higher CV means more variable.
- CV is a percentage and has no units, so it works across different scales.
- Scaling by $k>0$ preserves CV; adding a constant does not.
- Use $\sigma$, never $\sigma^2$, in the CV formula, and avoid CV when the mean is close to zero.
- You now have the whole toolkit: centre, absolute spread, squared spread and relative spread. The practice module brings them together under exam conditions.
