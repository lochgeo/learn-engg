## What if the mixture is not at equilibrium yet?

The equilibrium constant describes one special composition. But in the laboratory you constantly meet mixtures that are *not* there yet: freshly mixed reactants, a disturbed old mixture, a gas whose partial pressures you have just measured. The valuable question is not "what is the equilibrium constant?" but "**which way will this mixture move?**"

## The reaction quotient $Q$

Take the mass-action ratio and evaluate it with whatever concentrations the mixture has *right now*:

$$
Q = \frac{[\mathrm{C}]^c[\mathrm{D}]^d}{[\mathrm{A}]^a[\mathrm{B}]^b}
$$

$Q$ has exactly the form of $K_c$, but it is a running value that changes as the reaction proceeds. There is only one value of $Q$ at equilibrium, and it is $K$.

## Comparing $Q$ with $K$ predicts the direction

| Situation | Meaning | What happens |
| --- | --- | --- |
| $Q < K$ | too little product for balance | forward reaction dominates: more product forms |
| $Q = K$ | already balanced | no net change (rates equal) |
| $Q > K$ | too much product for balance | reverse reaction dominates: product decomposes |

The reasoning is pure logic. $Q$ is too *small* means the numerator (product side) must grow to reach $K$'s value, so the forward reaction must run. The reaction always drives $Q$ toward $K$, and $Q$ can cross or overshoot $K$ only if the conditions change.

## Worked example: which way does this flask go?

For the reaction $\mathrm{H_2(g) + I_2(g) \rightleftharpoons 2HI(g)}$ at a temperature where $K_c = 36$, a $5.0\ \text{L}$ flask contains $2.0\ \text{mol}$ of $\mathrm{H_2}$, $1.0\ \text{mol}$ of $\mathrm{I_2}$ and $4.0\ \text{mol}$ of $\mathrm{HI}$.

**Step 1 — concentrations.** $[\mathrm{H_2}] = 0.40\ \text{M}$, $[\mathrm{I_2}] = 0.20\ \text{M}$, $[\mathrm{HI}] = 0.80\ \text{M}$.

**Step 2 — evaluate $Q$.**

$$
Q = \frac{(0.80)^2}{(0.40)(0.20)} = \frac{0.64}{0.080} = 8.0
$$

**Step 3 — compare.** $Q = 8.0 < K_c = 36$: there is less product than equilibrium wants, so the **forward** reaction runs — more $\mathrm{HI}$ forms.

The mixture cannot simply jump to balance, though. How much product forms before the rates re-equalise? That is the job of the ICE table.

## ICE tables: the bookkeeping of the approach

**ICE** stands for Initial, Change, Equilibrium. Let the stoichiometry write the Change row, then solve the Equilibrium row against $K$.

Continuing the example: let $x\ \text{mol/L}$ of $\mathrm{H_2}$ react to reach equilibrium.

| | $\mathrm{H_2}$ | $\mathrm{I_2}$ | $\mathrm{HI}$ |
| --- | --- | --- | --- |
| Initial (M) | $0.40$ | $0.20$ | $0.80$ |
| Change (M) | $-x$ | $-x$ | $+2x$ |
| Equilibrium (M) | $0.40-x$ | $0.20-x$ | $0.80+2x$ |

Set the equilibrium row into the mass-action expression:

$$
\frac{(0.80+2x)^2}{(0.40-x)(0.20-x)} = 36
$$

Here the denominator is not itself a square, so no square-root simplification applies — this asymmetric case delivers the quadratic directly:

$$
(0.80+2x)^2 = 36\,(0.40-x)(0.20-x)
$$

Expanding: left side $0.64 + 3.2x + 4x^2$; right side $36\,(0.08 - 0.60x + x^2) = 2.88 - 21.6x + 36x^2$.

$$
0 = 2.88 - 21.6x + 36x^2 - 0.64 - 3.2x - 4x^2
= 32x^2 - 24.8x + 2.24
$$

Divide by $32$:

$$
x^2 - 0.775x + 0.070 = 0
$$

$$
x = \frac{0.775 \pm \sqrt{0.775^2 - 4(0.070)}}{2}
= \frac{0.775 \pm \sqrt{0.6006 - 0.280}}{2}
= \frac{0.775 \pm 0.566}{2}
$$

Two roots: $x = 0.67$ or $x = 0.105$. The first is impossible ($0.40 - 0.67 < 0$: you cannot consume more $\mathrm{H_2}$ than exists). So $x = 0.105\ \text{M}$:

$$
[\mathrm{H_2}] = 0.295\ \text{M},\qquad
[\mathrm{I_2}] = 0.095\ \text{M},\qquad
[\mathrm{HI}] = 1.01\ \text{M}
$$

**Sanity check.** $Q = \dfrac{(1.01)^2}{(0.295)(0.095)} = \dfrac{1.02}{0.0280} \approx 36$. The solution reproduces the constant, and every concentration is positive. Both checks pass.

## Free lessons for symmetric examples

Many exam problems are set up so the algebra collapses:

- **Ratios of squares.** When both products form in equal amounts — as in $\mathrm{2HI \rightleftharpoons H_2 + I_2}$ starting from pure $\mathrm{HI}$ — the expression becomes $x^2$ over $(C-2x)^2$, and a square root replaces the quadratic.
- Keep the physical constraints in sight at the end regardless: all concentrations positive, Change row never larger than the Initial row.

<learning-block type="mistake" title="ICE-table slips">

- **Writing the Change row with wrong signs.** Product terms gain when the forward reaction runs and lose when the reverse runs; sign every row before solving.
- **Keeping an impossible root.** Always test both quadratic roots against the Initial row; the larger root is usually fictitious.
- **Forgetting the volume.** Moles divided by moles give nonsense in $K_c$; convert to molarity first.
- **Reading $Q < K$ as "the reaction stops".** $Q < K$ means the forward rate is *currently the larger one*; the change continues until they equalise.

</learning-block>

## Try it yourself

**1.** At a temperature where $K_c = \dfrac{1}{36}$ for $\mathrm{2HI \rightleftharpoons H_2 + I_2}$, a flask initially holds $1.0\ \text{M}$ of pure $\mathrm{HI}$. Find the equilibrium composition.

<details><summary>Show the reasoning</summary>

Let the concentration of each of $\mathrm{H_2}$ and $\mathrm{I_2}$ formed be $x$; then $\mathrm{HI}$ falls by $2x$.

$$
\frac{x^2}{(1.0-2x)^2} = \frac{1}{36}
\quad\Rightarrow\quad
\frac{x}{1.0-2x} = \frac{1}{6}
$$

(take the positive root). Then $6x = 1.0 - 2x$, so $x = 0.125\ \text{M}$:

$$
[\mathrm{H_2}] = [\mathrm{I_2}] = 0.125\ \text{M},\qquad [\mathrm{HI}] = 0.75\ \text{M}
$$

Check: $\dfrac{(0.125)^2}{(0.75)^2} = \dfrac{1}{36}\,\checkmark$, and both concentrations are positive.
</details>

**2.** A mixture has $[\mathrm{NO_2}] = 0.10\ \text{M}$ and $[\mathrm{N_2O_4}] = 0.20\ \text{M}$ at a temperature where $K_c = 0.040$ for $\mathrm{N_2O_4(g) \rightleftharpoons 2NO_2(g)}$. Which way is the mixture drifting?

<details><summary>Show the reasoning</summary>

$$
Q = \frac{[\mathrm{NO_2}]^2}{[\mathrm{N_2O_4}]} = \frac{(0.10)^2}{0.20} = 0.050
$$

$Q = 0.050 > K_c = 0.040$: too much $\mathrm{NO_2}$, so the **reverse** reaction runs and some $\mathrm{NO_2}$ dimerises back into $\mathrm{N_2O_4}$.
</details>

**3.** An equilibrium mixture of $\mathrm{N_2O_4}$ and $\mathrm{NO_2}$ in a syringe is diluted suddenly by pulling the plunger out at constant temperature. In which direction does the equilibrium shift?

<details><summary>Show the reasoning</summary>

Doubling the volume halves every concentration. In $Q = \dfrac{[\mathrm{NO_2}]^2}{[\mathrm{N_2O_4}]}$, the numerator falls by a factor of $4$ and the denominator by $2$, so $Q$ drops to $Q/2 < K_c$. The forward reaction therefore runs: some $\mathrm{N_2O_4}$ dissociates and the number of molecules (and moles of gas) increases. Dilution always pushes a gas equilibrium toward the side with the larger mole count — the same logic becomes Le Chatelier's pressure rule in the next module.
</details>

## Remember

- $Q$ is the running mass-action ratio; $K$ is its equilibrium value.
- $Q < K$: forward; $Q = K$: no net change; $Q > K$: reverse.
- ICE tables convert "which way?" into "how much?" — let stoichiometry write the Change row.
- Reject roots that imply negative concentrations.
- Dilution (or gas expansion) shifts equilibria toward the side with more gaseous moles.

Direction puzzles build the intuition, but every one of them obeys a single deeper rule — Le Chatelier's principle, next.
