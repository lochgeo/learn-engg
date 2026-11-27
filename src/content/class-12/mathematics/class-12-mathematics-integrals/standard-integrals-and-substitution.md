## Undoing a derivative

A speedometer reports how distance changes with time; a trip log reports how far the car actually went. Differentiation is the speedometer. Integration reconstructs the trip log from the speedometer: given a rate of change, recover the accumulated quantity. That is why an antiderivative is also called an **indefinite integral**.

There is one subtlety. If $F'(x)=f(x)$, then $(F(x)+7)'=f(x)$ as well. A rate of change never fixes the starting value, so the answer is a whole family of functions, not a single one.

## 1. The definition and the constant of integration

The **indefinite integral** of $f$ is

$$
\int f(x)\,dx = F(x)+C,\qquad \text{where } F'(x)=f(x).
$$

Here $f$ is the *integrand*, $dx$ names the variable, and $C$ is the **constant of integration**. It is not decorative: every member of the family has the same derivative, and the correct member is selected only when extra information (an initial value) is supplied.

Two rules follow directly from the corresponding derivative rules. When $f$ and $g$ have antiderivatives and $k$ is a constant,

$$
\int\bigl(f(x)\pm g(x)\bigr)\,dx=\int f(x)\,dx\pm\int g(x)\,dx,
\qquad
\int k f(x)\,dx=k\int f(x)\,dx.
$$

These let you break a complicated integrand into familiar pieces.

## 2. Where the standard formulas come from

Most entries in the standard table are derivative formulas read backwards. For $n\ne-1$, differentiate $x^{n+1}/(n+1)$:

$$
\frac{d}{dx}\left(\frac{x^{n+1}}{n+1}\right)=\frac{n+1}{n+1}x^n=x^n
\quad\Longrightarrow\quad
\int x^n\,dx=\frac{x^{n+1}}{n+1}+C\quad(n\ne-1).
$$

The excluded case is genuine, not a technicality: $x^{n+1}/(n+1)$ would mean $x^0/0$. Instead $(\ln x)'=1/x$ for $x>0$ and $(\ln(-x))'=1/x$ for $x<0$, so the two branches combine into $\int dx/x=\ln\lvert x\rvert+C$.

| Integrand $f(x)$ | Antiderivative $F(x)$ | Condition |
| --- | --- | --- |
| $x^n$ | $\dfrac{x^{n+1}}{n+1}$ | $n\ne-1$ |
| $1/x$ | $\ln x$ | $x>0$; use $\ln(-x)$ for $x<0$ |
| $e^x$ | $e^x$ | all $x$ |
| $a^x$ | $\dfrac{a^x}{\ln a}$ | $a>0,\ a\ne1$ |
| $\sin x$ | $-\cos x$ | all $x$ |
| $\cos x$ | $\sin x$ | all $x$ |
| $\sec^2 x$ | $\tan x$ | $x\ne\frac{\pi}{2}+n\pi$ |
| $\csc^2 x$ | $-\cot x$ | $x\ne n\pi$ |
| $\sec x\tan x$ | $\sec x$ | $\cos x\ne0$ |
| $1/(1+x^2)$ | $\tan^{-1}x$ | all $x$ |
| $1/\sqrt{1-x^2}$ | $\sin^{-1}x$ | $-1<x<1$ |

Every row can be checked by differentiating the right-hand column. Make that check a habit rather than an emergency measure.

## 3. Substitution reverses the chain rule

Suppose $F'=f$ and $u=g(x)$ is differentiable. The chain rule gives

$$
\frac{d}{dx}F(g(x))=F'(g(x))g'(x)=f(g(x))g'(x).
$$

Reading this backwards gives the **substitution rule**:

$$
\int f(g(x))\,g'(x)\,dx=\int f(u)\,du,\qquad u=g(x),\quad du=g'(x)\,dx.
$$

In practice: choose an inner function $u$, compute $du$, and check that the rest of the integrand supplies $du$ up to a constant factor. If it does not, substitution is not yet the right tool.

## 4. Worked example: the derivative is already present

Evaluate $\displaystyle\int\frac{2x+3}{x^2+3x+5}\,dx$.

The denominator's derivative is $2x+3$, which is exactly the numerator. Put $u=x^2+3x+5$, so $du=(2x+3)\,dx$. Then

$$
\int\frac{2x+3}{x^2+3x+5}\,dx=\int\frac{du}{u}=\ln\lvert u\rvert+C=\ln\left(x^2+3x+5\right)+C.
$$

The absolute-value bars can be dropped because the discriminant $3^2-4(5)=-11<0$, so the quadratic is positive for every real $x$.

**Sanity check by differentiation.** At $x=1$ the derivative of the answer is $(2x+3)/(x^2+3x+5)=5/9$. The original integrand at $x=1$ is also $5/(1+3+5)=5/9$. The two agree.

## 5. Worked example: a constant factor is allowed

Evaluate $\displaystyle\int x\sqrt{x^2+1}\,dx$.

Let $u=x^2+1$, so $du=2x\,dx$ and $x\,dx=\tfrac12 du$. Hence

$$
\int x\sqrt{x^2+1}\,dx=\frac12\int u^{1/2}\,du
=\frac12\cdot\frac23u^{3/2}+C=\frac13\left(x^2+1\right)^{3/2}+C.
$$

**Sanity check.** Differentiating gives $\frac13\cdot\frac32(x^2+1)^{1/2}\cdot2x=x\sqrt{x^2+1}$, the original integrand. At $x=1$ both equal $\sqrt2$.

<learning-block type="mistake" title="A substitution needs its differential">

It is tempting to write $\int\cos(x^2)\,dx=\sin(x^2)+C$. Differentiating the right side gives $2x\cos(x^2)$, not $\cos(x^2)$: the needed factor $2x$ is missing. Substitution works only when the derivative of the chosen inner function is present, up to a constant. Thus $\int x\cos(x^2)\,dx=\tfrac12\sin(x^2)+C$, but $\int\cos(x^2)\,dx$ has no elementary antiderivative. Always finish by differentiating your answer.

</learning-block>

## Try it yourself

**A.** Evaluate $\displaystyle\int 3x^2\cos(x^3)\,dx$.

<details><summary>Show the reasoning</summary>

Take $u=x^3$, so $du=3x^2\,dx$, which is exactly the remaining factor. The integral becomes $\int\cos u\,du=\sin u+C=\sin(x^3)+C$. Differentiation returns $3x^2\cos(x^3)$.

</details>

**B.** Evaluate $\displaystyle\int\frac{dx}{x+2}$ for $x>-2$.

<details><summary>Show the reasoning</summary>

Here the inner function $u=x+2$ has $du=dx$, so $\int\frac{du}{u}=\ln\lvert u\rvert+C=\ln\lvert x+2\rvert+C$. On the stated domain $x+2>0$, this is simply $\ln(x+2)+C$.

</details>

**C.** Evaluate $\displaystyle\int e^{2x}\,dx$.

<details><summary>Show the reasoning</summary>

With $u=2x$, $du=2\,dx$, so $dx=\tfrac12du$. Hence $\int e^{2x}dx=\tfrac12\int e^u du=\tfrac12e^{2x}+C$. Differentiating $\tfrac12e^{2x}$ gives $e^{2x}$; differentiating $e^{2x}$ alone would give $2e^{2x}$, which is twice too large.

</details>

## Remember

- An indefinite integral is a family $F(x)+C$; differentiate your answer to verify it.
- The power rule needs $n\ne-1$; the case $n=-1$ produces a logarithm.
- Substitution reverses the chain rule, so the derivative of the inner function must appear up to a constant factor.
- Sums split and constants pull out; use those rules before hunting for a substitution.
- Products such as $x e^{2x}$ are not substitution-shaped. The next module develops integration by parts for them.
