## Reading the direction of a graph

Walk along the graph of a function from left to right. Sometimes you climb, sometimes you descend, and at certain points you level out. A driver reading a road's gradient does the same thing locally: a positive gradient means the road rises ahead, a negative one means it falls. The derivative measures that gradient at every point, so its sign tells us the direction of travel without plotting the whole curve.

## 1. What "increasing" means

Let $f$ be defined on an interval $I$. We say $f$ is **strictly increasing** on $I$ if

$$
x_1<x_2\ \text{in }I\quad\Rightarrow\quad f(x_1)<f(x_2),
$$

and **strictly decreasing** if the inequality reverses. Replacing $<$ by $\le$ gives *non-decreasing* and *non-increasing*. The definition compares pairs of points; it makes no mention of derivatives.

## 2. The sign of the derivative decides monotonicity

Suppose $f$ is continuous on $[a,b]$ and differentiable on $(a,b)$. Take any $x_1<x_2$ in the interval. The mean value theorem gives a point $c\in(x_1,x_2)$ with

$$
f(x_2)-f(x_1)=f'(c)(x_2-x_1).
$$

Since $x_2-x_1>0$, the sign of $f(x_2)-f(x_1)$ is the sign of $f'(c)$. Therefore:

- if $f'(x)>0$ throughout $(a,b)$, then $f$ is strictly increasing on $[a,b]$;
- if $f'(x)<0$ throughout $(a,b)$, then $f$ is strictly decreasing on $[a,b]$;
- if $f'(x)=0$ throughout $(a,b)$, then $f$ is constant there.

The converse needs care: a function can be strictly increasing while its derivative vanishes at isolated points, as $x^3$ does at $x=0$. The safe statement is that $f'\ge0$ on an interval gives a non-decreasing function, and $f'>0$ gives a strictly increasing one.

## 3. Critical points and sign charts

A **critical point** of $f$ is a number $c$ in the domain where $f'(c)=0$ or $f'(c)$ does not exist. Critical points are the only places where the derivative can change sign, so they split the domain into intervals of constant sign. To find where $f$ increases or decreases:

1. Compute $f'$ and find all critical points.
2. Mark them on a number line, creating open intervals.
3. Test the sign of $f'$ at one convenient point in each interval.
4. Read off "$+$ means increasing" and "$-$ means decreasing".

## 4. Worked example: a cubic

Let $f(x)=x^3-3x^2+2$. Then

$$
f'(x)=3x^2-6x=3x(x-2).
$$

The critical points are $x=0$ and $x=2$. The sign of $3x(x-2)$ is:

| Interval | $x<0$ | $0<x<2$ | $x>2$ |
| --- | --- | --- | --- |
| Sign of $f'$ | $+$ | $-$ | $+$ |
| Behaviour | increasing | decreasing | increasing |

So $f$ increases on $(-\infty,0)$, decreases on $(0,2)$ and increases again on $(2,\infty)$. **Sanity check:** $f(0)=2$ and $f(2)=8-12+2=-2$; the function climbs to a high point at $x=0$, falls to a low point at $x=2$, then climbs away. The sign pattern matches the shape.

A useful second case is $g(x)=x-\sin x$. Here $g'(x)=1-\cos x\ge0$, with equality only at isolated points $x=2n\pi$. Since the derivative is never negative and is positive between those points, $g$ is strictly increasing everywhere — a reminder that a zero derivative at isolated points does not break monotonicity.

<learning-block type="mistake" title="A positive derivative at a point is not an increasing interval">

Finding $f'(2)>0$ tells you only that the graph slopes upward *at* $x=2$. It does not justify saying "$f$ is increasing" over an interval without checking the sign of $f'$ throughout that interval. The reverse slip is equally common: seeing $f'(c)=0$ and concluding the function is constant near $c$; $x^3$ at $0$ is the counterexample. Always build the sign chart over the whole interval.

</learning-block>

## Try it yourself

**A.** Find the intervals on which $f(x)=x^2-4x+3$ is increasing or decreasing.

<details><summary>Show the reasoning</summary>

$f'(x)=2x-4=2(x-2)$, negative for $x<2$ and positive for $x>2$. Thus $f$ decreases on $(-\infty,2)$ and increases on $(2,\infty)$, with a turning point at $x=2$.

</details>

**B.** Show that $f(x)=2x^3-3x^2-12x+5$ is increasing on $(-\infty,-1)$ and $(2,\infty)$.

<details><summary>Show the reasoning</summary>

$f'(x)=6x^2-6x-12=6(x+1)(x-2)$. For $x<-1$ both factors are negative, so the product is positive; for $x>2$ both are positive. Between $-1$ and $2$ the factors have opposite signs and $f'<0$, so the function decreases there.

</details>

**C.** Is $f(x)=e^x-x$ increasing for all real $x$?

<details><summary>Show the reasoning</summary>

$f'(x)=e^x-1$, which is negative for $x<0$, zero at $x=0$ and positive for $x>0$. So $f$ decreases on $(-\infty,0)$ and increases on $(0,\infty)$; it is **not** increasing everywhere. The single zero of the derivative at $x=0$ is where the direction changes.

</details>

## Remember

- $f'>0$ on an interval gives strictly increasing; $f'<0$ gives strictly decreasing; $f'=0$ gives constant.
- The result follows from the mean value theorem: $f(x_2)-f(x_1)=f'(c)(x_2-x_1)$.
- Critical points ($f'=0$ or undefined) are the only candidates where monotonicity can change.
- A derivative that is zero at isolated points can still leave a function strictly increasing ($x^3$, $x-\sin x$).
- Once we know where a curve rises and falls, we can locate its highest and lowest points — the subject of maxima and minima.
