## Angles measured by distance travelled

Why do mathematicians prefer radians to degrees? Because the formula connecting an angle to the arc it cuts off becomes clean. Imagine a circle of radius $r$. Walk a distance $s$ along its rim (the arc). The angle $\theta$ you have swept out at the centre is defined by

$$
\theta=\frac{s}{r}\quad\Longleftrightarrow\quad s=r\theta.
$$

The ratio $s/r$ is dimensionless, so a radian is really a pure number with a name attached. One full turn has arc length $2\pi r$, so $\theta=2\pi$ radians; half a turn is $\pi$ radians. Since a full turn is also $360^\circ$, we get the bridge

$$
180^\circ=\pi\ \text{radians},\qquad 1^\circ=\frac{\pi}{180}\ \text{rad},\qquad 1\ \text{rad}=\frac{180^\circ}{\pi}\approx57.3^\circ.
$$

Degrees are a human convenience; calculus and almost every formula in this chapter assume the angle is in radians.

## 1. The unit circle and the two basic coordinates

Draw a circle of radius $1$ centred at the origin of the coordinate plane. Start at the point $(1,0)$ and rotate anticlockwise through an angle $\theta$. Let $P$ be where you stop. Then, **by definition**,

$$
P=(\cos\theta,\ \sin\theta).
$$

So $\cos\theta$ is the horizontal coordinate of $P$ and $\sin\theta$ is its vertical coordinate. Because the circle has radius $1$, the distance from the origin to $P$ is $1$, and Pythagoras immediately gives the most important identity in the chapter:

$$
\cos^2\theta+\sin^2\theta=1.
$$

The tangent is defined as the ratio

$$
\tan\theta=\frac{\sin\theta}{\cos\theta},
$$

which is the slope of the line from the origin to $P$. It is undefined exactly when $\cos\theta=0$, that is at $\theta=\frac\pi2+k\pi$.

Anticlockwise rotations give **positive** angles; clockwise rotations give **negative** ones. The point for $-\theta$ is the reflection of the point for $\theta$ in the $x$-axis, so $\cos(-\theta)=\cos\theta$ and $\sin(-\theta)=-\sin\theta$.

## 2. The standard angles

These five positions are worth memorising, since everything else is built from them.

| $\theta$ (deg) | $\theta$ (rad) | $\sin\theta$ | $\cos\theta$ | $\tan\theta$ |
| --- | --- | --- | --- | --- |
| $0^\circ$ | $0$ | $0$ | $1$ | $0$ |
| $30^\circ$ | $\pi/6$ | $1/2$ | $\sqrt3/2$ | $1/\sqrt3$ |
| $45^\circ$ | $\pi/4$ | $\sqrt2/2$ | $\sqrt2/2$ | $1$ |
| $60^\circ$ | $\pi/3$ | $\sqrt3/2$ | $1/2$ | $\sqrt3$ |
| $90^\circ$ | $\pi/2$ | $1$ | $0$ | undefined |

## 3. Signs in the four quadrants

The coordinate definition makes the signs automatic. In the first quadrant both coordinates are positive; as $P$ moves round, only one coordinate changes sign at a time.

| Quadrant | Range of $\theta$ | Positive functions | Memory aid |
| --- | --- | --- | --- |
| I | $0$ to $\pi/2$ | all | **A**ll |
| II | $\pi/2$ to $\pi$ | $\sin$ | **S**ine |
| III | $\pi$ to $3\pi/2$ | $\tan$ | **T**angent |
| IV | $3\pi/2$ to $2\pi$ | $\cos$ | **C**osine |

The order "All–Sine–Tangent–Cosine" is often written **ASTC**. To evaluate, say, $\sin(150^\circ)$: $150^\circ=180^\circ-30^\circ$ lies in quadrant II where sine is positive, and its reference angle is $30^\circ$, so $\sin150^\circ=\sin30^\circ=1/2$.

Two angles are **coterminal** if they differ by a multiple of $2\pi$ (a whole turn), because their terminal points coincide. Thus $\theta$ and $\theta+2k\pi$ have identical sine, cosine and tangent values. For large or negative angles, first add or subtract $2\pi$ until the angle lies in $[0,2\pi)$, then use the reference angle and ASTC. For example $-60^\circ$ is coterminal with $300^\circ$, so $\sin(-60^\circ)=-\sin60^\circ=-\sqrt3/2$, agreeing with the oddness of sine noted earlier.

## 4. A worked example: arc length

A circle has radius $5\ \text{cm}$. A sector at its centre subtends $120^\circ$. Find the length of the arc that bounds the sector.

First convert the angle to radians:

$$
\theta=120^\circ\times\frac{\pi}{180}=\frac{2\pi}{3}\ \text{rad}.
$$

Then use $s=r\theta$:

$$
s=5\times\frac{2\pi}{3}=\frac{10\pi}{3}\ \text{cm}\approx10.47\ \text{cm}.
$$

**Sanity check.** The full circumference is $2\pi r=10\pi\ \text{cm}\approx31.4\ \text{cm}$. The angle $120^\circ$ is exactly one third of a full turn, so the arc should be one third of the circumference: $31.4/3\approx10.5\ \text{cm}$. The two answers agree.

<learning-block type="mistake" title="Mixing degrees into s = rθ">

The formula $s=r\theta$ works **only** when $\theta$ is in radians. Substituting $120$ directly would give $s=5\times120=600\ \text{cm}$, far larger than the whole circumference of about $31.4\ \text{cm}$ — an immediate contradiction. Before using any arc, sector or (later) calculus formula, convert degrees to radians. A second frequent slip is ignoring the quadrant: $\cos\theta=\sqrt{1-\sin^2\theta}$ is only valid up to a sign, and the sign comes from ASTC.

</learning-block>

## 5. Related quantities you will meet again

The **area of a sector** follows the same proportional reasoning: a fraction $\theta/(2\pi)$ of the full disc gives

$$
A=\frac12 r^2\theta\qquad(\theta\ \text{in radians}).
$$

For the unit circle this is $A=\theta/2$, which is why radian measure simplifies later work with areas and with the derivatives of sine and cosine. The **chord** joining the ends of the arc has length $2r\sin(\theta/2)$; this appears whenever a triangle is inscribed in a circle.

Angles in this chapter are geometric objects, but the functions $\sin$, $\cos$ and $\tan$ behave as functions of a real number once the angle is in radians. The next module collects the identities they satisfy.

## Try it yourself

**1.** Convert $225^\circ$ to radians and state the quadrant it lies in.

<details><summary>Show the reasoning</summary>

$225^\circ\times\dfrac{\pi}{180}=\dfrac{5\pi}{4}$ rad. Since $\pi<\frac{5\pi}{4}<\frac{3\pi}{2}$, the angle lies in quadrant III, where only tangent is positive.

</details>

**2.** A wheel of radius $0.40\ \text{m}$ turns through $3.5$ rad. How far does a point on the rim travel along the arc?

<details><summary>Show the reasoning</summary>

$s=r\theta=(0.40)(3.5)=1.4\ \text{m}$. The angle is already in radians, so no conversion is needed. The circumference is about $2.51\ \text{m}$, and $3.5\ \text{rad}$ is a little over half a turn, so $1.4\ \text{m}$ is sensible.

</details>

**3.** Evaluate $\cos(210^\circ)$ without a calculator.

<details><summary>Show the reasoning</summary>

$210^\circ=180^\circ+30^\circ$ lies in quadrant III, where cosine is negative. The reference angle is $30^\circ$, so $\cos210^\circ=-\cos30^\circ=-\dfrac{\sqrt3}{2}$.

</details>

## Remember

- A radian is an arc length divided by a radius: $s=r\theta$ requires radians.
- $180^\circ=\pi$ radians; multiply degrees by $\pi/180$ to convert.
- On the unit circle, $P=(\cos\theta,\sin\theta)$ and $\tan\theta=\sin\theta/\cos\theta$.
- ASTC gives the signs: quadrant I all, II sine, III tangent, IV cosine.
- $s=r\theta$, sector area $=\frac12 r^2\theta$, and $\cos^2\theta+\sin^2\theta=1$ all rely on radian measure.

The standard angles and quadrant signs are the raw material for the identities in the next module.
