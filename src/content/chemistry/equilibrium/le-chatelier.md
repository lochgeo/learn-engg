## The system knows better than we do

Follow the ICE tables of the last module and you can compute the new position after any disturbance. But there is a one-line rule that predicts the **direction** of the response instantly, without touching an equation:

> When a change is imposed on a system at equilibrium, the system shifts in the direction that **opposes** the change.

This is **Le Chatelier's principle**. It does not tell you *how far* the system shifts — that still needs an ICE calculation — but it tells you which way to look, and it fails only when applied carelessly. Let's see it apply, disturbance by disturbance.

## Change the concentration of one participant

For $\mathrm{N_2(g) + 3H_2(g) \rightleftharpoons 2NH_3(g)}$ at equilibrium:

- Add $\mathrm{H_2}$: the system consumes it — the forward reaction runs until a new balance holds.
- Remove $\mathrm{NH_3}$ continuously (say by condensing it out): the equilibrium keeps feeding $\mathrm{NH_3}$ forward, and reactants become nearly exhausted.
- Add something not involved (a noble gas): nothing happens to the equilibrium — see the pressure section for the subtle case.

The systematic reason is the reaction quotient: adding a reactant makes $Q$ fall below $K$, so the forward reaction restores $Q = K$. Removing a reactant does the opposite. Magnitudes matter too: if $Q$ was near zero or $K$ is extreme, tiny additions can still swing a lot.

## Change the pressure (of a gas equilibrium)

Compressing a gaseous mixture *increases every concentration*, so it is not the same as "adding one gas". The rule: compression favours the side with the **smaller total gaseous moles**.

$$
\mathrm{N_2(g) + 3H_2(g) \rightleftharpoons 2NH_3(g)}
\qquad
\Delta n = -2
$$

$4$ moles on the left against $2$ on the right, so compression favours ammonia. Easy checks:

- $\mathrm{PCl_5 \rightleftharpoons PCl_3 + Cl_2}$: $\Delta n = +1$, so compression favours $\mathrm{PCl_5}$.
- $\mathrm{H_2 + I_2 \rightleftharpoons 2HI}$: $\Delta n = 0$; pressure changes shift nothing.

**The inert-gas trap.** Add argon at **constant volume**: total pressure rises, but each reacting partial pressure is unchanged, so $Q$ is unchanged, and nothing shifts. Add argon at **constant pressure** (the container must expand): every reacting concentration is diluted, and the shift is toward the side with more gaseous moles — exactly as in the last module's syringe question.

## Change the temperature

Every other disturbance leaves $K$ alone; temperature is the one thing that changes $K$ itself.

- **Exothermic** (forward direction releases heat, $\Delta H < 0$): heating shifts the balance back towards reactants, so $K$ falls.
- **Endothermic** ($\Delta H > 0$): heating shifts the balance forward, so $K$ rises.

Read it as "treat heat as a reagent on the right side of an exothermic equation": $\mathrm{N_2 + 3H_2 \rightleftharpoons 2NH_3 + heat}$, so adding heat drives the ammonia-splitting (reverse) side. This is consistent with what you computed in Chapter 5: $\Delta G^\circ = -RT\ln K$, so a bigger temperature makes a positive $\Delta H^\circ$ reaction (unfavourable by enthalpy) more competitive and drags $K$ up.

## Catalyst: no shift at all

A catalyst lowers the activation barrier of both directions **equally**. Rates rise by the same factor; their ratio is untouched; the equilibrium position is untouched. Catalysts matter industrially because they cut the *time* to reach the balance, not because they move it.

<learning-block type="mistake" title="Le Chatelier traps">

- **"More pressure always favours the forward reaction."** Only if the product side carries fewer gaseous moles; count them before concluding.
- **"Inert gas raising total pressure will shift the equilibrium."** At constant volume, partial pressures of reacting gases do not change — no shift.
- **"A catalyst raises the yield."** Yield depends on $K$; catalysts do not touch it.
- **"Pressure matters for liquid–solid equilibria the same way."** Condensed phases are incompressible to first approximation; the rule is for gas mole counts.

</learning-block>

## The industrial payoff

### The Haber process: making ammonia

$$
\mathrm{N_2(g) + 3H_2(g) \rightleftharpoons 2NH_3(g)}
\qquad
\Delta H^\circ \approx -92\ \text{kJ/mol},\ \Delta n = -2
$$

| Factor | What favours equilibrium | What the plant actually does | Why the compromise |
| --- | --- | --- | --- |
| Pressure | high ($4 \to 2$ moles) | roughly $200\ \text{atm}$ | higher pressures help yield *and* rate, but cost steel and pumping |
| Temperature | low (exothermic) | about $700\ \text{K}$ ($\sim$430 $^\circ$C) | low $T$ raises $K$ but makes the reaction painfully slow; $700\ \text{K}$ trades a little yield for workable speed |
| catalyst | no effect | magnetite-derived iron | the only way to make the compromise temperature productive |

Condensing out liquid ammonia as it forms tips the balance forward continuously.

### The Contact process: making sulphur trioxide

$$
\mathrm{2SO_2(g) + O_2(g) \rightleftharpoons 2SO_3(g)}
\qquad
\Delta H^\circ \approx -198\ \text{kJ/mol},\ \Delta n = -1
$$

High pressure favours the product ($3 \to 2$ moles), but the pressure effect is modest and the equilibrium already lies far to the right near room temperature — so the plant runs at slightly elevated pressure near $720\ \text{K}$ over a $\mathrm{V_2O_5}$ catalyst. The temperature choice is again a rate–equilibrium compromise, tilted by the fact that the yield is otherwise already good. The $\mathrm{SO_3}$ is absorbed into sulphuric acid rather than accumulating in the gas phase.

## Worked example: predicting a shift with reasons

$\mathrm{PCl_5(g) \rightleftharpoons PCl_3(g) + Cl_2(g)}$ is at equilibrium at some temperature. Predict the shift (and reason) for each change:

1. Add $\mathrm{Cl_2}$ — $Q$ rises above $K$ (extra product), so the reverse reaction consumes the added chlorine.
2. Increase the volume at constant temperature — each concentration falls, $Q = \dfrac{[\mathrm{PCl_3}][\mathrm{Cl_2}]}{[\mathrm{PCl_5}]}$ also falls (numerator drops faster), so the forward dissociation runs and more gaseous moles avoid the squeeze.
3. Add a little argon at constant volume — no change: $Q$ untouched.
4. Raise the temperature — dissociation of $\mathrm{PCl_5}$ is endothermic, so $K$ itself rises and more dissociation becomes possible: forward shift.

**Sanity check.** The dissociation fraction rises in cases $2$ and $4$, falls in case $1$, stays in case $3$ — every answer agrees with the count of gaseous moles ($\Delta n = +1$) and the sign of $\Delta H$.

## Try it yourself

**1.** For the exothermic equilibrium $\mathrm{2NO(g) + O_2(g) \rightleftharpoons 2NO_2(g)}$, state the effect (shift or no shift, and direction) of (i) raising the temperature, (ii) compressing at constant temperature, (iii) adding argon at constant pressure.

<details><summary>Show the reasoning</summary>

(i) Heat is a "product" of the exothermic forward reaction; adding it drives the reverse (NO-forming) shift. (ii) Left has $3$ gaseous moles, right has $2$; compression favours $\mathrm{NO_2}$. (iii) At constant pressure the whole mixture dilutes, so the balance moves toward the side with more moles — the $2\mathrm{NO} + \mathrm{O_2}$ left-hand side.
</details>

**2.** In the Haber vessel, a leak lets the total pressure fall from $200\ \text{atm}$ to $100\ \text{atm}$ at constant temperature. What happens to the ammonia fraction?

<details><summary>Show the reasoning</summary>

Lower pressure favours the side with more gaseous moles — the left, $\mathrm{N_2 + 3H_2}$ — so the equilibrium drifts backward: the ammonia fraction falls. This is why the plant lives on compressor banks; the whole yield depends on holding the pressure high.
</details>

**3.** A student argues: "The Contact process uses a catalyst, so it makes more $\mathrm{SO_3}$." What is wrong with the argument, and what *is* the catalyst for?

<details><summary>Show the reasoning</summary>

The catalyst does not change the equilibrium position, so no more $\mathrm{SO_3}$ forms than the temperature permits. Its job is kinetic: at the chosen temperature (near $720\ \text{K}$) the uncatalysed gas is too sluggish, and the $\mathrm{V_2O_5}$ surface makes both forward and reverse rates faster so the mixture actually reaches its near-optimal yield within minutes rather than days.
</details>

## Remember

- The one-line rule: a system at equilibrium shifts to oppose the imposed change.
- Add or remove a participant → $Q$ vs $K$ decides. Compress gases → count gaseous moles. Change temperature → $K$ itself changes.
- Inert gas: constant volume no shift; constant pressure dilution shift (toward more moles).
- Catalysts never move the balance; only temperature can.
- The Haber and Contact processes are just this rule plus rate economics — a compromise on temperature, pulled forward by pressure, catalyst and continuous product removal.

The chapter now turns ionic: the equilibria of acids, bases and water, where the same $K$, $Q$ and Le Chatelier machinery produces the pH scale.
