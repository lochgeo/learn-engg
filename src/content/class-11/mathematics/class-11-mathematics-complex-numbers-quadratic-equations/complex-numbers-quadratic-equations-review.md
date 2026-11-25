## Your study plan for this chapter

This chapter is a set of connected tools, not a single formula to memorise. A focused pass takes about **2 hours 10 minutes**, plus a short break:

1. **Complex numbers and their algebra** — 20 min
2. **Argand plane, modulus and argument** — 20 min
3. **Polar form and roots** — 25 min
4. **Quadratic equations and the nature of roots** — 20 min
5. **Applications of complex numbers** — 20 min
6. **This mastery check** — 25 min

After each lesson, close the explanation and try its questions from a blank page. Mark a topic complete only when you can say why the chosen method applies. Take a five-minute break before the mastery check.

Once you can solve these tools one at a time, use the optional **JEE Main timed practice** module for a $50$-minute mixed paper. Its value lies in choosing the right tool under pressure.

## First choose the tool

| Clue in the question | Start with |
| --- | --- |
| Add, subtract or multiply two numbers in $a+ib$ form | Cartesian algebra; use $i^2=-1$ |
| Divide by $a+ib$ | Multiply by the conjugate of the denominator |
| Powers of $i$ | Reduce the exponent modulo $4$ |
| Need $z\bar z$, $|z|$ or a distance | $|z|^2=a^2+b^2$; $|z_1-z_2|$ is distance |
| Need a direction or quadrant | $\tan\theta=b/a$ plus the quadrant; $\mathrm{Arg}\,z\in(-\pi,\pi]$ |
| A product, quotient or integer power | Polar form; moduli multiply, arguments add |
| An integer power of a complex number | De Moivre: $(r\mathrm{cis}\,\theta)^n=r^n\mathrm{cis}(n\theta)$ |
| "Find all roots" of $z^n=w$ | $r^{1/n}\mathrm{cis}\bigl((\theta+2k\pi)/n\bigr)$, $k=0,\dots,n-1$ |
| An expression with $1+\omega+\omega^2$ or $z^2+z+1$ | $\omega^3=1$ and $1+\omega+\omega^2=0$ |
| A multiple-angle formula | Expand $(c+is)^n$ and equate real/imaginary parts |
| Nature of roots of $ax^2+bx+c=0$ | Discriminant $D=b^2-4ac$ |
| Sum, product or a new equation from roots | $\alpha+\beta=-b/a$, $\alpha\beta=c/a$ |
| Real coefficients and one complex root given | The other root is its conjugate |

## Mastery check

Try each question without looking at the answer. All coefficients are real unless stated otherwise.

### 1. Multiply

Simplify $(1+2i)(3-i)$.

<details><summary>Answer and reasoning</summary>

$(1+2i)(3-i)=3-i+6i-2i^2=3+5i+2=5+5i$. Using the formula: $ac-bd=1\cdot3-2\cdot(-1)=5$ and $ad+bc=1\cdot(-1)+2\cdot3=5$.

</details>

### 2. Divide

Simplify $\dfrac{2-3i}{1+2i}$.

<details><summary>Answer and reasoning</summary>

Multiply by $1-2i$: $\dfrac{(2-3i)(1-2i)}{1^2+2^2}=\dfrac{2-4i-3i+6i^2}{5}=\dfrac{-4-7i}{5}$. Check: $\left(-\frac45-\frac75i\right)(1+2i)=-\frac45-\frac{15}{5}i+\frac{14}{5}=2-3i$.

</details>

### 3. Modulus and argument

Find the modulus and principal argument of $z=-3+3i$.

<details><summary>Answer and reasoning</summary>

$|z|=\sqrt{9+9}=3\sqrt2$. The point $(-3,3)$ is in quadrant II with reference angle $\pi/4$, so $\mathrm{Arg}\,z=\pi-\pi/4=3\pi/4$. Check: $3\sqrt2\cos(3\pi/4)=-3$ and $3\sqrt2\sin(3\pi/4)=3$.

</details>

### 4. A power in polar form

Write $1-i$ in polar form and evaluate $(1-i)^8$.

<details><summary>Answer and reasoning</summary>

$1-i=\sqrt2\,\mathrm{cis}(-\pi/4)$. Then $(1-i)^8=(\sqrt2)^8\mathrm{cis}(-2\pi)=16(1)=16$. Cross-check: $(1-i)^2=-2i$, so $(1-i)^4=-4$ and $(1-i)^8=16$.

</details>

### 5. Roots of a negative real

Find all cube roots of $-8$.

<details><summary>Answer and reasoning</summary>

Write $-8=8\,\mathrm{cis}\,\pi$, so $r^{1/3}=2$ and $\phi=\dfrac{\pi+2k\pi}{3}$ for $k=0,1,2$. The roots are $2\,\mathrm{cis}(\pi/3)=1+i\sqrt3$, $2\,\mathrm{cis}\,\pi=-2$ and $2\,\mathrm{cis}(5\pi/3)=1-i\sqrt3$. Their sum is $0$, as required for $z^3+8=0$, and their product is $2(1+3)=8$.

</details>

### 6. A quadratic with $D<0$

Solve $x^2+6x+13=0$.

<details><summary>Answer and reasoning</summary>

$D=36-52=-16$, so $x=\dfrac{-6\pm4i}{2}=-3\pm2i$. The roots are conjugate, their sum is $-6=-b/a$ and their product is $9+4=13=c/a$.

</details>

### 7. Equal roots

Find $k$ such that $2x^2-4x+k=0$ has equal roots.

<details><summary>Answer and reasoning</summary>

$D=(-4)^2-4(2)(k)=16-8k$. Setting $D=0$ gives $k=2$, and the repeated root is $-b/(2a)=4/4=1$. Indeed $2x^2-4x+2=2(x-1)^2$.

</details>

### 8. Rebuild the equation

A quadratic with real coefficients has $2+i$ as one root. Write the equation with leading coefficient $1$.

<details><summary>Answer and reasoning</summary>

The other root is the conjugate $2-i$. Then $\alpha+\beta=4$ and $\alpha\beta=2^2+1^2=5$, so $b=-4$ and $c=5$: the equation is $x^2-4x+5=0$.

</details>

### 9. An expression in $\omega$

Let $\omega$ be a non-real cube root of unity. Evaluate $(1+\omega-\omega^2)(1-\omega+\omega^2)$.

<details><summary>Answer and reasoning</summary>

Put $A=\omega-\omega^2$; the product is $(1+A)(1-A)=1-A^2$. Now $A^2=\omega^2-2\omega^3+\omega^4=\omega^2-2+\omega=(\omega+\omega^2)-2=-3$, since $\omega+\omega^2=-1$ and $\omega^4=\omega$. Hence the value is $1-(-3)=4$.

</details>

### 10. A multiple-angle identity

Use de Moivre's theorem to find $\sin3\theta$ in terms of $\sin\theta$, then deduce the value of $\sin^3 30^\circ$.

<details><summary>Answer and reasoning</summary>

From $(c+is)^3$, the imaginary part is $3c^2s-s^3=3(1-s^2)s-s^3=3s-4s^3$, so $\sin3\theta=3\sin\theta-4\sin^3\theta$. With $\theta=30^\circ$: $1=3\cdot\frac12-4\sin^330^\circ$, giving $4\sin^330^\circ=\frac12$ and $\sin^330^\circ=\frac18$, consistent with $\sin30^\circ=\frac12$.

</details>

## Self-check

You are ready for the timed set when you can:

- multiply and divide complex numbers in Cartesian form without losing a sign;
- find $|z|$ and $\mathrm{Arg}\,z$, correcting the arctangent for the quadrant;
- move between Cartesian and polar form and apply de Moivre to integer powers;
- list all $n$ roots of $z^n=w$ using the $2k\pi$ argument shift;
- use $\omega^3=1$ and $1+\omega+\omega^2=0$ to simplify expressions;
- derive $\cos2\theta$, $\cos3\theta$ and $\sin3\theta$ by equating real and imaginary parts;
- classify the roots of a quadratic from its discriminant, including the conjugate-pair case;
- use $\alpha+\beta$ and $\alpha\beta$ to check roots or build a new equation;
- reject an impossible root or a non-principal argument before writing the final answer.

If any item still feels shaky, revisit that module and redo its questions with the answers hidden.
