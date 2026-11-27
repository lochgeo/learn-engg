## Your study plan for this chapter

These six ideas are one continuous story: the derivative measures a rate, its sign tells direction, its value gives a tangent line, its linearisation estimates values, and its zeros locate turning points that optimisation exploits. A focused first pass takes about **2 hours**, followed by this mastery check:

| Step | Module | Time |
| --- | --- | --- |
| 1 | Rate of change | 20 min |
| 2 | Increasing and decreasing functions | 20 min |
| 3 | Tangents and normals | 20 min |
| 4 | Approximations | 20 min |
| 5 | Maxima and minima | 20 min |
| 6 | Optimisation problems | 20 min |
| 7 | This mastery check | 25 min |

After each module, close the notes and redo its worked example from a blank page. Mark it done only when you can say why every step is legal. The timed JEE Main set comes after this check; its value is in choosing the right tool quickly.

## First choose the tool

| Clue in the question | Start with |
| --- | --- |
| "How fast *now*?", or two quantities tied by a geometric relation | Differentiate the relation with respect to $t$, then substitute numbers |
| "Is $f$ increasing/decreasing?" | Sign chart of $f'$ from its critical points; use the mean value theorem to justify |
| "Find the tangent/normal at $(x_0,y_0)$" | $m_T=f'(x_0)$; for the normal use $m_N=-1/m_T$ when $m_T\ne0$ |
| Tangent through an external point | Let the contact point be $(a,f(a))$, write the tangent there, solve for $a$ |
| "Estimate $\sqrt{a+\Delta}$", $(1+\varepsilon)^n$, or a small trig value | $f(x+\Delta x)\approx f(x)+f'(x)\Delta x$; convert degrees to radians |
| "Local maximum/minimum", "$f'(c)=0$" | First derivative sign change; or $f''$ test when $f''(c)\ne0$ |
| "Greatest/least value on $[a,b]$" | Evaluate $f$ at interior critical points **and** endpoints |
| "Maximise/minimise" with a fixed perimeter, area or sum | Write the objective in one variable, state the domain, differentiate, classify |
| $f'(c)=0$ but signs do not change | Stationary point of inflection, not an extremum ($x^3$ at $0$) |

## Mastery check

Try every question before opening its answer. Recompute each number rather than trusting the first line you write.

### 1. A sphere growing in time

The volume of a sphere is $V=\frac43\pi r^3$. If $r=3\ \text{cm}$ and $dr/dt=2\ \text{cm/s}$, find $dV/dt$.

<details><summary>Answer and reasoning</summary>

$\frac{dV}{dt}=4\pi r^2\frac{dr}{dt}=4\pi(9)(2)=72\pi\ \text{cm}^3/\text{s}$ (about $226\ \text{cm}^3/\text{s}$). The rate is positive because the sphere expands.

</details>

### 2. Intervals of monotonicity

Find where $f(x)=2x^3-3x^2-12x+5$ increases and decreases.

<details><summary>Answer and reasoning</summary>

$f'(x)=6x^2-6x-12=6(x+1)(x-2)$. The critical points are $-1$ and $2$. The product is positive for $x<-1$, negative for $-1<x<2$ and positive for $x>2$. Hence $f$ increases on $(-\infty,-1)$ and $(2,\infty)$, and decreases on $(-1,2)$.

</details>

### 3. Tangent and normal together

For $y=\sqrt x$, find the tangent and normal at $(4,2)$.

<details><summary>Show the reasoning</summary>

$f'(x)=\frac{1}{2\sqrt x}$, so $m_T=\frac14$. Tangent: $y-2=\frac14(x-4)$, i.e. $y=\frac{x}{4}+1$. Normal: slope $-4$, so $y-2=-4(x-4)$, i.e. $4x+y=18$. Check: at $(4,2)$, $16+2=18$.

</details>

### 4. A small power

Estimate $(0.99)^{10}$ by a linear approximation.

<details><summary>Answer and reasoning</summary>

Use $f(x)=x^{10}$ at base $1$ with $\Delta x=-0.01$. Since $f(1)=1$ and $f'(1)=10$,

$$
(0.99)^{10}\approx1+10(-0.01)=0.9.
$$

The exact value is about $0.90438$; the estimate is low by roughly $0.004$, the expected order for a step of $0.01$.

</details>

### 5. Classify the turning points

Find and classify the local extrema of $f(x)=x^3-6x^2+9x+1$.

<details><summary>Answer and reasoning</summary>

$f'(x)=3(x-1)(x-3)$ and $f''(x)=6x-12$. Critical points: $x=1$ with $f''(1)=-6<0$, a local maximum of $f(1)=1-6+9+1=5$; and $x=3$ with $f''(3)=6>0$, a local minimum of $f(3)=27-54+27+1=1$.

</details>

### 6. Absolute extrema on a closed interval

Find the greatest and least values of $g(x)=x^4-2x^2$ on $[-1,2]$.

<details><summary>Answer and reasoning</summary>

$g'(x)=4x^3-4x=4x(x-1)(x+1)$, so the interior critical points are $x=0$ and $x=1$, with $x=-1$ an endpoint. Values: $g(-1)=1-2=-1$, $g(0)=0$, $g(1)=-1$, $g(2)=16-8=8$. Greatest value $8$ at $x=2$; least value $-1$ at $x=\pm1$.

</details>

### 7. Fencing along a river

A farmer has $100\ \text{m}$ of fencing for a rectangular field that borders a straight river, so no fence is needed along the river. Maximise the area.

<details><summary>Answer and reasoning</summary>

Let $x$ be each side perpendicular to the river and $y$ the side parallel to it. Then $2x+y=100$, so $y=100-2x$ and

$$
A(x)=x(100-2x)=100x-2x^2,\qquad 0<x<50.
$$

$A'(x)=100-4x=0$ gives $x=25$, and $A''=-4<0$ confirms a maximum. Then $y=50$ and $A_{\max}=25\times50=1250\ \text{m}^2$.

</details>

### 8. Water in a cone

Water flows into a conical tank at $5\ \text{cm}^3/\text{s}$. The cone's radius equals its height at every level. How fast is the water level rising when the depth is $2\ \text{cm}$?

<details><summary>Answer and reasoning</summary>

With $r=h$, $V=\frac13\pi r^2h=\frac13\pi h^3$, so $\frac{dV}{dt}=\pi h^2\frac{dh}{dt}$. At $h=2$: $5=\pi(4)\frac{dh}{dt}$, giving $\frac{dh}{dt}=\frac{5}{4\pi}\approx0.398\ \text{cm/s}$.

</details>

### 9. A tangent from outside the curve

Find the points on $y=x^2$ where the tangent passes through $(0,-3)$.

<details><summary>Answer and reasoning</summary>

At the contact point $(a,a^2)$ the tangent is $y=2ax-a^2$. Requiring $(0,-3)$ to lie on it gives $-3=-a^2$, so $a=\pm\sqrt3$. The points are $(\sqrt3,3)$ and $(-\sqrt3,3)$, and the tangents are $y=\pm2\sqrt3\,x-3$.

</details>

### 10. A repeated critical point

For $f'(x)=(x-1)(x-2)^2(x-3)$, find the intervals of increase and decrease and classify each critical point.

<details><summary>Answer and reasoning</summary>

The factor $(x-2)^2$ is positive on both sides of $2$, so the sign of $f'$ is governed by $(x-1)(x-3)$: positive for $x<1$, negative on $(1,2)$ and $(2,3)$, positive for $x>3$. Thus $f$ increases on $(-\infty,1)$ and $(3,\infty)$, and decreases on $(1,3)$. At $x=1$ the sign changes $+\to-$: local maximum. At $x=3$ it changes $-\to+$: local minimum. At $x=2$ the derivative is zero but the sign does not change: a stationary point, not an extremum.

</details>

## Self-check

You are ready for the timed set when you can:

- turn a "how fast now" question into $dy/dt$ using the chain rule, and differentiate before substituting numbers;
- prove the monotonicity criterion from the mean value theorem and build a sign chart from critical points;
- write tangent and normal equations, including the horizontal-tangent and external-point cases;
- estimate a nearby function value with a differential and state when the estimate is trustworthy;
- classify extrema with both derivative tests, including their failure cases, and check endpoints on a closed interval;
- translate an optimisation story into one variable with a stated domain and verify the optimum;
- distinguish a stationary point from an extremum when a critical factor is repeated.

If one item still feels uncertain, revisit that module and redo its worked example before attempting the timed paper.
