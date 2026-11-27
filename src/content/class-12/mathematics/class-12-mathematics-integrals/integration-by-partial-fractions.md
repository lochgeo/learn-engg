## Turning one fraction into several simple ones

An integrand such as $\dfrac{3x+5}{(x+1)(x+2)}$ is not a product to be integrated by parts, nor a composite with a matching derivative. Its denominator *factors*, which is the clue: rewrite the single fraction as a sum of simpler fractions whose integrals are logarithms. This is the method of **partial fractions**.

## 1. Proper and improper rational functions

A rational function is $\dfrac{P(x)}{Q(x)}$ with polynomials $P$ and $Q$.

- It is **proper** when $\deg P<\deg Q$; only proper fractions are decomposed directly.
- It is **improper** when $\deg P\ge\deg Q$. Divide first:

$$
\frac{x^2}{x^2-1}=1+\frac{1}{x^2-1}.
$$

The polynomial part integrates immediately, and the remainder is proper. Skipping the division is a frequent and avoidable error.

## 2. Distinct linear factors: deriving the cover-up rule

Suppose the denominator has two different linear factors, and the fraction is proper:

$$
\frac{px+q}{(x-a)(x-b)}=\frac{A}{x-a}+\frac{B}{x-b},\qquad a\ne b.
$$

Multiply through by $(x-a)(x-b)$:

$$
px+q=A(x-b)+B(x-a).
$$

Putting $x=a$ kills the $B$ term and gives $pa+q=A(a-b)$, while $x=b$ gives $pb+q=B(b-a)$. Hence

$$
A=\frac{pa+q}{a-b},\qquad B=\frac{pb+q}{b-a}.
$$

These substitutions are the **cover-up rule**: to find the constant over $x-a$, cover that factor in the original denominator and evaluate what remains at $x=a$. The identity holds for all $x$ except the excluded points, which is enough for integration.

## 3. Repeated factors and irreducible quadratics

For a factor repeated $r$ times, every power must appear:

$$
\frac{P(x)}{(x-a)^r}=\frac{A_1}{x-a}+\frac{A_2}{(x-a)^2}+\cdots+\frac{A_r}{(x-a)^r}.
$$

For an irreducible quadratic factor $x^2+bx+c$ (discriminant $b^2-4c<0$), split the numerator into the derivative of the denominator plus a constant:

$$
\frac{px+q}{x^2+bx+c}=\frac{A(2x+b)}{x^2+bx+c}+\frac{B}{x^2+bx+c}.
$$

The first piece integrates to a logarithm and the second, after completing the square, to an inverse tangent. These are the two shapes met in the next module.

## 4. Worked example: two distinct linear factors

Evaluate $\displaystyle\int\frac{3x+5}{(x+1)(x+2)}\,dx$.

Write $\frac{3x+5}{(x+1)(x+2)}=\frac{A}{x+1}+\frac{B}{x+2}$, so $3x+5=A(x+2)+B(x+1)$.

- At $x=-1$: $2=A(1)$, hence $A=2$.
- At $x=-2$: $-1=B(-1)$, hence $B=1$.

Therefore

$$
\int\frac{3x+5}{(x+1)(x+2)}\,dx
=2\ln\lvert x+1\rvert+\ln\lvert x+2\rvert+C.
$$

**Sanity check.** At $x=0$ the original fraction is $5/2=2.5$, while the decomposition gives $2/1+1/2=2.5$. Differentiating the answer gives $2/(x+1)+1/(x+2)=\frac{2(x+2)+(x+1)}{(x+1)(x+2)}=\frac{3x+5}{(x+1)(x+2)}$.

## 5. Worked example: a repeated factor

Evaluate $\displaystyle\int\frac{x+1}{(x-1)^2}\,dx$.

Put $\frac{x+1}{(x-1)^2}=\frac{A}{x-1}+\frac{B}{(x-1)^2}$, so $x+1=A(x-1)+B$. Comparing coefficients gives $A=1$ and then $B=2$ (equivalently, set $x=1$ to get $B=2$). Since $\int (x-1)^{-2}dx=-(x-1)^{-1}$,

$$
\int\frac{x+1}{(x-1)^2}\,dx=\ln\lvert x-1\rvert-\frac{2}{x-1}+C.
$$

**Sanity check.** Differentiating gives $\frac1{x-1}+\frac2{(x-1)^2}=\frac{(x-1)+2}{(x-1)^2}=\frac{x+1}{(x-1)^2}$.

<learning-block type="mistake" title="Forgetting to divide an improper fraction">

Applying partial fractions directly to $\frac{x^2}{x^2-1}$ would leave no polynomial part. The correct decomposition is $1+\frac12\left(\frac{1}{x-1}-\frac{1}{x+1}\right)$, so the integral is $x+\frac12\ln\left\lvert\frac{x-1}{x+1}\right\rvert+C$. Dropping the $x$ gives an answer whose derivative is only $\frac{1}{x^2-1}$, not $\frac{x^2}{x^2-1}$. Compare degrees before writing any constants.

</learning-block>

## Try it yourself

**A.** Evaluate $\displaystyle\int\frac{5x-4}{(x-1)(x-2)}\,dx$.

<details><summary>Show the reasoning</summary>

Set $5x-4=A(x-2)+B(x-1)$. At $x=1$: $1=-A$, so $A=-1$. At $x=2$: $6=B$. Thus $\int\left(\frac{-1}{x-1}+\frac{6}{x-2}\right)dx=-\ln\lvert x-1\rvert+6\ln\lvert x-2\rvert+C$. At $x=0$ the decomposition gives $1-3=-2$, matching the original $(-4)/2=-2$.

</details>

**B.** Evaluate $\displaystyle\int\frac{dx}{x^2-9}$.

<details><summary>Show the reasoning</summary>

Since $\frac{1}{(x-3)(x+3)}=\frac16\left(\frac{1}{x-3}-\frac{1}{x+3}\right)$, the integral is $\frac16\ln\left\lvert\frac{x-3}{x+3}\right\rvert+C$. Differentiation gives $\frac16\cdot\frac{6}{x^2-9}=\frac{1}{x^2-9}$.

</details>

**C.** Evaluate $\displaystyle\int\frac{2x+1}{x^2+x+1}\,dx$.

<details><summary>Show the reasoning</summary>

Here no decomposition is needed: the numerator is exactly the derivative of the denominator. With $u=x^2+x+1$, $du=(2x+1)dx$, so the integral is $\ln(x^2+x+1)+C$. Always check for this shortcut before decomposing.

</details>

## Remember

- Compare degrees first; divide when the fraction is improper.
- Distinct linear factors use the cover-up rule: $\frac{px+q}{(x-a)(x-b)}=\frac{A}{x-a}+\frac{B}{x-b}$.
- A repeated factor contributes one term for each power, from $(x-a)^{-1}$ up to $(x-a)^{-r}$.
- An irreducible quadratic contributes a logarithmic piece and an inverse-tangent piece.
- Finish by recombining or differentiating: the result must reproduce the original integrand. The next module collects the resulting standard forms.
