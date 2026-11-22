## Speedy yet unhurried

A nitrogen molecule at room temperature travels at about $517\ \text{m/s}$, yet the smell of curry opened at one end of a kitchen takes tens of seconds to reach the other end — not the milliseconds its raw speed suggests. The resolution is that molecules do not fly straight; they fly **zigzag**, colliding with each other an enormous number of times per second. This lesson quantifies the zigzag: how far a molecule travels between collisions, and how many collisions it suffers per second. These two numbers control diffusion, viscosity, thermal conduction and the design of vacuum systems.

## 1. The molecular picture of a collision

Treat a molecule as a hard sphere of diameter $d$ — of order $10^{-10}\ \text{m}$. During a two-body collision, the centres come no closer than $d$, and the paths before and after are straight-line segments. At atmospheric pressure the path between bounces is about a hundred times the molecular diameter; each collision scatters the direction of travel afresh. One molecule between two wall touches therefore advances as the crow flies far less than it actually travels.

## 2. Deriving the mean free path

Define the **mean free path** $\lambda$ as the average distance a molecule travels between two successive collisions. Sweep the space around a chosen molecule as it moves: in travelling distance $\ell$, a molecule knocks out a cylinder of volume $\pi d^2\,\ell$ — cross-sectional area $\pi d^2$, because two spheres of diameter $d$ collide when their centres come within $d$.

Two corrections complete the count:

- The molecule moves among $n$ molecules per unit volume (number density), so a cylinder of length $\ell$ sweeps $\pi d^2\ell\,n$ potential partners.
- Partners also move. Averaging the **relative** speeds of two randomly moving molecules replaces the molecule's own speed by $\sqrt2$ times it without changing the geometry, because the relative encounter rate rises by $\sqrt2$.

Hence

$$
\lambda=\frac{1}{\sqrt2\,\pi d^{2}n}.
$$

Substituting the ideal-gas density $n=p/(k_BT)$ converts pressure and temperature into the formula:

$$
\lambda=\frac{k_BT}{\sqrt2\,\pi d^{2}p}.
$$

Both forms are used in problems: the first when molecule counts are given, the second when pressure and temperature are. Note what is **absent** from the formula: the molecule's mass and its speed. A slow molecule and a fast one of the same species have, on average, the same free path.

## 3. How λ responds to pressure and temperature

At fixed temperature,

$$
\lambda\propto\frac{1}{p}:
$$

diluting the gas (lower pressure) proportionally lengthens the free path. At fixed pressure, $\lambda\propto T$ — heating expands the gas at fixed $p$, thinning it out. And in a sealed vessel, where $n$ is fixed, $\lambda$ is fixed: cooling or heating the gas changes how fast molecules fly but not how far they get between bounces.

| Condition | λ does |
| --- | --- |
| pressure halved, $T$ fixed | doubles |
| temperature doubled, $p$ fixed | doubles |
| temperature doubled at fixed volume | unchanged (number density fixed) |
| pressure raised ten-fold | shrinks ten-fold |

### Worked example: air at STP

Take air molecules with a representative diameter $d=3.0\times10^{-10}\ \text{m}$ at STP ($p=1.013\times10^{5}\ \text{Pa}$, $T=273\ \text{K}$).

Step 1 — number density:

$$
n=\frac{p}{k_BT}=\frac{1.013\times10^{5}}{(1.38\times10^{-23})(273)}=2.7\times10^{25}\ \text{m}^{-3}.
$$

Step 2 — sweep factor:

$$
\sqrt2\,\pi d^2=(1.414)(3.14)(9.0\times10^{-20})=4.0\times10^{-19}\ \text{m}^2.
$$

Step 3 — mean free path:

$$
\lambda=\frac{1}{(2.7\times10^{25})(4.0\times10^{-19})}=\frac{1}{1.1\times10^{7}}\approx9\times10^{-8}\ \text{m}.
$$

Step 4 — mean speed and collision frequency:

$$
\langle v\rangle=\sqrt{\frac{8RT}{\pi M}}=\sqrt{\frac{8(8.314)(273)}{\pi(0.029)}}\approx447\ \text{m/s},
\qquad
z=\frac{\langle v\rangle}{\lambda}=\frac{447}{9\times10^{-8}}\approx5\times10^{9}\ \text{s}^{-1}.
$$

Sanity checks: $\lambda\approx90\ \text{nm}$ is about $300$ molecular diameters — the "hundredfold" claim of Section 1 is on the low side but the same order. And $z\sim10^{9}\text{--}10^{10}$ collisions per second says each molecule is in near-constant conversation with its neighbours, which is why gases behave so **collectively** despite the free flight of each.

## 4. When the vessel is smaller than the free path

Lower the pressure hard and $\lambda$ explodes. At $p=10^{-5}\ \text{Pa}$ and $300\ \text{K}$,

$$
n=\frac{p}{k_BT}=\frac{10^{-5}}{(1.38\times10^{-23})(300)}=2.4\times10^{18}\ \text{m}^{-3},
\qquad
\lambda=\frac{1}{(2.4\times10^{18})(4.0\times10^{-19})}\approx1\ \text{m}.
$$

One metre — larger than most laboratory apparatus. In this **molecular-flow régime** a molecule is far more likely to hit a wall than another molecule, so gas-wall interactions, not gas-gas collisions, govern the behaviour. Vacuum engineers exploit exactly this: cryopumps and turbomolecular pumps push $\lambda$ beyond the chamber's scale, giving clean, collision-free beams for particle accelerators and electron microscopes. Everyday air at $\lambda\approx10^{-7}\ \text{m}$ sits at the opposite extreme.

<learning-block type="mistake" title="Forgetting that λ does not track speed">

$\lambda=1/(\sqrt2\pi d^2n)$ contains the number density, not the speed. A common error is to assume that heating a sealed flask makes molecules travel farther between collisions because they are faster. It does not: with the vessel full, $n$ is unchanged, the rate of encounters rises exactly in step with the speed, and $\lambda$ stays put. Temperature speeds the traffic up without changing how crowded the road is.

</learning-block>

## Try it yourself

**1.** At a fixed temperature, by what factor must the pressure change so that the mean free path becomes three times longer?

<details><summary>Show the reasoning</summary>

$\lambda\propto1/p$ at fixed $T$. Inverting: to make $\lambda$ $3$ times longer, the pressure must drop to one third of its original value.
</details>

**2.** For the same gas at the same pressure, compare the mean free paths at $273\ \text{K}$ and $546\ \text{K}$.

<details><summary>Show the reasoning</summary>

At fixed $p$, $\lambda\propto T$ (doubling $T$ doubles the volume per molecule and thins the gas). So

$$
\frac{\lambda_{546}}{\lambda_{273}}=\frac{546}{273}=2,
$$

and the mean free path doubles.
</details>

**3.** A vessel of edge $10\ \text{cm}$ is pumped until $\lambda$ reaches $0.50\ \text{m}$. Describe what a typical molecule now does between wall contacts.

<details><summary>Show the reasoning</summary>

The free path vastly exceeds the vessel size, so a molecule crosses the container, bounces elastically off a wall, crosses again, and typically **never meets another molecule before reaching the next wall**. Molecule–wall collisions dominate; molecule–molecule collisions are rare exceptions. Transport is now by intermittent wall-to-wall flight, which is exactly the régime long vacuum tubes exploit.
</details>

## Remember

- $\lambda$ — mean free path — is the average straight stretch between two collisions; the formula is $\lambda=1/(\sqrt2\pi d^2n)=k_BT/(\sqrt2\pi d^2p)$.
- $\sqrt2$ appears because collisions average **relative** motion; $d$ is the molecular diameter, a scale of $10^{-10}\ \text{m}$.
- At fixed $T$: $\lambda\propto1/p$. At fixed $p$: $\lambda\propto T$. In a sealed vessel: $\lambda$ is set by $n$ and does not move.
- Collisions per second: $z=\langle v\rangle/\lambda$; at atmospheric pressure $z\sim10^{9}\text{--}10^{10}\ \text{s}^{-1}$, while the free path is of order $10^{-7}\ \text{m}$.
- When $\lambda$ grows larger than the vessel, gas-wall collisions rule; this is the basis of high-vacuum design.
- Next lesson steps outside the ideal-gas picture itself: what real gases actually do, and how the van der Waals corrections — molecular size and attraction — repair the model.
