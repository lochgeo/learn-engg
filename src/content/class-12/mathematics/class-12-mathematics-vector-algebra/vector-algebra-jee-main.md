## How to use this paper

Set aside **50 minutes** with no notes, phone or calculator. Attempt in order. Mark an unsure question and return only if time remains. Do not spend more than about 5 minutes on any single question.

Use $g=10\ \text{m/s}^2$ only if a question involves mechanics; this paper is purely mathematical. Unless stated otherwise, vectors are in three dimensions with standard basis $\hat i,\hat j,\hat k$.

## Conditions and formula sheet

| Item | Reminder |
| --- | --- |
| Magnitude | $|\vec a|=\sqrt{a_1^2+a_2^2+a_3^2}$ |
| Unit vector | $\hat a=\dfrac{\vec a}{|\vec a|}$, $\vec a\neq\vec 0$ |
| Section formula (internal) | $\vec r=\dfrac{m\vec b+n\vec a}{m+n}$ for $AR:RB=m:n$ |
| Dot product | $\vec a\cdot\vec b=a_1b_1+a_2b_2+a_3b_3=|\vec a||\vec b|\cos\theta$ |
| Projection of $\vec a$ on $\vec b$ | $\dfrac{\vec a\cdot\vec b}{|\vec b|}$ |
| Cross product | $\vec a\times\vec b=\begin{vmatrix}\hat i&\hat j&\hat k\\a_1&a_2&a_3\\b_1&b_2&b_3\end{vmatrix}$, magnitude $|\vec a||\vec b|\sin\theta$ |
| Area | Parallelogram $=|\vec a\times\vec b|$, triangle $=\frac{1}{2}|\vec a\times\vec b|$ |
| Scalar triple product | $[\vec a,\vec b,\vec c]=(\vec a\times\vec b)\cdot\vec c$; parallelepiped volume $=|[\vec a,\vec b,\vec c]|$ |
| Coplanarity | $[\vec a,\vec b,\vec c]=0$ |

## Section A — Rapid MCQs (10 questions)

Choose the single best option. Each answer is hidden below.

**A1.** The magnitude of $\vec a=2\hat i-3\hat j+6\hat k$ is

(a) $5$ (b) $7$ (c) $11$ (d) $49$

<details>
<summary>Answer</summary>

**(b).** $|\vec a|=\sqrt{2^2+(-3)^2+6^2}=\sqrt{4+9+36}=\sqrt{49}=7$.

</details>

**A2.** If $\vec a=\hat i+2\hat j-2\hat k$, the unit vector in the direction of $\vec a$ is

(a) $\hat i+2\hat j-2\hat k$ (b) $\frac{1}{3}(\hat i+2\hat j-2\hat k)$ (c) $\frac{1}{9}(\hat i+2\hat j-2\hat k)$ (d) $\frac{1}{\sqrt{3}}(\hat i+2\hat j-2\hat k)$

<details>
<summary>Answer</summary>

**(b).** $|\vec a|=\sqrt{1+4+4}=3$, so $\hat a=\frac{1}{3}(\hat i+2\hat j-2\hat k)$.

</details>

**A3.** The value of $\lambda$ for which $\vec a=2\hat i+\lambda\hat j+\hat k$ and $\vec b=4\hat i-2\hat j-2\hat k$ are perpendicular is

(a) $1$ (b) $2$ (c) $3$ (d) $4$

<details>
<summary>Answer</summary>

**(c).** Dot product must be zero: $2(4)+\lambda(-2)+1(-2)=8-2\lambda-2=6-2\lambda=0$, so $\lambda=3$.

</details>

**A4.** If $|\vec a|=10$, $|\vec b|=2$ and $\vec a\cdot\vec b=12$, then $|\vec a\times\vec b|$ is

(a) $5$ (b) $10$ (c) $16$ (d) $20$

<details>
<summary>Answer</summary>

**(c).** $\cos\theta=\frac{12}{20}=\frac{3}{5}$, so $\sin\theta=\frac{4}{5}$ (angle between vectors is in $[0,\pi]$). Thus $|\vec a\times\vec b|=10\times2\times\frac{4}{5}=16$.

</details>

**A5.** The projection of $\vec a=2\hat i+3\hat j+2\hat k$ on $\vec b=\hat i+2\hat j+\hat k$ is

(a) $\frac{10}{\sqrt{6}}$ (b) $\frac{10}{\sqrt{17}}$ (c) $\frac{6}{\sqrt{6}}$ (d) $\sqrt{6}$

<details>
<summary>Answer</summary>

**(a).** $\vec a\cdot\vec b=2+6+2=10$, $|\vec b|=\sqrt{1+4+1}=\sqrt{6}$, projection $=10/\sqrt{6}$.

</details>

**A6.** The area of the parallelogram with adjacent sides $\vec a=\hat i+\hat j$ and $\vec b=\hat j+\hat k$ is

(a) $\sqrt{2}$ (b) $\sqrt{3}$ (c) $2$ (d) $3$

<details>
<summary>Answer</summary>

**(b).** $\vec a\times\vec b=\begin{vmatrix}\hat i&\hat j&\hat k\\1&1&0\\0&1&1\end{vmatrix}=\hat i(1)-\hat j(1)+\hat k(1)=\hat i-\hat j+\hat k$. Area $=\sqrt{1+1+1}=\sqrt{3}$.

</details>

**A7.** For any two vectors $\vec a$ and $\vec b$, $\vec a\times\vec b$ is

(a) equal to $\vec b\times\vec a$ (b) perpendicular to $\vec b\times\vec a$ (c) equal to $-\vec b\times\vec a$ (d) zero

<details>
<summary>Answer</summary>

**(c).** Swapping the order of a cross product changes its sign: $\vec b\times\vec a=-(\vec a\times\vec b)$.

</details>

**A8.** The scalar triple product $[\vec a,\vec b,\vec c]$ represents

(a) area of a triangle (b) volume of a parallelepiped (c) a vector perpendicular to $\vec c$ (d) projection of $\vec a$ on $\vec b$

<details>
<summary>Answer</summary>

**(b).** The absolute value $|[\vec a,\vec b,\vec c]|$ is the volume of the parallelepiped with coterminous edges $\vec a,\vec b,\vec c$.

</details>

**A9.** If $\vec a,\vec b,\vec c$ are coplanar, then $[\vec a,\vec b,\vec c]$ is

(a) $1$ (b) $-1$ (c) $0$ (d) $|\vec a||\vec b||\vec c|$

<details>
<summary>Answer</summary>

**(c).** Coplanar coterminous edges give a parallelepiped of zero volume, so the scalar triple product is zero.

</details>

**A10.** The position vector of the midpoint of the line joining points with position vectors $\vec a$ and $\vec b$ is

(a) $\vec a+\vec b$ (b) $\vec a-\vec b$ (c) $\frac{\vec a+\vec b}{2}$ (d) $\frac{\vec a-\vec b}{2}$

<details>
<summary>Answer</summary>

**(c).** The midpoint divides the segment internally in ratio $1:1$, so the section formula gives $\frac{1\cdot\vec b+1\cdot\vec a}{2}=\frac{\vec a+\vec b}{2}$.

</details>

## Section B — Numerical value questions (5 questions)

Write the value asked for. Answers are hidden below.

**B1.** If $\vec a=3\hat i-2\hat j+\hat k$, find $|\vec a|^2$.

<details>
<summary>Answer</summary>

$|\vec a|^2=3^2+(-2)^2+1^2=9+4+1=14$. Answer: **14**.

</details>

**B2.** If $\vec a=\hat i+2\hat j+3\hat k$ and $\vec b=2\hat i-\hat j+\hat k$, find $\vec a\cdot\vec b$.

<details>
<summary>Answer</summary>

$\vec a\cdot\vec b=1(2)+2(-1)+3(1)=2-2+3=3$. Answer: **3**.

</details>

**B3.** Find the value of $\lambda$ such that $\vec a=2\hat i+2\hat j-\hat k$ and $\vec b=\lambda\hat i+\hat j+4\hat k$ are perpendicular.

<details>
<summary>Answer</summary>

Dot product zero: $2\lambda+2-4=2\lambda-2=0$, so $\lambda=1$. Answer: **1**.

</details>

**B4.** Find the area of the triangle with adjacent sides $\vec a=2\hat i-\hat j+\hat k$ and $\vec b=\hat i+2\hat j-\hat k$.

<details>
<summary>Answer</summary>

$\vec a\times\vec b=\begin{vmatrix}\hat i&\hat j&\hat k\\2&-1&1\\1&2&-1\end{vmatrix}=\hat i(1-2)-\hat j(-2-1)+\hat k(4+1)=-\hat i+3\hat j+5\hat k$.

$|\vec a\times\vec b|=\sqrt{1+9+25}=\sqrt{35}$. Triangle area $=\frac{1}{2}\sqrt{35}$. Answer: **$\frac{\sqrt{35}}{2}$**.

</details>

**B5.** Find the scalar triple product $[\vec a,\vec b,\vec c]$ for $\vec a=\hat i$, $\vec b=\hat j$, $\vec c=\hat k$.

<details>
<summary>Answer</summary>

$[\hat i,\hat j,\hat k]=(\hat i\times\hat j)\cdot\hat k=\hat k\cdot\hat k=1$. Answer: **1**.

</details>

## Section C — Assertion–Reason (3 questions)

Choose: (a) both true and R explains A, (b) both true but R does not explain A, (c) A true R false, (d) A false R true.

**C1.** Assertion (A): If $\vec a\cdot\vec b=0$ and $\vec a,\vec b$ are non-zero, then $\vec a$ is perpendicular to $\vec b$.  
Reason (R): $\vec a\cdot\vec b=|\vec a||\vec b|\cos\theta$ and $|\vec a||\vec b|\neq 0$.

<details>
<summary>Answer</summary>

**(a).** With non-zero magnitudes, $\cos\theta=0$, so $\theta=\pi/2$. R gives the reason directly.

</details>

**C2.** Assertion (A): $\vec a\times\vec b=\vec b\times\vec a$ for all vectors $\vec a,\vec b$.  
Reason (R): The cross product is anti-commutative.

<details>
<summary>Answer</summary>

**(d).** A is false because $\vec a\times\vec b=-(\vec b\times\vec a)$. R is true.

</details>

**C3.** Assertion (A): If $[\vec a,\vec b,\vec c]=0$, the three vectors are coplanar.  
Reason (R): The scalar triple product gives the signed volume of the parallelepiped formed by the three vectors.

<details>
<summary>Answer</summary>

**(a).** Zero volume means the parallelepiped collapses into a plane; R explains A.

</details>

## Section D — Matching / multi-statement (2 questions)

**D1.** Match the quantity (List I) with the correct expression (List II):

- P. Projection of $\vec a$ on $\vec b$ — 1. $\frac{1}{2}|\vec a\times\vec b|$
- Q. Area of triangle with adjacent sides $\vec a,\vec b$ — 2. $\dfrac{\vec a\cdot\vec b}{|\vec b|}$
- R. Volume of parallelepiped with edges $\vec a,\vec b,\vec c$ — 3. $|(\vec a\times\vec b)\cdot\vec c|$

<details>
<summary>Answer</summary>

P → 2, Q → 1, R → 3. So **P-2, Q-1, R-3**.

</details>

**D2.** Consider $\vec a=\hat i+2\hat j+3\hat k$ and $\vec b=2\hat i+4\hat j+6\hat k$.

- Statement 1: $\vec a\times\vec b=\vec 0$.
- Statement 2: $\vec a$ and $\vec b$ are collinear.

Which is correct?

(a) Only 1 (b) Only 2 (c) Both 1 and 2 (d) Neither

<details>
<summary>Answer</summary>

**(c).** $\vec b=2\vec a$, so the vectors are collinear (Statement 2 true). Parallel/collinear vectors have zero cross product (Statement 1 true).

</details>

## If you got these wrong, revisit

- **A1, A2, B1:** vectors and types — magnitude and unit vectors.
- **A10:** addition and scalar multiplication — section formula and midpoint as a special case.
- **A3, A5, B2, B3, C1:** dot product and projections — perpendicularity, projection, and angle logic.
- **A4, A6, A7, B4, C2, D2:** cross product and applications — determinant sign, area, and anti-commutativity.
- **A8, A9, B5, C3, D1:** mixed vector problems — scalar triple product, volume and coplanarity.

<learning-block type="recap" title="Ready for a timed set?">
Aim for at least 16 correct out of 20 with a clear reason for each method choice. If you solved a problem correctly but could not explain why dot, cross or scalar triple product was the right tool, mark it for revision.
</learning-block>