## JEE Main sprint: how to use this set

This is a **50-minute, no-notes** paper on mechanical properties of fluids, for after you finish the chapter lessons and the mastery check. Use $g=10\ \text{m/s}^2$, $\rho_{\text{water}}=1000\ \text{kg/m}^3$, $\rho_{\text{Hg}}=13600\ \text{kg/m}^3$ and $p_{\text{atm}}=1.0\times10^5\ \text{Pa}$ unless a question states otherwise. Budget roughly: 20 minutes for Section A, 15 for Section B, 8 for Section C, 7 for Section D. If a question resists for 90 seconds, mark it and move on — the paper rewards correct tool choice over grinding.

Before writing an equation, name the regime: fluid at rest, level flow, viscous fall, or curved surface. That one sentence usually selects the formula for you.

## Conditions sheet

| Situation | Start with | Check before trusting it |
| --- | --- | --- |
| Pistons, presses, lifts | $F_1/A_1=F_2/A_2$ | Fluid enclosed and at rest; track the distance trade |
| Depth, columns, barometers | $p=p_0+\rho gh$ | Gauge or absolute? Say which |
| Immersed or floating body | $F_B=\rho_{\text{fluid}}gV_{\text{disp}}$ | Fluid density in the push, body density in the weight |
| Varying pipe width | $A_1v_1=A_2v_2$ | Convert radius to $\pi r^2$ before equating |
| Level flow, pressure and speed | $p_1+\tfrac12\rho v_1^2=p_2+\tfrac12\rho v_2^2$ | Same streamline, ideal fluid, no machines between |
| Hole in a tank at depth $h$ | $v=\sqrt{2gh}$ | Surface area $\gg$ hole area; surface open |
| Sphere rising or settling | $v_t=2r^2(\rho-\sigma)g/9\eta$ | Stokes' regime: small $Re$ |
| Drop, bubble, film | $\Delta p=2S/R$ or $4S/R$ | Count the surfaces: one or two |
| Capillary tube | $h=2S\cos\theta/r\rho g$ | $\cos\theta$ sign decides rise versus depression |

<learning-block type="mistake" title="The fastest sanity checks">

If your terminal velocity comes out faster than a falling stone, your pressure comes out negative without a stated gauge convention, or your "floating" fraction exceeds 1, stop: the tool was mis-chosen. A correct hydraulic answer always keeps work in $\ge$ work out; a correct buoyancy answer always uses $\rho_{\text{fluid}}$ in $F_B$; a correct excess-pressure answer always says drop ($2S/R$) or soap bubble ($4S/R$) before any number appears.

</learning-block>

## Section A — 10 rapid MCQs

### 1. Pressure at depth

The gauge pressure $20\ \text{m}$ below the surface of a lake ($\rho=1000\ \text{kg/m}^3$) is:

- A. $1.0\times10^5\ \text{Pa}$
- B. $2.0\times10^5\ \text{Pa}$
- C. $3.0\times10^5\ \text{Pa}$
- D. $2.0\times10^3\ \text{Pa}$

<details><summary>Answer</summary>

**B.** $p_{\text{gauge}}=\rho gh=1000\times10\times20=2.0\times10^5\ \text{Pa}$. (Absolute would add $10^5\ \text{Pa}$; the question says gauge.)
</details>

### 2. Hydraulic lift

A $100\ \text{N}$ force acts on the input piston of area $5.0\ \text{cm}^2$ of an ideal hydraulic lift. The output platform's area is $0.10\ \text{m}^2$. The heaviest load it can support ($g=10\ \text{m/s}^2$) has mass about:

- A. $200\ \text{kg}$
- B. $500\ \text{kg}$
- C. $1000\ \text{kg}$
- D. $2000\ \text{kg}$

<details><summary>Answer</summary>

**D.** $p=100/(5.0\times10^{-4})=2.0\times10^5\ \text{Pa}$, so $F_2=2.0\times10^5\times0.10=2.0\times10^4\ \text{N}$, i.e. $2000\ \text{kg}$. Area ratio $A_2/A_1=0.10/5\times10^{-4}=200$ is the shortcut.
</details>

### 3. Floating fraction

A cork floats in water with three-quarters of its volume submerged. Its density is:

- A. $250\ \text{kg/m}^3$
- B. $500\ \text{kg/m}^3$
- C. $750\ \text{kg/m}^3$
- D. $1333\ \text{kg/m}^3$

<details><summary>Answer</summary>

**C.** Floating demands $V_{\text{disp}}/V=\rho_{\text{body}}/\rho_{\text{fluid}}$, so $\rho=0.75\times1000=750\ \text{kg/m}^3$.
</details>

### 4. Continuity with a caveat

Water flows steadily through a pipe whose *radius* is halved. The flow speed in the narrow part, relative to the wide part, is multiplied by:

- A. $2$
- B. $\sqrt{2}$
- C. $4$
- D. it stays the same

<details><summary>Answer</summary>

**C.** Area $\propto r^2$: halving the radius quarters the area, and $A_1v_1=A_2v_2$ then forces $v\times4$. Option A is the radius-versus-area trap.
</details>

### 5. Bernoulli's fine print

Which is **not** among the assumptions needed to derive Bernoulli's equation along a streamline?

- A. The flow is steady.
- B. The fluid is incompressible.
- C. The fluid is non-viscous.
- D. The pipe's cross-section is constant along its length.

<details><summary>Answer</summary>

**D.** Bernoulli does not require constant cross-section — continuity handles any area change, and a varying area is exactly where the equation is most useful. A, B and C are all genuine requirements.
</details>

### 6. Efflux scaling

Water efflux speed from a small hole at depth $h$ below the surface of a large tank is $v$. At depth $4h$, the speed is:

- A. $v$
- B. $\sqrt{2}\,v$
- C. $2v$
- D. $4v$

<details><summary>Answer</summary>

**C.** Torricelli: $v\propto\sqrt{h}$, so quadrupling $h$ doubles $v$.
</details>

### 7. Terminal velocity scaling

In the Stokes regime, a falling sphere's terminal velocity is proportional to its radius. If the radius doubles, $v_t$ changes by a factor of:

- A. $2$
- B. $4$
- C. $8$
- D. $1/2$

<details><summary>Answer</summary>

**B.** $v_t=2r^2(\rho-\sigma)g/9\eta$ has $r^2$ in the numerator: radius doubled ⇒ terminal velocity $\times4$.
</details>

### 8. Viscosity and heat

On heating, the viscosity of a liquid such as water:

- A. increases
- B. decreases
- C. stays constant
- D. may change either way depending on the liquid

<details><summary>Answer</summary>

**B.** For liquids, warming weakens intermolecular cohesion, so $\eta$ falls (honey, engine oil). Gases are the exception: their viscosity rises with temperature.
</details>

### 9. Drop versus bubble

A liquid drop and a soap bubble in air both have radius $R$ and the same surface tension. The ratio of excess pressure inside the bubble to that inside the drop is:

- A. $1$
- B. $2$
- C. $4$
- D. $1/2$

<details><summary>Answer</summary>

**B.** $\Delta p_{\text{bubble}}/\Delta p_{\text{drop}}=(4S/R)/(2S/R)=2$: the soap film has two surfaces.
</details>

### 10. Mercury in a capillary

A capillary tube of glass is dipped in mercury (contact angle about $140^\circ$, tube vertical). The level of mercury inside the tube, compared with the outside surface:

- A. rises
- B. stays equal
- C. falls (a depression)
- D. depends on the depth to which the tube is dipped

<details><summary>Answer</summary>

**C.** $h=2S\cos\theta/r\rho g$ with $\theta=140^\circ$ gives $\cos\theta<0$ and a negative $h$: a capillary *depression*. And its size depends on $r$, not on dipping depth.
</details>

## Section B — 5 numerical-value questions

### 11. Force on a submerged window

A vertical square window of side $2.0\ \text{m}$ has its centre $5.0\ \text{m}$ below the water surface of a lock gate. Estimate the total force of water on the window.

<details><summary>Answer</summary>

Average pressure equals the pressure at the centroid: $p=\rho gh_{\text{c}}=1000\times10\times5.0=5.0\times10^4\ \text{Pa}$. Force $=pA=5.0\times10^4\times4.0=2.0\times10^5\ \text{N}$ — the weight of $20\ \text{t}$ pressing on a $2\ \mathrm{m}\times2\ \mathrm{m}$ pane.
</details>

### 12. Manometer reading

A gas pipe connects to an open-tube mercury manometer; the mercury in the open arm stands $5.0\ \text{cm}$ higher than in the pipe arm. Find the gas pressure's gauge value in pascals.

<details><summary>Answer</summary>

$p_{\text{gauge}}=\rho_{\text{Hg}}\,g\,\Delta h=13600\times10\times0.050=6800\ \text{Pa}$. (Absolute: $6800+1.0\times10^5=1.07\times10^5\ \mathrm{Pa}$.)
</details>

### 13. Venturi pressure drop

Water flows at $1.0\ \text{m/s}$ through the wide section of a level pipe; the throat's cross-section is one-fifth of the wide section's. Find the pressure difference (in Pa) between wide section and throat.

<details><summary>Answer</summary>

$v_2=5v_1=5.0\ \text{m/s}$. $\Delta p=\tfrac12\rho(v_2^2-v_1^2)=500\times(25-1)=1.2\times10^4\ \text{Pa}$. The wide section is at the *higher* pressure.
</details>

### 14. Terminal velocity numerically

A steel sphere of radius $1.5\ \text{mm}$, density $7800\ \text{kg/m}^3$, falls through engine oil of density $1200\ \text{kg/m}^3$ and viscosity $0.30\ \text{Pa\,s}$. Find its terminal speed in m/s.

<details><summary>Answer</summary>

$$
v_t=\frac{2r^2(\rho-\sigma)g}{9\eta}
=\frac{2\times(1.5\times10^{-3})^2\times6600\times10}{2.7}
=\frac{2\times2.25\times10^{-6}\times6.6\times10^4}{2.7}
=\frac{0.297}{2.7}=0.11\ \text{m/s}.
$$

Check $Re\approx1.3\ll1$, so Stokes' law is in force.
</details>

### 15. Capillary rise numerically

Water ($S=0.072\ \text{N/m}$, contact angle $0^\circ$) rises in a capillary of radius $0.20\ \text{mm}$. Find the rise in metres.

<details><summary>Answer</summary>

$$
h=\frac{2S\cos\theta}{r\rho g}=\frac{2\times0.072\times1}{2.0\times10^{-4}\times1000\times10}=\frac{0.144}{2.0}=0.072\ \text{m}.
$$

Fine hair-thin tables lift water finger-heights; tube radius, not tube length, controls it.
</details>

## Section C — 3 assertion–reason questions

*(a) Both A and R true; R correctly explains A. (b) Both A and R true; R is true but not a correct explanation of A. (c) A is true, R is false. (d) A is false, R is true.)*

### 16. Isotropy of pressure

**Assertion (A):** At any point of a fluid at rest, pressure has the same value in all directions.
**Reason (R):** A fluid at rest cannot sustain a tangential (shear) force; any imbalance in direction would set the fluid moving until it vanished.

<details><summary>Answer</summary>

**(a).** The no-shear property is precisely what forces the pressure force on any internal surface to be perpendicular to that surface, whatever its orientation — which is the statement of the assertion.
</details>

### 17. Boat into the sea

**Assertion (A):** A loaded boat crossing from a river into sea water rises slightly higher in the water.
**Reason (R):** The buoyant force on the boat increases on entering sea water.

<details><summary>Answer</summary>

**(c).** A is true: sea water is denser, so the boat needs a smaller displaced volume to balance its weight, and rides higher. R is false: the buoyant force equals the boat's weight in *both* waters — it does not increase; density buys a *smaller volume*, not a larger force.
</details>

### 18. Glycerine against water

**Assertion (A):** At room temperature, glycerine flows less freely than water.
**Reason (R):** The viscosity of liquids decreases with rise in temperature.

<details><summary>Answer</summary>

**(b).** Both statements are true and correct physics — but R is about *temperature dependence*, while A compares two different liquids at the *same* temperature. R does not explain why glycerine is more viscous than water; that is a fact about molecular cohesion.
</details>

## Section D — 2 matching / multi-statement questions

### 19. Match the situation to its working formula

Match each situation in Column I with the expression in Column II that answers it directly:

**Column I**

- P. Gauge pressure at depth $h$ in a liquid of density $\rho$
- Q. Fraction of a floating body's volume submerged
- R. Efflux speed from a hole a depth $h$ below a tank's surface
- S. Excess pressure inside a soap bubble of radius $R$ in air

**Column II**

1. $\sqrt{2gh}$
2. $\rho gh$
3. $4S/R$
4. $\rho_{\text{body}}/\rho_{\text{fluid}}$

<details><summary>Answer</summary>

**P–2, Q–4, R–1, S–3.**
P: $p_{\text{gauge}}=\rho gh$. Q: floating balance gives $\rho_{\text{body}}/\rho_{\text{fluid}}$. R: Torricelli's $\sqrt{2gh}$. S: two surfaces, $4S/R$. The matched set covers one tool from each quarter of the chapter — hydrostatics, flotation, flow and surfaces.
</details>

### 20. Which statements hold water?

Consider three statements about steady flow of water (an incompressible liquid) in a pipe:

- **I.** In steady streamline flow, the velocity of the fluid *at a fixed point of the pipe* does not change with time.
- **II.** The continuity equation $A_1v_1=A_2v_2$ expresses conservation of volume (equivalently mass, for incompressible flow) between two cross-sections.
- **III.** Bernoulli's equation may be applied between any two points of a *turbulent* pipe flow, provided the fluid is water.

Choose the correct combination:

- A. I and II only
- B. I and III only
- C. II and III only
- D. all three

<details><summary>Answer</summary>

**A.** I: by definition of steady flow the velocity field is time-independent at each point (parcels of fluid still change speed as they travel — that is not a contradiction). II: that is exactly the bookkeeping behind continuity. III is false twice over: turbulence violates the steady-streamline picture, and viscosity drains mechanical energy between the two points, so Bernoulli's constant is not preserved.
</details>

## Review by error, not by score

| If you missed… | Revisit |
| --- | --- |
| 1, 2, 11, 12 (or the gauge/absolute habit) | Pressure with depth — recompute $\rho gh$ with stated units and label every answer gauge or absolute. |
| 3, 17, and the flotation rows of 19 | Buoyancy and flotation — one balance, $F_B=W$, with $\rho_{\text{fluid}}$ in $F_B$. |
| 4, 5, 13, 20 | Flow and continuity plus Bernoulli — state the regime (steady, level, ideal) before any equation. |
| 6, 13 (again), 20 (again) | Bernoulli's applications — Torricelli and the venturi are one derivation wearing two hats. |
| 7, 8, 14 | Viscosity and terminal velocity — derive $v_t$ from the three-force balance, then run the Reynolds check. |
| 9, 10, 15, and S in 19 | Surface tension and capillarity — count surfaces for $\Delta p$; watch the sign of $\cos\theta$. |

<learning-block type="recap" title="Ready for a timed set?">

Aim to complete all 20 questions inside 50 minutes with at least 15 fully justified. A correct option without a stated method is a future mistake: when you re-sit the paper, write the tool choice ("hydrostatics", "continuity + Bernoulli", "Stokes balance", "Jurin") beside your working before any number appears.

</learning-block>
