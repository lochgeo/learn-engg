## Why motion needs no push

A rolling ball slows down; a pushed trolley stops when you let go. For two thousand years this suggested the wrong law: *motion needs a continuous force*. Newton's insight was the opposite. A body moving at constant velocity needs **no** force at all; friction and drag are what slow it, and removing them lets motion continue unchanged. A force does not maintain velocity — it **changes** velocity. Every result in this chapter grows from that single correction, so it is worth pinning down precisely.

## 1. The first law: inertia

Newton's first law: *a body continues in its state of rest or of uniform motion in a straight line unless a net external force compels it to change that state.*

Two ideas are packed into this statement:

- **Inertia** is the reluctance of a body to change its velocity. Mass is the measure of inertia: a $1500\ \text{kg}$ car resists a change in motion far more than a $50\ \text{kg}$ crate, whatever the cause of the change.
- The law also **defines** a class of observers. A frame in which the first law holds is an *inertial frame*. Inside such a frame, zero net force genuinely means zero acceleration. (Frames that accelerate themselves will need fixing up in a later module.)

Everyday experience seems to contradict the first law only because friction is nearly always present. An ice puck on a long air table moves almost uniformly after one push — the closer you get to removing friction, the more clearly the law shows itself.

## 2. What a force is

A **force** is a push or a pull: an interaction between two bodies that can change a velocity. Three features specify one completely:

| Feature | What it fixes |
| --- | --- |
| magnitude | how strong the push is |
| direction | the line along which it acts |
| point of application | where on the body it acts |

Forces are vectors, with SI unit the newton: $1\ \text{N}=1\ \text{kg·m/s}^2$. A force that changes only the *direction* of the velocity (not its size) is still doing real work as a force — steering a bicycle round a corner requires a sideways force from the ground. This matters later for circular motion.

Two cautions about the word "force":

- A single body cannot exert a force on itself. Internal pushes inside a body sum to zero and never change the body's own motion.
- If the net force is zero, the velocity **stays** whatever it was: a body coasting at $8\ \text{m/s}$ with no net force keeps coasting at $8\ \text{m/s}$, in a straight line.

## 3. The second law: the quantitative link

Newton's second law connects force to the rate of change of velocity:

$$
\vec F_{\text{net}}=m\vec a=\frac{d\vec p}{dt},
$$

where $\vec p = m\vec v$ is the **momentum** and $\vec a$ the acceleration. Since $m$ is constant for ordinary speeds, the two forms agree. Three consequences students miss:

- The law is **vectorial**. Apply it axis by axis. A block sliding down an incline is handled one equation per direction: along the slope and perpendicular to it.
- $\vec F_{\text{net}}$ is the *sum of all external forces with signs*, not "the biggest force acting".
- The acceleration points along the net force, but the *velocity* need not. A projectile at the top of its flight has zero vertical velocity while gravity still acts.

**Defining the newton.** If a net force of $1\ \text{N}$ acts on $1\ \text{kg}$, the acceleration is $1\ \text{m/s}^2$. All unit conversions flow from this definition.

## 4. The third law: forces come in pairs

Newton's third law: *to every action there is an equal and opposite reaction.* When body A pushes body B with force $\vec F_{AB}$, body B pushes A with $\vec F_{BA}=-\vec F_{AB}$, simultaneously.

A genuine third-law pair has three signatures:

1. Equal in magnitude, opposite in direction.
2. Same **type** of force (both normal, both gravitational, both frictional).
3. Acting on **different bodies** — never on the same free-body diagram.

The last point explains why action–reaction pairs never cancel anything. The Earth pulls you down (weight); you pull the Earth up. They act on different bodies, so each body has its own separate force bookkeeping.

<learning-block type="mistake" title="Not all opposite-looking forces are third-law pairs">

The Earth pulls a book down with weight $mg$; the table pushes the book up with the normal force $N$. On a level table $N=mg$, and for a book at rest the two forces balance — but they are **not** an action–reaction pair:

- the pair involves two different types (gravitational vs normal);
- both act on the *same* body (the book);
- the true reaction to the book's weight is the book's gravitational pull on the Earth.

Cancellation happens because the *net force on the book is zero* (first law), not because the forces are paired. Telling equilibrium from a third-law pair is one of the most reliable markers of a careful mechanics student.

</learning-block>

## 5. A worked example: net force, not the loudest force

A $5\ \text{kg}$ crate on a level floor is pushed horizontally with $24\ \text{N}$. Friction on the crate is $9\ \text{N}$ opposing the motion. Find its acceleration.

Write Newton's second law along the direction of motion, taking the push as positive:

$$
F_{\text{net}}=24-9=15\ \text{N}, \qquad
a=\frac{F_{\text{net}}}{m}=\frac{15}{5}=3\ \text{m/s}^2.
$$

*Sanity check.* Vertically there is no acceleration, so the normal force must equal the weight: $N=mg=50\ \text{N}$ — a separate equation, and a reminder that $9\ \text{N}$ of friction is plausible only because $\mu_k \approx 9/50 = 0.18$, a reasonable value for wood on wood.

Notice that a careless reading — "a $24\ \text{N}$ force acts, so $a=24/5=4.8\ \text{m/s}^2$" — overestimates the acceleration by treating the push as if it were the net force. Combining **all** horizontal forces with signs is the whole job of the second law.

## 6. A reliable problem method

1. Decide which single body you are analysing.
2. List **every** external force acting on it (later modules turn this into a formal free-body diagram).
3. Choose axes — horizontal/vertical, or along/away from an incline.
4. Write $\sum F_x = ma_x$ and $\sum F_y = ma_y$ with signs.
5. Solve, then check units, signs and whether the magnitude is plausible.

## Try it yourself

**A.** A satellite drifts through deep space with its engines off. No appreciable force acts on it. What is its motion?

<details><summary>Show the reasoning</summary>

Net force zero, so by the first law its velocity is constant: it coasts in a straight line at constant speed indefinitely. It does not need a force to *keep moving* — only to change.
</details>

**B.** A $60\ \text{kg}$ skater pushes a $30\ \text{kg}$ sled forward with $18\ \text{N}$. What force acts on the skater, and what happens if the ice exerts negligible horizontal force on the skater?

<details><summary>Show the reasoning</summary>

By the third law the sled pushes back on the skater with $18\ \text{N}$, directed opposite the push. If the ice offers no horizontal force, that $18\ \text{N}$ is the net force on the skater: $a=18/60=0.3\ \text{m/s}^2$ backward. Equal and opposite forces on *different* bodies can produce *unequal* accelerations, because the masses differ.
</details>

**C.** A lift moves upward at a steady $4\ \text{m/s}$. For a passenger standing inside, how does the required net force compare with that of a lift moving downward at the same steady speed?

<details><summary>Show the reasoning</summary>

Identical: zero in both cases. Constant velocity means zero acceleration in either direction, so the floor's normal force equals the passenger's weight regardless of the *value* of the steady velocity. Only *changes* in velocity require a net force.
</details>

## Remember

- No net force means no *change* of velocity — the first law corrects the everyday illusion that motion needs a push.
- $\vec F_{\text{net}}=m\vec a$: use the **sum of all external forces** with signs, axis by axis.
- A third-law pair acts on different bodies and never cancels on one free-body diagram.
- Equal forces do not imply equal accelerations; masses decide that.
- Where do these forces come *from* and how do you draw them systematically? The next module builds the free-body diagram, the single most useful tool in mechanics.
