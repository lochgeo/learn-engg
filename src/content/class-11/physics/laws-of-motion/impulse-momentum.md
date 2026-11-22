## Why the catcher draws the glove back

A cricketer catches a fast ball by pulling the hands backward as the ball arrives; an airbag inflates in front of you; a gymnast lands with bent knees. All three tricks do the same thing: they make the stopping *take longer*, so the force is smaller. They cannot make the stopping require any less *momentum change* — that amount is fixed by the ball's mass and speed. To reason this way you need two quantities: **momentum** (how much motion there is to stop) and **impulse** (force acting through time), and the theorem that connects them.

## 1. Momentum: motion with a direction

Define the linear momentum of a body of mass $m$ and velocity $\vec v$:

$$
\vec p = m\vec v,
$$

with SI unit $\text{kg·m/s}$. Momentum is a vector; its direction is the velocity's direction. Newton's second law, in his own formulation, is

$$
\vec F_{\text{net}} = \frac{d\vec p}{dt},
$$

which reduces to $\vec F_{\text{net}} = m\vec a$ when the mass is constant — but the momentum form is the deeper statement, and it survives unchanged even when mass changes (a rocket burning fuel) or velocity reverses (a bouncing ball).

## 2. Impulse: force acting through time

Multiplying the second law through a short time interval $\Delta t$ gives

$$
\vec F_{\text{net}}\,\Delta t = \Delta\vec p \qquad \text{(constant force)}.
$$

The product $\vec J = \vec F_{\text{net}}\,\Delta t$ is the **impulse** delivered by the force, with unit $\text{N·s}$ — numerically and dimensionally the same as $\text{kg·m/s}$, which is no accident: impulse *is* momentum change.

**Impulse–momentum theorem.** The net impulse on a body equals its change in momentum:

$$
\vec J_{\text{net}} = \Delta\vec p = m\vec v_f - m\vec v_i.
$$

For a force that varies over time, split the interval into slivers, $\Delta\vec p = \vec F\,\Delta t$ on each, and add: the total impulse is

$$
\vec J = \int_{t_i}^{t_f} \vec F(t)\,dt.
$$

On a graph of force against time, impulse is the **area under the curve** — the mechanical twin of the $F$–$x$ area used for work.

### A worked example: a served volley

A $0.05\ \text{kg}$ ball strikes a wall at $6\ \text{m/s}$ and rebounds along the same line at $4\ \text{m/s}$. Take the wall direction (rebound) as positive.

$$
\Delta p = m v_f - m v_i = (0.05)(+4) - (0.05)(-6) = 0.5\ \text{kg·m/s},
$$

so the wall delivers an impulse of $0.5\ \text{N·s}$. Suppose contact lasts $10\ \text{ms}$ and the force is roughly triangular, peaking at $F_{\max}$: the area is $\frac{1}{2}F_{\max} \times 0.010 = 0.005F_{\max}$, giving

$$
\frac{1}{2}F_{\max}(0.010) = 0.5 \quad\Rightarrow\quad F_{\max} = 100\ \text{N}.
$$

*Sanity check.* The impulse is *sign-sensitive*: if the ball had merely stuck to the wall, $\Delta p$ would have been only $(0)(0.05) - (0.05)(-6) = 0.3\ \text{N·s}$. Reversing a velocity demands **more** impulse than merely stopping it, because the ball must be given new momentum in the opposite direction.

## 3. Conservation of momentum

The power of momentum comes from the second law applied to a whole system. Sum $\vec F = d\vec p/dt$ over all bodies in a system: internal forces (third-law pairs) cancel exactly, since each pair acts between members of the system on different bodies. What remains is

$$
\vec F_{\text{ext, net}} = \frac{d}{dt}\Big(\sum \vec p_i\Big).
$$

**Conservation of momentum.** If the net *external* force on a system is zero, its total momentum is constant — component by component:

$$
\sum m\vec v_{\text{initial}} = \sum m\vec v_{\text{final}}.
$$

Isolated, colliding and exploding systems are the standard applications, because collisions are brief: during them large internal forces act, but gravity and friction — the external forces — do too little in so short a time to matter. That justification *must* be checked each time: momentum conservation is conditional, not automatic.

### Recoil: conserving momentum from rest

A $5\ \text{kg}$ rifle fires a $20\ \text{g}$ bullet forward at $300\ \text{m/s}$. Before firing everything is at rest, so total momentum is zero, and it stays zero:

$$
0 = m_b v_b + m_r v_r = (0.020)(300) + 5\,v_r
\quad\Rightarrow\quad
v_r = -\frac{6.0}{5} = -1.2\ \text{m/s}.
$$

The rifle kicks backward at $1.2\ \text{m/s}$. Same physics: a rocket climbs by throwing gas backward, a rowing boat advances by throwing water backward — no force from "pushing against the road" is required when the system carries its own expelled mass.

<learning-block type="mistake" title="Impulse and momentum errors">

- **Conserving momentum in a system with big external forces.** A block sliding against strong friction, or a ball colliding during a long, muddy contact: if external forces contribute appreciable impulse over the duration, momentum conservation fails. Short, hard, internal contacts conserve it; verify the time scale.
- **Comparing speeds without signs.** In one-dimensional problems a reversal of direction is a sign change. Writing $mv = mv$ on both sides and concluding $v_f = v_i$ for a bouncing ball ignores that the momentum *vectors* differ.
- **Reading average force from the peak of a graph.** Impulse is the *area*, so for a triangular pulse the average force is half the peak. Confusing the two inflates an estimate by a factor of two.

</learning-block>

## 4. Why longer contact means smaller force

The theorem explains every cushioning trick at once. A given momentum change $\Delta p$ is fixed by the task; the impulse needed is fixed too; so over a contact time $\Delta t$ the **average** net force is

$$
\vec F_{\text{avg}} = \frac{\Delta \vec p}{\Delta t}.
$$

Stretch $\Delta t$ and the force shrinks proportionally. A $60\ \text{kg}$ gymnast landing at $5\ \text{m/s}$ carries $\Delta p = 300\ \text{kg·m/s}$ to remove. Stopping in $20\ \text{ms}$ (stiff legs, hard mat) needs an average upward-net force of $15\,000\ \text{N}$; bending the knees to spread it over $200\ \text{ms}$ needs only $1500\ \text{N}$ — one-tenth, and the joints stay intact.

## 5. A reliable method

1. **Define the system and the interval.** Which bodies, over which slice of time?
2. **Justify the conservation law.** Are external impulses negligible over that interval? If not, include them: $\Delta\vec p_{\text{system}} = \vec J_{\text{ext}}$.
3. **Write momenta with signs** (or components) for one-dimensional motion.
4. **Solve**, then check: momentum accounting must balance; speeds must stay below light speed and results must be sensible in $\text{km/h}$.

## Try it yourself

**A.** A $60\ \text{kg}$ skater pushes a stationary $40\ \text{kg}$ skater away; the heavier one recoils at $2\ \text{m/s}$. Find the other's velocity.

<details><summary>Show the reasoning</summary>

Before the push, total momentum is zero. The push is internal to the pair (their forces on each other are a third-law pair), so $0 = (60)(-2) + (40)v$, giving $v = 3\ \text{m/s}$ in the opposite direction. The lighter skater ends up faster — same momentum magnitude, smaller mass. Don't forget to search for external forces: on smooth ice with negligible friction, the pair is effectively isolated for the brief push.
</details>

**B.** A force rises linearly from $0$ to $40\ \text{N}$ in $2\ \text{s}$, holds $40\ \text{N}$ for $2\ \text{s}$, then falls linearly to zero in $2\ \text{s}$. Find the impulse and the speed gained by a $4\ \text{kg}$ cart it acts on, starting from rest.

<details><summary>Show the reasoning</summary>

Area on the $F$–$t$ graph: two triangles of $\frac{1}{2}(2)(40) = 40\ \text{N·s}$ each and a rectangle of $(2)(40) = 80\ \text{N·s}$, totalling $J = 160\ \text{N·s}$. Then $v_f = J/m = 160/4 = 40\ \text{m/s}$. (Large but physically attainable — and worth noting that the peak force is $40\ \text{N}$ while the *average* is only $160/6 \approx 27\ \text{N}$.)
</details>

**C.** A car of mass $800\ \text{kg}$ brakes from $20\ \text{m/s}$ to rest in $5\ \text{s}$ with constant net force. Find the impulse and the force; then repeat for an emergency stop in $1\ \text{s}$.

<details><summary>Show the reasoning</summary>

$\Delta p = 800(0 - 20) = -16\,000\ \text{kg·m/s}$; the impulse is $-16\ \text{kN·s}$ (backward relative to motion) in both cases — the *required* impulse is fixed by the task. The force differs: $F = \Delta p/\Delta t = -3200\ \text{N}$ over $5\ \text{s}$ but $-16\,000\ \text{N}$ over $1\ \text{s}$. Five times shorter, five times harder — the same cushioning arithmetic as the cricketer's glove.
</details>

## Remember

- Momentum $\vec p = m\vec v$ is a conserved quantity for isolated systems; impulse is momentum delivered.
- $\vec J_{\text{net}} = \Delta\vec p$: impulse is force integrated over time, and the **area under an $F$–$t$ graph**.
- Momentum conservation needs justification: external forces must be negligible over the interval, or else account for them.
- Fixed $\Delta p$ over longer $\Delta t$ means smaller average force — the physics of airbags, gloves and bent knees.
- Recoil problems start from total momentum zero and solve for the unknown share.
- Collisions are the richest application: which kinds conserve kinetic energy as well? The chapter's review pulls every tool in this chapter into one mixed practice set.
