## Functions that keep their own names

Some functions appear so often that they are given fixed symbols and fixed graph shapes. Once you recognise the shape, questions about domain, range and solutions become quick. We meet four here: the modulus function, the greatest integer function, the signum function, and the symmetry classes called even and odd functions. They are built from ordinary real inputs, so no new theory is needed — only careful attention to definitions at boundary points.

## 1. The modulus (absolute value) function

The **modulus** of $x$ is its distance from zero on the number line:

$$
|x|=\begin{cases}
x, & x\ge0,\\
-x, & x<0.
\end{cases}
$$

Its domain is $\mathbb{R}$ and its range is $[0,\infty)$. The graph is a V with its corner at the origin: the right branch is $y=x$, the left branch is $y=-x$. The function is even, since $|-x|=|x|$.

Three properties are used constantly:

$$
|xy|=|x|\,|y|,\qquad |x|^2=x^2,\qquad |x+y|\le|x|+|y|.
$$

The last is the **triangle inequality**. It is useful for bounding a sum without knowing the sign of either term.

## 2. The greatest integer (floor) function

The **greatest integer** function $[x]$ is the largest integer that is less than or equal to $x$. Equivalently,

$$
[x]=n\quad\Longleftrightarrow\quad n\le x<n+1,\qquad n\in\mathbb{Z}.
$$

Its domain is $\mathbb{R}$ and its range is $\mathbb{Z}$. The graph is a staircase: on each interval $[n,n+1)$ the value is the constant $n$, and it jumps at every integer. For instance $[2.7]=2$, $[2]=2$, but $[-2.3]=-3$, because $-2$ is *greater* than $-2.3$ and therefore cannot be the greatest integer below it.

The related **fractional part** is

$$
\{x\}=x-[x],\qquad 0\le\{x\}<1,
$$

so every real number satisfies $x=[x]+\{x\}$. For $x=-2.3$ we get $[-2.3]=-3$ and $\{-2.3\}=0.7$, and indeed $-3+0.7=-2.3$.

## 3. The signum function

The **signum** function records only the sign of a number:

$$
\operatorname{sgn}(x)=\begin{cases}
1, & x>0,\\
0, & x=0,\\
-1, & x<0.
\end{cases}
$$

Its domain is $\mathbb{R}$ and its range is the three-point set $\{-1,0,1\}$. It links back to modulus through the identity $|x|=x\operatorname{sgn}(x)$: multiplying a negative number by $-1$ returns its positive distance from zero.

## 4. Even and odd functions

A function is **even** when $f(-x)=f(x)$ for every $x$ in its domain; its graph is symmetric about the $y$-axis. It is **odd** when $f(-x)=-f(x)$; its graph has rotational symmetry about the origin. Examples:

| Function | Type | Check |
| --- | --- | --- |
| $x^2$, $\lvert x\rvert$ | even | $f(-x)=f(x)$ |
| $x^3$, $x$, $\operatorname{sgn}(x)$ | odd | $f(-x)=-f(x)$ |
| $x^2+x$ | neither | $f(-x)=x^2-x$ matches neither |
| $f(x)=0$ | both | $0=0$ and $0=-0$ |

The domain must be symmetric about zero for either label to make sense. An odd function defined at $0$ must satisfy $f(0)=0$, since $f(0)=-f(0)$ forces $f(0)=0$.

## 5. Worked examples

### A minimum obtained without calculus

Let $F(x)=|x-1|+|x+2|$. Use the triangle inequality with $a=x-1$ and $b=x+2$:

$$
|a|+|b|\ge|a-b|=|(x-1)-(x+2)|=3.
$$

Equality holds when $a$ and $b$ have opposite signs or one is zero, which happens for $-2\le x\le1$. The least value is therefore $3$, and since $F(x)$ grows without bound as $x\to\pm\infty$ and never dips below $3$, its range is $[3,\infty)$.

**Sanity check.** At $x=0$ we get $|{-1}|+|2|=3$; at $x=1$ we get $0+3=3$; at $x=4$ we get $3+6=9$. Nothing contradicts the minimum.

### A domain that depends on the floor

For $h(x)=\dfrac1{\sqrt{[x]}}$, the square root needs $[x]\ge0$ and the denominator needs $[x]\ne0$. Together these require $[x]\ge1$, which happens exactly when $x\ge1$. The domain is $[1,\infty)$; at $x=1$ the value is $1/\sqrt1=1$, so the endpoint is included.

### Classifying by substitution

For $f(x)=x^3+x$, $f(-x)=-x^3-x=-(x^3+x)=-f(x)$, so $f$ is odd. For $g(x)=x^2+1$, $g(-x)=x^2+1=g(x)$, so $g$ is even. For $p(x)=x^2+x$, $p(-x)=x^2-x$, which is neither $p(x)$ nor $-p(x)$, so $p$ is neither.

<learning-block type="mistake" title="Floor of a negative number">

The commonest floor error is treating $[-2.3]$ as $-2$. Rounding toward zero is not the definition: the floor is the greatest integer **less than or equal to** the input. On the number line $-3$ lies below $-2.3$ while $-2$ lies above it, so $[-2.3]=-3$. A quick check is $x=[x]+\{x\}$ with $0\le\{x\}<1$: $[-2.3]=-2$ would force $\{-2.3\}=-0.3$, which is impossible. A second recurring error is assuming $|x|=x$; the definition switches sign for $x<0$.

</learning-block>

## Try it yourself

**1.** Solve $|x-2|=3$.

<details><summary>Show the reasoning</summary>

Either $x-2=3$ or $x-2=-3$, so $x=5$ or $x=-1$. Check: $|5-2|=3$ and $|-1-2|=3$.

</details>

**2.** Evaluate $[1.9]$, $[-1.9]$, $\{1.9\}$ and $\{-1.9\}$.

<details><summary>Show the reasoning</summary>

$[1.9]=1$ and $\{1.9\}=0.9$. Since $-2\le-1.9<-1$, we get $[-1.9]=-2$ and $\{-1.9\}=-1.9-(-2)=0.1$. The check $-2+0.1=-1.9$ confirms the second pair.

</details>

**3.** Classify $f(x)=x^2+x$ as even, odd or neither.

<details><summary>Show the reasoning</summary>

$f(-x)=x^2-x$. This is not $x^2+x$ for general $x$, and it is not $-(x^2+x)=-x^2-x$. The function is neither even nor odd.

</details>

## Remember

- $|x|$ is distance from zero; it is never negative and is even.
- $[x]=n$ means $n\le x<n+1$; floor a negative number downward, not toward zero.
- $x=[x]+\{x\}$ with $0\le\{x\}<1$ is the fastest check on floor calculations.
- $\operatorname{sgn}(x)$ takes only $-1$, $0$ and $1$; $|x|=x\operatorname{sgn}(x)$.
- Even functions satisfy $f(-x)=f(x)$; odd ones satisfy $f(-x)=-f(x)$ and, if defined at zero, have $f(0)=0$.

You now have the full toolkit. The next module mixes these ideas in a timed study plan, then a JEE Main paper tests whether you can choose the right one under pressure.
