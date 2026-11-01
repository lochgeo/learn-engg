## Same formula, different molecule

Two compounds with the same molecular formula but different structures are **isomers**. Isomer counting is one of the most reliable scoring areas in organic chemistry because it rewards a system rather than memory: build every skeleton, then every position, then every functional group, then the stereochemistry.

<learning-block type="concept" title="The two big families">

- **Structural (constitutional) isomers** differ in which atom is bonded to which: chain, position, functional group, metamers and tautomers.
- **Stereoisomers** have the same atom-to-atom bonding but a different arrangement in space: geometric (cis–trans, E/Z) and optical (enantiomers).

Check the degree of unsaturation first. Two molecules can only be isomers if they have the same formula, and the DoU tells you how many rings and π bonds you must distribute.

</learning-block>

## 1. Structural isomerism

**Chain isomerism** — different carbon skeletons.

- C₄H₁₀: butane and 2-methylpropane.
- C₅H₁₂: pentane, 2-methylbutane, 2,2-dimethylpropane.

**Position isomerism** — the same functional group or multiple bond in a different position.

- propan-1-ol and propan-2-ol
- but-1-ene and but-2-ene
- pentane-2,3-dione and pentane-2,4-dione

**Functional-group isomerism** — the same formula, a different functional group.

- C₂H₆O: ethanol (CH₃CH₂OH) and dimethyl ether (CH₃OCH₃)
- C₃H₆O: propanal (CH₃CH₂CHO) and propanone (CH₃COCH₃)
- C₃H₈O: propan-1-ol, propan-2-ol, methoxyethane

**Metamerism** — isomers that differ in the distribution of carbon atoms on either side of a heteroatom. It is common in ethers, thioethers, esters and secondary amines.

- C₄H₁₀O ethers: methoxypropane and ethoxyethane.

**Tautomerism** — a dynamic equilibrium in which a hydrogen moves and a π bond shifts. The classic case is keto–enol:

$$
\mathrm{CH_3COCH_3 \rightleftharpoons CH_3C(OH){=}CH_2}
$$

The keto form usually dominates, but the enol can be stabilised by conjugation or intramolecular hydrogen bonding.

## 2. Geometric isomerism

A double bond cannot rotate, so groups on the two carbons are locked on the same side (cis) or opposite sides (trans). The requirement is that **each** double-bond carbon carries two different groups.

- but-2-ene: cis and trans
- 1,2-dichloroethene: cis and trans
- 2-methylbut-2-ene: no geometric isomers, because C2 carries two identical methyl groups

When the two groups are not simply hydrogens, cis/trans becomes ambiguous. Use **E/Z**:

1. On each carbon, rank the two attached groups by the **Cahn–Ingold–Prelog (CIP)** rules: higher atomic number wins; if tied, move outward atom by atom.
2. If the higher-priority groups are on **opposite** sides, the isomer is **E** (entgegen). If they are on the **same** side, it is **Z** (zusammen).

<learning-block type="example" title="Assigning E/Z">

For 1-bromo-1-chloropropene, C1 carries Br and Cl, while C2 carries CH₃ and H.

- On C1: Br (atomic number 35) outranks Cl (17).
- On C2: C outranks H.

If Br and CH₃ lie on the same side, the high-priority groups match: **Z**. If they lie on opposite sides: **E**.

</learning-block>

Rings can also show cis–trans isomerism. In 1,2-dimethylcyclohexane, both methyls on the same face is cis; on opposite faces is trans. E/Z notation is not used for these ring cases.

## 3. Optical isomerism

A carbon atom bonded to **four different groups** is a **chiral centre** (stereocentre). Its mirror image cannot be superimposed on it, just as a left hand cannot be laid exactly over a right hand.

The two mirror-image forms are **enantiomers**. They have identical physical properties except for the direction in which they rotate plane-polarised light:

- one rotates it clockwise: **dextrorotatory**, written (+)
- the other rotates it anticlockwise: **laevorotatory**, written (−)

An equimolar mixture of the two is a **racemic mixture**; its net rotation is zero.

Specific rotation is defined by

$$
[\alpha]=\frac{\alpha}{l\times c},
$$

where $\alpha$ is the observed rotation in degrees, $l$ the path length in decimetres and $c$ the concentration in g mL⁻¹.

A molecule with an internal plane of symmetry is achiral overall even if it contains stereocentres. Such a form is **meso**; it is optically inactive.

For $n$ stereocentres with no internal symmetry, the maximum number of stereoisomers is $2^n$. Symmetry reduces the count.

<learning-block type="example" title="Counting optical isomers">

2,3-dichlorobutane has two stereocentres, so at most $2^2=4$ stereoisomers. Two are a pair of enantiomers, and the third is the meso form (one centre R, one S, with an internal mirror plane). The fourth arrangement is the same meso compound. Total: **3**.

</learning-block>

## 4. Counting isomers without missing any

Work in a fixed order:

1. **Skeletons** — straight chain, then one branch, then two branches.
2. **Positions** — move the functional group or multiple bond along each skeleton.
3. **Functional groups** — swap the group for another with the same formula (alcohol ↔ ether, aldehyde ↔ ketone).
4. **Stereochemistry** — add cis/trans for each double bond and ring; add enantiomers for each chiral centre.

<learning-block type="example" title="C₄H₉Cl">

DoU $=(8+2-9-1)/2=0$, so the molecule is saturated and acyclic.

Skeletons and positions give four structural isomers:

1. 1-chlorobutane
2. 2-chlorobutane
3. 1-chloro-2-methylpropane
4. 2-chloro-2-methylpropane

Only 2-chlorobutane has a chiral centre, so it contributes a pair of enantiomers. Total stereoisomers: **5**.

</learning-block>

## 5. Worked examples

### Example 1: C₃H₈O

DoU = 0. Possible structures: propan-1-ol, propan-2-ol, methoxyethane. None is chiral. **Three isomers.**

### Example 2: C₄H₈

DoU = 1. Structural isomers: but-1-ene, but-2-ene, 2-methylpropene, cyclobutane, methylcyclopropane. But-2-ene adds a cis/trans pair. **Six stereoisomers** in total.

### Example 3: find the chiral centre

CH₃–CH(OH)–CH₂–CH₃: C2 carries –H, –OH, –CH₃ and –CH₂CH₃ — four different groups, so C2 is chiral. C3 carries two hydrogens, so it is not.

### Example 4: which can show geometric isomerism?

- but-1-ene: no — C1 has two hydrogens.
- but-2-ene: yes.
- 2-methylbut-2-ene: no — C2 has two methyls.
- 3-methylpent-2-ene: yes — C2 has H and CH₃; C3 has CH₃ and C₂H₅.

<learning-block type="mistake" title="Where marks disappear">

- **Counting cis/trans twice as structural isomers.** cis- and trans-but-2-ene are stereoisomers, not different connectivities.
- **Calling every stereocentre “optically active”.** A meso form has stereocentres but is achiral.
- **Assuming a ring is planar.** Cyclohexane is not flat, which is why its 1,2-disubstituted cis/trans forms behave differently from alkene cis/trans.
- **Forgetting that a double-bond carbon with two identical groups kills geometric isomerism.**

</learning-block>

## Practice

1. How many structural isomers does C₅H₁₂ have? Name them.
2. How many structural isomers does C₄H₉Br have? Which one is chiral?
3. Does pent-2-ene show E/Z isomerism? Explain.
4. Identify all stereocentres in CH₃CH(Cl)CH(OH)CH₃.
5. How many stereoisomers does 2,3-dichlorobutane have, and why is the number not 4?
6. Write the enol tautomer of CH₃COCH₂COCH₃.
7. Which pair are functional isomers: (a) butan-1-ol and butan-2-ol, (b) propanal and propanone?

<details><summary>Answers</summary>

1. Three: pentane, 2-methylbutane, 2,2-dimethylpropane.
2. Four structural isomers: 1-bromobutane, 2-bromobutane, 1-bromo-2-methylpropane, 2-bromo-2-methylpropane. 2-bromobutane is chiral (C2 has H, Br, CH₃, C₂H₅).
3. Yes. C2 carries H and CH₃; C3 carries H and C₂H₅, so E and Z forms exist.
4. C2 and C3 are both stereocentres (each has H, CH₃/CH₂, Cl/OH, and the rest of the chain).
5. Three: a pair of enantiomers plus a meso form with an internal plane of symmetry.
6. CH₃C(OH)=CHCOCH₃ (the enol form).
7. (b) propanal and propanone are functional isomers; (a) is position isomerism.

</details>

## Take away

Structural isomerism changes the connectivity; stereoisomerism changes the spatial arrangement. Count in a fixed order — skeleton, position, functional group, stereochemistry — and the number stops being a guessing game.
