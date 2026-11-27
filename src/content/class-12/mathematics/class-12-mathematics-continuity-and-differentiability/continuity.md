## A graph you can draw without lifting the pen

A thermometer climbing through $20^\circ\mathrm{C}$ does not leap from $19^\circ\mathrm{C}$ to $25^\circ\mathrm{C}$ in an instant. Its reading changes smoothly because a small change in time produces a small change in temperature. A function with the same behaviour has a graph with no gap, jump or missing point at the place you are looking. That is **continuity**.

Continuity is not decoration. The mean value theorems later in this chapter, and the whole link between differentiation and integration, are stated only for functions that behave this way. So the first job is to learn a test that decides the question at a particular point.

## 1. The definition at a point

A function $f$ is **continuous at** $x=a$ when all three statements hold:

1. $f(a)$ is defined;
2. $\lim_{x\to a}f(x)$ exists, meaning the left- and right-hand limits agree;
3. $\lim_{x\to a}f(x)=f(a)$.

The one-line form is

$$
\lim_{x\to a}f(x)=f(a).
$$

Here $\lim_{x\to a^-}f(x)$ is the **left-hand limit** (values of $f$ for $x$ just below $a$) and $\lim_{x\to a^+}f(x)$ is the **right-hand limit** (values for $x$ just above $a$). The two-sided limit exists exactly when they are equal; it does not care whether $f(a)$ exists. Continuity adds that requirement and the requirement of equality.

For example, $f(x)=\frac{x^2-1}{x-1}$ has $\lim_{x\to1}f(x)=2$ because $\frac{x^2-1}{x-1}=x+1$ for every $x\ne1$. But $f(1)$ is undefined, so $f$ is **not** continuous at $1$ as given. One missing value is enough to break continuity.

## 2. The three ways it can fail

| Type of break | What the limits do | Typical example |
| --- | --- | --- |
| Removable | Left and right limits agree, but $f(a)$ is missing or has the wrong value | $\frac{x^2-1}{x-1}$ at $x=1$ |
| Jump | Left and right limits exist but differ | A step function at the step |
| Infinite | The function grows without bound as $x\to a$ | $\frac{1}{x^2}$ at $x=0$ |

A removable break is the only one you can repair by redefining a single value: setting $f(1)=2$ in the first example makes the function continuous there. A jump or an infinite break cannot be fixed by changing one point, because the two sides never approach a common number.

## 3. Rules that save work

You do not need to recompute a limit for every familiar expression. If $f$ and $g$ are continuous at $a$, then so are $f\pm g$, $fg$, and $\frac{f}{g}$ provided $g(a)\ne0$. Also $|f|$ is continuous when $f$ is, and a composition $f\circ g$ is continuous at $a$ when $g$ is continuous at $a$ and $f$ is continuous at $g(a)$.

Polynomials, $\sin x$, $\cos x$, $e^x$ and $\ln x$ are continuous at every point of their domains; rational functions are continuous wherever the denominator is nonzero. This leaves only three places that genuinely need a limit calculation: a join between formula pieces, a denominator that approaches zero, and a point that has been deliberately removed.

## 4. Worked example: repairing a piecewise function

Let

$$
f(x)=\begin{cases}\dfrac{x^2-9}{x-3}, & x\ne 3,\\[4pt] k, & x=3.\end{cases}
$$

Find $k$ so that $f$ is continuous at $3$.

For $x\ne3$ the numerator factors, so

$$
\frac{x^2-9}{x-3}=\frac{(x-3)(x+3)}{x-3}=x+3 \quad (x\ne3).
$$

Therefore $\lim_{x\to3}f(x)=3+3=6$. The three-part test asks for $f(3)=\lim_{x\to3}f(x)$, so $k=6$.

**Sanity check.** At $x=3.01$ the original expression gives $\frac{3.01^2-9}{0.01}=\frac{0.0601}{0.01}=6.01$, which tends to $6$ as expected. Cancelling was legal because we cancelled a factor that is nonzero for every $x\ne3$; the cancellation cannot tell us anything about $x=3$ itself.

## 5. Worked example: two parameters, two joins

Let

$$
h(x)=\begin{cases}
2x+1, & x\le 0,\\
x^2+p, & 0<x\le 2,\\
3x-q, & x>2.
\end{cases}
$$

Find $p$ and $q$ for continuity at both join points.

At $x=0$: the left limit and $h(0)$ are $1$, while the right limit is $0^2+p=p$. Hence $p=1$.

At $x=2$: the middle branch gives $h(2)=4+1=5$, while the right-hand limit is $3(2)-q=6-q$. Hence $q=1$.

**Sanity check.** With $p=q=1$, the right branch at $2$ gives $3(2)-1=5$, matching the middle branch, and the middle branch at $0$ gives $1$, matching the left branch. Both joins close.

<learning-block type="mistake" title="A limit is not automatically continuity">

The claim "the limit exists, so the function is continuous" forgets two of the three conditions. For $f(x)=\frac{x^2-1}{x-1}$ the limit at $1$ exists and equals $2$, but $f(1)$ is undefined, so $f$ is not continuous there. Always ask in order: is $f(a)$ defined? do the two one-sided limits agree? is their common value equal to $f(a)$?

</learning-block>

## Try it yourself

**A.** Is $g(x)=\frac{x^2-4}{x-2}$ continuous at $x=2$ as it stands?

<details><summary>Show the reasoning</summary>

No. For $x\ne2$, $g(x)=x+2$, so $\lim_{x\to2}g(x)=4$, but $g(2)$ is not defined. This is a removable discontinuity; defining $g(2)=4$ would repair it.

</details>

**B.** Find $a$ so that $f(x)=\begin{cases}ax+1,&x\le2\\x^2-1,&x>2\end{cases}$ is continuous at $2$.

<details><summary>Show the reasoning</summary>

The left value is $f(2)=2a+1$. The right-hand limit is $2^2-1=3$. Continuity requires $2a+1=3$, so $a=1$. Then $f(2)=3$ agrees with both one-sided limits.

</details>

**C.** Classify the behaviour of $f(x)=\frac{1}{(x-1)^2}$ at $x=1$.

<details><summary>Show the reasoning</summary>

As $x\to1$ from either side, $(x-1)^2\to0^+$ and $f(x)\to+\infty$. The limit is not finite, so this is an infinite discontinuity, not a removable one; no redefinition at a single point can fix it.

</details>

## Remember

- Continuity at $a$ means $f(a)$ is defined, the two one-sided limits agree, and their common value equals $f(a)$.
- Removable gaps can be repaired by one new value; jumps and infinite breaks cannot.
- Familiar functions are continuous on their own domains; check joins, zero denominators and removed points.
- Sums, products, quotients (nonzero denominator) and compositions of continuous functions stay continuous.
- The next module asks a sharper question: not just whether the pieces meet, but whether they meet with a single well-defined slope.
