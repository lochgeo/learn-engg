## From a force between two charges to a property of space

Coulomb's law is a rule for a pair of charges. If a laboratory contains twenty charged objects, applying that rule to every pair becomes bookkeeping. The **electric field** replaces the bookkeeping with a single idea: each charge fills the space around it with a field, and any charge placed at a point responds only to the field at that point. The field is real in the operational sense — it carries energy and momentum, and electromagnetic waves are ripples in it.

## 1. Defining the electric field

Place a small positive **test charge** $q_0$ at a point and measure the electric force $\vec F$ on it. The electric field at that point is

$$
\vec E=\lim_{q_0\to0}\frac{\vec F}{q_0}.
$$

The limit matters because the test charge must not disturb the charges that create the field. The field is a vector; its direction is the direction of the force on a **positive** test charge. Its SI unit is the newton per coulomb:

$$
1\ \text{N/C}=1\ \text{V/m}.
$$

The second form becomes useful when potential is introduced in the next chapter. The field exists at a point whether or not a test charge is there — the test charge is only a measuring device.

## 2. Field of a point charge

For a point charge $Q$ at the origin, the force on a test charge $q_0$ at distance $r$ is $kQq_0/r^2$. Dividing by $q_0$ gives

$$
E=\frac{1}{4\pi\varepsilon_0}\frac{|Q|}{r^2}.
$$

The direction is radially outward if $Q>0$ and radially inward if $Q<0$. In vector form,

$$
\vec E=\frac{1}{4\pi\varepsilon_0}\frac{Q}{r^2}\hat r,
$$

where $\hat r$ points from the charge to the field point. The field obeys an inverse-square fall-off, just as the force does.

## 3. Superposition of fields

Fields add as vectors:

$$
\vec E=\vec E_1+\vec E_2+\cdots.
$$

This is often easier than adding forces because the test charge has already been divided out. For a collection of point charges,

$$
\vec E=\sum_i \frac{1}{4\pi\varepsilon_0}\frac{q_i}{r_i^2}\hat r_i,
$$

with $\hat r_i$ pointing from charge $i$ to the point where the field is evaluated. For a continuous distribution, replace the sum by an integral over charge elements.

## 4. Field lines

A **field line** is a curve whose tangent at every point gives the direction of $\vec E$ there. Field lines are a compact map of the field, but they obey strict rules:

- Lines begin on positive charges and end on negative charges, or extend to infinity.
- The density of lines (number crossing unit area perpendicular to them) represents the field strength.
- Lines never cross, because the field has only one direction at each point.
- Lines do not form closed loops in electrostatics; a closed loop would imply a net circulation of the field, which static charges cannot produce.
- At the surface of a conductor, field lines meet it perpendicularly, and there are no field lines inside the conductor in equilibrium.

A **uniform field** is drawn as parallel, equally spaced straight lines. Between two large, oppositely charged parallel plates, the field is approximately uniform away from the edges.

<learning-block type="check" title="Lines are not trajectories">

A field line shows the direction of the force on a positive charge at each point. It is **not** generally the path a moving charge follows. A charge with an initial velocity across the lines curves under the force, much as a projectile curves under gravity; its actual path need not coincide with a field line. A charge released from rest does start along the local field line, but its inertia can carry it off that line as the direction changes.

</learning-block>

## 5. Worked example: field at the midpoint of two charges

Charges $q_1=+2.0\ \mu\text{C}$ and $q_2=-2.0\ \mu\text{C}$ are $0.40\ \text{m}$ apart. Find the electric field at the midpoint between them.

Each charge is $0.20\ \text{m}$ from the midpoint. The field due to $q_1$ has magnitude

$$
E_1=(9.0\times10^9)\frac{2.0\times10^{-6}}{(0.20)^2}
=\frac{1.8\times10^4}{0.040}=4.5\times10^5\ \text{N/C},
$$

and points away from the positive charge, towards $q_2$. The field due to $q_2$ has the same magnitude, because the charges have equal size and the distances are equal; it points towards the negative charge, also towards $q_2$. The two fields are in the same direction, so

$$
E_{\text{net}}=4.5\times10^5+4.5\times10^5=9.0\times10^5\ \text{N/C},
$$

directed from the positive charge towards the negative charge.

**Sanity check.** The point is only $0.20\ \text{m}$ from a microcoulomb charge, and $kQ/r^2$ gives a field of order $10^5$–$10^6\ \text{N/C}$ at such distances. If the charges had been equal and both positive, the two field vectors at the midpoint would have cancelled instead, giving zero.

## 6. A charge in a uniform field

If a particle of charge $q$ and mass $m$ sits in a uniform field $\vec E$, the electric force is $\vec F=q\vec E$ and the acceleration is

$$
\vec a=\frac{q\vec E}{m}.
$$

For a positive charge, $\vec a$ is along $\vec E$; for an electron, it is opposite. If the field is uniform, the motion is exactly like projectile motion: constant acceleration in one direction and constant velocity in the perpendicular direction. For example, an electron in a field of $2.0\times10^4\ \text{N/C}$ has acceleration

$$
a=\frac{(1.6\times10^{-19})(2.0\times10^4)}{9.11\times10^{-31}}
\approx3.5\times10^{15}\ \text{m/s}^2,
$$

which is enormous because the electron mass is tiny. Such accelerations are the basis of cathode-ray tubes and particle deflectors.

## 7. Fields of extended objects

Real charged objects are not points. A charged ring, disc or cylinder produces a field found by dividing the object into charge elements and integrating the contributions. Symmetry often simplifies the result: on the axis of a uniformly charged ring, the perpendicular components cancel and only the axial component survives. The next two modules handle the dipole, where two equal and opposite charges produce a characteristic field pattern, and Gauss's law, which avoids integration when the symmetry is high.

<learning-block type="mistake" title="Misreading field diagrams and formulas">

- **Assuming zero field where field lines are absent.** The diagram may simply not show that region; evaluate the field from the sources rather than from the drawing density alone.
- **Thinking a test charge is needed for a field to exist.** The field belongs to the source charges; the test charge only measures it.
- **Using $E=kQ/r^2$ inside a charged sphere.** That formula holds outside a spherically symmetric distribution, not inside a shell or a solid sphere.
- **Adding field magnitudes without checking direction.** At the midpoint of two equal positive charges the fields cancel; at the midpoint of a positive and a negative charge they add.

</learning-block>

## Try it yourself

**A.** Find the electric field $0.50\ \text{m}$ from a point charge of $+4.0\ \mu\text{C}$.

<details><summary>Show the reasoning</summary>

$$
E=(9.0\times10^9)\frac{4.0\times10^{-6}}{(0.50)^2}
=\frac{3.6\times10^4}{0.25}=1.44\times10^5\ \text{N/C},
$$

pointing radially away from the charge.
</details>

**B.** Two equal positive charges are separated by a distance $2a$. What is the field at their midpoint?

<details><summary>Show the reasoning</summary>

Each charge produces a field of the same magnitude at the midpoint, and the two vectors point in opposite directions along the joining line. They cancel, so $\vec E=0$. This does not mean there are no source charges; it means the two contributions sum to zero at that one point.
</details>

**C.** An electron is placed in a uniform field of $1.0\times10^4\ \text{N/C}$ pointing east. Find the force on it and its acceleration.

<details><summary>Show the reasoning</summary>

The force magnitude is

$$
F=eE=(1.6\times10^{-19})(1.0\times10^4)=1.6\times10^{-15}\ \text{N}.
$$

Because the electron is negative, the force points **west**, opposite the field. The acceleration is

$$
a=\frac{F}{m}=\frac{1.6\times10^{-15}}{9.11\times10^{-31}}\approx1.8\times10^{15}\ \text{m/s}^2,
$$

also west.
</details>

## Remember

- The electric field is force per unit positive charge: $\vec E=\vec F/q_0$, measured in N/C.
- A point charge produces $E=k|Q|/r^2$, directed away from positive charge and towards negative charge.
- Fields from several sources add as vectors; each source contributes independently.
- Field lines show direction and relative strength, never crossing, and are not particle trajectories.
- In a uniform field a charged particle has constant acceleration $\vec a=q\vec E/m$.

The next module examines the simplest neutral arrangement of two charges — the dipole — and the torque it feels in a field.
