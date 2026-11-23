## Two equal and opposite charges, close together

A water molecule has no net charge, yet a charged comb bends a thin stream of water towards it. The reason is that the molecule behaves like a tiny pair of separated charges: the oxygen end is slightly negative and the hydrogen end slightly positive. Any neutral object with such a separation is an **electric dipole**, and its response to a field explains polarisation, microwave heating and the operation of radio antennas.

## 1. The dipole moment

Take charges $+q$ and $-q$ separated by a small distance $2a$. The **electric dipole moment** is

$$
\vec p=q(2a),
$$

with magnitude $p=q(2a)$ and direction from the negative charge towards the positive charge. The SI unit is the coulomb metre ($\text{C}\,\text{m}$). The separation $2a$ is the full distance between the charges, not the distance from the centre to one charge. Some books write the separation as $2l$ or $d$; the symbol is unimportant, but the full separation is.

For a molecule, the dipole moment is measured as a whole and may be quoted in debye: $1\ \text{D}\approx3.34\times10^{-30}\ \text{C}\,\text{m}$.

## 2. Field on the axial line

Put $+q$ at $x=+a$ and $-q$ at $x=-a$, and evaluate the field at a point $P$ on the axis at distance $r$ from the centre, with $r>a$. Both fields are along the axis. The positive charge gives $kq/(r-a)^2$ pointing away from it, and the negative charge gives $kq/(r+a)^2$ pointing towards it; on the far side of the positive charge these two contributions point in opposite directions, and the positive one is larger. Thus

$$
E_{\text{axial}}=kq\left[\frac{1}{(r-a)^2}-\frac{1}{(r+a)^2}\right]
=kq\frac{(r+a)^2-(r-a)^2}{(r^2-a^2)^2}.
$$

The numerator is $4ar$, so

$$
E_{\text{axial}}=\frac{4kqar}{(r^2-a^2)^2}
=\frac{2kpr}{(r^2-a^2)^2}.
$$

For a point far from the dipole, $r\gg a$, the $a^2$ in the denominator can be neglected:

$$
E_{\text{axial}}\approx\frac{2kp}{r^3}.
$$

The field points in the direction of $\vec p$.

## 3. Field on the equatorial line

Now put $P$ on the perpendicular bisector of the dipole, again at distance $r$ from the centre. Each charge is at distance $\sqrt{r^2+a^2}$ from $P$, so each produces the same field magnitude $kq/(r^2+a^2)$. The components along the dipole axis add, while the components parallel to the bisector cancel. The surviving axial components are each multiplied by $a/\sqrt{r^2+a^2}$, giving

$$
E_{\text{equatorial}}=2\frac{kq}{r^2+a^2}\frac{a}{\sqrt{r^2+a^2}}
=\frac{kp}{(r^2+a^2)^{3/2}}.
$$

Far away, $r\gg a$:

$$
E_{\text{equatorial}}\approx\frac{kp}{r^3},
$$

directed **opposite** to $\vec p$. At the same large distance, the axial field is twice the equatorial field. That factor of two is a standard result and a frequent exam question.

## 4. Torque on a dipole in a uniform field

In a uniform field $\vec E$, the forces on the two charges are $+q\vec E$ and $-q\vec E$. They are equal and opposite, so the net force is zero. They do not share a line of action unless the dipole is aligned with the field, so they form a **couple** that tends to rotate the dipole.

If $\theta$ is the angle between $\vec p$ and $\vec E$, the perpendicular separation between the two forces is $2a\sin\theta$. Each force has magnitude $qE$, so the torque magnitude is

$$
\tau=(qE)(2a\sin\theta)=pE\sin\theta.
$$

In vector form,

$$
\vec\tau=\vec p\times\vec E.
$$

The direction given by the right-hand rule is the axis about which the dipole tends to rotate. The torque is zero when $\theta=0^\circ$ or $180^\circ$ and maximum when $\theta=90^\circ$.

## 5. Potential energy of a dipole

The torque does work as the dipole rotates. Taking the potential energy as zero when $\vec p$ is perpendicular to $\vec E$, the potential energy at angle $\theta$ is

$$
U=-pE\cos\theta=-\vec p\cdot\vec E.
$$

The minimum $U=-pE$ occurs at $\theta=0^\circ$, where $\vec p$ is aligned with $\vec E$: this is the **stable equilibrium**. At $\theta=180^\circ$, $U=+pE$ and the equilibrium is unstable. A dipole in a uniform field therefore oscillates about alignment if slightly disturbed, which is why polar molecules can absorb microwave energy.

The work done **by the field** in rotating the dipole from $\theta_i$ to $\theta_f$ is

$$
W_{\text{field}}=-\Delta U=pE(\cos\theta_f-\cos\theta_i).
$$

An external agent doing the rotation slowly does the negative of this work, because it must balance the field torque.

## 6. Worked example: torque and energy

A dipole with $p=4.0\times10^{-9}\ \text{C}\,\text{m}$ sits in a uniform field $E=5.0\times10^4\ \text{N/C}$ at $30^\circ$ to the field.

The torque magnitude is

$$
\tau=pE\sin30^\circ=(4.0\times10^{-9})(5.0\times10^4)(0.50)
=1.0\times10^{-4}\ \text{N}\,\text{m}.
$$

The potential energy is

$$
U=-pE\cos30^\circ=-(2.0\times10^{-4})(0.866)
\approx-1.7\times10^{-4}\ \text{J}.
$$

To rotate the dipole slowly from $0^\circ$ to $30^\circ$, an external agent must raise the energy from $-2.0\times10^{-4}\ \text{J}$ to $-1.73\times10^{-4}\ \text{J}$, so it does about $2.7\times10^{-5}\ \text{J}$ of work. The field does $-2.7\times10^{-5}\ \text{J}$, consistent with the torque opposing the increase in angle.

**Sanity check.** The torque is largest at $90^\circ$ ($2.0\times10^{-4}\ \text{N}\,\text{m}$) and the energy is lowest when aligned. Both are small in absolute terms because the dipole moment and field are modest; molecular dipole moments are of order $10^{-30}\ \text{C}\,\text{m}$, but molecular fields can be far larger.

For the same dipole, the axial field at $r=0.10\ \text{m}$ (with $a\ll r$) would be

$$
E\approx\frac{2kp}{r^3}=\frac{2(9.0\times10^9)(4.0\times10^{-9})}{(0.10)^3}
=7.2\times10^4\ \text{N/C}.
$$

The equatorial field at the same distance would be half of this, $3.6\times10^4\ \text{N/C}$.

## 7. Dipoles in non-uniform fields

In a uniform field, a dipole feels torque but no net force. In a non-uniform field, the two charges sit in regions of different field strength, so the forces no longer cancel. A dipole is then pulled towards the region of stronger field if it is aligned with the field, and pushed away if it is anti-aligned. This is why a charged rod attracts small neutral scraps of paper: the scraps become induced dipoles and are drawn into the stronger field near the rod.

<learning-block type="mistake" title="Dipole pitfalls">

- **Using half the separation for $p$.** The moment is $q$ times the full separation $2a$.
- **Reversing the direction of $\vec p$.** By convention it points from the negative charge to the positive charge.
- **Expecting maximum torque when the dipole is aligned.** The torque is $pE\sin\theta$, so it vanishes at $0^\circ$ and $180^\circ$ and is maximum at $90^\circ$.
- **Saying the net force on a dipole in a uniform field is non-zero.** The forces cancel; the torque need not. A net force requires a non-uniform field.

</learning-block>

## Try it yourself

**A.** Charges $+2.0\ \mu\text{C}$ and $-2.0\ \mu\text{C}$ are $4.0\ \text{mm}$ apart. Find the dipole moment.

<details><summary>Show the reasoning</summary>

The full separation is $4.0\times10^{-3}\ \text{m}$, so

$$
p=(2.0\times10^{-6})(4.0\times10^{-3})=8.0\times10^{-9}\ \text{C}\,\text{m},
$$

pointing from the negative to the positive charge.
</details>

**B.** The dipole in A is placed in a field of $2.0\times10^4\ \text{N/C}$ with its moment perpendicular to the field. Find the torque.

<details><summary>Show the reasoning</summary>

At $90^\circ$,

$$
\tau=pE\sin90^\circ=(8.0\times10^{-9})(2.0\times10^4)=1.6\times10^{-4}\ \text{N}\,\text{m}.
$$

This is the maximum torque for this dipole and field.
</details>

**C.** How much work does the field do when the dipole in B rotates from $90^\circ$ to $0^\circ$?

<details><summary>Show the reasoning</summary>

Using $W_{\text{field}}=pE(\cos\theta_f-\cos\theta_i)$,

$$
W_{\text{field}}=pE(1-0)=1.6\times10^{-4}\ \text{J}.
$$

The field does positive work because the dipole moves towards its stable aligned position.
</details>

## Remember

- A dipole is a pair of equal and opposite charges; its moment is $\vec p=q(2a)$, directed from negative to positive.
- On the axis, $E\approx2kp/r^3$; on the perpendicular bisector, $E\approx kp/r^3$ in the opposite direction.
- In a uniform field, $\vec\tau=\vec p\times\vec E$, with magnitude $pE\sin\theta$.
- The potential energy is $U=-\vec p\cdot\vec E$, lowest when the dipole is aligned with the field.
- A uniform field gives torque but no net force; a non-uniform field can give both.

The next module asks a different question: how much of the field passes through a surface, and what does that tell us about the charge inside?
