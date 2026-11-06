## Why a gas needs two heat capacities

Pour energy into a solid or a liquid and a single specific heat predicts the temperature rise well. A gas is awkward: heat it while it is free to push a piston outward and part of every joule escapes as work before it can warm anything; clamp it in a welded rigid box and every joule stays put. Identical temperature rise, very different heat bills. Gases therefore carry **two** molar heat capacities — $C_V$ at constant volume and $C_P$ at constant pressure — linked by one clean relation.

## 1. Heat capacity on a molar basis

The calorimetry lessons used $Q=mc\,\Delta T$ for a fixed mass. For gases it is cleaner to count moles:

$$
Q=nC\,\Delta T,
$$

where $n$ is the amount in moles and $C$ is a **molar heat capacity** in $\text{J}\ \text{mol}^{-1}\ \text{K}^{-1}$: the heat needed to raise one mole by one kelvin. The crucial qualifier is *through which process* — the value of $C$ is defined only after the constraint is named. Alongside $C_V$ and $C_P$ we introduce $\gamma=C_P/C_V$, the **ratio of specific heats**, which will sharpen the adiabatic relations two lessons ahead.

## 2. $C_V$: heating at constant volume

Clamp the gas in a rigid container. No boundary work is possible, $W=0$, and the first law collapses to $Q=\Delta U$: every joule delivered goes straight into molecular motion. Since a mole of ideal gas at temperature $T$ carries $U=\frac{f}{2}RT$ of internal energy (kinetic theory; $f$ is the number of molecular degrees of freedom),

$$
C_V=\frac{f}{2}R.
$$

For a monatomic gas ($f=3$): $C_V=\frac{3}{2}R\approx12.5\ \text{J}\ \text{mol}^{-1}\ \text{K}^{-1}$.

## 3. $C_P$: heating at constant pressure

Now hold the gas under a frictionless piston weighted so the pressure never changes. Heat arrives; if nothing moved, the pressure would climb. Instead the gas expands just enough to keep $P$ fixed, doing boundary work. The first law gives

$$
Q=\Delta U+W=nC_V\,\Delta T+P\,\Delta V.
$$

The ideal-gas law converts the work: $P\,\Delta V=nR\,\Delta T$. So

$$
Q=nC_V\,\Delta T+nR\,\Delta T=nC_P\,\Delta T,\qquad\Longrightarrow\qquad C_P-C_V=R.
$$

The result holds for any ideal gas, monatomic or not: molar $C_P$ always exceeds molar $C_V$ by $R\approx8.31\ \text{J}\ \text{mol}^{-1}\ \text{K}^{-1}$. Physically, the extra $R$ per mole per kelvin is exactly the energy that leaks out as boundary work while the gas holds its pressure. The derivation assumes an ideal gas in a quasi-static constant-pressure expansion — for real gases near condensation, big deviations appear.

## 4. Degrees of freedom fix the values

Kinetic theory's equipartition result says each molecular degree of freedom holds $\frac{1}{2}RT$ of energy per mole, giving $C_V=\frac{f}{2}R$, $C_P=(\frac{f}{2}+1)R$ and

$$
\gamma=\frac{C_P}{C_V}=1+\frac{2}{f}.
$$

| Gas (near room temperature) | $f$ | $C_V$ | $C_P$ | $\gamma$ |
| --- | --- | --- | --- | --- |
| Monatomic (He, Ne, Ar) | 3 | $\frac{3}{2}R\approx12.5$ | $\frac{5}{2}R\approx20.8$ | $\frac{5}{3}\approx1.67$ |
| Diatomic, translation + rotation (H2, O2, N2) | 5 | $\frac{5}{2}R\approx20.8$ | $\frac{7}{2}R\approx29.1$ | $\frac{7}{5}=1.40$ |
| Polyatomic, modest (CO2, NH3) | 6 | $3R\approx24.9$ | $4R\approx33.2$ | $\frac{4}{3}\approx1.33$ |

All $C$ values in $\text{J}\ \text{mol}^{-1}\ \text{K}^{-1}$. A diatomic molecule *could* also vibrate, but vibrational modes are nearly frozen at ordinary temperatures — that is why $f=5$ and $\gamma=1.4$ serves air so well in practice, and why $\gamma$ drifts upward at very high temperatures.

## Worked example

Two moles of monatomic gas are heated by $20\ \text{K}$, once at constant volume and once at constant pressure.

**Constant volume:** $Q_V=nC_V\,\Delta T=2\times12.465\times20=498.6\ \text{J}\approx499\ \text{J}$. All of it becomes internal energy; $W=0$.

**Constant pressure:** $Q_P=nC_P\,\Delta T=2\times20.775\times20=831\ \text{J}$. The temperature rise is the same, so $\Delta U$ is the same $498.6\ \text{J}$, and the difference escapes as work: $W=831-498.6=332.4\ \text{J}$.

**Checks.** The work should equal $nR\,\Delta T=2\times8.31\times20=332.4\ \text{J}$ — exactly what the ledger gives. The heat ratio should equal $C_P/C_V=5/3$: indeed $831/498.6=1.667$. The numbers are self-consistent on both routes, so the example is sound.

<learning-block type="mistake" title="Constant volume or constant pressure?">

The commonest error is inserting $C_V$ into a problem whose pressure never changes, or the reverse. Ask first what is *physically* held fixed: a welded, rigid vessel means constant volume and $C_V$; a piston open to the atmosphere means constant pressure and $C_P$. If neither is fixed, the process is neither isochoric nor isobaric and the heat must be found from the first law directly, not from $nC\,\Delta T$. Watch units too: tables list molar values ($C$ per mole); if the problem quotes grams, you need the mass-specific value $c=C/M$ with $M$ the molar mass.

</learning-block>

## Try it yourself

**A.** Three moles of diatomic gas are raised from $300\ \text{K}$ to $400\ \text{K}$ at constant pressure. Find $Q$, $W$ and $\Delta U$.

<details><summary>Show the reasoning</summary>

Diatomic: $C_V=\frac52R=20.775$ and $C_P=\frac72R=29.085\ \text{J}\ \text{mol}^{-1}\ \text{K}^{-1}$.

$Q=nC_P\,\Delta T=3\times29.085\times100=8725.5\ \text{J}$. $\Delta U=nC_V\,\Delta T=3\times20.775\times100=6232.5\ \text{J}$. Work: $W=Q-\Delta U=2493\ \text{J}$.

Checks: $W$ should equal $nR\,\Delta T=3\times8.31\times100=2493\ \text{J}$ — it does — and $C_P-C_V=29.085-20.775=8.31\ \text{J}$ per mole, as the relation demands.
</details>

**B.** Two moles of monatomic gas absorb $1000\ \text{J}$ of heat while held at constant volume. Find the temperature rise.

<details><summary>Show the reasoning</summary>

$Q=nC_V\,\Delta T$ with $C_V=12.465\ \text{J}\ \text{mol}^{-1}\ \text{K}^{-1}$, so $\Delta T=1000/(2\times12.465)=40.1\ \text{K}$. Check: $2\times12.465\times40=997\ \text{J}$, consistent with $1000\ \text{J}$ to the stated precision. No work is done at constant volume, so all the heat heats the gas.
</details>

**C.** Explain in words, without any equation, why $C_P$ must exceed $C_V$.

<details><summary>Show the reasoning</summary>

For the same temperature rise, both cases must inject the same extra internal energy. But the constant-pressure gas must also push its surroundings outward as it expands, and that push costs energy. The heat supplied at constant pressure therefore covers two bills — internal energy and boundary work — while at constant volume it covers one.
</details>

## Remember

- Use $Q=nC\,\Delta T$ only after naming the constraint; $C_V$ only for constant volume, $C_P$ only for constant pressure.
- $C_V=\frac{f}{2}R$; monatomic $\frac32R$, diatomic $\frac52R$ near room temperature, polyatomic upwards.
- $C_P-C_V=R$ per mole: the third relation is purely bookkeeping for boundary work.
- $\gamma=C_P/C_V=1+\frac{2}{f}$ lies between $1$ and $\frac53$ for ideal gases; it steers the adiabatic laws.
- Same $\Delta T$ means same $\Delta U$ regardless of the process — internal energy is a state function.

## Where next

Armed with $C_V$, $C_P$ and $\gamma$, we can finally price the four classic processes — isothermal, adiabatic, isochoric and isobaric — with real work and heat values, including $PV^\gamma=\text{constant}$ for the adiabatic case. That is the next lesson.
