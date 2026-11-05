## Isolate, then account

Why does a crane's cable sometimes go slack, and why does a table holding an $8\ \text{kg}$ lamp with two slanted cords care about the angle? Questions like these become trivial — or impossible — depending on how systematically you account for forces. The free-body diagram (FBD) is that system: a single chosen body, drawn alone, with every external force acting on it drawn as an arrow at its point of application. Every successful mechanics solution in this chapter starts with one.

## 1. The four-step recipe

Given a situation, choose:

1. **The body.** Pick one object — a block, a lamp, a car — and imagine cutting it free from everything touching or attracting it.
2. **The forces.** For each thing that was "cut", ask what force it exerted on the body. Common contributors:
   - the Earth: gravity $mg$ downward;
   - surfaces in contact: normal force perpendicular to the surface, friction along it;
   - strings, ropes and cables: tension along the string, **pulling** the body toward the string;
   - springs: along the spring, proportional to stretch or compression;
   - anything explicitly pushing or pulling.
3. **The arrows.** Draw each force from its point of application, labelled. Length reflects relative magnitude; never draw a force that does not exist, and never omit one, "because it looks balanced".
4. **The axes.** Choose convenient perpendicular directions — horizontal/vertical on flat ground, along/away from an incline on slopes — and write $\sum F_x = ma_x$, $\sum F_y = ma_y$.

For an object at rest or at constant velocity, the right-hand sides are zero: that is **equilibrium**.

## 2. The normal force: not always $mg$

A surface, pushed on, pushes back perpendicular to itself. That contact response is the **normal force** $N$ ($normalis$: perpendicular). Writing $N = mg$ is a habit to break: $N$ adjusts itself to whatever is needed to keep the surfaces from interpenetrating, *up to the limit of breaking contact*.

| Situation | Normal force on a block of mass $m$ |
| --- | --- |
| At rest on a level floor, nothing else | $N = mg$ |
| Pushed *down* with extra force $F$ (level floor) | $N = mg + F$ |
| Pushed *up* with force $F$ (level floor, contact kept) | $N = mg - F$ |
| Lift accelerating upward with $a$ | $N = m(g+a)$ |
| On an incline at angle $\theta$ (smooth) | $N = mg\cos\theta$ |

The general rule is simple: set $\sum F_y = m a_y$ perpendicular to the surface and *solve* for $N$. In the last row $a_y = 0$ but the weight component $mg\cos\theta$ is what presses the block into the surface.

## 3. Tension: a pull along the string

A string or cable can only **pull**, never push (a slack rope exerts nothing). An ideal string is taken massless and inextensible; then:

- the tension is the same at both ends of a straight segment — otherwise an internal piece of zero mass would need infinite acceleration;
- over a frictionless, massless pulley, the tension is the same on both sides, and the two ends have equal *speeds* (a constraint built on further in the pulleys module).

Tension always pulls a body *along the string, away from the body*. A lamp hung from two slanted cords experiences two tension arrows pointing up-and-out along each cord.

### Worked example: a lamp on two cables

An $8\ \text{kg}$ lamp hangs from two light cords, each making $30^\circ$ with the vertical, symmetrically on either side. Find the tension in each cord. Take $g = 10\ \text{m/s}^2$.

*FBD of the lamp:* weight $80\ \text{N}$ down; tensions $T$ and $T$ along the two cords, each with a horizontal component and a vertical component. By symmetry the horizontal components cancel.

Vertical equilibrium, $\sum F_y = 0$:

$$
2T\cos 30^\circ = mg = 80\ \text{N}
\quad\Rightarrow\quad
T = \frac{80}{2\cos 30^\circ} = \frac{80}{2 \times 0.866} \approx 46.2\ \text{N}.
$$

*Sanity check.* Each cord carries a vertical share of $40\ \text{N}$, but because the cords are slanted the whole tension must be larger than that vertical share — $46.2\ \text{N} > 40\ \text{N}$, as expected. The flatter the cords, the larger the tension: with cords nearly horizontal the tension grows without bound, which is why tight clotheslines snap.

## 4. Equilibrium: two equations, many uses

A body is in **equilibrium** when $\vec F_{\text{net}} = 0$, which means *both independently*:

$$
\sum F_x = 0, \qquad \sum F_y = 0.
$$

Static problems (nothing moves, or something moves at constant velocity) are solved purely with these. The strategy for two equations with two unknowns:

- pick axes so one unknown force lies along an axis and its partner perpendicular;
- use one equation to eliminate a shared quantity, the other to finish;
- a third check — moments, or a redundant axis — confirms the answer.

For a body on the point of slipping, equilibrium is "just barely" broken and friction enters at its maximum value — the bridging idea between this module and the friction module next.

<learning-block type="mistake" title="Two classic FBD failures">

- **Inventing forces to match an expectation.** If a block slides at constant velocity across a floor, a student adds an invisible "force of motion" forward. There is no such force; the diagram must show only weight, normal force, friction, and anything touching the body. Constant velocity is what *tells you* the forward push equals friction — not an extra arrow.
- **Including a force on the wrong diagram.** The push of the block on the table belongs to the *table's* FBD, not the block's. One diagram, one body, and only forces acting *on* it.

</learning-block>

## 5. A worked example with a hidden force

A $2\ \text{kg}$ box is pushed against a vertical wall by a horizontal force of $30\ \text{N}$ and stays at rest. Find the normal force, the friction force, and the least possible $\mu_s$. Use $g = 10\ \text{m/s}^2$.

*FBD:* weight $20\ \text{N}$ down; push $30\ \text{N}$ into the wall; normal force $N$ out of the wall (horizontal, opposing the push); friction $f_s$ vertical, whichever direction stops sliding.

Horizontal: $N = 30\ \text{N}$. Vertical: $f_s = mg = 20\ \text{N}$ upward. For contact to persist,

$$
f_s \le \mu_s N \quad\Rightarrow\quad \mu_s \ge \frac{20}{30} = 0.67.
$$

*Sanity check.* The friction needed ($20\ \text{N}$) is supplied by a surface being pressed with only $30\ \text{N}$ — a large demand, hence the largish $\mu_s$. Here friction is vertically *up* even though nothing is "moving vertically down": friction opposes the sliding that *would* happen.

## Try it yourself

**A.** A $5\ \text{kg}$ bucket hangs from a single vertical rope. What is the rope tension? If the bucket is then hoisted upward with acceleration $2\ \text{m/s}^2$, what is the tension?

<details><summary>Show the reasoning</summary>

At rest (or any constant velocity): $T = mg = 50\ \text{N}$. Accelerating upward: $\sum F_y = ma_y$ gives $T - mg = ma$, so $T = m(g+a) = 5 \times 12 = 60\ \text{N}$. Equilibrium and acceleration are different questions about the same diagram.
</details>

**B.** A $1.0\ \text{kg}$ ornament hangs from two wires: one exactly horizontal, the other at $45^\circ$ above the horizontal. Find both tensions.

<details><summary>Show the reasoning</summary>

Weight $= 10\ \text{N}$ down. Vertical balance: $T_2 \sin 45^\circ = 10$, so the slanted wire carries $T_2 = 10/0.707 \approx 14.1\ \text{N}$. Horizontal balance: $T_1 = T_2\cos 45^\circ = 10\ \text{N}$. Note the horizontal wire carries the *least* load direction-wise but still a full $10\ \text{N}$ — slanted supports share the job differently.
</details>

**C.** A block is held against a smooth vertical wall by a force $F$ at $60^\circ$ above the horizontal, pushing into the wall. For no vertical sliding, find $F$ in terms of $m$ and $g$.

<details><summary>Show the reasoning</summary>

The push has a vertical component $F\sin 60^\circ$ upward plus a horizontal component $F\cos 60^\circ$ into the wall. With a smooth wall, friction is absent and vertical equilibrium needs $F\sin 60^\circ = mg$:

$$F = \frac{mg}{\sin 60^\circ} = \frac{2mg}{\sqrt 3} \approx 1.15\,mg.$$

The horizontal component does the pressing (setting the normal force); the vertical component does the holding.
</details>

## Remember

- A free-body diagram shows **one body** and only the forces acting **on** it.
- The normal force is solved from $\sum F_y = ma_y$; it equals $mg$ only in special cases.
- Tension pulls along the string and is uniform in an ideal string over an ideal pulley.
- Equilibrium means both $\sum F_x = 0$ and $\sum F_y = 0$, independently.
- When surfaces touch and might slide, friction becomes the next force to master — the subject of the following module.
