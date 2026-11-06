## Why cycles matter

A piston engine fires thousands of times per minute, yet the gas inside returns to its initial state after each stroke sequence. Any machine that runs continuously must do so through a **cycle**: a sequence of processes that returns the working substance to its starting state. Cycles open the door to efficiency, because over a cycle the internal energy is a closed account — everything absorbed must be either converted to work or rejected.

## 1. The cycle as a closed ledger

Over any complete cycle the system returns to its initial state, so

$$
\Delta U_{cycle}=0,\qquad Q_{net}=W_{net}.
$$

This is the cleanest consequence of $U$ being a state function. Each individual stage may bank or spend internal energy, but the closing balance is zero: the net heat absorbed from the surroundings equals the net work delivered back. There is no escaping this equality — any diagram "selling" more work than net heat is wrong before physics even enters.

## 2. Work as enclosed area

The work of each leg is the signed area under that leg's curve ($W=\int P\,dV$). Traversed as a loop, the areas over expansion legs (traversed rightward) are positive and the areas under compression legs (traversed leftward) are negative. What survives the subtraction is the **area enclosed by the loop**:

$$
W_{net}=\text{signed enclosed area}.
$$

Direction decides the sign. On a standard $P$–$V$ diagram ($V$ rightward, $P$ upward):

- **Clockwise** loop: net work done *by* the gas, $W_{net}>0$ — the system acts as an engine.
- **Anticlockwise** loop: net work done *on* the gas, $W_{net}<0$ — the system consumes work, as every refrigerator does.

## 3. A complete cycle, computed

<learning-block type="example" title="Worked example — a rectangular cycle">

$0.1\ \text{mol}$ of monatomic ideal gas follows $A\to B\to C\to D\to A$:

| State | $P$ (kPa) | $V$ (L) | $T\approx$ (K) |
| --- | --- | --- | --- |
| A | 100 | 2.0 | 241 |
| B | 100 | 6.0 | 722 |
| C | 50 | 6.0 | 361 |
| D | 50 | 2.0 | 120 |

A→B isobaric expansion, B→C isochoric cooling, C→D isobaric compression, D→A isochoric heating — a clockwise loop.

**Work, leg by leg:** $W_{AB}=100\times10^{3}\times4.0\times10^{-3}=+400\ \text{J}$; $W_{BC}=0$; $W_{CD}=50\times10^{3}\times(-4.0\times10^{-3})=-200\ \text{J}$; $W_{DA}=0$. Net $W=+200\ \text{J}$.

**Check via the area:** the loop encloses a rectangle of width $\Delta V=4.0\ \text{L}$ and height $\Delta P=50\ \text{kPa}$, so $W=\Delta P\,\Delta V=200\ \text{J}$ — agreeing with the leg sum.

**Heat, leg by leg.** Use $Q=nC\,\Delta T$ with the right $C$, or the equivalent $\frac{C}{R}\times\Delta(PV)$ since $nR\,\Delta T=\Delta(PV)$:

- A→B (isobaric): $Q=2.5\times(+400)=+1000\ \text{J}$ (in).
- B→C (isochoric): $Q=1.5\times(-300)=-450\ \text{J}$ (out), since $\Delta(PV)=V\,\Delta P=6.0\times10^{-3}\times(-50\times10^{3})=-300\ \text{J}$.
- C→D (isobaric): $Q=2.5\times(-200)=-500\ \text{J}$ (out).
- D→A (isochoric): $Q=1.5\times(+100)=+150\ \text{J}$ (in), since $\Delta(PV)=2.0\times10^{-3}\times(+50\times10^{3})=+100\ \text{J}$.

**Efficiency.** Heat absorbed: $Q_{in}=1000+150=1150\ \text{J}$. Heat rejected: $Q_{out}=450+500=950\ \text{J}$. The closed-ledger check: $1150-950=200\ \text{J}=W_{net}$ — it balances exactly. Then

$$
\eta=\frac{W_{net}}{Q_{in}}=\frac{200}{1150}=0.174\approx17\ \%.
$$

</learning-block>

Two habits die hard in this style of puzzle. First, **only heating legs count in $Q_{in}$**: the rejected heat is a cost, not an asset. Second, compute both $Q_{in}$ and $Q_{out}$ and check that their difference equals the enclosed area — the cheapest available error trap.

## 4. Reading cycles like an engineer

- **Area in, money out.** Whatever the leg shapes, $W_{net}$ is the enclosed area; tall, wide loops convert more work per cycle.
- **Direction is destiny.** Reverse the traversal and the same loop turns an engine into a refrigerator (net work in, heat pumped from cold to hot).
- **Efficiency needs heat, not just area.** Two loops with equal enclosed area can differ in efficiency: the cheaper the heat absorbed per joule of area, the better.
- Real engine cycles (petrol, diesel, steam) are built from these same process types, sometimes with added irreversibility; the bookkeeping method is identical.

<learning-block type="mistake" title="Adding magnitudes without signs">

A recurring error is summing the *magnitudes* of the four legs' work, which counts the compression strokes as if they helped the engine. The compression legs do negative work — the surroundings give the gas energy back — and the net is the difference. The enclosed area has its sign built in; the leg-by-leg sum without signs does not. Second recurring error: dividing by $Q_{in}+|Q_{out}|$ when computing efficiency. The definition is $\eta=W_{net}/Q_{in}$, denominator = energy actually paid in.

</learning-block>

## Try it yourself

**A.** A cycle consists of an isobaric expansion $A(2.0\ \text{L},100\ \text{kPa})\to B(6.0\ \text{L},100\ \text{kPa})$, then a straight-line path $B\to C(2.0\ \text{L},50\ \text{kPa})$ on which pressure falls in proportion to volume, then an isochoric return $C\to A$. Find the net work.

<details><summary>Show the reasoning</summary>

$W_{AB}=P\,\Delta V=100\times10^{3}\times4.0\times10^{-3}=+400\ \text{J}$. On the straight leg the pressure falls linearly from $100$ to $50\ \text{kPa}$ as the volume returns to $2.0\ \text{L}$, so use the average pressure, $75\ \text{kPa}$:

$$
W_{BC}=75\times10^{3}\times(-4.0\times10^{-3})=-300\ \text{J}.
$$

$W_{CA}=0$ (isochoric). Net $W=+100\ \text{J}$. This equals the triangular enclosed area, $\frac12\times\Delta V\times\Delta P=\frac12\times4.0\times10^{-3}\times50\times10^{3}=100\ \text{J}$, and its sign is positive because the loop runs clockwise.
</details>

**B.** An engine absorbs $1200\ \text{J}$ of heat per cycle and rejects $900\ \text{J}$. Find the net work and the efficiency.

<details><summary>Show the reasoning</summary>

Over a cycle $\Delta U=0$, so $W_{net}=Q_{net}=1200-900=300\ \text{J}$. The efficiency is $\eta=W_{net}/Q_{in}=300/1200=0.25$, i.e. $25\ \%$. Cross-check: $\eta=1-Q_{out}/Q_{in}=1-900/1200=0.25$ — the two forms agree.
</details>

**C.** The cycle of the worked example is traversed anticlockwise instead. What changes for the work, the heat flows and the role of the device?

<details><summary>Show the reasoning</summary>

Every leg's energy transfers reverse sign: the loop still encloses $200\ \text{J}$ of area, but now $W_{net}=-200\ \text{J}$ — net work is done *on* the gas. The leg that used to reject $950\ \text{J}$ in total now absorbs it (principally from the cold space being refrigerated), and the legs that used to absorb $1150\ \text{J}$ now reject it. Net absorption from the cold side is driven by net work input: the device has become a refrigerator. The physics obeys the first law all the same, $\Delta U=0$ over the cycle and $|Q_{net}|=|W_{net}|=200\ \text{J}$.
</details>

## Remember

- Over any complete cycle $\Delta U=0$, so $Q_{net}=W_{net}$ — the single most useful check in the chapter.
- Net work equals the signed enclosed area: clockwise positive (engine), anticlockwise negative (refrigerator).
- Compute efficiency as $\eta=W_{net}/Q_{in}$; only the heating legs belong in $Q_{in}$.
- Always close the ledger: $Q_{in}-|Q_{out}|$ must equal the enclosed area reproduced from the legs.
- The same loop traversed backwards swaps engine for refrigerator with identical magnitudes.

## Where next

Every cycle so far pays rejected heat by *choice* of path. Is the payment ever avoidable — is a $100\ \%$-efficient engine flat-out impossible? The next lesson answers with the two statements of the second law and the refrigerator's figure of merit.
