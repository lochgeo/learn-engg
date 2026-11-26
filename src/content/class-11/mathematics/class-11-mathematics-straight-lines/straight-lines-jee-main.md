## JEE Main sprint: how to use this set

This is a **50-minute, no-notes** paper to attempt after finishing the chapter lessons. Spend roughly 15 minutes on Section A, 15 on Section B, 10 on Section C and 10 on Section D. Mark any question that passes 90 seconds and return to it; one stubborn calculation should not eat the paper.

Before writing, name the tool: distance or slope, an equation form, point-to-line distance, an angle formula, a family of lines, a locus, a shift, or a foot/image. This is a pure mathematics paper, so no physical constant is needed.

## Conditions and formula sheet

| Clue | Start with | Check before trusting it |
| --- | --- | --- |
| Two points given | $d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$, $\;m=\frac{y_2-y_1}{x_2-x_1}$ | Same subtraction order in both; vertical means undefined $m$. |
| Point and slope, or intercepts | $y-y_1=m(x-x_1)$, $\;\frac xa+\frac yb=1$ | Intercept form needs $a,b\ne0$. |
| Normal form | $x\cos\alpha+y\sin\alpha=p$, $\;p=\frac{|C|}{\sqrt{A^2+B^2}}$ | Take the positive sign for $p$. |
| Point-to-line distance | $\frac{|Ax_1+By_1+C|}{\sqrt{A^2+B^2}}$ | Absolute value; denominator is a square root. |
| Parallel lines | $\frac{|C_1-C_2|}{\sqrt{A^2+B^2}}$ | Match $A$ and $B$ coefficients first. |
| Angle between lines | $\tan\theta=\left|\frac{m_1-m_2}{1+m_1m_2}\right|$ | Zero denominator means $90^\circ$. |
| Through an intersection | $L_1+\lambda L_2=0$ | It misses $L_2$ itself. |
| Shift of origin | $X=x-\alpha$, $\;Y=y-\beta$ | Hence $x=X+\alpha$, $y=Y+\beta$. |
| Foot / image in $Ax+By+C=0$ | Subtract $\frac{D}{A^2+B^2}(A,B)$ once / twice | Foot is the midpoint of a point and its image. |

<learning-block type="mistake" title="Three instant sanity checks">

A negative distance means you dropped the absolute value. A "slope" from a vertical pair of points means you divided by zero. An image that is not symmetric about the mirror line means you used the foot formula with the wrong factor. Catch these before moving on.

</learning-block>

## Section A — 10 rapid MCQs

### 1. Slope from two points

The slope of the line through $(1,2)$ and $(4,6)$ is:

- A. $\frac34$
- B. $\frac43$
- C. $-\frac43$
- D. $\frac35$

<details><summary>Answer</summary>

**B.** $m=\dfrac{6-2}{4-1}=\dfrac43$. The horizontal step is $3$ and the vertical step is $4$, so the slope is $4/3$, not its reciprocal.

</details>

### 2. Distance from a point to a line

The distance from $(2,3)$ to $4x+3y-10=0$ is:

- A. $\frac75$
- B. $\frac57$
- C. $1$
- D. $7$

<details><summary>Answer</summary>

**A.** $\dfrac{|4(2)+3(3)-10|}{\sqrt{4^2+3^2}}=\dfrac{|8+9-10|}{5}=\dfrac75$. The numerator is $7$, the denominator is $5$, so the ratio cannot be inverted.

</details>

### 3. Angle between two lines

The angle between $y=2x$ and $y=-\frac12x$ is:

- A. $30^\circ$
- B. $45^\circ$
- C. $60^\circ$
- D. $90^\circ$

<details><summary>Answer</summary>

**D.** The slopes are $2$ and $-\tfrac12$ and their product is $-1$, so the lines are perpendicular. Equivalently the denominator $1+m_1m_2=0$.

</details>

### 4. Inclination

The inclination of the line joining $(0,0)$ to $(2,2)$ is:

- A. $30^\circ$
- B. $45^\circ$
- C. $60^\circ$
- D. $135^\circ$

<details><summary>Answer</summary>

**B.** The slope is $\frac{2-0}{2-0}=1$, so $\tan\theta=1$ and, with $0^\circ\le\theta<180^\circ$, $\theta=45^\circ$.

</details>

### 5. An intercept

The $x$-intercept of $3x+4y=12$ is:

- A. $3$
- B. $4$
- C. $12$
- D. $-4$

<details><summary>Answer</summary>

**B.** Put $y=0$: $3x=12$, so $x=4$. In intercept form $\frac{x}{4}+\frac{y}{3}=1$; $3$ is the $y$-intercept, a common distractor.

</details>

### 6. Parallel lines

The distance between $3x+4y+5=0$ and $3x+4y-15=0$ is:

- A. $2$
- B. $4$
- C. $5$
- D. $10$

<details><summary>Answer</summary>

**B.** $\dfrac{|5-(-15)|}{\sqrt{3^2+4^2}}=\dfrac{20}{5}=4$. The coefficients of $x$ and $y$ already match, so no rescaling is needed.

</details>

### 7. Normal form

For $5x-12y+13=0$, the perpendicular distance from the origin is:

- A. $1$
- B. $5$
- C. $12$
- D. $13$

<details><summary>Answer</summary>

**A.** $\sqrt{A^2+B^2}=\sqrt{25+144}=13$, so $p=\dfrac{|13|}{13}=1$. Dividing by $13$ gives $\frac5{13}x-\frac{12}{13}y=-1$; choosing the sign that makes the right-hand side positive gives the normal form $-\frac5{13}x+\frac{12}{13}y=1$, so $\cos\alpha=-\frac5{13}$ and $\sin\alpha=\frac{12}{13}$.

</details>

### 8. Internal division

The point dividing $(1,1)$ and $(5,5)$ internally in the ratio $1:3$ is:

- A. $(2,2)$
- B. $(3,3)$
- C. $(2,3)$
- D. $(4,4)$

<details><summary>Answer</summary>

**A.** $\left(\frac{1(5)+3(1)}{4},\frac{1(5)+3(1)}{4}\right)=(2,2)$. The vector from $(1,1)$ to $(2,2)$ is $(1,1)$ and from $(2,2)$ to $(5,5)$ is $(3,3)$, so the ratio is indeed $1:3$.

</details>

### 9. A point on a line

The line through $(1,1)$ with slope $2$ also passes through:

- A. $(2,3)$
- B. $(2,5)$
- C. $(3,7)$
- D. $(0,1)$

<details><summary>Answer</summary>

**A.** $y-1=2(x-1)$, so $y=2x-1$. At $x=2$, $y=3$; at $x=3$ the line gives $5$, not $7$, and at $x=0$ it gives $-1$.

</details>

### 10. Foot from the origin

The foot of the perpendicular from the origin to $x+y-2=0$ is:

- A. $(1,1)$
- B. $(2,2)$
- C. $(1,-1)$
- D. $(-1,-1)$

<details><summary>Answer</summary>

**A.** Here $D=-2$ and $A^2+B^2=2$, so the foot is $\left(0-\frac{1(-2)}{2},\,0-\frac{1(-2)}{2}\right)=(1,1)$, which lies on the line since $1+1-2=0$.

</details>

## Section B — 5 numerical-value questions

Give an exact value or a decimal correct to two places.

### 11. Distance between two points

Find the distance between $(1,2)$ and $(4,6)$.

<details><summary>Answer</summary>

$d=\sqrt{(4-1)^2+(6-2)^2}=\sqrt{9+16}=\sqrt{25}=5$.

</details>

### 12. An $x$-intercept

A line passes through $(2,3)$ and $(4,7)$. Find its $x$-intercept.

<details><summary>Answer</summary>

The slope is $\dfrac{7-3}{4-2}=2$, so $y-3=2(x-2)$, i.e. $y=2x-1$. Setting $y=0$ gives $x=\tfrac12=0.5$. Check: at $x=2$, $y=4-1=3$. ✓

</details>

### 13. Perpendicular distance

Find the distance from $(1,-2)$ to $3x-4y+5=0$.

<details><summary>Answer</summary>

$\dfrac{|3(1)-4(-2)+5|}{\sqrt{9+16}}=\dfrac{|3+8+5|}{5}=\dfrac{16}{5}=3.2$.

</details>

### 14. A missing constant

The line $2x+3y+c=0$ passes through $(1,2)$. Find $|c|$.

<details><summary>Answer</summary>

Substituting: $2(1)+3(2)+c=0$, so $c=-8$ and $|c|=8$. The line is $2x+3y-8=0$.

</details>

### 15. Foot on a diagonal

Find the sum of the coordinates of the foot of the perpendicular from $(2,4)$ to the line $y=x$.

<details><summary>Answer</summary>

Reflection in $y=x$ swaps the coordinates, sending $(2,4)$ to $(4,2)$; the foot is the midpoint $(3,3)$. Its coordinate sum is $6$. Check: $(3,3)$ lies on $y=x$, and the segment from $(2,4)$ to $(3,3)$ has slope $-1$, perpendicular to $y=x$.

</details>

## Section C — 3 assertion–reason questions

For each: **A** = both true and the reason explains the assertion; **B** = both true but the reason does not explain it; **C** = assertion true, reason false; **D** = assertion false, reason true.

### 16. Parallel slopes

**Assertion:** $y=2x+3$ and $y=2x-1$ are parallel.
**Reason:** Two distinct lines with equal slopes are parallel.

<details><summary>Answer</summary>

**A.** Both slopes are $2$ and the intercepts $3$ and $-1$ differ, so the lines are distinct and parallel. The reason states exactly the criterion that makes the assertion true.

</details>

### 17. A point on the line

**Assertion:** The perpendicular distance from a point lying on a line to that line is zero.
**Reason:** The distance formula contains a modulus, so a distance can never be negative.

<details><summary>Answer</summary>

**B.** Both statements are true, but the reason only guarantees non-negativity. The assertion follows because a point on $Ax+By+C=0$ satisfies $Ax_1+By_1+C=0$, making the numerator zero — not because of the modulus.

</details>

### 18. The whole pencil

**Assertion:** $L_1+\lambda L_2=0$ represents every line through the intersection of $L_1$ and $L_2$, including $L_2$ itself.
**Reason:** Every member of the family passes through the intersection point.

<details><summary>Answer</summary>

**D.** The reason is true — the intersection satisfies both equations, hence their sum. The assertion is false: no finite $\lambda$ makes the family equal to $L_2$ itself, so one line of the pencil is omitted.

</details>

## Section D — 2 matching / multi-statement questions

### 19. Match the intercepts

Match each line in Column I with its $x$-intercept in Column II.

| Column I — line | Column II — $x$-intercept |
| --- | --- |
| (i) $2x+3y=6$ | (P) $2$ |
| (ii) $x-2y=4$ | (Q) $3$ |
| (iii) $5x+2y-10=0$ | (R) $4$ |

<details><summary>Answer</summary>

Set $y=0$ in each case.

- (i) $2x=6\Rightarrow x=3$, so **(i) → Q**.
- (ii) $x=4$, so **(ii) → R**.
- (iii) $5x=10\Rightarrow x=2$, so **(iii) → P**.

Check by substitution: $(3,0)$, $(4,0)$ and $(2,0)$ satisfy their respective equations.

</details>

### 20. Which statements are correct?

For $P(2,3)$ and the line $L:3x+4y-10=0$, consider:

- (P) The foot of the perpendicular from $P$ to $L$ is $\left(\frac{26}{25},\frac{43}{25}\right)$.
- (Q) The distance from $P$ to $L$ is $\frac85$.
- (R) The image of $P$ in $L$ is $\left(\frac4{25},\frac{22}{25}\right)$.

Which statements are true?

<details><summary>Answer</summary>

Only **P and Q**.

Let $D=3(2)+4(3)-10=8$ and $A^2+B^2=25$.

- Foot: $\left(2-\frac{3\cdot8}{25},\,3-\frac{4\cdot8}{25}\right)=\left(\frac{26}{25},\frac{43}{25}\right)$, so **P is true**. It lies on $L$ because $\frac{78}{25}+\frac{172}{25}-10=0$.
- Distance: $\frac{|D|}{\sqrt{A^2+B^2}}=\frac{8}{5}$, so **Q is true**. Directly, the distance from $(2,3)$ to the foot is $\sqrt{(24/25)^2+(32/25)^2}=\frac{40}{25}=\frac85$.
- Image: $\left(2-\frac{2\cdot3\cdot8}{25},\,3-\frac{2\cdot4\cdot8}{25}\right)=\left(\frac2{25},\frac{11}{25}\right)$, so **R is false** — the stated point has double the correct coordinates. Its midpoint with $P$ must be the foot $\left(\frac{26}{25},\frac{43}{25}\right)$, which the stated point fails.

</details>

## Review by error, not by score

| If you missed… | Revisit | Then retry |
| --- | --- | --- |
| 1, 4, 8 or 11 | Coordinates, distance and slope | Keep the subtraction order consistent and test division-of-segment answers on the two endpoints. |
| 2, 5, 7, 12–14 or 19 | Equations and distances | Write $A,B,C$ explicitly; use a square root in the denominator and an absolute value in the numerator. |
| 3, 6 or 9 | Angles and line forms | Check $m_1m_2=-1$ and substitute a known point back into your line. |
| 10, 15 or 20 | Applications | Foot subtracts the normal displacement once, image twice; verify with the midpoint. |
| 16–18 | Family of lines and reasoning | Remember which member the pencil omits, and distinguish "true" from "explains". |

<learning-block type="recap" title="Ready to move on?">

Aim for at least 18 correct out of 20 with a written tool choice for every question. Anything you solve correctly but cannot justify is a revision target, not a mastered topic. The next chapter, Conic Sections, reuses distance, locus and translation of axes almost immediately.

</learning-block>
