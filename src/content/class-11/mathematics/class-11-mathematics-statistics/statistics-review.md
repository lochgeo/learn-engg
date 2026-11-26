## Your study plan for today

Statistics is a chain of tools: each lesson supplies an idea the next one refines. A focused first pass, including this check, takes about **2¼ hours**:

1. **Data and measures of central tendency** — 22 min
2. **Mean deviation** — 22 min
3. **Variance and standard deviation** — 22 min
4. **Frequency distributions** — 22 min
5. **Comparing distributions** — 22 min
6. **This mastery check** — 25 min

Work every question on paper before opening its answer. Mark a topic complete only when you can explain *why* the chosen method applies, not merely when the number matches. Take a short break before the mastery check.

The **JEE Main timed practice** module follows this one. Save it for when the ten questions below feel routine; its value lies in choosing the right tool quickly under pressure.

## First choose the tool

| Clue in the question | Start with |
| --- | --- |
| "average", or a total shared among observations | $\bar{x}=\dfrac{\sum x_i}{n}$, or $\dfrac{\sum f_i x_i}{N}$ for a frequency table |
| "middle value", list not in order | Sort first; odd $n$ gives the $\frac{n+1}{2}$-th, even $n$ averages two entries |
| "occurs most often" | Count frequencies for the mode |
| Data grouped into class intervals | Use class marks $x_i$ as representatives of each class |
| Grouped mean, awkward numbers | Assumed mean $a+\dfrac{\sum f_id_i}{N}$; equal widths give $a+h\dfrac{\sum f_iu_i}{N}$ |
| Grouped median | Locate the class where cumulative frequency reaches $N/2$, then $l+\dfrac{N/2-C}{f}h$ |
| Grouped mode | $l+\dfrac{f_1-f_0}{2f_1-f_0-f_2}h$, using the modal class and its neighbours |
| "average distance from the centre" | Mean deviation, with absolute values: $\dfrac{\sum f_i|x_i-a|}{N}$ |
| "variance" or "standard deviation" | $\overline{x^2}-\bar{x}^2$, then take the square root for $\sigma$ |
| "consistent", "variable", or unequal means | Coefficient of variation $\dfrac{\sigma}{\bar{x}}\times100\%$ |
| Every value multiplied or shifted | $\bar y=k\bar x+c$, $\sigma_y=k\sigma_x$; CV survives scaling only |

## Mastery check

Try all ten without looking at the answers.

### 1. A clean mean and a check

Find the mean of $12,\ 15,\ 18,\ 21,\ 24$ and verify the deviations from it sum to zero.

<details><summary>Answer and reasoning</summary>

The sum is $90$ and $n=5$, so $\bar{x}=18$. The deviations are $-6,-3,0,3,6$, whose sum is $0$. The check passes because the mean is the balance point of the data.

</details>

### 2. Median of an unsorted list

Find the median of $9,\ 3,\ 7,\ 5,\ 1,\ 11$.

<details><summary>Answer and reasoning</summary>

Order the data first: $1,3,5,7,9,11$. With even $n=6$, average the $3$rd and $4$th entries: $\dfrac{5+7}{2}=6$.

</details>

### 3. Mode by counting

Find the mode of $2,\ 3,\ 3,\ 5,\ 5,\ 5,\ 7,\ 9$.

<details><summary>Answer and reasoning</summary>

The value $5$ occurs three times, more than any other value, so the mode is $5$. No addition or ordering is needed.

</details>

### 4. A missing frequency

Values $1,2,3,4,5$ occur with frequencies $2,3,k,2,1$. If the mean is $2.8$, find $k$.

<details><summary>Answer and reasoning</summary>

$\sum f=8+k$ and $\sum fx=2+6+3k+8+5=21+3k$. Setting $\dfrac{21+3k}{8+k}=2.8$ gives $21+3k=22.4+2.8k$, so $k=7$. Check: $\sum f=15$, $\sum fx=42$, and $42/15=2.8$.

</details>

### 5. Mean deviation from two centres

For $2,\ 4,\ 6,\ 8,\ 10,\ 24$, find the mean deviation about the mean and about the median.

<details><summary>Answer and reasoning</summary>

The mean is $54/6=9$ and the median is $\dfrac{6+8}{2}=7$. Distances from $9$ are $7,5,3,1,1,15$, summing to $32$, so the mean deviation about the mean is $32/6=\dfrac{16}{3}\approx5.33$. Distances from $7$ are $5,3,1,1,3,17$, summing to $30$, so the mean deviation about the median is $30/6=5$. The median value is smaller, as the minimisation property requires.

</details>

### 6. Variance by the shortcut

Find the variance and standard deviation of $3,\ 5,\ 7,\ 9,\ 11$.

<details><summary>Answer and reasoning</summary>

$\bar{x}=7$ and $\sum x_i^{2}=9+25+49+81+121=285$, so $\overline{x^{2}}=57$. Hence $\sigma^{2}=57-49=8$ and $\sigma=\sqrt8=2\sqrt2\approx2.83$. Direct squared deviations $16,4,0,4,16$ give the same total of $40$, and $40/5=8$.

</details>

### 7. Grouped mean by step deviation

| Class | $0\text{–}10$ | $10\text{–}20$ | $20\text{–}30$ | $30\text{–}40$ | $40\text{–}50$ |
| --- | --- | --- | --- | --- | --- |
| Frequency | $5$ | $8$ | $12$ | $9$ | $6$ |

Find the mean using $a=25$ and step deviation.

<details><summary>Answer and reasoning</summary>

Class marks are $5,15,25,35,45$, so with $h=10$ the values of $u_i=\dfrac{x_i-25}{10}$ are $-2,-1,0,1,2$. Then $\sum f_iu_i=-10-8+0+9+12=3$ and $N=40$. Hence $\bar{x}=25+10\left(\dfrac{3}{40}\right)=25.75$. The direct method gives $\sum f_ix_i=1030$ and $1030/40=25.75$, confirming it.

</details>

### 8. Grouped median and mode

Using the table in question 7, find the median and the mode.

<details><summary>Answer and reasoning</summary>

$N/2=20$ and cumulative frequencies are $5,13,25,34,40$, so the median class is $20\text{–}30$. With $l=20$, $C=13$, $f=12$, $h=10$, $M=20+\dfrac{20-13}{12}\times10\approx25.83$. The modal class is also $20\text{–}30$, with $f_1=12$, $f_0=8$, $f_2=9$, giving $M_0=20+\dfrac{12-8}{24-8-9}\times10=\dfrac{180}{7}\approx25.71$. Both lie inside the class, and the empirical check $3(25.83)-2(25.75)\approx26$ is close to the mode.

</details>

### 9. Comparing consistency

Series A has mean $40$ and variance $50$; series B has mean $80$ and variance $162$. Which series is more consistent?

<details><summary>Answer and reasoning</summary>

Take square roots: $\sigma_A=\sqrt{50}\approx7.07$ and $\sigma_B=\sqrt{162}\approx12.73$. Then $\text{CV}_A=\dfrac{7.07}{40}\times100\%\approx17.68\%$ and $\text{CV}_B=\dfrac{12.73}{80}\times100\%\approx15.91\%$. B has a larger standard deviation but a smaller coefficient of variation, so B is more consistent relative to its own mean.

</details>

### 10. A transformation trap

A set has mean $20$ and standard deviation $4$. Each observation is multiplied by $3$ and then increased by $5$. Find the new mean, standard deviation and coefficient of variation.

<details><summary>Answer and reasoning</summary>

For $y_i=3x_i+5$, $\bar y=3(20)+5=65$ and $\sigma_y=3(4)=12$, because adding a constant shifts no deviation. The old CV was $\dfrac{4}{20}\times100\%=20\%$; the new CV is $\dfrac{12}{65}\times100\%\approx18.46\%$. It does not stay the same, because the added $5$ breaks the pure-scaling invariance.

</details>

## Self-check

You are ready for the timed set when you can:

- compute mean, median and mode from raw data, sorting before finding a median;
- derive and use the balancing property $\sum(x_i-\bar{x})=0$ as a check;
- explain why absolute deviations are needed for mean deviation, and why the median minimises them;
- derive $\sigma^{2}=\overline{x^{2}}-\bar{x}^{2}$ and use it without losing the square root;
- state which unit belongs to variance and which to standard deviation;
- build a grouped table's class marks, cumulative frequencies and step deviations;
- locate a median class and apply $l+\dfrac{N/2-C}{f}h$ with the *preceding* cumulative frequency;
- compute a grouped mode from the modal class and its two neighbours;
- decide when to compare $\sigma$ directly and when to compare CV;
- predict the effect of $y_i=kx_i+c$ on mean, standard deviation and CV.

If one item still feels shaky, revisit that module and redo its questions without the reveal before starting the JEE Main set.
