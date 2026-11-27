## JEE Main sprint: how to use this set

This is a **50-minute, no-notes** paper for after you finish the chapter. Spend roughly 15 minutes on Section A, 15 on Section B, 10 on Section C and 10 on Section D. Mark any question still open after 90 seconds and move on. This is a mathematics paper, so no physical constants are needed.

Before writing an integral, identify the region: which curves bound it, where they intersect, and whether the boundary changes. Every answer below includes working, because a correct option with the wrong setup is still a revision target.

## Conditions and formula sheet

| Situation | Start with | Check before using it |
| --- | --- | --- |
| Area between curve and $x$-axis | $A=\int_a^b \lvert f(x)\rvert\,dx$ | Split at zeros of $f(x)$; do not cancel signed areas. |
| Area between curve and $y$-axis | $A=\int_c^d \lvert g(y)\rvert\,dy$ | Use right minus left in $x=g(y)$ form. |
| Area between two curves | $A=\int_a^b \lvert f(x)-g(x)\rvert\,dx$ | Find intersections; use upper minus lower on each piece. |
| Horizontal strips | $A=\int_c^d (x_R-x_L)\,dy$ | Prefer when one $y$ gives one left/right boundary. |
| Symmetric region | $A=2\int_0^a (\cdots)$ or similar | Confirm both boundary and interval have the stated symmetry. |
| Standard circle form | $\int\sqrt{a^2-x^2}\,dx=\frac{x}{2}\sqrt{a^2-x^2}+\frac{a^2}{2}\sin^{-1}\!\left(\frac{x}{a}\right)+C$ | Keep $a^2$ and the $\frac{1}{2}$ factors correct. |

<learning-block type="mistake" title="Fast sanity checks">

A geometric area cannot be negative. If your integral gives a negative value, you have either used signed area where area was asked for, or subtracted in the wrong order. Also check the limits: intersection points come from solving equations simultaneously, not from reading a rough sketch alone.

</learning-block>

## Section A - 10 rapid MCQs

### 1. Simple area above the axis

The area bounded by $y=x^2$, the $x$-axis, $x=0$, and $x=3$ is:

- A. $3$
- B. $6$
- C. $9$
- D. $27$

<details><summary>Answer</summary>

**C.** Since $x^2\ge 0$, $A=\int_0^3 x^2\,dx=\left[\frac{x^3}{3}\right]_0^3=9$ square units.

</details>

### 2. Signed integral trap

The area bounded by $y=\sin x$ and the $x$-axis from $x=0$ to $x=2\pi$ is:

- A. $0$
- B. $2$
- C. $4$
- D. $\pi$

<details><summary>Answer</summary>

**C.** Split at $x=\pi$: $\int_0^\pi \sin x\,dx=2$ and $\int_\pi^{2\pi}\lvert\sin x\rvert\,dx=2$. Total area is $4$ square units. Option A confuses signed integral with area.

</details>

### 3. Area between two curves

The area enclosed by $y=x$ and $y=x^2$ is:

- A. $\frac{1}{12}$
- B. $\frac{1}{6}$
- C. $\frac{1}{3}$
- D. $\frac{1}{2}$

<details><summary>Answer</summary>

**B.** Intersections are $x=0,1$, and $x\ge x^2$ there. $A=\int_0^1 (x-x^2)\,dx=\left[\frac{x^2}{2}-\frac{x^3}{3}\right]_0^1=\frac{1}{6}$.

</details>

### 4. Horizontal strips

The area bounded by $y^2=4x$ and $y=2x$ is:

- A. $\frac{1}{6}$
- B. $\frac{1}{3}$
- C. $\frac{2}{3}$
- D. $1$

<details><summary>Answer</summary>

**B.** Write $x=y/2$ and $x=y^2/4$. Intersections in $y$: $y^2/4=y/2\Rightarrow y=0,2$. On $(0,2)$, $y/2\ge y^2/4$. Thus $A=\int_0^2 \left(\frac{y}{2}-\frac{y^2}{4}\right)dy=\left[\frac{y^2}{4}-\frac{y^3}{12}\right]_0^2=1-\frac{2}{3}=\frac{1}{3}$.

</details>

### 5. Area under a curve below the axis

The area bounded by $y=x^2-4$, the $x$-axis, $x=0$, and $x=2$ is:

- A. $-\frac{16}{3}$
- B. $\frac{8}{3}$
- C. $\frac{16}{3}$
- D. $8$

<details><summary>Answer</summary>

**C.** On $[0,2]$, $x^2-4\le 0$. The signed integral is $\int_0^2 (x^2-4)\,dx=\frac{8}{3}-8=-\frac{16}{3}$, so the geometric area is $\frac{16}{3}$ square units.

</details>

### 6. Standard parabolas

The area enclosed by $y^2=x$ and $x^2=y$ is:

- A. $\frac{1}{6}$
- B. $\frac{1}{3}$
- C. $\frac{2}{3}$
- D. $1$

<details><summary>Answer</summary>

**B.** Intersections: $x^4=x\Rightarrow x=0,1$. Upper curve is $y=\sqrt{x}$. $A=\int_0^1 (\sqrt{x}-x^2)\,dx=\left[\frac{2}{3}x^{3/2}-\frac{x^3}{3}\right]_0^1=\frac{1}{3}$.

</details>

### 7. Symmetry

The area bounded by $y=\cos x$, the $x$-axis, $x=-\pi/2$, and $x=\pi/2$ is:

- A. $0$
- B. $1$
- C. $2$
- D. $\pi$

<details><summary>Answer</summary>

**C.** On $[-\pi/2,\pi/2]$, $\cos x\ge 0$ and the function is even. $A=2\int_0^{\pi/2}\cos x\,dx=2[\sin x]_0^{\pi/2}=2$.

</details>

### 8. Area of a circle

The area of the circle $x^2+y^2=9$ is:

- A. $3\pi$
- B. $6\pi$
- C. $9\pi$
- D. $18\pi$

<details><summary>Answer</summary>

**C.** Radius $a=3$, so area $=\pi a^2=9\pi$. By integration, $4\int_0^3 \sqrt{9-x^2}\,dx=4\cdot\frac{9\pi}{4}=9\pi$.

</details>

### 9. Region between a line and a parabola

The area enclosed by $y=x^2$ and $y=2x+3$ is:

- A. $\frac{16}{3}$
- B. $\frac{32}{3}$
- C. $\frac{27}{2}$
- D. $\frac{32}{9}$

<details><summary>Answer</summary>

**B.** Intersections: $x^2-2x-3=0\Rightarrow x=-1,3$. The line is above: $A=\int_{-1}^{3}(2x+3-x^2)\,dx=\left[x^2+3x-\frac{x^3}{3}\right]_{-1}^{3}=(9+9-9)-\left(1-3+\frac{1}{3}\right)=9-\left(-\frac{5}{3}\right)=\frac{32}{3}$.

</details>

### 10. Choosing the right strip

The area bounded by $x=y^2$ and $x=4$ is most directly computed as:

- A. $\int_{-4}^{4}(4-y^2)\,dy$
- B. $\int_{-2}^{2}(4-y^2)\,dy$
- C. $\int_0^4 \sqrt{x}\,dx$
- D. $\int_{-2}^{2}(4-x^2)\,dx$

<details><summary>Answer</summary>

**B.** The parabola $x=y^2$ meets $x=4$ at $y=\pm 2$. Horizontal strips give right minus left: $\int_{-2}^{2}(4-y^2)\,dy=\frac{32}{3}$. Option A uses wrong $y$-limits, option C gives only the upper half, and option D mixes variables incorrectly.

</details>

## Section B - 5 numerical-value questions

### 11. Area above the axis

Find the area bounded by $y=6x-x^2$ and the $x$-axis.

<details><summary>Answer</summary>

Intersections with the $x$-axis: $6x-x^2=0\Rightarrow x=0,6$. On $[0,6]$, $y\ge 0$. Therefore

$$
A=\int_0^6 (6x-x^2)\,dx=\left[3x^2-\frac{x^3}{3}\right]_0^6=108-72=36.
$$

Answer: **36**.

</details>

### 12. Parabola and vertical line

Find the area bounded by $y^2=4x$ and $x=9$.

<details><summary>Answer</summary>

Intersections: $y^2=36\Rightarrow y=-6,6$. By symmetry,

$$
A=2\int_0^6 \left(9-\frac{y^2}{4}\right)dy=2\left[9y-\frac{y^3}{12}\right]_0^6=2(54-18)=72.
$$

Answer: **72**.

</details>

### 13. Total area across a crossing

Find the total area bounded by $y=\sin x$ and the $x$-axis over $x=0$ to $x=2\pi$.

<details><summary>Answer</summary>

$\sin x\ge 0$ on $[0,\pi]$ and $\sin x\le 0$ on $[\pi,2\pi]$. Thus

$$
A=\int_0^\pi \sin x\,dx+\int_\pi^{2\pi}(-\sin x)\,dx=2+2=4.
$$

Answer: **4**.

</details>

### 14. Diamond region

Find the area enclosed by $\lvert x\rvert+\lvert y\rvert=2$.

<details><summary>Answer</summary>

The graph is a diamond with vertices $(2,0),(0,2),(-2,0),(0,-2)$. By symmetry, four times the first-quadrant triangle:

$$
A=4\int_0^2 (2-x)\,dx=4\left[2x-\frac{x^2}{2}\right]_0^2=4(2)=8.
$$

Answer: **8**.

</details>

### 15. Area between a parabola and a line

Find the area enclosed by $y=x^2$ and $y=2x$.

<details><summary>Answer</summary>

Intersections: $x^2=2x\Rightarrow x=0,2$. On $[0,2]$, $2x\ge x^2$. Thus

$$
A=\int_0^2 (2x-x^2)\,dx=\left[x^2-\frac{x^3}{3}\right]_0^2=4-\frac{8}{3}=\frac{4}{3}.
$$

Answer: **4/3**.

</details>

## Section C - 3 assertion-reason questions

For each question, choose:

- A. Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.
- B. Both Assertion and Reason are true, but Reason is not the correct explanation of Assertion.
- C. Assertion is true, but Reason is false.
- D. Assertion is false, but Reason is true.

### 16. Signed integral and area

**Assertion (A):** The area bounded by $y=x^3$, the $x$-axis, $x=-1$, and $x=1$ is $0$.

**Reason (R):** $\int_{-1}^{1}x^3\,dx=0$ because $x^3$ is an odd function.

<details><summary>Answer</summary>

**D.** The Reason is true: the signed integral is $0$. The Assertion is false because geometric area is $\int_{-1}^{1}\lvert x^3\rvert\,dx=2\int_0^1 x^3\,dx=\frac{1}{2}$ square units, not $0$.

</details>

### 17. Splitting at an intersection

**Assertion (A):** The area between $y=\sin x$ and $y=\cos x$ from $x=0$ to $x=\pi/2$ is $\int_0^{\pi/2}\lvert \sin x-\cos x\rvert\,dx$.

**Reason (R):** The curves intersect at $x=\pi/4$ inside the interval, so the upper curve changes there.

<details><summary>Answer</summary>

**A.** Both are true, and the Reason explains the Assertion. On $[0,\pi/4]$, $\cos x\ge \sin x$; on $[\pi/4,\pi/2]$, $\sin x\ge \cos x$. The absolute value (or an explicit split) is required.

</details>

### 18. Symmetry shortcut

**Assertion (A):** The area bounded by $x^2+y^2=4$ and the $x$-axis above the axis is $2\pi$.

**Reason (R):** For a region symmetric about the $y$-axis, the area can be written as $2\int_0^a f(x)\,dx$ when $f$ is the upper boundary.

<details><summary>Answer</summary>

**B.** Both are true. The upper semicircle has area $\frac{1}{2}\pi(2)^2=2\pi$, and the symmetry formula is also true. But the Reason is a general symmetry fact, not the specific reason the semicircle area is $2\pi$.

</details>

## Section D - 2 matching/multi-statement questions

### 19. Match the region to its area

Match Column I with Column II.

| Column I (Region) | Column II (Area, square units) |
| --- | --- |
| (P) Bounded by $y=x^2$, $x$-axis, $x=0$, $x=2$ | (1) $\frac{1}{2}$ |
| (Q) Enclosed by $y=x$ and $y=x^2$ | (2) $\frac{8}{3}$ |
| (R) Bounded by $y=\sqrt{4-x^2}$ and the $x$-axis | (3) $\frac{1}{6}$ |
| (S) Bounded by $y=1-x$, $x$-axis, $y$-axis in the first quadrant | (4) $2\pi$ |

Choose the correct option:

- A. P-2, Q-3, R-4, S-1
- B. P-2, Q-1, R-4, S-3
- C. P-3, Q-2, R-4, S-1
- D. P-2, Q-3, R-1, S-4

<details><summary>Answer</summary>

**A.** 

(P) $\int_0^2 x^2\,dx=\frac{8}{3}$, so P-2.
(Q) $\int_0^1 (x-x^2)\,dx=\frac{1}{6}$, so Q-3.
(R) Upper semicircle of radius 2: $\frac{1}{2}\pi(2)^2=2\pi$, so R-4.
(S) Triangle with legs 1 and 1: $\frac{1}{2}$, so S-1.

</details>

### 20. Multi-statement question

Consider the region $R$ enclosed by $y=x^2$ and $y=4$. Which of the following statements are correct?

1. The curves intersect at $x=-2$ and $x=2$.
2. The area of $R$ is $\int_{-2}^{2}(4-x^2)\,dx$.
3. The area of $R$ is $\frac{32}{3}$ square units.
4. The same area can be written as $\int_0^4 2\sqrt{y}\,dy$.

Choose the correct option:

- A. 1, 2 and 3 only
- B. 1, 3 and 4 only
- C. 2, 3 and 4 only
- D. 1, 2, 3 and 4

<details><summary>Answer</summary>

**D.** All four statements are correct.

1. $x^2=4\Rightarrow x=\pm 2$.
2. On $[-2,2]$, $4\ge x^2$, so area is $\int_{-2}^{2}(4-x^2)\,dx$.
3. $\int_{-2}^{2}(4-x^2)\,dx=2\left[4x-\frac{x^3}{3}\right]_0^2=2\left(8-\frac{8}{3}\right)=\frac{32}{3}$.
4. Using horizontal strips, the right boundary is $x=\sqrt{y}$ and the left is $x=-\sqrt{y}$, so width is $2\sqrt{y}$, $y$ from $0$ to $4$: $\int_0^4 2\sqrt{y}\,dy=\left[\frac{4}{3}y^{3/2}\right]_0^4=\frac{32}{3}$.

</details>

## If you got these wrong, revisit...

| If you missed... | Revisit |
| --- | --- |
| Q1, Q5, Q8, Q11 | **Area under simple curves** - signed integral versus geometric area, and standard circle/parabola areas. |
| Q2, Q13, Q16 | **Area under simple curves** - split at axis crossings; never cancel below-axis and above-axis area. |
| Q3, Q6, Q9, Q15 | **Area between two curves** - find intersections and use upper minus lower consistently. |
| Q4, Q10, Q12, Q20 | **Mixed area problems** - choose horizontal or vertical strips to reduce splits and handle boundary changes. |
| Q7, Q14, Q18 | **Mixed area problems** - use symmetry deliberately, and confirm the boundary really has that symmetry. |
| Q17, Q19 | **Area between two curves** and **Mixed area problems** - intersection points can change which curve is upper. |

