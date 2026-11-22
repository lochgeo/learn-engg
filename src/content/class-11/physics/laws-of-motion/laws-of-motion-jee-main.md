## JEE Main sprint: laws of motion

This is a **50-minute, no-notes** paper covering the whole chapter: Newton's laws, FBDs, friction, pulleys, circular dynamics, frames and momentum. Take it only after the review module's mastery check is comfortable. Suggested pacing: **15 minutes** on Section A, **15** on B, **10** on C, **10** on D. Answer every question — there is no negative marking here — and tag anything that consumes more than 90 seconds for a second pass before time is called.

The exam habit that pays: before any equation, say silently *what is my system, which forces are external to it*. Most wrong answers in this chapter are bookkeeping errors, not arithmetic slips.

## Conditions and formula sheet (memorise by test day)

| Situation | Governing relation | Guard condition |
| --- | --- | --- |
| Equilibrium | $\sum F_x = 0$, $\sum F_y = 0$ | Choose axes along/away from inclines where needed |
| General dynamics | $\sum \vec F_{\text{ext}} = m\vec a$ per body | One axis set per body, sign convention stated |
| Static friction | $f_s \le \mu_s N$ | Below the limit it equals the *demand* |
| Kinetic friction | $f_k = \mu_k N$ | Valid once sliding has begun |
| Repose / angle of friction | $\tan\theta_r = \tan\lambda = \mu_s$ | Sliding begins when $\tan\theta > \mu$ |
| Incline slide | $a = g(\sin\theta - \mu\cos\theta)$ | First check $\tan\theta > \mu$ |
| String constraint | $a_A = a_B$ (magnitudes), one $T$ | Massless string, frictionless massless pulley |
| Atwood machine | $a = \frac{m_2-m_1}{m_1+m_2}g$, $T = \frac{2m_1m_2}{m_1+m_2}g$ | $T$ must lie between $m_1g$ and $m_2g$ |
| Circular turn | $\sum F_r = mv^2/r$ inward | "Centripetal force" is a role for real forces |
| Level-road grip limit | $v_{\max} = \sqrt{\mu_s rg}$ | Mass cancels |
| Frictionless banked design | $\tan\theta = v^2/rg$ | Exact only at the design speed |
| Conical pendulum | $\omega^2 = g/(L\cos\theta)$ | $\theta \ne 0$ |
| Accelerating frame | Add $\vec F_{\text{pseudo}} = -m\vec a_{\text{frame}}$ | No reaction partner; inertial frame needs no patch |
| Apparent weight in lift | $N = m(g \pm a)$ | $a$ is signed; free fall gives zero |
| Impulse–momentum | $\vec J = \int\vec F\,dt = \Delta\vec p$ | Impulse is the *area* under an $F$–$t$ graph |
| Momentum conservation | $\sum m\vec v_i = \sum m\vec v_f$ | External impulses negligible over the interval |

Use $g = 10\ \text{m/s}^2$ throughout unless a question states otherwise.

## Section A — 10 rapid MCQs

### 1. Ball in a smooth-riding train

A ball is dropped inside a train moving in a straight line at a steady $72\ \text{km/h}$. It lands:

- A. behind the drop point
- B. ahead of the drop point
- C. directly below the drop point
- D. anywhere, depending on the train's mass

<details><summary>Answer</summary>

**C.** Constant velocity means zero acceleration; by the first law the retaining horizontal velocity of the ball and the train match every instant. Inertia keeps the *state of motion*; a force could only change it.
</details>

### 2. Truck versus scooter

A truck and a scooter collide head-on. During the collision the force on the scooter is:

- A. much larger than the force on the truck
- B. exactly equal in magnitude to the force on the truck
- C. smaller than the force on the truck, being lighter
- D. zero, since it sits on wheels

<details><summary>Answer</summary>

**B.** A third-law pair: equal and opposite forces on different bodies. The *damage* difference comes from acceleration, $a = F/m$: the same force produces a far larger acceleration of the lighter vehicle. Distinguish always between equal forces and unequal responses.
</details>

### 3. Sudden floor drop

A man stands on weighing scales in a lift accelerating downward at $5\ \text{m/s}^2$. The scale reads a weight of:

- A. $mg$
- B. $mg/2$
- C. $3mg/2$
- D. zero

<details><summary>Answer</summary>

**B.** $N = m(g - a) = m(10 - 5) = \frac{mg}{2}$. Contact normal, not true weight, is what scales read.
</details>

### 4. Static friction's value

A horizontal $3\ \text{N}$ force acts on a $5\ \text{kg}$ crate on a floor with $\mu_s = 0.5$ ($g = 10\ \text{m/s}^2$). The crate does not move. Friction on it is:

- A. $25\ \text{N}$
- B. $3\ \text{N}$
- C. $0.5\ \text{N}$
- D. $2\ \text{N}$

<details><summary>Answer</summary>

**B.** Below the limit $\mu_sN = 25\ \text{N}$, static friction takes exactly the demand value: $f_s = 3\ \text{N}$. Option A is the *limit*, reached only at the verge of sliding.
</details>

### 5. Repose angle

A surface, tilted, holds a block until tilt reaches $\theta_r = 26.6^\circ$. The coefficient of static friction is about:

- A. $0.27$
- B. $0.50$
- C. $0.73$
- D. $1.0$

<details><summary>Answer</summary>

**B.** $\tan 26.6^\circ \approx 0.50$. At larger tilts $\tan\theta > \mu_s$, the weight component beats peak friction and the block slides.
</details>

### 6. Atwood acceleration

Masses $2m$ and $m$ hang over a light frictionless pulley. The acceleration magnitude is:

- A. $g/2$
- B. $g/3$
- C. $2g/3$
- D. $g$

<details><summary>Answer</summary>

**B.** $a = \frac{m_2-m_1}{m_2+m_1}g = \frac{2m-m}{3m}\,g = \frac{g}{3}$.
</details>

### 7. Speed doubles on a level curve

A car just manages a level bend at speed $v$. At $2v$, the needed centripetal force is multiplied by:

- A. $2$
- B. $4$
- C. $\frac{1}{2}$
- D. $1$

<details><summary>Answer</summary>

**B.** $F_c = mv^2/r$ grows as $v^2$; doubling speed quadruples the demand, while friction's ceiling $\mu_s mg$ is unchanged — hence the turn fails at high speed.
</details>

### 8. Weightless cabin

In a lift whose cable has snapped (free fall), a passenger's apparent weight is zero because:

- A. gravity stops acting
- B. the lift's floor no longer presses on the passenger
- C. the passenger's mass becomes zero
- D. air drag cancels gravity

<details><summary>Answer</summary>

**B.** Gravity still acts (it is what accelerates both passenger and cabin). With $a = g$ down, the contact balance $N = m(g-a)$ gives zero: passenger and floor fall together, so nothing presses.
</details>

### 9. Soft catch

A ball of given incoming momentum is caught and brought to rest. A catcher prolonging the catch time by a factor of four feels a force:

- A. four times larger
- B. four times smaller
- C. unchanged
- D. sixteen times smaller

<details><summary>Answer</summary>

**B.** Fixed $\Delta p$ demands fixed impulse; the average force $F_{\text{avg}} = \Delta p/\Delta t$ falls by the same factor as $\Delta t$ rises.
</details>

### 10. Impulse sign

A $0.2\ \text{kg}$ ball strikes a wall horizontally at $5\ \text{m/s}$ and rebounds along its line at $5\ \text{m/s}$. The wall's impulse on the ball has magnitude:

- A. $0$
- B. $1\ \text{N·s}$
- C. $2\ \text{N·s}$
- D. $5\ \text{N·s}$

<details><summary>Answer</summary>

**C.** $\Delta p = (0.2)(+5) - (0.2)(-5) = 2\ \text{kg·m/s}$, so $J = 2\ \text{N·s}$. Reversal doubles the momentum change compared with a mere stop (which needs $1\ \text{N·s}$).
</details>

## Section B — 5 numerical-value questions

*Write a single number with units. No options are available.*

### 11. Table and hanging mass

A $5\ \text{kg}$ block on a frictionless table is tied over a light frictionless pulley to a hanging $3\ \text{kg}$ block. Find the magnitude of the system's acceleration in $\text{m/s}^2$.

<details><summary>Answer</summary>

$a = \frac{m_2}{m_1+m_2}g = \frac{3}{8}\times 10 = 3.75\ \text{m/s}^2$. (Tension, if asked: $T = m_1a = 5 \times 3.75 = 18.75\ \text{N}$, less than the hanging weight $30\ \text{N}$ because the hanging block is itself accelerating down.)
</details>

### 12. Rough incline

A block slides down a $37^\circ$ incline with $\mu_k = 0.25$ (take $\sin 37^\circ = 0.6$, $\cos 37^\circ = 0.8$). Find its acceleration in $\text{m/s}^2$.

<details><summary>Answer</summary>

Slide test: $\tan 37^\circ = 0.75 > 0.25$, so it slides. Then

$$a = g(\sin\theta - \mu_k\cos\theta) = 10(0.6 - 0.25\times0.8) = 10(0.6 - 0.2) = 4\ \text{m/s}^2.$$

Mass never appears; a heavier copy would slide identically.
</details>

### 13. Banked design speed

A circular track of radius $45\ \text{m}$ is banked at $45^\circ$ for zero-friction running. Find the design speed in $\text{m/s}$.

<details><summary>Answer</summary>

$\tan 45^\circ = 1$, so $v = \sqrt{rg\tan\theta} = \sqrt{45 \times 10} = \sqrt{450} \approx 21.2\ \text{m/s}$ (about $76\ \text{km/h}$).
</details>

### 14. Conical pendulum period

A conical pendulum of string length $0.9\ \text{m}$ swings with the string at $60^\circ$ to the vertical. Find the period in seconds.

<details><summary>Answer</summary>

Vertical depth: $L\cos 60^\circ = 0.45\ \text{m}$.

$$T_{\text{per}} = 2\pi\sqrt{\frac{L\cos\theta}{g}} = 2\pi\sqrt{\frac{0.45}{10}} = 2\pi\sqrt{0.045} \approx 2\pi(0.212) \approx 1.33\ \text{s}.$$

Check: flatter swing ($60^\circ$) gives a faster pendulum than the small-angle case — consistent with $\omega^2 = g/(L\cos\theta)$.
</details>

### 15. Impulse from a graph

A force on a $0.5\ \text{kg}$ ball builds as a triangle from $0$ to a peak of $100\ \text{N}$ over a total contact time of $0.02\ \text{s}$, then falls to zero. Find the ball's speed change in $\text{m/s}$.

<details><summary>Answer</summary>

Impulse $=$ area $= \frac{1}{2} \times 0.02 \times 100 = 1.0\ \text{N·s}$. Then $\Delta v = J/m = 1.0/0.5 = 2\ \text{m/s}$ (in the direction of the net impulse). Note the *average* force is $50\ \text{N}$, half the peak — a classic two-mark trap.
</details>

## Section C — 3 assertion–reason questions

*Standard options for every question:*

- **A.** Both Assertion and Reason are true, and the Reason is a correct explanation of the Assertion.
- **B.** Both Assertion and Reason are true, but the Reason is not a correct explanation of the Assertion.
- **C.** Assertion is true, Reason is false.
- **D.** Assertion is false, Reason is true.

### 16.

**Assertion:** A body in equilibrium must have no forces acting on it.
**Reason:** Equilibrium requires the vector sum of all forces acting on the body to be zero.

<details><summary>Answer</summary>

**D.** Equilibrium means $\sum \vec F = 0$, which is exactly what the (true) Reason states — many forces may act provided they cancel, as in a lamp hung by two slanted cables. The Assertion confuses *no net force* with *no force*, so it is false.
</details>

### 17.

**Assertion:** A block can be carried without slipping on the floor of an accelerating truck only when the truck's acceleration is at most $\mu_s g$.
**Reason:** Static friction between block and truck supplies the horizontal push, and it cannot exceed $\mu_s N = \mu_s mg$.

<details><summary>Answer</summary>

**A.** For no slip, the block needs $a = f_s/m$ horizontally, and peak friction caps it: $ma \le \mu_s m g$, so $a \le \mu_s g$. The Reason states precisely why. (Obliquely useful in frame language too: in the truck's frame the pseudo force $ma$ must not outrun friction.)
</details>

### 18.

**Assertion:** In an Atwood machine, the string tension is always less than the heavier mass's weight.
**Reason:** The heavier mass accelerates downward, so the net force on it must point downward.

<details><summary>Answer</summary>

**A.** Writing the heavier mass's equation down-positive: $m_2 g - T = m_2 a > 0$, hence $T < m_2 g$. The Reason is exactly the justification. Equality occurs only if the system is at rest or in free fall together ($a = 0$ needs equal masses; free fall needs $m_1 \to 0$).
</details>

## Section D — 2 matching / multi-statement questions

### 19. Match the hidden supplier

Match each circular-motion situation (Column I) with the real force or force component supplying the inward pull (Column II).

| Column I (situation) | | Column II (inward supplier) |
| --- | --- | --- |
| (i) car negotiating a flat curve | | (P) gravity |
| (ii) satellite in circular orbit | | (Q) static friction |
| (iii) bob of a conical pendulum | | (R) horizontal component of normal force |
| (iv) car at design speed on a banked road | | (S) horizontal component of tension |

<details><summary>Answer</summary>

(i)–Q: on a flat road only friction acts horizontally, so it alone must supply $mv^2/r$.

(ii)–P: gravity is the entire centripetal force in orbit.

(iii)–S: the tension acts along the string; only its horizontal component $T\sin\theta$ points inward.

(iv)–R: the normal force is perpendicular to the banked surface; its horizontal component $N\sin\theta$ bends the path, friction being zero at the design speed.

So: (i)–Q, (ii)–P, (iii)–S, (iv)–R. No situation ever needed an added "centripetal force" — each is an ordinary force playing that role.
</details>

### 20. Multi-statement audit

Consider a $2\ \text{kg}$ block on a frictionless table joined by a light string over a massless frictionless pulley to a hanging $3\ \text{kg}$ block. Which of the following statements are correct?

- **(i)** The string tension is internal to the two-block-plus-string system and does not accelerate the system as a whole.
- **(ii)** The blocks' common acceleration is $3g/5$.
- **(iii)** The tension exceeds the hanging block's weight.
- **(iv)** If the table block's mass became extremely large, the acceleration would approach zero and the tension would approach the hanging block's full weight.

<details><summary>Answer</summary>

**(i), (ii) and (iv) are correct; (iii) is false.**

- (i): true — tension pulls the table block forward and the hanging block upward with equal force; internal pairs cancel in the system sum, leaving $a = m_2 g/(m_1+m_2)$.
- (ii): true — $a = \frac{3}{2+3}g = 0.6g = 3g/5$.
- (iii): false — here $a = 6\ \text{m/s}^2$, and on the hanging block $m_2 g - T = m_2 a = 3 \times 6 = 18\ \text{N}$, so $T = 30 - 18 = 12\ \text{N} < m_2 g$. The tension is *less than* the hanging weight, because the hanging block must itself accelerate downward.
- (iv): true — $a = \frac{m_2}{m_1+m_2}g \to 0$ as $m_1 \to \infty$, and then $T \to m_2 g$ (limiting-case check of the Atwood-style formulas).

</details>

<learning-block type="mistake" title="Three traps that repeat every year">

- Reading *velocity* instead of *acceleration* in lift problems (question 3 and 8-style): the direction of motion never enters a force balance.
- Using the limiting static friction value as the current friction value: below the slide threshold, friction equals the demand.
- Treating "centripetal force" or "centrifugal force" as entries in a free-body diagram: they are accounting devices, and either slip costs a full question.

</learning-block>

## Review by error, not by score

| If you missed… | Revisit | Then redo |
| --- | --- | --- |
| 1, 2 or 16 | Newton's laws and inertia | Re-derive the third law's "different bodies" rule and the equilibrium conditions. |
| 3, 8 or 18 | Free-body diagrams and equilibrium (and lift cases) | Write $N$ from $\sum F_y = ma_y$ in four lift situations. |
| 4, 5, 12 or 17 | Friction | Redo the repose derivation and the incline acceleration formula from scratch. |
| 6, 11 or 20 | Connected bodies, pulleys and constraints | Solve the table-plus-hanging machine per body and by system; verify with limits. |
| 7, 13, 14 or 19 | Dynamics of circular motion | Rebuild $v_{\max} = \sqrt{\mu rg}$, $\tan\theta = v^2/rg$, and the conical-pendulum period. |
| 9, 10 or 15 | Impulse and momentum | Practise areas under $F$–$t$ graphs and reversal sign-handling. |

<learning-block type="recap" title="Ready to move on?">

Aim for at least **15 of 20** correct within the 50 minutes, with a stated method for every question. Anything solved by luck is a revision target, not a strength. Once you clear that bar, the next chapter — Work, Energy and Power — will recycle these force tools through the energy lens.

</learning-block>
