## JEE Main sprint: how to use this set

This is a **50-minute, no-notes** paper for after you complete the four concept lessons and the practice module. Spend about 15 minutes on Section A, 12 on Section B, 13 on Section C and 10 on Section D. Mark any question that has taken 90 seconds and move on; a single messy multiplication should not cost you the rest of the paper.

Before calculating, write down the **order** of every matrix you use. In this chapter almost every trap is a shape trap: adding matrices of different orders, multiplying matrices whose inner dimensions do not match, or reversing the wrong product.

## Conditions and formula sheet

| Situation | Start with | Check before using it |
| --- | --- | --- |
| Add or subtract matrices | $A\pm B=[a_{ij}\pm b_{ij}]$ | Both matrices must have the same order. |
| Scale a matrix | $kA=[ka_{ij}]$ | The order does not change; $k$ is a scalar. |
| Multiply $A$ by $B$ | $(AB)_{ij}=\sum_k a_{ik}b_{kj}$ | Inner dimensions match; result has the outer dimensions. |
| Transpose | $(A^T)_{ij}=a_{ji}$ | An $m\times n$ matrix becomes $n\times m$. |
| Transpose of a product | $(AB)^T=B^TA^T$ | The order of factors reverses. |
| Symmetric / skew-symmetric | $A^T=A$ / $A^T=-A$ | Only square matrices; skew diagonal entries are $0$. |
| Split a square matrix | $A=\frac12(A+A^T)+\frac12(A-A^T)$ | The first part is symmetric, the second skew-symmetric. |
| Elementary row operation | $R_i\leftrightarrow R_j$, $R_i\to kR_i\ (k\ne0)$, $R_i\to R_i+kR_j$ | Scaling requires a nonzero factor. |
| Inverse of $2\times2$ | $A^{-1}=\frac1{ad-bc}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}$ | Requires $ad-bc\ne0$; verify by multiplication. |
| Inverse of a product or transpose | $(AB)^{-1}=B^{-1}A^{-1}$, $(A^T)^{-1}=(A^{-1})^T$ | Both matrices invertible and of the same order. |

<learning-block type="mistake" title="The fastest sanity checks">

If a proposed sum has matrices of different orders, a proposed product has mismatched inner dimensions, a skew-symmetric matrix has a nonzero diagonal entry, or a $2\times2$ inverse ignores a zero value of $ad-bc$, stop immediately. These are setup errors that no amount of arithmetic can repair.

</learning-block>

## Section A — 10 rapid MCQs

### 1. Reading an order

The order of $\begin{pmatrix}1&2&3\\4&5&6\end{pmatrix}$ is:

- A. $3\times2$
- B. $2\times3$
- C. $2\times2$
- D. $6\times1$

<details><summary>Answer</summary>

**B.** The array has two rows and three columns, so its order is $2\times3$. It has $6$ entries, but $6\times1$ describes a column matrix, not this grid.

</details>

### 2. Recognising a scalar matrix

A $3\times3$ matrix has all off-diagonal entries zero and every diagonal entry equal to $5$. It is:

- A. the identity matrix
- B. the zero matrix
- C. a scalar matrix
- D. a skew-symmetric matrix

<details><summary>Answer</summary>

**C.** A diagonal matrix with the same value $c$ on the whole diagonal is a scalar matrix $cI$. Here it is $5I_3$. It is not the identity, because the identity requires diagonal entries equal to $1$.

</details>

### 3. Order of a product

If $A$ is $2\times3$ and $B$ is $3\times2$, the order of $AB$ is:

- A. $2\times2$
- B. $3\times3$
- C. $2\times3$
- D. not defined

<details><summary>Answer</summary>

**A.** The inner dimensions are both $3$, so the product exists; the outer dimensions $2$ and $2$ give $AB$ order $2\times2$. (For interest, $BA$ would be $3\times3$.)

</details>

### 4. A statement that is always true

Which statement is true for all matrices for which the expressions are defined?

- A. $AB=BA$
- B. If $AB=O$ then $A=O$ or $B=O$
- C. $(AB)^T=B^TA^T$
- D. $A+B$ is defined whenever $A$ and $B$ are both square

<details><summary>Answer</summary>

**C.** The transpose of a product reverses the factors. A is false (matrix multiplication is not commutative), B is false (nonzero matrices can have a zero product), and D is false (two square matrices of different orders cannot be added).

</details>

### 5. Diagonal of a skew-symmetric matrix

Every diagonal entry of a $3\times3$ skew-symmetric matrix is:

- A. $1$
- B. $0$
- C. equal to some fixed nonzero constant
- D. unrestricted

<details><summary>Answer</summary>

**B.** Setting $i=j$ in $a_{ij}=-a_{ji}$ gives $a_{ii}=-a_{ii}$, so $2a_{ii}=0$ and $a_{ii}=0$. The diagonal of a skew-symmetric matrix is always zero.

</details>

### 6. When does a 2×2 inverse exist?

For $A=\begin{pmatrix}a&b\\c&d\end{pmatrix}$, which condition guarantees an inverse?

- A. $a+d\ne0$
- B. $ad-bc\ne0$
- C. $ad+bc\ne0$
- D. $a=d$

<details><summary>Answer</summary>

**B.** The inverse formula divides by $ad-bc$, so the matrix is invertible precisely when $ad-bc\ne0$. The trace $a+d$ is irrelevant to invertibility.

</details>

### 7. Transposing a column

The transpose of a $4\times1$ column matrix is a:

- A. $4\times1$ column matrix
- B. $1\times4$ row matrix
- C. $4\times4$ square matrix
- D. scalar matrix

<details><summary>Answer</summary>

**B.** Transposition swaps rows and columns. A $4\times1$ matrix becomes $1\times4$.

</details>

### 8. An idempotent invertible matrix

If $A^2=A$ and $A$ is invertible, then $A$ equals:

- A. $O$
- B. $I$
- C. $-I$
- D. nothing can be concluded

<details><summary>Answer</summary>

**B.** Left-multiply $A^2=A$ by $A^{-1}$: $A^{-1}A^2=A^{-1}A$, so $(A^{-1}A)A=I$, giving $A=I$. The zero matrix satisfies $A^2=A$ but is not invertible, so it is excluded.

</details>

### 9. Guaranteed symmetry

For a square matrix $A$, which of the following is always symmetric?

- A. $A-A^T$
- B. $A+A^T$
- C. $A^T-A$
- D. $AA^T-A$

<details><summary>Answer</summary>

**B.** $(A+A^T)^T=A^T+(A^T)^T=A^T+A=A+A^T$. Options A and C are skew-symmetric, since $(A-A^T)^T=A^T-A=-(A-A^T)$.

</details>

### 10. An elementary operation on the identity

Applying $R_i\to R_i+kR_j\ (i\ne j)$ to $I_n$ produces a matrix whose determinant is:

- A. $0$
- B. $k$
- C. $1$
- D. $-1$

<details><summary>Answer</summary>

**C.** Adding a multiple of one row to another does not change a determinant. Starting from $\det(I_n)=1$, the resulting elementary matrix still has determinant $1$. For $n=2$, $R_2\to R_2+kR_1$ gives $\begin{pmatrix}1&0\\k&1\end{pmatrix}$, whose determinant is $1$.

</details>

## Section B — 5 numerical-value questions

### 11. One entry of a product

For $A=\begin{pmatrix}1&2\\3&4\end{pmatrix}$ and $B=\begin{pmatrix}0&1\\-1&2\end{pmatrix}$, find $(AB)_{11}$.

<details><summary>Answer</summary>

$(AB)_{11}$ is row $1$ of $A$ dotted with column $1$ of $B$: $1(0)+2(-1)=-2$. The answer is $-2$.

</details>

### 12. Counting positions

How many entries of a $4\times4$ matrix lie on or above the main diagonal?

<details><summary>Answer</summary>

There are $4$ diagonal positions and $\frac{4\times3}{2}=6$ positions strictly above the diagonal, giving $4+6=10$ in total.

</details>

### 13. Sum of inverse entries

Let $A=\begin{pmatrix}2&1\\1&1\end{pmatrix}$. Find the sum of all entries of $A^{-1}$.

<details><summary>Answer</summary>

$ad-bc=2(1)-1(1)=1$, so $A^{-1}=\begin{pmatrix}1&-1\\-1&2\end{pmatrix}$. The sum of its entries is $1-1-1+2=1$.

</details>

### 14. A singular parameter

If $\begin{pmatrix}p&2\\3&4\end{pmatrix}$ is singular, find $p$.

<details><summary>Answer</summary>

Singularity means $ad-bc=0$: $4p-2(3)=0$, so $4p=6$ and $p=\frac32$. Checking, $\begin{pmatrix}3/2&2\\3&4\end{pmatrix}$ has its second row twice the first.

</details>

### 15. An entry of a symmetric sum

For $A=\begin{pmatrix}1&2\\3&4\end{pmatrix}$, find the $(1,2)$ entry of $A+A^T$.

<details><summary>Answer</summary>

$A^T=\begin{pmatrix}1&3\\2&4\end{pmatrix}$, so $A+A^T=\begin{pmatrix}2&5\\5&8\end{pmatrix}$. The $(1,2)$ entry is $2+3=5$. Note that the two off-diagonal entries agree, as they must for a symmetric matrix.

</details>

## Section C — 3 assertion–reason questions

For each question choose:

- **(a)** both assertion and reason are true, and the reason correctly explains the assertion;
- **(b)** both are true, but the reason does **not** correctly explain the assertion;
- **(c)** the assertion is true but the reason is false;
- **(d)** the assertion is false but the reason is true.

### 16. A symmetric sum

**Assertion:** For every square matrix $A$, the matrix $A+A^T$ is symmetric.

**Reason:** $(A^T)^T=A$.

<details><summary>Answer</summary>

**(a).** Transposing the sum gives $(A+A^T)^T=A^T+(A^T)^T=A^T+A=A+A^T$. The reason supplies the identity $(A^T)^T=A$ needed in that calculation, so both statements are true and the reason explains the assertion.

</details>

### 17. A zero-product claim

**Assertion:** If $A$ and $B$ are square matrices of the same order and $AB=O$, then $A=O$ or $B=O$.

**Reason:** Matrix multiplication is not commutative in general.

<details><summary>Answer</summary>

**(d).** The assertion is false. With $A=\begin{pmatrix}0&1\\0&0\end{pmatrix}$ and $B=\begin{pmatrix}1&0\\0&0\end{pmatrix}$, both are nonzero but $AB=O$. The reason is true — $AB\ne BA$ in general — but it does not rescue the assertion.

</details>

### 18. Sum versus product

**Assertion:** For square matrices $A$ and $B$ of the same order, $(A+B)^T=A^T+B^T$.

**Reason:** $(AB)^T=B^TA^T$.

<details><summary>Answer</summary>

**(b).** Both statements are true, but the reason concerns products, not sums, so it does not explain the assertion. The correct explanation is entrywise: $(A+B)^T_{ij}=a_{ji}+b_{ji}=(A^T)_{ij}+(B^T)_{ij}$.

</details>

## Section D — 2 matching and multi-statement questions

### 19. Match the type to the property

Match each matrix type in Column I with its most specific defining property in Column II.

| Column I | Column II |
| --- | --- |
| (i) Identity matrix | (a) $a_{ij}=0$ for $i\ne j$ |
| (ii) Scalar matrix | (b) $A^T=-A$ |
| (iii) Diagonal matrix | (c) diagonal entries all equal to a constant $c$ |
| (iv) Skew-symmetric matrix | (d) diagonal entries all $1$, off-diagonal entries all $0$ |

<details><summary>Answer</summary>

(i)–(d), (ii)–(c), (iii)–(a), (iv)–(b). The identity is the diagonal matrix with every diagonal entry $1$. A scalar matrix has one repeated diagonal value $c$, and it becomes the identity only when $c=1$. A diagonal matrix merely requires the off-diagonal entries to vanish, so its diagonal entries may differ. A skew-symmetric matrix satisfies $A^T=-A$ and consequently has a zero diagonal.

</details>

### 20. Which inverse statements hold?

Let $A$ and $B$ be invertible matrices of the same order. Which of the following statements are true?

1. $(A^{-1})^{-1}=A$
2. $(A^T)^{-1}=(A^{-1})^T$
3. $(2A)^{-1}=2A^{-1}$
4. $AA^{-1}=A^{-1}A=I$

<details><summary>Answer</summary>

Statements 1, 2 and 4 are true; statement 3 is false. For statement 3, scaling multiplies every entry by $2$, so the inverse must scale by $\frac12$: use $(kA)^{-1}=\frac1kA^{-1}$ for $k\ne0$, giving $(2A)^{-1}=\frac12A^{-1}$. Statement 1 follows from the definition of inverse, statement 2 from transposing $AA^{-1}=I$ to get $(A^{-1})^TA^T=I$, and statement 4 is the defining property.

</details>

## Review by error, not by score

| If you missed… | Revisit | Then retry |
| --- | --- | --- |
| 1, 3, 7, 12 | Order, types and equality | Write row and column counts before doing any arithmetic. |
| 4, 6, 11 | Matrix operations | Check inner dimensions and compute entries as row–column dot products. |
| 5, 9, 15, 16, 19 | Transpose and symmetry | Apply the transpose rules and set $i=j$ for skew-symmetric diagonals. |
| 10, 13, 14, 18, 20 | Elementary operations and inverses | Test $ad-bc$ first, then verify an inverse by multiplication. |
| 2, 8, 17 | Conceptual traps | Recite the exact definitions and look for a counterexample before agreeing. |

<learning-block type="recap" title="Read the score as a diagnostic">

Aim for at least 16 correct out of 20 with a written method for each. A question you answered correctly by guessing a shape or a sign is a revision target, not a mastered topic. Reattempt it from a blank page before moving to the next chapter on determinants.

</learning-block>
