## JEE Main sprint: how to use this set

This is a **50-minute, no-notes** timed paper covering the whole rotational-motion chapter: centre of mass, torque, moment of inertia, rotational energy, rolling, angular momentum and equilibrium. Use $g=10\ \text{m/s}^2$ unless a question states otherwise. A realistic budget: **15 minutes** for Section A, **12** for Section B, **13** for Section C and **10** for Section D, leaving a minute to re-attack starred questions. Answer numerical-value questions without options to lean on — write the formula first, the number second.

The discipline being tested is the same as in the chapter review: name the tool *before* touching algebra.

## Conditions sheet

| Situation | Start with | Check before using it |
| --- | --- | --- |
| Locating a balance point | $\vec r_{cm}=\sum m_i\vec r_i/M$; holes as negative mass | Masses *and* positions assigned to the right pieces |
| Deciding what shifts under an internal push | $M\vec a_{cm}=\sum\vec F_{ext}$ | The force is really internal (third-law pair inside the boundary) |
| Force acting off-axis | $\tau=rF\sin\theta=F\,r_\perp$ | Pivot named; angle measured between $\vec r$ and $\vec F$ |
| Spin-up or spin-down from a torque | $\alpha=\tau/I$, then constant-$\alpha$ kinematics | $\tau$ **and** $I$ taken about the same axis |
| Axis displaced from the centre of mass | $I=I_{cm}+Md^2$ (parallel only) | Axes genuinely parallel; $d$ squared |
| Energy and spin together | $\tfrac12Mv_{cm}^2+\tfrac12I_{cm}\omega^2$ | All bodies' kinetic energy accounted, wheels' included |
| Rolling from a height | $v^2=\dfrac{2gh}{1+I/MR^2}$ | Rolling without slipping verified $(\mu_s$ sufficient$)$ |
| Shape changes, or spinners couple | $\vec\tau_{ext}=0\Rightarrow L=I\omega$ constant | Energy is *not* conserved alongside it |
| Static structures | $\sum\vec F=0$, $\sum\vec\tau=0$ | Pivot chosen through an unknown force; hinges carry both components |

<learning-block type="mistake" title="Instant disqualifiers">

Stop and re-inspect the setup if an answer shows: a negative moment of inertia or radius of gyration; a rolling acceleration exceeding $g\sin\theta$; kinetic energy conserved across a shape-changing skater or coupling discs; or an angle in degrees inside $\theta=\tfrac12\alpha t^2$. Each of these is a certain sign of a misapplied law, and in JEE timing the fastest fix is to re-select the tool rather than re-check arithmetic.

</learning-block>

## Section A — 10 rapid MCQs

### 1. Where the mass balances

A $2\ \text{kg}$ mass sits at $x=0$ and a $4\ \text{kg}$ mass at $x=3\ \text{m}$. The centre of mass is at:

- A. $1.0\ \text{m}$
- B. $1.5\ \text{m}$
- C. $2.0\ \text{m}$
- D. $2.5\ \text{m}$

<details><summary>Answer</summary>

**C.** $x_{cm}=\dfrac{(2)(0)+(4)(3)}{6}=2.0\ \text{m}$. It is twice as far from the $2\ \text{kg}$ mass as from the $4\ \text{kg}$ mass — inverse ratio of masses.
</details>

### 2. Torque of a door push

A door is $0.90\ \text{m}$ wide and a $20\ \text{N}$ force is applied perpendicular to its face at the handle. The torque about the hinge is:

- A. $9.0\ \text{N·m}$
- B. $18\ \text{N·m}$
- C. $20\ \text{N·m}$
- D. $0$

<details><summary>Answer</summary>

**B.** The force is perpendicular to $\vec r$, so $\sin90^\circ=1$: $\tau=(0.90)(20)=18\ \text{N·m}$.
</details>

### 3. The disc's moment of inertia

A uniform disc has mass $M$ and radius $R$. Its moment of inertia about its central symmetry axis is:

- A. $MR^2$
- B. $\tfrac12MR^2$
- C. $\tfrac14MR^2$
- D. $\tfrac25MR^2$

<details><summary>Answer</summary>

**B.** $I=\tfrac12MR^2$ for a disc (or solid cylinder) about the symmetry axis; $MR^2$ would belong to a ring, $\tfrac25MR^2$ to a solid sphere, and $\tfrac14MR^2$ is a disc about a *diameter*.
</details>

### 4. The rolling race

A ring and a disc of equal mass and radius roll without slipping down the same incline. Which reaches the bottom first?

- A. the ring
- B. the disc
- C. both together
- D. it depends on the incline's angle

<details><summary>Answer</summary>

**B.** $a=\dfrac{g\sin\theta}{1+I/MR^2}$: the disc's shape factor $\tfrac12$ beats the ring's $1$. The angle cancels between the two racers, and so do mass and radius — shape alone decides.
</details>

### 5. Steady spin

A rigid body rotates at constant angular speed about a fixed axis on frictionless bearings. The net external torque is:

- A. zero
- B. $I\omega$
- C. $I\alpha$ with $\alpha\neq0$
- D. constant but nonzero

<details><summary>Answer</summary>

**A.** Constant $\omega$ means $\alpha=0$, and $\tau_{net}=I\alpha=0$ — exactly as constant velocity implies zero net force. A real motor overcoming bearing friction supplies a torque that cancels the resistive one.
</details>

### 6. Angular momentum of a particle

A $2\ \text{kg}$ particle moves at $3.0\ \text{m/s}$ in a circle of radius $0.50\ \text{m}$. Its angular momentum is:

- A. $1.0\ \text{kg·m}^2/\text{s}$
- B. $3.0\ \text{kg·m}^2/\text{s}$
- C. $6.0\ \text{kg·m}^2/\text{s}$
- D. $12\ \text{kg·m}^2/\text{s}$

<details><summary>Answer</summary>

**B.** $L=mvr=(2.0)(3.0)(0.50)=3.0\ \text{kg·m}^2/\text{s}$, perpendicular to the plane of motion.
</details>

### 7. What the skater keeps

A skater spinning with negligible friction pulls her arms in. Which quantity is unchanged?

- A. rotational kinetic energy
- B. angular momentum
- C. moment of inertia
- D. angular speed

<details><summary>Answer</summary>

**B.** With zero external torque about her axis, $L=I\omega$ is fixed. $I$ falls, $\omega=\dfrac{L}{I}$ rises, and $K=\dfrac{L^2}{2I}$ rises — muscle work, not magic.
</details>

### 8. The contact point

A wheel rolls without slipping on a road. The speed of its contact point, relative to the road, is:

- A. $v$
- B. $v/2$
- C. $0$
- D. $2v$

<details><summary>Answer</summary>

**C.** Rolling without slipping *means* the contact point is instantaneously at rest in the road frame: $v-\omega R=0$. That is what licenses static friction and why it does no work.
</details>

### 9. Recognising a couple

Two equal and opposite forces act along different lines of action. They:

- A. apply a net force that cannot be balanced
- B. produce translation proportional to $Fd$
- C. produce a net torque with zero net force, the same about every point
- D. cannot affect a rigid body at all

<details><summary>Answer</summary>

**C.** That pair is a couple: $\sum\vec F=0$ (no translation), $\tau=Fd$ (pure spin), and the torque is pivot-independent. A torque wrench on a free wheel and a hand on a door edge both rely on it.
</details>

### 10. Radius of gyration of a disc

The radius of gyration of a uniform disc about its symmetry axis is:

- A. $\tfrac12R$
- B. $\dfrac{R}{\sqrt2}$
- C. $R$
- D. $\sqrt{\tfrac25}\,R$

<details><summary>Answer</summary>

**B.** $k=\sqrt{I/M}=\sqrt{\tfrac12R^2}=\dfrac{R}{\sqrt2}\approx0.71R$ — the disc's mass behaves as if concentrated at $71\%$ of its radius.
</details>

## Section B — 5 numerical-value questions

### 11. A three-mass rail

Masses of $1.0\ \text{kg}$, $2.0\ \text{kg}$ and $3.0\ \text{kg}$ sit at $x=0$, $1.0\ \text{m}$ and $2.0\ \text{m}$ on a light rail. Find $x_{cm}$ in metres (two decimals).

<details><summary>Answer</summary>

$$
x_{cm}=\frac{(1)(0)+(2)(1)+(3)(2)}{6}=\frac{8}{6}=1.33\ \text{m}.
$$

Slightly beyond the midpoint toward the heavy end: $4$ of the $6\ \text{kg}$ live in the outer metre.
</details>

### 12. Spinning up a flywheel

A constant torque of $8.0\ \text{N·m}$ acts on a flywheel of $I=2.0\ \text{kg·m}^2$ initially at rest. Find its angular speed after $5.0\ \text{s}$ (in rad/s).

<details><summary>Answer</summary>

$$
\alpha=\frac{\tau}{I}=\frac{8.0}{2.0}=4.0\ \text{rad/s}^2,\qquad
\omega=\alpha t=(4.0)(5.0)=20\ \text{rad/s}.
$$

Cross-check by angular impulse: $\tau t=(8.0)(5.0)=40\ \text{N·m·s}=\Delta L=I\omega$. ✓
</details>

### 13. Rotational share of a rolling sphere

A solid sphere rolls without slipping with its centre moving at $7.0\ \text{m/s}$. What fraction of its total kinetic energy is rotational (two decimals)?

<details><summary>Answer</summary>

Rotational share $=\dfrac{I/MR^2}{1+I/MR^2}=\dfrac{2/5}{7/5}=\dfrac27\approx0.29$.

The speed never entered: the split between tumbling and travelling is fixed by shape alone.
</details>

### 14. Wire holding a rod

A uniform rod of mass $2.0\ \text{kg}$ is hinged to a wall at one end and held horizontal by a light wire attached at the far end, making $30^\circ$ with the rod. Find the wire tension in newtons.

<details><summary>Answer</summary>

Torque about the hinge:

$$
mg\frac{L}{2}=T\,L\sin30^\circ
\quad\Rightarrow\quad
T=\frac{mg}{2\sin30^\circ}=\frac{(2.0)(10)}{2(0.5)}=20\ \text{N}.
$$

The hinge supplies the remaining vertical support, $mg-T\sin30^\circ=10\ \text{N}$ upward, plus a horizontal component balancing the wire's horizontal pull.
</details>

### 15. Two discs couple

A turntable of $I=5.0\ \text{kg·m}^2$ spins freely at $2.0\ \text{rad/s}$. A stationary platter of $I=3.0\ \text{kg·m}^2$ is lowered onto it; friction brings both to a common rate. Find that rate (in rad/s).

<details><summary>Answer</summary>

No external torque about the axle, so

$$
\omega_f=\frac{I_1\omega_1}{I_1+I_2}=\frac{(5.0)(2.0)}{8.0}=1.25\ \text{rad/s}.
$$

The rotation slows — kinetic energy dropped from $10\ \text{J}$ to $6.25\ \text{J}$, and the missing $3.75\ \text{J}$ went to heat at the rubbing surfaces. Momentum conserved, energy not: the disc-world inelastic collision.
</details>

## Section C — 3 assertion–reason questions

Choose: **(a)** both statements true, R correctly explains A; **(b)** both true, R does not explain A; **(c)** A true, R false; **(d)** A false, R true.

### 16. The tucked skater

**Assertion (A):** A spinning skater who tucks her arms spends muscle work, and her rotational kinetic energy increases.
**Reason (R):** With negligible external torque her angular momentum $I\omega$ is constant, so as $I$ decreases $\omega$ rises in inverse proportion and $K=\dfrac{L^2}{2I}$ rises with it.

<details><summary>Answer</summary>

**(a).** Conservation of $L$ under zero external torque, combined with the shrinking $I$, forces both the spin-up and the energy gain; the muscle work is exactly the increase, $\Delta K=\frac{L^2}{2}\left(\frac{1}{I_2}-\frac{1}{I_1}\right)$. R is the mechanism, not a coincidence.
</details>

### 17. Force balance and spin

**Assertion (A):** If the net external force on a rigid body is zero, the body cannot rotate faster over time.
**Reason (R):** A couple — equal and opposite forces on different lines of action — produces zero net force but a nonzero net torque that changes rotation.

<details><summary>Answer</summary>

**(d).** A is false: a couple (or an unbalanced torque from balanced forces) spins a body up while the net force stays zero. R is a true statement of exactly why. Translation and rotation bookkeep independently: $\sum\vec F$ governs $a_{cm}$, $\sum\vec\tau$ governs $\alpha$.
</details>

### 18. Friction's role in rolling

**Assertion (A):** A body rolling without slipping on an incline must be experiencing kinetic friction at its contact point.
**Reason (R):** Kinetic friction immediately converts mechanical energy into thermal energy.

<details><summary>Answer</summary>

**(c).** A is false: pure rolling means the contact point is instantaneously at rest, so the operative friction is *static*, adjustable up to $\mu_sN$ and doing no work. R is true as a statement about kinetic friction itself — but it applies to skidding, not rolling. When rolling does fail for want of grip, kinetic friction arrives and the mechanical energy starts to drain.
</details>

## Section D — 2 matching / multi-statement questions

### 19. Match the moments

Match the body with its moment of inertia (uniform bodies, total mass $M$):

| Column I (body, axis) | Column II ($I$) |
| --- | --- |
| (p) Rod, length $L$, perpendicular axis through centre | (1) $\dfrac{ML^2}{12}$ |
| (q) Ring, radius $R$, central symmetry axis | (2) $\dfrac{2MR^2}{5}$ |
| (r) Solid sphere, radius $R$, any diameter | (3) $MR^2$ |
| (s) Disc, radius $R$, along a diameter | (4) $\dfrac{MR^2}{2}$ |

<details><summary>Answer</summary>

**p–1, q–3, r–2, s–4.**

Quick re-derivations if any pairing wavered: the rod's end value $\tfrac13ML^2$ minus the parallel-axis term $M(L/2)^2$ leaves $\tfrac1{12}ML^2$; the ring holds all mass at $R$; the sphere integrates shells to $\tfrac25$; and the disc's diameter value follows from the perpendicular-axis theorem: $I_z=\tfrac12MR^2$ splits equally, $I_x=\tfrac14MR^2$.
</details>

### 20. Cylinder on an incline: three out of four

A solid cylinder rolls without slipping down an incline of angle $\theta$ from a height $h$. Consider:

1. its acceleration is $a=\dfrac23g\sin\theta$;
2. static friction acts up the incline;
3. the minimum friction coefficient for pure rolling is $\mu_s=\dfrac13\tan\theta$;
4. it reaches the bottom with speed $v=\sqrt{2gh}$.

Which statements are correct?

<details><summary>Answer</summary>

**(1), (2) and (3) only.** For a cylinder, $I/MR^2=\tfrac12$:

1. $a=\dfrac{g\sin\theta}{1+\tfrac12}=\dfrac23g\sin\theta$ ✓
2. Gravity's torque about the contact point would send the cylinder sliding down while its spin lags; static friction therefore acts **up** the slope, trimming $a$ and supplying the spin-up torque ✓
3. With $f=\tfrac13Mg\sin\theta$ (from $fR=I\alpha$) against $N=Mg\cos\theta$: $\mu_s\ge\dfrac{f}{N}=\dfrac13\tan\theta$ ✓
4. ✗ — energy splits between translation and rotation: $\tfrac12Mv^2\left(1+\tfrac12\right)=Mgh$, giving $v=\sqrt{\tfrac{10gh}{7}}$, about $18\%$ slower than $\sqrt{2gh}$. Statement 4 is the frictionless *slider's* result; a roller never earns it.
</details>

## Review by error, not by score

| If you missed… | Revisit | Then retry |
| --- | --- | --- |
| 1, 11 | Centre of mass | Weighted-average arithmetic, then composites and holes as negative mass |
| 2, 6 | Torque, particle angular momentum | Name the pivot; extract the lever arm before any algebra |
| 3, 10, 19 | Moments of inertia | The standard table plus both axis theorems, not pattern-matching options |
| 5, 12 | Rotational dynamics | $\tau=I\alpha$ and the constant-$\alpha$ kinematics, angles in radians |
| 8, 13, 20 | Rolling | The condition $v=\omega R$, the energy split, and friction's static character |
| 4, 20 (item 1) | Rolling race | Shape factor $I/MR^2$ decided alone; mass and radius are spectators |
| 7, 15, 16 | Angular momentum conservation | $I_1\omega_1=I_2\omega_2$; $K$ moves with $1/I$ while $L$ stands still |
| 14, 17 | Equilibrium | Two conditions, tactical pivot, hinge as a two-component unknown |

<learning-block type="recap" title="Reading your result">

At least 15 of 20 correct, with the method named before each calculation, is a strong chapter pass. Questions answered correctly without a nameable method are revision targets, not successes — the chapter's review module ("First choose the tool") is the fastest place to recover them.

</learning-block>
