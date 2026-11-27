## Your study plan for this chapter

Determinants are a small set of tools that combine in many ways. A focused first pass takes about **2 hours**, then this mastery check:

1. **Determinants and their properties** — 20 min
2. **Minors, cofactors and expansion** — 20 min
3. **Adjoint and inverse** — 20 min
4. **Area of a triangle and applications** — 20 min
5. **Solving systems of equations** — 20 min
6. **This mastery check** — 25 min

After each module, close the notes and redo its worked example from a blank page. Mark a module done only when you can say why each step is legal, not just what the answer is. Afterwards, the timed JEE Main set is the place to practise choosing a tool quickly.

## First choose the tool

| Clue in the question | Start with |
| --- | --- |
| "Evaluate the determinant" of order 2 | $ad-bc$ directly |
| A $3\times3$ or larger determinant | Create zeros with $R_i\to R_i+kR_j$, then expand along that row or column |
| "Find the cofactor / minor of $a_{ij}$" | Delete row $i$ and column $j$; add $(-1)^{i+j}$ only for a cofactor |
| Matrix is triangular or has equal rows | Product of diagonal entries, or $0$ |
| Scaling, transposing or multiplying matrices inside $\det(\cdot)$ | $\det(kA)=k^n\det(A)$, $\det(A^T)=\det(A)$, $\det(AB)=\det(A)\det(B)$ |
| "Find the inverse" | Check $\det(A)\ne0$, then $A^{-1}=\operatorname{adj}(A)/\det(A)$ |
| A statement about $\operatorname{adj}(A)$ | Transpose the cofactor matrix; use $A\operatorname{adj}(A)=\det(A)I$ |
| Area of a triangle from coordinates | $\frac12\left|\begin{vmatrix}x_1&y_1&1\\x_2&y_2&1\\x_3&y_3&1\end{vmatrix}\right|$ |
| Collinear points or line through two points | Set the corresponding determinant to $0$ |
| Unique system of linear equations | Cramer's rule, $x_i=\det(A_i)/\det(A)$ |
| Coefficient determinant is $0$ | Test $(\operatorname{adj}(A))\vec b$: no solution or infinitely many |
| Homogeneous system | Non-trivial solutions exactly when $\det(A)=0$ |

## Mastery check

Try every question before opening its answer.

### 1. A quick order-2 determinant

Evaluate $\begin{vmatrix}3&5\\2&7\end{vmatrix}$.

<details><summary>Answer and reasoning</summary>

$3\times7-5\times2=21-10=11$.

</details>

### 2. Spot the structure

Evaluate $\begin{vmatrix}1&2&3\\0&1&4\\0&0&2\end{vmatrix}$.

<details><summary>Answer and reasoning</summary>

The matrix is upper triangular, so the determinant is the product of the diagonal entries: $1\times1\times2=2$. No expansion is needed.

</details>

### 3. Minor versus cofactor

For $B=\begin{pmatrix}1&2&3\\4&5&6\\7&8&9\end{pmatrix}$, find $M_{23}$ and $C_{23}$.

<details><summary>Answer and reasoning</summary>

Delete row 2 and column 3: $M_{23}=\begin{vmatrix}1&2\\7&8\end{vmatrix}=8-14=-6$. Since $2+3=5$ is odd, $C_{23}=-M_{23}=6$. The matrix itself is singular, but a minor may be nonzero.

</details>

### 4. Expand along a sparse row

Evaluate $\begin{vmatrix}0&2&0\\3&0&1\\4&5&2\end{vmatrix}$.

<details><summary>Answer and reasoning</summary>

Row 1 has only $a_{12}=2$. Its cofactor is $C_{12}=-\begin{vmatrix}3&1\\4&2\end{vmatrix}=-(6-4)=-2$, so the determinant is $2(-2)=-4$.

</details>

### 5. Inverse by adjoint

For $A=\begin{pmatrix}3&1\\2&1\end{pmatrix}$, find $\operatorname{adj}(A)$ and $A^{-1}$, and verify.

<details><summary>Answer and reasoning</summary>

$\det(A)=3-2=1$ and $\operatorname{adj}(A)=\begin{pmatrix}1&-1\\-2&3\end{pmatrix}$. Since the determinant is $1$, $A^{-1}=\operatorname{adj}(A)$. Verification: $\begin{pmatrix}3&1\\2&1\end{pmatrix}\begin{pmatrix}1&-1\\-2&3\end{pmatrix}=\begin{pmatrix}3-2&-3+3\\2-2&-2+3\end{pmatrix}=I_2$.

</details>

### 6. Determinants of derived matrices

If $A$ is $3\times3$ with $\det(A)=2$, find $\det(2A)$, $\det(A^T)$, $\det(\operatorname{adj}(A))$ and $\det(A^{-1})$.

<details><summary>Answer and reasoning</summary>

$\det(2A)=2^3\cdot2=16$; $\det(A^T)=2$; $\det(\operatorname{adj}(A))=2^{3-1}=4$; $\det(A^{-1})=1/2$. Each follows from a different property, so name the property before computing.

</details>

### 7. Area from coordinates

Find the area of the triangle with vertices $(0,0)$, $(4,0)$ and $(2,3)$.

<details><summary>Answer and reasoning</summary>

$\begin{vmatrix}0&0&1\\4&0&1\\2&3&1\end{vmatrix}=1(12-0)=12$, so the area is $\frac12\times12=6$ square units. This agrees with base $4$ and height $3$.

</details>

### 8. Collinear or not?

Are $(2,3)$, $(5,7)$ and $(8,11)$ collinear?

<details><summary>Answer and reasoning</summary>

$\begin{vmatrix}2&3&1\\5&7&1\\8&11&1\end{vmatrix}=2(7-11)-3(5-8)+(55-56)=-8+9-1=0$. The determinant vanishes, so the area is zero and the points are collinear. The successive differences are both $(3,4)$, which confirms it.

</details>

### 9. Cramer's rule

Solve $x+2y=7$, $3x-y=7$.

<details><summary>Answer and reasoning</summary>

$\det(A)=-1-6=-7$, $\det(A_1)=\begin{vmatrix}7&2\\7&-1\end{vmatrix}=-21$ and $\det(A_2)=\begin{vmatrix}1&7\\3&7\end{vmatrix}=-14$. Hence $x=3$, $y=2$. Check: $3+4=7$ and $9-2=7$.

</details>

### 10. Find the singular value

For which value of $k$ is $A=\begin{pmatrix}1&2&3\\4&5&6\\5&7&k\end{pmatrix}$ singular?

<details><summary>Answer and reasoning</summary>

$\det(A)=1(5k-42)-2(4k-30)+3(28-25)=5k-42-8k+60+9=27-3k$. Setting this to zero gives $k=9$. Indeed, when $k=9$ the third row equals the first row plus the second row, so the rows are dependent.

</details>

## Self-check

You are ready for the timed set when you can:

- evaluate a $3\times3$ determinant efficiently by creating zeros before expanding;
- explain exactly when $(-1)^{i+j}$ is needed and when it is not;
- build $\operatorname{adj}(A)$ by transposing the cofactor matrix, and use $A^{-1}=\operatorname{adj}(A)/\det(A)$ only when $\det(A)\ne0$;
- state $\det(kA)=k^n\det(A)$, $\det(A^T)=\det(A)$ and $\det(AB)=\det(A)\det(B)$ without confusing them;
- use a determinant for both triangle area and collinearity, with the factor $\frac12$ and absolute value in the right place;
- apply Cramer's rule, and switch to the consistency test when the coefficient determinant is zero;
- substitute a solution back into every original equation and reject impossible answers.

If one item still feels uncertain, revisit that module and redo the worked example before attempting the timed paper.
