## Your study plan for today

Rotational mechanics rewards command of *when* to use each tool more than of any single formula. A focused first pass takes about **2 hours 45 minutes**, plus a break:

1. **Centre of mass** — 20 min
2. **Torque and angular momentum** — 20 min
3. **Moment of inertia** — 20 min
4. **Rotational dynamics and kinetic energy** — 20 min
5. **Rolling without slipping** — 25 min
6. **Conservation of angular momentum** — 15 min
7. **Equilibrium of a rigid body** — 20 min
8. **This mastery check** — 25 min

After each lesson, close it and rework its questions on a blank page. Mark it complete only when you can say *why* the method fits the problem, not merely reproduce the answer.

When the lessons feel comfortable, move on to the timed **JEE Main practice set** for this chapter: 50 minutes of no-notes questions whose real test is method selection under the clock.

## First choose the tool

| Clue in the question | Start with |
| --- | --- |
| Where does the mass balance? / centre of the system | Weighted average: $\vec r_{cm}=\sum m_i\vec r_i/M$; composites via pieces |
| Will an internal push move the whole system? | $M\vec a_{cm}=\sum\vec F_{ext}$; internal forces cancel in third-law pairs |
| Force at a distance from an axis | Torque: $\tau=rF\sin\theta$; find the lever arm first, the pivot second |
| Rotation from rest with a given torque | $\alpha=\tau/I$, then $\omega=\alpha t$, $\theta=\tfrac12\alpha t^2$ |
| Axis shifted from the centre of mass | Parallel axis: $I=I_{cm}+Md^2$ (parallel only) |
| Flat body, three perpendicular axes | Perpendicular axis: $I_z=I_x+I_y$ |
| Energy involved along with spin | $K=\tfrac12Mv_{cm}^2+\tfrac12I_{cm}\omega^2$; input work $W=\tau\theta$ |
| Body rolls without slipping from a height | $v^2=\dfrac{2gh}{1+I/MR^2}$ — one equation, no forces needed |
| Rolling acceleration or friction on an incline | $a=\dfrac{g\sin\theta}{1+I/MR^2}$; $f$ up the slope; check $\mu_s$ |
| Spinning body changes shape, or two spinners couple | $\vec\tau_{ext}=0\Rightarrow I_1\omega_1=I_2\omega_2$; $K=\dfrac{L^2}{2I}$ changes |
| Hub, hinge or axle collision (putty, bullet, dropped disc) | Angular momentum conservation **about the pivot** |
| Beam, ladder, bracket, see-saw at rest | $\sum\vec F=0$ and $\sum\vec\tau=0$; pivot through an unknown force |

## Mastery check

Attempt each fully before opening the answer. Use $g=10\ \text{m/s}^2$ unless stated otherwise.

### 1. Three masses on a rail

Masses of $2\ \text{kg}$, $3\ \text{kg}$ and $1\ \text{kg}$ sit at $x=0$, $2\ \text{m}$ and $4\ \text{m}$ on a light rail. Locate the centre of mass.

<details><summary>Answer and reasoning</summary>

$$
x_{cm}=\frac{(2)(0)+(3)(2)+(1)(4)}{6}=\frac{10}{6}=\frac{5}{3}\approx1.67\ \text{m}.
$$

Of the six kilograms, four sit to the right of the $3\ \text{kg}$ mass's midpoint — the centre of mass lies between the $2\ \text{kg}$ and $3\ \text{kg}$ positions, closer to the heavier pair. A location check: it must lie inside the span $[0,\ 4]\ \text{m}$ and right of the unweighted midpoint; it does.
</details>

### 2. Torque through a door

A door is $0.80\ \text{m}$ wide. A $15\ \text{N}$ force is applied at the handle at $30^\circ$ to the door's plane. Find the torque about the hinge.

<details><summary>Answer and reasoning</summary>

Only the component perpendicular to the door's face turns it:

$$
\tau=rF\sin\theta=(0.80)(15)\sin30^\circ=6.0\ \text{N·m}.
$$

Pushing along the door's *length* ($\theta=0$) would be wasted effort; pushing broadside ($\theta=90^\circ$) would give the full $12\ \text{N·m}$ of the same force.
</details>

### 3. Rod on the parallel axis

A uniform rod of mass $3.0\ \text{kg}$ and length $1.2\ \text{m}$ spins about a perpendicular axis through one end. Compute $I$ two ways.

<details><summary>Answer and reasoning</summary>

Direct table value: $I=ML^2/3=(3.0)(1.2^2)/3=1.44\ \text{kg·m}^2$.

Parallel-axis route: $I_{cm}=ML^2/12=(3.0)(1.44)/12=0.36\ \text{kg·m}^2$, and the end axis lies $d=0.60\ \text{m}$ away:

$$
I=0.36+(3.0)(0.60^2)=0.36+1.08=1.44\ \text{kg·m}^2. \checkmark
$$

Same answer, and the exercise is exactly the drill to run in an exam after impressing $I_{cm}$ on your memory.
</details>

### 4. Pulley with real mass

A $2.0\ \text{kg}$ block on a frictionless table is connected by a light string over a disc pulley of mass $2.0\ \text{kg}$ and radius $0.25\ \text{m}$ to a $2.0\ \text{kg}$ hanging block. Find the acceleration and both string tensions.

<details><summary>Answer and reasoning</summary>

A disc pulley behaves like an added mass $M/2=1.0\ \text{kg}$:

$$
a=\frac{m_2g}{m_1+m_2+M/2}=\frac{20}{2+2+1}=4.0\ \text{m/s}^2 .
$$

Table-side tension: $T_2=m_1a=(2.0)(4.0)=8.0\ \text{N}$. Hanging-side tension: $T_1=m_2(g-a)=(2.0)(6.0)=12\ \text{N}$.

Check the pulley: net torque $(12-8)(0.25)=1.0\ \text{N·m}$, and $I=\tfrac12(2.0)(0.25^2)=0.0625\ \text{kg·m}^2$ gives $\alpha=1.0/0.0625=16\ \text{rad/s}^2$, whose product with $R$ returns $a=(16)(0.25)=4.0\ \text{m/s}^2$. ✓
</details>

### 5. Motor work into a flywheel

A motor applies a constant torque for $4.0\ \text{s}$, spinning a flywheel of $I=5.0\ \text{kg·m}^2$ from rest to $8.0\ \text{rad/s}$. Find the motor's torque and the work it delivered.

<details><summary>Answer and reasoning</summary>

$$
\alpha=\frac{8.0}{4.0}=2.0\ \text{rad/s}^2,\qquad
\tau=I\alpha=(5.0)(2.0)=10\ \text{N·m}.
$$

Angle covered: $\theta=\tfrac12\alpha t^2=\tfrac12(2.0)(16)=16\ \text{rad}$, so

$$
W=\tau\theta=(10)(16)=160\ \text{J},
$$

which equals the stored $K_{rot}=\tfrac12(5.0)(8.0^2)=160\ \text{J}$ — the work–energy theorem, rotational edition.
</details>

### 6. Ball rolling arrives slow

A solid sphere rolls without slipping from a ramp and reaches the bottom at $6.0\ \text{m/s}$. From what height did it start, and how fast does it spin if $R=0.20\ \text{m}$?

<details><summary>Answer and reasoning</summary>

From $v^2=\dfrac{2gh}{1+2/5}=\dfrac{10}{7}gh$:

$$
h=\frac{7}{10}\cdot\frac{v^2}{g}=\frac{7}{10}\cdot\frac{36}{10}=2.52\ \text{m}.
$$

A quick inequality check: a roller arrives slower than a frictionless slider from the same height, so it needs *more* height to reach the same speed. A slider would reach $6.0\ \text{m/s}$ from $v^2/2g=1.80\ \text{m}$, and the roller needs a factor $1+2/5=1.4$ more: $1.4\times1.80=2.52\ \text{m}$. ✓

Spin: $\omega=v/R=6.0/0.20=30\ \text{rad/s}$, about five revolutions per second.
</details>

### 7. Race on a $30^\circ$ slope

A ring, a solid cylinder and a solid sphere of equal mass launch together down the same $30^\circ$ incline (ample friction). Rank the accelerations and time the cylinder over a $3.0\ \text{m}$ run.

<details><summary>Answer and reasoning</summary>

Shape factors decide everything: $a=(g\sin\theta)/(1+k^2/R^2)$ with $k^2/R^2=1,\ \tfrac12,\ \tfrac25$ for ring, cylinder, sphere:

$$
a_{\text{ring}}=\tfrac12(10)(0.5)=2.5,\quad
a_{\text{cyl}}=\tfrac23(10)(0.5)=3.3,\quad
a_{\text{sph}}=\tfrac57(10)(0.5)\approx3.6\ \text{m/s}^2.
$$

Order: **sphere first, cylinder second, ring last**; all beat nothing — a frictionless block ($a=5\ \text{m/s}^2$) would still outrun them.

Cylinder's time:

$$
t=\sqrt{\frac{2s}{a}}=\sqrt{\frac{2(3.0)}{3.33}}=\sqrt{1.8}=1.34\ \text{s}.
$$

Mass and radius never entered the ranking — the shape factor is the whole story.
</details>

### 8. Bullet meets a hanging rod

A rod of mass $2.0\ \text{kg}$ and length $1.0\ \text{m}$ hangs vertically from a frictionless pivot at its top. A $20\ \text{g}$ blob of putty moving horizontally at $200\ \text{m/s}$ strikes the rod's lower end and sticks. Find the angular speed just after the impact.

<details><summary>Answer and reasoning</summary>

During the brief impact the pivot exerts an unknown impulse — *through* the pivot, hence zero torque about it. Conserve angular momentum about the pivot:

$$
mvL=\left(\frac{ML^2}{3}+mL^2\right)\omega_f,
$$

$$(0.020)(200)(1.0)=\left(\frac{(2.0)(1.0^2)}{3}+(0.020)(1.0^2)\right)\omega_f
\quad\Rightarrow\quad
4.0=0.6867\,\omega_f,
$$

$$
\omega_f\approx5.8\ \text{rad/s}.
$$

The computed post-impact energy, $\tfrac12(0.6867)(5.8^2)\approx11.6\ \text{J}$, is far below the putty's initial $400\ \text{J}$: a perfectly inelastic rotational collision, with most of the energy lost to heat and deformation near the stuck blob.
</details>

### 9. Who holds up the plank?

A uniform $20\ \text{kg}$ plank of length $2.4\ \text{m}$ rests on two supports at its ends. A $60\ \text{kg}$ person stands $0.80\ \text{m}$ from the left end. Find each support force.

<details><summary>Answer and reasoning</summary>

Forces: two unknown supports $R_L$ and $R_R$ up, plank weight $200\ \text{N}$ down at $1.2\ \text{m}$, person $600\ \text{N}$ down at $0.80\ \text{m}$.

Torque about the left support:

$$
R_R(2.4)=200(1.2)+600(0.8)=240+480=720
\quad\Rightarrow\quad
R_R=300\ \text{N}.
$$

Vertical balance:

$$
R_L=800-300=500\ \text{N}.
$$

Torque about the right support confirms: $R_L(2.4)=200(1.2)+600(1.6)=240+960=1200\Rightarrow R_L=500\ \text{N}$. ✓ The person stands left of centre, so the left support — and not merely the near person-side calculation — carries the majority: $500\ \text{N}$ against $300\ \text{N}$.
</details>

### 10. Explain, don't just calculate

A ball rolls without slipping across level ground at constant velocity. What is the static friction force acting on it, and what does that imply about the energy bookkeeping?

<details><summary>Answer and reasoning</summary>

**Zero.** With no external horizontal force, gravity and the normal act along the vertical, so nothing tends to make the contact point slide; with no slipping tendency, static friction (whatever limit $\mu_sN$ allows) simply does not engage. Consequently no friction work is done, no torque acts, and both $v_{cm}$ and $\omega$ persist unchanged. A rolling wheel on ideal level ground keeps rolling "for free" in the horizontal bookkeeping — the *only* energy accounting is the gradual share going to real rolling resistance in the deforming surfaces, which this idealisation excludes.
</details>

## Self-check

You are ready to leave this chapter for gravitation when you can:

- compute a centre of mass for point masses, composites and bodies with holes, and state what an external force does to its motion;
- find the torque of any force about a pivot you name, including the lever-arm argument;
- quote $I$ for a rod, ring, disc, hollow and solid sphere, and repair any other axis with the parallel (or perpendicular) axis theorem;
- convert a torque into $\alpha$, spin-up times and stored energy, including a pulley whose mass matters;
- derive and apply $a=\dfrac{g\sin\theta}{1+I/MR^2}$, state friction's direction and the minimum $\mu_s$, and predict race results from shape alone;
- explain why the skater speeds up but the coupled disc pair slows — with energy identified in both cases;
- solve a hinged beam and a leaning ladder completely, naming every hinge component;
- look at any rotational question and say, before solving, which single tool it is really testing.

If any bullet still feels shaky, return to that lesson, redo its questions on fresh paper, then come back here — and afterward sit the chapter's 50-minute timed JEE Main set to test the tools under real pressure.
