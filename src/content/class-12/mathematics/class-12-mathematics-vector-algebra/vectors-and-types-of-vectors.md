## Why vectors need their own algebra

A temperature of $300\ \text{K}$ is completely described by one number. A force of $20\ \text{N}$ is not: pushing a box to the right and pushing it downward produce different motions. Quantities that need both magnitude and direction are **vectors**, and this chapter builds the algebra that lets us add, scale, compare and multiply them.

## 1. Scalars and vectors

A **scalar** is a quantity described by magnitude alone, together with a unit where appropriate. Mass, time, temperature, distance and speed are scalars.

A **vector** is a quantity described by magnitude and direction. Displacement, velocity, acceleration, force and momentum are vectors.

A vector is represented geometrically by a directed line segment. If the arrow goes from point $A$ to point $B$, we write the vector as $\overrightarrow{AB}$. The point $A$ is the **initial point** (tail) and $B$ is the **terminal point** (head). In text we may also write a bold letter $\mathbf{a}$ or an arrowed letter $\vec a$.

The **magnitude** (or length) of $\overrightarrow{AB}$ is written as $|\overrightarrow{AB}|$ or $AB$. It is a non-negative scalar.

## 2. Position vectors and components

To calculate with vectors, place them in a coordinate system. Let $O$ be the origin and $P(x,y,z)$ be a point in space. The **position vector** of $P$ with respect to $O$ is

$$
\overrightarrow{OP}=\vec r=x\hat i+y\hat j+z\hat k,
$$

where $\hat i,\hat j,\hat k$ are unit vectors along the positive $x$, $y$ and $z$ axes respectively. The numbers $x,y,z$ are the **scalar components** of $\vec r$, and $x\hat i, y\hat j, z\hat k$ are its **vector components**.

The magnitude follows from Pythagoras in three dimensions:

$$
|\vec r|=\sqrt{x^2+y^2+z^2}.
$$

The direction of a non-zero vector can be described by its **direction cosines** $l=\cos\alpha$, $m=\cos\beta$, $n=\cos\gamma$, where $\alpha,\beta,\gamma$ are the angles the vector makes with the positive $x,y,z$ axes. They satisfy

$$
l^2+m^2+n^2=1, \qquad l=\frac{x}{|\vec r|},\quad m=\frac{y}{|\vec r|},\quad n=\frac{z}{|\vec r|}.
$$

Any numbers proportional to $l,m,n$ are called **direction ratios**. Direction ratios give direction but not magnitude until they are normalised.

## 3. Types of vectors

The names below describe how vectors compare or where they act.

| Type | Meaning | Quick test |
| --- | --- | --- |
| Zero (null) vector | Magnitude $0$, direction not specified | $\vec 0 = 0\hat i+0\hat j+0\hat k$ |
| Unit vector | Magnitude $1$ | $\hat a=\dfrac{\vec a}{|\vec a|}$, $\vec a\neq\vec 0$ |
| Coinitial vectors | Same initial point | Tails at the same point |
| Collinear vectors | Parallel to the same line | One is a scalar multiple of the other |
| Equal vectors | Same magnitude and same direction | Components match: $a_1=b_1,a_2=b_2,a_3=b_3$ |
| Negative of a vector | Same magnitude, opposite direction | $\overrightarrow{BA}=-\overrightarrow{AB}$ |

A **free vector** may be moved parallel to itself without changing its meaning; displacement is the usual example. A **localised vector** has a fixed line of action; force on a rigid body is the usual example. In this chapter, unless stated otherwise, we treat vectors as free vectors.

<learning-block type="concept" title="Collinear does not mean equal">
Two vectors can lie along the same line (or parallel lines) without being equal. $\vec a=2\hat i$ and $\vec b=-5\hat i$ are collinear because $\vec b=-\frac{5}{2}\vec a$, but they have different magnitudes and opposite directions. Equality needs both magnitude and direction to match.
</learning-block>

## 4. Worked example

Let $P(2,-1,2)$ and $Q(5,3,-2)$ be two points.

**(a)** Find $\overrightarrow{PQ}$ in component form.

**(b)** Find its magnitude and the corresponding unit vector.

**Solution.** Subtract the initial point coordinates from the terminal point coordinates:

$$
\overrightarrow{PQ}=\overrightarrow{OQ}-\overrightarrow{OP}=(5-2)\hat i+(3-(-1))\hat j+(-2-2)\hat k=3\hat i+4\hat j-4\hat k.
$$

Its magnitude is

$$
|\overrightarrow{PQ}|=\sqrt{3^2+4^2+(-4)^2}=\sqrt{9+16+16}=\sqrt{41}.
$$

Therefore the unit vector in the direction of $\overrightarrow{PQ}$ is

$$
\hat u=\frac{\overrightarrow{PQ}}{|\overrightarrow{PQ}|}=\frac{3}{\sqrt{41}}\hat i+\frac{4}{\sqrt{41}}\hat j-\frac{4}{\sqrt{41}}\hat k.
$$

**Sanity check.** The magnitude of $\hat u$ is $\sqrt{(9+16+16)/41}=\sqrt{1}=1$, and its components have the same signs as $\overrightarrow{PQ}$, so the direction is preserved.

<learning-block type="mistake" title="Subtracting in the wrong order">
When finding $\overrightarrow{PQ}$, learners sometimes compute $P-Q$ instead of $Q-P$. That gives $-\overrightarrow{PQ}$: correct magnitude, opposite direction. A quick check is to add: $\overrightarrow{OP}+\overrightarrow{PQ}$ should return $\overrightarrow{OQ}$.
</learning-block>

## Try it yourself

1. Find the magnitude and a unit vector in the direction of $\vec a=\hat i-2\hat j+2\hat k$.
2. If $\vec a=2\hat i+3\hat j-\hat k$ and $\vec b=4\hat i+p\hat j-2\hat k$ are collinear, find $p$.
3. Write the position vector of the point dividing the line from $A(1,2,3)$ to $B(4,5,6)$ in the sense from $A$ to $B$ as a displacement, and give $\overrightarrow{AB}$.

<details>
<summary>Show the reasoning</summary>

1. $|\vec a|=\sqrt{1^2+(-2)^2+2^2}=\sqrt{9}=3$. The unit vector is $\hat a=\frac{1}{3}\hat i-\frac{2}{3}\hat j+\frac{2}{3}\hat k$.

2. Collinear vectors satisfy $\vec b=\lambda\vec a$. Comparing $\hat i$ components gives $4=2\lambda$, so $\lambda=2$. Then the $\hat j$ component gives $p=3\lambda=6$. The $\hat k$ component $-2=-1\lambda$ agrees.

3. $\overrightarrow{AB}=\overrightarrow{OB}-\overrightarrow{OA}=(4-1)\hat i+(5-2)\hat j+(6-3)\hat k=3\hat i+3\hat j+3\hat k$.

</details>

## Remember

- A vector has magnitude and direction; a scalar has magnitude alone.
- Position vector of $(x,y,z)$ is $\vec r=x\hat i+y\hat j+z\hat k$, with magnitude $\sqrt{x^2+y^2+z^2}$.
- A unit vector keeps direction but has magnitude $1$: $\hat a=\vec a/|\vec a|$.
- Equal vectors match in magnitude and direction; collinear vectors only share a line direction and may differ in magnitude or sense.
- For displacement between points, always use terminal minus initial: $\overrightarrow{PQ}=\overrightarrow{OQ}-\overrightarrow{OP}$.

In the next module we use these components to add vectors and multiply them by scalars, the two operations that make vector algebra workable.