## A wavefront is where the phase is the same

In ray optics, light is drawn as straight lines. That picture works when apertures and obstacles are much larger than the wavelength. When they are comparable, light bends, spreads and interferes. Wave optics starts from the idea that light is a wave: a **wavefront** is the set of all points that share the same phase at a given instant, and a **ray** is simply a line drawn perpendicular to wavefronts, pointing in the direction the wave travels. Huygens’ principle is the construction that lets a wavefront advance through space.

## 1. Wavefronts and rays

A point source sends out spherical wavefronts; a long, straight source sends out cylindrical ones. Very far from any source, a small patch of a spherical wavefront looks flat, so we use a **plane wavefront**. Energy travels along rays, which are always normal to the wavefronts. The spacing between successive wavefronts (one full wavelength apart in space) is $\lambda$ in the medium.

The wave speed, frequency and wavelength are linked by

$$
v=f\lambda.
$$

The source fixes $f$; the medium fixes $v$, so $\lambda$ changes from medium to medium. The refractive index is $n=c/v$.

## 2. Huygens’ principle

**Every point on a wavefront may be treated as a source of secondary spherical wavelets.** These wavelets spread out in all directions at the speed of the wave in that medium. The **envelope** of the wavelets — the surface tangent to all of them after a short time — is the new wavefront.

This is a construction, not a claim that the medium contains tiny emitters. The physical disturbance is the superposition of all the wavelets; the envelope is the place where they add in phase and the wave actually advances.

For a **plane wavefront** in a uniform medium, every point emits a wavelet of radius $v\,\Delta t$. Their forward tangent plane is parallel to the original wavefront and displaced by $v\,\Delta t$. So a plane wave stays plane and moves at speed $v$.

For a **spherical wavefront**, the radius grows from $R$ to $R+v\,\Delta t$. The wavelets from all points on the sphere combine to give a larger, concentric sphere.

## 3. What the construction is good for

- It gives propagation in a uniform medium without solving the full wave equation.
- It explains **diffraction**: when a wavefront is cut by an edge or slit, the wavelets near the edge have no neighbours to cancel them, so the wave spreads into the geometric shadow.
- It explains **reflection and refraction**: at a boundary the two media have different wave speeds, so the envelope bends.

## 4. A worked example

A point source in air emits light with wavelength $\lambda_0=600\ \text{nm}$. Take $c=3.0\times10^8\ \text{m/s}$.

The period is

$$
T=\frac{\lambda_0}{c}=\frac{600\times10^{-9}}{3.0\times10^8}=2.0\times10^{-15}\ \text{s}.
$$

In one period, each secondary wavelet grows to radius

$$
r=cT=3.0\times10^8\times2.0\times10^{-15}=6.0\times10^{-7}\ \text{m}=600\ \text{nm}=\lambda_0.
$$

So the new spherical wavefront is exactly one wavelength larger in radius; the phase has advanced by $2\pi$. Sanity check: the distance advanced equals $vT=\lambda$, as it must for one full cycle.

## 5. A common mistake

Treating the secondary wavelets as independent rays that all carry equal energy in every direction, and ignoring the **envelope**. The wavelets are a mathematical decomposition; the physical wave is their superposition, and the envelope selects the forward direction. A second error is confusing the spacing of wavefronts ($\lambda$) with the spacing of rays; rays are a direction, not a set of lines with a fixed separation.

<learning-block type="mistake" title="Huygens construction errors">
- Drawing wavelets only forward and then claiming the construction proves light travels only forward. The backward envelope cancels by superposition in a uniform medium.
- Using the speed of light in vacuum for wavelets inside glass or water. The wavelet speed is the wave speed in that medium, $v=c/n$.
- Forgetting that frequency is unchanged when a wave enters a new medium; only $v$ and $\lambda$ change.
</learning-block>

## Try it yourself

**A.** A plane wave in air has wavelength $500\ \text{nm}$. It enters glass of refractive index $1.5$. What are its frequency, speed and wavelength in glass?

<details><summary>Show the reasoning</summary>

Frequency is set by the source: $f=c/\lambda_0=3.0\times10^8/(500\times10^{-9})=6.0\times10^{14}\ \text{Hz}$, unchanged. In glass, $v=c/1.5=2.0\times10^8\ \text{m/s}$ and $\lambda=v/f=333\ \text{nm}$. The wavelength shrinks by the factor $n$.
</details>

**B.** Why does a plane wavefront remain plane in a uniform medium? Answer in one sentence using wavelets.

<details><summary>Show the reasoning</summary>

Every point on a plane wavefront emits wavelets of the same radius $v\,\Delta t$, so their forward tangent surface is a parallel plane displaced by $v\,\Delta t$.
</details>

**C.** A point source emits a spherical wave. After time $\Delta t$ the radius has grown by $v\,\Delta t$. If the source frequency is $f$, how many wavefronts cross a fixed point in that time?

<details><summary>Show the reasoning</summary>

The number is $f\,\Delta t$, because frequency counts wavefronts passing per second. Each wavefront is one cycle, so in time $\Delta t$ the count is $f\Delta t$.
</details>

## Remember

- A wavefront is a surface of constant phase; rays are perpendicular to it.
- Huygens’ principle advances a wavefront by taking the envelope of secondary wavelets.
- Wavelet speed equals the wave speed in the medium, not necessarily $c$.
- Frequency is source-determined; wavelength changes with medium.

The next module uses this construction at a boundary between two media to obtain the laws of reflection and refraction.