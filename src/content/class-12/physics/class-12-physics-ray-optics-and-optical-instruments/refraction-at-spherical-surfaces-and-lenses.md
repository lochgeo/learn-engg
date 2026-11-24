## From a flat surface to a curved one

A curved refracting surface can converge or diverge light. The same idea as a mirror, but now light crosses a boundary between two media. The general result for a single spherical surface, plus the thin-lens combination of two such surfaces, gives every standard lens formula.

## 1. Refraction at a spherical surface

For a spherical surface separating medium $n_1$ (object side) from $n_2$ (image side), with radius of curvature $R$ (positive if the centre of curvature lies on the outgoing side), the paraxial formula is

$$
\frac{n_2}{v}-\frac{n_1}{u}=\frac{n_2-n_1}{R}.
$$

The sign convention is the same Cartesian one: light left to right, $u<0$ for a real object. A positive $v$ means a real image on the outgoing side. This formula is the parent of all lens results.

## 2. Thin lenses

A thin lens is two spherical surfaces close together. Combining two surface refractions and taking the lens thickness to be negligible gives the **thin-lens formula**

$$
\frac{1}{v}-\frac{1}{u}=\frac{1}{f},
$$

and the **lensmaker’s equation**

$$
\frac{1}{f}=(n-1)\left(\frac{1}{R_1}-\frac{1}{R_2}\right),
$$

where $n$ is the refractive index of the lens material relative to the surrounding medium, and $R_1$, $R_2$ are the radii of the two surfaces (signed: positive if centre of curvature is on the outgoing side). For a lens in air:

- Converging (convex) lens: $f>0$.
- Diverging (concave) lens: $f<0$.

Magnification for a thin lens:

$$
m=\frac{v}{u}.
$$

(Positive $m$ means erect; negative means inverted — opposite to the mirror formula’s $-v/u$, but consistent with the lens formula.)

## 3. Power of a lens

The power $P$ is the reciprocal of focal length in metres:

$$
P=\frac{1}{f\ (\text{m})},
$$

measured in dioptres (D). Converging lenses have positive power, diverging negative. For lenses in contact, powers add: $P_{\text{total}}=P_1+P_2+\cdots$. This is why opticians combine thin lenses by simply adding their dioptres.

## 4. A worked example: image by a converging lens

A convex lens of focal length $15\ \text{cm}$ has an object $20\ \text{cm}$ in front of it. Find the image position, nature and magnification.

$u=-20\ \text{cm}$, $f=+15\ \text{cm}$.

$$
\frac{1}{v}=\frac{1}{f}+\frac{1}{u}=\frac{1}{15}+\frac{1}{-20}=\frac{4-3}{60}=\frac{1}{60},
$$

so $v=+60\ \text{cm}$: a real image $60\ \text{cm}$ on the far side. Magnification $m=v/u=60/(-20)=-3$: inverted and three times larger. Sanity check: an object just outside $F$ of a converging lens gives a real, inverted, enlarged image far away — consistent.

## 5. A worked example: lensmaker’s equation

A biconvex lens is made of glass of refractive index $1.5$, with both surfaces of radius $20\ \text{cm}$. Find its focal length in air.

For a biconvex lens, $R_1=+20\ \text{cm}$ (first centre on the outgoing side) and $R_2=-20\ \text{cm}$ (second centre on the incoming side). Thus

$$
\frac{1}{f}=(1.5-1)\left(\frac{1}{20}-\frac{1}{-20}\right)
=0.5\left(\frac{2}{20}\right)=0.05\ \text{cm}^{-1},
$$

so $f=20\ \text{cm}$. Positive, as expected for a converging lens.

## 6. Lenses in combination

For two thin lenses separated by distance $d$, the effective focal length satisfies

$$
\frac{1}{f_{\text{eff}}}=\frac{1}{f_1}+\frac{1}{f_2}-\frac{d}{f_1 f_2}.
$$

For $d=0$, powers add. A diverging lens can be combined with a converging one to make an achromatic doublet: the combination has a net converging power but reduced chromatic aberration, because the two glasses disperse light in opposite directions.

<learning-block type="mistake" title="Mixing mirror and lens magnification signs">
The mirror formula uses $m=-v/u$; the thin-lens formula uses $m=v/u$. The difference comes from how $v$ is measured relative to the reflected versus transmitted ray. A quick check: a converging lens with a real object outside $F$ gives an inverted real image, so $m$ must be negative — and $v/u$ is indeed negative there. If you get the sign wrong, image orientation flips.
</learning-block>

## Try it yourself

**A.** A diverging lens of focal length $-10\ \text{cm}$ has an object $15\ \text{cm}$ in front. Find the image position and magnification.

<details><summary>Show the reasoning</summary>

$u=-15\ \text{cm}$, $f=-10\ \text{cm}$.

$$
\frac{1}{v}=\frac{1}{f}+\frac{1}{u}=\frac{1}{-10}+\frac{1}{-15}=-\frac{1}{6},
$$

so $v=-6\ \text{cm}$: a virtual image $6\ \text{cm}$ on the same side as the object. Magnification $m=v/u=(-6)/(-15)=+0.4$: erect and diminished.

</details>

**B.** A lens of power $+4\ \text{D}$ is placed in contact with a lens of power $-1.5\ \text{D}$. Find the focal length of the combination.

<details><summary>Show the reasoning</summary>

$P_{\text{total}}=4-1.5=2.5\ \text{D}$, so $f=1/2.5=0.4\ \text{m}=40\ \text{cm}$. Converging overall.

</details>

**C.** Under what condition does a converging lens produce a virtual, erect, magnified image?

<details><summary>Show the reasoning</summary>

When the object lies between the lens and its focal point ($|u|<f$). Then $1/v=1/f+1/u$ gives $v<0$ (virtual, same side) and $m=v/u>1$ (erect, enlarged). This is the magnifying-glass configuration.

</details>

## Remember

- Spherical surface: $n_2/v-n_1/u=(n_2-n_1)/R$.
- Thin lens: $1/v-1/u=1/f$; lensmaker $1/f=(n-1)(1/R_1-1/R_2)$.
- Converging lens $f>0$; diverging $f<0$.
- Power $P=1/f$ (metres) in dioptres; powers in contact add.
- Lens magnification $m=v/u$ (mirror uses $-v/u$).

The next lesson turns to prisms: how a single piece of glass can split white light into colours.