## How strong is this solution?

A reaction needs a certain *amount* of each species, but in the lab you often add substances as solutions, by volume. Every concentration term is a different ratio for the same underlying idea: how much solute per how much solvent or solution. Choosing the right ratio for the task — and converting between them safely — is a large share of quantitative chemistry.

This module keeps one running example: a solution made with $20\ \text{g}$ of NaOH ($M=40\ \text{g/mol}$) dissolved in $80\ \text{g}$ of water, total solution mass $100\ \text{g}$, density $1.1\ \text{g/mL}$.

## 1. Mass percentage and ppm

Mass percentage (written % w/w) is the simplest ratio:

$$
\%\ \text{by mass}=\frac{\text{mass of solute}}{\text{mass of solution}}\times100
=\frac{20}{20+80}\times100=20\%.
$$

Masses are unaffected by temperature, which makes mass percentage genuinely temperature-independent — a virtue worth remembering when other terms are temperature-sensitive.

For traces far too dilute for percentages, parts per million are used:

$$
\text{ppm}=\frac{\text{mass of solute}}{\text{mass of solution}}\times10^{6}.
$$

A typical situation: a litre of water (about $1000\ \text{g}$) holding $3.5\ \text{mg}$ of fluoride — then $\text{ppm}=3.5\times10^{-3}/1000\times10^{6}=3.5$ ppm, since for aqueous solutions $1\ \text{mg per litre}$ is about $1$ ppm.

## 2. Mole fraction: the ratio chemists prefer for theory

The mole fraction of species $i$ in a mixture is its share of all the moles present:

$$
x_i=\frac{n_i}{n_{\text{total}}},
$$

and the sum over all species is exactly $1$. Here: $n(\text{NaOH})=20/40=0.5\ \text{mol}$; $n(\text{water})=80/18=4.44$ mol. So

$$
x_{\text{NaOH}}=\frac{0.5}{0.5+4.44}=\frac{0.5}{4.94}=0.10,\qquad x_{\text{water}}=0.90.
$$

Mole fractions are dimensionless, temperature-independent, and the natural variables for vapour-pressure and colligative reasoning in later chapters.

## 3. Molarity: moles per litre of solution

Molarity (M, mol/L) counts moles *per litre of finished solution*:

$$
M=\frac{\text{moles of solute}}{\text{volume of solution in L}}.
$$

The solution's volume comes from its density: $\dfrac{100\ \text{g}}{1.1\ \text{g/mL}}\approx90.9\ \text{mL}=0.0909\ \text{L}$, so

$$
M=\frac{0.5}{0.0909}\approx5.5\ \text{mol/L}.
$$

Because solutions expand slightly on warming, a molarity computed at one temperature drifts at another — a genuine drawback for storage but convenient for lab use: pipettes and burettes dispense volumes, and molarity plugs straight into $n=M\times V$.

**Dilution** only adds solvent, so the *moles* of solute stay fixed:

$$
M_1V_1=M_2V_2.
$$

To make $250\ \text{mL}$ of $0.1\ \text{M}$ solution from $0.5\ \text{M}$ stock, take $V_1=\dfrac{0.1\times250}{0.5}=50\ \text{mL}$ — measure $50\ \text{mL}$, then dilute to the mark.

## 4. Molality: moles per kilogram of solvent

Molality (m, mol/kg) counts moles per kilogram of **solvent** — not solution:

$$
m=\frac{\text{moles of solute}}{\text{mass of solvent in kg}}
=\frac{0.5}{0.080}=6.25\ \text{mol/kg}.
$$

Since neither moles nor solvent mass changes on heating, molality is **temperature-independent**, which is why colligative-property work (freezing-point depression, boiling-point elevation) is built on molality rather than molarity.

## 5. Which term, and how to interconvert

| Term | Numerator / denominator | Changes with T? | Typical use |
| --- | --- | --- | --- |
| mass % | g / g of solution | no | labelling reagents, alloys |
| ppm | g / g of solution $\times10^6$ | no | trace contaminants, water quality |
| mole fraction | mol / total mol | no | vapour pressure, Raoult-type reasoning |
| molarity | mol / L of solution | yes | titrations, stoichiometry by volume |
| molality | mol / kg of solvent | no | colligative properties |

Interconversion is not free: moving from a **mass-based** term to a **volume-based** one requires the **density** of the solution. In the running example, all four computed values ($20\%$, $x=0.10$, $5.5\ \text{M}$, $6.25\ \text{m}$) describe the same beaker; density was the bridge that let the molarity be found at all.

<learning-block type="mistake" title="Solvent versus solution">

Molality divides by the **solvent**, molarity by the **solution** — swap them and the running example's molality would read $0.5/0.1=5$ instead of $6.25$. A second slip: converting a stated dilution instruction ("add $0.5\ \text{L}$ of water") into a solution volume; dilution equations need total solution volume after mixing, and volumes of solute and solvent cannot simply be added.

</learning-block>

## Try it yourself

**A.** $4\ \text{g}$ of NaOH is dissolved and the solution is made up to $500\ \text{mL}$. Find the molarity.

<details><summary>Show the reasoning</summary>

$n=4/40=0.1\ \text{mol}$; volume $=0.500\ \text{L}$.

$$
M=\frac{0.1}{0.500}=0.2\ \text{mol/L}.
$$
</details>

**B.** $46\ \text{g}$ of ethanol ($M=46$) is mixed with $162\ \text{g}$ of water ($M=18$). Find the mole fraction of ethanol.

<details><summary>Show the reasoning</summary>

$n(\text{ethanol})=46/46=1$ mol; $n(\text{water})=162/18=9$ mol.

$$
x_{\text{ethanol}}=\frac{1}{1+9}=0.1.
$$

</details>

**C.** Diluting $100\ \text{mL}$ of $0.5\ \text{M}$ sodium carbonate to $500\ \text{mL}$: find the new molarity and the moles of solute present throughout.

<details><summary>Show the reasoning</summary>

Moles stay fixed: $n=0.5\times0.100=0.05\ \text{mol}$ before and after. New molarity $=0.05/0.500=0.1\ \text{M}$. Equivalently $M_2=\frac{0.5\times100}{500}=0.1\ \text{M}$.
</details>

## Remember

- All concentration terms are ratios over the same pair (number of solute units, total system); the denominators differ.
- "Per solution" requires the density; "per solvent" needs only masses and molar masses.
- Temperature touches only molarity, because only solution volume drifts with temperature.
- Dilution conserves moles of solute: $M_1V_1=M_2V_2$ straight from $n=MV$.
- The next module chains these pieces into the multi-step calculations that exam papers are made of.
