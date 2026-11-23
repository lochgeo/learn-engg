## JEE Main sprint: how to use this set

This is a **50-minute, no-notes** practice paper for the whole chapter. Aim to spend about 15 minutes on Section A, 15 on Section B, 10 on Section C and 10 on Section D, leaving the last few minutes for a sign-and-unit check. Mark any question for review after 90 seconds; do not let a single arithmetic step consume the paper.

Before writing an equation, name the tool: charge flow, drift, resistivity, power, network reduction, Kirchhoff, or a null method. Most options in Section A are designed to catch a wrong tool rather than a hard calculation. Take $g=10\ \text{m/s}^2$ if a question needs it, although none in this set does.

## Conditions and formula sheet

| Quantity or situation | Relation | Check before using it |
| --- | --- | --- |
| Steady current | $I=Q/t$ | Time in seconds; charge in coulombs. |
| Carrier flow | $I=nAev_d$ | Area in $\text{m}^2$; $e=1.6\times10^{-19}\ \text{C}$. |
| Resistance from geometry | $R=\rho L/A$ | $\rho$ is a material property; dimensions matter. |
| Stretched wire at constant volume | $R\propto L^2$ | Resistivity does not change. |
| Temperature dependence (metal) | $R_T=R_0[1+\alpha(T-T_0)]$ | Linear approximation; $\alpha$ in $\text{K}^{-1}$. |
| Electrical power | $P=VI=I^2R=V^2/R$ | Use the voltage **across** that element. |
| Series resistors | $R_{\text{eq}}=\sum R_i$ | Same current in each element. |
| Parallel resistors | $1/R_{\text{eq}}=\sum 1/R_i$ | Same voltage across each branch. |
| Real cell, discharging | $V=\varepsilon-Ir$ | Terminal voltage is below emf. |
| Real cell, charging | $V=\varepsilon+Ir$ | Current enters the positive terminal. |
| Kirchhoff | $\sum I_{\text{in}}=\sum I_{\text{out}}$, $\sum\Delta V=0$ | Fixed sign convention for every loop. |
| Wheatstone bridge | $P/Q=R/S$ | Galvanometer current zero. |
| Metre bridge | $R/S=l/(100-l)$ | $l$ from the end next to the unknown. |
| Potentiometer | $\varepsilon=kl$, $r=R(l_1/l_2-1)$ | Null point; no current from the cell. |

<learning-block type="mistake" title="Three checks that save whole questions">

If a drift speed comes out near $10^8\ \text{m/s}$, an area is probably still in $\text{mm}^2$. If a parallel equivalent is larger than a branch, the reciprocals were added wrongly. If a cell's terminal voltage exceeds its emf while it is discharging, the sign of $Ir$ is reversed.

</learning-block>

## Section A — 10 rapid MCQs

### 1. Charge through a section

A steady current of $2.0\ \text{A}$ flows for $5.0\ \text{s}$. The charge crossing a section is:

- A. $0.40\ \text{C}$
- B. $2.5\ \text{C}$
- C. $10\ \text{C}$
- D. $20\ \text{C}$

<details><summary>Answer</summary>

**C.** $Q=It=(2.0)(5.0)=10\ \text{C}$.

</details>

### 2. Drift velocity after a change

The current in a wire is doubled while its cross-sectional area is halved. The drift speed becomes:

- A. one quarter
- B. one half
- C. twice
- D. four times

<details><summary>Answer</summary>

**D.** From $v_d=I/(nAe)$, $v_d\propto I/A$. Doubling $I$ and halving $A$ multiplies $v_d$ by $2/(1/2)=4$.

</details>

### 3. Stretched wire

A wire of resistance $R$ is stretched uniformly to twice its original length at constant volume. Its new resistance is:

- A. $R/2$
- B. $2R$
- C. $4R$
- D. $8R$

<details><summary>Answer</summary>

**C.** At constant volume, doubling $L$ halves $A$. Then $R'=\rho(2L)/(A/2)=4\rho L/A=4R$.

</details>

### 4. What resistivity depends on

The resistivity of a conductor:

- A. increases in proportion to its length
- B. is inversely proportional to its area
- C. is independent of its dimensions
- D. is always independent of temperature

<details><summary>Answer</summary>

**C.** Resistivity is a material property. Length and area determine the resistance of a particular specimen, not the resistivity. Option D is false for metals, whose resistivity rises with temperature.

</details>

### 5. Three parallel resistors

Resistances of $2.0\ \Omega$, $3.0\ \Omega$ and $6.0\ \Omega$ are connected in parallel. The equivalent resistance is:

- A. $0.50\ \Omega$
- B. $1.0\ \Omega$
- C. $2.0\ \Omega$
- D. $11\ \Omega$

<details><summary>Answer</summary>

**B.**

$$
\frac{1}{R_{\text{eq}}}=\frac12+\frac13+\frac16
=\frac{3+2+1}{6}=1,
$$

so $R_{\text{eq}}=1.0\ \Omega$. This is smaller than the smallest branch, as a parallel equivalent must be.

</details>

### 6. Terminal voltage

A battery of emf $12\ \text{V}$ and internal resistance $1.0\ \Omega$ delivers $2.0\ \text{A}$. Its terminal voltage is:

- A. $14\ \text{V}$
- B. $12\ \text{V}$
- C. $10\ \text{V}$
- D. $8.0\ \text{V}$

<details><summary>Answer</summary>

**C.** $V=\varepsilon-Ir=12-(2.0)(1.0)=10\ \text{V}$. While discharging, the terminal voltage is below the emf.

</details>

### 7. Power in a resistor

The power dissipated in a $4.0\ \Omega$ resistor carrying $2.0\ \text{A}$ is:

- A. $2.0\ \text{W}$
- B. $8.0\ \text{W}$
- C. $16\ \text{W}$
- D. $32\ \text{W}$

<details><summary>Answer</summary>

**C.** $P=I^2R=(2.0)^2(4.0)=16\ \text{W}$. The equivalent $P=VI$ gives $V=IR=8.0\ \text{V}$ and $P=(8.0)(2.0)=16\ \text{W}$.

</details>

### 8. Basis of the junction rule

Kirchhoff's junction rule is a statement of conservation of:

- A. energy
- B. charge
- C. momentum
- D. mass

<details><summary>Answer</summary>

**B.** In a steady state, charge cannot accumulate at a junction, so the total current entering equals the total current leaving. The loop rule is the energy statement.

</details>

### 9. Balanced bridge

A Wheatstone bridge has $P=2.0\ \Omega$, $Q=3.0\ \Omega$ and $R=4.0\ \Omega$. The value of $S$ for balance is:

- A. $2.7\ \Omega$
- B. $4.0\ \Omega$
- C. $6.0\ \Omega$
- D. $8.0\ \Omega$

<details><summary>Answer</summary>

**C.** At balance $P/Q=R/S$, so

$$
S=\frac{QR}{P}=\frac{(3.0)(4.0)}{2.0}=6.0\ \Omega.
$$

Check: $2/3=4/6$.

</details>

### 10. Why a potentiometer

A potentiometer is preferred to a voltmeter for measuring the emf of a cell because:

- A. its wire is uniform
- B. at the null point it draws no current from the cell
- C. it can measure an emf larger than the driver emf
- D. it has a very low resistance

<details><summary>Answer</summary>

**B.** At balance, no current flows through the cell, so there is no internal drop and the measured potential difference equals the emf. Option C is false: the driver emf must exceed the unknown emf.

</details>

## Section B — 5 numerical-value questions

### 11. Electrons per second

A current of $1.6\ \text{A}$ flows in a wire. Find the number of electrons crossing a section per second.

<details><summary>Answer</summary>

$$
N=\frac{I}{e}=\frac{1.6}{1.6\times10^{-19}}=1.0\times10^{19}\ \text{s}^{-1}.
$$

The current is the charge per second, so dividing by the charge of one electron gives the count per second.

</details>

### 12. Resistivity

A wire of length $2.0\ \text{m}$ and cross-sectional area $0.50\ \text{mm}^2$ has resistance $0.20\ \Omega$. Find its resistivity.

<details><summary>Answer</summary>

Convert the area: $0.50\ \text{mm}^2=0.50\times10^{-6}\ \text{m}^2$. Then

$$
\rho=\frac{RA}{L}
=\frac{(0.20)(0.50\times10^{-6})}{2.0}
=5.0\times10^{-8}\ \Omega\,\text{m}.
$$

This is the order expected for a metallic conductor.

</details>

### 13. Resistance at a higher temperature

A metal resistor has resistance $8.0\ \Omega$ at $20^\circ\text{C}$. If $\alpha=5.0\times10^{-3}\ ^\circ\text{C}^{-1}$, find its resistance at $70^\circ\text{C}$.

<details><summary>Answer</summary>

The temperature rise is $50\ ^\circ\text{C}$, so

$$
R_T=8.0\left[1+(5.0\times10^{-3})(50)\right]
=8.0(1.25)=10\ \Omega.
$$

The resistance rises by one quarter over this interval, consistent with a positive $\alpha$ for a metal.

</details>

### 14. Internal resistance

A cell of emf $9.0\ \text{V}$ has a terminal voltage of $8.0\ \text{V}$ when delivering $2.0\ \text{A}$. Find its internal resistance.

<details><summary>Answer</summary>

While discharging, $V=\varepsilon-Ir$. Therefore

$$
r=\frac{\varepsilon-V}{I}=\frac{9.0-8.0}{2.0}=0.50\ \Omega.
$$

The lost volt corresponds to $I^2r=2.0\ \text{W}$ dissipated inside the cell.

</details>

### 15. Potentiometer emf

A potentiometer wire has a potential gradient of $0.015\ \text{V/cm}$. A cell balances at $80\ \text{cm}$. Find the cell's emf.

<details><summary>Answer</summary>

$$
\varepsilon=kl=(0.015)(80)=1.2\ \text{V}.
$$

The potential gradient must be in volts per centimetre if the length is in centimetres; mixing units would give a result out by a factor of $100$.

</details>

## Section C — 3 assertion–reason questions

For questions 16–18, choose:

- **A.** Both assertion and reason are true, and the reason is the correct explanation of the assertion.
- **B.** Both assertion and reason are true, but the reason is not the correct explanation of the assertion.
- **C.** The assertion is true, but the reason is false.
- **D.** The assertion is false, but the reason is true.

### 16. Series current

**Assertion:** In a series circuit, the current through every resistor is the same.

**Reason:** In a steady state, charge cannot accumulate at any point in the circuit.

<details><summary>Answer</summary>

**A.** Both statements are true, and the reason explains the assertion. With only one path, the rate at which charge arrives at a resistor must equal the rate at which it leaves; otherwise charge would build up and the current would not be steady.

</details>

### 17. Fast lighting, slow electrons

**Assertion:** The drift speed of electrons in a copper wire is very small, yet a lamp connected by the wire lights almost immediately.

**Reason:** The electric field is established along the wire at nearly the speed of light.

<details><summary>Answer</summary>

**A.** The drift speed is typically about $10^{-4}\ \text{m/s}$, but the field that sets all the electrons drifting propagates through the circuit at a speed close to $c$. The lamp lights because electrons throughout the filament begin moving together, not because one electron travels from the switch to the lamp instantly.

</details>

### 18. Temperature and carrier density

**Assertion:** The resistance of a metallic conductor increases when its temperature rises.

**Reason:** The number density of free electrons in a metal increases strongly with temperature.

<details><summary>Answer</summary>

**C.** The assertion is true, but the reason is false. In a metal, the number density of free electrons is essentially fixed. Heating increases lattice vibrations, which shortens the relaxation time $\tau$ and raises the resistivity. In a semiconductor, by contrast, the carrier density does rise strongly with temperature and the resistivity usually falls.

</details>

## Section D — 2 matching and multi-statement questions

### 19. Matching instruments and relations

Match each item in Column I with the correct relation or rule in Column II.

| Column I | Column II |
| --- | --- |
| (a) Wheatstone bridge | (p) $P/Q=R/S$ |
| (b) Metre bridge | (q) $R/S=l/(100-l)$ |
| (c) Potentiometer used to compare emfs | (r) $\varepsilon_1/\varepsilon_2=l_1/l_2$ |
| (d) Kirchhoff's loop rule | (s) $\sum\Delta V=0$ |

<details><summary>Answer</summary>

**(a)–(p), (b)–(q), (c)–(r), (d)–(s).**

The Wheatstone balance condition is $P/Q=R/S$, obtained by setting the galvanometer current to zero. The metre bridge is a Wheatstone bridge whose two lower arms are the segments of a uniform wire, giving $R/S=l/(100-l)$. A potentiometer compares two emfs by their null lengths under the same potential gradient, so $\varepsilon_1/\varepsilon_2=l_1/l_2$. The loop rule is the statement that potential changes around a closed loop sum to zero.

</details>

### 20. Multi-statement: metre bridge

Consider a metre bridge used to measure an unknown resistance. Which of the following statements are correct?

(i) At the balance point, the current through the galvanometer is zero.

(ii) The balance condition depends on the emf of the cell used in the bridge.

(iii) The bridge wire must have a uniform cross-sectional area.

(iv) Interchanging the cell and the galvanometer leaves the balance point unchanged.

- A. (i) and (ii) only
- B. (i), (iii) and (iv) only
- C. (ii) and (iii) only
- D. all four

<details><summary>Answer</summary>

**B.** Statement (i) is the definition of balance. Statement (ii) is false: the balance condition $R/S=l/(100-l)$ contains no emf, because the same current ratios are set by the resistances alone. Statement (iii) is required so that resistance is proportional to length. Statement (iv) is true by the reciprocity of a Wheatstone bridge: interchanging the battery and galvanometer does not alter the balance condition.

</details>

## Review by error, not by score

| If you missed… | Revisit | Then retry |
| --- | --- | --- |
| 1, 2, 11 | Current, drift velocity and Ohm's law | Convert area to $\text{m}^2$ before using $I=nAev_d$. |
| 3, 4, 12, 13, 18 | Resistivity, temperature and electrical power | Distinguish $\rho$ from $R$; check whether geometry or temperature is changing. |
| 5–7, 14 | Series and parallel resistors, cells and emf | State what is shared—current or voltage—before combining. |
| 8, 16, 19 | Kirchhoff's rules | Write the sign convention once and apply it to every loop. |
| 9, 10, 15, 20 | Wheatstone bridge, metre bridge and potentiometer | Identify the null condition and the ratio that follows from it. |
| 17 | Drift velocity and the electric field | Separate carrier speed from signal speed. |

<learning-block type="recap" title="Ready for the real paper?">

Aim for at least 16 correct out of 20 with a written method choice for every question. A correct answer you cannot justify is a revision target, not a mastered topic. Re-read the relevant concept module, redo its worked example with the numbers covered, then return to this set.

</learning-block>
