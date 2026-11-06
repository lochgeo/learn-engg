## The law behind the ledger

The last lesson did energy bookkeeping one example at a time. This lesson promotes the bookkeeping to a law. For any process taking a closed system from one equilibrium state to another,

$$
\Delta U=Q-W,
$$

with $Q$ the heat flowing **into** the system and $W$ the work done **by** the system. The claim is strong and universal: no change of internal energy escapes this equation. Hidden inside it is a subtlety worth the whole lesson — $\Delta U$ is fixed by the endpoints, but $Q$ and $W$ individually are not. Work depends on the path, and this lesson shows exactly why.

## 1. What each term means, and what the law asserts

- $\Delta U=U_{f}-U_{i}$ is the change of internal energy — a property of the two states only.
- $Q$ is the net heat transfer into the system during the process.
- $W$ is the net work done by the system on the surroundings.

The law asserts that internal energy can change only if energy crosses the boundary as heat or as work. It forbids processes that create energy from nothing, and it applies equally to solids, liquids, gases and mixtures. In differential form, $dU=\delta Q-\delta W$; the $\delta$ symbols recall that heat and work are quantities in transit, not properties of the state.

A useful special case is the **isolated** system: $Q=0$ and $W=0$ force $\Delta U=0$, so an isolated system's internal energy never changes however violently its insides churn.

## 2. Why work depends on the path

When a gas expands or is compressed slowly enough to stay in equilibrium (a *quasi-static* process), its work is the pressure pushing through each small change of volume:

$$
W=\int_{V_i}^{V_f}P\,dV.
$$

On a $P$–$V$ diagram this is the **signed area under the curve**: positive for expansion (moving right), negative for compression (moving left). The integral follows the whole curve $P(V)$, not just its endpoints, so different routes between the same two states enclose different areas and deliver different work.

Rearranging the first law, $Q=\Delta U+W$. Since $\Delta U$ is fixed while $W$ varies with the route, $Q$ varies too. Two routes connecting the same states can trade heat against work in different proportions — which is precisely the freedom an engine designer exploits.

## 3. One $\Delta U$, many paths — a worked comparison

A gas goes from state A ($P=2\times10^{5}\ \text{Pa}$, $V=2.0\ \text{L}$) to state B ($P=2\times10^{5}\ \text{Pa}$, $V=6.0\ \text{L}$); suppose its internal energy rises by $450\ \text{J}$ between these states. Because A and B fix the states, $\Delta U=+450\ \text{J}$ along *every* route.

**Route 1 — direct expansion at constant pressure.**

$$
W_1=P\,\Delta V=2\times10^{5}\times4.0\times10^{-3}=800\ \text{J}.
$$

The heat required is $Q_1=\Delta U+W_1=450+800=1250\ \text{J}$.

**Route 2 — cool at constant volume, expand at half the pressure, heat again at constant volume.** Cooling at fixed $V=2.0\ \text{L}$ to $P=1\times10^{5}\ \text{Pa}$ does no work. Expanding isobarically to $6.0\ \text{L}$ gives

$$
W_{2a}=1\times10^{5}\times4.0\times10^{-3}=400\ \text{J}.
$$

Heating at fixed $V=6.0\ \text{L}$ back to state B does no work either. So $W_2=400\ \text{J}$ and $Q_2=\Delta U+W_2=450+400=850\ \text{J}$.

**Comparison and checks.** The same endpoints, but $W_1=800\ \text{J}$ against $W_2=400\ \text{J}$, and $Q_1=1250\ \text{J}$ against $Q_2=850\ \text{J}$: both are path quantities. The internal energy change is $450\ \text{J}$ either way: a state quantity. The intermediate state of route 2 (half the pressure at six litres) sits at about half the absolute temperature of state B — an ordinary intermediate temperature, so nothing unphysical is assumed.

## 4. The law at a glance for the standard processes

| Process | Held fixed | Consequence from $\Delta U=Q-W$ |
| --- | --- | --- |
| Isothermal | temperature $T$ | for an ideal gas $\Delta U=0$, so $Q=W$ |
| Isochoric | volume $V$ | $W=0$, so $Q=\Delta U$ |
| Adiabatic | heat transfer | $Q=0$, so $\Delta U=-W$ |
| Cyclic | state (returns to start) | $\Delta U=0$, so $Q_{net}=W_{net}$ |

None of these is a separate physics: each is the first law plus one constraint. The work integral of section 2 evaluates differently on each — full expressions arrive in the processes lesson.

<learning-block type="mistake" title="Watch which W the formula is using">

Two sign conventions live side by side. Ours is $\Delta U=Q-W$ with $W$ the work done *by* the system; many books (and JEE answer keys) write $\Delta U=Q+W$ with $W$ the work done *on* the system. Mixing the two inside one calculation is the most reliable way to ruin an otherwise correct setup. Read the question, name the convention in words, then convert it to $\Delta U=Q-W$ before any arithmetic.

</learning-block>

## Try it yourself

**A.** A gas absorbs $600\ \text{J}$ and does $250\ \text{J}$ of work. A second, adiabatic stage follows in which the gas does $100\ \text{J}$ more work. Find the total change in internal energy.

<details><summary>Show the reasoning</summary>

Stage 1: $\Delta U_1=600-250=+350\ \text{J}$. Stage 2: $Q=0$ and $W=100\ \text{J}$, so $\Delta U_2=-100\ \text{J}$. Total $\Delta U=+250\ \text{J}$. Check across the whole journey: $Q_{net}=600\ \text{J}$, $W_{net}=350\ \text{J}$, and $600-350=250\ \text{J}$ — the two methods agree, confirming the bookkeeping.
</details>

**B.** An ideal gas expands into an evacuated, insulated chamber. Find $Q$, $W$ and $\Delta U$, and state what happens to the temperature.

<details><summary>Show the reasoning</summary>

The wall is insulating, so $Q=0$. Into a vacuum there is nothing to push against, so the resisting pressure is zero and $W=0$. The first law then gives $\Delta U=0$. For an ideal gas $U$ depends only on $T$, so the temperature does not change — even though the gas now fills a larger box. This "free expansion" is a favourite trap: the volume changes appreciably while temperature (ideal gas) does not.
</details>

**C.** In one complete cycle a system has heat transfers of $+500\ \text{J}$, $-200\ \text{J}$ and $-150\ \text{J}$. Find the net work per cycle.

<details><summary>Show the reasoning</summary>

A cycle returns the system to its initial state, so $\Delta U=0$ over the cycle and $W_{net}=Q_{net}$. Here $Q_{net}=500-200-150=+150\ \text{J}$, hence $W_{net}=+150\ \text{J}$: the device is acting as an engine, delivering net work each cycle.
</details>

## Remember

- $\Delta U=Q-W$ holds for every closed-system process; nothing needs to be added to it.
- $W=\int P\,dV$ is the signed area under the $P$–$V$ curve: expansion positive, compression negative.
- $\Delta U$ is path-independent; $Q$ and $W$ are not — the same endpoints admit many $Q$, $W$ pairs.
- Over a complete cycle, $\Delta U=0$ and the net heat equals the net work.
- Fix the sign convention in words before calculating; conventions mixed mid-problem guarantee errors.

## Where next

To apply the first law numerically we need to know *how much* heat changes a gas's temperature — and that depends on whether the gas is free to expand. Two molar heat capacities, $C_P$ and $C_V$, capture that difference; the next lesson derives them and the elegant relation $C_P-C_V=R$.
