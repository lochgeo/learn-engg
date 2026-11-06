## One number cannot describe stiffness

Pulling a wire longer, squeezing a block smaller and sliding the top face of a block sideways are three physically different ways to deform a bar, and a real material resists each differently. Each mode has its own modulus, and one further quantity — Poisson's ratio — describes how a stretch in one direction is accompanied by a shrink in the others. Together they form the complete elastic fingerprint of an isotropic material.

## 1. Young's modulus: resistance to stretching

For a body under tensile or compressive stress, Young's modulus is the ratio of normal stress to longitudinal strain:

$$
Y=\frac{\sigma}{\varepsilon}=\frac{F/A}{\Delta L/L}
\qquad\Rightarrow\qquad
\Delta L=\frac{FL}{AY}.
$$

Typical values (in $\text{N/m}^2$) show an enormous range:

| Material | $Y$ (approx.) |
| --- | --- |
| Steel | $2.0\times10^{11}$ |
| Copper | $1.1\times10^{11}$ |
| Brass | $0.9\times10^{11}$ |
| Aluminium | $0.7\times10^{11}$ |
| Rubber | $10^7$–$10^8$ |

Steel is stiffer than rubber by a factor of tens of thousands: steel's atomic bonds barely flex, whereas rubber's coiled polymer chains simply straighten. Note that a large $Y$ means *stiff*, not *strong* — the last load a material carries is a different tabulated quantity (the breaking stress, from the curve module).

## 2. Bulk modulus: resistance to squeezing

Apply a uniform pressure increase $\Delta p$ to a body of original volume $V$; its volume falls to $V-\Delta V$ (with $\Delta V>0$ denoting the decrease). The **bulk modulus** is

$$
B=-\ \frac{\Delta p}{\Delta V/V}
\quad\text{equivalently}\quad
\frac{\Delta V}{V}=\frac{\Delta p}{B},
$$

with the minus sign making $B$ **positive**, since a pressure rise and a volume decrease have opposite signs. Its reciprocal $\kappa=1/B$ is the **compressibility**, unit $\text{Pa}^{-1}$.

Bulk moduli say a lot about how strongly matter resists crowding:

- Steel: about $1.6\times10^{11}\ \text{Pa}$.
- Water: $2.2\times10^{9}\ \text{Pa}$ — far softer than a solid, yet very hard to squeeze by everyday standards: an added $10^7\ \text{Pa}$ (a hundred atmospheres) shrinks a water sample by only $10^7/2.2\times10^9\approx0.45\%$.
- Air at ordinary conditions: about $10^5\ \text{Pa}$, four orders of magnitude smaller than water — why gases are easy to compress. (The gas value changes under adiabatic compression, a result you will need in thermodynamics.)

## 3. Shear modulus: resistance to sliding

Fix a block's bottom face and apply a tangential force $F$ to its top face of area $A$. The top face slides sideways by $\Delta x$ relative to the bottom, tipping the vertical sides through an angle $\gamma$. The **shear modulus** (also written $\eta$) is

$$
G=\frac{\text{tangential stress}}{\text{shear strain}}
=\frac{F/A}{\gamma}
=\frac{F/A}{\Delta x/h},
$$

where $h$ is the height over which the slide occurs and $\gamma$ is in radians. Shear strain is an angle, hence dimensionless. Note what happens geometrically: layers **slide** over one another while the volume stays constant — shear changes shape, not size.

Shear moduli are smaller than Young's moduli (for steel, $G\approx7.7\times10^{10}\ \text{Pa}$), so solids deform in shape more easily than in length. A quick worked check: a shear stress of $7.7\times10^6\ \text{Pa}$ on a steel block with $G=7.7\times10^{10}\ \text{Pa}$ gives $\gamma=10^{-4}\ \text{rad}$; with $h=10\ \text{cm}$ the top face slides only $\Delta x=h\gamma=10\ \mu\text{m}$. Tiny — yet that is what a shaft under torsion exploits: every transmitted torque rides on these small shears.

## 4. Poisson's ratio: the sideways consequence

Stretch a rubber cord and it becomes visibly thinner; stretch a steel wire and the thinning is microscopic but real. The **Poisson's ratio** compares the lateral squeeze-back with the longitudinal stretch:

$$
\nu=-\ \frac{\text{lateral strain}}{\text{longitudinal strain}}
=-\ \frac{\Delta d/d}{\Delta L/L}.
$$

The minus sign is built in so that $\nu$ comes out positive for ordinary stretching. For isotropic materials $\nu$ lies between $0$ (cork is nearly the limiting case) and $0.5$ (rubber). Most metals sit between $0.25$ and $0.35$; a typical value for steel is $\nu=0.3$.

Poisson's ratio also fixes the *volume* strain. Stretching by $\varepsilon$ with sideways strain $\varepsilon_x=\varepsilon_y=-\nu\varepsilon$ gives

$$
\frac{\Delta V}{V}=(1-2\nu)\,\varepsilon.
$$

Check the limit $\nu=0.5$: the volume change is zero — the material stretches by thinning, without growing. That is what "rubber is nearly incompressible" means quantitatively. A computed example: a steel wire stretched $0.6\%$ with $\nu=0.3$ has lateral strain $-0.18\%$; a $2.0\ \text{mm}$ diameter wire thins by $\Delta d=(1.8\times10^{-3})(2.0\ \text{mm})=3.6\ \mu\text{m}$.

## 5. The moduli are connected

For an isotropic material the elastic constants are not independent. With $Y$, $G$ and $B$ linked through $\nu$:

$$
Y=2G(1+\nu)
\qquad\text{and}\qquad
Y=3B(1-2\nu).
$$

### Worked example: one measurement, two predictions

Steel has $Y=2.0\times10^{11}\ \text{Pa}$ and $\nu=0.3$. **Predict** $G$ and $B$ from these two numbers alone.

$$
G=\frac{Y}{2(1+\nu)}=\frac{2.0\times10^{11}}{2(1.3)}=7.7\times10^{10}\ \text{Pa},
$$

$$
B=\frac{Y}{3(1-2\nu)}=\frac{2.0\times10^{11}}{3(0.4)}=1.7\times10^{11}\ \text{Pa}.
$$

**Cross-check.** Both predicted values match the tabulated steel values quoted above. The agreement is the sanity check: if a computation puts $G$ far above $Y/2$ or $B$ far above $Y/3$, suspect an algebra slip or a borrowed $\nu$ that belongs to a different material.

<learning-block type="mistake" title="Sign and scope slips with the moduli">

- **Treating the minus sign as a negative answer.** $B=-\Delta p/(\Delta V/V)$ is positive precisely because $\Delta V$ is negative when pressure rises. Never quote a negative bulk modulus for ordinary matter.
- **Pasting a modulus from the wrong mode of loading.** Pulling calculates $Y$; squeezing volume needs $B$; sliding needs $G$. Each modulus is meaningless for the other types of deformation.
- **Mixing materials in one equation.** $\sigma=Y\varepsilon$ must use a $Y$ from the *same material table row* as the stress. A copper wire does not stretch like a steel wire under the same load; it stretches about twice as much.

</learning-block>

## Try it yourself

**A.** A copper wire of length $2.0\ \text{m}$ and area $1.0\times10^{-6}\ \text{m}^2$ carries the same $100\ \text{N}$ tension that gave a steel wire a $1.0\ \text{mm}$ extension. Find the copper wire's extension ($Y_{\text{copper}}=1.1\times10^{11}\ \text{Pa}$).

<details><summary>Show the reasoning</summary>

$\Delta L=\dfrac{FL}{AY}=\dfrac{100\times2.0}{(1.0\times10^{-6})(1.1\times10^{11})}=1.8\times10^{-3}\ \text{m}=1.8\ \text{mm}$. The softer (smaller-$Y$) material stretches about twice as much, as expected.
</details>

**B.** Ocean water at a depth of $2000\ \text{m}$ is under an added pressure of about $2.0\times10^7\ \text{Pa}$. Taking $B=2.2\times10^9\ \text{Pa}$, by what fraction is a sample of water compressed?

<details><summary>Show the reasoning</summary>

$\Delta V/V=\Delta p/B=(2.0\times10^7)/(2.2\times10^9)=9.1\times10^{-3}$, about $0.9\%$. Even under crushing depth the compression is under one per cent.
</details>

**C.** A steel block experiences a shear stress of $3.85\times10^6\ \text{Pa}$ ($G=7.7\times10^{10}\ \text{Pa}$). Find the shear strain and the displacement of a point $20\ \text{cm}$ above a fixed base.

<details><summary>Show the reasoning</summary>

$\gamma=\sigma/G=(3.85\times10^6)/(7.7\times10^{10})=5.0\times10^{-5}\ \text{rad}$. Then $\Delta x=h\,\gamma=(0.20)(5.0\times10^{-5})=1.0\times10^{-5}\ \text{m}=10\ \mu\text{m}$. Shear strains are angles, so the unit is radians.
</details>

## Remember

- $Y$ answers pulling, $B$ squeezing, $G$ sliding — choose the modulus that matches the deformation in the question.
- $B$ is defined with a minus sign so that it comes out positive; compressibility is $1/B$.
- $\nu$ runs from $0$ to $0.5$; $\nu=0.5$ means volume is conserved on stretching.
- The relations $Y=2G(1+\nu)$ and $Y=3B(1-2\nu)$ let two known constants predict the third.
- Next module: what happens when you keep loading until all these linear rules stop — the full stress–strain curve, yield, fracture and hysteresis.
