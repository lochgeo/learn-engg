## What really keeps you on the curve

Take a curve too fast in a car and you slide *outward* — or so it seems. In truth nothing ever pushes you outward: the road beneath you simply cannot push hard enough *inward*, and the car continues in a straighter line than the curve demands. Uniform circular motion, met kinematically in Motion in a Plane, needs a net inward acceleration $v^2/r$; this module is about which **real** force supplies it, and how hard it can be pushed before the turn fails.

## 1. Centripetal force is a role, not a force

For a body of mass $m$ moving at speed $v$ in a circle of radius $r$, the net force toward the centre must be

$$
F_c = \frac{mv^2}{r} = m\omega^2 r .
$$

There is no separate "centripetal force" to add to a free-body diagram. The phrase names a **job** — the inward component of the net force — and real forces fill it:

| Situation | Real force(s) supplying the inward pull |
| --- | --- |
| Car turning on a level road | static friction from the road |
| Car on a banked road | horizontal component of the normal force (plus friction) |
| Conical pendulum | horizontal component of string tension |
| Satellite in orbit | gravity |
| Stone whirled on a string | string tension |

Write the radial equation exactly as with any other axis — inward chosen positive:

$$
\sum F_{r} = \frac{mv^2}{r}.
$$

Notice the asymmetry with straight-line problems: here the *kinematics* ($v^2/r$) sets what the net force must be, and the physical situation must supply at least that much. If it cannot, the motion leaves the circle.

<learning-block type="concept" title="Why 'centrifugal force' is not on the diagram">

The outward slide on a fast corner is an illusion of viewpoint. In an inertial frame the car's body turns inward while your body, with too little friction on the seat, tends to keep its straight-line path — so relative to the car you drift outward. No real force acts outward on you; the "centrifugal force" is bookkeeping you may *choose* to invent when sitting in a rotating (non-inertial) frame, and the next module treats exactly when that is legitimate.

</learning-block>

## 2. Turning on a level road: the grip limit

On a flat curve, static friction alone bends the car's path. The road can supply at most $f_{\max} = \mu_s N = \mu_s m g$, so the radial equation $\frac{mv^2}{r} \le \mu_s m g$ caps the safe speed:

$$
v_{\max} = \sqrt{\mu_s r g}.
$$

Notice what drops out: **the mass**. A fully loaded truck and an empty bicycle grip identically, to this approximation, because added weight brings both more needed centripetal force and more available friction in the same proportion.

**Worked example.** A level bend of radius $30\ \text{m}$ is negotiated with $\mu_s = 0.6$ (dry asphalt, ordinary tyres). Take $g = 10\ \text{m/s}^2$.

$$
v_{\max} = \sqrt{0.6 \times 30 \times 10} = \sqrt{180} \approx 13.4\ \text{m/s} \approx 48\ \text{km/h}.
$$

*Sanity check.* Higher speeds need sharper grip: at $20\ \text{m/s}$ the demand would be $mv^2/r = m \times 400/30 = 13.3m\ \text{N}$ against a ceiling of $6.0m\ \text{N}$ — more than double the available friction, so the turn fails and the car slides outward. Wet roads (smaller $\mu$) and tighter bends (smaller $r$) both lower the bar quadratically.

## 3. Banked roads: let the normal force help

Tilt the road surface inward by angle $\theta$, and the normal force — always perpendicular to the surface — gains an inward horizontal component $N\sin\theta$ that costs no friction at all.

For the *design speed*, where no lateral friction is required, resolve the normal force radially and vertically:

$$
N\sin\theta = \frac{mv^2}{r}, \qquad N\cos\theta = mg
\quad\Rightarrow\quad
\tan\theta = \frac{v^2}{rg}.
$$

**Worked example.** Design a frictionless-safe bend for $v = 20\ \text{m/s}$ on radius $r = 40\ \text{m}$:

$$
\tan\theta = \frac{400}{400} = 1 \quad\Rightarrow\quad \theta = 45^\circ.
$$

Steep, you may think — but racing tracks bank very steeply, and the formula shows why: at twice the speed the required tangent quadruples.

**The general case with friction.** For speeds *above* the design speed, the car tends to drift outward *up the bank* and friction acts down the slope to prevent that. Combining the radial and vertical balances then gives the true maximum safe speed:

$$
v_{\max}^2 = rg\,\frac{\mu + \tan\theta}{1 - \mu \tan\theta},
$$

with $\mu$ the coefficient of static friction between tyres and road. As $\theta \to 0$ this reduces to the level-road result (§2), and it grows with both $\theta$ and $\mu$ — banking and grip stack in your favour. (For speeds below the design speed friction points *up* the bank instead, and the same algebra bounds $v_{\min}$.) The derivation is just a force balance with $N$ eliminated; the review module walks through it once.

## 4. The conical pendulum

A bob swung in a horizontal circle at constant speed on a string that traces a cone: weight pulls down, tension pulls along the string at angle $\theta$ to the vertical.

Vertical equilibrium and the radial equation give

$$
T\cos\theta = mg, \qquad T\sin\theta = \frac{mv^2}{r} = m\omega^2 r,
$$

with $r = L\sin\theta$ for string length $L$. Eliminating $T$ and $v$:

$$
\tan\theta = \frac{\omega^2 r}{g} = \frac{\omega^2 L \sin\theta}{g}
\quad\Rightarrow\quad
\boxed{\;\omega^2 = \frac{g}{L\cos\theta}\;}
$$

since only $\sin\theta = 0$ invalidates the division. The period is $T_{\text{per}} = 2\pi\sqrt{L\cos\theta/g}$ — it depends on the *vertical depth* $L\cos\theta$ of the swing, not on the bob's mass, and a longer, flatter cone swings more slowly.

**Worked example.** A $0.50\ \text{kg}$ bob swings on a $0.50\ \text{m}$ string at $30^\circ$ to the vertical. Take $g = 10\ \text{m/s}^2$.

- Radius: $r = 0.50 \sin 30^\circ = 0.25\ \text{m}$. Depth: $L\cos 30^\circ = 0.433\ \text{m}$.
- Angular speed: $\omega = \sqrt{g/(L\cos\theta)} = \sqrt{10/0.433} \approx 4.81\ \text{rad/s}$.
- Speed: $v = \omega r \approx 1.2\ \text{m/s}$.
- Tension: $T = mg/\cos\theta = 5.0/0.866 \approx 5.8\ \text{N}$ — more than the bob's weight, since tension must both hold it *up* and swing it *round*.

## 5. Maximum safe speed: the general recipe

Whenever the question says "maximum" or "just leaving contact", the physics has one signature: some force $F \ge 0$ has been driven exactly to zero. With that boundary condition the radial equation pins the speed.

1. Draw the FBD in the plane of the circle.
2. Locate which force could vanish at the limit (friction at $\mu N$, contact normal $N \to 0$, string tension $T \to 0$).
3. Set it to zero, apply $\sum F_r = mv^2/r$ inward, solve for the limiting speed.
4. Sanity-check the number against highway reality: $v = \sqrt{\mu rg}$ for ordinary cars gives tens of $\text{km/h}$ on city radii, hundreds only on banked, wide-radii tracks.

## Try it yourself

**A.** A cyclist leans into a flat bend of radius $50\ \text{m}$ where the grip coefficient is $0.5$. Find the maximum safe speed in $\text{m/s}$ and $\text{km/h}$.

<details><summary>Show the reasoning</summary>

$v_{\max} = \sqrt{\mu rg} = \sqrt{0.5 \times 50 \times 10} = \sqrt{250} \approx 15.8\ \text{m/s} \approx 57\ \text{km/h}$. Beyond this speed the required inward force exceeds static friction, and the cyclist cannot make the corner.
</details>

**B.** A conical pendulum has string length $1.0\ \text{m}$ and swings at $37^\circ$ to the vertical (take $\cos 37^\circ = 0.8$, $\sin 37^\circ = 0.6$). Find the circle's radius, the period and the ratio $T/(mg)$.

<details><summary>Show the reasoning</summary>

$r = L\sin 37^\circ = 0.6\ \text{m}$; depth $= L\cos 37^\circ = 0.8\ \text{m}$. So $\omega = \sqrt{10/0.8} \approx 3.54\ \text{rad/s}$ and the period is $2\pi/\omega \approx 1.8\ \text{s}$. Tension: $T = mg/\cos\theta = 1.25\,mg$. Tension always exceeds weight unless the string hangs vertically ($\theta = 0$).
</details>

**C.** A bend of radius $100\ \text{m}$ is to carry traffic safely at $72\ \text{km/h}$ with no reliance on friction. What banking angle should the road have?

<details><summary>Show the reasoning</summary>

Convert: $72\ \text{km/h} = 20\ \text{m/s}$. Design condition: $\tan\theta = v^2/(rg) = 400/(100 \times 10) = 0.4$, so $\theta \approx 21.8^\circ$. Slower traffic simply leans on friction (pointing up the bank); faster traffic needs extra grip or a wider radius.
</details>

## Remember

- "Centripetal force" is the net inward force computed from *real* forces: friction, normal, tension or gravity.
- Level roads cap speed at $v = \sqrt{\mu_s rg}$; mass drops out of the limit.
- A banked road carries its design speed with $\tan\theta = v^2/(rg)$ and no friction at all.
- The conical pendulum period $2\pi\sqrt{L\cos\theta/g}$ depends on swing depth, not bob mass.
- "Maximum safe speed" questions hide a force driven to zero — find which, set it to zero, balance radially.
- What happens to the whole apparatus of Newton's laws inside an accelerating lift or a turning bus? The next module stands inside those frames and patches the laws.
