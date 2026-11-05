## One string, many bodies

A block on a table drags a hanging mass over a pulley; a lift carries a counterweight through a shaft; two crates are strapped together on a truck bed. Now the "one body" rule of the free-body diagram seems blocked — which body do you analyse? The answer is *each of them, separately*, joined by two extra pieces of machinery: **constraint relations** (what the string forces the accelerations to be) and clear bookkeeping about **internal versus external** forces. This module builds both.

## 1. Constraint relations: what the string demands

An ideal string is inextensible, light, and passes over a frictionless, massless pulley. Two consequences:

1. **Same tension throughout** — each straight segment carries one tension $T$; a massless pulley merely redirects it, without changing its size.
2. **Same speed and acceleration magnitude at both ends.** The string's total length is fixed, so if one end moves a distance, the other end must give up the same distance along the string. Speeds change at identical rates: if block $A$ on the table accelerates toward the pulley, the hanging block $B$ accelerates downward with the *same* $a$.

That second rule is the **constraint relation**. It is what turns several single-body equations into one solvable system: the accelerations are no longer independent unknowns.

A useful trick for complicated string arrangements is to write the total string length as the sum of its segments, differentiate twice, and set the result to zero — the remaining equation is the constraint. For the standard single-pulley setup it reduces simply to $a_A = a_B$.

## 2. The block-and-hanging-mass machine

A $3\ \text{kg}$ block rests on a frictionless table, connected by a light string over a frictionless pulley to a hanging $2\ \text{kg}$ block. Find the acceleration and the tension. Take $g = 10\ \text{m/s}^2$.

*Step 1 — choose bodies and directions.* FBD of the table block: tension $T$ toward the pulley, weight and normal force cancel vertically. FBD of the hanging block: weight $mg$ down, tension $T$ up. Both accelerate along their string directions with the same magnitude $a$.

*Step 2 — one equation per body.* Along each body's own direction of acceleration:

$$
T = m_1 a \qquad \text{(table block on $x$)},
\qquad
m_2 g - T = m_2 a \qquad \text{(hanging block down-positive)}.
$$

*Step 3 — solve.* Adding the equation eliminates $T$:

$$
m_2 g = (m_1 + m_2)a
\quad\Rightarrow\quad
a = \frac{m_2}{m_1+m_2}\,g = \frac{2}{5}\times 10 = 4\ \text{m/s}^2.
$$

Then $T = m_1 a = 3 \times 4 = 12\ \text{N}$.

*Sanity check.* Verify $T$ in the hanging block's equation: $m_2 g - T = 20 - 12 = 8\ \text{N} = m_2 a = 2\times 4$. Consistent. Also note $T < m_2 g$: the hanging block is falling, so the string carries *less than* its full weight — a net downward force must accelerate it.

**Variant — rough table.** If the table has friction with $\mu_k$, replace the table block's equation by $T - \mu_k m_1 g = m_1 a$ and solve the same two-body system:

$$
a = \frac{m_2 g - \mu_k m_1 g}{m_1+m_2}.
$$

## 3. The Atwood machine: two hanging masses

Two masses $m_1$ and $m_2 > m_1$ hang from a string over a pulley. The heavier one descends, the lighter rises, both with magnitude

$$
a = \frac{m_2 - m_1}{m_2 + m_1}\, g,
$$

and the string tension is

$$
T = \frac{2 m_1 m_2}{m_1+m_2}\, g.
$$

**Worked example.** $m_1 = 2\ \text{kg}$, $m_2 = 3\ \text{kg}$, $g = 10\ \text{m/s}^2$: $a = \frac{1}{5}\times 10 = 2\ \text{m/s}^2$ and $T = \frac{2\times 2\times 3}{5}\times 10 = 24\ \text{N}$.

*Checks.* For the heavier mass (down-positive): $30 - 24 = 6\ \text{N} = 3 \times 2$. For the lighter (up-positive): $24 - 20 = 4\ \text{N} = 2 \times 2$. Both consistent. And $T$ lies between the two weights, as it must — it exceeds the lighter mass's weight (pulling it up) and is less than the heavier's (letting it down).

Two limiting cases confirm the formulas: if $m_2 = m_1$, then $a = 0$ and $T = m_1 g$ (a balanced system, at rest or at constant speed); if $m_1 \to 0$, then $a \to g$ and $T \to 0$ (the heavy mass free-falls with nothing to pull). A formula that behaves correctly at its limits is one you can trust in the exam.

## 4. Tension as an internal force

Now take the *whole* machine — both blocks plus the string — as one system. The tension appears twice, once pulling each block, and cancels in the sum:

$$
F_{\text{net, system}} = m_2 g \quad\Rightarrow\quad a = \frac{m_2 g}{m_1+m_2},
$$

the same result in one line. This is the internal/external distinction in action: **a force between two parts of your chosen system is internal and never accelerates the system as a whole.** Choose the system so unknown messy internal forces vanish — but stay honest: if you later need that internal force (like $T$ here), analyse one part alone again.

The same logic handles bodies in contact. Push two touching crates (masses $2\ \text{kg}$ and $1\ \text{kg}$) with $9\ \text{N}$ on the lighter one, on a frictionless floor: the system accelerates at $a = 9/3 = 3\ \text{m/s}^2$, and the contact force between them is *internal*; analysing the front crate alone gives it as $N = 2 \times 3 = 6\ \text{N}$.

<learning-block type="mistake" title="System bookkeeping errors">

- **Cancelling a third-law pair on one FBD.** The string pulls the block; the block pulls the string. Equal and opposite — but one acts on the block and the other on the string. On the block's diagram only the first appears, and it does not cancel against anything.
- **Treating the hanging weight's full weight as the force accelerating the whole system.** It is not: only part of $m_2 g$ ends up in the string; the rest accelerates $m_2$ itself. Writing $a = m_2 g/m_1$ (leaving $m_2$ out of the inertia) gives an absurd, blow-up result as $m_1 \to 0$ — the earliest clue that the denominator must contain **all** the accelerated mass.
- **Wrong sign on one body.** In the Atwood machine, take each body's *own* acceleration direction as positive; halves of the system accelerate in opposite spatial directions but with the same sign in their own equations.

</learning-block>

## 5. A reliable method for any connected system

1. Draw one FBD per body, with axes aligned to that body's direction of motion.
2. Adopt one sign convention per body: positive along its own acceleration.
3. Write $\sum F = ma$ for each body — as many equations as bodies.
4. Write the constraint relation connecting the accelerations (and any string-speed relation).
5. Solve. Then plug every answer back into each original equation as a check.

## Try it yourself

**A.** In the block-and-hanging-mass machine of §2, replace the $3\ \text{kg}$ table block with $9\ \text{kg}$ and keep the $2\ \text{kg}$ hanging block. Find $a$ and $T$.

<details><summary>Show the reasoning</summary>

$a = \frac{2}{11}\times 10 = \frac{20}{11} \approx 1.82\ \text{m/s}^2$, and $T = m_1 a = 9 \times \frac{20}{11} \approx 16.4\ \text{N}$. As the table block grows heavier, it accelerates more slowly and the string tension climbs toward (but stays below) the hanging block's full weight of $20\ \text{N}$.
</details>

**B.** Two masses $m$ and $2m$ hang over a pulley. Find both masses' accelerations and the tension in terms of $m$ and $g$.

<details><summary>Show the reasoning</summary>

$a = \frac{2m-m}{3m}g = \frac{g}{3}$. Tension: from the lighter mass, $T - mg = m\frac{g}{3}$, so $T = \frac{4}{3}mg$. Check on the heavier: $2mg - \frac{4}{3}mg = \frac{2}{3}mg = (2m)\frac{g}{3}$. Consistent.
</details>

**C.** Two blocks of masses $1\ \text{kg}$ and $2\ \text{kg}$ are connected by a light string on a frictionless floor and the $2\ \text{kg}$ block is pulled with $6\ \text{N}$. Find the acceleration, the tension, and the force the string exerts on the $1\ \text{kg}$ block.

<details><summary>Show the reasoning</summary>

System-wide: $a = 6/3 = 2\ \text{m/s}^2$. The trailing $1\ \text{kg}$ block is pulled only by the string, so the tension — and the force on it — is $T = 1 \times 2 = 2\ \text{N}$. Check on the pulled block: $6 - 2 = 4\ \text{N} = 2 \times 2$. The string transmits force *forward* from the pull to the trailing mass; a light slack string between stationary masses would carry no force at all.
</details>

## Remember

- An ideal string imposes equal speeds and equal acceleration magnitudes on its ends, and carries one tension.
- Write one FBD-equation per body, tied together by the constraint relation.
- Tension is internal to the whole machine; choose the "everything" system to find $a$, then a single part to find $T$.
- Check tensions against weights: $T$ must lie between $m_1 g$ and $m_2 g$ in an Atwood machine.
- When these machines move in circles instead of straight lines, the same discipline applies with a radial acceleration — the subject of the next module.
