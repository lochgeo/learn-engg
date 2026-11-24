## Two fields that keep each other alive

Faraday showed that a changing magnetic field drives a current around a loop. Maxwell’s displacement current says that a changing electric field behaves like a current and creates a magnetic field. Put the two statements together in empty space and something remarkable happens: a changing electric field generates a magnetic field, the changing magnetic field regenerates an electric field, and the disturbance travels without any medium to carry it.

That travelling disturbance is an electromagnetic wave. Its measured speed, built from two constants of electricity and magnetism, turned out to equal the speed of light. Light itself is the same phenomenon.

## 1. Coupled equations in vacuum

In a region with no charges and no currents, the relevant Maxwell equations are

$$
\oint \vec E\cdot d\vec l=-\frac{d\Phi_B}{dt},
\qquad
\oint \vec B\cdot d\vec l=\mu_0\varepsilon_0\frac{d\Phi_E}{dt}.
$$

The first is Faraday’s law; the second is the Ampère–Maxwell law with the conduction-current term absent. Away from charges, a changing $\vec B$ curls $\vec E$, and a changing $\vec E$ curls $\vec B$. The fields are not independent once they vary with time.

## 2. Deriving the wave equation

Take a plane wave travelling along $x$, with the electric field along $y$ and the magnetic field along $z$:

$$
\vec E=E_y(x,t)\,\hat j,
\qquad
\vec B=B_z(x,t)\,\hat k.
$$

This choice keeps the fields uniform over every plane perpendicular to $x$. Faraday’s law in component form gives

$$
\frac{\partial E_y}{\partial x}=-\frac{\partial B_z}{\partial t}.
\tag{1}
$$

The Ampère–Maxwell law gives

$$
-\frac{\partial B_z}{\partial x}=\mu_0\varepsilon_0\frac{\partial E_y}{\partial t}.
\tag{2}
$$

Differentiate equation (1) with respect to $x$:

$$
\frac{\partial^2 E_y}{\partial x^2}
=-\frac{\partial}{\partial t}\left(\frac{\partial B_z}{\partial x}\right).
$$

Using equation (2) to replace $\partial B_z/\partial x$,

$$
\frac{\partial^2 E_y}{\partial x^2}
=\mu_0\varepsilon_0\frac{\partial^2 E_y}{\partial t^2}.
$$

The same procedure gives an identical equation for $B_z$. Comparing with the standard wave equation $\partial^2 f/\partial x^2=(1/v^2)\,\partial^2 f/\partial t^2$, the wave speed must be $v=1/\sqrt{\mu_0\varepsilon_0}$. Inserting $\mu_0=4\pi\times10^{-7}\ \text{T·m/A}$ and $\varepsilon_0=8.85\times10^{-12}\ \text{F/m}$,

$$
v=\frac{1}{\sqrt{(4\pi\times10^{-7})(8.85\times10^{-12})}}
\approx3.00\times10^{8}\ \text{m/s}.
$$

That is the speed of light in vacuum, $c$. The agreement was the decisive evidence that light is an electromagnetic wave.

## 3. What a plane wave looks like

A sinusoidal solution travelling in $+x$ is

$$
\vec E=E_0\cos(kx-\omega t)\,\hat j,
\qquad
\vec B=B_0\cos(kx-\omega t)\,\hat k,
$$

where $k=2\pi/\lambda$ is the angular wavenumber and $\omega=2\pi f$ is the angular frequency. The wave speed is $c=\omega/k=\lambda f$. Substituting into Faraday’s law gives $kE_0=\omega B_0$, so $E_0/B_0=\omega/k=c$.

The two fields oscillate **in phase**: they reach their maxima together, pass through zero together, and reverse together. Their vector product points along the propagation direction:

$$
\vec E\times\vec B \;\text{points along } +x.
$$

This is a compact way to remember the geometry. If $\vec E$ is along $+y$ and the wave travels along $+x$, then $\vec B$ must be along $+z$, because $\hat j\times\hat k=\hat i$.

<learning-block type="concept" title="Transverse by construction">

Both fields are perpendicular to the direction of travel. A component along $x$ that varied with $x$ would make $\nabla\cdot\vec E$ or $\nabla\cdot\vec B$ non-zero, which is impossible in charge-free space; a uniform longitudinal component cannot propagate as a wave. Electromagnetic waves in vacuum are therefore transverse. Longitudinal electromagnetic waves do not exist in vacuum.

</learning-block>

## 4. Properties worth carrying forward

| Property | Consequence |
| --- | --- |
| $\vec E\perp\vec B$, both $\perp$ propagation | the wave is transverse |
| $E$ and $B$ in phase | both are maximum at the same point and time |
| $E_0/B_0=c$ | the magnetic amplitude is tiny in SI units |
| speed $c=1/\sqrt{\mu_0\varepsilon_0}$ | no medium is required |
| $\vec E\times\vec B$ along the ray | fixes the third direction |
| superposition applies | waves cross without disturbing each other |

The small numerical value of $B_0$ does **not** mean the magnetic field is unimportant. For a plane wave the electric and magnetic energy densities are equal, as the next lesson shows. The fields are measured in different units, and $c$ converts between them.

## 5. Inside a material medium

In a linear, isotropic, non-conducting medium, replace $\varepsilon_0$ and $\mu_0$ by $\varepsilon=\varepsilon_r\varepsilon_0$ and $\mu=\mu_r\mu_0$. The wave speed becomes $v=1/\sqrt{\mu\varepsilon}=c/\sqrt{\mu_r\varepsilon_r}=c/n$, where the refractive index is $n=\sqrt{\mu_r\varepsilon_r}$. For most transparent materials $\mu_r\approx1$, so $n\approx\sqrt{\varepsilon_r}$. The frequency is set by the source and does not change on entering the medium; the wavelength shortens as $\lambda_{\text{medium}}=\lambda_0/n$.

This simple picture fails when the medium absorbs strongly, when $\varepsilon_r$ varies appreciably with frequency (dispersion), or when the material is a conductor. In those cases the refractive index must be treated as frequency-dependent and, for absorption, complex. The vacuum result remains the reference.

## 6. Worked example: an FM radio wave

An FM station broadcasts at $100\ \text{MHz}$ with an electric-field amplitude of $120\ \text{V/m}$. Find the wavelength, angular frequency, wavenumber and magnetic-field amplitude.

The wavelength is $\lambda=c/f=(3.00\times10^{8})/(1.00\times10^{8})=3.00\ \text{m}$. The angular frequency and wavenumber are

$$
\omega=2\pi f=6.28\times10^{8}\ \text{rad/s},
\qquad
k=\frac{2\pi}{\lambda}=2.09\ \text{rad/m}.
$$

The magnetic amplitude follows from $B_0=E_0/c$:

$$
B_0=\frac{120}{3.00\times10^{8}}=4.0\times10^{-7}\ \text{T}.
$$

This is less than a hundredth of the Earth’s steady magnetic field, yet the wave is easily detected. A receiving antenna responds to the electric field; a loop antenna responds to the magnetic field. The check is dimensional: volts per metre divided by metres per second gives tesla.

<learning-block type="mistake" title="E and B are not 90° out of phase">

A frequent error is to transfer the phase difference of an inductor or capacitor to a travelling wave. In an ideal plane electromagnetic wave in vacuum, $\vec E$ and $\vec B$ are **in phase**. They are perpendicular in space, not separated in time. A second error is to think that an electromagnetic wave needs a material medium. The fields sustain each other in vacuum; a medium only changes the speed and wavelength.

</learning-block>

## Try it yourself

**A.** A plane wave has $E_0=60\ \text{V/m}$ and travels along $-x$ with $\vec E$ along $+y$. Find $B_0$ and the direction of $\vec B$.

<details><summary>Show the reasoning</summary>

$B_0=E_0/c=2.0\times10^{-7}\ \text{T}$. For propagation along $-x$, $\vec E\times\vec B$ must point along $-x$. With $\vec E$ along $+y$, $\vec B$ must be along $-z$, since $\hat j\times(-\hat k)=-\hat i$.
</details>

**B.** Light of vacuum wavelength $500\ \text{nm}$ enters water of refractive index $1.33$. Find its speed, frequency and wavelength in water.

<details><summary>Show the reasoning</summary>

The speed is $v=c/n=2.26\times10^{8}\ \text{m/s}$. The frequency is unchanged: $f=c/\lambda_0=(3.00\times10^{8})/(5.00\times10^{-7})=6.00\times10^{14}\ \text{Hz}$. The wavelength becomes $\lambda=\lambda_0/n=500/1.33\approx376\ \text{nm}$.
</details>

**C.** Why does an electromagnetic wave not need a medium, while a sound wave does?

<details><summary>Show the reasoning</summary>

A sound wave is a mechanical disturbance: it needs neighbouring particles to push on one another. An electromagnetic wave is a disturbance of the fields themselves. A changing electric field produces a magnetic field and a changing magnetic field produces an electric field, so the pattern can propagate through empty space. The vacuum speed is fixed by $\mu_0$ and $\varepsilon_0$.
</details>

## Remember

- A changing $\vec E$ produces $\vec B$, and a changing $\vec B$ produces $\vec E$; in vacuum they sustain a travelling wave.
- The wave equation gives $c=1/\sqrt{\mu_0\varepsilon_0}\approx3.00\times10^{8}\ \text{m/s}$.
- In a plane wave, $\vec E$ and $\vec B$ are perpendicular, in phase, and both perpendicular to the propagation direction.
- $E_0/B_0=c$ and $\vec E\times\vec B$ points along the direction of travel.
- In a medium, $v=c/n$ and the wavelength changes while the frequency stays fixed.

Next, quantify what the wave carries: energy flowing through space, and momentum that can exert a pressure.
