## When two lines miss each other

In a plane, two different lines either intersect or are parallel. In space there is a third possibility: they can be **skew**. Skew lines do not intersect and are not parallel; they lie in different directions in different planes, like one edge of a floor and a non-parallel edge of the ceiling above it. Comparing such lines needs two measurements: the angle between their directions and the shortest distance between them.

## 1. Angle between two lines

Let the lines have direction vectors $\vec b_1$ and $\vec b_2$ (or direction ratios $(a_1,b_1,c_1)$ and $(a_2,b_2,c_2)$). The angle $\theta$ between the lines is taken as the acute or right angle between their direction vectors:

$$
\cos\theta=\frac{|\vec b_1\cdot\vec b_2|}{|\vec b_1||\vec b_2|},\qquad 0\le \theta\le \frac{\pi}{2}.
$$

The absolute value ensures we get the smaller angle between the two lines, regardless of which sense of each direction vector was chosen.

In Cartesian ratio form,

$$
\cos\theta=\frac{|a_1a_2+b_1b_2+c_1c_2|}{\sqrt{a_1^2+b_1^2+c_1^2}\,\sqrt{a_2^2+b_2^2+c_2^2}}.
$$

Two useful tests follow immediately:

- **Perpendicular lines:** $\vec b_1\cdot\vec b_2=0$.
- **Parallel lines:** $\vec b_1=\lambda \vec b_2$ for some scalar $\lambda$, or equivalently the direction ratios are proportional.

## 2. Shortest distance between skew lines

Consider lines

$$
\vec r=\vec a_1+\lambda \vec b_1,\qquad \vec r=\vec a_2+\mu \vec b_2.
$$

The shortest segment joining the two lines is perpendicular to both. A vector perpendicular to both directions is $\vec b_1\times\vec b_2$. Project the vector joining one point on each line, $\vec a_2-\vec a_1$, onto this common perpendicular. The length of that projection is the shortest distance:

$$
d=\frac{|(\vec a_2-\vec a_1)\cdot(\vec b_1\times\vec b_2)|}{|\vec b_1\times\vec b_2|}.
$$

The numerator is the absolute value of a scalar triple product. It is zero when $\vec a_2-\vec a_1$, $\vec b_1$, and $\vec b_2$ are coplanar, which means the two lines lie in one plane. For non-parallel lines, coplanar implies intersecting.

## 3. Shortest distance between parallel lines

If the lines are parallel, $\vec b_1\times\vec b_2=\vec 0$ and the skew-line formula cannot be used. Instead let both lines have direction $\vec b$:

$$
\vec r=\vec a_1+\lambda \vec b,\qquad \vec r=\vec a_2+\mu \vec b.
$$

The area of the parallelogram formed by $\vec b$ and $\vec a_2-\vec a_1$ is $|\vec b\times(\vec a_2-\vec a_1)|$, and dividing by the base $|\vec b|$ gives the perpendicular distance:

$$
d=\frac{|\vec b\times(\vec a_2-\vec a_1)|}{|\vec b|}.
$$

## 4. Worked example

**Question.** Find the shortest distance between

$$
L_1: \vec r=(\hat i+2\hat j+3\hat k)+\lambda(2\hat i+3\hat j+4\hat k)
$$

and

$$
L_2: \vec r=(2\hat i+4\hat j+5\hat k)+\mu(3\hat i+4\hat j+5\hat k).
$$

Here $\vec a_1=(1,2,3)$, $\vec a_2=(2,4,5)$, $\vec b_1=(2,3,4)$, $\vec b_2=(3,4,5)$, so $\vec a_2-\vec a_1=(1,2,2)$.

Compute the cross product:

$$
\vec b_1\times\vec b_2=\begin{vmatrix}
\hat i&\hat j&\hat k\\
2&3&4\\
3&4&5
\end{vmatrix}=\hat i(15-16)-\hat j(10-12)+\hat k(8-9)=(-1,2,-1).
$$

Its magnitude is $|\vec b_1\times\vec b_2|=\sqrt{1+4+1}=\sqrt{6}$.

The scalar triple product is

$$
(\vec a_2-\vec a_1)\cdot(\vec b_1\times\vec b_2)=(1)(-1)+(2)(2)+(2)(-1)=1.
$$

Therefore

$$
d=\frac{|1|}{\sqrt{6}}=\frac{1}{\sqrt{6}}.
$$

**Sanity check.** The distance is positive and small compared with the coordinate differences, which is reasonable. The numerator is not zero, so the lines are skew rather than intersecting.

<learning-block type="mistake" title="Using the skew-line formula for parallel lines">

If $\vec b_1\times\vec b_2=\vec 0$, the skew-line formula has a zero denominator and is invalid. Always check whether direction vectors are proportional first. Parallel lines need the base-height form $d=|\vec b\times(\vec a_2-\vec a_1)|/|\vec b|$.

</learning-block>

## 5. Deciding the relationship

Before calculating distance, decide what kind of pair you have:

| What you observe | Relationship | Distance |
| --- | --- | --- |
| Direction ratios proportional | Parallel (or coincident) | Use parallel-line formula; zero means coincident |
| Not parallel, scalar triple product zero | Intersecting | $0$ |
| Not parallel, scalar triple product non-zero | Skew | Use skew-line formula |

This small decision table prevents most formula-selection errors.

## Try it yourself

1. Find the angle between lines with direction ratios $(1,2,2)$ and $(2,3,-6)$.

<details><summary>Show the reasoning</summary>

$$
\cos\theta=\frac{|1\cdot2+2\cdot3+2\cdot(-6)|}{\sqrt{1+4+4}\,\sqrt{4+9+36}}=\frac{| -4|}{3\times7}=\frac{4}{21}.
$$

So $\theta=\cos^{-1}(4/21)$.

</details>

2. Show that the lines $\vec r=(\hat i+\hat j)+\lambda(2\hat i-\hat j+\hat k)$ and $\vec r=(2\hat i+\hat j-\hat k)+\mu(4\hat i-2\hat j+2\hat k)$ are parallel.

<details><summary>Show the reasoning</summary>

The direction vectors are $(2,-1,1)$ and $(4,-2,2)=2(2,-1,1)$. They are proportional, so the lines are parallel.

</details>

3. For the lines in question 2, find the shortest distance between them.

<details><summary>Show the reasoning</summary>

Use $\vec b=(2,-1,1)$, $\vec a_2-\vec a_1=(1,0,-1)$. Then

$$
\vec b\times(\vec a_2-\vec a_1)=\begin{vmatrix}
\hat i&\hat j&\hat k\\
2&-1&1\\
1&0&-1
\end{vmatrix}=(1,3,1).
$$

Its magnitude is $\sqrt{11}$, and $|\vec b|=\sqrt{6}$. Hence $d=\sqrt{11/6}$.

</details>

## Remember

- The angle between two lines comes from the dot product of their direction vectors; use the absolute value for the acute/right angle.
- Skew lines need the common perpendicular: $d=|(\vec a_2-\vec a_1)\cdot(\vec b_1\times\vec b_2)|/|\vec b_1\times\vec b_2|$.
- Parallel lines need the base-height form; never divide by a zero cross product.
- A zero scalar triple product means the lines are coplanar; combine that with the direction test to distinguish intersecting from parallel/coincident.

With lines understood, the next module moves one dimension up: equations of planes and the angles they make.