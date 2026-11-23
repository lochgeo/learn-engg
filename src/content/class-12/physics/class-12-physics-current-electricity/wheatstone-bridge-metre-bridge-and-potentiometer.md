## Measuring without disturbing

A voltmeter measures a potential difference by drawing a small current, so it inevitably changes the circuit it is measuring. For a cell, that current also produces an internal drop, so an ordinary voltmeter reads slightly less than the emf. Null methods avoid the problem: adjust the circuit until a detector shows **zero** current, then read a length or a resistance ratio instead. The Wheatstone bridge, the metre bridge and the potentiometer are the standard null instruments of this chapter.

## 1. The Wheatstone bridge

Four resistances $P$, $Q$, $R$ and $S$ form a quadrilateral. A battery is connected across one diagonal, and a galvanometer across the other. Label the left node $A$, the right node $C$, with $B$ between $P$ and $Q$ and $D$ between $R$ and $S$. The battery drives current from $A$ to $C$ along both upper and lower paths; the galvanometer connects $B$ to $D$.

The bridge is **balanced** when the galvanometer shows no deflection, which means no current flows through it and therefore $V_B=V_D$.

At balance, the current through $P$ equals that through $Q$, because no charge branches off at $B$:

$$
V_{AB}=I_1P,
\qquad
V_{BC}=I_1Q.
$$

Similarly, the same current $I_2$ flows through $R$ and $S$:

$$
V_{AD}=I_2R,
\qquad
V_{DC}=I_2S.
$$

The condition $V_B=V_D$ gives $V_{AB}=V_{AD}$ and $V_{BC}=V_{DC}$. Hence

$$
I_1P=I_2R,
\qquad
I_1Q=I_2S.
$$

Dividing the first equation by the second,

$$
\frac{P}{Q}=\frac{R}{S}.
$$

Equivalently, $PS=QR$. This is the **balance condition**. It does not contain the battery emf or the galvanometer resistance, so the result is independent of both, provided the battery emf is steady and nonzero. The bridge is most sensitive when the four resistances are of comparable size; if one arm is vastly different from the others, a small change in the unknown produces only a tiny galvanometer current.

You can also derive the condition with Kirchhoff's rules by setting the galvanometer current to zero. The two routes are equivalent, but the potential-division argument shows more clearly why no current flows.

## 2. The metre bridge

The metre bridge is a practical Wheatstone bridge in which two arms are replaced by the two parts of a uniform one-metre wire. The unknown resistance $R$ sits in the left gap and a known resistance $S$ in the right gap. A jockey makes contact with the wire at a distance $l$ from the left end; the balance point is where the galvanometer shows no deflection.

Because the wire is uniform, the resistance of a segment is proportional to its length. If the whole wire has resistance $R_w$, the left segment has resistance $R_w l/100$ and the right segment $R_w(100-l)/100$. The bridge balance condition becomes

$$
\frac{R}{S}=\frac{l}{100-l},
$$

where $l$ is measured in centimetres. Solving for the unknown,

$$
R=S\frac{l}{100-l}.
$$

The factor $100-l$ assumes the bridge wire is exactly one metre long. If the wire has been shortened, or if the scale is read from the other end, the same ratio must be rebuilt from the actual segment lengths rather than copied blindly.

**Worked example.** In a metre bridge, a known $6.0\ \Omega$ resistor is in the right gap and the balance point is $40\ \text{cm}$ from the left end. Find the unknown resistance.

$$
R=6.0\frac{40}{100-40}
=6.0\frac{40}{60}
=4.0\ \Omega.
$$

**Sanity check.** The balance point is nearer the left end, so the left-gap resistance is smaller than the right-gap resistance. The result $4.0\ \Omega<6.0\ \Omega$ is consistent.

In a real metre bridge the contact resistances at the ends behave like small extra lengths $\alpha$ and $\beta$, so the measured ratio is $(l+\alpha)/(100-l+\beta)$ rather than $l/(100-l)$. This is the **end error**. Interchanging the unknown and known resistors and repeating the measurement reduces its effect. The wire must also have a uniform cross-section; a dent or a kink breaks the proportionality between length and resistance.

## 3. The potentiometer

A potentiometer uses a uniform wire $AB$ of length $L$ carrying a steady current from a **driver cell**. The potential difference along the wire is proportional to length, so the **potential gradient** is

$$
k=\frac{V_{AB}}{L}.
$$

For example, if $2.0\ \text{V}$ appears across a $1.00\ \text{m}$ wire, then $k=2.0\ \text{V/m}=0.020\ \text{V/cm}$.

To measure the emf $\varepsilon$ of a cell, connect its positive terminal to $A$ and its negative terminal through a galvanometer to a jockey on the wire. Move the jockey until the galvanometer shows no deflection. At that **null point**, no current flows through the unknown cell, so its terminal voltage equals its emf. If the null length is $l$,

$$
\varepsilon=k\,l.
$$

The potentiometer therefore measures the emf itself, not a terminal voltage reduced by internal resistance. Its accuracy depends on a uniform wire, a steady driver current, clean contacts and the requirement that the driver's emf exceeds the emf being measured.

The same null idea compares two cells. If they balance at lengths $l_1$ and $l_2$ under the same potential gradient,

$$
\frac{\varepsilon_1}{\varepsilon_2}=\frac{l_1}{l_2}.
$$

**Measuring internal resistance.** First measure the cell's emf with nothing connected across it; let the balance length be $l_1$. Then connect a known resistance $R$ across the cell and measure the new balance length $l_2$. The terminal voltage is now

$$
V=k\,l_2=\varepsilon\frac{R}{R+r},
$$

where $r$ is the internal resistance. Since $\varepsilon=k\,l_1$,

$$
\frac{l_2}{l_1}=\frac{R}{R+r}
\quad\Longrightarrow\quad
r=R\left(\frac{l_1}{l_2}-1\right).
$$

**Worked example.** A cell balances at $60\ \text{cm}$ on open circuit. With a $10\ \Omega$ resistor across it, the balance length falls to $50\ \text{cm}$. Find the internal resistance.

$$
r=10\left(\frac{60}{50}-1\right)
=10(1.20-1)
=2.0\ \Omega.
$$

**Sanity check.** The balance length falls when the cell supplies current, so $l_2<l_1$ and $r>0$, as it must. If the two lengths were equal, the cell would have no internal resistance.

## 4. Which instrument for which job

| Task | Instrument | Key condition |
| --- | --- | --- |
| Compare two resistances to high precision | Wheatstone bridge | Galvanometer current zero: $P/Q=R/S$ |
| Measure an unknown resistance with a wire and scale | Metre bridge | Uniform wire; account for end error |
| Measure a cell's emf without drawing current | Potentiometer | Null point; driver emf larger than the unknown |
| Compare two emfs | Potentiometer | Same potential gradient for both |

<learning-block type="mistake" title="The metre-bridge ratio is easy to invert">

If the unknown is in the **left** gap, the correct relation is $R/S=l/(100-l)$, so a balance nearer the left end means $R<S$. Swapping $l$ and $100-l$ gives the reciprocal answer and is the most common metre-bridge error. For the potentiometer, remember that the reading equals the emf only at the null point: while current flows through the cell, the potentiometer would be measuring terminal voltage, not emf.

</learning-block>

## Try it yourself

**A.** In a Wheatstone bridge, $P=4.0\ \Omega$, $Q=8.0\ \Omega$ and $R=6.0\ \Omega$. Find the resistance $S$ that balances it.

<details><summary>Show the reasoning</summary>

From $P/Q=R/S$,

$$
S=\frac{QR}{P}=\frac{(8.0)(6.0)}{4.0}=12\ \Omega.
$$

Check: $4.0/8.0=0.50$ and $6.0/12=0.50$.

</details>

**B.** A metre bridge balances at $75\ \text{cm}$ from the left end when a $2.0\ \Omega$ resistor is in the right gap. Find the resistance in the left gap.

<details><summary>Show the reasoning</summary>

With the unknown on the left,

$$
R=S\frac{l}{100-l}=2.0\frac{75}{25}=6.0\ \Omega.
$$

The balance is nearer the right end, so the left resistance is larger than $2.0\ \Omega$, which agrees.

</details>

**C.** A cell balances at $80\ \text{cm}$ on open circuit. With a $5.0\ \Omega$ resistor across it, the balance length is $60\ \text{cm}$. Find the internal resistance.

<details><summary>Show the reasoning</summary>

$$
r=R\left(\frac{l_1}{l_2}-1\right)
=5.0\left(\frac{80}{60}-1\right)
=5.0\left(\frac13\right)
\approx1.7\ \Omega.
$$

The terminal voltage falls when the cell delivers current, so $l_2<l_1$ and the result is positive.

</details>

## Remember

- A Wheatstone bridge balances when $P/Q=R/S$; at balance no current flows through the galvanometer and $V_B=V_D$.
- A metre bridge uses $R/S=l/(100-l)$, with $l$ measured from the end adjacent to the unknown; end errors can be reduced by interchanging the gaps.
- A potentiometer measures emf at the null point, where it draws no current from the cell: $\varepsilon=kl$.
- Two emfs compare as $\varepsilon_1/\varepsilon_2=l_1/l_2$ under the same potential gradient.
- Internal resistance follows from $r=R(l_1/l_2-1)$, where $l_1$ is the open-circuit balance length and $l_2$ the length with $R$ connected.

The practice module that follows mixes these instruments with the earlier circuit rules, so that choosing the method becomes as important as executing it.
