## From speed to concentration versus time

A rate law tells you the slope at a single moment. To know the concentration after an hour, or the time needed to reach a target conversion, you integrate the rate law. The result is an **integrated rate equation**, and its form identifies the reaction order.

## 1. Zero order

If $\text{rate}=k$ (independent of concentration), then $-d[A]/dt=k$, so

$$
[A]_t = [A]_0 - kt
$$

A plot of $[A]$ versus $t$ is a straight line of slope $-k$. The half-life is

$$
t_{1/2} = \frac{[A]_0}{2k}
$$

which grows with initial concentration. Zero-order kinetics appear when a catalyst surface is saturated or when light intensity is the limiting factor.

## 2. First order

If $\text{rate}=k[A]$, then $-d[A]/[A]=k\,dt$. Integrating from $0$ to $t$:

$$
\ln[A]_t = \ln[A]_0 - kt
\qquad\text{or}\qquad
\ln\frac{[A]_0}{[A]_t}=kt
$$

A plot of $\ln[A]$ versus $t$ is linear with slope $-k$. The half-life is

$$
t_{1/2} = \frac{\ln 2}{k} = \frac{0.693}{k}
$$

and is **independent of** $[A]_0$: after every half-life the amount halves, no matter how much you started with. Radioactive decay and many unimolecular decompositions follow this law.

**Worked example 1.** For a first-order decomposition, $k=3.38\times10^{-5}\ \text{s}^{-1}$ and $[A]_0=0.050\ \text{M}$. After $1000\ \text{s}$,

$$
\ln[A]_t = \ln(0.050) - (3.38\times10^{-5})(1000)
= -2.996 - 0.0338 = -3.030
$$

so $[A]_t=e^{-3.030}=0.0483\ \text{M}$. The half-life is $0.693/(3.38\times10^{-5})=2.05\times10^4\ \text{s}\approx 5.7\ \text{h}$.

## 3. Second order

If $\text{rate}=k[A]^2$, then $-d[A]/[A]^2=k\,dt$, giving

$$
\frac{1}{[A]_t} = \frac{1}{[A]_0} + kt
$$

A plot of $1/[A]$ versus $t$ is linear with slope $+k$. The half-life is

$$
t_{1/2} = \frac{1}{k[A]_0}
$$

so it **depends on** initial concentration: the more you start with, the shorter the first half-life. For a reaction $\mathrm{A + B \rightarrow products}$ with $[A]_0=[B]_0$, the same equation holds with $[A]$ replaced by the common concentration.

**Worked example 2.** For $\mathrm{2NO_2 \rightarrow 2NO + O_2}$, $k=0.54\ \text{L mol}^{-1}\text{s}^{-1}$ and $[A]_0=0.020\ \text{M}$. The time for $[A]$ to fall to $0.010\ \text{M}$ is

$$
t = \frac{1/0.010 - 1/0.020}{0.54}
= \frac{100-50}{0.54}
\approx 93\ \text{s}.
$$

## 4. Pseudo-first-order conditions

When one reactant $B$ is present in large excess, its concentration barely changes, so $[B]\approx[B]_0$ and the rate law $\text{rate}=k[A][B]$ becomes $\text{rate}=k'[A]$ with $k'=k[B]_0$. The reaction then follows first-order kinetics in $[A]$, and a plot of $\ln[A]$ versus $t$ gives $k'$. This trick is used to measure second-order rate constants for reactions such as ester hydrolysis, where water is in huge excess.

## 5. Choosing the order from data

| Linear plot | Implied order | Half-life behaviour |
| --- | --- | --- |
| $[A]$ vs $t$ | 0 | proportional to $[A]_0$ |
| $\ln[A]$ vs $t$ | 1 | independent of $[A]_0$ |
| $1/[A]$ vs $t$ | 2 | inversely proportional to $[A]_0$ |

If none of the three plots is linear, the reaction is not a simple integer order, or the mechanism changes over the course of the reaction.

<learning-block type="mistake" title="Half-life formulas are order-specific">
Using $t_{1/2}=0.693/k$ for a second-order reaction is a classic error. For second order the half-life is $1/(k[A]_0)$ and shortens as the initial concentration rises. Always identify the order first, then pick the half-life formula.
</learning-block>

## Try it yourself

1. A first-order reaction has $k=0.0462\ \text{min}^{-1}$. What fraction remains after $30\ \text{min}$?
2. A second-order reaction with $k=0.10\ \text{L mol}^{-1}\text{s}^{-1}$ starts at $0.50\ \text{M}$. Find the concentration after $20\ \text{s}$.
3. For a zero-order reaction, $[A]_0=0.20\ \text{M}$ and $k=0.0050\ \text{M s}^{-1}$. Find $[A]$ after $20\ \text{s}$ and the half-life.

<details><summary>Show the reasoning</summary>

1. $\ln([A]_0/[A])=0.0462\times30=1.386$, so $[A]/[A]_0=e^{-1.386}=0.250$; 25% remains.
2. $1/[A]=1/0.50+0.10\times20=2+2=4$, so $[A]=0.25\ \text{M}$.
3. $[A]=0.20-0.0050\times20=0.10\ \text{M}$; $t_{1/2}=0.20/(2\times0.0050)=20\ \text{s}$.

</details>

## Remember

- Integration turns a rate law into $[A]$ as a function of time.
- Zero, first and second order give linear plots of $[A]$, $\ln[A]$ and $1/[A]$ respectively.
- First-order half-life is constant; second-order half-life shrinks with higher $[A]_0$.
- Pseudo-first-order conditions let you measure a second-order constant with first-order tools.
- The linear-plot test is the standard way to decide an order from data.

The next module, **Half-life and the Arrhenius equation**, connects half-life to temperature and derives the temperature dependence of $k$.