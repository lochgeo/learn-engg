## JEE Main sprint: how to use this set

This is a **50-minute, no-notes** paper to attempt after you finish the chapter lessons. Spend roughly 15 minutes on Section A, 15 on Section B, 10 on Section C and 10 on Section D. Mark any question that passes 90 seconds and come back to it; one stubborn sum should not consume the paper.

Before writing, name the tool: AP, GP, standard power sums, $a_n=S_n-S_{n-1}$, AM–GM, telescoping or multiply-and-subtract. Most wrong answers here come from choosing the wrong tool, not from arithmetic. This is a pure mathematics paper, so no physical constant is needed.

## Conditions and formula sheet

| Clue | Start with | Check before trusting it |
| --- | --- | --- |
| Constant difference | $a_n=a+(n-1)d$, $\;S_n=\frac n2(a+l)$ | $n-1$ steps; test at $n=1$. |
| Constant ratio | $a_n=ar^{n-1}$, $\;S_n=\frac{a(1-r^n)}{1-r}$ | $r=a_2/a_1$; use $na$ when $r=1$. |
| Infinite total | $S_\infty=\frac{a}{1-r}$ | Use **only** if $|r|<1$. |
| Sum of powers | $\sum k=\frac{n(n+1)}2$, $\sum k^2=\frac{n(n+1)(2n+1)}6$, $\sum k^3=\big[\frac{n(n+1)}2\big]^2$ | Only cubes equal the square of $\sum k$. |
| Given $S_n$, find $a_n$ | $a_n=S_n-S_{n-1}$ | $a_1=S_1$; set $S_0=0$ if needed. |
| Least value of $x+k/x$ | AM–GM, minimum $2\sqrt k$ at $x=\sqrt k$ | Terms positive; equality attainable. |
| Consecutive factors in denominator | Partial fractions, then telescope | Middle terms cancel; check $n=1$. |
| AP coefficients times GP powers | $S=\frac{a}{1-r}+\frac{dr}{(1-r)^2}$ | Valid only for $|r|<1$. |

<learning-block type="mistake" title="Three instant sanity checks">

If an infinite-sum answer comes from a GP with $|r|\ge1$, discard it. If a derived $a_n$ does not give $S_1$ at $n=1$, recheck the subtraction. If a minimum from AM–GM is not attained by a positive value of $x$, recheck the equality condition.

</learning-block>

## Section A — 10 rapid MCQs

### 1. Recovering the first term

The second term of an AP is $5$ and the fourth term is $11$. The first term is:

- A. $1$
- B. $2$
- C. $3$
- D. $4$

<details><summary>Answer</summary>

**B.** $a+d=5$ and $a+3d=11$, so $2d=6$, $d=3$ and $a=2$. Check: the terms are $2,5,8,11$.

</details>

### 2. Locating a GP term

Which term of the GP $1,3,9,27,\ldots$ equals $729$?

- A. 6th
- B. 7th
- C. 8th
- D. 9th

<details><summary>Answer</summary>

**B.** $a_n=1\cdot3^{\,n-1}=729=3^6$, so $n-1=6$ and $n=7$. Check: $a_6=243$, $a_7=729$.

</details>

### 3. A familiar total

The sum of the first ten natural numbers is:

- A. $45$
- B. $50$
- C. $55$
- D. $65$

<details><summary>Answer</summary>

**C.** $\frac{10\cdot11}{2}=55$. Pairing $1+10,2+9,\ldots$ gives five pairs of $11$.

</details>

### 4. Two means

Two positive numbers have arithmetic mean $5$ and geometric mean $4$. The numbers are:

- A. $2$ and $8$
- B. $4$ and $4$
- C. $3$ and $7$
- D. $1$ and $9$

<details><summary>Answer</summary>

**A.** $a+b=10$ and $\sqrt{ab}=4$, so $ab=16$. The numbers are the roots of $t^2-10t+16=0$, namely $2$ and $8$. Their means are $5$ and $4$.

</details>

### 5. An infinite GP

The sum to infinity of $1+\dfrac13+\dfrac19+\cdots$ is:

- A. $\dfrac32$
- B. $2$
- C. $3$
- D. $\dfrac43$

<details><summary>Answer</summary>

**A.** $a=1$, $r=\tfrac13$, and $|r|<1$, so $S_\infty=\dfrac{1}{1-1/3}=\dfrac{3}{2}$. The partial sums $1,\tfrac43,\tfrac{13}{9}$ approach $1.5$.

</details>

### 6. Difference from a sum formula

An AP has $S_n=3n^2+n$. Its common difference is:

- A. $3$
- B. $6$
- C. $4$
- D. $2$

<details><summary>Answer</summary>

**B.** $a_n=S_n-S_{n-1}=(3n^2+n)-[3(n-1)^2+(n-1)]=6n-2$, so $d=6$. Check: $a_1=4$, $a_2=10$, $S_2=14=3(4)+2$.

</details>

### 7. Odd numbers

The sum of the first fifteen odd natural numbers is:

- A. $196$
- B. $225$
- C. $240$
- D. $256$

<details><summary>Answer</summary>

**B.** $\sum_{k=1}^{n}(2k-1)=n^2$, so the answer is $15^2=225$. The fifteenth odd number is $29$, and the average of first and last is $15$.

</details>

### 8. Spotting the progression

Which sequence is an arithmetic progression?

- A. $1,1,2,3,5,\ldots$
- B. $2,4,8,16,\ldots$
- C. $5,8,11,14,\ldots$
- D. $1,\dfrac12,\dfrac13,\dfrac14,\ldots$

<details><summary>Answer</summary>

**C.** The differences are $3,3,3$. A has varying differences (it is Fibonacci), B has constant ratio $2$ and D has varying differences (it is harmonic).

</details>

### 9. A term from a partial sum

If $S_n=\dfrac{n(n+1)}{2}$, then $a_5$ equals:

- A. $4$
- B. $5$
- C. $6$
- D. $10$

<details><summary>Answer</summary>

**B.** $a_n=S_n-S_{n-1}=n$, so $a_5=5$. This is the familiar sum $1+2+\cdots+n$.

</details>

### 10. Sum of cubes

The value of $\displaystyle\sum_{k=1}^{4}k^3$ is:

- A. $64$
- B. $96$
- C. $100$
- D. $121$

<details><summary>Answer</summary>

**C.** $\left[\frac{4\cdot5}{2}\right]^2=10^2=100$. Directly, $1+8+27+64=100$.

</details>

## Section B — 5 numerical-value questions

### 11. A later AP term

Find the tenth term of $4,9,14,\ldots$

<details><summary>Answer</summary>

$a=4$, $d=5$, so $a_{10}=4+9(5)=49$.

</details>

### 12. A finite GP sum

Find the sum of the first eight terms of $1,2,4,8,\ldots$

<details><summary>Answer</summary>

$a=1$, $r=2$, so $S_8=\dfrac{2^8-1}{2-1}=256-1=255$. Adding the eight terms directly confirms this.

</details>

### 13. Squares

Evaluate $1^2+2^2+\cdots+12^2$.

<details><summary>Answer</summary>

$\dfrac{12\cdot13\cdot25}{6}=\dfrac{3900}{6}=650$. The largest term is $144$, so a total near $650$ for twelve growing terms is reasonable.

</details>

### 14. Infinite sum with a fractional ratio

Find the sum to infinity of $3+1+\dfrac13+\dfrac19+\cdots$.

<details><summary>Answer</summary>

$a=3$, $r=\tfrac13$ with $|r|<1$, so $S_\infty=\dfrac{3}{1-1/3}=\dfrac{3}{2/3}=\dfrac92$.

</details>

### 15. From a sum formula to a term

A sequence satisfies $S_n=n^2+3n$. Find $a_{10}$.

<details><summary>Answer</summary>

$a_n=(n^2+3n)-[(n-1)^2+3(n-1)]=2n+2$, so $a_{10}=22$. Check: $S_{10}=130$, $S_9=108$, and $130-108=22$.

</details>

## Section C — 3 assertion–reason questions

For each, choose: **A** = both true and the reason correctly explains the assertion; **B** = both true but the reason is not the correct explanation; **C** = assertion true, reason false; **D** = assertion false, reason true.

### 16. The arithmetic mean

**Assertion:** If $a,b,c$ are in AP, then $2b=a+c$.

**Reason:** The common difference of an AP is the same between consecutive terms.

<details><summary>Answer</summary>

**A.** $b-a=c-b$ rearranges to $2b=a+c$. The equality of consecutive differences is exactly the reason.

</details>

### 17. A divergent GP

**Assertion:** The GP $1,2,4,8,\ldots$ has a finite sum to infinity.

**Reason:** For a GP with first term $a$ and ratio $r$, the sum to infinity is $\dfrac{a}{1-r}$ when $|r|<1$.

<details><summary>Answer</summary>

**D.** The reason is a true statement, but the assertion is false: here $r=2$, so the terms grow and the infinite sum does not converge.

</details>

### 18. Comparing the means

**Assertion:** For positive numbers, the arithmetic mean is at least the geometric mean, with equality only when all the numbers are equal.

**Reason:** The arithmetic mean equals the geometric mean for any two positive numbers.

<details><summary>Answer</summary>

**C.** The assertion is true, including the equality condition. The reason is false: $\tfrac12(a+b)=\sqrt{ab}$ only when $a=b$; for $a=2,b=8$ the means are $5$ and $4$.

</details>

## Section D — 2 matching / multi-statement questions

### 19. Match the formulas

Match each entry in Column I with one in Column II.

| Column I | Column II |
| --- | --- |
| (i) $S_n$ of an AP with first term $a$, last term $l$ | (p) $\dfrac{n}{2}(a+l)$ |
| (ii) Sum of the first $n$ odd natural numbers | (q) $n^2$ |
| (iii) $\sum_{k=1}^{n}k^3$ | (r) $\left[\dfrac{n(n+1)}{2}\right]^2$ |
| (iv) Sum to infinity of a GP with $|r|<1$ | (s) $\dfrac{a}{1-r}$ |

<details><summary>Answer</summary>

(i) $\to$ (p), (ii) $\to$ (q), (iii) $\to$ (r), (iv) $\to$ (s). Each is the standard result from its lesson; in particular the cube sum, not the square sum, equals the square of $\sum k$.

</details>

### 20. Which statements are correct?

Let $a_n=3n-2$. Decide which statements are true:

- (a) $a_1=1$.
- (b) The common difference is $4$.
- (c) $S_n=\dfrac{n(3n-1)}{2}$.
- (d) $a_{10}=28$.

<details><summary>Answer</summary>

**(a), (c) and (d) are true; (b) is false.**

The formula is linear in $n$, so the sequence is an AP with first term $3(1)-2=1$ and common difference $3$, not $4$. Then $a_{10}=30-2=28$ and

$$S_n=\frac n2(a_1+a_n)=\frac n2\big[1+(3n-2)\big]=\frac{n(3n-1)}2.$$

</details>

## Review by error, not by score

| If you missed… | Revisit | Then retry |
| --- | --- | --- |
| 1, 6, 8, 15 | Arithmetic progressions | Write $a_n$ first and test it at $n=1$. |
| 2, 5, 12, 14, 17 | Geometric progressions | Check the ratio and $|r|<1$ before any infinite sum. |
| 3, 7, 10, 13, 19 | Special series and sums | Write the general term, then use the power sums. |
| 4, 18 | AM–GM | State positivity and the equality condition. |
| 9 | Sequences and series | Apply $a_n=S_n-S_{n-1}$ carefully. |
| 11, 16, 20 | Mixed review | Name the tool before calculating. |

<learning-block type="recap" title="Ready to move on?">

Aim for at least $16$ correct out of $20$, with a written method choice for every question. A question you answer correctly but cannot justify is a revision target, not a mastered topic.

</learning-block>
