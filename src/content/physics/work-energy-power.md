## Start with the physical meaning

In everyday speech, “work” can mean effort. In mechanics, work measures energy transferred by a force while its point of application moves. A force can be large and tiring yet do **zero mechanical work** on an object if that object does not move in the force’s direction.

## 1. The scalar product: the mathematical tool for work

Work uses the **scalar product** (or dot product) of two vectors. For vectors $\vec A$ and $\vec B$ separated by angle $\theta$,

$$
\vec A\cdot\vec B=AB\cos\theta.
$$

The result is a scalar, not a new vector. It measures how much one vector lies along the other: parallel vectors have a positive dot product, perpendicular vectors have zero dot product, and oppositely directed vectors have a negative dot product. In components,

$$
\vec A\cdot\vec B=A_xB_x+A_yB_y+A_zB_z.
$$

This also explains why only the component of force in the direction of displacement matters. Dot products are commutative and distributive, so $\vec A\cdot\vec B=\vec B\cdot\vec A$ and $\vec A\cdot(\vec B+\vec C)=\vec A\cdot\vec B+\vec A\cdot\vec C$.

For a constant force $\vec F$ and displacement $\Delta\vec r$,

$$
W=\vec F\cdot\Delta\vec r=F\,\Delta r\cos\theta,
$$

where $\theta$ is the angle between the force and displacement. Work is a **scalar**. Its SI unit is the joule: $1\ \text{J}=1\ \text{N·m}$.

## 2. Positive, negative, or zero?

Only the component of force parallel to the displacement contributes.

- **Positive work:** the force has a component along the motion. A person pushing a cart forward does positive work on it.
- **Negative work:** the force has a component against the motion. Kinetic friction usually does negative work on a sliding object.
- **Zero work:** the force is perpendicular to displacement, or there is no displacement. The normal force on a box sliding across a level floor does no work because it is vertical while the box moves horizontally.

### The angle matters

A force of $30\ \text{N}$ pulls a crate $4\ \text{m}$ along the floor at $60^\circ$ above the horizontal. The displacement is horizontal, so

$$
W=F\Delta r\cos\theta=(30)(4)\cos60^\circ=60\ \text{J}.
$$

Using all $30\ \text{N}$ as if it were horizontal would incorrectly give $120\ \text{J}$. Draw the angle between force and displacement, not between the force and some unrelated axis.

## 3. Work by several forces

When several forces act, calculate each force’s work or combine the forces into a net force. The **net work** is the sum of the individual works:

$$
W_{net}=W_1+W_2+\cdots.
$$

For a box sliding $5\ \text{m}$ across a floor, suppose a pull does $40\ \text{J}$ of work, friction does $-15\ \text{J}$, and gravity and the normal force each do zero work. The total is $W_{net}=25\ \text{J}$.

## 4. When the force changes

If a one-dimensional force varies with position, divide the motion into tiny displacements. Each small piece contributes $dW=F_x\,dx$, so

$$
W_{a\to b}=\int_a^b F_x(x)\,dx.
$$

On a graph of force against position, work is the **signed area** between the curve and the position axis. Areas above the axis are positive; areas below are negative. A changing force does not mean “use the average force” unless that average has been calculated correctly.

### The work–energy theorem still holds

For a variable net force, split the path into tiny displacements. On each piece, $dW_{net}=F_{net,x}\,dx$. Adding every piece gives

$$
W_{net}=\int \vec F_{net}\cdot d\vec r=K_f-K_i.
$$

So $W_{net}=\Delta K$ is not limited to constant forces or straight-line, constant-acceleration motion. It applies to the **net** work; individual forces may add or remove energy while their sum determines the change in kinetic energy.

### A spring as a variable-force example

For a spring displaced by $x$ from its relaxed length, Hooke’s law gives $F_s=-kx$. The minus sign says that the spring force points back toward equilibrium. If an external agent slowly stretches it from $x=0$ to $x=A$, the external work is

$$
W_{ext}=\int_0^A kx\,dx=\frac12kA^2.
$$

The spring itself does the opposite work, $W_s=-\frac12kA^2$.

## 5. A reliable problem method

1. Choose the object or system you are tracking.
2. Draw the displacement and the forces that act on it.
3. Decide which forces do positive, negative, or zero work.
4. Use $F\Delta r\cos\theta$ for a constant force, or signed area / integration for a variable force.
5. Keep the sign and unit. Then ask whether the result makes physical sense.

## Try these

**A.** A student holds a $6\ \text{kg}$ backpack motionless for $20\ \text{s}$. How much mechanical work does the student do on the backpack?

<details><summary>Show the reasoning</summary>

The backpack’s displacement is zero. Therefore the work on the backpack is $W=\vec F\cdot\Delta\vec r=0$. The student uses chemical energy and may feel tired, but that is not mechanical work done on the stationary backpack.
</details>

**B.** A constant $12\ \text{N}$ force points opposite a $3\ \text{m}$ displacement. Find its work.

<details><summary>Show the reasoning</summary>

The angle is $180^\circ$: $W=12(3)\cos180^\circ=-36\ \text{J}$. The force transfers energy away from the object’s mechanical motion.
</details>

**C.** A force follows $F_x=2x$ newtons as an object moves from $x=0$ to $x=3\ \text{m}$. Find the work.

<details><summary>Show the reasoning</summary>

$$
W=\int_0^3 2x\,dx=[x^2]_0^3=9\ \text{J}.
$$

This is also the triangular area under the straight-line $F_x$–$x$ graph: $\frac12(3\ \text{m})(6\ \text{N})=9\ \text{J}$.
</details>

## Check your understanding

Without calculating a number: why does centripetal force do no work on an object in uniform circular motion?

<details><summary>Reveal</summary>

At every instant, centripetal force points toward the centre while the object’s instantaneous displacement is tangent to the circle. They are perpendicular, so $\vec F\cdot d\vec r=0$. The force changes direction of velocity, not its speed.
</details>

## Take away

- Work is force **along displacement**, not effort in the everyday sense.
- The dot product automatically accounts for direction.
- Variable-force work is the signed area under an $F_x$–$x$ graph.
- Work is one route for tracking energy transfer. In the next lesson, connect net work to a change in motion.
