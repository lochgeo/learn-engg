## A curve is two simple motions at once

When a fielder throws a ball across a pitch, the ball climbs while it also travels sideways, and the path traced out is a smooth curve. A single signed number — the tool that served so well in Motion in a Straight Line — cannot say where the ball is, because a point on a plane needs two coordinates. The physics has not changed: position, velocity and acceleration keep their meanings. What changes is that each of them is now a **vector**, a quantity that carries a direction with its magnitude, and combinations of such quantities follow geometric rules rather than grade-school arithmetic.

This module builds that geometric toolkit: what counts as a vector, how to record a change of position, and how to combine vectors — first graphically, then by components, which is the method every later module uses.

## 1. Scalars and vectors

A **scalar** is fully specified by a magnitude and a unit: *mass 12 kg*, *time 4 s*, *temperature 293 K*. A **vector** additionally specifies a direction: *velocity 5 m/s towards north-east*. Direction is not decoration. A body moving at 5 m/s north and a body moving at 5 m/s east are in genuinely different states, so a complete description must distinguish them.

Three conventions keep the algebra tidy:

- An arrow over a letter ($\vec A$) marks a vector; the same letter without the arrow ($A$) means its **magnitude**, a positive scalar with units.
- Two vectors are equal when both magnitude and direction match. A vector can be slid anywhere in the plane without changing it, as long as it keeps its length and direction.
- Multiplying a vector by a positive number scales its length; multiplying by $-1$ reverses its direction, giving the **negative vector** $-\vec A$ of the same length, opposite way.

## 2. Position and displacement vectors

Place an origin $O$ in the plane. The **position vector** of a particle, $\vec r$, is the arrow drawn from $O$ to the particle. Its tip coordinates $(x, y)$ are exactly the components of $\vec r$.

If the particle moves from position $\vec r_1$ to position $\vec r_2$, the **displacement** is the difference of the two arrows:

$$
\Delta\vec r = \vec r_2 - \vec r_1,
$$

drawn as the straight arrow from the starting point to the finishing point, *wherever the particle actually wandered in between*. A person walks once around a square field of side $30\ \text{m}$: the path length is $120\ \text{m}$, but the displacement is zero, because start and end coincide. Displacement, not path length, is what enters the definitions of velocity and of work later on.

## 3. Adding vectors graphically

To add $\vec A + \vec B$ by the **triangle rule**, draw $\vec A$, then draw $\vec B$ starting from the head of $\vec A$. The resultant runs from the tail of $\vec A$ to the head of $\vec B$. Repeating for three or more vectors gives the **polygon rule**: the sum runs from the tail of the first to the head of the last.

Two checks make this trustworthy:

- **Order is irrelevant.** Drawing $\vec B$ first gives the same resultant — vector addition is commutative, and $\vec A + (\vec B + \vec C) = (\vec A + \vec B) + \vec C$.
- **Special angles are worth memorising.** Parallel vectors ($0^\circ$): magnitudes add. Antiparallel vectors ($180^\circ$): magnitudes subtract. Perpendicular vectors ($90^\circ$): magnitude of the sum is $\sqrt{A^2+B^2}$ — Pythagoras.

For any two vectors, the magnitude of the resultant is squeezed between

$$
|A - B| \le |\vec A + \vec B| \le A + B,
$$

with the extremes reached at $180^\circ$ and $0^\circ$ respectively.

<learning-block type="example" title="Worked example: a hiker's displacement">

A hiker walks $30\ \text{m}$ due east, then $40\ \text{m}$ due north. What is the net displacement?

Place the east leg along $\hat i$ and the north leg along $\hat j$ — unit vectors (arrows of length 1) pointing along those directions, introduced formally in the next section:

$$
\vec s_1 = 30\ \text{m}\ \hat i, \qquad \vec s_2 = 40\ \text{m}\ \hat j.
$$

Adding head-to-tail (or component by component):

$$
\vec s = 30\ \text{m}\ \hat i + 40\ \text{m}\ \hat j, \qquad s = \sqrt{30^2+40^2} = 50\ \text{m}.
$$

The direction makes an angle $\theta$ with east, where $\tan\theta = 40/30 = 4/3$, so $\theta \approx 53^\circ$ north of east.

**Sanity check:** the legs are perpendicular, so this is a 3–4–5 triangle scaled by 10; the answer $50\ \text{m}$ sits strictly between the extremes $|40-30| = 10\ \text{m}$ and $40+30 = 70\ \text{m}$, as it must.

</learning-block>

## 4. Unit vectors and the component method

A **unit vector** has magnitude exactly 1 and carries only direction information. If $\vec A$ is a nonzero vector, $\vec A / A$ is the unit vector pointing along $\vec A$. In a plane we fix two perpendicular reference directions and name their unit vectors $\hat i$ (along $+x$) and $\hat j$ (along $+y$). Every plane vector then has one unique decomposition:

$$
\vec A = A_x\,\hat i + A_y\,\hat j.
$$

The numbers $A_x$ and $A_y$ are the **components**: the shadow the vector casts on each axis. For a vector of magnitude $A$ making angle $\theta$ with the $+x$ axis,

$$
A_x = A\cos\theta, \qquad A_y = A\sin\theta.
$$

Components convert geometry into arithmetic. To add several vectors, add all the $\hat i$ parts and all the $\hat j$ parts separately, then rebuild the resultant:

$$
R_x = A_x + B_x + \cdots, \qquad R_y = A_y + B_y + \cdots,
$$
$$
R = \sqrt{R_x^2 + R_y^2}, \qquad \tan\theta = \frac{R_y}{R_x}.
$$

One caution when recovering the angle: $\arctan(R_y/R_x)$ returns the same value for opposite directions, so look at the signs of $R_x$ and $R_y$ and place the resultant in the correct quadrant.

<learning-block type="mistake" title="Adding magnitudes when directions differ">

The commonest error of this whole chapter is treating $30\ \text{m}$ east plus $40\ \text{m}$ north as $70\ \text{m}$. Directions matter: the resultant above is $50\ \text{m}$, and it could have been anything between $10\ \text{m}$ and $70\ \text{m}$ depending on the angle between the legs. Whenever two vectors are added and the angle between them is neither $0^\circ$ nor $180^\circ$, resolve into components or draw the triangle — never add the numbers directly.

</learning-block>

## Try it yourself

**1.** Two perpendicular forces of $6\ \text{N}$ and $8\ \text{N}$ act on a crate. Find the magnitude and direction of their resultant.

<details><summary>Show the reasoning</summary>

Perpendicular vectors add by Pythagoras: $R = \sqrt{6^2+8^2} = \sqrt{100} = 10\ \text{N}$. The direction makes an angle $\arctan(8/6) \approx 53^\circ$ with the $6\ \text{N}$ force, towards the $8\ \text{N}$ force. Again a 3–4–5 triangle, scaled by 2.
</details>

**2.** Two vectors each of magnitude $5$ units combine to give a resultant of $5$ units. What is the angle between them?

<details><summary>Show the reasoning</summary>

Using $R^2 = A^2 + B^2 + 2AB\cos\theta$ with $A = B = R = 5$:

$$
25 = 25 + 25 + 2(25)\cos\theta \ \Rightarrow\ \cos\theta = -\tfrac12,
$$

so $\theta = 120^\circ$. The resultant then runs along the bisector of the two vectors. Note it is *not* $90^\circ$ — with that angle the resultant would be $5\sqrt2$.
</details>

**3.** A particle moves from position $(3, -2)\ \text{m}$ to position $(8, 10)\ \text{m}$. Express its displacement in unit-vector form and find its magnitude.

<details><summary>Show the reasoning</summary>

$$
\Delta\vec r = (8-3)\hat i + (10-(-2))\hat j = 5\ \text{m}\ \hat i + 12\ \text{m}\ \hat j,
$$

with magnitude $\sqrt{5^2+12^2} = 13\ \text{m}$. The path actually taken could have been far shorter or far longer; only the endpoints enter the displacement.
</details>

## Remember

- A vector is not complete without its direction; a magnitude alone discards information that physics cares about.
- Displacement is the straight arrow between endpoints and can be zero even after a long journey.
- The resultant of two vectors can be anything from $|A-B|$ to $A+B$; only the end values need no calculation.
- The component method reduces any vector problem to bookkeeping in $\hat i$ and $\hat j$, and it never fails — make it your default tool.
- Next module: components are used again for projections, products and for relative velocity in two dimensions.
