## From orbits to energies

The Bohr model gives orbit radii and speeds, but what an experiment actually measures is **wavelength**. The bridge is energy: each stationary state has a definite energy, and a photon’s energy is the gap between two states. This module computes those energies, derives the Rydberg formula from them, and locates the familiar hydrogen lines on a level diagram.

## 1. Energy of the $n$-th level

For a hydrogen-like atom, the total mechanical energy is kinetic plus electrostatic potential:

$$
E = \frac12 mv^2 - \frac{1}{4\pi\varepsilon_0}\frac{Ze^2}{r}.
$$

Using the force balance $mv^2/r = (1/4\pi\varepsilon_0)Ze^2/r^2$, the kinetic energy is half the magnitude of the potential energy: $K = \frac12|U|$. Therefore $E = -K = U/2$, and substituting $r_n$ gives

$$
E_n = -\frac{m e^4 Z^2}{8\varepsilon_0^2 h^2}\frac{1}{n^2}.
$$

In convenient units,

$$
E_n = -\frac{13.6\,Z^2}{n^2}\ \text{eV}.
$$

For hydrogen ($Z=1$): $E_1=-13.6\ \text{eV}$, $E_2=-3.40\ \text{eV}$, $E_3=-1.51\ \text{eV}$, $E_4=-0.850\ \text{eV}$, and $E_\infty=0$ (ionisation). The negative sign means the electron is bound; zero is the free-electron limit.

## 2. From energies to the Rydberg formula

A transition from $n_i$ to $n_f$ ($n_i>n_f$) emits a photon of energy

$$
h\nu = E_{n_i}-E_{n_f}
      = 13.6\left(\frac{1}{n_f^2}-\frac{1}{n_i^2}\right)\ \text{eV}.
$$

Since $\nu=c/\lambda$, this is equivalent to

$$
\frac{1}{\lambda}=R_{\!H}\left(\frac{1}{n_f^2}-\frac{1}{n_i^2}\right),
\qquad R_{\!H}=1.097\times10^7\ \text{m}^{-1}.
$$

Thus the Rydberg constant is not an empirical fudge; it is a combination of $m$, $e$, $\varepsilon_0$ and $h$.

## 3. The hydrogen series

Grouping by the final level $n_f$:

| Series | $n_f$ | Region | Example line |
| --- | --- | --- | --- |
| Lyman | 1 | ultraviolet | $n_i=2\to1$ |
| Balmer | 2 | visible | $n_i=3\to2$ (H$\alpha$) |
| Paschen | 3 | infrared | $n_i=4\to3$ |
| Brackett | 4 | infrared | |
| Pfund | 5 | infrared | |

The **Balmer series** is the only one in the visible range, which is why hydrogen discharge tubes show coloured lines. The first few Balmer wavelengths are

- H$\alpha$ ($3\to2$): $\lambda=656.3\ \text{nm}$ (red)
- H$\beta$ ($4\to2$): $\lambda=486.1\ \text{nm}$ (blue-green)
- H$\gamma$ ($5\to2$): $\lambda=434.0\ \text{nm}$ (violet)

## 4. Worked example: a wavelength

Find the wavelength of the photon emitted when a hydrogen atom drops from $n=4$ to $n=2$.

$$
\frac{1}{\lambda}=R_{\!H}\left(\frac{1}{2^2}-\frac{1}{4^2}\right)
=R_{\!H}\left(\frac14-\frac1{16}\right)
=R_{\!H}\frac{3}{16}.
$$

$$
\lambda=\frac{16}{3R_{\!H}}
=\frac{16}{3(1.097\times10^7)}
\approx4.86\times10^{-7}\ \text{m}=486\ \text{nm}.
$$

**Sanity check:** this is the H$\beta$ line, in the blue-green part of the visible spectrum, exactly where the Balmer series is observed. The photon energy is $hc/\lambda\approx2.55\ \text{eV}$, equal to $E_4-E_2=-0.85-(-3.40)=2.55\ \text{eV}$.

## 5. A common mistake

**Mixing up $n_i$ and $n_f$ in the Rydberg formula.** The larger quantum number must be $n_2$ (initial, higher energy) and the smaller $n_1$ (final). Writing them the other way gives a negative $1/\lambda$. A related error is using the formula for absorption (electron goes up) without changing the sign: absorption uses the same magnitude, but the photon is absorbed rather than emitted.

Another error is reporting the wavelength in nanometres while forgetting to convert from metres: $4.86\times10^{-7}\ \text{m}=486\ \text{nm}$, not $4.86\ \text{nm}$.

## Try it yourself

**A.** Compute the wavelength of the Lyman-alpha line ($n=2\to1$) for hydrogen.

<details><summary>Show the reasoning</summary>

$$
\frac{1}{\lambda}=R_{\!H}\left(1-\frac14\right)=\frac34 R_{\!H}.
$$

$$
\lambda=\frac{4}{3R_{\!H}}\approx1.215\times10^{-7}\ \text{m}=121.5\ \text{nm}.
$$

Ultraviolet, as expected for the Lyman series.
</details>

**B.** What is the ionisation energy of hydrogen, and which transition corresponds to it?

<details><summary>Show the reasoning</summary>

Ionisation takes the electron from $n=1$ to $n=\infty$ ($E=0$). The required energy is $0-(-13.6)=13.6\ \text{eV}$. The corresponding wavelength is $hc/13.6\ \text{eV}\approx91.2\ \text{nm}$, the Lyman limit.
</details>

**C.** A hydrogen atom is excited to $n=4$. List all the distinct photon wavelengths it can emit on its way to the ground state.

<details><summary>Show the reasoning</summary>

Possible transitions: $4\to3$, $4\to2$, $4\to1$, $3\to2$, $3\to1$, $2\to1$. That is six distinct wavelengths, since each pair of levels gives a unique energy gap. (Cascades such as $4\to3\to2\to1$ emit three photons, but the set of possible individual lines is these six.)
</details>

## Remember

- Level energies: $E_n=-13.6\,Z^2/n^2\ \text{eV}$; ground state $-13.6\ \text{eV}$ for hydrogen.
- Rydberg formula: $1/\lambda=R_{\!H}(1/n_f^2-1/n_i^2)$.
- Lyman (UV), Balmer (visible), Paschen and beyond (IR).
- Ionisation energy of hydrogen is $13.6\ \text{eV}$.

The last module of this chapter explains why the angular momentum is quantised at all, using de Broglie’s matter waves. That turns Bohr’s postulate from an assumption into a standing-wave condition.