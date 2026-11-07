## Why stable things bounce back

Disturb a guitar string, a twig bearing a bird, or an atom sitting in its groove of a crystal, and each one returns to where it was — and overshoots, again and again. That repetitive behaviour is not an accident of design. Whenever a system has a **stable equilibrium**, pushing it away creates a force that points back toward the equilibrium, and releasing it lets stored energy pour back into motion. The result is a to-and-fro motion that repeats: an **oscillation**.

Because the same mechanism — restore, overshoot, restore — appears everywhere, one compact mathematical model describes springs, pendulums, guitar strings, vibrating molecules and the quivering of buildings in a gale. That model is **simple harmonic motion (SHM)**. This chapter builds it piece by piece; this lesson fixes the vocabulary and the one defining condition from which everything else follows.

## 1. The vocabulary of repetition

Any motion that repeats itself at regular intervals is **periodic**. If the repetition is a back-and-forth movement about a fixed equilibrium position, it is **oscillatory** (or *vibrational*). So every oscillatory motion is periodic, but not every periodic motion is oscillatory — a planet orbiting the Sun is periodic, but it never reverses direction, so it is not oscillatory.

To describe any such motion completely you need a small set of words:

| Quantity | Symbol | Meaning | SI unit |
| --- | --- | --- | --- |
| Period | $T$ | Time for one complete cycle | s |
| Frequency | $f$ | Number of cycles per second, $f=1/T$ | hertz, $\text{Hz}=\text{s}^{-1}$ |
| Angular frequency | $\omega$ | $2\pi$ times the frequency: $\omega=2\pi f=2\pi/T$ | rad/s |
| Amplitude | $A$ | Maximum displacement from the equilibrium position | m |
| Phase | $\omega t+\phi$ | Which point of the cycle the oscillator is in | rad |

Two remarks on phase, because it trips people up. First, for an oscillator described by $x=A\cos(\omega t+\phi)$, the whole expression $\omega t+\phi$ is the **phase** — a clock hand inside the formula that sweeps through $2\pi$ radians each cycle. Second, $\phi$ is the **initial phase** (also called the phase constant or epoch): it fixes where in the cycle the motion started. Two identical pendulums released at different moments differ only in $\phi$; they keep step forever, separated by a constant phase difference.

<learning-block type="check" title="Micro-check">

A heart beats 72 times per minute. Its frequency is $f=72/60=1.2\ \text{Hz}$, its period is $T=1/f\approx0.83\ \text{s}$, and its angular frequency is $\omega=2\pi f\approx7.5\ \text{rad/s}$. Note that $\omega$ is *not* the number of beats per second — that is $f$; the factor $2\pi$ is the price of describing the cycle with a circular phase.

</learning-block>

## 2. The defining condition: a = −ω²x

Simple harmonic motion is **defined by its acceleration**, not by the shape of its graph:

$$
a=-\omega^2 x,
$$

that is, *the acceleration is proportional to the displacement from equilibrium and always points toward it*. The constant of proportionality is written $\omega^2$ for a reason you will confirm in Lesson 4: when a force obeys Hooke's law, $F=-kx$, Newton's second law gives $a=-(k/m)x$, so $\omega^2=k/m$ and $\omega$ really is the angular frequency of the motion.

The minus sign is the whole physics. With $x$ measured from the equilibrium position:

- $x>0$: acceleration is negative — pointing back toward the centre.
- $x<0$: acceleration is positive — again pointing back toward the centre.
- $x=0$: acceleration is zero, but *velocity need not be*: the oscillator is moving fastest through its equilibrium.

Check the dimensions: $[\omega^2 x]=\text{s}^{-2}\,\text{m}=\text{m/s}^2$. Good.

The defining condition is precise: acceleration proportional to displacement, opposite in direction. If a restoring force were, say, proportional to $x^2$ or inversely proportional to $x$, the motion would be periodic but *not* simple harmonic. Whenever a question says "an object executes SHM", you are licensed to write $a=-\omega^2x$ and nothing more exotic.

## 3. Why every smooth minimum is a spring

Here is the reason the same model keeps reappearing. Near any stable equilibrium $x_0$, the potential energy curve has a minimum, so it can be approximated by the opening of a parabola:

$$
U(x)\approx U_0+\frac12\,k_{\text{eff}}(x-x_0)^2,
\qquad
k_{\text{eff}}=\left.\frac{d^2U}{dx^2}\right|_{x_0}>0.
$$

Because force is $F=-dU/dx$, this parabolic potential produces a restoring force $F=-k_{\text{eff}}(x-x_0)$ — Hooke's law again. So **small oscillations about any stable equilibrium are approximately SHM**. The pendulum is harmonic only for small angles because its potential, $mgL(1-\cos\theta)$, is parabolic in $\theta$ only to leading order. A vibrating molecule, a wobbling table leg, a bowed building: shift the origin, read off $k_{\text{eff}}$, and the machinery of SHM applies — until the amplitude grows so large that the curvature of $U$ changes appreciably, at which point the motion is still periodic but no longer simple harmonic.

## 4. The projection picture

There is a second way to *see* SHM, and it explains the name "angular frequency". Imagine a point $Q$ moving at constant speed around a circle of radius $A$, and follow the shadow of $Q$ on a diameter of the circle. As $Q$ sweeps round uniformly, its shadow slides from one end to the other and back, slowing at the ends and speeding through the middle — exactly the rhythm of SHM. In symbols, if $Q$'s position vector makes angle $\omega t+\phi$ with the axis, the shadow's position is

$$
x=A\cos(\omega t+\phi),
$$

and the sideways acceleration of the shadow works out to $-\omega^2x$: the defining condition. Every simple harmonic motion is the one-dimensional shadow of a uniform circular motion, which is also why simple harmonic motion needs no torque, no spin — only a quadratic restoring force. The full derivation, including how to read the initial phase off the circle and how to combine two SHMs, is the subject of the lesson *SHM and uniform circular motion*.

## Worked example

A loudspeaker cone reproducing a $440\ \text{Hz}$ tone (the note A above middle C) moves with amplitude $1.0\ \text{mm}$. Find the period, the angular frequency and the maximum acceleration of the cone.

**Step 1 — period.** $T=1/f=1/440\approx2.3\times10^{-3}\ \text{s}=2.3\ \text{ms}$.

**Step 2 — angular frequency.** $\omega=2\pi f=2\pi(440)\approx2.8\times10^3\ \text{rad/s}$.

**Step 3 — maximum acceleration.** In SHM the acceleration is largest where $|x|$ is largest, $|a|_{\max}=\omega^2A$:

$$
|a|_{\max}=(2.8\times10^3)^2(1.0\times10^{-3})\approx7.6\times10^6\ \text{m/s}^2.
$$

**Sanity check.** That is about $7.8\times10^5$ times $g$ — startling, but correct: at $440\ \text{Hz}$ the cone must reverse its velocity hundreds of times a second over a $2\ \text{mm}$ stroke, so enormous peak accelerations are unavoidable. The magnitudes are large because the frequency is large; nothing here violates any limit.

<learning-block type="mistake" title="Amplitude is not displacement, and ω is not f">

Two slips recur in every exam hall. First, learners read "$x=3\ \text{cm}$" and call it the amplitude. Displacement changes from $+A$ to $-A$ during the motion; amplitude $A$ is the *fixed maximum* of $|x|$. Second, formulas carry the symbol they mean: $v_{\max}=\omega A$ and $a_{\max}=\omega^2A$ use **angular frequency**. Substituting $f$ (or the period $T$) there gives wrong answers by a factor of $2\pi$ or $(2\pi)^2$. Convert first: $\omega=2\pi/T=2\pi f$.

</learning-block>

## Try it yourself

**1.** A pendulum completes 20 full oscillations in 36 s. Find its period, frequency and angular frequency.

<details><summary>Show the reasoning</summary>

One oscillation is one complete cycle, so $T=36/20=1.8\ \text{s}$. Then $f=1/T=1/1.8\approx0.56\ \text{Hz}$ and $\omega=2\pi/T=2\pi/1.8\approx3.5\ \text{rad/s}$.
</details>

**2.** An oscillator satisfies $a=-(25\ \text{s}^{-2})x$ with $x$ in metres. Find its period, and its acceleration at $x=2.0\ \text{mm}$.

<details><summary>Show the reasoning</summary>

Matching with $a=-\omega^2x$ gives $\omega=25\ \text{rad/s}$, so $T=2\pi/\omega=2\pi/25\approx0.25\ \text{s}$. At $x=2.0\times10^{-3}\ \text{m}$, $a=-25(2.0\times10^{-3})=-5.0\times10^{-2}\ \text{m/s}^2$: magnitude $0.050\ \text{m/s}^2$, directed toward the equilibrium position.
</details>

**3.** Two identical pendulums hang side by side. One is pulled aside and released from rest; the other is thumped at the bottom of its swing while hanging vertically. Must their periods differ, given one started at an extreme and the other at the centre?

<details><summary>Show the reasoning</summary>

No. The period of an ideal oscillator depends on the system's properties ($T=2\pi\sqrt{L/g}$ for a pendulum), not on *how* it was started. Different starts mean different amplitudes and different initial phases — the released pendulum begins at phase when $x=A$, the thumped one at $x=0$ — but each cycle still takes the same time. Phase locates you *within* the cycle; it does not stretch or shrink the cycle.
</details>

## Remember

- Periodic means *repeats at equal intervals*; oscillatory means *repeats while moving back and forth about an equilibrium*.
- The period, frequency and angular frequency are locked together: $f=1/T$ and $\omega=2\pi f=2\pi/T$. Convert once, then keep using $\omega$.
- SHM is defined by $a=-\omega^2x$: restoring acceleration proportional to displacement, opposite in direction.
- Near any stable equilibrium, small displacements feel an approximately parabolic potential, so *small oscillations about stability are SHM* — the approximations fail at large amplitude.
- The period depends on the system, never on how the motion was started; the start fixes only amplitude and initial phase.

## Up next

The defining condition is about acceleration, but exam questions live downstream of it: positions, speeds and times. The next lesson, *Displacement, velocity and acceleration in SHM*, differentiates the sinusoidal motion explicitly, works out where $v$ and $a$ peak, and shows how to get speed at any displacement — the single most used result of the chapter.
