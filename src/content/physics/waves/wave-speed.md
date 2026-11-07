## Speed is negotiated by the medium

Hand the same disturbance to a plucked bass string, a lungful of air and a steel rail, and three very different speeds come out. The wave equation of the last lesson supplied the *form*: $v=\omega/k$. This lesson supplies the *physics*: why each medium picks the speed it does. In every case the answer has the same skeleton — a restoring effect divided by an inertial effect, square-rooted.

## 1. Transverse waves on a stretched string

For a string pulled taut with tension $T$ and having mass per unit length $\mu$, a transverse pulse travels at

$$
v=\sqrt{\frac{T}{\mu}}.
$$

Why this shape? Restore the string element and you must pull it back into line — the transverse restoring force scales with $T$; resist the motion and you must accelerate the string's mass — that scales with $\mu$. Dimensional analysis already hints at the answer: $\sqrt{(\text{N})/(\text{kg/m})}=\sqrt{\text{m}^2/\text{s}^2}=\text{m/s}$, a speed. The full derivation from Newton's second law on a curved string element confirms it.

Three quantitative consequences, all worth testing on exam problems:

- $v\propto\sqrt{T}$: quadruple the tension and the speed doubles.
- $v\propto1/\sqrt{\mu}$: a heavier string is a slower carrier.
- Frequency and wavelength are spectators. If a machine shakes one end at $f$, the wave arrives with the same $f$ but a wavelength $\lambda=v/f$ that changes as $T$ or $\mu$ changes.

<learning-block type="example" title="Worked example: a guitar-class string">

A string of linear density $10\ \text{g/m}$ is stretched with a tension of $64\ \text{N}$. Find the transverse wave speed, and the new speed if the tension is raised to $81\ \text{N}$.

$$
\mu=0.010\ \text{kg/m},\qquad
v=\sqrt{\frac{64}{0.010}}=\sqrt{6400}=80\ \text{m/s}.
$$

Raising the tension is a ratio problem — the mass per length is untouched:

$$
v' = 80\sqrt{\frac{81}{64}}=80\times\frac{9}{8}=90\ \text{m/s}.
$$

Sanity check: $64/81=0.79$, whose square root is $0.889\approx9/8$. A tuning peg raising tension raises the wave speed, which is precisely why the pitch of a tightened string rises (as standing-wave frequencies $f_n=nv/2L$ will show two lessons ahead).

</learning-block>

## 2. Sound in gases: Newton's guess and Laplace's correction

For a fluid, the same Newton's-law argument with pressure replacing tension gives, for a longitudinal wave,

$$
v=\sqrt{\frac{B}{\rho}},
$$

where $B$ is the appropriate elastic modulus (bulk modulus) and $\rho$ the density.

**Newton's version.** Newton treated the compressions and rarefactions of a sound wave as slow, temperature-steady (isothermal) changes and wrote $v=\sqrt{p/\rho}$. For air at $0\,^\circ\text{C}$, with $p=1.013\times10^{5}\ \text{Pa}$ and $\rho=1.29\ \text{kg/m}^3$,

$$
v=\sqrt{\frac{1.013\times10^{5}}{1.29}}\approx280\ \text{m/s}.
$$

Experiments said about $330\ \text{m/s}$ — a stubborn 16 per cent gap. Newton's **assumption** was wrong, not his dynamics.

**Laplace's correction.** Sound oscillations are fast: compressed air warms, rarefied air cools, and the heat has no time to leak away within one cycle. The process is effectively **adiabatic**, for which the bulk modulus is $B=\gamma p$ ($\gamma$ = ratio of specific heats, about $1.4$ for a diatomic gas like air). Hence

$$
v=\sqrt{\frac{\gamma p}{\rho}}.
$$

For air at $0\,^\circ\text{C}$:

$$
v=\sqrt{1.4\times\frac{1.013\times10^{5}}{1.29}}=\sqrt{1.097\times10^{5}}\approx331\ \text{m/s},
$$

in excellent agreement with measurement. The moral: getting the right formula is only half the work — naming the neglected assumption is the other half.

## 3. Temperature and humidity

Rewrite Laplace's result using $p=\rho RT/M$ (ideal gas, molar mass $M$): the densities cancel and

$$
v=\sqrt{\frac{\gamma RT}{M}}.
$$

So for a given gas, $v\propto\sqrt{T}$ in **kelvin**, independent of pressure. In Celsius, air obeys the handy approximation

$$
v\approx331+0.61\,t\ \ \text{m/s}\quad(t\ \text{in}\ ^\circ\text{C}),
$$

about $340\ \text{m/s}$ at room temperature — the value used throughout this chapter's practice sets. Humid air is *less* dense than dry air ($M$ falls), so sound travels very slightly faster in moist air: the humidity correction acts through $M$, not through any special effect.

## 4. Speeds in liquids and solids

The same modulus-over-density skeleton by medium:

| Medium | Modulus used | Formula | Typical value |
| --- | --- | --- | --- |
| Gas | $\gamma p$ (adiabatic) | $v=\sqrt{\gamma p/\rho}$ | $\approx340\ \text{m/s}$ (air, room temperature) |
| Liquid | bulk modulus $B$ | $v=\sqrt{B/\rho}$ | $\approx1500\ \text{m/s}$ (water) |
| Solid rod (longitudinal) | Young's modulus $Y$ | $v=\sqrt{Y/\rho}$ | $\approx5000\ \text{m/s}$ (steel) |

For a long solid rod the longitudinal speed is $\sqrt{Y/\rho}$; for a bulk solid other moduli enter (shear and bulk terms), which is why earthquake seismology distinguishes P (compressional) from S (shear) waves that travel at different speeds.

Worked check for steel: $Y=2.0\times10^{11}\ \text{Pa}$, $\rho=7.8\times10^{3}\ \text{kg/m}^3$, so $v=\sqrt{2.0\times10^{11}/7.8\times10^{3}}\approx5.1\times10^{3}\ \text{m/s}$. A tap on one end of a kilometre-long rail is heard at the far end through the rail well before it arrives through the air.

## 5. What does not change the speed

- **Amplitude (loudness) does not.** For small disturbances, $v$ depends on medium properties only. Very large blast amplitudes do bend this rule — an advanced, non-linear effect.
- **Frequency (pitch) does not.** High and low notes launched together arrive together; that is why an orchestra holds together at the back of a hall.
- **Crossing into a new medium** changes $v$ (and $\lambda$), but the **frequency is preserved** because the boundary must move in step with both media.

<learning-block type="mistake" title="Speed errors that cost marks">

- **Using $v=\sqrt{p/\rho}$ for sound in gases.** Newton's isothermal formula is historically important and numerically wrong. Use $\gamma$, i.e. $v=\sqrt{\gamma p/\rho}$.
- **Feeding Celsius into $v=\sqrt{\gamma RT/M}$.** $T$ there is in kelvin. Only the linear rule $v\approx331+0.61t$ is calibrated for degrees Celsius.
- **Expecting frequency to change when the medium changes.** The source sets $f$; the medium sets $v$ and $\lambda$.
- **Weighing density alone in $v=\sqrt{B/\rho}$.** Steel is denser than air yet far faster for sound, because its modulus $Y$ is larger by a factor of about $10^6$ while $\rho$ is larger by only $10^3$–$10^4$. Both slots of the fraction matter.

</learning-block>

## Try it yourself

**A.** A string carries transverse waves at $80\ \text{m/s}$ at a certain tension. The tension is doubled. Find the new speed.

<details><summary>Show the reasoning</summary>

Since $v\propto\sqrt{T}$,

$$
v' = 80\sqrt{2}\approx113\ \text{m/s}.
$$

The speed grows by only 41 per cent for a doubling of tension — square roots flatten growth.
</details>

**B.** Take the speed of sound in air at $0\,^\circ\text{C}$ as $331\ \text{m/s}$. Estimate it in hydrogen at the same temperature ($M_{\text{air}}\approx29\ \text{g/mol}$, $M_{\text{H2}}\approx2\ \text{g/mol}$, similar $\gamma$).

<details><summary>Show the reasoning</summary>

At fixed temperature, $v=\sqrt{\gamma RT/M}\propto1/\sqrt{M}$:

$$
v_{\text{H2}}=331\sqrt{\frac{29}{2}}=331\times3.81\approx1260\ \text{m/s}.
$$

Light molecules are fast responders; the measured value for hydrogen near $1270\ \text{m/s}$ confirms the estimate.
</details>

**C.** A sound wave of frequency $300\ \text{Hz}$ passes from air ($v=340\ \text{m/s}$) into water ($v\approx1480\ \text{m/s}$). State what happens to its frequency and wavelength.

<details><summary>Show the reasoning</summary>

Frequency is fixed by the source: still $300\ \text{Hz}$. The wavelength rescales with speed:

$$
\lambda_{\text{water}}=\frac{1480}{300}\approx4.9\ \text{m}
\quad\text{against}\quad
\lambda_{\text{air}}=\frac{340}{300}\approx1.1\ \text{m}.
$$

The wavelength grows in the same ratio as the speed, about $4.4$ times.
</details>

## Remember

- Strings: $v=\sqrt{T/\mu}$ — tension over mass-per-length, square-rooted.
- Gases: $v=\sqrt{\gamma p/\rho}=\sqrt{\gamma RT/M}$ — Laplace's adiabatic correction is what matches experiment ($\approx331\ \text{m/s}$ at $0\,^\circ$C in air, $\approx340$ at room temperature).
- $v\propto\sqrt{T}$ in kelvin for a gas; in Celsius use $v\approx331+0.61t$.
- Liquids: $\sqrt{B/\rho}$; solid rods: $\sqrt{Y/\rho}$ — always an elasticity over an inertia.
- Loudness and pitch do not alter wave speed; crossing media changes $v$ and $\lambda$ but never $f$.
- Next lesson: what happens when two such waves arrive in the same place at the same time — superposition, reflection at boundaries, and interference.
