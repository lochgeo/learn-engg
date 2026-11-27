## A flat surface in three dimensions

A line needs a point and a direction. A plane needs a point and a direction that is **forbidden**: the normal direction. Every vector lying in the plane is perpendicular to the normal, and that single perpendicular condition generates the whole equation of the plane. Once you can write a plane in different forms, angles between planes and between a line and a plane become dot-product calculations.

## 1. Normal form

Let a plane be at perpendicular distance $p$ from the origin, and let $\hat n=l\hat i+m\hat j+n\hat k$ be the unit normal from the origin to the plane. If $P(\vec r)$ is any point on the plane, the projection of $\vec r$ onto $\hat n$ is exactly $p$. Therefore

$$
\vec r\cdot\hat n=p.
$$

In Cartesian form, with $l,m,n$ as direction cosines of the normal,

$$
lx+my+nz=p,\qquad l^2+m^2+n^2=1,\qquad p\ge 0.
$$

This is the **normal form**. It is useful because the right-hand side directly gives the perpendicular distance from the origin, provided the normal is a unit vector.

## 2. Point-normal and general form

If a plane passes through $A(\vec a)$ and is perpendicular to $\vec n$, then for any point $P(\vec r)$ on the plane the vector $\vec r-\vec a$ lies in the plane and is perpendicular to $\vec n$:

$$
(\vec r-\vec a)\cdot\vec n=0.
$$

Expanding gives $\vec r\cdot\vec n=d$, where $d=\vec a\cdot\vec n$. In Cartesian coordinates, with $\vec n=A\hat i+B\hat j+C\hat k$,

$$
A(x-x_1)+B(y-y_1)+C(z-z_1)=0,
$$

or the general form

$$
Ax+By+Cz+D=0.
$$

Here $(A,B,C)$ are direction ratios of the normal, not of any line in the plane. This is a frequent source of confusion: a direction vector along a line is parallel to the line, but the vector $(A,B,C)$ is perpendicular to the plane.

### Other useful forms

| Form | Equation | When to use |
| --- | --- | --- |
| Intercept | $\frac{x}{a}+\frac{y}{b}+\frac{z}{c}=1$ | Plane cuts axes at $(a,0,0),(0,b,0),(0,0,c)$ |
| Through three non-collinear points | $\begin{vmatrix}x-x_1&y-y_1&z-z_1\\x_2-x_1&y_2-y_1&z_2-z_1\\x_3-x_1&y_3-y_1&z_3-z_1\end{vmatrix}=0$ | Three points known |
| Plane through intersection of two planes | $(A_1x+B_1y+C_1z+D_1)+\lambda(A_2x+B_2y+C_2z+D_2)=0$ | Family of planes through a common line |

The intercept form assumes the plane cuts all three axes at non-zero intercepts. A plane parallel to an axis or passing through the origin needs a different form.

## 3. Angles involving planes

**Angle between two planes** is the angle between their normals. For planes with normals $\vec n_1$ and $\vec n_2$,

$$
\cos\theta=\frac{|\vec n_1\cdot\vec n_2|}{|\vec n_1||\vec n_2|}.
$$

The planes are perpendicular if $\vec n_1\cdot\vec n_2=0$, and parallel if $\vec n_1=\lambda\vec n_2$.

**Angle between a line and a plane** is the complement of the angle between the line and the plane's normal. If the line has direction $\vec b$ and the plane has normal $\vec n$, and $\phi$ is the angle between line and plane, then

$$
\sin\phi=\frac{|\vec b\cdot\vec n|}{|\vec b||\vec n|}.
$$

We use sine because $\phi=90^\circ-\alpha$, where $\alpha$ is the angle between $\vec b$ and $\vec n$. A line is parallel to the plane if $\vec b\cdot\vec n=0$, and perpendicular to the plane if $\vec b$ is parallel to $\vec n$.

## 4. Worked example

**Question.** Find the equation of the plane passing through $(1,2,3)$ with normal vector $2\hat i-3\hat j+4\hat k$. Then find the angle this plane makes with the plane $x+2y+z=5$.

Using point-normal form,

$$
2(x-1)-3(y-2)+4(z-3)=0.
$$

Simplifying:

$$
2x-2-3y+6+4z-12=0 \implies 2x-3y+4z-8=0.
$$

The normals are $\vec n_1=(2,-3,4)$ and $\vec n_2=(1,2,1)$. Their dot product is

$$
\vec n_1\cdot\vec n_2=2-6+4=0.
$$

Therefore the angle between the planes is $90^\circ$.

**Sanity check.** A zero dot product means the normals are perpendicular, so the planes themselves are perpendicular. The point $(1,2,3)$ satisfies $2(1)-3(2)+4(3)-8=0$, confirming the plane equation.

<learning-block type="mistake" title="Using sine for the angle between two planes">

The angle between two planes is the angle between their normals, so it uses $\cos\theta=|\vec n_1\cdot\vec n_2|/(|\vec n_1||\vec n_2|)$. The sine formula is for the angle between a line and a plane, because that angle is measured from the plane, not from the normal.

</learning-block>

## 5. Reducing the general form to normal form

To convert $Ax+By+Cz+D=0$ into normal form, divide by $\sqrt{A^2+B^2+C^2}$ and move the constant so the distance $p$ is positive:

$$
\frac{Ax+By+Cz}{\pm\sqrt{A^2+B^2+C^2}}=\frac{-D}{\pm\sqrt{A^2+B^2+C^2}}.
$$

Choose the sign so that the right-hand side is positive. This procedure is the same normalisation idea used for direction cosines, and it prepares the ground for the distance formula in the next module.

## Try it yourself

1. Find the equation of the plane with intercepts $2,3,4$ on the $x,y,z$ axes.

<details><summary>Show the reasoning</summary>

Using intercept form,

$$
\frac{x}{2}+\frac{y}{3}+\frac{z}{4}=1.
$$

Multiplying by $12$ gives $6x+4y+3z=12$.

</details>

2. Find the angle between the line $\frac{x-1}{2}=\frac{y}{1}=\frac{z+1}{-2}$ and the plane $x+y+z=3$.

<details><summary>Show the reasoning</summary>

The line direction is $\vec b=(2,1,-2)$ and the plane normal is $\vec n=(1,1,1)$. Then

$$
\sin\phi=\frac{|2+1-2|}{\sqrt{4+1+4}\,\sqrt{1+1+1}}=\frac{1}{3\sqrt{3}}.
$$

So $\phi=\sin^{-1}\left(\frac{1}{3\sqrt{3}}\right)$.

</details>

3. Find the equation of the plane passing through $(1,-1,2)$ and parallel to the plane $2x+3y-z=5$.

<details><summary>Show the reasoning</summary>

Parallel planes have proportional normals, so take the same normal $(2,3,-1)$:

$$
2(x-1)+3(y+1)-(z-2)=0 \implies 2x+3y-z+3=0.
$$

Check: $(1,-1,2)$ gives $2-3-2+3=0$.

</details>

## Remember

- The vector $(A,B,C)$ in $Ax+By+Cz+D=0$ is normal to the plane, not along it.
- Angle between planes uses normals and cosine; angle between a line and a plane uses the line direction, the normal, and sine.
- Normal form requires a unit normal and $p\ge 0$; it makes the origin distance visible.
- Before applying an intercept or normal form, check the geometric assumptions: non-zero intercepts, non-zero normal, and the correct sign.

The next module uses the normal form to measure how far a point lies from a plane, a calculation that appears constantly in board and JEE problems.
