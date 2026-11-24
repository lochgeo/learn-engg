## The force that beats electrostatic repulsion

Two protons in a nucleus are separated by a few femtometres and repel each other with a Coulomb force of hundreds of newtons. Yet the nucleus does not fly apart. Something else must dominate at that scale: the **nuclear force** (or strong nuclear force). This module collects its observed properties, estimates its range, and explains why it is qualitatively different from gravity or electromagnetism.

## 1. What the nuclear force has to do

Inside a nucleus the protons repel electrically and the neutrons are neutral, so neither gravity nor electromagnetism can bind the system. The binding energy per nucleon of $\sim8\ \text{MeV}$ implies an attractive interaction far stronger than the Coulomb force at femtometre separations. That interaction is the nuclear force. It acts between nucleons (proton–proton, neutron–neutron, proton–neutron) and is responsible for the very existence of stable nuclei.

## 2. Observed properties

From scattering experiments and from the systematics of nuclear masses, the nuclear force is found to be:

1. **Strong**: at separations of $\sim1$–$2\ \text{fm}$ it is roughly $100$ times stronger than the electromagnetic force.
2. **Short-ranged**: it is negligible beyond about $2.5$–$3\ \text{fm}$; two nucleons farther apart than that do not feel it.
3. **Attractive at medium range**: between roughly $1$ and $3\ \text{fm}$ it pulls nucleons together.
4. **Repulsive at very short range**: below about $0.5\ \text{fm}$ it becomes strongly repulsive, giving the nucleus a “hard core” and preventing collapse.
5. **Charge-independent**: the force between two protons, two neutrons, or a proton and a neutron is approximately the same (after removing Coulomb effects). This is why mirror nuclei have similar binding energies.
6. **Saturated**: a nucleon interacts strongly only with its nearest neighbours, not with every other nucleon. Hence the binding energy per nucleon is roughly constant for medium and heavy nuclei, and the nuclear density is universal.

Saturation is the key difference from gravity or Coulomb forces, which act between every pair of particles and grow with system size.

## 3. Range: a Yukawa estimate

Yukawa proposed that the nuclear force is mediated by the exchange of a particle of mass $m$. A force mediated by a massive particle has a finite range

$$
R \sim \frac{\hbar}{m c}.
$$

Using the pion mass $m_\pi\approx140\ \text{MeV}/c^2$ (the lightest meson), and $\hbar c\approx197\ \text{MeV·fm}$,

$$
R \sim \frac{197}{140}\ \text{fm} \approx 1.4\ \text{fm}.
$$

This matches the observed range. The exchanged particle is the **pion** ($\pi^+$, $\pi^-$, $\pi^0$), and the force is now understood as a residual effect of the strong interaction between quarks. The point for this course is the estimate: a massive mediator gives a finite range of order $1$–$2\ \text{fm}$.

## 4. Why the nucleus does not collapse or explode

The balance of forces sets the equilibrium spacing. At large separation the nuclear force is zero and the Coulomb repulsion (for protons) is tiny, so nucleons would drift apart. As they approach, the attractive nuclear force turns on and pulls them in. If they get too close, the repulsive core pushes them out. The equilibrium separation is where the net force is zero, around $1$–$2\ \text{fm}$, which is exactly the observed inter-nucleon spacing. This is analogous to the equilibrium of two atoms in a molecule, but with a much stronger and shorter-ranged interaction.

For heavy nuclei, the Coulomb repulsion accumulates over many proton pairs while the nuclear force saturates, so very heavy nuclei become unstable to fission. For very light nuclei, there are too few nucleons for the attraction to bind strongly, which is why hydrogen-1 is stable but a two-proton system is not.

## 5. Worked example: estimating the range

Estimate the range of the nuclear force using the pion mass $m_\pi c^2=140\ \text{MeV}$.

$$
R = \frac{\hbar c}{m_\pi c^2}
  = \frac{197.3\ \text{MeV·fm}}{140\ \text{MeV}}
  \approx 1.41\ \text{fm}.
$$

**Sanity check:** this is of the same order as the nucleon spacing ($\sim2\ \text{fm}$) and well inside the nuclear radius ($\sim$ a few fm). A mediator much lighter than the pion would give a longer range than observed; a heavier one would give too short a range to bind the nucleus.

## 6. A common mistake

**Treating the nuclear force as an inverse-square, infinite-range force like gravity.** If it were, every nucleon would interact with every other nucleon, binding energy per nucleon would grow with $A$, and nuclei would have no upper size limit. The observed saturation and the finite range are the evidence against this. When a problem gives a nuclear radius or asks about stability, the relevant facts are the short range and saturation, not a force law like $1/r^2$.

A related error is confusing the nuclear force with the Coulomb force and trying to compute a nuclear binding from electrostatics; the Coulomb energy is a correction (and a destabilising one for heavy nuclei), not the binding mechanism.

## Try it yourself

**A.** If the nuclear force were not saturated, how would the binding energy per nucleon scale with $A$ for large $A$?

<details><summary>Show the reasoning</summary>

Without saturation each nucleon would interact with all the others, so the total binding energy would scale as $A^2$ and $B/A$ would grow linearly with $A$. The observed roughly constant $B/A$ for medium and heavy nuclei is the experimental signature of saturation.
</details>

**B.** Estimate the range if the exchanged particle had mass $500\ \text{MeV}/c^2$.

<details><summary>Show the reasoning</summary>

$R = 197/500 \approx 0.39\ \text{fm}$, shorter than a nucleon spacing, so such a particle could not mediate the binding of whole nuclei.
</details>

**C.** Why are there no stable nuclei with $Z>83$ (bismuth) beyond a certain point, and why is there no nucleus with just two protons?

<details><summary>Show the reasoning</summary>

For large $Z$ the cumulative Coulomb repulsion eventually exceeds the saturated nuclear attraction, so heavy nuclei undergo alpha decay or fission. A two-proton system has no neutron to provide extra attraction and no Pauli/spin arrangement that binds it; the nuclear force alone is insufficient without the neutron–proton combination, which is why the diproton is unbound.
</details>

## Remember

- The nuclear force is strong, short-ranged ($\sim1$–$3\ \text{fm}$), attractive at medium range, repulsive at very short range.
- It is charge-independent and saturated (nearest-neighbour only).
- Range estimate: $R\sim\hbar/(mc)$; for the pion, $R\approx1.4\ \text{fm}$.
- Saturation explains constant nuclear density and roughly constant $B/A$.
- Coulomb repulsion is the destabilising correction for heavy nuclei.

The next module applies these ideas to unstable nuclei: the types of radioactive decay, their mechanisms, and the exponential decay law.