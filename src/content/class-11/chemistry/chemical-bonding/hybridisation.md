## Start with a contradiction

Methane should not exist, on naive evidence. Carbon is $1s^2\,2s^2\,2p^2$: only two unpaired p-electrons, so valence bond theory predicts two bonds. Yet methane has four identical C–H bonds and a perfect tetrahedron. The resolution is **hybridisation**: atomic orbitals on the same atom mix into new, equivalent orbitals that point in chemically sensible directions before they overlap.

## 1. Valence bond theory: a bond is an overlap

Valence bond (VB) theory treats a covalent bond as the overlap of two half-filled atomic orbitals, each carrying one electron with opposite spins. As two hydrogen 1s orbitals approach, the shared electron density between the nuclei lowers the energy — until nuclear repulsion turns the curve back up. The equilibrium at minimum energy and the large energy gap to pull the atoms apart account for both the bond length and the bond enthalpy. Overlap is directional: the more of the lobes that overlap, the stronger the bond, which is why orbitals point *toward* their bonded neighbours.

VB theory describes bonds **one at a time**, unlike the delocalised, whole-molecule picture of the next module.

## 2. Why orbitals must hybridise

Even with excited carbon ($2s^1 2p^3$, four unpaired electrons), VB theory would predict four bonds from three equivalent p-orbitals at $90^\circ$ plus one odd s-bond — nothing like the observed four identical bonds at $109.5^\circ$. Instead, the four orbitals are **mixed** first:

$$
\text{one } 2s + \text{three } 2p \;\longrightarrow\; \text{four equivalent } sp^3 \text{ hybrids},
$$

each with 25% s character, each pointing to a corner of a tetrahedron. The four $\mathrm{C(sp^3)–H(1s)}$ overlaps are then identical, matching bond lengths, enthalpies and angles in one stroke. The excitation energy is repaid many times over by four strong bonds.

<learning-block type="concept" title="What hybrid orbitals are not">

A hybrid orbital is a mathematical combination of atomic orbitals **on one atom** used to indicate the direction of its bonds. It is not a bond, and it is not shared between atoms. The bond still forms by overlap of one hybrid from each bonded atom (or a hybrid from one atom and a pure orbital from the other, as in $\mathrm{C(sp^3)–H(1s)}$).

</learning-block>

## 3. The hybridisation catalogue

The steric number rule links directly to VSEPR:

$$
\text{steric number} = \text{bonded atoms} + \text{lone pairs on the central atom},
$$

and the steric number names the hybridisation. This works because both theories count the same domains.

| Steric number | Hybrid | Geometry and angle | s character | First examples |
| --- | --- | --- | --- | --- |
| 2 | $sp$ | linear, $180^\circ$ | 50% | $\mathrm{BeCl_2}$, $\mathrm{CO_2}$, $\mathrm{C_2H_2}$ |
| 3 | $sp^2$ | trigonal planar, $120^\circ$ | 33% | $\mathrm{BF_3}$, $\mathrm{SO_2}$, $\mathrm{C_2H_4}$ |
| 4 | $sp^3$ | tetrahedral, $109.5^\circ$ | 25% | $\mathrm{CH_4}$, $\mathrm{NH_3}$, $\mathrm{H_2O}$ |
| 5 | $sp^3d$ | trigonal bipyramidal | 20% | $\mathrm{PCl_5}$, $\mathrm{SF_4}$ |
| 6 | $sp^3d^2$ | octahedral | 17% | $\mathrm{SF_6}$, $\mathrm{XeF_4}$ |

Reading the table carefully: the *number of unhybridised* p orbitals determines how many π bonds remain. In ethene, each carbon is $sp^2$ and keeps one p orbital free; those two p orbitals overlap sideways to give the π bond above and below the σ bond. In ethyne, each carbon is $sp$ and keeps two p orbitals free, making two π bonds around the σ. In $\mathrm{NH_3}$ and $\mathrm{H_2O}$, lone pairs occupy hybrid orbitals.

## 4. Worked example: hybridisation across three carbons

**Problem.** Assign the hybridisation of each carbon in ethyne ($\mathrm{CH \equiv CH}$), ethene ($\mathrm{CH_2 = CH_2}$) and ethane ($\mathrm{CH_3CH_3}$), and predict each C–H bond angle or geometry.

| Molecule | σ bonds + lone pairs on C | Hybridisation | Geometry at C |
| --- | --- | --- | --- |
| ethyne | 2 bonds, 0 pairs | $sp$ | linear; C≡C has one σ and two π |
| ethene | 3 bonds, 0 pairs | $sp^2$ | planar, angles $120^\circ$; one π from the leftover p orbital |
| ethane | 4 bonds, 0 pairs | $sp^3$ | tetrahedral, angles $109.5^\circ$; no π |

Check against the bond parameters module: C–C lengths are 120, 134 and 154 pm, and C–H enthalpy rises with s character ($\mathrm{C}$ in ethyne makes its C–H the strongest of the three). The s character trend $sp > sp^2 > sp^3$ shows up directly: more s character means the hybrid hangs closer to the nucleus and forms shorter, stronger, more polar bonds.

## 5. s character, angles and strength

Two lone pairs push harder than one, and a rigid set of four equivalent $sp^3$ hybrids cannot express that. Picture the hybrids instead as slightly adjustable mixtures: in $\mathrm{NH_3}$ the lone pair's hybrid drags in extra s character, leaving the three bonding hybrids more p-rich, and the bonds squeeze to $107^\circ$; in $\mathrm{H_2O}$ two lone pairs absorb even more s character, pushing the O–H bonds down to $104.5^\circ$. Unmixed p orbitals are $90^\circ$ apart, so the observed fall from $109.5^\circ$ toward $90^\circ$ is exactly what the s-character redistribution predicts.

## 6. Where valence bond theory stops

Be honest about its limits; these are favourite exam questions and the reason molecular orbital theory exists:

1. **Magnetism.** VB theory cannot explain the two unpaired electrons observed in $\mathrm{O_2}$; its picture predicts all electron pairs are formed by overlap and the molecule should be diamagnetic.
2. **Delocalisation.** Species with fractional or delocalised bonds (benzene, $\mathrm{NO_3^-}$, $\mathrm{CO_3^{2-}}$) need resonance structures in VB theory but are straightforward in MO theory.
3. **Electron-deficient species.** $\mathrm{B_2H_6}$, with its three-centre, two-electron bridges, exceeds VB theory's localisation.
4. **Quantitative weakness.** VB gives no natural account of relative energies, spectra, or bond orders beyond integers.

<learning-block type="mistake" title="Hybridisation errors">

- Assigning hybridisation from steric number by forgetting lone pairs — for $\mathrm{H_2O}$ and $\mathrm{NH_3}$ the central atoms are $sp^3$, not $sp^2$ or $sp$.
- Counting the σ bond itself as a hybrid orbital for one atom: each atom owns its *own* hybrid; the bond is the overlap.
- Getting the s-character trend backwards: more s character means shorter, *stronger* bonds and larger angles, not weaker.
- Using $sp^3d$ for a second-period central atom; only period 3 and below offer the $d$ orbitals that make it possible.

</learning-block>

## Try it yourself

**A.** Give the hybridisation of N in $\mathrm{NH_4^+}$, $\mathrm{NH_3}$ and $\mathrm{NF_3}$ and state each expected shape.

<details><summary>Show the reasoning</summary>

All three have steric number $4$ ($\mathrm{NH_4^+}$: four bonds; $\mathrm{NH_3}$: three bonds + one lone pair; $\mathrm{NF_3}$: three bonds + one lone pair). All are $sp^3$. Shapes: tetrahedral, trigonal pyramidal and trigonal pyramidal respectively. $\mathrm{NF_3}$'s angle ($102^\circ$) is smaller than $\mathrm{NH_3}$'s because the fluorine lone pairs drag electron density away from the N–F bond pairs, weakening their mutual repulsion.

</details>

**B.** In $\mathrm{CO_2}$, count the σ and π bonds and assign hybridisation to carbon.

<details><summary>Show the reasoning</summary>

Two C=O double bonds = two σ bonds (one from each) plus two π bonds. Carbon has steric number 2 → $sp$, with two hybrids pointing $180^\circ$ apart, each overlapping an oxygen orbital to make one σ bond; the two leftover p orbitals on carbon each form one π bond with a parallel p orbital on an oxygen. The molecule is linear.

</details>

**C.** Order the C–C bond enthalpies in ethane, ethene and ethyne and explain through hybridisation.

<details><summary>Show the reasoning</summary>

Ethane ($sp^3$–$sp^3$, one σ bond) < ethene ($sp^2$–$sp^2$ σ plus one π bond) < ethyne ($sp$–$sp$ σ plus two π bonds). Rising bond order dominates, since a σ–π pair always outperforms a lone σ. Setting s character aside, the σ components themselves grow with the s character trend $sp > sp^2 > sp^3$, which is another factor making ethyne's σ bond the strongest single σ in the set.

</details>

## Remember

- VB theory bonds by **overlap** of half-filled orbitals; hybridisation is the mixing that gives the overlap the right directions and number.
- Steric number (bonds + lone pairs) selects the hybridisation: 2, 3, 4, 5, 6 map to $sp$, $sp^2$, $sp^3$, $sp^3d$, $sp^3d^2$.
- Unhybridised p orbitals held over make π bonds: none in ethane, one in ethene, two in ethyne.
- s character grows along $sp^3 < sp^2 < sp$, making bonds shorter, stronger and wider-angled.
- VB theory fails on $\mathrm{O_2}$ paramagnetism, delocalised systems and electron-deficient species — exactly the tools the next module supplies.

The molecular-orbital module answers the questions VB cannot: what happens when orbitals combine across the whole molecule, and why oxygen is magnetic.
