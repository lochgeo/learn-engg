## Why some reactions are fast and some are slow

Chemical kinetics is the study of how quickly reactants become products and which variables control that speed. A reaction can be thermodynamically favourable yet practically useless if it is too slow; conversely, a fast reaction can be dangerous. Kinetics gives the rate law, a mathematical description that lets you predict the concentration at any future time.

## 1. Defining the rate of reaction

For a general reaction

$$
aA + bB \rightarrow cC + dD
$$

the rate is defined so that it is the same no matter which species you track:

$$
\text{rate} = -\frac{1}{a}\frac{d[A]}{dt}
            = -\frac{1}{b}\frac{d[B]}{dt}
            = +\frac{1}{c}\frac{d[C]}{dt}
            = +\frac{1}{d}\frac{d[D]}{dt}
$$

Reactant concentrations decrease, so their derivatives carry a minus sign; products increase. The factor $1/\text{stoichiometric coefficient}$ ensures one single rate for the reaction. The instantaneous rate is the derivative at a moment; the average rate is $\Delta[\text{species}]/\Delta t$ over an interval.

**Worked example 1.** In $\mathrm{N_2 + 3H_2 \rightarrow 2NH_3}$, ammonia appears at $0.020\ \text{mol L}^{-1}\text{s}^{-1}$. The reaction rate is $\tfrac12(0.020)=0.010\ \text{mol L}^{-1}\text{s}^{-1}$, and hydrogen disappears at $3\times0.010=0.030\ \text{mol L}^{-1}\text{s}^{-1}$. The negative sign on $d[\mathrm{H_2}]/dt$ records disappearance.

## 2. The rate law

For many reactions the instantaneous rate depends on reactant concentrations through a **rate law**

$$
\text{rate} = k[A]^m[B]^n
$$

where $k$ is the **rate constant** (temperature-dependent) and $m$, $n$ are the **orders** with respect to $A$ and $B$. The **overall order** is $m+n$. These exponents are found experimentally; they are not the stoichiometric coefficients. A reaction whose rate law is $k[A]^2[B]$ is second order in $A$, first order in $B$ and third order overall.

The units of $k$ follow from making the units of rate ($\text{mol L}^{-1}\text{s}^{-1}$) balance:

| Overall order | Units of $k$ |
| --- | --- |
| 0 | $\text{mol L}^{-1}\text{s}^{-1}$ |
| 1 | $\text{s}^{-1}$ |
| 2 | $\text{L mol}^{-1}\text{s}^{-1}$ |
| 3 | $\text{L}^2\text{mol}^{-2}\text{s}^{-1}$ |

## 3. Order versus molecularity

**Molecularity** is the number of reactant particles that collide in a single elementary step. It is always a small whole number (1, 2, rarely 3) and it belongs to a mechanism step, not to the overall reaction. **Order** is an experimental exponent for the overall rate law.

For an elementary reaction the order with respect to each reactant equals its molecularity, so the two coincide. For a multi-step mechanism the overall order need not match the overall stoichiometry at all. A reaction can even have a negative or fractional order when a product or intermediate inhibits or catalyses the step.

## 4. Determining the order: initial rates

The **method of initial rates** measures the rate at $t=0$ for several mixtures and compares how the rate changes when one concentration changes.

**Worked example 2.** For $\mathrm{A + B \rightarrow products}$:

| Experiment | $[A]_0$ (M) | $[B]_0$ (M) | initial rate (M s$^{-1}$) |
| --- | --- | --- | --- |
| 1 | 0.10 | 0.10 | $1.2\times10^{-3}$ |
| 2 | 0.20 | 0.10 | $2.4\times10^{-3}$ |
| 3 | 0.10 | 0.20 | $4.8\times10^{-3}$ |

Doubling $[A]$ doubles the rate, so the reaction is first order in $A$. Doubling $[B]$ quadruples the rate, so it is second order in $B$. Hence $\text{rate}=k[A][B]^2$, overall third order. From experiment 1: $k=1.2\times10^{-3}/(0.10\times0.10^2)=1.2\ \text{L}^2\text{mol}^{-2}\text{s}^{-1}$.

Other common routes: a **half-life** that is independent of initial concentration signals first order; linear plots of $[A]$, $\ln[A]$ or $1/[A]$ versus time signal zero, first or second order (developed in the integrated-rate-equations module).

## 5. What the rate constant really is

$k$ is not a measure of “how fast the reaction goes”; it is the proportionality constant that makes the rate law true at a given temperature. It changes with temperature, with the presence of a catalyst, and sometimes with solvent or ionic strength, but it does not change with concentration. Two reactions with the same order can be compared by their $k$ values: the larger $k$ is the faster reaction at equal concentrations.

<learning-block type="mistake" title="Stoichiometry is not order">
A common error is to read the balanced equation $\mathrm{2H_2 + O_2 \rightarrow 2H_2O}$ and write $\text{rate}=k[\mathrm{H_2}]^2[\mathrm{O_2}]$. The exponents must come from experiment. For this reaction the actual rate law is far more complicated and involves a radical chain. Always measure, never assume.
</learning-block>

## Try it yourself

1. For $\mathrm{2NO_2 \rightarrow 2NO + O_2}$, $[\mathrm{NO_2}]$ falls at $0.0050\ \text{M s}^{-1}$. Find the reaction rate and the rate of appearance of $\mathrm{O_2}$.
2. A reaction has rate law $\text{rate}=k[X][Y]^2$. If $[X]$ is tripled and $[Y]$ halved, by what factor does the rate change?
3. For $\mathrm{A \rightarrow products}$ with initial rate data showing the rate proportional to $[A]^{3/2}$, what are the units of $k$?

<details><summary>Show the reasoning</summary>

1. Rate $=-\tfrac12 d[\mathrm{NO_2}]/dt = 0.0025\ \text{M s}^{-1}$; $d[\mathrm{O_2}]/dt = 0.0025\ \text{M s}^{-1}$.
2. Factor $=3\times(1/2)^2=3/4$; the rate falls to 75%.
3. Overall order $3/2$, so units are $\text{L}^{1/2}\text{mol}^{-1/2}\text{s}^{-1}$ (equivalently $\text{M}^{-1/2}\text{s}^{-1}$).

</details>

## Remember

- The reaction rate is one number for the whole reaction; use stoichiometric factors to convert between species.
- A rate law is experimental: $\text{rate}=k[A]^m[B]^n$ with orders $m,n$ not taken from the balanced equation.
- The units of $k$ are fixed by the overall order.
- Molecularity belongs to an elementary step; order belongs to the observed rate law.
- The rate constant $k$ varies with temperature and catalysts, not with concentration.

The next module, **Factors affecting reaction rate**, connects these ideas to temperature, catalysts and surface area — the levers you actually control in a laboratory.