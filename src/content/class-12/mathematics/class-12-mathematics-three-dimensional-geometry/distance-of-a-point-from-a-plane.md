## How far is a point from a plane?

Distance from a point to a line in a plane has a familiar formula. In space, the same question for a point and a plane has an equally clean answer, and the normal vector does most of the work. The idea is simple: walk from the point along the normal until you hit the plane; the length of that walk is the distance.

## 1. Distance formula

Let the plane be

$$
Ax+By+Cz+D=0,
$$

and let $P(x_1,y_1,z_1)$ be a point. The perpendicular distance from $P$ to the plane is

$$
d=\frac{|Ax_1+By_1+Cz_1+D|}{\sqrt{A^2+B^2+C^2}}.
$$

The numerator evaluates the plane expression at the point. It is zero when the point lies on the plane. The denominator converts the normal $(A,B,C)$ into a unit normal, exactly as in reducing a plane to normal form.

### Why this works

Write the plane in vector normal form $\vec r\cdot\hat n=p$, where $\hat n$ is a unit normal and $p$ is the signed perpendicular distance from the origin. The projection of the position vector $\vec r_1$ of $P$ onto $\hat n$ is $\vec r_1\cdot\hat n$. The distance between the point and the plane is the difference between these two projections:

$$
d=|\vec r_1\cdot\hat n-p|.
$$

Substituting $\hat n=\frac{A\hat i+B\hat j+C\hat k}{\sqrt{A^2+B^2+C^2}}$ and $p=\frac{-D}{\sqrt{A^2+B^2+C^2}}$ (after choosing the sign consistently) gives the Cartesian formula.

## 2. Distance between parallel planes

Two parallel planes have the same normal direction. Write them as

$$
Ax+By+Cz+D_1=0,\qquad Ax+By+Cz+D_2=0.
$$

It is important that the coefficients of $x,y,z$ are identical before using the shortcut. Taking any point on the first plane and applying the point-to-plane formula gives

$$
d=\frac{|D_2-D_1|}{\sqrt{A^2+B^2+C^2}}.
$$

If one equation is a multiple, such as $2x+4y-2z+6=0$ and $x+2y-z+5=0$, first rewrite them with the same normal: $x+2y-z+3=0$ and $x+2y-z+5=0$.

## 3. Worked example

**Question.** Find the distance of the point $(3,-2,1)$ from the plane $2x-y+2z+3=0$. Then find the distance between this plane and $2x-y+2z-9=0$.

For the point distance,

$$
d=\frac{|2(3)-(-2)+2(1)+3|}{\sqrt{2^2+(-1)^2+2^2}}=\frac{|6+2+2+3|}{\sqrt{9}}=\frac{13}{3}.
$$

For the parallel planes, the $x,y,z$ coefficients already match. Therefore

$$
D=\frac{|-9-3|}{\sqrt{4+1+4}}=\frac{12}{3}=4.
$$

**Sanity check.** Both answers are positive. The point distance $13/3\approx 4.33$ is larger than the plane separation $4$, which is possible because the point is not on either of those two parallel planes in any special way; the values are independent. Also, $\sqrt{A^2+B^2+C^2}=3$, a clean integer, which makes the arithmetic easy to verify.

<learning-block type="mistake" title="Forgetting to match the normal coefficients">

The parallel-plane distance formula assumes the equations are $Ax+By+Cz+D_1=0$ and $Ax+By+Cz+D_2=0$ with the same $A,B,C$. If you use $2x+4y-2z+6=0$ and $x+2y-z+5=0$ directly, you compare $D$ values against different denominators and get a wrong answer. Scale one equation first.

</learning-block>

## 4. Foot of the perpendicular and image

Many problems go one step beyond the distance. The foot of the perpendicular from $P(x_1,y_1,z_1)$ to the plane $Ax+By+Cz+D=0$ lies along the normal through $P$. A convenient parametric point is

$$
Q(x_1+At,\;y_1+Bt,\;z_1+Ct).
$$

Substituting $Q$ into the plane gives $t$, and hence the foot. The image $P'$ of $P$ in the plane is twice as far along the same normal: if $Q$ is the midpoint of $PP'$, then

$$
P'=P+2t(A,B,C).
$$

This parameter method avoids memorising a separate long formula and keeps the geometry visible.

## 5. Worked example: image of a point

**Question.** Find the image of $(1,2,3)$ in the plane $x+2y+2z-18=0$.

Take $Q(1+t,2+2t,3+2t)$ on the normal through the point. Since $Q$ lies on the plane,

$$
(1+t)+2(2+2t)+2(3+2t)-18=0.
$$

Simplify:

$$
1+t+4+4t+6+4t-18=0 \implies 9t-7=0 \implies t=\frac{7}{9}.
$$

The image uses $2t=14/9$:

$$
P'=\left(1+\frac{14}{9},\;2+\frac{28}{9},\;3+\frac{28}{9}\right)=\left(\frac{23}{9},\;\frac{46}{9},\;\frac{55}{9}\right).
$$

**Sanity check.** The midpoint of $(1,2,3)$ and $P'$ is $(16/9,32/9,41/9)$. Substituting into the plane: $16/9+64/9+82/9-18=(162/9)-18=0$. The midpoint lies on the plane, so the reflection is consistent.

## Try it yourself

1. Find the distance of the origin from the plane $3x-4y+12z+26=0$.

<details><summary>Show the reasoning</summary>

$$
d=\frac{|0+0+0+26|}{\sqrt{3^2+(-4)^2+12^2}}=\frac{26}{\sqrt{169}}=\frac{26}{13}=2.
$$

</details>

2. Find the distance between the planes $x-2y+2z=3$ and $2x-4y+4z=18$.

<details><summary>Show the reasoning</summary>

Rewrite the second plane as $x-2y+2z=9$. Now the normals match: $A=1,B=-2,C=2$, $D_1=-3$, $D_2=-9$. Therefore

$$
d=\frac{|-9-(-3)|}{\sqrt{1+4+4}}=\frac{6}{3}=2.
$$

</details>

3. Show that the point $(1,1,1)$ lies on the plane $2x-y+z-2=0$.

<details><summary>Show the reasoning</summary>

Substitute: $2(1)-1+1-2=0$. The numerator is zero, so the perpendicular distance is $0$ and the point lies on the plane.

</details>

## Remember

- Distance from $(x_1,y_1,z_1)$ to $Ax+By+Cz+D=0$ is $|Ax_1+By_1+Cz_1+D|/\sqrt{A^2+B^2+C^2}$.
- For parallel planes, match the $A,B,C$ coefficients before using $|D_2-D_1|/\sqrt{A^2+B^2+C^2}$.
- The sign inside the absolute value tells you on which side of the plane the point lies, but distance itself is non-negative.
- Foot and image problems are easiest by parametrising the normal through the point.

The final concept module brings lines and planes together: coplanarity tests and mixed problems that combine the tools from this chapter.
