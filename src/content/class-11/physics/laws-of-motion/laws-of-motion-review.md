## Your study plan for today

The chapter is one cloth woven from seven threads: the laws, the diagram, friction, connections, circles, frames, and momentum. A focused pass takes about **2 hours 55 minutes** plus a break:

1. **Newton's laws and inertia** — 20 min
2. **Free-body diagrams and equilibrium** — 22 min
3. **Friction** — 22 min
4. **Connected bodies, pulleys and constraints** — 24 min
5. **Dynamics of circular motion** — 22 min
6. **Non-inertial frames and pseudo forces** — 18 min
7. **Impulse and momentum** — 20 min
8. **This mastery check** — 25 min

After each module, close the text and rebuild its key result from a blank page — the Atwood acceleration, the repose condition, the banked-road design speed. Being able to *derive*, not recall, is what the timed sets test.

When the tools are secure, take the optional **JEE Main timed practice** module: a 50-minute no-notes paper on exactly this chapter.

## First choose the system, then the tool

The chapter's most transferable skill is *bookkeeping*: choosing what counts as your system, and what counts as internal to it. Before any formula, answer two questions — *whose* forces am I drawing, and *can* this force act between two parts of my chosen system?

| Clue in the question | Start with |
| --- | --- |
| Body at rest, several angled supports | Equilibrium: $\sum F_x = 0$, $\sum F_y = 0$, resolved |
| Applied force on a resting body | Compare the demand with $\mu_s N$; friction equals the demand below the limit |
| Incline angle given | Compare $\tan\theta$ with $\mu$; sliding if $\tan\theta > \mu$ |
| Bodies joined by a string over a pulley | One FBD-equation per body **plus** the constraint $a_A = a_B$ |
| Two masses hanging over a pulley | Atwood: $a = \frac{m_2-m_1}{m_2+m_1}g$, $T = \frac{2m_1m_2}{m_1+m_2}g$ |
| "Maximum safe speed", banked or level turn | Radial equation with one force driven to zero: $v = \sqrt{\mu rg}$ or $\tan\theta = v^2/rg$ |
| Motion described relative to a lift, truck or turntable | Non-inertial frame: add $\vec F_{\text{pseudo}} = -m\vec a_{\text{frame}}$ to every mass |
| Force known as a function of time; speed change wanted | Impulse–momentum: area under the $F$–$t$ graph equals $\Delta p$ |
| Brief collision, push-apart, recoil | Momentum conservation — after checking external impulses are negligible |

## Mastery check

Attempt each question on paper before opening the answer. Use $g = 10\ \text{m/s}^2$ unless stated otherwise.

### 1. Two wires, one picture

A $12\ \text{kg}$ picture hangs from two wires, each at $40^\circ$ to the vertical, symmetrically. Find the tension in each.

<details><summary>Answer and reasoning</summary>

Weight: $120\ \text{N}$ down. By symmetry the horizontal components cancel, leaving $2T\cos 40^\circ = 120$, so

$$T = \frac{120}{2 \times 0.766} \approx 78.3\ \text{N}.$$

The tension exceeds the vertical share ($60\ \text{N}$ each) precisely because the wires are slanted — a flatter wire must pull harder to contribute its vertical $T\cos\theta$.
</details>

### 2. Demand versus supply

A $8\ \text{kg}$ crate on a level floor is pushed with a horizontal $15\ \text{N}$ and does not move. Find the friction force and the least possible $\mu_s$.

<details><summary>Answer and reasoning</summary>

No sliding, so static friction matches the demand exactly: $f_s = 15\ \text{N}$ horizontally backwards. The limit is $\mu_s N = \mu_s \times 80$, so contact persists only if $\mu_s \ge 15/80 = 0.19$ (to two significant figures). Note the logic: static friction is set by the *demand* unless the demand exceeds the *supply*.
</details>

### 3. The slide test on a slope

A block sits on an incline at $25^\circ$. The coefficients are $\mu_s = 0.40$ and $\mu_k = 0.30$. Does it slide? If so, find its acceleration.

<details><summary>Answer and reasoning</summary>

Repose test: $\tan 25^\circ \approx 0.466 > \mu_s = 0.40$, so static friction cannot hold and the block slides. Once sliding:

$$a = g(\sin\theta - \mu_k\cos\theta) = 10(0.423 - 0.30 \times 0.906) \approx 10(0.423 - 0.272) = 1.5\ \text{m/s}^2.$$

Positive, so the numbers describe a genuine slide. Had $\tan\theta < \mu_s$, the correct answer would be $a = 0$ — the block simply stays.
</details>

### 4. Table block and hanging block, with friction

A $4\ \text{kg}$ block on a horizontal table ($\mu_k = 0.2$) is connected over a light frictionless pulley to a hanging $1\ \text{kg}$ block. Find $a$ and the string tension, using the whole-system shortcut once and then verifying per body.

<details><summary>Answer and reasoning</summary>

*Whole system:* external horizontal forces are the hanging weight $10\ \text{N}$ (driving) and friction $\mu_k m_1 g = 0.2 \times 40 = 8\ \text{N}$ (resisting); the tension is internal. So

$$a = \frac{10 - 8}{4+1} = 0.4\ \text{m/s}^2.$$

*Per body, for the tension:* table block: $T - 8 = 4 \times 0.4$, giving $T = 9.6\ \text{N}$. *Check* on the hanging block: $10 - 9.6 = 0.4\ \text{N} = 1 \times 0.4$ ✓. The tension sits between the driving (10 N) and resistive views, as it should for a genuinely internal force.
</details>

### 5. Atwood limits

Masses of $1\ \text{kg}$ and $4\ \text{kg}$ hang over a massless frictionless pulley. Find both accelerations and the tension.

<details><summary>Answer and reasoning</summary>

$$a = \frac{m_2-m_1}{m_2+m_1}g = \frac{3}{5}\times 10 = 6\ \text{m/s}^2,$$

with the $4\ \text{kg}$ mass descending. Tension from the rising $1\ \text{kg}$ mass: $T - 10 = 1 \times 6 \Rightarrow T = 16\ \text{N}$. Check on the descending mass: $40 - 16 = 24\ \text{N} = 4 \times 6$ ✓. $T = 16\ \text{N}$ lies between the two weights, as every Atwood tension must. Angled accelerations: *equal magnitudes, opposite directions*.
</details>

### 6. Grip limit on a flat bend

What is the maximum speed for a car on a level circular bend of radius $40\ \text{m}$ when $\mu_s = 0.8$? Express in m/s and km/h.

<details><summary>Answer and reasoning</summary>

$$v_{\max} = \sqrt{\mu_s r g} = \sqrt{0.8 \times 40 \times 10} = \sqrt{320} \approx 17.9\ \text{m/s} \approx 64\ \text{km/h}.$$

Mass does not appear: heavier cars need proportionally more centripetal force but also generate proportionally more friction. Sliding is triggered when the *required* inward force $mv^2/r$ exceeds the *available* $\mu_s mg$.
</details>

### 7. Designing a frictionless bend

A curve of radius $50\ \text{m}$ is banked at $30^\circ$. At what speed would a car take it with zero sideways friction?

<details><summary>Answer and reasoning</summary>

Design-speed condition: $\tan\theta = v^2/(rg)$, so

$$v = \sqrt{rg\tan\theta} = \sqrt{50 \times 10 \times 0.577} = \sqrt{288.7} \approx 17.0\ \text{m/s} \approx 61\ \text{km/h}.$$

Below this speed friction must point *up* the bank to stop the car sliding down; above it, friction points *down* the bank. Zero friction occurs only at exactly the design speed.
</details>

### 8. Decelerating lift

A $70\ \text{kg}$ passenger stands on scales in a lift moving upward at $6\ \text{m/s}$ when the lift begins to decelerate at $3\ \text{m/s}^2$ (to stop at an upper floor). What does the scale read during the deceleration?

<details><summary>Answer and reasoning</summary>

Moving up while slowing means the acceleration is *downward* ($a = 3\ \text{m/s}^2$ down). Apparent weight: $N = m(g - a) = 70 \times 7 = 490\ \text{N}$ (the scale would show about $49\ \text{kg}$). Beware the trap of following the *velocity* rather than the *acceleration*: the velocity direction is irrelevant; only acceleration enters the force balance.
</details>

### 9. Impulse from a bat

A $0.15\ \text{kg}$ cricket ball arrives horizontally at $20\ \text{m/s}$ and leaves the bat horizontally at $30\ \text{m/s}$ in the opposite direction. Contact lasts $8\ \text{ms}$. Find the impulse and the average force.

<details><summary>Answer and reasoning</summary>

Take the outgoing direction as positive:

$$\Delta p = (0.15)(+30) - (0.15)(-20) = 4.5 + 3.0 = 7.5\ \text{kg·m/s},$$

so the impulse is $7.5\ \text{N·s}$. With contact of $0.008\ \text{s}$:

$$F_{\text{avg}} = \frac{\Delta p}{\Delta t} = \frac{7.5}{0.008} \approx 940\ \text{N}.$$

The reversal is where the impulse hides: a merely-stopped ball would need only $3.0\ \text{N·s}$, less than half.
</details>

### 10. Recoil and the internal-force audit

A rifle of mass $3\ \text{kg}$ fires a $30\ \text{g}$ bullet and recoils at $2\ \text{m/s}$. Find the bullet's speed. Then say precisely which forces are internal to the rifle–bullet system during firing, and why momentum conservation was justified.

<details><summary>Answer and reasoning</summary>

Total momentum starts at zero:

$$0 = (0.030)v + (3)(-2) \quad\Rightarrow\quad v = \frac{6}{0.030} = 200\ \text{m/s}.$$

Internal to the rifle–bullet system: the gases' forward push on the bullet and backward push on the rifle — mutual forces between members of the system, cancelling in the total. External forces (supports, hands, gravity) act too briefly during the kick to deliver appreciable impulse, which is exactly the condition that licenses momentum conservation. Had the rifle been clamped to a rigid mount, the mount's force would be external and large, and the rifle would not recoil — the momentum would flow into the Earth instead.
</details>

## Self-check

You are ready for the timed paper when you can:

- draw an FBD for any single body in a multi-body setup without inventing or omitting forces;
- decide friction's value from the demand, and declare the regime (static or kinetic) before writing $\mu N$;
- derive, not quote, $a = \frac{m_2 \mp m_1}{m_1+m_2}g$ for hanging and sliding connections;
- identify which real force plays centripetal, and set it to zero for "maximum speed" questions;
- state when you are entitled to a pseudo force and what its reaction partner would be (nothing!);
- justify momentum conservation by naming the internal forces and estimating the external impulse;
- check every answer for direction (sign), unit, and plausibility in $\text{km/h}$ or everyday forces.

If any line still wobbles, return to that module and redo its *Try it yourself* questions cold — then sit the JEE Main timed paper.
