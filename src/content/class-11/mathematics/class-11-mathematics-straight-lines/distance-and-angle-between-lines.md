## Shortest routes and tilts

Two questions follow naturally once a line is an equation. How far is a given point from the line — meaning the *shortest* distance, along a segment perpendicular to it? And at what angle do two lines cross? Both answers can be read from the coefficients, without drawing a scale diagram. The same perpendicular idea will also give us angle bisectors later in the chapter.

## 1. Perpendicular distance from a point to a line

Let the line be $Ax+By+C=0$ and the point $P(x_1,y_1)$. The shortest segment from $P$ to the line is perpendicular to it, so its direction is the normal vector $(A,B)$. Starting at $P$, move a signed distance parameter $t$ along that normal:

$$
F=(x_1-At,\; y_1-Bt).
$$

Choose $t$ so that $F$ lies on the line:

$$
A(x_1-At)+B(y_1-Bt)+C=0
\ \Longrightarrow\
t=\frac{Ax_1+By_1+C}{A^2+B^2}.
$$

The length $PF$ is $|t|\sqrt{A^2+B^2}$, hence

$$
\boxed{\;d=\frac{|Ax_1+By_1+C|}{\sqrt{A^2+B^2}}\;}.
$$

The absolute value is essential: distance is non-negative, while $Ax_1+By_1+C$ can have either sign (its sign tells which side of the line the point lies on). If $d=0$, the point is on the line. Setting $x_1=y_1=0$ recovers the distance $\frac{|C|}{\sqrt{A^2+B^2}}$ from the origin found earlier.

## 2. Distance between parallel lines

Write two parallel lines with **the same** $A$ and $B$: $Ax+By+C_1=0$ and $Ax+By+C_2=0$. Any point on the first satisfies $Ax+By=-C_1$, so applying the formula above gives

$$
\boxed{\;d=\frac{|C_1-C_2|}{\sqrt{A^2+B^2}}\;}.
$$

The lines must first be scaled so the coefficients of $x$ and $y$ match: $3x-4y+6=0$ and $6x-8y-28=0$ are parallel, but the second must be halved to $3x-4y-14=0$ before subtracting constants.

## 3. Angle between two lines

If two lines have inclinations $\theta_1,\theta_2$ and slopes $m_1=\tan\theta_1$, $m_2=\tan\theta_2$, then the angle $\theta$ between them satisfies $\theta=\theta_2-\theta_1$ and

$$
\tan\theta=\frac{\tan\theta_2-\tan\theta_1}{1+\tan\theta_1\tan\theta_2}.
$$

Taking the acute angle gives the standard result

$$
\boxed{\;\tan\theta=\left|\frac{m_1-m_2}{1+m_1m_2}\right|\;}.
$$

If $1+m_1m_2=0$ the tangent is infinite and the lines are perpendicular ($m_1m_2=-1$). If $m_1=m_2$ the numerator is zero and the angle is $0^\circ$ — parallel lines.

For lines in general form the same calculation yields

$$
\tan\theta=\frac{|A_1B_2-A_2B_1|}{|A_1A_2+B_1B_2|},
$$

so parallel lines satisfy $A_1B_2=A_2B_1$ and perpendicular lines satisfy $A_1A_2+B_1B_2=0$. This form handles vertical lines, where slopes do not exist.

## 4. Fully worked example

Take the point $P(2,-3)$ and the lines $L:3x-4y+6=0$ and $L':3x-4y-14=0$.

**(i) Distance from $P$ to $L$.**

$$
d=\frac{|3(2)-4(-3)+6|}{\sqrt{3^2+4^2}}=\frac{|6+12+6|}{5}=\frac{24}{5}.
$$

**(ii) Distance between $L$ and $L'$.**

$$
d=\frac{|6-(-14)|}{5}=\frac{20}{5}=4.
$$

**(iii) Angle between $y=2x+1$ and $y=-x+3$.**

$$
\tan\theta=\left|\frac{2-(-1)}{1+2(-1)}\right|=\left|\frac{3}{-1}\right|=3,
\qquad \theta=\tan^{-1}3\approx71.6^\circ.
$$

**Sanity check.** The point $(2,3)$ lies on $L$ since $3(2)-4(3)+6=0$; its distance from $P(2,-3)$ is $6$, which is larger than the perpendicular distance $24/5=4.8$, as a shortest route must be. For the angle, the inclinations are $\tan^{-1}2\approx63.4^\circ$ and $135^\circ$, differing by about $71.6^\circ$. ✓

<learning-block type="mistake" title="Two distance traps">

First, dropping the absolute value can produce a negative "distance"; remember the numerator measures a signed offset and the formula measures a length. Second, subtracting constants from two parallel lines before matching their coefficients: using $|6-(-28)|/\sqrt{3^2+4^2}$ on $6x-8y-28=0$ gives a wrong answer. Scale both equations so their $A$ and $B$ are identical first.

</learning-block>

## Try it yourself

**A.** Find the distance from $(1,2)$ to $4x+3y-10=0$.

<details><summary>Show the reasoning</summary>

$d=\frac{|4(1)+3(2)-10|}{\sqrt{16+9}}=\frac{|4+6-10|}{5}=0$. The point lies on the line.

</details>

**B.** Find the distance between $2x-y+3=0$ and $2x-y-7=0$.

<details><summary>Show the reasoning</summary>

The coefficients already match, so $d=\frac{|3-(-7)|}{\sqrt{2^2+(-1)^2}}=\frac{10}{\sqrt5}=2\sqrt5\approx4.47$.

</details>

**C.** Find the angle between $y=x$ and $y=\sqrt3\,x$.

<details><summary>Show the reasoning</summary>

$\tan\theta=\left|\frac{1-\sqrt3}{1+\sqrt3}\right|=\frac{\sqrt3-1}{\sqrt3+1}=2-\sqrt3$, and $\tan15^\circ=2-\sqrt3$, so $\theta=15^\circ$. This matches the inclinations $45^\circ$ and $60^\circ$.

</details>

## Remember

- Point-to-line distance: $\frac{|Ax_1+By_1+C|}{\sqrt{A^2+B^2}}$; zero means the point is on the line.
- Parallel-line distance: $\frac{|C_1-C_2|}{\sqrt{A^2+B^2}}$, only after matching coefficients.
- Acute angle: $\tan\theta=\left|\frac{m_1-m_2}{1+m_1m_2}\right|$; a zero denominator means $90^\circ$.
- In general form, parallel means $A_1B_2=A_2B_1$ and perpendicular means $A_1A_2+B_1B_2=0$.
- Next: bundle all lines satisfying a shared condition into a one-parameter family.
