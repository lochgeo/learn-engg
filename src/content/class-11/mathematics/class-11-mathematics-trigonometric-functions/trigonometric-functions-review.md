## Your study plan for this chapter

This chapter is a set of connected tools, not one formula to memorise. A focused pass takes about **2 hours 10 minutes**, plus a short break:

1. **Angles, arcs and the unit circle** — 20 min
2. **Trigonometric identities** — 20 min
3. **Graphs and periodic behaviour** — 20 min
4. **Sum and product formulae** — 25 min
5. **Trigonometric equations** — 20 min
6. **This mastery check** — 25 min

After each lesson, close the explanation and try its questions from a blank page. Mark it complete only when you can explain why the method applies, not merely because you recognised the answer. Take a five-minute break before the mastery check.

Once you can solve these tools one at a time, use the optional **JEE Main timed practice** module for a $50$-minute mixed paper. Its value lies in choosing the right tool under pressure.

## First choose the tool

| Clue in the question | Start with |
| --- | --- |
| A formula uses $s=r\theta$ or sector area | Convert the angle to **radians** first |
| You need the sign of a ratio | Locate the quadrant and use ASTC |
| Expression contains $\sin^2\theta$ or $\cos^2\theta$ | Pythagorean identities: $\sin^2+\cos^2=1$ and its variants |
| One ratio is given and another is wanted | $\sin^2+\cos^2=1$ plus the quadrant to fix the sign |
| $\sin(A\pm B)$, $\cos(A\pm B)$ or a double angle | Addition or double-angle formulae |
| A sum of two sines or cosines | Sum-to-product identities |
| A product of two trigonometric ratios | Product-to-sum identities |
| Range, period, amplitude or number of crossings | Sketch the transformed wave $a\sin(bx+c)+d$ |
| Exact value at a non-standard angle | Split it into standard angles, e.g. $75^\circ=45^\circ+30^\circ$ |
| "Find all solutions" | General solution families with integer $n$ |
| Solutions restricted to an interval | General family, then substitute integer values of $n$ |
| Both sides share a trigonometric factor | Factor the equation; never cancel the factor |

## Mastery check

Try each question without looking at the answer. Take angles in radians unless a degree symbol is shown.

### 1. Convert and evaluate

Convert $150^\circ$ to radians, then find $\sin\theta$, $\cos\theta$ and $\tan\theta$.

<details><summary>Answer and reasoning</summary>

$\theta=150^\circ\times\dfrac{\pi}{180}=\dfrac{5\pi}{6}$, in quadrant II. The reference angle is $\dfrac\pi6$, so $\sin\theta=\dfrac12$, $\cos\theta=-\dfrac{\sqrt3}{2}$ and $\tan\theta=-\dfrac{1}{\sqrt3}=-\dfrac{\sqrt3}{3}$. Only sine is positive in quadrant II.

</details>

### 2. Arc and sector

A circle has radius $6\ \text{cm}$ and a sector angle of $45^\circ$. Find the arc length and the sector area.

<details><summary>Answer and reasoning</summary>

$45^\circ=\dfrac\pi4$ rad. Arc $s=r\theta=6\cdot\dfrac\pi4=\dfrac{3\pi}{2}\ \text{cm}\approx4.71\ \text{cm}$. Sector area $=\dfrac12r^2\theta=\dfrac12(36)\dfrac\pi4=\dfrac{9\pi}{2}\ \text{cm}^2\approx14.1\ \text{cm}^2$. The sector is one eighth of the disc, and $\frac18\pi(6^2)=\frac{9\pi}{2}$, confirming the area.

</details>

### 3. Recovering ratios from tangent

If $\tan\theta=-\dfrac{5}{12}$ and $\theta$ is in quadrant IV, find $\sin\theta$ and $\cos\theta$.

<details><summary>Answer and reasoning</summary>

$5$–$12$–$13$ gives the magnitudes. In quadrant IV, cosine is positive and sine is negative, so $\cos\theta=\dfrac{12}{13}$ and $\sin\theta=-\dfrac{5}{13}$. Check: $\tan\theta=\dfrac{-5/13}{12/13}=-\dfrac{5}{12}$.

</details>

### 4. Prove an identity

Show that $(1+\cot^2\theta)\sin^2\theta=1$ wherever both sides are defined.

<details><summary>Answer and reasoning</summary>

From $1+\cot^2\theta=\csc^2\theta=\dfrac{1}{\sin^2\theta}$, multiplying by $\sin^2\theta$ gives $1$. Direct expansion works too: $1+\dfrac{\cos^2\theta}{\sin^2\theta}=\dfrac{\sin^2\theta+\cos^2\theta}{\sin^2\theta}=\dfrac{1}{\sin^2\theta}$.

</details>

### 5. Read a transformed wave

For $y=2\cos(4x+\pi)-3$, state the amplitude, period, range and phase shift.

<details><summary>Answer and reasoning</summary>

Amplitude $=|2|=2$; period $=\dfrac{2\pi}{4}=\dfrac\pi2$; midline $y=-3$, so the range is $[-5,-1]$. Since $4x+\pi=4\!\left(x+\dfrac\pi4\right)$, the phase shift is $-\dfrac\pi4$, a shift left by $\dfrac\pi4$. Equivalently $\cos(4x+\pi)=-\cos4x$, so the graph is an inverted cosine with no extra shift.

</details>

### 6. An exact value

Evaluate $\cos75^\circ$ exactly.

<details><summary>Answer and reasoning</summary>

$\cos(45^\circ+30^\circ)=\cos45^\circ\cos30^\circ-\sin45^\circ\sin30^\circ=\dfrac{\sqrt2}{2}\cdot\dfrac{\sqrt3}{2}-\dfrac{\sqrt2}{2}\cdot\dfrac12=\dfrac{\sqrt6-\sqrt2}{4}\approx0.259$, consistent with $\cos75^\circ$ being a small positive number.

</details>

### 7. Sum to product

Express $\sin65^\circ-\sin25^\circ$ as a product and simplify.

<details><summary>Answer and reasoning</summary>

$\sin C-\sin D=2\cos\dfrac{C+D}{2}\sin\dfrac{C-D}{2}$, so the expression is $2\cos45^\circ\sin20^\circ=\sqrt2\sin20^\circ$. Numerically both sides are about $0.484$.

</details>

### 8. General and local solutions

Find the general solution of $\cos x=-\dfrac12$, then list the solutions in $[0,2\pi]$.

<details><summary>Answer and reasoning</summary>

The principal angle is $\cos^{-1}\!\left(-\dfrac12\right)=\dfrac{2\pi}{3}$, so $x=2n\pi\pm\dfrac{2\pi}{3}$. Taking $n=0$ gives $\dfrac{2\pi}{3}$ and $-\dfrac{2\pi}{3}$; adding $2\pi$ to the latter gives $\dfrac{4\pi}{3}$. The interval solutions are $\dfrac{2\pi}{3}$ and $\dfrac{4\pi}{3}$.

</details>

### 9. A quadratic with an impossible root

Solve $2\sin^2x-5\sin x+2=0$ for $0\le x\le2\pi$.

<details><summary>Answer and reasoning</summary>

Let $t=\sin x$. Then $2t^2-5t+2=(2t-1)(t-2)=0$, so $t=\dfrac12$ or $t=2$. The root $t=2$ is impossible because $\sin x\le1$, so it is discarded. Hence $\sin x=\dfrac12$, giving $x=\dfrac\pi6$ and $x=\dfrac{5\pi}{6}$.

</details>

### 10. Factor, do not cancel

Solve $\sin x\tan x=\sin x$ for $0\le x<2\pi$.

<details><summary>Answer and reasoning</summary>

Rewrite as $\sin x(\tan x-1)=0$. Either $\sin x=0$, giving $x=0,\pi$, or $\tan x=1$, giving $x=\dfrac\pi4,\dfrac{5\pi}4$. The four solutions are $0,\dfrac\pi4,\pi,\dfrac{5\pi}4$. Cancelling $\sin x$ at the start would have lost the $x=0,\pi$ family.

</details>

## Self-check

You are ready for the timed set when you can:

- convert between degrees and radians and use $s=r\theta$ correctly;
- assign the correct signs using ASTC in any quadrant;
- derive and use all three Pythagorean identities;
- expand $\sin(A\pm B)$, $\cos(A\pm B)$ and the double-angle forms without a formula sheet;
- move between sums and products of sines and cosines;
- read amplitude, period, phase shift and range from $a\sin(bx+c)+d$;
- write the general solution of each of $\sin$, $\cos$ and $\tan$ equations;
- restrict a general family to a stated interval and confirm the solution count graphically;
- factor rather than cancel when a common trigonometric factor appears;
- reject impossible roots such as $\sin x=2$ or $|a|>1$ without further work.

If any item still feels shaky, revisit that module and redo its questions with the answers hidden.
