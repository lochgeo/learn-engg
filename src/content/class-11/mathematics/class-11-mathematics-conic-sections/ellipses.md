## A stretched circle with two foci

Press a circle flat and its points no longer sit at one distance from a single centre. What survives is a two-focus property: for every point of an ellipse, the sum of the distances to the two foci is the same constant. Planetary orbits, whispering galleries and the arch of a bridge all exploit this balance between two anchors.

## 1. The focus–directrix definition

Let $S$ be a fixed point, $d$ a fixed line, and let $e$ be a constant with $0<e<1$. The locus of points $P$ satisfying

$$
PS=e\times(\text{distance from }P\text{ to }d)
$$

is an **ellipse**. The number $e$ is the **eccentricity**; it measures how stretched the curve is. When $e$ approaches $0$ the ellipse approaches a circle; as $e$ approaches $1$ it becomes very elongated. The parabola of the previous lesson is the borderline case $e=1$.

## 2. The standard equation from the two-foci property

An equivalent definition is often easier to use: with foci $F_1(-c,0)$ and $F_2(c,0)$, a point $P(x,y)$ of the ellipse satisfies

$$
PF_1+PF_2=2a,\qquad a>c>0.
$$

The constant $2a$ must exceed the distance $2c$ between the foci, or no such point exists. Start with

$$
\sqrt{(x+c)^2+y^2}=2a-\sqrt{(x-c)^2+y^2}.
$$

Squaring cancels $(x+c)^2+y^2$ against part of the right side and leaves $4cx=4a^2-4a\sqrt{(x-c)^2+y^2}$, that is

$$
a\sqrt{(x-c)^2+y^2}=a^2-cx.
$$

Squaring once more and expanding both sides:

$$
a^2(x^2-2cx+c^2+y^2)=a^4-2a^2cx+c^2x^2.
$$

The $-2a^2cx$ terms cancel. Set $b^2=a^2-c^2>0$; then $(a^2-c^2)x^2+a^2y^2=a^2(a^2-c^2)$ becomes

$$
\boxed{\ \frac{x^2}{a^2}+\frac{y^2}{b^2}=1\ }.
$$

The key relation is therefore

$$
c^2=a^2-b^2,\qquad e=\frac ca=\sqrt{1-\frac{b^2}{a^2}},\qquad 0<e<1.
$$

## 3. Anatomy of the standard ellipse

For $\frac{x^2}{a^2}+\frac{y^2}{b^2}=1$ with $a>b>0$:

| Feature | Value |
| --- | --- |
| Major axis | length $2a$, along the $x$-axis |
| Minor axis | length $2b$, along the $y$-axis |
| Vertices | $(\pm a,0)$ |
| Co-vertices | $(0,\pm b)$ |
| Foci | $(\pm c,0)$, where $c^2=a^2-b^2$ |
| Eccentricity | $e=c/a$ |
| Directrices | $x=\pm a/e=\pm a^2/c$ |
| Latus rectum | length $2b^2/a$ |
| Parametric point | $(a\cos\theta,\,b\sin\theta)$ |

The latus rectum is the chord through a focus perpendicular to the major axis. At $x=c$,

$$
y^2=b^2\left(1-\frac{c^2}{a^2}\right)=b^2\cdot\frac{b^2}{a^2},
$$

so $y=\pm b^2/a$ and the full chord is $2b^2/a$. The parametric point works because $\cos^2\theta+\sin^2\theta=1$.

Two focal-distance formulas are worth memorising, because they avoid a square root. For $P(x,y)$ on the ellipse,

$$
PF_{\text{right}}=a-ex,\qquad PF_{\text{left}}=a+ex,
$$

whose sum is $2a$, exactly as the definition demands. If $b>a$ the major axis is vertical; the roles swap, the foci become $(0,\pm c)$ with $c^2=b^2-a^2$, and the same formulas apply after interchanging the axes.

## 4. A fully worked example

Consider

$$
\frac{x^2}{25}+\frac{y^2}{9}=1.
$$

Here $a=5$ and $b=3$, so

$$
c=\sqrt{25-9}=4,\qquad e=\frac45.
$$

The foci are $(\pm4,0)$, the vertices $(\pm5,0)$, the co-vertices $(0,\pm3)$, the directrices $x=\pm a/e=\pm25/4$, and the latus rectum has length $2b^2/a=18/5$.

Now check a point with $x=4$. The equation gives $y^2=9\left(1-\frac{16}{25}\right)=\frac{81}{25}$, so take $P=(4,\tfrac95)$. Its distance to the right focus $(4,0)$ is simply $9/5$. The focal-distance formula gives

$$
a-ex=5-\frac45\cdot4=\frac{25-16}{5}=\frac95.
$$

The two answers agree. As a final sanity check, the distance to the left focus $(-4,0)$ should be $2a-\tfrac95=10-\tfrac95=\tfrac{41}{5}$; directly, $\sqrt{8^2+(9/5)^2}=\sqrt{64+81/25}=\sqrt{1681/25}=\tfrac{41}{5}$.

<learning-block type="mistake" title="Borrowing the hyperbola relation">

The most frequent error is writing $c^2=a^2+b^2$ for an ellipse. That belongs to the hyperbola; here the foci lie *inside* the vertices, so $c<a$ and $c^2=a^2-b^2$. A second trap is assuming the larger denominator always sits under $x^2$. Read the major axis from whichever denominator is larger: if $b>a$ the foci are on the $y$-axis.

</learning-block>

## Try it yourself

**A.** Find the foci, eccentricity and latus rectum of $\frac{x^2}{16}+\frac{y^2}{7}=1$.

<details><summary>Show the reasoning</summary>

$a=4$, $b=\sqrt7$, so $c=\sqrt{16-7}=3$, $e=3/4$, foci $(\pm3,0)$, and latus rectum $2\cdot7/4=7/2$.

</details>

**B.** An ellipse has foci $(\pm3,0)$ and minor axis $8$. Find its equation.

<details><summary>Show the reasoning</summary>

$c=3$ and $b=4$, so $a^2=b^2+c^2=25$ and $a=5$. The equation is $\frac{x^2}{25}+\frac{y^2}{16}=1$.

</details>

**C.** For $\frac{x^2}{25}+\frac{y^2}{9}=1$, find the distance from $(4,\tfrac95)$ to the left focus without a distance formula.

<details><summary>Show the reasoning</summary>

$a+ex=5+\frac45\cdot4=\frac{41}{5}$. This matches the distance obtained by the Pythagoras check in the worked example.

</details>

## Remember

- An ellipse has eccentricity $0<e<1$; equivalently, the sum of focal distances is $2a$.
- For $\frac{x^2}{a^2}+\frac{y^2}{b^2}=1$ with $a>b$: $c^2=a^2-b^2$, $e=c/a$, foci $(\pm c,0)$.
- Focal distances are $a-ex$ and $a+ex$; their sum is $2a$.
- Directrices are $x=\pm a/e$ and the latus rectum is $2b^2/a$.
- Next, change "sum" to "difference": the focus–focus condition for a hyperbola.
