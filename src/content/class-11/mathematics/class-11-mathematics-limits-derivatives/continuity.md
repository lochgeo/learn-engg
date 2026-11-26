## A graph you can draw in one stroke

Some curves can be traced from left to right without lifting the pencil; others have a hole, a jump or a vertical asymptote. The mathematical name for the first kind is **continuous**. This is not a vague visual idea: it is exactly the statement that the limit of the function at a point equals the function's value there. Continuity turns the limit computations of the previous lesson into a test that a function passes or fails at each point.

## 1. Continuity at a point

A function $f$ is **continuous at $x=a$** when

$$
\lim_{x\to a}f(x)=f(a).
$$

Three separate requirements are hidden in this one equation:

1. $f(a)$ is defined;
2. $\displaystyle\lim_{x\to a}f(x)$ exists (the left- and right-hand limits agree);
3. that common limit equals $f(a)$.

If any one fails, $f$ is **discontinuous at $a$**. Notice how this uses both halves of the chapter so far: existence of the limit comes from the algebra and standard limits, while $f(a)$ comes from the formula (or the given value) at the point.

## 2. Continuity from one side

We say $f$ is **left-continuous** at $a$ if $\displaystyle\lim_{x\to a^-}f(x)=f(a)$ and **right-continuous** there if $\displaystyle\lim_{x\to a^+}f(x)=f(a)$. Continuity at $a$ means both hold at once. This distinction matters at the endpoint of a domain: a function defined on $[0,\infty)$ can only be right-continuous at $0$.

## 3. Which functions are continuous

The algebra of limits transfers into algebra of continuity. If $f$ and $g$ are continuous at $a$, then so are $f\pm g$, $fg$, and $\dfrac{f}{g}$ provided $g(a)\ne0$. If $g$ is continuous at $a$ and $f$ is continuous at $g(a)$, then the composition $f\circ g$ is continuous at $a$.

From these rules and direct substitution:

- every polynomial is continuous everywhere;
- a rational function is continuous wherever its denominator is non-zero;
- $\sin x$, $\cos x$ and $e^x$ are continuous for all real $x$;
- $\ln x$ is continuous for $x>0$;
- $|f|$ is continuous wherever $f$ is.

For a rational function with $q(a)=0$ and $p(a)=0$, continuity at $a$ is *not* automatic — the limit may exist only after cancellation, and the value $f(a)$ must be assigned to match it.

## 4. Removable and non-removable breaks

- A **removable discontinuity** occurs when $\lim_{x\to a}f(x)$ exists but either $f(a)$ is undefined or $f(a)\ne\lim_{x\to a}f(x)$. Redefining $f(a)$ to equal the limit repairs the graph; the hole is a single missing point. The function $f(x)=\dfrac{\sin x}{x}$ with $f(0)=0$ has a removable discontinuity at $0$, because the limit is $1$.
- A **jump discontinuity** occurs when the left- and right-hand limits exist but differ, as for $\dfrac{|x|}{x}$ at $0$. No redefinition at the single point can fix it.
- An **infinite discontinuity** occurs when $f$ grows without bound near $a$, as for $\dfrac1{x-2}$ at $2$.

## 5. Worked examples

**Example 1 — a piecewise function.** Let

$$
f(x)=
\begin{cases}
x^2, & x\le1,\\
2x-1, & x>1.
\end{cases}
$$

Is $f$ continuous at $x=1$?

The left-hand limit uses the first branch: $\displaystyle\lim_{x\to1^-}x^2=1$. The right-hand limit uses the second: $\displaystyle\lim_{x\to1^+}(2x-1)=2(1)-1=1$. The defined value comes from the branch containing $x=1$, so $f(1)=1^2=1$. All three numbers agree, so $f$ is continuous at $1$.

**Example 2 — finding an unknown.** Let

$$
g(x)=
\begin{cases}
kx+1, & x\le1,\\
3-x, & x>1.
\end{cases}
$$

Find $k$ so that $g$ is continuous at $1$.

The left-hand limit and the value at the point are $k(1)+1=k+1$; the right-hand limit is $3-1=2$. Continuity forces

$$
k+1=2\quad\Longrightarrow\quad k=1.
$$

**Check.** With $k=1$ the left branch gives $x+1$, which tends to $2$ at $x=1$, matching the right branch. The two pieces meet.

<learning-block type="mistake" title="Checking only the two one-sided limits">

A frequent error is to compute $\lim_{x\to a^-}f$ and $\lim_{x\to a^+}f$, find them equal, and declare continuity without comparing with $f(a)$. If $f(a)$ is missing or has a different value, the function has a removable discontinuity, not continuity. The reverse slip also occurs: a student sees that both branch formulas are continuous on their own sides and assumes the join is continuous — the join is the one place that must be tested explicitly.

</learning-block>

## Try it yourself

**A.** Let $f(x)=\dfrac{x^2-4}{x-2}$ for $x\ne2$ and $f(2)=4$. Is $f$ continuous at $2$?

<details><summary>Show the reasoning</summary>

For $x\ne2$, $\dfrac{x^2-4}{x-2}=x+2$, so the limit at $2$ is $4$. This equals the given value $f(2)=4$; hence $f$ is continuous at $2$. The original formula is undefined there, but continuity depends on the limit, not on the way the value was supplied.

</details>

**B.** Let $f(x)=\dfrac{\sin x}{x}$ for $x\ne0$ and $f(0)=0$. Classify the point $x=0$.

<details><summary>Show the reasoning</summary>

The limit exists and equals $1$, but $f(0)=0\ne1$. This is a removable discontinuity: redefining $f(0)=1$ would make the function continuous.

</details>

**C.** Find $k$ if $h(x)=kx^2$ for $x\le2$ and $h(x)=3x$ for $x>2$ is continuous at $2$.

<details><summary>Show the reasoning</summary>

Left-hand limit and value: $k\cdot2^2=4k$. Right-hand limit: $3\cdot2=6$. Continuity requires $4k=6$, so $k=\dfrac32$.

</details>

## Remember

- Continuity at $a$ means $\lim_{x\to a}f(x)=f(a)$: defined value, existing limit, equal numbers.
- Check the join of a piecewise function explicitly; continuity on each side says nothing about the join.
- A removable discontinuity can be repaired; a jump or infinite discontinuity cannot.
- Polynomials, $\sin$, $\cos$ and $e^x$ are continuous on their domains; $\ln x$ is continuous for $x>0$.
- Continuity is necessary but not sufficient for differentiability, which we define next.
