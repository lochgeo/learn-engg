## Why the graphs repeat forever

A point moving round the unit circle returns to the same position every full turn, so its coordinates — sine and cosine — must repeat every $2\pi$. Tangent is the slope of the radius; since a radius and its opposite lie on the same line, the slope repeats after only half a turn, $\pi$. Repetition is therefore not a drawing trick but a direct consequence of circular motion.

## 1. Periodicity

A function $f$ is **periodic** with period $T>0$ if

$$
f(x+T)=f(x)\quad\text{for all }x\text{ in the domain}.
$$

The **fundamental (least) period** is the smallest such positive $T$. From the unit circle:

- $\sin(x+2\pi)=\sin x$ and $\cos(x+2\pi)=\cos x$, each with fundamental period $2\pi$;
- $\tan(x+\pi)=\tan x$, with fundamental period $\pi$.

Adding $2\pi$ to an angle does not change the terminal point of the radius. For tangent, adding $\pi$ places the radius directly opposite, but a line and its extension have the same slope, so the value is unchanged.

## 2. The sine graph

Plot $y=\sin x$ against $x$ in radians. Over one period $[0,2\pi]$ the key points are:

| $x$ | $0$ | $\pi/2$ | $\pi$ | $3\pi/2$ | $2\pi$ |
| --- | --- | --- | --- | --- | --- |
| $\sin x$ | $0$ | $1$ | $0$ | $-1$ | $0$ |

The curve starts at the origin, rises to its maximum $1$ at $\pi/2$, crosses the axis at $\pi$, falls to its minimum $-1$ at $3\pi/2$, and returns to zero at $2\pi$. It then repeats identically. Its **domain** is all real numbers, its **range** is $[-1,1]$, and its **amplitude** — half the distance between maximum and minimum — is $1$. The graph has origin symmetry, which is the geometric form of the fact that sine is odd: $\sin(-x)=-\sin x$.

## 3. The cosine graph

For $y=\cos x$ the same interval gives:

| $x$ | $0$ | $\pi/2$ | $\pi$ | $3\pi/2$ | $2\pi$ |
| --- | --- | --- | --- | --- | --- |
| $\cos x$ | $1$ | $0$ | $-1$ | $0$ | $1$ |

Cosine begins at its maximum. Its graph is exactly the sine graph shifted left by $\pi/2$, because $\cos x=\sin\!\left(x+\frac\pi2\right)$. It has the same domain, range $[-1,1]$, amplitude $1$ and period $2\pi$, but it is symmetric about the $y$-axis: cosine is even, $\cos(-x)=\cos x$. The maximum–minimum gap is still $2$, so its amplitude is also $1$.

## 4. The tangent graph

Tangent is defined only when $\cos x\ne0$, so the lines

$$
x=\frac\pi2+k\pi,\qquad k\in\mathbb{Z},
$$

are vertical **asymptotes**: the graph shoots off to $+\infty$ on one side and $-\infty$ on the other. Between consecutive asymptotes, say $\left(-\frac\pi2,\frac\pi2\right)$, the curve rises steadily from $-\infty$ to $+\infty$, passing through $(0,0)$. Its domain excludes the asymptotes, its range is **all real numbers**, and its fundamental period is $\pi$. Tangent has no amplitude because it is unbounded.

The behaviour near an asymptote is easy to misread: as $x\to\frac\pi2^-$, $\cos x\to0^+$ while $\sin x\to1$, so $\tan x\to+\infty$; approaching from the right, $\cos x\to0^-$ and $\tan x\to-\infty$.

## 5. Transforming a sinusoid

Any shifted, stretched sine wave can be written

$$
y=a\sin(bx+c)+d,
$$

and each constant has a specific geometric job:

| Constant | Effect | Value |
| --- | --- | --- |
| $|a|$ | amplitude (height from the midline) | half the peak-to-trough distance |
| $\dfrac{2\pi}{\|b\|}$ | period | horizontal length of one full wave |
| $-\dfrac{c}{b}$ | phase shift | positive means a shift to the right |
| $d$ | vertical shift | the midline is $y=d$ |

To read the phase shift, factor out $b$: $bx+c=b\!\left(x+\frac cb\right)=b\!\left(x-\left(-\frac cb\right)\right)$. The horizontal shift is therefore $-\frac cb$, not $-\frac{c}{b}$ multiplied by $b$ again. The range becomes $[d-|a|,\ d+|a|]$. A cosine form $y=a\cos(bx+c)+d$ obeys exactly the same rules.

## 6. Worked example: reading a transformed wave

For $y=3\sin\!\left(2x-\frac\pi3\right)+1$, find the amplitude, period, phase shift and range, and evaluate $y$ at $x=\frac\pi6$.

Factor the argument: $2x-\frac\pi3=2\!\left(x-\frac\pi6\right)$. Hence $a=3$, $b=2$, $c=-\frac\pi3$, $d=1$:

- amplitude $=|3|=3$;
- period $=\dfrac{2\pi}{|b|}=\dfrac{2\pi}{2}=\pi$;
- phase shift $=-\dfrac{c}{b}=\dfrac{\pi/3}{2}=\dfrac\pi6$ to the right;
- range $=[1-3,\ 1+3]=[-2,\ 4]$.

At $x=\frac\pi6$ the argument is $2\cdot\frac\pi6-\frac\pi3=0$, so $y=3\sin0+1=1$. This makes sense: $x=\frac\pi6$ is the phase shift, the point where the wave crosses its midline going upward.

**Sanity check.** The period $\pi$ is half the period of $\sin x$, which is consistent with the horizontal compression by factor $2$. The graph must oscillate between $-2$ and $4$, a spread of $6=2\times3$, matching amplitude $3$.

<learning-block type="mistake" title="Mixing up period and frequency multipliers">

A very common error is to say the period of $\sin(2x)$ is $2\pi\cdot2=4\pi$. Stretching the input by $2$ makes the wave run **twice as fast**, so its period is halved: $\dfrac{2\pi}{2}=\pi$. The same reversal of intuition applies to the phase shift: $\sin\!\left(x+\frac\pi3\right)$ shifts **left** by $\frac\pi3$, because the wave reaches each value earlier. When in doubt, find where the argument equals zero — that point marks the start of a cycle.

</learning-block>

## 7. Reading a graph back to a formula

Given a sinusoidal graph, work in this order: read the midline $d$ as the average of the maximum and minimum; read $a$ as half their difference; measure the horizontal length of one complete wave to get $\dfrac{2\pi}{|b|}$ and hence $|b|$; then locate a convenient crossing or peak to fix the phase shift and the sign of $a$. The same information can be written with sine or cosine — both are correct if they generate the same curve.

For example, suppose a sinusoid has maximum $7$ and minimum $1$, with consecutive peaks at $x=\frac\pi6$ and $x=\frac{5\pi}6$. Then the midline is $d=\frac{7+1}{2}=4$ and the amplitude is $a=\frac{7-1}{2}=3$. The gap between peaks is the period: $T=\frac{5\pi}6-\frac\pi6=\frac{2\pi}3$, so $|b|=\frac{2\pi}{T}=3$. One fitting formula is $y=3\cos\!\left(3x-\frac\pi2\right)+4$: the cosine form is chosen because the peak marks where the cosine argument is zero, giving a phase shift of $\frac\pi6$. Checking at $x=\frac\pi6$ gives $y=3\cos0+4=7$, the stated maximum.

The graphs also answer inequality questions without algebra. For instance, $\sin x>\frac12$ on $[0,2\pi]$ is read off as the portion of the sine curve above the line $y=\frac12$, which runs from $x=\frac\pi6$ to $x=\frac{5\pi}6$. Whenever an inequality or a count of solutions feels awkward, sketch the wave and mark the relevant level.

## Try it yourself

**1.** State the fundamental period, amplitude and range of $y=-2\cos(3x)$.

<details><summary>Show the reasoning</summary>

Here $a=-2$, $b=3$, $d=0$. Amplitude $=|a|=2$; period $=\dfrac{2\pi}{3}$; range $=[-2,2]$. The negative sign flips the graph vertically but does not change the amplitude or range.

</details>

**2.** For what values of $x$ in $[0,2\pi]$ is $\tan x$ undefined?

<details><summary>Show the reasoning</summary>

Tangent is undefined when $\cos x=0$, i.e. at $x=\dfrac\pi2+k\pi$. In $[0,2\pi]$ these are $x=\dfrac\pi2$ and $x=\dfrac{3\pi}2$.

</details>

**3.** Write a sine equation with amplitude $4$, period $\pi$ and midline $y=-1$.

<details><summary>Show the reasoning</summary>

We need $|a|=4$, so take $a=4$; period $\dfrac{2\pi}{|b|}=\pi$ gives $|b|=2$, take $b=2$; and $d=-1$. With no phase shift, $y=4\sin(2x)-1$ works. Adding any phase $-c/b$ would also be acceptable.

</details>

## Remember

- $\sin$ and $\cos$ have fundamental period $2\pi$; $\tan$ has fundamental period $\pi$.
- Range of $\sin$ and $\cos$ is $[-1,1]$; tangent is unbounded and has vertical asymptotes at $\frac\pi2+k\pi$.
- For $y=a\sin(bx+c)+d$: amplitude $|a|$, period $\frac{2\pi}{|b|}$, phase shift $-\frac cb$, midline $y=d$.
- Multiplying the input by $b$ divides the period by $|b|$; a negative $a$ reflects the graph in its midline.
- Sine is odd, cosine is even — visible as origin and $y$-axis symmetry.

Knowing the graphs makes the next step natural: formulae that combine two angles, and the repeated patterns they reveal.
