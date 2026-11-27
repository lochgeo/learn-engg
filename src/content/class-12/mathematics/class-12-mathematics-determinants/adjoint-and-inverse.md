## From cofactors to a matrix that undoes multiplication

The $2\times2$ inverse formula is easy to remember, but it does not generalise by guesswork. There is a systematic object — the **adjoint** — built entirely from cofactors, and it yields the inverse of any invertible square matrix. It also explains why a zero determinant makes inversion impossible: division by zero is the only obstruction.

## 1. Definition of the adjoint

For a square matrix $A=(a_{ij})$ with cofactors $C_{ij}$, the **adjoint** (or adjugate) is the transpose of the cofactor matrix:
$$
\operatorname{adj}(A)=[C_{ij}]^T=[C_{ji}].
$$

The entry in row $i$, column $j$ of $\operatorname{adj}(A)$ is $C_{ji}$ — the cofactor of $a_{ji}$, not of $a_{ij}$. The transpose is essential.

For $A=\begin{pmatrix}a&b\\c&d\end{pmatrix}$ the cofactors are $C_{11}=d$, $C_{12}=-c$, $C_{21}=-b$, $C_{22}=a$, so
$$
\operatorname{adj}(A)=\begin{pmatrix}d&-b\\-c&a\end{pmatrix}.
$$

## 2. The key relation

For every square matrix $A$, of any order $n$,
$$
A\operatorname{adj}(A)=\operatorname{adj}(A)A=\det(A)\,I_n.
$$

Here is why. The $(i,j)$ entry of $A\operatorname{adj}(A)$ is the product of row $i$ of $A$ with column $j$ of the adjoint. Column $j$ of the adjoint contains $C_{j1},C_{j2},\dots,C_{jn}$, so that entry is
$$
\sum_{k=1}^{n} a_{ik}C_{jk}.
$$

- If $i=j$, this is the cofactor expansion of $\det(A)$ along row $i$, giving $\det(A)$.
- If $i\ne j$, imagine replacing row $j$ of $A$ with a copy of row $i$. The resulting matrix has two equal rows, so its determinant is $0$. But its cofactors along row $j$ are unchanged (deleting row $j$ removes the copied row), so expanding it along row $j$ gives $\sum_k a_{ik}C_{jk}=0$.

Thus $A\operatorname{adj}(A)=\det(A)I$. The same argument with columns gives $\operatorname{adj}(A)A=\det(A)I$.

## 3. The inverse formula

If $\det(A)\ne0$, divide the key relation by $\det(A)$:
$$
A\left(\frac{1}{\det(A)}\operatorname{adj}(A)\right)=I
\quad\Longrightarrow\quad
\boxed{\,A^{-1}=\frac{1}{\det(A)}\operatorname{adj}(A)\,}.
$$

If $\det(A)=0$, the key relation gives $A\operatorname{adj}(A)=0$. If an inverse existed, multiplying $AB=I$ by $\det$ would give $\det(A)\det(B)=1$, impossible when $\det(A)=0$. So a singular matrix has **no** inverse, even though its adjoint still exists.

Useful consequences (assume the matrices are square and invertible, and $n$ is the order):

$$
\det(\operatorname{adj}(A))=\det(A)^{n-1},\qquad
\operatorname{adj}(kA)=k^{\,n-1}\operatorname{adj}(A),\qquad
\operatorname{adj}(AB)=\operatorname{adj}(B)\operatorname{adj}(A).
$$

The first follows by taking determinants of $A\operatorname{adj}(A)=\det(A)I$: the left side is $\det(A)\det(\operatorname{adj}(A))$ and the right side is $\det(A)^n$; cancel one nonzero $\det(A)$.

## 4. Worked example

Take the matrix from the previous module,
$$
A=\begin{pmatrix}2&0&3\\1&4&5\\0&-1&2\end{pmatrix},\qquad \det(A)=23\ne0.
$$

Its cofactor matrix, computed entry by entry in the previous module, was
$$
[C_{ij}]=\begin{pmatrix}
13&-2&-1\\
-3&4&2\\
-12&-7&8
\end{pmatrix}.
$$

Transposing gives the adjoint:
$$
\operatorname{adj}(A)=\begin{pmatrix}
13&-3&-12\\
-2&4&-7\\
-1&2&8
\end{pmatrix}.
$$

Therefore
$$
A^{-1}=\frac{1}{23}\begin{pmatrix}
13&-3&-12\\
-2&4&-7\\
-1&2&8
\end{pmatrix}.
$$

**Verification.** Multiply $A$ by the numerator matrix:
$$
\begin{pmatrix}2&0&3\\1&4&5\\0&-1&2\end{pmatrix}
\begin{pmatrix}13&-3&-12\\-2&4&-7\\-1&2&8\end{pmatrix}
=
\begin{pmatrix}
26-3&-6+6&-24+24\\
13-8-5&-3+16+10&-12-28+40\\
0+2-2&0-4+4&0+7+16
\end{pmatrix}
=
\begin{pmatrix}23&0&0\\0&23&0\\0&0&23\end{pmatrix}.
$$
Dividing by $23$ gives $I_3$, confirming the answer. Notice how the off-diagonal zeros arise from the "imposter row" argument in Section 2 — they are not a coincidence of this example.

**Sanity check.** $\det(A^{-1})$ should be $1/23$. Since the numerator matrix has determinant $23^2$ (the adjoint of a $3\times3$ matrix has determinant $\det(A)^2=23^2$) and we divide each of its three rows by $23$, the determinant scales by $23^{-3}$, giving $23^2/23^3=1/23$. Consistent.

<learning-block type="mistake" title="Forget the transpose and the divisor">

Two errors dominate. The first is using the cofactor matrix itself as the adjoint: for the example that would put $-2$ in position $(1,2)$ instead of $-3$, and the product $AA^{-1}$ would fail immediately. The second is stopping at $\operatorname{adj}(A)$ and calling it the inverse — the factor $1/\det(A)$ is essential. A third, quieter error is attempting the formula when $\det(A)=0$; the adjoint still exists, but $A^{-1}$ does not.

</learning-block>

## Try it yourself

**A.** Find $\operatorname{adj}(B)$ and $B^{-1}$ for $B=\begin{pmatrix}1&2\\3&4\end{pmatrix}$.

<details><summary>Show the reasoning</summary>

$\operatorname{adj}(B)=\begin{pmatrix}4&-2\\-3&1\end{pmatrix}$ and $\det(B)=4-6=-2$. Hence
$B^{-1}=-\frac12\begin{pmatrix}4&-2\\-3&1\end{pmatrix}=\begin{pmatrix}-2&1\\ \frac32&-\frac12\end{pmatrix}$.
Check: $BB^{-1}=\begin{pmatrix}-2+3&1-1\\-6+6&3-2\end{pmatrix}=I_2$.

</details>

**B.** If $A$ is $3\times3$ with $\det(A)=3$, find $\det(\operatorname{adj}(A))$ and $\det(A^{-1})$.

<details><summary>Show the reasoning</summary>

$\det(\operatorname{adj}(A))=\det(A)^{3-1}=3^2=9$, and $\det(A^{-1})=1/\det(A)=\frac13$.

</details>

**C.** Does $\begin{pmatrix}1&2\\2&4\end{pmatrix}$ have an inverse? Does it have an adjoint?

<details><summary>Show the reasoning</summary>

$\det=4-4=0$, so there is no inverse. The adjoint does exist: $\begin{pmatrix}4&-2\\-2&1\end{pmatrix}$, and indeed $A\operatorname{adj}(A)=0$. This is the singular case predicted by $A\operatorname{adj}(A)=\det(A)I$.

</details>

## Remember

- $\operatorname{adj}(A)$ is the **transpose** of the cofactor matrix; its $(i,j)$ entry is $C_{ji}$.
- $A\operatorname{adj}(A)=\operatorname{adj}(A)A=\det(A)I$, for every square $A$.
- $A^{-1}=\operatorname{adj}(A)/\det(A)$ exists only when $\det(A)\ne0$.
- $\det(\operatorname{adj}(A))=\det(A)^{n-1}$ and $\operatorname{adj}(AB)=\operatorname{adj}(B)\operatorname{adj}(A)$.
- Verify an inverse by multiplying: the product must be the identity, not merely "look close".

The determinant is also a geometric tool. The next module uses it to compute the area of a triangle and to test whether three points are collinear, before we return to systems of equations.
