## A grid turns geometry into arithmetic

A road map, a seating plan and the graph of a journey all do the same thing: they pin a location to an ordered pair of numbers. Once every point is a pair $(x,y)$, questions about *how far apart*, *which way*, and *in line with* stop being drawings and become calculations. This lesson builds the three tools that make that possible — the distance between two points, the point that divides a segment in a given ratio, and the slope that measures a line's tilt.

We work in the Cartesian plane: two perpendicular axes meeting at the origin $O(0,0)$. The first coordinate $x$ is measured horizontally (positive to the right), the second $y$ vertically (positive upwards). To reach $P(x,y)$ from the origin, move $x$ units horizontally, then $y$ units parallel to the vertical axis.

## 1. Distance between two points

Take $P(x_1,y_1)$ and $Q(x_2,y_2)$. Drawing the horizontal through $P$ and the vertical through $Q$ makes a right-angled triangle whose legs have lengths $|x_2-x_1|$ and $|y_2-y_1|$ and whose hypotenuse is $PQ$. Pythagoras' theorem gives

$$
PQ=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}.
$$

The differences are squared, so the order of the points is irrelevant and the result is never negative. If $y_1=y_2$ the formula reduces to the horizontal distance $|x_2-x_1|$; if $x_1=x_2$ it gives the vertical distance $|y_2-y_1|$. Three points $A,B,C$ are collinear exactly when $AB+BC=AC$ with $B$ between the other two — a useful alternative to comparing slopes.

## 2. Dividing a segment

Suppose $P(x,y)$ divides the segment from $A(x_1,y_1)$ to $B(x_2,y_2)$ internally in the ratio $m:n$, meaning $AP:PB=m:n$. Similar triangles on the two coordinate differences give

$$
\boxed{\;P=\left(\frac{mx_2+nx_1}{m+n},\ \frac{my_2+ny_1}{m+n}\right)\;}.
$$

Notice the "crossed" pattern: the weight $m$ multiplies the coordinates of the *far* endpoint $B$, and $n$ multiplies those of $A$. For **external** division in the ratio $m:n$ the same pattern carries a minus sign,

$$
P=\left(\frac{mx_2-nx_1}{m-n},\ \frac{my_2-ny_1}{m-n}\right),\qquad m\ne n.
$$

Two special cases are worth storing. The midpoint ($m=n$) is $\left(\frac{x_1+x_2}{2},\frac{y_1+y_2}{2}\right)$, and the centroid of a triangle with vertices $(x_1,y_1),(x_2,y_2),(x_3,y_3)$ is $\left(\frac{x_1+x_2+x_3}{3},\frac{y_1+y_2+y_3}{3}\right)$ — the centroid divides each median in the ratio $2:1$.

## 3. Slope

For a line that is not vertical, let $\theta$ be its **angle of inclination**: the angle measured anticlockwise from the positive $x$-axis to the line, with $0^\circ\le\theta<180^\circ$. The **slope** is

$$
m=\tan\theta=\frac{y_2-y_1}{x_2-x_1}\qquad (x_2\ne x_1),
$$

using any two distinct points on the line. A rising line has $m>0$, a falling line has $m<0$, and a horizontal line has $m=0$. A vertical line has $\theta=90^\circ$ and **undefined slope**: $\tan 90^\circ$ does not exist, and the formula would divide by zero. This is the one direction a slope number cannot describe.

Because $\tan\theta=\tan(\theta+180^\circ)$, the same slope covers directions that differ by a half turn; the inclination convention $0^\circ\le\theta<180^\circ$ selects one of them.

## 4. Parallel, perpendicular, collinear

- Two non-vertical lines are **parallel** iff $m_1=m_2$. Vertical lines are parallel to one another.
- Two lines are **perpendicular** iff $m_1m_2=-1$; the slope of a perpendicular is the negative reciprocal $-1/m$. This fails for a horizontal/vertical pair, which is perpendicular even though one slope is undefined.
- Three points $A,B,C$ are collinear iff the slope of $AB$ equals the slope of $BC$.

## 5. A fully worked example

Let $A(1,2)$ and $B(4,6)$.

**(i) Distance.** $AB=\sqrt{(4-1)^2+(6-2)^2}=\sqrt{9+16}=\sqrt{25}=5$.

**(ii) Slope.** $m=\dfrac{6-2}{4-1}=\dfrac43$.

**(iii) Internal division.** The point dividing $AB$ in the ratio $2:1$ is

$$
P=\left(\frac{2(4)+1(1)}{3},\ \frac{2(6)+1(2)}{3}\right)=\left(3,\frac{14}{3}\right).
$$

**(iv) Perpendicular slope.** A line perpendicular to $AB$ has slope $-\dfrac34$.

**Sanity check.** The horizontal and vertical steps from $A$ to $B$ are $3$ and $4$, a $3$–$4$–$5$ triangle, so the distance $5$ and slope $4/3$ agree. For $P$, the vector $\vec{AP}=(2,\tfrac83)$ and $\vec{PB}=(1,\tfrac43)$; since $\vec{AP}=2\vec{PB}$, the ratio really is $2:1$. Finally $\frac43\times\left(-\frac34\right)=-1$, confirming perpendicularity.

<learning-block type="mistake" title="Mixing up the two coordinate differences">

The most common error is writing the slope upside down as $\dfrac{x_2-x_1}{y_2-y_1}$, or subtracting the coordinates of the two points in opposite orders in numerator and denominator. Whatever order you choose, use it in **both**: $\frac{y_2-y_1}{x_2-x_1}=\frac{y_1-y_2}{x_1-x_2}$, but $\frac{y_2-y_1}{x_1-x_2}$ is the negative of the slope. A second trap is assigning slope $0$ to a vertical line; vertical means *undefined*, horizontal means $0$. Check a line's direction on a quick sketch before trusting the sign.

</learning-block>

## Try it yourself

**A.** Find the distance between $(2,-1)$ and $(5,3)$, and the slope of the line joining them.

<details><summary>Show the reasoning</summary>

$d=\sqrt{(5-2)^2+(3+1)^2}=\sqrt{9+16}=5$ and $m=\dfrac{3-(-1)}{5-2}=\dfrac43$. The $3$–$4$–$5$ steps confirm both answers.

</details>

**B.** What is the slope of the line through $(1,1)$ and $(1,5)$?

<details><summary>Show the reasoning</summary>

Both points have $x=1$, so the line is vertical and its slope is undefined. The distance formula would require division by $x_2-x_1=0$; there is no slope number, though the inclination is $90^\circ$.

</details>

**C.** Are $(1,1)$, $(2,3)$ and $(3,5)$ collinear?

<details><summary>Show the reasoning</summary>

Slope of first pair $=\dfrac{3-1}{2-1}=2$; slope of second pair $=\dfrac{5-3}{3-2}=2$. The slopes match, so the three points lie on one line, namely $y=2x-1$.

</details>

## Remember

- Distance: $d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$; it is symmetric and non-negative.
- Internal division: weights cross over, $P=\left(\frac{mx_2+nx_1}{m+n},\frac{my_2+ny_1}{m+n}\right)$; external division changes the $+$ to $-$.
- Slope $m=\tan\theta=\frac{y_2-y_1}{x_2-x_1}$; horizontal gives $0$, vertical is undefined.
- Parallel means equal slopes; perpendicular means $m_1m_2=-1$ (with the horizontal/vertical exception).
- Next, turn a slope and a point into an equation for the whole line.
