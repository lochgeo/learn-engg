## One set of tools, many disguises

The previous modules gave us four tools: the four-step cycle of $i$, the conjugate, the roots of unity, and de Moivre's theorem. Problems that look unrelated — a long sum of powers, a triple-angle identity, a factorisation, a rotation of a point — often collapse when the right one is recognised. This module is about choosing that tool quickly and then checking the result.

## 1. Roots of unity as an algebraic toolkit

The cube roots of unity are $1$, $\omega=-\frac12+\frac{\sqrt3}{2}i$ and $\omega^2=-\frac12-\frac{\sqrt3}{2}i$. Two facts do most of the work:

$$\omega^3=1,\qquad 1+\omega+\omega^2=0.$$

Because they are the three roots of $z^3-1=0$, that polynomial factorises as

$$z^3-1=(z-1)(z-\omega)(z-\omega^2),$$

and dividing by $z-1$ gives the useful identity

$$z^2+z+1=(z-\omega)(z-\omega^2).$$

More generally, the $n$th roots of unity sum to zero and are the roots of $z^n-1=0$. Since $\omega^{3m}=1$ for every integer $m$, any power of $\omega$ reduces to $1$, $\omega$ or $\omega^2$ according to its remainder modulo $3$. Hence

$$1+\omega^n+\omega^{2n}=\begin{cases}3,&3\mid n,\\ 0,&3\nmid n.\end{cases}$$

## 2. De Moivre and multiple-angle formulae

Write $c=\cos\theta$ and $s=\sin\theta$. De Moivre's theorem for $n=3$ gives

$$(\cos3\theta+i\sin3\theta)=(c+is)^3=c^3+3ic^2s+3c(is)^2+(is)^3.$$

Collect real and imaginary parts, using $i^2=-1$ and $i^3=-i$:

$$(c+is)^3=(c^3-3cs^2)+i(3c^2s-s^3).$$

Equating real and imaginary parts with $\cos3\theta+i\sin3\theta$ gives

$$\cos3\theta=c^3-3c(1-c^2)=4c^3-3c,$$

$$\sin3\theta=3(1-s^2)s-s^3=3s-4s^3.$$

This is the standard way to generate multiple-angle identities: expand $(c+is)^n$, then read off the real and imaginary parts. The same idea gives $\cos2\theta=c^2-s^2=2c^2-1$.

## 3. Finite sums of powers of $i$

The powers $1,i,-1,-i$ repeat every four and their sum is zero:

$$1+i+i^2+i^3=1+i-1-i=0.$$

Therefore any block of four consecutive powers of $i$ vanishes, and a finite sum reduces to its remainder modulo $4$. For $S_N=1+i+i^2+\dots+i^N$ there are $N+1$ terms, so write $N+1=4q+r$; the $q$ complete blocks contribute nothing and

$$S_N=\text{(sum of the first }r\text{ terms }i^0,i^1,\dots,i^{r-1}).$$

This works only for a **finite** sum: $|i|=1$, so an infinite geometric series in powers of $i$ does not converge.

## 4. Complex numbers as rotations

Multiplication by $i$ sends $a+ib$ to

$$i(a+ib)=ia+i^2b=-b+ia,$$

so the point $(a,b)$ moves to $(-b,a)$: a rotation by $90^\circ$ anticlockwise about the origin, with no change in modulus. More generally, multiplying by $\mathrm{cis}\,\phi$ rotates through $\phi$ and multiplies the distance from the origin by $1$. Combined with the modulus interpretation of $|z_1-z_2|$, this turns many geometry statements into short algebraic manipulations: $|z-z_0|=r$ is a circle, and a rotation about $z_0$ is $z\mapsto z_0+(z-z_0)\mathrm{cis}\,\phi$.

## 5. Worked examples

**Example 1 — a long alternating sum.** Evaluate $1+i+i^2+\dots+i^{2024}$.

There are $2025$ terms and $2025=4\times506+1$. The $506$ complete blocks of four each sum to zero, leaving only the first term $i^0=1$. Hence the sum is $1$.

**Example 2 — a triple angle with a check.** Derive $\cos3\theta$ and test it at $\theta=60^\circ$.

From Section 2, $\cos3\theta=4\cos^3\theta-3\cos\theta$. At $\theta=60^\circ$, $\cos\theta=\frac12$, so the right side is $4\cdot\frac18-3\cdot\frac12=\frac12-\frac32=-1$. The left side is $\cos180^\circ=-1$, confirming the identity.

**Example 3 — expressions in $\omega$.** Evaluate $(1+\omega)(1+\omega^2)$ and $(2+\omega)(2+\omega^2)$.

Expanding the first,

$$(1+\omega)(1+\omega^2)=1+\omega+\omega^2+\omega^3=1+(-1)+1=1.$$

For the second, use $\omega+\omega^2=-1$ and $\omega^3=1$:

$$(2+\omega)(2+\omega^2)=4+2(\omega+\omega^2)+\omega^3=4-2+1=3.$$

<learning-block type="mistake" title="A finite sum is not an infinite series">

It is tempting to sum $1+i+i^2+\dots$ using the infinite geometric formula $\frac{1}{1-i}$. That is wrong: an infinite geometric series converges only when the common ratio has modulus less than $1$, and $|i|=1$. For a finite sum, group the terms into blocks of four (or use $\frac{1-i^{N+1}}{1-i}$) and stop. A related slip with $\omega$ is treating $\omega^4$ as a new number; reduce every exponent modulo $3$ first.

</learning-block>

## 6. Choosing a tool

| The problem contains | Reach for |
| --- | --- |
| $1+\omega+\omega^2$ or $z^2+z+1$ | Roots of unity: $\omega^3=1$, $1+\omega+\omega^2=0$ |
| $\cos n\theta$ or $\sin n\theta$ in powers | De Moivre; equate real and imaginary parts |
| A long finite sum of powers of $i$ | Blocks of four, remainder modulo $4$ |
| A rotation of a point about the origin | Multiply by $\mathrm{cis}\,\phi$; by $i$ for $90^\circ$ |
| A circle or distance in the plane | $|z-z_0|=r$ |
| A quadratic with real coefficients and one complex root | The other root is its conjugate; use $\alpha+\beta$, $\alpha\beta$ |

## Try it yourself

**1.** Evaluate $i+i^2+\dots+i^{100}$.

<details><summary>Show the reasoning</summary>

Group as $25$ blocks of $i+i^2+i^3+i^4=i-1-i+1=0$. The whole sum is $0$.

</details>

**2.** Evaluate $1+\omega^4+\omega^8$.

<details><summary>Show the reasoning</summary>

Reduce exponents modulo $3$: $\omega^4=\omega$ and $\omega^8=\omega^2$. So the expression is $1+\omega+\omega^2=0$.

</details>

**3.** Rotate the point $2+3i$ through $90^\circ$ anticlockwise about the origin.

<details><summary>Show the reasoning</summary>

Multiply by $i$: $i(2+3i)=2i+3i^2=-3+2i$. The modulus is unchanged ($\sqrt{13}$), as a rotation requires.

</details>

## Remember

- $\omega^3=1$ and $1+\omega+\omega^2=0$; reduce powers of $\omega$ modulo $3$.
- $z^2+z+1=(z-\omega)(z-\omega^2)$ over the complex numbers.
- De Moivre plus equating real and imaginary parts generates $\cos n\theta$ and $\sin n\theta$.
- Four consecutive powers of $i$ sum to zero; use the remainder modulo $4$ for finite sums.
- Multiplying by $i$ rotates a point by $90^\circ$ anticlockwise; $|z-z_0|=r$ is a circle.

The practice module now brings all five concept modules together. Work through it with the answers hidden, and use the method-selection table only when you are genuinely stuck.
