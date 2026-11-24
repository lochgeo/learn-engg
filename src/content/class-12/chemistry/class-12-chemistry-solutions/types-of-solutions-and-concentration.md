## What a solution really is

A **solution** is a homogeneous mixture of two or more substances whose composition can be varied. The component present in the larger amount is the **solvent**; the other(s) are **solutes**. Solutions are not limited to liquids: air is a gas-in-gas solution, brass is a solid-in-solid solution, and carbon dioxide dissolved in water is a gas-in-liquid solution. The defining feature is uniformity at the particle level — any sample taken from anywhere in the solution has the same composition.

Solutions matter because most chemistry, biology and engineering happens in them: reactions run faster and more controllably in solution, and properties such as boiling point and freezing point shift in predictable ways. This chapter builds the quantitative language needed to describe those shifts.

## 1. Types of solutions

Classify a solution by the physical states of solute and solvent:

| Solute | Solvent | Example |
| --- | --- | --- |
| Gas | Gas | Air (O₂, N₂, Ar, …) |
| Liquid | Gas | Chloroform vapour in nitrogen |
| Solid | Gas | Iodine vapour in air |
| Gas | Liquid | CO₂ in water (soda water) |
| Liquid | Liquid | Ethanol in water |
| Solid | Liquid | NaCl in water |
| Gas | Solid | H₂ absorbed in palladium |
| Liquid | Solid | Mercury in gold (amalgam) |
| Solid | Solid | Brass (Cu + Zn), bronze |

The state of the solvent usually sets the state of the solution. For the rest of this chapter the solvent is a liquid, most often water, but the concentration ideas apply to any of the cases above.

## 2. Why concentration must be stated

A solution’s properties depend on how much solute is present per unit amount of solution. Saying “salt water” is useless for calculation; we need a number. Several concentration measures exist because different experiments need different denominators: mass-based measures do not change with temperature, while volume-based ones do.

## 3. Mass and volume percentages

The simplest measures use mass or volume ratios, expressed as percentages:

- **Mass percentage (w/w):** $\displaystyle \frac{\text{mass of solute}}{\text{mass of solution}}\times 100$
- **Volume percentage (v/v):** $\displaystyle \frac{\text{volume of solute}}{\text{volume of solution}}\times 100$
- **Mass by volume percentage (w/v):** $\displaystyle \frac{\text{mass of solute (g)}}{\text{volume of solution (mL)}}\times 100$

Mass percentage is temperature-independent and is the form used on commercial labels (for example, a 10 % (w/w) glucose solution). Volume percentage is common for alcoholic beverages. Mass-by-volume percentage is convenient in medicine and biology, where a solute mass is dissolved to a final volume.

**Worked example.** A solution contains $40\ \text{g}$ of ethanol in $120\ \text{g}$ of water. Find the mass percentage of ethanol.

Total mass of solution $=40+120=160\ \text{g}$.

$$
\%\ \text{ethanol}=\frac{40}{160}\times 100=25\%.
$$

Sanity check: the solute is one quarter of the total mass, so 25 % is plausible.

## 4. Mole fraction

The **mole fraction** $x_i$ of a component is the ratio of its amount (in moles) to the total amount of all components:

$$
x_i=\frac{n_i}{\sum n_j},\qquad \sum x_j=1.
$$

Mole fraction is dimensionless, temperature-independent, and the natural unit for vapour-pressure and colligative calculations later. For a binary solution of A and B,

$$
x_A=\frac{n_A}{n_A+n_B},\qquad x_B=\frac{n_B}{n_A+n_B}.
$$

**Worked example.** A solution contains $1\ \text{mol}$ of methanol and $3\ \text{mol}$ of water. Mole fractions:

$$
x_{\text{methanol}}=\frac{1}{1+3}=0.25,\qquad x_{\text{water}}=\frac{3}{1+3}=0.75.
$$

## 5. Molarity and molality

These two are the workhorses of solution chemistry, and they are easily confused.

- **Molarity** $M$ (or $c$): moles of solute per litre of **solution**:

$$
M=\frac{n_{\text{solute}}}{V_{\text{solution}}\ (\text{L})}.
$$

- **Molality** $m$: moles of solute per kilogram of **solvent**:

$$
m=\frac{n_{\text{solute}}}{m_{\text{solvent}}\ (\text{kg})}.
$$

Molarity depends on volume, and volume changes with temperature and pressure, so molarity is temperature-dependent. Molality depends on mass, which does not change with temperature, so molality is temperature-independent. For precise physical-chemistry work (colligative properties, thermodynamics) molality is preferred; for routine laboratory preparation molarity is preferred because volumes are easy to measure.

**Worked example.** Dissolve $5.85\ \text{g}$ of NaCl (molar mass $58.5\ \text{g mol}^{-1}$) in water and make the volume up to $500\ \text{mL}$. Find the molarity.

$$
n=\frac{5.85}{58.5}=0.10\ \text{mol},\qquad M=\frac{0.10}{0.500}=0.20\ \text{mol L}^{-1}.
$$

If instead the $5.85\ \text{g}$ were dissolved in $500\ \text{g}$ of water, the molality would be $0.10/0.500=0.20\ \text{mol kg}^{-1}$ — numerically the same here only because the density happens to be close to $1\ \text{g mL}^{-1}$. Do not assume the two are interchangeable.

## 6. Normality

**Normality** $N$ counts reactive units rather than molecules: equivalents of solute per litre of solution. One equivalent is the amount that supplies or reacts with one mole of H⁺ (acid–base) or one mole of electrons (redox). For a substance of molar mass $M$ and valence factor $n$ (H⁺ per molecule, or electrons transferred),

$$
N=n\times M.
$$

Normality is convenient in titrations but is fading from modern usage; molarity plus the balanced equation is unambiguous. Keep the relation in mind because older problems still quote it.

## 7. Parts per million and trace solutes

For very dilute solutions, concentrations are given in parts per million (ppm) or parts per billion (ppb):

$$
\text{ppm}=\frac{\text{mass of solute}}{\text{mass of solution}}\times 10^6,\qquad
\text{ppb}=\frac{\text{mass of solute}}{\text{mass of solution}}\times 10^9.
$$

For dilute aqueous solutions, $1\ \text{ppm}\approx 1\ \text{mg L}^{-1}$ because the solution density is close to $1\ \text{g mL}^{-1}$. Trace pollutants, dopants and nutrients are reported this way.

## 8. Dilution and mixing

When solvent is added, the amount of solute is conserved:

$$
M_1V_1=M_2V_2 \quad\text{(molarity form)},\qquad
m_1\,w_1=m_2\,w_2 \quad\text{(molality form, with solvent masses)}.
$$

When two solutions of the same solute are mixed, the final concentration is the total amount divided by the total volume (or total solvent mass), not the average of the two concentrations:

$$
M_{\text{final}}=\frac{M_1V_1+M_2V_2}{V_1+V_2}.
$$

**Worked example.** Mix $200\ \text{mL}$ of $0.50\ \text{M}$ NaCl with $300\ \text{mL}$ of $0.20\ \text{M}$ NaCl. Final molarity:

$$
M=\frac{0.50\times0.200+0.20\times0.300}{0.200+0.300}
=\frac{0.10+0.06}{0.500}=0.32\ \text{M}.
$$

Sanity check: the result lies between $0.20$ and $0.50$, closer to $0.20$ because the larger volume is the more dilute one.

## 9. A reliable method for concentration problems

1. Identify the solute and the solvent, and the units the answer needs.
2. Convert any masses to moles using the molar mass.
3. Compute the denominator in the units demanded (litres of solution, kilograms of solvent, total mass, …).
4. Apply the formula, keeping units attached to every number.
5. Check the magnitude: diluting lowers concentration; mixing gives a value between the two inputs.

<learning-block type="mistake" title="Molarity versus molality">
The single most common slip is treating molarity and molality as the same number. Molarity divides by the volume of the **solution**; molality divides by the mass of the **solvent**. They coincide numerically only for dilute aqueous solutions near room temperature. In problems involving temperature changes, boiling-point elevation or freezing-point depression, always use molality, because those formulas are derived in terms of solvent mass.
</learning-block>

## Try it yourself

**A.** A solution is prepared by dissolving $20\ \text{g}$ of glucose ($M=180\ \text{g mol}^{-1}$) in $180\ \text{g}$ of water. Find the mole fraction of glucose.

<details><summary>Show the reasoning</summary>

$n_{\text{glucose}}=20/180=0.111\ \text{mol}$; $n_{\text{water}}=180/18=10.0\ \text{mol}$. Total $=10.111\ \text{mol}$. $x_{\text{glucose}}=0.111/10.111=0.0110$.

</details>

**B.** How many millilitres of $0.25\ \text{M}$ HCl are needed to prepare $500\ \text{mL}$ of $0.10\ \text{M}$ HCl by dilution?

<details><summary>Show the reasoning</summary>

$M_1V_1=M_2V_2$: $0.25\,V_1=0.10\times500$, so $V_1=200\ \text{mL}$. Take $200\ \text{mL}$ of stock and add water to $500\ \text{mL}$.

</details>

**C.** A seawater sample contains $35\ \text{g}$ of dissolved salts per kilogram of solution. Express this as a mass percentage and as ppm.

<details><summary>Show the reasoning</summary>

Mass percentage $=35/1000\times100=3.5\%$. ppm $=35/1000\times10^6=35\,000\ \text{ppm}$.

</details>

## Check your understanding

Without computing, explain why adding $100\ \text{mL}$ of water to $100\ \text{mL}$ of ethanol does not give $200\ \text{mL}$ of solution, and why this makes molarity change on mixing even when no reaction occurs.

<details><summary>Reveal</summary>

Ethanol and water molecules interact strongly and pack more efficiently together than either pure liquid, so the total volume is less than the sum. Because molarity uses the volume of the **solution**, the final volume is not the sum of the starting volumes; molality, which uses the mass of the solvent, avoids this complication.

</details>

## Take away

- A solution’s composition must be expressed as a number, and the right measure depends on whether the denominator is mass or volume.
- Mole fraction is dimensionless and temperature-independent; it is the basis of vapour-pressure and colligative calculations.
- Molarity is convenient but temperature-dependent; molality is the robust choice for physical-chemistry work.
- Dilution conserves solute; mixing concentrations must be weighted by volume or mass, never averaged.

The next module uses these concentration ideas to connect solubility with vapour pressure.