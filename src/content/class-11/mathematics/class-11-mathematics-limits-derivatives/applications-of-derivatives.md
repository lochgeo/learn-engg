## One number, several jobs

The derivative began as a slope, but the same number also measures how fast a quantity changes and predicts where a graph turns. That is why it appears everywhere from motion to optimisation. This lesson uses the rules just learned for three purposes: computing rates, describing where a function rises or falls, and finding tangents, normals and turning points.

## 1. The derivative as a rate of change

If $y=f(x)$, then $\dfrac{dy}{dx}$ is the instantaneous rate of change of $y$ with respect to $x$. When $x$ is time $t$, the derivative is a velocity; when $x$ is a length, it can be a rate such as "area per unit radius".

For a circle of radius $r$, the area is $A=\pi r^2$, so

$$
\frac{dA}{dr}=2\pi r.
$$

If the radius itself changes with time, the chain rule converts one rate into another:

$$
\frac{dA}{dt}=\frac{dA}{dr}\cdot\frac{dr}{dt}=2\pi r\,\frac{dr}{dt}.
$$

The units multiply correctly: $\text{cm}^2$ per $\text{cm}$, times $\text{cm}$ per second, gives $\text{cm}^2$ per second.

## 2. Increasing and decreasing functions

A function is **increasing** on an interval if $x_1<x_2$ implies $f(x_1)<f(x_2)$, and **decreasing** if the inequality reverses. The derivative gives a practical test:

- if $f'(x)>0$ throughout an interval, $f$ is increasing there;
- if $f'(x)<0$ throughout an interval, $f$ is decreasing there.

Points where $f'(x)=0$ or does not exist are **critical points**; they are the candidates where the direction may change. The test is sufficient, not necessary in the strictest sense — a function such as $x^3$ is increasing on the whole real line even though its derivative vanishes at $0$.

## 3. Tangents and normals

At a point $\big(a,f(a)\big)$ where $f'(a)$ exists, the tangent has slope $m=f'(a)$, so

$$
y-f(a)=f'(a)(x-a).
$$

The **normal** is perpendicular to the tangent. When $f'(a)\ne0$ its slope is $-\dfrac{1}{f'(a)}$, giving

$$
y-f(a)=-\frac{1}{f'(a)}(x-a).
$$

If $f'(a)=0$, the tangent is the horizontal line $y=f(a)$ and the normal is the vertical line $x=a$.

## 4. Local maxima and minima

A **local maximum** at $c$ means $f(c)\ge f(x)$ for all nearby $x$; a **local minimum** means $f(c)\le f(x)$ nearby. At an interior turning point of a differentiable function, $f'(c)=0$, but that alone is not enough.

**First derivative test.** If $f'$ changes from positive to negative through $c$, then $c$ is a local maximum; if it changes from negative to positive, $c$ is a local minimum. If the sign does not change, $c$ is neither — it is a point of inflection with a horizontal tangent.

**Second derivative test.** If $f'(c)=0$ and $f''(c)<0$, $c$ is a local maximum; if $f''(c)>0$, it is a local minimum. When $f''(c)=0$ the test is inconclusive and the first derivative test must be used.

## 5. Worked examples

**Example 1 — tangent and normal.** Find the tangent and normal to $y=x^2$ at $x=1$.

The point is $(1,1)$ and $\dfrac{dy}{dx}=2x$, so the tangent slope is $2$:

$$
y-1=2(x-1)\quad\Longrightarrow\quad y=2x-1.
$$

The normal slope is $-\dfrac12$:

$$
y-1=-\frac12(x-1)\quad\Longrightarrow\quad x+2y-3=0.
$$

**Example 2 — turning points.** Locate and classify the horizontal tangents of $y=x^3-3x+2$.

Set the derivative to zero:

$$
y'=3x^2-3=3(x-1)(x+1)=0\quad\Longrightarrow\quad x=\pm1.
$$

The corresponding points are $(1,\,1-3+2)=(1,0)$ and $(-1,\,-1+3+2)=(-1,4)$. Since $y''=6x$, we have $y''(-1)=-6<0$ (local maximum) and $y''(1)=6>0$ (local minimum). The sign pattern of $y'$ agrees: positive for $x<-1$, negative between $-1$ and $1$, positive again beyond $1$.

**Example 3 — a rate.** A spherical balloon's radius grows at $2\ \text{cm/s}$. Find the rate of increase of volume when $r=3\ \text{cm}$.

With $V=\dfrac43\pi r^3$, we have $\dfrac{dV}{dr}=4\pi r^2$, hence

$$
\frac{dV}{dt}=4\pi r^2\frac{dr}{dt}=4\pi(3)^2(2)=72\pi\ \text{cm}^3/\text{s}.
$$

<learning-block type="mistake" title="Assuming a zero derivative means a maximum or minimum">

The equation $f'(c)=0$ only says the tangent is horizontal; it does not say the graph turns. For $f(x)=x^3$, $f'(0)=0$ yet the function is increasing through $x=0$, so there is no extremum there. Always check a sign change or the second derivative. A second error is taking the normal's slope to be $-f'(a)$ rather than its reciprocal $-1/f'(a)$ — perpendicular lines multiply slopes to $-1$, not add them.

</learning-block>

## Try it yourself

**A.** Find the tangent to $y=x^3$ at $x=2$.

<details><summary>Show the reasoning</summary>

The point is $(2,8)$ and the slope is $3(2)^2=12$, so $y-8=12(x-2)$, i.e. $y=12x-16$. Substituting $x=2$ back gives $8$, as it should.

</details>

**B.** Where is $f(x)=x^3-3x$ increasing or decreasing?

<details><summary>Show the reasoning</summary>

$f'(x)=3x^2-3=3(x-1)(x+1)$. It is positive for $x<-1$ and $x>1$, and negative for $-1<x<1$. So $f$ increases on $(-\infty,-1)$ and $(1,\infty)$, and decreases on $(-1,1)$.

</details>

**C.** A square's side $s$ grows at $3\ \text{cm/s}$. Find the rate of change of its area when $s=5\ \text{cm}$.

<details><summary>Show the reasoning</summary>

$A=s^2$, so $\dfrac{dA}{dt}=2s\dfrac{ds}{dt}=2(5)(3)=30\ \text{cm}^2/\text{s}$.

</details>

## Remember

- $\dfrac{dy}{dx}$ is an instantaneous rate; use the chain rule to connect rates of related quantities.
- $f'(x)>0$ means increasing, $f'(x)<0$ means decreasing; critical points are where $f'=0$ or is undefined.
- Tangent slope $f'(a)$; normal slope $-1/f'(a)$ when $f'(a)\ne0$.
- $f'(c)=0$ is necessary but not sufficient for a turning point — check signs or $f''$.
- The practice module that follows mixes these uses with limits and continuity; work through it before the timed set.
