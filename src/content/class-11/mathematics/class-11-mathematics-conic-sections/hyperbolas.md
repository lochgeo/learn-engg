## A fixed difference of distances

An ellipse keeps the *sum* of its distances to two foci constant. Remove the word "sum", replace it with "difference", and the closed oval splits into two open branches. A hyperbola is the locus of points for which the difference of distances to two fixed foci has a constant magnitude. It describes the path of a particle scattered by an inverse-square repulsive force and the outline of certain cooling towers.

## 1. The two-foci definition and the standard equation

Let $F_1(-c,0)$ and $F_2(c,0)$ be the foci, with $c>0$. A point $P(x,y)$ belongs to the hyperbola when

$$
|PF_1-PF_2|=2a,\qquad 0<a<c.
$$

The constant must be smaller than the focal separation $2c$, by the triangle inequality. On the right branch $PF_1-PF_2=2a$, so

$$
\sqrt{(x+c)^2+y^2}=2a+\sqrt{(x-c)^2+y^2}.
$$

Squaring leaves $4cx=4a^2+4a\sqrt{(x-c)^2+y^2}$, hence $a\sqrt{(x-c)^2+y^2}=cx-a^2$. Squaring again,

$$
a^2(x^2-2cx+c^2+y^2)=c^2x^2-2a^2cx+a^4.
$$

The middle terms cancel. Put $b^2=c^2-a^2>0$; then $a^2b^2+a^2y^2=b^2x^2$, which gives

$$
\boxed{\ \frac{x^2}{a^2}-\frac{y^2}{b^2}=1\ },\qquad \boxed{\ c^2=a^2+b^2\ },\qquad e=\frac ca>1.
$$

Notice the sign contrast with the ellipse: here the foci lie *outside* the vertices, so $c>a$.

## 2. Anatomy of the standard hyperbola

For $\frac{x^2}{a^2}-\frac{y^2}{b^2}=1$:

| Feature | Value |
| --- | --- |
| Transverse axis | length $2a$, along the $x$-axis |
| Conjugate axis | length $2b$, along the $y$-axis |
| Vertices | $(\pm a,0)$ |
| Foci | $(\pm c,0)$, $c^2=a^2+b^2$ |
| Eccentricity | $e=c/a>1$ |
| Directrices | $x=\pm a/e=\pm a^2/c$ |
| Latus rectum | length $2b^2/a$ |
| Asymptotes | $y=\pm\frac ba x$ |
| Parametric point | $(a\sec\theta,\,b\tan\theta)$ |

The latus rectum calculation mirrors the ellipse: at $x=c$ the equation gives $y^2=b^2\left(\frac{c^2}{a^2}-1\right)=\frac{b^4}{a^2}$, so the chord length is $2b^2/a$. The parametric point works because $\sec^2\theta-\tan^2\theta=1$.

For a point $P(x,y)$ on the right branch, the focal distances are

$$
PF_{\text{left}}=ex+a,\qquad PF_{\text{right}}=ex-a,
$$

and their difference is $2a$. If the $y^2$ term is positive instead, $\frac{y^2}{a^2}-\frac{x^2}{b^2}=1$ opens up and down, with foci $(0,\pm c)$ and asymptotes $y=\pm\frac ab x$.

## 3. Asymptotes: the lines the curve approaches

Delete the $1$ from the standard equation:

$$
\frac{x^2}{a^2}-\frac{y^2}{b^2}=0
\quad\Longrightarrow\quad
y=\pm\frac ba x.
$$

These two lines are the **asymptotes**. For large $|x|$ the curve lies arbitrarily close to them but never meets them, because a point on an asymptote would make the left side of the original equation equal to $0$, not $1$. When $a=b$ the asymptotes are perpendicular and the curve is a **rectangular hyperbola**. The hyperbola $\frac{y^2}{b^2}-\frac{x^2}{a^2}=1$ shares the same asymptotes but occupies the other pair of regions; it is called the conjugate hyperbola.

## 4. A fully worked example

Consider

$$
\frac{x^2}{9}-\frac{y^2}{16}=1.
$$

Here $a=3$ and $b=4$, so

$$
c=\sqrt{9+16}=5,\qquad e=\frac53.
$$

Vertices are $(\pm3,0)$, foci are $(\pm5,0)$, directrices are $x=\pm a/e=\pm9/5$, the asymptotes are $y=\pm\frac43x$, and the latus rectum has length $2\cdot16/3=32/3$.

Check the defining property at the vertex $(3,0)$. Its distance to the left focus $(-5,0)$ is $8$, and to the right focus $(5,0)$ is $2$; the difference is $6=2a$, as required. Now test a less obvious point: at $x=5$ the equation gives $\frac{25}{9}-\frac{y^2}{16}=1$, so $y^2=\frac{256}{9}$ and take $P=\left(5,\frac{16}{3}\right)$. Its distance to the right focus is $16/3$, and the focal-distance formula gives

$$
ex-a=\frac53\cdot5-3=\frac{25-9}{3}=\frac{16}{3}.
$$

The agreement confirms both the value of $e$ and the formula.

<learning-block type="mistake" title="Using the ellipse value of c">

Because $c$ appears in both conics, it is tempting to carry over $c^2=a^2-b^2$ from the ellipse. For the hyperbola it is $c^2=a^2+b^2$; the foci are farther from the centre than the vertices. A second misconception is that the curve eventually crosses an asymptote. It cannot: substituting a point of the asymptote into $\frac{x^2}{a^2}-\frac{y^2}{b^2}$ gives $0$, never $1$.

</learning-block>

## Try it yourself

**A.** Find the foci, eccentricity and asymptotes of $\frac{x^2}{4}-\frac{y^2}{5}=1$.

<details><summary>Show the reasoning</summary>

$a=2$, $b=\sqrt5$, so $c=3$, $e=3/2$, foci $(\pm3,0)$, asymptotes $y=\pm\frac{\sqrt5}{2}x$.

</details>

**B.** A hyperbola has vertices $(\pm2,0)$ and foci $(\pm4,0)$. Find its equation.

<details><summary>Show the reasoning</summary>

$a=2$, $c=4$, so $b^2=c^2-a^2=16-4=12$. The equation is $\frac{x^2}{4}-\frac{y^2}{12}=1$.

</details>

**C.** Find the latus rectum of $\frac{y^2}{9}-\frac{x^2}{16}=1$.

<details><summary>Show the reasoning</summary>

Here the transverse axis is vertical, $a=3$ and $b=4$, so the length is $2b^2/a=32/3$. The asymptotes are $y=\pm\frac34x$.

</details>

## Remember

- A hyperbola keeps the *difference* of focal distances equal to $2a$; its eccentricity exceeds $1$.
- For $\frac{x^2}{a^2}-\frac{y^2}{b^2}=1$: $c^2=a^2+b^2$, foci $(\pm c,0)$, $e=c/a$.
- Focal distances on the right branch are $ex+a$ and $ex-a$; their difference is $2a$.
- The asymptotes $y=\pm\frac ba x$ are approached but never met.
- Next, face a general second-degree equation and decide which conic it hides.
