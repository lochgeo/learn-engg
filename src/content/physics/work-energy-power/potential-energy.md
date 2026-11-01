## The question this lesson answers

When an object rises, a spring stretches, or a ball rolls downhill, energy seems to be stored and released. **Potential energy** gives us a useful account of that stored interaction energy.

## 1. Conservative forces

A force is conservative when its work between two positions depends only on the endpoints, not on the route taken. Equivalently, its total work around any closed path is zero. Ideal gravity and an ideal spring force are conservative. Kinetic friction is not: the work it does depends on the path length and ordinarily removes mechanical energy.

For a conservative force, define potential energy so that

$$
\Delta U=U_f-U_i=-W_{conservative}.
$$

If gravity does positive work as a ball falls, gravitational potential energy decreases by the same amount. Potential energy belongs to a system or interaction (for example, ball–Earth), not to an isolated object alone.

## 2. Gravitational potential energy near Earth

Close to Earth’s surface, where $g$ is nearly constant, lifting a mass $m$ through vertical height $\Delta h$ changes its gravitational potential energy by

$$
\Delta U_g=mg\Delta h.
$$

Only the **change** is physically important. Choose any convenient zero height. If the floor is zero, a book on a shelf has positive $U_g$; if the shelf is zero, the same book may have negative $U_g$. The predicted motion does not change.

### Worked example: a falling ball

A $0.50\ \text{kg}$ ball drops $4.0\ \text{m}$. Its gravitational potential-energy change is

$$
\Delta U_g=mg(h_f-h_i)=(0.50)(9.8)(-4.0)=-19.6\ \text{J}.
$$

Gravity therefore does $+19.6\ \text{J}$ of work. If air resistance is negligible, the ball’s kinetic energy increases by $19.6\ \text{J}$.

## 3. Elastic potential energy

For an ideal spring, let $x=0$ be its relaxed position and $k$ its spring constant. The spring’s potential energy is

$$
U_s=\frac12kx^2.
$$

Stretching or compressing by the same distance stores the same energy. Doubling the displacement stores four times the energy. The zero is normally chosen at the relaxed length, but another reference can be used if changes are calculated consistently.

<figure class="lesson-figure lesson-figure--square">
  <img src="images/work-energy/compressed-spring.jpg" alt="A small coil spring removed from a ballpoint pen, partly compressed between two fingers" loading="lazy" />
  <figcaption>A compressed spring stores elastic potential energy proportional to the square of its displacement from the <strong>relaxed</strong> length, so stretching and compressing by the same amount store the same energy. <em>Photo: Rhetos, Wikimedia Commons (CC0).</em></figcaption>
</figure>

### Worked example: a compressed spring

A spring with $k=200\ \text{N/m}$ is compressed $0.10\ \text{m}$:

$$
U_s=\frac12(200)(0.10)^2=1.0\ \text{J}.
$$

When released, this energy can become the kinetic energy of a block, gravitational potential energy, or a mixture of both.

## 4. Force from a potential-energy graph

In one dimension, the conservative force points toward decreasing potential energy:

$$
F_x=-\frac{dU}{dx}.
$$

The force is the **negative slope** of the $U$–$x$ graph. On a slope, the force points downhill; at a flat point the force is zero. A steep slope means a large force, and the sign of the slope gives the force direction without any calculation.

## 5. Equilibrium, turning points and energy diagrams

A point where $dU/dx=0$ is an **equilibrium**. Its stability depends on the shape of the graph:

| Shape at the point | Equilibrium | Behaviour after a small displacement |
| --- | --- | --- |
| $U$ minimum | stable | force pushes back toward the point |
| $U$ maximum | unstable | force pushes farther away |
| flat $U$ | neutral | no force in that region |

For a particle with total mechanical energy $E$, the kinetic energy is $K=E-U(x)$. Because $K\ge0$, the particle can only be where $U(x)\le E$. A point where $U(x)=E$ has $K=0$ and is a **turning point**; the particle reverses there. A region where $U>E$ is classically forbidden.

### Worked example: reading a potential-energy curve

For $U(x)=x^2-4x$ joules with $x$ in metres,

$$
F_x=-\frac{dU}{dx}=-(2x-4)=4-2x.
$$

The equilibrium is at $x=2\ \text{m}$, where $F_x=0$. Since $U$ has a minimum there ($d^2U/dx^2=2>0$), it is stable. With total energy $E=-3\ \text{J}$, the turning points satisfy $x^2-4x=-3$, so $x=1\ \text{m}$ and $x=3\ \text{m}$. The particle moves between them, and its kinetic energy is largest at $x=2\ \text{m}$:

$$
K=E-U_{\text{min}}=-3-(-4)=1\ \text{J}.
$$

## Practice

**A.** A $2\ \text{kg}$ box is lifted $1.5\ \text{m}$. Find its potential-energy change using $g=10\ \text{m/s}^2$.

<details><summary>Show the reasoning</summary>

$$
\Delta U_g=mg\Delta h=(2)(10)(1.5)=+30\ \text{J}.
$$

The sign is positive because the box ends higher.
</details>

**B.** A $100\ \text{N/m}$ spring is stretched $0.20\ \text{m}$. What energy is stored?

<details><summary>Show the reasoning</summary>

$$
U_s=\frac12kx^2=\frac12(100)(0.20)^2=2.0\ \text{J}.
$$
</details>

## Take away

- Potential energy is defined for conservative interactions.
- A change in potential energy is the negative of conservative work.
- The force is the negative slope of the $U$–$x$ graph.
- Minima, maxima and flat regions of $U$ give stable, unstable and neutral equilibrium.
- Choose a convenient reference zero and stay consistent.
