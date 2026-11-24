## Properties that count particles, not identities

**Colligative properties** are properties of a solution that depend only on the number of solute particles present, not on their chemical identity. Four are standard: relative lowering of vapour pressure, elevation of boiling point, depression of freezing point, and osmotic pressure. All four trace back to the same cause — the presence of solute lowers the solvent’s vapour pressure — so they are linked by simple formulae and by a single constant for a given solvent.

This module derives each formula, works numerical examples, and shows how to use colligative measurements to find an unknown molar mass.

## 1. Relative lowering of vapour pressure

From Raoult’s law, for a solution of a non-volatile solute in a volatile solvent,

$$
\frac{p_1^\circ-p_1}{p_1^\circ}=x_2,
$$

where $x_2$ is the mole fraction of the solute. The left-hand side is the **relative lowering of vapour pressure**. For a dilute solution, $x_2\approx n_2/n_1$, so

$$
\frac{\Delta p}{p_1^\circ}\approx \frac{n_2}{n_1}.
$$

This is the simplest colligative relation and the parent of the others.

## 2. Elevation of boiling point

A liquid boils when its vapour pressure equals the external (atmospheric) pressure. Because the solute lowers the vapour pressure, the solution must be heated to a higher temperature to reach atmospheric pressure. The increase $\Delta T_b$ is proportional to the molality $m$ of the solute:

$$
\Delta T_b=K_b\,m,
$$

where $K_b$ is the **ebullioscopic constant** of the solvent (units K kg mol⁻¹). The new boiling point is $T_b=T_b^\circ+\Delta T_b$.

For water, $K_b=0.512\ \text{K kg mol}^{-1}$ and $T_b^\circ=373.15\ \text{K}$ (100 °C). The formula assumes a dilute, ideal solution of a non-volatile solute.

## 3. Depression of freezing point

At the freezing point, solid and liquid solvent are in equilibrium. The solute lowers the liquid’s vapour pressure but barely affects the solid’s, so the equilibrium temperature shifts down. The depression $\Delta T_f$ is

$$
\Delta T_f=K_f\,m,
$$

where $K_f$ is the **cryoscopic constant** (units K kg mol⁻¹). The new freezing point is $T_f=T_f^\circ-\Delta T_f$.

For water, $K_f=1.86\ \text{K kg mol}^{-1}$ and $T_f^\circ=273.15\ \text{K}$ (0 °C). This is the principle behind using salt to melt ice on roads and behind the “freezing-point depression” method for finding molar masses.

## 4. Osmotic pressure

If a solution and pure solvent are separated by a **semipermeable membrane** (permeable to solvent, not to solute), solvent flows into the solution. The external pressure that must be applied to stop this flow is the **osmotic pressure** $\pi$:

$$
\pi= M R T \quad\text{(molarity form)},\qquad
\pi=\frac{n_2}{V}RT.
$$

Here $R=8.314\ \text{J mol}^{-1}\text{K}^{-1}$ and $T$ is the absolute temperature. Osmotic pressure is large even for dilute solutions, which makes it the most sensitive colligative method for measuring molar masses of polymers and macromolecules. (For dilute aqueous work, $\pi\approx M\times0.0831\,T$ with $\pi$ in bar when $M$ is in mol L⁻¹ and $T$ in K, because $R=0.0831\ \text{L bar mol}^{-1}\text{K}^{-1}$.)

**Reverse osmosis** applies pressure greater than $\pi$ to force solvent out of a solution, purifying water.

## 5. Linking the four properties

All four are proportional to the solute molality (or molarity) for a dilute solution. For a given solvent they share a single proportionality constant family:

$$
\frac{\Delta p}{p_1^\circ}=x_2,\qquad
\Delta T_b=K_b m,\qquad
\Delta T_f=K_f m,\qquad
\pi=MRT.
$$

If one colligative property is measured, the others can be predicted for the same solution.

## 6. Using colligative properties to find molar mass

Since $\Delta T_f=K_f m$ and $m=n_2/w_1$ (moles solute per kg solvent),

$$
M_2=\frac{K_f\,w_2\,1000}{\Delta T_f\,w_1},
$$

where $w_2$ is the mass of solute (g), $w_1$ the mass of solvent (g), and $M_2$ the molar mass of the solute (g mol⁻¹). The same rearrangement works with $\Delta T_b$ and $K_b$. This is how the molar mass of an unknown non-electrolyte is determined experimentally.

**Worked example.** $1.00\ \text{g}$ of an unknown non-electrolyte is dissolved in $50.0\ \text{g}$ of water; the freezing point falls by $0.372\ \text{K}$. Find the molar mass. $K_f(\text{water})=1.86\ \text{K kg mol}^{-1}$.

$$
M_2=\frac{1.86\times1.00\times1000}{0.372\times50.0}
=\frac{1860}{18.6}=100\ \text{g mol}^{-1}.
$$

Sanity check: a $1\ \text{g}$ solute in $50\ \text{g}$ water giving a $0.37\ \text{K}$ depression is consistent with a molar mass around $100\ \text{g mol}^{-1}$.

**Worked example (boiling point).** $2.0\ \text{g}$ of a non-electrolyte in $100\ \text{g}$ of water raises the boiling point by $0.0512\ \text{K}$. Find the molar mass.

$$
m=\frac{\Delta T_b}{K_b}=\frac{0.0512}{0.512}=0.10\ \text{mol kg}^{-1}.
$$

Moles of solute $=0.10\times0.100=0.010\ \text{mol}$. $M_2=2.0/0.010=200\ \text{g mol}^{-1}$.

**Worked example (osmotic pressure).** An aqueous solution has $\pi=2.46\ \text{bar}$ at $300\ \text{K}$. Find its molarity (using $R=0.0831\ \text{L bar mol}^{-1}\text{K}^{-1}$).

$$
M=\frac{\pi}{RT}=\frac{2.46}{0.0831\times300}=0.0986\ \text{mol L}^{-1}.
$$

## 7. Method for colligative problems

1. Identify which property is given or asked for.
2. Convert the concentration to molality (or molarity for osmotic pressure).
3. Apply $\Delta T_b=K_b m$, $\Delta T_f=K_f m$ or $\pi=MRT$.
4. For molar-mass problems, rearrange to solve for $M_2$ and check the units.
5. Remember the dilute-solution assumption: these formulae fail for concentrated solutions.

<learning-block type="mistake" title="Using molarity in boiling-point and freezing-point formulae">
$\Delta T_b=K_b m$ and $\Delta T_f=K_f m$ use **molality** (moles per kg of solvent), not molarity. Molarity appears only in the osmotic-pressure formula $\pi=MRT$. Substituting molarity into the boiling-point formula is a very common error, especially when the problem states the concentration in molarity. Convert first: for water, $m\approx M$ only for dilute solutions where density $\approx1\ \text{g mL}^{-1}$.
</learning-block>

## Try it yourself

**A.** A $0.50\ \text{mol kg}^{-1}$ aqueous solution of a non-electrolyte. Find its boiling point and freezing point.

<details><summary>Show the reasoning</summary>

$\Delta T_b=0.512\times0.50=0.256\ \text{K}$, so $T_b=100.26\ ^\circ\text{C}$. $\Delta T_f=1.86\times0.50=0.93\ \text{K}$, so $T_f=-0.93\ ^\circ\text{C}$.

</details>

**B.** $0.745\ \text{g}$ of KCl is dissolved in $100\ \text{g}$ of water and the freezing point depression is measured as $0.372\ \text{K}$. (Treat KCl as a non-electrolyte for the moment.) What apparent molar mass does this give, and why is it wrong?

<details><summary>Show the reasoning</summary>

Using the formula, $M_2=1.86\times0.745\times1000/(0.372\times100)=37.2\ \text{g mol}^{-1}$. The true molar mass of KCl is $74.5\ \text{g mol}^{-1}$; the apparent value is half because KCl dissociates into two ions. This is the puzzle the next module resolves.

</details>

**C.** Which colligative property would you choose to measure the molar mass of a protein, and why?

<details><summary>Show the reasoning</summary>

Osmotic pressure: it is large even at very low concentrations, so a measurable pressure is obtained with tiny amounts of solute, and it avoids the very small temperature changes of boiling-point or freezing-point methods.

</details>

## Check your understanding

Explain, in terms of vapour pressure, why adding salt lowers the freezing point of water.

<details><summary>Reveal</summary>

The solute lowers the vapour pressure of liquid water. At 0 °C the vapour pressures of ice and pure water are equal; for the solution the liquid’s vapour pressure is now below that of ice, so ice is the stable phase and the liquid freezes only at a lower temperature where its vapour pressure rises again to match ice’s. Hence the freezing point falls.

</details>

## Take away

- Colligative properties depend on particle number: relative vapour-pressure lowering, $\Delta T_b$, $\Delta T_f$ and $\pi$.
- $\Delta T_b=K_b m$, $\Delta T_f=K_f m$, $\pi=MRT$; all assume dilute ideal solutions of non-volatile solutes.
- Colligative measurements give the molar mass of an unknown non-electrolyte.
- When the solute dissociates or associates, the simple formulae undercount or overcount particles — handled by the van’t Hoff factor.

The next module explains abnormal molar masses and introduces the van’t Hoff factor.