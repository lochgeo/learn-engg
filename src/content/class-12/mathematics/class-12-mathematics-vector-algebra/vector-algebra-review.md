## Your study plan for today

Vector algebra is a small set of operations used in many disguises. A focused pass takes about **2 hours 30 minutes**:

1. **Vectors and types** — 20 min
2. **Addition and scalar multiplication** — 20 min
3. **Dot product and projections** — 25 min
4. **Cross product and applications** — 25 min
5. **Mixed vector problems** — 25 min
6. **This mastery check** — 25 min

After each module, close the notes and solve one problem from memory. The test is not whether you recognise the formula, but whether you can choose the right product and justify the sign, magnitude and direction.

After this pass, use the optional **JEE Main timed practice** module for a $50$-minute mixed paper. Do it only when the individual tools feel steady.

## First choose the tool

| Clue in the question | Start with | Check before using it |
| --- | --- | --- |
| Displacement from $A$ to $B$ | $\overrightarrow{AB}=\vec b-\vec a$ | Subtract initial from terminal. |
| Resultant / sum / difference | Component addition | Keep $\hat i,\hat j,\hat k$ separate. |
| Point dividing a line segment | Section formula | Put the weight on the opposite endpoint. |
| Angle, alignment, work, perpendicularity | Dot product | $\vec a\cdot\vec b=|\vec a||\vec b|\cos\theta$. |
| Component of $\vec a$ along $\vec b$ | Projection | Divide by $|\vec b|$, not $|\vec a|$. |
| Vector perpendicular to two vectors | Cross product | Verify with dot products against both. |
| Area of parallelogram or triangle | $|\vec a\times\vec b|$ or $\frac{1}{2}|\vec a\times\vec b|$ | Use adjacent sides, not diagonals unless converted. |
| Volume, coplanarity, parallelepiped | Scalar triple product | $|[\vec a,\vec b,\vec c]|$ is a scalar volume. |

## Mastery check

Try each question without looking at the answer first. Recompute any determinant before trusting it.

### 1. Magnitude and unit vector

Find the magnitude of $\vec a=3\hat i-6\hat j+2\hat k$ and the unit vector in its direction.

<details>
<summary>Answer and reasoning</summary>

$|\vec a|=\sqrt{3^2+(-6)^2+2^2}=\sqrt{49}=7$. Therefore $\hat a=\frac{\vec a}{7}=\frac{3}{7}\hat i-\frac{6}{7}\hat j+\frac{2}{7}\hat k$.

</details>

### 2. Section formula

Find the position vector of the point which divides the join of $A(\vec a)=2\hat i-\hat j+3\hat k$ and $B(\vec b)=5\hat i+2\hat j-3\hat k$ internally in the ratio $1:2$.

<details>
<summary>Answer and reasoning</summary>

For internal division $AR:RB=1:2$, the weight on $\vec b$ is $1$ and on $\vec a$ is $2$:

$$
\vec r=\frac{1\cdot\vec b+2\cdot\vec a}{1+2}=\frac{(5+4)\hat i+(2-2)\hat j+(-3+6)\hat k}{3}=3\hat i+0\hat j+\hat k.
$$

</details>

### 3. Angle between vectors

Find the angle between $\vec a=\hat i+2\hat j+2\hat k$ and $\vec b=2\hat i-\hat j+2\hat k$.

<details>
<summary>Answer and reasoning</summary>

$\vec a\cdot\vec b=2-2+4=4$. Magnitudes are $|\vec a|=\sqrt{1+4+4}=3$ and $|\vec b|=\sqrt{4+1+4}=3$. Thus $\cos\theta=\frac{4}{9}$ and $\theta=\cos^{-1}(4/9)$.

</details>

### 4. Projection

Find the projection of $\vec a=2\hat i+3\hat j+2\hat k$ on $\vec b=\hat i+2\hat j+\hat k$.

<details>
<summary>Answer and reasoning</summary>

$\vec a\cdot\vec b=2+6+2=10$, $|\vec b|=\sqrt{1+4+1}=\sqrt{6}$. The projection is $\frac{10}{\sqrt{6}}=\frac{5\sqrt{6}}{3}$.

</details>

### 5. Perpendicularity condition

Find the value of $\lambda$ for which $\vec a=2\hat i+\lambda\hat j+\hat k$ and $\vec b=\hat i-2\hat j+3\hat k$ are perpendicular.

<details>
<summary>Answer and reasoning</summary>

Perpendicular non-zero vectors have dot product zero: $\vec a\cdot\vec b=2-2\lambda+3=5-2\lambda=0$. Therefore $\lambda=\frac{5}{2}$.

</details>

### 6. Cross product and area

Find the area of the parallelogram whose adjacent sides are $\vec a=\hat i-\hat j+3\hat k$ and $\vec b=2\hat i-7\hat j+\hat k$.

<details>
<summary>Answer and reasoning</summary>

$\vec a\times\vec b=\begin{vmatrix}\hat i&\hat j&\hat k\\1&-1&3\\2&-7&1\end{vmatrix}=\hat i(-1+21)-\hat j(1-6)+\hat k(-7+2)=20\hat i+5\hat j-5\hat k$.

Magnitude $=\sqrt{400+25+25}=\sqrt{450}=15\sqrt{2}$. The parallelogram area is $15\sqrt{2}$ square units.

</details>

### 7. Scalar triple product

Find the volume of the parallelepiped with coterminous edges $\vec a=2\hat i-3\hat j+4\hat k$, $\vec b=\hat i+2\hat j-\hat k$, $\vec c=3\hat i-\hat j+2\hat k$.

<details>
<summary>Answer and reasoning</summary>

$[\vec a,\vec b,\vec c]=\begin{vmatrix}2&-3&4\\1&2&-1\\3&-1&2\end{vmatrix}=2(4-1)-(-3)(2+3)+4(-1-6)=2(3)+3(5)+4(-7)=6+15-28=-7$.

Volume $=|{-7}|=7$ cubic units.

</details>

### 8. Vector perpendicular to a plane

Find a unit vector perpendicular to the plane containing $\vec a=2\hat i+\hat j+\hat k$ and $\vec b=\hat i-\hat j+2\hat k$.

<details>
<summary>Answer and reasoning</summary>

$\vec a\times\vec b=\begin{vmatrix}\hat i&\hat j&\hat k\\2&1&1\\1&-1&2\end{vmatrix}=\hat i(2+1)-\hat j(4-1)+\hat k(-2-1)=3\hat i-3\hat j-3\hat k$.

Magnitude $=\sqrt{9+9+9}=3\sqrt{3}$. A unit normal is $\frac{3\hat i-3\hat j-3\hat k}{3\sqrt{3}}=\frac{\hat i-\hat j-\hat k}{\sqrt{3}}$ (the opposite is also correct).

</details>

### 9. Coplanarity

Show that the vectors $\vec a=\hat i+2\hat j+3\hat k$, $\vec b=2\hat i+3\hat j+\hat k$, $\vec c=3\hat i+\hat j+2\hat k$ are coplanar.

<details>
<summary>Answer and reasoning</summary>

Compute $[\vec a,\vec b,\vec c]=\begin{vmatrix}1&2&3\\2&3&1\\3&1&2\end{vmatrix}=1(6-1)-2(4-3)+3(2-9)=5-2-21=-18$.

This is not zero, so the vectors are **not** coplanar. The correct conclusion is non-coplanar. (This is a useful reminder: always compute before concluding.)

If instead the third vector were $\vec c=\hat i+\hat j-2\hat k$, then $[\vec a,\vec b,\vec c]=\begin{vmatrix}1&2&3\\2&3&1\\1&1&-2\end{vmatrix}=1(-6-1)-2(-4-1)+3(2-3)=-7+10-3=0$, and those vectors would be coplanar.

</details>

### 10. Mixed problem

If $|\vec a|=3$, $|\vec b|=4$ and $|\vec a\times\vec b|=6$, find $\vec a\cdot\vec b$.

<details>
<summary>Answer and reasoning</summary>

From $|\vec a\times\vec b|=|\vec a||\vec b|\sin\theta$, we get $12\sin\theta=6$, so $\sin\theta=\frac{1}{2}$. Since $0\le\theta\le\pi$, $\cos\theta=\pm\frac{\sqrt{3}}{2}$.

Therefore $\vec a\cdot\vec b=|\vec a||\vec b|\cos\theta=\pm12\cdot\frac{\sqrt{3}}{2}=\pm6\sqrt{3}$.

Both signs are possible unless the question gives extra information about whether the angle is acute or obtuse.

</details>

## Self-check

You are ready to move on when you can:

- find magnitude, direction ratios/cosines and unit vectors without sign errors;
- use the section formula with the correct weights on the correct endpoints;
- decide quickly whether a question needs dot, cross or scalar triple product;
- compute a $3\times3$ determinant carefully and verify cross products by dotting with the original vectors;
- interpret a zero or non-zero scalar triple product as coplanarity or volume;
- check every numerical answer for magnitude, sign, units and geometric plausibility.