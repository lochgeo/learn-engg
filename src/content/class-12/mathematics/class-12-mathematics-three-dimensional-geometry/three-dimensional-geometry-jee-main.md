## JEE Main sprint: how to use this set

This is a **50-minute, no-notes** practice set for Three Dimensional Geometry. Do it after the chapter lessons and review module. Spend roughly 20 minutes on Section A, 12 minutes on Section B, 10 minutes on Section C, and 8 minutes on Section D. If a question takes more than 90 seconds without a clear plan, mark it and move on.

Before each calculation, name the object you are using: direction vector, normal, projection, cross product, or scalar triple product. Most errors in this chapter come from applying the right formula to the wrong vector.

## Conditions sheet

| Situation | Use | Check before using it |
| --- | --- | --- |
| Direction ratios $(a,b,c)$ | $(l,m,n)=\left(\frac{a}{\sqrt{a^2+b^2+c^2}},\ldots\right)$ | Divide by the magnitude; $l^2+m^2+n^2=1$. |
| Line through $(x_1,y_1,z_1)$ parallel to $(a,b,c)$ | $\frac{x-x_1}{a}=\frac{y-y_1}{b}=\frac{z-z_1}{c}$ | Zero denominator means constant coordinate. |
| Angle between lines | $\cos\theta=\frac{|\vec b_1\cdot\vec b_2|}{|\vec b_1||\vec b_2|}$ | Use direction vectors. |
| Skew lines distance | $d=\frac{|(\vec a_2-\vec a_1)\cdot(\vec b_1\times\vec b_2)|}{|\vec b_1\times\vec b_2|}$ | Lines must not be parallel. |
| Parallel lines distance | $d=\frac{|\vec b\times(\vec a_2-\vec a_1)|}{|\vec b|}$ | Use common direction $\vec b$. |
| Plane point-normal | $A(x-x_1)+B(y-y_1)+C(z-z_1)=0$ | $(A,B,C)$ is normal. |
| Line-plane angle | $\sin\phi=\frac{|\vec b\cdot\vec n|}{|\vec b||\vec n|}$ | Sine, because $\phi$ is from the plane. |
| Plane-plane angle | $\cos\theta=\frac{|\vec n_1\cdot\vec n_2|}{|\vec n_1||\vec n_2|}$ | Use normals. |
| Point-plane distance | $d=\frac{|Ax_1+By_1+Cz_1+D|}{\sqrt{A^2+B^2+C^2}}$ | Use the full plane equation with sign of $D$. |
| Coplanarity of two lines | $\begin{vmatrix}x_2-x_1&y_2-y_1&z_2-z_1\\a_1&b_1&c_1\\a_2&b_2&c_2\end{vmatrix}=0$ | Zero means coplanar, not necessarily intersecting. |

## Section A — 10 rapid MCQs

### 1. Direction cosines

If a line has direction ratios $2,-1,-2$, its direction cosines are:

- A. $(2,-1,-2)$
- B. $(2/3,-1/3,-2/3)$
- C. $(2/9,-1/9,-2/9)$
- D. $(1/3,-1/6,-1/3)$

<details><summary>Answer</summary>

**B.** Magnitude is $\sqrt{4+1+4}=3$, so direction cosines are $(2/3,-1/3,-2/3)$.

</details>

### 2. A line equation

The Cartesian equation of the line through $(1,-2,3)$ parallel to vector $2\hat i+3\hat j-6\hat k$ is:

- A. $\frac{x+1}{2}=\frac{y-2}{3}=\frac{z+3}{-6}$
- B. $\frac{x-1}{2}=\frac{y+2}{3}=\frac{z-3}{-6}$
- C. $\frac{x-1}{-2}=\frac{y+2}{-3}=\frac{z-3}{6}$
- D. Both B and C

<details><summary>Answer</summary>

**D.** Option B uses the given direction $(2,3,-6)$. Option C uses the opposite direction $(-2,-3,6)$, which represents the same line. Both are correct.

</details>

### 3. Angle between lines

The angle between lines with direction ratios $(1,1,0)$ and $(1,-1,0)$ is:

- A. $0^\circ$
- B. $45^\circ$
- C. $60^\circ$
- D. $90^\circ$

<details><summary>Answer</summary>

**D.** Dot product is $1-1+0=0$, so the lines are perpendicular.

</details>

### 4. Parallel line check

The lines $\frac{x-1}{2}=\frac{y-2}{4}=\frac{z-3}{6}$ and $\frac{x}{1}=\frac{y}{2}=\frac{z}{3}$ are:

- A. intersecting
- B. parallel
- C. skew
- D. perpendicular

<details><summary>Answer</summary>

**B.** Direction ratios $(2,4,6)$ and $(1,2,3)$ are proportional, so the lines are parallel.

</details>

### 5. Normal to a plane

The normal vector to the plane $3x-2y+6z=5$ is:

- A. $(3,-2,6)$
- B. $(3,2,6)$
- C. $(5,0,0)$
- D. $(1,-2,3)$

<details><summary>Answer</summary>

**A.** In $Ax+By+Cz=D$, the normal direction ratios are $(A,B,C)=(3,-2,6)$.

</details>

### 6. Angle between line and plane

The angle $\phi$ between a line with direction $\vec b$ and a plane with normal $\vec n$ is given by:

- A. $\cos\phi=\frac{|\vec b\cdot\vec n|}{|\vec b||\vec n|}$
- B. $\sin\phi=\frac{|\vec b\cdot\vec n|}{|\vec b||\vec n|}$
- C. $\tan\phi=\frac{|\vec b\cdot\vec n|}{|\vec b||\vec n|}$
- D. $\sin\phi=\frac{|\vec b\times\vec n|}{|\vec b||\vec n|}$

<details><summary>Answer</summary>

**B.** The angle between the line and the normal is $90^\circ-\phi$, so $\cos(90^\circ-\phi)=\sin\phi=|\vec b\cdot\vec n|/(|\vec b||\vec n|)$.

</details>

### 7. Distance from origin

The perpendicular distance of the plane $2x-3y+6z-14=0$ from the origin is:

- A. $14$
- B. $7$
- C. $2$
- D. $1$

<details><summary>Answer</summary>

**C.** $d=\frac{| -14|}{\sqrt{4+9+36}}=\frac{14}{7}=2$.

</details>

### 8. Parallel planes

The distance between $x+2y-2z+1=0$ and $2x+4y-4z+5=0$ is:

- A. $1/2$
- B. $1/3$
- C. $1$
- D. $3/2$

<details><summary>Answer</summary>

**A.** Rewrite the second plane as $x+2y-2z+5/2=0$. Then $d=\frac{|5/2-1|}{\sqrt{1+4+4}}=\frac{3/2}{3}=1/2$.

</details>

### 9. Coplanar lines

Two non-parallel lines are coplanar if:

- A. their direction ratios are proportional
- B. $(\vec a_2-\vec a_1)\cdot(\vec b_1\times\vec b_2)=0$
- C. $\vec b_1\cdot\vec b_2=0$
- D. $\vec b_1\times\vec b_2=\vec 0$

<details><summary>Answer</summary>

**B.** The scalar triple product being zero means the joining vector and both direction vectors lie in one plane. Options A and D describe parallelism; option C describes perpendicularity.

</details>

### 10. Foot condition

If a point is moved along the normal to a plane until it reaches the plane, the distance moved is:

- A. always zero
- B. the perpendicular distance from the point to the plane
- C. the distance from the origin to the point
- D. $|A+B+C+D|$

<details><summary>Answer</summary>

**B.** By definition, the perpendicular distance is the length of the normal segment from the point to the plane.

</details>

## Section B — 5 numerical-value questions

Write the answer as an integer or a decimal value as appropriate.

### 11. Direction cosine sum

A line makes equal acute angles with the positive $x,y,z$ axes. The value of $l+m+n$ is $\sqrt{k}$. Find $k$.

<details><summary>Answer</summary>

$l=m=n=1/\sqrt{3}$, so $l+m+n=3/\sqrt{3}=\sqrt{3}$. Therefore $k=3$.

</details>

### 12. Point of intersection parameter

The line $\frac{x-1}{2}=\frac{y-2}{3}=\frac{z-3}{4}$ meets the plane $x+y+z=21$ at parameter value $\lambda$. Find $\lambda$.

<details><summary>Answer</summary>

Substitute $x=1+2\lambda$, $y=2+3\lambda$, $z=3+4\lambda$: $(1+2\lambda)+(2+3\lambda)+(3+4\lambda)=6+9\lambda=21$. Thus $9\lambda=15$ and $\lambda=5/3$. The answer is $5/3$.

</details>

### 13. Distance from a plane

Find the distance of the point $(2,3,4)$ from the plane $3x-6y+2z+11=0$.

<details><summary>Answer</summary>

$$
d=\frac{|3(2)-6(3)+2(4)+11|}{\sqrt{3^2+(-6)^2+2^2}}=\frac{|6-18+8+11|}{\sqrt{49}}=\frac{|7|}{7}=1.
$$

The answer is $1$.

</details>

### 14. Angle between planes

The planes $2x+y-z=5$ and $x-y-z=3$ intersect at angle $\theta$. Find $\cos\theta$.

<details><summary>Answer</summary>

Normals are $(2,1,-1)$ and $(1,-1,-1)$. Dot product $2-1+1=2$. Magnitudes $\sqrt{6}$ and $\sqrt{3}$. Therefore $\cos\theta=\frac{2}{\sqrt{18}}=\frac{2}{3\sqrt{2}}=\frac{\sqrt{2}}{3}$. The answer is $\sqrt{2}/3$.

</details>

### 15. Shortest distance value

The shortest distance between the parallel lines $\vec r=(\hat i+2\hat j+3\hat k)+\lambda(\hat i-\hat j+\hat k)$ and $\vec r=(2\hat i+3\hat j+4\hat k)+\mu(\hat i-\hat j+\hat k)$ is $\sqrt{p/q}$ in simplest rational form. Find $p+q$.

<details><summary>Answer</summary>

$\vec a_2-\vec a_1=(1,1,1)$, $\vec b=(1,-1,1)$. $\vec b\times(\vec a_2-\vec a_1)=\begin{vmatrix}\hat i&\hat j&\hat k\\1&-1&1\\1&1&1\end{vmatrix}=(-2,0,2)$. Magnitude $\sqrt{8}=2\sqrt{2}$. $|\vec b|=\sqrt{3}$. Thus $d=2\sqrt{2}/\sqrt{3}=\sqrt{8/3}$, so $p+q=11$.

</details>

## Section C — 3 assertion–reason questions

Options for each question:

- A. Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.
- B. Both Assertion and Reason are true, but Reason is not the correct explanation of Assertion.
- C. Assertion is true but Reason is false.
- D. Assertion is false but Reason is true.

### 16. Direction cosines

**Assertion (A):** The numbers $(1/2,1/2,1/\sqrt{2})$ can be direction cosines of a line.

**Reason (R):** For direction cosines, $l^2+m^2+n^2=1$.

<details><summary>Answer</summary>

**A.** Check the triple: $1/4+1/4+1/2=1$, so the numbers satisfy the condition in R. Therefore A is true and R is the correct explanation.

</details>

### 17. Line-plane angle

**Assertion (A):** If a line is parallel to the plane $Ax+By+Cz+D=0$, then its direction ratios $(a,b,c)$ satisfy $Aa+Bb+Cc=0$.

**Reason (R):** The angle between a line and a plane is given by $\sin\phi=\frac{|\vec b\cdot\vec n|}{|\vec b||\vec n|}$.

<details><summary>Answer</summary>

**A.** A line parallel to the plane makes angle $\phi=0$ with the plane, so $\sin\phi=0$ and $\vec b\cdot\vec n=Aa+Bb+Cc=0$. R states the formula used to obtain this condition, so it correctly explains A.

</details>

### 18. Coplanarity

**Assertion (A):** If the scalar triple product $(\vec a_2-\vec a_1)\cdot(\vec b_1\times\vec b_2)$ is zero, then the two lines must intersect.

**Reason (R):** A zero scalar triple product means the joining vector and the two direction vectors are coplanar.

<details><summary>Answer</summary>

**D.** R is true by the meaning of scalar triple product. A is false because coplanar lines may also be parallel or coincident; intersection requires coplanarity and non-parallel directions.

</details>

## Section D — 2 matching or multi-statement questions

### 19. Matching

Match each quantity in Column I with its correct expression in Column II.

| Column I | Column II |
| --- | --- |
| (P) Distance of $(x_1,y_1,z_1)$ from $Ax+By+Cz+D=0$ | (1) $\frac{|\vec b_1\cdot\vec b_2|}{|\vec b_1||\vec b_2|}$ gives cosine |
| (Q) Angle between two planes | (2) $\frac{|Ax_1+By_1+Cz_1+D|}{\sqrt{A^2+B^2+C^2}}$ |
| (R) Angle between a line and a plane | (3) $\frac{|\vec n_1\cdot\vec n_2|}{|\vec n_1||\vec n_2|}$ gives cosine |
| (S) Angle between two lines | (4) $\frac{|\vec b\cdot\vec n|}{|\vec b||\vec n|}$ gives sine |

Choose the correct option:

- A. P-2, Q-3, R-4, S-1
- B. P-2, Q-1, R-4, S-3
- C. P-3, Q-2, R-4, S-1
- D. P-2, Q-3, R-1, S-4

<details><summary>Answer</summary>

**A.** Point-plane distance is (2). Plane-plane angle uses normals with cosine: (3). Line-plane angle uses line and normal with sine: (4). Line-line angle uses direction vectors with cosine: (1).

</details>

### 20. Multi-statement

Consider the line $L: \frac{x-1}{2}=\frac{y+1}{-1}=\frac{z-2}{2}$ and the plane $\Pi: 2x-y+2z=9$. Which statements are correct?

1. The direction vector of $L$ is $(2,-1,2)$.
2. The normal vector of $\Pi$ is $(2,-1,2)$.
3. The line $L$ is perpendicular to the plane $\Pi$.
4. The point $(1,-1,2)$ lies on the plane $\Pi$.

Choose the correct option:

- A. 1, 2 and 3 only
- B. 1, 2 and 4 only
- C. 2, 3 and 4 only
- D. 1, 3 and 4 only

<details><summary>Answer</summary>

**A.** Statement 1 is true from the denominators. Statement 2 is true from plane coefficients. Statement 3 is true because the line direction $(2,-1,2)$ is parallel to the normal $(2,-1,2)$, so the line is perpendicular to the plane. Statement 4 is false because $2(1)-(-1)+2(2)=7\neq 9$.

</details>

## Review by error, not by score

| If you missed... | Revisit | Then retry |
| --- | --- | --- |
| 1, 11, 16 | Direction cosines and direction ratios | Normalise ratios and verify $l^2+m^2+n^2=1$. |
| 2, 4, 12 | Equation of a line | Read point, direction, and zero-denominator cases carefully. |
| 3, 15 | Angles and shortest distance between lines | Choose dot, cross, or scalar triple product by what the question asks. |
| 5, 6, 14, 17, 19 | The plane: equation and angle | Use normals for planes; use sine for line-plane angle. |
| 7, 8, 13 | Distance of a point from a plane | Match coefficients before parallel-plane distance; keep $D$ with its sign. |
| 9, 18, 20 | Coplanarity and mixed problems | Test coplanarity, then test parallelism before concluding intersection. |

<learning-block type="recap" title="Ready for exam conditions?">

Aim for at least 16 correct out of 20 with a clear reason for each formula choice. Questions you guessed correctly but cannot justify are revision targets, not mastered topics.

</learning-block>