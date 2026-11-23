## Why the lights dim when the engine starts

Switch on a car's starter motor and the headlights often dim for a moment. The battery is not ideal: it has a small internal resistance, and the large starter current causes a potential drop inside the battery itself. The same idea appears in home wiring, where lamps are connected in parallel so that each receives the full supply voltage and can be switched independently. Before analysing whole circuits, we need reliable rules for combining resistances and for describing a real source.

## 1. Series: one path for the current

When resistors are connected one after another, the same current passes through each, because charge has nowhere else to go. The potential differences add:

$$
V=V_1+V_2+\cdots=I(R_1+R_2+\cdots).
$$

Therefore the equivalent resistance is

$$
R_{\text{eq}}=R_1+R_2+\cdots.
$$

The largest resistor has the largest share of the voltage, since $V_i=IR_i$. This is the **voltage-divider** rule: for two resistors in series across $V$,

$$
V_1=\frac{R_1}{R_1+R_2}V,
\qquad
V_2=\frac{R_2}{R_1+R_2}V.
$$

Series equivalent resistance is always larger than any individual resistance.

## 2. Parallel: the same voltage across each branch

In parallel, each resistor is connected across the same two nodes, so the potential difference is the same. The branch currents add:

$$
I=I_1+I_2+\cdots
=\frac{V}{R_1}+\frac{V}{R_2}+\cdots
=V\left(\frac{1}{R_1}+\frac{1}{R_2}+\cdots\right).
$$

Hence

$$
\frac{1}{R_{\text{eq}}}=\frac{1}{R_1}+\frac{1}{R_2}+\cdots.
$$

For exactly two resistors, the convenient form is

$$
R_{\text{eq}}=\frac{R_1R_2}{R_1+R_2}.
$$

The parallel equivalent is always **smaller** than the smallest branch resistance. That may feel counter-intuitive, but each added branch gives charge another route. The current divides in inverse proportion to resistance: the smaller branch resistance carries more current. For two branches,

$$
I_1=\frac{R_2}{R_1+R_2}I,
\qquad
I_2=\frac{R_1}{R_1+R_2}I.
$$

## 3. Mixed networks: reduce in stages

Most circuits are neither wholly series nor wholly parallel. Look for groups that are genuinely in series or parallel, replace each group by its equivalent, and repeat. Two resistors are in series only if the same current must pass through both; they are in parallel only if both are connected directly across the same pair of nodes. Guessing from the drawing alone is the usual source of mistakes.

## 4. Cells: emf and internal resistance

The **electromotive force** (emf) $\varepsilon$ of a source is the energy supplied per unit charge by the source's internal mechanism. It is measured in volts, and in an open circuit it equals the potential difference between the terminals. Despite its name, emf is not a force.

A real cell also has an **internal resistance** $r$, due to the electrolyte and electrodes. When the cell delivers current $I$ to an external circuit,

$$
V_{\text{terminal}}=\varepsilon-Ir.
$$

The terminal voltage is therefore less than the emf while the cell is discharging. The lost potential difference $Ir$ appears as heat inside the cell. If the cell is being **charged**, current is forced into its positive terminal, and the terminal voltage is raised:

$$
V_{\text{terminal}}=\varepsilon+Ir.
$$

The short-circuit current, obtained by setting the external resistance to zero, is $\varepsilon/r$. It is large and can damage a real cell.

The power delivered to the external circuit is $P=I^2R$. With $I=\varepsilon/(R+r)$ this becomes

$$
P=\frac{\varepsilon^2R}{(R+r)^2}.
$$

For a fixed emf and internal resistance, this is largest when the external resistance equals the internal resistance, $R=r$. The **maximum-power transfer** value is $P_{\max}=\varepsilon^2/(4r)$. This is the condition for maximum power in the load, not for maximum efficiency: at $R=r$ half the power is wasted inside the source. Power grids therefore do not operate at this condition.

## 5. Combining cells

- **Series, aiding:** the emfs add and the internal resistances add, $\varepsilon_{\text{eq}}=\varepsilon_1+\varepsilon_2+\cdots$ and $r_{\text{eq}}=r_1+r_2+\cdots$. The current is the same through each cell.
- **Series, opposing:** subtract the smaller emf from the larger; the net emf drives current in the direction of the larger cell.
- **Parallel, identical cells:** the emf stays $\varepsilon$, but the internal resistances combine in parallel, so $r_{\text{eq}}=r/n$ for $n$ identical cells. This reduces internal loss when a large current is needed.
- **Parallel, different cells:** the simple rules no longer apply; use Kirchhoff's rules, which come in the next module.

## 6. Worked example: a battery with a parallel load

A battery of emf $12\ \text{V}$ and internal resistance $0.50\ \Omega$ is connected to a $6.0\ \Omega$ and a $3.0\ \Omega$ resistor in parallel. Find the total current, the terminal voltage, the current in each branch and check the power balance.

**External resistance.**

$$
R_{\text{ext}}=\frac{(6.0)(3.0)}{6.0+3.0}=2.0\ \Omega.
$$

**Current from the battery.**

$$
I=\frac{\varepsilon}{R_{\text{ext}}+r}
=\frac{12}{2.0+0.50}=4.8\ \text{A}.
$$

**Terminal voltage.**

$$
V=\varepsilon-Ir=12-(4.8)(0.50)=9.6\ \text{V}.
$$

This is also the potential difference across the parallel pair: $IR_{\text{ext}}=(4.8)(2.0)=9.6\ \text{V}$.

**Branch currents.**

$$
I_{6}=\frac{9.6}{6.0}=1.6\ \text{A},
\qquad
I_{3}=\frac{9.6}{3.0}=3.2\ \text{A}.
$$

They add to $4.8\ \text{A}$, as charge conservation requires. The smaller resistance carries the larger current.

**Power check.** The battery's chemical power is $\varepsilon I=(12)(4.8)=57.6\ \text{W}$. The external load receives $V^2/R_{\text{ext}}=(9.6)^2/2.0=46.08\ \text{W}$, and the internal resistance dissipates $I^2r=(4.8)^2(0.50)=11.52\ \text{W}$. Their sum is $57.6\ \text{W}$, so the accounting closes. The terminal voltage is below the emf, as expected for a discharging battery.

<learning-block type="mistake" title="Parallel resistors are not added like series resistors">

Adding $6.0\ \Omega$ and $3.0\ \Omega$ in parallel does **not** give $9.0\ \Omega$; it gives $2.0\ \Omega$, which is smaller than either branch. The reciprocal formula is required. A second common slip is to forget the internal resistance and write $I=\varepsilon/R_{\text{ext}}$; that overestimates the current and ignores the terminal-voltage drop. When a question says “a battery of emf $12\ \text{V}$” without mentioning internal resistance, check whether the absence of $r$ is stated explicitly before assuming an ideal source.

</learning-block>

## Try it yourself

**A.** A $3.0\ \Omega$ and a $6.0\ \Omega$ resistor are connected in parallel, and the combination is placed in series with a $4.0\ \Omega$ resistor. Find the total resistance.

<details><summary>Show the reasoning</summary>

The parallel pair is

$$
R_p=\frac{(3.0)(6.0)}{3.0+6.0}=2.0\ \Omega.
$$

In series with $4.0\ \Omega$,

$$
R_{\text{total}}=4.0+2.0=6.0\ \Omega.
$$

The equivalent resistance is between the largest series element and the sum of all three, which is a useful sanity check.

</details>

**B.** A cell of emf $9.0\ \text{V}$ and internal resistance $1.0\ \Omega$ is connected to a $4.0\ \Omega$ resistor. Find the current, the terminal voltage and the power delivered to the resistor.

<details><summary>Show the reasoning</summary>

$$
I=\frac{9.0}{4.0+1.0}=1.8\ \text{A}.
$$

The terminal voltage is

$$
V=9.0-(1.8)(1.0)=7.2\ \text{V},
$$

which agrees with $IR=(1.8)(4.0)=7.2\ \text{V}$. The power in the resistor is

$$
P=I^2R=(1.8)^2(4.0)=12.96\approx13\ \text{W}.
$$

</details>

**C.** Two identical cells, each of emf $1.5\ \text{V}$ and internal resistance $0.50\ \Omega$, are connected in series with a $2.0\ \Omega$ resistor. Find the current and the terminal voltage of the combination.

<details><summary>Show the reasoning</summary>

In series, $\varepsilon_{\text{eq}}=3.0\ \text{V}$ and $r_{\text{eq}}=1.0\ \Omega$. Thus

$$
I=\frac{3.0}{2.0+1.0}=1.0\ \text{A}.
$$

The terminal voltage of the combination is

$$
V=3.0-(1.0)(1.0)=2.0\ \text{V},
$$

which is also $IR=(1.0)(2.0)=2.0\ \text{V}$.

</details>

## Remember

- Series: same current, $R_{\text{eq}}=\sum R_i$, and voltage divides in proportion to resistance.
- Parallel: same voltage, $1/R_{\text{eq}}=\sum 1/R_i$, and current divides inversely with resistance; the equivalent is smaller than the smallest branch.
- A real cell has emf $\varepsilon$ and internal resistance $r$; its terminal voltage is $\varepsilon-Ir$ when discharging and $\varepsilon+Ir$ when charging.
- Maximum power is transferred to a load when $R=r$, but that is not the condition for maximum efficiency.
- Always reduce a network in stages and check the equivalent resistance against the individual values.

When a circuit cannot be reduced by series and parallel rules—especially when several sources act—Kirchhoff's rules provide the general method.
