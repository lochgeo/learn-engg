## Putting a complex number on a map

Writing $z=a+ib$ gives us two real numbers, and two real numbers can be plotted as a point $(a,b)$. Once we draw that point, two questions become unavoidable: how far is it from the origin, and in which direction does it lie? Those two quantities — modulus and argument — turn out to control multiplication and powers far more efficiently than the Cartesian form did.

## 1. The Argand plane

Use a horizontal **real axis** and a vertical **imaginary axis**. The complex number $a+ib$ is the point $(a,b)$:

- $3+2i$ is the point $(3,2)$;
- $-2i$ is the point $(0,-2)$ on the imaginary axis;
- real numbers lie on the horizontal axis, purely imaginary numbers on the vertical axis.

The plane with this identification is the **Argand plane** (or complex plane). Addition behaves exactly like vector addition of the position vectors, which is why $(a+ib)+(c+id)$ adds the coordinates.

## 2. Modulus: distance from the origin

The distance from the origin to $(a,b)$ is

$$|z|=\sqrt{a^2+b^2},\qquad |z|\ge0.$$

The modulus is never negative, and $|z|=0$ only when $z=0$. From the previous module we already know $z\bar z=a^2+b^2$, so a useful companion identity is

$$|z|^2=z\bar z.$$

The modulus interacts cleanly with the operations:

$$|z_1z_2|=|z_1|\,|z_2|,\qquad \left|\frac{z_1}{z_2}\right|=\frac{|z_1|}{|z_2|}\ (z_2\ne0),\qquad |\bar z|=|z|.$$

For example, $|1+i|=\sqrt2$ and $|1-i|=\sqrt2$, while $(1+i)(1-i)=2$, and indeed $\sqrt2\times\sqrt2=2$.

The difference of two complex numbers measures distance between their points:

$$|z_1-z_2|=\text{distance between }(a_1,b_1)\text{ and }(a_2,b_2).$$

Thus $|z-2-i|=3$ describes a circle of radius $3$ centred at $2+i$; the equation says "the point $z$ is $3$ units from the fixed point $2+i$".

## 3. Argument: direction from the origin

Let $r=|z|$ and let $\theta$ be the angle measured anticlockwise from the positive real axis to the line $Oz$. Then

$$a=r\cos\theta,\qquad b=r\sin\theta,$$

and $\theta$ is an **argument** of $z$, written $\arg z$. Because a full turn changes nothing, arguments are not unique:

$$\arg z=\theta+2k\pi,\qquad k\in\mathbb Z.$$

To make statements definite we use the **principal argument** $\mathrm{Arg}\,z$, chosen in the interval $(-\pi,\pi]$. For $z\ne0$,

$$\tan\theta=\frac{b}{a},$$

but this equation fixes only the reference angle, not the quadrant. The quadrant must be read from the signs of $a$ and $b$.

| Position of $(a,b)$ | Quadrant | Principal argument |
| --- | --- | --- |
| $a>0,\ b>0$ | I | $\theta=\tan^{-1}(b/a)$ |
| $a<0,\ b>0$ | II | $\theta=\pi-\tan^{-1}\!\lvert b/a\rvert$ |
| $a<0,\ b<0$ | III | $\theta=-\pi+\tan^{-1}\!\lvert b/a\rvert$ |
| $a>0,\ b<0$ | IV | $\theta=-\tan^{-1}\!\lvert b/a\rvert$ |

Points on the axes are handled directly: positive real axis $0$, positive imaginary axis $\pi/2$, negative real axis $\pi$, negative imaginary axis $-\pi/2$. The argument of $z=0$ is undefined.

## 4. Worked examples with numbers

**Example 1 — modulus and argument.** Take $z=-\sqrt3+i$. Here $a=-\sqrt3<0$ and $b=1>0$, so the point lies in quadrant II.

$$r=\sqrt{(-\sqrt3)^2+1^2}=\sqrt{3+1}=2,\qquad \tan\theta=\frac{1}{-\sqrt3}=-\frac{1}{\sqrt3}.$$

The reference angle is $\pi/6$, and quadrant II gives $\mathrm{Arg}\,z=\pi-\pi/6=5\pi/6$.

**Check.** $2\cos(5\pi/6)=2(-\sqrt3/2)=-\sqrt3$ and $2\sin(5\pi/6)=2(1/2)=1$, which reconstructs $z$ exactly.

**Example 2 — distance.** Let $z_1=1+2i$ and $z_2=4+6i$. Then $z_1-z_2=-3-4i$, so

$$|z_1-z_2|=\sqrt{(-3)^2+(-4)^2}=\sqrt{25}=5.$$

This matches the usual distance between the points $(1,2)$ and $(4,6)$, a useful check that complex subtraction is doing what the picture says.

<learning-block type="mistake" title="arctan alone does not know the quadrant">

For $z=-1+i$, typing $\tan^{-1}(b/a)=\tan^{-1}(-1)$ gives $-\pi/4$, but the point $(-1,1)$ is in quadrant II. The correct principal argument is $3\pi/4$. Always locate the quadrant from the signs of $a$ and $b$ before converting a tangent into an angle. A second error is quoting $5\pi/4$ as a *principal* argument: that angle is correct but lies outside $(-\pi,\pi]$, so it must be reported as $-3\pi/4$.

</learning-block>

## 5. A reliable procedure

1. Identify $a=\mathrm{Re}(z)$ and $b=\mathrm{Im}(z)$, and plot the point.
2. Compute $r=\sqrt{a^2+b^2}$; use $|z|^2=z\bar z$ when a square is more convenient.
3. Find the reference angle from $\tan\theta=|b/a|$, then apply the quadrant rule.
4. Report the principal argument in $(-\pi,\pi]$, and add $2k\pi$ only if the general argument is requested.

## Try it yourself

**1.** Find the modulus and principal argument of $z=1-i$.

<details><summary>Show the reasoning</summary>

$r=\sqrt{1^2+(-1)^2}=\sqrt2$. The point $(1,-1)$ is in quadrant IV with reference angle $\pi/4$, so $\mathrm{Arg}\,z=-\pi/4$.

</details>

**2.** What is the principal argument of $z=-2$?

<details><summary>Show the reasoning</summary>

The point $(-2,0)$ lies on the negative real axis, so $\mathrm{Arg}\,z=\pi$. This is allowed because the principal interval is $(-\pi,\pi]$, which includes $\pi$ but excludes $-\pi$.

</details>

**3.** If $z=(3+4i)/(1-2i)$, find $|z|$ without expanding the quotient.

<details><summary>Show the reasoning</summary>

Using $|z_1/z_2|=|z_1|/|z_2|$, we get $|z|=\sqrt{3^2+4^2}/\sqrt{1^2+(-2)^2}=5/\sqrt5=\sqrt5$.

</details>

## Remember

- The Argand plane identifies $a+ib$ with the point $(a,b)$.
- $|z|=\sqrt{a^2+b^2}$ and $|z|^2=z\bar z$; it is a distance, so it is never negative.
- $\arg z=\theta+2k\pi$ is multi-valued; $\mathrm{Arg}\,z\in(-\pi,\pi]$ is unique.
- $\tan\theta=b/a$ gives only a reference angle — the quadrant fixes the real angle.
- $|z_1-z_2|$ is the distance between the two points, so $|z-z_0|=r$ is a circle.

Next we write $a=r\cos\theta$ and $b=r\sin\theta$ inside $z=a+ib$. That single substitution gives the polar form and makes powers almost effortless.
