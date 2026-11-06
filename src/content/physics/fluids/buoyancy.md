## The push you never see

Hold a stone underwater on a string and it pulls less — then why is the buoyant force called a force at all, and why does a steel ship float while a steel ball sinks? The answer to both is the same: pressure increases with depth, so the *bottom* of any submerged object is pushed up harder than the *top* is pushed down. The leftover push is the buoyant force, and this module makes it exact.

## 1. Archimedes' principle from pressure difference

Take the simplest possible submerged body: a vertical cylinder of cross-sectional area $A$ and height $h$, with its top at depth $h_1$ and bottom at depth $h_2=h_1+h$ in a liquid of density $\rho$.

The top face feels *down* pressure $p_0+\rho g h_1$; the bottom face feels *up* pressure $p_0+\rho g h_2$. Atmosphere cancels against itself on top and bottom, and the net vertical force is

$$
F_B=\big[(p_0+\rho gh_2)-(p_0+\rho gh_1)\big]A=\rho g h A=\rho g V,
$$

where $V=Ah$ is the cylinder's volume. But $\rho g V$ is exactly the weight of liquid occupying the volume $V$ — the liquid the body displaced. This is **Archimedes' principle**: the buoyant force on a body in a fluid equals the weight of the fluid the body displaces, and it acts upward.

The argument doesn't really need the cylindrical shape. Any submerged body can be built out of thin vertical slivers, each of which obeys the same arithmetic; sideways pushes cancel by symmetry between opposing faces. The formula is general:

$$
F_B=\rho_{\text{fluid}}\, g\, V_{\text{displaced}}.
$$

For a fully submerged body, $V_{\text{displaced}}$ is the whole body volume. For a partially submerged (floating) body, it is only the volume below the liquid line.

## 2. Apparent weight

Weigh a body in air, then suspended in a fluid. The spring or string now holds less because the fluid shares part of the load:

$$
W_{\text{app}}=W-F_B=mg-\rho_{\text{fluid}}\,g\,V
=(\rho_{\text{body}}-\rho_{\text{fluid}})gV.
$$

The last form uses $m=\rho_{\text{body}}V$. Measuring the two weights — say $W$ in air and $W_{\text{app}}$ in water — recovers the body's density without knowing its volume:

$$
\frac{W}{W-W_{\text{app}}}=\frac{\rho_{\text{body}}}{\rho_{\text{fluid}}}.
$$

<learning-block type="example" title="Worked example: apparent weight of an aluminium piece">

A solid aluminium cube of side $1\ \text{cm}$, so $V=1.0\times10^{-6}\ \text{m}^3$, density $2700\ \text{kg/m}^3$, hangs from a spring balance. Take $g=10\ \text{m/s}^2$.

In air: $W=\rho_{\text{body}}Vg=2700\times10^{-6}\times10=2.7\times10^{-2}\ \text{N}$. (Air's buoyancy is $\sim1.3\ \mathrm{mg}$ of push — a fraction of a percent, usually ignored.)

Fully underwater:

$$
F_B=\rho_{\text{water}}Vg=1000\times10^{-6}\times10=1.0\times10^{-2}\ \text{N}.
$$

Apparent weight $=2.7\times10^{-2}-1.0\times10^{-2}=1.7\times10^{-2}\ \text{N}$. The reading has dropped by $1.0\times10^{-2}\ \mathrm{N}$, roughly $37\%$ of the true weight. Check: $(2700-1000)/2700=0.63$, and $2.7\times0.63=1.7\times10^{-2}\ \mathrm{N}$ — the two routes agree.

</learning-block>

## 3. Floating: the balance of one weight, one push

A body floats when the buoyant force alone supports its weight:

$$
\rho_{\text{fluid}}\,g\,V_{\text{displaced}}=\rho_{\text{body}}\,g\,V_{\text{total}}
\qquad\Rightarrow\qquad
\frac{V_{\text{displaced}}}{V_{\text{total}}}=\frac{\rho_{\text{body}}}{\rho_{\text{fluid}}}.
$$

The **fraction submerged is the ratio of densities** — nothing else. Three immediate consequences:

- Ice ($\rho\approx917\ \text{kg/m}^3$) floats with $917/1000\approx92\%$ of itself underwater; the visible tip is only that small.
- Anything denser than the liquid ($\rho_{\text{body}}>\rho_{\text{fluid}}$) cannot float: even fully submerged, $F_B<W$.
- Floating depends on the *average* density. A steel ship encloses a huge volume of air, so its average density — steel plus air, spread over the hull volume — is less than water's average density, and it rides high.

A body released underwater and denser than the fluid sinks; less dense, it rises and bobs to the surface; exactly equal, it can hang at any depth (neutrally buoyant — how fish regulate themselves with a swim bladder and how a submarine trims its tanks).

The instrument that does this arithmetic for you is the **hydrometer**: a weighted bulb floats higher in denser liquids, because a smaller displaced volume still weighs the same; a graduated stem reads liquid density off the immersion depth.

## 4. When a floating body tilts: the metacentre idea

Buoyancy guarantees a float, but not a stable one. Tilt a boat slightly: its hull sinks deeper on one side, so the centroid of displaced volume — the point where $F_B$ effectively acts, called the **centre of buoyancy** — shifts sideways toward the deeper side. The new vertical line of action of $F_B$ crosses the body's original axis at a point engineers call the **metacentre** $M$.

- If $M$ sits **above** the centre of gravity $G$ of the boat, $F_B$ produces a pair of forces that turns the boat *back* upright: stable.
- If $M$ sits **below** $G$, buoyancy and gravity make a couple that turns the boat *further* over: it capsizes.

That single construction is the whole design rule: keep the centre of gravity low (cargo strapped down, ballast in the keel) so a tall metacentre dominates, and the boat rights itself after every wave. It is also why loaded ships have maximum loading marks painted on the hull — overloading raises $G$ and shrinks the safety margin.

<learning-block type="mistake" title="Displaced fluid, not displaced object">

Write $F_B$ from the *fluid's* density, not the body's: $F_B=\rho_{\text{fluid}}gV_{\text{disp}}$. Using $\rho_{\text{body}}$ is the classic sign-flipping error. In a free-body diagram, never forget the buoyant arrow when the fluid pushes — a body at the bottom of a beaker satisfies $N+F_B=W$, not $N=W$. And for a floating body, remember it displaces *its own mass*, not its own volume, of liquid.

</learning-block>

## Try it yourself

**A. A wooden block of density $600\ \text{kg/m}^3$ and volume $2.0\times10^{-3}\ \text{m}^3$ floats in water. Find its submerged fraction and submerged volume. Use $g=10\ \text{m/s}^2$.**

<details><summary>Show the reasoning</summary>

Fraction $=\rho_{\text{body}}/\rho_{\text{fluid}}=600/1000=0.60$, so $60\%$ sits underwater. Submerged volume $=0.60\times2.0\times10^{-3}=1.2\times10^{-3}\ \text{m}^3$; check: that volume of water weighs $1000\times1.2\times10^{-3}\times10=12\ \mathrm{N}$, equal to the block's weight $\rho Vg=600\times2\times10^{-3}\times10=12\ \mathrm{N}$.
</details>

**B. A metal piece weighs $5.4\ \text{N}$ in air and $3.4\ \text{N}$ when fully immersed in water. Find its density. Use $g=10\ \text{m/s}^2$ and $\rho_{\text{water}}=1000\ \text{kg/m}^3$.**

<details><summary>Show the reasoning</summary>

$F_B=5.4-3.4=2.0\ \mathrm{N}=\rho_{\text{water}}gV$, so $V=2.0/(1000\times10)=2.0\times10^{-4}\ \mathrm{m}^3$. Then $\rho=W/(Vg)=5.4/(2.0\times10^{-4}\times10)=2700\ \mathrm{kg/m}^3$ — aluminium.
</details>

**C. A block floats with three-quarters of its volume submerged in liquid X. The same block floats with only half its volume submerged in water. Compare the densities of X and water.**

<details><summary>Show the reasoning</summary>

Reading carefully: in liquid X, $V_{\text{disp}}/V=3/4$; in water, it is $1/2$. Since the fraction equals $\rho_{\text{body}}/\rho_{\text{fluid}}$, liquid X is *less* dense than water: $\rho_X=\rho_{\text{body}}/(3/4)$ and $\rho_{\text{water}}=\rho_{\text{body}}/(1/2)$, giving $\rho_X/\rho_{\text{water}}=(1)/(3/4)\times(1/2)=2/3\approx667\ \mathrm{kg/m^3}$ — like a light oil. Less submerged fraction ⇒ *denser* liquid; more submerged fraction ⇒ lighter liquid.
</details>

## Remember

- Buoyant force $=\rho_{\text{fluid}}gV_{\text{displaced}}$, always upward, from the pressure difference top-versus-bottom.
- Apparent weight $=(\rho_{\text{body}}-\rho_{\text{fluid}})gV_{\text{total}}$ for a fully submerged body.
- A floating body satisfies: displaced volume / total volume $=\rho_{\text{body}}/\rho_{\text{fluid}}$.
- Ships float on *average* density; instruments like hydrometers read density from floating depth.
- Floating is not automatically stable: a tilt is corrected only if the metacentre lies above the centre of gravity.

Buoyancy is a *static* story. The moment fluid starts moving, speed enters the picture: next module, how to tell smooth streamlines from tumbling turbulence, and why the same water speeds up when the pipe narrows.
