## Most reactions refuse to hold their volume still

The previous module ended with the rigid-vessel case: at constant volume, the heat absorbed equals $\Delta U$ and a bomb calorimeter measures it directly. But almost no real reaction is run that way. Burn fuel in an open vessel and the gases expand against the atmosphere; dissolve a salt and the solution's volume shifts slightly. The vessel stays at one pressure — the atmosphere's — while the volume does whatever it likes. That is the natural constraint of laboratory chemistry, and the heat exchanged under it deserves its own name and its own state function.

## 1. Defining enthalpy

Introduce

$$
H = U + PV.
$$

$U$, $P$ and $V$ are all state functions, so $H$ is a state function too. It is extensive (doubling the sample doubles $H$), and like $U$ we can only ever measure changes, never absolute values. The quantity $\Delta H$ is called the **enthalpy change**.

## 2. Why $\Delta H$ is the heat of reaction at constant pressure

Take the first law $\Delta U = q + w$ with only expansion work against a constant external pressure, $w = -P_{\text{ex}}\Delta V$. Now the pressure is held constant, so the system pressure and the external pressure share one value $P$ throughout:

$$
q_P = \Delta U + P\Delta V = (U_2 + PV_2) - (U_1 + PV_1) = \Delta(U + PV) = \Delta H.
$$

The whole point of defining $H$ is that last equals-sign: **at constant pressure, with only $PV$ work, the heat absorbed equals a state-function change.** A path function has hidden itself inside a state function. This is why tabulated reaction heats are enthalpies: they were measured in open vessels, and at $1\ \text{atm}$ or $1\ \text{bar}$ there is no need to convert anything.

## 3. Exothermic and endothermic

- **Exothermic:** $\Delta H < 0$. The products carry less enthalpy than the reactants, and the difference leaves as heat. Combustion, neutralisation, most combination reactions. A beaker running an exothermic reaction warms up because it is paying out energy to the surroundings.
- **Endothermic:** $\Delta H > 0$. Energy must be supplied; the products hold more enthalpy than the reactants. Vaporisation, thermal decomposition of carbonates, photosynthesis.

The sign is always written from the system's point of view. "The reaction releases $890\ \text{kJ}$ per mole of methane" and "$\Delta H = -890\ \text{kJ\,mol}^{-1}$" say the same thing; "$\Delta H = +890\ \text{kJ\,mol}^{-1}$" says the opposite and is a different reaction (the reverse one).

## 4. Reading a thermochemical equation

$$
\mathrm{CH_4(g) + 2O_2(g) \rightarrow CO_2(g) + 2H_2O(l)} \qquad \Delta H^\circ = -890.3\ \text{kJ}
$$

Every part of that line carries information:

- The **physical states** decide the number. If the water is written $\mathrm{H_2O(g)}$ instead of $\mathrm{H_2O(l)}$, the reaction is less exothermic by the condensation enthalpy of two moles of steam — the same fuel gives about $-802\ \text{kJ}$ with gaseous water.
- The **coefficients count moles**, not molecules as a scale. Doubling the equation doubles $\Delta H$; burning two moles of methane releases twice the energy.
- **Reversing** the equation flips the sign of $\Delta H$, because enthalpy is a state function: what you paid out coming, you must put in going back.
- Fractional coefficients are allowed and common: $\mathrm{H_2(g) + \tfrac12 O_2(g) \rightarrow H_2O(l)}$ carries $\Delta H^\circ = -285.8\ \text{kJ}$ per mole of water.

## 5. Standard states

The superscript $\circ$ marks data measured under the **standard state**: pressure of $1\ \text{bar}$, a specified temperature (conventionally $298.15\ \text{K}$ unless stated), the substance in its purest normal form, and for solutes a concentration of $1\ \text{mol L}^{-1}$. Standard enthalpy changes are written $\Delta H^\circ$. Two habits to build now: always state the temperature, because $\Delta H$ drifts slightly with it, and always state the physical state, because it matters far more than the temperature does.

Standard states have one more consequence: the reference point. We define $\Delta H^\circ$ for forming any element in its standard state from itself as zero — oxygen as $\mathrm{O_2(g)}$, carbon as graphite, mercury as liquid. That zero is an agreed baseline, and it is the lever Hess's law, the next module, uses to build every reaction enthalpy from tabulated fragments.

## 6. How $\Delta H$ differs from $\Delta U$

The two heat measures differ by the expansion term. For reacting ideal gases, only the change in gas amount matters:

$$
\Delta H = \Delta U + \Delta n_g RT,
$$

where $\Delta n_g$ is (moles of gaseous products) minus (moles of gaseous reactants) from the balanced equation. Solids and liquids contribute negligibly to $PV$. At $298\ \text{K}$, one unit of $\Delta n_g$ costs about $RT = 2.48\ \text{kJ\,mol}^{-1}$ — small, but not rounding error.

### Worked example: from bomb data to flame data

Ethanol burns in a bomb calorimeter (constant volume), which measures $\Delta U = -1364.5\ \text{kJ\,mol}^{-1}$ at $298\ \text{K}$:

$$
\mathrm{C_2H_5OH(l) + 3O_2(g) \rightarrow 2CO_2(g) + 3H_2O(l)}.
$$

Find the constant-pressure enthalpy of combustion.

**Step 1 — gas count.** $\Delta n_g = 2 - 3 = -1$ (the liquid ethanol and water do not enter the count).

**Step 2 — correction.**

$$
\Delta H = \Delta U + \Delta n_g RT = -1364.5 + (-1)(8.314\times10^{-3})(298) = -1364.5 - 2.48 = -1367.0\ \text{kJ\,mol}^{-1}.
$$

**Sanity check.** The reaction destroys one mole of gas, so the atmosphere does compression work *on* it; the constant-pressure process must dump slightly **more** energy as heat than the constant-volume one. $\Delta H$ is indeed more negative than $\Delta U$.

<learning-block type="mistake" title="Enthalpy errors that cost marks">

- **Writing $\Delta H$ for $\Delta U$ when $\Delta n_g \neq 0$.** For $\mathrm{N_2(g) + 3H_2(g) \rightarrow 2NH_3(g)}$, $\Delta n_g = -2$, so the two differ by about $5\ \text{kJ}$ at $298\ \text{K}$ — and a bomb calorimeter, by construction, gives $\Delta U$, not $\Delta H$.
- **Dropping the states.** "$\Delta H$ for methane combustion $=-890\ \text{kJ}$" is incomplete until you say whether the water is liquid or vapour; the difference is roughly $44\ \text{kJ}$ per mole of water.
- **Halving an equation and leaving $\Delta H$ alone.** Scale the coefficients, and the enthalpy scales with them. Reverse the reaction, and only the sign flips — never the magnitude.

</learning-block>

## Try it yourself

**A.** Given $\mathrm{2H_2(g) + O_2(g) \rightarrow 2H_2O(l)}$ with $\Delta H^\circ = -571.6\ \text{kJ}$, find $\Delta H^\circ$ for $\mathrm{H_2O(l) \rightarrow H_2(g) + \tfrac12 O_2(g)}$.

<details><summary>Show the reasoning</summary>

Reverse and halve. Reversing flips the sign to $+571.6\ \text{kJ}$; halving divides by 2, giving $\Delta H^\circ = +285.8\ \text{kJ}$. Decomposing liquid water is endothermic, exactly as it must be if forming it is exothermic.
</details>

**B.** For a reaction with $\Delta U = -87.2\ \text{kJ\,mol}^{-1}$ and $\Delta n_g = -2$ at $298\ \text{K}$, find $\Delta H$.

<details><summary>Show the reasoning</summary>

$\Delta H = \Delta U + \Delta n_g RT = -87.2 + (-2)(8.314\times10^{-3})(298) = -87.2 - 4.96 = -92.2\ \text{kJ\,mol}^{-1}$. (This is the real numbers for ammonia synthesis.)
</details>

**C.** Why does $\mathrm{H_2(g) + I_2(g) \rightarrow 2HI(g)}$ have $\Delta H \approx \Delta U$?

<details><summary>Show the reasoning</summary>

$\Delta n_g = 2 - 2 = 0$, so the correction term $\Delta n_g RT$ vanishes. No net gas is created or destroyed, so no net expansion work against the atmosphere, and both heat measures agree.
</details>

## Remember

- $H = U + PV$ exists for one reason: at constant pressure with only $PV$ work, $q_P = \Delta H$.
- Exothermic means $\Delta H<0$ **for the system**; the surroundings warm up. The sign is a statement about direction of energy flow.
- A thermochemical equation is a contract: states, coefficients and $\Delta H$ must scale together; reversing flips only the sign.
- $\Delta H = \Delta U + \Delta n_g RT$ with $\Delta n_g$ counting only gases; one gas mole is worth about $2.48\ \text{kJ}$ at room temperature.
- Standard state means $1\ \text{bar}$, usually $298.15\ \text{K}$, and elements in their reference forms sit at the zero of the enthalpy scale.

Tabulated $\Delta H^\circ$ values exist for thousands of reactions, but many useful ones — like forming CO without over-burning to CO$_2$ — can never be measured directly. The next module shows how Hess's law manufactures those enthalpies from ones you can measure.
