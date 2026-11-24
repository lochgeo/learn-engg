## Study plan for semiconductor electronics

This chapter moves from the physics of solids to devices and then to digital logic. A focused first pass takes about **3 hours**, plus a short break:

1. **Band theory and classes of materials** — 20 min
2. **Intrinsic and extrinsic semiconductors** — 25 min
3. **The p–n junction and the diode** — 25 min
4. **Rectifiers and special-purpose diodes** — 20 min
5. **The junction transistor** — 25 min
6. **Logic gates and integrated circuits** — 20 min
7. **This mastery check** — 25 min

After each lesson, close the explanation and redo its "Try it yourself" questions from a blank page. Take a short break halfway through.

After this core pass, use the JEE Main timed practice module for a $50$-minute mixed set. Save it for when you can already solve the chapter tools one at a time.

## First choose the tool

| Clue in the question | Start with |
| --- | --- |
| Material class, gap size, conductivity trend | Band theory: $E_g$, $\sigma=nq\mu$, temperature trend |
| Doping type or majority carrier | Donor/acceptor: n-type electrons, p-type holes; $np=n_i^2$ |
| Carrier density after doping | $n\approx N_D$ (n-type), $p\approx N_A$ (p-type), minority $=n_i^2/\text{majority}$ |
| Conductivity of doped sample | $\sigma=e(n\mu_n+p\mu_p)$ |
| Junction, barrier, on-voltage | $V_0$, depletion region, $V_T=k_BT/e$ |
| Diode current from voltage | Ideal diode: $I=I_s(e^{V/V_T}-1)$ |
| Rectifier DC output | Half-wave $V_m/\pi$; full-wave $2V_m/\pi$ |
| LED colour | $\lambda\approx1240/E_g\ \text{nm}$ |
| Transistor currents | $I_E=I_B+I_C$; $\alpha=I_C/I_E$; $\beta=I_C/I_B=\alpha/(1-\alpha)$ |
| Logic output from inputs | Truth table of the gate; simplify with Boolean algebra / De Morgan |

## Mastery check

Try each without looking at the answer first. Use $T=300\ \text{K}$, $V_T=0.026\ \text{V}$, $n_i(\text{Si})=1.5\times10^{16}\ \text{m}^{-3}$ unless stated otherwise.

### 1. Classify by gap

A material has band gap $1.4\ \text{eV}$. Classify it and state whether its conductivity rises or falls when heated.

<details><summary>Answer and reasoning</summary>

Semiconductor. Its conductivity rises on heating because the carrier density $n_i$ grows exponentially, outweighing the mobility decrease.
</details>

### 2. Doped silicon

Silicon is doped with boron to $N_A=5.0\times10^{21}\ \text{m}^{-3}$. Find the hole and electron densities.

<details><summary>Answer and reasoning</summary>

p-type: $p\approx N_A=5.0\times10^{21}\ \text{m}^{-3}$; $n=n_i^2/p=(1.5\times10^{16})^2/(5.0\times10^{21})=4.5\times10^{10}\ \text{m}^{-3}$. Majority carriers are holes.
</details>

### 3. Diode current

A diode has $I_s=2\times10^{-12}\ \text{A}$. Find the current at $0.65\ \text{V}$ forward bias.

<details><summary>Answer and reasoning</summary>

$V/V_T=0.65/0.026=25.0$. $I=2\times10^{-12}(e^{25}-1)\approx2\times10^{-12}\times7.2\times10^{10}\approx0.144\ \text{A}=144\ \text{mA}$. (Real diodes limit this by series resistance.)
</details>

### 4. Rectifier output

A full-wave rectifier is fed from a transformer with peak secondary voltage $20\ \text{V}$. Find the average DC output before diode drops.

<details><summary>Answer and reasoning</summary>

$V_{dc}=2V_m/\pi=2(20)/\pi=12.7\ \text{V}$.
</details>

### 5. LED colour

An LED material has band gap $2.0\ \text{eV}$. Estimate its emission wavelength and colour.

<details><summary>Answer and reasoning</summary>

$\lambda=1240/2.0=620\ \text{nm}$, orange-red light.
</details>

### 6. Transistor gains

A transistor has $\alpha=0.99$. Find $\beta$ and, for $I_E=2.0\ \text{mA}$, the base and collector currents.

<details><summary>Answer and reasoning</summary>

$\beta=\alpha/(1-\alpha)=0.99/0.01=99$. $I_C=\alpha I_E=1.98\ \text{mA}$; $I_B=I_E-I_C=0.02\ \text{mA}=20\ \mu\text{A}$. Check: $\beta I_B=99\times20\ \mu\text{A}=1.98\ \text{mA}=I_C$.
</details>

### 7. Logic simplification

Simplify $F=A\cdot B+\overline{A}\cdot B+A\cdot\overline{B}$.

<details><summary>Answer and reasoning</summary>

$F=B(A+\overline{A})+A\overline{B}=B+A\overline{B}$. Using $B+A\overline{B}=A+B$ (absorption/consensus), $F=A+B$. The circuit is an OR gate.
</details>

### 8. Conceptual check

Why does the conductivity of a pure semiconductor increase with temperature while that of a metal decreases?

<details><summary>Answer</summary>

In a pure semiconductor, heating exponentially increases the number of carriers across the small band gap, so $\sigma$ rises. In a metal, the carrier density is fixed and heating increases lattice scattering, reducing mobility, so $\sigma$ falls.
</details>

### 9. Zener regulator

A Zener diode rated $5.1\ \text{V}$ is used with a series resistor from a $9\ \text{V}$ supply to hold a load at $5.1\ \text{V}$. What voltage appears across the resistor, and what limits the Zener current?

<details><summary>Answer and reasoning</summary>

The resistor drops $9-5.1=3.9\ \text{V}$. The Zener current is limited by this resistor (and the load current): $I_Z=(V_{in}-V_Z)/R - I_{load}$. The resistor value must keep $I_Z$ within the diode's rated range.
</details>

### 10. Depletion region

Explain why the depletion region has a built-in potential and what happens to its width under forward and reverse bias.

<details><summary>Answer</summary>

Diffusion exposes fixed ions, creating an electric field and a potential barrier $V_0$ that balances further diffusion. Forward bias narrows the region and lowers the barrier; reverse bias widens it and raises the barrier.
</details>

## Self-check

You are ready to move on when you can:

- classify a material from its band gap and predict its temperature trend;
- find majority and minority carrier densities after doping and use mass action;
- compute diode current and identify when the ideal model breaks down;
- compute rectifier DC output and LED wavelength;
- convert between $\alpha$ and $\beta$ and solve transistor current problems;
- evaluate and simplify logic-gate expressions using truth tables and De Morgan;
- explain the p–n junction, depletion region and transistor biasing in words.

If one item still feels shaky, revisit that module and redo its questions without the reveal. Then try the JEE Main timed practice set.