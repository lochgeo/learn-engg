## Two slits turn phase into position

Young’s double-slit experiment is the canonical demonstration of light’s wave nature. A single wavefront is split by two narrow slits into two coherent sources. On a distant screen, the path difference from the two slits varies with position, so the phase difference varies too, and a pattern of bright and dark fringes appears.

## 1. Geometry

Let the slits be separated by distance $d$, and let the screen be at distance $D$ from the slits ($D\gg d$). A point $P$ on the screen is at angle $\theta$ from the central axis. The path difference between the two slits to $P$ is

$$
\Delta=d\sin\theta.
$$

For small angles, $\sin\theta\approx\tan\theta=y/D$, where $y$ is the distance of $P$ from the centre of the screen. Hence

$$
\Delta\approx\frac{dy}{D}.
$$

## 2. Bright and dark fringes

Using the interference conditions with zero initial phase difference:

- **Bright (constructive):** $\Delta=m\lambda$, so

$$
d\sin\theta_m=m\lambda,\qquad y_m=\frac{m\lambda D}{d}.
$$

- **Dark (destructive):** $\Delta=(m+\tfrac12)\lambda$, so

$$
y_m=\frac{(m+\tfrac12)\lambda D}{d}.
$$

Here $m=0,\pm1,\pm2,\dots$. The central fringe ($m=0$) is bright.

## 3. Fringe width

The separation between consecutive bright fringes (or consecutive dark fringes) is

$$
\beta=\frac{\lambda D}{d}.
$$

This **fringe width** is constant near the centre and is the quantity most often asked for.

## 4. Intensity pattern

If each slit alone would give intensity $I_0$ at the screen, the two-slit intensity is

$$
I=4I_0\cos^2\!\left(\frac{\pi d\sin\theta}{\lambda}\right).
$$

The envelope of this pattern is governed by single-slit diffraction (next module); for very narrow slits the envelope is broad.

## 5. Worked example

Light of wavelength $\lambda=5.0\times10^{-7}\ \text{m}$ passes through slits separated by $d=0.50\ \text{mm}=5.0\times10^{-4}\ \text{m}$, onto a screen at $D=1.0\ \text{m}$.

Fringe width:

$$
\beta=\frac{\lambda D}{d}=\frac{5.0\times10^{-7}\times1.0}{5.0\times10^{-4}}=1.0\times10^{-3}\ \text{m}=1.0\ \text{mm}.
$$

Position of the third bright fringe from the centre:

$$
y_3=3\beta=3.0\ \text{mm}.
$$

Position of the first dark fringe:

$$
y=\frac{\lambda D}{2d}=0.50\ \text{mm}.
$$

Sanity check: $\lambda\ll d$, so the angles are small and the small-angle approximation is valid ($\sin\theta\approx\tan\theta$). The fringes are closely spaced, as expected for a macroscopic slit separation.

## 6. A common mistake

Treating $d$ as the slit **width** rather than the slit **separation**. The interference spacing depends on $d$ (separation); the overall brightness envelope depends on the slit width. A second error is using $\beta=\lambda d/D$ (inverted), which gives nonsensical tiny or huge spacings.

<learning-block type="mistake" title="Double-slit errors">
- Confusing fringe width $\beta$ with wavelength $\lambda$; $\beta$ can be millimetres while $\lambda$ is hundreds of nanometres.
- Forgetting that the central fringe is bright, not dark.
- Applying the double-slit formula when only one slit is open; with one slit there is no interference, only diffraction.
</learning-block>

## Try it yourself

**A.** In a Young’s experiment, $\lambda=6.0\times10^{-7}\ \text{m}$, $D=1.2\ \text{m}$, $d=0.40\ \text{mm}$. Find the fringe width and the distance of the fifth dark fringe from the centre.

<details><summary>Show the reasoning</summary>

$\beta=\lambda D/d=(6.0\times10^{-7}\times1.2)/(4.0\times10^{-4})=1.8\times10^{-3}\ \text{m}=1.8\ \text{mm}$. The fifth dark fringe corresponds to $m=4$ in $\Delta=(m+\tfrac12)\lambda$, so $y=(4.5)\beta=8.1\ \text{mm}$.
</details>

**B.** If the slit separation is doubled while $\lambda$ and $D$ stay the same, what happens to the fringe width and to the intensity at the centre?

<details><summary>Show the reasoning</summary>

$\beta$ halves, so fringes become closer. The central intensity stays $4I_0$ (constructive at $\Delta=0$); only the spacing changes.
</details>

**C.** Why must the slits be narrow compared with their separation for clear fringes?

<details><summary>Show the reasoning</summary>

Narrow slits give a broad diffraction envelope, so many interference fringes are visible with nearly equal brightness. Wide slits modulate the envelope and can suppress higher-order fringes.
</details>

## Remember

- Path difference: $\Delta=d\sin\theta\approx dy/D$.
- Bright fringes: $y_m=m\lambda D/d$.
- Dark fringes: $y_m=(m+\tfrac12)\lambda D/d$.
- Fringe width: $\beta=\lambda D/d$.

The next module examines what happens when there is only one slit: the wavefront across its width produces diffraction, not interference fringes.