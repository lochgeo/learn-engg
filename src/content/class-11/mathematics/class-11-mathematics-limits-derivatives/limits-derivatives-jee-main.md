## JEE Main sprint: how to use this set

This is a **50-minute, no-notes** paper for after the chapter lessons and mastery check. Work Section A in about 12 minutes, Section B in 15, Section C in 13, and Section D in 10. Mark anything that stalls for more than 90 seconds and move on; a wrong answer with a written method is more useful than a guessed one.

Before each calculation, name the tool: factorisation, a standard limit, a continuity test, first principles, a differentiation rule, or a slope/extremum test. Angles are in radians throughout.

## Formula and conditions sheet

| Situation | Start with | Condition to check |
| --- | --- | --- |
| Rational expression gives $0/0$ | Factorise and cancel | Cancelling is valid because $x=a$ is excluded from the limit |
| Trig form as $x\to0$ | $\dfrac{\sin x}{x}\to1$, $\dfrac{\tan x}{x}\to1$ | Radians; argument of sine must match denominator |
| $\dfrac{x^n-a^n}{x-a}$ | $n a^{n-1}$ | Matching base and exponent; $a>0$ for real $n$ |
| $\dfrac{a^x-1}{x}$ as $x\to0$ | $\ln a$ | $a>0$; gives $1$ for $a=e$ |
| $(1+k/x)^x$ as $x\to\infty$ | $e^{k}$ | $k$ constant |
| Piecewise value at a join | LHL, RHL and $f(a)$ | All three equal for continuity |
| Derivative "from first principles" | $\lim_{h\to0}\dfrac{f(a+h)-f(a)}{h}$ | Expand and cancel $h$ before taking the limit |
| Product, quotient, composite | Product, quotient, chain rules | $g\ne0$ for a quotient; include the inside derivative |
| Tangent or normal | $m=f'(a)$, normal $-\dfrac1{f'(a)}$ | Normal formula needs $f'(a)\ne0$ |
| Local extremum | $f'(c)=0$ plus sign change or $f''(c)$ | $f'=0$ alone is not sufficient |

## Section A — 10 rapid MCQs

### 1. A removable hole

$\displaystyle\lim_{x\to2}\frac{x^2-4}{x-2}$ equals:

- A. $0$
- B. $2$
- C. $4$
- D. the limit does not exist

<details><summary>Answer</summary>

**C.** $x^2-4=(x-2)(x+2)$, so for $x\ne2$ the fraction is $x+2$, which tends to $4$.

</details>

### 2. Scaled sine

$\displaystyle\lim_{x\to0}\frac{\sin 4x}{x}$ equals:

- A. $0$
- B. $1$
- C. $4$
- D. $\infty$

<details><summary>Answer</summary>

**C.** $\dfrac{\sin4x}{x}=4\cdot\dfrac{\sin4x}{4x}\to4\cdot1=4$.

</details>

### 3. Exponential limit

$\displaystyle\lim_{x\to0}\frac{e^{5x}-1}{x}$ equals:

- A. $0$
- B. $1$
- C. $5$
- D. $\ln 5$

<details><summary>Answer</summary>

**C.** Put $u=5x$: $\dfrac{e^{5x}-1}{x}=5\cdot\dfrac{e^u-1}{u}\to5\cdot1=5$. It is not $\ln5$, because the base is $e$.

</details>

### 4. Power difference

For $a>0$ and a positive integer $n$, $\displaystyle\lim_{x\to a}\frac{x^n-a^n}{x-a}$ equals:

- A. $n a^{n-1}$
- B. $n a^{n}$
- C. $a^{n-1}$
- D. $0$

<details><summary>Answer</summary>

**A.** Cancelling one factor of $x-a$ leaves a sum of $n$ terms, each tending to $a^{n-1}$.

</details>

### 5. Continuity parameter

If $f(x)=3x-1$ for $x<2$ and $f(x)=k$ for $x\ge2$ is continuous at $2$, then $k$ is:

- A. $3$
- B. $5$
- C. $6$
- D. $2$

<details><summary>Answer</summary>

**B.** The left limit is $3(2)-1=5$; the right limit and $f(2)$ are $k$. Continuity forces $k=5$.

</details>

### 6. Interpreting a zero derivative

If $f'(a)=0$ for a differentiable $f$, which statement must be true?

- A. $f$ has a local maximum at $a$
- B. $f$ has a local minimum at $a$
- C. the tangent at $x=a$ is horizontal
- D. $f$ is constant everywhere

<details><summary>Answer</summary>

**C.** A zero derivative means zero tangent slope. A turning point needs a sign change as well; $x^3$ at $0$ is the standard counterexample to A and B.

</details>

### 7. Derivative at the origin

For $f(x)=x^3\sin x$, the value of $f'(0)$ is:

- A. $0$
- B. $1$
- C. $3$
- D. undefined

<details><summary>Answer</summary>

**A.** $f'(x)=3x^2\sin x+x^3\cos x$, so $f'(0)=0+0=0$.

</details>

### 8. A logarithm simplification

$\dfrac{d}{dx}\ln(2x)$ for $x>0$ is:

- A. $\dfrac1{2x}$
- B. $\dfrac1x$
- C. $\dfrac2x$
- D. $2$

<details><summary>Answer</summary>

**B.** Chain rule: $\dfrac1{2x}\cdot2=\dfrac1x$. Equivalently $\ln(2x)=\ln2+\ln x$, whose derivative is $0+\dfrac1x$.

</details>

### 9. Normal to a parabola

The slope of the normal to $y=x^2$ at $x=1$ is:

- A. $2$
- B. $-2$
- C. $-\dfrac12$
- D. $\dfrac12$

<details><summary>Answer</summary>

**C.** Tangent slope is $2x=2$ at $x=1$; the normal slope is the negative reciprocal, $-\dfrac12$.

</details>

### 10. A limit defining $e$

$\displaystyle\lim_{x\to\infty}\left(1+\frac2x\right)^x$ equals:

- A. $e$
- B. $e^2$
- C. $2e$
- D. $\infty$

<details><summary>Answer</summary>

**B.** $\left(1+\dfrac2x\right)^x=\left[\left(1+\dfrac2x\right)^{x/2}\right]^2\to e^2$.

</details>

## Section B — 5 numerical-value questions

### 11. Another power difference

Evaluate $\displaystyle\lim_{x\to1}\frac{x^3-1}{x-1}$.

<details><summary>Answer</summary>

$n=3$, $a=1$, so the limit is $3\cdot1^2=3$.

</details>

### 12. A cosine limit

Evaluate $\displaystyle\lim_{x\to0}\frac{1-\cos x}{x^2}$.

<details><summary>Answer</summary>

Using $1-\cos x=2\sin^2\dfrac x2$,

$\dfrac{1-\cos x}{x^2}=\dfrac12\left(\dfrac{\sin(x/2)}{x/2}\right)^2\to\dfrac12$.

The numerical value is $0.5$.

</details>

### 13. Differentiating a sum

If $f(x)=x^2+\dfrac1x$ for $x\ne0$, find $f'(1)$.

<details><summary>Answer</summary>

$f'(x)=2x-\dfrac1{x^2}$, so $f'(1)=2-1=1$.

</details>

### 14. Velocity from position

A particle's position is $s=t^3-3t$ metres. Find its speed at $t=2\ \text{s}$.

<details><summary>Answer</summary>

$v=\dfrac{ds}{dt}=3t^2-3$, so $v(2)=12-3=9\ \text{m/s}$. The speed is $|9|=9\ \text{m/s}$.

</details>

### 15. Slope of a quotient

Find the slope of the tangent to $y=\dfrac{x^2+1}{x-1}$ at $x=3$.

<details><summary>Answer</summary>

$y'=\dfrac{2x(x-1)-(x^2+1)}{(x-1)^2}=\dfrac{x^2-2x-1}{(x-1)^2}$. At $x=3$ this is $\dfrac{9-6-1}{4}=\dfrac24=\dfrac12$, or $0.5$.

As a check, $\dfrac{x^2+1}{x-1}=x+1+\dfrac2{x-1}$, whose derivative at $x=3$ is $1-\dfrac2{4}=\dfrac12$.

</details>

## Section C — 3 assertion–reason questions

For each, choose: **A** — both true and the reason explains the assertion; **B** — both true but the reason does not explain it; **C** — assertion true, reason false; **D** — assertion false, reason true.

### 16. Continuity and differentiability

**Assertion:** $f(x)=|x|$ is continuous at $x=0$.
**Reason:** $f(x)=|x|$ is differentiable at $x=0$.

<details><summary>Answer</summary>

**C.** $\lim_{x\to0}|x|=0=f(0)$, so the assertion is true. But the left derivative is $-1$ and the right derivative is $1$, so $f$ is not differentiable at $0$: the reason is false. This is the standard example showing continuity does not force differentiability.

</details>

### 17. The sine limit

**Assertion:** $\displaystyle\lim_{x\to0}\frac{\sin x}{x}=1$ when $x$ is in radians.
**Reason:** For small positive $x$ in radians, $\sin x<x<\tan x$, which squeezes $\sin x/x$ to $1$.

<details><summary>Answer</summary>

**A.** Both statements are true, and the squeeze inequality in the reason is precisely the proof of the assertion. The radian condition matters: with degrees the limit would be $\pi/180$.

</details>

### 18. Zero derivative and extrema

**Assertion:** If $f'(c)=0$ at an interior point, then $f$ has a local extremum at $c$.
**Reason:** If a differentiable $f$ has a local extremum at an interior point $c$, then $f'(c)=0$.

<details><summary>Answer</summary>

**D.** The assertion is false: $f(x)=x^3$ has $f'(0)=0$ but no extremum at $0$. The reason is the true necessity direction (a horizontal tangent at an interior extremum). The two statements are converses, and only one is valid.

</details>

## Section D — 2 matching / multi-statement questions

### 19. Match the limits

Match each limit in Column I with its value in Column II.

| Column I | Column II |
| --- | --- |
| (i) $\displaystyle\lim_{x\to0}\frac{\tan x}{x}$ | (p) $e$ |
| (ii) $\displaystyle\lim_{x\to0}(1+x)^{1/x}$ | (q) $1$ |
| (iii) $\displaystyle\lim_{x\to0}\frac{e^{2x}-1}{e^{x}-1}$ | (r) $2$ |

<details><summary>Answer</summary>

(i) $\to$ (q), (ii) $\to$ (p), (iii) $\to$ (r).

- (i) $\dfrac{\tan x}{x}=\dfrac{\sin x}{x}\cdot\dfrac1{\cos x}\to1\cdot1=1$.
- (ii) This is the defining limit of $e$.
- (iii) $e^{2x}-1=(e^x-1)(e^x+1)$, so the ratio equals $e^x+1\to2$ (valid for $x\ne0$).

Each matching value is obtained from a different standard limit, so the exercise tests recognition as much as calculation.

</details>

### 20. Which statements are true?

Let $f(x)=x^3-3x^2+2$. Decide which statements are correct.

1. $f'(x)=3x^2-6x$.
2. $x=0$ is a local maximum.
3. $x=2$ is a local minimum.
4. The tangent at $x=1$ is horizontal.

<details><summary>Answer</summary>

Statements 1, 2 and 3 are true; statement 4 is false.

Differentiate: $f'(x)=3x^2-6x=3x(x-2)$, confirming statement 1. The critical points are $x=0$ and $x=2$, and $f''(x)=6x-6$. Since $f''(0)=-6<0$, $x=0$ is a local maximum with $f(0)=2$, so statement 2 is true. Since $f''(2)=6>0$, $x=2$ is a local minimum with $f(2)=8-12+2=-2$, so statement 3 is true. Finally $f'(1)=3-6=-3\ne0$, so the tangent at $x=1$ is not horizontal: statement 4 is false. The sign pattern of $f'$ — positive, negative, positive — independently confirms the two extrema.

</details>

## Review by error, not by score

| If you missed… | Revisit | Then retry |
| --- | --- | --- |
| 1, 11 | Limits and algebra of limits | Factorise before applying any limit rule. |
| 2, 12, 17, 19(i) | Standard limits | Scale the argument and check that angles are in radians. |
| 3, 4, 10, 19(ii)–(iii) | Standard limits | Identify the form before choosing the standard result. |
| 5, 16 | Continuity | Compare LHL, RHL and $f(a)$; do not infer differentiability from continuity. |
| 6, 8, 13 | Rules of differentiation | State the rule and its conditions before differentiating. |
| 7, 14, 15, 20 | Applications of derivatives | Attach the meaning: slope, rate or turning point. |
| 9, 18 | Applications of derivatives | Use reciprocal slope for a normal; require a sign change for an extremum. |

Aim for at least 16 correct out of 20 with a method written for every question. Anything you got right by instinct but cannot justify belongs on the revision list, not in the "done" pile.
