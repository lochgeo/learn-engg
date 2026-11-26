## JEE Main sprint: how to use this set

This is a **50-minute, no-notes** paper for after you finish the chapter lessons. This is a mathematics paper, so no physical constants are needed. Spend roughly 15 minutes on Section A, 20 on Section B, 10 on Section C, and 5 on Section D. Mark a question for review after 90 seconds; do not let one coefficient drag the whole paper down.

The goal is not only an answer. Before writing anything, choose the tool: full expansion, general term, coefficient substitution, or a coefficient identity.

## Conditions and formula sheet

| Situation | Start with | Check before using it |
| --- | --- | --- |
| Small power, full expansion | $\sum_{r=0}^{n}\binom{n}{r}a^{n-r}b^r$ | $n+1$ terms; sign $(-1)^r$ when the second term is negative |
| A particular term or position | $T_{r+1}=\binom{n}{r}a^{n-r}b^r$ | The $(r+1)$th term uses $\binom{n}{r}$, not $\binom{n}{r+1}$ |
| Middle term | $r=\frac n2$ (even $n$); $r=\frac{n-1}{2},\frac{n+1}{2}$ (odd $n$) | One middle term for even $n$, two for odd $n$ |
| Sum of coefficients | $P(1)$ | Substitute into the entire expression, including inner numeric factors |
| Alternating / even-odd sums | $P(-1)$; even sum = odd sum = $2^{n-1}$ | Requires $n\ge1$ |
| A weighted sum of coefficients | Differentiate $(1+x)^n$ then set $x=1$ | $\sum r\binom{n}{r}=n2^{n-1}$ |
| Power close to 1 | $1+nx+\binom{n}{2}x^2+\cdots$ | Only when $|x|$ is small; estimate the first dropped term |
| Divisibility by $k^2$ | $(1+k)^n-nk-1$ | The remaining terms all contain $k^2$ |

<learning-block type="mistake" title="Fast sanity checks">

If your answer has the wrong number of terms, all-positive signs for $(a-b)^n$, or a coefficient with a missing numeric factor, stop. Check $P(1)$ or a tiny case such as $n=2$ before moving on — a neat-looking number is not automatically correct.

</learning-block>

## Section A — 10 rapid MCQs

### 1. How many terms?

The number of terms in the expansion of $(1+x)^{20}$ is:

- A. $20$
- B. $21$
- C. $19$
- D. $22$

<details><summary>Answer</summary>

**B.** The index runs from $r=0$ to $r=20$, giving $20+1=21$ terms.

</details>

### 2. A simple coefficient

The coefficient of $x^2$ in $(1+x)^5$ is:

- A. $5$
- B. $10$
- C. $20$
- D. $15$

<details><summary>Answer</summary>

**B.** In $(1+x)^n$ the coefficient of $x^r$ is $\binom{n}{r}$, so $\binom{5}{2}=10$.

</details>

### 3. Summing the coefficients

$\binom{6}{0}+\binom{6}{1}+\cdots+\binom{6}{6}$ equals:

- A. $32$
- B. $12$
- C. $64$
- D. $36$

<details><summary>Answer</summary>

**C.** Put $x=1$ in $(1+x)^6$: the sum is $2^6=64$.

</details>

### 4. The middle of an even power

The middle term of $(1+x)^6$ is:

- A. $15x^3$
- B. $20x^3$
- C. $20x^2$
- D. $15x^2$

<details><summary>Answer</summary>

**B.** For even $n=6$, $r=\frac n2=3$, so the middle term is $\binom{6}{3}x^3=20x^3$.

</details>

### 5. Naming an identity

The relation $\binom{n}{r}=\binom{n}{n-r}$ is known as:

- A. Pascal's rule
- B. Symmetry of binomial coefficients
- C. The alternating-sum identity
- D. The factorial definition

<details><summary>Answer</summary>

**B.** Choosing $r$ objects is the same as choosing the $n-r$ objects to leave out. Pascal's rule is the addition identity $\binom{n}{r}+\binom{n}{r+1}=\binom{n+1}{r+1}$.

</details>

### 6. A first-order estimate

For small $x$, the first-order approximation to $(1+x)^n$ is:

- A. $1+nx$
- B. $1+nx^2$
- C. $nx$
- D. $1+\dfrac{n}{x}$

<details><summary>Answer</summary>

**A.** Keeping only $r=0$ and $r=1$ in the expansion gives $1+nx$; the constant term is $1$, so option C is not a valid approximation.

</details>

### 7. Sum with an inner factor

The sum of the coefficients in $(1+2x)^4$ is:

- A. $16$
- B. $81$
- C. $32$
- D. $24$

<details><summary>Answer</summary>

**B.** Substitute $x=1$ into the whole expression: $(1+2)^4=3^4=81$. The sum is not $2^4$, because the factor $2$ contributes to the coefficients.

</details>

### 8. Finding n from a coefficient

If $\binom{n}{2}=28$, then $n$ is:

- A. $7$
- B. $8$
- C. $9$
- D. $10$

<details><summary>Answer</summary>

**B.** $\frac{n(n-1)}{2}=28$ gives $n(n-1)=56=8\times7$, so $n=8$.

</details>

### 9. The greatest coefficient

The greatest binomial coefficient in $(1+x)^7$ is:

- A. $\binom{7}{3}$ only
- B. $\binom{7}{4}$ only
- C. $\binom{7}{3}$ and $\binom{7}{4}$, equal in value
- D. $\binom{7}{0}$

<details><summary>Answer</summary>

**C.** For odd $n$ there are two equal greatest coefficients, $\binom{7}{3}=\binom{7}{4}=35$.

</details>

### 10. Pascal's rule

$\binom{n}{r}+\binom{n}{r-1}$ equals:

- A. $\binom{n+1}{r}$
- B. $\binom{n-1}{r}$
- C. $\binom{n}{r+1}$
- D. $\binom{n+1}{r-1}$

<details><summary>Answer</summary>

**A.** Pascal's rule gives $\binom{n}{r}+\binom{n}{r-1}=\binom{n+1}{r}$. A quick check with $n=4,r=2$: $6+4=10=\binom{5}{2}$.

</details>

## Section B — 5 numerical-value questions

### 11. Constant term

Find the term independent of $x$ in $\left(2x-\dfrac{1}{x}\right)^6$.

<details><summary>Answer</summary>

$T_{r+1}=\binom{6}{r}(2x)^{6-r}(-x^{-1})^r=\binom{6}{r}2^{6-r}(-1)^r x^{6-2r}$. Independence needs $6-2r=0$, so $r=3$ and

$$T_4=\binom{6}{3}2^3(-1)^3=-160.$$

The constant term is $-160$.

</details>

### 12. A coefficient on demand

Find the coefficient of $x^3$ in $(1+x)^8$.

<details><summary>Answer</summary>

$\binom{8}{3}=\dfrac{8\cdot7\cdot6}{3\cdot2\cdot1}=56$.

</details>

### 13. Even-index sum

Find $\binom{10}{0}+\binom{10}{2}+\binom{10}{4}+\binom{10}{6}+\binom{10}{8}+\binom{10}{10}$.

<details><summary>Answer</summary>

The even-index coefficients sum to $2^{n-1}=2^9=512$. Directly, $1+45+210+210+45+1=512$.

</details>

### 14. Approximation to three decimal places

Using the first three terms of the expansion of $(1.01)^{10}$, estimate its value.

<details><summary>Answer</summary>

$$1+10(0.01)+\binom{10}{2}(0.01)^2=1+0.1+45(0.0001)=1.1045.$$

The next term is $\binom{10}{3}(0.01)^3=0.00012$, so $1.1045$ is reliable to about three decimal places.

</details>

### 15. Consecutive coefficients in a ratio

If $\binom{n}{r}:\binom{n}{r+1}:\binom{n}{r+2}=2:3:4$, find $n$ and $r$.

<details><summary>Answer</summary>

Use $\dfrac{\binom{n}{r+1}}{\binom{n}{r}}=\dfrac{n-r}{r+1}$.

From the first ratio, $\frac{n-r}{r+1}=\frac32$, so $2n=5r+3$.

From the second, $\frac{n-r-1}{r+2}=\frac43$, so $3n=7r+11$.

Substituting $n=\frac{5r+3}{2}$ into the second equation gives $\frac{15r+9}{2}=7r+11$, hence $15r+9=14r+22$ and $r=13$. Then $n=\frac{5(13)+3}{2}=34$.

Check: $\frac{\binom{34}{14}}{\binom{34}{13}}=\frac{21}{14}=\frac32$ and $\frac{\binom{34}{15}}{\binom{34}{14}}=\frac{20}{15}=\frac43$, giving the ratio $2:3:4$. Therefore $n=34$ and $r=13$.

</details>

## Section C — 3 assertion–reason questions

For each question choose: **A** — both true and the reason explains the assertion; **B** — both true but the reason does not explain the assertion; **C** — assertion true, reason false; **D** — assertion false, reason true.

### 16. Counting terms

**Assertion:** The expansion of $(a+b)^n$ contains $n+1$ terms for a positive integer $n$.
**Reason:** The terms are $\binom{n}{r}a^{n-r}b^r$ for $r=0,1,\ldots,n$.

- A
- B
- C
- D

<details><summary>Answer</summary>

**A.** The reason lists exactly the $n+1$ allowed values of $r$, which is precisely why there are $n+1$ terms.

</details>

### 17. Sum of coefficients

**Assertion:** The sum of the coefficients in $(1+x)^n$ is $2^n$.
**Reason:** The greatest binomial coefficient in $(1+x)^n$ is $2^n$.

- A
- B
- C
- D

<details><summary>Answer</summary>

**C.** The assertion is true ($P(1)=2^n$). The reason is false: the greatest coefficient is $\binom{n}{n/2}$ for even $n$, or the equal central pair for odd $n$, not $2^n$.

</details>

### 18. Term versus coefficient

**Assertion:** The coefficient of $x^r$ in $(1+x)^n$ is the $(r+1)$th term of the expansion.
**Reason:** The general term is $T_{r+1}=\binom{n}{r}x^r$, whose numeric multiplier is $\binom{n}{r}$.

- A
- B
- C
- D

<details><summary>Answer</summary>

**D.** The assertion is false: the $(r+1)$th *term* is $\binom{n}{r}x^r$, while the *coefficient* is only the number $\binom{n}{r}$. The reason correctly states the general term and the multiplier, so it is true.

</details>

## Section D — matching and multi-statement

### 19. Match the values

Match each item in Column I with one value in Column II.

| Column I | Column II |
| --- | --- |
| (i) Sum of coefficients of $(1+x)^5$ | (a) $6$ |
| (ii) Middle coefficient of $(1+x)^6$ | (b) $32$ |
| (iii) Coefficient of $x^2$ in $(1+x)^4$ | (c) $20$ |

<details><summary>Answer</summary>

(i) $\to$ (b): $P(1)=2^5=32$.
(ii) $\to$ (c): the middle coefficient for even $n=6$ is $\binom{6}{3}=20$.
(iii) $\to$ (a): $\binom{4}{2}=6$.

</details>

### 20. Which statements are true?

1. $\binom{n}{r}=\binom{n}{n-r}$ for $0\le r\le n$.
2. $\sum_{r=0}^{n}\binom{n}{r}=2^n$.
3. For small $x$, $(1+x)^n\approx1+nx$.
4. The general term of $(a+b)^n$ is $T_r=\binom{n}{r}a^{n-r}b^r$.

<details><summary>Answer</summary>

Statements **1, 2 and 3** are true; statement **4** is false. The correct general term is $T_{r+1}=\binom{n}{r}a^{n-r}b^r$ — the index and the term number differ by one. This single off-by-one error changes which binomial coefficient belongs to a named term.

</details>

## Review by error, not by score

| If you missed… | Revisit | Then retry |
| --- | --- | --- |
| 1–4 or 16 | Binomial expansion | Count the terms and locate the middle before expanding. |
| 5, 9, 10 or 19 | Coefficients and identities | Write the identity and test it with $n=4$. |
| 6, 14 | Applications: approximations | Check that $|x|$ is small and estimate the first dropped term. |
| 7, 13 or 17 | Coefficients and identities | Decide whether $P(1)$ or $P(-1)$ is required. |
| 11, 12, 18 or 20 | General and middle terms | Write $T_{r+1}$ explicitly and solve for $r$. |
| 15 | General and middle terms | Use successive-coefficient ratios and verify with small $n$. |

<learning-block type="recap" title="Ready to move on?">

Aim for at least 16 correct out of 20 with a written method choice for every question. Questions you answer correctly but cannot justify are revision targets, not mastered topics.

</learning-block>
