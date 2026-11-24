## One slit is enough to spread a wave

Diffraction is the spreading of a wave when it passes through an aperture or around an obstacle. In the double-slit experiment the slits were narrow; if only **one** slit of finite width is open, the wavelets from different points across that width interfere with one another. The result is not uniform illumination but a pattern of a broad central maximum with weaker side maxima.

## 1. Conditions for minima

Let the slit have width $a$. Treat each point across the slit as a Huygens source. For a direction $\theta$, the path difference between the two edges is $a\sin\theta$.

Divide the slit into pairs of points separated by $a/2$. When $a\sin\theta=\lambda$, each pair cancels, giving the first minimum. More generally, the **minima** occur when

$$
a\sin\theta=m\lambda,\qquad m=\pm1,\pm2,\pm3,\dots
$$

($m=0$ gives the central maximum, not a minimum.)

## 2. The central maximum

The first minima on either side are at $\sin\theta=\pm\lambda/a$. The central maximum therefore spans an angular width

$$
2\theta_1\approx\frac{2\lambda}{a}
$$

for small angles, and its linear width on a screen at distance $D$ is

$$
w=\frac{2\lambda D}{a}.
$$

Notice that the central maximum is **twice** as wide as the spacing between adjacent minima.

## 3. Intensity distribution

The single-slit intensity pattern is

$$
I=I_0\left(\frac{\sin\beta}{\beta}\right)^2,\qquad \beta=\frac{\pi a\sin\theta}{\lambda}.
$$

Minima occur where $\sin\beta=0$ (and $\beta\neq0$), which reproduces $a\sin\theta=m\lambda$. The secondary maxima lie approximately where $\tan\beta=\beta$; their positions are roughly $(m+\tfrac12)\lambda/a$, and their intensities fall off rapidly.

## 4. Diffraction versus interference

- Interference (two or more slits) gives equally spaced fringes of comparable brightness.
- Diffraction (one aperture) gives a broad central peak whose width is inversely proportional to the aperture size.

A narrow slit produces wide diffraction; this is why a laser through a pinhole spreads.

## 5. Resolving power (extension)

For a circular aperture of diameter $D$, the Rayleigh criterion gives the minimum angular separation of two just-resolvable point sources:

$$
\theta_{\min}=1.22\frac{\lambda}{D}.
$$

This is why larger telescope mirrors or microscope objectives resolve finer detail.

## 6. Worked example

A slit of width $a=1.0\times10^{-4}\ \text{m}$ is illuminated by light of wavelength $\lambda=6.0\times10^{-7}\ \text{m}$; the screen is at $D=1.0\ \text{m}$.

First minimum:

$$
\sin\theta_1=\frac{\lambda}{a}=\frac{6.0\times10^{-7}}{1.0\times10^{-4}}=6.0\times10^{-3},
\qquad \theta_1\approx0.34^\circ.
$$

Linear position of first minimum:

$$
y_1=D\tan\theta_1\approx D\sin\theta_1=6.0\times10^{-3}\ \text{m}=6.0\ \text{mm}.
$$

Central maximum width:

$$
w=2y_1=12\ \text{mm}.
$$

Sanity check: the slit is about 170 wavelengths wide, so diffraction is modest but measurable, and the central peak is a few millimetres across — reasonable for a tabletop experiment.

## 7. A common mistake

Applying the double-slit fringe formula $\beta=\lambda D/d$ to a single slit. With one slit there are no interference fringes of equal spacing; instead there is a diffraction envelope with minima at $a\sin\theta=m\lambda$. A second error is treating the central maximum as having the same width as a side lobe.

<learning-block type="mistake" title="Single-slit diffraction errors">
- Forgetting that $m=0$ is the central maximum, not the first minimum.
- Using the slit width $a$ as if it were a slit separation $d$.
- Expecting secondary maxima to be as bright as the central one; they are much weaker.
</learning-block>

## Try it yourself

**A.** A slit of width $0.20\ \text{mm}$ is illuminated by $\lambda=500\ \text{nm}$ light. Find the angular position of the first minimum and the width of the central maximum on a screen $1.5\ \text{m}$ away.

<details><summary>Show the reasoning</summary>

$\sin\theta_1=\lambda/a=5.0\times10^{-7}/2.0\times10^{-4}=2.5\times10^{-3}$, so $\theta_1\approx0.14^\circ$. On the screen, $y_1=1.5\times2.5\times10^{-3}=3.75\ \text{mm}$ and the central width is $7.5\ \text{mm}$.
</details>

**B.** If the slit is made narrower, does the central maximum become wider or narrower? Explain.

<details><summary>Show the reasoning</summary>

Wider. The first minimum moves to larger $\theta$ because $\sin\theta_1=\lambda/a$ increases as $a$ decreases. A narrower aperture diffracts more.
</details>

**C.** Why does a very wide slit (many millimetres) show essentially no diffraction pattern on a laboratory screen?

<details><summary>Show the reasoning</summary>

The first minimum occurs at $\theta_1\approx\lambda/a$, which becomes tiny; the central maximum is then much wider than the screen, so illumination looks uniform.
</details>

## Remember

- Single-slit minima: $a\sin\theta=m\lambda$ ($m=\pm1,\pm2,\dots$).
- Central maximum width: $2\lambda D/a$.
- Intensity: $I=I_0(\sin\beta/\beta)^2$.
- Narrower aperture → more spreading.

The next module moves from the amplitude of light to its **polarisation**, the property that reveals light is a transverse wave.