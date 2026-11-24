## JEE Main timed practice: semiconductor electronics

This is a **50-minute, no-notes** practice set for after you complete the chapter lessons. Use $T=300\ \text{K}$, $V_T=0.026\ \text{V}$ and $n_i(\text{Si})=1.5\times10^{16}\ \text{m}^{-3}$ unless a question states otherwise. Spend roughly 15 minutes on Section A, 20 on Section B, 10 on Section C, and 5 on Section D. Mark a question for review after 90 seconds; do not let one calculation consume the paper.

The goal is not only an answer. Before writing an equation, name the system and choose the tool: band gap, doping, junction, rectifier, transistor or logic.

## Conditions sheet

| Situation | Start with | Check before using it |
| --- | --- | --- |
| Classify material | Compare $E_g$ with $k_BT\approx0.026\ \text{eV}$ | Temperature trend differs for metals and semiconductors |
| Doped semiconductor | $n\approx N_D$ or $p\approx N_A$; $np=n_i^2$ | Majority density $\gg n_i$ |
| Conductivity | $\sigma=e(n\mu_n+p\mu_p)$ | Units S/m; mobilities in $\text{m}^2\text{V}^{-1}\text{s}^{-1}$ |
| Diode current | $I=I_s(e^{V/V_T}-1)$ | Valid away from breakdown; series resistance in real diodes |
| Rectifier | Half-wave $V_m/\pi$; full-wave $2V_m/\pi$ | Peak vs rms input |
| LED | $\lambda\approx1240/E_g\ \text{nm}$ | Energy in eV |
| Transistor | $I_E=I_B+I_C$; $\beta=\alpha/(1-\alpha)$ | Identify configuration and which gain applies |
| Logic | Truth table; De Morgan | NAND/NOR are universal |

## Section A — 10 rapid MCQs

### 1. Band gap range

Which band-gap range is typical of a semiconductor at room temperature?

- A. $0\ \text{eV}$
- B. $0.1$–$2\ \text{eV}$
- C. $3$–$6\ \text{eV}$
- D. $>10\ \text{eV}$

<details><summary>Answer</summary>

**B.** Semiconductors have a small gap comparable to a few $k_BT$ to tens of $k_BT$, typically $0.1$–$2\ \text{eV}$.
</details>

### 2. n-type majority carriers

Doping silicon with phosphorus makes it:

- A. p-type with holes as majority carriers
- B. n-type with electrons as majority carriers
- C. intrinsic with equal carriers
- D. insulating

<details><summary>Answer</summary>

**B.** Phosphorus is pentavalent; it donates an extra electron, so electrons are the majority carriers.
</details>

### 3. Mass action

For silicon at $300\ \text{K}$, $n_i=1.5\times10^{16}\ \text{m}^{-3}$. If $n=1.0\times10^{21}\ \text{m}^{-3}$, then $p$ is approximately:

- A. $1.0\times10^{21}\ \text{m}^{-3}$
- B. $2.25\times10^{11}\ \text{m}^{-3}$
- C. $1.5\times10^{16}\ \text{m}^{-3}$
- D. $0$

<details><summary>Answer</summary>

**B.** $p=n_i^2/n=(1.5\times10^{16})^2/(1.0\times10^{21})=2.25\times10^{11}\ \text{m}^{-3}$.
</details>

### 4. Diode bias

A p–n junction conducts a large current when:

- A. p-side is negative and n-side is positive
- B. p-side is positive and n-side is negative, with voltage above the barrier
- C. either bias, equally
- D. only at absolute zero

<details><summary>Answer</summary>

**B.** Forward bias (p positive, n negative) lowers the barrier and allows exponential current once $V>V_0$.
</details>

### 5. Rectifier average

For the same peak voltage $V_m$, the average DC output of a full-wave rectifier is:

- A. $V_m/\pi$
- B. $2V_m/\pi$
- C. $V_m/2$
- D. $V_m$

<details><summary>Answer</summary>

**B.** Full-wave uses both half-cycles, so $V_{dc}=2V_m/\pi$.
</details>

### 6. LED wavelength

A LED material with band gap $2.5\ \text{eV}$ emits approximately at:

- A. $496\ \text{nm}$
- B. $620\ \text{nm}$
- C. $250\ \text{nm}$
- D. $1240\ \text{nm}$

<details><summary>Answer</summary>

**A.** $\lambda=1240/2.5=496\ \text{nm}$.
</details>

### 7. Transistor gain relation

If $\alpha=0.98$, then $\beta$ is approximately:

- A. $0.98$
- B. $1.02$
- C. $49$
- D. $98$

<details><summary>Answer</summary>

**C.** $\beta=\alpha/(1-\alpha)=0.98/0.02=49$.
</details>

### 8. Universal gate

Which gate is universal (any logic function can be built from it alone)?

- A. AND
- B. OR
- C. NOT
- D. NAND

<details><summary>Answer</summary>

**D.** NAND is universal; AND, OR and NOT are not individually universal.
</details>

### 9. Temperature trend

The conductivity of a pure semiconductor on heating:

- A. decreases because mobility falls
- B. increases because carrier density rises exponentially
- C. is unchanged
- D. becomes infinite

<details><summary>Answer</summary>

**B.** The exponential growth of $n_i$ dominates over the mobility decrease.
</details>

### 10. Depletion charge

In the depletion region of a p–n junction, the fixed charge on the n-side is:

- A. negative
- B. positive
- C. zero
- D. alternating

<details><summary>Answer</summary>

**B.** The n-side depletion region contains positive ionised donors; the p-side contains negative ionised acceptors.
</details>

## Section B — 5 numerical-value questions

### 11. Doped silicon conductivity

Silicon is doped with phosphorus to $N_D=2.0\times10^{21}\ \text{m}^{-3}$. With $\mu_n=0.135\ \text{m}^2\text{V}^{-1}\text{s}^{-1}$, find the conductivity (in S/m) to two significant figures.

<details><summary>Answer</summary>

$n\approx N_D=2.0\times10^{21}\ \text{m}^{-3}$; minority holes negligible.

$\sigma=e n\mu_n=(1.6\times10^{-19})(2.0\times10^{21})(0.135)=43.2\ \text{S/m}$.

Answer: $\approx 43\ \text{S/m}$.
</details>

### 12. Forward diode current

A diode has $I_s=1.0\times10^{-12}\ \text{A}$. At $V=0.50\ \text{V}$ forward bias and $300\ \text{K}$, find the current (in mA) to two significant figures.

<details><summary>Answer</summary>

$V/V_T=0.50/0.026=19.2$. $I=10^{-12}(e^{19.2}-1)\approx10^{-12}\times2.2\times10^8=2.2\times10^{-4}\ \text{A}=0.22\ \text{mA}$.

Answer: $\approx 0.22\ \text{mA}$.
</details>

### 13. Transistor base current

A transistor with $\beta=80$ has collector current $4.0\ \text{mA}$ in active mode. Find the base current (in $\mu\text{A}$).

<details><summary>Answer</summary>

$I_B=I_C/\beta=4.0\ \text{mA}/80=0.050\ \text{mA}=50\ \mu\text{A}$.

Answer: $50\ \mu\text{A}$.
</details>

### 14. LED wavelength

An LED is made from a material with band gap $1.8\ \text{eV}$. Find its emission wavelength (in nm) to the nearest nm.

<details><summary>Answer</summary>

$\lambda=1240/1.8=688.9\ \text{nm}\approx 689\ \text{nm}$.

Answer: $689\ \text{nm}$.
</details>

### 15. Rectifier DC output

A full-wave rectifier is fed from a transformer whose secondary peak voltage is $15\ \text{V}$. Find the average DC output (in V) to two significant figures, ignoring diode drops.

<details><summary>Answer</summary>

$V_{dc}=2V_m/\pi=2(15)/\pi=9.55\ \text{V}$.

Answer: $\approx 9.5\ \text{V}$.
</details>

## Section C — 3 assertion–reason questions

### 16. Semiconductor conductivity

**Assertion (A):** The conductivity of a pure semiconductor increases with temperature.

**Reason (R):** The number of charge carriers increases with temperature.

- A. Both A and R are true and R is the correct explanation of A.
- B. Both A and R are true but R is not the correct explanation of A.
- C. A is true but R is false.
- D. A is false but R is true.

<details><summary>Answer</summary>

**A.** Both are true and R explains A: heating exponentially increases $n_i$, which raises $\sigma$.
</details>

### 17. Zener diode

**Assertion (A):** A Zener diode can be used as a voltage regulator.

**Reason (R):** In reverse breakdown, the voltage across a Zener diode remains nearly constant over a wide range of current.

- A. Both A and R are true and R is the correct explanation of A.
- B. Both A and R are true but R is not the correct explanation of A.
- C. A is true but R is false.
- D. A is false but R is true.

<details><summary>Answer</summary>

**A.** Both are true and R explains A.
</details>

### 18. Universal gate

**Assertion (A):** NAND is a universal gate.

**Reason (R):** Any Boolean function can be implemented using only NAND gates.

- A. Both A and R are true and R is the correct explanation of A.
- B. Both A and R are true but R is not the correct explanation of A.
- C. A is true but R is false.
- D. A is false but R is true.

<details><summary>Answer</summary>

**A.** Both are true and R is essentially the definition of a universal gate.
</details>

## Section D — 2 matching/multi-statement questions

### 19. Match the gate to its Boolean expression

Match each gate to its expression.

| Gate | Expression |
| --- | --- |
| P. AND | 1. $\overline{A+B}$ |
| Q. OR | 2. $A\cdot B$ |
| R. NAND | 3. $A+B$ |
| S. NOR | 4. $\overline{A\cdot B}$ |

- A. P-2, Q-3, R-4, S-1
- B. P-3, Q-2, R-1, S-4
- C. P-2, Q-3, R-1, S-4
- D. P-3, Q-2, R-4, S-1

<details><summary>Answer</summary>

**A.** AND is $A\cdot B$ (2), OR is $A+B$ (3), NAND is $\overline{A\cdot B}$ (4), NOR is $\overline{A+B}$ (1).
</details>

### 20. p–n junction statements

Which of the following statements about a p–n junction are correct?

I. The depletion region contains mobile electrons and holes in large numbers.

II. The barrier potential opposes majority-carrier diffusion.

III. Forward bias reduces the depletion width.

IV. Reverse bias increases the barrier height.

- A. I and II only
- B. II, III and IV only
- C. III and IV only
- D. All of I–IV

<details><summary>Answer</summary>

**B.** I is false (the depletion region is depleted of mobile carriers). II, III and IV are true.
</details>

## Review by error, not by score

| If you missed… | Revisit | Then retry |
| --- | --- | --- |
| 1–3 or 11 | Band theory and doping | Classify materials and compute carrier densities |
| 4–5 or 12, 15 | p–n junction and rectifiers | Diode bias and average DC output |
| 6 or 14 | Special-purpose diodes | LED wavelength from band gap |
| 7 or 13 | Junction transistor | $\alpha$–$\beta$ conversion and current division |
| 8–10 or 19–20 | Logic gates and junction physics | Truth tables and depletion region |
| 16–18 | Conceptual links | Temperature trend, Zener regulation, universality |

Aim for at least 22 correct out of 25 with a written method choice for every question. Questions you solve correctly but cannot justify are revision targets, not mastered topics.