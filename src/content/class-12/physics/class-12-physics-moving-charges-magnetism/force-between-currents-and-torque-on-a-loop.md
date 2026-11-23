## Forces between currents and the torque on a loop

A magnetic field created by one current exerts a force on another current. Two parallel wires attract or repel depending on the current directions, and a current loop in a uniform field experiences a torque that rotates it. These two ideas define the ampere and power the electric motor.

## 1. Force between two parallel currents

Two long parallel wires separated by distance $d$, carrying currents $I_1$ and $I_2$, exert on each other a force per unit length

$$
\frac{F}{L} = \frac{\mu_0 I_1 I_2}{2\pi d}.
$$

The force is **attractive** if the currents are in the same direction and **repulsive** if they are opposite. It follows from combining the field of one wire, $B_1=\mu_0 I_1/(2\pi d)$, with the force on the other, $F=I_2 L B_1$. The SI definition of the ampere uses this force: $1\ \text{A}$ is the current that, in two parallel conductors $1\ \text{m}$ apart in vacuum, produces a force of $2\times10^{-7}\ \text{N/m}$.

## 2. Torque on a current loop

A rectangular loop of area $A=Nab$? More generally, a planar loop of area $A$ carrying current $I$ in a uniform field $B$ has magnetic moment

$$
\vec m = N I \vec A,
$$

where $\vec A$ is the area vector (magnitude $A$, direction normal to the plane by the right-hand rule) and $N$ is the number of turns. The torque on the loop is

$$
\vec\tau = \vec m\times\vec B,\qquad \tau = N I A B\sin\theta,
$$

where $\theta$ is the angle between the normal to the loop and $\vec B$. The torque tends to align $\vec m$ with $\vec B$. The potential energy of the loop in the field is

$$
U = -\vec m\cdot\vec B = -N I A B\cos\theta.
$$

Thus $\theta=0$ is stable equilibrium (minimum energy) and $\theta=\pi$ is unstable equilibrium.

Note the angle carefully: $\theta$ is measured from the *normal* to the plane, not from the plane itself. When the plane of the loop is perpendicular to $\vec B$, the normal is parallel to $\vec B$, so $\theta=0$ and the torque is zero.

## 3. Worked examples

**Force between wires.** Two wires $0.020\ \text{m}$ apart carry $10\ \text{A}$ and $5.0\ \text{A}$ in the same direction. The force on a $1.0\ \text{m}$ length is

$$
F = \frac{\mu_0 I_1 I_2 L}{2\pi d}
  = \frac{(4\pi\times10^{-7})(10)(5.0)(1.0)}{2\pi(0.020)}
  = 5.0\times10^{-4}\ \text{N}.
$$

The wires attract. If one current were reversed, the force would have the same magnitude but be repulsive.

**Torque on a loop.** A coil has $10$ turns, area $0.010\ \text{m}^2$, carries $0.50\ \text{A}$, and sits in $0.20\ \text{T}$ with its normal at $30^\circ$ to $\vec B$.

Magnetic moment:

$$
m = NIA = 10(0.50)(0.010)=5.0\times10^{-2}\ \text{A·m}^2.
$$

Torque:

$$
\tau = m B\sin\theta = (5.0\times10^{-2})(0.20)\sin30^\circ
     = 5.0\times10^{-3}\ \text{N·m}.
$$

Potential energy:

$$
U = -mB\cos\theta = -(5.0\times10^{-2})(0.20)\cos30^\circ
  \approx -8.66\times10^{-3}\ \text{J}.
$$

Sanity check: the torque is modest and tends to rotate the loop toward $\theta=0$; the negative energy confirms the loop is already near a stable orientation.

## 4. A common mistake

**Confusing the angle in the torque formula.** Using the angle between the *plane* of the loop and $\vec B$ instead of the angle between the *normal* and $\vec B$ gives $\sin(90^\circ-\theta)=\cos\theta$ and a wrong answer. A second error is forgetting the factor $N$ for a multi-turn coil, which scales both the moment and the torque. A third is calling the force between opposite currents attractive — parallel currents attract, antiparallel repel.

## Try it yourself

**A.** Two wires $0.050\ \text{m}$ apart carry $6.0\ \text{A}$ and $4.0\ \text{A}$ in opposite directions. Find the force per metre between them.

<details><summary>Show the reasoning</summary>

$F/L=\mu_0 I_1 I_2/(2\pi d)=(4\pi\times10^{-7})(6.0)(4.0)/(2\pi\times0.050)=9.6\times10^{-5}\ \text{N/m}$. The currents are opposite, so the force is repulsive.

</details>

**B.** A coil of $20$ turns, area $0.0050\ \text{m}^2$, carries $1.0\ \text{A}$ in a $0.40\ \text{T}$ field. Its normal makes $90^\circ$ with $\vec B$. Find the torque and the potential energy.

<details><summary>Show the reasoning</summary>

$m=NIA=20(1.0)(0.0050)=0.10\ \text{A·m}^2$. $\tau=mB\sin90^\circ=0.10\times0.40=4.0\times10^{-2}\ \text{N·m}$. $U=-mB\cos90^\circ=0$. This is the position of maximum torque and zero stored energy.

</details>

**C.** Explain why two parallel currents attract using field and force directions.

<details><summary>Show the reasoning</summary>

Wire 1 produces a field that, at the position of wire 2, points (by the right-hand rule) perpendicular to wire 2. The force on wire 2 is $I_2\vec L\times\vec B_1$. For currents in the same direction this force points toward wire 1. Reversing one current reverses the force, giving repulsion.

</details>

## Remember

- Parallel currents: $F/L=\mu_0 I_1 I_2/(2\pi d)$; same direction attracts, opposite repels.
- Magnetic moment of a loop: $\vec m=NI\vec A$.
- Torque: $\vec\tau=\vec m\times\vec B$, magnitude $NIAB\sin\theta$.
- Energy: $U=-\vec m\cdot\vec B$; stable when $\vec m$ is parallel to $\vec B$.
- $\theta$ is the angle between the loop normal and $\vec B$.

Next, the moving-coil galvanometer puts this torque to work as a measuring instrument.