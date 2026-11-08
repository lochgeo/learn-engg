## Start with the bookkeeping problem

A chemical bond is an arrangement of electrons that lowers the energy of two nuclei. Before we can argue about *why* a bond forms, we need a reliable way to count electrons and record where they sit. The Lewis structure is that record: a straight line for each shared pair, a pair of dots for each lone pair. Everything later in this chapter — shapes, hybridisation, polarity — starts from a correct Lewis structure, so the counting has to be automatic.

## 1. Lewis symbols and the octet rule

A Lewis symbol shows the **valence electrons** of an atom as dots around its letter. Hydrogen has one, carbon has four, oxygen has six. The octet rule then states: atoms share or transfer electrons so as to be surrounded by eight valence electrons (or two, for hydrogen and helium), because that counts as a filled outer shell — an $ns^2np^6$ arrangement.

The rule works well for second-period elements, but it is a **guide, not a law**:

| Case | Example | What happens |
| --- | --- | --- |
| electron-deficient | $\mathrm{BF_3}$, $\mathrm{BeCl_2}$ | fewer than 8 electrons around the central atom |
| expanded octet | $\mathrm{PCl_5}$, $\mathrm{SF_6}$ | more than 8 around third-period and heavier central atoms |
| odd-electron | NO, $\mathrm{NO_2}$ | an unpaired electron is unavoidable |

Reassuringly, hydrogen is never "deficient" even with only one bond: two electrons fill its 1s level.

## 2. Five steps to any Lewis structure

1. **Count all valence electrons**: one per atom's group number, plus one for each negative charge of an ion, minus one for each positive charge.
2. **Choose the skeleton**: the least electronegative atom (never hydrogen) goes in the centre; hydrogen always sits on the outside.
3. **Make single bonds** to join the skeleton, then give every outer atom its octet.
4. **Put leftovers on the central atom** as lone pairs.
5. **If the central atom has fewer than eight electrons**, convert lone pairs on outer atoms into double or triple bonds.

Worked through for $\mathrm{CO_2}$: $4 + 2(6) = 16$ valence electrons. Skeleton O–C–O uses 4 electrons; giving each oxygen six more uses all 16, but carbon has only four. Convert one lone pair from each oxygen into a bond and you get O=C=O, satisfying every octet.

<learning-block type="check" title="A 30-second audit">

After every structure, add the electron counts: each bond counts two, each lone pair counts two, and the total must equal the number from step 1. If it does not, retrace your steps before going anywhere else.

</learning-block>

## 3. Formal charge: which structure is best

Several structures can satisfy the octet rule. Formal charge assigns ownership of electrons as if the bond pairs were split exactly in half:

$$
\text{FC} = V - (N + \tfrac{B}{2}),
$$

where $V$ is the atom's number of valence electrons, $N$ its non-bonding (lone-pair) electrons and $B$ the electrons in bonds to it. The charges of all atoms must add up to the overall charge of the species.

The **best** Lewis structure has (a) formal charges as close to zero as possible, and (b) any negative charge on the more electronegative atom.

Check this on ozone, $\mathrm{O_3}$ (18 valence electrons). The structure O=O–O with the octet completed gives:

- terminal double-bonded oxygen: $6 - (4+2) = 0$
- central oxygen (one lone pair): $6 - (2+3) = +1$
- terminal single-bonded oxygen (three lone pairs): $6 - (6+1) = -1$

The charges sum to zero, as the molecule is neutral, and the negative charge sits where you expect it. The alternative O–O=O draws the double bond on the other side — these two are equivalent and both are real (that is the point of the next section).

As a second example, take the nitrate ion, $\mathrm{NO_3^-}$ ($5 + 18 + 1 = 24$ electrons). With one N=O and two N–O bonds, nitrogen carries $+1$, each single-bonded oxygen carries $-1$ and the double-bonded oxygen carries $0$; the total is $-1$, matching the ion.

<learning-block type="mistake" title="Formal-charge errors">

- Computing formal charge with the *total* valence electrons of the molecule instead of the atom's own electrons.
- Forgetting that a double bond holds four bonding electrons, so $\tfrac{B}{2} = 2$ for it.
- Letting the charges of individual atoms disagree with the charge of the ion or molecule.
- Believing that a nonzero formal charge means the atom is really charged: formal charge is a bookkeeping device, not a measurement.

</learning-block>

## 4. Resonance: one picture is not enough

Ozone has two equal O–O bonds that experiments show are identical, each shorter than a single bond and longer than a double bond. Neither single Lewis structure can say this. The individual structures are called **resonance structures**; they differ only in the placement of electrons, never in which atoms are bonded to which. The real molecule is the **resonance hybrid** — a blend of all of them, more stable than any one picture.

- $\mathrm{O_3}$: two equivalent structures, each O–O bond has bond order $1\tfrac12$.
- $\mathrm{NO_3^-}$: three equivalent structures, each N–O bond has bond order $1\tfrac13$.
- $\mathrm{CO_3^{2-}}$: three equivalent structures, each C–O bond has bond order $1\tfrac13$.
- benzene: two Kekulé structures; every C–C bond is $1\tfrac12$, which is why the ring reacts by substitution, not addition.

Resonance explains real properties: equal bond lengths where a naive drawing predicts unequal ones, and extra stability (resonance stabilisation) for delocalised ions and radicals.

<learning-block type="concept" title="Why resonance is not flapping">

The molecule is not switching between structures. Each structure is an incomplete snapshot of an electron distribution that a single two-dimensional drawing cannot capture. The hybrid is one thing with one set of intermediate bond lengths and one observed energy.

</learning-block>

## Try it yourself

**A.** Draw the Lewis structure of $\mathrm{SO_2}$ and give the formal charges.

<details><summary>Show the reasoning</summary>

$6 + 12 = 18$ valence electrons, skeleton O–S–O. After completing octets sulfur falls short, so convert one oxygen lone pair into an S=O bond. The accounting is then: one S=O (4) + one S–O (2) + two lone pairs on the double-bonded oxygen (4) + three lone pairs on the single-bonded oxygen (6) + one lone pair on sulfur (2) $= 18$. ✓

The double-bonded oxygen has FC $0$, the central sulfur (one lone pair, three bond pairs) has $6 - (2 + 3) = +1$, and the single-bonded oxygen has $6 - (6 + 1) = -1$. $\mathrm{SO_2}$ is the analogue of ozone: bent, with two equivalent resonance forms and average S–O bond order $1\tfrac12$.

</details>

**B.** Ammonium, $\mathrm{NH_4^+}$: count the electrons and assign the formal charge on nitrogen.

<details><summary>Show the reasoning</summary>

$5 + 4 - 1 = 8$ valence electrons, all four used in four N–H single bonds, leaving no lone pairs on nitrogen. FC on N $= 5 - (0 + \tfrac{8}{2}) = +1$; each H has $1 - (0+1) = 0$. The ion is a perfect tetrahedron with all four N–H bonds equivalent.

</details>

**C.** The sulphate ion is often drawn with all single bonds and two formal charges, or with two S=O double bonds and zero charges. Which better satisfies the formal-charge criterion, and what does each structure imply about S–O bonds?

<details><summary>Show the reasoning</summary>

With two S=O bonds (FC: S $= 6 - (0+6) = 0$, double-bonded O $0$, single-bonded O $-1$ each), all single-bond version has FC $+2$ on S and $-1$ on each oxygen. The double-bond structure puts charges closer to zero and negative charge on oxygen, so it is the better formal-charge choice; it also expands sulfur's octet to 12, allowed from period 3 onward. True S–O bonds are intermediate: partial double-bond character with d–p π overlap, so all six S–O bonds are shorter than a plain single bond.

</details>

## Remember

- Count valence electrons first; the audit at the end must land on that number exactly.
- Skeletons put the least electronegative atom in the centre and hydrogen always on the outside.
- Formal charge $= V - (N + \tfrac{B}{2})$; minimise it and park negative charge on the more electronegative atom.
- Resonance structures differ only in electron placement; the hybrid has equal, intermediate bond lengths.
- The octet rule guides second-period atoms but yields to electron-deficiency or expansion elsewhere.

In the next module we turn from sharing to the other extreme: complete electron transfer, and the energy accounts that make ionic solids possible.
