## Your study plan for today

This chapter is a toolbox, not one formula: definitions, graphs, the constant-acceleration trio, gravity, relative frames and the calculus route. A focused pass takes about **2.5 hours**, plus a short break:

1. **Position, displacement and average velocity** — 20 min
2. **Reading motion graphs** — 18 min
3. **The constant-acceleration equations** — 22 min
4. **Free fall and motion under gravity** — 18 min
5. **Relative velocity in one dimension** — 18 min
6. **Kinematics with calculus** — 22 min
7. **This mastery check** — 25 min

After each lesson, close the explanation and redo its *Try it yourself* from a blank page. A module is finished when you can say **why** its method fits a question, not just how the algebra goes. Take the break after item 4.

When the tools feel automatic, sit the chapter’s **JEE Main timed practice** paper — a 50-minute, no-notes mix whose real difficulty is choosing the tool under time pressure.

## First choose the tool

| Clue in the question | Reach for |
| --- | --- |
| A journey that doubles back; “average” is asked | Definitions: velocity $=\Delta x/\Delta t$, speed $=$ path length$/\Delta t$ |
| Motion described phase by phase in words | Sketch the $v$–$t$ graph; slopes give $a$, signed area gives $s$ |
| $a$ constant, asked how fast after how long | $v=u+at$ |
| $a$ constant, asked where/when, time known | $s=ut+\tfrac12at^2$ |
| $a$ constant, time never mentioned | $v^2=u^2+2as$ |
| Braking with a reaction time | Split into a constant-speed phase and a braking phase; add the distances |
| Thrown up, then down again | One sign convention, $a=-g$ throughout; use the symmetry of the flight |
| Two objects closing, passing or on one line | Relative velocity $v_{AB}=v_A-v_B$ with signed values |
| A formula $x(t)$ or $v(t)$ is handed to you | Differentiate down the chain $x\to v\to a$ |
| $a(t)$ given plus a start state | Integrate twice; fix both constants from $x(0)$ and $v(0)$ |
| $a$ given as a function of position | $a=v\,dv/dx$, i.e. $\tfrac{v^2-u^2}{2}=\int a\,dx$ |

## Mastery check

Ten questions of increasing difficulty, mixing all six modules. Attempt each without the reveal first. Take $g=10\ \text{m/s}^2$ unless stated otherwise.

### 1. Average velocity versus average speed

A survey drone flies $500\ \text{m}$ due north in $100\ \text{s}$, then turns around and flies $300\ \text{m}$ due south in $60\ \text{s}$. Find its average velocity and average speed for the whole trip.

<details><summary>Answer and reasoning</summary>

Take north positive. Displacement $=+500-300=+200\ \text{m}$; path length $=500+300=800\ \text{m}$; total time $=160\ \text{s}$.

$$
\bar v=\frac{200}{160}=+1.25\ \text{m/s}\ \text{(north)},\qquad
\text{average speed}=\frac{800}{160}=5.0\ \text{m/s}.
$$

Average speed is larger, as it must be whenever the object reverses — the sanity check that the sign handling is intact.

</details>

### 2. A v–t graph that crosses the axis

A particle’s $v$–$t$ graph is a single straight line from $+6.0\ \text{m/s}$ at $t=0$ to $-6.0\ \text{m/s}$ at $t=4.0\ \text{s}$. Find its acceleration, its displacement and the distance travelled over $0$–$4.0\ \text{s}$.

<details><summary>Answer and reasoning</summary>

Acceleration is the slope: $a=(-6.0-6.0)/4.0=-3.0\ \text{m/s}^2$, the same at every instant including the crossing.

The line crosses the axis at $t=2.0\ \text{s}$ — the reversal. Signed area: $\tfrac12(2.0)(6.0)-\tfrac12(2.0)(6.0)=0$, so the displacement over the full interval is **zero**. Distance adds the two areas without signs: $6.0+6.0=12\ \text{m}$.

Zero displacement with $12\ \text{m}$ covered is the round-trip signature again — and note $v=0$ at $t=2.0\ \text{s}$ while $a=-3.0\ \text{m/s}^2$: the two are independent.

</details>

### 3. Choose the equation from what is missing

A freight train speeds up uniformly from $4.0\ \text{m/s}$ to $16\ \text{m/s}$ while covering $240\ \text{m}$. Find its acceleration and the time the speed-up took.

<details><summary>Answer and reasoning</summary>

Time is not mentioned, so start with $v^2=u^2+2as$:

$$
a=\frac{v^2-u^2}{2s}=\frac{256-16}{480}=0.50\ \text{m/s}^2.
$$

Then $v=u+at$ gives $t=(16-4.0)/0.50=24\ \text{s}$. Cross-check with $s=\tfrac12(u+v)t=\tfrac12(20)(24)=240\ \text{m}$ — consistent.

</details>

### 4. Reaction time and stopping distance

A driver travels at $25\ \text{m/s}$ ($90\ \text{km/h}$). Reaction time is $0.60\ \text{s}$; once braking, the car’s maximum deceleration is $5.0\ \text{m/s}^2$. Find the total stopping distance.

<details><summary>Answer and reasoning</summary>

Split at the moment the brakes bite. Thinking distance (no acceleration): $s_1=ut=(25)(0.60)=15\ \text{m}$. Braking distance ($v=0$, time irrelevant): $0=25^2+2(-5.0)s_2$, so $s_2=625/10=62.5\ \text{m}$.

Total: $15+62.5=77.5\ \text{m}$. Note the split $15$ versus $62.5$: at this speed the brakes do most of the work, but the reaction phase still costs about three car lengths — and braking distance scales with $u^2$, so the next jump in speed costs far more than this one.

</details>

### 5. Up and down past the launch point

A ball is thrown upward at $25\ \text{m/s}$ from the edge of a $30\ \text{m}$ high ledge and falls to the ground below. Find the total time of flight and the impact speed.

<details><summary>Answer and reasoning</summary>

Upward positive, $a=-10\ \text{m/s}^2$ throughout, $\Delta x=-30\ \text{m}$ at landing:

$$
-30=25t-\tfrac12(10)t^2 \;\Rightarrow\; t^2-5t-6=0 \;\Rightarrow\; (t-6)(t+1)=0,
$$

so $t=6.0\ \text{s}$ (the negative root belongs to no real event). Then $v=25-10(6.0)=-35\ \text{m/s}$: impact speed $35\ \text{m/s}$ downward.

Check with $v^2=u^2+2a\Delta x=625+2(-10)(-30)=1225=35^2$. The peak sits $u^2/2g=31.25\ \text{m}$ above the ledge, so falling $61.25\ \text{m}$ from rest would give $v=\sqrt{2(10)(61.25)}=\sqrt{1225}=35\ \text{m/s}$ — the same from either route.

</details>

### 6. Overtaking in the relative frame

An express train ($200\ \text{m}$ long) running at $25\ \text{m/s}$ overtakes a goods train ($300\ \text{m}$ long) running at $15\ \text{m/s}$ on a parallel track, same direction. How long does the pass take, from the express’s nose level with the goods’ brake van until its own brake van clears the goods’ engine?

<details><summary>Answer and reasoning</summary>

Freeze the goods train: relative speed $=25-15=10\ \text{m/s}$. The express must sweep both lengths: $200+300=500\ \text{m}$.

$$
t=\frac{500}{10}=50\ \text{s}.
$$

Ground-frame check: in $50\ \text{s}$ the express covers $1250\ \text{m}$ and the goods $750\ \text{m}$; the difference is exactly the $500\ \text{m}$ sweep. Had the trains run toward each other, the closing speed would be $25+15=40\ \text{m/s}$ and the same sweep would clear in $12.5\ \text{s}$ — the subtract-or-add decision is worth saying out loud.

</details>

### 7. River speeds

A boat covers one straight $600\ \text{m}$ stretch of river at $10\ \text{m/s}$ over the ground going downstream, and takes $100\ \text{s}$ to return the same stretch upstream. Find the boat’s speed through still water, the stream speed, and the downstream time for comparison.

<details><summary>Answer and reasoning</summary>

Upstream ground speed $=600/100=6.0\ \text{m/s}$. With $v_b+v_r=10$ and $v_b-v_r=6$: adding gives $v_b=8.0\ \text{m/s}$, subtracting gives $v_r=2.0\ \text{m/s}$. Downstream time $=600/10=60\ \text{s}$ against $100\ \text{s}$ upstream.

Both speeds are positive, so the boat does make headway upstream. If the stream had come out at or above $8.0\ \text{m/s}$, the upstream “speed” would be zero or negative — the arithmetic’s way of saying the trip is impossible.

</details>

### 8. Differentiate, then interpret

A particle’s position is $x(t)=2t^3-9t^2+12t$ metres. Find the instants when it is momentarily at rest, its position at each, and classify what happens at those instants.

<details><summary>Answer and reasoning</summary>

$v=dx/dt=6t^2-18t+12=6(t-1)(t-2)$, so the particle stops at $t=1.0\ \text{s}$ and $t=2.0\ \text{s}$. Positions: $x(1)=2-9+12=5.0\ \text{m}$ and $x(2)=16-36+24=4.0\ \text{m}$.

Acceleration $a=dv/dt=12t-18$: $a(1)=-6.0\ \text{m/s}^2$ (velocity passing from positive to negative — a **turn-around** at the $5.0\ \text{m}$ point) and $a(2)=+6.0\ \text{m/s}^2$ (negative to positive — a second **turn-around** at $4.0\ \text{m}$). Between $1.0\ \text{s}$ and $2.0\ \text{s}$ it drifts back toward the origin, then resumes $+x$. A cubic position means acceleration that changes with time — the constant-acceleration equations would be illegal here.

</details>

### 9. Integrate with the start state

A particle starts at the origin with velocity $+2.0\ \text{m/s}$ and has acceleration $a=4-2t$ (SI units). Find when its velocity is largest, what that velocity is, and its position then.

<details><summary>Answer and reasoning</summary>

Integrate with $v(0)=2.0$: $v(t)=2.0+4t-t^2$. Velocity is maximal where $a=0$: $4-2t=0\Rightarrow t=2.0\ \text{s}$ (and $a$ goes from $+$ to $-$ there, confirming a maximum). Then $v=2.0+8.0-4.0=6.0\ \text{m/s}$.

Integrate again with $x(0)=0$: $x(t)=2.0t+2t^2-\tfrac13t^3$, so $x(2.0)=4.0+8.0-\tfrac83\approx9.3\ \text{m}$.

Dropping either constant would shift every number — the initial conditions are part of the given data, not decoration.

</details>

### 10. Acceleration given against position

A particle moving along $+x$ passes $x=0$ with speed $6.0\ \text{m/s}$ and thereafter has acceleration $a=-3x$ (SI units). Find its speed at $x=3.0\ \text{m}$ and the farthest position it reaches.

<details><summary>Answer and reasoning</summary>

Use $v\,dv=a\,dx$, integrating from the known state:

$$
\frac{v^2-6.0^2}{2}=\int_0^x(-3x')\,dx'=-1.5x^2
\quad\Rightarrow\quad
v^2=36-3x^2.
$$

At $x=3.0\ \text{m}$: $v^2=36-27=9.0$, so $v=3.0\ \text{m/s}$ (positive root — still moving $+x$). The farthest point has $v=0$: $x^2=12$, $x=\sqrt{12}\approx3.5\ \text{m}$.

Sanity: $v^2$ shrinks monotonically as $x$ grows, and the formula itself is the $a(x)$ generalisation of $v^2=u^2+2as$ — with $a$ constant it would collapse back to it. Beyond $x\approx3.5\ \text{m}$ the relation gives $v^2<0$: unreachable, which is exactly what “the particle turns around” means.

</details>

## Self-check

You are ready to move on when you can:

- turn a worded multi-phase journey into a $v$–$t$ sketch and get the distance by signed area;
- pick the one constant-acceleration equation that omits the quantity never mentioned;
- state why zero displacement over an interval says nothing about distance travelled or about the velocity at any instant;
- keep a single sign convention through a whole free-fall problem, including the top of the flight;
- compute overtaking and clearing times in the relative frame and verify them in the ground frame;
- differentiate $x(t)$ and integrate $a(t)$ without ever losing a constant of integration;
- route an $a(x)$ question through $a=v\,dv/dx$ instead of forcing the constant-$a$ trio;
- check every final number for units, sign and plausible magnitude.

If one item still feels shaky, revisit that module and redo its questions without the reveals. Then close your notes and take the chapter’s JEE Main timed paper — the questions you miss there are your real revision list.
