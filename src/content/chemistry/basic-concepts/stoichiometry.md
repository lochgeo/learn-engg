## The balanced equation is the reaction's recipe

Weigh-laws and moles meet here. A balanced chemical equation is the recipe for a reaction, written in **particles**: it says that so many units of this species react with so many units of that species. Because particles convert to moles and moles convert to grams, the recipe scales a laboratory quantity — how much product to expect, how much reactant to feed, what runs out first.

## 1. Balancing: atom bookkeeping on both sides

To balance an equation, adjust the **coefficients** (numbers before the formulae) until each element shows the same tally on both sides. Never touch subscripts; changing subscripts changes the substances.

Take the combustion of propane. Start with the carbon and hydrogen, save oxygen for last:

$$
\mathrm{C_3H_8 + 5\,O_2 \rightarrow 3\,CO_2 + 4\,H_2O}.
$$

Tally check: C — 3 left, 3 right; H — 8 left, 8 right; O — 10 left, $3(2)+4(1)=10$ right. Quotes of "which coefficient to adjust first" vary; the save-oxygen-last habit only exists because oxygen usually appears in several places.

The coefficients are a **mole recipe**, not a mass recipe: $1$ mol C3H8 reacts with $5$ mol O2 to give $3$ mol CO2 and $4$ mol H2O. The masses do *not* read off as $1:5:3:4$ — that is exactly why the next section exists.

<learning-block type="check" title="Mass still balances">

Using molar masses $44$, $32$, $44$ and $18$: one mole worth of reactants is $44+5(32)=204\ \text{g}$; one mole worth of products is $3(44)+4(18)=204\ \text{g}$. Conservation of mass was never abandoned; it is simply enforced particle by particle.

</learning-block>

## 2. The mole ratio as a conversion bridge

The coefficients form a conversion factor between species. Working mass-to-mass takes three mini-steps:

**Mass of A → moles of A → moles of B (via the ratio) → mass of B.**

<learning-block type="example" title="Burning $11\ \text{g}$ of propane">

Propane's molar mass is $44\ \text{g/mol}$, so $11\ \text{g}$ is $\dfrac{11}{44}=0.25\ \text{mol}$.

By the recipe, $1$ mol propane yields $4$ mol water, so water formed is $0.25\times4=1\ \text{mol}$, i.e. $1\times18=18\ \text{g}$. Carbon dioxide is $0.25\times3=0.75\ \text{mol}=33\ \text{g}$.

And the oxygen? $0.25\times5=1.25\ \text{mol}=40\ \text{g}$. Check the ledger: $11+40=51\ \text{g}$ in; $18+33=51\ \text{g}$ out. The law of conservation of mass passes an audit on a full-scale calculation.

</learning-block>

## 3. The limiting reagent: what runs out first

Real feeds are rarely in exact recipe proportion, and one reactant always runs out first — that species sets a ceiling on the product. The limiting reagent is found **not by comparing masses** but by dividing each species' moles by its recipe coefficient:

$$
\frac{n_i}{\text{coefficient}_i}\ \text{smallest}\ \Rightarrow\ \text{that reactant limits}.
$$

<learning-block type="example" title="$10\ \text{g}$ of hydrogen meets $64\ \text{g}$ of oxygen">

Recipe: $\mathrm{2\,H_2 + O_2 \rightarrow 2\,H_2O}$ (coefficients 2 and 1).

Moles available: H2 $=10/2=5\ \text{mol}$; O2 $=64/32=2\ \text{mol}$.

Compare $n$ per coefficient: H2: $5/2=2.5$; O2: $2/1=2$. The oxygen value is smaller, so **oxygen limits** — despite being the heavier pile in grams.

The oxygen prescribes $2\times2=4\ \text{mol}$ of water $=72\ \text{g}$. Hydrogen consumed is $4$ mol $(8\ \text{g})$, leaving $5-4=1$ mol $=2\ \text{g}$ of H2 unused. Ledger: $72+2=74$, matching the feed $10+64=74$.

</learning-block>

Why the division by coefficients? Because reacting "piles" are consumed in recipe-sized chunks. Two moles of H2 leave per chunk; one mole of O2 leaves per chunk. The species with the fewest complete chunks available runs out while others still have material in hand. A useful visual is a two-slot table: write $n$ and $n/\text{coeff}$ for each reactant, then read the winner straight off.

## 4. Theoretical and percentage yield

The **theoretical yield** is the product mass computed as above, assuming the recipe runs perfectly on the limiting reagent. Real reactions overshoot in messy ways — side reactions, incomplete mixing, losses on transfer — so the **percentage yield** measures honesty:

$$
\%\ \text{yield}=\frac{\text{actual yield}}{\text{theoretical yield}}\times100.
$$

<learning-block type="example" title="Limestone to quicklime">

For the decomposition $\mathrm{CaCO_3 \rightarrow CaO + CO_2}$, heating $20\ \text{g}$ of pure calcium carbonate gives $n=20/100=0.2\ \text{mol}$. Theoretical yield: $0.2\times56=11.2\ \text{g}$ of CaO. A furnace actually delivers $9.8\ \text{g}$:

$$
\%\ \text{yield}=\frac{9.8}{11.2}\times100=87.5\%.
$$

Note that a yield below $100\%$ does not break conservation of mass; the missing $1.4\ \text{g}$ stays in the plant as unreacted feed, filter residue or spillage.

</learning-block>

## 5. Choosing the lens for a question

| The question says | The tool |
| --- | --- |
| Mass of product from mass of reactant | mole-ratio bridge, three mini-steps |
| Two or more reactant masses given | limit first: $n/\text{coefficient}$ smallest |
| "How much product at most", "runs out", "in excess" | limiting reagent reasoning |
| Actual versus expected amount | percentage yield relation |
| A gas volume is asked | moles then $V=22.4\,n$ at STP |

<learning-block type="mistake" title="Feeding masses into the recipe">

The recipe's coefficients describe particles. Writing "2 g of H2 reacts with 1 g of O2" because the coefficients read $2:1$ is a framework error — the feed above looks far from $2:1$ by mass, yet the masses never enter the limiting test at all. Always convert to moles before asking who limits. And when the asker merely wants a mass of product, remember the route still runs *through* moles even though the given and the ask are both grams.

</learning-block>

## Try it yourself

**A.** $4.0\ \text{g}$ of hydrogen is mixed with exactly $32.0\ \text{g}$ of oxygen and sparked. What mass of water forms, and what is left over?

<details><summary>Show the reasoning</summary>

Moles: H2 $=4/2=2$ mol; O2 $=32/32=1$ mol. Ratio check: $2/2=1.0$ for H2 and $1/1=1.0$ for O2 — a perfectly matched feed, no one limits. Water: $2$ mol $=36\ \text{g}$; nothing is left over, and $4+32=36$ audits clean.
</details>

**B.** How much calcium carbonate is needed to produce $28\ \text{g}$ of calcium oxide?

<details><summary>Show the reasoning</summary>

Work backwards: $28\ \text{g}$ CaO $=28/56=0.5$ mol. The recipe gives one CaO per CaCO3, so feed $0.5$ mol of CaCO3 $=0.5\times100=50\ \text{g}$.
</details>

**C.** $6.5\ \text{g}$ of zinc (Zn $=65$) dissolves completely in excess dilute hydrochloric acid: $\mathrm{Zn + 2\,HCl \rightarrow ZnCl_2 + H_2}$. Find the volume of hydrogen at STP.

<details><summary>Show the reasoning</summary>

Moles of Zn $=6.5/65=0.1$ mol; acid is in excess, so zinc limits and $0.1$ mol H2 forms. At STP, $V=0.1\times22.4=2.24\ \text{L}$.
</details>

## Remember

- Balance equations by adjusting coefficients; the tally of each element must match on both sides.
- Coefficients are mole ratios; masses only ever enter through $n=m/M$.
- WHO limits? Divide each reactant's moles by its coefficient — the smallest value wins the limiting crown.
- Theoretical yield comes from the limiting reagent alone; percentage yield compares reality to it.
- Reaction recipes fix *amounts*; the next module fixes *strength* — how concentrated mixtures are described and converted.
