## A product that measures alignment

Adding vectors gives another vector. Sometimes, however, we want a number: how much of one vector lies along another? How much work does a force do along a displacement? The **scalar product**, or **dot product**, answers these questions by turning two vectors into one scalar.

## 1. Definition of the dot product

For two non-zero vectors $\vec a$ and $\vec b$, let $\theta$ be the angle between them, with $0\le\theta\le\pi$. The scalar product is

$$
\vec a\cdot\vec b=|\vec a||\vec b|\cos\theta.
$$

If either vector is the zero vector, we define $\vec a\cdot\vec b=0$.

The sign tells you about alignment. Acute angle gives a positive dot product, right angle gives zero, and obtuse angle gives negative. This is why $\vec a\cdot\vec b=0$ (for non-zero vectors) means the vectors are perpendicular.

### Properties

- **Commutative:** $\vec a\cdot\vec b=\vec b\cdot\vec a$.
- **Distributive:** $\vec a\cdot(\vec b+\vec c)=\vec a\cdot\vec b+\vec a\cdot\vec c$.
- **Scalar factor:** $(\lambda\vec a)\cdot\vec b=\lambda(\vec a\cdot\vec b)$.
- **Self product:** $\vec a\cdot\vec a=|\vec a|^2$.

The self product is a useful identity: it converts magnitudes into dot products and vice versa.

## 2. Component form

Using $\hat i\cdot\hat i=\hat j\cdot\hat j=\hat k\cdot\hat k=1$ and all cross-basis dot products zero, we get

$$
\vec a\cdot\vec b=a_1b_1+a_2b_2+a_3b_3
$$

for $\vec a=a_1\hat i+a_2\hat j+a_3\hat k$ and $\vec b=b_1\hat i+b_2\hat j+b_3\hat k$.

This form is fast for calculation, while the geometric form is best for interpretation.

## 3. Angle between vectors and projections

From the definition,

$$
\cos\theta=\frac{\vec a\cdot\vec b}{|\vec a||\vec b|}, \qquad \vec a\neq\vec 0,\ \vec b\neq\vec 0.
$$

The **projection** of $\vec a$ on $\vec b$ is the signed length of $\vec a$ along $\vec b$:

$$
\text{projection of }\vec a\text{ on }\vec b=\frac{\vec a\cdot\vec b}{|\vec b|}=|\vec a|\cos\theta.
$$

The **projection vector** of $\vec a$ on $\vec b$ is this scalar times the unit vector along $\vec b$:

$$
\left(\frac{\vec a\cdot\vec b}{|\vec b|^2}\right)\vec b.
$$

A projection scalar can be negative; that means $\vec a$ has a component opposite to $\vec b$.

<learning-block type="concept" title="Dot product, projection and work">
Mechanical work is $W=\vec F\cdot\vec d=|\vec F||\vec d|\cos\theta$. It is positive when the force has a component along the displacement, zero when perpendicular, and negative when opposing. The dot product therefore packages both magnitude and directional alignment in one calculation.
</learning-block>

## 4. Worked example

Let $\vec a=2\hat i+2\hat j-\hat k$ and $\vec b=6\hat i-3\hat j+2\hat k$.

**(a)** Find $\vec a\cdot\vec b$.

**(b)** Find the angle between $\vec a$ and $\vec b$.

**(c)** Find the projection of $\vec a$ on $\vec b$.

**Solution.** Compute the dot product:

$$
\vec a\cdot\vec b=(2)(6)+(2)(-3)+(-1)(2)=12-6-2=4.
$$

Now magnitudes:

$$
|\vec a|=\sqrt{2^2+2^2+(-1)^2}=\sqrt{9}=3, \qquad |\vec b|=\sqrt{6^2+(-3)^2+2^2}=\sqrt{49}=7.
$$

Hence

$$
\cos\theta=\frac{\vec a\cdot\vec b}{|\vec a||\vec b|}=\frac{4}{21}, \qquad \theta=\cos^{-1}\!\left(\frac{4}{21}\right).
$$

The projection of $\vec a$ on $\vec b$ is

$$
\frac{\vec a\cdot\vec b}{|\vec b|}=\frac{4}{7}.
$$

**Sanity check.** The projection cannot exceed $|\vec a|=3$ in magnitude, and $4/7$ is reasonable. Also $\cos\theta=4/21$ is between $0$ and $1$, so the angle is acute, matching the positive dot product.

<learning-block type="mistake" title="Dividing by the wrong magnitude in a projection">
The projection of $\vec a$ on $\vec b$ has $|\vec b|$ in the denominator: $\frac{\vec a\cdot\vec b}{|\vec b|}$. Students often divide by $|\vec a|$ or by $|\vec a||\vec b|$. Read it aloud as "component of $\vec a$ along $\vec b$" to remember which vector sets the direction.
</learning-block>

## Try it yourself

1. Show that $\vec a=3\hat i-\hat j+2\hat k$ and $\vec b=\hat i+5\hat j+\hat k$ are perpendicular.
2. Find the angle between $\vec p=\hat i+\hat j+\hat k$ and $\vec q=\hat i-\hat j+\hat k$.
3. For $\vec a=2\hat i+\hat j+2\hat k$ and $\vec b=\hat i+2\hat j-2\hat k$, find the projection vector of $\vec a$ on $\vec b$.

<details>
<summary>Show the reasoning</summary>

1. $\vec a\cdot\vec b=3(1)+(-1)(5)+2(1)=0$. Since both are non-zero and the dot product is zero, they are perpendicular.

2. $\vec p\cdot\vec q=1-1+1=1$, $|\vec p|=\sqrt{3}$, $|\vec q|=\sqrt{3}$. Therefore $\cos\theta=\frac{1}{3}$ and $\theta=\cos^{-1}(1/3)$.

3. $\vec a\cdot\vec b=2+2-4=0$, $|\vec b|^2=1+4+4=9$. The projection vector is $\left(\frac{0}{9}\right)\vec b=\vec 0$. This means $\vec a$ has no component along $\vec b$; the vectors are perpendicular.

</details>

## Remember

- $\vec a\cdot\vec b=|\vec a||\vec b|\cos\theta=a_1b_1+a_2b_2+a_3b_3$.
- Non-zero vectors are perpendicular when $\vec a\cdot\vec b=0$.
- Angle: $\cos\theta=\dfrac{\vec a\cdot\vec b}{|\vec a||\vec b|}$.
- Projection of $\vec a$ on $\vec b$ is $\dfrac{\vec a\cdot\vec b}{|\vec b|}$; projection vector is $\dfrac{\vec a\cdot\vec b}{|\vec b|^2}\vec b$.
- A positive, zero or negative projection tells you whether the component is along, perpendicular to, or opposite $\vec b$.

The next module introduces a different product of two vectors, the cross product, which produces a vector perpendicular to both.