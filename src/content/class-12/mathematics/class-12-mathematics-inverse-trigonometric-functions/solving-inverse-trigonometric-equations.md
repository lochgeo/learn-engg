## Solve first, verify second

An inverse trigonometric equation looks harder than it is until you notice that the inverse sign is just a request for an angle. Apply the corresponding trigonometric function (or an identity from the previous module), and the problem becomes algebra. The danger is that algebra happily produces roots the original equation never allowed. In this topic, finding a root is half the job; accepting only the admissible ones is the other half.

## 1. The two rules

1. **Convert.** Use the principal-branch definitions, complementary identities or the tangent addition formula to turn the equation into an algebraic one.
2. **Police the range.** Every inverse function returns an angle in a fixed interval. A candidate is a solution only if it satisfies the original equation, lies in the required domain and respects any condition (such as $xy<1$) used in the conversion.

## 2. Type 1 — read the range before solving

For an equation of the form $\sin^{-1}x=c$, a solution exists only if $c\in[-\pi/2,\pi/2]$. Thus $\sin^{-1}x=\pi/6$ gives $x=\sin(\pi/6)=1/2$, but $\sin^{-1}x=2\pi/3$ has **no solution** because $2\pi/3$ is outside the branch. Similarly $\cos^{-1}x=-\pi/3$ has no solution, since the range of $\cos^{-1}$ is $[0,\pi]$, while $\cos^{-1}x=3\pi/4$ gives $x=\cos(3\pi/4)=-1/\sqrt2$.

This check takes seconds and prevents an entire class of wrong answers. Always write the target angle's branch beside the equation before doing anything else.

## 3. Type 2 — complementary pairs and equal angles

Because $\sin^{-1}x+\cos^{-1}x=\pi/2$ for every $x\in[-1,1]$, the equation $\sin^{-1}x+\cos^{-1}x=\pi/2$ is an identity: **every** $x$ in $[-1,1]$ is a solution. If instead $\sin^{-1}x=\cos^{-1}x$, replace the right side using the same identity:

$$
2\sin^{-1}x=\frac{\pi}{2}\ \Longrightarrow\ \sin^{-1}x=\frac{\pi}{4}\ \Longrightarrow\ x=\sin\frac{\pi}{4}=\frac{1}{\sqrt2}.
$$

The angle $\pi/4$ lies in both principal branches, so the root is valid. Likewise $\tan^{-1}x+\cot^{-1}x=\pi/2$ is an identity for all real $x$.

## 4. Type 3 — tangent addition leading to a quadratic

When two inverse tangents appear, combine them with the addition formula and then enforce $xy<1$ before accepting roots.

### Worked example: $\tan^{-1}(2x)+\tan^{-1}(3x)=\pi/4$

Here the two arguments are $2x$ and $3x$, so $xy=6x^2$. If $6x^2>1$ with both arguments positive, the sum exceeds $\pi/2$; if both are negative, the sum is negative; if $6x^2=1$, the sum is $\pm\pi/2$. None of these can equal $\pi/4$. Therefore any solution must satisfy $6x^2<1$, and the direct formula applies:

$$
\frac{2x+3x}{1-6x^2}=\tan\frac{\pi}{4}=1.
$$

$$
5x=1-6x^2\quad\Longrightarrow\quad 6x^2+5x-1=0\quad\Longrightarrow\quad (6x-1)(x+1)=0.
$$

The algebraic roots are $x=1/6$ and $x=-1$. Check them:

- $x=-1$: $6x^2=6>1$, violating the condition; also $\tan^{-1}(-2)+\tan^{-1}(-3)<0$, so it cannot equal $\pi/4$. **Reject.**
- $x=1/6$: $6x^2=1/6<1$, and the sum becomes $\tan^{-1}(1/3)+\tan^{-1}(1/2)=\pi/4$, the result from the identities module. **Accept.**

**Sanity check:** $x=1/6\approx0.167$, so both arguments $2x=1/3$ and $3x=1/2$ are positive and below $1$; the two angles are about $0.322$ and $0.464$ radians, summing to about $0.785$, which is $\pi/4$.

## 5. Type 4 — substitution and the outer range test

Consider $\sin^{-1}\!\left(\dfrac{2x}{1+x^2}\right)=\dfrac{\pi}{3}$. Since $\pi/3$ lies in the branch of $\sin^{-1}$, the equation is equivalent to

$$
\frac{2x}{1+x^2}=\sin\frac{\pi}{3}=\frac{\sqrt3}{2}
\quad\Longrightarrow\quad \sqrt3\,x^2-4x+\sqrt3=0.
$$

$$
x=\frac{4\pm\sqrt{16-12}}{2\sqrt3}=\frac{4\pm2}{2\sqrt3},
$$

so $x=\sqrt3$ or $x=1/\sqrt3$. Both are genuine solutions: substituting either gives $2x/(1+x^2)=\sqrt3/2$, and $\sin^{-1}(\sqrt3/2)=\pi/3$. Notice the distinction from the previous example — the check is on the **outer** inverse function's range, not on whether an inner angle happened to be in a branch. Writing $x=\tan\theta$ and then demanding $2\theta\in[-\pi/2,\pi/2]$ would wrongly discard $x=\sqrt3$, even though the original equation accepts it.

## 6. Type 5 — inequalities

Use monotonicity. For $\sin^{-1}x>\cos^{-1}x$ on $[-1,1]$, substitute $\cos^{-1}x=\pi/2-\sin^{-1}x$:

$$
2\sin^{-1}x>\frac{\pi}{2}\ \Longrightarrow\ \sin^{-1}x>\frac{\pi}{4}\ \Longrightarrow\ x>\sin\frac{\pi}{4}=\frac{1}{\sqrt2}.
$$

Since $\sin^{-1}$ is increasing, the inequality direction is preserved. Including the domain cap gives the solution set $\left(1/\sqrt2,\,1\right]$.

<learning-block type="mistake" title="Extraneous roots from a missing condition">

In $\tan^{-1}(2x)+\tan^{-1}(3x)=\pi/4$ the quadratic gives $x=-1$, which fails on two counts: it violates $xy<1$, and it makes both angles negative. Never present the roots of the transformed equation as final answers without testing them in the original equation. The same caution applies when squaring: $\sin^{-1}x=c$ requires $c$ in $[-\pi/2,\pi/2]$, so $\sin^{-1}x=2\pi/3$ has no solution at all.

</learning-block>

## Try it yourself

**A.** Solve $\cos^{-1}x=3\pi/4$.

<details><summary>Show the reasoning</summary>

$3\pi/4\in[0,\pi]$, so $x=\cos(3\pi/4)=-1/\sqrt2$. Check: $\cos^{-1}(-1/\sqrt2)=3\pi/4$.

</details>

**B.** Solve $\sin^{-1}x=2\pi/3$.

<details><summary>Show the reasoning</summary>

No solution: the range of $\sin^{-1}$ is $[-\pi/2,\pi/2]$, and $2\pi/3>\pi/2$. Taking sine of both sides would give $x=\sqrt3/2$, which is outside $[-1,1]$ — a clear signal of the error.

</details>

**C.** Solve $\tan^{-1}x+\tan^{-1}(2x)=\pi/4$.

<details><summary>Show the reasoning</summary>

We need $2x^2<1$. Then $\dfrac{x+2x}{1-2x^2}=1$, so $2x^2+3x-1=0$ and $x=\dfrac{-3\pm\sqrt{17}}{4}$. The root $(-3-\sqrt{17})/4\approx-1.78$ violates $|x|<1/\sqrt2$; the root $(\sqrt{17}-3)/4\approx0.281$ satisfies it. Hence $x=(\sqrt{17}-3)/4$.

</details>

## Remember

- Check that the target angle lies in the principal branch before applying the forward trig function.
- $\sin^{-1}x+\cos^{-1}x=\pi/2$ turns an identity into infinitely many solutions and an equality into a single value.
- When combining two $\tan^{-1}$ terms, enforce $xy<1$ (or add/subtract $\pi$) before solving.
- Test every algebraic root in the original equation; extraneous roots are routine here.
- Monotonicity preserves or reverses inequality directions — state which before clearing the inverse.

The **practice and mastery check** next mixes all four modules and trains you to choose the right move from the wording of a question alone.
