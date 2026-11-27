## From one curve to the region between two

The previous module measured area between a curve and an axis. Many problems instead ask for the area trapped between two curves. The idea is the same: slice the region into thin strips, measure each strip, and add them up. The only new decision is the height of a strip - it is now the vertical distance between the upper and lower curves.

This distance must be positive. That is why finding intersection points and identifying which curve is on top is not a preliminary chore; it is part of the definition of the area.

## 1. Vertical strips: integrating with respect to $x$

Suppose $y=f(x)$ and $y=g(x)$ are continuous on $[a,b]$, the curves intersect at $x=a$ and $x=b$, and $f(x)\ge g(x)$ on that interval. A vertical strip at position $x$ has height $f(x)-g(x)$ and width $dx$, so

$$
A=\int_a^b \bigl[f(x)-g(x)\bigr]\,dx.
$$

If the curves cross inside the interval, split at the crossing point and use upper minus lower on each subinterval:

$$
A=\int_a^c \bigl[f(x)-g(x)\bigr]\,dx+\int_c^b \bigl[g(x)-f(x)\bigr]\,dx.
$$

A compact form is $A=\int_a^b \lvert f(x)-g(x)\rvert\,dx$, but in calculations you still need the split points.

<learning-block type="concept" title="Upper minus lower, right minus left">

With vertical strips, area is $\int (\text{upper }y-\text{lower }y)\,dx$. With horizontal strips, area is $\int (\text{right }x-\text{left }x)\,dy$. The variable of integration tells you which direction the strip thickness measures.

</learning-block>

## 2. Horizontal strips: integrating with respect to $y$

If the region is easier to describe as right curve minus left curve, write $x=x_R(y)$ and $x=x_L(y)$ and integrate over $y$:

$$
A=\int_c^d \bigl[x_R(y)-x_L(y)\bigr]\,dy.
$$

This choice is especially useful when a single $y$-interval has one right boundary and one left boundary, but the same region would need several $x$-intervals. The answer must be the same either way; changing the variable is a change of method, not a change of area.

## 3. Finding the limits

The limits are not guessed from the diagram alone. They come from intersection points or stated boundaries.

- For two curves, solve $f(x)=g(x)$ (or $x_R(y)=x_L(y)$).
- For a curve and a line, solve them simultaneously.
- If the region is bounded by more than two graphs, check which pair actually forms the boundary on each piece.

A quick sketch or sign check prevents a common error: integrating over an interval where the curves have already swapped roles.

## 4. Worked example: area between a line and a parabola

Find the area enclosed by $y=x^2$ and $y=2x-x^2$.

**Step 1: Find intersections.** Set $x^2=2x-x^2$. Then $2x^2-2x=0$, so $2x(x-1)=0$. The curves meet at $x=0$ and $x=1$.

**Step 2: Identify the upper curve.** Test $x=\tfrac12$: $y=2x-x^2=1-\tfrac14=\tfrac34$, while $y=x^2=\tfrac14$. Thus $2x-x^2$ is above $x^2$ on $(0,1)$.

**Step 3: Integrate upper minus lower.**

$$
A=\int_0^1 \bigl[(2x-x^2)-x^2\bigr]\,dx=\int_0^1 (2x-2x^2)\,dx.
$$

Evaluate:

$$
A=\left[x^2-\frac{2x^3}{3}\right]_0^1=1-\frac{2}{3}=\frac{1}{3}\ \text{square units}.
$$

**Sanity check.** The region spans a width of 1, and the maximum vertical gap occurs at $x=\tfrac12$: $\tfrac34-\tfrac14=\tfrac12$. An area of $\tfrac13$ is smaller than the enclosing rectangle $1\times\tfrac12$, which is sensible.

<learning-block type="mistake" title="Using the wrong curve as the upper boundary">

If you subtract in the wrong order, you get the negative of the area. Here, $\int_0^1 (x^2-(2x-x^2))\,dx=-\tfrac13$. The minus sign is a warning, not a final answer. Test a point inside the interval, or use $\lvert f-g\rvert$ after splitting.

</learning-block>

## Try it yourself

**1.** Find the area enclosed by $y=x$ and $y=x^2$.

<details><summary>Show the reasoning</summary>

Intersections: $x=x^2$ gives $x=0,1$. On $(0,1)$, $x>x^2$. Therefore

$$
A=\int_0^1 (x-x^2)\,dx=\left[\frac{x^2}{2}-\frac{x^3}{3}\right]_0^1=\frac{1}{2}-\frac{1}{3}=\frac{1}{6}\ \text{square units}.
$$

</details>

**2.** Find the area bounded by $y=x^2$ and $y=4$.

<details><summary>Show the reasoning</summary>

Intersections: $x^2=4$ gives $x=-2,2$. The line $y=4$ is above the parabola, so

$$
A=\int_{-2}^{2}(4-x^2)\,dx=2\int_0^2(4-x^2)\,dx=2\left[4x-\frac{x^3}{3}\right]_0^2=2\left(8-\frac{8}{3}\right)=\frac{32}{3}\ \text{square units}.
$$

</details>

**3.** Find the area between $x=y^2$ and $x=y+2$.

<details><summary>Show the reasoning</summary>

Solve $y^2=y+2$, so $y^2-y-2=0$ and $(y-2)(y+1)=0$. The intersection ordinates are $y=-1,2$. For $y=0$, the line gives $x=2$ and the parabola gives $x=0$, so the line is to the right. Hence

$$
A=\int_{-1}^{2}\bigl[(y+2)-y^2\bigr]\,dy=\left[\frac{y^2}{2}+2y-\frac{y^3}{3}\right]_{-1}^{2}=\left(2+4-\frac{8}{3}\right)-\left(\frac{1}{2}-2+\frac{1}{3}\right)=\frac{9}{2}\ \text{square units}.
$$

</details>

## Remember

- Area between curves is the integral of the distance between boundaries: upper minus lower, or right minus left.
- Find intersection points algebraically; they are usually the limits.
- Split the integral wherever the upper/lower (or right/left) curve changes.
- A negative result means the subtraction order is reversed, not that the area is negative.
- Next, we will combine these choices in mixed regions where no single strip rule covers the whole figure at once.

