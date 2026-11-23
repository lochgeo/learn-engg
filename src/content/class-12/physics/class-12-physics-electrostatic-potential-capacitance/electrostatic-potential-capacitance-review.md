## Your study plan for this chapter

This chapter moves from a scalar description of the field to the devices that exploit it. A focused first pass takes about **2 hours 15 minutes**:

| Step | Module | Minutes |
| --- | --- | --- |
| 1 | Potential and potential difference | 22 |
| 2 | Potential energy and equipotential surfaces | 22 |
| 3 | Conductors, dielectrics and polarisation | 22 |
| 4 | Capacitance and the parallel-plate capacitor | 22 |
| 5 | Capacitor combinations and stored energy | 22 |
| 6 | This mastery check | 25 |

After each lesson, close the explanation and redo its worked example from a blank page. Mark a module complete only when you can state what its main formula is for and when it fails. Take a short break before the mastery check. The optional timed JEE Main set comes after this check; use it once you can choose a method without prompting.

## First choose the tool

| Clue in the question | Start with |
| --- | --- |
| Potential at a point from several point charges | Scalar sum $V=\sum kq_i/r_i$ |
| Work done in moving a charge | Field: $W=q(V_i-V_f)$; external agent: $q(V_f-V_i)$ |
| Field from potential, or potential from a uniform field | $E_x=-dV/dx$ or $E=\Delta V/d$ |
| Energy of a configuration of charges | Distinct pairs: $U=k\sum_{i<j}q_iq_j/r_{ij}$ |
| Equipotential surface geometry | Perpendicular to field lines; spacing shows field strength |
| Conductor in electrostatic equilibrium | $E=0$ inside, $V$ constant, $E=\sigma/\varepsilon_0$ outside |
| Dielectric with fixed free charge | $E=E_0/K$, $C=KC_0$ |
| Capacitance from geometry | $C=\varepsilon_0A/d$, $4\pi\varepsilon_0R$, or the shell/cylinder formula |
| Several capacitors | Series shares charge; parallel shares voltage |
| Energy stored | $U=Q^2/(2C)=\frac12CV^2=\frac12QV$ |
| Charged capacitors connected together | Common voltage, then energy-loss formula |

## Mastery check

Try each question without looking at the answer first. Take $k=9.0\times10^9\ \text{N}\,\text{m}^2/\text{C}^2$ and $\varepsilon_0=8.85\times10^{-12}\ \text{C}^2/(\text{N}\,\text{m}^2)$.

### 1. Potential from two charges

Charges $+4.0\ \mu\text{C}$ and $-4.0\ \mu\text{C}$ are $0.60\ \text{m}$ apart. Find the potential at a point $0.20\ \text{m}$ from the positive charge, on the line joining the charges.

<details><summary>Answer and reasoning</summary>

The point is $0.20\ \text{m}$ from the positive charge and $0.40\ \text{m}$ from the negative charge. Potentials add as scalars:

$$
V=(9.0\times10^9)\left(\frac{4.0\times10^{-6}}{0.20}-\frac{4.0\times10^{-6}}{0.40}\right)
=9.0\times10^4\ \text{V}.
$$

The positive contribution is twice the negative one because it is twice as close. The field at that point is not zero; only the potential has been calculated.
</details>

### 2. Work by the field

A $+2.0\ \mu\text{C}$ charge moves from a point at $100\ \text{V}$ to a point at $300\ \text{V}$. Find the work done by the electric field and by an external agent.

<details><summary>Answer and reasoning</summary>

The field does

$$
W_{\text{field}}=q(V_i-V_f)
=(2.0\times10^{-6})(100-300)
=-4.0\times10^{-4}\ \text{J}.
$$

The external agent must supply $+4.0\times10^{-4}\ \text{J}$ to move the positive charge to the higher potential without changing its kinetic energy.
</details>

### 3. Uniform field and equipotentials

A uniform electric field of $500\ \text{V/m}$ points east. Two points are $4.0\ \text{cm}$ apart along the field. Find the potential difference and state which point is higher.

<details><summary>Answer and reasoning</summary>

$$
|\Delta V|=Ed=(500)(0.040)=20\ \text{V}.
$$

The field points from high to low potential, so the western point is $20\ \text{V}$ higher than the eastern point. Moving east, the potential drops.
</details>

### 4. Potential energy of a pair

Find the potential energy of a $+5.0\ \mu\text{C}$ charge and a $-2.0\ \mu\text{C}$ charge separated by $0.10\ \text{m}$.

<details><summary>Answer and reasoning</summary>

$$
U=(9.0\times10^9)\frac{(5.0\times10^{-6})(-2.0\times10^{-6})}{0.10}
=-0.90\ \text{J}.
$$

The negative sign means the pair is bound: $0.90\ \text{J}$ must be supplied to separate them to infinity.
</details>

### 5. A charged conducting sphere

An isolated conducting sphere of radius $0.10\ \text{m}$ carries $10\ \mu\text{C}$. Find the potential at its surface, the field just outside, and the potential at its centre.

<details><summary>Answer and reasoning</summary>

$$
V=\frac{kQ}{R}
=\frac{(9.0\times10^9)(10\times10^{-6})}{0.10}
=9.0\times10^5\ \text{V},
$$

$$
E=\frac{kQ}{R^2}
=\frac{(9.0\times10^9)(10\times10^{-6})}{(0.10)^2}
=9.0\times10^6\ \text{V/m}.
$$

The conductor is an equipotential volume, so the potential at the centre is also $9.0\times10^5\ \text{V}$. The field inside is zero, but the potential is not.
</details>

### 6. Dielectric in a capacitor

A $100\ \text{pF}$ air capacitor is connected to a $50\ \text{V}$ battery. A dielectric of $K=4.0$ is inserted while the battery remains connected. Find the new capacitance and the charge on the plates.

<details><summary>Answer and reasoning</summary>

The battery holds $V=50\ \text{V}$ fixed, so

$$
C=KC_0=4(100)=400\ \text{pF},
\qquad
Q=CV=(400\times10^{-12})(50)=2.0\times10^{-8}\ \text{C}.
$$

The charge is $20\ \text{nC}$. The battery supplies the extra charge as the dielectric is inserted; the field $E=V/d$ stays the same.
</details>

### 7. Energy and changing geometry

A $20\ \mu\text{F}$ capacitor is charged to $200\ \text{V}$ and disconnected. The plate separation is then doubled. Find the initial energy, the final energy, and the work done by the external agent.

<details><summary>Answer and reasoning</summary>

The initial energy is

$$
U_i=\frac12(20\times10^{-6})(200)^2=0.40\ \text{J}.
$$

Doubling $d$ halves $C$ to $10\ \mu\text{F}$. The charge stays fixed at $Q=CV=4.0\times10^{-3}\ \text{C}$, so

$$
U_f=\frac{Q^2}{2C_f}
=\frac{(4.0\times10^{-3})^2}{2(10\times10^{-6})}
=0.80\ \text{J}.
$$

The external agent does $+0.40\ \text{J}$ of work pulling the plates apart. The field energy rises by that amount.
</details>

### 8. Series and parallel equivalents

Find the equivalent capacitance of a $6.0\ \mu\text{F}$ and a $3.0\ \mu\text{F}$ capacitor (i) in series and (ii) in parallel.

<details><summary>Answer and reasoning</summary>

Series:

$$
\frac{1}{C_{\text{eq}}}=\frac16+\frac13=\frac12
\quad\Rightarrow\quad
C_{\text{eq}}=2.0\ \mu\text{F}.
$$

Parallel:

$$
C_{\text{eq}}=6.0+3.0=9.0\ \mu\text{F}.
$$

The series value is smaller than the smaller capacitor; the parallel value is larger than the larger one.
</details>

### 9. Sharing charge

A $4.0\ \mu\text{F}$ capacitor charged to $100\ \text{V}$ is connected to an uncharged $6.0\ \mu\text{F}$ capacitor. Find the common voltage and the energy lost.

<details><summary>Answer and reasoning</summary>

The initial charge is

$$
Q=(4.0\times10^{-6})(100)=4.0\times10^{-4}\ \text{C}.
$$

The common voltage is

$$
V=\frac{Q}{C_1+C_2}
=\frac{4.0\times10^{-4}}{10\times10^{-6}}
=40\ \text{V}.
$$

The energies are

$$
U_i=\frac12(4.0\times10^{-6})(100)^2=0.020\ \text{J},
$$

$$
U_f=\frac12(10\times10^{-6})(40)^2=0.0080\ \text{J}.
$$

The loss is $0.012\ \text{J}$, dissipated as heat and radiation while the charge redistributes.
</details>

### 10. Explain the dielectric effect

An isolated charged capacitor has charge $Q$, capacitance $C$, voltage $V$, field $E$ and energy $U$. A dielectric of constant $K$ is inserted. State what happens to each quantity and why.

<details><summary>Answer and reasoning</summary>

Because the capacitor is isolated, $Q$ stays the same. The capacitance becomes $KC$, so the voltage becomes $V/K$ and the field becomes $E/K$. The energy becomes

$$
U'=\frac{Q^2}{2(KC)}=\frac{U}{K}.
$$

The dielectric polarises, and its bound surface charge opposes the field of the free charge. The reduced field means a smaller voltage for the same charge, hence a larger capacitance and less stored energy.
</details>

## Self-check

You are ready to move on when you can:

- compute potential from several point charges by scalar addition, keeping the signs;
- use $W=q(V_i-V_f)$ for the field and $q(V_f-V_i)$ for an external agent without hesitating;
- move between potential and field with $E_x=-dV/dx$ and $E=\Delta V/d$;
- compute the potential energy of a pair or a small system without double counting;
- explain why a conductor is an equipotential and why its internal field is zero;
- predict whether $Q$ or $V$ stays fixed when a dielectric is inserted, and adjust the other quantities accordingly;
- derive or quote $C=\varepsilon_0A/d$ and use it with consistent units;
- reduce series and parallel networks and find the charge and voltage on each branch;
- choose between $U=Q^2/(2C)$ and $U=\frac12CV^2$ based on what is fixed;
- account for the energy lost when charged capacitors are connected.

If one item still feels shaky, revisit that module and redo its questions without the reveal.
