## Why a moving charge feels a sideways push

A stationary charge in a magnetic field feels nothing. Move it, and the field pushes sideways — never along the motion, never along the field. That sideways push is the first hint that magnetism is not a force on charge itself but a force on *moving* charge, and it is why the magnetic force can bend a particle’s path without ever changing its speed.

## 1. The Lorentz force

For a charge $q$ moving with velocity $\vec v$ through a magnetic field $\vec B$, the magnetic force is

$$
\vec F_B = q\,\vec v\times\vec B.
$$

Its magnitude is

$$
F_B = |q|\,v\,B\,\sin\theta,
$$

where $\theta$ is the angle between $\vec v$ and $\vec B$. The SI unit of $B$ is the tesla:

$$
1\ \text{T}=1\ \frac{\text{N}}{\text{A·m}}=1\ \frac{\text{N·s}}{\text{C·m}}.
$$

Direction is fixed by the right-hand rule for the cross product: point fingers along $\vec v$, curl toward $\vec B$; the thumb gives $\vec v\times\vec B$ for a positive charge. For a negative charge, reverse the result. The force is always perpendicular to both $\vec v$ and $\vec B$, so it has no component along the motion and no component along the field.

When both electric and magnetic fields are present, the total force on the charge is the **Lorentz force**

$$
\vec F = q(\vec E+\vec v\times\vec B).
$$

## 2. What the force does — and does not do

Because $\vec F_B\perp\vec v$ at every instant, the magnetic force does **no work**:

$$
dW = \vec F_B\cdot d\vec r = \vec F_B\cdot\vec v\,dt = 0.
$$

So a magnetic field changes the direction of a charged particle’s velocity but never its magnitude. Kinetic energy is conserved in a pure magnetic field; only an electric field or another interaction can change the speed. This single fact explains why a particle in a uniform magnetic field moves in a circle (or a helix) at constant speed, and why magnetic forces cannot be used as an energy source.

Three immediate consequences are worth memorising:

- If $\theta=0$ or $180^\circ$ (motion parallel or antiparallel to $\vec B$), then $\sin\theta=0$ and $F_B=0$.
- If $q=0$ or $v=0$, there is no magnetic force.
- The magnetic force is not a “friction-like” drag; it does not oppose motion, it deflects it.

## 3. Right-hand rule in practice

A common, reliable procedure:

1. Point the fingers of your right hand along the velocity $\vec v$.
2. Curl them toward $\vec B$ through the smaller angle.
3. Your thumb points along $\vec v\times\vec B$.
4. If $q<0$, flip the direction.

Equivalently, for a wire, point the thumb along the current and the fingers curl in the direction of $\vec B$ produced by that current. The same rule applies to the force on a moving charge.

## 4. Worked example

A particle carries charge $q=2.0\times10^{-6}\ \text{C}$ and moves at $v=3.0\times10^{4}\ \text{m/s}$ through a uniform field $B=0.50\ \text{T}$. The angle between $\vec v$ and $\vec B$ is $30^\circ$. Find the magnetic force.

$$
F_B = |q|\,v\,B\,\sin\theta
     = (2.0\times10^{-6})(3.0\times10^{4})(0.50)\sin30^\circ.
$$

Since $\sin30^\circ=0.50$,

$$
F_B = (2.0\times10^{-6})(3.0\times10^{4})(0.50)(0.50)
     = 1.5\times10^{-2}\ \text{N}.
$$

Sanity check: the force is perpendicular to the motion, so it does no work and the speed stays $3.0\times10^{4}\ \text{m/s}$. If the charge were negative, the force would have the same magnitude but point opposite to $\vec v\times\vec B$. If the motion were parallel to $\vec B$, the force would be zero despite the large field.

## 5. A common mistake

**Using $F=qvB$ without the $\sin\theta$ factor.** This only works when the motion is perpendicular to the field. For motion at an angle, the perpendicular component $v_\perp=v\sin\theta$ is what matters; the parallel component $v_\parallel=v\cos\theta$ is unaffected by the field. A related error is assuming the magnetic force can speed a particle up — it cannot, because it is always perpendicular to the velocity.

## Try it yourself

**A.** An electron ($q=-1.6\times10^{-19}\ \text{C}$) moves at $4.0\times10^{6}\ \text{m/s}$ perpendicular to a $0.20\ \text{T}$ field. Find the force magnitude and state its direction relative to $\vec v\times\vec B$.

<details><summary>Show the reasoning</summary>

$F=|q|vB=(1.6\times10^{-19})(4.0\times10^{6})(0.20)=1.28\times10^{-13}\ \text{N}$. Because the charge is negative, the force is opposite to $\vec v\times\vec B$.

</details>

**B.** A proton moves through a region where $\vec E$ and $\vec B$ are both present. The electric force on it is $3.2\times10^{-15}\ \text{N}$ in the $+x$ direction and the magnetic force is $3.2\times10^{-15}\ \text{N}$ in the $-x$ direction. What is the net force?

<details><summary>Show the reasoning</summary>

The two forces are along the same line and opposite, so they cancel: $\vec F_{net}=0$. The proton moves with constant velocity through the crossed fields — the principle of a velocity selector.

</details>

**C.** Why does a magnetic field do no work on a moving charge, even though it exerts a force?

<details><summary>Show the reasoning</summary>

Work requires a force component along the displacement. The magnetic force is always perpendicular to the instantaneous velocity, hence to the instantaneous displacement, so $\vec F_B\cdot d\vec r=0$. The field can change the direction of motion but never its kinetic energy.

</details>

## Remember

- Magnetic force acts only on *moving* charge: $\vec F_B=q\,\vec v\times\vec B$.
- The force is perpendicular to both $\vec v$ and $\vec B$; it does no work and cannot change speed.
- Magnitude is $|q|vB\sin\theta$; it is zero for motion parallel to $\vec B$.
- For negative charge, reverse the right-hand-rule direction.
- Total force in both fields: $\vec F=q(\vec E+\vec v\times\vec B)$.

The next module uses this force to describe the curved paths a charge follows in a uniform magnetic field, and how crossed electric and magnetic fields can select a single speed.