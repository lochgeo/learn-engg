## Water as the great solvent: pH

Acids taste sour and metals dissolve in them; bases feel slippery and neutralise acids. To a chemist, both are special cases of the same equilibrium machinery — and water itself turns out to be a weak acid and a weak base at the same time.

## Three definitions, from narrowest to broadest

| Definition | Acid is… | Base is… | Where it works | Where it fails |
| --- | --- | --- | --- | --- |
| **Arrhenius** | gives $\mathrm{H^+}$ in water | gives $\mathrm{OH^-}$ in water | species in aqueous solution | non-aqueous systems |
| **Brønsted–Lowry** | a proton donor | a proton acceptor | any solvent | species that neither donate nor accept $\mathrm{H^+}$ |
| **Lewis** | an electron-pair acceptor | an electron-pair donor | everything | too broad for routine bookkeeping |

Examples that show why the later definitions exist:

- Arrhenius only: $\mathrm{HCl}$ gives $\mathrm{H^+}$ in water; $\mathrm{NaOH}$ gives $\mathrm{OH^-}$.
- Brønsted only: $\mathrm{HCl(g) + NH_3(g) \rightarrow NH_4^+ + Cl^-}$ — the base takes the proton directly, no water needed.
- Lewis only: $\mathrm{BF_3 + :NH_3 \rightarrow F_3B \leftarrow NH_3}$; the electron-deficient boron of $\mathrm{BF_3}$ accepts the lone pair, and no proton is transferred at all.

Arrhenius $\subset$ Brønsted $\subset$ Lewis: each later definition contains the earlier one.

## Conjugate pairs

When a Brønsted acid donates its proton, what remains is its **conjugate base**; when a base accepts one, it becomes its **conjugate acid**:

$$
\mathrm{CH_3COOH \rightleftharpoons CH_3COO^- + H^+}
\qquad
\mathrm{NH_3 + H^+ \rightleftharpoons NH_4^+}
$$

Acetic acid/acetate and ammonia/ammonium are conjugate pairs. Two rules tie strengths together:

1. **Strong acid → weak conjugate base, and vice versa.** $\mathrm{HCl}$ loses its proton so readily that $\mathrm{Cl^-}$ is an extremely feeble base.
2. **Strengths of a pair are linked through $K_w$:** $K_a(K_b) = K_w$ for any conjugate pair in water. A stronger acid therefore means a weaker conjugate base, in numbers, not just words.

## Water ionises — very slightly

$$
\mathrm{H_2O \rightleftharpoons H^+ + OH^-}
$$

or, more honestly, $\mathrm{H_2O + H_2O \rightleftharpoons H_3O^+ + OH^-}$. The constant:

$$
K_w = [\mathrm{H^+}][\mathrm{OH^-}] = 1.0\times10^{-14}\ \text{at } 298\ \text{K}
$$

In pure water $[\mathrm{H^+}] = [\mathrm{OH^-}] = 1.0\times10^{-7}\ \text{M}$: water is neutral. $K_w$ is temperature-dependent (it is larger in hot water, where neutrality has $[\mathrm{H^+}] > 10^{-7}$), so the "neutral pH $= 7$" claim is a $298$-K statement.

## The pH scale

Adding acid raises $[\mathrm{H^+}]$; $K_w$ stays put, so $[\mathrm{OH^-}]$ must fall — Le Chatelier applied to the ionic product. The scale compresses this wide range into a single number:

$$
\mathrm{pH} = -\log[\mathrm{H^+}]
\qquad
\mathrm{pOH} = -\log[\mathrm{OH^-}]
\qquad
\mathrm{pH + pOH = 14 \ (at\ 298\ K)}
$$

| Solution | $[\mathrm{H^+}]$ | pH | type |
| --- | --- | --- | --- |
| pure water | $10^{-7}$ | $7$ | neutral |
| $10^{-2}\ \text{M}$ of $\mathrm{HCl}$ (strong) | $10^{-2}$ | $2$ | <7: acidic |
| $10^{-2}\ \text{M}$ of $\mathrm{NaOH}$ (strong) | $10^{-12}$ | $12$ | >7: basic |

Useful log values: $\log 2 \approx 0.30$, $\log 3 \approx 0.48$, $\log 5 \approx 0.70$, $\log 7 \approx 0.85$.

## Strong versus weak: different arithmetic

**Strong acids and bases dissociate completely** — the "equilibrium" has effectively gone to the right over the concentrations we deal with, so the supplied concentration is the ion concentration.

- $0.010\ \text{M}$ of $\mathrm{HCl}$: $[\mathrm{H^+}] = 0.010\ \text{M}$ and $\mathrm{pH} = 2.0$.
- $0.010\ \text{M}$ of $\mathrm{NaOH}$: $[\mathrm{OH^-}] = 0.010\ \text{M}$, $\mathrm{pOH} = 2.0$, $\mathrm{pH} = 12.0$.

**Weak acids dissociate only partially**, so the homework is the ICE table:

$$
\mathrm{HA \rightleftharpoons H^+ + A^-}
\qquad
K_a = \frac{[\mathrm{H^+}][\mathrm{A^-}]}{[\mathrm{HA}]}
$$

With $C$ the analytical concentration of $\mathrm{HA}$, at equilibrium $[\mathrm{H^+}] = [\mathrm{A^-}] = x$ and $[\mathrm{HA}] = C - x$:

$$
K_a = \frac{x^2}{C-x} \approx \frac{x^2}{C}
\quad\Rightarrow\quad
x = \sqrt{K_a C}
$$

The approximation ($x \ll C$) holds when $x$ is under about $5\%$ of $C$ — for most weak-acid problems at tenth-molar level it is safe; check against the answer and go back to the quadratic if it is not close.

### Worked example: acetic acid

$0.10\ \text{M}$ of $\mathrm{CH_3COOH}$, $K_a = 1.8\times10^{-5}$.

$$
[\mathrm{H^+}] = \sqrt{K_a C} = \sqrt{(1.8\times10^{-5})(0.10)} = \sqrt{1.8\times10^{-6}} = 1.34\times10^{-3}\ \text{M}
$$

$$
\mathrm{pH} = -\log(1.34\times10^{-3}) = 3 - \log 1.34 \approx 3 - 0.13 = 2.87
$$

**Sanity check.** Compare with $0.10\ \text{M}$ of $\mathrm{HCl}$ (pH $1.0$): the weak acid's pH is $2.87$, so its $[\mathrm{H^+}]$ is about $75$-fold smaller. The acid is $0.10\ \text{M}$ in formula present yet dissociates only $x/C = 1.34\times10^{-3}/0.10 \approx 1.3\%$ — the "weak" tag in numbers (under $5\%$, so the small-$x$ approximation was justified).

## Polyprotic acids in one line

$\mathrm{H_2SO_4}$ gives its first proton completely (strong), the second weakly ($K_{a2} \approx 1.2\times10^{-2}$). For $\mathrm{H_2CO_3}$ or $\mathrm{H_3PO_4}$, successive $K_a$'s each fall by $10^4$–$10^5$, so the **first** dissociation controls the pH in ordinary problems; later steps matter when a salt's conjugate base sets the question (as in carbonate alkalinity, the next module).

<learning-block type="mistake" title="pH-scale slips">

- **"A pH-6 solution is very acidic."** It is weakly acidic: pH $6$ has $[\mathrm{H^+}]$ only $10$-fold above water's, while pH $1$ carries a millionfold more $[\mathrm{H^+}]$ than water has.
- **"Adding acid and base always gives pH $< 7$."** Only if the acid wins the mole count; neutralisation removes **both** species at fixed ratio, leaving water, salt — or excess of whichever reagent was larger.
- **"$10^{-8}\ \text{M}$ of $\mathrm{HCl}$ has pH 8."** Impossible: an acid solution cannot be basic. Water's own $10^{-7}\ \text{M}$ dominates and the pH is slightly below $7$ (the quadratic from $K_w$ gives about $6.98$).
- **"pH of pure water is always 7."** Only at $298\ \text{K}$; at $373\ \text{K}$ the neutral point is near pH $6.1$ because $K_w$ is larger — still neutral, just not 7.
- **"pH holds if you dilute a weak acid tenfold."** pH rises by only about half a unit, since $[\mathrm{H^+}] = \sqrt{K_a C} \propto \sqrt{C}$, not $C$.

</learning-block>

## Try it yourself

**1.** What is the pH of $0.050\ \text{M}$ of $\mathrm{NaOH}$?

<details><summary>Show the reasoning</summary>

A strong base: $[\mathrm{OH^-}] = 0.050\ \text{M}$.

$$
\mathrm{pOH} = -\log(5.0\times10^{-2}) = 2 - \log 5.0 = 2 - 0.70 = 1.30
$$

$$
\mathrm{pH} = 14 - 1.30 = 12.70
$$

The check: $[\mathrm{H^+}] = K_w/[\mathrm{OH^-}] = 10^{-14}/0.050 = 2\times10^{-13}\ \text{M}$, so $\mathrm{pH} = 13 - 0.30 = 12.70$ — the two routes agree.
</details>

**2.** An acid $\mathrm{HA}$ has $K_a = 2.0\times10^{-5}$. Find the pH of a $0.20\ \text{M}$ solution.

<details><summary>Show the reasoning</summary>

$$
[\mathrm{H^+}] = \sqrt{K_a C} = \sqrt{(2.0\times10^{-5})(0.20)} = \sqrt{4.0\times10^{-6}} = 2.0\times10^{-3}\ \text{M}
$$

$$
\mathrm{pH} = -\log(2.0\times10^{-3}) = 3 - 0.30 = 2.70
$$

Check: $x/C = 0.010$, that is $1\%$ dissociation — well inside the small-$x$ approximation.
</details>

**3.** The $K_a$ of a monoprotic acid is $1.0\times10^{-5}$. What is the $K_b$ of its conjugate base?

<details><summary>Show the reasoning</summary>

For a conjugate pair in water:

$$
K_a K_b = K_w = 1.0\times10^{-14}
\quad\Rightarrow\quad
K_b = \frac{10^{-14}}{10^{-5}} = 1.0\times10^{-9}
$$

The conjugate base is very weak, as rule 2 demands of a (moderately) stronger acid.
</details>

## Remember

- Arrhenius ⊂ Brønsted–Lowry ⊂ Lewis; the Brønsted conjugate pair is the workhorse connection between acid and base.
- Strong acids are fully dissociated; weak acid pH comes from $\sqrt{K_a C}$, weak base pOH from $\sqrt{K_b C}$.
- $K_w = [\mathrm{H^+}][\mathrm{OH^-}]$; pH $+$ pOH $= 14$ at $298\ \text{K}$ only.
- pH is logarithmic: one unit is a tenfold change in $[\mathrm{H^+}]$.
- In very dilute acids, water's own $10^{-7}\ \text{M}$ contribution has to be counted in; never quote a basic pH for an acidic solution.

Acids and bases alone are half the story; mixed as their salts, they reverse the water pathway — hydrolysis — and pair up to form buffers that hold pH steady. That is the next module.
