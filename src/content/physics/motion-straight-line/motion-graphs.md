## Graphs as the motion's biography

A position–time or velocity–time graph is not an illustration of a solved problem; it is often the fastest way to **read off** the whole story. Two facts make the graphs work, and they follow directly from the definitions in the opening module:

- On an $x$–$t$ graph, the **slope is velocity** (steepness = speed, sign = direction).
- On a $v$–$t$ graph, the **slope is acceleration** and the **signed area is displacement**.

When you solve from graphs, you are computing derivatives and integrals without ever writing a derivative or an integral sign.

## Reading a position–time graph

Look at three things, in order:

1. **Is the curve horizontal?** Then $x$ is not changing and the object is at rest.
2. **Is the curve a straight (slanting) line?** Constant velocity, equal to the slope. For a line through $(t_1,x_1)$ and $(t_2,x_2)$,
   $$
   v=\frac{x_2-x_1}{t_2-t_1}.
   $$
   A line falling left to right means velocity is negative: the object moves toward the origin.
3. **Is the curve bent?** Velocity is changing, so there is acceleration. If the curve is concave upward (getting steeper), velocity is increasing; concave downward means slowing (if slope is positive) or becoming more negative.

A curve that reaches a smooth **peak or trough** deserves special attention: the slope there is zero, so the instantaneous velocity is zero, while the object is still accelerating — exactly the situation at the top of a thrown ball, developed in Free fall and motion under gravity.

## Reading a velocity–time graph

- **Slope** gives acceleration: $a = \Delta v/\Delta t$ between two points on a straight segment.
- **Signed area** between the curve and the time axis gives displacement. Area above the axis counts positive; area below counts negative.
- Horizontal segments mean uniform velocity; slanting segments mean constant acceleration.

<learning-block type="concept" title="Why the area is displacement">

During a tiny interval $dt$, the displacement is $v\,dt$: a thin rectangle of height $v$. Adding (integrating) all those rectangles over the motion gives the total displacement, which is precisely the area under the curve. When $v$ goes below the axis, those rectangles are negative — the object is backtracking — and they must be **subtracted**, not ignored.

</learning-block>

## Worked example: dissect a piecewise graph

A bus starts from rest, speeds up uniformly to $8.0\ \text{m/s}$ in $4.0\ \text{s}$, cruises at that speed for the next $6.0\ \text{s}$, then brakes uniformly to rest in the final $2.0\ \text{s}$.

What does the $v$–$t$ graph look like? A trapezium: a rising line from $0$ to $8.0\ \text{m/s}$ over $0$–$4\ \text{s}$, a flat line at $8.0\ \text{m/s}$ over $4$–$10\ \text{s}$, a falling line back to zero over $10$–$12\ \text{s}$.

- Acceleration in phase 1: $a = 8.0/4.0 = +2.0\ \text{m/s}^2$.
- Acceleration in phase 2: $0$.
- Acceleration in phase 3: $a = (0-8.0)/2.0 = -4.0\ \text{m/s}^2$. Braking harder than accelerating is fine — nothing forces them to match.
- Displacement = signed area of the trapezium. Split into a triangle $\tfrac12(4.0)(8.0)=16\ \text{m}$, a rectangle $(6.0)(8.0)=48\ \text{m}$ and a triangle $\tfrac12(2.0)(8.0)=8.0\ \text{m}$:
  $$
  \Delta x = 16+48+8.0=72\ \text{m}.
  $$
- Average velocity for the trip: $\bar v = 72/12 = 6.0\ \text{m/s}$.

*Sanity check:* $\bar v$ should lie between $0$ and the maximum speed $8.0$ — it does. It sits closer to $8.0$ than to $0$ because half of the $12\ \text{s}$ was spent cruising at full speed.

## Sketching a graph from a description

Going the other way — words into a sketch — is a regular exam skill. Build the sketch from a table of slope decisions rather than freehand imagination:

| Given description | $v$–$t$ graph | $x$–$t$ graph |
| --- | --- | --- |
| At rest | horizontal at $v=0$ | horizontal at some $x$ |
| Constant velocity, $+x$ | horizontal at $v>0$ | straight rising line |
| Constant velocity, $-x$ | horizontal at $v<0$ | straight falling line |
| Speeding up from rest | rising straight line from $0$ | upward-bending curve |
| Slowing to a stop | falling straight line to $0$ | curve flattening to horizontal |
| Moving, then reversing | line crosses the $t$ axis | curve peaks (or dips) then bends back |

The axis-crossing point of a $v$–$t$ graph is where the object reverses direction, and correspondingly the peak of the $x$–$t$ curve. Locating that one event often answers an entire question.

<learning-block type="mistake" title="Reading an x–t curve as a path">

A common error is treating the shape of an $x$–$t$ graph as the track the object travels on. A horizontal $x$–$t$ line does not mean a flat road, and a parabola does not mean a curved route: the motion is one-dimensional, along a single line, by construction. The graph is a record of *position* against *clock time*, and only its slope and values carry meaning. Similarly, the **area under an $x$–$t$ curve has no standard physical meaning** — it is not distance travelled. Area belongs to the $v$–$t$ graph.

</learning-block>

## Try it yourself

**1. An elevator’s $v$–$t$ graph starts at $0$, rises linearly to $+3.0\ \text{m/s}$ in $2.0\ \text{s}$, stays at $+3.0\ \text{m/s}$ for $5.0\ \text{s}$, then falls linearly to $0$ in $3.0\ \text{s}$. Find the total displacement and the acceleration in each phase.**

<details><summary>Show the reasoning</summary>

Area $=\tfrac12(2.0)(3.0)+(5.0)(3.0)+\tfrac12(3.0)(3.0)=3.0+15+4.5=22.5\ \text{m}$. The lift ends $22.5\ \text{m}$ above its starting floor.

Accelerations: $\tfrac{3.0}{2.0}=+1.5\ \text{m/s}^2$ while speeding up, then $0$ at cruise, then $(0-3.0)/3.0=-1.0\ \text{m/s}^2$ while stopping. All are modest and sensible for a passenger lift.

</details>

**2. On an $x$–$t$ graph, position falls steadily from $+10\ \text{m}$ to $-4\ \text{m}$ between $t=0$ and $t=7.0\ \text{s}$. Describe the motion and give the velocity.**

<details><summary>Show the reasoning</summary>

A straight falling line means constant negative velocity. $v=(-4-10)/7.0=-2.0\ \text{m/s}$. The object moves in the $-x$ direction at $2.0\ \text{m/s}$, passing the origin partway through the interval. Nothing about the motion changes; the sign does all the directional work.

</details>

**3. A ball is tossed straight up. Sketch its $v$–$t$ and $x$–$t$ graphs (upward positive), marking the top of the flight.**

<details><summary>Show the reasoning</summary>

Velocity starts positive, falls linearly (constant $a=-g$), crosses zero at the top, and continues falling linearly negative. The $v$–$t$ graph is one straight line crossing the time axis.

Position rises as a downward-opening parabola, peaking exactly where the $v$–$t$ line crosses the axis. After the peak it bends back down toward the launch height. The extrapolation of the straight $v$–$t$ line to negative $v$ is the graph’s quiet reminder that gravity never switched off at the top.

</details>

## Remember

- Slope of $x$–$t$ is velocity; slope of $v$–$t$ is acceleration; area under $v$–$t$ (signed) is displacement.
- A peak or trough in $x$–$t$ means $v=0$ momentarily, not that motion has ended.
- Area under $x$–$t$ is meaningless; area under $v$–$t$ is everything.
- Division of the $v$–$t$ area into triangles and rectangles handles almost every piecewise-uniform case.
- When asked to sketch, first decide slopes and crossing points, then join — never draw blind.

Graphs describe any motion neatly, but for velocity changing steadily we also want equations that compute the numbers directly — the subject of the next module.
