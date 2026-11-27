## When the rate is proportional to the amount

A colony of bacteria doubles at regular intervals; money in a compound-interest account grows by the same percentage each year. In both cases the rate of change is proportional to the quantity already present:

$$
\frac{dy}{dt}=ky.
$$

The function that solves this equation is an exponential. It is the only family whose derivative is essentially itself, and that single property is why exponentials and logarithms appear everywhere from population models to radioactive decay. Here we derive their derivatives rather than quote them.

## 1. The number $e$ and the derivative of $e^x$

Define

$$
e=\lim_{n\to\infty}\left(1+\frac1n\right)^n\approx 2.71828.
$$

Putting $h=1/n$ turns the definition into $e=\lim_{h\to0}(1+h)^{1/h}$. Taking logarithms gives $\lim_{h\to0}\frac{\ln(1+h)}{h}=1$. Now substitute $t=\ln(1+h)$, so $h=e^t-1$ and $t\to0$ as $h\to0$; this gives $\lim_{t\to0}\frac{t}{e^t-1}=1$, or equivalently

$$
\lim_{h\to0}\frac{e^h-1}{h}=1.
$$

This limit says that the slope of $e^x$ at $x=0$ is exactly $1$. Now differentiate $f(x)=e^x$ from first principles:

$$
f'(x)=\lim_{h\to0}\frac{e^{x+h}-e^x}{h}
=e^x\lim_{h\to0}\frac{e^h-1}{h}
=e^x.
$$

So $\frac{d}{dx}e^x=e^x$: the slope of the curve equals its height at every point. More generally, by the chain rule,

$$
\frac{d}{dx}e^{g(x)}=e^{g(x)}g'(x).
$$

For any positive base $a$, the identity $a^x=e^{x\ln a}$ gives

$$
\frac{d}{dx}a^x=a^x\ln a.
$$

The natural base $e$ is the one for which $\ln e=1$, so the extra factor disappears.

## 2. The logarithm as an inverse

The function $e^x$ maps $\mathbb{R}$ onto $(0,\infty)$ and is one-to-one, so it has an inverse defined for $x>0$:

$$
y=\ln x \quad\Longleftrightarrow\quad e^y=x.
$$

Differentiate the relation $e^y=x$ implicitly with respect to $x$. Since $\frac{d}{dx}e^y=e^y\frac{dy}{dx}$,

$$
e^y\frac{dy}{dx}=1 \quad\Longrightarrow\quad \frac{dy}{dx}=\frac{1}{e^y}=\frac1x.
$$

Therefore

$$
\frac{d}{dx}\ln x=\frac1x \quad (x>0).
$$

The derivative is positive because $\ln x$ is increasing, and it tends to $0$ as $x$ grows because the curve flattens. For another base, $\log_a x=\frac{\ln x}{\ln a}$, so

$$
\frac{d}{dx}\log_a x=\frac{1}{x\ln a}.
$$

Combining with the chain rule gives the pair of forms used constantly in calculus:

$$
\frac{d}{dx}\ln g(x)=\frac{g'(x)}{g(x)}\quad (g(x)>0),\qquad
\frac{d}{dx}a^{g(x)}=a^{g(x)}g'(x)\ln a.
$$

Note that $\frac{d}{dx}\ln(3x)=\frac{3}{3x}=\frac1x$: the factor $3$ inside the logarithm changes the function by a constant $\ln 3$, and constants have zero derivative.

## 3. Worked example: a product with both families

Let $f(x)=e^{2x}\ln(3x)$ for $x>0$, and find $f'(1)$.

Apply the product rule, then the chain rule to each factor:

$$
f'(x)=\bigl(2e^{2x}\bigr)\ln(3x)+e^{2x}\left(\frac{3}{3x}\right)
=2e^{2x}\ln(3x)+\frac{e^{2x}}{x}.
$$

At $x=1$,

$$
f'(1)=2e^2\ln 3+e^2=e^2(2\ln 3+1).
$$

Using $\ln3\approx1.0986$ and $e^2\approx7.389$, this is about $7.389(3.1972)\approx23.6$.

**Sanity check.** Both $e^{2x}$ and $\ln(3x)$ are positive and increasing for $x>0$, so the derivative of their product must be positive; $23.6$ is. A common wrong answer, $e^2\ln3\approx8.12$, comes from differentiating $e^{2x}$ as $e^{2x}$ and forgetting the factor $2$.

## 4. Worked example: a horizontal tangent

For $y=e^{x^2}$, the chain rule gives $y'=2x\,e^{x^2}$. At $x=0$, $y'=0$, so the tangent is horizontal there. This is consistent with the symmetry of $y=e^{x^2}$ about the $y$-axis: an even differentiable function must have zero derivative at $x=0$ if the derivative exists. Everywhere else the slope has the sign of $x$, which matches the falling-then-rising shape.

<learning-block type="mistake" title="Factor, domain and base errors">

Three slips recur in this topic. First, $\frac{d}{dx}e^{2x}=2e^{2x}$, not $e^{2x}$ — the derivative of the inside must be included. Second, $\frac{d}{dx}\ln(3x)=\frac1x$, not $\frac1{3x}$; the chain factor cancels the $3$. Third, $\ln$ means $\log_e$, so $\frac{d}{dx}\log_{10}x=\frac{1}{x\ln 10}$, not $\frac1x$. Also remember that $\ln x$ exists only for $x>0$; a formula involving $\ln$ cannot be used across $x=0$.

</learning-block>

## Try it yourself

**A.** Differentiate $y=e^{3x^2}$.

<details><summary>Show the reasoning</summary>

The inside is $3x^2$, with derivative $6x$. Hence $y'=6x\,e^{3x^2}$. At $x=0$ the derivative is $0$, again a horizontal tangent.

</details>

**B.** Find $\frac{d}{dx}\log_2(x^2+1)$.

<details><summary>Show the reasoning</summary>

Using $\frac{d}{dx}\log_a g(x)=\frac{g'(x)}{g(x)\ln a}$ with $a=2$, $g(x)=x^2+1$:

$$
\frac{d}{dx}\log_2(x^2+1)=\frac{2x}{(x^2+1)\ln 2}.
$$

The argument $x^2+1\ge1>0$, so the domain condition is satisfied for all real $x$.

</details>

**C.** Find the value of $\lim_{x\to0}\frac{e^{5x}-1}{x}$ without L'Hôpital's rule.

<details><summary>Show the reasoning</summary>

Multiply and divide by $5$:

$$
\frac{e^{5x}-1}{x}=5\cdot\frac{e^{5x}-1}{5x}\to5\cdot1=5,
$$

because $\frac{e^h-1}{h}\to1$ as $h\to0$. In general $\lim_{x\to0}\frac{e^{kx}-1}{x}=k$, which is just the derivative of $e^{kx}$ at $0$.

</details>

## Remember

- $\frac{d}{dx}e^x=e^x$ and $\frac{d}{dx}\ln x=\frac1x$ for $x>0$; both come from the defining limit for $e$.
- $\frac{d}{dx}a^x=a^x\ln a$ and $\frac{d}{dx}\log_a x=\frac{1}{x\ln a}$ for $a>0$, $a\ne1$.
- Chain rule forms: $\frac{d}{dx}e^{g}=e^{g}g'$ and $\frac{d}{dx}\ln g=\frac{g'}{g}$ with $g>0$.
- $\lim_{x\to0}\frac{e^{kx}-1}{x}=k$ is the derivative of $e^{kx}$ at the origin.
- Products, powers and quotients of these functions are handled more cleanly by taking logarithms first — the subject of the next module.
