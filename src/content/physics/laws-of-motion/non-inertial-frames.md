## The laws need the right address

Stand in a bus as it brakes hard. Nothing visibly touches you, yet you lurch forward. Physics students are tempted to invent a force to explain the lurch — but the first law says no force is needed to *keep* moving. The resolution is not about forces at all: it is about the **frame** from which you watch. Newton's laws hold only when stated in certain frames, and this module maps out exactly which, and how to patch the laws when you are stuck in the wrong one.

## 1. Inertial frames: where the first law is true

An **inertial frame** is any reference frame in which a body with zero net force travels in a straight line at constant speed (or stays at rest). Newton's laws, as written, are valid *only* in inertial frames.

| Frame | Inertial? | Why (approximately) |
| --- | --- | --- |
| Ground-fixed frame with the Earth as a very good approximation | effectively yes | the Earth's rotation gives small corrections (Coriolis effects, weight variations) that introductory mechanics neglects |
| A car cruising at constant velocity | yes (if the ground is) | constant-velocity frames are all inertial — every Galilean transformation of one is another |
| An accelerating lift | no | its floor accelerates relative to the ground |
| A merry-go-round (rotating frame) | no | rotating frames accelerate every point: constant direction change is still acceleration |

The key practical rule: if your frame has acceleration $a$ relative to a good inertial frame, Newton's second law fails in it until you add a correction — the pseudo force.

## 2. The pseudo force: a patch, not a push

Work in a frame accelerating with acceleration $\vec a_{\text{frame}}$ relative to an inertial frame, and the second law written naively goes wrong. The fix: pretend that *every* mass experiences an extra force

$$
\vec F_{\text{pseudo}} = -m\,\vec a_{\text{frame}},
$$

always opposite to the frame's acceleration, applied to every body as if it were there. Rewrite the second law as

$$
\sum \vec F_{\text{real}} + \vec F_{\text{pseudo}} = m\vec a_{\text{frame-relative}}.
$$

In the braking bus, the frame accelerates *backward*; the bus's pseudo force on you points *forward* — exactly the lurch you feel, though you feel it because your feet, gripped by friction with the floor, decelerate with the bus while your upper body lags.

Three properties set the pseudo force apart from every real force:

1. It has **no third-law partner** — nothing exerts it on you, so nothing experiences its reaction. This is the quickest litmus test for whether a force on your diagram is real.
2. Its magnitude is proportional to the **mass** of the body it acts on, exactly like weight — this is why "weightlessness" and pseudo forces feel alike.
3. It exists **only** inside accelerating frames. An inertial-frame analysis of the same bus shows just your feet's friction and no mysterious forward push.

<learning-block type="mistake" title="Pseudo-force errors">

- **Adding a pseudo force while working in the ground frame.** Double counting: in the ground (inertial) frame Newton's laws are already exact; adding $\vec F_{\text{pseudo}}$ invents an acceleration that does not exist. Choose the frame first, use the patch only if it accelerates.
- **Looking for the reaction to a pseudo force.** There is none. If you find yourself drawing "the pseudo force's reaction", you have crossed from modelling into fiction-by-mistake.
- **Forgetting to add $-m\vec g$ alongside a lift's own acceleration.** In a lift accelerating downward at $a$, frame analysis uses pseudo force $ma$ up plus weight $mg$ down on the occupant, giving $N = m(g - a)$. Missing either term gives absurd apparent weights (zero or doubled).

</learning-block>

## 3. Apparent weight in a lift

A person of mass $m$ stands on a lift's floor, which accelerates vertically with $a$ (positive *upward*). Working in the lift's frame: weight $mg$ down, pseudo force $ma$ down when the lift accelerates up, and the floor's normal force $N$ up. Second law in this frame (zero acceleration relative to the floor):

$$
N = mg + ma = m(g+a).
$$

Run through the cases (all with $g = 10\ \text{m/s}^2$):

| Lift motion | Apparent weight $N$ | For $m = 50\ \text{kg}$ |
| --- | --- | --- |
| At rest, or constant velocity | $mg$ | $500\ \text{N}$ |
| Accelerating upward at $2\ \text{m/s}^2$ | $m(g+a)$ | $600\ \text{N}$ |
| Accelerating downward at $2\ \text{m/s}^2$ | $m(g-a)$ | $400\ \text{N}$ |
| Cable snaps ($a = -g$, free fall) | $0$ | $0$ — the person floats |

A lift accelerating down fast enough *reduces* your apparent weight; with $a = g$ downward the floor cannot press at all and you float: weightlessness — as astronauts experience in orbit precisely because they are in free fall around the Earth, not because gravity is absent.

## 4. Physics at work: the block on an accelerating floor

A block rests on the floor of a truck that accelerates horizontally with $a$. Why doesn't it simply stay put relative to the ground? Because friction with the floor drags the block along. Static friction can supply at most $\mu_s m g$, so the floor's acceleration is transmitted to the block only up to

$$
a_{\max} = \mu_s g.
$$

**A worked limit.** Take $\mu_s = 0.5$ on the truck floor: above $a = 5\ \text{m/s}^2$ friction cannot keep pace; the block *slides backward relative to the truck*, then kinetic friction takes over. In the truck's frame you can describe it even more concisely: the pseudo force $ma$ pushes the block backward, and it stays put only while friction can defeat the pseudo force. Both descriptions agree on the boundary value.

Railway couplings and stacked cargo on ships are engineered against exactly this number — a designer picks the safe acceleration from the grip available, then builds braking curves around it.

## 5. Choosing the frame: a two-question decision

1. Is my frame inertial (fixed to the ground, or moving at constant velocity relative to it)? Then use the plain laws, real forces only.
2. Must I work in an accelerating frame (helpful when a body's motion is *given relative to that frame*)? Then add $\vec F_{\text{pseudo}} = -m\vec a_{\text{frame}}$ to every mass, never search for a reaction to it, and proceed as normal.

Both routes reach the same physics — the pseudo force is a bookkeeping convenience, not a new force of nature.

## Try it yourself

**A.** A $60\ \text{kg}$ person weighs themselves on bathroom scales inside a lift accelerating up at $2.5\ \text{m/s}^2$. ($g = 10\ \text{m/s}^2$.) What does the scale read?

<details><summary>Show the reasoning</summary>

A scale reads the normal force it applies: $N = m(g + a) = 60 \times 12.5 = 750\ \text{N}$, which a scale calibrated in kg would display as $75\ \text{kg}$. The lift's upward acceleration presses you harder into the scale — apparent weight up, true mass unchanged.
</details>

**B.** A helium balloon floats in a car's cabin, tied loosely by a string to the front seat. When the car accelerates forward, which way does the balloon string tilt?

<details><summary>Show the reasoning</summary>

Forward — the opposite of what dense objects do. In the car's accelerating frame the air around the balloon experiences a backward pseudo force, so "effective gravity" in the cabin points both down and backward, and the air pressure gradient piles air toward the rear. A helium balloon's buoyancy makes it rise *against* effective gravity, and since the air's mass (which feels the pseudo force strongly) far exceeds the balloon's, rising against effective gravity means drifting **forward**, toward the front of the car. Everything dense — passengers, luggage, coffee — lurches backward while the balloon leans forward.
</details>

**C.** A water-filled bucket on a train's floor is at rest relative to the train, which accelerates at $a$. Describe the water's free surface.

<details><summary>Show the reasoning</summary>

In the train's frame the effective gravity is the vector sum of $g$ down and a pseudo acceleration $a$ backward — a tilted combination. The free surface, perpendicular to effective gravity, tilts by $\tan\theta = a/g$ with its high side to the rear. On a train braking hard, coffee in a cup tilts the same way.
</details>

## Remember

- Newton's laws hold only in inertial frames; constant-velocity frames are all inertial.
- In an accelerating frame, add $\vec F_{\text{pseudo}} = -m\vec a_{\text{frame}}$ to every mass; it has no reaction partner.
- Apparent weight in a lift: $N = m(g \pm a)$; free fall means $N = 0$ and weightlessness.
- Objects overloaded beyond $\mu_s g$ slide on accelerating floors: pseudo force versus friction.
- Whenever a body's motion is easiest to describe relative to an accelerating system (lift, truck, turntable), the frame patch saves the day.
- Collisions and recoil need a different tool entirely — not forces but momentum; the next module supplies it.
