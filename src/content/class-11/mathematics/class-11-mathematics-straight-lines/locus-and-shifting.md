## From a moving condition to an equation

A point can be pinned down by a rule instead of by a name: "twice as far from this post as from that one", or "equidistant from two fixed points". The set of all positions obeying the rule is a **locus**, and when the rule uses distances and slopes the locus is usually a line or a circle. A second idea, shifting the origin, lets us rewrite an awkward equation in friendlier coordinates without moving the curve at all.

## 1. Finding a locus

The method is short but must be applied honestly:

1. Let $P(x,y)$ be an *arbitrary* point satisfying the condition.
2. Translate the condition into an equation in $x$ and $y$.
3. Simplify, eliminating radicals where possible.
4. Check both directions: every point of the locus satisfies the equation, and every point satisfying the equation obeys the rule.

Do not assume at the start what shape the answer will be. If a square root appears, isolate it before squaring and note that squaring can introduce points with the wrong sign; distance conditions usually make this harmless because both sides are non-negative.

Two standard results follow directly from the distance formula: the locus of points equidistant from $A$ and $B$ is the perpendicular bisector of $AB$, and the locus of points at a fixed distance $r$ from $(h,k)$ is the circle $(x-h)^2+(y-k)^2=r^2$.

## 2. Translation of axes

Keep the axes parallel to their old directions and move the origin to $O'(\alpha,\beta)$. If $P$ has old coordinates $(x,y)$ and new coordinates $(X,Y)$, then

$$
\boxed{\;X=x-\alpha,\quad Y=y-\beta\qquad\Longleftrightarrow\qquad x=X+\alpha,\ y=Y+\beta\;}.
$$

A point fixed in the plane acquires different numbers, but distances, angles and lengths are unchanged. The purpose is simplification: a circle centred at $(\alpha,\beta)$ becomes $X^2+Y^2=r^2$, or $x^2+y^2-4x+6y+9=0$ becomes $X^2+Y^2=4$ after shifting to $(2,-3)$.

## 3. Removing first-degree terms

For a central conic written as

$$
ax^2+2hxy+by^2+2gx+2fy+c=0
$$
(here $h$ is a coefficient, not a shift), with $ab-h^2\ne0$, choose the new origin $(\alpha,\beta)$ so that the coefficients of $X$ and $Y$ vanish:

$$
a\alpha+h\beta+g=0,\qquad h\alpha+b\beta+f=0.
$$

Substituting $x=X+\alpha,\ y=Y+\beta$ then gives

$$
aX^2+2hXY+bY^2+\underbrace{(g\alpha+f\beta+c)}_{\text{new constant}}=0.
$$

The constant simplifies because $a\alpha^2+2h\alpha\beta+b\beta^2+2g\alpha+2f\beta+c$ can be regrouped as $\alpha(a\alpha+h\beta+g)+\beta(h\alpha+b\beta+f)+(g\alpha+f\beta+c)$, and the first two brackets vanish. This is why the centre of a central conic is exactly the point that kills the linear terms.

## 4. Fully worked examples

**Example 1: a locus.** A point $P$ is twice as far from $(2,0)$ as from the origin. Find its locus.

$$
\sqrt{(x-2)^2+y^2}=2\sqrt{x^2+y^2}.
$$

Squaring: $x^2-4x+4+y^2=4x^2+4y^2$, hence

$$
3x^2+3y^2+4x-4=0
\ \Longleftrightarrow\
\left(x+\tfrac23\right)^2+y^2=\frac{16}{9}.
$$

So the locus is a circle with centre $\left(-\tfrac23,0\right)$ and radius $\tfrac43$. **Check:** its intersections with the $x$-axis are $x=\tfrac23$ (distances $\tfrac43$ and $\tfrac23$, ratio $2$) and $x=-2$ (distances $4$ and $2$, ratio $2$). ✓

**Example 2: a shift.** Shift the origin to $(2,-3)$ in $x^2+y^2-4x+6y+9=0$.

Put $x=X+2$, $y=Y-3$:

$$
(X+2)^2+(Y-3)^2-4(X+2)+6(Y-3)+9
= X^2+Y^2+(4X-4X)+(-6Y+6Y)+(4+9-8-18+9),
$$

so the equation becomes $X^2+Y^2-4=0$, i.e. $X^2+Y^2=4$. **Check:** the original equation is $(x-2)^2+(y+3)^2=4$, a circle of radius $2$ about the new origin. ✓

<learning-block type="mistake" title="Getting the shift backwards">

The common error is writing $X=x+\alpha$ when the new origin is $(\alpha,\beta)$: at the new origin the *old* coordinates are $(\alpha,\beta)$ and the *new* ones are $(0,0)$, so $X=\alpha-\alpha=0$, not $2\alpha$. Use $x=X+\alpha$ (old in terms of new) as the reliable form. A second error is substituting into only one occurrence of $x$ or $y$; every occurrence must change, including constants produced by completing the square.

</learning-block>

## Try it yourself

**A.** Find the locus of points equidistant from $(1,2)$ and $(3,4)$.

<details><summary>Show the reasoning</summary>

$(x-1)^2+(y-2)^2=(x-3)^2+(y-4)^2$ expands to $-2x-4y+5=-6x-8y+25$, hence $4x+4y-20=0$, or $x+y-5=0$. The midpoint $(2,3)$ satisfies it, and its slope $-1$ is perpendicular to the slope $1$ of the segment joining the two points. ✓

</details>

**B.** Shift the origin to $(1,-2)$ in $2x^2+2y^2-4x+8y+1=0$.

<details><summary>Show the reasoning</summary>

With $x=X+1$, $y=Y-2$: $2(X+1)^2+2(Y-2)^2-4(X+1)+8(Y-2)+1=2X^2+2Y^2-9$. The new equation is $2X^2+2Y^2-9=0$, i.e. $X^2+Y^2=\tfrac92$. The original circle has centre $(1,-2)$ and radius squared $1+4-\tfrac12=\tfrac92$. ✓

</details>

## Remember

- A locus is the full set of points satisfying a condition; verify both directions of the implication.
- Translation of axes: $X=x-\alpha$, $Y=y-\beta$, with $x=X+\alpha$, $y=Y+\beta$; it changes coordinates, not geometry.
- To clear linear terms of a central conic, solve $a\alpha+h\beta+g=0$ and $h\alpha+b\beta+f=0$.
- Equidistance from two points gives the perpendicular bisector; a fixed distance from one point gives a circle.
- Next: put distance, angle, family and locus ideas together in geometric applications.
