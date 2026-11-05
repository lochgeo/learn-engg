## Why buildings stand and cranes do not tip

A chandelier hangs motionless for decades; a crane lifts tonnes on a narrow base without toppling; a ladder leans confidently against a wall. Rigid bodies — unlike particles — can turn as well as slide, so keeping them at rest demands *two* separate conditions, met simultaneously. This module states them, introduces the pure-rotation device called a couple, ties each body to its centre of gravity, and finishes with the two favourite exam machines: the hinged beam and the ladder.

## 1. The two conditions of equilibrium

A rigid body is in **mechanical equilibrium** when its linear and angular accelerations are both zero. Translating the two great laws:

$$
\sum\vec F_{ext}=0
\qquad\text{and}\qquad
\sum\vec\tau_{ext}=0\ \text{(about any chosen point in the plane)}.
$$

The first prevents the body from drifting; the second prevents it from starting to spin. Both matter for every extended body — a metre-rule seesaw balanced at a knife edge satisfies $\sum\vec F=0$ all too easily, yet tips the moment the torques disagree.

Three practical habits:

- Choose axes: resolve $\sum\vec F$ into horizontal and vertical components, each separately zero.
- For the torque sum, **pick the pivot at the point where an unknown force acts** — that force then *never appears* in the torque equation. One clever pivot can eliminate one unknown entirely.
- A body in equilibrium has *zero* net torque about **every** point, so any pivot is legal; the choice is purely tactical.

## 2. Couples: pure rotation with no net push

Push equally hard forward and backward on opposite edges of a steering wheel. The forces cancel ($\sum\vec F=0$) but the wheel spins up. A pair of equal and opposite forces whose lines of action do not coincide is a **couple**; its torque is

$$
\tau_{\text{couple}}=F\,d,
$$

where $d$ is the perpendicular distance between the two lines of action.

The remarkable property: a couple's torque is the same about *every* point in the plane. Shift the pivot anywhere and both force arms shift in offsetting ways. Compare a single force, whose torque depends on the pivot — the couple is rotation's "pure" agent, delivering $\tau$ with zero net $F$.

**Numbers.** Two $5.0\ \text{N}$ forces opposing each other across $d=0.20\ \text{m}$: net force zero, torque $=(5.0)(0.20)=1.0\ \text{N·m}$ about any point. To hold the wheel still, the driver's hands must be *another* couple, anticlockwise of the same size: equilibrium keeps your palms busy even though no net force acts.

## 3. Centre of gravity

Gravity pulls each grain of a body, so a distributed force of thousands of tiny weights acts at once. Their resultant acts at a single point: the **centre of gravity**, the point at which the total weight may be treated as acting for torque purposes.

Writing the torque of the weight distribution about any origin and demanding a single equivalent point gives the same weighted average as Module 1 — so in a **uniform gravitational field**, the centre of gravity coincides with the **centre of mass**. For everyday objects that is close enough that the two names may be used interchangeably; they differ only for bodies so large that $g$ varies appreciably across them.

Balance test: an object hangs, when freely pivoted, with its centre of gravity vertically below the pivot; it balances stably when supported directly beneath that point. Loading a delivery van low and centred is, in essence, an exercise in keeping the centre of gravity between the axles.

## 4. Worked example: the hinged beam

A uniform rod of mass $m=4.0\ \text{kg}$ and length $L=1.0\ \text{m}$ is hinged to a wall at one end and held horizontal by a light wire attached to its far end, the wire making $30^\circ$ with the rod. Find the wire tension and both hinge components. Take $g=10\ \text{m/s}^2$.

**Torque about the hinge** (the strategic pivot — the hinge reaction drops out of the equation). The weight acts at the midpoint, $L/2$ along; the wire acts at the far end with moment arm $L\sin30^\circ$:

$$
mg\frac{L}{2}=T\,L\sin30^\circ
\quad\Rightarrow\quad
T=\frac{mg}{2\sin30^\circ}=\frac{40}{2(0.5)}=40\ \text{N}.
$$

**Force balance** for the hinge $(H, V)$:

$$
H=T\cos30^\circ=(40)(0.866)=34.6\ \text{N (toward the wall, balancing the wire's pull)},
$$
$$
V=mg-T\sin30^\circ=40-20=20\ \text{N (upward)} .
$$

Check the whole vertical book: the hinge and wire together supply exactly $20+20=40\ \text{N}$, the rod's weight. ✓ Notice that the wire is *not* a two-force support in the vertical sense alone — its tension is a single number with two jobs.

## 5. Worked example: the ladder

A ladder of mass $10\ \text{kg}$ (weight $100\ \text{N}$) and length $4.0\ \text{m}$ leans against a **frictionless** wall at $\theta=60^\circ$ to the ground. What friction is needed at the foot to keep it from slipping?

Forces on the ladder: weight $100\ \text{N}$ down at its centre; wall normal $N_w$ horizontal (no wall friction); ground normal $N=100\ \text{N}$ up; ground friction $f$ horizontal, pointing toward the wall.

**Horizontal and vertical balance:**

$$
f=N_w,\qquad N=mg=100\ \text{N}.
$$

**Torque about the base** (kills the two unknown ground forces). The weight's lever arm is $(L/2)\cos\theta$; the wall normal's is $L\sin\theta$:

$$
mg\frac{L}{2}\cos\theta=N_w\,L\sin\theta
\quad\Rightarrow\quad
N_w=\frac{mg}{2}\cot\theta=\frac{100}{2}(0.577)=28.9\ \text{N}.
$$

So $f=28.9\ \text{N}$, and the required static coefficient is

$$
\mu_s\ge\frac{f}{N}=\frac{28.9}{100}=0.29 .
$$

The pattern generalises: with a frictionless wall, $\mu_s\ge\tfrac12\cot\theta$ — the shallower the ladder, the better the floor must grip. A ladder at $60^\circ$ needs $\mu_s\ge0.29$; at $30^\circ$ it would need $\mu_s\ge0.87$, which is why shallow ladders slide.

<learning-block type="mistake" title="The hinge is a two-component unknown">

The most common equilibrium error is to treat a hinge (or the foot of a ladder) as a single force with a known direction. A pin or hinge exerts an unknown force *whose direction is itself unknown*: split it into $H$ and $V$ components and solve for both. Symptom of forgetting: a torque equation balanced but a force equation that refuses to close. Second classic slip: computing the torque of the weight about the ladder's base with the wrong lever arm — the weight's line of action is vertical, so its lever arm is the *horizontal* distance $\frac{L}{2}\cos\theta$, never $\frac{L}{2}$ alone.

</learning-block>

## 6. Levers and mechanical advantage

The torque condition powers a family of simple machines. For a rigid lever pivoted at a fulcrum, equilibrium of torques gives

$$
E\,d_E = L\,d_L,
$$

where $E$ is effort, $L$ load, and $d_E$, $d_L$ their perpendicular distances from the fulcrum. The **mechanical advantage** is

$$
MA=\frac{L}{E}=\frac{d_E}{d_L}.
$$

**Numbers.** A crowbar has its load $0.10\ \text{m}$ from the fulcrum and the hands $1.2\ \text{m}$ away. Raising a $1500\ \text{N}$ load needs $E=\dfrac{1500\times0.10}{1.2}=125\ \text{N}$ — a twelvefold force gain. The trade, as always in simple machines, is distance: the effort end sweeps twelve times as far as the load rises; work is *not* multiplied, only concentrated.

## Try it yourself

**Q1.** Two children of weights $300\ \text{N}$ and $450\ \text{N}$ stand on opposite ends of a $3.0\ \text{m}$ see-saw board of negligible mass. Where should the pivot sit for balance?

<details><summary>Show the reasoning</summary>

Let the pivot be $x$ from the $300\ \text{N}$ child, so $3.0-x$ from the $450\ \text{N}$ child. Torque balance about the pivot:

$$
300\,x=450(3.0-x)
\quad\Rightarrow\quad
750\,x=1350,\qquad x=1.8\ \text{m}.
$$

The pivot sits $1.8\ \text{m}$ from the lighter child — closer to the heavier one. Each weight times *its* lever arm matches; the heavier child gets the smaller distance, exactly the inverse-ratio rule for centres of mass acting through a support.
</details>

**Q2.** In the hinged-beam example, the wire is re-attached so that it makes $60^\circ$ with the rod instead of $30^\circ$. What tension is needed now, and what has the steeper wire changed?

<details><summary>Show the reasoning</summary>

$$
T=\frac{mg}{2\sin60^\circ}=\frac{40}{2(0.866)}=23.1\ \text{N}.
$$

A steeper wire puts more of its pull into the *rotating* job (moment arm $L\sin60^\circ$ is larger), so less tension suffices — but its horizontal component shrinks too, leaving less tension available to stabilise the rod horizontally through the hinge. Steeper wire: cheaper in tension, different hinge bookkeeping — but the vertical total for the hinge still closes at $mg$.
</details>

**Q3.** A uniform shelf is supported by two vertical brackets, one at each end. Why does loading the shelf near a bracket strain the far bracket less — and what happens conceptually as a very heavy load moves toward one end?

<details><summary>Show the reasoning</summary>

Take torques about one bracket. Load weight $W$ scraping along at distance $x$ from a bracket, with the brackets a distance $d$ apart: the *other* bracket carries the upward share $F=Wx/d$ (from $F\cdot d=Wx$). Its own share is $W-F$, so a load placed near one bracket is handled almost entirely by that bracket and the far one barely notices. As the load slides toward the far end, $x\to d$ and the far bracket's share approaches the full $W$; loading beyond the bracket line entirely turns the near bracket into the pivot point and the shelf tips over the edge unless it is fastened down. Shelves fail by being loaded outside the support line, i.e. with the centre of gravity carried beyond the brackets — not by being loaded under the brackets themselves.
</details>

## Remember

- Equilibrium needs **both** $\sum\vec F=0$ and $\sum\vec\tau=0$; solve forces by components, torques about a tactically chosen pivot.
- A couple ($\tau=Fd$) produces rotation with zero net force, and its torque is pivot-independent.
- In a uniform field the centre of gravity equals the centre of mass; bodies hang or balance with that point below or above their support.
- Signature results: hinged rod held by a wire at angle $\phi$ needs $T=\dfrac{mg}{2\sin\phi}$; a ladder on a frictionless wall needs $\mu_s\ge\dfrac{\cot\theta}{2}$ at its foot.
- A lever multiplies force by $d_E/d_L$ while trading path, never energy.
- With equilibrium and rotation now in hand, the next modules mix everything: first a practice run, then a timed JEE set.
