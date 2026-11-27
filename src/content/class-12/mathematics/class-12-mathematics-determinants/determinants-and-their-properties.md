## A single number that decides everything

A graphics program that rotates, stretches or reflects a shape is applying a square matrix. Hidden inside that matrix is one number — the **determinant** — that answers two questions at once: can the transformation be undone, and by what factor does it change area or volume? A zero determinant means the transformation squashes space onto a line or a plane, information is lost, and no inverse can exist.

For a square matrix $A$ the determinant is written $|A|$ or $\det(A)$. It exists only for square arrays: a $2\times3$ matrix has no determinant.

## 1. Determinants of order 1 and 2

For the $1\times1$ matrix $[a]$,
$$
\det([a])=a.
$$

For $A=\begin{pmatrix}a&b\\c&d\end{pmatrix}$,
$$
|A|=\begin{vmatrix}a&b\\c&d\end{vmatrix}=ad-bc.
$$

This formula is not arbitrary. Solve the pair $ax+by=p$, $cx+dy=q$ by elimination: multiply the first equation by $d$ and the second by $b$, then subtract to get $(ad-bc)x=dp-bq$. The same denominator appears for $y$. If $ad-bc=0$ the elimination breaks down, and that is precisely when the two equations fail to have a unique solution. The determinant is the number that controls solvability.

## 2. Order 3 and the diagonal mnemonic

For a $3\times3$ matrix, expansion along the first row gives
$$
\begin{vmatrix}a&b&c\\d&e&f\\g&h&i\end{vmatrix}
=a(ei-fh)-b(di-fg)+c(dh-eg).
$$

You may know the "six diagonals" picture (Sarrus' rule) for $3\times3$ determinants. It is a convenient memory aid for order 3 only; it has **no** analogue for $4\times4$ or larger. The expansion idea in Section 1 of the next module is the general one.

## 3. What the determinant measures

Take the rows of a $2\times2$ matrix as vectors $\vec u=(a,b)$ and $\vec v=(c,d)$. The quantity $ad-bc$ is the **signed area** of the parallelogram they span. Its magnitude is the area, and its sign records orientation: positive when turning from $\vec u$ to $\vec v$ is anticlockwise, negative when it is clockwise. For a $3\times3$ matrix the determinant is the signed volume of the parallelepiped spanned by the three row vectors.

This geometric reading explains the algebraic facts below. Multiplying every vector by $k$ scales area by $k^2$ in two dimensions and volume by $k^3$ in three — which is why the determinant picks up $k^n$, not just $k$, for an $n\times n$ matrix.

## 4. Properties that make determinants easy

Let $A$ be square of order $n$. The following hold, and each can be justified from the signed-area picture or from the definition.

1. $\det(I_n)=1$.
2. Swapping two rows (or two columns) changes the sign: $\det(A')=-\det(A)$.
3. If two rows are equal or one is a multiple of another, $\det(A)=0$. Swapping the equal rows leaves the matrix unchanged but flips the sign, so $\det(A)=-\det(A)$.
4. Multiplying **one** row by $k$ multiplies the determinant by $k$. Doing this to all $n$ rows gives $\det(kA)=k^n\det(A)$.
5. Adding a multiple of one row to a different row leaves the determinant unchanged: $\det(R_i\to R_i+kR_j)=\det(A)$ for $i\ne j$. This is the main practical tool.
6. Transposing does not change the determinant: $\det(A^T)=\det(A)$. Hence any row property also holds for columns.
7. Determinants are multiplicative: $\det(AB)=\det(A)\det(B)$. Area-scaling factors compose when transformations are applied in sequence.
8. A triangular or diagonal matrix has determinant equal to the product of its diagonal entries.
9. A row or column of zeros gives $\det(A)=0$.
10. $A$ is invertible (non-singular) exactly when $\det(A)\ne0$.

## 5. Worked example

Evaluate
$$
|A|=\begin{vmatrix}1&2&3\\4&5&6\\7&8&10\end{vmatrix}.
$$

**Step 1 — create zeros below the first pivot.** Keep row 1 and use property 5:
$$
R_2\to R_2-4R_1=(0,-3,-6),\qquad R_3\to R_3-7R_1=(0,-6,-11).
$$
These operations do not change the determinant:
$$
|A|=\begin{vmatrix}1&2&3\\0&-3&-6\\0&-6&-11\end{vmatrix}.
$$

**Step 2 — expand along column 1, which now has two zeros.**
$$
|A|=1\cdot\begin{vmatrix}-3&-6\\-6&-11\end{vmatrix}=(-3)(-11)-(-6)(-6)=33-36=-3.
$$

**Direct check.** Expanding the original matrix along row 1:
$$
1(5\cdot10-6\cdot8)-2(4\cdot10-6\cdot7)+3(4\cdot8-5\cdot7)=2+4-9=-3.
$$

**Sanity check.** If the bottom-right entry were $9$ instead of $10$, the rows would be in arithmetic progression with row 1 $+$ row 2 $=$ row 3, so the determinant would be $0$. Replacing $9$ by $10$ adds $1$ at position $(3,3)$, whose cofactor is $\begin{vmatrix}1&2\\4&5\end{vmatrix}=5-8=-3$. The new determinant should be $0+1(-3)=-3$, which agrees.

<learning-block type="mistake" title="Do not lose the power of n">

A very common slip is writing $\det(kA)=k\det(A)$. For a $3\times3$ matrix with $\det(A)=5$, scaling the whole matrix by $2$ gives $\det(2A)=2^3\cdot5=40$, not $10$. Only scaling a **single row** (or column) produces a single factor $k$. A second trap is applying the six-diagonal shortcut to a $4\times4$ determinant; it simply does not exist there.

</learning-block>

## Try it yourself

**A.** Evaluate $\begin{vmatrix}2&3\\4&5\end{vmatrix}$.

<details><summary>Show the reasoning</summary>

$2(5)-3(4)=10-12=-2$. The negative sign is meaningful: it says the ordered column vectors have clockwise orientation.

</details>

**B.** Evaluate $\begin{vmatrix}1&0&2\\3&1&4\\5&2&6\end{vmatrix}$ without a full three-term expansion.

<details><summary>Show the reasoning</summary>

Notice $\text{row}_3=2\,\text{row}_2-\text{row}_1$, i.e. $(5,2,6)=2(3,1,4)-(1,0,2)$. Two rows are linearly dependent, so property 3 gives a determinant of $0$. Direct expansion confirms it: $1(6-8)+2(6-5)=-2+2=0$.

</details>

**C.** If $A$ is $3\times3$ with $\det(A)=5$, find $\det(2A)$, $\det(A^T)$ and $\det(A^{-1})$.

<details><summary>Show the reasoning</summary>

$\det(2A)=2^3\cdot5=40$; $\det(A^T)=5$; and since $AA^{-1}=I$, $\det(A)\det(A^{-1})=1$, so $\det(A^{-1})=\frac15$.

</details>

## Remember

- $\det\begin{pmatrix}a&b\\c&d\end{pmatrix}=ad-bc$; the same $ad-bc$ decides whether two linear equations have a unique solution.
- The determinant is signed area (order 2) or signed volume (order 3); zero means space is collapsed.
- Swapping two rows flips the sign; equal or proportional rows force a zero determinant.
- $\det(kA)=k^n\det(A)$, $\det(A^T)=\det(A)$ and $\det(AB)=\det(A)\det(B)$.
- Adding a multiple of one row to another leaves the determinant unchanged — use it to manufacture zeros before expanding.

The next module makes the expansion step precise by naming the **minor** and **cofactor** of each entry, and shows why the alternating signs in the $3\times3$ formula appear.
