## Constant speed, changing velocity

A car rounds a roundabout at a steady $30\ \text{km/h}$. Its speedometer never moves, yet its velocity changes at every instant — because velocity is a vector, and its direction swings continuously around the bend. A changing velocity is an acceleration, whether or not the magnitude of $\vec v$ changes, so something must be accelerating that car: steadily, and towards the centre of the roundabout. This is the central surprise of **uniform circular motion**: no change of speed is needed to require a force, only a change of direction.

## 1. Describing rotation: angle, angular speed, period

When a particle moves on a circle of radius $r$, its location is most naturally described by the angle $\theta$ its radius makes with a fixed direction. Angles in this business are measured in **radians**: an arc of length $s$ on a circle of radius $r$ subtends

$$
\theta = \frac{s}{r},
$$

so a full turn is $2\pi$ rad. The rate of sweeping angle is the **angular velocity**

$$
\omega = \frac{\Delta\theta}{\Delta t}
\qquad (\text{SI unit: rad/s}),
$$

and the time for one complete revolution is the **period** $T$, with

$$
\omega = \frac{2\pi}{T}.
$$

The link between angular and linear speed is geometrically obvious from $s = r\theta$: divide both sides by the same time interval and

$$
v = \omega r.
$$

A point twice as far from the axle of a spinning wheel moves twice as fast in m/s, though both points sweep the same rad/s.

<learning-block type="example" title="Worked example: a runner on a circular track">

A runner completes one lap of a circular track of radius $50\ \text{m}$ in $100\ \text{s}$ at steady pace.

Angular velocity: $\omega = 2\pi/T = 6.283/100 = 0.0628\ \text{rad/s}$.

Speed: $v = \omega r = 0.0628 \times 50 = 3.14\ \text{m/s}$.

**Centripetal acceleration** (derived in the next section):

$$
a_c = \frac{v^2}{r} = \frac{3.14^2}{50} = \frac{9.87}{50} \approx 0.20\ \text{m/s}^2.
$$

**Sanity check:** the circumference is $2\pi r = 314\ \text{m}$, and $314\ \text{m} / 100\ \text{s} = 3.14\ \text{m/s}$ — the speed agrees through both routes; and $a_c$ is small compared with $g$, as expected for a gentle jog.

</learning-block>

## 2. Why circular motion needs an acceleration: $a_c = v^2/r$

Take two nearby velocity arrows on the circle, separated by a small angle $\Delta\theta$. Their magnitudes are equal ($v$), so the triangle they form with the change $\Delta\vec v$ is isosceles, and a little geometry gives

$$
|\Delta\vec v| = v\,\Delta\theta.
$$

Dividing by the time taken, $\Delta t$, and using $\Delta\theta/\Delta t = \omega$:

$$
a_c = \frac{v\,\Delta\theta}{\Delta t} = v\omega = \frac{v^2}{r} = \omega^2 r.
$$

The direction of $\Delta\vec v$ points towards the centre even as $\Delta\theta \to 0$, so the acceleration — and the net force $m\vec a_c$ that causes it, called the **centripetal force** — always points to the centre. The three equivalent magnitudes are worth keeping side by side:

$$
a_c = \frac{v^2}{r} = \omega^2 r = v\,\omega.
$$

## 3. Why the speed stays constant

The centripetal acceleration is perpendicular to the velocity at every instant (velocity is tangential, acceleration radial). Perpendicular acceleration can turn the velocity; it cannot stretch or shrink it. Formally, in the language of the Work, Energy and Power chapter, a force perpendicular to displacement does no work, so the kinetic energy — and hence the speed — never changes. Direction of motion is being continuously redirected; nothing adds or removes speed.

<learning-block type="mistake" title="The 'centrifugal' trap and other circular slips">

- Inventing an outward "centrifugal force" pushing the body off the circle. In the ground frame there is *only* an inward net force; the apparent outward push belongs inside a rotating frame and must not be drawn on the same diagram as inward forces.
- Feeding degrees into $s = r\theta$ or $\omega = \Delta\theta/\Delta t$. These formulas require radians; a full turn is $2\pi$, not $360$.
- Using $a_c = v^2/r$ with the wrong radius — for example the diameter, or mixing up $v$ (m/s) and $\omega$ (rad/s). Check dimensions: $v^2/r$ has units $\text{m/s}^2$, while $\omega^2 r$ does too.

</learning-block>

## 4. What provides the centripetal force

"Centripetal force" is a job description, not a new kind of force: whatever agent points the net force inward plays the role. Friction does it for a car on a flat road: the available grip is at most $\mu m g$, so the sharpest affordable turn caps the speed at

$$
v_{\max} = \sqrt{\mu g r}
$$

on a level road with coefficient $\mu$. Tension does it for a stone on a string; gravity does it for a satellite or the Moon; a combination of friction and the normal force on a road banked at angle $\theta$ does it for a designed racetrack curve, where at the design speed $v = \sqrt{gr\tan\theta}$ no friction is needed at all. The Laws of Motion chapter picks these cases up with full free-body diagrams; here the message is that the required inward force is $mv^2/r$ — becoming enormous at high speed, which is why highway curves are banked and speed limits drop before them.

## Try it yourself

**1.** A stone swings on a string of length $0.5\ \text{m}$, completing each revolution in $2.0\ \text{s}$ (a horizontal circle, viewed from above). Find $\omega$, $v$ and $a_c$.

<details><summary>Show the reasoning</summary>

$\omega = 2\pi/T = \pi \approx 3.14\ \text{rad/s}$; $v = \omega r = 3.14 \times 0.5 = 1.57\ \text{m/s}$;

$$
a_c = \frac{v^2}{r} = \frac{2.47}{0.5} \approx 4.93\ \text{m/s}^2
\quad \text{or directly } \omega^2 r = 9.87 \times 0.5 = 4.93\ \text{m/s}^2.
$$

Both routes agree, as they must — the same value dressed in angular and linear clothing.
</details>

**2.** A car takes a curve of radius $20\ \text{m}$ at $v$, then the same curve at $2v$. How does its required centripetal acceleration change?

<details><summary>Show the reasoning</summary>

$a_c = v^2/r$ grows as the **square** of the speed: doubling $v$ quadruples $a_c$. At $v = 10\ \text{m/s}$, $a_c = 5\ \text{m/s}^2$; at $20\ \text{m/s}$, $a_c = 20\ \text{m/s}^2$ — twice the acceleration of gravity demanded purely to turn the corner. This quadratic scaling is why speeds are regulated far more strictly on tighter and faster bends than intuition expects.
</details>

**3.** What is the fastest a car can take a level circular track of radius $45\ \text{m}$ if the tyre–road friction coefficient is $0.8$? Use $g = 10\ \text{m/s}^2$.

<details><summary>Show the reasoning</summary>

$$
v_{\max} = \sqrt{\mu g r} = \sqrt{0.8 \times 10 \times 45} = \sqrt{360} \approx 19.0\ \text{m/s},
$$

which is about $68\ \text{km/h}$. Any faster and friction alone cannot turn the car fast enough; without banking, nothing else supplies the inward force. Note the answer does not depend on the car's mass — a heavier car needs proportionally more inward force but friction supplies proportionally more too.
</details>

## Remember

- uniform circular motion means constant *speed*, never constant *velocity*: direction changes at every instant.
- $v = \omega r$ links linear and angular descriptions; $a_c = v^2/r = \omega^2 r$ quantifies the inward acceleration.
- Centripetal acceleration is perpendicular to velocity, does no work, and leaves the speed alone.
- The centripetal force is whatever inward force is available — friction, tension or gravity — and must equal $mv^2/r$.
- Next module: when the speed itself changes on the curve, a second, tangential acceleration appears alongside the radial one.
