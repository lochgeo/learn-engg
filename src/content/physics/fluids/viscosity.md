## The fluid that fights itself

Pour water and pour honey from the same height: one splashes, the other creeps. The difference is an internal friction the fluid carries *within itself* — viscosity. It decides how fast a river moves its silt, why a raindrop never accelerates forever, and how much pressure your heart must build to push blood through capillaries narrower than a hair. This module defines viscosity, then derives two of its most used results: Stokes' law and terminal velocity.

## 1. What viscosity measures

Consider liquid flowing slowly (laminar flow) over a fixed plate: speed grows smoothly with height $y$ above the plate, forming parallel layers that slide over one another — a **velocity gradient** $\mathrm{d}v/\mathrm{d}y$. Each layer drags on its neighbour, and to keep this relative sliding going, an external force must be supplied per unit area. Experiment (Newton's law of viscosity) says the tangential stress needed is proportional to the gradient:

$$
\frac{F}{A}=\eta\,\frac{\mathrm{d}v}{\mathrm{d}y},
\qquad\text{or}\qquad
F=-\eta A\,\frac{\mathrm{d}v}{\mathrm{d}y},
$$

where $\eta$ (Greek eta) is the **coefficient of viscosity** of the fluid. The minus sign in the force equation records that the dragging force on the faster layer opposes its motion — viscosity always removes relative motion, never sustains it.

The SI unit follows from the ratio: $\text{Pa}\cdot\text{s}$ (equivalently $\mathrm{N\,s/m^2}$, sometimes called the poiseuille); the older cgs unit is the poise, $1\ \text{Pa}\cdot\text{s}=10\ \text{poise}$. Typical values at room temperature: water $\eta\approx1.0\times10^{-3}\ \mathrm{Pa\,s}$, air $\eta\approx1.8\times10^{-5}\ \mathrm{Pa\,s}$ (thin but not zero!), glycerine of order $1\ \mathrm{Pa\,s}$ — a thousand times water. Blood sits near $3\times10^{-3}\ \mathrm{Pa\,s}$.

How $\eta$ responds to temperature is the examiner's favourite contrast:

- **Liquids:** viscosity falls steeply as temperature rises. Warming loosens the cohesive grip between neighbouring molecules — engine oil thins, honey pours.
- **Gases:** viscosity *rises* with temperature. There is no cohesion to weaken; faster molecules carry momentum between layers more vigorously, so the internal drag grows.

The same law yields the driving term of pipe flow. For a given pressure drop $\Delta p$ along a pipe of length $L$ and radius $r$, the volume flow delivered is

$$
Q=\frac{\pi\,\Delta p\,r^4}{8\eta L},
$$

Poiseuille's result — the "idea" behind sizing pipelines and understanding narrowed arteries. Note the cruel fourth power: halving the radius cuts the flow **sixteen-fold** at the same pressure drop. It is the basis of a classic exam scaling question, and the reason an arteriosclerotic artery forces the heart to work so much harder.

## 2. Stokes' law: drag on a slow sphere

Slowly moving sphere of radius $r$ in a fluid of viscosity $\eta$, speed $v$: dimensional analysis plus experiment give a drag force proportional to $v$, to $r$, and to $\eta$:

$$
F_{\text{drag}}=6\pi\eta rv.
$$

This is **Stokes' law**. Its validity demands *laminar* flow around the sphere — in the language of module 4, a small Reynolds number, roughly $Re\ll1$ in the strict theory and comfortably valid up to a few tens in practice. A hailstone or a skydiver is far outside this regime; a pollen grain, a mist droplet or a ball bearing in oil is right inside it.

## 3. Terminal velocity: the three-force truce

Drop a small sphere of density $\rho$, radius $r$ into a liquid of density $\sigma$ and viscosity $\eta$. Three vertical forces act, and watching their race is the whole story:

- weight *down*: $W=\frac43\pi r^3\rho g$;
- buoyancy *up* (module 3): $F_B=\frac43\pi r^3\sigma g$;
- drag *up*, growing live with speed: $6\pi\eta rv$.

At release, $v=0$, drag is zero, and the net downward force is $\frac43\pi r^3(\rho-\sigma)g$ — the sphere accelerates. As $v$ builds, drag builds in step, until it plus buoyancy exactly balance the weight; the net force is zero, the acceleration stops, and the sphere settles at a constant **terminal velocity** $v_t$:

$$
\frac43\pi r^3(\rho-\sigma)g=6\pi\eta r\,v_t
\qquad\Rightarrow\qquad
v_t=\frac{2r^2(\rho-\sigma)g}{9\eta}.
$$

Two features to memorise: $v_t\propto r^2$ (double the radius, quadruple the terminal speed — why big raindrops fall much faster than drizzle), and $v_t\propto(\rho-\sigma)$, which vanishes for a neutrally buoyant object. For a body *lighter* than the liquid, the same expression with the sign of $(\rho-\sigma)$ negative describes the steady **rising** speed of an air bubble climbing through water.

<learning-block type="example" title="Worked example: a steel ball bearing in oil">

A steel ball of radius $r=1.0\ \mathrm{mm}$ and density $\rho=7800\ \mathrm{kg/m^3}$ falls through light machine oil ($\sigma=900\ \mathrm{kg/m^3}$, $\eta=0.30\ \mathrm{Pa\,s}$). Terminal velocity with $g=9.8\ \mathrm{m/s^2}$:

$$
v_t=\frac{2(10^{-3})^2\times(7800-900)\times9.8}{9\times0.30}
=\frac{2\times10^{-6}\times6900\times9.8}{2.7}
=\frac{0.135}{2.7}=0.050\ \text{m/s}.
$$

About $5\ \mathrm{cm/s}$ — watchable with the naked eye, which is exactly why this classic demonstration uses oil. Validity check that examiners love: Reynolds number $Re=\sigma v_t(2r)/\eta=900\times0.050\times0.002/0.30\approx0.3\ll1$, so laminar drag is legitimately in force.

Contrast a raindrop of the same size in air ($\eta=1.8\times10^{-5}\ \mathrm{Pa\,s}$, $\sigma\approx1.2$): the naive Stokes value would exceed $10\ \mathrm{m/s}$, but at such speeds the airflow is far from laminar and real drops fall near $1$–$2\ \mathrm{m/s}$. Stokes' law quietly disqualified itself, and the check caught it — always run that check.

</learning-block>

## 4. Measuring viscosity from a falling sphere

Terminal velocity is a gift to experiment: at $v_t$, all three forces are known in form, so $\eta$ can be extracted from *timed, direct* observation. Rearranged:

$$
\eta=\frac{2r^2(\rho-\sigma)g}{9v_t}.
$$

Measure $r$ (micrometre), the densities, time the fall over a marked distance reached *after* the transient (release the sphere well above the marks and start timing only once motion is uniform), and $\eta$ follows. This is how tabulated viscosities of oils are produced in teaching laboratories. Two refinements matter in careful work: the container walls and the ends of the tube both add drag (correction factors for a finite vessel), and the temperature must be recorded, because $\eta$ is one of the most temperature-sensitive quantities in the lab.

<learning-block type="mistake" title="Viscous errors">

(1) Applying Stokes' law to large, fast objects — skydivers, hail, cricket balls — where flow is turbulent; check $Re$ first. (2) Forgetting the buoyant term (or the fluid's density $\sigma$) and writing $v_t\propto\rho$ instead of $\propto(\rho-\sigma)$. (3) Confusing units of viscosity: $1\ \mathrm{Pa\,s}=10$ poise, and quoting poise values as if they were SI. (4) Viscous force *increasing* with speed, then vanishing after terminal velocity — no: at $v_t$ the drag equals the balanced value and stays there; net force becomes zero, not the drag.

</learning-block>

## Try it yourself

**A. Two raindrops of radii $0.5\ \mathrm{mm}$ and $2.0\ \mathrm{mm}$ fall through still misty air. How do their terminal speeds compare (Stokes regime, laminar drag)?**

<details><summary>Show the reasoning</summary>

$v_t\propto r^2$, so $(2.0/0.5)^2=16$: the larger drop settles sixteen times faster. (In reality large drops also outgrow the strictly laminar regime, but the exam scaling answer is a factor of $16$.)
</details>

**B. A small sphere of density $5000\ \mathrm{kg/m^3}$ falls at terminal speed $0.10\ \mathrm{m/s}$ through a liquid of density $1000\ \mathrm{kg/m^3}$, with $g=10\ \mathrm{m/s^2}$. Its radius is $1.0\ \mathrm{mm}$. Find the liquid's viscosity.**

<details><summary>Show the reasoning</summary>

$\eta=\dfrac{2r^2(\rho-\sigma)g}{9v_t}=\dfrac{2\times10^{-6}\times4000\times10}{9\times0.10}=\dfrac{8.0\times10^{-2}}{0.9}=8.9\times10^{-2}\ \mathrm{Pa\,s}$ — like a light castor oil, plausible.
</details>

**C. Water at $\eta=1.0\times10^{-3}\ \mathrm{Pa\,s}$ is pushed by a pressure drop $\Delta p$ along a capillary of radius $0.50\ \mathrm{mm}$ and length $10\ \mathrm{cm}$. If the radius were reduced to $0.25\ \mathrm{mm}$ at the same pressure drop, what happens to the flow rate?**

<details><summary>Show the reasoning</summary>

$Q\propto r^4$, so halving $r$ divides $Q$ by $2^4=16$. Duly noted by plumbers, cardiologists and sprinkler designers alike: narrow tubes are aggressively unfriendly to flow.
</details>

## Remember

- Viscosity is the coefficient in tangential stress $=\eta\,(\mathrm{d}v/\mathrm{d}y)$; SI unit $\mathrm{Pa\,s}$ (= $10$ poise).
- Liquids thin on heating; gases thicken. Quote the direction, not just the trend.
- Stokes' law $F=6\pi\eta rv$ needs slow, laminar flow past a sphere — check $Re\ll1$.
- Terminal velocity $v_t=\dfrac{2r^2(\rho-\sigma)g}{9\eta}$: grows as $r^2$, driven by the density *difference*.
- Poiseuille: $Q=\pi\Delta p\,r^4/8\eta L$ — flow rate dies with the fourth power of radius.

Everywhere so far, the fluid's free surface has been a passive frontier. The next step into surface tension shows it is an active, elastic skin: it holds droplets together, decides which way a meniscus bends, and draws water up a hair-thin tube.
