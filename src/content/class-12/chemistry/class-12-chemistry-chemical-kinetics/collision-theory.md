## Why molecules must collide — and why most collisions do nothing

Collision theory explains the rate constant in molecular terms. It connects the macroscopic Arrhenius equation to what actually happens between individual molecules: a reaction requires a collision, enough energy to break bonds, and a suitable orientation.

## 1. The basic postulates

1. Reactant molecules must **collide** for a reaction to occur.
2. Only a fraction of collisions are **effective** — they lead to products.
3. An effective collision needs (a) energy at least equal to the activation energy $E_a$, and (b) the correct spatial orientation of the colliding molecules.

The rate is therefore proportional to the collision frequency $Z$ times the fraction of collisions with sufficient energy times a **steric factor** $P$ (orientation probability):

$$
\text{rate} = P\,Z\,e^{-E_a/RT}[\text{reactants}]
$$

Comparing with $\text{rate}=k[\text{reactants}]$ gives $k=PZe^{-E_a/RT}$, so the pre-exponential factor $A$ in the Arrhenius equation is essentially $PZ$.

## 2. Energy: the Maxwell–Boltzmann tail

Molecules in a gas or liquid have a distribution of energies. The fraction with kinetic energy along the line of centres exceeding $E_a$ is $e^{-E_a/RT}$. This is the exponential factor in the Arrhenius equation. Because it is exponential, a small rise in $T$ moves a large number of molecules over the barrier.

**Worked example 1.** For $E_a=50\ \text{kJ mol}^{-1}$ at 300 K, the energy factor is

$$
e^{-50000/(8.314\times300)} = e^{-20.05} \approx 2.0\times10^{-9}.
$$

Only about two in a billion collisions have enough energy. At 310 K the factor is $e^{-19.40}\approx 3.4\times10^{-9}$, an increase of roughly 70%, which is why the rate rises so sharply.

## 3. Orientation: the steric factor

Even an energetic collision may fail if the molecules meet “back to back”. The steric factor $P$ is the fraction of sufficiently energetic collisions that also have the right geometry. For simple reactions $P\approx 1$; for complex molecules $P$ can be $10^{-2}$ or smaller. This is why bimolecular reactions between large molecules are often slower than collision theory first predicts.

## 4. Unimolecular reactions and activation

A unimolecular decomposition such as $\mathrm{A \rightarrow products}$ cannot react without first gaining energy by collision. The Lindemann mechanism proposes that $\mathrm{A}$ is energised by collision to $\mathrm{A^*}$, which then reacts or is deactivated by another collision. At high pressure many collisions occur, $\mathrm{A^*}$ is in steady state, and the reaction is first order. At low pressure collisions are rare, and the rate becomes second order (proportional to $[\mathrm{A}]^2$) because energisation is rate-limiting. This explains why “unimolecular” reactions can show pressure-dependent orders.

## 5. Transition-state theory (briefly)

Transition-state theory replaces the hard-sphere collision picture with a quasi-equilibrium between reactants and an **activated complex** (transition state) at the top of the energy barrier. The rate is proportional to the concentration of this complex, which is governed by an equilibrium constant, giving

$$
k = \frac{k_BT}{h}\,e^{-\Delta G^\ddagger/RT}
$$

where $\Delta G^\ddagger$ is the Gibbs energy of activation. This form separates enthalpic and entropic contributions ($\Delta G^\ddagger=\Delta H^\ddagger-T\Delta S^\ddagger$) and explains why reactions with loose transition states can be fast even with a moderate barrier. For board and JEE purposes the Arrhenius form is sufficient; transition-state theory is the deeper view.

## 6. Effect of a catalyst

A catalyst provides an alternative pathway with a lower $E_a$. In collision terms, more collisions now clear the barrier. The catalyst is not consumed: it participates in the mechanism and is regenerated. It does not change the energy distribution of the reactants, nor the equilibrium constant.

## 7. Where collision theory fails

Collision theory assumes molecules are hard spheres and ignores internal energy, quantum tunnelling and solvent effects. It works well for simple gas-phase reactions but poorly for reactions in solution or enzyme catalysis, where transition-state theory and more detailed models are needed.

<learning-block type="mistake" title="Every collision is not a reaction">
Students often estimate a rate by counting all collisions. Only collisions that are both energetic enough and correctly oriented react. Ignoring the $e^{-E_a/RT}$ factor or the steric factor overestimates the rate by many orders of magnitude. Conversely, a reaction with a very small $E_a$ can be fast even with a small steric factor.
</learning-block>

## Try it yourself

1. For $E_a=75\ \text{kJ mol}^{-1}$ at 300 K, compute the energy factor $e^{-E_a/RT}$.
2. By what factor does this factor increase when $T$ rises to 320 K?
3. Why does a unimolecular gas-phase reaction become second order at very low pressure?

<details><summary>Show the reasoning</summary>

1. $e^{-75000/(8.314\times300)}=e^{-30.07}\approx 8.6\times10^{-14}$.
2. Ratio $=e^{-75000/8.314(1/320-1/300)}=e^{1.90}=6.7$.
3. At low pressure collisions are too rare to energise $\mathrm{A}$; the energisation step $\mathrm{A+A\rightarrow A^*+A}$ becomes rate-limiting, giving second-order kinetics.

</details>

## Remember

- Reaction requires collision, sufficient energy and correct orientation.
- The energy factor $e^{-E_a/RT}$ explains the temperature dependence of $k$.
- The steric factor $P$ accounts for orientation; $A\approx PZ$.
- Unimolecular reactions need collisional activation, which can make them pressure-dependent.
- Catalysts lower $E_a$ without being consumed.

This completes the concept modules. The **Chemical Kinetics: practice & mastery check** module ties the rate laws, integrated equations, Arrhenius equation and collision theory together into a single problem-solving framework. The **JEE Main timed practice** module then tests that framework under exam conditions.