## Start with the shared ends

Between the extremes of transfer and sharing lies a middle ground where sharing is unequal. This module treats the measurable **parameters** of a covalent bond — its length, its strength, the angle it makes with a neighbour — and the reaction-enthalpy estimates they unlock. It also introduces the σ/π distinction that every later chapter on multiple bonds depends on.

## 1. How orbital overlap builds σ and π

Orbitals overlap to combine two atomic wavefunctions and concentrate electron density between the nuclei. How they overlap matters as much as how much:

| Overlap type | Orbital geometry | Resulting bond | Rotation blocked? |
| --- | --- | --- | --- |
| head-on, along the internuclear axis | $s$–$s$, $s$–$p$, or $p$–$p$ end-on | one σ bond | no |
| sideways, above and below the axis | $p$–$p$ parallel | one π bond | yes |

A σ bond places electron density **on the axis** between the nuclei and is inherently stronger than a π bond, which spreads density above and below the axis and has a nodal plane through the nuclei. Because σ overlap can occur with any orbital, every covalent bond starts as exactly one σ bond; a π bond can only be added between two atoms already σ-bonded by p orbitals or hybrids.

| Bond combination | Count of σ | Count of π | Real example |
| --- | --- | --- | --- |
| single bond | 1 | 0 | C–C in ethane |
| double bond | 1 | 1 | C=C in ethene |
| triple bond | 1 | 2 | C≡C in ethyne |

The π bond counts do not stack: a third π overlap would collide with the first two and add no stability.

## 2. Bond length

**Bond length** is the equilibrium distance between the nuclei of two bonded atoms. It is the compromise between two forces: nuclear repulsion pushes nuclei apart, while shared electron density pulls nuclei together. Three rules predict it:

1. **Multiple bonds are shorter.** Higher bond order pulls the nuclei closer together:

$$
\text{C–C } 154\ \text{pm} > \text{C=C } 134\ \text{pm} > \text{C}\equiv\text{C } 120\ \text{pm}.
$$

2. **Atomic size sets the baseline.** Down a group, atoms grow, so bonds to the same partner lengthen:

$$
\text{HF } 92\ \text{pm} < \text{HCl } 127\ \text{pm} < \text{HBr } 141\ \text{pm} < \text{HI } 161\ \text{pm}.
$$

3. **Across a period, atoms shrink**, so hydride bond lengths shorten: C–H (109) > N–H (101) > O–H (96) > F–H (92 pm).

Where a bond has resonance character, its length is intermediate: in a carboxylate ion both C–O bonds measure about 127 pm, between a single (136) and a double (122).

<learning-block type="mistake" title="Length misreadings">

- Reading bond lengths off a table of atomic radii as if they were fixed constants — they depend on bond order and environment.
- Forgetting that resonance gives intermediate lengths; a single Lewis structure with full bonds on one side and none on the other does not literally describe the molecule.
- Confusing bond length (internuclear distance) with van der Waals contact distance (non-bonded atoms).

</learning-block>

## 3. Bond enthalpy

The **bond dissociation enthalpy** is the enthalpy required to break one specific bond in the gas phase:

$$
\mathrm{H_2(g) \rightarrow H(g) + H(g)} \qquad D = +436\ \text{kJ mol}^{-1}.
$$

Diatomic molecules quote a single value; polyatomic molecules have slightly different enthalpies for each break, so a **bond enthalpy** for, say, C–H in methane is an **average** over the four identical bonds ($+414$ kJ mol⁻¹ is the standard average).

The stronger the bond, the shorter it needs and the higher its enthalpy. Reasonable benchmark values:

| Bond | Length (pm) | Enthalpy (kJ mol⁻¹) |
| --- | --- | --- |
| C–C | 154 | 348 |
| C=C | 134 | 614 |
| C≡C | 120 | 839 |
| N≡N | 110 | 941 |
| O=O | 121 | 498 |
| H–H | 74 | 436 |

Note that N≡N is far stronger than O=O despite similar lengths: nitrogen's triple bond is unusually strong, which is why $\mathrm{N_2}$ is so unreactive.

## 4. Bond order

**Bond order** is the number of shared orbital pairs between two atoms: 1 for a single bond, 2 for a double, 3 for a triple. Resonance structures produce fractional average bond orders — each C–O in $\mathrm{CO_3^{2-}}$ has bond order $1\tfrac13$. Work later (the molecular-orbital module) redefines bond order from an orbital census, but for now the count from the Lewis structure is taken to be the same one.

The relationships are the point of this module:

$$
\text{bond order} \uparrow \;\Rightarrow\; \text{bond length} \downarrow \;\;\text{and}\;\; \text{bond enthalpy} \uparrow.
$$

## 5. Bond angle: a parameter saved for later

Between the H–O–H angle of water (104.5°) and the 180° of $\mathrm{CO_2}$ lies a spread of shapes that bond length and enthalpy alone cannot explain. Bond angle is a parameter set chiefly by **electron-pair repulsion** around the central atom, and it has its own module later in this chapter (VSEPR).

## 6. Worked example: estimating a reaction enthalpy from bond enthalpies

**Problem.** Estimate the standard enthalpy change for $\mathrm{CH_4(g) + Cl_2(g) \rightarrow CH_3Cl(g) + HCl(g)}$, using bond enthalpies alone.

Breaking one C–H and one Cl–Cl; forming one C–Cl and one H–Cl:

$$
\Delta H \approx (414 + 243) - (327 + 432) = 657 - 759 = -102\ \text{kJ mol}^{-1}.
$$

Sanity checks: the reaction is exothermic (a strong C–H bond is replaced by an even stronger H–Cl bond, and the weaker Cl–Cl by a C–Cl), and $-102$ is close to the measured $-99.6\ \text{kJ mol}^{-1}$, the small gap coming from using average bond enthalpies rather than molecule-specific ones and from ignoring any solvent or phase corrections in a gas-phase estimate.

**Second example.** For $\mathrm{H_2(g) + Cl_2(g) \rightarrow 2HCl(g)}$:

$$
\Delta H \approx (436 + 243) - 2(432) = 679 - 864 = -185\ \text{kJ mol}^{-1},
$$

against the experimental $-184.6\ \text{kJ mol}^{-1}$. This method works best for gas-phase reactions where bonds are simply exchanged; it is approximate whenever resonance or strong intermolecular interactions are present.

## Try it yourself

**A.** Why is $\mathrm{N_2}$ shorter (110 pm) than $\mathrm{O_2}$ (121 pm) despite nitrogen and oxygen being neighbours?

<details><summary>Show the reasoning</summary>

Each $\mathrm{N_2}$ molecule shares three pairs (triple bond, bond order 3) while $\mathrm{O_2}$ shares two (double bond, bond order 2). Higher bond order pulls the nuclei in, so the shorter length wins despite nitrogen atoms being individually larger.

</details>

**B.** Estimate $\Delta H$ for $\mathrm{2H_2(g) + O_2(g) \rightarrow 2H_2O(g)}$ using bond enthalpies (O–H $= 463$).

<details><summary>Show the reasoning</summary>

Bonds broken: two H–H ($2 \times 436 = 872$) and one O=O ($498$), totalling $1370$. Bonds formed: four O–H ($4 \times 463 = 1852$).

$$
\Delta H \approx 1370 - 1852 = -482\ \text{kJ per 2 mol of water},
$$

close to the measured $-484\ \text{kJ}$ for the gas-phase reaction — a comfortably accurate estimate from four bonds.

</details>

**C.** Two carbon–nitrogen bonds in a molecule: one in $\mathrm{CH_3NH_2}$ (140 pm), one in $\mathrm{HCONH_2}$ (134 pm). Explain.

<details><summary>Show the reasoning</summary>

The second molecule's C–N bond is part of a resonance system: the amide can delocalise the nitrogen lone pair into the carbonyl, giving the C–N partial double-bond character. Higher effective bond order means shorter length. (It also means rotation about that bond is partly hindered — a fact the double-bond chapter revisits.)

</details>

## Remember

- Every covalent bond is exactly one σ bond; π bonds only stack in between already σ-bonded atoms and block free rotation.
- Bond order up ⇒ length down and enthalpy up; resonance produces fractional bond orders and intermediate lengths.
- Polyatomic bond enthalpies are **averages**; reaction-enthalpy estimates lose accuracy accordingly.
- Bond enthalpy estimates work for simple gas-phase bond exchange and fail for resonance-stabilised or condensed-phase cases.
- Bond angle is the parameter that shape theory (next but one) explains; bond length and enthalpy are set by overlap and bond order.

Every parameter so far treats bonds as if they lay in whatever arrangement suits them. The next module asks the more pressing question: *which* arrangement do electron pairs actually choose?
