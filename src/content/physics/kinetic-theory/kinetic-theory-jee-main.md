## JEE Main sprint: how to use this set

This is a **50-minute, no-notes** paper for after the chapter lessons. Attempt it sitting at a desk, with a timer, before checking any answer. Budget roughly **15 minutes for Section A, 20 for Section B, 10 for Section C, and 5 for Section D**. If a calculation exceeds 90 seconds, mark it and move on — kinetic-theory marks come from recalling the right formula fast, not grinding arithmetic.

The habit being trained: before writing numbers, name the tool. Is the question about a **state change** ($pV=nRT$), a **speed or energy** (kinetic formulas), an **energy partition** ($f$ and the specific heats), a **collision scale** ($\lambda$), or a **real gas** ($Z$)? Choosing wrong costs more time than any algebra.

## Conditions and formula sheet

| Constant / relation | Value or form |
| --- | --- |
| $R$ | $8.314\ \text{J mol}^{-1}\text{K}^{-1}=0.0821\ \text{litre atm}\ \text{mol}^{-1}\text{K}^{-1}$ |
| $k_B$ | $1.38\times10^{-23}\ \text{J/K}$ |
| $N_A$ | $6.02\times10^{23}\ \text{mol}^{-1}$ |
| Molar masses (kg/mol) | H₂: 0.002, He: 0.004, CH₄: 0.016, N₂: 0.028, O₂: 0.032 |
| Kelvin conversion | $T_{\text{K}}=T_{\text{°C}}+273$ |
| State change | $pV=nRT$; compare two states |
| Speeds | $v_{rms}=\sqrt{3RT/M}$, $v_{mp}:\langle v\rangle:v_{rms}=1:1.128:1.225$ |
| Energy | $\langle K\rangle=\tfrac32k_BT$ per molecule, $\tfrac32RT$ per mole (translation) |
| Specific heats | $C_V=\frac f2R$, $C_p=C_V+R$, $\gamma=1+2/f$ |
| Free path | $\lambda=1/(\sqrt2\pi d^2n)=k_BT/(\sqrt2\pi d^2p)$, $z=\langle v\rangle/\lambda$ |
| Real gases | $Z=pV/nRT$; $(p+an^2/V^2)(V-nb)=nRT$; $T_c=8a/27Rb$ |

<learning-block type="mistake" title="The three fastest ways to lose marks here">

Using Celsius in a ratio instead of kelvin; using grams in the speed formula instead of kg/mol; answering a numerical-value question with a wrong-sign or dimension-inconsistent value. Check all three before moving to the next question.

</learning-block>

## Section A — 10 rapid MCQs

### 1. Speed versus temperature

The most probable speed of a gas sample at $27^\circ\text{C}$ is $v$. At $127^\circ\text{C}$ (same sample), it becomes:

- A. exactly $v$
- B. $1.15\,v$
- C. $1.33\,v$
- D. $2\,v$

<details><summary>Answer</summary>

**B.** $v_{mp}\propto\sqrt{T}$ in kelvin: $\sqrt{400/300}=\sqrt{1.33}=1.15$. Note that the answer is the same factor for all three characteristic speeds.
</details>

### 2. Ordering the fast lane

At one temperature, the correct order of rms speeds is:

- A. O₂ > N₂ > He > H₂
- B. H₂ > He > N₂ > O₂
- C. He > H₂ > O₂ > N₂
- D. N₂ > O₂ > H₂ > He

<details><summary>Answer</summary>

**B.** $v_{rms}\propto1/\sqrt{M}$; the molar masses run $2,\,4,\,28,\,32$, so the fastest is H₂ and the slowest O₂. Lighter always means faster at equal temperature.
</details>

### 3. Pressure and density into speed

A gas of density $1.3\ \text{kg/m}^3$ at $1.0\times10^{5}\ \text{Pa}$ has an rms speed of about:

- A. $108\ \text{m/s}$
- B. $240\ \text{m/s}$
- C. $480\ \text{m/s}$
- D. $960\ \text{m/s}$

<details><summary>Answer</summary>

**C.** $v_{rms}=\sqrt{3p/\rho}=\sqrt{3\times10^{5}/1.3}=\sqrt{2.31\times10^{5}}=480\ \text{m/s}$.
</details>

### 4. Translational energy per molecule

The average translational kinetic energy of an ideal-gas molecule at temperature $T$ is:

- A. $\frac32k_BT$
- B. $\frac32RT$
- C. $k_BT$
- D. $\frac12k_BT$

<details><summary>Answer</summary>

**A.** Per **molecule** the constant is $k_B$; per mole it is $R$ (option B would be the per-mole value). Translation stores $\frac32k_BT$ per molecule.
</details>

### 5. Diatomic specific heat

At room temperature the molar $C_V$ of a rigid diatomic gas is:

- A. $\frac32R$
- B. $\frac52R$
- C. $\frac72R$
- D. $3R$

<details><summary>Answer</summary>

**B.** $f=5$ for a rigid diatomic molecule (3 translations + 2 rotations), so $C_V=\frac52R\approx20.8\ \text{J mol}^{-1}\text{K}^{-1}$. Vibration stays frozen at room temperature.
</details>

### 6. Who has the stiffest gas?

Which gas has the largest $\gamma=C_p/C_V$ at room temperature?

- A. helium
- B. nitrogen
- C. methane
- D. carbon dioxide

<details><summary>Answer</summary>

**A.** $\gamma=1+2/f$ is largest when $f$ is smallest. Helium is monatomic ($f=3$, $\gamma=5/3$); nitrogen $f=5$ ($1.4$); methane and carbon dioxide, being rigid multi-atom molecules, store still more rotationally ($\gamma\approx1.3$).
</details>

### 7. isothermal doubling

An ideal gas expands isothermally to twice its volume. Its pressure:

- A. doubles
- B. halves
- C. is unchanged
- D. falls to a quarter

<details><summary>Answer</summary>

**B.** At fixed $T$ (and $n$), $pV=$ constant: Boyle's law, so doubling $V$ halves $p$.
</details>

### 8. Free path under pressure

At constant temperature, the pressure on a gas sample is doubled. Its mean free path:

- A. doubles
- B. halves
- C. is unchanged
- D. increases fourfold

<details><summary>Answer</summary>

**B.** $\lambda=k_BT/(\sqrt2\pi d^2p)\propto1/p$ at fixed $T$: crowding the gas shortens each free flight.
</details>

### 9. Why dilute real gases behave ideally

At very low pressure a real gas obeys $pV=nRT$ closely because:

- A. the attraction constant $a$ becomes zero
- B. molecules stop colliding altogether
- C. both van der Waals corrections vanish as the gas dilutes
- D. molecular masses stop mattering

<details><summary>Answer</summary>

**C.** The attraction term $an^2/V^2$ falls as $1/V^2$ and the excluded volume $nb$ is negligible at large $V$. The constants themselves never change — only their influence does.
</details>

### 10. Squeezing above the critical point

A real gas above its critical temperature is compressed isothermally. It:

- A. liquefies at the saturated-vapour pressure
- B. liquefies at the critical pressure
- C. remains gaseous at any pressure
- D. solidifies

<details><summary>Answer</summary>

**C.** Above $T_c$ no liquid–vapour coexistence exists, so pressure alone can never condense the gas; a dense fluid simply forms. Liquefaction requires $T<T_c$ first.
</details>

## Section B — 5 numerical-value questions

Write the number with its unit. No options to eliminate — the answer is the answer.

### 11. Speed at the freezing point

Compute $v_{rms}$ for oxygen ($M=32\times10^{-3}\ \text{kg/mol}$) at $273\ \text{K}$.

<details><summary>Answer</summary>

$$
v_{rms}=\sqrt{\frac{3RT}{M}}=\sqrt{\frac{3(8.314)(273)}{0.032}}=\sqrt{2.13\times10^{5}}\approx461\ \text{m/s}.
$$
</details>

### 12. Energy per mole

Find the average translational kinetic energy per mole of a monatomic ideal gas at $27^\circ\text{C}$.

<details><summary>Answer</summary>

$$
\langle K\rangle=\frac32RT=\frac32(8.314)(300)=3741\ \text{J}\approx3.74\ \text{kJ}.
$$

Sanity check: per molecule this is $\frac32k_BT\approx6.2\times10^{-21}\ \text{J}$, and multiplying by $N_A=6.02\times10^{23}$ recovers $3741\ \text{J}$.
</details>

### 13. Free path in metres and nanometres

Gas molecules of diameter $d=2.5\times10^{-10}\ \text{m}$ are held at $1.01\times10^{5}\ \text{Pa}$ and $273\ \text{K}$. Find the mean free path (report in nm).

<details><summary>Answer</summary>

$$
n=\frac{p}{k_BT}=\frac{1.01\times10^{5}}{(1.38\times10^{-23})(273)}=2.7\times10^{25}\ \text{m}^{-3},
$$

$$
\lambda=\frac{1}{\sqrt2\pi d^2n}=\frac{1}{(1.414)(3.14)(6.25\times10^{-20})(2.7\times10^{25})}=\frac{1}{7.5\times10^{6}}\approx1.3\times10^{-7}\ \text{m},
$$

i.e. about $130\ \text{nm}$.
</details>

### 14. Heating at constant pressure

Four moles of monatomic gas are heated by $40\ \text{K}$ at constant pressure. How much heat enters (in joules)?

<details><summary>Answer</summary>

$$
Q=nC_p\Delta T=4\times\frac52R\times40=\frac{10}{2}(8.314)(40)=20.8\times160=3326\ \text{J}\approx3.3\ \text{kJ}.
$$

Note the constant pressure demands $C_p=\frac52R$ for a monatomic gas; at constant volume the same heating would have cost only $1995\ \text{J}$, the difference being expansion work.
</details>

### 15. Counting molecules at STP

How many molecules occupy $11.2\ \text{litre}$ at STP ($22.4\ \text{litre per mole}$)?

<details><summary>Answer</summary>

$n=11.2/22.4=0.50\ \text{mol}$, so $N=0.50\times6.02\times10^{23}=3.01\times10^{23}$ molecules.
</details>

## Section C — 3 assertion–reason questions

Each question lists an assertion (A) and a reason (R). Choose:

- **a** — both A and R are true, and R is the correct explanation of A
- **b** — both A and R are true, but R is not the correct explanation of A
- **c** — A is true but R is false
- **d** — A is false but R is true

### 16. Free path versus temperature

**Assertion:** at constant pressure, the mean free path of gas molecules increases as the temperature rises.
**Reason:** at higher temperature the molecules move faster.

<details><summary>Answer</summary>

**b.** The assertion is true: $\lambda\propto T/p$ at fixed pressure. But the reason is not the explaining mechanism — the free path formula $\lambda=1/(\sqrt2\pi d^2n)$ depends on number density and diameter, not speed. The real cause is that heating at constant pressure expands the gas and thins the number density.
</details>

### 17. Two gases, one temperature

**Assertion:** at the same temperature, the rms speeds of H₂ and O₂ molecules differ by a factor of $4$.
**Reason:** $v_{rms}\propto1/\sqrt{M}$.

<details><summary>Answer</summary>

**a.** $v_{\text{H}_2}/v_{\text{O}_2}=\sqrt{32/2}=4$, and the reason states exactly the governing scaling law. Lighter molecules run faster while carrying the same average translational energy.
</details>

### 18. Liquefying oxygen

**Assertion:** oxygen gas ($T_c=154\ \text{K}$) at $300\ \text{K}$ cannot be liquefied by pressure alone.
**Reason:** a real gas can be liquefied by pressure only below its critical temperature.

<details><summary>Answer</summary>

**a.** $300\ \text{K}$ sits above oxygen's $154\ \text{K}$ critical temperature, and the reason is the general rule behind it: above $T_c$ there is no liquid–vapour coexistence region, so isothermal compression produces a dense gas, not a liquid. Cooling first, then compressing, would work.
</details>

## Section D — 2 matching / multi-statement questions

### 19. Matching energies and ratios

Match each gas description (column I) with its molar $C_V$ and $\gamma$ (column II). Use $R$ freely.

| Column I (gas at room temperature unless said) | Column II |
| --- | --- |
| P. monatomic | 1. $C_V=\frac52R,\ \gamma=\frac75$ |
| Q. rigid diatomic | 2. $C_V=\frac32R,\ \gamma=\frac53$ |
| R. diatomic with active vibration | 3. $C_V=3R,\ \gamma=\frac43$ |
| S. rigid non-linear polyatomic | 4. $C_V=\frac72R,\ \gamma=\frac97$ |

<details><summary>Answer</summary>

**P–2, Q–1, R–4, S–3.** Count degrees of freedom: monatomic $f=3$ → $C_V=\frac32R$, $\gamma=5/3$; rigid diatomic $f=5$ → $\frac52R$, $7/5$; vibrating diatomic $f=7$ (two extra quadratic slots) → $\frac72R$, $9/7$; rigid non-linear polyatomic $f=6$ (three rotations added) → $3R$, $4/3$.
</details>

### 20. Four statements about the molecular picture

Which of the following statements are **correct**?

1. For the same gas at the same temperature, $v_{rms}$ is never less than the mean speed $\langle v\rangle$.
2. At constant temperature, the mean free path is inversely proportional to the pressure.
3. At the same temperature and pressure, a gas of fatter molecules has a **shorter** mean free path.
4. At room temperature, the vibrational modes of a diatomic gas contribute fully to its specific heat.

<details><summary>Answer</summary>

**Statements 1, 2 and 3 are correct; statement 4 is false.**

1. True: $v_{rms}=\sqrt3$, $\langle v\rangle=\sqrt{8/\pi}$ in the same units, and $\sqrt3>\sqrt{8/\pi}$, with $v_{rms}\approx1.09\langle v\rangle$; the rms is inflated by the fast tail.
2. True: $\lambda=k_BT/(\sqrt2\pi d^2p)$ at constant $T$.
3. True: larger $d$ fattens $\pi d^2$ and shortens $\lambda=1/(\sqrt2\pi d^2n)$.
4. False: vibrational quanta are too large compared with $k_BT\approx 0.025\ \text{eV}$ at room temperature, so vibration stays frozen; only near several thousand kelvin does it join (then $C_V$ climbs from $\frac52R$ toward $\frac72R$).
</details>

## Where to go after a miss

| Questions missed | Revisit |
| --- | --- |
| 1, 2, 3, 4, 17 | Temperature and molecular speeds |
| 5, 6, 14, 19 | Degrees of freedom and specific heats |
| 7 | The ideal-gas model (gas laws from the equation of state) |
| 8, 13, 16, 20 | Mean free path |
| 9, 10, 18 | Real gases |
| 11, 12, 15 | The ideal-gas model, plus the speed formulas in Temperature and molecular speeds |
