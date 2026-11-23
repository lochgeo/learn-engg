## Networks and the energy bill

A single capacitor rarely gives the value a circuit needs. Two capacitors can be wired so that they share the same voltage or the same charge, and those two choices produce very different equivalent capacitances. Once charge is stored, it also carries energy: separating charge costs work, and that work can be recovered. The same energy accounting explains a surprising result — connecting a charged capacitor to an uncharged one always loses energy, even though charge is conserved.

## 1. Capacitors in parallel

In a parallel connection, both capacitors have the same potential difference $V$, because their plates are joined by conducting wires. The total charge is the sum:

$$
Q=Q_1+Q_2=C_1V+C_2V=(C_1+C_2)V.
$$

The **equivalent capacitance** is therefore

$$
C_{\text{eq}}=C_1+C_2+\cdots.
$$

Parallel capacitors behave like one capacitor with a larger plate area: more charge is stored at the same voltage. The equivalent capacitance is always larger than any individual capacitance in the group.

## 2. Capacitors in series

In a series connection, the capacitors are joined end to end, so the same charge $Q$ is displaced through each one. The potential differences add:

$$
V=V_1+V_2=\frac{Q}{C_1}+\frac{Q}{C_2}
=Q\left(\frac{1}{C_1}+\frac{1}{C_2}\right).
$$

Thus

$$
\frac{1}{C_{\text{eq}}}
=\frac{1}{C_1}+\frac{1}{C_2}+\cdots.
$$

Series capacitors behave like one capacitor with a larger effective separation. The equivalent capacitance is always smaller than the smallest individual capacitance, and it cannot exceed the smallest one even if the others are huge.

<learning-block type="check" title="Which quantity is shared?">

In parallel, the shared quantity is **voltage**; charges add. In series, the shared quantity is **charge**; voltages add. This single sentence resolves most combination errors. It also tells you which energy formula is convenient: use $U=\frac12CV^2$ when $V$ is shared, and $U=Q^2/(2C)$ when $Q$ is shared.

</learning-block>

## 3. Energy stored in a capacitor

Charge a capacitor by transferring small amounts $dq$ from one plate to the other. When the capacitor already holds charge $q$, its potential difference is $q/C$, so the work needed for the next increment is $dW=(q/C)\,dq$. Integrating from zero to $Q$,

$$
U=\int_0^Q\frac{q}{C}\,dq=\frac{Q^2}{2C}.
$$

Using $Q=CV$, this has three equivalent forms:

$$
U=\frac{Q^2}{2C}=\frac12CV^2=\frac12QV.
$$

The energy resides in the electric field between the plates. For a parallel-plate capacitor, substitute $C=\varepsilon_0A/d$ and $V=Ed$:

$$
U=\frac12\frac{\varepsilon_0A}{d}(Ed)^2
=\frac12\varepsilon_0E^2(Ad).
$$

The volume between the plates is $Ad$, so the **energy density** is

$$
u=\frac{U}{\text{volume}}=\frac12\varepsilon_0E^2
\quad\text{(vacuum)},
\qquad
u=\frac12\varepsilon E^2
\quad\text{(dielectric)}.
$$

This is a local statement: wherever there is an electric field, there is energy stored in it.

## 4. Sharing charge between capacitors

Connect a capacitor $C_1$ carrying initial voltage $V_1$ to a capacitor $C_2$ carrying $V_2$. Charge is conserved, so the common final voltage is

$$
V=\frac{C_1V_1+C_2V_2}{C_1+C_2}.
$$

The final energy is $U_f=\frac12(C_1+C_2)V^2$, while the initial energy is $U_i=\frac12C_1V_1^2+\frac12C_2V_2^2$. The difference simplifies to

$$
\Delta U=U_f-U_i
=-\frac{C_1C_2}{2(C_1+C_2)}(V_1-V_2)^2.
$$

The right-hand side is never positive. Energy is always lost unless the initial voltages were equal. The missing energy appears as heat in the connecting wires, as a spark, and as electromagnetic radiation. Charge conservation is not violated; mechanical or field energy is converted into other forms.

For two identical capacitors, one charged to $V_0$ and the other uncharged, the common voltage is $V_0/2$ and exactly half of the initial energy is lost.

## 5. Worked example: connecting a charged capacitor to an uncharged one

A $6.0\ \mu\text{F}$ capacitor is charged to $12\ \text{V}$ and then disconnected from the battery. It is connected across an uncharged $3.0\ \mu\text{F}$ capacitor. Find the common voltage, the initial and final energies, and the energy lost.

The initial charge is

$$
Q=C_1V_1=(6.0\times10^{-6})(12)=7.2\times10^{-5}\ \text{C}.
$$

After connection this charge is shared over $C_1+C_2=9.0\ \mu\text{F}$:

$$
V=\frac{Q}{C_1+C_2}
=\frac{7.2\times10^{-5}}{9.0\times10^{-6}}
=8.0\ \text{V}.
$$

The energies are

$$
U_i=\frac12(6.0\times10^{-6})(12)^2
=4.32\times10^{-4}\ \text{J},
$$

$$
U_f=\frac12(9.0\times10^{-6})(8.0)^2
=2.88\times10^{-4}\ \text{J}.
$$

The loss is

$$
U_i-U_f=1.44\times10^{-4}\ \text{J}.
$$

**Sanity check.** The common voltage lies between the initial $12\ \text{V}$ and $0\ \text{V}$, as it must. The formula gives

$$
\frac{(6.0)(3.0)}{2(9.0)}\times10^{-6}\times(12)^2
=1.0\times10^{-6}\times144
=1.44\times10^{-4}\ \text{J},
$$

matching the direct calculation. Energy fell, and the missing amount is small enough to be carried by a brief spark and heating of the wires.

## 6. A practical method for networks

1. Mark the nodes and identify which capacitors are directly across the same pair of nodes: those are in parallel.
2. Identify capacitors that carry the same charge because they are in a single branch with no junction between them: those are in series.
3. Reduce the network step by step, redrawing after each reduction.
4. Work backwards to find the charge and voltage on each original capacitor.
5. Use $U=Q^2/(2C)$ when charge is fixed, or $U=\frac12CV^2$ when voltage is fixed.

<learning-block type="mistake" title="Combination and energy errors">

- **Swapping the rules.** Series uses reciprocals and shares charge; parallel adds capacitances and shares voltage. A quick check: series equivalent must be smaller than the smallest capacitor.
- **Assuming energy is conserved when charge is shared.** Charge is conserved, but the final energy is always less unless the initial voltages were equal. The difference is dissipated.
- **Using the wrong fixed quantity.** If a charged capacitor is disconnected, $Q$ is fixed; if it stays on a battery, $V$ is fixed. Choosing the wrong one reverses the predicted change in energy.
- **Forgetting to convert microfarads.** $1\ \mu\text{F}=10^{-6}\ \text{F}$; leaving the prefix out changes answers by a factor of a million.

</learning-block>

## Try it yourself

**A.** Find the equivalent capacitance of a $2.0\ \mu\text{F}$ and a $4.0\ \mu\text{F}$ capacitor (i) in series and (ii) in parallel.

<details><summary>Show the reasoning</summary>

Series:

$$
\frac{1}{C_{\text{eq}}}=\frac12+\frac14=\frac34
\quad\Rightarrow\quad
C_{\text{eq}}=\frac43\approx1.3\ \mu\text{F}.
$$

Parallel:

$$
C_{\text{eq}}=2.0+4.0=6.0\ \mu\text{F}.
$$

The series result is smaller than both, and the parallel result is larger than both, as required.
</details>

**B.** Find the energy stored in a $10\ \mu\text{F}$ capacitor at $100\ \text{V}$.

<details><summary>Show the reasoning</summary>

$$
U=\frac12CV^2
=\frac12(10\times10^{-6})(100)^2
=0.050\ \text{J}.
$$
</details>

**C.** A $5.0\ \mu\text{F}$ capacitor charged to $100\ \text{V}$ is connected to an identical uncharged capacitor. Find the common voltage and the energy lost.

<details><summary>Show the reasoning</summary>

The charge is $Q=(5.0\times10^{-6})(100)=5.0\times10^{-4}\ \text{C}$. With equal capacitances, the common voltage is

$$
V=\frac{Q}{2C}=\frac{5.0\times10^{-4}}{1.0\times10^{-5}}=50\ \text{V}.
$$

The initial energy is $\frac12(5.0\times10^{-6})(100)^2=0.025\ \text{J}$. The final energy is $\frac12(10\times10^{-6})(50)^2=0.0125\ \text{J}$. The loss is $0.0125\ \text{J}$, exactly half the initial energy.
</details>

## Remember

- Parallel capacitors share voltage and add: $C_{\text{eq}}=C_1+C_2+\cdots$.
- Series capacitors share charge and add reciprocals: $1/C_{\text{eq}}=1/C_1+1/C_2+\cdots$.
- Stored energy is $U=Q^2/(2C)=\frac12CV^2=\frac12QV$, with density $\frac12\varepsilon_0E^2$ in vacuum.
- Connecting charged capacitors conserves charge but loses energy unless the initial voltages are equal.
- Decide first whether $Q$ or $V$ is held fixed; that choice controls every subsequent change.

The practice module that follows mixes these tools with potentials, conductors and dielectrics, so the main skill becomes choosing the right relation before calculating.
