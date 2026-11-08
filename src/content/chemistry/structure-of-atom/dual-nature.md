## If light can be a particle, can matter be a wave?

By 1924 physics had a split personality about light: interference and the previous module's photoelectric effect had shown decisively that radiation is *both* a wave and a stream of photons. Louis de Broglie turned the logic around. If waves can masquerade as particles, then the universe's particles — electrons, atoms, you — should also have a wave side. He asked what wavelength a particle of momentum $p=mv$ ought to have, and answered that it should mirror the photon's relation $p=h/\lambda$:

$$
\lambda=\frac{h}{p}=\frac{h}{mv}.
$$

This is the **de Broglie wavelength**. It contains Planck's constant in the numerator, and its whole character follows from how tiny $h$ is.

## 1. How big is a matter wave?

### Worked example 1: an electron and a cricket ball

An electron accelerated through $100\ \text{V}$ gains kinetic energy $eV=100\ \text{eV}=1.60\times10^{-17}\ \text{J}$. From $\lambda=h/\sqrt{2mK}$:

$$
\lambda=\frac{6.626\times10^{-34}\ \text{J s}}{\sqrt{2(9.11\times10^{-31}\ \text{kg})(1.60\times10^{-17}\ \text{J})}}=\frac{6.626\times10^{-34}}{5.40\times10^{-24}}=1.23\times10^{-10}\ \text{m}=123\ \text{pm}.
$$

A hundred and twenty picometres — the size of an atom. Electron waves are the right size to interfere with atoms and crystal planes.

Now a $0.15\ \text{kg}$ cricket ball at $30\ \text{m s}^{-1}$:

$$
\lambda=\frac{6.626\times10^{-34}}{0.15\times30}=\frac{6.626\times10^{-34}}{4.5}=1.5\times10^{-34}\ \text{m}.
$$

This is about ten billion billion times smaller than an atomic nucleus — smaller than any measurable length. No experiment can ever detect it. **Wave behaviour is universal, but only spreads its effects at atomic masses or tiny speeds.** That is why the world looks particle-like to us.

Sanity check: $\sqrt{2mK}$ is the momentum; for the electron that momentum is $5.40\times10^{-24}\ \text{kg m s}^{-1}$, and dividing $h$ by it legitimately gave a length in metres.

## 2. Electron diffraction: the verdict of experiment

If electrons are waves, they should diffract from a grating with spacing comparable to their wavelength. Crystals provide exactly that: atomic planes separated by about $10^{-10}\ \text{m}$ — the scale found above. Davisson and Germer (1927) fired low-energy electrons at a nickel crystal and observed diffraction maxima at precisely the angles de Broglie's formula predicted. G. P. Thomson obtained the same conclusion with thin metal films: diffraction rings of transmitted electrons, the unmistakable signature of waves. An electron deflected by a field is a particle; the same electron patterned by a crystal is a wave — the **dual nature** is not a metaphor but two repeatable experiments on one object.

## 3. Redemption for Bohr's orbits

De Broglie's idea also *explains* why orbits are quantised. Picture the electron wave wrapped around the circular orbit. A wave that does not meet itself in step dies out by interference; a wave that fits a whole number of wavelengths around the circumference survives. The condition is

$$
2\pi r=n\lambda_{\text{de Broglie}}=n\frac{h}{mv},
$$

which rearranges immediately to

$$
mvr=\frac{nh}{2\pi}:
$$

Bohr's quantisation rule returns, but now as a *wave resonance* condition rather than an arbitrary postulate. The orbit still cannot be taken literally — the uncertainty principle, below, removes the comfortable picture of a well-defined circular path — but the takeaway survives: electrons in atoms are standing waves, and the allowed energies are the resonant ones.

<learning-block type="concept" title="What the uncertainty principle really says">

Heisenberg (1927) derived from the mathematics of waves that specifying both the position $x$ of a microscopic particle and the component of its momentum $p$ along that direction cannot both be done beyond a fundamental limit:

$$
\Delta x\cdot\Delta p \ge\frac{h}{4\pi}.
$$

This is not an "instrument problem" — it is not about clumsy microscopes. It says the wave itself does not possess sharply defined position and momentum together. Squeeze $\Delta x$ down and the momentum necessarily blurs. For everyday objects the limit is absurdly generous; for an electron pinned inside an atom it is decisive.

</learning-block>

### Worked example 2: the electron inside an atom

Hold an electron inside $\Delta x=10^{-10}\ \text{m}$ (an atomic diameter). The minimum momentum spread is

$$
\Delta p=\frac{h}{4\pi\,\Delta x}=\frac{6.626\times10^{-34}}{4\pi\times10^{-10}}=5.27\times10^{-25}\ \text{kg m s}^{-1},
$$

so the velocity spread is

$$
\Delta v=\frac{\Delta p}{m}=\frac{5.27\times10^{-25}}{9.11\times10^{-31}}=5.8\times10^{5}\ \text{m s}^{-1}.
$$

Compare that with Bohr's orbital speed $2.2\times10^{6}\ \text{m s}^{-1}$: the uncertainty in speed is a quarter of the speed itself. A circular orbit with known radius *and* known speed is therefore impossible. Electrons in atoms cannot be described by trajectories at all — they must be described by standing waves and probabilities, which is exactly what the quantum-mechanical model of the following modules builds.

For the cricket ball with position known to $10^{-9}\ \text{m}$, the same formula gives $\Delta v\approx3.5\times10^{-25}\ \text{m s}^{-1}$ — nothing any weighing or timing could ever notice. The uncertainty principle is law for everything; its consequences switch on at the atomic scale.

<learning-block type="mistake" title="Getting the uncertainty principle wrong">

- **Reading it as "measurement disturbs the particle".** The limit is deeper than disturbance: the disturbance story would leave hope for a better instrument, and no better instrument exists.
- **Forgetting the factor $4\pi$.** $\Delta x\,\Delta p\ge h$ is a different, wrong statement; the classical result carries $h/4\pi$.
- **Applying the principle to reject *all* classical physics.** $\Delta x\,\Delta p\to0$ is allowed for cars and balls; the limit only binds when their product threatens the atomic scale.
- **Assuming the de Broglie wavelength depends on energy of the light.** It depends on the particle's momentum — electrons, not photons, are being described here.

</learning-block>

## Try it yourself

**A.** Find the de Broglie wavelength of a $100\ \text{g}$ ball moving at $20\ \text{m s}^{-1}$, and say what it implies.

<details><summary>Show the reasoning</summary>

$\lambda=h/(mv)=6.626\times10^{-34}/(0.100\times20)=3.3\times10^{-34}\ \text{m}$. Since this is far below any measurable length, the ball's wave side has no experimental consequence — its behaviour is classical for all purposes.
</details>

**B.** An electron and a proton travel at the same speed. Which has the longer wavelength, and why? If both have the same kinetic energy instead, does the answer change?

<details><summary>Show the reasoning</summary>

Same speed: the proton (mass 1836 times larger) has the larger momentum and so the *shorter* wavelength. Same kinetic energy: momentum $p=\sqrt{2mK}$, so the heavier particle again carries the larger momentum and again the shorter wavelength. Either way the electron is the more wavelike particle.
</details>

**C.** A hydrogen atom's electron is located within $10^{-9}\ \text{m}$ (a nanometre, roughly ten atomic radii). How fast is it — at minimum — uncertain?

<details><summary>Show the reasoning</summary>

$\Delta v\ge h/(4\pi m\,\Delta x)=6.626\times10^{-34}/(4\pi\times9.11\times10^{-31}\times10^{-9})=5.8\times10^{4}\ \text{m s}^{-1}$. Loosen the confinement tenfold and the speed uncertainty drops tenfold: uncertainty trades between position and momentum precisely as the formula says.
</details>

## Remember

- Every particle has a wavelength $\lambda=h/mv$; only very small masses or very high speeds put it in the measurable range.
- Davisson and Germer's electron diffraction proved matter waves experimentally; crystal spacings of order $10^{-10}\ \text{m}$ match electron wavelengths.
- Bohr's $mvr=nh/2\pi$ re-emerges as a standing-wave condition on the orbital circumference.
- $\Delta x\,\Delta p\ge h/4\pi$ is fundamental, not experimental clumsiness; for an electron in an atom it kills the orbit picture.
- Hence atomic electrons must be described by standing waves and probabilities — the programme of the quantum-mechanical model, coming next.
