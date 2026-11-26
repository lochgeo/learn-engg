## Why first principles cannot be the whole method

Differentiating $x^2$ from the definition is instructive; differentiating $\big(x^2+1\big)^5\sin x$ that way is miserable. The limit definition guarantees what a derivative is, but a working method needs rules that build complicated derivatives from simple ones. This lesson assembles those rules — and derives the two that are not obvious, the product and quotient rules.

## 1. The basic derivatives

The first three were established from first principles in the previous lesson; the rest follow from them, the limit laws and the standard limits.

$$
\frac{d}{dx}(c)=0,\qquad \frac{d}{dx}(x)=1,\qquad \frac{d}{dx}\left(x^n\right)=n x^{n-1},
$$

$$
\frac{d}{dx}(\sin x)=\cos x,\qquad \frac{d}{dx}(\cos x)=-\sin x,\qquad \frac{d}{dx}(\tan x)=\sec^2 x,
$$

$$
\frac{d}{dx}\left(e^x\right)=e^x,\qquad \frac{d}{dx}(\ln x)=\frac1x\ (x>0),\qquad \frac{d}{dx}\left(a^x\right)=a^x\ln a.
$$

Two of these deserve a line of proof. Since $\cos x=\sin\left(x+\dfrac\pi2\right)$, the derivative of $\cos x$ is $\cos\left(x+\dfrac\pi2\right)=-\sin x$. For $\tan x$, the quotient rule (proved below) gives

$$
\frac{d}{dx}\left(\frac{\sin x}{\cos x}\right)
=
\frac{\cos x\cdot\cos x-\sin x(-\sin x)}{\cos^2 x}
=
\frac{\cos^2x+\sin^2x}{\cos^2x}
=
\sec^2 x.
$$

## 2. Sums, differences and constant multiples

Because limits add and subtract, differentiation does too. For differentiable $f,g$ and constant $c$,

$$
\frac{d}{dx}(f\pm g)=f'\pm g',
\qquad
\frac{d}{dx}(cf)=c\,f'.
$$

So a polynomial is differentiated term by term: $\dfrac{d}{dx}(3x^4-2x+5)=12x^3-2$.

## 3. The product rule

For differentiable $f$ and $g$,

$$
\frac{d}{dx}\big(fg\big)=f'g+fg'.
$$

**Derivation.** Start from the definition and add and subtract $f(x+h)g(x)$ in the numerator:

$$
\begin{aligned}
\frac{f(x+h)g(x+h)-f(x)g(x)}{h}
&=
\frac{f(x+h)g(x+h)-f(x+h)g(x)+f(x+h)g(x)-f(x)g(x)}{h}\\
&=
f(x+h)\,\frac{g(x+h)-g(x)}{h}
+
g(x)\,\frac{f(x+h)-f(x)}{h}.
\end{aligned}
$$

Differentiability makes $f$ continuous, so $f(x+h)\to f(x)$; the two difference quotients tend to $g'(x)$ and $f'(x)$. The limit is therefore $f(x)g'(x)+g(x)f'(x)$.

## 4. The quotient rule

Where $g(x)\ne0$,

$$
\frac{d}{dx}\left(\frac fg\right)=\frac{f'g-fg'}{g^2}.
$$

**Derivation.** Combine the fractions first:

$$
\frac{\frac{f(x+h)}{g(x+h)}-\frac{f(x)}{g(x)}}{h}
=
\frac{f(x+h)g(x)-f(x)g(x+h)}{h\,g(x+h)g(x)}.
$$

Adding and subtracting $f(x)g(x)$ in the numerator gives

$$
\frac{g(x)\big[f(x+h)-f(x)\big]-f(x)\big[g(x+h)-g(x)\big]}{h\,g(x+h)g(x)}
\;\longrightarrow\;
\frac{g f'-f g'}{g^2}.
$$

The order in the numerator matters: it is $f'g-fg'$, not $fg'-f'g$.

## 5. The chain rule

If $y=f(u)$ and $u=g(x)$, with both functions differentiable, then

$$
\frac{dy}{dx}=\frac{dy}{du}\cdot\frac{du}{dx}=f'\big(g(x)\big)\,g'(x).
$$

The idea is that small changes multiply: $\dfrac{\Delta y}{\Delta x}=\dfrac{\Delta y}{\Delta u}\cdot\dfrac{\Delta u}{\Delta x}$, and the limit passes through the product. For example,

$$
\frac{d}{dx}\sin(x^2)=\cos(x^2)\cdot 2x,
$$

and the derivative of $\ln(3x+1)$ is $\dfrac{1}{3x+1}\cdot3$. The factor from the inside function must never be dropped.

## 6. Worked examples

**Example 1.** Differentiate $y=\dfrac{x^2+1}{3x-2}$.

Here $f=x^2+1$, $g=3x-2$, so $f'=2x$ and $g'=3$. The quotient rule gives

$$
y'=\frac{2x(3x-2)-3(x^2+1)}{(3x-2)^2}
=\frac{6x^2-4x-3x^2-3}{(3x-2)^2}
=\frac{3x^2-4x-3}{(3x-2)^2},
$$

valid for $x\ne\dfrac23$.

**Example 2.** Differentiate $y=e^x\sin(x^2+1)$.

Use the product rule, and the chain rule on the second factor:

$$
y'=e^x\sin(x^2+1)+e^x\cos(x^2+1)\cdot2x
=e^x\Big[\sin(x^2+1)+2x\cos(x^2+1)\Big].
$$

**Check.** At $x=0$ the original function is $\sin 1$, and the formula gives $y'(0)=\sin 1+0=\sin 1$; the exponential factor is $1$ and the chain-rule term vanishes there, as expected.

<learning-block type="mistake" title="Losing the inside derivative, or reversing the quotient">

Two errors dominate. First, writing $\dfrac{d}{dx}\sin(x^2)=\cos(x^2)$ and $\dfrac{d}{dx}(2x+1)^5=5(2x+1)^4$: the derivative of the inner function is missing. Second, reversing the quotient numerator to $fg'-f'g$, which changes the sign of the whole answer. A quick guard: the derivative of $\dfrac1x$ must come out negative, and the quotient rule in the stated order gives $\dfrac{0\cdot x-1\cdot1}{x^2}=-\dfrac1{x^2}$, confirming the order.

</learning-block>

## Try it yourself

**A.** Differentiate $x^3\sin x$.

<details><summary>Show the reasoning</summary>

Product rule: $3x^2\sin x+x^3\cos x$.

</details>

**B.** Differentiate $\ln(3x+1)$.

<details><summary>Show the reasoning</summary>

Chain rule: $\dfrac{1}{3x+1}\cdot3=\dfrac{3}{3x+1}$, for $x>-\dfrac13$.

</details>

**C.** Differentiate $(2x+1)^5$.

<details><summary>Show the reasoning</summary>

Chain rule: $5(2x+1)^4\cdot2=10(2x+1)^4$.

</details>

## Remember

- Memorise the basic derivatives, then combine them with sum, product, quotient and chain rules.
- $(fg)'=f'g+fg'$; $\left(\dfrac fg\right)'=\dfrac{f'g-fg'}{g^2}$ with $g\ne0$.
- The chain rule supplies a multiplicative factor from the inside function.
- Check a derivative at a convenient point when you can; a sign error often shows up immediately.
- With differentiation made routine, the next lesson puts the derivative to work on rates, tangents and turning points.
