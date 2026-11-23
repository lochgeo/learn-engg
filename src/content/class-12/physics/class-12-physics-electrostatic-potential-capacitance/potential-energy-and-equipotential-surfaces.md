## Energy belongs to the arrangement

Push two positive charges together and you must do work against their repulsion. Release them and that work returns as kinetic energy. The energy is not stored inside either charge; it belongs to the **configuration** of the pair and the field around them. Potential energy makes this bookkeeping explicit. For electrostatic forces, which are conservative, the work needed to assemble a configuration depends only on the final positions, not on the route taken.

## 1. Potential energy of two point charges

Bring a charge $q_2$ from infinity to a distance $r$ from a fixed charge $q_1$. At the final point the potential due to $q_1$ is $V_1=kq_1/r$, so the external work is $q_2V_1$. With the zero of energy at infinite separation,

$$
U=\frac{kq_1q_2}{r}.
$$

The sign is automatic. Like charges give $U>0$: work must be supplied to bring them together, and the pair can release that energy if allowed to separate. Opposite charges give $U<0$: the field does positive work as they come together, and the bound pair needs energy to be pulled apart. A negative $U$ is not an error; it means the configuration is more stable than infinite separation.

## 2. Systems of more than two charges

For several charges, add the energy of every **distinct pair**:

$$
U=k\sum_{i<j}\frac{q_iq_j}{r_{ij}}.
$$

For three equal charges $q$ at the corners of an equilateral triangle of side $a$, there are three pairs, so $U=3kq^2/a$. An equivalent bookkeeping is

$$
U=\frac12\sum_i q_iV_i,
$$

where $V_i$ is the potential at the position of $q_i$ due to all the **other** charges. The factor $\frac12$ prevents counting each pair twice.

<learning-block type="check" title="Why the factor of one half?">

For two charges, the sum $\sum q_iV_i$ gives $q_1(kq_2/r)+q_2(kq_1/r)=2kq_1q_2/r$. The pair has been counted once from each end, so halving recovers $kq_1q_2/r$. If you instead add the pairs directly, no factor of one half is needed.

</learning-block>

## 3. A charge in an external potential

If a small charge $q$ sits at a point where other sources produce potential $V$, its potential energy in that field is

$$
U=qV.
$$

Only changes matter: $\Delta U=q\Delta V$. The external work needed to move the charge slowly between two points is $q\Delta V$, and the field does $-q\Delta V$. For a positive charge, moving to higher potential raises $U$; for a negative charge, moving to higher potential lowers $U$.

Do not apply $U=qV$ to a charge that is itself one of the sources creating $V$; that would include its own self-energy and double count the interaction. Use the pair sum or the halved sum for a system of sources.

## 4. Equipotential surfaces

An **equipotential surface** is a surface on which every point has the same potential. Moving a charge along such a surface requires no work, because $\Delta V=0$. Three consequences follow:

1. **Equipotentials are perpendicular to field lines.** If the field had a component along an equipotential, moving along it would change the potential.
2. **Equipotentials never intersect.** A point cannot have two potentials at once.
3. **Their spacing shows field strength.** Where equipotentials are close together, the potential changes rapidly over a short distance, so the field is strong.

For a point charge, the equipotentials are concentric spheres. For a uniform field, they are parallel planes perpendicular to the field. The surface of a conductor in electrostatic equilibrium is an equipotential, which is why field lines meet it at right angles.

The relation between field and potential reads

$$
E_x=-\frac{dV}{dx},
$$

so the field points in the direction in which potential decreases most rapidly. In a uniform field, $E=\Delta V/d$ across a distance $d$ measured along the field.

## 5. Worked example: two charges released from rest

Two $+2.0\ \mu\text{C}$ charges, each of mass $1.0\ \text{g}$, are held $0.20\ \text{m}$ apart and then released. Find the initial potential energy, and the speed of each charge when the separation has grown to $0.40\ \text{m}$.

The constant $kq_1q_2$ is

$$
(9.0\times10^9)(2.0\times10^{-6})^2=3.6\times10^{-2}\ \text{J}\,\text{m}.
$$

Thus

$$
U_i=\frac{3.6\times10^{-2}}{0.20}=0.18\ \text{J},
\qquad
U_f=\frac{3.6\times10^{-2}}{0.40}=0.090\ \text{J}.
$$

The lost potential energy becomes kinetic energy shared equally by the two identical charges:

$$
K_{\text{total}}=0.18-0.090=0.090\ \text{J},
\qquad
K_{\text{each}}=0.045\ \text{J}.
$$

With $m=1.0\times10^{-3}\ \text{kg}$,

$$
\frac12(1.0\times10^{-3})v^2=0.045
\quad\Rightarrow\quad
v=\sqrt{90}\approx9.5\ \text{m/s}.
$$

**Sanity check.** Both charges are positive, so they repel and speed up as they separate. The energy lost from the configuration is positive and finite, and the speed is far below relativistic values. If one charge were negative, the pair would attract instead and the potential energy would become more negative as they approached.

## 6. Reading an equipotential map

- Dense equipotentials mean a strong field; widely spaced ones mean a weak field.
- A charge released from rest begins to move towards lower potential energy, not necessarily towards lower potential. Positive charges head downhill in $V$; negative charges head uphill.
- A conductor's surface and interior are at one potential, so there is no field-driven motion of free charge inside it.
- Crossing equipotentials always changes the potential; moving along one never does.

<learning-block type="mistake" title="Counting pairs and reading signs">

The most common energy error is to add $kq_iq_j/r_{ij}$ over every ordered pair and forget that each pair then appears twice. Add over $i<j$, or use $\frac12\sum q_iV_i$. The second error is to treat a negative potential energy as impossible: for an attractive pair it is the expected bound-state result. A third is to assume that a point with $V=0$ has no field; the midpoint of a dipole has zero potential but a strong field.

</learning-block>

## Try it yourself

**A.** Find the potential energy of a $+3.0\ \mu\text{C}$ charge and a $-3.0\ \mu\text{C}$ charge separated by $0.30\ \text{m}$.

<details><summary>Show the reasoning</summary>

$$
U=(9.0\times10^9)\frac{(3.0\times10^{-6})(-3.0\times10^{-6})}{0.30}
=\frac{-8.1\times10^{-2}}{0.30}
=-0.27\ \text{J}.
$$

The negative value means the pair is bound relative to infinite separation.
</details>

**B.** How much external work is needed to move a $+1.0\ \mu\text{C}$ charge from a point at $50\ \text{V}$ to a point at $250\ \text{V}$?

<details><summary>Show the reasoning</summary>

$$
W_{\text{ext}}=q(V_f-V_i)
=(1.0\times10^{-6})(250-50)
=2.0\times10^{-4}\ \text{J}.
$$

The field does $-2.0\times10^{-4}\ \text{J}$ during the same move.
</details>

**C.** In a uniform field, two equipotential surfaces differ by $20\ \text{V}$ and are $4.0\ \text{cm}$ apart along the field. Find the field strength, and state what happens to the spacing if the field is doubled while the potential difference stays $20\ \text{V}$.

<details><summary>Show the reasoning</summary>

$$
E=\frac{\Delta V}{d}=\frac{20}{0.040}=5.0\times10^2\ \text{V/m}.
$$

If $E$ doubles and $\Delta V$ is fixed, the spacing must halve to $2.0\ \text{cm}$: $d=\Delta V/E$.
</details>

## Remember

- Two charges have $U=kq_1q_2/r$, positive for like charges and negative for opposite charges.
- For a system, add distinct pairs or use $\frac12\sum q_iV_i$ to avoid double counting.
- A charge in an external potential has $U=qV$, and only changes $\Delta U=q\Delta V$ are measurable.
- Equipotentials are surfaces of constant potential, perpendicular to field lines and closer together where the field is stronger.
- The field points from high to low potential with magnitude $E=|\Delta V|/d$ in a uniform region.

The next module asks what happens inside real materials, where charges are not free to move everywhere and a dielectric can reshape the field.
