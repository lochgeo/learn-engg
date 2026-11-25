## Building a carbonyl on purpose

A carbonyl group is easy to make and easy to overshoot. Oxidise a primary alcohol carelessly and you pass straight through the aldehyde to the carboxylic acid; stop too early and most of the alcohol remains. The preparative methods in this module are therefore not just a list of reagents. Each one is a way of controlling **where the oxidation stops** or of placing the carbonyl at a chosen carbon.

It helps to keep the oxidation state of the carbonyl carbon in view. In an aldehyde, $\mathrm{R{-}CHO}$, the carbon is at $+1$; in a ketone, $\mathrm{R{-}CO{-}R'}$, it is at $+2$; in a carboxylic acid it is at $+3$. Oxidation of an alcohol to an aldehyde or ketone is a two-electron change. Further oxidation to the acid is another two-electron step, and that second step is what you must prevent when an aldehyde is the target.

## 1. Oxidation of alcohols

This is the most direct route and the one that shows the control problem most clearly.

**Primary alcohols.** A primary alcohol can be oxidised first to an aldehyde and then to a carboxylic acid:

$$
\mathrm{RCH_2OH \xrightarrow{[O]} RCHO \xrightarrow{[O]} RCOOH}.
$$

To isolate the aldehyde, use a mild oxidant that does not attack it further. **Pyridinium chlorochromate (PCC)** in dichloromethane is the standard choice. The reaction stops at the aldehyde because there is no water in the medium to form the hydrate that is needed for the second oxidation.

$$
\mathrm{CH_3CH_2OH \xrightarrow{PCC,\ CH_2Cl_2} CH_3CHO}.
$$

Acidified potassium dichromate or potassium permanganate is stronger. With a primary alcohol and excess oxidant, the product is the carboxylic acid:

$$
\mathrm{CH_3CH_2OH \xrightarrow{K_2Cr_2O_7/H^+} CH_3COOH}.
$$

If the aldehyde is wanted, it can be distilled out as it forms because it boils lower than the alcohol, but PCC is the cleaner laboratory answer.

**Secondary alcohols.** A secondary alcohol has only one hydrogen on the carbinol carbon, so oxidation gives a ketone and stops there under ordinary conditions. Ketones resist further oxidation because the carbonyl carbon has no hydrogen left to remove.

$$
\mathrm{CH_3CH(OH)CH_3 \xrightarrow{[O]} CH_3COCH_3}.
$$

**Tertiary alcohols.** A tertiary alcohol has no hydrogen on the carbinol carbon and is not oxidised by these reagents under mild conditions.

The electron count for dichromate oxidation is worth knowing. Chromium(VI) is reduced to chromium(III), a three-electron change per chromium and therefore six electrons per $\mathrm{Cr_2O_7^{2-}}$ ion. Each alcohol molecule loses two electrons. Hence one dichromate ion oxidises three alcohol molecules:

$$
\mathrm{3\,RCH(OH)R' + Cr_2O_7^{2-} + 8H^+ \rightarrow 3\,RCOR' + 2Cr^{3+} + 7H_2O}.
$$

That $3:1$ ratio is the stoichiometric key to limiting-reagent calculations.

## 2. Dehydrogenation over hot copper

Passing an alcohol vapour over copper at about $573\ \text{K}$ removes hydrogen rather than adding oxygen:

$$
\mathrm{CH_3CH_2OH \xrightarrow{Cu,\ 573\ K} CH_3CHO + H_2},
$$

$$
\mathrm{CH_3CH(OH)CH_3 \xrightarrow{Cu,\ 573\ K} CH_3COCH_3 + H_2}.
$$

This is useful in industry because the only by-product is hydrogen. It is still an oxidation of the organic molecule: the alcohol loses hydrogen, and the carbonyl carbon's oxidation state rises.

## 3. Ozonolysis of alkenes

Ozone cleaves a $\mathrm{C{=}C}$ bond, and the two carbons become carbonyl carbons. Reductive work-up with zinc and water prevents the intermediate from being oxidised further.

$$
\mathrm{CH_3CH{=}C(CH_3)_2 \xrightarrow[Zn/H_2O]{O_3} CH_3CHO + (CH_3)_2C{=}O}.
$$

A terminal double bond gives methanal, because the terminal carbon carries two hydrogens:

$$
\mathrm{RCH{=}CH_2 \xrightarrow[Zn/H_2O]{O_3} RCHO + HCHO}.
$$

Ozonolysis is the method to use when the carbonyl must be placed at a position that already carries the right carbon skeleton. It is also the standard way to locate a double bond from the products.

## 4. Hydration of alkynes

Water adds across a $\mathrm{C{\equiv}C}$ bond in the presence of mercury(II) sulphate and sulphuric acid. The initial product is an enol, which rearranges to the more stable carbonyl compound:

$$
\mathrm{HC{\equiv}CH + H_2O \xrightarrow{HgSO_4/H_2SO_4} [CH_2{=}CHOH] \rightarrow CH_3CHO}.
$$

For an unsymmetrical alkyne, the addition follows Markovnikov's rule, so the –OH ends up on the more substituted carbon and the carbonyl forms there:

$$
\mathrm{CH_3C{\equiv}CH + H_2O \xrightarrow{HgSO_4/H_2SO_4} [CH_3C(OH){=}CH_2] \rightarrow CH_3COCH_3}.
$$

Ethyne therefore gives ethanal, while propyne and higher terminal alkynes give methyl ketones. Internal alkynes give ketones, with the carbonyl at one of the former triple-bond carbons.

## 5. Acyl substitution routes

Acyl chlorides are more reactive than carboxylic acids, so they can be reduced or substituted under mild conditions.

**Rosenmund reduction.** Hydrogen over palladium poisoned with barium sulphate reduces an acyl chloride to an aldehyde. The poison stops the reaction at the aldehyde instead of carrying it on to the alcohol:

$$
\mathrm{CH_3COCl + H_2 \xrightarrow{Pd/BaSO_4} CH_3CHO + HCl}.
$$

**Stephen reduction.** A nitrile treated with tin(II) chloride and hydrochloric acid gives an imine salt, which hydrolyses to an aldehyde:

$$
\mathrm{CH_3CN \xrightarrow{SnCl_2/HCl} [CH_3CH{=}NH_2^+]Cl^- \xrightarrow{H_2O} CH_3CHO}.
$$

**DIBAL-H.** Diisobutylaluminium hydride reduces a nitrile or an ester to an aldehyde at low temperature. At higher temperature or with excess reagent it can go further to the alcohol, so the low-temperature conditions matter.

## 6. Aryl ketones by Friedel–Crafts acylation

Benzene reacts with an acyl chloride in the presence of aluminium chloride to give an aryl ketone:

$$
\mathrm{C_6H_6 + CH_3COCl \xrightarrow{AlCl_3} C_6H_5COCH_3 + HCl}.
$$

The electrophile is the acylium ion, $\mathrm{CH_3CO^+}$, formed when $\mathrm{AlCl_3}$ removes chloride. The product is acetophenone. The reaction fails on rings that are strongly deactivated, and it does not occur on rings bearing an amino group because the Lewis acid binds to the nitrogen.

A related laboratory route is the dry distillation of a calcium carboxylate. Calcium ethanoate gives propanone:

$$
\mathrm{(CH_3COO)_2Ca \xrightarrow{\Delta} CH_3COCH_3 + CaCO_3}.
$$

## 7. Worked example: limiting reagent and yield

Propan-2-ol ($6.0\ \text{g}$, molar mass $60\ \text{g mol}^{-1}$) is oxidised with $0.020\ \text{mol}$ of potassium dichromate in acid. The isolated propanone has mass $2.78\ \text{g}$. Find the limiting reagent, the theoretical yield and the percentage yield.

First find the amount of alcohol:

$$
n(\text{propan-2-ol})=\frac{6.0}{60}=0.100\ \text{mol}.
$$

From the stoichiometry, one mole of $\mathrm{Cr_2O_7^{2-}}$ oxidises three moles of alcohol. The dichromate can therefore oxidise

$$
3(0.020)=0.060\ \text{mol}
$$

of propan-2-ol. Only $0.060\ \text{mol}$ of the $0.100\ \text{mol}$ available can react, so dichromate is the limiting reagent and $0.040\ \text{mol}$ of alcohol remains.

The theoretical amount of propanone is $0.060\ \text{mol}$. With molar mass $58\ \text{g mol}^{-1}$,

$$
m_{\text{theoretical}}=0.060\times58=3.48\ \text{g}.
$$

The percentage yield is

$$
\frac{2.78}{3.48}\times100\%=79.9\%\approx80\%.
$$

**Sanity check.** The yield is below $100\%$ and the unused alcohol is accounted for. A result above $3.48\ \text{g}$ would mean either the stoichiometry or the weighing was wrong.

<learning-block type="mistake" title="Preparation traps">

- **Using acidified dichromate to isolate an aldehyde.** It over-oxidises the aldehyde to the carboxylic acid. Use PCC in dichloromethane, or distil the aldehyde as it forms.
- **Assuming a tertiary alcohol can be oxidised like a secondary one.** There is no hydrogen on the carbinol carbon, so the usual oxidation does not occur.
- **Forgetting the enol step in alkyne hydration.** The enol is an intermediate, not the final product; it tautomerises to the carbonyl.
- **Treating the dichromate ratio as $1:1$.** One dichromate ion accepts six electrons and oxidises three alcohol molecules.

</learning-block>

## Try it yourself

**1.** What product is formed when butan-1-ol is treated with (a) PCC in dichloromethane and (b) excess acidified potassium dichromate?

<details><summary>Show the reasoning</summary>

(a) PCC is a mild oxidant in a dry medium, so oxidation stops at the aldehyde: butanal, $\mathrm{CH_3CH_2CH_2CHO}$. (b) Acidified dichromate is a strong oxidant in water, so the aldehyde is oxidised further to butanoic acid, $\mathrm{CH_3CH_2CH_2COOH}$.

</details>

**2.** How would you prepare propanone from propene using only two steps?

<details><summary>Show the reasoning</summary>

Add water across the double bond under Markovnikov conditions (dilute sulphuric acid, or hydroboration–oxidation is not needed here) to give propan-2-ol. Then oxidise the secondary alcohol with acidified dichromate or PCC to give propanone. Alternatively, ozonolysis of propene is not useful because it would give ethanal and methanal, not propanone.

</details>

**3.** Ethyne is hydrated with $\mathrm{HgSO_4/H_2SO_4}$. Why is the product ethanal rather than ethanol?

<details><summary>Show the reasoning</summary>

Water adds to give the enol $\mathrm{CH_2{=}CHOH}$. An enol is unstable relative to its carbonyl tautomer, so the hydrogen on oxygen moves to the adjacent carbon and the $\mathrm{C{=}C}$ bond becomes a $\mathrm{C{=}O}$ bond. The product is ethanal, $\mathrm{CH_3CHO}$. Ethanol would require addition of water without the tautomerisation step, which does not happen under these conditions.

</details>

## Remember

- PCC in dichloromethane stops primary-alcohol oxidation at the aldehyde; acidified dichromate or permanganate carries it to the acid.
- Secondary alcohols give ketones, and tertiary alcohols are not oxidised at the carbinol carbon.
- Ozonolysis places carbonyl groups exactly where the double bond was.
- Alkyne hydration gives an enol that tautomerises: ethyne gives ethanal, other terminal alkynes give methyl ketones.
- Rosenmund, Stephen and DIBAL-H routes are the way to an aldehyde when oxidation of an alcohol would overshoot.

The next module takes the carbonyl as an electrophile and asks what happens when a nucleophile attacks it.
