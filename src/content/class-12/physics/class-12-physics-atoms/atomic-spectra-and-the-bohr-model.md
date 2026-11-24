## Why atoms emit light in lines, not colours

If you pass the light from a glowing gas through a prism, you do not get a rainbow. You get a handful of bright lines at definite wavelengths — a **line spectrum**. A hot solid gives a continuous spectrum, but a gas of atoms gives lines. That single observation tells us that the internal energy of an atom is not continuous: an atom can hold only certain, discrete amounts of energy, and light is emitted or absorbed only when it jumps between these allowed amounts.

## 1. Atomic spectra

When an atom is excited (by heat, an electric discharge, or electron bombardment) it emits light. Passing that light through a spectroscope gives an **emission spectrum**: bright lines on a dark background. Conversely, white light passed through a cool gas gives an **absorption spectrum**: dark lines where specific wavelengths are removed.

For hydrogen the lines are grouped into **series**, each named after its discoverer:

- **Lyman series** — ultraviolet, ending at the ground level.
- **Balmer series** — visible, ending at the first excited level.
- **Paschen, Brackett, Pfund series** — infrared, ending at higher levels.

All hydrogen lines obey the **Rydberg formula**

$$
\frac{1}{\lambda}=R_{\!H}\left(\frac{1}{n_1^2}-\frac{1}{n_2^2}\right),
\qquad n_2>n_1,
$$

with $R_{\!H}=1.097\times10^7\ \text{m}^{-1}$. The appearance of a simple $1/n^2$ law is a strong hint that the allowed energies themselves scale as $1/n^2$.

## 2. The Bohr model

Bohr kept Rutherford’s nucleus but added three postulates for the electron:

1. **Stationary orbits.** An electron in certain allowed orbits does not radiate, even though it is accelerating. These are the **stationary states**.
2. **Quantisation of angular momentum.** The orbital angular momentum is an integer multiple of $\hbar=h/2\pi$:
   $$
   mvr = n\hbar,\qquad n=1,2,3,\dots
   $$
3. **Quantum jumps.** Radiation is emitted or absorbed only when the electron moves between stationary states, with photon energy $h\nu = |E_f-E_i|$.

Combining postulate 2 with the Coulomb force law gives the whole hydrogen atom.

## 3. Deriving the orbit radius and speed

For a hydrogen-like atom of nuclear charge $+Ze$ and one electron, the centripetal force is the Coulomb attraction:

$$
\frac{mv^2}{r} = \frac{1}{4\pi\varepsilon_0}\frac{Ze^2}{r^2}. \tag{1}
$$

Angular momentum quantisation:

$$
mvr = n\hbar. \tag{2}
$$

From (2), $v=n\hbar/(mr)$. Substituting into (1):

$$
\frac{m}{r}\left(\frac{n\hbar}{mr}\right)^2 = \frac{Ze^2}{4\pi\varepsilon_0 r^2}
\quad\Rightarrow\quad
r_n = \frac{4\pi\varepsilon_0\hbar^2}{m e^2}\frac{n^2}{Z}.
$$

The constant is the **Bohr radius** $a_0=0.529\times10^{-10}\ \text{m}$, so

$$
r_n = a_0\frac{n^2}{Z}.
$$

The speed follows from (2):

$$
v_n = \frac{n\hbar}{mr_n}
    = \frac{Ze^2}{2\varepsilon_0 h}\frac{1}{n}
    \approx \frac{2.19\times10^6\,Z}{n}\ \text{m/s}.
$$

For hydrogen in the ground state, $v_1\approx2.2\times10^6\ \text{m/s}$, about $0.7\%$ of the speed of light, so a non-relativistic treatment is acceptable.

## 4. Worked example: orbit radius and speed

For the hydrogen atom ($Z=1$) in the state $n=3$, find the orbit radius and the electron speed.

$$
r_3 = a_0\frac{3^2}{1}=0.529\times10^{-10}\times9
    = 4.76\times10^{-10}\ \text{m}\approx 0.476\ \text{nm}.
$$

$$
v_3 = \frac{2.19\times10^6}{3}\approx7.30\times10^5\ \text{m/s}.
$$

**Sanity check:** the radius grows as $n^2$, so $n=3$ is nine times the ground-state radius; the speed falls as $1/n$. Both trends are expected for a weaker, larger orbit.

## 5. A common mistake

**Forgetting that Bohr’s model is for one-electron atoms.** The derivations above assume a single electron moving in the field of a nucleus. They work well for hydrogen and for ions such as $\mathrm{He^+}$, $\mathrm{Li^{2+}}$ (with $Z$ adjusted), but they fail for multi-electron atoms because electron–electron repulsion is ignored. Applying $E_n=-13.6Z^2/n^2$ to neutral helium would give a wrong ionisation energy.

A second common error is writing the quantisation condition as $mvr=n h$ instead of $n\hbar$; that introduces a factor of $2\pi$ and corrupts every subsequent formula.

## Try it yourself

**A.** For $\mathrm{He^+}$ ($Z=2$) in the ground state, find the orbit radius and speed.

<details><summary>Show the reasoning</summary>

$r_1=a_0/2=0.265\times10^{-10}\ \text{m}$.

$v_1=2.19\times10^6\times2=4.38\times10^6\ \text{m/s}$.

The stronger nuclear charge pulls the electron closer and speeds it up.
</details>

**B.** Derive the Bohr radius expression $a_0=4\pi\varepsilon_0\hbar^2/(me^2)$ and state its value.

<details><summary>Show the reasoning</summary>

Set $Z=1,\ n=1$ in $r_n=(4\pi\varepsilon_0\hbar^2/(me^2))(n^2/Z)$, giving $a_0=4\pi\varepsilon_0\hbar^2/(me^2)=0.529\times10^{-10}\ \text{m}$. It is the natural length scale of the hydrogen atom.
</details>

**C.** Why does Bohr’s first postulate contradict classical electromagnetism, and why is that acceptable here?

<details><summary>Show the reasoning</summary>

Classically an accelerating charge radiates, so an orbiting electron should lose energy and spiral in. Bohr simply postulates that stationary states do not radiate; this is a quantum rule with no classical analogue. It is acceptable because it reproduces the observed spectra, and a full quantum-mechanical treatment later justifies the idea.
</details>

## Remember

- Atoms emit and absorb light at discrete wavelengths because their energies are quantised.
- Bohr’s three postulates: stationary states, $mvr=n\hbar$, and quantum jumps with $h\nu=|E_f-E_i|$.
- Orbit radius $r_n=a_0 n^2/Z$; speed $v_n\approx2.19\times10^6\,Z/n\ \text{m/s}$.
- The model applies to one-electron (hydrogen-like) atoms only.

The next module turns these orbits into energy levels and spectral lines, and computes the wavelengths you would actually measure.