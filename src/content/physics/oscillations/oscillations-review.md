## Your study plan for this chapter

The chapter is one model plus its measurements, energies, vehicles, geometry and real-world frictions. A focused pass takes about **2 hours** plus a break:

1. **Periodic motion and SHM** — 20 min (the vocabulary and $a=-\omega^2x$)
2. **Displacement, velocity and acceleration** — 22 min ($x$, $v$, $a$ in time and against position)
3. **Energy in SHM** — 20 min (the $K$–$U$ exchange, $E=\frac12kA^2$)
4. **Spring–mass and the pendulum** — 24 min (the period formulas and their traps)
5. **SHM and uniform circular motion** — 18 min (phase reading, adding two SHMs)
6. **Damped and forced oscillations** — 20 min (decay envelope, resonance)
7. **This mastery check** — 25 min

After each lesson, close the file and reproduce its main formulas from a blank sheet. Take a break halfway. Then attempt this check without notes, revealing each answer only after committing to your own.

## First choose the tool

| Clue in the question | Reach for |
| --- | --- |
| Period, frequency or $\omega$ from data | $f=1/T$, $\omega=2\pi f=2\pi/T$ |
| "SHM" asserted with a displacement given | $a=-\omega^2x$; $|a|=\omega^2|x|$ |
| Speed at a stated displacement, no time given | $|v|=\omega\sqrt{A^2-x^2}$ |
| Extreme values asked (fastest, hardest acceleration) | $|v|_{\max}=\omega A$ at $x=0$; $|a|_{\max}=\omega^2A$ at $x=\pm A$ |
| Time between two milestones on the curve | Phase geometry: equal phase steps take equal clock steps ($\Delta t=\Delta\varphi/\omega$) |
| Kinetic or potential energy fraction | $U=E(x/A)^2$, $K=E-U$; equal split at $|x|=A/\sqrt2$ |
| Energy stored, amplitude doubled or tripled | $E\propto A^2$ |
| Spring layout questioned | Parallel: $k_1+k_2$; series: reciprocals add |
| Pendulum and $g$ or mass questioned | $T=2\pi\sqrt{L/g}$; mass cancels; use $g_{\text{eff}}$ in lifts |
| Rigid body swinging | $T=2\pi\sqrt{I/(mgd)}$ |
| Initial position and direction given | $\cos\phi=x_0/A$, then sign of $v_0=-\omega A\sin\phi$ picks the quadrant |
| Two SHMs, same line, same frequency | $R^2=A_1^2+A_2^2+2A_1A_2\cos\delta$ |
| Amplitude decaying, or "how long until…" | $A=A_0e^{-bt/2m}$; halving in $2m\ln2/b$ |
| Driving at some frequency | Steady state at $\omega_d$; amplitude peaks when $\omega_d\approx\omega_0$ |

## Mastery check

Use $g=10\ \text{m/s}^2$ unless stated otherwise. Attempt every problem on paper before opening the reasoning.

### 1. A pendulum in the field

A pendulum completes 25 full oscillations in 50 s. Find its period and its length.

<details><summary>Answer and reasoning</summary>

$T=50/25=2.0\ \text{s}$. From $T=2\pi\sqrt{L/g}$: $L=gT^2/4\pi^2=10(4.0)/39.48=1.01\ \text{m}$. The familiar "one-metre pendulum ticks roughly seconds" check confirms the scale.
</details>

### 2. Full dossier of a spring–mass system

A $0.50\ \text{kg}$ block on a spring of constant $200\ \text{N/m}$ is pulled out $5.0\ \text{cm}$ and released on a frictionless surface. Find $T$, $\omega$, the total energy and the maximum speed.

<details><summary>Answer and reasoning</summary>

$\omega=\sqrt{k/m}=\sqrt{200/0.50}=20\ \text{rad/s}$; $T=2\pi/\omega\approx0.31\ \text{s}$. $E=\frac12kA^2=\frac12(200)(0.050)^2=0.25\ \text{J}$. $v_{\max}=\omega A=20(0.050)=1.0\ \text{m/s}$. Consistency: $K_{\max}=\frac12(0.50)(1.0)^2=0.25\ \text{J}$ — matches $E$, as it must since $K$ is everything when $x=0$.
</details>

### 3. Reading $x=A\cos(4\pi t)$

For $x=6.0\cos(4\pi t)$ (cm), find $f$, $T$, $v_{\max}$, $a_{\max}$ and the speed at $x=3.0\ \text{cm}$.

<details><summary>Answer and reasoning</summary>

$\omega=4\pi\approx12.6\ \text{rad/s}$, so $f=\omega/2\pi=2.0\ \text{Hz}$ and $T=0.50\ \text{s}$. $v_{\max}=\omega A=4\pi(6.0)\approx75.4\ \text{cm/s}\approx0.75\ \text{m/s}$. $a_{\max}=\omega^2A=(4\pi)^2(6.0)\approx947\ \text{cm/s}^2\approx9.5\ \text{m/s}^2$. At $x=3.0\ \text{cm}$: $|v|=\omega\sqrt{A^2-x^2}=4\pi\sqrt{36-9}=4\pi\sqrt{27}\approx65.2\ \text{cm/s}\approx0.65\ \text{m/s}$.
</details>

### 4. Timing between milestones

An oscillator starts at the mean position moving in the positive direction. How long after start does it first reach $A/2$, and how long does the *outer* stretch from $A/2$ to $A$ take? Express both through $T$.

<details><summary>Answer and reasoning</summary>

With $x=A\sin\omega t$: $A/2$ needs $\omega t=\pi/6$, so $t=T/12$. The full quarter from $0$ to $A$ is $T/4$, so the outer stretch takes $T/4-T/12=T/6$ — twice as long as the inner stretch, the "lingering near the ends" rhythm of SHM.
</details>

### 5. Energy fractions

An oscillator has total energy $2.0\ \text{J}$ and amplitude $4.0\ \text{cm}$. Find $U$ and $K$ at $x=3.0\ \text{cm}$.

<details><summary>Answer and reasoning</summary>

$U=E(x/A)^2=2.0(3.0/4.0)^2=2.0(0.5625)=1.125\ \text{J}$. Then $K=E-U=0.875\ \text{J}$. Rough check: $x=0.75A$ is beyond the equality point $A/\sqrt2\approx0.71A$, so $U$ should hold more than half — it holds $56\%$. Consistent.
</details>

### 6. Series versus parallel

Two springs, each $k=400\ \text{N/m}$, hold a $1.0\ \text{kg}$ block: once side by side (parallel), once end to end (series). Give both periods and their ratio.

<details><summary>Answer and reasoning</summary>

Parallel: $k_{\text{eff}}=800\ \text{N/m}$, $T_{\text{par}}=2\pi\sqrt{1.0/800}=2\pi\sqrt{0.00125}\approx0.22\ \text{s}$. Series: $1/k_{\text{eff}}=2/400$, so $k_{\text{eff}}=200\ \text{N/m}$, $T_{\text{ser}}=2\pi\sqrt{1.0/200}\approx0.44\ \text{s}$. Ratio $T_{\text{ser}}/T_{\text{par}}=\sqrt2$, as predicted from $k_{\text{eff}}$ jumping $2k\leftrightarrow k/2$ for identical pairs.
</details>

### 7. A hanging block as its own clock

A $0.20\ \text{kg}$ block hangs motionless on a vertical spring, stretching it $4.0\ \text{cm}$. It is then displaced $2.0\ \text{cm}$ below equilibrium and released. Find $k$ and the period.

<details><summary>Answer and reasoning</summary>

At equilibrium $k\,\delta=mg$: $k=mg/\delta=(0.20)(10)/0.040=50\ \text{N/m}$. The period depends only on $k/m$: $T=2\pi\sqrt{m/k}=2\pi\sqrt{0.20/50}=2\pi\sqrt{0.0040}\approx0.40\ \text{s}$. Notice the extra data — release position — changes the amplitude ($A=2.0\ \text{cm}$, measured from equilibrium), never the period.
</details>

### 8. Initial phase and a timed arrival

An oscillator of amplitude $5.0\ \text{cm}$ and period $2.0\ \text{s}$ is at $x=+2.5\ \text{cm}$ at $t=0$, moving in the negative direction. Write $x(t)$ and find the time of its first arrival at $-5.0\ \text{cm}$.

<details><summary>Answer and reasoning</summary>

$\cos\phi=x_0/A=0.50\Rightarrow\phi=\pm\pi/3$. $v_0=-\omega A\sin\phi<0$ needs $\sin\phi>0$: choose $\phi=+\pi/3$. So $x=5.0\cos(\pi t+\pi/3)\ \text{cm}$ (with $\omega=\pi\ \text{rad/s}$ from $T=2.0\ \text{s}$). Reaching $-A$ means the phase reaches $\pi$: $\Delta\varphi=\pi-\pi/3=2\pi/3$, so $\Delta t=\Delta\varphi/\omega=(2\pi/3)/\pi=2/3\ \text{s}\approx0.67\ \text{s}$. On the reference circle: the marker starts at $60^\circ$ and must sweep to $180^\circ$ — two thirds of the half-turn, a third of the full period.
</details>

### 9. A pendulum in a lift

A pendulum with $T=2.0\ \text{s}$ at rest is swung inside a lift accelerating upward at $2.0\ \text{m/s}^2$. What is its new period?

<details><summary>Answer and reasoning</summary>

Effective gravity rises to $g_{\text{eff}}=g+a=12\ \text{m/s}^2$. So $T'=T\sqrt{g/g_{\text{eff}}}=2.0\sqrt{10/12}\approx1.83\ \text{s}$ — faster, because the restoring force is stronger for the same angle.
</details>

### 10. Energy in a fading swing

A damped pendulum's amplitude halves every $4.0\ \text{s}$. What fraction of its mechanical energy remains after $12\ \text{s}$?

<details><summary>Answer and reasoning</summary>

$12\ \text{s}$ is three halvings, so the amplitude is $A_0/8$. Energy goes as $A^2$: $E/E_0=(1/8)^2=1/64\approx1.6\%$. The double-exponential lesson: track amplitude by halves, energy by quarters, sixteenths, sixty-fourths.
</details>

## Self-check

You are ready to close this chapter when you can:

- state the defining condition of SHM and *derive* $v_{\max}=\omega A$ and $a_{\max}=\omega^2A$ from it;
- reproduce $|v|=\omega\sqrt{A^2-x^2}$ from both the trigonometric identity and the energy bookkeeping;
- say without hesitation where speed, kinetic energy, potential energy and acceleration each peak in a cycle;
- combine springs either way, and explain why gravity moves but does not disturb a vertical-spring oscillation;
- write $T=2\pi\sqrt{L/g}$ and predict the effect of $\sqrt2$-type changes in $L$, $g$ or $k/m$, including lifts and free fall;
- pick an initial phase from a starting position and direction and verify it on the reference circle;
- add two same-frequency SHMs including the antiphase and quarter-cycle special cases;
- sketch or sketch-check the exponential decay of amplitude and the meaning of resonance.

Anything shaky, return to the numbered lesson named in each item — the timed set that follows will forgive one weak spot, but not two.
