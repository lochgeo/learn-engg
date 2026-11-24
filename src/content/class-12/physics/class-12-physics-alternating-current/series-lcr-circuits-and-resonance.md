## How a radio chooses one station

A radio aerial receives weak signals from many stations at once, all at different frequencies. The tuning circuit does not amplify one station more than another by magic; it is a series combination of a coil and a capacitor whose response peaks sharply at one particular frequency. At that frequency the coil and capacitor voltages cancel, the impedance drops to its smallest value, and the current from the wanted station is largest. Turn the tuning knob, change $C$, and the peak moves to another station.

That peak is **resonance**. To understand it we first need to combine three voltages that are not in phase.

## 1. One current, three voltages

In a series $LCR$ circuit the same instantaneous current flows through $R$, $L$ and $C$. Take

$$
i=I_0\sin\omega t.
$$

The voltage across each element has the same frequency but a different phase:

$$
v_R=I_0R\sin\omega t,
$$

$$
v_L=I_0X_L\sin\left(\omega t+\frac{\pi}{2}\right),
$$

$$
v_C=I_0X_C\sin\left(\omega t-\frac{\pi}{2}\right).
$$

The source voltage is the sum $v=v_R+v_L+v_C$, but the three terms cannot be added as ordinary numbers because they peak at different times. Draw them as phasors with the current along the reference direction:

- $V_R$ lies along $I$;
- $V_L$ is $90^\circ$ ahead of $I$;
- $V_C$ is $90^\circ$ behind $I$.

The two reactive phasors point in opposite directions, so their resultant is $V_L-V_C$ along the vertical axis. The source voltage is the vector sum of $V_R$ and that resultant.

## 2. Impedance and phase angle

Because $V_R$ and $V_L-V_C$ are perpendicular, Pythagoras gives

$$
V=\sqrt{V_R^2+(V_L-V_C)^2}.
$$

Substituting $V_R=IR$, $V_L=IX_L$ and $V_C=IX_C$,

$$
V=I\sqrt{R^2+(X_L-X_C)^2}.
$$

The quantity multiplying $I$ is the **impedance**:

$$
Z=\sqrt{R^2+(X_L-X_C)^2}.
$$

Then $V_{\text{rms}}=I_{\text{rms}}Z$, exactly as $V=IR$ for a resistor. The **phase angle** $\phi$ by which the source voltage leads the current satisfies

$$
\tan\phi=\frac{X_L-X_C}{R}.
$$

The three possible behaviours are:

| Condition | Circuit behaves as | Current relative to voltage |
| --- | --- | --- |
| $X_L>X_C$ | inductive | current lags |
| $X_C>X_L$ | capacitive | current leads |
| $X_L=X_C$ | purely resistive | current in phase |

A common trap is to add the rms voltages arithmetically. In general

$$
V\neq V_R+V_L+V_C,
$$

because the phasors are not parallel. Only when the reactive voltages are zero does the simple sum work.

## 3. Resonance

Resonance occurs at the frequency where the two reactances are equal:

$$
X_L=X_C
\quad\Rightarrow\quad
\omega_0L=\frac{1}{\omega_0C}.
$$

Solving,

$$
\omega_0=\frac{1}{\sqrt{LC}},
\qquad
f_0=\frac{1}{2\pi\sqrt{LC}}.
$$

At this frequency the reactive term in the impedance vanishes:

$$
Z_{\min}=R.
$$

The current reaches its maximum value $I=V/R$, the phase angle is zero, and the circuit behaves as a pure resistor. The voltages across the inductor and capacitor are equal in magnitude and opposite in phase, so they cancel in the source-voltage sum. Each can be much larger than the source voltage, however.

The **quality factor** measures how sharply the circuit selects its resonance:

$$
Q=\frac{\omega_0L}{R}
=\frac{1}{\omega_0CR}
=\frac{1}{R}\sqrt{\frac{L}{C}}.
$$

At resonance,

$$
V_L=V_C=IX_L
=\frac{V}{R}\omega_0L
=QV.
$$

A high-$Q$ circuit has a narrow resonance peak and a large voltage magnification; a low-$Q$ circuit is broad and gentle. The resonance frequency itself does not depend on $R$ for ideal components — $R$ controls the height and width of the peak, not its position.

<learning-block type="concept" title="Why large voltages are not a paradox">

At resonance the source supplies only the small resistive voltage $V_R=IR$. The inductor and capacitor exchange energy with each other: the capacitor discharges into the inductor, then the inductor charges the capacitor back. Their individual voltages can be $Q$ times the source voltage without violating energy conservation, because the energy stored in one is released as the other stores energy.

</learning-block>

## 4. Worked example: a tuned series circuit

A series circuit has $R=100\ \Omega$, $L=1.0\ \text{H}$ and $C=10\ \mu\text{F}$. It is connected to a $200\ \text{V}$ rms source at the resonant frequency. Find the resonant frequency, the current, the voltage across each element, and the quality factor.

First,

$$
f_0=\frac{1}{2\pi\sqrt{LC}}
=\frac{1}{2\pi\sqrt{(1.0)(10\times10^{-6})}}
=\frac{1}{2\pi(3.16\times10^{-3})}
=50.3\ \text{Hz}.
$$

At resonance $X_L=X_C=\omega_0L$:

$$
\omega_0=2\pi(50.3)=316\ \text{rad/s},
\qquad
X_L=(316)(1.0)=316\ \Omega.
$$

The current is

$$
I_{\text{rms}}=\frac{V_{\text{rms}}}{R}=\frac{200}{100}=2.00\ \text{A}.
$$

Therefore

$$
V_R=I R=200\ \text{V},
\qquad
V_L=V_C=I X_L=(2.00)(316)=632\ \text{V}.
$$

The quality factor is

$$
Q=\frac{V_L}{V}=\frac{632}{200}=3.16,
$$

which also equals $\omega_0L/R=(316)(1.0)/100=3.16$.

**Sanity check.** The resistive voltage equals the source voltage, as it must at resonance, and the two reactive voltages cancel. Their common value is about three times the source voltage, consistent with $Q\approx3.2$. A $50\ \text{Hz}$ supply is very close to this circuit’s resonance, so a small change in $C$ would produce a large change in current.

<learning-block type="mistake" title="Resonance errors">

**Adding the three rms voltages.** $V_R+V_L+V_C$ is not the source voltage. Use the phasor relation $V=\sqrt{V_R^2+(V_L-V_C)^2}$.

**Saying the inductor and capacitor voltages are zero at resonance.** They are equal and opposite, not absent. Each is $QV$, and they cancel only in the source-voltage sum.

**Confusing resonance with maximum impedance.** In a series circuit resonance gives **minimum** impedance and **maximum** current. A parallel circuit has a different behaviour, so check which circuit the question describes.

**Believing $R$ changes the resonant frequency.** For ideal components $f_0=1/(2\pi\sqrt{LC})$ is independent of $R$. $R$ changes the peak height, the current at resonance and the sharpness.

**Forgetting that $X_L$ and $X_C$ have opposite signs.** They subtract. Using $X_L+X_C$ in the impedance makes the circuit look far more resistive than it is.

</learning-block>

## Try it yourself

**A.** A series circuit has $R=30\ \Omega$, $X_L=70\ \Omega$ and $X_C=30\ \Omega$. The rms source voltage is $100\ \text{V}$. Find the impedance, current, each element voltage, phase angle and average power.

<details><summary>Show the reasoning</summary>

$$
Z=\sqrt{30^2+(70-30)^2}=\sqrt{900+1600}=50\ \Omega.
$$

Thus $I=100/50=2.0\ \text{A}$, and

$$
V_R=60\ \text{V},\qquad V_L=140\ \text{V},\qquad V_C=60\ \text{V}.
$$

Check: $\sqrt{60^2+(140-60)^2}=\sqrt{3600+6400}=100\ \text{V}$.

The phase angle satisfies $\tan\phi=(70-30)/30=1.33$, so $\phi=53^\circ$ with the voltage leading the current. The average power is $I^2R=(2.0)^2(30)=120\ \text{W}$.

</details>

**B.** Find the resonant frequency of a series circuit with $L=0.50\ \text{H}$ and $C=20\ \mu\text{F}$, and its $Q$ if $R=10\ \Omega$.

<details><summary>Show the reasoning</summary>

$$
f_0=\frac{1}{2\pi\sqrt{(0.50)(20\times10^{-6})}}
=\frac{1}{2\pi\sqrt{1.0\times10^{-5}}}
=50.3\ \text{Hz}.
$$

The angular frequency is $\omega_0=316\ \text{rad/s}$, so

$$
Q=\frac{\omega_0L}{R}=\frac{(316)(0.50)}{10}=15.8.
$$

A $Q$ of about $16$ means a fairly sharp resonance and a voltage magnification of roughly $16$ at the peak.

</details>

**C.** A series $LCR$ circuit has $R=50\ \Omega$, $L=0.20\ \text{H}$, $C=5.0\ \mu\text{F}$ and is driven at resonance by a $20\ \text{V}$ rms source. Find the current, the capacitor voltage and $Q$.

<details><summary>Show the reasoning</summary>

$$
f_0=\frac{1}{2\pi\sqrt{(0.20)(5.0\times10^{-6})}}
=\frac{1}{2\pi(1.0\times10^{-3})}=159\ \text{Hz}.
$$

At resonance,

$$
X_L=2\pi(159)(0.20)=200\ \Omega,
\qquad
I=\frac{20}{50}=0.40\ \text{A}.
$$

Then

$$
V_C=IX_C=(0.40)(200)=80\ \text{V},
\qquad
Q=\frac{80}{20}=4.0.
$$

The capacitor voltage is four times the source voltage; the inductor voltage is equal and opposite.

</details>

## Remember

- In a series $LCR$ circuit the current is common; the voltages add as phasors, not as numbers.
- The impedance is $Z=\sqrt{R^2+(X_L-X_C)^2}$ and the phase angle obeys $\tan\phi=(X_L-X_C)/R$.
- Resonance occurs at $\omega_0=1/\sqrt{LC}$; there $Z=R$, the current is maximum, and voltage and current are in phase.
- At resonance $V_L$ and $V_C$ are equal and opposite, each $Q$ times the source voltage.
- Below resonance the circuit is capacitive; above resonance it is inductive.

The next module turns the phase angle into a power calculation. Once voltage and current are out of step, the product $VI$ no longer equals the average power, and that difference is what the power factor measures.
