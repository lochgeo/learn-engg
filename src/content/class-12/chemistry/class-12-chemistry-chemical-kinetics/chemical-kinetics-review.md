## Your study plan for today

Chemical kinetics connects the molecular picture (collisions) to measurable concentration–time data. A focused first pass takes about **3 hours**:

1. **Rate of reaction and rate laws** — 20 min
2. **Factors affecting reaction rate** — 20 min
3. **Integrated rate equations** — 25 min
4. **Half-life and the Arrhenius equation** — 25 min
5. **Collision theory** — 20 min
6. **This mastery check** — 25 min

After each lesson, close the notes and redo its questions from a blank page. Mark a module complete only when you can state why its method applies. Take a short break halfway.

After this core pass, use the **JEE Main timed practice** module for a 50-minute mixed set. Save it for when you can solve the chapter’s tools one at a time; its value is choosing the right tool under time pressure.

## First choose the tool

| Clue in the question | Start with |
| --- | --- |
| Rate from concentration change of one species | Divide by stoichiometric coefficient; watch signs |
| Rate law from initial-rate data | Compare experiments where only one concentration changes |
| Units of $k$ | Balance $\text{mol L}^{-1}\text{s}^{-1}$ against the overall order |
| Linear plot of $[A]$, $\ln[A]$ or $1/[A]$ | Zero, first or second order respectively |
| Half-life independent of $[A]_0$ | First order: $t_{1/2}=0.693/k$ |
| Half-life shrinking as $[A]_0$ rises | Second order: $t_{1/2}=1/(k[A]_0)$ |
| Concentration after time $t$ | Integrated equation for the identified order |
| $k$ at two temperatures | Two-point Arrhenius: $\ln(k_2/k_1)= (E_a/R)(1/T_1-1/T_2)$ |
| $E_a$ from a graph | Slope of $\ln k$ versus $1/T$ is $-E_a/R$ |
| Rate enhancement by catalyst | $\exp[(E_{a,\text{old}}-E_{a,\text{new}})/RT]$ |
| Fraction of molecules above $E_a$ | $e^{-E_a/RT}$ |
| Pressure-dependent order for a “unimolecular” reaction | Lindemann mechanism |

## Mastery check

Use $R=8.314\ \text{J mol}^{-1}\text{K}^{-1}$ and 298 K unless stated. For Arrhenius use kelvin.

### 1. Rate and stoichiometry

For $\mathrm{2N_2O_5 \rightarrow 4NO_2 + O_2}$, $[\mathrm{N_2O_5}]$ falls at $4.0\times10^{-4}\ \text{M s}^{-1}$. Find the reaction rate and the rate of appearance of $\mathrm{O_2}$.

<details><summary>Answer and reasoning</summary>

Rate $=-\tfrac12 d[\mathrm{N_2O_5}]/dt = 2.0\times10^{-4}\ \text{M s}^{-1}$. $d[\mathrm{O_2}]/dt = 1\times\text{rate}=2.0\times10^{-4}\ \text{M s}^{-1}$.

</details>

### 2. Determining order

For $\mathrm{A+B\rightarrow products}$:

| Exp | $[A]_0$ (M) | $[B]_0$ (M) | initial rate (M s$^{-1}$) |
| --- | --- | --- | --- |
| 1 | 0.10 | 0.10 | $2.0\times10^{-3}$ |
| 2 | 0.20 | 0.10 | $4.0\times10^{-3}$ |
| 3 | 0.10 | 0.30 | $1.8\times10^{-2}$ |

Find the rate law and $k$.

<details><summary>Answer and reasoning</summary>

Doubling $[A]$ doubles the rate $\Rightarrow$ first order in $A$. Tripling $[B]$ gives $3^n=9 \Rightarrow n=2$. Rate $=k[A][B]^2$. $k=2.0\times10^{-3}/(0.10\times0.10^2)=2.0\ \text{L}^2\text{mol}^{-2}\text{s}^{-1}$.

</details>

### 3. Integrated first order

A first-order reaction has $k=0.0347\ \text{min}^{-1}$. Starting from $0.080\ \text{M}$, find $[A]$ after 20 min and the half-life.

<details><summary>Answer and reasoning</summary>

$\ln[A]=\ln(0.080)-0.0347\times20=-2.526-0.693=-3.219$, so $[A]=0.040\ \text{M}$. Half-life $=0.693/0.0347=20.0\ \text{min}$; after one half-life exactly half remains, consistent.

</details>

### 4. Second-order concentration

For a second-order reaction, $k=0.25\ \text{L mol}^{-1}\text{s}^{-1}$ and $[A]_0=0.40\ \text{M}$. Find $[A]$ after $10\ \text{s}$.

<details><summary>Answer and reasoning</summary>

$1/[A]=1/0.40+0.25\times10=2.5+2.5=5.0$, so $[A]=0.20\ \text{M}$.

</details>

### 5. Half-life comparison

A reaction is second order with $k=0.50\ \text{L mol}^{-1}\text{s}^{-1}$. Compare the first half-life when $[A]_0=1.0\ \text{M}$ and when $[A]_0=0.50\ \text{M}$.

<details><summary>Answer and reasoning</summary>

$t_{1/2}=1/(k[A]_0)$: $2.0\ \text{s}$ for $1.0\ \text{M}$ and $4.0\ \text{s}$ for $0.50\ \text{M}$. Doubling the initial concentration halves the first half-life.

</details>

### 6. Arrhenius: activation energy

A reaction has $k=2.0\times10^{-3}\ \text{s}^{-1}$ at 300 K and $k=8.0\times10^{-3}\ \text{s}^{-1}$ at 320 K. Find $E_a$.

<details><summary>Answer and reasoning</summary>

$\ln(8.0/2.0)=\ln4=1.386$. $1/300-1/320=0.0002083$. $E_a=1.386\times8.314/0.0002083=5.53\times10^4\ \text{J mol}^{-1}=55.3\ \text{kJ mol}^{-1}$.

</details>

### 7. Arrhenius: prediction

For the reaction above, estimate $k$ at 310 K.

<details><summary>Answer and reasoning</summary>

Using the two-point form between 300 K and 310 K: $\ln(k/2.0\times10^{-3})=(55300/8.314)(1/300-1/310)=6651\times0.0001075=0.715$, so $k=2.0\times10^{-3}\times e^{0.715}=4.05\times10^{-3}\ \text{s}^{-1}$.

</details>

### 8. Catalyst effect

An uncatalysed reaction has $E_a=90\ \text{kJ mol}^{-1}$; the catalysed path has $E_a=60\ \text{kJ mol}^{-1}$. At 300 K, by what factor is the catalysed reaction faster (assume equal $A$)?

<details><summary>Answer and reasoning</summary>

Factor $=\exp[(90000-60000)/(8.314\times300)]=\exp(12.03)=1.68\times10^5$.

</details>

### 9. Collision theory

For $E_a=60\ \text{kJ mol}^{-1}$ at 300 K, the energy factor is $e^{-E_a/RT}$. If the steric factor is $P=10^{-3}$ and the collision frequency factor is $Z=10^{11}\ \text{s}^{-1}$, estimate $k$.

<details><summary>Answer and reasoning</summary>

$e^{-60000/(8.314\times300)}=e^{-24.06}=3.2\times10^{-11}$. $k=PZe^{-E_a/RT}=10^{-3}\times10^{11}\times3.2\times10^{-11}=3.2\times10^{-3}\ \text{s}^{-1}$.

</details>

### 10. Pseudo-first-order

In the hydrolysis of an ester, water is in large excess. The second-order constant is $k=0.10\ \text{L mol}^{-1}\text{s}^{-1}$ and $[\mathrm{H_2O}]=55.5\ \text{M}$. Find the pseudo-first-order constant and the half-life of the ester.

<details><summary>Answer and reasoning</summary>

$k'=k[\mathrm{H_2O}]=0.10\times55.5=5.55\ \text{s}^{-1}$. $t_{1/2}=0.693/5.55=0.125\ \text{s}$.

</details>

## Self-check

You are ready to move on when you can:

- convert a concentration–time change into a reaction rate using stoichiometric factors;
- determine the order and $k$ from initial-rate data;
- identify zero, first and second order from linear plots and state the matching integrated equation;
- compute a concentration or time with the correct integrated equation;
- use the correct half-life formula for the order;
- apply the Arrhenius equation in kelvin, including the two-point form;
- estimate a rate enhancement from a change in activation energy;
- explain, in collision-theory terms, why temperature and catalysts change the rate;
- check that an answer has the right sign, units and physical magnitude.

If one item still feels shaky, revisit that module and redo its questions without the reveal.<|end|><|start|>write to=assistant<|channel|>analysis<|message|>Created file successfully: src/content/class-12/chemistry/class-12-chemistry-chemical-kinetics/chemical-kinetics-review.md