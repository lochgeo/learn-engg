## Why this belongs in an energy chapter

A body moving in a vertical circle changes height, so its speed changes. Energy conservation tells us the speed at different points; Newton’s second law in the radial direction tells us the tension or normal force needed to keep it on the circular path. You need **both** ideas.

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

## 4. Check each point

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

## Take away

- Energy determines speed; radial force balance determines tension or normal force.
- At the limiting top point, tension is zero and $v^2=gR$.
- State the assumptions: vertical circle, ideal string or smooth track, and negligible losses.
