## One formula, many constants

The integral $\int\frac{dx}{1+x^2}$ is $\tan^{-1}x+C$. What about $\int\frac{dx}{x^2+9}$? Rather than memorising a new line, rescale the variable. Substituting $x=at$ turns every constant into a factor of $1/a$, and the same idea generates the whole family of "special" integrals.

## 1. Scaling the inverse tangent and sine forms

Let $a>0$ and put $x=at$, so $dx=a\,dt$. Then

$$
\int\frac{dx}{x^2+a^2}=\int\frac{a\,dt}{a^2(1+t^2)}=\frac1a\tan^{-1}t+C
=\frac1a\tan^{-1}\!\left(\frac{x}{a}\right)+C.
$$

Similarly, with $x=a\sin\theta$ and $dx=a\cos\theta\,d\theta$,

$$
\int\frac{dx}{\sqrt{a^2-x^2}}=\int\frac{a\cos\theta\,d\theta}{a\cos\theta}
=\theta+C=\sin^{-1}\!\left(\frac{x}{a}\right)+C,
$$

valid for $-a<x<a$. The constant $a$ is a **scale**: it appears in the argument and, for the tangent form, also as the prefactor $1/a$.

## 2. Difference forms produce logarithms

For $x^2-a^2=(x-a)(x+a)$, partial fractions give

$$
\frac{1}{x^2-a^2}=\frac{1}{2a}\left(\frac{1}{x-a}-\frac{1}{x+a}\right)
\quad\Longrightarrow\quad
\int\frac{dx}{x^2-a^2}=\frac{1}{2a}\ln\left\lvert\frac{x-a}{x+a}\right\rvert+C.
$$

For the reverse difference,

$$
\frac{1}{a^2-x^2}=\frac{1}{2a}\left(\frac{1}{a-x}+\frac{1}{a+x}\right)
\quad\Longrightarrow\quad
\int\frac{dx}{a^2-x^2}=\frac{1}{2a}\ln\left\lvert\frac{a+x}{a-x}\right\rvert+C.
$$

Both require $x\ne\pm a$. A sum in the denominator gives an inverse tangent; a difference gives a logarithm. That contrast is the single most useful memory aid here.

## 3. Square-root forms

For $\sqrt{x^2+a^2}$, use $x=a\tan\theta$, so $dx=a\sec^2\theta\,d\theta$ and $\sqrt{x^2+a^2}=a\sec\theta$:

$$
\int\frac{dx}{\sqrt{x^2+a^2}}=\int\sec\theta\,d\theta
=\ln\lvert\sec\theta+\tan\theta\rvert+C
=\ln\left\lvert x+\sqrt{x^2+a^2}\right\rvert+C,
$$

where the additive constant $-\ln a$ has been absorbed into $C$. The same outer form holds for $\int dx/\sqrt{x^2-a^2}$ when $x>a$, obtained from $x=a\sec\theta$; only the domain changes.

## 4. Completing the square

A quadratic with leading coefficient $1$ is handled by writing

$$
x^2+px+q=\left(x+\frac p2\right)^2+\left(q-\frac{p^2}{4}\right).
$$

Shift $u=x+p/2$ and the expressions above apply. For $\int du/(u^2+k)$, a positive $k$ gives a $\tan^{-1}$ and a negative $k$ gives a logarithm. Under a square root, $\int du/\sqrt{u^2+k}$ with $k>0$ gives a logarithm, while a form such as $\int du/\sqrt{a^2-u^2}$ gives a $\sin^{-1}$.

## 5. Worked example with a numerical check

Evaluate $\displaystyle\int\frac{dx}{x^2+6x+13}$.

Complete the square: $x^2+6x+13=(x+3)^2+4$, so with $u=x+3$ and $a=2$,

$$
\int\frac{dx}{x^2+6x+13}=\int\frac{du}{u^2+2^2}
=\frac12\tan^{-1}\!\left(\frac{x+3}{2}\right)+C.
$$

**Sanity check.** At $x=-1$ the integrand is $1/(1-6+13)=1/8=0.125$. Differentiating the answer at $x=-1$ gives $\frac12\cdot\frac{1}{1+1}\cdot\frac12=\frac18$. They match.

<learning-block type="mistake" title="Dropping the scale factor">

Writing $\int\frac{dx}{x^2+9}=\tan^{-1}(x/3)+C$ looks plausible but fails on differentiation: the derivative is $\frac13\cdot\frac{1}{1+x^2/9}=\frac{3}{x^2+9}$, three times too large. The correct answer is $\frac13\tan^{-1}(x/3)+C$. The same slip appears as a missing $\frac1a$ in $\int dx/(a^2-x^2)$ and $\int dx/(x^2-a^2)$. Differentiate to confirm the prefactor every time.

</learning-block>

## Try it yourself

**A.** Evaluate $\displaystyle\int\frac{dx}{\sqrt{9-x^2}}$.

<details><summary>Show the reasoning</summary>

Here $a=3$ in $\int dx/\sqrt{a^2-x^2}$, so the answer is $\sin^{-1}(x/3)+C$. Differentiation gives $\frac{1}{\sqrt{1-x^2/9}}\cdot\frac13=\frac{1}{\sqrt{9-x^2}}$.

</details>

**B.** Evaluate $\displaystyle\int\frac{dx}{x^2+2x+5}$.

<details><summary>Show the reasoning</summary>

Complete the square: $x^2+2x+5=(x+1)^2+4$. With $u=x+1$ and $a=2$, the integral is $\frac12\tan^{-1}\!\left(\frac{x+1}{2}\right)+C$. Differentiating at $x=0$ gives $\frac12\cdot\frac{1}{1+1/4}\cdot\frac12=\frac{1}{5}$, which equals the integrand $1/5$.

</details>

**C.** Evaluate $\displaystyle\int\frac{dx}{\sqrt{x^2+4}}$.

<details><summary>Show the reasoning</summary>

Use $\int dx/\sqrt{x^2+a^2}$ with $a=2$: the answer is $\ln\left\lvert x+\sqrt{x^2+4}\right\rvert+C$. Differentiating gives $\frac{1+x/\sqrt{x^2+4}}{x+\sqrt{x^2+4}}=\frac{1}{\sqrt{x^2+4}}$ after multiplying numerator and denominator by $\sqrt{x^2+4}$.

</details>

## Remember

- Derive the constant-dependent forms by scaling $x=at$; do not memorise them in isolation.
- Sum in the denominator gives $\tan^{-1}$; difference gives a logarithm; both need the factor $1/a$ or $1/(2a)$.
- Under a square root, $a^2-x^2$ gives $\sin^{-1}$, while $x^2\pm a^2$ gives a logarithmic form.
- Complete the square before matching a quadratic to any standard form.
- The next module changes the question from "find a family of antiderivatives" to "find one number" and studies the definite integral.
