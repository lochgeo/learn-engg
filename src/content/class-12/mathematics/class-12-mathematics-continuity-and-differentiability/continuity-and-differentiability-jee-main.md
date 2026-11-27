## JEE Main sprint: how to use this set

This is a **50-minute, no-notes** paper for after you finish the chapter. Spend about 15 minutes on Section A, 15 on Section B, 10 on Section C and 10 on Section D. Mark any question still open after 90 seconds and move on; a missing answer costs less than ten minutes lost on one expansion.

Before writing, name the tool: a continuity test, a pair of one-sided derivatives, a first-principles limit, logarithmic differentiation, the parametric chain rule, or a mean value theorem. Check the conditions of a theorem before you use its conclusion.

## Conditions and formula sheet

| Situation | Start with | Check before using it |
| --- | --- | --- |
| Continuity at $a$ | $\lim_{x\to a^-}f=\lim_{x\to a^+}f=f(a)$ | All three quantities must exist and agree. |
| Differentiability at $a$ | $f'_-(a)=\lim_{h\to0^-}\frac{f(a+h)-f(a)}{h}$ and $f'_+(a)$ | Both must exist and be equal; continuity alone is insufficient. |
| Differentiable $\Rightarrow$ continuous | $f(x)-f(a)=\frac{f(x)-f(a)}{x-a}(x-a)\to0$ | The converse is false: $|x|$ at $0$. |
| Exponential and log | $\frac{d}{dx}e^g=e^gg'$, $\frac{d}{dx}\ln g=\frac{g'}{g}$ | $g>0$ for $\ln g$; general base gives $a^x\ln a$ and $\frac{1}{x\ln a}$. |
| Standard limit | $\lim_{x\to0}\frac{e^{kx}-1}{x}=k$ | It is the derivative of $e^{kx}$ at $0$. |
| Variable power or long product | $\frac{d}{dx}(u^v)=u^v\bigl(v'\ln u+v\frac{u'}{u}\bigr)$ | $u>0$; multiply by $y$ after differentiating $\ln y$. |
| Parametric curve | $\frac{dy}{dx}=\frac{dy/dt}{dx/dt}$ | Requires $\frac{dx}{dt}\ne0$. |
| Second derivative, parametric | $\frac{d^2y}{dx^2}=\frac{\frac{d}{dt}(dy/dx)}{dx/dt}$ | Divide by $\frac{dx}{dt}$ a second time. |
| Rolle's theorem | Continuous on $[a,b]$, differentiable on $(a,b)$, $f(a)=f(b)$ $\Rightarrow$ some $c$ with $f'(c)=0$ | $c$ is strictly inside the interval, not necessarily the midpoint. |
| Mean value theorem | $f'(c)=\frac{f(b)-f(a)}{b-a}$ for some $c\in(a,b)$ | The continuity and differentiability hypotheses still apply. |

<learning-block type="mistake" title="Fast sanity checks">

If a continuity answer ignores a missing value at $a$, restart with the three-part test. If a differentiability answer uses only one branch of a piecewise function, compute both one-sided derivatives. If $y'$ is missing its final factor of $y$ after logarithms, or if $\frac{d^2y}{dx^2}$ is missing its final division by $\frac{dx}{dt}$, the answer is incomplete even when the algebra looks right.

</learning-block>

## Section A — 10 rapid MCQs

### 1. A missing value

As given, $f(x)=\dfrac{x^2-4}{x-2}$ at $x=2$ has:

- A. no discontinuity
- B. a removable discontinuity
- C. a jump discontinuity
- D. an infinite discontinuity

<details><summary>Answer</summary>

**B.** For $x\ne2$, $f(x)=x+2$, so the limit is $4$, but $f(2)$ is undefined. One missing value makes the gap removable; defining $f(2)=4$ repairs it.

</details>

### 2. A standard limit

$\lim_{x\to0}\dfrac{e^{3x}-1}{x}$ equals:

- A. $0$
- B. $1$
- C. $3$
- D. $+\infty$

<details><summary>Answer</summary>

**C.** Write $\frac{e^{3x}-1}{x}=3\cdot\frac{e^{3x}-1}{3x}\to3\cdot1=3$. Equivalently, it is the derivative of $e^{3x}$ at $0$.

</details>

### 3. An implication

If $f$ is differentiable at $a$, which statement must be true?

- A. $f$ is continuous at $a$
- B. $f$ is differentiable everywhere
- C. $f'(a)\ne0$
- D. $f$ has a local extremum at $a$

<details><summary>Answer</summary>

**A.** Differentiability at a point forces continuity there because $f(x)-f(a)=\frac{f(x)-f(a)}{x-a}(x-a)\to f'(a)\cdot0$. None of the other statements follows from differentiability at a single point.

</details>

### 4. Inside a logarithm

$\dfrac{d}{dx}\ln(5x)$ at $x=1$ equals:

- A. $\frac15$
- B. $1$
- C. $5$
- D. $0$

<details><summary>Answer</summary>

**B.** By the chain rule, $\frac{d}{dx}\ln(5x)=\frac{5}{5x}=\frac1x$, which equals $1$ at $x=1$. The constant $5$ inside a logarithm adds a constant $\ln5$ and disappears on differentiation.

</details>

### 5. A modulus at the origin

The function $f(x)=|x|$ at $x=0$ is:

- A. differentiable with derivative $0$
- B. differentiable with derivative $1$
- C. continuous but not differentiable
- D. not continuous

<details><summary>Answer</summary>

**C.** $\lim_{x\to0}|x|=0=f(0)$, so it is continuous. But $f'_+(0)=1$ and $f'_-(0)=-1$, so no derivative exists. The graph has a corner.

</details>

### 6. A variable power

$\dfrac{d}{dx}\bigl(x^x\bigr)$ at $x=1$ equals:

- A. $0$
- B. $1$
- C. $e$
- D. undefined

<details><summary>Answer</summary>

**B.** $\ln y=x\ln x$ gives $\frac{y'}{y}=\ln x+1$, so $y'=x^x(\ln x+1)$. At $x=1$ this is $1(0+1)=1$.

</details>

### 7. A parametric slope

For $x=t^2$, $y=t^3$, the value of $\dfrac{dy}{dx}$ at $t=2$ is:

- A. $\frac32$
- B. $\frac23$
- C. $3$
- D. $6$

<details><summary>Answer</summary>

**C.** $\frac{dx}{dt}=2t$ and $\frac{dy}{dt}=3t^2$, so $\frac{dy}{dx}=\frac{3t^2}{2t}=\frac{3t}{2}=3$ at $t=2$.

</details>

### 8. Second derivative of a power

If $y=x^3$, then $\dfrac{d^2y}{dx^2}$ at $x=1$ is:

- A. $3$
- B. $6$
- C. $0$
- D. $1$

<details><summary>Answer</summary>

**B.** $y'=3x^2$ and $y''=6x$, so $y''(1)=6$. This is the derivative of the slope, not the square of the slope ($3^2=9$).

</details>

### 9. Rolle on a symmetric interval

Rolle's theorem applied to $f(x)=x^2$ on $[-1,1]$ guarantees a point $c$ equal to:

- A. $-1$
- B. $0$
- C. $1$
- D. no such point

<details><summary>Answer</summary>

**B.** $f(-1)=f(1)=1$ and the polynomial is continuous and differentiable. Setting $f'(c)=2c=0$ gives $c=0$, which lies strictly inside $(-1,1)$.

</details>

### 10. The mean value theorem

For $f(x)=x^2$ on $[0,2]$, the mean value theorem gives:

- A. $c=\frac12$
- B. $c=1$
- C. $c=2$
- D. $c=\sqrt2$

<details><summary>Answer</summary>

**B.** The chord slope is $\frac{4-0}{2}=2$. Solving $f'(c)=2c=2$ gives $c=1\in(0,2)$.

</details>

## Section B — 5 numerical-value questions

### 11. Complete the definition

Find $k$ such that $f(x)=\begin{cases}\dfrac{x^2-9}{x-3},&x\ne3\\[4pt]k,&x=3\end{cases}$ is continuous at $3$.

<details><summary>Answer</summary>

For $x\ne3$, $\frac{x^2-9}{x-3}=x+3$, so the limit is $6$. Continuity requires $f(3)=6$, hence $k=6$.

</details>

### 12. Second derivative of an exponential

If $y=e^{2x}$, find $y''$ at $x=0$.

<details><summary>Answer</summary>

$y'=2e^{2x}$ and $y''=4e^{2x}$, so $y''(0)=4$. The derivative of an exponential is proportional to itself, so each differentiation multiplies by $2$.

</details>

### 13. A power of a trigonometric function

For $y=(\sin x)^x$ with $\sin x>0$, find $y'$ at $x=\frac{\pi}{2}$.

<details><summary>Answer</summary>

$\ln y=x\ln(\sin x)$, so $\frac{y'}{y}=\ln(\sin x)+x\cot x$. At $x=\frac{\pi}{2}$, $\ln1=0$ and $\cot\frac{\pi}{2}=0$, hence $\frac{y'}{y}=0$. Since $y=1^{\pi/2}=1$, we get $y'=0$.

</details>

### 14. Parametric second derivative

For $x=2t$, $y=t^2$, find $\dfrac{d^2y}{dx^2}$.

<details><summary>Answer</summary>

$\frac{dx}{dt}=2$, $\frac{dy}{dt}=2t$, so $\frac{dy}{dx}=t$. Differentiating with respect to $t$ gives $1$, and dividing by $\frac{dx}{dt}=2$ gives $\frac{d^2y}{dx^2}=\frac12$. Check by eliminating $t$: $y=\frac{x^2}{4}$, so $y''=\frac12$.

</details>

### 15. Locate the mean value point

Find the value of $c$ given by the mean value theorem for $f(x)=\sqrt{x}$ on $[1,4]$.

<details><summary>Answer</summary>

The chord slope is $\frac{2-1}{4-1}=\frac13$. Since $f'(x)=\frac{1}{2\sqrt x}$, solve $\frac{1}{2\sqrt c}=\frac13$ to get $\sqrt c=\frac32$, so $c=\frac94=2.25$, which lies in $(1,4)$.

</details>

## Section C — 3 assertion–reason questions

For each question choose: **A** — both statements true and the reason correctly explains the assertion; **B** — both true but the reason is not the correct explanation; **C** — assertion true, reason false; **D** — assertion false, reason true.

### 16. Differentiability and continuity

**Assertion:** If $f$ is differentiable at $a$, then $f$ is continuous at $a$.
**Reason:** $\lim_{x\to a}\frac{f(x)-f(a)}{x-a}$ is finite and $x-a\to0$, so $f(x)-f(a)\to0$.

- A / B / C / D as defined above

<details><summary>Answer</summary>

**A.** Both are true, and the reason is the proof: writing $f(x)-f(a)=\frac{f(x)-f(a)}{x-a}(x-a)$ shows the product tends to $f'(a)\cdot0=0$, hence $\lim_{x\to a}f(x)=f(a)$.

</details>

### 17. The modulus again

**Assertion:** $f(x)=|x|$ is differentiable at $0$.
**Reason:** $f(x)=|x|$ is continuous at $0$.

- A / B / C / D as defined above

<details><summary>Answer</summary>

**D.** The assertion is false: $f'_+(0)=1$ while $f'_-(0)=-1$. The reason is true because $\lim_{x\to0}|x|=0=f(0)$. This pair is exactly why continuity does not imply differentiability.

</details>

### 18. Where the point lies

**Assertion:** A function continuous on $[a,b]$, differentiable on $(a,b)$ with $f(a)=f(b)$ has some $c\in(a,b)$ with $f'(c)=0$.
**Reason:** This point $c$ is necessarily the midpoint $\frac{a+b}{2}$.

- A / B / C / D as defined above

<details><summary>Answer</summary>

**C.** The assertion is Rolle's theorem, true under the stated conditions. The reason is false: for $f(x)=x^3-3x^2+2x$ on $[0,2]$, the points are $1\pm\frac{1}{\sqrt3}$, not the midpoint $1$. The theorem guarantees existence, not location.

</details>

## Section D — 2 matching / multi-statement questions

### 19. Match each function to its derivative

Match each entry in Column I with its derivative in Column II.

| Column I | Column II |
| --- | --- |
| (P) $e^{2x}$ | (1) $\dfrac{1}{x}$ |
| (Q) $\ln(3x)$ | (2) $2e^{2x}$ |
| (R) $x^x$ | (3) $\dfrac{1}{x\ln 2}$ |
| (S) $\log_2 x$ | (4) $x^x(\ln x+1)$ |

<details><summary>Answer</summary>

**P–2, Q–1, R–4, S–3.** The chain rule gives $\frac{d}{dx}e^{2x}=2e^{2x}$; $\frac{d}{dx}\ln(3x)=\frac{3}{3x}=\frac1x$; logarithmic differentiation gives $\frac{d}{dx}x^x=x^x(\ln x+1)$; and $\frac{d}{dx}\log_2 x=\frac{1}{x\ln2}$.

</details>

### 20. Which statements are true?

For $f(x)=\begin{cases}x^2+1,&x\le1\\3x-1,&x>1\end{cases}$, decide which statements are correct:

1. $f$ is continuous at $1$.
2. $f$ is differentiable at $1$.
3. The left-hand derivative at $1$ is $2$.
4. The right-hand derivative at $1$ is $2$.

<details><summary>Answer</summary>

Statements **1 and 3 are true; 2 and 4 are false**. Continuity: $f(1)=2$ and the right-hand limit $3(1)-1=2$ agree. Left derivative: $\frac{d}{dx}(x^2+1)=2x=2$ at $x=1$. Right derivative: $\frac{d}{dx}(3x-1)=3$. Since $2\ne3$, the function is continuous but not differentiable at the join; it has a corner there.

</details>

## Review by error, not by score

| If you missed… | Revisit | Then retry |
| --- | --- | --- |
| 1, 11 | Continuity at a point | Check defined value, both one-sided limits and their equality. |
| 3, 5, 16 or 17 | Differentiability versus continuity | Compare one-sided derivatives; keep the direction of the implication clear. |
| 2, 4, 6, 12, 13 or 19 | Exponential and logarithmic derivatives | Write the chain factor and the general-base factor before simplifying. |
| 7, 8, 14 | Parametric and second-order derivatives | Divide by $\frac{dx}{dt}$ once for the slope and once again for $\frac{d^2y}{dx^2}$. |
| 9, 10, 15 or 18 | Mean value theorems | State the three hypotheses, then solve for $c$ strictly inside the interval. |
| 20 | Piecewise joins | Check heights first and slopes second, from both sides. |

<learning-block type="recap" title="Ready to move on?">

Aim for at least 16 correct out of 20 with a named method for every question. A correct answer you cannot justify is a revision target, not a mastered topic.

</learning-block>
