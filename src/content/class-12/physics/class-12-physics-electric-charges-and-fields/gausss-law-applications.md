## One law, three symmetries

Gauss's law is always true, but it is only a practical calculating tool when the charge distribution has enough symmetry. Three shapes cover most textbook problems and much of the physics of real devices: a long line of charge, a large flat sheet, and a sphere. In each case the art is choosing a surface on which the field has constant magnitude and a simple angle.

## 1. The method

1. Identify the symmetry of the charge distribution.
2. Choose a Gaussian surface that shares that symmetry.
3. Argue that $\vec E$ is either parallel or perpendicular to each part of the surface, and constant in magnitude where it is parallel.
4. Write $\oint\vec E\cdot d\vec A$ as $E$ times an area.
5. Set it equal to $q_{\text{encl}}/\varepsilon_0$ and solve.

If step 3 fails, Gauss's law is still true but it will not give $E$ by simple division.

## 2. Infinite line of charge

Let an infinite line carry a uniform linear charge density $\lambda$, in coulombs per metre. Take a coaxial cylinder of radius $r$ and length $L$ as the Gaussian surface.

The field must point radially away from the line (for $\lambda>0$) by symmetry. On the curved surface, $\vec E$ is parallel to $d\vec A$ and has constant magnitude; on the two flat end caps, $\vec E$ is parallel to the surface, so the flux through them is zero. Therefore

$$
\oint\vec E\cdot d\vec A=E(2\pi rL).
$$

The enclosed charge is $\lambda L$, so

$$
E(2\pi rL)=\frac{\lambda L}{\varepsilon_0}
\quad\Rightarrow\quad
E=\frac{\lambda}{2\pi\varepsilon_0 r}=\frac{2k\lambda}{r}.
$$

The field falls as $1/r$, not $1/r^2$, because the charge is spread along a line rather than concentrated at a point. The result is independent of the length $L$, as it must be for an infinite line. A finite line behaves this way far from its ends and close to its middle.

## 3. Infinite plane sheet of charge

Let a large thin sheet carry a uniform surface charge density $\sigma$, in coulombs per square metre. Take a small pillbox that crosses the sheet, with two faces of area $A$ parallel to the sheet.

By symmetry, the field is perpendicular to the sheet and points away from it on both sides if $\sigma>0$. The curved side of the pillbox is parallel to the field, so its flux is zero. Each flat face contributes $EA$, and the enclosed charge is $\sigma A$. Thus

$$
2EA=\frac{\sigma A}{\varepsilon_0}
\quad\Rightarrow\quad
E=\frac{\sigma}{2\varepsilon_0}.
$$

The result does not contain the distance from the sheet. An infinite sheet produces a **uniform** field on each side, pointing away from a positive sheet and towards a negative one.

For a **conducting** surface, the field inside the conductor is zero. A pillbox with one face just outside the conductor and the other inside then has flux $EA$ on one side only, so

$$
E=\frac{\sigma}{\varepsilon_0}
$$

just outside a conductor. Here $\sigma$ is the local surface charge density. The factor of two relative to an isolated thin sheet is a favourite exam distinction.

Two large parallel sheets with charges $+\sigma$ and $-\sigma$ give a field $\sigma/(2\varepsilon_0)$ from each. Between the sheets the two fields point the same way, so the total is $\sigma/\varepsilon_0$. Outside the pair they point in opposite directions and cancel. This is the field pattern of a parallel-plate capacitor.

## 4. Spherical shell

A thin spherical shell of radius $R$ carries total charge $Q$ spread uniformly.

**Outside the shell ($r>R$).** A concentric Gaussian sphere of radius $r$ encloses all the charge:

$$
E(4\pi r^2)=\frac{Q}{\varepsilon_0}
\quad\Rightarrow\quad
E=\frac{Q}{4\pi\varepsilon_0 r^2}=\frac{kQ}{r^2}.
$$

Outside, the shell behaves exactly like a point charge at its centre.

**Inside the shell ($r<R$).** A concentric Gaussian sphere of radius $r$ encloses no charge:

$$
E(4\pi r^2)=0 \quad\Rightarrow\quad E=0.
$$

The field is zero everywhere inside a uniformly charged shell. This is not because "there is no charge nearby" — the shell is all around — but because the contributions from different parts of the shell cancel by symmetry. A conducting spherical shell has the same external field and zero internal field, with all charge on its surface.

**Solid non-conducting sphere.** For a uniformly charged solid sphere of radius $R$ and total charge $Q$, the charge enclosed by a sphere of radius $r<R$ is

$$
q_{\text{encl}}=Q\frac{r^3}{R^3}.
$$

Then

$$
E(4\pi r^2)=\frac{Qr^3}{\varepsilon_0R^3}
\quad\Rightarrow\quad
E=\frac{Qr}{4\pi\varepsilon_0R^3}=\frac{\rho r}{3\varepsilon_0},
$$

where $\rho$ is the volume charge density. Inside, the field grows linearly from zero at the centre to $kQ/R^2$ at the surface; outside, it falls as $1/r^2$.

## 5. Worked example: an infinite line

A long wire carries a uniform linear charge density $\lambda=2.0\ \mu\text{C/m}$. Find the field $5.0\ \text{cm}$ from the wire.

Use the line result with SI units:

$$
E=\frac{2k\lambda}{r}
=\frac{2(9.0\times10^9)(2.0\times10^{-6})}{0.050}
=\frac{3.6\times10^4}{0.050}=7.2\times10^5\ \text{N/C}.
$$

The field points radially away from the wire because the charge is positive.

**Sanity checks.** Doubling the distance would halve the field to $3.6\times10^5\ \text{N/C}$, as the $1/r$ dependence requires. Moving out to $0.50\ \text{m}$ instead reduces the field to $7.2\times10^4\ \text{N/C}$: a tenfold increase in distance costs a factor of ten, whereas a point charge would lose a factor of a hundred. The number is also consistent with the alternative form:

$$
E=\frac{\lambda}{2\pi\varepsilon_0r}
=\frac{2.0\times10^{-6}}{2\pi(8.85\times10^{-12})(0.050)}
\approx7.2\times10^5\ \text{N/C}.
$$

For comparison, a single sheet with $\sigma=8.85\ \mu\text{C/m}^2$ gives

$$
E=\frac{\sigma}{2\varepsilon_0}
=\frac{8.85\times10^{-6}}{2(8.85\times10^{-12})}
=5.0\times10^5\ \text{N/C},
$$

the same everywhere, independent of distance.

## 6. A summary table

| Charge distribution | Gaussian surface | Field |
| --- | --- | --- |
| Infinite line, density $\lambda$ | Coaxial cylinder | $E=\dfrac{\lambda}{2\pi\varepsilon_0 r}$ |
| Infinite sheet, density $\sigma$ | Pillbox crossing the sheet | $E=\dfrac{\sigma}{2\varepsilon_0}$ |
| Conductor surface, density $\sigma$ | Pillbox with one face inside | $E=\dfrac{\sigma}{\varepsilon_0}$ |
| Thin shell, total $Q$, outside | Concentric sphere | $E=\dfrac{kQ}{r^2}$ |
| Thin shell, total $Q$, inside | Concentric sphere | $E=0$ |
| Solid sphere, total $Q$, inside | Concentric sphere | $E=\dfrac{kQr}{R^3}$ |

<learning-block type="mistake" title="Gauss-application traps">

- **Using $\sigma/\varepsilon_0$ for an isolated thin sheet.** A thin non-conducting sheet gives $\sigma/(2\varepsilon_0)$; the larger value applies just outside a conductor, where the field inside is zero.
- **Using $1/r^2$ for a line charge.** A line gives $1/r$; only a point or a spherical distribution gives $1/r^2$ outside.
- **Confusing the radius of the shell with the distance to the field point.** For a shell, compare $r$ with $R$ first; the formula changes across the surface.
- **Saying the field inside a shell is zero because no charge is nearby.** The field is zero because the enclosed charge is zero and the shell is symmetric. A charged particle inside a cavity can still produce a field in that cavity.

</learning-block>

## Try it yourself

**A.** An infinite line has $\lambda=4.0\ \mu\text{C/m}$. Find the field $0.20\ \text{m}$ away.

<details><summary>Show the reasoning</summary>

$$
E=\frac{2k\lambda}{r}
=\frac{2(9.0\times10^9)(4.0\times10^{-6})}{0.20}
=3.6\times10^5\ \text{N/C},
$$

radially outward for a positive line charge.
</details>

**B.** A large thin sheet has $\sigma=2.0\ \mu\text{C/m}^2$. Find the field just outside it, and state how the answer changes at $1\ \text{m}$ away.

<details><summary>Show the reasoning</summary>

$$
E=\frac{\sigma}{2\varepsilon_0}
=\frac{2.0\times10^{-6}}{2(8.85\times10^{-12})}
\approx1.1\times10^5\ \text{N/C}.
$$

For an infinite sheet the field is uniform, so it is the same at $1\ \text{m}$ as at $1\ \text{cm}$ (ignoring edge effects and the finite size of a real sheet).
</details>

**C.** A thin spherical shell of radius $0.20\ \text{m}$ carries $+2.0\ \mu\text{C}$. Find the field at $0.10\ \text{m}$ and at $0.40\ \text{m}$ from the centre.

<details><summary>Show the reasoning</summary>

At $0.10\ \text{m}$ the point is inside the shell, so $E=0$.

At $0.40\ \text{m}$ the shell behaves like a point charge:

$$
E=(9.0\times10^9)\frac{2.0\times10^{-6}}{(0.40)^2}
=\frac{1.8\times10^4}{0.16}=1.1\times10^5\ \text{N/C},
$$

radially outward.
</details>

## Remember

- Gauss's law becomes a calculating tool only when symmetry fixes the field's direction and magnitude on the chosen surface.
- A line charge gives $E=2k\lambda/r$; an infinite sheet gives $E=\sigma/(2\varepsilon_0)$, uniform.
- Just outside a conductor, $E=\sigma/\varepsilon_0$; inside, $E=0$.
- A spherical shell has $E=kQ/r^2$ outside and $E=0$ inside; a uniform solid sphere has $E=kQr/R^3$ inside.
- Always compare the field point's distance with the radius before selecting a spherical formula.

The next module is a practice set that mixes these tools and asks you to choose the right one before calculating.
