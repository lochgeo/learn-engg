## Average speed and the speedometer

A car covers $120$ km in $2$ hours, so its average speed is $60$ km/h. Must the speedometer have read exactly $60$ km/h at some instant? If the trip was continuous and the speed always defined, yes: a speed that spent the whole journey below $60$ could not average $60$, and one that spent it entirely above $60$ could not either. Somewhere in between, the instantaneous rate matched the average.

That is the **mean value theorem**. It turns a statement about whole intervals into a statement about a single interior point, and it underlies everything from error estimates to the proof that a function with zero derivative is constant.

## 1. Rolle's theorem

If $f$ is continuous on the closed interval $[a,b]$, differentiable on the open interval $(a,b)$, and $f(a)=f(b)$, then there exists $c\in(a,b)$ with

$$
f'(c)=0.
$$

Geometrically, a curve that starts and ends at the same height and has no break or corner must have a horizontal tangent somewhere between.

Why is it true? A continuous function on a closed interval attains a maximum and a minimum. If both equal $f(a)$, the function is constant and any interior $c$ has derivative zero. Otherwise one extremum is attained at an interior point, and at an interior extremum of a differentiable function the derivative is zero. The hypotheses are essential: continuity gives the extremum, differentiability gives the vanishing derivative, and the open interval places $c$ strictly between $a$ and $b$.

## 2. Lagrange's mean value theorem

Drop the requirement $f(a)=f(b)$ and subtract a straight line to reduce to Rolle's case. If $f$ is continuous on $[a,b]$ and differentiable on $(a,b)$, define

$$
g(x)=f(x)-\frac{f(b)-f(a)}{b-a}(x-a).
$$

Then $g(a)=f(a)$ and $g(b)=f(b)-(f(b)-f(a))=f(a)$, so $g(a)=g(b)$. The function $g$ meets all of Rolle's conditions, so $g'(c)=0$ for some $c\in(a,b)$. Since

$$
g'(c)=f'(c)-\frac{f(b)-f(a)}{b-a},
$$

we obtain the mean value theorem:

$$
f'(c)=\frac{f(b)-f(a)}{b-a}\quad\text{for some }c\in(a,b).
$$

The right-hand side is the slope of the chord from $a$ to $b$; the theorem guarantees a parallel tangent somewhere inside. It says nothing about where $c$ is, and in general $c$ is not the midpoint.

## 3. Cauchy's mean value theorem

For two functions $f$ and $g$ continuous on $[a,b]$ and differentiable on $(a,b)$, with $g'(x)\ne0$ throughout $(a,b)$, there is a $c\in(a,b)$ such that

$$
\frac{f'(c)}{g'(c)}=\frac{f(b)-f(a)}{g(b)-g(a)}.
$$

To derive it, apply Rolle's theorem to

$$
h(x)=\bigl[f(b)-f(a)\bigr]g(x)-\bigl[g(b)-g(a)\bigr]f(x).
$$

A direct substitution gives $h(a)=h(b)=f(b)g(a)-g(b)f(a)$. Hence $h'(c)=0$, which rearranges to the stated ratio. The condition $g'\ne0$ also guarantees $g(b)\ne g(a)$: if the endpoints matched, Rolle applied to $g$ would force some $g'(c)=0$. Lagrange's theorem is the special case $g(x)=x$.

## 4. Worked example: verify the mean value theorem

Take $f(x)=x^2$ on $[1,3]$. The average rate of change is

$$
\frac{f(3)-f(1)}{3-1}=\frac{9-1}{2}=4.
$$

Since $f'(x)=2x$, the equation $f'(c)=4$ gives $c=2$, which does lie in $(1,3)$. The theorem is verified.

**Sanity check.** The derivative increases from $f'(1)=2$ to $f'(3)=6$, and the chord slope $4$ lies strictly between them. A value of $c$ outside the interval, or a chord slope outside the range of $f'$, would signal a mistake.

As a second illustration, let $f(x)=\sqrt{x}$ on $[1,4]$. The chord slope is $\frac{2-1}{3}=\frac13$. Setting $\frac{1}{2\sqrt c}=\frac13$ gives $\sqrt c=\frac32$, so $c=\frac94=2.25$, comfortably inside $(1,4)$.

## 5. When the hypotheses fail

On $[-1,1]$, the function $f(x)=|x|$ satisfies $f(-1)=f(1)=1$ and is continuous, but it is not differentiable at $0$. Its derivative is $-1$ on the left and $+1$ on the right, so there is no point with $f'(c)=0$. Rolle's conclusion fails, and so does the mean value theorem.

Similarly, $f(x)=\frac{1}{x^2}$ has $f(-1)=f(1)=1$ but is not continuous at $0$; its derivative $-\frac{2}{x^3}$ is never zero. Equal endpoint values alone are not enough. Always name the three conditions before invoking either theorem.

<learning-block type="mistake" title="Do not ignore the fine print">

The commonest error is quoting Rolle's theorem using only $f(a)=f(b)$, without checking continuity on $[a,b]$ and differentiability on $(a,b)$. The function $|x|$ on $[-1,1]$ is the ready-made counterexample. A second error is assuming the special point $c$ is the midpoint of the interval; for $f(x)=x^2$ on $[1,3]$ it is $c=2$, the midpoint here by coincidence, but for $\sqrt{x}$ on $[1,4]$ it is $\frac94$, not $\frac52$.

</learning-block>

## Try it yourself

**A.** Verify Rolle's theorem for $f(x)=x^2-4x+3$ on $[1,3]$.

<details><summary>Show the reasoning</summary>

$f(1)=1-4+3=0$ and $f(3)=9-12+3=0$; a polynomial is continuous and differentiable everywhere. Rolle gives $f'(c)=2c-4=0$, so $c=2\in(1,3)$.

</details>

**B.** A differentiable function satisfies $f(0)=5$ and $f'(x)\le2$ for all $x$. Find the largest possible value of $f(4)$.

<details><summary>Show the reasoning</summary>

Apply the mean value theorem on $[0,4]$: $f(4)-f(0)=f'(c)\cdot4\le2\cdot4=8$. Hence $f(4)\le5+8=13$. The bound is attained by $f(x)=5+2x$, so $13$ is the largest possible value.

</details>

**C.** Decide whether the mean value theorem applies to $f(x)=\frac1x$ on $[-1,1]$.

<details><summary>Show the reasoning</summary>

No. Although $f$ is differentiable on each side, it is not defined (hence not continuous) at $0$, which lies in the interval. The hypothesis of continuity on the whole closed interval fails, so the theorem cannot be used.

</details>

## Remember

- Rolle's theorem needs continuity on $[a,b]$, differentiability on $(a,b)$ and $f(a)=f(b)$; it gives an interior point with $f'(c)=0$.
- The mean value theorem gives $f'(c)=\frac{f(b)-f(a)}{b-a}$ for some $c\in(a,b)$: some tangent is parallel to the chord.
- Cauchy's theorem gives $\frac{f'(c)}{g'(c)}=\frac{f(b)-f(a)}{g(b)-g(a)}$ when $g'\ne0$; setting $g(x)=x$ recovers Lagrange's form.
- The point $c$ is guaranteed to exist but is not located by the theorem.
- All six concept modules are now in place; the practice module that follows shows how to choose the right tool when the question does not name one.
