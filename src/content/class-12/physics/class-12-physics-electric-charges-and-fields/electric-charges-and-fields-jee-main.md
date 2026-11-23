## JEE Main sprint: how to use this set

This is a **50-minute, no-notes** practice paper for after you have worked through the chapter. Spend roughly 15 minutes on Section A, 20 on Section B, 10 on Section C and 5 on Section D. If a question stalls for more than 90 seconds, mark it and move on; the paper rewards choosing a method quickly.

Before writing an equation, name the source: Coulomb force, superposition, dipole torque, flux, or a Gaussian surface. Most lost marks in this chapter come from using the point-charge formula for a line or a sheet, or from forgetting a factor of two.

## Conditions sheet

| Situation | Start with | Check before using it |
| --- | --- | --- |
| Force between point charges | $F=k|q_1q_2|/r^2$ | Convert to metres; use absolute charges for magnitude. |
| Field from several charges | $\vec E=\sum kq_i\hat r_i/r_i^2$ | Add vectors, not magnitudes. |
| Charge in a field | $\vec F=q\vec E$, $\vec a=q\vec E/m$ | The force on a negative charge is opposite the field. |
| Dipole in a field | $\tau=pE\sin\theta$, $U=-pE\cos\theta$ | Torque is zero at $0^\circ$ and $180^\circ$. |
| Closed surface | $\Phi=q_{\text{encl}}/\varepsilon_0$ | Only enclosed charge counts for the net flux. |
| Long line | $E=\lambda/(2\pi\varepsilon_0r)=2k\lambda/r$ | Field falls as $1/r$. |
| Large thin sheet | $E=\sigma/(2\varepsilon_0)$ | Uniform; a conductor surface gives $\sigma/\varepsilon_0$. |
| Spherical shell | $E=kQ/r^2$ outside, $0$ inside | Compare $r$ with the shell radius. |
| Solid sphere, inside | $E=kQr/R^3$ | Zero at the centre; maximum at the surface. |

Constants: $k=9.0\times10^9\ \text{N}\,\text{m}^2/\text{C}^2$, $\varepsilon_0=8.85\times10^{-12}\ \text{C}^2/(\text{N}\,\text{m}^2)$, $e=1.60\times10^{-19}\ \text{C}$. No gravitational calculation is needed; if one appears, use $g=10\ \text{m/s}^2$.

## Section A — 10 rapid MCQs

### 1. Scaling Coulomb's law

Two point charges separated by a distance $r$ exert a force $F$ on each other. Both charges are doubled and the separation is halved. The new force is:

- A. $4F$
- B. $8F$
- C. $16F$
- D. $32F$

<details><summary>Answer</summary>

**C.** The force is proportional to $q_1q_2/r^2$. Doubling each charge multiplies the force by $2\times2=4$; halving the separation divides by $(1/2)^2=1/4$, multiplying by $4$. The total factor is $4\times4=16$.
</details>

### 2. Field at the midpoint

Two equal positive point charges are fixed a distance $2d$ apart. The electric field at their midpoint is:

- A. $2kq/d^2$ towards one charge
- B. $kq/d^2$ towards the other charge
- C. zero
- D. $4kq/d^2$ perpendicular to the joining line

<details><summary>Answer</summary>

**C.** Each charge produces a field of magnitude $kq/d^2$ at the midpoint. The two vectors point in opposite directions along the joining line, so they cancel. The *potential* at the midpoint would add, but the field is a vector.
</details>

### 3. Flux through one face

A point charge $q$ is at the centre of a cube. The electric flux through one face is:

- A. $q/\varepsilon_0$
- B. $q/(6\varepsilon_0)$
- C. $q/(3\varepsilon_0)$
- D. zero

<details><summary>Answer</summary>

**B.** The total flux through the closed cube is $q/\varepsilon_0$. By symmetry the six faces share it equally, so each face carries $q/(6\varepsilon_0)$.
</details>

### 4. Aligned dipole

An electric dipole is aligned with a uniform electric field. Which statement is correct?

- A. Torque is $pE$ and potential energy is zero.
- B. Torque is zero and potential energy is $-pE$.
- C. Torque is zero and potential energy is $+pE$.
- D. Torque is $pE$ and potential energy is $-pE$.

<details><summary>Answer</summary>

**B.** At $\theta=0^\circ$, $\tau=pE\sin0^\circ=0$ and $U=-pE\cos0^\circ=-pE$. This is the stable equilibrium: the dipole is at its lowest energy and is not being rotated away.
</details>

### 5. Inside a charged conductor

A solid conducting sphere carries a net positive charge. At a point inside the conductor, away from its surface, the electric field is:

- A. $kQ/r^2$ outward
- B. $kQ/R^2$ outward
- C. zero
- D. $\sigma/\varepsilon_0$ outward

<details><summary>Answer</summary>

**C.** In electrostatic equilibrium the field inside a conductor is zero. A Gaussian surface inside the conductor encloses no net charge, and any free charge resides on the outer surface. The field just outside the surface is $\sigma/\varepsilon_0$.
</details>

### 6. Why field lines do not cross

Two electric field lines cannot cross because:

- A. the field is always positive
- B. the field would have two directions at the crossing point
- C. the field is zero everywhere between lines
- D. field lines are particle paths

<details><summary>Answer</summary>

**B.** The electric field has one definite direction at each point. A crossing would require two directions at the same point. Field lines also are not the trajectories of charged particles.
</details>

### 7. Field of an infinite sheet

An infinite thin sheet has uniform surface charge density $\sigma$. As the distance from the sheet increases, the electric field magnitude:

- A. decreases as $1/r$
- B. decreases as $1/r^2$
- C. stays constant
- D. increases as $r$

<details><summary>Answer</summary>

**C.** Gauss's law gives $E=\sigma/(2\varepsilon_0)$, independent of distance. The field lines are parallel and equally spaced on each side. Real finite sheets approximate this near their centre.
</details>

### 8. Counting electrons

How many electrons make up a charge of $-1.0\ \mu\text{C}$?

- A. $6.25\times10^{12}$
- B. $1.60\times10^{13}$
- C. $6.25\times10^{18}$
- D. $1.60\times10^{19}$

<details><summary>Answer</summary>

**A.**

$$
n=\frac{1.0\times10^{-6}}{1.60\times10^{-19}}=6.25\times10^{12}.
$$

Each electron carries $-1.60\times10^{-19}\ \text{C}$, so the number is the total charge divided by $e$.
</details>

### 9. Equatorial field direction

For an electric dipole, the field at a point on the perpendicular bisector, far from the dipole, is:

- A. parallel to $\vec p$
- B. antiparallel to $\vec p$
- C. perpendicular to $\vec p$
- D. zero

<details><summary>Answer</summary>

**B.** On the equatorial line, the field is $E\approx kp/r^3$ and points opposite to the dipole moment, which runs from the negative to the positive charge. On the axial line the field is parallel to $\vec p$ and twice as large.
</details>

### 10. Field between two charged plates

Two large parallel conducting plates carry equal and opposite surface charge densities $+\sigma$ and $-\sigma$. The field between the plates is:

- A. $\sigma/(2\varepsilon_0)$
- B. $\sigma/\varepsilon_0$
- C. $2\sigma/\varepsilon_0$
- D. zero

<details><summary>Answer</summary>

**B.** Each plate contributes $\sigma/(2\varepsilon_0)$ between the plates, and the two contributions point the same way. Outside the plates they point in opposite directions and cancel. This is the field of an ideal parallel-plate capacitor.
</details>

## Section B — 5 numerical-value questions

### 11. Force between microcoulomb charges

Charges of $+2.0\ \mu\text{C}$ and $+5.0\ \mu\text{C}$ are $0.10\ \text{m}$ apart in air. Find the force magnitude in newtons.

<details><summary>Answer</summary>

$$
F=(9.0\times10^9)\frac{(2.0\times10^{-6})(5.0\times10^{-6})}{(0.10)^2}
=\frac{9.0\times10^{-2}}{0.010}=9.0\ \text{N}.
$$

The force is repulsive because both charges are positive.
</details>

### 12. Field of a point charge

Find the electric field magnitude at $0.30\ \text{m}$ from a point charge of $+3.0\ \mu\text{C}$.

<details><summary>Answer</summary>

$$
E=(9.0\times10^9)\frac{3.0\times10^{-6}}{(0.30)^2}
=\frac{2.7\times10^4}{0.090}=3.0\times10^5\ \text{N/C}.
$$

The field points radially away from the positive charge.
</details>

### 13. Charge from flux

A closed surface has a net outward electric flux of $4.52\times10^5\ \text{N}\,\text{m}^2/\text{C}$. Find the enclosed charge in microcoulombs.

<details><summary>Answer</summary>

$$
q_{\text{encl}}=\varepsilon_0\Phi
=(8.85\times10^{-12})(4.52\times10^5)
\approx4.0\times10^{-6}\ \text{C}=4.0\ \mu\text{C}.
$$

The outward flux is positive, so the enclosed charge is positive.
</details>

### 14. Field of a long line

An infinite line charge has $\lambda=5.0\ \mu\text{C/m}$. Find the field magnitude at $0.10\ \text{m}$ from the line.

<details><summary>Answer</summary>

$$
E=\frac{2k\lambda}{r}
=\frac{2(9.0\times10^9)(5.0\times10^{-6})}{0.10}
=\frac{9.0\times10^4}{0.10}=9.0\times10^5\ \text{N/C}.
$$

The field points radially away from a positive line and falls as $1/r$.
</details>

### 15. Torque on a dipole

A dipole has $p=6.0\times10^{-9}\ \text{C}\,\text{m}$ and is at $30^\circ$ to a uniform field $E=4.0\times10^4\ \text{N/C}$. Find the torque magnitude in $\text{N}\,\text{m}$.

<details><summary>Answer</summary>

$$
\tau=pE\sin30^\circ=(6.0\times10^{-9})(4.0\times10^4)(0.50)
=1.2\times10^{-4}\ \text{N}\,\text{m}.
$$

The maximum torque for this dipole and field is $2.4\times10^{-4}\ \text{N}\,\text{m}$ at $90^\circ$.
</details>

## Section C — 3 assertion–reason questions

Use these options:

- **A.** Both Assertion and Reason are true, and the Reason is the correct explanation of the Assertion.
- **B.** Both Assertion and Reason are true, but the Reason is not the correct explanation of the Assertion.
- **C.** Assertion is true, but Reason is false.
- **D.** Assertion is false, but Reason is true.

### 16. Flux and field

**Assertion:** The net electric flux through a closed surface that encloses no net charge is zero.

**Reason:** The electric field must be zero everywhere on such a surface.

<details><summary>Answer</summary>

**C.** The assertion is true: Gauss's law gives $\Phi=q_{\text{encl}}/\varepsilon_0=0$. The reason is false. A closed surface around a dipole has zero net flux while the field is non-zero at most points; inward and outward contributions cancel.
</details>

### 17. Field inside a conductor

**Assertion:** The electric field inside a conductor in electrostatic equilibrium is zero.

**Reason:** Free electrons in the conductor move until their own field cancels any applied field inside the material.

<details><summary>Answer</summary>

**A.** Both statements are true, and the reason is the mechanism behind the assertion. If an internal field remained, free electrons would continue to move, so equilibrium requires the net internal field to vanish. Excess charge then resides on the surface.
</details>

### 18. Scope of Gauss's law

**Assertion:** Gauss's law can be used to calculate the electric field of any charge distribution by choosing a suitable closed surface.

**Reason:** Evaluating the flux integral requires knowing the direction and magnitude of the field on the chosen surface.

<details><summary>Answer</summary>

**D.** The assertion is false. Gauss's law is always true, but extracting $E$ by division requires symmetry: the field must be constant in magnitude and either parallel or perpendicular to the surface. Without such symmetry, the integral cannot be evaluated in terms of a single unknown $E$. The reason is true and explains why the method is limited.
</details>

## Section D — 2 matching and multi-statement questions

### 19. Matching charge distributions to fields

Match each distribution in Column I with its field in Column II. In Column II, $r$ is the distance from the distribution.

| Column I | Column II |
| --- | --- |
| A. Infinite line charge | P. $E\propto1/r$ |
| B. Infinite thin sheet | Q. $E$ independent of distance |
| C. Point charge | R. $E\propto1/r^2$ |
| D. Inside a uniformly charged thin shell | S. $E=0$ |

<details><summary>Answer</summary>

**A–P, B–Q, C–R, D–S.**

The line gives $E=2k\lambda/r$; the sheet gives $E=\sigma/(2\varepsilon_0)$; a point charge gives $kQ/r^2$; and a thin shell has zero field inside. A solid uniformly charged sphere inside would instead give $E\propto r$, which is why that option is not in the list.
</details>

### 20. Charge at the centre of a cube

A point charge $Q$ sits at the centre of a cube. Which statements are correct?

(i) The total flux through the cube is $Q/\varepsilon_0$.

(ii) The flux through each face is $Q/(6\varepsilon_0)$.

(iii) The electric field is uniform over each face.

(iv) Replacing the cube by a sphere of the same volume, centred on the charge, leaves the total flux unchanged.

- A. (i) and (ii) only
- B. (i), (ii) and (iv) only
- C. (i), (iii) and (iv) only
- D. all four

<details><summary>Answer</summary>

**B.** Statement (iii) is false: the distance from the centre charge varies across a flat face, so the field strength and direction vary. Statements (i), (ii) and (iv) are true. Total flux depends only on the enclosed charge, not on the shape or size of the closed surface, and symmetry gives the one-sixth share.
</details>

## Review by error, not by score

| If you missed… | Revisit | Then retry |
| --- | --- | --- |
| 1, 8, 11 or 12 | Charge, conductors and Coulomb’s law | Convert to SI first, then separate magnitude from direction. |
| 2, 5, 6 or 17 | Electric field and field lines | Draw the field vectors and check for cancellation. |
| 4, 9 or 15 | Electric dipole and torque | Write $\tau=pE\sin\theta$ and $U=-pE\cos\theta$ before substituting. |
| 3, 13, 16, 18, 19 or 20 | Electric flux and Gauss’s law | Name the enclosed charge and check whether symmetry really exists. |
| 7, 10 or 14 | Gauss’s law applications | Distinguish the line’s $1/r$ from the sheet’s constant field. |

<learning-block type="recap" title="Ready for the next chapter?">

Aim for at least 18 correct out of 20, with a written method choice for every question. A correct answer that cannot be justified is a revision target. The next chapter, on electrostatic potential and capacitance, reuses the field ideas here and adds energy to the picture.

</learning-block>
