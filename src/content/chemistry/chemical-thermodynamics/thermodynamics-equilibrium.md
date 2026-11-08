## Why reactions stop halfway

Mix nitrogen and hydrogen and ammonia forms — but never all that the stoichiometry promises. The mixture settles at a composition where the forward and reverse drives balance: an equilibrium. A large negative $\Delta G^\circ$ explains why the equilibrium sits on the product side, yet it cannot by itself say *where* the balance point is, and the balance point moves when you heat the flask. This module welds Gibbs energy to the equilibrium constant and shows why temperature is the lever.

## 1. The composition term: $\Delta G = \Delta G^\circ + RT\ln Q$

The standard value $\Delta G^\circ$ describes one particular mixture: everything at unit activity (gases at $1\ \text{bar}$ partial pressure, solutes at $1\ \text{mol\,L}^{-1}$). Real reactions start elsewhere, and the actual driving force is

$$
\Delta G = \Delta G^\circ + RT \ln Q,
$$

where $Q$ is the reaction quotient — products over reactants, each raised to its coefficient, evaluated at the *current* mixture. At the start of a synthesis from pure reactants, $Q = 0$ and $\ln Q \to -\infty$: $\Delta G$ is hugely negative, and the reaction sprints forward. As products accumulate, $Q$ climbs, $\Delta G$ rises toward zero, and the drive fades. **This** is why reactions slow down and stop rather than running to completion: the composition itself erases the motivation.

The sign rule follows immediately: $\Delta G<0$ while $Q<K$, $\Delta G=0$ at $Q=K$, $\Delta G>0$ beyond it. A reaction never "goes backwards because $\Delta G^\circ$ is positive"; it goes whichever way pushes $Q$ toward $K$.

## 2. The bridge: $\Delta G^\circ = -RT\ln K$

At equilibrium $\Delta G = 0$ and $Q = K$, so the master relation collapses to the chapter's most-used equation:

$$
\Delta G^\circ = -RT\ln K \qquad\Longleftrightarrow\qquad K = e^{-\Delta G^\circ/RT}.
$$

| $\Delta G^\circ$ | $K$ | Reading |
| --- | --- | --- |
| strongly negative | $\gg 1$ | products dominate at equilibrium |
| $\approx 0$ | $\approx 1$ | comparable amounts of both |
| strongly positive | $\ll 1$ | reactants dominate; the reverse reaction is the favourable one |

A magnitude shortcut worth memorising: at $298\ \text{K}$, $2.303\,RT = 5.71\ \text{kJ\,mol}^{-1}$, so **every decade of $K$ costs or pays $5.71\ \text{kJ\,mol}^{-1}$** of $\Delta G^\circ$. $\Delta G^\circ = -5.71\ \text{kJ\,mol}^{-1}$ means $K = 10$; $+11.4$ means $K = 10^{-2}$.

### Worked example: ammonia at room temperature

For $\mathrm{N_2(g) + 3H_2(g) \rightarrow 2NH_3(g)}$ the component data give $\Delta H^\circ = -92.2\ \text{kJ\,mol}^{-1}$ and $\Delta S^\circ = -198.1\ \text{J\,K}^{-1}\text{mol}^{-1}$, so at $298\ \text{K}$:

$$
\Delta G^\circ = -92.2 - (298.15)(-0.1981) = -92.2 + 59.1 = -33.1\ \text{kJ\,mol}^{-1}.
$$

$$
\ln K = \frac{33\,100}{8.314 \times 298.15} = \frac{33\,100}{2479} = 13.35 \quad\Rightarrow\quad K \approx 6.3\times 10^{5}.
$$

**Sanity check.** $-33.1\ \text{kJ}$ is about $5.8$ decades at $5.71\ \text{kJ}$ each, and $10^{5.8} \approx 6\times10^{5}$ — the shortcut and the exponential agree. Ammonia synthesis is thermodynamically rich at room temperature; industry's trouble with it is entirely kinetic, as the next example hints.

## 3. Temperature moves $K$ — and only $\Delta H^\circ$ says how

Unwrap the definition $\Delta G^\circ = \Delta H^\circ - T\Delta S^\circ$ inside $K = e^{-\Delta G^\circ/RT}$:

$$
\ln K = \frac{\Delta S^\circ}{R} - \frac{\Delta H^\circ}{RT}.
$$

Straight-line form: a plot of $\ln K$ against $1/T$ has slope $-\Delta H^\circ/R$. Between two temperatures (assuming $\Delta H^\circ$ roughly constant, an excellent approximation over a few hundred kelvin) this is the **van 't Hoff equation**:

$$
\ln\frac{K_2}{K_1} = \frac{\Delta H^\circ}{R}\left(\frac{1}{T_1} - \frac{1}{T_2}\right).
$$

Sign logic, which you should be able to state in your head: heating is the surroundings *donating* heat. An **endothermic** reaction ($\Delta H^\circ>0$) welcomes that heat and its $K$ **rises** with temperature; an **exothermic** one treats heat as a product and its $K$ **falls**. That is Le Chatelier's temperature rule read from the entropy price of moving heat, not a separate law.

### Worked example: the industrial compromise

Take ammonia from $298\ \text{K}$ ($K_1 = 6.3\times10^{5}$) up to $500\ \text{K}$:

$$
\ln\frac{K_2}{K_1} = \frac{-92\,200}{8.314}\left(\frac{1}{298} - \frac{1}{500}\right) = (-11\,090)(0.00135) = -15.0,
$$

$$
K_2 = 6.3\times10^{5} \times e^{-15.0} \approx 6.3\times10^{5} \times 3.1\times10^{-7} \approx 0.2.
$$

**Sanity check.** The reaction is exothermic, so $K$ must fall with heating — and it falls six orders of magnitude, flipping the equilibrium from product-dominated to reactant-leaning. Real plants run hot anyway, because a $K$ of $10^{6}$ reached over a century is worthless against a $K$ of $0.2$ reached in seconds over a catalyst. Thermodynamics sets the destination; kinetics sets the schedule; the operating temperature is their negotiated settlement.

<learning-block type="mistake" title="ΔG against ΔG°: the distinction that decides direction">

- **Using $\Delta G^\circ$ to call the direction of a real mixture.** $\Delta G^\circ<0$ says products win *at standard composition*; the actual direction needs $\Delta G = \Delta G^\circ + RT\ln Q$. A reaction with $\Delta G^\circ = -10\ \text{kJ\,mol}^{-1}$ runs backwards if you overload it with products ($Q > K$).
- **Reading a tiny $K$ as "no reaction at all".** $K$ small means the equilibrium mixture is reactant-rich, not that nothing happens — and a negative $\Delta G$ at the start still means forward motion until $Q$ reaches that small $K$.
- **Sign slip in van 't Hoff.** Exothermic: $K_2<K_1$ when $T_2>T_1$. If your arithmetic says the equilibrium constant of combustion grows when you heat it, you divided by $T$ wrong or dropped a minus.
- **Believing a catalyst changes $K$.** Catalysts change arrival time only; $G$ is a state function and its differences are fixed by initial and final states.

</learning-block>

## Try it yourself

**A.** At $298\ \text{K}$ a reaction has $K = 2.0\times10^{-5}$. Find $\Delta G^\circ$ and say which side dominates at equilibrium.

<details><summary>Show the reasoning</summary>

$\Delta G^\circ = -RT\ln K = -(8.314)(298.15)\ln(2.0\times10^{-5})$. With $\ln(2.0\times10^{-5}) = -10.82$: $\Delta G^\circ = +2.479\times10.82 = +26.8\ \text{kJ\,mol}^{-1}$. Positive, and about $26.8/5.71 \approx 4.7$ decades below unity — reactants dominate. Consistent both ways.
</details>

**B.** The vapour of a solid dimerises: $\mathrm{2A(g) \rightarrow A_2(g)}$, exothermic. Does $K$ for dimerisation increase or decrease with temperature, and why?

<details><summary>Show the reasoning</summary>

Decrease. Exothermic dimerisation pays heat out; heating adds the surroundings' entropy donation in the wrong direction, and van 't Hoff with $\Delta H^\circ<0$, $T_2>T_1$ gives $\ln(K_2/K_1)<0$. (Entropy also disfavours the hotter direction: two gas moles become one, so cold is doubly favourable.)
</details>

**C.** A mixture has $Q = 5$ for a reaction whose $K = 50$ at that temperature. Which way does the net reaction run, and what is the sign of $\Delta G$?

<details><summary>Show the reasoning</summary>

$Q<K$, so $\Delta G = RT\ln(Q/K) = RT\ln 0.1 < 0$: the forward reaction is spontaneous from this mixture. Note $\Delta G^\circ = -RT\ln K$ is *also* negative here — but you would still get the direction right from $Q$ versus $K$ even if $\Delta G^\circ$ were positive.
</details>

## Remember

- $\Delta G$ (no $^\circ$) is the live driving force; $\Delta G^\circ$ is a fixed reference value that only locates the equilibrium point via $\Delta G^\circ = -RT\ln K$.
- $\Delta G = \Delta G^\circ + RT\ln Q$ explains why reactions decelerate and stall: rising $Q$ cancels the standard drive.
- The $5.71\ \text{kJ\,mol}^{-1}$-per-decade rule at $298\ \text{K}$ turns $K \leftrightarrow \Delta G^\circ$ into mental arithmetic.
- $K$ moves with $T$ according to the sign of $\Delta H^\circ$: endothermic rises, exothermic falls, quantitatively by van 't Hoff.
- Temperature choices in industry trade equilibrium yield ($\Delta G^\circ$) against speed (kinetics); know which one each change targets.

With the chapter's six ideas — systems and the first law, enthalpy, Hess cycles, entropy, Gibbs energy, and the $K$ bridge — everything in "Chemical Thermodynamics" is assembled. The practice module puts them in mixed order, which is exactly how exam questions will present them.
