## Translating the familiar laws

Everything you know about a block sliding on a table has a rotation twin: $\vec F\to\vec\tau$, $m\to I$, $\vec v\to\vec\omega$, $\vec p\to\vec L$. The equations are *identical in form* — only the actors change. This module writes out that dictionary, uses it on the standard pulley-with-mass problem, and adds the energy bookkeeping that makes many rotational problems a one-line calculation.

## 1. The rotational kinetic energy

A spinning body is a crowd of particles in circular motion. Each particle of mass $m_i$ at radius $r_i$ moves with speed $v_i=\omega r_i$ — a shared property of rigid rotation. Its kinetic energy is $\tfrac12 m_i v_i^2=\tfrac12 m_i r_i^2\omega^2$, and the sum factorises:

$$
K_{rot}=\sum \tfrac12 m_i r_i^2\,\omega^2=\tfrac12 I\omega^2.
$$

This is exactly $\tfrac12mv^2$ with $v$ exchanged for $\omega$ and $m$ for $I$. Because $\omega$ is common to every particle while $v$ is not, $I$ — not $M$ — is the correct measure of "how much motion the body is storing". A solid sphere and a hollow sphere of the same mass spinning at the same rate store different energies precisely because their $I$ values differ.

## 2. Work and power in rotation

Push a door tangentially and the force's point of application moves; work is done. For a steady torque $\tau$ acting while the body turns through an angle $\theta$,

$$
W=\tau\,\theta,\qquad P=\tau\,\omega .
$$

These are the twins of $W=Fd$ and $P=Fv$, and they need the torque in newton-metres and the angle in *radians*. A motor grinding at $100\ \text{W}$ while its shaft turns at $20\ \text{rad/s}$ delivers a torque of $P/\omega=5.0\ \text{N·m}$.

Just as net force work changes translational kinetic energy, net torque work changes rotational kinetic energy:

$$
W_{net}=\tau_{net}\,\theta=\Delta\left(\tfrac12I\omega^2\right).
$$

## 3. The dynamics dictionary

| Translation | Rotation | Notes |
| --- | --- | --- |
| $\vec F=m\vec a$ | $\vec\tau=I\vec\alpha$ | Newton's second law, each form |
| $\vec p=m\vec v$ | $\vec L=I\vec\omega$ | momentum and its twin |
| $\vec F=d\vec p/dt$ | $\vec\tau=d\vec L/dt$ | the general form, always true |
| $K=\tfrac12mv^2$ | $K=\tfrac12I\omega^2$ | energy |
| $W=Fd$, $P=Fv$ | $W=\tau\theta$, $P=\tau\omega$ | transfer of energy |
| impulse $J=\int F\,dt=\Delta p$ | $\int\tau\,dt=\Delta L$ | torque impulse |

One caution governs the whole table: in $\tau=I\alpha$, the torque and the moment of inertia must both be taken **about the same axis**, and that axis must either be fixed in an inertial frame or pass through the centre of mass. Mixing axes gives confident nonsense.

### Angular coordinates go through the same kinematics

Constant-$\alpha$ problems use the constant-acceleration equations of straight-line kinematics (from the Motion in a Straight Line chapter), word for word:

$$
\omega=\omega_0+\alpha t,\qquad \theta=\omega_0 t+\tfrac12\alpha t^2,\qquad \omega^2=\omega_0^2+2\alpha\theta,
$$

with every angle in radians. The bridge to linear motion is $v=\omega r$ along the circular arc and $a_t=\alpha r$ tangentially.

<learning-block type="mistake" title="τ = Iα about the wrong point">

$\tau=I\alpha$ is licensed for (a) an axis fixed in an inertial frame, or (b) an axis through the centre of mass — even if the centre of mass accelerates. It is *not* licensed for an axis that is neither. If in doubt, write two equations: $M a_{cm}=\sum\vec F_{ext}$ for the translation (Module 1) and $\tau_{cm}=I_{cm}\alpha$ for the spin about the centre of mass. That pair solves almost every rolling and tipping problem.

</learning-block>

## 4. Worked example: a pulley you cannot ignore

A $1\ \text{kg}$ block rests on a frictionless table, connected by a light string over a pulley to a $2\ \text{kg}$ hanging block. The pulley is a uniform disc of mass $M=2\ \text{kg}$ and radius $R=0.20\ \text{m}$; the string does not slip on it, and friction at the axle is negligible. Take $g=10\ \text{m/s}^2$.

Treat the three bodies separately. The string's tension differs on the two sides of the pulley — otherwise the pulley would feel no torque and would not accelerate.

**Hanging block** ($m_2=2\ \text{kg}$, downward acceleration $a$):

$$
m_2g-T_1=m_2a.
$$

**Table block** ($m_1=1\ \text{kg}$, pulled by the other strand):

$$
T_2=m_1a.
$$

**Pulley** (disc, $I=\tfrac12MR^2=0.04\ \text{kg·m}^2$, and $\alpha=a/R$ because the string does not slip):

$$
(T_1-T_2)R=I\alpha=I\frac{a}{R}.
$$

Substituting for $T_1$ and $T_2$: $\;m_2g=(m_2+M/2+m_1)\,a$, so

$$
a=\frac{m_2g}{m_1+m_2+M/2}=\frac{20}{1+2+1}=5.0\ \text{m/s}^2.
$$

The tensions follow: $T_2=(1)(5.0)=5.0\ \text{N}$ and $T_1=m_2(g-a)=(2)(5.0)=10\ \text{N}$. They differ by $5.0\ \text{N}$, × radius $0.20\ \text{m}$ = $1.0\ \text{N·m}$ of net torque, giving $\alpha=1.0/0.04=25\ \text{rad/s}^2$, and indeed $\alpha R=(25)(0.20)=5.0\ \text{m/s}^2$. ✓

**The energy cross-check.** When the hanging block has fallen $h=0.40\ \text{m}$, kinematics gives $v^2=2ah=4.0\ \text{m}^2/\text{s}^2$, $v=2.0\ \text{m/s}$. Energy says: gravity releases $m_2gh=(2)(10)(0.40)=8.0\ \text{J}$, and the inventory is

$$
\underbrace{\tfrac12(1)(2.0^2)}_{2.0\ \text{J}}+\underbrace{\tfrac12(2)(2.0^2)}_{4.0\ \text{J}}+\underbrace{\tfrac12(0.04)\left(\tfrac{2.0}{0.20}\right)^2}_{2.0\ \text{J}}=8.0\ \text{J}. \checkmark
$$

Note the dividing rule from Newton's solution: the pulley behaves, in the acceleration formula, exactly like an extra mass $M/2$ — a shortcut worth memorising for disc-shaped pulleys.

## 5. Bodies that roll: translation *and* rotation together

An extended body may spin about its own centre of mass while that centre translates. The total kinetic energy splits cleanly (this is where the $\tau_{cm}=I_{cm}\alpha$ licence earns its keep):

$$
K=\tfrac12Mv_{cm}^2+\tfrac12I_{cm}\omega^2.
$$

Apply this to any body, relate $v_{cm}$ to $\omega$ as the problem dictates, and Newton or energy will finish the job — the rolling wheel, which obeys the special condition $v_{cm}=\omega R$, is exactly the case the next module dissects.

## Try it yourself

**Q1.** A flywheel of $I=4.0\ \text{kg·m}^2$ spins at $30\ \text{rad/s}$. A brake applies a steady opposing torque of $12\ \text{N·m}$. How long until it stops, and through how many radians does it turn?

<details><summary>Show the reasoning</summary>

$$
\alpha=\frac{\tau}{I}=\frac{12}{4.0}=3.0\ \text{rad/s}^2\ \text{(decelerating)},\qquad
t=\frac{\omega_0}{\alpha}=\frac{30}{3.0}=10\ \text{s}.
$$

Angle while stopping: $\theta=\tfrac12\omega_0 t=\tfrac12(30)(10)=150\ \text{rad}\approx24$ revolutions. The brake's work removes all $K_{rot}=\tfrac12(4.0)(900)=1800\ \text{J}$ as heat — the check $W=\tau\theta=(12)(150)=1800\ \text{J}$ closes the books.
</details>

**Q2.** A motor delivers $120\ \text{W}$ to a shaft turning at a steady $40\ \text{rad/s}$. What torque does it exert, and how much work in $5.0\ \text{s}$?

<details><summary>Show the reasoning</summary>

$$
\tau=\frac{P}{\omega}=\frac{120}{40}=3.0\ \text{N·m},\qquad W=P\,t=120\times5.0=600\ \text{J}.
$$

At steady speed there is no gain in kinetic energy, so that $600\ \text{J}$ leaves the motor and goes wherever the load sends it — lifting, friction, or material deformation.
</details>

**Q3.** In the worked pulley example, replace the disc pulley by a light pulley of negligible mass. How does the acceleration change, and why?

<details><summary>Show the reasoning</summary>

Remove $M/2$ from the denominator:

$$
a=\frac{m_2g}{m_1+m_2}=\frac{20}{3}\approx6.7\ \text{m/s}^2\ \ (>5.0\ \text{m/s}^2).
$$

With no rotational inertia to accelerate, no torque difference is needed, so $T_1=T_2$ and all of gravity's pull goes into linear acceleration. Part of the drive force was always spent spinning the real pulley — that is the whole meaning of the $M/2$ term.
</details>

## Remember

- A spinning body stores $K=\tfrac12I\omega^2$; steady torque acting through angle $\theta$ does work $W=\tau\theta$; power flows at $P=\tau\omega$.
- The translation↔rotation dictionary ($F\!\leftrightarrow\!\tau$, $m\!\leftrightarrow\!I$, $v\!\leftrightarrow\!\omega$, $p\!\leftrightarrow\!L$) turns standard linear results into rotational ones.
- Constant-$\alpha$ kinematics is constant-$a$ kinematics with radians.
- For a disc pulley with non-slipping string, the acceleration is $m_2g/(m_1+m_2+M/2)$: the pulley acts like half its own mass added to the load.
- When a body both translates and spins, $K=\tfrac12Mv_{cm}^2+\tfrac12I_{cm}\omega^2$ — the skeleton of rolling, taken up next.
