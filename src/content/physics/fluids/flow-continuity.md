## Proof that smoke knows calculus

Watch smoke rise from an incense stick: close to the tip it climbs in smooth, silent threads; a hand-span higher it breaks into wild curls. Same air, same chimney, different flow regime — and every quantitative statement about moving fluid (Bernoulli's equation coming next) is only valid in the smooth regime. This module defines the smooth regime, then counts the fluid crossing every cross-section: that bookkeeping is the continuity equation.

## 1. The ideal-fluid model

Real fluids have a long list of behaviours. To get usable equations, physics idealises as follows: an **ideal fluid** is incompressible (fixed density $\rho$), non-viscous (no internal friction), and — for a given problem — flows steadily. Each assumption is a licence with limits: water and low-speed gases are close to incompressible; air moving much slower than its $\sim300\ \text{m/s}$ sound speed also behaves nearly incompressibly. Viscosity is where the ideal description needs repair, which is exactly what module 6 does.

## 2. Streamlines, steady flow, turbulence

In **steady flow**, the velocity at each fixed point of space does not change with time: if you stand at a bend of a canal, every parcel passing you takes the speed the bend dictates, though individual parcels change speed as they travel. The curves traced by these parcels are the **streamlines**; in steady flow they are fixed in space, and fluid flows *along* them — never across one. Two adjacent streamlines never cross: that would mean two different directions for the flow at the same point and instant.

Break the conditions and the motion **turbulent**: streamlines tangle, eddies and whirls appear, and properties fluctuate randomly at every point. Past blunt objects, after sudden widenings of a pipe, and at high speeds, turbulence sets in. An old demonstration returns here: near the incense tip the speed is low and the rise is a smooth thread (streamline flow); higher up, having accelerated and spread, the flow is faster and wider — and turbulent.

A fluid element flowing along a streamline in steady flow keeps a bounded, smooth existence; that is what makes energy bookkeeping (module 5) possible at all.

## 3. Volume flow rate and the continuity equation

Define $Q$ as the **volume flow rate** — how many cubic metres pass a cross-section each second. In time $t$, fluid moving at speed $v$ through area $A$ advances $vt$, so it sweeps a volume $A\,vt$:

$$
Q=Av.
$$

Units check: $\text{m}^2\times\text{m/s}=\text{m}^3/\text{s}$. Q is sometimes written as a *Q* for quantity of flow; irrigators and paramedics both quote it as litres per second, where $1\ \mathrm{m^3/s}=1000\ \mathrm{L/s}$.

Now the key claim: for incompressible steady flow through a tube made of streamlines (from one cross-section to another), no fluid is created, destroyed, or stored in between. What enters per second must leave per second:

$$
Q_1=Q_2
\qquad\Rightarrow\qquad
A_1v_1=A_2v_2.
$$

This is the **equation of continuity**. Narrow the tube and the speed rises proportionally: water accelerates through a nozzle's constriction for the same reason a traffic lane narrows but cars keep the same spacing. The qualitative takeaway used constantly in problems: **velocity is inversely proportional to cross-sectional area** (strictly, density stays constant along the tube).

If instead density can vary (compressible gas), the conserved quantity is *mass*:

$$
\rho_1A_1v_1=\rho_2A_2v_2,
$$

which reduces to the volume form when $\rho_1=\rho_2$.

<learning-block type="example" title="Worked example: a garden hose narrows">

Water flows at $v_1=4.0\ \text{m/s}$ through a hose of radius $r_1=2.0\ \text{cm}$; the end narrows to $r_2=1.0\ \text{cm}$. Find the jet speed and the flow rate. Use $\rho=1000\ \text{kg/m}^3$.

Careful with radius versus area. $A_1=\pi(0.020)^2=1.257\times10^{-3}\ \mathrm{m^2}$; $A_2=\pi(0.010)^2=3.14\times10^{-4}\ \mathrm{m^2}$. The areas are in ratio $4:1$ (radius halved ⇒ area quartered). Continuity:

$$
v_2=v_1\frac{A_1}{A_2}=4.0\times4=16\ \text{m/s}.
$$

Flow rate: $Q=A_1v_1=1.257\times10^{-3}\times4.0\approx5.0\times10^{-3}\ \text{m}^3/\text{s}$, i.e. about $5\ \text{L/s}$. Check: at the nozzle, $Q_2=3.14\times10^{-4}\times16\approx5.0\times10^{-3}\ \mathrm{m^3/s}$ — same value, as demanded.

</learning-block>

## 4. When does it switch? The Reynolds number idea

Whether flow is smooth or turbulent is not a matter of taste: it is decided by a dimensionless ratio comparing how much a disturbance is stretched out (inertia) against how much it is damped (viscosity). For flow at speed $v$ past an object of size $D$ in a fluid of density $\rho$ and viscosity $\eta$,

$$
Re=\frac{\rho v D}{\eta}.
$$

Low $Re$ — small, slow, thick — means viscosity wins and flow is orderly. High $Re$ — large, fast, thin — means inertia wins and eddies nucleate. For flow through a smooth pipe the practical thresholds are of this order: $Re\lesssim2000$ is laminar, $Re\gtrsim3000$ is turbulent, and between them the flow wavers untidily (a **transitional** regime you should not try to model precisely for exams).

<learning-block type="example" title="Worked example: regimes of everyday flows">

Water ($\eta=1.0\times10^{-3}\ \mathrm{Pa\,s}$, $\rho=1000\ \mathrm{kg/m^3}$) in a $1.5\ \text{cm}$ pipe at $1.0\ \text{m/s}$:

$$
Re=\frac{1000\times1.0\times0.015}{1.0\times10^{-3}}=1.5\times10^4\quad\Rightarrow\quad\text{turbulent}.
$$

The same water creeping at $0.10\ \text{mm/s}$ through a capillary of $5.0\times10^{-4}\ \mathrm{m}$ radius ($D=10^{-3}\ \mathrm{m}$):

$$
Re=\frac{1000\times1.0\times10^{-4}\times1.0\times10^{-3}}{1.0\times10^{-3}}=0.10\quad\Rightarrow\quad\text{strongly laminar}.
$$

Blood in a typical large artery lands between these extremes; anything that roughens a surface or widens a channel abruptly helps the eddies — which is one reason streamlining matters in pipes, catheters and pump design.

</learning-block>

<learning-block type="mistake" title="Radius, area, and flow rate">

The classic continuity slips in rough order of appearance: (1) treating a halved *radius* as a halved *area* — you get a factor of $2$ where the truth is $4$; (2) comparing two pipes of different diameters and calling that two different flow rates — continuity fixes $Q$ they must share; (3) requiring energy conservation inside the continuity argument — none is claimed; continuity is pure bookkeeping of volume, and energy accounting is Bernoulli's job.

</learning-block>

## Try it yourself

**A. Two streams merge in a Y-junction: one pipe of area $3.0\ \text{cm}^2$ carries water at $2.0\ \text{m/s}$, the other, equal area, at $3.0\ \text{m/s}$. They join into a pipe of area $2.0\ \text{cm}^2$. Find the exit speed.**

<details><summary>Show the reasoning</summary>

Add the flow rates: $Q_1=3.0\times10^{-4}\times2.0=6.0\times10^{-4}\ \mathrm{m^3/s}$; $Q_2=3.0\times10^{-4}\times3.0=9.0\times10^{-4}\ \mathrm{m^3/s}$. Total $Q=1.5\times10^{-3}\ \mathrm{m^3/s}$. Exit: $v=Q/A=1.5\times10^{-3}/(2.0\times10^{-4})=7.5\ \mathrm{m/s}$.
</details>

**B. Oil of relative density $0.80$ flows through a pipe that expands from radius $2.0\ \text{cm}$ to $5.0\ \text{cm}$. Entry speed is $4.0\ \text{m/s}$. Find the exit speed and the mass flow rate.**

<details><summary>Show the reasoning</summary>

Area ratio $(5.0/2.0)^2=6.25$, so $v_2=4.0/6.25=0.64\ \mathrm{m/s}$. Mass flow rate $\dot m=\rho Av$ with $\rho=800\ \mathrm{kg/m^3}$: $\dot m=800\times\pi(0.02)^2\times4.0=800\times1.257\times10^{-3}\times4.0\approx4.0\ \mathrm{kg/s}$ — constant along the pipe, by mass conservation.
</details>

**C. Air ($\eta=1.8\times10^{-5}\ \mathrm{Pa\,s}$, $\rho=1.2\ \mathrm{kg/m^3}$) blows at $25\ \text{m/s}$ past a car of frontal width $1.5\ \text{m}$. Estimate $Re$ (taking $D=1.5\ \mathrm{m}$) and state the regime.**

<details><summary>Show the reasoning</summary>

$Re=1.2\times25\times1.5/(1.8\times10^{-5})=45/1.8\times10^{-5}=2.5\times10^6$ — deeply turbulent. Steady-looking smooth flow of air past a car is a feeling, not a reality; streamlining tries to tame the wake it must leave behind.
</details>

## Remember

- Steady flow means fixed streamlines; fluid travels *along* them, never across.
- Volume flow rate $Q=Av$ is constant through every cross-section of an incompressible steady stream: $A_1v_1=A_2v_2$.
- Halving a *radius* quarters the *area* and quadruples the speed.
- For compressible flow, conserve mass: $\rho_1A_1v_1=\rho_2A_2v_2$.
- $Re=\rho vD/\eta$ predicts the regime; under $\sim2000$ in a pipe, laminar; over $\sim3000$, turbulent.

Continuity says speed rises in a constriction. What happens to the *pressure* there, and what does that trade-off explain? The next module develops the energy argument that answers it — Bernoulli's equation.
