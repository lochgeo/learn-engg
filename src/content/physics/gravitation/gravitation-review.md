## Your study plan for this chapter

Gravitation is one force wearing several costumes — inverse-square pull, field and potential, varying $g$, Kepler's geometry, orbital ledgers, escape speeds. A first pass plus this check runs about three hours:

1. **Newton's law of gravitation** — 20 min
2. **Field, potential and potential energy** — 24 min
3. **How $g$ varies** — 20 min
4. **Kepler's laws** — 22 min
5. **Orbital speed and energy** — 22 min
6. **Escape speed and satellites** — 22 min
7. **This mastery check** — 25 min

Work each module with a blank page: derive the star formulas ($g=GM/R^2$, $V=-GM/r$, $T^2=4\pi^2a^3/GM$, $v=\sqrt{GM/r}$, $E=-GMm/2r$, $v_e=\sqrt{2GM/r}$) from memory before ticking it off. Then attempt the following ten questions cold.

## First choose the tool

| Clue in the question | Reach for |
| --- | --- |
| Two masses and a distance | $F=Gm_1m_2/r^2$, vector superposition |
| Several masses and one point | Potentials as scalar sums; fields as vector sums |
| Inside or outside a sphere or shell | Shell theorem: outside acts as a centre point; inside a shell, zero field and constant $V$ |
| $g$ at height $h$ | Exact ratio $gR^2/(R+h)^2$; approximation $g(1-2h/R)$ only for $h\ll R$ |
| $g$ at depth $d$, uniform planet | $g(1-d/R)$, zero at the centre |
| Planet given by density $\rho$ and radius | $g\propto\rho R$, $v_e\propto\rho^{1/2}R$ |
| Period and orbit size | $T^2=\dfrac{4\pi^2}{GM}a^3$, matched against a known orbit |
| Speeds at perigee and apogee | Area law: $v_pr_p=v_ar_a$, ratio $(1+e)/(1-e)$ |
| Circular-orbit speed or period | $v=\sqrt{GM/r}$, $T=2\pi\sqrt{r^3/GM}$ |
| Energy ledger of a satellite | $K=\dfrac{GMm}{2r}$, $U=-\dfrac{GMm}{r}$, $E=-\dfrac{GMm}{2r}$, with $K=-E$ and $U=2E$ |
| Raising or lowering an orbit | $\Delta E=\dfrac{GMm}{2}\left(\dfrac{1}{r_1}-\dfrac{1}{r_2}\right)$ |
| Leaving for good | $v_e=\sqrt{2GM/r}=\sqrt2\,v_{\text{orb}}$ |

## Mastery check

Work each question before opening its answer. Use $g=10\ \text{m/s}^2$ and $R=6400\ \text{km}$ unless stated otherwise.

### 1. A grubby little force

What is the attraction between a $1\ \text{kg}$ bouquet-flower pot and a $2\ \text{kg}$ statuette whose centres stand $1\ \text{m}$ apart?

<details><summary>Answer and reasoning</summary>

$$
F=\frac{G(1)(2)}{1^2}=2G=1.33\times10^{-10}\ \text{N}.
$$

Ten orders of magnitude below everyday forces: to feel gravity, you need planets.
</details>

### 2. A blank spot between two masses

Masses of $8\ \text{kg}$ and $72\ \text{kg}$ sit $10\ \text{m}$ apart. Locate the point on the line joining them where their pulls cancel.

<details><summary>Answer and reasoning</summary>

Set $G(8)/x^2=G(72)/(10-x)^2$, so $(10-x)/x=\sqrt{72/8}=3$, giving $x=2.5\ \text{m}$ from the smaller mass. Check: $8/2.5^2=1.28$ and $72/7.5^2=1.28$, equal fields. The null point hugs the weaker mass, closer to it than to the stronger.
</details>

### 3. Potential without vectors

Two $4\ \text{kg}$ spheres sit $2\ \text{m}$ apart. Find the potential and the field strength at the midpoint.

<details><summary>Answer and reasoning</summary>

Each is $1\ \text{m}$ from the midpoint: $V=-G(4)/1-G(4)/1=-8G\approx-5.3\times10^{-10}\ \text{J/kg}$. The two field vectors are equal and opposite, so $g=0$ there. Potential is a scalar number; the field needs directions — a midpoint is exactly where signs make the difference.
</details>

### 4. A lighter world, same size

A planet has Earth's radius but half the average density. Find its surface gravity.

<details><summary>Answer and reasoning</summary>

With $M=\rho\cdot\frac43\pi R^3$, half the density halves the mass, so $g'=\frac{g}{2}=5\ \text{m/s}^2$. Alternatively $g\propto\rho R$ with $R$ unchanged. Escape speed scales as $\sqrt{\rho}$: bigger planets are not just heavier to escape, they are denser deep down.
</details>

### 5. Down the mine

At what depth is $g$ a quarter of its surface value (uniform Earth assumed)?

<details><summary>Answer and reasoning</summary>

$g'=g(1-d/R)=g/4$ requires $d=3R/4=4800\ \text{km}$. Note this is a *depth* of three-quarters of the radius: within a uniform Earth, only the inner quarter-radius core still pulls. Real Earth physics bends this curve, as the module explained.
</details>

### 6. Kepler without a calculator

An asteroid's semi-major axis is $9\ \text{AU}$. What is its orbital period?

<details><summary>Answer and reasoning</summary>

Match against Earth: $T=1\ \text{yr}\times(9/1)^{3/2}=27\ \text{yr}$. Kepler's ratio method never needs $GM$ or $G$ in numbers.
</details>

### 7. Orbit facts at two Earth radii

A satellite circles at $r=2R$. Find its speed and period.

<details><summary>Answer and reasoning</summary>

$v=\sqrt{GM/2R}=\sqrt{gR/2}=\sqrt{3.2\times10^7}\approx5.7\ \text{km/s}$. Then $T=2\pi r/v=2\pi(1.28\times10^7)/5660\approx1.42\times10^4\ \text{s}$, about $3.9\ \text{h}$. Slower than $7.9\ \text{km/s}$ and longer than $85\ \text{min}$: big radius, both ways softer.
</details>

### 8. Half the mass, half the planet

A planet has $\frac14$ of Earth's mass packed into $\frac12$ of Earth's radius. Find its escape speed.

<details><summary>Answer and reasoning</summary>

$v_e\propto\sqrt{M/R}$: the ratio is $\sqrt{(1/4)/(1/2)}=\sqrt{1/2}$, so $v_e=11.2/\sqrt2\approx7.9\ \text{km/s}$. Despite being lighter, packing it tighter keeps the escape speed respectable — density does the escaping work.
</details>

### 9. One scale, two cities

A $2\ \text{kg}$ video camera is weighed at the equator and then at the pole (rotation effect only). How do the readings differ?

<details><summary>Answer and reasoning</summary>

$\Delta g=\omega^2R\cos^2\lambda$: the reduction is $0.034\ \text{m/s}^2$ at the equator and zero at the poles, so the equatorial reading is lower by $2\times0.034\approx0.07\ \text{N}$, about $0.3\ \%$ of the weight. Add the bulge and the real gap is nearer $0.1\ \text{N}$.
</details>

### 10. Orbit-lifting bill

A $500\ \text{kg}$ satellite in a circular orbit at $r=2R$ is raised to $r=3R$. How much energy must the thrusters supply?

<details><summary>Answer and reasoning</summary>

$E(2R)=-gRm/4=-10(6.4\times10^6)(500)/4=-8.0\times10^9\ \text{J}$; $E(3R)=-gRm/6=-5.33\times10^9\ \text{J}$. So

$$
\Delta E=8.0\times10^9-5.33\times10^9\approx2.7\times10^9\ \text{J}.
$$

The orbit is *less tightly bound* after the burn — a smaller-magnitude, still-negative total.
</details>

<learning-block type="mistake" title="Errors that survived the check">

- **Radius versus semi-major axis** in $T^2\propto a^3$ whenever the orbit is not circular.
- **Potentials added like fields** (track the signs) or **fields added like potentials** (track the directions).
- **Approximations used outside their range**: $g(1-2h/R)$ beyond small $h$; $U=mgh$ beyond small heights.
- **Sign of the total energy** flipped when quoting binding energy: $-E$ is the bill, positive to pay.

</learning-block>

## Self-check

You are ready for the timed paper when you can:

- derive $g'=gR^2/(R+h)^2$ and $g'=g(1-d/R)$ and state each one's range of validity;
- add potentials and fields correctly and know when each superposition is the cheap route;
- explain Kepler's second law as zero torque, not as energy conservation;
- reproduce the satellite ledger $K=-E$, $U=2E$ and apply $\Delta E$ for orbit changes;
- convert between escape speed and orbital speed with $\sqrt2$ and use it from any radius;
- state the three geostationary conditions and compute that orbit's radius and speed;
- verify an answer's sign, magnitude and unit before trusting it.

Anything wobbling: back to that module, redo its *Try it yourself* questions closed-book, then take the JEE-style timed set.
