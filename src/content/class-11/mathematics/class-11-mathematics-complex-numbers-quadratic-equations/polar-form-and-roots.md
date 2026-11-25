## Multiplication has a hidden simplicity

Multiplying $(1+i)(1-i)$ in Cartesian form is quick because the answer is $2$. But computing $(1+i)^{20}$ that way would mean twenty expansions. The Argand plane suggests a better route: describe a complex number by its distance from the origin and its direction, and multiplication becomes "multiply the distances, add the directions". That observation leads to de Moivre's theorem and to a clean description of all roots.

## 1. The polar form

From the previous module, a number with modulus $r$ and argument $\theta$ satisfies $a=r\cos\theta$ and $b=r\sin\theta$. Substituting into $z=a+ib$ gives the **polar form**

$$z=r(\cos\theta+i\sin\theta),\qquad \text{written } r\,\mathrm{cis}\,\theta.$$

Here $r=|z|\ge0$ and $\theta$ is any argument of $z$. For example,

$$1+i=\sqrt2\left(\cos\frac\pi4+i\sin\frac\pi4\right)=\sqrt2\,\mathrm{cis}\,\frac\pi4,$$

while $-1+i=\sqrt2\,\mathrm{cis}\,\frac{3\pi}{4}$. Because arguments differ by multiples of $2\pi$, the polar form is not unique: $r\,\mathrm{cis}\,\theta$ and $r\,\mathrm{cis}(\theta+2k\pi)$ describe the same point.

## 2. Multiplication and division in polar form

Multiply two polar forms and use the addition formulae for sine and cosine:

$$
\begin{aligned}
(r_1\mathrm{cis}\,\theta_1)(r_2\mathrm{cis}\,\theta_2)
&=r_1r_2\bigl[(\cos\theta_1\cos\theta_2-\sin\theta_1\sin\theta_2) \\
&\qquad + i(\sin\theta_1\cos\theta_2+\cos\theta_1\sin\theta_2)\bigr] \\
&=r_1r_2\bigl[\cos(\theta_1+\theta_2)+i\sin(\theta_1+\theta_2)\bigr].
\end{aligned}
$$

So **moduli multiply and arguments add**. Division reverses both operations:

$$\frac{r_1\mathrm{cis}\,\theta_1}{r_2\mathrm{cis}\,\theta_2}=\frac{r_1}{r_2}\,\mathrm{cis}(\theta_1-\theta_2),\qquad r_2\ne0.$$

Geometrically, multiplying by $r\,\mathrm{cis}\,\theta$ scales a point by $r$ and rotates it through $\theta$ about the origin.

## 3. De Moivre's theorem

Repeating the multiplication rule $n$ times gives **de Moivre's theorem**: for any integer $n$,

$$(\cos\theta+i\sin\theta)^n=\cos n\theta+i\sin n\theta,$$

and, more generally,

$$\bigl[r(\cos\theta+i\sin\theta)\bigr]^n=r^n(\cos n\theta+i\sin n\theta).$$

For $n=0$ both sides are $1$; for negative $n$ use the reciprocal and $\cos(-x)=\cos x$, $\sin(-x)=-\sin x$. We use integer powers here; raising a complex number to a non-integer power is multi-valued and needs the fuller root treatment below, so the bare formula must not be applied blindly in that case.

## 4. Finding all $n$th roots

We want every $w$ with $w^n=z$. Write $z=r\,\mathrm{cis}\,\theta$ and $w=\rho\,\mathrm{cis}\,\phi$. Then

$$\rho^n=r\quad\Rightarrow\quad \rho=r^{1/n},$$

where $r^{1/n}$ is the positive real $n$th root. For the angle, equality of complex numbers allows a multiple of $2\pi$:

$$n\phi=\theta+2k\pi\quad\Rightarrow\quad \phi=\frac{\theta+2k\pi}{n}.$$

Taking $k=0,1,\dots,n-1$ gives $n$ distinct roots

$$w_k=r^{1/n}\,\mathrm{cis}\!\left(\frac{\theta+2k\pi}{n}\right),\qquad k=0,1,\dots,n-1.$$

Values $k\ge n$ repeat earlier roots because adding $2\pi$ to $\theta$ reproduces the same number. The $n$ roots are equally spaced around a circle of radius $r^{1/n}$, separated by angles $2\pi/n$.

### The cube roots of unity

Solving $z^3=1$ means $r=1$ and $\theta=0$, so the roots are $\mathrm{cis}(2k\pi/3)$:

$$1,\qquad \omega=-\frac12+\frac{\sqrt3}{2}i,\qquad \omega^2=-\frac12-\frac{\sqrt3}{2}i.$$

They satisfy $\omega^3=1$ and, since $1+\omega+\omega^2=(\omega^3-1)/(\omega-1)=0$,

$$1+\omega+\omega^2=0,\qquad \bar\omega=\omega^2.$$

## 5. Worked example: a power

Compute $(1+i)^6$. Since $1+i=\sqrt2\,\mathrm{cis}(\pi/4)$, de Moivre gives

$$(1+i)^6=(\sqrt2)^6\,\mathrm{cis}\!\left(6\cdot\frac\pi4\right)=8\,\mathrm{cis}\,\frac{3\pi}{2}=8(0-i)=-8i.$$

**Check.** $(1+i)^2=1+2i+i^2=2i$, so $(1+i)^6=(2i)^3=8i^3=-8i$. The two methods agree.

## 6. Worked example: all cube roots of a number

Find all solutions of $z^3=8$.

Write $8=8\,\mathrm{cis}\,0$, so $r^{1/3}=2$ and the roots are $2\,\mathrm{cis}(2k\pi/3)$:

$$2,\qquad 2\left(-\frac12+\frac{\sqrt3}{2}i\right)=-1+i\sqrt3,\qquad 2\left(-\frac12-\frac{\sqrt3}{2}i\right)=-1-i\sqrt3.$$

**Check.** The roots of $z^3-8=0$ have no $z^2$ term, so their sum must be $0$: $2+(-1+i\sqrt3)+(-1-i\sqrt3)=0$. Their product is $2(1+3)=8$, matching minus the constant term.

<learning-block type="mistake" title="One root is not all the roots">

Solving $z^3=8$ by taking a single cube root of $8$ gives only $2$ and misses the two complex roots. The argument of $8$ is $0+2k\pi$, not just $0$; the shift $2k\pi$ is exactly what generates the other roots. Always write $\theta+2k\pi$ before dividing by $n$, and keep $k=0,\dots,n-1$. A separate error is applying $(\cos\theta+i\sin\theta)^n=\cos n\theta+i\sin n\theta$ with a fractional $n$ and forgetting that several distinct roots exist.

</learning-block>

## 7. Choosing the representation

| Task | Best form |
| --- | --- |
| Add or subtract | Cartesian: $a+ib$ |
| Multiply or divide once | Either; Cartesian for small numbers |
| Integer powers | Polar form plus de Moivre |
| All $n$th roots | $r^{1/n}\,\mathrm{cis}\bigl((\theta+2k\pi)/n\bigr)$ |
| Distance from a fixed point | Modulus: $|z-z_0|$ |

## Try it yourself

**1.** Evaluate $(1-i)^4$.

<details><summary>Show the reasoning</summary>

$1-i=\sqrt2\,\mathrm{cis}(-\pi/4)$, so $(1-i)^4=4\,\mathrm{cis}(-\pi)=4(-1)=-4$. Equivalently $(1-i)^2=-2i$ and $(-2i)^2=-4$.

</details>

**2.** Find all fourth roots of $16$.

<details><summary>Show the reasoning</summary>

$16=16\,\mathrm{cis}\,0$ and $16^{1/4}=2$. With $\phi=2k\pi/4=k\pi/2$ for $k=0,1,2,3$, the roots are $2$, $2i$, $-2$ and $-2i$.

</details>

**3.** Show that $\omega^2=\bar\omega$ for $\omega=-\frac12+\frac{\sqrt3}{2}i$.

<details><summary>Show the reasoning</summary>

The conjugate is $-\frac12-\frac{\sqrt3}{2}i$. Squaring $\omega$ gives $\left(-\frac12\right)^2-\left(\frac{\sqrt3}{2}\right)^2+2\left(-\frac12\right)\left(\frac{\sqrt3}{2}\right)i=\frac14-\frac34-\frac{\sqrt3}{2}i=-\frac12-\frac{\sqrt3}{2}i$, which is $\bar\omega$.

</details>

## Remember

- Polar form: $z=r(\cos\theta+i\sin\theta)=r\,\mathrm{cis}\,\theta$.
- In polar form, moduli multiply and arguments add; division subtracts arguments.
- De Moivre: $(r\,\mathrm{cis}\,\theta)^n=r^n\mathrm{cis}(n\theta)$ for integer $n$.
- The $n$ roots of $r\,\mathrm{cis}\,\theta$ are $r^{1/n}\mathrm{cis}\bigl((\theta+2k\pi)/n\bigr)$, $k=0,\dots,n-1$.
- $1+\omega+\omega^2=0$ and $\omega^3=1$ for the cube roots of unity.

The same algebra explains why a quadratic with real coefficients and a negative discriminant has two conjugate roots. That connection is the subject of the next module.
