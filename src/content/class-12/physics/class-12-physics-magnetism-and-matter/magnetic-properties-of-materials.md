## Why iron is magnetic and copper is not

Place any material in a magnetic field and its atoms respond, but the response differs by orders of magnitude. The microscopic origin is the electron: orbital and spin magnetic moments. How these moments combine, whether they can rotate freely, and whether they lock into domains determines whether a material is diamagnetic, paramagnetic or ferromagnetic — and whether it can become a permanent magnet.

## 1. Diamagnetism

In a diamagnet, every atom has zero net magnetic moment (paired electrons). An applied field induces a small moment **opposite** to the field by changing the orbital motion of electrons (Lenz's law at the atomic level). Hence

- $\chi_m$ is small and negative ($\sim -10^{-5}$).
- $\mu_r$ is slightly less than 1.
- The effect is independent of temperature.
- Diamagnets are weakly repelled from strong fields and magnetise in the opposite direction.

Examples: bismuth, copper, water, superconductors (perfect diamagnets, $\chi=-1$).

## 2. Paramagnetism

Paramagnets have atoms with unpaired electrons and hence permanent magnetic moments, but thermal agitation keeps them randomly oriented, so $M=0$ without a field. An applied field partially aligns them, giving a small positive $\chi_m$ that decreases with temperature. Curie's law:

$$
\chi_m = \frac{C}{T},
$$

where $C$ is the Curie constant and $T$ the absolute temperature. Thus $\chi_m\propto 1/T$. Examples: aluminium, platinum, oxygen, salts of transition metals.

## 3. Ferromagnetism

In ferromagnets (iron, cobalt, nickel, gadolinium) neighbouring atomic moments interact strongly via exchange coupling and align spontaneously over regions called **domains**, each magnetised to saturation. Without an external field the domains point in random directions, so the net $M$ is zero. An applied field grows favourably oriented domains at the expense of others; above a certain field all domains align and the material is **saturated**.

Properties:

- $\chi_m$ is large and positive, but not constant: it varies with $H$ and history.
- Above the **Curie temperature** $T_C$ (for iron, $T_C\approx1043\ \text{K}$) thermal disorder destroys the domain order and the material becomes paramagnetic. The Curie–Weiss law applies:

$$
\chi_m = \frac{C}{T-T_C}\quad (T>T_C).
$$

- Ferromagnets show **hysteresis**: $M$ (or $B$) lags behind $H$.

## 4. Hysteresis loop

Cycle $H$ from 0 up to $+H_{\max}$, down to $-H_{\max}$, and back to 0. The $B$–$H$ (or $M$–$H$) curve traces a loop rather than a single line. Key features:

- **Saturation**: flat top/bottom at $B_{\text{sat}}$.
- **Retentivity (remanence) $B_r$**: the field remaining when $H$ is reduced to 0 after saturation.
- **Coercivity $H_c$**: the reverse field needed to bring $B$ (or $M$) to zero.
- **Loop area**: proportional to energy dissipated as heat per cycle (hysteresis loss).

Hard magnetic materials (steel, alnico) have high $H_c$ and $B_r$ — good for permanent magnets. Soft materials (soft iron, silicon steel) have low $H_c$ and narrow loops — good for transformers and electromagnets where the field must switch quickly with little loss.

## 5. Worked example: paramagnet susceptibility

A paramagnetic salt has Curie constant $C=0.50\ \text{K}$ (in SI units such that $\chi=C/T$). At $T=300\ \text{K}$ and $H=1.0\times10^4\ \text{A}/\text{m}$, find $\chi_m$, $M$ and $B$.

$$
\chi_m = \frac{C}{T} = \frac{0.50}{300}=1.67\times10^{-3}.
$$

$$
M = \chi_m H = (1.67\times10^{-3})(1.0\times10^4)=16.7\ \text{A}/\text{m}.
$$

$$
B = \mu_0(H+M) = (4\pi\times10^{-7})(1.0\times10^4+16.7)
\approx 1.257\times10^{-2}\ \text{T}.
$$

Sanity check: $\chi_m\sim10^{-3}$ is typical for a paramagnet, and $B$ is only slightly larger than the vacuum value $\mu_0 H=1.256\times10^{-2}\ \text{T}$, as expected for a weakly magnetic material. At $T=100\ \text{K}$ the same material would have $\chi=5.0\times10^{-3}$, three times larger — the Curie $1/T$ behaviour.

## 6. A common mistake

**Assuming $\mu_r$ is a constant for ferromagnets.** For paramagnets and diamagnets $\mu_r$ is essentially constant, but for ferromagnets it varies from a few hundred to a few thousand and then collapses to 1 above $T_C$. Using a single $\mu_r$ value for iron in a problem that drives it to saturation gives meaningless results. Also, the Curie–Weiss law $\chi=C/(T-T_C)$ is for $T>T_C$ only; below $T_C$ the material is ferromagnetic and the susceptibility is not defined in the same way.

## Try it yourself

**A.** A diamagnet has $\chi_m=-2.0\times10^{-5}$. Find $\mu_r$ and state whether it is attracted or repelled by a strong field.

<details><summary>Show the reasoning</summary>

$\mu_r=1-2.0\times10^{-5}=0.99998$. Since $\chi_m<0$, the induced moment opposes the field and the material is weakly repelled.

</details>

**B.** Iron has $T_C=1043\ \text{K}$. At $T=1100\ \text{K}$, is it ferromagnetic or paramagnetic? What is the sign of $\chi_m$?

<details><summary>Show the reasoning</summary>

Above $T_C$ iron is paramagnetic, with $\chi_m>0$ given by the Curie–Weiss law. The domains have broken up, but unpaired spins still align weakly with the field.

</details>

**C.** A transformer core needs a material with narrow hysteresis loop and high permeability. Should it be hard or soft magnetic material?

<details><summary>Show the reasoning</summary>

Soft magnetic material (e.g. silicon steel). Low coercivity means the magnetisation reverses easily with small energy loss per cycle, which is exactly what an AC transformer needs.

</details>

## Remember

- Dia: $\chi<0$, temperature-independent, weakly repelled.
- Para: $\chi>0$, $\chi=C/T$, weakly attracted.
- Ferro: domains, saturation, hysteresis; paramagnetic above $T_C$.
- Curie–Weiss: $\chi=C/(T-T_C)$ for $T>T_C$.
- Hard materials: high $H_c$, $B_r$ → permanent magnets. Soft: low $H_c$ → transformers/electromagnets.
- Hysteresis loop area = energy lost per cycle.

Next, we put these material ideas to work: how permanent magnets and electromagnets are made and chosen.