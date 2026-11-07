## JEE Main sprint: oscillations

This is a **50-minute, no-notes** set on SHM, energy, pendulums, phase and resonance. Spend roughly **15 min** on Section A, **20 min** on Section B, **10 min** on Section C and **5 min** on Section D. If any single calculation passes 90 seconds, mark it and move — in SHM almost every question is one formula plus one conversion once you have chosen the right tool. Use $g=10\ \text{m/s}^2$ throughout unless a question states otherwise.

Before each question, name the tool in one breath: *defining condition, position-velocity shortcut, energy bookkeeping, period formula, phase geometry, or decay/resonance*. Writing the tool first is the cheapest insurance against plugging numbers into the wrong relation.

## Conditions and formula sheet

| Situation | Start with | Check before trusting the result |
| --- | --- | --- |
| "SHM" with displacement given | $a=-\omega^2x$ | The constant must come out in $\text{s}^{-2}$; convert $\omega=2\pi/T$ once |
| Speed without a clock | $\lvert v\rvert=\omega\sqrt{A^2-x^2}$ | Valid only between $-A$ and $+A$ |
| Peak values | $v_{\max}=\omega A$ at $x=0$; $a_{\max}=\omega^2A$ at $x=\pm A$ | Never at the same position |
| Energies | $E=\frac12kA^2=\frac12m\omega^2A^2$; $U=E(x/A)^2$; $K=E-U$ | $E\propto A^2$; equal split at $|x|=A/\sqrt2$ |
| Period of the two workhorses | $T=2\pi\sqrt{m/k}$ (spring); $T=2\pi\sqrt{L/g}$ (pendulum) | Mass-free pendulum; $g_{\text{eff}}$ in lifts or on other planets |
| Spring combinations | Parallel: $k_1+k_2$; series: reciprocals add | Series is *softer* than either spring |
| Phase from initial conditions | $\cos\phi=x_0/A$, then sign of $v_0=-\omega A\sin\phi$ | Quadrant is decided by the direction of motion |
| Combined same-line SHMs | $R^2=A_1^2+A_2^2+2A_1A_2\cos\delta$ | $\delta=0$ strongest, $\delta=\pi$ weakest |
| Decay by damping | $A=A_0e^{-bt/2m}$; half in $2m\ln2/b$ | Energy decays as $A^2$ — twice the exponent |
| Forced oscillations | Steady state at the driving frequency | Peak only when $\omega_d\approx\omega_0$; lighter damping → taller peak |

<learning-block type="mistake" title="Fastest sanity checks">

A "speed" larger than $\omega A$ or an "acceleration" larger than $\omega^2A$ means a slip. A negative energy, a period carrying $\pi^2$ where it needs $(2\pi)^2$, or seconds where radians belong — stop and re-derive. And if your combined amplitude $R$ exceeds $A_1+A_2$, no legitimate geometry produced it.

</learning-block>

## Section A — 10 rapid MCQs

### 1. Acceleration from the defining condition

A particle in SHM has period $2.0\ \text{s}$. The magnitude of its acceleration at $x=5.0\ \text{cm}$ is, in $\text{m/s}^2$:

- A. $0.05$
- B. $0.49$
- C. $4.9$
- D. $9.9$

<details><summary>Answer</summary>

**B.** $\omega=2\pi/T=\pi\ \text{rad/s}$, so $|a|=\omega^2x=\pi^2(0.050)\approx0.49\ \text{m/s}^2$, directed toward the mean position. Option C would come from forgetting the *square* somewhere or mixing units.
</details>

### 2. Where is it fastest?

In SHM the particle's speed is greatest:

- A. at one extreme
- B. halfway between the mean and an extreme
- C. at the mean position
- D. the same everywhere

<details><summary>Answer</summary>

**C.** $|v|=\omega\sqrt{A^2-x^2}$ is maximal when $x=0$. At the extremes the velocity is momentarily zero, while the acceleration is maximal there — a favourite swap-the-two trap.
</details>

### 3. The pendulum on the Moon

A simple pendulum has period $2.0\ \text{s}$ on Earth ($g=10\ \text{m/s}^2$). On the Moon, where $g\approx g_E/6$, its period is closest to:

- A. $1.2\ \text{s}$
- B. $2.8\ \text{s}$
- C. $4.9\ \text{s}$
- D. $12\ \text{s}$

<details><summary>Answer</summary>

**C.** $T\propto1/\sqrt g$, so $T_{\text{Moon}}=2.0\times\sqrt6\approx4.9\ \text{s}$.
</details>

### 4. Amplitude and energy

The amplitude of a harmonic oscillator is doubled. The stored total energy becomes:

- A. the same
- B. double
- C. four times
- D. half

<details><summary>Answer</summary>

**C.** $E=\frac12kA^2\propto A^2$, so double amplitude gives four times the energy. (Maximum speed would merely double.)
</details>

### 5. Cutting a spring in half

A spring–mass oscillator has period $T$. If a spring identical in every way but *half the length* replaces it, the new period is:

- A. $\sqrt2\,T$
- B. $T/\sqrt2$
- C. $T$
- D. $2T$

<details><summary>Answer</summary>

**B.** Halving the number of coils doubles the spring constant ($k\propto1/L$), so $T'=2\pi\sqrt{m/2k}=T/\sqrt2\approx0.71\,T$. Stiffer means faster.
</details>

### 6. Energy fractions at half amplitude

For an oscillator at displacement $x=A/2$, the kinetic energy is what fraction of the total?

- A. $1/4$
- B. $1/2$
- C. $3/4$
- D. $\sqrt3/2$

<details><summary>Answer</summary>

**C.** $U=E(x/A)^2=E/4$, so $K=E-U=3E/4$. Beyond $A/\sqrt2\approx0.71A$, potential energy holds the majority; at $0.5A$ it does not.
</details>

### 7. Two identical springs in series

Two identical springs, each of constant $k$, support a mass $m$ in series. The effective constant and the period are:

- A. $2k$ and $2\pi\sqrt{m/2k}$
- B. $k/2$ and $2\pi\sqrt{2m/k}$
- C. $2k$ and $2\pi\sqrt{2m/k}$
- D. $k/2$ and $2\pi\sqrt{m/2k}$

<details><summary>Answer</summary>

**B.** Series arrangement adds reciprocals: $1/k_{\text{eff}}=2/k$, so $k_{\text{eff}}=k/2$ and $T=2\pi\sqrt{m/(k/2)}=2\pi\sqrt{2m/k}$ — the weaker, slower arrangement.
</details>

### 8. Who leads whom in phase?

For $x=A\cos(\omega t+\phi)$, the velocity is:

- A. in phase with the displacement
- B. a quarter cycle *behind* the displacement
- C. a quarter cycle *ahead of* the displacement
- D. exactly antiphase with the displacement

<details><summary>Answer</summary>

**C.** $v=-\omega A\sin(\omega t+\phi)=\omega A\cos(\omega t+\phi+\pi/2)$: the velocity phase exceeds the displacement phase by $\pi/2$. Antiphase belongs to acceleration, not velocity.
</details>

### 9. What damping does and does not change

In a *lightly* damped oscillator left undriven, which quantity stays essentially constant while the motion dies away?

- A. amplitude
- B. period (frequency nearly unchanged)
- C. total mechanical energy
- D. maximum speed

<details><summary>Answer</summary>

**B.** The envelope $A_0e^{-bt/2m}$ decays, carrying energy and peak speed down with it, but the frequency shifts only slightly below $\omega_0$ for light damping — successive swings take nearly the same time.
</details>

### 10. The resonance condition

The steady amplitude of a forced oscillator is largest when:

- A. the driving frequency is far above the natural frequency
- B. the driving frequency equals the natural frequency and damping is light
- C. the damping is heaviest and the drive is fastest
- D. the driving amplitude is small but the drive is in antiphase

<details><summary>Answer</summary>

**B.** Resonance is a *frequency match*, $\omega_d\approx\omega_0$, exploited best when little energy leaks away. Heavier damping lowers and broadens the same peak.
</details>

## Section B — 5 numerical-value questions

Write the numerical value only (no unit box needed; the working below carries units).

### 11. A period from k and m

A block of mass $0.80\ \text{kg}$ rides on a spring of constant $125\ \text{N/m}$. Find the period, in seconds, to two decimal places.

<details><summary>Answer</summary>

$\omega=\sqrt{k/m}=\sqrt{125/0.80}=\sqrt{156.25}=12.5\ \text{rad/s}$, so $T=2\pi/\omega=2\pi/12.5\approx0.50\ \text{s}$. (Cheap check: $k/m=156.25=\ 12.5^2$ — the numbers were hung so that the square root is exact.)
</details>

### 12. Peak speed from A and T

An oscillator has amplitude $10\ \text{cm}$ and period $0.40\ \text{s}$. Find its maximum speed in m/s to two decimal places.

<details><summary>Answer</summary>

$\omega=2\pi/T=2\pi/0.40\approx15.71\ \text{rad/s}$; $v_{\max}=\omega A=15.71(0.10)\approx1.57\ \text{m/s}$.
</details>

### 13. Energy stored in a stretched spring

A spring of constant $400\ \text{N/m}$ is displaced by $5.0\ \text{cm}$ from equilibrium. How many joules of mechanical energy are stored?

<details><summary>Answer</summary>

$E=\frac12kA^2=\frac12(400)(0.050)^2=0.50\ \text{J}$.
</details>

### 14. The crawl from the centre

An oscillator of period $1.2\ \text{s}$ starts at the mean position moving positively. How many seconds until it first reaches $A/2$? (Two decimal places.)

<details><summary>Answer</summary>

With $x=A\sin\omega t$, $A/2$ needs $\omega t=\pi/6$, i.e. $t=T/12=1.2/12=0.10\ \text{s}$. The same distance as from $A/2$ to $A$ would take $T/6=0.20\ \text{s}$ — twice as long.
</details>

### 15. A fading amplitude

A $0.40\ \text{kg}$ oscillator in a viscous fluid has damping constant $b=0.20\ \text{kg/s}$. How many seconds until the amplitude first halves? (Two decimal places.)

<details><summary>Answer</summary>

$t_{1/2}=\dfrac{2m\ln2}{b}=\dfrac{2(0.40)(0.693)}{0.20}\approx2.77\ \text{s}$.
</details>

## Section C — 3 assertion–reason questions

Standard options for questions 16–18:

- **(a)** Statement I and Statement II are both true; II is the correct explanation of I.
- **(b)** both true; II is *not* the correct explanation of I.
- **(c)** I true, II false.
- **(d)** I false, II true.

### 16. Extremes dominance

**Statement I:** In SHM the acceleration is largest in magnitude at the extreme displacements.

**Statement II:** The restoring acceleration is directly proportional to the displacement from equilibrium.

<details><summary>Answer</summary>

**(a).** From $a=-\omega^2x$, $|a|$ grows with $|x|$ up to $\omega^2A$ at $\pm A$. Since the proportionality is what transfers the displacement straight into the acceleration, Statement II is precisely the cause of Statement I.
</details>

### 17. Stiffness and the period

**Statement I:** Making a spring–mass oscillator's spring stiffer increases the period.

**Statement II:** For a spring–mass system $\omega=\sqrt{k/m}$.

<details><summary>Answer</summary>

**(d).** Statement II is true, and it *refutes* Statement I: larger $k$ raises $\omega$ and shortens $T=2\pi\sqrt{m/k}$. A true formula while the assertion gets its direction backwards — the classic (d) shape.
</details>

### 18. Critical versus overdamped

**Statement I:** A critically damped system returns to equilibrium sooner than an overdamped one.

**Statement II:** In neither regime does the system overshoot the equilibrium position.

<details><summary>Answer</summary>

**(b).** Both statements are true — critical damping is the fastest *non-oscillatory* return, and both regimes avoid overshoot. But "no overshoot" cannot explain the speed ranking; the comparison follows from the overdamped motion being dragged down by its excess $b$, not merely from its courtesy. So II, though true, is not the explanation of I.
</details>

## Section D — 2 matching / multi-statement questions

### 19. Formula factory

Match each system (Column I) with its small-oscillation period (Column II).

| Column I | Column II |
| --- | --- |
| (p) spring–mass, constant $k$, mass $m$ | (1) $2\pi\sqrt{m/k}$ |
| (q) simple pendulum, length $L$ | (2) $2\pi\sqrt{L/g}$ |
| (r) uniform rod of length $L$ pivoted at one end | (3) $2\pi\sqrt{2L/3g}$ |
| (s) two identical springs (each $k$) in series holding mass $m$ | (4) $2\pi\sqrt{2m/k}$ |
| | (5) $2\pi\sqrt{m/2k}$ |

<details><summary>Answer</summary>

**p→1, q→2, r→3, s→4.** The rod: $I=mL^2/3$, $d=L/2$, so $T=2\pi\sqrt{(mL^2/3)/(mgL/2)}=2\pi\sqrt{2L/3g}$. Series springs: $k_{\text{eff}}=k/2$, giving $2\pi\sqrt{2m/k}$. The leftover **(5)** is the period for two identical springs in *parallel* — $k_{\text{eff}}=2k$ — the distractor for swapping series and parallel.
</details>

### 20. Three statements about one oscillator

An oscillator has amplitude $A$ and angular frequency $\omega$. Which of the following are correct?

**I.** The speed equals $\omega A/2$ when the displacement is $\sqrt3\,A/2$.

**II.** The potential energy is three quarters of the total when the displacement is $\sqrt3\,A/2$.

**III.** Over many cycles the particle spends more time near the extremes than near the centre.

<details><summary>Answer</summary>

**All three are correct.** I: $|v|=\omega\sqrt{A^2-x^2}=\omega\sqrt{A^2-3A^2/4}=\omega A/2$. II: $U=E(x/A)^2=E(3/4)$. III: the $x$–$t$ curve is flattest at $\pm A$ — the quarter-milestone arithmetic (to $A/2$ in $T/12$, then $A/2\to A$ in $T/6$) shows the outer stretch costs twice the time of the inner one, so the particle lingers near the extremes.
</details>

## If you got these wrong, revisit...

| Wrong on | Revisit |
| --- | --- |
| Q1, Q8 (condition, phase lead) | *Displacement, velocity and acceleration in SHM* |
| Q4, Q6, Q13 (energy) | *Energy in SHM* |
| Q3, Q7, Q11, Q19 (period factories) | *Spring-mass systems and the pendulum* |
| Q14, Q20 III (timing from phase) | *SHM and uniform circular motion* — phase reasoning and milestones |
| Q9, Q15, Q16 (decay) | *Damped and forced oscillations* |
| Q2, Q5, Q12, Q17 (tool choice, formula direction) | *Periodic motion and SHM* and the formula sheet at the top of this set |

Two or more slips in the same row is not a rounding issue — it is a lesson signal. Re-read that module, redo its "Try it yourself" cold, and only then close the chapter.
