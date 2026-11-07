## Why gases differ in specific heat

Heat a litre of argon and a litre of nitrogen by the same amount and the argon takes noticeably less energy. The kinetic theory explanation is disarmingly simple: at the same temperature both gases hold the same translational energy per molecule, but a nitrogen molecule can also **rotate**, so the same temperature rise means more ways for energy to be stored, and more energy required per kelvin. Counting the ways — degrees of freedom — turns specific heats from a table to memorise into a prediction.

## 1. Counting degrees of freedom

A **degree of freedom** is an independent mode for storing energy that comes in as a quadratic term (½m v², ½I ω² or ½k x²). Counting for rigid molecules uses fixed orientation:

| Molecule | Translational | Rotational | Total $f$ |
| --- | --- | --- | --- |
| monatomic (Ar, He) | 3 | 0 | 3 |
| diatomic, rigid bond (O₂, N₂, air) | 3 | 2 | 5 |
| diatomic with vibration (high $T$) | 3 | 2 | 7 |
| non-linear polyatomic, rigid (H₂O, CH₄) | 3 | 3 | 6 |
| linear polyatomic, rigid (CO₂) | 3 | 2 | 7 |

Two fine points hide in the table:

- **Why only 2 rotational modes for a diatomic molecule?** A diatomic molecule is a rod; spinning about the line joining the atoms moves almost no mass (the moment of inertia about that axis is negligible), so that rotation stores essentially zero energy. Rotation about each of the two perpendicular axes is what counts.
- **Why vibration adds 2, not 1?** A vibrating bond stores energy half in kinetic form (½μ v_rel²) and half in potential form (½k x²). Each quadratic form is a separate degree of freedom, so one vibrational mode contributes two.

## 2. Equipartition: energy shared equally

The **equipartition theorem** states: in thermal equilibrium at temperature $T$, every quadratic degree of freedom holds, on average, an energy of $\frac12k_BT$ per molecule, or $\frac12RT$ per mole. Translation has 3 quadratic terms, rotations and vibration carry their respective terms from the table, and the internal energy per mole is

$$
U=\frac{f}{2}RT.
$$

For a monatomic gas this recovers the temperature lesson's result, $U=\frac32RT$ per mole — there, only translation existed. For a diatomic gas at ordinary temperatures, $U=\frac52RT$, of which $\frac32RT$ is translation and $RT$ is rotation. Temperature measures the **total** random molecular energy now, not just the straight-line motion; the extra storage slots fill in proportion.

## 3. Specific heats and the ratio γ

Differentiating $U$ against temperature gives the molar heat capacity at constant volume:

$$
C_V=\frac{f}{2}R,
\qquad
C_p=C_V+R=\frac{f+2}{2}R,
\qquad
\gamma=\frac{C_p}{C_V}=1+\frac{2}{f}.
$$

$C_p$ exceeds $C_V$ by exactly $R$ because heating a gas at constant pressure does double duty: it raises the internal energy **and** pays for the expansion work $p\,\Delta V=(nR)\Delta T$. The table assembles gas by gas:

| Gas | $f$ | $C_V$ | $C_p$ | $\gamma$ |
| --- | --- | --- | --- | --- |
| monatomic | 3 | $\frac32R\approx12.5$ | $\frac52R\approx20.8$ | $\frac53\approx1.67$ |
| diatomic, room $T$ | 5 | $\frac52R\approx20.8$ | $\frac72R\approx29.1$ | $\frac75=1.40$ |
| diatomic, vibrating | 7 | $\frac72R\approx29.1$ | $\frac92R\approx37.4$ | $\frac97\approx1.29$ |
| non-linear polyatomic | 6 | $3R\approx24.9$ | $4R\approx33.3$ | $\frac43\approx1.33$ |

The pattern is worth narrating: γ **falls** as degrees of freedom rise, because every new storage slot diverts a share of the added energy away from the pressure-carrying translation. Monatomic gases have the largest γ; complicated, cool polyatomic molecules have the smallest.

### Worked example: heating two moles of oxygen two ways

Take $2.0\ \text{mol}$ of diatomic oxygen ($f=5$, so $C_V=20.8\ \text{J mol}^{-1}\text{K}^{-1}$) and raise its temperature by $50\ \text{K}$ in a rigid vessel:

$$
Q=nC_V\Delta T=(2.0)(20.8)(50)=2080\ \text{J}.
$$

With $V$ constant the gas does no work, so $\Delta U=Q=2.08\ \text{kJ}$ as well. Now repeat in a piston at constant pressure:

$$
Q=nC_p\Delta T=(2.0)(29.1)(50)=2910\ \text{J},
$$

and expansion work costs $W=nR\Delta T=(2.0)(8.314)(50)=831\ \text{J}$. Check: $Q-W=2910-831=2079\ \text{J}$, matching $\Delta U$ — the first law closes the circle.

## 4. Where the classical theory fails — and when vibration wakes up

Here is the theory's most instructive failure. At room temperature diatomic gases match $f=5$ beautifully. But nothing in classical physics prevents vibration being active in some molecules and totally frozen in others. Quantum mechanics explains the split, in one sentence: **a vibrational mode only accepts energy in quanta, and at ordinary temperatures the thermal energy per molecule is far below one quantum.** This is why vibrational modes are 'frozen' at room temperature, and why the mode count is effectively 5 rather than 7.

Raise the temperature and levels become reachable: real data for hydrogen show $C_V$ rising from $\approx\frac52R$ near room temperature toward $\frac72R$ only at temperatures of several thousand kelvin. Classical equipartition is the high-temperature limit; the degrees of freedom 'switch on' one by one as quanta become affordable.

<learning-block type="mistake" title="Mixing $C_V$, $C_p$ with the wrong process">

$\Delta U=nC_V\Delta T$ is an internal-energy bookkeeping fact for an ideal gas and holds **for every process**, including adiabatic and isobaric ones. The error is to treat $C_p\Delta T$ as the change in $U$. At constant pressure, $Q=nC_p\Delta T$ but $\Delta U=nC_V\Delta T$ still — the balance goes to expansion work, exactly as the worked example showed. Decide first what is held constant; heat, work and $\Delta U$ then split differently.

</learning-block>

## Try it yourself

**1.** Predict γ for carbon dioxide (linear, rigid at room temperature, so $f=7$).

<details><summary>Show the reasoning</summary>

$$
\gamma=1+\frac{2}{f}=1+\frac{2}{7}\approx1.29.
$$

Measured room-temperature CO₂ gives $\gamma\approx1.30$, sandwiched just above the prediction — its bending vibration only partly wakes at this temperature. Counting modes carried the answer within a few percent.
</details>

**2.** To raise a fixed volume of gas by one kelvin, which takes more heat: $1\ \text{mol}$ of argon or $1\ \text{mol}$ of nitrogen? By how much in joules?

<details><summary>Show the reasoning</summary>

At fixed volume the heat delivered is $nC_V\Delta T$ per mole: argon stores $C_V=12.5\ \text{J/K}$ while nitrogen stores $20.8\ \text{J/K}$ because it rotates as well as translates. So nitrogen needs $20.8-12.5=8.3\ \text{J}$ more per mole per kelvin — exactly $R$, the rotational slot paying for itself.
</details>

**3.** A monatomic ideal gas absorbs $300\ \text{J}$ of heat while doing $100\ \text{J}$ of work. Does the behaviour pin the number of moles if $\Delta T=4.0\ \text{K}$?

<details><summary>Show the reasoning</summary>

$\Delta U=Q-W=200\ \text{J}$. For a monatomic ideal gas $\Delta U=nC_V\Delta T=n(12.5)(4.0)=50.0\,n$, so $n=4.0\ \text{mol}$. Note the calculation never needed the process to be at constant volume: $\Delta U=nC_V\Delta T$ applies to any process for an ideal gas.
</details>

## Remember

- Each quadratic degree of freedom stores $\frac12k_BT$ per molecule, $\frac12RT$ per mole: equipartition.
- Count carefully: monatomic $f=3$; rigid diatomic $f=5$ (the bond-axis spin carries no moment of inertia); vibrating diatomic $f=7$ (vibration is one mode with two quadratic halves); rigid non-linear polyatomic $f=6$.
- $C_V=\frac f2R$, $C_p=C_V+R$, $\gamma=1+2/f$: counting modes predicts the specific heats.
- $\Delta U=nC_V\Delta T$ is valid in any process; $C_p$ is only for heat added at constant pressure.
- Vibration is a quantum effect away from the classical picture: dormant near room temperature, waking as $T$ climbs.
- Next lesson follows one molecule along its jerky path through all those well-mixed partners, and asks how far it travels before a collision interrupts it.
