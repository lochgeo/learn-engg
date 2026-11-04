## Gravity as a built-in problem generator

Drop any object near Earth’s surface, ignoring air resistance, and its acceleration is the same roughly $9.8\ \text{m/s}^2$ downward — written $g$ — whether you drop it, throw it down, or toss it up. Nothing else about the motion is prescribed: gravity supplies the acceleration, and the constant-acceleration equations of the last module do the rest with $a=\pm g$.

Since $a$ is constant, your sign convention decides the *sign* of $g$. Two conventions work; pick one and never mix:

1. **Upward positive.** Then $a=-g$ always; an upward throw has $u>0$ and a downward one $u<0$.
2. **Downward positive.** For a body released from rest, write $a=+g$ and every quantity comes out positive.

Convention 1 is the safer default when the motion includes a reversal (a ball going up and coming down), because the single unchanging $a=-g$ survives the turn.

## Released from rest

With $u=0$ and downward taken positive:

$$
s=\frac12 gt^2,\qquad
v=gt.
$$

So the distance fallen grows with the **square** of the time, and the speed grows linearly. Both statements describe the same reality; which one you compute first depends on what the question asks.

### Worked example: a dropped stone

A stone falls from rest from a cliff ledge $45\ \text{m}$ high. Take $g=10\ \text{m/s}^2$ (the working value this chapter uses unless stated otherwise — at $9.8$ the results shift by about $2\%$).

Time to hit the ground:

$$
45=\frac12(10)t^2\quad\Rightarrow\quad t^2=9\quad\Rightarrow\quad t=3.0\ \text{s}.
$$

Impact speed:

$$
v=gt=(10)(3.0)=30\ \text{m/s}\approx108\ \text{km/h}.
$$

*Sanity check*: $\tfrac12(3.0)(0+30)=45\ \text{m}$ via $s=\tfrac12(u+v)t$ — consistent.

## Thrown upward: one acceleration, two directions

A ball launched upward with speed $u$ is *still* under $a=-g$ (upward positive). Three milestones follow from the equations:

- **Velocity zero at the top.** Setting $v=0$ in $v=u-gt$ gives time up $t_\text{up}=u/g$.
- **Maximum height** $H$ from $0=u^2-2gH$:
  $$
  H=\frac{u^2}{2g}.
  $$
- **Return launch point with equal speed.** By $v^2=u^2-2g\Delta x$, arriving back at $\Delta x=0$ gives $v^2=u^2$: same speed, now directed downward.

Because the acceleration is identical to a paused-then-resumed downward fall, the flight is **symmetric**: time down equals time up, and every height is visited twice at equal speeds. The $v$–$t$ graph is one straight line crossing the time axis; the $x$–$t$ graph is a single downward-opening parabola.

<learning-block type="concept" title="The top of the flight is not weightless">

At the highest point the velocity is zero, but the acceleration is $-g$, not zero — gravity is what makes the velocity zero there and turns the ball around. Confusing “velocity zero” with “acceleration zero” is possibly the most quoted free-fall error. If the acceleration were momentarily zero at the top, the ball would hang there.

</learning-block>

### Worked example: a tossed ball, end to end

A ball is thrown upward at $20\ \text{m/s}$ from hand height, with $g=10\ \text{m/s}^2$.

- Time to the top: $t=20/10=2.0\ \text{s}$.
- Maximum height: $H=u^2/2g=400/20=20\ \text{m}$.
- Time to return to launch height: by the flight symmetry, $2.0\times2=4.0\ \text{s}$ (or solve $0=(20)t-\tfrac12(10)t^2$, whose nonzero root is $4.0\ \text{s}$).
- Speed on return: $20\ \text{m/s}$ downward.

*Sanity check*: average velocity over the flight is $0/4.0=0$, while average speed is $80/4.0=20\ \text{m/s}$ — exactly the figures that displacement-and-path-length thinking predicted for a round trip.

## The sign traps, collected

Free-fall problems are short but sign-dense. Watch for:

- **Switching the sign of $g$ part-way through.** With the upward-positive convention every substitution uses $a=-10\ \text{m/s}^2$; with the downward-positive one every substitution uses $a=+10\ \text{m/s}^2$. Write the convention down at the top of the page before any substitution.
- **Assuming the acceleration changes sign at the top.** It does not: $a=-g$ throughout. Only the *velocity* changes sign.
- **Throwing downward but writing $u$ as positive while keeping $a=-g$.** With the “upward positive” convention, a downward throw has $u<0$ too.
- **Adding the speed on the way down to “check” against the height.** Energy considerations come later; for now, velocity and displacement satisfy $v^2=u^2+2a\Delta x$ with the consistent signs.
- **Forgetting a thrown-down ball is faster than a dropped one.** A downward initial speed adds to the fall; $v^2=u^2+2gs$ makes that exact.

## Try it yourself

**1. A coin is thrown downward at $5.0\ \text{m/s}$ from a bridge $40\ \text{m}$ above water. Take $g=10\ \text{m/s}^2$. Find when and how fast it lands.**

<details><summary>Show the reasoning</summary>

Downward positive: $u=5.0$, $a=+10$, $s=40$.

$$
v^2=u^2+2gs=25+800=825\Rightarrow v=\sqrt{825}\approx28.7\ \text{m/s}.
$$

For time, $s=ut+\tfrac12gt^2$: $40=5t+5t^2$, i.e. $t^2+t-8=0$, so $t=\tfrac{-1+\sqrt{33}}{2}\approx2.37\ \text{s}$.

Checks: landing speed also equals $u+gt=5.0+(10)(2.37)=28.7\ \text{m/s}$; and $2.37\ \text{s}$ is a little less than the $\sqrt{2(40)/10}=2.83\ \text{s}$ a purely dropped coin would need — the initial push speeds everything up.

</details>

**2. A ball thrown upward passes a window ledge at $15\ \text{m/s}$ on the way up. How much higher does it climb, and how long until it passes back down the ledge at that speed?**

<details><summary>Show the reasoning</summary>

From the ledge, treat $u=15\ \text{m/s}$ upward, $g=10$: extra height $=u^2/2g=225/20=11.25\ \text{m}$, time up $=1.5\ \text{s}$.

By the flight symmetry it returns to the ledge after $3.0\ \text{s}$, moving downward at $15\ \text{m/s}$ — whatever happened below (the hand and how hard the ball was thrown) is irrelevant above this height. Uniform gravity erases history.

</details>

**3. Between which two successive seconds of fall does a stone dropped from rest pass the $25\ \text{m}$ mark? ($g=10$.)**

<details><summary>Show the reasoning</summary>

Fall times to reach depth $s$: $t=\sqrt{2s/10}$. At $s=20\ \text{m}$, $t=2.0\ \text{s}$; at $s=30\ \text{m}$, $t\approx2.45\ \text{s}$. So the $25\ \text{m}$ depth is crossed between the **second and third** seconds of fall. Its speed there rises from $v=gt=20\ \text{m/s}$ to about $24.5\ \text{m/s}$ in that interval — comfortably inside sanity.

</details>

## Remember

- Free fall is constant acceleration with $a=+g$ or $-g$ depending *only* on your sign choice.
- Time up = time down and launch speed = return speed hold whenever air resistance is ignored.
- Velocity is zero at the top; acceleration is $g$ downward there, throughout, always.
- Maximum height is $u^2/2g$ measured from the launch point.
- Sketch the $v$–$t$ line and the $x$–$t$ parabola before substituting: they catch sign slips faster than algebra.

Bodies moving on the same line are easier to analyse **relative to each other** than from the ground — that reframing is the next module’s tool.
