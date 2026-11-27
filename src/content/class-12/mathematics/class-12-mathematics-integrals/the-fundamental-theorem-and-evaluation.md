## Why an antiderivative gives an area

So far integration has been an algebraic reversal of differentiation, and definite integrals have been evaluated as $F(b)-F(a)$. Nothing yet explains why that subtraction should measure accumulated area. The fundamental theorem of calculus supplies the link, and it does so in two parts.

## 1. First part: the area function is an antiderivative

Fix $a$ and define, for $x\ge a$,

$$
A(x)=\int_a^x f(t)\,dt.
$$

This is the signed area under $f$ from $a$ up to $x$. Consider a small increase $h>0$:

$$
A(x+h)-A(x)=\int_x^{x+h}f(t)\,dt.
$$

If $f$ is continuous at $x$, then on the tiny interval $[x,x+h]$ its values lie between $f(x)-\varepsilon$ and $f(x)+\varepsilon$. Therefore the strip area lies between $h\bigl(f(x)-\varepsilon\bigr)$ and $h\bigl(f(x)+\varepsilon\bigr)$. Dividing by $h$ and letting $h\to0$ forces

$$
\boxed{\frac{d}{dx}\int_a^x f(t)\,dt=f(x)}.
$$

The derivative of accumulated area is the integrand: the rate at which area grows is the height of the curve. This is the **first fundamental theorem**, and it requires continuity at $x$.

## 2. Second part: the evaluation theorem

Let $f$ be continuous on $[a,b]$ and let $F$ be *any* antiderivative of $f$ there. The area function $A$ satisfies $A'=f$ by the first part, so $(A-F)'=0$ and $A-F$ is a constant. At $x=a$, $A(a)=0$, so that constant is $-F(a)$. Hence $A(x)=F(x)-F(a)$, and setting $x=b$ gives

$$
\boxed{\int_a^b f(x)\,dx=F(b)-F(a)}.
$$

This is the **second fundamental theorem**. It is why the otherwise annoying constant $C$ is irrelevant: any member of the antiderivative family may be used, since the constant cancels.

## 3. Evaluating a definite integral

Evaluate $\displaystyle\int_0^1(3x^2+2x+1)\,dx$.

An antiderivative is $F(x)=x^3+x^2+x$, so

$$
\int_0^1(3x^2+2x+1)\,dx=\bigl[x^3+x^2+x\bigr]_0^1=(1+1+1)-0=3.
$$

**Sanity check by geometry.** The area under $3x^2$ from $0$ to $1$ is $\bigl[x^3\bigr]_0^1=1$, that under $2x$ is a triangle of area $1$, and that under $1$ is a rectangle of area $1$. The total is $3$.

## 4. Differentiating integrals with variable limits

Combine the first theorem with the chain rule. If $u(x)$ and $v(x)$ are differentiable and $H'=f$, then

$$
\int_{u(x)}^{v(x)}f(t)\,dt=H(v(x))-H(u(x)),
$$

so

$$
\frac{d}{dx}\int_{u(x)}^{v(x)}f(t)\,dt=f(v(x))\,v'(x)-f(u(x))\,u'(x).
$$

For example, if $g(x)=\int_0^{x^2}\cos t\,dt$, then $g'(x)=2x\cos(x^2)$. At $x=1$, $g'(1)=2\cos 1\approx1.08$; the upper limit grows twice as fast as $x$ at that point, which explains the factor $2$.

## 5. Where the theorem needs care

The hypothesis matters. The integrand must be continuous on the whole interval, or the interval must be split at its discontinuities.

- The formula for $|x|$ changes at $0$, so split the integral there:
  $\int_{-1}^{1}|x|\,dx=\int_{-1}^{0}(-x)\,dx+\int_{0}^{1}x\,dx=\tfrac12+\tfrac12=1$.
  Writing $\bigl[x^2/2\bigr]_{-1}^{1}=0$ would be wrong, because $x^2/2$ is not an antiderivative of $|x|$ for $x<0$.
- $\int_{-1}^{1}\frac{dx}{x^2}$ does not exist as a finite number: the integrand grows without bound near $0$.

<learning-block type="mistake" title="A plausible answer with the wrong sign">

Applying the evaluation theorem blindly across $x=0$ gives $\displaystyle\int_{-1}^{1}\frac{dx}{x^2}=\left[-\frac1x\right]_{-1}^{1}=-1-1=-2$. But $1/x^2>0$ everywhere it is defined, so a finite definite integral cannot be negative. The antiderivative $-1/x$ is not valid on an interval containing $0$; the integral diverges. When a positivity check fails, the hypothesis of the theorem has been violated somewhere — find it before trusting the arithmetic.

</learning-block>

## Try it yourself

**A.** Evaluate $\displaystyle\int_0^2(3x^2-1)\,dx$.

<details><summary>Show the reasoning</summary>

An antiderivative is $x^3-x$, so the value is $\bigl[x^3-x\bigr]_0^2=(8-2)-0=6$. Differentiating $x^3-x$ returns $3x^2-1$.

</details>

**B.** Find $\displaystyle\frac{d}{dx}\int_1^{x^3}\sqrt{t}\,dt$ for $x>0$.

<details><summary>Show the reasoning</summary>

Using $f(v)v'$ with $v=x^3$ and a constant lower limit, the derivative is $\sqrt{x^3}\cdot3x^2=3x^{7/2}$. Equivalently, $\int_1^{x^3}\sqrt t\,dt=\frac23(x^{9/2}-1)$, whose derivative is $3x^{7/2}$.

</details>

**C.** Evaluate $\displaystyle\int_0^2|x-1|\,dx$.

<details><summary>Show the reasoning</summary>

Split at $x=1$: on $[0,1]$, $|x-1|=1-x$ giving area $1/2$; on $[1,2]$, $|x-1|=x-1$ giving another $1/2$. The total is $1$. Using $x-1$ throughout would give zero, which contradicts the nonnegative integrand.

</details>

## Remember

- The first theorem says $\frac{d}{dx}\int_a^x f(t)\,dt=f(x)$: accumulated area differentiates back to the integrand.
- The second theorem says $\int_a^b f=F(b)-F(a)$ for any antiderivative $F$; the constant cancels.
- Variable limits bring chain-rule factors: $f(v)v'-f(u)u'$.
- Split at discontinuities and absolute-value corners; check positivity when an answer looks impossible.
- You now have the whole toolkit. The next module is a practice and mastery check that mixes all six methods.
