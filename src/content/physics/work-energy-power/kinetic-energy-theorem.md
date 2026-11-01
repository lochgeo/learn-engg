## The question this lesson answers

If you know how much net work acts on an object, can you predict how its speed changes without solving for every force and every moment? Yes. The bridge is the **work–energy theorem**.

## 1. Kinetic energy

Kinetic energy is the energy associated with motion:

$$
K=\frac12mv^2.
$$

It is a scalar: it depends on speed, not direction. A $2\ \text{kg}$ cart moving east at $3\ \text{m/s}$ and the same cart moving west at $3\ \text{m/s}$ each have $K=9\ \text{J}$.

Kinetic energy depends on the reference frame because speed does. A passenger at rest relative to a moving train has kinetic energy zero in the train’s frame, but nonzero kinetic energy relative to the ground.

## 2. Deriving the theorem for constant net force

For motion along one line, Newton’s second law gives $F_{net}=ma$. The constant-acceleration relation

$$
v^2-u^2=2a\Delta x
$$

can be rearranged and multiplied by $m/2$:

$$
F_{net}\Delta x=ma\Delta x=\frac12m(v^2-u^2)=K_f-K_i.
$$

The left side is net work. So

$$
\boxed{W_{net}=\Delta K=K_f-K_i}.
$$

The theorem remains valid when the force varies: add up the small amounts of net work over the path. The net work is the sum of the work done by **all** forces on the object.

## 3. Read the sign before solving

- If $W_{net}>0$, kinetic energy increases and speed increases.
- If $W_{net}<0$, kinetic energy decreases and speed decreases (if the object keeps moving in the same frame).
- If $W_{net}=0$, the initial and final speeds are equal; velocity may still change direction.

### Worked example: a braking cart

A $1200\ \text{kg}$ car slows from $20\ \text{m/s}$ to $10\ \text{m/s}$. The net work done on it is

$$
W_{net}=\frac12(1200)(10^2-20^2)=-180{,}000\ \text{J}.
$$

The negative sign says that $180\ \text{kJ}$ of kinetic energy was removed. It does **not** mean the car’s kinetic energy became negative; the final kinetic energy is still $60\ \text{kJ}$.

## 4. When the theorem is the easier tool

Use it when the question asks for speed after a displacement or the work needed to change speed. It is especially useful when forces vary or when time is not given. You may not need acceleration or a full motion equation.

For a $4\ \text{kg}$ object initially at rest, a net $50\ \text{J}$ of work gives

$$
50=\frac12(4)v^2\quad\Rightarrow\quad v=5\ \text{m/s}.
$$

If you know only the work of one force, first include the work of the other forces. For example, gravity may do work while friction removes energy.

## A common distinction

The theorem tracks the change in **kinetic** energy. It does not by itself say mechanical energy is conserved. Kinetic energy can increase because a person or engine supplies energy, or decrease because friction transfers mechanical energy into thermal energy.

## Practice

**A.** A net work of $-24\ \text{J}$ acts on a $3\ \text{kg}$ body moving at $5\ \text{m/s}$. Find its final speed.

<details><summary>Show the reasoning</summary>

Initial kinetic energy is $K_i=\frac12(3)(25)=37.5\ \text{J}$. Final kinetic energy is $K_f=K_i+W_{net}=13.5\ \text{J}$. Then $v=\sqrt{2K_f/m}=\sqrt9=3\ \text{m/s}$.
</details>

**B.** A net work of $80\ \text{J}$ changes a body’s speed from $2$ to $6\ \text{m/s}$. What is its mass?

<details><summary>Show the reasoning</summary>

$$
80=\frac12m(6^2-2^2)=16m\quad\Rightarrow\quad m=5\ \text{kg}.
$$
</details>

**C.** Can net work be zero while an object’s velocity changes?

<details><summary>Reveal</summary>

Yes. In uniform circular motion, the centripetal force changes velocity’s direction while doing no work. Initial and final speeds, and therefore kinetic energies, are equal.
</details>

## Take away

- $W_{net}=\Delta K$ is an exact energy statement for a particle or translating body.
- Include every force when you calculate **net** work.
- Kinetic energy is never negative; a negative work value means it decreased.
