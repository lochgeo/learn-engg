## From waves to addresses

De Broglie's waves found their proper mathematics in Erwin Schrödinger's equation (1926). Solved for a hydrogen atom, it delivers a family of allowed standing waves — wave functions $\psi$ — each labelled by whole numbers. The Bohr energies survive in the solutions, but so does something new: for each energy, several distinct waves exist, differing in shape and in how their amplitude is spread about the nucleus. Since $|\psi|^2$ is a probability density — the chance per unit volume of finding the electron there — the atom becomes a geometric object, not a track. The labels of the waves are the **quantum numbers**, and every electron address in every atom is written with four of them.

## 1. The principal quantum number $n$

$n=1,2,3,\ldots$ is the first solution label of the wave equation. It fixes

- the **shell** ($n=1,2,3\ldots$: K, L, M, N shells in X-ray notation);
- the approximate **size** of the region where the electron lives — larger $n$, farther out;
- the **energy** level: in hydrogen exactly $E_n=-13.6/n^{2}\ \text{eV}$, the Bohr result recovered;
- in multi-electron atoms, roughly the energy too, sorted further by $l$.

The number of orbital states with a given $n$ is $n^2$, and a full shell holds $2n^2$ electrons.

## 2. The azimuthal (angular momentum) quantum number $l$

For each $n$, $l$ can take the values $0,1,2,\ldots,n-1$. It measures orbital angular momentum:

$$
|\vec L|=\sqrt{l(l+1)}\,\hbar,\qquad \hbar=\frac{h}{2\pi}.
$$

Each $l$ defines a **subshell**, historically named after the lines of atomic spectra:

| $l$ | letter | shape | orbitals ($2l+1$) |
| --- | --- | --- | --- |
| 0 | s | spherical | 1 |
| 1 | p | dumbbell | 3 |
| 2 | d | cloverleaf (+ one barbell along z) | 5 |
| 3 | f | more lobes | 7 |

The letters s, p, d, f come from the old spectroscopic labels *sharp*, *principal*, *diffuse*, *fundamental*. Since $l<n$, the subshells possible in a shell are: $n=1$: 1s only; $n=2$: 2s, 2p; $n=3$: 3s, 3p, 3d; $n=4$: 4s, 4p, 4d, 4f. State this forwards and read it backwards without hesitation — a configuration such as $2d$ or $3f$ is simply illegal.

## 3. The magnetic quantum number $m_l$

For each $l$, $m_l$ runs through $-l,-l+1,\ldots,l-1,l$ — that is, $2l+1$ values. It fixes the **orientation** of the angular momentum (hence the name: it decides how sublevels split in a magnetic field). Each value of $m_l$ marks one distinct **orbital** — a distinct shape-orientation in space. The count of orbitals in a subshell is exactly $2l+1$: one s orbital, three p orbitals pointing along $x$, $y$, $z$, five d orbitals, seven f orbitals. Orbitals of the same subshell differ only in orientation and, in the absence of external fields, all have **the same energy**: they are *degenerate*.

In hydrogen, even whole shells are degenerate — $E$ depends only on $n$, so 2s and all 2p orbitals share energy. In atoms with many electrons, inter-electron repulsion and shielding split this degeneracy, and 2s sinks beneath 2p; that lifting is why the filling order of the next module is not a simple march along $n$.

## 4. The spin quantum number $m_s$

Spectroscopy revealed that even an s electron, with $l=0$ and therefore no orbital angular momentum, splits into two states in a magnetic field. Uhlenbeck and Goudsmit (1925) ascribed this to an intrinsic two-state property, the electron **spin**: $m_s=+\frac12$ or $-\frac12$, with two opposite spin directions — loosely, "up" and "down" — for every orbital. Two electrons can therefore share one orbital, provided their spins oppose. Notice spin is not an output of the Schrödinger equation; it is added to account for a fourth quantised feature of the electron itself.

All four together — $n$, $l$, $m_l$, $m_s$ — name a single electron state, and **no two electrons in one atom may share all four** (Pauli's principle, detailed later).

## 5. Orbital shapes and nodes

The pictorial reward for all this bookkeeping:

- **s orbitals** are spheres, centred on the nucleus. All directions are equivalent — the angular part of $\psi$ is constant.
- **p orbitals** have two lobes meeting at the nucleus along an axis, with a plane passing through the nucleus where the amplitude vanishes.
- **d orbitals** have four lobes alternating in sign, except $d_{z^2}$, which carries two lobes along $z$ plus a ring in the $xy$-plane.

The regions where $\psi=0$ have names, and being able to count them is standard exam material:

- **Angular (planar) nodes** — flat or conical surfaces at which the wave changes sign. Their number equals $l$.
- **Radial (spherical) nodes** — spheres on which the probability vanishes at certain radii, ringed like onion layers. Their number equals $n-l-1$.
- Total nodes $= n-1$, shared between the two kinds.

Verification against the mental pictures: an s orbital ($l=0$) has no angular nodes — agreed, it is seamless; a 2s orbital has $2-0-1=1$ radial node — and indeed a cross-section of 2s shows a small inner sphere of opposite sign inside an outer one; a 2p orbital has $2-1-1=0$ radial nodes — it is a single pair of lobes with one nodal plane between them.

<learning-block type="concept" title="One worked set: the 4d subshell">

For the 4d subshell: $n=4$, so $l$ may be $0,1,2,3$; the letter d fixes $l=2$. Then

- $m_l$ has $2l+1=5$ values: $-2,-1,0,+1,+2$ — five orbitals, usually drawn as $d_{xy}$, $d_{yz}$, $d_{zx}$, $d_{x^2-y^2}$ and $d_{z^2}$;
- angular nodes $=l=2$; radial nodes $=n-l-1=4-2-1=1$; total $=n-1=3$;
- orbital angular momentum $|\vec L|=\sqrt{l(l+1)}\,\hbar=\sqrt6\,\hbar$;
- capacity: $2\times(2l+1)=10$ electrons when all five orbitals are doubly filled.

Every subshell question reduces to reading out the same four lines from $n$ and $l$.

</learning-block>

<learning-block type="mistake" title="Quantum-number traps">

- **Allowing $l=n$.** The rule is $l\le n-1$, so 2d, 3f and 4g simply do not exist.
- **Assuming an orbital holds two electrons without qualification.** Only with opposed spins — the Pauli exclusion is about all four quantum numbers together.
- **Counting "orbitals" when asked "subshells" or vice versa.** Shell $n$ has $n$ subshells, $n^2$ orbitals, $2n^2$ electrons.
- **Confusing nodes of different kinds.** Angular nodes count $l$ (the planes separating the lobes), radial nodes count $n-l-1$; a 3d orbital has two angular but no radial nodes, while a 3p has one of each.
- **Treating hydrogen energies as general.** Only in one-electron species do 2s and 2p share energy; elsewhere the $l$-dependence matters.

</learning-block>

## Try it yourself

**A.** Which of the following exist, and why: 3d, 2p, 4f, 3f?

<details><summary>Show the reasoning</summary>

3d: $n=3$, $l=2<n$ — allowed. 2p: $l=1<2$ — allowed. 4f: $l=3<4$ — allowed. 3f would need $l=3$, but $l$ stops at $n-1=2$ — not allowed. The highest subshell in a shell is always d for $n=3$ — f only becomes available from $n\ge4$.
</details>

**B.** In how many orbitals and radial nodes does the 3p subshell break down? Give the quantum numbers of one electron in 3p.

<details><summary>Show the reasoning</summary>

$l=1$: three orbitals ($m_l=-1,0,+1$), pointing along the three axes. Radial nodes $=n-l-1=3-1-1=1$; angular nodes $=1$. A valid address is $n=3,\ l=1,\ m_l=0,\ m_s=+\frac12$, and any of $m_l=\pm1$ works, as does the other spin.
</details>

**C.** Count the orbitals and the maximum number of electrons in $n=3$, and identify each subshell.

<details><summary>Show the reasoning</summary>

Subshells: 3s (1 orbital), 3p (3), 3d (5) — altogether $n^2=9$ orbitals and $2n^2=18$ electrons at full capacity. No 3f exists; the shell stops at d.
</details>

## Remember

- Four numbers address an electron: $n\ge1$ (shell, size, energy), $l=0\ldots n-1$ (subshell, shape), $m_l=-l\ldots+l$ (orbital, orientation), $m_s=\pm\frac12$ (spin).
- Subshell capacities: $2l+1$ orbitals, $2(2l+1)$ electrons; shell totals: $n^2$ orbitals, $2n^2$ electrons.
- Nodes: angular $=l$, radial $=n-l-1$, total $=n-1$ — check your shapes against these counts.
- In hydrogen, energy depends on $n$ alone; in other atoms, $l$ reorders the levels, preparing for the Aufbau order.
- Quantum numbers define every possible state; the next module turns these addresses into filled configurations of real atoms.
