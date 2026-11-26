## Putting the tools to work

Distance, slope and families of lines are not ends in themselves. They answer practical geometric questions: where a perpendicular from a point lands, where its mirror image lies, which line splits an angle evenly, whether three lines meet at one point, and the area of a triangle drawn from coordinates. Each of these reduces to an equation you can already write — the trick is choosing the right one.

## 1. Foot of a perpendicular

Let $L:Ax+By+C=0$ and $P(x_1,y_1)$, and set $D=Ax_1+By_1+C$. The perpendicular from $P$ has direction $(A,B)$, so a point on it has the form $(x_1-At,\ y_1-Bt)$. Requiring that point to lie on $L$ gives $t=D/(A^2+B^2)$ (the calculation from the distance lesson). Hence the foot is

$$
\boxed{\;F=\left(x_1-\frac{AD}{A^2+B^2},\ y_1-\frac{BD}{A^2+B^2}\right)\;}.
$$

This also proves the distance formula: $PF=|t|\sqrt{A^2+B^2}=\dfrac{|D|}{\sqrt{A^2+B^2}}$.

## 2. Image in a line

If $F$ is the foot, reflection in $L$ sends $P$ to the point $P'$ for which $F$ is the midpoint of $PP'$. Thus the displacement from $P$ to the image is twice the displacement from $P$ to the foot:

$$
\boxed{\;P'=\left(x_1-\frac{2AD}{A^2+B^2},\ y_1-\frac{2BD}{A^2+B^2}\right)\;}.
$$

Useful checks: $P'$ has the same perpendicular distance from $L$ as $P$, and the midpoint of $PP'$ lies on $L$. Reflection across the line $y=x$ simply swaps the two coordinates, a handy mental model.

## 3. Angle bisectors

A point on either bisector of two lines is equidistant from them. Using the distance formula,

$$
\frac{A_1x+B_1y+C_1}{\sqrt{A_1^2+B_1^2}}=\pm\frac{A_2x+B_2y+C_2}{\sqrt{A_2^2+B_2^2}}
$$

gives the two bisectors, one for each sign. To decide which is the internal bisector of a particular angle, evaluate the two normalised expressions at a point known to lie inside that angle; the correct sign is the one making the two sides agree in sign there. For the coordinate axes $y=0$ and $x=0$ the equation is $|y|=|x|$, so the bisectors are $y=x$ and $y=-x$.

## 4. Area and concurrency

For vertices $(x_1,y_1),(x_2,y_2),(x_3,y_3)$, the signed area can be written as a determinant, and the ordinary area is its absolute value:

$$
\Delta=\frac12\left|x_1(y_2-y_3)+x_2(y_3-y_1)+x_3(y_1-y_2)\right|.
$$

A zero result means the three points are collinear — the same test as comparing slopes.

Three lines $a_ix+b_iy+c_i=0$ ($i=1,2,3$) are concurrent (or mutually parallel) exactly when

$$
\begin{vmatrix}a_1&b_1&c_1\\ a_2&b_2&c_2\\ a_3&b_3&c_3\end{vmatrix}=0.
$$

In practice, solve two of them and substitute the intersection into the third; that also distinguishes concurrency from parallelism.

## 5. Fully worked example

From $P(2,3)$ to $L:3x+4y-10=0$: here $D=3(2)+4(3)-10=8$ and $A^2+B^2=25$.

**Foot.**

$$
F=\left(2-\frac{3\cdot8}{25},\ 3-\frac{4\cdot8}{25}\right)=\left(\frac{26}{25},\frac{43}{25}\right).
$$

Check that it lies on $L$: $3\cdot\frac{26}{25}+4\cdot\frac{43}{25}-10=\frac{250}{25}-10=0$. ✓

**Image.**

$$
P'=\left(2-\frac{2\cdot3\cdot8}{25},\ 3-\frac{2\cdot4\cdot8}{25}\right)=\left(\frac{2}{25},\frac{11}{25}\right).
$$

Its midpoint with $P$ is $\left(\frac{26}{25},\frac{43}{25}\right)=F$, as required. ✓

**Distance.** $PF=\sqrt{\left(\frac{24}{25}\right)^2+\left(\frac{32}{25}\right)^2}=\frac{40}{25}=\frac85$, matching $\frac{|D|}{\sqrt{A^2+B^2}}=\frac{8}{5}$. ✓

**Area.** The triangle $(0,0),(3,0),(0,4)$ has area $\frac12|0+3(4-0)+0|=6$, agreeing with the right-triangle area $\frac12\cdot3\cdot4$. ✓

<learning-block type="mistake" title="Foot or image: a factor of two">

The foot subtracts $t=\frac{D}{A^2+B^2}$ once; the image subtracts it **twice**. Writing the image formula with one factor gives a point between $P$ and the line, not a reflection. Guard against this by checking that the midpoint of your image and $P$ actually lies on the mirror line.

</learning-block>

## Try it yourself

**A.** Find the foot of the perpendicular from $(1,2)$ to $x+y-4=0$.

<details><summary>Show the reasoning</summary>

$D=1+2-4=-1$, $A^2+B^2=2$, so $F=\left(1-\frac{-1}{2},\ 2-\frac{-1}{2}\right)=\left(\frac32,\frac52\right)$. It lies on the line since $\frac32+\frac52-4=0$. ✓

</details>

**B.** Find the image of $(1,2)$ in $x+y-4=0$.

<details><summary>Show the reasoning</summary>

Using the factor $2$: $P'=\left(1-2\cdot\frac{-1}{2},\ 2-2\cdot\frac{-1}{2}\right)=(2,3)$. The midpoint $\left(\frac32,\frac52\right)$ is the foot from part A. ✓

</details>

**C.** Find the area of the triangle with vertices $(1,1),(4,2),(2,5)$.

<details><summary>Show the reasoning</summary>

$\Delta=\frac12|1(2-5)+4(5-1)+2(1-2)|=\frac12|-3+16-2|=\frac{11}{2}$. The value is positive and of a reasonable size for a triangle spanning a few units. ✓

</details>

## Remember

- Foot: subtract $\frac{D}{A^2+B^2}(A,B)$ from the point, with $D=Ax_1+By_1+C$.
- Image: subtract twice that vector; the foot is the midpoint of point and image.
- Angle bisectors are the loci of equal perpendicular distance, giving a $\pm$ pair of lines.
- Area is half an absolute determinant; zero area means collinear points.
- Three lines are concurrent when their coefficient determinant vanishes — check by substitution.
- Next: the practice module brings these methods together under mixed question clues.
