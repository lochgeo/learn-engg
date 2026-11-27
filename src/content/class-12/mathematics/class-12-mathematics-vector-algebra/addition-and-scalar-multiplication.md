## Combining displacements before combining numbers

If you walk $3\ \text{m}$ east and then $4\ \text{m}$ north, your total distance is $7\ \text{m}$ but your displacement is $5\ \text{m}$ northeast. Vector addition captures this: directions matter. Scalar multiplication captures another common operation: stretching, shrinking or reversing a vector without changing its line.

## 1. Vector addition

### Triangle law

Place the tail of $\vec b$ at the head of $\vec a$. The vector from the tail of $\vec a$ to the head of $\vec b$ is the sum

$$
\vec a+\vec b.
$$

This matches the physical idea of successive displacements.

### Parallelogram law

If $\vec a$ and $\vec b$ are placed tail-to-tail as adjacent sides of a parallelogram, then $\vec a+\vec b$ is the diagonal from the common tail. The two laws give the same result because a parallelogram contains two congruent triangles.

### Component form

Addition is easiest in components. If $\vec a=a_1\hat i+a_2\hat j+a_3\hat k$ and $\vec b=b_1\hat i+b_2\hat j+b_3\hat k$, then

$$
\vec a+\vec b=(a_1+b_1)\hat i+(a_2+b_2)\hat j+(a_3+b_3)\hat k.
$$

Subtraction is addition of the negative: $\vec a-\vec b=\vec a+(-\vec b)$.

### Properties

For vectors $\vec a,\vec b,\vec c$:

- **Commutative:** $\vec a+\vec b=\vec b+\vec a$.
- **Associative:** $(\vec a+\vec b)+\vec c=\vec a+(\vec b+\vec c)$.
- **Additive identity:** $\vec a+\vec 0=\vec a$.
- **Additive inverse:** $\vec a+(-\vec a)=\vec 0$.

## 2. Scalar multiplication

Multiplying a vector $\vec a$ by a scalar $\lambda$ gives $\lambda\vec a$. Its magnitude is $|\lambda\vec a|=|\lambda||\vec a|$. The direction is the same as $\vec a$ if $\lambda>0$, opposite if $\lambda<0$, and the result is $\vec 0$ if $\lambda=0$.

In components,

$$
\lambda\vec a=(\lambda a_1)\hat i+(\lambda a_2)\hat j+(\lambda a_3)\hat k.
$$

Useful properties include $\lambda(\vec a+\vec b)=\lambda\vec a+\lambda\vec b$, $(\lambda+\mu)\vec a=\lambda\vec a+\mu\vec a$, and $\lambda(\mu\vec a)=(\lambda\mu)\vec a$.

## 3. Vectors joining points and section formula

The vector from $A(\vec a)$ to $B(\vec b)$, where $\vec a,\vec b$ are position vectors from the origin, is

$$
\overrightarrow{AB}=\vec b-\vec a.
$$

This is the component rule in vector form and is used constantly.

If a point $R$ divides $AB$ internally in the ratio $m:n$, its position vector is

$$
\vec r=\frac{m\vec b+n\vec a}{m+n}.
$$

For external division in the ratio $m:n$ ($m\neq n$),

$$
\vec r=\frac{m\vec b-n\vec a}{m-n}.
$$

The midpoint is the special case $m=n$, giving $\vec r=\frac{\vec a+\vec b}{2}$.

<learning-block type="concept" title="Why the section formula has weights on opposite ends">
In internal division, the point closer to $B$ gets more weight from $\vec b$. The formula $\frac{m\vec b+n\vec a}{m+n}$ places weight $m$ on the endpoint $B$ that is $m$ parts away in the ratio $AR:RB=m:n$. A quick check is the midpoint: equal weights give the average of the two position vectors.
</learning-block>

## 4. Worked example

Let $\vec a=2\hat i-\hat j+3\hat k$ and $\vec b=-\hat i+4\hat j+2\hat k$.

**(a)** Find $3\vec a-2\vec b$ and its magnitude.

**(b)** Find the position vector of the point dividing the join of points with position vectors $\vec a$ and $\vec b$ internally in the ratio $2:1$.

**Solution.** First compute the scalar multiples:

$$
3\vec a=6\hat i-3\hat j+9\hat k, \qquad 2\vec b=-2\hat i+8\hat j+4\hat k.
$$

Subtract:

$$
3\vec a-2\vec b=(6-(-2))\hat i+(-3-8)\hat j+(9-4)\hat k=8\hat i-11\hat j+5\hat k.
$$

The magnitude is

$$
|3\vec a-2\vec b|=\sqrt{8^2+(-11)^2+5^2}=\sqrt{64+121+25}=\sqrt{210}.
$$

For internal division in the ratio $2:1$, with weight $2$ on $\vec b$ and $1$ on $\vec a$,

$$
\vec r=\frac{2\vec b+1\vec a}{2+1}=\frac{(-2+2)\hat i+(8-1)\hat j+(4+3)\hat k}{3}=\frac{0\hat i+7\hat j+7\hat k}{3}=\frac{7}{3}\hat j+\frac{7}{3}\hat k.
$$

**Sanity check.** The point is between $A$ and $B$, so each component should lie between the corresponding components of $\vec a$ and $\vec b$: $0$ is between $2$ and $-1$, $7/3$ is between $-1$ and $4$, and $7/3$ is between $3$ and $2$. All are true.

<learning-block type="mistake" title="Mixing up internal and external division weights">
For the ratio $m:n$ from $A(\vec a)$ to $B(\vec b)$, internal division uses $m\vec b+n\vec a$ in the numerator. A common error is writing $m\vec a+n\vec b$, which gives the point dividing in the opposite sense. Before finalising, check which endpoint the point should be closer to.
</learning-block>

## Try it yourself

1. If $\vec a=\hat i+2\hat j-3\hat k$ and $\vec b=2\hat i-\hat j+\hat k$, find $|\vec a+\vec b|$.
2. Find the position vector of the midpoint of the line joining $P(1,-2,3)$ and $Q(3,0,-1)$.
3. Show that the vectors $\vec a=6\hat i-4\hat j+2\hat k$ and $\vec b=-3\hat i+2\hat j-\hat k$ are collinear.

<details>
<summary>Show the reasoning</summary>

1. $\vec a+\vec b=3\hat i+\hat j-2\hat k$, so $|\vec a+\vec b|=\sqrt{3^2+1^2+(-2)^2}=\sqrt{14}$.

2. Midpoint position vector is $\frac{\overrightarrow{OP}+\overrightarrow{OQ}}{2}=\frac{(4)\hat i+(-2)\hat j+(2)\hat k}{2}=2\hat i-\hat j+\hat k$.

3. $\vec a=-2(-3\hat i+2\hat j-\hat k)=-2\vec b$. Since one is a scalar multiple of the other, they are collinear (and opposite in direction).

</details>

## Remember

- Add or subtract vectors component by component; the triangle and parallelogram laws explain the geometry.
- Scalar multiplication changes magnitude by $|\lambda|$ and reverses direction when $\lambda<0$.
- The vector joining points is terminal minus initial: $\overrightarrow{AB}=\vec b-\vec a$.
- Internal section formula: $\vec r=\frac{m\vec b+n\vec a}{m+n}$ for ratio $AR:RB=m:n$.
- Always do a component-range sanity check for internal division: the result should lie between the endpoints.

Next we multiply two vectors in a way that produces a scalar, the dot product, which lets us compute angles and projections directly.