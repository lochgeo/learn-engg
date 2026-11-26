## Choosing the tool before doing the algebra

Examination questions rarely say "this is an ellipse". They give a curve, a line and a condition, and expect you to decide whether to complete a square, use a focal property, eliminate a parameter, or set a discriminant to zero. This lesson connects the previous five into a working method: reduce the curve to a standard form, name it, then reach for the one tool that fits the question.

## 1. A reliable workflow

1. **Reduce.** Remove any common factor, complete the square in each variable, and shift the origin if needed. Recall the translation $X=x-\alpha$, $Y=y-\beta$ from Straight Lines; for a central conic, $\alpha$ and $\beta$ come from $A\alpha+H\beta+G=0$, $H\alpha+B\beta+F=0$.
2. **Identify.** Use the sign of $AB-H^2$ if an $xy$ term survives, then read off $a$, $b$, $c$, $e$, the focus and the directrix.
3. **Choose the tool.** A point of contact suggests the tangent formula; a line meeting a curve suggests substitution and a discriminant; a distance sum or difference suggests the focal definitions; a moving point defined by another point suggests eliminating a parameter.
4. **Verify.** Substitute a known point, check a length is positive, or test a special case such as a vertex.

## 2. Tangents at a known point

For a point $(x_1,y_1)$ on the curve, the tangent is obtained by a symmetric replacement: $x^2\to xx_1$, $y^2\to yy_1$, $2x\to x+x_1$, $2y\to y+y_1$.

| Curve | Tangent at $(x_1,y_1)$ |
| --- | --- |
| $x^2+y^2=r^2$ | $xx_1+yy_1=r^2$ |
| $y^2=4ax$ | $yy_1=2a(x+x_1)$ |
| $\frac{x^2}{a^2}+\frac{y^2}{b^2}=1$ | $\frac{xx_1}{a^2}+\frac{yy_1}{b^2}=1$ |
| $\frac{x^2}{a^2}-\frac{y^2}{b^2}=1$ | $\frac{xx_1}{a^2}-\frac{yy_1}{b^2}=1$ |

For example, the tangent to $x^2+y^2=25$ at $(3,4)$ is $3x+4y=25$; the point satisfies it because $9+16=25$.

## 3. Tangents with a given slope

When the point of contact is unknown, write the line as $y=mx+c$, substitute into the curve and demand a **zero discriminant**, so the two intersections merge into one. Assuming the standard orientations:

| Curve | Condition for tangency |
| --- | --- |
| $y^2=4ax$ | $c=\dfrac{a}{m}$, $m\ne0$ |
| $\frac{x^2}{a^2}+\frac{y^2}{b^2}=1$ | $c^2=a^2m^2+b^2$ |
| $\frac{x^2}{a^2}-\frac{y^2}{b^2}=1$ | $c^2=a^2m^2-b^2$ (so $|m|>b/a$) |

To illustrate the first row: $(mx+c)^2=4ax$ becomes $m^2x^2+(2mc-4a)x+c^2=0$. Its discriminant is $(2mc-4a)^2-4m^2c^2=16a^2-16amc$, which vanishes exactly when $mc=a$.

For a circle, skip the discriminant: a line $Ax+By+C=0$ is tangent to a circle of centre $O$ and radius $r$ precisely when the perpendicular distance $\frac{|Ax_0+By_0+C|}{\sqrt{A^2+B^2}}$ equals $r$.

## 4. Eliminating a parameter for a locus

When a point is defined by its relationship to a moving point on a known curve, give the moving point a parameter and eliminate it. Suppose $Q(at^2,2at)$ lies on $y^2=4ax$ with focus $S(a,0)$, and $M(X,Y)$ is the midpoint of $SQ$. Then

$$
X=\frac{a+at^2}{2},\qquad Y=at.
$$

From $t=Y/a$, the first equation gives $X=\frac a2+\frac{Y^2}{2a}$, so

$$
Y^2=2a\left(X-\frac a2\right).
$$

The locus is another parabola, with vertex $(a/2,0)$ and latus rectum $a$. Notice the factor: $Y^2=2a(X-a/2)$ does *not* have coefficient $4a$, so its own parameter is $a/2$, not $a$.

## 5. Fully worked example

Find the tangent to $y^2=8x$ at the point with parameter $t=2$.

Here $4a=8$, so $a=2$. The point is $(at^2,2at)=(8,8)$. Using the point formula $yy_1=2a(x+x_1)$,

$$
8y=4(x+8)\quad\Longrightarrow\quad x-2y+8=0.
$$

**Check by slope.** Rewriting gives $y=\frac12x+4$, so $m=\frac12$ and $c=4$. The slope condition gives $c=\frac{a}{m}=\frac{2}{1/2}=4$, agreeing exactly.

**Check by substitution.** Put $y=2x+8$? No — use the line as $y=\frac12x+4$ in $y^2=8x$: $\left(\frac12x+4\right)^2=8x$ gives $\frac14x^2+4x+16=8x$, hence $\frac14x^2-4x+16=0$, or $(x-8)^2=0$. The double root at $x=8$ confirms tangency at $(8,8)$.

<learning-block type="mistake" title="Applying a discriminant to a straight line">

When $y=mx+c$ is substituted into a parabola, the coefficient of $x^2$ is $m^2$. If $m=0$ the quadratic degenerates to a linear equation, and "discriminant equals zero" is meaningless. Handle horizontal lines separately. Similarly, for the hyperbola the condition $c^2=a^2m^2-b^2$ needs $a^2m^2>b^2$ for a real intercept; if it fails, no tangent of that slope exists because the slope lies between the asymptotes.

</learning-block>

## Try it yourself

**A.** Write the tangent to $\frac{x^2}{9}+\frac{y^2}{4}=1$ at $(3,0)$.

<details><summary>Show the reasoning</summary>

Using $\frac{xx_1}{a^2}+\frac{yy_1}{b^2}=1$ gives $\frac{3x}{9}+0=1$, so $x=3$. It is the vertical tangent at the right vertex, as expected.

</details>

**B.** Find $c>0$ so that $y=2x+c$ is tangent to $y^2=12x$.

<details><summary>Show the reasoning</summary>

Here $a=3$ and $m=2$, so $c=a/m=3/2$. Substituting: $(2x+\tfrac32)^2=12x$ gives $4x^2-6x+\tfrac94=0$, whose discriminant is $36-36=0$; the contact point is $(3/4,3)$.

</details>

**C.** A point $M$ is the midpoint of the focus and a point of $y^2=4ax$. State the locus.

<details><summary>Show the reasoning</summary>

With $Q(at^2,2at)$ and $S(a,0)$, the midpoint gives $Y=at$ and $X=\frac{a+at^2}{2}$. Eliminating $t$: $Y^2=2a\left(X-\frac a2\right)$, a parabola with vertex $(a/2,0)$.

</details>

## Remember

- Reduce first, identify second, choose the tool third; verify with a known point.
- Tangents at a point use $x^2\to xx_1$, $y^2\to yy_1$ and $2x\to x+x_1$.
- Tangents of a given slope come from a zero discriminant: $c=a/m$, $c^2=a^2m^2+b^2$, or $c^2=a^2m^2-b^2$.
- For circles, compare the centre-to-line distance with the radius.
- Loci are found by parameterising the moving point and eliminating the parameter.
- The next module gathers these tools into a timed mastery check.
