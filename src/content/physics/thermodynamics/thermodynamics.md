## A hot question about energy

A power station burns coal, boils water, spins a turbine and sends electricity down the wire — yet throws away more energy as low-grade heat than it delivers as electricity. Why can no engineer close that gap completely? Thermodynamics exists to answer questions like this. It tracks energy in two currencies only, **heat** and **work**, and states which transactions between a system and its surroundings nature permits.

Two laws carry the chapter. The first law is energy conservation written for a system. The second law limits the *direction* and the *usefulness* of those flows. Both rest on careful bookkeeping, and bookkeeping begins with definitions: what counts as the system, and what the words heat, work and internal energy actually refer to.

## 1. System, surroundings and boundary

Thermodynamics always studies a chosen portion of matter. Everything else is the **surroundings**, and the real or imaginary surface separating the two is the **boundary**.

| Kind of system | Exchanges with surroundings | Example |
| --- | --- | --- |
| Open | matter and energy | gas escaping a cylinder through a leak |
| Closed | energy only | gas sealed behind a movable piston |
| Isolated | nothing | gas sealed in a rigid, perfectly insulating container |

Two wall properties come up constantly. A wall that permits heat flow is **diathermic**; a wall that blocks it is **adiabatic**. A rigid wall fixes the volume; a movable piston lets the system push the surroundings back and do work.

Name the system and its boundary before any calculation — heat and work have no meaning until this choice is made.

## 2. Temperature and the zeroth law

Put two systems in contact through a diathermic wall and wait: the net flow of energy stops, every observable settles, and the pair is in **thermal equilibrium**. Equilibrium with respect to heat exchange defines a new physical quantity: **temperature**. Two systems at the same temperature are in thermal equilibrium regardless of what they are made of.

The **zeroth law** makes this usable: if A is separately in thermal equilibrium with C, and B is also in equilibrium with C, then A and B are in equilibrium with each other. This is the licence for every thermometer — the mercury reading lets disparate objects be compared through one common reference.

With temperature defined, the equilibrium state of a fixed amount of gas is pinned down by a few **state variables**: pressure $P$, volume $V$ and temperature $T$, linked by the gas law. Any property fixed once the state is fixed is called a **state function**.

## 3. State functions versus path functions

Some properties describe *where the system is*; others describe *how it got there*.

| State functions | Path functions |
| --- | --- |
| Pressure $P$, volume $V$, temperature $T$, internal energy $U$ | Heat $Q$, work $W$ |
| Depend only on the initial and final states | Depend on the actual route followed |
| Belong to the state | Belong to the *process* |

A mountain analogy: the altitude difference between base camp and summit is the same however you climb, but the distance walked depends on the route. Altitude behaves like a state function; distance walked does not. In advanced texts, small changes of state functions are written $dP$, $dV$, $du$, while small heat and work transfers are written $\delta Q$, $\delta W$ — the $\delta$ is a reminder that no "total heat contained in the gas" exists to be differentiated.

This distinction is not pedantry. It is why engines can be designed at all: the next lesson shows a gas taken between the same two states by different routes, exchanging different amounts of heat and work each time.

## 4. Internal energy

A gas stores energy microscopically: kinetic energy of moving, rotating and vibrating molecules, plus potential energy of their mutual attractions. The total, measured in the frame in which the gas as a whole is at rest, is the **internal energy** $U$.

For an ideal gas there are no intermolecular attractions, so $U$ is purely kinetic and depends **only on temperature**:

$$
U=\frac{f}{2}nRT,
$$

where $n$ is the number of moles and $f$ is the number of molecular degrees of freedom ($f=3$ for a monatomic gas; the specific-heats lesson develops this fully). What matters here: $P$ and $V$ can change while $U$ stays put — an isothermal change — confirming that internal energy is a property of the state, never of the path.

## 5. Heat and work: the two transfer channels

**Heat** is energy crossing the boundary because of a temperature difference. **Work** is energy crossing the boundary by a macroscopically organised push — a piston moving, a stirrer turning. Neither is something the system *has*; both exist only during transfer. A closed system's internal energy can change through exactly these two channels.

The sign convention used throughout this chapter:

| Symbol | Positive when | Negative when |
| --- | --- | --- |
| $Q$ | heat flows **into** the system | heat flows **out** of the system |
| $W$ | work is done **by** the system (usually expansion) | work is done **on** the system (usually compression) |

<learning-block type="mistake" title="Nothing in a gas is made of heat">

A common error is to say a hot gas "contains a lot of heat". It does not. The gas *contains internal energy*; heat is the name for energy *while it crosses the boundary* because of a temperature difference. Once a joule has entered the gas, the gas cannot tell whether it arrived as heat or as work: only the resulting change in $U$ is recorded. The same joule could have been delivered by either channel — that is the physical core of path dependence.

</learning-block>

## Worked example

Gas in a cylinder absorbs $400\ \text{J}$ of heat while expanding and doing $150\ \text{J}$ of work on the piston. The first stage of the ledger (the first law itself is developed properly in the next lesson) gives

$$
\Delta U_1=Q-W=400-150=+250\ \text{J}.
$$

The heater is switched off and the wall made adiabatic. The surroundings push the piston in, doing $60\ \text{J}$ of work on the gas. Since $Q=0$ and the work done *by* the gas is $W=-60\ \text{J}$,

$$
\Delta U_2=0-(-60)=+60\ \text{J}.
$$

**Sanity check.** Adding the stages gives $\Delta U=310\ \text{J}$. Adding the transfers instead: $Q_{net}=+400\ \text{J}$ and $W_{net}=150-60=90\ \text{J}$, so $\Delta U=400-90=310\ \text{J}$. Both routes agree, as they must — $U$ cares only about the states.

## Try it yourself

**A.** In an adiabatic compression the surroundings do $90\ \text{J}$ of work on a gas. Find $\Delta U$ under the chapter's sign convention.

<details><summary>Show the reasoning</summary>

$Q=0$ because the wall is adiabatic, and the work done *by* the gas is $W=-90\ \text{J}$. Then $\Delta U=Q-W=0-(-90)=+90\ \text{J}$: the gas stores exactly the energy pushed into it.
</details>

**B.** A gas loses $200\ \text{J}$ of heat while having $75\ \text{J}$ of work done on it. Find $\Delta U$.

<details><summary>Show the reasoning</summary>

$Q=-200\ \text{J}$ and $W=-75\ \text{J}$. Hence $\Delta U=-200-(-75)=-125\ \text{J}$. The system loses more energy than it gains, so the internal energy falls. Sanity check: without the $75\ \text{J}$ pushed in, the loss would be the full $200\ \text{J}$; the incoming work softens the loss to $125\ \text{J}$, exactly what the signed arithmetic produces.
</details>

**C.** Classify each quantity as a state function or a path function: $P$, $V$, $T$, $U$, $Q$, $W$.

<details><summary>Show the reasoning</summary>

State functions: $P$, $V$, $T$ and $U$ — fixed once the equilibrium state is fixed. Path functions: $Q$ and $W$ — meaningful only for the process connecting two states; the same endpoints can be reached with many different values of $Q$ and $W$.
</details>

## Remember

- Name the system and its boundary first; heat and work are defined relative to that boundary.
- Temperature earns its meaning through the zeroth law: objects at the same temperature exchange no net heat.
- $P$, $V$, $T$ and $U$ belong to states; $Q$ and $W$ belong to paths.
- For an ideal gas, $U$ depends on temperature alone.
- The chapter-wide sign convention is $\Delta U=Q-W$, with $W$ the work done *by* the system.

## Where next

This bookkeeping becomes a law in its own right: $\Delta U=Q-W$, the **first law of thermodynamics**. The next lesson shows why work depends on the path, and applies the law to the four classic processes.
