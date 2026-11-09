## A single number for the whole mixture

In the last module, two different starting mixtures (one of $\mathrm{H_2}$ and $\mathrm{I_2}$, one of pure $\mathrm{HI}$) settled into the *same* composition. That is the signature of equilibrium: the final composition is fixed by the temperature, not by where you started. The **law of mass action** turns that observation into one usable number.

## The law of mass action

Guldberg and Waage argued from collision rates. At constant temperature, the rate of a reaction is proportional to the product of the reacting concentrations, each raised to the power of its stoichiometric coefficient. For the general reaction

$$
\mathrm{A + B \rightleftharpoons C + D}
$$

the forward and reverse rates are

$$
\text{rate}_f = k_f\,[\mathrm{A}][\mathrm{B}]
\qquad
\text{rate}_r = k_r\,[\mathrm{C}][\mathrm{D}]
$$

At equilibrium the rates are equal, so

$$
k_f[\mathrm{A}][\mathrm{B}] = k_r[\mathrm{C}][\mathrm{D}]
\quad\Rightarrow\quad
\frac{[\mathrm{C}][\mathrm{D}]}{[\mathrm{A}][\mathrm{B}]} = \frac{k_f}{k_r} = K_c
$$

The ratio $K_c$ depends **only on temperature**. For coefficients other than one, each concentration is raised to its coefficient. Two consequences worth memorising early:

- **Reverse reaction:** $K_{\text{reverse}} = 1/K_{\text{forward}}$.
- **Scaling the equation by $n$:** the new constant is $K^n$. Doubling an equation squares its $K$.

## Writing and using $K_c$: a worked example

**Example.** In a $10.0\ \text{L}$ vessel at a fixed temperature, $2.0\ \text{mol}$ each of hydrogen and iodine are sealed. At equilibrium, $3.0\ \text{mol}$ of $\mathrm{HI}$ are found. Evaluate $K_c$.

Reaction: $\mathrm{H_2(g) + I_2(g) \rightleftharpoons 2HI(g)}$.

Moles of $\mathrm{HI}$ formed $= 3.0$, so reacting moles $= 1.5$ of each reactant (the equation consumes them $1:1:2$). Remaining: $\mathrm{H_2} = 0.5\ \text{mol}$, $\mathrm{I_2} = 0.5\ \text{mol}$.

Concentrations (dividing by $10.0\ \text{L}$):

$$
[\mathrm{H_2}] = 0.050\ \text{M},\quad
[\mathrm{I_2}] = 0.050\ \text{M},\quad
[\mathrm{HI}] = 0.30\ \text{M}
$$

$$
K_c = \frac{[\mathrm{HI}]^2}{[\mathrm{H_2}][\mathrm{I_2}]}
= \frac{(0.30)^2}{(0.050)(0.050)} = \frac{0.090}{2.5\times10^{-3}} = 36
$$

**Sanity checks.** The constant is dimensionless in the modern (activity-based) convention, because the units of numerator and denominator cancel here — count the exponents: $2$ versus $1+1$. And it is large but not huge, as fits a reaction with a favourable but reversible balance. The same constant describes the flask that started from pure $\mathrm{HI}$: if $x\ \text{mol}$ of $\mathrm{HI}$ had decomposed, you would solve $\frac{(x/2)^2}{(4.0-x)^2} = \frac{1}{36}$, which gives $x = 1.0\ \text{mol}$ — exactly the composition tabulated in module 1.

## From concentrations to pressures: $K_p$

For gas equilibria it is often convenient to work in partial pressures:

$$
K_p = \frac{(p_\mathrm{C})^c (p_\mathrm{D})^d}{(p_\mathrm{A})^a (p_\mathrm{B})^b}
$$

with each $p$ the partial pressure of that gas. Since an ideal gas obeys $pV = nRT$, we have $p = \dfrac{n}{V}RT = c\,RT$, so each partial pressure is just a concentration multiplied by the same factor $RT$. Doing this substitution term by term:

$$
\boxed{K_p = K_c (RT)^{\Delta n}}
$$

where $\Delta n = \text{(moles of gaseous products)} - \text{(moles of gaseous reactants)}$, read off the balanced equation.

| $\Delta n$ | Relation | Example |
| --- | --- | --- |
| $0$ | $K_p = K_c$ | $\mathrm{H_2 + I_2 \rightleftharpoons 2HI}$ |
| positive | $K_p > K_c$ | $\mathrm{PCl_5 \rightleftharpoons PCl_3 + Cl_2}$ ($\Delta n = +1$) |
| negative | $K_p < K_c$ | $\mathrm{N_2 + 3H_2 \rightleftharpoons 2NH_3}$ ($\Delta n = -2$) |

## Heterogeneous equilibria

When several phases meet, the constant is written with **pure solids and pure liquids left out**. Their concentrations are fixed by their density and do not change as the reaction proceeds, so any value you assign them merely folds into $K$.

$$
\mathrm{CaCO_3(s) \rightleftharpoons CaO(s) + CO_2(g)}
\qquad\Rightarrow\qquad
K_p = p_{\mathrm{CO_2}}, \quad K_c = [\mathrm{CO_2}]
$$

The decomposition pressure of calcium carbonate is therefore a single number at each temperature, independent of how much limestone is present. The same logic runs the vapour-pressure table from module 1: for $\mathrm{H_2O(l) \rightleftharpoons H_2O(g)}$, $K_p = p_{\mathrm{H_2O}}$, the vapour pressure. Gases and dissolved species **are** included; only pure condensed phases that stay as phases drop out.

<learning-block type="mistake" title="Constant-collecting errors">

- **Dropping a heterogeneous solid into $K$ anyway.** Writing $K_p = p_{\mathrm{CaO}}\,p_{\mathrm{CO_2}}/p_{\mathrm{CaCO_3}}$ (with fictitious "pressure of a solid") is wrong; only $p_{\mathrm{CO_2}}$ enters.
- **Forgetting the exponent on $RT$ is signed.** For $\Delta n = -2$, $K_p = K_c(RT)^{-2}$, so $K_p$ is *smaller* than $K_c$.
- **Scaling the equation and not the constant.** $\mathrm{2HI \rightleftharpoons H_2 + I_2}$ has $K = 1/36$, not $36$, if the forward reaction above had $K_c = 36$.
- **Treating $K$ as temperature-independent in a formula.** $K$ changes with temperature; every $K$ quoted is "at this temperature".

</learning-block>

## Try it yourself

**1.** $0.50\ \text{mol}$ of $\mathrm{PCl_5}$ is heated in a closed $5.0\ \text{L}$ flask. At equilibrium, half of it has dissociated. Evaluate $K_c$.

<details><summary>Show the reasoning</summary>

$\mathrm{PCl_5 \rightleftharpoons PCl_3 + Cl_2}$. Dissociated $= 0.25\ \text{mol}$, so $\mathrm{PCl_5}$ left $= 0.25\ \text{mol}$ and $0.25\ \text{mol}$ each of $\mathrm{PCl_3}$ and $\mathrm{Cl_2}$ form.

$$
[\mathrm{PCl_5}] = [\mathrm{PCl_3}] = [\mathrm{Cl_2}] = \frac{0.25}{5.0} = 0.050\ \text{M}
$$

$$
K_c = \frac{[\mathrm{PCl_3}][\mathrm{Cl_2}]}{[\mathrm{PCl_5}]} = \frac{(0.050)(0.050)}{0.050} = 0.050
$$

The sanity check: $K_c < 1$ fits a decomposition in which half the starting material survives — the balance clearly favours the left, even with $\Delta n > 0$.
</details>

**2.** At $500\ \text{K}$, $K_c$ for $\mathrm{N_2 + 3H_2 \rightleftharpoons 2NH_3}$ is quoted as $0.50$. What is $K_p$ there? ($R = 0.0831\ \text{L·bar·mol}^{-1}\text{·K}^{-1}$)

<details><summary>Show the reasoning</summary>

Here $\Delta n = 2 - (1+3) = -2$.

$$
K_p = K_c(RT)^{\Delta n} = 0.50 \times (0.0831 \times 500)^{-2}
$$

$RT = 41.55$, so $(RT)^2 \approx 1.73\times10^{3}$, and

$$
K_p = \frac{0.50}{1.73\times10^{3}} \approx 2.9\times10^{-4}
$$

Because $\Delta n$ is negative, $K_p$ is far smaller than $K_c$, as the table above predicts.
</details>

**3.** Why does the value of the equilibrium constant for $\mathrm{CaCO_3(s) \rightleftharpoons CaO(s) + CO_2(g)}$ not depend on the amount of limestone in the vessel?

<details><summary>Show the reasoning</summary>

$K_p = p_{\mathrm{CO_2}}$ alone. The solids enter neither numerator nor denominator. Adding more limestone (or more quicklime) changes the *amounts* of the phases but not the concentration of anything, so the equilibrium partial pressure of carbon dioxide at that temperature is untouched. More limestone just means the same decomposition pressure is maintained for longer.
</details>

## Remember

- The law of mass action gives one temperature-dependent number: $K$, the ratio of product terms to reactant terms, each raised to its coefficient.
- Reversing or rescaling an equation rescales $K$ reciprocally or by a power.
- Convert between $K_p$ and $K_c$ with $K_p = K_c(RT)^{\Delta n}$, where $\Delta n$ is the change in moles of **gas**.
- Pure solids and liquids never appear in $K$; gases and solutes always do.
- Careful bookkeeping of concentrations from moles and volume is half of every equilibrium problem.

A constant is most useful when you can test it against *any* mixture — not just the equilibrium one. The reaction quotient $Q$ does exactly that, and it is the tool that predicts which way a shaken-up mixture will swing.
