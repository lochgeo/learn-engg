## Undoing the elimination steps

Solving two linear equations by elimination involves swapping equations, multiplying an equation by a nonzero number, and adding a multiple of one equation to another. Each step preserves the solution set. When we perform the same steps on the coefficient matrix, we are doing **elementary operations**. If a sequence of them turns a square matrix into the identity, the sequence can be read backwards — and that is exactly what an inverse matrix records.

## 1. The three elementary operations

Elementary operations may be applied to rows or to columns. They are:

1. **Interchange** two rows (or columns): $R_i\leftrightarrow R_j$, written $C_i\leftrightarrow C_j$ for columns.
2. **Scale** a row (or column) by a nonzero number: $R_i\to kR_i$ with $k\ne0$ (or $C_i\to kC_i$). The restriction $k\ne0$ is essential; multiplying by zero would destroy information irreversibly.
3. **Add** a multiple of one row (or column) to another: $R_i\to R_i+kR_j$ with $i\ne j$ (or $C_i\to C_i+kC_j$).

Applying an elementary row operation to the identity matrix produces an **elementary matrix**. Performing a row operation on $A$ is the same as left-multiplying $A$ by that elementary matrix; a column operation corresponds to right-multiplication. We will use the operations directly, without needing to write the elementary matrices, but the link explains why they preserve invertibility.

Two matrices are **row-equivalent** if one can be obtained from the other by elementary row operations. Row-equivalence is reversible: every operation has an inverse operation of the same type ($R_i\leftrightarrow R_j$ undoes itself, $R_i\to kR_i$ is undone by $R_i\to\frac1kR_i$, and $R_i\to R_i+kR_j$ is undone by $R_i\to R_i-kR_j$).

## 2. Invertible matrices

A square matrix $A$ is **invertible** (non-singular) if there exists a matrix $B$ of the same order with

$$
AB=BA=I.
$$

Then $B$ is the **inverse** of $A$, written $A^{-1}$. If no such matrix exists, $A$ is **singular**.

The inverse is unique. Suppose both $B$ and $C$ satisfy the definition: $AB=BA=I$ and $AC=CA=I$. Then

$$
C=CI=C(AB)=(CA)B=IB=B.
$$

So there is only one matrix to which the symbol $A^{-1}$ can refer.

For a $2\times2$ matrix $A=\begin{pmatrix}a&b\\c&d\end{pmatrix}$, the quantity

$$
\Delta=ad-bc
$$

decides the question: $A$ is invertible exactly when $\Delta\ne0$. (This number is the determinant of $A$; determinants are developed fully in the next chapter.)

## 3. The inverse of a 2×2 matrix

Assume $\Delta=ad-bc\ne0$ and set

$$
B=\frac{1}{\Delta}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}.
$$

Multiplying out,

$$
AB=\frac{1}{\Delta}\begin{pmatrix}a&b\\c&d\end{pmatrix}
\begin{pmatrix}d&-b\\-c&a\end{pmatrix}
=\frac{1}{\Delta}\begin{pmatrix}ad-bc&-ab+ab\\cd-dc&-bc+ad\end{pmatrix}
=\frac{1}{\Delta}\begin{pmatrix}\Delta&0\\0&\Delta\end{pmatrix}=I.
$$

The same computation with the factors reversed gives $BA=I$, so

$$
A^{-1}=\frac{1}{ad-bc}\begin{pmatrix}d&-b\\-c&a\end{pmatrix},\qquad ad-bc\ne0.
$$

If $ad-bc=0$, the formula would require division by zero and no inverse exists.

Useful properties follow from the definition (all matrices are square of the same order and invertible):

$$
(A^{-1})^{-1}=A,\qquad (AB)^{-1}=B^{-1}A^{-1},\qquad (A^T)^{-1}=(A^{-1})^T,\qquad (kA)^{-1}=\frac1k A^{-1}\ (k\ne0).
$$

For $(AB)^{-1}=B^{-1}A^{-1}$, verify rather than memorise blindly:

$$
(AB)(B^{-1}A^{-1})=A(BB^{-1})A^{-1}=AIA^{-1}=AA^{-1}=I.
$$

The reversal is forced by the same dimension logic as $(AB)^T=B^TA^T$.

## 4. Finding an inverse by row reduction

Place $A$ and $I$ side by side as an augmented matrix $[A\mid I]$ and use elementary row operations to turn the left block into $I$. The right block then becomes $A^{-1}$:

$$
[A\mid I]\ \longrightarrow\ [I\mid A^{-1}].
$$

This works because the operations amount to left-multiplying both blocks by elementary matrices; when the left block has become $I$, the accumulated product multiplying the original $A$ is precisely $A^{-1}$. If the left block cannot be reduced to $I$, the matrix is singular.

## 5. Worked example

Find $A^{-1}$ for $A=\begin{pmatrix}2&1\\1&1\end{pmatrix}$ and verify it.

Here $\Delta=2(1)-1(1)=1\ne0$, so the formula applies:

$$
A^{-1}=\frac{1}{1}\begin{pmatrix}1&-1\\-1&2\end{pmatrix}=\begin{pmatrix}1&-1\\-1&2\end{pmatrix}.
$$

Verification:

$$
AA^{-1}=\begin{pmatrix}2&1\\1&1\end{pmatrix}\begin{pmatrix}1&-1\\-1&2\end{pmatrix}
=\begin{pmatrix}2-1&-2+2\\1-1&-1+2\end{pmatrix}
=\begin{pmatrix}1&0\\0&1\end{pmatrix}.
$$

**Sanity check:** row reduction gives the same answer. Starting from $\left[\begin{array}{cc|cc}2&1&1&0\\1&1&0&1\end{array}\right]$, swap the rows, then perform $R_2\to R_2-2R_1$, then $R_2\to -R_2$, then $R_1\to R_1-R_2$. The result is $\left[\begin{array}{cc|cc}1&0&1&-1\\0&1&-1&2\end{array}\right]$, so the right block is $\begin{pmatrix}1&-1\\-1&2\end{pmatrix}$, agreeing with the formula.

By contrast, $\begin{pmatrix}1&2\\2&4\end{pmatrix}$ has $\Delta=1(4)-2(2)=0$ and is singular: its second row is twice the first, so no sequence of row operations can turn it into $I$.

<learning-block type="mistake" title="Do not invert a singular matrix">

The most damaging error is applying $A^{-1}=\frac1{ad-bc}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}$ without checking that $ad-bc\ne0$. For $\begin{pmatrix}1&2\\2&4\end{pmatrix}$ this would mean dividing by zero, and the "answer" would fail verification immediately. Check the determinant factor first, then use the formula. A second common slip is writing $(AB)^{-1}=A^{-1}B^{-1}$; the order of the factors must reverse.

</learning-block>

## Try it yourself

**A.** Name an elementary row operation that turns $I_2$ into $\begin{pmatrix}1&0\\3&1\end{pmatrix}$.

<details><summary>Show the reasoning</summary>

$R_2\to R_2+3R_1$ applied to $\begin{pmatrix}1&0\\0&1\end{pmatrix}$ gives $\begin{pmatrix}1&0\\3&1\end{pmatrix}$. It is an elementary matrix of type 3, and its inverse operation is $R_2\to R_2-3R_1$.

</details>

**B.** Find the inverse of $\begin{pmatrix}4&1\\3&1\end{pmatrix}$ if it exists.

<details><summary>Show the reasoning</summary>

$\Delta=4(1)-1(3)=1\ne0$, so $A^{-1}=\begin{pmatrix}1&-1\\-3&4\end{pmatrix}$. Check: $\begin{pmatrix}4&1\\3&1\end{pmatrix}\begin{pmatrix}1&-1\\-3&4\end{pmatrix}=\begin{pmatrix}4-3&-4+4\\3-3&-3+4\end{pmatrix}=I$.

</details>

**C.** Does $\begin{pmatrix}2&4\\1&2\end{pmatrix}$ have an inverse?

<details><summary>Show the reasoning</summary>

No. Here $\Delta=2(2)-4(1)=0$, so the matrix is singular. Indeed the first row is twice the second, which cannot be repaired by elementary operations.

</details>

## Remember

- The three elementary operations are row/column interchange, scaling by a nonzero constant, and adding a multiple of one line to another.
- $A^{-1}$ exists only for square matrices, is unique, and satisfies $AA^{-1}=A^{-1}A=I$.
- A $2\times2$ matrix is invertible exactly when $ad-bc\ne0$; then $A^{-1}=\frac1{ad-bc}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}$.
- $(AB)^{-1}=B^{-1}A^{-1}$ and $(A^T)^{-1}=(A^{-1})^T$; both reverse or transpose in a controlled way.
- Row reduction $[A\mid I]\to[I\mid A^{-1}]$ is an alternative to the formula and reveals singularity when it fails.

You now have all four concept tools. The **matrices practice module** next shows how to choose among them quickly, followed by a timed JEE Main set for exam conditions.
