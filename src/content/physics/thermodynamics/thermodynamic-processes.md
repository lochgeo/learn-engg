## The designer's toolbox

The first law is one line long; its power comes from choosing the constraint. Expand isothermally and all absorbed heat becomes work. Compress adiabatically and the temperature climbs without any heater. This lesson prices the four classic processes — isochoric, isobaric, isothermal and adiabatic — using the tools already built: $\Delta U=Q-W$, $W=\int P\,dV$, and $C_V$, $C_P$, $\gamma$.

## 1. Isochoric: constant volume

A rigid, sealed vessel. No boundary work is possible, so $W=0$ and $Q=\Delta U=nC_V\,\Delta T$. Pressure and temperature climb together in the fixed ratio $P/T=\text{constant}$ (Gay-Lussac's law). On a $P$–$V$ diagram the path is a vertical line: zero width, therefore zero area under it, therefore zero work. Every joule supplied goes into internal energy.

## 2. Isobaric: constant pressure

A piston exposed to the atmosphere, or any slow change in open contact with the surroundings. With $P$ fixed the work is trivial to integrate:

$$
W=P\,(V_f-V_i)=P\,\Delta V=nR\,\Delta T,
$$

and the heat is $Q=nC_P\,\Delta T=nC_V\,\Delta T+nR\,\Delta T$ — internal energy plus exactly the boundary work, which is the content of $C_P-C_V=R$. On the $P$–$V$ diagram the path is a horizontal line and the work is the rectangle beneath it. Heating at constant pressure raises both $V$ and $T$ in the fixed ratio $V/T=\text{constant}$ (Charles's law).

## 3. Isothermal: constant temperature

The gas sits in contact with a large heat reservoir and changes slowly, so its temperature never leaves the reservoir's. For an ideal gas $U$ depends only on $T$, so

$$
\Delta U=0,\qquad Q=W,
$$

and pressure and volume trade places along the hyperbola $PV=\text{constant}$. The work integral can be done exactly with $P=nRT/V$:

$$
W=nRT\ln\!\frac{V_f}{V_i}.
$$

<learning-block type="example" title="Worked example — isothermal expansion">

One mole of ideal gas at $300\ \text{K}$ doubles its volume isothermally and slowly.

$$
W=nRT\ln2=1\times8.31\times300\times0.693=1728\ \text{J}\approx1.73\ \text{kJ}.
$$

Since $\Delta U=0$, the gas must absorb $Q=+1.73\ \text{kJ}$ from the reservoir. **Sanity checks:** doubling the volume halves the pressure ($PV$ fixed), an ordinary quasistatic requirement; the heat absorbed in isothermal expansion is *finite and modest* because the pressure falls as the volume grows — near the end of the expansion the gas is pushing against a much weaker opposing pressure.

</learning-block>

An isothermal process must be **slow**, because moving heat through a finite temperature difference takes time. Squeeze the schedule and the process drifts toward the next case.

## 4. Adiabatic: no heat transfer

Insulate the wall, or make the change too fast for heat to flow: $Q=0$, hence $\Delta U=-W$. Unlike the other three, the path on the $P$–$V$ diagram is not given by a simple constraint on one variable; it is fixed by combining the first law with the ideal-gas law. The result, for an ideal gas with constant $C_V$ and $C_P$, is

$$
PV^\gamma=\text{constant},\qquad TV^{\gamma-1}=\text{constant},\qquad T^\gamma\,P^{1-\gamma}=\text{constant},
$$

with $\gamma=C_P/C_V$. Expand and the gas pays for its work out of internal energy, so it cools; compress and the work done on it has nowhere to go but into internal energy, so it warms. Compressing air in a bicycle pump until it scorches your thumb is a small adiabatic compression.

The work follows from $\Delta U=-W$:

$$
W=\frac{nR\,(T_i-T_f)}{\gamma-1}=\frac{P_iV_i-P_fV_f}{\gamma-1}.
$$

<learning-block type="example" title="Worked example — adiabatic compression">

One mole of monatomic gas ($\gamma=5/3$) at $300\ \text{K}$ is compressed quietly to one-eighth of its volume.

From $TV^{\gamma-1}=\text{constant}$, using $\gamma-1=\frac23$ and $8^{2/3}=4$:

$$
T_f=300\times8^{2/3}=300\times4=1200\ \text{K}.
$$

The internal energy change is $\Delta U=nC_V\,\Delta T=1\times12.465\times900=11218.5\ \text{J}\approx11.2\ \text{kJ}$, so the work done by the gas is $W=-11.2\ \text{kJ}$. **Cross-check** with the work formula: $W=\frac{nR(T_i-T_f)}{\gamma-1}=\frac{8.31\times(-900)}{2/3}=-11218.5\ \text{J}$ — identical, confirming both routes. The $1200\ \text{K}$ figure is hot but far below what everyday compression ratios can reach transiently, so the magnitude is sane.

</learning-block>

## 5. Comparing the curves

On a $P$–$V$ diagram, both isothermal and adiabatic paths fall from upper left to lower right, but not at the same rate. Slopes at a shared point: isothermal $dP/dV=-P/V$ (from $PV=\text{constant}$), adiabatic $dP/dV=-\gamma P/V$ (from $PV^\gamma=\text{constant}$). Since $\gamma>1$, **the adiabatic curve is steeper through any shared state**. Physically: an expanding adiabatic gas loses pressure for two reasons at once — more volume, and a falling temperature — while an expanding isothermal gas keeps its temperature and loses pressure for one reason only.

| Process | Holds fixed | Work by gas | Heat | $\Delta U$ |
| --- | --- | --- | --- | --- |
| Isochoric | $V$ | $0$ | $nC_V\,\Delta T$ | $nC_V\,\Delta T$ |
| Isobaric | $P$ | $P\,\Delta V=nR\,\Delta T$ | $nC_P\,\Delta T$ | $nC_V\,\Delta T$ |
| Isothermal | $T$ | $nRT\ln(V_f/V_i)$ | $=W$ | $0$ (ideal gas) |
| Adiabatic | $Q$ | $\frac{nR\,(T_i-T_f)}{\gamma-1}$ | $0$ | $-W$ |

<learning-block type="mistake" title="Right law, wrong process">

The most expensive error in this chapter is quoting $PV=\text{constant}$ (or the isothermal work formula) for an adiabatic change, or applying $PV^\gamma=\text{constant}$ outside the adiabatic case. Another frequent slip: using $nC\,\Delta T$ for heat in an isothermal process, where $\Delta T=0$ would wrongly predict $Q=0$ — yet $Q=W\ne0$ there. Before computing, identify the constraint in words: what does the question hold fixed, or explicitly rule out?

</learning-block>

## Try it yourself

**A.** Two moles of monatomic gas in a rigid vessel are heated from $300\ \text{K}$ to $500\ \text{K}$. Find $Q$, $W$ and $\Delta U$.

<details><summary>Show the reasoning</summary>

Rigid vessel means isochoric: $W=0$ and $Q=\Delta U=nC_V\,\Delta T=2\times12.465\times200=4986\ \text{J}\approx5.0\ \text{kJ}$. All the heat becomes internal energy because the gas cannot expand. The pressure *doubles* along the way ($P/T$ fixed: $500/300$ is roughly $1.67$), so the vessel must be strong enough — a constant-volume engine constraint in miniature.
</details>

**B.** A diatomic gas ($\gamma=1.4$) at $300\ \text{K}$ expands adiabatically to twice its volume. Find the final temperature and, per mole, $\Delta U$ and $W$.

<details><summary>Show the reasoning</summary>

$TV^{\gamma-1}=\text{constant}$ with $\gamma-1=0.4$:

$$
T_f=300\times2^{-0.4}=\frac{300}{2^{0.4}}=\frac{300}{1.3195}=227\ \text{K}.
$$

Per mole, $\Delta U=C_V\,\Delta T=20.775\times(227-300)=-1516\ \text{J}\approx-1.5\ \text{kJ}$, so the gas does $W\approx+1.5\ \text{kJ}$ of work — with no heat input, paid entirely from internal energy. The gas cools by about $73\ \text{K}$, a genuinely cold result, as expected for rapid expansion.
</details>

**C.** Match each situation to its process: (a) air rushes out of a burst tyre in a fraction of a second; (b) a sealed tin of air is warmed on a radiator; (c) a syringe of gas is compressed very slowly inside a metal block held at fixed temperature; (d) a hot-air balloon stays open to the atmosphere.

<details><summary>Show the reasoning</summary>

(a) Adiabatic: far too fast for heat flow, so the escaping air cools as it does work. (b) Isochoric: volume is fixed by the tin, so the pressure rises as heat enters. (c) Isothermal: quasi-static and in thermal contact with a heat reservoir, so temperature stays put and $Q=W$. (d) Isobaric: the open boundary holds the pressure at atmospheric while the gas expands on warming. Naming the physical constraint *before* the formula is the whole skill here.
</details>

## Remember

- Isochoric: $W=0$, $Q=\Delta U=nC_V\,\Delta T$; the path is vertical on the $P$–$V$ diagram.
- Isobaric: $W=P\Delta V=nR\Delta T$, $Q=nC_P\,\Delta T$; the path is horizontal.
- Isothermal (ideal gas): $\Delta U=0$, $Q=W=nRT\ln(V_f/V_i)$, along $PV=\text{constant}$; it must be slow.
- Adiabatic: $Q=0$, $PV^\gamma=\text{constant}$, $W=\frac{nR\,(T_i-T_f)}{\gamma-1}$; it must be fast or insulated, and expansion always cools.
- The adiabatic curve is steeper than the isothermal one through any shared state, by the factor $\gamma$.

## Where next

Put the four processes end to end and the gas returns to its starting point: a **cycle** — the anatomy of every engine. The next lesson reads cycles off $P$–$V$ diagrams, where the net work is the enclosed area and efficiency enters for the first time.
