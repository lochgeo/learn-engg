## Your study plan

This chapter is a toolkit for lines and planes in space. The calculations are short, but only when you pick the right object first: direction vector, normal, projection, or scalar triple product. A focused review takes about **90 minutes**.

| Time | Focus | What to practise |
| --- | --- | --- |
| 10 min | Direction cosines and ratios | Normalising ratios, checking $l^2+m^2+n^2=1$ |
| 10 min | Line equations | Vector, Cartesian, two-point, and zero-denominator cases |
| 15 min | Angles and shortest distance | Dot product for angle, cross/triple product for distance |
| 15 min | Plane equations and angles | Point-normal form, normal form, line-plane and plane-plane angles |
| 10 min | Distance from a plane | Point distance, parallel planes, foot/image idea |
| 10 min | Coplanarity and mixed problems | Scalar triple product test, plane containing two lines |
| 20 min | Mastery check | Solve the questions below without looking at answers |

After each block, close your notes and do one small problem from memory. If you cannot explain why a formula applies, that formula is not ready yet.

## Which tool do I reach for?

| Clue in the question | Start with | Check before using it |
| --- | --- | --- |
| Direction of a line, or angles with axes | Direction cosines/ratios; $l^2+m^2+n^2=1$ | Ratios must be normalised before calling them cosines. |
| Equation of a line through point(s) | $\vec r=\vec a+\lambda\vec b$ or symmetric Cartesian form | Handle a zero direction ratio as a constant coordinate. |
| Angle between two lines | $\cos\theta=\frac{|\vec b_1\cdot\vec b_2|}{|\vec b_1||\vec b_2|}$ | Use direction vectors, not position vectors. |
| Shortest distance between skew lines | $d=\frac{|(\vec a_2-\vec a_1)\cdot(\vec b_1\times\vec b_2)|}{|\vec b_1\times\vec b_2|}$ | Confirm lines are not parallel first. |
| Shortest distance between parallel lines | $d=\frac{|\vec b\times(\vec a_2-\vec a_1)|}{|\vec b|}$ | Use one common direction vector $\vec b$. |
| Equation of a plane | Point-normal: $(\vec r-\vec a)\cdot\vec n=0$ | $(A,B,C)$ is normal to the plane. |
| Angle between line and plane | $\sin\phi=\frac{|\vec b\cdot\vec n|}{|\vec b||\vec n|}$ | Use sine, not cosine. |
| Angle between two planes | $\cos\theta=\frac{|\vec n_1\cdot\vec n_2|}{|\vec n_1||\vec n_2|}$ | Use normals of the planes. |
| Distance of point from plane | $d=\frac{|Ax_1+By_1+Cz_1+D|}{\sqrt{A^2+B^2+C^2}}$ | Plane must be in $Ax+By+Cz+D=0$ form. |
| Lines coplanar/intersecting | Scalar triple product $=0$ | Zero means coplanar; still check parallel/intersecting. |

## Mastery check

Try each question before opening the answer. Use the decision table above if you get stuck, but name the tool before you calculate.

### 1. Direction cosines from ratios

Find the direction cosines of the line whose direction ratios are $3,-4,12$.

<details><summary>Answer and reasoning</summary>

The magnitude is $\sqrt{3^2+(-4)^2+12^2}=\sqrt{169}=13$. Therefore

$$
l=\frac{3}{13},\qquad m=-\frac{4}{13},\qquad n=\frac{12}{13}.
$$

Check: $(9+16+144)/169=1$.

</details>

### 2. Line through two points

Find the Cartesian equation of the line passing through $(1,2,-1)$ and $(3,-1,2)$.

<details><summary>Answer and reasoning</summary>

Direction ratios are $(3-1,-1-2,2-(-1))=(2,-3,3)$. Using $(1,2,-1)$,

$$
\frac{x-1}{2}=\frac{y-2}{-3}=\frac{z+1}{3}.
$$

</details>

### 3. Angle between two lines

Find the acute angle between the lines $\frac{x}{1}=\frac{y}{2}=\frac{z}{2}$ and $\frac{x}{2}=\frac{y}{1}=\frac{z}{-2}$.

<details><summary>Answer and reasoning</summary>

Direction vectors are $(1,2,2)$ and $(2,1,-2)$. Then

$$
\cos\theta=\frac{|1\cdot2+2\cdot1+2\cdot(-2)|}{\sqrt{1+4+4}\,\sqrt{4+1+4}}=\frac{|0|}{9}=0.
$$

The lines are perpendicular, so $\theta=90^\circ$.

</details>

### 4. Shortest distance between skew lines

Find the shortest distance between $\vec r=(\hat i+\hat j)+\lambda(2\hat i-\hat j+\hat k)$ and $\vec r=(2\hat i+\hat j-\hat k)+\mu(3\hat i-5\hat j+2\hat k)$.

<details><summary>Answer and reasoning</summary>

$\vec a_2-\vec a_1=(1,0,-1)$, $\vec b_1=(2,-1,1)$, $\vec b_2=(3,-5,2)$.

$$
\vec b_1\times\vec b_2=\begin{vmatrix}
\hat i&\hat j&\hat k\\
2&-1&1\\
3&-5&2
\end{vmatrix}=(3,-1,-7).
$$

Magnitude $\sqrt{9+1+49}=\sqrt{59}$. The scalar triple product is $(1,0,-1)\cdot(3,-1,-7)=3+0+7=10$. Hence

$$
d=\frac{10}{\sqrt{59}}.
$$

</details>

### 5. Equation of a plane

Find the equation of the plane passing through $(2,3,1)$ and perpendicular to the vector $3\hat i-2\hat j+5\hat k$.

<details><summary>Answer and reasoning</summary>

Point-normal form gives

$$
3(x-2)-2(y-3)+5(z-1)=0.
$$

Simplifying: $3x-6-2y+6+5z-5=0$, so $3x-2y+5z-5=0$. Check: $3(2)-2(3)+5(1)-5=0$.

</details>

### 6. Angle between a line and a plane

Find the angle between the line $\frac{x+1}{2}=\frac{y}{3}=\frac{z-3}{6}$ and the plane $10x+2y-11z=3$.

<details><summary>Answer and reasoning</summary>

$\vec b=(2,3,6)$, $\vec n=(10,2,-11)$. Then

$$
\sin\phi=\frac{|20+6-66|}{\sqrt{4+9+36}\,\sqrt{100+4+121}}=\frac{40}{7\times15}=\frac{40}{105}=\frac{8}{21}.
$$

So $\phi=\sin^{-1}(8/21)$.

</details>

### 7. Distance from a point to a plane

Find the distance of the point $(1,-2,3)$ from the plane $x-y+z-5=0$.

<details><summary>Answer and reasoning</summary>

$$
d=\frac{|1-(-2)+3-5|}{\sqrt{1^2+(-1)^2+1^2}}=\frac{|1|}{\sqrt{3}}=\frac{1}{\sqrt{3}}.
$$

</details>

### 8. Distance between parallel planes

Find the distance between the planes $2x-3y+6z+7=0$ and $2x-3y+6z-14=0$.

<details><summary>Answer and reasoning</summary>

The normals match. $\sqrt{2^2+(-3)^2+6^2}=\sqrt{49}=7$. Therefore

$$
d=\frac{|-14-7|}{7}=\frac{21}{7}=3.
$$

</details>

### 9. Coplanarity

Show that the lines $\frac{x-1}{2}=\frac{y-2}{3}=\frac{z-3}{4}$ and $\frac{x-4}{5}=\frac{y-1}{2}=\frac{z}{1}$ are coplanar.

<details><summary>Answer and reasoning</summary>

Joining vector is $(3,-1,-3)$. Directions are $(2,3,4)$ and $(5,2,1)$.

$$
\begin{vmatrix}
3&-1&-3\\
2&3&4\\
5&2&1
\end{vmatrix}=3(3-8)-(-1)(2-20)+(-3)(4-15)=3(-5)+1(-18)-3(-11)=-15-18+33=0.
$$

The determinant is zero and the directions are not proportional, so the lines are coplanar and intersecting.

</details>

### 10. Mixed problem: line meeting a plane

Find the coordinates of the point where the line through $(3,-4,-5)$ and $(2,-3,1)$ crosses the plane $2x+y+z=7$.

<details><summary>Answer and reasoning</summary>

Direction ratios are $(2-3,-3-(-4),1-(-5))=(-1,1,6)$. Parametric point: $(3-\lambda,-4+\lambda,-5+6\lambda)$. Substitute into the plane:

$$
2(3-\lambda)+(-4+\lambda)+(-5+6\lambda)=7.
$$

This gives $6-2\lambda-4+\lambda-5+6\lambda=7$, so $5\lambda-3=7$, $\lambda=2$. The point is $(1,-2,7)$.

Check: $2(1)+(-2)+7=7$.

</details>

## Self-check

You are ready for the timed set when you can:

- convert direction ratios to direction cosines and verify $l^2+m^2+n^2=1$ without hesitation;
- write line and plane equations from points, directions, or normals, including zero-denominator and intercept cases;
- choose cosine for line-line or plane-plane angles and sine for line-plane angles;
- distinguish skew, parallel, and intersecting lines before applying a distance formula;
- compute point-to-plane and parallel-plane distances with correctly matched coefficients;
- use the scalar triple product to test coplanarity and explain what a zero or non-zero result means;
- verify a final answer by substitution, a dot product, or a quick geometric sanity check.