## Bending a wavefront at a boundary

Reflection and refraction are usually stated as rules for rays: angle of incidence equals angle of reflection, and $n_1\sin i=n_2\sin r$. Those rules are consequences of wave propagation. When a wavefront meets a boundary between two media, the two sides of the wavefront travel at different speeds, so the envelope tilts. This module derives both laws from Huygens’ construction.

## 1. Reflection from a plane surface

Let a plane wavefront $AB$ approach a reflecting plane. Point $A$ reaches the surface first. While the part of the wavefront at $B$ travels to $B'$ (distance $BB'=v\,\Delta t$ in the same medium), the disturbance at $A$ generates a wavelet in the reflected direction of radius $v\,\Delta t$. The new wavefront $A'B'$ is tangent to that wavelet.

Because the incident and reflected waves are in the **same** medium, the radii are equal. The two right triangles sharing the segment along the surface have equal hypotenuses $v\,\Delta t$, so their angles are equal:

$$
\angle i=\angle r.
$$

Thus the angle of incidence equals the angle of reflection, both measured from the normal.

## 2. Refraction at a plane surface

Now let medium 1 (speed $v_1$) lie above the boundary and medium 2 (speed $v_2$) below. The incident wavefront $AB$ reaches point $A$ first. In time $\Delta t$, the part at $B$ travels to $B'$ in medium 1 a distance $v_1\,\Delta t$, while the wavelet from $A$ into medium 2 grows to radius $v_2\,\Delta t$. The new wavefront $A'B'$ is tangent to that circle.

From the geometry,

$$
\frac{\sin i}{\sin r}=\frac{v_1\,\Delta t}{v_2\,\Delta t}=\frac{v_1}{v_2}.
$$

Since refractive index $n=c/v$, this becomes

$$
n_1\sin i=n_2\sin r.
$$

This is **Snell’s law**. When $v_2<v_1$ (entering a denser medium), $r<i$: the wavefront tilts toward the normal.

## 3. Total internal reflection

If light travels from a denser to a rarer medium ($n_1>n_2$), Snell’s law gives

$$
\sin r=\frac{n_1}{n_2}\sin i.
$$

When the right-hand side exceeds 1, no refracted wave exists; all energy is reflected. The limiting incidence angle is the **critical angle** $C$, with

$$
\sin C=\frac{n_2}{n_1}.
$$

Beyond $C$, total internal reflection occurs. This is the operating principle of optical fibres.

## 4. Worked example

Light in air ($n_1=1.00$) strikes a glass surface ($n_2=1.50$) at $i=30^\circ$.

$$
\sin r=\frac{1.00}{1.50}\sin30^\circ=\frac{0.50}{1.50}=0.333,
\qquad r\approx19.5^\circ.
$$

The ray bends toward the normal, as expected for a denser medium.

Critical angle for glass to air:

$$
\sin C=\frac{1.00}{1.50}=0.667,\qquad C\approx41.8^\circ.
$$

Any ray inside glass hitting the surface at more than $41.8^\circ$ is totally internally reflected.

Sanity check: for $i=0$, $r=0$ (normal incidence, no bending); for $i=C$, $r=90^\circ$ (grazing emergence). Both limits are correct.

## 5. A common mistake

Confusing the angle between the ray and the **surface** with the angle measured from the **normal**. All standard formulae use angles from the normal. A second error is applying the critical-angle formula when light goes from rarer to denser medium; total internal reflection is impossible in that direction.

<learning-block type="mistake" title="Wavefront-boundary errors">
- Drawing the refracted wavefront on the wrong side of the normal, giving $r>i$ when entering a denser medium.
- Using $n_2/n_1$ instead of $n_1/n_2$ in Snell’s law because of an inverted ratio.
- Forgetting that at total internal reflection the phase of the evanescent field in the rarer medium still advances, even though no energy propagates away.
</learning-block>

## Try it yourself

**A.** Light passes from water ($n=1.33$) to air. Find the critical angle.

<details><summary>Show the reasoning</summary>

$\sin C=1/1.33=0.752$, so $C\approx48.8^\circ$. Rays inside water hitting the surface steeper than this are totally internally reflected.
</details>

**B.** A ray in air enters glass ($n=1.5$) at $45^\circ$. Find the angle of refraction and state whether total internal reflection is possible on the return trip at the same angle.

<details><summary>Show the reasoning</summary>

$\sin r=\sin45^\circ/1.5=0.471$, so $r\approx28.1^\circ$. On the return trip the ray in glass hits at $28.1^\circ<41.8^\circ$, so it refracts out; no total internal reflection.
</details>

**C.** In the reflection construction, why must the incident and reflected waves be in the same medium for the angles to be equal?

<details><summary>Show the reasoning</summary>

The equality of angles follows from the two wavelets having equal radii $v\,\Delta t$. Equal radii require the same wave speed, hence the same medium.
</details>

## Remember

- Reflection: $\angle i=\angle r$ (from normal).
- Refraction: $n_1\sin i=n_2\sin r$.
- Entering a denser medium bends the ray toward the normal.
- Total internal reflection requires $n_1>n_2$ and $i>C$.

The next module turns from single wavefronts to the superposition of two waves and the conditions under which they produce steady interference.