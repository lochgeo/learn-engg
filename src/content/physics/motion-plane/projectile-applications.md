## When symmetry is lost

Level-ground projectile formulas carry a hidden gift: the flight rises exactly as high as it falls, so the trip down mirrors the trip up and closed-form results follow. Real launches often break the mirror — a cannon on a cliff, a stone thrown off a bridge, a shell fired up a hillside. Then no symmetric shortcut exists, but the strategy does not change: keep the two independent motions, let the **vertical column again find the time**, and substitute into the horizontal column. The incline merely tilts both axes, and the same freedom to choose a convenient frame does the rest.

## 1. Horizontal launch from a height

A ball leaves a platform of height $h$ with horizontal speed $u$ and no vertical velocity. Vertical column: free fall from rest, so the fall time is set purely by $h$:

$$
t_f = \sqrt{\frac{2h}{g}}.
$$

Horizontal column during that time:

$$
R = u\,t_f = u\sqrt{\frac{2h}{g}},
\qquad v_y = \sqrt{2gh}\quad \text{at impact},
$$

so the landing speed is $\sqrt{u^2 + 2gh}$, striking the ground at an angle $\beta$ below the horizontal with

$$
\tan\beta = \frac{v_y}{v_x} = \frac{\sqrt{2gh}}{u}.
$$

Two features worth internalising: the fall time does **not** depend on $u$ (a fast ball and a slow ball dropped from the same height land together), and the trajectory is the same parabola as before — a horizontal launch is just a projectile launched at $\theta = 0$.

<learning-block type="example" title="Worked example: a stone off a cliff">

A stone is thrown horizontally at $15\ \text{m/s}$ from a cliff $45\ \text{m}$ high. Take $g = 10\ \text{m/s}^2$.

Time to fall: $t_f = \sqrt{2(45)/10} = \sqrt9 = 3\ \text{s}$.

Range: $R = 15 \times 3 = 45\ \text{m}$.

At impact: $v_x = 15\ \text{m/s}$, $v_y = gt = 30\ \text{m/s}$, so speed $= \sqrt{15^2+30^2} = \sqrt{1125} \approx 33.5\ \text{m/s}$, at $\arctan(30/15) \approx 63.4^\circ$ below the horizontal.

**Sanity checks:** a stone simply dropped for $3\ \text{s}$ falls $\frac12 (10)(9) = 45\ \text{m}$ — matches the cliff height; and the landing speed exceeds the launch speed, as it must, because gravity did positive work on the way down.

</learning-block>

## 2. Launch from a height at an angle

Launching *upward* from a height changes only the landing condition: the projectile now ends below where it started. With launch height $h$ above the landing level and vertical component $u_y$ upward, write the vertical position with the landing point as $y = 0$:

$$
y(t) = h + u_y t - \tfrac12 g t^2 = 0.
$$

The positive root is the flight time:

$$
t_f = \frac{u_y + \sqrt{u_y^2 + 2gh}}{g}.
$$

Set $h = 0$ and this collapses to the familiar $2u_y/g$ — a reassuring consistency test of any bookkeeping scheme. Once $t_f$ is known, the horizontal range is again $x = u_x t_f$.

## 3. Projectile up an inclined plane

An incline of angle $\beta$ invites a change of frame: take $x$ **along the incline** (uphill) and $y$ **perpendicular to it**. In this frame gravity splits into $g\sin\beta$ along the negative $x$ direction and $g\cos\beta$ along the negative $y$ direction — *both* components now accelerate the projectile, which is why the level-ground formulas change.

Launch with speed $u$ at angle $\alpha$ **above the incline surface**. Then $u_x = u\cos\alpha$, $u_y = u\sin\alpha$, and the projectile lands where $y = 0$ again:

$$
T = \frac{2u\sin\alpha}{g\cos\beta},
$$

$$
R_{\text{incline}} = u_x T - \tfrac12 (g\sin\beta) T^2 = \frac{2u^2\sin\alpha\cos(\alpha+\beta)}{g\cos^2\beta}.
$$

The $\cos(\alpha+\beta)$ factor quietly encodes the geometry: the landing point sits up the slope only while $\alpha + \beta < 90^\circ$. Differentiating the range with respect to $\alpha$ gives the optimised results:

$$
\text{best angle: } \alpha = 45^\circ - \frac{\beta}{2},
\qquad
R_{\max} = \frac{u^2}{g(1+\sin\beta)}.
$$

Both reduce correctly to the level-ground answers $45^\circ$ and $u^2/g$ when $\beta = 0$.

For a launch *down* the incline the same frame gives

$$
R_{\text{down}} = \frac{2u^2\sin\alpha\cos(\alpha-\beta)}{g\cos^2\beta},
\qquad
R_{\max}^{\text{down}} = \frac{u^2}{g(1-\sin\beta)} \quad \text{at } \alpha = 45^\circ + \frac{\beta}{2}.
$$

Downhill always beats uphill for the same speed, since gravity now adds range along the slope rather than resisting it.

<learning-block type="example" title="Worked example: up a 30-degree slope">

A projectile is fired at $20\ \text{m/s}$ at $\alpha = 30^\circ$ above a slope of $\beta = 30^\circ$ — that is, $60^\circ$ above the horizontal. Take $g = 10\ \text{m/s}^2$.

$$
T = \frac{2(20)\sin30^\circ}{10\cos30^\circ} = \frac{20}{8.66} = 2.31\ \text{s},
$$

$$
R = \frac{2(20)^2\sin30^\circ\cos60^\circ}{10\cos^2 30^\circ} = \frac{2(400)(0.5)(0.5)}{10(0.75)} = \frac{200}{7.5} = 26.7\ \text{m}.
$$

**Sanity check in the ground frame:** with $u_x = 10\ \text{m/s}$, $u_y = 17.3\ \text{m/s}$, the landing point would be at $x = 10T \approx 23.1\ \text{m}$, $y \approx 13.3\ \text{m}$ — and indeed $13.3/23.1 = 0.577 = \tan30^\circ$, so the point genuinely lies on the slope. Dividing the straight-line distance by $\cos30^\circ$ gives $23.1/0.866 = 26.7\ \text{m}$ along the slope, matching the formula.

This choice of $\alpha$ is not accidental: $45^\circ - \beta/2 = 30^\circ$ is exactly the optimal angle, and indeed $u^2/[g(1+\sin30^\circ)] = 400/15 = 26.7\ \text{m}$. No other launch angle puts the projectile further up this slope.

</learning-block>

<learning-block type="mistake" title="Angle and frame mix-ups">

- Using $\theta$ (measured from the horizontal) inside the incline formulas. The formula $T = 2u\sin\alpha/(g\cos\beta)$ expects $\alpha$ measured **from the incline surface**. Forgetting this is the leading source of wrong incline answers.
- Dragging level-ground symmetry into cliff problems, e.g. claiming time up equals time down when the landing is $h$ below the launch.
- Forgetting that on an incline the along-slope motion is *also* accelerated ($g\sin\beta$), so $R = u_x T$ is no longer valid without the extra term the full derivation includes.
- Mixing up $R_{\max} = u^2/[g(1+\sin\beta)]$ (up) with $u^2/[g(1-\sin\beta)]$ (down): uphill range is always the smaller of the pair.

</learning-block>

## Try it yourself

**1.** A ball rolls horizontally off a $20\ \text{m}$ high roof at $10\ \text{m/s}$. Find its time of flight, the distance from the wall where it lands, and its landing speed. Use $g = 10\ \text{m/s}^2$.

<details><summary>Show the reasoning</summary>

$t_f = \sqrt{2(20)/10} = 2\ \text{s}$. Range $x = 10 \times 2 = 20\ \text{m}$. Landing: $v_x = 10\ \text{m/s}$, $v_y = 20\ \text{m/s}$, so speed $= \sqrt{100+400} = \sqrt{500} \approx 22.4\ \text{m/s}$ at $\arctan(2) \approx 63.4^\circ$ below the horizontal. Check: the launch speed sets how far from the wall it lands, but not when it lands — a slower roll from the same roof takes exactly this same 2 s, because the time is set by the height alone.
</details>

**2.** Show that the incline formulas reduce to the level-ground results when $\beta = 0$.

<details><summary>Show the reasoning</summary>

Set $\beta = 0$ (and note when $\beta = 0$, $\alpha$ is measured from the horizontal):

$$
T = \frac{2u\sin\alpha}{g}, \qquad
R = \frac{2u^2\sin\alpha\cos\alpha}{g} = \frac{u^2\sin2\alpha}{g}, \qquad
R_{\max} = \frac{u^2}{g(1+0)} = \frac{u^2}{g}.
$$

All three are exactly the level-ground formulas of the previous module. The incline results are the general case; the level ground is one special point of it.
</details>

**3.** On the same $30^\circ$ slope, find the greatest range *down* the slope for a launch speed of $20\ \text{m/s}$, and the launch angle that achieves it.

<details><summary>Show the reasoning</summary>

$$
R_{\max}^{\text{down}} = \frac{u^2}{g(1-\sin\beta)} = \frac{400}{10(1-0.5)} = \frac{400}{5} = 80\ \text{m},
$$

at $\alpha = 45^\circ + \beta/2 = 60^\circ$ from the incline surface (i.e. $90^\circ$ from the horizontal — a vertically upward launch, which makes sense for maximum downhill carry: the projectile stays airborne long, and the slope falls away beneath it).

Compare with the uphill maximum of $26.7\ \text{m}$ for the same speed: downhill wins by a factor of 3, exactly the ratio $(1+\sin\beta)/(1-\sin\beta) = 3$ for $\beta = 30^\circ$.
</details>

## Remember

- A horizontal launch is free fall riding on constant horizontal speed; the fall time depends only on $h$.
- For a launch from a height, solve the vertical quadratic first: $t_f = (u_y + \sqrt{u_y^2+2gh})/g$.
- On an incline, work in the incline frame: gravity splits into $g\sin\beta$ along and $g\cos\beta$ perpendicular, and both motions are accelerated.
- Uphill best angle is $45^\circ - \beta/2$; downhill is $45^\circ + \beta/2$; downhill range always exceeds uphill for the same speed.
- Next module: the last basic motion of the chapter — motion constrained to a circle, where the acceleration refuses to lie along the velocity.
