## The cell potential is not a fixed number

A standard cell potential $E^\circ_\text{cell}$ applies only when all solutes are at $1\ \text{M}$, all gases at $1\ \text{bar}$ and the temperature is 298 K. Change the concentrations and the driving force changes. The **Nernst equation** quantifies this, and it is the tool that connects cell emf to reaction quotient, equilibrium constant and Gibbs energy.

## 1. Deriving the Nernst equation

For a reaction, $\Delta G=\Delta G^\circ+RT\ln Q$. Since $\Delta G=-nFE$ and $\Delta G^\circ=-nFE^\circ$,

$$
-nFE=-nFE^\circ+RT\ln Q.
$$

Dividing by $-nF$:

$$
E=E^\circ-\frac{RT}{nF}\ln Q.
$$

Here $Q$ is the reaction quotient written with activities (approximated by molarities for solutes and partial pressures in bar for gases), and $R=8.314\ \text{J mol}^{-1}\text{K}^{-1}$.

## 2. The convenient form at 298 K

At $T=298\ \text{K}$, $\frac{RT}{F}\ln 10 \approx 0.059\ \text{V}$, so

$$
E=E^\circ-\frac{0.059}{n}\log_{10} Q.
$$

Use this form for numerical work at room temperature; return to the full form if the temperature differs. The logarithm is base 10, and $Q$ must be dimensionless (concentrations divided by their standard values).

## 3. Worked example: Daniel cell at non-standard concentrations

For $\mathrm{Zn(s)+Cu^{2+}(aq)\rightarrow Zn^{2+}(aq)+Cu(s)}$, $E^\circ=1.10\ \text{V}$, $n=2$.

Take $[\mathrm{Zn^{2+}}]=0.010\ \text{M}$ and $[\mathrm{Cu^{2+}}]=0.10\ \text{M}$ (solids omitted from $Q$):

$$
Q=\frac{[\mathrm{Zn^{2+}}]}{[\mathrm{Cu^{2+}}]}=\frac{0.010}{0.10}=0.10.
$$

$$
E=1.10-\frac{0.059}{2}\log_{10}(0.10)
=1.10-0.0295(-1)=1.1295\ \text{V}\approx 1.13\ \text{V}.
$$

Because the product ion is relatively dilute, the forward reaction is slightly more favourable than under standard conditions. If instead $[\mathrm{Zn^{2+}}]=1.0\ \text{M}$ and $[\mathrm{Cu^{2+}}]=0.010\ \text{M}$, then $Q=100$ and $E=1.10-0.0295\log_{10}100=1.10-0.059=1.041\ \text{V}$.

## 4. Equilibrium constant from $E^\circ$

At equilibrium the net reaction stops, so $E=0$ and $Q=K$. Substituting into the Nernst equation:

$$
0=E^\circ-\frac{RT}{nF}\ln K
\quad\Rightarrow\quad
E^\circ=\frac{RT}{nF}\ln K
\quad\Rightarrow\quad
\log_{10}K=\frac{nE^\circ}{0.059}\quad (298\ \text{K}).
$$

For the Daniel cell, $\log_{10}K=2(1.10)/0.059=37.3$, so $K\approx2\times10^{37}$. A large $K$ matches the large positive $E^\circ$.

## 5. Concentration cells

If both electrodes are the same metal but the ion concentrations differ, $E^\circ_\text{cell}=0$ and the entire emf comes from the concentration difference:

$$
E=-\frac{0.059}{n}\log_{10}Q.
$$

A common case is the **hydrogen electrode** used to measure pH. For $\mathrm{2H^+(aq)+2e^-\rightleftharpoons H_2(g)}$ with $P_{\mathrm{H_2}}=1\ \text{bar}$,

$$
E=0.00-\frac{0.059}{2}\log_{10}\frac{1}{[\mathrm{H^+}]^2}
=-0.059\,\text{pH}.
$$

At 298 K and pH 7, $E=-0.413\ \text{V}$. This is the principle behind a pH meter: measure the electrode potential and convert.

## 6. Electrical work and Gibbs energy

The maximum non-expansion work a cell can deliver is $- \Delta G = nFE$. Thus

$$
\Delta G=-nFE \quad\text{and}\quad \Delta G^\circ=-nFE^\circ.
$$

As the cell discharges, $Q$ grows, $E$ falls, and the available work falls with it; when $E=0$ the cell is “flat”.

## 7. Method for Nernst problems

1. Write the balanced cell reaction and identify $n$.
2. Write $Q$, omitting pure solids and liquids; use molarities and partial pressures.
3. Use $E=E^\circ-(0.059/n)\log_{10}Q$ at 298 K (or the full form otherwise).
4. For $K$, set $E=0$ and solve.
5. Check that a dilution of product (or concentration of reactant) raises $E$, as Le Chatelier predicts.

<learning-block type="mistake" title="Nernst sign errors">
The most common error is using $E=E^\circ+(0.059/n)\log Q$, which reverses the dependence on concentration. A second is forgetting that $Q$ uses product over reactant, so for the Daniel cell $Q=[\mathrm{Zn^{2+}}]/[\mathrm{Cu^{2+}}]$, not the reciprocal. A third is mixing natural and base-10 logarithms with the 0.059 constant. If a dilute product gives a lower emf than standard, the sign is wrong.
</learning-block>

## Try it yourself

**A.** A Daniel cell has $[\mathrm{Zn^{2+}}]=0.0010\ \text{M}$ and $[\mathrm{Cu^{2+}}]=1.0\ \text{M}$. Find its emf at 298 K.

<details><summary>Show the reasoning</summary>

$Q=0.0010/1.0=10^{-3}$. $E=1.10-(0.059/2)\log(10^{-3})=1.10+0.0885=1.1885\ \text{V}\approx1.19\ \text{V}$.

</details>

**B.** Find $E^\circ$ for a cell for which $\log_{10}K=12.0$ with $n=2$.

<details><summary>Show the reasoning</summary>

$E^\circ=(0.059/n)\log_{10}K=0.059/2\times12.0=0.354\ \text{V}$.

</details>

**C.** What is the potential of a hydrogen electrode at pH 4.00 and 1 bar $H_2$?

<details><summary>Show the reasoning</summary>

$E=-0.059\times4.00=-0.236\ \text{V}$.

</details>

## Check your understanding

Explain why a galvanic cell “goes flat” even though the reactants are not completely used up.

<details><summary>Reveal</summary>

As the reaction proceeds, products accumulate and reactants deplete, so $Q$ increases and $E$ decreases via the Nernst equation. The cell can do work only while $E>0$. It reaches equilibrium ($E=0$, $Q=K$) with finite amounts of reactants still present; $K$ is huge but not infinite, and the remaining driving force is zero.

</details>

## Take away

- The Nernst equation, $E=E^\circ-(RT/nF)\ln Q$, gives the emf at any composition.
- At 298 K use $E=E^\circ-(0.059/n)\log_{10}Q$.
- Setting $E=0$ gives $E^\circ=(0.059/n)\log_{10}K$.
- Concentration cells and pH electrodes are direct applications.
- $\Delta G=-nFE$ ties the measured voltage to available work.
- The next module turns to how well electrolyte solutions themselves conduct.