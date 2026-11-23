## JEE Main sprint: how to use this set

This is a **50-minute, no-notes** practice paper for after you finish the chapter lessons. Spend about 15 minutes on Section A, 18 on Section B, 7 on Section C, 5 on Section D, and keep 5 minutes to check signs and units. Mark a question for review after 90 seconds; one stubborn calculation should not consume the paper.

The aim is not only the answer. Before writing an equation, identify what is fixed — charge, voltage, geometry or the circuit connection — and then choose the relation. Take $k=9.0\times10^9\ \text{N}\,\text{m}^2/\text{C}^2$ and $\varepsilon_0=8.85\times10^{-12}\ \text{C}^2/(\text{N}\,\text{m}^2)$ unless a question says otherwise. Use $g=10\ \text{m/s}^2$ if a mechanics step needs it.

## Conditions sheet

| Situation | Start with | Check before using it |
| --- | --- | --- |
| Potential at a point from point charges | $V=\sum kq_i/r_i$ | Add scalars with their signs; zero is at infinity. |
| Work moving a charge | Field: $W=q(V_i-V_f)$; external agent: $q(V_f-V_i)$ | The field does positive work when the charge moves to lower potential. |
| Field and potential | $E_x=-dV/dx$; uniform field $E=\Delta V/d$ | Field points from high to low potential. |
| Energy of a pair or system | $U=kq_1q_2/r$; distinct pairs for a system | No factor of one half if you sum distinct pairs. |
| Conductor in equilibrium | $E=0$ inside, $V$ constant, $E=\sigma/\varepsilon_0$ outside | The potential need not be zero. |
| Dielectric, fixed free charge | $E=E_0/K$, $C=KC_0$ | With a battery connected, $V$ is fixed instead. |
| Capacitance | $C=Q/V$; $C=\varepsilon_0A/d$ for parallel plates | Convert mm to m and cm² to m². |
| Combination | Parallel: $C_{\text{eq}}=\sum C_i$; series: $1/C_{\text{eq}}=\sum 1/C_i$ | Parallel shares voltage; series shares charge. |
| Stored energy | $U=Q^2/(2C)=\frac12CV^2$ | Use the form that matches the fixed quantity. |
| Charge sharing | $V=(C_1V_1+C_2V_2)/(C_1+C_2)$ | Energy is lost unless the initial voltages are equal. |

<learning-block type="mistake" title="The fastest sanity checks">

If a capacitance comes out negative, a series equivalent is larger than one of its parts, or an isolated capacitor gains energy when a dielectric is inserted, stop and recheck the setup. A correct-looking number with the wrong fixed quantity is still wrong.

</learning-block>

## Section A — 10 rapid MCQs

### 1. Potential at a dipole's midpoint

Two point charges $+q$ and $-q$ are separated by $2a$. The electric potential at their midpoint is:

- A. $kq/a$
- B. $-kq/a$
- C. zero
- D. $2kq/a$

<details><summary>Answer</summary>

**C.** The midpoint is distance $a$ from each charge. The scalar sum is $kq/a+k(-q)/a=0$. The field there is not zero: both contributions point towards the negative charge, so they add.
</details>

### 2. Work by the field

A charge of $-2.0\ \mu\text{C}$ moves from a point at $10\ \text{V}$ to a point at $50\ \text{V}$. The work done by the electric field is:

- A. $+8.0\times10^{-5}\ \text{J}$
- B. $-8.0\times10^{-5}\ \text{J}$
- C. $+1.2\times10^{-4}\ \text{J}$
- D. $-1.2\times10^{-4}\ \text{J}$

<details><summary>Answer</summary>

**A.** $W_{\text{field}}=q(V_i-V_f)=(-2.0\times10^{-6})(10-50)=+8.0\times10^{-5}\ \text{J}$. A negative charge moving to higher potential loses potential energy, so the field does positive work.
</details>

### 3. A region of constant potential

In a region where the electric potential is the same at every point, the electric field must be:

- A. zero
- B. uniform and nonzero
- C. perpendicular to the region's boundary
- D. impossible to determine

<details><summary>Answer</summary>

**A.** If $V$ is constant, every derivative of $V$ is zero, so $\vec E=-\nabla V=0$. A constant potential is not the same as a constant nonzero field.
</details>

### 4. A proton accelerates

A proton moves from a point at $500\ \text{V}$ to a point at $300\ \text{V}$ under the electric force alone. Its kinetic energy changes by:

- A. $+200\ \text{eV}$
- B. $-200\ \text{eV}$
- C. $+800\ \text{eV}$
- D. zero

<details><summary>Answer</summary>

**A.** $\Delta K=q(V_i-V_f)=e(500-300)=+200\ \text{eV}$. The proton moves to lower potential, which is downhill for a positive charge, so it speeds up.
</details>

### 5. Changing the plate geometry

A parallel-plate capacitor has capacitance $C$. If the plate area is doubled and the separation is halved, the new capacitance is:

- A. $C/4$
- B. $C/2$
- C. $2C$
- D. $4C$

<details><summary>Answer</summary>

**D.** $C=\varepsilon_0A/d$. Doubling $A$ doubles $C$; halving $d$ doubles it again. The combined factor is $4$.
</details>

### 6. Dielectric in an isolated capacitor

An isolated charged capacitor has potential difference $V$. A dielectric of constant $K=3$ is inserted. The new potential difference is:

- A. $3V$
- B. $V/3$
- C. $V$
- D. $9V$

<details><summary>Answer</summary>

**B.** The charge is fixed. The capacitance becomes $3C$, so $V'=Q/(3C)=V/3$. The field inside the dielectric also falls by $3$.
</details>

### 7. Three capacitors

Three $3.0\ \mu\text{F}$ capacitors are connected with two in parallel and that pair in series with the third. The equivalent capacitance is:

- A. $1.0\ \mu\text{F}$
- B. $2.0\ \mu\text{F}$
- C. $3.0\ \mu\text{F}$
- D. $4.5\ \mu\text{F}$

<details><summary>Answer</summary>

**B.** The parallel pair gives $3+3=6.0\ \mu\text{F}$. In series with $3.0\ \mu\text{F}$:

$$
C_{\text{eq}}=\frac{(6.0)(3.0)}{6.0+3.0}=2.0\ \mu\text{F}.
$$
</details>

### 8. Doubling the voltage

A capacitor of fixed capacitance is charged to twice its previous voltage. Its stored energy becomes:

- A. half
- B. the same
- C. double
- D. four times

<details><summary>Answer</summary>

**D.** $U=\frac12CV^2$, so $U\propto V^2$. Doubling $V$ multiplies the energy by $4$.
</details>

### 9. Potential inside a conducting sphere

A conducting sphere of radius $R$ carries charge $Q$. The potential at its centre is:

- A. zero
- B. $kQ/R$
- C. $kQ/R^2$
- D. $kQ/(2R)$

<details><summary>Answer</summary>

**B.** The conductor is an equipotential volume. The field inside is zero, but the potential is constant and equal to the surface value $kQ/R$.
</details>

### 10. Moving along an equipotential

The work done by the electric field in moving a charge along an equipotential surface is:

- A. zero
- B. $qV$
- C. $qEd$
- D. maximum

<details><summary>Answer</summary>

**A.** The potential does not change along the surface, so $W=q(V_i-V_f)=0$. The displacement is perpendicular to the field.
</details>

## Section B — 5 numerical-value questions

### 11. Potential from a point charge

Find the potential at $0.30\ \text{m}$ from a $+6.0\ \mu\text{C}$ point charge.

<details><summary>Answer</summary>

$$
V=\frac{kQ}{r}
=\frac{(9.0\times10^9)(6.0\times10^{-6})}{0.30}
=1.8\times10^5\ \text{V}.
$$

The potential is positive because the source charge is positive.
</details>

### 12. A zero-potential point

Charges $+2.0\ \mu\text{C}$ and $-8.0\ \mu\text{C}$ are $0.30\ \text{m}$ apart. Find the point between them where the potential is zero, measured from the positive charge.

<details><summary>Answer</summary>

Let the point be $x$ from the $+2.0\ \mu\text{C}$ charge. It is $0.30-x$ from the $-8.0\ \mu\text{C}$ charge. Set the scalar sum to zero:

$$
\frac{k(2.0\times10^{-6})}{x}
-\frac{k(8.0\times10^{-6})}{0.30-x}=0.
$$

Cancelling $k$ and $10^{-6}$:

$$
\frac{2}{x}=\frac{8}{0.30-x}
\quad\Rightarrow\quad
2(0.30-x)=8x
\quad\Rightarrow\quad
x=0.060\ \text{m}.
$$

The point is $6.0\ \text{cm}$ from the positive charge. A second zero exists outside the pair, on the side of the smaller charge, at $0.10\ \text{m}$ from it; the question asks for the point between the charges.
</details>

### 13. Charge on a dielectric-filled capacitor

A parallel-plate capacitor has area $0.050\ \text{m}^2$, separation $0.50\ \text{mm}$ and a dielectric of $K=2.0$. It is connected to $100\ \text{V}$. Find the charge on the plates in nanocoulombs.

<details><summary>Answer</summary>

$$
C=\frac{K\varepsilon_0A}{d}
=\frac{(2.0)(8.85\times10^{-12})(0.050)}{5.0\times10^{-4}}
=1.77\times10^{-9}\ \text{F}.
$$

$$
Q=CV=(1.77\times10^{-9})(100)
=1.77\times10^{-7}\ \text{C}\approx177\ \text{nC}.
$$

One plate carries $+177\ \text{nC}$ and the other $-177\ \text{nC}$.
</details>

### 14. Energy lost in sharing

A $5.0\ \mu\text{F}$ capacitor is charged to $200\ \text{V}$ and then connected to an identical uncharged capacitor. Find the energy lost, in millijoules.

<details><summary>Answer</summary>

The initial energy is

$$
U_i=\frac12(5.0\times10^{-6})(200)^2=0.10\ \text{J}.
$$

Equal capacitances share the charge equally, so the common voltage is $100\ \text{V}$ and

$$
U_f=\frac12(10\times10^{-6})(100)^2=0.050\ \text{J}.
$$

The loss is $0.050\ \text{J}=50\ \text{mJ}$. Exactly half the initial energy is dissipated.
</details>

### 15. Charge from the potential of a sphere

An isolated conducting sphere of radius $0.20\ \text{m}$ is at a potential of $1.0\times10^5\ \text{V}$. Find its charge in microcoulombs.

<details><summary>Answer</summary>

For an isolated sphere, $V=kQ/R$, so

$$
Q=\frac{RV}{k}
=\frac{(0.20)(1.0\times10^5)}{9.0\times10^9}
=2.2\times10^{-6}\ \text{C}\approx2.2\ \mu\text{C}.
$$

The field just outside the sphere is $V/R=5.0\times10^5\ \text{V/m}$, below air breakdown.
</details>

## Section C — 3 assertion–reason questions

Choose:

- **A.** Both A and R are true, and R is the correct explanation of A.
- **B.** Both A and R are true, but R is not the correct explanation of A.
- **C.** A is true, but R is false.
- **D.** A is false, but R is true.

### 16. Field inside a conductor

**Assertion (A):** The electric field inside a conductor in electrostatic equilibrium is zero.

**Reason (R):** Free charges in a conductor move until the potential is the same at every point inside it.

<details><summary>Answer</summary>

**A.** Both statements are true, and the second explains the first. If the potential differed between two interior points, the field $E=-dV/dx$ would be nonzero and free charges would move. Equilibrium therefore means constant potential and zero interior field.
</details>

### 17. Midpoint of two positive charges

**Assertion (A):** At the midpoint between two equal positive charges, the electric potential is zero.

**Reason (R):** At that midpoint, the electric field is zero.

<details><summary>Answer</summary>

**D.** The assertion is false, but the reason is true. Each charge contributes a positive potential $kq/a$, so the midpoint potential is $2kq/a$, not zero. The two field vectors do cancel, giving $\vec E=0$, but potential is a scalar and does not cancel.
</details>

### 18. Dielectric on a battery

**Assertion (A):** When a dielectric is inserted in a capacitor connected to a battery, the charge on the plates increases.

**Reason (R):** The dielectric lowers the potential difference across the plates.

<details><summary>Answer</summary>

**C.** The assertion is true, but the reason is false. The battery holds the potential difference fixed, so $V$ does not fall. The dielectric raises the capacitance by $K$, and $Q=CV$ therefore rises by $K$. The battery supplies the extra charge.
</details>

## Section D — 2 matching and multi-statement questions

### 19. Matching formulas

Match each quantity in Column I with the correct expression in Column II.

| Column I | Column II |
| --- | --- |
| (i) Parallel-plate capacitance | P. $C=\varepsilon_0A/d$ |
| (ii) Energy stored in a capacitor | Q. $U=Q^2/(2C)$ |
| (iii) Series combination | R. $1/C_{\text{eq}}=1/C_1+1/C_2$ |
| (iv) Field from potential | S. $E=-dV/dr$ |

- A. (i)-P, (ii)-Q, (iii)-R, (iv)-S
- B. (i)-Q, (ii)-P, (iii)-S, (iv)-R
- C. (i)-P, (ii)-R, (iii)-Q, (iv)-S
- D. (i)-S, (ii)-Q, (iii)-R, (iv)-P

<details><summary>Answer</summary>

**A.** (i) For parallel plates in air, $C=\varepsilon_0A/d$. (ii) The energy has the equivalent forms $Q^2/(2C)$, $\frac12CV^2$ and $\frac12QV$. (iii) Series capacitors share charge, so their reciprocals add. (iv) The field is the negative gradient of the potential.
</details>

### 20. Multi-statement question

Which of the following statements are correct?

(i) Bringing an uncharged conductor near an isolated charged conductor increases the capacitance of the charged conductor.

(ii) In a series combination, the capacitor with the smaller capacitance has the larger potential difference.

(iii) The stored energy of a capacitor depends only on its final charge and capacitance, not on how it was charged.

(iv) A dielectric always increases the electric field inside a capacitor.

- A. (i) and (ii) only
- B. (i), (ii) and (iii) only
- C. (ii), (iii) and (iv) only
- D. all four

<details><summary>Answer</summary>

**B.** (i) True: the nearby conductor is polarised, induced opposite charge lowers the potential for the same charge, and $C=Q/V$ rises. (ii) True: series capacitors carry the same $Q$, so $V=Q/C$ is larger for the smaller $C$. (iii) True: $U=Q^2/(2C)$ is a state function of the final charge and capacitance. (iv) False: for fixed free charge a dielectric reduces $E$ by $K$; with a battery connected, $E=V/d$ is unchanged. It never “always increases” the field.
</details>

## Review by error, not by score

| If you missed… | Revisit | Then retry |
| --- | --- | --- |
| 1, 11, 12 or 17 | Potential as a scalar sum | Add signed contributions before thinking about the field. |
| 2, 4, 10 or 16 | Work, potential difference and field–potential relation | Write $W=q(V_i-V_f)$ and check the direction of the field. |
| 3, 9 or 15 | Conductors and equipotentials | Separate “field zero” from “potential constant”. |
| 5, 6, 13, 18 or 20 | Capacitance and dielectrics | Decide whether $Q$ or $V$ is fixed before changing $C$. |
| 7, 8, 14 or 19 | Combinations and stored energy | Redraw the network and choose the energy form that matches the fixed quantity. |

<learning-block type="recap" title="Ready for a timed set?">

Aim for at least 16 correct out of 20 with a written method choice for every question. Questions you answer correctly but cannot justify are revision targets, not mastered topics.

</learning-block>
