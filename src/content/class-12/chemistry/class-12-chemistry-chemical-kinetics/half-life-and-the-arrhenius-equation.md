## Half-life and why temperature rules the rate

Half-life is the time for a reactant concentration to fall to half its initial value. It is a convenient, measurable clock for a reaction, and its dependence on concentration reveals the order. The Arrhenius equation then explains why that clock speeds up so dramatically when the temperature rises.

## 1. Half-life by order

| Order | Half-life $t_{1/2}$ | Dependence on $[A]_0$ |
| --- | --- | --- |
| 0 | $\dfrac{[A]_0}{2k}$ | proportional |
| 1 | $\dfrac{0.693}{k}$ | none |
| 2 | $\dfrac{1}{k[A]_0}$ | inversely proportional |
| $n$ ($n\neq1$) | $\dfrac{2^{n-1}-1}{(n-1)\,k\,[A]_0^{\,n-1}}$ | inversely proportional to $[A]_0^{n-1}$ |

For a first-order process the half-life is a constant, so after $n$ half-lives the fraction remaining is $(1/2)^n$. For other orders you must recompute $t_{1/2}$ after each halving because the “half-life” changes as the concentration falls.

**Worked example 1.** A first-order reaction has $k=0.0231\ \text{min}^{-1}$. Its half-life is $0.693/0.0231=30.0\ \text{min}$. After 2 hours (four half-lives) the fraction remaining is $(1/2)^4=1/16=6.25\%$.

## 2. The Arrhenius equation

The rate constant depends on temperature according to

$$
k = A\,e^{-E_a/RT}
$$

where $A$ is the **pre-exponential factor** (frequency factor), $E_a$ is the **activation energy**, $R=8.314\ \text{J mol}^{-1}\text{K}^{-1}$ and $T$ is the absolute temperature. Taking logarithms gives the linear form used for data analysis:

$$
\ln k = \ln A - \frac{E_a}{RT}
$$

A plot of $\ln k$ versus $1/T$ is a straight line of slope $-E_a/R$ and intercept $\ln A$. This is the standard experimental route to $E_a$.

## 3. Two-point form

When you know $k$ at two temperatures, $E_a$ follows without needing $A$:

$$
\ln\frac{k_2}{k_1} = -\frac{E_a}{R}\left(\frac1{T_2}-\frac1{T_1}\right)
= \frac{E_a}{R}\left(\frac1{T_1}-\frac1{T_2}\right)
$$

**Worked example 2.** A reaction’s rate constant doubles when the temperature rises from 300 K to 310 K. Then

$$
\ln 2 = \frac{E_a}{8.314}\left(\frac1{300}-\frac1{310}\right)
$$

so $E_a = 0.693\times8.314/(1/300-1/310) \approx 5.36\times10^4\ \text{J mol}^{-1}=53.6\ \text{kJ mol}^{-1}$. A $10\ \text{K}$ rise near room temperature therefore implies an activation energy of roughly $50$–$60\ \text{kJ mol}^{-1}$.

**Worked example 3.** If $A=1.0\times10^{13}\ \text{s}^{-1}$ and $E_a=80\ \text{kJ mol}^{-1}$, then at 300 K

$$
k = 10^{13}\exp\!\left(-\frac{80000}{8.314\times300}\right)
= 10^{13}\times 1.1\times10^{-14}
\approx 0.11\ \text{s}^{-1}.
$$

The half-life of this first-order process would be $0.693/0.11\approx 6.3\ \text{s}$.

## 4. What $A$ and $E_a$ mean physically

$E_a$ is the minimum energy that colliding molecules must possess (in the correct orientation) for reaction to occur; it is the height of the energy barrier. $A$ bundles together the collision frequency and the steric requirement. A catalyst lowers $E_a$ by providing a different pathway; it does not change $A$ much and does not change $\Delta H$ or the equilibrium constant. Increasing temperature raises $k$ mainly by increasing the exponential factor, not by changing $A$.

## 5. Common pitfalls

- Always use **absolute (kelvin) temperature** in the Arrhenius equation; Celsius gives nonsense.
- $E_a$ is not the same as $\Delta H$ of reaction. For an exothermic reaction $E_a$ (forward) can be small while $\Delta H$ is large and negative.
- The Arrhenius plot uses $1/T$, not $T$. A positive slope of $\ln k$ versus $1/T$ would imply a negative $E_a$, which is unphysical for a simple reaction.
- A very large $A$ with a large $E_a$ can still give a tiny $k$ at room temperature; both factors matter.

<learning-block type="mistake" title="Celsius in the Arrhenius equation">
Writing $T=25$ instead of $T=298$ in $e^{-E_a/RT}$ is the most common numerical error in this chapter. The exponent becomes about twelve times too large, and the calculated $k$ is absurdly small. Always convert to kelvin before substituting.
</learning-block>

## Try it yourself

1. A first-order reaction has $k=4.5\times10^{-3}\ \text{s}^{-1}$ at 300 K and $k=1.5\times10^{-2}\ \text{s}^{-1}$ at 320 K. Find $E_a$.
2. Using the data above, find $A$.
3. A reaction has $E_a=50\ \text{kJ mol}^{-1}$. By what factor does $k$ increase when $T$ rises from 300 K to 310 K?

<details><summary>Show the reasoning</summary>

1. $\ln(1.5\times10^{-2}/4.5\times10^{-3})=\ln(3.33)=1.204$. $1/300-1/320=0.0002083$. $E_a=1.204\times8.314/0.0002083=4.80\times10^4\ \text{J mol}^{-1}=48.0\ \text{kJ mol}^{-1}$.
2. $\ln A = \ln k + E_a/(RT) = \ln(4.5\times10^{-3}) + 48000/(8.314\times300) = -5.404 + 19.24 = 13.84$, so $A=e^{13.84}\approx1.0\times10^6\ \text{s}^{-1}$.
3. Factor $=\exp[(50000/8.314)(1/300-1/310)]=\exp(0.649)=1.91$.

</details>

## Remember

- Half-life reveals order: constant for first order, concentration-dependent otherwise.
- Arrhenius: $k=Ae^{-E_a/RT}$; use kelvin.
- A $\ln k$ versus $1/T$ plot gives $E_a$ from its slope.
- Two-point form avoids needing $A$.
- Catalysts lower $E_a$; temperature raises the exponential factor.

The next module, **Collision theory**, supplies the physical picture behind $A$ and $E_a$: molecules must collide, with enough energy and the right orientation.