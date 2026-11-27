## Estimating without a calculator

A surveyor knows a distance to the nearest metre and needs the area of a square plot; a student knows $\sqrt{25}=5$ and wants $\sqrt{26}$. Neither wants a fresh exact computation. In both cases a small change in the input produces a small, predictable change in the output, and the derivative converts one into the other. The tangent line at a convenient nearby point acts as a local substitute for the curve.

## 1. Linear approximation from the definition

From the definition of the derivative,

$$
f'(x)=\lim_{\Delta x\to0}\frac{f(x+\Delta x)-f(x)}{\Delta x}.
$$

For small $\Delta x$ the quotient is close to its limit, so

$$
f(x+\Delta x)\approx f(x)+f'(x)\Delta x.
$$

This is **linear approximation** (or linearisation): replace the curve near $x$ by its tangent line. Define the differential $dx=\Delta x$ and $dy=f'(x)dx$; then $dy\approx\Delta y$, and the error is of order $(dx)^2$. Choose the base point $x$ so that both $f(x)$ and $f'(x)$ are easy to evaluate, and choose $|\Delta x|$ small.

## 2. A worked example: a square root

Estimate $\sqrt{26}$.

Take $f(t)=\sqrt t$ and the nearby perfect square $t=25$ with $\Delta t=1$. Then

$$
f(25)=5,\qquad f'(t)=\frac{1}{2\sqrt t},\qquad f'(25)=\frac1{10}.
$$

Hence

$$
\sqrt{26}\approx5+\frac1{10}(1)=5.1.
$$

**Sanity check:** $\sqrt{26}$ must lie between $\sqrt{25}=5$ and $\sqrt{36}=6$, much nearer to $5$; the estimate $5.1$ satisfies this. Squaring the estimate gives $26.01$, only $0.01$ above $26$; the true value is about $5.09902$, so the error is about $0.001$, consistent with an error of order $(\Delta t)^2$.

## 3. Another worked example: a small power

Estimate $(1.01)^5$.

Use $f(x)=x^5$ with base $x=1$ and $\Delta x=0.01$:

$$
f(1)=1,\qquad f'(x)=5x^4,\qquad f'(1)=5,
$$

so $(1.01)^5\approx1+5(0.01)=1.05$. The exact value is about $1.05101$, so the estimate is low by roughly $0.001$ — again of the expected order for a step of $0.01$.

## 4. Angles must be in radians

Differentiation formulas for trigonometric functions assume radian measure. To estimate $\sin31^\circ$, use $f(x)=\sin x$ with base $x=30^\circ=\frac\pi6$ and

$$
\Delta x=1^\circ=\frac{\pi}{180}\ \text{rad}\approx0.01745\ \text{rad}.
$$

Then

$$
\sin31^\circ\approx\sin\frac\pi6+\cos\frac\pi6\cdot\frac\pi{180}=\frac12+\frac{\sqrt3}{2}\cdot0.01745\approx0.5+0.01511=0.51511.
$$

The tabulated value is about $0.51504$. Using $\Delta x=1$ (as though one degree were one radian) would give a wildly wrong answer.

<learning-block type="mistake" title="Degrees, base points and the size of the step">

The most damaging error is differentiating $\sin x$ as $\cos x$ and then inserting degrees: the formula holds only in radians. The second is choosing a base point far from the target — estimating $\sqrt{30}$ from $25$ gives $5.5$, far worse than estimating it from $36$. The third is treating the approximation as exact for a large step; $dy$ is a first-order estimate and improves only as $\Delta x\to0$.

</learning-block>

## Try it yourself

**A.** Estimate $\dfrac1{51}$ using a differential.

<details><summary>Show the reasoning</summary>

Take $f(x)=1/x$, base $x=50$, $\Delta x=1$. Then $f(50)=0.02$ and $f'(x)=-1/x^2$, so $f'(50)=-1/2500=-0.0004$. Thus $\frac1{51}\approx0.02-0.0004=0.0196$. The true value is about $0.019608$, so the estimate is good to four decimal places.

</details>

**B.** Estimate $e^{0.1}$ from a linear approximation at $0$.

<details><summary>Show the reasoning</summary>

$f(x)=e^x$, $f(0)=1$, $f'(0)=1$, so $e^{0.1}\approx1+0.1=1.1$. The true value is about $1.10517$; the estimate is low because the curve bends upward, which a tangent cannot capture.

</details>

**C.** A square's side is measured as $10\ \text{cm}$ with a possible error of $0.1\ \text{cm}$. Estimate the resulting error in its area.

<details><summary>Show the reasoning</summary>

$A=s^2$, so $dA=2s\,ds=2(10)(0.1)=2\ \text{cm}^2$. The area may be off by about $2\ \text{cm}^2$; the exact change is $10.1^2-100=2.01\ \text{cm}^2$.

</details>

## Remember

- Linear approximation: $f(x+\Delta x)\approx f(x)+f'(x)\Delta x$, with an error of order $(\Delta x)^2$.
- The differential is $dy=f'(x)dx$; it estimates the true change $\Delta y$ for small $dx$.
- Pick a base point where $f$ and $f'$ are easy and close to the target.
- Trigonometric derivatives require radians; convert degree changes to radians first.
- Approximations improve as the step shrinks; a tangent cannot see the curve's curvature.
- The same derivative machinery next helps us find where a curve turns, in maxima and minima.
