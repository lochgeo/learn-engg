## JEE Main sprint: how to use this set

This is a **50-minute, no-notes** paper for after you finish the chapter. Spend roughly 15 minutes on Section A, 15 on Section B, 10 on Section C and 10 on Section D. Mark any question still open after 90 seconds and move on. This is a mathematics paper, so no physical constants are needed.

Before writing, name the tool: substitution, parts, partial fractions, a special form, a definite-integral property or the fundamental theorem. Check the domain and the hypotheses before using a result. Every answer below includes working, because a correct option with the wrong method is still a revision target.

## Conditions and formula sheet

| Situation | Start with | Check before using it |
| --- | --- | --- |
| A function and its derivative appear | $\int f(g(x))g'(x)\,dx=\int f(u)\,du$ | $du=g'(x)dx$ must appear, up to a constant. |
| Product of unlike functions | $\int u\,dv=uv-\int v\,du$ | $u$ simplifies on differentiating; the new integral is simpler. |
| Rational function | Divide if improper, then decompose | Cover-up rule only for distinct linear factors. |
| $x^2+a^2$, $a^2-x^2$ | $\frac1a\tan^{-1}(x/a)$, $\frac1{2a}\ln\lvert\frac{a+x}{a-x}\rvert$ | Keep the scale factor; exclude $x=\pm a$. |
| $\sqrt{a^2-x^2}$, $\sqrt{x^2+a^2}$ | $\sin^{-1}(x/a)$, $\ln\lvert x+\sqrt{x^2+a^2}\rvert$ | Complete the square first. |
| Limits $0$ to $a$ | King property: $f(x)\to f(a-x)$ | The new integrand must be simpler. |
| Limits symmetric about $0$ | Even: $2\int_0^a f$; odd: $0$ | The interval must be centred at zero. |
| Any definite integral | $\int_a^b f=F(b)-F(a)$ | $f$ continuous on the whole interval; split if not. |
| Differentiating an integral | $f(v)v'-f(u)u'$ | Chain-rule factors on both limits. |

<learning-block type="mistake" title="Fast sanity checks">

Differentiate every antiderivative you write. Check that a definite integral of a positive function is positive, and that an odd function over a symmetric interval gives zero. If the King property is used, verify that the replacement is $a+b-x$, not $b-x$. A number with the right form but the wrong sign is still wrong.

</learning-block>

## Section A — 10 rapid MCQs

### 1. A scaled inverse tangent

$\displaystyle\int\frac{dx}{x^2+4}$ equals:

- A. $\tan^{-1}(x/2)+C$
- B. $\frac12\tan^{-1}(x/2)+C$
- C. $2\tan^{-1}(x/2)+C$
- D. $\frac14\tan^{-1}(x/2)+C$

<details><summary>Answer</summary>

**B.** With $a=2$, $\int\frac{dx}{x^2+a^2}=\frac{1}{a}\tan^{-1}(x/a)+C$. Differentiating B gives $\frac12\cdot\frac{1}{1+x^2/4}\cdot\frac12=\frac{1}{x^2+4}$; option A would differentiate to $\frac{2}{x^2+4}$.

</details>

### 2. Spotting the derivative

$\displaystyle\int 2x e^{x^2}\,dx$ equals:

- A. $e^{x^2}+C$
- B. $2e^{x^2}+C$
- C. $x e^{x^2}+C$
- D. $\frac12 e^{x^2}+C$

<details><summary>Answer</summary>

**A.** Put $u=x^2$, $du=2x\,dx$; the integral is $\int e^u du=e^{x^2}+C$. Differentiation confirms it.

</details>

### 3. A logarithm times a polynomial

For $x>0$, $\displaystyle\int x\ln x\,dx$ equals:

- A. $\frac{x^2}{2}\ln x-\frac{x^2}{4}+C$
- B. $x\ln x-x+C$
- C. $\frac{x^2}{2}\ln x+C$
- D. $\frac{x^2}{2}\ln x-\frac x2+C$

<details><summary>Answer</summary>

**A.** Parts with $u=\ln x$, $dv=x\,dx$ gives $\frac{x^2}{2}\ln x-\int\frac{x^2}{2}\cdot\frac{dx}{x}=\frac{x^2}{2}\ln x-\frac{x^2}{4}+C$. Its derivative is $x\ln x$.

</details>

### 4. Two reciprocal factors

For $x>0$, $\displaystyle\int\frac{dx}{x(x+1)}$ equals:

- A. $\ln\lvert x+1\rvert-\ln\lvert x\rvert+C$
- B. $\ln\lvert x\rvert-\ln\lvert x+1\rvert+C$
- C. $\ln\lvert x(x+1)\rvert+C$
- D. $-\ln\lvert x\rvert-\ln\lvert x+1\rvert+C$

<details><summary>Answer</summary>

**B.** $\frac{1}{x(x+1)}=\frac1x-\frac{1}{x+1}$ (cover up $x$ at $x=0$ and $x+1$ at $x=-1$). Integrating gives $\ln x-\ln(x+1)+C$ on the stated domain.

</details>

### 5. Area under a squared cosine

$\displaystyle\int_0^{\pi/2}\cos^2x\,dx$ equals:

- A. $0$
- B. $\frac{\pi}{4}$
- C. $\frac{\pi}{2}$
- D. $1$

<details><summary>Answer</summary>

**B.** $\cos^2x=\frac{1+\cos2x}{2}$, so the integral is $\left[\frac x2+\frac{\sin2x}{4}\right]_0^{\pi/2}=\frac{\pi}{4}$. The average height of $\cos^2$ over a full period is $\frac12$, and the interval is a half-period.

</details>

### 6. An odd power

For $a>0$, $\displaystyle\int_{-a}^{a}x^5\,dx$ equals:

- A. $\frac{a^6}{3}$
- B. $\frac{a^6}{6}$
- C. $0$
- D. $\frac{2a^6}{3}$

<details><summary>Answer</summary>

**C.** $x^5$ is odd and the interval is symmetric about $0$, so the integral is zero. Directly, $\left[\frac{x^6}{6}\right]_{-a}^{a}=\frac{a^6}{6}-\frac{a^6}{6}=0$.

</details>

### 7. A scaled secant squared

$\displaystyle\int\sec^2(3x)\,dx$ equals:

- A. $\tan(3x)+C$
- B. $3\tan(3x)+C$
- C. $\frac13\tan(3x)+C$
- D. $\frac13\sec(3x)\tan(3x)+C$

<details><summary>Answer</summary>

**C.** With $u=3x$, $du=3\,dx$, so the integral is $\frac13\int\sec^2u\,du=\frac13\tan(3x)+C$. Differentiating gives $\sec^2(3x)$.

</details>

### 8. A scaled inverse sine

$\displaystyle\int\frac{dx}{\sqrt{1-4x^2}}$ equals:

- A. $\sin^{-1}(2x)+C$
- B. $\frac12\sin^{-1}(2x)+C$
- C. $2\sin^{-1}(2x)+C$
- D. $\frac12\sin^{-1}(x/2)+C$

<details><summary>Answer</summary>

**B.** Put $u=2x$, $du=2\,dx$: the integral is $\frac12\int\frac{du}{\sqrt{1-u^2}}=\frac12\sin^{-1}(2x)+C$. Differentiating B gives $\frac{1}{\sqrt{1-4x^2}}$.

</details>

### 9. Differentiating an integral

$\displaystyle\frac{d}{dx}\int_2^x t^3\,dt$ equals:

- A. $x^3$
- B. $\frac{x^4}{4}$
- C. $x^3-8$
- D. $3x^2$

<details><summary>Answer</summary>

**A.** The first fundamental theorem gives $f(x)=x^3$ directly. Indeed $\int_2^x t^3dt=\frac{x^4}{4}-4$, whose derivative is $x^3$.

</details>

### 10. A basic log integral

$\displaystyle\int_1^2\frac{dx}{x}$ equals:

- A. $\ln 2$
- B. $\frac12$
- C. $2$
- D. $\ln 3$

<details><summary>Answer</summary>

**A.** $\bigl[\ln x\bigr]_1^2=\ln2-\ln1=\ln2\approx0.693$. The value lies between $0$ and $1$, as expected for $1/x$ on an interval of width $1$.

</details>

## Section B — 5 numerical-value questions

### 11. Polynomial evaluation

Evaluate $\displaystyle\int_0^1(4x^3+2x)\,dx$.

<details><summary>Answer</summary>

An antiderivative is $x^4+x^2$, so the value is $(1+1)-0=\mathbf{2}$. Each term contributes $1$: the area under $4x^3$ and under $2x$ on $[0,1]$ is one unit each.

</details>

### 12. Finding a logarithm's argument

If $\displaystyle\int_0^1\frac{2x+1}{x^2+x+1}\,dx=\ln k$, find $k$.

<details><summary>Answer</summary>

The numerator is the derivative of the denominator, so the integral is $\left[\ln(x^2+x+1)\right]_0^1=\ln3-\ln1=\ln3$. Hence $k=\mathbf{3}$.

</details>

### 13. A fraction with tangent

If $\displaystyle I=\int_0^{\pi/2}\frac{dx}{1+\tan x}$, find $\frac{4I}{\pi}$.

<details><summary>Answer</summary>

Rewrite $\frac{1}{1+\tan x}=\frac{\cos x}{\sin x+\cos x}$. The King property turns $I$ into $\int_0^{\pi/2}\frac{\sin x}{\sin x+\cos x}\,dx$, because $\sin(\pi/2-x)=\cos x$. Adding, $2I=\int_0^{\pi/2}1\,dx=\frac{\pi}{2}$, so $I=\frac{\pi}{4}$ and $\frac{4I}{\pi}=\mathbf{1}$.

</details>

### 14. An absolute value over a finite interval

Evaluate $\displaystyle\int_0^2\lvert x-1\rvert\,dx$.

<details><summary>Answer</summary>

Split at $x=1$: the region is two right triangles of base $1$ and height $1$. Each has area $\frac12$, so the total is $\mathbf{1}$. Algebraically, $\int_0^1(1-x)\,dx+\int_1^2(x-1)\,dx=\frac12+\frac12$.

</details>

### 15. Recovering an angle

If $\displaystyle I=\int_0^1\frac{dx}{(x+1)^2+1}$, find $\tan\!\left(I+\frac{\pi}{4}\right)$.

<details><summary>Answer</summary>

$I=\bigl[\tan^{-1}(x+1)\bigr]_0^1=\tan^{-1}2-\tan^{-1}1=\tan^{-1}2-\frac{\pi}{4}$. Therefore $I+\frac{\pi}{4}=\tan^{-1}2$ and the tangent is $\mathbf{2}$.

</details>

## Section C — 3 assertion–reason questions

For questions 16–18 choose: **A.** both assertion and reason are true, and the reason explains the assertion; **B.** both are true, but the reason does not explain the assertion; **C.** assertion true, reason false; **D.** assertion false, reason true.

### 16. A less obvious odd function

**Assertion:** $\displaystyle\int_{-1}^{1}\frac{x}{1+x^4}\,dx=0$.

**Reason:** The integrand is odd and the interval is symmetric about zero.

<details><summary>Answer</summary>

**A.** For $f(x)=x/(1+x^4)$, $f(-x)=-x/(1+x^4)=-f(x)$, and $[-1,1]$ is symmetric. Hence the integral is zero. The reason is exactly the correct justification.

</details>

### 17. Splitting is not the same as cancelling

**Assertion:** $\displaystyle\int_{-2}^{2}x^3\,dx=0$.

**Reason:** $\displaystyle\int_{-2}^{2}f(x)\,dx=\int_{-2}^{0}f(x)\,dx+\int_{0}^{2}f(x)\,dx$.

<details><summary>Answer</summary>

**B.** Both statements are true, but the splitting identity does not by itself give zero; it merely separates the interval. The missing fact is that $x^3$ is odd, so the two halves cancel: $\left[\frac{x^4}{4}\right]_{-2}^{2}=4-4=0$.

</details>

### 18. A trap across a discontinuity

**Assertion:** $\displaystyle\int_{-1}^{1}\frac{dx}{x^2}=-2$.

**Reason:** $\frac{1}{x^2}>0$ wherever it is defined, so any convergent integral of it over $[-1,1]$ must be positive.

<details><summary>Answer</summary>

**D.** The assertion is false: the evaluation $\left[-1/x\right]_{-1}^{1}=-2$ illegally crosses $x=0$, where the antiderivative is undefined and the integrand blows up. The integral diverges. The reason is true and is the quickest way to reject the claimed $-2$.

</details>

## Section D — 2 matching / multi-statement questions

### 19. Match the integrals to their values

Match Column I with Column II.

| Column I | Column II |
| --- | --- |
| (i) $\displaystyle\int_0^1 3x^2\,dx$ | (p) $1$ |
| (ii) $\displaystyle\int_0^2 x\,dx$ | (q) $2$ |
| (iii) $\displaystyle\int_1^{e^2}\frac{dx}{x}$ | (r) $3$ |
| (iv) $\displaystyle\int_0^{\pi}\frac{\sin x}{2}\,dx$ | (s) $4$ |

<details><summary>Answer</summary>

(i)–(p), (ii)–(q), (iii)–(q), (iv)–(p).

- (i) $\bigl[x^3\bigr]_0^1=1$.
- (ii) $\bigl[x^2/2\bigr]_0^2=2$.
- (iii) $\bigl[\ln x\bigr]_1^{e^2}=2$.
- (iv) $\frac12\bigl[-\cos x\bigr]_0^{\pi}=\frac12(1+1)=1$.

Two entries may share a value; that is deliberate.

</details>

### 20. Which properties are true?

Let $f$ be continuous on every interval that appears below. Which statements are true?

- (a) $\displaystyle\int_a^b f(x)\,dx=-\int_b^a f(x)\,dx$
- (b) $\displaystyle\int_a^a f(x)\,dx=0$
- (c) If $f$ is even, $\displaystyle\int_{-a}^{a}f(x)\,dx=2\int_0^a f(x)\,dx$
- (d) $\displaystyle\int_a^b f(x)\,dx=\int_a^b f(b-x)\,dx$

<details><summary>Answer</summary>

Statements (a), (b) and (c) are true; (d) is false in general.

- (a) $F(b)-F(a)=-\bigl(F(a)-F(b)\bigr)$.
- (b) An interval of zero width has $F(a)-F(a)=0$.
- (c) Proved by splitting at $0$ and substituting $t=-x$ on the negative part.
- (d) The correct reflection is $f(a+b-x)$, not $f(b-x)$. Counterexample with $a=1$, $b=2$, $f(x)=x$: the left side is $\bigl[x^2/2\bigr]_1^2=\frac32$, while $\int_1^2(2-x)\,dx=\frac12$.

</details>

## Review by error, not by score

| If you missed… | Revisit | Then retry |
| --- | --- | --- |
| 1, 8 or 15 | Special integrals | Complete the square and keep the $1/a$ factor. |
| 2, 5, 7 or 12 | Standard integrals and substitution | Differentiate your answer to confirm the scale factor. |
| 3 | Integration by parts | Choose $u$ by LIATE and check the new integral is simpler. |
| 4 | Integration by partial fractions | Compare degrees, then cover up each distinct linear factor. |
| 6, 13, 14, 16, 17, 18 or 20 | Definite integrals and their properties | Verify the limits before using symmetry, and split at bad points. |
| 9, 10 or 11 | The fundamental theorem and evaluation | State $F(b)-F(a)$ and the variable-limit chain rule. |
| 19 | The fundamental theorem and evaluation | Evaluate each entry independently and check its sign and magnitude before matching. |

<learning-block type="recap" title="Ready to move on?">

Aim for at least 20 correct out of 20 with a written method choice for each question. Any question you answer correctly but cannot justify belongs in your revision list, not in your score.

</learning-block>
