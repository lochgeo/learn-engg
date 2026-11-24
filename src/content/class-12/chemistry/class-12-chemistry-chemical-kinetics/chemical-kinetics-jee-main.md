## JEE Main sprint: how to use this set

This is a **50-minute, no-notes** practice set for after you complete the chapter lessons. Use $R=8.314\ \text{J mol}^{-1}\text{K}^{-1}$ and convert all temperatures to kelvin. Spend roughly 15 minutes on Section A, 20 on Section B, 10 on Section C and 5 on Section D. Mark a question for review after 90 seconds; do not let one calculation consume the paper.

The goal is not only an answer. Before writing an equation, name the tool: order, integrated equation, half-life, Arrhenius or collision theory.

## Conditions sheet

| Situation | Start with | Check before using it |
| --- | --- | --- |
| Rate from a species change | $-\frac{1}{\nu}\frac{d[\text{reactant}]}{dt}$ | Signs and stoichiometric factors |
| Order from initial rates | Compare experiments with one concentration changed | Change the right variable only |
| Units of $k$ | Balance $\text{mol L}^{-1}\text{s}^{-1}$ | Overall order, not individual orders |
| Zero order | $[A]_t=[A]_0-kt$ | $t_{1/2}=[A]_0/(2k)$ |
| First order | $\ln[A]_t=\ln[A]_0-kt$ | $t_{1/2}=0.693/k$, independent of $[A]_0$ |
| Second order | $1/[A]_t=1/[A]_0+kt$ | $t_{1/2}=1/(k[A]_0)$ |
| Order from a graph | Linear $[A]$, $\ln[A]$ or $1/[A]$ vs $t$ | Slope gives $\pm k$ |
| Arrhenius two-point | $\ln(k_2/k_1)=(E_a/R)(1/T_1-1/T_2)$ | Temperatures in kelvin |
| $E_a$ from a graph | Slope of $\ln k$ vs $1/T$ is $-E_a/R$ | Plot $1/T$, not $T$ |
| Catalyst enhancement | $\exp[(E_{a,1}-E_{a,2})/RT]$ | Equal pre-exponential factors assumed |
| Energy factor | $e^{-E_a/RT}$ | Use molar $E_a$ with $R$ |
| Pseudo-first-order | $k'=k[B]_0$ with $[B]$ in excess | $[B]$ effectively constant |

<learning-block type="mistake" title="The fastest sanity checks">
If your answer gives a negative concentration, a half-life that grows when the initial concentration grows for a second-order reaction, or an activation energy computed with Celsius, stop and revisit the setup. A numerical answer with the right unit can still come from the wrong formula.
</learning-block>

## Section A — 10 rapid MCQs

### 1. First-order half-life

For a first-order reaction, $t_{1/2}$ equals:

- A. $[A]_0/(2k)$
- B. $0.693/k$
- C. $1/(k[A]_0)$
- D. $k/0.693$

<details><summary>Answer</summary>

**B.** $t_{1/2}=\ln2/k=0.693/k$, independent of $[A]_0$.

</details>

### 2. Units of $k$

For a third-order reaction, the units of $k$ are:

- A. $\text{s}^{-1}$
- B. $\text{L mol}^{-1}\text{s}^{-1}$
- C. $\text{L}^2\text{mol}^{-2}\text{s}^{-1}$
- D. $\text{mol L}^{-1}\text{s}^{-1}$

<details><summary>Answer</summary>

**C.** Overall order 3 gives $\text{L}^2\text{mol}^{-2}\text{s}^{-1}$.

</details>

### 3. Combined concentration change

If $\text{rate}=k[A][B]^2$ and both $[A]$ and $[B]$ are doubled, the rate changes by a factor of:

- A. 2
- B. 4
- C. 8
- D. 16

<details><summary>Answer</summary>

**C.** $2^1\times 2^2 = 2\times4=8$.

</details>

### 4. Linear plot for second order

For a second-order reaction in a single reactant, which plot is linear?

- A. $[A]$ versus $t$
- B. $\ln[A]$ versus $t$
- C. $1/[A]$ versus $t$
- D. $[A]^2$ versus $t$

<details><summary>Answer</summary>

**C.** $1/[A]_t=1/[A]_0+kt$, so $1/[A]$ versus $t$ is linear with slope $k$.

</details>

### 5. Arrhenius temperature effect

Raising the temperature of a reaction increases $k$ mainly because:

- A. the pre-exponential factor $A$ increases sharply
- B. the fraction of molecules with energy above $E_a$ increases exponentially
- C. the activation energy decreases
- D. the concentration increases

<details><summary>Answer</summary>

**B.** The exponential factor $e^{-E_a/RT}$ rises; $A$ and $E_a$ are essentially temperature-independent.

</details>

### 6. Catalyst property

Which quantity is **not** changed by adding a catalyst?

- A. Activation energy
- B. Rate constant
- C. Equilibrium constant
- D. Reaction rate

<details><summary>Answer</summary>

**C.** A catalyst lowers $E_a$ and speeds both directions equally, so $K$ is unchanged.

</details>

### 7. Effective collision

According to collision theory, a collision leads to reaction only if:

- A. the molecules collide, regardless of energy
- B. the energy is at least $E_a$ and the orientation is suitable
- C. the temperature is high
- D. a catalyst is present

<details><summary>Answer</summary>

**B.** Both sufficient energy and correct orientation are required.

</details>

### 8. Zero-order half-life

For a zero-order reaction, $t_{1/2}$ is:

- A. $0.693/k$
- B. $1/(k[A]_0)$
- C. $[A]_0/(2k)$
- D. independent of $[A]_0$

<details><summary>Answer</summary>

**C.** $t_{1/2}=[A]_0/(2k)$, so it grows with initial concentration.

</details>

### 9. Molecularity

A termolecular elementary step has molecularity:

- A. 1
- B. 2
- C. 3
- D. variable

<details><summary>Answer</summary>

**C.** Molecularity is the number of particles colliding in one elementary step; termolecular means 3.

</details>

### 10. Activation energy meaning

The activation energy $E_a$ of a reaction is:

- A. the enthalpy change of the reaction
- B. the minimum energy needed for reactants to react
- C. the average kinetic energy of the molecules
- D. the energy released when products form

<details><summary>Answer</summary>

**B.** $E_a$ is the barrier height; it is not $\Delta H$ or the average energy.

</details>

## Section B — 5 numerical-value questions

### 11. First-order concentration

A first-order reaction has $k=0.050\ \text{min}^{-1}$ and $[A]_0=0.10\ \text{M}$. Find $[A]$ after $20\ \text{min}$ (in M).

<details><summary>Answer</summary>

$\ln[A]=\ln(0.10)-0.050\times20=-2.303-1.000=-3.303$, so $[A]=e^{-3.303}=0.0368\ \text{M}$.

</details>

### 12. Second-order time

For a second-order reaction, $k=0.20\ \text{L mol}^{-1}\text{s}^{-1}$ and $[A]_0=0.50\ \text{M}$. Find the time for $[A]$ to fall to $0.25\ \text{M}$ (in s).

<details><summary>Answer</summary>

$t=(1/0.25-1/0.50)/0.20=(4.0-2.0)/0.20=10\ \text{s}$.

</details>

### 13. Activation energy from two temperatures

A reaction has $k=1.0\times10^{-3}\ \text{s}^{-1}$ at 300 K and $k=4.0\times10^{-3}\ \text{s}^{-1}$ at 320 K. Find $E_a$ (in kJ mol$^{-1}$).

<details><summary>Answer</summary>

$\ln(4.0)=1.386=(E_a/8.314)(1/300-1/320)$. $1/300-1/320=0.0002083$. $E_a=1.386\times8.314/0.0002083=5.53\times10^4\ \text{J mol}^{-1}=55.3\ \text{kJ mol}^{-1}$.

</details>

### 14. Catalyst enhancement factor

An uncatalysed reaction has $E_a=80\ \text{kJ mol}^{-1}$; the catalysed path has $E_a=50\ \text{kJ mol}^{-1}$. At 300 K, by what factor is the catalysed reaction faster (assume equal $A$)? Give the answer as $1.7\times10^5$-style (numerical).

<details><summary>Answer</summary>

Factor $=\exp[(80000-50000)/(8.314\times300)]=\exp(12.03)=1.68\times10^5\approx1.7\times10^5$.

</details>

### 15. First-order elimination time

A first-order process has $k=0.10\ \text{h}^{-1}$. Find the time (in h) for 90% of the reactant to be consumed.

<details><summary>Answer</summary>

$90\%$ consumed means $10\%$ remains: $\ln(0.10/1.00)=-0.10\,t$, so $t=-\ln(0.10)/0.10=2.303/0.10=23.0\ \text{h}$.

</details>

## Section C — 3 assertion–reason questions

### 16. Half-life and initial concentration

**Assertion (A):** For a first-order reaction, the half-life decreases as the initial concentration decreases.  
**Reason (R):** $t_{1/2}=0.693/k$ for a first-order reaction.

- A. Both A and R are true and R is the correct explanation of A.
- B. Both A and R are true but R is not the correct explanation of A.
- C. A is true but R is false.
- D. A is false but R is true.

<details><summary>Answer</summary>

**D.** The half-life of a first-order reaction is independent of initial concentration, so A is false; R is true.

</details>

### 17. Catalyst and equilibrium

**Assertion (A):** Adding a catalyst increases the equilibrium constant of a reaction.  
**Reason (R):** A catalyst lowers the activation energy.

- A. Both A and R are true and R is the correct explanation of A.
- B. Both A and R are true but R is not the correct explanation of A.
- C. A is true but R is false.
- D. A is false but R is true.

<details><summary>Answer</summary>

**D.** A catalyst speeds both directions equally, so $K$ is unchanged; A is false. R is true but does not imply a change in $K$.

</details>

### 18. Temperature and rate

**Assertion (A):** For a reaction with positive activation energy, raising the temperature increases the rate constant.  
**Reason (R):** The fraction of molecules with energy above $E_a$ increases exponentially with temperature.

- A. Both A and R are true and R is the correct explanation of A.
- B. Both A and R are true but R is not the correct explanation of A.
- C. A is true but R is false.
- D. A is false but R is true.

<details><summary>Answer</summary>

**A.** Both statements are true and the reason correctly explains the assertion.

</details>

## Section D — 2 multi-statement questions

### 19. First-order properties

Which statements are correct?

- (i) The half-life is independent of the initial concentration.
- (ii) A plot of $\ln[A]$ versus $t$ is a straight line.
- (iii) The units of $k$ are $\text{s}^{-1}$.
- (iv) The half-life is $1/(k[A]_0)$.

- A. (i) and (ii) only
- B. (i), (ii) and (iii) only
- C. (ii), (iii) and (iv) only
- D. All four

<details><summary>Answer</summary>

**B.** (i), (ii) and (iii) are correct. (iv) is the second-order half-life.

</details>

### 20. Collision theory statements

Which statements are correct?

- (i) Every collision between reactant molecules leads to reaction.
- (ii) An effective collision requires energy at least $E_a$ and a suitable orientation.
- (iii) A catalyst lowers the activation energy.
- (iv) The steric factor can be less than 1.

- A. (i) and (ii) only
- B. (ii), (iii) and (iv) only
- C. (i), (iii) and (iv) only
- D. All four

<details><summary>Answer</summary>

**B.** (ii), (iii) and (iv) are correct. (i) is false: most collisions are ineffective.

</details>

## Review by error, not by score

| If you missed… | Revisit | Then retry |
| --- | --- | --- |
| 1, 4, 8, 19 | Integrated rate equations | Distinguish zero, first and second order and their half-lives. |
| 2, 3, 10 | Rate laws and order | Check exponents and units of $k$. |
| 5, 13, 18 | Arrhenius equation | Use kelvin and the two-point form. |
| 6, 17 | Catalysts | Remember $K$ is unchanged. |
| 7, 20 | Collision theory | Require both energy and orientation. |
| 11, 12, 15 | Integrated equations | Substitute carefully into the right formula. |
| 14 | Catalyst effect | Compute $\exp(\Delta E_a/RT)$. |
| 16 | Half-life | Recall which orders have concentration-dependent half-lives. |

<learning-block type="recap" title="Ready for a timed set?">
Aim for at least 17 correct out of 20 with a written method choice for every question. Questions you solve correctly but cannot justify are revision targets, not mastered topics.
</learning-block>