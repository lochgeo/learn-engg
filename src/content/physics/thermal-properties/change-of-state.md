## The kettle's lie

A kettle boiling away on full power looks busy, and yet a thermometer over the steam — or dipped in the water — reads the same $100^\circ\text{C}$ it read minutes ago. Every joule since then has gone somewhere, but not into temperature. At a **change of state**, energy does no ordinary heating: it pays to break or loosen the bonds holding molecules in a pattern, converting a solid into a liquid or a liquid into a gas. That energy is called **latent heat** — literally "hidden" heat, hidden from the thermometer.

## 1. Latent heat: energy that rearranges, not warms

For a mass $m$ changing phase at constant temperature,

$$Q = mL,$$

where $L$ is the **specific latent heat** of that particular change, in $\text{J/kg}$. The bookkeeping is bidirectional by construction: melting absorbs $mL$, and the same $mL$ is released on freezing; vaporisation absorbs it, condensation returns it. No sign conventions beyond "supplied in, released out" are needed, because each transition has an exact reverse.

| Change of state | Latent heat symbol | Direction of energy |
| --- | --- | --- |
| solid $\rightleftharpoons$ liquid | $L_f$ (fusion) | absorbed on melting |
| liquid $\rightleftharpoons$ gas | $L_v$ (vaporisation) | absorbed on boiling/evaporating |
| solid $\rightleftharpoons$ gas | $L_s$ (sublimation) | absorbed on subliming |

For the same substance $L_s = L_f + L_v$: the two-step energy bill is identical to the direct jump.

## 2. Water's latent heats — and why vaporisation dwarfs fusion

| Transition | $L$ (per kg) | Old calorimetry units |
| --- | --- | --- |
| ice $\to$ water at $0^\circ\text{C}$ | $3.34\times10^{5}\ \text{J/kg}$ | $80\ \text{cal/g}$ |
| water $\to$ steam at $100^\circ\text{C}$ | $2.26\times10^{6}\ \text{J/kg}$ | $540\ \text{cal/g}$ |

Melting one kilogram of ice costs as much energy as warming that kilogram of water by $80\ \text{K}$. Boiling it away costs the equivalent of a $540\ \text{K}$ rise — roughly seven times the fusion bill. The asymmetry has a molecular reading: melting merely loosens an ordered lattice into a squirming liquid, but vaporisation detaches molecules completely, against the mutual attraction of everything left behind.

Two everyday consequences deserve attention. A scald from steam at $100^\circ\text{C}$ is far worse than one from water at $100^\circ\text{C}$, because the steam hands over $2.26\times10^{6}\ \text{J/kg}$ as it condenses *before* any cooling begins. And every evaporating kilogram removes heat from its surface — the mechanism of perspiration, of the earthenware matka keeping water cool, and of sensible cold after leaving the sea.

## 3. Reading a heating curve

Plot temperature against heating time (input energy) for ice starting at $-20^\circ\text{C}$ and you get a staircase: risers and treads.

| Stage | Behaviour | Governing quantity |
| --- | --- | --- |
| ice, $-20\to0^\circ\text{C}$ | temperature climbs | $m c_{ice}\Delta T$, with $c_{ice}\approx2100$ |
| ice melting | temperature flat | $m L_f$ |
| water, $0\to100^\circ\text{C}$ | climbs, but more gently | $m c_{water}\Delta T$ |
| water boiling | temperature flat | $m L_v$ |
| steam, above $100^\circ\text{C}$ | climbs again | $m c_{steam}\Delta T$ |

Two details reward careful readers. The slope of each riser is $\Delta T/\text{time} \propto 1/(mc)$, so the ice riser is **steeper** than the water riser ($c_{ice} \approx 2100 < c_{water}$): the same heater drives ice up twice as fast. The two treads sit at exactly $0^\circ\text{C}$ and $100^\circ\text{C}$ (at standard pressure) — the temperatures where the phase change, not the heating, sets the agenda.

## 4. Boiling versus evaporation

Boiling is the churning, whole-liquid event: vapour bubbles form at the heated surfaces and throughout, at one temperature fixed by the external pressure. Evaporation is the patient surface event: the fastest molecules escape from the liquid's face at *any* temperature, so the average energy of the remainder falls and the liquid cools — at room temperature, with evaporation quietly consuming the same latent heat $L_v$ that boiling needs.

## 5. Pressure moves the phase boundaries

Boiling happens when the liquid's saturated vapour can stand up to the external pressure. Squeeze harder and you deny more molecules their escape, so the boiling temperature rises. A pressure cooker sealing in roughly doubled pressure drives water to about $120^\circ\text{C}$, which cooks faster precisely because it is hotter, not because "pressure is hot". Atop a high mountain, lowered pressure drops the boiling point towards $85–90^\circ\text{C}$ — energetic-looking water that barely cooks.

Melting responds to pressure far more weakly, and — uniquely for a substance so common — *backwards*. For most materials, squeezing favours the denser solid and raises the melting point. Ice, being about $8\%$ *less* dense than water, melts under pressure: its melting point falls by a measly $0.0075\ \text{K}$ per atmosphere. The magnitude matters. Sliding fun on ice owes its lubricating film to friction heating and pressure-assisted melting near the contact, but a skate cannot be explained by pressure alone at those numbers.

The classic **regelation** demonstration does work, and works honestly: a weighted wire passes slowly through a block of ice, melting directly beneath, while the water above the wire — suddenly relieved of pressure — refreezes and the block heals behind the wire. Part of the trick is that a thin metal wire also conducts heat through itself very well, feeding the melt below; pressure supplies the directionality, conduction supplies the energy.

**Sublimation** is the solid-to-vapour shortcut, seen when naphthalene mothballs shrink in the cupboard, camphor vanishes, and dry ice (solid carbon dioxide) smokes rather than puddles — at $1\ \text{atm}$ it cannot melt at all. A substance shows all three phases in balance at its **triple point**: for water, $0.01^\circ\text{C}$ and a pressure near $612\ \text{Pa}$, low enough that even ice and steam can convene.

<learning-block type="mistake" title="Treating steam as merely hot water">

In mixing problems students credit steam only its cooling from $100^\circ\text{C}$, forgetting the $mL_v$ delivered on condensation. A $10\ \text{g}$ puff of steam at $100^\circ\text{C}$ releases $22.6\ \text{kJ}$ just condensing, then another $4.2\ \text{kJ}$ cooling — the condensation term is five sixths of the total. When the question says "steam is passed into…", the first arithmetic you write must be $Q = mL_v + mc\Delta T$ for the steam, with the latent term first.

</learning-block>

## 6. Worked example: a warming-with-melting balance

$200\ \text{g}$ of water at $80^\circ\text{C}$ is poured over $100\ \text{g}$ of ice at $0^\circ\text{C}$ in an insulated vessel. Find the final temperature.

First test whether all the ice can melt. Cooling the water to $0^\circ\text{C}$ would release at most $(0.200)(4186)(80) \approx 6.7\times10^{4}\ \text{J}$, and full melting needs $(0.100)(3.34\times10^{5}) = 3.34\times10^{4}\ \text{J}$. Comfortably affordable — so the mixture ends as liquid at a common temperature $T_f$:

$$(0.200)(4186)(80 - T_f) = (0.100)(3.34\times10^{5}) + (0.100)(4186)(T_f - 0).$$

$$837(80 - T_f) = 33400 + 419\,T_f \quad\Rightarrow\quad 66960 - 837T_f = 33400 + 419T_f,$$

$$T_f = \frac{33560}{1256} \approx 26.7^\circ\text{C}.$$

Sanity check: the answer lies strictly between $0$ and $80^\circ\text{C}$. Melting the ice consumes $33.4\ \text{kJ}$ — about half of the $67\ \text{kJ}$ the cooling water can release — so the latent term, not the final warming, explains the sharp drop from $80$ towards $27$; ice is a cheap, powerful stirrer-down of a hot drink. This "test the phase first, then balance" pattern is the standard method for every ice-and-steam mixture problem; the chapter review runs it again with different masses.

## Try it yourself

**A.** How much energy turns $0.10\ \text{kg}$ of ice at $0^\circ\text{C}$ into steam at $100^\circ\text{C}$?

<details><summary>Show the reasoning</summary>

Three stages: melt, $mL_f = 0.10\times3.34\times10^{5} = 3.34\times10^{4}\ \text{J}$; warm, $mc\Delta T = 0.10\times4186\times100 = 4.19\times10^{4}\ \text{J}$; vaporise, $mL_v = 0.10\times2.26\times10^{6} = 2.26\times10^{5}\ \text{J}$. Total $= 3.01\times10^{5}\ \text{J}$. The vaporisation step, not the melting, dominates — matching the tall tread at the top of the heating curve.
</details>

**B.** A $500\ \text{W}$ immersion heater runs entirely into a tub of ice-water slush at $0^\circ\text{C}$. How long does melting $0.50\ \text{kg}$ of the ice take?

<details><summary>Show the reasoning</summary>

$Q = mL = 0.50\times3.34\times10^{5} = 1.67\times10^{5}\ \text{J}$. At $500\ \text{J/s}$: $t = 1.67\times10^{5}/500 = 334\ \text{s}$, about $5$ minutes $34$ seconds. Note the thermometer stays glued at $0^\circ\text{C}$ the whole time — the power is fine, the temperature simply refuses to respond until the slush is gone.
</details>

**C.** In winter, water piped outdoors can burst its tap. Why does freezing split the pipe rather than the water simply contracting like most things that cool?

<details><summary>Show the reasoning</summary>

Water is one of the rare liquids that *expands* on freezing: the open hydrogen-bonded ice lattice needs roughly $9\%$ more volume than the liquid it came from. In a sealed, rigid pipe that expansion has nowhere to go, so ordinary $Q=mL$ mechanics turn into pressure — and the pipe, not the phase change, yields. The same $9\%$ density gap is why ice floats and lakes freeze top-down (previous module).
</details>

## Remember

- Between phases the temperature stalls and the energy goes into structure: $Q = mL$, absorbed on the forward change, released exactly on the reverse.
- For water, $L_f = 3.34\times10^{5}\ \text{J/kg}$ and $L_v = 2.26\times10^{6}\ \text{J/kg}$ — vaporisation costs about seven times fusion.
- Heating curves: risers slope as $1/(mc)$, treads sit at the change-of-state temperatures.
- External pressure fixes the boiling point (cook at $2$ atm, boil near $120^\circ\text{C}$); pressure lowers the melting of ice only marginally ($\approx 0.0075\ \text{K/atm}$), with friction and conduction sharing the credit for slick ice and regelation.
- Sublimation (naphthalene, dry ice) and the triple point complete the phase map; dry ice sublimes because at $1$ atm liquid $\text{CO}_2$ cannot exist.

So heat can change temperature *and* it can change arrangement. The next question is the rate question: given a hot object and a cold one touching, how fast does that energy actually flow? That is the business of conduction, and it begins with a simple statistic — metals cheat, because their free electrons carry heat like a courier service.
