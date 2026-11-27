## Why the corner matters

In the graphical method, we evaluate the objective function at corner points and pick the best value. This can feel like a shortcut, so it is worth understanding why it works and when it needs care.

A linear objective function $Z=ax+by$ has level curves $ax+by=k$, which are parallel straight lines. As $k$ changes, the line slides across the plane without changing direction. Over a convex feasible region, the extreme value of $k$ reached while still touching the region occurs at a vertex. If an edge of the region is parallel to the level lines, every point on that edge gives the same value of $Z$, including the two vertices at its ends.

This is why the graphical method is not guesswork. It is a consequence of linearity and convexity.

## Convexity of the feasible region

A region is **convex** if, for any two points in the region, the entire line segment joining them also lies in the region. The feasible region of a linear programme is always convex because it is the intersection of half-planes, and each half-plane is convex.

Convexity rules out shapes with dents or holes. That matters for optimisation: if you move along a straight edge of a convex polygon, the value of a linear function changes steadily, so it cannot create a hidden interior maximum unless the function is constant along that direction.

You do not need a formal proof for board-level problems, but you should be able to use the consequence: check corner points, and check whether an edge is parallel to the objective level lines.

## Bounded and unbounded regions

A **bounded** feasible region can be enclosed in a circle. It has finite area and a finite set of corner points. In this case, a linear objective has both a maximum and a minimum over the region, found by evaluating corner points.

An **unbounded** feasible region extends indefinitely. It still has corner points, but you must be careful: a maximum may not exist if the region opens in the direction where $Z$ increases, and a minimum may not exist if it opens in the direction where $Z$ decreases.

For an unbounded region, the corner-point test gives candidates. You then confirm by checking whether the objective can improve without bound in the feasible direction. For a minimisation problem with an unbounded feasible region, if the open half-plane $ax+by < M$ (where $M$ is the smallest corner value) has no point in common with the feasible region, then $M$ is the minimum. A similar check applies for maximisation.

## Worked example: bounded region, maximisation

Maximise $Z=4x+5y$ subject to
$$
x+y\le 8, \qquad 3x+2y\le 21, \qquad x\ge 0,\; y\ge 0.
$$

### Corner points

Boundaries: $x+y=8$ has intercepts $(8,0),(0,8)$. $3x+2y=21$ has intercepts $(7,0),(0,10.5)$.

Intersection of $x+y=8$ and $3x+2y=21$: from $y=8-x$, substitute: $3x+2(8-x)=21$, so $3x+16-2x=21$, giving $x=5$, $y=3$.

Feasible corners: $(0,0)$, $(7,0)$, $(5,3)$, $(0,8)$. Note $(8,0)$ is not feasible because $3(8)=24\not\le 21$, and $(0,10.5)$ is not feasible because $10.5\not\le 8$.

### Evaluation

| Corner point | $Z=4x+5y$ |
| --- | --- |
| $(0,0)$ | $0$ |
| $(7,0)$ | $28$ |
| $(5,3)$ | $35$ |
| $(0,8)$ | $40$ |

The maximum is $Z=40$ at $(0,8)$.

### Sanity check

At $(0,8)$, constraints are $8\le 8$ and $16\le 21$, both satisfied. The objective coefficient of $y$ is larger than that of $x$, and the feasible region allows a large $y$ value at $x=0$, so the result is reasonable. Also check a nearby interior point $(1,6)$: feasible since $7\le 8$ and $15\le 21$, and $Z=34<40$.

<learning-block type="mistake" title="Assuming the maximum always exists in an unbounded region">
In an unbounded feasible region, a corner-point evaluation may give a largest value among corners, but that value may not be the true maximum. For example, if the region extends upward and $Z=x+y$ is being maximised, you can make $Z$ arbitrarily large by moving farther into the region. Always perform the unboundedness check: for maximisation, test whether the half-plane $ax+by>M$ has any feasible point. If it does, there is no maximum.
</learning-block>

## Try it yourself

1. Find the minimum value of $Z=3x+2y$ subject to $x+y\ge 4$, $x+2y\ge 5$, $x\ge 0$, $y\ge 0$, if it exists.

<details><summary>Show the reasoning</summary>

Intersection of $x+y=4$ and $x+2y=5$: subtracting gives $y=1$, $x=3$. Corner points of the unbounded feasible region are $(0,4)$? Check $(0,4)$ in $x+2y\ge 5$: $8\ge 5$ yes. Also $(5,0)$: $5\ge 4$ yes. $(0,2.5)$ fails $x+y\ge 4$. $(4,0)$ fails $x+2y\ge 5$. So corners are $(0,4)$, $(3,1)$, $(5,0)$.

Values: $(0,4)\to 8$, $(3,1)\to 11$, $(5,0)\to 15$. Smallest corner value is $8$.

Unbounded check for minimisation: test $3x+2y < 8$. This open half-plane has no point in common with the feasible region (it lies below the level line through $(0,4)$, and the feasible region lies on or above it in the direction that keeps constraints satisfied). Therefore the minimum is $Z=8$ at $(0,4)$.

</details>

2. A feasible region has corner points $(0,0)$, $(4,0)$, $(3,3)$, and $(0,4)$. For $Z=ax+by$, find the condition on positive $a,b$ for which the maximum occurs at every point on the segment joining $(3,3)$ and $(0,4)$.

<details><summary>Show the reasoning</summary>

The maximum occurs along the edge joining $(3,3)$ and $(0,4)$ when both endpoints give the same objective value and that value is maximal.

Equality: $3a+3b=4b$, so $3a=b$.

Check maximality with $b=3a$: $Z(3,3)=12a$, $Z(0,4)=12a$, $Z(4,0)=4a$, $Z(0,0)=0$. Since $a>0$, the value $12a$ is indeed the maximum.

The condition is $b=3a$ (equivalently, $a:b=1:3$).

</details>

3. Does $Z=x+y$ have a maximum over the region $x-y\ge 0$, $-x+y\ge 1$, $x\ge 0$, $y\ge 0$? Explain.

<details><summary>Show the reasoning</summary>

The constraints $x-y\ge 0$ and $-x+y\ge 1$ mean $x\ge y$ and $y\ge x+1$. Together they imply $x\ge x+1$, which is impossible.

The feasible region is empty. Therefore there is no point at which $Z$ can be evaluated as a feasible solution, so the problem has no maximum and no minimum. It is infeasible.

</details>

## Remember

- The corner point theorem applies because a linear objective has parallel level lines and the feasible region of an LPP is convex.
- A bounded feasible region guarantees both maximum and minimum values of a linear objective.
- An unbounded feasible region requires an extra check: confirm that the objective cannot improve indefinitely in a feasible direction.
- If constraints contradict each other, the feasible region is empty and the LPP is infeasible. In the next module, we examine these and other special cases in detail.