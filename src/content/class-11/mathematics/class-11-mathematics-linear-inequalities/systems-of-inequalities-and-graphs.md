## Two conditions at once

A concert rule might say "you must be at least 12 years old, and if you are under 16 you must be accompanied". Each clause keeps part of the number line; together they leave only the overlap. With two variables the same idea becomes a picture. Each linear inequality keeps one **half-plane**, and a **system** keeps the region where all the half-planes overlap. That overlap is called the **feasible region**: every point in it satisfies every condition at once.

## 1. The boundary line and its two sides

For $a x+b y=c$, with $a$ and $b$ not both zero, the corresponding straight line divides the plane into two half-planes. Write $f(x,y)=a x+b y-c$. On the line $f=0$; on one side $f>0$ and on the other $f<0$. Why is the sign constant on each side? Take any point $P$ off the line and any point $Q$ on it. Along the segment $PQ$ the expression $f$ changes *linearly* with the parameter and vanishes exactly when the segment crosses the line, so it cannot change sign before that crossing.

To choose the correct side, use a **test point** not on the line:

- if $c\ne 0$, the origin $(0,0)$ is off the line and is usually easiest;
- if $c=0$, the line passes through the origin, so try $(0,1)$ when $b\ne 0$, or $(1,0)$ otherwise.

Substitute the test point into the inequality. If the statement is true, shade the side containing that point; if false, shade the opposite side.

A strict inequality ($<$ or $>$) has a **dashed** boundary: points on the line are not solutions. A non-strict inequality ($\le$ or $\ge$) has a **solid** boundary and the line itself is included.

## 2. The grammar of a system

A system such as

$$
\begin{cases}
x+y\le 4,\\
x-y\ge 0,\\
x\ge 0,\\
y\ge 0
\end{cases}
$$

means "and": a point must satisfy all four statements. Its solution set is the *intersection* of the four half-planes. A union ("or") is a different object and is not what a brace denotes.

Regions may be **bounded**, forming a polygon, or **unbounded**, stretching away indefinitely. Two conditions can also contradict each other, leaving an empty region. Never assume a system has a neat closed polygon just because the inequalities look tidy.

## 3. Worked example: find and check the region

Solve the four-inequality system written above and identify its vertices.

**Line 1, $x+y=4$.** It passes through $(4,0)$ and $(0,4)$. The origin gives $0\le 4$, true, so shade the side containing the origin — below and to the left of the line. The boundary is solid.

**Line 2, $x-y=0$.** This is the diagonal $y=x$ through $(0,0)$. The origin lies *on* the line, so test $(1,0)$: $1-0=1\ge 0$, true. Shade the side containing $(1,0)$, which is the region $y\le x$. The boundary is solid.

**Lines 3 and 4, $x\ge 0$ and $y\ge 0$.** Keep the first quadrant, including both axes.

The intersection is a triangle. Its vertices come from intersecting the relevant boundary lines pairwise:

| Pair of boundaries | Vertex | Check |
| --- | --- | --- |
| $x=0$ and $y=0$ | $(0,0)$ | $0\le4$, $0\ge0$ |
| $x+y=4$ and $x=y$ | $(2,2)$ | $4\le4$, $0\ge0$ |
| $x+y=4$ and $y=0$ | $(4,0)$ | $4\le4$, $4\ge0$ |

**Sanity check.** The point $(1,1)$ satisfies $1+1\le4$ and $1-1\ge0$, so it lies inside — as the triangle predicts. The point $(1,3)$ satisfies $1+3=4\le4$ but fails $1-3=-2\ge0$, so it lies on line 1 but outside the system: the diagonal really does cut off part of the triangle. The point $(3,1)$ satisfies both and lies on the boundary segment from $(2,2)$ to $(4,0)$.

## 4. Empty and unbounded regions

Consider $x+y\ge 3$ together with $x+y\le 1$. The boundaries are parallel and the allowed sides point away from each other, so no point can satisfy both: the solution set is $\varnothing$. This is the graphical version of a contradiction.

Now consider $x\ge 0$, $y\ge 0$, $x+y\ge 2$. The region is a half-plane corner in the first quadrant that extends outward without limit; $(100,100)$ belongs to it. There are boundary rays but no enclosing polygon, so questions about "maximum" values may have no answer at all.

## 5. A common mistake

<learning-block type="mistake" title="Testing a point that lies on the boundary">

If $c=0$ and you test the origin, every inequality becomes $0\,\square\,0$, which cannot tell you which side to shade — the test point is *on* the line. Pick $(0,1)$ or $(1,0)$ instead. Two other frequent slips are drawing a solid line for a strict inequality and taking the union of two shaded sides when the brace demands their intersection. A final check is to substitute one point from your shaded region into every inequality: it must satisfy all of them.

</learning-block>

## 6. A graphical routine

1. Draw each boundary line using two convenient points.
2. Pick a test point off each line and decide which side to shade.
3. Use a dashed line for a strict inequality, solid for a non-strict one.
4. Shade the **intersection** of all the kept sides.
5. Find vertices from intersecting boundaries, verify each one, and state whether the region is bounded.

## Try it yourself

**1.** Describe the region $x+2y\le 6$, $x\ge 0$, $y\ge 0$ and list its vertices.

<details><summary>Show the reasoning</summary>

The line $x+2y=6$ meets the axes at $(6,0)$ and $(0,3)$. The origin satisfies $0\le 6$, so the kept side is below the line, limited to the first quadrant. The region is a triangle with vertices $(0,0)$, $(6,0)$ and $(0,3)$.

</details>

**2.** Does $(2,1)$ belong to the region $x-y\ge 0$, $x+y\le 4$?

<details><summary>Show the reasoning</summary>

Check both: $2-1=1\ge 0$ and $2+1=3\le 4$. Both hold, so the point is in the region. One satisfied inequality is never enough for a system.

</details>

**3.** Find the vertices of $0\le x\le 3$, $0\le y\le 2$.

<details><summary>Show the reasoning</summary>

The four boundaries form a rectangle in the first quadrant with vertices $(0,0)$, $(3,0)$, $(3,2)$ and $(0,2)$. It is bounded and includes its boundary because all inequalities are non-strict.

</details>

## Remember

- A line $ax+by=c$ splits the plane into two half-planes; a test point off the line selects one.
- "And" means intersection: a point must pass every inequality in the system.
- Dashed boundary for strict, solid boundary for non-strict.
- Verify each vertex in **all** inequalities before calling it part of the region.
- Regions can be bounded, unbounded or empty; inspect before assuming.

The next module puts these regions to work, translating real limits into systems and reading the answer back in the original units.
