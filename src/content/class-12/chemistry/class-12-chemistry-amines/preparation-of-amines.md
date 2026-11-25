## Building the C–N bond

A preparation of an amine must answer one question first: is the nitrogen already attached to the carbon skeleton, or must a new C–N bond be made? The routes divide cleanly along that line.

- **Reduce an existing nitrogen group.** Nitro, nitrile, amide and imine groups already contain nitrogen in the right place. Reduction converts them into an amine without changing the carbon skeleton.
- **Make the C–N bond.** Ammonolysis of an alkyl halide, the Gabriel synthesis and the Hofmann degradation all form the bond in the final or penultimate step.

Each route also has a **carbon count**. A nitrile route adds one carbon; a Hofmann degradation removes one. Getting the count right is the difference between a correct synthesis and a plausible-looking wrong one.

## 1. Reduction of nitro compounds

Aromatic amines are usually made by reducing the corresponding nitroarene. Hydrogen with a nickel catalyst reduces nitrobenzene to aniline:

$$
\mathrm{C_6H_5NO_2+3H_2 \xrightarrow{Ni} C_6H_5NH_2+2H_2O}.
$$

In the laboratory, tin or iron with hydrochloric acid is common; the amine is first obtained as its ammonium salt and then liberated with sodium hydroxide. The overall change is a six-electron reduction of nitrogen from $+3$ in the nitro group to $-3$ in the amine. The aromatic ring survives, which is why this is the standard route to aniline and its ring-substituted relatives.

## 2. Reduction of nitriles and amides

Nitriles are reduced by lithium aluminium hydride, or by hydrogen over a nickel catalyst:

$$
\mathrm{RCN+4[H] \xrightarrow{LiAlH_4} RCH_2NH_2}.
$$

The carbon of the nitrile becomes the carbon bearing the amine, so the carbon skeleton is unchanged. Amides behave similarly:

$$
\mathrm{RCONH_2+4[H] \xrightarrow{LiAlH_4} RCH_2NH_2+H_2O}.
$$

The nitrile route is valuable because nitriles are easily made from alkyl halides:

$$
\mathrm{RX+KCN \rightarrow RCN+KX}.
$$

Combining the two steps converts an alkyl halide with $n$ carbons into a primary amine with $n+1$ carbons. That is the standard way to **ascend** the homologous series by one carbon.

## 3. Reductive amination

An aldehyde or ketone condenses with ammonia to give an imine, which is reduced in situ:

$$
\mathrm{R'CHO+NH_3 \rightarrow R'CH{=}NH \xrightarrow{H_2/Ni} R'CH_2NH_2}.
$$

The product is a primary amine. If a primary amine is used instead of ammonia, the imine is reduced to a **secondary** amine:

$$
\mathrm{R'CHO+R''NH_2 \rightarrow R'CH{=}NR'' \xrightarrow{H_2/Ni} R'CH_2NHR''}.
$$

This is the cleanest general route to secondary amines because the two carbon groups are chosen independently. Sodium cyanoborohydride, $\mathrm{NaBH_3CN}$, is often used because it reduces the imine selectively without reducing the carbonyl compound.

## 4. Ammonolysis of alkyl halides

Ammonia attacks an alkyl halide as a nucleophile:

$$
\mathrm{RX+NH_3 \rightarrow RNH_2+HX}.
$$

The hydrogen halide is neutralised by excess ammonia, giving ammonium halide. The difficulty is that the product amine is itself a nucleophile and competes with ammonia for the remaining alkyl halide:

$$
\mathrm{RNH_2+RX \rightarrow R_2NH+HX},
$$

and further to $\mathrm{R_3N}$ and finally the quaternary salt $\mathrm{R_4N^+X^-}$. The result is a mixture. Using a large excess of ammonia shifts the first step forward and makes the primary amine the major product, but the reaction is never as clean as the Gabriel synthesis.

Aryl halides do not undergo simple ammonolysis under ordinary conditions. The C–X bond on an aromatic ring is strengthened by partial double-bond character, and the ring blocks the back-side attack required by a substitution mechanism. Forcing conditions can give a mixture through a benzyne intermediate, but that is not a preparative route to a single amine.

## 5. The Gabriel synthesis

The Gabriel synthesis avoids over-alkylation by tying up the nitrogen in an imide, where it has only one replaceable hydrogen.

1. Phthalimide is treated with potassium hydroxide to give potassium phthalimide.
2. The imide anion attacks an alkyl halide, forming N-alkylphthalimide.
3. Hydrolysis with aqueous acid or alkali, or cleavage with hydrazine, releases the primary amine and phthalic acid (or its salt).

$$
\mathrm{C_8H_4O_2NH \xrightarrow{KOH} C_8H_4O_2NK \xrightarrow{RX} C_8H_4O_2NR \xrightarrow{H_2O/H^+} RNH_2}.
$$

Because the nitrogen can accept only one alkyl group, the product is a **primary amine only**. The method fails with aryl halides for the same reason as ammonolysis, and it is less useful for highly hindered alkyl halides.

## 6. Hofmann bromamide degradation

A primary amide treated with bromine and concentrated alkali loses the carbonyl carbon as carbonate and gives an amine with one carbon fewer:

$$
\mathrm{RCONH_2+Br_2+4NaOH \rightarrow RNH_2+Na_2CO_3+2NaBr+2H_2O}.
$$

The reaction is a rearrangement: the alkyl group migrates from the carbonyl carbon to nitrogen through an isocyanate intermediate, and bromide ion is lost. The intermediate is then hydrolysed by the alkali to the amine and carbonate. No nitrogen gas is evolved — the gas seen in diazotisation comes from a different reaction. Its bookkeeping is simple and worth memorising:

$$
\mathrm{C_n\ \text{amide} \rightarrow C_{n-1}\ \text{amine}}.
$$

Hofmann degradation is therefore the standard way to **descend** by one carbon. It is especially useful for preparing primary amines that would be hard to obtain cleanly by substitution.

## 7. Worked example: yield of a Hofmann degradation

Propanamide, $\mathrm{CH_3CH_2CONH_2}$, has molar mass $73.1\ \text{g mol}^{-1}$. A $2.00\ \text{g}$ sample is treated with excess bromine and sodium hydroxide, and $1.10\ \text{g}$ of ethanamine is isolated. Find the percentage yield.

**Moles of amide:**

$$
n=\frac{2.00}{73.1}=2.74\times10^{-2}\ \text{mol}.
$$

**Theoretical moles of amine.** One mole of amide gives one mole of amine, and the amine has one carbon fewer. Ethanamine, $\mathrm{CH_3CH_2NH_2}$, has molar mass $45.1\ \text{g mol}^{-1}$:

$$
m_{\text{theoretical}}=(2.74\times10^{-2})(45.1)=1.23\ \text{g}.
$$

**Percentage yield:**

$$
\text{yield}=\frac{1.10}{1.23}\times100\%=89.2\%.
$$

**Sanity check.** The product has lost $\mathrm{CO}$: $73.1-45.1=28.0\ \text{g mol}^{-1}$, exactly the molar mass of carbon monoxide. A yield below $100\%$ is physically sensible, and the carbon count has fallen by one as Hofmann degradation requires.

## 8. Choosing a route

| Target | Best starting point | Why |
| --- | --- | --- |
| Aniline from a benzene derivative | Reduce the nitroarene | The nitro group is easy to place and cleanly reduced |
| A primary amine with one carbon more | Alkyl halide → nitrile → reduction | Two reliable steps, no over-alkylation |
| A primary amine with one carbon fewer | Amide → Hofmann degradation | The rearrangement removes exactly one carbon |
| A primary amine with no over-alkylation | Gabriel synthesis | The imide nitrogen accepts only one group |
| A secondary amine | Reductive amination | The two carbon groups are chosen separately |
| A simple primary amine from a halide | Ammonolysis with excess ammonia | Cheap, but only if the mixture is acceptable |

<learning-block type="mistake" title="Preparation errors that cost marks">

- **Using Hofmann degradation when the carbon count must stay the same.** It always removes the carbonyl carbon.
- **Expecting Gabriel synthesis to give a secondary amine.** The imide nitrogen has only one replaceable hydrogen, so the product is primary.
- **Forgetting over-alkylation in ammonolysis.** A 1:1 mixture of ammonia and halide gives a mixture of primary, secondary, tertiary and quaternary products.
- **Trying direct ammonolysis on chlorobenzene.** The aryl C–Cl bond is not reactive enough under ordinary conditions.

</learning-block>

## Try it yourself

**A.** Starting from 1-bromopropane, how would you prepare butan-1-amine? State the carbon count at each stage.

<details><summary>Show the reasoning</summary>

Treat 1-bromopropane (3 C) with potassium cyanide to obtain butanenitrile (4 C), then reduce the nitrile with lithium aluminium hydride to butan-1-amine (4 C). The nitrile step adds one carbon; the reduction keeps the skeleton unchanged.

</details>

**B.** How would you prepare ethanamine from propanamide?

<details><summary>Show the reasoning</summary>

Use Hofmann bromamide degradation: treat propanamide (3 C) with bromine and concentrated sodium hydroxide. The product is ethanamine (2 C), with loss of the carbonyl carbon as carbonate.

</details>

**C.** Why is the Gabriel synthesis preferred over ammonolysis for making a primary amine from a primary alkyl halide?

<details><summary>Show the reasoning</summary>

In ammonolysis the primary amine product can attack more alkyl halide, giving secondary and tertiary amines and quaternary salts. In the Gabriel synthesis the nitrogen is part of an imide and carries only one replaceable hydrogen, so only one alkyl group can be introduced and the product is cleanly primary.

</details>

## Remember

- Reduction routes keep the carbon skeleton; substitution routes build the C–N bond.
- Nitrile formation followed by reduction adds one carbon; Hofmann degradation removes one.
- Reductive amination is the general route to secondary amines.
- Gabriel synthesis gives primary amines only, and fails with aryl halides.
- Ammonolysis needs a large excess of ammonia to favour the primary product.

With reliable routes to amines in hand, the next question is why some amines are much stronger bases than others — and why aniline behaves so differently from ethylamine.
