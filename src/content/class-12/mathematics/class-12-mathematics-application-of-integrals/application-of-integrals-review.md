## Your study plan for today

Area problems reward careful setup more than heavy computation. A focused pass takes about **1 hour 40 minutes**, plus a short break:

1. **Area under simple curves** - 22 min
2. **Area between two curves** - 22 min
3. **Mixed area problems** - 22 min
4. **This mastery check** - 25 min

After each concept module, solve one question from memory before opening the answer. Take a short break after the third module. When you can set up the correct integral without hesitation, use the **JEE Main timed practice** module for a 50-minute mixed paper.

## First choose the tool

| Clue in the question | Start with |
| --- | --- |
| Region between a curve and the $x$-axis | $A=\int_a^b \lvert f(x)\rvert\,dx$; split where $f(x)=0$ |
| Region between a curve and the $y$-axis | $A=\int_c^d \lvert g(y)\rvert\,dy$ |
| Two curves, one clearly above the other | $A=\int_a^b (y_{\text{upper}}-y_{\text{lower}})\,dx$ |
| Two curves, easier as right minus left | $A=\int_c^d (x_{\text{right}}-x_{\text{left}})\,dy$ |
| Curves cross inside the interval | Split at intersections; use upper minus lower on each piece |
| Boundary changes at a point | Write separate integrals for each boundary rule |
| Symmetric region | Compute one half and multiply, after confirming symmetry |
| Circle, ellipse, or $\sqrt{a^2-x^2}$ appears | Use the standard $\sqrt{a^2-x^2}$ antiderivative or geometric area as a check |

## Mastery check

Try each question before opening the answer. Keep track of sign, limits, and units (square units).

### 1. Area above the axis

Find the area bounded by $y=3x^2$, the $x$-axis, $x=1$, and $x=2$.

<details><summary>Answer and reasoning</summary>

Since $3x^2\ge 0$,

$$
A=\int_1^2 3x^2\,dx=\left[x^3\right]_1^2=8-1=7\ \text{square units}.
$$

</details>

### 2. Crossing the axis

Find the area bounded by $y=x-1$, the $x$-axis, $x=0$, and $x=3$.

<details><summary>Answer and reasoning</summary>

The line crosses the axis at $x=1$. On $[0,1]$, $y\le 0$; on $[1,3]$, $y\ge 0$. Thus

$$
A=\int_0^1 (1-x)\,dx+\int_1^3 (x-1)\,dx=\left[x-\frac{x^2}{2}\right]_0^1+\left[\frac{x^2}{2}-x\right]_1^3=\frac{1}{2}+2=\frac{5}{2}\ \text{square units}.
$$

The signed integral is $\frac{3}{2}$, which would be incorrect as geometric area.

</details>

### 3. Between two curves

Find the area enclosed by $y=x^2$ and $y=x+2$.

<details><summary>Answer and reasoning</summary>

Intersections: $x^2=x+2\Rightarrow x^2-x-2=0\Rightarrow x=-1,2$. The line is above the parabola on $[-1,2]$. Therefore

$$
A=\int_{-1}^{2}(x+2-x^2)\,dx=\left[\frac{x^2}{2}+2x-\frac{x^3}{3}\right]_{-1}^{2}=\left(2+4-\frac{8}{3}\right)-\left(\frac{1}{2}-2+\frac{1}{3}\right)=\frac{9}{2}\ \text{square units}.
$$

</details>

### 4. Horizontal strips

Find the area bounded by $y^2=4x$ and $x=4$.

<details><summary>Answer and reasoning</summary>

The parabola meets $x=4$ at $y^2=16$, so $y=-4,4$. Right boundary is $x=4$, left boundary is $x=y^2/4$. By symmetry,

$$
A=2\int_0^4\left(4-\frac{y^2}{4}\right)dy=2\left[4y-\frac{y^3}{12}\right]_0^4=2\left(16-\frac{64}{12}\right)=2\left(\frac{32}{3}\right)=\frac{64}{3}\ \text{square units}.
$$

</details>

### 5. A circular region

Find the area of the region bounded by the circle $x^2+y^2=4$ and the line $x=\sqrt{3}y$ in the first quadrant.

<details><summary>Answer and reasoning</summary>

The line through the origin makes angle $\theta$ with the positive $x$-axis, where $\tan\theta=1/\sqrt{3}$, so $\theta=\pi/6$. The required region is a circular sector of radius $2$ between $\theta=0$ and $\theta=\pi/6$. Hence

$$
A=\frac{1}{2}r^2\theta=\frac{1}{2}(4)\left(\frac{\pi}{6}\right)=\frac{\pi}{3}\ \text{square units}.
$$

An integral check: $A=\int_0^{\sqrt{3}}\frac{x}{\sqrt{3}}\,dx+\int_{\sqrt{3}}^{2}\sqrt{4-x^2}\,dx=\frac{\sqrt{3}}{2}+\left(\pi-\sqrt{3}-\frac{\pi}{3}\right)=\frac{\pi}{3}$.

</details>

### 6. Split by the upper boundary

Find the area in the first quadrant bounded by $y=x$, $y=2-x$, and the $x$-axis.

<details><summary>Answer and reasoning</summary>

The lines meet at $x=2-x\Rightarrow x=1$, $y=1$. For $0\le x\le 1$, the top boundary is $y=x$; for $1\le x\le 2$, it is $y=2-x$. Therefore

$$
A=\int_0^1 x\,dx+\int_1^2 (2-x)\,dx=\frac{1}{2}+\left[2x-\frac{x^2}{2}\right]_1^2=\frac{1}{2}+\left(2-\frac{3}{2}\right)=1\ \text{square unit}.
$$

This matches the area of the triangle with base 2 and height 1.

</details>

### 7. Area with an absolute value

Find the area enclosed by $y=\lvert x-1\rvert$ and $y=1$.

<details><summary>Answer and reasoning</summary>

The V-shape meets $y=1$ where $|x-1|=1$, so $x=0$ and $x=2$. The top boundary is $y=1$. By symmetry about $x=1$,

$$
A=2\int_1^2 \bigl(1-(x-1)\bigr)\,dx=2\int_1^2 (2-x)\,dx=2\left[2x-\frac{x^2}{2}\right]_1^2=2\left(2-\frac{3}{2}\right)=1\ \text{square unit}.
$$

</details>

### 8. Choosing $dy$ to avoid multiple splits

Find the area of the region bounded by $x=y^2-2$ and $x=y$.

<details><summary>Answer and reasoning</summary>

Intersections: $y^2-2=y\Rightarrow y^2-y-2=0\Rightarrow y=-1,2$. For a test value $y=0$, the line gives $x=0$ and the parabola gives $x=-2$, so $x=y$ is to the right. Thus

$$
A=\int_{-1}^{2}\bigl(y-(y^2-2)\bigr)dy=\int_{-1}^{2}(y-y^2+2)dy=\left[\frac{y^2}{2}-\frac{y^3}{3}+2y\right]_{-1}^{2}=\frac{10}{3}-\left(-\frac{7}{6}\right)=\frac{9}{2}\ \text{square units}.
$$

</details>

### 9. A mixed first-quadrant region

Find the area in the first quadrant bounded by $y=\sqrt{x}$, the $x$-axis, and the line $x+y=2$.

<details><summary>Answer and reasoning</summary>

The line meets the $x$-axis at $x=2$. It meets $y=\sqrt{x}$ where $\sqrt{x}=2-x$. Let $t=\sqrt{x}\ge 0$, then $t=2-t^2$, so $t^2+t-2=0$ and $t=1$, giving $x=1$. For $0\le x\le 1$, the upper boundary is $y=\sqrt{x}$; for $1\le x\le 2$, it is $y=2-x$. Hence

$$
A=\int_0^1 \sqrt{x}\,dx+\int_1^2 (2-x)\,dx=\left[\frac{2}{3}x^{3/2}\right]_0^1+\left[2x-\frac{x^2}{2}\right]_1^2=\frac{2}{3}+\frac{1}{2}=\frac{7}{6}\ \text{square units}.
$$

</details>

### 10. Area between a curve and its tangent

Find the area bounded by $y=x^2$, the tangent to this parabola at $(1,1)$, and the $y$-axis.

<details><summary>Answer and reasoning</summary>

For $y=x^2$, $\frac{dy}{dx}=2x$, so the slope at $(1,1)$ is $2$. The tangent is $y-1=2(x-1)$, or $y=2x-1$. It meets the $y$-axis at $(0,-1)$. On $[0,1]$, the parabola $y=x^2$ is above the tangent $y=2x-1$ (for example at $x=0$, $0>-1$). Therefore

$$
A=\int_0^1 \bigl[x^2-(2x-1)\bigr]\,dx=\int_0^1 (x^2-2x+1)\,dx=\left[\frac{x^3}{3}-x^2+x\right]_0^1=\frac{1}{3}\ \text{square units}.
$$

</details>

## Self-check

You are ready to move on when you can:

- explain why a definite integral can be negative but a geometric area cannot;
- locate all intersection points before writing limits;
- decide quickly whether vertical or horizontal strips give fewer integrals;
- split an integral wherever the top/bottom or right/left boundary changes;
- use symmetry as a shortcut and verify that it applies;
- check a computed area against a rough geometric estimate.

If one of these feels uncertain, revisit the relevant concept module and redo its "Try it yourself" questions from a blank page.

