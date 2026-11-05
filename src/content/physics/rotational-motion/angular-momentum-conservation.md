## The skater's secret

A figure skater arms outstretched spins slowly; she draws her arms in and suddenly whirls. Nothing touches her — no external torque acts about her axis — yet her spin rate leaps. What is being protected is her **angular momentum**. This module states precisely when angular momentum is conserved, works the skater and the planet quantitatively, and adds one caution that trips up half of all students: angular momentum can stay constant while kinetic energy does not.

## 1. When is angular momentum conserved?

The exact law from the torque module was

$$
\vec\tau_{net}=\frac{d\vec L}{dt}.
$$

So $\vec L$ is constant exactly when the **net external torque is zero**:

$$
\vec\tau_{ext}=0 \quad\Longrightarrow\quad \vec L=\text{constant}.
$$

Compare the momentum chapter: linear momentum survives in the absence of external *forces*; angular momentum survives in the absence of external *torques*. The distinction matters the moment an object changes shape.

The common routes to $\tau_{ext}=0$ about an axis:

- all forces pass through the axis (their lever arms vanish) — gravity on an axis-mounted flywheel, normal reactions on a turntable's bearing;
- the net torque sums to zero even though forces do not — a balanced pair of weights;
- negligible external effects on a short timescale — the impact of a bullet on a hanging rod happens so fast that gravity's torque is irrelevant during the event.

<learning-block type="mistake" title="Conserving energy along with angular momentum">

When a spinning body pulls itself together (or two spinning bodies couple through friction), $\vec L$ is conserved but rotational kinetic energy *changes* while $I$ changes: $K=\dfrac{L^2}{2I}$ grows as $I$ shrinks with $L$ fixed. The skater's muscles do positive work in hauling arms inward against centripetal-like inertia — that work is exactly the kinetic-energy gain. In the opposite direction, when a non-spinning disc is dropped onto a spinning one, angular momentum still conserves but rotational kinetic energy *falls* — the lost energy goes to heat at the rubbing surfaces. Never write $\tfrac12I_1\omega_1^2=\tfrac12I_2\omega_2^2$; the conserved quantity is $I\omega$, not $I\omega^2$.

</learning-block>

## 2. The skater, with numbers

A skater spinning about her vertical axis (friction in the ice bearings negligible; the ice's normal force and her weight act along the axis itself) has moment of inertia $I_1=6.0\ \text{kg·m}^2$ and angular speed $\omega_1=2.0\ \text{rad/s}$ with arms outstretched. She draws her arms in, reducing her inertia to $I_2=3.0\ \text{kg·m}^2$.

**Angular momentum conservation** about the vertical axis:

$$
I_1\omega_1=I_2\omega_2
\quad\Rightarrow\quad
\omega_2=\frac{I_1}{I_2}\,\omega_1=\frac{6.0}{3.0}(2.0)=4.0\ \text{rad/s}.
$$

Halve the inertia, double the spin — the general rule is $\omega\propto 1/I$.

**The energy ledger.**

$$
K_1=\tfrac12(6.0)(2.0)^2=12\ \text{J},\qquad
K_2=\tfrac12(3.0)(4.0)^2=24\ \text{J}.
$$

The kinetic energy **doubled**. The extra $12\ \text{J}$ is the work her muscles did pulling her arms inward against the outward tug of rotation — nothing illegal, since internal energy has been spent. Push the check further: writing the conserved quantity as a fixed $L=I\omega=12\ \text{kg·m}^2/\text{s}$ makes $K=\dfrac{L^2}{2I}$ rise as $I$ falls, exactly as observed.

## 3. A planet's path: the particle view

Switch viewpoints from a spinning body to a **single particle** under a central force — the gravitational pull toward the Sun, whose line of action passes through it. Torque about the Sun is $\vec\tau=\vec r\times\vec F=0$ because $\vec F\parallel\vec r$, so the planet's angular momentum about the Sun is conserved:

$$
L=mvr_\perp=\text{constant}.
$$

Two consequences, both Kepler's:

1. **Areal velocity is constant.** The area swept in time $dt$ is $dA=\tfrac12|\vec r\times\vec v\,|\,dt=\dfrac{L}{2m}\,dt$. With $L$ fixed, the orbit sweeps equal areas in equal times — the basis of the "faster at the near end" rule for comet orbits.
2. **Tangential speed trades against radius.** At an orbit's closest and farthest points, $\vec v$ is purely tangential ($r_\perp=r$), so

$$
mv_1r_1=mv_2r_2\quad\Rightarrow\quad v_2=v_1\frac{r_1}{r_2}.
$$

<learning-block type="example" title="Comet arithmetic">

A comet moves tangentially at $v_1=6.0\times10^4\ \text{m/s}$ when it is $r_1=1.0\times10^{10}\ \text{m}$ from the Sun. Receding to $r_2=3.0\times10^{10}\ \text{m}$, its tangential speed there is

$$
v_2=(6.0\times10^4)\frac{1.0\times10^{10}}{3.0\times10^{10}}=2.0\times10^4\ \text{m/s}.
$$

It is three times farther out and three times slower — the same $mvr$ either way. Its angular momentum about the Sun: $L=(m)(6.0\times10^4)(1.0\times10^{10})=6.0\times10^{14}m\ \text{kg·m}^2/\text{s}$ (written per unit comet mass), unchanged throughout.
</learning-block>

## 4. More shapes of the same conservation

**Disc dropped onto a disc.** A turntable with $I_1=2.0\ \text{kg·m}^2$ idles at $\omega_1=6.0\ \text{rad/s}$; a record player platter of $I_2=4.0\ \text{kg·m}^2$ at rest is lowered gently onto it, and friction between them brings both to a common rate:

$$
\omega_f=\frac{I_1\omega_1}{I_1+I_2}=\frac{12}{6}=2.0\ \text{rad/s}.
$$

Rotational kinetic energy falls from $K_i=\tfrac12(2.0)(36)=36\ \text{J}$ to $K_f=\tfrac12(6.0)(4)=12\ \text{J}$: friction is *internal* to the coupled pair, does no external torque, and dissolves $24\ \text{J}$ into heat. Perfectly mirroring perfectly inelastic collisions from the momentum chapter.

**A man on a turntable.** A man standing (not spinning) on a freely rotating turntable starts walking along its rim. He exerts a backwards force on the turntable; it spins one way while he circles the other, and the pair's total angular momentum — zero before, zero after — is conserved. Stop walking and both stop. Whatever angular momentum he generates in himself, the platform carries the equal and opposite share.

## Try it yourself

**Q1.** A diver on a springboard tucks from a spread-eagle position, cutting her moment of inertia from $12\ \text{kg·m}^2$ to $4.0\ \text{kg·m}^2$. If she left the board spinning at $3.0\ \text{rad/s}$, find her tucked spin rate, and the work she performed in tucking.

<details><summary>Show the reasoning</summary>

$$
\omega_2=\frac{12}{4.0}(3.0)=9.0\ \text{rad/s};
$$

kinetic energies: $K_1=\tfrac12(12)(3.0^2)=54\ \text{J}$ and $K_2=\tfrac12(4.0)(9.0^2)=162\ \text{J}$. The gain $108\ \text{J}$ is the muscular work of pulling her limbs in against the rotation — again, $K=\dfrac{L^2}{2I}$ with $L=36\ \text{kg·m}^2/\text{s}$ unchanged throughout the flight (gravity acts through the centre of mass, giving zero torque about it).
</details>

**Q2.** For the turntable-plus-platter coupling above, verify by direct calculation that angular momentum was conserved while kinetic energy was not, and identify the energy's destination.

<details><summary>Show the reasoning</summary>

Before: $L_i=I_1\omega_1=2.0\times6.0=12\ \text{kg·m}^2/\text{s}$; the platter carried none. After: $L_f=(2.0+4.0)(2.0)=12\ \text{kg·m}^2/\text{s}$. ✓ Equal.

Before: $K_i=\tfrac12(2.0)(6.0^2)=36\ \text{J}$. After: $K_f=\tfrac12(6.0)(2.0^2)=12\ \text{J}$. The $24\ \text{J}$ shortfall is the work done *against* the relative sliding between platter and turntable before their surfaces matched speeds; it leaves the mechanical books as thermal energy in both surfaces. Momentum conservation with simultaneous kinetic-energy loss is the signature of an inelastic *rotational* collision.
</details>

**Q3.** A small block of putty is fired horizontally, sticks to the rim of a vertically mounted wheel free to spin about its central axle. What is conserved during the sticking? Which quantity is not, and why?

<details><summary>Show the reasoning</summary>

During the brief impact the axle exerts an unknown impulsive reaction on the wheel — but that reaction acts *through* the axle, giving zero torque about it. So about the axle, angular momentum is conserved:

$$
mvR=(I_{\text{wheel}}+mR^2)\,\omega_f.
$$

Linear momentum is **not** conserved: the axle impulse changes the total horizontal momentum of putty + wheel, which is why this is no substitute for the momentum-conservation methods of straight-line collisions. Kinetic energy is not conserved either — the putty's collision with the rim is perfectly inelastic, and the mechanical energy shrinks by the familiar inelastic amount, as heat and deformation.
</details>

## Remember

- $\vec\tau_{ext}=0$ about an axis ⇒ angular momentum about that axis is conserved — the rotational twin of $\sum F=0$.
- For a spinning body changing shape: $I_1\omega_1=I_2\omega_2$, and $K=\dfrac{L^2}{2I}$, so skater-style tucking raises $K$ (muscle work) and coupling two spinners lowers it (heat).
- A particle under a central force keeps constant $mvr_\perp$; planets sweep equal areas in equal times, and $v\propto 1/r$ between an orbit's turning points.
- Axle-impulsive collisions conserve angular momentum about the axle but destroy linear momentum and kinetic energy — identify the pivot before you conserve anything.
- Conservation tells you where a rigid body *must* end up; to hold it still in the first place, you need the two equilibrium conditions of the next module.
