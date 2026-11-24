## Light arrives as packets, not as a continuous stream

Einstein’s 1905 explanation of the photoelectric effect treats light not as a wave spreading energy continuously, but as a stream of discrete quanta called **photons**. Each photon carries energy $E=h\nu$ and, when absorbed by a single electron, can eject it. This module writes that idea as an equation and extracts everything it predicts.

## 1. The photon

A photon of frequency $\nu$ (wavelength $\lambda$) has

$$
E=h\nu=\frac{hc}{\lambda},\qquad p=\frac{h}{\lambda}=\frac{E}{c},
$$

where $p$ is its momentum. Intensity is not “energy per photon”; it is the number of photons arriving per unit area per unit time, multiplied by $h\nu$. Increasing intensity at fixed frequency means more photons, not more energetic ones.

## 2. Einstein’s photoelectric equation

When a photon is absorbed by an electron at the surface, its energy $h\nu$ is spent in two parts:

- $\phi$: the work function, the energy needed to escape the metal.
- $K_{\max}$: the maximum kinetic energy of the emitted electron.

Hence

$$
h\nu=\phi+K_{\max}.
$$

The **maximum** kinetic energy is used because electrons from deeper in the metal lose extra energy on the way out; surface electrons get the full surplus. The stopping potential $V_0$ is defined by $eV_0=K_{\max}$, so

$$
eV_0=h\nu-\phi \quad\Longrightarrow\quad V_0=\frac{h\nu-\phi}{e}.
$$

The threshold condition $K_{\max}=0$ gives $\nu_0=\phi/h$ and $\lambda_0=hc/\phi$, matching the previous module. In terms of wavelength,

$$
K_{\max}=\frac{hc}{\lambda}-\phi.
$$

## 3. What the equation predicts

- $K_{\max}$ is a linear function of $\nu$ with slope $h$ (Planck’s constant).
- A graph of stopping potential $V_0$ against frequency $\nu$ is a straight line with slope $h/e$.
- Neither $K_{\max}$ nor $V_0$ depends on intensity; intensity changes only the photocurrent.
- Emission is instantaneous because a single photon delivers its whole energy in one absorption event.

## 4. Photon momentum and radiation pressure (a bonus)

Because a photon carries momentum $p=h/\lambda=E/c$, a beam of intensity $I$ (power per unit area) delivers momentum per unit area per unit time $I/c$. If the light is fully absorbed, the radiation pressure is $P_{\text{rad}}=I/c$; if fully reflected, it is $2I/c$. This is the same photon idea applied to momentum rather than energy.

## 5. Worked example: sodium in ultraviolet light

Sodium: $\phi=2.3\ \text{eV}$. Light of wavelength $\lambda=300\ \text{nm}$ falls on it.

Photon energy:
$$
E=\frac{hc}{\lambda}
=\frac{1240\ \text{eV·nm}}{300\ \text{nm}}
=4.13\ \text{eV}.
$$

Maximum kinetic energy:
$$
K_{\max}=4.13-2.3=1.83\ \text{eV}.
$$

Stopping potential:
$$
V_0=1.83\ \text{V}.
$$

Speed of the fastest emitted electron (convert $K_{\max}$ to joules):
$$
K_{\max}=1.83\times1.60\times10^{-19}=2.93\times10^{-19}\ \text{J},
$$
$$
v=\sqrt{\frac{2K_{\max}}{m_e}}
=\sqrt{\frac{2(2.93\times10^{-19})}{9.11\times10^{-31}}}
\approx 8.0\times10^{5}\ \text{m/s}.
$$

Sanity check: $8.0\times10^5\ \text{m/s}$ is about $0.003c$, safely non-relativistic, so the classical kinetic energy formula is valid.

<learning-block type="mistake" title="Einstein equation mistakes">

- Forgetting that $K_{\max}$ is the maximum kinetic energy, not the energy of every emitted electron.
- Mixing units: using $\lambda$ in nanometres inside $hc/\lambda$ with $h$ in J·s without converting.
- Assuming the stopping potential changes when the light intensity changes.

</learning-block>

## Try it yourself

**A.** For the same sodium surface, light of frequency $6.0\times10^{14}\ \text{Hz}$ is used. Find $K_{\max}$ in eV and the stopping potential.

<details><summary>Show the reasoning</summary>

$h\nu=(4.14\times10^{-15}\ \text{eV·s})(6.0\times10^{14}\ \text{Hz})=2.48\ \text{eV}$.

$K_{\max}=2.48-2.3=0.18\ \text{eV}$, so $V_0=0.18\ \text{V}$.

</details>

**B.** A metal has work function $4.0\ \text{eV}$. What is the longest wavelength of light that can eject electrons?

<details><summary>Show the reasoning</summary>

Threshold: $\lambda_0=hc/\phi=1240/4.0=310\ \text{nm}$. Light must be at most $310\ \text{nm}$ (ultraviolet or shorter).

</details>

**C.** In a photoelectric experiment the stopping potential is $1.5\ \text{V}$ and the incident light has wavelength $250\ \text{nm}$. Find the work function of the metal.

<details><summary>Show the reasoning</summary>

Photon energy $=1240/250=4.96\ \text{eV}$. Since $K_{\max}=eV_0=1.5\ \text{eV}$,

$$
\phi=4.96-1.5=3.46\ \text{eV}.
$$

</details>

## Remember

- Light energy is quantised: $E=h\nu=hc/\lambda$ per photon.
- Einstein’s equation: $h\nu=\phi+K_{\max}$.
- Stopping potential: $eV_0=K_{\max}=h\nu-\phi$.
- Threshold frequency $\nu_0=\phi/h$; threshold wavelength $\lambda_0=hc/\phi$.
- $K_{\max}$ depends on frequency, not intensity; intensity changes the number of electrons.
- Photon momentum $p=h/\lambda$ gives radiation pressure $I/c$ (absorption) or $2I/c$ (reflection).

The next module applies the same quantum idea in reverse: matter particles also have a wavelength.