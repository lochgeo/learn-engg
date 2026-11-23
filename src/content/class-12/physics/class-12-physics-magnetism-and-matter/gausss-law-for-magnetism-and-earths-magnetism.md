## Two consequences of "no magnetic monopole"

Every electric charge is a source or sink of electric field lines, so the net electric flux through a closed surface measures the enclosed charge. Magnetic field lines behave differently: they have no beginning and no end. That single fact gives Gauss's law for magnetism, and it is also why Earth — a planet-sized magnet — must have both a north and a south magnetic pole.

## 1. Gauss's law for magnetism

For any closed surface $S$,

$$
\oint_S \vec B\cdot d\vec A = 0.
$$

The net magnetic flux through a closed surface is always zero. Equivalently, $\nabla\cdot\vec B=0$ everywhere: the magnetic field is **solenoidal**. Physically this says there are no magnetic monopoles — no isolated north or south poles that act as sources or sinks of $\vec B$. Magnetic field lines always form closed loops, passing through a surface as many times inward as outward.

Contrast with electrostatics: $\oint \vec E\cdot d\vec A = Q_{\text{enc}}/\varepsilon_0$. In magnetism the right-hand side is identically zero. A magnetic dipole (a bar magnet) produces field lines that leave one pole, loop through space, and return to the other; cut the magnet and each half grows a new opposite pole so that every piece remains dipolar.

## 2. A practical use: counting field lines

Because flux through a closed surface vanishes, the flux through any open surface attached to a curve is well defined only once a boundary curve is chosen. For a bar magnet, the flux leaving the north-pole face equals the flux entering the south-pole face, which is a useful consistency check when sketching field patterns. It also explains why a magnetic field line cannot terminate on a surface charge — it must close on itself or extend to infinity and close at infinity.

## 3. Earth's magnetism

Earth behaves approximately as a giant bar magnet tilted about $11^\circ$ from the rotation axis. Its "magnetic north pole" (near geographic north) is actually a south magnetic pole in the physical sense, because it attracts the north pole of a compass. The field at the surface has magnitude $B\approx 3\times10^{-5}\ \text{T}$ to $6\times10^{-5}\ \text{T}$, varying with latitude.

Three quantities describe Earth's field at a place:

- **Declination $D$**: the horizontal angle between geographic north and magnetic north. It measures how far a compass deviates from true north.
- **Inclination (dip) $I$**: the angle the field makes with the horizontal plane. It is $0^\circ$ at the magnetic equator and $90^\circ$ at the magnetic poles.
- **Horizontal component $B_H$**: the component of $\vec B$ in the horizontal plane, pointing toward magnetic north.

Resolving $\vec B$:

$$
B_H = B\cos I,\qquad B_V = B\sin I,\qquad \tan I = \frac{B_V}{B_H}.
$$

Here $B_V$ is the vertical component (downward in the northern hemisphere). From these, the total field is $B=\sqrt{B_H^2+B_V^2}$ and the dip is $I=\tan^{-1}(B_V/B_H)$.

## 4. Variation of Earth's field

- The field is not uniform: it is stronger near the poles than at the equator (roughly $6\times10^{-5}\ \text{T}$ vs $3\times10^{-5}\ \text{T}$).
- Declination varies from place to place and changes slowly with time (secular variation).
- The magnetic poles wander and occasionally reverse; the last reversal was roughly $780\,000$ years ago. Such reversals are recorded in the magnetisation of sea-floor rocks and are evidence for plate tectonics.

## 5. Worked example: finding the total field

At a location the horizontal component is $B_H=2.0\times10^{-5}\ \text{T}$ and the angle of dip is $I=60^\circ$. Find the vertical component and the total field.

$$
B_V = B_H\tan I = (2.0\times10^{-5})\tan60^\circ
= (2.0\times10^{-5})(1.732)
= 3.46\times10^{-5}\ \text{T}.
$$

$$
B = \frac{B_H}{\cos I} = \frac{2.0\times10^{-5}}{\cos60^\circ}
= \frac{2.0\times10^{-5}}{0.50}
= 4.0\times10^{-5}\ \text{T}.
$$

Sanity check: at $60^\circ$ dip the vertical component exceeds the horizontal one, consistent with a mid-latitude site closer to a pole than to the equator. The total field $4.0\times10^{-5}\ \text{T}$ lies inside the observed terrestrial range.

## 6. A common mistake

**Confusing magnetic north with geographic north, and $B_H$ with $B$.** A compass points along $B_H$, not along $\vec B$; the field itself dips into the ground. In problems, $B_H$ is the *horizontal* component, so $B_H=B\cos I$ (not $B\sin I$). Also remember that "magnetic north pole" of Earth is physically a south pole — this sign matters when you apply the rule that opposite poles attract.

## Try it yourself

**A.** A location has $B_H=3.0\times10^{-5}\ \text{T}$ and dip $I=30^\circ$. Find $B_V$ and $B$.

<details><summary>Show the reasoning</summary>

$B_V = B_H\tan30^\circ = 3.0\times10^{-5}\times0.577 = 1.73\times10^{-5}\ \text{T}$.

$B = B_H/\cos30^\circ = 3.0\times10^{-5}/0.866 = 3.46\times10^{-5}\ \text{T}$.

</details>

**B.** At the magnetic equator, $I=0^\circ$. What are $B_V$ and $B_H$?

<details><summary>Show the reasoning</summary>

$B_V=B\sin0^\circ=0$ and $B_H=B\cos0^\circ=B$. The field is purely horizontal there, pointing north.

</details>

**C.** At a magnetic pole, $I=90^\circ$. What is $B_H$?

<details><summary>Show the reasoning</summary>

$B_H=B\cos90^\circ=0$. The field is vertical; a compass would have no horizontal restoring force and would not settle to a north direction.

</details>

## Remember

- Gauss's law for magnetism: $\oint \vec B\cdot d\vec A=0$; no magnetic monopoles.
- Magnetic field lines are always closed loops.
- Earth's field: $B_H=B\cos I$, $B_V=B\sin I$, $\tan I=B_V/B_H$.
- Declination $D$ is the angle between geographic and magnetic north.
- At the magnetic equator $I=0^\circ$; at the poles $I=90^\circ$.

Next, we ask how matter itself responds when placed in a magnetic field: magnetisation and the auxiliary field $H$.