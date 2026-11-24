## Testing de Broglie’s hypothesis with electrons

De Broglie’s relation $\lambda=h/p$ is a bold claim: a particle such as an electron should diffract like a wave. The Davisson–Germer experiment (1927) provided the direct test. Low-energy electrons were scattered from a nickel crystal, and the scattered intensity showed a peak that only a wave explanation could account for. This module reconstructs that test.

## 1. The experimental arrangement

- An **electron gun** accelerates electrons through a known potential difference $V$, so their de Broglie wavelength is fixed by $V$.
- The beam strikes a **nickel single crystal** (the target), whose atomic planes act as a natural diffraction grating.
- A **movable detector** measures the intensity of electrons scattered at various angles, all inside an evacuated chamber.

By changing $V$, the experimenters changed $\lambda$; by rotating the detector, they mapped the angular distribution. A wave prediction could then be compared with measurement.

## 2. What was observed

For an accelerating voltage of about $54\ \text{V}$, a strong peak in scattered electron intensity appeared at a scattering angle of about $50^{\circ}$. Classical particle scattering off a crystal lattice cannot produce such a sharp, voltage-dependent peak. The peak is a diffraction maximum.

## 3. Bragg’s law

When waves reflect from parallel planes of atoms separated by distance $d$, constructive interference occurs when

$$
n\lambda = 2d\sin\theta,
$$

where $\theta$ is the angle between the incident beam and the planes (the Bragg angle) and $n$ is the order. For the first order, $n=1$.

In the Davisson–Germer geometry the observed scattering angle of $50^{\circ}$ corresponds to a Bragg angle of about $65^{\circ}$ (the supplement, because the planes are oriented obliquely to the incident beam). Thus the test uses $\theta\approx 65^{\circ}$.

## 4. The verification

Step 1 — de Broglie wavelength for $V=54\ \text{V}$:
$$
\lambda_{\text{dB}}=\frac{1.227}{\sqrt{54}}
=0.167\ \text{nm}.
$$

Step 2 — Bragg wavelength from the crystal, with $d=0.091\ \text{nm}$ and $\theta=65^{\circ}$:
$$
\lambda_{\text{Bragg}}=2(0.091)\sin 65^{\circ}
=0.182\times 0.906
=0.165\ \text{nm}.
$$

The two values agree to within a few percent, well inside experimental uncertainty. The electrons behave as waves of exactly the wavelength de Broglie predicted. G. P. Thomson obtained the same conclusion independently by transmitting electrons through thin metal films and observing diffraction rings.

## 5. Why it matters

- It converted de Broglie’s hypothesis from a plausible idea into an experimentally established fact.
- It showed that wave behaviour is not limited to light; matter itself has a wave aspect.
- The same principle underlies the electron microscope and low-energy electron diffraction (LEED) used to study crystal surfaces.

<learning-block type="mistake" title="Bragg and Davisson–Germer mistakes">

- Using the detector’s scattering angle directly as $\theta$ in Bragg’s law.
- Forgetting the order $n$; the observed peak here is first order, $n=1$.
- Comparing wavelengths in different units without converting.

</learning-block>

## Try it yourself

**A.** Compute the de Broglie wavelength of electrons accelerated through $54\ \text{V}$.

<details><summary>Show the reasoning</summary>

$$
\lambda=\frac{1.227}{\sqrt{54}}
=\frac{1.227}{7.35}
=0.167\ \text{nm}.
$$

</details>

**B.** Using $d=0.091\ \text{nm}$ and $\theta=65^{\circ}$, compute the first-order Bragg wavelength and compare with A.

<details><summary>Show the reasoning</summary>

$$
\lambda=2d\sin\theta=2(0.091)\sin65^{\circ}=0.165\ \text{nm}.
$$

This matches the de Broglie value $0.167\ \text{nm}$ to within about $1\%$, confirming the matter-wave prediction.

</details>

**C.** If the accelerating voltage is increased above $54\ \text{V}$, what happens to the diffraction peak, and why?

<details><summary>Show the reasoning</summary>

Higher voltage means higher momentum and a shorter de Broglie wavelength. For the same crystal planes, Bragg’s law then requires a smaller $\theta$, so the diffraction peak shifts to a smaller scattering angle. This voltage dependence is itself evidence that the phenomenon is wave diffraction, not classical scattering.

</details>

## Remember

- The Davisson–Germer experiment observed electron diffraction from a nickel crystal.
- For $54\ \text{V}$ electrons, $\lambda_{\text{dB}}\approx0.167\ \text{nm}$, matching the Bragg wavelength $\approx0.165\ \text{nm}$.
- Bragg’s law $n\lambda=2d\sin\theta$ links the wavelength to the crystal spacing.
- The result established matter waves experimentally and supports electron microscopy and LEED.

The chapter’s review module now brings these four ideas together.