## JEE Main sprint: atoms — how to use this set

This is a **50-minute, no-notes** practice set for after you complete the chapter lessons. Use the constants $h=6.63\times10^{-34}\ \text{J·s}$, $e=1.6\times10^{-19}\ \text{C}$, $1/(4\pi\varepsilon_0)=9.0\times10^9\ \text{N·m}^2/\text{C}^2$, $R_{\!H}=1.097\times10^7\ \text{m}^{-1}$, $a_0=0.529\times10^{-10}\ \text{m}$, $m_e=9.11\times10^{-31}\ \text{kg}$. Spend roughly 15 minutes on Section A, 20 on Section B, 10 on Section C, and 5 on Section D. Mark a question for review after 90 seconds; do not let one calculation consume the paper.

The goal is not only an answer. Before writing an equation, name the system and choose the tool: scattering geometry, Bohr orbit, energy level, spectral series, or standing wave.

## Conditions sheet

| Situation | Start with | Check before using it |
| --- | --- | --- |
| Alpha particle, nucleus, deflection angle | $b=\frac{1}{4\pi\varepsilon_0}\frac{Ze^2}{K}\cot(\theta/2)$ | Use the alpha charge $+2e$ inside $K$ conversion; retain the cotangent. |
| Head-on approach, closest approach | $r_{\min}=\frac{1}{4\pi\varepsilon_0}\frac{2Ze^2}{K}$ | $r_{\min}$ is an upper bound on nuclear size, not the radius. |
| Hydrogen-like atom, orbit radius or speed | $r_n=a_0 n^2/Z$, $v_n\approx2.19\times10^6\,Z/n\ \text{m/s}$ | One electron only; multi-electron atoms need a different model. |
| Energy of a level | $E_n=-13.6\,Z^2/n^2\ \text{eV}$ | Negative sign means bound; $E_\infty=0$. |
| Wavelength of a transition | $1/\lambda=R_{\!H}(1/n_f^2-1/n_i^2)$ | $n_i>n_f$ for emission; result in metres, convert to nm. |
| Series by region | $n_f=1$ Lyman (UV), $2$ Balmer (visible), $3$ Paschen (IR) | Balmer is the only visible series. |
| Ionisation energy | $13.6\,Z^2\ \text{eV}$ from ground state | Depends on $Z^2$. |
| Why $n$ is integer | $2\pi r=n\lambda=h/p$ | Still needs the Coulomb force balance to fix $r$ and $v$. |

<learning-block type="mistake" title="The fastest sanity checks">

If your answer gives a negative wavelength, an orbit radius smaller than the nucleus, or a Bohr energy for neutral helium, stop and revisit the setup. A numerical answer with the right unit can still come from the wrong model.

</learning-block>

## Section A — 10 rapid MCQs

### 1. Impact parameter and angle

For a fixed projectile energy and nucleus, as the impact parameter $b$ increases, the scattering angle $\theta$:

- A. increases
- B. decreases
- C. stays the same
- D. becomes $90^\circ$

<details><summary>Answer</summary>

**B.** $b\propto\cot(\theta/2)$, so larger $b$ means smaller $\theta$.
</details>

### 2. Closest approach

The distance of closest approach of an alpha particle to a nucleus of charge $+Ze$ with kinetic energy $K$ is:

- A. $\frac{1}{4\pi\varepsilon_0}\frac{Ze^2}{K}$
- B. $\frac{1}{4\pi\varepsilon_0}\frac{2Ze^2}{K}$
- C. $\frac{1}{4\pi\varepsilon_0}\frac{Ze^2}{2K}$
- D. $\frac{1}{4\pi\varepsilon_0}\frac{4Ze^2}{K}$

<details><summary>Answer</summary>

**B.** Head-on: $K=\frac{1}{4\pi\varepsilon_0}\frac{(2e)(Ze)}{r_{\min}}$, so $r_{\min}=\frac{1}{4\pi\varepsilon_0}\frac{2Ze^2}{K}$.
</details>

### 3. Bohr radius

The ground-state orbit radius of $\mathrm{He^+}$ ($Z=2$) is:

- A. $2a_0$
- B. $a_0$
- C. $a_0/2$
- D. $a_0/4$

<details><summary>Answer</summary>

**C.** $r_1=a_0/Z=a_0/2$.
</details>

### 4. Ground-state energy

The ground-state energy of hydrogen is:

- A. $-13.6\ \text{eV}$
- B. $-3.40\ \text{eV}$
- C. $+13.6\ \text{eV}$
- D. $-1.51\ \text{eV}$

<details><summary>Answer</summary>

**A.** $E_1=-13.6\ \text{eV}$; the negative sign indicates a bound state.
</details>

### 5. Visible series

Which hydrogen spectral series lies in the visible region?

- A. Lyman
- B. Balmer
- C. Paschen
- D. Brackett

<details><summary>Answer</summary>

**B.** The Balmer series has $n_f=2$ and its lines fall in the visible range.
</details>

### 6. Standing wave

Bohr’s quantisation condition $mvr=n\hbar$ follows from:

- A. $2\pi r=n\lambda$ with $\lambda=h/mv$
- B. $mv=n\hbar/r$
- C. $r=n\lambda/2\pi$ with $\lambda=h\nu$
- D. $mvr=nh$

<details><summary>Answer</summary>

**A.** Standing wave around the orbit: circumference $=$ integer wavelengths, $\lambda=h/mv$, giving $mvr=n\hbar$.
</details>

### 7. Radius scaling

If the principal quantum number $n$ is doubled, the Bohr orbit radius:

- A. doubles
- B. quadruples
- C. halves
- D. stays the same

<details><summary>Answer</summary>

**B.** $r_n\propto n^2$, so doubling $n$ gives $4$ times the radius.
</details>

### 8. Rydberg constant

The SI unit of the Rydberg constant $R_{\!H}$ is:

- A. $\text{m}$
- B. $\text{m}^{-1}$
- C. $\text{s}^{-1}$
- D. $\text{J}$

<details><summary>Answer</summary>

**B.** Since $1/\lambda=R_{\!H}(\dots)$, $R_{\!H}$ has units of inverse length.
</details>

### 9. Model validity

Bohr’s energy formula $E_n=-13.6\,Z^2/n^2\ \text{eV}$ is directly applicable to:

- A. any neutral atom
- B. hydrogen and hydrogen-like ions only
- C. molecules
- D. metals

<details><summary>Answer</summary>

**B.** It assumes a single electron in a Coulomb field; multi-electron atoms need corrections.
</details>

### 10. Transition energy

The energy of the photon emitted in the transition $n=3\to n=2$ in hydrogen is:

- A. $0.66\ \text{eV}$
- B. $1.89\ \text{eV}$
- C. $3.40\ \text{eV}$
- D. $12.1\ \text{eV}$

<details><summary>Answer</summary>

**B.** $E_3-E_2=(-1.51)-(-3.40)=1.89\ \text{eV}$.
</details>

## Section B — 5 numerical-value questions

### 11. Balmer wavelength

Find the wavelength (in nm) of the $n=4\to n=2$ transition in hydrogen.

<details><summary>Answer</summary>

$$
\frac{1}{\lambda}=R_{\!H}\left(\frac14-\frac1{16}\right)=R_{\!H}\frac{3}{16}.
$$

$\lambda=16/(3R_{\!H})=4.86\times10^{-7}\ \text{m}=486\ \text{nm}$.
</details>

### 12. He$^+$ level energy

Find the energy (in eV) of the $n=2$ level of $\mathrm{He^+}$ ($Z=2$).

<details><summary>Answer</summary>

$E_2=-13.6\times4/4=-13.6\ \text{eV}$.
</details>

### 13. Orbit radius

Find the radius of the $n=3$ orbit of hydrogen in units of $a_0$.

<details><summary>Answer</summary>

$r_3=a_0\times3^2=9\,a_0$.
</details>

### 14. Lyman-alpha wavelength

Find the wavelength (in nm) of the $n=2\to n=1$ transition in hydrogen.

<details><summary>Answer</summary>

$$
\frac{1}{\lambda}=R_{\!H}\left(1-\frac14\right)=\frac34 R_{\!H}.
$$

$\lambda=4/(3R_{\!H})=1.215\times10^{-7}\ \text{m}=121.5\ \text{nm}$.
</details>

### 15. de Broglie wavelength

An electron moves with speed $1.0\times10^6\ \text{m/s}$. Find its de Broglie wavelength in nm.

<details><summary>Answer</summary>

$$
\lambda=\frac{h}{mv}
=\frac{6.63\times10^{-34}}{(9.11\times10^{-31})(1.0\times10^6)}
=7.28\times10^{-10}\ \text{m}=0.728\ \text{nm}.
$$
</details>

## Section C — 3 assertion–reason questions

### 16. Bohr explains hydrogen

**Assertion (A):** Bohr’s model successfully explains the line spectrum of hydrogen.

**Reason (R):** It quantises orbital angular momentum as $mvr=n\hbar$.

- A. Both A and R are true, and R is the correct explanation of A.
- B. Both A and R are true, but R is not the correct explanation of A.
- C. A is true but R is false.
- D. A is false but R is true.

<details><summary>Answer</summary>

**A.** Both are true and the quantisation condition leads directly to the discrete energies that produce the lines.
</details>

### 17. Closest approach equals radius?

**Assertion (A):** The distance of closest approach of an alpha particle equals the nuclear radius.

**Reason (R):** At closest approach the alpha particle’s kinetic energy is fully converted to electrostatic potential energy.

- A. Both A and R are true, and R is the correct explanation of A.
- B. Both A and R are true, but R is not the correct explanation of A.
- C. A is true but R is false.
- D. A is false but R is true.

<details><summary>Answer</summary>

**D.** R is true (energy conversion at closest approach), but A is false: $r_{\min}$ depends on projectile energy and is only an upper bound on nuclear size.
</details>

### 18. Standing wave equality

**Assertion (A):** The de Broglie wavelength of the electron in the ground state of hydrogen equals the circumference of the first orbit.

**Reason (R):** A stable orbit requires an integer number of wavelengths to fit around the loop.

- A. Both A and R are true, and R is the correct explanation of A.
- B. Both A and R are true, but R is not the correct explanation of A.
- C. A is true but R is false.
- D. A is false but R is true.

<details><summary>Answer</summary>

**A.** For $n=1$ exactly one wavelength fits, so $\lambda=2\pi r_1$; the standing-wave condition is the reason.
</details>

## Section D — 2 matching / multi-statement questions

### 19. Match the series

Match each hydrogen spectral series to its region and final level.

| Series | Region | Final level $n_f$ |
| --- | --- | --- |
| Lyman | ? | ? |
| Balmer | ? | ? |
| Paschen | ? | ? |

Choose from regions: ultraviolet, visible, infrared. Final levels: 1, 2, 3.

<details><summary>Answer</summary>

- Lyman — ultraviolet — $n_f=1$
- Balmer — visible — $n_f=2$
- Paschen — infrared — $n_f=3$

The region follows from the size of the energy gap: larger gaps (to $n=1$) give higher-energy (shorter-wavelength) photons.
</details>

### 20. Multi-statement

Which of the following statements are correct?

1. Bohr’s model applies to multi-electron atoms without modification.
2. The ionisation energy of hydrogen is $13.6\ \text{eV}$.
3. The de Broglie wavelength of an electron increases with $n$ in hydrogen.
4. Rutherford scattering showed that the atom is mostly empty space.

- A. 1 and 3 only
- B. 2 and 4 only
- C. 2, 3 and 4 only
- D. 1, 2, 3 and 4

<details><summary>Answer</summary>

**C.** Statement 1 is false (Bohr’s model is for one-electron atoms). Statements 2, 3 and 4 are true.
</details>

## Review by error, not by score

| If you missed… | Revisit | Then retry |
| --- | --- | --- |
| 1–2, 17 | Rutherford scattering | Re-derive $r_{\min}$ and the $b$–$\theta$ relation. |
| 3, 6, 7, 13, 18 | Bohr model and de Broglie | Check the $n^2$ and $1/n$ scalings. |
| 4, 10, 12, 16 | Energy levels | Re-derive $E_n=-13.6\,Z^2/n^2$. |
| 5, 11, 14, 19 | Spectral series | Practise the Rydberg formula with $n_f$ and $n_i$. |
| 8, 15, 20 | Units and model limits | Convert metres to nanometres; check applicability. |

<learning-block type="recap" title="Ready for a timed set?">

Aim for at least 16 correct out of 20 with a written method choice for every question. Questions you solve correctly but cannot justify are revision targets, not mastered topics.

</learning-block>