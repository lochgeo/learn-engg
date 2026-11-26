## JEE Main sprint: how to use this set

This is a **50-minute, no-notes** paper to attempt after the chapter lessons. Spend roughly 15 minutes on Section A, 15 on Section B, 10 on Section C and 10 on Section D. Mark anything that passes 90 seconds and return to it; one calculation should not consume the paper.

Before writing, name the tool: a circle's power, a parabola's focal distance, an ellipse's $a\pm ex$, a hyperbola's asymptotes, the invariant $AB-H^2$, a point tangent, or a slope tangent. This is a pure mathematics paper, so no physical constant is needed.

## Conditions and formula sheet

| Clue | Start with | Check before trusting it |
| --- | --- | --- |
| $x^2+y^2+2gx+2fy+c=0$ | centre $(-g,-f)$, $r=\sqrt{g^2+f^2-c}$ | Require $g^2+f^2-c>0$ for a real circle. |
| Tangent length from $P$ | $\sqrt{CP^2-r^2}=\sqrt{S_1}$ | Use only when $P$ is outside. |
| $y^2=4ax$ | focus $(a,0)$, directrix $x=-a$, latus rectum $4a$ | $a$ is one quarter of the coefficient of $x$. |
| Point on a parabola | $(at^2,2at)$; focal distance $x+a$ | Focal chord: $t_1t_2=-1$. |
| $\frac{x^2}{a^2}+\frac{y^2}{b^2}=1$ | $c^2=a^2-b^2$, $e=c/a$, distances $a\pm ex$ | Sum of focal distances is $2a$. |
| $\frac{x^2}{a^2}-\frac{y^2}{b^2}=1$ | $c^2=a^2+b^2$, asymptotes $y=\pm\frac ba x$ | Difference of focal distances is $2a$. |
| General second-degree equation | compare $AB-H^2$ with $0$ | Rule out degenerate cases first. |
| Tangent at $(x_1,y_1)$ | $x^2\to xx_1$, $y^2\to yy_1$, $2x\to x+x_1$ | Verify the point lies on the curve. |
| Tangent of slope $m$ | $c=a/m$; $c^2=a^2m^2\pm b^2$ | Parabola needs $m\ne0$; hyperbola needs $a^2m^2>b^2$. |

<learning-block type="mistake" title="Three instant sanity checks">

A negative radius-squared means no real circle. An ellipse answer with $c>a$ has borrowed the hyperbola relation. A "tangent" that meets a curve in two distinct points is just a secant — check the discriminant, not the diameter.

</learning-block>

## Section A — 10 rapid MCQs

### 1. Radius of a circle

The radius of $x^2+y^2-2x+4y-4=0$ is:

- A. $2$
- B. $3$
- C. $4$
- D. $9$

<details><summary>Answer</summary>

**B.** $g=-1$, $f=2$, $c=-4$, so $r=\sqrt{1+4+4}=3$. Completing squares, $(x-1)^2+(y+2)^2=9$.

</details>

### 2. Focus of a parabola

The focus of $y^2=24x$ is:

- A. $(3,0)$
- B. $(6,0)$
- C. $(12,0)$
- D. $(-6,0)$

<details><summary>Answer</summary>

**B.** $4a=24$ gives $a=6$, so the focus is $(6,0)$ and the directrix is $x=-6$. Choice A forgets to divide the coefficient by $4$.

</details>

### 3. Eccentricity of an ellipse

The eccentricity of $\frac{x^2}{25}+\frac{y^2}{16}=1$ is:

- A. $\frac35$
- B. $\frac45$
- C. $\frac53$
- D. $\frac9{25}$

<details><summary>Answer</summary>

**A.** $a=5$, $b=4$, so $c=\sqrt{25-16}=3$ and $e=c/a=3/5$, correctly less than $1$.

</details>

### 4. Latus rectum of a hyperbola

The latus rectum of $\frac{x^2}{16}-\frac{y^2}{9}=1$ is:

- A. $\frac94$
- B. $\frac92$
- C. $18$
- D. $8$

<details><summary>Answer</summary>

**B.** $a=4$, $b=3$, so the length is $2b^2/a=18/4=9/2$. At $x=c=5$, $y^2=9(25/16-1)=81/16$, giving $y=\pm9/4$ and a full chord of $9/2$.

</details>

### 5. Reading the invariant

For a non-degenerate conic, $AB-H^2=0$ in the general second-degree equation indicates:

- A. a circle
- B. an ellipse
- C. a parabola
- D. a hyperbola

<details><summary>Answer</summary>

**C.** Zero means the quadratic part is a perfect square, the signature of a parabola. Positive gives an ellipse (a circle when $A=B$, $H=0$) and negative gives a hyperbola.

</details>

### 6. Directrix of a parabola

The directrix of $x^2=-8y$ is:

- A. $y=2$
- B. $y=-2$
- C. $x=2$
- D. $x=-2$

<details><summary>Answer</summary>

**A.** Here $4a=8$, so $a=2$. The parabola opens downwards, focus $(0,-2)$, and the directrix is the line behind the vertex, $y=2$.

</details>

### 7. Tangent length

The length of a tangent from $(3,4)$ to $x^2+y^2=9$ is:

- A. $3$
- B. $4$
- C. $5$
- D. $\sqrt7$

<details><summary>Answer</summary>

**B.** $PT^2=CP^2-r^2=25-9=16$, so $PT=4$. The point is outside because $25>9$.

</details>

### 8. Focal distances of an ellipse

For any point of $\frac{x^2}{9}+\frac{y^2}{4}=1$, the sum of its distances from the two foci is:

- A. $3$
- B. $6$
- C. $4$
- D. $\sqrt5$

<details><summary>Answer</summary>

**B.** The constant sum is $2a$, and $a=3$, so it is $6$. This equals $(a-ex)+(a+ex)$.

</details>

### 9. An asymptote

One asymptote of $\frac{x^2}{9}-\frac{y^2}{4}=1$ is:

- A. $y=\frac32x$
- B. $y=\frac23x$
- C. $y=\frac49x$
- D. $y=\frac94x$

<details><summary>Answer</summary>

**B.** Dropping the $1$ gives $\frac{x^2}{9}-\frac{y^2}{4}=0$, so $y=\pm\frac23x$; the positive branch is choice B. Since $a=3$ and $b=2$, the slope ratio $b/a=2/3$ matches exactly, while choice A is its reciprocal.

</details>

### 10. Passing through the origin

For $x^2+y^2+2gx+2fy+c=0$ to pass through $(0,0)$, we need:

- A. $c=0$
- B. $g=0$
- C. $f=0$
- D. $g^2+f^2=0$

<details><summary>Answer</summary>

**A.** Substituting $(0,0)$ leaves $c=0$. The centre $(-g,-f)$ is unrestricted.

</details>

## Section B — 5 numerical-value questions

### 11. A circle through three points

Find the radius of the circle passing through $(0,0)$, $(4,0)$ and $(0,3)$.

<details><summary>Answer</summary>

Use $x^2+y^2+2gx+2fy+c=0$. The origin gives $c=0$; $(4,0)$ gives $16+8g=0$, so $g=-2$; $(0,3)$ gives $9+6f=0$, so $f=-3/2$. Hence $r=\sqrt{4+9/4}=\sqrt{25/4}=5/2$. Check: the three points form a $3$–$4$–$5$ right triangle, whose circumradius is half the hypotenuse, $5/2$.

</details>

### 12. A focal chord

For $y^2=16x$, one end of a focal chord has parameter $t=2$. Find the length of the chord.

<details><summary>Answer</summary>

$a=4$. The first end is $(16,16)$ with focal distance $x+a=20$. Since $t_1t_2=-1$, the other parameter is $-1/2$, giving $(1,-4)$ with focal distance $5$. The focus lies between the ends, so the length is $20+5=25$. Directly, $\sqrt{15^2+20^2}=25$.

</details>

### 13. Eccentricity from data

An ellipse has foci $(\pm3,0)$ and minor axis $8$. Find its eccentricity.

<details><summary>Answer</summary>

$c=3$ and $b=4$. Since $a^2=b^2+c^2=16+9=25$, we get $a=5$ and $e=c/a=3/5$.

</details>

### 14. Latus rectum again

Find the length of the latus rectum of $\frac{x^2}{9}-\frac{y^2}{16}=1$.

<details><summary>Answer</summary>

$a=3$, $b=4$, so $2b^2/a=32/3$. Check at $x=c=5$: $y^2=16(25/9-1)=256/9$, so the semi-chord is $16/3$ and the full length $32/3$.

</details>

### 15. Intercept of a tangent

Find the positive value of $c$ for which $y=2x+c$ is tangent to $y^2=16x$, and give the point of contact.

<details><summary>Answer</summary>

$a=4$ and $m=2$, so $c=a/m=2$. Substituting: $(2x+2)^2=16x$ gives $4x^2-8x+4=0$, i.e. $(2x-2)^2=0$, so $x=1$ and $y=4$. Check: $4^2=16\cdot1$.

</details>

## Section C — 3 assertion–reason questions

For each: **A** = both true and the reason explains the assertion; **B** = both true but the reason does not explain it; **C** = assertion true, reason false; **D** = assertion false, reason true.

### 16. A point circle

**Assertion:** $x^2+y^2+2x+2y+2=0$ represents a single point.

**Reason:** For $x^2+y^2+2gx+2fy+c=0$, the radius is $\sqrt{g^2+f^2-c}$, and here $g^2+f^2-c=0$.

<details><summary>Answer</summary>

**A.** $g=f=1$ and $c=2$, so $g^2+f^2-c=1+1-2=0$. The equation is $(x+1)^2+(y+1)^2=0$, satisfied only by $(-1,-1)$. The reason gives exactly the criterion that makes the assertion true.

</details>

### 17. Tangent or secant?

**Assertion:** The line $y=x$ is tangent to $y^2=4x$ at the origin.

**Reason:** Substituting $y=x$ gives $x^2=4x$, which has the two solutions $x=0$ and $x=4$.

<details><summary>Answer</summary>

**D.** The reason is true: the intersections are $(0,0)$ and $(4,4)$, so the line is a secant and the assertion is false. The actual tangent at the vertex is $x=0$, obtained from $yy_1=2a(x+x_1)$ with $(x_1,y_1)=(0,0)$.

</details>

### 18. Two different focal relations

**Assertion:** For the hyperbola $\frac{x^2}{a^2}-\frac{y^2}{b^2}=1$, $c^2=a^2+b^2$.

**Reason:** For the ellipse $\frac{x^2}{a^2}+\frac{y^2}{b^2}=1$ with $a>b$, $c^2=a^2-b^2$.

<details><summary>Answer</summary>

**B.** Both statements are true. The reason does not explain the assertion: it describes a different curve. In an ellipse the foci lie inside the vertices, so $c<a$; in a hyperbola they lie outside, so $c>a$. The sign in the equation, not the ellipse formula, decides the relation.

</details>

## Section D — 2 matching / multi-statement questions

### 19. Match the eccentricity

Match each conic in Column I with its eccentricity in Column II.

| Column I — conic | Column II — eccentricity |
| --- | --- |
| (i) $x^2+y^2=9$ | (P) $0$ |
| (ii) $y^2=8x$ | (Q) $1$ |
| (iii) $\frac{x^2}{25}+\frac{y^2}{9}=1$ | (R) $\frac45$ |
| (iv) $\frac{x^2}{9}-\frac{y^2}{16}=1$ | (S) $\frac53$ |

<details><summary>Answer</summary>

- (i) A circle has eccentricity $0$, so **(i) → P**.
- (ii) A parabola has eccentricity $1$, so **(ii) → Q**.
- (iii) $a=5$, $c=\sqrt{25-9}=4$, so $e=4/5$: **(iii) → R**.
- (iv) $a=3$, $c=\sqrt{9+16}=5$, so $e=5/3$: **(iv) → S**.

The two nontrivial values straddle $1$, as ellipse and hyperbola eccentricities must.

</details>

### 20. Which statements are correct?

For the ellipse $\frac{x^2}{25}+\frac{y^2}{9}=1$, consider:

- (P) Its foci are $(\pm4,0)$.
- (Q) Its directrices are $x=\pm\frac{25}{4}$.
- (R) Its latus rectum has length $\frac95$.

Which statements are true?

<details><summary>Answer</summary>

Only **P and Q**.

Here $a=5$, $b=3$, $c=4$ and $e=4/5$.

- Foci $(\pm c,0)=(\pm4,0)$, so **P is true**.
- Directrices $x=\pm a/e=\pm5\cdot\frac54=\pm\frac{25}{4}$, so **Q is true**.
- Latus rectum $2b^2/a=2\cdot9/5=\frac{18}{5}$, not $\frac95$, so **R is false**. The value $\frac95$ is the semi-latus rectum $b^2/a$ — a common halving error.

</details>

## Review by error, not by score

| If you missed… | Revisit | Then retry |
| --- | --- | --- |
| 1, 7, 10 or 11 | Circles | Write $g,f,c$ explicitly and complete a square as a check. |
| 2, 6 or 12 | Parabolas | Divide the coefficient of the squared variable by $4$ to get $a$; use $t_1t_2=-1$. |
| 3, 8, 13 or 20 | Ellipses | Use $c^2=a^2-b^2$ and focal distances $a\pm ex$; check that $e<1$. |
| 4, 9, 14 or 18 | Hyperbolas | Use $c^2=a^2+b^2$; derive asymptotes by dropping the $1$. |
| 5 or 16 | Identifying conics | Compare $AB-H^2$ with zero and test for degeneracy before naming the curve. |
| 15 or 17 | Mixed conic problems | Set a discriminant to zero and confirm a single intersection point. |
| 19 | Everything | Eccentricity classifies the family: $0$, below $1$, equal to $1$, above $1$. |

<learning-block type="recap" title="Ready to move on?">

Aim for at least 17 correct out of 20 with a written tool choice for every question. Anything you solve correctly but cannot justify is a revision target, not a mastered topic. The next chapter, Introduction to Three Dimensional Geometry, extends the same coordinate habits into space.

</learning-block>
