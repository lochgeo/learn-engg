## Turn products into sums and powers into multipliers

How would you differentiate $x^x$? The power rule needs a constant exponent; the exponential rule needs a constant base. Neither applies. Now consider a long expression such as $\frac{(x+1)^2\sqrt{x-1}}{(x+2)^3}$: the product, quotient and chain rules would produce a tangle of terms.

Logarithms dissolve both difficulties at once. They convert products into sums, quotients into differences and powers into multiplications. After differentiating the simpler logarithmic form, one multiplication recovers the original derivative. This technique is **logarithmic differentiation**.

## 1. The method and why it works

For $y=f(x)>0$, take natural logarithms and differentiate implicitly:

$$
\ln y=\ln f(x) \quad\Longrightarrow\quad \frac{1}{y}\frac{dy}{dx}=\frac{d}{dx}\bigl(\ln f(x)\bigr),
$$

so

$$
\frac{dy}{dx}=f(x)\cdot\frac{d}{dx}\bigl(\ln f(x)\bigr).
$$

The algebraic tools that make the right-hand side easy are

$$
\ln(ab)=\ln a+\ln b,\qquad \ln\!\left(\frac{a}{b}\right)=\ln a-\ln b,\qquad \ln(a^b)=b\ln a,
$$

valid for positive $a$ and $b$. If factors may be negative, use $\ln|f|$ and the general rule $\frac{d}{dx}\ln|f|=\frac{f'}{f}$ for $f\ne0$. In this module we work on intervals where every factor is positive, so the domain is explicit and uncomplicated.

The five-step recipe is: take $\ln$, expand using the three laws above, differentiate implicitly, multiply back by $y$, and replace $y$ by the original expression. Skipping the last step is the classic error — you will have found $\frac{y'}{y}$, not $y'$.

## 2. Deriving the derivative of $u^v$

Let $y=u(x)^{v(x)}$ with $u(x)>0$. Taking logarithms,

$$
\ln y=v\ln u.
$$

Differentiate both sides; the product rule acts on $v\ln u$:

$$
\frac{y'}{y}=v'\ln u+v\cdot\frac{u'}{u}.
$$

Multiplying by $y=u^v$ gives the general formula

$$
\frac{d}{dx}\bigl(u^v\bigr)=u^v\left(v'\ln u+v\,\frac{u'}{u}\right).
$$

Two sanity checks confirm it. If $v$ is a constant $c$, the $\ln u$ term vanishes and the formula becomes $u^c\cdot c\frac{u'}{u}=c\,u^{c-1}u'$, the ordinary power rule. If $u$ is a constant $a$, the second term vanishes and we recover $a^x\ln a$. A formula that contains both familiar cases as special cases is almost certainly correctly assembled.

## 3. Worked example: $y=x^x$

For $x>0$, take logarithms:

$$
\ln y=x\ln x.
$$

Differentiate implicitly, using the product rule on the right:

$$
\frac{y'}{y}=\ln x+x\cdot\frac1x=\ln x+1.
$$

Hence

$$
y'=x^x(\ln x+1).
$$

At $x=2$ this is $2^2(\ln2+1)=4(0.6931+1)\approx6.77$.

**Sanity check.** Near $x=1$, $\ln x+1\approx1$, so the slope is about $1$, matching the near-linear behaviour of $x^x$ there. Also note that $y'=0$ when $\ln x=-1$, i.e. at $x=1/e\approx0.368$: the curve has a minimum there, which is plausible because $x^x$ decreases on $(0,1/e)$ and increases afterwards.

## 4. Worked example: a quotient with a root

Differentiate $y=\dfrac{(x+1)^2\sqrt{x-1}}{(x+2)^3}$ at $x=2$, where $x>1$.

Take logarithms and expand fully:

$$
\ln y=2\ln(x+1)+\frac12\ln(x-1)-3\ln(x+2).
$$

Differentiate implicitly:

$$
\frac{y'}{y}=\frac{2}{x+1}+\frac{1}{2(x-1)}-\frac{3}{x+2}.
$$

At $x=2$:

$$
\frac{y'}{y}=\frac23+\frac12-\frac34=\frac{8+6-9}{12}=\frac5{12},
\qquad
y(2)=\frac{3^2\cdot\sqrt1}{4^3}=\frac9{64}.
$$

Therefore

$$
y'(2)=\frac9{64}\cdot\frac5{12}=\frac{45}{768}=\frac{15}{256}\approx0.0586.
$$

**Sanity check.** Each logarithm was taken of a positive quantity because $x=2>1$, so the expansion is legal. The derivative is small and positive, consistent with a function that is changing gently at $x=2$. If you stop at $\frac5{12}$, you are reporting $\frac{y'}{y}$, not $y'$ — multiply back.

<learning-block type="mistake" title="Logarithms do not distribute over addition">

It is false that $\ln(a+b)=\ln a+\ln b$. Only products, quotients and powers may be split. A student differentiating $y=x+1$ by writing $\ln y=\ln x+\ln1$ has already changed the function, because $\ln x\ne\ln(x+1)$. Apply the logarithm to the whole expression first, then use the three valid laws; and remember to multiply by $y$ at the end.

</learning-block>

## Try it yourself

**A.** Differentiate $y=x^{\sin x}$ for $x>0$.

<details><summary>Show the reasoning</summary>

$\ln y=\sin x\ln x$, so $\frac{y'}{y}=\cos x\ln x+\frac{\sin x}{x}$. Hence $y'=x^{\sin x}\left(\cos x\ln x+\frac{\sin x}{x}\right)$.

</details>

**B.** Differentiate $y=\dfrac{\sqrt{x}\,(x+1)^3}{(2x-1)^2}$ for $x>\tfrac12$.

<details><summary>Show the reasoning</summary>

$\ln y=\frac12\ln x+3\ln(x+1)-2\ln(2x-1)$, so

$$
\frac{y'}{y}=\frac{1}{2x}+\frac{3}{x+1}-\frac{4}{2x-1},
\qquad
y'=\frac{\sqrt{x}\,(x+1)^3}{(2x-1)^2}\left(\frac{1}{2x}+\frac{3}{x+1}-\frac{4}{2x-1}\right).
$$

The chain factor in the last term is $2$, giving $-\frac4{2x-1}$, not $-\frac2{2x-1}$.

</details>

**C.** Find the derivative of $y=(\ln x)^x$ at $x=e$.

<details><summary>Show the reasoning</summary>

For $x>1$, $\ln y=x\ln(\ln x)$, so $\frac{y'}{y}=\ln(\ln x)+x\cdot\frac{1}{\ln x}\cdot\frac1x=\ln(\ln x)+\frac1{\ln x}$. At $x=e$, $\ln x=1$ and $\ln1=0$, so $\frac{y'}{y}=1$ and $y'=(\ln e)^e\cdot1=1$.

</details>

## Remember

- Logarithmic differentiation turns products, quotients and variable powers into sums, differences and products that are easy to differentiate.
- The recipe is $\ln$, expand, differentiate, multiply by $y$, substitute back.
- $\frac{d}{dx}(u^v)=u^v\left(v'\ln u+v\frac{u'}{u}\right)$ contains both the power rule and $\frac{d}{dx}a^x$ as special cases.
- Check the domain: logarithms require positive arguments (or use $\ln|f|$ with $f\ne0$).
- Parametric curves give a different kind of derivative; the next module shows how to find first and second derivatives without eliminating the parameter.
