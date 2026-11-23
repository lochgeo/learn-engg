## The field inside matter is not just the applied field

In vacuum, a given current produces a field $\vec B$ governed by Ampère's law. Insert a material and the atoms themselves contribute: their magnetic moments align (or anti-align) with the field and add their own field. To keep bookkeeping clean, physics introduces two auxiliary quantities — **magnetisation** $\vec M$ and **magnetic intensity** $\vec H$ — so that the applied (free) currents and the material's response are separated.

## 1. Magnetisation

Consider a small volume $\Delta V$ of material carrying a net magnetic moment $\Delta \vec m$. The **magnetisation** is

$$
\vec M = \frac{\Delta \vec m}{\Delta V},
$$

the magnetic moment per unit volume. Its SI unit is $\text{A}/\text{m}$ (same as $H$). It measures how strongly the material is magnetised. For an unmagnetised sample $\vec M=0$; for a saturated ferromagnet $\vec M$ has its maximum value.

## 2. Magnetic intensity and the relation between $B$, $H$ and $M$

In SI units the magnetic field $\vec B$, the magnetisation $\vec M$ and the **magnetic intensity** (magnetic field strength) $\vec H$ are related by

$$
\vec B = \mu_0(\vec H + \vec M),
$$

or, solved for $H$,

$$
\vec H = \frac{\vec B}{\mu_0} - \vec M.
$$

Here $\mu_0=4\pi\times10^{-7}\ \text{T}\,\text{m}/\text{A}$. The field $\vec H$ is produced by the **free currents** alone (the currents we drive through coils); $\vec M$ is the material's response. In vacuum ($M=0$), $B=\mu_0 H$, recovering Ampère's law in its vacuum form.

A useful rearrangement: since $M=\chi_m H$ for a linear, isotropic material (see below),

$$
B = \mu_0(1+\chi_m)H = \mu_0\mu_r H,
$$

where $\mu_r=1+\chi_m$ is the **relative permeability**.

## 3. Magnetic susceptibility

For many materials $M$ is proportional to $H$:

$$
\vec M = \chi_m \vec H,
$$

where $\chi_m$ is the (dimensionless, in SI) **magnetic susceptibility**. Its sign and size classify the material:

- $\chi_m<0$, small magnitude: diamagnet.
- $\chi_m>0$, small (typically $10^{-5}$–$10^{-3}$): paramagnet.
- $\chi_m\gg 1$ (up to $10^3$–$10^5$): ferromagnet.

The relative permeability $\mu_r=1+\chi_m$ is the factor by which the material amplifies (or reduces) the field relative to vacuum.

## 4. Boundary and continuity

Across an interface between two media, the normal component of $\vec B$ is continuous ($B_{1n}=B_{2n}$) and the tangential component of $\vec H$ is continuous in the absence of surface currents ($H_{1t}=H_{2t}$). These boundary conditions are what determine how field lines bend when entering a high-permeability material — the basis of magnetic shielding.

## 5. Worked example: iron core in a solenoid

A long solenoid with $n=1000$ turns per metre carries $I=2.0\ \text{A}$. Its core is soft iron with $\mu_r=5000$. Find $H$, $M$ and $B$ inside the core.

The free-current field is

$$
H = nI = (1000)(2.0)=2.0\times10^3\ \text{A}/\text{m}.
$$

Then

$$
B = \mu_0\mu_r H
= (4\pi\times10^{-7})(5000)(2.0\times10^3)
\approx 12.57\ \text{T}? 
$$

Wait — compute carefully: $4\pi\times10^{-7}\times5000 = 6.283\times10^{-3}$; times $2.0\times10^3 = 12.57\ \text{T}$. That exceeds saturation for iron, so the linear formula is being pushed past its limit; real iron saturates near $1.5$–$2\ \text{T}$. This is itself a useful lesson: the linear relation $B=\mu_0\mu_r H$ holds only for unsaturated materials.

Using the linear value for illustration, the magnetisation would be

$$
M = \chi_m H = (\mu_r-1)H \approx (4999)(2.0\times10^3)
\approx 1.0\times10^7\ \text{A}/\text{m},
$$

which again signals saturation. In practice one uses the material's $B$–$H$ curve (hysteresis loop) rather than a constant $\mu_r$.

A more realistic unsaturated case: take $\mu_r=200$ with the same $H=2.0\times10^3\ \text{A}/\text{m}$:

$$
B = (4\pi\times10^{-7})(200)(2.0\times10^3)
= (4\pi\times10^{-7})(4.0\times10^5)
\approx 0.503\ \text{T},
$$

$$
M = (\mu_r-1)H \approx (199)(2.0\times10^3)=3.98\times10^5\ \text{A}/\text{m}.
$$

Sanity check: $B=\mu_0(H+M)$ gives $4\pi\times10^{-7}(2.0\times10^3+3.98\times10^5)\approx0.503\ \text{T}$, consistent. The material contributes about $200$ times the free-current field.

## 6. A common mistake

**Mixing SI and cgs conventions.** In cgs (Gaussian) units, $B$, $H$ and $M$ all have the same dimensions and $B=H+4\pi M$. In SI, $B$ has units of tesla, $H$ and $M$ of A/m, and $B=\mu_0(H+M)$. Exam problems in the Indian system are SI; if a formula sheet or an older text quotes $B=H+4\pi M$, it is using cgs and the numbers will not match. Always check units: tesla for $B$, A/m for $H$ and $M$.

## Try it yourself

**A.** A material has $\chi_m=0.0030$. What is $\mu_r$?

<details><summary>Show the reasoning</summary>

$\mu_r = 1+\chi_m = 1.0030$.

</details>

**B.** For the material in A, with $H=5.0\times10^3\ \text{A}/\text{m}$, find $M$ and $B$.

<details><summary>Show the reasoning</summary>

$M = \chi_m H = 0.0030\times5.0\times10^3 = 15\ \text{A}/\text{m}$.

$B = \mu_0(H+M) = (4\pi\times10^{-7})(5000+15)
\approx 6.28\times10^{-3}\ \text{T}$.

Equivalently $B=\mu_0\mu_r H\approx6.28\times10^{-3}\ \text{T}$.

</details>

**C.** A diamagnet has $\chi_m=-1.0\times10^{-5}$. By what fraction does it reduce the field compared with vacuum, for the same $H$?

<details><summary>Show the reasoning</summary>

$B_{\text{mat}}/B_{\text{vac}} = \mu_r = 1+\chi_m = 0.99999$. The field is reduced by $0.001\%$ — tiny but measurable, and the reason diamagnets are pushed out of strong fields.

</details>

## Remember

- $M$ = magnetic moment per unit volume (A/m).
- $B=\mu_0(H+M)$; in vacuum $B=\mu_0 H$.
- Linear media: $M=\chi_m H$, $\mu_r=1+\chi_m$, $B=\mu_0\mu_r H$.
- Susceptibility sign: negative (dia), small positive (para), large positive (ferro).
- Boundary conditions: $B_n$ continuous, $H_t$ continuous.
- Linear formulas fail near saturation; use the $B$–$H$ curve.

Next, we classify materials by their magnetic response and study hysteresis — the memory that makes permanent magnets possible.