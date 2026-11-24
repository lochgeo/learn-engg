## Your study plan for today

This chapter links four ideas: Rutherford’s nucleus, Bohr’s quantised orbits, hydrogen’s line spectrum, and de Broglie’s standing waves. A focused first pass takes about **2.5 hours**:

1. **Rutherford scattering and the nuclear model** — 25 min
2. **Atomic spectra and the Bohr model** — 30 min
3. **Hydrogen lines and energy levels** — 30 min
4. **de Broglie’s explanation of quantisation** — 25 min
5. **This mastery check** — 25 min
6. **Optional JEE Main timed set** — 50 min (save for later)

After each lesson, close the explanation and redo its questions from a blank page. Mark a module complete only when you can state why its method applies.

## First choose the tool

| Clue in the question | Start with |
| --- | --- |
| Alpha particle, nucleus, deflection angle | $b=\frac{1}{4\pi\varepsilon_0}\frac{Ze^2}{K}\cot(\theta/2)$ |
| Closest approach, head-on collision | $r_{\min}=\frac{1}{4\pi\varepsilon_0}\frac{2Ze^2}{K}$ |
| Hydrogen-like atom, radius or speed of an orbit | $r_n=a_0 n^2/Z$, $v_n\approx2.19\times10^6\,Z/n\ \text{m/s}$ |
| Energy of a level | $E_n=-13.6\,Z^2/n^2\ \text{eV}$ |
| Wavelength of an emitted/absorbed photon | $1/\lambda=R_{\!H}(1/n_f^2-1/n_i^2)$ |
| Which spectral series / region | Final level $n_f$: 1 Lyman (UV), 2 Balmer (visible), 3 Paschen (IR) |
| Ionisation energy | $E_\infty-E_1=13.6\,Z^2\ \text{eV}$ for hydrogen-like |
| Why is $n$ an integer? | Standing wave: $2\pi r=n\lambda=h/p$ |
| Multi-electron atom | Bohr formulas do **not** apply directly |

## Mastery check

Use $h=6.63\times10^{-34}\ \text{J·s}$, $e=1.6\times10^{-19}\ \text{C}$, $1/(4\pi\varepsilon_0)=9.0\times10^9$, $R_{\!H}=1.097\times10^7\ \text{m}^{-1}$, $a_0=0.529\times10^{-10}\ \text{m}$, and $g$ is not needed here.

### 1. Closest approach

An alpha particle of kinetic energy $4.0\ \text{MeV}$ approaches a copper nucleus ($Z=29$) head-on. Find the distance of closest approach.

<details><summary>Answer and reasoning</summary>

$K=4.0\times10^6\times1.6\times10^{-19}=6.4\times10^{-13}\ \text{J}$.

$$
r_{\min}=\frac{(9.0\times10^9)(2)(29)(2.56\times10^{-38})}{6.4\times10^{-13}}
\approx2.07\times10^{-14}\ \text{m}.
$$

The result is of order $10^{-14}\ \text{m}$, larger than a typical nuclear radius, so the Coulomb picture holds.
</details>

### 2. Impact parameter trend

For fixed energy and nucleus, how does the impact parameter change if the scattering angle increases? Give the formula and the conclusion.

<details><summary>Answer and reasoning</summary>

$b=\frac{1}{4\pi\varepsilon_0}\frac{Ze^2}{K}\cot(\theta/2)$. As $\theta$ increases, $\cot(\theta/2)$ decreases, so $b$ decreases. Larger deflections come from closer approaches.
</details>

### 3. Bohr radius for hydrogen-like ion

Find the ground-state orbit radius and speed for $\mathrm{Li^{2+}}$ ($Z=3$).

<details><summary>Show the reasoning</summary>

$r_1=a_0/3=0.176\times10^{-10}\ \text{m}$.

$v_1=2.19\times10^6\times3=6.57\times10^6\ \text{m/s}$.

The larger charge shrinks and speeds up the orbit.
</details>

### 4. Energy levels

What is the energy of the $n=3$ level of $\mathrm{He^+}$ ($Z=2$), and what is its ionisation energy from the ground state?

<details><summary>Answer and reasoning</summary>

$E_3=-13.6\times4/9=-6.04\ \text{eV}$.

Ground state $E_1=-13.6\times4=-54.4\ \text{eV}$, so ionisation energy is $54.4\ \text{eV}$.
</details>

### 5. A spectral line

Compute the wavelength of the transition $n=5\to n=2$ in hydrogen and name the series.

<details><summary>Answer and reasoning</summary>

$$
\frac{1}{\lambda}=R_{\!H}\left(\frac14-\frac1{25}\right)
=R_{\!H}\frac{21}{100}.
$$

$\lambda=100/(21R_{\!H})\approx4.34\times10^{-7}\ \text{m}=434\ \text{nm}$. This is the H$\gamma$ line of the **Balmer** series (visible, violet).
</details>

### 6. Series identification

A hydrogen line has wavelength $102.6\ \text{nm}$. Which series does it belong to?

<details><summary>Answer and reasoning</summary>

$102.6\ \text{nm}$ is in the ultraviolet. The Lyman series ($n_f=1$) lies in the UV. Checking: $1/\lambda=9.75\times10^6\ \text{m}^{-1}$; $R_{\!H}(1-1/4)=8.23\times10^6$ is too small, while $R_{\!H}(1-1/9)=9.75\times10^6$ matches $n_i=3\to1$. So it is Lyman-beta.
</details>

### 7. de Broglie consistency

For hydrogen in the state $n=3$, compute the de Broglie wavelength and show that three wavelengths fit the circumference.

<details><summary>Answer and reasoning</summary>

$r_3=a_0\times9=4.76\times10^{-10}\ \text{m}$; $v_3=2.19\times10^6/3=7.30\times10^5\ \text{m/s}$.

$\lambda=h/(mv_3)\approx9.97\times10^{-10}\ \text{m}$.

$2\pi r_3\approx2.99\times10^{-9}\ \text{m}=3\lambda$. Consistent.
</details>

### 8. Ionisation and the Lyman limit

What is the shortest wavelength in the hydrogen spectrum, and what transition does it represent?

<details><summary>Answer and reasoning</summary>

The shortest wavelength corresponds to the largest energy gap: $n=\infty\to1$, the Lyman limit. Energy $=13.6\ \text{eV}$, so $\lambda=hc/13.6\approx91.2\ \text{nm}$. All series converge to limits; the Lyman limit is the overall shortest.
</details>

### 9. Conceptual: why no radiation in stationary states?

Explain, in one or two sentences, why an electron in a stationary state does not radiate, and where the energy goes when it jumps down.

<details><summary>Answer</summary>

Radiation is not a property of a stationary state; it is emitted only during a transition between states, with photon energy equal to the level difference. That energy leaves the atom as a photon; the electron ends in a lower, more tightly bound orbit.
</details>

### 10. Method choice

A problem gives the wavelength of a hydrogen line and asks for the initial quantum number, given the final level is $n=2$. Which equation do you use first?

<details><summary>Answer</summary>

Use the Rydberg formula $1/\lambda=R_{\!H}(1/2^2-1/n_i^2)$, solve for $n_i$, and check that the result is an integer. If it is not, recheck the arithmetic or the assumed final level.
</details>

## Self-check

You are ready to move on when you can:

- derive the distance of closest approach and state what it is *not*;
- write Bohr’s three postulates and derive $r_n$ and $v_n$;
- compute level energies and convert them to wavelengths with correct units;
- identify Lyman, Balmer and Paschen lines by region and final level;
- explain quantisation as a standing-wave condition and verify it numerically;
- recognise that Bohr’s formulas apply to one-electron atoms only;
- check every answer for sign, units and physical plausibility.

If any item feels shaky, revisit that module and redo its questions without the reveal. Then try the JEE Main timed set.