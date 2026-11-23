## JEE Main sprint: how to use this set

This is a **50-minute, no-notes** practice set for after you complete the chapter lessons. Use $\mu_0/(4\pi)=10^{-7}$ and $g=10\ \text{m/s}^2$ unless a question states otherwise. Spend roughly 15 minutes on Section A, 20 on Section B, 10 on Section C and 5 on Section D. Mark a question for review after 90 seconds; do not let one calculation consume the paper.

The goal is not only an answer. Before writing an equation, name the object: a dipole field, an Earth-field component, a material response ($H$, $M$, $\chi$), or a magnetic circuit.

## Conditions sheet

| Situation | Start with | Check before using it |
| --- | --- | --- |
| Short bar magnet field | $B_{\text{axial}}=\frac{\mu_0}{4\pi}\frac{2M}{r^3}$, $B_{\text{eq}}=\frac{\mu_0}{4\pi}\frac{M}{r^3}$ | $r\gg$ magnet length; axial is twice equatorial |
| Dipole torque/energy | $\tau=MB\sin\theta$, $U=-MB\cos\theta$ | Torque vanishes at $0^\circ$ and $180^\circ$ |
| Closed surface / monopoles | $\oint \vec B\cdot d\vec A=0$ | Net flux is always zero |
| Earth's field | $B_H=B\cos I$, $B_V=B\sin I$, $\tan I=B_V/B_H$ | $B_H$ is the horizontal component |
| Field in matter | $B=\mu_0(H+M)=\mu_0\mu_r H$ | SI units: T for $B$, A/m for $H$, $M$ |
| Linear response | $M=\chi_m H$, $\mu_r=1+\chi_m$ | $\chi_m$ dimensionless in SI |
| Paramagnet | $\chi=C/T$ | Applies above any ordering temperature |
| Ferromagnet above $T_C$ | $\chi=C/(T-T_C)$ | Only for $T>T_C$ |
| Magnetic circuit | $\mathcal{F}=NI$, $\mathcal{R}=l/(\mu A)$ | Gap reluctance usually dominates |
| Saturation | Compare with $B_{\text{sat}}\sim1.5$–$2\ \text{T}$ (iron) | Linear formulas are upper bounds past saturation |

<learning-block type="mistake" title="The fastest sanity checks">

If your answer gives $B$ larger than a few tesla in iron, a negative susceptibility for a ferromagnet below $T_C$, or a non-zero net flux through a closed surface, stop and revisit the setup. A numerical answer with the right unit can still come from the wrong model.

</learning-block>

## Section A — 10 rapid MCQs

### 1. Distance scaling

For a short bar magnet, if the observation distance on the axis is doubled, the field becomes:

- A. $\frac12$ of the original
- B. $\frac14$ of the original
- C. $\frac18$ of the original
- D. $\frac1{16}$ of the original

<details><summary>Answer</summary>

**C.** $B_{\text{axial}}\propto 1/r^3$, so doubling $r$ gives $1/2^3=1/8$.

</details>

### 2. Equatorial direction

On the equatorial plane of a bar magnet, the field direction is:

- A. parallel to $\vec M$
- B. opposite to $\vec M$
- C. perpendicular to $\vec M$ in the plane
- D. zero

<details><summary>Answer</summary>

**B.** The equatorial field points opposite to the dipole moment, just as for an electric dipole.

</details>

### 3. Gauss's law for magnetism

The net magnetic flux through any closed surface is:

- A. $\mu_0$ times the enclosed pole strength
- B. zero
- C. $\mu_0 I_{\text{enc}}$
- D. $Q_{\text{enc}}/\varepsilon_0$

<details><summary>Answer</summary>

**B.** $\oint \vec B\cdot d\vec A=0$: no magnetic monopoles.

</details>

### 4. Earth's dip at the equator

At the magnetic equator, the angle of dip $I$ is:

- A. $0^\circ$
- B. $45^\circ$
- C. $60^\circ$
- D. $90^\circ$

<details><summary>Answer</summary>

**A.** $I=0^\circ$: the field is purely horizontal there.

</details>

### 5. Paramagnet susceptibility

For a paramagnet, $\chi_m$ is:

- A. negative and temperature-independent
- B. positive and decreases with increasing temperature
- C. positive and increases with increasing temperature
- D. zero

<details><summary>Answer</summary>

**B.** $\chi=C/T$: positive and falls as $T$ rises.

</details>

### 6. Curie temperature

A ferromagnet heated above its Curie temperature becomes:

- A. a diamagnet
- B. a paramagnet
- C. a superconductor
- D. an insulator

<details><summary>Answer</summary>

**B.** Domain order is destroyed; unpaired spins still respond weakly, giving paramagnetism.

</details>

### 7. Coercivity

Coercivity $H_c$ of a material is:

- A. the field at which $B$ is maximum
- B. the reverse field needed to make $B=0$ after saturation
- C. the remanent field at $H=0$
- D. the temperature at which magnetism vanishes

<details><summary>Answer</summary>

**B.** $H_c$ measures how hard it is to demagnetise; high $H_c$ → hard magnet.

</details>

### 8. Electromagnet core

The core of an electromagnet that must switch on and off rapidly should be:

- A. hard steel
- B. soft iron
- C. a permanent magnet
- D. a diamagnet

<details><summary>Answer</summary>

**B.** Soft iron has high $\mu_r$ and low $H_c$, so it magnetises strongly and demagnetises cleanly.

</details>

### 9. Torque on a dipole

The torque on a magnetic dipole in a uniform field is maximum when the angle between $\vec M$ and $\vec B$ is:

- A. $0^\circ$
- B. $30^\circ$
- C. $60^\circ$
- D. $90^\circ$

<details><summary>Answer</summary>

**D.** $\tau=MB\sin\theta$ is maximum at $\theta=90^\circ$.

</details>

### 10. Magnetic shielding

Magnetic shielding of a region is achieved by surrounding it with:

- A. a perfect conductor
- B. a high-permeability soft material
- C. a permanent magnet
- D. a diamagnetic liquid

<details><summary>Answer</summary>

**B.** A high-$\mu_r$ material provides a low-reluctance path that diverts field lines around the protected volume.

</details>

## Section B — 5 numerical-value questions

### 11. Axial field

A short magnet has moment $M=0.80\ \text{A}\,\text{m}^2$. Find the field on its axis at $0.20\ \text{m}$ from the centre.

<details><summary>Answer</summary>

$$
B = (10^{-7})\frac{2(0.80)}{(0.20)^3}
= \frac{1.6\times10^{-7}}{8.0\times10^{-3}}
= 2.0\times10^{-5}\ \text{T}.
$$

Answer: $2.0\times10^{-5}\ \text{T}$.

</details>

### 12. Earth's total field

At a place, $B_H=3.0\times10^{-5}\ \text{T}$ and $I=30^\circ$. Find the total field $B$.

<details><summary>Answer</summary>

$$
B = \frac{B_H}{\cos I}
= \frac{3.0\times10^{-5}}{\cos30^\circ}
= \frac{3.0\times10^{-5}}{0.866}
= 3.46\times10^{-5}\ \text{T}.
$$

Answer: $3.46\times10^{-5}\ \text{T}$.

</details>

### 13. Solenoid with core

A solenoid has $n=1000\ \text{turns/m}$, carries $I=2.0\ \text{A}$, and its core has $\mu_r=500$ (unsaturated). Find $B$.

<details><summary>Answer</summary>

$$
B = \mu_0\mu_r n I
= (4\pi\times10^{-7})(500)(1000)(2.0)
= (4\pi\times10^{-7})(1.0\times10^6)
= 1.2566\ \text{T}.
$$

Answer: $1.26\ \text{T}$.

</details>

### 14. Magnetisation of a paramagnet

A paramagnet has $\chi_m=2.0\times10^{-3}$ and is placed in $H=1.0\times10^4\ \text{A}/\text{m}$. Find its magnetisation $M$.

<details><summary>Answer</summary>

$$
M = \chi_m H = (2.0\times10^{-3})(1.0\times10^4)=20\ \text{A}/\text{m}.
$$

Answer: $20\ \text{A}/\text{m}$.

</details>

### 15. Electromagnet gap field

An electromagnet has $N=400$ turns carrying $I=5.0\ \text{A}$, with an air gap of $2.0\ \text{mm}$ and area $1.0\times10^{-3}\ \text{m}^2$ (core reluctance negligible). Find $B$ in the gap.

<details><summary>Answer</summary>

$\mathcal{F}=NI=(400)(5.0)=2.0\times10^3\ \text{A·turns}$.

$\mathcal{R}_{\text{gap}}=\frac{2.0\times10^{-3}}{(4\pi\times10^{-7})(1.0\times10^{-3})}
= \frac{2.0\times10^{-3}}{1.2566\times10^{-9}}
\approx 1.59\times10^6\ \text{A·turns}/\text{Wb}$.

$\Phi=\mathcal{F}/\mathcal{R}\approx2.0\times10^3/1.59\times10^6=1.26\times10^{-3}\ \text{Wb}$.

$B=\Phi/A=1.26\times10^{-3}/1.0\times10^{-3}=1.26\ \text{T}$.

Answer: $1.26\ \text{T}$.

</details>

## Section C — 3 assertion–reason questions

### 16. Closed field lines

**Assertion (A):** Magnetic field lines always form closed loops.

**Reason (R):** There are no magnetic monopoles.

- A. Both A and R are true and R is the correct explanation of A.
- B. Both A and R are true but R is not the correct explanation of A.
- C. A is true but R is false.
- D. A is false but R is true.

<details><summary>Answer</summary>

**A.** Gauss's law for magnetism $\oint\vec B\cdot d\vec A=0$ is exactly the statement that no monopoles exist, which forces field lines to close.

</details>

### 17. Temperature and susceptibility

**Assertion (A):** The susceptibility of a paramagnet increases as temperature decreases.

**Reason (R):** For a paramagnet, $\chi=C/T$.

- A. Both A and R are true and R is the correct explanation of A.
- B. Both A and R are true but R is not the correct explanation of A.
- C. A is true but R is false.
- D. A is false but R is true.

<details><summary>Answer</summary>

**A.** $\chi=C/T$ gives $\chi\propto 1/T$, so lowering $T$ raises $\chi$.

</details>

### 18. Permanent magnet material

**Assertion (A):** Soft iron is used to make permanent magnets.

**Reason (R):** Soft iron has high coercivity.

- A. Both A and R are true and R is the correct explanation of A.
- B. Both A and R are true but R is not the correct explanation of A.
- C. A is true but R is false.
- D. Both A and R are false.

<details><summary>Answer</summary>

**D.** Permanent magnets need hard materials with high $H_c$; soft iron has low $H_c$ and is used for electromagnets/transformers. Both statements are false.

</details>

## Section D — 2 matching / multi-statement questions

### 19. Match the material to its susceptibility signature

Match Column I with Column II.

| Column I | Column II |
| --- | --- |
| P. Diamagnet | 1. $\chi$ small positive, $\propto 1/T$ |
| Q. Paramagnet | 2. $\chi$ large positive, hysteresis |
| R. Ferromagnet | 3. $\chi$ small negative |
| S. Superconductor | 4. $\chi=-1$ (perfect diamagnet) |

<details><summary>Answer</summary>

P–3, Q–1, R–2, S–4.

Diamagnets have small negative $\chi$; paramagnets small positive $\chi=C/T$; ferromagnets large positive $\chi$ with hysteresis; superconductors are perfect diamagnets with $\chi=-1$.

</details>

### 20. Multi-statement: electromagnet effectiveness

Which of the following statements are correct?

I. The core should be a soft magnetic material.

II. Increasing the current always increases the field without limit.

III. For a small air gap, the gap reluctance dominates the magnetic circuit.

IV. Using a hard steel core reduces hysteresis loss.

- A. I and III only
- B. I, II and III only
- C. II and IV only
- D. I, III and IV only

<details><summary>Answer</summary>

**A.** I is correct (soft core gives high $\mu_r$ and easy demagnetisation). III is correct (gap reluctance $\gg$ core reluctance). II is false: the core saturates, after which extra current adds little field. IV is false: hard steel has high hysteresis loss; soft materials have low loss.

</details>

## Review by error, not by score

| If you missed… | Revisit | Then retry |
| --- | --- | --- |
| 1–2 or 11 | Bar magnets and magnetic field | Recompute the $1/r^3$ fields and the axial/equatorial factor of two. |
| 3–4, 12 or 16 | Gauss's law and Earth's magnetism | Re-derive $B_H$, $B_V$, $I$ and the closed-flux rule. |
| 5–7, 14, 17 or 19 | Magnetisation and magnetic intensity / Magnetic properties | Check SI units and the sign of $\chi$. |
| 8, 10, 13, 15, 18 or 20 | Permanent magnets and electromagnets | Re-run the magnetic-circuit calculation and the saturation check. |
| 9 | Bar magnets and magnetic field | Re-derive $\tau=MB\sin\theta$ and where it vanishes. |

<learning-block type="recap" title="Ready for the real thing?">

Aim for at least 22 correct out of 25 with a written method choice for every question. Questions you solve correctly but cannot justify are revision targets, not mastered topics. If saturation, SI units or the Earth-field components still feel shaky, revisit the named module before the exam.

</learning-block>