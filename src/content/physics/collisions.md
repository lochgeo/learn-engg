## The big idea

During a short collision, objects exert large forces on each other. If the net external impulse on the chosen system is negligible, the system’s total momentum is conserved. Kinetic energy is conserved **only** for an elastic collision.

## 1. Two conservation rules, two different jobs

For two bodies in one dimension,

$$m_1u_1+m_2u_2=m_1v_1+m_2v_2.$$

Choose a positive direction and use signed velocities. Momentum conservation applies to elastic and inelastic collisions alike, provided the system is isolated during impact.

In an **elastic** collision, total kinetic energy is also conserved:

$$\frac12m_1u_1^2+\frac12m_2u_2^2=\frac12m_1v_1^2+\frac12m_2v_2^2.$$

In an **inelastic** collision, some initial kinetic energy becomes internal energy, sound, or deformation. In a **perfectly inelastic** collision, the bodies stick together and share one final velocity. Total energy is still conserved when all forms are included.

## 2. A perfectly inelastic collision

A $2\ \text{kg}$ cart moving at $3\ \text{m/s}$ hits and sticks to a stationary $1\ \text{kg}$ cart. Momentum conservation gives

$$v_f=\frac{(2)(3)+(1)(0)}{2+1}=2\ \text{m/s}.$$

Initial kinetic energy is $9\ \text{J}$; final kinetic energy is $\frac12(3)(2^2)=6\ \text{J}$. The decrease of $3\ \text{J}$ became other forms of energy during impact. Momentum is conserved; kinetic energy is not.

For a one-dimensional completely inelastic collision, the kinetic-energy decrease can be found directly from the relative approach speed:

$$K_i-K_f=\frac12\frac{m_1m_2}{m_1+m_2}(u_1-u_2)^2.$$

This quantity is never negative. It is zero only when the bodies already have the same velocity, so there is no relative motion to deform them during impact.

## 3. One-dimensional elastic collisions

For an elastic collision, relative separation speed equals relative approach speed:

$$v_2-v_1=u_1-u_2.$$

Together with momentum conservation, this gives

$$v_1=\frac{(m_1-m_2)u_1+2m_2u_2}{m_1+m_2},\qquad
v_2=\frac{2m_1u_1+(m_2-m_1)u_2}{m_1+m_2}.$$

For equal masses in a head-on elastic collision, the objects exchange velocities. This is a useful result to understand, not a formula to apply without checking that the collision is elastic and one-dimensional.

## 4. Two-dimensional collisions

Momentum is a vector, so conserve it separately along perpendicular axes:

$$\sum p_{x,i}=\sum p_{x,f},\qquad \sum p_{y,i}=\sum p_{y,f}.$$

For an elastic collision, also conserve total kinetic energy. For an inelastic one, do not impose kinetic-energy conservation. Draw initial and final velocity vectors before splitting them into components.

### A useful equal-mass result

Suppose equal masses collide elastically, with one initially at rest. Conservation of momentum and kinetic energy then give

$$\vec v_{1f}\cdot\vec v_{2f}=0.$$

Their final velocity vectors are therefore perpendicular (unless one final speed is zero, the head-on limiting case). This result is a consequence of the stated conditions; do not use it for unequal masses or an inelastic collision.

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

## Take away

- First ask whether external impulse is negligible; then conserve momentum.
- Conserve kinetic energy only for an elastic collision.
- For two-dimensional motion, conserve momentum component by component.
