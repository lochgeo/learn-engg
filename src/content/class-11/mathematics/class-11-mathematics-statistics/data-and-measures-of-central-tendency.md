## One number to speak for a whole set

Two sections of a class write the same test. In one section the marks cluster near 70; in the other they run from 20 to 95. Comparing mark by mark tells you very little — you need one value that stands for each set, and then a way to say how tightly the marks gather around it. The first job belongs to a **measure of central tendency**; the second, taken up in later lessons, belongs to a measure of dispersion.

Statistics works with a collection of observations $x_1,x_2,\ldots,x_n$, where $n$ is the number of observations. A raw list is awkward to reason about, so we summarise it. Three summaries answer three different questions: "what is the average?" (mean), "what is the middle value?" (median), and "what value occurs most often?" (mode).

## 1. The arithmetic mean

For $n$ observations the **mean** is

$$
\bar{x}=\frac{x_1+x_2+\cdots+x_n}{n}=\frac{1}{n}\sum_{i=1}^{n}x_i.
$$

When a value $x_i$ occurs $f_i$ times, we do not write it out $f_i$ times; we weight it:

$$
\bar{x}=\frac{\sum f_i x_i}{\sum f_i}=\frac{\sum f_i x_i}{N},\qquad N=\sum f_i.
$$

Here $f_i$ is a **frequency** and $N$ is the total number of observations. On its own, the word "mean" in this chapter always means the arithmetic mean.

### The balancing property

The quantity $x_i-\bar{x}$ is the **deviation** of $x_i$ from the mean. Adding every deviation always gives zero:

$$
\sum_{i=1}^{n}(x_i-\bar{x})=\sum_{i=1}^{n}x_i-\sum_{i=1}^{n}\bar{x}=n\bar{x}-n\bar{x}=0.
$$

That is why the mean behaves like a balance point: the positive and negative deviations cancel exactly. It is also a checking tool — if your calculated mean does not make the deviations sum to zero, the calculation is wrong.

## 2. The median

Arrange the observations in order. The **median** splits the ordered list into two equal halves:

- if $n$ is odd, the median is the $\left(\dfrac{n+1}{2}\right)$-th observation;
- if $n$ is even, the median is the mean of the $\dfrac{n}{2}$-th and $\left(\dfrac{n}{2}+1\right)$-th observations.

The median does not care how far the extreme values lie. Change the largest mark in a list from $95$ to $100$ and the mean moves, but the median does not. This resistance to extreme values is why the median is preferred for data with an outlier.

## 3. The mode

The **mode** is the observation that occurs most often. A set may have one mode, several modes, or no mode at all when every value occurs equally often. The mode is found by counting, not by ordering or adding.

For moderately skewed data there is the **empirical relation**

$$
\text{Mode}\approx 3\,\text{Median}-2\,\text{Mean}.
$$

It is an approximation, not an identity. It helps estimate one measure when the other two are known, but compute the mode from the data whenever the data are available.

## 4. A worked example

Eight students recorded their revision times, in hours, over a weekend:

$$
2,\ 4,\ 4,\ 5,\ 7,\ 7,\ 7,\ 10.
$$

**Mean.** The total is $2+4+4+5+7+7+7+10=46$, so

$$
\bar{x}=\frac{46}{8}=5.75\ \text{h}.
$$

**Median.** The list is already in order. With $n=8$, average the $4$th and $5$th values: $\dfrac{5+7}{2}=6\ \text{h}$.

**Mode.** The value $7$ occurs three times, more than any other, so the mode is $7\ \text{h}$.

**Sanity check.** The deviations from $5.75$ are $-3.75,\ -1.75,\ -1.75,\ -0.75,\ 1.25,\ 1.25,\ 1.25,\ 4.25$. The negatives total $-8$ and the positives total $+8$, so they sum to $0\ \text{h}$, exactly as the balancing property requires. The mean lies below the median because the single short $2\ \text{h}$ entry pulls it down.

<learning-block type="mistake" title="Finding the median without ordering">

The most common error is taking the middle entry of the list *as written*. With $n$ even, the median is the **average of the two middle entries of the ordered list** — and the list must be sorted first. For $9,1,20,3,5,7$ the raw middle entries are $20$ and $3$, suggesting $11.5$; sorting to $1,3,5,7,9,20$ gives the correct median $\dfrac{5+7}{2}=6$. A second frequent slip is averaging the wrong pair, such as the $4$th and $6$th entries when $n=8$.

</learning-block>

## Try it yourself

**A.** Find the mean, median and mode of $12,\ 15,\ 18,\ 21,\ 24$ and verify the deviations from the mean sum to zero.

<details><summary>Show the reasoning</summary>

The sum is $12+15+18+21+24=90$, so the mean is $90/5=18$. The ordered list has a middle entry of $18$, so the median is $18$. Every value occurs once, so there is no mode. The deviations are $-6,-3,0,3,6$, which sum to $0$ — the check passes.

</details>

**B.** Six observations are $9,\ 3,\ 7,\ 5,\ 1,\ 11$. Find the median.

<details><summary>Show the reasoning</summary>

First order the data: $1,3,5,7,9,11$. With $n=6$, average the $3$rd and $4$th entries: $\dfrac{5+7}{2}=6$. The median is $6$.

</details>

**C.** A frequency table lists values $1,2,3,4,5$ with frequencies $2,3,k,2,1$. If the mean is $2.8$, find $k$.

<details><summary>Show the reasoning</summary>

Here $\sum f=8+k$ and $\sum fx=2(1)+3(2)+k(3)+2(4)+1(5)=21+3k$. The mean condition gives $\dfrac{21+3k}{8+k}=2.8$, so $21+3k=22.4+2.8k$, hence $0.2k=1.4$ and $k=7$. Check: total frequency $15$, $\sum fx=42$, and $42/15=2.8$.

</details>

## Remember

- The mean uses every observation and balances positive against negative deviations; their sum is always zero.
- The median needs the data ordered, and for even $n$ it is the average of the two middle entries.
- The mode is found by counting frequencies and may not exist or may not be unique.
- The mean follows extreme values; the median does not. Choose the summary that fits the question.
- Central tendency locates the centre. The next lesson measures how far observations sit from it, using absolute deviations.
