## The force that hides in every contact

Idealised physics problems always say "frictionless". Real surfaces never are. Friction is the tangential force a surface exerts along the contact between two bodies, and it exists because no surface is truly smooth: microscopic bumps and welds interlock, and dragging one body across another means breaking and re-forming those tiny contacts continuously. Friction is why you grip, why brakes stop cars, and why ladder tops are pressed against walls even with nothing resting on them. Master its two regimes and almost every contact problem becomes routine.

## 1. Static versus kinetic friction

Friction has two regimes, and mixing them is the most common error in the whole chapter.

**Static friction** acts when there is *no relative sliding* between the surfaces. It adjusts itself, up to a maximum, to whatever value prevents sliding:

$$
f_s \le \mu_s N,
$$

with equality only at the verge of slipping. If a $15.0\ \text{N}$ push leaves a crate motionless, static friction is exactly $15.0\ \text{N}$ — not a fixed formula's output.

**Kinetic friction** acts once sliding *has* begun. It is (approximately) independent of speed and contact area:

$$
f_k = \mu_k N, \qquad \mu_k < \mu_s \text{ typically}.
$$

The inequality $\mu_k < \mu_s$ matches experience: the hardest shove is the one that just starts the slide; keeping it sliding takes less.

$N$ is the normal force between the surfaces, and $\mu_s$, $\mu_k$ are dimensionless **coefficients of friction** depending on the material pair only (steel on steel, rubber on dry concrete, and so on). Typical values range from about $0.02$ (ice on ice) to above $1$ (rubber on dry road).

<learning-block type="concept" title="What friction is not">

Friction does **not** depend on the apparent contact area. A brick lying flat and the same brick on edge, with the same weight, experience nearly the same friction — the smaller real contact area is rougher in consequence, and the product of the two changes barely at all. This also explains why wide tyres do not, in a simple friction model, grip better than narrow ones on the same road.

</learning-block>

## 2. The force grows, then the block moves

A $6\ \text{kg}$ crate rests on a floor with $\mu_s = 0.4$ and $\mu_k = 0.3$. A gradually increasing horizontal force $P$ is applied. Take $g = 10\ \text{m/s}^2$.

- For $P \le 24\ \text{N}$: the crate does not move and $f_s = P$ exactly. The *demand* and the *supply* match.
- At $P = \mu_s N = 0.4 \times 60 = 24\ \text{N}$: the crate is at the verge of sliding.
- For $P = 24\ \text{N}$ maintained: the crate slides, kinetic friction drops to $f_k = 0.3 \times 60 = 18\ \text{N}$, and the net force is $24 - 18 = 6\ \text{N}$, giving

$$
a = \frac{6}{6} = 1\ \text{m/s}^2.
$$

*Sanity check:* the acceleration should be small on a modest surplus, and it is. Also note the jerky start any heavy cupboard gives when you push it past its limit — the physics of $\mu_k < \mu_s$ is in your hands whenever you drag one.

## 3. The angle of friction

Angle of friction, $\lambda$: the angle that the **total contact reaction** (normal plus friction) makes with the normal when slipping is just about to start.

At the verge of sliding on a level floor under a horizontal pull $P$: the contact forces are $N$ (normal) and $f_s = \mu_s N$ (tangential). Their resultant $R$ makes an angle $\lambda$ with the normal, where

$$
\tan\lambda = \frac{f_s}{N} = \frac{\mu_s N}{N} = \mu_s.
$$

So $\tan\lambda = \mu_s$: the whole of static friction knowledge is compressed into one angle. This geometry reappears as a quick way to think about wedges, ladders and banking.

## 4. The angle of repose

Angle of repose, $\theta_r$: the largest angle of incline at which a block stays put (without any applied force) on the incline.

Balance the components of weight along and perpendicular to the incline:

$$
mg\sin\theta_r = \mu_s\, mg\cos\theta_r
\quad\Rightarrow\quad
\tan\theta_r = \mu_s.
$$

So the two angles are numerically equal:

$$
\theta_r = \lambda = \arctan \mu_s.
$$

Any slope steeper than $\theta_r$ (for a dry, unaided block) makes the block slide; any slope less steep never will, whatever the block's mass — the mass cancels in both force balances.

## 5. Friction on inclines

On a slope at angle $\theta$, the weight splits as $mg\sin\theta$ down the slope and $mg\cos\theta$ pushing into it, so the available friction is governed by $N = mg\cos\theta$.

- **Block just holds on the slope:** $mg\sin\theta \le \mu_s mg\cos\theta$, i.e. $\tan\theta \le \mu_s$ — the repose condition again.
- **Block slides down with kinetic friction:** net force along the slope is

$$
m g \sin\theta - \mu_k mg\cos\theta = ma
\quad\Rightarrow\quad
a = g(\sin\theta - \mu_k\cos\theta).
$$

**Worked example.** A $2\ \text{kg}$ block slides down a $30^\circ$ incline with $\mu_k = 0.25$. Take $g = 10\ \text{m/s}^2$.

$$
a = 10(\sin 30^\circ - 0.25\cos 30^\circ)
   = 10(0.5 - 0.25 \times 0.866)
   \approx 2.8\ \text{m/s}^2.
$$

*Sanity check.* On a frictionless $30^\circ$ slope $a$ would be $5\ \text{m/s}^2$; friction cuts it roughly in half here. A negative answer would mean the block cannot actually slide — check $\tan\theta$ against $\mu_k$ first: $0.577 > 0.25$, so it does slide.

- **Block pushed *up* the incline at steady speed:** friction reverses to oppose the upward push, so the required force is $P = mg(\sin\theta + \mu_k\cos\theta)$ — uphill friction and the slope component now cooperate against you.

<learning-block type="mistake" title="Friction does not always oppose motion">

It opposes **relative sliding between the surfaces in contact** — sometimes in the same direction as a body's overall motion.

- When you walk, your foot pushes *backward* on the ground; static friction pushes your foot *forward*, in your direction of travel. Without it you could not accelerate.
- A box on an accelerating conveyor belt is pushed forward by static friction.
- A car wheel driving the car produces a forward friction force from the road.

Whether friction lies with or against your motion depends on which surface you compare with. Always ask: if contact suddenly became perfectly smooth, which way would one surface *slide across* the other? Friction acts to prevent exactly that sliding.

</learning-block>

## Try it yourself

**A.** A $4\ \text{kg}$ block on a level floor is pulled with $10\ \text{N}$ horizontally, and it remains at rest. State the friction force, then find how much force is needed to start it moving if $\mu_s = 0.6$. ($g = 10\ \text{m/s}^2$.)

<details><summary>Show the reasoning</summary>

Static friction currently equals the applied force: $f_s = 10\ \text{N}$ (well below its maximum). The maximum available is $\mu_s N = 0.6 \times 40 = 24\ \text{N}$, so at least $24\ \text{N}$ is needed to start motion. Note how the *same* friction force has different values in the two situations: static friction is demand-driven.
</details>

**B.** A block slides down an incline at constant speed when the incline angle is $25^\circ$. What is $\mu_k$?

<details><summary>Show the reasoning</summary>

Constant speed on the way down means zero acceleration along the slope: $mg\sin 25^\circ = \mu_k\,mg\cos 25^\circ$, so $\mu_k = \tan 25^\circ \approx 0.47$. Mass is irrelevant — the same answer holds for a pebble or a sledge.
</details>

**C.** A broad brick weighing $20\ \text{N}$ is dragged across a floor by a force at $30^\circ$ above the horizontal. If $\mu_k = 0.30$, find the kinetic friction. ($g = 10\ \text{m/s}^2$, so $N$ comes from the vertical balance.)

<details><summary>Show the reasoning</summary>

The pull carries an upward component, so the vertical balance is $N = 20 - F\sin 30^\circ$. Sliding needs the horizontal component to beat kinetic friction: $F\cos 30^\circ = (20 - 0.5F) \times 0.3$. Solving: $0.866F = 6 - 0.15F$, so $F \approx 5.9\ \text{N}$ and $N \approx 17.0\ \text{N}$, giving $f_k = 0.3 \times 17.0 \approx 5.1\ \text{N}$. Lifting slightly as you drag genuinely lightens the friction load — a physics reason for an everyday trick.
</details>

## Remember

- Static friction is $f_s \le \mu_s N$; it takes whatever value the situation demands, up to the limit.
- Kinetic friction is $f_k = \mu_k N$, fixed by the normal force, usually below the static limit.
- $\tan(\text{angle of friction}) = \tan(\text{angle of repose}) = \mu_s$; on slopes, sliding begins when $\tan\theta > \mu_s$.
- Friction opposes **relative sliding at the contact**, which can act forward on the body.
- With several bodies joined by strings or touching surfaces, the forces spread across them — the next module shows how to attack a whole system at once.
