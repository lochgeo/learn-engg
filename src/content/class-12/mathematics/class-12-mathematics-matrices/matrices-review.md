## Your study plan for this chapter

Matrices is a set of small, precise tools rather than one long derivation. A focused first pass takes about **2 hours**:

1. **Order, types and equality** — 20 min
2. **Matrix operations** — 25 min
3. **Transpose, symmetric and skew-symmetric matrices** — 20 min
4. **Elementary operations and invertible matrices** — 25 min
5. **This mastery check** — 25 min

Work each lesson with a blank sheet beside you: after reading, redo its worked example without looking. Take a short break after the second lesson. When you can complete this mastery check without prompts, use the **JEE Main timed practice** module for a 50-minute mixed paper; its value lies in choosing the right tool under pressure.

## First choose the tool

| Clue in the question | Start with |
| --- | --- |
| Two matrices are equal; find unknowns | Check equal order, then equate corresponding entries |
| Add, subtract or scale matrices | Require the same order; operate entry by entry |
| "Is the product defined? What is its order?" | Inner dimensions must match; outer dimensions give the answer |
| Compute a product | Row $i$ of the first matrix dotted with column $j$ of the second |
| "Are $AB$ and $BA$ equal?" | Compute both; look for a counterexample |
| Transpose of a sum, scalar multiple or product | $(A+B)^T=A^T+B^T$, $(kA)^T=kA^T$, $(AB)^T=B^TA^T$ |
| Split a square matrix into symmetric and skew parts | $S=\frac12(A+A^T)$, $K=\frac12(A-A^T)$ |
| Diagonal of a skew-symmetric matrix | Set $i=j$ in $a_{ij}=-a_{ji}$ to get $a_{ii}=0$ |
| Reduce to $I$, or find an inverse | Elementary row operations on $[A\mid I]$ |
| Invertibility of a $2\times2$ matrix | Test $ad-bc\ne0$, then use the inverse formula |
| Inverse of a product or transpose | $(AB)^{-1}=B^{-1}A^{-1}$, $(A^T)^{-1}=(A^{-1})^T$ |

## Mastery check

Try each question before opening its answer. Write the order of every matrix you use; most errors here are shape errors, not arithmetic errors.

### 1. All the possible orders

A matrix has $12$ entries. List every possible order. Can it be square?

<details><summary>Answer and reasoning</summary>

An $m\times n$ matrix has $mn$ entries, so we need factor pairs of $12$: $1\times12$, $2\times6$, $3\times4$, $4\times3$, $6\times2$, $12\times1$. It cannot be square, because a square order would require $n^2=12$, and $12$ is not a perfect square. A matrix with $25$ entries, by contrast, could be $5\times5$.

</details>

### 2. Diagonal, scalar, identity

Give a $3\times3$ example of a diagonal matrix that is not scalar, and of a scalar matrix that is not the identity.

<details><summary>Answer and reasoning</summary>

$\begin{pmatrix}1&0&0\\0&2&0\\0&0&3\end{pmatrix}$ is diagonal (off-diagonal entries vanish) but not scalar, because its diagonal entries are not all equal. $5I_3=\begin{pmatrix}5&0&0\\0&5&0\\0&0&5\end{pmatrix}$ is scalar but not the identity, because the repeated diagonal value is $5$, not $1$. A scalar matrix is diagonal with a single repeated value; the identity is the special case where that value is $1$.

</details>

### 3. Equality determines unknowns

Find $a,b,c$ if

$$
\begin{pmatrix}a-1&2\\3&b+2\end{pmatrix}=\begin{pmatrix}3&2\\c&5\end{pmatrix}.
$$

<details><summary>Answer and reasoning</summary>

Both matrices are $2\times2$, so equality means corresponding entries match: $a-1=3\Rightarrow a=4$; $b+2=5\Rightarrow b=3$; and $c=3$. Substituting back reproduces the right-hand matrix exactly.

</details>

### 4. A linear combination

With $A=\begin{pmatrix}1&-2\\3&4\end{pmatrix}$ and $B=\begin{pmatrix}2&0\\-1&5\end{pmatrix}$, compute $2A-B$.

<details><summary>Answer and reasoning</summary>

Both are $2\times2$. $2A=\begin{pmatrix}2&-4\\6&8\end{pmatrix}$ and $2A-B=\begin{pmatrix}2-2&-4-0\\6-(-1)&8-5\end{pmatrix}=\begin{pmatrix}0&-4\\7&3\end{pmatrix}$. The $(2,1)$ entry is $7$ because subtracting $-1$ adds $1$.

</details>

### 5. Predicting a product's shape

$A$ is $2\times3$ and $B$ is $3\times4$. What is the order of $AB$? Is $BA$ defined?

<details><summary>Answer and reasoning</summary>

$AB$ exists because the inner dimensions are both $3$, and its order is $2\times4$. $BA$ is not defined: $B$ has $4$ columns while $A$ has $2$ rows, so the inner dimensions $4$ and $2$ do not match.

</details>

### 6. Compute both orders

For $A=\begin{pmatrix}2&1\\0&3\end{pmatrix}$ and $B=\begin{pmatrix}1&2\\4&0\end{pmatrix}$, find $AB$ and $BA$.

<details><summary>Answer and reasoning</summary>

$$
AB=\begin{pmatrix}2(1)+1(4)&2(2)+1(0)\\0(1)+3(4)&0(2)+3(0)\end{pmatrix}
=\begin{pmatrix}6&4\\12&0\end{pmatrix},
$$
$$
BA=\begin{pmatrix}1(2)+2(0)&1(1)+2(3)\\4(2)+0(0)&4(1)+0(3)\end{pmatrix}
=\begin{pmatrix}2&7\\8&4\end{pmatrix}.
$$

They differ, illustrating that matrix multiplication is not commutative.

</details>

### 7. A zero product

Give an example of nonzero $2\times2$ matrices $A$ and $B$ with $AB=O$.

<details><summary>Answer and reasoning</summary>

Take $A=\begin{pmatrix}0&1\\0&0\end{pmatrix}$ and $B=\begin{pmatrix}1&0\\0&0\end{pmatrix}$. Then $AB=\begin{pmatrix}0&0\\0&0\end{pmatrix}=O$ although neither factor is zero. A zero product therefore gives no information about the individual factors.

</details>

### 8. Verify the transpose product rule

Using $A$ and $B$ from question 6, verify $(AB)^T=B^TA^T$ and show that $A^TB^T$ is different.

<details><summary>Answer and reasoning</summary>

From question 6, $AB=\begin{pmatrix}6&4\\12&0\end{pmatrix}$, so $(AB)^T=\begin{pmatrix}6&12\\4&0\end{pmatrix}$. Now $B^T=\begin{pmatrix}1&4\\2&0\end{pmatrix}$ and $A^T=\begin{pmatrix}2&0\\1&3\end{pmatrix}$, giving

$$
B^TA^T=\begin{pmatrix}1(2)+4(1)&1(0)+4(3)\\2(2)+0(1)&2(0)+0(3)\end{pmatrix}
=\begin{pmatrix}6&12\\4&0\end{pmatrix}.
$$

Meanwhile $A^TB^T=\begin{pmatrix}2&8\\7&4\end{pmatrix}$, which is not $(AB)^T$. The factors must be reversed.

</details>

### 9. Symmetric plus skew-symmetric

Write $A=\begin{pmatrix}4&1\\-3&2\end{pmatrix}$ as the sum of a symmetric and a skew-symmetric matrix.

<details><summary>Answer and reasoning</summary>

$A^T=\begin{pmatrix}4&-3\\1&2\end{pmatrix}$, so

$$
S=\frac12(A+A^T)=\begin{pmatrix}4&-1\\-1&2\end{pmatrix},\qquad
K=\frac12(A-A^T)=\begin{pmatrix}0&2\\-2&0\end{pmatrix}.
$$

Here $S^T=S$, $K^T=-K$, and $S+K=\begin{pmatrix}4&1\\-3&2\end{pmatrix}=A$. The diagonal of $K$ is zero, as it must be.

</details>

### 10. Inverses, existing and failing

Find the inverse of $\begin{pmatrix}3&1\\5&2\end{pmatrix}$ and check it. Does $\begin{pmatrix}2&4\\1&2\end{pmatrix}$ have an inverse?

<details><summary>Answer and reasoning</summary>

For the first matrix, $ad-bc=3(2)-1(5)=1\ne0$, so

$$
A^{-1}=\frac{1}{1}\begin{pmatrix}2&-1\\-5&3\end{pmatrix}=\begin{pmatrix}2&-1\\-5&3\end{pmatrix}.
$$

Check: $\begin{pmatrix}3&1\\5&2\end{pmatrix}\begin{pmatrix}2&-1\\-5&3\end{pmatrix}=\begin{pmatrix}6-5&-3+3\\10-10&-5+6\end{pmatrix}=\begin{pmatrix}1&0\\0&1\end{pmatrix}$.

For the second matrix, $ad-bc=2(2)-4(1)=0$, so it is singular and has no inverse. Its first row is twice the second; no elementary row operations can turn it into $I$.

</details>

## Self-check

You are ready for the timed set when you can:

- state the number of entries and diagonal entries of an $m\times n$ or $n\times n$ matrix without hesitation;
- distinguish diagonal, scalar, identity, triangular, symmetric and skew-symmetric matrices from their definitions;
- decide whether two matrices may be added or multiplied, and give the order of a product;
- compute a product entry as a row–column dot product and explain why $AB\ne BA$ in general;
- use $(AB)^T=B^TA^T$ and explain the reversed order by dimensions or by entries;
- split any square matrix into $\frac12(A+A^T)+\frac12(A-A^T)$ and justify each part;
- test $ad-bc$ before writing a $2\times2$ inverse, and verify the result by multiplication;
- describe the three elementary operations and reduce a simple $[A\mid I]$ to $[I\mid A^{-1}]$.

If any item feels shaky, revisit that concept module and redo its worked example before attempting the timed paper.
