## Your study plan for today

Current electricity rewards a calm, ordered approach: most marks are lost not to hard physics but to a wrong ratio, a forgotten internal resistance or a unit slip. A focused first pass takes about **2 hours 35 minutes**, with a short break in the middle:

| Step | Module | Minutes |
| --- | --- | --- |
| 1 | Current, drift velocity and Ohm's law | 25 |
| 2 | Resistivity, temperature and electrical power | 25 |
| 3 | Series and parallel resistors, cells and emf | 25 |
| 4 | Kirchhoff's rules | 25 |
| 5 | Wheatstone bridge, metre bridge and potentiometer | 30 |
| 6 | This mastery check | 25 |

After each concept module, close the page and re-derive its central result from memory. Mark a module complete only when you can also state when its formula fails. Keep a short break after step 3; circuit problems become noticeably harder to read when you are tired.

Save the optional **JEE Main timed practice** for a separate session. Its purpose is choosing among these tools under time pressure, not learning them for the first time.

## First choose the tool

| Clue in the question | Start with |
| --- | --- |
| Charge and time are given | $I=Q/t$ |
| Carrier density, area and current are given | $I=nAev_d$ |
| Wire dimensions and material are given | $R=\rho L/A$ |
| A wire is stretched at constant volume | $R\propto L^2$; $\rho$ unchanged |
| Resistance at a new temperature is asked | $R_T=R_0[1+\alpha(T-T_0)]$ |
| Power, heat or electricity cost is asked | $P=VI=I^2R=V^2/R$, then $E=Pt$ |
| Elements carry the same current | Series: $R_{\text{eq}}=\sum R_i$ |
| Elements share the same voltage | Parallel: $1/R_{\text{eq}}=\sum 1/R_i$ |
| A cell's terminal voltage is mentioned | $V=\varepsilon-Ir$ (discharging) or $\varepsilon+Ir$ (charging) |
| The network is not reducible | Kirchhoff's junction and loop rules |
| Four arms and a null galvanometer | Wheatstone: $P/Q=R/S$ |
| One-metre wire with a jockey | Metre bridge: $R/S=l/(100-l)$ |
| An emf must be measured without loading | Potentiometer: $\varepsilon=kl$ at the null point |

## Mastery check

Try each question from a blank page before opening the answer. Use $e=1.6\times10^{-19}\ \text{C}$ and $g=10\ \text{m/s}^2$ where needed.

### 1. Charge from a steady current

A steady current of $0.40\ \text{A}$ flows for $2.5\ \text{min}$. Find the charge that passes and the number of electrons.

<details><summary>Answer and reasoning</summary>

Convert the time: $2.5\ \text{min}=150\ \text{s}$.

$$
Q=It=(0.40)(150)=60\ \text{C}.
$$

The number of electrons is

$$
N=\frac{Q}{e}=\frac{60}{1.6\times10^{-19}}=3.75\times10^{20}.
$$

The charge is large in coulombs but corresponds to a modest fraction of a mole of electrons, which is typical for a small current.

</details>

### 2. Drift speed

A copper wire of cross-sectional area $2.0\ \text{mm}^2$ carries $3.0\ \text{A}$. Take $n=8.5\times10^{28}\ \text{m}^{-3}$. Find the drift speed.

<details><summary>Answer and reasoning</summary>

$$
A=2.0\times10^{-6}\ \text{m}^2.
$$

$$
v_d=\frac{I}{nAe}
=\frac{3.0}{(8.5\times10^{28})(2.0\times10^{-6})(1.6\times10^{-19})}
\approx1.1\times10^{-4}\ \text{m/s}.
$$

This is $0.11\ \text{mm/s}$, small enough that an individual electron takes hours to travel a metre, while the field propagates through the circuit almost instantly.

</details>

### 3. Stretching a wire

A wire has resistance $8.0\ \Omega$. It is stretched uniformly until its length doubles, its volume staying constant. Find its new resistance and state what happens to its resistivity.

<details><summary>Answer and reasoning</summary>

At constant volume, $A$ halves when $L$ doubles. From $R=\rho L/A$,

$$
R'=\rho\frac{2L}{A/2}=4\rho\frac{L}{A}=4(8.0)=32\ \Omega.
$$

The resistivity is a material property and does not change under ordinary stretching; only the geometry changes. The resistance rises by a factor of four, not two.

</details>

### 4. Temperature change

A copper coil has resistance $20\ \Omega$ at $20^\circ\text{C}$. If $\alpha=4.0\times10^{-3}\ ^\circ\text{C}^{-1}$, find its resistance at $120^\circ\text{C}$.

<details><summary>Answer and reasoning</summary>

The temperature change is $\Delta T=100\ ^\circ\text{C}$:

$$
R_T=20\left[1+(4.0\times10^{-3})(100)\right]
=20(1.40)=28\ \Omega.
$$

The linear formula is an approximation over this range, but it is the standard estimate for a metal.

</details>

### 5. A kettle's current, resistance and energy

An electric kettle rated $1.5\ \text{kW}$ at $240\ \text{V}$ runs for $4.0\ \text{min}$. Find the current, the resistance of its element, the energy used in kWh and the cost at ₹8 per kWh.

<details><summary>Answer and reasoning</summary>

$$
I=\frac{P}{V}=\frac{1500}{240}=6.25\ \text{A},
\qquad
R=\frac{V^2}{P}=\frac{240^2}{1500}=38.4\ \Omega.
$$

The energy is

$$
E=(1.5\ \text{kW})\left(\frac{4.0}{60}\ \text{h}\right)=0.10\ \text{kWh}.
$$

At ₹8 per kWh, the cost is ₹0.80. The result is plausible for heating a small quantity of water for a few minutes.

</details>

### 6. A mixed network

A $12\ \text{V}$ supply of negligible internal resistance feeds a $4.0\ \Omega$ resistor in series with a parallel pair of $6.0\ \Omega$ and $3.0\ \Omega$. Find the total current, the p.d. across the parallel pair, the branch currents and the total power.

<details><summary>Answer and reasoning</summary>

The parallel pair is

$$
R_p=\frac{(6.0)(3.0)}{6.0+3.0}=2.0\ \Omega.
$$

The total resistance is $4.0+2.0=6.0\ \Omega$, so

$$
I=\frac{12}{6.0}=2.0\ \text{A}.
$$

The p.d. across the parallel pair is $IR_p=(2.0)(2.0)=4.0\ \text{V}$. The branch currents are $4.0/6.0=0.67\ \text{A}$ and $4.0/3.0=1.33\ \text{A}$, adding to $2.0\ \text{A}$. The total power is $VI=(12)(2.0)=24\ \text{W}$, which also equals $I^2R_{\text{total}}=(4)(6.0)$.

</details>

### 7. Terminal voltage and efficiency

A cell of emf $6.0\ \text{V}$ and internal resistance $0.50\ \Omega$ is connected to a $2.5\ \Omega$ resistor. Find the current, terminal voltage, power delivered to the resistor and the efficiency.

<details><summary>Answer and reasoning</summary>

$$
I=\frac{6.0}{2.5+0.50}=2.0\ \text{A}.
$$

$$
V=\varepsilon-Ir=6.0-(2.0)(0.50)=5.0\ \text{V}.
$$

The power in the external resistor is

$$
P_{\text{ext}}=I^2R=(2.0)^2(2.5)=10\ \text{W}.
$$

The total chemical power is $\varepsilon I=12\ \text{W}$, so the efficiency is $10/12\approx83\%$. The remaining $2.0\ \text{W}$ is dissipated in the internal resistance.

</details>

### 8. Two sources in a loop

A $10\ \text{V}$ cell of internal resistance $1.0\ \Omega$ and a $4.0\ \text{V}$ cell of internal resistance $1.0\ \Omega$ have their positive terminals joined to the same top node, and their negative terminals joined to the same bottom node through a $3.0\ \Omega$ resistor. Find the current in the $3.0\ \Omega$ resistor and determine whether the $4.0\ \text{V}$ cell is charging or discharging.

<details><summary>Answer and reasoning</summary>

Let $I_1$ flow up the left branch into the top node, $I_2$ up the right branch, and $I_3$ down through the $3.0\ \Omega$ resistor. The junction rule gives

$$
I_1+I_2=I_3.
$$

The left loop gives $10-I_1-3I_3=0$, so $I_1=10-3I_3$. The right loop gives $4-I_2-3I_3=0$, so $I_2=4-3I_3$. Substituting,

$$
(10-3I_3)+(4-3I_3)=I_3
\quad\Longrightarrow\quad
14=7I_3
\quad\Longrightarrow\quad
I_3=2.0\ \text{A}.
$$

Then $I_1=4.0\ \text{A}$ and $I_2=-2.0\ \text{A}$. The negative sign means the actual current in the right branch is downward, into the positive terminal of the $4.0\ \text{V}$ cell: that cell is **charging**. The p.d. across the $3.0\ \Omega$ resistor is $6.0\ \text{V}$, which matches $10-4.0$ on the left and $4+2.0$ on the right.

</details>

### 9. Metre bridge

A metre bridge balances at $40\ \text{cm}$ from the left end when a $9.0\ \Omega$ resistor is in the right gap. Find the resistance in the left gap.

<details><summary>Answer and reasoning</summary>

With the unknown on the left,

$$
R=S\frac{l}{100-l}=9.0\frac{40}{60}=6.0\ \Omega.
$$

The balance is nearer the left end, so the left resistance should be smaller than $9.0\ \Omega$; $6.0\ \Omega$ satisfies that check.

</details>

### 10. Potentiometer and internal resistance

A cell balances at $75\ \text{cm}$ on a potentiometer wire whose potential gradient is $0.020\ \text{V/cm}$. With a $6.0\ \Omega$ resistor across the cell, the balance length becomes $50\ \text{cm}$. Find the cell's emf, its terminal voltage under load, and its internal resistance.

<details><summary>Answer and reasoning</summary>

At the open-circuit balance,

$$
\varepsilon=kl_1=(0.020)(75)=1.5\ \text{V}.
$$

Under load,

$$
V=kl_2=(0.020)(50)=1.0\ \text{V}.
$$

The current through the $6.0\ \Omega$ resistor is $V/R=1.0/6.0=0.167\ \text{A}$. The internal drop is $\varepsilon-V=0.50\ \text{V}$, so

$$
r=\frac{0.50}{0.167}=3.0\ \Omega.
$$

Equivalently, $r=R(l_1/l_2-1)=6.0(75/50-1)=6.0(0.50)=3.0\ \Omega$. Both routes agree.

</details>

## Self-check

You are ready to move on when you can:

- distinguish conventional current from electron drift and use $I=nAev_d$ without unit slips;
- choose between $\rho$, $R$ and temperature-dependent resistance, and explain what stays constant when a wire is stretched;
- select the correct power expression for a series or parallel element;
- reduce a mixed network, including a real cell's internal resistance;
- set up Kirchhoff equations with a consistent sign convention and interpret negative currents;
- derive and apply the Wheatstone balance condition, the metre-bridge ratio and the potentiometer relations;
- check a result for plausible magnitude, correct sign and a closing power balance.

If one item still feels shaky, revisit that module and redo its questions without the reveal. A timed set is useful only after each tool can be selected deliberately.
