## Why 9.8 carries an asterisk

Surveyors correct level readings for latitude, pendulum clocks tick differently in Chennai and Oslo, and Mars engineers budget landing speeds against $3.7\ \text{m/s}^2$, not $9.8$. All of it follows from one expression:

$$
g=\frac{GM}{R^2}=\frac{4\pi G\rho R}{3},
$$

where $\rho$ is the body's average density. Anything that changes the distance from the centre — altitude, depth, or a spin that bulges the equator — changes $g$. This module tracks those changes by ratios, using the surface value as the baseline rather than re-deriving $GM$ each time.

## 1. Higher up: g falls with altitude

At height $h$ above the surface, the distance from the centre is $R+h$:

$$
g'=\frac{GM}{(R+h)^2}=g\left(\frac{R}{R+h}\right)^2.
$$

For $h\ll R$, factorising gives the handy approximation

$$
g'\approx g\left(1-\frac{2h}{R}\right).
$$

**Worked check — small heights.** At the cruising height of a long-endurance research aircraft, $h=16\ \text{km}$: the exact ratio gives $(6400/6416)^2=0.995$, so $g'\approx9.95\ \text{m/s}^2$, while the approximation gives $10(1-0.005)=9.95\ \text{m/s}^2$. Both agree: at a few kilometres up, nothing changes appreciably.

**Worked check — large heights.** At $h=R$ the exact ratio gives $g/4=2.5\ \text{m/s}^2$, but the approximation gives $10(1-2)=-10\ \text{m/s}^2$: nonsense. The approximation is a first-order expansion, valid only while $h/R$ is small. Know which tool you are holding.

## 2. Down below: g falls with depth

Inside the Earth, the shell theorem says every shell outside your radius cancels: only the mass **beneath** you pulls. For a planet of uniform density, that enclosed mass scales as the cube of your distance $r$ from the centre, and its pull as $1/r^2$, so

$$
g'=g\left(\frac{r}{R}\right)=g\left(1-\frac{d}{R}\right),
$$

where $d=R-r$ is the depth. The decline is linear, reaching zero at the centre, where the surrounding shells pull equally in every direction.

**Worked check.** In a fabled tunnel at depth $d=R/4=1600\ \text{km}$, a uniform Earth would give $g'=10(1-0.25)=7.5\ \text{m/s}^2$.

The uniform assumption is the caveat: the real Earth has a dense iron core, so measured $g$ stays near $9.8\ \text{m/s}^2$ through the upper couple of thousand kilometres before dropping — the linear law is a model, and a decent first model at that.

## 3. Sideways on the globe: rotation and latitude

A body sitting on the rotating Earth is not in an inertial frame: it needs a centripetal force $m\omega^2R\cos\lambda$ toward the rotation axis, where $\lambda$ is latitude. Subtracting this demand from the true pull gives the **effective** gravity that scales and plumb lines record:

$$
g_{\text{eff}}=g-\omega^2R\cos^2\lambda.
$$

The correction is largest at the equator ($\cos^2 0^\circ=1$) and vanishes at the poles, where the ground lies on the axis. Numerically, with a $24$-hour rotation,

$$
\omega^2R=(7.27\times10^{-5})^2(6.4\times10^6)\approx0.034\ \text{m/s}^2.
$$

So rotation alone trims about $0.3\ \%$ off the equatorial value. The measured pole-to-equator difference is closer to $0.5\ \%$ ($9.83$ down to $9.78\ \text{m/s}^2$): the Earth's equatorial bulge also pushes mass farther from the axis, weakening $g$ there a little more.

## 4. Comparing worlds

The density form $g=\frac{4\pi G\rho R}{3}$ makes comparisons painless: at fixed density, $g\propto R$.

- **The Moon:** $\rho\approx\dfrac{3}{5}\rho_E$ and $R\approx0.27R_E$, so $g\approx0.6\times0.27\times9.8\approx1.6\ \text{m/s}^2$ — about one-sixth of Earth's, as the Apollo footprints showed.
- **Jupiter:** $\rho\approx0.24\rho_E$ but $R\approx11R_E$, so $g\approx2.6\times g_E\approx26\ \text{m/s}^2$: vast mass wins over modest density.

<learning-block type="mistake" title="Range, model and geometry errors">

- **Stretching the small-height approximation.** $g(1-2h/R)$ is a first-order result for $h\ll R$; it fails badly before $h=R/2$ and is absurd at $h=R$.
- **Selling the depth formula without its assumption.** $g(1-d/R)$ assumes uniform density; the real Earth's core keeps $g$ near surface value much deeper than a uniform planet would.
- **Forgetting that rotation acts about the axis.** The correction involves the distance from the axis, $R\cos\lambda$, so poles feel none of it.
- **Wrong scaling when a planet changes radius at fixed density.** Then $M\propto R^3$ and $g\propto R$ — not $g\propto1/R^2$, which holds only at fixed mass.

</learning-block>

## Try it yourself

**1. Find $g$ at $h=3200\ \text{km}$ altitude, exactly and by the approximation.**

<details><summary>Show the reasoning</summary>

Exact: $g'=g(R/(R+h))^2=10(6400/9600)^2=10\times4/9\approx4.4\ \text{m/s}^2$. The approximation gives $10(1-2\times0.5)=0$ — useless at one-Earth-radius heights. Above a small fraction of $R$, use the exact ratio.
</details>

**2. Compare the weights of a $100\ \text{kg}$ cargo at the equator and at the pole, in the rotation-only model.**

<details><summary>Show the reasoning</summary>

The equatorial scale reads less by $\Delta g=\omega^2R\approx0.034\ \text{m/s}^2$, so the difference is $100\times0.034\approx3.4\ \text{N}$, about $0.34\ \%$ of its weight. The cargo's mass is identical; only the balance reading shifts.
</details>

**3. What is $g$ at the centre of a uniform Earth, and what happens to a stone dropped into a tunnel through the centre?**

<details><summary>Show the reasoning</summary>

At the centre $g'=0$: all surrounding shells cancel. A stone dropped in falls as $g$ shrinks linearly — it is pulled back proportionally to its distance from the centre, which is precisely simple harmonic motion, with period $2\pi\sqrt{R/g}\approx84\ \text{min}$, the same as the period of a satellite skimming the surface.
</details>

## Remember

- Wherever you are, $g'=GM/r^2$ with $r$ the distance from the centre; ratios $g'/g=R^2/(R+h)^2$ save recomputing $M$.
- Altitude: exact ratio always; $g(1-2h/R)$ only for $h\ll R$.
- Depth (uniform Earth): linear fall $g(1-d/R)$ to zero at the centre; real Earth's core bends the curve.
- Rotation trims $g$ by $\omega^2R\cos^2\lambda$: nothing at the poles, about $0.034\ \text{m/s}^2$ at the equator.
- Across planets, $g\propto\rho R$; density and radius together decide gravity.

Next: replace the loose floating with structured motion. Kepler measured three patterns in planetary orbits that gravitation then explained in one stroke.
