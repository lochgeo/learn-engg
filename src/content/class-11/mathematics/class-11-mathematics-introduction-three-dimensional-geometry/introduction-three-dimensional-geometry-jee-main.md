## JEE Main sprint: how to use this set

This is a **50-minute, no-notes** paper to attempt after the chapter lessons. Spend roughly 15 minutes on Section A, 15 on Section B, 10 on Section C and 10 on Section D. Mark anything that passes 90 seconds and return to it; one calculation should not consume the paper.

Before writing, name the tool: a sign pattern, a distance formula, a section formula, normalised direction ratios, a product sum, or a locus equation. This is a pure geometry paper, so no physical constant such as $g$ is needed.

## Conditions and formula sheet

| Clue | Start with | Check before trusting it |
| --- | --- | --- |
| Point $P(x,y,z)$ | $|x|$, $|y|$, $|z|$ from $YZ$, $ZX$, $XY$ | Match the sign pattern to the octant table. |
| Distance from origin | $\sqrt{x^2+y^2+z^2}$ | Pythagoras needs rectangular axes. |
| Distance $AB$ | $\sqrt{(x_2-x_1)^2+(y_2-y_1)^2+(z_2-z_1)^2}$ | Use differences, never a sum of coordinates. |
| Internal division $m:n$ | $\frac{m x_2+n x_1}{m+n}$ | The weight $m$ multiplies the far point $B$. |
| External division $m:n$ | $\frac{m x_2-n x_1}{m-n}$ | Require $m \ne n$. |
| Direction cosines | $l=\cos\alpha$, $m=\cos\beta$, $n=\cos\gamma$ | $l^2+m^2+n^2=1$. |
| Ratios $(a,b,c)$ | Divide by $\sqrt{a^2+b^2+c^2}$ | Ratios are not unique; cosines are signed. |
| Angle between lines | $\frac{a_1a_2+b_1b_2+c_1c_2}{\sqrt{a_1^2+b_1^2+c_1^2}\sqrt{a_2^2+b_2^2+c_2^2}}$ | Report the acute angle. |
| Plane $ax+by+cz=d$ | Set two coordinates to zero for intercepts | One linear equation is a plane, not a line. |
| Sphere, centre $(h,k,l)$ | $(x-h)^2+(y-k)^2+(z-l)^2=r^2$ | The centre gives $0$ in completed form, $-r^2$ in general form. |

<learning-block type="mistake" title="Three instant sanity checks">

Direction cosines whose squares do not add to one are wrong. A point found by internal division must lie between its endpoints. A locus from equating two squared distances must be linear — if $x^2$ survives, expand and cancel again.

</learning-block>

## Section A — 10 rapid MCQs

### 1. Distance from the origin

The distance of $(2, -3, 6)$ from the origin is:

- A. $5$
- B. $6$
- C. $7$
- D. $9$

<details><summary>Answer</summary>

**C.** $\sqrt{2^2+(-3)^2+6^2} = \sqrt{4+9+36} = \sqrt{49} = 7$. Choices A and B are just single coordinate magnitudes.

</details>

### 2. A point on an axis

Which point lies on the $z$-axis?

- A. $(0, 5, 0)$
- B. $(5, 0, 0)$
- C. $(0, 0, 5)$
- D. $(5, 5, 0)$

<details><summary>Answer</summary>

**C.** On the $z$-axis the $x$ and $y$ coordinates are both zero, leaving $(0,0,z)$.

</details>

### 3. Direction cosines from two points

The line joining $(1,2,3)$ and $(4,6,3)$ has direction cosines:

- A. $\left(\frac35, \frac45, 0\right)$
- B. $\left(\frac15, \frac25, 0\right)$
- C. $\left(\frac35, \frac45, \frac35\right)$
- D. $\left(\frac45, \frac35, 0\right)$

<details><summary>Answer</summary>

**A.** Ratios $(3,4,0)$ have length $5$, giving $(3/5, 4/5, 0)$. Choice C fails the check $l^2+m^2+n^2=1$, and the zero cosine is correct because both points have the same $z$-coordinate.

</details>

### 4. The unit relation

Which quantities always satisfy $l^2 + m^2 + n^2 = 1$?

- A. Direction ratios of a line
- B. Direction cosines of a line
- C. Coordinates of any point in space
- D. Components of a vector of length $2$

<details><summary>Answer</summary>

**B.** Dividing a vector by its own length produces a unit vector, so the sum of squares of its direction cosines is one. Ratios may be scaled freely and need not obey this.

</details>

### 5. Distance between two points

The distance between $(2,1,2)$ and $(6,4,14)$ is:

- A. $9$
- B. $11$
- C. $13$
- D. $15$

<details><summary>Answer</summary>

**C.** $\sqrt{4^2+3^2+12^2} = \sqrt{16+9+144} = \sqrt{169} = 13$.

</details>

### 6. Midpoint

The midpoint of $(2,-1,4)$ and $(6,3,-2)$ is:

- A. $(4, 1, 1)$
- B. $(4, 2, 1)$
- C. $(2, 1, 3)$
- D. $(8, 2, 2)$

<details><summary>Answer</summary>

**A.** Average each coordinate: $(2+6)/2 = 4$, $(-1+3)/2 = 1$, $(4-2)/2 = 1$.

</details>

### 7. Recognising a plane

Which equation represents a plane parallel to the $XY$ plane?

- A. $x = 2$
- B. $y = 2$
- C. $z = 2$
- D. $x + y = 2$

<details><summary>Answer</summary>

**C.** The $XY$ plane is $z=0$; fixing $z=2$ gives a parallel plane. Options A and B are parallel to the $YZ$ and $ZX$ planes.

</details>

### 8. Perpendicular directions

Which set of direction ratios is perpendicular to a line with ratios $(2, -1, 3)$?

- A. $(1, 2, 0)$
- B. $(2, -1, 3)$
- C. $(1, 1, 1)$
- D. $(3, -3, 3)$

<details><summary>Answer</summary>

**A.** $2(1) + (-1)(2) + 3(0) = 0$. The other choices give $14$, $4$ and $18$.

</details>

### 9. Reading a sphere

The equation $(x-1)^2+(y+2)^2+(z-3)^2 = 25$ describes:

- A. a sphere with centre $(1,2,3)$ and radius $5$
- B. a sphere with centre $(1,-2,3)$ and radius $5$
- C. a sphere with centre $(-1,2,-3)$ and radius $5$
- D. a sphere with centre $(1,-2,3)$ and radius $25$

<details><summary>Answer</summary>

**B.** Compare with $(x-h)^2+(y-k)^2+(z-l)^2=r^2$: the centre is $(1,-2,3)$ and $r=\sqrt{25}=5$, not $25$.

</details>

### 10. Internal ratio

The point dividing $(0,0,0)$ and $(6,9,12)$ internally in the ratio $1:2$ is:

- A. $(2, 3, 4)$
- B. $(4, 6, 8)$
- C. $(3, 4.5, 6)$
- D. $(6, 9, 12)$

<details><summary>Answer</summary>

**A.** $(1\cdot6+2\cdot0)/3 = 2$, $(1\cdot9)/3 = 3$, $(1\cdot12)/3 = 4$. Its distance from the origin is $\sqrt{29}$ and from $(6,9,12)$ is $2\sqrt{29}$, confirming $1:2$.

</details>

## Section B — 5 numerical-value questions

### 11. Separation of two points

Find the distance between $(1,2,3)$ and $(3,5,9)$.

<details><summary>Answer</summary>

$\sqrt{2^2+3^2+6^2} = \sqrt{4+9+36} = 7$ units.

</details>

### 12. Centroid sum

A triangle has vertices $(1,2,3)$, $(2,4,6)$ and $(3,3,3)$. Let its centroid be $(x,y,z)$. Find $x+y+z$.

<details><summary>Answer</summary>

$x = (1+2+3)/3 = 2$, $y = (2+4+3)/3 = 3$, $z = (3+6+3)/3 = 4$, so the sum is $9$.

</details>

### 13. A missing direction cosine

A line makes angles $60^\circ$ and $45^\circ$ with the positive $x$- and $y$-axes. Find its (positive) direction cosine $n$ with the $z$-axis.

<details><summary>Answer</summary>

$l=\cos60^\circ=\frac12$ and $m=\cos45^\circ=\frac{\sqrt2}{2}$. Then $n^2 = 1 - \frac14 - \frac12 = \frac14$, so $n = \frac12$.

</details>

### 14. External division

Divide the segment from $(2,3,4)$ to $(8,6,10)$ externally in the ratio $2:1$. Report the $x$-coordinate of the dividing point.

<details><summary>Answer</summary>

$x = \dfrac{2\cdot 8 - 1\cdot 2}{2-1} = 14$. (The full point is $(14,9,16)$.)

</details>

### 15. Radius from general form

The equation $x^2+y^2+z^2-2x+4y-4z+8=0$ represents a sphere. Find its radius.

<details><summary>Answer</summary>

Completing squares: $(x-1)^2 - 1 + (y+2)^2 - 4 + (z-2)^2 - 4 + 8 = 0$, hence $(x-1)^2+(y+2)^2+(z-2)^2 = 1$ and the radius is $1$ unit. Check: the centre is $(1,-2,2)$; in the completed form its left side is $0$, while substituting $(1,-2,2)$ into the original general form gives $1+4+4-2-8-8+8 = -1 = -r^2$, exactly as it should.

</details>

## Section C — 3 assertion–reason questions

For each question choose:

- A. both assertion and reason are true, and the reason correctly explains the assertion;
- B. both are true, but the reason does not explain the assertion;
- C. the assertion is true but the reason is false;
- D. the assertion is false but the reason is true.

### 16. Direction cosines and ratios

**Assertion:** The direction cosines of any line satisfy $l^2+m^2+n^2=1$.
**Reason:** Direction ratios of a line are unique.

- A
- B
- C
- D

<details><summary>Answer</summary>

**C.** The assertion is true because cosines come from a unit direction vector. The reason is false: ratios can be multiplied by any non-zero constant, so infinitely many triples describe the same direction.

</details>

### 17. Equidistant locus

**Assertion:** The set of points equidistant from two fixed points is a plane.
**Reason:** Equating the squared distances from the two points leaves a linear equation in $x$, $y$ and $z$.

- A
- B
- C
- D

<details><summary>Answer</summary>

**A.** The quadratic terms cancel, leaving a linear equation, which is exactly why the perpendicular bisector locus is a plane.

</details>

### 18. Angle between two lines

**Assertion:** Lines with direction ratios $(1,1,0)$ and $(-1,-1,0)$ meet at an angle of $180^\circ$.
**Reason:** The angle between two lines is taken to be the acute angle.

- A
- B
- C
- D

<details><summary>Answer</summary>

**D.** The ratios are proportional, so the lines are parallel and the angle between them is $0^\circ$, not $180^\circ$. The reason is the correct convention, so it is true.

</details>

## Section D — 2 matching or multi-statement questions

### 19. Match the equation to the surface

Match Column I with Column II.

| Column I | Column II |
| --- | --- |
| (i) $x = 0$ | (a) a sphere of radius $2$ |
| (ii) $z = 5$ | (b) the $YZ$ plane |
| (iii) $(x-1)^2+(y-2)^2+(z-3)^2=4$ | (c) a single point, the origin |
| (iv) $x^2+y^2+z^2=0$ | (d) a plane parallel to the $XY$ plane |

<details><summary>Answer</summary>

(i) $\to$ (b): $x=0$ is the $YZ$ plane.
(ii) $\to$ (d): $z=5$ is parallel to $z=0$, the $XY$ plane.
(iii) $\to$ (a): centre $(1,2,3)$ with $r=\sqrt4=2$.
(iv) $\to$ (c): a sum of three squares can vanish only when $x=y=z=0$.

</details>

### 20. Which statements are correct?

1. A point in the $XY$ plane has $z=0$.
2. The line joining $(1,2,3)$ and $(2,4,6)$ has direction ratios $(1,2,3)$.
3. $\left(\frac12, \frac12, \frac{1}{\sqrt2}\right)$ can be direction cosines of a line.
4. $x^2+y^2+z^2-4x+2y-2z+5=0$ is a sphere of radius $2$.

<details><summary>Answer</summary>

Statements **1, 2 and 3** are correct; statement **4** is false.

1. The $XY$ plane is $z=0$.
2. Coordinate differences are $(2-1, 4-2, 6-3) = (1,2,3)$.
3. $\frac14+\frac14+\frac12 = 1$, so the triple is valid.
4. Completing squares gives $(x-2)^2+(y+1)^2+(z-1)^2 = 1$, so the radius is $1$, not $2$.

</details>

## Review by error, not by score

| If you missed… | Revisit | Then retry |
| --- | --- | --- |
| 1, 2, 7 or 19(i)–(ii) | Coordinates in space | Write the plane equation before naming the coordinate. |
| 5, 6, 10, 11 or 14 | Distance and section formula | Put the weight $m$ with the far endpoint and check position. |
| 3, 4, 8, 13, 16 or 18 | Direction cosines and ratios | Normalise, verify $l^2+m^2+n^2=1$, then take the acute angle. |
| 9, 12, 15, 17, 19(iii)–(iv) or 20 | Simple planes and loci | Complete squares; the centre gives $0$ in completed form and $-r^2$ in general form. |

<learning-block type="recap" title="Ready to move on?">

Aim for at least $16$ correct out of $20$ with a written method note for every question. A question you answer correctly but cannot justify is a revision target, not a mastered topic.

</learning-block>
