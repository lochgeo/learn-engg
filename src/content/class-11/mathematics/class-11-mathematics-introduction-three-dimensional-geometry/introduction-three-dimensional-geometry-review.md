## Your study plan for this chapter

This chapter is four small tools that keep reappearing in combination. A focused pass takes about **90 minutes**, plus the mastery check:

| Step | Module | Minutes | What to have on the page |
| --- | --- | --- | --- |
| 1 | Coordinates in space | 20 | A sketch of the three axes and the octant sign table |
| 2 | Distance and section formula | 20 | The distance formula and the internal/external section formulae |
| 3 | Direction cosines and ratios | 20 | $l^2+m^2+n^2=1$ and the normalising square root |
| 4 | Simple planes and loci | 20 | The four simple planes and the sphere equation |
| 5 | This mastery check | 25 | Blank paper; reveals only after an attempt |

After each module, close the explanation and redo its "Try it yourself" questions from a blank page. Mark a module done only when you can state its formula *and* say when it stops applying. Take a short break before the mastery check. Once this feels comfortable, attempt the 50-minute JEE Main timed set.

## Choose the tool from the clue

| Clue in the question | Start with |
| --- | --- |
| "Which octant", "distance from a plane" | Signs of $(x,y,z)$; $|x|$, $|y|$, $|z|$ from $YZ$, $ZX$, $XY$ |
| Distance of a point from the origin | $\sqrt{x^2+y^2+z^2}$ |
| Separation of two points | Sum of three squared coordinate differences |
| "Divides in the ratio $m:n$" (internal) | $\frac{m x_2 + n x_1}{m+n}$ for each coordinate |
| "Divided externally" | $\frac{m x_2 - n x_1}{m-n}$ |
| "Midpoint" or "centroid" | Coordinate-wise average |
| Angles with the axes | $l=\cos\alpha$, $m=\cos\beta$, $n=\cos\gamma$; $l^2+m^2+n^2=1$ |
| Ratios $(a,b,c)$ given | Divide by $\sqrt{a^2+b^2+c^2}$ to get cosines |
| Angle between two lines | Normalised product sum; report the acute angle |
| Perpendicular or parallel lines | Product sum zero, or equal ratios |
| Equation $x=k$, $y=k$ or $z=k$ | A plane parallel to the corresponding coordinate plane |
| "Equidistant from two points" | Equate squared distances; a plane results |
| "Points at distance $r$ from a centre" | Sphere equation |

## Mastery check

Attempt each question before opening its answer.

### 1. Reading a point

For $P(2, -3, 6)$, name the octant and give the distances from the three coordinate planes.

<details><summary>Answer and reasoning</summary>

Signs $(+,-,+)$ give octant IV. The distances are $2$ from the $YZ$ plane, $3$ from the $ZX$ plane and $6$ from the $XY$ plane. Keep the pairing straight: $x \leftrightarrow YZ$, $y \leftrightarrow ZX$, $z \leftrightarrow XY$.

</details>

### 2. On an axis

A point on the $z$-axis is $5$ units from the origin. List all possibilities.

<details><summary>Answer and reasoning</summary>

$(0,0,5)$ and $(0,0,-5)$. Distance fixes $|z| = 5$ but not the sign.

</details>

### 3. Distance between two points

Find the distance between $A(1,2,3)$ and $B(3,5,9)$, and check it against a rough estimate.

<details><summary>Answer and reasoning</summary>

$AB=\sqrt{2^2+3^2+6^2}=\sqrt{4+9+36}=7$. The largest difference is $6$, so the diagonal $7$ must exceed it but stay well below the naive sum $11$.

</details>

### 4. Internal division

Find the point dividing the segment from $A(1,2,3)$ to $B(4,8,15)$ internally in the ratio $2:1$.

<details><summary>Answer and reasoning</summary>

$\left(\frac{2\cdot4+1\cdot1}{3}, \frac{2\cdot8+1\cdot2}{3}, \frac{2\cdot15+1\cdot3}{3}\right) = (3,6,11)$. Every coordinate lies between those of $A$ and $B$, and the point is nearer $B$ because $m > n$.

</details>

### 5. External division

Divide $(2,3,4)$ and $(8,6,10)$ externally in the ratio $2:1$.

<details><summary>Answer and reasoning</summary>

$\left(\frac{2\cdot8-1\cdot2}{2-1}, \frac{2\cdot6-1\cdot3}{2-1}, \frac{2\cdot10-1\cdot4}{2-1}\right) = (14,9,16)$, beyond $(8,6,10)$ as expected for $m>n$.

</details>

### 6. Midpoint and centroid

Find the midpoint of $(1,2,3)$ and $(5,6,7)$, and the centroid of the triangle with vertices $(0,0,0)$, $(6,0,0)$ and $(0,6,0)$.

<details><summary>Answer and reasoning</summary>

Midpoint $(3,4,5)$: the average of the two endpoints. Centroid $(2,2,0)$: the coordinate-wise average of the three vertices.

</details>

### 7. Direction cosines

Find the direction cosines of the line joining $(1,1,1)$ and $(3,3,3)$.

<details><summary>Answer and reasoning</summary>

Direction ratios $(2,2,2)$ have normalising length $\sqrt{12} = 2\sqrt3$, giving cosines $\left(\frac{1}{\sqrt3}, \frac{1}{\sqrt3}, \frac{1}{\sqrt3}\right)$. Check: $3 \times \frac13 = 1$.

</details>

### 8. Angle between lines

Find the angle between lines with direction ratios $(1,2,3)$ and $(-2,1,0)$.

<details><summary>Answer and reasoning</summary>

The product sum is $-2+2+0=0$, so the lines are perpendicular and the angle is $90^\circ$.

</details>

### 9. Angles with the axes

A line makes $60^\circ$ with the $x$-axis and $45^\circ$ with the $y$-axis. Find the acute angle with the $z$-axis.

<details><summary>Answer and reasoning</summary>

$l^2+m^2 = \frac14+\frac12 = \frac34$, so $n^2=\frac14$ and $n=\frac12$. Hence $\gamma = 60^\circ$.

</details>

### 10. A locus

Find the locus of points equidistant from $(2,0,0)$ and $(0,2,0)$.

<details><summary>Answer and reasoning</summary>

$(x-2)^2+y^2+z^2 = x^2+(y-2)^2+z^2$ gives $x=y$, the perpendicular bisector plane of the segment. Its normal $(1,-1,0)$ is parallel to the segment's direction $(-2,2,0)$.

</details>

## Self-check

You are ready for the timed set when you can:

- place a point in the correct octant from the signs of its coordinates;
- state which plane each coordinate measures distance from;
- derive the distance formula from Pythagoras rather than memorising it blindly;
- apply internal and external section formulae with the weights on the correct endpoints;
- convert direction ratios to cosines and verify $l^2+m^2+n^2=1$;
- test two lines for perpendicularity using the product sum;
- recognise a plane from a linear equation and a sphere from its squared-distance equation;
- find a perpendicular bisector plane by equating squared distances.

If any item still feels shaky, revisit that module and redo its questions with the answer hidden.
