## Your study plan for today

Electrochemistry links thermodynamics, kinetics of ion transport and practical devices. A focused first pass takes about **3 hours**:

1. **Electrochemical and galvanic cells** — 20 min
2. **The Nernst equation and cell emf** — 25 min
3. **Conductance of electrolytic solutions** — 25 min
4. **Electrolysis and Faraday’s laws** — 20 min
5. **Batteries and fuel cells** — 20 min
6. **Corrosion** — 15 min
7. **This mastery check** — 25 min

After each lesson, close the notes and redo its questions from a blank page. Mark a module complete only when you can state why its method applies. Take a short break halfway.

After this core pass, use the **JEE Main timed practice** module for a 50-minute mixed set. Save it for when you can solve the chapter’s tools one at a time; its value is choosing the right tool under time pressure.

## First choose the tool

| Clue in the question | Start with |
| --- | --- |
| Two half-reactions, standard states | $E^\circ_\text{cell}=E^\circ_\text{cathode}-E^\circ_\text{anode}$; $\Delta G^\circ=-nFE^\circ$ |
| Non-standard concentrations or temperature | Nernst: $E=E^\circ-(RT/nF)\ln Q$ |
| Equilibrium constant or “flat” cell | Set $E=0$: $E^\circ=(RT/nF)\ln K$ |
| pH or concentration cell | $E=- (0.059/n)\log Q$ with $E^\circ=0$ |
| Resistance of a solution | $\kappa=(l/A)/R$; cell constant $l/A$ |
| Conductivity per mole | $\Lambda_m=1000\kappa/c$ (S cm$^2$ mol$^{-1}$) |
| Weak acid strength from conductance | $\alpha=\Lambda_m/\Lambda^\circ_m$; $K_a=c\alpha^2/(1-\alpha)$ |
| Limiting ionic conductivity missing | Kohlrausch: $\Lambda^\circ=\lambda^\circ_++\lambda^\circ_-$ |
| Mass deposited by current | Faraday: $m=M I t/(nF)$ |
| Gas volume from electrolysis | moles $=Q/(nF)$; then $V=n_\text{gas}\times22.4\ \text{L}$ (STP) |
| Battery capacity / work | charge $=nF\times$ moles; $-\Delta G=nFE$ |
| Metal loss by corrosion | Faraday’s law with the metal’s $n$ |
| Protection scheme | Compare $E^\circ$: protector must be more reactive |

## Mastery check

Use $F=96500\ \text{C mol}^{-1}$, $R=8.314\ \text{J mol}^{-1}\text{K}^{-1}$, $g=10$ is not needed here, and 298 K unless stated.

### 1. Cell potential from potentials

A cell is $\mathrm{Ni(s)\,|\,Ni^{2+}(aq)\,||\,Ag^+(aq)\,|\,Ag(s)}$. Find $E^\circ_\text{cell}$ and state whether it is galvanic.

<details><summary>Answer and reasoning</summary>

$E^\circ_\text{cell}=E^\circ_\text{cathode}-E^\circ_\text{anode}=0.80-(-0.25)=1.05\ \text{V}$. Positive, so it is a galvanic cell.

</details>

### 2. Nernst equation

For the cell above, $[\mathrm{Ni^{2+}}]=0.10\ \text{M}$ and $[\mathrm{Ag^+}]=1.0\ \text{M}$. Find $E$ at 298 K.

<details><summary>Answer and reasoning</summary>

Reaction: $\mathrm{Ni+2Ag^+\rightarrow Ni^{2+}+2Ag}$, $n=2$, $Q=[\mathrm{Ni^{2+}}]/[\mathrm{Ag^+}]^2=0.10$. $E=1.05-(0.059/2)\log_{10}0.10=1.05+0.0295=1.0795\ \text{V}\approx1.08\ \text{V}$.

</details>

### 3. Equilibrium constant

Find $\log_{10}K$ and $K$ for a cell with $E^\circ=0.60\ \text{V}$ and $n=2$.

<details><summary>Answer and reasoning</summary>

$\log_{10}K=nE^\circ/0.059=2(0.60)/0.059=20.3$. $K=10^{20.3}\approx2.1\times10^{20}$.

</details>

### 4. Conductivity and molar conductivity

A cell with constant $0.50\ \text{cm}^{-1}$ shows $R=181\ \Omega$ for $0.020\ \text{M}$ KCl. Find $\kappa$ and $\Lambda_m$.

<details><summary>Answer and reasoning</summary>

$\kappa=0.50/181=0.00276\ \text{S cm}^{-1}$. $\Lambda_m=1000(0.00276)/0.020=138\ \text{S cm}^2\text{ mol}^{-1}$, matching the tabulated value for 0.020 M KCl.

</details>

### 5. Weak acid dissociation

For a $0.050\ \text{M}$ weak acid, $\Lambda_m=12.0\ \text{S cm}^2\text{ mol}^{-1}$ and $\Lambda^\circ=390.7$. Find $\alpha$ and $K_a$.

<details><summary>Answer and reasoning</summary>

$\alpha=12.0/390.7=0.0307$. $K_a=0.050\times(0.0307)^2/(1-0.0307)=0.050\times9.43\times10^{-4}/0.9693=4.87\times10^{-5}$.

</details>

### 6. Faraday’s law

How long must $2.5\ \text{A}$ flow to deposit $3.18\ \text{g}$ of copper from $\mathrm{Cu^{2+}}$?

<details><summary>Answer and reasoning</summary>

Moles Cu $=3.18/63.5=0.050\ \text{mol}$. Charge $=0.050\times2\times96500=9650\ \text{C}$. $t=9650/2.5=3860\ \text{s}\approx64.3\ \text{min}$.

</details>

### 7. Gas from electrolysis

A current of $4.0\ \text{A}$ for $965\ \text{s}$ electrolyses acidulated water. Find the volume of $\mathrm{H_2}$ at STP.

<details><summary>Answer and reasoning</summary>

$Q=4.0\times965=3860\ \text{C}$. Moles $e^-=3860/96500=0.040\ \text{mol}$. Moles $\mathrm{H_2}=0.020\ \text{mol}$. $V=0.020\times22.4=0.448\ \text{L}$.

</details>

### 8. Battery work

A Li-ion cell operates at $3.6\ \text{V}$ and transfers $1\ \text{mol}$ of electrons. Find the electrical work per mole of electrons.

<details><summary>Answer and reasoning</summary>

$-\Delta G=nFE=1\times96500\times3.6=3.47\times10^5\ \text{J}\approx347\ \text{kJ mol}^{-1}$.

</details>

### 9. Corrosion

A pipeline corrodes at $1.0\ \text{A}$ for 30 days. Find the mass of iron lost.

<details><summary>Answer and reasoning</summary>

$t=30\times24\times3600=2.592\times10^6\ \text{s}$. $Q=2.592\times10^6\ \text{C}$. $m=55.85\times2.592\times10^6/(2\times96500)=74.2\ \text{g}$.

</details>

### 10. Protection choice

An iron hull is to be protected. Which is suitable: a zinc block or a copper block? Explain.

<details><summary>Answer and reasoning</summary>

Zinc: it is more reactive than iron ($-0.76\ \text{V}$ vs $-0.44\ \text{V}$) and corrodes sacrificially. Copper would make iron the anode and accelerate corrosion.

</details>

## Self-check

You are ready to move on when you can:

- write a cell in standard notation and compute $E^\circ_\text{cell}$ from reduction potentials;
- apply the Nernst equation and relate $E^\circ$ to $K$;
- convert between resistance, conductivity and molar conductivity, including the factor 1000;
- find the degree of dissociation and $K_a$ of a weak electrolyte from conductance data;
- use Faraday’s law for mass, charge, time and gas volume;
- choose and justify a corrosion-protection method using reduction potentials;
- check that an answer has the right sign, units and physical magnitude.

If one item still feels shaky, revisit that module and redo its questions without the reveal.<|end|><|start|>write to=assistant<|channel|>analysis<|message|>Created file successfully: src/content/class-12/chemistry/class-12-chemistry-electrochemistry/electrochemistry-review.md