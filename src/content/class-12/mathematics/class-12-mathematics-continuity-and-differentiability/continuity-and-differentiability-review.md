## Your study plan for this chapter

These six ideas connect: continuity asks whether pieces meet, differentiability asks whether they meet smoothly, and the remaining modules build the derivatives of the functions that calculus uses most. A focused first pass takes about **2 hours**, followed by this mastery check:

| Step | Module | Time |
| --- | --- | --- |
| 1 | Continuity | 20 min |
| 2 | Differentiability | 20 min |
| 3 | Exponential and logarithmic functions | 20 min |
| 4 | Logarithmic differentiation | 20 min |
| 5 | Parametric and second-order derivatives | 20 min |
| 6 | Mean value theorems | 20 min |
| 7 | This mastery check | 25 min |

After each module, close the notes and redo its worked example from a blank page. Mark it done only when you can say why every step is legal. The timed JEE Main set comes after this check; its value is in choosing the right tool quickly.

## First choose the tool

| Clue in the question | Start with |
| --- | --- |
| "Is $f$ continuous at $a$?" | Check $f(a)$ defined, left limit = right limit, and both equal $f(a)$ |
| A piecewise join with an unknown parameter | Equate the two one-sided limits; for differentiability, equate the two one-sided derivatives too |
| Limit with a factor that cancels | Cancel for $x\ne a$ and remember the point itself may still be undefined |
| "Is $f$ differentiable at $a$?" | Compare $f'_-(a)$ and $f'_+(a)$ from the definition or the branch formulas |
| A function with a modulus | Check the corner where the inside is zero |
| $e^{kx}$, $a^x$, $\ln x$ or $\log_a x$ | Use $\frac{d}{dx}e^{g}=e^{g}g'$, $\frac{d}{dx}a^x=a^x\ln a$, $\frac{d}{dx}\ln g=\frac{g'}{g}$ |
| Variable base *and* variable exponent, or a long product/quotient | Take logarithms, expand, differentiate, multiply back by $y$ |
| Curve given as $x(t),\,y(t)$ | $\frac{dy}{dx}=\frac{dy/dt}{dx/dt}$ |
| "Find $\frac{d^2y}{dx^2}$" | Differentiate the slope with respect to $t$, then divide by $\frac{dx}{dt}$ again |
| Curve given by an implicit relation | Differentiate both sides; attach $y'$ to every derivative of $y$ |
| Chord slope, equal endpoint values, or a bound on $f'$ | Rolle or the mean value theorem — check continuity on $[a,b]$ and differentiability on $(a,b)$ first |

## Mastery check

Try every question before opening its answer. No calculator is needed.

### 1. A removable gap

Is $f(x)=\dfrac{x^2-25}{x-5}$ continuous at $x=5$ as given?

<details><summary>Answer and reasoning</summary>

No. For $x\ne5$, $f(x)=x+5$, so the limit is $10$, but $f(5)$ is not defined. The break is removable: defining $f(5)=10$ makes it continuous.

</details>

### 2. A continuity parameter

Find $k$ so that $f(x)=\begin{cases}x+3,&x\le2\\kx^2,&x>2\end{cases}$ is continuous at $2$.

<details><summary>Answer and reasoning</summary>

$f(2)=5$ and the left-hand limit is $5$; the right-hand limit is $k(2^2)=4k$. Setting $4k=5$ gives $k=\frac54$. Check: $\frac54\cdot4=5$, matching the left branch.

</details>

### 3. Classify the break

Classify the discontinuity of $f(x)=\begin{cases}1,&x<0\\2,&x\ge0\end{cases}$ at $0$.

<details><summary>Answer and reasoning</summary>

The left-hand limit is $1$, the right-hand limit and $f(0)$ are $2$. Both one-sided limits exist but differ, so this is a jump discontinuity. No redefinition at one point can close a gap of size $1$.

</details>

### 4. A modulus corner

Is $f(x)=|x-1|$ differentiable at $x=1$?

<details><summary>Answer and reasoning</summary>

It is continuous because $\lim_{x\to1}|x-1|=0=f(1)$. For $x>1$ the slope is $+1$; for $x<1$ it is $-1$. Since $f'_-(1)=-1\ne1=f'_+(1)$, it is not differentiable. The graph has a sharp corner at $(1,0)$.

</details>

### 5. A differentiability parameter

Find $a$ and $b$ so that $f(x)=\begin{cases}x^2,&x\le1\\ax+b,&x>1\end{cases}$ is differentiable at $1$.

<details><summary>Answer and reasoning</summary>

Continuity requires $a+b=1$. Matching slopes requires $a=2$, since $\frac{d}{dx}x^2=2x=2$ at $x=1$. Hence $b=-1$. Check: the right branch gives $2(1)-1=1$, and both derivatives equal $2$.

</details>

### 6. Exponential meets logarithm

For $y=e^{x^2}\ln x$, find $\frac{dy}{dx}$ at $x=1$.

<details><summary>Answer and reasoning</summary>

By the product rule, $y'=2x\,e^{x^2}\ln x+e^{x^2}\cdot\frac1x$. At $x=1$, $\ln1=0$, so the first term vanishes and $y'=e$.

</details>

### 7. Logarithmic differentiation

Differentiate $y=\dfrac{(x^2+1)^3}{\sqrt{x+1}}$ and evaluate $y'$ at $x=0$.

<details><summary>Answer and reasoning</summary>

$\ln y=3\ln(x^2+1)-\frac12\ln(x+1)$, so

$$
\frac{y'}{y}=\frac{6x}{x^2+1}-\frac{1}{2(x+1)}.
$$

At $x=0$, $\frac{y'}{y}=0-\frac12=-\frac12$ and $y=1$, giving $y'=-\frac12$. Multiplying back by $y$ is essential.

</details>

### 8. Parametric second derivative

For $x=3t$, $y=t^2+1$, find $\frac{dy}{dx}$ and $\frac{d^2y}{dx^2}$ at $t=2$.

<details><summary>Answer and reasoning</summary>

$\frac{dx}{dt}=3$ and $\frac{dy}{dt}=2t$, so $\frac{dy}{dx}=\frac{2t}{3}=\frac43$ at $t=2$. Differentiating with respect to $t$ gives $\frac23$; dividing by $\frac{dx}{dt}=3$ gives $\frac{d^2y}{dx^2}=\frac29$. Eliminating $t$ gives $y=\frac{x^2}{9}+1$, whose derivatives are $\frac{2x}{9}$ and $\frac29$, confirming both values.

</details>

### 9. Rolle's theorem in action

Verify Rolle's theorem for $f(x)=x^3-3x^2+2x$ on $[0,2]$ and find every point $c$ it guarantees.

<details><summary>Answer and reasoning</summary>

$f(0)=0$ and $f(2)=8-12+4=0$; a polynomial satisfies the continuity and differentiability conditions. Solve $f'(c)=3c^2-6c+2=0$:

$$
c=\frac{6\pm\sqrt{36-24}}{6}=1\pm\frac{1}{\sqrt3}.
$$

Both values lie in $(0,2)$, since $\frac{1}{\sqrt3}\approx0.577$.

</details>

### 10. A bound from the mean value theorem

A differentiable function satisfies $f(1)=2$ and $f'(x)\ge3$ for all $x$. Find the smallest possible value of $f(5)$.

<details><summary>Answer and reasoning</summary>

By the mean value theorem on $[1,5]$, $f(5)-f(1)=f'(c)(5-1)\ge3\cdot4=12$. Hence $f(5)\ge14$. The function $f(x)=3x-1$ attains $f(1)=2$ and $f(5)=14$, so $14$ is the sharp lower bound.

</details>

## Self-check

You are ready for the timed set when you can:

- apply all three parts of the continuity test and name the type of discontinuity you find;
- repair a removable gap, and explain why a jump or infinite break cannot be repaired;
- decide differentiability from left- and right-hand derivatives, including at a modulus corner;
- state which implication holds between differentiability and continuity, with a counterexample for the other direction;
- differentiate exponential, logarithmic and general-base functions with the chain rule;
- use logarithmic differentiation for a variable power or a long quotient, remembering to multiply back by $y$;
- find first and second derivatives of a parametric curve and of an implicit relation;
- verify the hypotheses before invoking Rolle or the mean value theorem, and use the conclusion to locate $c$ or bound $f$.

If one item still feels uncertain, revisit that module and redo its worked example before attempting the timed paper.
