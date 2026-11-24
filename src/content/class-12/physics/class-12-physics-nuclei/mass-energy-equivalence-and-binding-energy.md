## The mass that disappears becomes energy

If you add the masses of $Z$ free protons and $N$ free neutrons, the total is larger than the mass of the nucleus they form. That “lost” mass is not an accounting error: Einstein’s relation $E=mc^2$ converts it into the energy that holds the nucleus together. This module defines mass defect and binding energy, computes a real nucleus, and uses the binding-energy-per-nucleon curve to explain why some nuclei are stable, some split, and some fuse.

## 1. Mass–energy equivalence

Einstein’s relation connects a change in mass $\Delta m$ to a change in energy $\Delta E$:

$$
\Delta E = \Delta m\,c^2.
$$

In nuclear work it is convenient to measure mass in atomic mass units and energy in MeV. Since

$$
1\ \text{u}\,c^2 = 931.5\ \text{MeV},
$$

a mass difference of $1\ \text{u}$ corresponds to $931.5\ \text{MeV}$ of energy. Conversely, $1\ \text{MeV}$ corresponds to $1/931.5\ \text{u}\approx0.0010735\ \text{u}$. These conversions are used constantly; keep them in mind rather than recomputing $c$.

## 2. Mass defect and binding energy

For a nucleus $^A_Z\mathrm{X}$ with $Z$ protons and $N=A-Z$ neutrons, the **mass defect** is

$$
\Delta m = Z m_p + N m_n - M_{\text{nucleus}}.
$$

Using atomic masses (and letting electron masses cancel) this is often written

$$
\Delta m = Z\,M(^1\mathrm{H}) + N\,m_n - M(^A_Z\mathrm{X}),
$$

where $M(^1\mathrm{H})=1.00783\ \text{u}$ is the mass of a hydrogen atom (proton + electron) and $M(^A_Z\mathrm{X})$ is the atomic mass of the nucleus’s atom. The electron masses cancel exactly in this form.

The **binding energy** is the energy equivalent of this mass defect:

$$
B = \Delta m\,c^2.
$$

It is the energy required to pull the nucleus apart into its separate nucleons, and (by reversal) the energy released when those nucleons assemble. A larger binding energy means a more tightly bound nucleus.

## 3. Binding energy per nucleon

What matters for stability is not the total binding energy but the **binding energy per nucleon**,

$$
\frac{B}{A} = \frac{\Delta m\,c^2}{A}.
$$

Plotting $B/A$ against $A$ gives a curve that rises steeply for light nuclei, reaches a broad maximum near $A\approx56$ (iron-56, about $8.8\ \text{MeV/nucleon}$), and then falls slowly for heavy nuclei to about $7.6\ \text{MeV/nucleon}$ for uranium. Three consequences follow:

- Nuclei near iron-56 are the most stable; energy is released when lighter nuclei move toward iron or heavier nuclei move toward iron.
- **Fusion** of light nuclei (small $A$) increases $B/A$, so energy is released.
- **Fission** of very heavy nuclei (large $A$) increases $B/A$, so energy is released.

Thus the curve is the single diagram that explains both fission and fusion. The peak at iron is also why iron is the end point of stellar fusion and why supernovae are needed to make heavier elements.

## 4. Worked example: binding energy of the deuteron

The deuteron $^2_1\mathrm{H}$ has one proton and one neutron. Atomic mass of deuterium $M_D=2.01410\ \text{u}$; mass of hydrogen atom $M_H=1.00783\ \text{u}$; neutron mass $m_n=1.00867\ \text{u}$.

Mass defect:
$$
\Delta m = M_H + m_n - M_D
        = 1.00783 + 1.00867 - 2.01410
        = 0.00240\ \text{u}.
$$

Binding energy:
$$
B = 0.00240\times931.5 \approx 2.23\ \text{MeV}.
$$

Per nucleon: $B/A\approx1.12\ \text{MeV/nucleon}$, low on the curve, which is why the deuteron is the weakest bound stable nucleus and why deuterium is useful as fusion fuel (easy to disassemble, large energy gain per unit mass when fused).

**Sanity check:** a few MeV per nucleon is plausible for a light nucleus; the deuteron is known to be loosely bound, and $2.2\ \text{MeV}$ is the accepted value.

## 5. Worked example: binding energy per nucleon of $^{56}\mathrm{Fe}$

Atomic mass of $^{56}\mathrm{Fe}$ is $55.9349\ \text{u}$. With $Z=26$, $N=30$:

$$
\Delta m = 26(1.00783)+30(1.00867)-55.9349.
$$
$$
=26.2036+30.2601-55.9349=0.5288\ \text{u}.
$$
$$
B = 0.5288\times931.5 \approx 492.6\ \text{MeV}.
$$
$$
B/A = 492.6/56 \approx 8.80\ \text{MeV/nucleon}.
$$

This matches the peak of the curve, confirming iron-56 as one of the most stable nuclei.

## 6. A common mistake

**Confusing mass defect with the mass of the nucleus.** The mass defect is a *difference* of masses, typically a few tenths of a u for medium nuclei. Treating the whole nuclear mass as “defect” and multiplying by $c^2$ gives absurd energies (thousands of MeV per nucleon). Always compute $\Delta m$ as free constituents minus bound nucleus before converting.

A second error is using proton mass $m_p$ instead of hydrogen-atom mass $M(^1\mathrm{H})$ when working with atomic masses, and forgetting to subtract electron masses. The hydrogen-atom form keeps the bookkeeping clean.

## Try it yourself

**A.** Compute the binding energy per nucleon of $^4_2\mathrm{He}$ (alpha particle). Atomic mass $=4.00260\ \text{u}$.

<details><summary>Show the reasoning</summary>

$\Delta m = 2(1.00783)+2(1.00867)-4.00260 = 2.01566+2.01734-4.00260 = 0.03040\ \text{u}$.

$B = 0.03040\times931.5 \approx 28.3\ \text{MeV}$.

$B/A = 28.3/4 \approx 7.08\ \text{MeV/nucleon}$. This is higher than the deuteron, so fusing two deuterons toward helium releases energy.
</details>

**B.** Why does the $B/A$ curve peak near iron rather than at the heaviest nucleus?

<details><summary>Show the reasoning</summary>

Coulomb repulsion among protons grows roughly as $Z^2$ and eventually dominates the short-range nuclear attraction, so adding more nucleons to a heavy nucleus lowers the average binding. Light nuclei gain stability by fusion; heavy nuclei gain it by fission.
</details>

**C.** A reaction releases $200\ \text{MeV}$. What mass is converted?

<details><summary>Show the reasoning</summary>

$\Delta m = \Delta E/c^2 = 200/931.5 \approx 0.215\ \text{u}$, about $3.57\times10^{-28}\ \text{kg}$. A tiny mass, which is why nuclear energy is so concentrated.
</details>

## Remember

- $E=mc^2$; $1\ \text{u}=931.5\ \text{MeV}$.
- Mass defect $\Delta m = $ free constituents $-$ bound nucleus; binding energy $B=\Delta m c^2$.
- Use atomic masses with $M(^1\mathrm{H})$ so electron masses cancel.
- $B/A$ peaks near iron-56 ($\sim8.8\ \text{MeV/nucleon}$); fusion releases energy for light nuclei, fission for heavy ones.
- A mass defect is a small difference, not the whole mass.

The next module explains the force behind this binding: its range, strength and behaviour, and why it is not simply a stronger Coulomb force.