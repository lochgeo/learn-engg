## The determinant knows how many answers there are

Three linear equations in three unknowns usually have exactly one solution. Sometimes they have none, and sometimes they have infinitely many — the equations are really fewer than they look. One number, the determinant of the coefficient matrix, separates these cases. When it is nonzero, the adjoint gives an explicit formula for every unknown.

## 1. Matrix form

Write a system of $n$ equations in $n$ unknowns as
$$
A\vec x=\vec b,
$$
where $A=(a_{ij})$ is the **coefficient matrix**, $\vec x=(x_1,\dots,x_n)^T$ holds the unknowns, and $\vec b=(b_1,\dots,b_n)^T$ holds the constants. For example,
$$
\begin{cases}
x+2y+3z=14\\
x+y+z=6\\
2x+3y+z=11
\end{cases}
\quad\longleftrightarrow\quad
\begin{pmatrix}1&2&3\\1&1&1\\2&3&1\end{pmatrix}
\begin{pmatrix}x\\y\\z\end{pmatrix}
=
\begin{pmatrix}14\\6\\11\end{pmatrix}.
$$

## 2. Deriving Cramer's rule

If $\det(A)\ne0$, the inverse exists and $\vec x=A^{-1}\vec b=\dfrac{1}{\det(A)}\operatorname{adj}(A)\vec b$. Component $i$ is
$$
x_i=\frac{1}{\det(A)}\sum_{k=1}^{n}C_{ki}\,b_k,
$$
because the $(i,k)$ entry of the adjoint is $C_{ki}$.

Now let $A_i$ be the matrix obtained from $A$ by replacing **column** $i$ with $\vec b$. Expanding $\det(A_i)$ along column $i$ gives
$$
\det(A_i)=\sum_{k=1}^{n} b_k\,C_{ki}(A_i).
$$
Deleting column $i$ removes the column that was replaced, so each cofactor $C_{ki}(A_i)$ is exactly the original $C_{ki}$. Therefore $\det(A_i)=\sum_k b_k C_{ki}$, and substituting above yields **Cramer's rule**:
$$
\boxed{\,x_i=\frac{\det(A_i)}{\det(A)}\,},\qquad i=1,\dots,n,\quad \det(A)\ne0.
$$

Each unknown is a ratio of two determinants: the denominator is the coefficient determinant, and the numerator is the same determinant with one column swapped for the constants.

## 3. What happens when the determinant is zero

If $\det(A)=0$, Cramer's rule is unavailable, and the system is either inconsistent or underdetermined. Multiply the equation $A\vec x=\vec b$ on the left by $\operatorname{adj}(A)$:
$$
(\operatorname{adj}(A)A)\vec x=(\operatorname{adj}(A))\vec b.
$$
The left side is $\det(A)I\vec x=\vec 0$, so **consistency requires** $(\operatorname{adj}(A))\vec b=\vec 0$.

- If $(\operatorname{adj}(A))\vec b\ne\vec 0$, no solution exists — the equations contradict each other.
- If $(\operatorname{adj}(A))\vec b=\vec 0$, the system has infinitely many solutions: at least one free parameter remains.

For a homogeneous system $A\vec x=\vec 0$ the zero vector is always a solution. Non-trivial solutions exist **iff** $\det(A)=0$.

Geometrically, two equations in two unknowns describe lines. A nonzero determinant means they meet at one point; a zero determinant means they are parallel (no solution) or coincident (infinitely many).

## 4. Worked example

Solve
$$
x+2y+3z=14,\qquad x+y+z=6,\qquad 2x+3y+z=11.
$$

The coefficient matrix and its determinant are
$$
A=\begin{pmatrix}1&2&3\\1&1&1\\2&3&1\end{pmatrix},\qquad
\det(A)=1(1-3)-2(1-2)+3(3-2)=-2+2+3=3\ne0.
$$
So there is a unique solution and Cramer's rule applies:

$$
A_1=\begin{pmatrix}14&2&3\\6&1&1\\11&3&1\end{pmatrix},\quad
\det(A_1)=14(-2)-2(-5)+3(7)=-28+10+21=3,
$$
$$
A_2=\begin{pmatrix}1&14&3\\1&6&1\\2&11&1\end{pmatrix},\quad
\det(A_2)=1(-5)-14(-1)+3(-1)=-5+14-3=6,
$$
$$
A_3=\begin{pmatrix}1&2&14\\1&1&6\\2&3&11\end{pmatrix},\quad
\det(A_3)=1(-7)-2(-1)+14(1)=-7+2+14=9.
$$

Hence
$$
x=\frac{3}{3}=1,\qquad y=\frac{6}{3}=2,\qquad z=\frac{9}{3}=3.
$$

**Check by substitution.** $1+2(2)+3(3)=14$, $1+2+3=6$ and $2(1)+3(2)+3=11$. All three equations are satisfied.

**Singular illustration.** For $x+y=2$, $2x+2y=5$ the coefficient determinant is $1(2)-1(2)=0$ and $\operatorname{adj}(A)=\begin{pmatrix}2&-1\\-2&1\end{pmatrix}$. Then $(\operatorname{adj}(A))\vec b=(4-5,\,-4+5)^T=(-1,1)^T\ne\vec0$, so there is no solution — the second line is parallel to the first but shifted.

<learning-block type="mistake" title="Replace a column, not a row">

Cramer's rule replaces **column** $i$ with the constants vector, never row $i$, and the ratio is $\det(A_i)/\det(A)$, not the other way round. Another serious error is using the rule when $\det(A)=0$: the formula divides by zero, and equal or parallel equations need the consistency test instead. Always compute $\det(A)$ first and decide which case you are in.

</learning-block>

## 5. A reliable order of work

1. Write the system as $A\vec x=\vec b$ and compute $\det(A)$.
2. If $\det(A)\ne0$, use Cramer's rule (or $A^{-1}\vec b$ if you already have the inverse).
3. If $\det(A)=0$, test $(\operatorname{adj}(A))\vec b$; report no solution or infinitely many accordingly.
4. Substitute the answer back into **all** original equations before finishing.

## Try it yourself

**A.** Solve $x+2y=7$, $3x-y=7$ by Cramer's rule.

<details><summary>Show the reasoning</summary>

$\det(A)=1(-1)-2(3)=-7$. Then $\det(A_1)=\begin{vmatrix}7&2\\7&-1\end{vmatrix}=-7-14=-21$ and $\det(A_2)=\begin{vmatrix}1&7\\3&7\end{vmatrix}=7-21=-14$. Hence $x=(-21)/(-7)=3$ and $y=(-14)/(-7)=2$. Check: $3+4=7$ and $9-2=7$.

</details>

**B.** Does $x+y=2$, $2x+2y=4$ have a unique solution, none, or infinitely many?

<details><summary>Show the reasoning</summary>

$\det(A)=0$ and $\operatorname{adj}(A)=\begin{pmatrix}2&-1\\-2&1\end{pmatrix}$, so $(\operatorname{adj}(A))\vec b=(4-4,\,-4+4)^T=\vec0$. The system is consistent but singular, so there are infinitely many solutions: every point on $x+y=2$ works.

</details>

**C.** Can $x+y+z=0$, $x-y+2z=0$, $3x+y+4z=0$ have a solution other than $x=y=z=0$?

<details><summary>Show the reasoning</summary>

$\begin{vmatrix}1&1&1\\1&-1&2\\3&1&4\end{vmatrix}=1(-4-2)-1(4-6)+1(1+3)=-6+2+4=0$. Since the homogeneous system has a singular coefficient matrix, non-trivial solutions exist. To find one, set $z=t$: the first two equations give $x+y=-t$ and $x-y=-2t$, hence $x=-\frac32t$ and $y=\frac12t$; the third equation is then automatically satisfied. Taking $t=2$ gives $(x,y,z)=(-3,1,2)$, and indeed $-3+1+2=0$, $-3-1+4=0$ and $-9+1+8=0$.

</details>

## Remember

- $A\vec x=\vec b$ has a unique solution exactly when $\det(A)\ne0$.
- Cramer's rule: $x_i=\det(A_i)/\det(A)$, with column $i$ of $A$ replaced by $\vec b$.
- It follows from $\vec x=\operatorname{adj}(A)\vec b/\det(A)$ and cofactor expansion along the replaced column.
- If $\det(A)=0$, check $(\operatorname{adj}(A))\vec b$: nonzero means no solution, zero means infinitely many.
- A homogeneous system has non-trivial solutions precisely when $\det(A)=0$; always substitute back to verify.

All five concept tools are now in place. The next module shows how to choose among them quickly, then a timed JEE Main set tests that choice under pressure.
