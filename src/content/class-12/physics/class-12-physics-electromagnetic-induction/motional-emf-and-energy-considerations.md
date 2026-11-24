## A rod that acts like a battery

Lay two parallel conducting rails on a table, bridge them with a metal rod, and connect the far ends through a resistor. Now slide the rod through a magnetic field directed vertically into the table. The galvanometer in the circuit deflects. Remove the magnet and the deflection disappears. Nothing in the circuit stores chemical energy, yet a current flows while the rod moves.

The rod is a source of emf. Unlike a cell, it has no chemical reaction inside; the separation of charge is produced by the magnetic force on the charges that move with the rod. The same motion also changes the magnetic flux through the circuit, so Faraday’s law must give the same answer. Checking that the two pictures agree is one of the best ways to understand motional emf.

## 1. The magnetic-force picture

Suppose the rod has length $\ell$ and moves with speed $v$ perpendicular to its length. A uniform field $\vec B$ is perpendicular to both the rod and its velocity. Charge carriers in the rod move with speed $v$, so each charge $q$ experiences a magnetic force

$$
\vec F_m=q\vec v\times\vec B.
$$

The force is along the rod. Positive charges are pushed towards one end and negative charges towards the other, creating an electric field $\vec E$ inside the metal. Charge separation stops when the electric force balances the magnetic force:

$$
qE=qvB \quad\Rightarrow\quad E=vB.
$$

The potential difference between the ends is therefore

$$
\varepsilon=E\ell=B\ell v.
$$

This is the **motional emf**. It is present even if the circuit is open; in that case the rod acts like a charged battery with no current. Connect the circuit through a resistor and the separated charge can flow.

The geometry matters. The formula $\varepsilon=B\ell v$ applies when the field, the rod and the velocity are mutually perpendicular. If $\vec v$ has a component along the rod, that component does not push charge along the rod. If $\vec B$ is parallel to the rod, $\vec v\times\vec B$ is perpendicular to the rod and produces no emf along it. In general the emf is the component of $\vec v\times\vec B$ along the rod, multiplied by $\ell$.

## 2. The flux picture: the same result

The rod and rails enclose a rectangular area. If the rails are separated by $\ell$ and the rod is a distance $x$ from the far end, the enclosed area is $A=\ell x$. With the field perpendicular to the plane,

$$
\Phi_B=BA=B\ell x.
$$

As the rod moves, $x$ changes at the rate $dx/dt=v$, so

$$
\frac{d\Phi_B}{dt}=B\ell\frac{dx}{dt}=B\ell v.
$$

Faraday’s law then gives

$$
|\varepsilon|=\left|\frac{d\Phi_B}{dt}\right|=B\ell v.
$$

The flux picture and the force picture agree. The flux picture is usually quicker; the force picture explains **which end becomes positive**, because $\vec v\times\vec B$ points from negative to positive inside the rod.

### Direction in one example

Let $\vec B$ point into the page and let the rod move to the right. With $x$ to the right and $y$ upward, $\vec v\times\vec B$ points upward, so positive charge accumulates at the top end. The rod behaves like a battery whose positive terminal is at the top. In the external resistor, conventional current flows from the top end, through the resistor, to the bottom end.

## 3. Current, force and the need for an external agent

If the total resistance of the circuit is $R$, the induced current is

$$
I=\frac{|\varepsilon|}{R}=\frac{B\ell v}{R}.
$$

The rod carries this current through the field, so it experiences a magnetic force

$$
F_m=BI\ell=\frac{B^2\ell^2v}{R}.
$$

Lenz’s law fixes the direction: the force opposes the rod’s motion. The magnetic field does **not** help the rod along; it drags backward. To keep the rod moving at constant speed, an external agent must push it forward with a force equal in magnitude to $F_m$.

The external agent supplies mechanical power

$$
P_{\text{mech}}=F_{\text{ext}}v=\frac{B^2\ell^2v^2}{R}.
$$

The electrical power dissipated in the resistor is

$$
P_{\text{elec}}=I^2R=\frac{(B\ell v)^2}{R}=\frac{B^2\ell^2v^2}{R}.
$$

The two are equal. Mechanical work done against the magnetic drag becomes Joule heat in the resistor. If the external push is removed, the rod slows down, and the kinetic energy it already has is converted into heat until it stops. No arrangement of magnets and wires can extract more electrical energy than the mechanical energy put in.

## 4. Worked example: a complete rod-and-rails circuit

A rod of length $\ell=0.50\ \text{m}$ slides at a constant $v=3.0\ \text{m/s}$ on frictionless rails. A uniform field $B=0.40\ \text{T}$ is perpendicular to the plane of the rails, and the total circuit resistance is $R=2.0\ \Omega$. Find the emf, current, magnetic force, and the power balance.

The emf is

$$
|\varepsilon|=B\ell v=(0.40)(0.50)(3.0)=0.60\ \text{V}.
$$

The current is

$$
I=\frac{0.60}{2.0}=0.30\ \text{A}.
$$

The magnetic drag on the rod is

$$
F_m=BI\ell=(0.40)(0.30)(0.50)=0.060\ \text{N}.
$$

So the external agent must apply $0.060\ \text{N}$ in the direction of motion. The mechanical power supplied is

$$
P_{\text{mech}}=F_{\text{ext}}v=(0.060)(3.0)=0.18\ \text{W}.
$$

The electrical power dissipated is

$$
P_{\text{elec}}=I^2R=(0.30)^2(2.0)=0.18\ \text{W}.
$$

**Sanity check.** The two powers match exactly, as they must. The emf is below a volt, the current a few tenths of an ampere, and the required force a few hundredths of a newton — all sensible for a small laboratory demonstration. Doubling the speed would double the emf and current, double the drag force, and quadruple the power.

## 5. Energy when the push stops

Suppose the rod has mass $m$ and is given an initial speed $v_0$, then released. The magnetic drag does negative work on it, so it slows. The total heat eventually produced is equal to its initial kinetic energy:

$$
Q=\frac12mv_0^2.
$$

For a $0.10\ \text{kg}$ rod launched at $4.0\ \text{m/s}$,

$$
Q=\frac12(0.10)(4.0)^2=0.80\ \text{J}.
$$

The stopping is not at constant acceleration: as $v$ falls, the emf, current and drag force all fall, so the rod approaches rest gradually. This is the same qualitative behaviour as eddy-current braking, which the next module treats in bulk conductors.

<learning-block type="mistake" title="“The magnetic force does positive work and drives the rod”">

The magnetic force on the rod points **opposite** to its velocity, so it removes mechanical energy rather than adding it. The rod moves because an external agent pushes it, not because the magnetic force propels it.

A related error is to use $B\ell v$ without checking the geometry. If the field is parallel to the rod, or the velocity is along the rod, the emf is zero even though all three symbols have large values. The formula is a perpendicular-case result, not a universal one.

Finally, remember that $R$ is the **total** circuit resistance, including the rod, rails and any internal resistance of the galvanometer. Using only the external resistor overestimates the current.

</learning-block>

## Try it yourself

**A.** A rod of length $0.20\ \text{m}$ moves at $2.5\ \text{m/s}$ perpendicular to a $0.60\ \text{T}$ field. The circuit resistance is $0.50\ \Omega$. Find the emf, current, magnetic drag and electrical power.

<details><summary>Show the reasoning</summary>

$$
|\varepsilon|=B\ell v=(0.60)(0.20)(2.5)=0.30\ \text{V},
$$

$$
I=\frac{0.30}{0.50}=0.60\ \text{A},
$$

$$
F_m=BI\ell=(0.60)(0.60)(0.20)=0.072\ \text{N},
$$

$$
P=I^2R=(0.60)^2(0.50)=0.18\ \text{W}.
$$

The external agent must supply $0.072\ \text{N}$ to maintain the speed, giving $Fv=(0.072)(2.5)=0.18\ \text{W}$, in agreement.

</details>

**B.** The rod is held stationary in the same steady field. What is the motional emf, and what is the current?

<details><summary>Show the reasoning</summary>

With $v=0$, the motional emf $B\ell v$ is zero. The flux through the circuit is constant, so Faraday’s law also gives zero. There is no current. Holding a conductor in a static field does not generate electricity.

</details>

**C.** Why is the emf zero if the magnetic field points along the length of the rod while the rod slides perpendicular to itself?

<details><summary>Show the reasoning</summary>

The magnetic force on a moving charge is $q\vec v\times\vec B$. If $\vec B$ is along the rod, then $\vec v\times\vec B$ is perpendicular to the rod, so charges are pushed sideways across the rod’s thickness rather than from one end to the other. No emf develops along the rod. Equivalently, the flux through the circuit does not change in the way needed to drive a current around the loop.

</details>

**D.** A $0.20\ \text{kg}$ rod moving at $5.0\ \text{m/s}$ is left to coast with only magnetic braking. How much heat is produced before it stops?

<details><summary>Show the reasoning</summary>

All the initial kinetic energy is dissipated:

$$
Q=\frac12(0.20)(5.0)^2=2.5\ \text{J}.
$$

The time taken depends on $B$, $\ell$ and $R$, but the total energy does not.

</details>

## Remember

- Motional emf is $\varepsilon=B\ell v$ when $\vec B$, the rod and $\vec v$ are mutually perpendicular.
- The rod acts as a source; $\vec v\times\vec B$ identifies the positive end.
- The induced current is $I=B\ell v/R$, and the magnetic drag is $F=B^2\ell^2v/R$, opposing motion.
- An external agent must supply $P=Fv$, which equals the electrical power $I^2R$.
- If the push stops, the rod’s kinetic energy becomes heat; the braking force decreases as the rod slows.

The next module takes the same physics into a solid conductor, where induced currents circulate in closed loops through the metal itself.
