## The reaction that turns a halogen into almost anything

The carbon of a C–X bond is electron-poor, so a nucleophile attacks it and displaces the halide. This is nucleophilic substitution, and it is the reaction that converts a haloalkane into an alcohol, ether, nitrile, amine, iodide or ester. The same overall change can occur by two different routes, SN1 and SN2, and the route decides the rate law, the stereochemistry and sometimes the product itself.

## 1. The general substitution

A nucleophile $\mathrm{Nu^-}$ (or a neutral nucleophile such as $\mathrm{NH_3}$) attacks the carbon and the halide leaves:

$$
\mathrm{Nu^- + R-X \rightarrow R-Nu + X^-}.
$$

The curly-arrow description is short: a lone pair on the nucleophile forms a bond to carbon, and the C–X bond breaks with both electrons going to X. The carbon must have room for the incoming group, and the halide must be able to leave. Those two requirements produce the SN2 and SN1 mechanisms.

Common nucleophiles and the products they give:

| Nucleophile | Product | Comment |
| --- | --- | --- |
| $\mathrm{OH^-}$ (aqueous) | alcohol | hydrolysis |
| $\mathrm{RO^-}$ | ether | Williamson synthesis; best with a primary halide |
| $\mathrm{CN^-}$ | nitrile | adds one carbon to the chain |
| $\mathrm{NH_3}$ (excess) | amine | over-alkylation is a competing problem |
| $\mathrm{I^-}$ | iodide | Finkelstein exchange |
| $\mathrm{RS^-}$ | thioether | sulfur is a strong nucleophile |
| $\mathrm{RCOO^-}$ | ester | carboxylate attack |

## 2. SN2: one step and backside attack

In an SN2 reaction the nucleophile attacks from the side opposite the leaving group, while the C–X bond breaks. Bond making and bond breaking happen together, through a single transition state:

$$
\mathrm{Nu^- + R-X \rightarrow [Nu\cdots C\cdots X]^{\ddagger} \rightarrow R-Nu + X^-}.
$$

The rate law reflects that single step:

$$
\text{rate} = k[\mathrm{RX}][\mathrm{Nu^-}].
$$

The reaction is **second order**: doubling either concentration doubles the rate, and doubling both quadruples it. The nucleophile must approach the carbon from the back, so the three other groups attached to carbon appear to turn inside out. This is **inversion of configuration**, or Walden inversion.

For an optically active halide, inversion can be observed directly. If $(R)$-2-bromobutane reacts with hydroxide by SN2, the product is $(S)$-butan-2-ol:

$$
(R)\text{-}\mathrm{CH_3CHBrCH_2CH_3} + \mathrm{OH^-} \rightarrow (S)\text{-}\mathrm{CH_3CH(OH)CH_2CH_3} + \mathrm{Br^-}.
$$

SN2 is favoured by:

- a methyl or primary carbon, because the backside is open;
- a strong nucleophile, such as $\mathrm{OH^-}$, $\mathrm{RO^-}$, $\mathrm{CN^-}$ or $\mathrm{I^-}$;
- a polar aprotic solvent, such as acetone, DMF or DMSO;
- a good leaving group, $\mathrm{I^- > Br^- > Cl^- > F^-}$.

Steric hindrance is decisive. The rate order is

$$
\mathrm{CH_3X > 1^\circ > 2^\circ > 3^\circ},
$$

and a tertiary halide is effectively unreactive by SN2. Neopentyl chloride is primary but so crowded that SN2 is very slow. Solvent reverses the nucleophilicity order. In polar aprotic solvents, $\mathrm{F^- > Cl^- > Br^- > I^-}$ because the small fluoride ion is not tightly solvated and is free to attack. In polar protic solvents the small fluoride ion is strongly solvated, so the order becomes $\mathrm{I^- > Br^- > Cl^- > F^-}$.

## 3. SN1: a carbocation in two steps

In an SN1 reaction the C–X bond breaks first, leaving a carbocation, which the nucleophile captures in a fast second step:

$$
\mathrm{R-X} \xrightarrow{\text{slow}} \mathrm{R^+ + X^-}, \qquad \mathrm{R^+ + Nu^-} \xrightarrow{\text{fast}} \mathrm{R-Nu}.
$$

The slow step contains only the halide, so the rate law is

$$
\text{rate} = k[\mathrm{RX}].
$$

The reaction is **first order**, and the concentration of the nucleophile does not appear. That is the clearest experimental distinction between SN1 and SN2.

Carbocation stability follows

$$
3^\circ > 2^\circ > 1^\circ > \mathrm{CH_3^+},
$$

with allylic and benzylic carbocations unusually stable because resonance spreads the positive charge. Vinylic and aryl carbocations are too unstable to form under ordinary conditions, which is one reason vinylic and aryl halides do not react by SN1.

A carbocation is planar at the carbon carrying the positive charge. A nucleophile can attack either face, so an optically active halide gives a mixture of enantiomers. The reaction is said to proceed with **racemisation**, although a slight excess of the inverted product is often observed because the departing halide can shield one face as it leaves.

SN1 is favoured by:

- a tertiary or secondary carbon, or an allylic/benzylic carbon;
- a weak nucleophile, such as water or an alcohol;
- a polar protic solvent, such as water or ethanol, which solvates the carbocation and the halide;
- a good leaving group.

Because a carbocation is a high-energy intermediate, a rearrangement can occur. A hydride or methyl shift may convert a secondary carbocation into a more stable tertiary one, so the product can have a different carbon skeleton from the starting halide.

## 4. Choosing the mechanism

| Factor | SN2 | SN1 |
| --- | --- | --- |
| Substrate | methyl, primary | tertiary, secondary, allylic/benzylic |
| Nucleophile | strong | weak is sufficient |
| Solvent | polar aprotic | polar protic |
| Rate law | $k[\mathrm{RX}][\mathrm{Nu^-}]$ | $k[\mathrm{RX}]$ |
| Stereochemistry | inversion | racemisation |
| Intermediate | none; one transition state | carbocation |
| Rearrangement | no | possible |

A practical decision path:

1. Count the carbons attached to the C–X carbon. Methyl or primary points to SN2; tertiary points to SN1 (or elimination with a strong base).
2. Look at the nucleophile. A strong nucleophile such as $\mathrm{CN^-}$ or $\mathrm{OH^-}$ supports SN2 on an accessible carbon.
3. Look at the solvent. Polar aprotic favours SN2; polar protic favours SN1.
4. If the substrate is secondary, expect a mixture and use the other conditions to decide which pathway dominates.

This is a guide, not a law. A strong nucleophile can also act as a base and promote elimination, a competition developed in the next module.

## 5. The reaction toolbox

The same substitution can install many functional groups:

$$
\mathrm{R-X + OH^- \rightarrow R-OH + X^-}
$$

$$
\mathrm{R-X + R'ONa \rightarrow R-O-R' + NaX}
$$

$$
\mathrm{R-X + KCN \rightarrow R-CN + KX}
$$

$$
\mathrm{R-X + excess\ NH_3 \rightarrow R-NH_2 + NH_4X}
$$

$$
\mathrm{R-X + NaI \xrightarrow{acetone} R-I + NaX}
$$

The cyanide reaction is worth counting carefully: the nitrile product has one more carbon than the starting halide, because the cyanide carbon becomes part of the chain. The ammonia reaction is harder to stop at the primary amine, since the amine product can attack another molecule of halide.

## 6. Worked example: rate and stereochemistry

Consider 2-bromobutane at $0.10\ \text{mol L}^{-1}$ with hydroxide at $0.20\ \text{mol L}^{-1}$. If the reaction is SN2 with $k = 2.0\times10^{-3}\ \text{L mol}^{-1}\ \text{s}^{-1}$,

$$
\text{rate} = (2.0\times10^{-3})(0.10)(0.20) = 4.0\times10^{-5}\ \text{mol L}^{-1}\ \text{s}^{-1}.
$$

Doubling the halide concentration doubles the rate to $8.0\times10^{-5}\ \text{mol L}^{-1}\ \text{s}^{-1}$. Doubling the hydroxide concentration does the same.

Now change the substrate to 2-bromo-2-methylpropane, a tertiary halide, and keep the same hydroxide concentration. SN2 is sterically blocked, so the reaction proceeds by SN1 with $k = 1.5\times10^{-4}\ \text{s}^{-1}$:

$$
\text{rate} = (1.5\times10^{-4})(0.10) = 1.5\times10^{-5}\ \text{mol L}^{-1}\ \text{s}^{-1}.
$$

The rate is independent of hydroxide concentration. The product, 2-methylpropan-2-ol, is not optically active because the starting halide is not chiral. If a chiral tertiary halide were used, the product would be racemic or nearly so. The two experiments differ in rate law and stereochemistry, which is exactly how the mechanisms are distinguished.

<learning-block type="mistake" title="Substitution-mechanism traps">

- **"SN1 gives complete inversion."** It gives racemisation, often with a small excess of inversion; complete inversion is the SN2 signature.
- **"A tertiary halide is fastest in SN2 because it is most reactive."** Tertiary halides are essentially unreactive by SN2; the backside is blocked.
- **"SN1 rate rises when more nucleophile is added."** The rate law contains only the halide; the nucleophile enters after the slow step.
- **"A weak nucleophile cannot react."** Water is a weak nucleophile but reacts readily by SN1 with a stable carbocation.
- **"Polar protic solvents speed up SN2."** They solvate the nucleophile and the leaving group, favouring SN1 instead.
- **"Allylic and benzylic halides are always SN1."** They are fast in both mechanisms, for different reasons: resonance stabilises the SN1 intermediate, and the adjacent π system stabilises the SN2 transition state.

</learning-block>

## Try it yourself

**A.** Predict the mechanism and product for 1-bromopropane with KCN in DMSO.

<details><summary>Show the reasoning</summary>

The substrate is primary, cyanide is a strong nucleophile, and DMSO is polar aprotic, so SN2 dominates. Cyanide attacks the carbon and bromide leaves, giving **butanenitrile**, $\mathrm{CH_3CH_2CH_2CN}$. The product has four carbons, one more than the starting halide.

</details>

**B.** Predict the mechanism and product for 2-bromo-2-methylpropane with water.

<details><summary>Show the reasoning</summary>

The substrate is tertiary, water is a weak nucleophile and a polar protic solvent, so SN1 dominates. The C–Br bond ionises to a tertiary carbocation, water attacks, and loss of a proton gives **2-methylpropan-2-ol**. The rate law is first order in the halide and independent of water concentration.

</details>

**C.** $(R)$-2-bromobutane reacts with NaI in acetone. Predict the stereochemistry of the product.

<details><summary>Show the reasoning</summary>

Iodide is a strong nucleophile, acetone is polar aprotic, and the substrate is secondary, so SN2 is favoured. The iodide attacks from the backside and the bromide leaves with inversion. The product is **$(S)$-2-iodobutane**. The CIP priority of iodine and bromine is the same relative to the other groups, so the configurational descriptor flips.

</details>

## Remember

- SN2 is concerted, second order, backside and inverting; it prefers methyl/primary carbons, strong nucleophiles and polar aprotic solvents.
- SN1 proceeds through a carbocation, is first order, racemises and prefers tertiary/allylic/benzylic carbons, weak nucleophiles and polar protic solvents.
- Leaving-group ability is $\mathrm{I^- > Br^- > Cl^- > F^-}$; the weaker base is the better leaving group.
- The cyanide reaction adds one carbon; the ammonia reaction can over-alkylate.
- If a question gives a rate law or a stereochemical result, use it to identify the mechanism before predicting products.
