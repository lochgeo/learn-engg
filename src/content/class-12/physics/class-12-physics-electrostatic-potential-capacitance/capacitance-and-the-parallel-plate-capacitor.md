## A bucket for separated charge

Two conductors separated by an insulator can hold equal and opposite charges. The arrangement is a **capacitor**, and it appears in camera flashes, radio tuning circuits, touch screens and every digital chip. What matters is not the total charge — the two plates are neutral together — but how much charge can be separated for a given potential difference. That ratio is the capacitance, and for a parallel-plate geometry it depends only on area, separation and the material between the plates.

## 1. Defining capacitance

Give one plate a charge $+Q$ and the other $-Q$. Let $V$ be the magnitude of the potential difference between them. The **capacitance** is

$$
C=\frac{Q}{V}.
$$

The SI unit is the **farad**:

$$
1\ \text{F}=1\ \text{C/V}.
$$

A farad is enormous for ordinary laboratory devices, so capacitors are usually rated in microfarads ($1\ \mu\text{F}=10^{-6}\ \text{F}$), nanofarads ($10^{-9}\ \text{F}$) or picofarads ($10^{-12}\ \text{F}$).

For a fixed geometry, $C$ is a constant: doubling $Q$ doubles $V$, and the ratio stays the same. Capacitance is a property of the conductors and the medium between them, not a measure of how much charge happens to be stored at the moment.

## 2. The parallel-plate capacitor

Take two large plates of area $A$ separated by a small distance $d$, with vacuum or air between them. Far from the edges the field is uniform, and the surface charge density on the inner faces has magnitude $\sigma=Q/A$. The field between the plates is

$$
E=\frac{\sigma}{\varepsilon_0}=\frac{Q}{\varepsilon_0A}.
$$

The potential difference is the field times the separation:

$$
V=Ed=\frac{Qd}{\varepsilon_0A}.
$$

Dividing $Q$ by $V$ gives

$$
C=\frac{Q}{V}=\frac{\varepsilon_0A}{d}.
$$

The formula assumes $d$ is much smaller than the plate dimensions so that edge effects can be ignored. It also assumes the field is uniform and the plates are parallel.

If a dielectric of constant $K$ fills the gap, the field for a given free charge falls by $K$, so the potential difference falls by $K$ and the capacitance rises by $K$:

$$
C=\frac{K\varepsilon_0A}{d}=\frac{\varepsilon A}{d},
\qquad \varepsilon=K\varepsilon_0.
$$

A dielectric therefore lets the same plates store more charge at the same voltage.

## 3. Other geometries

The same definition applies to any pair of conductors. Three standard results are worth recognising:

| Geometry | Capacitance | Notes |
| --- | --- | --- |
| Parallel plates, area $A$, gap $d$ | $C=\dfrac{\varepsilon_0A}{d}$ | Valid for $d\ll\sqrt{A}$; multiply by $K$ with a dielectric |
| Isolated sphere, radius $R$ | $C=4\pi\varepsilon_0R$ | The “other plate” is at infinity |
| Spherical capacitor, radii $a<b$ | $C=\dfrac{4\pi\varepsilon_0ab}{b-a}$ | Concentric shells; multiply by $K$ in a dielectric |
| Cylindrical capacitor, length $L$, radii $a<b$ | $C=\dfrac{2\pi\varepsilon_0L}{\ln(b/a)}$ | Coaxial cylinders; multiply by $K$ in a dielectric |

The isolated-sphere result follows from $V=kQ/R$: then $C=Q/V=4\pi\varepsilon_0R$. The spherical-shell formula reduces to the isolated sphere as $b\to\infty$, which is a useful consistency check.

## 4. Worked example: a parallel-plate capacitor

A parallel-plate capacitor has plate area $A=0.020\ \text{m}^2$ and separation $d=1.0\ \text{mm}$, with air between the plates. Find its capacitance and the charge on each plate at $100\ \text{V}$. Then find the charge if a dielectric of $K=5.0$ fills the gap while the battery remains connected, and the new potential difference if the capacitor had instead been disconnected before inserting the dielectric.

With air,

$$
C_0=\frac{(8.85\times10^{-12})(0.020)}{1.0\times10^{-3}}
=1.77\times10^{-10}\ \text{F}\approx177\ \text{pF}.
$$

At $100\ \text{V}$,

$$
Q_0=C_0V=(1.77\times10^{-10})(100)
=1.77\times10^{-8}\ \text{C}\approx17.7\ \text{nC}.
$$

The field is $E=V/d=1.0\times10^5\ \text{V/m}$, safely below air breakdown.

With the dielectric and the battery still connected, $V$ stays $100\ \text{V}$ and

$$
C=K C_0=5(177\ \text{pF})\approx885\ \text{pF},
\qquad
Q=CV\approx8.85\times10^{-8}\ \text{C}\approx88.5\ \text{nC}.
$$

If the capacitor is disconnected first, $Q$ stays $17.7\ \text{nC}$ and

$$
V'=\frac{Q_0}{C}
=\frac{1.77\times10^{-8}}{8.85\times10^{-10}}
\approx20\ \text{V}.
$$

**Sanity check.** In the battery case the charge rises by exactly the factor $K=5$, while the field stays $V/d$. In the isolated case the charge is fixed and the voltage falls by the same factor. Both results are consistent with $C=Q/V$ and with the field reduction $E=E_0/K$ inside the dielectric.

## 5. Choosing the right picture

- **Battery connected:** $V$ is fixed. Inserting a dielectric raises $C$ and $Q$ by $K$; $E=V/d$ is unchanged.
- **Battery disconnected:** $Q$ is fixed. Inserting a dielectric raises $C$ by $K$ and lowers $V$ and $E$ by $K$.
- **Changing geometry:** at fixed $Q$, increasing $d$ lowers $C$, raises $V$, and raises the stored energy; at fixed $V$, increasing $d$ lowers $C$ and lowers $Q$.

The next module combines capacitors and tracks the energy they store.

<learning-block type="mistake" title="Capacitance errors">

- **“$C=Q/V$, so adding charge increases the capacitance.”** For a fixed capacitor, $C$ is constant and $Q\propto V$. Adding charge raises the voltage, not the capacitance.
- **Mixing units.** Convert millimetres to metres and square centimetres to square metres before substituting. A gap of $2\ \text{mm}$ is $2\times10^{-3}\ \text{m}$, not $2$.
- **Using $C=\varepsilon_0A/d$ for any separation.** The formula ignores edge effects and fails when $d$ is comparable to the plate size.
- **Dividing by $K$ instead of multiplying.** A dielectric increases capacitance: $C=K\varepsilon_0A/d$.

</learning-block>

## Try it yourself

**A.** Find the capacitance of parallel plates of area $0.010\ \text{m}^2$ separated by $2.0\ \text{mm}$ in air.

<details><summary>Show the reasoning</summary>

$$
C=\frac{(8.85\times10^{-12})(0.010)}{2.0\times10^{-3}}
=4.4\times10^{-11}\ \text{F}\approx44\ \text{pF}.
$$
</details>

**B.** What charge does that capacitor hold at $50\ \text{V}$?

<details><summary>Show the reasoning</summary>

$$
Q=CV=(4.43\times10^{-11})(50)
\approx2.2\times10^{-9}\ \text{C}=2.2\ \text{nC}.
$$

One plate carries $+2.2\ \text{nC}$ and the other $-2.2\ \text{nC}$.
</details>

**C.** A $100\ \text{pF}$ capacitor is charged to $200\ \text{V}$ and disconnected. A dielectric of $K=4.0$ is then inserted. Find the charge, the new capacitance and the new potential difference.

<details><summary>Show the reasoning</summary>

The charge is fixed at

$$
Q=C_0V_0=(100\times10^{-12})(200)=2.0\times10^{-8}\ \text{C}.
$$

The new capacitance is $C=4(100)=400\ \text{pF}$, so

$$
V'=\frac{Q}{C}=\frac{2.0\times10^{-8}}{4.0\times10^{-10}}=50\ \text{V}.
$$

The voltage falls by the factor $K=4$, as expected for an isolated capacitor.
</details>

## Remember

- Capacitance is charge per unit potential difference, $C=Q/V$, measured in farads.
- For parallel plates in air, $C=\varepsilon_0A/d$; with a dielectric, $C=K\varepsilon_0A/d$.
- Capacitance is set by geometry and the medium, not by the charge currently stored.
- A dielectric raises $C$ by $K$; whether $Q$ rises or $V$ falls depends on what the circuit holds fixed.
- Edge effects are negligible only when the plate separation is small compared with the plate dimensions.

The next module connects several capacitors into networks and accounts for the energy stored in them.
