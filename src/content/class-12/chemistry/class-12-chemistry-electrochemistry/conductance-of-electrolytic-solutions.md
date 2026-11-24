## How well does a solution carry current?

Pure water is a very poor conductor. Dissolve an electrolyte and ions become the charge carriers. The **conductance** of the solution measures how easily current flows; related quantities — conductivity, molar conductivity and ionic conductivities — let us compare substances, find concentrations and even measure the strength of weak acids.

## 1. Conductance, resistance and the cell constant

For a solution between two electrodes, Ohm’s law gives $R=V/I$, and conductance $G=1/R$ (siemens, S). Conductance depends on the geometry: wider electrodes and shorter separation give larger $G$. The intrinsic property is **conductivity** $\kappa$:

$$
\kappa = G\frac{l}{A}= \frac{1}{R}\frac{l}{A},
$$

where $l$ is the distance between electrodes and $A$ their area. The ratio $l/A$ is the **cell constant** (units cm$^{-1}$ or m$^{-1}$). It is determined once by measuring $R$ for a solution of known $\kappa$ (usually KCl).

## 2. Molar conductivity

Conductivity rises with concentration, so it is not a fair comparison. **Molar conductivity** $\Lambda_m$ is the conductivity per unit molar concentration:

$$
\Lambda_m=\frac{\kappa}{c},
$$

with care over units. In the common electrochemical convention (c in mol L$^{-1}$, $\kappa$ in S cm$^{-1}$),

$$
\Lambda_m=\frac{1000\,\kappa}{c}\quad(\text{S cm}^2\text{ mol}^{-1}).
$$

In SI ($c$ in mol m$^{-3}$, $\kappa$ in S m$^{-1}$), $\Lambda_m=\kappa/c$ in S m$^2$ mol$^{-1}$.

## 3. Variation with concentration

- **Strong electrolytes** (KCl, NaCl, HCl) are fully dissociated; $\Lambda_m$ increases slowly on dilution because ion–ion interactions weaken (Kohlrausch: $\Lambda_m=\Lambda^\circ_m-A\sqrt{c}$).
- **Weak electrolytes** (CH$_3$COOH, NH$_4$OH) are only partly dissociated; on dilution the degree of dissociation rises sharply, so $\Lambda_m$ increases steeply.

Thus a plot of $\Lambda_m$ versus $\sqrt{c}$ is nearly linear for a strong electrolyte but curved and rising for a weak one.

## 4. Kohlrausch’s law of independent migration

At infinite dilution, ions migrate independently, so the limiting molar conductivity is the sum of the limiting ionic conductivities:

$$
\Lambda^\circ_m=\lambda^\circ_+ + \lambda^\circ_-.
$$

Selected values at 298 K (S cm$^2$ mol$^{-1}$):

| Ion | $\lambda^\circ$ | Ion | $\lambda^\circ$ |
| --- | --- | --- | --- |
| $\mathrm{H^+}$ | 349.8 | $\mathrm{OH^-}$ | 198.0 |
| $\mathrm{K^+}$ | 73.5 | $\mathrm{Cl^-}$ | 76.3 |
| $\mathrm{Na^+}$ | 50.1 | $\mathrm{CH_3COO^-}$ | 40.9 |

Hence $\Lambda^\circ(\mathrm{KCl})=73.5+76.3=149.8$ and $\Lambda^\circ(\mathrm{CH_3COOH})=349.8+40.9=390.7\ \text{S cm}^2\text{ mol}^{-1}$.

This law lets us find $\Lambda^\circ$ for a weak electrolyte from strong-electrolyte data, e.g. $\Lambda^\circ(\mathrm{CH_3COOH})=\Lambda^\circ(\mathrm{HCl})+\Lambda^\circ(\mathrm{NaAc})-\Lambda^\circ(\mathrm{NaCl})$.

## 5. Degree of dissociation and the acid dissociation constant

For a weak electrolyte, if $\Lambda_m$ is measured at concentration $c$,

$$
\alpha=\frac{\Lambda_m}{\Lambda^\circ_m}.
$$

Then, from Ostwald’s dilution law for a binary weak electrolyte $\mathrm{AB\rightleftharpoons A^+ + B^-}$,

$$
K_a=\frac{c\,\alpha^2}{1-\alpha}.
$$

This is a classic experimental route to $K_a$ without pH measurement.

## 6. Worked examples

**Example 1 — cell constant and conductivity.** A cell with electrodes $1.0\ \text{cm}$ apart and area $1.0\ \text{cm}^2$ has cell constant $l/A=1.0\ \text{cm}^{-1}$. The resistance of $0.10\ \text{M}$ KCl in it is $77.6\ \Omega$. Then $G=1/77.6=0.0129\ \text{S}$ and $\kappa=G\times(l/A)=0.0129\ \text{S cm}^{-1}$, close to the tabulated $0.01288\ \text{S cm}^{-1}$. The molar conductivity is $\Lambda_m=1000\kappa/c=1000(0.0129)/0.10=129\ \text{S cm}^2\text{ mol}^{-1}$.

**Example 2 — degree of dissociation of acetic acid.** At $0.10\ \text{M}$, measured $\Lambda_m=5.2\ \text{S cm}^2\text{ mol}^{-1}$. With $\Lambda^\circ=390.7$,

$$
\alpha=\frac{5.2}{390.7}=0.0133.
$$

$$
K_a=\frac{0.10\times(0.0133)^2}{1-0.0133}
=\frac{0.10\times1.77\times10^{-4}}{0.9867}
\approx1.8\times10^{-5},
$$

the accepted value for acetic acid.

**Example 3 — ionic conductivity.** The limiting molar conductivity of HCl is $349.8+76.3=426.1\ \text{S cm}^2\text{ mol}^{-1}$. At infinite dilution, H$^+$ contributes $349.8/426.1=82\%$ of the conductivity — explaining why acids are such good conductors.

## 7. Method for conductance problems

1. Identify the given quantity (R, $\kappa$, $\Lambda_m$, c) and the target.
2. Use $\kappa = (1/R)(l/A)$ and $\Lambda_m=1000\kappa/c$ (or SI equivalents).
3. For weak electrolytes, compute $\alpha=\Lambda_m/\Lambda^\circ_m$, then $K_a=c\alpha^2/(1-\alpha)$.
4. Use Kohlrausch’s law to obtain a missing $\Lambda^\circ$.
5. Check units at every step; the factor 1000 is the usual trap.

<learning-block type="mistake" title="Conductivity versus molar conductivity">
Conductivity $\kappa$ increases with concentration (more ions), while molar conductivity $\Lambda_m$ usually decreases with concentration (strong electrolytes) or rises (weak). Confusing the two leads to backwards predictions: for a strong electrolyte, diluting lowers $\kappa$ but raises $\Lambda_m$. Also, never plug molarity in mol L$^{-1}$ into $\Lambda_m=\kappa/c$ without the factor 1000 when $\kappa$ is in S cm$^{-1}$.
</learning-block>

## Try it yourself

**A.** A cell has cell constant $0.50\ \text{cm}^{-1}$ and resistance $200\ \Omega$ for $0.050\ \text{M}$ KCl. Find $\kappa$ and $\Lambda_m$.

<details><summary>Show the reasoning</summary>

$\kappa=(1/200)\times0.50=0.0025\ \text{S cm}^{-1}$. $\Lambda_m=1000\times0.0025/0.050=50\ \text{S cm}^2\text{ mol}^{-1}$.

</details>

**B.** The molar conductivity of a $0.020\ \text{M}$ weak acid is $24.0\ \text{S cm}^2\text{ mol}^{-1}$ and its $\Lambda^\circ$ is $390.7$. Find $K_a$.

<details><summary>Show the reasoning</summary>

$\alpha=24.0/390.7=0.0614$. $K_a=0.020\times(0.0614)^2/(1-0.0614)=0.020\times0.00377/0.9387=8.0\times10^{-5}$.

</details>

**C.** Why is the limiting molar conductivity of HCl greater than that of NaCl even though both are 1:1 electrolytes?

<details><summary>Show the reasoning</summary>

$\lambda^\circ(\mathrm{H^+})=349.8$ is much larger than $\lambda^\circ(\mathrm{Na^+})=50.1$, because the proton migrates by the Grotthuss (proton-hopping) mechanism rather than physical diffusion. The anion is the same, so HCl’s $\Lambda^\circ$ is larger.

</details>

## Check your understanding

Explain why diluting a weak acid increases its degree of dissociation yet decreases its conductivity.

<details><summary>Reveal</summary>

Dilution shifts the dissociation equilibrium toward more ions (Ostwald/Le Chatelier), so $\alpha$ rises. But conductivity $\kappa$ depends on the number of ions per unit volume; dilution lowers that number faster than $\alpha$ rises, so $\kappa$ falls. Molar conductivity $\Lambda_m=\kappa/c$ still rises because $\kappa$ falls more slowly than $c$.

</details>

## Take away

- Conductivity $\kappa$ is intrinsic; molar conductivity $\Lambda_m=\kappa/c$ normalises by concentration.
- Strong electrolytes: $\Lambda_m$ varies linearly with $\sqrt{c}$; weak electrolytes: $\Lambda_m$ rises sharply on dilution.
- Kohlrausch: $\Lambda^\circ_m=\lambda^\circ_++\lambda^\circ_-$, enabling $\Lambda^\circ$ for weak electrolytes.
- $\alpha=\Lambda_m/\Lambda^\circ_m$ and $K_a=c\alpha^2/(1-\alpha)$.
- Watch the factor 1000 and units throughout.
- The next module uses current quantitatively to deposit or liberate substances.