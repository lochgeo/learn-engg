## When one integral is not enough

The first two modules gave two reliable tools: area under a curve and area between two curves. Real problems often combine them. The boundary of a region may change at a point, the top curve may switch, or the same region may be simple in $y$ but awkward in $x$. Mixed area problems are about **choosing a description that matches the region**.

The mathematics does not change. You still add areas of thin strips. What changes is the bookkeeping: where the region starts, where it ends, and which graph forms each boundary.

## 1. A strategy for mixed regions

1. **Draw or mentally trace the boundary.** Identify which curves and lines actually enclose the region.
2. **Find intersection points.** Solve the relevant equations in pairs.
3. **Decide the slicing direction.** Use vertical strips ($dx$) if each strip runs from a lower $y$ to an upper $y$; use horizontal strips ($dy$) if each runs from a left $x$ to a right $x$.
4. **Split where the boundary rule changes.** A new upper curve, a new lower curve, or a new left/right boundary means a new integral.
5. **Add the positive areas.** Check the result against the size and position of the region.

<learning-block type="concept" title="Split at boundary changes, not at convenient numbers">

The limits of a mixed problem come from the geometry of the region. Split the integral only where the formula for the strip height or width changes, such as an intersection point or a curve crossing the axis. An unnecessary split is harmless work; a missing split gives a wrong area.

</learning-block>

## 2. Using symmetry

Symmetry is a check and a shortcut. If the region is symmetric about the $y$-axis, you may compute the area on $[0,a]$ and double it, provided the integrand and limits reflect that symmetry. If the region is symmetric about the $x$-axis, a horizontal or vertical half-region can be doubled. Always state the symmetry you are using, because symmetry in the graph does not automatically mean symmetry in every algebraic expression.

## 3. Worked example: a region with two different upper boundaries

Find the area of the region in the first quadrant enclosed by the $x$-axis, the line $y=x$, and the circle $x^2+y^2=32$.

**Step 1: Understand the boundaries.** The circle has radius $\sqrt{32}=4\sqrt{2}$. In the first quadrant, its upper boundary is $y=\sqrt{32-x^2}$. The line $y=x$ meets the circle where $x^2+x^2=32$, so $x=4$ (taking the first-quadrant point). The $x$-axis is $y=0$.

**Step 2: Choose the split.** For $0\le x\le 4$, the region below the line and above the axis is bounded above by $y=x$. For $4\le x\le 4\sqrt{2}$, the region below the circle and above the axis is bounded above by $y=\sqrt{32-x^2}$. The upper boundary changes at $x=4$, so we split there.

**Step 3: Evaluate the two areas.**

$$
A_1=\int_0^4 x\,dx=\left[\frac{x^2}{2}\right]_0^4=8.
$$

For the circular part,

$$
A_2=\int_4^{4\sqrt{2}}\sqrt{32-x^2}\,dx.
$$

Using $\int \sqrt{a^2-x^2}\,dx=\frac{x}{2}\sqrt{a^2-x^2}+\frac{a^2}{2}\sin^{-1}\!\left(\frac{x}{a}\right)$ with $a^2=32$,

$$
A_2=\left[\frac{x}{2}\sqrt{32-x^2}+16\sin^{-1}\!\left(\frac{x}{4\sqrt{2}}\right)\right]_4^{4\sqrt{2}}.
$$

At $x=4\sqrt{2}$, this is $0+16\sin^{-1}(1)=8\pi$. At $x=4$, it is $\frac{4}{2}\sqrt{16}+16\sin^{-1}\!\left(\frac{1}{\sqrt{2}}\right)=8+4\pi$. Therefore

$$
A_2=8\pi-(8+4\pi)=4\pi-8.
$$

**Step 4: Add the pieces.**

$$
A=A_1+A_2=8+(4\pi-8)=4\pi\ \text{square units}.
$$

**Sanity check.** The region is exactly the sector of a circle of radius $4\sqrt{2}$ with central angle $\pi/4$. Its area is $\frac{1}{2}r^2\theta=\frac{1}{2}(32)\left(\frac{\pi}{4}\right)=4\pi$, which matches perfectly.

<learning-block type="mistake" title="Using one top curve over the whole interval">

If you integrate $\sqrt{32-x^2}-0$ from $x=0$ to $x=4\sqrt{2}$, you get the quarter circle, not the region bounded by the line $y=x$. If you integrate $x$ from $0$ to $4\sqrt{2}$, you leave the circle and describe a different region. In mixed problems, the boundary function can change mid-region; the split is mandatory.

</learning-block>

## 4. Another mixed pattern: horizontal strips save work

The same region can have different computational costs depending on the slicing direction. For the region between $x=y^2$ and $x=2-y$, vertical strips would need separate integrals above and below the $x$-axis because the parabola gives two $y$-values for one $x$. Horizontal strips give one integral from the lower intersection ordinate to the upper one: $\int_{-2}^{1}\bigl[(2-y)-y^2\bigr]\,dy$. The value is

$$
\left[2y-\frac{y^2}{2}-\frac{y^3}{3}\right]_{-2}^{1}=\left(2-\frac{1}{2}-\frac{1}{3}\right)-\left(-4-2+\frac{8}{3}\right)=\frac{9}{2}\ \text{square units}.
$$

The lesson is not "always use $dy$"; it is "choose the strip that keeps the boundary description simple".

## Try it yourself

**1.** Find the area of the region bounded by $y=x^2$ and $y=\lvert x\rvert$.

<details><summary>Show the reasoning</summary>

The curves intersect where $x^2=\lvert x\rvert$. For $x\ge 0$, $x^2=x$ gives $x=0,1$; for $x<0$, $x^2=-x$ gives $x=-1$. The region is symmetric about the $y$-axis, and on $[0,1]$ the line $y=x$ is above $y=x^2$. Thus

$$
A=2\int_0^1 (x-x^2)\,dx=2\left[\frac{x^2}{2}-\frac{x^3}{3}\right]_0^1=2\left(\frac{1}{6}\right)=\frac{1}{3}\ \text{square units}.
$$

</details>

**2.** Find the area in the first quadrant bounded by $y=x^2$, $y=4$, and the $y$-axis.

<details><summary>Show the reasoning</summary>

In the first quadrant, $y=x^2$ meets $y=4$ at $x=2$. Using horizontal strips, $x=\sqrt{y}$ runs from the $y$-axis to the parabola: 

$$
A=\int_0^4 \sqrt{y}\,dy=\left[\frac{2}{3}y^{3/2}\right]_0^4=\frac{2}{3}(8)=\frac{16}{3}\ \text{square units}.
$$

Vertical strips give the same result: $\int_0^2 (4-x^2)\,dx=\frac{16}{3}$.

</details>

**3.** Find the area enclosed by $y=x^2+2$, $y=x$, $x=0$, and $x=3$.

<details><summary>Show the reasoning</summary>

On $[0,3]$, $x^2+2\ge 2$ while $x\le 3$, and in fact $x^2-x+2=(x-\tfrac12)^2+\tfrac74>0$, so $x^2+2$ is always above $y=x$. Therefore

$$
A=\int_0^3 \bigl[(x^2+2)-x\bigr]\,dx=\left[\frac{x^3}{3}+2x-\frac{x^2}{2}\right]_0^3=9+6-\frac{9}{2}=\frac{21}{2}\ \text{square units}.
$$

</details>

## Remember

- Mixed area problems use the same strip idea, but the boundary description may change inside the region.
- Find all relevant intersection points and test which boundary is upper/lower or right/left on each subinterval.
- Choose $dx$ or $dy$ to minimise splits; both methods should agree when set up correctly.
- Symmetry can halve the work, but only after you confirm the region and the integrand are truly symmetric.
- The practice module next will help you choose the right setup quickly across all three area situations.

