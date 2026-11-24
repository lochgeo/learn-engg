## Why a copper wire conducts and rubber does not

In a single isolated atom, electrons occupy discrete energy levels. Bring $N$ atoms together into a solid and each level splits into $N$ very close sub-levels; with $N\sim10^{23}$ these sub-levels merge into continuous **energy bands**. Whether a material conducts depends on how these bands are filled and on the gap between the highest filled band (the **valence band**) and the next empty one (the **conduction band**). That is the whole of band theory in one sentence.

## 1. From discrete levels to bands

Inside a crystal, the potential seen by an electron is periodic, not the $1/r$ potential of one nucleus. The allowed energies form bands separated by **forbidden gaps** in which no electron state exists. Two bands matter most:

- **Valence band** — the highest band that is filled (or partly filled) at absolute zero.
- **Conduction band** — the next band up, empty at absolute zero in an insulator or semiconductor.

The energy difference between their edges is the **band gap** $E_g$.

A useful way to picture the filling: at $T=0$, electrons occupy the lowest available states (Pauli principle). If the topmost band is only partly filled, electrons can move into neighbouring empty states with an infinitesimal energy input — that is a **conductor**. If the topmost band is full and the next band is separated by a gap, no movement is possible until energy at least $E_g$ is supplied.

## 2. The three classes of materials

| Class | Band structure | $E_g$ (typical) | Conductivity at room temperature |
| --- | --- | --- | --- |
| Conductor (metal) | Valence and conduction bands overlap, or a band is half-filled | $0$ | $10^6$–$10^8\ \text{S/m}$ |
| Semiconductor | Full valence band, small gap to conduction band | $0.1$–$2\ \text{eV}$ | $10^{-5}$–$10^3\ \text{S/m}$ |
| Insulator | Full valence band, large gap | $>3\ \text{eV}$ | $<10^{-10}\ \text{S/m}$ |

Representative gaps (at $300\ \text{K}$): Cu $0$, Si $1.1\ \text{eV}$, Ge $0.67\ \text{eV}$, GaAs $1.42\ \text{eV}$, diamond $5.5\ \text{eV}$.

The gap is not a sharp wall for classification — it is a matter of scale. Thermal energy at room temperature is $k_BT\approx0.026\ \text{eV}$, so a gap of $1\ \text{eV}$ is about $40\,k_BT$: only a tiny fraction of electrons cross it, giving the modest carrier density of a semiconductor. A gap of $5.5\ \text{eV}$ is about $210\,k_BT$: essentially no electrons cross, giving an insulator.

## 3. Conductivity and carrier density

For a material with $n$ mobile charge carriers per unit volume, each of charge $q$ and mobility $\mu$ (drift speed per unit electric field),

$$
\sigma = n\,q\,\mu.
$$

In a metal, $n$ is fixed (roughly one free electron per atom) and $\sigma$ falls as temperature rises, because lattice vibrations scatter the carriers. In a semiconductor, $n$ rises exponentially with temperature, so $\sigma$ rises — the opposite trend, and a useful diagnostic.

## 4. Worked example: is diamond a conductor?

Diamond has $E_g=5.5\ \text{eV}$. At $T=300\ \text{K}$, $k_BT=0.026\ \text{eV}$, so $E_g/(k_BT)\approx212$. The fraction of electrons thermally excited across the gap is of order $\exp(-E_g/2k_BT)\approx\exp(-106)\sim10^{-46}$. With $\sim10^{23}$ atoms per $\text{cm}^3$, the carrier density is effectively zero. Diamond is an excellent insulator (and, when pure, transparent).

**Sanity check:** if the same estimate is applied to silicon with $E_g=1.1\ \text{eV}$, the exponent is $-1.1/(2\times0.026)\approx-21$, giving a fraction $\sim10^{-9}$, i.e. $\sim10^{14}$ carriers per $\text{cm}^3$ — small but nonzero, exactly the semiconductor regime.

## 5. A common mistake

**Treating the band gap as an ionisation energy of a single atom.** The gap is a property of the *crystal*: it depends on spacing, bonding and structure. Compressing a solid, or changing its crystal form, can change $E_g$ and even turn an insulator into a conductor. That is why the same element (carbon) gives both diamond (insulator) and graphite (conductor).

## Try it yourself

**A.** Classify germanium ($E_g=0.67\ \text{eV}$) and estimate whether it has more or fewer thermally excited carriers than silicon at the same temperature.

<details><summary>Show the reasoning</summary>

Germanium has the smaller gap, so $\exp(-E_g/2k_BT)$ is larger. It has more thermally excited carriers than silicon at the same temperature, hence higher intrinsic conductivity. Both are semiconductors.
</details>

**B.** Why does the conductivity of a metal decrease when it is heated, while that of a pure semiconductor increases?

<details><summary>Show the reasoning</summary>

In a metal, $n$ is fixed and heating increases lattice vibrations, which scatter carriers and reduce mobility $\mu$, so $\sigma$ falls. In a semiconductor, heating exponentially increases $n$, which outweighs the mobility decrease, so $\sigma$ rises.
</details>

**C.** A material has a half-filled topmost energy band. What is it, and why does it conduct even at $T=0$?

<details><summary>Show the reasoning</summary>

It is a conductor (metal). A half-filled band contains empty states immediately above the highest occupied state, so electrons can move with arbitrarily small energy. No gap has to be crossed.
</details>

## Remember

- Solids have energy bands; the valence and conduction bands and the gap $E_g$ between them determine conduction.
- Conductors have no gap or a partly filled band; semiconductors a small gap; insulators a large gap.
- Thermal energy at room temperature is about $0.026\ \text{eV}$, which sets the scale for which gaps matter.
- Conductivity $\sigma=nq\mu$; metals and semiconductors show opposite temperature trends.

The next module keeps the same band picture but asks how to *control* the carrier density deliberately, by doping a pure semiconductor.