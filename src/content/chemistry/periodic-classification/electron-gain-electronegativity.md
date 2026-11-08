## The other side of the tug-of-war

Ionisation enthalpy measures how firmly an atom holds its *own* electrons. Two more quantities describe the opposite side: what happens when an electron is *added*, and how strongly an atom pulls on electrons it *shares* with another atom. The two ideas are related but not the same, and confusing them is the most common error in this part of the chapter. Keep the separation in mind from the first line: one is an isolated-atom energy change with units; the other is a dimensionless, comparative tug inside a bond.

## 1. Electron gain enthalpy: the sign tells you the flow

Add an electron to a gaseous atom:

$$
\mathrm{X(g)} + e^- \longrightarrow \mathrm{X^-(g)}, \qquad \Delta_{eg}H.
$$

For most atoms the nucleus attracts the incoming electron, energy is released, and $\Delta_{eg}H$ is **negative** in the usual chemistry sign convention (energy released by the system is negative; absorbed is positive). The more negative the value, the more willingly the atom accepts an electron.

**The pattern.** Across a period the value grows more negative — radius shrinks and $Z_{eff}$ rises, so the incoming electron is drawn closer and bound more tightly. Down a group the value becomes less negative — the electron lands in a larger, more heavily shielded shell. Halogens, one electron short of a closed shell, top the chart:

| Element | F | Cl | Br | I |
| --- | --- | --- | --- | --- |
| $\Delta_{eg}H$ ($\text{kJ mol}^{-1}$) | $-328$ | $-349$ | $-325$ | $-295$ |

**Four anomalies the same lens explains:**

- **Chlorine beats fluorine.** Fluorine's added electron must squeeze into the cramped $2p$ shell beside seven other electrons; the interelectronic repulsion costs more than the extra nuclear pull gains. So Cl ($-349$) is more negative than F ($-328$). The same logic puts sulphur ($-200$) ahead of oxygen ($-141$).
- **Nitrogen barely accepts at all.** The $2p^3$ half-filled subshell is specially stable, and the incoming electron must pair with one already there. Nitrogen's value sits close to zero (slightly positive in most tables): gaining an electron is barely worth it.
- **Noble gases are positive.** Their closed shells force the electron into a *new* outer shell, where nothing attracts it — adding energy is a net cost, so $\Delta_{eg}H > 0$.
- **A second electron always costs.** Adding a second electron means pushing it into an already negative ion: $\mathrm{O^-(g)} \to \mathrm{O^{2-}(g)}$ absorbs about $780\ \text{kJ mol}^{-1}$ on top of the $-141$ from the first step, so the net formation of gaseous $\mathrm{O^{2-}}$ is endothermic. Free oxide dianions do not form in the gas phase; they exist in solids because the **lattice energy** of the ionic crystal pays the bill.

## 2. Electronegativity: pulling on shared electrons

**Electronegativity** is the power of an atom to attract the shared electron pair towards itself when bonded. It is deliberately different from electron gain enthalpy in three ways:

- it describes bonded atoms, not isolated ones;
- it is **dimensionless** — a relative number on a chosen scale from about 0.7 to 4.0;
- it is **scale-dependent**: each construction gives slightly different values, but they agree in ordering.

## 3. The three scales worth knowing

| Scale | Built from | Character |
| --- | --- | --- |
| Pauling | extra stability of the polar bond (bond enthalpies) | the oldest and most widely quoted numbers |
| Mulliken | average of ionisation enthalpy and electron gain enthalpy, $\chi \approx \frac{1}{2}(\Delta_i H_1 + \Delta_{eg}H)$ | connects directly to the isolated-atom energies of this chapter |
| Allred–Rochow | electrostatic pull, effectively $Z_{eff}/r^2$, on the bonding electron | uses the nuclear-pull idea, dimensionally like a force |

Mulliken's average makes intuitive sense: an atom is hard to cheat in a bond if it is hard to ionise *and* eager to gain. Pauling's bond-enthalpy route is the one worth computing with — worked through below.

**Pauling's numbers to know:** F $4.0$ (the maximum), O $3.4$, Cl and N about $3.2$ and $3.0$, Br $3.0$, C and S about $2.5$, H $2.2$, Al $1.6$, Mg $1.3$, Na $0.9$, Cs $0.7$ (the minimum among stable elements).

## 4. Trends — with one instructive exception

Electronegativity **rises across a period** (smaller atom, larger $Z_{eff}$, stronger pull on the shared pair) and **falls down a group**, in exact mirror of the size trend. Period 3 walks from Na (0.9) through Si (1.9) to Cl (3.2); group 1 walks from Li (1.0) down to Cs (0.7).

The exception worth knowing: **gallium ($1.8$) is more electronegative than aluminium ($1.6$).** Between them sit fourteen lanthanoid elements whose poor shielding (the same effect that contracted hafnium to zirconium in the radii module) leaves gallium's outer electrons feeling a reinforced nuclear pull. Where electronegativity refuses to fall down a group, hunt for a d- or f-block contraction just upstream.

## Worked example: from bond enthalpies to a Pauling difference

Pauling's scheme: if bond $\mathrm{X-Y}$ is stronger than the average of $\mathrm{X-X}$ and $\mathrm{Y-Y}$, the excess comes from the polarity of the bond:

$$
\Delta = \varepsilon(\mathrm{X-Y}) - \tfrac{1}{2}\big[\varepsilon(\mathrm{X-X}) + \varepsilon(\mathrm{Y-Y})\big], \qquad
|\chi_{\mathrm{X}} - \chi_{\mathrm{Y}}| = 0.208\,\sqrt{\Delta},
$$

with $\Delta$ in $\text{kcal mol}^{-1}$. Take hydrogen chloride: $\varepsilon(\mathrm{H-H}) = 104$, $\varepsilon(\mathrm{Cl-Cl}) = 58$, $\varepsilon(\mathrm{H-Cl}) = 103\ \text{kcal mol}^{-1}$.

1. The unpolarised reference: $\tfrac{1}{2}(104+58) = 81\ \text{kcal mol}^{-1}$.
2. Excess stability: $\Delta = 103 - 81 = 22\ \text{kcal mol}^{-1}$.
3. Difference: $|\chi_{\mathrm{Cl}} - \chi_{\mathrm{H}}| = 0.208\sqrt{22} = 0.208(4.7) \approx 0.98$.

With $\chi_{\mathrm{H}} = 2.1$, chlorine lands at $\chi_{\mathrm{Cl}} \approx 3.1$. Sanity check: the tabulated Pauling value is $3.16$ — the reconstruction, from three measured bond enthalpies alone, lands within the scale's own precision. A quick Mulliken cross-check for chlorine: $\tfrac{1}{2}(12.97 + 3.61) = 8.29\ \text{eV}$ — a different number, as expected on a different scale, but the *ranking* against neighbours agrees.

<learning-block type="mistake" title="Two quantities, two traps">

- **Using electron gain enthalpy where electronegativity is asked, or the reverse.** Fluorine has the highest *electronegativity* (4.0) but chlorine has the more negative *electron gain enthalpy*. The values come from different experiments and answer different questions.
- **Wrong signs in.** Energy *released* on gaining an electron is written as a negative $\Delta_{eg}H$; an electron *affinity* quoted as a positive magnitude means the same thing with the opposite sign. Read the convention of the table you are using before ranking.

</learning-block>

## Try it yourself

**1.** Why does fluorine take the top electronegativity spot while chlorine takes the most negative electron gain enthalpy?

<details><summary>Show the reasoning</summary>

Electronegativity concerns the pull on a *shared* pair: fluorine wins because its small radius and high $Z_{eff}$ give the strongest tug of all. Electron gain enthalpy concerns an isolated atom *accepting* an electron, where fluorine's cramped $2p$ shell raises interelectronic repulsion and chlorine's roomier $3p$ shell accepts more readily. Small-size advantage and acceptance comfort are different questions.

</details>

**2.** Compute the Mulliken electronegativity of fluorine: $\Delta_i H_1 = 17.4\ \text{eV}$, electron gain releases $3.4\ \text{eV}$ per atom.

<details><summary>Show the reasoning</summary>

$\chi_{\mathrm{M}} = \frac{1}{2}(17.4 + 3.4) = 10.4\ \text{eV}$. This is not a Pauling number — Mulliken values run about three times larger — but fluorine's top position is confirmed either way: run the same average on chlorine, $\frac{1}{2}(13.0+3.6) = 8.3\ \text{eV}$, and fluorine still comes out ahead.

</details>

**3.** Predict which end of the $\mathrm{H-I}$ bond carries partial negative charge, using Pauling values.

<details><summary>Show the reasoning</summary>

$\chi_{\mathrm{I}} \approx 2.7 > \chi_{\mathrm{H}} \approx 2.2$, so iodine draws the shared pair more strongly and carries the $\delta^-$ end. The difference is small ($0.5$), so hydrogen iodide is only moderately polar — consistent with it being a strong but not extremely polar acid.

</details>

## Remember

- Electron gain enthalpy is a signed energy change for adding an electron to a gaseous atom; released energy makes it negative.
- Chlorine, not fluorine, has the most negative value; nitrogen and the noble gases barely try; a second electron always costs more than the first pays.
- Electronegativity is a dimensionless, scale-dependent measure of pull on shared electrons — bonded, not isolated.
- Across a period it rises and down a group it falls, with gallium above aluminium as the d-block-contraction exception.
- Fluorine tops electronegativity; chlorine tops electron gain enthalpy — never mix the rankings.

An atom's own electrons and its grip on shared electrons set its chemical personality. The next module follows the periodic trends all the way into chemistry: metallic character, oxides, hydrides, and the second-period elements that refuse to behave like their group.
