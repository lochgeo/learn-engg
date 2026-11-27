## Your study plan for today

Integration is a collection of tools chosen by the *shape* of the integrand. A focused first pass takes about **2 hours 40 minutes**, plus a short break:

1. **Standard integrals and substitution** — 22 min
2. **Integration by parts** — 22 min
3. **Integration by partial fractions** — 22 min
4. **Special integrals** — 22 min
5. **Definite integrals and their properties** — 22 min
6. **The fundamental theorem and evaluation** — 22 min
7. **This mastery check** — 25 min

Work through the questions below from a blank page, then open the reveals. Take a short break after the fourth topic. When all six tools feel separate and identifiable, use the **JEE Main timed practice** module for a 50-minute mixed paper; its difficulty is in choosing a tool quickly, not in any single technique.

## First choose the tool

| Clue in the integrand or limits | Start with |
| --- | --- |
| A function and its derivative appear together | Substitution: $u=g(x)$, $du=g'(x)\,dx$ |
| Product of unrelated functions (polynomial × exponential, log, trig) | Parts: $\int u\,dv=uv-\int v\,du$ |
| Ratio of polynomials, denominator factorises | Partial fractions; divide first if improper |
| Numerator is the derivative of the denominator | Direct log: $\ln\lvert Q(x)\rvert$ |
| $x^2\pm a^2$, $a^2-x^2$ or a quadratic under a root | Special integrals; complete the square |
| Limits are symmetric about $0$ | Even/odd symmetry; split if needed |
| Limits are $0$ to $a$ and $f(a-x)$ simplifies | King property: replace $x$ by $a-x$ |
| The integrand is periodic | Reduce to one period: $\int_0^{nT}f=n\int_0^Tf$ |
| An antiderivative must be found or an integral differentiated | Fundamental theorem, including variable limits |

## Mastery check

Try each question before opening its answer. Check every antiderivative by differentiating it.

### 1. Power, reciprocal and exponential

Evaluate $\displaystyle\int\left(3x^2-\frac{2}{x}+e^x\right)\,dx$.

<details><summary>Answer and reasoning</summary>

Integrate term by term: $x^3-2\ln\lvert x\rvert+e^x+C$. Differentiation gives $3x^2-2/x+e^x$, confirming the result. The power rule is not used on the $1/x$ term.

</details>

### 2. A derivative hiding in a root

Evaluate $\displaystyle\int\frac{x}{\sqrt{1+x^2}}\,dx$.

<details><summary>Answer and reasoning</summary>

Let $u=1+x^2$, so $du=2x\,dx$ and $x\,dx=\tfrac12du$. The integral is $\tfrac12\int u^{-1/2}du=u^{1/2}+C=\sqrt{1+x^2}+C$. Its derivative is $x/\sqrt{1+x^2}$.

</details>

### 3. A product that needs parts

Evaluate $\displaystyle\int x\cos x\,dx$.

<details><summary>Answer and reasoning</summary>

Take $u=x$, $dv=\cos x\,dx$, so $du=dx$ and $v=\sin x$. Then $x\sin x-\int\sin x\,dx=x\sin x+\cos x+C$. Differentiation gives $\sin x+x\cos x-\sin x=x\cos x$.

</details>

### 4. Partial fractions with two linear factors

Evaluate $\displaystyle\int\frac{5x-4}{(x-1)(x-2)}\,dx$.

<details><summary>Answer and reasoning</summary>

Write $5x-4=A(x-2)+B(x-1)$. At $x=1$, $1=-A$ so $A=-1$; at $x=2$, $6=B$. Hence the integral is $\int\left(\frac{-1}{x-1}+\frac{6}{x-2}\right)dx=-\ln\lvert x-1\rvert+6\ln\lvert x-2\rvert+C$. At $x=0$ the decomposition gives $1-3=-2$, matching the original $-2$.

</details>

### 5. A scaled inverse sine

Evaluate $\displaystyle\int\frac{dx}{\sqrt{4-9x^2}}$.

<details><summary>Answer and reasoning</summary>

Factor $\sqrt{4-9x^2}=2\sqrt{1-(3x/2)^2}$. With $u=3x/2$ and $dx=\tfrac23du$, the integral becomes $\tfrac13\int\frac{du}{\sqrt{1-u^2}}=\tfrac13\sin^{-1}\!\left(\frac{3x}{2}\right)+C$. Its derivative is $\tfrac13\cdot\tfrac{3}{2}\cdot\frac{1}{\sqrt{1-9x^2/4}}=\frac{1}{\sqrt{4-9x^2}}$.

</details>

### 6. Complete the square first

Evaluate $\displaystyle\int\frac{dx}{x^2+2x+5}$.

<details><summary>Answer and reasoning</summary>

Since $x^2+2x+5=(x+1)^2+4$, set $u=x+1$ and $a=2$. The answer is $\frac12\tan^{-1}\!\left(\frac{x+1}{2}\right)+C$. Differentiating at $x=0$ gives $\frac12\cdot\frac{1}{1+1/4}\cdot\frac12=\frac15$, the value of the integrand there.

</details>

### 7. King property with a weighted numerator

Evaluate $\displaystyle\int_0^{\pi}\frac{x\sin x}{1+\cos^2x}\,dx$.

<details><summary>Answer and reasoning</summary>

Let $I$ be the integral. The King property replaces $x$ by $\pi-x$, leaving $\sin x$ and $\cos^2x$ unchanged, so $I=\int_0^\pi\frac{(\pi-x)\sin x}{1+\cos^2x}dx$. Adding, $2I=\pi\int_0^\pi\frac{\sin x}{1+\cos^2x}dx$. With $u=\cos x$, the limits run from $1$ to $-1$ and $\int_{-1}^1\frac{du}{1+u^2}=\left[\tan^{-1}u\right]_{-1}^1=\frac\pi2$. Thus $I=\frac{\pi^2}{4}$.

</details>

### 8. Differentiating an integral

Find $\displaystyle\frac{d}{dx}\int_0^{x^3}\sqrt{1+t^2}\,dt$.

<details><summary>Answer and reasoning</summary>

By the fundamental theorem with a variable upper limit, $f(x^3)\cdot 3x^2=3x^2\sqrt{1+x^6}$. No antiderivative of $\sqrt{1+t^2}$ needs to be found.

</details>

### 9. An absolute value across zero

Evaluate $\displaystyle\int_{-1}^{1}\lvert 2x\rvert\,dx$.

<details><summary>Answer and reasoning</summary>

Since $|2x|=2|x|$ and $|x|$ is even, the integral is $2\int_{-1}^1|x|dx=2\left(\tfrac12+\tfrac12\right)=2$. Equivalently, split at $0$: $\int_{-1}^0(-2x)dx+\int_0^1 2x\,dx=1+1=2$. Using $\bigl[x^2\bigr]_{-1}^{1}=0$ would be wrong.

</details>

### 10. A definite log integral

Evaluate $\displaystyle\int_0^1\frac{2x+3}{x^2+3x+5}\,dx$.

<details><summary>Answer and reasoning</summary>

The numerator is the derivative of the denominator, so an antiderivative is $\ln(x^2+3x+5)$. The value is $\ln 9-\ln 5=\ln\!\left(\frac95\right)\approx0.588$. Differentiation confirms the antiderivative.

</details>

## Self-check

You are ready for the timed set when you can:

- decide between substitution and parts from the shape of a product;
- decompose a proper rational fraction and divide an improper one before starting;
- derive the $1/a$ factors in the special integrals instead of guessing them;
- complete the square and match a quadratic to a $\tan^{-1}$, $\sin^{-1}$ or log form;
- use symmetry and the King property only when the limits justify them;
- state both parts of the fundamental theorem and differentiate an integral with variable limits;
- split an interval at a discontinuity or an absolute-value corner;
- verify every antiderivative by differentiation and every definite integral by a sign or magnitude check.

If one item still feels shaky, revisit that module and redo its questions without the reveals.
