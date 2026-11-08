## Pulling the first electron

Every atomic-size trend taught in the previous module can be re-read as one question: how hard is it to pull an electron out of the atom? Remove an electron from a gaseous atom in its ground state and the energy you must supply is the **ionisation enthalpy**:

$$
\mathrm{M(g)} + \Delta_i H_1 \longrightarrow \mathrm{M^+(g)} + e^-.
$$

Breaking an attraction always costs energy, so $\Delta_i H_1$ is **positive** — there is no sign convention to trip over, unlike electron gain enthalpy later. The unit in chemistry tables is $\text{kJ mol}^{-1}$ (older texts quote eV per atom; $1\ \text{eV} \approx 96.5\ \text{kJ mol}^{-1}$). The gas-phase condition matters: in a solid or solution, neighbours modify the energy, so only gas-phase values belong on the periodic trend.

## 1. Why every removal after the first costs more

Once one electron is gone, every remaining electron feels a larger net positive charge, and the ion is smaller than the atom — so successive ionisation enthalpies therefore **always increase**:

$$
\Delta_i H_1 < \Delta_i H_2 < \Delta_i H_3 < \cdots
$$

The pattern deepens step by step, because each smaller, more positively charged ion holds its remaining electrons more tightly than the last.

## 2. What decides how hard the first pull is

Four factors, all reducing to the nuclear-pull bookkeeping:

1. **Nuclear charge.** More protons pull the electron cloud in harder.
2. **Atomic size.** A further-out electron feels a weaker pull ($\propto 1/r^2$ in the elementary picture).
3. **Shielding and penetration.** Inner electrons screen the outer ones, and outer electrons screen each other weakly. Within a shell, penetration differs sharply: an $s$ electron dives close to the nucleus, $p$ less, $d$ still less. Pulling a *penetrating* electron costs more.
4. **Configuration stability.** Fully filled and exactly half-filled subshells have extra stability; removing an electron from such a configuration costs a premium.

The first three conspire across a period; the fourth creates the famous exceptions.

## 3. Down a group: easier to ionise

Down any group the outer electron sits in a new, further-out shell and is well shielded by all the layers beneath it, so it leaves more easily:

| Element | Li | Na | K | Rb |
| --- | --- | --- | --- | --- |
| $\Delta_i H_1$ ($\text{kJ mol}^{-1}$) | 520 | 496 | 419 | 403 |

The noble gases cap the other extreme: helium's $\Delta_i H_1$ is $2372\ \text{kJ mol}^{-1}$, the largest of any element — a closed $1s^2$ shell, no shielding, tiny distance. The ease of ionisation down a group is the chemical reason alkali metals are strong reducing agents and noble gases are inert.

## 4. Across a period: harder, with two famous dips

Across a period the outer shell fills while $Z_{eff}$ rises, so ionisation generally climbs. Period 2 shows the shape, including the two celebrated dips:

| Element | Li | Be | B | C | N | O | F | Ne |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $\Delta_i H_1$ ($\text{kJ mol}^{-1}$) | 520 | 900 | 801 | 1086 | 1402 | 1314 | 1681 | 2081 |

Every dip has the same signature: the general rise is interrupted exactly where the *next* electron would sit in a new, less-penetrating position, or where the configuration is particularly stable.

- **Be > B (900 vs 801).** Beryllium loses a $2s$ electron from a filled, penetrating, stable $2s^2$ subshell. Boron's extra electron has entered $2p$ — further from the nucleus and poorly penetrating — so it comes off more easily even though boron has one more proton.
- **N > O (1402 vs 1314).** Nitrogen has exactly half-filled $2p^3$: three unpaired, symmetric, stable. The next electron for oxygen must pair with one already there, and that pairing brings electron–electron repulsion, so oxygen's eighth electron is less firmly held.

The same two dips recur in period 3: magnesium (738) above aluminium (578), and phosphorus (1012) above sulphur (1000). The dips are not anomalies in the theory — they are the theory working correctly, with configuration stability written in.

## 5. Successive values as a fingerprint

The jump pattern of successive ionisation enthalpies counts the outer electrons and identifies the group. Consider an unknown element with these values:

| Ionisation | 1st | 2nd | 3rd | 4th | 5th |
| --- | --- | --- | --- | --- | --- |
| $\Delta_i H$ ($\text{kJ mol}^{-1}$) | 786 | 1587 | 3232 | 4355 | 16 091 |

Read the ratios: each step rises smoothly ($\times 2.0$, $\times 2.0$, $\times 1.3$) until the fifth, which leaps by a factor of about $3.7$. A jump that size means the fifth electron must come from *inside* the noble-gas core reached after four electrons. The element therefore has four valence electrons — group 14 — and the values identify it as silicon.

The general reading rule: **the largest ratio between successive values falls just after the last electron of the valence shell.** One big jump after the first — group 1. After the second — group 2 ($\mathrm{Be}$: 900, 1757, then 14 849). After the fifth — group 15 (nitrogen's 9445 followed by 53 266).

<learning-block type="mistake" title="Ionisation errors to avoid">

- **Quoting "ionisation enthalpy always increases across a period"** and being caught by Be–B and N–O (or Mg–Al and P–S). Say "increases with the two expected dips", and know why they fall where they do.
- **Comparing gas-phase ionisation enthalpies with solution chemistry.** In water, hydration energies reshape the story; the tabulated trend is a gas-phase quantity.
- **Treating the size of successive jumps qualitatively only.** Jump ratios identify groups; a factor of 2 between steps is routine, a factor of 3 or more signals core penetration.

</learning-block>

## Try it yourself

**1.** An element has successive ionisation enthalpies 496, 4562, 6912, 9543 $\text{kJ mol}^{-1}$. Identify its group and the element.

<details><summary>Show the reasoning</summary>

The jump from the first to the second ($\times 9.2$) dwarfs every later step ($\times 1.5$, $\times 1.4$): the first electron was the only valence electron, and the second had to leave the noble-gas core. One outer electron means group 1, and the numbers are sodium's exactly.
</details>

**2.** Which has the larger first ionisation enthalpy, neon or argon — and which factor settles it?

<details><summary>Show the reasoning</summary>

Neon ($2081\ \text{kJ mol}^{-1}$) beats argon ($1521\ \text{kJ mol}^{-1}$). Both have the same fully filled outer configuration, so configuration stability is equal; the deciding factor is size — neon's outer shell is $n=2$, much closer to the nucleus, so the electron is harder to remove than argon's $n=3$ electron.
</details>

**3.** Explain in two steps why $\Delta_i H_3$ of lithium ($11\,815\ \text{kJ mol}^{-1}$) is over ten times its $\Delta_i H_1$ ($520\ \text{kJ mol}^{-1}$).

<details><summary>Show the reasoning</summary>

Lithium is $1s^2 2s^1$: first and second removals take the $2s$ electron and then one $1s$ electron, after which the ion is $\mathrm{Li^{2+}}$ — a bare $1s^1$ core. The third electron must leave a doubly-charged, extremely compact ion sitting right on the nucleus, so the cost leaps by an order of magnitude.
</details>

## Remember

- Ionisation enthalpy is always positive and is defined for gaseous atoms in their ground state.
- Successive ionisation enthalpies increase monotonically; the ratio between successive values identifies the number of valence electrons.
- Down a group, size and shielding win, so ionisation enthalpy falls; the noble gases head the other extreme.
- Across a period, ionisation enthalpy rises, with dips at Be–B/Mg–Al and N–O/P–S caused by configuration stability and subshell penetration.
- A jump ratio of 3 or more between successive enthalpies means the next electron leaves the core — read off the group.

Removing electrons is half the story. The next module turns to the opposite process — what happens when an atom gains an electron, and how atoms compare in their pull on *shared* electrons.
