## JEE Main sprint: how to use this set

This is a **50-minute, no-notes** paper for after the chapter modules and the mastery check. Spend roughly 12 minutes on Section A, 13 on Section B, 8 on Section C and 10 on Section D, leaving $7$ minutes to revisit flagged questions. Mark anything stuck after $90$ seconds and move on; the scoring story is choosing the right shortcut, not grinding the longest integration.

## Conditions and constants sheet

Use $g=10\ \text{m/s}^2$ unless a question states otherwise, Earth radius $R_E=6400\ \text{km}$, and hence $GM_E=gR_E^2\approx4.1\times10^{14}\ \text{m}^3/\text{s}^2$.

| Situation | Start with | Check before trusting it |
| --- | --- | --- |
| Two masses at distance $r$ | $F=Gm_1m_2/r^2$ | Centre-to-centre $r$; vector superposition |
| Point masses, one location | Scalar sum for $V$, then $g=-dV/dr$ | $V$ is negative until infinity |
| Inside a shell | $g=0$, $V=-GM/R$ | Values, not slopes, go flat inside |
| $g$ at height $h$ | $g'=gR^2/(R+h)^2$ | Small-$h$ approximation fails past a fraction of $R$ |
| $g$ at depth $d$ (uniform) | $g'=g(1-d/R)$ | Assumes uniform density |
| Circular orbit | $v=\sqrt{GM/r}$, $T=2\pi\sqrt{r^3/GM}$ | Satellite mass cancels |
| Energy ledger | $E=-GMm/2r$ | $K=-E$ and $U=2E$ |
| Change of orbit | $\Delta E=\dfrac{GMm}{2}\left(\dfrac{1}{r_1}-\dfrac{1}{r_2}\right)$ | Higher orbit: slower *and* costlier |
| Escape from radius $r$ | $v_e=\sqrt{2GM/r}=\sqrt2\,v_{\text{orb}}$ | Independent of mass and direction |
| Elliptical orbit | $T^2\propto a^3$; $v_pr_p=v_ar_a$ | Semi-major axis, not a "radius" |

<learning-block type="mistake" title="The quickest sanity alarms">

If you find a **positive total orbital energy**, a **null point inside a shell**, or a **period shrinking** when the orbit grows, stop and re-check: each violates a chapterwide law. Links below the questions route you back to the guilty module.

</learning-block>

## Section A — 10 rapid MCQs

### 1. Scaling the pull

Two point masses attract with force $F$. If both masses and their separation are each doubled, the new force is:

- A. $2F$
- B. $F$
- C. $F/2$
- D. $4F$

<details><summary>Answer</summary>

**B.** $F'=\dfrac{G(2m_1)(2m_2)}{(2r)^2}=\dfrac{4Gm_1m_2}{4r^2}=F$.
</details>

### 2. Shell at work

A test mass sits inside a thin, uniformly dense spherical shell. The net force the shell exerts on it is:

- A. zero
- B. toward the centre
- C. toward the nearest wall
- D. dependent on the test mass

<details><summary>Answer</summary>

**A.** Shell theorem: each patch of shell is balanced by a partner patch, so the net field is zero everywhere inside. The potential, notably, is still $-GM/R$.
</details>

### 3. Why the law of areas holds

A planet sweeps equal areas in equal times. The responsible fact is:

- A. its speed is constant
- B. the gravitational force is central, so torque about the Sun is zero
- C. area is proportional to potential energy
- D. no force acts on the planet

<details><summary>Answer</summary>

**B.** A central force has $\tau=\vec r\times\vec F=0$, so angular momentum — hence areal velocity $dA/dt=L/2m$ — is conserved. Speed is *not* constant on an ellipse.
</details>

### 4. Higher, slower

A satellite's circular-orbit radius is increased to $4r_{\text{old}}$. Its speed becomes:

- A. $2v$
- B. $v/2$
- C. $v/4$
- D. unchanged

<details><summary>Answer</summary>

**B.** $v=\sqrt{GM/r}\propto r^{-1/2}$, so $v'=\sqrt{GM/4r}=v/2$.
</details>

### 5. Kepler in ratios

Two planets of a star have periods $T_1=8\ \text{yr}$ and $T_2=1\ \text{yr}$; planet 2 orbits at $a_2=1\ \text{AU}$. Planet 1's semi-major axis is:

- A. $4\ \text{AU}$
- B. $8\ \text{AU}$
- C. $16\ \text{AU}$
- D. $64\ \text{AU}$

<details><summary>Answer</summary>

**A.** $a_1/a_2=(T_1/T_2)^{2/3}=8^{2/3}=4$.
</details>

### 6. Potential in a shell

The gravitational potential at every point inside a thin spherical shell of mass $M$, radius $R$ equals:

- A. zero
- B. $-GM/r$ for $r<R$
- C. $-GM/R$
- D. $+GM/R$

<details><summary>Answer</summary>

**C.** Inside, the field is zero, so $V$ carries its surface value $-GM/R$ unchanged, all the way to the centre.
</details>

### 7. Squeeze the Earth

If the Earth's mass stayed the same but its radius were halved, surface gravity would become:

- A. $g/2$
- B. $g$
- C. $2g$
- D. $4g$

<details><summary>Answer</summary>

**D.** $g=GM/R^2$ grows as $1/R^2$: halving $R$ quadruples $g$. (Escape speed would grow only as $\sqrt2$; weight of every object on the surface climbs with $g$.)
</details>

### 8. What escape speed ignores

The escape speed from a planet depends on all of the following **except**:

- A. the planet's mass
- B. the planet's radius
- C. the mass of the escaping body
- D. none of these — A and B matter too much

<details><summary>Answer</summary>

**C.** $v_e=\sqrt{2GM/R}$ contains only the planet's data; the projectile's mass cancels (and so does its launch direction, with drag ignored).
</details>

### 9. Floating astronauts

An astronaut in an orbiting spacecraft feels weightless because:

- A. gravity there is zero
- B. the spacecraft is far outside Earth
- C. astronaut and spacecraft fall freely with the same acceleration
- D. the spacecraft's engines cancel gravity

<details><summary>Answer</summary>

**C.** The field is still near $8.7\ \text{m/s}^2$ in low orbit; every part accelerates equally, so nothing presses on anything. Weightlessness is shared free fall, not absent gravity.
</details>

### 10. Two planets of one density

Two planets share the same average density; one has twice the radius of the other. The ratio of their escape speeds (bigger : smaller) is:

- A. $1:1$
- B. $2:1$
- C. $4:1$
- D. $1:2$

<details><summary>Answer</summary>

**B.** $v_e=\sqrt{2G(4\pi/3)\rho}\,R\propto\rho^{1/2}R$; equal density means $v_e\propto R$, so $2:1$.
</details>

## Section B — 5 numerical-value questions

### 11. A null point in gravitation

Masses of $100\ \text{kg}$ and $400\ \text{kg}$ are $30\ \text{m}$ apart on a frictionless line. How far from the $100\ \text{kg}$ mass is the point where their fields cancel?

<details><summary>Answer</summary>

Set $G(100)/x^2=G(400)/(30-x)^2$, so $(30-x)/x=\sqrt{400/100}=2$, giving $x=10\ \text{m}$. **10.**
</details>

### 12. Thin air, weaker field

Find $g$ (in $\text{m/s}^2$) at an altitude of $1600\ \text{km}$ above the Earth's surface.

<details><summary>Answer</summary>

$g'=g\left(\dfrac{R}{R+h}\right)^2=10\left(\dfrac{6400}{8000}\right)^2=10\times0.64=6.4\ \text{m/s}^2$. **6.4.** (The approximation $g(1-2h/R)$ would give $10(1-0.5)=5$, wrong — the height is a quarter of $R$.)
</details>

### 13. A four-radius orbit

A satellite moves in a circular orbit of radius $4R_E$. Find its period in hours.

<details><summary>Answer</summary>

$$
T=2\pi\sqrt{\frac{(4R)^3}{gR^2}}=2\pi\sqrt{\frac{64R}{g}}
=2\pi\sqrt{\frac{64\times6.4\times10^6}{10}}\approx4.02\times10^4\ \text{s}\approx11.2\ \text{h}.
$$

**11.2** (about $11$ hours).
</details>

### 14. Paying for a bigger orbit

How much energy, in $10^6\ \text{J/kg}$, is needed to move a satellite from a circular orbit at $r=2R_E$ to one at $r=4R_E$? Report in units of $10^6\ \text{J/kg}$.

<details><summary>Answer</summary>

$$
\Delta E=\frac{GMm}{2}\left(\frac{1}{2R}-\frac{1}{4R}\right)=\frac{gRm}{8}
=\frac{10\times6.4\times10^6}{8}=8.0\times10^6\ \text{J/kg}.
$$

**8.0** (in $10^6\ \text{J/kg}$).
</details>

### 15. Escape from height

Find, in $\text{km/s}$, the escape speed from a point $R_E$ above the Earth's surface.

<details><summary>Answer</summary>

From $r=2R_E$:

$$
v_e=\sqrt{\frac{2GM}{2R}}=\sqrt{\frac{GM}{R}}=\sqrt{gR}=\sqrt{6.4\times10^7}\approx8.0\ \text{km/s}.
$$

**8.0** (also the surface-orbit speed, since escape is always $\sqrt2$ times orbit at one radius).
</details>

## Section C — 3 assertion–reason questions

Each question offers:

- (a) Both statements true and II correctly explains I
- (b) Both statements true but II does not explain I
- (c) I true, II false
- (d) I false, II true

### 16. Shell's steady inside

**I:** The potential inside a thin uniform shell is the same at every interior point.
**II:** The field inside the shell is zero everywhere.

<details><summary>Answer</summary>

**(a).** Zero field means $-dV/dr=0$, so $V$ cannot vary inside; continuity with the outside fixes the constant at $-GM/R$. The second statement is the mechanism for the first.
</details>

### 17. Escape speed's independence

**I:** A body launched with escape speed will never return to the planet.
**II:** Escape speed does not depend on the direction of projection.

<details><summary>Answer</summary>

**(b).** Both are true. But I follows from the energy argument — launch kinetic energy $GMm/R$ exactly cancels the climb to $-\!$infinity — not from II, which is a statement about isotropy of the speed, not its sufficiency.
</details>

### 18. Whose orbit is heavy?

**I:** A satellite's orbital speed at a given radius is independent of the satellite's mass.
**II:** Gravity supplies the centripetal force, and the satellite's mass appears on both sides and cancels.

<details><summary>Answer</summary>

**(a).** From $GMm/r^2=mv^2/r$, the mass cancels identically, giving $v=\sqrt{GM/r}$. II is the derivation of I.
</details>

## Section D — 2 matching and multi-statement questions

### 19. Matching columns

Match each quantity (List I) with its correct dependence or formula (List II):

| List I | | List II |
| --- | --- | --- |
| (P) Orbital speed at radius $r$ about a mass $M$ | | (1) proportional to $r^{3/2}$ |
| (Q) Escape speed from a surface of radius $R$, mass $M$ | | (2) $-\dfrac{GMm}{r}$ |
| (R) Orbital period at radius $r$ | | (3) $\sqrt{GM/r}$ |
| (S) Potential energy of mass $m$ at radius $r$ | | (4) $\sqrt{2GM/R}$ |

Options:

- A. P–1, Q–2, R–3, S–4
- B. P–3, Q–4, R–1, S–2
- C. P–2, Q–1, R–4, S–3
- D. P–4, Q–3, R–2, S–1

<details><summary>Answer</summary>

**B.** P matches $v=\sqrt{GM/r}$ (3); Q matches $v_e=\sqrt{2GM/R}$ (4); R matches $T\propto r^{3/2}$ (1); S matches $-GMm/r$ (2). Every one is a chapter standard.
</details>

### 20. Which statements survive

A satellite is in a circular orbit of radius $r=2R_E$ about the Earth. Consider:

1. Its orbital speed is $\sqrt{gR_E/2}$.
2. Its total energy is $-\dfrac{gR_Em}{4}$.
3. Its escape speed from that orbit equals its orbital speed there.

Which are correct?

- A. 1 and 2 only
- B. 1 and 3 only
- C. 2 and 3 only
- D. 1, 2 and 3

<details><summary>Answer</summary>

**A.** Check each:

1. $v=\sqrt{GM/2R}=\sqrt{gR^2/2R}=\sqrt{gR/2}$ — correct.
2. $E=-GMm/4R=-gRm/4$ — correct.
3. Escape speed is $\sqrt2$ times orbital speed there ($\sqrt{gR}$), not equal to it — wrong.

Only 1 and 2 survive.
</details>

## Review by error, not by score

| If you missed… | Revisit | Then retry by… |
| --- | --- | --- |
| 1, 2 or 11 | Newton's law of gravitation | Superposing with direction and finding null points from scratch. |
| 3, 6 or 16 | Field, potential and potential energy | Deriving $g=-dV/dr$ and the shell's flat interior. |
| 12 | How g varies | Redoing the exact ratio before touching approximations. |
| 5 or 13 | Kepler's laws | Deriving $T^2=4\pi^2a^3/GM$ and doing ratio arithmetic. |
| 4, 9, 14, 18 or 20 | Orbital speed and energy | Rebuilding the ledger $K=-E$, $U=2E$ and drying it from scratch. |
| 7, 8, 10, 15, 17 or 19 | Escape speed and satellites | Re-deriving $v_e=\sqrt{2gR}$ and its $\sqrt2$ rule from any radius. |

<learning-block type="recap" title="Reading your set">

Aim for **16 of 20** with a written reason written next to every answer. A question answered by luck or elimination is a revision job wearing solved clothes; route each miss through the table above, then take the set again in $48$ hours.

</learning-block>
