## Light is transverse, and polarisation proves it

A longitudinal wave has oscillations along its direction of travel; a transverse wave has oscillations perpendicular to it. Sound in air is longitudinal and cannot be polarised. Light can be polarised, which is direct evidence that it is a transverse wave: its electric field oscillates in a plane perpendicular to the propagation direction.

## 1. Unpolarised and polarised light

In **unpolarised** light, the electric-field vector rapidly and randomly changes direction in the transverse plane. In **plane-polarised** light, the electric field oscillates along one fixed line in that plane.

A **polariser** transmits only the component of the field along its transmission axis. For unpolarised incident light of intensity $I$, the transmitted intensity is $I/2$, because the average of $\cos^2$ over all directions is $1/2$.

## 2. Malus’s law

If plane-polarised light of intensity $I_0$ is incident on an analyser whose transmission axis makes angle $\theta$ with the polarisation direction, the transmitted intensity is

$$
I=I_0\cos^2\theta.
$$

This is **Malus’s law**. When $\theta=0^\circ$, all light is transmitted; when $\theta=90^\circ$, none is (ideal polarisers).

## 3. Brewster’s angle

When unpolarised light reflects from a dielectric surface, the reflected light is partially polarised. At a particular angle of incidence $\theta_B$, the reflected light is **completely polarised** perpendicular to the plane of incidence. This is **Brewster’s angle**, given by

$$
\tan\theta_B=\frac{n_2}{n_1},
$$

where $n_1$ is the refractive index of the incident medium and $n_2$ that of the reflecting medium. At Brewster’s angle, the reflected and refracted rays are perpendicular ($\theta_B+r=90^\circ$).

## 4. Applications

- Polaroid sunglasses reduce glare from horizontal reflecting surfaces by transmitting vertically polarised light.
- Liquid-crystal displays use polarisers and electrically controlled birefringence to switch pixels.
- Stress analysis: birefringent plastics rotate the plane of polarisation, revealing stress patterns.

## 5. Worked example

Unpolarised light of intensity $100\ \text{W/m}^2$ passes through a polariser, then an analyser at $60^\circ$ to the first.

After the polariser:

$$
I_1=\frac{100}{2}=50\ \text{W/m}^2.
$$

After the analyser:

$$
I_2=I_1\cos^2 60^\circ=50\times\left(\frac12\right)^2=50\times0.25=12.5\ \text{W/m}^2.
$$

Brewster angle for air to glass ($n=1.5$):

$$
\tan\theta_B=1.5,\qquad \theta_B\approx56.3^\circ.
$$

Sanity check: at $\theta=0^\circ$ Malus gives full transmission; at $\theta=90^\circ$ zero. Brewster’s angle between $0$ and $90^\circ$ and increasing with $n_2/n_1$ is physically sensible.

## 6. A common mistake

Applying Malus’s law to **unpolarised** light. Malus requires the incident light to already be plane-polarised; for unpolarised light the first polariser simply halves the intensity. A second error is confusing the polariser’s transmission axis with the polarisation direction of the light.

<learning-block type="mistake" title="Polarisation errors">
- Treating a polariser as an intensity filter with a fixed factor, independent of the incident polarisation.
- Forgetting that two crossed polarisers ($90^\circ$) transmit no light, and then being surprised by a third polariser inserted between them transmitting some (the quantum/classical projection effect).
- Mixing up Brewster’s angle with the critical angle; they are different phenomena with different formulae.
</learning-block>

## Try it yourself

**A.** Plane-polarised light of intensity $80\ \text{W/m}^2$ is incident on an analyser at $30^\circ$. Find the transmitted intensity.

<details><summary>Show the reasoning</summary>

$I=80\cos^2 30^\circ=80\times0.75=60\ \text{W/m}^2$.
</details>

**B.** Unpolarised light passes through three ideal polarisers whose axes are at $0^\circ$, $45^\circ$ and $90^\circ$. What fraction of the original intensity is transmitted?

<details><summary>Show the reasoning</summary>

After first: $1/2$. After second: $(1/2)\cos^2 45^\circ=1/4$. After third: $(1/4)\cos^2 45^\circ=1/8$. So $12.5\%$ is transmitted.
</details>

**C.** Light reflects off water ($n=1.33$) at Brewster’s angle. Find that angle and the angle of refraction.

<details><summary>Show the reasoning</summary>

$\tan\theta_B=1.33$, so $\theta_B\approx53.1^\circ$. The refracted angle is $90^\circ-\theta_B\approx36.9^\circ$.
</details>

## Remember

- Light is transverse; polarisation is the proof.
- A polariser halves unpolarised light: $I/2$.
- Malus’s law: $I=I_0\cos^2\theta$ for already polarised light.
- Brewster’s angle: $\tan\theta_B=n_2/n_1$.

This completes the concept modules of the chapter. The practice module consolidates method selection and mixed problems; the timed set puts them under exam conditions.