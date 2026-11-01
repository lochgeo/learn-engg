## JEE Main sprint: how to use this set

This is a **50-minute, no-notes** practice set for after you complete the chapter lessons. Use $g=10\ \text{m/s}^2$ unless a question gives another value. Spend roughly 15 minutes on Section A, 20 on Section B, 10 on Section C, and 5 on Section D. Mark a question for review after 90 seconds; do not let one calculation consume the paper.

The goal is not only an answer. Before writing an equation, name the system and choose the tool: net work, energy, radial force, momentum, or components of momentum.

## Conditions sheet

| Situation | Start with | Check before using it |
| --- | --- | --- |
| A force acts through a displacement | $W=\vec F\cdot\Delta\vec r$ or $\int\vec F\cdot d\vec r$ | Use the component along the displacement; retain the sign. |
| Speed changes | $W_{net}=\Delta K$ | Include work by **every** force. |
| Gravity/spring, no dissipative work | $K_i+U_i=K_f+U_f$ | The selected system includes the relevant interaction. |
| Friction or a push transfers energy | $\Delta K+\Delta U=W_{nc}$ | Friction is usually negative work on the mechanical system. |
| A rate is asked for | $P=\Delta E/\Delta t$ or $P=\vec F\cdot\vec v$ | Force and velocity need not be parallel. |
| A vertical circle | Energy **plus** $\sum F_r=mv^2/r$ | At the limiting top point for a string, $T=0$. |
| A brief collision | $\sum\vec p_i=\sum\vec p_f$ | External impulse must be negligible; conserve $K$ only if $e=1$; otherwise use $e=(v_2-v_1)/(u_1-u_2)$. |

<learning-block type="mistake" title="The fastest sanity checks">

If your answer gives $K<0$, a negative tension for a string, or kinetic-energy conservation in a sticking collision, stop and revisit the setup. A numerical answer with the right unit can still come from the wrong conservation law.

</learning-block>

## Section A — 10 rapid MCQs

### 1. Force at an angle

A $20\ \text{N}$ force pulls a box $3\ \text{m}$ at $60^\circ$ to its horizontal displacement. The work done by the force is:

- A. $0\ \text{J}$
- B. $30\ \text{J}$
- C. $60\ \text{J}$
- D. $120\ \text{J}$

<details><summary>Answer</summary>

**B.** $W=Fs\cos60^\circ=20\times3\times\frac12=30\ \text{J}$.
</details>

### 2. Variable force

Along the $x$-axis, $F_x=4x$ newtons. The work from $x=0$ to $x=2\ \text{m}$ is:

- A. $4\ \text{J}$
- B. $8\ \text{J}$
- C. $16\ \text{J}$
- D. $32\ \text{J}$

<details><summary>Answer</summary>

**B.** $W=\int_0^2 4x\,dx=[2x^2]_0^2=8\ \text{J}$.
</details>

### 3. Net work

The net work done on a particle is zero. Which must be true?

- A. Its velocity is zero.
- B. Its acceleration is zero at every instant.
- C. Its speed is the same at the start and end.
- D. No force acts on it.

<details><summary>Answer</summary>

**C.** $W_{net}=\Delta K=0$ fixes the initial and final speeds, not necessarily the direction of velocity or the force at each instant.
</details>

### 4. Potential-energy curve

In one dimension, a conservative force has $U(x)=ax^2$, where $a>0$. At $x>0$, the force points:

- A. in $+x$
- B. in $-x$
- C. perpendicular to $x$
- D. nowhere; it is zero

<details><summary>Answer</summary>

**B.** $F_x=-dU/dx=-2ax$, which is negative for $x>0$.
</details>

### 5. Spring energy

A spring’s compression is doubled. Its stored energy becomes:

- A. half
- B. double
- C. four times
- D. unchanged

<details><summary>Answer</summary>

**C.** $U_s=\frac12kx^2$, so $U_s\propto x^2$.
</details>

### 6. Instantaneous power

A force is perpendicular to an object’s velocity. The instantaneous power delivered by that force is:

- A. positive
- B. negative
- C. zero
- D. impossible to determine

<details><summary>Answer</summary>

**C.** $P=\vec F\cdot\vec v=0$. The force may change direction of motion without changing speed.
</details>

### 7. Friction and mechanical energy

For a block–Earth system, kinetic friction does $-12\ \text{J}$ of work. The system’s mechanical energy changes by:

- A. $+12\ \text{J}$
- B. $-12\ \text{J}$
- C. $0$
- D. cannot be related to friction work

<details><summary>Answer</summary>

**B.** $\Delta(K+U)=W_{nc}=-12\ \text{J}$. Total energy is not destroyed; mechanical energy is transferred to thermal energy.
</details>

### 8. Minimum loop condition

A mass on a string just completes a vertical circle. At the top, the string tension is:

- A. $mg$
- B. $2mg$
- C. $0$
- D. $mv^2/r$

<details><summary>Answer</summary>

**C.** The limiting condition is $T=0$, so gravity alone supplies the centripetal force.
</details>

### 9. Collision rule

In a perfectly inelastic collision of an isolated two-body system, which is conserved?

- A. kinetic energy only
- B. momentum only
- C. both momentum and kinetic energy
- D. neither momentum nor energy in any form

<details><summary>Answer</summary>

**B.** Momentum is conserved. Kinetic energy decreases, while total energy remains conserved when internal energy and deformation are included.
</details>

### 10. Equal-mass elastic collision

Two equal masses collide elastically in two dimensions; one was initially at rest. Their final velocity vectors are:

- A. always parallel
- B. always antiparallel
- C. perpendicular, apart from the head-on limiting case
- D. equal in magnitude in every case

<details><summary>Answer</summary>

**C.** Momentum and kinetic-energy conservation give $\vec v_{1f}\cdot\vec v_{2f}=0$.
</details>

## Section B — 10 numerical questions

### 11. Signed area

An $F_x$–$x$ graph is a triangle above the axis, from $x=0$ to $4\ \text{m}$, with peak force $10\ \text{N}$. Find the work.

<details><summary>Answer</summary>

$W=\frac12(4)(10)=20\ \text{J}$.
</details>

### 12. Work–energy with two forces

A $2\ \text{kg}$ block starts from rest on a level surface. A pull does $30\ \text{J}$ of work and friction does $-12\ \text{J}$. Find its final speed.

<details><summary>Answer</summary>

$W_{net}=18\ \text{J}=\frac12(2)v^2$, so $v=\sqrt{18}=4.24\ \text{m/s}$.
</details>

### 13. Rough incline

A $1\ \text{kg}$ block slides from rest down a track with vertical drop $3\ \text{m}$. Friction does $-6\ \text{J}$ of work. Find its speed at the bottom.

<details><summary>Answer</summary>

$K_f=mgh+W_f=30-6=24\ \text{J}$, so $v=\sqrt{48}=6.93\ \text{m/s}$.
</details>

### 14. Spring launch

A $0.50\ \text{kg}$ block is launched on a frictionless horizontal surface by a spring with $k=200\ \text{N/m}$ compressed $0.10\ \text{m}$. Find the launch speed.

<details><summary>Answer</summary>

$\frac12kx^2=1\ \text{J}=\frac12mv^2$, so $v=2.0\ \text{m/s}$.
</details>

### 15. Constant power

A $600\ \text{W}$ motor lifts a $20\ \text{kg}$ load at constant speed. Find the speed.

<details><summary>Answer</summary>

$P=mgv$, so $v=600/(20\times10)=3.0\ \text{m/s}$.
</details>

### 16. Vertical circle

A $0.50\ \text{kg}$ mass moves in a vertical circle of radius $2\ \text{m}$. At the top its speed is $8\ \text{m/s}$. Find the string tension there.

<details><summary>Answer</summary>

At the top, $T+mg=mv^2/r$. Thus $T=0.50(64/2)-5=11\ \text{N}$.
</details>

### 17. Height from loop speed

A bead starts from rest at height $h$ above the bottom of a frictionless loop of radius $R$. Find the minimum $h$ for it to just maintain contact at the top.

<details><summary>Answer</summary>

At the top, $v_t^2=gR$. Energy from height $h$ to height $2R$ gives $mgh=mg(2R)+\frac12m(gR)$, so $h=\frac52R$.
</details>

### 18. Completely inelastic collision

A $1\ \text{kg}$ cart moving at $6\ \text{m/s}$ sticks to a stationary $2\ \text{kg}$ cart. Find their common final velocity and the kinetic-energy decrease.

<details><summary>Answer</summary>

$v_f=6/3=2\ \text{m/s}$. $K_i=18\ \text{J}$ and $K_f=\frac12(3)(2^2)=6\ \text{J}$, so the decrease is $12\ \text{J}$.
</details>

### 19. One-dimensional elastic collision

A $2\ \text{kg}$ cart moving at $3\ \text{m/s}$ collides elastically head-on with a stationary $1\ \text{kg}$ cart. Find the final velocity of the $1\ \text{kg}$ cart.

<details><summary>Answer</summary>

$v_2=\frac{2m_1}{m_1+m_2}u_1=\frac{4}{3}(3)=4\ \text{m/s}$ in the original direction.
</details>

### 20. Energy curve

A particle has total mechanical energy $12\ \text{J}$ and potential energy $U=3\ \text{J}$ at a point. Find its speed there if its mass is $1\ \text{kg}$.

<details><summary>Answer</summary>

$K=E-U=9\ \text{J}=\frac12v^2$, so $v=\sqrt{18}=4.24\ \text{m/s}$.
</details>

## Section C — 5 mixed-method questions

### 21. Choose before calculating

A block slides down a rough track and compresses a spring. Which is the most direct single equation for the whole trip?

<details><summary>Answer</summary>

Use $\Delta K+\Delta U_g+\Delta U_s=W_{friction}$. This puts gravity and spring energy inside the system and accounts for the mechanical energy transferred by friction.
</details>

### 22. Tension: does it do work?

A bob swings on a taut, fixed-length string. Does tension do work on the bob during the swing? Does tension necessarily vanish from the radial force equation?

<details><summary>Answer</summary>

Tension does zero work because it is perpendicular to the instantaneous displacement. It is still essential radially: $\sum F_r=mv^2/r$ determines the tension required to maintain the circular path.
</details>

### 23. Constant power, changing force

A motor supplies constant power $P$ to a vehicle on a level frictionless track. Express the driving force in terms of speed $v$, and state what happens as $v$ rises.

<details><summary>Answer</summary>

$P=Fv$, hence $F=P/v$. As speed rises, the force decreases; the acceleration $a=P/(mv)$ also decreases. The expression is not meaningful at exactly $v=0$—a real motor cannot maintain finite power at zero speed in this idealised model.
</details>

### 24. Two-dimensional momentum

An object initially has momentum $p\hat i$. After an explosion it becomes two equal-mass pieces. One has momentum $\frac p2\hat i+\frac p3\hat j$. Find the other piece’s momentum.

<details><summary>Answer</summary>

Conserve vector momentum: $\vec p_2=p\hat i-(\frac p2\hat i+\frac p3\hat j)=\frac p2\hat i-\frac p3\hat j$.
</details>

### 25. Final exam check

A calculation for a collision uses momentum conservation and produces a final kinetic energy larger than the initial kinetic energy. What extra fact would you need before calling the answer wrong?

<details><summary>Answer</summary>

You need to know whether an internal energy source acted. A firework or explosion can raise kinetic energy while conserving momentum. For an ordinary passive collision with no released stored energy, a kinetic-energy increase would signal an error.
</details>

## Section D — 2 full-length numericals

### 26. Partly inelastic collision

A $3\ \text{kg}$ cart moving at $4\ \text{m/s}$ collides head-on with a stationary $1\ \text{kg}$ cart. The coefficient of restitution is $e=0.50$. Find the final velocity of each cart and the kinetic energy lost in the collision. Take the original direction of motion as positive.

<details><summary>Answer</summary>

Momentum conservation gives $3v_1+v_2=12$.

The restitution relation gives $v_2-v_1=e(u_1-u_2)=0.50(4)=2$.

Substituting $v_2=v_1+2$ into the momentum equation: $3v_1+v_1+2=12$, so $v_1=2.5\ \text{m/s}$ and $v_2=4.5\ \text{m/s}$. Both carts move in the original direction; the heavier one is slowed and the lighter one is struck forward.

$K_i=\frac12(3)(4^2)=24\ \text{J}$ and $K_f=\frac12(3)(2.5^2)+\frac12(1)(4.5^2)=9.375+10.125=19.5\ \text{J}$.

The kinetic energy lost is $4.5\ \text{J}$. A useful check is $e=0.5<1$, so kinetic energy **must** fall, and the loss is stored as deformation, sound and thermal energy.
</details>

### 27. Reading a potential-energy curve

A $1\ \text{kg}$ particle moves along the $x$-axis under a conservative force with potential energy

$$
U(x)=x^2-6x+5\ \text{J},
$$

where $x$ is in metres.

1. Find the equilibrium position and decide whether it is stable or unstable.
2. The particle has total mechanical energy $E=0\ \text{J}$. Find its turning points.
3. Find the maximum kinetic energy and the maximum speed.

<details><summary>Answer</summary>

**1.** Equilibrium requires $F_x=-dU/dx=0$:

$$
-\frac{dU}{dx}=-(2x-6)=0 \quad\Rightarrow\quad x=3\ \text{m}.
$$

Since $d^2U/dx^2=2>0$, the curve is concave upward: $x=3\ \text{m}$ is a **stable** equilibrium, a potential-energy minimum.

**2.** At a turning point $K=0$, so $U(x)=E=0$:

$$
x^2-6x+5=0 \quad\Rightarrow\quad (x-1)(x-5)=0,
$$

giving $x=1\ \text{m}$ and $x=5\ \text{m}$. The motion is trapped between them.

**3.** Kinetic energy is largest where $U$ is smallest, at the equilibrium point:

$$
U(3)=9-18+5=-4\ \text{J}, \qquad K_{\max}=E-U_{\min}=0-(-4)=4\ \text{J}.
$$

For $1\ \text{kg}$, $\frac12(1)v_{\max}^2=4$, so $v_{\max}=\sqrt{8}=2.83\ \text{m/s}$.

The sign of $F_x=6-2x$ is a quick sanity check: for $x<3$ the force is toward $+x$, and for $x>3$ it is toward $-x$, so the particle is always pushed back toward $x=3\ \text{m}$.
</details>

## Review by error, not by score

| If you missed… | Revisit | Then retry |
| --- | --- | --- |
| 1–3 or 11–12 | Work: force through displacement | Identify signs and the force component before calculating. |
| 4–5, 13–14, 20–21 or 27 | Potential energy & conservation | Draw initial/final energy states and define the system. |
| 6 or 15 | Power, rate & efficiency | Write the dot product before simplifying to $Fv$. |
| 8, 16–17 or 22 | Motion in a vertical circle | Separate the energy equation from the radial-force equation. |
| 9–10, 18–19, 24–26 | Collisions | State whether momentum, kinetic energy, or both are conserved—and why. |

<learning-block type="recap" title="Ready for a timed set?">

Aim for at least 22 correct out of 27 with a written method choice for every question. Questions you solve correctly but cannot justify are revision targets, not mastered topics.

</learning-block>
