## The reaction you cannot measure directly

Burn carbon in a limited air supply and you want the enthalpy of $\mathrm{C(s) + \tfrac12 O_2(g) \rightarrow CO(g)}$. In practice the flame always makes a mixture of CO and CO$_2$, so the calorimeter reports a blend and you never get the clean number. Thermodynamics has a workaround: if enthalpy is a state function, then **the path does not matter**. Burn carbon all the way to CO$_2$ (easy to measure), then consider the reverse of burning CO to CO$_2$ (also easy), and the difference must be the enthalpy you could never measure directly. That trick is Hess's law, and it turns a table of measurable enthalpies into a construction kit for every reaction chemists care about.

## 1. Hess's law

> The total enthalpy change of a reaction is the sum of the enthalpy changes of the individual steps into which it can be divided, provided the starting and ending states are the same.

This is not a separate discovery — it is a direct consequence of $\Delta H$ being a state function (and of constant-pressure heat being heat at all). You may add thermochemical equations like algebra: multiply an equation by a number and its $\Delta H$ scales the same way; reverse an equation and flip the sign; add equations and any species that appears on both sides cancels, taking its enthalpy contribution with it. If the summed equations give the target reaction, the summed enthalpies give the target enthalpy, exactly.

## 2. Standard enthalpy of formation

The **standard enthalpy of formation** $\Delta_\text{f}H^\circ$ of a compound is the enthalpy change when one mole of it forms from its elements, each in its standard state, at the stated temperature ($1\ \text{bar}$, usually $298.15\ \text{K}$).

$$
\mathrm{C(graphite) + O_2(g) \rightarrow CO_2(g)} \qquad \Delta_\text{f}H^\circ = -393.5\ \text{kJ\,mol}^{-1}
$$

By the convention fixed in the last module, $\Delta_\text{f}H^\circ = 0$ for every element in its standard state: $\mathrm{O_2(g)}$, $\mathrm{H_2(g)}$, $\mathrm{Br_2(l)}$, graphite. Ozone $\mathrm{O_3(g)}$ is *not* the standard form of oxygen, so its $\Delta_\text{f}H^\circ$ is positive; diamond is not graphite's standard reference either, and sits $+1.9\ \text{kJ\,mol}^{-1}$ above it.

Once formation enthalpies are tabulated, any reaction enthalpy follows one recipe — products built from elements minus reactants un-built from elements:

$$
\Delta H^\circ_{\text{rxn}} = \sum \nu\, \Delta_\text{f}H^\circ(\text{products}) - \sum \nu\, \Delta_\text{f}H^\circ(\text{reactants}),
$$

with each term multiplied by its stoichiometric coefficient $\nu$.

### Worked example: methane combustion from tables

$$
\mathrm{CH_4(g) + 2O_2(g) \rightarrow CO_2(g) + 2H_2O(l)}
$$

| Species | $\Delta_\text{f}H^\circ/(\text{kJ\,mol}^{-1})$ |
| --- | --- |
| CH₄(g) | −74.8 |
| O₂(g) | 0 |
| CO₂(g) | −393.5 |
| H₂O(l) | −285.8 |

$$
\Delta H^\circ = \big[(-393.5) + 2(-285.8)\big] - \big[(-74.8) + 2(0)\big] = -965.1 + 74.8 = -890.3\ \text{kJ\,mol}^{-1}.
$$

**Sanity check.** Combustion must be strongly exothermic — methane is a fuel — and $-890\ \text{kJ}$ per mole (about $55\ \text{kJ}$ per gram) is the right order for a hydrocarbon. Had the arithmetic given a positive value, the subtraction order would be the first thing to re-check: it is always products minus reactants.

## 3. Building an unmeasurable enthalpy: CO

Target: $\mathrm{C(graphite) + \tfrac12 O_2(g) \rightarrow CO(g)}$, with the measurable steps

$$
\begin{aligned}
\mathrm{C(graphite) + O_2(g) &\rightarrow CO_2(g)} & \Delta H^\circ &= -393.5\ \text{kJ} \\
\mathrm{CO(g) + \tfrac12 O_2(g) &\rightarrow CO_2(g)} & \Delta H^\circ &= -283.0\ \text{kJ}
\end{aligned}
$$

Reverse the second equation ($\Delta H$ becomes $+283.0$) and add it to the first. $\mathrm{CO_2}$ cancels from both sides and one net $\mathrm{CO}$ formation remains:

$$
\Delta_\text{f}H^\circ(\mathrm{CO}) = -393.5 + 283.0 = -110.5\ \text{kJ\,mol}^{-1}.
$$

The same bookkeeping, run in reverse, is how you would *measure* the enthalpy of a reaction you cannot run cleanly: measure the steps you can, and let state-function arithmetic deliver the one you cannot.

## 4. Combustion and other named enthalpies

The **standard enthalpy of combustion** $\Delta_\text{c}H^\circ$ is the enthalpy change when one mole of a substance burns completely in oxygen, with everything in its standard state — for organic compounds that means $\mathrm{CO_2(g)}$ and $\mathrm{H_2O(l)}$. It is always negative. Methane's $-890.3\ \text{kJ\,mol}^{-1}$ from the worked example is $\Delta_\text{c}H^\circ$ for methane. Combustion data rank fuels (per mole or, more fairly for transport, per gram), and — as the CO construction shows — they can be recycled to build formation enthalpies of any compound made of C, H or both.

Other named enthalpies you will meet: atomisation (forming one mole of gaseous atoms), solution, neutralisation (about $-57\ \text{kJ\,mol}^{-1}$ for any strong acid with any strong base — because the net reaction is always $\mathrm{H^+ + OH^- \rightarrow H_2O}$). All obey Hess's law equally, because none of them escapes being a state function.

## 5. Bond enthalpies: a second route

Bond breaking in the gas phase is always endothermic; bond making always releases energy. If a reaction is imagined as "pop every bond in the gaseous reactants, then rebuild the gaseous products from bare atoms",

$$
\Delta H \approx \sum \text{bond enthalpies(bonds broken)} - \sum \text{bond enthalpies(bonds formed)}.
$$

Bond enthalpies are **average** values taken over many molecules (the C–H bond in methane is quoted as $415\ \text{kJ\,mol}^{-1}$; the real four C–H steps differ), and the method applies strictly to the gas phase, so this route gives estimates, while the formation-enthalpy route gives exact tabulated answers.

### Worked example: hydrogen chloride from bond data

$$
\mathrm{H_2(g) + Cl_2(g) \rightarrow 2HCl(g)}
$$

Broken: $\mathrm{H-H}\ (436) + \mathrm{Cl-Cl}\ (243) = 679\ \text{kJ}$. Formed: $2\times\mathrm{H-Cl}\ (431) = 862\ \text{kJ}$.

$$
\Delta H \approx 679 - 862 = -183\ \text{kJ\,mol}^{-1}\ \text{of reaction}.
$$

**Sanity check.** More energy comes back from making two strong H–Cl bonds than the two modest bonds cost to break, so the reaction is exothermic — consistent with the well-known vigour of the combination.

<learning-block type="mistake" title="Hess's-law bookkeeping failures">

- **Reversing the equation but not the sign.** The cancellation trick only works if every reversal flips that step's $\Delta H$.
- **Doubling an equation and forgetting to double its $\Delta H$.** Enthalpy is extensive: scale the reaction, scale the heat.
- **Writing a formation equation whose reactants are not elements in standard states.** $\Delta_\text{f}H^\circ$ is defined for exactly one mole of product from elements — $\mathrm{Na(s) + \tfrac12 Cl_2(g) \rightarrow NaCl(s)}$ qualifies; $\mathrm{Na(g) + Cl(g) \rightarrow NaCl(g)}$ does not.
- **Using bond enthalpies for reactions involving liquids or solids.** The gas-phase assumption breaks; condensation energies are missing from the balance.

</learning-block>

## Try it yourself

**A.** Use $\Delta_\text{c}H^\circ$: C(graphite) $-393.5$, $\mathrm{H_2}$ $-285.8$, $\mathrm{CH_4}$ $-890.3\ \text{kJ\,mol}^{-1}$ to find $\Delta_\text{f}H^\circ(\mathrm{CH_4})$ for $\mathrm{C + 2H_2 \rightarrow CH_4}$.

<details><summary>Show the reasoning</summary>

Take one C-burn + two H₂-burns, then subtract the methane combustion (reverse it and add): $\Delta H = -393.5 + 2(-285.8) - (-890.3) = -965.1 + 890.3 = -74.8\ \text{kJ\,mol}^{-1}$. The CO₂ and H₂O from burning the elements are exactly what burning the methane would have produced, so they cancel — which is why the recipe works.
</details>

**B.** Estimate $\Delta H$ for $\mathrm{H_2(g) + Br_2(g) \rightarrow 2HBr(g)}$ with bond enthalpies H–H 436, Br–Br 193, H–Br $366\ \text{kJ\,mol}^{-1}$.

<details><summary>Show the reasoning</summary>

Broken: $436 + 193 = 629$. Formed: $2 \times 366 = 732$. $\Delta H \approx 629 - 732 = -103\ \text{kJ\,mol}^{-1}$. Exothermic, and about $80\ \text{kJ}$ less vigorous than the HCl analogue — the H–Br bond is weaker and the reaction slightly less product-favoured, consistent with the group trend.
</details>

**C.** Why is $\Delta_\text{f}H^\circ(\mathrm{O_3(g)})$ positive even though ozone is a real, stable-ish molecule?

<details><summary>Show the reasoning</summary>

Formation is referenced to the *standard state* of oxygen, which is $\mathrm{O_2(g)}$ at $1\ \text{bar}$. Ozone is a higher-enthalpy allotrope: the tabulated data show making it from $\mathrm{O_2}$ costs about $+142\ \text{kJ\,mol}^{-1}$. "Zero of formation enthalpy" tags the most stable form, not every form.
</details>

## Remember

- Hess's law is state-function arithmetic: add equations, add $\Delta H$ values, and impossible reactions become computable.
- $\Delta H^\circ_{\text{rxn}} = \sum \Delta_\text{f}H^\circ(\text{products}) - \sum \Delta_\text{f}H^\circ(\text{reactants})$, each multiplied by its coefficient.
- Elements in their standard states are the zero of the formation scale; allotropes other than the standard one are not zero.
- Combustion enthalpies are always negative and can be recycled to obtain formation enthalpies of fuels.
- Bond enthalpies give broken-minus-formed estimates for gas-phase reactions only; treat them as estimates, not data.

Everything so far measures the *size* of energy changes. The first law says energy is conserved, yet not every energy-conserving reaction happens: heat never runs backwards on its own. The next module introduces the quantity that fixes the direction — entropy.
