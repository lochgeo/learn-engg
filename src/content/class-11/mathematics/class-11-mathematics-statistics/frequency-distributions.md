## From a long list to a table

A survey of 500 households produces 500 numbers. Writing them all down helps nobody; we group them into **class intervals** and count how many fall in each. The resulting frequency table hides the exact observations, so every formula in this lesson works with a representative value — the **class mark** — and relies on the assumption that observations are spread roughly evenly inside each class. Grouping makes large data sets manageable, and it introduces a few new formulae for the same three ideas: mean, median and mode.

## 1. The vocabulary of a grouped table

For classes such as $0\text{–}10,\ 10\text{–}20,\ 20\text{–}30,\ldots$:

- the **lower** and **upper class limits** are the ends of a class, for example $20$ and $30$;
- the **class width** $h$ is their difference, here $10$;
- the **class mark** is the midpoint, $x_i=\dfrac{\text{lower limit}+\text{upper limit}}{2}$, here $25$;
- the **frequency** $f_i$ counts observations in the class and $N=\sum f_i$ is the total;
- the **cumulative frequency** is the running total of frequencies up to and including a class.

With the convention $20\text{–}30$ meaning $20\le x<30$, an observation exactly equal to $30$ belongs to the next class. Whatever convention is chosen, use it consistently.

## 2. Mean of grouped data

Replace each class by its class mark $x_i$ and treat the table as a frequency distribution:

**Direct method**

$$
\bar{x}=\frac{\sum f_i x_i}{N}.
$$

**Assumed-mean method.** Choose a convenient class mark $a$ near the middle and set $d_i=x_i-a$:

$$
\bar{x}=a+\frac{\sum f_i d_i}{N}.
$$

**Step-deviation method.** If the class widths are equal to $h$, write $u_i=\dfrac{x_i-a}{h}$, so $d_i=h\,u_i$:

$$
\bar{x}=a+h\,\frac{\sum f_i u_i}{N}.
$$

The three methods always agree; they differ only in how much arithmetic they demand. Step deviation is usually quickest because the $u_i$ are small integers.

## 3. Median of grouped data

First locate the **median class**: the class whose cumulative frequency first reaches or exceeds $N/2$. Then

$$
M=l+\frac{\frac{N}{2}-C}{f}\times h,
$$

where $l$ is the lower limit of the median class, $C$ is the cumulative frequency of the class **preceding** it, $f$ is the frequency of the median class, and $h$ is its width. The formula interpolates inside the median class and assumes observations are uniformly distributed there.

## 4. Mode of grouped data

The **modal class** has the largest frequency. Its mode is estimated by

$$
M_0=l+\frac{f_1-f_0}{2f_1-f_0-f_2}\times h,
$$

where $f_1$ is the modal-class frequency, $f_0$ that of the preceding class and $f_2$ that of the following class. The empirical relation $\text{Mode}\approx3\,\text{Median}-2\,\text{Mean}$ provides a rough cross-check.

## 5. A worked example

The marks scored by $40$ students are grouped as follows. All measures below are therefore in **marks**.

| Class | $f_i$ | Cumulative | $x_i$ | $d_i=x_i-25$ | $u_i=d_i/10$ | $f_i x_i$ | $f_i u_i$ |
| --- | --- | --- | --- | --- | --- | --- | --- |
| $0\text{–}10$ | $5$ | $5$ | $5$ | $-20$ | $-2$ | $25$ | $-10$ |
| $10\text{–}20$ | $8$ | $13$ | $15$ | $-10$ | $-1$ | $120$ | $-8$ |
| $20\text{–}30$ | $12$ | $25$ | $25$ | $0$ | $0$ | $300$ | $0$ |
| $30\text{–}40$ | $9$ | $34$ | $35$ | $10$ | $1$ | $315$ | $9$ |
| $40\text{–}50$ | $6$ | $40$ | $45$ | $20$ | $2$ | $270$ | $12$ |
| **Total** | $N=40$ | | | | | $1030$ | $3$ |

**Mean.** Direct: $\bar{x}=\dfrac{1030}{40}=25.75$. Assumed mean $a=25$: $\sum f_i d_i=30$, so $\bar{x}=25+\dfrac{30}{40}=25.75$. Step deviation: $\bar{x}=25+10\left(\dfrac{3}{40}\right)=25.75$. All three agree.

**Median.** $N/2=20$; cumulative frequencies are $5,13,25,\ldots$, so the median class is $20\text{–}30$. With $l=20$, $C=13$, $f=12$, $h=10$,

$$
M=20+\frac{20-13}{12}\times10=20+\frac{70}{12}\approx25.83.
$$

**Mode.** The modal class is also $20\text{–}30$, with $f_1=12$, $f_0=8$, $f_2=9$:

$$
M_0=20+\frac{12-8}{2(12)-8-9}\times10=20+\frac{40}{7}\approx25.71.
$$

**Sanity check.** The empirical estimate $3(25.83)-2(25.75)\approx26.0$ is close to the computed mode $25.71$, and all three measures lie in the modal class $20\text{–}30$ — as they should for a roughly symmetric grouped distribution.

<learning-block type="mistake" title="Using the wrong cumulative frequency">

For the median, $C$ is the cumulative frequency of the class **before** the median class, not of the median class itself. Using $25$ instead of $13$ in the example gives $20+\frac{20-25}{12}\times10$, a value *below* the lower limit of the median class — impossible. As a habit, check that the answer lies inside the median class. Also remember to use class marks, not upper limits, when computing $\sum f_i x_i$.

</learning-block>

## Try it yourself

**A.** Classes $0\text{–}10,\ 10\text{–}20,\ 20\text{–}30$ have frequencies $4,6,5$. Find the mean by the assumed-mean method with $a=15$.

<details><summary>Show the reasoning</summary>

Class marks are $5,15,25$, so $d_i=-10,0,10$ and $\sum f_i d_i=4(-10)+6(0)+5(10)=10$. With $N=15$, $\bar{x}=15+\dfrac{10}{15}=\dfrac{47}{3}\approx15.67$. Direct calculation gives $\sum f_i x_i=20+90+125=235$ and $235/15\approx15.67$, confirming it.

</details>

**B.** Find the median of classes $0\text{–}10,\ 10\text{–}20,\ 20\text{–}30,\ 30\text{–}40$ with frequencies $8,10,14,6$.

<details><summary>Show the reasoning</summary>

$N=38$, so $N/2=19$. Cumulative frequencies are $8,18,32,38$; the median class is $20\text{–}30$ with $l=20$, $C=18$, $f=14$, $h=10$. Hence $M=20+\dfrac{19-18}{14}\times10=20+\dfrac{10}{14}\approx20.71$, which lies inside the class.

</details>

**C.** Classes $0\text{–}10,\ 10\text{–}20,\ 20\text{–}30,\ 30\text{–}40$ have frequencies $5,12,8,3$. Estimate the mode.

<details><summary>Show the reasoning</summary>

The modal class is $10\text{–}20$, with $f_1=12$, $f_0=5$, $f_2=8$, $l=10$, $h=10$. Therefore $M_0=10+\dfrac{12-5}{2(12)-5-8}\times10=10+\dfrac{70}{11}\approx16.36$, inside the modal class.

</details>

## Remember

- Always represent a class by its class mark and state the width $h$ before using step deviation.
- The three mean methods are algebraically identical; choose the one with the smallest numbers.
- For the median, $C$ is the cumulative frequency *before* the median class, and the answer must lie inside that class.
- For the mode, compare the modal frequency with its two neighbours, not with the total.
- Grouped measures are estimates because exact observations are no longer available; the next lesson asks how to compare two such distributions fairly.
