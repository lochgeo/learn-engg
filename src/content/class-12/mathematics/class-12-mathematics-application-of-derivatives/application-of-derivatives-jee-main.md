## JEE Main sprint: how to use this set

This is a **50-minute, no-notes** paper for after you finish the chapter. Spend about 15 minutes on Section A, 15 on Section B, 10 on Section C and 10 on Section D. Mark any question still open after 90 seconds and move on; a missing answer costs less than ten minutes lost on one expansion. This is a mathematics paper, so no physical constants are required.

Before writing, name the tool: a rate relation, a sign chart, a tangent equation, a differential, a derivative test, or a closed-interval comparison. Check the domain of a variable and the hypotheses of a test before using its conclusion.

## Conditions and formula sheet

| Situation | Start with | Check before using it |
| --- | --- | --- |
| Average versus instantaneous rate | $\frac{f(b)-f(a)}{b-a}$ versus $f'(a)$ | The first is a chord; the second is a tangent. |
| Related rates | Differentiate the relation, then $\frac{dy}{dt}=\frac{dy}{dx}\frac{dx}{dt}$ | Differentiate *before* substituting numerical values. |
| Increasing / decreasing | $f'>0$ increasing, $f'<0$ decreasing on an interval | Use the mean value theorem; isolated zeros need not matter. |
| Tangent at $(x_0,y_0)$ | $y-y_0=f'(x_0)(x-x_0)$ | A slope is not a line; keep the point-slope form. |
| Normal at $(x_0,y_0)$ | $y-y_0=-\frac{1}{f'(x_0)}(x-x_0)$ | Requires $f'(x_0)\ne0$; otherwise the normal is $x=x_0$. |
| Estimate a nearby value | $f(x+\Delta x)\approx f(x)+f'(x)\Delta x$ | Small step; radians for trigonometric functions. |
| Local extremum at $c$ | $f'(c)=0$, then sign change or $f''(c)\lessgtr0$ | $f''=0$ is inconclusive; use the first derivative test. |
| Absolute extremum on $[a,b]$ | Compare values at critical points and endpoints | Continuity on the closed interval is assumed. |
| Optimisation | Objective in one variable, domain, $Q'=0$, classify | Check that the optimum is feasible and in the right units. |

<learning-block type="mistake" title="Fast sanity checks">

If a "rate" answer has the wrong units, recheck which variable is differentiated with respect to time. If an approximation moves a value the wrong way, check the sign of $\Delta x$. If a claimed maximum is smaller than a value you can compute at a nearby point, restart the classification. A correct number from the wrong method is still a revision target.

</learning-block>

## Section A — 10 rapid MCQs

### 1. Slope of a tangent

For $y=x^3-3x$, the slope of the tangent at $x=2$ is:

- A. $3$
- B. $6$
- C. $9$
- D. $12$

<details><summary>Answer</summary>

**C.** $y'=3x^2-3$, so at $x=2$ the slope is $3(4)-3=9$.

</details>

### 2. A monotone function

The function $f(x)=x-\cos x$ on $\mathbb R$ is:

- A. strictly increasing
- B. strictly decreasing
- C. constant
- D. neither increasing nor decreasing

<details><summary>Answer</summary>

**A.** $f'(x)=1+\sin x\ge0$, and it is zero only at the isolated points $x=\frac{3\pi}{2}+2n\pi$. Between those points $f'>0$, so $f$ is strictly increasing on $\mathbb R$.

</details>

### 3. A square root estimate

The best linear estimate of $\sqrt{26}$ from the base point $25$ is:

- A. $5.05$
- B. $5.1$
- C. $5.2$
- D. $5.01$

<details><summary>Answer</summary>

**B.** With $f(x)=\sqrt x$, $f(25)=5$ and $f'(25)=\frac{1}{2\sqrt{25}}=\frac1{10}$. Hence $\sqrt{26}\approx5+\frac1{10}(1)=5.1$; the true value is about $5.09902$.

</details>

### 4. A growing cube

A cube's edge grows at $2\ \text{cm/s}$. When the edge is $3\ \text{cm}$, the volume grows at:

- A. $18\ \text{cm}^3/\text{s}$
- B. $36\ \text{cm}^3/\text{s}$
- C. $54\ \text{cm}^3/\text{s}$
- D. $108\ \text{cm}^3/\text{s}$

<details><summary>Answer</summary>

**C.** $V=x^3$ gives $\frac{dV}{dt}=3x^2\frac{dx}{dt}=3(9)(2)=54\ \text{cm}^3/\text{s}$.

</details>

### 5. A local maximum

The function $f(x)=x^3-6x^2+9x+1$ has a local maximum at:

- A. $x=1$
- B. $x=2$
- C. $x=3$
- D. $x=6$

<details><summary>Answer</summary>

**A.** $f'(x)=3(x-1)(x-3)$ and $f''(x)=6x-12$. At $x=1$, $f''=-6<0$, so it is a local maximum; at $x=3$ it is a local minimum.

</details>

### 6. A tangent to a square root

The tangent to $y=\sqrt x$ at $(4,2)$ is:

- A. $x-4y+4=0$
- B. $4x-y+4=0$
- C. $x+4y=18$
- D. $y=4x-4$

<details><summary>Answer</summary>

**A.** $y'=\frac{1}{2\sqrt x}=\frac14$ at $x=4$, so $y-2=\frac14(x-4)$, i.e. $x-4y+4=0$. Option C is the normal, whose slope is $-4$.

</details>

### 7. A normal to a parabola

The normal to $y=x^2$ at $(1,1)$ is:

- A. $x+2y=3$
- B. $2x+y=3$
- C. $x-2y=1$
- D. $y=2x-1$

<details><summary>Answer</summary>

**A.** The tangent slope is $2$, so the normal slope is $-\frac12$. Thus $y-1=-\frac12(x-1)$, i.e. $x+2y=3$.

</details>

### 8. Largest area

Among rectangles of perimeter $20\ \text{m}$, the largest area is:

- A. $20\ \text{m}^2$
- B. $25\ \text{m}^2$
- C. $50\ \text{m}^2$
- D. $100\ \text{m}^2$

<details><summary>Answer</summary>

**B.** Sides $x$ and $10-x$ give $A=10x-x^2$, $A'=10-2x=0$ at $x=5$, $A''=-2<0$, so $A_{\max}=25\ \text{m}^2$, attained by a square.

</details>

### 9. Reading the second derivative

If $f'(c)=0$ and $f''(c)>0$, then $c$ is:

- A. a local maximum
- B. a local minimum
- C. a point of inflection
- D. an endpoint maximum

<details><summary>Answer</summary>

**B.** A positive second derivative means $f'$ goes from negative to positive across $c$, the signature of a local minimum.

</details>

### 10. An inconclusive test

For $f(x)=x^4$ at $x=0$, the stationary point is:

- A. a local maximum
- B. a local minimum
- C. neither a maximum nor a minimum
- D. impossible to classify

<details><summary>Answer</summary>

**B.** $f'(x)=4x^3$ vanishes at $0$, and $f''(0)=12(0)^2=0$, so the second derivative test is inconclusive. But $f(x)=x^4\ge0=f(0)$ for all $x$, so $x=0$ is a local (indeed absolute) minimum. The first derivative changes from negative to positive there.

</details>

## Section B — 5 numerical-value questions

### 11. Estimate $\sqrt{9.1}$

Using a differential, estimate $\sqrt{9.1}$ to four decimal places.

<details><summary>Answer</summary>

Take $f(x)=\sqrt x$ with base $9$ and $dx=0.1$. Since $f(9)=3$ and $f'(9)=\frac{1}{2\cdot3}=\frac16$,

$$
\sqrt{9.1}\approx3+\frac16(0.1)=3+\frac1{60}\approx3.0167.
$$

The true value is about $3.01662$, so the estimate differs by less than $5\times10^{-5}$.

</details>

### 12. A sliding ladder

A $13\ \text{m}$ ladder leans against a wall. Its foot is pulled away at $2\ \text{m/s}$. Find the downward speed of the top when the foot is $5\ \text{m}$ from the wall.

<details><summary>Answer</summary>

$x^2+y^2=169$ gives $2x\frac{dx}{dt}+2y\frac{dy}{dt}=0$. With $x=5$, $y=\sqrt{169-25}=12$, and $\frac{dx}{dt}=2$:

$$
2(5)(2)+2(12)\frac{dy}{dt}=0\quad\Rightarrow\quad \frac{dy}{dt}=-\frac{20}{24}=-\frac56\ \text{m/s}.
$$

The top descends at $\frac56\approx0.833\ \text{m/s}$; the negative sign encodes "downward".

</details>

### 13. A maximum product

Find the maximum value of $x(12-x)$ for $0\le x\le12$.

<details><summary>Answer</summary>

$P(x)=12x-x^2$, so $P'=12-2x=0$ at $x=6$ and $P''=-2<0$. The maximum value is $P(6)=6\cdot6=36$; the endpoints give $0$.

</details>

### 14. A local minimum value

Find the local minimum value of $f(x)=2x^3-3x^2-12x+5$.

<details><summary>Answer</summary>

$f'(x)=6x^2-6x-12=6(x+1)(x-2)$, so the critical points are $x=-1$ and $x=2$; $f''(x)=12x-6$. Since $f''(2)=18>0$, $x=2$ is the local minimum, with

$$
f(2)=16-12-24+5=-15.
$$

(At $x=-1$, $f''=-18<0$: local maximum $f(-1)=12$.)

</details>

### 15. An expanding circle

The radius of a circle increases at $3\ \text{cm/s}$. Find the rate of increase of its area when $r=10\ \text{cm}$.

<details><summary>Answer</summary>

$A=\pi r^2$, so $\frac{dA}{dt}=2\pi r\frac{dr}{dt}=2\pi(10)(3)=60\pi\ \text{cm}^2/\text{s}\approx188.5\ \text{cm}^2/\text{s}$.

</details>

## Section C — 3 assertion–reason questions

For each question choose: **A** — both statements true and the reason correctly explains the assertion; **B** — both true but the reason is not the correct explanation; **C** — assertion true, reason false; **D** — assertion false, reason true.

### 16. A horizontal tangent

**Assertion:** If $f'(c)=0$, then $f$ has a local extremum at $c$.
**Reason:** $f'(c)=0$ means the tangent to the curve at $c$ is horizontal.

- A / B / C / D as defined above

<details><summary>Answer</summary>

**D.** The reason is true, but the assertion is false: for $f(x)=x^3$, $f'(0)=0$ yet the function is strictly increasing through $0$, so there is no extremum. A horizontal tangent is necessary for an interior extremum, not sufficient.

</details>

### 17. The meaning of a differential

**Assertion:** For small $dx$, $dy=f'(x)dx$ estimates the change $\Delta y=f(x+dx)-f(x)$, with an error of order $(dx)^2$.
**Reason:** $f'(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}$, so $\frac{\Delta y}{dx}\to f'(x)$ as $dx\to0$.

<details><summary>Answer</summary>

**A.** Both are true, and the reason is the definition from which the approximation follows: $\Delta y=f'(x)dx+\text{terms of order }(dx)^2$.

</details>

### 18. Extrema on a closed interval

**Assertion:** A function continuous on a closed interval $[a,b]$ attains an absolute maximum and an absolute minimum there.
**Reason:** At every interior extremum of a differentiable function, $f'(x)=0$.

<details><summary>Answer</summary>

**B.** Both statements are true, but the reason does not explain the assertion. The existence of absolute extrema follows from continuity on a compact interval, not from derivatives; moreover an absolute extremum may occur at an endpoint, where $f'$ need not vanish.

</details>

## Section D — 2 matching / multi-statement questions

### 19. Match each curve to the slope of its normal

| Column I (curve and point) | Column II (slope of normal) |
| --- | --- |
| (P) $y=x^2$ at $x=1$ | (1) $-\frac12$ |
| (Q) $y=\sqrt x$ at $x=4$ | (2) $-4$ |
| (R) $y=e^x$ at $x=0$ | (3) $-1$ |
| (S) $y=\cos x$ at $x=0$ | (4) undefined (vertical normal) |

<details><summary>Answer</summary>

**P–1, Q–2, R–3, S–4.** For $x^2$, $m_T=2$, so $m_N=-\frac12$. For $\sqrt x$, $m_T=\frac14$, so $m_N=-4$. For $e^x$, $m_T=1$, so $m_N=-1$. For $\cos x$ at $0$, $m_T=-\sin0=0$: the tangent is horizontal and the normal is the vertical line $x=0$, whose slope is undefined — the case where $-1/m_T$ cannot be used.

</details>

### 20. Which statements are true?

For $f(x)=x^3-6x^2+9x+1$, decide which statements are correct:

1. $f'(x)=3(x-1)(x-3)$.
2. $f$ has a local maximum at $x=1$, with $f(1)=5$.
3. $f$ has a local minimum at $x=3$, with $f(3)=1$.
4. $f$ is increasing on $(1,3)$.

<details><summary>Answer</summary>

**Statements 1, 2 and 3 are true; statement 4 is false.** Differentiating gives $3x^2-12x+9=3(x-1)(x-3)$, so statement 1 holds. The sign of $f'$ is positive on $(-\infty,1)$, negative on $(1,3)$ and positive on $(3,\infty)$; hence $x=1$ is a local maximum and $x=3$ a local minimum. The values are $f(1)=1-6+9+1=5$ and $f(3)=27-54+27+1=1$. Because $f'<0$ on $(1,3)$, the function *decreases* there, so statement 4 is false.

</details>

## Review by error, not by score

| If you missed… | Revisit | Then retry |
| --- | --- | --- |
| 1, 6, 7 or 19 | Tangents and normals | Write $m=f'(x_0)$ first; for a normal use $-1/m$ only when $m\ne0$. |
| 2, 20 | Increasing and decreasing functions | Build a sign chart; isolated zeros of $f'$ do not necessarily change direction. |
| 3, 11 | Approximations | Pick a nearby base point with easy $f$ and $f'$, and keep the sign of $\Delta x$. |
| 4, 12, 15 | Rate of change | Differentiate the relation first, then substitute numbers; check units. |
| 5, 9, 10, 14 | Maxima and minima | Apply the first derivative test when $f''=0$; verify by recomputing $f$. |
| 8, 13 | Optimisation problems | Reduce to one variable, state the domain, and confirm the sign of $Q''$. |
| 16–18 | Conditions and definitions | Name the exact theorem or definition; a true reason need not explain the assertion. |

<learning-block type="recap" title="Ready to move on?">

Aim for at least 17 correct out of 20 with a written method choice for every question. Questions you solve correctly but cannot justify are revision targets, not mastered topics.

</learning-block>
