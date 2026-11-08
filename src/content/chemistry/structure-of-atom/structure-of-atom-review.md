## Your study plan for this chapter

This chapter is a chain of small, precise tools rather than one big formula. A focused first pass takes about **3 hours**, plus a break:

1. **From cathode rays to Rutherford** — 22 min
2. **Radiation, spectra and hydrogen's lines** — 22 min
3. **Planck's quantum and the photoelectric effect** — 22 min
4. **Bohr's model** — 24 min
5. **Dual nature and the uncertainty principle** — 20 min
6. **Quantum numbers and orbitals** — 24 min
7. **Electronic configuration** — 22 min
8. **This mastery check** — 25 min

Close each lesson before practising it, and redo its "Try it yourself" items from a blank page. When all seven are readable without notes, attempt this mixed set; after this, the timed JEE set closes the chapter.

## Which tool do I reach for?

| Clue in the question | Start with |
| --- | --- |
| Wavelength and frequency of radiation interchanged | $c=\nu\lambda=3.00\times10^{8}\ \text{m s}^{-1}$ |
| "Series", "line", "transition" in hydrogen | $\bar\nu=R_HZ^{2}\!\left(\frac{1}{n_1^{2}}-\frac{1}{n_2^{2}}\right)$, $R_H=1.097\times10^{7}\ \text{m}^{-1}$ |
| Photon energy from wavelength | $E=hc/\lambda$; in eV, $1240/\lambda(\text{nm})$ |
| "Threshold", "work function", "stopping potential" | $h\nu=W_0+K_{max}$, $eV_0=K_{max}$ |
| Radius or speed in an orbit | $r_n=52.9\ \text{pm}\times n^2/Z$, $v_n=2.18\times10^{6}\ \text{m s}^{-1}\times Z/n$ |
| Energy or ionisation of a hydrogen-like ion | $E_n=-13.6\ \text{eV}\times Z^2/n^2$; ionisation $=|E_n|$ |
| Wavelength of a moving particle | $\lambda=h/mv=h/\sqrt{2mK}$ |
| Position and momentum both demanded | $\Delta x\,\Delta p\ge h/4\pi$ |
| Validity of an electron "address" | $n\ge1$, $l\le n-1$, $|m_l|\le l$, $m_s=\pm\frac12$ |
| Nodes of an orbital | angular $=l$, radial $=n-l-1$, total $=n-1$ |
| Filling order and ion losing electrons | $(n+l)$ rule, ties to smaller $n$; ions lose highest $n$ first |
| Anomalous configurations | half-filled/full-filled stability of Cr and Cu |

## Mastery check

Try each before opening the answer. Use $h=6.626\times10^{-34}\ \text{J s}$, $c=3.00\times10^{8}\ \text{m s}^{-1}$ and $R_H=1.097\times10^{7}\ \text{m}^{-1}$ unless a question states otherwise.

### 1. Scaling an X-ray wave

An X-ray has $\lambda=5.0\ \text{nm}$. Find its frequency and photon energy in joules and electron-volts.

<details><summary>Answer and reasoning</summary>

$\nu=c/\lambda=(3.00\times10^{8})/(5.0\times10^{-9})=6.0\times10^{16}\ \text{Hz}$. Energy $E=hc/\lambda=(1.99\times10^{-25})/(5.0\times10^{-9})=3.98\times10^{-17}\ \text{J}$, which is $3.98\times10^{-17}/1.60\times10^{-19}=248\ \text{eV}$. The quick check $E(\text{eV})=1240/\lambda(\text{nm})=1240/5=248$ agrees exactly.
</details>

### 2. Series recognition

Hydrogen emits at $434\ \text{nm}$. Which series does it belong to, and which transition produces it?

<details><summary>Answer and reasoning</summary>

434 nm is violet — inside the visible range, so Balmer ($n_1=2$). Testing $\bar\nu=R_H(\tfrac14-\tfrac1{n_2^2})$: for $n_2=5$,

$$
\bar\nu=1.097\times10^{7}\left(\frac{1}{4}-\frac{1}{25}\right)=1.097\times10^{7}\times0.21=2.30\times10^{6}\ \text{m}^{-1},
$$

so $\lambda=1/\bar\nu=4.34\times10^{-7}\ \text{m}=434\ \text{nm}$. The line is Balmer's $5\to2$ transition, sometimes labelled hydrogen $\gamma$.
</details>

### 3. Photoelectric trio

A metal has a work function of $2.0\ \text{eV}$. Light of $\lambda=350\ \text{nm}$ strikes it. Find the maximum kinetic energy, the stopping potential and the maximum electron speed.

<details><summary>Answer and reasoning</summary>

Photon energy: $1240/350=3.54\ \text{eV}$. So $K_{max}=3.54-2.0=1.54\ \text{eV}=2.47\times10^{-19}\ \text{J}$, and $V_0=K_{max}/e=1.54\ \text{V}$.

For the speed: $\tfrac12mv_{max}^2=2.47\times10^{-19}\ \text{J}$ gives

$$
v_{max}=\sqrt{\frac{2(2.47\times10^{-19})}{9.11\times10^{-31}}}=7.4\times10^{5}\ \text{m s}^{-1}.
$$

All three quantities come from one balance — the sign check is that $K_{max}>0$, so the light is indeed above threshold.
</details>

### 4. A hydrogen-like ion's depth

Compute the ionisation energy of Li²⁺ ($Z=3$) from its ground state, and the radius of its innermost orbit.

<details><summary>Answer and reasoning</summary>

$E_1=-13.6Z^2=-13.6\times9=-122.4\ \text{eV}$, so ionisation needs $+122.4\ \text{eV}$ (about $1.18\times10^{4}\ \text{kJ mol}^{-1}$). Radius: $r_1=52.9\ \text{pm}\times n^2/Z=52.9/3=17.6\ \text{pm}$. Note how deeply the $+9$ charge factor binds: the triple-strength nuclear pull gives a tiny orbit and a ninefold-deep well.
</details>

### 5. Matter-wave bookkeeping

An electron has kinetic energy $1.0\times10^{-19}\ \text{J}$. Find its de Broglie wavelength.

<details><summary>Answer and reasoning</summary>

$p=\sqrt{2mK}=\sqrt{2(9.11\times10^{-31})(1.0\times10^{-19})}=4.27\times10^{-25}\ \text{kg m s}^{-1}$, so

$$
\lambda=\frac{h}{p}=\frac{6.626\times10^{-34}}{4.27\times10^{-25}}=1.55\times10^{-9}\ \text{m}=1.55\ \text{nm}.
$$

This wavelength is about a dozen atomic diameters — comfortably measurable by low-energy electron diffraction.
</details>

### 6. Uncertainty excludes the nucleus from electrons

Suppose an electron were confined within a nucleus of diameter $10^{-14}\ \text{m}$. Show that this is impossible.

<details><summary>Answer and reasoning</summary>

$$
\Delta v\ \gtrsim\ \frac{h}{4\pi m\,\Delta x}=\frac{6.626\times10^{-34}}{4\pi\,(9.11\times10^{-31})\,(10^{-14})}=5.8\times10^{9}\ \text{m s}^{-1}.
$$

That exceeds the speed of light — a forbidden speed. No electron can be held inside a nucleus, which is one of the classic conclusions drawn straight from the uncertainty principle. (Do the same estimate for a proton and you get a mere $3\times10^{6}\ \text{m s}^{-1}$ — no contradiction, which is why protons do belong in nuclei.)
</details>

### 7. Subshell anatomy

For the 5f subshell, state the number of orbitals, the angular nodes of one orbital, its radial nodes, and the subshell's electron capacity.

<details><summary>Answer and reasoning</summary>

$l=3$, so orbitals $=2l+1=7$; angular nodes $=l=3$; radial nodes $=n-l-1=5-3-1=1$; total nodes $=4=n-1$. Capacity $=2\times7=14$ electrons. Every 5f orbital has one inner spherical node — nothing in the shape pictures hints at that without the counting rule.
</details>

### 8. Reading a flawed configuration

A student writes potassium ($Z=19$) as $1s^{2}2s^{2}2p^{6}3s^{2}3p^{6}3d^{1}$. The electron count is right, yet something is wrong. What is it, and what is the correct configuration?

<details><summary>Answer and reasoning</summary>

The lone 19th electron belongs in $4s$, not $3d$: by the $(n+l)$ rule, $4s$ ($n+l=4$) is filled before $3d$ ($n+l=5$). Correct: $1s^{2}2s^{2}2p^{6}3s^{2}3p^{6}4s^{1}$, or $[\mathrm{Ar}]4s^{1}$. Potassium's single outer $4s$ electron is the start of the next s-block row.
</details>

### 9. Anomalous pair

Write the ground-state configurations of Cr and Cu, and explain both in one shared sentence.

<details><summary>Answer and reasoning</summary>

$\mathrm{Cr}=[\mathrm{Ar}]3d^{5}4s^{1}$ and $\mathrm{Cu}=[\mathrm{Ar}]3d^{10}4s^{1}$. Shared explanation: one $4s$ electron is promoted into the $3d$ set because an exactly half-filled ($d^5$) or fully filled ($d^{10}$) arrangement gains more in exchange energy and charge symmetry than it loses from the small $4s$–$3d$ energy difference.
</details>

### 10. The meaning of the series limit

Explain, without any new formula, why the wavelength limit of the Balmer series corresponds to a photon of energy exactly $|E_2|=3.4\ \text{eV}$ — and verify numerically.

<details><summary>Answer and reasoning</summary>

The series limit is reached as the incoming electron's level $n_2\to\infty$, i.e. by a **freely falling (ionised) electron being recaptured onto level 2**. The photon then carries away the whole binding energy of level 2, $|E_2|=13.6/4=3.4\ \text{eV}$. Numerically, $\lambda_{\text{limit}}=1240/3.4=365\ \text{nm}$, matching the observed 364.6 nm limit of the Balmer series. The limit is where every series dissolves into the ionisation continuum — a useful check that your level diagram is consistent.
</details>

## Self-check

You are ready for the timed JEE set when you can:

- convert between wavelength, frequency and wavenumber without a slip in powers of ten;
- identify the hydrogen series and $n_1$, $n_2$ of any quoted line;
- solve a photoelectric problem for $W_0$, $K_{max}$, $V_0$ or $v_{max}$ given any two of them;
- scale Bohr radii, speeds and energies with $n$ and $Z$, including ionisation energies of hydrogen-like ions;
- compute a de Broglie wavelength from speed, energy or momentum, and argue why everyday objects show none;
- apply the uncertainty principle to show what cannot be pinned down;
- validate or reject an electron address, count orbitals and nodes, and size up a whole shell;
- fill configurations by $(n+l)$, handle Hund's rule, and explain Cr and Cu without notes.

If any line above is shaky, revisit that module before the timed set — the questions there draw on all of these at speed.
