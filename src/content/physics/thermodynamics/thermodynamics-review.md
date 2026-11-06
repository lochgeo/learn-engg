## Your study plan for today

Seven concept lessons form one connected argument: bookkeeping → first law → heat capacities → processes → cycles → second law → Carnot ceiling. A focused pass takes about **2 hours 30 minutes**, plus breaks:

1. **Heat, work and internal energy** — 20 min
2. **The first law** — 22 min
3. **$C_P$, $C_V$ and their relation** — 20 min
4. **The four processes** — 24 min
5. **Cycles and $P$–$V$ diagrams** — 20 min
6. **Second law, engines and refrigerators** — 22 min
7. **The Carnot cycle** — 22 min
8. **This mastery check** — 25 min

After each, close the lesson and redo its questions on a blank page. Then attempt this module's problems *before* reading the answers, and route every miss through the table below. The optional **JEE Main timed set** afterwards is best saved until you are secure lesson by lesson.

## First choose the tool

| Clue in the question | Start with |
| --- | --- |
| Rigid, sealed, welded container | Isochoric: $W=0$; $Q=\Delta U=nC_V\,\Delta T$ |
| Piston open to the atmosphere | Isobaric: $W=P\,\Delta V=nR\,\Delta T$; $Q=nC_P\,\Delta T$ |
| "Temperature held constant", slow expansion in a heat bath | Isothermal: $W=nRT\ln(V_f/V_i)$; $\Delta U=0$ |
| "Suddenly", "rapidly", "insulated" | Adiabatic: $PV^\gamma=\text{constant}$; $TV^{\gamma-1}=\text{constant}$ |
| Two states given; $Q$ or $W$ asked | First law plus $W=\int P\,dV$ (area under the curve, signed) |
| Returns to its initial state (a cycle) | $\Delta U=0$; $W_{net}=$ enclosed area; $Q_{net}=W_{net}$ |
| Engine efficiency asked | $\eta=W/Q_h=1-Q_c/Q_h$; compare with $1-T_c/T_h$ |
| Refrigerator work per heat removed | $\beta=Q_c/W$; ideal ceiling $T_c/(T_h-T_c)$ |

## Mastery check

Use $R=8.31\ \text{J}\ \text{mol}^{-1}\ \text{K}^{-1}$ and kelvin temperatures throughout. Attempt each before opening the answer.

### 1. Sign bookkeeping from scratch

A gas absorbs $250\ \text{J}$ of heat while doing $120\ \text{J}$ of work on a piston. Find $\Delta U$ — stating your sign convention first.

<details><summary>Answer and reasoning</summary>

Convention: $\Delta U=Q-W$ with $W$ the work done *by* the gas. Then $\Delta U=250-120=+130\ \text{J}$. The gas gains stored energy because the inflow ($250\ \text{J}$ of heat) exceeds the outflow ($120\ \text{J}$ of work).
</details>

### 2. Two stages, one ledger

In stage 1 of a process a gas absorbs $250\ \text{J}$ of heat and does $120\ \text{J}$ of work. In stage 2, adiabatic, the gas does a further $80\ \text{J}$ of work. Find the total change in internal energy and verify it two different ways.

<details><summary>Answer and reasoning</summary>

Stage 1: $\Delta U_1=250-120=+130\ \text{J}$. Stage 2: $Q=0$, $W=80\ \text{J}$, so $\Delta U_2=-80\ \text{J}$. Total $\Delta U=+50\ \text{J}$. Cross-check over the whole journey: $Q_{net}=250\ \text{J}$, $W_{net}=200\ \text{J}$, so $\Delta U=250-200=+50\ \text{J}$ — both routes agree.
</details>

### 3. Isobaric heating of a diatomic gas

Two moles of diatomic gas are warmed by $30\ \text{K}$ at constant pressure. Find $Q$, $W$ and $\Delta U$, and verify them against the relation $C_P-C_V=R$.

<details><summary>Answer and reasoning</summary>

$C_V=\frac52R=20.775$, $C_P=\frac72R=29.085\ \text{J}\ \text{mol}^{-1}\ \text{K}^{-1}$.

$Q=nC_P\,\Delta T=2\times29.085\times30=1745.1\ \text{J}$. $W=nR\,\Delta T=2\times8.31\times30=498.6\ \text{J}$. $\Delta U=Q-W=1246.5\ \text{J}$, which also equals $nC_V\,\Delta T=2\times20.775\times30=1246.5\ \text{J}$ — three independent routes give the same $\Delta U$.
</details>

### 4. Isothermal compression

Three moles of ideal gas at $400\ \text{K}$ are compressed slowly and isothermally from $8.0\ \text{L}$ to $2.0\ \text{L}$. Find the work done by the gas and the heat it must reject.

<details><summary>Answer and reasoning</summary>

$$
W=nRT\ln\frac{V_f}{V_i}=3\times8.31\times400\times\ln\frac14=9972\times(-1.386)\approx-13.8\ \text{kJ}.
$$

Negative: compression. Since $\Delta U=0$, the gas rejects $Q=-W=+13.8\ \text{kJ}$ *into* the surroundings — an exact mirror of expansion. Sanity: compressing into a quarter of the volume needs four times the (average) journey's pressure scale, and the logarithm neatly handles the varying resistance.
</details>

### 5. Adiabatic expansion, cold finish

One mole of monatomic gas at $300\ \text{K}$ expands adiabatically to eight times its volume. Find the final temperature and, per mole, $\Delta U$ and $W$.

<details><summary>Answer and reasoning</summary>

$\gamma=5/3$, so $\gamma-1=2/3$ and $T_fV^{\gamma-1}=\text{constant}$ gives $T_f=300\times8^{-2/3}=300/4=75\ \text{K}$.

Per mole: $\Delta U=C_V\,\Delta T=12.465\times(75-300)=-2805\ \text{J}\approx-2.8\ \text{kJ}$. With $Q=0$, $W=-\Delta U=+2.8\ \text{kJ}$. Cross-check with the work formula: $\frac{nR(T_i-T_f)}{\gamma-1}=\frac{8.31\times225}{2/3}=2805\ \text{J}$ — identical. An eightfold expansion at $\gamma=5/3$ quarters the absolute temperature: the cold finish is genuine.
</details>

### 6. Rectangular cycle, full accounting

$0.1\ \text{mol}$ of monatomic gas runs clockwise through $A(100\ \text{kPa},4.0\ \text{L})\to B(100\ \text{kPa},8.0\ \text{L})\to C(60\ \text{kPa},8.0\ \text{L})\to D(60\ \text{kPa},4.0\ \text{L})\to A$ (A→B and C→D isobaric, the other two isochoric). Find $W_{net}$, the heat absorbed, the heat rejected and the efficiency.

<details><summary>Answer and reasoning</summary>

Work: $W_{AB}=+100\times10^{3}\times4.0\times10^{-3}=+400\ \text{J}$, $W_{CD}=60\times10^{3}\times(-4.0\times10^{-3})=-240\ \text{J}$; net $W=160\ \text{J}$, matching the enclosed area $\Delta P\,\Delta V=40\ \text{kPa}\times4\ \text{L}=160\ \text{J}$.

Heat (using $\frac{C}{R}\times\Delta(PV)$; monatomic: isobaric $2.5$, isochoric $1.5$):
- A→B: $\Delta(PV)=P\,\Delta V=+400\ \text{J}\Rightarrow Q=+1000\ \text{J}$ (in).
- B→C: $\Delta(PV)=V\,\Delta P=8.0\times10^{-3}\times(-40\times10^{3})=-320\ \text{J}\Rightarrow Q=-480\ \text{J}$ (out).
- C→D: $\Delta(PV)=-240\ \text{J}\Rightarrow Q=-600\ \text{J}$ (out).
- D→A: $\Delta(PV)=4.0\times10^{-3}\times(+40\times10^{3})=+160\ \text{J}\Rightarrow Q=+240\ \text{J}$ (in).

$Q_{in}=1240\ \text{J}$, $Q_{out}=1080\ \text{J}$; and indeed $1240-1080=160\ \text{J}=W_{net}$. Efficiency $\eta=160/1240=0.129\approx13\ \%$.
</details>

### 7. Engine accounting

An engine absorbs $900\ \text{J}$ of heat per cycle and rejects $600\ \text{J}$. Find the work per cycle and the efficiency. Then express the smallest possible temperature ratio $T_c/T_h$ for such an engine.

<details><summary>Answer and reasoning</summary>

$W=900-600=300\ \text{J}$ per cycle; $\eta=300/900=0.33\approx33\ \%$ (equivalently $1-600/900$). For the engine to be physically possible, the second law requires $Q_c/Q_h\ge T_c/T_h$ in any reversible limit, so $T_c/T_h\le600/900=2/3$ at best: the reservoir temperature ratio can be no larger than the heat ratio of a reversible machine between them.
</details>

### 8. Carnot numbers

A Carnot engine runs between $600\ \text{K}$ and $400\ \text{K}$, absorbing $1500\ \text{J}$ per cycle. Find $\eta$, $W$ and $Q_c$.

<details><summary>Answer and reasoning</summary>

$\eta=1-\frac{400}{600}=\frac13\approx33\ \%$. $W=\frac13\times1500=500\ \text{J}$. $Q_c=1500-500=1000\ \text{J}$. Checks: $500+1000=1500\ \text{J}$; and $Q_c/Q_h=1000/1500=2/3=T_c/T_h$, the reversible signature.
</details>

### 9. Refrigerator price tag

An ideal refrigerator has its cold compartment at $260\ \text{K}$ and dumps heat into a $300\ \text{K}$ room. Compute the COP and the work required to remove $325\ \text{J}$ from the compartment, then the heat delivered to the room.

<details><summary>Answer and reasoning</summary>

$\beta=\frac{T_c}{T_h-T_c}=\frac{260}{40}=6.5$. Work: $W=325/6.5=50\ \text{J}$. Heat to the room: $Q_h=325+50=375\ \text{J}$. The ledger $Q_c+W=Q_h$ closes, and $\beta=6.5>1$ is legitimate — the denominator is work paid, not heat moved.
</details>

### 10. Referee a claim

An inventor claims a cyclic engine of $60\ \%$ efficiency operating between a $400\ \text{K}$ source and a $300\ \text{K}$ sink. Rule on the claim without building anything.

<details><summary>Answer and reasoning</summary>

The ceiling between these reservoirs is $\eta_{Carnot}=1-\frac{300}{400}=0.25$. No cyclic engine — reversible or not — may exceed it, so $60\ \%$ is impossible by a factor of $2.4$. (Watch the kelvin trap: in Celsius these reservoirs are $127\ ^\circ\text{C}$ and $27\ ^\circ\text{C}$, and the ratio must be taken in absolute temperature.) The first law alone cannot rule the claim out — only the second-law ceiling can, which is exactly why it exists.
</details>

## Self-check

You are ready to move on when you can:

- State the chapter's sign convention and apply $\Delta U=Q-W$ through multi-stage problems without a sign slip.
- Pick the governing process from a *physical description* — sealed tin, open piston, heat bath, burst tyre — before touching a formula.
- Quote $C_V$, $C_P$ and $\gamma$ for monatomic and diatomic gases and derive $C_P-C_V=R$ on demand.
- Compute work as a signed enclosed area on a $P$–$V$ diagram, for straight-line and curved paths alike.
- Close every cycle's ledger: $Q_{in}-|Q_{out}|=W_{net}$, computed two independent ways.
- Referee an efficiency claim against $1-T_c/T_h$ in kelvin, and price refrigeration with $\beta$.

Misses on 1–2 point to the first-law lesson; 3–5 to the specific-heats and processes lessons; 6 to the cycles lesson; 7–10 to the second-law and Carnot lessons.
