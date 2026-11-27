## Locating every point on a line

A point and a direction are enough to fix a line. In two dimensions you often compress that information into a slope, but in three dimensions a single slope cannot describe how the line rises or falls relative to three axes. Instead we keep the direction explicitly as a vector or as direction ratios, and let a parameter walk along the line.

## 1. Vector equation of a line

Let the line pass through a point $A$ with position vector $\vec a$ and be parallel to a non-zero vector $\vec b$. Any point $P$ with position vector $\vec r$ on the line satisfies

$$
\vec r=\vec a+\lambda \vec b,\qquad \lambda\in\mathbb{R}.
$$

The parameter $\lambda$ tells you how far to move from $A$ along $\vec b$: $\lambda=0$ gives $A$, $\lambda=1$ gives $\vec a+\vec b$, and negative values move in the opposite sense. The equation describes the whole line because every multiple of $\vec b$ is allowed.

If the line passes through two points $A(\vec a)$ and $B(\vec b_1)$, then its direction is $\vec b_1-\vec a$, so

$$
\vec r=\vec a+\lambda(\vec b_1-\vec a),\qquad \lambda\in\mathbb{R}.
$$

This two-point form is the same idea: replace "parallel to $\vec b$" by "parallel to the displacement from $A$ to $B$".

## 2. Cartesian equations

Write $\vec a=x_1\hat i+y_1\hat j+z_1\hat k$, $\vec b=a\hat i+b\hat j+c\hat k$, and $\vec r=x\hat i+y\hat j+z\hat k$. Comparing components in $\vec r=\vec a+\lambda\vec b$ gives

$$
x=x_1+\lambda a,\qquad y=y_1+\lambda b,\qquad z=z_1+\lambda c.
$$

When $a,b,c\neq 0$, eliminating $\lambda$ gives the symmetric Cartesian form

$$
\frac{x-x_1}{a}=\frac{y-y_1}{b}=\frac{z-z_1}{c}.
$$

Here $(a,b,c)$ are direction ratios of the line. They may be replaced by direction cosines, but any non-zero proportional triple gives the same line.

### When a denominator is zero

A zero denominator does not mean division is happening. It means the corresponding coordinate does not change. For example, if $a=0$ and $b,c\neq 0$, the correct Cartesian description is

$$
x=x_1,\qquad \frac{y-y_1}{b}=\frac{z-z_1}{c}.
$$

The line lies in the plane $x=x_1$, parallel to the $yz$-plane direction determined by $(0,b,c)$.

## 3. Two-point Cartesian form

For a line through $(x_1,y_1,z_1)$ and $(x_2,y_2,z_2)$, direction ratios are $(x_2-x_1,y_2-y_1,z_2-z_1)$, so

$$
\frac{x-x_1}{x_2-x_1}=\frac{y-y_1}{y_2-y_1}=\frac{z-z_1}{z_2-z_1},
$$

with the same zero-denominator convention. Either point may be used as $(x_1,y_1,z_1)$; the equation looks different but describes the same line.

## 4. Worked example

**Question.** Find the vector and Cartesian equations of the line passing through $A(1,-2,3)$ and parallel to $\vec b=2\hat i+3\hat j-6\hat k$. Also find the point where it meets the plane $z= -3$.

The position vector of $A$ is $\vec a=\hat i-2\hat j+3\hat k$. Therefore the vector equation is

$$
\vec r=(\hat i-2\hat j+3\hat k)+\lambda(2\hat i+3\hat j-6\hat k).
$$

The Cartesian form is

$$
\frac{x-1}{2}=\frac{y+2}{3}=\frac{z-3}{-6}.
$$

To meet $z=-3$, set $z=3-6\lambda=-3$. This gives $-6\lambda=-6$, so $\lambda=1$. Then

$$
x=1+2(1)=3,\qquad y=-2+3(1)=1,\qquad z=-3.
$$

The intersection point is $(3,1,-3)$.

**Sanity check.** Substituting $(3,1,-3)$ into the Cartesian ratios gives $\frac{2}{2}=\frac{3}{3}=\frac{-6}{-6}=1$, so the point lies on the line and has $z=-3$.

<learning-block type="mistake" title="Treating a zero denominator as zero">

In the Cartesian form, the expression $\frac{x-x_1}{a}$ is not evaluated when $a=0$. Writing $x=x_1$ is the correct statement. A denominator of zero carries geometric information: that coordinate is constant along the line.

</learning-block>

## 5. Reading information from an equation

You should be able to move both ways. From

$$
\frac{x-3}{2}=\frac{y+1}{-4}=\frac{z-5}{1},
$$

you can read immediately that the line passes through $(3,-1,5)$ and has direction ratios $(2,-4,1)$. The sign in $y+1$ means $y_1=-1$. This reverse reading is common in exam questions and saves time.

## Try it yourself

1. Write the Cartesian equation of the line through $(2,1,-3)$ and $(4,-2,5)$.

<details><summary>Show the reasoning</summary>

Direction ratios are $(4-2,-2-1,5-(-3))=(2,-3,8)$. Using point $(2,1,-3)$,

$$
\frac{x-2}{2}=\frac{y-1}{-3}=\frac{z+3}{8}.
$$

</details>

2. Find the direction ratios and one point on the line $\frac{x+1}{3}=\frac{y-2}{0}=\frac{z}{5}$.

<details><summary>Show the reasoning</summary>

Direction ratios are $(3,0,5)$. The equation means $y-2=0$, so $y=2$. A point on the line is $(-1,2,0)$. The line is parallel to the $xz$-plane in the sense that its $y$ coordinate never changes.

</details>

3. Write the vector equation of the line passing through $(0,2,-1)$ parallel to the vector $3\hat i-\hat j+2\hat k$.

<details><summary>Show the reasoning</summary>

With $\vec a=2\hat j-\hat k$ and $\vec b=3\hat i-\hat j+2\hat k$,

$$
\vec r=(2\hat j-\hat k)+\lambda(3\hat i-\hat j+2\hat k),\qquad \lambda\in\mathbb{R}.
$$

</details>

## Remember

- A line in space is fixed by one point and one non-zero direction vector.
- Vector form $\vec r=\vec a+\lambda\vec b$ and Cartesian form $\frac{x-x_1}{a}=\frac{y-y_1}{b}=\frac{z-z_1}{c}$ contain the same information.
- A zero denominator means the corresponding coordinate is constant, not that the expression is meaningless.
- Two-point form is just point-direction form with direction ratios obtained by subtraction.

Next we compare two lines: the angle between their directions, and the shortest distance between them when they do not meet.
