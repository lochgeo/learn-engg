## Why the nucleus is its own subject

The atom’s electrons determine chemistry, but almost all of its mass and all of its positive charge sit in a region roughly $10^{-5}$ of the atom’s radius. That region is the **nucleus**, and it obeys rules that have nothing to do with Coulomb attraction to electrons: the strong nuclear force, mass–energy equivalence, and radioactive decay. This module sets up the vocabulary—what a nucleus is made of, how big it is, and how its mass is quoted—so the rest of the chapter has a firm footing.

## 1. Composition: protons and neutrons

A nucleus is a cluster of two kinds of particle, collectively called **nucleons**:

- **proton**: charge $+e$, mass $m_p\approx1.00728\ \text{u}$;
- **neutron**: charge $0$, mass $m_n\approx1.00867\ \text{u}$.

The number of protons is the **atomic number** $Z$; it fixes the element. The total number of nucleons is the **mass number** $A$. The neutron count is therefore

$$
N=A-Z.
$$

A specific nucleus is written $^A_Z\mathrm{X}$, for example $^{56}_{26}\mathrm{Fe}$ or $^{14}_{6}\mathrm{C}$. Nuclei with the same $Z$ but different $A$ are **isotopes** (same element, different neutron count); same $A$ but different $Z$ are **isobars** (different elements); same $N$ are **isotones**. A nucleus in an excited internal state is an **isomer** of its ground state.

Electrons are outside; their count equals $Z$ in a neutral atom. The nucleus itself is unaffected by chemical reactions, which is why isotopes behave almost identically in chemistry but differently in nuclear physics.

## 2. Size: the $A^{1/3}$ law

Nuclear radii are measured by scattering (high-energy electrons or alpha particles) and are found to follow

$$
R = R_0\,A^{1/3},\qquad R_0\approx1.2\times10^{-15}\ \text{m}=1.2\ \text{fm}.
$$

The cube-root dependence is the signature of **constant density**: if every nucleon occupies roughly the same volume, then volume $\propto A$, so radius $\propto A^{1/3}$. A heavy nucleus is not a scaled-up proton; it is a larger drop of the same “nuclear matter”. Typical radii run from about $1.2\ \text{fm}$ for hydrogen to roughly $7\ \text{fm}$ for uranium.

Because the volume scales with $A$, the density is essentially the same for all nuclei:

$$
\rho = \frac{A m_u}{\frac43\pi R^3}
     \approx \frac{m_u}{\frac43\pi R_0^3}
     \approx 2.3\times10^{17}\ \text{kg/m}^3.
$$

This is $10^{14}$ times the density of water—an immediate hint that nuclear matter is incompressible and that the force binding it must be very strong and short-ranged.

## 3. Mass: nuclear mass versus atomic mass

Masses in nuclear work are quoted in **atomic mass units**: $1\ \text{u}=1.66054\times10^{-27}\ \text{kg}$, defined so that a neutral $^{12}\mathrm{C}$ atom has mass exactly $12\ \text{u}$. The mass of a nucleus is **not** the same as the atomic mass printed in tables; an atom includes $Z$ electrons. The relation is

$$
M_{\text{nucleus}} \approx M_{\text{atom}} - Z m_e + \frac{B_e}{c^2},
$$

where $m_e=0.0005486\ \text{u}$ and $B_e$ is the total electron binding energy (keV scale, negligible compared with MeV nuclear energies). In practice one uses atomic masses throughout and lets the electron masses cancel in reaction Q-values, but one must be aware they are there.

A second, crucial point: the mass of a nucleus is **less** than the sum of the masses of its free protons and neutrons. That difference is the **mass defect**, and it is the subject of the next module. It is the source of all nuclear energy.

## 4. Worked example: radius and density of $^{56}\mathrm{Fe}$

Take iron-56, $A=56$.

Radius:
$$
R = 1.2\times 56^{1/3}\ \text{fm}.
$$
Since $56^{1/3}\approx3.83$,
$$
R \approx 1.2\times3.83 \approx 4.6\ \text{fm}=4.6\times10^{-15}\ \text{m}.
$$

Nuclear mass (using atomic mass $55.935\ \text{u}$ and subtracting 26 electrons):
$$
M \approx 55.935-26(0.000549)\approx55.921\ \text{u}
  =55.921\times1.6605\times10^{-27}\approx9.29\times10^{-26}\ \text{kg}.
$$

Volume:
$$
V=\frac43\pi R^3
  \approx\frac43\pi(4.6\times10^{-15})^3
  \approx4.0\times10^{-43}\ \text{m}^3.
$$

Density:
$$
\rho=\frac{M}{V}\approx\frac{9.29\times10^{-26}}{4.0\times10^{-43}}
     \approx2.3\times10^{17}\ \text{kg/m}^3.
$$

**Sanity check:** the radius is a few femtometres, much smaller than the atomic radius ($\sim10^{-10}\ \text{m}$), and the density matches the universal nuclear density. The numbers are physically consistent.

## 5. A common mistake

**Using the atomic mass as the nuclear mass in a binding-energy calculation without subtracting electrons.** For a heavy nucleus like $^{238}\mathrm{U}$ the electron mass is $92\times0.000549\ \text{u}\approx0.0505\ \text{u}$, which corresponds to about $47\ \text{MeV}$. That is not negligible when comparing masses to a few MeV. The safe habit is to work consistently with atomic masses on both sides of a reaction so the electron masses cancel, or to subtract $Z m_e$ explicitly when computing a nuclear mass.

A related error is treating $R_0=1.2\ \text{fm}$ as an exact radius of every nucleon; it is an average, and measured radii vary by a few percent with $A$ and with the method used.

## Try it yourself

**A.** Estimate the radius of a $^{238}\mathrm{U}$ nucleus.

<details><summary>Show the reasoning</summary>

$238^{1/3}\approx6.20$, so $R\approx1.2\times6.20\approx7.4\ \text{fm}$. This is about $7.4\times10^{-15}\ \text{m}$, still $\sim10^5$ times smaller than the atom.
</details>

**B.** How many times denser is nuclear matter than water ($1000\ \text{kg/m}^3$)?

<details><summary>Show the reasoning</summary>

$\rho_{\text{nuc}}/\rho_{\text{water}}\approx2.3\times10^{17}/10^3=2.3\times10^{14}$. Nuclear matter is roughly $10^{14}$ times denser than water.
</details>

**C.** An atom has mass number $A=40$ and atomic number $Z=20$. How many neutrons does its nucleus contain, and what is a sensible name for a nucleus with the same $A$ but $Z=19$?

<details><summary>Show the reasoning</summary>

$N=A-Z=40-20=20$ neutrons. A nucleus with the same $A=40$ but $Z=19$ is an **isobar** (same mass number, different element).
</details>

## Remember

- A nucleus contains $Z$ protons and $N=A-Z$ neutrons; notation $^A_Z\mathrm{X}$.
- Radius scales as $R=R_0 A^{1/3}$ with $R_0\approx1.2\ \text{fm}$; density is universal.
- Nuclear mass is atomic mass minus $Z$ electron masses (electron binding energy negligible).
- The nucleus is $\sim10^5$ times smaller than the atom and $\sim10^{14}$ times denser than water.
- Keep electron masses consistent when comparing masses.

The next module turns the “missing mass” into energy: it defines mass defect and binding energy, and shows why iron-56 sits at the peak of nuclear stability.