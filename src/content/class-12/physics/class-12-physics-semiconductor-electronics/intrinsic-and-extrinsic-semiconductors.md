## Pure semiconductor, doped semiconductor

A pure silicon crystal at room temperature has very few free carriers. That is rarely useful. The power of semiconductor electronics comes from **doping**: adding a trace of an impurity that supplies either extra electrons or extra holes, turning a poor conductor into a controllable one while keeping the crystal intact.

## 1. Intrinsic semiconductors

In an intrinsic (pure) semiconductor, every atom is bonded to four neighbours in a diamond lattice. At $T=0$, all electrons are locked in covalent bonds; the valence band is full and the conduction band empty, so $\sigma=0$. At $T>0$, thermal energy occasionally breaks a bond, promoting an electron to the conduction band and leaving a **hole** behind in the valence band. The two move independently, so one broken bond gives *two* carriers.

Charge neutrality requires the electron and hole densities to be equal:

$$
n = p = n_i,
$$

where $n_i$ is the **intrinsic carrier concentration**. The conductivity is

$$
\sigma_i = n_i e(\mu_n+\mu_p),
$$

with $\mu_n$, $\mu_p$ the electron and hole mobilities. For silicon at $300\ \text{K}$, $n_i\approx1.5\times10^{16}\ \text{m}^{-3}$, $\mu_n\approx0.135\ \text{m}^2\text{V}^{-1}\text{s}^{-1}$, $\mu_p\approx0.048\ \text{m}^2\text{V}^{-1}\text{s}^{-1}$, giving $\sigma_i\approx4.4\times10^{-4}\ \text{S/m}$.

Because $n_i$ grows roughly as $T^{3/2}\exp(-E_g/2k_BT)$, intrinsic conduction is strongly temperature-dependent.

## 2. Extrinsic semiconductors: doping

Add a small amount (parts per million) of an impurity whose valence differs by one.

**n-type (donor doping).** Replace a Si atom with a pentavalent atom such as phosphorus. Four of its valence electrons join the bonds; the fifth is loosely bound and sits in a donor level just below the conduction band. At room temperature it is donated to the conduction band, so electrons become the **majority** carriers and holes the **minority** carriers.

**p-type (acceptor doping).** Replace a Si atom with a trivalent atom such as boron. It can complete only three bonds; the missing bond is a hole in the valence band that accepts an electron from a neighbour, moving the hole. Holes become the majority carriers.

The crystal stays electrically neutral overall: each extra electron or hole is compensated by a fixed ion of opposite charge in the lattice.

## 3. Carrier densities in doped material

Let $N_D$ be the donor concentration and $N_A$ the acceptor concentration. In thermal equilibrium the **mass-action law** holds for any semiconductor:

$$
np = n_i^2.
$$

For an n-type material with $N_D\gg n_i$ and $N_A=0$:

$$
n \approx N_D,\qquad p = \frac{n_i^2}{N_D}.
$$

For a p-type material with $N_A\gg n_i$:

$$
p \approx N_A,\qquad n = \frac{n_i^2}{N_A}.
$$

The conductivity becomes

$$
\sigma = e(n\mu_n + p\mu_p),
$$

which is dominated by the majority term. Doping at $10^{21}\ \text{m}^{-3}$ raises silicon's conductivity from $\sim4\times10^{-4}$ to $\sim20\ \text{S/m}$, an increase of roughly five orders of magnitude, while the material remains a semiconductor with a tunable carrier density.

## 4. Worked example: doped silicon

Silicon is doped with phosphorus to $N_D=1.0\times10^{21}\ \text{m}^{-3}$. Find the electron and hole densities and the conductivity at $300\ \text{K}$.

Electrons: $n\approx N_D=1.0\times10^{21}\ \text{m}^{-3}$.

Holes: $p=n_i^2/n=(1.5\times10^{16})^2/(1.0\times10^{21})=2.25\times10^{11}\ \text{m}^{-3}$.

Conductivity:

$$
\sigma = e(n\mu_n+p\mu_p)
      = (1.6\times10^{-19})\bigl[(1.0\times10^{21})(0.135)+(2.25\times10^{11})(0.048)\bigr]
      \approx 21.6\ \text{S/m}.
$$

The hole term is negligible, confirming n-type behaviour.

**Sanity check:** $p\ll n$, and $np=(1.0\times10^{21})(2.25\times10^{11})=2.25\times10^{32}=n_i^2$. Both conditions hold.

## 5. A common mistake

**Assuming doping creates net charge.** A doped semiconductor is still neutral: every mobile carrier is balanced by a fixed ion in the lattice. The impurity changes the *number* of carriers of each sign and the *conductivity*, not the total charge. A second error is using $n=N_D$ when $N_D$ is comparable to $n_i$; the full charge-neutrality equation $n+N_A=p+N_D$ together with $np=n_i^2$ must be solved in that case.

## Try it yourself

**A.** A silicon sample is doped with boron to $N_A=2.0\times10^{22}\ \text{m}^{-3}$. Find $p$, $n$ and the majority carrier.

<details><summary>Show the reasoning</summary>

p-type: $p\approx N_A=2.0\times10^{22}\ \text{m}^{-3}$, $n=n_i^2/p=(1.5\times10^{16})^2/(2.0\times10^{22})=1.125\times10^{10}\ \text{m}^{-3}$. Majority carriers are holes.
</details>

**B.** Why does the conductivity of an intrinsic semiconductor increase with temperature faster than that of a doped semiconductor at moderate temperatures?

<details><summary>Show the reasoning</summary>

Intrinsic $n_i$ grows exponentially from zero, so $\sigma_i$ rises steeply. In a doped semiconductor the majority density is already pinned near $N_D$ and changes only slowly; only the minority density and mobilities vary, so the rise is gentler.
</details>

**C.** State the mass-action law and explain why it holds for doped as well as pure semiconductors.

<details><summary>Show the reasoning</summary>

$np=n_i^2$ at a given temperature. It follows from the equilibrium between electron–hole generation and recombination, which depends only on temperature and the band structure, not on how the carriers were introduced.
</details>

## Remember

- Intrinsic: $n=p=n_i$; carriers are thermally generated electron–hole pairs.
- Doping with pentavalent atoms gives n-type; with trivalent atoms gives p-type.
- Charge neutrality: $n+N_A=p+N_D$; with $N_D\gg n_i$, $n\approx N_D$ and $p=n_i^2/N_D$.
- Mass action $np=n_i^2$ holds in equilibrium at a fixed temperature.
- Doping sets the majority carrier density; temperature sets $n_i$.

The next module puts p-type and n-type material in contact and explains the junction that makes diodes, transistors and integrated circuits possible.