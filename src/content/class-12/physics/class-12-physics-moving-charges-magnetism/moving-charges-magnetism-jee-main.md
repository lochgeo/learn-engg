## JEE Main sprint: moving charges and magnetism

This is a **50-minute, no-notes** practice set for after you complete the chapter lessons. Use $g=10\ \text{m/s}^2$ and $\mu_0=4\pi\times10^{-7}\ \text{T·m/A}$ unless a question gives another value. Spend roughly 15 minutes on Section A, 20 on Section B, 10 on Section C, and 5 on Section D. Mark a question for review after 90 seconds; do not let one calculation consume the paper.

The goal is not only an answer. Before writing an equation, name the system and choose the tool: force on a charge, circular motion, Biot–Savart, Ampère’s law, force between currents, torque, or galvanometer conversion.

## Conditions sheet

| Situation | Start with | Check before using it |
| --- | --- | --- |
| Force on moving charge | $F=|q|vB\sin\theta$ | $\theta$ is between $\vec v$ and $\vec B$; force does no work |
| Circular path in $\vec B$ | $r=mv/(|q|B)$, $T=2\pi m/(|q|B)$ | Use perpendicular component $v_\perp$ |
| Helix pitch | $p=v_\parallel T$ | $v_\parallel=v\cos\theta$ |
| Velocity selector | $v=E/B$ | Independent of $q$ and $m$ |
| Field at loop centre | $B=\mu_0 I/(2R)$ (times $N$) | Direction along axis by right-hand rule |
| Field on loop axis | $B=\mu_0 IR^2/[2(R^2+x^2)^{3/2}]$ | Reduces to centre value at $x=0$ |
| Long straight wire | $B=\mu_0 I/(2\pi r)$ | Field circles the wire |
| Long solenoid | $B=\mu_0 nI$ | Field outside $\approx0$ |
| Toroid | $B=\mu_0 NI/(2\pi r)$ | Zero outside winding |
| Force between parallel wires | $F/L=\mu_0 I_1I_2/(2\pi d)$ | Same direction attracts |
| Torque on loop | $\tau=NIAB\sin\theta$ | $\theta$ to the normal |
| Galvanometer | $\phi=NIAB/k$ | Radial field gives linear scale |
| Ammeter shunt | $S=I_gR_g/(I-I_g)$ | Shunt is in parallel |
| Voltmeter multiplier | $R=V/I_g-R_g$ | Multiplier is in series |

<learning-block type="mistake" title="The fastest sanity checks">

If your answer gives a negative radius, a magnetic force doing work, or a galvanometer shunt larger than the coil resistance, stop and revisit the setup. A numerical answer with the right unit can still come from the wrong formula.

</learning-block>

## Section A — 10 rapid MCQs

### 1. Force on a moving charge

A charge $2.0\times10^{-6}\ \text{C}$ moves at $5.0\times10^{4}\ \text{m/s}$ perpendicular to a $0.20\ \text{T}$ field. The force on it is:

- A. $1.0\times10^{-2}\ \text{N}$
- B. $2.0\times10^{-2}\ \text{N}$
- C. $4.0\times10^{-2}\ \text{N}$
- D. $0$

<details><summary>Answer</summary>

**B.** $F=|q|vB=(2.0\times10^{-6})(5.0\times10^{4})(0.20)=2.0\times10^{-2}\ \text{N}$.

</details>

### 2. Circular motion

A proton moves perpendicular to a uniform field. If its speed is doubled, the radius of its path:

- A. halves
- B. stays the same
- C. doubles
- D. quadruples

<details><summary>Answer</summary>

**C.** $r=mv/(qB)$, so $r\propto v$.

</details>

### 3. Period in a magnetic field

For a charged particle in a uniform magnetic field, the period of revolution:

- A. increases with speed
- B. decreases with speed
- C. is independent of speed
- D. depends on the field direction only

<details><summary>Answer</summary>

**C.** $T=2\pi m/(|q|B)$; speed cancels.

</details>

### 4. Field at the centre of a loop

A circular loop of radius $0.10\ \text{m}$ carries $4.0\ \text{A}$. The field at its centre is approximately:

- A. $1.3\times10^{-5}\ \text{T}$
- B. $2.5\times10^{-5}\ \text{T}$
- C. $5.0\times10^{-5}\ \text{T}$
- D. $1.3\times10^{-4}\ \text{T}$

<details><summary>Answer</summary>

**B.** $B=\mu_0 I/(2R)=(4\pi\times10^{-7})(4.0)/[2(0.10)]=2.51\times10^{-5}\ \text{T}$.

</details>

### 5. Solenoid field

A long solenoid has $2000$ turns per metre and carries $1.5\ \text{A}$. Its internal field is approximately:

- A. $1.9\times10^{-3}\ \text{T}$
- B. $3.8\times10^{-3}\ \text{T}$
- C. $5.7\times10^{-3}\ \text{T}$
- D. $1.2\times10^{-2}\ \text{T}$

<details><summary>Answer</summary>

**B.** $B=\mu_0 nI=(4\pi\times10^{-7})(2000)(1.5)=3.77\times10^{-3}\ \text{T}$.

</details>

### 6. Toroid field

For a toroid carrying current, the magnetic field is:

- A. uniform everywhere
- B. zero in the hole and outside the winding, nonzero inside
- C. strongest outside the winding
- D. independent of the number of turns

<details><summary>Answer</summary>

**B.** Ampère’s law gives $B=\mu_0 NI/(2\pi r)$ inside the winding and zero elsewhere.

</details>

### 7. Force between currents

Two parallel wires carrying currents in the same direction:

- A. repel with force $\mu_0 I_1I_2/(2\pi d)$ per unit length
- B. attract with force $\mu_0 I_1I_2/(2\pi d)$ per unit length
- C. exert no force on each other
- D. attract only if the currents are equal

<details><summary>Answer</summary>

**B.** Parallel currents attract; the magnitude is $\mu_0 I_1I_2/(2\pi d)$ per unit length.

</details>

### 8. Torque on a loop

A current loop has its plane perpendicular to a uniform field $\vec B$. The torque on it is:

- A. maximum
- B. zero
- C. $NIAB$
- D. $NIAB/2$

<details><summary>Answer</summary>

**B.** The normal is parallel to $\vec B$, so $\theta=0$ and $\tau=NIAB\sin0=0$.

</details>

### 9. Galvanometer shunt

A galvanometer with $R_g=50\ \Omega$ and $I_g=1\ \text{mA}$ is to be converted to an ammeter of range $1\ \text{A}$. The shunt resistance is approximately:

- A. $0.05\ \Omega$
- B. $0.5\ \Omega$
- C. $5\ \Omega$
- D. $50\ \Omega$

<details><summary>Answer</summary>

**A.** $S=I_gR_g/(I-I_g)\approx(10^{-3})(50)/1=5.0\times10^{-2}\ \Omega$.

</details>

### 10. Velocity selector

In a velocity selector, the selected speed is:

- A. proportional to the charge
- B. proportional to the mass
- C. $E/B$
- D. $B/E$

<details><summary>Answer</summary>

**C.** $v=E/B$, independent of $q$ and $m$.

</details>

## Section B — 5 numerical-value questions

### 11. Radius of a proton

A proton ($m=1.67\times10^{-27}\ \text{kg}$, $q=1.60\times10^{-19}\ \text{C}$) moves at $2.0\times10^{6}\ \text{m/s}$ perpendicular to $B=0.10\ \text{T}$. Find its path radius in metres.

<details><summary>Answer</summary>

$r=mv/(qB)=(1.67\times10^{-27})(2.0\times10^{6})/[(1.60\times10^{-19})(0.10)]=2.09\times10^{-1}\ \text{m}$.

</details>

### 12. Field of a solenoid

A solenoid of length $0.40\ \text{m}$ has $800$ turns and carries $2.5\ \text{A}$. Find its internal field in tesla.

<details><summary>Answer</summary>

$n=800/0.40=2000\ \text{turns/m}$. $B=\mu_0 nI=(4\pi\times10^{-7})(2000)(2.5)=6.28\times10^{-3}\ \text{T}$.

</details>

### 13. Torque on a coil

A coil of $20$ turns, area $0.0060\ \text{m}^2$, carries $0.80\ \text{A}$ in a $0.30\ \text{T}$ field, with its normal at $90^\circ$ to $\vec B$. Find the torque in $\text{N·m}$.

<details><summary>Answer</summary>

$\tau=NIAB\sin90^\circ=20(0.80)(0.0060)(0.30)=2.88\times10^{-2}\ \text{N·m}$.

</details>

### 14. Voltmeter multiplier

A galvanometer has $R_g=40\ \Omega$ and $I_g=0.25\ \text{mA}$. Find the series resistance needed for a $50\ \text{V}$ voltmeter, in ohms.

<details><summary>Answer</summary>

$R=V/I_g-R_g=50/(0.25\times10^{-3})-40=2.0\times10^{5}-40=1.9996\times10^{5}\ \Omega$.

</details>

### 15. Helix pitch

An electron ($m/q=5.69\times10^{-12}\ \text{kg/C}$) enters a $0.20\ \text{T}$ field at $60^\circ$ with speed $3.0\times10^{6}\ \text{m/s}$. Find the pitch in metres.

<details><summary>Answer</summary>

$v_\parallel=v\cos60^\circ=1.5\times10^{6}\ \text{m/s}$. $T=2\pi(m/q)/B=2\pi(5.69\times10^{-12})/0.20=1.79\times10^{-10}\ \text{s}$. Pitch $p=v_\parallel T=(1.5\times10^{6})(1.79\times10^{-10})=2.68\times10^{-4}\ \text{m}$.

</details>

## Section C — 3 assertion–reason questions

### 16. Magnetic force and work

**Assertion (A):** A magnetic field does no work on a moving charge.  
**Reason (R):** The magnetic force is always perpendicular to the velocity of the charge.

- A. Both A and R are true, and R is the correct explanation of A.
- B. Both A and R are true, but R is not the correct explanation of A.
- C. A is true but R is false.
- D. A is false but R is true.

<details><summary>Answer</summary>

**A.** The magnetic force is always perpendicular to $\vec v$, so $\vec F_B\cdot d\vec r=0$; hence it does no work. R correctly explains A.

</details>

### 17. Toroid field outside

**Assertion (A):** The magnetic field outside a toroid is zero.  
**Reason (R):** An Amperian loop outside the winding encloses no net current.

<details><summary>Answer</summary>

**A.** For a loop outside the winding, the currents pass through the loop in pairs of opposite direction, so $I_{\text{enclosed}}=0$ and $B=0$. R correctly explains A.

</details>

### 18. Cyclotron frequency

**Assertion (A):** The cyclotron frequency of a particle is independent of its speed.  
**Reason (R):** The radius of the path increases in proportion to the speed.

- A. Both A and R are true, and R is the correct explanation of A.
- B. Both A and R are true, but R is not the correct explanation of A.
- C. A is true but R is false.
- D. A is false but R is true.

<details><summary>Answer</summary>

**B.** A is true: $f=|q|B/(2\pi m)$ is independent of speed. R is also true: $r=mv/(|q|B)$, so $r\propto v$. But R does not explain A; the independence follows from $T=2\pi m/(|q|B)$, not from the radius relation. Hence B.

</details>

## Section D — 2 matching / multi-statement questions

### 19. Match the situation to the formula

Match each situation in List I with the correct expression in List II.

List I  
P. Field at the centre of a circular loop of radius $R$  
Q. Field inside a long solenoid with $n$ turns per unit length  
R. Force per unit length between two parallel wires distance $d$ apart  
S. Torque on a current loop in a uniform field

List II  
1. $\mu_0 n I$  
2. $\mu_0 I/(2R)$  
3. $\mu_0 I_1 I_2/(2\pi d)$  
4. $NIAB\sin\theta$

- A. P-2, Q-1, R-3, S-4
- B. P-1, Q-2, R-3, S-4
- C. P-2, Q-1, R-4, S-3
- D. P-3, Q-1, R-2, S-4

<details><summary>Answer</summary>

**A.** P-2 (loop centre), Q-1 (solenoid), R-3 (wires), S-4 (torque).

</details>

### 20. Multi-statement: moving-coil galvanometer

Consider the following statements about a moving-coil galvanometer:

I. Its deflection is proportional to the current because the field is radial.  
II. Its current sensitivity can be increased by increasing the number of turns.  
III. To convert it into an ammeter, a small resistance is connected in series.  
IV. To convert it into a voltmeter, a large resistance is connected in series.

Which statements are correct?

- A. I and II only
- B. I, II and IV only
- C. II, III and IV only
- D. I, II, III and IV

<details><summary>Answer</summary>

**B.** I is true (radial field keeps $\sin\theta=1$). II is true (more turns increase $NAB/k$). III is false: the shunt goes in parallel, not series. IV is true. Hence I, II and IV.

</details>

## Review by error, not by score

| If you missed… | Revisit | Then retry |
| --- | --- | --- |
| 1–3 or 11 | Magnetic force on moving charges; motion in fields | Check $\sin\theta$ and the perpendicular component $v_\perp$ |
| 4–6 or 19 (P, Q) | Biot–Savart law; Ampère’s law | Re-derive the loop-centre and solenoid fields |
| 7 or 19 (R) | Force between currents | Re-check attraction versus repulsion |
| 8, 13 or 19 (S) | Torque on a loop | Re-check the angle to the normal |
| 9, 14 or 20 | Moving-coil galvanometer | Re-check shunt parallel, multiplier series |
| 10, 15–18 | Crossed fields; cyclotron | Re-check $v=E/B$ and independence of period |

Aim for at least 18 correct out of 20 with a written method choice for every question. Questions you solve correctly but cannot justify are revision targets, not mastered topics.<|end|><|start|>write to=assistant<|channel|>analysis<|message|>Created file successfully: src/content/class-12/physics/class-12-physics-moving-charges-magnetism/moving-charges-magnetism-jee-main.md