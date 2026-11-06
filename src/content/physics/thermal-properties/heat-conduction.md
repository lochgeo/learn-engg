## The spoon test

Stir a hot pan with a wooden spoon and the handle stays comfortable forever; switch to steel and you have seconds. Both handles sit in the same steam, both faces touch the same broth — the difference is not *whether* heat arrives but *how willingly the material passes it on*. That willingness is **thermal conductivity**, the subject of this module.

## 1. What conduction is

In a solid (or a still fluid), heat moves by microscopic hand-off: faster molecules and lattice vibrations jostle their slower neighbours, passing energy down the temperature gradient without any bulk movement of matter. Metals play with a stacked deck — a sea of free electrons drifts freely and ferries kinetic energy alongside the lattice, which is why the best thermal conductors (copper, silver, aluminium) are the best electrical conductors, and why the same electron-poor insulators (glass, wood, plastics) block both. Stagnant air is an excellent barrier, which is the entire principle behind wool sweaters, fur, fibreglass batts and double glazing: insulation as *trapped air*, not as "warm material".

## 2. Fourier's law: rate, not amount

In the **steady state** — after transients die and each fixed point of the rod holds a constant temperature — the heat current (energy per second) through a slab is:

$$H = \frac{\Delta Q}{\Delta t} = \frac{kA\,(T_{hot} - T_{cold})}{L}.$$

$k$ is the **thermal conductivity** in $\text{W}\,(\text{m·K})^{-1}$; $A$ the cross-sectional area; $L$ the thickness; $\Delta T$ the temperature difference across it. Read the dependencies off the formula: twice the area, twice the flow; twice the thickness, half the flow; and $k$ is the material's intrinsic honesty about temperature differences.

| Material | $k$ in $\text{W}\,(\text{m·K})^{-1}$ (typical) |
| --- | --- |
| Copper | $\approx 400$ |
| Aluminium | $\approx 240$ |
| Iron / steel | $\approx 50$–$80$ |
| Window glass | $\approx 1.0$ |
| Brick | $\approx 0.7$ |
| Water | $\approx 0.6$ |
| Wood | $\approx 0.1$–$0.2$ |
| Air (still) | $\approx 0.026$ |

Between copper and air the ratio is fifteen thousand to one.

## 3. Thermal resistance: conduction as circuits

Invert the law: $H = \Delta T / R$, where

$$R = \frac{L}{kA}$$

is the **thermal resistance**. Water pipes and conductors obey the same arithmetic: resistances in **series** simply add, and in **parallel** their currents add. A thicker wall, a smaller area or a lower $k$ each raise $R$ and choke the flow — three separate handles on the same lever.

<learning-block type="mistake" title="Applying the full temperature difference twice">

In a composite wall the temperature drops are *shared*, not duplicated. When students find the heat current through each layer using the full $\Delta T$ across the entire stack, they overcount: the hot face's $\Delta T$ is spent across **all** layers in proportion to their resistances, and only whatever remains is left for the next layer. Write $H = \Delta T_{each}/R_{each}$ layer by layer, or trust one global $H = \Delta T_{total}/\sum R$, never both bases at once.

</learning-block>

## 4. Worked example: a series composite

A copper rod ($k = 400\ \text{W}\,(\text{m·K})^{-1}$) of length $0.10\ \text{m}$ is joined end-to-end to a steel rod ($k = 50$) of the same length; both have cross-section $2.0\times10^{-3}\ \text{m}^2$. The free ends sit at $100^\circ\text{C}$ and $0^\circ\text{C}$. Find the heat current and the junction temperature.

Resistances:

$$R_{Cu} = \frac{0.10}{400\times2.0\times10^{-3}} = 0.125\ \text{K/W}, \qquad R_{steel} = \frac{0.10}{50\times2.0\times10^{-3}} = 1.0\ \text{K/W}.$$

$$H = \frac{100}{0.125 + 1.0} = \frac{100}{1.125} \approx 89\ \text{W}.$$

For the junction temperature, spend the copper's share of the drop:

$$\Delta T_{Cu} = H\,R_{Cu} = 89 \times 0.125 \approx 11\ \text{K} \quad\Rightarrow\quad T_{junction} \approx 89^\circ\text{C}.$$

Sanity check: of the total $100\ \text{K}$ available, only about $11\ \text{K}$ is spent across the good conductor; the remaining $89\ \text{K}$ is spent across the lazy one — the worse conductor takes the punishment. Cross-check through the other rod: $H = (89 - 0)/1.0 = 89\ \text{W}$. Consistent.

## 5. Parallel paths

When two conductors bridge the *same* two temperatures side by side (two rods between the same walls), each carries its own current and the currents add — equivalent to resistances in parallel:

$$H_{total} = H_1 + H_2, \qquad \frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2}.$$

A student's mixed array of wires, or a wall pierced by studs, is simply a parallel network: total flow = sum over paths, each path judged by its own $kA/L$.

## 6. Insulation done deliberately

Practised insulation is stacked resistance:

- **Compound walls**: brick plus an air or foam layer, each with its own $R$; thickening the poorly conducting layer buys the most.
- **Double glazing**: two panes with a sealed air gap; the glass contributes little, the *gap* almost everything.
- **Clothing**: fibres trap micro-cells of still air; squashed-down fluff, or a wet jumper (water's $k$ $\approx0.6$ twenty times air's), destroys the advantage.
- **Handles**: wood or polystyrene sleeves put a high-$R$ layer between hand and heat.

The chapter review works a full double-glazing number if you want the arithmetic rather than the architecture.

## 7. Ice grows on a lake — and slows down

End this module where the last one ended: water at $0^\circ\text{C}$ under a cold atmosphere at $-10^\circ\text{C}$. Newly formed ice of thickness $y$ must conduct away the latent heat released as it thickens. Writing the balance for a thin growth $dy$.

$$\rho L\,dy = \frac{k\,\theta}{y}\,dt \quad\Rightarrow\quad t = \frac{\rho L\,y^2}{2k\,\theta},$$

with $\rho$ the ice density and $\theta$ the excess cold (temperature of the air below zero). The $y^2$ matters: doubling the sheet takes **four** times as long, so early ice rapidly thickens and then practically stalls, the sheet itself becoming the insulation that protects the water below. Every module in this chapter is marching towards the same moral: heat transfer self-throttles.

<learning-block type="check" title="Sanity pins to carry forward">

- Fourier's law speaks of a **rate** $(\text{J/s} = \text{W})$, not an amount; a small $k$ over a long path throttles the flow, it does not stop it.
- In series composites the current is one number; the *temperature drops* are shared in proportion to resistance.
- $k$ has no dependence on geometry; $R = L/kA$ carries the geometry. Two design levers: material and shape.
- Still air is the hidden hero of almost every insulator you own.

</learning-block>

## Try it yourself

**A.** A steel rod ($k = 50\ \text{W}\,(\text{m·K})^{-1}$), length $0.50\ \text{m}$, cross-section $1.0\ \text{cm}^2$, connects a $100^\circ\text{C}$ boiler to a $0^\circ\text{C}$ sink. Find the heat current.

<details><summary>Show the reasoning</summary>

$H = kA\Delta T/L = (50)(1.0\times10^{-4})(100)/(0.50) = 1.0\ \text{W}$. One watt trickles along the rod — a useful gauge for how small $kA/L$ can make even a $100\ \text{K}$ drive nearly harmless.
</details>

**B.** A window pane of area $1.0\ \text{m}^2$, thickness $5\ \text{mm}$, $k = 1.0$, separates $20^\circ\text{C}$ indoors from $10^\circ\text{C}$ outdoors. Find the loss rate, then compare with the same area of a $10\ \text{cm}$ brick wall ($k = 0.7$).

<details><summary>Show the reasoning</summary>

Pane: $H = (1.0)(1.0)(10)/(0.005) = 2000\ \text{W}$ — two kilowatts through a single square metre, which is why uncovered windows dominate winter bills. Wall: $H = (0.7)(1.0)(10)/(0.10) = 70\ \text{W}$. The wall wins by nearly a factor of $30$, entirely through the $L/k$ in the denominator: thickness and low conductivity multiply.
</details>

**C.** A lake at $0^\circ\text{C}$ sits under air at $-10^\circ\text{C}$ ($k_{ice} = 2.2$, $\rho = 900\ \text{kg/m}^3$, $L_f = 3.34\times10^{5}\ \text{J/kg}$). Roughly how long until a $2.5\ \text{cm}$ sheet forms?

<details><summary>Show the reasoning</summary>

$t = \rho L y^2/(2k\theta) = (900)(3.34\times10^{5})(0.025)^2 / (2\times2.2\times10)$. Numerator: $(900)(3.34\times10^{5})(6.25\times10^{-4}) = 1.88\times10^{5}$; denominator $= 44$. So $t \approx 4.3\times10^{3}\ \text{s}\approx 70\ \text{min}$. Check the self-slowing: a $5\ \text{cm}$ sheet would need roughly four times as long.
</details>

## Remember

- Conduction is energy handed over molecule-to-molecule (plus free electrons in metals); no bulk flow, so it works in solids *and* still fluids — but not in vacuum.
- $H = kA\Delta T/L$ in the steady state; equivalent resistance form $R = L/(kA)$ with $H = \Delta T/R$.
- Series: resistances add and one $H$ runs through everything. Parallel: currents add along separate paths. Composite problems fail when the full $\Delta T$ is reused layer by layer — the drop is shared by resistance.
- Insulation is deliberate resistance stacking; trapped still air does most of the work.
- Growth laws of the form $t \propto y^2$ (lake ice) say: fast first, then slow — the process builds its own brake.

Conduction needs matter in contact. But the sun warms you across $150$ million kilometres of nothing, and a fire across the room reaches you without stirring the air. The remaining two carriers — convection and radiation — and in particular Kirchhoff's little law about who absorbs and who emits well, are next.
