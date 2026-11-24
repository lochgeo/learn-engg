## The same wave at a thousand scales

Radio, microwave, infrared, visible light, ultraviolet, X-rays and gamma rays are not different kinds of wave. They are the same electromagnetic disturbance at different frequencies. Our eyes happen to respond to a narrow band in the middle, and our technology has learned to generate and detect the rest.

The spectrum is therefore a map of frequency and wavelength, organised by how the waves are produced, how they interact with matter, and what we use them for. The boundaries are conventions, not walls.

## 1. One relation, many regions

In vacuum, every electromagnetic wave obeys

$$
c=f\lambda,
$$

with $c=3.00\times10^{8}\ \text{m/s}$. Frequency $f$ is set by the source. Wavelength $\lambda$ falls as frequency rises. A useful conversion is

$$
f\ (\text{Hz})=\frac{3.00\times10^{8}}{\lambda\ (\text{m})},
\qquad
\lambda\ (\text{nm})=\frac{3.00\times10^{17}}{f\ (\text{Hz})}.
$$

The second form works because $3.00\times10^{8}\ \text{m}=3.00\times10^{17}\ \text{nm}$. Photon energy is proportional to frequency:

$$
E=hf=\frac{hc}{\lambda},
$$

where $h=6.63\times10^{-34}\ \text{J·s}$. A handy version for photons is

$$
E\ (\text{eV})\approx\frac{1240}{\lambda\ (\text{nm})}.
$$

This single relation explains why ultraviolet photons can break chemical bonds while radio photons cannot.

## 2. The regions in order

The table gives typical ranges and uses. Neighbouring regions overlap at their borders, and different sources quote slightly different cut-offs.

| Region | Typical wavelength | Typical frequency | Produced by | Detected by | Typical uses |
| --- | --- | --- | --- | --- | --- |
| Radio | $>0.1\ \text{m}$ | $<3\ \text{GHz}$ | oscillating circuits, antennas | tuned antenna circuit | broadcasting, mobile links, radio astronomy |
| Microwave | $0.1\ \text{m}$ to $1\ \text{mm}$ | $3$–$300\ \text{GHz}$ | magnetron, klystron, solid-state oscillator | antenna and diode detector | radar, satellite links, microwave heating |
| Infrared | $1\ \text{mm}$ to $700\ \text{nm}$ | $300\ \text{GHz}$–$430\ \text{THz}$ | warm objects, molecular vibrations | thermopile, bolometer, IR camera | heating, remote controls, thermal imaging |
| Visible | $700$–$400\ \text{nm}$ | $430$–$750\ \text{THz}$ | atomic and electronic transitions, hot bodies | eye, CCD, photodiode | vision, photography, optical fibre |
| Ultraviolet | $400$–$10\ \text{nm}$ | $750\ \text{THz}$–$30\ \text{PHz}$ | Sun, discharge lamps, hot stars | photodiode, film, phosphor | sterilisation, vitamin D production, fluorescence |
| X-ray | $10$–$0.01\ \text{nm}$ | $30\ \text{PHz}$–$30\ \text{EHz}$ | fast electrons stopped in a metal target | film, scintillator, Geiger counter | medical imaging, crystallography, security scanning |
| Gamma | $<0.01\ \text{nm}$ | $>30\ \text{EHz}$ | nuclear decays, cosmic processes | scintillator, Geiger counter, semiconductor | cancer therapy, sterilisation, tracer studies |

The order by increasing frequency is radio, microwave, infrared, visible, ultraviolet, X-ray, gamma. The order by increasing wavelength is the reverse. Notice that the wavelength changes by more than ten orders of magnitude across the table, while the speed in vacuum is always $c$.

## 3. What really distinguishes the regions

The labels are not defined by a single sharp wavelength. Three different criteria are in use:

- **Source:** gamma rays usually come from nuclear transitions, while X-rays usually come from accelerated electrons. A photon of the same energy could belong to either label.
- **Interaction with matter:** infrared excites molecular vibrations and rotations; visible light excites outer electrons; ultraviolet can ionise atoms and break bonds; X-rays and gamma rays can eject tightly bound electrons.
- **Technology:** radio and microwave regions are shaped by antennas and waveguides, while visible and shorter wavelengths are handled by lenses, mirrors and detectors.

The practical dividing line that matters most in biology is **ionising versus non-ionising**. Ultraviolet, X-rays and gamma rays can carry enough photon energy to remove electrons from atoms and damage DNA. Radio, microwave, infrared and visible light do not ionise atoms at ordinary intensities, although intense visible or infrared light can still cause heating damage.

## 4. Frequency, wavelength and medium

When a wave enters a transparent medium, its frequency stays the same because the source continues to oscillate at that rate. Its speed becomes $v=c/n$ and its wavelength becomes

$$
\lambda_{\text{medium}}=\frac{\lambda_0}{n}.
$$

The photon energy $hf$ is unchanged. This is why colour does not change when light enters glass: colour is correlated with frequency, not with the shortened wavelength inside the material. What changes is the direction and speed of the wave, which is the origin of refraction.

For a conductor, the simple picture of a transmitted wave fails. The field drives currents, energy is absorbed or reflected, and the wave penetrates only a thin surface layer (the skin depth). This is why metals are opaque and why a metal mesh can shield a microwave oven while letting visible light through its window.

## 5. Worked example: from radio to X-ray

**(a)** An FM station broadcasts at $100\ \text{MHz}$. Its wavelength is

$$
\lambda=\frac{3.00\times10^{8}}{1.00\times10^{8}}=3.00\ \text{m}.
$$

**(b)** Visible light of wavelength $600\ \text{nm}$ has frequency

$$
f=\frac{3.00\times10^{8}}{6.00\times10^{-7}}=5.00\times10^{14}\ \text{Hz},
$$

and photon energy

$$
E=\frac{1240}{600}\approx2.07\ \text{eV}
=3.31\times10^{-19}\ \text{J}.
$$

**(c)** An X-ray of wavelength $0.10\ \text{nm}$ has frequency

$$
f=\frac{3.00\times10^{8}}{1.0\times10^{-10}}=3.0\times10^{18}\ \text{Hz},
$$

and photon energy

$$
E=\frac{1240}{0.10}=1.24\times10^{4}\ \text{eV}
=12.4\ \text{keV}.
$$

The X-ray photon is about six thousand times more energetic than the visible photon. That is why the X-ray can remove a tightly bound electron while the visible photon cannot. The check is the ordering: shorter wavelength means higher frequency and higher photon energy.

## 6. Why the atmosphere is selective

The atmosphere is not equally transparent across the spectrum. Visible light and much of the radio band reach the ground. Most ultraviolet is absorbed by ozone, many infrared bands are absorbed by water vapour and carbon dioxide, and X-rays and gamma rays are absorbed high in the atmosphere. This is why optical and radio astronomy can be done from the ground, while X-ray and gamma-ray astronomy need satellites.

The same selectivity appears in living systems. Chlorophyll absorbs visible light because its electrons have energy gaps in that range. A radio wave of much lower frequency does not have enough photon energy for single-photon excitation of those electrons; intensity changes the number of photons, not the energy of each one. The interaction is a resonance condition, not simply a matter of “more energy” in a broad sense.

<learning-block type="mistake" title="Not all electromagnetic waves are the same speed in a medium">

In vacuum every region travels at $c$. In a material, the speed is $c/n$ and generally depends on frequency. Saying “gamma rays travel faster than radio waves” is wrong in vacuum and unreliable in a medium. A second common error is to think that frequency changes when light enters glass. Frequency is fixed by the source; wavelength changes. A third is to treat gamma rays and X-rays as different only by wavelength. Their typical sources differ, and the labels overlap.

</learning-block>

## Try it yourself

**A.** Which has the larger wavelength: a $5.0\ \text{GHz}$ microwave or $600\ \text{nm}$ visible light? By what factor?

<details><summary>Show the reasoning</summary>

The microwave wavelength is $\lambda=c/f=3.00\times10^{8}/5.0\times10^{9}=0.060\ \text{m}=6.0\ \text{cm}$. Visible light is $600\ \text{nm}=6.0\times10^{-7}\ \text{m}$. The microwave wavelength is larger by a factor of $1.0\times10^{5}$.
</details>

**B.** An ultraviolet lamp emits at $250\ \text{nm}$. Find the frequency and photon energy in electronvolts.

<details><summary>Show the reasoning</summary>

$$
f=\frac{3.00\times10^{8}}{2.50\times10^{-7}}=1.2\times10^{15}\ \text{Hz}.
$$

The photon energy is $E=1240/250\approx4.96\ \text{eV}$, or $7.9\times10^{-19}\ \text{J}$. This is enough to break many chemical bonds, which is why ultraviolet is hazardous to living tissue.
</details>

**C.** Why can a metal mesh shield a microwave oven while its glass window remains transparent?

<details><summary>Show the reasoning</summary>

The mesh holes are much smaller than the microwave wavelength (about $12\ \text{cm}$), so the metal behaves like a continuous conducting sheet and reflects the wave. Visible light has a wavelength of a few hundred nanometres, far smaller than the holes, so it passes through almost unaffected. Shielding depends on wavelength relative to the size of the openings.
</details>

## Remember

- All regions obey $c=f\lambda$ in vacuum and $E=hf$ for a photon; frequency and wavelength vary across the spectrum.
- Order by increasing frequency: radio, microwave, infrared, visible, ultraviolet, X-ray, gamma.
- Boundaries are conventional; source and interaction with matter are often more useful than a wavelength cut-off.
- In a medium, frequency is unchanged while speed and wavelength change: $v=c/n$, $\lambda=\lambda_0/n$.
- Ionising radiation (ultraviolet and shorter) can remove electrons; radio and microwave photons cannot at ordinary intensities.

The practice module now mixes these ideas into method-selection and mastery questions.
