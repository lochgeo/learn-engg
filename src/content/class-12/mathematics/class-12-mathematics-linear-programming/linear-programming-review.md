## Your study plan

Linear programming problems reward a disciplined routine: define variables, translate constraints, draw or reason about the feasible region, then evaluate the objective. A focused review takes about **90 minutes**.

| Time | Focus | What to practise |
| --- | --- | --- |
| 15 min | Formulation | Turning word problems into variables, objective, constraints, and non-negativity |
| 15 min | Graphical solution | Boundary lines, test points, feasible region, corner points |
| 15 min | Corner-point optimisation | Evaluating $Z$, checking boundedness, reading level lines |
| 15 min | Special cases | Multiple optima, infeasibility, unbounded regions vs unbounded solutions |
| 30 min | Mastery check | Solve the questions below without looking at answers |

After each block, solve one small problem from memory. If you cannot explain why an inequality direction or corner point is correct, revisit that step before moving on.

## Which tool do I reach for?

| Clue in the question | Start with | Check before using it |
| --- | --- | --- |
| Word problem with products, costs, resources, or requirements | Formulation table: variables, objective, constraints, non-negativity | Units match; "at most" means $\le$, "at least" means $\ge$. |
| Two-variable LPP with inequalities | Graph boundary lines and use a test point | Test a point not on the boundary; include $x\ge 0, y\ge 0$. |
| Bounded feasible region | Corner point theorem: evaluate $Z$ at all vertices | Every candidate corner satisfies all constraints. |
| Unbounded feasible region | Evaluate corners, then perform the unboundedness check | For max, test $ax+by>M$; for min, test $ax+by<M$. |
| Same optimal value at two adjacent corners | Multiple optimal solutions along the edge | The edge must be feasible and parallel to the objective level line. |
| Contradictory constraints | Infeasibility check | Look for impossible combinations such as $x+y\le 1$ and $x+y\ge 3$. |
| Objective improves indefinitely in feasible direction | Unbounded solution | Distinguish from merely unbounded region. |

## Mastery check

Try each question before opening the answer. Use $Z$ for maximisation objectives and $C$ for minimisation objectives unless stated otherwise.

### 1. Formulating a resource problem

A small firm makes chairs and tables. Each chair needs $2$ hours of carpentry and $1$ hour of finishing. Each table needs $3$ hours of carpentry and $2$ hours of finishing. Available time is $60$ carpentry hours and $35$ finishing hours. Profit is Rs. $400$ per chair and Rs. $700$ per table. Formulate the LPP to maximise profit.

<details><summary>Answer and reasoning</summary>

Let $x$ be the number of chairs and $y$ the number of tables.

Maximise $Z=400x+700y$ subject to
$$
2x+3y\le 60,\qquad x+2y\le 35,\qquad x\ge 0,\; y\ge 0.
$$

Check: $(0,0)$ is feasible, and coefficients carry units of rupees per item.

</details>

### 2. Identifying a feasible corner

For the constraints $x+y\le 7$, $2x+y\le 10$, $x\ge 0$, $y\ge 0$, which of $(5,0)$, $(3,4)$, $(0,7)$ are feasible corner points?

<details><summary>Answer and reasoning</summary>

Test $(5,0)$: $5\le 7$, $10\le 10$ — feasible, and it lies on $2x+y=10$ and $y=0$.

Test $(3,4)$: $7\le 7$, $10\le 10$ — feasible, and it is the intersection of $x+y=7$ and $2x+y=10$.

Test $(0,7)$: $7\le 7$ but $7\le 10$ is true; however check intersection with $x=0$: $(0,7)$ is on $x+y=7$. It is feasible. But also check whether $(0,10)$ is a corner? No, $(0,10)$ fails $x+y\le 7$. So feasible corners include $(0,0),(5,0),(3,4),(0,7)$.

All three given points $(5,0)$, $(3,4)$, $(0,7)$ are feasible corner points.

</details>

### 3. Maximisation on a bounded region

Maximise $Z=6x+8y$ subject to $x+y\le 10$, $2x+y\le 16$, $x\ge 0$, $y\ge 0$.

<details><summary>Answer and reasoning</summary>

Intersection of $x+y=10$ and $2x+y=16$: subtracting gives $x=6$, $y=4$.

Feasible corners: $(0,0)$, $(8,0)$, $(6,4)$, $(0,10)$.

| Corner | $Z=6x+8y$ |
| --- | --- |
| $(0,0)$ | $0$ |
| $(8,0)$ | $48$ |
| $(6,4)$ | $68$ |
| $(0,10)$ | $80$ |

Maximum is $Z=80$ at $(0,10)$.

</details>

### 4. Minimisation on an unbounded region

Minimise $C=5x+4y$ subject to $x+2y\ge 10$, $3x+y\ge 15$, $x\ge 0$, $y\ge 0$.

<details><summary>Answer and reasoning</summary>

Intersection of $x+2y=10$ and $3x+y=15$: from $y=15-3x$, $x+30-6x=10$, $-5x=-20$, $x=4$, $y=3$.

Feasible corners: $(0,15)$ satisfies $30\ge 10$; $(10,0)$ satisfies $30\ge 15$; $(0,5)$ fails $5\ge 15$; $(5,0)$ fails $5\ge 10$. So corners are $(0,15)$, $(4,3)$, $(10,0)$.

Values: $(0,15)\to 60$, $(4,3)\to 32$, $(10,0)\to 50$. Smallest corner value is $32$.

Unbounded check: test $5x+4y<32$. This half-plane does not overlap the feasible region (the region lies on or above the level line through $(4,3)$ in the feasible direction). Therefore the minimum is $C=32$ at $(4,3)$.

</details>

### 5. Multiple optimal solutions

Maximise $Z=4x+6y$ subject to $2x+3y\le 18$, $x+y\le 7$, $x\ge 0$, $y\ge 0$.

<details><summary>Answer and reasoning</summary>

Intersection of $2x+3y=18$ and $x+y=7$: $y=7-x$, $2x+21-3x=18$, $-x=-3$, $x=3$, $y=4$.

Feasible corners: $(0,0)$, $(7,0)$, $(3,4)$, $(0,6)$.

Values: $(0,0)\to 0$, $(7,0)\to 28$, $(3,4)\to 36$, $(0,6)\to 36$.

Maximum is $Z=36$ at both $(3,4)$ and $(0,6)$. The objective line $4x+6y=36$ is the same as $2x+3y=18$, so every point on the feasible edge joining $(3,4)$ and $(0,6)$ is optimal.

</details>

### 6. Infeasibility

Show that the following LPP is infeasible: maximise $Z=x+2y$ subject to $x+y\le 2$, $x+y\ge 5$, $x\ge 0$, $y\ge 0$.

<details><summary>Answer and reasoning</summary>

The constraints require $x+y\le 2$ and $x+y\ge 5$ at the same time, which is impossible. Therefore the feasible region is empty and the problem is infeasible. No maximum exists.

</details>

### 7. Unbounded solution

Maximise $Z=3x+5y$ subject to $x-2y\le 2$, $x+y\ge 5$, $x\ge 0$, $y\ge 0$. Decide whether the maximum exists.

<details><summary>Answer and reasoning</summary>

The region is unbounded. Consider feasible points with large $y$: for fixed $x$, $x-2y\le 2$ is easier to satisfy when $y$ is large, and $x+y\ge 5$ is also satisfied. For example $(2,10)$ is feasible ($2-20\le 2$, $12\ge 5$) and gives $Z=56$. Increasing $y$ further keeps feasibility and increases $Z$. Therefore $Z$ has no maximum; the problem has an unbounded solution for maximisation.

</details>

### 8. A complete application

A diet must contain at least $12$ units of vitamin A and at least $8$ units of vitamin B. Food P costs Rs. $4$ per kg and provides $3$ units of A and $1$ unit of B per kg. Food Q costs Rs. $5$ per kg and provides $1$ unit of A and $2$ units of B per kg. Formulate and solve the LPP to minimise cost.

<details><summary>Answer and reasoning</summary>

Let $x$ kg of food P and $y$ kg of food Q be used.

Minimise $C=4x+5y$ subject to $3x+y\ge 12$, $x+2y\ge 8$, $x\ge 0$, $y\ge 0$.

Intersection of $3x+y=12$ and $x+2y=8$: $y=12-3x$, $x+24-6x=8$, $-5x=-16$, $x=16/5=3.2$, $y=12-9.6=2.4$.

Feasible corners: $(0,12)$, $(3.2,2.4)$, $(8,0)$.

Values: $(0,12)\to 60$, $(3.2,2.4)\to 12.8+12=24.8$, $(8,0)\to 32$.

Unbounded check: $4x+5y<24.8$ has no overlap with the feasible region. Minimum cost is Rs. $24.8$ at $(3.2,2.4)$.

</details>

### 9. Reading the objective

A feasible region has corners $(0,0)$, $(6,0)$, $(4,2)$, $(0,5)$. For which objective among $Z_1=2x+3y$ and $Z_2=3x+y$ is the maximum at a different corner? Give both maxima.

<details><summary>Answer and reasoning</summary>

For $Z_1=2x+3y$: $(0,0)=0$, $(6,0)=12$, $(4,2)=14$, $(0,5)=15$. Maximum $15$ at $(0,5)$.

For $Z_2=3x+y$: $(0,0)=0$, $(6,0)=18$, $(4,2)=14$, $(0,5)=5$. Maximum $18$ at $(6,0)$.

The maxima occur at different corners because the objectives weight $x$ and $y$ differently.

</details>

### 10. Justifying the corner-point method

Why is it enough to check corner points for a linear objective over a bounded convex polygonal feasible region?

<details><summary>Answer and reasoning</summary>

A linear objective $Z=ax+by$ has parallel straight level lines $ax+by=k$. As $k$ increases or decreases, the level line sweeps across the plane. Over a bounded convex polygon, the last point of contact in the direction of improvement is a vertex, or an entire edge if that edge is parallel to the level lines. Interior points cannot beat all boundary points because you can move along a direction of improvement until reaching the boundary. Therefore checking all corner points finds the optimum, and equal corner values on an edge indicate multiple optima.

</details>

## Self-check

You are ready for the timed set when you can:

- formulate an LPP from a word problem with correct variables, objective, constraint directions, and non-negativity;
- graph constraints, identify the feasible region, and compute all corner points;
- evaluate a linear objective at corners and state the optimal point and value clearly;
- perform the unboundedness check when the feasible region is not bounded;
- recognise multiple optimal solutions, infeasibility, and unbounded solutions;
- explain why the corner-point method works for linear objectives on convex feasible regions.