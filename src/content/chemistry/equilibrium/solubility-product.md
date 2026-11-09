## Why analysis labs live on this constant

Mix silver nitrate and table salt, and a white cloud appears; every ion pair that meets in solution and sticks leaves a recipe for "how concentrated can we get before the cloud forms". Qualitative analysis, toothpaste fluoride dosing, kidney-stone chemistry and fertiliser design all rest on the same number: the **solubility product**, $K_{sp}$.

## Dissolution as an equilibrium

An "insoluble" salt is not really insoluble — a tiny amount always dissolves until the solution is **saturated**:

$$
\mathrm{AgCl(s) \rightleftharpoons Ag^+(aq) + Cl^-(aq)}
$$

At saturation, the solid and its ions are in dynamic balance, and (remember: no pure solids in a $K$):

$$
K_{sp} = [\mathrm{Ag^+}][\mathrm{Cl^-}]
$$

$K_{sp}$ has one value per temperature and is typically a small number. Work directly in concentrations of ions, using molar solubility $s$ (mol per litre) to convert.

## Relating $K_{sp}$ to molar solubility

Let $s$ be the molar solubility; each formula gives its own pattern:

| Salt type | Dissolution equation | $K_{sp}$ in terms of $s$ | Solving |
| --- | --- | --- | --- |
| AB | $\mathrm{AB(s) \rightleftharpoons A^{+} + B^{-}}$ | $s^2$ | $s = \sqrt{K_{sp}}$ |
| AB$_2$ or A$_2$B | $\mathrm{AB_2(s) \rightleftharpoons A^{2+} + 2B^{-}}$ | $4s^3$ | $s = \sqrt[3]{K_{sp}/4}$ |
| A$_2$B$_3$ or A$_3$B$_2$ | $\mathrm{A_3B_2(s) \rightleftharpoons 3A^{2+} + 2B^{3-}}$ | $108\,s^5$ | $s = \sqrt[5]{K_{sp}/108}$ |

where the numeric $108$ comes from $3^3\times2^2 = 108$. For A$_3$B$_2$: ion concentrations $3s$ and $2s$, product $(3s)^3(2s)^2 = 27\cdot4\,s^5 = 108\,s^5$.

**Example (AB).** $K_{sp}(\mathrm{AgCl}) = 1.8\times10^{-10}$ at 298 K:

$$
s = \sqrt{1.8\times10^{-10}} = 1.34\times10^{-5}\ \text{M}
$$

In grams per litre: $1.34\times10^{-5}\ \text{mol/L}\times 143.4\ \text{g/mol} \approx 1.9\times10^{-3}\ \text{g/L}$ — about $2$ milligrams in a whole litre. That "insoluble" is precise now.

**Example (AB$_2$).** $K_{sp}(\mathrm{CaF_2}) = 3.9\times10^{-11}$:

$$
4s^3 = 3.9\times10^{-11}
\quad\Rightarrow\quad
s = \sqrt[3]{9.75\times10^{-12}} \approx 2.1\times10^{-4}\ \text{M}
$$

$[\mathrm{F^-}] = 2s \approx 4.3\times10^{-4}\ \text{M}$. Reflection check on the pattern: calcium fluoride is far less soluble by $K_{sp}$ yet *more* soluble in moles than silver chloride — never compare $K_{sp}$ values between salts of different formula types; convert to $s$ first.

## The common-ion effect

Add a soluble salt that shares one ion with the sparingly soluble salt, and the dissolution equilibrium is pushed backward — Le Chatelier, in solubility clothing.

$\mathrm{AgCl}$ in $0.010\ \text{M}$ of $\mathrm{NaCl}$ solution: the chloride already present is enormous compared with what dissolves. Writing $s \ll 0.010$:

$$
K_{sp} = s\,(0.010)
\quad\Rightarrow\quad
s = \frac{1.8\times10^{-10}}{0.010} = 1.8\times10^{-8}\ \text{M}
$$

Solubility has fallen by a factor of about $750$ versus pure water ($1.8\times10^{-8}$ versus $1.34\times10^{-5}$). The assumption $s \ll 0.010$ is self-consistent: the added solubility is about six orders below the supplied chloride.

## Precipitation: comparing $Q$ with $K_{sp}$

Define the ionic product $Q_{sp}$ exactly as $K_{sp}$ but with whatever concentrations the solution has *right now*:

| Condition | Verdict |
| --- | --- |
| $Q_{sp} < K_{sp}$ | undersaturated: no precipitate; more solid could still dissolve |
| $Q_{sp} = K_{sp}$ | just saturated: the balance line |
| $Q_{sp} > K_{sp}$ | supersaturated: precipitation occurs until $Q_{sp}$ falls back to $K_{sp}$ |

Here is the catch in dilutions: when two solutions are mixed, each ion's **concentration is diluted**; compute both post-mixing concentrations before comparing. Also note that beyond the tiny solubility, the reaction between any excess ions stops at the moment $Q_{sp} = K_{sp}$; arriving ions are "wasted" in pushing toward saturation, and the leftover precipitates or stays dissolved depending on the exact amounts.

## Worked example: will a precipitate form?

$20.0\ \text{mL}$ of $0.010\ \text{M}$ of $\mathrm{AgNO_3}$ is added to $20.0\ \text{mL}$ of $0.010\ \text{M}$ of $\mathrm{NaCl}$. Does $\mathrm{AgCl}$ precipitate? ($K_{sp} = 1.8\times10^{-10}$)

Concentration after mixing (volume doubled to $40.0\ \text{mL}$):

$$
[\mathrm{Ag^+}]_{\text{initial}} = [\mathrm{Cl^-}]_{\text{initial}} = \frac{0.010 \times 20.0}{40.0} = 5.0\times10^{-3}\ \text{M}
$$

$$
Q_{sp} = (5.0\times10^{-3})(5.0\times10^{-3}) = 2.5\times10^{-5}
\quad\gg\quad K_{sp} = 1.8\times10^{-10}
$$

$Q_{sp} \gg K_{sp}$, so $\mathrm{AgCl}$ precipitates readily — almost all the silver falls out.

**How much silver remains?** The reagents were mixed in exactly equal amounts, so they precipitate in a $1:1$ ratio and the surviving ions stay equal in concentration. Calling that common concentration $y$:

$$
K_{sp} = y^2
\quad\Rightarrow\quad
y = \sqrt{1.8\times10^{-10}} = 1.3\times10^{-5}\ \text{M}
$$

Only about $0.3\%$ of the original $5.0\times10^{-3}\ \text{M}$ of silver survives, so precipitation is effectively complete. Had chloride been deliberately supplied in excess, the common-ion effect would suppress the residue much further: with $[\mathrm{Cl^-}] = 5.0\times10^{-3}\ \text{M}$, the silver would be held at

$$
[\mathrm{Ag^+}] = \frac{K_{sp}}{[\mathrm{Cl^-}]} = \frac{1.8\times10^{-10}}{5.0\times10^{-3}} = 3.6\times10^{-8}\ \text{M}
$$

which is exactly why analytical labs wash a precipitate with chloride solution to recover the last traces of silver.

<learning-block type="mistake" title="Solubility-product slips">

- **Comparing $K_{sp}$ values of different formula types directly.** A smaller number does not always mean lower solubility (see $\mathrm{CaF_2}$ above).
- **Forgetting dilution on mixing.** Precipitation questions always start after mixing — halve (or further dilute) both ion concentrations first.
- **Forgetting the existing ion when a common ion is present.** For $\mathrm{PbCl_2}$ in $0.10\ \text{M}$ of $\mathrm{NaCl}$, write $s\,(0.10+2s)^2 \approx s\,(0.10)^2$ — the chloride is supplied, so only the lead term carries the unknown. Blindly writing $4s^3$ (the pure-water pattern) would treat the chloride as $2s$ and get the answer badly wrong.
- **Assuming a precipitate forms whenever two ionic solutions are mixed.** Some salts (all nitrates, most alkali salts) never; the judgement is $Q_{sp}$ vs $K_{sp}$.

</learning-block>

## Selective precipitation

Vary $K_{sp}$ and the same cation can be caught by different reagents at different concentrations. Suppose a solution contains both $\mathrm{Cl^-}$ and $\mathrm{I^-}$, each at $0.010\ \text{M}$, and dilute $\mathrm{AgNO_3}$ is added dropwise. The silver concentration needed to start each precipitate is:

$$
\mathrm{AgI:\ } K_{sp} = 8.3\times10^{-17}
\quad\Rightarrow\quad
[\mathrm{Ag^+}] = \frac{8.3\times10^{-17}}{0.010} = 8.3\times10^{-15}\ \text{M}
$$

$$
\mathrm{AgCl:\ } [\mathrm{Ag^+}] = \frac{1.8\times10^{-10}}{0.010} = 1.8\times10^{-8}\ \text{M}
$$

$\mathrm{AgI}$ needs a silver concentration over two million times smaller, so it precipitates first, at almost nothing; $\mathrm{AgCl}$ waits until the free silver reaches $1.8\times10^{-8}\ \text{M}$. This is **selective precipitation** — the engine of classical qualitative group analysis: reagent concentration, not excess, decides which ion falls out.

## Try it yourself

**1.** What is the solubility of $\mathrm{CaCO_3}$ in water, in g/L? ($K_{sp} = 5.0\times10^{-9}$; $M = 100\ \text{g/mol}$)

<details><summary>Show the reasoning</summary>

$\mathrm{CaCO_3(s) \rightleftharpoons Ca^{2+} + CO_3^{2-}}$ is an AB salt:

$$
s = \sqrt{K_{sp}} = \sqrt{5.0\times10^{-9}} = 7.1\times10^{-5}\ \text{M}
$$

In grams per litre: $7.1\times10^{-5} \times 100 = 7.1\times10^{-3}\ \text{g/L}$ — about $7$ milligrams per litre. (Rainwater dissolves far more than this, because dissolved carbon dioxide converts the carbonate into bicarbonate, a different equilibrium that drags the dissolution forward — a taste of the buffer machinery of the previous module.)
</details>

**2.** Compute the solubility of $\mathrm{CaF_2}$ in $0.10\ \text{M}$ of $\mathrm{NaF}$. ($K_{sp} = 3.9\times10^{-11}$)

<details><summary>Show the reasoning</summary>

With the supplied fluoride $0.10\ \text{M}$ dominating (the added $2s$ is negligible):

$$
K_{sp} = [\mathrm{Ca^{2+}}][\mathrm{F^-}]^2 = s\,(0.10)^2
\quad\Rightarrow\quad
s = \frac{3.9\times10^{-11}}{0.010} = 3.9\times10^{-9}\ \text{M}
$$

Versus $2.1\times10^{-4}\ \text{M}$ in pure water: about a $5\times10^4$-fold drop — the squared stoichiometry of the common ion bites harder than for $\mathrm{AgCl}$.
</details>

**3.** $100\ \text{mL}$ of $0.0010\ \text{M}$ of $\mathrm{Pb(NO_3)_2}$ is mixed with $100\ \text{mL}$ of $0.0020\ \text{M}$ of $\mathrm{KI}$. Will $\mathrm{PbI_2}$ form, if $K_{sp} = 7.1\times10^{-9}$?

<details><summary>Show the reasoning</summary>

After mixing (total $200\ \text{mL}$):

$$
[\mathrm{Pb^{2+}}] = \frac{0.0010\times100}{200} = 5.0\times10^{-4}\ \text{M},\qquad
[\mathrm{I^-}] = \frac{0.0020\times100}{200} = 1.0\times10^{-3}\ \text{M}
$$

$$
Q_{sp} = [\mathrm{Pb^{2+}}][\mathrm{I^-}]^2 = (5.0\times10^{-4})(1.0\times10^{-3})^2 = 5.0\times10^{-10}
$$

$Q_{sp} = 5.0\times10^{-10} < K_{sp} = 7.1\times10^{-9}$: the mixture is undersaturated, and **no** precipitate forms. Note the care here — lead(II) iodide is famously yellow, yet in these dilutions it stays dissolved.
</details>

## Remember

- $K_{sp}$ is written from the ions only; solids never appear.
- Convert $K_{sp} \to s$ through the formula-type table: AB $s^2$, AB$_2$ $4s^3$, A$_3$B$_2$ $108s^5$.
- Never compare $K_{sp}$ values across formula types — compare $s$ values.
- A common ion suppresses solubility, and the suppression scales with the shared ion's stoichiometric exponent.
- Precipitation is judged by mixing-then-comparing: $Q_{sp} > K_{sp}$ after dilution is the trigger.

The machinery is now complete: $K$, $Q$, Le Chatelier, pH, buffers and $K_{sp}$ — every equilibrium question in this chapter is one of these in dress. Time to assemble them.
