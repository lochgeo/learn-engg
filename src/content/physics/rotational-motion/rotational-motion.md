## Why one point can stand in for many

Throw a hammer across a room and every bit of it tumbles: the head loops over the handle in some complicated path. Yet one point on the hammer traces a clean parabola, exactly as a point mass would. That special point — the **centre of mass** — is the answer to a practical question: for describing the overall motion of an extended object, *which single point may I treat as the whole object?*

This module builds that idea for collections of particles, then for continuous bodies, and uses it to separate the two jobs every extended object does at once: translation of the centre of mass, and rotation about it. The rotation side of that story is developed in the next modules on torque and moment of inertia.

## 1. Defining the centre of mass

For a system of point masses, the centre of mass is the mass-weighted average of their positions:

$$
\vec r_{cm}=\frac{m_1\vec r_1+m_2\vec r_2+\cdots+m_n\vec r_n}{m_1+m_2+\cdots+m_n}=\frac{\sum m_i\vec r_i}{M},
$$

where $M=\sum m_i$ is the total mass. Work component by component: each coordinate of the centre of mass is the same weighted average of that coordinate alone.

Two properties follow immediately and are worth internalising:

- **Heavier masses pull the centre of mass toward themselves.** The centre of mass divides the line joining two masses in the inverse ratio of the masses: if masses $m_1$ and $m_2$ sit at positions $\vec r_1$ and $\vec r_2$, then $m_1|\vec r_{cm}-\vec r_1|=m_2|\vec r_2-\vec r_{cm}|$.
- **The centre of mass need not lie inside the body.** A ring's centre of mass is at its empty centre; a boomerang's lies in the air of its inner gap.

## 2. Two masses and composite bodies

**Worked example (two masses).** A $2\ \text{kg}$ mass sits at $x=0$ and a $6\ \text{kg}$ mass at $x=4\ \text{m}$. Then

$$
x_{cm}=\frac{(2)(0)+(6)(4)}{2+6}=\frac{24}{8}=3\ \text{m}.
$$

The centre of mass is $3\ \text{m}$ from the small mass and $1\ \text{m}$ from the large one — three times closer to the heavier mass, as the inverse-ratio rule demands.

**Worked example (composite body).** Two identical uniform rods, each of length $L$ and mass $m$, are joined rigidly at one common end to form a right angle. Place one rod along the $x$-axis and the other along the $y$-axis, with the joint at the origin.

Each uniform rod has its own centre of mass at its midpoint: $(L/2,\,0)$ and $(0,\,L/2)$. Treat the two rods as two point masses $m$ located at their midpoints:

$$
x_{cm}=\frac{m(L/2)+m(0)}{2m}=\frac{L}{4},\qquad y_{cm}=\frac{L}{4}.
$$

The method generalises: **cut a composite body into symmetric pieces, place each piece's whole mass at its own centre of mass, and average again.** This two-stage averaging is the standard technique for L-shaped laminae, dumbbells, and loaded structures.

## 3. Continuous bodies

A solid body is an enormous collection of particles, so replace the sum by an integral over mass elements:

$$
\vec r_{cm}=\frac{1}{M}\int \vec r\,dm.
$$

For bodies with simple symmetry — a uniform rod, disc, sphere, or rectangular plate — symmetry alone locates the centre of mass at the geometric centre without any integration. Integration earns its keep when symmetry is broken.

**Worked example (a hole shifts the centre).** A uniform circular plate of radius $2R$ has a circular hole of radius $R$ cut from it, with the hole's centre a distance $R$ from the plate's centre.

Treat the hole as *negative mass*. With areal mass density $\sigma$: full plate mass $=4\pi\sigma R^2$ centred at $x=0$; hole mass $=\pi\sigma R^2$ centred at $x=+R$. The remaining body has mass $3\pi\sigma R^2$, and

$$
x_{cm}=\frac{(4\pi\sigma R^2)(0)-(\pi\sigma R^2)(R)}{3\pi\sigma R^2}=-\frac{R}{3}.
$$

Removing material pushes the centre of mass **away** from the hole by $R/3$. Sanity check: the answer must lie between the two contributing centres ($-R/3$ lies between $0$ and the far side of the plate) and must lie on the line joining them. It does.

## 4. Motion of the centre of mass

Differentiate the definition twice. Because $\sum m_i\vec r_i = M\vec r_{cm}$ is constant in structure, the second derivative gives

$$
M\vec a_{cm}=\sum \vec F_{ext}.
$$

This is the central result of the module: **the centre of mass moves exactly as a point of mass $M$ acted on by the total external force.** The internal structure — tumbling, wobbling, exploding — is irrelevant to the path of the centre of mass.

<learning-block type="example" title="The hammer and the projectile">

A hammer thrown spinning follows a parabola *only at its centre of mass*; every other point wobbles around that parabola. If a shell explodes mid-flight, the fragments fly apart in all directions, but gravity still acts on each fragment, so the vector sum of external forces is unchanged and the **centre of mass of all fragments continues on the original parabola** until anything hits the ground.

</learning-block>

### Quantitative example: man on a boat

A $60\ \text{kg}$ man walks $2\ \text{m}$ toward the right relative to a $120\ \text{kg}$ boat initially at rest on calm water. Horizontal external forces (water resistance ignored) are negligible, so the centre of mass of man + boat stays fixed. If the boat drifts a distance $x$ to the left, the man's ground-frame displacement is $(2-x)$ to the right:

$$
60(2-x)=120x \quad\Rightarrow\quad x=\frac{120}{180}=\frac{2}{3}\ \text{m}.
$$

The boat recoils $0.67\ \text{m}$ to the left. No external horizontal force acts — yet something moves. That something is internal.

## 5. Why internal forces cannot move the centre of mass

The man pushes backward on the boat; by Newton's third law the boat pushes forward on the man with exactly equal strength. These two forces form an action–reaction pair: equal magnitude, opposite direction, acting on different parts of the system. Their vector sum is **zero**, so they contribute nothing to $\sum F_{ext}$ and cannot accelerate $\vec a_{cm}$.

The same argument works for any pair of internal forces: springs inside a satellite, gravitational pulls between the fragments of an exploding shell, tensions inside a rotating dumbbell. Each third-law pair sums to zero. Only forces from *outside the chosen boundary* — gravity, friction from the ground, a push from a hand — can shift the centre of mass.

This is the deepest use of "choose your system" from the momentum module: once a force becomes internal, it drops out of the centre-of-mass equation automatically.

<learning-block type="mistake" title="Averaging positions without the masses">

A frequent error is to put the centre of mass midway between two particles regardless of their masses. The midpoint formula $\vec r_{cm}=(\vec r_1+\vec r_2)/2$ holds only for equal masses. Always weight by mass: a $1\ \text{kg}$ and a $3\ \text{kg}$ mass separated by $2\ \text{m}$ have their centre of mass $0.5\ \text{m}$ from the heavy one, not $1\ \text{m}$. A related slip: when a body has a hole, forgetting that removed material must be subtracted (the negative-mass trick), not ignored.

</learning-block>

## Try it yourself

**Q1.** Masses of $1\ \text{kg}$, $2\ \text{kg}$ and $3\ \text{kg}$ sit on a light straight rod at $x=0\ \text{m}$, $1\ \text{m}$ and $2\ \text{m}$. Where is the centre of mass of the system?

<details><summary>Show the reasoning</summary>

$$
x_{cm}=\frac{(1)(0)+(2)(1)+(3)(2)}{1+2+3}=\frac{0+2+6}{6}=\frac{8}{6}=\frac{4}{3}\ \text{m}\approx1.33\ \text{m}.
$$

The point lies between the middle and the heavy end, as it should: more than half the mass lives in the outer $1\ \text{m}$.
</details>

**Q2.** A uniform disc of radius $R$ has a smaller disc of radius $R/2$ cut out, the hole's centre lying on the rim of the large disc (i.e. a distance $R$ from the centre). How far from the large disc's centre is the new centre of mass?

<details><summary>Show the reasoning</summary>

Masses scale with areas: full disc $\propto \pi R^2$, hole $\propto \pi(R/2)^2=\pi R^2/4$. With the hole centred at $x=+R$:

$$
x_{cm}=\frac{(\pi R^2)(0)-(\pi R^2/4)(R)}{\pi R^2-\pi R^2/4}=\frac{-R/4}{3/4}=-\frac{R}{3}.
$$

The centre of mass shifts $R/3$ to the side opposite the hole — the same $-R/3$ shift as the plate in Section 3, because that plate was exactly this shape.
</details>

**Q3.** Two ice skaters (masses $40\ \text{kg}$ and $60\ \text{kg}$) push off each other on frictionless ice, starting from rest. Describe the motion of their common centre of mass.

<details><summary>Show the reasoning</summary>

The push is an internal force of the two-skater system, and no external horizontal force acts. Since the centre of mass was at rest, it **remains at rest**: $M\vec a_{cm}=\sum\vec F_{ext}=0$. The skaters move apart in opposite directions with momenta equal and opposite, but the point between them — the weighted average of their positions — never moves. Watch the midpoint between them and you see nothing happen; watch either skater alone and both appear to be in motion.
</details>

## Remember

- The centre of mass is the **mass-weighted** average position; compute it coordinate by coordinate.
- For composites, average the pieces' centres of mass, each weighted by its own mass; for holes, subtract mass at the hole's centre.
- $M\vec a_{cm}=\sum\vec F_{ext}$: the centre of mass responds only to external forces, and an exploding shell's centre of mass keeps its parabola.
- Internal forces come in third-law pairs and cancel; they can move the parts but never the whole.
- Rotation still needs describing: the next module supplies the rotational counterparts of force and momentum, torque and angular momentum.
