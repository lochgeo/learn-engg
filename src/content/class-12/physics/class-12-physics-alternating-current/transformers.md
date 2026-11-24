## From the generator to the socket

A power station may generate at about $11\ \text{kV}$, send energy across the country at several hundred kilovolts, and deliver it to a home at $230\ \text{V}$. No rotating machine performs the final step. The voltage is changed by a **transformer**: two coils sharing a magnetic core, with no electrical connection between them.

The transformer is one of the reasons AC won the early battle over DC for power distribution. It works only because the primary current is alternating, so the magnetic flux in the core keeps changing and keeps inducing an emf in the secondary. A steady direct current would produce a steady flux, no induced secondary emf, and no transformation.

## 1. Construction and principle

A transformer has two coils wound on a common **laminated soft-iron core**. The coil connected to the supply is the **primary**; the coil connected to the load is the **secondary**. The core provides a low-reluctance path so that most of the magnetic flux produced by the primary also links the secondary.

The sequence is:

1. An alternating current in the primary produces an alternating magnetic flux in the core.
2. The same flux threads both coils, so the flux linkage of each changes with time.
3. Faraday’s law induces an emf in each coil.

The coils are electrically isolated; energy reaches the secondary through the magnetic field, not through a wire connection. An **ideal transformer** assumes no flux leakage, negligible winding resistance, no core losses, and perfect coupling.

## 2. The voltage ratio

Let the core flux at an instant be $\Phi$. The emf induced in a coil of $N$ turns is

$$
\varepsilon=-N\frac{d\Phi}{dt}.
$$

If the same flux links every turn of both coils, the magnitudes are

$$
V_p=N_p\left|\frac{d\Phi}{dt}\right|,
\qquad
V_s=N_s\left|\frac{d\Phi}{dt}\right|.
$$

Dividing,

$$
\frac{V_s}{V_p}=\frac{N_s}{N_p}=K,
$$

where $K$ is the **turns ratio**. The result is usually written for rms values, since both sides are sinusoidal.

- If $N_s>N_p$, then $V_s>V_p$: a **step-up** transformer.
- If $N_s<N_p$, then $V_s<V_p$: a **step-down** transformer.

The voltage per turn is the same on both sides. That is the whole idea: the core forces both coils to share the same flux change.

## 3. Current ratio and power

An ideal transformer has no losses, so the power delivered to the primary equals the power taken from the secondary:

$$
V_pI_p=V_sI_s,
$$

where the currents are rms and the load is resistive so that the power factor is the same on both sides. Combining this with the voltage ratio gives

$$
\frac{I_s}{I_p}=\frac{V_p}{V_s}=\frac{N_p}{N_s}.
$$

The current ratio is the inverse of the voltage ratio. A step-up transformer raises the voltage by a factor $K$ and lowers the current by the same factor. It does **not** increase power; if it could, it would be a perpetual-motion machine.

For a reactive load, the transformer still conserves apparent power $S=VI$, and the power factor is fixed by the load, not by the transformer. The winding currents follow the turns ratio, and the real power is $S\cos\phi$.

<learning-block type="concept" title="Why the core is laminated">

The changing flux also induces emfs within the iron core itself, driving circulating **eddy currents** that heat the core. Splitting the core into thin insulated sheets, called laminations, interrupts these large loops and reduces the loss. A soft-iron core is chosen because it is easily magnetised and demagnetised, which keeps **hysteresis** loss small. Neither trick is needed in an ideal model, but both matter in a real transformer.

</learning-block>

## 4. Real losses and efficiency

A practical transformer loses energy in four main ways:

- **Copper loss:** $I^2R$ heating in the primary and secondary windings.
- **Eddy-current loss:** circulating currents in the core, reduced by lamination.
- **Hysteresis loss:** energy spent reversing the core’s magnetisation each cycle.
- **Flux leakage:** some primary flux fails to link the secondary, so the simple turns ratio is slightly inaccurate.

Efficiency is

$$
\eta=\frac{P_{\text{out}}}{P_{\text{in}}}
=\frac{V_sI_s\cos\phi_s}{V_pI_p\cos\phi_p}.
$$

A good large transformer can exceed $95\%$ efficiency, which is why transformers are not the main loss in a power grid; the transmission cables usually are.

A transformer cannot be used on steady DC. With constant current the flux is constant, $d\Phi/dt=0$, and the secondary emf is zero. The primary then looks like a low-resistance coil and may overheat.

## 5. Worked example: a small step-down transformer

A transformer has $N_p=2200$ turns and $N_s=110$ turns. The primary is connected to a $220\ \text{V}$ rms supply, and the secondary feeds a lamp that draws $10\ \text{A}$ rms. Treat the transformer as ideal and find the secondary voltage, the power delivered to the lamp, and the primary current.

The turns ratio is

$$
K=\frac{N_s}{N_p}=\frac{110}{2200}=\frac{1}{20}.
$$

Thus

$$
V_s=KV_p=\frac{220}{20}=11\ \text{V}.
$$

The secondary power is

$$
P_s=V_sI_s=(11)(10)=110\ \text{W}.
$$

For an ideal transformer $P_p=P_s$, so

$$
I_p=\frac{P_p}{V_p}=\frac{110}{220}=0.50\ \text{A}.
$$

**Sanity check.** The voltage steps down by a factor of $20$, and the current steps up by the same factor: $I_s/I_p=10/0.50=20$. The product $VI$ is $110\ \text{W}$ on both sides. If the real primary current were $0.56\ \text{A}$, the input power would be $123\ \text{W}$ and the efficiency about $89\%$, a reasonable value for a small transformer.

## 6. Why high voltage for transmission

Suppose a power station delivers power $P$ to a town through a cable of resistance $R_{\text{line}}$. At transmission voltage $V$, the line current is approximately

$$
I=\frac{P}{V},
$$

so the power wasted in the cable is

$$
P_{\text{loss}}=I^2R_{\text{line}}
=\frac{P^2R_{\text{line}}}{V^2}.
$$

For a fixed power and cable, the loss falls as the **square** of the transmission voltage. Raising the voltage by a factor of ten cuts the cable loss by a factor of one hundred. This is why power is stepped up at the generating station, carried at high voltage, and stepped down in stages near consumers. The trade-off is that high-voltage lines need better insulation and greater safety clearances.

<learning-block type="mistake" title="Transformer pitfalls">

**Inverting the voltage ratio.** The side with more turns has the higher voltage: $V_s/V_p=N_s/N_p$. Writing $N_p/N_s$ here predicts a step-down transformer where there is a step-up.

**Using the voltage ratio for current in the same direction.** The current ratio is $I_s/I_p=N_p/N_s$, the inverse. Using $N_s/N_p$ would make a step-up transformer appear to deliver more power than it receives.

**Thinking a step-up transformer increases power.** It increases voltage and decreases current; $VI$ is unchanged in the ideal case.

**Connecting a transformer to DC.** A steady current gives a steady flux and no secondary emf. The primary may draw a damaging current because its only opposition is the small winding resistance.

**Confusing primary and secondary.** Identify which coil is connected to the source before applying any ratio. The labels are about connection, not about which coil has more turns.

</learning-block>

## Try it yourself

**A.** A transformer has $500$ primary turns and $50$ secondary turns. The primary is connected to $240\ \text{V}$ rms and the secondary current is $2.0\ \text{A}$. Find the secondary voltage, primary current and power.

<details><summary>Show the reasoning</summary>

$$
V_s=V_p\frac{N_s}{N_p}=240\frac{50}{500}=24\ \text{V}.
$$

The secondary power is $P_s=(24)(2.0)=48\ \text{W}$, so for an ideal transformer

$$
I_p=\frac{P_s}{V_p}=\frac{48}{240}=0.20\ \text{A}.
$$

The current steps up by a factor of $10$, matching the voltage step-down.

</details>

**B.** A step-up transformer has $200$ primary turns and $2000$ secondary turns. The primary is supplied at $230\ \text{V}$ rms and carries $5.0\ \text{A}$ rms. Find the secondary voltage and current.

<details><summary>Show the reasoning</summary>

$$
V_s=230\frac{2000}{200}=2300\ \text{V}.
$$

The input power is $P=(230)(5.0)=1150\ \text{W}$, so

$$
I_s=\frac{1150}{2300}=0.50\ \text{A}.
$$

The voltage rises by a factor of $10$; the current falls by a factor of $10$.

</details>

**C.** A $50\ \text{MW}$ supply is transmitted through a line of resistance $5.0\ \Omega$. Compare the line loss at $25\ \text{kV}$ and at $250\ \text{kV}$.

<details><summary>Show the reasoning</summary>

At $25\ \text{kV}$,

$$
I=\frac{50\times10^6}{25\times10^3}=2000\ \text{A},
\qquad
P_{\text{loss}}=I^2R=(2000)^2(5.0)=2.0\times10^7\ \text{W}=20\ \text{MW}.
$$

At $250\ \text{kV}$,

$$
I=\frac{50\times10^6}{250\times10^3}=200\ \text{A},
\qquad
P_{\text{loss}}=(200)^2(5.0)=2.0\times10^5\ \text{W}=0.20\ \text{MW}.
$$

The tenfold voltage increase reduces the loss by a factor of $100$, from $40\%$ of the transmitted power to $0.4\%$.

</details>

## Remember

- A transformer works by mutual induction between two coils on a common core; it requires alternating current.
- For an ideal transformer, $V_s/V_p=N_s/N_p$ and $I_s/I_p=N_p/N_s$.
- A step-up transformer raises voltage and lowers current; the power is unchanged.
- Real losses are copper loss, eddy currents, hysteresis and flux leakage; laminations and soft iron reduce the core losses.
- High-voltage transmission reduces $I^2R$ line loss because the loss scales as $1/V^2$.

The concept lessons are complete. The review module now combines phasors, reactance, resonance, power factor and transformers into one problem-solving routine, and the timed set tests the same ideas under exam conditions.
