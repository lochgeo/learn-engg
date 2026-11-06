## One equation, many machines

Why does water sitting still in a four-metre burst from a hole in the tank's side? Why does a spray gun draw liquid *upward* into a stream of fast air? Both are the same trade-off — in steady flowing fluid, gaining speed costs pressure, and gaining height costs pressure too. This module derives that statement rigorously as energy conservation written in pressure units, then puts it to work on meters, jets and wings.

## 1. Deriving Bernoulli's equation

Consider steady, incompressible, non-viscous flow along a narrow tube of streamlines (a "stream tube"). In a small time $\Delta t$, the fluid advances: at the inlet (cross-section area $A_1$, pressure $p_1$, speed $v_1$, height $y_1$) a slug of length $v_1\Delta t$ enters; at the outlet ($A_2$, $p_2$, $v_2$, $y_2$) a slug of length $v_2\Delta t$ leaves.

The pressure forces do work on the slab between: $W_{\text{in}}=p_1A_1(v_1\Delta t)$ at the back, $-p_2A_2(v_2\Delta t)$ at the front (the outlet force opposes the advance). Continuity says the entering and leaving slugs have equal volume, $V=A_1v_1\Delta t=A_2v_2\Delta t$, equal mass $m=\rho V$. Total work by the surroundings on the fluid:

$$
W=(p_1-p_2)V.
$$

That work changes kinetic and potential energy of the fluid that took the trip:

$$
W=\Big(\tfrac12mv_2^2+mgy_2\Big)-\Big(\tfrac12mv_1^2+mgy_1\Big).
$$

Substitute $m=\rho V$ and divide by $V$:

$$
p_1+\tfrac12\rho v_1^2+\rho gy_1=p_2+\tfrac12\rho v_2^2+\rho gy_2.
$$

The common value anywhere along that streamline is Bernoulli's constant:

$$
\boxed{p+\tfrac12\rho v^2+\rho gy=\text{constant}}.
$$

Read it as the work–energy theorem for a fluid, with all energies divided by volume: $p$ is the flow energy of pressure, $\tfrac12\rho v^2$ the kinetic energy per volume (**dynamic pressure**), $\rho gy$ the potential energy per volume. The title qualifications matter every single time you use the equation:

- **steady** — points compared lie on one fixed streamline (or stream tube), at one instant's pattern of flow;
- **incompressible** — $\rho$ the same at both ends (fine for liquids; fine for air only well below its sound speed);
- **non-viscous** — no work dissipated against internal friction: wherever viscosity matters (pipes of appreciable length, small $Re$), Bernoulli *overestimates* the surviving pressure difference;
- **no pumps, turbines or heat** — nothing adds or drains mechanical energy between the two points.

## 2. First application: the level pipe

Horizontal flow ($y_1=y_2$) makes the potential term drop out:

$$
p_1+\tfrac12\rho v_1^2=p_2+\tfrac12\rho v_2^2
\qquad\Rightarrow\qquad
p_1-p_2=\tfrac12\rho\left(v_2^2-v_1^2\right).
$$

An arrester of speed is a pressure raiser; a constriction is a pressure sink. Combined with continuity, this pair does most of the quantitative Bernoulli work in exams.

<learning-block type="example" title="Worked example: a venturi meter">

A venturi meter is a pipe that narrows smoothly to a throat and joins a manometer between the wide section and the throat; the pressure *drop* measures the flow. Water flows through a level pipe whose wide section has area $A_1=8.0\ \text{cm}^2$ at speed $v_1=1.0\ \text{m/s}$; the throat is $A_2=2.0\ \text{cm}^2$. Take $\rho=1000\ \text{kg/m}^3$.

Continuity: $v_2=v_1A_1/A_2=1.0\times4=4.0\ \text{m/s}$.

Pressure difference:

$$
p_1-p_2=\tfrac12\rho\left(v_2^2-v_1^2\right)
=\tfrac12\times1000\times(16-1)=7.5\times10^3\ \text{Pa}.
$$

That is enough to hold up a mercury column of only $\ (7.5\times10^3)/(13600\times9.8)=5.6\ \text{cm}$ — a conveniently small manometer deflection. Rearranged generally, the meter returns the wide-section speed

$$
v_1=A_2\sqrt{\frac{2\,(p_1-p_2)}{\rho\,(A_1^2-A_2^2)}},
$$

which you can verify with our numbers: $A_1^2-A_2^2=6.0\times10^{-7}\ \mathrm{m^4}$, so $v_1=2.0\times10^{-4}\times\sqrt{15/6.0\times10^{-7}}=2.0\times10^{-4}\times5.0\times10^3=1.0\ \mathrm{m/s}$ — the speed we started from. The level-pipe shortcut is the working tool in most problems.

</learning-block>

## 3. Second application: Torricelli's efflux law

A tank stands open to the atmosphere with a free surface at height $h$ above a small hole in the side. Take one streamline from the surface (point 1) to the jet just outside the hole (point 2), both at pressure $p_{\text{atm}}$ (surface open; jet in open air).

Bernoulli between 1 and 2 (levels: $y_1$, $y_2=y_1-h$):

$$
p_{\text{atm}}+\tfrac12\rho v_1^2+\rho gy_1
=p_{\text{atm}}+\tfrac12\rho v_2^2+\rho g(y_1-h).
$$

The atmospheric terms cancel. If the tank's surface area is much bigger than the hole's, continuity makes $v_1$ tiny — treat it as zero. Then

$$
\rho gy_1=\tfrac12\rho v_2^2+\rho gy_1-\rho gh
\qquad\Rightarrow\qquad
v_2=\sqrt{2gh}.
$$

This is **Torricelli's law**: the jet leaves at the speed of a freely falling body dropped through the height of liquid above the hole. The idealisation is visible: viscosity and surface tension are ignored, and the "top surface at rest" assumption fails for a small tank, where the surface visibly sinks as it drains.

<learning-block type="example" title="Worked example: a tank with a leaking side">

Water stands $5.0\ \text{m}$ deep in a large tank; a $1.0\ \text{cm}^2$ hole is punched $0.50\ \text{m}$ *above* the flat bottom, so $h$ from surface to hole is $4.5\ \text{m}$. Take $g=9.8\ \text{m/s}^2$.

Efflux speed: $v=\sqrt{2gh}=\sqrt{2\times9.8\times4.5}=\sqrt{88.2}=9.4\ \text{m/s}$.

Volume leaking per second: $Q=Av=1.0\times10^{-4}\ (9.4)\approx9.4\times10^{-4}\ \mathrm{m^3/s}\approx0.94\ \mathrm{L/s}$. Sanity: a drop of only $0.5\ \mathrm{m}$ below the surface would give $v=\sqrt{9.8}=3.1\ \mathrm{m/s}$ — a three-fold speed change for a ten-fold depth change, exactly as $v\propto\sqrt{h}$ predicts.

</learning-block>

## 4. Aerofoils and dynamic lift

Move a solid through a fluid and the fluid must hurry around it. For the top and bottom routes around a tilted, cambered wing (an **aerofoil**), the average speed over the top is greater than over the bottom; by Bernoulli, the top pressure is *lower*, the bottom pressure *higher*, and the imbalance is an upward **dynamic lift**. The honest bigger picture: lift is generated by the wing deflecting air *downward* (momentum conservation: give the air a downward push and it gives you an upward one) — Bernoulli describes the pressure field that produces that push. Both descriptions are two views of the same Newton-and-Bernoulli story; the popular "air parcels must rejoin in equal time" claim is a myth (equal transit is false — the actual speed increase comes from circulation around the cambered, tilted wing) and should never be written in an answer.

The same pressure argument shows up:

- on a **spinning ball** (Magnus effect): the side moving with the airflow sees faster relative flow, lower pressure, and the ball curves that side;
- on a **roof** in a gale: fast air over the top, still air inside, net upward pressure difference that can peel the roof off;
- in an **atomiser**: fast air at the tube's mouth reduces pressure enough to draw liquid up the tube into the jet.

Dynamic lift scales like $\sim\tfrac12\rho v^2 A$ times a dimensionless coefficient set by the geometry — speed, area and fluid density matter, and tilting the wing more increases lift until the flow separates (the **stall**), at which point Bernoulli along one clean streamline quietly stops applying.

<learning-block type="mistake" title="Bernoulli where Bernoulli does not live">

Four red flags that you are misusing Bernoulli: (1) comparing points on *different streamlines* when the flow varies from line to line (a spinning ball's two sides are different streamlines of a swirling flow — treat the result as qualitative); (2) using it across a pump, propeller or fan: these add energy, so the constant differs on either side; (3) ignoring viscosity in a long, thin, slow pipe, where friction eats the pressure excess; (4) demanding that "higher speed ⇒ lower pressure" as an unconditional fact — the correct statement is that *at the same height, on the same ideal streamline*, speed and static pressure trade. Every quantitative Bernoulli answer should be prefaced by which idealisation you are invoking.

</learning-block>

## Try it yourself

**A. Water flows at $3.0\ \text{m/s}$ through a level pipe at $101\ \text{kPa}$. It enters a section where the pipe's area is half. Find the new speed and pressure. Take $\rho=1000\ \text{kg/m}^3$.**

<details><summary>Show the reasoning</summary>

Half the area ⇒ double the speed: $v_2=6.0\ \mathrm{m/s}$. Then $\Delta p=-\tfrac12\rho(v_2^2-v_1^2)=-500(36-9)=-1.35\times10^4\ \mathrm{Pa}$. So $p_2=101\ \mathrm{kPa}-13.5\ \mathrm{kPa}=87.5\ \mathrm{kPa}$ (absolute). The constriction buys speed and pays in pressure.
</details>

**B. A water tank's surface stands $0.80\ \text{m}$ above a small side hole. Find the efflux speed. Use $g=9.8\ \mathrm{m/s^2}$.**

<details><summary>Show the reasoning</summary>

$v=\sqrt{2gh}=\sqrt{2\times9.8\times0.80}=\sqrt{15.68}=3.96\approx4.0\ \mathrm{m/s}$ — like a stone dropped from $0.80\ \mathrm{m}$.
</details>

**C. In a level venturi, the wide-section speed is $2.0\ \mathrm{m/s}$ and the throat speed is $6.0\ \mathrm{m/s}$. What pressure difference does the manometer see? ($\rho=1000\ \mathrm{kg/m^3}$.)**

<details><summary>Show the reasoning</summary>

$\Delta p=\tfrac12\rho(v_2^2-v_1^2)=500(36-4)=1.6\times10^4\ \mathrm{Pa}=16\ \mathrm{kPa}$ — the wide section is at the higher pressure.
</details>

## Remember

- Bernoulli's equation $p+\tfrac12\rho v^2+\rho gy=\text{const}$ is the work–energy theorem per unit volume along one ideal streamline.
- Its licence: steady, incompressible, non-viscous flow, no machines in between.
- Level flow: pressure falls where speed rises, $\Delta p=\tfrac12\rho(v_2^2-v_1^2)$.
- Torricelli: $v=\sqrt{2gh}$ for efflux at depth $h$ below a still, open surface.
- Dynamic lift is a real pressure effect (and a momentum story); never cite "equal transit time".

Ideal fluids have no friction; real fluids do, and it controls everything from raindrops to pipelines. The next module introduces viscosity quantitatively — and obtains the terminal velocity of anything falling through anything.
