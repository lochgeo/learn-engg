## Why a number with no real counterpart?

The equation $x^2+1=0$ has no solution among the real numbers, because $x^2\ge 0$ for every real $x$. Yet the same equation appears whenever we ask every polynomial to have roots, and refusing it would leave whole families of equations unsolved. Extending the reals by a single new number $i$ with $i^2=-1$ resolves this: $x^2+1=0$ now has the two solutions $x=\pm i$.

The extension is not a trick. It gives every quadratic two roots, produces the roots of unity used throughout engineering, and turns a rotation into a multiplication. We begin with the arithmetic.

## 1. Defining a complex number

We define $i$ by $i^2=-1$; it is not a real number. A **complex number** is any expression

$$z=a+ib,\qquad a,b\in\mathbb R,$$

where $a=\mathrm{Re}(z)$ is the **real part** and $b=\mathrm{Im}(z)$ is the **imaginary part**. Both parts are ordinary real numbers; only the factor $i$ is new. If $b=0$ the number is simply the real number $a$; if $a=0$ and $b\ne0$ it is **purely imaginary**, for example $3i$.

Two complex numbers are equal exactly when their real parts and their imaginary parts match:

$$a+ib=c+id \iff a=c\ \text{and}\ b=d.$$

That rule is how we solve equations in $z$: rewrite everything in the form $a+ib$, then equate the two parts.

## 2. Adding and subtracting

Add and subtract component by component, just like two-dimensional vectors:

$$(a+ib)+(c+id)=(a+c)+i(b+d),$$

$$(a+ib)-(c+id)=(a-c)+i(b-d).$$

Addition is commutative and associative, $0=0+i0$ is the additive identity, and $-(a+ib)=-a-ib$ is the additive inverse. So far nothing differs from the algebra of ordered pairs.

## 3. Multiplying

Multiplication uses the distributive law together with $i^2=-1$:

$$(a+ib)(c+id)=ac+aid+ibc+i^2bd=(ac-bd)+i(ad+bc).$$

The term $i^2bd$ becomes $-bd$, so the real part is $ac-bd$ and the imaginary part is $ad+bc$. This is why complex multiplication is **not** component-wise.

### The cycle of powers of $i$

Since $i^2=-1$, the powers repeat every four:

$$i^1=i,\qquad i^2=-1,\qquad i^3=-i,\qquad i^4=1.$$

Hence, for any integer $n$, $i^{4n}=1$, $i^{4n+1}=i$, $i^{4n+2}=-1$ and $i^{4n+3}=-i$. To simplify $i^{37}$, divide $37$ by $4$: the remainder is $1$, so $i^{37}=i$.

## 4. The complex conjugate

For $z=a+ib$, the **conjugate** is $\bar z=a-ib$: the sign of the imaginary part flips. Geometrically this is a reflection in the real axis. Directly from the definition,

$$z+\bar z=2a,\qquad z-\bar z=2ib,\qquad \overline{\bar z}=z,$$

$$z\bar z=(a+ib)(a-ib)=a^2+b^2.$$

The product $z\bar z=a^2+b^2$ is a **non-negative real number**, and this is the fact that makes division possible. Conjugation also respects the operations:

$$\overline{z_1+z_2}=\bar z_1+\bar z_2,\qquad \overline{z_1z_2}=\bar z_1\,\bar z_2.$$

## 5. Dividing

To divide, multiply numerator and denominator by the conjugate of the denominator. The denominator then becomes real:

$$\frac{a+ib}{c+id}=\frac{(a+ib)(c-id)}{(c+id)(c-id)}=\frac{(ac+bd)+i(bc-ad)}{c^2+d^2},$$

which is valid because $c+id\ne0$ implies $c^2+d^2>0$. Note carefully that the real part is $(ac+bd)/(c^2+d^2)$ while the imaginary part is $(bc-ad)/(c^2+d^2)$; the two numerators are not the same expression.

## 6. A fully worked example

Let $z_1=2+3i$ and $z_2=1-2i$. Find $z_1z_2$ and $z_1/z_2$.

**Product.** With $a=2$, $b=3$, $c=1$, $d=-2$:

$$z_1z_2=(ac-bd)+i(ad+bc)=(2\cdot1-3\cdot(-2))+i(2\cdot(-2)+3\cdot1)=8-i.$$

**Quotient.** Using the division formula,

$$\frac{z_1}{z_2}=\frac{ac+bd}{c^2+d^2}+i\,\frac{bc-ad}{c^2+d^2}=\frac{2-6}{1+4}+i\,\frac{3+4}{1+4}=-\frac45+\frac75 i.$$

**Sanity check.** Multiply the quotient back by $z_2$:

$$\left(-\frac45+\frac75 i\right)(1-2i)=-\frac45+\frac85 i+\frac75 i-\frac{14}{5}i^2=\left(-\frac45+\frac{14}{5}\right)+3i=2+3i,$$

which is $z_1$. The division is therefore correct.

<learning-block type="mistake" title="A square-root rule that does not transfer">

A common error is writing $i^2=\sqrt{-1}\sqrt{-1}=\sqrt{(-1)(-1)}=\sqrt1=1$. The rule $\sqrt a\sqrt b=\sqrt{ab}$ is guaranteed only when $a$ and $b$ are non-negative reals, and it fails here. Keep $i^2=-1$ as the definition and do not manipulate $\sqrt{-1}$ as an ordinary square root. A second frequent slip is losing the minus sign in $ac-bd$ when multiplying.

</learning-block>

## 7. A short method

1. Put every number into the form $a+ib$.
2. Use $i^2=-1$ the moment it appears, and reduce powers of $i$ by the remainder modulo $4$.
3. To divide, multiply by the conjugate of the denominator.
4. To solve an equation in $z$, equate real and imaginary parts.

## Try it yourself

**1.** Simplify $i^{37}$.

<details><summary>Show the reasoning</summary>

$37=4\times9+1$, so $i^{37}=i^{4\times9}\cdot i=1\cdot i=i$.

</details>

**2.** Evaluate $(1+i)^2$.

<details><summary>Show the reasoning</summary>

$(1+i)^2=1+2i+i^2=1+2i-1=2i$.

</details>

**3.** If $z=3-4i$, find $z\bar z$ and $z+\bar z$.

<details><summary>Show the reasoning</summary>

Here $\bar z=3+4i$. Then $z\bar z=3^2+(-4)^2=9+16=25$ and $z+\bar z=2\times3=6$.

</details>

## Remember

- $i^2=-1$, so $i^3=-i$, $i^4=1$ and the powers cycle every four.
- $(a+ib)(c+id)=(ac-bd)+i(ad+bc)$; the real part picks up a minus sign.
- $\bar z=a-ib$ and $z\bar z=a^2+b^2$, always a non-negative real.
- Divide by multiplying top and bottom by the conjugate of the denominator.
- Equating real and imaginary parts turns one complex equation into two real ones.

The next module plots $a+ib$ as a point, so that the size and direction of a complex number become visible.
