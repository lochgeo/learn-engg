## The carbonyl as an electrophile

The previous module made carbonyl compounds. This one uses the polarisation that module 1 described. Because the carbonyl carbon carries a partial positive charge, the characteristic reaction of aldehydes and ketones is **nucleophilic addition**: a nucleophile attacks the carbon, the π bond opens, and the oxygen takes the negative charge. The result is a tetrahedral carbon and, after protonation, an alcohol or a related derivative.

Almost every reaction in this module follows the same three-step shape. Learn the shape once, and the individual reagents become variations on a theme rather than separate facts.

## 1. The addition mechanism

For a nucleophile $\mathrm{Nu^-}$:

1. The nucleophile attacks the carbonyl carbon. The π electrons move onto oxygen.
2. A tetrahedral alkoxide intermediate forms, with the carbon now carrying four groups.
3. Protonation of the alkoxide gives the neutral addition product.

$$
\mathrm{R_2C{=}O + Nu^- \rightarrow R_2C(O^-)Nu \xrightarrow{H^+} R_2C(OH)Nu}.
$$

When the nucleophile is neutral, such as water, an alcohol or an amine, the first step is attack by a lone pair, followed by deprotonation of the oxygen. Acid catalysis helps by protonating the carbonyl oxygen first, which makes the carbon more electrophilic. Base catalysis helps when the nucleophile is weak by converting it into its more reactive anion.

The important structural change is $sp^2 \rightarrow sp^3$ at the carbonyl carbon. The trigonal planar centre becomes tetrahedral, so a chiral product is possible if the two sides of the carbonyl are different.

## 2. Why aldehydes react faster than ketones

Two effects point the same way.

- **Electronic.** Alkyl groups release electron density by the inductive effect. In a ketone, two alkyl groups reduce the partial positive charge on the carbonyl carbon. An aldehyde has at most one, so its carbon is more electrophilic.
- **Steric.** A ketone has two carbon groups around the carbonyl, and they obstruct the approach of a nucleophile. An aldehyde has a small hydrogen on one side.

Methanal, with two hydrogens, is the most reactive carbonyl compound. Aryl ketones such as acetophenone are less reactive than alkyl ketones because the ring can donate electron density into the carbonyl by resonance, and because the carbonyl is part of a conjugated system that is disrupted on attack.

This ordering is a prediction tool, not a universal law. Strongly electron-withdrawing substituents can raise the reactivity of a ketone above that of a poor aldehyde, and steric effects can dominate in crowded molecules.

## 3. Cyanohydrins

Hydrogen cyanide adds to aldehydes and ketones in the presence of a trace of base. The product is a **cyanohydrin**, which contains both a hydroxyl group and a nitrile on the same carbon:

$$
\mathrm{CH_3CHO + HCN \rightleftharpoons CH_3CH(OH)CN}.
$$

For propanone:

$$
\mathrm{(CH_3)_2CO + HCN \rightleftharpoons (CH_3)_2C(OH)CN}.
$$

The reaction is reversible, and the equilibrium is more favourable for aldehydes than for ketones. Cyanohydrins are useful because hydrolysis of the nitrile gives an α-hydroxy acid, and reduction gives an amino alcohol. The addition also creates a new stereocentre when the carbonyl is unsymmetrical.

## 4. Bisulphite adducts

Sodium hydrogen sulphite adds to aldehydes and to methyl ketones, giving a crystalline bisulphite adduct:

$$
\mathrm{RCHO + NaHSO_3 \rightarrow RCH(OH)SO_3Na}.
$$

The adduct is often insoluble and can be filtered off, which makes this reaction useful for purifying an aldehyde from a mixture. Ketones other than methyl ketones are usually too hindered to form the adduct readily. Treatment of the solid with dilute acid or base regenerates the carbonyl compound.

## 5. Grignard additions

A Grignard reagent, $\mathrm{RMgX}$, delivers a carbanion-like $\mathrm{R^-}$ to the carbonyl carbon. The initial product is a magnesium alkoxide, and dilute acid work-up gives the alcohol:

$$
\mathrm{RCHO + R'MgX \rightarrow RCH(OMgX)R' \xrightarrow{H_3O^+} RCH(OH)R'}.
$$

The class of alcohol depends on the carbonyl:

| Carbonyl | Product after Grignard addition |
| --- | --- |
| Methanal, $\mathrm{HCHO}$ | primary alcohol |
| Other aldehyde, $\mathrm{RCHO}$ | secondary alcohol |
| Ketone, $\mathrm{R_2CO}$ | tertiary alcohol |

For example, ethanal with methylmagnesium bromide gives propan-2-ol:

$$
\mathrm{CH_3CHO + CH_3MgBr \xrightarrow{H_3O^+} CH_3CH(OH)CH_3}.
$$

The acid work-up is not optional. Without it you have a magnesium alkoxide, not the alcohol, and the product will not isolate cleanly.

## 6. Reduction

Hydride reagents reduce aldehydes to primary alcohols and ketones to secondary alcohols:

$$
\mathrm{CH_3CHO \xrightarrow{NaBH_4} CH_3CH_2OH},
$$

$$
\mathrm{CH_3COCH_3 \xrightarrow{NaBH_4} CH_3CH(OH)CH_3}.
$$

Sodium borohydride is selective: it reduces aldehydes and ketones but normally leaves esters, carboxylic acids and amides alone. Lithium aluminium hydride is more powerful and will reduce esters and acids as well. That selectivity is the practical reason to choose one reagent over the other.

## 7. Ammonia derivatives

Ammonia and its derivatives condense with carbonyl compounds to give imines or related compounds. The general pattern is

$$
\mathrm{R_2C{=}O + H_2N{-}G \rightarrow R_2C{=}N{-}G + H_2O}.
$$

| Reagent $\mathrm{H_2N{-}G}$ | Product | Use |
| --- | --- | --- |
| hydroxylamine, $\mathrm{NH_2OH}$ | oxime | identification, purification |
| hydrazine, $\mathrm{NH_2NH_2}$ | hydrazone | intermediate in Wolff–Kishner reduction |
| 2,4-dinitrophenylhydrazine | 2,4-dinitrophenylhydrazone | yellow-orange precipitate; test for carbonyls |
| semicarbazide, $\mathrm{NH_2NHCONH_2}$ | semicarbazone | crystalline derivative for identification |

These condensations are acid-catalysed but need only mild acidity. Strong acid protonates the amine and removes the nucleophile.

## 8. Acetals as protecting groups

An aldehyde reacts with two molecules of an alcohol in dry acid to give an **acetal**:

$$
\mathrm{CH_3CHO + 2CH_3OH \xrightarrow{dry\ HCl} CH_3CH(OCH_3)_2 + H_2O}.
$$

The acetal is stable to base and to nucleophiles, so it protects the carbonyl while another part of the molecule is modified. Aqueous acid removes the protection and restores the aldehyde. This is a common strategy in multi-step synthesis.

## 9. Worked example: Grignard yield

Ethanal ($4.4\ \text{g}$, molar mass $44\ \text{g mol}^{-1}$) is treated with excess methylmagnesium bromide, followed by acidic work-up. The isolated propan-2-ol has mass $4.5\ \text{g}$. Find the theoretical and percentage yields.

$$
n(\mathrm{CH_3CHO})=\frac{4.4}{44}=0.100\ \text{mol}.
$$

One mole of ethanal gives one mole of propan-2-ol, so the theoretical amount is $0.100\ \text{mol}$. With molar mass $60\ \text{g mol}^{-1}$,

$$
m_{\text{theoretical}}=0.100\times60=6.0\ \text{g}.
$$

The percentage yield is

$$
\frac{4.5}{6.0}\times100\%=75\%.
$$

**Sanity check.** The product is a secondary alcohol, as expected from an aldehyde plus one Grignard methyl group. A tertiary alcohol would signal that the starting material was a ketone, and a primary alcohol would signal methanal.

<learning-block type="mistake" title="Addition traps">

- **Letting the nucleophile attack the oxygen.** The carbonyl carbon is the electrophilic centre. Oxygen receives the π electrons; it does not start the attack.
- **Skipping the acid work-up after a Grignard reaction.** The alkoxide must be protonated before the alcohol can be isolated.
- **Expecting NaBH₄ to reduce an ester or a carboxylic acid.** Under ordinary conditions it does not; use LiAlH₄ for those groups.
- **Assuming every ketone forms a bisulphite adduct.** The reaction is reliable for aldehydes and methyl ketones, but larger ketones are too hindered.

</learning-block>

## Try it yourself

**1.** Explain why propanone is less reactive than ethanal towards nucleophilic addition.

<details><summary>Show the reasoning</summary>

Propanone has two methyl groups attached to the carbonyl carbon; ethanal has one methyl and one hydrogen. The two methyl groups donate electron density inductively, reducing the partial positive charge on the carbonyl carbon, and they also crowd the carbon sterically. Both effects make attack by a nucleophile slower for propanone.

</details>

**2.** Benzaldehyde is treated with HCN, and the product is then hydrolysed with aqueous acid. What are the two products of the sequence?

<details><summary>Show the reasoning</summary>

HCN adds to give the cyanohydrin, 2-hydroxy-2-phenylethanenitrile, $\mathrm{C_6H_5CH(OH)CN}$. Hydrolysis of the nitrile gives the α-hydroxy acid, 2-hydroxy-2-phenylethanoic acid (mandelic acid), $\mathrm{C_6H_5CH(OH)COOH}$.

</details>

**3.** How would you convert ethanal into propan-2-ol, and how would you convert it into ethanol?

<details><summary>Show the reasoning</summary>

Propan-2-ol: treat ethanal with methylmagnesium bromide, then aqueous acid. One methyl group is added, giving a secondary alcohol. Ethanol: reduce ethanal with sodium borohydride in ethanol or water, then protonate; the aldehyde becomes a primary alcohol with the same carbon skeleton.

</details>

## Remember

- Nucleophilic addition proceeds by attack at the carbonyl carbon, formation of a tetrahedral alkoxide, then protonation.
- Aldehydes are more reactive than ketones because alkyl groups both donate electron density and obstruct attack.
- HCN gives cyanohydrins, NaHSO₃ gives bisulphite adducts, and Grignard reagents give primary, secondary or tertiary alcohols depending on the carbonyl.
- NaBH₄ reduces aldehydes and ketones selectively; LiAlH₄ is stronger and also reduces esters and acids.
- Ammonia derivatives and alcohols convert the carbonyl into imines, hydrazones, oximes or acetals, which is useful for identification and protection.

The next module collects the named reactions that use the α-hydrogens next to a carbonyl, together with the laboratory tests that distinguish aldehydes from ketones.
