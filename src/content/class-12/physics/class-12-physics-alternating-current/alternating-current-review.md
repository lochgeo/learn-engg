## Your study plan for today

Alternating current looks like a large collection of formulas, but most of them come from two ideas: a sinusoid has an rms value, and out-of-phase quantities add as phasors. Work through the chapter in this order:

| Step | Module | Time |
| --- | --- | --- |
| 1 | AC basics, phasors and resistors | 22 min |
| 2 | Inductors and capacitors in AC | 22 min |
| 3 | Series LCR circuits and resonance | 22 min |
| 4 | Power factor and LC oscillations | 22 min |
| 5 | Transformers | 22 min |
| 6 | This mastery check | 25 min |

That is a little over two hours of focused work. After each concept module, close it and redo its “Try it yourself” questions from a blank page. Mark the module complete only when you can explain why the method applies, not merely when you recognise the formula.

Keep the optional **JEE Main timed practice** for a separate sitting. Its purpose is to train method selection and speed under a $50$-minute limit, so do not use it as a first reading.

## First choose the tool

| Clue in the question | Start with |
| --- | --- |
| A peak value is given, rms or heating is asked | $V_{\text{rms}}=V_0/\sqrt2$, $I_{\text{rms}}=I_0/\sqrt2$ |
| Power in a resistor at a stated rms voltage | $P=V^2/R=I^2R$ |
| A coil or capacitor at a stated frequency | $X_L=\omega L$, $X_C=1/(\omega C)$, $\omega=2\pi f$ |
| Series $R$, $L$, $C$ with one current | $Z=\sqrt{R^2+(X_L-X_C)^2}$, $I=V/Z$ |
| Phase angle or lead/lag is asked | $\tan\phi=(X_L-X_C)/R$ |
| “Resonant frequency” or “tuning” | $f_0=1/(2\pi\sqrt{LC})$ |
| Current or voltage at resonance | $Z=R$, $I=V/R$, $V_L=V_C=QV$ |
| Sharpness or voltage magnification | $Q=\omega_0L/R$ |
| Average power with a phase difference | $P=V_{\text{rms}}I_{\text{rms}}\cos\phi$ |
| Wattless current or reactive power | $I\sin\phi$, $Q_{\text{react}}=VI\sin\phi$ |
| A capacitor discharges into an inductor | $\omega=1/\sqrt{LC}$, energy $\frac12CV^2=\frac12LI^2$ |
| Two coils on one core | $V_s/V_p=N_s/N_p$, $I_s/I_p=N_p/N_s$ |
| Cable loss in transmission | $P_{\text{loss}}=(P/V)^2R_{\text{line}}$ |

## Mastery check

Try each question without looking at the answer. Use $g=10\ \text{m/s}^2$ where relevant; the questions below do not need it.

### 1. Peak, rms and instantaneous value

A sinusoidal voltage has peak $170\ \text{V}$ and frequency $60\ \text{Hz}$. Find its rms value, its period, and its instantaneous value at $t=5.0\ \text{ms}$.

<details><summary>Answer and reasoning</summary>

$$
V_{\text{rms}}=\frac{170}{\sqrt2}=120\ \text{V},
\qquad
T=\frac{1}{60}=0.0167\ \text{s}=16.7\ \text{ms}.
$$

With $v=170\sin(2\pi60t)$,

$$
v(5.0\ \text{ms})=170\sin(2\pi60\times5.0\times10^{-3})
=170\sin(1.885\ \text{rad})=162\ \text{V}.
$$

The angle $1.885\ \text{rad}$ is about $108^\circ$, so the voltage is past its peak and beginning to fall.

</details>

### 2. Reactance at the same frequency

A $0.25\ \text{H}$ inductor and a $40\ \mu\text{F}$ capacitor are each connected across a $230\ \text{V}$ rms, $50\ \text{Hz}$ supply. Find each reactance and each rms current.

<details><summary>Answer and reasoning</summary>

$$
X_L=2\pi(50)(0.25)=78.5\ \Omega,
\qquad
I_L=\frac{230}{78.5}=2.93\ \text{A}.
$$

$$
X_C=\frac{1}{2\pi(50)(40\times10^{-6})}=79.6\ \Omega,
\qquad
I_C=\frac{230}{79.6}=2.89\ \text{A}.
$$

The two reactances are nearly equal at this frequency, so the currents are nearly equal. That coincidence is specific to $50\ \text{Hz}$; at another frequency the two currents diverge in opposite directions.

</details>

### 3. Series LCR without the time dependence

A series circuit has $R=40\ \Omega$, $X_L=70\ \Omega$ and $X_C=40\ \Omega$. The rms source voltage is $200\ \text{V}$. Find the impedance, current, power factor, phase angle and average power.

<details><summary>Answer and reasoning</summary>

$$
Z=\sqrt{40^2+(70-40)^2}=\sqrt{1600+900}=50\ \Omega,
\qquad
I=\frac{200}{50}=4.0\ \text{A}.
$$

The power factor is $R/Z=40/50=0.80$. Since $X_L>X_C$, the circuit is inductive and the current lags the voltage. The phase angle satisfies

$$
\tan\phi=\frac{70-40}{40}=0.75,
\qquad
\phi=36.9^\circ.
$$

The average power is

$$
P=I^2R=(4.0)^2(40)=640\ \text{W}.
$$

Check: $VI\cos\phi=(200)(4.0)(0.80)=640\ \text{W}$.

</details>

### 4. Resonance and voltage magnification

A series circuit has $L=0.40\ \text{H}$, $C=25\ \mu\text{F}$ and $R=20\ \Omega$. It is driven at resonance by a $100\ \text{V}$ rms source. Find the resonant frequency, the current, the capacitor voltage and $Q$.

<details><summary>Answer and reasoning</summary>

$$
f_0=\frac{1}{2\pi\sqrt{(0.40)(25\times10^{-6})}}
=\frac{1}{2\pi\sqrt{1.0\times10^{-5}}}
=50.3\ \text{Hz}.
$$

At resonance $Z=R=20\ \Omega$, so

$$
I=\frac{100}{20}=5.0\ \text{A}.
$$

The angular frequency is $\omega_0=316\ \text{rad/s}$ and

$$
X_L=(316)(0.40)=126\ \Omega,
\qquad
V_C=IX_C=(5.0)(126)=632\ \text{V}.
$$

Thus $Q=V_C/V=632/100=6.3$, which also equals $\omega_0L/R=126/20=6.3$.

</details>

### 5. Active and reactive power

A motor draws $8.0\ \text{A}$ rms at $240\ \text{V}$ rms with a lagging power factor of $0.75$. Find the apparent power, active power, reactive power and wattless current.

<details><summary>Answer and reasoning</summary>

$$
S=VI=(240)(8.0)=1920\ \text{VA},
$$

$$
P=S\cos\phi=1920(0.75)=1440\ \text{W},
$$

$$
Q_{\text{react}}=S\sin\phi=1920(0.661)=1.27\times10^3\ \text{VAR}.
$$

The wattless component is $I\sin\phi=8.0(0.661)=5.3\ \text{A}$. The active component is $6.0\ \text{A}$. The motor does useful work at $1440\ \text{W}$, but the cable must carry the full $8.0\ \text{A}$.

</details>

### 6. LC oscillation

A $4.0\ \mu\text{F}$ capacitor is charged to $50\ \text{V}$ and connected across a $10\ \text{mH}$ inductor. Find the total energy, the angular frequency, the ordinary frequency and the maximum current.

<details><summary>Answer and reasoning</summary>

$$
U=\frac12CV^2
=\frac12(4.0\times10^{-6})(50)^2
=5.0\times10^{-3}\ \text{J}.
$$

$$
\omega=\frac{1}{\sqrt{(10\times10^{-3})(4.0\times10^{-6})}}
=\frac{1}{\sqrt{4.0\times10^{-8}}}
=5.0\times10^3\ \text{rad/s},
$$

so $f=\omega/(2\pi)=796\ \text{Hz}$. The maximum current is

$$
I_{\max}=V\sqrt{\frac{C}{L}}
=50\sqrt{\frac{4.0\times10^{-6}}{10\times10^{-3}}}
=1.0\ \text{A}.
$$

Check: $\frac12LI_{\max}^2=\frac12(10\times10^{-3})(1.0)^2=5.0\times10^{-3}\ \text{J}$.

</details>

### 7. Transformer with a resistive load

An ideal transformer has $1000$ primary turns and $50$ secondary turns. The primary is connected to $230\ \text{V}$ rms and the secondary to a $4.0\ \Omega$ resistor. Find the secondary voltage, secondary current, primary current and power.

<details><summary>Answer and reasoning</summary>

$$
V_s=230\frac{50}{1000}=11.5\ \text{V},
\qquad
I_s=\frac{11.5}{4.0}=2.9\ \text{A}.
$$

The secondary power is

$$
P=(11.5)(2.9)=33\ \text{W},
$$

so the ideal primary current is

$$
I_p=\frac{33}{230}=0.14\ \text{A}.
$$

The current steps up by $20$, matching the voltage step-down by $20$.

</details>

### 8. Explain the wattless current

In a pure inductor the average power is zero, yet the current can be large. Explain where the energy goes during one cycle, and why the supply cable may still get warm.

<details><summary>Answer</summary>

During one quarter-cycle the source does work against the back emf, and the energy is stored in the magnetic field as $\frac12Li^2$. During the next quarter-cycle the field collapses and returns that energy to the source. Over a full cycle the net transfer is zero, so the average power is zero.

The current still flows through the resistance of the connecting cables and the coil winding. That resistance dissipates $I^2R$ heat even though the ideal inductance itself stores and returns energy without loss. The cable sees the current, not the phase.

</details>

### 9. Leading power factor

In a series circuit the current leads the source voltage by $45^\circ$. The resistance is $20\ \Omega$ and the rms source voltage is $100\ \text{V}$. Find the impedance, the net reactance, the current and the average power.

<details><summary>Answer and reasoning</summary>

Since $\cos\phi=R/Z$,

$$
Z=\frac{R}{\cos45^\circ}=\frac{20}{0.707}=28.3\ \Omega.
$$

The current is

$$
I=\frac{100}{28.3}=3.54\ \text{A}.
$$

The net reactance follows from $Z^2=R^2+(X_C-X_L)^2$:

$$
28.3^2=20^2+(X_C-X_L)^2
\quad\Rightarrow\quad
X_C-X_L=20\ \Omega.
$$

The circuit is capacitive, which is consistent with a leading current. The average power is

$$
P=I^2R=(3.54)^2(20)=250\ \text{W}.
$$

Check: $VI\cos\phi=(100)(3.54)(0.707)=250\ \text{W}$.

</details>

### 10. Transmission loss

A $20\ \text{MW}$ supply is sent through a line of resistance $10\ \Omega$. Compare the line loss at $20\ \text{kV}$ and at $200\ \text{kV}$.

<details><summary>Answer and reasoning</summary>

At $20\ \text{kV}$,

$$
I=\frac{20\times10^6}{20\times10^3}=1000\ \text{A},
\qquad
P_{\text{loss}}=(1000)^2(10)=1.0\times10^7\ \text{W}=10\ \text{MW}.
$$

At $200\ \text{kV}$,

$$
I=\frac{20\times10^6}{200\times10^3}=100\ \text{A},
\qquad
P_{\text{loss}}=(100)^2(10)=1.0\times10^5\ \text{W}=0.10\ \text{MW}.
$$

The tenfold voltage increase reduces the loss by a factor of $100$, from half the transmitted power to half a percent. This is the strongest practical argument for high-voltage AC transmission.

</details>

## Self-check

You are ready to move on when you can:

- convert between peak, rms and average values of a sine wave without mixing them in one formula;
- draw and read phasors for a resistor, inductor and capacitor;
- compute $X_L$ and $X_C$ from frequency and state which way each changes with frequency;
- build the impedance triangle of a series $LCR$ circuit and find the phase angle;
- locate resonance from $L$ and $C$, and describe what happens to $Z$, $I$ and the element voltages there;
- calculate active, reactive and apparent power and explain the wattless component;
- write the energy-exchange equations for an ideal LC oscillation;
- apply the voltage and current ratios of an ideal transformer without inverting them;
- estimate transmission loss from the transmitted power, line voltage and cable resistance;
- check every answer for the right unit, a plausible magnitude and a consistent lead/lag.

If one item still feels shaky, revisit that module and redo its questions without the reveal. Then attempt the timed JEE Main set in one sitting.
