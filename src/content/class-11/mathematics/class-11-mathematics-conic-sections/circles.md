## The shape a compass draws

Fix a point and a length, then let a pencil stay exactly that far from the point: the result is a circle. Nothing about the drawing needs angles or axes, yet writing the condition in coordinates turns every question about the shape — centre, radius, a tangent from an outside point, a chord — into arithmetic. The circle is also the simplest member of the conic family, so the habits formed here carry straight into the parabolas, ellipses and hyperbolas ahead.

## 1. The standard equation

Let the centre be $C(h,k)$ and the radius be $r>0$. A point $P(x,y)$ lies on the circle exactly when $CP=r$:

$$
\sqrt{(x-h)^2+(y-k)^2}=r \quad\Longleftrightarrow\quad (x-h)^2+(y-k)^2=r^2.
$$

This is the **standard form**. When the centre is the origin it collapses to $x^2+y^2=r^2$. The same expression also sorts points by position: $CP^2=(x-h)^2+(y-k)^2$ is less than $r^2$ inside the circle, equal to $r^2$ on it, and greater than $r^2$ outside it.

## 2. The general form, and where the centre hides

Expanding the standard form gives

$$
x^2+y^2-2hx-2ky+(h^2+k^2-r^2)=0.
$$

Every circle, whatever its position, therefore has the shape

$$
x^2+y^2+2gx+2fy+c=0.
$$

Comparing coefficients term by term: $2g=-2h$, $2f=-2k$ and $c=h^2+k^2-r^2$. Hence

$$
\boxed{\ \text{centre }(-g,-f),\qquad r=\sqrt{g^2+f^2-c}\ }.
$$

The minus signs are not a trick: the expanded equation carries $-2h$ and $-2k$, so halving gives $-h$ and $-k$. Three cases follow from the quantity under the root:

- $g^2+f^2-c>0$: a real circle;
- $g^2+f^2-c=0$: a **point circle**, a single point $(-g,-f)$;
- $g^2+f^2-c<0$: no real points satisfy the equation.

The equation always *looks* like a circle in the last case, which is why the reality test matters.

## 3. The diameter form

Take $A(x_1,y_1)$ and $B(x_2,y_2)$ as the ends of a diameter and let $P(x,y)$ be any other point on the circle. The angle in a semicircle is a right angle, so $\vec{PA}\cdot\vec{PB}=0$:

$$
(x-x_1)(x-x_2)+(y-y_1)(y-y_2)=0.
$$

Expanding produces $x^2+y^2-(x_1+x_2)x-(y_1+y_2)y+x_1x_2+y_1y_2=0$, whose centre is $\left(\frac{x_1+x_2}{2},\frac{y_1+y_2}{2}\right)$ — exactly the midpoint of $AB$, as it must be. This form is the fastest route to a circle through two known points when those points are the ends of a diameter.

## 4. The power of a point and tangent length

For the general equation define

$$
S_1=x_1^2+y_1^2+2gx_1+2fy_1+c.
$$

Completing both squares rewrites the left side as $(x+g)^2+(y+f)^2-(g^2+f^2-c)$, so

$$
S_1=CP^2-r^2.
$$

Thus $S_1<0$ means $P$ is inside, $S_1=0$ means it is on the circle, and $S_1>0$ means it is outside. If $P$ is outside and $T$ is a point of contact of a tangent from $P$, the radius $CT$ is perpendicular to the tangent. Pythagoras in triangle $CTP$ gives

$$
PT=\sqrt{CP^2-r^2}=\sqrt{S_1}.
$$

Both tangents from the same outside point have this length, a fact that often saves finding $T$.

## 5. A parametric description

For the circle $(x-h)^2+(y-k)^2=r^2$,

$$
x=h+r\cos\theta,\qquad y=k+r\sin\theta,
$$

because $\cos^2\theta+\sin^2\theta=1$. This describes one full turn as $\theta$ runs from $0$ to $2\pi$, and it is useful whenever a problem asks for a general point on a circle.

## 6. A fully worked example

Consider

$$
x^2+y^2-4x+6y-12=0.
$$

Here $2g=-4$, so $g=-2$; $2f=6$, so $f=3$; and $c=-12$. Therefore

$$
\text{centre }C(2,-3),\qquad r=\sqrt{(-2)^2+3^2-(-12)}=\sqrt{25}=5.
$$

**Cross-check by completing squares.** $(x^2-4x+4)+(y^2+6y+9)=12+4+9=25$, i.e. $(x-2)^2+(y+3)^2=25$. The centre and radius agree.

Now find the length of a tangent from $P(8,1)$. The power is

$$
S_1=64+1-32+6-12=27,
$$

so $PT=\sqrt{27}=3\sqrt3$. As a second check, $CP=\sqrt{(8-2)^2+(1+3)^2}=\sqrt{52}$, and $CP^2-r^2=52-25=27$. The length is real and positive, consistent with $P$ being outside the circle.

<learning-block type="mistake" title="Reading the centre straight off the coefficients">

The commonest slip is reporting the centre of $x^2+y^2+2gx+2fy+c=0$ as $(g,f)$. The centre is $(-g,-f)$: compare with $(x-h)^2+(y-k)^2=r^2$, where the linear coefficients are $-2h$ and $-2k$. A second slip is using $\sqrt{g^2+f^2+c}$ for the radius; the constant enters with a minus sign because $c=h^2+k^2-r^2$. Complete the squares once as a check before trusting either result.

</learning-block>

## Try it yourself

**A.** Find the centre and radius of $x^2+y^2+6x-2y-15=0$.

<details><summary>Show the reasoning</summary>

$g=3$, $f=-1$, $c=-15$, so the centre is $(-3,1)$ and $r=\sqrt{9+1+15}=5$. Completing squares gives $(x+3)^2+(y-1)^2=25$.

</details>

**B.** Write the circle with diameter endpoints $(1,2)$ and $(5,6)$.

<details><summary>Show the reasoning</summary>

Use $(x-1)(x-5)+(y-2)(y-6)=0$, which expands to $x^2+y^2-6x-8y+17=0$. Its centre is $(3,4)$, the midpoint, and $r=\sqrt{9+16-17}=\sqrt8=2\sqrt2$; the radius is half of $\sqrt{32}$, the length of the diameter.

</details>

**C.** Is $(4,5)$ inside, on, or outside $x^2+y^2-2x+4y-20=0$?

<details><summary>Show the reasoning</summary>

$S_1=16+25-8+20-20=33>0$, so the point is outside. The centre is $(1,-2)$ and $r^2=1+4+20=25$; indeed $CP^2=9+49=58>25$.

</details>

## Remember

- A circle is the locus $CP=r$; its standard form is $(x-h)^2+(y-k)^2=r^2$.
- From $x^2+y^2+2gx+2fy+c=0$, the centre is $(-g,-f)$ and $r=\sqrt{g^2+f^2-c}$; the radius must be real.
- The diameter form $(x-x_1)(x-x_2)+(y-y_1)(y-y_2)=0$ comes from the right angle in a semicircle.
- The quantity $S_1=CP^2-r^2$ locates a point and gives tangent length $\sqrt{S_1}$ for an outside point.
- Next, change one rule: keep the focus but demand equal distances to the focus and a line. That gives a parabola.
