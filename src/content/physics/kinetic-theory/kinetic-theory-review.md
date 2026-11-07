## Your study plan for today

Kinetic theory is a chain of ideas, each built from the previous ones, so the review also works as a repair route: whichever question you miss, the plan points at the lesson to re-read. A focused first pass takes about **2 hours** plus this check:

1. **The ideal-gas model** — 18 min
2. **Pressure from molecular collisions** — 22 min
3. **Temperature and molecular speeds** — 22 min
4. **Degrees of freedom and specific heats** — 22 min
5. **Mean free path** — 18 min
6. **Real gases** — 20 min
7. **This mastery check** — 25 min

After each lesson, close the explanation and redo its worked examples on a blank page. Only move on when you can explain **why** the step held, not just which number it produced.

Afterwards, the **JEE Main timed practice** module gives a 50-minute, no-notes mixed set; save it for when each tool works individually and the remaining skill is choosing the tool under time pressure.

## First choose the tool

| Clue in the question | Reach for |
| --- | --- |
| A gas's state changes; two of $p,V,T,n$ held or asked | $pV=nRT$ in kelvin, applied to two states |
| Pressure or density with speeds mentioned | Kinetic formula: $p=\frac13\rho v_{rms}^2$, hence $v_{rms}=\sqrt{3p/\rho}$ |
| "Average kinetic energy per molecule" or temperature meaning | $\langle K\rangle=\tfrac32k_BT=\tfrac32RT$ per mole |
| Highest/fasting/compare speeds | $v\propto\sqrt{T/M}$; ratio table $v_{mp}:\langle v\rangle:v_{rms}=1:1.128:1.225$ |
| Specific heat, $C_p$, $C_V$, $\gamma$ | Count degrees of freedom: $C_V=\frac f2R$, $\gamma=1+2/f$ |
| Collisions, how far, vacuum | $\lambda=1/(\sqrt2\pi d^2n)=k_BT/(\sqrt2\pi d^2p)$; $z=\langle v\rangle/\lambda$ |
| Real gas, measured $p$ off the ideal value | $Z=pV/nRT$; van der Waals $(p+an^2/V^2)(V-nb)=nRT$ |
| "Can it be liquefied?" | Compare $T$ with $T_c=8a/27Rb$; above $T_c$, pressure alone never works |

## Mastery check

Attempt each question before opening its answer. Use $R=8.314\ \text{J mol}^{-1}\text{K}^{-1}$, $k_B=1.38\times10^{-23}\ \text{J/K}$, molar masses in $\text{kg/mol}$, and kelvin throughout.

### 1. A tank warms up

A rigid steel tank of ideal gas sits at $1.0\ \text{atm}$ and $27^\circ\text{C}$ and warms to $87^\circ\text{C}$. What pressure does the gauge (relative to vacuum) report?

<details><summary>Answer and reasoning</summary>

Fixed $V$ and $n$ give $p\propto T$ in kelvin: $T_1=300\ \text{K}$, $T_2=360\ \text{K}$, so $p_2=1.0\times360/300=1.2\ \text{atm}$. The Celsius readings must be converted first — $87/27$ would have been nonsense.
</details>

### 2. Real-time molecular pace

Estimate $v_{rms}$ and the mean speed of oxygen molecules ($M=32\times10^{-3}\ \text{kg/mol}$) at $300\ \text{K}$.

<details><summary>Answer and reasoning</summary>

$$
v_{rms}=\sqrt{\frac{3RT}{M}}=\sqrt{\frac{3(8.314)(300)}{0.032}}=\sqrt{2.34\times10^{5}}\approx484\ \text{m/s},
$$

and mean speed follows from the fixed ratio, $\langle v\rangle=0.921 v_{rms}\approx446\ \text{m/s}$. Numbers of this magnitude are why gas-phase processes are fast wherever no collisions intervene.
</details>

### 3. Explain, don't just calculate

At the same temperature, why do equal volumes of hydrogen and oxygen at the same pressure contain the same number of molecules — even though an oxygen molecule is vastly heavier?

<details><summary>Answer and reasoning</summary>

From $pV=\frac13Nm v_{rms}^2$ and $\frac12m v_{rms}^2=\frac32k_BT$: at a common $T$, the product $m v_{rms}^2$ is fixed at $3k_BT$ for **both** gases. A heavier molecule pushes harder per collision but arrives less often, cancelling exactly. Then the formula collapses to $pV=Nk_BT$, where only the molecule count $N$ appears — so equal $p,V,T$ forces equal $N$. Avogadro's law, derived rather than assumed.
</details>

### 4. Warming a monatomic gas

Three moles of argon are heated by $25\ \text{K}$ in a sealed rigid flask. How high does the internal energy rise, and how much heat enters?

<details><summary>Answer and reasoning</summary>

Monatomic: $C_V=\frac32R=12.5\ \text{J mol}^{-1}\text{K}^{-1}$.

$$
\Delta U=nC_V\Delta T=(3.0)(12.5)(25)=937\ \text{J}\approx0.9\ \text{kJ}.
$$

At constant volume the gas does no work, so the heat supplied equals $\Delta U=937\ \text{J}$.
</details>

### 5. Revealing a molecule's shape from γ

An ideal gas has $\gamma=1.40$. What are its degrees of freedom and molar $C_V$?

<details><summary>Answer and reasoning</summary>

$\gamma=1+2/f$ gives $1.40=1+2/f$, so $2/f=0.40$ and $f=5$: a rigid diatomic molecule (three translations, two rotations). Then

$$
C_V=\frac52R=\frac52(8.314)=20.8\ \text{J mol}^{-1}\text{K}^{-1}.
$$

The ratio of specific heats is an X-ray of the molecule: the number $f$ tells you how it stores energy.
</details>

### 6. Mean free path in a pumped-down chamber

Air's mean free path at STP is about $9\times10^{-8}\ \text{m}$. Estimate it inside a chamber held at $273\ \text{K}$ and $1.0\times10^{4}\ \text{Pa}$.

<details><summary>Answer and reasoning</summary>

$\lambda=k_BT/(\sqrt2\pi d^2p)$, and only $p$ changed: $\lambda\propto1/p$ at fixed temperature. The pressure fell by $1.013\times10^{5}/1.0\times10^{4}=10.1$, so

$$
\lambda\approx9\times10^{-8}\times10.1\approx9\times10^{-7}\ \text{m},
$$

about $0.9\ \mu\text{m}$ — thinner chambers, longer strides.
</details>

### 7. Collisions per second

A gas has mean molecular speed $500\ \text{m/s}$ and mean free path $5.0\times10^{-8}\ \text{m}$. Find the collision frequency per molecule.

<details><summary>Answer and reasoning</summary>

$$
z=\frac{\langle v\rangle}{\lambda}=\frac{500}{5.0\times10^{-8}}=1.0\times10^{10}\ \text{s}^{-1}.
$$

Ten billion encounters per second — remember the scale when a question asks "how often" in kinetic terms: molecular time scales are nanoseconds, not seconds.
</details>

### 8. Reading the compressibility factor

Two moles of a real gas at $320\ \text{K}$ are held in $0.80\ \text{litre}$ and the measured pressure is $60.0\ \text{atm}$. Compute $Z$ and state which intermolecular effect dominates.

<details><summary>Answer and reasoning</summary>

$$
Z=\frac{pV}{nRT}=\frac{(60.0)(0.80)}{(2.0)(0.0821)(320)}=\frac{48.0}{52.5}=0.91.
$$

$Z<1$: the gas pushes less than ideal, so attractive forces dominate at this state. The experiment gives no need for full van der Waals constants to diagnose the physics.
</details>

### 9. Vibration switching on

One mole of a diatomic gas is heated from $300\ \text{K}$ to $500\ \text{K}$. How much more heat is needed at constant volume if the vibrational mode is active ($f=7$) than if it is frozen ($f=5$)?

<details><summary>Answer and reasoning</summary>

$$
Q_{f=5}=n\frac52R\Delta T=\frac52(8.314)(200)=4157\ \text{J},
$$

$$
Q_{f=7}=n\frac72R\Delta T=\frac72(8.314)(200)=5820\ \text{J}.
$$

Difference: $5820-4157=1663\ \text{J}=R\Delta T$. Activating one vibrational mode adds exactly two quadratic slots ($R\Delta T$ more heat), the classical signature looked for in experiment.
</details>

### 10. The temperature-crossing trick

At what temperature does nitrogen ($M=28\times10^{-3}\ \text{kg/mol}$) have the same rms speed as helium ($M=4.0\times10^{-3}\ \text{kg/mol}$) has at $300\ \text{K}$?

<details><summary>Answer and reasoning</summary>

Equal speeds require $T/M$ equal:

$$
\frac{T_{\text{N}_2}}{28}=\frac{300}{4.0}
\quad\Longrightarrow\quad
T_{\text{N}_2}=300\times\frac{28}{4.0}=2100\ \text{K}.
$$

Sanity check: nitrogen molecules are $7$ times heavier and slow by $\sqrt7$ at equal $T$; compensating needs $7$ times the temperature, i.e. $2100\ \text{K}$. Strength of habit: always write $v^2\propto T/M$ before plugging numbers.
</details>

## Self-check

You are ready for the timed set when you can:

- convert Celsius input into kelvin **before** applying any gas-law ratio, without being reminded;
- derive $pV=\frac13Nm v_{rms}^2$ from one molecule bouncing in a box, and say what each symbol counts;
- state $\frac32k_BT$ as average molecular translational energy and use it for an energy result;
- order the three characteristic speeds and know which to quote for energy, for rates, and for the distribution peak;
- turn $\gamma$ or $C_V$ into $f$, and $f$ back into $C_V$, $C_p$ and $\gamma$ — including diatomic vibration at high $T$;
- compute $\lambda$ from $p$, $T$ and $d$ (or scale it) and predict $z=\langle v\rangle/\lambda$ to order of magnitude;
- compute $Z$ from measured data and diagnose whether attraction or molecular size dominates;
- decide from $T_c$ whether a stated compression can liquefy a given gas.

If any bullet still stumbles, redo that lesson's "Try it yourself" questions from a blank page before the timed module.
