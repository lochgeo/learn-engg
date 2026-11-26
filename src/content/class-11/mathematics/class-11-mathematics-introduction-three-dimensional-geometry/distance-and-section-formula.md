## From one point to two

The previous module measured how far a single point sits from the origin. The same rectangular geometry answers two more questions: how far apart are two arbitrary points, and where exactly does a point lie that cuts the segment between them in a prescribed ratio? Both are worked out by projecting onto the axes, where the familiar one-dimensional picture applies.

## 1. Distance between two points

Let $A(x_1, y_1, z_1)$ and $B(x_2, y_2, z_2)$. Introduce $C(x_2, y_2, z_1)$, which shares $A$'s height but sits directly above or below $B$'s position in the $XY$ plane.

In the horizontal plane $z = z_1$, the segment $AC$ has length

$$AC^2 = (x_2 - x_1)^2 + (y_2 - y_1)^2.$$

The segment $CB$ is vertical, of length $|z_2 - z_1|$, and is perpendicular to the horizontal plane, hence perpendicular to $AC$. Pythagoras once more gives

$$AB^2 = AC^2 + CB^2 = (x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2,$$

so

$$AB = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}.$$

Geometrically $AB$ is the long diagonal of a rectangular box whose edges are the three coordinate differences. The expression is symmetric in $A$ and $B$, and it reduces to the earlier $OP$ formula when $A$ is the origin. It assumes rectangular axes.

## 2. Section formula for internal division

Suppose $R(x, y, z)$ divides $AB$ **internally** in the ratio $m : n$, meaning $AR : RB = m : n$. Project everything onto the $x$-axis. Projection preserves ratios along a line, so

$$\frac{x - x_1}{x_2 - x} = \frac{m}{n}.$$

Cross-multiplying, $n(x - x_1) = m(x_2 - x)$, hence $(m + n)x = m x_2 + n x_1$ and

$$x = \frac{m x_2 + n x_1}{m + n}.$$

The same argument on the other axes gives

$$R = \left(\frac{m x_2 + n x_1}{m + n},\ \frac{m y_2 + n y_1}{m + n},\ \frac{m z_2 + n z_1}{m + n}\right).$$

Note the crossing: the weight $m$ multiplies the coordinate of the **far** point $B$. Putting $m = n$ gives the midpoint $\left(\frac{x_1+x_2}{2}, \frac{y_1+y_2}{2}, \frac{z_1+z_2}{2}\right)$.

## 3. External division and the centroid

If $R$ divides $AB$ **externally** in the ratio $m : n$ with $m \ne n$, the projection relation becomes

$$\frac{x - x_1}{x - x_2} = \frac{m}{n},$$

which leads to

$$R = \left(\frac{m x_2 - n x_1}{m - n},\ \frac{m y_2 - n y_1}{m - n},\ \frac{m z_2 - n z_1}{m - n}\right).$$

The two terms are now subtracted, and the sign of $m - n$ tells you on which side of the segment $R$ lies.

A related result: the centroid of a triangle with vertices $(x_1,y_1,z_1)$, $(x_2,y_2,z_2)$ and $(x_3,y_3,z_3)$ is

$$G = \left(\frac{x_1+x_2+x_3}{3},\ \frac{y_1+y_2+y_3}{3},\ \frac{z_1+z_2+z_3}{3}\right).$$

It follows from the section formula because the centroid divides each median in the ratio $2 : 1$.

## 4. Worked example

Let $A(1, 2, 3)$ and $B(3, 5, 9)$.

**Distance.** $AB = \sqrt{(3-1)^2 + (5-2)^2 + (9-3)^2} = \sqrt{4 + 9 + 36} = \sqrt{49} = 7$.

**Internal division in the ratio $2 : 1$.** With $m = 2$ and $n = 1$,

$$R = \left(\frac{2\cdot 3 + 1\cdot 1}{3},\ \frac{2\cdot 5 + 1\cdot 2}{3},\ \frac{2\cdot 9 + 1\cdot 3}{3}\right) = \left(\frac{7}{3},\ 4,\ 7\right).$$

Sanity check: $7/3 \approx 2.33$ lies between $1$ and $3$, $4$ lies between $2$ and $5$, and $7$ lies between $3$ and $9$. More precisely, $AR = \sqrt{(4/3)^2 + 2^2 + 4^2} = \sqrt{196/9} = 14/3$ while $RB = \sqrt{(2/3)^2 + 1^2 + 2^2} = \sqrt{49/9} = 7/3$, so $AR : RB = 2 : 1$ exactly.

<learning-block type="mistake" title="Reversing the ratio in the section formula">

If $AR : RB = m : n$, the numerator is $m x_2 + n x_1$, **not** $m x_1 + n x_2$. The midpoint case $m = n$ cannot detect the swap because both orders coincide there. Test an unequal ratio such as $2:1$ instead: the answer must lie closer to the point carrying the larger weight.

</learning-block>

## Try it yourself

**A.** Find the distance between $(2, 1, -2)$ and $(6, 4, 10)$.

<details><summary>Show the reasoning</summary>

The coordinate differences are $4$, $3$ and $12$, so the distance is $\sqrt{16 + 9 + 144} = \sqrt{169} = 13$ units.

</details>

**B.** Find the point dividing $(0, 0, 0)$ and $(6, 9, 12)$ internally in the ratio $1 : 2$.

<details><summary>Show the reasoning</summary>

$R = (2, 3, 4)$, since $(1\cdot 6)/3 = 2$, $(1\cdot 9)/3 = 3$ and $(1\cdot 12)/3 = 4$.

</details>

**C.** Find the point dividing $(2, 3, 4)$ and $(8, 6, 10)$ externally in the ratio $2 : 1$.

<details><summary>Show the reasoning</summary>

$R = \left(\dfrac{2\cdot 8 - 1\cdot 2}{2-1}, \dfrac{2\cdot 6 - 1\cdot 3}{2-1}, \dfrac{2\cdot 10 - 1\cdot 4}{2-1}\right) = (14, 9, 16)$, which lies beyond $(8, 6, 10)$.

</details>

## Remember

- Distance is the square root of the sum of the three squared coordinate differences.
- Internal division in $m:n$ uses $\frac{m x_2 + n x_1}{m+n}$; the weight $m$ goes with $B$.
- External division replaces the plus with a minus and divides by $m - n$.
- Midpoints and centroids are coordinate-wise averages.

Next, the same differences $(x_2 - x_1, y_2 - y_1, z_2 - z_1)$ will describe the **direction** of a line rather than only its length.
