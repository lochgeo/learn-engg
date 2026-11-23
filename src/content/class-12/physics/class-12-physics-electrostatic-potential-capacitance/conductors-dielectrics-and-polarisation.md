## Why a metal changes the field around it

A metal contains charges that are free to move. Place it in an electric field and those charges shift within a fraction of a second until the field inside the metal is cancelled. The conductor does not block the field by magic; it redistributes its own charge until the interior is field-free. An insulator behaves differently: its charges are bound, but they can stretch or rotate slightly, creating a polarisation that also modifies the field. These two responses explain shielding, the behaviour of capacitor dielectrics, and why the capacitance of a device depends on what sits between its plates.

## 1. A conductor in electrostatic equilibrium

In electrostatic equilibrium, no charge moves inside a conductor. If the field inside were nonzero, free electrons would accelerate, so equilibrium requires

$$
\vec E=0\quad\text{inside the conductor}.
$$

Because $E_x=-dV/dx$ and the field vanishes everywhere inside, the potential cannot change from point to point. The whole conducting material, surface and interior, is at **one potential**. That potential need not be zero; it is set by the conductor's net charge and its surroundings.

Three further rules follow:

- **Any net charge on the conductor resides on its outer surface.** A Gaussian surface just inside the conductor encloses no net charge, so the excess charge must lie on the surface.
- **The field just outside is perpendicular to the surface** with magnitude $E=\sigma/\varepsilon_0$, where $\sigma$ is the local surface charge density. A tangential component would push surface charges along the conductor, contradicting equilibrium.
- **Charge concentrates where the surface curves sharply.** The local field is strongest at points and edges, which is why lightning rods and sharp electrodes produce intense fields.

If a conductor has a cavity with no charge inside, the field in the cavity is also zero: the conductor shields the cavity from external fields. If a charge $+q$ is placed inside the cavity, an induced charge $-q$ appears on the cavity wall and $+q$ appears on the outer surface, so the field inside the conducting material remains zero.

## 2. What a dielectric does

A **dielectric** is an insulator placed in a field. Its charges cannot travel through the material, but they can shift locally:

- In a **non-polar** molecule, the applied field separates the centres of positive and negative charge, creating an induced dipole.
- In a **polar** molecule, permanent dipoles rotate to align partially with the field; thermal motion prevents perfect alignment.

Either way the material becomes **polarised**. The resulting bound surface charge produces its own field, directed opposite to the applied field inside the material. For a slab that fills the space between charged plates, with the free charge held fixed, the net field is reduced by a factor $K$:

$$
E=\frac{E_0}{K},
$$

where $E_0$ is the field that would exist in vacuum and $K$ is the **relative permittivity** or **dielectric constant**. $K$ is dimensionless and greater than $1$ for ordinary dielectrics. The permittivity of the material is $\varepsilon=K\varepsilon_0$, and the electric susceptibility $\chi_e$ satisfies $K=1+\chi_e$.

The bound surface charge density on the faces of the slab is

$$
\sigma_b=\sigma\left(1-\frac{1}{K}\right),
$$

where $\sigma$ is the free charge density on the adjacent plate. Then the net field is $(\sigma-\sigma_b)/\varepsilon_0=\sigma/(K\varepsilon_0)=E_0/K$, as required.

<learning-block type="check" title="The battery changes the story">

“A dielectric reduces the field” is true when the **free charge is fixed**, as in an isolated charged capacitor. If the capacitor stays connected to a battery, the potential difference is held constant instead. Then $E=V/d$ is unchanged, and the battery supplies extra free charge to raise $Q$ by the factor $K$. Always ask which quantity is held fixed before predicting what happens.

</learning-block>

## 3. Dielectric strength

Every dielectric breaks down if the field is too large: electrons are torn free and a spark passes. The maximum field a material can tolerate is its **dielectric strength**. Air breaks down at roughly $3\times10^6\ \text{V/m}$ near room conditions, while solid dielectrics tolerate more. This is why high-voltage capacitors use thin solid films rather than air gaps: the film both raises the capacitance and withstands a larger field.

## 4. Worked example: field and potential with a dielectric

A parallel-plate capacitor has a free surface charge density $\sigma=2.0\ \mu\text{C/m}^2$ on its plates and a plate separation $d=1.0\ \text{mm}$. Find the field and potential difference with air between the plates, then repeat for a dielectric of $K=2.5$ that fills the gap.

For air, take $K\approx1$:

$$
E_0=\frac{\sigma}{\varepsilon_0}
=\frac{2.0\times10^{-6}}{8.85\times10^{-12}}
\approx2.3\times10^5\ \text{V/m},
$$

$$
V_0=E_0d=(2.26\times10^5)(1.0\times10^{-3})
\approx2.3\times10^2\ \text{V}.
$$

With the dielectric, the field falls by $K$ (the plates are isolated, so the free charge density stays at $\sigma$):

$$
E=\frac{2.26\times10^5}{2.5}=9.0\times10^4\ \text{V/m},
\qquad
V=Ed=(9.0\times10^4)(1.0\times10^{-3})=90\ \text{V}.
$$

**Sanity check.** The bound charge density is

$$
\sigma_b=\sigma\left(1-\frac{1}{2.5}\right)
=(2.0\times10^{-6})(0.60)
=1.2\times10^{-6}\ \text{C/m}^2,
$$

so the net charge density is $0.80\ \mu\text{C/m}^2$ and the field is $(0.80\times10^{-6})/(8.85\times10^{-12})\approx9.0\times10^4\ \text{V/m}$, matching. Both fields are well below the breakdown strength of air, and a few hundred volts across a millimetre is realistic.

## 5. Connecting this to capacitance

For an isolated charged capacitor, the free charge $Q$ cannot change when a dielectric is inserted. The field and the potential difference both fall by $K$, so the ratio $Q/V$ rises by $K$. That ratio is the capacitance, which the next module defines and calculates. In one sentence: a dielectric makes a capacitor store more charge for the same voltage by weakening the field that the charge must sustain.

<learning-block type="mistake" title="Conductors and dielectrics: three traps">

- **“The field is zero inside, so the potential is zero.”** The field is zero, but the potential is constant and may be large. A charged isolated sphere has a nonzero potential throughout its interior.
- **“A dielectric becomes charged.”** The dielectric remains neutral overall; it develops equal and opposite bound surface charges. No free charge is created.
- **“A dielectric always reduces $E$.”** It reduces $E$ only when the free charge is fixed. With a battery connected, $V$ is fixed, $E=V/d$ stays the same, and $Q$ increases.

</learning-block>

## Try it yourself

**A.** A hollow conductor in electrostatic equilibrium has no charge inside its cavity. What are the field and potential inside the cavity?

<details><summary>Show the reasoning</summary>

The cavity contains no charge and is surrounded by conducting material at one potential. The field inside the cavity is zero, and the potential is constant throughout the cavity, equal to the potential of the conductor. The cavity is shielded from external fields.
</details>

**B.** A dielectric of $K=4.0$ fills the gap of a capacitor where the vacuum field would be $8.0\times10^4\ \text{V/m}$. Find the field inside the dielectric and the potential difference across a $0.50\ \text{mm}$ gap.

<details><summary>Show the reasoning</summary>

$$
E=\frac{E_0}{K}=\frac{8.0\times10^4}{4.0}=2.0\times10^4\ \text{V/m},
$$

$$
V=Ed=(2.0\times10^4)(5.0\times10^{-4})=10\ \text{V}.
$$

This assumes the free charge is fixed, as in an isolated capacitor.
</details>

**C.** A dielectric with $K=2.0$ fills a capacitor whose plates carry $\sigma=4.0\ \mu\text{C/m}^2$. Find the bound surface charge density and the net field.

<details><summary>Show the reasoning</summary>

$$
\sigma_b=\sigma\left(1-\frac{1}{K}\right)
=4.0\left(1-\frac12\right)=2.0\ \mu\text{C/m}^2.
$$

The net charge density is $4.0-2.0=2.0\ \mu\text{C/m}^2$, so

$$
E=\frac{2.0\times10^{-6}}{8.85\times10^{-12}}
\approx2.3\times10^5\ \text{V/m}.
$$

Equivalently, $E_0=\sigma/\varepsilon_0\approx4.5\times10^5\ \text{V/m}$ and $E=E_0/2$.
</details>

## Remember

- In a conductor at equilibrium, $\vec E=0$ inside, the whole conductor is at one potential, and net charge sits on the surface.
- The field just outside a conductor is $\sigma/\varepsilon_0$, perpendicular to the surface.
- A dielectric polarises: bound surface charge opposes the applied field, giving $E=E_0/K$ when the free charge is fixed.
- The dielectric constant $K=\varepsilon/\varepsilon_0$ is dimensionless and greater than one; $\sigma_b=\sigma(1-1/K)$.
- With a battery connected, $V$ is fixed instead, so $E=V/d$ stays the same while the charge rises by $K$.

The next module turns this material response into a device specification: how much charge a given pair of plates holds per volt.
