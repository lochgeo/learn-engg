## From tables to laws

Around 1600 Tycho Brahe had logged twenty years of planetary positions, good to about one arcminute. Kepler inherited the Mars data, tried circle after circle, and kept losing by eight arcminutes — eight too many to forgive. Abandoning two millennia of circular dogma, he published three empirical laws:

1. **Law of orbits:** every planet moves in an ellipse with the Sun at one focus.
2. **Law of areas:** the line from Sun to planet sweeps equal areas in equal times.
3. **Law of periods:** the square of the period is proportional to the cube of a fixed ellipse length: $T^2\propto a^3$.

Sixty years later Newton showed all three follow from a single assumption: a central attraction $F=GMm/r^2$. Keep both ends in view — the geometry Kepler *measured*, and the gravitation that *produces* it.

## 1. Law of orbits: the ellipse

An ellipse is the set of points whose distances from two fixed **foci** sum to a constant. For a planet, the Sun sits at one focus; the other is empty. With semi-major axis $a$ and eccentricity $e$ (focal distance divided by $a$):

| Quantity | Expression |
| --- | --- |
| Closest approach (perihelion) | $r_p=a(1-e)$ |
| Farthest distance (aphelion) | $r_a=a(1+e)$ |
| Distance sum | $r_p+r_a=2a$ |

A circle is the special case $e=0$. Real orbits span the range: Earth's $e=0.0167$ is a nearly invisible ellipse, while Halley's comet with $e=0.967$ swings from inside Mercury's orbit to beyond Neptune.

## 2. Law of areas: equal areas in equal times

Gravity is a **central force**: it always acts along the line joining planet and Sun. A central force exerts no torque about the Sun, $\tau=rF\sin 0^\circ=0$, so the planet's angular momentum $L$ is conserved. The link to swept area is geometry: in a small time, the radius vector of length $r$ swings through $d\theta$ and cuts off a triangle of area $\tfrac12r^2\,d\theta$. Since $v\,d\theta\,r$ relates to the component of motion perpendicular to the radius, $v\sin\theta=r\,d\theta/dt$:

$$
\frac{dA}{dt}=\frac12r^2\frac{d\theta}{dt}=\frac12rv\sin\theta=\frac{L}{2m}=\text{constant}.
$$

Equal times, equal areas. The physical content: planets **speed up near the Sun and slow down far away**, exactly as much as needed to sweep area at a steady rate. Nothing here requires a circle — this is where orbit shapes that vary in speed still satisfy Kepler.

## 3. Deriving the period law from gravitation

Take a circular orbit with radius $r$ and let gravity play the centripetal role:

$$
\frac{GMm}{r^2}=m\omega^2r=m\frac{4\pi^2}{T^2}\,r
\quad\Longrightarrow\quad
T^2=\frac{4\pi^2}{GM}\,r^3.
$$

The factor $4\pi^2/GM$ depends only on the **central** mass — the Sun's, not the planet's. That is Kepler's third law made physical: for every body circling the same primary, $T^2/r^3$ is one constant. The same statement holds in detail for ellipses, with the circle's $r$ replaced by the semi-major axis $a$ (Newton proved this with calculus); for Jupiter's four moons and for ring systems around other planets, one dataset confirms the proportionality across a whole family of orbiters.

One refinement: if the orbiting mass $m$ is not negligible (binary stars), the constant becomes $4\pi^2/G(M+m)$. For planets, $m\ll M$ and the correction is invisible.

## 4. Speeds at the two ends of an orbit

At perihelion and aphelion the velocity is perpendicular to the radius, so the swept-area rate is $\tfrac12rv$ there. The area law then reads $v_pr_p=v_ar_a$:

$$
\frac{v_p}{v_a}=\frac{r_a}{r_p}=\frac{1+e}{1-e}.
$$

Speed trades against distance — steepest at the ends, smoothest in between.

## Worked example: a comet's speed swing

A comet has eccentricity $e=0.8$ around the Sun and crawls at $v_a=2\ \text{km/s}$ at aphelion. How fast is it moving at perihelion?

$$
\frac{v_p}{v_a}=\frac{1+0.8}{1-0.8}=\frac{1.8}{0.2}=9
\quad\Longrightarrow\quad
v_p=18\ \text{km/s}.
$$

**Sanity check.** Halley's comet ($e=0.967$) moves about $54.6\ \text{km/s}$ at perihelion against roughly $0.9\ \text{km/s}$ at aphelion — a ratio near $60$, and indeed $(1+0.967)/(1-0.967)\approx60$. The area law survives real data.

A second, period-flavoured check: Mars has $a=1.52\ \text{AU}$. Kepler's law predicts $T=(1.52)^{3/2}\approx1.87\ \text{yr}\approx684$ days, against an observed $687$ days — the empirical law breathing.

<learning-block type="mistake" title="Ellipse, radius and reasoning errors">

- **Plugging a radius into $T^2\propto a^3$ for an elliptical orbit.** In an ellipse there is no single radius; the law uses the semi-major axis $a=(r_p+r_a)/2$.
- **Reading equal areas as equal speeds.** Equal areas in equal times means $rv\sin\theta$ is constant — speed is anything but constant on a non-circular orbit.
- **Citing energy conservation as the reason areas are equal.** Area equality is exactly the statement that angular momentum is conserved, which follows from zero torque. Energy conservation is a separate, also-true fact.
- **Assuming Kepler's laws are force-free facts.** The area law needs a central force; the period law additionally needs an inverse-square pull. Change the force law and the "constant" $T^2/r^3$ drifts.

</learning-block>

## Try it yourself

**1. An asteroid circles the Sun with $a=9\ \text{AU}$. What is its period?**

<details><summary>Show the reasoning</summary>

Comparing with Earth ($a=1\ \text{AU}$, $T=1\ \text{yr}$): $T=1\ \text{yr}\times(9/1)^{3/2}=27\ \text{yr}$. Any shared-primary pair can be matched this way without ever computing $GM$.
</details>

**2. A satellite's circular orbit radius is doubled. What happens to its period?**

<details><summary>Show the reasoning</summary>

$T\propto r^{3/2}$, so the period multiplies by $2^{3/2}\approx2.83$. Orbits farther out are slower and *much* longer.
</details>

**3. A satellite's elliptical orbit has $e=0.5$ and $v_a=3\ \text{km/s}$ at apogee. Find its perigee speed and perigee distance if $a=12\,000\ \text{km}$.**

<details><summary>Show the reasoning</summary>

$v_p/3=(1+0.5)/(1-0.5)=3$, so $v_p=9\ \text{km/s}$. The perigee distance is $r_p=a(1-e)=12\,000\times0.5=6000\ \text{km}$, while apogee sits at $18\,000\ \text{km}$. Check the ratio: $18\,000/6000=3=v_p/v_a$. Consistent.
</details>

## Remember

- Orbits are ellipses with the attracting body at one focus; $e$ sets the shape from circle ($0$) to long loop.
- Equal areas in equal times is angular-momentum conservation: central force means zero torque.
- $T^2=\dfrac{4\pi^2}{GM}a^3$: the constant belongs to the central mass, so one dataset pins every orbit around it.
- At the orbit's ends, $v_pr_p=v_ar_a$; closest approach is fastest.
- Kepler's laws are measurements that gravitation explains — not axioms that float free.

Next: circular orbits themselves — how fast a satellite must fly, what its energy ledger looks like, and why astronauts float *while falling*.
