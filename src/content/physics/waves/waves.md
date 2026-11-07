## Why waves deserve their own chapter

Drop a stone in a pond and the splash never reaches the shore — the ripples do. A concert travels across a hall of otherwise still air. In both cases something **moves from place to place** while the medium itself stays put. A wave is a travelling disturbance: it carries energy and momentum through a medium, while each piece of the medium merely oscillates about its own equilibrium. Everything in this chapter — wave speed, the wave equation, standing waves, beats, the Doppler effect — is built on the vocabulary defined in this lesson.

## 1. The disturbance travels; the matter does not

Watch a floating leaf as ripples pass: it bobs up and down and never drifts to the bank. The water does not flow from the splash to the shore. What travels is a **disturbation** — a displacement, or a pressure change — and the medium only hands it on. For a wave to exist at all, the medium needs two properties:

- **inertia**: mass, so a disturbed element overshoots equilibrium and keeps oscillating;
- **elasticity**: a restoring interaction, so a displaced element is pulled back toward its rest position.

These two properties together fix how fast the pattern travels. They also explain why wind is not a wave: wind is the medium itself flowing, while a water wave is a disturbance moving *through* water.

## 2. Transverse and longitudinal waves

Classify any wave by the direction in which the medium oscillates compared with the direction of propagation.

- **Transverse wave:** particles oscillate *perpendicular* to the direction of travel. Flick one end of a stretched rope: the pulse runs along the rope while each piece of rope moves up and down. Electromagnetic waves (light) are transverse, and they need no material medium at all.
- **Longitudinal wave:** particles oscillate *parallel* to the direction of travel, so the disturbance consists of **compressions** (where the medium is squeezed) alternating with **rarefactions** (where it is stretched thin). Sound in air is longitudinal.

A mechanical transverse wave needs a medium that can sustain shear (a sideways restoring force). Gases and ordinary liquids have essentially no shear rigidity, which is why sound in air is always longitudinal and why a transverse mechanical wave simply cannot cross a deep body of water or a room of air. Surface water waves are a mixture of both types, which is why floating debris traces small loops rather than straight lines.

## 3. Amplitude, wavelength, frequency, period

Four numbers describe a simple sinusoidal wave.

| Quantity | Symbol | Meaning | SI unit |
| --- | --- | --- | --- |
| Amplitude | $A$ | Maximum displacement of a medium particle from equilibrium | metre |
| Wavelength | $\lambda$ | Distance between two neighbouring points in the same phase — crest to crest, for example | metre |
| Period | $T$ | Time for one complete oscillation of a particle; also the time for the pattern to advance one wavelength | second |
| Frequency | $f$ | Cycles per second, $f=1/T$ | hertz |

The **source** determines the frequency: a tuning fork completing 512 vibrations per second forces the air to vibrate at 512 Hz. The source also fixes the amplitude, which measures how much energy the wave carries — wave intensity grows as the square of the amplitude, a bookkeeping rule used later in the interference lesson. The wavelength, by contrast, is a *consequence*: it comes out of the source frequency combined with whatever speed the medium allows. Audible sound spans wavelengths from roughly $17\ \text{m}$ at $20\ \text{Hz}$ down to $17\ \text{mm}$ at $20\ \text{kHz}$ in air.

## 4. Snapshots and strip charts

A wave can be drawn two ways, and JEE questions exploit the difference.

- **Snapshot (y against x, at fixed t):** the shape of the whole medium frozen at one instant. It shows crests, troughs and the wavelength $\lambda$ directly.
- **Strip chart (y against t, at fixed position):** the history of one particle. It repeats every period $T$ and shows the amplitude $A$, but carries no wavelength information at all.

Keep the axes straight: $\lambda$ lives on the position axis, $T$ on the time axis. A snapshot taken $\Delta t=\tfrac{T}{4}$ later is the same curve shifted along $x$ by $v\Delta t=\tfrac{\lambda}{4}$ — the visual form of $v=f\lambda$. Sound, being invisible, is usually introduced through ropes, springs and water surfaces, where the snapshot and strip chart can be seen directly.

## 5. The master relation v = fλ

In one period $T$, the wave pattern advances exactly one wavelength $\lambda$. Since speed is distance divided by time,

$$
v=\frac{\lambda}{T}=f\lambda .
$$

There is no new physics hidden in this equation: it is geometry plus the definitions of $T$, $\lambda$ and $v$. Two consequences are worth fixing in mind now, because the rest of the chapter leans on them.

1. **The speed is a property of the medium.** Change the tension of a string, the temperature of the air, or swap the air for water, and $v$ changes. Changing the source does nothing to $v$.
2. **Frequency survives a change of medium; wavelength does not.** When a sound passes from air into water the air and water stay in step at the boundary, so $f$ is unchanged, while $v$ rises and $\lambda$ grows in the same proportion.

The lesson after next dissects what sets $v$ in strings, gases and solids. Before that, the next lesson compresses this whole picture into one powerful formula, $y=A\sin(kx-\omega t+\phi)$.

<learning-block type="example" title="Worked example">

A sound wave in air has frequency $500\ \text{Hz}$ and wavelength $0.68\ \text{m}$. Find its speed, and the period of one particle oscillation.

$$
v=f\lambda=(500)(0.68)=340\ \text{m/s},
\qquad
T=\frac{1}{f}=\frac{1}{500}=2.0\times10^{-3}\ \text{s}.
$$

Sanity check: $340\ \text{m/s}$ is the everyday speed of sound near room temperature, and a period of $2\ \text{ms}$ is a plausible fraction of a second for a mid-range note. The numbers hang together.

</learning-block>

<learning-block type="mistake" title="Where beginners slip">

- **Confusing wave speed with particle speed.** The wave pattern races along at $v$; each particle merely wiggles about its rest position with a speed that varies with time (its maximum is derived in the next lesson). They are different quantities with different behaviours.
- **Assuming faster frequency means faster wave.** Doubling the source frequency at fixed $v$ halves the wavelength. The speed does not care about the source.
- **Mixing units in $v=f\lambda$.** A frequency quoted in kHz or a wavelength in cm must be converted to SI before multiplying.
- **Cyclicity slip.** $T$ and $f$ are reciprocals, so $f=50\ \text{Hz}$ means $T=0.02\ \text{s}$, not $50\ \text{s}$ or $0.5\ \text{s}$.

</learning-block>

## Try it yourself

**A.** An AM radio station broadcasts at $1000\ \text{kHz}$. Taking radio-wave speed as $3\times10^{8}\ \text{m/s}$, find the wavelength of its signal.

<details><summary>Show the reasoning</summary>

$$
\lambda=\frac{v}{f}=\frac{3\times10^{8}\ \text{m/s}}{1.0\times10^{6}\ \text{Hz}}=300\ \text{m}.
$$

This is why AM antennas are enormous and AM signals bend around hills: at a few hundred metres, the wavelength is comparable to landscape features.
</details>

**B.** Ocean swells arrive with a crest-to-crest distance of $15\ \text{m}$ and a period of $3.0\ \text{s}$. Find their speed and frequency.

<details><summary>Show the reasoning</summary>

$$
v=\frac{\lambda}{T}=\frac{15}{3.0}=5.0\ \text{m/s},
\qquad
f=\frac{1}{T}=\frac{1}{3.0}\approx0.33\ \text{Hz}.
$$

A swell repeats about once every three seconds, yet the pattern sweeps past at a brisk walking-to-running pace. The low frequency does not mean a slow wave, because the wavelength is large.
</details>

**C.** A wave travels $480\ \text{m}$ in $4.0\ \text{s}$. A point of the medium completes $120$ oscillations each second. Find the wavelength.

<details><summary>Show the reasoning</summary>

First get the speed from the journey: $v=480/4.0=120\ \text{m/s}$. Then

$$
\lambda=\frac{v}{f}=\frac{120}{120}=1.0\ \text{m}.
$$

Notice the strategy: use travel time to find $v$, then $v=f\lambda$ to convert a motion fact into a shape fact.
</details>

## Remember

- A wave transports **energy and disturbance**, never the bulk medium; particles just oscillate.
- Transverse means oscillation across the travel direction; longitudinal means along it. Sound in air is longitudinal; light is transverse.
- $v=f\lambda$ converts between speed, frequency and wavelength — always with SI units.
- The **medium** fixes $v$; the **source** fixes $f$; $\lambda$ is the result of the two. On entering a new medium, $f$ persists and $\lambda$ changes.
- Next lesson: one equation that encodes amplitude, wavelength, frequency, speed, direction and phase all at once — the progressive wave equation.
