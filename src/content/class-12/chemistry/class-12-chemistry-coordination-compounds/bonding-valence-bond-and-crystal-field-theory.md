## Why is $[\mathrm{CoF_6}]^{3-}$ paramagnetic but $[\mathrm{Co(NH_3)_6}]^{3+}$ diamagnetic?

Both contain Co(III), a $d^6$ ion, yet one has four unpaired electrons and the other has none. The difference is not the metal but the ligand field: the ligands change how the d orbitals split and whether electrons pair. This module uses two models — valence bond (VB) theory and crystal field theory (CFT) — to explain such differences.

## 1. Valence bond theory

In VB theory, the metal provides empty hybrid orbitals that accept lone pairs from ligands; each metal–ligand bond is a coordinate covalent bond. The choice of hybridisation determines the geometry and whether the complex is inner- or outer-orbital.

- **Inner-orbital (low-spin) complex**: uses $(n-1)d$ orbitals in the hybridisation, e.g. $d^2sp^3$ for octahedral. Requires the metal’s d electrons to be paired first, freeing two $(n-1)d$ orbitals.
- **Outer-orbital (high-spin) complex**: uses outer $nd$ orbitals, e.g. $sp^3d^2$ for octahedral. The $(n-1)d$ electrons keep their original (unpaired) arrangement.

Worked example: Co(III) is $d^6$.

- With strong-field $\mathrm{NH_3}$, the six d electrons pair into three $(n-1)d$ orbitals, leaving two empty for $d^2sp^3$ hybridisation. $[\mathrm{Co(NH_3)_6}]^{3+}$ is **inner-orbital, diamagnetic**.
- With weak-field $\mathrm{F^-}$, the d electrons stay unpaired in five orbitals; the complex uses $sp^3d^2$. $[\mathrm{CoF_6}]^{3-}$ is **outer-orbital, paramagnetic** with 4 unpaired electrons.

VB theory explains geometry and magnetism qualitatively, but it does not explain colour or spectra quantitatively, and it assumes purely ionic/covalent bonding without handling partial covalency well.

## 2. Crystal field theory: the electrostatic picture

CFT treats ligands as point charges (or dipoles) that create an electric field around the metal. This field is not spherical; it splits the five degenerate d orbitals into sets of different energy. The size of the splitting is $\Delta$ (or $10Dq$).

### Octahedral field

In an octahedral field the d orbitals split into:

- $t_{2g}$ (lower): $d_{xy}, d_{yz}, d_{zx}$ — energy $-0.4\Delta_o$.
- $e_g$ (higher): $d_{z^2}, d_{x^2-y^2}$ — energy $+0.6\Delta_o$.

The splitting is $\Delta_o$. The $e_g$ orbitals point directly at the ligands along the axes, so they are raised in energy; the $t_{2g}$ orbitals point between the ligands.

### Tetrahedral field

In a tetrahedral field the splitting is inverted and smaller:

- $e$ (lower): $d_{z^2}, d_{x^2-y^2}$ — energy $-0.6\Delta_t$.
- $t_2$ (higher): $d_{xy}, d_{yz}, d_{zx}$ — energy $+0.4\Delta_t$.

Here $\Delta_t \approx \frac{4}{9}\Delta_o$, and because $\Delta_t$ is small, tetrahedral complexes are almost always **high spin**.

### Square planar

A square planar field can be seen as an octahedral field with the two axial ligands removed. The splitting is large along one direction and produces a distinctive four-level pattern; this geometry is common for $d^8$ metals such as Pt(II), Pd(II) and Ni(II) with strong-field ligands.

## 3. High spin versus low spin

For $d^4$–$d^7$ octahedral complexes, the electrons can either occupy the higher $e_g$ set (high spin, weak field) or pair in the lower $t_{2g}$ set (low spin, strong field). The outcome depends on the competition between:

- the crystal field splitting $\Delta_o$, and
- the pairing energy $P$ (the cost of putting two electrons in one orbital).

If $\Delta_o > P$, the complex is **low spin**; if $\Delta_o < P$, it is **high spin**.

The **spectrochemical series** orders ligands from weak to strong field:

$$
\mathrm{I^- < Br^- < SCN^- (S) < Cl^- < NO_3^- < F^- < OH^- < C_2O_4^{2-} < H_2O < NCS^- (N) < NH_3 < en < CN^- < CO}.
$$

Weak-field ligands (left) give high spin; strong-field ligands (right) give low spin.

Worked example: $\mathrm{Fe^{2+}}$ is $d^6$.

- $[\mathrm{Fe(H_2O)_6}]^{2+}$: $\mathrm{H_2O}$ is weak field → high spin: $t_{2g}^4 e_g^2$, with 4 unpaired electrons.
- $[\mathrm{Fe(CN)_6}]^{4-}$: $\mathrm{CN^-}$ is strong field → low spin: $t_{2g}^6 e_g^0$, with 0 unpaired electrons.

## 4. Crystal field stabilisation energy (CFSE)

CFSE is the net change in d-orbital energy relative to the unsplit (spherical) field. For an octahedral complex,

$$
\mathrm{CFSE} = (-0.4\,n_{t_{2g}} + 0.6\,n_{e_g})\,\Delta_o,
$$

where $n_{t_{2g}}$ and $n_{e_g}$ are the numbers of electrons in those sets. (Pairing-energy corrections are added when comparing high- and low-spin forms.)

Worked example: $[\mathrm{Ti(H_2O)_6}]^{3+}$ has Ti(III) = $d^1$, configuration $t_{2g}^1 e_g^0$.

$$
\mathrm{CFSE} = (-0.4)(1)\Delta_o = -0.4\Delta_o.
$$

The complex is violet because a $d$–$d$ transition promotes the single electron from $t_{2g}$ to $e_g$, absorbing green-yellow light (complementary colour violet).

Worked example: low-spin $[\mathrm{Co(NH_3)_6}]^{3+}$ ($d^6$, $t_{2g}^6 e_g^0$):

$$
\mathrm{CFSE} = (-0.4)(6)\Delta_o = -2.4\Delta_o.
$$

High-spin $[\mathrm{CoF_6}]^{3-}$ ($d^6$, $t_{2g}^4 e_g^2$):

$$
\mathrm{CFSE} = (-0.4)(4) + (0.6)(2) = -1.6 + 1.2 = -0.4\Delta_o.
$$

The large extra stabilisation of the low-spin form explains why strong-field ligands favour pairing.

## 5. Magnetic moment

For complexes where only spin contributes (first-row transition metals), the spin-only magnetic moment is

$$
\mu = \sqrt{n(n+2)}\ \mathrm{BM},
$$

where $n$ is the number of unpaired electrons and BM is the Bohr magneton. A complex with $n=0$ is diamagnetic; $n\ge 1$ gives paramagnetism.

Worked check: high-spin $d^6$ has $n=4$, so $\mu=\sqrt{4\times 6}=\sqrt{24}\approx 4.90\ \mathrm{BM}$, close to the observed value for $[\mathrm{CoF_6}]^{3-}$.

## 6. A reliable bonding method

1. Find the metal’s d-electron count from its oxidation state.
2. Use the spectrochemical series to judge whether the ligand is weak or strong field.
3. Decide high spin or low spin for $d^4$–$d^7$ octahedral complexes.
4. Write the $t_{2g}/e_g$ (or $e/t_2$) configuration and compute CFSE.
5. Count unpaired electrons and compute $\mu$.
6. Use VB hybridisation ($d^2sp^3$ vs $sp^3d^2$) only when geometry/magnetism is asked in the inner/outer-orbital language.

<learning-block type="mistake" title="Bonding-theory errors">
- **Using $d^2sp^3$ and $sp^3d^2$ interchangeably.** The former uses inner $(n-1)d$ orbitals and gives low-spin complexes; the latter uses outer $nd$ orbitals and gives high-spin complexes.
- **Applying high-spin/low-spin language to $d^1$–$d^3$ or $d^8$–$d^{10}$.** There is no spin ambiguity for those counts in octahedral fields.
- **Forgetting that tetrahedral splitting is inverted.** In tetrahedral complexes the $e$ set is lower, not $t_2$.
- **Treating CFSE as the total bonding energy.** CFSE is only the d-orbital part; it ignores sigma bonding, pairing energy and covalency.
</learning-block>

## Try it yourself

**A.** Predict whether $[\mathrm{Ni(CN)_4}]^{2-}$ is diamagnetic or paramagnetic, given that it is square planar.

<details><summary>Show the reasoning</summary>

Ni(II) is $d^8$. In a square planar strong-field complex all eight d electrons are paired in the four lower levels, so the complex is **diamagnetic**.

</details>

**B.** Write the crystal-field configuration and CFSE of $[\mathrm{Cr(H_2O)_6}]^{3+}$ (Cr(III) = $d^3$).

<details><summary>Show the reasoning</summary>

$d^3$ gives $t_{2g}^3 e_g^0$ (no spin ambiguity). $\mathrm{CFSE}=(-0.4)(3)\Delta_o=-1.2\Delta_o$.

</details>

**C.** How many unpaired electrons does high-spin $[\mathrm{Mn(H_2O)_6}]^{2+}$ have (Mn(II) = $d^5$)?

<details><summary>Show the reasoning</summary>

High spin $d^5$: $t_{2g}^3 e_g^2$, all five electrons unpaired, so $n=5$ and $\mu=\sqrt{5\times 7}=\sqrt{35}\approx 5.92\ \mathrm{BM}$.

</details>

## Check your understanding

Why does CFT predict that tetrahedral complexes are almost always high spin?

<details><summary>Reveal</summary>

Because $\Delta_t \approx \frac{4}{9}\Delta_o$, the tetrahedral splitting is much smaller than the pairing energy $P$ for first-row metals. The cost of pairing exceeds the energy gained by occupying the lower set, so electrons spread across all five d orbitals.

</details>

## Remember

- VB theory explains geometry and magnetism via hybridisation; CFT explains splitting, colour and CFSE via an electrostatic field.
- Octahedral splitting: $t_{2g}$ lower ($-0.4\Delta_o$), $e_g$ higher ($+0.6\Delta_o$); tetrahedral splitting is inverted and $\approx \frac{4}{9}\Delta_o$.
- High spin vs low spin depends on $\Delta$ versus pairing energy $P$; the spectrochemical series ranks ligand field strength.
- CFSE = $(-0.4 n_{t_{2g}} + 0.6 n_{e_g})\Delta_o$ for octahedral complexes.
- Spin-only moment $\mu=\sqrt{n(n+2)}\ \mathrm{BM}$; $n=0$ means diamagnetic.

The next module stops explaining and starts testing: you will choose between these models under exam conditions and diagnose your own errors.