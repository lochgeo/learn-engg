## When the answer is not a single corner

The corner-point method gives a clean answer when a bounded feasible region has a unique best vertex. Real formulations do not always behave so neatly. A problem may have many optimal points, no optimal point, or no feasible point at all. Recognising these cases is as important as computing a maximum.

## Multiple optimal solutions

If the objective level line $Z=ax+by=k$ is parallel to a boundary edge of the feasible region, then every point on that edge gives the same value of $Z$. When that common value is optimal, the LPP has **infinitely many optimal solutions**.

Algebraically, this happens when two corner points give the same optimal value and the segment joining them is feasible. The optimal set is then that entire segment.

For example, if $Z=2x+4y$ is maximised and the edge joining $(0,5)$ and $(3,4)$ lies on $x+2y=10$, then $Z=20$ at every point on that edge. Writing only one of those corners as "the" answer is incomplete.

## Infeasible problems

A problem is **infeasible** when no point satisfies all constraints simultaneously. The feasible region is empty.

Infeasibility usually signals contradictory requirements: demand exceeds capacity, or two constraints force a variable to be both large and small at the same time. Graphically, the shaded regions have no common intersection.

An infeasible LPP has no solution — not zero, not infinity, but no feasible point at all.

## Unbounded solutions

An unbounded feasible region does not automatically mean an unbounded objective. The objective may still have a minimum or maximum. An **unbounded solution** occurs when the objective can be improved indefinitely while remaining feasible.

To confirm an unbounded maximisation, find the largest corner value $M$ and test the open half-plane $ax+by>M$. If that half-plane overlaps the feasible region, there is no maximum. For minimisation, test $ax+by<M$ where $M$ is the smallest corner value.

## Worked example: identifying a special case

Consider the LPP: maximise $Z=3x+6y$ subject to
$$
x+2y\le 12, \qquad 2x+y\le 12, \qquad x\ge 0,\; y\ge 0.
$$

### Corner points

Boundaries: $x+2y=12$ gives $(12,0),(0,6)$; $2x+y=12$ gives $(6,0),(0,12)$.

Intersection: from $x=12-2y$, substitute into $2x+y=12$: $24-4y+y=12$, so $-3y=-12$, $y=4$, $x=4$. Intersection is $(4,4)$.

Feasible corners: $(0,0)$, $(6,0)$, $(4,4)$, $(0,6)$.

### Evaluation

| Corner point | $Z=3x+6y$ |
| --- | --- |
| $(0,0)$ | $0$ |
| $(6,0)$ | $18$ |
| $(4,4)$ | $36$ |
| $(0,6)$ | $36$ |

The maximum value is $36$ at both $(4,4)$ and $(0,6)$. Since the objective line $3x+6y=36$, or $x+2y=12$, coincides with the boundary edge joining $(4,4)$ and $(0,6)$, every point on that edge is optimal.

### Sanity check

Take a point on the edge, say $(2,5)$: it satisfies $x+2y=12\le 12$ and $2x+y=9\le 12$, and $Z=3(2)+6(5)=36$. Take a point just off the edge but feasible, say $(2,4)$: $Z=30<36$. The multiple-optimum conclusion is correct.

## Applications: reading a problem as an LPP

Linear programming models appear wherever a linear objective is limited by linear resource or requirement constraints. Common board-exam contexts include:

| Context | Typical variables | Typical objective | Typical constraints |
| --- | --- | --- | --- |
| Manufacturing | units of products | maximise profit | machine hours, raw material, labour |
| Diet/cost | quantities of foods | minimise cost | minimum nutrients, maximum intake |
| Transport | units shipped on routes | minimise cost | supply, demand, capacity |
| Allocation | hours or amounts assigned | maximise output or minimise time | availability, minimum requirements |

The mathematics is the same in each case. The modelling step is to keep units consistent and to represent each sentence of the problem by the correct variable, coefficient, or inequality.

<learning-block type="mistake" title="Reporting an unbounded region as an unbounded solution">
"Unbounded feasible region" and "unbounded solution" are different statements. A feasible region can extend infinitely while the objective still has a finite minimum or maximum. For example, minimising $Z=2x+y$ over $x+y\ge 4$, $x\ge 0$, $y\ge 0$ gives a finite minimum at a corner, even though the region is unbounded. Always test the objective in the unbounded direction before concluding that no optimum exists.
</learning-block>

## Try it yourself

1. Maximise $Z=x+y$ subject to $x+y\le 1$, $x+y\ge 3$, $x\ge 0$, $y\ge 0$. What kind of special case is this?

<details><summary>Show the reasoning</summary>

The constraints require $x+y\le 1$ and $x+y\ge 3$ simultaneously. This is impossible because no number can be at most $1$ and at least $3$ at the same time.

The feasible region is empty. The problem is **infeasible**.

</details>

2. Maximise $Z=2x+3y$ subject to $x+2y\ge 8$, $3x+y\ge 9$, $x\ge 0$, $y\ge 0$. Determine whether a maximum exists.

<details><summary>Show the reasoning</summary>

The feasible region is unbounded (it extends to large $x,y$ values while satisfying the $\ge$ constraints). Corner points come from intersections: $x+2y=8$, $3x+y=9$. From $y=9-3x$, substitute: $x+2(9-3x)=8$, $x+18-6x=8$, $-5x=-10$, $x=2$, $y=3$. Other feasible corners on axes: $(0,9)$ satisfies $0+18\ge 8$; $(8,0)$ satisfies $24\ge 9$; $(0,4)$ fails $4\ge 9$; $(3,0)$ fails $3\ge 8$. Corners are $(0,9)$, $(2,3)$, $(8,0)$.

Corner values: $(0,9)\to 27$, $(2,3)\to 13$, $(8,0)\to 16$. Largest corner value is $27$.

Now test unboundedness: can $2x+3y>27$ in the feasible region? Yes. For example $(0,10)$ is feasible and gives $Z=30$. Since we can increase $y$ indefinitely while remaining feasible, $Z$ has no maximum. It is an **unbounded solution** for maximisation.

</details>

3. Minimise $Z=x+2y$ subject to $2x+y\ge 3$, $x+2y\ge 6$, $x\ge 0$, $y\ge 0$. State the optimal value and where it occurs.

<details><summary>Show the reasoning</summary>

Intersections: $2x+y=3$ and $x+2y=6$. From $y=3-2x$, substitute: $x+2(3-2x)=6$, $x+6-4x=6$, $-3x=0$, $x=0$, $y=3$. The boundary $x+2y=6$ meets the axes at $(0,3)$ and $(6,0)$; the boundary $2x+y=3$ meets the axes at $(0,3)$ and $(1.5,0)$, but $(1.5,0)$ fails $x+2y\ge 6$. Checking the feasible corners gives $(0,3)$ and $(6,0)$.

Values: $(0,3)\to 6$, $(6,0)\to 6$. Both give $Z=6$.

The objective line $x+2y=6$ coincides with the constraint boundary $x+2y=6$. Since the feasible region lies on or above this boundary and the region is unbounded above, the minimum is $Z=6$ at every point on the segment joining $(0,3)$ and $(6,0)$ that lies on $x+2y=6$ and satisfies $2x+y\ge 3$. That segment is exactly from $(0,3)$ to $(6,0)$.

There are infinitely many optimal solutions, with minimum value $Z=6$.

</details>

## Remember

- Multiple optimal solutions occur when the objective level line is parallel to a feasible boundary edge that contains the optimal value.
- An infeasible LPP has no common feasible point; an unbounded solution means the objective can improve without limit.
- An unbounded feasible region does not imply an unbounded solution — always test the objective.
- In applications, the modelling choices (variables, units, inequality directions) determine whether the mathematical problem matches the real situation. The review module next helps you choose the right tool quickly across all these cases.