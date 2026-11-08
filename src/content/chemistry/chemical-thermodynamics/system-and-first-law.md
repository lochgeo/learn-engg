## Start by drawing a boundary

Thermodynamics is bookkeeping for energy. Before you write a single number, you must make one choice: what is the **system** — the small, well-defined piece of the universe whose energy you are going to track — and what is the **surroundings**, everything else. Real beakers, engines and cells are far too complicated to follow atom by atom, so the whole subject begins by drawing a boundary around a manageable chunk and asking only one question: what crosses it?

A **boundary** can be real (the glass of a beaker) or imaginary (the surface you draw around a reacting gas cloud), rigid or movable, adiabatic (no heat passes) or diathermal (heat passes freely). The kind of boundary you choose determines what the theory can say about your system.

## 1. Three kinds of systems

| System type | Matter may cross? | Energy may cross? | Practical picture |
| --- | --- | --- | --- |
| **Open** | yes | yes | a pot of water boiling without a lid — steam and heat both escape |
| **Closed** | no | yes | a sealed, stoppered flask in a warm water bath — only energy moves |
| **Isolated** | no | no | a perfectly insulated, rigid sealed vessel — an idealisation that a good thermos only approximates |

Nothing in the laboratory is truly isolated, but the idealisation is powerful: for an isolated system, the bookkeeping below becomes an exact balance with zero on one side.

## 2. Properties: intensive and extensive

A property is **extensive** if its value scales with the amount of material, and **intensive** if it does not. The test is simple: split the system into two parts and compare each part's value with the whole.

- Extensive: volume, mass, amount of substance $n$, internal energy $U$, enthalpy $H$. Each half has half the value.
- Intensive: temperature $T$, pressure $P$, density, concentration. Each half is unchanged.

Dividing one extensive property by another produces an intensive one: $V/n$ is the molar volume. This matters because tabulated thermodynamic data are quoted per mole, so they are intensive and do not depend on how much sample you happen to have.

## 3. State functions and path functions

A **state function** depends only on the current state (given by $P$, $V$, $T$ and composition), not on how the system got there. Pressure, temperature, volume, internal energy and enthalpy are all state functions. The altitude analogy is exact: the height difference between base camp and summit is fixed by the endpoints, while the distance you walked depends on the route.

**Heat** $q$ and **work** $w$ are **path functions**: they are amounts of energy *in transit*, and different routes between the same two states transfer different amounts. A gas taken from state 1 to state 2 can be heated strongly while doing much expansion work, or expanded against a smaller opposing force while taking in less heat. The endpoints are identical; $q$ and $w$ are not. So never say "the system contains heat" — it contains internal energy, and heat is what flows across the boundary when a temperature difference drives it.

## 4. Internal energy and the first law

The **internal energy** $U$ is the total microscopic energy of the system: translational, rotational and vibrational molecular motion, electronic and nuclear energy, and intermolecular potential energy. Its absolute value is unknowable and unnecessary; changes $\Delta U$ are what we measure.

The **first law of thermodynamics** is energy conservation applied to a system:

$$
\Delta U = q + w,
$$

using the chemistry sign convention: $q>0$ when heat flows **into** the system, and $w>0$ when work is done **on** the system. Both $q$ and $w$ carry the unit joule. A process cannot create energy: any heat a system gains minus the work it gives back as expansion must appear inside it as a change in $U$.

For expansion against a constant external pressure, the work term is

$$
w = -P_{\text{ex}}\,\Delta V.
$$

A gas that expands ($\Delta V>0$) pushes back against its surroundings, so it does work **on** them and $w<0$. Compression gives $w>0$. If the external pressure varies along the way, the general result is $w=-\int P_{\text{ex}}\,dV$; and against a vacuum ($P_{\text{ex}}=0$, free expansion) the work is exactly zero even though the volume changes. For one mole of an ideal gas held at constant temperature, $\Delta U=0$ because ideal-gas internal energy depends only on temperature.

Four special cases are worth memorising as a table, not as sentences:

| Condition | Consequence |
| --- | --- |
| cyclic process (system returns to its state) | $\Delta U=0$, so $q=-w$ |
| adiabatic ($q=0$) | $\Delta U=w$ — compression warms a gas |
| isochoric, rigid vessel, only $P V$ work | $w=0$, so $\Delta U=q_V$ |
| isolated | $\Delta U=0$ always |

## 5. Worked example: heating a gas that pushes back

A gas absorbs $145\ \text{J}$ of heat and expands from $1.0\ \text{L}$ to $3.0\ \text{L}$ against a constant external pressure of $2.0\ \text{atm}$. Find $\Delta U$.

**Step 1 — expansion work.** With $\Delta V = 3.0 - 1.0 = 2.0\ \text{L}$,

$$
w = -P_{\text{ex}}\Delta V = -(2.0\ \text{atm})(2.0\ \text{L}) = -4.0\ \text{L·atm}.
$$

Convert with $1\ \text{L·atm} = 101.3\ \text{J}$: $w = -4.0 \times 101.3 = -405\ \text{J}$.

**Step 2 — first law.** With $q = +145\ \text{J}$,

$$
\Delta U = q + w = 145 - 405 = -260\ \text{J}.
$$

**Sanity check.** The system loses energy even though heat flowed into it, because it did far more work on the surroundings than the heat it received. The sign of the answer tells that story consistently: a net outflow. A positive answer here would have meant the gas somehow kept more energy than came in — impossible under the first law.

<learning-block type="mistake" title="Signs and 'heat content'">

- **Mixing the two work conventions.** Chemistry uses $w=-P_{\text{ex}}\Delta V$ (work done *on* the system); much physics text says "work done *by* the gas", which is $+P_{\text{ex}}\Delta V$. The magnitude is the same, the sign is not. State your convention at the start and keep it through the whole problem.
- **Confusing heat with internal energy.** $q$ is energy crossing a boundary because of a temperature difference. A hot object does not "contain more heat"; it contains more energy per degree of its thermal motion and a higher temperature.
- **Forgetting that free expansion does no work.** Expanding into a vacuum changes $V$ but gives $w=0$, because there is nothing to push against.

</learning-block>

## Try it yourself

**A.** A system releases $50\ \text{J}$ of heat while $80\ \text{J}$ of work is done on it. Find $\Delta U$.

<details><summary>Show the reasoning</summary>

With the chemistry convention, $q=-50\ \text{J}$ and $w=+80\ \text{J}$, so $\Delta U = q + w = -50 + 80 = +30\ \text{J}$. Energy leaves as heat but enters as work; the internal energy rises by the difference.
</details>

**B.** An insulated rigid container holds a reacting mixture. What can you say about $q$, $w$ and $\Delta U$?

<details><summary>Show the reasoning</summary>

Insulation gives $q=0$; a rigid container gives $\Delta V=0$, hence $w=-P_{\text{ex}}\Delta V=0$. The first law then forces $\Delta U=0$: the reaction can only rearrange energy internally (e.g. chemical to thermal), raising the temperature, but the total internal energy is unchanged.
</details>

**C.** Classify each: temperature, volume, internal energy, heat, density.

<details><summary>Show the reasoning</summary>

Temperature, density: **intensive** properties. Volume, internal energy: **extensive** state functions. Heat: neither — it is a path function, an energy in transit, not a property of a state at all.
</details>

## Remember

- Define the system and its boundary before choosing an equation; open, closed and isolated differ in what may cross.
- The split test separates intensive from extensive: halve the system and see what halves.
- $U$, $H$, $P$, $V$, $T$ are state functions; $q$ and $w$ are paths, not contents.
- $\Delta U = q + w$ with $q>0$ into the system and $w>0$ on the system, and $w=-P_{\text{ex}}\Delta V$ for expansion.
- $1\ \text{L·atm} = 101.3\ \text{J}$; forgetting this conversion is a classic way to be wrong by three orders of magnitude.

The next module builds on the isochoric row of the special-case table: most chemistry happens in open vessels at constant pressure, and that special case earns its own state function — enthalpy.
