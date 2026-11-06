## The ocean digs into you

Dive $2\ \text{m}$ under water and your ears feel it. Dive $10\ \text{m}$ and it is painful. Nothing has pushed you sideways; the water merely rests on you. Pressure grows with depth because deeper fluid must carry the weight of all the fluid above it. This module turns that remark into an equation, and the equation into instruments — the barometer and the manometer.

## 1. Where $p=p_0+\rho gh$ comes from

Imagine a widespread horizontal slab of liquid, area $A$, thickness small, with its top at depth $h$ below a free surface where the pressure is $p_0$ (usually atmospheric). The slab is in equilibrium, so three vertical forces balance:

- downward force from the fluid above: $p\,A$, on the top face;
- downward weight of the slab: mass $\rho A\,\mathrm{d}h$, so weight $\rho g A\,\mathrm{d}h$;
- upward force from the fluid below: $(p+\mathrm{d}p)\,A$, on the bottom face.

Balancing the vertical forces gives $\mathrm{d}p=-\rho g\,\mathrm{d}h$ if $h$ is measured *upwards*; measuring depth $h$ downwards, the pressure increases by

$$
p=p_0+\rho g h,
$$

for a fluid of constant density $\rho$. The assumptions to state: the density is uniform (true for most liquids to very good accuracy) and the fluid is static. For gases the density itself varies with height, and $p_0+\rho gh$ still works over small height changes such as a few metres of air, because air's density changes very little over them.

The pressure increment depends only on $\rho$, $g$ and $h$ — not on the size or shape of the vessel. Ten litres of water in a slim column and ten litres in a wide bowl give the *same* pressure at the same depth. This shape-independence is called the **hydrostatic paradox** and it is no paradox at all: the fluid below carries whatever is above, and thin columns answer with taller heights (a strategy used inammedieval water towers).

## 2. Gauge and absolute pressure

Every pressure is a force per area, but you must say *relative to what zero*.

- **Absolute pressure** is measured from vacuum: $p_{\text{abs}}$.
- **Gauge pressure** is measured from the local atmospheric pressure: $p_{\text{gauge}}=p_{\text{abs}}-p_{\text{atm}}$.

So the extra push that “squeezes” a diver comes only from the $\rho gh$ part: the gauge pressure at depth $h$ is

$$
p_{\text{gauge}}=\rho g h.
$$

A pressure gauge reads zero on the bench, yet the bench holds a hundred kilonewtons per square metre of atmosphere — gauges simply subtract the constant background, just like your eardrums, which are balanced from inside.

<learning-block type="example" title="Worked example: a diver at 10 m">

Take $\rho=1000\ \text{kg/m}^3$ for fresh water, $g=9.8\ \text{m/s}^2$ and $h=10\ \text{m}$.

$$
p_{\text{gauge}}=1000\times9.8\times10=9.8\times10^4\ \text{Pa}\approx0.97\ \text{atm}.
$$

Absolute pressure:

$$
p_{\text{abs}}=9.8\times10^4+1.013\times10^5\approx2.0\times10^5\ \text{Pa}=\ 2\ \text{atm}.
$$

Sanity check by the rule of thumb: every $10\ \text{m}$ of water adds about one atmosphere. Doubly deep, doubly careful with your ears.

</learning-block>

## 3. The barometer: weighing the atmosphere

A tube, closed at one end, filled with mercury and inverted into a dish of mercury: some mercury runs out, then a column remains standing, with vacuum above it. The pressure at the open surface of the dish is $p_{\text{atm}}$; the pressure at depth zero of the dish equals the pressure at the bottom of the tube's column, so

$$
p_{\text{atm}}=\rho_{\text{Hg}}\,g\,h.
$$

Standard atmospheric pressure supports a mercury column of

$$
h=\frac{1.013\times10^5}{13600\times9.8}=0.76\ \text{m}=76\ \text{cm},
$$

which is why pressure is still quoted “in centimetres of mercury”. Mercury earns its job by being dense: a water barometer of the same one-atmosphere reading would need $1.013\times10^5/(1000\times9.8)\approx10.3\ \text{m}$ of tube — a perfectly honest instrument, but an unwieldy one.

## 4. Manometers and U-tubes: comparing pressures

An **open-tube manometer** is a U-tube holding a liquid (often mercury). One arm connects to a gas container, the other stays open to the atmosphere. If the gas side's liquid surface sits lower by $h$, the gas pushes harder than the atmosphere:

$$
p_{\text{gas}}=p_{\text{atm}}+\rho g h,
\qquad\text{so}\qquad
p_{\text{gas,gauge}}=\rho g h.
$$

If the open side's surface is lower instead, the sign flips and the gas pressure is below atmospheric (a partial vacuum). The height difference $h$ is read directly off the tube scale; multiply by $\rho g$ for the gauge pressure.

Two standing rules make U-tube problems fast:

- **At the same height in one connected liquid, all points have the same pressure.** Pick the common lowest level, or any level where one liquid fills both arms.
- **Across an interface, pressure is continuous.** The weight of liquid columns above a chosen level must balance across the two arms.

<learning-block type="example" title="Worked example: a gas supply on a mercury manometer">

A gas pipe connects to a mercury manometer whose open arm reads $4.0\ \text{cm}$ higher than the gas side. Take $\rho_{\text{Hg}}=13600\ \text{kg/m}^3$ and $g=9.8\ \text{m/s}^2$.

$$
p_{\text{gauge}}=\rho g h=13600\times9.8\times0.040=5.3\times10^3\ \text{Pa},
$$

$$
p_{\text{abs}}\approx1.013\times10^5+0.53\times10^5=1.07\times10^5\ \text{Pa}.
$$

The pressure is gently above atmospheric — typical of a gas supply. If instead the mercury on the open side sat $4.0\ \text{cm}$ lower, the same calculation would give *minus* $5.3\ \mathrm{kPa}$: suction.

</learning-block>

## 5. Balancing two liquids in a U-tube

Pour water into one arm and a lighter oil into the other; the columns settle when the pressures at the bottom level match:

$$
\rho_{\text{oil}}\,g\,h_{\text{oil}}=\rho_{\text{water}}\,g\,h_{\text{water}}
\qquad\Rightarrow\qquad
\rho_{\text{oil}}=\rho_{\text{water}}\,\frac{h_{\text{water}}}{h_{\text{oil}}}.
$$

This is a standard laboratory way to find an unknown density: heights are easy to measure, densities are not.

<learning-block type="mistake" title="Gauge, absolute and the shape trap">

Three recurring errors. First, adding $\rho gh$ where a question asks absolute pressure (or forgetting to add $p_{\text{atm}}$ when it *does*): always reread which zero the question uses. Second, assuming a taller, narrower container gives more pressure at its bottom: it gives more **force** on the base (more fluid), the same **pressure** if the depth is the same. Third, in a manometer, using the total column height instead of the *difference* between the two surfaces — the atmosphere already presses on the open side.

</learning-block>

## Try it yourself

**A. Find the gauge and absolute pressure $20\ \text{m}$ below the surface of a lake. Use $\rho=1000\ \text{kg/m}^3$ and $g=9.8\ \text{m/s}^2$.**

<details><summary>Show the reasoning</summary>

$p_{\text{gauge}}=\rho gh=1000\times9.8\times20=1.96\times10^5\ \text{Pa}\approx2\ \text{atm}$ of extra pressure. Absolute: $1.96\times10^5+1.013\times10^5=2.97\times10^5\ \text{Pa}\approx2.9\ \text{atm}$.
</details>

**B. How tall a water column balances standard atmospheric pressure?**

<details><summary>Show the reasoning</summary>

$h=p_{\text{atm}}/(\rho g)=1.013\times10^5/(1000\times9.8)=10.3\ \text{m}$. A saucer of water cannot be “sucked” more than about ten metres — suction pumps stop working slightly above that height, at the limit set by atmospheric pressure.
</details>

**C. In a U-tube, one arm holds water $24\ \text{cm}$ above the bottom of the water column's meniscus level with an unknown oil column of height $30\ \text{cm}$ balancing it in the other arm. Find the oil's density.**

<details><summary>Show the reasoning</summary>

Balance at the common bottom level: $\rho_{\text{oil}}\times0.30=\rho_{\text{water}}\times0.24$, so $\rho_{\text{oil}}=1000\times0.24/0.30=800\ \text{kg/m}^3$ — a plausible light oil. Always compare columns standing above the *same* reference level.
</details>

## Remember

- Deeper fluid bears the weight of fluid above: $p=p_0+\rho gh$, independent of container shape.
- Gauge pressure is the part above atmospheric; absolute pressure includes the atmosphere.
- A barometer reads $p_{\text{atm}}=\rho_{\text{Hg}}gh$, about $76\ \text{cm}$ of mercury (a $10.3\ \text{m}$ water column).
- In a U-tube, equal heights in one connected liquid mean equal pressures; immiscible liquids balance with $\rho_1h_1=\rho_2h_2$.
- Every numerical answer needs its label: gauge or absolute.

Standing liquid is now under control. The next module asks what forces a liquid exerts on anything placed in it — the answer, an upward push equal to the weight of the displaced liquid, is Archimedes' principle.
