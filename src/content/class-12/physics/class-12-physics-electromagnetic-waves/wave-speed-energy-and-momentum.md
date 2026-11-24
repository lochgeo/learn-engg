## Sunlight pushes as well as warms

Stand in sunlight and you feel energy arriving on your skin. A beam of light also carries momentum. The push is unimaginably small in everyday life — a few millionths of a newton per square metre — but it is real. Comet tails are shaped by it, and spacecraft have sailed on it. The same calculation that gives the warmth of sunlight also gives the pressure of light.

This lesson connects the fields of an electromagnetic wave to the energy it transports, the rate at which that energy crosses an area, and the momentum delivered when the wave is absorbed or reflected.

## 1. Energy stored in the two fields

An electric field stores energy with density $u_E=\tfrac12\varepsilon_0 E^2$, and a magnetic field stores energy with density $u_B=B^2/(2\mu_0)$. Both are measured in $\text{J/m}^3$. For a plane wave in vacuum, $B=E/c$ and $c^2=1/(\mu_0\varepsilon_0)$. Substitute:

$$
u_B=\frac{(E/c)^2}{2\mu_0}
=\frac{E^2}{2\mu_0 c^2}
=\frac12\varepsilon_0 E^2
=u_E.
$$

The two energy densities are equal at every instant, not merely on average. The total energy density is therefore $u=u_E+u_B=\varepsilon_0E^2=B^2/\mu_0$.

That equality is a useful check. An answer that gives all the energy to the electric field, or a magnetic energy density twice the electric one, has lost a factor of two somewhere.

## 2. Intensity

The energy in a slab of area $A$ and thickness $c\,\Delta t$ crosses that area in time $\Delta t$. The intensity is the average power per unit area, $I=c\,\langle u\rangle$. For a sinusoidal wave, $E=E_0\cos(kx-\omega t)$ and the average of $\cos^2$ over a full cycle is $\tfrac12$. Thus

$$
\langle u\rangle=\tfrac12\varepsilon_0E_0^2,
\qquad
I=\tfrac12\varepsilon_0 c E_0^2.
$$

It is often more convenient to use the root-mean-square field, $E_{\text{rms}}=E_0/\sqrt2$, for which $I=\varepsilon_0 c E_{\text{rms}}^2$. The two forms are identical because $E_0^2=2E_{\text{rms}}^2$. Intensity has units $\text{W/m}^2$. It is a property of the wave at a point, whereas power is intensity multiplied by the area through which the energy passes.

<learning-block type="check" title="Which field amplitude belongs in the formula?">

If a question gives the **peak** field, use $I=\tfrac12\varepsilon_0cE_0^2$. If it gives the **rms** field, use $I=\varepsilon_0cE_{\text{rms}}^2$. Mixing the two forms multiplies or divides the answer by two. The same care applies to $B$: $B_{\text{rms}}=B_0/\sqrt2$.

</learning-block>

## 3. The Poynting vector

Energy does not simply sit in the wave; it flows in a definite direction. The instantaneous energy flux is described by the **Poynting vector** $\vec S=(1/\mu_0)\,\vec E\times\vec B$. Its direction is the direction of energy transport, and its magnitude is power per unit area. For a plane wave the fields are perpendicular, so $S=EB/\mu_0=E^2/(\mu_0 c)=\varepsilon_0cE^2$.

Averaging over a cycle gives $\langle S\rangle=I$. At a fixed point the instantaneous Poynting vector oscillates between zero and twice its average, because both fields oscillate together. The average is what a detector usually measures.

The Poynting vector is not restricted to plane waves. For any arrangement of fields, $\vec S$ at a point tells you the local rate and direction of electromagnetic energy transfer. In a resistor, for example, it points inward from the surrounding fields and accounts for the energy dissipated as heat.

## 4. Momentum and radiation pressure

A wave that carries energy $U$ also carries momentum $p=U/c$ if it is a collimated beam in vacuum. The momentum density is $u/c$. When the wave strikes a surface, the change in momentum produces a force.

- **Perfect absorber:** the incident momentum is absorbed, so the pressure is $P_{\text{abs}}=I/c$.
- **Perfect reflector at normal incidence:** the momentum reverses, so the change is twice as large: $P_{\text{refl}}=2I/c$.

The force on an area $A$ is $F=PA$. For an oblique beam or a partially reflecting surface, only the normal component of momentum change matters and the pressure is reduced by a factor involving the angle and the reflectance. The normal-incidence formulas above are the standard special case.

Because $c$ is large, radiation pressure is tiny for ordinary light levels. It becomes important for intense laser beams, for very large but very light surfaces such as solar sails, and for microscopic particles held in optical traps.

## 5. Worked example: a small laser beam

A laser delivers $3.0\ \text{mW}$ in a beam of cross-sectional area $2.0\ \text{mm}^2$. Find the intensity, the rms and peak electric fields, the magnetic amplitude, and the radiation pressure on a perfectly absorbing and on a perfectly reflecting surface.

The area is $2.0\ \text{mm}^2=2.0\times10^{-6}\ \text{m}^2$, so $I=P/A=(3.0\times10^{-3})/(2.0\times10^{-6})=1.5\times10^{3}\ \text{W/m}^2$. From $I=\varepsilon_0cE_{\text{rms}}^2$,

$$
E_{\text{rms}}=\sqrt{\frac{I}{\varepsilon_0c}}
=\sqrt{\frac{1.5\times10^{3}}{(8.85\times10^{-12})(3.00\times10^{8})}}
\approx7.5\times10^{2}\ \text{V/m}.
$$

The peak field is $E_0=\sqrt2\,E_{\text{rms}}\approx1.1\times10^{3}\ \text{V/m}$, and $B_0=E_0/c\approx3.5\times10^{-6}\ \text{T}$. For a perfect absorber,

$$
P_{\text{abs}}=\frac{I}{c}
=\frac{1.5\times10^{3}}{3.0\times10^{8}}
=5.0\times10^{-6}\ \text{Pa}.
$$

For a perfect reflector the pressure is twice this, $1.0\times10^{-5}\ \text{Pa}$. The momentum delivered per second is $(3.0\times10^{-3})/(3.0\times10^{8})=1.0\times10^{-11}\ \text{N}$, so the force on the absorber is about $10^{-11}\ \text{N}$ — small, but measurable with sensitive optical instruments.

<learning-block type="mistake" title="The two radiation-pressure factors of two">

The commonest error is to use $I/c$ for a mirror. A perfect reflector reverses the photon momentum, so the momentum change is $2p$ and the pressure is $2I/c$. The second error is to use the peak electric field in $I=\varepsilon_0cE^2$. That expression needs $E_{\text{rms}}$; with $E_0$ it must be halved. Finally, do not say that the magnetic field carries no energy: for a plane wave $u_B=u_E$.

</learning-block>

## Try it yourself

**A.** A plane wave has intensity $2.0\ \text{kW/m}^2$. Find $E_{\text{rms}}$ and $E_0$.

<details><summary>Show the reasoning</summary>

$$
E_{\text{rms}}=\sqrt{\frac{2000}{(8.85\times10^{-12})(3.00\times10^{8})}}
\approx8.7\times10^{2}\ \text{V/m}.
$$

Then $E_0=\sqrt2E_{\text{rms}}\approx1.2\times10^{3}\ \text{V/m}$.
</details>

**B.** Sunlight of intensity $1.4\ \text{kW/m}^2$ strikes a $1.0\ \text{m}^2$ solar sail normally. Find the force if the sail absorbs all the light, and if it reflects all the light.

<details><summary>Show the reasoning</summary>

Absorbing: $F=IA/c=(1.4\times10^{3})(1.0)/(3.0\times10^{8})=4.7\times10^{-6}\ \text{N}$. Reflecting: $F=2IA/c=9.3\times10^{-6}\ \text{N}$. Both forces are tiny, but a steady force in space produces a large velocity change over months.
</details>

**C.** At an instant when the electric field of a plane wave is at its maximum, what fraction of the total energy density is electric?

<details><summary>Show the reasoning</summary>

One half. For a plane wave $u_B=u_E$ at every instant, so the electric field contributes $u_E/(u_E+u_B)=\tfrac12$ of the total even when $E$ and $B$ are both at their peak values.
</details>

## Remember

- For a plane wave, $u_E=u_B$ and $u=\varepsilon_0E^2=B^2/\mu_0$.
- Intensity is $I=\tfrac12\varepsilon_0cE_0^2=\varepsilon_0cE_{\text{rms}}^2$.
- The Poynting vector $\vec S=\vec E\times\vec B/\mu_0$ gives the direction and rate of energy flow; its average magnitude is $I$.
- A beam of energy $U$ carries momentum $U/c$.
- Radiation pressure is $I/c$ on a perfect absorber and $2I/c$ on a perfect reflector at normal incidence.

The next lesson sorts the whole family of electromagnetic waves by frequency, from radio waves to gamma rays.
