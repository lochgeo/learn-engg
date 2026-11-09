## JEE Main sprint: how to use this set

This is a **50-minute, no-notes** paper covering chemical and ionic equilibrium. Budget roughly: 15 minutes for Section A, 15 for Section B, 8 for Section C, 12 for Section D, keeping the last few minutes to fill in value answers. Mark and move on after $90$ seconds of silence.

## Conditions and formula sheet

| Constant / relation | Value |
| --- | --- |
| $K_w$ (298 K) | $1.0\times10^{-14}$ |
| pH $= -\log[\mathrm{H^+}]$; $\mathrm{pH} + \mathrm{pOH} = 14$ at 298 K | unless temperature is stated otherwise |
| $K_p = K_c(RT)^{\Delta n}$, $\Delta n$ = change in moles of gas | $R = 0.0831\ \text{L·bar·mol}^{-1}\text{·K}^{-1}$ |
| weak acid/base | $[\mathrm{H^+}] = \sqrt{K_a C}$, $[\mathrm{OH^-}] = \sqrt{K_b C}$ when $x \ll C$ |
| Henderson–Hasselbalch | $\mathrm{pH} = \mathrm{p}K_a + \log\frac{[salt]}{[acid]}$ |
| $K_{sp}$ patterns | AB: $s^2$; AB$_2$/A$_2$B: $4s^3$; A$_3$B$_2$: $108\,s^5$ |
| log values | $\log 2 = 0.30$, $\log 3 = 0.48$, $\log 5 = 0.70$, $\log 7 = 0.85$ |

<learning-block type="mistake" title="Fastest sanity checks">

An acid solution cannot end basic (watch very dilute acids), positive concentrations only, and $K_{sp} \to s$ conversions need the **formula type**, not habit. If a pH lands outside $0$–$14$ in a routine problem, the arithmetic has gone wrong somewhere.

</learning-block>

## Section A — 10 rapid MCQs

### 1. Equilibrium character

Which statement about the equilibrium $\mathrm{A \rightleftharpoons B}$ is necessarily true?

- A. $[\mathrm{A}] = [\mathrm{B}]$
- B. The forward and reverse rates are both zero
- C. The forward and reverse rates are equal
- D. The reaction quotient $Q$ is unity

<details><summary>Answer</summary>

**C.** Equilibrium fixes equal *rates*, not equal concentrations; $Q = K$ there, and $K$ need not be $1$.
</details>

### 2. $K_p$ versus $K_c$

For which reaction is $K_p = K_c$ exactly?

- A. $\mathrm{N_2 + 3H_2 \rightleftharpoons 2NH_3}$
- B. $\mathrm{PCl_5 \rightleftharpoons PCl_3 + Cl_2}$
- C. $\mathrm{H_2 + I_2 \rightleftharpoons 2HI}$
- D. $\mathrm{CaCO_3(s) \rightleftharpoons CaO(s) + CO_2}$

<details><summary>Answer</summary>

**C.** $\Delta n = 2 - 2 = 0$, so $K_p = K_c(RT)^0 = K_c$. Options A ($-2$), B ($+1$) and D ($+1$) all fail that test.
</details>

### 3. Catalysis claim

A catalyst is added to a system at equilibrium. The reaction quotient then:

- A. increases
- B. decreases
- C. stays equal to $K$
- D. changes, then returns

<details><summary>Answer</summary>

**C.** The catalyst multiplies both forward and reverse rates equally, so the balance point — and $Q$ — do not move.
</details>

### 4. Pressure shift

For $\mathrm{N_2O_4(g) \rightleftharpoons 2NO_2(g)}$ at equilibrium, compressing the container at constant temperature:

- A. favours $\mathrm{N_2O_4}$
- B. favours $\mathrm{NO_2}$
- C. shifts nothing
- D. raises $K$

<details><summary>Answer</summary>

**A.** Compression favours the side with fewer gaseous moles ($1$ vs $2$). $K$ never moves under pressure changes; only temperature edits it.
</details>

### 5. pH of a weak base

$K_b$ of a weak base $\mathrm{BOH}$ is $1.0\times10^{-5}$. The pH of a $0.10\ \text{M}$ solution is closest to:

- A. $3.0$
- B. $5.0$
- C. $9.0$
- D. $11.0$

<details><summary>Answer</summary>

**D.** $[\mathrm{OH^-}] = \sqrt{(1.0\times10^{-5})(0.10)} = 1.0\times10^{-3}\ \text{M}$, so $\mathrm{pOH} = 3.0$ and $\mathrm{pH} = 11.0$.
</details>

### 6. Very dilute acid

The pH of $1.0\times10^{-8}\ \text{M}$ of $\mathrm{HCl}$ at $298\ \text{K}$ is:

- A. exactly $8$
- B. exactly $7$
- C. slightly less than $7$
- D. slightly more than $7$

<details><summary>Answer</summary>

**C.** The acid's own contribution is far below water's $10^{-7}\ \text{M}$; the full balance $[\mathrm{H^+}] = \frac{C + \sqrt{C^2 + 4K_w}}{2}$ gives about $1.05\times10^{-7}\ \text{M}$, pH $\approx 6.98$ — acidic water, never basic.
</details>

### 7. Precipitate or not?

Equal volumes of $0.010\ \text{M}$ of $\mathrm{AgNO_3}$ and $0.0010\ \text{M}$ of $\mathrm{NaCl}$ are mixed. $K_{sp}(\mathrm{AgCl}) = 1.8\times10^{-10}$. $\mathrm{AgCl}$:

- A. does not precipitate
- B. just begins to precipitate
- C. precipitates substantially
- D. cannot be judged without temperature

<details><summary>Answer</summary>

**C.** After halving by mixing: $[\mathrm{Ag^+}] = 5.0\times10^{-3}$, $[\mathrm{Cl^-}] = 5.0\times10^{-4}$, and $Q_{sp} = 2.5\times10^{-6} \gg K_{sp}$: heavy precipitation.
</details>

### 8. Buffer recipe

Which pair makes a buffer at pH not far from $7$? ($\mathrm{p}K_a$: $\mathrm{CH_3COOH}$ $4.74$; $\mathrm{NH_4^+}$ $9.25$; $\mathrm{H_2PO_4^-}$ $7.2$)

- A. $\mathrm{HCl + NaCl}$
- B. $\mathrm{CH_3COOH + CH_3COONa}$
- C. $\mathrm{NH_4Cl + NH_3}$
- D. $\mathrm{H_2PO_4^- + HPO_4^{2-}}$

<details><summary>Answer</summary>

**D.** Its $\mathrm{p}K_a = 7.2$ sits nearest the target; the buffer range is $\pm 1$ about $\mathrm{p}K_a$. Option A is not a buffer at all; B and C are buffers centred far from 7.
</details>

### 9. Both directions at once

A salt of a weak acid $\mathrm{HA}$ ($K_a = 1.0\times10^{-5}$) and a weak base $\mathrm{BOH}$ ($K_b = 1.0\times10^{-7}$) is dissolved in water. The solution is:

- A. acidic
- B. basic
- C. neutral
- D. amphoteric without trend

<details><summary>Answer</summary>

**A.** Score the players: the anion $\mathrm{A^-}$ has $K_b = K_w/K_a = 10^{-9}$ (weak base); the cation $\mathrm{B^+}$ has $K_a = K_w/K_b = 10^{-7}$ (larger). The cation wins, so the solution is acidic.
</details>

### 10. Common-ion effect

Less of a sparingly soluble salt $\mathrm{MX_2}$ dissolves when it is placed in:

- A. $\mathrm{KNO_3}$ solution
- B. $\mathrm{NaX}$ solution
- C. $\mathrm{NaNO_3}$ solution
- D. pure water

<details><summary>Answer</summary>

**B.** $\mathrm{X^-}$ is the common ion; adding it pushes $\mathrm{MX_2(s) \rightleftharpoons M^{2+} + 2X^-}$ back toward the solid. Options A and C contain only spectator ions ($\mathrm{K^+}$, $\mathrm{Na^+}$, $\mathrm{NO_3^-}$), so they act much like pure water, and D has the greatest solubility of all.
</details>

## Section B — 5 numerical-value questions

### 11. Degree of dissociation and $K_c$

$0.50\ \text{mol}$ of $\mathrm{PCl_5}$ in a $5.0\ \text{L}$ flask is $40\%$ dissociated at equilibrium. Find $K_c$ (in mol/L units).

<details><summary>Answer</summary>

Dissociated $= 0.20\ \text{mol}$: $\mathrm{PCl_5}$ left $= 0.30$, products $0.20\ \text{mol}$ each.

$$
[\mathrm{PCl_5}] = 0.060,\quad [\mathrm{PCl_3}] = [\mathrm{Cl_2}] = 0.040
$$

$$
K_c = \frac{(0.040)^2}{0.060} = 2.7\times10^{-2}\ \text{mol/L}
$$

Numerical-value answer: $0.027$.
</details>

### 12. $K_p$ from $K_c$

At $500\ \text{K}$, $K_p$ for $\mathrm{N_2 + 3H_2 \rightleftharpoons 2NH_3}$ is $2.9\times10^{-4}$. Find $K_c$ there; $R = 0.0831$ in matching units. (Answer to two significant figures.)

<details><summary>Answer</summary>

$\Delta n = -2$, so $K_p = K_c (RT)^{-2}$ and

$$
K_c = K_p (RT)^2 = 2.9\times10^{-4} \times (41.55)^2 = 2.9\times10^{-4}\times1.73\times10^{3} = 0.50
$$

Exactly the value used in worked examples — round-trip consistency is the check.
</details>

### 13. Weak acid pH

What is the pH of $0.10\ \text{M}$ of $\mathrm{CH_3COOH}$? ($K_a = 1.8\times10^{-5}$)

<details><summary>Answer</summary>

$$
[\mathrm{H^+}] = \sqrt{(1.8\times10^{-5})(0.10)} = 1.34\times10^{-3}\ \text{M}
$$

$$
\mathrm{pH} = 3 - \log 1.34 = 3 - 0.13 = 2.87
$$

</details>

### 14. Buffer after base attack

$1.0\ \text{L}$ of buffer has $0.20\ \text{mol}$ of $\mathrm{NH_3}$ and $0.20\ \text{mol}$ of $\mathrm{NH_4Cl}$. $\mathrm{p}K_b(\mathrm{NH_3}) = 4.74$. After adding $0.040\ \text{mol}$ of solid $\mathrm{NaOH}$, what is the pH? (Report to two decimal places.)

<details><summary>Answer</summary>

$\mathrm{OH^-}$ converts $\mathrm{NH_4^+}$ into $\mathrm{NH_3}$:

$$
n(\mathrm{NH_3}) = 0.24,\qquad n(\mathrm{NH_4^+}) = 0.16
$$

$$
\mathrm{pOH} = 4.74 + \log\frac{0.16}{0.24} = 4.74 + \log 0.67 = 4.74 - 0.18 = 4.56
$$

$$
\mathrm{pH} = 14 - 4.56 = 9.44
$$

</details>

### 15. Solubility product from data

A sparingly soluble hydroxide $\mathrm{M(OH)_2}$ has a solubility of $2.0\times10^{-6}\ \text{M}$ in pure water. Find $K_{sp}$.

<details><summary>Answer</summary>

$\mathrm{M(OH)_2(s) \rightleftharpoons M^{2+} + 2OH^-}$: $[\mathrm{M^{2+}}] = s$, $[\mathrm{OH^-}] = 2s = 4.0\times10^{-6}\ \text{M}$.

$$
K_{sp} = s(2s)^2 = 4s^3 = 4(8.0\times10^{-18}) = 3.2\times10^{-17}
$$

</details>

## Section C — 3 assertion–reason questions

Each item offers an **Assertion (A)** and a **Reason (R)**. Mark:
- (a) both true, and $R$ is the correct explanation of $A$
- (b) both true, but $R$ is not the correct explanation of $A$
- (c) $A$ true, but $R$ false
- (d) $A$ false, but $R$ true

### 16. Pure phases in $K$

**A:** More finely powdered $\mathrm{CaCO_3}$ increases the equilibrium pressure of $\mathrm{CO_2}$ over $\mathrm{CaCO_3/CaO}$.
**R:** $K_p = p_{\mathrm{CO_2}}$ for $\mathrm{CaCO_3(s) \rightleftharpoons CaO(s) + CO_2(g)}$, so the carbon dioxide pressure is set by temperature alone.

<details><summary>Answer</summary>

**(d).** The assertion is false — surface area changes how *fast* equilibrium is approached, not its position. The reason is the exact statement that shows why the assertion fails: only temperature enters $K_p$ here.
</details>

### 17. Temperature is special

**A:** In an exothermic equilibrium, raising the temperature lowers the equilibrium constant $K$.
**R:** Heat behaves like a product in an exothermic reaction; adding it drives the balance backward.

<details><summary>Answer</summary>

**(a).** Both statements are true and connected: writing heat on the product side, the added heat forces a backward response *and* shows up numerically as a smaller $K$ (through $\Delta G^\circ = -RT\ln K$).
</details>

### 18. Catalyst and yield

**A:** Contact-process plants install $\mathrm{V_2O_5}$ mainly to raise the amount of $\mathrm{SO_3}$ at equilibrium.
**R:** A catalyst does not alter the equilibrium constant.

<details><summary>Answer</summary>

**(d).** The assertion is false — catalysts cannot raise equilibrium amounts; their role is kinetic (speeding the arrival). The reason is true and precisely excludes the assertion's claim.
</details>

## Section D — matching and multi-statement

### 19. Match the columns

Match List I with List II.

| List I | List II |
| --- | --- |
| P. $\mathrm{PCl_5 \rightleftharpoons PCl_3 + Cl_2}$ | 1. $K_p = K_c$ |
| Q. $\mathrm{N_2 + 3H_2 \rightleftharpoons 2NH_3}$ | 2. $K_p > K_c$ |
| R. $\mathrm{H_2 + I_2 \rightleftharpoons 2HI}$ | 3. $K_p < K_c$ |
| S. $\mathrm{2SO_2 + O_2 \rightleftharpoons 2SO_3}$ | 4. $K_p < K_c$ with the larger gap |
| | 5. $K_p > K_c$ with the larger gap |

Choose the correct combination:

- A. P-2, Q-4, R-1, S-3
- B. P-3, Q-2, R-1, S-4
- C. P-5, Q-4, R-1, S-3
- D. P-2, Q-5, R-3, S-4

<details><summary>Answer</summary>

**A.** Count $\Delta n$ (gaseous products minus gaseous reactants): P is $+1$, Q is $-2$, R is $0$, S is $-1$. Hence P: $K_p > K_c$ (2); Q: $K_p < K_c$ with $\Delta n = -2$, the largest gap (4); R: $K_p = K_c$ (1); S: $K_p < K_c$ (3). Entry 5 has no owner — it would need $\Delta n = +2$, which none of the four equations carries.
</details>

### 20. Multi-statement judgement

Consider the statements about a $0.10\ \text{M}$ solution of $\mathrm{CH_3COONa}$ ($K_a$ of acetic acid $= 1.8\times10^{-5}$):

1. The solution is acidic.
2. $K_h = K_w/K_a \approx 5.6\times10^{-10}$.
3. $[\mathrm{OH^-}] \approx 7.5\times10^{-6}\ \text{M}$.
4. A ten-fold dilution of the solution leaves the pH unchanged.

Which statements are correct?

- A. 1 and 2 only
- B. 2 and 3 only
- C. 2, 3 and 4 only
- D. 1, 2, 3 and 4

<details><summary>Answer</summary>

**B.** Sodium acetate is a salt of a weak acid with a strong base: **basic**, not acidic — statement 1 is false. Statement 2 is the hydrolysis constant. Statement 3 follows: $[\mathrm{OH^-}] = \sqrt{K_h C} = \sqrt{5.6\times10^{-11}} \approx 7.5\times10^{-6}\ \text{M}$, giving pH $= 8.87$. Statement 4 is false because $[\mathrm{OH^-}] = \sqrt{K_h C}$ shrinks by $\sqrt{10}$ on ten-fold dilution, so pH moves by about half a unit back toward $7$ — hydrolysing-salt pH, like weak-acid pH, scales with $\sqrt{C}$.
</details>

## Review by error, not by score

| If you missed… | Revisit | Then re-drill |
| --- | --- | --- |
| 1, 3, 16, 18 | Physical and chemical equilibrium | Separate rate balance from amount equality, and catalyst from shift |
| 2, 12, 19 | $K_c$, $K_p$ and the law of mass action | Count gaseous moles first, quote $\Delta n$, then pick the relation |
| 7, 10, 15 | Solubility product and $Q_{sp}$ | Always post-dilution comparisons, and the formula-type table |
| 4 | Le Chatelier's principle | Compression favours fewer gaseous moles; only temperature edits $K$ |
| 5, 6, 9, 13 | Acids, bases and hydrolysis | $\sqrt{K_a C}$ for weak electrolytes; score $K_a$ vs $K_b$ when both ions hydrolyse |
| 8, 14 | Buffers | Henderson–Hasselbalch on **new** mole counts after every addition |

<learning-block type="recap" title="Ready for the real paper?">

Aim for at least $15$ of $20$ correct, with the method written down for each. Correct-but-unjustified answers are revision targets, not mastery — and value-answer slips in Section B usually trace to a skipped dilution step or a missing formula-type check.

</learning-block>
