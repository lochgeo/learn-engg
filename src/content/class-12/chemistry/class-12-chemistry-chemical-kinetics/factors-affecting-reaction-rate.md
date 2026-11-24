## The levers that change a reaction’s speed

Once you have a rate law, the question becomes practical: what can you change in the flask to make the reaction faster or slower? Concentration, temperature, catalyst, surface area, pressure and light each act through a different mechanism, and confusing them is a common source of wrong predictions.

## 1. Concentration and the rate law

For a reactant $A$, the rate law term $[A]^m$ means that raising $[A]$ raises the rate by the factor $(\text{new}/\text{old})^m$. For a first-order dependence, doubling $[A]$ doubles the rate; for second order, it quadruples it. This is a statistical effect: more particles per unit volume means more collisions per unit time. Products do not usually appear in the rate law unless the reaction is reversible or autocatalytic.

## 2. Temperature

Temperature is the strongest ordinary lever. Raising $T$ increases the average kinetic energy of the molecules, but the decisive effect is on the **fraction of molecules with energy above the activation energy** $E_a$. The quantitative link is the Arrhenius equation, developed in the next-but-one module:

$$
k = A\,e^{-E_a/RT}
$$

A useful rule of thumb: for many reactions near room temperature, a $10\ \text{K}$ rise roughly doubles or triples the rate.

**Worked example.** Take $E_a=60\ \text{kJ mol}^{-1}$. The ratio of rate constants at 310 K and 300 K is

$$
\frac{k_{310}}{k_{300}}
= \exp\!\left[-\frac{60000}{8.314}\left(\frac1{310}-\frac1{300}\right)\right]
\approx \exp(0.78)\approx 2.2
$$

So a 10 K rise more than doubles the rate. This is why reactions are often run with a water bath or an ice bath when control matters.

## 3. Catalysts

A **catalyst** increases the rate without being consumed. It provides an alternative pathway with a lower activation energy; it does not change $\Delta H$, $\Delta G$ or the equilibrium constant, and it speeds up both forward and reverse reactions equally. A catalyst may be homogeneous (same phase as reactants, e.g. $\mathrm{H^+}$ in ester hydrolysis) or heterogeneous (different phase, e.g. Pt or Ni surfaces).

**Worked example.** Lowering $E_a$ from $75\ \text{kJ mol}^{-1}$ to $50\ \text{kJ mol}^{-1}$ at 298 K multiplies the rate by

$$
\exp\!\left(\frac{75000-50000}{8.314\times298}\right)
= \exp(10.1)\approx 2.4\times10^4
$$

A modest change in activation energy produces an enormous rate change — which is exactly why enzymes and industrial catalysts are so effective.

## 4. Surface area and the state of subdivision

For reactions involving a solid reactant or catalyst, only surface atoms can collide with the other phase. Grinding a solid into powder, or using a porous support, exposes more reactive sites and raises the rate. This is why coal dust explodes while a coal lump burns slowly, and why pharmaceutical tablets are sometimes micronised.

## 5. Pressure (gaseous reactions)

For gases, increasing the total pressure at constant temperature raises the partial pressures and hence the concentrations, so the rate rises according to the rate law. Compressing a gas mixture is therefore equivalent to raising concentrations. Note that adding an inert gas at constant volume does **not** change partial pressures, so it does not change the rate.

## 6. Nature of the reactants

Some bonds are simply easier to break. $\mathrm{H_2}$ reacts faster than $\mathrm{D_2}$ because of the isotope effect (lighter atoms move faster and tunnel more readily). Ionic reactions in solution are often fast because no covalent bond needs breaking; reactions that must break strong bonds, such as $\mathrm{N_2}$ activation, are slow. The reaction medium, solvent polarity and ionic strength can also matter, especially for ionic mechanisms.

## 7. Light and other energy inputs

Photochemical reactions absorb photons to reach an excited state; their rate depends on light intensity and wavelength, not on temperature in the ordinary sense. Photosynthesis and the photochemical smog formation from $\mathrm{NO_2}$ are examples. Radiation, ultrasound and mechanical stress can also initiate reactions.

<learning-block type="mistake" title="Catalyst myths">
A catalyst is not consumed, does not change the equilibrium constant, and does not make an impossible reaction possible. It only lowers the activation energy of a pathway that already exists. Removing a catalyst slows the reaction back to its uncatalysed rate; it does not “use up” the reactants differently.
</learning-block>

## Try it yourself

1. A reaction is first order in $\mathrm{A}$. If $[\mathrm{A}]$ is doubled and the temperature is raised by 10 K (roughly doubling $k$), by what factor does the rate change?
2. Why does adding an inert gas at constant volume not change the rate of a gaseous reaction?
3. A catalyst lowers $E_a$ from 80 to 60 kJ mol$^{-1}$ at 300 K. Estimate the rate enhancement.

<details><summary>Show the reasoning</summary>

1. Factor $=2\times 2 = 4$.
2. Partial pressures and concentrations of the reacting gases are unchanged, so the rate law is unchanged.
3. $\exp[(80000-60000)/(8.314\times300)]=\exp(8.02)\approx 3.0\times10^3$.

</details>

## Remember

- Concentration acts through the exponents in the rate law.
- Temperature acts exponentially through the fraction of molecules above $E_a$.
- A catalyst lowers $E_a$ for both directions and is not consumed.
- Surface area matters whenever a solid phase is involved.
- Pressure changes rate only by changing concentrations of gaseous reactants.

The next module, **Integrated rate equations**, turns the rate law into a formula for concentration as a function of time.