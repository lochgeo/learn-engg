## A prism does more than bend light

A prism is a transparent block with two plane refracting surfaces inclined at an angle. It deviates light and, because refractive index varies with wavelength, it also **disperses** white light into colours. A third phenomenon — **scattering** — explains why the sky is blue and sunsets are red, even though no prism is involved.

## 1. Deviation by a thin prism

For a prism of small refracting angle $A$, a ray is deviated by approximately

$$
\delta=(n-1)A,
$$

where $n$ is the refractive index of the prism material relative to air. The deviation is independent of the angle of incidence for small $A$ and points toward the thicker part (base) of the prism.

For a general prism, the exact deviation is

$$
\delta=i_1+i_2-A,
$$

where $i_1$ and $i_2$ are the angles of incidence and emergence, and $A$ is the prism angle. At **minimum deviation** $\delta_m$, the ray passes symmetrically: $i_1=i_2$ and the internal angles are equal. Then

$$
n=\frac{\sin\frac{A+\delta_m}{2}}{\sin\frac{A}{2}}.
$$

This is the standard experimental method for measuring refractive index.

## 2. Dispersion

Refractive index is not constant: $n$ is larger for shorter wavelengths. Violet light is bent more than red. The **angular dispersion** between two colours is

$$
\Delta\delta=(n_v-n_r)A
$$

for a thin prism. The **dispersive power** $\omega$ compares this spread to the mean deviation:

$$
\omega=\frac{n_v-n_r}{n_y-1},
$$

where $n_y$ is the index for yellow (or the mean) light. A high $\omega$ means colours separate widely; a low $\omega$ means the prism is nearly achromatic.

## 3. The spectrum and recombination

White light entering a prism spreads into a spectrum: red, orange, yellow, green, blue, indigo, violet (ROYGBIV). A second inverted prism can recombine the colours into white light, showing that the prism does not create colour but separates what was already present.

## 4. Scattering of light

When light meets particles much smaller than its wavelength, it is **scattered**. Rayleigh scattering gives an intensity

$$
I_{\text{scattered}}\propto \frac{1}{\lambda^4}.
$$

Shorter wavelengths scatter far more strongly than longer ones. This single law explains several everyday observations:

- **Blue sky**: sunlight is scattered by air molecules; blue ($\sim 450\ \text{nm}$) scatters about $(700/450)^4\approx 5.6$ times more than red, so the sky looks blue.
- **Red sunset**: at sunrise or sunset, light travels a long path through the atmosphere, most blue is scattered out of the direct beam, and the remaining light is reddish.
- **Tyndall effect**: a beam of light becomes visible in a colloid or dusty room because particles scatter it sideways.

For particles comparable to or larger than the wavelength, Mie scattering takes over and the colour dependence weakens, which is why clouds look white.

## 5. A worked example

A thin prism of angle $6^\circ$ is made of glass with $n_{\text{yellow}}=1.5$ and $n_{\text{violet}}-n_{\text{red}}=0.014$. Find the mean deviation and the angular dispersion.

Mean deviation:

$$
\delta=(n_y-1)A=(1.5-1)(6^\circ)=3^\circ.
$$

Angular dispersion:

$$
\Delta\delta=(n_v-n_r)A=0.014\times 6^\circ=0.084^\circ.
$$

Dispersive power:

$$
\omega=\frac{0.014}{0.5}=0.028.
$$

Sanity check: the spread is small compared with the mean deviation, and the dispersive power is a few percent, both typical for crown glass.

## 6. Rainbows (brief)

A rainbow is sunlight dispersed by water droplets: refraction at entry, TIR inside the drop, and refraction at exit. The primary bow is red on the outside and violet inside; a fainter secondary bow appears outside it with colours reversed. No prism is needed — just spherical droplets and TIR.

<learning-block type="mistake" title="Deviation versus dispersion">
A common error is to treat deviation and dispersion as the same number. Deviation is how far the whole beam is bent; dispersion is how far colours separate. A prism can have large deviation but small dispersion (or vice versa). Also remember that for a thin prism $\delta=(n-1)A$ uses the index for the colour in question; different colours have different $\delta$.
</learning-block>

## Try it yourself

**A.** A thin prism of angle $4^\circ$ and index $1.6$ deviates a ray. Find the deviation.

<details><summary>Show the reasoning</summary>

$\delta=(n-1)A=(1.6-1)(4^\circ)=2.4^\circ$.

</details>

**B.** In a minimum-deviation experiment, $A=60^\circ$ and $\delta_m=30^\circ$. Find the refractive index of the prism.

<details><summary>Show the reasoning</summary>

$$
n=\frac{\sin\frac{60+30}{2}}{\sin\frac{60}{2}}
=\frac{\sin 45^\circ}{\sin 30^\circ}
=\frac{0.7071}{0.5}=1.414.
$$

</details>

**C.** Why does the sky look red near the horizon at sunset but blue overhead at noon?

<details><summary>Show the reasoning</summary>

Rayleigh scattering favours short wavelengths. Overhead at noon the path through air is short, so blue scatters into the eye from all directions. Near the horizon at sunset the path is much longer, blue is scattered away before reaching the observer, and the surviving direct beam is rich in red and orange.

</details>

## Remember

- Thin prism deviation $\delta=(n-1)A$; exact $\delta=i_1+i_2-A$.
- Minimum deviation gives $n=\sin((A+\delta_m)/2)/\sin(A/2)$.
- Dispersion: colours separate because $n$ varies with wavelength; angular dispersion $=(n_v-n_r)A$.
- Rayleigh scattering $\propto 1/\lambda^4$ explains the blue sky and red sunset.
- Clouds look white because Mie scattering is nearly wavelength-independent.

The final concept lesson collects these ideas into optical instruments.