## The current that does no work

An industrial motor can draw a current of many amperes while delivering far less power than the product of its voltage and current suggests. The missing factor is not fraud or inefficiency; it is phase. The current has a component that is out of step with the voltage, and that component shuttles energy back and forth without transferring any net energy. Supply authorities meter this **reactive** current because it still loads the cables and transformers.

The same mathematics describes a much smaller system: a charged capacitor connected to an inductor. There, energy oscillates between the electric field and the magnetic field at a natural frequency, just as a mass on a spring oscillates between kinetic and potential energy.

## 1. Average power when voltage and current are out of phase

Let the source voltage and current be

$$
v=V_0\sin\omega t,
\qquad
i=I_0\sin(\omega t-\phi),
$$

where $\phi$ is the phase by which the current lags the voltage. The instantaneous power is

$$
p=vi=V_0I_0\sin\omega t\sin(\omega t-\phi).
$$

Using $\sin A\sin B=\frac12[\cos(A-B)-\cos(A+B)]$,

$$
p=\frac{V_0I_0}{2}\left[\cos\phi-\cos(2\omega t-\phi)\right].
$$

The second term oscillates at twice the supply frequency and averages to zero over a cycle. The average power is therefore

$$
P_{\text{av}}=\frac{V_0I_0}{2}\cos\phi
=V_{\text{rms}}I_{\text{rms}}\cos\phi.
$$

The factor $\cos\phi$ is the **power factor**. It is the fraction of the apparent volt-ampere product that actually transfers energy.

For a series circuit, $\cos\phi=R/Z$, so

$$
P=V_{\text{rms}}I_{\text{rms}}\frac{R}{Z}
=I_{\text{rms}}^2R.
$$

This confirms that only the resistance dissipates energy. The inductor and capacitor exchange energy with the source but have zero average power over a cycle.

## 2. Active, reactive and apparent power

Three related quantities are worth separating:

$$
S=V_{\text{rms}}I_{\text{rms}}
\quad\text{(apparent power, volt-amperes)},
$$

$$
P=S\cos\phi
\quad\text{(active power, watts)},
$$

$$
Q_{\text{react}}=S\sin\phi
\quad\text{(reactive power, volt-amperes reactive)}.
$$

They form a right triangle with $S$ as the hypotenuse. For a pure resistor, $\phi=0$, so $P=S$ and $Q_{\text{react}}=0$. For a pure inductor or capacitor, $|\phi|=90^\circ$, so $\cos\phi=0$: the average power is zero and $Q_{\text{react}}=S$. A practical circuit lies between these extremes. The subscript distinguishes reactive power from the quality factor $Q$ of a resonant circuit.

It also helps to split the current into two components:

- $I\cos\phi$, the **active** or wattful component, in phase with the voltage;
- $I\sin\phi$, the **wattless** or reactive component, $90^\circ$ out of phase.

The wattless component does no net work, but it still flows through the supply cables and causes $I^2R$ heating there. A low power factor therefore means thicker cables, larger transformers and greater losses for the same useful power. Power-factor correction adds a capacitor or inductor to supply the reactive current locally.

<learning-block type="concept" title="Power factor is not efficiency">

Efficiency compares useful output power with total input power, both measured in watts. Power factor compares active power with apparent power, $P/S$, and is a property of the phase relationship. A transformer can be $98\%$ efficient and still operate at a poor power factor; a circuit can have a power factor of $1$ and still waste energy in its resistance. Keep the two ideas separate.

</learning-block>

## 3. Worked example: an inductive load

A series load has $R=30\ \Omega$ and $X_L=40\ \Omega$, connected to a $200\ \text{V}$ rms supply. Find the impedance, current, power factor, average power, apparent power and reactive power.

The impedance is

$$
Z=\sqrt{R^2+X_L^2}=\sqrt{30^2+40^2}=50\ \Omega,
$$

so

$$
I_{\text{rms}}=\frac{200}{50}=4.0\ \text{A}.
$$

The power factor is

$$
\cos\phi=\frac{R}{Z}=\frac{30}{50}=0.60
\quad(\text{lagging}).
$$

Thus

$$
P=V_{\text{rms}}I_{\text{rms}}\cos\phi
=(200)(4.0)(0.60)=480\ \text{W}.
$$

The apparent power is

$$
S=(200)(4.0)=800\ \text{VA},
$$

and the reactive power is

$$
Q_{\text{react}}=\sqrt{S^2-P^2}
=\sqrt{800^2-480^2}=640\ \text{VAR}.
$$

**Sanity check.** $I^2R=(4.0)^2(30)=480\ \text{W}$, matching the power-factor calculation, and $I^2X_L=640\ \text{VAR}$, matching the reactive power. The current lags because the load is inductive; a capacitor in parallel would reduce the lag and lower the current drawn from the supply.

## 4. LC oscillations: energy on a spring

Charge a capacitor to $q_0$ and then connect it across an inductor. The capacitor begins to discharge through the coil, building a magnetic field. When the capacitor is empty, the current is maximum and the magnetic field holds all the energy. The collapsing field then drives current onward, charging the capacitor with the opposite polarity. The cycle repeats.

With $q$ the charge on the capacitor and $i=-dq/dt$, the loop equation is

$$
\frac{q}{C}-L\frac{di}{dt}=0.
$$

Substituting $i=-dq/dt$ gives

$$
\frac{d^2q}{dt^2}+\frac{1}{LC}q=0.
$$

This is the equation of simple harmonic motion, with

$$
\omega=\frac{1}{\sqrt{LC}},
\qquad
f=\frac{1}{2\pi\sqrt{LC}}.
$$

The solution for a capacitor released from rest is

$$
q=q_0\cos\omega t,
\qquad
i=q_0\omega\sin\omega t.
$$

The electric energy is

$$
U_E=\frac{q^2}{2C}
=\frac{q_0^2}{2C}\cos^2\omega t,
$$

and the magnetic energy is

$$
U_B=\frac12Li^2
=\frac12Lq_0^2\omega^2\sin^2\omega t
=\frac{q_0^2}{2C}\sin^2\omega t,
$$

because $L\omega^2=1/C$. Their sum is constant:

$$
U_E+U_B=\frac{q_0^2}{2C}.
$$

The analogy with a mass–spring system is exact: charge plays the role of displacement, current of velocity, inductance of mass, and $1/C$ of the spring constant. In a real circuit the coil’s resistance and the connecting wires dissipate energy, so the oscillations are damped and eventually die away. The energy is not lost from the universe; it becomes thermal energy.

## 5. Worked example: a radio-frequency LC circuit

A $1.0\ \mu\text{F}$ capacitor is charged to $10\ \mu\text{C}$ and connected across a $1.0\ \text{mH}$ inductor. Find the oscillation frequency, the total energy, the maximum current and the initial capacitor voltage.

$$
\omega=\frac{1}{\sqrt{LC}}
=\frac{1}{\sqrt{(1.0\times10^{-3})(1.0\times10^{-6})}}
=3.16\times10^4\ \text{rad/s}.
$$

Thus

$$
f=\frac{\omega}{2\pi}=5.03\times10^3\ \text{Hz}\approx5.0\ \text{kHz}.
$$

The total energy is

$$
U=\frac{q_0^2}{2C}
=\frac{(10\times10^{-6})^2}{2(1.0\times10^{-6})}
=5.0\times10^{-5}\ \text{J}=50\ \mu\text{J}.
$$

The maximum current follows from $I_{\max}=q_0\omega$:

$$
I_{\max}=(10\times10^{-6})(3.16\times10^4)=0.316\ \text{A}.
$$

The initial voltage is $V_0=q_0/C=10\ \mu\text{C}/1.0\ \mu\text{F}=10\ \text{V}$.

**Sanity check.** At maximum current, $\frac12LI_{\max}^2=\frac12(1.0\times10^{-3})(0.316)^2=5.0\times10^{-5}\ \text{J}$, equal to the initial capacitor energy. A few kilohertz is a plausible resonant frequency for a millihenry coil and a microfarad capacitor.

<learning-block type="mistake" title="Power-factor and LC errors">

**Treating $VI$ as the power in every circuit.** Use $P=VI\cos\phi$. In a purely reactive circuit $VI$ can be large while the average power is zero.

**Calling the power factor the efficiency.** They are different ratios. Power factor is $\cos\phi=P/S$; efficiency is useful output divided by total input.

**Assuming wattless current is harmless.** It delivers no net energy to the load, but it heats the supply cables and occupies transformer capacity.

**Writing $f=1/\sqrt{LC}$.** The angular frequency is $\omega=1/\sqrt{LC}$; the ordinary frequency is $f=1/(2\pi\sqrt{LC})$.

**Expecting an ideal LC circuit to settle down.** With no resistance, the energy oscillates forever. Damping requires a resistive loss.

</learning-block>

## Try it yourself

**A.** A load draws $5.0\ \text{A}$ rms at $230\ \text{V}$ rms with a lagging power factor of $0.80$. Find the active, apparent and reactive power, and the wattless current.

<details><summary>Show the reasoning</summary>

$$
S=VI=(230)(5.0)=1150\ \text{VA},
$$

$$
P=S\cos\phi=1150(0.80)=920\ \text{W},
$$

$$
Q_{\text{react}}=S\sin\phi=1150(0.60)=690\ \text{VAR}.
$$

The wattless component is $I\sin\phi=5.0(0.60)=3.0\ \text{A}$; the active component is $4.0\ \text{A}$.

</details>

**B.** A series circuit has $R=40\ \Omega$ and a net capacitive reactance of $30\ \Omega$. The rms source voltage is $100\ \text{V}$. Find the current, power factor and average power.

<details><summary>Show the reasoning</summary>

$$
Z=\sqrt{40^2+30^2}=50\ \Omega,
\qquad
I=\frac{100}{50}=2.0\ \text{A}.
$$

The power factor is $R/Z=40/50=0.80$, leading because the circuit is capacitive. The average power is

$$
P=I^2R=(2.0)^2(40)=160\ \text{W}.
$$

Equivalently, $P=VI\cos\phi=(100)(2.0)(0.80)=160\ \text{W}$.

</details>

**C.** A $2.0\ \mu\text{F}$ capacitor is charged to $100\ \text{V}$ and connected across an $8.0\ \text{mH}$ inductor. Find the total energy, the angular frequency, the ordinary frequency and the maximum current.

<details><summary>Show the reasoning</summary>

$$
U=\frac12CV^2
=\frac12(2.0\times10^{-6})(100)^2
=1.0\times10^{-2}\ \text{J}.
$$

$$
\omega=\frac{1}{\sqrt{(8.0\times10^{-3})(2.0\times10^{-6})}}
=\frac{1}{\sqrt{1.6\times10^{-8}}}
=7.9\times10^3\ \text{rad/s}.
$$

Thus $f=\omega/(2\pi)=1.3\times10^3\ \text{Hz}$. The maximum current is

$$
I_{\max}=V\sqrt{\frac{C}{L}}
=100\sqrt{\frac{2.0\times10^{-6}}{8.0\times10^{-3}}}
=1.6\ \text{A}.
$$

Check: $\frac12LI_{\max}^2=\frac12(8.0\times10^{-3})(1.6)^2\approx1.0\times10^{-2}\ \text{J}$, as required.

</details>

## Remember

- Average AC power is $P=V_{\text{rms}}I_{\text{rms}}\cos\phi$, and $\cos\phi=R/Z$ for a series circuit.
- Only resistance dissipates energy; ideal inductors and capacitors exchange reactive energy with zero average power.
- Apparent power $S=VI$, active power $P=S\cos\phi$ and reactive power $Q_{\text{react}}=S\sin\phi$ form a right triangle.
- A low power factor means a large wattless current and avoidable losses in supply cables.
- An ideal LC circuit oscillates at $\omega=1/\sqrt{LC}$, exchanging energy between $\frac12Cv^2$ and $\frac12Li^2$ with a constant total.

The final concept module moves from the laboratory circuit to the power grid. Transformers change voltage levels by mutual induction, and that is what makes long-distance AC transmission practical.
