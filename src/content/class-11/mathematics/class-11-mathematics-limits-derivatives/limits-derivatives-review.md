## Your study plan for today

Limits and derivatives are a chain of ideas: each module supplies a tool the next one uses. A focused first pass, including this check, takes about **2¼ hours**:

1. **Limits and algebra of limits** — 20 min
2. **Standard limits** — 20 min
3. **Continuity** — 20 min
4. **Derivatives and first principles** — 20 min
5. **Rules of differentiation** — 25 min
6. **Applications of derivatives** — 25 min
7. **This mastery check** — 25 min

Work each question on paper before revealing the answer. Mark a topic complete only when you can say *why* the chosen method applies, not just when the number matches. Take a short break before the mastery check.

The **JEE Main timed practice** module comes after this one. Save it for when the ten questions below feel routine; its value is in choosing a method quickly under pressure.

## First choose the tool

| Clue in the question | Start with |
| --- | --- |
| Substitution gives $\dfrac00$ in a rational expression | Factorise, cancel the common factor, then use algebra of limits |
| Substitution gives $\dfrac00$ with sines or tangents | Scale arguments and use $\dfrac{\sin\theta}{\theta}\to1$ |
| Form $\dfrac{x^n-a^n}{x-a}$ | Write the answer directly as $n a^{n-1}$ |
| Form $\dfrac{a^x-1}{x}$ as $x\to0$ | Use $\ln a$ (and $1$ when $a=e$) |
| Denominator limit is non-zero | Direct substitution and the quotient rule |
| Piecewise function at the join point | Compare left limit, right limit and $f(a)$ separately |
| Limit grows without bound near the point | One-sided limits; expect no two-sided limit |
| Phrase "from first principles" | $\displaystyle\lim_{h\to0}\frac{f(a+h)-f(a)}{h}$ — expand, cancel $h$, then limit |
| Product, quotient or composite function | Product, quotient or chain rule as appropriate |
| Tangent or normal requested | Slope $f'(a)$, or $-\dfrac1{f'(a)}$ for the normal |
| Rate of change with time | $\dfrac{dy}{dt}=\dfrac{dy}{dx}\dfrac{dx}{dt}$ |
| Increasing, decreasing or turning point | Sign changes of $f'$; then $f''$ to classify |

## Mastery check

Try all ten without looking at the answers.

### 1. A removable hole

Evaluate $\displaystyle\lim_{x\to1}\frac{x^2+2x-3}{x-1}$.

<details><summary>Answer and reasoning</summary>

Substitution gives $0/0$. Since $x^2+2x-3=(x+3)(x-1)$, cancelling leaves $x+3$ for $x\ne1$. Hence the limit is $1+3=4$.

</details>

### 2. Scaled trigonometric limit

Evaluate $\displaystyle\lim_{x\to0}\frac{\sin 5x}{\sin 2x}$.

<details><summary>Answer and reasoning</summary>

Divide numerator and denominator by their own arguments:

$\dfrac{\sin5x}{\sin2x}=\dfrac52\cdot\dfrac{\sin5x/(5x)}{\sin2x/(2x)}\to\dfrac52\cdot\dfrac11=\dfrac52$.

</details>

### 3. Power difference

Evaluate $\displaystyle\lim_{x\to1}\frac{x^7-1}{x-1}$.

<details><summary>Answer and reasoning</summary>

This is $\dfrac{x^n-a^n}{x-a}$ with $n=7$, $a=1$, so the limit is $7\cdot1^6=7$.

</details>

### 4. Exponential form

Evaluate $\displaystyle\lim_{x\to0}\frac{3^x-1}{x}$.

<details><summary>Answer and reasoning</summary>

The standard result $\dfrac{a^x-1}{x}\to\ln a$ gives $\ln 3$. Numerically $\ln3\approx1.099$, a sensible magnitude.

</details>

### 5. A continuity parameter

Let $f(x)=x^2+k$ for $x<1$ and $f(x)=2x+1$ for $x\ge1$. Find $k$ for continuity at $1$.

<details><summary>Answer and reasoning</summary>

Left limit: $1^2+k=1+k$. Right limit and value: $2(1)+1=3$. Continuity demands $1+k=3$, so $k=2$.

</details>

### 6. First principles with a square root

Find the derivative of $f(x)=\sqrt{x}$ at $x=4$ from first principles.

<details><summary>Answer and reasoning</summary>

$\dfrac{\sqrt{4+h}-2}{h}=\dfrac{(4+h)-4}{h(\sqrt{4+h}+2)}=\dfrac{1}{\sqrt{4+h}+2}\to\dfrac{1}{2+2}=\dfrac14$.

This agrees with $\dfrac{d}{dx}x^{1/2}=\dfrac{1}{2\sqrt{x}}$ evaluated at $x=4$.

</details>

### 7. Product versus expansion

Differentiate $y=(x^2+1)(x^3-2)$ and check by expanding first.

<details><summary>Answer and reasoning</summary>

Product rule: $2x(x^3-2)+(x^2+1)(3x^2)=2x^4-4x+3x^4+3x^2=5x^4+3x^2-4x$.

Expanding gives $x^5+x^3-2x^2-2$, whose derivative is also $5x^4+3x^2-4x$. Both routes agree.

</details>

### 8. Quotient with a non-zero denominator limit

Differentiate $y=\dfrac{x^2+1}{x^2-1}$ for $x\ne1,-1$.

<details><summary>Answer and reasoning</summary>

$y'=\dfrac{2x(x^2-1)-2x(x^2+1)}{(x^2-1)^2}=\dfrac{2x^3-2x-2x^3-2x}{(x^2-1)^2}=\dfrac{-4x}{(x^2-1)^2}$, using the quotient rule in the order $f'g-fg'$.

</details>

### 9. Tangent and normal

Find the tangent and normal to $y=x^3-2x$ at $x=1$.

<details><summary>Answer and reasoning</summary>

The point is $(1,1-2)=(1,-1)$ and the slope is $3(1)^2-2=1$. Tangent: $y+1=x-1$, or $y=x-2$. Normal slope is $-1$, so $y+1=-(x-1)$, or $y=-x$. Both pass through $(1,-1)$.

</details>

### 10. Classifying turning points

Find and classify the local extrema of $f(x)=x^3-6x^2+9x+1$.

<details><summary>Answer and reasoning</summary>

$f'(x)=3x^2-12x+9=3(x-1)(x-3)$, so the critical points are $x=1$ and $x=3$. Also $f''(x)=6x-12$: $f''(1)=-6<0$ gives a local maximum with $f(1)=1-6+9+1=5$; $f''(3)=6>0$ gives a local minimum with $f(3)=27-54+27+1=1$. The sign of $f'$ runs positive, negative, positive across the two points, confirming the classification.

</details>

## Self-check

You are ready for the timed set when you can:

- state that a limit depends on behaviour near a point, not on $f(a)$;
- tell an indeterminate form that needs simplification from a genuine blow-up;
- derive $\dfrac{x^n-a^n}{x-a}\to n a^{n-1}$ and $\dfrac{\sin x}{x}\to1$ rather than only quoting them;
- test a piecewise function at its join using the limit and the defined value;
- differentiate from first principles without substituting $h=0$ too early;
- apply product, quotient and chain rules, including the inner derivative;
- connect $f'$ to a tangent slope, a normal slope, a rate and a turning point;
- explain why $f'(c)=0$ need not mean a maximum or minimum.

If one item is still shaky, redo its questions without the reveal before starting the JEE Main set.
