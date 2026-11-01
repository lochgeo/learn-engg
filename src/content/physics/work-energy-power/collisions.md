## The big idea

During a short collision, objects exert large forces on each other. If the net external impulse on the chosen system is negligible, the system’s total momentum is conserved. Kinetic energy is conserved **only** for an elastic collision.

<figure class="lesson-figure">
  <img src="images/work-energy/newtons-cradle.jpg" alt="A row of steel balls in a Newton's cradle, with balls swinging out at one end" loading="lazy" />
  <figcaption>Newton’s cradle makes the collision rules visible: momentum passes through the line of balls, and because the steel impacts are nearly elastic the same number of balls swings out at the far end. <em>Photo: Sheila Sund, Wikimedia Commons (CC BY 2.0).</em></figcaption>
</figure>

## 1. Two conservation rules, two different jobs

For two bodies in one dimension,

$$
m_1u_1+m_2u_2=m_1v_1+m_2v_2.
$$

Choose a positive direction and use signed velocities. Momentum conservation applies to elastic and inelastic collisions alike, provided the system is isolated during impact.

In an **elastic** collision, total kinetic energy is also conserved:

$$
\frac12m_1u_1^2+\frac12m_2u_2^2=\frac12m_1v_1^2+\frac12m_2v_2^2.
$$

In an **inelastic** collision, some initial kinetic energy becomes internal energy, sound, or deformation. In a **perfectly inelastic** collision, the bodies stick together and share one final velocity. Total energy is still conserved when all forms are included.

## 2. A perfectly inelastic collision

A $2\ \text{kg}$ cart moving at $3\ \text{m/s}$ hits and sticks to a stationary $1\ \text{kg}$ cart. Momentum conservation gives

$$
v_f=\frac{(2)(3)+(1)(0)}{2+1}=2\ \text{m/s}.
$$

Initial kinetic energy is $9\ \text{J}$; final kinetic energy is $\frac12(3)(2^2)=6\ \text{J}$. The decrease of $3\ \text{J}$ became other forms of energy during impact. Momentum is conserved; kinetic energy is not.

For a one-dimensional completely inelastic collision, the kinetic-energy decrease can be found directly from the relative approach speed:

$$
K_i-K_f=\frac12\frac{m_1m_2}{m_1+m_2}(u_1-u_2)^2.
$$

This quantity is never negative. It is zero only when the bodies already have the same velocity, so there is no relative motion to deform them during impact.

## 3. Partially inelastic collisions: the coefficient of restitution

Most real collisions lie between the two extremes. The **coefficient of restitution** $e$ measures how much of the relative approach speed is reversed:

$$
e=\frac{\text{relative speed of separation}}{\text{relative speed of approach}}=\frac{v_2-v_1}{u_1-u_2}.
$$

Use signed velocities along the line of impact; $e$ itself is positive. The cases are:

- $e=1$: perfectly elastic, kinetic energy conserved.
- $0<e<1$: partially inelastic, some kinetic energy lost.
- $e=0$: perfectly inelastic, the bodies move together.

Momentum conservation still applies. Together with the restitution equation it gives two equations for the two unknown final velocities. Do **not** also impose kinetic-energy conservation unless $e=1$.

### Worked example: two carts with $e=0.50$

A $2\ \text{kg}$ cart moving right at $3\ \text{m/s}$ hits a stationary $1\ \text{kg}$ cart head-on. Momentum gives $2v_1+v_2=6$. Restitution gives $v_2-v_1=0.50(3-0)=1.5$. Solving, $v_1=1.5\ \text{m/s}$ and $v_2=3.0\ \text{m/s}$, both to the right.

The initial kinetic energy is $9\ \text{J}$ and the final kinetic energy is $6.75\ \text{J}$, so $2.25\ \text{J}$ became internal energy. For a one-dimensional collision, the loss is

$$
\Delta K_{\text{loss}}=\frac12\frac{m_1m_2}{m_1+m_2}(1-e^2)(u_1-u_2)^2.
$$

This reduces to the sticking result when $e=0$ and to zero when $e=1$.

### Bouncing on a fixed floor

For a ball hitting a heavy fixed wall or floor, $e=v/u$, where $u$ and $v$ are the speeds just before and just after impact. A ball dropped from height $h$ rebounds to

$$
h'=e^2h.
$$

For example, $e=0.80$ and $h=1.25\ \text{m}$ give $h'=0.64(1.25)=0.80\ \text{m}$. The missing energy went into deformation, sound, and thermal energy.

## 4. One-dimensional elastic collisions

For an elastic collision, relative separation speed equals relative approach speed:

$$
v_2-v_1=u_1-u_2.
$$

Together with momentum conservation, this gives

$$
v_1=\frac{(m_1-m_2)u_1+2m_2u_2}{m_1+m_2},\qquad
v_2=\frac{2m_1u_1+(m_2-m_1)u_2}{m_1+m_2}.
$$

For equal masses in a head-on elastic collision, the objects exchange velocities. This is a useful result to understand, not a formula to apply without checking that the collision is elastic and one-dimensional.

### Special cases worth recognising

For a stationary target ($u_2=0$) in an elastic collision:

| Masses | Final velocity of projectile | Final velocity of target |
| --- | --- | --- |
| $m_1=m_2$ | $0$ | $u_1$ |
| $m_1\ll m_2$ | $\approx -u_1$ | $\approx 0$ |
| $m_1\gg m_2$ | $\approx u_1$ | $\approx 2u_1$ |

The first row is the velocity exchange. A light ball bouncing off a heavy wall reverses; a heavy body barely slows while giving a light target almost twice its speed. Derive these from the general formulas by taking $m_2/m_1$ very large or very small rather than memorising the table.

## 5. Two-dimensional collisions

Momentum is a vector, so conserve it separately along perpendicular axes:

$$
\sum p_{x,i}=\sum p_{x,f},\qquad \sum p_{y,i}=\sum p_{y,f}.
$$

For an elastic collision, also conserve total kinetic energy. For an inelastic one, do not impose kinetic-energy conservation. Draw initial and final velocity vectors before splitting them into components.

### A useful equal-mass result

Suppose equal masses collide elastically, with one initially at rest. Conservation of momentum and kinetic energy then give

$$
\vec v_{1f}\cdot\vec v_{2f}=0.
$$

Their final velocity vectors are therefore perpendicular (unless one final speed is zero, the head-on limiting case). This result is a consequence of the stated conditions; do not use it for unequal masses or an inelastic collision.

### Worked example: equal masses at an angle

An equal-mass elastic collision with one target initially at rest sends the projectile off at $30^\circ$ from its original direction. Kinetic-energy conservation gives

$$
u^2=v_1^2+v_2^2,
$$

and the perpendicular result puts the target at $60^\circ$. Conservation of momentum along the original direction gives

$$
u=v_1\cos30^\circ+v_2\cos60^\circ.
$$

The perpendicular momentum component gives $0=v_1\sin30^\circ-v_2\sin60^\circ$, so $v_1=\sqrt3\,v_2$. Substituting, $u=2v_2$, so $v_2=u/2$ and $v_1=\sqrt3u/2$. For $u=4\ \text{m/s}$, the final speeds are $3.46\ \text{m/s}$ and $2.0\ \text{m/s}$.

## Practice

**A.** A $0.50\ \text{kg}$ cart moving right at $4\ \text{m/s}$ sticks to a $1.5\ \text{kg}$ cart moving right at $1\ \text{m/s}$. Find their shared speed.

<details><summary>Show the reasoning</summary>

Take right as positive. $v_f=[(0.50)(4)+(1.5)(1)]/(2.0)=3.5/2.0=1.75\ \text{m/s}$ to the right.
</details>

**B.** Two equal-mass carts collide elastically head-on. The first moves right at $3\ \text{m/s}$ and the second is at rest. What are their velocities after collision?

<details><summary>Show the reasoning</summary>

Equal masses exchange velocities: the first stops, and the second moves right at $3\ \text{m/s}$. Both momentum and kinetic energy match before and after.
</details>

**C.** A firework bursts in mid-air into pieces. Is momentum conserved? Is kinetic energy conserved?

<details><summary>Reveal</summary>

During the brief burst, external impulse from gravity is often negligible, so total momentum of all pieces is approximately conserved. Kinetic energy generally increases because stored chemical energy is released; the burst is not an elastic collision.
</details>

**D.** A ball dropped from $1.25\ \text{m}$ rebounds to $0.80\ \text{m}$. Find its coefficient of restitution and the fraction of kinetic energy retained.

<details><summary>Show the reasoning</summary>

For a fixed floor, $h'=e^2h$, so $e=\sqrt{h'/h}=\sqrt{0.80/1.25}=\sqrt{0.64}=0.80$. A fraction $e^2=0.64$, or $64\%$, of the kinetic energy is retained.
</details>

**E.** A $1\ \text{kg}$ cart moving right at $4\ \text{m/s}$ hits a stationary $2\ \text{kg}$ cart head-on with $e=0.50$. Find both final velocities and the kinetic-energy loss.

<details><summary>Show the reasoning</summary>

Momentum gives $v_1+2v_2=4$. Restitution gives $v_2-v_1=0.50(4)=2$. Solving, $v_1=0$ and $v_2=2\ \text{m/s}$ to the right. The initial kinetic energy is $8\ \text{J}$ and the final kinetic energy is $\frac12(2)(2^2)=4\ \text{J}$, so $4\ \text{J}$ is lost.
</details>

## Take away

- First ask whether external impulse is negligible; then conserve momentum.
- Conserve kinetic energy only for an elastic collision.
- For a partially inelastic collision, use momentum plus the coefficient of restitution.
- For two-dimensional motion, conserve momentum component by component.
