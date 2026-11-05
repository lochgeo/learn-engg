## The wheel's quiet trick

Slide a box across the floor and friction fights you the whole way. Roll the same load on wheels and it moves with almost no complaint. The trick is that a rolling wheel's contact patch never slides along the road: its lowest point is, at that instant, **at rest**. Static friction — the grip-based kind that does no work — is all the wheel needs. This module pins down the rolling condition, accounts for the energy budget, works the incline, and settles the eternal exam question: which object wins the race down the slope?

## 1. The rolling condition

For a wheel of radius $R$ rolling on stationary ground, the centre of mass moves at $v_{cm}$ while the body spins at $\omega$. **Rolling without slipping** means the contact point's ground-frame velocity is zero, which forces the exact matching

$$
\boxed{\ v_{cm}=\omega R\ }
$$

Why? The contact point has two velocity contributions: $+v_{cm}$ from translation and $-\omega R$ from spin (the bottom point moves backwards relative to the centre). They cancel only when $v_{cm}=\omega R$.

The condition is a *velocity constraint*, not a force law. It holds while static friction (or gear teeth, or a rack) prevents sliding; if the demanded static friction exceeds $\mu_sN$, the wheel skids, the condition breaks, and kinetic friction takes over. A skidding wheel has $v_{cm}\neq\omega R$, burns rubber, and transfers mechanical energy to heat.

Every particle in a rolling wheel traces a curtate cycloid, but the distribution of speeds is memorable: top of the wheel $2v_{cm}$, centre $v_{cm}$, contact point $0$.

## 2. The kinetic energy budget

Insert $v_{cm}=\omega R$ into $\tfrac12Mv_{cm}^2+\tfrac12I_{cm}\omega^2$ and factor out $v_{cm}$:

$$
K=\tfrac12Mv_{cm}^2\left(1+\frac{I_{cm}}{MR^2}\right)
=\tfrac12Mv_{cm}^2\left(1+\frac{k^2}{R^2}\right).
$$

The single number $I_{cm}/MR^2=k^2/R^2$ — call it the **shape factor** — says how rotational-hungry the body is. For a solid sphere it is $2/5$, a disc or solid cylinder $1/2$, a ring $1$, a sliding block $0$.

Two useful corollaries for a body released from a height $h$ and rolling to the bottom with no losses:

$$
Mgh=\tfrac12Mv^2\left(1+\frac{I}{MR^2}\right)
\quad\Rightarrow\quad
v^2=\frac{2gh}{1+I/MR^2}.
$$

A rolling body always arrives *slower* than a frictionless slider, because part of the height's energy is pinned in spin. The rotational share of the kinetic energy is $\dfrac{I/MR^2}{1+I/MR^2}$ of the total — for a solid sphere exactly $2/7$.

<learning-block type="example" title="Worked numbers: sphere down a ramp">

A solid sphere ($R=0.10\ \text{m}$) starts from rest and rolls without slipping down a $30^\circ$ ramp whose top is $h=0.70\ \text{m}$ above the bottom.

**Speed at the bottom** (energy):

$$
v^2=\frac{2gh}{1+2/5}=\frac{(2)(10)(0.70)}{7/5}=\frac{14}{1.4}=10\ \text{m}^2/\text{s}^2,
\qquad v=3.16\ \text{m/s}.
$$

**Spin rate:** $\omega=v/R=3.16/0.10=31.6\ \text{rad/s}$ — about $5$ revolutions per second, a believable wheel.

**Direction check:** the translational share is $5/7$ of the height energy, rotational $2/7$; for $M=1\ \text{kg}$: $\tfrac12(1)(10)=5.0\ \text{J}$ translation and $\tfrac12\cdot\tfrac25\cdot (1)(0.10^2)(31.6^2)=2.0\ \text{J}$ rotation, summing to $7.0\ \text{J}=mgh$. ✓

</learning-block>

## 3. Rolling down an incline with Newton's laws

Put names on a solid sphere of mass $M$ rolling down an incline of angle $\theta$: $mg\sin\theta$ forward along the slope, static friction $f$ acting **up** the slope, normal $N=mg\cos\theta$.

Force equation along the slope:

$$
mg\sin\theta-f=Ma .
$$

Torque about the centre of mass (only friction has a lever arm):

$$
fR=I\alpha=I\frac{a}{R}
\quad\Rightarrow\quad
f=\frac{I}{R^2}\,a .
$$

Substituting,

$$
a=\frac{g\sin\theta}{1+I/MR^2},
\qquad
f=\frac{g\sin\theta\cdot I/R^2}{1+I/MR^2}.
$$

For the solid sphere ($I=\tfrac25MR^2$):

$$
a=\frac{5}{7}g\sin\theta,
\qquad
f=\frac{2}{7}Mg\sin\theta .
$$

Note the striking cancellation: $M$ cancels from the acceleration, and even $R$ never appears. Heavy and light, large and small, identical spheres roll tie.

**Friction must be available.** Static friction needs $f\le\mu_sN=\mu_sMg\cos\theta$, so for the sphere

$$
\mu_s\ge\frac{2}{7}\tan\theta .
$$

For the $30^\circ$ ramp above, $\mu_s\ge(2/7)(\tan30^\circ)\approx0.17$. A slicker ramp than that and the sphere *slides* rather than rolls — the same object, different regime, and the module-4 energy split no longer applies because kinetic friction now does negative work.

**Sanity check on friction's sign.** Why does friction point *up* the slope, opposing the motion? It does not oppose the motion — it opposes *slipping*. Left to gravity alone, the sphere's material at the contact would slide down-slope (spin-up lagging); static friction therefore pushes up-slope, which simultaneously slows the drift (smaller $a$) and creates the clockwise spin-up torque (increasing $\omega$) to satisfy $v=\omega R$. Friction is the *honest matchmaker* of translation and rotation, not the enemy of either.

## 4. The race down the slope

From $a=\dfrac{g\sin\theta}{1+I/MR^2}$: **only the shape factor matters**. Mass and radius are absent; the models agree that a marble and a cannonball roll at the same rate.

| Object down the incline | $I/MR^2$ | $a/(g\sin\theta)$ | $v^2$ at bottom (height $h$) |
| --- | --- | --- | --- |
| Frictionless block (slides) | — | $1$ | $2gh$ |
| Solid sphere | $2/5$ | $5/7\approx0.71$ | $\tfrac{10}{7}gh\approx1.43\,gh$ |
| Hollow sphere | $2/3$ | $3/5=0.60$ | $\tfrac65gh=1.2\,gh$ |
| Disc or solid cylinder | $1/2$ | $2/3\approx0.67$ | $\tfrac43gh\approx1.33\,gh$ |
| Ring or hollow cylinder | $1$ | $1/2=0.50$ | $gh$ |

Nothing that rolls beats a frictionlessly sliding block — the slider converts *all* its height energy to translation. And among rollers, lower shape factor wins: **solid sphere beats disc beats hollow sphere beats ring**, every time, independent of mass, radius, length or density provided they all roll without slipping.

<learning-block type="mistake" title="Two rolling-regime errors">

The classic double error: (1) using kinetic friction $\mu_kN$ in a rolling problem — rolling without slipping means static friction, whose value is *found from the equations*, not set to $\mu_sN$; (2) forgetting the constraint $a=R\alpha$ in $\tau=I\alpha$, which decouples translation from rotation and wrecks the algebra. Also remember $a$ is *not* $g\sin\theta$ unless the incline is frictionless (block case); in rolling the needed friction always trims the acceleration.

</learning-block>

## Try it yourself

**Q1.** A solid cylinder of radius $0.20\ \text{m}$ rolls without slipping at $v=4.0\ \text{m/s}$. Find its angular speed, and the speed of a point at the very top of the cylinder.

<details><summary>Show the reasoning</summary>

$$
\omega=\frac{v}{R}=\frac{4.0}{0.20}=20\ \text{rad/s}.
$$

The top point leads with $v+\omega R=4.0+4.0=8.0\ \text{m/s}$ (translation plus spin both forward there). The contact point trails with $4.0-4.0=0$ — the whole magic of rolling.
</details>

**Q2.** A ring, a solid cylinder and a solid sphere — equal masses and radii — are released together on a $30^\circ$ incline with ample friction. Rank their arrival times at the bottom, and compute the arrival speed of the ring from a height of $0.90\ \text{m}$.

<details><summary>Show the reasoning</summary>

Shape factors: sphere $2/5$, cylinder $1/2$, ring $1$; smaller factor ⇒ larger $a$ ⇒ first to finish. Order: **sphere first, cylinder second, ring last** (all behind a frictionless slider, all tied within their own kind at any mass or size).

Ring arrival speed:

$$
v^2=\frac{2gh}{1+1}=\frac{(2)(10)(0.90)}{2}=9.0\ \text{m}^2/\text{s}^2,\qquad v=3.0\ \text{m/s}.
$$

The ring converts only half its potential energy into translation — the worst shape factor in the table — which is exactly half of what a slider would achieve from the same height ($\sqrt{2gh}=\sqrt{18}\approx4.2\ \text{m/s}$).
</details>

**Q3.** A solid sphere rolls down a $45^\circ$ slope whose coefficient of static friction is $0.25$. What actually happens?

<details><summary>Show the reasoning</summary>

Rolling demands $\mu_s\ge\tfrac27\tan45^\circ=\tfrac27\approx0.286$. Only $0.25$ is available, so *pure rolling is impossible*: the sphere slides, kinetic friction takes over, and the motion becomes a combined slide-and-spin problem with $\mu_kN$ doing negative work (assuming $\mu_k\approx\mu_s$). The lesson: "rolls without slipping" is a *collaboration* between shape and friction — the more rotational-hungry the object or the steeper the slope, the better the surface must grip.
</details>

## Remember

- Rolling without slipping means $v_{cm}=\omega R$: contact point momentarily at rest, static friction doing zero work.
- $K=\tfrac12Mv_{cm}^2(1+k^2/R^2)$; from height $h$, $v^2=\dfrac{2gh}{1+k^2/R^2}$ — always slower than a frictionless slider.
- Down an incline $a=\dfrac{g\sin\theta}{1+I/MR^2}$ with static friction $f=\dfrac{Mg\sin\theta\,(I/MR^2)}{1+I/MR^2}$ pointing **up** the slope; pure rolling needs $\mu_s\ge\dfrac{I/MR^2}{1+I/MR^2}\tan\theta$ (for a sphere, $\tfrac27\tan\theta$).
- The race is decided by shape alone: sphere ($5/7$) beats disc ($2/3$) beats hollow sphere ($3/5$) beats ring ($1/2$) — mass and radius are irrelevant.
- When spin-out changes an object's own $I$, a new conservation law takes over — angular momentum, up next.
