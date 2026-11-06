## Warm without touching

Stand a safe distance from a campfire and something still reaches you: no rod connects you to the flames, yet one side of your face glows and the other stays cool. Nature is running two more couriers besides conduction. **Convection** hauls heat in bulk from place to place inside moving fluids. **Radiation** travels without any medium at all — as electromagnetic waves, the same family as light, which is why the fire warms you whether it crosses a metre of air or a metre of vacuum.

## 1. Convection: heat on the move

Heat a pan of water from below. The bottom layer expands, becomes less dense than what is above it, and rises; cooler surface water sinks to take its place. A circulating current is established — visible in shadowed light as shimmering "streamers" — and the loop is called a **convection current**. This is bulk transport: energy riding on matter that moves, which is why convection exists only in fluids.

- **Natural convection** runs on buoyancy alone: density differences do all the driving. Sea breezes and land breezes are planetary-scale versions — daytime land heats faster than the sea, the air over it rises and cooler marine air slides in.
- **Forced convection** appoints an external pump, blower or stirrer: fans, radiator coolant loops, blood circulation, ventilation ducts. Forcing gives far larger heat-carrying rates than buoyancy can manage with the same temperature difference.

Anything that prevents bulk movement kills convection: stratification (warm layer floating stably above cooler), a sealed horizontal gap, or — for a thermos — simply a vacuum.

## 2. Thermal radiation: light that carries heat

Every body above absolute zero emits electromagnetic radiation that carries energy away. To describe it, three definitions settle the vocabulary.

| Term | Definition | Symbol/units |
| --- | --- | --- |
| Absorptive power | fraction of incident radiation a body absorbs | $a$, dimensionless ($0$–$1$) |
| Emissive power | energy radiated per unit area per unit time | $E$, $\text{W/m}^2$ |
| Perfectly black body | absorbs every incident wavelength completely, $a=1$ | best possible emitter too |

No surface is perfectly black, so real bodies need a factor: the **emissivity** $e$ (or relative emittance), the ratio of a body's emissive power to a blackbody's *at the same temperature*. For a body of surface area $A$ at absolute temperature $T$:

$$P = e\,\sigma A\,T^{4}, \qquad \sigma = 5.67\times10^{-8}\ \text{W}\,\text{m}^{-2}\,\text{K}^{-4}.$$

Experiments show the emission grows as the **fourth power** of the kelvin temperature — a doubling of temperature multiplies the rays by sixteen.

<learning-block type="mistake" title="Celsius inside a fourth-power law">

The single most frequent radiation error is inserting a Celsius temperature into $T^4$. The law measures from absolute zero. A $20^\circ\text{C}$ room is $293\ \text{K}$, and $(293)^4 \approx 7.4\times10^{9}$ — feeding $20$ into the formula gives a nonsense rate thousands of times too small. Convert first, always: $P$ tracks $T^4$ in kelvin, with $\Delta T \approx 20\ \text{K}$ meaning a true multiplicative rise of $(293+20)^4/(293)^4 \approx 1.29$, i.e. about $29\%$ more per unit area.

</learning-block>

## 3. What radiates out also streams in

A body in any surroundings receives them (at the walls' temperature $T_0$) as well as emitting its own. The **net** energy loss is

$$P_{net} = e\,\sigma A\,(T^{4} - T_{0}^{4}),$$

zero exactly at thermal equilibrium — the body does not stop emitting at equilibrium, it absorbs at precisely the rate it emits. Both tides flow; only the difference shows on a meter.

**Worked example.** A blackened copper sphere ($e = 1$) of radius $5.0\ \text{cm}$, heated to $600\ \text{K}$, hangs in an enclosure whose walls are at $300\ \text{K}$. Find the net radiative loss.

Area: $A = 4\pi r^2 = 4\pi (0.05)^2 = 3.14\times10^{-2}\ \text{m}^2$.

$$P_{net} = (5.67\times10^{-8})(3.14\times10^{-2})\,(600^{4} - 300^{4}).$$

$$600^{4} = 1.296\times10^{11}, \qquad 300^{4} = 8.1\times10^{9}, \qquad \text{difference} = 1.215\times10^{11}.$$

$$P_{net} = (1.78\times10^{-9})(1.215\times10^{11}) \approx 216\ \text{W}.$$

Sanity checks: fourth powers make $600\ \text{K}$/$300\ \text{K}$ ratio into a factor $(2^4 - 1) = 15$, and the small sphere catches the consequence. Changing the coating to a bright reflector ($e \to 0.1$) drops the loss tenfold — the actual engineering behind thermos flasks, below.

## 4. Kirchhoff's law: good absorbers are good emitters

At any given temperature and wavelength, thermal equilibrium forces a single statement on every body: the ratio (emissive power)/(absorptive power) is the **same constant for every body**, that constant being the emissive power of a perfect blackbody at that temperature. In symbols for a body $i$:

$$\frac{E_i}{a_i} = E_{blackbody}.$$

Corollaries that keep examiners in business:

- A polished mirror ($a$ near $0$) must be a *poor* emitter — that is why the inner walls of a tea flask are silvered: they neither absorb nor emit much.
- A matte black car bonnet in the sun absorbs nearly everything; the identical surface, when hot, is also the best radiator. Kirchhoff's law is a two-way street.
- A small hole punched in a large hollow cavity behaves like a perfect black body: what enters is recycled internally until absorbed, and what emerges is characteristic cavity emission — the laboratory blackbody.
- If a body fails to absorb some wavelength, it fails likewise to emit it; sodium vapour's famous dark lines in the solar spectrum are exactly cooler-outside vapour absorbing and emitting at the wavelengths it *can* handle.

## 5. The thermos flask: three couriers, three counters

A vacuum between double walls blocks conduction (previous module) and convection (no fluid); silvering the walls makes them poor absorbers — and, by Kirchhoff, poor emitters — throttling radiation. The screw cap closes the last leak. One appliance, all three transfer mechanisms each given its own counter-officer; no wonder it is the set-piece question for this part of the chapter.

<learning-block type="check" title="Who wins: conduction, convection or radiation?">

Rank the three by experiment, not intuition. Conduction is throttled by low $k$ and thickness. Convection is throttled by stillness — and boosted enormously by stirring or fans. Radiation is throttled by emissivity and reflectivity, but is the *only* one needing no material at all: it crosses vacuum, and (as light) it crosses glass and air. Radiation dominates when temperatures are high or distances span a vacuum; convection dominates in stirred or windy fluids; conduction dominates in solid contact across short paths.

</learning-block>

## Try it yourself

**A.** A person's skin (area $1.7\ \text{m}^2$, emissivity $0.97$) sits in a room at $22^\circ\text{C}$ with skin surface at $33^\circ\text{C}$. Find the net radiative loss.

<details><summary>Show the reasoning</summary>

Convert first: $T = 306\ \text{K}$, $T_0 = 295\ \text{K}$. $(306)^4 = 8.77\times10^{9}$ and $(295)^4 = 7.57\times10^{9}$, so the difference is $1.20\times10^{9}$. Then $P_{net} = (0.97)(5.67\times10^{-8})(1.7)(1.20\times10^{9}) \approx 112\ \text{W}$. Sanity: roughly a bright old-style filament lamp's worth of net loss, continuously — the human body balances it with metabolism and clothing.
</details>

**B.** A thermos keeps tea hot for hours, yet a *silvered* inner wall still absorbs *some* radiation, and a poorly polished one more so. Explain with the flask's design features which mechanism each feature has killed.

<details><summary>Show the reasoning</summary>

Double glass walls with an evacuated gap: kills conduction (nothing solid to carry it) and convection (no fluid to circulate). Silvering: makes each wall a poor **emitter** as well as a poor absorber, so the little radiation that crosses is not easily replaced. Tight stopper: caps the remaining convection at the neck. Nothing is fully stopped — hours, not forever — each leak's flow rate is just cut by orders of magnitude.
</details>

**C.** Why does a hot radiator warm a room far more quickly with a small circulation fan than relying on the natural flow?

<details><summary>Show the reasoning</summary>

A fan forces the *ambient air itself* across the hot fins: forced convection replaces the feeble buoyancy-driven currents, dragging warmed air away and feeding fresh cool air over the surface. Radiative output is unchanged (surface, $e$, $T$ untouched); the boost is entirely in the convective term.
</details>

## Remember

- Convection: energy transported by moving fluid. Natural = buoyancy-driven; forced = pump/fan-driven; blocked by stratification, seals and vacuum.
- Thermal radiation is electromagnetic and needs no medium; everything above $0\ \text{K}$ emits it, all the time.
- $P = e\sigma A T^{4}$ in kelvin, always; net exchange against surroundings: $P_{net} = e\sigma A(T^{4}-T_{0}^{4})$; both tide flow even at equilibrium, equally.
- Absorptive power and emissivity go hand in hand: Kirchhoff's law $E/a = E_{blackbody}$ says good absorbers are good emitters (mirror-shiny in both directions). A small hole in a cavity is the laboratory stand-in for a perfect blackbody — geometry, not shade of paint.
- Thermos flask = vacuum (no conduction, no convection) + silvering (no radiation) + stopper (no neck convection).

Radiated power has a strong fourth-power character, emission has a characteristic colour, and small temperature differences obey a gentler, linear rule. Those three regularities — **Stefan–Boltzmann, Wien, Newton's cooling** — each get their working-through in the next, final concept module of this chapter.
