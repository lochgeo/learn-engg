## Start with a molecule VB theory cannot explain

Pass liquid oxygen through a magnetic field and it sticks to the poles — $\mathrm{O_2}$ is **paramagnetic**: it contains unpaired electrons. Valence bond theory insists every orbital pair has two electrons and predicts diamagnetic oxygen; it is simply wrong here. Molecular orbital (MO) theory, which treats the electrons of the *whole molecule* rather than of each bond, gets this right, and it also delivers bond orders, relative stability and ion-to-ion trends across the second period in one framework.

## 1. Combining atomic orbitals

When two atomic orbitals combine over a molecule, they produce exactly two molecular orbitals by the linear-combination-of-AOs (LCAO) business:

| MO formed | Energy | Electron density between nuclei | Fills how many electrons |
| --- | --- | --- | --- |
| bonding ($\sigma$, $\pi$) | lower than the AOs | concentrated between nuclei | up to 2 |
| antibonding ($\sigma^*$, $\pi^*$) | higher than the AOs | a node between nuclei | up to 2 |

The bonding orbital stabilises the molecule when occupied; the antibonding one destabilises it, indicated by the star. Conservation of orbitals: two atomic orbitals in, two molecular orbitals out. Two principles govern filling: an antibonding electron destabilises the molecule rather more than a bonding electron stabilises it, and electrons fill the MOs in energy order — aufbau plus Hund's rule, exactly as atomic levels fill.

## 2. The filling order for second-period diatomics

For $\mathrm{O_2}$, $\mathrm{F_2}$ and $\mathrm{Ne_2}$ the order of the ten valence MOs is:

$$
\sigma 2s < \sigma^* 2s < \sigma 2p_z < \pi 2p_x = \pi 2p_y < \pi^* 2p_x = \pi^* 2p_y < \sigma^* 2p_z.
$$

For $\mathrm{B_2}$, $\mathrm{C_2}$ and $\mathrm{N_2}$ (up to 14 electrons total) the two π bonding orbitals dip **below** $\sigma 2p_z$, so those species fill as:

$$
\sigma 2s < \sigma^* 2s < \pi 2p_x = \pi 2p_y < \sigma 2p_z < \pi^* < \sigma^* 2p_z.
$$

The two orders split because the $s$ and $p$ energy gap matters: for B, C and N the gap is small enough that $s$–$p$ mixing pushes $\sigma 2p_z$ upward, while from O onward the gap widens and the classic order holds. Always check whether the atom sits before or after N in the period.

<learning-block type="concept" title="The 1s core is spectators">

The $1s$ orbitals are too tightly bound to take part in bonding: $\sigma 1s$ and $\sigma^* 1s$ fill first and cancel each other (two electrons each), contributing nothing to the bond order. Second-period MO diagrams usually skip them. That is why "ten electrons" is the number to think about for $\mathrm{O_2}$: two fill the core, eight distribute over the valence MOs.

</learning-block>

## 3. Bond order and stability

Bond order counts net bonding contribution:

$$
\text{bond order} = \tfrac12\,(N_b - N_a) = \tfrac12\,(\text{electrons in bonding MOs} - \text{electrons in antibonding MOs}).
$$

It averages over the whole molecule rather than counting from a Lewis structure, and works for fractional and even negative orders (linking to the bond-parameters module). Work through the second period:

| Molecule | Electrons | Config summary (valence) | Bond order | Stability |
| --- | --- | --- | --- | --- |
| $\mathrm{H_2}$ | 2 | $\sigma 1s^2$ | 1 | exists |
| $\mathrm{He_2}$ | 4 | $\sigma 1s^2, \sigma^{*}1s^2$ | 0 | does not exist |
| $\mathrm{Li_2}$ | 6 | $\sigma 2s^2$ | 1 | exists |
| $\mathrm{Be_2}$ | 8 | $\sigma 2s^2, \sigma^{*} 2s^2$ | 0 | does not exist |
| $\mathrm{B_2}$ | 10 | $\sigma 2s^2, \sigma{^*} 2s^2, \pi 2p^2$ | 1 | exists (two unpaired in π, paramagnetic) |
| $\mathrm{C_2}$ | 12 | up to $\pi 2p^4$ | 2 | exists |
| $\mathrm{N_2}$ | 14 | fills all bonding $\pi$ and $\sigma$ | 3 | very stable |
| $\mathrm{O_2}$ | 16 | bonding 10, antibonding $\pi^*$ 2 | 2 | exists (paramagnetic) |
| $\mathrm{F_2}$ | 18 | $\pi^* 2p^4$ filled | 1 | exists |
| $\mathrm{Ne_2}$ | 20 | $\sigma{^*} 2s$, $\pi^*$, $\sigma^* 2p$ filled | 0 | does not exist |

The zero bond orders for $\mathrm{He_2}$, $\mathrm{Be_2}$ and $\mathrm{Ne_2}$ are why those molecules do not exist as ordinary stable species.

## 4. Magnetism from unpaired electrons

MO theory counts unpaired electrons directly. Reading the configuration for $\mathrm{O_2}$: $\sigma 1s^2, \sigma{^*}1s^2, \sigma 2s^2, \sigma{^*}2s^2, \sigma 2p_z^2, \pi 2p_x^2, \pi 2p_y^2, \pi{^*}2p_x^1, \pi{^*}2p_y^1$. Hund's rule puts the last two electrons into separate $\pi^*$ orbitals with parallel spins — **two unpaired electrons, paramagnetic**, exactly as observed.

For $\mathrm{N_2}$ the highest filled orbitals are all paired: **diamagnetic**, also as observed.

The oxygen family's ions round out the picture:

| Species | Electrons in $\pi^*$ | Bond order | Magnetic |
| --- | --- | --- | --- |
| $\mathrm{O_2^+}$ | 1 | 2.5 | para |
| $\mathrm{O_2}$ | 2 | 2.0 | para |
| $\mathrm{O_2^-}$ (superoxide) | 3 | 1.5 | para |
| $\mathrm{O_2^{2-}}$ (peroxide) | 4 | 1.0 | dia |

The stability order $\mathrm{O_2^+ > O_2 > O_2^- > O_2^{2-}}$ follows the bond order, and so does the bond-length trend in reverse: each added antibonding electron lengthens the molecule.

<learning-block type="mistake" title="MO-theory errors">

- Using the wrong filling order: for $\mathrm{N_2}$, $\mathrm{C_2}$ and $\mathrm{B_2}$ the $\pi 2p$ orbitals sit below $\sigma 2p_z$, reversing for $\mathrm{O_2}$ and $\mathrm{F_2}$.
- Forgetting that antibonding electrons count *against* bond order, not as neutral.
- Attaching magnetic character to bond order: $\mathrm{B_2}$ has bond order 1 and is paramagnetic, while $\mathrm{F_2}$ with bond order 1 is diamagnetic — magnetism follows *unpaired electrons*, not order.
- Applying second-period MO diagrams to third-period diatomics without care: the s–p mixing that causes the ordering swap is weak for heavier atoms, so the O₂-style order usually applies there.
- Reading the star on $\sigma^* 2p_z$ as a typographical detail: it is the highest antibonding orbital and the *last* to fill.

</learning-block>

## Try it yourself

**A.** Compute the bond order of $\mathrm{N_2^+}$ and state whether removing an electron from $\mathrm{N_2}$ strengthens or weakens the bond.

<details><summary>Show the reasoning</summary>

$\mathrm{N_2}$ has 10 of its 14 electrons in bonding MOs and 4 in antibonding, giving bond order 3. The highest occupied orbital in $\mathrm{N_2}$ is the **bonding** $\sigma 2p_z$, so removing one electron (making $\mathrm{N_2^+}$) gives $\tfrac12(9-4) = 2.5$: the bond weakens.

Compare $\mathrm{O_2}$, whose highest occupied orbitals are antibonding $\pi^*$: removing one electron to give $\mathrm{O_2^+}$ *raises* the bond order to 2.5 and strengthens the bond. Which orbital the electron leaves decides everything.

</details>

**B.** $\mathrm{C_2}$ has bond order 2. What is its magnetism, and which orbitals are occupied?

<details><summary>Show the reasoning</summary>

With the $\mathrm{B_2/C_2/N_2}$ ordering, the valence configuration is $\sigma 2s^2\,\sigma^{*}2s^2\,\pi 2p_x^2\,\pi 2p_y^2$. Every electron is paired — the $\sigma 2p_z$ orbital stays empty — so $\mathrm{C_2}$ is **diamagnetic**.

Bond order: bonding electrons $= 2(\sigma 2s) + 4(\pi 2p) = 6$; antibonding $= 2(\sigma^* 2s)$. Including the cancelling $1s$ core pair changes nothing: $\tfrac12[(6+2)-(2+2)] = 2$. The odd feature is that this "double bond" is built from two π bonds with no separate σ bond between the carbons.

</details>

**C.** Two diatomic species have bond order 1.5 and 2.5. Which are they (among $\mathrm{O_2}$-family ions), and which is longer?

<details><summary>Show the reasoning</summary>

$\mathrm{O_2^-}$ ($\pi^*$ holds three electrons: one pair and one single) has bond order 1.5; $\mathrm{O_2^+}$ (one $\pi^*$ electron) has 2.5. More antibonding occupancy means a lower bond order and a longer bond, so $\mathrm{O_2^-}$ is the longer ion. Both retain unpaired electrons, so both are paramagnetic.

</details>

## Remember

- Two AOs give exactly two MOs: one bonding (lower energy, density between nuclei) and one antibonding (higher energy, node between nuclei).
- Bond order $= \tfrac12 (N_b - N_a)$ from the molecular orbital census, not the Lewis count.
- $\mathrm{He_2}$, $\mathrm{Be_2}$, $\mathrm{Ne_2}$ have bond order 0 and do not form stable molecules.
- $\pi 2p$ lies below $\sigma 2p_z$ for B₂, C₂, N₂ and above it for O₂, F₂, Ne₂.
- Paramagnetism means unpaired electrons in $\pi^*$ — the prediction $\mathrm{O_2}$ paramagnetism is MO theory's signature victory over VB theory.

With bonds described molecule-wide, the last concept module looks between molecules — the forces that decide boiling points, solubility and the shape of ice.
