## How to use this set

This is a **50-minute, no-notes** paper in JEE Main style, for after the seven concept lessons and the practice module. Work with the constants $R=8.31\ \text{J}\ \text{mol}^{-1}\ \text{K}^{-1}$; no $g$ is needed — this chapter is thermal. Suggested split: Section A (12 minutes), Section B (15), Section C (12), Section D (11). If a question passes $90$ seconds without a path forward, mark it and move on; the numerical answers are chosen so that clean setups earn clean numbers.

Name the constraint *before* computing: what is held fixed, and what does the question rule out? Most slips in this chapter are process-identification slips, not arithmetic ones.

## Conditions and formula sheet

| Situation | Reach for | Check before use |
| --- | --- | --- |
| Any process | $\Delta U=Q-W$ ($W$ = work done **by** the gas) | Convert "work on gas" statements to this sign first. |
| Heating/cooling | $Q=nC\,\Delta T$ | Name what is fixed: $C_V$ only for constant volume, $C_P$ only for constant pressure. |
| Quasistatic expansion/compression | $W=\int P\,dV$ (area under the curve) | Sign: expansion positive. |
| Isothermal, ideal gas | $W=nRT\ln(V_f/V_i)$ | $\Delta U=0$, so $Q=W$. |
| Adiabatic, ideal gas | $PV^\gamma=\text{constant}$; $TV^{\gamma-1}=\text{constant}$; $W=\frac{nR\,(T_i-T_f)}{\gamma-1}$ | $Q=0$; the process must be fast or insulated. |
| Complete cycle | $\Delta U=0$; $W_{net}=$ enclosed area (clockwise $+$) | $Q_{net}=W_{net}$ closes the ledger. |
| Engine | $\eta=W/Q_h=1-\frac{Q_c}{Q_h}\le1-\frac{T_c}{T_h}$ | Temperatures in kelvin. |
| Refrigerator | $\beta=Q_c/W$, ideal ceiling $\frac{T_c}{T_h-T_c}$ | $\beta>1$ is legal; $Q_h=Q_c+W$. |

<learning-block type="mistake" title="Fastest sanity checks">

A temperature reached by adiabatic compression should rise, by expansion fall; a cyclic efficiency above $1-T_c/T_h$ is impossible; an "ideal gas heat absorption" answer for an isothermal process cannot use $\Delta T=0$. If a result trips any of these, revisit the constraint, not the calculator.

</learning-block>

## Section A — 10 rapid MCQs

### 1. Which is not a state function?

- A. Internal energy
- B. Pressure
- C. Heat
- D. Volume

<details><summary>Answer</summary>

**C.** Heat $Q$ describes energy crossing the boundary *during a process*; the same endpoints admit different $Q$ along different paths. $U$, $P$ and $V$ are fixed once the state is fixed.
</details>

### 2. First-law arithmetic

A gas absorbs $200\ \text{J}$ of heat and does $50\ \text{J}$ of work. Its change in internal energy is:

- A. $+150\ \text{J}$
- B. $+250\ \text{J}$
- C. $-150\ \text{J}$
- D. $-250\ \text{J}$

<details><summary>Answer</summary>

**A.** $\Delta U=Q-W=200-50=+150\ \text{J}$.
</details>

### 3. Isochoric stage

In a constant-volume process on an ideal gas, the quantity guaranteed to be zero is:

- A. $\Delta U$
- B. $W$
- C. $Q$
- D. $\Delta T$

<details><summary>Answer</summary>

**B.** No volume change means no boundary work ($W=P\,\Delta V=0$); $Q=\Delta U=nC_V\,\Delta T$ may be large.
</details>

### 4. Ratio for a monatomic gas

For a monatomic ideal gas, $\gamma=C_P/C_V$ equals:

- A. $1.4$
- B. $1.33$
- C. $1.67$
- D. $2.0$

<details><summary>Answer</summary>

**C.** $f=3$ gives $\gamma=1+\frac{2}{3}=\frac53\approx1.67$. (A is diatomic, B is polyatomic.)
</details>

### 5. The universal difference

For an ideal gas, the molar heats satisfy:

- A. $C_P-C_V=R$ always
- B. $C_P-C_V=R$ only for monatomic gases
- C. $C_P=C_V$ at high temperature
- D. $C_V-C_P=R$

<details><summary>Answer</summary>

**A.** The difference measures the boundary work $nR\,\Delta T$ per mole per kelvin of a constant-pressure expansion, independent of $f$: $C_P-C_V=R$ for every ideal gas.
</details>

### 6. Adiabatic expansion does work

A gas expands adiabatically, doing positive work. Its temperature:

- A. rises
- B. falls
- C. stays constant
- D. cannot be predicted

<details><summary>Answer</summary>

**B.** $Q=0$ and $\Delta U=-W<0$; for an ideal gas, temperature must fall. Adiabatic expansion always cools the working gas.
</details>

### 7. The steeper curve

Through any shared state on a $P$–$V$ diagram, the steeper curve belongs to:

- A. the isotherm
- B. the adiabat
- C. both equally
- D. it depends on the gas

<details><summary>Answer</summary>

**B.** Isothermal slope $-P/V$; adiabatic slope $-\gamma P/V$; since $\gamma>1$ the adiabat is steeper by that factor.
</details>

### 8. Over one full cycle

For any system completing a cycle:

- A. $Q_{net}=0$
- B. $W_{net}=0$
- C. $\Delta U=0$
- D. $\Delta T=0$ for every stage

<details><summary>Answer</summary>

**C.** The state returns to its start, so $\Delta U=0$; then $Q_{net}=W_{net}$, both generally nonzero. Individual stages may have any $\Delta T$.
</details>

### 9. Carnot efficiency

A Carnot engine runs between $600\ \text{K}$ and $300\ \text{K}$. Its efficiency is:

- A. $25\ \%$
- B. $50\ \%$
- C. $60\ \%$
- D. $75\ \%$

<details><summary>Answer</summary>

**B.** $\eta=1-\frac{300}{600}=0.50$. (In Celsius figures this pair would look like $1-\frac{27}{327}$ — meaningless; kelvin only.)
</details>

### 10. Ideal refrigerator

An ideal refrigerator moves heat from a $270\ \text{K}$ compartment to a $300\ \text{K}$ room. Its COP is:

- A. $0.11$
- B. $1.11$
- C. $9.0$
- D. $10.0$

<details><summary>Answer</summary>

**C.** $\beta=\frac{T_c}{T_h-T_c}=\frac{270}{30}=9$. Values above 1 are fine for COP; small temperature gaps buy cheap heat pumping.
</details>

## Section B — 5 numerical-value questions

Give the value with units; no options to eliminate.

### 11. Isothermal work

One mole of ideal gas at $300\ \text{K}$ doubles its volume slowly and isothermally. Find the work done by the gas.

<details><summary>Answer</summary>

$W=nRT\ln\frac{V_f}{V_i}=1\times8.31\times300\times0.693=1728\ \text{J}\approx1.73\times10^3\ \text{J}$. With $\Delta U=0$, the same $1.73\ \text{kJ}$ is absorbed as heat from the reservoir.
</details>

### 12. Two-stage ledger

In stage 1 a gas absorbs $900\ \text{J}$ of heat while doing $250\ \text{J}$ of work. In stage 2, adiabatic, the gas does $350\ \text{J}$ of work. Find the total change in internal energy.

<details><summary>Answer</summary>

Stage 1: $\Delta U_1=900-250=650\ \text{J}$. Stage 2: $Q=0$, $W=350\ \text{J}$, so $\Delta U_2=-350\ \text{J}$. Total $\Delta U=300\ \text{J}$. Check: $Q_{net}=900$, $W_{net}=600$, and $900-600=300\ \text{J}$.
</details>

### 13. Adiabatic temperature, exact factor

A monatomic ideal gas at $300\ \text{K}$ is compressed adiabatically to $\frac{1}{27}$ of its initial volume. Find the final temperature.

<details><summary>Answer</summary>

$TV^{\gamma-1}=\text{constant}$ with $\gamma-1=\frac23$:

$$
T_f=300\times27^{2/3}=300\times9=2700\ \text{K}.
$$

The cubed volume ratio with a $\frac23$ exponent is designed to give an integer check ($8^{2/3}=4$, $27^{2/3}=9$) — if your factor is $3$ instead of $9$, you have used $\gamma-1=\frac13$.
</details>

### 14. Carnot work per cycle

A Carnot engine between $500\ \text{K}$ (source) and $300\ \text{K}$ (sink) absorbs $1000\ \text{J}$ per cycle. Find the work delivered per cycle.

<details><summary>Answer</summary>

$\eta=1-\frac{300}{500}=0.40$, so $W=0.40\times1000=400\ \text{J}$ per cycle; the remaining $600\ \text{J}$ must go to the sink, and indeed $Q_c/Q_h=0.60=T_c/T_h$.
</details>

### 15. Price of pumping

An ideal refrigerator runs between a $250\ \text{K}$ cold box and a $300\ \text{K}$ room. How much work removes $900\ \text{J}$ from the cold box?

<details><summary>Answer</summary>

$\beta=\frac{250}{300-250}=5$, so $W=\frac{Q_c}{\beta}=\frac{900}{5}=180\ \text{J}$. Check the whole ledger: $Q_h=900+180=1080\ \text{J}$ delivered to the room.
</details>

## Section C — 3 assertion–reason questions

Choose the standard option: **(a)** both statements true and R correctly explains A; **(b)** both true but R does not explain A; **(c)** A true, R false; **(d)** A false, R true.

### 16. Free expansion

**A:** An ideal gas expanding adiabatically into a vacuum undergoes no temperature change.
**R:** For an ideal gas the internal energy depends only on temperature, and in expanding into a vacuum the gas does no work and absorbs no heat.

<details><summary>Answer</summary>

**(a).** $Q=0$ (insulated) and $W=0$ (nothing to push against) give $\Delta U=0$; temperature is therefore unchanged. The reason is precisely the argument the assertion runs on. (Non-ideal gases can cool slightly here — an intermolecular-potential effect outside the ideal-gas model.)
</details>

### 17. Substance-independent ceiling

**A:** The efficiency of a Carnot engine depends on the working substance used in the cycle.
**R:** Any reversible engine operating between the same two reservoirs must have the same efficiency, fixed by $1-T_c/T_h$.

<details><summary>Answer</summary>

**(d).** A is false: the Carnot efficiency depends only on the reservoir temperatures (kelvin). R is the correct reason *why* it is false — all reversible engines between given reservoirs share the ceiling, so no substance enters.
</details>

### 18. Two heat capacities

**A:** $C_P$ of an ideal gas is greater than $C_V$.
**R:** At constant pressure the expanding gas does work on its surroundings, so extra heat is needed for the same temperature rise.

<details><summary>Answer</summary>

**(a).** Both statements are true, and the reason is the physical content of $C_P-C_V=R$: the extra $R$ per mole per kelvin is exactly the boundary work.
</details>

## Section D — matching and multi-statement

### 19. Match the process to its consequence

| Process | | Consequence (over the stated change) |
| --- | --- | --- |
| I. Isochoric | (P) | $Q=0$ |
| II. Isothermal, ideal gas | (Q) | $W=0$ |
| III. Adiabatic | (R) | $\Delta U=0$ and $Q=W$ |
| IV. Cyclic, complete | (S) | $W_{net}=$ enclosed area and $Q_{net}=W_{net}$ |

Match I–IV to P–S.

<details><summary>Answer</summary>

I→Q, II→R, III→P, IV→S.

- Isochoric: no boundary work, $W=0$, $Q=\Delta U$.
- Isothermal (ideal gas): $\Delta U=0$, all absorbed heat converts to work.
- Adiabatic: no heat transfer; internal energy pays for the gas's work.
- Cyclic: state restored; net work equals the signed enclosed area and the net heat.
</details>

### 20. Multi-statement check

For $n$ moles of a monatomic ideal gas, which statements are correct?

- I. $U=\frac32\,nRT$
- II. $C_V=\frac32R$ per mole
- III. $C_P=\frac52R$ per mole
- IV. $\gamma=\frac75$

<details><summary>Answer</summary>

I, II and III; IV is wrong. Monatomic gas: $f=3$, so $U=\frac32\,nRT$, $C_V=\frac32R$, and $C_P=C_V+R=\frac52R$. But $\gamma=\frac{C_P}{C_V}=\frac53\approx1.67$, not $\frac75=1.4$ (a diatomic value: $f=5$).
</details>

## If you slipped, revisit

| Slips on | Revisit |
| --- | --- |
| Q1, Q2, Q8, Q12, Q16 | `first-law.md` — sign bookkeeping and the cycle rule |
| Q4, Q5, Q18, Q20 | `specific-heats.md` — $C_V$, $C_P$ and $\gamma$ per substance |
| Q3, Q6, Q7, Q11, Q13 | `thermodynamic-processes.md` — the four processes and their laws |
| Q19 | `cyclic-processes.md` — reading $P$–$V$ loops and their signs |
| Q9, Q10, Q14, Q15 | `second-law.md` and `carnot-cycle.md` — $\eta$ and $\beta$ in kelvin |

A clean score needs the constraint named before any formula; if most misses were process-identification rather than arithmetic, work through the mastery check's "First choose the tool" table once more before re-timing.
