## From a reaction list to a plan

Knowing that an amine can be acylated, diazotised or reduced does not by itself let you make a target molecule. A synthesis is a **plan**: you decide which bond to make, in which order, and which functional groups need protecting while the rest of the molecule is changed.

The most reliable way to plan is to work backwards. Start at the target and ask: what immediate precursor could give it in one reliable step? Repeat until you reach a cheap starting material. This is **retrosynthesis**, and it turns a large reaction list into a short decision tree.

## 1. The carbon-count toolkit

Carbon count is the first thing to check, because a beautiful mechanism with the wrong number of carbons is still wrong.

| Transformation | Change in carbon count | Amine class produced |
| --- | --- | --- |
| Alkyl halide → nitrile → reduction | $+1$ | primary |
| Amide → Hofmann degradation | $-1$ | primary |
| Nitroarene → reduction | $0$ | primary aromatic |
| Aldehyde/ketone + $\mathrm{NH_3}$ → reductive amination | $0$ | primary |
| Aldehyde/ketone + $1^\circ$ amine → reductive amination | $0$ | secondary |
| Alkyl halide + $\mathrm{NH_3}$ | $0$ | primary, with over-alkylation |
| Gabriel synthesis | $0$ | primary only |

When the target has one carbon more than the available halide, reach for the nitrile route. When it has one carbon fewer than the available amide, reach for Hofmann degradation. When the target is secondary and both groups are available as carbonyl and amine, reach for reductive amination.

## 2. Protecting the amine

The $-\mathrm{NH_2}$ group is both strongly activating and easily oxidised. Many ring reactions that work on benzene fail on aniline because the amine reacts first or directs every electrophile to every available position.

Acylation solves both problems. Acetanilide is less activated than aniline, less easily oxidised, and can be hydrolysed back to the amine after the ring reaction. The protection–reaction–deprotection sequence is the standard pattern:

$$
\mathrm{ArNH_2 \xrightarrow{Ac_2O} ArNHCOCH_3 \xrightarrow{E^+} \text{ring-substituted amide} \xrightarrow{H_2O/H^+} \text{ring-substituted aniline}}.
$$

The same logic applies to the synthesis of dyes: a free amine may couple with a diazonium salt when you do not want it to, so it is protected until the coupling step.

## 3. Directing effects decide the order

The order of steps is often fixed by the directing effect of the substituent already on the ring.

- $-\mathrm{NH_2}$ and $-\mathrm{NHCOCH_3}$ are ortho/para directing.
- $-\mathrm{NO_2}$ is meta directing and strongly deactivating.
- $-\mathrm{Br}$ is ortho/para directing but deactivating.

So to make **p-bromoaniline**, the bromine must be introduced while the nitrogen is protected as an acetamido group, which directs para and is not so activating that it forces tribromination. To make **m-bromoaniline**, the bromine must be introduced while the nitrogen is still a nitro group, which directs meta. Reducing the nitro group afterwards gives the amine. The same target can therefore require completely different routes depending on the position of the substituent.

## 4. Diazonium salts as late-stage handles

The diazonium group is best used late in a synthesis, after the carbon skeleton and other substituents are in place. It converts a single amino group into a wide range of products:

- phenol by warming with water;
- chlorobenzene or bromobenzene by Sandmeyer reaction;
- iodobenzene by treatment with potassium iodide;
- benzonitrile by Sandmeyer reaction with copper(I) cyanide;
- benzene by reduction with hypophosphorous acid;
- an azo dye by coupling with a phenol or an aromatic amine.

Because diazotisation requires a primary aromatic amine, the usual precursor is aniline or a substituted aniline made by nitro reduction.

## 5. Worked synthesis: benzene to p-bromoaniline

**Step 1 — nitration.** Benzene with concentrated nitric and sulphuric acids gives nitrobenzene.

**Step 2 — reduction.** Nitrobenzene with hydrogen over nickel, or with tin and hydrochloric acid followed by base, gives aniline.

**Step 3 — protection.** Aniline with acetyl chloride or acetic anhydride gives acetanilide.

**Step 4 — bromination.** Acetanilide with bromine in acetic acid gives mainly p-bromoacetanilide. The acetamido group is ortho/para directing, and the para position is less hindered.

**Step 5 — deprotection.** Hydrolysis with aqueous acid or alkali liberates p-bromoaniline.

The sequence is long, but every step is reliable. A shorter alternative is to brominate benzene first, nitrate the bromobenzene, separate the para isomer and reduce it. That route avoids protection but relies on a separation of ortho and para isomers, which is often less clean.

## 6. Worked synthesis: benzene to m-bromoaniline

**Step 1 — nitration.** Benzene gives nitrobenzene.

**Step 2 — bromination.** Nitrobenzene with bromine and iron(III) bromide gives m-bromonitrobenzene. The nitro group is meta directing, so the bromine enters the 3-position.

**Step 3 — reduction.** m-Bromonitrobenzene is reduced to m-bromoaniline.

The contrast with the previous synthesis is the whole lesson: the same two substituents, $-\mathrm{NH_2}$ and $-\mathrm{Br}$, end up in different relative positions because the bromine was introduced at a different oxidation level of the nitrogen.

## 7. Worked synthesis: ethanol to ethanamine

**Step 1 — convert the alcohol to a halide.** Ethanol with phosphorus tribromide or with hydrogen bromide gives bromoethane.

**Step 2 — Gabriel synthesis.** Bromoethane reacts with potassium phthalimide to give N-ethylphthalimide.

**Step 3 — cleavage.** Hydrolysis with aqueous acid or alkali, or treatment with hydrazine, gives ethanamine.

The Gabriel route is chosen over direct ammonolysis because it avoids over-alkylation: the imide nitrogen can accept only one ethyl group.

## 8. Worked example: overall yield of a two-step sequence

A synthesis converts $12.3\ \text{g}$ of 1-bromopropane into butanenitrile in $85\%$ yield, then reduces the nitrile to butan-1-amine in $90\%$ yield. Find the mass of amine obtained.

**Moles of starting halide.** $M(\mathrm{C_3H_7Br})=123.0\ \text{g mol}^{-1}$:

$$
n=\frac{12.3}{123.0}=0.100\ \text{mol}.
$$

**Step 1.** Butanenitrile, $\mathrm{C_4H_7N}$, has $M=69.1\ \text{g mol}^{-1}$. The theoretical mass is $0.100\times69.1=6.91\ \text{g}$, so the actual mass is

$$
0.85\times6.91=5.87\ \text{g},
$$

which corresponds to $5.87/69.1=0.0850\ \text{mol}$.

**Step 2.** Butan-1-amine, $\mathrm{C_4H_{11}N}$, has $M=73.1\ \text{g mol}^{-1}$. From $0.0850\ \text{mol}$ the theoretical mass is $0.0850\times73.1=6.22\ \text{g}$, so the actual mass is

$$
0.90\times6.22=5.60\ \text{g}.
$$

**Shortcut.** Yields multiply:

$$
\text{overall yield}=0.85\times0.90=0.765.
$$

The theoretical mass from $0.100\ \text{mol}$ of starting halide is $0.100\times73.1=7.31\ \text{g}$, and $0.765\times7.31=5.59\ \text{g}$, which agrees with the step-by-step result to within rounding.

**Sanity check.** The overall yield must be lower than either individual yield, and it is: $76.5\%<85\%$ and $<90\%$. The carbon count has risen from three to four, as the nitrile route requires.

## 9. Worked example: how much starting material?

A target requires $10.0\ \text{g}$ of p-bromoaniline, $M=172.0\ \text{g mol}^{-1}$. The overall yield of the protection–bromination–deprotection sequence is $78\%$. What mass of aniline, $M=93.1\ \text{g mol}^{-1}$, is needed?

**Moles of product required:**

$$
n=\frac{10.0}{172.0}=5.81\times10^{-2}\ \text{mol}.
$$

**Allow for the yield.** The required moles of aniline are

$$
\frac{5.81\times10^{-2}}{0.78}=7.45\times10^{-2}\ \text{mol}.
$$

**Mass of aniline:**

$$
m=(7.45\times10^{-2})(93.1)=6.94\ \text{g}.
$$

**Sanity check.** More starting material is needed than the product moles alone suggest, because some is lost at each step. A requirement of about $6.9\ \text{g}$ to obtain $10.0\ \text{g}$ of a heavier product is reasonable.

<learning-block type="mistake" title="Synthesis-planning errors">

- **Nitrating or brominating aniline without protection.** The free amine is too activating and too easily oxidised, and protonation in strong acid changes the directing effect.
- **Choosing the wrong carbon-count route.** Nitrile formation adds a carbon; Hofmann degradation removes one. Check the count before choosing reagents.
- **Putting the diazonium step too early.** Later steps may not survive the cold, acidic aqueous conditions; use the diazonium salt near the end.
- **Forgetting that yields multiply.** A $90\%$ step followed by another $90\%$ step gives $81\%$, not $90\%$.

</learning-block>

## Try it yourself

**A.** Design a three-step synthesis of m-bromoaniline from benzene.

<details><summary>Show the reasoning</summary>

Nitrate benzene to nitrobenzene. Brominate nitrobenzene with $\mathrm{Br_2/FeBr_3}$; the nitro group directs meta, giving m-bromonitrobenzene. Reduce the nitro group with hydrogen over nickel, or with tin and hydrochloric acid followed by base, to give m-bromoaniline.

</details>

**B.** Why is the Gabriel synthesis a better choice than ammonolysis for converting bromoethane into ethanamine?

<details><summary>Show the reasoning</summary>

Ammonolysis allows the product ethanamine to attack more bromoethane, producing diethylamine, triethylamine and tetraethylammonium bromide. In the Gabriel synthesis the nitrogen is part of phthalimide and has only one replaceable hydrogen, so a single ethyl group is introduced and the product is cleanly primary.

</details>

**C.** A two-step synthesis has yields of $80\%$ and $75\%$. What is the overall yield, and what mass of product is obtained from $0.200\ \text{mol}$ of starting material if the product has molar mass $100\ \text{g mol}^{-1}$?

<details><summary>Show the reasoning</summary>

Overall yield $=0.80\times0.75=0.60$, or $60\%$. The theoretical mass is $0.200\times100=20.0\ \text{g}$, so the actual mass is $0.60\times20.0=12.0\ \text{g}$.

</details>

## Remember

- Plan backwards from the target; check the carbon count before choosing reagents.
- Protect aniline by acylation before reactions that need a less activated or less oxidisable ring.
- The directing effect of the group already present fixes the order of ring substitution.
- Use the diazonium salt late, because it needs cold acidic aqueous conditions.
- Overall yield is the product of the individual step yields.

The practice module that follows turns these ideas into a set of mixed questions, and the timed set tests whether you can choose the right route under pressure.
