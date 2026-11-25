## JEE Main sprint: how to use this set

This is a **50-minute, no-notes** paper for after you have finished the chapter lessons. Spend about 15 minutes on Section A, 15 on Section B, 10 on Section C and 10 on Section D. Mark any question still open after 90 seconds and move on; a quick return later often solves it.

The goal is not only an answer. Before writing anything, name the tool: Cartesian algebra, modulus and argument, polar form, de Moivre, roots of unity, or the discriminant. Check every computed root with $\alpha+\beta$ and $\alpha\beta$, and every argument against its quadrant.

## Formula and conditions sheet

| Situation | Start with | Check before using it |
| --- | --- | --- |
| Add, subtract or multiply two numbers | $(a+ib)(c+id)=(ac-bd)+i(ad+bc)$ | $i^2=-1$; the real part has a minus sign |
| Divide by $a+ib$ | Multiply numerator and denominator by $a-ib$ | The denominator becomes $a^2+b^2>0$ |
| Powers of $i$ | Reduce the exponent modulo $4$ | $i^4=1$ |
| Modulus or distance | $|z|=\sqrt{a^2+b^2}$, $|z|^2=z\bar z$ | Modulus is non-negative; $|z_1-z_2|$ is distance |
| Argument of $z$ | $\tan\theta=b/a$, then use the quadrant | Principal argument lies in $(-\pi,\pi]$ |
| Product, quotient or integer power | Polar form and de Moivre | Add arguments for products, subtract for quotients |
| All $n$th roots of $w$ | $r^{1/n}\mathrm{cis}\bigl((\theta+2k\pi)/n\bigr)$ | Use $k=0,1,\dots,n-1$; do not omit the $2k\pi$ |
| Cube roots of unity | $\omega^3=1$, $1+\omega+\omega^2=0$ | Reduce every exponent modulo $3$ |
| Nature of roots of a quadratic | $D=b^2-4ac$ | $a\ne0$; real coefficients imply conjugate roots |
| Sum and product of roots | $\alpha+\beta=-b/a$, $\alpha\beta=c/a$ | Use these to verify computed roots |

<learning-block type="mistake" title="Two checks that cost no time">

If an answer gives a negative modulus, a principal argument outside $(-\pi,\pi]$, a quadratic with only one non-real root, or a cube root of $8$ that is just $2$, stop and revisit the setup. These are structural errors, not arithmetic slips.

</learning-block>

## Section A — 10 rapid MCQs

### 1. A high power of $i$

The value of $i^{37}$ is:

- A. $1$
- B. $-1$
- C. $i$
- D. $-i$

<details><summary>Answer</summary>

**C.** $37=4\times9+1$, so $i^{37}=i^{4\times9}\cdot i=1\cdot i=i$.

</details>

### 2. A small square

$(1+i)^2$ equals:

- A. $2$
- B. $2i$
- C. $1+2i$
- D. $0$

<details><summary>Answer</summary>

**B.** $(1+i)^2=1+2i+i^2=1+2i-1=2i$.

</details>

### 3. Addition

$(2+3i)+(1-2i)$ equals:

- A. $3+i$
- B. $3+5i$
- C. $1+i$
- D. $3-i$

<details><summary>Answer</summary>

**A.** Add real and imaginary parts separately: $(2+1)+i(3-2)=3+i$.

</details>

### 4. A number times its conjugate

If $z=3-4i$, then $z\bar z$ is:

- A. $5$
- B. $7$
- C. $25$
- D. $-7$

<details><summary>Answer</summary>

**C.** $z\bar z=a^2+b^2=3^2+(-4)^2=9+16=25$, a non-negative real number.

</details>

### 5. Modulus

The modulus of $3+4i$ is:

- A. $5$
- B. $7$
- C. $25$
- D. $\sqrt7$

<details><summary>Answer</summary>

**A.** $|3+4i|=\sqrt{3^2+4^2}=\sqrt{25}=5$. Option C is $|z|^2$, a common slip.

</details>

### 6. Principal argument

The principal argument of $-1+i$ is:

- A. $\dfrac\pi4$
- B. $-\dfrac\pi4$
- C. $\dfrac{3\pi}{4}$
- D. $\dfrac{5\pi}{4}$

<details><summary>Answer</summary>

**C.** The point $(-1,1)$ is in quadrant II with reference angle $\pi/4$, so $\mathrm{Arg}=\pi-\pi/4=3\pi/4$. Option D is a valid argument but is outside the principal interval $(-\pi,\pi]$.

</details>

### 7. Roots of a pure constant

The roots of $x^2+4=0$ are:

- A. $\pm2$
- B. $\pm2i$
- C. $\pm4i$
- D. $2i$ only

<details><summary>Answer</summary>

**B.** $x^2=-4$ gives $x=\pm\sqrt{-4}=\pm2i$. There are two roots, not one.

</details>

### 8. Reading off an equation

A quadratic with roots $\alpha,\beta$ satisfies $\alpha+\beta=4$ and $\alpha\beta=5$. With leading coefficient $1$, it is:

- A. $x^2+4x+5=0$
- B. $x^2-4x+5=0$
- C. $x^2-4x-5=0$
- D. $x^2+4x-5=0$

<details><summary>Answer</summary>

**B.** Since $x^2-(\alpha+\beta)x+\alpha\beta=0$, the equation is $x^2-4x+5=0$, whose roots are $2\pm i$.

</details>

### 9. Cube roots of unity

The sum of the three cube roots of unity is:

- A. $0$
- B. $1$
- C. $-1$
- D. $3$

<details><summary>Answer</summary>

**A.** The roots of $z^3-1=0$ are $1,\omega,\omega^2$, and the coefficient of $z^2$ is zero, so $1+\omega+\omega^2=0$.

</details>

### 10. Discriminant

The discriminant of $x^2-2x+1=0$ is:

- A. $4$
- B. $0$
- C. $-4$
- D. $1$

<details><summary>Answer</summary>

**B.** $D=(-2)^2-4(1)(1)=4-4=0$, so the roots are equal: $x=1$.

</details>

## Section B — 5 numerical-value questions

### 11. A finite sum

Evaluate $i+i^2+i^3+\dots+i^{1000}$.

<details><summary>Answer</summary>

There are $1000$ terms, which form $250$ complete blocks of $i+i^2+i^3+i^4=i-1-i+1=0$. The sum is $0$. A block count works because the sum is finite; an infinite series in powers of $i$ does not converge.

</details>

### 12. Real part of a square

For $z=3+4i$, find $\mathrm{Re}(z^2)$.

<details><summary>Answer</summary>

$z^2=(3+4i)^2=9+24i+16i^2=9+24i-16=-7+24i$. Hence $\mathrm{Re}(z^2)=-7$. Cross-check: $\mathrm{Re}(z^2)=a^2-b^2=9-16=-7$.

</details>

### 13. Squares of the roots

If the roots of $x^2-4x+5=0$ are $\alpha$ and $\beta$, find $\alpha^2+\beta^2$.

<details><summary>Answer</summary>

$\alpha+\beta=4$ and $\alpha\beta=5$, so $\alpha^2+\beta^2=(\alpha+\beta)^2-2\alpha\beta=16-10=6$. Directly, the roots are $2\pm i$ and $(2+i)^2+(2-i)^2=(3+4i)+(3-4i)=6$.

</details>

### 14. Modulus of a power

Find the modulus of $(1+i)^6$.

<details><summary>Answer</summary>

Use $|z^n|=|z|^n$: $|(1+i)^6|=(\sqrt2)^6=2^3=8$. Indeed $(1+i)^6=8\,\mathrm{cis}(3\pi/2)=-8i$, whose modulus is $8$.

</details>

### 15. A product involving $\omega$

Let $\omega$ be a non-real cube root of unity. Evaluate $(1+\omega)(1+\omega^2)$.

<details><summary>Answer</summary>

Expanding gives $1+\omega+\omega^2+\omega^3$. Since $1+\omega+\omega^2=0$ and $\omega^3=1$, the value is $0+1=1$.

</details>

## Section C — 3 assertion–reason questions

For each question choose: **A** — both statements true and the reason correctly explains the assertion; **B** — both true but the reason does not explain the assertion; **C** — assertion true but reason false; **D** — assertion false but reason true.

### 16. A number times its conjugate

**Assertion:** For every complex number $z$, the product $z\bar z$ is a non-negative real number.

**Reason:** If $z=a+ib$, then $z\bar z=a^2+b^2=|z|^2$.

<details><summary>Answer</summary>

**A.** Both statements are true, and the reason is exactly the proof: a sum of two squares of reals is real and non-negative, and it is zero only for $z=0$.

</details>

### 17. Conjugate roots

**Assertion:** If a quadratic with real coefficients has $3+2i$ as a root, then $3-2i$ is also a root.

**Reason:** Non-real roots of a polynomial with real coefficients occur in conjugate pairs.

<details><summary>Answer</summary>

**A.** Both are true, and the reason is the general principle behind the assertion. Using sum and product, the quadratic would be $x^2-6x+13=0$.

</details>

### 18. Which quadrant?

**Assertion:** The principal argument of $-1-i$ is $\dfrac{3\pi}{4}$.

**Reason:** For $z=-1-i$, the ratio $b/a=1$, so $\tan\theta=1$.

<details><summary>Answer</summary>

**D.** The reason is true, but the assertion is false. The point $(-1,-1)$ is in quadrant III, giving the angle $5\pi/4$, whose principal representative is $-\dfrac{3\pi}{4}$. The value $3\pi/4$ belongs to $-1+i$, not $-1-i$.

</details>

## Section D — matching and multi-statement questions

### 19. Match each expression to its value

Match Column I with Column II.

| Column I — expression | Column II — value |
| --- | --- |
| (i) $(1+i)^2$ | (p) $2$ |
| (ii) $i^4$ | (q) $2i$ |
| (iii) $(1+i)(1-i)$ | (r) $1$ |
| (iv) $(1-i)^2$ | (s) $-2i$ |

<details><summary>Answer</summary>

(i)–(q), (ii)–(r), (iii)–(p), (iv)–(s). We have $(1\pm i)^2=1\pm2i+i^2=\pm2i$, $i^4=1$ and $(1+i)(1-i)=1-i^2=2$.

</details>

### 20. Which statements are correct?

Choose the combination of correct statements.

1. $|z|=|\bar z|$ for every complex number $z$.
2. The argument of a non-zero complex number is unique.
3. If a real-coefficient quadratic has $i$ as a root, then $-i$ is also a root.
4. $(\cos\theta+i\sin\theta)^{-1}=\cos\theta-i\sin\theta$.

- A. (i), (iii) and (iv) only
- B. all four
- C. (i), (ii) and (iii) only
- D. (ii) and (iv) only

<details><summary>Answer</summary>

**A.** Statement (i) is true because $|a-ib|=\sqrt{a^2+b^2}=|a+ib|$. Statement (ii) is false: arguments differ by multiples of $2\pi$, so only the *principal* argument is unique. Statement (iii) is true by conjugate pairing. Statement (iv) is true because $\cos\theta+i\sin\theta$ has modulus $1$, so its reciprocal equals its conjugate.

</details>

## Review by error, not by score

| If you missed… | Revisit | Then retry |
| --- | --- | --- |
| 1, 3, 19 | Complex numbers and their algebra | Reduce powers of $i$ modulo $4$; use $(ac-bd)+i(ad+bc)$. |
| 2, 4, 12, 14 | Algebra, conjugates and modulus | Apply $i^2=-1$ and $|z|^2=z\bar z$ before simplifying. |
| 5, 6, 18, 20 | Argand plane, modulus and argument | Plot the point, fix the quadrant, then choose the principal argument. |
| 7, 8, 10, 13, 17 | Quadratic equations and roots | Compute $D$, then check roots with sum and product. |
| 9, 11, 15 | Polar form, roots and applications | Use $\omega^3=1$, $1+\omega+\omega^2=0$ and four-term blocks of $i$. |

<learning-block type="recap" title="Ready to move on?">

Aim for at least 16 correct out of 20, with a written method choice for every question. A question you answer correctly but cannot justify is a revision target, not a mastered topic.

</learning-block>
