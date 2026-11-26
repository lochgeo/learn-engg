## Reading a table from the other direction

A table of test marks can list students down the side and tests across the top, or tests down the side and students across the top. Both tables carry the same information; one is simply the other turned over along its main diagonal. That operation is the **transpose**, and it leads to two important families of square matrices: those unchanged by the flip (symmetric) and those that merely change sign (skew-symmetric).

## 1. Definition and basic behaviour

The transpose of $A=[a_{ij}]_{m\times n}$ is the matrix $A^T=[a_{ji}]_{n\times m}$. The $(i,j)$ entry of $A^T$ is the $(j,i)$ entry of $A$:

$$
(A^T)_{ij}=a_{ji}.
$$

Transposing swaps rows and columns, so an $m\times n$ matrix becomes $n\times m$. Flipping twice restores the original:

$$
(A^T)^T=A.
$$

For example, $\begin{pmatrix}1&2&3\\4&5&6\end{pmatrix}^T=\begin{pmatrix}1&4\\2&5\\3&6\end{pmatrix}$. The transpose of a row matrix is a column matrix and vice versa; the transpose of a square matrix is square of the same order.

## 2. The three transpose rules

Let $A$ and $B$ have the same order, and let $k$ be a scalar. Comparing entries gives

$$
(A+B)^T=A^T+B^T,\qquad (kA)^T=kA^T,\qquad (AB)^T=B^TA^T.
$$

The first two are immediate: $(A+B)^T_{ij}=(A+B)_{ji}=a_{ji}+b_{ji}=(A^T)_{ij}+(B^T)_{ij}$.

The product rule deserves a derivation because of the reversed order. Let $A$ be $m\times n$ and $B$ be $n\times p$. Then $AB$ is $m\times p$ and $(AB)^T$ is $p\times m$, so the right-hand side must also be $p\times m$ — which forces $B^T$ ($p\times n$) to come before $A^T$ ($n\times m$). Comparing the $(i,j)$ entry:

$$
(AB)^T_{ij}=(AB)_{ji}=\sum_{k=1}^{n}a_{jk}b_{ki}
=\sum_{k=1}^{n}(B^T)_{ik}(A^T)_{kj}=(B^TA^T)_{ij}.
$$

The reversal is not a quirk: it is the only ordering whose dimensions work.

## 3. Symmetric and skew-symmetric matrices

Let $A$ be a **square** matrix.

- $A$ is **symmetric** when $A^T=A$, that is $a_{ij}=a_{ji}$ for all $i,j$. Entries mirror each other across the main diagonal; the diagonal itself is unrestricted.
- $A$ is **skew-symmetric** when $A^T=-A$, that is $a_{ij}=-a_{ji}$ for all $i,j$.

For a skew-symmetric matrix, put $j=i$ in $a_{ij}=-a_{ji}$. This gives $a_{ii}=-a_{ii}$, hence $2a_{ii}=0$ and therefore

$$
a_{ii}=0\quad\text{for every }i.
$$

Every diagonal entry of a skew-symmetric matrix must be zero. This is a derived constraint, not a convention.

<learning-block type="concept" title="Building symmetric and skew-symmetric matrices">

For any square $A$, the matrix $A+A^T$ is symmetric because $(A+A^T)^T=A^T+(A^T)^T=A^T+A$. Likewise $A-A^T$ is skew-symmetric because $(A-A^T)^T=A^T-A=-(A-A^T)$. These two constructions supply the building blocks for the next result.

</learning-block>

## 4. Every square matrix splits into two parts

Let

$$
S=\frac12(A+A^T),\qquad K=\frac12(A-A^T).
$$

Then $S^T=S$ (symmetric) and $K^T=-K$ (skew-symmetric), while

$$
S+K=\frac12(A+A^T)+\frac12(A-A^T)=A.
$$

So **every square matrix** can be written as the sum of a symmetric and a skew-symmetric matrix. The decomposition is unique: if $A=S_1+K_1=S_2+K_2$, transposing gives $A^T=S_1-K_1=S_2-K_2$; adding and subtracting these equations yields $S_1=S_2$ and $K_1=K_2$.

## 5. Worked example: splitting a matrix

Let $A=\begin{pmatrix}1&2\\3&4\end{pmatrix}$. Then $A^T=\begin{pmatrix}1&3\\2&4\end{pmatrix}$, so

$$
S=\frac12\begin{pmatrix}2&5\\5&8\end{pmatrix}
=\begin{pmatrix}1&\frac52\\[1mm]\frac52&4\end{pmatrix},
\qquad
K=\frac12\begin{pmatrix}0&-1\\1&0\end{pmatrix}
=\begin{pmatrix}0&-\frac12\\[1mm]\frac12&0\end{pmatrix}.
$$

Check: $S^T=S$, $K^T=\begin{pmatrix}0&\frac12\\-\frac12&0\end{pmatrix}=-K$, and

$$
S+K=\begin{pmatrix}1&-\frac12+\frac52\\[1mm]\frac52-\frac12&4\end{pmatrix}
=\begin{pmatrix}1&2\\3&4\end{pmatrix}=A.
$$

**Sanity check:** the diagonal of $K$ is $(0,0)$, as required for a skew-symmetric matrix, and the off-diagonal entries of $S$ match ($5/2$ in both positions), as required for a symmetric one.

<learning-block type="mistake" title="The order reverses in (AB)^T">

A very common slip is writing $(AB)^T=A^TB^T$. Apart from the wrong order, this usually has the wrong dimensions: if $A$ is $m\times n$ and $B$ is $n\times p$, then $A^TB^T$ is $n\times m$ times $p\times n$, which is undefined whenever $m\ne p$. Always reverse the factors: $(AB)^T=B^TA^T$. A second error is allowing a nonzero diagonal in a skew-symmetric matrix — the relation $a_{ii}=-a_{ii}$ forbids it.

</learning-block>

## Try it yourself

**A.** Show directly from the definition that $A+A^T$ is symmetric and $A-A^T$ is skew-symmetric for any square $A$.

<details><summary>Show the reasoning</summary>

$(A+A^T)^T=A^T+(A^T)^T=A^T+A=A+A^T$, so it equals its own transpose. Also $(A-A^T)^T=A^T-(A^T)^T=A^T-A=-(A-A^T)$, so it equals the negative of its transpose.

</details>

**B.** Write $A=\begin{pmatrix}3&1\\-2&4\end{pmatrix}$ as $S+K$ with $S$ symmetric and $K$ skew-symmetric.

<details><summary>Show the reasoning</summary>

$A^T=\begin{pmatrix}3&-2\\1&4\end{pmatrix}$, so $A+A^T=\begin{pmatrix}6&-1\\-1&8\end{pmatrix}$ and $A-A^T=\begin{pmatrix}0&3\\-3&0\end{pmatrix}$. Hence $S=\begin{pmatrix}3&-\frac12\\[1mm]-\frac12&4\end{pmatrix}$ and $K=\begin{pmatrix}0&\frac32\\[1mm]-\frac32&0\end{pmatrix}$. Adding gives $\begin{pmatrix}3&1\\-2&4\end{pmatrix}=A$, and $K$ has a zero diagonal.

</details>

**C.** If $A$ is $2\times3$, what is the order of $A^T$? Can $A+A^T$ be formed?

<details><summary>Show the reasoning</summary>

$A^T$ is $3\times2$. Since $A$ is $2\times3$ and $A^T$ is $3\times2$, their orders differ, so $A+A^T$ is not defined. The constructions $A\pm A^T$ require $A$ to be square.

</details>

## Remember

- $A^T$ swaps rows and columns: $(A^T)_{ij}=a_{ji}$, and $(A^T)^T=A$.
- $(A+B)^T=A^T+B^T$, $(kA)^T=kA^T$, and $(AB)^T=B^TA^T$ with the factors reversed.
- Symmetric means $A^T=A$; skew-symmetric means $A^T=-A$, which forces every diagonal entry to be zero.
- $A=\frac12(A+A^T)+\frac12(A-A^T)$ for every square $A$, and the split is unique.
- Check dimensions before adding a matrix to its transpose; the order must match.

The next module introduces **elementary operations**. Those operations reduce a matrix to a simpler form and lead directly to the idea of an inverse — where, once again, the order of a product reverses: $(AB)^{-1}=B^{-1}A^{-1}$.
