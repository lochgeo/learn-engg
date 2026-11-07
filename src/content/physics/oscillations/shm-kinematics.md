## From condition to description

The last lesson defined SHM by an acceleration rule. Rules about acceleration are not convenient for answering "where is it, how fast is it moving, when does it reach the end?" — those are questions about position and velocity. So this lesson turns the condition $a=-\omega^2x$ into explicit **time formulas** $x(t)$, $v(t)$, $a(t)$, extracts their maximum values, and reads the whole story off graphs. The result $v=\pm\omega\sqrt{A^2-x^2}$, which gives the speed at any displacement without knowing the time, is the workhorse of exercises in this chapter.

## 1. The description: x(t) and its two cousins

An oscillator following $a=-\omega^2x$ moves as

$$
x=A\cos(\omega t+\phi),
$$

where $A$ is the amplitude, $\omega$ the angular frequency and $\phi$ the initial phase. (An equally common choice is $x=A\sin(\omega t+\phi)$; the difference is only a $\pi/2$ reshuffle of $\phi$, and every result below looks the same.) Differentiating with respect to time gives velocity and acceleration:

$$
v=\frac{dx}{dt}=-\omega A\sin(\omega t+\phi),
\qquad
a=\frac{d^2x}{dt^2}=-\omega^2A\cos(\omega t+\phi).
$$

The acceleration expression is just $-\omega^2x$, which is exactly the defining condition — a satisfying consistency check, and the proof that the cosine form really is the solution of $a=-\omega^2x$.

## 2. Maximum values: where they happen

Read the magnitudes straight off the sine and cosine:

$$
|v|_{\max}=\omega A,
\qquad
|a|_{\max}=\omega^2A.
$$

**Where they occur is the repeated trap.** The speed is greatest, $|v|=\omega A$, at the **equilibrium position** $x=0$ — where acceleration is momentarily zero and the oscillator is simply coasting through. At the extremes $x=\pm A$ the velocity is zero and the acceleration has its largest magnitude $\omega^2A$. So maxima of $v$ and $a$ never occur at the same place: velocity peaks at the centre, acceleration peaks at the ends. In coordinate form,

$$
v=\pm\omega\sqrt{A^2-x^2},
$$

because $\sin^2=1-\cos^2$. This "speed as a function of position" is derived again from energy in the next lesson and is worth memorising as a formula: it answers "how fast at $x=\,?$" with no need to find $t$ first.

## 3. One cycle, quarter by quarter

Take the simplest case, $x=A\cos\omega t$ (released from rest at $+A$):

| Clock time | Displacement $x$ | Velocity $v$ | Acceleration $a$ |
| --- | --- | --- | --- |
| $t=0$ | $+A$ | $0$ | $-\omega^2A$ |
| $t=T/4$ | $0$ | $-\omega A$ (moving toward negative extreme) | $0$ |
| $t=T/2$ | $-A$ | $0$ | $+\omega^2A$ |
| $t=3T/4$ | $0$ | $+\omega A$ (moving toward positive extreme) | $0$ |
| $t=T$ | $+A$ | $0$ | $-\omega^2A$ |

The table is the graph in disguise, and it shows the **phase relations** clearly:

- **Acceleration is always *opposite* to displacement** (half a cycle, $\pi$, out of phase): $a=-\omega^2x$ at every instant, so wherever $x$ is positive, $a$ is negative.
- **Velocity is a quarter cycle ($\pi/2$) out of step with displacement.** When $x$ peaks, $v$ is passing through zero; when $x$ passes through zero, $|v|$ is at its largest. In the cosine convention above, $v=-\omega A\sin\omega t=\omega A\cos(\omega t+\pi/2)$: the velocity leads the displacement by $\pi/2$ in phase.

## 4. Reading and drawing the graphs

- The $x$–$t$ graph is a cosine curve oscillating between $+A$ and $-A$; successive equal maxima are one period apart.
- The $v$–$t$ graph is the same wave shifted by a quarter period, with amplitude $\omega A$; it crosses zero exactly when $x$ has its extremes.
- The $a$–$t$ graph is the $x$–$t$ graph flipped upside down and scaled by $\omega^2$: $a$–$t$ crosses zero exactly when $x$ is zero.

A quick self-test while sketching: mark where the oscillator *turns around* (the extremes). There $v$ must be zero and $|a|$ must be a maximum. If your sketch shows a nonzero velocity at a turning point, the phase bookkeeping has slipped.

<learning-block type="mistake" title="Maximum velocity at maximum displacement?">

The most common single error in SHM: assuming $v$ is largest at $x=\pm A$ because that is "where it is going fastest". It is the opposite. At the extremes the oscillator has come *to rest for an instant* — $v=0$ — while acceleration is at its peak. Speed is greatest at the centre. Checking $|v|_{\max}=\omega A$ against the snapshot table in Section 3 settles it every time. A related slip: writing $v_{\max}=\sqrt{2}\,\omega A$ or $v_{\max}=\omega A/\sqrt2$ — no; the peak values are plain $\omega A$ and $\omega^2A$.

</learning-block>

## 5. Timing from the phase

Because equal phase steps take equal clock steps ($\Delta t=\Delta\varphi/\omega$), times between milestones come from geometry alone. Starting the clock at the mean position moving in the $+x$ direction ($x=A\sin\omega t$):

- reach $x=A/2$: $\sin\omega t=1/2\Rightarrow\omega t=\pi/6\Rightarrow t=T/12$;
- reach $x=A$: $\omega t=\pi/2\Rightarrow t=T/4$;
- so the run from $A/2$ to $A$ takes $T/4-T/12=T/6$.

Notice the rhythm: the oscillator covers the outer stretch from half-amplitude to the end in *twice* the time it spent crawling the inner stretch from rest position to half-amplitude — it lingers near the extremes. That is also why, in graphs of $x$–$t$, the curve is flattest at $\pm A$.

## Worked example

An oscillator has period $T=2.0\ \text{s}$ and amplitude $A=5.0\ \text{cm}$; take $x=A\cos\omega t$, released from rest at the positive extreme.

**Step 1 — angular frequency.** $\omega=2\pi/T=\pi\ \text{rad/s}\approx3.14\ \text{rad/s}$.

**Step 2 — position, velocity and acceleration at $t=T/8=0.25\ \text{s}$** (phase $\omega t=\pi/4$):

$$
x=5.0\cos(\pi/4)=5.0\,(0.707)=3.5\ \text{cm},
$$
$$
v=-\pi(5.0)\sin(\pi/4)\approx-11.1\ \text{cm/s},
$$
$$
a=-\omega^2x=-\pi^2(3.5)\approx-35\ \text{cm/s}^2.
$$

**Step 3 — sanity checks.** $|v|\le\omega A=\pi(5.0)=15.7\ \text{cm/s}$: satisfied (the oscillator has passed the centre and is decelerating on the way out — the negative sign fits). $|a|\le\omega^2A=\pi^2(5.0)\approx49.3\ \text{cm/s}^2$: satisfied. Also $a=-\omega^2x$ reproduces itself: $\pi^2(3.5)\approx34.5\ \text{cm/s}^2$, matching the differentiation route to rounding.

## Try it yourself

**1.** For the motion $x=4.0\cos(\pi t)$ with $x$ in cm: write $v(t)$ and $a(t)$, and find the speed when $x=2.0\ \text{cm}$.

<details><summary>Show the reasoning</summary>

Differentiating: $v=-4\pi\sin(\pi t)\ \text{cm/s}$ and $a=-4\pi^2\cos(\pi t)=-\pi^2 x\ \text{cm/s}^2$ (with $x$ in cm) — the defining condition with $\omega=\pi\ \text{rad/s}$. Peak values: $|v|_{\max}=4\pi\approx12.6\ \text{cm/s}$, $|a|_{\max}=4\pi^2\approx39.5\ \text{cm/s}^2$. When $x=2.0\ \text{cm}$, $|v|=\omega\sqrt{A^2-x^2}=\pi\sqrt{16-4}=\pi\sqrt{12}\approx10.9\ \text{cm/s}$.
</details>

**2.** An oscillator starts at the mean position and moves in the positive direction. What fraction of the period does it spend travelling between $x=+A/2$ and $x=+A$?

<details><summary>Show the reasoning</summary>

Using $x=A\sin\omega t$: the arrival at $A/2$ needs $t=T/12$; the arrival at $A$ needs $t=T/4$. The difference is $T/6$. As a fraction of the period, one sixth — twice the interval spent getting from $0$ to $A/2$.
</details>

**3.** Sketch $x$–$t$, $v$–$t$ and $a$–$t$ for one full period for an oscillator released from rest at the negative extreme $x=-A$.

<details><summary>Show the reasoning</summary>

Start at $x=-A$ from rest: the description is $x=-A\cos\omega t$, with $v=+\omega A\sin\omega t$ and $a=+\omega^2A\cos\omega t$. So: $x$–$t$ starts at its minimum, rises, crosses zero at $T/4$, peaks at $T/2$, and returns. The $v$–$t$ curve starts at zero, is *positive* (moving out of the negative region) through the first half-cycle, and negatives in the second half. The $a$–$t$ curve, from the defining rule: at $x=-A$, $a=+\omega^2A$ (pointing toward the centre), so $a$–$t$ starts positive, is zero at $T/4$ when $x=0$, dips negative at $T/2$, and returns. The universal pattern: $a$–$t$ mirrors the $x$–$t$ curve through the time axis; $v$–$t$ is shifted a quarter period from both.
</details>

## Remember

- The toolkit: $x=A\cos(\omega t+\phi)$, $v=-\omega A\sin(\omega t+\phi)$, $a=-\omega^2x$. Everything in this chapter is one derivative away from the previous line.
- $|v|_{\max}=\omega A$ occurs at $x=0$; $|a|_{\max}=\omega^2A$ occurs at $x=\pm A$. Never at the same place.
- Speed at any displacement needs no clock: $|v|=\omega\sqrt{A^2-x^2}$.
- Velocity is $\pi/2$ out of phase with displacement; acceleration is $\pi$ out of phase (always opposite).
- The oscillator lingers near the extremes: $0\to A/2$ takes $T/12$, but $A/2\to A$ takes $T/6$.

## Up next

Position and velocity are only half the story. Because a spring or pendulum continually trades kinetic energy for potential energy and back, the *energy* bookkeeping gives the shortest derivations in the chapter — including an independent proof of $|v|=\omega\sqrt{A^2-x^2}$ and the famous quarter-energy crossing at $x=A/\sqrt2$. That is the next lesson, *Energy in SHM*.
