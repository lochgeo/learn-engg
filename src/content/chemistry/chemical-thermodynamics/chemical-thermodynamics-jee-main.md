## JEE Main sprint: how to use this set

This is a **50-minute, no-notes** paper covering the whole Chemical Thermodynamics chapter: first law, enthalpy, Hess's law, entropy, Gibbs energy and the equilibrium bridge. Spend roughly 15 minutes on Section A, 15 on Section B, 10 on Section C and 10 on Section D. Flag any question after 90 seconds and move on; a stuck exotherm costs the whole paper.

The habit that earns marks is naming the tool before writing numbers: is this a $\Delta U$ ledger, a Hess construction, a $\Delta G$ sign analysis, or a $K$ conversion? Every question below is one of those four.

## Conditions sheet

| You are given | Start with | Watch out |
| --- | --- | --- |
| Heat and work | $\Delta U = q + w$ | $w=-P_{\text{ex}}\Delta V$; L·atm $=101.3\ \text{J}$ |
| $\Delta U$ of a gas reaction, want $\Delta H$ | $\Delta H = \Delta U + \Delta n_g RT$ | gases only in $\Delta n_g$ |
| Formation/combustion data | $\Delta H^\circ = \sum\nu\Delta_\text{f}H^\circ(\text{prod}) - \sum\nu\Delta_\text{f}H^\circ(\text{react})$ | elements at zero; coefficients scale |
| Bond enthalpies | broken − formed | gas phase; an estimate |
| $S^\circ_m$ values | products − reactants | absolute entropies, elements NOT zero |
| Phase change at $T_{\text{trans}}$ | $\Delta S = \Delta H_{\text{trans}}/T$ | kelvin |
| $\Delta H$, $\Delta S$, a temperature | $\Delta G = \Delta H - T\Delta S$ | J vs kJ; switch at $T=\Delta H/\Delta S$ |
| $\Delta G^\circ$ or $K$ | $\Delta G^\circ = -RT\ln K$ | $5.71\ \text{kJ}$ per decade at $298\ \text{K}$ |
| $K$ at two temperatures | $\ln\frac{K_2}{K_1} = \frac{\Delta H^\circ}{R}\left(\frac{1}{T_1}-\frac{1}{T_2}\right)$ | exothermic: $K$ falls as $T$ rises |

Constants: $R = 8.314\ \text{J\,K}^{-1}\text{mol}^{-1}$; take $T = 298\ \text{K}$ unless stated. $RT = 2.48\ \text{kJ\,mol}^{-1}$ at $298\ \text{K}$.

<learning-block type="mistake" title="Fast sanity checks">

Entropy in $\text{J\,K}^{-1}$ joined to enthalpy in kJ is the chapter's cheapest mark-loser. Before writing a $\Delta G$, convert $\Delta S$ by $10^{-3}$. If your $K$ for a combustion is tiny or your switch temperature is negative or near $0\ \text{K}$, the sign of $\Delta S$ or the units have already gone wrong.

</learning-block>

## Section A — 10 rapid MCQs

### 1. Property types

Which of the following is an extensive property?

- A. temperature
- B. pressure
- C. volume
- D. density

<details><summary>Answer</summary>

**C.** Volume halves when the sample halves, so it is extensive. Temperature, pressure and density are intensive (density is even a ratio of two extensive properties).
</details>

### 2. First-law arithmetic

A gas absorbs $500\ \text{J}$ of heat and does $200\ \text{J}$ of expansion work on the surroundings. Its change in internal energy is:

- A. $+700\ \text{J}$
- B. $+300\ \text{J}$
- C. $-300\ \text{J}$
- D. $-700\ \text{J}$

<details><summary>Answer</summary>

**B.** With $q = +500\ \text{J}$ and work done *by* the gas meaning $w = -200\ \text{J}$: $\Delta U = q + w = 500 - 200 = +300\ \text{J}$.
</details>

### 3. $\Delta H$ against $\Delta U$

For $\mathrm{2SO_2(g) + O_2(g) \rightarrow 2SO_3(g)}$ at $298\ \text{K}$, the relation between $\Delta H$ and $\Delta U$ is:

- A. $\Delta H = \Delta U + RT$
- B. $\Delta H = \Delta U - RT$
- C. $\Delta H = \Delta U$
- D. $\Delta H = \Delta U - 2RT$

<details><summary>Answer</summary>

**B.** $\Delta n_g = 2 - 3 = -1$, so $\Delta H = \Delta U + \Delta n_gRT = \Delta U - RT$.
</details>

### 4. Zero of the formation scale

Which species has $\Delta_\text{f}H^\circ = 0$ at $298\ \text{K}$?

- A. $\mathrm{Br_2(g)}$
- B. $\mathrm{Br_2(l)}$
- C. $\mathrm{Br(g)}$
- D. $\mathrm{Br_2(aq)}$

<details><summary>Answer</summary>

**B.** The standard state of bromine is the liquid, so only $\mathrm{Br_2(l)}$ is the reference form. Gaseous bromine costs its vaporisation enthalpy above the zero.
</details>

### 5. Hess construction

Given $\Delta H^\circ$: $\mathrm{C(graphite) + O_2 \rightarrow CO_2}$ is $-393.5\ \text{kJ\,mol}^{-1}$ and $\mathrm{CO + \tfrac12 O_2 \rightarrow CO_2}$ is $-283.0\ \text{kJ\,mol}^{-1}$, then $\Delta_\text{f}H^\circ$ of CO is:

- A. $-676.5\ \text{kJ\,mol}^{-1}$
- B. $-110.5\ \text{kJ\,mol}^{-1}$
- C. $+110.5\ \text{kJ\,mol}^{-1}$
- D. $-55.3\ \text{kJ\,mol}^{-1}$

<details><summary>Answer</summary>

**B.** Subtract the second step from the first (reverse it and add): $-393.5 + 283.0 = -110.5\ \text{kJ\,mol}^{-1}$.
</details>

### 6. Bond enthalpies

With bond enthalpies H–H 436, Cl–Cl 243, H–Cl $431\ \text{kJ\,mol}^{-1}$, $\Delta H$ for $\mathrm{H_2 + Cl_2 \rightarrow 2HCl}$ is:

- A. $-183\ \text{kJ\,mol}^{-1}$
- B. $+183\ \text{kJ\,mol}^{-1}$
- C. $-685\ \text{kJ\,mol}^{-1}$
- D. $+95\ \text{kJ\,mol}^{-1}$

<details><summary>Answer</summary>

**A.** Broken: $436 + 243 = 679$. Formed: $2 \times 431 = 862$. $\Delta H = 679 - 862 = -183\ \text{kJ\,mol}^{-1}$.
</details>

### 7. Entropy sign

Which reaction has $\Delta S^\circ > 0$?

- A. $\mathrm{N_2(g) + 3H_2(g) \rightarrow 2NH_3(g)}$
- B. $\mathrm{CaCO_3(s) \rightarrow CaO(s) + CO_2(g)}$
- C. $\mathrm{2NO(g) + O_2(g) \rightarrow 2NO_2(g)}$
- D. $\mathrm{H_2O(g) \rightarrow H_2O(l)}$

<details><summary>Answer</summary>

**B.** A solid releases a full mole of gas — the largest entropy gain class. A and C lose gas moles; D condenses.
</details>

### 8. Entropy of vaporisation

A liquid boils at $350\ \text{K}$ with $\Delta_\text{vap}H = 31.5\ \text{kJ\,mol}^{-1}$. Its $\Delta_\text{vap}S$ is:

- A. $112\ \text{J\,K}^{-1}\text{mol}^{-1}$
- B. $90.0\ \text{J\,K}^{-1}\text{mol}^{-1}$
- C. $0.090\ \text{J\,K}^{-1}\text{mol}^{-1}$
- D. $9.0\ \text{J\,K}^{-1}\text{mol}^{-1}$

<details><summary>Answer</summary>

**B.** At the boiling point the change is reversible: $\Delta S = 31\,500/350 = 90.0\ \text{J\,K}^{-1}\text{mol}^{-1}$, inside the normal $85$–$110$ vaporisation window.
</details>

### 9. Gibbs sign analysis

A reaction has $\Delta H^\circ = -84\ \text{kJ\,mol}^{-1}$ and $\Delta S^\circ = +125\ \text{J\,K}^{-1}\text{mol}^{-1}$. At $298\ \text{K}$, $\Delta G^\circ$ is:

- A. $-46.7\ \text{kJ\,mol}^{-1}$
- B. $-121.3\ \text{kJ\,mol}^{-1}$
- C. $+121.3\ \text{kJ\,mol}^{-1}$
- D. $-37.3\ \text{kJ\,mol}^{-1}$

<details><summary>Answer</summary>

**B.** $\Delta G^\circ = -84 - (298.15)(0.125) = -84 - 37.3 = -121.3\ \text{kJ\,mol}^{-1}$. Both terms are favourable, so the reaction is spontaneous at every temperature.
</details>

### 10. Switch temperature

For a process with $\Delta H^\circ = +150\ \text{kJ\,mol}^{-1}$ and $\Delta S^\circ = +125\ \text{J\,K}^{-1}\text{mol}^{-1}$, it becomes spontaneous above:

- A. $800\ \text{K}$
- B. $1200\ \text{K}$
- C. $0.83\ \text{K}$
- D. $19\,950\ \text{K}$

<details><summary>Answer</summary>

**B.** $T = \Delta H/\Delta S = 150\,000/125 = 1200\ \text{K}$. Option C is the trap of dividing in mixed kJ/J units; D forgets to divide at all.
</details>

## Section B — 5 numerical-value questions

### 11. Expansion work

One mole of gas expands from $2.0\ \text{L}$ to $6.0\ \text{L}$ against a constant external pressure of $2.0\ \text{atm}$. Find $w$ in joules.

<details><summary>Answer</summary>

$w = -P_{\text{ex}}\Delta V = -(2.0)(4.0) = -8.0\ \text{L·atm}$. With $1\ \text{L·atm} = 101.3\ \text{J}$: $w = -810\ \text{J}$ (the gas does the work, so $w$ on the system is negative).
</details>

### 12. Bomb to flame

For $\mathrm{H_2(g) + \tfrac12 O_2(g) \rightarrow H_2O(l)}$ the bomb-calorimeter value is $\Delta U = -282.1\ \text{kJ\,mol}^{-1}$ at $298\ \text{K}$. Find $\Delta H$.

<details><summary>Answer</summary>

$\Delta n_g = 0 - 1.5 = -1.5$. $\Delta H = -282.1 + (-1.5)(2.479) = -282.1 - 3.7 = -285.8\ \text{kJ\,mol}^{-1}$.
</details>

### 13. Formation from combustion

Using $\Delta_\text{c}H^\circ$: C(graphite) $-393.5$, $\mathrm{H_2(g)}$ $-285.8$, $\mathrm{CH_4(g)}$ $-890.3\ \text{kJ\,mol}^{-1}$, find $\Delta_\text{f}H^\circ$ of methane.

<details><summary>Answer</summary>

$\Delta_\text{f}H^\circ(\mathrm{CH_4}) = -393.5 + 2(-285.8) - (-890.3) = -965.1 + 890.3 = -74.8\ \text{kJ\,mol}^{-1}$.
</details>

### 14. From Gibbs energy to $K$

A reaction at $298\ \text{K}$ has $\Delta G^\circ = -5.71\ \text{kJ\,mol}^{-1}$. Find $K$.

<details><summary>Answer</summary>

$\ln K = 5710/2479 = 2.303$, so $K = e^{2.303} = 10$. (The decade rule gives it instantly: $5.71\ \text{kJ}$ per factor of ten.)
</details>

### 15. Kiln temperature

For $\mathrm{CaCO_3(s) \rightarrow CaO(s) + CO_2(g)}$, $\Delta H^\circ = +178.3\ \text{kJ\,mol}^{-1}$ and $\Delta S^\circ = +160.5\ \text{J\,K}^{-1}\text{mol}^{-1}$. Find the temperature above which decomposition becomes spontaneous.

<details><summary>Answer</summary>

$T = \Delta H/\Delta S = 178\,300/160.5 = 1111\ \text{K}$ (about $838\,^\circ\text{C}$) — the working neighbourhood of a lime kiln.
</details>

## Section C — 3 assertion–reason questions

For each pair, choose: **(a)** both true and R explains A; **(b)** both true but R does not explain A; **(c)** A true, R false; **(d)** A false, R true.

### 16.

**A:** In an isothermal change of an ideal gas, $\Delta U = 0$ even though the gas may do work and absorb heat.
**R:** The internal energy of an ideal gas depends only on its temperature.

<details><summary>Answer</summary>

**(a).** With $T$ fixed, $U(T)$ is fixed, so $\Delta U = 0$; the first law then gives $q = -w$, heat in exactly paying for work out. R is precisely the reason A holds.
</details>

### 17.

**A:** A reaction whose $\Delta G^\circ$ is large and negative must occur at an observable rate under ordinary conditions.
**R:** Thermodynamics does not determine reaction rates; the rate depends on the activation energy of the pathway.

<details><summary>Answer</summary>

**(d).** A is false — diamond, hydrogen-peroxide solution and a matchless fuel–air mixture all have negative $\Delta G$ and wait essentially forever. R is true and is exactly why A fails, but A itself is untrue, so the pairing scores as (d).
</details>

### 18.

**A:** For every spontaneous process, the sum $\Delta S_{\text{system}} + \Delta S_{\text{surroundings}}$ increases.
**R:** The entropy of a gaseous substance is greater than that of its liquid at the same temperature.

<details><summary>Answer</summary>

**(b).** Both statements are true — R is a correct general fact (gases have far more accessible microstates). But the second law (A) does not follow from the gas-versus-liquid ordering; R explains §4-type predictions, not the spontaneity criterion.
</details>

## Section D — 2 matching / multi-statement questions

### 19. Match the equation to its role

Match each relation in List I with its correct meaning in List II.

| List I | List II |
| --- | --- |
| (a) $q_V = \Delta U$ | (i) the condition for a reacting system at equilibrium |
| (b) $\Delta G = 0$ | (ii) the heat read by a bomb calorimeter |
| (c) $\Delta G^\circ = -RT\ln K$ | (iii) the entropy paid to a constant-pressure heat bath |
| (d) $\Delta S_{\text{surr}} = -\Delta H_{\text{sys}}/T$ | (iv) the bridge from standard Gibbs energy to equilibrium composition |

<details><summary>Answer</summary>

**(a)-(ii), (b)-(i), (c)-(iv), (d)-(iii).** A rigid vessel does no $PV$ work, so a bomb calorimeter reads $\Delta U$ (a). Zero driving force is the definition of equilibrium (b). The bridge equation converts a standard Gibbs energy into an equilibrium composition (c). And the relation in (d) computes the entropy a constant-pressure bath gains or loses from the heat $\Delta H_{\text{sys}}$ it receives, which is exactly (iii).
</details>

### 20. Statements about burning graphite

For $\mathrm{C(graphite) + O_2(g) \rightarrow CO_2(g)}$ at $298\ \text{K}$, with $\Delta_\text{f}H^\circ(\mathrm{CO_2}) = -393.5\ \text{kJ\,mol}^{-1}$ and $S^\circ_m$: C 5.7, O₂ 205.0, CO₂ 213.7 J K⁻¹mol⁻¹, consider:

- (i) $\Delta H^\circ < 0$.
- (ii) $\Delta S^\circ$ is large and positive.
- (iii) $\Delta S_{\text{surr}} \approx +1320\ \text{J\,K}^{-1}\text{mol}^{-1}$.
- (iv) $\Delta S_{\text{total}} > 0$.

Which combination is correct?

- A. (i) and (iv) only
- B. (i), (iii) and (iv) only
- C. (ii) and (iii) only
- D. (i), (ii), (iii) and (iv)

<details><summary>Answer</summary>

**B.** $\Delta H^\circ = -393.5\ \text{kJ\,mol}^{-1}$, so (i) is true. (ii) is false: $\Delta S^\circ = 213.7 - (5.7 + 205.0) = +3.0\ \text{J\,K}^{-1}\text{mol}^{-1}$ — one gas mole replaces one gas mole, so the system entropy barely moves. (iii) is true: $393\,500/298.15 = 1320\ \text{J\,K}^{-1}\text{mol}^{-1}$ paid into the bath. Then (iv) is true with total $\approx +1323$, and equivalently $\Delta G^\circ \approx -394.4\ \text{kJ\,mol}^{-1}$ — combustion is overwhelmingly spontaneous; its slowness at room temperature is kinetics, not thermodynamics.
</details>

## Review by error, not by score

| If you missed… | Revisit | Then retry |
| --- | --- | --- |
| 1–2, 11 | Systems, state functions and the first law | Rebuild $\Delta U = q + w$ with signs and the L·atm conversion |
| 3–4, 12 | Enthalpy and thermochemical equations | Redo $\Delta H = \Delta U + \Delta n_gRT$ with a gas-mole count |
| 5, 13 | Hess's law and enthalpies of formation | Two more constructions from combustion data |
| 6 | Hess's law (§5, bond enthalpies) | Check the broken-minus-formed order and gas-phase limits |
| 7–8, 18, 20 | Entropy and the second law | Gas-count predictions plus $\Delta S = \Delta H/T$ at transitions |
| 9–10, 15, 17 | Gibbs energy and spontaneity | The four-row sign table and $T = \Delta H/\Delta S$ |
| 14, 16, 19 | Gibbs energy and equilibrium | $\Delta G^\circ \leftrightarrow K$, the $5.71\ \text{kJ}$ decade rule |

<learning-block type="recap" title="Ready for the exam?">

Aim for at least 16 of 20 with a written tool choice for every question. A correct answer you cannot justify — *why* the sign, *which* convention — is a revision target, not a mastered skill. Section D exists to punish half-read data: always compute $\Delta S^\circ$ before trusting a "gas appears, so entropy rises" guess.

</learning-block>
