## JEE Main sprint: how to use this set

This is a **50-minute, no-notes** practice set for Linear Programming. Do it after the chapter lessons and review module. Spend roughly 20 minutes on Section A, 12 minutes on Section B, 10 minutes on Section C, and 8 minutes on Section D. If a question takes more than 90 seconds without a clear plan, mark it and move on.

Before calculating, name the move: formulation, graph/corner, unboundedness check, or special-case identification. Most errors in linear programming come from a wrong inequality direction or a missed feasibility check.

## Conditions sheet

| Situation | Use | Check before using it |
| --- | --- | --- |
| Formulating from words | Variables, objective $Z=ax+by$, constraints, $x\ge 0,y\ge 0$ | "At most" $\to \le$; "at least" $\to \ge$; units consistent. |
| Graphing a constraint | Draw boundary line, test a point not on it | If the line passes through origin, use another test point. |
| Bounded feasible region | Evaluate $Z$ at every corner point | Candidate corner must satisfy all constraints. |
| Unbounded feasible region | Corner values + unboundedness check | Max: test $ax+by>M$; Min: test $ax+by<M$. |
| Two corners give same optimal $Z$ | Check edge between them | If edge is feasible and parallel to level line, infinitely many optima. |
| Contradictory constraints | Feasible region is empty | No solution exists; problem is infeasible. |

## Section A — 10 rapid MCQs

### 1. Constraint direction

A resource limit states that at most $60$ hours are available. If $3x+2y$ represents hours used, the correct constraint is:

- A. $3x+2y\ge 60$
- B. $3x+2y\le 60$
- C. $3x+2y=60$
- D. $3x+2y<60$

<details><summary>Answer</summary>

**B.** "At most 60 hours" means the total used cannot exceed 60, so $3x+2y\le 60$. Equality is allowed because using exactly 60 hours is possible.

</details>

### 2. Feasible point

Which point is feasible for $x+2y\le 10$, $2x+y\le 12$, $x\ge 0$, $y\ge 0$?

- A. $(5,3)$
- B. $(0,6)$
- C. $(4,4)$
- D. $(2,3)$

<details><summary>Answer</summary>

**D.** Check $(2,3)$: $2+6=8\le 10$ and $4+3=7\le 12$, so it is feasible. Option A fails because $5+6=11\not\le 10$. Option B fails because $12\not\le 10$. Option C fails because $4+8=12\not\le 10$.

</details>

### 3. Corner point

The intersection of $x+y=6$ and $2x+y=9$ is:

- A. $(3,3)$
- B. $(4,2)$
- C. $(2,4)$
- D. $(3,2)$

<details><summary>Answer</summary>

**A.** Subtract $x+y=6$ from $2x+y=9$ to get $x=3$. Then $y=3$. Check: $3+3=6$ and $6+3=9$.

</details>

### 4. Objective value

For $Z=5x+4y$, the value at $(2,5)$ is:

- A. $30$
- B. $33$
- C. $28$
- D. $35$

<details><summary>Answer</summary>

**A.** $Z=5(2)+4(5)=10+20=30$.

</details>

### 5. Bounded region maximum

Maximise $Z=3x+2y$ subject to $x+y\le 4$, $x\le 3$, $y\le 3$, $x\ge 0$, $y\ge 0$. The maximum value is:

- A. $9$
- B. $10$
- C. $11$
- D. $12$

<details><summary>Answer</summary>

**C.** Feasible corners are $(0,0)$, $(3,0)$, $(3,1)$, $(1,3)$, $(0,3)$. Values: $0,9,11,9,6$. The maximum is $11$ at $(3,1)$.

</details>

### 6. Unbounded region

The feasible region defined by $x+y\ge 4$, $x\ge 0$, $y\ge 0$ is:

- A. bounded
- B. unbounded
- C. empty
- D. a single point

<details><summary>Answer</summary>

**B.** The region includes all points in the first quadrant on or above the line $x+y=4$, which extends indefinitely. It is unbounded.

</details>

### 7. Multiple optimal solutions

If $Z=ax+by$ has the same maximum value at two adjacent corner points of a bounded feasible region, then:

- A. the problem is infeasible
- B. there is no maximum
- C. every point on the edge joining those corners is optimal
- D. only those two points are optimal

<details><summary>Answer</summary>

**C.** For a linear objective, equal optimal values at adjacent vertices mean the objective level line is parallel to that edge. Every feasible point on the edge gives the same optimal value.

</details>

### 8. Infeasible LPP

The system $x+y\le 2$, $x\ge 3$, $y\ge 0$ has:

- A. a unique solution
- B. infinitely many solutions
- C. an unbounded solution
- D. no feasible solution

<details><summary>Answer</summary>

**D.** From $x\ge 3$ and $y\ge 0$, we get $x+y\ge 3$, which contradicts $x+y\le 2$. The feasible region is empty.

</details>

### 9. Minimum on an unbounded region

Minimise $Z=2x+y$ subject to $x+y\ge 5$, $x\ge 0$, $y\ge 0$. The minimum value is:

- A. $0$
- B. $5$
- C. $10$
- D. does not exist

<details><summary>Answer</summary>

**B.** Corners are $(0,5)$ and $(5,0)$. Values: $Z(0,5)=5$, $Z(5,0)=10$. The unboundedness check for minimisation: $2x+y<5$ has no overlap with the feasible region, so the minimum is $5$ at $(0,5)$.

</details>

### 10. Formulation

A manufacturer makes products A and B. Profit is Rs. $50$ per A and Rs. $40$ per B. Each A needs 2 units of material; each B needs 3 units. At most 120 units of material are available. The objective function is:

- A. $Z=2x+3y$
- B. $Z=120x+120y$
- C. $Z=50x+40y$
- D. $Z=40x+50y$

<details><summary>Answer</summary>

**C.** The objective is total profit: Rs. $50$ per unit of A and Rs. $40$ per unit of B, so $Z=50x+40y$. The material limit gives a constraint, not the objective.

</details>

## Section B — 5 numerical-value questions

### 11. Corner evaluation

Maximise $Z=7x+5y$ subject to $x+y\le 8$, $2x+y\le 11$, $x\ge 0$, $y\ge 0$. Find the maximum value of $Z$.

<details><summary>Answer</summary>

Intersection of $x+y=8$ and $2x+y=11$: subtracting gives $x=3$, $y=5$. Feasible corners: $(0,0)$, $(5.5,0)$ is not an integer point but is a corner; better use exact values: $(11/2,0)$, $(3,5)$, $(0,8)$. Values: $0$, $77/2=38.5$, $46$, $40$. The maximum value is $46$.

</details>

### 12. Minimum cost

Minimise $C=3x+9y$ subject to $x+3y\ge 9$, $2x+y\ge 8$, $x\ge 0$, $y\ge 0$. Find the minimum value of $C$.

<details><summary>Answer</summary>

Intersection of $x+3y=9$ and $2x+y=8$: from $y=8-2x$, $x+24-6x=9$, $-5x=-15$, $x=3$, $y=2$. Feasible corners: $(0,8)$, $(3,2)$, $(9,0)$. Values: $72$, $27$, $27$. The smallest corner value is $27$, and the unboundedness check confirms $3x+9y<27$ has no feasible overlap. The minimum value is $27$.

</details>

### 13. Intersection coordinate

The lines $3x+2y=18$ and $x+2y=10$ intersect at $(p,q)$. Find $p+q$.

<details><summary>Answer</summary>

Subtract the second equation from the first: $2x=8$, so $x=4$. Then $4+2y=10$ gives $y=3$. Thus $(p,q)=(4,3)$ and $p+q=7$.

</details>

### 14. Multiple optimum value

Maximise $Z=6x+9y$ subject to $2x+3y\le 18$, $x+y\le 8$, $x\ge 0$, $y\ge 0$. Find the maximum value of $Z$.

<details><summary>Answer</summary>

Intersection of $2x+3y=18$ and $x+y=8$: $y=8-x$, $2x+24-3x=18$, $x=6$, $y=2$. Feasible corners: $(0,0)$, $(8,0)$, $(6,2)$, $(0,6)$. Values: $0$, $48$, $54$, $54$. The maximum value is $54$.

</details>

### 15. Feasibility count

How many of the points $(0,0)$, $(2,3)$, $(4,1)$, $(1,4)$ are feasible for $x+y\le 5$, $2x+3y\le 12$, $x\ge 0$, $y\ge 0$?

<details><summary>Answer</summary>

Check $(0,0)$: $0\le 5$, $0\le 12$ — feasible. $(2,3)$: $5\le 5$, $13\le 12$ — not feasible. $(4,1)$: $5\le 5$, $11\le 12$ — feasible. $(1,4)$: $5\le 5$, $14\le 12$ — not feasible. The count is $2$.

</details>

## Section C — 3 assertion–reason questions

In each question, choose:

- A. Both Assertion and Reason are true, and Reason correctly explains Assertion.
- B. Both Assertion and Reason are true, but Reason does not correctly explain Assertion.
- C. Assertion is true, but Reason is false.
- D. Assertion is false, but Reason is true.

### 16. Corner point theorem

**Assertion (A):** In a bounded feasible region with a linear objective function, an optimal value occurs at a corner point.

**Reason (R):** The level lines of a linear objective function are parallel straight lines.

<details><summary>Answer</summary>

**A.** Both are true, and the Reason explains the Assertion. As parallel level lines sweep across a bounded convex polygon, the last feasible contact occurs at a vertex (or along an edge parallel to the level lines, which includes vertices).

</details>

### 17. Unbounded region

**Assertion (A):** If the feasible region of an LPP is unbounded, then the objective function has no maximum value.

**Reason (R):** An unbounded region extends infinitely in some direction.

<details><summary>Answer</summary>

**D.** The Assertion is false and the Reason is true. An unbounded feasible region can still have a finite maximum or minimum; an unboundedness check on the objective is required. The Reason is true but does not force the objective to be unbounded.

</details>

### 18. Infeasibility

**Assertion (A):** The LPP with constraints $x+y\ge 10$, $x\le 2$, $y\le 3$, $x\ge 0$, $y\ge 0$ is infeasible.

**Reason (R):** The constraints $x\le 2$ and $y\le 3$ imply $x+y\le 5$.

<details><summary>Answer</summary>

**A.** Both are true, and the Reason explains the Assertion. Since $x+y\le 5$ contradicts $x+y\ge 10$, no point can satisfy all constraints.

</details>

## Section D — 2 matching or multi-statement questions

### 19. Match the case to the conclusion

Match each LPP situation in Column I with the correct conclusion in Column II.

| Column I | Column II |
| --- | --- |
| (P) Two adjacent corners give the same maximum $Z$ and the edge is feasible | (1) Infeasible LPP |
| (Q) Constraints include $x+y\le 1$ and $x+y\ge 4$ | (2) Multiple optimal solutions |
| (R) Feasible region is unbounded and $Z=ax+by$ can increase without limit in the feasible direction | (3) Finite minimum may still exist |
| (S) Feasible region is unbounded but minimisation gives a smallest corner value passing the unboundedness check | (4) Unbounded solution for maximisation |

Choose the correct option:

- A. P-2, Q-1, R-4, S-3
- B. P-1, Q-2, R-3, S-4
- C. P-2, Q-4, R-1, S-3
- D. P-3, Q-1, R-4, S-2

<details><summary>Answer</summary>

**A.** P gives multiple optimal solutions along the edge (2). Q is contradictory, so infeasible (1). R means the objective has no finite maximum in that direction, an unbounded solution for maximisation (4). S describes a bounded-below objective over an unbounded region: a finite minimum may still exist (3).

</details>

### 20. Multi-statement question

Consider the LPP: maximise $Z=2x+y$ subject to $x+y\le 6$, $x+2y\le 10$, $x\ge 0$, $y\ge 0$.

Which statements are correct?

1. $(2,4)$ is a corner point of the feasible region.
2. The maximum value of $Z$ is $10$.
3. The maximum occurs at $(6,0)$.
4. The point $(4,2)$ is feasible.

- A. 1, 2 and 3 only
- B. 1, 3 and 4 only
- C. 2, 3 and 4 only
- D. 1, 2, 3 and 4

<details><summary>Answer</summary>

**B.** Find corners: $x+y=6$ and $x+2y=10$ intersect at $(2,4)$, so statement 1 is true. Feasible corners are $(0,0)$, $(6,0)$, $(2,4)$, $(0,5)$. Values of $Z=2x+y$: $0,12,8,5$. The maximum is $12$ at $(6,0)$, so statement 2 is false and statement 3 is true. Check $(4,2)$: $6\le 6$ and $8\le 10$, so statement 4 is true.

</details>

## If you got these wrong, revisit

| Question(s) | Revisit | Focus on |
| --- | --- | --- |
| 1, 10 | Formulating a linear programming problem | Translating words into variables, objective, and correct inequality directions. |
| 2, 15 | Graphical solution | Testing feasibility against every constraint, not just one boundary. |
| 3, 4, 5, 11, 13 | Graphical solution / Feasible regions and optimisation | Finding intersections accurately and evaluating $Z$ at all feasible corners. |
| 6, 7, 14, 16, 19 (P) | Feasible regions and optimisation / Special cases and applications | Corner point theorem, level lines, and multiple optimal solutions. |
| 8, 18, 19 (Q) | Special cases and applications | Identifying contradictory constraints and infeasibility. |
| 9, 12, 17, 19 (R,S) | Feasible regions and optimisation / Special cases and applications | Unbounded regions, unboundedness checks, and finite minima. |
| 20 | All modules | Combining corner finding, feasibility testing, and objective evaluation without mixing conditions. |