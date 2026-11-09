## Your study plan for this chapter

The chapter is one idea in many costumes: a ratio of rate terms, compared with a constant. That constant wears four names in five contexts — $K_c/K_p$ for reactions, $K_a/K_b$ for acids and bases, $K_h$ for hydrolysis, $K_{sp}$ for precipitates. A solid pass takes about **3 hours**:

1. **Physical and chemical equilibrium** — 20 min
2. **$K_c$, $K_p$ and the law of mass action** — 25 min
3. **Reaction quotient and ICE tables** — 25 min
4. **Le Chatelier's principle** — 20 min
5. **Acids, bases and pH** — 30 min
6. **Buffers and salt hydrolysis** — 25 min
7. **Solubility product** — 25 min
8. **This mastery check** — 25 min

After each lesson, close it and redo its questions from a blank page. You have truly got a method when you can name the constant **before** computing.

## Choosing the tool from the question's clues

| Clue in the question | Reach for |
| --- | --- |
| Moles and volume given at equilibrium | Compute concentrations, write $K_c$ from the balanced equation |
| Partial pressures asked, or $K_p$ vs $K_c$ | $K_p = K_c(RT)^{\Delta n}$; count gaseous moles for $\Delta n$ |
| "Which way will it go?" for a named mixture | Compute $Q$ and compare with $K$ |
| "How much remains at equilibrium?" | ICE table; check for a square-root shortcut; reject impossible roots |
| Concentration, pressure, temperature or catalyst changed | Le Chatelier: $Q$ vs $K$ / count gaseous moles / only $T$ moves $K$ |
| pH of a **strong** acid/base | $[\mathrm{H^+}] = C$ directly; watch dilution before equating |
| pH of a **weak** acid/base | $[\mathrm{H^+}] = \sqrt{K_a C}$ (check $x \ll C$ afterwards) |
| "What is the pH after adding …" to a buffer | Henderson–Hasselbalch on the *new* mole counts |
| Salt of a weak partner — acidic or basic? | Scan ions; compare $K_a$ and $K_b$ when both are weak |
| "Does a precipitate form?" | Dilute both concentrations for mixing, compare $Q_{sp}$ with $K_{sp}$ |
| Solubility below $K_{sp}$ or a common ion present | Use the formula-type table; supply ions, solve for the unknown one |

## Mastery check

Work them without looking up. Assume $298\ \text{K}$ and $K_w = 1.0\times10^{-14}$ unless a question states otherwise.

### 1. Build $K_c$ from equilibrium data

In a $4.0\ \text{L}$ vessel the equilibrium mixture for $\mathrm{H_2 + I_2 \rightleftharpoons 2HI}$ contains $1.0\ \text{mol}$ of $\mathrm{H_2}$, $2.0\ \text{mol}$ of $\mathrm{I_2}$ and $6.0\ \text{mol}$ of $\mathrm{HI}$. Evaluate $K_c$.

<details><summary>Answer and reasoning</summary>

$[\mathrm{H_2}] = 0.25\ \text{M}$, $[\mathrm{I_2}] = 0.50\ \text{M}$, $[\mathrm{HI}] = 1.5\ \text{M}$.

$$
K_c = \frac{(1.5)^2}{(0.25)(0.50)} = \frac{2.25}{0.125} = 18
$$

The powers make sense: numerator exponent $2$ matches the balanced equation's coefficient of $\mathrm{HI}$.
</details>

### 2. Direction by $Q$

At the temperature of question 1 ($K_c = 18$), a $4.0\ \text{L}$ vessel holds $2.0\ \text{mol}$ of $\mathrm{H_2}$, $2.0\ \text{mol}$ of $\mathrm{I_2}$ and $2.0\ \text{mol}$ of $\mathrm{HI}$. Which way is the composition drifting?

<details><summary>Answer and reasoning</summary>

Each is $0.50\ \text{M}$, so

$$
Q = \frac{(0.50)^2}{(0.50)(0.50)} = 1.0 < 18
$$

Too little product: the forward reaction runs, making more $\mathrm{HI}$ until $Q$ climbs back to $18$.
</details>

### 3. $K_p$ from $K_c$

At $500\ \text{K}$, $K_c = 0.50$ for $\mathrm{N_2 + 3H_2 \rightleftharpoons 2NH_3}$. Find $K_p$ ($R = 0.0831\ \text{L·bar·mol}^{-1}\text{·K}^{-1}$).

<details><summary>Answer and reasoning</summary>

$\Delta n = 2 - 4 = -2$:

$$
K_p = 0.50\,(0.0831\times500)^{-2} = \frac{0.50}{(41.55)^2} = \frac{0.50}{1.73\times10^{3}} = 2.9\times10^{-4}
$$

Negative $\Delta n$: $K_p$ is much smaller than $K_c$.
</details>

### 4. Dilute strong acid

$100\ \text{mL}$ of $0.010\ \text{M}$ of $\mathrm{HCl}$ is diluted to $500\ \text{mL}$. Find the pH.

<details><summary>Answer and reasoning</summary>

The dilution factor is $5$:

$$
[\mathrm{H^+}] = \frac{0.010}{5} = 2.0\times10^{-3}\ \text{M}
\qquad\Rightarrow\qquad
\mathrm{pH} = 3 - \log 2 = 3 - 0.30 = 2.70
$$

Always dilute before logging — the commonest single slip in pH problems.
</details>

### 5. Weak acid pH

A weak monoprotic acid $\mathrm{HA}$ has $K_a = 2.0\times10^{-5}$; the solution is $0.20\ \text{M}$. Find pH and the degree of dissociation.

<details><summary>Answer and reasoning</summary>

$$
[\mathrm{H^+}] = \sqrt{K_a C} = \sqrt{(2.0\times10^{-5})(0.20)} = 2.0\times10^{-3}\ \text{M}
\qquad\Rightarrow\qquad
\mathrm{pH} = 2.70
$$

Degree of dissociation $\alpha = x/C = 1.0\%$ — safely inside the small-$x$ approximation, so no quadratic refresh needed.
</details>

### 6. Buffer under attack

$1.0\ \text{L}$ of buffer holds $0.10\ \text{mol}$ of $\mathrm{CH_3COOH}$ and $0.10\ \text{mol}$ of $\mathrm{CH_3COONa}$ ($\mathrm{p}K_a = 4.74$). Find the pH, then the pH after adding $0.020\ \text{mol}$ of dissolved $\mathrm{HCl}$.

<details><summary>Answer and reasoning</summary>

Initial: ratio $1:1$, so $\mathrm{pH} = \mathrm{p}K_a = 4.74$.

$\mathrm{HCl}$ converts acetate to acid:

$$
n(\mathrm{A^-}) = 0.080,\quad n(\mathrm{HA}) = 0.12
$$

$$
\mathrm{pH} = 4.74 + \log\frac{0.080}{0.12} = 4.74 - 0.18 = 4.56
$$

A $20\ \text{mmol}$ dose of strong acid ($0.020\ \text{mol}$ in $1.0\ \text{L}$) moved the pH by only $0.18$; the same amount in plain water would have landed near pH $1.7$.
</details>

### 7. Hydrolysing salt

Find the pH of $0.10\ \text{M}$ of $\mathrm{NH_4Cl}$. $K_b(\mathrm{NH_3}) = 1.8\times10^{-5}$.

<details><summary>Answer and reasoning</summary>

$\mathrm{NH_4^+}$ is acidic: $K_a = K_w/K_b = 5.6\times10^{-10}$.

$$
[\mathrm{H^+}] = \sqrt{K_a C} = \sqrt{(5.6\times10^{-10})(0.10)} = 7.5\times10^{-6}\ \text{M}
$$

$$
\mathrm{pH} = 6 - \log 7.5 = 6 - 0.87 = 5.13
$$

Salt of a weak base + strong acid: mildly acidic, as predicted by the four-case table.
</details>

### 8. $K_{sp}$ to grams per litre

$K_{sp}$ of $\mathrm{CaCO_3}$ is $5.0\times10^{-9}$; its molar mass is $100\ \text{g/mol}$. Express the solubility in g/L.

<details><summary>Answer and reasoning</summary>

AB-type: $s = \sqrt{5.0\times10^{-9}} = 7.1\times10^{-5}\ \text{M}$, hence

$$
7.1\times10^{-5}\ \text{mol/L} \times 100\ \text{g/mol} = 7.1\times10^{-3}\ \text{g/L}
$$

Milligram-per-litre scale — the level at which scales and kettles register hardness.
</details>

### 9. Common-ion suppression

How much $\mathrm{CaF_2}$ can dissolve in $0.10\ \text{M}$ of $\mathrm{NaF}$? ($K_{sp} = 3.9\times10^{-11}$) Compare with pure water.

<details><summary>Answer and reasoning</summary>

$$
s\,(0.10)^2 = 3.9\times10^{-11}
\quad\Rightarrow\quad
s = 3.9\times10^{-9}\ \text{M}
$$

versus $2.1\times10^{-4}\ \text{M}$ in pure water: suppression by about $5\times10^4$-fold. The shared fluoride enters squared in $K_{sp}$, so the supplied $0.10\ \text{M}$ does extremely fine work.
</details>

### 10. Le Chatelier in industry

For the exothermic equilibrium $\mathrm{2SO_2(g) + O_2(g) \rightleftharpoons 2SO_3(g)}$, list the changes that increase the sulphur-trioxide fraction at equilibrium.

<details><summary>Answer and reasoning</summary>

- **More pressure** — $3$ moles of reactant gas against $2$ on the product side; compression favours $\mathrm{SO_3}$.
- **Lower temperature** — the forward reaction is exothermic, so cooling raises $K$ (this is the one disturbance that changes the constant itself).
- **Removing $\mathrm{SO_3}$** as it forms (absorption into sulphuric acid) — pulls the balance forward continuously, even though this moves the *system*, not $K$.
- **A catalyst** — does *not* increase the equilibrium amount; it only arrives there faster.

The industrial recipe (moderate-high pressure, $\sim 720\ \text{K}$, $\mathrm{V_2O_5}$, continuous absorption) has exactly this logic plus rate economics.
</details>

## Self-check

You are ready for the timed set when you can:

- write $K_c$, $K_p$ or $K_{sp}$ for any balanced reaction, with pure solids excluded;
- convert between $K_p$ and $K_c$ using the signed $\Delta n$ in $RT$;
- decide the direction of change from $Q$, from pressure, and from temperature — and say which of the three changes $K$ itself;
- produce the pH of strong, weak, and hydrolysing-salt aqueous concentrations without notes;
- run a Henderson–Hasselbalch attack on a buffer and report the shift;
- compare $Q_{sp}$ with $K_{sp}$ *after mixing dilution* and end a selective-precipitation sequence;
- check every answer: positive concentrations, plausible pH (0–14), plausible solubilities.

Any gap means one more pass over that lesson — then the timed set.
