## Why a third coordinate is needed

On a flat sheet two numbers pin down a point. A room, a city or a molecule is not flat: to say where something is you must also say how far above or below a chosen floor it sits. A corner of the room can serve as an origin, and the three edges meeting there give three mutually perpendicular directions. Once those directions are fixed and labelled, every point in space receives exactly three numbers.

Picture the corner where two walls and the floor meet. Call it $O$. Along the three edges mark the $x$-, $y$- and $z$-axes, using the right-hand convention: curl the fingers of your right hand from the positive $x$-axis toward the positive $y$-axis and your thumb points along the positive $z$-axis. The axes are mutually perpendicular, and this rectangular system is what makes all the distance formulae in the chapter work.

## 1. Coordinate planes and octants

Each pair of axes determines a plane:

- the $XY$ plane contains the $x$- and $y$-axes;
- the $YZ$ plane contains the $y$- and $z$-axes;
- the $ZX$ plane contains the $z$- and $x$-axes.

Each plane is also named by the axis it excludes: the $XY$ plane is $z = 0$, the $YZ$ plane is $x = 0$, and the $ZX$ plane is $y = 0$. Together the three planes divide space into **eight octants**. The first four have $z > 0$ and repeat the sign pattern of the four quadrants of the $xy$-plane; the last four repeat that pattern with $z < 0$.

| Octant | $x$ | $y$ | $z$ |
| --- | --- | --- | --- |
| I | $+$ | $+$ | $+$ |
| II | $-$ | $+$ | $+$ |
| III | $-$ | $-$ | $+$ |
| IV | $+$ | $-$ | $+$ |
| V | $+$ | $+$ | $-$ |
| VI | $-$ | $+$ | $-$ |
| VII | $-$ | $-$ | $-$ |
| VIII | $+$ | $-$ | $-$ |

The signs are part of the address. Dropping one is not a small slip; it moves the point to a different octant.

## 2. What the three numbers measure

For a point $P(x, y, z)$:

- $|x|$ is the perpendicular distance of $P$ from the $YZ$ plane;
- $|y|$ is the perpendicular distance of $P$ from the $ZX$ plane;
- $|z|$ is the perpendicular distance of $P$ from the $XY$ plane.

Notice the pairing: the $x$-coordinate measures distance from the plane that does **not** contain the $x$-axis. A common mix-up is to say that $x$ measures distance from the $XY$ plane; it does not — $z$ does.

Points with one coordinate zero lie in a plane; points with two coordinates zero lie on an axis. Thus $(x, y, 0)$ lies in the $XY$ plane, $(0, y, 0)$ lies on the $y$-axis, and $(0, 0, 0)$ is the origin.

## 3. Distance from the origin

Drop a perpendicular from $P(x, y, z)$ to the $XY$ plane; its foot is $Q(x, y, 0)$. In the flat $XY$ plane,

$$OQ^2 = x^2 + y^2.$$

The segment $QP$ is perpendicular to the $XY$ plane, hence perpendicular to $OQ$, and its length is $|z|$. Pythagoras in the right triangle $OQP$ gives

$$OP^2 = OQ^2 + QP^2 = x^2 + y^2 + z^2,$$

so the distance of $P$ from the origin is

$$OP = \sqrt{x^2 + y^2 + z^2}.$$

This is Pythagoras used twice. It assumes the axes are mutually perpendicular; on oblique axes the expression would need correction terms.

## 4. A worked example

Take $P(2, -3, 6)$.

- The sign pattern $(+, -, +)$ places $P$ in the **fourth octant**.
- Distances from the planes: $|x| = 2$ from $YZ$, $|y| = 3$ from $ZX$, $|z| = 6$ from $XY$.
- Distance from the origin: $OP = \sqrt{2^2 + (-3)^2 + 6^2} = \sqrt{4 + 9 + 36} = \sqrt{49} = 7$.

Sanity check: each coordinate is smaller than $7$, as a rectangular diagonal must be longer than any one of its components, and $49$ is a perfect square, so the answer is exact.

<learning-block type="example" title="Reading a point off the axes">

For $Q(0, -5, 0)$: two coordinates vanish, so $Q$ lies on the $y$-axis, five units on the negative side. Its distance from the $ZX$ plane is $0$ and from the $XY$ plane is $0$, because it lies in both; its distance from the $YZ$ plane is $5$. From the origin it is $5$ units away.

</learning-block>

<learning-block type="mistake" title="Pairing a coordinate with the wrong plane">

The most common error is pairing $x$ with the $XY$ plane. The $x$-coordinate measures distance from the $YZ$ plane, because $x = 0$ is exactly the $YZ$ plane. A reliable fix is to write the equation of the plane first: set the coordinate to zero and name the plane that remains.

</learning-block>

## Try it yourself

**A.** Name the octant of $(-4, 2, -5)$ and give its distances from the three coordinate planes.

<details><summary>Show the reasoning</summary>

The signs $(-, +, -)$ give the **sixth octant**. The distances are $|x| = 4$ from the $YZ$ plane, $|y| = 2$ from the $ZX$ plane and $|z| = 5$ from the $XY$ plane.

</details>

**B.** Find the distance of $(1, 2, 2)$ from the origin.

<details><summary>Show the reasoning</summary>

$\sqrt{1 + 4 + 4} = \sqrt{9} = 3$ units.

</details>

**C.** A point on the $z$-axis is $5$ units from the origin. What are its possible coordinates?

<details><summary>Show the reasoning</summary>

On the $z$-axis $x = y = 0$, so $OP = |z| = 5$. The point is $(0, 0, 5)$ or $(0, 0, -5)$; distance alone does not fix the sign.

</details>

## Remember

- Three mutually perpendicular axes turn a corner of space into an address system.
- The $x$-, $y$- and $z$-coordinates measure distance from the $YZ$, $ZX$ and $XY$ planes respectively.
- The eight octants are fixed by signs; the first four have $z > 0$.
- $OP = \sqrt{x^2 + y^2 + z^2}$ is Pythagoras applied twice.

The same distance idea is reused in the next module to compare two points and to cut a segment in a given ratio.
