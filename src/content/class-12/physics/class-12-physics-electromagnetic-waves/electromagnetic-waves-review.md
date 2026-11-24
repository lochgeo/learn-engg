## Your study plan for today

Electromagnetic waves reward a small amount of careful bookkeeping. The chapter has four ideas, and each one adds a layer to the next. A focused pass takes about **25 minutes** if the concept lessons are already read:

| Step | What to do | Minutes |
| --- | --- | --- |
| 1 | Recall the capacitor argument and write $I_d=\varepsilon_0\,d\Phi_E/dt$ from memory | 3 |
| 2 | Sketch a plane wave and mark the directions of $\vec E$, $\vec B$ and propagation | 3 |
| 3 | Re-derive $E_0/B_0=c$ from the two curl equations | 4 |
| 4 | Write the energy-density and intensity formulas, then check each unit | 4 |
| 5 | Trace the spectrum in order and attach one source and one use to each region | 3 |
| 6 | Work the mastery questions below without prompts | 6 |
| 7 | Read the self-check and revisit any weak item | 2 |

Do the numerical work on paper. A formula you can recognise is not the same as a formula you can use under time pressure.

## First choose the method

| Clue in the question | Start with |
| --- | --- |
| A capacitor is charging; find the field change or the gap current | $I_d=\varepsilon_0\,d\Phi_E/dt$ |
| A time-varying field is given; find displacement current density | $J_d=\varepsilon_0\,\partial E/\partial t$ |
| Which law predicts electromagnetic waves? | Maxwell’s equations; the Ampère–Maxwell term is essential |
| Peak electric field is given; find the magnetic amplitude | $B_0=E_0/c$ |
| Direction of $\vec B$ from $\vec E$ and propagation | $\vec E\times\vec B$ points along the ray |
| Speed or wavelength inside a medium | $v=c/n$, $\lambda=\lambda_0/n$; frequency unchanged |
| Average intensity from a field amplitude | $I=\tfrac12\varepsilon_0cE_0^2=\varepsilon_0cE_{\text{rms}}^2$ |
| Energy crossing an area per second | Multiply intensity by area; use the Poynting vector for direction |
| Force or pressure from light | $I/c$ for absorption, $2I/c$ for normal reflection |
| Order regions or compare photon energies | $E=hf=hc/\lambda$; smaller wavelength means larger energy |
| A statement about phase, speed, or medium | Check frequency first; it is the invariant set by the source |

## Mastery check

Try each question before opening the answer. Use $c=3.00\times10^{8}\ \text{m/s}$, $\varepsilon_0=8.85\times10^{-12}\ \text{F/m}$ and $h=6.63\times10^{-34}\ \text{J·s}$.

### 1. Displacement current in a small capacitor

A $470\ \text{pF}$ capacitor is charged by a constant current of $2.0\ \text{mA}$. Find the displacement current between its plates and the rate at which the potential difference rises.

<details><summary>Answer and reasoning</summary>

The displacement current equals the conduction current, so $I_d=2.0\ \text{mA}$. For a capacitor, $I=C\,dV/dt$, hence

$$
\frac{dV}{dt}=\frac{2.0\times10^{-3}}{470\times10^{-12}}
=4.3\times10^{6}\ \text{V/s}.
$$

The capacitor charges quickly because its capacitance is small.
</details>

### 2. Current density in a circular capacitor

A parallel-plate capacitor has circular plates of radius $4.0\ \text{cm}$ and is charged at $0.50\ \text{A}$. Find the displacement current density, assuming the field is uniform.

<details><summary>Answer and reasoning</summary>

The area is $A=\pi(0.040)^2=5.03\times10^{-3}\ \text{m}^2$. The displacement current equals $0.50\ \text{A}$, so

$$
J_d=\frac{I_d}{A}=\frac{0.50}{5.03\times10^{-3}}
\approx99\ \text{A/m}^2.
$$

The field near the edges is not perfectly uniform, so this is an average over the plate area.
</details>

### 3. Wave quantities from one amplitude

A plane wave of frequency $50\ \text{MHz}$ has $E_0=90\ \text{V/m}$. Find its wavelength, magnetic amplitude and average intensity.

<details><summary>Answer and reasoning</summary>

$$
\lambda=\frac{c}{f}=\frac{3.00\times10^{8}}{5.0\times10^{7}}=6.0\ \text{m}.
$$

The magnetic amplitude is

$$
B_0=\frac{90}{3.00\times10^{8}}=3.0\times10^{-7}\ \text{T}.
$$

The intensity is

$$
I=\tfrac12\varepsilon_0cE_0^2
=\tfrac12(8.85\times10^{-12})(3.00\times10^{8})(90)^2
\approx11\ \text{W/m}^2.
$$

The order of magnitude is reasonable for a weak transmitter at a distance.
</details>

### 4. Light inside glass

Light of vacuum wavelength $640\ \text{nm}$ enters glass of refractive index $1.60$. Find its speed, frequency and wavelength in the glass. Does its colour change?

<details><summary>Answer and reasoning</summary>

$$
v=\frac{c}{n}=\frac{3.00\times10^{8}}{1.60}=1.88\times10^{8}\ \text{m/s}.
$$

The frequency is unchanged:

$$
f=\frac{c}{\lambda_0}=\frac{3.00\times10^{8}}{6.40\times10^{-7}}
=4.69\times10^{14}\ \text{Hz}.
$$

The wavelength is

$$
\lambda=\frac{\lambda_0}{n}=\frac{640}{1.60}=400\ \text{nm}.
$$

The colour is associated with the frequency, so it remains the same red light even though the wavelength in the glass is shorter.
</details>

### 5. Fields and pressure from sunlight

Sunlight has an average intensity of $1.4\ \text{kW/m}^2$. Find $E_{\text{rms}}$, $B_{\text{rms}}$, and the radiation pressure on a perfectly absorbing surface held normal to the beam.

<details><summary>Answer and reasoning</summary>

$$
E_{\text{rms}}=\sqrt{\frac{I}{\varepsilon_0c}}
=\sqrt{\frac{1.4\times10^{3}}{(8.85\times10^{-12})(3.00\times10^{8})}}
\approx7.3\times10^{2}\ \text{V/m}.
$$

Then

$$
B_{\text{rms}}=\frac{E_{\text{rms}}}{c}\approx2.4\times10^{-6}\ \text{T}.
$$

For a perfect absorber,

$$
P=\frac{I}{c}=\frac{1.4\times10^{3}}{3.00\times10^{8}}
=4.7\times10^{-6}\ \text{Pa}.
$$

This is about $5\times10^{-11}$ of atmospheric pressure, which is why ordinary objects do not visibly move.
</details>

### 6. A reflecting sail

A perfectly reflecting sail of area $0.20\ \text{m}^2$ faces a laser beam of intensity $5.0\ \text{kW/m}^2$ at normal incidence. Find the force on the sail.

<details><summary>Answer and reasoning</summary>

A perfect reflector reverses the light’s momentum, so

$$
P=\frac{2I}{c}=\frac{2(5.0\times10^{3})}{3.00\times10^{8}}
=3.3\times10^{-5}\ \text{Pa}.
$$

The force is

$$
F=PA=(3.3\times10^{-5})(0.20)=6.7\times10^{-6}\ \text{N}.
$$

Using $I/c$ would give half this value; the factor of two is the usual trap.
</details>

### 7. Equal energy densities

Show that the average magnetic energy density of a plane wave equals the average electric energy density. What is the total average energy density in terms of $E_0$?

<details><summary>Answer and reasoning</summary>

For a plane wave $B=E/c$ at every instant. Therefore

$$
u_B=\frac{B^2}{2\mu_0}
=\frac{E^2}{2\mu_0c^2}
=\frac12\varepsilon_0E^2=u_E.
$$

Averaging over a cycle, $\langle E^2\rangle=E_0^2/2$, so

$$
\langle u_E\rangle=\langle u_B\rangle=\frac14\varepsilon_0E_0^2,
\qquad
\langle u\rangle=\frac12\varepsilon_0E_0^2.
$$

The equality is instantaneous, not merely an average; the average simply scales both densities by the same factor.
</details>

### 8. Direction from the field vectors

An electromagnetic wave has $\vec E$ along $+z$ and $\vec B$ along $-x$. In which direction does it propagate?

<details><summary>Answer and reasoning</summary>

The propagation direction is $\vec E\times\vec B$. With unit vectors,

$$
\hat k\times(-\hat i)=-(\hat k\times\hat i)=-\hat j.
$$

The wave travels along $-y$. A quick sketch of a right-handed set confirms the result.
</details>

### 9. A microwave oven

A microwave oven operates at $2.45\ \text{GHz}$. Find the wavelength and the photon energy in electronvolts. Why does it heat food without ionising it?

<details><summary>Answer and reasoning</summary>

$$
\lambda=\frac{c}{f}=\frac{3.00\times10^{8}}{2.45\times10^{9}}
=0.122\ \text{m}\approx12\ \text{cm}.
$$

The photon energy is

$$
E=hf=(6.63\times10^{-34})(2.45\times10^{9})
=1.62\times10^{-24}\ \text{J}
\approx1.0\times10^{-5}\ \text{eV}.
$$

This is far below the few electronvolts needed to break chemical bonds or ionise atoms. The microwave instead excites rotational motion of polar molecules such as water, and that rotational energy becomes heat through collisions.
</details>

### 10. Explain the repair

In one or two sentences, explain why Ampère’s original law fails for a charging capacitor and how the displacement current fixes it.

<details><summary>Answer and reasoning</summary>

For a loop around the connecting wire, a flat surface cuts the wire and encloses a conduction current, while a surface bulging through the capacitor gap encloses no current. Ampère’s law would then give different magnetic fields for the same loop. The changing electric flux in the gap contributes $\varepsilon_0\,d\Phi_E/dt$, which equals the conduction current, so both surfaces give the same total current and the same field.
</details>

## Self-check

You are ready to move on when you can:

- derive the displacement current of a charging capacitor from $E=q/(\varepsilon_0A)$ and explain why it is not charge flow;
- write the Ampère–Maxwell law and say which term repairs the capacitor paradox;
- derive $c=1/\sqrt{\mu_0\varepsilon_0}$ from the coupled field equations at least in outline;
- draw a plane wave and state the directions and phase relationship of $\vec E$, $\vec B$ and $\vec k$;
- use $E_0/B_0=c$ and $I=\tfrac12\varepsilon_0cE_0^2$ without mixing peak and rms values;
- compute radiation pressure with the correct factor of two for a reflector;
- place every region of the spectrum in order by frequency and wavelength, and estimate a photon energy from a wavelength;
- explain why frequency is unchanged when light enters a medium while speed and wavelength change.

If any item is shaky, revisit the matching concept lesson and redo its “Try it yourself” questions from a blank page. Then attempt the JEE Main timed set.
