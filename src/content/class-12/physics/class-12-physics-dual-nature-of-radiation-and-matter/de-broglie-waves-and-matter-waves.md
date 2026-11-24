## If light can be a particle, matter can be a wave

De Broglie’s 1924 hypothesis turns Einstein’s photon idea around. Light, long treated as a wave, shows particle behaviour in the photoelectric effect. Therefore a particle such as an electron should also have a wave side. The hypothesis assigns to every particle of momentum $p$ a wavelength

$$
\lambda=\frac{h}{p}.
$$

For a non-relativistic particle of mass $m$ and speed $v$, $p=mv$, so

$$
\lambda=\frac{h}{mv}.
$$

This is the **de Broglie wavelength**. It is not a property of the particle alone; it depends on how fast the particle is moving.

## 1. Electrons accelerated through a potential difference

An electron accelerated from rest through a potential difference $V$ gains kinetic energy $K=eV$. Its momentum is $p=\sqrt{2m_e K}=\sqrt{2m_e eV}$, so

$$
\lambda=\frac{h}{\sqrt{2m_e eV}}.
$$

Putting in the constants gives the convenient form (for electrons, with $V$ in volts)

$$
\lambda \approx \frac{1.227}{\sqrt{V}}\ \text{nm}.
$$

Check the units: $h/\sqrt{2m_e eV}$ has dimensions of length, and the numerical constant carries $\text{nm·V}^{1/2}$.

## 2. When can a matter wave be observed?

A wave reveals itself by diffraction or interference, which needs an obstacle or grating with spacing comparable to $\lambda$. Crystal planes are separated by about $0.1\ \text{nm}$, so electrons with $\lambda\sim 0.1\ \text{nm}$ diffract from crystals. That is why electron diffraction is possible, and it is the content of the next module.

For everyday objects the wavelength is absurdly small. A $0.10\ \text{kg}$ ball moving at $20\ \text{m/s}$ has

$$
\lambda=\frac{6.626\times10^{-34}}{0.10\times20}
=3.3\times10^{-34}\ \text{m},
$$

far below any measurable length. Wave behaviour is universal but only shows at atomic masses or speeds.

## 3. Wave or particle? Context decides

The same object can behave as a wave in one experiment and as a particle in another. An electron diffracted by a crystal is a wave; the same electron counted by a detector is a particle. The two descriptions are complementary: the experimental arrangement selects which aspect appears. This is not a contradiction but a feature of quantum objects.

## 4. Standing waves and Bohr’s orbits

De Broglie’s idea gives a physical reason for Bohr’s quantisation. If an electron wave wraps around a circular orbit of radius $r$, it survives only when a whole number of wavelengths fits the circumference:

$$
2\pi r = n\lambda_{\text{de Broglie}} = n\frac{h}{mv}.
$$

Rearranging,

$$
mvr=\frac{nh}{2\pi},
$$

which is exactly Bohr’s angular-momentum quantisation. The allowed orbits are the resonant standing waves of the electron.

## 5. Phase velocity and group velocity

A matter wave has a phase velocity $v_p=\omega/k$ and a group velocity $v_g=d\omega/dk$. Using $E=h\nu$ and $p=h/\lambda$ (so $\omega=E/\hbar$, $k=p/\hbar$):

- $v_p=\omega/k=E/p$. For a free particle $E=p^2/(2m)$, so $v_p=p/(2m)=v/2$ in the non-relativistic case? Wait—let us be careful. With the relativistic relation $E^2=(pc)^2+(mc^2)^2$, the phase velocity is $E/p$, which exceeds $c$; it carries no information.
- The group velocity is $v_g=dE/dp=p/m=v$, the actual speed of the particle.

The particle is associated with the **group** (the envelope) of the wave, not with individual crests. The group velocity equals the classical particle velocity, which is why a wave packet follows the classical trajectory.

*(For non-relativistic free particles, $E=p^2/2m$, so $v_p=p/2m=v/2$ and $v_g=p/m=v$.)*

## 6. Worked examples

**Example 1 — electron at 100 V.**
$$
\lambda=\frac{1.227}{\sqrt{100}}=0.1227\ \text{nm}=1.23\times10^{-10}\ \text{m}.
$$
This is the size of an atom, so such electrons diffract from crystals. Sanity check: the same formula at $10\,000\ \text{V}$ gives $0.0123\ \text{nm}$, ten times shorter, as expected for higher momentum.

**Example 2 — a cricket ball.**
A $0.15\ \text{kg}$ ball at $30\ \text{m/s}$:
$$
\lambda=\frac{6.626\times10^{-34}}{0.15\times30}
=1.5\times10^{-34}\ \text{m}.
$$
This is about $10^{19}$ times smaller than an atomic nucleus. No experiment can detect it; the ball behaves classically.

<learning-block type="mistake" title="de Broglie mistakes">

- Using kinetic energy directly instead of momentum: $\lambda=h/\sqrt{2mK}$, not $h/K$.
- Forgetting that $\lambda$ depends on speed; a stationary particle has no well-defined de Broglie wavelength.
- Expecting measurable diffraction from macroscopic objects whose wavelength is astronomically small.

</learning-block>

## Try it yourself

**A.** Find the de Broglie wavelength of an electron accelerated through $225\ \text{V}$.

<details><summary>Show the reasoning</summary>

$$
\lambda=\frac{1.227}{\sqrt{225}}=\frac{1.227}{15}=0.0818\ \text{nm}=8.18\times10^{-11}\ \text{m}.
$$

</details>

**B.** An electron and a proton have the same kinetic energy. Which has the longer de Broglie wavelength, and why?

<details><summary>Show the reasoning</summary>

$\lambda=h/\sqrt{2mK}$, so for the same $K$ the lighter particle has the longer wavelength. The electron (mass $9.11\times10^{-31}\ \text{kg}$) is far lighter than the proton, so its wavelength is longer and its wave behaviour is more pronounced.

</details>

**C.** Show that the Bohr quantisation condition $mvr=nh/2\pi$ follows from fitting $n$ de Broglie wavelengths around the orbit circumference.

<details><summary>Show the reasoning</summary>

Fit condition: $2\pi r=n\lambda=n h/(mv)$. Divide both sides by $n$ and rearrange: $mv(2\pi r/n)=h$, i.e. $mvr=nh/(2\pi)$. Thus Bohr’s rule is a standing-wave resonance condition.

</details>

## Remember

- Every particle has $\lambda=h/p=h/(mv)$ (non-relativistic).
- For an electron accelerated through $V$ volts: $\lambda\approx 1.227/\sqrt{V}\ \text{nm}$.
- Matter waves are observable only when $\lambda$ is comparable to the size of the obstacle or aperture.
- The same object shows wave or particle behaviour depending on the experiment.
- Bohr’s quantisation reappears as a standing-wave condition on the orbit.
- The particle’s speed is the group velocity of its wave packet.

The next module tests this hypothesis directly with the Davisson–Germer experiment.