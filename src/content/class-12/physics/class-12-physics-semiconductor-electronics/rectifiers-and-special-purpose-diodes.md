## From alternating current to controlled light

A diode’s one-way behaviour is not only a curiosity; it is the basis of the simplest power-supply circuits and of devices that turn electricity into light, light into electricity, or a voltage into a regulated reference. This module collects the standard circuits and special-purpose diodes.

## 1. Rectifiers

A rectifier converts alternating current (AC) to direct current (DC). The diode passes only the positive half-cycle.

**Half-wave rectifier.** A single diode in series with the load. Output is the positive half of the sine wave; the negative half is blocked. Average (DC) output voltage:

$$
V_{dc}=\frac{V_m}{\pi},
$$

where $V_m$ is the peak input voltage. The output still pulses at the mains frequency; the ripple is large.

**Full-wave rectifier.** Both half-cycles are used. In a **centre-tap** version, two diodes feed a load from opposite ends of a centre-tapped transformer; in a **bridge** version, four diodes form a bridge so no centre tap is needed. The output is $|V_m\sin\omega t|$, with average

$$
V_{dc}=\frac{2V_m}{\pi}.
$$

The ripple frequency doubles, so filtering (a capacitor across the load) is easier. Practical supplies add a capacitor and often a regulator after the rectifier.

## 2. Zener diode

A Zener diode is designed to operate in reverse breakdown. Its reverse characteristic is almost vertical at a well-defined **Zener voltage** $V_Z$: once breakdown begins, the voltage across it stays nearly $V_Z$ even as the current changes over a wide range. Used in reverse bias with a series resistor, it holds the load voltage constant, protecting circuits against over-voltage and providing a reference.

The series resistor must limit the current so the diode stays within its power rating: $P=V_Z I_Z$.

## 3. Light-emitting diode (LED)

In forward bias, electrons and holes recombine in the junction, releasing energy. If the material is chosen so that energy is emitted as a photon rather than heat, the diode glows. The photon energy is about the band gap:

$$
E_g \approx \frac{hc}{\lambda}\quad\Rightarrow\quad
\lambda \approx \frac{1240\ \text{eV·nm}}{E_g(\text{eV})}.
$$

GaAs ($E_g\approx1.42\ \text{eV}$) emits in the near infrared; GaP ($E_g\approx2.26\ \text{eV}$) in green; GaN ($E_g\approx3.4\ \text{eV}$) in blue/UV. LEDs are used as indicators, in displays and, with phosphors, in white lighting.

## 4. Photodiode and solar cell

A **photodiode** is a p–n junction operated in reverse bias. Light absorbed in or near the depletion region creates electron–hole pairs, which the junction field separates, producing a photocurrent proportional to the light intensity. Fast and sensitive, used in optical communication and sensors.

A **solar cell** is essentially a large-area photodiode operated at zero or small forward bias, delivering power to an external load. It converts photon energy into electrical energy; its efficiency is limited by the band gap (photons below $E_g$ are not absorbed; excess energy above $E_g$ is lost as heat).

## 5. Worked example: LED wavelength

A LED is made from a material with band gap $E_g=1.9\ \text{eV}$. Estimate its emission wavelength.

$$
\lambda \approx \frac{1240}{1.9}\ \text{nm}\approx 653\ \text{nm},
$$

which is red light. **Sanity check:** smaller gap would give longer wavelength (infrared); larger gap gives blue/UV. The estimate matches the colour of common red LEDs.

A second quick check: a full-wave rectifier fed from a $12\ \text{V}$ (rms) mains transformer has peak $V_m=12\sqrt2\approx17.0\ \text{V}$, so $V_{dc}=2V_m/\pi\approx10.8\ \text{V}$ before diode drops and filtering.

## 6. A common mistake

**Confusing the Zener diode with an ordinary diode in breakdown.** An ordinary diode is destroyed by prolonged breakdown; a Zener is designed for it. Use a Zener only with a current-limiting resistor and in reverse bias. A second error is forgetting the $\sim0.7\ \text{V}$ drop of silicon rectifier diodes when computing DC output: the peak output is $V_m-0.7\ \text{V}$ (one diode) or $V_m-1.4\ \text{V}$ (bridge).

## Try it yourself

**A.** Compare the average DC output of half-wave and full-wave rectifiers fed from the same AC peak voltage $V_m$.

<details><summary>Show the reasoning</summary>

Half-wave: $V_m/\pi\approx0.318V_m$. Full-wave: $2V_m/\pi\approx0.637V_m$. The full-wave output is double, with less ripple.
</details>

**B.** Which special-purpose diode would you choose to (i) hold a $5.6\ \text{V}$ rail steady, (ii) indicate power-on, (iii) measure light intensity?

<details><summary>Show the reasoning</summary>

(i) Zener diode rated $5.6\ \text{V}$; (ii) LED; (iii) photodiode in reverse bias.
</details>

**C.** A LED emits at $590\ \text{nm}$ (yellow). Estimate the band gap of its material.

<details><summary>Show the reasoning</summary>

$E_g\approx1240/590\approx2.10\ \text{eV}$, consistent with materials such as GaAsP.
</details>

## Remember

- Rectifiers use the diode’s one-way conduction to convert AC to DC; full-wave uses both half-cycles.
- Zener diodes regulate voltage in reverse breakdown.
- LEDs emit light when forward-biased; colour is set by the band gap.
- Photodiodes and solar cells convert light to current using the junction field.

The next module adds a third region to the junction, producing the transistor — the device that makes amplification and digital logic possible.