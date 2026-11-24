## A circuit that seems to break Ampère’s law

Take a wire carrying a steady current and charge a parallel-plate capacitor. Choose a circular loop around the wire and stretch any surface across that loop. If the surface is a flat disc cutting the wire, the current passes through it. Curve the surface instead so that it passes through the gap between the capacitor plates, and no charge crosses it at all. Ampère’s law in its original form,

$$
\oint \vec B\cdot d\vec l=\mu_0 I_{\text{enclosed}},
$$

then gives two different magnetic fields for the same loop. Something is missing — not in the experiment, but in the equation.

Maxwell’s repair is the idea in this lesson. The gap is not electrically empty of influence: while the capacitor charges, the electric field between its plates grows, and a changing electric field must be counted alongside a conduction current.

## 1. Electric flux through a surface

For a surface with area elements $d\vec A$, the electric flux is

$$
\Phi_E=\int \vec E\cdot d\vec A.
$$

The vector $d\vec A$ points normally to the surface, so the flux measures how much field passes through it. Its SI unit is $\text{V·m}$ (equivalently $\text{N·m}^2/\text{C}$). For a flat area $A$ with a uniform field at angle $\theta$ to the normal, $\Phi_E=EA\cos\theta$. Through a closed surface, Gauss’s law gives $\Phi_E=Q_{\text{enclosed}}/\varepsilon_0$. That statement will be useful when we check the capacitor.

## 2. Defining displacement current

Maxwell defined the **displacement current** as $I_d=\varepsilon_0\,d\Phi_E/dt$, and the corresponding displacement current density as $\vec J_d=\varepsilon_0\,\partial \vec E/\partial t$. The derivative is a rate of change, so a steady field gives zero displacement current even if the field is large. The name is historical: $I_d$ is not a flow of electric charge. It is a changing electric field entered into the current side of Ampère’s law.

For the charging capacitor, let the plates have area $A$ and carry charge $q$. Ignoring edge effects, the field between them is $E=\sigma/\varepsilon_0=q/(\varepsilon_0 A)$. The flux through a surface spanning the gap is $\Phi_E=EA=q/\varepsilon_0$. Therefore

$$
I_d=\varepsilon_0\frac{d}{dt}\left(\frac{q}{\varepsilon_0}\right)=\frac{dq}{dt}=I_c,
$$

where $I_c$ is the conduction current in the connecting wire. The displacement current in the gap has exactly the magnitude of the current that is charging the plates. In the ideal capacitor it is in the same direction as the conduction current approaching the positive plate.

## 3. The Ampère–Maxwell law

The corrected law is $\oint \vec B\cdot d\vec l=\mu_0\left(I_c+\varepsilon_0\,d\Phi_E/dt\right)$. The two contributions on the right are the conduction current through the chosen surface and the displacement current through the same surface. The sum is sometimes called the total current. With it, the two surfaces in the opening paragraph give the same answer, because the surface through the gap picks up the changing flux that the surface through the wire picks up as conduction current.

This also restores continuity of charge. For a closed surface, whatever conduction current leaves must be balanced by the rate of change of enclosed charge, and the displacement-current term supplies exactly the missing bookkeeping.

A useful application is the magnetic field inside the gap of a circular capacitor. Take a loop of radius $r$ centred on the axis, with $r$ smaller than the plate radius. By symmetry the field is tangential and constant in magnitude:

$$
B(2\pi r)=\mu_0\varepsilon_0\left(\pi r^2\frac{dE}{dt}\right),
$$

so

$$
B=\frac{\mu_0\varepsilon_0 r}{2}\frac{dE}{dt}.
$$

The field is strongest at the plate edge and zero on the axis. It is a real magnetic field, produced where no charge is crossing.

<learning-block type="concept" title="Why the correction was not optional">

Without the displacement term, Ampère’s law would depend on which surface you chose for the same loop. Maxwell’s term makes the law surface-independent and makes charge conservation automatic. It also predicts that a changing electric field can sustain a magnetic field far from any circuit — the first step towards an electromagnetic wave.

</learning-block>

## 4. Worked example: a charging capacitor

A parallel-plate capacitor has plates of area $0.020\ \text{m}^2$ separated by $2.0\ \text{mm}$. It is charged by a constant current of $1.0\ \text{mA}$. Find the rate of change of the electric field, the displacement current density, and check the displacement current.

The capacitance is $C=\varepsilon_0 A/d=(8.85\times10^{-12})(0.020)/(2.0\times10^{-3})=8.85\times10^{-11}\ \text{F}$. Since $I=C\,dV/dt$, $dV/dt=(1.0\times10^{-3})/(8.85\times10^{-11})=1.13\times10^{7}\ \text{V/s}$. The field is $E=V/d$, so

$$
\frac{dE}{dt}=\frac{1}{d}\frac{dV}{dt}
=\frac{1.13\times10^{7}}{2.0\times10^{-3}}
=5.65\times10^{9}\ \text{V/(m·s)}.
$$

The displacement current density is $J_d=\varepsilon_0\,dE/dt=(8.85\times10^{-12})(5.65\times10^{9})=0.050\ \text{A/m}^2$. Multiplying by the plate area gives $I_d=(0.050)(0.020)=1.0\times10^{-3}\ \text{A}$, equal to the charging current, as it must be in this geometry. The numbers are large for a small capacitor but self-consistent: a milliampere charges a few tens of picofarads very quickly, so the field changes rapidly.

<learning-block type="mistake" title="Displacement current is not charge crossing the gap">

A common error is to say that displacement current “flows through the dielectric” or that it is the motion of charge across the capacitor gap. Nothing crosses an ideal gap. The displacement current is a changing electric flux. It is measured in amperes only because it enters the same equation as a conduction current, and it produces a magnetic field in the same way. A second error is to assume it is always present: a constant field has $d\Phi_E/dt=0$, so the displacement current vanishes in the steady state.

</learning-block>

## Try it yourself

**A.** A capacitor is charging with a conduction current of $2.5\ \text{mA}$. What is the displacement current between the plates, and in which direction does it point relative to the conduction current in the wire?

<details><summary>Show the reasoning</summary>

The displacement current has the same magnitude, $2.5\ \text{mA}$. While the field is increasing, it points in the same sense as the conduction current approaching the positive plate, so that the total current is continuous through the gap.
</details>

**B.** In some region the electric field is $E=400\sin(2\pi\times10^{9}t)\ \text{V/m}$. Find the maximum displacement current density.

<details><summary>Show the reasoning</summary>

Differentiate:

$$
\frac{dE}{dt}=400(2\pi\times10^{9})\cos(2\pi\times10^{9}t).
$$

The maximum magnitude is $2.51\times10^{12}\ \text{V/(m·s)}$. Thus

$$
J_{d,\max}=(8.85\times10^{-12})(2.51\times10^{12})
\approx22\ \text{A/m}^2.
$$

The field oscillates, so the displacement current reverses every half-cycle.
</details>

**C.** Does a wire carrying a steady current produce a displacement current in the surrounding vacuum? Explain.

<details><summary>Show the reasoning</summary>

The steady current creates a steady magnetic field, and the associated electric field is also steady. A constant field has zero time derivative, so there is no displacement current in the surrounding vacuum. The magnetic field of the wire is described by the ordinary conduction-current term alone.
</details>

## Remember

- Displacement current is $I_d=\varepsilon_0\,d\Phi_E/dt$; it is a changing electric flux, not moving charge.
- In a charging capacitor, $I_d$ equals the conduction current in the wire, so the total current is continuous through the gap.
- The Ampère–Maxwell law adds $\mu_0\varepsilon_0\,d\Phi_E/dt$ to the conduction current.
- A steady field produces no displacement current; only a changing field does.
- Maxwell’s correction is what allows changing electric and magnetic fields to sustain each other in empty space. The next lesson turns that possibility into a travelling wave.
