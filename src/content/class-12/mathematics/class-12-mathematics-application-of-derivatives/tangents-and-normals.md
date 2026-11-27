## The derivative as a slope in the concrete world

A car's headlight beam leaves the car along the tangent to its path at that instant; a banked racing track is designed from the gradient of the intended curve. In each case the useful object is not the curve itself but the straight line that just touches it at one point and has the same direction there. That line is the **tangent**, and its slope is precisely the derivative. The line perpendicular to it through the same point is the **normal** — the direction a reflecting surface or a support force often takes.

## 1. Equation of the tangent

Let $y=f(x)$ and let $P=(x_0,y_0)$ with $y_0=f(x_0)$ be a point of the curve where $f$ is differentiable. The slope of the tangent at $P$ is

$$
m_T=f'(x_0).
$$

A line through $(x_0,y_0)$ with slope $m_T$ has point-slope form

$$
y-y_0=f'(x_0)(x-x_0).
$$

If $f'(x_0)$ does not exist but the curve has a vertical tangent (for example $y=\sqrt[3]{x}$ at $x=0$), the tangent is the vertical line $x=x_0$; the point-slope form cannot describe it.

## 2. Equation of the normal

The normal is perpendicular to the tangent. When $m_T\ne0$, its slope is

$$
m_N=-\frac{1}{m_T}=-\frac{1}{f'(x_0)},
$$

because the product of the slopes of two perpendicular, non-vertical lines is $-1$. The normal through $P$ is therefore

$$
y-y_0=-\frac{1}{f'(x_0)}(x-x_0).
$$

Two boundary cases matter:

- if $m_T=0$ (horizontal tangent), the normal is the vertical line $x=x_0$;
- if the tangent is vertical, the normal is the horizontal line $y=y_0$.

## 3. Worked example: a parabola

For $y=x^2$ at the point $(2,4)$:

1. $f'(x)=2x$, so $m_T=f'(2)=4$.
2. Tangent: $y-4=4(x-2)$, which simplifies to $y=4x-4$.
3. Normal: $m_N=-\frac14$, so $y-4=-\frac14(x-2)$, or $x+4y=18$.

**Sanity check:** substitute $(2,4)$ into both lines: $4=4(2)-4$ and $2+4(4)=18$. Both pass through the point. The slopes $4$ and $-\frac14$ multiply to $-1$, confirming perpendicularity.

## 4. Tangents with a given property

Sometimes the point of contact is not given. Suppose the tangent to $y=x^2$ must pass through the external point $(0,-3)$. Let the contact point be $(a,a^2)$. The tangent there is

$$
y-a^2=2a(x-a)\quad\Longrightarrow\quad y=2ax-a^2.
$$

Requiring it to pass through $(0,-3)$ gives $-3=-a^2$, so $a=\pm\sqrt3$. There are two tangents, touching at $(\sqrt3,3)$ and $(-\sqrt3,3)$. **Sanity check:** for $a=\sqrt3$ the tangent is $y=2\sqrt3\,x-3$, which passes through $(0,-3)$, and the parabola lies above it because $x^2-2\sqrt3 x+3=(x-\sqrt3)^2\ge0$.

## 5. Horizontal tangents and stationary points

The tangent is horizontal exactly where $f'(x)=0$. For $y=x^3-3x$,

$$
f'(x)=3x^2-3=3(x-1)(x+1),
$$

so horizontal tangents occur at $x=1$ (point $(1,-2)$) and $x=-1$ (point $(-1,2)$). These are the turning points that the maxima and minima module classifies.

<learning-block type="mistake" title="Two errors with normals">

First, writing $m_N=-1/m_T$ when $m_T=0$ produces a division by zero; the correct normal to a horizontal tangent is the vertical line $x=x_0$. Second, using the derivative value as the whole equation: $f'(2)=4$ is a slope, not a line. Always write $y-y_0=m(x-x_0)$ and then simplify. A third slip is using an external point as the point of contact when the contact point is unknown — introduce $a$ for the contact point and solve for it.

</learning-block>

## Try it yourself

**A.** Find the tangent and normal to $y=x^3-x$ at $x=1$.

<details><summary>Show the reasoning</summary>

The point is $(1,0)$ and $f'(x)=3x^2-1$, so $m_T=2$. Tangent: $y=2(x-1)=2x-2$. Normal: slope $-\frac12$, so $y=-\frac12(x-1)$, i.e. $x+2y=1$.

</details>

**B.** Find the tangent to $y=\sqrt x$ at $(4,2)$.

<details><summary>Show the reasoning</summary>

$f'(x)=\frac{1}{2\sqrt x}$, so $m_T=\frac14$ at $x=4$. Tangent: $y-2=\frac14(x-4)$, giving $y=\frac{x}{4}+1$. Check: at $x=4$, $y=2$.

</details>

**C.** At which point of $y=x^2+3x$ is the tangent parallel to the line $y=5x$?

<details><summary>Show the reasoning</summary>

Parallel lines have equal slopes, so set $f'(x)=2x+3=5$, giving $x=1$. The point is $(1,4)$ and the tangent there is $y-4=5(x-1)$, i.e. $y=5x-1$ — parallel to $y=5x$ but not the same line.

</details>

## Remember

- The tangent at $(x_0,f(x_0))$ has slope $f'(x_0)$ and equation $y-y_0=f'(x_0)(x-x_0)$.
- The normal has slope $-1/f'(x_0)$ when $f'(x_0)\ne0$; a horizontal tangent gives a vertical normal.
- If the contact point is unknown, call it $(a,f(a))$ and solve for $a$ using the extra condition.
- Horizontal tangents occur at critical points, where $f'(x)=0$.
- A slope is not a line: keep the point-slope form until the algebra is finished.
