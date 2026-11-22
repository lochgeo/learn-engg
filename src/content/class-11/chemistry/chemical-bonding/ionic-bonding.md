## Start with the transfer

Hand a sodium atom an electron-count problem: one electron outside a stable ten-electron core. Hand chlorine one slot short of a full octet. Sodium gives, chlorine takes, and the resulting $\mathrm{Na^+}$ and $\mathrm{Cl^-}$ ions attract over the entire crystal — that electrostatic attraction is the ionic bond. This module asks the two questions an exam always asks: *how much energy is involved*, and *why some "ionic" bonds are not fully ionic*.

## 1. Forming the ions

Ionisation removes electrons; electron gain adds them. The relevant numbers for NaCl:

| Step | Process | Energy (kJ mol⁻¹ of Na atoms) |
| --- | --- | --- |
| sublimation | $\mathrm{Na(s) \rightarrow Na(g)}$ | $+108$ |
| ionisation | $\mathrm{Na(g) \rightarrow Na^+(g) + e^-}$ | $+496$ |

Each is strongly endothermic. Electron gain is the one exothermic step for a halogen:

$$
\mathrm{Cl(g) + e^- \rightarrow Cl^-(g)} \qquad \Delta_{eg}H = -349\ \text{kJ mol}^{-1}.
$$

Notice the crisis this creates: making free gaseous ions costs $108 + 496 - 349 = +255\ \text{kJ mol}^{-1}$. The ions would spontaneously fall back apart if there were nothing to hold them together. The saving step is the lattice.

<learning-block type="concept" title="Where the profit comes from">

Ionic compounds exist because packing ions into a crystal is overwhelmingly exothermic. The electrostatic food chain is: lattice enthalpy (huge, negative) pays for ionisation energy (huge, positive), which electron affinity only partially refunds. A gas of isolated ion pairs is a losing proposition; a crystal is the profitable arrangement.

</learning-block>

## 2. Lattice enthalpy

The **lattice enthalpy** is the enthalpy change when one mole of an ionic solid forms from its gaseous ions:

$$
\mathrm{Na^+(g) + Cl^-(g) \rightarrow NaCl(s)} \qquad \Delta_{lattice}H = -788\ \text{kJ mol}^{-1}.
$$

Some books quote the reverse process (separating the crystal into gaseous ions) and give $+788$. Check the wording of any exam question before quoting a sign. The magnitude follows Coulomb's law:

$$
|U| \propto \frac{|z_+z_-|}{r_+ + r_-},
$$

so it grows with the charges on the ions and shrinks as the ions grow. Compare: LiF (small ions, ±1) about $-1046$; NaCl about $-788$; **MgO** ($\pm2$ charges, small ions) about $-3890$. That is why magnesium oxide resists melting to $2852^\circ\text{C}$ while sodium chloride melts at $801^\circ\text{C}$ (1074 K).

## 3. The Born–Haber cycle: closing the energy account

The Born–Haber cycle is an application of Hess's law around one complete formation loop:

$$
\Delta_f H = \Delta_{sub}H + IE + \tfrac12 \Delta_{diss}H + \Delta_{eg}H + \Delta_{lattice}H.
$$

Half the bond-dissociation enthalpy appears because one mole of $\mathrm{Cl^-}$ needs one mole of gaseous chlorine atoms, taken from half a mole of $\mathrm{Cl_2}$.

**Worked example.** For NaCl: $\Delta_f H = 108 + 496 + \tfrac12(243) - 349 + \Delta_{lattice}H = +255 + \tfrac12(243) - 788$.

$$
\Delta_f H = 108 + 496 + 122 - 349 - 788 = -411\ \text{kJ mol}^{-1}.
$$

The experimental formation enthalpy of NaCl is $-411\ \text{kJ mol}^{-1}$: the cycle closes. The cycle is also used the other way — measure the formation enthalpy and solve for whichever term is unknown (often the lattice enthalpy, which cannot be measured directly).

## 4. What favours ionic character

A bond is ionic when the electronegativity difference is large enough for complete transfer. The favourites are:

- **high electropositivity of the metal**: group 1 and 2 elements, further down each group;
- **high electronegativity of the non-metal**: F, O, Cl, N;
- **large charge product but small ions**, which maximise the lattice enthalpy payoff.

Abrupt in the ideal picture, but real bonds grade smoothly between ionic and covalent, which brings us to Fajans.

## 5. Fajans' rules: every "ionic" crystal has a covalent streak

A cation's electric field distorts (polarises) the electron cloud of its neighbouring anion; the more the cloud leans toward the cation, the more electron density is *shared*, and the more covalent the bond. Polarisation grows when:

1. the **cation is small** and **highly charged** (large charge density): $\mathrm{Li^+ > Na^+ > K^+}$, and $\mathrm{Al^{3+}}$ beats any alkali cation;
2. the **anion is large** and **highly charged**, so its outer electrons are loosely held: $\mathrm{I^- > Br^- > Cl^- > F^-}$, and $\mathrm{S^{2-} > O^{2-} > F^-}$;
3. the cation has a **pseudo-noble-gas configuration** $\boldsymbol{(n-1)d^{10}}$, whose poor d-electron shielding lets the core charge pull harder: compare $\mathrm{AgCl}$ (covalent streak) against $\mathrm{NaCl}$.

Consequences show up in ordinary properties. Insolubility and deep colours trend with covalent character: among lithium halides, covalent character rises $\mathrm{LiF < LiCl < LiBr < LiI}$, so LiI is far more soluble in organic solvents than LiF. Aluminium chloride is essentially covalent (it is volatile and dissolves in organic solvents) despite $\mathrm{Al^{3+}}$'s high charge — the tiny, highly charged cation polarises any anion too well for a fully ionic lattice.

<learning-block type="mistake" title="Ionic-bonding errors">

- Calling the lattice enthalpy of formation *positive*: forming the lattice from gaseous ions is always exothermic.
- Forgetting the factor of $\tfrac12$ on the dissociation enthalpy in a Born–Haber cycle.
- Ranking lattice enthalpies by charge alone: $\mathrm{NaCl}$ vs $\mathrm{NaF}$ differ by ionic radii, not charges.
- Assuming high charge on a cation guarantees an ionic compound — $\mathrm{AlCl_3}$ says otherwise.

</learning-block>

## Try it yourself

**A.** Given: Mg sublimation $+148$, $IE_1 = +738$, $IE_2 = +1451$; bond dissociation of $\mathrm{O_2} = +498$; first and second electron-gain enthalpies of oxygen $-141$ and $+844$; lattice enthalpy of MgO $-3890\ \text{kJ mol}^{-1}$. Compute $\Delta_f H$ MgO.

<details><summary>Show the reasoning</summary>

Ionisation: $148 + 738 + 1451 = +2337$. Oxygen: $\tfrac12(498) = +249$, then $-141 + 844 = +703$, giving $+952$ in total (note the *second* electron gain is **endothermic** because you are pushing into a negative ion). Then

$$
\Delta_f H = 2337 + 952 - 3890 = -601\ \text{kJ mol}^{-1},
$$

which matches the experimental $-602\ \text{kJ mol}^{-1}$. The cycle only balanced because the $\pm2$ charges bought an enormous lattice enthalpy.

</details>

**B.** Explain the melting-point order across the alkali-metal fluorides: NaF (1268 K) falls well below LiF (1568 K) but NaCl falls far below both.

<details><summary>Show the reasoning</summary>

Two opposing tendencies. Down the group Na⁺ > Li⁺ in size, so $1/(r_+ + r_-)$ falls and with it the lattice enthalpy — hence LiF > NaF. But F⁻ is far smaller than Cl⁻, so lithium and sodium fluorides both gain a large lattice enthalpy relative to the chlorides; the cation-size trend is a minor correction on top of the dominant anion-size effect. Sodium chloride melts below both fluorides.

</details>

**C.** Why is AgCl only sparingly soluble in water while NaCl dissolves freely, even though both are faces of similar charge?

<details><summary>Show the reasoning</summary>

$\mathrm{Ag^+}$ is small and carries the $4d^{10}$ pseudo-noble configuration, whose poor shielding raises the effective charge it presents. It polarises $\mathrm{Cl^-}$ strongly, adding covalent character; the lattice gains an extra stability that hydration of the ions cannot repay, so AgCl stays put in water. Ammonia dissolves it readily, because forming $\mathrm{[Ag(NH_3)_2]^+}$ contributes a new exothermic step that tips the balance.

</details>

## Remember

- Making gaseous ions is endothermic; **lattice enthalpy** is the step that pays for it.
- $|U| \propto |z_+z_-|/(r_+ + r_-)$: charge beats size, and both matter.
- The Born–Haber cycle is Hess's law from element to crystal to gaseous ions and back.
- Fajans' rules: small, highly charged cations and large anions push any "ionic" bond toward covalent sharing.
- Once covalent character sets in, melting points and solubilities stop following the pure-ionic pattern.

Ionic compounds are locked into crystal lattices and fixed formula units; molecular compounds explore what shared electron density can do. The next module catalogues the measurable properties of covalent bonds.
