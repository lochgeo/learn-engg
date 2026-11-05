## Throw it hard enough and it never lands

Throw a stone skyward and it comes back. Every kilogram-per-second you add to the throw raises its apogee; at one special speed, the apogee moves to infinity. Gravity does not switch off at that speed — it never does — but the **energy budget** does: the stone's kinetic energy, spent climb by climb, is just enough to pay the whole deepening bill of the potential pit. That limiting speed is the escape speed, and once it is derived, the same energy accounting launches real satellites.

## 1. Deriving escape speed

Escape means reaching infinity with speed at rest to spare; the cheapest escape starts with that exact budget. Energy conservation between launch and infinity:

$$
\frac12mv^2=\frac{GMm}{R}
\quad\Longrightarrow\quad
v_e=\sqrt{\frac{2GM}{R}}=\sqrt{2gR}.
$$

For Earth, $v_e=\sqrt{2\times9.8\times6.4\times10^6}\approx11.2\ \text{km/s}$.

Three properties follow at once, and all are exam favourites:

- **Independent of the projectile's mass** — the $m$ cancels. A molecule and a cannonball escape at the same speed.
- **Independent of direction** — only the total energy matters, so a vertical launch and a flat one escape equally (ignoring air drag and the ground getting in the way of flat launches).
- **It needs the launch altitude, not just the planet.** From radius $r$ rather than $R$: $v_e=\sqrt{2GM/r}$, already smaller; getting *up* first is a discount on getting *away*.

## 2. Escape versus orbit at the same radius

Compare the two speeds at the same $r$:

$$
v_e=\sqrt{\frac{2GM}{r}},\qquad v_{\text{orb}}=\sqrt{\frac{GM}{r}}
\quad\Longrightarrow\quad
v_e=\sqrt2\,v_{\text{orb}}.
$$

This gives the fastest shortcut in the chapter: escape speed from any circular orbit is $\sqrt2$ times the orbital speed there. The energy version is equally neat: escape kinetic energy is $GMm/r$, exactly twice the orbital kinetic energy $GMm/2r$ — the second half of the climb does not cost double; the total bill only doubles because energy spends twice as fast late in the climb.

## 3. The launch-energy bill

Reaching a *circular orbit* at radius $r$ costs the change in total energy between the ground and the orbit:

$$
\Delta E=GMm\left(\frac{1}{R}-\frac{1}{2r}\right),
$$

**Worked check**, for a $1\ \text{kg}$ payload to a low orbit at $r=R+400\ \text{km}=6.8\times10^6\ \text{m}$:

$$
\Delta E=(4.1\times10^{14})\left(\frac{1}{6.4\times10^6}-\frac{1}{1.36\times10^7}\right)\approx3.4\times10^7\ \text{J/kg}.
$$

Per kilogram, that is about half the full escape bill of $GM/R=6.4\times10^7\ \text{J/kg}$ — orbiting is genuinely cheaper than escaping. Real rockets spend far more than this minimum: air drag, gravity losses during the slow climb and propulsion inefficiency all add to the invoice; the minimum is the physics, not the pricing.

## 4. Geostationary satellites: the $24$-hour perch

A communication satellite is useful if it *stays above the same ground point*. Three conditions make that possible:

1. **Period fixed:** $T$ must match the Earth's rotation — the sidereal day of $23\ \text{h}\ 56\ \text{min}$, ordinarily quoted as $24\ \text{h}$.
2. **Orbit in the equatorial plane**, so the ground track does not drift north and south.
3. **Circular orbit**, so the east-west track does not wander either.

Those conditions select one unique radius. With $\omega=2\pi/T\approx7.27\times10^{-5}\ \text{rad/s}$:

$$
\frac{GMm}{r^2}=m\omega^2r
\quad\Longrightarrow\quad
r=\left(\frac{GM_E}{\omega^2}\right)^{1/3}\approx4.2\times10^7\ \text{m},
$$

which is about $36\,000\ \text{km}$ above the equator, with orbital speed $v=\omega r\approx3.1\ \text{km/s}$. The polar regions lie below this orbit's horizon, so high-latitude regions need a different service — which is where polar orbits come in.

## 5. Polar satellites: the surveying orbit

Polar satellites fly in low orbits, a few hundred kilometres up, passing over or near both poles each lap. With $h\approx700\ \text{km}$, $r=7.1\times10^6\ \text{m}$:

$$
T=2\pi\sqrt{\frac{r^3}{GM_E}}\approx2\pi\sqrt{\frac{3.6\times10^{20}}{4.1\times10^{14}}}\approx5900\ \text{s}\approx100\ \text{min}.
$$

As the satellite images a narrow strip on each pass, the rotating Earth slides every point of the globe into its path within a day or two — why weather, reconnaissance and remote-sensing missions prefer polar orbits, while fixed-relay services buy the geostationary perch.

## 6. A glimpse of black holes

Crank the planet's mass up or its radius down and the escape speed climbs. Squeeze a mass $M$ until $v_e$ reaches $c$, the speed of light, and nothing can leave. Setting $\tfrac12c^2=GM/R_s$ gives

$$
R_s=\frac{2GM}{c^2}.
$$

This $R_s$ is the **Schwarzschild radius**. For the Sun it is about $3\ \text{km}$; for the Earth, about a centimetre. Squeeze any body inside its own $R_s$ and it becomes a black hole. The physics behind $v_e$ — an escape bill that grows without limit — already contains the idea; general relativity only sharpens the bookkeeping.

## Worked example: escaping the Moon

Scale, rather than recompute. The Moon has $M\approx M_E/81$ and $R\approx R_E/3.7$:

$$
v_{e,\text{Moon}}\approx11.2\times\sqrt{\frac{3.7}{81}}\approx11.2\times0.21\approx2.4\ \text{km/s},
$$

matching the measured $2.38\ \text{km/s}$. **Sanity check** via $\sqrt{2GM/R}$ directly: the Moon's small mass shrinks the numerator eightfold while its smaller radius only trims the denominator — the speed falls to roughly a fifth, which is why the Apollo capsule's return stage was modest.

<learning-block type="mistake" title="Escape and parking errors">

- **Treating escape speed as needing "more energy per kilogram at higher mass only".** $v_e=\sqrt{2GM/r}$ drops both from mass and radius; a compact heavy star escapes faster.
- **Using the surface formula from orbit.** Escape from radius $r$ is $\sqrt{2GM/r}$, not $\sqrt{2GM/R}$.
- **Explaining geostationary satellites as "beyond gravity".** They are held up by gravity exactly as much as any satellite; their special property is a matched $T$, a circular path and an equatorial plane.
- **Adding weights to the launch-energy minimum.** The $\Delta E=GMm(1/R-1/2r)$ figure is the ideal change in mechanical energy; drag and gravity losses are extra, real-world terms.

</learning-block>

## Try it yourself

**1. What is the escape speed from a height of $h=R$ above Earth's surface?**

<details><summary>Show the reasoning</summary>

From $r=2R$: $v_e=\sqrt{2GM/2R}=\sqrt{GM/R}=\sqrt{gR}=\sqrt{6.4\times10^7}\approx8.0\ \text{km/s}$ — the surface-orbit speed, since escape speed is always $\sqrt2$ times orbital speed at the same radius and $\sqrt2\times\sqrt{gR/2}=\sqrt{gR}$. Getting up first is a $30\ \%$ discount on escaping.
</details>

**2. How fast does the geostationary satellite fly, and how many Earth radii out is it?**

<details><summary>Show the reasoning</summary>

$v=\omega r=(7.27\times10^{-5})(4.2\times10^7)\approx3.1\ \text{km/s}$. Its radius is $4.2\times10^7/6.4\times10^6\approx6.6$ Earth radii — far out, slow against the stars, but wheeling with the ground below.
</details>

**3. The $1000\ \text{kg}$ satellite of the worked examples sits in a circular orbit at $r=2R_E$. What extra energy frees it to infinity, and what single speed bump achieves that?**

<details><summary>Show the reasoning</summary>

The extra energy equals the binding energy, $-E=GMm/2r=gRm/4$: $(10)(6.4\times10^6)(1000)/4=1.6\times10^{10}\ \text{J}$. The needed speed is $\sqrt2$ times the orbital speed, so the thrust must add $\Delta v=(\sqrt2-1)v\approx0.41\times5.7\approx2.3\ \text{km/s}$. Escape from orbit is a push at perigee, not a long new climb.
</details>

## Remember

- Escape speed $v_e=\sqrt{2GM/R}=\sqrt{2gR}$: about $11.2\ \text{km/s}$ from Earth's surface, mass- and direction-independent.
- From any circular orbit, $v_e=\sqrt2\,v_{\text{orb}}$; escape from orbit costs twice the orbital kinetic energy.
- The minimum orbit-delivery bill is $\Delta E=GMm(1/R-1/2r)$; real launches pay drag and gravity losses on top.
- Geostationary orbit: one radius, $T=24\ \text{h}$, equatorial and circular — $r\approx6.6R_E$, $v\approx3.1\ \text{km/s}$.
- Polar satellites fly low (about $100\ \text{min}$ a lap) and survey the whole planet as it turns beneath.
- A body squeezed inside its Schwarzschild radius $R_s=2GM/c^2$ keeps even light in.

Next: an unfired full-chapter practice check that mixes fields, orbits, escape and Kepler — the last read before the timed paper.
