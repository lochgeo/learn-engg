## From skeleton to bookkeeping-true equation

A redox change can be obvious ("nickel chloride reacts with aluminium") without its coefficients being known. Guessing them fails whenever several elements change at once. Two systematic methods do the job without guesswork:

- the **oxidation-number method** — the total increase of oxidation numbers equals the total decrease;
- the **half-reaction (ion–electron) method** — balance each redox couple separately, then cancel the electrons.

Both express the identical conservation laws: atoms are conserved and charge is conserved. Choose either; the half-reaction method generalises more easily to ionic equations in acidic or basic medium, which is where titration questions live.

## 1. The oxidation-number method

For a molecule-level equation, prefer this method:

1. Write the skeleton equation.
2. Assign oxidation numbers to the atoms that change.
3. Multiply each changed species by the number that makes total electron loss equal total electron gain.
4. Balance the remaining atoms (usually oxygen and hydrogen) by inspection with water, then check everything.

**Worked example: MnO₂ and hydrochloric acid.** Skeleton: $\mathrm{MnO_2 + HCl \rightarrow MnCl_2 + Cl_2 + H_2O}$.

Oxidation numbers: Mn $+4 \rightarrow +2$ (gains 2 electrons, reduction); Cl in $\mathrm{HCl}$ $-1 \rightarrow 0$ (loses 1 electron, oxidation). Balance the ledger: one Mn takes 2 electrons, so 2 chloride ions must climb to 0 — multiply the chlorine side by 2:

$$
\mathrm{MnO_2 + \,2\,HCl_{(net)} \rightarrow MnCl_2 + Cl_2}
$$

Now count the leftover atoms. Manganese: 1 and 1. Oxygen: 2 on the left fixed by $2\ \mathrm{H_2O}$ on the right. Hydrogen: the 2 written waters use 4 H, so 4 HCl are consumed in total — but only 2 of them lose an electron each; the other 2 are **spectators** riding through as chloride in $\mathrm{MnCl_2}$:

$$
\mathrm{MnO_2 + 4HCl \rightarrow MnCl_2 + Cl_2 + 2H_2O}
$$

Sanity check: atoms — Mn 1 : 1; Cl 4 : 2 + 2 = 4; O 2 : 2; H 4 : 4. Charge is not formally tracked here because everything is neutral in the molecular equation. The lesson worth keeping: **only 2 of the 4 HCl molecules change oxidation number**; in JEE questions this "ionic fraction" (here $\tfrac12$) is asked regularly.

## 2. The half-reaction method in acidic medium

For the magnesium-copper and permanganate–iron equations of the earlier modules, split into the two couples that were introduced there. The systematic procedure:

1. Split the skeleton into the two couples (oxidation state parts).
2. Balance all atoms except O and H in each half-reaction.
3. Balance O with $\mathrm{H_2O}$; balance H with $\mathrm{H^+}$ (acidic medium).
4. Balance charge with electrons.
5. Multiply each half-reaction by the smallest integers that equalise electrons and cancel.
6. Add; simplify common species; then verify atoms and charge in the final net equation.

**Worked example: permanganate and iron(II) in acid.** Skeleton: $\mathrm{MnO_4^- + Fe^{2+} \rightarrow Mn^{2+} + Fe^{3+}}$.

Reduction half (Mn $+7 \rightarrow +2$): $\mathrm{MnO_4^- \rightarrow Mn^{2+}}$.

- O: 4 on the left gives $4\ \mathrm{H_2O}$ on the right.
- H: 8 H of those waters give $8\ \mathrm{H^+}$ on the left.
- Charge: left is $-1 + 8 = +7$; right is $+2$. Add 5 electrons to the left to close the gap:

$$
\mathrm{MnO_4^- + 8H^+ + 5e^- \rightarrow Mn^{2+} + 4H_2O}
$$

Oxidation half (Fe $+2 \rightarrow +3$):

$$
\mathrm{Fe^{2+} \rightarrow Fe^{3+} + e^-}
$$

Electrons: 5 and 1, so multiply the iron half by 5 and add:

$$
\mathrm{MnO_4^- + 5Fe^{2+} + 8H^+ \rightarrow Mn^{2+} + 5Fe^{3+} + 4H_2O}
$$

Check atoms: Mn 1 : 1, Fe 5 : 5, O 4 : 4, H 8 : 8. Check charge: left $(-1) + 10 + 8 = +17$; right $+2 + 15 = +17$. Passing both checks confirms the equation.

## 3. The half-reaction method in basic medium

Add water, then $\mathrm{OH^-}$, maintaining charge balance with electrons. The easiest drill is to balance in acidic medium first and neutralise the $\mathrm{H^+}$ at the end by adding equal $\mathrm{OH^-}$ to each side — the pairs $\mathrm{H^+} + \mathrm{OH^-} \rightarrow \mathrm{H_2O}$ collapse, and water is struck from both sides wherever it cancels.

**Worked example: permanganate and sulphite in basic medium.** Skeleton: $\mathrm{MnO_4^- + SO_3^{2-} \rightarrow MnO_2 + SO_4^{2-}}$.

Reduction half (Mn $+7 \rightarrow +4$): $\mathrm{MnO_4^- \rightarrow MnO_2}$, needing 3 electrons, waters and hydroxides:

$$
\mathrm{MnO_4^- + 2H_2O + 3e^- \rightarrow MnO_2 + 4OH^-}
$$

Check atoms: O left $4 + 2 = 6$, right $2 + 4 = 6$; H 4 : 4. Check charge: left $-1 - 3 = -4$; right $-4$. Balanced.

Oxidation half (S $+4 \rightarrow +6$):

$$
\mathrm{SO_3^{2-} + 2OH^- \rightarrow SO_4^{2-} + H_2O + 2e^-}
$$

Check atoms: S 1 : 1; O $3+2 = 5 : 4+1 = 5$; H $2 : 2$. Check charge: left $-2 - 2 = -4$; right $-2 - 2 = -4$. Balanced.

Equalise electrons — the LCM of 3 and 2 is 6 — by taking $2\times$ the first and $3\times$ the second, then cancel 6 electrons, $3\ \mathrm{H_2O}$ with $4\ \mathrm{H_2O}$ (leaving $1\ \mathrm{H_2O}$ on the left) and $6\ \mathrm{OH^-}$ with $8\ \mathrm{OH^-}$ (leaving $2\ \mathrm{OH^-}$ on the right):

$$
\mathrm{2MnO_4^- + 3SO_3^{2-} + H_2O \rightarrow 2MnO_2 + 3SO_4^{2-} + 2OH^-}
$$

Final checks: O left $8 + 9 + 1 = 18$; right $4 + 12 + 2 = 18$; H $2 : 2$; charge left $-2 - 6 = -8$, right $-6 - 2 = -8$. Passing.

## 4. Formulas where the element count is shared

Sometimes one reactant supplies two elements that both change, or an element appears in more than one product. Write the coefficient on the couple-to-couple electron exchange first and treat repeated atoms afterwards. Decomposing potassium permanganate, from the previous module,

$$
\mathrm{2KMnO_4 \rightarrow K_2MnO_4 + MnO_2 + O_2}
$$

shows manganese folded into two different destinations (gains $1 + 3 = 4$ electrons) while two oxygens climb together (release 4 electrons). The ledger balancing covers both routes at once.

<learning-block type="mistake" title="Balancing blunders">

- **Mixing up oxidation and reduction halves.** Electrons are products of the oxidation half, reactants of the reduction half. If electrons appear only on one side for both, you have combined them wrongly.
- **Balancing oxygen without the right partner.** In acid use $\mathrm{H^+}$ and $\mathrm{H_2O}$; in base use $\mathrm{OH^-}$ and $\mathrm{H_2O}$. Adding $\mathrm{H^+}$ in a basic medium gives a chemically nonsensical answer.
- **Ignoring the charge check.** A balanced atom count with the wrong total charge hides a missing electron or a skipped coefficient. The charge audit catches nearly every balancing slip instantly.
- **Forgetting to cancel water.** When half-reactions are summed, waters and hydroxides that appear identically on both sides must cancel, or the coefficients carry an avoidable extra factor.

</learning-block>

## Try it yourself

**A.** Balance, in acidic medium, the dichromate–iron(II) reaction: $\mathrm{Cr_2O_7^{2-} + Fe^{2+} \rightarrow Cr^{3+} + Fe^{3+}}$.

<details><summary>Show the reasoning</summary>

Reduction half: $\mathrm{Cr_2O_7^{2-} \rightarrow 2Cr^{3+}}$; add $7\ \mathrm{H_2O}$ on the right, then $14\ \mathrm{H^+}$ on the left, then 6 electrons on the left:

$$
\mathrm{Cr_2O_7^{2-} + 14H^+ + 6e^- \rightarrow 2Cr^{3+} + 7H_2O}
$$

Oxidation half: $\mathrm{Fe^{2+} \rightarrow Fe^{3+} + e^-}$ — multiply by 6. Adding and cancelling:

$$
\mathrm{Cr_2O_7^{2-} + 6Fe^{2+} + 14H^+ \rightarrow 2Cr^{3+} + 6Fe^{3+} + 7H_2O}
$$

Check: charge left $(-2) + 12 + 14 = +24$; right $6 + 18 = +24$ ✓.

</details>

**B.** Using the oxidation-number method, balance $\mathrm{MnO_4^- + C_2O_4^{2-} + H^+ \rightarrow Mn^{2+} + CO_2 + H_2O}$ in acid, and give the molar ratio $\mathrm{MnO_4^- : C_2O_4^{2-}}$.

<details><summary>Show the reasoning</summary>

Mn goes $+7 \rightarrow +2$, a fall of 5 per atom; carbon in oxalate goes $+3 \rightarrow +4$, a rise of 1 per carbon, 2 per ion $\mathrm{C_2O_4^{2-}}$ — so 5 oxalate ions versus 2 permanganate ions equalise the ledger (5 × 2 = 10 electrons versus 2 × 5 = 10 electrons). The balanced equation:

$$
\mathrm{2MnO_4^- + 5C_2O_4^{2-} + 16H^+ \rightarrow 2Mn^{2+} + 10CO_2 + 8H_2O}
$$

Checks: O left $8 + 20 = 28$; right $20 + 8 = 28$ ✓. H $16 : 16$ ✓. Charge left $-2 - 10 + 16 = +4$; right $+4$ ✓. Ratio $\mathrm{MnO_4^- : C_2O_4^{2-}} = 2 : 5$.

</details>

**C.** Balance in basic medium: $\mathrm{MnO_4^- + I^- \rightarrow MnO_2 + I_2}$.

<details><summary>Show the reasoning</summary>

Reduction half (as before, capturing 3 electrons): $\mathrm{MnO_4^- + 2H_2O + 3e^- \rightarrow MnO_2 + 4OH^-}$.

Oxidation half: two iodides give one iodine molecule, each climbing $-1 \rightarrow 0$, so 2 electrons; add $2\ \mathrm{OH^-}$ on the left? No — first balance atoms: $\mathrm{2I^- \rightarrow I_2 + 2e^-}$; the hydrogens and oxygens already match, but in base the charges already balance: left $2 \times (-1) = -2$, right $0 + (-2) = -2$ ✓.

Equalise electrons (LCM 6): apply $2\times$ to the reduction half and $3\times$ to the oxidation half:

$$
\mathrm{2MnO_4^- + 4H_2O + 6e^- \rightarrow 2MnO_2 + 8OH^-}
$$
$$
\mathrm{6I^- \rightarrow 3I_2 + 6e^-}
$$

Sum and cancel: $\mathrm{2MnO_4^- + 4H_2O + 6I^- \rightarrow 2MnO_2 + 3I_2 + 8OH^-}$. Checks: O left $8 + 4 = 12$; right $4 + 8 = 12$ ✓; H $8 : 8$ ✓; charge left $-2 - 6 = -8$; right $-6 - 8 = -8$ ✓.

</details>

## Remember

- The oxidation-number method equalises electron loss and gain; use it for molecular equations and when only one element changes.
- The half-reaction method splits into couples, balances O and H with water and $\mathrm{H^+}$ (acid) or $\mathrm{OH^-}$ (base), then closes the charge with electrons.
- Electrons are products in oxidation half-reactions and reactants in reduction half-reactions.
- Always verify atoms **and** total charge at the end; the charge audit catches a skipped coefficient instantly.
- In some redox reactions (e.g. $\mathrm{MnO_2 + 4HCl}$) only a fraction of one reagent actually participates in the electron transfer — count the genuine ionic change separately.

Coefficients are only the first step. The next module puts these balanced equations to work in the laboratory: prefixes of standard solutions, indicators and titration arithmetic.
