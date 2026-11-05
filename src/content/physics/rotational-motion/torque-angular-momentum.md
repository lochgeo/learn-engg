## Why the handle is far from the hinge

Push a door near its hinge and it barely moves; push with the same strength at the handle and it swings easily. The door's response depends not just on the force but on *where* and *at what angle* it acts. Rotational motion therefore needs a rotational analogue of force — one that packages magnitude, position and direction into a single vector. That quantity is **torque**, and its deeper partner is **angular momentum**. This module defines both and obtains the master equation of rotation: the rotational form of Newton's second law.

## 1. Torque: $\vec\tau=\vec r\times\vec F$

Take any point $O$ as origin. If a force $\vec F$ acts at a point whose position vector from $O$ is $\vec r$, the torque of $\vec F$ about $O$ is the cross product

$$
\vec\tau=\vec r\times\vec F,
$$

with magnitude

$$
\tau=rF\sin\theta,
$$

where $\theta$ is the angle between $\vec r$ and $\vec F$. The SI unit is the newton-metre ($\text{N·m}$). The direction is given by the right-hand rule: curl the fingers of your right hand from $\vec r$ toward $\vec F$ and the thumb gives $\vec\tau$. A torque along the $+z$ axis tends to produce anticlockwise rotation seen from $+z$; along $-z$, clockwise.

Write the magnitude in the more useful form

$$
\tau = F\,r_\perp = r\,F_\perp,
$$

where $r_\perp$ is the **lever arm** (moment arm): the perpendicular distance from $O$ to the *line of action* of the force. Three equivalent pictures, same result:

- swing the force's line of action: use $F_\perp$, the component of force perpendicular to $\vec r$;
- swing the position vector: use $r_\perp$, the perpendicular distance to the line of action;
- keep them both and include $\sin\theta$.

A force aimed straight at $O$ ($\theta=0$) has zero torque no matter how large it is — its line of action passes through the hinge.

## 2. Torque depends on the point you quote it about

Move the origin and $\vec r$ changes, so $\vec\tau$ changes. A torque is always **about a specified point or axis**; quoting "the torque of a force" without naming that reference point is incomplete. Two conventions keep problems tidy:

- **About a fixed axis:** only the component of $\vec\tau$ *along* the axis can speed up or slow down rotation about it. The perpendicular components try to tilt the axle and are balanced by the bearings.
- **Strategic origin:** in equilibrium problems you may choose any origin; a shrewd choice (through an unknown force) makes that force's torque vanish. Module 7 on equilibrium exploits this fully.

<learning-block type="mistake" title="Newton-metres but not joules">

Torque has the same dimensions as work — newtons times metres — but it is not energy. Work is a scalar (*force along a displacement*); torque is a vector (*force sideways from an axis*). Never convert $\text{N·m}$ of torque into joules. Also check the angle: when a force acts at $30^\circ$ to the position vector, the torque is halved ($\sin30^\circ$), not full strength.

</learning-block>

## 3. Angular momentum of a particle

The rotational partner of linear momentum $\vec p=m\vec v$ is

$$
\vec L=\vec r\times\vec p,
$$

again about a stated point, with magnitude $L=rp\sin\theta=mv\,r_\perp$. For a particle moving in a circle of radius $r$ with its velocity tangent to the circle, $\vec r\perp\vec p$ and

$$
L=mvr.
$$

Straight-line motion can carry angular momentum too: a particle sliding along the line $y=2\ \text{m}$ at speed $3\ \text{m/s}$ (a $2\ \text{kg}$ particle) has constant torque-free momentum but $L_z = -(2)(3)(2)=-12\ \text{kg·m}^2/\text{s}$ about the origin, because its lever arm $r_\perp=2\ \text{m}$ stays fixed. Angular momentum is about *the point you measure from*, not about turning as such.

Like torque, $\vec L$ changes origin to origin. And like momentum, it is a vector: two wheels on one axle spinning oppositely carry angular momenta that subtract, not add.

## 4. The rotational second law: $\vec\tau_{net}=d\vec L/dt$

Differentiate the particle definition:

$$
\frac{d\vec L}{dt}=\frac{d}{dt}(\vec r\times\vec p)
=\underbrace{\vec v\times\vec p}_{=0}+\vec r\times\frac{d\vec p}{dt}
=\vec r\times\vec F=\vec\tau.
$$

The first term vanishes because $\vec v\times\vec v=0$; the second is the torque. So for a particle, and by summation for any system (internal torques cancel in third-law pairs),

$$
\boxed{\ \vec\tau_{net}=\frac{d\vec L}{dt}\ }
$$

the exact rotational form of Newton's second law, with no approximations.

For a **rigid body spinning about a fixed axis**, every particle shares the angular velocity $\omega$ with tangential speed $v_i=r_i\omega$, so the axial component of angular momentum is

$$
L=\sum m_i v_i r_i=\left(\sum m_i r_i^2\right)\omega=I\omega,
$$

where

$$
I=\sum m_i r_i^2
$$

is the **moment of inertia** about that axis — the subject of the next module. With $I$ constant along a fixed axis,

$$
\tau_{net}=\frac{dL}{dt}=I\frac{d\omega}{dt}=I\alpha.
$$

Read the parallel with translation: force accelerates mass, torque accelerates rotational inertia. A larger $I$ means the same torque produces a smaller $\alpha$.

## 5. Worked example: a flywheel spun by a rope

A light rope is wrapped around the rim of a flywheel whose moment of inertia about its axle is $I=4\ \text{kg·m}^2$ and whose radius is $R=0.25\ \text{m}$. The rope is pulled with a steady $20\ \text{N}$ force, tangent to the rim.

**Torque.** The force is perpendicular to the radius, so $\sin\theta=1$:

$$
\tau=RF=(0.25)(20)=5.0\ \text{N·m},
$$

directed along the axle.

**Angular acceleration.**

$$
\alpha=\frac{\tau}{I}=\frac{5.0}{4}=1.25\ \text{rad/s}^2.
$$

**After $4\ \text{s}$ from rest:**

$$
\omega=\alpha t=1.25\times4=5.0\ \text{rad/s},\qquad
\theta=\tfrac12\alpha t^2=\tfrac12(1.25)(16)=10\ \text{rad}\approx1.6\ \text{revolutions}.
$$

**Sanity checks.** The rim speed $v=\omega R=(5.0)(0.25)=1.25\ \text{m/s}$ — a believable wheel, not something absurd. The angular momentum $L=I\omega=4\times5=20\ \text{kg·m}^2/\text{s}$ also equals $\tau\,t=(5)(4)$, the impulse of torque, exactly as $mv= Ft$ for a point mass started from rest.

What if the same $20\ \text{N}$ acted along the wheel's radius (a spoke direction)? Then $\theta=0$, $\tau=0$, and nothing spins — the force merely loads the bearings.

## Try it yourself

**Q1.** A $15\ \text{N}$ force acts at the free end of a $0.40\ \text{m}$ spanner, at $30^\circ$ to the spanner's length. Find the torque about the bolt.

<details><summary>Show the reasoning</summary>

$$
\tau=rF\sin\theta=(0.40)(15)\sin30^\circ=(6.0)(0.5)=3.0\ \text{N·m}.
$$

Only the component perpendicular to the spanner, $15\sin30^\circ=7.5\ \text{N}$, contributes; the $13\ \text{N}$ component along the spanner merely stresses it.
</details>

**Q2.** A $0.50\ \text{kg}$ ball moves at $4\ \text{m/s}$ in a circle of radius $0.60\ \text{m}$. Find the magnitude and direction of its angular momentum.

<details><summary>Show the reasoning</summary>

$$
L=mvr=(0.50)(4)(0.60)=1.2\ \text{kg·m}^2/\text{s}.
$$

Direction: perpendicular to the plane of motion, via the right-hand rule — say along $+z$ if the ball travels anticlockwise viewed from above.
</details>

**Q3.** Two identical wheels on the same axle spin at $6\ \text{rad/s}$ in opposite directions. If each has $I=0.30\ \text{kg·m}^2$, what is the total angular momentum about the axle, and what happens if friction between the wheels' axles gradually locks them together?

<details><summary>Show the reasoning</summary>

Equal and opposite axial momenta: $L_1=+I\omega$, $L_2=-I\omega$, so the total about the axle is **zero**. When internal axle friction brings both to a common final state, angular momentum (zero) is conserved: the wheels must end at rest, with the initial rotational kinetic energy $\tfrac12(2)(0.30)(6^2)=10.8\ \text{J}$ entirely converted to thermal energy by the internal friction. Equal-and-opposite spins can hide a great deal of energy with no net angular momentum — compare colliding equal-and-opposite momenta in translation.
</details>

## Remember

- Torque is the moment of force about a **stated point or axis**: $\tau=rF\sin\theta=F\,r_\perp$; a force through the axis turns nothing.
- Angular momentum is $\vec L=\vec r\times\vec p$ for a particle ($L=mvr$ in circular motion) and $L=I\omega$ for a rigid body on a fixed axis.
- The exact rotational second law is $\vec\tau_{net}=d\vec L/dt$; for fixed-axis rotation with constant $I$ it becomes $\tau_{net}=I\alpha$.
- A net torque of zero means constant angular momentum — even if the body wobbles and changes shape.
- To use $\tau=I\alpha$ fully you need $I$ for the actual axis; the next module computes it, including the parallel and perpendicular axis theorems.
