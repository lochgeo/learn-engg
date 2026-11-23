## Counting field lines through a surface

Hold a wire loop in a stream of water. The volume of water passing through the loop per second depends on the flow speed, the area of the loop, and the angle between the flow and the plane of the loop. Electric flux uses the same bookkeeping for an electric field: it counts how much field "pierces" a surface. Gauss's law then turns that count into a remarkably simple statement about the charge inside.

## 1. Electric flux

For a flat surface of area $A$ in a **uniform** field $\vec E$, the electric flux is

$$
\Phi_E=\vec E\cdot\vec A=EA\cos\theta,
$$

where $\theta$ is the angle between $\vec E$ and the **area vector** $\vec A$. The area vector is perpendicular to the surface; for a closed surface it is chosen to point outward. The SI unit of flux is

$$
1\ \text{N}\,\text{m}^2/\text{C},
$$

which is also $1\ \text{V}\,\text{m}$.

When $\vec E$ is parallel to the surface, $\theta=90^\circ$ and the flux is zero: the field skims the surface without piercing it. When $\vec E$ is perpendicular, the flux is maximum, $EA$.

For a curved surface or a non-uniform field, divide the surface into small patches $d\vec A$ and add:

$$
\Phi_E=\int \vec E\cdot d\vec A.
$$

For a **closed** surface, outward flux is positive and inward flux is negative.

## 2. Flux from a point charge through a sphere

Place a point charge $Q$ at the centre of a sphere of radius $r$. The field is radial and has the same magnitude everywhere on the sphere:

$$
E=\frac{1}{4\pi\varepsilon_0}\frac{Q}{r^2}.
$$

The area of the sphere is $4\pi r^2$, and $\vec E$ is parallel to $d\vec A$ at every point, so

$$
\Phi_E=E(4\pi r^2)
=\frac{1}{4\pi\varepsilon_0}\frac{Q}{r^2}(4\pi r^2)
=\frac{Q}{\varepsilon_0}.
$$

The radius cancels. This is the central result: the flux through a closed surface depends on the charge inside, not on the size or shape of the surface.

## 3. Gauss's law

For **any** closed surface,

$$
\oint \vec E\cdot d\vec A=\frac{q_{\text{encl}}}{\varepsilon_0},
$$

where $q_{\text{encl}}$ is the net charge enclosed by the surface. The surface is called a **Gaussian surface**; it is imaginary, and you may choose it anywhere.

Three consequences deserve emphasis:

1. **Only enclosed charge contributes to the net flux.** A charge outside the surface sends field lines in through one part and out through another, so its net contribution is zero.
2. **The field on the surface is due to all charges**, inside and outside. Gauss's law relates the *net flux* to the *enclosed charge*; it does not say the field is produced only by the enclosed charge.
3. **Zero net flux does not mean zero field.** A closed surface can enclose zero net charge while the field on it is large; the inward and outward contributions cancel.

Gauss's law is a fundamental law of electrostatics, equivalent in content to Coulomb's law for static charges. Its power is that a cleverly chosen surface can give the field without integration.

## 4. Worked example: charge at the centre of a cube

A charge $q=8.85\ \mu\text{C}$ sits at the centre of a cube. Find the total flux through the cube and the flux through one face.

The total flux depends only on the enclosed charge:

$$
\Phi_{\text{total}}=\frac{q}{\varepsilon_0}
=\frac{8.85\times10^{-6}}{8.85\times10^{-12}}
=1.0\times10^6\ \text{N}\,\text{m}^2/\text{C}.
$$

By symmetry, the six faces are equivalent, so each face carries one sixth:

$$
\Phi_{\text{face}}=\frac{1.0\times10^6}{6}\approx1.7\times10^5\ \text{N}\,\text{m}^2/\text{C}.
$$

**Sanity check.** The flux is positive because the enclosed charge is positive; outward field lines cross the surface. The flux per face is not obtained by multiplying the field at the face centre by the face area, because the field varies across a flat face. Symmetry, not a local field value, gives the one-sixth result.

A related standard case: if the same charge sits at one **corner** of a cube, only one eighth of the total flux passes through that cube, because eight identical cubes would share the charge at their common corner. Then $\Phi_{\text{cube}}=q/(8\varepsilon_0)$.

## 5. Gauss's law and conductors

Take a Gaussian surface entirely inside a conductor in electrostatic equilibrium. The field is zero everywhere on that surface, so the flux is zero. Gauss's law then gives

$$
q_{\text{encl}}=0.
$$

Any net charge on the conductor must therefore lie on its **surface**. This is the field-theory reason behind the rule stated in the first module. If the conductor has a cavity with no charge inside, the field in the cavity is also zero. If a charge is placed inside the cavity, an equal and opposite charge is induced on the cavity wall and the net charge on the outer surface adjusts so that the conductor still has zero internal field.

## 6. When Gauss's law gives the field directly

Gauss's law is always true, but it gives $E$ easily only when symmetry makes the field constant in magnitude over the Gaussian surface and parallel or perpendicular to it. The next module applies this idea to three standard shapes: an infinite line, an infinite sheet and a spherical shell. Choosing the wrong surface turns a one-line calculation into an impossible integral.

<learning-block type="mistake" title="Flux and Gauss errors">

- **Treating zero flux as zero field.** A closed surface around a dipole has zero net flux, yet the field is strong almost everywhere on it.
- **Including outside charges in $q_{\text{encl}}$.** Only charge inside the chosen surface counts towards the net flux, even though outside charges affect the field on the surface.
- **Forgetting the angle in $\Phi=EA\cos\theta$.** Flux is the component of field perpendicular to the surface, not the full field magnitude times area.
- **Using a Gaussian surface that does not match the symmetry.** A cube around a point charge is valid, but it does not make the field constant over a face; it cannot be used to extract $E$ by division.

</learning-block>

## Try it yourself

**A.** A charge of $2.0\ \mu\text{C}$ is at the centre of a sphere of radius $0.50\ \text{m}$. Find the total flux through the sphere and the field at its surface.

<details><summary>Show the reasoning</summary>

$$
\Phi=\frac{2.0\times10^{-6}}{8.85\times10^{-12}}\approx2.3\times10^5\ \text{N}\,\text{m}^2/\text{C}.
$$

The field at the surface is

$$
E=(9.0\times10^9)\frac{2.0\times10^{-6}}{(0.50)^2}=7.2\times10^4\ \text{N/C}.
$$

As a check, $EA=(7.2\times10^4)(4\pi(0.50)^2)\approx2.3\times10^5\ \text{N}\,\text{m}^2/\text{C}$.
</details>

**B.** A cube sits in a uniform field of $500\ \text{N/C}$ perpendicular to one pair of faces. What is the net flux through the cube?

<details><summary>Show the reasoning</summary>

The field enters through one face and leaves through the opposite face. The two fluxes have equal magnitude and opposite signs, so the net flux is zero. This agrees with Gauss's law: the cube encloses no charge. The flux through either of those faces individually has magnitude $EA=500(0.20)^2=20\ \text{N}\,\text{m}^2/\text{C}$ for a $0.20\ \text{m}$ cube.
</details>

**C.** A charge $q=1.6\ \mu\text{C}$ is placed at a corner of a cube. Find the flux through the cube.

<details><summary>Show the reasoning</summary>

The charge is shared by eight identical cubes meeting at that corner, so the cube receives one eighth of the total flux:

$$
\Phi=\frac{q}{8\varepsilon_0}
=\frac{1.6\times10^{-6}}{8(8.85\times10^{-12})}
\approx2.3\times10^4\ \text{N}\,\text{m}^2/\text{C}.
$$

Each of the three faces meeting at that corner has zero flux through it, because the field from the corner charge lies in the plane of each such face.
</details>

## Remember

- Flux is $\Phi=\vec E\cdot\vec A=EA\cos\theta$ for a uniform field and a flat surface; outward is positive for a closed surface.
- For a closed surface, $\oint\vec E\cdot d\vec A=q_{\text{encl}}/\varepsilon_0$.
- Net flux depends only on enclosed charge; the field on the surface still includes contributions from outside charges.
- Zero net flux does not imply zero field.
- In a conductor at equilibrium, a Gaussian surface inside encloses zero charge, so net charge resides on the surface.

The next module uses Gauss's law on line, sheet and spherical charge distributions, where symmetry makes the calculation short.
