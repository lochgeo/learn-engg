## From percentages to a formula

A synthesis laboratory reports what an unknown compound is made of as **percentages by mass**. That is not a formula yet — but a formula and a percentage table are the same information at two resolutions. Convert the percentages into moles, and the recipe of atoms falls out: first into the simplest integer recipe (the *empirical formula*), then, once a molar mass is known, into the true molecular formula.

## 1. Percentage composition: reading a formula as percentages

For any element in a compound,

$$
\%\text{ by mass of element}=\frac{(\text{number of atoms of it})\times(\text{its atomic mass})}{\text{molar mass of the compound}}\times100.
$$

<learning-block type="example" title="Breaking down urea">

Urea is CO(NH2)2, molar mass $=12+16+2(14+2)=60\ \text{g/mol}$.

| Element | Atoms | Mass contributed | Percentage |
| --- | --- | --- | --- |
| C | 1 | $12$ | $\frac{12}{60}\times100=20.0\%$ |
| H | 4 | $4$ | $\frac{4}{60}\times100=6.7\%$ |
| N | 2 | $28$ | $\frac{28}{60}\times100=46.7\%$ |
| O | 1 | $16$ | $\frac{16}{60}\times100=26.7\%$ |

The four percentages sum to $100.1\%$ — rounding, not chemistry, explains the extra $0.1$. Every pure batch of urea on Earth shares this table; that is definite proportions, dressed as percentages.

</learning-block>

## 2. Reverse gear: percentages to an empirical formula

The empirical formula is the **simplest whole-number ratio** of atoms in the compound. Reversing the table above takes three moves:

1. **Assume $100\ \text{g}$ of compound.** Each percentage becomes a mass in grams.
2. **Divide each mass by that element's atomic mass** to get moles of atoms.
3. **Divide every mole value by the smallest one** and tidy into whole numbers.

<learning-block type="example" title="A compound of carbon, hydrogen and oxygen">

Analysis gives $40.0\%$ C, $6.67\%$ H and $53.3\%$ O. Assuming $100\ \text{g}$:

| Element | Mass (g) | Divide by atomic mass | Moles |
| --- | --- | --- | --- |
| C | $40.0$ | $40.0/12$ | $3.33$ |
| H | $6.67$ | $6.67/1$ | $6.67$ |
| O | $53.3$ | $53.3/16$ | $3.33$ |

Smallest is $3.33$; dividing through gives $1 : 2 : 1$, so the empirical formula is **CH2O**. A ratio like this one is a *recipe*, not a molecule: the compound might be formaldehyde (CH2O, $M=30$) or something with six times that recipe.

</learning-block>

## 3. The molar mass chooses the multiplier

The molecular formula is the empirical formula repeated some whole number of times:

$$
\text{molecular formula}=(\text{empirical formula})\times\frac{\text{molar mass}}{\text{empirical formula mass}}.
$$

For the compound above, suppose the molar mass is determined (from a gas-density or colligative measurement) to be $180\ \text{g/mol}$. The empirical mass of CH2O is $12+2+16=30$, so

$$
\text{multiplier}=\frac{180}{30}=6,\qquad \text{molecular formula}=\mathrm{C_6H_{12}O_6}.
$$

When the only measurement is the **vapour density** (VD, relative to hydrogen) of a volatile substance, the shortcut is $M=2\times\text{VD}$, justified because hydrogen molecules have mass $2\ \text{u}$.

## 4. Another full pass: an oxide of iron

An oxide contains $69.9\%$ Fe and $30.1\%$ O. Per $100\ \text{g}$: moles of Fe $=69.9/56=1.25$; moles of O $=30.1/16=1.88$. Dividing by the smaller:

$$
\mathrm{Fe:O}=1.25:1.88=1:1.5.
$$

A $1.5$ is *not* to be rounded away — it says multiply both by $2$: the ratio is $2:3$, empirical formula **Fe2O3** (hematite). Its formula mass is $2(56)+3(16)=160$, and you can run the percentages back: $\frac{112}{160}\times100=70.0\%$ iron, matching the reported $69.9\%$ within rounding. A formula that cannot reproduce its own input data is a red flag to re-check.

## 5. Choosing between formulae that share an empirical formula

Many compounds share one empirical recipe — CH2O alone is shared by glucose, acetic acid and formaldehyde. The percentage analysis never separates them; only the **molar mass** separates them, which is why an analytical report and a molecular-mass measurement travel together in real identification work.

<learning-block type="mistake" title="Rounding the ratio too early">

Dividing by the smallest value routinely produces $1.33$, $1.5$ or $1.67$ — fractions announcing their own multiplier: $1.33\to\times3$, $1.5\to\times2$, $1.67\to\times3$. Rounding $1.5$ to $1$ produces a plausible-looking, wrong formula and is the single most common error in this calculation. Also avoid treating a ratio element computed from a diatomic reference as if hydrogen's atomic mass were $2$; you divide masses by *atomic* masses (H = 1), then the ratio fixes atom counts.

</learning-block>

## Try it yourself

**A.** Find the percentage of nitrogen in ammonium nitrate, NH4NO3.

<details><summary>Show the reasoning</summary>

Molar mass $=2(14)+4(1)+3(16)=80\ \text{g/mol}$. Nitrogen atoms: $2$, contributing $28\ \text{g}$ per mole.

$$
\%\,\mathrm{N}=\frac{28}{80}\times100=35\%.
$$
</details>

**B.** A compound analyses to $11.1\%$ H and $88.9\%$ O. Derive its empirical formula.

<details><summary>Show the reasoning</summary>

Per $100\ \text{g}$: $11.1/1=11.1$ mol H and $88.9/16=5.56$ mol O. Dividing by $5.56$: the ratio is $2:1$, so the empirical formula is **H2O**.
</details>

**C.** An oxide of copper contains $79.9\%$ Cu and $20.1\%$ O. Find its formula. (Cu $=63.5$.)

<details><summary>Show the reasoning</summary>

$79.9/63.5=1.26$ mol Cu and $20.1/16=1.26$ mol O — the ratio is $1:1$, giving **CuO**. Cross-check: $\frac{63.5}{63.5+16}\times100=79.9\%$, exactly the given analysis.
</details>

## Remember

- Percentages and formulae encode the same facts; the conversion is assume-100 g, then divide by atomic masses.
- The empirical formula is the ratio recipe; only a molar mass upgrades it to a molecular formula.
- A fractional mole ratio is an instruction, not noise: $1.5$ means double everything.
- Vapour density to molar mass runs through $M=2\times\text{VD}$ for volatile substances.
- Formulae unlock reaction arithmetic: the next module uses them to balance equations and size up reactants.
