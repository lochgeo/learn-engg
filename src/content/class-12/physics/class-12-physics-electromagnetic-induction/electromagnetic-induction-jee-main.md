## JEE Main sprint: how to use this set

This is a **50-minute, no-notes** practice paper for after you have completed the chapter. Use $g=10\ \text{m/s}^2$ where a question needs it, and take $\mu_0=4\pi\times10^{-7}\ \text{T}\cdot\text{m/A}$. Spend roughly $12$ minutes on Section A, $18$ on Section B, $8$ on Section C and $8$ on Section D, leaving $4$ minutes to review. If a question takes longer than $90$ seconds, mark it and move on.

The paper tests selection as much as calculation. Before writing an equation, name the quantity that is changing and choose the relation that links it to the emf. For direction questions, write down whether the flux is increasing or decreasing before choosing a current direction.

## Conditions sheet

| Situation | Start with | Check before using it |
| --- | --- | --- |
| Flux through a flat loop | $\Phi_B=BA\cos\theta$ | $\theta$ is the angle between $\vec B$ and the **normal** |
| Flux through $N$ turns | $N\Phi_B$ | The same flux links every turn |
| Emf from changing flux | $\varepsilon=-N\,d\Phi_B/dt$ | Compute magnitude first, then direction from Lenz |
| Direction of induced current | Lenz’s law | Oppose the **change**, not necessarily the external field |
| Rod moving in a field | $\varepsilon=B\ell v$ | $B$, $\ell$ and $v$ must be mutually perpendicular |
| Rod-and-rails circuit | $I=B\ell v/R$, $F=B^2\ell^2v/R$ | $R$ is the total circuit resistance |
| Energy in a rod circuit | $P_{\text{mech}}=Fv=I^2R$ | The magnetic drag opposes motion |
| Eddy-current loss | $P\propto B^2f^2t^2/\rho$ | Valid as a scaling law, not an exact universal formula |
| Self-induced emf | $\varepsilon=-L\,dI/dt$ | The minus sign means “opposes the change in current” |
| Energy in an inductor | $U=\frac12LI^2$ | Energy is stored in the magnetic field |
| Long solenoid | $L=\mu_0N^2A/\ell$ | Long compared with diameter; core not saturated |
| Mutual inductance | $\varepsilon_2=-M\,dI_1/dt$ | $M$ is a property of the pair and their core |
| Rotating coil generator | $\varepsilon_0=NAB\omega$, $\omega=2\pi f$ | Peak emf occurs when the flux is zero |

<learning-block type="mistake" title="The three fastest sanity checks">

If an induced current appears in a steady field with no relative motion, the setup is wrong. If mechanical power does not equal $I^2R$ in a rod problem, a resistance or a force has been omitted. If the answer says the induced field is always opposite the external field, Lenz’s law has been misread.

</learning-block>

## Section A — 10 rapid MCQs

### 1. Unit of magnetic flux

The SI unit of magnetic flux is the:

- A. tesla
- B. weber
- C. henry
- D. volt

<details><summary>Answer</summary>

**B.** Flux is $BA$, so its unit is $\text{T}\cdot\text{m}^2$, called the weber (Wb). The tesla is a field unit, the henry an inductance unit, and the volt an emf unit.

</details>

### 2. Which change does not induce an emf?

A coil lies in a uniform magnetic field. Which of the following does **not** induce an emf in it?

- A. Rotating the coil about an axis perpendicular to the field
- B. Moving the coil into a region of weaker field
- C. Increasing the strength of the field
- D. Holding the coil at rest in the uniform field

<details><summary>Answer</summary>

**D.** A steady flux through a stationary coil produces no emf, however large the flux. A, B and C all change the flux through the coil.

</details>

### 3. Flux at an angle

A loop of area $0.20\ \text{m}^2$ lies in a field of $0.50\ \text{T}$. The normal to the loop makes $60^\circ$ with the field. The flux is:

- A. $0.025\ \text{Wb}$
- B. $0.050\ \text{Wb}$
- C. $0.10\ \text{Wb}$
- D. $0.20\ \text{Wb}$

<details><summary>Answer</summary>

**B.** $\Phi_B=BA\cos60^\circ=(0.50)(0.20)(0.50)=0.050\ \text{Wb}$.

</details>

### 4. Faraday’s law

The flux through one turn of a $50$-turn coil changes at $0.040\ \text{Wb/s}$. The induced emf magnitude is:

- A. $8.0\times10^{-4}\ \text{V}$
- B. $0.20\ \text{V}$
- C. $2.0\ \text{V}$
- D. $20\ \text{V}$

<details><summary>Answer</summary>

**C.** $|\varepsilon|=N|\Delta\Phi_B/\Delta t|=(50)(0.040)=2.0\ \text{V}$.

</details>

### 5. Lenz’s law

Lenz’s law states that the induced current flows in a direction that:

- A. is the same as the external magnetic field
- B. opposes the change in magnetic flux
- C. increases the magnetic flux
- D. is always zero

<details><summary>Answer</summary>

**B.** The induced current produces a field that opposes the **change** in flux. It may point either with or against the external field, depending on whether the flux is increasing or decreasing.

</details>

### 6. Approaching north pole

The north pole of a bar magnet is pushed towards a coil from the left, along the coil’s axis. Viewed from the magnet’s side, the induced current is:

- A. clockwise
- B. anticlockwise
- C. zero
- D. alternating

<details><summary>Answer</summary>

**B.** The field at the coil points to the right and its strength is increasing. The induced field must point to the left, towards the viewer on the magnet’s side. With the right thumb towards the viewer, the fingers curl anticlockwise.

</details>

### 7. Motional emf

A rod of length $0.20\ \text{m}$ moves at $4.0\ \text{m/s}$ perpendicular to a $0.50\ \text{T}$ field. The emf induced is:

- A. $0.10\ \text{V}$
- B. $0.40\ \text{V}$
- C. $1.6\ \text{V}$
- D. $4.0\ \text{V}$

<details><summary>Answer</summary>

**B.** $|\varepsilon|=B\ell v=(0.50)(0.20)(4.0)=0.40\ \text{V}$.

</details>

### 8. Doubling the rod speed

A rod slides on rails through a uniform field at constant resistance. If its speed is doubled, the induced current and the magnetic drag force respectively:

- A. double; quadruple
- B. double; double
- C. quadruple; double
- D. stay the same; double

<details><summary>Answer</summary>

**B.** $I=B\ell v/R$ is proportional to $v$, so doubling $v$ doubles $I$. The drag $F=B^2\ell^2v/R$ is also proportional to $v$, so it doubles too. The power $I^2R$ becomes four times larger.

</details>

### 9. Self-induced emf

The current through a $2.0\ \text{H}$ inductor changes at $3.0\ \text{A/s}$. The magnitude of the back emf is:

- A. $0.67\ \text{V}$
- B. $1.5\ \text{V}$
- C. $6.0\ \text{V}$
- D. $12\ \text{V}$

<details><summary>Answer</summary>

**C.** $|\varepsilon|=L|dI/dt|=(2.0)(3.0)=6.0\ \text{V}$.

</details>

### 10. Generator emf and flux

In an AC generator, the induced emf is maximum when the magnetic flux through the coil is:

- A. maximum
- B. zero
- C. half its maximum value
- D. constant at its maximum value

<details><summary>Answer</summary>

**B.** The emf depends on the **rate of change** of flux. When the coil plane is parallel to the field, the flux is zero but changing most rapidly, so the emf is maximum.

</details>

## Section B — 5 numerical-value questions

### 11. Average emf from a changing field

A $400$-turn coil of area $0.015\ \text{m}^2$ is perpendicular to a magnetic field. The field increases uniformly from $0.10\ \text{T}$ to $0.40\ \text{T}$ in $0.050\ \text{s}$. Find the average emf magnitude.

<details><summary>Answer</summary>

The flux change per turn is

$$
|\Delta\Phi_B|=(0.40-0.10)(0.015)=4.5\times10^{-3}\ \text{Wb}.
$$

Thus

$$
|\varepsilon|=N\frac{|\Delta\Phi_B|}{\Delta t}
=400\frac{4.5\times10^{-3}}{0.050}=36\ \text{V}.
$$

The result is large because the change happens in only $50\ \text{ms}$ and there are $400$ turns.

</details>

### 12. Current and drag in a rod circuit

A rod of length $0.30\ \text{m}$ moves at $5.0\ \text{m/s}$ perpendicular to a $0.40\ \text{T}$ field. The total resistance is $0.60\ \Omega$. Find the current and the magnetic drag force.

<details><summary>Answer</summary>

$$
|\varepsilon|=B\ell v=(0.40)(0.30)(5.0)=0.60\ \text{V}.
$$

$$
I=\frac{0.60}{0.60}=1.0\ \text{A}.
$$

$$
F_m=BI\ell=(0.40)(1.0)(0.30)=0.12\ \text{N}.
$$

The drag opposes the motion. To maintain constant speed, an external force of $0.12\ \text{N}$ is needed, delivering $Fv=(0.12)(5.0)=0.60\ \text{W}$, which equals $I^2R=(1.0)^2(0.60)$.

</details>

### 13. Solenoid inductance

A solenoid has $1000$ turns, length $0.50\ \text{m}$, cross-sectional area $2.0\times10^{-4}\ \text{m}^2$, and an air core. Find its inductance.

<details><summary>Answer</summary>

$$
L=\frac{\mu_0N^2A}{\ell}
=\frac{(4\pi\times10^{-7})(1000)^2(2.0\times10^{-4})}{0.50}.
$$

The numerator is $(1.2566\times10^{-6})(10^6)(2.0\times10^{-4})=2.513\times10^{-4}$, so

$$
L=\frac{2.513\times10^{-4}}{0.50}=5.03\times10^{-4}\ \text{H}.
$$

That is about $0.50\ \text{mH}$.

</details>

### 14. Stored magnetic energy

An inductor of inductance $0.40\ \text{H}$ carries a steady current of $3.0\ \text{A}$. Find the energy stored in its magnetic field.

<details><summary>Answer</summary>

$$
U=\frac12LI^2=\frac12(0.40)(3.0)^2=1.8\ \text{J}.
$$

</details>

### 15. Peak emf of a generator

A generator coil has $250$ turns, area $0.010\ \text{m}^2$, and rotates at $50\ \text{Hz}$ in a $0.50\ \text{T}$ field. Find the peak emf.

<details><summary>Answer</summary>

$$
\omega=2\pi(50)=314\ \text{rad/s},
$$

$$
\varepsilon_0=NAB\omega
=(250)(0.010)(0.50)(314)=393\ \text{V}.
$$

The rms value would be $393/\sqrt2\approx278\ \text{V}$.

</details>

## Section C — 3 assertion–reason questions

For each question choose:

- **(a)** Both Assertion and Reason are true, and the Reason correctly explains the Assertion.
- **(b)** Both are true, but the Reason does not correctly explain the Assertion.
- **(c)** The Assertion is true, but the Reason is false.
- **(d)** The Assertion is false, but the Reason is true.

### 16. Stationary magnet, stationary flux

**Assertion:** A bar magnet held stationary inside a coil induces no emf in the coil.

**Reason:** An emf is induced only when the magnetic flux through the coil changes.

<details><summary>Answer</summary>

**(a).** With the magnet at rest the flux is constant, so $d\Phi_B/dt=0$ and the induced emf is zero. The Reason states exactly why the Assertion is true.

</details>

### 17. The direction of the induced field

**Assertion:** The induced current in a loop always produces a magnetic field opposite to the external magnetic field.

**Reason:** Lenz’s law states that the induced current opposes the change in magnetic flux.

<details><summary>Answer</summary>

**(d).** The Assertion is false. If the external flux is decreasing, the induced field points in the **same** direction as the external field, trying to maintain the flux. The Reason is true and correctly states Lenz’s law, but it does not support the false Assertion.

</details>

### 18. Laminated transformer cores

**Assertion:** Transformer cores are laminated to reduce energy loss.

**Reason:** Laminations increase the resistance of the paths available to eddy currents.

<details><summary>Answer</summary>

**(a).** Both statements are true. Thin insulated sheets break the large eddy-current loops into small ones with higher resistance, so less energy is dissipated as heat. The Reason correctly explains the Assertion.

</details>

## Section D — 2 matching and multi-statement questions

### 19. Matching relations

Match each quantity in Column I with its expression in Column II.

| Column I | Column II |
| --- | --- |
| A. Flux through a loop whose normal makes angle $\theta$ with $\vec B$ | P. $-L\,dI/dt$ |
| B. Average emf in $N$ turns | Q. $N\,\Delta\Phi_B/\Delta t$ |
| C. Self-induced emf | R. $\frac12LI^2$ |
| D. Energy stored in an inductor | S. $BA\cos\theta$ |

<details><summary>Answer</summary>

**A–S, B–Q, C–P, D–R.**

- Flux is $BA\cos\theta$.
- Faraday’s law in average form is $N\,\Delta\Phi_B/\Delta t$ for the magnitude.
- The self-induced emf is $-L\,dI/dt$.
- The magnetic energy is $\frac12LI^2$.

</details>

### 20. Multi-statement question

Consider the following statements:

- I. A large constant magnetic flux through a coil produces no emf.
- II. Lenz’s law follows from conservation of energy.
- III. The magnetic force on a rod sliding on rails does positive work on the rod.
- IV. In an inductor, energy is stored in the magnetic field.

Which statements are correct?

- A. I, II and IV only
- B. I, III and IV only
- C. II and III only
- D. all four

<details><summary>Answer</summary>

**A.** Statement I is true: emf requires a changing flux, not a large steady one. Statement II is true: if the induced effect aided the change, energy could grow without external work. Statement IV is true: the energy $\frac12LI^2$ resides in the magnetic field.

Statement III is false. The magnetic drag on the rod opposes its velocity, so it does **negative** work on the rod. The external agent that keeps the rod moving does the positive work, and that work becomes the electrical energy dissipated in the circuit.

</details>

## Review by error, not by score

| If you missed… | Revisit | Then retry |
| --- | --- | --- |
| 1–2 or 11 | Magnetic flux and Faraday’s experiments | Compute flux at several angles and decide whether it is changing. |
| 3, 5–6, 16–17 | Faraday’s law and Lenz’s law | For each change, state “flux increasing or decreasing” before choosing a current direction. |
| 4, 7–8 or 12 | Motional emf and energy considerations | Check $Fv=I^2R$ after every rod calculation. |
| 9, 13–14 or 19 | Inductance and the AC generator | Derive $L=\mu_0N^2A/\ell$ and distinguish $I$ from $dI/dt$. |
| 10, 15 or 18 | Generator output and eddy currents | Sketch flux and emf against time; mark the axes where each is zero. |
| 20 | Energy accounting across the chapter | Write the external work, the stored energy and the heat in one balance. |

<learning-block type="recap" title="Ready to move on?">

Aim for at least $16$ correct out of $20$, with a written reason for every direction and every energy balance. A correct number without a justified sign or unit is not yet a mastered answer.

</learning-block>
