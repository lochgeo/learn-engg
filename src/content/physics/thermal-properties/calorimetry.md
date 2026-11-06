## Why the sea is slow to warm

Swim at midday in a metal-floored lido and the underwater steel ladder feels burning; the water itself barely changed. Stand on sand in the afternoon and it scorches, yet the sea a metre away stays cool until late summer. The difference is not how much energy arrived — the sun delivered the same — but **how much temperature rise each substance buys per joule**. That exchange rate is the specific heat capacity, and it is the central quantity of calorimetry: the art of accounting for heat.

## 1. Heat capacity and specific heat capacity

Warm a body without changing its state and the energy needed is

$$Q = mc\,\Delta T,$$

where $m$ is the mass (kg), $\Delta T$ the temperature rise (identical in $\text{K}$ and $^\circ\text{C}$), and $c$ the **specific heat capacity** in $\text{J}\,(\text{kg·K})^{-1}$. The product $C = mc$, the **heat capacity** of the *whole object*, is in $\text{J/K}$ — useful when a single body is tracked rather than a material.

| Substance | $c$ in $\text{J}\,(\text{kg·K})^{-1}$ (typical) |
| --- | --- |
| Water | $4186$ (use $4200$ for arithmetic) |
| Aluminium | $900$ |
| Iron / steel | $\approx 460$ |
| Copper | $385$ |
| Mercury | $140$ |

**Worked example.** A $0.5\ \text{kg}$ pan of water warms from $20^\circ\text{C}$ to $30^\circ\text{C}$:

$$Q = (0.5)(4186)(10) = 2.1\times10^{4}\ \text{J} = 21\ \text{kJ}.$$

A copper pan of the same mass over the same rise needs only $(0.5)(385)(10) = 1.9\ \text{kJ}$ — about a tenth. Same pan, same flame-time: completely different temperature change, purely because of $c$.

## 2. Why water is the outlier

Water's specific heat is the largest of any common everyday substance, and chemists explain it through hydrogen bonding: added energy first has to loosen an extensive, already-well-organised network before it can speed molecules up. Many crystalline metals, measured **per mole**, need a strikingly similar amount ($\approx 3R \approx 25\ \text{J}\,(\text{mol·K})^{-1}$); large differences appear only **per kilogram** because their atoms differ so much in mass — mercury's heavy atoms mean fewer of them per kilogram, hence its small $c$.

The consequences run through daily weather and engineering: oceans buffer coastal climates; radiator and coolant circuits use water; a hot-water bottle outstays a metal pod heated identically; and the human body, mostly water, is hard to upset thermally.

## 3. The principle of calorimetry

Seal a hot object with a cold one in an insulated container. Since nothing escapes, energy is only redistributed:

$$\sum Q = 0 \quad\Longleftrightarrow\quad \text{heat lost by hot parts} = \text{heat gained by cold parts},$$

with each contribution written signed via $Q = mc\,\Delta T$ ($\Delta T<0$ for cooling). All parts of the mixture — every material *and* the container — must reach one common final temperature.

## 4. Water equivalent

The calorimeter itself (a copper cup, a stirrer) absorbs heat too. Rather than computing with a second $mc$ term every time, express the cup as the **water equivalent**: the mass of water whose heat capacity equals the cup's.

$$w = \frac{m_{\text{cal}}\,c_{\text{cal}}}{c_{\text{water}}}.$$

A $100\ \text{g}$ copper cup ($c = 385$) then behaves like $(0.100\times385)/4186 \approx 9\ \text{g}$ of extra water. In any balance, use $m_{\text{water}} + w$ as the absorbing water mass — a shortcut, not a new law.

## 5. Worked example: identifying a metal from its specific heat

A $0.10\ \text{kg}$ block of an unknown metal, heated to $100^\circ\text{C}$, is dropped into a calorimeter holding $0.200\ \text{kg}$ of water at $20.0^\circ\text{C}$; the calorimeter's water equivalent is $0.010\ \text{kg}$. Equilibrium settles at $27.4^\circ\text{C}$. Find the specific heat.

Heat absorbed by water plus cup:

$$Q_{\text{gain}} = (0.200 + 0.010)(4186)(27.4 - 20.0) = (0.210)(4186)(7.4) \approx 6.5\times10^{3}\ \text{J}.$$

Heat lost by the metal:

$$Q_{\text{loss}} = (0.100)\,c\,(100 - 27.4) = 7.26\,c.$$

Balancing: $c = 6500/7.26 \approx 9.0\times10^{2}\ \text{J}\,(\text{kg·K})^{-1}$.

Sanity check: that is aluminium's textbook value — a $100\ \text{g}$ metal sample shifting $210\ \text{g}$ of water by $7.4\ \text{K}$ is plausible only for a substance with a high specific heat, and aluminium sits high among the common metals. Had the final temperature crept above $100^\circ\text{C}$ or below $20^\circ\text{C}$, the setup itself would be wrong.

Without the container correction the same problem would return about $850$ instead of $900$ — small here, but on lighter water volumes the neglected cup dominates the error.

## 6. Mixing problems at speed

Two amounts of the *same* liquid (no container loss) mix: the final temperature is the mass-weighted mean

$$T_f = \frac{m_1T_1 + m_2T_2}{m_1 + m_2}.$$

Mix $150\ \text{g}$ of water at $90^\circ\text{C}$ with $250\ \text{g}$ at $10^\circ\text{C}$:

$$T_f = \frac{150(90) + 250(10)}{400} = \frac{16000}{400} = 40^\circ\text{C}.$$

The result sits closer to the larger mass — a weighted mean, not an average of readings. When the substances *differ*, go back to the full balance $m_1c_1\Delta T_1 = m_2c_2\Delta T_2$ because each substance carries its own $c$.

<learning-block type="mistake" title="Forgetting that the container also drinks the heat">

The commonest calorimetry error is writing the balance only for the liquids and ignoring the calorimeter's heat capacity (or its water equivalent). The second commonest is the reverse bookkeeping slip: writing $\Delta T$ for the hot body as $T_f - T_i$ instead of $T_i - T_f$, which silently flips the expected signs. Fix the convention once per problem — heat lost is positive out of the hot body — and audit the sign of every $mc\Delta T$ before you solve.

</learning-block>

## Try it yourself

**A.** How much energy warms $0.25\ \text{kg}$ of water from $10^\circ\text{C}$ to $60^\circ\text{C}$?

<details><summary>Show the reasoning</summary>

$Q = mc\,\Delta T = (0.25)(4186)(50) = 5.2\times10^{4}\ \text{J} = 52\ \text{kJ}$ — a couple of minutes on a $450\ \text{W}$ kettle element? No: at $450\ \text{W}$ it would take about $117\ \text{s}$, which is why kettles are rated in kilowatts.
</details>

**B.** A $0.20\ \text{kg}$ copper block (negligible container losses aside, $c = 385\ \text{J}\,(\text{kg·K})^{-1}$) at $100^\circ\text{C}$ is dropped into $0.50\ \text{kg}$ of water at $25^\circ\text{C}$. Find the final temperature.

<details><summary>Show the reasoning</summary>

Balance: $(0.20)(385)(100 - T_f) = (0.50)(4186)(T_f - 25)$, i.e. $77(100 - T_f) = 2093(T_f - 25)$. Solving, $77(100) - 77T_f = 2093T_f - 52325$, so $2170\,T_f = 60025$ and $T_f \approx 27.7^\circ\text{C}$. Check the physics: copper is only $200\ \text{g}$ in a $500\ \text{g}$ thermal reservoir, and its own $c$ is small — so the barely-warm outcome is right, and copper remains the poor choice for a bed warmer.
</details>

**C.** Two identical rooms, one carpeted and one bare concrete, receive the same afternoon sun and warm equally. In the evening the bare room feels cooler. Offer the calorimetric explanation.

<details><summary>Show the reasoning</summary>

Equal *temperatures* do not mean equal *stored heat*, nor equal heat capacity coupled to the room. Concrete is dense and has a sizeable heat capacity, releasing stored energy slowly through the evening, while the thin carpet's low mass releases little. What "feels" warm is the surface locally exchanging heat with you; surface material and its thermal effusiveness — not the air's current temperature reading alone — govern that exchange.
</details>

## Remember

- Use $mc$ (heat capacity of the object) when tracking one body; use $c$ (specific heat) when you quote a material.
- Water stores about $10\times$ the heat of copper per kilogram per kelvin — the reason for climate buffering, coolant loops and hot-water bottles.
- In any insulated mixing, write $\sum Q = 0$ over **all** bodies, container included, sharing one final temperature.
- Water equivalent converts the container into equivalent grams of water; add it to the water mass and forget it thereafter.
- A weighted mean only works for equal specific heats; different materials need the full $mc$ balance.

All of this assumed the temperature *did* rise. But add heat to ice at $0^\circ\text{C}$ or water boiling at $100^\circ\text{C}$ and the thermometer refuses to move while the substance quietly reorganises itself. That stubborn constancy, latent heat, is the next module's subject.
