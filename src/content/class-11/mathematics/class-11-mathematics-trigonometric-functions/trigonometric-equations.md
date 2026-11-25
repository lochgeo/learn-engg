## Why an equation has infinitely many answers

Solve $\sin x=\frac12$ and you might write $x=30^\circ$. But the unit circle has many points with height $\frac12$, and every full turn brings you back to them. A trigonometric equation therefore asks for a **family** of solutions, not a single number. The periodicity studied earlier is exactly what makes the general solution possible.

## 1. Principal and general solutions

A **principal solution** is one convenient solution, usually chosen in a standard interval: $\sin^{-1}a$ lies in $\left[-\frac\pi2,\frac\pi2\right]$, $\cos^{-1}a$ in $[0,\pi]$ and $\tan^{-1}a$ in $\left(-\frac\pi2,\frac\pi2\right)$. The notation here simply names that principal angle; its full theory comes later. A **general solution** lists every real $x$ satisfying the equation, using an integer parameter $n$.

If $\sin x=a$ and $\alpha$ is the principal angle with $\sin\alpha=a$, then $\sin x=\sin\alpha$. The two terminal points with height $a$ are $x=\alpha$ and $x=\pi-\alpha$ (modulo $2\pi$). Adding whole turns gives

$$
x=2n\pi+\alpha\quad\text{or}\quad x=2n\pi+\pi-\alpha,\qquad n\in\mathbb{Z}.
$$

These two families collapse into one compact formula:

$$
\boxed{\ \sin x=a\ \Longrightarrow\ x=n\pi+(-1)^n\alpha,\quad n\in\mathbb Z,\ \alpha=\sin^{-1}a\ }.
$$

To check the compression, put $n=2k$: you get $2k\pi+\alpha$; put $n=2k+1$: you get $(2k+1)\pi-\alpha$, which is the second family.

## 2. The cosine and tangent families

For $\cos x=a$, the two points with horizontal coordinate $a$ are symmetric about the $x$-axis, at angles $\alpha$ and $-\alpha$ modulo $2\pi$. Hence

$$
\boxed{\ \cos x=a\ \Longrightarrow\ x=2n\pi\pm\alpha,\quad n\in\mathbb Z,\ \alpha=\cos^{-1}a\ }.
$$

Tangent has period $\pi$, so repeating after $\pi$ already captures every solution:

$$
\boxed{\ \tan x=a\ \Longrightarrow\ x=n\pi+\alpha,\quad n\in\mathbb Z,\ \alpha=\tan^{-1}a\ }.
$$

Three special cases are worth stating directly:

$$
\sin x=0\Rightarrow x=n\pi,\qquad
\cos x=0\Rightarrow x=\frac{(2n+1)\pi}{2},\qquad
\tan x=0\Rightarrow x=n\pi,\qquad n\in\mathbb Z.
$$

If $|a|>1$, the equations $\sin x=a$ and $\cos x=a$ have **no real solution**, because both functions take values only in $[-1,1]$. Recognising this early saves a great deal of pointless algebra.

## 3. Equations for $\sin kx$, $\cos kx$ and $\tan kx$

When the argument is a multiple of $x$, first solve for the whole argument, then divide by $k$. If $\sin 2x=a$, then $2x=n\pi+(-1)^n\alpha$, so $x=\frac{n\pi}{2}+\frac{(-1)^n\alpha}{2}$. The same principle applies to $3x$, $\frac x2$, or any linear argument $kx+c$: isolate $kx+c$, write its general solution, then solve for $x$. Do not divide the final formula by $k$ twice.

## 4. Worked example: a restricted interval

Solve $2\sin x=1$ for $0\le x\le2\pi$, then give the general solution.

Divide by $2$: $\sin x=\frac12$, so $\alpha=\sin^{-1}\frac12=\frac\pi6$. The general solution is

$$
x=n\pi+(-1)^n\frac\pi6,\qquad n\in\mathbb Z.
$$

Now generate the values inside $[0,2\pi]$:

- $n=0$: $x=\frac\pi6$;
- $n=1$: $x=\pi-\frac\pi6=\frac{5\pi}{6}$;
- $n=2$: $x=2\pi+\frac\pi6>\;2\pi$, outside the interval;
- $n=-1$: $x=-\pi-\frac\pi6<0$, outside the interval.

So the solutions in the interval are $x=\frac\pi6$ and $x=\frac{5\pi}{6}$.

**Sanity check.** On the sine graph the horizontal line $y=\frac12$ cuts one descending branch in quadrant I and one ascending branch in quadrant II, exactly two points in a full period. The answer is consistent with the graph.

## 5. Worked example: reducing a quadratic

Solve $2\cos^2x-3\cos x+1=0$, giving the general solution.

Treat $t=\cos x$ as an unknown: $2t^2-3t+1=(2t-1)(t-1)=0$, so $\cos x=\frac12$ or $\cos x=1$.

For $\cos x=\frac12$ the principal angle is $\frac\pi3$, so $x=2n\pi\pm\frac\pi3$.

For $\cos x=1$ the principal angle is $0$, so $x=2n\pi$.

In $[0,2\pi)$ these give $0$, $\frac\pi3$ and $\frac{5\pi}{3}$ — three solutions, as a sketch of the cosine curve confirms (one tangent point at the maximum and two crossings of the level $\frac12$).

<learning-block type="mistake" title="Dividing away a factor and losing solutions">

Consider $\sin x\cos x=\sin x$. Moving everything to one side gives $\sin x(\cos x-1)=0$. If you divide both sides by $\sin x$, you keep only $\cos x=1$, i.e. $x=2n\pi$, and silently discard the entire family $\sin x=0$, i.e. $x=n\pi$. The correct solution is $x=n\pi$, which already contains the $x=2n\pi$ case. The rule is absolute: **factor, never divide by a variable expression** unless you have proved it is non-zero. A second common error is listing only the principal solution; if the question asks for a general solution, the $+2n\pi$ or $+n\pi$ family must be present.

</learning-block>

## 6. A dependable solving routine

1. Use identities to express the equation in a single trigonometric function of a single angle, if possible.
2. Bring all terms to one side and **factor**; do not cancel variable factors.
3. Solve each factor as $\sin(\text{argument})=a$, $\cos(\text{argument})=a$ or $\tan(\text{argument})=a$, writing the general family for each.
4. If an interval is specified, substitute integer values of $n$ and keep only those $x$ inside it.
5. Check a solution by substitution, and check the count against a rough sketch of the graph.

## Try it yourself

**1.** Find the general solution of $\tan x=\sqrt3$.

<details><summary>Show the reasoning</summary>

The principal angle is $\alpha=\tan^{-1}\sqrt3=\dfrac\pi3$. Hence $x=n\pi+\dfrac\pi3$, $n\in\mathbb Z$. The period of tangent is $\pi$, so adding $\pi$ rather than $2\pi$ is correct.

</details>

**2.** Solve $\sin 2x=\frac12$ for $0\le x\le2\pi$.

<details><summary>Show the reasoning</summary>

First $2x=n\pi+(-1)^n\dfrac\pi6$. Evaluating for $n=0,1,2,3$ gives $2x=\dfrac\pi6,\dfrac{5\pi}6,\dfrac{13\pi}6,\dfrac{17\pi}6$, so $x=\dfrac\pi{12},\dfrac{5\pi}{12},\dfrac{13\pi}{12},\dfrac{17\pi}{12}$. Four solutions in a full period, matching the two solutions for $\sin\theta=\frac12$ over one period of $\theta=2x$.

</details>

**3.** Solve $\sin x(2\cos x-1)=0$ for $0\le x<2\pi$.

<details><summary>Show the reasoning</summary>

Either $\sin x=0$, giving $x=0,\pi$, or $\cos x=\frac12$, giving $x=\dfrac\pi3,\dfrac{5\pi}3$. The four solutions are $0,\dfrac\pi3,\pi,\dfrac{5\pi}3$. No factor was cancelled, so none of the families is lost.

</details>

## Remember

- $\sin x=a\Rightarrow x=n\pi+(-1)^n\alpha$; $\cos x=a\Rightarrow x=2n\pi\pm\alpha$; $\tan x=a\Rightarrow x=n\pi+\alpha$.
- $\alpha$ is the principal angle; $|a|>1$ means no real solution for sine or cosine.
- For $\sin kx=a$, solve for $kx$ first, then divide the whole family by $k$.
- Factor equations; dividing by a variable factor discards valid solutions.
- On a restricted interval, generate values of $n$ systematically and confirm the count with a sketch.

You now have the whole chapter's toolkit. The practice module next shows how to choose the right tool quickly, and the timed set tests that choice under pressure.
