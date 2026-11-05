## The same influence, measured two ways

Newton's law answers one specific question: what force acts between *this* pair of masses. It is usually more useful to describe what one mass does to the space around it, once and for all. That is the field picture: at every point, how hard would a $1\ \text{kg}$ probe be pulled? Pairing the field with a scalar bookkeeping quantity — the **potential**, which records work per kilogram — turns many three-body problems into simple addition. This module builds both quantities for the inverse-square force and shows how they are linked.

## 1. Field strength: force per unit mass

Place a small test mass $m$ at distance $r$ from a source mass $M$. Newton's law gives the pull; divide by $m$ and the test mass cancels:

$$
g=\frac{F}{m}=\frac{GM}{r^2}.
$$

This is the **gravitational field strength** at that point: force per unit mass, in $\text{N/kg}$ (numerically equal to $\text{m/s}^2$). Its direction is toward $M$. It is a property of the source and the location, so it exists whether or not a probe is there. At Earth's surface $g=9.8\ \text{N/kg}$, which is why every kilogram feels a pull of about $9.8\ \text{N}$.

With several sources, fields add as **vectors** (superposition again); only aligned pulls can be added as plain numbers.

## 2. Potential: work per kilogram, measured from infinity

Release a unit mass from rest at infinity and let $M$ pull it in to distance $r$. Gravity does $+GM/r$ of work per kilogram, because pull and inward motion point the same way. The **gravitational potential** is the negative of this work, with the zero level taken at infinity:

$$
V(r)=-\frac{GM}{r}\qquad(\text{J/kg}),
$$

and the **potential energy** of a mass $m$ placed there is

$$
U=mV=-\frac{GMm}{r}.
$$

The zero at infinity is not a whim: infinity is the only distance at which the pull vanishes, so it is the one reference level every mass shares. And since gravity attracts at all distances, $V$ is negative everywhere else. A negative $U$ is the signature of a **bound** pair: $+GMm/r$ of external work would be needed to pull the pair infinitely apart.

Two features make potential the cheapest quantity on offer:

- **It adds as a scalar.** For several masses at a point, just add $-GM_i/r_i$ terms — no angles, no components.
- **Inside a thin spherical shell**, $V$ is constant at $-GM/R$ everywhere within it (the field there is zero, and a flat potential has no slope).

## 3. Field from potential: the slope rule

Lift a unit mass outward by a small $dr$; the potential rises and the field fights it. Differentiating one gives the other:

$$
g=-\frac{dV}{dr}.
$$

The minus sign says the field points **down the potential slope**, toward where $V$ decreases. For a point mass, $V=-GM/r$ steepens as $1/r^2$ on differentiating, matching the field formula exactly. So $g$–distance and $V$–distance graphs describe the same physics twice: the field is the steepness of the potential. This is why a handy strategy for awkward mass distributions is *add the potentials, then differentiate*.

## 4. Worked example: climbing out of the potential pit

A $1\ \text{kg}$ probe is lifted from Earth's surface ($r=R$) to orbital radius $r=3R$, engines firing gently so no kinetic energy builds up. Take $GM=R^2g$.

**Potential at each stop.** Since $GM/R=gR$:

$$
V(R)=-gR=-(10)(6.4\times10^6)=-6.4\times10^7\ \text{J/kg},
\qquad
V(3R)=-\frac{gR}{3}=-2.13\times10^7\ \text{J/kg}.
$$

**Work required.** The engines supply the rise in potential energy:

$$
W_{\text{ext}}=m\bigl[V(3R)-V(R)\bigr]=6.4\times10^7-2.13\times10^7=4.27\times10^7\ \text{J}.
$$

**Field at the destination.** $g(3R)=GM/(3R)^2=g/9\approx1.1\ \text{N/kg}$: tripling the distance has already diluted the pull ninefold.

**Sanity check.** Escaping to infinity costs $0-(-6.4\times10^7)=6.4\times10^7\ \text{J}$ per kilogram. Stopping at $3R$ costs $4.27\times10^7\ \text{J}$, about two-thirds of the escape bill — less, as it should be, and all signs run the right way (work positive going out, potential climbing toward zero).

## 5. Inside or outside: when each formula applies

- $V=-GM/r$ and $g=GM/r^2$ hold for point masses and everywhere **outside** a spherically symmetric body.
- Inside a shell, $V=-GM/R$ is constant and $g=0$.
- Inside a *solid uniform sphere*, $V=-GM(3R^2-r^2)/(2R^3)$: the potential keeps deepening toward the centre, reaching $-\tfrac32GM/R$ there, although the field falls linearly to zero. Quoted here because it appears in exam numericals; it follows from integrating the field of enclosed mass.

<learning-block type="mistake" title="Per-mass, per-point and sign errors">

- **Mixing $V$ and $U$.** $V$ is per kilogram ($\text{J/kg}$); $U=mV$ is a total energy in joules. Divide by the *test* mass, never by the source mass.
- **Dropping the minus sign.** Potential and potential energy of an attractive pair are negative; $V=+GM/r$ inverts every energy calculation that follows.
- **Using $U=mgh$ far from the surface.** That is the small-height limit of $-GMm/r$ with a local, constant $g$. Beyond a few hundred kilometres it must be replaced.
- **Expecting zero field where potential is zero — or vice versa.** At infinity $V=0$ with negligible field, but inside a shell $V=-GM/R$ while the field is exactly zero. Slope, not value, gives field.

</learning-block>

## Try it yourself

**1. Find the potential at $r=2R$ from Earth's centre and the field strength there.**

<details><summary>Show the reasoning</summary>

$V=-GM/(2R)=-gR/2=-(10)(6.4\times10^6)/2=-3.2\times10^7\ \text{J/kg}$. The field is $g/4=2.5\ \text{N/kg}$ toward Earth. One quantity is a scalar depth, the other a steepness.
</details>

**2. How much work lifts a $2\ \text{kg}$ mass from the surface to infinity, drag ignored?**

<details><summary>Show the reasoning</summary>

$W_{\text{ext}}=m\bigl[V(\infty)-V(R)\bigr]=GMm/R=gRm=(10)(6.4\times10^6)(2)=1.28\times10^8\ \text{J}$. This equals $m|U(R)|$, the same energy that escape speed $11.2\ \text{km/s}$ must be purchased with — which the later modules develop.
</details>

**3. A thin shell of mass $M$ and radius $R$ surrounds the origin. What are the potential and the field at the origin, counting the shell only?**

<details><summary>Show the reasoning</summary>

The potential is constant inside the shell at $V=-GM/R$; the field is zero. Every bit of the shell surrounds the point with balanced pulls, but their work-bookkeeping stays $-GM/R$ no matter where inside you sit.
</details>

## Remember

- Field strength $g=GM/r^2$ is force per kilogram, a vector toward the source mass.
- Potential $V=-GM/r$ is work per kilogram, a scalar whose zero sits at infinity.
- Potentials add as numbers; fields add as vectors — pick whichever superposition is cheaper.
- $g=-dV/dr$: field is the downhill slope of the potential, so a flat potential means zero field.
- $U=mV$ is negative for a bound pair, and $|U|$ is the energy bill for escape.

Next: the same $g=GM/r^2$ is tracked across a planet's surface — up in the sky, down a mine, and onto a rotating, flattened Earth.
