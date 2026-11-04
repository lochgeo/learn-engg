## Why motion needs a reference frame

A train passenger who says “I am sitting still” and a person on the platform who says “you are rushing past at 25 m/s” are both right. Position is always reported **relative to some chosen observation point**, called a *frame of reference*. In kinematics we describe where an object is, not why it moves — forces come later, in Laws of Motion.

To describe motion along a straight line we only need three decisions:

1. Pick an **origin** (position $x=0$) somewhere convenient.
2. Pick a **positive direction** along the line (usually the direction of expected motion).
3. Keep both choices fixed for the whole problem.

Once that is done, every position is a signed number, and signs carry the direction automatically. Eastward $+6\ \text{m}$ followed by eastward $+6\ \text{m}$ is written $x=12\ \text{m}$ at the end — no vectors, no angles.

## Displacement and path length are different

An object that moves from $x_1$ to $x_2$ along the line has

$$
\Delta x = x_2 - x_1.
$$

This $\Delta x$ is the **displacement**: change in position, with sign. It can be positive, negative, or zero — even after a long journey. The **path length** (or distance) is the total length actually covered, always positive, and it is what the odometer of a car reads.

<learning-block type="concept" title="The round-trip signature">

Any journey that ends where it began has zero displacement but nonzero path length. This is the quickest way to tell the two quantities apart: they agree only for motion that never reverses direction.

</learning-block>

For example, walking $60\ \text{m}$ in the $+x$ direction and then $40\ \text{m}$ in the $-x$ direction gives path length $60+40=100\ \text{m}$, but displacement $\Delta x = +60-40=+20\ \text{m}$. Net result: you end up $20\ \text{m}$ from the start, in the $+x$ direction. Path length never takes a minus sign; displacement is the signed quantity.

## Average velocity vs average speed

Over a time interval $\Delta t = t_2-t_1$:

$$
\text{average velocity}=\frac{\Delta x}{\Delta t},\qquad
\text{average speed}=\frac{\text{path length}}{\Delta t}.
$$

Average velocity uses displacement, so it is signed and can even be zero over a closed loop. Average speed uses total path length, so it is always positive. Both have units of $\text{m/s}$, but they answer different questions:

- *How fast is the object getting somewhere, overall?* → average velocity.
- *How much ground did it actually cover per unit time?* → average speed.

### Worked example

A delivery cyclist rides $300\ \text{m}$ east in $120\ \text{s}$, realises the customer is closed, and rides back $200\ \text{m}$ west in $80\ \text{s}$.

- Displacement: $\Delta x = 300-200=+100\ \text{m}$ (east).
- Path length: $300+200=500\ \text{m}$.
- Total time: $200\ \text{s}$.
- Average velocity: $\bar v = 100/200 = +0.50\ \text{m/s}$ (east).
- Average speed: $500/200 = 2.5\ \text{m/s}$.

*Sanity check:* average speed should exceed the magnitude of average velocity whenever the cyclist reverses — here $2.5 > 0.50$. If your numbers say the opposite, the sign handling has slipped.

## From average to instantaneous

Average velocity blurs the whole interval into one number. What we usually mean by “the cyclist’s speed right now” is the **instantaneous velocity**: the average velocity taken over a vanishingly small interval around the instant of interest,

$$
v = \lim_{\Delta t\to 0}\frac{\Delta x}{\Delta t} = \frac{dx}{dt}.
$$

That limit is exactly a derivative — the notation is no accident, and module 6 (Kinematics with calculus) develops it fully. Two consequences are worth stating now:

- Instantaneous **speed** is the magnitude of instantaneous velocity. It never has a minus sign.
- On a position–time graph the slope of the tangent at any point equals the instantaneous velocity there — the subject of the next module.

When the velocity does not change with time, average and instantaneous velocity coincide; the distinction only starts to matter once the motion speeds up or slows down.

## Choosing a sign convention is a decision, not a decoration

Most errors in this chapter are sign errors. Before touching a formula, write down the convention explicitly, for example: “$+x$ is upward; positions above the launch point are positive.” Then:

- A velocity against the chosen direction is **negative** — that is a feature, not a nuisance.
- If a computed displacement comes out negative, it means “ended up on the negative side” or “moved in the negative direction”, depending on the quantity.
- Never quietly flip the sign midway because it looks nicer.

If a result reads upside down afterwards, re-examine the convention rather than fudging the formula.

<learning-block type="mistake" title="Distance and displacement both plugged into one formula">

A common slip is using path length in $\Delta x/\Delta t$ and calling the result velocity. With a $100\ \text{m}$ round trip completed in $20\ \text{s}$, that gives $100/20=5\ \text{m/s}$ and labels it “velocity”. It is the **average speed**; the average velocity is $0/20=0$. The two are only interchangeable if the direction of motion never reverses.

</learning-block>

## Try it yourself

**1. A robotic trolley moves along an aisle: from $x=0$ to $x=3.0\ \text{m}$ in $10\ \text{s}$, then back to $x=1.0\ \text{m}$ in another $5.0\ \text{s}$. Find its average velocity and average speed for the whole trip.**

<details><summary>Show the reasoning</summary>

Displacement $= 1.0-0 = +1.0\ \text{m}$; path length $= 3.0+2.0 = 5.0\ \text{m}$; total time $= 15\ \text{s}$.

Average velocity $=1.0/15\approx 0.067\ \text{m/s}$ in the $+x$ direction. Average speed $= 5.0/15\approx 0.33\ \text{m/s}$.

They differ by a factor of five because most of the motion cancelled out in the displacement. Both values are small, as fits a slow trolley.

</details>

**2. A sprinter runs a complete lap of a $400\ \text{m}$ circular track in $50\ \text{s}$. What are the average velocity and average speed?**

<details><summary>Show the reasoning</summary>

The start and end positions coincide, so displacement $=0$ and average velocity $=0$. Path length $=400\ \text{m}$, so average speed $=400/50=8.0\ \text{m/s}$.

This is the cleanest possible illustration that “fast” and “heading somewhere” are different claims.

</details>

**3. A particle’s instantaneous velocity is $-4\ \text{m/s}$. What is its instantaneous speed, and in which direction is it moving relative to your axis?**

<details><summary>Show the reasoning</summary>

Speed is the magnitude: $4\ \text{m/s}$. The minus sign says the particle moves in the $-x$ direction, opposite your chosen positive axis. Speed alone would never tell you that — another reason to define the axis in writing before solving.

</details>

## Remember

- Position is meaningful only after choosing an origin and a positive direction — and those choices are yours, not nature’s.
- Displacement $\Delta x = x_2-x_1$ is signed; path length is total ground covered and is never negative.
- Average velocity $=\Delta x/\Delta t$; average speed $=$ path length$/\Delta t$. They agree only when motion never reverses.
- Instantaneous velocity is the limit of the average as $\Delta t\to0$, i.e. the derivative $dx/dt$ — and on a graph it is the slope.
- Decide the sign convention first, state it, and keep it for the whole solution.

The next module turns these ideas into pictures: position–time and velocity–time graphs, where slopes and areas take over the arithmetic.
