## The law that says which way

Nothing in the first law stops a cold cup of coffee from stealing heat from the room, or an engine from hurling every absorbed joule into a flywheel. Both simply never happen. The **second law of thermodynamics** states which energy flows occur of their own accord and which demand compensation. It is what makes "heat engine" a business with unavoidable costs, and it is the reason the power-station gap from our opening lesson can never be closed.

## 1. The Kelvin–Planck statement

*No cyclic device can take heat from a single reservoir and convert all of it into work.* Every engine moving heat from a hot body must discard some heat to a colder one. An engine that flouted this — the mythical "perpetual motion machine of the second kind" — would violate no energy conservation, only this law. That is the point: the second law is independent bookkeeping, not a corollary of the first.

Note the word **cyclic**. A non-cyclic change can turn heat wholly into work: an ideal gas expanding isothermally in contact with a reservoir converts $Q=W$ exactly. But that gas has not returned to its initial state — eventually it must be recompressed, and paying for that recompression forces a warmer, colder reservoir pair and waste heat. Cycles are where the second law bites.

## 2. The Clausius statement

*No process is possible whose sole result is heat flowing from a colder body to a hotter one.* Left alone, heat runs downhill — temperature difference acts like voltage, and heat flows from hot to cold. Pumping heat back uphill is possible (your refrigerator does it nightly) but only at the price of work input, so the total result includes that price and the statement holds.

The two statements are logically **equivalent**: violate one and you can build a device that violates the other. Spoof a perfect engine and drive a refrigerator with its output — heat flows cold-to-hot with no net work, flouting Clausius. Spoof a perfect refrigerator and couple it to an ordinary engine — the pair converts reservoir heat to work wholly, flouting Kelvin–Planck. One law, two doors.

## 3. Heat engines and efficiency

An engine between a hot reservoir at $T_h$ and a cold reservoir at $T_c$ absorbs $Q_h$ per cycle, delivers work $W$ and rejects $Q_c$:

$$
W=Q_h-Q_c \qquad\text{(first law, since }\Delta U_{cycle}=0),
$$

$$
\eta=\frac{W}{Q_h}=\frac{Q_h-Q_c}{Q_h}=1-\frac{Q_c}{Q_h}.
$$

The second law demands $Q_c>0$ for any cyclic engine between two reservoirs, so $\eta<1$ — the gap never closes. The next lesson sharpens this to a maximum value depending only on $T_c/T_h$.

<learning-block type="example" title="Worked example — an engine between 500 K and 300 K">

A reversible engine absorbs $1200\ \text{J}$ per cycle from the hot reservoir.

For a reversible (Carnot) engine between these reservoirs, the ceiling comes from the temperature ratio: $\eta=1-\frac{300}{500}=0.40$. So

$$
W=0.40\times1200=480\ \text{J},\qquad Q_c=1200-480=720\ \text{J}.
$$

**Checks.** $W+Q_c=480+720=1200\ \text{J}$, balancing the ledger exactly; the ratio $\frac{Q_c}{Q_h}=\frac{720}{1200}=0.60=\frac{T_c}{T_h}$, which only a reversible engine attains. Any real engine between these temperatures must reject even more than $720\ \text{J}$, and therefore do less than $480\ \text{J}$ of work per cycle. Every number stays in a physically sensible range.

</learning-block>

## 4. Refrigerators and the coefficient of performance

Run the same three-body accounting backwards and the device is a refrigerator: work $W$ is forced *in*, heat $Q_c$ is extracted from the cold interior, and $Q_h=Q_c+W$ is dumped into the room. Because the goal is heat moved per unit work, the figure of merit is not efficiency but the **coefficient of performance**:

$$
\beta=\frac{Q_c}{W}.
$$

For the ideal (reversible) refrigerator operating between $T_c$ and $T_h$ (kelvin throughout),

$$
\beta_{ideal}=\frac{T_c}{T_h-T_c}.
$$

<learning-block type="example" title="Worked example — an ideal refrigerator">

A food compartment at $270\ \text{K}$ sits in a kitchen at $300\ \text{K}$.

$$
\beta_{ideal}=\frac{270}{300-270}=\frac{270}{30}=9.
$$

To remove $450\ \text{J}$ from the compartment therefore costs $W=450/9=50\ \text{J}$ of work. The heat dumped into the room is $Q_h=450+50=500\ \text{J}$ — more than was extracted, which is why the back of a fridge feels hot even though the front keeps milk cold.

**Check.** Energy is conserved: $Q_c+W=450+50=500=Q_h$. And $\beta=9$ is perfectly legal: a coefficient of performance above unity is **not** a violation of anything, because its denominator is work, not heat. Real refrigerators fall well below the reversible figure, the same way real engines fall below Carnot.

</learning-block>

The heat-pump variant shifts the accounting to the hot side: $\beta_{HP}=Q_h/W=\beta_{fridge}+1$, since $Q_h=Q_c+W$. A heat pump delivering five joules of warmth per joule of electricity is doing nothing mysterious — it is moving heat that already existed outdoors.

<learning-block type="mistake" title="Efficiency and COP are shaped differently">

Efficiency is *output/input* with both in work-heat terms and strictly below 1; COP is *goal/price* — heat moved per joule of work — and may exceed 1 without breaking any law. Two classic slips: computing engine efficiency as $W/Q_c$ instead of $W/Q_h$ (the denominator is the heat paid in from the hot reservoir), and "proving" a COP of 9 impossible because it exceeds 100%. Also remember the Carnot temperature ratio needs **kelvin always**: $1-\frac{27}{30}$ using Celsius is a different (and meaningless) number from $1-\frac{300}{300}$.

</learning-block>

## Try it yourself

**A.** An engine takes in $1000\ \text{J}$ per cycle and delivers $250\ \text{J}$ of work. Find the rejected heat and the efficiency, and compare with the reversible ceiling if the reservoirs are at $600\ \text{K}$ and $300\ \text{K}$.

<details><summary>Show the reasoning</summary>

$W=Q_h-Q_c$ gives $Q_c=1000-250=750\ \text{J}$ per cycle. $\eta=250/1000=0.25=25\ \%$. Ceiling: $\eta_{Carnot}=1-300/600=0.50=50\ \%$. The engine sits below its ceiling, so the claim is physically possible; the waste, $750\ \text{J}$ per cycle, still exceeds the work delivered.
</details>

**B.** An ideal refrigerator moves heat from a $280\ \text{K}$ interior to a $320\ \text{K}$ room. What work removes $350\ \text{J}$ from the interior?

<details><summary>Show the reasoning</summary>

$\beta_{ideal}=T_c/(T_h-T_c)=280/40=7$. Then $W=Q_c/\beta=350/7=50\ \text{J}$. Check: heat dumped to the room is $350+50=400\ \text{J}$, and the ledger $Q_c+W=Q_h$ holds. The price, $50\ \text{J}$ of work per $350\ \text{J}$ of heat moved, reflects the small $40\ \text{K}$ lift — a $\beta$ falls rapidly as the temperature gap widens.
</details>

**C.** An inventor proposes a cyclic machine that draws $800\ \text{J}$ of heat per cycle from the ambient air and outputs $800\ \text{J}$ of work, using the atmosphere as its only reservoir. Which statement of the second law does this flout, and why is the first law silent about it?

<details><summary>Show the reasoning</summary>

It flouts the **Kelvin–Planck** statement: a cyclic device converting heat from a single reservoir wholly into work. The first law is entirely comfortable — energy in equals energy out, $800=800$, no conservation is broken. The impossibility is bookkeeping of a different kind: work, unlike heat, can be stored and metered, and charge-free conversion at zero price would let the atmosphere run the world for nothing — every day has shown the opposite for two centuries.
</details>

## Remember

- Second law, Kelvin–Planck: a cyclic engine cannot convert all heat from one reservoir into work.
- Second law, Clausius: heat cannot flow cold-to-hot as its *only* result; pumping needs work.
- Engine efficiency $\eta=W/Q_h=1-Q_c/Q_h<1$ for any cyclic engine between two reservoirs.
- COP $\beta=Q_c/W$, ideal ceiling $T_c/(T_h-T_c)$ in kelvin; values above 1 are legitimate.
- Heat pumps and refrigerators are the same hardware read from opposite sides: $\beta_{HP}=\beta_{fridge}+1$.

## Where next

How much *better* can an engine ever be? The next lesson builds the Carnot cycle — four reversible strokes between the two reservoirs — and shows its efficiency $1-T_c/T_h$ is a ceiling no engine, past or future, can exceed.
