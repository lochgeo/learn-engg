## From a slope to a whole line

A slope tells you a line's direction, and a point tells you where it sits. Together they fix the line completely. The useful question is how to write that fix as one equation that every point on the line satisfies — and, equally, how to recognise the line's intercepts and its perpendicular distance from the origin directly from that equation. Different exam clues make different forms convenient, so this lesson collects them and shows how to move between them.

Throughout, $(x,y)$ denotes a *general* point on the line and $(x_1,y_1)$ a known point on it.

## 1. Point-slope and slope-intercept forms

If the line has slope $m$ and passes through $(x_1,y_1)$, then for any other point $(x,y)$ on the line the slope between the two points must equal $m$:

$$
\frac{y-y_1}{x-x_1}=m \quad\Longrightarrow\quad \boxed{\;y-y_1=m(x-x_1)\;}.
$$

This is the **point-slope form**. It fails for a vertical line, which is simply $x=x_1$.

Set the known point to be the $y$-intercept $(0,c)$. The form becomes $y-c=m(x-0)$, or

$$
\boxed{\;y=mx+c\;},
$$

the **slope-intercept form**. Here $c$ is the $y$-coordinate where the line cuts the $y$-axis. Two lines with equal $m$ but different $c$ are parallel; changing $c$ slides the line without tilting it.

## 2. Two-point and intercept forms

Two known points $(x_1,y_1)$, $(x_2,y_2)$ give the **two-point form**

$$
\frac{y-y_1}{y_2-y_1}=\frac{x-x_1}{x_2-x_1},
$$

which is just the equality of the two slope expressions; it needs $x_1\ne x_2$ and $y_1\ne y_2$.

If the line cuts the axes at $(a,0)$ and $(0,b)$ with $a,b\ne0$, its slope is $\frac{0-b}{a-0}=-\frac ba$. Substituting into point-slope form with $(a,0)$ gives

$$
y=-\frac ba(x-a)\ \Longrightarrow\ \frac{x}{a}+\frac{y}{b}=1,
$$

the **intercept form**. It reads the intercepts straight off: $a$ on the $x$-axis, $b$ on the $y$-axis. The restriction $a,b\ne0$ matters: a line through the origin or parallel to an axis cannot be written this way.

## 3. Normal form

Let $p\ge0$ be the perpendicular distance from the origin to the line, and let $\alpha$ be the angle that this perpendicular (the *normal*) makes with the positive $x$-axis. The foot of the perpendicular is $(p\cos\alpha,p\sin\alpha)$, and the line is perpendicular to the radius through that foot, so its slope is $-\cot\alpha$:

$$
y-p\sin\alpha=-\frac{\cos\alpha}{\sin\alpha}(x-p\cos\alpha).
$$

Multiplying by $\sin\alpha$ and collecting terms gives the **normal form**

$$
\boxed{\;x\cos\alpha+y\sin\alpha=p\;}.
$$

The sanity check is $\cos^2\alpha+\sin^2\alpha=1$: substituting the foot $(p\cos\alpha,p\sin\alpha)$ gives $p(\cos^2\alpha+\sin^2\alpha)=p$.

## 4. General form and conversions

Every line, vertical ones included, can be written as

$$
\boxed{\;Ax+By+C=0\;}\qquad (A,B\ \text{not both zero}).
$$

For $B\ne0$ its slope is $-\dfrac AB$, its $y$-intercept is $-\dfrac CB$, and for $A\ne0$ its $x$-intercept is $-\dfrac CA$.

To convert $Ax+By+C=0$ to normal form, divide by $\sqrt{A^2+B^2}$ and choose the overall sign so that the right-hand side is positive:

$$
\frac{Ax+By+C}{\pm\sqrt{A^2+B^2}}=0
\quad\Longrightarrow\quad
x\cos\alpha+y\sin\alpha=\frac{|C|}{\sqrt{A^2+B^2}}.
$$

So the distance of the line from the origin is $p=\dfrac{|C|}{\sqrt{A^2+B^2}}$. If $C=0$ the line passes through the origin and $p=0$.

## 5. Fully worked examples

**Example 1.** Find the equation of the line through $(2,3)$ with slope $-\tfrac12$, then its intercepts.

Point-slope form: $y-3=-\tfrac12(x-2)$, so $y=-\tfrac12x+4$. Multiplying by $2$ and rearranging, $x+2y-8=0$. Setting $y=0$ gives $x=8$; setting $x=0$ gives $y=4$. Substituting the original point: $2+2(3)-8=0$. ✓

**Example 2.** Convert $3x+4y-10=0$ to normal form and state its distance from the origin.

Here $\sqrt{A^2+B^2}=\sqrt{9+16}=5$, so dividing through by $5$ gives

$$
\tfrac35x+\tfrac45y=2.
$$

Thus $\cos\alpha=\tfrac35$, $\sin\alpha=\tfrac45$ and $p=2$. **Check:** $(2,1)$ satisfies $3(2)+4(1)-10=0$, and its distance from the origin is $\sqrt5\approx2.24$, which is indeed larger than the perpendicular distance $2$ — the perpendicular is the shortest route to the line.

<learning-block type="mistake" title="Intercept form with a zero intercept">

Students often force $x/a+y/b=1$ on a line such as $y=2x$, which passes through the origin: here the intercepts are both zero and the form is undefined. Use slope-intercept form $y=mx+c$ with $c=0$ instead. A second frequent slip is reading the slope of $Ax+By+C=0$ as $-B/A$; solve for $y$ once and you will see it is $-A/B$ (when $B\ne0$).

</learning-block>

## Try it yourself

**A.** Write the equation of the line with slope $3$ passing through $(1,-2)$.

<details><summary>Show the reasoning</summary>

$y+2=3(x-1)$, hence $y=3x-5$. Check: at $x=1$, $y=3-5=-2$. ✓

</details>

**B.** Find the slope and both intercepts of $2x-3y+6=0$.

<details><summary>Show the reasoning</summary>

Rearrange: $3y=2x+6$, so $y=\frac23x+2$: slope $\frac23$, $y$-intercept $2$. Setting $y=0$ gives $x=-3$, the $x$-intercept. The slope $-\frac{A}{B}=-\frac{2}{-3}=\frac23$ agrees.

</details>

**C.** A line cuts the axes at $a=3$ and $b=-2$. Find its equation.

<details><summary>Show the reasoning</summary>

$\frac{x}{3}+\frac{y}{-2}=1$, which simplifies to $2x-3y=6$. Check: $(3,0)$ gives $6=6$ and $(0,-2)$ gives $6=6$. ✓

</details>

## Remember

- Point-slope $y-y_1=m(x-x_1)$ is the starting form; slope-intercept $y=mx+c$ reads off the $y$-intercept.
- Intercept form $\frac xa+\frac yb=1$ requires both intercepts to be non-zero.
- Normal form $x\cos\alpha+y\sin\alpha=p$ has $p\ge0$ as the perpendicular distance from the origin.
- General form $Ax+By+C=0$ covers vertical lines; its slope is $-A/B$ when $B\ne0$.
- Next: use these equations to measure distances between points and lines and angles between lines.
