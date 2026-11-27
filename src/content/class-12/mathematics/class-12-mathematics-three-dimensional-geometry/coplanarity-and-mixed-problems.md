## Putting lines and planes in the same picture

Real problems rarely announce which formula to use. A question may give two lines and ask whether they meet, ask for the plane containing them, or hide a distance calculation inside a geometry condition. Coplanarity is the bridge: it tells you when two lines belong to the same plane, and the same determinant idea helps you build that plane.

## 1. Coplanarity of two lines

Consider two lines in Cartesian form

$$
L_1:\;\frac{x-x_1}{a_1}=\frac{y-y_1}{b_1}=\frac{z-z_1}{c_1},\qquad
L_2:\;\frac{x-x_2}{a_2}=\frac{y-y_2}{b_2}=\frac{z-z_2}{c_2}.
$$

The vector joining the two known points is $\vec a_2-\vec a_1=(x_2-x_1,y_2-y_1,z_2-z_1)$. The lines are coplanar if this joining vector lies in the plane spanned by the two direction vectors, that is, if the scalar triple product is zero:

$$
\begin{vmatrix}
x_2-x_1&y_2-y_1&z_2-z_1\\
a_1&b_1&c_1\\
a_2&b_2&c_2
\end{vmatrix}=0.
$$

This condition is necessary and sufficient for the lines to be coplanar. If they are coplanar and not parallel, they intersect. If they are coplanar and parallel, they coincide or are parallel in that plane.

In vector form, for $\vec r=\vec a_1+\lambda\vec b_1$ and $\vec r=\vec a_2+\mu\vec b_2$, the condition is

$$
(\vec a_2-\vec a_1)\cdot(\vec b_1\times\vec b_2)=0.
$$

Notice the connection with shortest distance: the same scalar triple product appears in the numerator. Coplanarity means that shortest distance is zero.

## 2. Plane containing two lines

If two lines intersect, or are parallel, they determine a plane. For intersecting lines with directions $\vec b_1,\vec b_2$, the normal to the plane is $\vec b_1\times\vec b_2$, and the plane passes through $\vec a_1$:

$$
(\vec r-\vec a_1)\cdot(\vec b_1\times\vec b_2)=0.
$$

In Cartesian determinant form this is

$$
\begin{vmatrix}
x-x_1&y-y_1&z-z_1\\
a_1&b_1&c_1\\
a_2&b_2&c_2
\end{vmatrix}=0.
$$

Compare this with the coplanarity determinant: the first row has become $(x-x_1,y-y_1,z-z_1)$, the coordinates of a general point on the plane. The coplanarity test is the special case where that general point is the known point of the second line.

## 3. A mixed worked example

**Question.** Show that the lines

$$
L_1:\;\frac{x-1}{2}=\frac{y-2}{3}=\frac{z-3}{4},\qquad
L_2:\;\frac{x-2}{3}=\frac{y-3}{4}=\frac{z-4}{5}
$$

are coplanar, and find the equation of the plane containing them.

First test coplanarity. Here $(x_2-x_1,y_2-y_1,z_2-z_1)=(1,1,1)$, $(a_1,b_1,c_1)=(2,3,4)$, $(a_2,b_2,c_2)=(3,4,5)$. Evaluate

$$
\begin{vmatrix}
1&1&1\\
2&3&4\\
3&4&5
\end{vmatrix}=1(15-16)-1(10-12)+1(8-9)=-1+2-1=0.
$$

The determinant is zero, so the lines are coplanar. The direction ratios $(2,3,4)$ and $(3,4,5)$ are not proportional, so the lines intersect.

The plane containing them is

$$
\begin{vmatrix}
x-1&y-2&z-3\\
2&3&4\\
3&4&5
\end{vmatrix}=0.
$$

Expanding along the first row:

$$
(x-1)(15-16)-(y-2)(10-12)+(z-3)(8-9)=0,
$$

$$
-(x-1)+2(y-2)-(z-3)=0.
$$

Simplifying:

$$
-x+1+2y-4-z+3=0 \implies -x+2y-z=0 \implies x-2y+z=0.
$$

**Sanity check.** Point $(1,2,3)$ gives $1-4+3=0$. Point $(2,3,4)$ gives $2-6+4=0$. The normal $(1,-2,1)$ is perpendicular to both directions: $(1,-2,1)\cdot(2,3,4)=2-6+4=0$ and $(1,-2,1)\cdot(3,4,5)=3-8+5=0$. All checks pass.

<learning-block type="mistake" title="Concluding intersecting from coplanar alone">

Coplanar means the lines lie in one plane. They may intersect, be parallel, or even coincide. After getting a zero scalar triple product, check the direction vectors. Only non-parallel coplanar lines intersect.

</learning-block>

## 4. A mixed strategy

When a problem gives several objects, decide the order of operations before computing:

1. **Identify objects and data.** Points, direction vectors, normals, known planes.
2. **Choose the representation.** Vector form is compact for dot/cross work; Cartesian form is often better for substitution and distances.
3. **Check special cases.** Parallel directions, zero denominators, proportional normals.
4. **Compute and verify.** Substitute a known point back into the final equation, or check a perpendicularity condition.

This routine is especially useful in JEE-style problems where the algebra is easy to do but easy to do on the wrong object.

## 5. Mixed example: line and plane

**Question.** Find the point where the line $\frac{x-2}{3}=\frac{y+1}{4}=\frac{z-2}{2}$ meets the plane $x-y+z-5=0$.

Let the common ratio be $\lambda$. Then

$$
x=2+3\lambda,\qquad y=-1+4\lambda,\qquad z=2+2\lambda.
$$

Substitute into the plane:

$$
(2+3\lambda)-(-1+4\lambda)+(2+2\lambda)-5=0.
$$

Simplify:

$$
2+3\lambda+1-4\lambda+2+2\lambda-5=0 \implies \lambda=0.
$$

The intersection is $(2,-1,2)$.

**Sanity check.** The point satisfies the line at $\lambda=0$ and the plane: $2-(-1)+2-5=0$.

## Try it yourself

1. Check whether the lines $\frac{x-1}{1}=\frac{y-2}{2}=\frac{z-3}{3}$ and $\frac{x-2}{2}=\frac{y-4}{4}=\frac{z-5}{5}$ are coplanar.

<details><summary>Show the reasoning</summary>

The direction ratios $(1,2,3)$ and $(2,4,5)$ are not proportional, so the lines are not parallel. The joining vector is $(1,2,2)$ and

$$
\begin{vmatrix}
1&2&2\\
1&2&3\\
2&4&5
\end{vmatrix}=1(10-12)-2(5-6)+2(4-4)=-2+2+0=0.
$$

The scalar triple product is zero, so the lines are coplanar and therefore intersecting.

</details>

2. Find the equation of the plane containing the point $(1,0,0)$ and perpendicular to the line $\frac{x-1}{2}=\frac{y+1}{-3}=\frac{z}{4}$.

<details><summary>Show the reasoning</summary>

The line's direction vector $(2,-3,4)$ is normal to the required plane. Thus

$$
2(x-1)-3(y-0)+4(z-0)=0 \implies 2x-3y+4z-2=0.
$$

</details>

3. If a line is parallel to the plane $2x+y-2z+3=0$, what condition must its direction ratios $(a,b,c)$ satisfy?

<details><summary>Show the reasoning</summary>

A line parallel to a plane is perpendicular to the plane's normal $(2,1,-2)$. Therefore

$$
2a+b-2c=0.
$$

</details>

## Remember

- Coplanarity of two lines is tested by the scalar triple product $(\vec a_2-\vec a_1)\cdot(\vec b_1\times\vec b_2)=0$.
- Zero coplanarity determinant means same plane, not automatically intersection; check whether directions are proportional.
- The plane containing two intersecting lines uses the cross product of their direction vectors as the normal.
- In mixed problems, verify the final answer by substituting known points or checking dot/cross conditions.

You now have the full line-and-plane toolkit. The review module that follows organises these tools into a decision table and gives mastery problems across the whole chapter.