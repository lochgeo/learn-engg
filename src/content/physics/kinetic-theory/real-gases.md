## The model that cannot condense

Breathe on a cold window and water vapour turns to liquid droplets. Open a gas cylinder and liquid carbon dioxide spills out. Everyday chemistry is full of gases becoming liquids, yet every ideal-gas assumption denies the possibility: point particles with no attractions cannot stick together or pile up densely. Real gases need extensions. This lesson measures how far they stray from ideal behaviour, then builds the standard repair — the van der Waals equation — and stops at the critical point, where liquid and vapour merge into one continuous phase.

## 1. Measuring the deviation: the compressibility factor

A number condenses all the deviation into one symbol. For a real gas, define

$$
Z=\frac{pV}{nRT}.
$$

For an ideal gas $Z=1$ identically, whatever the conditions; $Z$ is the measured compression behaviour divided by the ideal prediction:

- $Z<1$: the gas occupies **less** volume (or pushes **less** pressure) than ideal — intermolecular attractions are pulling the molecules together. Long-range attraction is dominant.
- $Z>1$: the gas is **harder to compress** than ideal — at very high densities the molecules' own volume and the short-range repulsion dominate.

Plot $Z$ against pressure for a real gas at a modest temperature and the curve dips below $1$, passes through a minimum, then climbs above $1$ at high pressure. Cool the gas further and the dip deepens until it hits the condensation region. Warm it and the dip shallows, vanishing altogether at the **Boyle temperature**, where attractions and repulsions cancel over a pressure range and the gas obeys $pV=nRT$ almost exactly.

### Worked example: extracting Z from measurements

One mole of nitrogen has been compressed to $V=1.00\ \text{litre}$ at $300\ \text{K}$, and its measured pressure is $20.0\ \text{atm}$. The ideal-gas law would insist on

$$
p_{\text{ideal}}=\frac{nRT}{V}=\frac{(1.00)(0.0821)(300)}{1.00}=24.6\ \text{atm},
$$

so

$$
Z=\frac{p_{\text{measured}}V}{nRT}=\frac{p_{\text{measured}}}{p_{\text{ideal}}}=\frac{20.0}{24.6}=0.81.
$$

The measured pressure falls short of ideal: attractions are dominant at this density. A gas that measured above $24.6\ \text{atm}$ instead would be in repulsion-dominated territory. Notice that no molecular theory was needed — $Z$ is defined purely from measurements.

## 2. The van der Waals repair

Johannes van der Waals altered the ideal-gas equation with two physically motivated corrections:

$$
\left(p+\frac{an^2}{V^2}\right)(V-nb)=nRT.
$$

Each correction confronts one failed assumption of the ideal model:

| Correction | Assumption it fixes | Where it acts |
| --- | --- | --- |
| $+\dfrac{an^2}{V^2}$ added to $p$ | no attractions | a molecule arriving at the wall is being dragged **back** by the bulk, hitting it less hard |
| $-nb$ subtracted from $V$ | point molecules | molecules are finite-sized spheres; only the free space matters |

The constant $a$ grows with the strength of the attractions: gases held by strong forces (ammonia, water vapour) show big $a$; noble gases, small $a$. The constant $b$ measures the volume the molecules themselves occupy — in fact $b$ is about four times the actual molecular volume in a mole. Its usual units are litre per mole.

The $an^2/V^2$ term deserves attention. Attractions are pair corrections, so the correction scales as the square of the number density $n/V$; it is irrelevant when the gas is dilute (large $V$) and grows enormous under compression. That is precisely why the ideal-gas law works best at low pressure and high temperature.

## 3. What the equation predicts: the critical point

Push the van der Waals isotherms onto a $p$–$V$ diagram and a shape emerges that matches experiment:

- High above a characteristic temperature, every isotherm resembles the hyperbola of an ideal gas.
- Below a characteristic temperature, there exists a small pocket of volumes where **liquid** and **vapour coexist**: isothermal compression at constant pressure condenses some of the gas to liquid.
- At exactly the **critical temperature** $T_c$, the coexistence pocket shrinks to a single point of inflection, the **critical point**, at critical pressure $p_c$ and critical molar volume $3b$.

Van der Waals' equation predicts, from the inflection-point conditions:

$$
T_c=\frac{8a}{27Rb},
\qquad
p_c=\frac{a}{27b^2}.
$$

The physical meaning is practical and sharp: **above $T_c$, no amount of pressure can liquefy the gas.** At $300\ \text{K}$ oxygen (critical temperature $154\ \text{K}$) stays stubbornly gaseous however hard you squeeze it, while carbon dioxide ($T_c=304\ \text{K}$) is already on the edge of condensation. Gas cylinders carrying butane or ammonia stay liquid precisely because household temperatures sit below their critical temperatures.

<learning-block type="check" title="...and the Boyle temperature falls out">

One clean consequence is worth naming. The Boyle temperature, where a gas behaves most ideally over a range of pressure, comes out of the van der Waals equation as

$$
T_{\text{B}}=\frac{a}{Rb},
$$

that is, $\frac{27}{8}\approx3.4$ times the critical temperature. At $T_{\text{B}}$ the two corrections essentially balance as pressure is applied; below it attractions win (the dip in $Z$), and far above it the b correction — repulsion — wins even at quite low pressure.

</learning-block>

<learning-block type="mistake" title="Assuming real gases always behave 'softly'">

The commonest error is to decide once and for all that real gases deviate downward, "molecules attracting each other so pressure is less". The deviations split into $Z<1$ and $Z>1$ regimes, and **which** one a gas occupies depends on temperature and pressure. At several hundred atmospheres even helium shows $Z>1$: molecules pushed shoulder to shoulder act like solid objects. Look at the quadrant of $T$ and $p$ before predicting the direction of the deviation.

</learning-block>

## Try it yourself

**1.** One mole of helium at $300\ \text{K}$ is squeezed into $V=0.100\ \text{litre}$ with measured pressure $p=250\ \text{atm}$. Compute $Z$ and interpret.

<details><summary>Show the reasoning</summary>

$$
Z=\frac{pV}{nRT}=\frac{(250)(0.100)}{(1.00)(0.0821)(300)}=\frac{25.0}{24.6}=1.02.
$$

$Z$ sits just above $1$: at this severe compression the finite molecular size (and short-range repulsion) has overtaken any attractive softening. Helium, with nearly zero attraction but stubborn atoms, tips into repulsion-dominated compression.
</details>

**2.** Given critical temperatures $T_c(\text{He})=5\ \text{K}$, $T_c(\text{N}_2)=126\ \text{K}$, $T_c(\text{CO}_2)=304\ \text{K}$, $T_c(\text{NH}_3)=405\ \text{K}$, arrange by increasing intermolecular attraction ($a$ constant) and justify.

<details><summary>Show the reasoning</summary>

Since $T_c=8a/27Rb$ (holding $b$ broadly similar across these simple molecules), a larger $T_c$ signals stronger attraction. Order of increasing $a$: He < N₂ < CO₂ < NH₃. It matches intuition: helium atoms barely attract, while ammonia molecules hydrogen-bond and stick hardest.
</details>

**3.** Why do real gases show near-ideal $Z=1$ behaviour at low pressures regardless of temperature?

<details><summary>Show the reasoning</summary>

Two corrections vanish at low pressure: the pair-attraction term $an^2/V^2$ shrinks as $1/V^2$ and the excluded volume $nb$ becomes negligible as $V$ grows. With the molecules wildly apart and rarely interacting, the ideal-gas picture is nearly exact. Small residual errors of order a percent remain for real substances at room temperature, which is why this chapter's other modules could freely use $pV=nRT$ under ordinary conditions.
</details>

## Remember

- The compressibility factor $Z=pV/nRT$ measures the deviation: $Z=1$ ideal, below $1$ attractions rule, above $1$ molecular size and repulsion rule.
- Van der Waals repairs the two broken assumptions: attractions give $(p+an^2/V^2)$, finite size gives $(V-nb)$.
- Both corrections die out in dilute gases — hence "ideal gas" again describing dilute, warm gases, as the earlier modules of this chapter did.
- Above the critical temperature $T_c=8a/27Rb$, pressure alone can never liquefy the gas; below it, condensation is possible.
- The Boyle temperature $T_{\text{B}}=a/Rb$ is where the gas behaves most nearly ideal.
- Next module gathers the whole chapter for a mixed practice session.
