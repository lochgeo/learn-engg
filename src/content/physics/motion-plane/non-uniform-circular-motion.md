## A curve plus a throttle

A cyclist enters a roundabout at $5\ \text{m/s}$ and leaves it at $15\ \text{m/s}$, all the while turning. Two different things happen at once: the direction of velocity keeps swinging (radial effect), and the magnitude keeps growing (the pedalling). Neither alone is the whole acceleration, and the two are perpendicular to each other. **Non-uniform circular motion** is the study of both at once — and its language, tangential and radial components, is exactly the one used later for loops and vertical circles in the Work, Energy and Power chapter.

## 1. Two accelerations, two jobs

Split any acceleration on a curve into components fixed by the path's own geometry:

- **Tangential acceleration** $a_t$: along the velocity (or opposite it). It changes the *magnitude* of velocity — the speed — at the rate

$$
a_t = \frac{dv}{dt}.
$$

- **Radial (centripetal) acceleration** $a_c$: towards the centre, using the *instantaneous* speed. It changes the *direction* of velocity at the rate

$$
a_c = \frac{v^2}{r},
$$

the same formula as for uniform circular motion, but now $v$ — and hence $a_c$ — may vary from moment to moment.

The division of labour is strict: no tangential component can turn the velocity, and no radial component can change the speed. In non-uniform motion a body has both at once, which is why the total acceleration is genuinely a vector sum, not one number.

## 2. Angular acceleration

For a particle fixed at radius $r$, angular velocity grows when speed grows. The **angular acceleration** is

$$
\alpha = \frac{d\omega}{dt}
\qquad (\text{SI unit: rad/s}^2),
$$

and since $v = \omega r$ with $r$ constant,

$$
a_t = \alpha r.
$$

Careful: with $\alpha$ constant only for *angular* motion, the rotational kinematics mirror the constant-acceleration equations of Motion in a Straight Line, with $x \to \theta$, $v \to \omega$, $a \to \alpha$:

$$
\omega = \omega_0 + \alpha t, \qquad
\theta = \omega_0 t + \tfrac12\alpha t^2, \qquad
\omega^2 = \omega_0^2 + 2\alpha\theta.
$$

These hold when $\alpha$ is constant — the analogue of constant acceleration along a line. If $\alpha$ varies, go back to the defining derivatives.

## 3. The total acceleration: magnitude and direction

Because $\vec a_t$ (tangent) and $\vec a_c$ (radial) are perpendicular, the magnitude and lean of the total acceleration follow from Pythagoras:

$$
a = \sqrt{a_t^2 + a_c^2}, \qquad
\tan\psi = \frac{a_c}{a_t},
$$

where $\psi$ is the angle between the total acceleration and the tangent — in other words, between $\vec a$ and $\vec v$. Three positioning cases cover everything:

| Situation | $a_t$ | Lean of $\vec a$ |
| --- | --- | --- |
| Speeding up through a curve | $>0$ (with $\vec v$) | forward-and-inward, between tangent and centre |
| Braking through a curve | $<0$ (against $\vec v$) | backward-and-inward |
| Uniform circular motion | $0$ | exactly radial, $\psi = 90^\circ$ |

<learning-block type="example" title="Worked example: accelerating on a roundabout">

A car enters a circular path of radius $60\ \text{m}$ at $5\ \text{m/s}$ and speeds up uniformly to $15\ \text{m/s}$ over $5\ \text{s}$.

Tangential acceleration: $a_t = dv/dt = (15-5)/5 = 2\ \text{m/s}^2$ (along the motion).

Mid-manoeuvre, its speed is $10\ \text{m/s}$; at that instant

$$
a_c = \frac{v^2}{r} = \frac{10^2}{60} \approx 1.67\ \text{m/s}^2
\quad \text{(towards the centre)}.
$$

Total acceleration:

$$
a = \sqrt{2^2 + 1.67^2} = \sqrt{4+2.78} \approx 2.60\ \text{m/s}^2,
$$

leaning at $\psi = \arctan(1.67/2) \approx 40^\circ$ inward from the tangent.

**Sanity checks:** each component is modest compared with $g$, as befits a gentle acceleration; and as $\psi$ ranges over the manoeuvre from $\arctan(0.42/2)\approx 12^\circ$ (slow start) to $\arctan(3.75/2)\approx 62^\circ$ (fast finish), the acceleration swings continuously from mostly forward towards mostly inward — always between the two directions, never outside them.

</learning-block>

<learning-block type="mistake" title="Non-uniform circle errors">

- Computing $a_c$ with the **initial** speed but quoting it for a later instant. $a_c = v^2/r$ is instantaneous: plug in the *current* speed, which is exactly why the worked example evaluates it at $10\ \text{m/s}$, not $5$ or $15$.
- Adding $a_t$ and $a_c$ arithmetically. They are perpendicular vectors: $\sqrt{a_t^2+a_c^2}$, or nothing.
- Dropping the radial term because the motion is "not uniform". Radial acceleration exists whenever the direction turns, which is every instant of any curved motion.
- Confusing $\alpha$ with $a_t$: $\alpha$ is in rad/s$^2$, and only the product $\alpha r$ becomes a linear acceleration.

</learning-block>

## 4. Reading real situations

The two-component view turns qualitative questions into one-line answers:

- *Braking on a bend:* $a_t < 0$, so the total acceleration points inward-and-backward — combined with any forward skid risk, this is why hard braking on a curve is doubly dangerous.
- *A viaduct or loop-the-loop:* on the inside of a vertical loop the required radial force is $mv^2/r$ upward at the bottom and downward at the top, while $a_t$ depends on whether gravity's tangential component speeds up or slows the body — the Work, Energy and Power chapter carries this analysis through with energy conservation.
- *A wave of a skipping rope or a chain on a sprocket:* every point on a curving path with changing speed can be read through the same pair of components.

## Try it yourself

**1.** A wheel starts from rest and gains angular speed at $4\ \text{rad/s}^2$ for $2\ \text{s}$. For a point on its rim at $r = 0.25\ \text{m}$, find $\omega$, $a_t$, $a_c$ and $a$ at the end of the interval.

<details><summary>Show the reasoning</summary>

$\omega = \alpha t = 8\ \text{rad/s}$. Tangential: $a_t = \alpha r = 4 \times 0.25 = 1.0\ \text{m/s}^2$. Radial: $a_c = \omega^2 r = 64 \times 0.25 = 16\ \text{m/s}^2$. Total:

$$
a = \sqrt{1^2+16^2} = \sqrt{257} \approx 16.0\ \text{m/s}^2,
$$

leaning at $\arctan(16/1) \approx 86^\circ$ from the tangent — nearly radially inward, since by now the speed (and hence $a_c$) dominates. Note $a_c \ne \alpha r \cdot t$: radial acceleration accumulates through $v$ or $\omega$, not directly through time.
</details>

**2.** For the car of the worked example ($r = 60\ \text{m}$, $a_t = 2\ \text{m/s}^2$), at what speed are the two acceleration components equal in magnitude?

<details><summary>Show the reasoning</summary>

Components are equal when

$$
\frac{v^2}{r} = a_t \ \Rightarrow\ v = \sqrt{a_t r} = \sqrt{2 \times 60} \approx 11.0\ \text{m/s},
$$

which falls neatly inside the $5 \to 15\ \text{m/s}$ interval. Before it, the forward push dominates ($\psi < 45^\circ$); after it, the inward pull dominates ($\psi > 45^\circ$).
</details>

**3.** A cyclist brakes steadily while going around a level bend, keeping her speed decreasing at $1.5\ \text{m/s}$ per second at an instant when she is moving at $6\ \text{m/s}$ on a $9\ \text{m}$ radius arc. Find her total acceleration and its heading relative to her motion.

<details><summary>Show the reasoning</summary>

$a_t = -1.5\ \text{m/s}^2$ (opposing the velocity); $a_c = 6^2/9 = 4.0\ \text{m/s}^2$ (towards the centre).

$$
a = \sqrt{1.5^2+4^2} = \sqrt{18.25} \approx 4.27\ \text{m/s}^2.
$$

Relative to the tangent, the lean is $\arctan(4/1.5) \approx 69^\circ$ *towards the centre* — and since $a_t$ acts against the motion, the total acceleration points backward-and-inward. The radial part is doing more work turning her ($4.0$) than the brake is doing slowing her ($1.5$).
</details>

## Remember

- On any curve, the velocity splits its attention: $a_t = dv/dt$ manages the speed, $a_c = v^2/r$ manages the direction.
- $a_c$ is always evaluated with the instantaneous speed and points to the centre, uniform or not.
- $a_t = \alpha r$, and constant $\alpha$ reuses the straight-line kinematic equations with $\theta, \omega, \alpha$ in place of $x, v, a$.
- Total acceleration is $\sqrt{a_t^2+a_c^2}$, leaning between forward and inward when speeding up, between backward and inward when slowing.
- Next module: the chapter's mixed practice — choosing the right tool for questions that combine vectors, projectiles and circles.
