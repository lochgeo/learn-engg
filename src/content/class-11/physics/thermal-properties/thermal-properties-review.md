## Your study plan for this chapter

The chapter is six connected ideas, not one formula. A first pass takes about **2 hours 40 minutes** plus breaks:

| # | Module | Minutes | You can move on when… |
| --- | --- | --- | --- |
| 1 | Temperature and thermal expansion | 20 | you convert scales and handle holes/handles without hesitating |
| 2 | Specific heat and calorimetry | 22 | a mixing balance with a container comes out first try |
| 3 | Change of state and latent heat | 22 | you can test "does all the ice melt?" before solving |
| 4 | Conduction | 22 | series/parallel composites give you both $H$ and junction temperature |
| 5 | Convection and radiation | 20 | you compute net radiative loss in kelvin, first time, every time |
| 6 | Stefan, Wien and Newton's cooling | 24 | you can go from a colour to a temperature to a cooling curve |
| 7 | This mastery check | 25 | all ten questions answerable cold, then check |

Work without notes between questions; a method you cannot name is a question you will lose. After this pass, sit the **timed JEE set** module (50 min, no notes).

## First choose the tool

| Clue in the question | Reach for |
| --- | --- |
| "New length/area/volume at a new temperature" | $\Delta L = \alpha L\Delta T$; $\Delta A = 2\alpha A\Delta T$; $\Delta V = 3\alpha V\Delta T$ |
| "Clock loses time as temperature rises" | $\Delta T/T = \tfrac{1}{2}\alpha\Delta\theta$ |
| "Warm body, final temperature; vessel included" | $\sum mc\,\Delta T = 0$; container as water equivalent $w = m_{cal}c_{cal}/c_{water}$ |
| "Ice/steam/water mixture" | Latent terms first: $mL_f$, $mL_v$ — then test whether the phase completes |
| "Heat current through slabs/rods" | $H = kA\Delta T/L$; resistance $R = L/kA$; series add $R$, parallel add $H$ |
| "How thick is the ice after time $t$" | $t = \rho L y^2/(2k\theta)$ |
| "Power radiated / net exchange" | $P = e\sigma A T^4$; $P_{net} = e\sigma A(T^4 - T_0^4)$ — kelvin only |
| "Colour of the emission / star temperature" | Wien: $\lambda_m T = 2.9\times10^{-3}\ \text{m·K}$ |
| "Cooling from $\theta$ to $\theta'$ in $t$, room $\theta_0$" | Newton: excess decays exponentially; equal times multiply excess by equal factors |
| "Who absorbs better, who emits better" | Kirchhoff: $E/a$ equal for all bodies at one temperature |

## Mastery check

Ten questions, no notes, then open each answer and mark your reasoning, not just the number.

### 1. Rail gauge arithmetic

A steel rail ($\alpha = 1.2\times10^{-5}\ \text{K}^{-1}$) is $15\ \text{m}$ long at installation and may heat by $40\ \text{K}$ in summer. What expansion must the rail gap absorb?

<details><summary>Answer and reasoning</summary>

$\Delta L = \alpha L\Delta T = (1.2\times10^{-5})(15)(40) = 7.2\times10^{-3}\ \text{m} = 7.2\ \text{mm}$. Sanity: roughly half a millimetre per metre of rail — gaps are real engineering, not decoration.
</details>

### 2. The pendulum's summer error

A pendulum clock keeps time at $15^\circ\text{C}$; on a day at $40^\circ\text{C}$ ($\alpha_{steel} = 1.2\times10^{-5}\ \text{K}^{-1}$), how many seconds does it lose in $86\,400\ \text{s}$?

<details><summary>Answer and reasoning</summary>

Fractional period change $= \tfrac{1}{2}\alpha\Delta\theta = \tfrac{1}{2}(1.2\times10^{-5})(25) = 1.5\times10^{-4}$. Lost time $= 86\,400\times1.5\times10^{-4} = 12.96\ \text{s} \approx 13\ \text{s}$ per day. The period lengthens, so fewer ticks per day: it runs slow.
</details>

### 3. Mixing without a container

$0.4\ \text{kg}$ of water at $60^\circ\text{C}$ is mixed with $0.2\ \text{kg}$ at $20^\circ\text{C}$. Assuming no losses, find the final temperature.

<details><summary>Answer and reasoning</summary>

Same substance, so the mass-weighted mean applies: $T_f = \frac{0.4(60)+0.2(20)}{0.6} = \frac{24+4}{0.6} = 46.7^\circ\text{C}$. It sits twice as close to the $60$ reading because that mass is twice as large. Note the answer is *not* $40^\circ\text{C}$ — that trap is the plain (unweighted) average.
</details>

### 4. Steam into ice — how far does it get?

How much steam at $100^\circ\text{C}$ condenses on $200\ \text{g}$ of ice at $0^\circ\text{C}$ to leave **water at $40^\circ\text{C}$**? ($L_f = 3.34\times10^{5}$, $L_v = 2.26\times10^{6}\ \text{J/kg}$.)

<details><summary>Answer and reasoning</summary>

Energy needed: melt $+ $ warm the result: $(0.200)(3.34\times10^{5}) + (0.200)(4186)(40) = 6.68\times10^{4} + 3.35\times10^{4} = 1.00\times10^{5}\ \text{J}$.

Energy delivered per kg of steam: condense $+$ cool: $2.26\times10^{6} + (4186)(60) = 2.512\times10^{6}\ \text{J/kg}$.

Mass $= 1.00\times10^{5}/2.512\times10^{6} \approx 0.040\ \text{kg} = 40\ \text{g}$. The condensation term is about nine tenths of the delivery — forget it and you would "need" $400\ \text{g}$, ten times too much.
</details>

### 5. Ice on the lake

Water at $0^\circ\text{C}$ lies under air at $-10^\circ\text{C}$. Using $\rho_{ice} = 900\ \text{kg/m}^3$, $L_f = 3.34\times10^{5}\ \text{J/kg}$, $k_{ice} = 2.2\ \text{W}\,(\text{m·K})^{-1}$, find the time for a $5\ \text{cm}$ sheet to form.

<details><summary>Answer and reasoning</summary>

$t = \dfrac{\rho L y^{2}}{2k\theta} = \dfrac{(900)(3.34\times10^{5})(0.05)^2}{2(2.2)(10)} = \dfrac{7.52\times10^{5}}{44} = 1.71\times10^{4}\ \text{s} \approx 4.8\ \text{h}$.

Check the quadratic law and self-throttling: a $2.5\ \text{cm}$ sheet needed only about $70$ min — doubling thickness quadruples time.
</details>

### 6. Double glazing arithmetic

A $1.0\ \text{m}^2$ window: inside $20^\circ\text{C}$, outside $5^\circ\text{C}$. Compare the conduction loss of one $4\ \text{mm}$ glass pane ($k=1.0$) with the same window reglazed as two $4\ \text{mm}$ panes sealing a $20\ \text{mm}$ still air gap ($k = 0.026$).

<details><summary>Answer and reasoning</summary>

Single pane: $H = (1.0)(1.0)(15)/(0.004) = 3750\ \text{W}$ (conduction only).

Double: resistances add: $R = 2\times\dfrac{0.004}{1.0} + \dfrac{0.020}{0.026} = 0.008 + 0.769 = 0.777\ \text{m}^2\text{K/W}$; $H = 15/0.777 \approx 19\ \text{W}$.

The air gap — not the glass — carries almost all the added resistance: about $200\times$ reduction. (Real installations add external film resistances, softening the gain, but the ranking is the point.)
</details>

### 7. A series composite

Copper ($k=400$) and iron ($k=80$) rods, each $0.10\ \text{m}$ long, cross-section $1.0\times10^{-3}\ \text{m}^2$, joined end-to-end between $100^\circ\text{C}$ and $0^\circ\text{C}$. Find the heat current and the junction temperature.

<details><summary>Answer and reasoning</summary>

$R_{Cu} = 0.10/(400\times10^{-3}) = 0.25\ \text{K/W}$; $R_{Fe} = 0.10/(80\times10^{-3}) = 1.25\ \text{K/W}$. Sum $1.5$; so $H = 100/1.5 = 66.7\ \text{W}$.

Junction: drop across copper $= HR_{Cu} = 66.7\times0.25 = 16.7\ \text{K}$, so $T_{junction} = 100 - 16.7 = 83.3^\circ\text{C}$.

Check: through the iron, $(83.3 - 0)/1.25 = 66.7\ \text{W}$ ✓. One current everywhere; drops shared in proportion to resistance.
</details>

### 8. A star's temperature from its colour

A star's continuum emission peaks at $\lambda_m = 500\ \text{nm}$. Find its surface temperature.

<details><summary>Answer and reasoning</summary>

$T = b/\lambda_m = (2.9\times10^{-3})/(5.0\times10^{-7}) = 5.8\times10^{3}\ \text{K}$ — a Sun-like star. Blue-shift the peak towards $300\ \text{nm}$ and the same formula hands you $\approx 9700\ \text{K}$; red-shift towards $700\ \text{nm}$ for $\approx 4100\ \text{K}$. Wien runs equally in both directions.
</details>

### 9. A sphere cooling by radiation only

A sphere of emissivity $0.5$, surface area $0.50\ \text{m}^2$, sits at $600\ \text{K}$ inside walls at $400\ \text{K}$. Find the net radiative power.

<details><summary>Answer and reasoning</summary>

$P_{net} = e\sigma A(T^4 - T_0^4) = (0.5)(5.67\times10^{-8})(0.5)(1.296\times10^{11} - 2.56\times10^{10})$ — with $600^4 = 1.296\times10^{11}$ and $400^4 = 2.56\times10^{10}$.
Difference $= 1.04\times10^{11}$. Then $P_{net} = (0.25)(5.67\times10^{-8})(1.04\times10^{11}) \approx 1.5\ \text{kW}$. All temperatures kelvin; the subtraction before multiplication is deliberate.
</details>

### 10. Newton's half-life shortcut

A body cools so that its temperature **excess halves every $40\ \text{min}$**. It starts at $70^\circ\text{C}$ in a room at $20^\circ\text{C}$. What temperature does it reach after $2\ \text{h}$?

<details><summary>Answer and reasoning</summary>

Excess starts at $50$. After three halvings ($120\ \text{min}$): $50 \to 25 \to 12.5 \to 6.25$. Temperature: $20 + 6.25 = 26.25^\circ\text{C}$. The exponential never quite reaches the room's temperature; each further $40$ min halves the remaining gap.
</details>

## Self-check

You are ready for the timed set when you can, without notes:

- convert readings **and** intervals among $^\circ\text{C}$, $^\circ\text{F}$ and $\text{K}$, and say why only kelvin belongs inside $T^4$;
- run all three expansion coefficients ($\alpha$, $2\alpha$, $3\alpha$) and argue why a heated hole enlarges;
- write a full mixing balance that includes the container's water equivalent, and test "does the phase change complete?" before solving an ice/steam mixture;
- turn a composite wall into series resistances and extract both the heat current and a junction temperature;
- compute net radiation $e\sigma A(T^4 - T_0^4)$ with kelvin, and convert a peak wavelength into a temperature with Wien;
- solve a Newton's-law cooling question by the equal-time excess ratios, and say when the law stops applying.

If any row of that list is shaky, go back to that module and redo its worked example with your own numbers before attempting the timed paper.
