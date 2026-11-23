## Your study plan for this chapter

This chapter is a chain: charge produces a field, the field produces force and torque, and flux links the field on a closed surface to the charge inside. A focused first pass takes about **2 hours 15 minutes**:

1. **Charge, conductors and Coulomb's law** — 22 min
2. **Electric field and field lines** — 22 min
3. **Electric dipole and torque** — 22 min
4. **Electric flux and Gauss's law** — 22 min
5. **Gauss's law applications** — 22 min
6. **This mastery check** — 25 min

After each lesson, close the explanation and redo its worked example from a blank page. Mark a module complete only when you can state what its formula is for and when it fails. The optional timed JEE Main set comes after this check; it is most useful once you can choose a method without prompting.

## First choose the tool

| Clue in the question | Start with |
| --- | --- |
| Two or more point charges and a force | Coulomb's law, then vector addition |
| Field at a point from several charges | Superposition: $\vec E=\sum kq_i\hat r_i/r_i^2$ |
| Charge in a known field | $\vec F=q\vec E$, then $\vec a=\vec F/m$ |
| Torque on a dipole | $\vec\tau=\vec p\times\vec E$, $\tau=pE\sin\theta$ |
| Energy or work for a dipole | $U=-\vec p\cdot\vec E$ and $W_{\text{field}}=-\Delta U$ |
| Flux through a closed surface | $\Phi=q_{\text{encl}}/\varepsilon_0$ |
| Field of a long line | Coaxial cylinder: $E=\lambda/(2\pi\varepsilon_0r)$ |
| Field of a large sheet | Pillbox: $E=\sigma/(2\varepsilon_0)$ |
| Field near a conductor surface | $E=\sigma/\varepsilon_0$ outside, zero inside |
| Field of a shell or sphere | Compare $r$ with $R$ before choosing the formula |

## Mastery check

Try each question without looking at the answer. Take $k=9.0\times10^9\ \text{N}\,\text{m}^2/\text{C}^2$ and $\varepsilon_0=8.85\times10^{-12}\ \text{C}^2/(\text{N}\,\text{m}^2)$.

### 1. Force between two small charges

A charge of $+3.0\ \mu\text{C}$ and a charge of $-3.0\ \mu\text{C}$ are $0.20\ \text{m}$ apart in air. Find the magnitude and direction of the force on each.

<details><summary>Answer and reasoning</summary>

$$
F=(9.0\times10^9)\frac{(3.0\times10^{-6})^2}{(0.20)^2}
=\frac{8.1\times10^{-2}}{0.040}=2.0\ \text{N}.
$$

The charges have opposite signs, so the force is attractive: each charge is pulled towards the other. The two forces are equal and opposite, as Newton's third law requires.
</details>

### 2. Field from two charges

Charges $+4.0\ \mu\text{C}$ and $-4.0\ \mu\text{C}$ are $0.60\ \text{m}$ apart. Find the electric field at the midpoint.

<details><summary>Answer and reasoning</summary>

Each charge is $0.30\ \text{m}$ from the midpoint. Each field has magnitude

$$
E=(9.0\times10^9)\frac{4.0\times10^{-6}}{(0.30)^2}
=\frac{3.6\times10^4}{0.090}=4.0\times10^5\ \text{N/C}.
$$

The field from the positive charge points towards the negative charge, and the field from the negative charge points towards the negative charge as well. The two vectors are parallel, so

$$
E_{\text{net}}=8.0\times10^5\ \text{N/C}
$$

from the positive charge towards the negative charge. Had both charges been positive, the fields would have cancelled at the midpoint.
</details>

### 3. Dipole torque and energy

A dipole has moment $3.0\times10^{-9}\ \text{C}\,\text{m}$ and sits at $60^\circ$ to a uniform field of $4.0\times10^4\ \text{N/C}$. Find the torque magnitude and the potential energy.

<details><summary>Answer and reasoning</summary>

$$
\tau=pE\sin60^\circ=(3.0\times10^{-9})(4.0\times10^4)(0.866)
\approx1.0\times10^{-4}\ \text{N}\,\text{m}.
$$

The potential energy is

$$
U=-pE\cos60^\circ=-(1.2\times10^{-4})(0.50)=-6.0\times10^{-5}\ \text{J}.
$$

The negative sign means the dipole is below the zero-energy configuration at $90^\circ$, as it should be for an angle less than $90^\circ$.
</details>

### 4. Flux through a cube

A charge of $2.0\ \mu\text{C}$ is at the centre of a cube. Find the total flux through the cube and the flux through one face.

<details><summary>Answer and reasoning</summary>

$$
\Phi_{\text{total}}=\frac{2.0\times10^{-6}}{8.85\times10^{-12}}
\approx2.3\times10^5\ \text{N}\,\text{m}^2/\text{C}.
$$

By symmetry, each of the six faces carries the same flux:

$$
\Phi_{\text{face}}=\frac{2.3\times10^5}{6}\approx3.8\times10^4\ \text{N}\,\text{m}^2/\text{C}.
$$

The flux is positive because the enclosed charge is positive.
</details>

### 5. Field of a long line

An infinite line carries $\lambda=1.5\ \mu\text{C/m}$. Find the field at $0.25\ \text{m}$ from it.

<details><summary>Answer and reasoning</summary>

$$
E=\frac{2k\lambda}{r}
=\frac{2(9.0\times10^9)(1.5\times10^{-6})}{0.25}
=\frac{2.7\times10^4}{0.25}=1.1\times10^5\ \text{N/C}.
$$

The field points radially away from the line if the charge is positive, and it falls as $1/r$.
</details>

### 6. One sheet and two sheets

A large thin sheet has $\sigma=4.0\ \mu\text{C/m}^2$. Find the field just outside it. Then find the field between two such sheets carrying opposite charges.

<details><summary>Answer and reasoning</summary>

For one sheet,

$$
E=\frac{\sigma}{2\varepsilon_0}
=\frac{4.0\times10^{-6}}{2(8.85\times10^{-12})}
\approx2.3\times10^5\ \text{N/C}.
$$

Between two opposite sheets, both fields point the same way, so they add:

$$
E_{\text{between}}=2\left(\frac{\sigma}{2\varepsilon_0}\right)
=\frac{\sigma}{\varepsilon_0}\approx4.5\times10^5\ \text{N/C}.
$$

Outside the pair the fields cancel.
</details>

### 7. Conducting shell

A thin conducting spherical shell of radius $0.12\ \text{m}$ carries $+6.0\ \mu\text{C}$. Find the field at $0.06\ \text{m}$ and at $0.24\ \text{m}$ from the centre.

<details><summary>Answer and reasoning</summary>

At $0.06\ \text{m}$ the point is inside the shell, where $E=0$.

At $0.24\ \text{m}$ the shell behaves as a point charge at its centre:

$$
E=(9.0\times10^9)\frac{6.0\times10^{-6}}{(0.24)^2}
=\frac{5.4\times10^4}{0.0576}\approx9.4\times10^5\ \text{N/C},
$$

radially outward.
</details>

### 8. Uniform solid sphere

A uniformly charged non-conducting sphere has radius $0.20\ \text{m}$ and total charge $+8.0\ \mu\text{C}$. Use Gauss's law to derive the field inside at radius $r$, then evaluate it at $r=0.10\ \text{m}$.

<details><summary>Answer and reasoning</summary>

A concentric Gaussian sphere of radius $r<R$ encloses the fraction $r^3/R^3$ of the total charge:

$$
q_{\text{encl}}=Q\frac{r^3}{R^3}.
$$

Gauss's law gives

$$
E(4\pi r^2)=\frac{Qr^3}{\varepsilon_0R^3}
\quad\Rightarrow\quad
E=\frac{Qr}{4\pi\varepsilon_0R^3}=\frac{kQr}{R^3}.
$$

At $r=0.10\ \text{m}$,

$$
E=\frac{(9.0\times10^9)(8.0\times10^{-6})(0.10)}{(0.20)^3}
=\frac{7.2\times10^3}{8.0\times10^{-3}}=9.0\times10^5\ \text{N/C}.
$$

At the surface the field would be twice this value, $1.8\times10^6\ \text{N/C}$, and outside it falls as $1/r^2$.
</details>

### 9. Zero flux, non-zero field

A closed surface encloses zero net charge. Can the electric field be non-zero at points on the surface? Explain, and state the net flux.

<details><summary>Answer and reasoning</summary>

Yes. If a dipole is inside the surface, the field lines from the positive charge leave the surface and the same number enter near the negative charge. The field is non-zero almost everywhere on the surface, but the inward and outward fluxes cancel, so the net flux is zero. The same happens if all charges are outside: each external charge contributes zero net flux through the closed surface even though it contributes to the field on it.
</details>

### 10. Field lines and equilibrium

Why can two electric field lines never cross? And why is the net force on a dipole in a uniform field zero while the torque need not be?

<details><summary>Answer and reasoning</summary>

At any point, the electric field has a single definite magnitude and direction. If two field lines crossed, the field at the crossing point would have two directions at once, which is impossible. (A point where the field is zero is a special case where a line may effectively terminate or divide, but ordinary field lines do not cross.)

For a dipole in a uniform field, the forces on $+q$ and $-q$ are equal in magnitude and opposite, so their vector sum is zero. They act at different points, however, so they form a couple. Unless the dipole is aligned or anti-aligned with the field, the couple produces a torque $\vec\tau=\vec p\times\vec E$. A net force would require the two charges to sit in different field strengths, which needs a non-uniform field.
</details>

## Self-check

You are ready to move on when you can:

- convert microcoulombs, centimetres and millimetres before substituting into a formula;
- compute a force or field from several charges by adding vectors, not magnitudes;
- derive and use the axial and equatorial fields of a dipole, and distinguish them by the factor of two;
- compute torque and potential energy for a dipole and justify the sign of each;
- state Gauss's law, choose a Gaussian surface by symmetry, and explain why zero flux does not imply zero field;
- apply the line, sheet, shell and solid-sphere results and test the answer by its distance dependence;
- explain why the field inside a conductor is zero and why excess charge sits on its surface.

If any item still feels shaky, revisit that module and redo its questions without the reveal. Then attempt the timed JEE Main set.
