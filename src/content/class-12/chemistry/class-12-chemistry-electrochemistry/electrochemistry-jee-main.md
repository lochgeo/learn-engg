## JEE Main sprint: how to use this set

This is a **50-minute, no-notes** practice set for after you complete the chapter lessons. Use $F=96500\ \text{C mol}^{-1}$ and $0.059\ \text{V}$ for the Nernst constant at 298 K. Spend roughly 15 minutes on Section A, 20 on Section B, 10 on Section C and 5 on Section D. Mark a question for review after 90 seconds; do not let one calculation consume the paper.

The goal is not only an answer. Before writing an equation, name the process: cell potential, Nernst, conductance, Faraday or corrosion.

## Conditions sheet

| Situation | Start with | Check before using it |
| --- | --- | --- |
| Standard cell emf | $E^\circ_\text{cell}=E^\circ_\text{cathode}-E^\circ_\text{anode}$ | Both values are reduction potentials; result positive for galvanic. |
| Non-standard emf | $E=E^\circ-(0.059/n)\log_{10}Q$ | $Q$ is products over reactants; solids omitted. |
| Equilibrium | $E=0$, $\log_{10}K=nE^\circ/0.059$ | Temperature 298 K assumed. |
| Conductivity | $\kappa=(l/A)/R$ | Cell constant $l/A$ in cm$^{-1}$ if $\kappa$ in S cm$^{-1}$. |
| Molar conductivity | $\Lambda_m=1000\kappa/c$ | $c$ in mol L$^{-1}$; factor 1000. |
| Weak acid $K_a$ | $\alpha=\Lambda_m/\Lambda^\circ_m$; $K_a=c\alpha^2/(1-\alpha)$ | $\Lambda^\circ$ from Kohlrausch. |
| Electrolysis mass | $m=M I t/(nF)$ | $t$ in seconds; $n$ from half-reaction. |
| Gas volume | moles $=Q/(nF)$; $V=n_\text{mol}\times22.4\ \text{L}$ | At STP. |
| Battery work | $-\Delta G=nFE$ | Use operating voltage, not just $E^\circ$. |
| Corrosion loss | Faraday’s law with metal’s $n$ | Current efficiency may be <100%. |

<learning-block type="mistake" title="The fastest sanity checks">
If your answer gives a negative mass, a cell emf with the wrong sign for a stated spontaneous reaction, or a molar conductivity larger than the limiting value for a strong electrolyte, stop and revisit the setup. A numerical answer with the right unit can still come from the wrong formula.
</learning-block>

## Section A — 10 rapid MCQs

### 1. Standard emf

For $\mathrm{Zn(s)\,|\,Zn^{2+}(aq)\,||\,Cu^{2+}(aq)\,|\,Cu(s)}$, $E^\circ_\text{cell}$ is:

- A. $-1.10\ \text{V}$
- B. $0.42\ \text{V}$
- C. $1.10\ \text{V}$
- D. $2.18\ \text{V}$

<details><summary>Answer</summary>

**C.** $E^\circ_\text{cell}=0.34-(-0.76)=1.10\ \text{V}$.

</details>

### 2. Concentration effect

For a Daniel cell, if $[\mathrm{Zn^{2+}}]$ is increased and $[\mathrm{Cu^{2+}}]$ is decreased, the emf:

- A. increases
- B. decreases
- C. stays the same
- D. becomes exactly zero

<details><summary>Answer</summary>

**B.** $Q=[\mathrm{Zn^{2+}}]/[\mathrm{Cu^{2+}}]$ increases, so $E=E^\circ-(0.059/2)\log Q$ decreases.

</details>

### 3. Molar conductivity trend

On diluting a weak electrolyte such as acetic acid, its molar conductivity:

- A. decreases
- B. increases sharply
- C. stays constant
- D. becomes zero

<details><summary>Answer</summary>

**B.** Dilution increases the degree of dissociation, so more ions per mole and a sharp rise in $\Lambda_m$.

</details>

### 4. Faraday stoichiometry

How many Faradays are required to deposit $1\ \text{mol}$ of aluminium from $\mathrm{Al^{3+}}$?

- A. 1
- B. 2
- C. 3
- D. 6

<details><summary>Answer</summary>

**C.** $\mathrm{Al^{3+}+3e^-\rightarrow Al}$, so $3\ \text{mol}$ of electrons = 3 F.

</details>

### 5. Sacrificial protection

Which metal protects iron sacrificially?

- A. Cu
- B. Sn
- C. Zn
- D. Ag

<details><summary>Answer</summary>

**C.** Zn is more reactive than Fe ($-0.76\ \text{V}$ vs $-0.44\ \text{V}$) and corrodes in its place.

</details>

### 6. Battery voltage

The emf of a single lead–acid cell is approximately:

- A. $1.2\ \text{V}$
- B. $1.5\ \text{V}$
- C. $2.04\ \text{V}$
- D. $3.6\ \text{V}$

<details><summary>Answer</summary>

**C.** $\mathrm{Pb+PbO_2+2H_2SO_4\rightarrow2PbSO_4+2H_2O}$ gives $E^\circ\approx2.04\ \text{V}$.

</details>

### 7. Electrolytic cell

In an electrolytic cell the anode is:

- A. negative
- B. positive
- C. neutral
- D. either sign

<details><summary>Answer</summary>

**B.** The anode is connected to the positive terminal of the power supply; oxidation still occurs there.

</details>

### 8. Ionic mobility

Which ion has the highest limiting ionic conductivity at 298 K?

- A. $\mathrm{K^+}$
- B. $\mathrm{Na^+}$
- C. $\mathrm{Cl^-}$
- D. $\mathrm{H^+}$

<details><summary>Answer</summary>

**D.** $\lambda^\circ(\mathrm{H^+})=349.8\ \text{S cm}^2\text{ mol}^{-1}$, far above the others, due to proton hopping.

</details>

### 9. Fuel cell

The only product of a hydrogen–oxygen fuel cell is:

- A. $\mathrm{CO_2}$
- B. $\mathrm{H_2O}$
- C. $\mathrm{O_2}$
- D. $\mathrm{H_2}$

<details><summary>Answer</summary>

**B.** Overall: $\mathrm{H_2+\tfrac12O_2\rightarrow H_2O}$.

</details>

### 10. Concentration cell

The standard emf of a concentration cell made of the same electrode in two different ion concentrations is:

- A. $0\ \text{V}$
- B. $0.059\ \text{V}$
- C. $1.10\ \text{V}$
- D. depends on the metal

<details><summary>Answer</summary>

**A.** $E^\circ=0$ because the half-reactions are identical; the emf comes entirely from the concentration difference.

</details>

## Section B — 5 numerical-value questions

### 11. Nernst emf

A Daniel cell has $[\mathrm{Zn^{2+}}]=0.010\ \text{M}$ and $[\mathrm{Cu^{2+}}]=0.10\ \text{M}$ at 298 K. Find $E$ (in V).

<details><summary>Answer</summary>

$Q=0.010/0.10=0.10$. $E=1.10-(0.059/2)\log_{10}0.10=1.10+0.0295=1.1295\ \text{V}\approx1.13\ \text{V}$.

</details>

### 12. Molar conductivity

A cell of constant $1.0\ \text{cm}^{-1}$ shows $R=77.6\ \Omega$ for $0.10\ \text{M}$ KCl. Find $\Lambda_m$ (in S cm$^2$ mol$^{-1}$).

<details><summary>Answer</summary>

$\kappa=1.0/77.6=0.0129\ \text{S cm}^{-1}$. $\Lambda_m=1000(0.0129)/0.10=129\ \text{S cm}^2\text{ mol}^{-1}$.

</details>

### 13. Copper deposition

A current of $1.5\ \text{A}$ flows for $20\ \text{min}$ through $\mathrm{CuSO_4}$ solution. Find the mass of copper deposited (in g).

<details><summary>Answer</summary>

$Q=1.5\times1200=1800\ \text{C}$. $m=63.5\times1800/(2\times96500)=0.593\ \text{g}$.

</details>

### 14. pH from electrode potential

A hydrogen electrode at 298 K and 1 bar $\mathrm{H_2}$ has potential $-0.236\ \text{V}$. Find the pH.

<details><summary>Answer</summary>

$E=-0.059\,\text{pH}$, so $\text{pH}=0.236/0.059=4.00$.

</details>

### 15. Corrosion mass loss

A steel structure corrodes at $0.20\ \text{A}$ for 10 days. Find the mass of iron lost (in g). ($M_\mathrm{Fe}=55.85$, $n=2$.)

<details><summary>Answer</summary>

$t=10\times24\times3600=864000\ \text{s}$. $Q=0.20\times864000=172800\ \text{C}$. $m=55.85\times172800/(2\times96500)=50.0\ \text{g}$.

</details>

## Section C — 3 assertion–reason questions

### 16. Dilution and molar conductivity

**Assertion (A):** Diluting a strong electrolyte increases its molar conductivity.  
**Reason (R):** Interionic attractions weaken on dilution, so ions move more freely.

- A. Both A and R are true and R is the correct explanation of A.
- B. Both A and R are true but R is not the correct explanation of A.
- C. A is true but R is false.
- D. A is false but R is true.

<details><summary>Answer</summary>

**A.** Both statements are true and the reason correctly explains the assertion.

</details>

### 17. Anode sign

**Assertion (A):** In every electrochemical cell the anode is the negative electrode.  
**Reason (R):** Oxidation occurs at the anode.

- A. Both A and R are true and R is the correct explanation of A.
- B. Both A and R are true but R is not the correct explanation of A.
- C. A is true but R is false.
- D. A is false but R is true.

<details><summary>Answer</summary>

**D.** Oxidation does occur at the anode, but in an electrolytic cell the anode is positive. The assertion is false.

</details>

### 18. Spontaneity

**Assertion (A):** A reaction with $E^\circ_\text{cell}>0$ is spontaneous under standard conditions.  
**Reason (R):** $\Delta G^\circ=-nFE^\circ_\text{cell}$.

- A. Both A and R are true and R is the correct explanation of A.
- B. Both A and R are true but R is not the correct explanation of A.
- C. A is true but R is false.
- D. A is false but R is true.

<details><summary>Answer</summary>

**A.** A positive $E^\circ$ gives a negative $\Delta G^\circ$, so the reaction is spontaneous; the reason is correct.

</details>

## Section D — 2 multi-statement questions

### 19. Electrolysis of concentrated aqueous NaCl

Which statements are correct?

- (i) Hydrogen is produced at the cathode.
- (ii) Chlorine is produced at the anode.
- (iii) The solution becomes alkaline.
- (iv) Sodium metal deposits at the cathode.

- A. (i) and (ii) only
- B. (i), (ii) and (iii) only
- C. (ii), (iii) and (iv) only
- D. All four

<details><summary>Answer</summary>

**B.** Water is reduced to $\mathrm{H_2}$ (not Na), $\mathrm{Cl^-}$ is oxidised to $\mathrm{Cl_2}$, and $\mathrm{OH^-}$ accumulates, making the solution alkaline. Sodium does not deposit.

</details>

### 20. Corrosion and protection

Which statements are correct?

- (i) Rusting of iron requires both oxygen and water.
- (ii) Galvanising protects iron even if the zinc coating is scratched.
- (iii) Tinning protects iron only while the tin layer is intact.
- (iv) Connecting iron to copper slows its corrosion.

- A. (i) and (ii) only
- B. (i), (ii) and (iii) only
- C. (ii), (iii) and (iv) only
- D. All four

<details><summary>Answer</summary>

**B.** (i), (ii) and (iii) are correct. (iv) is false: copper is less reactive than iron, so the couple accelerates corrosion of iron.

</details>

## Review by error, not by score

| If you missed… | Revisit | Then retry |
| --- | --- | --- |
| 1, 2, 11, 14, 16, 18 | Nernst and cell emf | Check sign of $Q$ and the 0.059/n factor. |
| 3, 8, 12 | Conductance | Distinguish $\kappa$ from $\Lambda_m$ and watch the factor 1000. |
| 4, 13, 15 | Faraday’s laws | Read $n$ from the half-reaction; convert time to seconds. |
| 5, 19, 20 | Electrolysis and corrosion | Compare reduction potentials for discharge and protection. |
| 6, 7, 9, 10, 17 | Cells and batteries | Re-derive anode/cathode labels and emf from half-reactions. |

<learning-block type="recap" title="Ready for a timed set?">
Aim for at least 17 correct out of 20 with a written method choice for every question. Questions you solve correctly but cannot justify are revision targets, not mastered topics.
</learning-block>