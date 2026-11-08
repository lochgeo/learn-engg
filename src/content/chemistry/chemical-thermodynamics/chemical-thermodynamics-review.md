## Your study plan for this chapter

Chemical thermodynamics is one chain, not eight formulas: energy accounting → constant-pressure heat → enthalpy construction → direction → the system-only test → the equilibrium bridge. A focused pass takes about **three hours**:

| Step | Revisit | Minutes |
| --- | --- | --- |
| 1 | Systems, state functions and the first law | 25 |
| 2 | Enthalpy and thermochemical equations | 25 |
| 3 | Hess's law and enthalpies of formation | 30 |
| 4 | Entropy and the second law | 25 |
| 5 | Gibbs energy and spontaneity | 30 |
| 6 | Gibbs energy and equilibrium | 25 |
| 7 | This mastery check | 25 |

After each concept module, close the file and rebuild its key equation on blank paper — including *why* each sign is what it is. Only then attempt its questions without the reveals. When you finish the plan, take a short break, then attempt the **JEE Main timed practice** module as a 50-minute no-notes paper; its value is in tool selection under time pressure, not in learning new content.

## First choose the tool

| Clue in the question | Reach for | Check before using |
| --- | --- | --- |
| Heat and work both given | $\Delta U = q + w$ | Chemistry signs: $w>0$ on the system |
| Gas expands against constant $P_{\text{ex}}$ | $w = -P_{\text{ex}}\Delta V$ | Convert L·atm ($101.3\ \text{J}$) before adding to joules |
| Rigid vessel / bomb calorimeter | $\Delta U = q_V$ | The answer is not a $\Delta H$ |
| Constant pressure, heat asked or given | $q_P = \Delta H$ | Only $PV$ work assumed |
| $\Delta U$ given, $\Delta H$ asked (gases) | $\Delta H = \Delta U + \Delta n_gRT$ | Count only gaseous moles |
| Target reaction has no measured $\Delta H$ | Hess's law / $\Delta_\text{f}H^\circ$ tables | Reverse flips sign; scale multiplies |
| Only bond enthalpies available | broken − formed | Gas phase only; answer is an estimate |
| Entropy change of a reaction | $S^\circ_m$ sums (products − reactants) | Elements are NOT zero here |
| Predicting sign of $\Delta S$ | moles of gas, phase, temperature | Gas count dominates |
| Phase change at its transition $T$ | $\Delta S = \Delta H_{\text{transition}}/T$ | Use kelvin for $T$ |
| Spontaneity at a given $T$ | $\Delta G = \Delta H - T\Delta S$ | $\Delta S$ in kJ·K⁻¹; $T$ in kelvin |
| Switch temperature | $T = \Delta H/\Delta S$ | Only valid when signs oppose |
| $K$ from $\Delta G^\circ$ (or back) | $\Delta G^\circ = -RT\ln K$ | $-5.71\ \text{kJ}$ per decade at 298 K |
| $K$ at another temperature | van 't Hoff two-point form | Needs sign of $\Delta H^\circ$ |
| Direction from current mixture | $\Delta G = \Delta G^\circ + RT\ln Q$ | Compare $Q$ to $K$, not $\Delta G^\circ$ alone |

## Mastery check

Attempt each without looking at the answer first. Standard data you may need are given inside the questions; $R = 8.314\ \text{J\,K}^{-1}\text{mol}^{-1}$, $T = 298\ \text{K}$ unless stated.

### 1. First-law bookkeeping

A gas absorbs $600\ \text{J}$ of heat and expands from $5.0\ \text{L}$ to $10.0\ \text{L}$ against a constant $1.0\ \text{atm}$. Find $\Delta U$.

<details><summary>Answer and reasoning</summary>

$w = -P_{\text{ex}}\Delta V = -(1.0)(5.0) = -5.0\ \text{L·atm} = -507\ \text{J}$. $\Delta U = q + w = 600 - 507 = +93\ \text{J}$. Most of the incoming heat is spent pushing the atmosphere back; only a small surplus stays as internal energy.
</details>

### 2. Which list is which?

Classify: $U$, $q$, $T$, $w$, $H$, and state which four rows of the first-law special cases force $\Delta U$ to equal $q$, or to vanish.

<details><summary>Answer and reasoning</summary>

$U$, $T$, $H$: state functions. $q$, $w$: path functions. $\Delta U = q$ when $w=0$: rigid vessel (isochoric) and free expansion. $\Delta U = 0$: cyclic processes and isolated systems (and ideal-gas isothermal changes).
</details>

### 3. From $\Delta U$ to $\Delta H$

For $\mathrm{H_2(g) + \tfrac12 O_2(g) \rightarrow H_2O(l)}$, $\Delta U = -282.1\ \text{kJ\,mol}^{-1}$ at $298\ \text{K}$. Find $\Delta H$.

<details><summary>Answer and reasoning</summary>

$\Delta n_g = 0 - (1 + 0.5) = -1.5$. $\Delta H = \Delta U + \Delta n_gRT = -282.1 + (-1.5)(2.479) = -282.1 - 3.7 = -285.8\ \text{kJ\,mol}^{-1}$ — the standard enthalpy of formation of liquid water.
</details>

### 4. A Hess construction

Given $\Delta_\text{c}H^\circ$: graphite $-393.5$ and $\mathrm{CH_4}$ $-890.3\ \text{kJ\,mol}^{-1}$, and $\Delta_\text{f}H^\circ(\mathrm{H_2O(l)}) = -285.8\ \text{kJ\,mol}^{-1}$, find $\Delta_\text{f}H^\circ(\mathrm{CH_4})$.

<details><summary>Answer and reasoning</summary>

Elements burned, then un-burn the fuel: $\Delta H = -393.5 + 2(-285.8) + 890.3 = -74.8\ \text{kJ\,mol}^{-1}$. The $\mathrm{CO_2}$ and $\mathrm{H_2O}$ produced by the element-combustions are exactly the methane-combustion products, so they cancel.
</details>

### 5. Combustion from tables

Ethane: $\Delta_\text{f}H^\circ = -84.7\ \text{kJ\,mol}^{-1}$. Find $\Delta_\text{c}H^\circ$ for $\mathrm{C_2H_6(g) + \tfrac72 O_2(g) \rightarrow 2CO_2(g) + 3H_2O(l)}$ ($\Delta_\text{f}H^\circ$: CO₂ −393.5, H₂O(l) −285.8).

<details><summary>Answer and reasoning</summary>

Products: $2(-393.5) + 3(-285.8) = -787.0 - 857.4 = -1644.4$. Subtract reactant: $-1644.4 - (-84.7) = -1559.7\ \text{kJ\,mol}^{-1}$. Negative (a fuel), and about $52\ \text{kJ\,g}^{-1}$ — hydrocarbon territory.
</details>

### 6. Bond-enthalpy estimate

Estimate $\Delta H$ for $\mathrm{N_2(g) + 3H_2(g) \rightarrow 2NH_3(g)}$ with bond enthalpies N≡N 945, H–H 436, N–H $391\ \text{kJ\,mol}^{-1}$.

<details><summary>Answer and reasoning</summary>

Broken: $945 + 3(436) = 2253$. Formed: $6(391) = 2346$. $\Delta H \approx 2253 - 2346 = -93\ \text{kJ\,mol}^{-1}$. Compare the exact tabulated $-92.2$: averaging bonds works well when the same bond types appear on both sides.
</details>

### 7. Entropy from absolute data

$S^\circ_m$: NO $210.8$, O₂ $205.0$, NO₂ $240.1\ \text{J\,K}^{-1}\text{mol}^{-1}$. Find $\Delta S^\circ$ for $\mathrm{2NO(g) + O_2(g) \rightarrow 2NO_2(g)}$.

<details><summary>Answer and reasoning</summary>

$\Delta S^\circ = 2(240.1) - [2(210.8) + 205.0] = 480.2 - 626.6 = -146.4\ \text{J\,K}^{-1}\text{mol}^{-1}$. Three gas moles become two, so the negative sign was expected; the magnitude, tens of J per mole of gas lost, is typical.
</details>

### 8. Who gains the entropy?

Water freezes at $263\ \text{K}$ with $\Delta H_{\text{fus}} = 6.01\ \text{kJ\,mol}^{-1}$, $\Delta S_{\text{fus}} = 22.0\ \text{J\,K}^{-1}\text{mol}^{-1}$. Compute $\Delta S_{\text{sys}}$, $\Delta S_{\text{surr}}$ and $\Delta S_{\text{total}}$ for the freezing.

<details><summary>Answer and reasoning</summary>

Freezing flips fusion: $\Delta S_{\text{sys}} = -22.0\ \text{J\,K}^{-1}\text{mol}^{-1}$. The released heat $6010\ \text{J}$ enters the surroundings at $263\ \text{K}$: $\Delta S_{\text{surr}} = 6010/263 = +22.9$. Total $= +0.9\ \text{J\,K}^{-1}\text{mol}^{-1} > 0$ — the second law survives even though the system orders itself. At $273\ \text{K}$ the same numbers give total $\approx 0$: equilibrium.
</details>

### 9. Temperature decides

A reaction has $\Delta H^\circ = -120\ \text{kJ\,mol}^{-1}$, $\Delta S^\circ = -150\ \text{J\,K}^{-1}\text{mol}^{-1}$. Find $\Delta G^\circ$ at $298\ \text{K}$ and at $900\ \text{K}$, and locate the switch.

<details><summary>Answer and reasoning</summary>

$298\ \text{K}$: $\Delta G^\circ = -120 - (298)(-0.150) = -120 + 44.7 = -75.3\ \text{kJ\,mol}^{-1}$ (spontaneous). $900\ \text{K}$: $\Delta G^\circ = -120 + 135 = +15.0\ \text{kJ\,mol}^{-1}$ (not). Switch at $T = \Delta H/\Delta S = 120\,000/150 = 800\ \text{K}$. Opposed signs with $\Delta H<0,\Delta S<0$: spontaneous *below* the switch.
</details>

### 10. Equilibrium from Gibbs energy

For a reaction at $298\ \text{K}$, $\Delta G^\circ = -13.1\ \text{kJ\,mol}^{-1}$. Find $K$.

<details><summary>Answer and reasoning</summary>

$\ln K = 13\,100/2479 = 5.29$, so $K = e^{5.29} \approx 2.0\times10^{2}$. Cross-check with the decade rule: $13.1/5.71 \approx 2.3$ decades, $K \approx 10^{2.3} = 2\times10^{2}$. Products favoured, but not overwhelmingly.
</details>

## Self-check

You are ready for the timed set when you can:

- state which of $q$, $w$, $U$, $H$, $T$ are state functions and use $\Delta U = q+w$ with correct signs, converting L·atm without being told;
- explain why a bomb calorimeter reads $\Delta U$ and convert it to $\Delta H$ via $\Delta n_gRT$;
- build any reaction enthalpy from formation or combustion data, and estimate one from bond enthalpies while naming the estimate's two weaknesses;
- predict the sign of a reaction's $\Delta S$ from gas counts and compute $\Delta S = \Delta H/T$ for a phase change;
- run the four-row sign table for $\Delta G = \Delta H - T\Delta S$ from memory and find a switch temperature;
- go between $\Delta G^\circ$ and $K$ with the $5.71\ \text{kJ}$ decade rule and say which way $K$ moves on heating for a given $\Delta H^\circ$;
- catch yourself before the kJ-versus-J and Celsius-versus-kelvin slips.

If any item feels shaky, revisit that module and redo its questions without the reveals.
