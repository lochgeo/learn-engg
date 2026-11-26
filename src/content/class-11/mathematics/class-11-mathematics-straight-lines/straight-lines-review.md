## Your study plan for today

Straight lines is a small set of tools that keep reappearing inside other chapters. A focused first pass takes about **2 hours**, plus this 25-minute check:

| Stage | Time |
| --- | --- |
| Coordinates, distance and slope | 20 min |
| Equations of a line | 20 min |
| Distance and angle between lines | 20 min |
| Family of lines | 15 min |
| Locus and shifting | 20 min |
| Applications: feet, images, area, concurrency | 20 min |
| This mastery check | 25 min |

Work each stage with the answers hidden, then check. Mark a stage complete only when you can say *why* the chosen formula applies — not merely that you recognised the numbers. After the third stage take a short break. Once you can solve these questions one at a time, use the **JEE Main timed practice** module for a $50$-minute paper; its value lies in choosing the tool quickly.

## Choose the tool first

| Clue in the question | Start with |
| --- | --- |
| "distance between two points", "midpoint", "ratio $m:n$" | Distance formula or section formula (weights cross over). |
| "slope", "inclination", "parallel", "perpendicular" | $m=\tan\theta=\frac{y_2-y_1}{x_2-x_1}$; equal slopes / $m_1m_2=-1$. |
| Given a point and a slope, or two points | $y-y_1=m(x-x_1)$ or the two-point form. |
| Intercepts on the axes, or "normal form" | $\frac xa+\frac yb=1$ or $x\cos\alpha+y\sin\alpha=p$. |
| "distance of a point from a line", "between parallel lines" | $\frac{|Ax_1+By_1+C|}{\sqrt{A^2+B^2}}$ or $\frac{|C_1-C_2|}{\sqrt{A^2+B^2}}$. |
| "angle between two lines" | $\tan\theta=\left|\frac{m_1-m_2}{1+m_1m_2}\right|$. |
| "through the intersection of two lines" | The family $L_1+\lambda L_2=0$; fix $\lambda$ with the extra condition. |
| "locus", "path of a moving point" | Let the point be $(x,y)$, write the condition, simplify, verify. |
| "shift the origin", "remove first-degree terms" | $x=X+\alpha$, $y=Y+\beta$; solve $a\alpha+h\beta+g=0$, $h\alpha+b\beta+f=0$. |
| "foot of perpendicular", "image in a line" | Subtract $\frac{D}{A^2+B^2}(A,B)$ once for the foot, twice for the image. |
| "area of a triangle", "are three lines concurrent?" | Area determinant; solve two lines and substitute into the third. |

## Mastery check

Try every question before revealing the answer. The set gets harder as it goes.

### 1. Distance and slope together

Find the distance between $(1,2)$ and $(4,6)$ and the slope of the line joining them.

<details><summary>Answer and reasoning</summary>

$d=\sqrt{3^2+4^2}=5$ and $m=\frac{6-2}{4-1}=\frac43$. The horizontal and vertical steps form a $3$–$4$–$5$ triangle.

</details>

### 2. A line from a point and slope

Find the equation of the line through $(2,-1)$ with slope $-3$.

<details><summary>Answer and reasoning</summary>

$y+1=-3(x-2)$, so $y=-3x+5$, i.e. $3x+y-5=0$. Check: $3(2)+(-1)-5=0$. ✓

</details>

### 3. Reading intercepts

Find the $x$- and $y$-intercepts of $4x-3y=12$.

<details><summary>Answer and reasoning</summary>

Divide by $12$: $\frac{x}{3}+\frac{y}{-4}=1$, so the $x$-intercept is $3$ and the $y$-intercept is $-4$. Direct substitution confirms both: $y=0\Rightarrow x=3$ and $x=0\Rightarrow y=-4$.

</details>

### 4. Perpendicular distance

Find the distance from $(3,1)$ to $5x-12y+4=0$.

<details><summary>Answer and reasoning</summary>

$\frac{|5(3)-12(1)+4|}{\sqrt{25+144}}=\frac{|15-12+4|}{13}=\frac{7}{13}$. The denominator is $13$, not $5+12$, because it is $\sqrt{A^2+B^2}$.

</details>

### 5. An angle that is a right angle

Find the angle between $2x-y+1=0$ and $x+2y-3=0$.

<details><summary>Answer and reasoning</summary>

Their slopes are $2$ and $-\tfrac12$, whose product is $-1$, so the lines are perpendicular and the angle is $90^\circ$. Equivalently $A_1A_2+B_1B_2=(2)(1)+(-1)(2)=0$.

</details>

### 6. A family with a parallel condition

Find the line through the intersection of $x+2y-7=0$ and $2x-y-4=0$ that is parallel to $3x+4y=0$.

<details><summary>Answer and reasoning</summary>

From the second equation $y=2x-4$; substituting gives $x+2(2x-4)-7=0$, so $x=3$, $y=2$. The target slope is $-\tfrac34$, so $y-2=-\tfrac34(x-3)$, i.e. $3x+4y-17=0$. Check at $(3,2)$: $9+8-17=0$. ✓ The same result comes from $(x+2y-7)+\lambda(2x-y-4)=0$ with $\lambda=\tfrac{2}{11}$: the coefficients become $\tfrac{15}{11}x+\tfrac{20}{11}y-\tfrac{85}{11}=0$, i.e. $3x+4y-17=0$.

</details>

### 7. A locus from equal distances

A point is equally distant from the point $(0,3)$ and the line $y=-3$. Find its locus.

<details><summary>Answer and reasoning</summary>

With $P(x,y)$: $\sqrt{x^2+(y-3)^2}=|y+3|$. Squaring gives $x^2+y^2-6y+9=y^2+6y+9$, hence $x^2=12y$, a parabola. Check the point $(0,0)$: distance to $(0,3)$ is $3$ and to $y=-3$ is $3$. ✓

</details>

### 8. Shifting the origin

Shift the origin to $(1,2)$ in $x^2+y^2-2x-4y+1=0$.

<details><summary>Answer and reasoning</summary>

Put $x=X+1$, $y=Y+2$: the expression becomes $X^2+2X+1+Y^2+4Y+4-2X-2-4Y-8+1=X^2+Y^2-4$. The new equation is $X^2+Y^2=4$. Check: the original is $(x-1)^2+(y-2)^2=4$, a circle of radius $2$ about the new origin. ✓

</details>

### 9. Foot and image

Find the foot of the perpendicular from $(3,4)$ to $x+y-1=0$, and the image of the point in that line.

<details><summary>Answer and reasoning</summary>

Here $D=3+4-1=6$ and $A^2+B^2=2$. Foot $=(3-\tfrac62,\;4-\tfrac62)=(0,1)$, which satisfies $0+1-1=0$. Image $=(3-6,\;4-6)=(-3,-2)$; its midpoint with $(3,4)$ is $(0,1)$, the foot. ✓

</details>

### 10. Concurrency

Show that $2x+y-5=0$, $x-y-1=0$ and $3x+2y-8=0$ meet at one point, and find it.

<details><summary>Answer and reasoning</summary>

The first two give $y=x-1$ and $2x+(x-1)-5=0$, so $x=2$ and $y=1$. Substituting into the third: $3(2)+2(1)-8=0$, so all three pass through $(2,1)$. The coefficient determinant is therefore zero, confirming concurrency.

</details>

## Self-check

You are ready for the timed set when you can:

- compute distance, midpoint and a point dividing a segment in a given ratio without looking up the formula;
- state the slope of a line from two points and handle horizontal and vertical exceptions;
- write a line in point-slope, slope-intercept, intercept, normal and general form, and convert between them;
- find the distance from a point to a line and between two parallel lines, including the matching-coefficient step;
- find the acute angle between two lines and recognise a perpendicular pair in either form;
- use $L_1+\lambda L_2=0$ and remember which line the family cannot produce;
- find a locus and verify that the resulting equation really describes all valid points;
- shift the origin correctly, using $x=X+\alpha$ rather than the reverse;
- find a foot, an image, a triangle's area and a point of concurrency;
- name the appropriate tool from a question clue before doing any algebra.

If one item still feels shaky, revisit that lesson and redo its questions with the answers hidden.
