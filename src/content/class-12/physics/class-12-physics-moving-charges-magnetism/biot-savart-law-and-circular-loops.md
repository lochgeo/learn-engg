## Fields created by currents

So far the magnetic field has been given. Now it is produced. A current-carrying conductor creates a magnetic field around itself, and the field of any shape of wire is built by adding the tiny fields of its current elements. The tool for this addition is the Biot–Savart law.

## 1. The Biot–Savart law

For a current element $I\,d\vec l$ at a point, the magnetic field at a position whose vector from the element is $\vec r$ (magnitude $r$) is

$$
d\vec B = \frac{\mu_0}{4\pi}\frac{I\,d\vec l\times\hat r}{r^2},
$$

where $\mu_0=4\pi\times10^{-7}\ \text{T·m/A}$ is the permeability of free space and $\hat r$ points from the element to the field point. The total field is the vector integral

$$
\vec B = \frac{\mu_0 I}{4\pi}\int \frac{d\vec l\times\hat r}{r^2}.
$$

The direction is perpendicular to both $d\vec l$ and $\hat r$; for a straight wire the field lines are circles around the wire, given by the right-hand rule.

## 2. Field on the axis of a circular loop

For a circular loop of radius $R$ carrying current $I$, every element contributes along the axis. At a point on the axis a distance $x$ from the centre, symmetry cancels perpendicular components and the field is

$$
B = \frac{\mu_0 I R^2}{2(R^2+x^2)^{3/2}}.
$$

At the centre ($x=0$),

$$
B_{\text{centre}} = \frac{\mu_0 I}{2R}.
$$

The direction is along the axis, determined by the right-hand rule: curl the fingers along the current and the thumb points along $\vec B$ through the centre.

For a loop with $N$ turns, multiply by $N$.

## 3. Arcs and segments

Because the law is linear, fields add. A circular arc of radius $R$ subtending angle $\theta$ (in radians) at the centre produces at the centre

$$
B = \frac{\mu_0 I}{4\pi R}\,\theta,
$$

with direction perpendicular to the plane of the arc. A straight segment contributes nothing at a point on its perpendicular bisector through the midpoint? More generally, the field of a finite straight wire at perpendicular distance $a$ from its midpoint is

$$
B = \frac{\mu_0 I}{4\pi a}(\sin\theta_1+\sin\theta_2),
$$

where $\theta_1$ and $\theta_2$ are the angles subtended by the ends. These pieces are combined by superposition for any polygonal or curved path.

## 4. Field of a circular current loop as a dipole

Far from the loop ($x\gg R$), the axial field falls as $1/x^3$:

$$
B \approx \frac{\mu_0}{2\pi}\frac{m}{x^3},
$$

where $m=IA$ is the magnetic dipole moment (for $N$ turns, $m=NIA$). This is the magnetic analogue of an electric dipole field and is the basis of the magnetic moment concept used later for torque and galvanometers.

## 5. Worked example

A single circular loop of radius $R=0.10\ \text{m}$ carries $I=5.0\ \text{A}$.

At the centre:

$$
B = \frac{\mu_0 I}{2R}
  = \frac{(4\pi\times10^{-7})(5.0)}{2(0.10)}
  = 3.14\times10^{-5}\ \text{T}.
$$

On the axis at $x=R=0.10\ \text{m}$:

$$
B = \frac{\mu_0 I R^2}{2(R^2+R^2)^{3/2}}
  = \frac{\mu_0 I}{2\sqrt2\,R}
  = \frac{(4\pi\times10^{-7})(5.0)}{2(1.414)(0.10)}
  \approx 1.11\times10^{-5}\ \text{T}.
$$

Sanity check: the axial field at one radius from the centre is about $0.35$ times the central field, which is plausible for a loop whose field spreads out along its axis. A common mistake is to use the infinite-wire formula $\mu_0 I/(2\pi r)$ here; that describes a straight wire, not a loop.

## 6. A common mistake

**Forgetting that the Biot–Savart law is a vector law.** Elements on opposite sides of a loop do not simply add as scalars; their perpendicular components cancel. Always use symmetry to identify which components survive before integrating. A second error is mixing degrees and radians in the arc formula: $\theta$ must be in radians.

## Try it yourself

**A.** A loop of radius $0.05\ \text{m}$ carries $2.0\ \text{A}$. Find the field at its centre.

<details><summary>Show the reasoning</summary>

$B=\mu_0 I/(2R)=(4\pi\times10^{-7})(2.0)/(2\times0.05)=2.51\times10^{-5}\ \text{T}$.

</details>

**B.** For the same loop, find the field on the axis at $0.10\ \text{m}$ from the centre and compare it with the central field.

<details><summary>Show the reasoning</summary>

$B=\mu_0 I R^2/[2(R^2+x^2)^{3/2}]=(4\pi\times10^{-7})(2.0)(0.05)^2/[2(0.0025+0.01)^{3/2}]$. Denominator: $2(0.0125)^{1.5}=2(4.419\times10^{-4})=8.838\times10^{-4}$. Numerator: $2.513\times10^{-9}$. $B=2.84\times10^{-6}\ \text{T}$, about $0.11$ of the central field.

</details>

**C.** A semicircular wire of radius $0.08\ \text{m}$ carries $3.0\ \text{A}$. Find the field at its centre.

<details><summary>Show the reasoning</summary>

$\theta=\pi$ radians. $B=\mu_0 I\theta/(4\pi R)=(4\pi\times10^{-7})(3.0)(\pi)/(4\pi\times0.08)= (3.0\times10^{-7}\pi? )$ compute: numerator $\mu_0 I \theta = 4\pi\times10^{-7}\times3\times\pi = 12\pi^2\times10^{-7}=1.184\times10^{-5}$; denominator $4\pi R=4\pi\times0.08=1.005$; $B=1.18\times10^{-5}\ \text{T}$.

</details>

## Remember

- Biot–Savart: $d\vec B=\frac{\mu_0}{4\pi}\frac{I\,d\vec l\times\hat r}{r^2}$.
- Loop centre: $B=\mu_0 I/(2R)$ (times $N$ for $N$ turns).
- Loop axis: $B=\mu_0 I R^2/[2(R^2+x^2)^{3/2}]$.
- Arc centre: $B=\mu_0 I\theta/(4\pi R)$ with $\theta$ in radians.
- Fields add as vectors; use symmetry to cancel components.

Next, Ampère’s law gives a faster route to the fields of highly symmetric conductors, solenoids and toroids.