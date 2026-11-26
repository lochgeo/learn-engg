## From an average rate to a rate at one instant

A car's average speed over a journey is distance divided by time. Its speed *at a particular moment* cannot be found that way — there is no interval left to divide. The same problem appears for any changing quantity: the average rate of change of $y=f(x)$ over an interval is easy, but the rate at a single value of $x$ needs a limit. The derivative is that limit, and geometrically it is the slope of the tangent line rather than of a secant.

## 1. Average and instantaneous rate of change

Over the interval from $a$ to $a+h$, with $h\ne0$, the **average rate of change** of $f$ is

$$
\frac{f(a+h)-f(a)}{h}.
$$

This is the slope of the line joining the two points $\big(a,f(a)\big)$ and $\big(a+h,f(a+h)\big)$ — a **secant**. Now let $h\to0$. The second point slides toward the first, and if the secant slopes settle on a limit, that limit is the **instantaneous rate of change** at $a$:

$$
f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}{h}.
$$

The symbol $f'(a)$ is read "f prime at $a$". An equivalent form, obtained by writing $x=a+h$, is

$$
f'(a)=\lim_{x\to a}\frac{f(x)-f(a)}{x-a}.
$$

When this limit exists as a finite number, $f$ is **differentiable at $a$**; otherwise it is not differentiable there.

## 2. The derivative function

If we let the point $a$ vary, the same construction defines a new function:

$$
f'(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}.
$$

This is the **derivative of $f$**. Other notations are $\dfrac{dy}{dx}$ when $y=f(x)$, and $\dfrac{d}{dx}f(x)$. Do not confuse the two objects: $f'(a)$ is a single number (a slope at one point), while $f'(x)$ is a function whose value at $a$ is $f'(a)$.

## 3. Derivative of $x^n$ from first principles

For a positive integer $n$, expand with the binomial theorem:

$$
(x+h)^n=x^n+n x^{n-1}h+\frac{n(n-1)}{2}x^{n-2}h^2+\cdots+h^n.
$$

Subtract $x^n$, divide by $h$, and only then let $h\to0$:

$$
\frac{(x+h)^n-x^n}{h}=n x^{n-1}+\frac{n(n-1)}{2}x^{n-2}h+\cdots+h^{n-1}\;\longrightarrow\;n x^{n-1}.
$$

Hence

$$
\frac{d}{dx}\left(x^n\right)=n x^{n-1}.
$$

The familiar cases $\dfrac{d}{dx}(x^2)=2x$ and $\dfrac{d}{dx}(x^3)=3x^2$ are contained in this formula.

## 4. Derivative of $\sin x$

Using $\sin A-\sin B=2\cos\dfrac{A+B}{2}\sin\dfrac{A-B}{2}$,

$$
\frac{\sin(x+h)-\sin x}{h}
=
\frac{2\cos\left(x+\frac h2\right)\sin\frac h2}{h}
=
\cos\left(x+\frac h2\right)\cdot\frac{\sin(h/2)}{h/2}.
$$

As $h\to0$, the first factor tends to $\cos x$ and the second to $1$ by the standard trigonometric limit. Therefore

$$
\frac{d}{dx}(\sin x)=\cos x.
$$

The angle is in radians here too, because the standard limit was proved in radians.

## 5. The tangent line

Because $f'(a)$ is the limiting slope of the secants, it is the slope of the **tangent** at $\big(a,f(a)\big)$. The tangent's equation follows from the point–slope form:

$$
y-f(a)=f'(a)(x-a).
$$

A horizontal tangent corresponds to $f'(a)=0$. This geometric reading will be used in the applications lesson.

## 6. Differentiability implies continuity

If $f'(a)$ exists, then for $h\ne0$,

$$
f(a+h)-f(a)=h\cdot\frac{f(a+h)-f(a)}{h}.
$$

Letting $h\to0$, the bracket tends to the finite number $f'(a)$ and the factor $h$ tends to $0$, so the product tends to $0$. Hence $\lim_{h\to0}f(a+h)=f(a)$, which is continuity at $a$.

The converse is **false**. The function $f(x)=|x|$ is continuous at $0$, but its left-hand derivative there is $-1$ while its right-hand derivative is $1$. A corner breaks differentiability without breaking continuity.

## 7. Worked examples

**Example 1 — first principles.** Find the derivative of $x^3$ at $x=2$ directly from the definition.

$$
\frac{(2+h)^3-2^3}{h}
=
\frac{8+12h+6h^2+h^3-8}{h}
=
12+6h+h^2.
$$

Letting $h\to0$ gives $f'(2)=12$. This agrees with the general formula $3x^2$ evaluated at $x=2$, which gives $3\cdot4=12$ — a useful cross-check.

**Example 2 — a rate of change.** A particle's position is $s(t)=t^2+3t$ metres. Find its velocity at $t=2$.

Velocity is the derivative of position with respect to time. Since $s(2)=4+6=10$,

$$
s(2+h)=(2+h)^2+3(2+h)=10+7h+h^2,
$$

so

$$
v(2)=\lim_{h\to0}\frac{s(2+h)-s(2)}{h}=\lim_{h\to0}\frac{7h+h^2}{h}=\lim_{h\to0}(7+h)=7\ \text{m/s}.
$$

<learning-block type="mistake" title="Substituting h = 0 too early">

In a first-principles calculation the quotient is $\dfrac00$ at $h=0$, so putting $h=0$ before simplifying is an immediate error: it turns $12+6h+h^2$ into an undefined fraction instead of the answer $12$. Expand, factor out $h$, cancel, and only then take the limit. A second common confusion is to write $f'(x)=f'(2)$; the first is a function, the second one of its values.

</learning-block>

## Try it yourself

**A.** Find $f'(x)$ for $f(x)=3x^2+1$ from first principles.

<details><summary>Show the reasoning</summary>

$\dfrac{3(x+h)^2+1-(3x^2+1)}{h}=\dfrac{6xh+3h^2}{h}=6x+3h\to6x$. The constant disappears, as expected.

</details>

**B.** Find $f'(x)$ for $f(x)=\dfrac1x$ from first principles.

<details><summary>Show the reasoning</summary>

$\dfrac{\frac1{x+h}-\frac1x}{h}=\dfrac{x-(x+h)}{h\,x(x+h)}=\dfrac{-1}{x(x+h)}\to-\dfrac1{x^2}$, valid for $x\ne0$.

</details>

**C.** Show that $f(x)=|x|$ is not differentiable at $0$.

<details><summary>Show the reasoning</summary>

For $h>0$, $\dfrac{|h|-0}{h}=1$; for $h<0$, $\dfrac{|h|-0}{h}=-1$. The two one-sided limits differ, so the derivative at $0$ does not exist, although the function is continuous there.

</details>

## Remember

- $f'(a)=\displaystyle\lim_{h\to0}\frac{f(a+h)-f(a)}{h}$ is the instantaneous rate of change at $a$.
- The derivative is the slope of the tangent; the tangent line is $y-f(a)=f'(a)(x-a)$.
- Differentiability implies continuity, but continuity does not imply differentiability.
- In first-principles work, cancel $h$ before letting $h\to0$.
- First principles get laborious quickly; the next lesson builds rules for the common cases.
