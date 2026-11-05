## Gravity only acts one way

A ball kicked at an angle rises, slows, hesitates at the top of its arc, and falls — yet the whole time it drifts forward at an apparently unchanging pace. The reason is simple and powerful: with air resistance neglected, **gravity is the only force**, and it points straight down. Nothing pushes or pulls horizontally, so the horizontal velocity never changes; the vertical motion is just an ordinary free-fall problem occurred simultaneously with uniform horizontal motion. The curved path — a **projectile's trajectory** — is the sum of one constant-speed drift and one accelerated drop.

This decomposition into two independent one-dimensional motions is the entire strategy of projectile analysis. Everything else is bookkeeping.

## 1. The model and its assumptions

State them, because every formula below collapses without them:

- gravity is uniform: acceleration $g$ downward, the same at every height involved;
- air resistance is negligible, so no horizontal force ever appears;
- the Earth's curvature is ignored over the distances considered.

Launch with speed $u$ at angle $\theta$ above the horizontal. Immediately after launch:

$$
u_x = u\cos\theta, \qquad u_y = u\sin\theta.
$$

## 2. The two motions, side by side

Writing $t$ for the time since launch, and taking $+y$ upward:

| | Horizontal ($x$) | Vertical ($y$) |
| --- | --- | --- |
| acceleration | $0$ | $-g$ |
| velocity | $v_x = u\cos\theta$ (constant) | $v_y = u\sin\theta - gt$ |
| position | $x = u\cos\theta\ t$ | $y = u\sin\theta\ t - \frac12 g t^2$ |

The two columns share only one quantity — the time $t$ — and this is the lever for every projectile question: find $t$ in one column, then substitute into the other.

## 3. Time of flight and maximum height

At the top of the arc the vertical velocity vanishes, $v_y = 0$:

$$
t_{\text{top}} = \frac{u\sin\theta}{g}.
$$

By symmetry (the vertical motion retraces itself), the full flight time for launch and landing at the **same height** is twice this:

$$
T = \frac{2u\sin\theta}{g}.
$$

The maximum height follows from $v_y^2 = u_y^2 - 2g\Delta y$ with $\Delta y = H$, $v_y = 0$:

$$
H = \frac{u^2\sin^2\theta}{2g}.
$$

At the top, note carefully what is and is not zero: $v_y = 0$ but $v_x = u\cos\theta$ remains, so the projectile still has speed $u\cos\theta$ and its acceleration is still $g$ downward. Only the *velocity* momentarily points horizontally.

## 4. Range and the complementary-angle rule

The range is the horizontal distance covered during $T$:

$$
R = u_x T = u\cos\theta \cdot \frac{2u\sin\theta}{g} = \frac{u^2\sin 2\theta}{g}.
$$

Two consequences worth memorising:

- **Maximum range at $\theta = 45^\circ$**, where $\sin2\theta$ peaks at 1. For speeds that matter, $R_{\max} = u^2/g$.
- **Complementary angles give equal range**: since $\sin 2\theta = \sin(180^\circ - 2\theta)$, launches at $\theta$ and at $90^\circ - \theta$ (say $30^\circ$ and $60^\circ$) land at the same spot. The high trajectory spends longer in the air at lower horizontal speed; the flat one does the opposite.

## 5. The equation of the trajectory

Eliminate $t$ between the two position equations. From $x$, get $t = x/(u\cos\theta)$ and substitute into $y$:

$$
y = x\tan\theta - \frac{g x^2}{2u^2\cos^2\theta}.
$$

Since $\tan\theta$, $u$ and $g$ are constants for a given launch, $y$ is quadratic in $x$: the trajectory is a **parabola**, exactly the shape of the constant-acceleration graph familiar from the straight-line chapter, now drawn in space.

<learning-block type="example" title="Worked example: a launch at 30 degrees">

A ball is kicked at $20\ \text{m/s}$, at $30^\circ$ above level ground. Take $g = 10\ \text{m/s}^2$.

Components: $u_x = 20\cos30^\circ = 17.3\ \text{m/s}$, $u_y = 20\sin30^\circ = 10\ \text{m/s}$.

$$
T = \frac{2u_y}{g} = \frac{2(10)}{10} = 2\ \text{s}, \qquad
H = \frac{u_y^2}{2g} = \frac{100}{20} = 5\ \text{m}, \qquad
R = \frac{u^2\sin60^\circ}{10} = 40(0.866) = 34.6\ \text{m}.
$$

**Sanity checks:** the range equals the constant horizontal speed times the flight time, $17.3 \times 2 = 34.6\ \text{m}$ — self-consistent; and a launch at $60^\circ$ with the same speed gives $40\sin120^\circ = 34.6\ \text{m}$ too, as the complementary-angle rule demands.

*Where is it after $1.5\ \text{s}$?* Past the top ($t_{\text{top}} = 1\ \text{s}$), descending: $v_x = 17.3\ \text{m/s}$, $v_y = 10 - 10(1.5) = -5\ \text{m/s}$, so speed $= \sqrt{17.3^2+5^2} = \sqrt{325} \approx 18.0\ \text{m/s}$ at $\arctan(5/17.3) \approx 16^\circ$ below the horizontal.

</learning-block>

<learning-block type="mistake" title="Projectile errors that survive into exams">

- Applying $R = u^2\sin2\theta/g$ when launch and landing heights **differ**. That formula assumes equal heights; a cliff launch needs the general method of the next module.
- Swapping sine and cosine in the components: the angle is always measured against the axis you resolved onto. Measuring $\theta$ from the vertical swaps $u_x$ and $u_y$.
- Believing the vertical velocity or the acceleration is zero at the top of the flight. Neither is; only $v_y$ is.
- Treating the flight time as set by the horizontal speed. Only the vertical motion decides how long the projectile stays airborne (for equal launch and landing heights).

</learning-block>

## Try it yourself

**1.** A stone is thrown at $30\ \text{m/s}$ at $45^\circ$ over level ground. Find its time of flight, maximum height and range with $g = 10\ \text{m/s}^2$.

<details><summary>Show the reasoning</summary>

$u_x = u_y = 30/\sqrt2 \approx 21.2\ \text{m/s}$.

$$
T = \frac{2(21.2)}{10} = 4.24\ \text{s}, \qquad H = \frac{21.2^2}{20} = 22.5\ \text{m}, \qquad R = \frac{30^2\sin90^\circ}{10} = 90\ \text{m}.
$$

Check: $R = u_x T = 21.2 \times 4.24 = 90\ \text{m}$. Consistent — and $45^\circ$ is the maximum-range angle, so no other throw at $30\ \text{m/s}$ goes further.
</details>

**2.** Two throws at the same speed land at the same range. One is launched at $15^\circ$. What is the other angle, and how do their flight times compare?

<details><summary>Show the reasoning</summary>

Equal ranges come from complementary angles: the partner of $15^\circ$ is $75^\circ$, since $15^\circ + 75^\circ = 90^\circ$ and $\sin 30^\circ = \sin 150^\circ$. The $75^\circ$ throw has the larger $u_y = u\sin\theta$, so it stays aloft about $\sin75^\circ/\sin15^\circ \approx 3.7$ times longer, while the $15^\circ$ throw covers the same ground much faster.
</details>

**3.** A ball is tossed at $10\ \text{m/s}$ at $30^\circ$ above the horizontal. Find the maximum height and the time taken to reach the top.

<details><summary>Show the reasoning</summary>

$u_y = 10\sin30^\circ = 5\ \text{m/s}$. Time to the top: $t = u_y/g = 0.5\ \text{s}$. Height: $H = u_y^2/2g = 25/20 = 1.25\ \text{m}$. Cross-check via displacement: $y = 5(0.5) - \frac12(10)(0.25) = 2.5 - 1.25 = 1.25\ \text{m}$. Consistent.
</details>

## Remember

- projectiles are two independent motions sharing one clock: constant $v_x$ plus vertical free fall.
- Only the vertical column controls the clock: $T = 2u\sin\theta/g$ for level launch and landing.
- $R = u^2\sin2\theta/g$ is a level-ground result, maximum at $45^\circ$, and shared by complementary launch angles.
- The trajectory $y = x\tan\theta - gx^2/(2u^2\cos^2\theta)$ is a parabola; the acceleration never leaves the vertical axis.
- Next module: launches from a height and along an inclined plane, where symmetry is lost and the horizontal and vertical columns must be solved jointly.
