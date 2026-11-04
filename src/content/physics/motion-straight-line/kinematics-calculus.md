## When acceleration refuses to be constant

Brakes in real vehicles fade, rockets lose mass, and a bouncing ball meets a spring force that grows as it compresses. Whenever $a$ varies with time or position, the three constant-acceleration equations are off the table. What remains are the **definitions** themselves — and they are already differential and integral statements:

$$
v=\frac{dx}{dt},\qquad a=\frac{dv}{dt}.
$$

Velocities come from differentiating position; accelerations from differentiating velocity; and reversing the flow — integrating with initial conditions — rebuilds motion from a known acceleration. This module works both directions, plus a trick for the awkward middle case.

## Downhill: differentiate

Given a position as an explicit function of time, $x(t)$, everything else follows mechanically.

### Worked example 1: read the motion from $x(t)$

A particle moves along a line with

$$
x(t)=3t^2-2t+5 \quad (x\ \text{in metres},\ t\ \text{in seconds}).
$$

Differentiate:

$$
v=\frac{dx}{dt}=6t-2,\qquad
a=\frac{dv}{dt}=6\ \text{m/s}^2.
$$

Note three things:

- The acceleration is a **constant** $+6\ \text{m/s}^2$; $t$ never survived the second differentiation because positions quadratic in $t$ are precisely constant-acceleration motion. Nothing stopped us from using $v=u+at$ with $u=-2\ \text{m/s}$ and $a=6$ — calculus and the previous module agree.
- At $t=2\ \text{s}$, $v=6(2)-2=10\ \text{m/s}$.
- Displacement in the first $2\ \text{s}$: $x(2)-x(0)=(12-4+5)-5=8.0\ \text{m}$, so $\bar v=4.0\ \text{m/s}$, while the instantaneous velocity at the end of the interval is $10\ \text{m/s}$. They differ — this is the average-versus-instantaneous distinction computing itself.

## Uphill: integrate with initial conditions

Given $a(t)$, integrate to get $v(t)$, integrate again for $x(t)$. Each integration introduces a **constant of integration, fixed by an initial condition** — skipping that step is the classic error.

### Worked example 2: rebuild motion from $a(t)$

A particle starts from rest at the origin and has acceleration $a=2t$ (SI units, so $\text{m/s}^2$).

Velocity, with $v(0)=0$:

$$
v(t)=\int_0^t 2t'\,dt'=t^2.
$$

Position, with $x(0)=0$:

$$
x(t)=\int_0^t v\,dt'=\int_0^t t'^{2}\,dt'=\frac{t^3}{3}.
$$

At $t=3\ \text{s}$: $v=9.0\ \text{m/s}$ and $x=9.0\ \text{m}$, so $\bar v=9.0/3.0=3.0\ \text{m/s}$ against an instantaneous $9.0\ \text{m/s}$ — the speed tripled its low start, and the average sits much nearer the beginning of the ramp than the end.

*Sanity check via area:* the $v$–$t$ curve is a parabola $v=t^2$; the area up to $t=3$ is exactly the integral $\int_0^3 t^2\,dt=9.0\ \text{m}$. Graph and calculus agree, as they must.

## The trick for $a(x)$: use $a=v\,dv/dx$

When acceleration is given as a function of **position** (spring force, drag over a patch of track), time and $t$-integrals are unavailable — you have $a(x)$, not $a(t)$. The chain rule rearranges the definitions into a form with only $x$ and $v$:

$$
a=\frac{dv}{dt}=\frac{dv}{dx}\cdot\frac{dx}{dt}=v\frac{dv}{dx}.
$$

Then treat $a\,dx = v\,dv$: separate variables and integrate between the known state and the unknown one:

$$
\int_{u}^{v} v'\,dv'=\int_{x_0}^{x} a(x')\,dx'
\quad\Rightarrow\quad
\frac{v^2-u^2}{2}=\int_{x_0}^{x}a(x')\,dx'.
$$

Notice how this generalises the constant-$a$ favourite $v^2=u^2+2as$: the term $a\,s$ is just the special case of the integral when $a$ is constant. So the identity is not new physics, but it is new *reach*.

### Worked example 3: motion under a position-dependent deceleration

An object moving along $+x$ has initial speed $u=5.0\ \text{m/s}$ and acceleration

$$
a=-2x\quad(\text{SI units: } a\ \text{in}\ \text{m/s}^2,\ x\ \text{in}\ \text{m}).
$$

Find its speed at $x=3.0\ \text{m}$ and the point where it momentarily stops.

Since $a$ depends on position, apply $v\,dv=a\,dx$ from the launch state:

$$
\int_{u}^{v}v'\,dv'=\int_{0}^{x}(-2x')\,dx'
\quad\Rightarrow\quad
\frac{v^2-u^2}{2}=-x^2
\quad\Rightarrow\quad
v^2=25-2x^2.
$$

At $x=3.0\ \text{m}$: $v^2=25-18=7.0$, so $v=+\sqrt{7.0}\approx2.6\ \text{m/s}$ — positive, since the object has not yet reversed.

The turning point is where $v=0$: $25-2x^2=0$ gives

$$
x=\sqrt{12.5}\approx3.5\ \text{m}.
$$

*Sanity checks:* the speed fades monotonically $5.0\to2.6\to0$ as $x$ grows to $3.5\ \text{m}$; no negative $v^2$ appears anywhere the object can reach; and $v^2=25-2x^2$ reduces to the familiar $v^2=u^2+2as$ if you ask a constant-$a$ question instead — the identity generalises rather than replaces.

<learning-block type="mistake" title="Integrating without the initial conditions">

Given $a=2t$, writing $v=t^2+C$ and then **dropping $C$** assumes the object happened to be at rest at the origin. If it actually started at $4.0\ \text{m/s}$, the correct answer is $v=t^2+4.0$, and every downstream number shifts. Each integration constant is a piece of physical information — the position or velocity at the moment the clock starts. Fix it explicitly, from the words of the problem, and you will never silently assume the wrong start state.

</learning-block>

## Try it yourself

**1. A block's position follows $x(t)=5t-t^2$ (metres, seconds). Find its velocity and acceleration, when it turns around, and how far it gets before doing so.**

<details><summary>Show the reasoning</summary>

$v=5-2t$; $a=-2.0\ \text{m/s}^2$ (constant, incidentally). Turning point when $v=0$: $t=2.5\ \text{s}$. There $x=5(2.5)-(2.5)^2=12.5-6.25=6.25\ \text{m}$ — the farthest point reached.

Everything after $2.5\ \text{s}$ retraces earlier positions; the displacement back toward the origin grows while path length keeps rising. The differentiation shows how one $x(t)$ contains the entire story.

</details>

**2. A particle's velocity is $v(t)=6-3t$ m/s and it starts at $x=0$ at $t=0$. How far does it travel before momentarily stopping, and what is its acceleration then?**

<details><summary>Show the reasoning</summary>

Integrate with $x(0)=0$: $x=6t-\tfrac32t^2$. It stops when $v=0$: $t=2.0\ \text{s}$. Up to then $x(t)$ is monotonic (velocity never changed sign), so the travel distance equals the displacement:

$$
x(2.0)=12-6=6.0\ \text{m}.
$$

Acceleration is $a=dv/dt=-3.0\ \text{m/s}^2$ — constant, so the constant-acceleration equations would have worked too; the calculus route reproduces them rather than contradicting them.

</details>

**3. A particle moving along $x$ has velocity related to position by $v=8-2x$ (SI units). Express its acceleration as a function of $x$ and evaluate it at $x=3.0\ \text{m}$.**

<details><summary>Show the reasoning</summary>

Use the chain rule in the position form: $a=v\,dv/dx$. With $v=8-2x$, $dv/dx=-2$, so

$$
a=(8-2x)(-2)=4x-16.
$$

At $x=3.0\ \text{m}$, $a=-4.0\ \text{m/s}^2$: pushing the particle back toward smaller $x$. Cross-check: $a=0$ at $x=4.0\ \text{m}$, exactly where $v=8-2(4)=0$ — an object that has stopped momentarily also has no acceleration there. The structure is consistent.

</details>

## Remember

- $v=dx/dt$ and $a=dv/dt$ are the whole of down-the-hill kinematics; differentiate, in that order.
- Integration needs one initial condition per constant of integration: usually $x(0)$ and $v(0)$.
- When $a$ is given versus position, convert with $a=v\,dv/dx$ and integrate $v\,dv=a\,dx$; it reproduces $v^2=u^2+2as$ in the constant case.
- Answers should reduce to familiar formulas when the special case is fed back in — a reliable self-check.
- Positions quadratic in $t$ mean constant acceleration; anything else means you must stay inside the calculus.

Six tools, from graphs to calculus, now cover straight-line motion. The review module puts them side by side so you can practise choosing — which is most of the battle.
