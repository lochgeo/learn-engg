## Why this belongs in an energy chapter

A body moving in a vertical circle changes height, so its speed changes. Energy conservation tells us the speed at different points; Newton’s second law in the radial direction tells us the tension or normal force needed to keep it on the circular path. You need **both** ideas.

<figure class="lesson-figure lesson-figure--portrait">
  <img src="images/work-energy/dragon-khan-loop.jpg" alt="A roller coaster train entering the top of a large vertical loop" loading="lazy" />
  <figcaption>At the top of a vertical loop the riders are upside down, yet gravity still points toward the centre of the loop. The track pushes inward as well; the limiting case is the one in which that inward push falls to zero. <em>Photo: Sotti, Wikimedia Commons (CC0).</em></figcaption>
</figure>

## 1. Forces point toward the centre

At the top of a circle of radius $R$, the centre is downward. For a mass on a light string, both gravity and tension point toward the centre:

$$
mg+T_{top}=m\frac{v_{top}^2}{R}.
$$

At the bottom, the centre is upward, so tension points inward but weight points outward:

$$
T_{bottom}-mg=m\frac{v_{bottom}^2}{R}.
$$

Do not use the same radial signs at the top and bottom. “Centripetal force” means the net inward force, not an additional force to draw.

## 2. The minimum speed to complete a loop

At the very top, the string is just taut when its tension is zero. Then gravity alone supplies the centripetal force:

$$
mg=m\frac{v_{top,min}^2}{R}\quad\Rightarrow\quad v_{top,min}=\sqrt{gR}.
$$

From bottom to top, the mass rises by $2R$. If there are no losses, energy conservation gives

$$
\frac12mv_{bottom}^2=\frac12mv_{top}^2+mg(2R).
$$

Using the minimum top speed,

$$
v_{bottom,min}^2=gR+4gR=5gR,\qquad v_{bottom,min}=\sqrt{5gR}.
$$

This is the minimum **at the bottom** for an ideal loop with a string, neglecting air resistance. For a rigid track, a normal force can also keep the object on the track, but the limiting contact condition at the top is likewise zero normal force.

## 3. Worked example

A $0.20\ \text{kg}$ bead on a string moves in a vertical circle of radius $0.80\ \text{m}$. Take $g=10\ \text{m/s}^2$ and suppose it just maintains a taut string at the top.

At the top, $v^2=gR=8$, so $v_{top}=2.83\ \text{m/s}$. At the bottom, $v^2=5gR=40$, so $v_{bottom}=6.32\ \text{m/s}$. The bottom tension is

$$
T_{bottom}=mg+m\frac{v_{bottom}^2}{R}=2+0.20\frac{40}{0.80}=12\ \text{N}=6mg.
$$

## 4. At an arbitrary angle

Measure $\theta$ from the lowest point. The height above the bottom is $R(1-\cos\theta)$, so energy gives

$$
\frac12mu^2=\frac12mv^2+mgR(1-\cos\theta),
$$

where $u$ is the speed at the bottom. The inward radial equation is

$$
T-mg\cos\theta=\frac{mv^2}{R}.
$$

At $\theta=0^\circ$ this is $T-mg=mv^2/R$; at $\theta=180^\circ$ it is $T+mg=mv^2/R$. Solving for the tension,

$$
T=\frac{mv^2}{R}+mg\cos\theta.
$$

A string must have $T\ge0$ everywhere. The top is the most demanding point, which is why the condition there controls the motion.

### String or track versus rod or wire

A string or the inside of a track can only pull or push inward, so it needs $v_{top}^2\ge gR$. A light rigid rod or a bead threaded on a wire can also push outward, so the top speed may be zero. Then the minimum speed at the bottom is set only by reaching the top:

$$
\frac12mu_{min}^2=mg(2R)\quad\Rightarrow\quad u_{min}=2\sqrt{gR}.
$$

For a string, the corresponding result is $\sqrt{5gR}$. Always check whether the contact is one-sided or two-sided before choosing either value.

## 5. Check each point

For any point in a vertical circle: (1) use energy to find speed from the height change; (2) choose inward as positive; (3) sum radial force components and set them equal to $mv^2/R$; (4) check whether the string tension or track normal force is physically possible. A string cannot push, so its tension cannot be negative.

## Practice

**A.** A small object moves in a vertical circle of radius $1.25\ \text{m}$. What is the minimum speed at the top for a just-taut string? Use $g=10\ \text{m/s}^2$.

<details><summary>Show the reasoning</summary>

$$
v_{top,min}=\sqrt{gR}=\sqrt{12.5}=3.54\ \text{m/s}.
$$
</details>

**B.** For the same circle, what minimum speed is needed at the bottom?

<details><summary>Show the reasoning</summary>

$$
v_{bottom,min}=\sqrt{5gR}=\sqrt{62.5}=7.91\ \text{m/s}.
$$
</details>

**C.** A $0.20\ \text{kg}$ bead is threaded on a smooth wire in a vertical circle of radius $0.80\ \text{m}$. What minimum speed at the bottom lets it reach the top? Use $g=10\ \text{m/s}^2$.

<details><summary>Show the reasoning</summary>

The wire can push as well as pull, so the bead may reach the top with essentially zero speed. Then

$$
\frac12mu_{min}^2=mg(2R)\quad\Rightarrow\quad u_{min}=2\sqrt{gR}=2\sqrt8\approx5.66\ \text{m/s}.
$$

For a string, the requirement would instead be $\sqrt{5gR}=\sqrt{40}\approx6.32\ \text{m/s}$.
</details>

## Take away

- Energy determines speed; radial force balance determines tension or normal force.
- At the limiting top point, tension is zero and $v^2=gR$.
- At any angle, $T=mv^2/R+mg\cos\theta$ with $\theta$ measured from the bottom.
- A string or one-sided track needs $\sqrt{5gR}$ at the bottom; a rod or wire needs only $2\sqrt{gR}$.
- State the assumptions: vertical circle, ideal string or smooth track, and negligible losses.
