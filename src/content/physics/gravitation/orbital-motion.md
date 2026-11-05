## Newton's cannonball

Fire a ball horizontally from a mountain: the faster it leaves, the farther it lands. Fired *fast enough*, its downward fall matches the Earth's own curvature and it never lands — it falls forever, and misses. A satellite is exactly that ball. Gravity at a low orbit is still nearly full strength (at the International Space Station's height, $g\approx8.7\ \text{m/s}^2$, about $89\ \%$ of the surface value), yet the station's sideways speed keeps it missing the ground. This module makes that picture quantitative: how fast, what period, and what energy ledger.

## 1. Speed for a circular orbit

In a circular orbit of radius $r$, gravity must supply the centripetal force:

$$
\frac{GMm}{r^2}=\frac{mv^2}{r}
\quad\Longrightarrow\quad
v=\sqrt{\frac{GM}{r}}.
$$

The satellite's mass cancels: a speck of dust and a $10$-tonne station at the same radius must fly at the same speed. Written using the local field $g'=GM/r^2$, the speed is $v=\sqrt{g'r}$ — use the gravity *at the orbit*, never the surface value. At the surface limit this becomes

$$
v_0=\sqrt{gR}\approx\sqrt{(9.8)(6.4\times10^6)}\approx7.9\ \text{km/s},
$$

sometimes called the first cosmic speed: the speed a skimming satellite would need.

## 2. Period of the orbit

One lap covers $2\pi r$ at steady $v$:

$$
T=\frac{2\pi r}{v}=2\pi\sqrt{\frac{r^3}{GM}}.
$$

This is Kepler's period law for the circular case, and the surface limit is telling: $T_0=2\pi\sqrt{R/g}\approx2\pi\sqrt{6.4\times10^6/9.8}\approx5080\ \text{s}\approx85\ \text{min}$. Any orbit lower than that is not really available — you are flying through air. Practical orbits need some hundreds of kilometres of altitude.

## 3. The energy ledger of a satellite

Into the kinetic energy of the orbit, $v^2=GM/r$ substitutes directly:

$$
K=\frac12mv^2=\frac{GMm}{2r}.
$$

The potential energy, from the earlier module, is $U=-GMm/r$ at radius $r$. Total:

$$
E=K+U=\frac{GMm}{2r}-\frac{GMm}{r}=-\frac{GMm}{2r}.
$$

Three relations are worth memorising as one set, because exam questions cycle among them:

| Quantity | Value | Character |
| --- | --- | --- |
| Kinetic energy | $K=\dfrac{GMm}{2r}$ | positive, largest in small orbits |
| Potential energy | $U=-\dfrac{GMm}{r}$ | negative, twice $K$ in magnitude |
| Total energy | $E=-\dfrac{GMm}{2r}$ | negative, equals $-K$, equals $U/2$ |

The planetary sign scheme from Kepler's geometry section falls out here too: more negative $E$ means a more tightly bound orbit. The bracket $-E$ is the **binding energy** — the bill for dismantling the orbit, paid when escaping.

Signs also sort the orbit families: $E<0$ is a bound ellipse (including circle), $E=0$ is the escape boundary, $E>0$ a fly-past hyperbola.

## 4. Changing orbits costs $\Delta E$

Raising a satellite from orbit $r_1$ to a bigger $r_2$ changes its total energy by

$$
\Delta E=\frac{GMm}{2}\left(\frac{1}{r_1}-\frac{1}{r_2}\right)>0.
$$

The engines must supply this; the reverse trip releases energy that re-entry brakes must remove. Note the counter-intuitive bookkeeping: the new, higher orbit has **less** kinetic energy (the satellite moves more slowly), yet raising it still costs positive work — because the total energy must become *less negative*, and it is the total that rocket fuel pays for.

## 5. Weightlessness: falling, not floating

Why do astronauts float? Because they and their spacecraft fall together. Every part of the satellite, astronaut included, accelerates by the same $g'=GM/r^2$ regardless of mass, so the floor presses on nothing and no normal force is felt: apparent weight is zero. Viewed from the spacecraft's own accelerating frame (as in the non-inertial frames lesson), a pseudo force exactly cancels the gravitational pull.

The words matter: gravity is **not** absent — the field strength in low orbit is about $8.7\ \text{m/s}^2$. What is absent is the contact that would let you *feel* it. The same physics makes a freely falling lift dangerous on Earth and weightless on film.

## Worked example: reading a full ledger

A $1000\ \text{kg}$ weather satellite sits in a circular orbit of radius $r=2R_E$ (height $6400\ \text{km}$). With $GM_E=gR_E^2$:

**Speed:** $v=\sqrt{GM_E/r}=\sqrt{gR_E^2/2R_E}=\sqrt{gR_E/2}=\sqrt{3.2\times10^7}\approx5.7\ \text{km/s}$ — slower than $7.9$ km/s at the surface limit, as it must be.

**Period:** $T=2\pi r/v=2\pi(1.28\times10^7)/5660\approx1.42\times10^4\ \text{s}\approx3.9\ \text{h}$.

**Energies:**

$$
K=\frac{GM_Em}{2r}=\frac{(4.1\times10^{14})(1000)}{2.56\times10^7}\approx1.6\times10^{10}\ \text{J},
$$
$$
U=-2K\approx-3.2\times10^{10}\ \text{J},
\qquad
E=-K\approx-1.6\times10^{10}\ \text{J}.
$$

**Sanity check:** $|U|=2K$ and $E=-K$ hold exactly, and $E<0$ — the satellite is bound. It would take $1.6\times10^{10}\ \text{J}$ (miraculously delivered) to pull it off to rest at infinity.

<learning-block type="mistake" title="Orbit-speeding and sign errors">

- **Feeding surface $g$ into $v=\sqrt{g'r}$.** The formula needs the *local* field; at radius $r$ use $GM/r^2$, which at $r=2R$ is only $g/4$.
- **Believing heavier satellites need more speed.** Mass cancels out of $v$ and $T$. Orbit geometry alone sets both.
- **Writing $E=K+|U|$.** Potential energy here is negative; only $K+U$ (with its sign) is the total. Tripling drops and doubled signs have healthy exam careers.
- **Paying $K$ for orbit changes instead of $\Delta E$.** The fuel bill to raise an orbit equals the change in *total* energy, not in kinetic energy — and the new orbit is actually *slower*.

</learning-block>

## Try it yourself

**1. Find the orbital speed and period at $r=4R_E$.**

<details><summary>Show the reasoning</summary>

$v=\sqrt{GM/4R}=\sqrt{gR/4}=\sqrt{1.6\times10^7}=4.0\ \text{km/s}$. Then $T=2\pi r/v=2\pi(2.56\times10^7)/4000\approx4.0\times10^4\ \text{s}\approx11.2\ \text{h}$. Kepler's ratio check: $T(4R)=T(2R)\times(4/2)^{3/2}\approx3.9\times2.83\approx11.0\ \text{h}$, agreeing to rounding.
</details>

**2. How much total energy does a $1\ \text{kg}$ body own in the $r=4R_E$ orbit?**

<details><summary>Show the reasoning</summary>

$E=-GMm/2r=-gRm/8=-(10)(6.4\times10^6)/8=-8.0\times10^6\ \text{J/kg}$: bound, and $8.0\ \text{MJ/kg}$ would free it. Bigger orbits are *less* negative than $-16\ \text{MJ/kg}$ at $2R$ — closer to the zero at infinity.
</details>

**3. A circular-orbit satellite briefly fires thrusters to increase its speed by $1\ \%$. What kind of path follows?**

<details><summary>Show the reasoning</summary>

The new point stays at the same radius, but $E=-K$ grows (less negative) by about $2\ \%$ as $K$ rises. Bound orbit, wrong total: the path becomes an ellipse with the firing point as perigee and a higher apogee — the first half of every orbit-raising manoeuvre.
</details>

## Remember

- Circular-orbit speed $v=\sqrt{GM/r}$, with the satellite's mass cancelled out; the surface limit is about $7.9\ \text{km/s}$.
- Period $T=2\pi\sqrt{r^3/GM}$: a Kepler law, not a coincidence.
- Ledger: $K=GMm/2r$, $U=-GMm/r$, $E=-GMm/2r$, so $K=-E$ and $U=2E$.
- Moving to a higher orbit costs $\Delta E=\frac{GMm}{2}(1/r_1-1/r_2)$ in total energy — and lands you at a *slower* speed.
- Weightlessness is free fall shared by everything on board, not an absence of gravity.

Next: leaving for good — the escape-speed derivation, geostationary parking, polar imaging orbits, and the energy a launch must pay.
