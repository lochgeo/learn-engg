## When substitution has a competitor

A base does not have to attack the carbon carrying the halogen. It can remove a hydrogen from the adjacent carbon instead. The C–H electrons then form a π bond and the halide leaves, converting a single bond into a double bond. This is **elimination**, the reverse of the addition reactions of alkenes. It competes directly with substitution, and the winner depends on the substrate, the base, the solvent and the temperature.

## 1. The E2 mechanism

E2 is a concerted reaction: the base removes a β-hydrogen, the C–H bond becomes a π bond, and the C–X bond breaks, all in one step.

$$
\mathrm{B^- + H-C-C-X \rightarrow B-H + C{=}C + X^-}
$$

The rate law is second order:

$$
\text{rate} = k[\mathrm{RX}][\mathrm{B^-}].
$$

E2 requires a strong base and a **β-hydrogen** — a hydrogen on a carbon adjacent to the carbon carrying the halogen. The best geometry is **anti-periplanar**: the H and X lie on opposite sides of the C–C bond, with a dihedral angle near $180^\circ$. That geometric requirement controls the stereochemistry of the alkene.

E2 is favoured by tertiary substrates, strong bases such as hydroxide or ethoxide, and heat. The rate order is roughly

$$
3^\circ > 2^\circ > 1^\circ,
$$

although a primary halide with a strong bulky base can still eliminate efficiently.

### Zaitsev's rule

When more than one β-hydrogen is available, the major alkene is usually the more substituted one. This is **Zaitsev's rule** (also spelled Saytzeff). For 2-bromobutane with ethoxide,

$$
\mathrm{CH_3CHBrCH_2CH_3 \xrightarrow{EtO^-} CH_3CH{=}CHCH_3 + CH_2{=}CHCH_2CH_3},
$$

and but-2-ene is the major product. The more substituted double bond is more stable because alkyl groups donate electron density and stabilise the π system.

### The Hofmann exception

A bulky base such as potassium tert-butoxide cannot easily reach the more hindered β-hydrogen. It removes the more accessible hydrogen, so the **less substituted** alkene dominates. This is the Hofmann product. For 2-bromo-2-methylbutane:

- with ethoxide, the major product is 2-methylbut-2-ene (Zaitsev);
- with tert-butoxide, the major product is 2-methylbut-1-ene (Hofmann).

A quaternary ammonium hydroxide can also give the Hofmann product: the bulky trialkylamine leaving group makes the transition state that would lead to the more substituted alkene less accessible, so the less substituted alkene is favoured.

## 2. The E1 mechanism

E1 begins with the same slow ionisation as SN1:

$$
\mathrm{R-X \xrightarrow{slow} R^+ + X^-}.
$$

A base then removes a β-hydrogen from the carbocation, giving the alkene:

$$
\mathrm{R^+ \xrightarrow{B^-} alkene + BH}.
$$

The rate law contains only the halide:

$$
\text{rate} = k[\mathrm{RX}].
$$

E1 is favoured by tertiary substrates, weak bases such as water or ethanol, polar protic solvents and heat. It competes with SN1, and the two often occur together. A tertiary halide in aqueous ethanol, for example, gives both the substitution product (an alcohol) and the elimination product (an alkene). Because the intermediate is a carbocation, rearrangements are possible, and Zaitsev's rule usually selects the more substituted alkene.

## 3. Why heat favours elimination

Elimination converts a single molecule into two or more particles, so it increases the entropy of the system. For E1,

$$
\mathrm{R-X \rightarrow alkene + HX},
$$

one molecule becomes two. For E2 with hydroxide,

$$
\mathrm{R-X + OH^- \rightarrow alkene + H_2O + X^-},
$$

two reactant particles become three. Substitution, by contrast, usually keeps the particle count roughly unchanged:

$$
\mathrm{R-X + OH^- \rightarrow R-OH + X^-}.
$$

Using $\Delta G = \Delta H - T\Delta S$, a positive $\Delta S$ makes the $-T\Delta S$ term more negative as temperature rises, so the elimination pathway becomes relatively more favourable. This is why the practical rule is "heat with a strong base for elimination". Entropy is not the only factor — the base and the substrate must still allow the reaction — but it explains the temperature trend.

## 4. Substitution or elimination?

| Substrate | Strong nucleophile, weak base ($\mathrm{I^-}$, $\mathrm{CN^-}$) | Strong small base ($\mathrm{OH^-}$, $\mathrm{EtO^-}$) | Bulky base ($t$-BuOK) | Weak nucleophile/base ($\mathrm{H_2O}$, EtOH) |
| --- | --- | --- | --- | --- |
| Methyl | SN2 | SN2 (no β-H) | SN2 (no β-H) | very slow |
| Primary | SN2 | SN2, with E2 at high temperature | E2 | very slow |
| Secondary | SN2, some E2 | SN2 + E2 | E2 | SN1 + E1 |
| Tertiary | SN1 | E2 | E2 | SN1 + E1 |

Two practical signals are worth memorising:

- **Aqueous KOH** gives substitution: the hydroxide is a nucleophile and water is the solvent.
- **Alcoholic KOH** gives elimination: the alkoxide is a stronger base in the less polar solvent, and the alkene is less soluble so it separates.

The temperature reinforces the choice. A tertiary halide with aqueous KOH at room temperature gives mostly the alcohol; the same halide with alcoholic KOH at reflux gives mostly the alkene.

## 5. Drawing the mechanism correctly

A consistent arrow-pushing routine prevents most errors:

1. Identify the bond that breaks. In substitution it is C–X; in elimination it is C–X and a C–H bond.
2. For SN2, draw one arrow from the nucleophile to carbon and one from C–X to X.
3. For E2, draw an arrow from the base to the β-H, an arrow from the C–H bond to the C–C bond, and an arrow from C–X to X. The three arrows act together.
4. For SN1 and E1, draw the C–X heterolysis first, then attack or deprotonation.
5. Check that every arrow starts at a lone pair or a bond and ends at an atom or a new bond. Count formal charges at the end.

A common error is to draw E2 as two separate steps. If the base removes the hydrogen and the halide leaves in separate steps, the mechanism is E1, not E2.

## 6. Worked example: yield of an alkene mixture

$13.7\ \text{g}$ of 2-bromobutane, $M=136.9\ \text{g mol}^{-1}$, is treated with alcoholic KOH. The amount is

$$
n = \frac{13.7}{136.9} = 0.100\ \text{mol}.
$$

Dehydrohalogenation gives a mixture of but-2-ene and but-1-ene, both with $M=56.0\ \text{g mol}^{-1}$. If the mixture is $81\%$ but-2-ene and $19\%$ but-1-ene by moles, the masses are

$$
m(\text{but-2-ene}) = 0.081 \times 56.0 = 4.54\ \text{g},
$$

$$
m(\text{but-1-ene}) = 0.019 \times 56.0 = 1.06\ \text{g}.
$$

The theoretical total is $5.60\ \text{g}$. If $4.48\ \text{g}$ of alkene is collected, the percentage yield is $4.48/5.60 = 80.0\%$. The mass ratio equals the mole ratio here only because both alkenes have the same molar mass; do not assume that for a mixture of different alkenes.

<learning-block type="mistake" title="Elimination errors">

- **Using aqueous KOH and expecting elimination.** Aqueous KOH usually gives substitution; alcoholic KOH gives elimination.
- **Applying Zaitsev's rule with a bulky base.** Bulky bases give the Hofmann, less substituted alkene.
- **Ignoring the anti-periplanar requirement.** E2 is stereospecific; a conformation that cannot place H and X anti to each other reacts slowly or not at all.
- **Thinking E2 is first order in base.** E2 is second order: $k[\mathrm{RX}][\mathrm{B^-}]$.
- **Confusing E1 with SN1.** They share a carbocation intermediate, but E1 loses a β-hydrogen to form an alkene while SN1 captures the carbocation with a nucleophile.
- **Assuming heat always gives elimination.** Heat favours elimination only when a base and a β-hydrogen are present; a poor base may simply leave the halide unchanged.

</learning-block>

## Try it yourself

**A.** 2-Bromo-2-methylbutane is heated with sodium ethoxide in ethanol. Predict the major product.

<details><summary>Show the reasoning</summary>

Ethoxide is a small, strong base, so E2 with Zaitsev selectivity dominates. The more substituted alkene is **2-methylbut-2-ene**, formed by removing a hydrogen from the CH2 group. The minor product is 2-methylbut-1-ene.

</details>

**B.** The same substrate is treated with potassium tert-butoxide. Predict the major product and explain the change.

<details><summary>Show the reasoning</summary>

tert-Butoxide is bulky, so it removes the more accessible hydrogen from one of the equivalent methyl groups. The major product is the less substituted alkene, **2-methylbut-1-ene** (Hofmann product). The bulky base cannot reach the more hindered β-hydrogen that would give the Zaitsev product.

</details>

**C.** 1-Bromopropane is treated with (i) aqueous KOH and (ii) alcoholic KOH at reflux. Predict the main product in each case.

<details><summary>Show the reasoning</summary>

(i) Aqueous KOH provides hydroxide as a nucleophile in a polar protic solvent; the primary substrate undergoes SN2, giving **propan-1-ol**. (ii) Alcoholic KOH provides ethoxide, a stronger base in a less polar solvent, and heat favours elimination, giving **propene**. The primary substrate still has β-hydrogens, so E2 is possible.

</details>

## Remember

- E2 is concerted, second order, anti-periplanar and favoured by strong bases; E1 is first order and proceeds through a carbocation.
- Zaitsev's rule selects the more substituted alkene with small bases; bulky bases give the Hofmann product.
- Heat favours elimination because the particle count and entropy increase.
- Aqueous KOH usually substitutes; alcoholic KOH usually eliminates.
- The substrate class, the base strength and the temperature together decide whether substitution or elimination wins.
- The next module attaches the halogen to an aromatic ring, where the C–X bond is stronger and the rules change.
