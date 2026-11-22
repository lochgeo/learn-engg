## What constant acceleration buys you

The question this module answers is a practical one: if the acceleration stays steady, can we predict position and speed without doing any calculus? The answer is yes — one short list of symbols and three equations cover nearly every textbook journey.

Most textbook problems — and a surprising share of real ones, from braking cars to accelerating lifts — involve acceleration that holds steady for the interval of interest. That single restriction, $a=\text{constant}$, is powerful enough to compress all kinematics into three short equations, because two of the defining relations become exactly solvable.

The cast of symbols, used throughout:

- $u$ — initial velocity (at $t=0$)
- $v$ — final velocity (at time $t$)
- $a$ — constant acceleration (signed, per your sign convention)
- $s$ — displacement in the interval, $s=x_t-x_0$
- $t$ — elapsed time

The equations **ignore nothing about direction**: every symbol carries the sign your convention assigns. That is why the sign convention of the first module matters most here.

## Equation 1: velocity from time

Starting from $a=dv/dt$, constant:

$$
v=u+at.
$$

It says the velocity grows linearly. It contains all five quantities except $s$; reach for it when **displacement is not asked about** (or you don't want to use it).

## Equation 2: displacement from time

Velocity changing linearly has a neat consequence for *distance covered* too. Under constant acceleration the velocity changes uniformly, so its *average* over the interval is the midpoint of its endpoints:

$$
\bar v=\frac{u+v}{2},\qquad s=\bar v\,t=\frac{u+v}{2}\,t.
$$

Substituting $v=u+at$ into that gives

$$
s=ut+\frac12 at^2.
$$

It contains everything except $v$. The special case $u=0$ (starting from rest) gives $s=\tfrac12 at^2$, and then $s\propto t^2$: doubling the time quadruples the distance. That quadratic growth is easy to test experimentally and is a favourite exam question.

## Equation 3: displacement without time

One rearrangement remains: what if the question asks for speed but never mentions time? Eliminating $t$ between equations 1 and 2 gives

$$
v^2=u^2+2as.
$$

It contains everything except $t$ — use it when the final speed is asked but the time never enters the question. Mind the $v^2$ form: it loses information about direction. If $v^2 = 25\ \text{m}^2/\text{s}^2$, the physics may allow $v=\pm5\ \text{m/s}$; choose the sign from the story (a rebounding ball picks the other sign).

<learning-block type="concept" title="One family, one rule">

All three equations descend from the same two definitions ($a=\text{const}$ and $s=\bar v t$). They are not independent facts to memorise separately but **one fact wearing three outfits**. If you ever forget the third, derive it on the spot instead of trusting memory.

</learning-block>

## Choosing the equation from the data

Decide which of the five quantities is *absent* from your question, then pick the equation that omits it:

| You know | You want | You don't care about | Reach for |
| --- | --- | --- | --- |
| $u,\ a,\ t$ | $v$ | $s$ | $v=u+at$ |
| $u,\ a,\ t$ | $s$ | $v$ | $s=ut+\tfrac12at^2$ |
| $u,\ a,\ s$ | $v$ | $t$ | $v^2=u^2+2as$ |
| $u,\ v,\ t$ | $s$ | $a$ | $s=\tfrac12(u+v)t$ |
| $u,\ v,\ s$ | $a$ | $t$ | $v^2=u^2+2as$ rearranged |

Many two-stage problems simply apply this table twice, once per stage, with the final $v$ of one stage becoming the initial $u$ of the next.

## Worked example: a braking car and its stopping distance

A car is travelling at $20\ \text{m/s}$ (about $72\ \text{km/h}$). The driver sees an obstruction and takes $0.50\ \text{s}$ to react, then brakes at $5.0\ \text{m/s}^2$ until stopping. Find the total stopping distance.

Take the direction of travel as $+x$, so $u=+20\ \text{m/s}$ and $a=-5.0\ \text{m/s}^2$.

**Thinking distance** (reaction time, velocity unchanged):

$$
s_1=ut=(20)(0.50)=10\ \text{m}.
$$

**Braking distance** (ends at rest, so $v=0$; time is irrelevant — use equation 3):

$$
0=(20)^2+2(-5.0)s_2
\quad\Rightarrow\quad
s_2=\frac{400}{10}=40\ \text{m}.
$$

**Total:** $s_1+s_2=50\ \text{m}$.

*Sanity checks*: both distances are positive; braking distance has units $\text{m}^2/\text{s}^2 \div \text{m/s}^2 = \text{m}$; and $40\ \text{m}$ for a $72\ \text{km/h}$ emergency stop is a realistic road figure. The structure also reveals the dangerous scaling: braking distance grows as $u^2$, so driving at $28\ \text{m/s}$ would make it $\approx 78\ \text{m}$ — nearly double for only $40\%$ more speed.

<learning-block type="mistake" title="Using the equations after acceleration changes">

The three equations hold only while $a$ is constant. A braking car with the engine disengaged still has a reaction-time phase, when $a=0$, followed by a braking phase, when $a$ has another value. Applying $v^2=u^2+2as$ across **both** phases as one stretch — using the reaction time in place of braking time or a single averaged acceleration — produces wrong distances even when the arithmetic succeeds. Split the motion at every point where the acceleration changes.

</learning-block>

## Try it yourself

**1. A stone is rolled up a straight incline with initial speed $8.0\ \text{m/s}$ and experiences a constant opposing acceleration of $2.0\ \text{m/s}^2$. How far up does it travel, and when does it stop?**

<details><summary>Show the reasoning</summary>

Upward positive: $u=+8.0$, $a=-2.0\ \text{m/s}^2$. Distance up to rest $v=0$:

$$
s=\frac{-u^2}{2a}=\frac{-64}{-4.0}=16\ \text{m},\qquad
t=\frac{0-8.0}{-2.0}=4.0\ \text{s}.
$$

Both well-defined and positive; $16\ \text{m}$ in $4.0\ \text{s}$ averages $4.0\ \text{m/s}$, exactly half of $u$ — the correct average for uniform slowing to rest from $8.0$.

</details>

**2. A metro train accelerates uniformly from rest to $15\ \text{m/s}$ while covering $90\ \text{m}$. Find its acceleration and the time.**

<details><summary>Show the reasoning</summary>

Time is not needed, so use equation 3:

$$
(15)^2=0+2a(90)\Rightarrow a=\frac{225}{180}=1.25\ \text{m/s}^2.
$$

Then $v=u+at$ gives $t=15/1.25=12\ \text{s}$. Check via equation 2: $s=\tfrac12(1.25)(12^2)=90\ \text{m}$ — consistent.

</details>

**3. A cyclist already moving at $4.0\ \text{m/s}$ accelerates at $1.0\ \text{m/s}^2$ for $6.0\ \text{s}$. Find final speed and distance, then verify them against each other.**

<details><summary>Show the reasoning</summary>

$v=4.0+(1.0)(6.0)=10\ \text{m/s}$; $s=(4.0)(6.0)+\tfrac12(1.0)(36)=24+18=42\ \text{m}$.

Cross-check with $s=\tfrac12(u+v)t=\tfrac12(14)(6.0)=42\ \text{m}$. Agreement between two independent routes is the cheapest “audit” available in this chapter.

</details>

## Remember

- The three equations hold **only** for constant acceleration, applied over an interval with $u$, $v$, $s$ all referenced to it.
- $s=\tfrac12(u+v)t$ is a free extra equation, valid whenever $a$ is constant.
- Pick the equation that omits the quantity the question never mentions.
- $v^2=u^2+2as$ hides sign information in the square; fix the sign of $v$ from the story.
- Split the motion at every change in acceleration; the final value of one stage feeds the next.

Uniform acceleration has one especially important special case — motion under gravity — where the acceleration is fixed by nature itself. That is next.
