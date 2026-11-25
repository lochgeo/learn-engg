## When a parabola never meets the axis

The graph of $y=x^2-4x+5$ has its vertex above the $x$-axis, so the equation $x^2-4x+5=0$ has no real solution. A real-only answer would be "no roots". Complex numbers give a much more useful answer: the equation has exactly two roots, $2+i$ and $2-i$. This module connects the quadratic equations you already know to the new number system, and shows that the discriminant predicts which kind of roots appear.

## 1. Deriving the quadratic formula

Take the general quadratic

$$ax^2+bx+c=0,\qquad a\ne0.$$

The condition $a\ne0$ matters: if $a=0$ the equation is linear and will not have two roots. Divide by $a$ and move the constant term:

$$x^2+\frac ba x=-\frac ca.$$

Complete the square by adding $\bigl(\frac{b}{2a}\bigr)^2$ to both sides:

$$\left(x+\frac{b}{2a}\right)^2=\frac{b^2}{4a^2}-\frac ca=\frac{b^2-4ac}{4a^2}.$$

Taking square roots introduces both signs, so

$$x+\frac{b}{2a}=\pm\frac{\sqrt{b^2-4ac}}{2a}\quad\Rightarrow\quad \boxed{x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}}.$$

The quantity under the root is the **discriminant** $D=b^2-4ac$. Every question about the nature of the roots is really a question about the sign of $D$.

## 2. The three cases

Assume from here that $a,b,c$ are real and $a\ne0$.

| Discriminant | Roots |
| --- | --- |
| $D>0$ | Two distinct real roots $\dfrac{-b\pm\sqrt D}{2a}$ |
| $D=0$ | Two equal real roots $x=-\dfrac{b}{2a}$ |
| $D<0$ | Two non-real roots $\dfrac{-b\pm i\sqrt{-D}}{2a}$, a conjugate pair |

When $a,b,c$ are rational, a positive $D$ that is a perfect square gives rational roots; a positive $D$ that is not a perfect square gives a pair of conjugate irrational surds $p\pm\sqrt q$. The key structural fact is that for real coefficients, non-real roots always arrive in **conjugate pairs**: if $p+iq$ is a root, so is $p-iq$.

## 3. Sum and product of roots

If the roots are $\alpha$ and $\beta$, then the quadratic factorises as $a(x-\alpha)(x-\beta)$. Expanding,

$$a(x-\alpha)(x-\beta)=ax^2-a(\alpha+\beta)x+a\alpha\beta.$$

Comparing with $ax^2+bx+c=0$ gives the two relations

$$\alpha+\beta=-\frac ba,\qquad \alpha\beta=\frac ca.$$

These are worth memorising because they let us find a quadratic from its roots, check computed roots, and build new equations whose roots are transformed versions of $\alpha$ and $\beta$.

## 4. Worked example: a negative discriminant

Solve $x^2-4x+5=0$ and check the roots.

Here $a=1$, $b=-4$, $c=5$, so

$$D=(-4)^2-4(1)(5)=16-20=-4<0.$$

Using $\sqrt{-4}=2i$,

$$x=\frac{4\pm2i}{2}=2\pm i.$$

**Check by sum and product.** $(2+i)+(2-i)=4=-b/a$, and $(2+i)(2-i)=2^2+1^2=5=c/a$. Both relations hold, so the roots are correct. Geometrically, the conjugate pair is a reflection of $2+i$ in the real axis.

## 5. Worked examples: choosing $k$ and rebuilding the equation

**Equal roots.** For $2x^2-4x+k=0$ to have equal roots we need $D=0$:

$$D=(-4)^2-4(2)(k)=16-8k=0\quad\Rightarrow\quad k=2.$$

The repeated root is then $-b/(2a)=4/4=1$, and indeed $2x^2-4x+2=2(x-1)^2$.

**Rebuilding from one complex root.** Suppose a quadratic with real coefficients has $2+i$ as a root. Its other root must be $2-i$. Then $\alpha+\beta=4$ and $\alpha\beta=5$, so with $a=1$ we get $b=-4$ and $c=5$:

$$x^2-4x+5=0,$$

the equation from the previous example.

<learning-block type="mistake" title="Negative discriminant does not mean no roots">

Saying "$D<0$, therefore the equation has no roots" is only correct if complex numbers are banned. Over $\mathbb C$ there are always two roots, and they form a conjugate pair. A second error is writing $\sqrt{-4}=2i$ and then listing only $2+i$ as the root: the $\pm$ in the formula gives both $2+i$ and $2-i$. Finally, the relations $\alpha+\beta=-b/a$ and $\alpha\beta=c/a$ require $a\ne0$; they are meaningless for a linear equation.

</learning-block>

## 6. A dependable routine

1. Confirm $a\ne0$ and identify $a,b,c$.
2. Compute $D=b^2-4ac$ and state which case applies.
3. Use the quadratic formula, writing $i\sqrt{-D}$ when $D<0$.
4. Verify with $\alpha+\beta=-b/a$ and $\alpha\beta=c/a$.
5. With real coefficients, check that non-real roots are conjugates of each other.

## Try it yourself

**1.** Describe the roots of $2x^2-3x+4=0$ without checking every value.

<details><summary>Show the reasoning</summary>

$D=(-3)^2-4(2)(4)=9-32=-23<0$, so there are two non-real conjugate roots $x=\dfrac{3\pm i\sqrt{23}}{4}$.

</details>

**2.** If $\alpha,\beta$ are the roots of $3x^2+5x-7=0$, find $\alpha+\beta$ and $\alpha\beta$.

<details><summary>Show the reasoning</summary>

$\alpha+\beta=-\dfrac ba=-\dfrac53$ and $\alpha\beta=\dfrac ca=-\dfrac73$. No individual root needs to be found.

</details>

**3.** Solve $x^2+2x+2=0$.

<details><summary>Show the reasoning</summary>

$D=4-8=-4$, so $x=\dfrac{-2\pm2i}{2}=-1\pm i$. Check: the sum is $-2=-b/a$ and the product is $(-1)^2+1^2=2=c/a$.

</details>

## Remember

- The quadratic formula comes from completing the square; $D=b^2-4ac$ decides the nature of the roots.
- $D>0$: two real roots; $D=0$: equal roots; $D<0$: a conjugate complex pair.
- With real coefficients, complex roots occur in conjugate pairs $p\pm iq$.
- $\alpha+\beta=-b/a$ and $\alpha\beta=c/a$ hold because $ax^2+bx+c=a(x-\alpha)(x-\beta)$.
- $a\ne0$ is essential; otherwise the equation is not quadratic.

Conjugate roots are only one of the places complex numbers pay off. The final concept module uses roots of unity, de Moivre's theorem and powers of $i$ to simplify expressions that look unrelated at first sight.
