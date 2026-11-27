## From signed area to the area of a triangle

A determinant is not only a test for invertibility; it is a signed area. Once you can read area from a determinant, three points become a triangle with no need to find a perpendicular height, and a straight line becomes a single equation that vanishes exactly on the line.

## 1. The parallelogram behind the triangle

Let $\vec u=(a,b)$ and $\vec v=(c,d)$ be two vectors in the plane. The parallelogram they span has **signed area**
$$
\begin{vmatrix}a&b\\c&d\end{vmatrix}=ad-bc.
$$
Its magnitude $|ad-bc|$ is the ordinary area, and its sign records the orientation of the ordered pair $(\vec u,\vec v)$: positive for an anticlockwise turn from $\vec u$ to $\vec v$, negative for a clockwise turn.

A triangle with two edges $\vec u$ and $\vec v$ is exactly half of that parallelogram. So its area is $\frac12|ad-bc|$ when one vertex is at the origin.

## 2. Three points, one determinant

For points $P_1(x_1,y_1)$, $P_2(x_2,y_2)$ and $P_3(x_3,y_3)$, translate the picture so $P_1$ is at the origin. The two edge vectors become $(x_2-x_1,\,y_2-y_1)$ and $(x_3-x_1,\,y_3-y_1)$. Writing their determinant and expanding gives the compact form
$$
\text{Area}=\frac12\left|
\begin{vmatrix}
x_1&y_1&1\\
x_2&y_2&1\\
x_3&y_3&1
\end{vmatrix}\right|.
$$

Expanding along the column of ones makes the familiar **shoelace formula** appear:
$$
\text{Area}=\frac12\bigl|x_1(y_2-y_3)+x_2(y_3-y_1)+x_3(y_1-y_2)\bigr|.
$$
To verify, expand the $3\times3$ determinant: the cofactors of the third column are $x_2y_3-x_3y_2$, $-(x_1y_3-x_3y_1)$ and $x_1y_2-x_2y_1$, whose sum is the expression above.

Two details matter. The factor $\frac12$ is there because a triangle is half a parallelogram, and the absolute value is there because area cannot be negative — the determinant itself is signed and changes sign if two vertices are swapped.

## 3. Collinearity

Three points are collinear exactly when the triangle they form has zero area:
$$
P_1,P_2,P_3\ \text{collinear}\iff
\begin{vmatrix}x_1&y_1&1\\x_2&y_2&1\\x_3&y_3&1\end{vmatrix}=0.
$$
Geometrically, the two edge vectors are parallel, so the parallelogram collapses to a line and its signed area vanishes. This is the same "zero determinant means collapse" idea met in the first module, now in a geometric setting.

## 4. Other uses of the same idea

**Line through two points.** A point $(x,y)$ lies on the line through $(x_1,y_1)$ and $(x_2,y_2)$ precisely when the three points are collinear:
$$
\begin{vmatrix}x&y&1\\x_1&y_1&1\\x_2&y_2&1\end{vmatrix}=0.
$$

**Area of a parallelogram.** If $P,Q,R$ are three vertices, the area is $\left|\begin{vmatrix}x_Q-x_P&y_Q-y_P\\x_R-x_P&y_R-y_P\end{vmatrix}\right|$ — the triangle formula without the factor $\frac12$.

**Area scaling.** Under a linear transformation with matrix $M$, every area is multiplied by $|\det(M)|$. A determinant of $2$ doubles areas; a determinant of $0$ crushes them all to zero.

**Volume in space.** The volume of a tetrahedron with vertices $(x_i,y_i,z_i)$, $i=1,\dots,4$, is $\frac16$ of the absolute value of the $4\times4$ determinant formed by adding a column of ones. This is the three-dimensional analogue of the triangle formula.

## 5. Worked example

Find the area of the triangle with vertices $P(1,1)$, $Q(3,2)$ and $R(2,5)$, and check whether $S(4,3)$ lies on the line $PQ$.

**Area.**
$$
\begin{vmatrix}1&1&1\\3&2&1\\2&5&1\end{vmatrix}
=1(2-5)-1(3-2)+1(15-4)=-3-1+11=7,
$$
so
$$
\text{Area}=\frac12|7|=\frac72=3.5\ \text{square units}.
$$

**Check by edge vectors.** From $P$, the edges are $\vec{PQ}=(2,1)$ and $\vec{PR}=(1,4)$. Their determinant is $2(4)-1(1)=7$, so the triangle area is $\frac12\cdot7=3.5$, agreeing.

**Does $S(4,3)$ lie on $PQ$?**
$$
\begin{vmatrix}4&3&1\\1&1&1\\3&2&1\end{vmatrix}
=4(1-2)-3(1-3)+1(2-3)=-4+6-1=1\ne0.
$$
The determinant is not zero, so $S$ is not on the line. (The order of the rows can change the sign of a determinant but never changes whether it is zero.)

**Sanity check.** The area $3.5$ is plausible: the triangle fits inside the rectangle from $x=1$ to $3$ and $y=1$ to $5$, whose area is $8$.

<learning-block type="mistake" title="Do not report a negative area">

The classic slip is to compute the determinant and call it the area, forgetting both the factor $\frac12$ and the absolute value. For the example above the determinant is $7$, while the area is $3.5$; swapping two vertices would give $-7$ although the area is unchanged. A second error is expanding along the wrong column after inserting the ones — use any one column consistently, and remember that transposing the whole matrix leaves the determinant unchanged, so the ones may also be placed in a row instead.

</learning-block>

## Try it yourself

**A.** Find the area of the triangle with vertices $(0,0)$, $(4,0)$ and $(2,3)$.

<details><summary>Show the reasoning</summary>

$\begin{vmatrix}0&0&1\\4&0&1\\2&3&1\end{vmatrix}=1(4\cdot3-0\cdot2)=12$, so the area is $\frac12\cdot12=6$. The same answer comes from base $4$ and height $3$.

</details>

**B.** Decide whether $(1,1)$, $(2,2)$ and $(3,3)$ are collinear.

<details><summary>Show the reasoning</summary>

$\begin{vmatrix}1&1&1\\2&2&1\\3&3&1\end{vmatrix}=1(2-3)-1(2-3)+1(6-6)=-1+1+0=0$. The determinant vanishes, so the points are collinear — as expected, all three lie on $y=x$.

</details>

**C.** Use a determinant to find the equation of the line through $(1,2)$ and $(3,4)$.

<details><summary>Show the reasoning</summary>

$\begin{vmatrix}x&y&1\\1&2&1\\3&4&1\end{vmatrix}=x(2-4)-y(1-3)+(4-6)=-2x+2y-2=0$. Dividing by $-2$ gives $y=x+1$, which both points satisfy.

</details>

## Remember

- Area of a triangle $=\frac12\left|\begin{vmatrix}x_1&y_1&1\\x_2&y_2&1\\x_3&y_3&1\end{vmatrix}\right|$; the determinant is signed area, the area is not.
- A zero determinant for three points means they are collinear.
- The same determinant with $(x,y,1)$ as the first row gives the equation of a line through two fixed points.
- Under a transformation $M$, areas scale by $|\det(M)|$; in space, tetrahedron volume uses a $4\times4$ determinant and a factor $\frac16$.
- Expand along a column of ones to recover the shoelace formula.

Determinants also decide how many solutions a system of linear equations has. The final concept module combines the determinant with the adjoint to give **Cramer's rule** and a consistency test.
