## Why mass alone is not enough

A ring and a disc can have exactly the same mass and radius, yet a torque spins the disc up to speed much faster than the ring. The difference is where the mass sits relative to the axis, not how much there is. Rotation cares about $mr^2$ — mass multiplied by the *square* of its distance from the axis — and the sum of all those $mr^2$ terms is the **moment of inertia**. This module defines it, tabulates the standard results worth remembering, and gives two theorems that save you from doing a single integral in most examination problems.

## 1. Defining moment of inertia

For a rigid body rotating about an axis, each particle at distance $r_i$ from the axis carries tangential inertia. Adding the contributions gives the moment of inertia about that axis:

$$
I=\sum_i m_i r_i^2 \qquad\text{or, for a continuous body,}\qquad I=\int r^2\,dm.
$$

The unit is $\text{kg·m}^2$, and $I$ is always positive. Two features dominate every problem:

- **$I$ depends on the axis.** A metre rod has one value about its centre and four times as much about its end. Never quote a moment of inertia without naming the axis.
- **Distant mass dominates.** Doubling a particle's distance from the axis quadruples its contribution. This is why a ring ($I=MR^2$, all mass at the rim) beats a disc ($I=\tfrac12MR^2$) in rotational sluggishness — the disc's mass is spread inward.

Moment of inertia plays the role of mass in rotation: it is the resisting factor in $\tau=I\alpha$ and the "mass" hidden inside rotational kinetic energy $\tfrac12 I\omega^2$. Because the $r^2$ weighting is brutal, moment of inertia is a purely geometric property of mass distribution — two bodies with identical shapes and density profiles have identical $I/M$ ratios even if one is steel and the other wood.

## 2. Radius of gyration

It is often convenient to imagine the whole mass $M$ squeezed to a single point at some distance $k$ from the axis, chosen so that point gives the same $I$:

$$
I=Mk^2\qquad\Longleftrightarrow\qquad k=\sqrt{I/M}.
$$

The distance $k$ is the **radius of gyration**. It tells you at a glance how far the mass effectively sits: for a uniform disc about its symmetry axis $k=R/\sqrt2$; for a solid sphere about a diameter $k=\sqrt{2/5}\,R$; for a rod about its centre $k=L/\sqrt{12}$. Note $k$ is a length measured *from the axis*, and it depends on the axis exactly as $I$ does.

## 3. Standard results

These appear constantly in problems; the table is worth knowing cold. Each body is uniform, with total mass $M$.

| Body | Axis | $I$ |
| --- | --- | --- |
| Rod, length $L$ | Through centre, perpendicular to rod | $\dfrac{ML^2}{12}$ |
| Rod, length $L$ | Through one end, perpendicular to rod | $\dfrac{ML^2}{3}$ |
| Ring or thin hollow cylinder, radius $R$ | Central symmetry axis | $MR^2$ |
| Ring | Through centre, along a diameter | $\dfrac{MR^2}{2}$ |
| Disc or solid cylinder, radius $R$ | Central symmetry axis | $\dfrac{MR^2}{2}$ |
| Disc | Through centre, along a diameter | $\dfrac{MR^2}{4}$ |
| Solid sphere, radius $R$ | Any diameter | $\dfrac{2MR^2}{5}$ |
| Thin hollow sphere, radius $R$ | Any diameter | $\dfrac{2MR^2}{3}$ |
| Rectangular plate, sides $a$ and $b$ | Through centre, perpendicular to plate | $\dfrac{M(a^2+b^2)}{12}$ |

Two sanity habits: (i) hollow bodies outrank solid ones because their mass is displaced outward (hollow sphere $\tfrac23 MR^2$ > solid sphere $\tfrac25 MR^2$); (ii) for a sphere, all diameters are symmetry axes, so any diameter gives the same value — a sphere never "prefers" an axis.

## 4. The parallel-axis theorem

If you know $I_{cm}$ about an axis through the centre of mass, the value about any **parallel** axis a distance $d$ away is

$$
I = I_{cm} + Md^2.
$$

The added term is exactly as if the entire mass sat at the centre of mass and swung on a rod of length $d$. The theorem requires the two axes to be parallel — no slant anywhere.

**Worked example (rod about its end).** For a uniform rod, $I_{cm}=ML^2/12$ about the perpendicular axis through the centre. The axis through an end is a distance $d=L/2$ away and parallel to it:

$$
I_{\text{end}}=\frac{ML^2}{12}+M\left(\frac{L}{2}\right)^2
=\frac{ML^2}{12}+\frac{ML^2}{4}
=\frac{ML^2}{3},
$$

which is precisely the table value. The theorem rebuilt a standard result in one line — this is the fastest way to recover it if you forget the table.

**Worked example (a shifted disc).** A uniform disc has $M=1.0\ \text{kg}$, $R=0.20\ \text{m}$. About its central axis, $I_{cm}=\tfrac12MR^2=\tfrac12(1.0)(0.04)=0.020\ \text{kg·m}^2$. About a parallel axis *tangent to the edge* ($d=R$):

$$
I=0.020+(1.0)(0.20)^2=0.020+0.040=0.060\ \text{kg·m}^2,
$$

which in standard form is $\tfrac32 MR^2$ — the disc's symmetry-axis value plus the full $MR^2$ swing term. (Note this tangent axis is parallel to the symmetry axis, not lying in the plane of the disc; an in-plane tangent axis is a different question.)

## 5. The perpendicular-axis theorem

For a **flat (planar) body** lying in the $xy$-plane, the moments about three mutually perpendicular axes $x$, $y$ and $z$ (with $z$ perpendicular to the plane) obey

$$
I_z = I_x + I_y.
$$

Every mass element has $r_z^2 = x^2 + y^2 = r_x^2 + r_y^2$; summing gives the theorem. Note the restriction: the radii of gyration satisfy $k_z^2=k_x^2+k_y^2$, and it fails for any three-dimensional body.

**Worked example (disc).** About the symmetry axis, $I_z=\tfrac12MR^2$. By the symmetry of a disc about any diameter, $I_x=I_y$. The theorem then forces

$$
I_x=I_y=\frac{I_z}{2}=\frac{MR^2}{4},
$$

which is the disc's diameter value in the table — derived, not memorised.

<learning-block type="mistake" title="Theorems on the wrong axes">

The parallel-axis theorem needs genuinely parallel axes; applying it from the symmetry axis of a disc to a diameter (which is perpendicular, not parallel) is a certain error — use the perpendicular-axis theorem there instead. A second trap: the distance $d$ runs from the **centre of mass**, not from a convenient edge or from the old axis at an arbitrary point. And a very common numerical slip: forgetting $d^2$ — if $d=2\ \text{m}$, the correction is $4M$, not $2M$.

</learning-block>

## Try it yourself

**Q1.** Two particles of mass $1\ \text{kg}$ and $3\ \text{kg}$ are fixed $2.0\ \text{m}$ apart on a light rod. Locate the centre of mass, find the moment of inertia about a perpendicular axis through it, and the radius of gyration.

<details><summary>Show the reasoning</summary>

The centre of mass is $1.5\ \text{m}$ from the $1\ \text{kg}$ mass (inverse-ratio rule: $3$ times closer to the $3\ \text{kg}$ mass), i.e. $0.5\ \text{m}$ from the $3\ \text{kg}$ mass. Then

$$
I_{cm}=(1)(1.5)^2+(3)(0.5)^2=2.25+0.75=3.0\ \text{kg·m}^2,
$$

and

$$
k=\sqrt{I/M}=\sqrt{3.0/4.0}\approx0.87\ \text{m}.
$$

Cross-check by the parallel-axis theorem: about the axis through the $1\ \text{kg}$ mass, $I=I_{cm}+Md^2=3.0+(4)(1.5)^2=3.0+9.0=12\ \text{kg·m}^2$, which matches the direct sum $0+3(2)^2=12$. ✓
</details>

**Q2.** Without integrating, explain why a thin uniform hollow sphere has a larger moment of inertia about its diameter than a solid sphere of the same mass and radius.

<details><summary>Show the reasoning</summary>

Because $I=\int r^2\,dm$ weights mass by the *square* of distance from the axis, and in the hollow sphere every gram sits at the full distance $R$, whereas in the solid sphere the average distance is less (mass is spread through the interior, from the centre outward). Quantitatively $\tfrac23 MR^2 > \tfrac25MR^2$: displacing mass outward from the centre always increases $I$ for the same $M$ and axis.
</details>

**Q3.** A uniform square plate of side $a$ and mass $M$ lies in the $xy$-plane. Using the perpendicular axis theorem and symmetry, find its moment of inertia about (a) an axis along one edge in the plane, and (b) the axis through its centre perpendicular to the plate.

<details><summary>Show the reasoning</summary>

Start with (b). The plate is a rectangle with $a=b$, so the standard result gives the moment about the central axis perpendicular to the plate:

$$
I_z=\frac{M(a^2+a^2)}{12}=\frac{Ma^2}{6}.
$$

By symmetry the two in-plane central axes are equivalent, $I_x=I_y$, and the perpendicular-axis theorem then splits $I_z$ equally:

$$
I_x=I_y=\frac{I_z}{2}=\frac{Ma^2}{12}
$$

about an in-plane axis through the centre parallel to a side.

Finally (a): an edge axis is parallel to that central in-plane axis, a distance $d=a/2$ away, so

$$
I_{\text{edge}}=\frac{Ma^2}{12}+M\left(\frac{a}{2}\right)^2=\frac{Ma^2}{12}+\frac{Ma^2}{4}=\frac{Ma^2}{3}.
$$

Same value as a rod of length $a$ about its end — because each strip of the plate behaves exactly like that rod.
</details>

## Remember

- $I=\sum m_ir_i^2$: rotation's inertia, in $\text{kg·m}^2$, always about a **named axis**, always positive, always larger for mass held farther out.
- Radius of gyration $k=\sqrt{I/M}$ condenses the whole distribution into one effective distance.
- Hollow beats solid for the same $M$ and $R$: ring $MR^2$ > disc $\tfrac12MR^2$; hollow sphere $\tfrac23MR^2$ > solid sphere $\tfrac25MR^2$.
- Parallel axis: $I=I_{cm}+Md^2$ for parallel axes only; perpendicular axis: $I_z=I_x+I_y$ for flat bodies only.
- With $I$ in hand, $\tau=I\alpha$ becomes a working tool; the next module puts it to work computing accelerations, energies and pulley systems.
