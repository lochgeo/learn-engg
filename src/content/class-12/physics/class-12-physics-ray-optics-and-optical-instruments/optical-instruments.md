## Instruments are lenses and mirrors arranged for a purpose

Every optical instrument — magnifying glass, microscope, telescope — is an application of the lens and mirror formulas from the previous lessons. The only new ideas are **angular magnification** (how much larger the image appears to the eye) and **resolving power** (the finest detail the instrument can separate).

## 1. The simple microscope (magnifying glass)

A converging lens of short focal length held close to an object produces a virtual, erect, enlarged image. With the image at the near point ($D=25\ \text{cm}$), the angular magnification is

$$
M=1+\frac{D}{f}.
$$

With the image at infinity (relaxed eye), it is

$$
M=\frac{D}{f}.
$$

The first gives slightly more magnification but tires the eye; the second is more comfortable for long use.

## 2. The compound microscope

A compound microscope has an **objective** (short focal length $f_o$) that forms a real, inverted, enlarged image, and an **eyepiece** (focal length $f_e$) that acts as a magnifier for that image. The total angular magnification is

$$
M=m_o\times M_e \approx \frac{L}{f_o}\left(1+\frac{D}{f_e}\right)
$$

for the image at the near point, or $\frac{L}{f_o}\frac{D}{f_e}$ for the image at infinity. Here $L$ is the **tube length**: the distance between the second focal point of the objective and the first focal point of the eyepiece. Typical values: $f_o\sim 4\ \text{mm}$, $f_e\sim 2.5\ \text{cm}$, $L\sim 16\ \text{cm}$, giving $M\sim 400$.

## 3. The astronomical telescope

A telescope views distant objects. The objective (long focal length $f_o$) forms a real image in its focal plane; the eyepiece (short $f_e$) magnifies it. The angular magnification in normal adjustment (final image at infinity) is

$$
M=\frac{f_o}{f_e}.
$$

The length of the telescope is $f_o+f_e$. An **inverting** telescope gives an upside-down image; a **terrestrial** telescope adds an erecting lens (or uses a prism) to make the image upright, at the cost of length.

## 4. Resolving power

Magnification is useless beyond the point where detail can be resolved. The **limit of resolution** of a circular aperture is set by diffraction:

$$
\theta_{\min}=1.22\frac{\lambda}{D},
$$

where $D$ is the aperture diameter. The **resolving power** is $1/\theta_{\min}$. Hence a larger aperture resolves finer detail. For a microscope, the relevant formula is

$$
d_{\min}=0.61\frac{\lambda}{n\sin\theta},
$$

where $n\sin\theta$ is the **numerical aperture** of the objective. Oil immersion increases $n$ and therefore the resolving power.

## 5. A worked example: compound microscope

An objective of focal length $4\ \text{mm}$ and an eyepiece of focal length $2.5\ \text{cm}$ are used with tube length $16\ \text{cm}$. Find the magnification with the final image at the near point ($D=25\ \text{cm}$).

Objective magnification:

$$
m_o=\frac{L}{f_o}=\frac{16}{0.4}=40.
$$

Eyepiece magnification:

$$
M_e=1+\frac{D}{f_e}=1+\frac{25}{2.5}=11.
$$

Total:

$$
M=40\times 11=440.
$$

Sanity check: a standard student microscope of about $400\times$ is exactly this range, so the numbers are realistic.

## 6. A worked example: telescope

An astronomical telescope has an objective of focal length $100\ \text{cm}$ and an eyepiece of focal length $5\ \text{cm}$. Find its magnification and length in normal adjustment.

$$
M=\frac{f_o}{f_e}=\frac{100}{5}=20,\qquad L=f_o+f_e=105\ \text{cm}.
$$

The image is inverted; to erect it, an erecting lens or prism system is needed.

## 7. Choosing an instrument

- **Simple microscope**: small, cheap, good for quick inspection; limited magnification ($\sim 10\times$).
- **Compound microscope**: high magnification for small nearby objects; needs illumination and careful focusing.
- **Telescope**: for distant objects; magnification limited by aperture and resolving power.
- **Binoculars**: two telescopes side by side with prisms for an upright image.

<learning-block type="mistake" title="Confusing linear and angular magnification">
A microscope’s objective gives a **linear** magnification $m_o=v/u\approx L/f_o$; the eyepiece gives an **angular** magnification. The total is their product, not their sum. Also, magnification without resolving power is empty: a telescope with a tiny aperture cannot resolve detail no matter how large $M$ is.
</learning-block>

## Try it yourself

**A.** A magnifying glass has focal length $5\ \text{cm}$. What is its maximum angular magnification, and what is it with the eye relaxed?

<details><summary>Show the reasoning</summary>

Maximum (image at near point): $M=1+D/f=1+25/5=6$. Relaxed (image at infinity): $M=D/f=25/5=5$.

</details>

**B.** A telescope has $f_o=120\ \text{cm}$ and $f_e=4\ \text{cm}$. Find its magnification and length in normal adjustment.

<details><summary>Show the reasoning</summary>

$M=f_o/f_e=120/4=30$. Length $=f_o+f_e=124\ \text{cm}$.

</details>

**C.** The resolving power of a telescope is improved by increasing its aperture. Explain why, using the diffraction limit.

<details><summary>Show the reasoning</summary>

The minimum resolvable angle is $\theta_{\min}=1.22\lambda/D$. A larger $D$ makes $\theta_{\min}$ smaller, so finer angular detail can be distinguished. Magnification alone cannot beat this diffraction limit.

</details>

## Remember

- Simple microscope: $M=1+D/f$ (near point) or $D/f$ (infinity).
- Compound microscope: $M\approx (L/f_o)(1+D/f_e)$.
- Telescope: $M=f_o/f_e$, length $f_o+f_e$ in normal adjustment.
- Diffraction limit $\theta_{\min}=1.22\lambda/D$ sets the finest resolvable detail.
- Magnification must be paired with resolving power to be useful.

This completes the concept lessons of the chapter. The review module next ties all five together into a study plan and mastery check.