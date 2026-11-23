## Why a bar magnet is a dipole

A bar magnet attracts iron filings most strongly near its two ends and seems to possess two separate "poles". Yet no one has ever isolated a single magnetic pole: cut a magnet in two and each piece becomes a smaller magnet with its own north and south pole. A bar magnet is therefore not a monopole but a **magnetic dipole** — the magnetic analogue of an electric dipole — and its field is the field of two opposite poles held a fixed distance apart.

<learning-block type="concept" title="Magnetic dipole moment">

For a bar magnet with pole strength $m$ (measured in ampere-metre, A·m) and length $2l$ between the poles, the **magnetic dipole moment** is

$$
\vec M = m(2l)\,\hat n,
$$

where $\hat n$ points from the south pole to the north pole. Its SI unit is $\text{A}\,\text{m}^2$. For a current loop the same quantity is $M = IA$ (ampere-turns times area), which is why a planar current loop behaves like a tiny bar magnet.

</learning-block>

## 1. Field lines and what they tell you

Magnetic field lines emerge from the north pole, curve through the surrounding space, and re-enter at the south pole; inside the magnet they run from south to north, completing closed loops. Three consequences follow:

- The field is strongest where the lines are densest, i.e. near the poles.
- The tangent to a field line at any point gives the direction of $\vec B$ there.
- Field lines never cross, because $\vec B$ has a unique direction at each point.

Unlike electric field lines, magnetic field lines have no starting or ending points: they are closed curves. This is the physical content of Gauss's law for magnetism, developed in the next module.

## 2. Field of a short bar magnet

Treat the magnet as two poles $\pm m$ separated by $2l$, and use the inverse-square law for each pole (valid when the observation distance $r$ is much larger than $l$). By superposition:

- **On the axial line** (end-on, along the magnet's axis, distance $r$ from the centre):

$$
B_{\text{axial}} = \frac{\mu_0}{4\pi}\frac{2M}{r^3}.
$$

- **On the equatorial line** (broadside-on, perpendicular to the axis, distance $r$ from the centre):

$$
B_{\text{eq}} = \frac{\mu_0}{4\pi}\frac{M}{r^3}.
$$

Here $\mu_0/(4\pi)=10^{-7}\ \text{T}\,\text{m}/\text{A}$. At the same distance, the axial field is **twice** the equatorial field — the same factor of two as for an electric dipole, with $\vec M$ playing the role of $\vec p$.

These are "short magnet" (dipole) approximations: they assume $r\gg l$. Close to the poles the field deviates from the $1/r^3$ law and must be found by direct superposition of the two poles.

## 3. Direction of the field

On the axis beyond the north pole, $\vec B$ points away from the magnet (north to south externally); on the axis beyond the south pole it points toward the magnet. On the equatorial plane it points opposite to $\vec M$. A compass needle aligns with $\vec B$, so its north-seeking end points along the field direction — which is why a compass placed near a bar magnet points away from the magnet's north pole.

## 4. Torque on a magnetic dipole

A magnetic dipole $\vec M$ in a uniform field $\vec B$ experiences a torque

$$
\vec\tau = \vec M\times\vec B,\qquad \tau = MB\sin\theta,
$$

where $\theta$ is the angle between $\vec M$ and $\vec B$. The torque tends to align $\vec M$ with $\vec B$. The potential energy of the dipole in the field is

$$
U = -\vec M\cdot\vec B = -MB\cos\theta,
$$

so the stable equilibrium is at $\theta=0^\circ$ (aligned) and the unstable one at $\theta=180^\circ$ (anti-aligned). The work done by the field in rotating from $\theta_i$ to $\theta_f$ is $W = MB(\cos\theta_i-\cos\theta_f)$.

## 5. Worked example: field and torque of a bar magnet

A short bar magnet has pole strength $m=100\ \text{A}\,\text{m}$ and length $2l=0.10\ \text{m}$. Find (a) the field on the axis at $0.20\ \text{m}$ from the centre, (b) the field on the equator at the same distance, and (c) the torque when the magnet is held at $30^\circ$ to a uniform field $B=0.50\ \text{T}$.

The dipole moment is

$$
M = m(2l) = (100)(0.10)=10\ \text{A}\,\text{m}^2.
$$

(a) Axial field:

$$
B_{\text{axial}} = (10^{-7})\frac{2(10)}{(0.20)^3}
= \frac{2.0\times10^{-6}}{8.0\times10^{-3}}
= 2.5\times10^{-4}\ \text{T}.
$$

(b) Equatorial field:

$$
B_{\text{eq}} = (10^{-7})\frac{10}{(0.20)^3}
= 1.25\times10^{-4}\ \text{T}.
$$

This is exactly half the axial value, as expected.

(c) Torque:

$$
\tau = MB\sin30^\circ = (10)(0.50)(0.50)=2.5\ \text{N}\,\text{m}.
$$

**Sanity check.** The field at $0.2\ \text{m}$ from a small magnet is a few $\times10^{-4}\ \text{T}$, comparable to Earth's field ($\sim 3\times10^{-5}\ \text{T}$) but larger, so a compass would be strongly deflected. The torque is modest because the magnet is small; aligning it with the field would release $MB(1-\cos30^\circ)\approx0.67\ \text{J}$ of potential energy.

## 6. A common mistake

**Treating a bar magnet as a magnetic monopole.** Because the poles are close together, the field does not fall as $1/r^2$; it falls as $1/r^3$ at distances large compared with the magnet's length. Using $B\propto 1/r^2$ for a bar magnet gives wildly wrong fields and is a frequent source of errors in problems that ask for the field at a point on the axis. Always check $r\gg l$ before using the dipole formulae, and remember that the two poles always occur together.

## Try it yourself

**A.** A short magnet has moment $M=0.50\ \text{A}\,\text{m}^2$. Find the field on its axis at $0.10\ \text{m}$ from the centre.

<details><summary>Show the reasoning</summary>

$$
B_{\text{axial}} = (10^{-7})\frac{2(0.50)}{(0.10)^3}
= \frac{1.0\times10^{-7}}{1.0\times10^{-3}}
= 1.0\times10^{-4}\ \text{T}.
$$

</details>

**B.** At what distance on the axis of the same magnet does the field equal $2.0\times10^{-5}\ \text{T}$?

<details><summary>Show the reasoning</summary>

Set $(10^{-7})\,2M/r^3 = 2.0\times10^{-5}$:

$$
r^3 = \frac{2(10^{-7})(0.50)}{2.0\times10^{-5}}
= 5.0\times10^{-3}\ \text{m}^3,
$$

so $r\approx0.171\ \text{m}$. This is still comfortably larger than a small magnet's length.

</details>

**C.** A magnet with moment $2.0\ \text{A}\,\text{m}^2$ is placed in a field of $0.30\ \text{T}$ at $60^\circ$ to it. Find the torque and the potential energy.

<details><summary>Show the reasoning</summary>

$\tau = MB\sin60^\circ = (2.0)(0.30)(0.866)=0.52\ \text{N}\,\text{m}$.

$U = -MB\cos60^\circ = -(2.0)(0.30)(0.50) = -0.30\ \text{J}$.

The torque pushes the magnet toward alignment, which would lower the energy to $-0.60\ \text{J}$.

</details>

## Remember

- A bar magnet is a dipole: poles always come in opposite pairs.
- Moment $M = m(2l)$ (or $IA$ for a loop), unit $\text{A}\,\text{m}^2$.
- Short-magnet fields: $B_{\text{axial}}\propto 2M/r^3$, $B_{\text{eq}}\propto M/r^3$; axial is twice equatorial.
- Torque $\tau = MB\sin\theta$ aligns the dipole with the field; $U=-MB\cos\theta$.
- Field lines are closed loops — no magnetic monopoles exist.

Next, we examine the global constraint that field lines are closed: Gauss's law for magnetism, and how Earth itself behaves as a giant magnet.