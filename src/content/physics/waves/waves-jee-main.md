## JEE Main sprint: how to use this set

This is a **50-minute, no-notes** paper covering the whole Waves chapter: the wave equation, speeds in media, superposition, standing waves, beats and the Doppler effect. Aim for about 15 minutes on Section A, 12 on Section B, 12 on Section C and 11 on Section D. If a question resists for 90 seconds, mark it and move on — waves questions are short once the right tool is chosen, so cannot-afford-to-stall applies doubly here.

Take the speed of sound in air as $340\ \text{m/s}$ unless a question states otherwise; there is little need for $g=10\ \text{m/s}^2$ in this chapter, but use it where a question invokes weight or tension through a hanging mass.

Before any calculation, name the tool: read the wave function, $v=\sqrt{T/\mu}$ or $\sqrt{\gamma p/\rho}$, path difference, harmonic ladder, beat difference, or the Doppler ratio. Section B has no options to eliminate — the answer must be computed, so keep every intermediate value in SI units.

## Conditions sheet

| Situation | Start with | Check before using it |
| --- | --- | --- |
| A wave function $y(x,t)$ is given | Read $A$, $k$, $\omega$; $\lambda=2\pi/k$, $f=\omega/2\pi$, $v=\omega/k$ | Signs of $kx$ and $\omega t$ fix the direction of travel |
| "Phase difference between two points" | $\Delta\phi=2\pi\Delta x/\lambda$ | Same wave, same medium, same instant |
| "Speed of a particle" | $\omega A$ from $\partial y/\partial t$ | This varies with time; wave speed $\omega/k$ does not |
| Tension and linear density given | $v=\sqrt{T/\mu}$ | Tension in N, $\mu$ in kg/m |
| Gas at a stated temperature | $v=\sqrt{\gamma p/\rho}$ or $v\propto\sqrt{T}$ | Kelvin in the square-root law; Celsius only in $331+0.61t$ |
| Two coherent waves overlap | $A_r=\sqrt{A_1^2+A_2^2+2A_1A_2\cos\delta}$ | Convert path difference to $\delta$ first |
| A string fixed at both ends | $f_n=nv/2L$, all harmonics | Nodes at both ends are compulsory |
| A pipe closed at one end | $f_n=(2n-1)v/4L$ | Odd harmonics only |
| A pipe open at both ends | $f_n=nv/2L$ | Add $0.6r$ per open end if radius is given |
| Two sources, "beats" | $f_{\text{beat}}=\lvert f_1-f_2\rvert$ | Wax lowers a fork's frequency |
| Source or observer moving | $f'=f\dfrac{v+v_o}{v+v_s}$ | Positive direction: listener toward source, at the instant of emission |

<learning-block type="mistake" title="The fastest sanity checks">

Every heard frequency must lie above the emitted one for mutual approach and below it for mutual recession — check before computing. A "third harmonic of a closed pipe" must be an odd multiple of its fundamental; a particle speed above the wave speed by orders of magnitude should be double-checked against $\omega A$. A beat rate claimed outside the audible throb range (about $10\ \text{Hz}$) is a red flag.

</learning-block>

## Section A — 10 rapid MCQs

### 1. Reading a wave function

A sound wave in air is $y=0.01\sin(680\pi t-2\pi x)\ \text{m}$. Its speed is:

- A. $170\ \text{m/s}$
- B. $340\ \text{m/s}$
- C. $680\ \text{m/s}$
- D. $340\pi\ \text{m/s}$

<details><summary>Answer</summary>

**B.** $k=2\pi\ \text{rad/m}$, $\omega=680\pi\ \text{rad/s}$, so $v=\omega/k=680\pi/2\pi=340\ \text{m/s}$ (equivalently $f=340\ \text{Hz}$, $\lambda=1\ \text{m}$, $f\lambda=340$).
</details>

### 2. Two opposite waves

Two waves of equal amplitude and frequency travel in opposite directions through the same medium. Their superposition produces:

- A. a single wave of double the speed
- B. a standing wave
- C. a wave of double the frequency
- D. complete silence everywhere

<details><summary>Answer</summary>

**B.** Adding $A\sin(kx-\omega t)$ and $A\sin(kx+\omega t)$ gives $2A\sin kx\cos\omega t$: amplitude fixed by position, shared time dependence — a standing wave with a fixed node–antinode pattern.
</details>

### 3. Harmonic counting

A string fixed at both ends sounds its fundamental at $150\ \text{Hz}$. Its third harmonic is:

- A. $75\ \text{Hz}$
- B. $300\ \text{Hz}$
- C. $450\ \text{Hz}$
- D. $600\ \text{Hz}$

<details><summary>Answer</summary>

**C.** A fixed string supports all harmonics, $f_n=nf_1$: $f_3=3\times150=450\ \text{Hz}$.
</details>

### 4. The closed pipe skips

A pipe closed at one end has a fundamental of $220\ \text{Hz}$. The next-higher resonance it can support is:

- A. $330\ \text{Hz}$
- B. $440\ \text{Hz}$
- C. $550\ \text{Hz}$
- D. $660\ \text{Hz}$

<details><summary>Answer</summary>

**D.** A closed pipe supports only odd harmonics: $f_1=220\ \text{Hz}$, then $3f_1=660\ \text{Hz}$. The even multiples $440$ "second harmonic" does not exist in this tube.
</details>

### 5. Beat counting

Tuning forks of $250\ \text{Hz}$ and $254\ \text{Hz}$ are sounded together. The number of beats per second is:

- A. $2$
- B. $4$
- C. $8$
- D. $252$

<details><summary>Answer</summary>

**B.** $f_{\text{beat}}=\lvert254-250\rvert=4\ \text{Hz}$. The tone itself sits at the average, $252\ \text{Hz}$ — that number is the pitch, not the beat rate.
</details>

### 6. Observer on the move

An observer approaches a stationary source at one-fifth the speed of sound. The heard frequency exceeds the emitted frequency by:

- A. $20\%$
- B. $25\%$
- C. $5\%$
- D. $80\%$

<details><summary>Answer</summary>

**A.** With only the observer moving, $f'=f\dfrac{v+v_o}{v}=f\left(1+\tfrac15\right)=1.2f$: a $20\%$ increase. (Beware option B: $25\%$ is the *source*-moving answer to a first approximation, $\frac{1}{1-1/5}=\frac54$; observer and source shifts differ.)
</details>

### 7. Phase across space

Two particles on one sinusoidal wave are a quarter-wavelength apart. Their phase difference is:

- A. $\pi$
- B. $\pi/2$
- C. $\pi/4$
- D. $2\pi$

<details><summary>Answer</summary>

**B.** $\Delta\phi=2\pi\Delta x/\lambda=2\pi(\lambda/4)/\lambda=\pi/2$ — a quarter cycle.
</details>

### 8. Tension scaling

The tension in a stretched string is quadrupled. The transverse wave speed is multiplied by:

- A. $4$
- B. $2$
- C. $\sqrt2$
- D. $16$

<details><summary>Answer</summary>

**B.** $v=\sqrt{T/\mu}$, so $v\propto\sqrt{T}$: quadrupling $T$ doubles $v$ ($\mu$ unchanged).
</details>

### 9. Newton versus Laplace

Newton's formula for the speed of sound in a gas fails because it assumes the compressions and rarefactions are:

- A. adiabatic
- B. isothermal
- C. isobaric
- D. isochoric

<details><summary>Answer</summary>

**B.** Newton assumed temperature-steady (isothermal) changes and got $\sqrt{p/\rho}\approx280\ \text{m/s}$ for air — about $16\%$ low. Sound cycles are fast and effectively **adiabatic**; Laplace's correction $v=\sqrt{\gamma p/\rho}$ recovers the measured value.
</details>

### 10. What air refuses to carry

A mechanical wave that **cannot** propagate through air is:

- A. a longitudinal sound wave
- B. a transverse mechanical wave
- C. an infrasonic wave
- D. an ultrasonic wave

<details><summary>Answer</summary>

**B.** A transverse mechanical wave needs shear rigidity, which gases lack; sound in air is always longitudinal. Pitch (options C, D) does not change the bookkeeping — infrasound and ultrasound travel just as longitudinal waves do.
</details>

## Section B — 5 numerical-value questions

### 11. Particle versus wave speed

On a stretched string, $y=5\times10^{-3}\sin(600\pi t-\pi x)\ \text{m}$. Find the maximum speed of a string particle (in m/s).

<details><summary>Answer</summary>

$$
u_{p,\max}=\omega A=(600\pi)(5\times10^{-3})=3\pi\approx9.42\ \text{m/s}.
$$

The wave itself moves at $\omega/k=600\pi/\pi=600\ \text{m/s}$ — a reminder that particle speed and wave speed are different quantities.
</details>

### 12. Third harmonic from the raw data

A string of length $0.50\ \text{m}$ and linear density $20\ \text{g/m}$ is stretched by $32\ \text{N}$. Find the frequency of its third harmonic (in Hz).

<details><summary>Answer</summary>

$$
v=\sqrt{\frac{T}{\mu}}=\sqrt{\frac{32}{0.020}}=\sqrt{1600}=40\ \text{m/s},
\qquad
f_3=\frac{3v}{2L}=\frac{3\times40}{1.0}=120\ \text{Hz}.
$$

Fundamental $f_1=40\ \text{Hz}$; the fixed string carries every multiple.
</details>

### 13. Closed-pipe fundamental

A pipe closed at one end has length $0.25\ \text{m}$. Taking $v=340\ \text{m/s}$, find its fundamental frequency (in Hz).

<details><summary>Answer</summary>

$$
f_1=\frac{v}{4L}=\frac{340}{4\times0.25}=\frac{340}{1.0}=340\ \text{Hz}.
$$

A quarter-wavelength tube of $25\ \text{cm}$ matches a one-metre wave.
</details>

### 14. The wax test, numerically

A fork X beats $6$ times per second against a standard $512\ \text{Hz}$ fork. Adding wax to X reduces the beat rate to $4$ per second. Find the frequency of X (in Hz).

<details><summary>Answer</summary>

The beat count gives $\lvert X-512\rvert=6$, so $X=506$ or $518\ \text{Hz}$. Wax **lowers** X. From $506$ the gap would widen (beats rise); from $518$ the gap closes (beats fall, hitting $4$ at $516\ \text{Hz}$). The observed fall selects

$$
X=518\ \text{Hz}.
$$
</details>

### 15. Doppler: approaching source

A source of $320\ \text{Hz}$ approaches a stationary observer at $20\ \text{m/s}$ ($v=340\ \text{m/s}$). Find the frequency heard (in Hz).

<details><summary>Answer</summary>

$$
f'=f\frac{v}{v-v_s}=320\times\frac{340}{320}=340\ \text{Hz}.
$$

Neat check: the shift of $20\ \text{Hz}$ equals $v_s/\lambda'$, with the *shifted* wavelength $\lambda'=(v-v_s)/f=320/320=1.0\ \text{m}$ — the source swallows one extra crest per second for every metre it closes.
</details>

## Section C — 3 assertion–reason questions

*Choose one option for each:*

- **(a)** Both A and R are true and R is the correct explanation of A
- **(b)** Both A and R are true but R is NOT the correct explanation of A
- **(c)** A is true but R is false
- **(d)** A is false but R is true

### 16. Standing-wave phases

**Assertion (A):** In a standing wave, all particles between two adjacent nodes pass through their mean positions at the same instant.

**Reason (R):** A standing wave transports no net energy.

<details><summary>Answer</summary>

**(b).** Both statements are true. But the in-phase motion inside one nodal span follows from the separated form $y=2A\sin kx\cos\omega t$ — every point shares the same $\cos\omega t$ — not from the energy argument. Zero net energy transport is a *consequence* of the fixed pattern, not the cause of the common phase. So R does not explain A.
</details>

### 17. Temperature and sound

**Assertion (A):** The speed of sound in air increases as temperature rises.

**Reason (R):** At constant pressure, an ideal gas becomes less dense as temperature rises, while $\gamma$ and $p$ are unchanged, so $\gamma p/\rho$ increases.

<details><summary>Answer</summary>

**(a).** $v=\sqrt{\gamma p/\rho}$, and with $p$ fixed, $\rho\propto1/T$; the growing $\gamma p/\rho\propto T$ yields $v\propto\sqrt T$. R is exactly the mechanism behind A.
</details>

### 18. Transverse waves in air

**Assertion (A):** A transverse mechanical wave can propagate through air.

**Reason (R):** Gases have negligible shear rigidity.

<details><summary>Answer</summary>

**(d).** The reason is true — a gas pushes back on compression but not on shear — and that is precisely why a transverse mechanical wave **cannot** cross air: the assertion is false. Sound in air is longitudinal; only electromagnetic waves travel transversely, and they need no material medium.
</details>

## Section D — 2 matching / multi-statement questions

### 19. Match the pairs

| List I | List II |
| --- | --- |
| P. Separation between successive nodes of a standing wave | 1. $\lambda/2$ |
| Q. Fundamental wavelength of a pipe closed at one end | 2. $4L$ |
| R. Speed of a transverse wave on a stretched string | 3. $A$ |
| S. Resultant amplitude when two coherent waves, each of amplitude $A$, meet with a $120^\circ$ phase difference | 4. $\sqrt{T/\mu}$ |

Match each List-I item with the correct List-II item.

<details><summary>Answer</summary>

**P–1.** Nodes sit at $x=n\lambda/2$: successive nodes are $\lambda/2$ apart.

**Q–2.** A closed pipe fits a quarter-wavelength in the fundamental: $\lambda_1=4L$.

**R–4.** $v=\sqrt{T/\mu}$.

**S–3.** $A_r=2A\cos(\delta/2)=2A\cos60^\circ=2A\times\tfrac12=A$ — the interference partially cancels, halving the amplitude.

So: P–1, Q–2, R–4, S–3.
</details>

### 20. Third harmonic audit

A string of length $L$, fixed at both ends, vibrates in its third harmonic. Evaluate each statement:

**I.** The string divides into three vibrating loops.

**II.** Its frequency is $3v/2L$.

**III.** The midpoint of the string is a node.

**IV.** The interior nodes lie at $x=L/3$ and $x=2L/3$.

<details><summary>Answer</summary>

**I — true.** The $n$th harmonic fits $n$ half-wavelength loops: three here.

**II — true.** $f_n=nv/2L$, so $f_3=3v/2L$.

**III — false.** Nodes sit at $x=0,\ L/3,\ 2L/3,\ L$; the midpoint $x=L/2$ is the **central antinode**, swinging with full amplitude (the centre is an antinode for every odd harmonic).

**IV — true.** Those are exactly the two interior nodes; $n-1=2$ of them.

The correct set is **I, II and IV**.
</details>

## Review by error, not by score

| If you missed… | Revisit | Then retest yourself on |
| --- | --- | --- |
| 1, 7 or 11 | The progressive wave equation | Read $A,k,\omega$ cold; separate particle speed ($\omega A$) from wave speed ($\omega/k$). |
| 2 or 10 | Wave basics / Superposition and reflection | Direction-by-sign rule; what a medium must supply, and the shear gap in gases. |
| 8, 9 or 12 | Speed of waves in different media | $v=\sqrt{T/\mu}$ scaling; the $\gamma$ repair of Newton's sound speed. |
| 3, 4, 13, 19 or 20 | Standing waves on strings and in pipes | Node–antinode bookkeeping; which harmonics each boundary allows. |
| 5 or 14 | Beats | The wax route from a beat count to an unknown frequency. |
| 6 or 15 | The Doppler effect | Write the sign ruler before arithmetic; observer and source shifts differ. |
| 16 or 17-style reasoning slips | Standing waves / Speed of waves in different media | Distinguish what follows from the pattern ($2A\sin kx\cos\omega t$) from what follows from energy; name the assumption behind $v$. |

Item counts to beat: at least $15$ of $20$ correct with a stated tool for each. Anything solved correctly but justified wrongly counts as a revision target, not a pass.

<learning-block type="recap" title="Where this leaves Waves">

A clean run through this paper closes the oscillations-and-waves arc of the syllabus: oscillators were the last chapter, waves are this one, and the review module plus this set are the two layers of proof. Bank the persisted error list — waves questions in the real paper reuse exactly these tools under a pressure deficit.

</learning-block>
