## The best possible engine

Take any two reservoirs — a flame at some temperature, the atmosphere at another — and let engineers build engines between them for a century. Who wins? In 1824 Sadi Carnot answered before thermodynamics even had its laws: there is a universal ceiling, set by the two temperatures alone, and one ideal cycle touches it. That ceiling, $\eta=1-T_c/T_h$, still disciplines every engine design on Earth.

## 1. The four reversible strokes

The Carnot cycle moves $n$ moles of ideal gas through four quasi-static, fully reversible stages between a hot reservoir at $T_h$ and a cold reservoir at $T_c$:

| Stroke | What happens | Heat | Work |
| --- | --- | --- | --- |
| 1. Isothermal expansion at $T_h$ | contact with hot reservoir, $V$ grows | $+Q_1$ from hot reservoir | gas does work |
| 2. Adiabatic expansion | insulation swapped in, $T$ falls $T_h\to T_c$ | 0 | gas does work |
| 3. Isothermal compression at $T_c$ | contact with cold reservoir, $V$ shrinks | $-Q_2$ to cold reservoir | work done on gas |
| 4. Adiabatic compression | insulation again, $T$ rises $T_c\to T_h$ | 0 | work done on gas |

The loop closes on the $P$–$V$ diagram as a rounded, clockwise cycle. Every stroke is reversible — no finite-speed gradients, no friction, no heat short-circuiting across a temperature gap. That is precisely what makes the result a *ceiling*: real engines shed efficiency to all of these.

## 2. Deriving $\eta=1-T_c/T_h$

Along stroke 1 the ideal gas absorbs (first law, isothermal ideal gas: $\Delta U=0$, $Q=W$)

$$
Q_1=nRT_h\ln\frac{V_B}{V_A}.
$$

Along stroke 3 it rejects

$$
Q_2=nRT_c\ln\frac{V_C}{V_D}.
$$

Now the two adiabatic links do quiet but decisive work. From $TV^{\gamma-1}=\text{constant}$ applied along strokes 2 and 4:

$$
T_hV_B^{\gamma-1}=T_cV_C^{\gamma-1},\qquad T_cV_D^{\gamma-1}=T_hV_A^{\gamma-1}.
$$

Divide the first by the second: the temperatures cancel in pairs, leaving $V_B/V_A=V_C/V_D$. The two logarithms are the same, so

$$
\frac{Q_2}{Q_1}=\frac{T_c}{T_h}.
$$

Substituting into $\eta=1-Q_2/Q_1$:

$$
\boxed{\eta_{Carnot}=1-\frac{T_c}{T_h}}
$$

— kelvin throughout, working substance irrelevant. Reaching $\eta=1$ would require $T_c=0$, an absolute zero no finite engine can access; reaching it with $T_h\to\infty$ is equally barred in practice. Note the *ratio*, not the difference, controls the ceiling: a modest hot reservoir at a low absolute temperature beats a blazing furnace sitting over a near-boiling sink.

## 3. The ceiling claim: why no engine beats Carnot

Combine the Carnot cycle with the second-law statements and a powerful corollary follows.

- **No engine between two given reservoirs can exceed $\eta_{Carnot}$.** Suppose one did. Couple it to a reversed Carnot engine of the same reservoirs and rig the sizes so the net work is zero: heat would then flow cold-to-hot with no other effect, flouting the Clausius statement. Contradiction — hence no such engine.
- **All reversible engines between the same reservoirs have equal efficiency** — otherwise the better one, driving the reversed worse one, would again flout Clausius.
- **Real engines lose to the ceiling on purpose:** finite speeds, friction, heat leaks and exhaust irreversibility each shave efficiency. A car engine's roughly $25$–$30\ \%$ is modest, but the ceiling between combustion temperatures and ambient is itself perhaps $1-\frac{300}{2000}\approx85\ \%$; the shortfall is engineering reality, not arithmetic error.

<learning-block type="example" title="Worked example — heat and work per cycle">

A Carnot engine runs between $T_h=400\ \text{K}$ and $T_c=300\ \text{K}$, absorbing $1000\ \text{J}$ per cycle.

$$
\eta=1-\frac{300}{400}=0.25,\qquad W=250\ \text{J},\qquad Q_2=750\ \text{J}.
$$

**Checks.** $W+Q_2=1000\ \text{J}$ — the ledger closes. $Q_2/Q_1=750/1000=0.75=T_c/T_h$ — the reversible signature holds. Running the same loop anticlockwise as a refrigerator between these reservoirs: $\beta=\frac{T_c}{T_h-T_c}=\frac{300}{100}=3$, so extracting $900\ \text{J}$ from the cold side would need $300\ \text{J}$ of work. All magnitudes are ordinary; nothing approaches impossible limits.

</learning-block>

## 4. Reversibility, kelvin and a first look at entropy

Reflected in $\frac{Q_2}{Q_1}=\frac{T_c}{T_h}$ is something deeper: a reversible engine carries equal $\frac{Q}{T}$ in and out per cycle. That invariant invites naming — define the **entropy** change of a reservoir as $\Delta S=Q_{rev}/T$ (the unit is $\text{J}\ \text{K}^{-1}$), and the Carnot cycle shows reversible loops conserve total entropy while every real cycle *creates* it. Entropy gives the second law its most compact form, met properly in later work; the Carnot cycle is where the quantity is first glimpsed.

Two further legacies: the kelvin scale itself gained physical grounding here — absolute temperature ratios were pinned by reversible-engine ratios rather than by any one thermometer fluid. And because $\eta_{Carnot}$ is substance-independent, the ceiling applies to photons, electrons and gases alike.

<learning-block type="mistake" title="Kelvin or Celsius?">

The efficiency $1-T_c/T_h$ collapses immediately if temperatures enter in Celsius: $1-\frac{27}{127}$ (using $27\ ^\circ\text{C}$ ambient and $100\ ^\circ\text{C}$ steam) looks like $79\ \%$, whereas converting properly, $1-\frac{300}{373}=20\ \%$. Convert to kelvin first, every time. A second trap: quoting "Carnot" for an *irreversible* engine that merely shares the same reservoirs — it inherits the ceiling, not the attainable value, and always falls short of it.

</learning-block>

## Try it yourself

**A.** A Carnot engine between $500\ \text{K}$ and $300\ \text{K}$ absorbs $800\ \text{J}$ from the hot reservoir per cycle. Find $\eta$, $W$ and $Q_2$.

<details><summary>Show the reasoning</summary>

$\eta=1-300/500=0.40$. Then $W=0.40\times800=320\ \text{J}$ and $Q_2=800-320=480\ \text{J}$. Checks: $320+480=800\ \text{J}$ closes the ledger; $Q_2/Q_1=480/800=0.60=T_c/T_h$, the reversible signature.
</details>

**B.** A Carnot engine's efficiency is $60\ \%$ with its cold reservoir at $300\ \text{K}$. Find the hot reservoir temperature, and the efficiency the same reservoirs would allow a real (irreversible) engine at best.

<details><summary>Show the reasoning</summary>

$0.60=1-\frac{300}{T_h}$ gives $\frac{300}{T_h}=0.40$ and $T_h=750\ \text{K}$. The same two reservoirs cap any real engine strictly below $60\ \%$: only the reversible cycle touches the ceiling, so a real engine with these temperatures delivers at best something under $0.60$, however clever its design. The ceiling is the *best possible*, not the *typical*.
</details>

**C.** The reversed Carnot engine of the worked example acts as a refrigerator between $300\ \text{K}$ (cold side) and $400\ \text{K}$ (room). Compute its COP and the work needed to extract $750\ \text{J}$ from the cold side.

<details><summary>Show the reasoning</summary>

$\beta=\frac{T_c}{T_h-T_c}=\frac{300}{400-300}=3$. Then $W=\frac{Q_c}{\beta}=\frac{750}{3}=250\ \text{J}$, and the heat delivered to the room is $750+250=1000\ \text{J}$ — exactly the figures of the engine running forward, as reversibility demands. The symmetry is itself the check: a reversible cycle replayed backwards transfers precisely reversed amounts.
</details>

## Remember

- The Carnot cycle is two isotherms (at $T_h$, $T_c$) closed by two adiabats — every stroke quasistatic and reversible.
- $Q_2/Q_1=T_c/T_h$ falls out of the adiabatic links (equal volume ratios), giving $\eta=1-T_c/T_h$.
- Temperatures in kelvin, always; the efficiency is a ratio, not a difference.
- The ceiling binds every engine between the same reservoirs, reversible or not; only reversible ones touch it.
- Reversible cycles conserve the sum of $Q/T$ entering and leaving — the first glimpse of entropy.

## Where next

Seven concept lessons done: bookkeeping, the first law, two heat capacities, four processes, cycles, the second law and the Carnot ceiling. The next module mixes all of them in a practice-and-mastery check, then the JEE-paper-style timed set closes the chapter.
