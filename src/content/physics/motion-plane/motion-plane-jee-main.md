## JEE Main sprint: how to use this set

This is a **50-minute, no-notes** paper covering the whole Motion in a Plane chapter. Use $g = 10\ \text{m/s}^2$ unless a question states otherwise. Budget: about 15 minutes for Section A, 10 for Section B, 10 for Section C, and 15 for Section D. If any single calculation exceeds 90 seconds without progress, mark it and move on — most marks here come from choosing the right frame and the right tool, not from long algebra.

Before writing any equation, answer two questions about the problem: *what frame am I working in*, and *which column (or component) carries the unknown quantity*?

## Conditions and formula sheet

| Situation | Start with | Check before using |
| --- | --- | --- |
| Two vectors combine | Components, or $R^2 = A^2+B^2+2AB\cos\theta$ | Angle is between the **vectors**, not w.r.t. an axis |
| Perpendicular or angle between vectors | $\vec A\cdot\vec B = A_xB_x + A_yB_y$ | Zero dot product ⟺ perpendicular |
| Moving observer (boats, rain, wind) | $\vec v_{AB} = \vec v_A - \vec v_B$ | Every velocity is relative to something |
| River crossing | Time row or drift row of the river table | The two goals use different headings — never mix |
| Launch and landing, equal heights | $T = \frac{2u\sin\theta}{g}$, $R = \frac{u^2\sin2\theta}{g}$ | Heights genuinely equal; otherwise general method |
| Launch or landing at a height | Solve $h + u_yt - \frac12gt^2 = 0$ first | Take the positive (downward-complete) root |
| Projectile + incline | Frame along the incline; gravity splits $g\sin\beta$, $g\cos\beta$ | $\alpha$ is measured **from the incline surface** |
| Uniform circular motion | $a_c = v^2/r = \omega^2 r$, $v = \omega r$ | $\omega$ in rad/s; $a_c$ points to the centre |
| Speed changing on a curve | $a_t = \alpha r$ and $a_c = v^2/r$ (instantaneous $v$) | Sum by Pythagoras, never by arithmetic |

<learning-block type="mistake" title="Fastest sanity checks">

- A range quoted for a launch and landing at different heights almost always came from $R = u^2\sin2\theta/g$ used outside its licence.
- Any "centrifugal force" on your diagram invalidates the frame — there is only inward acceleration in the ground frame.
- Apparent rain speed larger than every input speed is normal; apparent speed *smaller* than the walking speed is not.

</learning-block>

## Section A — 10 rapid MCQs

### 1. Perpendicular forces

Two forces of $6\ \text{N}$ and $8\ \text{N}$ act at right angles. Their resultant is:

- A. $2\ \text{N}$
- B. $10\ \text{N}$
- C. $14\ \text{N}$
- D. $48\ \text{N}$

<details><summary>Answer</summary>

**B.** Perpendicular vectors add by Pythagoras: $R = \sqrt{6^2+8^2} = 10\ \text{N}$.
</details>

### 2. Equal ranges

For a fixed launch speed over level ground, equal ranges are obtained from the pair:

- A. $20^\circ$ and $40^\circ$
- B. $25^\circ$ and $65^\circ$
- C. $30^\circ$ and $45^\circ$
- D. $15^\circ$ and $30^\circ$

<details><summary>Answer</summary>

**B.** Complementary angles ($\theta$ and $90^\circ-\theta$) share a range; $25^\circ + 65^\circ = 90^\circ$.
</details>

### 3. The horizontal column

In ideal projectile motion (no air resistance), the horizontal velocity:

- A. decreases uniformly
- B. increases, then decreases
- C. stays constant
- D. is zero at the top

<details><summary>Answer</summary>

**C.** No horizontal force acts, so $v_x = u\cos\theta$ throughout. At the top only $v_y$ vanishes.
</details>

### 4. Fall time from a height

A ball thrown horizontally from a height $h$ reaches the ground in:

- A. $h/g$
- B. $\sqrt{h/g}$
- C. $\sqrt{2h/g}$
- D. $2h/g$

<details><summary>Answer</summary>

**C.** Free fall from rest vertically: $h = \frac12gt^2 \Rightarrow t = \sqrt{2h/g}$. The horizontal speed does not appear.
</details>

### 5. Period and speed

A particle completes each circular lap of radius $r$ in period $T$. Its speed is:

- A. $rT/(2\pi)$
- B. $2\pi r/T$
- C. $2\pi T/r$
- D. $\pi r/T$

<details><summary>Answer</summary>

**B.** One lap covers $2\pi r$ in time $T$: $v = \omega r = (2\pi/T)r$.
</details>

### 6. Scaling of centripetal acceleration

Keeping the angular velocity fixed and doubling the radius of uniform circular motion makes the centripetal acceleration:

- A. half
- B. unchanged
- C. double
- D. four times

<details><summary>Answer</summary>

**C.** With $\omega$ fixed, $a_c = \omega^2r$ scales linearly with $r$. (Careful: with $v$ fixed instead, doubling $r$ would *halve* $a_c = v^2/r$.)
</details>

### 7. Angle for maximum range

On level ground, the launch angle that maximises range is:

- A. $30^\circ$
- B. $37^\circ$
- C. $45^\circ$
- D. $60^\circ$

<details><summary>Answer</summary>

**C.** $\sin2\theta \le 1$, with equality at $2\theta = 90^\circ$, i.e. $\theta = 45^\circ$.
</details>

### 8. Minimum resultant

Two vectors of equal magnitude $a$ produce a resultant of minimum magnitude. That minimum is:

- A. $0$
- B. $a$
- C. $a\sqrt2$
- D. $2a$

<details><summary>Answer</summary>

**A.** At $180^\circ$ the two vectors cancel exactly, giving $|a - a| = 0$.
</details>

### 9. Rain in the frame of a runner

Rain falls vertically at $10\ \text{m/s}$. A person runs horizontally at $10\ \text{m/s}$. The rain appears to fall at an angle to the vertical of:

- A. $30^\circ$
- B. $45^\circ$
- C. $60^\circ$
- D. $0^\circ$ (still vertical)

<details><summary>Answer</summary>

**B.** In the runner's frame the rain has components $10\ \text{m/s}$ (horizontal) and $10\ \text{m/s}$ (vertical), so $\tan\theta = 10/10 = 1$ and $\theta = 45^\circ$; apparent speed is $\sqrt{10^2+10^2} = 14.1\ \text{m/s}$.
</details>

### 10. What stays constant on a level circle

For uniform horizontal circular motion, which quantity is constant?

- A. velocity
- B. acceleration vector
- C. momentum vector
- D. speed

<details><summary>Answer</summary>

**D.** Only the magnitude of velocity. Velocity, acceleration and momentum are vectors whose directions change continuously on the curve.
</details>

## Section B — 5 numerical-value questions

### 11. Components at a familiar angle

A velocity of magnitude $10\ \text{m/s}$ makes $37^\circ$ above the horizontal. Taking $\cos37^\circ = 0.8$ and $\sin37^\circ = 0.6$, find its horizontal component in m/s.

<details><summary>Answer</summary>

$v_x = 10\cos37^\circ = 10(0.8) = 8\ \text{m/s}$ (the vertical component would be $6\ \text{m/s}$).
</details>

### 12. Least-time river crossing

A river $80\ \text{m}$ wide flows at $3\ \text{m/s}$. A boat can move at $4\ \text{m/s}$ in still water and heads straight across for the least-time crossing. Find the crossing time in seconds.

<details><summary>Answer</summary>

$t = d/v_b = 80/4 = 20\ \text{s}$. (The current is irrelevant to the time in this strategy; it causes a drift of $3 \times 20 = 60\ \text{m}$.)
</details>

### 13. Range at the 3–4–5 angle

A projectile is launched at $25\ \text{m/s}$ at $53^\circ$ above level ground ($\cos53^\circ = 0.6$, $\sin53^\circ = 0.8$). Find its range in metres.

<details><summary>Answer</summary>

$u_x = 15\ \text{m/s}$, $u_y = 20\ \text{m/s}$; $T = 2u_y/g = 4\ \text{s}$; hence

$$
R = u_xT = 15 \times 4 = 60\ \text{m}.
$$

Check via the formula: $R = u^2\sin106^\circ/g = 625(0.96)/10 = 60\ \text{m}$. Consistent.
</details>

### 14. Horizontal launch range

A stone is thrown horizontally at $15\ \text{m/s}$ from a tower $20\ \text{m}$ high. Find its horizontal range in metres.

<details><summary>Answer</summary>

$t_f = \sqrt{2h/g} = \sqrt4 = 2\ \text{s}$, so $R = 15 \times 2 = 30\ \text{m}$.
</details>

### 15. Centripetal acceleration numerically

A particle moves at $20\ \text{m/s}$ on a circle of radius $10\ \text{m}$. Find its centripetal acceleration in m/s$^2$.

<details><summary>Answer</summary>

$a_c = v^2/r = 400/10 = 40\ \text{m/s}^2$, directed toward the centre — four times $g$, which is why fast, tight curves demand serious engineering.
</details>

## Section C — 3 assertion–reason questions

For each, choose:

- **A.** Both Assertion and Reason are true, and the Reason is a correct explanation of the Assertion.
- **B.** Both are true, but the Reason is *not* a correct explanation of the Assertion.
- **C.** Assertion is true, Reason is false.
- **D.** Assertion is false, Reason is true.

### 16. Radial acceleration

**Assertion:** in uniform circular motion, the acceleration of the particle is directed towards the centre.
**Reason:** the magnitude of the velocity is constant, while its direction changes continuously.

<details><summary>Answer</summary>

**A.** Uniform circular motion means $|\vec v|$ fixed but $\vec v$ rotating. The velocity change $\Delta\vec v$ between nearby instants points (in the limit) toward the centre, so the acceleration — the rate of change of $\vec v$ — is radial inward. The Reason genuinely explains the Assertion.
</details>

### 17. Velocity at the summit

**Assertion:** at the highest point of a projectile's path, its velocity is not zero.
**Reason:** at the highest point, the vertical component of the velocity is zero.

<details><summary>Answer</summary>

**B.** Both statements are true, but the Reason describes the *vertical* component only; the assertion survives because of the untouched horizontal component $u\cos\theta$. The Reason alone would have predicted zero velocity, so it is not the correct explanation — it is an incomplete half-truth about the same instant.
</details>

### 18. Work around a circle

**Assertion:** the net force on a body in uniform circular motion does no work on the body.
**Reason:** the net force on a body in uniform circular motion is zero.

<details><summary>Answer</summary>

**D.** The Reason is false: the net force is $mv^2/r$ inward, decidedly nonzero. But the Assertion is true, because that force is always perpendicular to the displacement ($\vec F \cdot d\vec r = 0$), so the speed and kinetic energy never change.
</details>

## Section D — 2 matching / multi-statement questions

### 19. Match the formulas

Match Column I with Column II.

| Column I | Column II |
| --- | --- |
| P. Time of flight (level ground) | 1. $v^2/r$ |
| Q. Horizontal range (level ground) | 2. $2u\sin\theta/g$ |
| R. Centripetal acceleration | 3. $u^2\sin2\theta/g$ |
| S. Angular velocity (period $T$) | 4. $2\pi/T$ |

<details><summary>Answer</summary>

**P–2, Q–3, R–1, S–4.** Each pair was derived in the chapter: the flight time from the vertical column, the range from $u_xT$, the centripetal acceleration from the small-velocity-triangle argument, and the angular velocity directly from the definition of a revolution.
</details>

### 20. Horizontal launch, three statements

A ball is projected horizontally with speed $u$ from a height $h$ above level ground (air resistance neglected). Consider:

- I. Its time of flight depends only on $h$ and $g$.
- II. Doubling $u$ doubles its time of flight.
- III. Its speed at landing is $\sqrt{u^2 + 2gh}$.

Which statements are correct?

<details><summary>Answer</summary>

**I and III only.**

- I: true — $t_f = \sqrt{2h/g}$, no $u$ anywhere.
- II: false — the time of flight is blind to the launch speed.
- III: true — at landing, $v_x = u$ and $v_y = \sqrt{2gh}$, so $v = \sqrt{u^2+2gh}$. Equivalently, gravity does $mgh$ of work, raising kinetic energy from $\frac12mu^2$ to $\frac12m(u^2+2gh)$.

The trap in II is precisely Question 4's lesson: horizontal and vertical motion are independent.
</details>

## Review by error, not by score

| If you missed… | Revisit | Then retry, specifically |
| --- | --- | --- |
| 1, 8, 11, 19 | Vectors and components (module 1) | Head-to-tail addition and the dot-product angle test |
| 9, 12 | Relative velocity frames (module 2) | Subtract the observer's velocity before any analysis |
| 2, 3, 5, 7, 13 | Level-ground projectiles (module 3) | The two-column table and the $\sin2\theta$ range licence |
| 4, 14, 20 | Height and incline launches (module 4) | Solving the vertical quadratic first |
| 5, 6, 10, 15 | Uniform circular motion (module 5) | $a_c = v^2/r$ vs $\omega^2r$ and when each scales |
| 17 or 18 | Acceleration meaning (modules 5–6) | Vector vs scalar: direction change is real acceleration |
| Any suggestion that $a_c$ uses the initial speed, or that $a_t$ and $a_c$ add arithmetically | Non-uniform circular motion (module 6) | Evaluate $a_c = v^2/r$ with the instantaneous speed and sum the components by Pythagoras |

<learning-block type="recap" title="Ready for a timed set?">

Score each section as you go: aim for at least 15 of 20 overall, and treat any *correct-by-luck* answer as a miss. Wrong answers with a written frame-and-tool decision are more valuable for revision than silent correct ones — the review table above turns each error into exactly one module to reread.

</learning-block>
