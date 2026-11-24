## The supply that keeps changing its mind

A battery pushes charge one way with a steady emf. The mains supply does not. Its emf rises, falls, reverses, and repeats, completing fifty full cycles every second in India. A filament lamp on this supply looks perfectly steady because the filament cannot cool and reheat within a hundredth of a second; the light output is an average over many cycles. That gap between the instantaneous behaviour and what we actually measure is the central problem of alternating current.

An alternating voltage or current is one whose direction reverses periodically. The most important case, produced by a coil rotating at constant speed in a magnetic field, is sinusoidal:

$$
v(t)=V_0\sin(\omega t+\phi).
$$

The previous chapter derived this form for a generator. Here we ask a different question: given a supply that is never constant, what single number should label it, and how much energy does it deliver to a resistor?

## 1. The vocabulary of a sine wave

In $v(t)=V_0\sin(\omega t+\phi)$:

- $V_0$ is the **peak value** or amplitude, the largest magnitude reached in either direction.
- $\omega$ is the **angular frequency** in radians per second. It is related to the ordinary frequency $f$ in hertz by $\omega=2\pi f$.
- $\omega t+\phi$ is the **phase**, and $\phi$ is the phase constant fixed by the choice of $t=0$.
- The **period** is $T=1/f=2\pi/\omega$, the time for one complete cycle.

The same notation applies to current, with $I_0$ as the peak. Because a sine wave is symmetric about zero, its average over a whole number of cycles is exactly zero. That is true but useless for describing heating, so we need a different average.

## 2. RMS: the value that heats like a battery

The heating power in a resistor depends on the square of the current, $i^2R$, so the square never changes sign. Average the square over one cycle:

$$
i^2=I_0^2\sin^2\omega t
=\frac{I_0^2}{2}\left(1-\cos 2\omega t\right).
$$

The $\cos 2\omega t$ term averages to zero over a cycle. Therefore

$$
\langle i^2\rangle=\frac{I_0^2}{2}.
$$

The **root-mean-square** (rms) current is the square root of this mean square:

$$
I_{\text{rms}}=\frac{I_0}{\sqrt2}\approx0.707\,I_0.
$$

The same factor applies to a sinusoidal voltage: $V_{\text{rms}}=V_0/\sqrt2$. The rms value is the steady direct current that would dissipate the same average power in the same resistor. When a supply is called “230 V”, that is an rms value; its peak is

$$
V_0=230\sqrt2\approx325\ \text{V}.
$$

There is also an average of the magnitude over a half-cycle, $\frac{2}{\pi}I_0\approx0.637\,I_0$, but it is not the value to use for power. The rms value is the one that matches heating.

| Quantity | In terms of peak | For $I_0=10\ \text{A}$ |
| --- | --- | --- |
| Peak | $I_0$ | $10\ \text{A}$ |
| rms | $I_0/\sqrt2$ | $7.07\ \text{A}$ |
| Half-cycle average magnitude | $2I_0/\pi$ | $6.37\ \text{A}$ |
| Full-cycle average | $0$ | $0$ |

## 3. Phasors: drawing a sine as an arrow

A sinusoid can be represented by an arrow that rotates anticlockwise at angular speed $\omega$. The arrow’s length is the peak value, and its angle at any instant is the phase. The instantaneous value is the projection of the arrow onto a fixed axis.

This picture is useful because every quantity in a linear AC circuit has the same frequency. Their arrows therefore keep a fixed angle between them. That angle is the **phase difference**. Adding two same-frequency voltages becomes ordinary vector addition of their phasors, which is far easier than adding two sine functions algebraically.

A phasor is not a physical object spinning inside the wire. It is a bookkeeping device that turns trigonometry into geometry. Draw all phasors at the same instant and at the same scale.

<learning-block type="concept" title="Phase difference, not phase">

The absolute phase $\phi$ depends on where you set $t=0$, so it has no physical meaning by itself. Only the **difference** between the phases of two quantities matters. Saying “current lags voltage by $90^\circ$” is meaningful; saying “current has phase $30^\circ$” is not, unless the reference is stated.

</learning-block>

## 4. A resistor on an alternating supply

For a pure resistor, Ohm’s law holds at every instant:

$$
v=iR.
$$

If $v=V_0\sin\omega t$, then

$$
i=\frac{V_0}{R}\sin\omega t=I_0\sin\omega t,
$$

so voltage and current reach their peaks together and pass through zero together. They are **in phase**; the phase difference is zero. The peak and rms relations are both simple:

$$
V_0=I_0R,\qquad V_{\text{rms}}=I_{\text{rms}}R.
$$

Because the voltage and current are in phase, the instantaneous power is always non-negative:

$$
p=vi=V_0I_0\sin^2\omega t
=\frac{V_0I_0}{2}\left(1-\cos 2\omega t\right).
$$

Power pulses at twice the supply frequency but never reverses; the resistor always converts electrical energy into thermal energy. Averaging over a cycle gives

$$
P_{\text{av}}=\frac{V_0I_0}{2}
=V_{\text{rms}}I_{\text{rms}}
=I_{\text{rms}}^2R
=\frac{V_{\text{rms}}^2}{R}.
$$

This is why rms values are used everywhere in AC power calculations: they let the DC formulas work unchanged.

## 5. Worked example: a heater on the mains

A resistor of $100\ \Omega$ is connected across a $230\ \text{V}$ rms, $50\ \text{Hz}$ supply. Find the peak voltage, rms current, peak current, average power, and energy used in $30$ minutes.

The peak voltage is

$$
V_0=230\sqrt2=325.3\ \text{V}.
$$

The rms current follows from Ohm’s law:

$$
I_{\text{rms}}=\frac{230}{100}=2.30\ \text{A},
\qquad
I_0=2.30\sqrt2=3.25\ \text{A}.
$$

The average power is

$$
P=\frac{V_{\text{rms}}^2}{R}
=\frac{(230)^2}{100}=529\ \text{W}.
$$

Equivalently, $I_{\text{rms}}^2R=(2.30)^2(100)=529\ \text{W}$. Over $30\ \text{min}=1800\ \text{s}$,

$$
E=P t=(529)(1800)=9.52\times10^5\ \text{J}\approx0.26\ \text{kWh}.
$$

**Sanity check.** A $529\ \text{W}$ heater running for half an hour should use about a quarter of a kilowatt-hour, and it does. The peak voltage is about $41\%$ above the rms value, which is why insulation is rated for the peak, not the rms, voltage.

<learning-block type="mistake" title="Three ways to lose the √2">

**Treating the labelled voltage as a peak.** A “230 V” supply has a peak of about $325\ \text{V}$. If a question asks for the maximum voltage across a component, $230\ \text{V}$ is the wrong answer.

**Mixing peak and rms in one formula.** $P=V_0I_{\text{rms}}$ is meaningless. Either use peak values throughout with the factor $\frac12$, or rms values throughout with no factor.

**Concluding that average current zero means average power zero.** The current reverses, but $i^2$ does not. A resistor heats on both halves of the cycle.

</learning-block>

## Try it yourself

**A.** A current is $i=5.0\sin(100\pi t)$ amperes. Find its rms value, frequency, period, and its value at $t=5.0\ \text{ms}$.

<details><summary>Show the reasoning</summary>

The peak is $5.0\ \text{A}$, so $I_{\text{rms}}=5.0/\sqrt2=3.5\ \text{A}$. The angular frequency is $100\pi\ \text{rad/s}$, so $f=\omega/(2\pi)=50\ \text{Hz}$ and $T=1/f=0.020\ \text{s}$.

At $t=5.0\ \text{ms}=5.0\times10^{-3}\ \text{s}$,

$$
i=5.0\sin(100\pi\times5.0\times10^{-3})
=5.0\sin\left(\frac{\pi}{2}\right)=5.0\ \text{A}.
$$

That instant is a quarter-cycle in, so the current is at its peak.

</details>

**B.** A $12\ \Omega$ resistor carries an rms current of $2.0\ \text{A}$. Find the average power, the peak voltage across it, and the peak current.

<details><summary>Show the reasoning</summary>

$$
P=I_{\text{rms}}^2R=(2.0)^2(12)=48\ \text{W}.
$$

The rms voltage is $V_{\text{rms}}=I_{\text{rms}}R=24\ \text{V}$, so $V_0=24\sqrt2=33.9\ \text{V}$. The peak current is $I_0=2.0\sqrt2=2.83\ \text{A}$.

</details>

**C.** Two lamps are marked $100\ \text{W}$, $230\ \text{V}$ and $60\ \text{W}$, $230\ \text{V}$. Which has the larger resistance, and why?

<details><summary>Show the reasoning</summary>

Both are designed for the same rms voltage, and $R=V_{\text{rms}}^2/P$. The $60\ \text{W}$ lamp has

$$
R=\frac{(230)^2}{60}=882\ \Omega,
$$

while the $100\ \text{W}$ lamp has $R=529\ \Omega$. The lower-power lamp has the larger resistance, so it draws less current at the same voltage.

</details>

## Remember

- A sinusoidal quantity is fixed by its peak, frequency and phase; $V_{\text{rms}}=V_0/\sqrt2$ for a sine wave.
- RMS is the DC equivalent for heating, so use rms values in power formulas unless you deliberately work with peaks.
- A phasor is a rotating arrow whose projection gives the instantaneous value; only phase **differences** are physical.
- In a pure resistor, voltage and current are in phase, and $P=V_{\text{rms}}I_{\text{rms}}=I_{\text{rms}}^2R$.
- Power in a resistor pulses at twice the supply frequency but is never negative.

The next module replaces the resistor with inductors and capacitors. They also have a peak voltage and a peak current, but the two no longer peak together, and their opposition to current depends on frequency.
