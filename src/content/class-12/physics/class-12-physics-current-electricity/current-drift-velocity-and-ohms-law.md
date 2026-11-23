## A lamp that lights before the electrons arrive

Close a switch and a lamp across the room lights almost at once. The free electrons already inside the filament, however, drift along it at a fraction of a millimetre per second. The explanation is that the electric field is set up throughout the circuit at nearly the speed of light, so electrons everywhere begin to drift together. Current is the **rate at which charge crosses a section**; it is not the speed of an individual carrier. Keeping those two ideas apart removes most of the confusion in this chapter.

## 1. Current and current density

If charge $\Delta Q$ crosses a chosen cross-section of a conductor in time $\Delta t$, the average current is

$$
I=\frac{\Delta Q}{\Delta t}.
$$

For a varying flow, take the limit: $I=dQ/dt$. The SI unit is the **ampere**, $1\ \text{A}=1\ \text{C/s}$.

By convention, current points in the direction in which **positive** charge would move: from the positive terminal of a source, through the external circuit, back to the negative terminal. In a metal the moving charges are electrons, so the electron flow is opposite to the conventional current. Both descriptions give the same currents in the equations, provided you choose one and stay with it.

A current has a direction along a wire, but it is not a vector in the sense of forces. At a junction, currents add as ordinary numbers; you do not resolve them into components along axes.

The **current density** describes how concentrated the current is over the cross-section:

$$
j=\frac{I}{A},
$$

with SI unit $\text{A/m}^2$. It points along the conventional current. For a uniform wire the current density is the same across the section; near a sharp constriction it is larger where the wire is thinner.

## 2. Drift velocity

Free electrons in a metal move rapidly in random directions, with speeds around $10^6\ \text{m/s}$, but the random directions cancel and there is no net flow. When an electric field $\vec E$ is applied, each electron also accelerates in the direction opposite to $\vec E$ between collisions. Collisions with the lattice randomise the motion, so the electron does not accelerate without limit; it acquires a small average velocity along the wire called the **drift velocity** $\vec v_d$.

To relate drift velocity to current, count the charge crossing a section. Suppose $n$ carriers per unit volume each carry charge magnitude $e$ and drift with speed $v_d$. In time $\Delta t$ they move a distance $v_d\Delta t$, so all carriers inside a cylinder of length $v_d\Delta t$ cross the section:

$$
\Delta Q = n\,A\,v_d\Delta t\,e.
$$

Dividing by $\Delta t$ gives

$$
I=nAev_d.
$$

For electrons, $\vec v_d$ points opposite to the conventional current, but the magnitude relation above is unchanged. The same equation applies to positive or negative carriers once $e$ is taken as the magnitude of the carrier charge.

Because $n$ is enormous in a metal, a small drift speed still means a large current. In copper, $n\approx8.5\times10^{28}\ \text{m}^{-3}$.

## 3. Ohm's law

For many conductors at constant temperature, the potential difference across the conductor is proportional to the current through it:

$$
V\propto I \qquad\Longrightarrow\qquad V=IR.
$$

The constant $R$ is the **resistance**, measured in **ohms**:

$$
1\ \Omega=1\ \text{V/A}.
$$

A graph of $V$ against $I$ for an ohmic conductor at fixed temperature is a straight line through the origin. If the line bends, or does not pass through the origin, the element is **non-ohmic**. A filament lamp is non-ohmic because its temperature, and therefore its resistance, changes as the current changes. A semiconductor diode is strongly non-ohmic: it conducts easily in one direction and hardly at all in the other. Ohm's law is an empirical rule for a restricted class of materials and conditions, not a fundamental law of nature.

## 4. Where resistance comes from

Between collisions, an electron of mass $m$ has acceleration $a=eE/m$. If the average time between collisions is $\tau$, called the **relaxation time**, the drift speed reached is of order

$$
v_d=\frac{eE\tau}{m}.
$$

The collisions continually reset the motion, so this is a steady average rather than a continually growing speed. Combining with $I=nAev_d$ and $j=I/A$,

$$
j=nev_d=\frac{ne^2\tau}{m}E=\sigma E.
$$

Here $\sigma$ is the **conductivity**, with unit $\text{S/m}$ (siemens per metre), and $\rho=1/\sigma$ is the **resistivity**. This relation $j=\sigma E$ is Ohm's law in microscopic form: the current density at a point is proportional to the field there.

To connect it to $V=IR$, use a uniform wire of length $L$ and area $A$. The field is $E=V/L$ and the current is $I=jA=\sigma EA$. Therefore

$$
R=\frac{V}{I}=\frac{EL}{\sigma EA}=\frac{L}{\sigma A}=\frac{\rho L}{A}.
$$

This result assumes the field is uniform, the material is ohmic and the temperature is fixed. It fails when the current heats the conductor appreciably, when the field is strong enough to change $\tau$, or for non-ohmic materials.

## 5. Worked example: drift speed in a copper wire

A copper wire of cross-sectional area $1.0\ \text{mm}^2$ carries a steady current of $2.0\ \text{A}$. Take the free-electron density as $n=8.5\times10^{28}\ \text{m}^{-3}$ and $e=1.6\times10^{-19}\ \text{C}$. Find the current density and the drift speed.

Convert the area first:

$$
A=1.0\ \text{mm}^2=1.0\times10^{-6}\ \text{m}^2.
$$

The current density is

$$
j=\frac{I}{A}=\frac{2.0}{1.0\times10^{-6}}=2.0\times10^{6}\ \text{A/m}^2.
$$

From $I=nAev_d$,

$$
v_d=\frac{I}{nAe}
=\frac{2.0}{(8.5\times10^{28})(1.0\times10^{-6})(1.6\times10^{-19})}
\approx1.5\times10^{-4}\ \text{m/s}.
$$

**Sanity check.** The drift speed is about $0.15\ \text{mm/s}$, so a given electron takes roughly $1/(1.5\times10^{-4})\approx6.7\times10^{3}\ \text{s}$, nearly two hours, to move one metre along the wire. The lamp still lights immediately because the field, not a particular electron, travels quickly through the circuit.

## 6. A reliable calculation routine

1. List $I$, $A$, $n$ and the carrier charge; convert every area to $\text{m}^2$. Remember $1\ \text{mm}^2=10^{-6}\ \text{m}^2$.
2. Use $I=nAev_d$ for carrier motion and $V=IR$ for the circuit as a whole.
3. In a series conductor the current is the same in every section, so a narrower section has a larger $j$ and a larger $v_d$.
4. Check the direction: conventional current leaves the positive terminal of the source and enters the negative terminal.
5. Ask whether the answer is physically reasonable: drift speeds are usually small, while current densities are often of order $10^5$–$10^7\ \text{A/m}^2$ in ordinary wiring.

<learning-block type="mistake" title="Current is not consumed by a resistor">

A resistor converts electrical energy into thermal energy, but it does not use up charge. If $2.0\ \text{A}$ enters a resistor, $2.0\ \text{A}$ leaves it. In a series circuit every element carries the **same current**, even though the potential differences across the elements differ. A related slip is to treat the current as a vector and add branch currents by components; at a junction, add them as scalars with signs for direction.

</learning-block>

## Try it yourself

**A.** A wire carries a steady current of $0.50\ \text{A}$. How many electrons pass a cross-section each second?

<details><summary>Show the reasoning</summary>

The charge per second is $0.50\ \text{C}$. Dividing by the magnitude of the electron charge,

$$
N=\frac{I}{e}=\frac{0.50}{1.6\times10^{-19}}
\approx3.1\times10^{18}\ \text{electrons per second}.
$$

</details>

**B.** An aluminium wire of cross-sectional area $2.0\ \text{mm}^2$ carries $5.0\ \text{A}$. If $n=6.0\times10^{28}\ \text{m}^{-3}$, find the drift speed.

<details><summary>Show the reasoning</summary>

$$
v_d=\frac{I}{nAe}
=\frac{5.0}{(6.0\times10^{28})(2.0\times10^{-6})(1.6\times10^{-19})}
\approx2.6\times10^{-4}\ \text{m/s}.
$$

This is again a small speed, consistent with a metal's very large carrier density.

</details>

**C.** A $12\ \text{V}$ battery drives $3.0\ \text{A}$ through a resistor. Find its resistance. If the potential difference is doubled while the resistance stays the same, what current flows?

<details><summary>Show the reasoning</summary>

$$
R=\frac{V}{I}=\frac{12}{3.0}=4.0\ \Omega.
$$

Doubling $V$ doubles $I$ for a fixed ohmic resistance, so the new current is $6.0\ \text{A}$.

</details>

## Remember

- Current is charge crossing a section per unit time, $I=dQ/dt$, measured in amperes.
- Conventional current points the way positive charge would move; electron drift is opposite it.
- Drift velocity is related to current by $I=nAev_d$; typical drift speeds are fractions of a millimetre per second.
- Ohm's law, $V=IR$, holds for ohmic conductors at constant temperature; the microscopic form is $j=\sigma E$.
- Resistance from geometry is $R=\rho L/A$; current is conserved through a series resistor even though energy is dissipated.

The next module isolates the material property $\rho$, explains how temperature changes it, and turns current and resistance into electrical power.
