## Metals do not give up their electrons easily

In a metal, the outer (valence) electrons are shared in a “sea”, but they are still bound to the material. Pulling one out through the surface costs energy. That minimum energy is called the **work function** $\phi$ of the metal, measured in electron-volts (eV). Different metals have different $\phi$; for example, sodium is about $2.3\ \text{eV}$ and platinum about $5.6\ \text{eV}$. Electron emission is any process that supplies at least this much energy to an electron at the surface so that it escapes.

## 1. Four common routes to electron emission

- **Thermionic emission** — heating the metal gives its electrons enough thermal energy to overcome $\phi$. Used in vacuum tubes and cathode-ray tubes.
- **Field emission** (cold emission) — a very strong electric field at a sharp surface pulls electrons out by quantum tunnelling, without heating.
- **Photoelectric emission** — light of suitable frequency shines on the metal and ejects electrons. This is the subject of this chapter.
- **Secondary emission** — a beam of fast electrons (or ions) strikes the surface and knocks out further electrons.

All four are governed by the same idea: an electron escapes only when the energy delivered to it is at least $\phi$.

## 2. The photoelectric experiment

A typical arrangement: a photosensitive metal plate (emitter) and a collector plate are sealed in an evacuated glass tube. Monochromatic light of known frequency $\nu$ and intensity $I$ falls on the emitter. A variable potential difference $V$ is applied between emitter and collector, and the resulting **photocurrent** is measured.

By making the collector negative relative to the emitter, electrons are repelled. The potential at which the photocurrent just falls to zero is the **stopping potential** $V_0$; it measures the maximum kinetic energy of the emitted electrons.

## 3. The laws of photoelectric emission

Experiments give four laws that any theory must explain.

1. **Threshold frequency.** Emission occurs only if the light frequency $\nu$ is at least a minimum $\nu_0$ (the threshold frequency). Below $\nu_0$, no electrons are emitted, however intense the light. Each metal has its own $\nu_0$.
2. **Intensity and number.** For $\nu\ge\nu_0$, the photocurrent is directly proportional to the light intensity: doubling the intensity doubles the number of photoelectrons emitted per second.
3. **Frequency and energy.** The maximum kinetic energy of a photoelectron depends on the frequency of the light and on the metal’s work function, but **not** on the intensity.
4. **Instantaneous emission.** There is no measurable time lag between the arrival of light and the emission of electrons, even at very low intensities.

## 4. Why the classical wave picture fails

If light were a continuous wave spreading its energy over the whole illuminated surface, three contradictions would arise:

- Any frequency should eventually eject electrons, given enough time for energy to accumulate — but a threshold frequency exists.
- Higher intensity should give each electron more energy — but the maximum kinetic energy is independent of intensity.
- At low intensity, energy would take time to build up to $\phi$ — but emission is instantaneous.

These contradictions are not small corrections; they show that light energy is delivered in concentrated packets, not spread continuously. That conclusion leads to the photon and to Einstein’s equation in the next module.

## 5. Worked example: threshold wavelength of a metal

Sodium has a work function $\phi = 2.3\ \text{eV}$. Find its threshold frequency and threshold wavelength.

Convert $\phi$ to joules: $\phi = 2.3\times 1.60\times10^{-19}=3.68\times10^{-19}\ \text{J}$.

Threshold frequency:
$$
\nu_0=\frac{\phi}{h}=\frac{3.68\times10^{-19}}{6.626\times10^{-34}}
=5.55\times10^{14}\ \text{Hz}.
$$

Threshold wavelength:
$$
\lambda_0=\frac{c}{\nu_0}=\frac{3.00\times10^{8}}{5.55\times10^{14}}
=5.40\times10^{-7}\ \text{m}=540\ \text{nm}.
$$

Sanity check: $540\ \text{nm}$ is green-yellow visible light. Light with wavelength shorter than $540\ \text{nm}$ (higher frequency) can eject electrons from sodium; longer-wavelength red light cannot, no matter how bright.

<learning-block type="mistake" title="Photoelectric mistakes">

- Treating intensity as energy per photon. Intensity counts photons; energy per photon is $h\nu$.
- Assuming a time lag at low intensity. Emission is instantaneous once $\nu\ge\nu_0$.
- Mixing units, for example using $\phi$ in eV with $h$ in J·s without converting.

</learning-block>

## Try it yourself

**A.** A metal has work function $2.0\ \text{eV}$. Find its threshold wavelength.

<details><summary>Show the reasoning</summary>

$\phi=2.0\times1.60\times10^{-19}=3.20\times10^{-19}\ \text{J}$.

$$
\lambda_0=\frac{hc}{\phi}
=\frac{(6.626\times10^{-34})(3.00\times10^8)}{3.20\times10^{-19}}
=6.21\times10^{-7}\ \text{m}=621\ \text{nm}.
$$

</details>

**B.** Light of wavelength $500\ \text{nm}$ falls on the metal in A. Is photoelectric emission possible?

<details><summary>Show the reasoning</summary>

The threshold wavelength is $621\ \text{nm}$. Since $500\ \text{nm}<621\ \text{nm}$, the frequency is above threshold, so emission is possible. (Equivalently, the photon energy $hc/\lambda = 2.48\ \text{eV}$ exceeds $\phi=2.0\ \text{eV}$.)

</details>

**C.** Explain, in one sentence, why doubling the intensity of above-threshold light doubles the photocurrent but does not change the maximum kinetic energy of the electrons.

<details><summary>Show the reasoning</summary>

Doubling the intensity doubles the number of photons arriving per second, so twice as many electrons are ejected, but each photon still carries the same energy $h\nu$, so each electron receives the same maximum energy.

</details>

## Remember

- Electron emission requires supplying at least the work function $\phi$.
- Photoelectric emission has a threshold frequency; below it, no emission occurs.
- Photocurrent $\propto$ intensity (for $\nu\ge\nu_0$); maximum kinetic energy $\propto$ frequency, independent of intensity.
- Emission is instantaneous, which contradicts a continuous-wave energy build-up.
- The threshold wavelength is $\lambda_0=hc/\phi$.

The next module turns these observations into Einstein’s photoelectric equation and introduces the photon as a particle of light.