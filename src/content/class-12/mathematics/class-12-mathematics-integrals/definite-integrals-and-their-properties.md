## From a family of curves to one number

Every antiderivative so far came with a $+C$: a whole family of functions. A **definite integral** removes that ambiguity and returns a single number, typically an area, a total distance or an accumulated quantity. The limits $a$ and $b$ are part of the instruction: integrate from $a$ to $b$.

## 1. Definition and notation

If $F'=f$ on an interval containing $[a,b]$, then

$$
\int_a^b f(x)\,dx=\bigl[F(x)\bigr]_a^b=F(b)-F(a).
$$

The number $a$ is the lower limit, $b$ the upper limit, and $f$ the integrand. Continuity of $f$ on $[a,b]$ is sufficient for the integral to exist. The answer is a number, not a function, and it does not depend on the letter used for the variable:

$$
\int_a^b f(x)\,dx=\int_a^b f(t)\,dt.
$$

That is why $x$ is called a **dummy variable**. Substituting a different $F$ from the family changes both $F(b)$ and $F(a)$ by the same $C$, which cancels in the subtraction — this is precisely why the $+C$ disappears.

## 2. Four properties used constantly

For integrable $f,g$ and constant $k$:

| Property | Statement |
| --- | --- |
| Reversal | $\displaystyle\int_a^b f(x)\,dx=-\int_b^a f(x)\,dx$ |
| Zero width | $\displaystyle\int_a^a f(x)\,dx=0$ |
| Splitting | $\displaystyle\int_a^b f=\int_a^c f+\int_c^b f$ (any $c$) |
| Linearity | $\displaystyle\int_a^b (f\pm g)=\int_a^b f\pm\int_a^b g$, and $\int_a^b kf=k\int_a^b f$ |

Reversal follows from $F(b)-F(a)=-\bigl(F(a)-F(b)\bigr)$. Splitting follows from $\bigl(F(c)-F(a)\bigr)+\bigl(F(b)-F(c)\bigr)=F(b)-F(a)$, and remains valid even when $c$ lies outside $[a,b]$ — a fact worth remembering when splitting at a discontinuity or at zero.

## 3. The King property (reflection about the midpoint)

$$
\int_a^b f(x)\,dx=\int_a^b f(a+b-x)\,dx.
$$

To derive it, set $t=a+b-x$, so $dx=-dt$. When $x=a$, $t=b$; when $x=b$, $t=a$. Hence

$$
\int_a^b f(x)\,dx=\int_b^a f(a+b-t)(-dt)=\int_a^b f(a+b-t)\,dt.
$$

Geometrically, the substitution reflects the interval about its midpoint $\frac{a+b}{2}$, reading the same area from right to left. The special case $\int_0^a f(x)\,dx=\int_0^a f(a-x)\,dx$ is the one most often used.

## 4. Even and odd functions

Split at the origin and substitute $t=-x$ in the negative part:

$$
\int_{-a}^{a}f(x)\,dx=\int_{0}^{a}\bigl(f(t)+f(-t)\bigr)\,dt.
$$

Therefore

$$
\int_{-a}^{a}f(x)\,dx=
\begin{cases}
2\displaystyle\int_0^a f(x)\,dx, & f \text{ even } \bigl(f(-x)=f(x)\bigr),\\[6pt]
0, & f \text{ odd } \bigl(f(-x)=-f(x)\bigr).
\end{cases}
$$

The symmetry must match the interval: it has to be centred at zero. For a periodic function of period $T$, two further results hold: $\int_0^{nT}f=n\int_0^T f$ and $\int_a^{a+T}f=\int_0^T f$ for any $a$.

## 5. Worked example: the King property in action

Evaluate $\displaystyle I=\int_0^{\pi/2}\frac{\sin x}{\sin x+\cos x}\,dx$.

Here $a+b=\pi/2$, and $\sin(\pi/2-x)=\cos x$, $\cos(\pi/2-x)=\sin x$. Applying the King property,

$$
I=\int_0^{\pi/2}\frac{\cos x}{\sin x+\cos x}\,dx.
$$

Add the two expressions:

$$
2I=\int_0^{\pi/2}\frac{\sin x+\cos x}{\sin x+\cos x}\,dx=\int_0^{\pi/2}1\,dx=\frac{\pi}{2},
\qquad\Longrightarrow\qquad I=\frac{\pi}{4}.
$$

**Sanity check.** The integrand runs from $0$ at $x=0$ to $1$ at $x=\pi/2$ and equals $1/2$ at $x=\pi/4$. An average of $1/2$ over an interval of length $\pi/2$ gives $\pi/4$, as found.

## 6. Worked example: separating odd and even parts

Evaluate $\displaystyle\int_{-2}^{2}\bigl(x^3+x^2\bigr)\,dx$.

The function $x^3$ is odd and $x^2$ is even over a symmetric interval, so

$$
\int_{-2}^{2}x^3\,dx=0,\qquad
\int_{-2}^{2}x^2\,dx=2\int_0^2x^2\,dx=2\left[\frac{x^3}{3}\right]_0^2=\frac{16}{3}.
$$

Thus the integral is $16/3$.

**Sanity check by direct evaluation.** $\left[\frac{x^4}{4}+\frac{x^3}{3}\right]_{-2}^{2}=\left(4+\frac83\right)-\left(4-\frac83\right)=\frac{16}{3}$. The two methods agree.

<learning-block type="mistake" title="Symmetry needs a symmetric interval">

It is wrong to conclude $\int_0^2x^3\,dx=0$ just because $x^3$ is odd. The interval $[0,2]$ is not centred at zero, and in fact $\int_0^2x^3\,dx=[x^4/4]_0^2=4$. Likewise, applying the King property requires $f(a+b-x)$, not $f(b-x)$: with $a=0$ the two coincide, but with $a\ne0$ replacing $a+b-x$ by $b-x$ is a different transformation. Check the interval and the reflection formula before using a symmetry shortcut.

</learning-block>

## Try it yourself

**A.** Find $\displaystyle\int_0^{\pi}\frac{x\sin x}{1+\cos^2x}\,dx$.

<details><summary>Show the reasoning</summary>

By the King property, $I=\int_0^\pi\frac{(\pi-x)\sin x}{1+\cos^2x}dx$ since $\sin(\pi-x)=\sin x$ and $\cos^2(\pi-x)=\cos^2x$. Adding gives $2I=\pi\int_0^\pi\frac{\sin x}{1+\cos^2x}dx$. Put $u=\cos x$, $du=-\sin x\,dx$; the limits become $1$ to $-1$, so the integral is $\int_{-1}^{1}\frac{du}{1+u^2}=\left[\tan^{-1}u\right]_{-1}^{1}=\frac{\pi}{2}$. Hence $2I=\frac{\pi^2}{2}$ and $I=\frac{\pi^2}{4}$.

</details>

**B.** Evaluate $\displaystyle\int_{-1}^{1}\bigl(3x^4-2x^5+1\bigr)\,dx$.

<details><summary>Show the reasoning</summary>

The odd term $-2x^5$ integrates to zero. The even part gives $2\int_0^1(3x^4+1)\,dx=2\left[\frac{3x^5}{5}+x\right]_0^1=2\left(\frac35+1\right)=\frac{16}{5}$.

</details>

**C.** Show that $\displaystyle\int_0^{2\pi}\sin^2x\,dx=\pi$.

<details><summary>Show the reasoning</summary>

Use $\sin^2x=\frac{1-\cos 2x}{2}$. Then $\int_0^{2\pi}\sin^2x\,dx=\frac12\int_0^{2\pi}1\,dx-\frac12\int_0^{2\pi}\cos2x\,dx=\pi-0=\pi$, since $\cos 2x$ completes a whole period and $\left[\frac{\sin2x}{2}\right]_0^{2\pi}=0$. Equivalently, $\sin^2x$ has period $\pi$, so the integral is $2\int_0^\pi\sin^2x\,dx=2\cdot\frac{\pi}{2}=\pi$.

</details>

## Remember

- $\int_a^b f=F(b)-F(a)$; the constant $C$ cancels, and the dummy variable is irrelevant.
- Reversing limits changes the sign; splitting at any convenient point is always allowed.
- The King property replaces $x$ by $a+b-x$; even and odd shortcuts need an interval centred at zero.
- For period $T$, $\int_0^{nT}f=n\int_0^Tf$.
- The next module explains *why* $F(b)-F(a)$ measures an area: the fundamental theorem of calculus.
