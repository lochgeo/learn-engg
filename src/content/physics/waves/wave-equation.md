## From SHM to a travelling shape

In the Oscillations chapter, a single oscillator had $x=A\cos(\omega t+\phi)$. A wave is what you get when every particle of a long chain oscillates that way — but not simultaneously. Each particle copies the motion of the one before it, delayed by the time the disturbance takes to arrive. The copy-and-delay structure is all the progressive wave equation is: one formula that packs amplitude, wavelength, frequency, speed, direction and phase into a single expression.

## 1. The wave function

For a harmonic wave moving in the $+x$ direction,

$$
y(x,t)=A\sin(kx-\omega t+\phi),
$$

where

| Symbol | Name | Meaning | SI unit |
| --- | --- | --- | --- |
| $y$ | displacement | Displacement of the particle at position $x$ at time $t$ | metre |
| $A$ | amplitude | Maximum displacement of any particle | metre |
| $k$ | wave number | Phase change per metre of distance: $k=\dfrac{2\pi}{\lambda}$ | rad/m |
| $\omega$ | angular frequency | Phase change per second: $\omega=2\pi f=\dfrac{2\pi}{T}$ | rad/s |
| $\phi$ | initial phase | Fixes what the wave is doing at $x=0$, $t=0$ | rad |

Only the combination $kx-\omega t$ matters for motion. Holding $kx-\omega t$ constant and differentiating with respect to time gives $dx/dt=\omega/k$: the crest pattern slides along at

$$
v=\frac{\omega}{k}=\frac{2\pi f}{2\pi/\lambda}=f\lambda,
$$

recovering the master relation of the previous lesson. Everything is consistent — the wave equation $y=A\sin(kx-\omega t+\phi)$ satisfies $v=f\lambda$ identically.

## 2. Wave number and wavelength

The wave number is the spatial twin of angular frequency: $\omega$ counts radians per second, $k$ counts radians per metre. One full cycle occupies one wavelength, hence

$$
k=\frac{2\pi}{\lambda},
\qquad
\lambda=\frac{2\pi}{k}.
$$

Given a wave equation, read off $k$ and $\omega$ first; everything else follows from $f=\omega/2\pi$, $\lambda=2\pi/k$ and $v=\omega/k$.

## 3. Phase and phase difference

The **phase** of a wave is the whole argument of the sine, $kx-\omega t+\phi$. Differences in phase are what the wave compares across space and time.

- **Two particles, same instant:** for particles separated by $\Delta x$,

  $$
  \Delta\phi=k\,\Delta x=\frac{2\pi}{\lambda}\Delta x .
  $$

  Points one wavelength apart are in step ($\Delta\phi=2\pi$); points half a wavelength apart are exactly opposed ($\Delta\phi=\pi$, one goes up while the other goes down).

- **One particle, two instants:** after a time $\Delta t$,

  $$
  \Delta\phi=\omega\,\Delta t .
  $$

- **Path difference view:** a path difference $\Delta x$ maps to phase difference $\Delta\phi=\dfrac{2\pi}{\lambda}\Delta x$. This bookkeeping — path difference in, phase difference out, constructive when $\Delta\phi=2n\pi$ and destructive when $\Delta\phi=(2n+1)\pi$ — is the working currency of the interference and standing-wave lessons ahead.

## 4. Particle velocity versus wave velocity

Differentiate the wave function with respect to time, holding the particle (fixed $x$) in view:

$$
u_p=\frac{\partial y}{\partial t}=-A\omega\cos(kx-\omega t+\phi).
$$

So each particle executes SHM with **maximum particle speed**

$$
u_{p,\max}=A\omega \quad (=\;\omega A \;=\; 2\pi f A),
$$

exactly as for any SHM of amplitude $A$ and angular frequency $\omega$ — a direct hand-back to the SHM-kinematics lesson.

The **wave speed**, by contrast, is $v=\omega/k$, it is constant, and it belongs to the pattern, not to any particle. Numerically the two can differ enormously: a wave can cross a room at $340\ \text{m/s}$ while its air molecules never exceed a few metres per second.

A further identity, one differentiation each in $t$ and $x$, shows the wave function obeys

$$
\frac{\partial^2 y}{\partial t^2}=v^2\,\frac{\partial^2 y}{\partial x^2},
$$

the differential equation every one-dimensional wave satisfies — this is what will tie the tension and elasticity of a medium to $v$ in the next lesson.

## 5. Which way is the wave going?

Watch the sign between the $x$ and $t$ terms:

- $y=A\sin(kx-\omega t+\phi)$: **travels toward $+x$** (a fixed phase needs larger $x$ as $t$ grows).
- $y=A\sin(kx+\omega t+\phi)$ or equivalently $A\sin(\omega t+kx+\phi)$: **travels toward $-x$**.

The sign of $y$ itself (for example a whole-sign flip) does not change the direction of travel; only the relative sign of the $x$ and $t$ terms does.

<learning-block type="example" title="Worked example">

Read everything from

$$
y=5\times10^{-3}\sin(\pi x-200\pi t)\ \text{m}.
$$

Comparing with $A\sin(kx-\omega t)$: $A=5\ \text{mm}$, $k=\pi\ \text{rad/m}$, $\omega=200\pi\ \text{rad/s}$.

- Wavelength: $\lambda=2\pi/k=2\pi/\pi=2.0\ \text{m}$.
- Frequency: $f=\omega/2\pi=200\pi/2\pi=100\ \text{Hz}$.
- Wave speed: $v=\omega/k=200\ \text{m/s}$, toward $+x$.
- Maximum particle speed: $u_{p,\max}=A\omega=(5\times10^{-3})(200\pi)\approx3.14\ \text{m/s}$.
- Phase difference between two particles $0.5\ \text{m}$ apart: $\Delta\phi=k\Delta x=\pi(0.5)=\pi/2$, that is, a quarter-cycle.

Sanity check: the particles peak at a lively $3.1\ \text{m/s}$ — yet that is tiny compared with the $200\ \text{m/s}$ at which the pattern itself slides along. Particle motion and wave motion operate on very different scales.

</learning-block>

<learning-block type="mistake" title="Reading wave equations wrongly">

- **Dividing by the wrong $2\pi$.** The coefficient of $x$ is $k$ (so $\lambda=2\pi/k$), the coefficient of $t$ is $\omega$ (so $f=\omega/2\pi$). Swapping these roles garbles everything downstream.
- **Confusing $\partial y/\partial t$ with $v$.** $\omega A$ can be small or large and varies from moment to moment; $v=\omega/k$ is constant and belongs to the wave.
- **Adding phases across a medium change.** After refraction into a new medium, $k$ changes but $\omega$ does not — the frequency belongs to the source.
- **Judging direction from the sign of $A$ or $y$.** Direction comes only from the relative sign of the $kx$ and $\omega t$ terms.

</learning-block>

## Try it yourself

**A.** For $y=2\sin(0.5\pi x-100\pi t)$ cm, find the wavelength, frequency and wave speed, and the direction of travel.

<details><summary>Show the reasoning</summary>

$k=0.5\pi\ \text{rad/m}$ gives $\lambda=2\pi/k=4.0\ \text{m}$; $\omega=100\pi\ \text{rad/s}$ gives $f=50\ \text{Hz}$. The speed is $v=\omega/k=100\pi/0.5\pi=200\ \text{m/s}$. With $kx$ and $\omega t$ of opposite sign, the wave travels toward $+x$.
</details>

**B.** Two particles on the wave of the worked example are $1.5\ \text{m}$ apart. Find their phase difference, and state whether they ever move oppositely.

<details><summary>Show the reasoning</summary>

$$
\Delta\phi=k\Delta x=\pi\times1.5=1.5\pi=\frac{3\pi}{2},
$$

that is, three-quarters of a cycle. Particles are in exact opposition when $\Delta\phi$ is an odd multiple of $\pi$; $3\pi/2$ is not, so they never sit at exact opposites — one leads the other by three-quarters of a cycle at all times.
</details>

**C.** A wave is $y=3\sin(2\pi t+0.4\pi x)$ mm. Which way does it travel, and how fast? What is its wavelength?

<details><summary>Show the reasoning</summary>

The $x$ and $t$ terms carry the *same* sign, so the wave travels toward $-x$. Speed: $v=\omega/k=2\pi/0.4\pi=5.0\ \text{m/s}$. Wavelength: $\lambda=2\pi/k=2\pi/0.4\pi=5.0\ \text{m}$.
</details>

## Remember

- $y=A\sin(kx-\omega t+\phi)$ is one line containing everything: read $A$, $k$, $\omega$ off the coefficients, then $\lambda=2\pi/k$, $f=\omega/2\pi$, $v=\omega/k$.
- Wave number $k$ is radians per metre; angular frequency $\omega$ is radians per second.
- Phase difference between gridded points: $\Delta\phi=2\pi\Delta x/\lambda$; between times at one point: $\Delta\phi=\omega\Delta t$.
- Maximum particle speed is $\omega A$ and varies; wave speed $\omega/k$ is constant. They almost never match.
- Same signs on $kx$ and $\omega t$ mean travel toward $-x$; opposite signs mean $+x$.
- Next lesson: where that constant speed comes from — tension, pressure and elasticity in different media.
