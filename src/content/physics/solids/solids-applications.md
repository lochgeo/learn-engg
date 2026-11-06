## From atoms to architecture

Everything the chapter has built — stress, strain, moduli, energy, thermal stress — ends in structures. The same equations decide why a steel girder has the letter I for a cross-section, why a slim column can collapse under a load far below what it could crush with, and why no mountain on Earth grows beyond a certain height. This module is about stiffness under bending, the failure of slender things, and the size limit of solid worlds.

## 1. Bending stress and the neutral surface

Bend a beam by applying forces that make it sag: the top layers **shorten** (compression), the bottom layers **lengthen** (tension). Somewhere in between runs a surface that is neither squeezed nor stretched — the **neutral surface**. Along it the longitudinal strain, and hence the bending stress, is zero.

Beam theory gives the stress at a distance $y$ measured from the neutral axis of the cross-section:

$$
\sigma=\frac{M\,y}{I},
$$

where

- $M$ is the **bending moment** at that section (force $\times$ lever arm, in $\text{N·m}$),
- $y$ is the distance from the neutral axis — measured **positive away from the neutral surface** (the sign convention of tension versus compression is decided by which side is being stretched),
- $I$ is the **second moment of area** of the section, in $\text{m}^4$ — a purely *geometric* property describing how the cross-sectional area is distributed about the neutral axis.

Two consequences follow immediately. The stress grows linearly from zero at the neutral surface to a maximum at the outer faces — so a beam fails from its surfaces, not its centre. And the deformability under bending is set by $I$, which depends on *where* the material sits, not merely how much of it there is.

## 2. Why the I-beam has its shape

For a section made of two flanges of area $A_f$ each, with their centres separated by depth $d$, the second moment of area is approximately

$$
I\approx2\,A_f\!\left(\frac{d}{2}\right)^{\!2}
=\frac{A_f\,d^{\,2}}{2}.
$$

Read the punchline: **for the same amount of material, $I$ grows as the square of the depth**. Quadrupling $I$ by moving material twice as far from the neutral axis costs no extra mass at all — the same steel, placed further out, buys four times the bending stiffness. That is the economics behind every I-beam.

The three roles are neatly divided:

| Part of the I-beam | What it carries |
| --- | --- |
| Flanges (top and bottom) | Most of the bending stress, $\sigma=My/I$ |
| Web | Shear force; also holds the flanges apart |
| Overall depth | Sets $I$ and hence stiffness |

Why not make beams arbitrarily deep, then? Because very thin webs and flanges fail by their own local buckling, and depth that cannot be braced buckles long before the stress limit is reached — which brings us to the failure of slender structures.

### Worked example: distance buys stiffness

Take two flanges of $A_f=2.0\times10^{-3}\ \text{m}^2$ each. At a centroid separation of $d=0.20\ \text{m}$,

$$
I\approx\frac{A_f d^2}{2}=\frac{(2.0\times10^{-3})(0.20)^2}{2}
=4.0\times10^{-5}\ \text{m}^4.
$$

Redesign the same two flanges to sit twice as far apart, $d=0.40\ \text{m}$:

$$
I\approx\frac{(2.0\times10^{-3})(0.40)^2}{2}
=1.6\times10^{-4}\ \text{m}^4
$$

— four times the stiffness, identical material cost. For a given bending moment, the maximum flange stress $\sigma=My/I$ falls by the same factor of four.

## 3. Buckling: where slender columns fail

Stand a short block on end and load it: it fails by **crushing**, when the material stress reaches its elastic limit $P_{\text{crush}}=\sigma_c A$. Stand a long slender column under the same axial push and a different failure comes first: the column bows sideways suddenly at a load decided not by strength but by *stiffness and geometry*. Euler's formula for the **critical buckling load** of a pin-ended column is

$$
P_{\text{critical}}=\frac{\pi^2 E I}{L^2},
$$

where $L$ is column length, $E$ the relevant modulus ($Y$ for axial strains, effectively the bending stiffness $EI$ that resists the sideways bow) and $I$ the same second moment of area as in bending. Note the scalings: halving the length quadruples the buckling load, and a stiffer section (bigger $I$) resists buckling in proportion. End conditions merely rescale $L$ by an effective length — fixed ends make the column behave like a shorter one.

A real column is safe only against *both* failures, so its strength limit is the lesser of

$$
\min\left(\sigma_c A,\ \frac{\pi^2 E I}{L^2}\right).
$$

Evidently: stocky columns are crushing-limited; slender ones are buckling-limited. This is exactly why a lattice tower or a tall rail on a hot day can fail at a load a crude "strength" calculation would certify as harmless — and why a restrained rail's compressive thermal stress (previous module) manifests as a sideways sun kink at midday rather than as a crush of the steel.

## 4. Worked example: testing a steel column

A solid square steel column of side $a=0.10\ \text{m}$ stands $3.0\ \text{m}$ between pinned ends. Take $Y=2.0\times10^{11}\ \text{Pa}$ and elastic limit $\sigma_c=2.0\times10^8\ \text{Pa}$.

**Section properties.** $A=a^2=1.0\times10^{-2}\ \text{m}^2$, and for a solid square about its central axis $I=a^4/12=(0.10)^4/12=8.3\times10^{-6}\ \text{m}^4$.

**Crushing load.** $P_{\text{crush}}=\sigma_c A=(2.0\times10^8)(1.0\times10^{-2})=2.0\times10^6\ \text{N}=2.0\ \text{MN}$.

**Buckling load.**

$$
P_{\text{buckling}}=\frac{\pi^2 YI}{L^2}
=\frac{(9.87)(2.0\times10^{11})(8.3\times10^{-6})}{(3.0)^2}
\approx1.8\times10^6\ \text{N}=1.8\ \text{MN}.
$$

**Comparison.** At $3\ \text{m}$ the two limits are close: this column is already borderline between the two failure modes. Double the length to $6\ \text{m}$ and the buckling load falls by a factor of four to about $4.6\times10^5\ \text{N}$ — barely a quarter of the crushing load. The same *material* fails at a quarter of the load purely because of its slenderness. The design answers are familiar: brace the column to shorten its effective length, choose an I-shaped or tubular section to raise $I$ at the same mass — or both.

## 5. The tallest mountain physics allows

A mountain is a column of rock loaded by its own weight. The compressive (bearing) stress at the base of a column of rock of density $\rho$ and height $h$ is

$$
\sigma_{\text{base}}=\rho g h.
$$

If that stress stays below the rock's elastic limit, the mountain stands. Rock, however, is only elastically strong up to a limit; beyond it rock does not shatter politely — it *flows* plastically over geological time, spreading sideways like thick putty. So there is a characteristic maximum height:

$$
h_{\max}\approx\frac{\sigma_{\text{limit}}}{\rho g}.
$$

**Estimate.** Granite-like rock: $\rho=2700\ \text{kg/m}^3$, $\sigma_{\text{limit}}\approx2.7\times10^8\ \text{Pa}$, $g=10\ \text{m/s}^2$:

$$
h_{\max}\approx\frac{2.7\times10^8}{(2700)(10)}=1.0\times10^4\ \text{m}=10\ \text{km}.
$$

Mount Everest tops out at $8.85\ \text{km}$ — impressively close, given the frankness of a one-line estimate. Any pile of rock much higher would flow and slump at the base. A check on the physics: the same estimate on Mars, where $g\approx3.7\ \text{m/s}^2$, scales $h_{\max}$ up by $10/3.7\approx2.7$ to around $25$–$30\ \text{km}$ — and Olympus Mons stands about $22\ \text{km}$ high. The formula even gets the planets right.

<learning-block type="mistake" title="Two everyday confusions in structural language">

- **Buckling is not crushing.** A column that bows and snaps sideways has failed a *stiffness* test ($\pi^2EI/L^2$), not a strength one ($\sigma_c A$). Citing the material's elastic limit for a buckle is wrong physics.
- **The two quantities called $I$.** In bending, $I$ is the second moment of *area* ($\text{m}^4$) — a property of a cross-section's shape. In rotation, $I$ is the moment of inertia ($\text{kg·m}^2$) — a property of a body's mass distribution. The symbol is shared; the physics is not.
- **Forgetting the neutral surface.** A "bending stress in the beam" must always be evaluated at a stated distance $y$; a stress quoted for the beam without a position is meaningless, since it ranges from zero at the middle to $\sigma_{\max}=My_{\max}/I$ at the face.

</learning-block>

## Try it yourself

**A.** A beam section has $I=6.0\times10^{-5}\ \text{m}^4$ and carries a bending moment $2.0\times10^4\ \text{N·m}$. Find the maximum stress if the extreme fibre lies $y=0.15\ \text{m}$ from the neutral axis.

<details><summary>Show the reasoning</summary>

$\sigma=My/I=(2.0\times10^4)(0.15)/(6.0\times10^{-5})=3.0\times10^3/6.0\times10^{-5}=5.0\times10^7\ \text{Pa}=50\ \text{MPa}$ at the extreme fibre. The neutral surface itself carries no bending stress.
</details>

**B.** A pinned-ended steel column buckles at $5.0\times10^5\ \text{N}$ when it stands $4.0\ \text{m}$ tall. What would be its buckling load if braced so that its effective length halves?

<details><summary>Show the reasoning</summary>

$P_{\text{critical}}\propto1/L^2$. Halving the effective length multiplies the load by $4$: $P'=2.0\times10^6\ \text{N}$. Bracing is cheap compared with rebuilding, which is why bracing and lacing are ubiquitous in steelwork.
</details>

**C.** Using the Earth estimate $h_{\max}\approx\sigma_{\text{limit}}/\rho g$, predict the limiting height on Mars ($g=3.7\ \text{m/s}^2$), everything else unchanged.

<details><summary>Show the reasoning</summary>

$h_{\max,\text{Mars}}=h_{\max,\text{Earth}}\times(10/3.7)\approx10\ \text{km}\times2.7\approx27\ \text{km}$. Check against reality: Olympus Mons is about $22\ \text{km}$ high — comfortably inside the limit, as the model says.
</details>

## Remember

- Bending stress is zero on the neutral surface and linear in $y$: $\sigma=My/I$; beams fail at their faces.
- The I-beam is the shape of efficiency: for fixed mass, $I$ grows as depth squared, because $I\approx A_f d^2/2$.
- Slender columns fail by buckling first: $P=\pi^2EI/L^2$; stocky ones by crushing $=\sigma_c A$. Design against the smaller.
- Mountain height is capped by rock strength against its own weight: $h\approx\sigma_{\text{limit}}/\rho g\approx10\ \text{km}$ on Earth.
- Next module: a mixed, self-paced practice set over all six lessons, to convert recognition into recall.
