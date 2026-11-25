## A formula is not a function until its domain is stated

Write $f(x)=\sqrt{x-2}$ and a listener may assume $x$ is any real number — yet $f(1)$ is not real. The formula is only half the description; the set of inputs for which it produces a real output is the other half. In this lesson we learn to extract that set from a formula, to find the outputs it actually produces, and to keep track of both when functions are added, divided or composed.

## 1. Finding the domain

The **domain** of a real-valued formula is the set of real inputs for which the expression is defined. Start from all of $\mathbb{R}$ and remove what breaks the rules:

| Feature in the formula | Condition on $x$ |
| --- | --- |
| $\dfrac{P(x)}{Q(x)}$ | $Q(x)\ne0$ |
| $\sqrt[n]{P(x)}$, $n$ even | $P(x)\ge0$ |
| $\log P(x)$ | $P(x)>0$ |
| $\sqrt{P(x)}$ in a denominator | $P(x)>0$ (not merely $\ge0$) |

Apply the conditions simultaneously and intersect the resulting sets. For $h(x)=\dfrac{\sqrt{x-1}}{x-3}$ we need $x\ge1$ and $x\ne3$, giving the domain $[1,3)\cup(3,\infty)$.

## 2. Finding the range

The **range** is the set of attainable values $y=f(x)$. A reliable algebraic method is to set $y=f(x)$, rearrange into an equation in $x$, and ask for which real $y$ that equation has a real solution with $x$ in the domain. Geometry helps too: the graph's lowest and highest points, or the existence of horizontal asymptotes, often reveal the range immediately.

### Example: a square root of a circle

For $f(x)=\sqrt{9-x^2}$, the radicand requires $9-x^2\ge0$, so the domain is $[-3,3]$. Since $0\le 9-x^2\le9$, the square root lies between $0$ and $3$, and both ends are attained: $f(\pm3)=0$ and $f(0)=3$. The range is $[0,3]$.

### Example: a range found through a quadratic

Let $g(x)=\dfrac{2x}{x^2+1}$. The denominator is never zero, so the domain is $\mathbb{R}$. Put $y=\dfrac{2x}{x^2+1}$ and multiply through:

$$
yx^2-2x+y=0.
$$

For a real $x$ to exist, this quadratic in $x$ must have non-negative discriminant:

$$
(-2)^2-4(y)(y)=4-4y^2\ge0\quad\Longrightarrow\quad y^2\le1.
$$

Thus $-1\le y\le1$. The endpoints are attained at $x=1$ and $x=-1$, and $y=0$ at $x=0$, so the range is exactly $[-1,1]$. When $y=0$ the equation is linear rather than quadratic, but $x=0$ still solves it; the discriminant test has not lost that case.

## 3. Algebra of functions

Let $f$ and $g$ be real-valued with domains $D_f$ and $D_g$. The new functions are defined point by point, and their domains are the inputs for which **both** sides make sense:

$$
\begin{aligned}
(f\pm g)(x)&=f(x)\pm g(x), & D_{f\pm g}&=D_f\cap D_g,\\
(fg)(x)&=f(x)g(x), & D_{fg}&=D_f\cap D_g,\\
\left(\frac fg\right)(x)&=\frac{f(x)}{g(x)}, & D_{f/g}&=\{x\in D_f\cap D_g:g(x)\ne0\}.
\end{aligned}
$$

Scalar multiplication, $(cf)(x)=c\,f(x)$, keeps the domain $D_f$. Addition and multiplication are commutative and associative where defined; division is not.

## 4. Composition, and why order matters

For $f:A\to B$ and $g:X\to A$, the composition is

$$
(f\circ g)(x)=f(g(x)),
$$

read right to left: apply $g$ first, then $f$. Its domain is

$$
D_{f\circ g}=\{x\in D_g:g(x)\in D_f\}.
$$

Composition is associative when the intermediate sets match, $(f\circ g)\circ h=f\circ(g\circ h)$, but it is **not commutative** in general: $f\circ g\ne g\circ f$.

### Worked example

Take $f(x)=\sqrt{x}$ and $g(x)=x^2-1$.

$$
(f\circ g)(x)=\sqrt{x^2-1},\qquad (g\circ f)(x)=(\sqrt{x})^2-1=x-1.
$$

For $f\circ g$ we need $x^2-1\ge0$, so its domain is $(-\infty,-1]\cup[1,\infty)$. For $g\circ f$ the inner square root demands $x\ge0$, so its domain is $[0,\infty)$, even though the simplified formula $x-1$ would accept every real $x$.

**Sanity check.** At $x=2$, $(f\circ g)(2)=\sqrt3$ while $(g\circ f)(2)=1$; the two functions differ. The simplification $g(f(x))=x-1$ must not be used to enlarge the domain beyond $[0,\infty)$.

A second domain check: with $f(x)=\dfrac1{x-2}$ and $g(x)=\sqrt{x+1}$, the sum has domain $[-1,2)\cup(2,\infty)$, while $f/g$ additionally needs $g(x)\ne0$, excluding $x=-1$: its domain is $(-1,2)\cup(2,\infty)$.

<learning-block type="mistake" title="The domain of a composite is not the domain of the simplified formula">

Students often simplify $g(f(x))$ and then read the domain off the short expression. For $f(x)=\sqrt{x}$ and $g(x)=x^2-1$, $g(f(x))=x-1$ looks defined for all real $x$, but the inner $\sqrt{x}$ restricts the input to $x\ge0$. Always check the inner function's domain **and** the condition that its output lands in the outer function's domain. A second frequent slip is taking the domain of $f/g$ to be just $D_f\cap D_g$ and forgetting to exclude zeros of $g$.

</learning-block>

## Try it yourself

**1.** Find the domain of $h(x)=\dfrac{\sqrt{x-3}}{x-5}$.

<details><summary>Show the reasoning</summary>

We need $x-3\ge0$ and $x-5\ne0$. Hence the domain is $[3,5)\cup(5,\infty)$: $x=3$ is allowed because it sits under a square root in the numerator, not in a denominator.

</details>

**2.** Find the range of $f(x)=\dfrac1{x+2}$.

<details><summary>Show the reasoning</summary>

The domain is $\mathbb{R}\setminus\{-2\}$. Let $y=1/(x+2)$, so $x=1/y-2$. This is a real number in the domain for every $y\ne0$, and $y=0$ is impossible because a reciprocal is never zero. The range is $\mathbb{R}\setminus\{0\}$.

</details>

**3.** With $f(x)=x+1$ and $g(x)=\sqrt{x}$, find $f\circ g$ and $g\circ f$ with their domains.

<details><summary>Show the reasoning</summary>

$(f\circ g)(x)=\sqrt{x}+1$ with domain $[0,\infty)$. $(g\circ f)(x)=\sqrt{x+1}$ with domain $[-1,\infty)$. They are different functions, both in formula and in domain.

</details>

## Remember

- Build a domain by intersecting all the conditions a formula imposes.
- Find a range by asking for which $y$ the equation $y=f(x)$ has a real solution in the domain.
- $f/g$ needs $g(x)\ne0$ in addition to the common domain.
- $(f\circ g)(x)=f(g(x))$ has domain $\{x\in D_g:g(x)\in D_f\}$; order matters.
- Simplify algebra freely, but never use a simplified expression to enlarge a domain.

The next lesson collects the functions whose domains, ranges and graph shapes appear most often in examinations: the modulus, greatest integer and signum functions, together with even and odd symmetry.
