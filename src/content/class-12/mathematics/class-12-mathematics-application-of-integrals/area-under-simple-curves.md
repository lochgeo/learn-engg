## Why an integral can measure area

Differentiation tells you how fast a quantity changes; integration adds those changes back up. When a curve lies above the $x$-axis, the region between the curve and the axis can be sliced into thin vertical strips. Each strip is almost a rectangle of height $y=f(x)$ and width $\Delta x$, so its area is close to $f(x)\Delta x$. Adding all strips and letting their width shrink gives a definite integral.

This is the central idea of the chapter: **area is accumulated signed height**. The sign matters, because a definite integral counts height below the axis as negative, while geometric area is never negative.

## 1. Area bounded by a curve, the $x$-axis, and two ordinates

Let $y=f(x)$ be continuous on $[a,b]$.

If $f(x)\ge 0$ on $[a,b]$, the area of the region bounded by $y=f(x)$, the $x$-axis, $x=a$, and $x=b$ is

$$
A=\int_a^b f(x)\,dx.
$$

If $f(x)\le 0$ on $[a,b]$, the integral is negative but the geometric area is positive:

$$
A=-\int_a^b f(x)\,dx=\int_a^b \lvert f(x)\rvert\,dx.
$$

If the curve crosses the $x$-axis, split the interval at the zeros and add the areas of the pieces. Never take the absolute value only at the end unless the function keeps the same sign throughout.

<learning-block type="concept" title="Signed integral versus geometric area">

The value $\int_a^b f(x)\,dx$ is a net signed accumulation. The geometric area between the curve and the $x$-axis is $\int_a^b \lvert f(x)\rvert\,dx$. They are equal only when $f(x)\ge 0$ on the whole interval.

</learning-block>

## 2. Area bounded by a curve and the $y$-axis

Sometimes the region is described more naturally by horizontal strips. If $x=g(y)$ is continuous and $g(y)\ge 0$ for $c\le y\le d$, then the area bounded by $x=g(y)$, the $y$-axis, $y=c$, and $y=d$ is

$$
A=\int_c^d g(y)\,dy.
$$

Choosing between $dx$ and $dy$ is a practical decision: use the variable that gives one integral instead of several. A region that needs two or three vertical slices may need only one horizontal slice.

## 3. A standard area: the circle

For the circle $x^2+y^2=a^2$ with $a>0$, the upper semicircle is $y=\sqrt{a^2-x^2}$. The area above the $x$-axis is

$$
A_{\text{upper}}=\int_{-a}^{a}\sqrt{a^2-x^2}\,dx.
$$

Using the standard formula $\int \sqrt{a^2-x^2}\,dx=\frac{x}{2}\sqrt{a^2-x^2}+\frac{a^2}{2}\sin^{-1}\!\left(\frac{x}{a}\right)+C$, we get

$$
A_{\text{upper}}=\left[\frac{x}{2}\sqrt{a^2-x^2}+\frac{a^2}{2}\sin^{-1}\!\left(\frac{x}{a}\right)\right]_{-a}^{a}=\frac{\pi a^2}{2}.
$$

Doubling gives the full circle area $\pi a^2$. This checks both the integral formula and the geometric meaning.

## 4. Worked example: split where the curve crosses the axis

Find the area of the region bounded by the curve $y=x^2-4$, the $x$-axis, and the lines $x=0$ and $x=3$.

**Step 1: Locate the sign change.** Solve $x^2-4=0$: $x=-2,2$. On $[0,2]$, $x^2-4\le 0$; on $[2,3]$, $x^2-4\ge 0$. The region must be split at $x=2$.

**Step 2: Integrate each piece.** An antiderivative is $\frac{x^3}{3}-4x$. Therefore

$$
\int_0^2 (x^2-4)\,dx=\left[\frac{x^3}{3}-4x\right]_0^2=\frac{8}{3}-8=-\frac{16}{3},
$$

$$
\int_2^3 (x^2-4)\,dx=\left[\frac{x^3}{3}-4x\right]_2^3=(9-12)-\left(\frac{8}{3}-8\right)=\frac{7}{3}.
$$

**Step 3: Convert signed integrals to area.** The required area is

$$
A=\left\lvert -\frac{16}{3}\right\rvert+\frac{7}{3}=\frac{16}{3}+\frac{7}{3}=\frac{23}{3}\ \text{square units}.
$$

**Sanity check.** The curve is below the axis on a length-2 interval and above on a length-1 interval, so a total area a little below 8 square units is reasonable. The unsigned integral $\int_0^3 (x^2-4)\,dx=-3$ would be wrong as an area and even has the wrong sign.

<learning-block type="mistake" title="Do not treat a signed integral as an area">

A common error is to compute $\int_0^3 (x^2-4)\,dx=-3$ and report $3$ square units. This accidentally cancels a below-axis region against an above-axis region. Find the zeros, split the interval, and add absolute areas: $\frac{16}{3}+\frac{7}{3}=\frac{23}{3}$.

</learning-block>

## Try it yourself

**1.** Find the area bounded by $y=x^2$, the $x$-axis, $x=1$, and $x=2$.

<details><summary>Show the reasoning</summary>

Since $x^2\ge 0$ on $[1,2]$,

$$
A=\int_1^2 x^2\,dx=\left[\frac{x^3}{3}\right]_1^2=\frac{8}{3}-\frac{1}{3}=\frac{7}{3}\ \text{square units}.
$$

</details>

**2.** Find the area enclosed by $y=\sin x$ and the $x$-axis over one arch, from $x=0$ to $x=\pi$.

<details><summary>Show the reasoning</summary>

On $[0,\pi]$, $\sin x\ge 0$, so

$$
A=\int_0^\pi \sin x\,dx=\left[-\cos x\right]_0^\pi=(-\cos\pi)-(-\cos0)=1+1=2\ \text{square units}.
$$

</details>

**3.** Find the area bounded by $x=y^2$, the $y$-axis, $y=0$, and $y=2$.

<details><summary>Show the reasoning</summary>

Horizontal strips are convenient: $x=y^2\ge 0$, so

$$
A=\int_0^2 y^2\,dy=\left[\frac{y^3}{3}\right]_0^2=\frac{8}{3}\ \text{square units}.
$$

</details>

## Remember

- A definite integral gives **signed** accumulation; geometric area is $\int_a^b \lvert f(x)\rvert\,dx$.
- Split the interval at every point where the curve crosses the relevant axis.
- Use $A=\int_a^b f(x)\,dx$ for vertical strips and $A=\int_c^d g(y)\,dy$ for horizontal strips.
- Check the sign, the limits, and the magnitude before trusting the final number.
- In the next module, the same strip idea gives the area enclosed between two curves.

