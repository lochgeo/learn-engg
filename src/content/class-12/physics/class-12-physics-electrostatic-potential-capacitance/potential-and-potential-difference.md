## Why a "height" for charge is useful

A charged particle released near another charge speeds up, and the force changes as it moves. Calculating the work by integrating the force at every point is possible but slow. Electrostatic potential replaces that work integral with a single scalar number attached to each point of space: the potential energy a unit positive charge would have there. The idea is the electrical version of gravitational potential, where $gh$ is the energy per unit mass at height $h$. Once the potential is known everywhere, the energy of any charge is one multiplication away.

## 1. Potential as energy per unit charge

Place a charge $q$ at a point where its electrostatic potential energy is $U$. The **electric potential** at that point is

$$
V=\frac{U}{q}.
$$

Potential is a scalar, not a vector. Its SI unit is the **volt**:

$$
1\ \text{V}=1\ \text{J/C}.
$$

The potential belongs to the field, not to the test charge used to measure it. Dividing by $q$ removes the charge, just as dividing a force by a test charge gave the electric field in the previous chapter.

For a collection of charges confined to a finite region, the zero of potential is conventionally placed at infinity. Changing that reference adds the same constant to every point and changes no physical prediction, because only differences in potential enter energy calculations.

## 2. Potential difference and work

Move a charge $q$ slowly from $A$ to $B$, keeping its kinetic energy unchanged. An external agent must do work $W_{\text{ext}}$, and the **potential difference** is defined by

$$
V_B-V_A=\frac{W_{\text{ext}}(A\to B)}{q}.
$$

The electric field itself does the opposite work:

$$
W_{\text{field}}(A\to B)=q(V_A-V_B).
$$

These signs are worth reading twice. If $V_B>V_A$, a positive charge has more potential energy at $B$, so an external agent must push it uphill and does positive work. The field does negative work. A negative charge reverses both statements: it falls naturally towards higher potential and the field does positive work on it.

For a small displacement $d\vec r$, the field does work $q\vec E\cdot d\vec r=-q\,dV$. Dividing by $q$ gives

$$
dV=-\vec E\cdot d\vec r.
$$

In one dimension this becomes $E_x=-dV/dx$. The electric field is the **negative gradient** of the potential: it points from high potential towards low potential, and its magnitude is the rate at which potential falls with distance. For a uniform field, the magnitude is

$$
E=\frac{\Delta V}{d},
$$

where $\Delta V$ is the potential difference across a distance $d$ measured along the field. The unit $\text{V/m}$ is therefore the same as $\text{N/C}$.

## 3. Potential of a point charge

Take a point charge $Q$ at the origin and set $V=0$ at infinity. The field at distance $r$ is $E=kQ/r^2$, directed radially. Integrating from infinity to $r$,

$$
V(r)=-\int_{\infty}^{r}\vec E\cdot d\vec r
=-\int_{\infty}^{r}\frac{kQ}{r'^2}\,dr'
=\frac{kQ}{r}.
$$

Here $k=1/(4\pi\varepsilon_0)=9.0\times10^9\ \text{N}\,\text{m}^2/\text{C}^2$. The sign of $V$ follows the sign of $Q$: potential is positive around a positive charge and negative around a negative charge. Unlike the field, potential does not point anywhere; it is a number.

Potentials from several charges add as ordinary scalars:

$$
V=\sum_i \frac{kq_i}{r_i}.
$$

No components are needed. This is often much faster than adding field vectors, but it also hides direction information: a point can have zero potential while the field there is strong.

## 4. Worked example: moving a charge between two radii

A point charge $Q=+5.0\ \mu\text{C}$ is fixed in vacuum. Find the potential at $0.25\ \text{m}$ and at $0.50\ \text{m}$ from it, and the work an external agent does in moving a $+2.0\ \mu\text{C}$ charge from the farther point to the nearer one.

At $0.25\ \text{m}$,

$$
V_1=(9.0\times10^9)\frac{5.0\times10^{-6}}{0.25}
=1.8\times10^5\ \text{V}.
$$

At $0.50\ \text{m}$,

$$
V_2=(9.0\times10^9)\frac{5.0\times10^{-6}}{0.50}
=9.0\times10^4\ \text{V}.
$$

The potential difference is $V_1-V_2=9.0\times10^4\ \text{V}$, with the nearer point higher. The external work is

$$
W_{\text{ext}}=q(V_1-V_2)
=(2.0\times10^{-6})(9.0\times10^4)
=0.18\ \text{J}.
$$

**Sanity check.** The field does $-0.18\ \text{J}$, so the charge gains $0.18\ \text{J}$ of potential energy when pushed closer to the positive source. A potential of order $10^5\ \text{V}$ at a few tens of centimetres from a microcoulomb charge is typical: $kQ$ is about $4.5\times10^4\ \text{V}\,\text{m}$.

## 5. Reading signs without a formula sheet

- Near a positive charge, potential is positive and decreases as you move away.
- Near a negative charge, potential is negative and rises towards zero as you move away.
- A positive charge lowers its potential energy by moving towards lower potential.
- A negative charge lowers its potential energy by moving towards higher potential.
- The field always points downhill in potential, but a charge may be pushed uphill by an external agent.

<learning-block type="mistake" title="Zero field and zero potential are different">

The midpoint between two equal positive charges has $\vec E=0$ but $V=2kq/a\neq0$. The midpoint between a dipole has $V=0$ but $\vec E\neq0$. Never infer one from the other. A second common error is to use $V_B-V_A=W_{\text{field}}/q$ without the minus sign: the field does positive work when the charge moves to **lower** potential, so $W_{\text{field}}=q(V_A-V_B)$.

</learning-block>

## Try it yourself

**A.** Find the potential $0.30\ \text{m}$ from a point charge of $-3.0\ \mu\text{C}$.

<details><summary>Show the reasoning</summary>

$$
V=(9.0\times10^9)\frac{-3.0\times10^{-6}}{0.30}
=-9.0\times10^4\ \text{V}.
$$

The negative sign means a positive test charge there would have negative potential energy relative to infinity.
</details>

**B.** Two $+2.0\ \mu\text{C}$ charges are $0.40\ \text{m}$ apart. Find the potential and the field at their midpoint.

<details><summary>Show the reasoning</summary>

Each charge is $0.20\ \text{m}$ from the midpoint, so

$$
V=2(9.0\times10^9)\frac{2.0\times10^{-6}}{0.20}
=1.8\times10^5\ \text{V}.
$$

The two field vectors have equal magnitudes and opposite directions, so $\vec E=0$. The potential does not cancel because it is a scalar and both contributions are positive.
</details>

**C.** A uniform field of $200\ \text{V/m}$ points east. Find the potential difference between two points $5.0\ \text{cm}$ apart along the field, and state which point is at the higher potential.

<details><summary>Show the reasoning</summary>

$$
|\Delta V|=Ed=(200)(0.050)=10\ \text{V}.
$$

The field points from high to low potential, so the western point is $10\ \text{V}$ higher than the eastern point.
</details>

## Remember

- Potential is potential energy per unit charge, $V=U/q$, measured in volts.
- Potential difference is the external work per unit charge moved slowly between two points: $V_B-V_A=W_{\text{ext}}/q$.
- For a point charge, $V=kQ/r$ with zero at infinity; potentials add as scalars with their signs.
- The field is the negative gradient of potential, $E_x=-dV/dx$; it points from high to low potential.
- Zero field does not imply zero potential, and zero potential does not imply zero field.

The next module turns potential into a property of a whole configuration and maps the surfaces on which the potential is constant.
