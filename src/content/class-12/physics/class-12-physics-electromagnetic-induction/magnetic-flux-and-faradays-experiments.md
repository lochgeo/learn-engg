## A current with no battery in sight

Wind a coil around a cardboard tube, connect its ends to a sensitive galvanometer, and push a bar magnet into the tube. The needle jumps. Hold the magnet still and the needle returns to zero. Pull the magnet out and the needle jumps the other way. Nothing in the circuit supplies chemical energy, yet a current appears whenever the magnetic situation around the coil is changing.

That observation is the seed of electromagnetic induction. Before we can state a law for it, we need a quantity that measures how much magnetic field passes through a circuit. That quantity is **magnetic flux**.

## 1. Magnetic flux: field through an area

For a flat surface of area $A$ in a uniform magnetic field $\vec B$, the magnetic flux is

$$
\Phi_B=\vec B\cdot\vec A=BA\cos\theta,
$$

where $\theta$ is the angle between $\vec B$ and the **area vector** (the normal to the surface). The area vector has magnitude $A$ and points perpendicular to the surface; for an open surface such as a coil, you may choose either normal, but you must keep that choice throughout a calculation.

The SI unit of flux is the **weber**:

$$
1\ \text{Wb}=1\ \text{T}\cdot\text{m}^2.
$$

Flux is a scalar, but it can be positive or negative because the normal direction is a choice. A field parallel to the surface gives zero flux; a field along the normal gives the maximum flux $BA$. For a coil of $N$ turns, each turn sees nearly the same flux, so the **flux linkage** is $N\Phi_B$.

<learning-block type="concept" title="Flux is not field strength">

A large flux does not mean a strong field, and a strong field does not guarantee a large flux. Flux combines field, area and orientation. A weak field through a huge loop can have more flux than a strong field through a tiny one.

</learning-block>

### A quick flux calculation

A circular loop of radius $0.10\ \text{m}$ lies perpendicular to a field of $0.60\ \text{T}$. Its area is

$$
A=\pi r^2=\pi(0.10)^2=3.14\times10^{-2}\ \text{m}^2,
$$

so

$$
\Phi_B=BA\cos0^\circ=(0.60)(3.14\times10^{-2})=1.88\times10^{-2}\ \text{Wb}.
$$

If the normal is tilted to $60^\circ$ from the field, the flux falls to $BA\cos60^\circ=9.42\times10^{-3}\ \text{Wb}$. Tilt the loop until its plane contains the field ($\theta=90^\circ$) and the flux is zero.

## 2. Faraday’s experiments: the common thread

Faraday’s notebooks describe several arrangements that at first look unrelated. In each case a galvanometer deflects only while something is changing.

1. **A magnet and a coil.** Moving the magnet towards or away from a coil gives a momentary current. Faster motion gives a larger deflection. A stationary magnet gives nothing.
2. **A moving coil.** Holding the magnet still and moving the coil produces the same effect. Only **relative** motion matters.
3. **Two neighbouring coils.** A current in one coil is switched on, switched off, or varied. The second coil, connected to a galvanometer, shows a pulse only while the first current is changing.
4. **A rotating coil.** A coil spun in a steady magnetic field produces a continuously alternating emf. This is the principle of the generator.

The experiments rule out the naive idea that a magnetic field by itself drives a current. A steady field can be enormous and still produce no current in a stationary circuit. The essential condition is a **changing magnetic flux through the circuit**.

## 3. Three ways to change the flux

Because $\Phi_B=BA\cos\theta$, a change in any one of the three factors changes the flux:

- **Change $B$.** Switch an electromagnet on or off, or move the circuit into a region of different field strength. This is how a transformer works.
- **Change $A$.** Expand, contract, or deform the loop. A rod sliding on conducting rails changes the area enclosed by the circuit, so it changes the flux.
- **Change $\theta$.** Rotate the coil. A generator uses this route, turning a coil continuously in a fixed field.

In real devices, two or three of these changes may happen at once. The law we meet next handles all of them through the single quantity $\Delta\Phi_B/\Delta t$.

## 4. Worked example: average emf from a changing field

A coil has $N=200$ turns and area $A=0.020\ \text{m}^2$. Its plane is perpendicular to a uniform field. The field rises uniformly from $0.10\ \text{T}$ to $0.50\ \text{T}$ in $0.40\ \text{s}$. Find the change in flux and the average emf induced.

The normal is parallel to the field, so $\cos\theta=1$. Initially,

$$
\Phi_i=B_iA=(0.10)(0.020)=2.0\times10^{-3}\ \text{Wb},
$$

and finally

$$
\Phi_f=B_fA=(0.50)(0.020)=1.0\times10^{-2}\ \text{Wb}.
$$

Thus

$$
\Delta\Phi_B=\Phi_f-\Phi_i=8.0\times10^{-3}\ \text{Wb}.
$$

The rate of change is

$$
\frac{\Delta\Phi_B}{\Delta t}=\frac{8.0\times10^{-3}}{0.40}=2.0\times10^{-2}\ \text{Wb/s}.
$$

With $200$ turns, the average emf magnitude is

$$
|\varepsilon|=N\left|\frac{\Delta\Phi_B}{\Delta t}\right|
=200(2.0\times10^{-2})=4.0\ \text{V}.
$$

**Sanity check.** A few volts from a few milliwebers changing in under half a second is reasonable for a laboratory coil. The result scales the way it should: doubling the number of turns doubles the emf, and halving the time doubles it again. The direction of the induced current is not given by this magnitude alone; Lenz’s law supplies it in the next module.

## 5. A common mistake: confusing flux with its rate of change

A coil can sit in a very strong field for hours with a perfectly steady flux through it. The galvanometer reads zero. What matters is not the size of $\Phi_B$ but whether $\Phi_B$ is changing.

<learning-block type="mistake" title="“Big flux, big emf”">

A student sees a coil in a $2\ \text{T}$ field, computes a large flux, and predicts a large induced emf. The prediction fails if the field is constant. A stationary coil in a steady field has zero emf no matter how large the flux. Conversely, a small flux that changes quickly can produce a large emf.

The same error appears with angles: using the angle between the field and the **plane** of the loop instead of the angle between the field and the **normal** gives $\sin\theta$ where $\cos\theta$ belongs.

</learning-block>

## Try it yourself

**A.** A rectangular loop measures $0.15\ \text{m}$ by $0.20\ \text{m}$ and lies perpendicular to a $0.80\ \text{T}$ field. Find the flux through it.

<details><summary>Show the reasoning</summary>

The area is $A=(0.15)(0.20)=0.030\ \text{m}^2$. With the normal along the field,

$$
\Phi_B=BA=(0.80)(0.030)=0.024\ \text{Wb}.
$$

</details>

**B.** A loop of area $0.040\ \text{m}^2$ has its normal at $60^\circ$ to a $0.50\ \text{T}$ field. Find the flux.

<details><summary>Show the reasoning</summary>

$$
\Phi_B=BA\cos60^\circ=(0.50)(0.040)(0.50)=0.010\ \text{Wb}.
$$

The factor $\cos60^\circ=\frac12$ is the projection of the area perpendicular to the field.

</details>

**C.** A $50$-turn coil of area $0.010\ \text{m}^2$ is perpendicular to a field that is reduced from $0.30\ \text{T}$ to zero in $0.050\ \text{s}$. Find the average emf magnitude.

<details><summary>Show the reasoning</summary>

The flux change per turn is

$$
|\Delta\Phi_B|=(0.30)(0.010)=3.0\times10^{-3}\ \text{Wb}.
$$

Therefore

$$
|\varepsilon|=N\frac{|\Delta\Phi_B|}{\Delta t}
=50\frac{3.0\times10^{-3}}{0.050}=3.0\ \text{V}.
$$

The induced current will try to maintain the disappearing flux; that direction is the subject of the next module.

</details>

## Remember

- Magnetic flux is $\Phi_B=BA\cos\theta$, measured in webers; $\theta$ is the angle to the **normal**.
- Flux linkage multiplies the flux per turn by the number of turns: $N\Phi_B$.
- Faraday’s experiments all show the same thing: a **changing** flux drives an emf, not a steady flux.
- Flux changes when $B$, $A$, or the orientation changes.
- The average emf is proportional to $N$ and to the rate of change of flux; the flux itself does not set the emf.

The next module turns these observations into Faraday’s law and uses Lenz’s law to fix the direction of the induced current.
