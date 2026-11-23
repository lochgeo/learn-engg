## From a sideways force to a curved path

A magnetic force that is always perpendicular to the velocity is exactly the condition for uniform circular motion: a force of constant magnitude, pointing inward, with the particle moving at constant speed. This module turns that observation into the radius, frequency and pitch of the path, and then uses the same forces in crossed electric and magnetic fields to select a single velocity.

## 1. Motion perpendicular to a uniform field

Let a particle of mass $m$ and charge $q$ enter a uniform field $\vec B$ with velocity perpendicular to $\vec B$. The magnetic force has magnitude $qvB$ and acts as the centripetal force:

$$
qvB = \frac{mv^2}{r}.
$$

Solving for the radius of the circular path,

$$
r = \frac{mv}{|q|B}.
$$

The angular frequency is

$$
\omega = \frac{v}{r} = \frac{|q|B}{m},
$$

and the period is

$$
T = \frac{2\pi}{\omega} = \frac{2\pi m}{|q|B}.
$$

Two features matter for exams. First, the radius grows with momentum $mv$: a faster or heavier particle bends less. Second, the period and frequency are **independent of speed and radius** — they depend only on $q/m$ and $B$. This is the resonance condition used in a cyclotron.

## 2. Motion at an angle: the helix

If the velocity has both a perpendicular component $v_\perp$ and a parallel component $v_\parallel$ relative to $\vec B$, the perpendicular part drives circular motion of radius $r=mv_\perp/(|q|B)$ while the parallel part drifts freely along $\vec B$. The combined path is a **helix**. The distance moved along the field during one revolution is the pitch:

$$
p = v_\parallel\,T = v_\parallel\frac{2\pi m}{|q|B}.
$$

The magnetic force never changes $v_\parallel$ or $v_\perp$ individually; it only rotates the perpendicular component.

## 3. Crossed fields: the velocity selector

Place a uniform electric field $\vec E$ and a uniform magnetic field $\vec B$ perpendicular to each other, and let a charged particle travel perpendicular to both. The electric force $q\vec E$ and magnetic force $q\,\vec v\times\vec B$ can be arranged to oppose. The particle passes through undeflected when

$$
qE = qvB \quad\Rightarrow\quad v = \frac{E}{B}.
$$

Only particles with exactly this speed travel straight; faster or slower ones are deflected. The selected speed is independent of $q$ and $m$, which is why the device selects by velocity rather than by charge or mass.

## 4. The cyclotron (briefly)

A cyclotron uses a uniform magnetic field to bend charged particles into a spiral and an alternating electric field across a gap to accelerate them each half-revolution. The alternating field must reverse at the cyclotron frequency

$$
f = \frac{|q|B}{2\pi m}.
$$

Because $f$ is independent of speed, the same frequency works as the particle speeds up. The maximum kinetic energy is limited by the radius $R$ of the dees:

$$
K_{\max} = \frac{q^2 B^2 R^2}{2m}.
$$

At relativistic speeds the mass increases and the fixed frequency no longer matches; that is the limit of the simple cyclotron.

## 5. Worked example

A proton ($m=1.67\times10^{-27}\ \text{kg}$, $q=1.60\times10^{-19}\ \text{C}$) enters a $0.10\ \text{T}$ field at $2.0\times10^{6}\ \text{m/s}$ perpendicular to $\vec B$.

Radius:

$$
r = \frac{mv}{qB}
  = \frac{(1.67\times10^{-27})(2.0\times10^{6})}{(1.60\times10^{-19})(0.10)}
  = 2.09\times10^{-1}\ \text{m}\approx 0.21\ \text{m}.
$$

Frequency:

$$
f = \frac{qB}{2\pi m}
  = \frac{(1.60\times10^{-19})(0.10)}{2\pi(1.67\times10^{-27})}
  \approx 1.53\times10^{6}\ \text{Hz}.
$$

Period $T=1/f\approx6.5\times10^{-7}\ \text{s}$. Sanity check: a lighter or more highly charged particle would have a smaller radius and higher frequency; the values are consistent with the proton’s large mass-to-charge ratio.

**Velocity selector:** in a region with $E=2.0\times10^{3}\ \text{V/m}$ and $B=1.0\times10^{-2}\ \text{T}$, the selected speed is

$$
v = \frac{E}{B} = \frac{2.0\times10^{3}}{1.0\times10^{-2}} = 2.0\times10^{5}\ \text{m/s}.
$$

## 6. A common mistake

**Thinking the period of circular motion grows with speed.** The radius does grow with speed ($r\propto v$), but the period $T=2\pi m/(|q|B)$ does not. A faster particle travels a larger circle in the same time. Confusing radius with period leads to wrong cyclotron-frequency answers. A second common error is using the full speed $v$ for the radius when only the perpendicular component $v_\perp$ matters.

## Try it yourself

**A.** An electron ($m=9.1\times10^{-31}\ \text{kg}$) moves at $1.0\times10^{7}\ \text{m/s}$ perpendicular to $B=5.0\times10^{-4}\ \text{T}$. Find its circular path radius.

<details><summary>Show the reasoning</summary>

$r=mv/(|q|B)=(9.1\times10^{-31})(1.0\times10^{7})/[(1.6\times10^{-19})(5.0\times10^{-4})]=9.1\times10^{-24}/8.0\times10^{-23}=0.114\ \text{m}$.

</details>

**B.** A particle enters a uniform field at $60^\circ$ to $\vec B$ with speed $4.0\times10^{5}\ \text{m/s}$. If $B=0.20\ \text{T}$ and $m/q=5.0\times10^{-9}\ \text{kg/C}$, find the pitch of the helix.

<details><summary>Show the reasoning</summary>

$v_\parallel=v\cos60^\circ=2.0\times10^{5}\ \text{m/s}$. $T=2\pi m/(|q|B)=2\pi(5.0\times10^{-9})/0.20=1.57\times10^{-7}\ \text{s}$. Pitch $p=v_\parallel T=(2.0\times10^{5})(1.57\times10^{-7})=3.14\times10^{-2}\ \text{m}$.

</details>

**C.** In a velocity selector, $E=1.5\times10^{3}\ \text{V/m}$ and $B=3.0\times10^{-2}\ \text{T}$. What speed passes through undeflected, and does it depend on the particle’s mass?

<details><summary>Show the reasoning</summary>

$v=E/B=1.5\times10^{3}/3.0\times10^{-2}=5.0\times10^{4}\ \text{m/s}$. It is independent of mass and charge, because both forces are proportional to $q$.

</details>

## Remember

- Perpendicular motion: $r=mv/(|q|B)$, $\omega=|q|B/m$, $T=2\pi m/(|q|B)$.
- The period is independent of speed; the radius is not.
- Angled entry gives a helix with pitch $p=v_\parallel T$.
- Velocity selector: $v=E/B$.
- Cyclotron frequency $f=|q|B/(2\pi m)$; max energy $K_{\max}=q^2B^2R^2/(2m)$.

Next, the field itself: how a current element creates a magnetic field, and the field of a circular loop.