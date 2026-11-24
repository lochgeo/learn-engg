## JEE Main timed practice: how to use this set

This is a **50-minute, no-notes** paper on electromagnetic waves. Use the full chapter only after you have read the four concept lessons and the practice module. A sensible split is 15 minutes for Section A, 15 for Section B, 12 for Section C and 8 for Section D, leaving a few minutes to check units.

Mark a question for review after 90 seconds. The paper tests recognition as much as calculation: several questions can be answered in one line if you know the relation, and several are designed to catch a factor of two or a phase error.

Constants used throughout:

$$
c=3.00\times10^{8}\ \text{m/s},\quad
\varepsilon_0=8.85\times10^{-12}\ \text{F/m},\quad
\mu_0=4\pi\times10^{-7}\ \text{T·m/A},
$$

$$
h=6.63\times10^{-34}\ \text{J·s},\quad
1\ \text{eV}=1.60\times10^{-19}\ \text{J}.
$$

## Conditions and formula sheet

| Situation | Start with | Check before using it |
| --- | --- | --- |
| Charging capacitor, gap field | $I_d=\varepsilon_0\,d\Phi_E/dt$ | The total displacement current through the gap equals the conduction current; the local density $J_d=I/A$ is uniform only for a parallel-plate geometry. |
| Field changing with time | $J_d=\varepsilon_0\,\partial E/\partial t$ | A steady field gives zero. |
| Wave speed in vacuum | $c=1/\sqrt{\mu_0\varepsilon_0}=\lambda f$ | Frequency is set by the source. |
| Wave speed in a medium | $v=c/n$, $n=\sqrt{\mu_r\varepsilon_r}$ | Frequency stays fixed; wavelength changes. |
| Field amplitudes | $E_0/B_0=c$ | Use amplitudes with amplitudes, rms with rms. |
| Direction of travel | $\vec E\times\vec B$ along the ray | A right-handed set fixes the third axis. |
| Intensity | $I=\tfrac12\varepsilon_0cE_0^2=\varepsilon_0cE_{\text{rms}}^2$ | Do not insert a peak field into the rms form. |
| Energy density | $u_E=\tfrac12\varepsilon_0E^2$, $u_B=B^2/(2\mu_0)$ | For a plane wave the two are equal. |
| Momentum and pressure | $p=U/c$; $I/c$ absorbing, $2I/c$ reflecting | The factor of two belongs only to reflection. |
| Spectrum | $E=hf=hc/\lambda$ | Shorter wavelength means higher energy. |

<learning-block type="mistake" title="Three fast sanity checks">

If an intensity comes out as $I=\varepsilon_0cE_0^2$ without the factor $\tfrac12$, you used the peak field in the rms formula. If a mirror gives $I/c$, you forgot the reversed momentum. If a wavelength in glass comes out longer than in vacuum, you divided by $n$ the wrong way.

</learning-block>

## Section A — 10 rapid MCQs

### 1. Displacement current in a charging capacitor

A capacitor is charging with conduction current $I$. The displacement current between the plates is:

- A. zero, because the gap is an insulator
- B. $I$, in the same direction as the conduction current approaching the positive plate
- C. $I$, opposite to the conduction current
- D. smaller than $I$ and decreasing

<details><summary>Answer</summary>

**B.** While the field grows, $\varepsilon_0\,d\Phi_E/dt$ equals the charging current and points in the same sense, so the total current is continuous through the gap.
</details>

### 2. Ratio of field amplitudes

In a plane electromagnetic wave in vacuum, $E_0/B_0$ equals:

- A. $c$
- B. $1/c$
- C. $\mu_0\varepsilon_0$
- D. $\sqrt{\mu_0/\varepsilon_0}$

<details><summary>Answer</summary>

**A.** Faraday’s law applied to the sinusoidal wave gives $E_0/B_0=\omega/k=c$.
</details>

### 3. Direction of the magnetic field

An electromagnetic wave travels along $+z$ with $\vec E$ along $+x$. The magnetic field is along:

- A. $+y$
- B. $-y$
- C. $+z$
- D. $-x$

<details><summary>Answer</summary>

**A.** $\vec E\times\vec B$ must point along $+z$. Since $\hat i\times\hat j=\hat k$, $\vec B$ is along $+y$.
</details>

### 4. Highest photon energy

Which region has the highest photon energy for the same number of photons?

- A. radio
- B. infrared
- C. visible
- D. gamma

<details><summary>Answer</summary>

**D.** Photon energy is $hf$, and gamma rays have the highest frequency.
</details>

### 5. Speed in a medium

The speed of an electromagnetic wave in a medium with $\varepsilon_r=9$ and $\mu_r=1$ is:

- A. $c/3$
- B. $c/9$
- C. $3c$
- D. $c$

<details><summary>Answer</summary>

**A.** $n=\sqrt{\mu_r\varepsilon_r}=3$, so $v=c/n=c/3=1.0\times10^{8}\ \text{m/s}$.
</details>

### 6. Average intensity

For a sinusoidal plane wave with rms electric field $E_{\text{rms}}$, the average intensity is:

- A. $\varepsilon_0cE_{\text{rms}}^2$
- B. $\tfrac12\varepsilon_0cE_{\text{rms}}^2$
- C. $2\varepsilon_0cE_{\text{rms}}^2$
- D. $\varepsilon_0c^2E_{\text{rms}}^2$

<details><summary>Answer</summary>

**A.** Since $E_0^2=2E_{\text{rms}}^2$, the peak form $\tfrac12\varepsilon_0cE_0^2$ becomes $\varepsilon_0cE_{\text{rms}}^2$.
</details>

### 7. Pressure on a mirror

Radiation pressure on a perfectly reflecting surface at normal incidence is:

- A. $I/(2c)$
- B. $I/c$
- C. $2I/c$
- D. zero

<details><summary>Answer</summary>

**C.** The momentum of the wave reverses, so the change in momentum is twice the incident value.
</details>

### 8. Phase relationship

In a plane electromagnetic wave in vacuum, $\vec E$ and $\vec B$ are:

- A. in phase and perpendicular
- B. $90^\circ$ out of phase and perpendicular
- C. in phase and parallel
- D. $180^\circ$ out of phase

<details><summary>Answer</summary>

**A.** Both fields vary as $\cos(kx-\omega t)$, so they peak together, and Maxwell’s equations make them perpendicular.
</details>

### 9. Unit of the Poynting vector

The SI unit of the Poynting vector is:

- A. $\text{W/m}^2$
- B. $\text{J/m}^3$
- C. $\text{N/m}^2$
- D. $\text{V/m}$

<details><summary>Answer</summary>

**A.** The Poynting vector is energy per unit area per unit time, which is power per unit area.
</details>

### 10. Why the displacement term is needed

The displacement-current term in the Ampère–Maxwell law is required for consistency with:

- A. Coulomb’s law
- B. conservation of electric charge
- C. Faraday’s law
- D. Gauss’s law for magnetism

<details><summary>Answer</summary>

**B.** It makes the magnetic field independent of the chosen surface and restores the continuity equation for charge.
</details>

## Section B — 5 numerical-value questions

### 11. Rate of change of field

A parallel-plate capacitor has plate area $0.015\ \text{m}^2$ and is charged with $3.0\ \text{mA}$. Find $dE/dt$ between the plates.

<details><summary>Answer</summary>

$$
\frac{dE}{dt}=\frac{I}{\varepsilon_0A}
=\frac{3.0\times10^{-3}}{(8.85\times10^{-12})(0.015)}
\approx2.3\times10^{10}\ \text{V/(m·s)}.
$$

The same result follows from $J_d=I/A$ and $dE/dt=J_d/\varepsilon_0$.
</details>

### 12. Amplitude and intensity

A plane wave has $E_0=240\ \text{V/m}$. Find $B_0$ and the average intensity.

<details><summary>Answer</summary>

$$
B_0=\frac{240}{3.00\times10^{8}}=8.0\times10^{-7}\ \text{T}.
$$

$$
I=\tfrac12(8.85\times10^{-12})(3.00\times10^{8})(240)^2
\approx77\ \text{W/m}^2.
$$

The answer is closer to $76\ \text{W/m}^2$ if the constants are kept to four figures; either is acceptable at two significant figures.
</details>

### 13. Wavelength in glass

Light of vacuum wavelength $600\ \text{nm}$ enters glass of refractive index $1.50$. Find its wavelength and frequency in the glass.

<details><summary>Answer</summary>

The frequency is fixed by the source:

$$
f=\frac{c}{\lambda_0}=\frac{3.00\times10^{8}}{6.00\times10^{-7}}
=5.0\times10^{14}\ \text{Hz}.
$$

The wavelength is

$$
\lambda=\frac{\lambda_0}{n}=\frac{600}{1.50}=400\ \text{nm}.
$$

The speed is $c/n=2.0\times10^{8}\ \text{m/s}$.
</details>

### 14. Force from an absorbed beam

A beam of intensity $4.0\ \text{kW/m}^2$ falls normally on a perfectly absorbing surface of area $0.25\ \text{m}^2$. Find the force.

<details><summary>Answer</summary>

$$
P=\frac{I}{c}=\frac{4.0\times10^{3}}{3.00\times10^{8}}
=1.3\times10^{-5}\ \text{Pa},
$$

$$
F=PA=(1.3\times10^{-5})(0.25)=3.3\times10^{-6}\ \text{N}.
$$

For a perfect reflector the force would be twice as large.
</details>

### 15. Microwave wavelength and photon energy

A microwave oven operates at $2.45\ \text{GHz}$. Find the wavelength in centimetres and the photon energy in electronvolts.

<details><summary>Answer</summary>

$$
\lambda=\frac{3.00\times10^{8}}{2.45\times10^{9}}=0.122\ \text{m}\approx12\ \text{cm}.
$$

$$
E=hf=(6.63\times10^{-34})(2.45\times10^{9})
=1.62\times10^{-24}\ \text{J}
\approx1.0\times10^{-5}\ \text{eV}.
$$

The photon energy is far too small to ionise atoms; heating comes from rotational excitation of polar molecules.
</details>

## Section C — 3 assertion–reason questions

For each question choose:

- **A.** Both Assertion and Reason are true, and the Reason is the correct explanation of the Assertion.
- **B.** Both Assertion and Reason are true, but the Reason is **not** the correct explanation of the Assertion.
- **C.** The Assertion is true, but the Reason is false.
- **D.** The Assertion is false, but the Reason is true.

### 16. Displacement current in empty space

**Assertion:** A displacement current can exist in a vacuum.

**Reason:** Displacement current arises from a changing electric field, not from moving charge.

<details><summary>Answer</summary>

**A.** A changing electric field in vacuum contributes $\varepsilon_0\,d\Phi_E/dt$ to the Ampère–Maxwell law and produces a magnetic field. The reason is exactly why the effect does not require charge carriers.
</details>

### 17. Frequency in glass

**Assertion:** When light passes from air into glass, its frequency decreases.

**Reason:** The speed of light in glass is less than in air.

<details><summary>Answer</summary>

**D.** The assertion is false: frequency is fixed by the source and does not change. The reason is true — the speed is lower — but the wavelength, not the frequency, adjusts.
</details>

### 18. Perpendicular fields

**Assertion:** In a plane electromagnetic wave in vacuum, the electric and magnetic field vectors are perpendicular to each other.

**Reason:** Electromagnetic waves are transverse.

<details><summary>Answer</summary>

**B.** Both statements are true, but transversality only says that each field is perpendicular to the propagation direction. The mutual perpendicularity of $\vec E$ and $\vec B$ is an additional consequence of Maxwell’s equations.
</details>

## Section D — 2 matching and multi-statement questions

### 19. Matching the spectrum

Match each region in Column I with a typical wavelength in Column II.

| Column I | Column II |
| --- | --- |
| P. Radio | 1. $10^{-5}\ \text{m}$ |
| Q. Microwave | 2. $10^{-10}\ \text{m}$ |
| R. Infrared | 3. $10^{-2}\ \text{m}$ |
| S. Ultraviolet | 4. $10^{2}\ \text{m}$ |
| T. X-ray | 5. $10^{-7}\ \text{m}$ |

<details><summary>Answer</summary>

**P–4, Q–3, R–1, S–5, T–2.**

Radio wavelengths are metres or longer; microwaves are centimetres; infrared is micrometres; ultraviolet is around a hundred nanometres; X-rays are around $0.1\ \text{nm}$. The boundaries overlap, but the order is unambiguous.
</details>

### 20. Multi-statement question

Consider the following statements about displacement current:

I. It is produced by a time-varying electric field.
II. It has the same SI unit as conduction current.
III. It is a flow of charge across the capacitor gap.
IV. It contributes to the magnetic field through the Ampère–Maxwell law.

Which statements are correct?

- A. I, II and III
- B. I, II and IV
- C. II, III and IV
- D. I and III only

<details><summary>Answer</summary>

**B.** Statement III is false: no charge crosses an ideal gap. The displacement current is a changing electric flux measured in amperes, and it acts as a source of magnetic field in the corrected law.
</details>

## Review by error, not by score

| If you missed… | Revisit | Then retry |
| --- | --- | --- |
| 1, 10, 11 or 20 | Displacement current | Write the capacitor flux argument and check $I_d=I_c$ before using the formula. |
| 2, 3, 5, 8, 12, 13 or 18 | Maxwell’s waves and their properties | Redraw the $\vec E$, $\vec B$, $\vec k$ triad and re-derive $E_0/B_0=c$. |
| 6, 7, 9, 14 or 18 | Wave speed, energy and momentum | Decide whether the question needs peak or rms, absorption or reflection, before substituting. |
| 4, 15 or 19 | The electromagnetic spectrum | Rebuild the frequency order and the $E=hc/\lambda$ conversion. |
| 17 | Frequency versus wavelength in a medium | State explicitly what the source fixes and what the medium changes. |

<learning-block type="recap" title="Target for the next attempt">

Aim for at least 17 correct out of 20 with a written reason for every choice. A correct option chosen for the wrong reason is a revision target, not a mastered question. If you lost more than two marks to arithmetic, redo the numerical questions with all constants written in scientific notation before simplifying.

</learning-block>
