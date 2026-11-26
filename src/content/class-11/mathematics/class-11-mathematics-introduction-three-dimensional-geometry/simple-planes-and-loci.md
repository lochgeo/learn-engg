## From points to whole surfaces

A single linear equation in $x$ and $y$ draws a line on a flat sheet. In space the same kind of equation, $ax + by + cz = d$, draws a **plane**: one linear condition leaves two degrees of freedom, and two free coordinates trace out a flat surface. This module reads the simplest planes directly from their equations, then uses the distance formula to write the equations of common loci.

## 1. The coordinate planes and their parallels

Holding one coordinate fixed gives a plane parallel to the plane determined by the other two axes:

| Equation | Surface | Distance from the corresponding coordinate plane |
| --- | --- | --- |
| $x = 0$ | the $YZ$ plane | $0$ |
| $x = k$ | plane parallel to the $YZ$ plane | $\lvert k\rvert$ |
| $y = k$ | plane parallel to the $ZX$ plane | $\lvert k\rvert$ |
| $z = k$ | plane parallel to the $XY$ plane | $\lvert k\rvert$ |

Why is $x = k$ a plane and not a line? The condition fixes only $x$; $y$ and $z$ may take any values. All such points form a flat sheet parallel to the $YZ$ plane, shifted $k$ units along the $x$-direction. The case $k = 0$ is the $YZ$ plane itself.

More generally $ax + by + cz = d$, with $a$, $b$, $c$ not all zero, is a plane. The coefficients $(a, b, c)$ give a direction perpendicular to the plane, called a **normal**. For now it is enough to read off the intercepts: set two variables to zero and solve for the third.

## 2. A locus from a condition

A **locus** is the set of all points satisfying a geometric condition. To find its equation, let $(x, y, z)$ be a general point of the set, translate the condition into algebra and simplify. The distance formula does most of the work.

**Sphere.** The set of points at distance $r$ from a fixed centre $(h, k, l)$ satisfies

$$(x - h)^2 + (y - k)^2 + (z - l)^2 = r^2.$$

Expanded, the same equation appears with an $x^2 + y^2 + z^2$ term, which is how a sphere is recognised in general form.

**Equidistant from two points.** If $PA = PB$ for fixed $A(x_1,y_1,z_1)$ and $B(x_2,y_2,z_2)$, then $PA^2 = PB^2$:

$$(x-x_1)^2 + (y-y_1)^2 + (z-z_1)^2 = (x-x_2)^2 + (y-y_2)^2 + (z-z_2)^2.$$

The $x^2$, $y^2$ and $z^2$ terms cancel on both sides, leaving a **linear** equation. The locus is therefore a plane — the perpendicular bisector plane of $AB$. Its normal is parallel to $(x_2-x_1, y_2-y_1, z_2-z_1)$, the direction of $AB$.

## 3. Intersections and quick checks

Two planes that are not parallel meet in a line. For instance, $x = 0$ and $y = 0$ together force $x = y = 0$ while $z$ is free, so their intersection is the $z$-axis. A plane and a sphere can meet in a circle; if the distance from the sphere's centre to the plane exceeds the radius they do not meet at all.

A useful habit is to test obvious points. If a plane passes through the origin, substituting $(0,0,0)$ must give equality. For a sphere, substituting its centre $(h,k,l)$ into the completed form $(x-h)^2+(y-k)^2+(z-l)^2$ must give $0$; substituting the same point into the expanded general form gives $-r^2$, since the centre is $r$ units away from every point on the sphere.

## 4. Worked examples

**Example 1 — an equidistant locus.** Find the set of points equidistant from $A(1,0,0)$ and $B(0,1,0)$.

$$(x-1)^2 + y^2 + z^2 = x^2 + (y-1)^2 + z^2.$$

Expanding and cancelling $x^2$, $y^2$, $z^2$ and the constants gives $-2x = -2y$, so the locus is the plane

$$x = y.$$

Sanity check: the midpoint of $AB$ is $(1/2, 1/2, 0)$, which satisfies $x = y$; and the plane's normal $(1, -1, 0)$ is parallel to the direction of $AB$, namely $(-1, 1, 0)$. Both checks confirm a perpendicular bisector plane.

**Example 2 — intercepts of a plane.** For $2x + 3y - z = 6$:

- with $y = z = 0$, $x = 3$, giving the intercept $(3,0,0)$;
- with $x = z = 0$, $y = 2$, giving the intercept $(0,2,0)$;
- with $x = y = 0$, $z = -6$, giving the intercept $(0,0,-6)$.

Substituting each point back verifies the equation: $2(3) = 6$, $3(2) = 6$ and $-(-6) = 6$.

<learning-block type="mistake" title="Thinking x = k is a line">

In two dimensions $x = k$ draws a vertical line. In three dimensions $z$ is also free, so $x = k$ draws a plane parallel to the $YZ$ plane. Whenever a single linear equation in space seems to describe a line, ask which coordinate has been forgotten: a line needs two simultaneous linear equations, not one.

</learning-block>

## Try it yourself

**A.** Describe the surface $z = -4$ and give its distance from the $XY$ plane.

<details><summary>Show the reasoning</summary>

It is a plane parallel to the $XY$ plane, $4$ units below it on the negative $z$ side.

</details>

**B.** Write the equation of the sphere with centre $(1, -2, 3)$ and radius $5$.

<details><summary>Show the reasoning</summary>

$(x-1)^2 + (y+2)^2 + (z-3)^2 = 25$. The point $(1,-2,8)$ gives $0 + 0 + 25 = 25$, confirming it lies on the sphere.

</details>

**C.** Find the locus of points equidistant from $(2,0,0)$ and $(0,2,0)$.

<details><summary>Show the reasoning</summary>

$(x-2)^2 + y^2 + z^2 = x^2 + (y-2)^2 + z^2$ simplifies to $-4x = -4y$, that is the plane $x = y$.

</details>

## Remember

- A single linear equation $ax+by+cz=d$ describes a plane; $x=k$, $y=k$, $z=k$ are the simplest examples.
- The coordinate $x$ is zero on the $YZ$ plane, $y$ on the $ZX$ plane and $z$ on the $XY$ plane.
- A sphere centred at $(h,k,l)$ with radius $r$ has equation $(x-h)^2+(y-k)^2+(z-l)^2=r^2$.
- Equating squared distances from two points gives a plane perpendicular to the segment joining them.

These four tools — coordinates, distance and section, direction, and planes and loci — make up the whole toolkit. The practice module next shows how to choose among them without prompts.
