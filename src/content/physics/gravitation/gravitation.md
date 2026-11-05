## The apple and the Moon fall together

Drop an apple and it gains speed at $9.8\ \text{m/s}^2$. The Moon, about $60$ Earth radii away, accelerates toward Earth at roughly $2.7\times10^{-3}\ \text{m/s}^2$ — and $9.8/3600\approx2.7\times10^{-3}$, exactly what an inverse-square law predicts at $r=60R_E$. Newton's leap was that one attraction rules both cases. The Moon keeps missing the Earth only because it also carries a large sideways velocity.

## 1. The inverse-square law

Every pair of point masses attracts each other along the line joining them with magnitude

$$
F=\frac{Gm_1m_2}{r^2},
$$

| Symbol | Meaning | SI unit |
| --- | --- | --- |
| $F$ | force on either mass | newton |
| $m_1,\ m_2$ | the two interacting masses | kilogram |
| $r$ | separation of their centres | metre |
| $G$ | universal gravitational constant | $\text{N·m}^2/\text{kg}^2$ |

$G=6.67\times10^{-11}\ \text{N·m}^2/\text{kg}^2$ is tiny, so gravity between everyday objects is immeasurably small. Rearranging, $G=Fr^2/(m_1m_2)$: $G$ is the pull between two $1\ \text{kg}$ masses a metre apart.

The word *universal* matters: one constant governs two marbles and the Sun–Jupiter pair. Doubling $r$ divides $F$ by four; trebling divides it by nine. Change the masses or separation and $F$ follows — $G$ never changes.

## 2. Superposition: forces add vectorially

If several masses pull on one test mass, the net force is the **vector sum** of the individual pulls; each pair interacts as if the others did not exist. This principle of superposition is what makes gravitation tractable: a complicated distribution can be handled piece by piece. Along one line it reduces to careful signed arithmetic; pulls at an angle must be combined by components before the final magnitude is quoted.

## 3. What spherical bodies pull with

Real bodies are not points, but Newton's **shell theorem** rescues the simple law:

- **Outside** a spherically symmetric body, its pull is exactly that of a point mass equal to its whole mass, placed at its centre.
- **Inside** a thin spherical shell, the pull of that shell is zero everywhere; a surrounding shell contributes nothing to any point within it.

So for a planet of mass $M$ and radius $R$, any outside mass feels $F=GMm/r^2$ with $r$ measured from the centre — even just outside the surface. Inside the planet, only the mass nearer the centre pulls (the outer shells cancel), which we use when studying how $g$ changes with depth later in the chapter.

## 4. Gravitation and electrostatics side by side

| Feature | Gravitation | Electrostatics |
| --- | --- | --- |
| Force law | $F=Gm_1m_2/r^2$ | $F=kq_1q_2/r^2$ |
| Constant | $G=6.67\times10^{-11}$ | $k=9\times10^{9}$ |
| Source | mass, always positive | charge, $\pm$ |
| Direction | always attractive | attractive or repulsive |
| Shielding | impossible | possible (conductors) |
| Distance behaviour | inverse-square | inverse-square |

Both laws share the $1/r^2$ form, so intuition transfers between them — but their strengths differ enormously: between two protons, electric repulsion exceeds gravitational attraction by a factor near $10^{36}$. Gravity dominates the universe only because astronomical bodies have essentially zero net charge but vast mass.

## 5. Measuring G — and weighing the Earth

Cavendish's torsion balance measured $G$ by timing the twist of a fine fibre when known lead spheres were brought near two hanging ones: even $10^{-7}\ \text{N}$ forces give a measurable twist. Once $G$ is known, the Earth can be weighed using its own surface gravity:

$$
M_E=\frac{gR_E^2}{G}.
$$

With $g=9.8\ \text{m/s}^2$ and $R_E=6.4\times10^6\ \text{m}$, this gives $M_E\approx6\times10^{24}\ \text{kg}$. Dividing by the Earth's volume gives a mean density near $5500\ \text{kg/m}^3$ — far denser than surface rock, an early clue that the interior is iron-rich.

## Worked example: two pulls at two very different scales

**(a)** Two $60\ \text{kg}$ students stand $1.5\ \text{m}$ apart. How hard do they pull on each other?

$$
F=\frac{Gm_1m_2}{r^2}=\frac{(6.67\times10^{-11})(60)(60)}{(1.5)^2}=\frac{2.40\times10^{-7}}{2.25}\approx1.1\times10^{-7}\ \text{N}.
$$

About a hundred-thousandth of the weight of a grain of sand: real, but far too small to notice.

**(b)** Find the Earth's pull on the Moon: $M_E\approx6.0\times10^{24}\ \text{kg}$, $M_M\approx7.35\times10^{22}\ \text{kg}$, centre-to-centre distance $3.84\times10^8\ \text{m}$.

$$
F=\frac{GM_EM_M}{r^2}=\frac{(4.0\times10^{14})(7.35\times10^{22})}{1.47\times10^{17}}\approx2.0\times10^{20}\ \text{N}.
$$

**Sanity check:** divide by the Moon's mass to get its acceleration: $2.0\times10^{20}/7.35\times10^{22}\approx2.7\times10^{-3}\ \text{m/s}^2$ — the Moon's actual orbital acceleration, $g/3600$. Same law, both extremes of scale, and both numbers behave.

<learning-block type="mistake" title="Range, centre and direction errors">

- **Using surface-to-surface distance** in $F=GMm/r^2$. The law needs centre-to-centre separation; the shell theorem is what licenses treating spheres this way.
- **Adding force magnitudes** when pulls act at an angle. Superposition is a vector sum.
- **Assuming $G$ changes with distance or medium.** $G$ is universal; it is $F$ that falls as $1/r^2$.
- **Forgetting the third law.** Both bodies feel equal and opposite pulls, however different their masses.

</learning-block>

## Try it yourself

**1. How close would two $1\ \text{kg}$ point masses have to be to attract with $1\ \text{N}$?**

<details><summary>Show the reasoning</summary>

Set $G(1)(1)/r^2=1$, so $r=\sqrt{G}=\sqrt{6.67\times10^{-11}}\approx8.2\times10^{-6}\ \text{m}$. A newton of direct gravity between kilogram masses needs sub-millimetre separation, where real bodies would overlap. Gravity is felt through planetary masses, not laboratory ones.
</details>

**2. Lead spheres of $5\ \text{kg}$ and $10\ \text{kg}$ have centres $2\ \text{m}$ apart. Compare the pull of each on the other.**

<details><summary>Show the reasoning</summary>

$F=(6.67\times10^{-11})(5)(10)/2^2\approx8.3\times10^{-10}\ \text{N}$, identical for both bodies: the pulls form a third-law pair. The $5\ \text{kg}$ sphere accelerates twice as much only because it has half the mass; the forces are equal.
</details>

**3. A probe floats at the centre of a hollow spherical station of mass $M$, with a distant planet far outside the station. What is the net gravitational force on the probe?**

<details><summary>Show the reasoning</summary>

The shell's pull is zero by the shell theorem. The distant planet's pull passes through unchanged, as if the shell were not there. So the probe feels only the planet: gravity cannot be shielded.
</details>

## Remember

- $F=Gm_1m_2/r^2$, with $r$ measured centre to centre and $G$ the same everywhere but tiny.
- Superposition means **vector** addition of every pair's pull.
- Outside any sphere, treat its whole mass as a point at the centre; inside a shell, its pull is exactly zero.
- Gravitation and electrostatics share the inverse-square form but differ in sign freedom and strength — gravity is about $10^{36}$ times weaker between two protons.
- Cavendish measured $G$, and that measurement weighed the Earth.

The next module re-expresses this force as **field** and **potential** — quantities attached to points of space rather than to pairs of bodies.
