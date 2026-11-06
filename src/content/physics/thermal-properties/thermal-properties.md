## Hot tea, cold cup, one final temperature

Pour hot tea into a cold cup. Within a minute or so the tea, the cup and the air above it settle at one common temperature, and the exchange stops. That shared value — the quantity that, given time and contact, equalises between objects — is **temperature**. A thermometer works only because of this equalising: it is a small, convenient third object whose reading you trust whenever it sits long enough with the body of interest. The rule behind it is the **zeroth law of thermodynamics**: if body A is separately in thermal equilibrium with body C, and body B is also in equilibrium with C, then A and B are in equilibrium with each other. That is what makes one thermometer comparable to every other.

Heat, by contrast, is energy **in transit**, flowing because of a temperature difference. When the difference vanishes, the flow stops — but the effects of the heat already delivered (a longer rail, a warmer cup) remain. This chapter follows that energy: how temperature is measured, how heating changes size, how much energy a substance absorbs, what happens at a change of state, and how heat travels.

## 1. Three scales, one quantity

| Scale | Freezing point of water | Boiling point of water | Divisions between them |
| --- | --- | --- | --- |
| Celsius (°C) | $0$ | $100$ | $100$ |
| Fahrenheit (°F) | $32$ | $212$ | $180$ |
| Kelvin (K) | $273.15$ | $373.15$ | $100$ |

The conversions follow directly:

$$T_F = 32 + \frac{9}{5}T_C, \qquad T_C = \frac{5}{9}\,(T_F - 32), \qquad T_K = T_C + 273.15.$$

The subtlety that trips up careful students: an **interval** of $1\ \text{K}$ is exactly an interval of $1^\circ\text{C}$, so temperature *differences* pass between those two scales unchanged, while a *reading* must be shifted by $273.15$. Fahrenheit differs in both offset and size: an interval of $9\ \text{F}^\circ$ equals an interval of $5\ \text{K}$.

The kelvin exists for a physical reason, not a bureaucratic one. The Celsius zero is chosen for convenience, but experiments (extrapolating gas behaviour, and later the whole of thermodynamics) point to a true floor of temperature at $-273.15^\circ\text{C}$, where classical kinetic motion would vanish. Kelvin measures from that floor, which is why physical laws such as the Stefan–Boltzmann radiation law later in this chapter only work with kelvin.

## 2. Thermometers and how calibrations work

A liquid-in-glass thermometer compares the expansion of a liquid (mercury stays liquid from $-39^\circ\text{C}$ to $357^\circ\text{C}$ and expands evenly; alcohol reaches down to $-112^\circ\text{C}$) against that of the glass. A **constant-volume gas thermometer**, where the pressure of a fixed volume of gas rises in direct proportion to temperature, is the laboratory standard and is what defines the ideal-gas temperature scale.

Any new scale can be mapped onto Celsius through its two fixed points. If a scale reads $x_{ice}$ at the ice point and $x_{steam}$ at the steam point, a reading $x$ corresponds to

$$T_C = \frac{x - x_{ice}}{x_{steam} - x_{ice}}\times 100^\circ\text{C}.$$

**Worked example.** A faulty thermometer reads $5$ in melting ice and $95$ in steam at standard pressure. What is the true temperature when it reads $50$?

$$T_C = \frac{50 - 5}{95 - 5}\times 100 = \frac{45}{90}\times 100 = 50^\circ\text{C}.$$

The two errors nearly cancel here, but notice the method: only the **span** and the offset matter, never the raw numbers themselves. This same idea appears whenever an instrument needs a two-point calibration.

## 3. Linear expansion: long things get longer

Raise the temperature of a solid rod of original length $L$ by $\Delta T$ and its length grows by

$$\Delta L = \alpha L \,\Delta T,$$

where $\alpha$, the **coefficient of linear expansion**, has units $\text{K}^{-1}$ (equivalently $\text{°C}^{-1}$, since intervals are identical). It holds for small changes over moderate ranges, for homogeneous isotropic materials. Typical values: steel $\alpha \approx 1.2\times10^{-5}\ \text{K}^{-1}$, brass $\approx 1.8\times10^{-5}$, aluminium $\approx 2.4\times10^{-5}$, fused quartz only $\approx 0.5\times10^{-6}$ — which is why laboratory glassware and oven windows survive thermal shock.

**Worked example.** A steel rail is $10\ \text{m}$ long and may swing from $20^\circ\text{C}$ to $60^\circ\text{C}$ between seasons. How much length change must the track design absorb?

$$\Delta L = (1.2\times10^{-5})(10)(40) = 4.8\times10^{-3}\ \text{m} = 4.8\ \text{mm}.$$

Sanity check: a few millimetres per $10\ \text{m}$ is small but far from ignorable — multiply by a kilometre of continuous rail and it becomes half a metre. Rails are laid with gaps, bridges have expansion joints, long pipelines use bellows, and a bimetallic strip of two metals with different $\alpha$ bends when heated, which is how many thermostats switch.

### The pendulum clock

A pendulum's period is $T = 2\pi\sqrt{L/g}$, so a small fractional length change gives half as large a fractional period change:

$$\frac{\Delta T}{T} = \frac{1}{2}\frac{\Delta L}{L} = \frac{1}{2}\alpha\,\Delta T.$$

A longer period means the clock runs **slow** on a hot day. This fractional rule is a favourite in examinations; it appears again in the chapter review.

## 4. Area expansion — and the hole that grew

For a flat sheet, both dimensions expand:

$$A' = L(1+\alpha\Delta T)\times W(1+\alpha\Delta T) \approx A(1 + 2\alpha\Delta T),$$

so the **area coefficient is $\beta = 2\alpha$**, ignoring the tiny product of two small terms.

Now the counter-intuitive part. Cut a hole in the sheet and heat it: the hole gets larger, in exact proportion to the material around it expanding. Every separation between material points — including separations across a hole — scales up by the same factor. A machinist exploits this deliberately for a **shrink fit**: cool a bushing to slip it into a housing, or heat the housing, and a tight interference fit develops as the parts return to room temperature.

<learning-block type="mistake" title="The hole does not shrink">

A heated metal plate does not close up around its hole; the hole's boundary is material that expands outward, so a warm piston's piston-pin hole grows just like the piston itself. Students who imagine the metal "flowing into" the hole lose marks on exactly this question. Similarly, a glass bottle's internal volume increases when it is warmed — which is why a stuck lid loosens under hot water: the **lid** is usually a different metal that expands more than the glass neck.

</learning-block>

## 5. Volume expansion

Heating a solid expands it along all three axes, so for an isotropic solid

$$\Delta V = \gamma V\,\Delta T, \qquad \gamma \approx 3\alpha,$$

again dropping the product of small terms in the exact cube. A $2.4\times10^{-5}\ \text{K}^{-1}$ linear coefficient for aluminium implies $\gamma \approx 7.2\times10^{-5}\ \text{K}^{-1}$.

Liquids have no fixed shape, so only $\gamma$ is meaningful. But a liquid in a glass container visibly expands by the **difference** of the two expansions:

$$\gamma_{\text{apparent}} = \gamma_{\text{liquid}} - \gamma_{\text{container}} \left(\approx \gamma_{\text{liquid}} - 3\alpha_{\text{glass}}\right).$$

Mercury's $\gamma \approx 1.8\times10^{-4}\ \text{K}^{-1}$ against glass $\gamma \approx 2.7\times10^{-5}$ gives the comfortable, near-linear rise a thermometer relies on. Gases expand far more dramatically: at constant pressure, $\Delta V/V = \Delta T/273.15$, a coefficient roughly twenty times water's. Chapter 12 of this course (kinetic theory) picks up why.

<learning-block type="check" title="Everyday anchors">

- Overhead cables are strung slack in summer and taut (but never snapping-tight) in winter, because a cold cable contracts.
- A completely filled, sealed bottle of water left in a hot car can bulge or burst: liquids expand more than their containers.
- Ice is about $9\%$ less dense than water, which is the extreme end of the same molecular story told next.

</learning-block>

## 6. The anomalous expansion of water

Nearly every liquid simply becomes less dense as it warms. Water refuses, in a narrow range: from $0^\circ\text{C}$ up to about $4^\circ\text{C}$ it **contracts**, reaching its maximum density (essentially $1000\ \text{kg/m}^3$) near $4^\circ\text{C}$; above that it behaves normally and expands. The cause is hydrogen bonding: as the chaotic close-packed arrangement loses its last thermal jostling just above freezing, molecules begin locking into the open, cage-like hexagonal structure of ice — which is why ice floats at $917\ \text{kg/m}^3$, roughly $8\%$ lighter than the liquid.

The consequences are not a curiosity; they set the shape of every winter lake. As surface water cools towards $4^\circ\text{C}$ it becomes *denser* and **sinks**, stirring the pond. Below $4^\circ\text{C}$ the cooled surface water is now *lighter*, so it stays on top, continues cooling, and finally freezes at the surface. The pond therefore freezes **top-down**, capped by a floating, poorly conducting lid of ice, while the water underneath — often resting near $4^\circ\text{C}$ — never freezes solid. Fish survive winters for this reason.

<learning-block type="mistake" title="Confusing 'maximum density' with 'maximum temperature'">

Students routinely write that water's density is greatest at the *lowest* temperature, or sketch the density rising continuously to $0^\circ\text{C}$. The density of water peaks at about $4^\circ\text{C}$ and **falls on both sides** of that peak — towards warmer water, and again towards freezing. Sketch the curve as an inverted-U between $0$ and $8^\circ\text{C}$ before answering any question on lakes, icebergs or pipelines bursting in winter.

</learning-block>

## Try it yourself

**A.** A recipe written for a $450^\circ\text{F}$ oven: convert the setting to Celsius.

<details><summary>Show the reasoning</summary>

$T_C = \frac{5}{9}(450 - 32) = \frac{5}{9}\times418 = 232^\circ\text{C}$. Divisions of $9\ \text{F}^\circ$ map to $5\ \text{K}$, so per-degree reasoning must never mix an $F$ reading directly with a coefficient quoted in $\text{K}^{-1}$.
</details>

**B.** A pendulum clock keeps time at $15^\circ\text{C}$ with a steel rod ($\alpha = 1.2\times10^{-5}\ \text{K}^{-1}$). How much time does it lose per day ($86\,400\ \text{s}$) at $40^\circ\text{C}$?

<details><summary>Show the reasoning</summary>

$\Delta T = 25\ \text{K}$, so $\Delta T/T_{period} = \tfrac{1}{2}\alpha\Delta T = 1.5\times10^{-4}$. Every swing takes $0.015\%$ longer, so in a day the clock falls behind by $86\,400 \times 1.5\times10^{-4} \approx 13\ \text{s}$. The loss accumulates — note it is the *period* that grows, so the clock counts fewer swings, hence runs slow.
</details>

**C.** An aluminium sphere of diameter $10\ \text{cm}$ (at $20^\circ\text{C}$) is heated to $100^\circ\text{C}$. By what percentage does its volume increase?

<details><summary>Show the reasoning</summary>

$\Delta V/V = \gamma\Delta T \approx 3\alpha\Delta T = 3(2.4\times10^{-5})(80) = 5.8\times10^{-3}$, i.e. about $0.58\%$ — consistent with the linear diameter growth of only $\Delta d = \alpha d\,\Delta T = 2.4\times10^{-5}\times10\times80 \approx 0.19\ \text{mm}$.
</details>

## Remember

- Temperature is the quantity that equalises at thermal equilibrium; heat is energy transferred while the difference persists.
- Differences between $^\circ\text{C}$ and $\text{K}$ need no conversion; readings do. Kelvin starts where classical motion stops: $-273.15^\circ\text{C}$.
- $\Delta L = \alpha L\Delta T$, $\Delta A = 2\alpha A\Delta T$, $\Delta V = 3\alpha V\Delta T$ — and a **hole expands like the material around it**.
- Apparent expansion of a liquid in a vessel is the difference of the two volume coefficients.
- Water is densest near $4^\circ\text{C}$; lakes freeze from the top, and a $4^\circ\text{C}$ refuge stays liquid underneath.

How much heat actually has to be *supplied* to raise a given mass through a given temperature interval is the question the next module takes up — and the answer depends much more on the substance than on the everyday feeling that "all things warm equally".
