## When two functions refuse to separate

Substitution needs one factor to be the derivative of another. The integrand $x e^{2x}$ has no such pairing: the derivative of $x$ is $1$, and the derivative of $e^{2x}$ is $2e^{2x}$, neither of which appears as the other factor. Yet the product rule for derivatives can be read backwards to handle exactly this situation.

## 1. Deriving the formula

For differentiable $u$ and $v$,

$$
\frac{d}{dx}(uv)=u\frac{dv}{dx}+v\frac{du}{dx}.
$$

Integrate both sides with respect to $x$ and rearrange:

$$
uv=\int u\frac{dv}{dx}\,dx+\int v\frac{du}{dx}\,dx
\quad\Longrightarrow\quad
\boxed{\int u\,dv=uv-\int v\,du}.
$$

This is **integration by parts**. It trades one integral for another, so it is useful only when $\int v\,du$ is simpler than the integral you started with. The constant of integration is added at the end.

## 2. Choosing which factor is $u$

The symbol $dv$ must be something you can integrate to find $v$; the factor called $u$ must become simpler when differentiated. The LIATE ordering ranks candidates for $u$ from best to worst: **L**ogarithm, **I**nverse trig, **A**lgebraic, **T**rigonometric, **E**xponential. Take the earliest type present as $u$ and put the remaining factor in $dv$.

| Integrand | $u$ | $dv$ |
| --- | --- | --- |
| $\ln x$ | $\ln x$ | $dx$ |
| $x e^{2x}$ | $x$ | $e^{2x}\,dx$ |
| $x^2\sin x$ | $x^2$ | $\sin x\,dx$ |
| $\tan^{-1}x$ | $\tan^{-1}x$ | $dx$ |

The table also shows the "invisible" factor $1$: $dv=dx$ is a perfectly legitimate choice. For $\int e^x\sin x\,dx$, either choice works and the integral returns to itself, which is solved algebraically rather than abandoned.

## 3. Worked example: a polynomial times an exponential

Evaluate $\displaystyle\int x e^{2x}\,dx$.

Differentiating $x$ simplifies it, and $e^{2x}$ is easy to integrate, so choose

$$
u=x,\quad dv=e^{2x}\,dx,\qquad du=dx,\quad v=\frac12e^{2x}.
$$

Then

$$
\int x e^{2x}\,dx=x\cdot\frac12e^{2x}-\int\frac12e^{2x}\,dx
=\frac{x}{2}e^{2x}-\frac14e^{2x}+C=\frac{e^{2x}}{4}(2x-1)+C.
$$

**Sanity check.** Differentiating the answer gives $\tfrac12e^{2x}+xe^{2x}-\tfrac12e^{2x}=xe^{2x}$, exactly the integrand. At $x=0$ the antiderivative equals $-\tfrac14$ while the integrand is $0$, consistent with a horizontal tangent there.

## 4. Worked example: an integral that returns to itself

Let $\displaystyle I=\int e^x\cos x\,dx$. Take $u=\cos x$, $dv=e^x\,dx$, so $du=-\sin x\,dx$ and $v=e^x$:

$$
I=e^x\cos x+\int e^x\sin x\,dx.
$$

Apply parts once more to $J=\int e^x\sin x\,dx$, with $u=\sin x$, $dv=e^x\,dx$:

$$
J=e^x\sin x-\int e^x\cos x\,dx=e^x\sin x-I.
$$

Substituting back, $I=e^x\cos x+e^x\sin x-I$, so

$$
2I=e^x(\sin x+\cos x)\qquad\Longrightarrow\qquad
I=\frac{e^x(\sin x+\cos x)}{2}+C.
$$

**Sanity check.** $\frac{d}{dx}\left[\tfrac12e^x(\sin x+\cos x)\right]=\tfrac12e^x(\sin x+\cos x)+\tfrac12e^x(\cos x-\sin x)=e^x\cos x$.

<learning-block type="mistake" title="Choosing the wrong factor to differentiate">

For $\int x e^{2x}dx$, taking $u=e^{2x}$ and $dv=x\,dx$ gives $v=x^2/2$ and a new integral $\int x^2e^{2x}dx$ — the polynomial degree has risen, so the problem got harder. The test is simple: after writing $uv-\int v\,du$, the new integral must be simpler. Also watch the minus sign in the formula; dropping it is the most common algebraic slip in parts questions.

</learning-block>

## Try it yourself

**A.** Evaluate $\displaystyle\int x\cos x\,dx$.

<details><summary>Show the reasoning</summary>

Let $u=x$, $dv=\cos x\,dx$, so $du=dx$ and $v=\sin x$. Then $\int x\cos x\,dx=x\sin x-\int\sin x\,dx=x\sin x+\cos x+C$. Differentiating: $\sin x+x\cos x-\sin x=x\cos x$.

</details>

**B.** Evaluate $\displaystyle\int\ln x\,dx$ for $x>0$.

<details><summary>Show the reasoning</summary>

Take $u=\ln x$ and $dv=dx$, giving $du=dx/x$ and $v=x$. Then $\int\ln x\,dx=x\ln x-\int x\cdot\frac{dx}{x}=x\ln x-x+C$. Differentiation gives $\ln x+1-1=\ln x$.

</details>

**C.** Evaluate $\displaystyle\int x^2e^x\,dx$.

<details><summary>Show the reasoning</summary>

Apply parts with $u=x^2$, $dv=e^x\,dx$: the result is $x^2e^x-2\int xe^x\,dx$. Applying parts again to $\int xe^x dx$ gives $xe^x-e^x$. Hence $\int x^2e^x dx=e^x(x^2-2x+2)+C$. Differentiating returns $e^x(x^2-2x+2)+e^x(2x-2)=x^2e^x$.

</details>

## Remember

- Integration by parts is the product rule run backwards: $\int u\,dv=uv-\int v\,du$.
- Choose $u$ so differentiation simplifies it, and choose $dv$ so you can integrate it; LIATE is a good first guess.
- If the new integral is worse, swap the choices rather than pressing on.
- For $e^x\sin x$ or $e^x\cos x$, parts returns to the starting integral; solve for it.
- Rational functions such as $\frac{3x+5}{(x+1)(x+2)}$ need a different decomposition, which is the subject of the next module.
