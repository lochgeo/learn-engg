## A product that measures perpendicular effect

The dot product takes two vectors and returns a scalar. The **vector product**, or **cross product**, takes two vectors and returns a new vector. It is built for questions where "perpendicular to both" or "area spanned by two directions" matters: torque, normal vectors, and areas of parallelograms and triangles.

## 1. Definition of the cross product

For two non-zero vectors $\vec a$ and $\vec b$, let $\theta$ be the angle between them, $0\le\theta\le\pi$. The vector product is

$$
\vec a\times\vec b=|\vec a||\vec b|\sin\theta\,\hat n,
$$

where $\hat n$ is a unit vector perpendicular to the plane containing $\vec a$ and $\vec b$. Its direction is given by the **right-hand rule**: curl the fingers of your right hand from $\vec a$ to $\vec b$ through the smaller angle; your thumb points along $\hat n$.

If $\vec a$ or $\vec b$ is zero, or if the vectors are parallel ($\theta=0$ or $\pi$), then $\vec a\times\vec b=\vec 0$.

## 2. Properties

- **Not commutative:** $\vec b\times\vec a=-(\vec a\times\vec b)$.
- **Distributive:** $\vec a\times(\vec b+\vec c)=\vec a\times\vec b+\vec a\times\vec c$.
- **Scalar factor:** $(\lambda\vec a)\times\vec b=\lambda(\vec a\times\vec b)=\vec a\times(\lambda\vec b)$.
- **Parallel test:** $\vec a\times\vec b=\vec 0$ for non-zero vectors means they are parallel or collinear.

The sign change under swapping order is one of the most important differences from the dot product.

## 3. Component and determinant form

For the standard basis,

$$
\hat i\times\hat j=\hat k,\quad \hat j\times\hat k=\hat i,\quad \hat k\times\hat i=\hat j,
$$

and reversing the order changes the sign. Also $\hat i\times\hat i=\hat j\times\hat j=\hat k\times\hat k=\vec 0$.

With $\vec a=a_1\hat i+a_2\hat j+a_3\hat k$ and $\vec b=b_1\hat i+b_2\hat j+b_3\hat k$, the cross product can be computed as a determinant:

$$
\vec a\times\vec b=
\begin{vmatrix}
\hat i & \hat j & \hat k\\
 a_1 & a_2 & a_3\\
 b_1 & b_2 & b_3
\end{vmatrix}
=(a_2b_3-a_3b_2)\hat i-(a_1b_3-a_3b_1)\hat j+(a_1b_2-a_2b_1)\hat k.
$$

The determinant is a memory aid; expand it carefully, especially the middle term which carries a minus sign.

## 4. Geometric applications

The magnitude $|\vec a\times\vec b|=|\vec a||\vec b|\sin\theta$ is the area of the parallelogram with adjacent sides $\vec a$ and $\vec b$.

The area of the triangle with adjacent sides $\vec a$ and $\vec b$ is

$$
\text{Area}_{\triangle}=\frac{1}{2}|\vec a\times\vec b|.
$$

A unit vector perpendicular to both $\vec a$ and $\vec b$ is

$$
\hat n=\pm\frac{\vec a\times\vec b}{|\vec a\times\vec b|},
$$

provided $\vec a\times\vec b\neq\vec 0$.

<learning-block type="concept" title="Why sine appears in the cross product">
The component of $\vec b$ perpendicular to $\vec a$ has magnitude $|\vec b|\sin\theta$. Multiplying by $|\vec a|$ gives the area of the parallelogram spanned by the two vectors. The cross product therefore measures how much the vectors "open up" a plane, while the dot product measures how much they align.
</learning-block>

## 5. Worked example

Let $\vec a=\hat i+2\hat j+\hat k$ and $\vec b=2\hat i-\hat j+3\hat k$.

**(a)** Find $\vec a\times\vec b$.

**(b)** Find the area of the parallelogram with adjacent sides $\vec a$ and $\vec b$.

**(c)** Find a unit vector perpendicular to both.

**Solution.** Use the determinant:

$$
\vec a\times\vec b=
\begin{vmatrix}
\hat i & \hat j & \hat k\\
1 & 2 & 1\\
2 & -1 & 3
\end{vmatrix}
=\hat i(2\cdot3-1\cdot(-1))-\hat j(1\cdot3-1\cdot2)+\hat k(1\cdot(-1)-2\cdot2).
$$

Simplify term by term:

$$
\vec a\times\vec b=\hat i(6+1)-\hat j(3-2)+\hat k(-1-4)=7\hat i-\hat j-5\hat k.
$$

The parallelogram area is the magnitude:

$$
|\vec a\times\vec b|=\sqrt{7^2+(-1)^2+(-5)^2}=\sqrt{49+1+25}=\sqrt{75}=5\sqrt{3}.
$$

A unit vector perpendicular to both is

$$
\hat n=\frac{7\hat i-\hat j-5\hat k}{5\sqrt{3}}.
$$

The opposite vector $-\hat n$ is also perpendicular to both.

**Sanity check.** Dot the result with $\vec a$: $(7)(1)+(-1)(2)+(-5)(1)=0$. Dot with $\vec b$: $(7)(2)+(-1)(-1)+(-5)(3)=14+1-15=0$. The cross product is perpendicular to both original vectors, as required.

<learning-block type="mistake" title="Losing the middle minus sign in the determinant">
In $\vec a\times\vec b=\hat i(\cdots)-\hat j(\cdots)+\hat k(\cdots)$, the $\hat j$ cofactor has a minus sign. Many sign errors come from expanding the middle term as if it were positive. After computing, do the dot-product sanity check with both original vectors; it catches most determinant mistakes quickly.
</learning-block>

## Try it yourself

1. Find $\vec a\times\vec b$ for $\vec a=2\hat i+\hat j-\hat k$ and $\vec b=\hat i-\hat j+2\hat k$.
2. Find the area of the triangle with vertices $A(1,1,1)$, $B(1,2,3)$ and $C(2,3,1)$.
3. If $\vec a\times\vec b=\vec 0$ and $\vec a,\vec b$ are non-zero, what can you conclude?

<details>
<summary>Show the reasoning</summary>

1. $\vec a\times\vec b=\begin{vmatrix}\hat i&\hat j&\hat k\\2&1&-1\\1&-1&2\end{vmatrix}=\hat i(2-1)-\hat j(4+1)+\hat k(-2-1)=\hat i-5\hat j-3\hat k$.

2. $\overrightarrow{AB}=\hat j+2\hat k$, $\overrightarrow{AC}=\hat i+2\hat j$. Then $\overrightarrow{AB}\times\overrightarrow{AC}=\begin{vmatrix}\hat i&\hat j&\hat k\\0&1&2\\1&2&0\end{vmatrix}=\hat i(0-4)-\hat j(0-2)+\hat k(0-1)=-4\hat i+2\hat j-\hat k$. Its magnitude is $\sqrt{16+4+1}=\sqrt{21}$, so the triangle area is $\frac{1}{2}\sqrt{21}$.

3. $|\vec a\times\vec b|=|\vec a||\vec b|\sin\theta=0$. With non-zero magnitudes, this means $\sin\theta=0$, so $\theta=0$ or $\pi$. The vectors are parallel or collinear.

</details>

## Remember

- $\vec a\times\vec b=|\vec a||\vec b|\sin\theta\,\hat n$ is a vector perpendicular to both $\vec a$ and $\vec b$.
- Order matters: $\vec b\times\vec a=-(\vec a\times\vec b)$.
- Use the determinant form for components, and check with a dot product against both original vectors.
- Parallelogram area is $|\vec a\times\vec b|$; triangle area is $\frac{1}{2}|\vec a\times\vec b|$.
- $\vec a\times\vec b=\vec 0$ for non-zero vectors means the vectors are parallel.

The next module puts dot and cross products together in mixed problems, including scalar triple products and three-dimensional geometry applications.