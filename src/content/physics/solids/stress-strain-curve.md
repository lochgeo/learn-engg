## One graph, the whole life story of a specimen

Loading a metal bar until it snaps takes seconds, but everything this chapter teaches is visible on the single graph produced in that test: stress against strain. The curve tells you how the material stretches, where it stops obeying Hooke's law, when it stops recovering, and how it finally fails. Reading this graph is the gateway between book formulas and real design decisions.

## 1. How the curve is produced and what it plots

A testing machine grips a standard specimen and increases the pulling force slowly. At each stage the force and extension are recorded and converted into **nominal (engineering) stress** and **nominal strain**:

$$
\sigma=\frac{F}{A_0}
\qquad
\varepsilon=\frac{\Delta L}{L_0},
$$

where $A_0$ and $L_0$ are the *original* values. A graph of $\sigma$ against $\varepsilon$ then reads left to right like a story: each part corresponds to a distinct physical event inside the specimen.

| Region on the curve | Name | What the material is doing |
| --- | --- | --- |
| $O$ to $A$ | Proportional region | Hooke's law holds; slope is Young's modulus |
| $A$ to $B$ | Elastic but non-linear | Still fully recoverable, but stress grows faster than linear |
| $B$ | Yield point | Plastic flow starts; the specimen no longer returns to zero strain |
| $B$ to $C$ | Strain hardening | More stress needed to keep stretching; the material toughens as it deforms |
| $C$ | Ultimate tensile strength (UTS) | The largest nominal stress the specimen will ever carry |
| $C$ to $D$ | Necking | Deformation concentrates in one narrowing band; nominal stress falls |
| $D$ | Fracture | The specimen breaks |

Steel typically yields at a strain near $10^{-3}$: so a "small" strain of a tenth of a per cent already marks the border between recoverable and permanent deformation.

## 2. Ductile versus brittle

The single most useful visual feature of the curve is **how long the region between yielding and fracture is**.

- **Ductile materials** (mild steel, copper, aluminium, gold) yield early and then stretch a great deal before breaking — total strains at fracture of tens of per cent. That is what makes wire-drawing, riveting and deep pressing possible, and it gives an unmistakable warning: an overloaded ductile member visibly bends and thins before it fails.
- **Brittle materials** (glass, ceramics, concrete in tension, cast iron) fracture almost as soon as they leave the proportional region. There is no yield plateau to speak of, no warning, and little energy absorbed. The quantity used to judge them is the **percentage elongation before fracture**; a large value means ductile.

A subtle point worth knowing: plastic stretching *strengthens* the material that remains — beat a copper wire repeatedly and it becomes harder to bend. This **strain hardening** is exactly the rising $B$–to–$C$ branch of the curve.

## 3. Elastomers: elastic, but not Hookean

Rubber and similar polymers sit far outside the ordinary rules. They stretch by hundreds of per cent and return fully, withstand no linear proportionality at all anywhere, and have a very small effective modulus. Their behaviour changes strongly with temperature and with how fast they are stretched. The microscopic reason is that rubber chains are long, coiled molecules that uncurl when pulled and re-coil when released — a different elastic mechanism from the slight stretching of atomic bonds in a metal. You cannot compute a meaningful Young's modulus from a single point on a rubber stress–strain curve unless you also state the strain where you measured the slope.

## 4. Elastic hysteresis: the loop that costs you energy

Load a rubber band to some maximum strain and then unload it: the **unloading curve does not retrace the loading curve**. Strain lags behind stress, and the loading curve lies above the unloading curve throughout. The two curves enclose a closed region of the graph called the **hysteresis loop**.

The area of that loop has a definite meaning:

$$
\text{area of loop}=\text{energy dissipated as heat, per unit volume, per cycle}.
$$

During loading you do slightly more work than the elastic energy condition store — the surplus is dissipated in internal friction. This is why:

- a rubber ball loses a measurable fraction of its mechanical energy with every bounce and lands a little lower each time;
- vibration mounts, shoe soles and car tyres get warm — rubber compounds are chosen precisely to dissipate mechanical energy;
- machine and clockwork springs are cut from spring steel, whose loading and unloading curves nearly coincide, so the stored energy comes back rather than becoming heat.

Whether you *want* a large loop (damping, shock absorption) or a negligible one (energy-returning springs) is a design decision, not a quality judgement of the material.

### Worked example: reading numbers off a curve

A metal specimen in its proportional region records $(\varepsilon,\sigma)=(5\times10^{-4},\ 1.0\times10^8\ \text{Pa})$. Later on the same curve it reaches strains of $12\%$ at a stress of $2.8\times10^8\ \text{Pa}$ before breaking.

**Young's modulus.** The slope near the origin gives $Y=\dfrac{1.0\times10^8}{5.0\times10^{-4}}=2.0\times10^{11}\ \text{Pa}$ — right in the steel range, confirming consistency of the reading.

**Classification.** A fracture strain of $0.12$ is far beyond the $10^{-3}$-scale yield strain of steel: the specimen failed at strain of order a hundred times the yield strain, which is the signature of a **ductile** material.

**Sanity check.** Had the fracture strain been reported as $0.5\%$, the specimen would sit just past the yield strain and would be borderline — worth re-measuring rather than classifying by feeling.

<learning-block type="mistake" title="Misreading the fall of the curve">

- **"The curve falls after the UTS, so the material weakens."** No: the falling branch is an artefact of plotting against the *original* area. As the specimen necks, its *true* cross-section shrinks and the actual stress in the neck keeps rising until fracture.
- **"The ultimate tensile strength is the breaking stress."** For a ductile material the breaking (fracture) point on the nominal curve lies *below* the UTS, at the end of the necking branch. Designers use the yield stress as the failure criterion for ductile metals, and the UTS mainly as the limit for brittle ones.
- **"The proportional limit and elastic limit are always the same."** They are close but distinct: a material can be fully elastic slightly beyond the region of straight proportionality.

</learning-block>

## 5. Temperature and loading rate rewrite the same curve

The full curve is not a constant of nature: it belongs to a material **at a stated temperature and loading rate**. Two practical consequences matter:

- **Metals can turn brittle.** Many steels that stretch to large plastic strains at room temperature fracture near the proportional limit when cold. Low-carbon steel shifts to brittle behaviour as temperature drops — a fact learned tragically through hull fractures in cold waters — which is why low-temperature service steels are chosen from impact-test data, not room-temperature curves.
- **Polymers soften.** Rubber's compliance grows with temperature; creeps under steady load; and, unloaded, it relaxes over time. An elastomer's curve is a family of curves, one per temperature.

So when a quantity in this chapter is quoted — a yield stress, a modulus, a fracture strain — the honest answer specifies the condition under which it was measured.

## Try it yourself

**A.** For a material whose proportional-limit point is $(\varepsilon,\sigma)=(1.2\times10^{-3},\ 2.4\times10^8\ \text{Pa})$, determine Young's modulus and state where Hooke's law stops holding.

<details><summary>Show the reasoning</summary>

$Y=\sigma/\varepsilon=(2.4\times10^8)/(1.2\times10^{-3})=2.0\times10^{11}\ \text{Pa}$. Hooke's law holds only up to the proportional limit, i.e. for stresses below $2.4\times10^8\ \text{Pa}$ (strains below $1.2\times10^{-3}$) for this material.
</details>

**B.** Two specimens show fracture strains of $0.004$ and $0.35$ respectively. Classify both and state the practical consequence of the difference.

<details><summary>Show the reasoning</summary>

The first shows almost no plastic stretch — a **brittle** material, which fails suddenly with no visible warning. The second stretches $35\%$ before fracture — strongly **ductile**, able to be drawn or formed and to give warning of overload. The consequence: a brittle member needs its working stress kept well below the proportional limit, while a ductile member can be trusted closer to its yield stress.
</details>

**C.** Why do vibration-damping mounts under a running machine grow warm?

<details><summary>Show the reasoning</summary>

The rubber cycles through its hysteresis loop once per vibration. Each cycle dissipates the loop area, per unit volume, as heat; thousands of cycles per minute turn a substantial fraction of the machine's vibration energy into thermal energy. The warmth is the loop area, made tangible.
</details>

## Remember

- The curve's landmarks in order: proportional limit, elastic limit/yield, UTS, fracture — learn what each *means*, not just where it sits.
- Ductile means a long plastic region and large percentage elongation; brittle means fracture just past the proportional region.
- Elastomers are elastic at huge strains but never obey Hooke's law; their modulus depends on where you measure.
- The hysteresis loop's area is energy dissipated per unit volume per cycle — heat, not stored elastic energy.
- Next module: turn the loading side of this curve into an energy account — how much work stretching actually stores, and where it goes.
