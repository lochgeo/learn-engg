## The skin of the liquid

Insects walk on water. A razor blade, denser than steel is dense — denser than water, anyway — rests on the surface without sinking. A drop of mercury on glass stays stubbornly round, while a drop of water spreads into a film. All three are the work of **surface tension**: an inward-pulling, elastic-skin behaviour concentrated at the free surface. This module explains where it comes from, how to price it in energy, what pressure it generates inside drops and bubbles, and how thin tubes lift liquid uphill.

## 1. Where the "skin" comes from

Inside a liquid, one molecule is pulled equally in every direction by its neighbours; the pulls cancel. At the free surface, though, the *sides* pull are unbalanced: neighbours exist only below, so a surface molecule feels a net pull **into** the liquid. To add molecules to the surface — that is, to create surface area — you must haul molecules up against this net pull; that takes work, and the work is stored as extra energy of the surface molecules.

The result: a free surface behaves as though it were under tension and tries to minimise its area. **Surface tension** measures the tightness, defined in two equivalent ways:

$$
S=\frac{F}{\text{length}}\qquad\text{(force per length)},\qquad
S=\frac{W}{\Delta A}\qquad\text{(work per new area)},
$$

with the same numerical value in both definitions (the units match: $\mathrm{N/m}=\mathrm{J/m^2}$). For clean water at room temperature, $S\approx0.072\ \mathrm{N/m}$; mercury works near $0.46\ \mathrm{N/m}$; soapy water drops to roughly $0.025\ \mathrm{N/m}$ — the *lower* tension is precisely why soap makes wetting easier.

Minimum-area behaviour falls straight out of this: a drop pulls itself into a **sphere**, since the sphere has the least surface area for a given volume. Temperature increases the mobility of surface molecules and lowers $S$; detergents and impurities lower it dramatically. In energy language, the surface carries a stored energy per unit area, exactly like an elastic membrane. Numerically, $S$ in $\mathrm{N/m}$ equals the surface energy density in $\mathrm{J/m^2}$.

## 2. Excess pressure inside drops and bubbles

Because the surface pulls inward on the curved film, the liquid inside must sit at a *higher* pressure than outside to hold the shape in equilibrium. The smaller the radius, the harder the curvature presses.

Consider the cleanest case, an air bubble of radius $R$ inside a liquid (single surface). Cut the bubble into hemispheres and balance: the pull of surface tension around the rim, $2\pi R S$, must be supplied by the pressure difference acting over the flat face, $\Delta p\times\pi R^2$:

$$
\Delta p\times\pi R^2=2\pi R S
\qquad\Rightarrow\qquad
\Delta p=\frac{2S}{R}.
$$

One roof: **excess pressure $\Delta p=2S/R$** for a liquid drop in air or an air bubble in liquid (each has one surface); double it for a **soap bubble in air**, whose film has two surfaces and pulls twice:

$$
\Delta p_{\text{drop}}=\frac{2S}{R},\qquad
\Delta p_{\text{soap bubble}}=\frac{4S}{R}.
$$

Two consequences worth stating in prose before computing them:

- **Small bubbles dominate.** Connect two large and small soap bubbles with a tube: the *smaller* one empties into the larger, because its interior pressure is the larger of the two ($\Delta p\propto1/R$). Counter-intuitive until you own the $1/R$.
- **Cohesion needs curvature.** A jet of water leaving a tap at a pinch breaks into a train of spherical drops — surface energy prefers the minimum area, and unbroken cylinders can lower their total surface by breaking up.

<learning-block type="example" title="Worked example: pressure inside a soap bubble">

A soap bubble of radius $R=2.0\ \mathrm{cm}$ stands in air; the surface tension of soapy water is $S=0.025\ \mathrm{N/m}$.

$$
\Delta p=\frac{4S}{R}=\frac{4\times0.025}{0.020}=5.0\ \text{Pa}.
$$

The air inside is pushed outward at just $5\ \mathrm{pascals}$ above atmospheric — of order $5\times10^{-5}\ \mathrm{atm}$. Small because $R$ is large compared with a droplet's: a cell-sized bubble ($R\approx10\ \mu\mathrm{m}$) would need $\Delta p\approx10^4\ \mathrm{Pa}$, a tenth of an atmosphere. Curvature is expensive; radii in the denominator are not to be doubted.

</learning-block>

## 3. Work done to create surface

Since $S$ is energy per new area, any process that adds surface needs external work:

$$
W=S\times\Delta A_{\text{total}}.
$$

Split a big water drop of radius $R$ into $8$ droplets of $R/2$: new total area $=8\times4\pi(R/2)^2=2\times(4\pi R^2)$ — double. Verify by mass conservation: $8$ volumes $(R/2)^3=8\times R^3/8=R^3$. So $\Delta A=4\pi R^2$ and the energy needed is

$$
W=4\pi R^2S.
$$

With $R=1.0\ \mathrm{mm}$, $S=0.072\ \mathrm{N/m}$: $W=4\pi\times10^{-6}\times0.072\approx9.1\times10^{-7}\ \mathrm{J}$ — sub-microjoule, as expected for millimetre-scale water; surface effects are small in absolute terms but dominant *curved-surface phenomena* like capillarity, atomisation and emulsification.

## 4. Angle of contact

Where a liquid meets a solid wall across another fluid (usually air), the surface meets the wall at a definite angle measured *inside the liquid* between the wall tangent and the free-surface tangent: the **angle of contact** $\theta$.

- **Wetting pair** (water on clean glass): $\theta$ small (water, near zero). The surface curves *up* at the edge, the meniscus is **concave** (dips in the middle); the liquid climbs walls.
- **Non-wetting pair** (mercury on glass): $\theta$ large, about $140^\circ$. Mercury's surface bulges at the edges, the meniscus is **convex**; the liquid retreats downhill.

Whether cohesive (liquid-liquid) forces beat adhesive (liquid-solid) forces sets $\theta$. The contact angle belongs to the *pair of materials* plus the surface finish — glass smeared with grease, water no longer wets it, angle jumps. It is a property of the interface, not of the liquid alone.

## 5. Capillary rise: Jurin's law

Dip a narrow tube into water; water climbs the tube above the outside level. Dip it into mercury: the level *drops*. The mechanics: for a wetting liquid with a concave meniscus, surface tension pulls *along* the wall and, resolved vertically, *upwards*; the rise continues until that pull exactly supports the weight of the extra column.

For a tube of radius $r$, the tension acts around the circumference $2\pi r$ at angle $\theta$; its vertical component is $S\cos\theta$ per unit length. Balancing against the column of height $h$, density $\rho$:

$$
\underbrace{2\pi r\,S\cos\theta}_{\text{upward pull}}
=
\underbrace{\pi r^2h\,\rho g}_{\text{weight of column}}
\qquad\Rightarrow\qquad
h=\frac{2S\cos\theta}{r\rho g}.
$$

This is **Jurin's law**. Three readables: rise is *inversely* proportional to radius (hair-thin tubes win; wide tubes barely lift); $\cos\theta$ carries the wetting sign, so $\theta>90^\circ$ makes $h$ negative — a *depression*, as with mercury; and $h\propto S/\rho$, so denser liquids rise less.

<learning-block type="example" title="Worked example: water in a 0.5 mm tube">

Water ($S=0.072\ \mathrm{N/m}$, $\rho=1000\ \mathrm{kg/m^3}$) meets clean glass with $\theta\approx0^\circ$, so $\cos\theta=1$. Tube radius $r=0.50\ \mathrm{mm}$. Take $g=9.8\ \mathrm{m/s^2}$:

$$
h=\frac{2S\cos\theta}{r\rho g}
=\frac{2\times0.072\times1}{0.50\times10^{-3}\times1000\times9.8}
=\frac{0.144}{4.9}\approx2.9\times10^{-2}\ \mathrm{m}.
$$

About $2.9\ \mathrm{cm}$ of climb. Halve the radius and the rise doubles to $5.8\ \mathrm{cm}$; shrink to cloth-pore size ($r\sim10\ \mu\mathrm{m}$) and capillary forces lift water *metres* — how paper towels and cotton wicks defeat gravity, and how a plant's xylem pulls sap (transpiration pull assists, but surface tension does the plumbing).

</learning-block>

<learning-block type="mistake" title="Drops, bubbles and the missing surface">

The one-number table to keep straight: liquid drop in air $\Delta p=2S/R$; air bubble in liquid $2S/R$; **soap bubble in air $4S/R$ — two surfaces**. Exams prey on the missing factor of $2$. Then: capillary rise does *not* scale with tube length or with how deep you dip the tube, only with radius, angle, surface tension and density; and $\theta$ is not a liquid property done alone, it belongs to the liquid--solid pair. Finally keep units clean: $S$ in $\mathrm{N/m}$, $R$ and $r$ in metres, $\rho$ in $\mathrm{kg/m^3}$.

</learning-block>

## Try it yourself

**A. A soap bubble of radius $3.0\ \mathrm{cm}$ has $\Delta p$ of how much inside (soapy water $S=0.025\ \mathrm{N/m}$)? A water drop of the same radius ($S=0.072\ \mathrm{N/m}$)?**

<details><summary>Show the reasoning</summary>

Soap bubble (two surfaces): $\Delta p=4S/R=4\times0.025/0.030=3.3\ \mathrm{Pa}$. Water drop (one surface): $\Delta p=2S/R=2\times0.072/0.030=4.8\ \mathrm{Pa}$. Different $S$, different number of surfaces — compute each case separately, never reuse "the" formula.
</details>

**B. Mercury meets glass at $\theta=140^\circ$, with $S=0.465\ \mathrm{N/m}$ and $\rho=13600\ \mathrm{kg/m^3}$. Find the capillary *depression* in a tube of radius $0.50\ \mathrm{mm}$. Use $g=9.8\ \mathrm{m/s^2}$.**

<details><summary>Show the reasoning</summary>

$\cos140^\circ=-0.766$, so $h=\dfrac{2\times0.465\times(-0.766)}{0.50\times10^{-3}\times13600\times9.8}=\dfrac{-0.712}{66.6}\approx-1.1\times10^{-2}\ \mathrm{m}$. The negative height is a $1.1\ \mathrm{cm}$ *drop*: mercury presses the tube down and refuses to wet.
</details>

**C. Water rises $7.2\ \mathrm{cm}$ in a capillary. What rise do you expect in a capillary of one-fifth the radius (same liquid, same glass)?**

<details><summary>Show the reasoning</summary>

$h\propto1/r$: one-fifth the radius gives a *five-fold* rise, $5\times7.2=36\ \mathrm{cm}$. The liquid's weight per unit of climb shrinks with $r^2$ while the tension only pays out with $r$ — that extra factor of $r$ in the denominator is Jurin's whole law.
</details>

## Remember

- Surface tension is force per length (numerically, energy per new area); it always strives to shrink the surface.
- Excess pressure: $\Delta p=2S/R$ for drops and liquid-side bubbles, $4S/R$ for a soap bubble in air; smaller radius, larger pressure.
- Work to add surface is $W=S\times\Delta A$; compute $\Delta A$ *after* mass conservation fixes the droplet sizes.
- Angle of contact (measured in the liquid) tells the wetting story: $<90^\circ$ concave rise, $>90^\circ$ convex depression; it is a liquid--solid pair property.
- Jurin's law $h=2S\cos\theta/(r\rho g)$: hair-thin tubes, wetting liquids, tall rises.

The chapter's tools are now all on the bench: pressure, depth, buoyancy, continuity, Bernoulli, viscosity and surface tension. The next module runs them together — a study plan and a mixed mastery check across everything you have just built.
