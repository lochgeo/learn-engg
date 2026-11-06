## Why a solid behaves like a bundle of springs

Every solid holds its shape because neighbouring atoms sit at fixed separations, held by electromagnetic bonds that behave like tiny springs. Pull slightly on a solid and those bonds stretch by a minute amount, producing restoring forces large enough to balance everyday loads. That is why a table top under a heavy book sags by far less than a micrometre, yet still pushes back hard enough to support it. Elasticity is the study of this microscopic springiness, written in quantities you can measure on a real specimen: stress, strain and their ratio.

## 1. Stress: force per unit area

Suppose a force $F$ acts uniformly over a cross-sectional area $A$ of a rod or wire. The **stress** is

$$
\sigma=\frac{F}{A}.
$$

The SI unit is the pascal: $1\ \text{Pa}=1\ \text{N/m}^2$; useful multiples are $1\ \text{MPa}=10^6\ \text{Pa}$ and $1\ \text{GPa}=10^9\ \text{Pa}$. Atmospheric pressure is about $10^5\ \text{Pa}$, while working stresses in engineering metals reach $10^8\ \text{Pa}$ — a thousand atmospheres.

Two cases matter for axial loads:

- **Tensile stress**: the forces pull outward, stretching the body. A hanging wire experiences tensile stress from the load below.
- **Compressive stress**: the forces push inward, shortening the body. A pillar under a building carries compressive stress.

Dividing by area is not bookkeeping — it is the whole point. The same $500\ \text{N}$ pull stretches a thin thread far more than a thick tie rod, so the *load alone* tells you nothing about how much a material is being challenged. Stress, not force, is what a material responds to. A tangential force distributed over an area produces a different kind of stress (shear stress), which we take up in the next module.

### Quick check: the pier

A concrete pier of base area $0.25\ \text{m}^2$ supports a $15\,000\ \text{kg}$ load. With $g=10\ \text{m/s}^2$ the force is $F=1.5\times10^5\ \text{N}$, so

$$
\sigma=\frac{1.5\times10^5}{0.25}=6.0\times10^5\ \text{Pa}\approx0.6\ \text{MPa}.
$$

Concrete typically survives $20$–$40\ \text{MPa}$ in compression, so this pier works at only a few per cent of its limit — a sensible margin for a structure.

## 2. Longitudinal strain: fractional change of length

A tensile load stretches a wire from $L$ to $L+\Delta L$. The **longitudinal strain** is the fractional extension

$$
\varepsilon=\frac{\Delta L}{L}.
$$

Strain is a ratio of two lengths, so it is **dimensionless** — it carries no unit. It is usually quoted as a fraction, a percentage, or in milli-strain ($10^{-3}$). A cable $4\ \text{m}$ long that stretches $8\ \text{mm}$ has $\varepsilon=0.008/4=2\times10^{-3}$, or $0.2\%$.

That number is worth remembering: elastic strains in metals are typically only a few parts per thousand or less. Solids *feel* hugely loaded while *moving* hardly at all. Stretching also makes a wire slightly thinner — the sideways squeeze-back is quantified by Poisson's ratio in the next module.

## 3. Hooke's law: the linear regime

For loads small enough that the atomic springs are hardly disturbed, stress grows in proportion to strain:

$$
\sigma=Y\,\varepsilon.
$$

The constant $Y$ (Young's modulus, defined and tabulated in the next module) has the same unit as stress. Written in terms of the applied force, for a wire of area $A$ and length $L$,

$$
F=\frac{YA}{L}\,\Delta L,
$$

which has exactly the form of a spring: $F=k\,\Delta L$ with the effective spring constant $k=YA/L$. Hooke's law is therefore not a law of nature — it is a statement that, in a limited range, the same linear relationship holds for individual atoms and for whole specimens. Go far enough beyond that range and the proportionality breaks down; where that happens is the subject of section 4.

## 4. The elastic limit: how far you may push

As the load on a specimen increases, it passes through recognisable regimes:

| Regime | What happens when the load is removed |
| --- | --- |
| Proportional (Hooke) region | Returns exactly, and stress was proportional to strain throughout |
| Elastic region | Returns fully, but the stress–strain relation is no longer linear |
| Beyond the elastic limit | Does **not** return fully: the deformation is partly permanent (plastic) |
| Sufficiently large stress | Fracture: the specimen breaks |

The **elastic limit** is the largest stress a material can carry and still recover its original dimensions completely. Designers never work right up to it: they choose a **working stress** well below the elastic limit or breaking stress, and the ratio (limit ÷ working stress) is the factor of safety. Meanwhile ductile materials give visible warning of overload — they stretch and thin before breaking — while brittle ones fail with little warning. The full stress–strain curve that displays all of these regimes is drawn and read in the third module of this chapter.

<learning-block type="mistake" title="Stiff, strong and tough are not the same property">

- **Stiffness** is the slope of the stress–strain graph: a large Young's modulus. Steel is stiff; rubber is not.
- **Strength** is the stress the material can *carry* before yielding or breaking. It says nothing about slope.
- **Toughness** is the total energy absorbed before fracture — the area under the whole curve. Steel is tough; glass, though stiff and strong in compression, is not.

A rubber band stretches enormously yet has a tiny modulus; a steel rod barely moves yet carries enormous stress without permanent change. Confusing these three adjectives is the single most common error in this chapter.

</learning-block>

## 5. Worked example: from load to extension

A steel wire of length $2.0\ \text{m}$ and cross-sectional area $1.0\times10^{-6}\ \text{m}^2$ carries a $10\ \text{kg}$ hanging mass. Take $g=10\ \text{m/s}^2$ and $Y=2.0\times10^{11}\ \text{Pa}$.

**Stress.** $\sigma=F/A=\dfrac{(10)(10)}{1.0\times10^{-6}}=1.0\times10^8\ \text{Pa}$, i.e. $100\ \text{MPa}$.

**Strain.** $\varepsilon=\sigma/Y=\dfrac{1.0\times10^8}{2.0\times10^{11}}=5.0\times10^{-4}$, i.e. $0.05\%$.

**Extension.** $\Delta L=\varepsilon L=(5.0\times10^{-4})(2.0)=1.0\times10^{-3}\ \text{m}=1.0\ \text{mm}$.

**Cross-check.** The direct formula gives $\Delta L=\dfrac{FL}{AY}=\dfrac{100\times2.0}{(1.0\times10^{-6})(2.0\times10^{11})}=1.0\times10^{-3}\ \text{m}$ — the same result, as it must be.

**Sanity check.** A strain of $0.05\%$ is far below the elastic limit of steel, so the wire will return completely when the mass is lifted off.

### Worked example: sizing a tie from the limit

A steel with elastic limit $2.0\times10^8\ \text{Pa}$ must carry a design load of $4.0\times10^5\ \text{N}$ at a factor of safety of $2$.

**Working stress.** $\sigma_{\text{working}}=2.0\times10^8/2=1.0\times10^8\ \text{Pa}$.

**Required area.** $A=F/\sigma=4.0\times10^5/1.0\times10^8=4.0\times10^{-3}\ \text{m}^2=40\ \text{cm}^2$, a solid rod about $71\ \text{mm}$ in diameter.

**Sanity check.** Under the design load the rod would operate at strain $\sigma/Y=5.0\times10^{-4}$ — squarely inside the linear region, so Hooke's law remains valid for the whole life of the component. Note how the three ideas interlock: the limit sets the working stress, the working stress sizes the bar, and the modulus predicts how much it will move under load.

## Try it yourself

**A.** A tie rod of cross-sectional area $3.0\times10^{-4}\ \text{m}^2$ carries a tensile force of $900\ \text{N}$. Find the tensile stress.

<details><summary>Show the reasoning</summary>

$\sigma=F/A=900/(3.0\times10^{-4})=3.0\times10^6\ \text{Pa}=3.0\ \text{MPa}$. Stress is a force spread over an area, so the unit is pascals.
</details>

**B.** A cable originally $4\ \text{m}$ long reads $4.008\ \text{m}$ under load. Find the longitudinal strain.

<details><summary>Show the reasoning</summary>

$\varepsilon=\Delta L/L=0.008/4=2.0\times10^{-3}$, or $0.2\%$. Strain is dimensionless; quoting the numeric value alone is correct.
</details>

**C.** Two wires of the same material but different lengths and areas carry the same force. Which quantities are guaranteed identical for the two wires: stress, strain, extension, Young's modulus?

<details><summary>Show the reasoning</summary>

Only the modulus. Stress differs because $A$ differs; strain is $\sigma/Y$ so it differs too; the extension $\Delta L=FL/AY$ differs as well. Young's modulus is a property of the *material*, not of the particular specimen, so it is the same for both.
</details>

## Remember

- Stress is force per unit area, in pascals; strain is a dimensionless fractional deformation.
- Hooke's law $\sigma=Y\varepsilon$ is a linear approximation, valid only below the proportional limit.
- The elastic limit separates fully recoverable deformation from permanent (plastic) deformation; designs work well below it.
- Stiffness (modulus), strength (stress carried) and toughness (energy to fracture) are three different properties.
- Next module: the three elastic moduli — stretching, squeezing and shearing — and Poisson's ratio, the sideways coupling that turns a stretch into a thinning.
