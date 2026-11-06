## JEE Main sprint: how to use this set

This is a **50-minute, no-notes** paper for after the chapter lessons and the mastery check. Use $g=10\ \text{m/s}^2$ unless a question gives another value. Budget roughly 15 minutes for Section A, 20 for Section B, 10 for Section C and 5 for Section D. Flag any question that has cost more than 90 seconds and move on.

The point is not only the answer. Before writing any equation, say to yourself *which property is being probed*: stress, a modulus, stored energy, or a blocked thermal strain. Wrong-tool answers with correct arithmetic are still wrong answers.

## Conditions and formula sheet

| Situation | Start with | Check before using it |
| --- | --- | --- |
| Force on an area | $\sigma=F/A$ | Use the cross-section on which the force acts; state Pa. |
| Extension or strain asked | $\Delta L=FL/AY$, $\varepsilon=\Delta L/L$ | Ratio-type questions survive without absolute values. |
| Sideways contraction given | $\nu=-(\Delta d/d)/(\Delta L/L)$ | $\nu$ lies in $[0,0.5]$ for ordinary isotropic materials. |
| Volume squeezed | $\Delta V/V=\Delta p/B$ | Solid geometry first, modulus second. |
| Energy stored | $U=\frac12F\Delta L$, $u=\frac12Y\varepsilon^2$ | The half matters; the load must build from zero. |
| Clamped or restrained, plus $\Delta T$ | $\sigma=Y\alpha\Delta T$ | Independent of $L$ and $A$; sign follows heating or cooling. |
| Curve beyond the proportional region | Area under the actual $\sigma$–$\varepsilon$ curve | Triangle formulas are valid only inside the linear region. |

<learning-block type="mistake" title="Fastest sanity checks">

A stored energy that is a whole joule for a thin wire, a Poisson ratio outside $0$–$0.5$, or a thermal stress that depends on the rod's length each means the setup — not the arithmetic — has failed. Re-derive, do not re-push buttons.

</learning-block>

## Section A — 10 rapid MCQs

### 1. Two wires, one load

Two wires of the same material and length, with cross-sectional radii $r$ and $2r$, carry the same load. The ratio (extension of the thinner wire : extension of the thicker wire) is:

- A. $1:4$
- B. $1:2$
- C. $2:1$
- D. $4:1$

<details><summary>Answer</summary>

**D.** $\Delta L=FL/AY$ and $A\propto r^2$, so $\Delta L\propto1/r^2$. The area of the thicker wire is four times as large, so the thinner one extends four times as much: $4:1$.
</details>

### 2. Meaning of the graph's slope

In the linear region of a stress–strain curve, the slope of the curve equals:

- A. the breaking stress
- B. the elastic limit
- C. Young's modulus
- D. Poisson's ratio

<details><summary>Answer</summary>

**C.** Inside the proportional region $\sigma=Y\varepsilon$, so the slope is $Y$. The other quantities are *points* on the curve (or ratios of strains), not its slope.
</details>

### 3. An incompressible stretch

A material has Poisson's ratio exactly $0.5$. When such a specimen is stretched elastically, its volume:

- A. increases slightly
- B. decreases slightly
- C. stays unchanged
- D. depends on the specimen's size

<details><summary>Answer</summary>

**C.** $\Delta V/V=(1-2\nu)\varepsilon=0$ when $\nu=0.5$. The stretch is compensated entirely by lateral thinning.
</details>

### 4. Shrinking sphere

The radius of a solid sphere decreases by $0.20\%$. To first order, the percentage decrease in its volume is:

- A. $0.10\%$
- B. $0.20\%$
- C. $0.60\%$
- D. $0.80\%$

<details><summary>Answer</summary>

**C.** Small fractional changes compound: $\Delta V/V\approx3\,\Delta r/r=3(0.20)=0.60\%$.
</details>

### 5. Doubling the strain

A wire is stretched to twice its previous strain, still within the proportional region. Its elastic energy density becomes:

- A. twice
- B. half
- C. four times
- D. unchanged

<details><summary>Answer</summary>

**C.** $u=\frac12Y\varepsilon^2\propto\varepsilon^2$; doubling $\varepsilon$ quadruples $u$.
</details>

### 6. The clamped rod on heating

A rod is rigidly clamped and its temperature is raised by $\Delta T$. The stress developed depends on:

- A. the rod's length and area
- B. only $\alpha$, $\Delta T$ and the material modulus
- C. the rod's length but not its area
- D. none of the above; a heated rod is stress-free

<details><summary>Answer</summary>

**B.** $\sigma=Y\alpha\Delta T$ contains neither $L$ nor $A$. The *force* on the clamps scales with area, but the *stress* does not.
</details>

### 7. Cutting a wire

A stretched wire behaves as a spring of constant $k=YA/L$. If the same wire is cut into two equal halves, each half has stiffness:

- A. $k/2$
- B. $k$
- C. $2k$
- D. $4k$

<details><summary>Answer</summary>

**C.** Halving $L$ halves the denominator: $k'=YA/(L/2)=2k$. Short springs are stiffer springs.
</details>

### 8. The stiffest specimen

Which material has the largest Young's modulus?

- A. copper
- B. brass
- C. glass
- D. steel

<details><summary>Answer</summary>

**D.** $Y_{\text{steel}}\approx2.0\times10^{11}\ \text{Pa}$, against $1.1\times10^{11}$ (copper), $0.9\times10^{11}$ (brass) and roughly $6\times10^{10}$ (glass).
</details>

### 9. Behaviour of an elastomer

The stress–strain curve of rubber (an elastomer) is characterised by:

- A. a large modulus and fracture just past the proportional limit
- B. small strains and a definite yield point
- C. very large reversible strains and no linear proportional region
- D. behaviour identical to a ductile metal at smaller stress

<details><summary>Answer</summary>

**C.** Elastomers stretch by hundreds of per cent, return fully, and never obey Hooke's law at any strain; their chains uncoil rather than their bonds stretch.
</details>

### 10. Same unit, different quantity

In SI units, the elastic energy density of a strained material has the same unit as:

- A. force
- B. energy
- C. power
- D. stress

<details><summary>Answer</summary>

**D.** $u=\frac12\sigma\varepsilon$ has unit $\text{J/m}^3=\text{N·m/m}^3=\text{N/m}^2=\text{Pa}$ — the unit of stress, since $\varepsilon$ is dimensionless. The two quantities are nevertheless distinct, as thermodynamics also borrows this dimensional coincidence.
</details>

## Section B — 5 numerical-value questions

### 11. Extension of a steel wire

A steel wire of length $1.5\ \text{m}$ and cross-sectional area $1.0\times10^{-6}\ \text{m}^2$ carries a tension of $100\ \text{N}$. With $Y=2.0\times10^{11}\ \text{Pa}$, find the extension in mm.

<details><summary>Answer</summary>

$\Delta L=\dfrac{FL}{AY}=\dfrac{100\times1.5}{(1.0\times10^{-6})(2.0\times10^{11})}=\dfrac{150}{2.0\times10^{5}}=7.5\times10^{-4}\ \text{m}=0.75\ \text{mm}$.
</details>

### 12. Energy stored by that wire

For the same wire and load as in question 11, find the elastic energy stored, in mJ.

<details><summary>Answer</summary>

$U=\frac12F\Delta L=\frac12(100)(0.75\times10^{-3})=3.75\times10^{-2}\ \text{J}=37.5\ \text{mJ}$. Equivalently $u=\frac12Y\varepsilon^2$ with $\varepsilon=\Delta L/L=5.0\times10^{-4}$ gives $u=2.5\times10^4\ \text{J/m}^3$, times the wire's volume $1.5\times10^{-6}\ \text{m}^3$ — the same $37.5\ \text{mJ}$. Two independent routes agreeing is the check.
</details>

### 13. Compressing a liquid

A $5.0\ \text{L}$ sealed liquid experiences a pressure rise of $2.2\times10^7\ \text{Pa}$. With $B=2.2\times10^9\ \text{Pa}$, find the volume decrease in mL.

<details><summary>Answer</summary>

$\Delta V/V=\Delta p/B=(2.2\times10^7)/(2.2\times10^9)=10^{-2}$, i.e. $1\%$. So $\Delta V=0.01\times5.0\ \text{L}=50\ \text{mL}$.
</details>

### 14. Thermal stress in a clamped rod

A steel rod is rigidly clamped and heated by $50\ ^\circ\text{C}$. Take $\alpha=1.2\times10^{-5}\ \text{K}^{-1}$ and $Y=2.0\times10^{11}\ \text{Pa}$. Find the stress, in Pa.

<details><summary>Answer</summary>

$\sigma=Y\alpha\Delta T=(2.0\times10^{11})(1.2\times10^{-5})(50)=1.2\times10^8\ \text{Pa}$, compressive. Notice that no length or area was needed — and none was given.
</details>

### 15. The mass that stretches a wire

A steel wire of length $1.0\ \text{m}$ and area $1.0\times10^{-6}\ \text{m}^2$ is to be stretched by $1.0\ \text{mm}$ ($Y=2.0\times10^{11}\ \text{Pa}$, $g=10\ \text{m/s}^2$). Find the hanging mass in kg.

<details><summary>Answer</summary>

Required strain $=1.0\times10^{-3}$, so $\sigma=Y\varepsilon=2.0\times10^{8}\ \text{Pa}$. Force $F=\sigma A=2.0\times10^{8}\times1.0\times10^{-6}=200\ \text{N}$, hence $m=F/g=20\ \text{kg}$.
</details>

## Section C — 3 assertion–reason questions

*Options for each question:* **(a)** both statements true, and II is a correct explanation of I; **(b)** both true, II not an explanation of I; **(c)** I true, II false; **(d)** I false, II true.

### 16. Steel versus rubber

**Statement I:** Steel is more elastic than rubber.
**Statement II:** The Young's modulus of steel is far larger than that of rubber.

<details><summary>Answer</summary>

**(a).** "More elastic" in physics means the greater modulus, and II states exactly that. A greater $Y$ means a smaller strain under the same stress — steel yields very small deformations where rubber stretches hugely.
</details>

### 17. Rubber's two curves

**Statement I:** For rubber loaded and unloaded between the same strain limits, the loading and unloading curves do not coincide.
**Statement II:** The area of the loop between the two curves equals the elastic potential energy stored in the rubber at the maximum strain.

<details><summary>Answer</summary>

**(c).** I is true: that mismatch is elastic hysteresis. II is false: the loop area is the energy **dissipated** per unit volume per cycle (as heat), not the energy stored, which is recoverable. Confusing stored and dissipated is the classic hysteresis error.
</details>

### 18. Limits of Poisson's ratio

**Statement I:** An isotropic elastic material can have Poisson's ratio $0.6$.
**Statement II:** For ordinary isotropic elastic materials, $\nu$ lies between $0$ and $0.5$.

<details><summary>Answer</summary>

**(d).** I is false: $0.6$ is outside the allowed range. II is true: $0\le\nu\le0.5$; a value above $0.5$ would imply a *negative* bulk modulus — volume under pressure increasing — which no stable ordinary material exhibits.
</details>

## Section D — 2 matching and multi-statement questions

### 19. Match the definition to the constant

| List I | List II |
| --- | --- |
| (P) Young's modulus | (1) tangential stress ÷ shear strain |
| (Q) Bulk modulus | (2) normal stress ÷ longitudinal strain |
| (R) Shear modulus | (3) lateral strain ÷ (−) longitudinal strain |
| (S) Poisson's ratio | (4) pressure change ÷ volumetric strain magnitude |

Match each of P, Q, R, S with the correct number in List II.

<details><summary>Answer</summary>

**P–2, Q–4, R–1, S–3.**

- Young's modulus compares normal stress with longitudinal strain.
- Bulk modulus: $B=-\Delta p/(\Delta V/V)$ — pressure per fractional volume change, written here as magnitude over magnitude.
- Shear modulus: tangential stress over the shear *angle*.
- Poisson's ratio: lateral strain over the (negative) longitudinal strain — the defining negative sign belongs in its formula, and the definition compares the two strains directly.
</details>

### 20. Three statements on wires

Consider three statements about wires of the same material and cross-sectional area:

**Statement I:** The breaking load of a wire does not depend on its length.
**Statement II:** Stretched by the same load, a wire of double the length stores double the elastic energy.
**Statement III:** Fully restrained and heated through the same $\Delta T$, a wire of double the length develops a stress of half the magnitude.

Which statements are correct?

- A. I only
- B. I and II
- C. II and III
- D. I, II and III

<details><summary>Answer</summary>

**B.**

- I: true. Breaking is decided by the material stress $\sigma=F/A$ reaching its limit, so the breaking *load* fixes on area only — a longer wire carries the same breaking load while demanding mere millimetres more stretch to reach it.
- II: true. $U=\frac12F\Delta L$ with $\Delta L=FL/AY\propto L$: doubling $L$ doubles the extension and hence the stored energy.
- III: false. $\sigma=Y\alpha\Delta T$ is independent of length; the longer wire develops the *same* stress, not half.

</details>

## Review by error, not by score

| If you missed… | Revisit | Then retry |
| --- | --- | --- |
| 1, 2, 8, 11, 15 | Stress, strain and Young's modulus | Write $\Delta L=FL/AY$ once, then let ratios do the work. |
| 3, 4, 13, 18, 19 | Poisson's ratio and the bulk/shear moduli | Decide the deformation mode *before* choosing a modulus. |
| 9, 16, 17 | Stress–strain curve, elastomers, hysteresis | Separate stored energy from dissipated heat per cycle. |
| 5, 7, 10, 12 | Elastic energy and the spring constant | The $\frac12$ and the $x^2$ scaling carry most of the marks. |
| 6, 14, 20 III | Thermal stress | Restraint converts $\alpha\Delta T$ into strain, then into stress. |
| 20 | Proportionality mixing | For each quantity ask: material, geometry, or neither? |

<learning-block type="recap" title="Ready when you recognise the trap">

Aim for at least 15 of 20 correct, and for every miss write down *which tool you reached for instead*. Ten minutes of that reflection is worth more than a re-run of the whole paper: this chapter's questions are built around choosing the right property, and so are the exam papers that follow the same pattern.

</learning-block>
