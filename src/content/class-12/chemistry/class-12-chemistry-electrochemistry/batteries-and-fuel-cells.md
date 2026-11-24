## Portable electrochemistry

A **battery** is one or more galvanic cells packaged to deliver electrical energy on demand. **Primary** cells are single-use; **secondary** cells are rechargeable; **fuel cells** are refuelled rather than recharged. Each design is a compromise among voltage, capacity, mass, cost and safety.

## 1. Primary cells

**Dry cell (Leclanché).** Zinc can (anode) with a carbon rod (cathode) in a moist paste of $\mathrm{NH_4Cl}$ and $\mathrm{ZnCl_2}$, with $\mathrm{MnO_2}$ around the carbon.

- Anode: $\mathrm{Zn\rightarrow Zn^{2+}+2e^-}$
- Cathode: $\mathrm{2MnO_2+2NH_4^++2e^-\rightarrow Mn_2O_3+2NH_3+H_2O}$
- emf $\approx1.5\ \text{V}$.

Cheap and ubiquitous, but voltage falls with use and the cell cannot be recharged.

**Mercury cell.** Zinc anode, mercury(II) oxide cathode, KOH electrolyte:

- Anode: $\mathrm{Zn+2OH^-\rightarrow ZnO+H_2O+2e^-}$
- Cathode: $\mathrm{HgO+H_2O+2e^-\rightarrow Hg+2OH^-}$
- emf $\approx1.35\ \text{V}$, very steady — used in watches and calculators (now largely phased out for environmental reasons).

## 2. Secondary (rechargeable) cells

**Lead–acid accumulator.** Six cells in series give a $12\ \text{V}$ car battery.

- Discharge anode: $\mathrm{Pb+SO_4^{2-}\rightarrow PbSO_4+2e^-}$
- Discharge cathode: $\mathrm{PbO_2+4H^++SO_4^{2-}+2e^-\rightarrow PbSO_4+2H_2O}$
- Overall: $\mathrm{Pb+PbO_2+2H_2SO_4\rightarrow2PbSO_4+2H_2O}$, $E^\circ\approx2.04\ \text{V}$.

Charging reverses the reaction. The electrolyte is dilute $\mathrm{H_2SO_4}$; its density rises on discharge, giving a convenient state-of-charge indicator.

**Nickel–cadmium cell.** Cd anode, $\mathrm{NiO(OH)}$ cathode, KOH electrolyte, $\approx1.2\ \text{V}$. Durable but cadmium is toxic.

**Lithium-ion cell.** Lithium ions intercalate between graphite (anode) and a metal-oxide (cathode, e.g. $\mathrm{LiCoO_2}$) with an organic electrolyte. $\approx3.6\ \text{V}$, high energy density, no memory effect — the standard for portable electronics and electric vehicles.

## 3. Fuel cells

A fuel cell is not a storage device: reactants are supplied continuously and products removed continuously. The hydrogen–oxygen fuel cell:

- Anode: $\mathrm{H_2\rightarrow2H^++2e^-}$ (acidic) or $\mathrm{H_2+2OH^-\rightarrow2H_2O+2e^-}$ (alkaline)
- Cathode: $\mathrm{\tfrac12O_2+2H^++2e^-\rightarrow H_2O}$
- Overall: $\mathrm{H_2+\tfrac12O_2\rightarrow H_2O}$, $E^\circ\approx1.23\ \text{V}$.

Advantages: high efficiency (no Carnot limit, since it is not heat-engine based), water as the only product, quiet operation. Challenges: hydrogen storage, catalyst cost, and purity requirements.

## 4. Comparison

| Type | Rechargeable? | Typical voltage (V) | Key limitation |
| --- | --- | --- | --- |
| Dry cell | no | 1.5 | voltage sags; leaks |
| Mercury cell | no | 1.35 | mercury toxicity |
| Lead–acid | yes | 2.0 per cell | heavy; sulphation |
| Ni–Cd | yes | 1.2 | memory effect; toxic Cd |
| Li-ion | yes | 3.6 | cost; thermal runaway |
| H$_2$/O$_2$ fuel cell | refuelled | 1.23 | H$_2$ storage |

## 5. Worked example

For the lead–acid overall reaction, $n=2$ and $E^\circ=2.04\ \text{V}$. The maximum electrical work from $1\ \text{mol}$ of reaction is

$$
-\Delta G^\circ=nFE^\circ=2\times96500\times2.04
=3.94\times10^5\ \text{J}\approx394\ \text{kJ}.
$$

This is the thermodynamic ceiling; real batteries deliver less because of internal resistance, side reactions and polarisation.

## 6. Method for battery questions

1. Identify the cell type and whether it is galvanic or electrolytic (charging a secondary cell is electrolytic).
2. Write the half-reactions for discharge; reverse them for charge.
3. Use $E^\circ_\text{cell}=E^\circ_\text{cathode}-E^\circ_\text{anode}$ or the tabulated emf.
4. Relate capacity to Faraday’s law: charge delivered = $nF\times$ moles of reaction.
5. Check that the voltage and products match the stated cell.

<learning-block type="mistake" title="Confusing discharge with charge">
In a rechargeable battery, the electrodes swap roles between discharge and charge. During discharge the negative electrode is the anode (oxidation); during charging it becomes the cathode (reduction). Writing the discharge half-reactions and then using them unchanged for charging gives the wrong products and the wrong sign for the cell potential. Always state which process is occurring before writing half-reactions.
</learning-block>

## Try it yourself

**A.** How many moles of electrons are transferred when a lead–acid cell delivers $1\ \text{mol}$ of Pb converted to PbSO$_4$?

<details><summary>Show the reasoning</summary>

The anode half-reaction is $\mathrm{Pb\rightarrow Pb^{2+}+2e^-}$ (as PbSO$_4$), so $2\ \text{mol}$ of electrons per mole of lead.

</details>

**B.** A hydrogen–oxygen fuel cell operates at $1.10\ \text{V}$ under load. What is $\Delta G$ per mole of water formed? ($n=2$.)

<details><summary>Show the reasoning</summary>

$\Delta G=-nFE=-2\times96500\times1.10=-2.12\times10^5\ \text{J mol}^{-1}\approx-212\ \text{kJ mol}^{-1}$. The magnitude is less than the standard value because the operating voltage is below $E^\circ$.

</details>

**C.** Why is a fuel cell not classified as a battery in the strict sense?

<details><summary>Show the reasoning</summary>

It does not store energy; it converts chemical energy to electrical energy continuously while fuel is supplied. Remove the fuel and it stops, whereas a battery contains its reactants internally.

</details>

## Check your understanding

Explain why lead–acid batteries are heavy yet still used in cars, and why lithium-ion has largely replaced them in portable electronics.

<details><summary>Reveal</summary>

Lead–acid has low energy density by mass but is cheap, robust, tolerant of high current and easy to recycle; cars need cranking current more than light weight. Lithium-ion offers far higher energy density and voltage, suiting weight-sensitive portable devices, but costs more and needs careful thermal management.

</details>

## Take away

- Batteries package galvanic chemistry for portable power; primary are single-use, secondary rechargeable.
- Lead–acid: $2.04\ \text{V}$ per cell, heavy but robust.
- Li-ion: $\approx3.6\ \text{V}$, high energy density, dominant in electronics.
- Fuel cells convert fuel continuously with high efficiency and water as product.
- Charging reverses the discharge chemistry.
- The next module applies the same electrochemical ideas to an unwanted process: corrosion.