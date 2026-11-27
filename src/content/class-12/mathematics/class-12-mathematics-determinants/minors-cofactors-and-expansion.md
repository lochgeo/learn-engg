## Every entry has a smaller determinant attached to it

Expand a $3\times3$ determinant and you meet $2\times2$ determinants inside it. Expand one of those and you meet $1\times1$ determinants. This nesting is not an accident of notation: it is a way of defining determinants of any order from determinants of the order below. To use it reliably you need names for the pieces — the **minor** and the **cofactor** of an entry.

## 1. Minors

For a square matrix $A=(a_{ij})$, the **minor** $M_{ij}$ of the entry $a_{ij}$ is the determinant of the submatrix left after deleting row $i$ and column $j$. If $A$ has order $n$, then $M_{ij}$ has order $n-1$.

For
$$
A=\begin{pmatrix}a_{11}&a_{12}&a_{13}\\a_{21}&a_{22}&a_{23}\\a_{31}&a_{32}&a_{33}\end{pmatrix}
$$
we have, for example,
$$
M_{12}=\begin{vmatrix}a_{21}&a_{23}\\a_{31}&a_{33}\end{vmatrix},\qquad
M_{23}=\begin{vmatrix}a_{11}&a_{12}\\a_{31}&a_{32}\end{vmatrix}.
$$

Deleting the row and column through an entry is the whole job; the minor is a number, not a matrix.

## 2. Cofactors and the sign pattern

The **cofactor** of $a_{ij}$ is the minor with a sign attached:
$$
C_{ij}=(-1)^{i+j}M_{ij}.
$$

The factor $(-1)^{i+j}$ produces a checkerboard of signs:
$$
\begin{pmatrix}
+&-&+&\cdots\\
-&+&-&\cdots\\
+&-&+&\cdots\\
\vdots&\vdots&\vdots&\ddots
\end{pmatrix}.
$$
So $C_{ij}=M_{ij}$ when $i+j$ is even, and $C_{ij}=-M_{ij}$ when $i+j$ is odd. For instance $C_{12}=-M_{12}$ and $C_{23}=-M_{23}$, while $C_{11}=M_{11}$ and $C_{22}=M_{22}$.

## 3. Expansion (Laplace's formula)

The determinant can be computed by expanding along **any** row or **any** column:
$$
\det(A)=\sum_{j=1}^{n}a_{ij}C_{ij}\quad\text{(row }i\text{)},\qquad
\det(A)=\sum_{i=1}^{n}a_{ij}C_{ij}\quad\text{(column }j\text{)}.
$$

Why the alternating signs? Consider the $3\times3$ case expanded along row 1:
$$
\det(A)=a_{11}(a_{22}a_{33}-a_{23}a_{32})-a_{12}(a_{21}a_{33}-a_{23}a_{31})+a_{13}(a_{21}a_{32}-a_{22}a_{31}).
$$
Each bracket is a $2\times2$ determinant, and the minus signs are exactly $(-1)^{1+j}$. More structurally, a determinant changes sign when two rows are interchanged. Moving row $i$ to the top requires $i-1$ swaps with the rows above, and moving column $j$ to the left requires $j-1$ swaps; together that is $(i-1)+(j-1)=i+j-2$ swaps, which has the same parity as $i+j$. Hence the sign $(-1)^{i+j}$.

The recursive definition is consistent: choose whichever row or column contains the most zeros, because a zero entry contributes nothing to its expansion.

## 4. Worked example

For
$$
A=\begin{pmatrix}2&0&3\\1&4&5\\0&-1&2\end{pmatrix},
$$
find $\det(A)$ by expanding along the first column, then check along the first row.

**Along column 1** the entries are $2,1,0$:
$$
C_{11}=+\begin{vmatrix}4&5\\-1&2\end{vmatrix}=8+5=13,\qquad
C_{21}=-\begin{vmatrix}0&3\\-1&2\end{vmatrix}=-(0+3)=-3.
$$
(The third cofactor is multiplied by $a_{31}=0$ and need not be computed.)
$$
\det(A)=a_{11}C_{11}+a_{21}C_{21}+a_{31}C_{31}=2(13)+1(-3)+0=23.
$$

**Check along row 1** the entries are $2,0,3$:
$$
C_{11}=13,\qquad C_{13}=+\begin{vmatrix}1&4\\0&-1\end{vmatrix}=-1,
$$
so $\det(A)=2(13)+0+3(-1)=23$. The two expansions agree.

**Sanity check.** The determinant is nonzero, so $A$ must be invertible. In the next module we will compute its adjoint and inverse and verify that $AA^{-1}=I$; the number $23$ reappears there.

<learning-block type="mistake" title="A minor is not a cofactor">

The most frequent error is forgetting the sign: writing $\det(A)=\sum_j a_{ij}M_{ij}$ instead of $\sum_j a_{ij}C_{ij}$. For the example above this would give $2(13)+1(3)=29$, which disagrees with the row-1 expansion. Always write the sign $(-1)^{i+j}$ before the minor, or use the checkerboard pattern. A second slip is deleting the wrong row or column — deleting row $i$ **and** column $j$, not the row and column *containing* $a_{ij}$ by mistake.

</learning-block>

## 5. The cofactor matrix

Collecting all cofactors into a matrix gives the **cofactor matrix** $[C_{ij}]$. For the $A$ above a full calculation gives
$$
[C_{ij}]=\begin{pmatrix}
13&-2&-1\\
-3&4&2\\
-12&-7&8
\end{pmatrix}.
$$
Check a few entries: $C_{12}=-\begin{vmatrix}1&5\\0&2\end{vmatrix}=-2$, $C_{23}=-\begin{vmatrix}2&0\\0&-1\end{vmatrix}=2$, and $C_{32}=-\begin{vmatrix}2&3\\1&5\end{vmatrix}=-(10-3)=-7$.

This matrix is the raw material for the adjoint in the next module. Notice that expansion of $\det(A)$ uses the cofactors of a **fixed row** paired with the entries of that same row; it does not use the cofactor matrix as a whole.

## Try it yourself

**A.** For $B=\begin{pmatrix}1&2&3\\4&5&6\\7&8&9\end{pmatrix}$, find $M_{23}$ and $C_{23}$.

<details><summary>Show the reasoning</summary>

Delete row 2 and column 3 to get $\begin{vmatrix}1&2\\7&8\end{vmatrix}=8-14=-6$, so $M_{23}=-6$. Since $2+3=5$ is odd, $C_{23}=-M_{23}=6$. Note $B$ itself is singular, but individual minors need not vanish.

</details>

**B.** Expand $\begin{vmatrix}0&2&0\\3&0&1\\4&5&2\end{vmatrix}$ along row 1.

<details><summary>Show the reasoning</summary>

Only $a_{12}=2$ contributes. Its cofactor is $C_{12}=-\begin{vmatrix}3&1\\4&2\end{vmatrix}=-(6-4)=-2$, so the determinant is $2(-2)=-4$. Expanding along row 1 rather than blindly using the diagonal shortcut keeps the work to a single $2\times2$ determinant.

</details>

**C.** If $A$ has order $4$, how many cofactors must be computed to form its cofactor matrix, and how many are needed to expand $\det(A)$ along one row?

<details><summary>Show the reasoning</summary>

The cofactor matrix has $4^2=16$ entries, each requiring a $3\times3$ determinant. Expanding along a single row uses only $4$ cofactors (and fewer still if the row contains zeros). This is why choosing a sparse row matters in practice.

</details>

## Remember

- $M_{ij}$ is the determinant left after deleting row $i$ and column $j$; $C_{ij}=(-1)^{i+j}M_{ij}$.
- The sign is $+$ when $i+j$ is even and $-$ when $i+j$ is odd; draw the checkerboard if unsure.
- $\det(A)=\sum_j a_{ij}C_{ij}$ (row $i$) $=\sum_i a_{ij}C_{ij}$ (column $j$), valid for every row and every column.
- Expand along the row or column with the most zeros; a zero entry contributes nothing.
- The cofactor matrix collects all $C_{ij}$ and is the transpose-free precursor of the adjoint.

Next, the cofactor matrix is transposed and divided by the determinant to produce the **adjoint** and the **inverse**, giving a formula that works for any invertible square matrix.
