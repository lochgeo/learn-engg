## A small toolkit for stubborn limits

Some limits appear again and again. Rather than repeat the same argument each time, we prove a handful once and keep them ready. They are not arbitrary facts to memorise: each has a short derivation, and each is the natural way out when direct substitution produces $\dfrac00$. The two most important — $\dfrac{\sin x}{x}$ and $\dfrac{x^n-a^n}{x-a}$ — are built from geometry and simple factorisation respectively.

## 1. The power difference limit

For a positive integer $n$,

$$
\lim_{x\to a}\frac{x^n-a^n}{x-a}=n\,a^{n-1}.
$$

**Why it works.** The difference of powers factorises:

$$
x^n-a^n=(x-a)\left(x^{n-1}+a x^{n-2}+\cdots+a^{n-2}x+a^{n-1}\right).
$$

The bracket contains exactly $n$ terms. For $x\ne a$ we cancel the factor $x-a$, then let $x\to a$. Every term in the bracket tends to $a^{n-1}$, so the sum tends to $n\,a^{n-1}$. The result also holds for real $n$ when $a>0$, but the factorisation proof above is the board-exam version. When $a=0$ it reads $\lim_{x\to0}x^{n-1}=0$, consistent for $n\ge2$.

## 2. The trigonometric limit

$$
\lim_{x\to0}\frac{\sin x}{x}=1,
$$

**provided $x$ is measured in radians.** For $0<x<\dfrac{\pi}{2}$ a comparison of areas in the unit circle gives

$$
\sin x < x < \tan x.
$$

Dividing by the positive $\sin x$ and rearranging yields

$$
\cos x < \frac{\sin x}{x} < 1.
$$

As $x\to0^+$, $\cos x\to1$, so the squeeze theorem traps $\dfrac{\sin x}{x}$ at $1$. Since $\dfrac{\sin(-x)}{-x}=\dfrac{\sin x}{x}$ (the function is even), the left-hand limit is also $1$.

Two immediate relatives follow:

$$
\lim_{x\to0}\frac{\tan x}{x}=\lim_{x\to0}\frac{\sin x}{x}\cdot\frac{1}{\cos x}=1,
\qquad
\lim_{x\to0}\frac{1-\cos x}{x}=0.
$$

For the second, write $1-\cos x=2\sin^2\dfrac{x}{2}$:

$$
\frac{1-\cos x}{x}=\frac{\sin(x/2)}{x/2}\cdot\sin\frac{x}{2}\to1\cdot0=0.
$$

Dividing by $x^2$ instead gives the more useful $\displaystyle\lim_{x\to0}\frac{1-\cos x}{x^2}=\dfrac12$.

## 3. The exponential limit

For $a>0$,

$$
\lim_{x\to0}\frac{a^x-1}{x}=\ln a.
$$

**Why it works.** Put $t=a^x-1$, so $a^x=1+t$ and $x=\log_a(1+t)=\dfrac{\ln(1+t)}{\ln a}$. As $x\to0$, $t\to0$, and

$$
\frac{a^x-1}{x}=\frac{t\,\ln a}{\ln(1+t)}=\ln a\cdot\frac{t}{\ln(1+t)}\to\ln a,
$$

because $\dfrac{\ln(1+t)}{t}\to1$. Setting $a=e$ gives the special case $\displaystyle\lim_{x\to0}\frac{e^x-1}{x}=1$.

A companion result, obtained by expanding $(1+x)^n$ with the binomial theorem for an integer $n$, is

$$
\lim_{x\to0}\frac{(1+x)^n-1}{x}=n.
$$

## 4. The number $e$ as a limit

$$
\lim_{x\to\infty}\left(1+\frac1x\right)^x=e,
\qquad\text{equivalently}\qquad
\lim_{x\to0}(1+x)^{1/x}=e.
$$

These are two views of the same statement after the substitution $x\mapsto 1/x$. The number $e\approx2.718$ is *defined* by this limit; the earlier identity $\lim_{x\to0}\frac{e^x-1}{x}=1$ is consistent with it.

## 5. Worked examples

**Example 1.** Find $\displaystyle\lim_{x\to0}\frac{\sin 3x}{\sin 5x}$.

Nothing can be cancelled directly. Scale each sine so it matches its own argument:

$$
\frac{\sin 3x}{\sin 5x}
=
\frac{3}{5}\cdot\frac{\dfrac{\sin 3x}{3x}}{\dfrac{\sin 5x}{5x}}.
$$

As $x\to0$, both $3x\to0$ and $5x\to0$, so the numerator ratio tends to $1$ and the denominator ratio tends to $1$. The limit is $\dfrac35$.

**Example 2.** Find $\displaystyle\lim_{x\to2}\frac{x^5-32}{x-2}$.

This is the power-difference form with $n=5$ and $a=2$, so the limit is $n\,a^{n-1}=5\cdot2^4=5\cdot16=80$.

**Sanity check.** At $x=2.01$, $\dfrac{2.01^5-32}{0.01}\approx\dfrac{0.808}{0.01}\approx80.8$, which is close to $80$ — the small difference is the expected effect of evaluating slightly away from $2$.

<learning-block type="mistake" title="Using a standard limit outside its conditions">

The classic slip is quoting $\dfrac{\sin x}{x}\to1$ when $x$ is in **degrees**; the geometric proof is radian-specific, and in degrees the limit is $\dfrac{\pi}{180}$. Another is using it at $x\to a\ne0$, where the answer is simply $\dfrac{\sin a}{a}$ by direct substitution. A third is applying $\dfrac{x^n-a^n}{x-a}\to n a^{n-1}$ to expressions like $\dfrac{x^5-32}{x-3}$, where the subtracting constants do not match; there is no common factor to cancel.

</learning-block>

## Try it yourself

**A.** Evaluate $\displaystyle\lim_{x\to0}\frac{\tan 2x}{x}$.

<details><summary>Show the reasoning</summary>

$\dfrac{\tan 2x}{x}=2\cdot\dfrac{\tan 2x}{2x}$, and $2x\to0$, so the limit is $2\cdot1=2$.

</details>

**B.** Evaluate $\displaystyle\lim_{x\to3}\frac{x^4-81}{x-3}$.

<details><summary>Show the reasoning</summary>

Here $n=4$ and $a=3$, so the limit is $4\cdot3^{3}=4\cdot27=108$.

</details>

**C.** Evaluate $\displaystyle\lim_{x\to0}\frac{1-\cos 4x}{x^2}$.

<details><summary>Show the reasoning</summary>

$1-\cos4x=2\sin^2 2x$, so $\dfrac{1-\cos4x}{x^2}=2\cdot4\left(\dfrac{\sin2x}{2x}\right)^2\to8$.

</details>

## Remember

- $\displaystyle\lim_{x\to0}\frac{\sin x}{x}=1$ only in radians; scale the argument to match the denominator.
- $\displaystyle\lim_{x\to a}\frac{x^n-a^n}{x-a}=n a^{n-1}$ comes from cancelling one factor of $x-a$.
- $\displaystyle\lim_{x\to0}\frac{a^x-1}{x}=\ln a$, with $\displaystyle\lim_{x\to0}\frac{e^x-1}{x}=1$.
- $\displaystyle\lim_{x\to0}\frac{1-\cos x}{x^2}=\dfrac12$ and $\displaystyle\lim_{x\to\infty}(1+1/x)^x=e$.
- These limits are the raw material for continuity and, next, for the derivative itself.
