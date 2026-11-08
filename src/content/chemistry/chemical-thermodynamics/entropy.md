## Energy conservation does not choose a direction

Pour hot coffee into a cold cup and the two settle at a shared temperature. The reverse — coffee cooling while the cup, for no reason, boils — would violate nothing in the first law: the same joules would simply move the other way. Yet it never happens. Energy bookkeeping tells us *how much* changes; it is silent about *which way* changes go spontaneously. Filling that gap is the job of entropy and the second law.

## 1. Spontaneity

A **spontaneous** process is one that, once started, proceeds on its own without continued external intervention. Three things the word does **not** mean:

- *Fast.* Diamond converts spontaneously to graphite; a match head and oxygen react spontaneously; both sit unchanged for years because the *rate* is a separate (kinetic) question.
- *Instantaneous or complete.* Some spontaneous reactions run only to an equilibrium mixture.
- *Unaided start.* Spontaneous processes often need activation — the spark, the scratch — before they take over.

A process is **non-spontaneous** in one direction exactly when it is spontaneous in the other. Pushing heat from cold to hot costs work (a fridge proves it); letting heat fall from hot to cold costs nothing.

## 2. Entropy: dispersal of energy

**Entropy** $S$ is the state function that measures how widely a system's energy is spread over its available microscopic arrangements. The statistical statement is Boltzmann's:

$$
S = k\ln W,
$$

where $W$ counts the microstates — the distinct ways molecules can be arranged and moving — compatible with the observed macrostate, and $k = 1.381\times10^{-23}\ \text{J\,K}^{-1}$. More room to spread means more arrangements, hence higher entropy. The classical, laboratory-scale definition ties entropy change to reversible heat flow:

$$
\Delta S = \frac{q_{\text{rev}}}{T}.
$$

Entropy has units $\text{J\,K}^{-1}$ (tabulated molar entropies use $\text{J\,K}^{-1}\text{mol}^{-1}$). It is a state function, an extensive one: twice the sample, twice the entropy. The division by $T$ has a feel to it — adding $100\ \text{J}$ to an already hot body disperses into a crowd of busy microstates and matters less than the same joules dropped into a cold, ordered system.

Useful ordering rules, all consequences of "more ways to be arranged":

- gas $\gg$ liquid $>$ solid for the same substance;
- entropy rises with temperature (thermal motion opens more arrangements);
- more moles of gas in the formula means more entropy — one extra gas molecule is worth tens of $\text{J\,K}^{-1}\text{mol}^{-1}$;
- dissolving a gas into solution *lowers* its entropy; dissolving most ionic solids in water raises the solution's disorder but the sign for the system as a whole must be computed, not assumed.

## 3. The second law

For any real (spontaneous) process,

$$
\Delta S_{\text{total}} = \Delta S_{\text{system}} + \Delta S_{\text{surroundings}} > 0,
$$

with equality only in the ideal limit of a reversible process. The entropy of the universe never decreases. This is the second law — a statement about direction, complementary to the first law's statement about amount.

The heat-flow paradox dissolves immediately. Let $1000\ \text{J}$ pass from a body at $400\ \text{K}$ to one at $300\ \text{K}$:

$$
\Delta S_{\text{total}} = -\frac{1000}{400} + \frac{1000}{300} = -2.5 + 3.33 = +0.83\ \text{J\,K}^{-1} > 0.
$$

Run it backwards and the same arithmetic gives $-0.83\ \text{J\,K}^{-1}$ — forbidden. Energy is conserved either way; only the hot-to-cold direction wins the entropy count.

When the surroundings are a large bath at temperature $T$, their entropy change is set by the heat the system pays them: $\Delta S_{\text{surroundings}} = -q_{\text{system}}/T$, and at constant pressure $q_{\text{system}} = \Delta H_{\text{system}}$. Keep that identity in mind — it is the bridge to Gibbs energy in the next module.

## 4. Standard molar entropies

Unlike enthalpy, entropy has a natural zero: the **third law** states that a perfect crystalline substance has $S = 0$ at $0\ \text{K}$, where there is exactly one microstate. Heating from absolute zero accumulates entropy, so tables can give *absolute* standard molar entropies $S^\circ_m$ at $298.15\ \text{K}$ and $1\ \text{bar}$ — and, unlike $\Delta_\text{f}H^\circ$, the values for elements are **not** zero ($S^\circ_m$ of $\mathrm{O_2(g)}$ is $205.0\ \text{J\,K}^{-1}\text{mol}^{-1}$).

Reaction entropy changes then follow the same arithmetic pattern as Hess's law for formation enthalpies, but simpler because the values are absolute:

$$
\Delta S^\circ_{\text{rxn}} = \sum \nu S^\circ_m(\text{products}) - \sum \nu S^\circ_m(\text{reactants}).
$$

### Worked example: ammonia synthesis

With $S^\circ_m$: $\mathrm{N_2}$ $191.6$, $\mathrm{H_2}$ $130.7$, $\mathrm{NH_3}$ $192.8\ \text{J\,K}^{-1}\text{mol}^{-1}$, for $\mathrm{N_2(g) + 3H_2(g) \rightarrow 2NH_3(g)}$:

$$
\Delta S^\circ = 2(192.8) - \big[191.6 + 3(130.7)\big] = 385.6 - 583.7 = -198.1\ \text{J\,K}^{-1}\text{mol}^{-1}.
$$

**Sanity check.** Four moles of gas collapse into two, so a large negative $\Delta S$ was expected before any arithmetic. Had the number come out positive, the gas-count rule would have flagged the error instantly.

## 5. Entropy of a phase change

At a transition temperature, the two phases are in equilibrium and the change is (in principle) reversible, so $\Delta S = \Delta H_{\text{transition}}/T_{\text{transition}}$ — no new measurement needed.

Melting ice at $273\ \text{K}$: $\Delta S_{\text{fus}} = \dfrac{6010}{273} = 22.0\ \text{J\,K}^{-1}\text{mol}^{-1}$.

Boiling water at $373\ \text{K}$: $\Delta S_{\text{vap}} = \dfrac{40\,700}{373} = 109.1\ \text{J\,K}^{-1}\text{mol}^{-1}$.

Vaporisation wins by a factor of five because liquid-to-gas frees molecules into an enormous volume; solid-to-liquid only loosens them in place. Trouton's rule: most liquids vaporise with $\Delta S_{\text{vap}}$ near $85$–$110\ \text{J\,K}^{-1}\text{mol}^{-1}$.

<learning-block type="mistake" title="The system-only trap">

- **"A spontaneous process must raise the system's entropy."** Freezing water at $-10\,^\circ\text{C}$ is spontaneous while the *system* loses entropy ($\Delta S_{\text{sys}} \approx -22\ \text{J\,K}^{-1}\text{mol}^{-1}$). The released fusion heat ($6.01\ \text{kJ}$ divided by $263\ \text{K}$) adds about $+22.8$ to the surroundings, and the total is still positive. It is $\Delta S_{\text{total}}$ that must rise.
- **Confusing entropy with energy or temperature.** Entropy is not "heat" and not "disorder as messiness"; it counts energy-distribution possibilities. A small hot object can carry less entropy than a large cool one.
- **Mixing units.** $\Delta S$ tables sit in $\text{J\,K}^{-1}$ while $\Delta H$ sits in $\text{kJ}$. Multiply $\Delta S$ by $10^{-3}$ before it meets $\Delta H$ — or you will be off by three orders of magnitude in the next module.

</learning-block>

## Try it yourself

**A.** Predict the sign of $\Delta S$ (system) for: (i) $\mathrm{CaCO_3(s) \rightarrow CaO(s) + CO_2(g)}$; (ii) $\mathrm{2NO(g) + O_2(g) \rightarrow 2NO_2(g)}$; (iii) steam condensing on a lid.

<details><summary>Show the reasoning</summary>

(i) Positive — a solid generates a gas, the largest entropy class. (ii) Negative — three moles of gas become two. (iii) Negative — gas to liquid removes most of the freedom. No table needed; the gas-count rule decides all three.
</details>

**B.** A liquid with $\Delta H_{\text{vap}} = 31.5\ \text{kJ\,mol}^{-1}$ boils at $350\ \text{K}$. Find $\Delta S_{\text{vap}}$ and judge plausibility.

<details><summary>Show the reasoning</summary>

$\Delta S_{\text{vap}} = 31\,500/350 = 90.0\ \text{J\,K}^{-1}\text{mol}^{-1}$. It sits squarely in the normal vaporisation range, so both the magnitude and sign pass.
</details>

**C.** $5.0\ \text{kJ}$ is transferred reversibly into a large bath at $325\ \text{K}$. What is the bath's entropy change?

<details><summary>Show the reasoning</summary>

For a reservoir, $\Delta S = q_{\text{rev}}/T = 5000/325 = +15.4\ \text{J\,K}^{-1}$. Positive because heat enters the bath; a cold bath would gain more entropy from the same joules ($q/T$ with smaller $T$).
</details>

## Remember

- Spontaneity is about direction, not speed; thermodynamics cannot predict how long a spontaneous process takes.
- Entropy counts microstates: $\Delta S = q_{\text{rev}}/T$ in the lab, $S = k\ln W$ in the statistical picture.
- The second law: $\Delta S_{\text{system}} + \Delta S_{\text{surroundings}} \ge 0$, equality only for reversible processes.
- Third law makes tabulated $S^\circ_m$ absolute; elements have nonzero entropies, unlike their zero formation enthalpies.
- Gas moles are the quickest predictor of $\Delta S$; phase changes give $\Delta S = \Delta H/T$ at the transition temperature.

Requiring both system and surroundings to be checked is clumsy in practice. At constant temperature and pressure the surroundings' term reduces to $-\Delta H/T$, and folding it into the system's quantity yields a spontaneity test that uses the system alone: the Gibbs energy, next.
