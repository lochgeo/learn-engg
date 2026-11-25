## JEE Main sprint: how to use this set

This is a **50-minute, no-notes** paper for after you finish the chapter lessons and the mastery check. Spend roughly 15 minutes on Section A, 15 on Section B, 10 on Section C and 10 on Section D. Mark any question that passes 90 seconds and return to it; one stubborn quotient must not consume the paper. This is pure mathematics, so no physical constant is needed.

Before writing, name the tool: an order rule, a sign reversal, a sign table, a modulus split, a half-plane test or a feasible-region corner. Most wrong answers here come from choosing the wrong tool, not from arithmetic. Write the solution set first and only then match it to an option.

## Conditions and formula sheet

| Clue | Start with | Check before trusting it |
| --- | --- | --- |
| $ax+b<c$, $a>0$ | $x<\dfrac{c-b}{a}$ | Boundary excluded only for strict $<$. |
| $ax+b<c$, $a<0$ | $x>\dfrac{c-b}{a}$ | Both parts of a chain reverse. |
| Chain $p<f(x)\le q$ | Apply each operation to all three parts | The division sign decides each reversal. |
| $\dfrac{P(x)}{Q(x)}\,\square\,0$ | Sign table at zeros of $P$ and $Q$ | A zero of $Q$ is always excluded. |
| $x^2<k^2$ | $|x|<k$, then $-k<x<k$ | Requires $k>0$. |
| $|x-a|<r$, $r>0$ | $a-r<x<a+r$ | $|x-a|>r$ gives two rays instead. |
| One line, two variables | Test a point off the line | Strict inequality means a dashed boundary. |
| Braced system | Intersect half-planes; check vertices | A vertex must satisfy **every** inequality. |
| Word problem | Translate, add $x\ge0$, interpret | "At least" is $\ge$; integers may be required. |

<learning-block type="mistake" title="Three instant sanity checks">

If an interval keeps the endpoint that a strict inequality excludes, redo the bracket. If a quotient answer contains a value that makes its denominator zero, remove it. If a shaded region fails a single inequality when you substitute a point from it, the whole region is wrong.

</learning-block>

## Section A — 10 rapid MCQs

### 1. A compound bound

If $-3<2x+1\le 7$, the solution set is:

- A. $(-2,3]$
- B. $[-2,3)$
- C. $(-1,4]$
- D. $(-2,3)$

<details><summary>Answer</summary>

**A.** Subtract $1$: $-4<2x\le 6$. Divide by $2>0$: $-2<x\le 3$. The left bound is open and the right closed, so $(-2,3]$.

</details>

### 2. A safe operation

Which operation always preserves the direction of an inequality between two real numbers?

- A. Multiplying both sides by $-2$
- B. Dividing both sides by a negative number
- C. Adding $5$ to both sides
- D. Taking reciprocals of both sides

<details><summary>Answer</summary>

**C.** Adding the same real number shifts both values equally. Multiplying or dividing by a negative reverses the order, and reciprocals are only order-preserving under extra sign conditions — for example $1<2$ but $1>\frac12$.

</details>

### 3. Negative coefficient

The solution of $7-3x\le -2$ is:

- A. $x\le 3$
- B. $x\ge 3$
- C. $x\ge -3$
- D. $x\le -3$

<details><summary>Answer</summary>

**B.** $-3x\le -9$; dividing by $-3$ reverses the sign, so $x\ge 3$. Check $x=4$: $7-12=-5\le -2$; check $x=0$: $7\le -2$ fails.

</details>

### 4. A quotient

The inequality $\dfrac{x-1}{x+2}>0$ holds when:

- A. $x<-2$ or $x>1$
- B. $-2<x<1$
- C. $x>1$ only
- D. $x<-2$ only

<details><summary>Answer</summary>

**A.** The sign changes at $1$ (numerator zero) and $-2$ (pole). Testing $x=-3$ gives $\frac{-4}{-1}>0$; testing $x=0$ gives $\frac{-1}{2}<0$; testing $x=2$ gives $\frac13>0$. Hence $x<-2$ or $x>1$; $x=-2$ is excluded and $x=1$ gives zero, which fails the strict inequality.

</details>

### 5. Modulus

If $|x-3|<2$, then $x$ lies in:

- A. $(1,5)$
- B. $[1,5]$
- C. $(-\infty,1)\cup(5,\infty)$
- D. $(3,5)$

<details><summary>Answer</summary>

**A.** Distance from $3$ is less than $2$, so $3-2<x<3+2$, giving $(1,5)$. The endpoints are excluded because the inequality is strict.

</details>

### 6. A half-plane region

The region $x\ge 0$, $y\ge 0$, $x+y\le 3$ is:

- A. an unbounded triangle
- B. a bounded triangle with vertices $(0,0)$, $(3,0)$, $(0,3)$
- C. an infinite strip
- D. empty

<details><summary>Answer</summary>

**B.** The first quadrant is cut by the line joining $(3,0)$ and $(0,3)$; the origin satisfies $0\le 3$, so the kept side is below the line. All three vertices satisfy every inequality and the region is enclosed.

</details>

### 7. Contradictory conditions

For the system $2x+y\ge 4$ and $2x+y\le 1$, the solution set is:

- A. a strip between parallel lines
- B. a single line
- C. empty
- D. a half-plane

<details><summary>Answer</summary>

**C.** The same expression cannot be at least $4$ and at most $1$. The two parallel boundaries face away from each other, so no point qualifies.

</details>

### 8. Multiplying by a negative

If $a<b$ and $c<0$, which statement must be true?

- A. $ac<bc$
- B. $ac>bc$
- C. $a+c>b+c$
- D. $\dfrac ac<\dfrac bc$

<details><summary>Answer</summary>

**B.** Since $b-a>0$ and $-c>0$, their product $(-c)(b-a)=ac-bc$ is positive, so $ac>bc$. Multiplication by a negative reflects the number line. Option D is false for the same reason: dividing by $c<0$ reverses the order, giving $\frac ac>\frac bc$.

</details>

### 9. A squared inequality

The set $\{x\in\mathbb R:x^2<9\}$ equals:

- A. $(-3,3)$
- B. $[-3,3]$
- C. $(3,\infty)$
- D. $(-\infty,-3)$

<details><summary>Answer</summary>

**A.** $x^2<9\iff |x|<3\iff -3<x<3$. For example $x=-2$ satisfies it while $x=-4$ does not; $x=3$ gives equality and is excluded.

</details>

### 10. Counting integers

The number of integer solutions of $1\le\dfrac{x+2}{3}<4$ is:

- A. $8$
- B. $9$
- C. $10$
- D. $11$

<details><summary>Answer</summary>

**B.** Multiply through by $3$: $3\le x+2<12$, so $1\le x<10$. The integers are $1,2,\ldots,9$: nine values. The upper bound $10$ is excluded.

</details>

## Section B — 5 numerical-value questions

### 11. The smallest integer

Solve $4(x-1)\ge 3(x+2)-1$ and report the smallest integer solution.

<details><summary>Answer</summary>

$4x-4\ge 3x+6-1=3x+5$, so $x\ge 9$. The smallest integer is **$9$**. Check $x=8$: $28\ge 29$ is false; $x=9$: $32\ge 32$ holds.

</details>

### 12. How many integers?

Let $-2\le\dfrac{2-3x}{4}\le 5$. How many integers satisfy this?

<details><summary>Answer</summary>

Multiply by $4$: $-8\le 2-3x\le 20$. Subtract $2$: $-10\le -3x\le 18$. Divide by $-3$ and reverse both signs: $\dfrac{10}{3}\ge x\ge -6$, so $-6\le x\le 3.\overline{3}$. The integers are $-6,-5,\ldots,3$: **$10$** values. Check $x=-6$ gives $5$, and $x=4$ gives $-2.5<-2$, correctly outside.

</details>

### 13. Largest integer for a quotient

Find the largest integer satisfying $\dfrac{3x+2}{x-1}\le 2$.

<details><summary>Answer</summary>

$\dfrac{3x+2-2(x-1)}{x-1}=\dfrac{x+4}{x-1}\le 0$. The zero is $-4$ and the pole is $1$. The quotient is negative only for $-4<x<1$ and is zero at $x=-4$. Thus the solution is $[-4,1)$ and the largest integer in it is **$0$**. Check $x=0$: $\frac{2}{-1}=-2\le 2$; check $x=1$: undefined.

</details>

### 14. A minimum score

A student scores $51$ and $63$ out of $100$ in two tests. What is the minimum integer score in the third test needed for an average of at least $65$?

<details><summary>Answer</summary>

$\dfrac{51+63+t}{3}\ge 65\Rightarrow 114+t\ge 195\Rightarrow t\ge 81$. The minimum integer score is **$81$**. At $t=81$ the average is exactly $65$; at $t=80$ it is $64.67$.

</details>

### 15. Maximum of a sum on a region

For $x\ge 0$, $y\ge 0$, $2x+y\le 6$, $x+2y\le 6$, find the maximum value of $x+y$.

<details><summary>Answer</summary>

Corner points are $(0,0)$, $(3,0)$, $(0,3)$ and the intersection of the two sloping lines. Subtracting the equations gives $x=y$, and then $3x=6$, so the intersection is $(2,2)$. The values of $x+y$ are $0,3,3,4$, so the maximum is **$4$**, attained at $(2,2)$. Since both coefficients of $x+y$ are positive, the maximum lies on the upper boundary, not in the interior.

</details>

## Section C — 3 assertion–reason questions

For each question choose: (1) both assertion and reason are true and the reason explains the assertion; (2) both are true but the reason does not explain it; (3) the assertion is true but the reason is false; (4) the assertion is false but the reason is true.

### 16. Division by a positive number

**Assertion (A):** If $a<b$ and $c>0$, then $\dfrac ac<\dfrac bc$.
**Reason (R):** Dividing both sides of an inequality by a positive number preserves the order.

<details><summary>Answer</summary>

**Option 1.** Division by $c$ is multiplication by $1/c>0$, which preserves order, and R states exactly that property. For example $-4<6$ and $c=2$ give $-2<3$.

</details>

### 17. A squared inequality again

**Assertion (A):** The solution set of $x^2<4$ is $(-2,2)$.
**Reason (R):** For real $x$, $x^2<4$ is equivalent to $|x|<2$.

<details><summary>Answer</summary>

**Option 1.** Since $\sqrt{x^2}=|x|$ and $\sqrt4=2$, squaring is increasing on non-negative values, so $x^2<4\iff |x|<2\iff -2<x<2$. R is the step that proves A.

</details>

### 18. The excluded pole

**Assertion (A):** The solution of $\dfrac{x-3}{x+1}\le 0$ is $[-1,3]$.
**Reason (R):** A rational inequality can change sign at zeros of the numerator and of the denominator, and the denominator's zero must be excluded.

<details><summary>Answer</summary>

**Option 4.** R is true. The quotient is negative between $-1$ and $3$ and zero at $x=3$, so the correct set is $(-1,3]$, not $[-1,3]$. At $x=-1$ the expression is undefined, so A is false.

</details>

## Section D — 2 matching and multi-statement questions

### 19. Match the solution sets

Match each inequality in Column I with its solution set in Column II.

| Column I | Column II |
| --- | --- |
| (i) $x^2>9$ | (a) $(-\infty,-3)\cup(3,\infty)$ |
| (ii) $x^2\le 9$ | (b) $[-3,3]$ |
| (iii) $|x|<3$ | (c) $(-3,3)$ |
| (iv) $|x|\ge 3$ | (d) $(-\infty,-3]\cup[3,\infty)$ |

<details><summary>Answer</summary>

**(i) → (a), (ii) → (b), (iii) → (c), (iv) → (d).** In each case use $x^2\,\square\,9\iff |x|\,\square\,3$. Strict $>$ excludes $\pm3$, non-strict $\le$ includes them, $|x|<3$ is the open interval, and $|x|\ge3$ is the union of two closed rays.

</details>

### 20. Which statements are true?

For the system $x\ge 0$, $y\ge 0$, $x+y\le 4$, $x-y\ge 0$, decide which statements are true:

- (i) The point $(2,2)$ lies in the region.
- (ii) The region is bounded only by the axes and the line $x+y=4$.
- (iii) The region is a triangle with vertices $(0,0)$, $(2,2)$ and $(4,0)$.
- (iv) The point $(3,1)$ lies in the region.

<details><summary>Answer</summary>

**(i), (iii) and (iv) are true; (ii) is false.** At $(2,2)$: $2+2=4\le4$ and $2-2=0\ge0$. At $(3,1)$: $3+1=4\le4$ and $3-1=2\ge0$. Intersecting $x=y$ with $x+y=4$ gives $(2,2)$; intersecting $y=0$ with $x+y=4$ gives $(4,0)$; together with the origin these form a triangle. Statement (ii) ignores the fourth boundary $x-y=0$, which removes the upper-left part of the triangle — for example $(1,3)$ satisfies $x+y=4$ but fails $x-y\ge0$.

</details>

## Review by error, not by score

| If you missed… | Revisit | Then retry |
| --- | --- | --- |
| 1–3 or 11–12 | Inequalities and the number line | Write the chain, apply each operation to all parts, and check the sign of the divisor. |
| 4, 13 or 18 | Linear inequalities in one variable | Build a sign table; never cross-multiply by an unknown sign or keep a pole. |
| 5, 9 or 16–17 | Modulus and squares | Convert to distance or $|x|<k$ before writing the interval. |
| 6–7, 19–20 | Systems of inequalities and graphs | Test a point off each line and verify every vertex in all inequalities. |
| 10, 14–15 | Applications | Define variables with units, translate signs, then test a boundary value. |

<learning-block type="recap" title="Ready to move on?">

Aim for at least 15 correct out of 20 with a written method choice for every question. A question you answer correctly but cannot justify is a revision target, not a mastered topic.

</learning-block>
