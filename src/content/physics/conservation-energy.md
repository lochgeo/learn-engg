## The big idea

Energy does not disappear. But **mechanical energy**—kinetic plus potential—stays constant only under specific conditions. A good solution names the system and accounts for every transfer.

## 1. When is mechanical energy conserved?

For a system acted on only by conservative forces,

$$
K_i+U_i=K_f+U_f=\text{constant}.
$$

For example, if air resistance is negligible, a falling object trades gravitational potential energy for kinetic energy. Its speed can be found without solving for the time of fall.

If non-conservative forces such as friction do work, include their work:

$$
\Delta K+\Delta U=W_{nonconservative}.
$$

Friction usually has $W_{friction}<0$ for the mechanical system. The “missing” mechanical energy has been transferred mostly into thermal energy of the surfaces and surroundings. Total energy is still conserved when those forms are included.

## 2. A system and an energy table

Before choosing a formula, define what belongs to the system. For a block–Earth–spring system, $K$, gravitational $U_g$, and spring $U_s$ can all be inside the system. If a person pushes the block, that person is outside; the push transfers energy into the system as external work.

An energy table can keep the bookkeeping clear:

| State | Kinetic $K$ | Gravitational $U_g$ | Spring $U_s$ | Transfer |
| --- | ---: | ---: | ---: | --- |
| Start | value | value | value | external work in/out |
| End | value | value | value | friction or other transfer |

Pick a reference height and spring zero, then use the same choices at both states.

## 3. Worked example: block slides down a ramp

A $2\ \text{kg}$ block starts from rest and drops vertically $3\ \text{m}$ along a frictionless ramp. Take $g=10\ \text{m/s}^2$ and choose the starting height as zero. Then $U_i=0$, $K_i=0$, $U_f=-mgh=-60\ \text{J}$. Conservation gives

$$
K_f=60\ \text{J}=\frac12(2)v^2\quad\Rightarrow\quad v=\sqrt{60}\approx7.75\ \text{m/s}.
$$

The ramp can be steep or gentle; with no friction, the final speed depends on the vertical drop, not the path length.

## 4. Add friction when it is present

The same block slides down a ramp with friction doing $-18\ \text{J}$ of work. Then

$$
\Delta K+\Delta U=W_f=-18\ \text{J}.
$$

Because $\Delta U=-60\ \text{J}$, we get $\Delta K=42\ \text{J}$ and $v=\sqrt{42}\approx6.48\ \text{m/s}$. Some gravitational energy became thermal energy rather than kinetic energy.

## 5. Springs and turning points

At a turning point, instantaneous speed is zero, so $K=0$. That does **not** mean total energy is zero: energy may be stored in a spring or gravitational field. For a horizontal frictionless block–spring system released from rest at stretch $A$, the maximum speed occurs as the spring passes its relaxed length:

$$
\frac12kA^2=\frac12mv_{max}^2\quad\Rightarrow\quad v_{max}=A\sqrt{\frac{k}{m}}.
$$

## Practice

**A.** A $1\ \text{kg}$ stone is dropped from rest through $5\ \text{m}$. Find its speed just before impact if air resistance is ignored and $g=9.8\ \text{m/s}^2$.

<details><summary>Show the reasoning</summary>

$$
mgh=\frac12mv^2\Rightarrow v=\sqrt{2gh}=\sqrt{98}\approx9.9\ \text{m/s}.
$$

Mass cancels; in this model, all objects dropped through the same height gain the same speed.
</details>

**B.** A moving object has $40\ \text{J}$ of mechanical energy. Friction does $-12\ \text{J}$ of work. What is its final mechanical energy?

<details><summary>Show the reasoning</summary>

The non-conservative work changes mechanical energy: $E_f=E_i+W_f=40-12=28\ \text{J}$.
</details>

## Take away

- Use $K+U=\text{constant}$ only when non-conservative work is zero.
- With external or dissipative work, use $\Delta K+\Delta U=W_{nonconservative}$.
- Choose a system and reference zeros before substituting values.
