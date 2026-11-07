## Your study plan for today

Waves chapter concepts form one connected machine: frequency from the source, speed from the medium, phase from geometry, superposition everywhere. A focused pass takes about **2 hours 55 minutes**, plus a break:

1. **Wave basics** — 20 min
2. **The progressive wave equation** — 22 min
3. **Speed of waves in different media** — 22 min
4. **Superposition and reflection** — 20 min
5. **Standing waves on strings and in pipes** — 24 min
6. **Beats** — 18 min
7. **The Doppler effect** — 22 min
8. **This mastery check** — 25 min

After each lesson, close it and re-derive its key formula from a blank page: $v=f\lambda$, $v=\sqrt{T/\mu}$, $v=\sqrt{\gamma p/\rho}$, $A_r=\sqrt{A_1^2+A_2^2+2A_1A_2\cos\delta}$, $f_n$ for strings and both pipe types, $|f_1-f_2|$, and the Doppler ratio. If you cannot rebuild one from first principles, that is the lesson to revisit. Then attempt this check with answers hidden, using $v=340\ \text{m/s}$ for sound in air unless a question says otherwise.

## First choose the tool

| Clue in the question | Start with |
| --- | --- |
| A wave function $y(x,t)$ is given | Read $A$, $k$, $\omega$; then $\lambda=2\pi/k$, $f=\omega/2\pi$, $v=\omega/k$ |
| "How far apart in phase?" | $\Delta\phi=2\pi\Delta x/\lambda$ (or $\omega\Delta t$ for one point) |
| "Maximum speed of a particle" | $u_p=\omega A$, via $\partial y/\partial t$ — not the wave speed |
| Tension and linear density given | $v=\sqrt{T/\mu}$, then standing-wave frequencies from $f_n=nv/2L$ |
| Gas conditions or temperature given | $v=\sqrt{\gamma p/\rho}$; with temperature, $v\propto\sqrt{T}$ |
| Two points a wavelength-fraction apart, interference | Path difference → constructive $n\lambda$, destructive $(n+\frac12)\lambda$ |
| Resonance lengths of a tube | Closed: $\lambda/4,\,3\lambda/4,\dots$; open: $\lambda/2,\ \lambda,\dots$; add $0.6r$ per open end |
| Two forks, "beats" | $|f_1-f_2|$; resolve the side with wax (lowers $f$) or a controlled retune |
| Source or observer in motion | Doppler: $f'=f(v+v_o)/(v+v_s)$, positive direction listener → source |
| "Loud and quiet zones" in space | Two-source interference; energy is redistributed, never lost |

## Mastery check

Try each without looking at the answer first.

### 1. Straight from the definition

A note of $170\ \text{Hz}$ travels in air at $340\ \text{m/s}$. Find its wavelength and period.

<details><summary>Answer and reasoning</summary>

$$
\lambda=\frac{v}{f}=\frac{340}{170}=2.0\ \text{m},\qquad
T=\frac{1}{f}=\frac{1}{170}\approx5.9\times10^{-3}\ \text{s}.
$$

Both definitions in one line — a warm-up question worth seconds in a real paper.
</details>

### 2. Reading a wave function

A wave is $y=0.04\sin(2\pi x+200\pi t)$ m. Find its direction, speed, frequency, and the phase difference between two particles $0.25\ \text{m}$ apart.

<details><summary>Answer and reasoning</summary>

Same signs on the $x$ and $t$ terms: travel toward $-x$. With $k=2\pi$, $\omega=200\pi$:

$$
v=\frac{\omega}{k}=100\ \text{m/s},\qquad
f=\frac{\omega}{2\pi}=100\ \text{Hz},\qquad
\lambda=1.0\ \text{m}.
$$

Phase difference: $\Delta\phi=k\Delta x=2\pi(0.25)=\pi/2$ — a quarter cycle.
</details>

### 3. String speed

A string of linear density $0.5\ \text{g/m}$ is stretched to $20\ \text{N}$. Find the transverse wave speed.

<details><summary>Answer and reasoning</summary>

$$
v=\sqrt{\frac{T}{\mu}}=\sqrt{\frac{20}{5\times10^{-4}}}=\sqrt{4.0\times10^{4}}=200\ \text{m/s}.
$$

Convert $\mu$ to kg/m first — $0.5\ \text{g/m}$ is $5\times10^{-4}\ \text{kg/m}$, the step most errors hide in.
</details>

### 4. Harmonics of a string

A string fixed at both ends, length $0.50\ \text{m}$, carries waves at $200\ \text{m/s}$. Find its fundamental frequency, and the frequency and wavelength of the third harmonic.

<details><summary>Answer and reasoning</summary>

$$
f_1=\frac{v}{2L}=\frac{200}{1.0}=200\ \text{Hz},\qquad
f_3=3f_1=600\ \text{Hz},
$$

$$
\lambda_3=\frac{2L}{3}=\frac{1.0}{3}\approx0.33\ \text{m}.
$$

Three loops fit between the end nodes; $v=f_3\lambda_3=200\ \text{m/s}$ cross-checks.
</details>

### 5. Closed-pipe resonance

A tube closed at one end resonates loudly at $340\ \text{Hz}$ with sound speed $340\ \text{m/s}$. Find its length, and the next-higher resonance frequency it supports.

<details><summary>Answer and reasoning</summary>

Fundamental: $\lambda_1=4L$, so $L=\lambda_1/4=(340/340)/4=0.25\ \text{m}$. A closed pipe supports only odd harmonics; the next is the third:

$$
f_3=3f_1=1020\ \text{Hz}.
$$

Any temptation to answer $680\ \text{Hz}$ as "the second harmonic" betrays the closed-pipe rule — that frequency cannot exist in this tube.
</details>

### 6. Open pipe comparison

For the same length $0.25\ \text{m}$, find the fundamental of an *open* pipe. What is the ratio to the closed-pipe answer of Question 5?

<details><summary>Answer and reasoning</summary>

$$
f_1=\frac{v}{2L}=\frac{340}{0.50}=680\ \text{Hz}.
$$

Exactly twice the closed-pipe fundamental: a $2:1$ ratio (an octave), because the open pipe fits a half-wavelength where the closed pipe squeezes in a quarter.
</details>

### 7. The wax test

A fork X produces $6$ beats per second against a $512\ \text{Hz}$ standard. Loading X with wax drops the beat rate to $4$ per second. Find the frequency of X, and justify the branch you choose.

<details><summary>Answer and reasoning</summary>

$X=506$ or $518\ \text{Hz}$. Wax lowers X's frequency. From $506$, lowering widens the gap (beats would rise); from $518$, lowering closes the gap (beats fall, reaching $4$ at $516\ \text{Hz}$). Observed beats fell, so

$$
X=518\ \text{Hz}.
$$

The wax observation, not the beat count, is what selects between the two candidates.
</details>

### 8. Doppler, both moving

A $600\ \text{Hz}$ siren approaches a cyclist head-on at $20\ \text{m/s}$ while the cyclist rides toward it at $20\ \text{m/s}$ ($v=340\ \text{m/s}$). Find the heard frequency.

<details><summary>Answer and reasoning</summary>

Both approach, so both factors raise $f'$:

$$
f'=600\times\frac{340+20}{340-20}=600\times\frac{360}{320}=675\ \text{Hz}.
$$

Twelve and a half per cent up, from the compound of roughly $+6\%$ (source) and $+6\%$ (observer).
</details>

### 9. The pass-by drop

A car horn of $360\ \text{Hz}$ passes a stationary pedestrian at $20\ \text{m/s}$ ($v=340\ \text{m/s}$). Find the pitch heard just before and just after passing, and the drop across the pass.

<details><summary>Answer and reasoning</summary>

Before (approaching):

$$
f'=360\times\frac{340}{320}=382.5\ \text{Hz}.
$$

After (receding):

$$
f'=360\times\frac{340}{360}=340\ \text{Hz}.
$$

Drop $=42.5\ \text{Hz}$. The two asymptotes sit on opposite sides of $360$; the total swing exceeds the single-side shift because both shifts pull the same way across the pass.
</details>

### 10. Interference with unequal amplitudes

Two coherent waves of intensities $I$ and $4I$ overlap. Find the maximum and minimum intensities and their ratio, and explain why energy is not lost.

<details><summary>Answer and reasoning</summary>

Amplitudes scale as $\sqrt{I}$: $1$ and $2$ units. Maximum amplitude $3$, so $I_{\max}=9I$; minimum amplitude $1$, so $I_{\min}=I$; ratio $9:1$.

The minimum is *not zero* because unequal amplitudes cannot cancel completely. Energy is conserved across the pattern: what the quiet zones "lose" reappears, amplified by the interference term, in the loud zones. Interference redistributes energy in space; it destroys none.
</details>

## Self-check

You are ready for the timed JEE set when you can:

- read amplitude, wavelength, frequency, speed and direction straight out of $y=A\sin(kx\pm\omega t+\phi)$;
- convert any path difference into a phase difference, and any phase difference into constructive/destructive;
- state why Newton's sound-speed guess failed and repair it with Laplace's $\gamma$;
- derive the harmonic ladder of a fixed string and of closed and open pipes, including which harmonics each one omits;
- run the wax test: predict beat-rate changes in both branches and pin down the unknown frequency;
- apply the Doppler formula with a stated sign ruler, and know when the observer case and source case differ;
- distinguish particle speed ($\omega A$, varying) from wave speed ($\omega/k$, constant) without hesitation;
- catch your own wrong answer by checking units, signs and limiting cases.

If any item feels shaky, revisit the named module and redo its try-questions with the answers hidden. The next module is a 50-minute timed paper — go there only when this list reads clean.
