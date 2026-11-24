## Two components that oppose change

Replace the resistor in the previous lesson with a coil, then with a capacitor, and keep the supply the same. The coil draws a current that grows as the frequency falls; the capacitor draws a current that grows as the frequency rises. Neither component has a fixed “resistance” in the ordinary sense. Each opposes a **change** in a stored quantity — current in the coil’s magnetic field, charge on the capacitor’s plates — and that opposition depends on how fast the supply pushes.

Both still obey an Ohm-like relation between peak voltage and peak current. The new feature is that voltage and current no longer peak together: they are a quarter-cycle apart.

## 1. The inductor: voltage leads the current

For an ideal inductor of inductance $L$, the voltage across it is fixed by how fast the current changes:

$$
v=L\frac{di}{dt}.
$$

Take $v=V_0\sin\omega t$. Then

$$
\frac{di}{dt}=\frac{V_0}{L}\sin\omega t,
$$

and integrating in the steady state gives

$$
i=-\frac{V_0}{\omega L}\cos\omega t
=\frac{V_0}{\omega L}\sin\left(\omega t-\frac{\pi}{2}\right).
$$

The current has the same frequency but lags the voltage by $\pi/2$ (a quarter-cycle). Its peak is

$$
I_0=\frac{V_0}{\omega L}.
$$

The quantity

$$
X_L=\omega L=2\pi fL
$$

is the **inductive reactance**, measured in ohms. The relation between rms values is

$$
V_{\text{rms}}=I_{\text{rms}}X_L.
$$

It looks like Ohm’s law, but $X_L$ is not a resistance. It depends on frequency and it does not turn electrical energy into heat.

The lag has a physical reading. When the current tries to rise, the changing magnetic flux induces a back emf that opposes the rise; when the current tries to fall, the induced emf tries to keep it going. The current is always playing catch-up with the driving voltage.

## 2. The capacitor: current leads the voltage

For a capacitor of capacitance $C$,

$$
i=\frac{dq}{dt}=C\frac{dv}{dt}.
$$

Take $v=V_0\sin\omega t$. Then

$$
i=\omega C V_0\cos\omega t
=\omega C V_0\sin\left(\omega t+\frac{\pi}{2}\right).
$$

The current leads the voltage by $\pi/2$, and its peak is

$$
I_0=\omega C V_0.
$$

The **capacitive reactance** is

$$
X_C=\frac{1}{\omega C}=\frac{1}{2\pi fC},
$$

with

$$
V_{\text{rms}}=I_{\text{rms}}X_C.
$$

Again the relation resembles Ohm’s law, but $X_C$ falls as frequency rises. A capacitor lets a rapidly changing signal through more easily because a rapidly changing voltage requires a large charging current.

| Element | Instantaneous relation | Phase of current | Reactance | Average power |
| --- | --- | --- | --- | --- |
| Resistor | $v=iR$ | in phase | $R$ | $I_{\text{rms}}^2R$ |
| Inductor | $v=L\,di/dt$ | lags voltage by $90^\circ$ | $X_L=\omega L$ | zero |
| Capacitor | $i=C\,dv/dt$ | leads voltage by $90^\circ$ | $X_C=1/(\omega C)$ | zero |

## 3. What happens at the extremes

The frequency dependence explains several everyday observations.

- **At direct current ($f=0$):** $X_L=0$, so an ideal inductor behaves like a plain wire; $X_C\to\infty$, so a capacitor blocks steady current once it is charged.
- **At very high frequency:** $X_L\to\infty$, so an inductor chokes the current; $X_C\to0$, so a capacitor behaves almost like a wire.
- **At an intermediate frequency:** both have finite reactance, and the relative size of $X_L$ and $X_C$ decides whether the circuit behaves inductively or capacitively.

A capacitor does not “block AC”. It blocks DC and opposes low frequencies more strongly than high ones. Likewise, an inductor does not “block current”; it opposes changes in current, and a steady current passes freely.

## 4. Where the energy goes

An inductor stores magnetic energy

$$
U_L=\frac12Li^2,
$$

and a capacitor stores electric energy

$$
U_C=\frac12Cv^2.
$$

During part of the cycle the source delivers energy to the component; during another part the component returns that energy to the source. For an ideal reactance the net transfer over a full cycle is zero, so the average power is zero:

$$
P_{\text{av}}=0\qquad\text{(pure inductance or pure capacitance)}.
$$

This does not mean nothing happens. A large current can circulate while the energy sloshes back and forth. The current is called **wattless** because it produces no net energy transfer. We return to this idea when we calculate power factor.

## 5. Worked example: two reactances at mains frequency

A $50\ \text{mH}$ inductor and a $20\ \mu\text{F}$ capacitor are each connected separately across a $230\ \text{V}$ rms, $50\ \text{Hz}$ supply. Find each reactance and the rms current drawn.

For the inductor,

$$
X_L=2\pi fL=2\pi(50)(50\times10^{-3})=15.7\ \Omega.
$$

Thus

$$
I_{\text{rms}}=\frac{230}{15.7}=14.6\ \text{A}.
$$

For the capacitor,

$$
X_C=\frac{1}{2\pi fC}
=\frac{1}{2\pi(50)(20\times10^{-6})}
=159\ \Omega,
$$

so

$$
I_{\text{rms}}=\frac{230}{159}=1.45\ \text{A}.
$$

**Sanity check.** At $50\ \text{Hz}$ the inductor has the smaller reactance and draws about ten times the current of the capacitor. Raise the frequency by a factor of ten and the two currents would reverse their roles: $X_L$ becomes $157\ \Omega$ and $X_C$ becomes $15.9\ \Omega$. The peak voltage is $325\ \text{V}$ in both cases, so the peak currents are $\sqrt2$ times the rms values.

<learning-block type="mistake" title="Reactance is not resistance">

**Using $f$ instead of $\omega$.** The formulas are $X_L=2\pi fL$ and $X_C=1/(2\pi fC)$. Dropping the $2\pi$ gives answers wrong by a factor of $6.28$.

**Reversing the lead and lag.** In an inductor the current lags the voltage; in a capacitor the current leads. A useful check is the phrase “in a capacitor, current leads”. If your phasor diagram puts the capacitor current behind the voltage, the diagram is wrong.

**Adding $X_L$ and $X_C$ as ordinary numbers.** They are $180^\circ$ apart in phase, so in a series circuit their effects partly cancel: the net reactance is $X_L-X_C$, not $X_L+X_C$. Treating them as two resistors in series overestimates the impedance.

**Expecting a pure reactance to get hot.** An ideal inductor or capacitor has zero average power. Real components have winding resistance or leakage, which is a separate effect.

</learning-block>

## Try it yourself

**A.** Find the inductive reactance of a $0.20\ \text{H}$ coil at $50\ \text{Hz}$ and at $5.0\ \text{kHz}$.

<details><summary>Show the reasoning</summary>

At $50\ \text{Hz}$,

$$
X_L=2\pi(50)(0.20)=62.8\ \Omega.
$$

At $5000\ \text{Hz}$,

$$
X_L=2\pi(5000)(0.20)=6.28\times10^3\ \Omega.
$$

The reactance rises in proportion to frequency, a factor of $100$ here.

</details>

**B.** Find the capacitive reactance of a $1.0\ \mu\text{F}$ capacitor at $50\ \text{Hz}$ and at $1.0\ \text{kHz}$.

<details><summary>Show the reasoning</summary>

At $50\ \text{Hz}$,

$$
X_C=\frac{1}{2\pi(50)(1.0\times10^{-6})}=3.18\times10^3\ \Omega.
$$

At $1000\ \text{Hz}$,

$$
X_C=\frac{1}{2\pi(1000)(1.0\times10^{-6})}=159\ \Omega.
$$

Doubling the frequency would halve the reactance; here the frequency rises by a factor of $20$.

</details>

**C.** At what frequency does a $10\ \text{mH}$ inductor have the same reactance as a $10\ \mu\text{F}$ capacitor?

<details><summary>Show the reasoning</summary>

Set $X_L=X_C$:

$$
\omega L=\frac{1}{\omega C}
\quad\Rightarrow\quad
\omega^2=\frac{1}{LC}.
$$

Here $LC=(10\times10^{-3})(10\times10^{-6})=1.0\times10^{-7}\ \text{s}^2$, so

$$
\omega=\frac{1}{\sqrt{1.0\times10^{-7}}}=3162\ \text{rad/s},
\qquad
f=\frac{\omega}{2\pi}=503\ \text{Hz}.
$$

</details>

## Remember

- An inductor obeys $v=L\,di/dt$; its current lags the voltage by $90^\circ$ and $X_L=\omega L$ rises with frequency.
- A capacitor obeys $i=C\,dv/dt$; its current leads the voltage by $90^\circ$ and $X_C=1/(\omega C)$ falls with frequency.
- Reactance is measured in ohms but is frequency-dependent and dissipates no average power.
- At DC an ideal inductor is a short and a capacitor is an open circuit; at high frequency their roles reverse.
- The peak and rms relations $V=IX_L$ and $V=IX_C$ hold, but only one reactance at a time.

When a resistor, inductor and capacitor share one current in series, their voltages must be combined as phasors. That is the subject of the next module, where the partial cancellation of $X_L$ and $X_C$ produces resonance.
