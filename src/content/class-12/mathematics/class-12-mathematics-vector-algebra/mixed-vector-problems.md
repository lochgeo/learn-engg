## Choosing the right product

Real problems rarely announce "use dot product here". You decide from the question: alignment, angle or projection points to the dot product; perpendicular direction, area or turning effect points to the cross product; volume or coplanarity often needs both together. This module practises that choice.

## 1. A decision guide

| What the question asks for | Product to reach for | Why |
| --- | --- | --- |
| Angle between vectors | Dot product | $\cos\theta=\dfrac{\vec a\cdot\vec b}{|\vec a||\vec b|}$ |
| Projection/component along a direction | Dot product | Scalar projection is $\dfrac{\vec a\cdot\vec b}{|\vec b|}$ |
| Perpendicularity test | Dot product | $\vec a\cdot\vec b=0$ |
| Vector perpendicular to two vectors | Cross product | $\vec a\times\vec b$ is perpendicular to both |
| Area of parallelogram/triangle | Cross product | Area uses $|\vec a\times\vec b|$ |
| Volume of parallelepiped | Scalar triple product | Volume uses $|(\vec a\times\vec b)\cdot\vec c|$ |
| Coplanarity of three vectors | Scalar triple product | Coplanar if scalar triple product is zero |

## 2. Scalar triple product

The **scalar triple product** of $\vec a,\vec b,\vec c$ is

$$
[\vec a,\vec b,\vec c]=(\vec a\times\vec b)\cdot\vec c.
$$

It is a scalar. Geometrically, $|[\vec a,\vec b,\vec c]|$ is the volume of the parallelepiped with coterminous edges $\vec a,\vec b,\vec c$. The volume of the tetrahedron with the same coterminous edges is $\frac{1}{6}|[\vec a,\vec b,\vec c]|$.

In component form,

$$
[\vec a,\vec b,\vec c]=
\begin{vmatrix}
a_1&a_2&a_3\\
b_1&b_2&b_3\\
c_1&c_2&c_3
\end{vmatrix}.
$$

### Key properties

- **Cyclic permutation keeps value:** $[\vec a,\vec b,\vec c]=[\vec b,\vec c,\vec a]=[\vec c,\vec a,\vec b]$.
- **Swapping two vectors changes sign:** $[\vec b,\vec a,\vec c]=-[\vec a,\vec b,\vec c]$.
- **Coplanarity:** if $\vec a,\vec b,\vec c$ are non-zero and coplanar, or if any two are collinear, then $[\vec a,\vec b,\vec c]=0$.

The name "scalar triple product" is deliberate: the final result is a scalar, not a vector.

## 3. Worked example: volume and coplanarity

Show that the vectors $\vec a=2\hat i-\hat j+\hat k$, $\vec b=\hat i+2\hat j-3\hat k$ and $\vec c=3\hat i-\hat j+2\hat k$ are not coplanar, and find the volume of the parallelepiped they form.

**Solution.** Compute the scalar triple product as a determinant:

$$
[\vec a,\vec b,\vec c]=
\begin{vmatrix}
2&-1&1\\
1&2&-3\\
3&-1&2
\end{vmatrix}.
$$

Expand along the first row:

$$
[\vec a,\vec b,\vec c]=2\begin{vmatrix}2&-3\\-1&2\end{vmatrix}-(-1)\begin{vmatrix}1&-3\\3&2\end{vmatrix}+1\begin{vmatrix}1&2\\3&-1\end{vmatrix}.
$$

Evaluate each minor:

$$
\begin{vmatrix}2&-3\\-1&2\end{vmatrix}=4-3=1,\qquad
\begin{vmatrix}1&-3\\3&2\end{vmatrix}=2+9=11,\qquad
\begin{vmatrix}1&2\\3&-1\end{vmatrix}=-1-6=-7.
$$

Therefore

$$
[\vec a,\vec b,\vec c]=2(1)+1(11)+1(-7)=6.
$$

Since $[\vec a,\vec b,\vec c]=6\neq0$, the vectors are not coplanar. The parallelepiped volume is

$$
V=|[\vec a,\vec b,\vec c]|=6.
$$

If the question had asked for a tetrahedron with the same coterminous edges, the answer would be $\frac{1}{6}\times6=1$.

**Sanity check.** Volume must be non-negative. The non-zero value also matches the coplanarity conclusion: coplanar vectors would flatten the parallelepiped to zero volume.

## 4. Worked example: combining dot and cross

Find a unit vector perpendicular to both $\vec p=\hat i+\hat j+\hat k$ and $\vec q=\hat i-2\hat j+\hat k$, and verify it is perpendicular to $\vec p+\vec q$.

**Solution.** First compute the cross product:

$$
\vec p\times\vec q=
\begin{vmatrix}
\hat i&\hat j&\hat k\\
1&1&1\\
1&-2&1
\end{vmatrix}
=\hat i(1+2)-\hat j(1-1)+\hat k(-2-1)=3\hat i+0\hat j-3\hat k.
$$

Its magnitude is $|\vec p\times\vec q|=\sqrt{3^2+0^2+(-3)^2}=\sqrt{18}=3\sqrt{2}$. A unit vector perpendicular to both is

$$
\hat n=\frac{3\hat i-3\hat k}{3\sqrt{2}}=\frac{\hat i-\hat k}{\sqrt{2}}.
$$

Now $\vec p+\vec q=2\hat i-\hat j+2\hat k$. Check perpendicularity:

$$
\hat n\cdot(\vec p+\vec q)=\frac{1}{\sqrt{2}}(1\cdot2+0\cdot(-1)+(-1)\cdot2)=\frac{0}{\sqrt{2}}=0.
$$

The result is zero, so $\hat n$ is perpendicular to $\vec p+\vec q$ as well.

**Sanity check.** This is expected: any vector in the plane of $\vec p$ and $\vec q$, including their sum, is perpendicular to a normal to that plane.

<learning-block type="mistake" title="Confusing scalar triple product with a vector triple product">
The scalar triple product $(\vec a\times\vec b)\cdot\vec c$ gives a number. The vector triple product $\vec a\times(\vec b\times\vec c)$ gives a vector and is a different object. In board-level problems, if the answer should be a volume or a coplanarity test, you want the scalar triple product.
</learning-block>

## Try it yourself

1. Find the volume of the parallelepiped with coterminous edges $\vec a=\hat i+\hat j$, $\vec b=\hat j+\hat k$, $\vec c=\hat k+\hat i$.
2. Find $\lambda$ if the vectors $\vec a=\hat i-\hat j+\hat k$, $\vec b=2\hat i+\hat j-\hat k$, $\vec c=\lambda\hat i-\hat j+\lambda\hat k$ are coplanar.
3. Find the area of the parallelogram whose diagonals are $\vec d_1=3\hat i+\hat j-2\hat k$ and $\vec d_2=\hat i-3\hat j+4\hat k$.

<details>
<summary>Show the reasoning</summary>

1. $[\vec a,\vec b,\vec c]=\begin{vmatrix}1&1&0\\0&1&1\\1&0&1\end{vmatrix}=1(1-0)-1(0-1)+0=2$. Volume $=2$.

2. Coplanar means scalar triple product is zero: $\begin{vmatrix}1&-1&1\\2&1&-1\\\lambda&-1&\lambda\end{vmatrix}=1(\lambda-1)-(-1)(2\lambda+\lambda)+1(-2-\lambda)=(\lambda-1)+3\lambda+(-2-\lambda)=3\lambda-3=0$. So $\lambda=1$.

3. If diagonals are $\vec d_1,\vec d_2$, adjacent sides can be taken as $\frac{\vec d_1+\vec d_2}{2}$ and $\frac{\vec d_1-\vec d_2}{2}$, and the parallelogram area is $\frac{1}{2}|\vec d_1\times\vec d_2|$. Compute $\vec d_1\times\vec d_2=\begin{vmatrix}\hat i&\hat j&\hat k\\3&1&-2\\1&-3&4\end{vmatrix}=\hat i(4-6)-\hat j(12+2)+\hat k(-9-1)=-2\hat i-14\hat j-10\hat k$. Magnitude $=\sqrt{4+196+100}=\sqrt{300}=10\sqrt{3}$. Area $=\frac{1}{2}(10\sqrt{3})=5\sqrt{3}$.

</details>

## Remember

- Dot product answers alignment questions; cross product answers perpendicular/area questions.
- Scalar triple product $[\vec a,\vec b,\vec c]=(\vec a\times\vec b)\cdot\vec c$ is a scalar; its absolute value gives parallelepiped volume.
- Cyclic order does not change the scalar triple product; swapping two vectors changes its sign.
- Three vectors are coplanar when their scalar triple product is zero.
- Check dimensions and geometry: volumes and areas are non-negative, and perpendicularity checks should give a zero dot product.

You now have the full vector algebra toolkit. The next module is a practice and mastery check that mixes these ideas the way exam questions do.