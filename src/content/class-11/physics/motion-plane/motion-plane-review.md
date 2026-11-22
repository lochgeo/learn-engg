## Your study plan for today

This chapter taught one core habit — treat every planar motion as vectors analysed in convenient components — through three great applications: relative frames, projectiles, and circles. A focused consolidation pass takes about **2 hours 40 minutes**:

1. **Vectors and displacement** — 20 min
2. **Components, dot/cross products, relative velocity** — 20 min
3. **Projectile on level ground** — 24 min
4. **Projectiles from heights and inclines** — 22 min
5. **Uniform circular motion** — 20 min
6. **Non-uniform circular motion** — 18 min
7. **This mastery check** — 25 min

Rework each module's worked example from a blank page before moving on; then attempt the questions below without notes. Take $g = 10\ \text{m/s}^2$ unless a question says otherwise. Keep the two-frame discipline: every velocity must say *relative to what*.

## First choose the tool

| Clue in the question | Reach for |
| --- | --- |
| Resultant of forces/displacements at an angle | Components: $R_x = \Sigma A_x$, $R_y = \Sigma A_y$ |
| "Perpendicular?" or "angle between?" | Dot product: $\vec A\cdot\vec B = AB\cos\theta$ |
| Motion seen from a moving observer/boat/rain | Relative velocity: $\vec v_{AB} = \vec v_A - \vec v_B$ |
| Launch and landing at the same height | $T = 2u\sin\theta/g$, $R = u^2\sin2\theta/g$ |
| Launch or landing at a **different** height | Solve the vertical quadratic first, then $x = u_x t_f$ |
| Projectile along an incline | Move to the incline frame: $g\sin\beta$, $g\cos\beta$ split |
| Constant speed on a curve | $a_c = v^2/r = \omega^2 r$, radial inward |
| Speed changing on a curve | $a_t = dv/dt = \alpha r$ **plus** $a_c = v^2/r$ (instantaneous $v$) |
| Spin rate given in rpm or periods | Convert: $\omega = 2\pi/T$, $v = \omega r$ |

## Mastery check

### 1. Displacement vs distance

A delivery rider goes $4\ \text{km}$ east, then $3\ \text{km}$ north. Find the distance travelled and the displacement.

<details><summary>Answer and reasoning</summary>

Distance $= 7\ \text{km}$ (path length). Displacement $= \sqrt{4^2+3^2} = 5\ \text{km}$ at $\arctan(3/4) \approx 37^\circ$ north of east. The 3–4–5 triple appears constantly in this chapter — recognise it and skip the arithmetic.
</details>

### 2. Components at a blunt angle

A vector of magnitude $8\ \text{m/s}$ makes $120^\circ$ with the $+x$ axis. Write it in unit-vector form.

<details><summary>Answer and reasoning</summary>

$A_x = 8\cos120^\circ = -4\ \text{m/s}$, $A_y = 8\sin120^\circ = 8(\sqrt3/2) \approx 6.93\ \text{m/s}$, so

$$
\vec A = -4\ \hat i + 6.93\ \hat j\ \ \text{m/s}.
$$

The negative $x$ component is not an error — the vector leans backward over the $+y$ axis. Magnitude check: $\sqrt{16+48} = 8$. Good.
</details>

### 3. Zero-drift crossing

A river is $200\ \text{m}$ wide and flows at $2\ \text{m/s}$. A swimmer manages $4\ \text{m/s}$ in still water and wants to land directly opposite. Find the heading and the crossing time.

<details><summary>Answer and reasoning</summary>

Aim upstream at $\sin\theta = v_r/v_b = 2/4 = 0.5$, so $\theta = 30^\circ$ upstream. Ground speed across $= \sqrt{4^2-2^2} = \sqrt{12} \approx 3.46\ \text{m/s}$, hence $t = 200/3.46 \approx 57.7\ \text{s}$. Check: this exceeds the minimum-time value $200/4 = 50\ \text{s}$, as it must, since part of the swimmer's velocity is spent cancelling the current.
</details>

### 4. Rain on a windscreen

Rain falls vertically at $8\ \text{m/s}$. A cyclist rides horizontally at $6\ \text{m/s}$; the rain appears to her at what speed and angle?

<details><summary>Answer and reasoning</summary>

In the cyclist's frame the rain has a horizontal component $6\ \text{m/s}$ opposing her motion and a vertical component $8\ \text{m/s}$ downward:

$$
v_{\text{apparent}} = \sqrt{6^2+8^2} = 10\ \text{m/s},
\qquad \tan\theta = 6/8 \Rightarrow \theta \approx 37^\circ
$$

from the vertical, coming from ahead. Another 3–4–5 triple in disguise — apparent rain speed is exactly $10\ \text{m/s}$.
</details>

### 5. Level-ground projectile

A ball is thrown at $40\ \text{m/s}$ at $30^\circ$ over level ground. Find $T$, $H$ and $R$.

<details><summary>Answer and reasoning</summary>

$u_x = 40\cos30^\circ = 34.6\ \text{m/s}$, $u_y = 20\ \text{m/s}$.

$$
T = \frac{2(20)}{10} = 4\ \text{s}, \qquad H = \frac{20^2}{20} = 20\ \text{m}, \qquad R = \frac{40^2\sin60^\circ}{10} = 160(0.866) \approx 138.6\ \text{m}.
$$

Check: $R = u_xT = 34.6 \times 4 = 138.6\ \text{m}$. Consistent.
</details>

### 6. Explaining the complementary rule

Without computing ranges, explain why $15^\circ$ and $75^\circ$ launches of the same speed land at the same point.

<details><summary>Answer and reasoning</summary>

$R = u^2\sin2\theta/g$ depends on $2\theta$; since $2(75^\circ) = 150^\circ$ and $\sin150^\circ = \sin(180^\circ-150^\circ) = \sin30^\circ = \sin2(15^\circ)$, the sines match, hence the ranges match. Physically: the steep throw stays longer in the air; the flat one trades hang time for horizontal speed — and the two trade-offs balance exactly for complementary angles.
</details>

### 7. Cliff launch

A stone is launched horizontally at $12\ \text{m/s}$ from a cliff $45\ \text{m}$ high. Where and how fast does it land?

<details><summary>Answer and reasoning</summary>

$t_f = \sqrt{2h/g} = \sqrt{9} = 3\ \text{s}$; $x = u t_f = 36\ \text{m}$ from the base. At impact $v_x = 12\ \text{m/s}$, $v_y = 30\ \text{m/s}$:

$$
v = \sqrt{12^2+30^2} = \sqrt{1044} \approx 32.3\ \text{m/s},
$$

at $\arctan(30/12) \approx 68^\circ$ below the horizontal. Sanity: the vertical impact speed $30\ \text{m/s}$ is the speed any object reaches falling $45\ \text{m}$ ($v = \sqrt{2gh} = \sqrt{900}$).
</details>

### 8. Maximum range design

What launch speed is needed for a maximum possible horizontal range of $90\ \text{m}$ on level ground, and at what angle should it be launched?

<details><summary>Answer and reasoning</summary>

Maximum range means launching at $\theta = 45^\circ$, where $R_{\max} = u^2/g$. So

$$
u^2 = R_{\max}\, g = 900 \Rightarrow u = 30\ \text{m/s}.
$$

Check: at $45^\circ$, $u_x = u_y = 30/\sqrt2 \approx 21.2\ \text{m/s}$, $T = 4.24\ \text{s}$, and $R = 21.2 \times 4.24 = 90\ \text{m}$. Consistent.
</details>

### 9. Uniform circular motion

A car moves at $10\ \text{m/s}$ on a circular track of radius $25\ \text{m}$. Find its centripetal acceleration and its period.

<details><summary>Answer and reasoning</summary>

$$
a_c = \frac{v^2}{r} = \frac{100}{25} = 4\ \text{m/s}^2
\quad \text{towards the centre; } \qquad
T = \frac{2\pi r}{v} = \frac{2\pi(25)}{10} = 5\pi \approx 15.7\ \text{s}.
$$

Check via $\omega$: $\omega = v/r = 10/25 = 0.4\ \text{rad/s}$, and $\omega = 2\pi/T = 2\pi/5\pi = 0.4\ \text{rad/s}$. Consistent.
</details>

### 10. Non-uniform circular motion

At a moment when a car is moving at $6\ \text{m/s}$ on a $30\ \text{m}$ radius arc and its speed is increasing at $3\ \text{m/s}^2$, find its total acceleration and the angle it makes with the direction of motion.

<details><summary>Answer and reasoning</summary>

$a_t = 3\ \text{m/s}^2$ (with the velocity); $a_c = 36/30 = 1.2\ \text{m/s}^2$ (towards the centre).

$$
a = \sqrt{9+1.44} = \sqrt{10.44} \approx 3.23\ \text{m/s}^2,
\qquad \tan\psi = \frac{a_c}{a_t} = 0.4 \Rightarrow \psi \approx 22^\circ.
$$

With the car speeding up, the acceleration leans $22^\circ$ *toward the centre* from straight ahead. Units check: both components in $\text{m/s}^2$, summed by Pythagoras, not arithmetic.
</details>

## Self-check

You are ready to move on when you can:

- resolve any vector into components and rebuild a resultant, surviving quadrant traps;
- state the difference between the shortest-time and zero-drift river strategies and their formulas;
- derive, not just quote, $T$, $H$ and $R$ for a level-ground projectile, and say exactly when those formulas lapse;
- solve any different-height or incline launch by returning to the two-column method;
- convert rpm/period ↔ $\omega$ ↔ $v$ ↔ $a_c$ in one line each;
- split the acceleration of a curving, speeding body into $a_t$ and $a_c$ and locate its direction;
- sanity-check every answer for sign, unit and plausible size.

If any item is shaky, return to that module and redo its questions with the reveals closed.

Your final step for this chapter is the **JEE Main timed practice**: a 50-minute, no-notes paper that mixes all six tools under time pressure.
