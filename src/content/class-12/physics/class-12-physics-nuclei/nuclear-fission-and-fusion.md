## Splitting and joining nuclei for energy

The binding-energy-per-nucleon curve peaks near iron, so energy is released when heavy nuclei split toward the peak and when light nuclei join toward it. These two processes—**fission** and **fusion**—are the basis of nuclear reactors, weapons and stars. This module explains each mechanism, the conditions required, and the scale of the energy involved.

## 1. Nuclear fission

In fission a heavy nucleus (typically uranium-235 or plutonium-239) absorbs a neutron and splits into two lighter **fission fragments** plus a few neutrons:

$$
^{235}_{92}\mathrm{U} + n \to {}^{141}_{56}\mathrm{Ba} + {}^{92}_{36}\mathrm{Kr} + 3n + \text{energy}.
$$

The fragments are more tightly bound per nucleon than the parent, so about $200\ \text{MeV}$ is released per fission. The emitted neutrons can induce further fissions, creating a **chain reaction**. Whether it runs away or stays controlled depends on how many neutrons are available:

- **Critical mass**: the minimum amount of fissile material for which, on average, each fission produces at least one further fission.
- **Moderator** (water, heavy water, graphite): slows fast neutrons to thermal energies, where the fission probability of U-235 is much higher.
- **Control rods** (cadmium, boron): absorb neutrons to regulate the reaction rate.
- **Coolant**: removes the heat to make steam for electricity.

A reactor operates at exactly critical (steady state); a weapon is designed to be supercritical (runaway) for a brief time.

## 2. Energy per fission and fuel mass

Each fission releases $\sim200\ \text{MeV}=200\times10^6\times1.6\times10^{-19}\ \text{J}=3.2\times10^{-11}\ \text{J}$. One mole of U-235 ($6.022\times10^{23}$ atoms) therefore releases

$$
6.022\times10^{23}\times3.2\times10^{-11}\ \text{J}
\approx1.9\times10^{13}\ \text{J}\approx5\times10^3\ \text{tonnes of TNT}.
$$

By comparison, burning one mole of coal releases $\sim4\times10^5\ \text{J}$, so nuclear fission yields roughly $10^8$ times more energy per unit mass than chemical combustion. This enormous concentration is why fuel masses in reactors are tonnes, not millions of tonnes.

## 3. Nuclear fusion

In fusion, two light nuclei merge into a heavier one. The classic example is the deuterium–tritium reaction:

$$
{}^2_1\mathrm{H} + {}^3_1\mathrm{H} \to {}^4_2\mathrm{He} + n + 17.6\ \text{MeV}.
$$

The product helium-4 is more tightly bound, so $17.6\ \text{MeV}$ is released. Fusion is the energy source of the Sun and stars, where the proton–proton chain converts four protons into helium-4, releasing about $26.7\ \text{MeV}$ overall.

The difficulty is **Coulomb repulsion**: two positively charged nuclei must approach to within $\sim10^{-15}\ \text{m}$ before the strong force can act. This requires temperatures of order $10^8\ \text{K}$ (so thermal speeds overcome the barrier) and high density (so collisions are frequent). Such conditions occur naturally in stellar cores; on Earth they must be created in magnetic or inertial confinement devices, and sustained controlled fusion remains an engineering challenge.

## 4. Worked example: energy from a fission reactor

A reactor produces $1000\ \text{MW}$ of thermal power. How many fissions per second are needed, and how much U-235 is consumed per day?

Fissions per second:
$$
\frac{10^9\ \text{W}}{3.2\times10^{-11}\ \text{J/fission}}
\approx3.1\times10^{19}\ \text{fissions/s}.
$$

Per day ($86400\ \text{s}$): $3.1\times10^{19}\times8.64\times10^4\approx2.7\times10^{24}$ fissions, i.e. about $4.5$ moles, or roughly $1\ \text{kg}$ of U-235. (Real reactors also consume some U-238 by conversion and have efficiency factors; the order of magnitude is what matters.)

**Sanity check:** a gigawatt reactor consuming about a kilogram of fissile material per day is the well-known scale of nuclear power plants, and it matches the $10^8$-fold advantage over chemical fuels.

## 5. A common mistake

**Assuming fusion is “easy” because it releases more energy per unit mass than fission.** Energy yield and engineering feasibility are different. Fission can be triggered by a slow neutron at room temperature; fusion requires confining a $10^8\ \text{K}$ plasma. The common exam error is to claim fusion is used in current power reactors—it is not; all commercial nuclear electricity comes from fission, while fusion remains experimental.

A second error is ignoring the neutrons in fission energy accounting: the $\sim200\ \text{MeV}$ includes kinetic energy of fragments, neutrons, gamma rays and beta decays of fragments, not just the initial split.

## Try it yourself

**A.** How many fissions per second produce $1\ \text{MW}$ of power?

<details><summary>Show the reasoning</summary>

$10^6/(3.2\times10^{-11})\approx3.1\times10^{16}$ fissions/s.
</details>

**B.** The Sun’s luminosity is $3.8\times10^{26}\ \text{W}$. Estimate the mass of hydrogen fused per second (use $26.7\ \text{MeV}$ per 4 protons, i.e. $6.675\ \text{MeV}$ per proton, $\approx1.07\times10^{-12}\ \text{J}$ per proton).

<details><summary>Show the reasoning</summary>

Protons fused per second $\approx3.8\times10^{26}/1.07\times10^{-12}\approx3.6\times10^{38}$, mass $\approx3.6\times10^{38}\times1.67\times10^{-27}\approx6.0\times10^{11}\ \text{kg/s}$. About $6\times10^{11}\ \text{kg}$ of hydrogen is fused each second; the Sun loses $\sim4\times10^9\ \text{kg/s}$ of mass to energy.
</details>

**C.** Why does a fission chain reaction need a moderator for natural (0.7% U-235) uranium but not for highly enriched uranium?

<details><summary>Show the reasoning</summary>

U-235 fissions much more readily with slow (thermal) neutrons than with fast ones. In natural uranium the U-235 fraction is too small to sustain a chain reaction with fast neutrons alone; slowing neutrons with a moderator raises the fission probability enough. Highly enriched fuel has enough U-235 that fast neutrons suffice, which is the basis of fast-breeder reactors and weapons.
</details>

## Remember

- Fission: heavy nucleus splits, $\sim200\ \text{MeV}$ per event, neutrons sustain a chain reaction.
- Critical mass, moderator, control rods and coolant govern reactors.
- Fusion: light nuclei merge, $\sim$MeV–tens of MeV per event, requires $\sim10^8\ \text{K}$ and high density.
- Fission fuels all commercial nuclear electricity; fusion is still experimental.
- Nuclear energy is $\sim10^8$ times more concentrated than chemical energy.

This closes the Nuclei chapter: composition and size, mass–energy and binding, the nuclear force, radioactivity, and finally fission and fusion as the two routes by which nuclei transform.