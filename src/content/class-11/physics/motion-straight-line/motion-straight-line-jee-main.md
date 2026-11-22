## How to use this timed set

This is a **50-minute, no-notes** paper in the JEE Main style, for after the chapter lessons and the mastery check. Spend roughly 15 minutes on Section A, 15 on Section B, 8 on Section C, 10 on Section D, and hold 2 minutes in reserve for review. Mark a question for revisit after 90 seconds; straight-line kinematics questions are short by design, and a question that needs long algebra is usually a sign the wrong tool was picked.

Use $g=10\ \text{m/s}^2$ unless a question states otherwise. The real difficulty is not the algebra — it is deciding, in the first ten seconds, whether the question wants a graph, the constant-acceleration trio, a relative frame or the calculus definitions.

## Conditions and formula sheet

| Situation | Start with | Check before using it |
| --- | --- | --- |
| Speed in km/h wanted in m/s | multiply by $\tfrac{5}{18}$ | The factor is exact; the reverse is $\tfrac{18}{5}$. |
| $a$ constant, any two of $u,v,s,t$ known | $v=u+at$, $s=ut+\tfrac12at^2$, $v^2=u^2+2as$ | Pick the equation that omits the quantity never mentioned. |
| Distance in the $n$-th second | $\tfrac12 a\,(2n-1)$ from rest, or $s(n)-s(n-1)$ always | Derive the second difference if unsure — memorised variants assume $u=0$. |
| A $v$–$t$ graph is given or sketched | slope $\to a$; signed area $\to$ displacement | Areas below the axis count **negative**; distance flips their sign instead. |
| Body thrown upward | upward-positive: $a=-g$ at every instant | At the top $v=0$ but $a=-g$; one straight $v$–$t$ line covers the whole flight. |
| Two bodies on one line | $v_{AB}=v_A-v_B$ with signed values | Same direction: subtract magnitudes. Opposite: add them. Say which case you are in. |
| $x(t)$ or $v(t)$ handed over | differentiate down the chain $x\to v\to a$ | Turning points are $v=0$ instants, not $x=0$ points. |
| $a(t)$ given with a start state | integrate twice | Every constant comes from $x(0)$ or $v(0)$; none may be dropped. |
| $a(x)$ given | $a=v\,\dfrac{dv}{dx}$, so $\tfrac{v^2-u^2}{2}=\int a\,dx$ | It collapses back to $v^2=u^2+2as$ when $a$ is constant. |

<learning-block type="mistake" title="Fast sanity checks for this chapter">

Stop and re-examine your setup if: you report an average velocity computed from total **path length**; a stopping-distance answer contains only the braking term and no reaction term; an overtaking time ignores one of the two train lengths; a quadratic’s negative root was “accepted” without asking what it means; or $v^2=u^2+2as$ gives a growing speed while the acceleration opposes the motion — that is a sign-convention error, the most common way to lose a correct-looking mark.

</learning-block>

## Section A — 10 rapid MCQs

### 1. Average velocity of a round trip

A jogger runs $400\ \text{m}$ due east in $100\ \text{s}$, then immediately runs $400\ \text{m}$ due west in $80\ \text{s}$. The **magnitude of the average velocity** for the complete journey is:

- A. $0\ \text{m/s}$
- B. $4.4\ \text{m/s}$
- C. $5.0\ \text{m/s}$
- D. $8.9\ \text{m/s}$

<details><summary>Answer</summary>

**A.** Average velocity uses displacement, and the jogger ends where they started: $\Delta x=0$, so $\bar v=0$. Option B is the average **speed** ($800/180\approx4.4\ \text{m/s}$), C the second-leg speed — classic distractors for exactly this chapter’s first distinction.

</details>

### 2. What the slope means

The slope of the tangent to a position–time graph at one point gives the:

- A. instantaneous velocity
- B. acceleration
- C. displacement so far
- D. average speed

<details><summary>Answer</summary>

**A.** By definition $v=\lim_{\Delta t\to0}\Delta x/\Delta t$ — the tangent slope. Acceleration would be the curvature (second derivative) of the same curve, not its slope.

</details>

### 3. Distance under uniform acceleration

A car starts from rest and accelerates uniformly, reaching $20\ \text{m/s}$ in $5.0\ \text{s}$. The distance covered in this time is:

- A. $25\ \text{m}$
- B. $50\ \text{m}$
- C. $75\ \text{m}$
- D. $100\ \text{m}$

<details><summary>Answer</summary>

**B.** $s=\tfrac12(u+v)t=\tfrac12(0+20)(5.0)=50\ \text{m}$ (or $a=4.0\ \text{m/s}^2$ in $s=\tfrac12at^2$). Option D multiplies final speed by time and silently assumes the car was at $20\ \text{m/s}$ all along.

</details>

### 4. What the area means

The area between a $v$–$t$ curve and the time axis, with regions below the axis counted negatively, equals the:

- A. total distance travelled
- B. displacement
- C. acceleration
- D. average speed

<details><summary>Answer</summary>

**B.** Signed area is $\int v\,dt=\Delta x$. Counting all regions positive instead gives the path length (option A) — the difference only appears when the velocity changes sign, which is the point of the question.

</details>

### 5. At the top of the flight

A ball is thrown straight up. At the highest point of its path (air resistance ignored):

- A. both its velocity and its acceleration are zero
- B. its velocity is zero and its acceleration is $g$ downward
- C. its velocity is $g$ downward and its acceleration is zero
- D. its velocity and its acceleration are both $g$ downward

<details><summary>Answer</summary>

**B.** The turn-around demands $v=0$ at exactly one instant; gravity never switches off, so $a=g$ downward throughout, top included. If A were true the ball would hang there — the most-quoted wrong answer in kinematics.

</details>

### 6. Velocity of A relative to B

Car A travels at $20\ \text{m/s}$ and car B at $25\ \text{m/s}$, both eastward on the same road, B ahead. The velocity of A relative to B is:

- A. $-5\ \text{m/s}$
- B. $+5\ \text{m/s}$
- C. $+45\ \text{m/s}$
- D. $-45\ \text{m/s}$

<details><summary>Answer</summary>

**A.** With east positive, $v_{AB}=v_A-v_B=20-25=-5\ \text{m/s}$: B’s driver sees A falling behind at $5\ \text{m/s}$. The sign is the whole answer — magnitudes alone cannot tell you which car is losing ground.

</details>

### 7. Height and fall time in vacuum

A feather released from rest in a vacuum falls from height $h$ in time $t$. Released from height $4h$, its fall time is:

- A. $t$
- B. $2t$
- C. $4t$
- D. $t/2$

<details><summary>Answer</summary>

**B.** $h=\tfrac12gt^2$ gives $t=\sqrt{2h/g}\propto\sqrt{h}$, so quadrupling $h$ doubles $t$. The “vacuum” phrasing is the exam’s way of licensing $a=g$ for a feather as well as a stone.

</details>

### 8. Velocity from a position law

A particle’s position obeys $x=5t^2+2t$ (SI units). Its velocity at $t=2.0\ \text{s}$ is:

- A. $12\ \text{m/s}$
- B. $20\ \text{m/s}$
- C. $22\ \text{m/s}$
- D. $24\ \text{m/s}$

<details><summary>Answer</summary>

**C.** $v=dx/dt=10t+2$, so $v(2.0)=22\ \text{m/s}$. Reading $10t=20$ and forgetting the constant’s derivative term, or differentiating only part of the law, produces the other options. The position is quadratic in $t$, so $a=10\ \text{m/s}^2$ is constant and $v=u+at$ with $u=2$ confirms $22\ \text{m/s}$.

</details>

### 9. Distance in the second second

A body starts from rest and accelerates uniformly at $6\ \text{m/s}^2$. The distance it travels **during the second second** (from $t=1\ \text{s}$ to $t=2\ \text{s}$) is:

- A. $3\ \text{m}$
- B. $6\ \text{m}$
- C. $9\ \text{m}$
- D. $12\ \text{m}$

<details><summary>Answer</summary>

**C.** $s(2)-s(1)=\tfrac12(6)(4)-\tfrac12(6)(1)=12-3=9\ \text{m}$. Option A is the first second, D the total by $t=2$ — the question is a trap for anyone who computes $s$ instead of the interval’s slice.

</details>

### 10. Stopping distance scaling

A car braking at its maximum deceleration stops in $20\ \text{m}$ from $50\ \text{km/h}$. From $100\ \text{km/h}$, at the same deceleration, the braking distance is:

- A. $28\ \text{m}$
- B. $40\ \text{m}$
- C. $80\ \text{m}$
- D. $160\ \text{m}$

<details><summary>Answer</summary>

**C.** $v^2=u^2+2as$ with $v=0$ gives $s=u^2/2a\propto u^2$. Doubling the speed multiplies the distance by $4$: $4\times20=80\ \text{m}$. Option B is the linear-speed intuition that road-safety campaigns exist to correct.

</details>

## Section B — 5 numerical-value questions

Next, the format changes: instead of choosing among options, you produce the answer yourself — there is nothing to eliminate, so the reasoning has to carry the whole weight.

Give a numerical answer (with units) in the space of the question. No options are provided, as in the exam’s numerical-value section.

### 11. Uniform speed-up over a known time

A train running at $8\ \text{m/s}$ begins to accelerate uniformly at $0.5\ \text{m/s}^2$. Find the distance it covers during the first $40\ \text{s}$ of the speed-up.

<details><summary>Answer</summary>

$$
s=ut+\tfrac12at^2=(8)(40)+\tfrac12(0.5)(40)^2=320+400=720\ \text{m}.
$$

Check: final speed $v=8+0.5(40)=28\ \text{m/s}$, so $s=\tfrac12(8+28)(40)=720\ \text{m}$ — the two routes agree.

</details>

### 12. Stone down a shaft

A stone is dropped from rest down a mine shaft $80\ \text{m}$ deep. Find the time to reach the bottom and its impact speed.

<details><summary>Answer</summary>

Downward positive, $u=0$, $a=g=10\ \text{m/s}^2$:

$$
80=\tfrac12(10)t^2 \;\Rightarrow\; t=\sqrt{16}=4.0\ \text{s},\qquad
v=gt=40\ \text{m/s}.
$$

Check with $v^2=2gs$: $\sqrt{2(10)(80)}=40\ \text{m/s}$ ✓. Both magnitudes are realistic for a deep shaft.

</details>

### 13. Up from a tower

A ball is thrown upward at $20\ \text{m/s}$ from the top of a $60\ \text{m}$ high tower. Find the time from the throw until it reaches the ground at the tower’s base, and its impact speed.

<details><summary>Answer</summary>

Upward positive, $a=-10$, landing displacement $\Delta x=-60\ \text{m}$:

$$
-60=20t-\tfrac12(10)t^2 \;\Rightarrow\; t^2-4t-12=0 \;\Rightarrow\; (t-6)(t+2)=0,
$$

so $t=6.0\ \text{s}$; the root $t=-2\ \text{s}$ lies before the throw and is discarded with a reason, not silently. Impact velocity $v=20-10(6)=-40\ \text{m/s}$: **$40\ \text{m/s}$ downward**. Check: peak is $u^2/2g=20\ \text{m}$ above the tower top, so falling $80\ \text{m}$ from rest gives $v=\sqrt{2(10)(80)}=40\ \text{m/s}$ ✓.

</details>

### 14. Displacement versus distance from a cubic

A particle moves on the $x$-axis with $x=t^3-3t^2+2$ (SI units, $t\ge0$). Find its displacement and its total distance travelled between $t=0$ and $t=3.0\ \text{s}$.

<details><summary>Answer</summary>

$v=3t^2-6t=3t(t-2)$: the velocity is negative on $0<t<2$ and positive on $t>2$, so the single turn is at $t=2\ \text{s}$.

$$
x(0)=2,\qquad x(2)=8-12+2=-2,\qquad x(3)=27-27+2=2.
$$

Displacement $=x(3)-x(0)=0$. Distance $=|{-2}-2|+|2-(-2)|=4+4=8.0\ \text{m}$.

The pair “zero displacement, $8\ \text{m}$ of path” is the opening module’s lesson returning in calculus clothing — you only see it by checking where $v$ changes sign, never from $x(3)-x(0)$ alone.

</details>

### 15. Start-up pursuit

Scooter A passes a bus stop travelling at a steady $10\ \text{m/s}$. At that instant police motorcycle B, waiting at the stop, sets off after it with constant acceleration $2\ \text{m/s}^2$ along the same road. Find when and where B overtakes A.

<details><summary>Answer</summary>

Measure both from the stop at the same clock:

$$
x_A=10t,\qquad x_B=\tfrac12(2)t^2=t^2
\;\Rightarrow\; t^2=10t \;\Rightarrow\; t=10\ \text{s}\ (\text{nonzero root}),
$$

then $x=10(10)=100\ \text{m}$. So B catches A **$10\ \text{s}$ after the start, $100\ \text{m}$ past the stop**. Check: $x_B=100\ \text{m}$ at that time ✓, and B’s speed there is $2(10)=20\ \text{m/s}$ — faster than A, as it must be at the moment of passing. (Relative-frame route: in A’s frame B starts alongside with velocity $-10\ \text{m/s}$ and acceleration $+2\ \text{m/s}^2$; demanding the relative displacement return to zero, $-10t+t^2=0$, gives the same $t=10\ \text{s}$.)

</details>

## Section C — 3 assertion–reason questions

Each question has an **Assertion (A)** and a **Reason (R)**. Choose:

- **A.** both A and R are true, and R is the correct explanation of A
- **B.** both A and R are true, but R is not the correct explanation of A
- **C.** A is true but R is false
- **D.** A is false but R is true

### 16. Speed is never smaller

**A:** Over any interval, a body’s average speed is never less than the magnitude of its average velocity.
**R:** The path length covered in an interval is never less than the magnitude of the displacement over the same interval.

<details><summary>Answer</summary>

**A.** Both statements are true, and R is precisely why A holds: dividing the inequality (path length $\ge|\Delta x|$) by the same positive $\Delta t$ gives average speed $\ge|\bar v|$. Equality only when the motion never reverses.

</details>

### 17. The road seen from the car

**A:** To a driver moving east at constant speed $v$ relative to the ground, the road appears to move west at speed $v$.
**R:** The velocity of A relative to B is defined as $v_{AB}=v_B-v_A$.

<details><summary>Answer</summary>

**C.** The assertion is true: the road’s velocity relative to the car is $0-v=-v$, i.e. westward at $v$. The reason states the definition backwards — the correct relation is $v_{AB}=v_A-v_B$ — so R is false.

</details>

### 18. Zero displacement and rest

**A:** If a particle’s displacement over an interval is zero, it must have been at rest throughout the interval.
**R:** A particle’s average speed over an interval can be positive while its average velocity is zero.

<details><summary>Answer</summary>

**D.** The assertion is false — any round trip has $\Delta x=0$ with plenty of motion (the jogger in Question 1). The reason is true, and it is exactly the observation that disproves the assertion: positive speed with zero velocity is the round-trip signature.

</details>

## Section D — 2 matching / multi-statement questions

### 19. Match the graph feature to its meaning

Match each graph feature in List-I with what it measures in List-II.

| List-I | List-II |
| --- | --- |
| P. Area between the $v$–$t$ curve and the axis, below-axis regions taken negative | 1. Acceleration |
| Q. Slope of a straight segment of a $v$–$t$ graph | 2. Displacement |
| R. Slope of the tangent to an $x$–$t$ curve at a point | 3. Instantaneous velocity |
| S. Area under a $v$–$t$ curve with every region counted positive | 4. Total distance travelled |

<details><summary>Answer</summary>

**P–2, Q–1, R–3, S–4.**

- P: signed area sums $v\,dt$ with direction kept — the displacement.
- Q: slope of $v$–$t$ is $\Delta v/\Delta t=a$.
- R: the tangent slope at an instant is $dx/dt$, the instantaneous velocity.
- S: stripping the signs from the same areas converts displacement into path length — total distance.

P versus S is the pair worth dwelling on: the same arithmetic, two different quantities, separated only by how the below-axis triangles are treated.

</details>

### 20. Three statements to judge

Consider these statements about straight-line motion:

- **S1:** Two cars approach each other on a straight road at $15\ \text{m/s}$ and $20\ \text{m/s}$. The magnitude of their relative velocity is $5\ \text{m/s}$.
- **S2:** A body moving with constant velocity has zero acceleration.
- **S3:** A body starting from rest with uniform acceleration covers distances during the first, second and third seconds in the ratio $1:3:5$.

How many of the statements are correct?

<details><summary>Answer</summary>

**Two — S2 and S3.**

- S1 is wrong: opposite directions **add** the magnitudes. With signs, $v_{AB}=v_A-v_B=(+15)-(-20)=35\ \text{m/s}$; the gap closes at $35\ \text{m/s}$, not $5$.
- S2 is correct: constant velocity means $\Delta v=0$ in every interval, hence $a=0$.
- S3 is correct: from rest, $s_n=\tfrac12a(2n-1)$ gives $\tfrac12a,\tfrac32a,\tfrac52a$ in the three successive seconds, i.e. $1:3:5$. (Quick derivation instead of memory: $s(1)-s(0)$, $s(2)-s(1)$, $s(3)-s(2)$ with $s=\tfrac12at^2$.)

</details>

## Review by error, not by score

| If you missed… | Revisit | Then retry |
| --- | --- | --- |
| 1, 2, 16, 18 | Position, displacement and average velocity | Rebuild the definitions from $\Delta x$ versus path length, with your axis written down. |
| 4, 19 | Reading motion graphs | Split a piecewise $v$–$t$ graph into triangles and rectangles; state which areas are signed. |
| 3, 9, 10, 11, 15 | The constant-acceleration equations | Name the omitted quantity before choosing the equation; keep every acceleration change its own phase. |
| 5, 7, 12, 13, 17 | Free fall and motion under gravity | One convention, $a=-g$ (or $+g$) at every instant; explain each quadratic root before accepting it. |
| 6 | Relative velocity in one dimension | Compute the meeting event in both the relative and the ground frame; they must agree. |
| 8, 14 | Kinematics with calculus | Differentiate the whole expression; find where $v$ changes sign before calling displacement “distance”. |

<learning-block type="recap" title="After the paper">

Aim for at least 15 of 20 correct within the 50 minutes. Questions solved correctly but slowly, or settled by elimination without working, are revision targets: straight-line kinematics rewards judgement about *which tool and which sign convention*, and that judgement only comes from redoing the ones you missed.

</learning-block>
