## One equation, several shapes

The four curves already met do not announce themselves in exam questions. Instead you receive something like $Ax^2+2Hxy+By^2+2Gx+2Fy+C=0$ and must decide what it represents. There is a small invariant that answers this without plotting a single point: combine the coefficients of the squared and cross terms and compare the result with zero. The rest of the work — finding a centre, a vertex or an asymptote — follows after the type is known.

## 1. The general second-degree equation

Write

$$
Ax^2+2Hxy+By^2+2Gx+2Fy+C=0,
$$

with the cross term written as $2Hxy$ so that the coefficient matrix is symmetric. Only the quadratic part $Ax^2+2Hxy+By^2$ decides the *family* of the curve. The invariant is

$$
\Delta_2=AB-H^2.
$$

For a **non-degenerate** conic:

| Condition | Family |
| --- | --- |
| $AB-H^2>0$ | ellipse; a circle when also $A=B$ and $H=0$ |
| $AB-H^2=0$ | parabola |
| $AB-H^2<0$ | hyperbola; rectangular when also $A+B=0$ |

The names match what has already been derived. A circle has equal squared coefficients and no cross term. A parabola comes from squaring a linear expression such as $(y+2)^2=4(x-1)$, whose quadratic part is a perfect square, and a perfect square has $AB-H^2=0$. A hyperbola splits into two directions, which is signalled by a negative value.

## 2. Why this test works

A rotation of axes through an angle $\theta$ removes the cross term when

$$
\tan 2\theta=\frac{2H}{A-B}\quad (A\ne B),
$$

and $\theta=45^\circ$ when $A=B$ and $H\ne0$. Under a rotation the quantity $AB-H^2$ is unchanged. Once the cross term is gone the quadratic part is $A'X^2+B'Y^2$, and $A'B'=AB-H^2$. If the product is positive the two coefficients have the same sign (ellipse), if it is zero one coefficient vanishes (parabola), and if it is negative they have opposite signs (hyperbola). That is the whole reason the test works. For board-level problems $H=0$, so the classification reduces to comparing the coefficients of $x^2$ and $y^2$.

## 3. Degenerate cases: the caveat

A zero value of the full determinant

$$
\delta=
\begin{vmatrix}
A & H & G\\
H & B & F\\
G & F & C
\end{vmatrix}
$$

means the equation factors into simpler pieces — a pair of lines, a single point, or no real locus. The $\Delta_2$ test then describes the *shape the equation resembles*, not a genuine curve. For example $x^2+y^2+2x+2y+2=0$ has $A=B$ and $H=0$, but it is $(x+1)^2+(y+1)^2=0$: a single point $(-1,-1)$. Similarly $x^2-y^2+2x-2y=0$ factors as $(x-y)(x+y+2)=0$, a pair of lines rather than a hyperbola. Check for factorisation or a non-positive radius before announcing a curve.

## 4. Finding the centre of a central conic

For an ellipse or hyperbola ($AB-H^2\ne0$) the centre $(\alpha,\beta)$ is the solution of the two linear equations

$$
A\alpha+H\beta+G=0,\qquad H\alpha+B\beta+F=0.
$$

These are the stationary conditions for the quadratic part: shifting the origin to the centre removes every first-degree term. Put $X=x-\alpha$, $Y=y-\beta$ and the conic takes its standard form. A parabola has no centre and this system has no solution, which is another way of recognising it.

## 5. A fully worked example

Classify and reduce

$$
2x^2+3y^2-8x+12y+8=0.
$$

Here $A=2$, $H=0$, $B=3$, so $AB-H^2=6>0$: the curve is an ellipse. It is not a circle because $A\ne B$.

The centre satisfies $2\alpha-4=0$ and $3\beta+6=0$, giving $(\alpha,\beta)=(2,-2)$. Shift with $X=x-2$, $Y=y+2$. Evaluating the original left side at the centre gives

$$
2(2)^2+3(-2)^2-8(2)+12(-2)+8=-12,
$$

so the translated equation is $2X^2+3Y^2=12$, or

$$
\frac{X^2}{6}+\frac{Y^2}{4}=1.
$$

This is a real ellipse with semi-axes $\sqrt6$ and $2$, centred at $(2,-2)$. Sanity check: the original equation has no $xy$ term, so no rotation was needed; the constant on the right is positive, so real points exist.

As a contrast, $y^2-4x+4y+8=0$ has $A=0$, $B=1$, $H=0$, hence $AB-H^2=0$. Completing the square gives $(y+2)^2=4(x-1)$: a parabola with vertex $(1,-2)$ and $a=1$.

<learning-block type="mistake" title="Classifying before removing the cross term">

Looking only at the coefficients of $x^2$ and $y^2$ fails as soon as an $xy$ term is present: $x^2-2xy+y^2+\dots=0$ has coefficients $1$ and $1$ yet $AB-H^2=1-1=0$, so it is parabolic, not circular. Always include $H$. The other common error is to stop at "ellipse" when the radius-squared turns out negative or zero; test the reduced equation for real points before describing the curve.

</learning-block>

## Try it yourself

**A.** Classify $3x^2+3y^2-6x+6y+3=0$ and give its centre and radius.

<details><summary>Show the reasoning</summary>

$A=B=3$, $H=0$, so $AB-H^2=9>0$ and $A=B$: a circle. Dividing by $3$ gives $x^2+y^2-2x+2y+1=0$, so the centre is $(1,-1)$ and $r^2=1+1-1=1$, hence $r=1$.

</details>

**B.** Classify $x^2-2xy+y^2+4x-2y+1=0$.

<details><summary>Show the reasoning</summary>

$A=1$, $H=-1$, $B=1$, so $AB-H^2=0$: a parabola. Its quadratic part is the perfect square $(x-y)^2$, which is why the invariant vanishes.

</details>

**C.** Why is $x^2-y^2+2x-2y=0$ not a hyperbola despite $AB-H^2=-1$?

<details><summary>Show the reasoning</summary>

It is degenerate: $(x+1)^2-(y+1)^2=0$ factors as $(x-y)(x+y+2)=0$, a pair of intersecting lines. The invariant identifies the family the equation resembles; the full determinant test or a factorisation distinguishes a genuine hyperbola from its degenerate limit.

</details>

## Remember

- Use $Ax^2+2Hxy+By^2+2Gx+2Fy+C=0$ and the invariant $AB-H^2$.
- Positive means ellipse (circle if $A=B$, $H=0$); zero means parabola; negative means hyperbola.
- A rotation removes the $xy$ term when $\tan2\theta=\frac{2H}{A-B}$; it does not change $AB-H^2$.
- For a central conic, the centre solves $A\alpha+H\beta+G=0$ and $H\alpha+B\beta+F=0$.
- Always exclude degenerate cases before naming the curve. Next, combine every tool on mixed problems.
