## From inequalities to a picture

After formulating a linear programming problem, we need a way to see which choices are allowed. For two decision variables, each linear constraint corresponds to a region in the coordinate plane. The graphical method uses this picture to locate the best allowed point.

The graph does not replace the algebra. It organises it. Every line you draw represents an equality boundary, and every shaded side represents an inequality condition. The solution emerges where the geometry and the objective function agree.

## Graphing a linear constraint

Consider a constraint such as
$$
2x + y \le 40, \qquad x\ge 0, \; y\ge 0.
$$

First draw the boundary line $2x+y=40$. Two points are enough for a straight line: when $x=0$, $y=40$; when $y=0$, $x=20$. Plot $(0,40)$ and $(20,0)$ and join them.

Next decide which side of the line satisfies the inequality. The test-point method is reliable: choose a point not on the line, usually $(0,0)$ if the line does not pass through it. Substituting $(0,0)$ gives $0\le 40$, which is true. Therefore the half-plane containing the origin satisfies the constraint.

If the test point gives a false statement, the feasible side is the opposite half-plane. If the boundary line passes through the origin, pick another easy point such as $(1,0)$ or $(0,1)$.

For $\ge$ constraints, the boundary is included in the same way (the line is solid because equality is allowed), but the accepted side is the one where the expression is large enough.

## The feasible region

The **feasible region** is the set of all points $(x,y)$ that satisfy every constraint simultaneously. It is the common shaded area, often a polygon in the first quadrant for bounded resource problems.

A point outside the feasible region may satisfy one constraint but violates another. Such a point is not a candidate solution, no matter how attractive its objective value looks.

The points where boundary lines intersect are called **corner points** or **vertices**. They matter because, for a linear objective function over a convex polygonal feasible region, the optimal value occurs at a corner point, or along a boundary segment joining two corner points with the same optimal value. This is the **corner point theorem** used in the graphical method.

The theorem is plausible from the geometry of level lines. For $Z=ax+by$, the equation $Z=k$ is a straight line. Changing $k$ slides this line parallel to itself. The last point of a bounded feasible region touched by this sliding line as $Z$ increases (for maximisation) or decreases (for minimisation) is a vertex, unless the line lies along an edge.

## Worked example: solving by corner points

Solve graphically: maximise
$$
Z = 30x + 20y
$$
subject to
$$
2x + y \le 40, \qquad x + 2y \le 50, \qquad x\ge 0,\; y\ge 0.
$$

### Step 1: Draw the boundaries

For $2x+y=40$: intercepts are $(20,0)$ and $(0,40)$.

For $x+2y=50$: intercepts are $(50,0)$ and $(0,25)$.

Both inequalities include the origin side, and $x\ge 0, y\ge 0$ restrict us to the first quadrant.

### Step 2: Find the corner points

The feasible region has vertices at $(0,0)$, $(20,0)$, $(0,25)$, and the intersection of $2x+y=40$ and $x+2y=50$.

Solve the intersection:
$$
2x+y=40 \implies y=40-2x.
$$
Substitute into $x+2y=50$:
$$
x+2(40-2x)=50 \implies x+80-4x=50 \implies -3x=-30 \implies x=10.
$$
Then $y=40-20=20$. The intersection is $(10,20)$.

### Step 3: Evaluate the objective

| Corner point | $Z=30x+20y$ |
| --- | --- |
| $(0,0)$ | $0$ |
| $(20,0)$ | $600$ |
| $(10,20)$ | $30(10)+20(20)=700$ |
| $(0,25)$ | $500$ |

The maximum value is $Z=700$ at $(x,y)=(10,20)$.

### Sanity check

The point $(10,20)$ satisfies both constraints: $2(10)+20=40\le 40$ and $10+2(20)=50\le 50$. A nearby feasible point, say $(10,19)$, gives $Z=680$, which is smaller. A point with larger $Z$, say $(20,20)$ giving $Z=1000$, violates $2x+y\le 40$ because $60\not\le 40$. The solution is therefore both feasible and optimal among the corners.

<learning-block type="mistake" title="Testing only intercepts">
Intercepts of individual constraint lines are not automatically corner points of the feasible region. A point like $(50,0)$ lies on $x+2y=50$, but it fails $2x+y\le 40$. Always check each candidate corner against every constraint, and include intersections of constraint boundaries with each other, not just with the axes.
</learning-block>

## Try it yourself

1. Graphically determine the feasible corner points for: $x+y\le 6$, $x+2y\le 8$, $x\ge 0$, $y\ge 0$.

<details><summary>Show the reasoning</summary>

Boundaries: $x+y=6$ has intercepts $(6,0),(0,6)$; $x+2y=8$ has intercepts $(8,0),(0,4)$.

Intersection of $x+y=6$ and $x+2y=8$: subtracting gives $y=2$, then $x=4$. So $(4,2)$.

Check candidates against all constraints: $(0,0)$, $(6,0)$ satisfies $6\le 8$, $(4,2)$ satisfies both, $(0,4)$ satisfies $4\le 6$. The point $(8,0)$ fails $x+y\le 6$, and $(0,6)$ fails $x+2y\le 8$.

Feasible corner points are $(0,0)$, $(6,0)$, $(4,2)$, and $(0,4)$.

</details>

2. Maximise $Z=5x+3y$ subject to $x+y\le 6$, $x+2y\le 8$, $x\ge 0$, $y\ge 0$.

<details><summary>Show the reasoning</summary>

Using the corner points from Question 1:

| Corner point | $Z=5x+3y$ |
| --- | --- |
| $(0,0)$ | $0$ |
| $(6,0)$ | $30$ |
| $(4,2)$ | $26$ |
| $(0,4)$ | $12$ |

The maximum is $Z=30$ at $(6,0)$.

</details>

3. Minimise $C=4x+3y$ subject to $x+y\ge 5$, $2x+y\ge 6$, $x\ge 0$, $y\ge 0$.

<details><summary>Show the reasoning</summary>

Find boundary intersections. For $x+y=5$ and $2x+y=6$, subtracting gives $x=1$, then $y=4$. Intercepts relevant to the feasible side ($\ge$ constraints in first quadrant, unbounded above/right): $x+y=5$ gives $(5,0),(0,5)$; $2x+y=6$ gives $(3,0),(0,6)$.

Check which intercepts satisfy both constraints: $(0,6)$ gives $0+6\ge 5$ yes; $(5,0)$ gives $10\ge 6$ yes; $(3,0)$ fails $3\ge 5$; $(0,5)$ fails $5\ge 6$.

Feasible corner points are $(0,6)$, $(1,4)$, and $(5,0)$.

Evaluate $C=4x+3y$: $(0,6)\to 18$, $(1,4)\to 16$, $(5,0)\to 20$. The minimum among these corners is $C=16$ at $(1,4)$. Since the feasible region is unbounded but the objective increases as we move far away in the feasible direction, this corner minimum is the actual minimum.

</details>

## Remember

- Draw the boundary line for each constraint, then use a test point to choose the correct half-plane.
- The feasible region is the common region satisfying all constraints, including non-negativity.
- For a linear objective over a polygonal feasible region, check the value of $Z$ at every corner point.
- An intercept or intersection is a candidate corner only if it satisfies every constraint. Next, we examine why corner points matter and what kinds of feasible regions can occur.