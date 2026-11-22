## One pull, two effects

A porter drags a trolley with a rope inclined above the horizontal. Part of the pull slides the trolley forward and part of it presses the trolley down; the rope's single force behaves as two independent pulls. Resolving a vector into components used to be an addition trick in the last module — here it becomes the main working method, extended with two products that compare vectors, and then applied to motion seen from different frames: a boat fighting a current, a cyclist riding into slanting rain.

## 1. Components, briefly restated

Given $\vec A$ of magnitude $A$ at angle $\theta$ above the $+x$ axis:

$$
\vec A = A\cos\theta\ \hat i + A\sin\theta\ \hat j.
$$

Going the other way, $A = \sqrt{A_x^2+A_y^2}$ and $\tan\theta = A_y/A_x$, with the quadrant fixed by the signs of $A_x$ and $A_y$. Two quick habits speed up JEE work: a vector making angle $\theta$ with the *vertical* has components $A\sin\theta$ across and $A\cos\theta$ up — always against the angle, never assume — and the pair $\{37^\circ, 53^\circ\}$ has $\cos = 4/5$ and $3/5$, worth recognising on sight.

## 2. The scalar (dot) product

The **dot product** combines two vectors into a plain number:

$$
\vec A\cdot\vec B = AB\cos\theta = A_xB_x + A_yB_y,
$$

where $\theta$ is the angle between them. Read it as a *projection*: it answers "how much of $\vec A$ lies along $\vec B$". Three uses follow immediately:

- **Perpendicularity test:** $\vec A\cdot\vec B = 0$ exactly when the vectors are perpendicular (unless one is zero). This is the fastest way to check two directions in a problem.
- **Component extraction:** the scalar projection of $\vec A$ along a unit vector $\hat u$ is $\vec A\cdot\hat u$.
- **Work preview:** in the Work, Energy and Power chapter, work is defined as $\vec F\cdot\Delta\vec r$; the dot product is doing the physics there.

## 3. The vector (cross) product idea

The **cross product** of two plane vectors produces a vector of magnitude

$$
|\vec A\times\vec B| = AB\sin\theta = \text{area of the parallelogram spanned by }\vec A\text{ and }\vec B,
$$

directed by the right-hand rule perpendicular to both. In three dimensions with right-handed axes, $\hat i\times\hat j = \hat k$, and the product **anticommutes**: $\vec A\times\vec B = -\vec B\times\vec A$. For planar problems the magnitude is usually what matters — and the geometric meaning (an *area*) recurs when torque and angular momentum are developed in the Rotational Motion chapter. Note the complementary behaviour: the dot product is largest when vectors are parallel ($\cos\theta$), the cross product largest when they are perpendicular ($\sin\theta$).

## 4. Relative velocity in two dimensions

Everything measured is measured by somebody. If observer $B$ tracks object $A$, the velocity $A$ has *relative to $B$* is the vector difference

$$
\vec v_{AB} = \vec v_A - \vec v_B.
$$

The one-dimensional version from Motion in a Straight Line is the special case where all velocities lie along one line. The new content is that subtraction is now graphical subtraction: $\vec v_A - \vec v_B = \vec v_A + (-\vec v_B)$, reversing the second arrow before adding. A reliable frame discipline: pick one observer, convert **all** velocities into that frame by subtracting the observer's velocity, then solve a simple one-frame problem.

## 5. River–boat problems

Now the same discipline meets its classic exam application — the river crossing. A boat that can move at speed $v_b$ relative to still water crosses a river of width $d$ whose current runs at $v_r$. The velocity relative to the ground is the vector sum

$$
\vec v_{\text{ground}} = \vec v_{\text{boat}} + \vec v_{\text{water}},
$$

because the water itself carries the boat downstream. Two goals, two different strategies:

| Goal | Aim | Crossing time | Drift |
| --- | --- | --- | --- |
| Minimum time | Straight across ($\perp$ bank) | $t = d/v_b$ | $v_r\,d/v_b$ downstream |
| Minimum drift (zero, if $v_b > v_r$) | Upstream at $\sin\theta = v_r/v_b$ | $t = d/\sqrt{v_b^2 - v_r^2}$ | $0$ |

The minimum-time crossing is fastest because the full still-water speed is spent across the river. The zero-drift crossing sacrifices part of the boat's velocity to cancel the current, so the ground speed across is only $\sqrt{v_b^2 - v_r^2}$ — which is why it takes longer. If $v_b \le v_r$, no heading cancels the drift; the best possible strategy is to head as far upstream as possible.

<learning-block type="example" title="Worked example: one river, two strategies">

A swimmer manages $2\ \text{m/s}$ in still water. The river is $100\ \text{m}$ wide and flows at $1\ \text{m/s}$.

*Minimum time:* aim straight across. Then $t = 100/2 = 50\ \text{s}$, and the current carries the swimmer $1 \times 50 = 50\ \text{m}$ downstream. Ground speed $= \sqrt{2^2+1^2} = \sqrt5 \approx 2.24\ \text{m/s}$. **Check:** ground path length $= \sqrt{100^2+50^2} \approx 112\ \text{m}$, and $2.24 \times 50 \approx 112\ \text{m}$ — consistent.

*Zero drift:* aim upstream at $\sin\theta = 1/2$, so $\theta = 30^\circ$. Ground speed across $= \sqrt{4-1} = \sqrt3 \approx 1.73\ \text{m/s}$, giving $t = 100/1.73 \approx 57.7\ \text{s}$. **Check:** $57.7 > 50$, exactly as the table predicts, because part of the swimmer's effort now fights the current.

</learning-block>

## 6. Rain problems

Rain falling vertically in the ground frame appears slanted to a moving observer, because the observer's velocity must be subtracted from the rain's. If rain falls at speed $v_r$ and a person walks at $v_p$, the rain's velocity in the person's frame has a horizontal component $v_p$ pointing *backwards* — equivalently, the rain appears to come from ahead. The umbrella should be tilted from the vertical by

$$
\tan\theta = \frac{v_p}{v_r},
$$

leaning towards the direction of walking. A useful supporting speed: a person walking at $6\ \text{m/s}$ into vertically falling rain of speed $10\ \text{m/s}$ sees the drops approach at $\sqrt{6^2+10^2} \approx 11.7\ \text{m/s}$, from $\arctan(0.6) \approx 31^\circ$ from the vertical.

<learning-block type="mistake" title="Frame errors in relative-velocity problems">

- Adding magnitudes instead of vectors: a $3\ \text{m/s}$ current and a $4\ \text{m/s}$ boat do not give a $7\ \text{m/s}$ or $1\ \text{m/s}$ crossing unless the headings are stated.
- Using the shortest-time aiming direction with the shortest-path time formula. Each column of the river table pairs only with its own row.
- Forgetting which frame a velocity belongs to. Write $\vec v_{AB} = \vec v_A - \vec v_B$ with subscripts every time; the phrase "speed of the boat" is meaningless without saying relative to what.

</learning-block>

## Try it yourself

**1.** A boat capable of $5\ \text{m/s}$ in still water must cross a $60\ \text{m}$ wide river flowing at $3\ \text{m/s}$, in the least possible time. Find that time and the drift.

<details><summary>Show the reasoning</summary>

For minimum time the boat heads straight across: $t = d/v_b = 60/5 = 12\ \text{s}$. The current then drifts it $3 \times 12 = 36\ \text{m}$ downstream. The ground speed is $\sqrt{5^2+3^2} = \sqrt{34} \approx 5.83\ \text{m/s}$; check: $\sqrt{60^2+36^2} = \sqrt{4896} \approx 70\ \text{m} = 5.83 \times 12$. Consistent.
</details>

**2.** Show that $\vec A = 3\hat i + 4\hat j$ and $\vec B = 4\hat i - 3\hat j$ are perpendicular, and find the magnitude of their cross product.

<details><summary>Show the reasoning</summary>

$$
\vec A\cdot\vec B = (3)(4) + (4)(-3) = 12 - 12 = 0,
$$

so the angle is $90^\circ$. Both vectors have magnitude $5$, so $|\vec A\times\vec B| = (5)(5)\sin90^\circ = 25$, directed perpendicular to the plane (along $+\hat z$ or $-\hat z$ by the right-hand rule). Note how the sine rule makes the cross product maximal here while the dot product vanishes.
</details>

**3.** A vector of magnitude $10\ \text{m/s}$ makes $60^\circ$ with the $+x$ axis. Write it in unit-vector form.

<details><summary>Show the reasoning</summary>

Components: $A_x = 10\cos60^\circ = 5\ \text{m/s}$ and $A_y = 10\sin60^\circ = 5\sqrt3 \approx 8.66\ \text{m/s}$. So

$$
\vec A = 5\ \hat i + 8.66\ \hat j\ \ \text{m/s}.
$$

Magnitude check: $\sqrt{25 + 75} = 10\ \text{m/s}$, recovered.
</details>

## Remember

- Components turn geometry into arithmetic; every vector method in this chapter is a component method in disguise.
- Dot product tests perpendicularity and measures projection; cross product measures the enclosed area and needs the right-hand rule for direction.
- Relative velocity is vector subtraction, and every velocity must be tagged with the frame it belongs to.
- River problems: minimum time aims across the stream, minimum drift aims upstream — the two aims are different unless $v_r = 0$.
- Next module: these vector tools drive the central two-dimensional motion of the chapter, the projectile.
