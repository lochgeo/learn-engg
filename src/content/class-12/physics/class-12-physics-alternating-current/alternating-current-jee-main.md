## JEE Main sprint: how to use this set

This is a **50-minute, no-notes** paper for after you have completed the five concept modules and the practice check. The questions are deliberately mixed so that choosing the method is part of the test.

Suggested timing: **15 minutes** on Section A, **15 minutes** on Section B, **10 minutes** on Section C and **10 minutes** on Section D, leaving a few minutes to check. Mark any question for review after about 90 seconds. A clean method choice is worth more than a hurried calculation.

All voltages and currents are rms unless a question says otherwise. No question needs $g$; if a mechanics value were required, use $g=10\ \text{m/s}^2$.

## Conditions sheet

| Situation | Formula | Check before using it |
| --- | --- | --- |
| Peak and rms of a sine wave | $V_{\text{rms}}=V_0/\sqrt2$ | Valid only for a sinusoid; not for a square or distorted wave. |
| Heating in a resistor | $P=V_{\text{rms}}^2/R=I_{\text{rms}}^2R$ | Current and voltage are in phase, or use $\cos\phi$. |
| Inductive reactance | $X_L=\omega L=2\pi fL$ | $f$ is in hertz, $L$ in henries. |
| Capacitive reactance | $X_C=1/(\omega C)=1/(2\pi fC)$ | $C$ is in farads; microfarads must be converted. |
| Series $LCR$ impedance | $Z=\sqrt{R^2+(X_L-X_C)^2}$ | Reactances subtract; they do not add. |
| Phase angle | $\tan\phi=(X_L-X_C)/R$, $\cos\phi=R/Z$ | Positive $\phi$ means voltage leads current (inductive). |
| Resonance | $f_0=1/(2\pi\sqrt{LC})$, $Z=R$, $I=V/R$ | At resonance $V_L=V_C$, not zero. |
| Quality factor | $Q=\omega_0L/R=V_L/V$ | Large $Q$ means a narrow, high peak. |
| Average power | $P=VI\cos\phi$ | $VI$ alone is apparent power. |
| Reactive power | $Q_{\text{react}}=VI\sin\phi$ | Measured in VAR, not watts; distinct from quality factor $Q$. |
| LC oscillation | $\omega=1/\sqrt{LC}$, $\frac12CV_0^2=\frac12LI_{\max}^2$ | Ideal circuit: no resistance, no damping. |
| Transformer | $V_s/V_p=N_s/N_p$, $I_s/I_p=N_p/N_s$ | Ideal transformer; power is unchanged. |
| Transmission loss | $P_{\text{loss}}=I^2R=(P/V)^2R$ | Same power $P$ at the stated line voltage. |

<learning-block type="mistake" title="Fast sanity checks">

If an impedance comes out smaller than $R$, the reactances were combined with the wrong sign. If a step-up transformer appears to deliver more power than it receives, the current ratio was inverted. If a resonant circuit gives zero voltage across the capacitor, the cancellation of $V_L$ and $V_C$ has been confused with their individual values. If an LC frequency is quoted without the $2\pi$, it is an angular frequency mislabelled as hertz.

</learning-block>

## Section A — 10 rapid MCQs

### 1. RMS of a sine wave

A sinusoidal current has a peak value of $10\ \text{A}$. Its rms value is:

- A. $5.0\ \text{A}$
- B. $6.37\ \text{A}$
- C. $7.07\ \text{A}$
- D. $10\ \text{A}$

<details><summary>Answer</summary>

**C.** $I_{\text{rms}}=I_0/\sqrt2=10/1.414=7.07\ \text{A}$. The value $6.37\ \text{A}$ is the average magnitude over a half-cycle, not the rms value.
</details>

### 2. Phase in an inductor

In a pure inductor connected to an AC source, the current:

- A. leads the voltage by $90^\circ$
- B. lags the voltage by $90^\circ$
- C. is in phase with the voltage
- D. lags the voltage by $45^\circ$

<details><summary>Answer</summary>

**B.** From $v=L\,di/dt$, the current is the integral of a sine, which is a negative cosine: it lags by a quarter-cycle. The back emf opposes the rise of current, so the current reaches its peak after the voltage does.
</details>

### 3. Inductive reactance

The reactance of a $0.10\ \text{H}$ inductor at $50\ \text{Hz}$ is nearest to:

- A. $5.0\ \Omega$
- B. $15.7\ \Omega$
- C. $31.4\ \Omega$
- D. $62.8\ \Omega$

<details><summary>Answer</summary>

**C.** $X_L=2\pi fL=2\pi(50)(0.10)=31.4\ \Omega$.
</details>

### 4. Capacitive reactance

A $10\ \mu\text{F}$ capacitor is connected to a $100\ \text{Hz}$ source. Its reactance is nearest to:

- A. $16\ \Omega$
- B. $159\ \Omega$
- C. $1.0\ \text{k}\Omega$
- D. $3.2\ \text{k}\Omega$

<details><summary>Answer</summary>

**B.** $X_C=1/(2\pi fC)=1/[2\pi(100)(10\times10^{-6})]=159\ \Omega$.
</details>

### 5. Series resonance

In a series $LCR$ circuit at resonance, which statement is correct?

- A. The impedance is maximum.
- B. The current is minimum.
- C. Voltage and current are in phase.
- D. The capacitor voltage is zero.

<details><summary>Answer</summary>

**C.** At resonance $X_L=X_C$, so the impedance is the minimum value $R$, the current is maximum, and the phase angle is zero. The capacitor voltage is not zero; it equals the inductor voltage in magnitude and is opposite in phase.
</details>

### 6. Doubling the frequency

If the frequency of an AC source is doubled, then:

- A. $X_L$ doubles and $X_C$ halves
- B. $X_L$ halves and $X_C$ doubles
- C. both double
- D. both halve

<details><summary>Answer</summary>

**A.** $X_L=\omega L$ is proportional to $f$, while $X_C=1/(\omega C)$ is inversely proportional to $f$.
</details>

### 7. Average power in a capacitor

The average power consumed by an ideal capacitor over a full cycle is:

- A. $V_{\text{rms}}I_{\text{rms}}$
- B. $V_{\text{rms}}I_{\text{rms}}/2$
- C. zero
- D. $V_{\text{rms}}^2/X_C$

<details><summary>Answer</summary>

**C.** Voltage and current are $90^\circ$ out of phase, so $\cos\phi=0$. Energy is stored in the electric field and returned to the source each cycle; there is no net transfer.
</details>

### 8. Step-down transformer

A transformer has $1000$ primary turns and $100$ secondary turns. If the primary is at $220\ \text{V}$ rms, the secondary voltage is:

- A. $2.2\ \text{V}$
- B. $22\ \text{V}$
- C. $220\ \text{V}$
- D. $2200\ \text{V}$

<details><summary>Answer</summary>

**B.** $V_s=V_pN_s/N_p=220(100/1000)=22\ \text{V}$.
</details>

### 9. LC resonance

The resonant frequency of an LC circuit with $L=1.0\ \text{H}$ and $C=1.0\ \mu\text{F}$ is nearest to:

- A. $16\ \text{Hz}$
- B. $159\ \text{Hz}$
- C. $1.0\ \text{kHz}$
- D. $5.0\ \text{kHz}$

<details><summary>Answer</summary>

**B.** $f_0=1/(2\pi\sqrt{LC})=1/(2\pi\sqrt{1.0\times10^{-6}})=159\ \text{Hz}$.
</details>

### 10. Current at resonance

In a series $LCR$ circuit at resonance, $R=10\ \Omega$ and the rms source voltage is $100\ \text{V}$. The rms current is:

- A. $0.10\ \text{A}$
- B. $1.0\ \text{A}$
- C. $10\ \text{A}$
- D. $100\ \text{A}$

<details><summary>Answer</summary>

**C.** At resonance $Z=R=10\ \Omega$, so $I=100/10=10\ \text{A}$.
</details>

## Section B — 5 numerical-value questions

### 11. Peak current in a resistor

A $230\ \text{V}$ rms, $50\ \text{Hz}$ supply is connected across a $50\ \Omega$ resistor. Find the peak current in amperes.

<details><summary>Answer</summary>

The rms current is

$$
I_{\text{rms}}=\frac{230}{50}=4.60\ \text{A},
$$

so the peak is

$$
I_0=I_{\text{rms}}\sqrt2=4.60(1.414)=6.5\ \text{A}.
$$

The answer is approximately $6.5\ \text{A}$.
</details>

### 12. Frequency from reactance

An inductor of $0.20\ \text{H}$ has a reactance of $100\ \Omega$. Find the frequency in hertz.

<details><summary>Answer</summary>

$$
X_L=2\pi fL
\quad\Rightarrow\quad
f=\frac{X_L}{2\pi L}
=\frac{100}{2\pi(0.20)}=79.6\ \text{Hz}.
$$

The answer is approximately $80\ \text{Hz}$.
</details>

### 13. Power factor of a series circuit

A series circuit has $R=6.0\ \Omega$, $X_L=10\ \Omega$ and $X_C=2.0\ \Omega$. Find the power factor.

<details><summary>Answer</summary>

The net reactance is $X_L-X_C=8.0\ \Omega$, so

$$
Z=\sqrt{6.0^2+8.0^2}=10\ \Omega.
$$

Thus

$$
\cos\phi=\frac{R}{Z}=\frac{6.0}{10}=0.60.
$$

The answer is $0.60$, lagging, because the inductive reactance is larger.
</details>

### 14. Resonant frequency

Find the resonant frequency in hertz of a series circuit with $L=0.50\ \text{H}$ and $C=20\ \mu\text{F}$.

<details><summary>Answer</summary>

$$
LC=(0.50)(20\times10^{-6})=1.0\times10^{-5}\ \text{s}^2,
$$

so

$$
f_0=\frac{1}{2\pi\sqrt{1.0\times10^{-5}}}
=\frac{1}{2\pi(3.16\times10^{-3})}
=50.3\ \text{Hz}.
$$

The answer is approximately $50\ \text{Hz}$.
</details>

### 15. Primary current of a transformer

An ideal step-down transformer has a primary voltage of $200\ \text{V}$ and a secondary voltage of $20\ \text{V}$. The secondary current is $4.0\ \text{A}$. Find the primary current in amperes.

<details><summary>Answer</summary>

The secondary power is

$$
P_s=V_sI_s=(20)(4.0)=80\ \text{W}.
$$

For an ideal transformer $P_p=P_s$, so

$$
I_p=\frac{P_p}{V_p}=\frac{80}{200}=0.40\ \text{A}.
$$

Equivalently, $I_p=I_sV_s/V_p=4.0(20/200)=0.40\ \text{A}$.
</details>

## Section C — 3 assertion–reason questions

For each question, choose:

- **(a)** Both A and R are true, and R is the correct explanation of A.
- **(b)** Both A and R are true, but R is not the correct explanation of A.
- **(c)** A is true, but R is false.
- **(d)** A is false, but R is true.

### 16. Power in a pure inductor

**Assertion (A):** In a pure inductor the average power over a complete cycle is zero.

**Reason (R):** The current and voltage are $90^\circ$ out of phase, so the energy stored in the magnetic field during one quarter-cycle is returned to the source during another.

<details><summary>Answer</summary>

**(a).** Both statements are true. The phase difference makes $\cos\phi=0$, so $P=VI\cos\phi=0$. The energy argument is the physical explanation: the inductor stores $\frac12Li^2$ and later returns it, with no net dissipation.
</details>

### 17. Current at resonance

**Assertion (A):** At resonance in a series $LCR$ circuit, the current is maximum.

**Reason (R):** At resonance the inductive and capacitive reactances cancel, leaving the impedance equal to $R$.

<details><summary>Answer</summary>

**(a).** Both are true, and R explains A. Since $Z=\sqrt{R^2+(X_L-X_C)^2}$, the condition $X_L=X_C$ gives the smallest possible impedance, $Z=R$. The source voltage is fixed, so the current $I=V/Z$ is largest at that point.
</details>

### 18. Transformer on DC

**Assertion (A):** A transformer can be used to step up the voltage of a DC supply.

**Reason (R):** A transformer works on the principle of mutual induction, which requires a changing magnetic flux.

<details><summary>Answer</summary>

**(d).** The assertion is false and the reason is true. A steady DC primary current produces a steady flux, so $d\Phi/dt=0$ and the secondary emf is zero. The primary may also draw a large current because only the small winding resistance limits it.
</details>

## Section D — 2 matching and multi-statement questions

### 19. Matching behaviour

Match each element in Column I with its behaviour in Column II.

| Column I | Column II |
| --- | --- |
| A. Pure resistor | (i) Current leads voltage by $\pi/2$ |
| B. Pure inductor | (ii) Current lags voltage by $\pi/2$ |
| C. Pure capacitor | (iii) Power factor is $1$ at every frequency |
| D. Series $LCR$ at resonance | (iv) $X_L=X_C$ |

<details><summary>Answer</summary>

**A–(iii), B–(ii), C–(i), D–(iv).**

A resistor has no reactance, so voltage and current are always in phase and the power factor is $1$. An inductor’s current lags by $90^\circ$; a capacitor’s current leads by $90^\circ$. In a series $LCR$ circuit, resonance is defined by the cancellation $X_L=X_C$, which makes the impedance purely resistive at that one frequency.
</details>

### 20. Below resonance

For a series $LCR$ circuit driven at a frequency **below** its resonant frequency, which statements are correct?

I. $X_C>X_L$

II. The current leads the applied voltage.

III. The impedance is greater than $R$.

IV. The power factor is zero.

- A. I and II only
- B. I, II and III only
- C. II and III only
- D. I and IV only

<details><summary>Answer</summary>

**B.** Below resonance, $X_C=1/(\omega C)$ is larger than $X_L=\omega L$, so the circuit is capacitive and the current leads. The impedance

$$
Z=\sqrt{R^2+(X_L-X_C)^2}
$$

exceeds $R$ whenever $X_L\neq X_C$, so III is true. The power factor is $R/Z$, which is positive but less than $1$; it is not zero, so IV is false.
</details>

## Review by error, not by score

| If you missed… | Revisit | Then retry |
| --- | --- | --- |
| 1 or 11 | AC basics, phasors and resistors | Convert peak to rms before using any power formula. |
| 2, 3, 4, 6 or 12 | Inductors and capacitors in AC | Write the reactance formula and check the frequency dependence. |
| 5, 10, 13, 14, 17, 19 or 20 | Series LCR circuits and resonance | Draw the impedance triangle before calculating. |
| 7 or 16 | Power factor and LC oscillations | Separate average power from immediate energy exchange. |
| 8, 15 or 18 | Transformers | Check the turns ratio direction and whether the supply is AC. |
| 9 | Power factor and LC oscillations | Use $f=1/(2\pi\sqrt{LC})$, not $1/\sqrt{LC}$. |

<learning-block type="recap" title="Ready for the exam?">

Aim for at least **17 correct out of 20** in 50 minutes, with a written method choice for every question. Questions you answer correctly but cannot justify are revision targets, not mastered topics. The most common avoidable loss in this chapter is not a hard calculation but a reversed ratio or a missing $2\pi$.

</learning-block>
