## JEE Main sprint: how to use this set

A **50-minute, no-notes** paper in the chapter's style. Budget roughly $20$ min for Section A, $12$ for Section B, $10$ for Section C and $8$ for Section D — the last two reward reading precision rather than long arithmetic. Take $g = 10\ \text{m/s}^2$ where a question needs it (it barely will). Before writing any equation, name the tool from the conditions sheet; most wrong answers in this chapter begin as a wrong *choice of law*, not broken algebra.

## Conditions sheet

| Situation | Law to start with | Check before trusting it |
| --- | --- | --- |
| Size change with temperature | $\Delta L = \alpha L\Delta T$; $\Delta A = 2\alpha A\Delta T$; $\Delta V = 3\alpha V\Delta T$ | Small $\Delta T$; isotropic solid; holes expand like the material |
| Clock's time error | $\Delta T_{\text{period}}/T = \tfrac12\alpha\Delta\theta$ | The period grows: the clock runs slow |
| Heating and cooling without phase change | $Q = mc\,\Delta T$ signed | Include the container as water equivalent |
| Mixture involving ice, steam or sublimation | Latent terms $mL_f$, $mL_v$ first, then sensible phases | Test whether the phase change completes before balancing |
| Heat current through layers | $H = kA\Delta T/L$; $R = L/kA$; series: $R$ adds | One current everywhere; drops shared by resistance |
| Radiated or net exchanged power | $P = e\sigma A T^4$; $P_{net} = e\sigma A(T^4 - T_0^4)$ | Temperatures in kelvin, no exceptions |
| Peak colour of emission | Wien: $\lambda_m T = 2.9\times10^{-3}\ \text{m·K}$ | $\lambda_m$ in metres |
| Cooling in a mild room | Excess decays exponentially: $(\theta-\theta_0) \propto e^{-kt}$ | Valid for small excess; ratios, not linear extrapolation |

<learning-block type="mistake" title="Three fastest sanity failures">

Celsius inside $T^4$; reusing the *full* temperature difference across each slab of a series composite; crediting steam only its cooling and forgetting the $mL_v$ of condensation. Each of these produces a plausible-looking wrong number — audit them before submitting anything.

</learning-block>

## Section A — 10 rapid MCQs

### 1. Scale conversion

A winter morning reads $68^\circ\text{F}$. On the Celsius scale this is:

- A. $5^\circ\text{C}$
- B. $15^\circ\text{C}$
- C. $20^\circ\text{C}$
- D. $25^\circ\text{C}$

<details><summary>Answer</summary>

**C.** $T_C = \frac{5}{9}(68-32) = \frac{5}{9}(36) = 20^\circ\text{C}$.
</details>

### 2. Volume coefficient of a solid

The volume expansion coefficient $\gamma$ of an isotropic solid relates to its linear coefficient $\alpha$ as:

- A. $\gamma = \alpha$
- B. $\gamma = 2\alpha$
- C. $\gamma = 3\alpha$
- D. $\gamma = 6\alpha$

<details><summary>Answer</summary>

**C.** All three dimensions grow by $(1+\alpha\Delta T)$, so volume grows by the cube; to first order in the small quantity, $\gamma = 3\alpha$.
</details>

### 3. The heated hole

A circular hole is cut in a metal plate and the plate is heated uniformly. The diameter of the hole:

- A. decreases
- B. increases
- C. stays unchanged
- D. changes by a factor depending on the hole's position in the plate

<details><summary>Answer</summary>

**B.** Every separation between material points scales up; the hole's rim, being material, expands outward exactly as a disc *fitted there* would.
</details>

### 4. Water's density peak

The density of liquid water is maximum at approximately:

- A. $0^\circ\text{C}$
- B. $2^\circ\text{C}$
- C. $4^\circ\text{C}$
- D. $10^\circ\text{C}$

<details><summary>Answer</summary>

**C.** Near $4^\circ\text{C}$ the last corralling of hydrogen bonds coincides with minimum molar volume; on both sides of the peak the density falls.
</details>

### 5. Two waters meet

Equal masses of water at $20^\circ\text{C}$ and $80^\circ\text{C}$ are mixed in an insulated vessel. Ignoring the vessel, the final temperature is:

- A. $40^\circ\text{C}$
- B. $45^\circ\text{C}$
- C. $50^\circ\text{C}$
- D. $60^\circ\text{C}$

<details><summary>Answer</summary>

**C.** Equal $m$ and identical $c$: the weighted mean $\frac{mT_1 + mT_2}{2m} = \frac{20+80}{2} = 50^\circ\text{C}$.
</details>

### 6. Water equivalent

A copper calorimeter has mass $0.10\ \text{kg}$ and specific heat $420\ \text{J}\,(\text{kg·K})^{-1}$. Its water equivalent is:

- A. $1\ \text{g}$
- B. $10\ \text{g}$
- C. $42\ \text{g}$
- D. $420\ \text{g}$

<details><summary>Answer</summary>

**B.** $w = \dfrac{m_{cal}c_{cal}}{c_{water}} = \dfrac{(0.10)(420)}{4200} = 0.01\ \text{kg} = 10\ \text{g}$ of water carries the same heat capacity.
</details>

### 7. What steam delivers

The heat released when $0.10\ \text{kg}$ of steam at $100^\circ\text{C}$ condenses to **water at $100^\circ\text{C}$** ($L_v = 2.26\times10^{6}\ \text{J/kg}$) is:

- A. $2.26\times10^{4}\ \text{J}$
- B. $2.26\times10^{5}\ \text{J}$
- C. $2.51\times10^{5}\ \text{J}$
- D. $2.68\times10^{5}\ \text{J}$

<details><summary>Answer</summary>

**B.** Condensation alone: $Q = mL_v = (0.10)(2.26\times10^{6}) = 2.26\times10^{5}\ \text{J}$. Options C and D sneak in the subsequent cooling of the condensed water — forbidden by the question's wording.
</details>

### 8. How power scales

Keeping surface and emissivity fixed, the total power radiated by a blackbody becomes $16$ times larger when its kelvin temperature is multiplied by:

- A. $2$
- B. $4$
- C. $8$
- D. $16$

<details><summary>Answer</summary>

**A.** $P \propto T^4$; $2^4 = 16$, so doubling kelvin does it.
</details>

### 9. The steady-state composite

Two slabs of different materials and different thicknesses are joined in series; the outer faces are held at fixed temperatures. At steady state the heat current through each slab is:

- A. proportional to its thermal conductivity
- B. the same for both
- C. proportional to its thickness
- D. zero in the first slab

<details><summary>Answer</summary>

**B.** Steady state means no layer stores energy: whatever enters per second must leave per second. What differs across the layers is each *temperature drop*, shared in proportion to $R = L/kA$.
</details>

### 10. Newton by ratios

A body cools from $80^\circ\text{C}$ to $60^\circ\text{C}$ in $20\ \text{min}$ with surroundings at $20^\circ\text{C}$ (law valid throughout). After a further $20\ \text{min}$, its temperature is approximately:

- A. $40^\circ\text{C}$
- B. $46.7^\circ\text{C}$
- C. $50^\circ\text{C}$
- D. $53.3^\circ\text{C}$

<details><summary>Answer</summary>

**B.** The excess multiplied by $2/3$ per $20$ min: $60 \to 40 \to 26.7$, temperature $= 20 + 26.7 = 46.7^\circ\text{C}$. Decaying excess, not a steady $10\ \text{K}$ drain — that trap gives option A.
</details>

## Section B — 5 numerical-value questions

### 11. Reading a specific heat off a real mixture

A $0.25\ \text{kg}$ metal block at $200^\circ\text{C}$ is dropped into a calorimeter holding $0.64\ \text{kg}$ of water at $20.0^\circ\text{C}$; the calorimeter's water equivalent is $0.02\ \text{kg}$. Equilibrium settles at $33.5^\circ\text{C}$. Find the metal's specific heat (in $\text{J}\,(\text{kg·K})^{-1}$).

<details><summary>Answer</summary>

Heat gained by water + cup: $(0.64 + 0.02)(4200)(33.5 - 20.0) = (0.66)(4200)(13.5) = 3.74\times10^{4}\ \text{J}$.

Balance with the block's loss: $(0.25)\,c\,(200 - 33.5) = 3.74\times10^{4}$.

$c = 37426/(0.25\times166.5) = 37426/41.6 \approx 9.0\times10^{2}\ \text{J}\,(\text{kg·K})^{-1}$ — the signature of aluminium.
</details>

### 12. Steam angry at ice

$10\ \text{g}$ of steam at $100^\circ\text{C}$ is fed into a lagged vessel holding $100\ \text{g}$ of ice at $0^\circ\text{C}$. Find the mass of ice remaining, in grams, after the system settles.

<details><summary>Answer</summary>

Steam's delivery: $(0.010)(2.26\times10^{6}) + (0.010)(4200)(100) = 2.26\times10^{4} + 4.2\times10^{3} = 2.68\times10^{4}\ \text{J}$.

Melting all the ice needs $(0.100)(3.34\times10^{5}) = 3.34\times10^{4}\ \text{J}$ — that is *not available*. So the mixture stays pinned at $0^\circ\text{C}$ and melts only a part:

$m_{melt} = 2.68\times10^{4}/3.34\times10^{5} \approx 0.080\ \text{kg}$, so about $80\ \text{g}$ of the ice melts. Add the $10\ \text{g}$ of condensed steam: the vessel holds $\approx 90\ \text{g}$ of water and $\approx 20\ \text{g}$ of ice, all at $0^\circ\text{C}$.

The lesson: always ask whether the phase change **completes** before writing the sensible-heat terms.
</details>

### 13. One rod, one watt question

A steel rod ($k = 50\ \text{W}\,(\text{m·K})^{-1}$), length $0.40\ \text{m}$, cross-section $2.0\ \text{cm}^2$, conducts between $100^\circ\text{C}$ and $20^\circ\text{C}$. Find the heat current.

<details><summary>Answer</summary>

$H = \dfrac{kA\,\Delta T}{L} = \dfrac{(50)(2.0\times10^{-4})(80)}{0.40} = \dfrac{0.80}{0.40} = 2.0\ \text{W}$.

Convert area even when the question says $\text{cm}^2$: $1.0\ \text{cm}^2 = 1.0\times10^{-4}\ \text{m}^2$.
</details>

### 14. Radiation at two temperatures

A $1.0\ \text{m}^2$ perfectly black surface hangs at $927^\circ\text{C}$ in surroundings at $27^\circ\text{C}$. Find the net power radiated ($\sigma = 5.67\times10^{-8}\ \text{W}\,\text{m}^{-2}\,\text{K}^{-4}$).

<details><summary>Answer</summary>

Convert first: $T = 1200\ \text{K}$, $T_0 = 300\ \text{K}$.

$P_{net} = \sigma A (T^4 - T_0^4) = (5.67\times10^{-8})(1.0)[(1.2\times10^{3})^4 - (3.0\times10^{2})^4]$

$= (5.67\times10^{-8})(2.0736\times10^{12} - 8.1\times10^{9}) = (5.67\times10^{-8})(2.0655\times10^{12}) \approx 1.2\times10^{5}\ \text{W}$.

Sanity: over $100\ \text{kW}$ spilling from a single square metre is precisely what the fourth-power law does for a red-hot surface; the same area at $300\ \text{K}$ would manage $\sim460\ \text{W}$ against near-zero surroundings.
</details>

### 15. Peak wavelength, quick arithmetic

A blackbody is maintained at $2900\ \text{K}$. Find the wavelength of maximum emission.

<details><summary>Answer</summary>

Wien: $\lambda_m = \dfrac{b}{T} = \dfrac{2.9\times10^{-3}}{2900} = 1.0\times10^{-6}\ \text{m} = 1.0\ \mu\text{m}$ — near infrared, the range an old incandescent filament saturates in.
</details>

## Section C — 3 assertion–reason questions

Each lists statement **A** and reason **R**. Choose: (a) both true, R explains A; (b) both true, R does not explain A; (c) A true, R false; (d) A false, R true.

### 16. Exponentially cooler

**A**: Under Newton's law of cooling, a body's temperature **excess** over its surroundings decays exponentially with time.
**R**: Newton's law states that the rate of cooling is proportional to the **square** of the temperature difference.

<details><summary>Answer</summary>

**(c) A true, R false.** Integrating $-d\theta/dt = k(\theta-\theta_0)$ gives $(\theta-\theta_0) = (\theta_{in}-\theta_0)\,e^{-kt}$: exponential decay of the excess — assertion true. But the law is *linear* in the temperature difference, not quadratic — reason false.
</details>

### 17. The hole again

**A**: Heating a metal disc with a central circular hole decreases the hole's diameter.
**R**: On heating, the separation between any two material points of a free solid increases by the same fractional factor.

<details><summary>Answer</summary>

**(d) A false, R true.** The rim points of the hole are material points; since their mutual separation shares in the universal fractional growth, the hole's diameter grows like a fitted disc would. The disc-with-hole statement reverses the correct behaviour.
</details>

### 18. One current through two slabs

**A**: In the steady state of two slabs joined in series between fixed temperatures, the heat current is the same through each slab.
**R**: In the steady state no layer of the composite stores thermal energy, so what enters a layer per second equals what leaves it.

<details><summary>Answer</summary>

**(a) both true, R explains A.** Storage is zero in steady state, so the current cannot differ between adjacent layers; the observable signature instead is how the temperature *drop* divides in proportion to $R = L/kA$.
</details>

## Section D — 2 matching / multi-statement questions

### 19. Match the laws

Match each name in List I with its statement in List II.

| List I | List II |
| --- | --- |
| P. Newton's law of cooling | i. $\lambda_m\,T = \text{constant}$ |
| Q. Stefan–Boltzmann law | ii. emissive power $= \sigma T^4$ |
| R. Wien's displacement law | iii. rate of cooling $\propto (\theta - \theta_0)$ |
| S. Kirchhoff's radiation law | iv. $E/a$ is the same for all bodies at one temperature |

- A. P–iii, Q–ii, R–i, S–iv
- B. P–ii, Q–iii, R–iv, S–i
- C. P–iv, Q–i, R–ii, S–iii
- D. P–i, Q–ii, R–iii, S–iv

<details><summary>Answer</summary>

**A.** Newton: linear in the excess (iii). Stefan: total emission as $T^4$ (ii). Wien: the peak wavelength slides as $b/T$ (i). Kirchhoff: equal $E/a$ ratio for all bodies at a temperature — good absorbers are good emitters (iv).
</details>

### 20. Four statements about a freezing lake

Consider deep, still water cooling in winter, with statements:

1. The surface freezes first; the ice lid thickens downward.
2. Layers beneath the lid can stay near $4^\circ\text{C}$ for a whole season.
3. Ice contracts when it melts.
4. Water between $4^\circ\text{C}$ and $0^\circ\text{C}$ contracts as it cools.

Which statements are correct?

- A. 1 and 2 only
- B. 1, 2 and 3 only
- C. 1, 2 and 4 only
- D. all four

<details><summary>Answer</summary>

**B.** Statement (1): below $4^\circ\text{C}$ colder water is *lighter*, so it stays on top and freezes first — correct. (2): the densest water near $4^\circ\text{C}$ sits at the bottom, insulated by the lid — correct. (3): ice ($\approx917\ \text{kg/m}^3$) is less dense than water, so melting contracts it — correct. (4): reversed; below $4^\circ\text{C}$ water **expands** on further cooling, which is exactly why surface layers float instead of sinking (the anomaly).
</details>

## Review by error, not by score

| If you missed… | Revisit | Then retry by… |
| --- | --- | --- |
| 1, 6 | Temperature scales and water equivalent | Writing conversions and $w = m_{cal}c_{cal}/c_{water}$ from scratch |
| 2, 3, 17 | Expansion behaviour (holes, isotropy) | Explaining the hole growth in words before formulae |
| 4, 12, 20 | Change of state and the water anomaly | Testing "does the phase complete?" and sketching density against temperature near $4^\circ\text{C}$ |
| 5, 11 | Calorimetry and specific heat | Writing the full signed balance, container included |
| 7, 13, 18 | Steady-state conduction | Computing $R = L/kA$ layer by layer and sharing the drops |
| 8, 14, 15 | Radiation toolkit | Converting to kelvin before any $T^4$ or Wien arithmetic |
| 9, 10, 16 | Newton's law of cooling | Converting every problem to *excess* temperature first |
| 19 | Kirchhoff and the three laws | Stating $E/a = E_{\text{blackbody}}$ and matching each law to its observable |

<learning-block type="recap" title="Before moving to the next chapter">

Target at least $16$ of $20$ with a written method for every question. A question solved by luck without naming the law is a flagged question: revisit the matching module, re-derive its worked example with different numbers, and only then let the chapter go.

</learning-block>
