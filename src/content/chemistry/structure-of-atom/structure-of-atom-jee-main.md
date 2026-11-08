## JEE Main sprint: how to use this set

This is a **50-minute, no-notes** paper on the whole Structure of Atom chapter. Attempt it only after finishing the seven concept modules and the mastery check. Spend roughly **15 minutes on Section A, 15 on Section B, 10 on Section C and 10 on Section D**. Mark anything still alive after 90 seconds and move on — every question here has a short solution, and dragging is how papers die.

Before each equation, name the tool: wave relation, Rydberg formula, photoelectric balance, Bohr scaling, de Broglie, uncertainty, or the configuration rules. Writing the tool down is half the marking scheme.

## Constants and conditions sheet

| Quantity | Value |
| --- | --- |
| Planck's constant | $h=6.626\times10^{-34}\ \text{J s}$ |
| Speed of light | $c=3.00\times10^{8}\ \text{m s}^{-1}$ |
| Elementary charge | $e=1.60\times10^{-19}\ \text{C}$ |
| Electron mass | $m_e=9.11\times10^{-31}\ \text{kg}$ |
| Rydberg constant | $R_H=1.097\times10^{7}\ \text{m}^{-1}$ |
| Bohr energy (H) | $E_n=-13.6\ \text{eV}/n^{2}$ (scale by $Z^{2}$) |
| Bohr radius (H) | $r_n=52.9\ \text{pm}\times n^{2}/Z$ |

Fast photons: $E(\text{eV})=1240/\lambda(\text{nm})$. Fast electrons: $\lambda=1.227/\sqrt{V}\ \text{nm}$ for a potential difference of $V$ volts.

## Section A — 10 rapid MCQs

### 1. A historic ratio

The charge-to-mass ratio of the electron, measured by J. J. Thomson, is:

- A. $1.76\times10^{11}\ \text{C kg}^{-1}$
- B. $9.58\times10^{7}\ \text{C kg}^{-1}$
- C. $1.60\times10^{-19}\ \text{C kg}^{-1}$
- D. $9.11\times10^{-31}\ \text{C kg}^{-1}$

<details><summary>Answer</summary>

**A.** $e/m_e=1.76\times10^{11}\ \text{C kg}^{-1}$. Option B is the similar ratio for a proton: nearly two thousand times smaller because of the heavier mass.
</details>

### 2. Which series is visible?

The hydrogen series lying wholly in the visible region is:

- A. Lyman  B. Balmer  C. Paschen  D. Brackett

<details><summary>Answer</summary>

**B.** Balmer, arrival on $n_1=2$: the first line is $656\ \text{nm}$ (red) and the limit $365\ \text{nm}$ (violet), exactly bracketing visibility. Lyman is ultraviolet; Paschen and beyond are infrared.
</details>

### 3. Photon energy

The energy of a photon of wavelength $620\ \text{nm}$ is about:

- A. $1.0\ \text{eV}$  B. $2.0\ \text{eV}$  C. $3.1\ \text{eV}$  D. $6.2\ \text{eV}$

<details><summary>Answer</summary>

**B.** $E=1240/620=2.0\ \text{eV}$. The formula $E(\text{eV})=1240/\lambda(\text{nm})$ is worth committing to memory.
</details>

### 4. Turning up the brightness

In a photoelectric experiment, increasing the intensity of light above threshold:

- A. raises the maximum kinetic energy
- B. raises the number of photoelectrons per second
- C. raises the threshold frequency
- D. raises the stopping potential

<details><summary>Answer</summary>

**B.** More intensity means more photons per second, so more electrons per second. Each photon's energy is unchanged, so kinetic energy and stopping potential stay put.
</details>

### 5. The address that cannot exist

Which of these is **not** a possible state of an electron?

- A. $3d$  B. $2s$  C. $2d$  D. $4f$

<details><summary>Answer</summary>

**C.** A d orbital needs $l=2$, but $l\le n-1=1$ in the $n=2$ shell. For $n=2$ only s and p exist.
</details>

### 6. Counting nodes

The number of **radial** nodes in a 3p orbital is:

- A. 0  B. 1  C. 2  D. 3

<details><summary>Answer</summary>

**B.** Radial nodes $=n-l-1=3-1-1=1$. Its angular nodes $=l=1$, total $=2=n-1$.
</details>

### 7. Angular momentum of a d electron

The orbital angular momentum of an electron in a d orbital is:

- A. $\sqrt{2}\,\hbar$  B. $\sqrt{6}\,\hbar$  C. $6\hbar$  D. $\sqrt{12}\,\hbar$

<details><summary>Answer</summary>

**B.** $|\vec L|=\sqrt{l(l+1)}\,\hbar=\sqrt{2\cdot3}\,\hbar=\sqrt6\,\hbar$. Remember the pattern through the multiplier $\sqrt{l(l+1)}$: it gives $0$ for s, $\sqrt2$ for p, $\sqrt6$ for d and $\sqrt{12}$ for f, all times $\hbar$.
</details>

### 8. The famous exception

The ground-state configuration of chromium ($Z=24$) is:

- A. $[\mathrm{Ar}]3d^{4}4s^{2}$  B. $[\mathrm{Ar}]3d^{5}4s^{1}$  C. $[\mathrm{Ar}]3d^{4}4s^{1}4p^{1}$  D. $[\mathrm{Ar}]3s^{2}3p^{6}3d^{8}$

<details><summary>Answer</summary>

**B.** $[\mathrm{Ar}]3d^{5}4s^{1}$: exactly half-filled $d$, gaining exchange energy at the cost of promoting one $4s$ electron.
</details>

### 9. Telling twins apart

Which quantum number distinguishes $2p_x$ from $2p_y$?

- A. $n$  B. $l$  C. $m_l$  D. $m_s$

<details><summary>Answer</summary>

**C.** Same shell and subshell; only the magnetic quantum number, choosing the orientation of each orbital, differs.
</details>

### 10. Double the speed

If the speed of a non-relativistic particle is doubled, its de Broglie wavelength:

- A. doubles  B. halves  C. becomes $\sqrt2$ times  D. is unchanged

<details><summary>Answer</summary>

**B.** $\lambda=h/mv$ halves when $v$ doubles. (Doubling the kinetic energy instead gives a factor $\sqrt2$, since $\lambda=h/\sqrt{2mK}$.)
</details>

## Section B — 5 numerical-value questions

Give the numerical answer; no options to eliminate.

### 11. A Balmer line

Find the wavelength, in nanometres, of light emitted in the hydrogen transition $n=4\to2$.

<details><summary>Answer</summary>

$$
\bar\nu=R_H\left(\frac{1}{4}-\frac{1}{16}\right)=1.097\times10^{7}\times\frac{3}{16}=2.06\times10^{6}\ \text{m}^{-1},
$$

$$
\lambda=4.86\times10^{-7}\ \text{m}=486\ \text{nm}.
$$

Answer: **486** (approximately; 486.2 with full constants).
</details>

### 12. Deep ion

The ionisation energy of He⁺ ($Z=2$) from its ground state, in eV, is:

<details><summary>Answer</summary>

$|E_1|=13.6\ \text{eV}\times Z^{2}=13.6\times4=54.4\ \text{eV}$.

Answer: **54.4**.
</details>

### 13. Electrons through a potential

An electron is accelerated from rest through $150\ \text{V}$. Its de Broglie wavelength, in nm, is (two decimals):

<details><summary>Answer</summary>

$K=eV=1.60\times10^{-19}\times150=2.40\times10^{-17}\ \text{J}$, so

$$
\lambda=\frac{h}{\sqrt{2mK}}=\frac{6.626\times10^{-34}}{\sqrt{2(9.11\times10^{-31})(2.40\times10^{-17})}}=1.0\times10^{-10}\ \text{m}.
$$

(Shortcut: $\lambda=1.227/\sqrt{150}=0.100\ \text{nm}$.)

Answer: **0.10** nm.
</details>

### 14. The atom's blur

An electron is confined to within $\Delta x=10^{-10}\ \text{m}$ (an atomic diameter). Its minimum uncertainty in speed, in units of $10^{5}\ \text{m s}^{-1}$, is (two decimals):

<details><summary>Answer</summary>

$$
\Delta v\gtrsim\frac{h}{4\pi m\,\Delta x}=\frac{6.626\times10^{-34}}{4\pi\,(9.11\times10^{-31})\,(10^{-10})}=5.79\times10^{5}\ \text{m s}^{-1}.
$$

Answer: **5.79** (in units of $10^{5}\ \text{m s}^{-1}$). Note this is a sizeable fraction of Bohr's orbital speed — orbits are dead, orbitals are alive.
</details>

### 15. Unpaired counting

The number of unpaired electrons in a ground-state Fe²⁺ ion ($Z=26$) is:

<details><summary>Answer</summary>

$\mathrm{Fe}=[\mathrm{Ar}]3d^{6}4s^{2}$; the ion loses the two $4s$ electrons first: $\mathrm{Fe}^{2+}=[\mathrm{Ar}]3d^{6}$. By Hund's rule: five orbitals singly occupied, the sixth pairs into one →

$$
\begin{array}{ccccc}
\uparrow\downarrow & \uparrow & \uparrow & \uparrow & \uparrow
\end{array}
$$

Answer: **4** unpaired electrons.
</details>

## Section C — 3 assertion–reason questions

Choose: **A** = both true, and II explains I; **B** = both true, II does not explain I; **C** = I true, II false; **D** = I false, II true.

### 16. Ultraviolet arrivals

**I.** The Lyman series of hydrogen lies entirely in the ultraviolet.
**II.** All Lyman photons carry between $10.2\ \text{eV}$ and $13.6\ \text{eV}$ of energy.

<details><summary>Answer</summary>

**A.** Lyman photons come from $n_2\ge2$ landing on $n_1=1$: energies run from $13.6(1-1/4)=10.2\ \text{eV}$ up to the limit $13.6\ \text{eV}$, i.e. wavelengths $121.6\ \text{nm}$ down to $91.2\ \text{nm}$ — all ultraviolet. The energy range *is* the reason; the relationship is causal, so II explains I.
</details>

### 17. Brightness again

**I.** Increasing the intensity of incident light above threshold increases the maximum kinetic energy of the photoelectrons.
**II.** The stopping potential of a photoelectric cell rises when the frequency of the incident light is increased.

<details><summary>Answer</summary>

**D.** Statement I is false: intensity raises the photoelectron *rate*, not their kinetic energy ($K_{max}=h\nu-W_0$ depends on frequency alone). Statement II is true: $eV_0=K_{max}=h\nu-W_0$, so a higher frequency gives a higher stopping potential. Hence I false, II true → option D.
</details>

### 18. Fill first, lose first

**I.** The $4s$ orbital fills before $3d$, but in transition-metal **ions** electrons are lost from $4s$ first.
**II.** The relative energy of the $4s$ and $3d$ levels is not fixed: it depends on how many electrons partly occupy them.

<details><summary>Answer</summary>

**A.** An empty $3d$ sits above $4s$ in energy (so filling prefers $4s$), but once $3d$ starts filling, nuclear screening changes and $3d$ drops below $4s$. Losing the outer $4s$ electrons is losing the higher ones *at that occupancy*. II states exactly why the flip occurs, so it explains I.
</details>

## Section D — 2 matching / multi-statement questions

### 19. Series and their limits

Match each hydrogen series (List I) with its limiting **shortest-wavelength** line of the correct order of magnitude (List II).

| List I | List II |
| --- | --- |
| P. Lyman | 1. $\sim364.6\ \text{nm}$ |
| Q. Balmer | 2. $\sim91.2\ \text{nm}$ |
| R. Paschen | 3. $\sim1458\ \text{nm}$ |
| S. Brackett | 4. $\sim820.4\ \text{nm}$ |

<details><summary>Answer</summary>

The series limit has $\bar\nu=R_H/n_1^{2}$, i.e. $\lambda_{\text{limit}}=n_1^{2}/R_H$: for Lyman ($n_1=1$) $91.2\ \text{nm}$; Balmer ($n_1=2$) $4/R_H=364.6\ \text{nm}$; Paschen ($n_1=3$) $9/R_H=820.4\ \text{nm}$; Brackett ($n_1=4$) $16/R_H=1458\ \text{nm}$.

So **P–2, Q–1, R–4, S–3**. Pattern to trust: the limit scales as $n_1^2$, never as $2^{n_1}$ or any odd mixture.
</details>

### 20. Bohr scalings, four ways

For a hydrogen-like ion in Bohr's model, three of the four statements below are correct. Which one is wrong?

1. The orbital radius is proportional to $n^{2}/Z$.
2. The orbital speed is proportional to $Z/n$.
3. As $n$ grows, the orbit energy $E_n$ approaches **zero from below**.
4. The total energy of the orbit becomes deeper (more negative) as $n$ increases.

<details><summary>Answer</summary>

Statement **4 is wrong**. $E_n=-13.6Z^{2}/n^{2}\ \text{eV}$ rises towards $0$ as $n$ increases: it is *shallowest* for excited states and deepest for the ground state.

1 is correct ($r_n=52.9\ \text{pm}\cdot n^2/Z$);
2 is correct ($v_n=2.18\times10^{6}\ \text{m s}^{-1}\cdot Z/n$);
3 is correct ($E_n\to0^{-}$ as $n\to\infty$, the ionisation limit).
</details>

## Review by error, not by score

| If you missed… | Revisit | Then check that you can… |
| --- | --- | --- |
| 1, 16 | Cathode rays and the first particles | Recite $e/m$, $e$, $m_e$ and who measured what. |
| 2, 11, 19 | Radiation, spectra, hydrogen series | Write $\bar\nu=R_H(1/n_1^2-1/n_2^2)$ and convert $\bar\nu\leftrightarrow\lambda$ without slipping. |
| 3, 4, 17 | Quantum theory & photoelectric effect | Separate photon energy from photon number in every sentence. |
| 12, 20 | Bohr's model | Scale radius, speed and energy by $n$ and $Z$, and keep the sign straight. |
| 10, 13 | Dual nature | Compute $\lambda$ from speed, voltage-based energy or momentum. |
| 14 | Uncertainty principle | Set up $\Delta x\,\Delta p\ge h/4\pi$ and push out the excluded region. |
| 6, 7, 9 | Quantum numbers & orbitals | Validate addresses and count orbitals, nodes and degeneracies. |
| 5, 8, 15, 18 | Electronic configuration | Apply $(n+l)$, Hund, Pauli and the Cr/Cu anomalies to neutrals *and* ions. |

<learning-block type="recap" title="Ready to log a score?">

Target at least 17 of 20 in 50 minutes, with the tool written beside each solution. Questions you guessed right are false positives — redo them with the working shown before you call the chapter closed.

</learning-block>
