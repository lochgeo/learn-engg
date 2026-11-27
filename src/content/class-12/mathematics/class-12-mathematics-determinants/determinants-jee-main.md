## JEE Main sprint: how to use this set

This is a **50-minute, no-notes** paper for after you finish the chapter. Spend about 15 minutes on Section A, 15 on Section B, 10 on Section C and 10 on Section D. Mark any question that is still open after 90 seconds and move on; a determinant left unfilled costs less than ten minutes lost on one expansion.

Before writing anything, name the tool: direct $ad-bc$, row reduction plus expansion, a cofactor, the adjoint, a coordinate-area formula, or Cramer's rule.

## Conditions and formula sheet

| Situation | Start with | Check before using it |
| --- | --- | --- |
| Order-2 determinant | $ad-bc$ | Keep the order of terms; the sign matters. |
| Order 3 or larger | Create zeros, then expand along that row/column | Adding a multiple of another row changes nothing; scaling a row does. |
| Cofactor of $a_{ij}$ | $C_{ij}=(-1)^{i+j}M_{ij}$ | Delete row $i$ **and** column $j$; a minor has no sign. |
| Matrix product or power | $\det(AB)=\det(A)\det(B)$ | All matrices must be square and of the same order. |
| Whole matrix scaled by $k$ | $\det(kA)=k^n\det(A)$ | The exponent is the order $n$, not $1$. |
| Transpose | $\det(A^T)=\det(A)$ | No sign change. |
| Inverse | $A^{-1}=\operatorname{adj}(A)/\det(A)$ | Requires $\det(A)\ne0$; transpose the cofactor matrix. |
| Adjoint determinant | $\det(\operatorname{adj}(A))=\det(A)^{n-1}$ | For $n=3$, the exponent is $2$. |
| Triangle from coordinates | $\frac12\left|\begin{vmatrix}x_1&y_1&1\\x_2&y_2&1\\x_3&y_3&1\end{vmatrix}\right|$ | Include the $\frac12$ and the absolute value. |
| Unique linear system | $x_i=\det(A_i)/\det(A)$ | Replace column $i$, never row $i$; check $\det(A)\ne0$. |
| Singular coefficient matrix | Test $(\operatorname{adj}(A))\vec b$ | Nonzero vector means no solution; zero means infinitely many. |

<learning-block type="mistake" title="Fast sanity checks">

If a $3\times3$ matrix has two equal rows, its determinant must be $0$. If $\det(A)=1$ and you compute a fractional inverse with denominators other than $1$, recheck the cofactors. If a claimed area is negative, you forgot the absolute value; if it equals the raw determinant, you forgot the $\frac12$.

</learning-block>

## Section A — 10 rapid MCQs

### 1. An order-2 determinant

$\begin{vmatrix}2&1\\3&5\end{vmatrix}$ equals:

- A. $5$
- B. $7$
- C. $10$
- D. $13$

<details><summary>Answer</summary>

**B.** $2(5)-1(3)=10-3=7$.

</details>

### 2. Scaling a determinant

If $A$ is $3\times3$ with $\det(A)=4$, then $\det(2A)$ is:

- A. $8$
- B. $12$
- C. $32$
- D. $64$

<details><summary>Answer</summary>

**C.** Every one of the three rows is multiplied by $2$, so $\det(2A)=2^3\det(A)=8\times4=32$. Choice A would come from the false rule $\det(kA)=k\det(A)$.

</details>

### 3. Dependent rows

$\begin{vmatrix}1&2&3\\4&5&6\\7&8&9\end{vmatrix}$ equals:

- A. $1$
- B. $3$
- C. $9$
- D. $0$

<details><summary>Answer</summary>

**D.** Rows 1 and 2 differ by $(3,3,3)$, and so do rows 2 and 3. Hence $\text{row}_3=2\,\text{row}_2-\text{row}_1=(8-1,\,10-2,\,12-3)=(7,8,9)$. The rows are linearly dependent, so the determinant is $0$.

</details>

### 4. Transpose

If $\det(A)=-3$, then $\det(A^T)$ is:

- A. $-3$
- B. $3$
- C. $0$
- D. $9$

<details><summary>Answer</summary>

**A.** Transposing leaves the determinant unchanged: $\det(A^T)=\det(A)=-3$.

</details>

### 5. A cofactor

For $\begin{pmatrix}1&2\\3&4\end{pmatrix}$, the cofactor $C_{12}$ is:

- A. $3$
- B. $-3$
- C. $2$
- D. $-2$

<details><summary>Answer</summary>

**B.** Delete row 1 and column 2 to get $M_{12}=3$. Since $1+2=3$ is odd, $C_{12}=-M_{12}=-3$.

</details>

### 6. A skew-symmetric matrix

The determinant of $\begin{pmatrix}0&a&b\\-a&0&c\\-b&-c&0\end{pmatrix}$ is:

- A. $abc$
- B. $2abc$
- C. $0$
- D. $a^2+b^2+c^2$

<details><summary>Answer</summary>

**C.** The matrix equals minus its own transpose, so $\det(A)=\det(A^T)=\det(-A)=(-1)^3\det(A)=-\det(A)$, forcing $\det(A)=0$. Expansion confirms it: $-a(bc)+b(ac)=0$. Odd-order skew-symmetric matrices are always singular.

</details>

### 7. Area of a unit right triangle

The area of the triangle with vertices $(0,0)$, $(1,0)$ and $(0,1)$ is:

- A. $1$
- B. $\frac12$
- C. $2$
- D. $\frac14$

<details><summary>Answer</summary>

**B.** $\begin{vmatrix}0&0&1\\1&0&1\\0&1&1\end{vmatrix}=1(1-0)=1$, so the area is $\frac12\times1=\frac12$. This matches half of a unit square.

</details>

### 8. Singular means

A square matrix $A$ is singular exactly when:

- A. $\det(A)=0$
- B. $\det(A)=1$
- C. $A^{-1}$ exists
- D. its rows are linearly independent

<details><summary>Answer</summary>

**A.** Singularity means no inverse, which is equivalent to $\det(A)=0$ and to linearly dependent rows.

</details>

### 9. Determinant of the adjoint

If $A$ is $3\times3$ with $\det(A)=2$, then $\det(\operatorname{adj}(A))$ is:

- A. $2$
- B. $4$
- C. $8$
- D. $16$

<details><summary>Answer</summary>

**B.** Taking determinants in $A\operatorname{adj}(A)=\det(A)I$ gives $\det(A)\det(\operatorname{adj}(A))=\det(A)^3$, so $\det(\operatorname{adj}(A))=\det(A)^{3-1}=2^2=4$.

</details>

### 10. When Cramer's rule works

Cramer's rule for $A\vec x=\vec b$ requires:

- A. $\det(A)=0$
- B. $\det(A)\ne0$
- C. $A$ to be symmetric
- D. $\vec b=\vec0$

<details><summary>Answer</summary>

**B.** The rule divides by $\det(A)$, so a unique solution exists only when the coefficient determinant is nonzero. Symmetry and the right-hand side are irrelevant.

</details>

## Section B — 5 numerical-value questions

### 11. Small determinant

Evaluate $\begin{vmatrix}1&2\\3&7\end{vmatrix}$.

<details><summary>Answer</summary>

$1(7)-2(3)=7-6=1$.

</details>

### 12. Expansion with a zero

Evaluate $\begin{vmatrix}2&0&1\\1&3&2\\0&1&4\end{vmatrix}$.

<details><summary>Answer</summary>

Expand along row 1: $2(3\cdot4-2\cdot1)+1(1\cdot1-3\cdot0)=2(10)+1=21$.

</details>

### 13. Coordinate area

Find the area of the triangle with vertices $(1,2)$, $(4,2)$ and $(2,6)$, in square units.

<details><summary>Answer</summary>

$\begin{vmatrix}1&2&1\\4&2&1\\2&6&1\end{vmatrix}=1(2-6)-2(4-2)+(24-4)=-4-4+20=12$, so the area is $\frac12\times12=6$. The base from $(1,2)$ to $(4,2)$ has length $3$ and the height is $4$, giving the same $\frac12(3)(4)=6$.

</details>

### 14. Inverse determinant

If $A$ is $3\times3$ with $\det(A)=5$, find $\det(A^{-1})$.

<details><summary>Answer</summary>

From $AA^{-1}=I$, $\det(A)\det(A^{-1})=1$, so $\det(A^{-1})=\frac15=0.2$.

</details>

### 15. Two equations

If $x+y=5$ and $x-y=1$, find the product $xy$.

<details><summary>Answer</summary>

Adding gives $2x=6$, so $x=3$, and then $y=2$. Hence $xy=6$. Cramer's rule gives the same values since $\det(A)=1(-1)-1(1)=-2$, $\det(A_1)=\begin{vmatrix}5&1\\1&-1\end{vmatrix}=-6$ and $\det(A_2)=\begin{vmatrix}1&5\\1&1\end{vmatrix}=-4$.

</details>

## Section C — 3 assertion–reason questions

For each question choose: **A** — both statements true and the reason correctly explains the assertion; **B** — both true but the reason is not the correct explanation; **C** — assertion true, reason false; **D** — assertion false, reason true.

### 16. Equal rows

**Assertion:** If two rows of a square matrix are identical, its determinant is zero.
**Reason:** Interchanging two rows of a determinant changes its sign.

- A / B / C / D as defined above

<details><summary>Answer</summary>

**A.** Both are true. Swapping the two identical rows leaves the matrix unchanged, so the determinant is unchanged, yet the swap should negate it. Hence $\det(A)=-\det(A)$ and therefore $\det(A)=0$ — the reason is exactly the proof of the assertion.

</details>

### 17. A singular 2×2 matrix

**Assertion:** $A=\begin{pmatrix}1&2\\2&4\end{pmatrix}$ has no inverse.
**Reason:** $\det(A)=0$.

- A / B / C / D as defined above

<details><summary>Answer</summary>

**A.** $\det(A)=1(4)-2(2)=0$. If an inverse existed, $\det(A)\det(A^{-1})=\det(I)=1$, which is impossible. The reason directly establishes the assertion.

</details>

### 18. Two true properties

**Assertion:** For square matrices of the same order, $\det(AB)=\det(A)\det(B)$.
**Reason:** $\det(A^T)=\det(A)$.

- A / B / C / D as defined above

<details><summary>Answer</summary>

**B.** Both statements are true, but the transpose property does not explain multiplicativity. The product rule follows from composing area-scaling factors, or from the permutation definition of the determinant.

</details>

## Section D — 2 matching / multi-statement questions

### 19. Match the determinants

Let $A$ be a $3\times3$ matrix with $\det(A)=3$. Match each expression in Column I with its value in Column II.

| Column I | Column II |
| --- | --- |
| (P) $\det(2A)$ | (1) $9$ |
| (Q) $\det(\operatorname{adj}(A))$ | (2) $24$ |
| (R) $\det(A^{-1})$ | (3) $\frac13$ |
| (S) $\det(A^T)$ | (4) $3$ |

<details><summary>Answer</summary>

**P–2, Q–1, R–3, S–4.** $\det(2A)=2^3\cdot3=24$; $\det(\operatorname{adj}(A))=3^{3-1}=9$; $\det(A^{-1})=1/3$; and $\det(A^T)=3$.

</details>

### 20. Which statements are true?

For $A=\begin{pmatrix}1&2&3\\4&5&6\\7&8&k\end{pmatrix}$, decide which statements are correct:

1. $A$ is singular when $k=9$.
2. When $k=9$, the rank of $A$ is $2$.
3. $A$ is invertible when $k=10$.
4. $\operatorname{adj}(A)$ is defined only when $A$ is invertible.

<details><summary>Answer</summary>

Statements **1, 2 and 3 are true; statement 4 is false**. Expanding along row 1,
$$
\det(A)=1(5k-48)-2(4k-42)+3(32-35)=5k-48-8k+84-9=27-3k=3(9-k).
$$
So $\det(A)=0$ exactly at $k=9$ (statement 1). There, $\text{row}_3=\text{row}_1+\text{row}_2=(5,7,9)$ while rows 1 and 2 are not multiples of each other, so the rank is $2$ (statement 2). At $k=10$, $\det(A)=-3\ne0$, giving an inverse (statement 3). The adjoint exists for **every** square matrix, invertible or not — only the inverse needs $\det(A)\ne0$ (statement 4).

</details>

## Review by error, not by score

| If you missed… | Revisit | Then retry |
| --- | --- | --- |
| 1, 11 or 15 | Order-2 determinants and Cramer's rule | Write $ad-bc$ and replace the correct column. |
| 2, 4, 9 or 19 | Determinant properties | State why each factor is $k^n$, unchanged, or $\det(A)^{n-1}$. |
| 3, 5, 6 or 12 | Expansion and cofactors | Draw the sign checkerboard and create zeros first. |
| 7, 13 | Coordinate geometry applications | Include $\frac12$ and the absolute value. |
| 8, 14 or 17 | Singularity and inverses | Check $\det(A)$ before writing $A^{-1}$. |
| 10, 16, 18 or 20 | Cramer's rule and logical statements | Separate "both true" from "one explains the other". |

<learning-block type="recap" title="Ready to move on?">

Aim for at least 16 correct out of 20 with a named method for every question. A correct answer you cannot justify is a revision target, not a mastered topic.

</learning-block>
