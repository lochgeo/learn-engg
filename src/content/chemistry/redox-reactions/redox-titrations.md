## Counting electrons by the burette

Balanced equations give ratios; titrations turn ratios into measurements. In a redox titration a standard solution of known concentration is run from a burette into the unknown until the two reagents are present in exactly their stoichiometric ratio. At that instant every electron produced has been consumed — the **equivalence point**. If you know quantity and concentration on one side, the balanced equation hands you the other. This module covers the two standard oxidants, the indicators that tell you when to stop, the $n$-factor shortcut that replaces mole arithmetic, and the first steps towards an electrochemical cell.

## 1. Potassium permanganate in acid

In dilute sulphuric acid permanganate drops all the way from $+7$ to $+2$:

$$
\mathrm{MnO_4^- + 5e^- + 8H^+ \rightarrow Mn^{2+} + 4H_2O}
$$

Five electrons captured per ion — the permanganate ion is therefore a five-electron oxidant, and the half reaction fixes the whole titration arithmetic:

$$
\mathrm{2MnO_4^- + 10Fe^{2+} + 16H^+ \rightarrow 2Mn^{2+} + 10Fe^{3+} + 8H_2O} \qquad (1:5)
$$

$$
\mathrm{2MnO_4^- + 5C_2O_4^{2-} + 16H^+ \rightarrow 2Mn^{2+} + 10CO_2 + 8H_2O} \qquad (2:5)
$$

Three practical notes:

- The permanganate solution must stand, be filtered and be standardised before use, because dust and chloride reduce Mn(VII) slowly on the shelf.
- Oxalate titrations need warming (about $60^\circ$C, not boiling) and start slowly; $\mathrm{Mn^{2+}}$ produced acts as a catalyst, so the reaction accelerates — the classic **autocatalysis** observation.
- Chloride interferes: in concentrated HCl permanganate oxidises chloride to chlorine instead of performing the titration, which is why dilute $\mathrm{H_2SO_4}$ supplies the acidity.

**Worked example.** $25.0\ \text{mL}$ of a Mohr's salt ($\mathrm{FeSO_4 \cdot (NH_4)_2SO_4 \cdot 6H_2O}$) solution needs $20.0\ \text{mL}$ of $0.02\ \text{M}$ $\mathrm{KMnO_4}$ in acid. Find the molarity of the iron(II) solution.

Use the $1:5$ ratio:

$$
n(\mathrm{MnO_4^-}) = 0.02 \times \frac{20.0}{1000} = 4.0\times10^{-4}\ \text{mol}
$$

$$
n(\mathrm{Fe^{2+}}) = 5 \times 4.0\times10^{-4} = 2.0\times10^{-3}\ \text{mol}
$$

$$
M(\mathrm{Fe^{2+}}) = \frac{2.0\times10^{-3}\ \text{mol}}{25.0\times10^{-3}\ \text{L}} = 0.080\ \text{M}
$$

Sanity check: the oxidant carries $20.0\ \text{mL} \times 0.02\ \text{M} = 0.40\ \text{mmol}$ of $\mathrm{MnO_4^-}$; the $1:5$ ratio then consumes $2.0\ \text{mmol}$ of $\mathrm{Fe^{2+}}$, which is exactly what a $25.0\ \text{mL}$ solution of $0.080\ \text{M}$ contains.

## 2. Potassium dichromate in acid

Dichromate is a gentler, shelf-stable oxidant:

$$
\mathrm{Cr_2O_7^{2-} + 6e^- + 14H^+ \rightarrow 2Cr^{3+} + 7H_2O}
$$

six electrons per ion; it is stable on the shelf and leaves chloride alone:

$$
\mathrm{Cr_2O_7^{2-} + 6Fe^{2+} + 14H^+ \rightarrow 2Cr^{3+} + 6Fe^{3+} + 7H_2O} \qquad (1:6)
$$

It does not tint its own products enough to announce the equivalence point ($\mathrm{Cr^{3+}}$ is only pale green), so a **redox indicator** such as diphenylamine marks the turning point: the first slight excess of oxidant converts the indicator to a permanent purple-blue species.

**Worked example.** An ore weighing $0.50\ \text{g}$ is dissolved, the iron is reduced quantitatively to $\mathrm{Fe^{2+}}$, and the solution is titrated: $40.0\ \text{mL}$ of $0.025\ \text{M}$ $\mathrm{K_2Cr_2O_7}$ is consumed. Find the percentage of iron in the ore.

$$
n(\mathrm{Cr_2O_7^{2-}}) = 0.025 \times 0.0400 = 1.0\times10^{-3}\ \text{mol}
$$

$$
n(\mathrm{Fe^{2+}}) = 6 \times 1.0\times10^{-3} = 6.0\times10^{-3}\ \text{mol}
$$

$$
m(\mathrm{Fe}) = 6.0\times10^{-3} \times 56\ \text{g/mol} = 0.336\ \text{g}
$$

$$
\% \mathrm{Fe} = \frac{0.336}{0.50} \times 100 = 67.2\%
$$

Sanity check: the ratio of 6 iron per dichromate and a mass under half a gram of ore both sit well within lab reality.

## 3. Choosing and using indicators

| Indicator type | Acting agent | Example |
| --- | --- | --- |
| Self-indicator | the titrant itself | $\mathrm{KMnO_4}$ — one excess drop tints the flask pink permanently |
| External indicator | a separate spot test | ferricyanide on a porcelain plate for iron(II) with dichromate, discontinued fairly early |
| Redox indicator | oxidised and reduced forms differ in colour | diphenylamine (with $\mathrm{K_2Cr_2O_7}$) |
| Specific adsorption | complex formation | starch with $\mathrm{I_2}$, blue-black |

The choice depends on the colour contrast of the couple itself; permanganate needs none beyond the eye.

## 4. The n-factor shortcut

The **$n$-factor** is the number of electrons exchanged per formula unit:

| Species in redox context | $n$-factor | Why |
| --- | --- | --- |
| $\mathrm{KMnO_4}$ in acid | 5 | $\mathrm{MnO_4^-}$ collecting 5 e to $\mathrm{Mn^{2+}}$ |
| $\mathrm{KMnO_4}$ in mild basic medium | 1 | $\mathrm{MnO_4^-} \rightarrow \mathrm{MnO_4^{2-}}$ |
| $\mathrm{K_2Cr_2O_7}$ in acid | 6 | collects 6 e to $2\ \mathrm{Cr^{3+}}$ |
| $\mathrm{Fe^{2+} \rightarrow Fe^{3+}}$ | 1 | loses 1 e |
| $\mathrm{C_2O_4^{2-} \rightarrow 2CO_2}$ | 2 | loses 2 e per ion |
| $\mathrm{I_2 \rightarrow 2I^-}$ | 2 | gains 2 e |

At the equivalence point **electronic equivalents from both sides add up**, which gives the working rule $n_{\text{oxidant}} \times V_{\text{oxidant}} \times M_{\text{oxidant}} = n_{\text{reductant}} \times V_{\text{reductant}} \times M_{\text{reductant}}$ when volumes and molarities are directly compared. Keep the same medium on both sides of the multiplication — an $n$-factor of 5 for permanganate only holds in acid (Section 3 makes this point very visibly).

## 5. From titration bench to galvanic cell

The permanganate–iron(II) titration sums two half-reactions. In a titration they share one beaker: electrons pass through collisions in solution. A **galvanic cell** separates them physically: the oxidation in one compartment, the reduction in another, joined through a wire (through which electrons flow as measurable current) and a salt bridge (which preserves electrical neutrality by ion migration). In the Daniell cell, $\mathrm{Zn/Zn^{2+}}$ oxidation releases electrons at the **anode** (negative in a galvanic cell), and $\mathrm{Cu^{2+}}$ reduction collects them at the **cathode** (positive). Every titration in this module is cell chemistry at zero separation; the direction and position of each couple — which one pushes electrons out — is what the concept of electrode potential quantifies, a subject that draws directly on the redox couples of the first module.

<learning-block type="mistake" title="Titration tripwires">

- **Wrong medium, wrong ratio.** Permanganate in acid exchanges 5 electrons, in mild base only 1. Mixing the values up scales the whole answer by five.
- **Confusing endpoint with equivalence point.** The endpoint is what the indicator shows; the equivalence point is the stoichiometric instant. A good indicator minimises the gap, but they are not definitions of each other.
- **Dropping the acidic hydrogen count.** In $\mathrm{2MnO_4^- + 5C_2O_4^{2-} + 16H^+}$ the 16 is easily forgotten, unbalancing every numerical question involving oxalate.
- **Dichromate with the naked eye.** $\mathrm{Cr^{3+}}$ is too pale to indicate stoichiometry by itself; an indicator (or a potentiometer) must be added, otherwise the titre drifts.

</learning-block>

## Try it yourself

**A.** How many millilitres of $0.10\ \text{M}$ $\mathrm{KMnO_4}$ (acid) would titrate $50.0\ \text{mL}$ of $0.50\ \text{M}$ $\mathrm{Fe^{2+}}$?

<details><summary>Show the reasoning</summary>

Iron(II) moles: $0.50 \times 0.0500 = 2.5\times10^{-2}\ \text{mol} = 25\ \text{mmol}$. Ratio $1:5$ needs $5\ \text{mmol}$ permanganate:

$$
V = \frac{5\times10^{-3}\ \text{mol}}{0.10\ \text{mol/L}} = 5.0\times10^{-2}\ \text{L} = 50.0\ \text{mL}
$$

</details>

**B.** What does the $n$-factor arithmetic predict for the equivalent mass of $\mathrm{KMnO_4}$ in acidic medium ($M = 158\ \text{g/mol}$)?

<details><summary>Show the reasoning</summary>

Equivalent mass = molar mass $\div$ $n$-factor $= 158/5 = 31.6\ \text{g}$ per equivalent. In mild base (1 electron) the same number becomes $158\ \text{g}$ — fivefold larger, a favourite JEE twist.

</details>

**C.** In a K$\mathrm{IO_3}$–thiosulphate iodometric determination, iodate oxidises iodide in acid: the released $\mathrm{I_2}$ is titrated with $\mathrm{S_2O_3^{2-}}$, giving $\mathrm{S_4O_6^{2-}}$. Write the two reactions and combine them to find the ratio $\mathrm{IO_3^- : S_2O_3^{2-}}$.

<details><summary>Show the reasoning</summary>

The iodate stage, with 2 iodides per iodate:

$$
\mathrm{IO_3^- + 5I^- + 6H^+ \rightarrow 3I_2 + 3H_2O}
$$

Check: I $6:6$; O $3:3$; H $6:6$; charge $-1-5+6 = 0$; right $0$ ✓. The thiosulphate stage:

$$
\mathrm{I_2 + 2S_2O_3^{2-} \rightarrow 2I^- + S_4O_6^{2-}}
$$

Three iodines per iodate times two thiosulphates per $\mathrm{I_2}$ gives:

$$
\mathrm{IO_3^- : S_2O_3^{2-} = 1 : 6}
$$

</details>

## Remember

- A titration converts a balanced equation's mole ratio into a burette measurement; know the ratio for permanganate–iron(II) ($1:5$), permanganate–oxalate ($2:5$) and dichromate–iron(II) ($1:6$).
- $\mathrm{KMnO_4}$ in acid takes 5 electrons; $\mathrm{K_2Cr_2O_7}$ takes 6; both act in acidic sulphate medium, the former as its own indicator.
- Indicators: self (permanganate), diphenylamine (dichromate), starch (iodine).
- $n$-factor times molar volume compared across the equivalence point backs out unknown concentrations and equivalent masses.
- Separating the two half-reactions into different compartments gives the galvanic cell — the bridge to electrochemistry.

Two modules remain in this chapter. Next we consolidate with mixed practice, then a timed paper.
