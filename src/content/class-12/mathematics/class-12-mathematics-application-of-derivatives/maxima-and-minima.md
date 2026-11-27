## High points, low points and the edges of an interval

A ball thrown upward rises to a highest point and then falls; a company's profit rises with output, then falls as costs overtake revenue. In both cases the interesting question is not the value of the function but where it turns. A graph may have several local peaks and troughs, and one of them — or an endpoint — is the overall extreme. The derivative locates the candidates; a sign or curvature test classifies them.

## 1. Local and absolute extrema

A function $f$ has a **local maximum** at $c$ if $f(c)\ge f(x)$ for all $x$ near $c$; it has a **local minimum** if $f(c)\le f(x)$ for all $x$ near $c$. "Near" means in some open interval around $c$. An **absolute (global) maximum** on a set $S$ satisfies $f(c)\ge f(x)$ for *every* $x\in S$, with the analogous definition for a minimum.

If $f$ has a local extremum at an interior point $c$ and $f'(c)$ exists, then

$$
f'(c)=0.
$$

This is necessary, not sufficient: a horizontal tangent need not be a turning point. Points where $f'=0$ or $f'$ does not exist are the **critical points**, the only interior candidates for a local extremum.

## 2. The first derivative test

Suppose $c$ is a critical point and $f'$ keeps a constant sign on each side of $c$ nearby. Then:

- $f'$ changes from $+$ to $-$ at $c$ $\Rightarrow$ local maximum;
- $f'$ changes from $-$ to $+$ at $c$ $\Rightarrow$ local minimum;
- $f'$ has the same sign on both sides $\Rightarrow$ no local extremum (a stationary point of inflection, as at $x=0$ for $x^3$).

This test follows directly from the increasing/decreasing criterion of the previous module: a function that rises and then falls must peak at the join.

## 3. The second derivative test

If $f'(c)=0$ and $f''(c)$ exists, then:

- $f''(c)<0$ $\Rightarrow$ local maximum;
- $f''(c)>0$ $\Rightarrow$ local minimum;
- $f''(c)=0$ $\Rightarrow$ the test is inconclusive.

Why it works: $f''(c)=\lim_{x\to c}\frac{f'(x)-f'(c)}{x-c}$. With $f'(c)=0$ and $f''(c)>0$, the derivative $f'$ is negative just left of $c$ and positive just right — the first-derivative pattern of a minimum. If $f''(c)=0$, switch to the first derivative test; for $x^4$ at $0$ the second derivative vanishes, yet $x=0$ is a clear minimum.

## 4. Absolute extrema on a closed interval

If $f$ is continuous on $[a,b]$, it attains an absolute maximum and an absolute minimum there. To find them:

1. Find all critical points of $f$ **inside** $(a,b)$.
2. Evaluate $f$ at each critical point and at both endpoints $a$ and $b$.
3. The largest value is the absolute maximum, the smallest the absolute minimum.

Endpoints matter: a maximum at $a$ or $b$ need not have a horizontal tangent there.

## 5. Worked example

Let $f(x)=x^3-6x^2+9x+1$ on $[0,5]$.

$$
f'(x)=3x^2-12x+9=3(x-1)(x-3),\qquad f''(x)=6x-12.
$$

Critical points: $x=1$ and $x=3$, both inside $(0,5)$.

| Candidate | $x=0$ (endpoint) | $x=1$ | $x=3$ | $x=5$ (endpoint) |
| --- | --- | --- | --- | --- |
| $f(x)$ | $1$ | $5$ | $1$ | $21$ |

At $x=1$, $f''(1)=-6<0$: local maximum, value $5$. At $x=3$, $f''(3)=6>0$: local minimum, value $1$. Comparing all four values, the absolute maximum on $[0,5]$ is $21$ at the endpoint $x=5$; the absolute minimum is $1$, attained at both $x=0$ and $x=3$.

**Sanity check:** $f(5)=125-150+45+1=21$, and $21>5$, so the endpoint beats the interior peak — a useful reminder that the largest local maximum is not automatically the global one. Recomputing each candidate value catches arithmetic slips.

<learning-block type="mistake" title="Three recurring errors">

Assuming $f'(c)=0$ forces an extremum fails for $f(x)=x^3$ at $0$. Using the second-derivative test when $f''(c)=0$ fails for $x^4$ at $0$; switch to the first derivative test. Forgetting endpoints on a closed interval can miss the absolute maximum entirely — in the worked example the maximum sits at $x=5$, not at a critical point.

</learning-block>

## Try it yourself

**A.** Find and classify the local extrema of $f(x)=x^4-4x$.

<details><summary>Show the reasoning</summary>

$f'(x)=4x^3-4=4(x^3-1)$, so the only critical point is $x=1$. $f''(x)=12x^2$, and $f''(1)=12>0$: local minimum at $x=1$, with $f(1)=1-4=-3$. There is no local maximum.

</details>

**B.** Classify the critical points of $f(x)=x^3-3x$.

<details><summary>Show the reasoning</summary>

$f'(x)=3(x^2-1)$, critical points $x=\pm1$; $f''(x)=6x$. At $x=-1$, $f''=-6<0$: local maximum, $f(-1)=-1+3=2$. At $x=1$, $f''=6>0$: local minimum, $f(1)=1-3=-2$.

</details>

**C.** Find the absolute maximum and minimum of $g(x)=x^2-4x$ on $[-1,3]$.

<details><summary>Show the reasoning</summary>

$g'(x)=2x-4$, critical point $x=2$. Values: $g(-1)=1+4=5$, $g(2)=4-8=-4$, $g(3)=9-12=-3$. Absolute maximum $5$ at $x=-1$ (an endpoint); absolute minimum $-4$ at $x=2$.

</details>

## Remember

- Local extrema occur only at critical points ($f'=0$ or undefined) in the interior.
- First derivative test: $+\to-$ is a maximum, $-\to+$ is a minimum, no change is neither.
- Second derivative test: $f''<0$ maximum, $f''>0$ minimum, $f''=0$ inconclusive.
- On a closed interval, evaluate $f$ at every critical point *and* at both endpoints.
- Finding extrema is the engine behind optimisation; the next module applies it to real problems.
