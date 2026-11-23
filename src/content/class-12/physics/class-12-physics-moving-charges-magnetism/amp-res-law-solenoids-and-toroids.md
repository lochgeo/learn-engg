## Ampère’s law and the fields of coils

When the conductor has enough symmetry, integrating the Biot–Savart law element by element is unnecessary. Ampère’s law relates the field around a closed loop to the current passing through it, and it delivers the fields of a long straight wire, a solenoid and a toroid in a few lines.

## 1. Ampère’s law

For any closed path (an Amperian loop),

$$
\oint \vec B\cdot d\vec l = \mu_0 I_{\text{enclosed}},
$$

where $I_{\text{enclosed}}$ is the net current passing through the surface bounded by the loop, with sign set by the right-hand rule. The law holds for steady currents in magnetostatics. It is most useful when $\vec B$ is constant in magnitude along the chosen loop and either parallel or perpendicular to $d\vec l$.

## 2. Long straight wire

Choose a circular Amperian loop of radius $r$ around an infinite (or very long) straight wire carrying current $I$. By symmetry, $B$ is tangential and constant in magnitude on the loop:

$$
B(2\pi r) = \mu_0 I \quad\Rightarrow\quad B = \frac{\mu_0 I}{2\pi r}.
$$

The field falls as $1/r$ and circles the wire. This is the reference result against which solenoid and toroid fields are compared.

## 3. The solenoid

A solenoid is a helical winding of wire. For a long solenoid with $n$ turns per unit length carrying current $I$, take a rectangular Amperian loop with one side inside (length $l$) and the opposite side outside. The field outside an ideal long solenoid is zero, and the field inside is uniform and parallel to the axis. Hence

$$
B\,l = \mu_0 (n l) I \quad\Rightarrow\quad B = \mu_0 n I.
$$

If the solenoid has $N$ turns over length $L$, then $n=N/L$ and $B=\mu_0 N I/L$. The direction is along the axis, given by the right-hand rule (fingers along current, thumb along $\vec B$). Near the ends of a finite solenoid the field is weaker; the formula is for the interior of a long solenoid.

## 4. The toroid

A toroid is a solenoid bent into a circle. For an Amperian loop of radius $r$ inside the winding (between inner and outer radii), enclosing $N$ turns,

$$
B(2\pi r) = \mu_0 N I \quad\Rightarrow\quad B = \frac{\mu_0 N I}{2\pi r}.
$$

The field is tangential, varies as $1/r$ across the cross-section, and is zero outside the winding (both in the hole and beyond the outer radius). Treat $r$ as the mean radius when the cross-section is small.

## 5. Worked examples

**Solenoid.** A solenoid of length $0.50\ \text{m}$ has $1000$ turns and carries $2.0\ \text{A}$.

$$
n = \frac{1000}{0.50}=2000\ \text{turns/m},\qquad
B = \mu_0 n I = (4\pi\times10^{-7})(2000)(2.0)=5.03\times10^{-3}\ \text{T}.
$$

**Toroid.** A toroid has $500$ turns, mean radius $0.10\ \text{m}$, and carries $3.0\ \text{A}$.

$$
B = \frac{\mu_0 N I}{2\pi r}
  = \frac{(4\pi\times10^{-7})(500)(3.0)}{2\pi(0.10)}
  = 3.0\times10^{-3}\ \text{T}.
$$

Sanity check: the toroid field at its mean radius is comparable to the solenoid field above; both are in the millitesla range for hundreds of ampere-turns. A straight wire carrying the same $3\ \text{A}$ at $0.10\ \text{m}$ gives only $\mu_0 I/(2\pi r)=6.0\times10^{-6}\ \text{T}$, two orders of magnitude smaller, because the turns add.

## 6. A common mistake

**Applying the solenoid formula to a short coil or to the end region.** The formula $B=\mu_0 nI$ assumes an infinite (or very long) solenoid; for a short coil the field at the centre is less and the field outside is not zero. A second error is using the inner or outer radius of a toroid as if the field were uniform; it varies as $1/r$, so the mean radius is the honest single value.

## Try it yourself

**A.** A long straight wire carries $8.0\ \text{A}$. Find the field at $0.04\ \text{m}$ from it.

<details><summary>Show the reasoning</summary>

$B=\mu_0 I/(2\pi r)=(4\pi\times10^{-7})(8.0)/(2\pi\times0.04)=4.0\times10^{-5}\ \text{T}$.

</details>

**B.** A solenoid of length $0.25\ \text{m}$ has $500$ turns and carries $4.0\ \text{A}$. Find its internal field.

<details><summary>Show the reasoning</summary>

$n=500/0.25=2000\ \text{turns/m}$. $B=\mu_0 n I=(4\pi\times10^{-7})(2000)(4.0)=1.01\times10^{-2}\ \text{T}$.

</details>

**C.** A toroid with $800$ turns has inner radius $0.06\ \text{m}$ and outer radius $0.10\ \text{m}$, and carries $2.0\ \text{A}$. Estimate the field at the mean radius.

<details><summary>Show the reasoning</summary>

Mean radius $r=(0.06+0.10)/2=0.08\ \text{m}$. $B=\mu_0 NI/(2\pi r)=(4\pi\times10^{-7})(800)(2.0)/(2\pi\times0.08)=4.0\times10^{-3}\ \text{T}$. The actual field ranges from $5.3\times10^{-3}\ \text{T}$ at the inner radius to $3.2\times10^{-3}\ \text{T}$ at the outer radius.

</details>

## Remember

- Ampère’s law: $\oint\vec B\cdot d\vec l=\mu_0 I_{\text{enclosed}}$.
- Straight wire: $B=\mu_0 I/(2\pi r)$.
- Long solenoid: $B=\mu_0 nI=\mu_0 NI/L$, field outside $\approx0$.
- Toroid: $B=\mu_0 NI/(2\pi r)$ inside, zero outside.
- Choose the Amperian loop to match the symmetry; then $B$ is constant on it.

Next, the forces these fields exert on other currents and on current loops.