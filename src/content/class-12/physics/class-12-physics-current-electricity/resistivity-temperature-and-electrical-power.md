## Why identical wires behave differently

Two wires of the same length and thickness can have very different resistances if they are made of different metals. Copper conducts easily; nichrome, the alloy used in heater elements, resists strongly and becomes hot. The difference is a property of the **material**, not of the wire's size. Separating the material property from the geometry gives a clean way to design conductors, and it also explains why a heater cable glows while the connecting lead stays cool.

## 1. Resistivity: resistance per unit geometry

For a uniform conductor of length $L$ and cross-sectional area $A$, experiment gives

$$
R=\rho\frac{L}{A}.
$$

The constant $\rho$ is the **resistivity** of the material. Rearranged,

$$
\rho=\frac{RA}{L},
$$

and its SI unit is the ohm metre, $\Omega\,\text{m}$: $(\Omega)(\text{m}^2)/(\text{m})=\Omega\,\text{m}$.

Resistivity is a property of the material and its temperature; resistance is a property of a particular object. A long thin copper wire can have a larger resistance than a short thick nichrome wire, even though copper has the smaller resistivity.

Some representative values at room temperature are enough to show the enormous range:

| Material | Resistivity $(\Omega\,\text{m})$ | Character |
| --- | --- | --- |
| Silver | $1.6\times10^{-8}$ | best conductor |
| Copper | $1.7\times10^{-8}$ | ordinary wiring |
| Aluminium | $2.8\times10^{-8}$ | overhead lines |
| Nichrome | $\approx1.1\times10^{-6}$ | heater element |
| Glass | $10^{10}$–$10^{14}$ | insulator |

The reciprocal of resistivity is the **conductivity** $\sigma=1/\rho$, measured in siemens per metre.

Geometry and resistivity together have a useful consequence. If a wire is stretched so that its volume $AL$ stays constant, then $A$ falls as $L$ rises. Writing $R=\rho L/A=\rho L^2/(AL)=\rho L^2/V$, the resistance grows as the **square** of the length. Doubling the length of a stretched wire quadruples its resistance; doubling its diameter at fixed length quarters it.

## 2. How temperature changes resistance

For a metal over a moderate temperature range, resistivity increases approximately linearly with temperature:

$$
\rho_T=\rho_0\left[1+\alpha(T-T_0)\right],
$$

where $\rho_0$ is the resistivity at the reference temperature $T_0$ and $\alpha$ is the **temperature coefficient of resistivity**, measured in $\text{K}^{-1}$ (numerically the same as $^\circ\text{C}^{-1}$). Because $R=\rho L/A$, the same factor applies to resistance when the dimensions hardly change:

$$
R_T=R_0\left[1+\alpha(T-T_0)\right].
$$

For copper, $\alpha\approx3.9\times10^{-3}\ \text{K}^{-1}$. A $5.0\ \Omega$ copper winding at $20^\circ\text{C}$ therefore has resistance

$$
R_{80}=5.0\left[1+(3.9\times10^{-3})(60)\right]
=5.0(1.234)\approx6.2\ \Omega
$$

at $80^\circ\text{C}$.

The physical reason is that a hotter lattice vibrates more strongly, so electrons collide more often and $\tau$ falls. In a semiconductor the carrier density rises rapidly with temperature, which usually wins: its resistivity **falls** as it warms. Alloys such as manganin and constantan are engineered to have very small $\alpha$, which is why they are used for standard resistors and meter coils. Below a critical temperature, some materials become superconductors and their resistivity drops abruptly to zero.

The linear formula is an approximation. It fails near melting, over very wide temperature ranges, and wherever $\alpha$ itself changes with temperature.

## 3. Electrical power and energy

When charge $\Delta Q$ moves through a potential difference $V$, the electrical energy transferred is $\Delta Q\,V$. If this happens in time $\Delta t$, the power is

$$
P=\frac{\Delta Q\,V}{\Delta t}=VI.
$$

Using $V=IR$ gives two equivalent forms:

$$
P=I^2R=\frac{V^2}{R}.
$$

All three expressions are correct for a resistor, but each is convenient in a different situation. In a **series** element the current is the same, so $P=I^2R$ compares elements directly. In **parallel** elements the voltage is the same, so $P=V^2/R$ is the convenient form. Using $V^2/R$ with the wrong voltage—such as the supply voltage across only one resistor in a series chain—is a common source of error.

Electrical energy is power multiplied by time:

$$
E=Pt.
$$

The domestic unit is the kilowatt-hour:

$$
1\ \text{kWh}=(1000\ \text{W})(3600\ \text{s})=3.6\times10^6\ \text{J}.
$$

A resistor converts electrical energy into thermal energy at the rate $I^2R$; that is **Joule heating**. In a filament lamp this heating is the point, while in a transmission line it is an unwanted loss. It also explains why a conductor's resistance is not truly constant when a large current passes: the dissipated power raises the temperature, which changes $\rho$.

## 4. Worked example: a nichrome heater

A heating element is made from nichrome wire of length $8.0\ \text{m}$ and cross-sectional area $0.20\ \text{mm}^2$. Take $\rho=1.1\times10^{-6}\ \Omega\,\text{m}$ at its operating temperature. It is connected across $230\ \text{V}$.

**Resistance.**

$$
R=\rho\frac{L}{A}
=(1.1\times10^{-6})\frac{8.0}{0.20\times10^{-6}}
=44\ \Omega.
$$

**Current.**

$$
I=\frac{V}{R}=\frac{230}{44}\approx5.2\ \text{A}.
$$

**Power and energy.** Using $P=V^2/R$,

$$
P=\frac{(230)^2}{44}\approx1.2\times10^{3}\ \text{W}.
$$

The check $P=VI=(230)(5.2)\approx1.2\ \text{kW}$ agrees. In $30\ \text{min}=0.50\ \text{h}$ the element uses

$$
E=Pt=(1.2\ \text{kW})(0.50\ \text{h})=0.60\ \text{kWh}.
$$

**Sanity check.** A $1.2\ \text{kW}$ heater is a realistic domestic rating, and $44\ \Omega$ is a sensible resistance for a mains element. The current is about $5\ \text{A}$, consistent with a domestic circuit protected at $13\ \text{A}$.

## 5. Reading a power rating

A bulb marked “$60\ \text{W}$, $240\ \text{V}$” is designed to dissipate $60\ \text{W}$ when the potential difference across it is $240\ \text{V}$. At that operating point,

$$
I=\frac{P}{V}=\frac{60}{240}=0.25\ \text{A},
\qquad
R=\frac{V^2}{P}=\frac{240^2}{60}=960\ \Omega.
$$

The resistance quoted this way is the **hot** resistance. The cold filament has a much lower resistance, which is why a bulb draws a brief surge of current when first switched on. If you assume constant resistance and operate the same bulb at $120\ \text{V}$, you get $P=120^2/960=15\ \text{W}$, not $30\ \text{W}$: power varies as the square of the voltage for a fixed resistance.

<learning-block type="mistake" title="A higher-wattage bulb is not the higher-resistance one">

At the same rated voltage, a $100\ \text{W}$ bulb has **less** resistance than a $60\ \text{W}$ bulb. Since $P=V^2/R$, the larger power corresponds to the smaller $R$. At $240\ \text{V}$, $R_{60}=960\ \Omega$ but $R_{100}=576\ \Omega$, so the $100\ \text{W}$ bulb draws the larger current. A second common error is to use the supply voltage in $V^2/R$ for one resistor of a series chain; use the potential difference actually across that resistor.

</learning-block>

## Try it yourself

**A.** A wire of length $1.5\ \text{m}$ and cross-sectional area $0.30\ \text{mm}^2$ has resistance $2.0\ \Omega$. Find its resistivity.

<details><summary>Show the reasoning</summary>

$$
\rho=\frac{RA}{L}
=\frac{(2.0)(0.30\times10^{-6})}{1.5}
=4.0\times10^{-7}\ \Omega\,\text{m}.
$$

This is in the range of a resistive alloy rather than copper.

</details>

**B.** A bulb is rated $60\ \text{W}$ at $240\ \text{V}$. Find its operating current and resistance. If it is connected to $120\ \text{V}$ and its resistance is assumed unchanged, what power does it dissipate?

<details><summary>Show the reasoning</summary>

$$
I=\frac{60}{240}=0.25\ \text{A},
\qquad
R=\frac{240^2}{60}=960\ \Omega.
$$

At $120\ \text{V}$,

$$
P=\frac{120^2}{960}=15\ \text{W}.
$$

Quartering the voltage quarters the power, because $P\propto V^2$ at fixed $R$.

</details>

**C.** A $2.0\ \text{kW}$ heater runs for $3.0\ \text{h}$. How much energy does it use in kilowatt-hours, and what does it cost at ₹8 per kWh?

<details><summary>Show the reasoning</summary>

$$
E=Pt=(2.0)(3.0)=6.0\ \text{kWh}.
$$

At ₹8 per kWh, the cost is $6.0\times8=₹48$.

</details>

## Remember

- Resistivity is a material property, $\rho=RA/L$, measured in $\Omega\,\text{m}$; resistance depends on both material and shape through $R=\rho L/A$.
- For metals, resistance rises with temperature through $R_T=R_0[1+\alpha(T-T_0)]$; for semiconductors it usually falls.
- A stretched wire of fixed volume has $R\propto L^2$.
- Electrical power is $P=VI=I^2R=V^2/R$; choose the form that matches the quantity held constant.
- Electrical energy is $E=Pt$, with $1\ \text{kWh}=3.6\times10^6\ \text{J}$.

With resistance and power understood for a single element, the next module connects several elements into networks and adds the internal resistance of real cells.
