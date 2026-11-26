## JEE Main sprint: how to use this set

This is a **50-minute, no-notes** paper for after the chapter lessons and mastery check. Work Section A in about 12 minutes, Section B in 15, Section C in 13 and Section D in 10. Mark anything that stalls for more than 90 seconds and move on; a wrong answer with a written method is more useful than a guessed one.

Before calculating, name the tool: a central-tendency definition, absolute deviations, squared deviations, a grouped-data formula, or a coefficient of variation. All data are self-contained, so no external constants are needed.

## Formula and conditions sheet

| Situation | Start with | Condition to check |
| --- | --- | --- |
| Mean of raw / frequency data | $\dfrac{\sum x_i}{n}$ or $\dfrac{\sum f_i x_i}{N}$ | Frequencies must sum to the number of observations |
| Median of raw data | Middle entry after sorting | For even $n$, average the two central entries |
| Mean deviation | $\dfrac{\sum f_i\lvert x_i-a\rvert}{N}$ | Absolute values; $a$ is usually mean or median |
| Variance and standard deviation | $\sigma^{2}=\overline{x^{2}}-\bar{x}^{2}$, then $\sigma=\sqrt{\sigma^{2}}$ | Divisor $n$; take the square root for $\sigma$ |
| Grouped mean | $a+h\dfrac{\sum f_iu_i}{N}$ | Equal class width $h$; $u_i=(x_i-a)/h$ |
| Grouped median | $l+\dfrac{N/2-C}{f}h$ | $C$ is the cumulative frequency *before* the median class |
| Grouped mode | $l+\dfrac{f_1-f_0}{2f_1-f_0-f_2}h$ | Use the modal class and its two neighbours |
| Consistency across different means | $\text{CV}=\dfrac{\sigma}{\bar{x}}\times100\%$ | Use $\sigma$, not $\sigma^{2}$; mean well away from zero |
| $y_i=kx_i+c$, $k>0$ | $\bar y=k\bar x+c$, $\sigma_y=k\sigma_x$ | CV is unchanged only for pure scaling ($c=0$) |

<learning-block type="mistake" title="The fastest sanity checks">

A mean must lie between the smallest and largest observations; a median and a grouped mode must lie inside their class; a variance or standard deviation cannot be negative; and the answer to a mean-deviation question cannot be zero unless all observations are equal. If a check fails, revisit the setup before attempting the next part.

</learning-block>

## Section A — 10 rapid MCQs

### 1. Mean of the first ten natural numbers

The mean of $1,2,\ldots,10$ is:

- A. $4.5$
- B. $5$
- C. $5.5$
- D. $10$

<details><summary>Answer</summary>

**C.** The sum is $\dfrac{10\times11}{2}=55$, so the mean is $55/10=5.5$. Equivalently, the mean of the first $n$ natural numbers is $\dfrac{n+1}{2}$.

</details>

### 2. Changing one observation

Five numbers have mean $12$. If one number is increased by $10$ and the others are unchanged, the new mean is:

- A. $12$
- B. $13$
- C. $14$
- D. $22$

<details><summary>Answer</summary>

**C.** The original total is $5\times12=60$. The new total is $70$, so the new mean is $70/5=14$. An increase of $10$ shared among $5$ observations raises the mean by $10/5=2$.

</details>

### 3. Sum of deviations

For any data set, the sum of the deviations of the observations from their mean is:

- A. equal to the variance
- B. exactly zero
- C. equal to the standard deviation
- D. equal to the number of observations

<details><summary>Answer</summary>

**B.** $\sum(x_i-\bar{x})=\sum x_i-n\bar{x}=n\bar{x}-n\bar{x}=0$. Positive and negative deviations cancel about the balance point.

</details>

### 4. Median of an even-sized set

The median of $2,4,6,8,10,12$ is:

- A. $6$
- B. $7$
- C. $8$
- D. $9$

<details><summary>Answer</summary>

**B.** With six ordered observations, average the $3$rd and $4$th: $\dfrac{6+8}{2}=7$.

</details>

### 5. Mode

The mode of $1,2,2,3,3,3,4$ is:

- A. $2$
- B. $3$
- C. $4$
- D. there is no mode

<details><summary>Answer</summary>

**B.** The value $3$ occurs three times, more than any other value, so it is the mode.

</details>

### 6. Variance from standard deviation

A data set has mean $10$ and standard deviation $2$. Its variance is:

- A. $2$
- B. $4$
- C. $\sqrt{2}$
- D. $20$

<details><summary>Answer</summary>

**B.** Variance is the square of the standard deviation: $\sigma^{2}=2^{2}=4$. It is measured in squared units, unlike $\sigma$.

</details>

### 7. Scaling the standard deviation

Every observation of a set is multiplied by $3$. If the original standard deviation was $5$, the new standard deviation is:

- A. $5$
- B. $8$
- C. $15$
- D. $45$

<details><summary>Answer</summary>

**C.** For $y_i=3x_i$, $\sigma_y=3\sigma_x=15$. The variance would be multiplied by $9$, not the standard deviation.

</details>

### 8. Coefficient of variation

The coefficient of variation of a series with mean $\bar{x}$ and standard deviation $\sigma$ is:

- A. $\dfrac{\sigma}{\bar{x}}$
- B. $\dfrac{\sigma}{\bar{x}}\times100\%$
- C. $\dfrac{\bar{x}}{\sigma}\times100\%$
- D. $\dfrac{\sigma^{2}}{\bar{x}}\times100\%$

<details><summary>Answer</summary>

**B.** $\text{CV}=\dfrac{\sigma}{\bar{x}}\times100\%$. It is a dimensionless percentage used to compare series with different means.

</details>

### 9. Minimising absolute deviation

The sum $\sum|x_i-a|$ of absolute deviations is smallest when $a$ is the:

- A. mean
- B. median
- C. mode
- D. range

<details><summary>Answer</summary>

**B.** Moving $a$ toward the median reduces the total distance while more observations lie on one side, so the minimum occurs at the median. Hence mean deviation about the median never exceeds that about the mean.

</details>

### 10. Class mark

The class mark of the class $20\text{–}30$ is:

- A. $20$
- B. $25$
- C. $30$
- D. $50$

<details><summary>Answer</summary>

**B.** The class mark is the midpoint: $\dfrac{20+30}{2}=25$. Grouped calculations use this representative value, not the class limits.

</details>

## Section B — 5 numerical-value questions

### 11. Mean of a short list

Find the mean of $8,\ 12,\ 16,\ 20,\ 24$.

<details><summary>Answer</summary>

The total is $8+12+16+20+24=80$ and there are $5$ observations, so the mean is $16$.

</details>

### 12. Variance of consecutive integers

Find the variance of $1,\ 2,\ 3,\ 4,\ 5$.

<details><summary>Answer</summary>

The mean is $3$ and $\sum x_i^{2}=1+4+9+16+25=55$, so $\overline{x^{2}}=11$. Therefore $\sigma^{2}=11-9=2$ (and $\sigma=\sqrt2\approx1.41$).

</details>

### 13. Mean deviation about the mean

Find the mean deviation about the mean of $3,\ 6,\ 9,\ 12,\ 15$.

<details><summary>Answer</summary>

The mean is $9$. Distances from it are $6,3,0,3,6$, summing to $18$, so the mean deviation is $18/5=3.6$.

</details>

### 14. Grouped mean by step deviation

For a grouped distribution, $a=25$, $h=10$, $N=40$ and $\sum f_iu_i=3$. Find the mean.

<details><summary>Answer</summary>

$\bar{x}=a+h\dfrac{\sum f_iu_i}{N}=25+10\left(\dfrac{3}{40}\right)=25+0.75=25.75$.

</details>

### 15. A missing frequency

Values $1,2,3,4,5$ occur with frequencies $2,3,k,2,1$. If the mean is $2.8$, find $k$.

<details><summary>Answer</summary>

$\sum f=8+k$, $\sum fx=21+3k$. From $\dfrac{21+3k}{8+k}=2.8$ we get $21+3k=22.4+2.8k$, so $0.2k=1.4$ and $k=7$. Check: $42/15=2.8$.

</details>

## Section C — 3 assertion–reason questions

For each question choose: **(A)** both assertion and reason are true and the reason correctly explains the assertion; **(B)** both are true but the reason does not explain the assertion; **(C)** the assertion is true but the reason is false; **(D)** the assertion is false but the reason is true.

### 16. Deviations about the mean

**Assertion:** The deviations of observations from their arithmetic mean sum to zero.
**Reason:** The mean is the arithmetic average, so the total of the positive deviations equals the total of the negative deviations.

<details><summary>Answer</summary>

**A.** Both statements are true and the reason is exactly the proof: $\sum(x_i-\bar{x})=\sum x_i-n\bar{x}=0$, so the positive and negative parts cancel.

</details>

### 17. Two mean deviations

**Assertion:** The mean deviation about the median is never greater than the mean deviation about the mean.
**Reason:** Among all choices of $a$, the sum $\sum|x_i-a|$ is minimised at the median.

<details><summary>Answer</summary>

**A.** The reason is the minimisation property of the median, proved by comparing how the total absolute distance changes as $a$ moves. Since the mean is just one possible choice of $a$, the assertion follows.

</details>

### 18. Comparing two series

**Assertion:** If one series has a larger standard deviation than another, it is always more variable, even when the two means are very different.
**Reason:** The coefficient of variation $\dfrac{\sigma}{\bar{x}}\times100\%$ adjusts spread for the size of the mean and permits fair comparison.

<details><summary>Answer</summary>

**D.** The assertion is false: with unequal means, a larger $\sigma$ can still mean a smaller relative spread. The reason is true and gives the correct method — compare CV instead. For example, $(\bar{x},\sigma)=(40,7.07)$ gives CV $\approx17.7\%$, while $(80,12.73)$ gives CV $\approx15.9\%$.

</details>

## Section D — 2 matching / multi-statement questions

### 19. Match the statistics

For the observations $2,\ 4,\ 6,\ 8,\ 10,\ 24$, match each quantity in Column I with its value in Column II.

| Column I | Column II |
| --- | --- |
| (i) Mean | (p) $7$ |
| (ii) Median | (q) $9$ |
| (iii) Variance | (r) $\dfrac{155}{3}$ |
| (iv) Standard deviation | (s) $\sqrt{\dfrac{155}{3}}$ |

<details><summary>Answer</summary>

(i) $\to$ (q), (ii) $\to$ (p), (iii) $\to$ (r), (iv) $\to$ (s).

The sum is $54$, so the mean is $54/6=9$. The ordered middle pair is $6,8$, giving median $7$. The deviations from $9$ are $-7,-5,-3,-1,1,15$ with squares $49,25,9,1,1,225$ summing to $310$, so the variance is $310/6=\dfrac{155}{3}\approx51.67$ and the standard deviation is $\sqrt{155/3}\approx7.19$. The mean exceeding the median is the expected effect of the outlier $24$.

</details>

### 20. Adding a constant to every observation

A positive constant $k$ is added to every observation of a series whose mean is positive. Which statements are correct?

(i) The mean increases by $k$.
(ii) The standard deviation increases by $k$.
(iii) The variance is unchanged.
(iv) The coefficient of variation decreases.

<details><summary>Answer</summary>

Statements (i), (iii) and (iv) are correct; (ii) is false.

With $y_i=x_i+k$, the mean becomes $\bar{x}+k$, while every deviation $y_i-\bar y=x_i-\bar{x}$ is unchanged. Hence the variance and standard deviation both stay the same, disproving (ii). Since $\bar x>0$ and $k>0$, $\text{CV}=\dfrac{\sigma}{\bar{x}+k}\times100\%<\dfrac{\sigma}{\bar{x}}\times100\%$, so (iv) holds.

</details>

## Review by error, not by score

| If you missed… | Revisit | Then retry |
| --- | --- | --- |
| 1, 2, 4, 5, 11 | Central tendency | Sort before a median; count for a mode; share a change over $n$ for a mean. |
| 3, 13, 16, 17 | Mean deviation and the balancing property | Keep absolute values and use the median-minimises property. |
| 6, 7, 12, 19 | Variance and standard deviation | Square-root at the end; use divisor $n$; scale $\sigma$ by $k$, variance by $k^2$. |
| 10, 14, 15, 19 | Frequency distributions | Build class marks and cumulative frequencies; watch the $C$ in the median formula. |
| 8, 9, 18, 20 | Comparing distributions | Compare CV when means differ; remember adding a constant changes CV but not $\sigma$. |

<learning-block type="recap" title="Ready to move on?">

Aim for at least 16 correct out of 20 with a named method for every question. Any question you answer correctly but cannot justify is a revision target, not a mastered topic.

</learning-block>
