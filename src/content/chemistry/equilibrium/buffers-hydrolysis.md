## How a drop of acid can change almost nothing

Add $1.0\ \text{mL}$ of $0.10\ \text{M}$ hydrochloric acid to a litre of pure water: the pH falls from $7.0$ to about $4.0$ — a thousandfold jump in $[\mathrm{H^+}]$. Add the same acid to a litre of blood, and the pH moves from $7.40$ to $7.38$: essentially nothing. Something in blood resists the change. That something is a **buffer**, and it is one of the most useful pieces of applied equilibrium chemistry there is.

## What a buffer is

A buffer is an equilibrium mixture of a **weak acid and its conjugate base** (or a weak base and its conjugate acid) in comparable amounts:

$$
\mathrm{CH_3COOH \rightleftharpoons CH_3COO^- + H^+}
\qquad
K_a = 1.8\times10^{-5}
$$

The pair works like two sponges, one on each side of the balance:

- **Added strong acid** ($\mathrm{H^+}$): the acetate soaks it up, $\mathrm{CH_3COO^- + H^+ \rightarrow CH_3COOH}$. The $\mathrm{H^+}$ added is converted into a molecule of the *weak* acid, whose small $K_a$ keeps the free proton concentration low.
- **Added strong base** ($\mathrm{OH^-}$): the reserve of undissociated weak acid consumes it, $\mathrm{CH_3COOH + OH^- \rightarrow CH_3COO^- + H_2O}$ — no free proton is ever released.

The balance holds as long as both reservoirs are non-trivial. Exhaust one (say, all the acetate) and the defence collapses.

## Henderson–Hasselbalch: the working equation

Write $K_a$ for the buffer pair and rearrange:

$$
[\mathrm{H^+}] = K_a\,\frac{[\mathrm{CH_3COOH}]}{[\mathrm{CH_3COO^-}]}
\quad\Rightarrow\quad
\mathrm{pH} = \mathrm{p}K_a + \log\frac{[\mathrm{A^-}]}{[\mathrm{HA}]}
$$

In words: **pH = pKa + log (moles of salt form ÷ moles of acid form)** — the total volume cancels, so you can feed the equation moles instead of concentrations. For a weak-base buffer, the matching form $\mathrm{pOH} = \mathrm{p}K_b + \log\frac{[\text{salt}]}{[\text{base}]}$ handles ammonia/ammonium directly.

| Salt : acid | pH relative to $\mathrm{p}K_a$ |
| --- | --- |
| $1:1$ | pH $=\ \mathrm{p}K_a$ |
| $10:1$ | pH $=\ \mathrm{p}K_a + 1$ |
| $1:10$ | pH $\ =\ \mathrm{p}K_a - 1$ |

Adding acid lowers the ratio (pH falls slightly); adding base raises it slightly. A buffer's useful range is about $\mathrm{p}K_a \pm 1$.

## Worked example 1: making a buffer of a chosen pH

Target: pH $= 4.74$ using acetic acid ($\mathrm{p}K_a = 4.74$) and sodium acetate. Equal molar amounts give pH $= \mathrm{p}K_a$ exactly — $0.10\ \text{mol}$ of acid and $0.10\ \text{mol}$ of salt in $1.0\ \text{L}$.

Now add $0.020\ \text{mol}$ of $\mathrm{HCl}$ to this buffer. The added proton converts acetate to acid:

$$
n(\mathrm{A^-}) = 0.10 - 0.020 = 0.080\ \text{mol},\qquad
n(\mathrm{HA}) = 0.10 + 0.020 = 0.12\ \text{mol}
$$

$$
\mathrm{pH} = 4.74 + \log\frac{0.080}{0.12} = 4.74 + \log 0.67 = 4.74 - 0.18 = 4.56
$$

Compare: $0.020\ \text{mol}$ of $\mathrm{HCl}$ dumped in a litre of unbuffered water gives $[\mathrm{H^+}] = 0.020\ \text{M}$ and pH $\approx 1.7$. The buffer absorbed what would have been a three-unit pH swing at the cost of $0.18$ units.

**Buffer capacity** is the amount of acid or base the solution can absorb before the pH slides out of range; it grows with the **total** concentration of the pair (a $0.2/0.2$ mix resists about four times as much as $0.05/0.05$ of the same ratio). Highest capacity sits exactly at equality, when the ratio is $1$.

## Salt hydrolysis: the reverse pathway

Drop a salt of a weak acid into water and its anion reclaims a proton from water:

$$
\mathrm{CH_3COO^- + H_2O \rightleftharpoons CH_3COOH + OH^-}
\qquad
K_h = \frac{K_w}{K_a}
$$

A conjugate base is *always* a base, so salt solutions are not automatically neutral. The four cases:

| Salt type | Example | Solution's character | pH |
| --- | --- | --- | --- |
| strong acid + strong base | $\mathrm{NaCl}$, $\mathrm{KNO_3}$ | saline | $7$ (no hydrolysis) |
| strong acid + weak base | $\mathrm{NH_4Cl}$ | acidic | $<7$ — $\mathrm{NH_4^+}$ donates to water |
| weak acid + strong base | $\mathrm{CH_3COONa}$ | basic | $>7$ — $\mathrm{CH_3COO^-}$ grabs a proton |
| weak acid + weak base | $\mathrm{NH_4CN}$ | depends | compare $K_a$ and $K_b$ of the two ions |

For the doubly-weak case, $\mathrm{NH_4CN}$: the cation is acidic with $K_a(\mathrm{NH_4^+}) = K_w/K_b(\mathrm{NH_3}) \approx 5.6\times10^{-10}$; the anion is basic with $K_b(\mathrm{CN^-}) = K_w/K_a(\mathrm{HCN}) \approx 1.6\times10^{-5}$. The anion is by far the stronger player, so the solution is **basic** (pH $\approx 9.2$ at tenth-molar level) — not the naive $\sqrt{K_b\,C} \approx 11$ estimate, because the cation's acidity cancels much of the anion's basicity. Score the two constants; do not guess.

## Worked example 2: pH of a hydrolysing salt

Find the pH of $0.10\ \text{M}$ of $\mathrm{CH_3COONa}$ ($K_a = 1.8\times10^{-5}$).

Hydrolysis: $\mathrm{CH_3COO^- + H_2O \rightleftharpoons CH_3COOH + OH^-}$, with

$$
K_h = \frac{K_w}{K_a} = \frac{1.0\times10^{-14}}{1.8\times10^{-5}} = 5.6\times10^{-10}
$$

Let $[\mathrm{OH^-}] = x$ from water donated: $K_h = \dfrac{[\mathrm{CH_3COOH}][\mathrm{OH^-}]}{[\mathrm{CH_3COO^-}]} \approx \dfrac{x^2}{0.10}$:

$$
x^2 = 5.6\times10^{-11} \quad\Rightarrow\quad
[\mathrm{OH^-}] = 7.5\times10^{-6}\ \text{M}
$$

$$
\mathrm{pOH} = 6 - \log 7.5 \approx 6 - 0.88 = 5.13
\qquad
\mathrm{pH} = 14 - 5.13 = 8.87
$$

**Sanity check.** The salt is of the weak-acid/strong-base type, so a basic pH; $8.87$ is above $7$ but only mildly so, which matches the tiny $K_h$. The degree of hydrolysis $x/0.10 \approx 7.5\times10^{-5}$ — nearly all of the acetate stays put, which is why the $\approx x^2/C$ step was legitimate.

<learning-block type="mistake" title="Buffer and hydrolysis errors">

- **Treating buffer pH as fixed for all dilutions.** Dilution barely changes the ratio, but it does shrink the capacity; once the pair is diluted to near water's own ion concentration, water's autoionisation takes over and the pH drifts toward $7$. A buffer therefore has a usable concentration range as well as a usable pH range.
- **Feeding Henderson–Hasselbalch a strong acid/base pair.** The relation needs a *weak* pair at equilibrium; $\mathrm{HCl/NaCl}$ is not a buffer at all (the ratio degenerates to the strong acid's own dissociation).
- **Calling every salt solution neutral.** Salt and neutrality are different ideas; scan both ions for weak partners before declaring pH 7.
- **Comparing pH by concentration rather than by $K$.** A hydrolysing salt competes via its $K_h$, not via its amount alone; hydrolysis degrees are typically tiny.

</learning-block>

## Try it yourself

**1.** A buffer contains $0.20\ \text{mol}$ of $\mathrm{NH_3}$ and $0.20\ \text{mol}$ of $\mathrm{NH_4Cl}$ in $1.0\ \text{L}$. $\mathrm{p}K_b(\mathrm{NH_3}) = 4.74$. Find the pH, then the pH after adding $0.040\ \text{mol}$ of solid $\mathrm{HCl}$ (volume change negligible).

<details><summary>Show the reasoning</summary>

Equal amounts — use the base version: $\mathrm{pOH} = \mathrm{p}K_b + \log\frac{[\mathrm{NH_4^+}]}{[\mathrm{NH_3}]} = 4.74 + \log\frac{0.20}{0.20} = 4.74$, so $\mathrm{pH} = 9.26$.

The added $\mathrm{HCl}$ converts $\mathrm{NH_3}$ into $\mathrm{NH_4^+}$:

$$
n(\mathrm{NH_3}) = 0.16,\quad n(\mathrm{NH_4^+}) = 0.24
$$

$$
\mathrm{pOH} = 4.74 + \log\frac{0.24}{0.16} = 4.74 + 0.18 = 4.92
\qquad
\mathrm{pH} = 9.08
$$

The pH dropped just $0.18$ units for $0.04\ \text{mol}$ of a strong acid.
</details>

**2.** Classify solutions of $\mathrm{KNO_3}$, $\mathrm{NH_4NO_3}$, $\mathrm{K_2CO_3}$ and $\mathrm{NH_4CN}$ as acidic, basic or nearly neutral.

<details><summary>Show the reasoning</summary>

- $\mathrm{KNO_3}$: $\mathrm{K^+}$ (counter-ion of $\mathrm{KOH}$, a strong base) and $\mathrm{NO_3^-}$ (of $\mathrm{HNO_3}$, a strong acid) hydrolysis-free → neutral.
- $\mathrm{NH_4NO_3}$: cation of a weak base, anion of a strong acid → acidic ($\mathrm{pH} \approx 5$ for standard tenth-molar).
- $\mathrm{K_2CO_3}$: anion of a weak acid $\mathrm{H_2CO_3}$ → basic (pH about $11.7$ in tenth molar).
- $\mathrm{NH_4CN}$: both ions hydrolyse; $\mathrm{CN^-}$ with $K_b \approx 1.6\times10^{-5}$ far outguns $\mathrm{NH_4^+}$ with $K_a \approx 5.6\times10^{-10}$ → basic.
</details>

**3.** Why is pure water itself a terrible buffer?

<details><summary>Show the reasoning</summary>

A buffer needs appreciable stocks of both members of a weak conjugate pair. Water's "acid" and "base" forms exist only at $10^{-7}\ \text{M}$; absorbing any real dose of acid or base dwarfs these stocks instantly, so the pH slides unresisted. Compare the blood bicarbonate pair, which carries millimole-scale reservoirs of both its forms: real amounts, real resistance.
</details>

## Remember

- Buffers pair a weak acid with its salt (or weak base with its salt); the ratio of the two forms fixes the pH through Henderson–Hasselbalch.
- The best buffer holds $\mathrm{pH} = \mathrm{p}K_a$; the working window is roughly $\pm 1$.
- Capacity scales with the **total** concentration of the pair, and is greatest at the $1:1$ ratio; the pH is set by the ratio alone.
- Salts of weak partners hydrolyse: weak-acid salts are basic, weak-base salts are acidic, salts of two weak partners go whichever constant is bigger.
- Buffers resist until a form is exhausted; capacity, not ratio, measures how long they last.

Solubility is hydrolysis's sibling: a saturated solution of a sparingly soluble salt is a precipitation–dissolution equilibrium, and its constant — $K_{sp}$ — is next.
