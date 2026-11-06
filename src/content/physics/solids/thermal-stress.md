## Expansion that cannot happen must become force

Heat a steel rail on a summer afternoon and physics demands that the rail lengthen: $\Delta L=L\alpha\Delta T$. If the rail is one of these continuously welded rails whose ends are clamped to its neighbours and anchored to the ground, the expansion *cannot* happen. What happens instead is quietly dramatic — a large compressive stress appears inside the rail, put there by nothing you can see pushing on it. Thermal stress is the physics of forces born from blocked thermal deformation.

## 1. Thermal strain: what heating wants to do

Most solids expand on heating, roughly linearly for moderate temperature changes:

$$
\Delta L=L\,\alpha\,\Delta T
\qquad
\alpha=\frac{1}{L}\frac{\Delta L}{\Delta T}.
$$

The coefficient of linear expansion $\alpha$ has unit $\text{K}^{-1}$ (equivalently $^\circ\text{C}^{-1}$, because it divides by a temperature *difference*):

| Material | $\alpha$ (approx.) |
| --- | --- |
| Aluminium | $2.4\times10^{-5}$ |
| Brass | $2.0\times10^{-5}$ |
| Copper | $1.7\times10^{-5}$ |
| Steel | $1.2\times10^{-5}$ |
| Invar (an iron–nickel alloy) | $\sim1\times10^{-6}$ |

Invar's anomalously small $\alpha$ is why it is used for precision instruments and clock pendulums where dimensions must not drift. A quick sanity check with the numbers: a $10\ \text{m}$ steel rail over a $30\ ^\circ\text{C}$ temperature swing wants to grow by

$$
\Delta L=(10)(1.2\times10^{-5})(30)=3.6\times10^{-3}\ \text{m}=3.6\ \text{mm},
$$

which is exactly the order of the gaps visible at rail joints on old railway lines.

## 2. The clamped rod: no motion, but plenty of stress

Now clamp the rod rigidly at both ends so $\Delta L=0$. The thermal strain is *forbidden*, and the rod must instead develop elastic strain of equal size and opposite sign. Using Hooke's law on that compensated strain:

$$
\text{(mechanical strain to cancel thermal strain)}=\alpha\,\Delta T
\qquad\Rightarrow\qquad
\sigma=Y\,\alpha\,\Delta T,
$$

and the force the clamps must resist is

$$
F=YA\,\alpha\,\Delta T.
$$

Read the physics in these formulas:

- **Sign.** Heating a rod with both ends fixed puts it in **compression** (it pushes outwards on the clamps); cooling it produces **tension** (it tugs the claps inward). Where a long concrete wall is restrained and cools overnight, that tension is exactly how restraint shrinkage cracks begin.
- **Length does not appear.** The developed stress is independent of the rod's length altogether — a short stub and a long beam in the same clamp arrangement carry the same stress for the same $\Delta T$. The force *does* scale with cross-sectional area $A$: the whole force is what the anchors feel.
- **Magnitudes are serious.** For steel with $\alpha=1.2\times10^{-5}$, $Y=2.0\times10^{11}\ \text{Pa}$ and a $50\ ^\circ\text{C}$ swing:

$$
\sigma=(2.0\times10^{11})(1.2\times10^{-5})(50)=1.2\times10^8\ \text{Pa}=120\ \text{MPa},
$$

which is tens of per cent of a typical steel elastic limit — comparable to the design working stresses of load-bearing structures. Thermal stress from a mere sunny day is not a footnote; it is a primary load.

And the mirror image is worth stating plainly, because it is the cleanest example of this chapter's logic:

- a **free** rod carries *strain without stress*: it moves, $\Delta L=L\alpha\Delta T$, and nothing inside it is loaded;
- a **clamped** rod carries *stress without strain*: it moves not at all, and $\sigma=Y\alpha\Delta T$ appears instead.

Any intermediate restraint (a spring anchor, compliant clamps, friction with a rail bed) splits the temperature effect between some motion and some stress — real anchors are never perfectly rigid, which is one reason design stress margins against thermal loads stay generous.

### Worked example: the restrained rail

A $20\ \text{m}$ steel rail ($A=7.0\times10^{-3}\ \text{m}^2$) is laid in a fully restrained welded track when the temperature is $15\ ^\circ\text{C}$; summer heat brings the rail to $65\ ^\circ\text{C}$. Take $\alpha=1.2\times10^{-5}\ \text{K}^{-1}$, $Y=2.0\times10^{11}\ \text{Pa}$.

**Blocked extension.** $\Delta L=L\alpha\Delta T=(20)(1.2\times10^{-5})(50)=1.2\times10^{-2}\ \text{m}=12\ \text{mm}$ — twelve millimetres of thermal strain that the track insists shall not happen.

**Stress.** $\sigma=Y\alpha\Delta T=1.2\times10^8\ \text{Pa}$ (as above — notice it came out identical for a $20\ \text{m}$ rail as for any other length).

**Force on the anchors.** $F=\sigma A=(1.2\times10^8)(7.0\times10^{-3})=8.4\times10^5\ \text{N}$ — about $84$ tonnes-force, transmitted *without any applied load whatsoever*.

**Sanity check.** The corresponding compressive strain is $\sigma/Y=6.0\times10^{-4}=\alpha\Delta T=6.0\times10^{-4}$ ✓, by construction. The result is self-consistent and uncomfortably large — which is precisely why the next section exists.

## 3. Why rails, bridges and pipelines need gaps and sliders

Engineering answers blocked thermal strain in two ways: *allow the motion* or *let the structure carry the force*.

- **Joints and gaps.** Old-style rails are laid in short lengths with gaps at the joints; a $10\ \text{m}$ rail on a $30\ ^\circ\text{C}$ range needs only $3.6\ \text{mm}$ of gap. Long-span bridge decks carry interlocking **expansion joints** so the deck can grow and shrink instead of pushing the piers sideways.
- **Bearings that slide.** One end of a bridge girder rests on **rollers or sliding bearings** so the girder is free to lengthen; then no stress develops because the expansion is simply accommodated as motion.
- **Pipelines and buildings.** Long pipelines include loops, bellows or elbow sections that flex; tall buildings sit on guides that let slabs slide; pavements are laid in slabs with sealed joints.
- **Modern welded rail.** Continuous welded rail has no gaps (that is the point — no clatter and fewer failures), so instead the track is designed to *withstand* the stress: the rail is anchored hard to heavy sleepers locked in stable ballast. The residual risk is that on an abnormally hot day the compressive stress lets a track section snap sideways in a so-called sun kink — a small-scale version of the buckling instability treated in the next module.

## 4. When restraint is an asset, not a nuisance

Blocked expansion is occasionally *engineered on purpose*:

- **Shrink fitting.** A gear or bearing ring is heated, slid over a shaft, and cools: the clamped cooling ring develops the tensile stress of a restrained contraction, gripping the shaft with enormous force for free.
- **Rivets.** Red-hot rivets are driven and then cool; the restrained contraction pulls the plates tightly together.
- **Bimetallic strips.** Two metals with different $\alpha$ bonded face to face bend when heated (the higher-$\alpha$ side becomes the outer curve), which is the classical thermostat sensor.
- **Pre-stressed concrete.** Tendons are tensioned before the load is applied, holding the whole cross-section in compression on purpose so cracks that need tension can never open.

<learning-block type="mistake" title="Thermal-stress confusions">

- **"A longer rod develops more stress."** No. $\sigma=Y\alpha\Delta T$ contains neither $L$ nor $A$. A longer rod only develops more blocked *extension* ($\Delta L\propto L$); the stress and the required compensating strain are identical.
- **"A heated free rod is stressed."** A rod heated with **no restraint** simply expands and carries no thermal stress at all. Restraint is the essential ingredient.
- **Wrong sign.** Heating a fully restrained rod means *compressive* stress; cooling means tensile. Getting the sign wrong matters when you ask about cracks (tension opens them) and buckling (compression causes it).

</learning-block>

## Try it yourself

**A.** A brass rod is fully restrained. With $\alpha_{\text{brass}}=2.0\times10^{-5}\ \text{K}^{-1}$, $Y=9.0\times10^{10}\ \text{Pa}$ and $\Delta T=40\ ^\circ\text{C}$, find the stress.

<details><summary>Show the reasoning</summary>

$\sigma=Y\alpha\Delta T=(9.0\times10^{10})(2.0\times10^{-5})(40)=7.2\times10^7\ \text{Pa}=72\ \text{MPa}$, compressive on heating. Note the more expansive material develops the larger stress for the same swing.
</details>

**B.** What gap should be left between $10\ \text{m}$ steel rails over a design range of $30\ ^\circ\text{C}$? Comment on the result.

<details><summary>Show the reasoning</summary>

The hottest rail must be free to expand into the gap: $\Delta L=L\alpha\Delta T=(10)(1.2\times10^{-5})(30)=3.6\ \text{mm}$. Add a modest clearance margin, so the joint allowance of roughly $5\ \text{mm}$ seen at rail joints makes physical sense.
</details>

**C.** A bimetallic strip (brass says $\alpha_{\text{brass}}>\alpha_{\text{steel}}$) is heated. Which side is the outer curve of the bend?

<details><summary>Show the reasoning</summary>

The brass side expands more, so to accommodate its extra length it must lie on the *outer* radius of the curve; the strip bends away from the brass. Equivalently, the shorter (steel) side is the inner curve. This is how a thermostat strip indicates temperature by bending.
</details>

## Remember

- Free expansion: $\Delta L=L\alpha\Delta T$. Full restraint converts it into stress: $\sigma=Y\alpha\Delta T$, with force $F=YA\alpha\Delta T$ on the restraint.
- Heating a fully restrained rod gives *compressive* stress; cooling gives tensile stress.
- The stress does not depend on length or area; the force on the anchors does depend on area.
- Gaps, sliders, joints and bellows are all answers to one equation.
- Next module: put the chapter's tools to work on real structures — beams that sag, I-sections that resist bending, columns that buckle, and the greatest mountain physics permits.
