## The circle completes the story

Lesson 1 promised that SHM is the shadow of uniform circular motion, and every formula since has quietly agreed. This lesson cashes that in. The reference circle gives you a picture on which the phase is literally an angle, an almost mechanical procedure for finding the initial phase $\phi$ from where the oscillator *is* and *which way it moves*, and a geometric shortcut for adding two simple harmonic motions along the same line. It is the chapter's most reusable jig — $18$ minutes here saves an exam-length struggle later.

## 1. The reference circle, laid out

Draw a circle of radius $A$ centred on the origin, with the $x$-axis running through it. A point $Q$ moves round it **anticlockwise** at constant angular speed $\omega$ (rad/s). Its position vector makes an angle $\theta=\omega t+\phi$ measured from the $+x$ direction, where $\phi$ fixes where $Q$ started at $t=0$. The coordinates of $Q$ are

$$
x=A\cos(\omega t+\phi),\qquad
y=A\sin(\omega t+\phi).
$$

Each coordinate, watched on its own, is a simple harmonic motion. The $x$-projection is the one this chapter uses, and the $y$-projection has identical form a quarter period ahead.

Three dictionary entries connect the picture to the one-dimensional motion:

| On the circle | In the SHM |
| --- | --- |
| Radius $A$ | Amplitude |
| Angular speed $\omega$, period $T=2\pi/\omega$ | Angular frequency, period |
| Angle $\omega t+\phi$ swept from $+x$ axis | Phase |
| Point $Q$ | The "phase-marker" |

## 2. Proof in three lines

Differentiate the projection twice:

$$
v_x=-\omega A\sin(\omega t+\phi),
\qquad
a_x=-\omega^2A\cos(\omega t+\phi)=-\omega^2x.
$$

The final expression is the defining condition of SHM, so the shadow is *exactly* simple harmonic — not approximately, and with precisely the same $\omega$ as the circular motion. The same three lines also reproduce Lesson 2's results geometrically: $Q$'s speed is $\omega A$, and the shadow's speed $|v_x|=\omega A|\sin\theta|$ peaks when $Q$ is alongside the centre (shadow crossing equilibrium) and vanishes when $Q$ is level with the $x$-axis ends (shadow at an extreme).

## 3. Reading the initial phase from initial conditions

Given $x_0$ and the direction of motion at $t=0$:

1. **Cosine condition.** $x_0=A\cos\phi$, so $\cos\phi=x_0/A$. This pins a **pair** of opposite angles.
2. **Velocity condition.** $v_0=-\omega A\sin\phi$. The *sign* of $v_0$ selects the correct one of the pair.

| Start of the motion | Consequence in $x=A\cos(\omega t+\phi)$ |
| --- | --- |
| Released from rest at $x=+A$ | $\phi=0$; $x=A\cos\omega t$ |
| Released from rest at $x=-A$ | $\phi=\pi$; $x=-A\cos\omega t$ |
| At the mean moving in $+x$ | $\phi=-\pi/2$; $x=A\sin\omega t$ |
| At the mean moving in $-x$ | $\phi=+\pi/2$; $x=-A\sin\omega t$ |
| At $x=+A/2$, moving outward (toward $+A$) | $\phi=-\pi/3$ |
| At $x=-A/2$, moving outward (toward $-A$) | $\phi=+2\pi/3$ or equivalently $-4\pi/3$ |

The rule to internalise: **the cosine fixes the sine's size, the velocity fixes the sine's sign.** Getting the quadrant wrong is the most frequent phase error, and it silently shifts every later answer by part of a cycle.

<learning-block type="example" title="Worked example: pinning the phase">

An oscillator has amplitude $A=4.0\ \text{cm}$ and at $t=0$ is at $x_0=+2.0\ \text{cm}$ **moving in the positive direction**.

**Step 1.** $\cos\phi=x_0/A=0.50$, so $\phi=\pm\pi/3$.

**Step 2.** $v_0=-\omega A\sin\phi>0$ requires $\sin\phi<0$; of the pair, only $\phi=-\pi/3$ qualifies.

**Step 3.** So $x=4.0\cos(\omega t-\pi/3)\ \text{cm}$, and the oscillator is between the centre and $+A$, still moving outward. Cost to verify: at $\phi=-\pi/3$, $\sin\phi=-0.866<0$ — velocity positive, as required, and $x=4.0(0.50)=2.0\ \text{cm}$ — as given.

</learning-block>

## 4. Adding two SHMs along the same line

Two simple harmonic motions of **equal frequency** acting along the same direction — say two waves of a string, or two forces on one mass — produce a resultant that is itself SHM with that same frequency. If their amplitudes are $A_1$ and $A_2$ and their phases differ by $\delta$,

$$
R^2=A_1^2+A_2^2+2A_1A_2\cos\delta.
$$

Geometric meaning: draw two arrows of lengths $A_1$, $A_2$ with angle $\delta$ between them; $R$ is the length of the closing triangle side — the same "law of cosines" twice over, once on the reference circles, once on the amplitudes. Quick special cases worth memorising:

- $\delta=0$ (in phase): $R=A_1+A_2$ (largest).
- $\delta=\pi$ (antiphase): $R=|A_1-A_2|$ (smallest; equal amplitudes cancel entirely).
- $\delta=\pi/2$ (a quarter cycle): $R=\sqrt{A_1^2+A_2^2}$.

For $A_1=3.0$ and $A_2=4.0$ (units arbitrary) with $\delta=90^\circ$: $R=\sqrt{9+16}=5.0$. Same two amplitudes with $\delta=0$ give $7.0$; with $\delta=180^\circ$, merely $1.0$. The *phase difference*, not the amplitudes, decides whether the pair reinforces or fights.

<learning-block type="mistake" title="Adding amplitudes without asking about phase">

"Two SHMs of amplitudes 3 and 4 add to amplitude 7" — only if they are in phase. The safe habit is to write $R^2=A_1^2+A_2^2+2A_1A_2\cos\delta$ first and let $\delta$ speak. A second ritual slip: feeding $\delta$ in degrees into $\cos\delta$ where your calculator expects radians, or cooking $\omega t$ in degrees when $\omega$ came out in rad/s — pick one unit and convert before any trig.

</learning-block>

## 5. Perpendicular combinations: a glimpse

When two SHMs of the same frequency act along perpendicular axes, the point traces a 2D curve:

- $\delta=0$ or $\pi$: the point shuttles along a straight line.
- $\delta=\pm\pi/2$ with equal amplitudes: a **circle** — this is the reference circle itself, reconstructed.
- unequal amplitudes with other $\delta$: an **ellipse**.

That is all this syllabus usually needs; it also explains why "circular" motion is just two SHMs keeping a fixed quarter-cycle appointment.

## Try it yourself

**1.** An oscillator of amplitude $6.0\ \text{cm}$ is at $x_0=-3.0\ \text{cm}$ at $t=0$, moving toward $-A$ (negative direction). Find the initial phase in the cosine form.

<details><summary>Show the reasoning</summary>

$\cos\phi=x_0/A=-0.50$, so $\phi=\pm 2\pi/3$ (i.e. $120^\circ$ or $240^\circ$). The velocity condition is $v_0=-\omega A\sin\phi<0$, needing $\sin\phi>0$ — the $+2\pi/3$ branch. So $x=6.0\cos(\omega t+2\pi/3)\ \text{cm}$. On the reference circle the phase-marker starts at $120^\circ$, in the second quadrant (cosine negative, sine positive), and anticlockwise rotation then carries it toward $180^\circ$, where $x=-A$: the shadow is moving further into the negative region, as the question describes.
</details>

**2.** Two SHMs along the same line, equal frequency, amplitudes $5.0$ and $12.0$, phase difference $90^\circ$. Resultant amplitude?

<details><summary>Show the reasoning</summary>

$R=\sqrt{A_1^2+A_2^2+2A_1A_2\cos 90^\circ}=\sqrt{25+144+0}=\sqrt{169}=13.0$. The quarter-cycle case is the "Pythagorean special": no cross-term, amplitudes only at right angles in the arrow construction.
</details>

**3.** Two identical tuning arrangements drive one string with amplitudes $6.0$ and $6.0$. What is the resultant motion when the phase difference is (a) zero, (b) $180^\circ$, (c) $90^\circ$?

<details><summary>Show the reasoning</summary>

(a) $R=A_1+A_2=12.0$, doubling the amplitude (energy carried goes up fourfold — energy $\propto$ amplitude squared). (b) $R=|6.0-6.0|=0$: destructive cancellation, the string stays still. (c) $R=\sqrt{36+36}=6.0\sqrt2\approx8.5$: a compromise. Same hardware, three different outcomes — the phase difference is a physical quantity, not mere bookkeeping.
</details>

## Remember

- SHM *is* the $x$-projection of uniform circular motion: radius → amplitude, rotation angle $\omega t+\phi$ → phase, angular speed → $\omega$.
- The projection satisfies $a=-\omega^2x$ exactly; three lines of differentiation prove it.
- To find $\phi$: $\cos\phi=x_0/A$ first, then let the sign of $v_0=-\omega A\sin\phi$ choose the quadrant.
- Same-line, same-frequency combination gives SHM of the same frequency with $R^2=A_1^2+A_2^2+2A_1A_2\cos\delta$; $\delta=0$ reinforces fully, $\delta=\pi$ cancels.
- Perpendicular equal-frequency SHMs trace straight lines, circles or ellipses depending on $\delta$ — the circle is the reference circle come home.

## Up next

Every oscillator so far has been frictionless and self-sustaining. Real ones spend energy and can be driven from outside. The next lesson, *Damped and forced oscillations*, adds the velocity-dependent drag term, shows the exponential decay envelope of the amplitude, and builds up to resonance — the phenomenon that decides whether your radio tunes or your bridge sways.
