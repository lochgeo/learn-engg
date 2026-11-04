## The same chase viewed from two seats

Two cars run side by side. From the roadside, both move; from one car’s driver seat, the other seems to creep or slide backwards. Both observations are correct, and the machinery connecting them is one subtraction:

$$
v_{AB}=v_A-v_B,
$$

the **velocity of A as seen from B** (or *of A relative to B*). It is the velocity A would have if B were frozen at rest — which is precisely what B’s driver feels. In one dimension this vector recipe reduces to plain signed subtraction, so choose your positive direction once, write every velocity as a signed number, and subtract.

Properties worth internalising:

- Swapping the observers flips the sign: $v_{BA}=-v_{AB}$. Same fact, opposite view.
- Everything you already know — catching up, meeting, overtaking — now happens in this “relative world”, where one of the objects is at rest and the problem collapses to the simpler cases you practised in the first module. Constant relative velocity means the constant-acceleration equations even apply with $a_{AB}=a_A-a_B$.

## Closing a gap at constant speed

If A chases B, the rate at which the **gap** closes is the magnitude of the relative velocity along the line. So:

$$
\text{time to catch up}=\frac{\text{initial head start}}{|v_{AB}|}\quad\text{(same direction, no acceleration)}.
$$

### Worked example: the catch-up

Car A is $100\ \text{m}$ behind car B. A travels at $20\ \text{m/s}$; B travels at $15\ \text{m/s}$, both in the same direction, neither accelerating. Take the direction of travel positive: $v_{AB}=20-15=+5\ \text{m/s}$ — A gains $5\ \text{m}$ on B every second.

Time to close the $100\ \text{m}$ gap:

$$
t=\frac{100}{5.0}=20\ \text{s}.
$$

*Sanity check in the ground frame.* In $20\ \text{s}$, A moves $400\ \text{m}$ and B moves $300\ \text{m}$. The difference, $100\ \text{m}$, is exactly the head start: A draws level at the right instant. If the frames disagree, the subtraction went wrong somewhere.

## Head-on approach: relative velocities add in magnitude

When two objects move toward each other, their velocities have opposite signs, so $v_{AB}=v_A-v_B$ becomes a **sum of magnitudes** — each observer sees the other closing in at high speed, as veteran train drivers know intuitively.

### Worked example: two trains on a single track — opposite directions

A $120\ \text{m}$ train runs at $54\ \text{km/h}$ ($15\ \text{m/s}$); an oncoming $140\ \text{m}$ train runs at $72\ \text{km/h}$ ($20\ \text{m/s}$). How long from nose to nose until they are fully past each other?

Opposite directions, so relative speed $=15+20=35\ \text{m/s}$. Each train must pass the other’s full length, so the total sweep is

$$
120+140=260\ \text{m},\qquad
t=\frac{260}{35}\approx7.4\ \text{s}.
$$

For the **same direction**, the relative speed would instead be $|15-20|=5\ \text{m/s}$ and the same sweep would take $260/5=52\ \text{s}$ — ten times longer. This contrast is the entire content of the “subtract or add” decision, so always answer it explicitly in your working.

## Distance-based meeting problems

Two objects separated by $d$ and heading toward each other meet when the *sum* of the distances they cover equals $d$. Equivalently, in the relative world one object simply travels the whole $d$ at the relative speed. Both views must give the same time — a cheap double-check.

<learning-block type="mistake" title="Adding velocities that belong to different frames">

A passenger walks forward at $2\ \text{m/s}$ inside a train doing $8\ \text{m/s}$ relative to the ground. Relative to the ground the passenger moves at $2+8=10\ \text{m/s}$; relative to the train, $2\ \text{m/s}$. Errors appear when quantities from the two descriptions are mixed — for instance using the passenger’s walk as if it were ground speed in a distance/time calculation for the landscape. Before adding, ask: *speed measured by whom?* Only velocities referenced to the same frame may be combined.

</learning-block>

## Boats upstream and downstream

A boat in a flowing river is exactly the same bookkeeping with names swapped. With boat speed through the water $v_b$ and stream speed $v_r$ (both along the line):

- **Downstream** (with the current): ground speed $=v_b+v_r$.
- **Upstream** (against the current): ground speed $=v_b-v_r$.
- Adding the two gives $2v_b$; subtracting gives $2v_r$ — so a boat’s true speed and the stream’s speed can be extracted from measured downstream/upstream trips, a common exam pattern.

The current does not care what the boat wants: the boat is not “swimming harder” downstream, but its ground-frame progress per second is larger because the medium itself is moving.

## Try it yourself

**1. A cyclist pedals at $4.0\ \text{m/s}$ and is overtaken on a straight road by a car at $12\ \text{m/s}$ when the car is $30\ \text{m}$ behind. How long until the car draws level (no accelerations)?**

<details><summary>Show the reasoning</summary>

Relative velocity car-minus-cyclist $=12-4.0=8.0\ \text{m/s}$, closing a $30\ \text{m}$ gap:

$$
t=30/8.0=3.75\ \text{s}.
$$

Ground-frame check: the cyclist covers $15\ \text{m}$, the car $45\ \text{m}$, difference $30\ \text{m}$. Consistent.

</details>

**2. A boat’s speed through still water would be $8.0\ \text{m/s}$. In a stream it covers a measured straight stretch downstream at $12\ \text{m/s}$. Find the stream speed and the upstream speed.**

<details><summary>Show the reasoning</summary>

Downstream: $v_b+v_r=12\Rightarrow v_r=4.0\ \text{m/s}$. Upstream: $v_b-v_r=8.0-4.0=4.0\ \text{m/s}$ — the boat crawls back at a quarter of its downstream rate. Both are positive, so the boat makes headway against the current; if upstream speed had come out negative, wading upstream at this throttle is impossible for that engine.

</details>

**3. Two buses, $200\ \text{m}$ apart on a straight road, approach each other at $10\ \text{m/s}$ and $15\ \text{m/s}$. When and where do they meet, measured from the slower bus’s start point?**

<details><summary>Show the reasoning</summary>

Relative (toward each other): $10+15=25\ \text{m/s}$; time to meet $=200/25=8.0\ \text{s}$.

Locations: slower bus covers $10\times8.0=80\ \text{m}$, faster bus $15\times8.0=120\ \text{m}$, and $80+120=200\ \text{m}$ — the split point checks out. The meeting happens closer to the slower bus’s start, which is what one expects since the faster bus eats more of the gap.

</details>

## Remember

- Relative velocity is subtraction in a common frame: $v_{AB}=v_A-v_B$, and observers swap sign.
- Same direction: subtract magnitudes. Opposite directions: add them. Say out loud which case you are in.
- Overtaking time = initial gap ÷ closing speed; train-clearing sweeps use total length = sum of both lengths.
- Boat problems are the same arithmetic with a stream speed added or subtracted.
- Verify by computing the meeting event in the ground frame as well; the two views must agree.

One line all along, most problems here have $a$ constant. But nature is not always so tidy: when acceleration varies, the definitions themselves become tools, with derivatives and integrals — the closing concept module of this chapter.
