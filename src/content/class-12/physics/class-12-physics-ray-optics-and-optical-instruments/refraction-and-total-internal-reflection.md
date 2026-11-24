## Light bends when the medium changes

A ray changes direction at a boundary between two transparent media because its speed changes. The **refractive index** $n$ of a medium measures how much light slows down: $n=c/v$, where $c$ is the speed in vacuum. Snell’s law relates the angles:

$$
n_1\sin i=n_2\sin r.
$$

Here $i$ is the angle of incidence and $r$ the angle of refraction, both measured from the normal. When light goes from a rarer to a denser medium ($n_2>n_1$), it bends toward the normal; going denser to rarer, it bends away.

## 1. Refractive index and its forms

For two media, the relative refractive index is $n_{21}=n_2/n_1=v_1/v_2$. Snell’s law can be written $n_{21}=\sin i/\sin r$. A useful relation for a slab of thickness $t$ is the **lateral shift**

$$
x=\frac{t\sin(i-r)}{\cos r},
$$

the sideways displacement of a ray that emerges parallel to its original direction.

## 2. Apparent depth

Viewed from air, an object in water appears closer to the surface. For near-normal viewing,

$$
\text{apparent depth}=\frac{\text{real depth}}{n},
$$

where $n$ is the refractive index of the denser medium relative to air. A swimming pool looks shallower than it is; a coin at the bottom appears raised. The same idea explains why a rod dipped in water looks bent at the surface.

## 3. Total internal reflection

When light travels from a denser to a rarer medium, the refracted ray bends away from the normal. As the angle of incidence grows, the angle of refraction approaches $90^\circ$. The incidence angle at which $r=90^\circ$ is the **critical angle** $C$, given by

$$
\sin C=\frac{n_2}{n_1}\qquad (n_1>n_2).
$$

For $i>C$, no refracted ray escapes; all the light is reflected back into the denser medium. This is **total internal reflection (TIR)**.

Conditions for TIR: light must go from denser to rarer medium, and $i>C$.

## 4. Applications of TIR

- **Optical fibres**: a glass core of higher refractive index is surrounded by cladding of lower index. Light entering within the acceptance cone undergoes repeated TIR and travels long distances with little loss.
- **Mirage**: on a hot road, air near the surface is rarer; rays from the sky undergo TIR and create an image of the sky that looks like water.
- **Diamond sparkle**: diamond has a high refractive index ($\approx 2.42$), so its critical angle is small (about $24.4^\circ$) and most light entering undergoes TIR before exiting, giving brilliance.
- **Porro prisms** in binoculars use TIR to fold the light path and erect the image.

## 5. A worked example

Light in glass ($n_1=1.5$) strikes a glass–air boundary. Find the critical angle and decide whether TIR occurs for $i=50^\circ$.

$$
\sin C=\frac{1.0}{1.5}=0.6667 \;\Rightarrow\; C\approx 41.8^\circ.
$$

Since $50^\circ>C$, the ray undergoes total internal reflection. Sanity check: glass to air has a modest critical angle, so a fairly steep ray is indeed trapped.

## 6. Refraction through a prism (preview)

A prism bends light by refraction at two surfaces. Its deviation depends on the angle of incidence and the prism angle. We develop this fully in the prism lesson; the key point here is that refraction, not reflection, is the mechanism, and TIR can occur inside a prism if the angle is large enough.

<learning-block type="mistake" title="Critical angle inverted">
Students often write $\sin C=n_1/n_2$. That gives a value greater than 1 when $n_1>n_2$, which is impossible. Remember: the critical angle is defined for denser-to-rarer travel, and the sine of $C$ is the ratio of the rarer index to the denser index: $\sin C=n_{\text{rarer}}/n_{\text{denser}}<1$.
</learning-block>

## Try it yourself

**A.** A coin lies $12\ \text{cm}$ below the surface of water ($n=4/3$). How deep does it appear from directly above?

<details><summary>Show the reasoning</summary>

Apparent depth $=12/(4/3)=9\ \text{cm}$. The coin looks $3\ \text{cm}$ closer to the surface.

</details>

**B.** Find the critical angle for a water–air boundary ($n_{\text{water}}=4/3$).

<details><summary>Show the reasoning</summary>

$\sin C=1/(4/3)=3/4$, so $C=\sin^{-1}(0.75)\approx 48.6^\circ$.

</details>

**C.** A ray in water strikes the surface at $30^\circ$ to the normal. Does it escape into air, and what is the angle of refraction?

<details><summary>Show the reasoning</summary>

$30^\circ<C\approx 48.6^\circ$, so it escapes. Snell’s law: $(4/3)\sin 30^\circ=1\cdot\sin r$, so $\sin r=2/3$ and $r\approx 41.8^\circ$. The ray bends away from the normal, as expected for water to air.

</details>

## Remember

- Refractive index $n=c/v$; Snell’s law $n_1\sin i=n_2\sin r$.
- Denser-to-rarer bending is away from the normal; rarer-to-denser is toward it.
- Critical angle $\sin C=n_{\text{rarer}}/n_{\text{denser}}$; TIR occurs for $i>C$.
- Apparent depth $=$ real depth$/n$.
- Optical fibres, mirages and diamond brilliance all exploit TIR.

Next, combine refraction with curved surfaces to understand lenses.