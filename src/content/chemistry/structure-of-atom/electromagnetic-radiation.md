## Light as the atom's fingerprint

Rutherford's model had left two puzzles, and the second one appears whenever a substance is made to glow. Flick a pinch of table salt into a flame and the flame turns yellow; a neon discharge glows red. These colours are not accidental — they are **line spectra**, and they were for decades the most detailed information chemistry had about the inside of the atom. This module builds the language of waves and spectra you need to read that information; the two modules after it use it to bring the atom's inner machinery into view.

## 1. Wave properties of light

Light is an **electromagnetic wave**: electric and magnetic fields oscillating perpendicular to each other and to the direction of travel. It needs no medium. The quantities that characterise any wave are:

- **Wavelength** $\lambda$ — the distance between successive crests, in metres (or nanometres, $1\ \text{nm}=10^{-9}\ \text{m}$);
- **Frequency** $\nu$ — the number of waves passing a point per second, in hertz ($1\ \text{Hz}=1\ \text{s}^{-1}$);
- **Wavenumber** $\bar\nu$ — waves per unit length, $\bar\nu = 1/\lambda$, quoted in $\text{m}^{-1}$ (spectroscopists prefer $\text{cm}^{-1}$);
- **Speed** — for a wave in vacuum, frequency and wavelength trade off to give the same constant speed:

$$
c=\nu\lambda=3.00\times10^{8}\ \text{m s}^{-1}.
$$

Since $\nu$ and $\lambda$ are inversely related, describing radiation by wavelength and by frequency carries the same information; remember to convert before comparing.

### Worked example 1: red light

Sodium's yellow "D" line has $\lambda=589\ \text{nm}$. Its frequency is

$$
\nu=\frac{c}{\lambda}=\frac{3.00\times10^{8}\ \text{m s}^{-1}}{589\times10^{-9}\ \text{m}}=5.09\times10^{14}\ \text{Hz}.
$$

Its wavenumber is $1/\lambda=1.70\times10^{6}\ \text{m}^{-1}$. Note the magnitudes: visible frequencies sit in the $10^{14}\ \text{Hz}$ range — far beyond anything mechanical like sound.

## 2. The electromagnetic spectrum

The whole family of electromagnetic radiation spans more than twenty powers of ten in wavelength:

| Region | Wavelength | Typical source |
| --- | --- | --- |
| gamma rays | $<10^{-12}\ \text{m}$ | nuclear processes |
| X-rays | $10^{-12}$–$10^{-9}\ \text{m}$ | electrons decelerated in metal targets |
| ultraviolet | $10^{-9}$–$4\times10^{-7}\ \text{m}$ | very hot bodies, solar radiation |
| visible | $400$–$700\ \text{nm}$ | atomic electronic transitions |
| infrared | $7\times10^{-7}$–$10^{-3}\ \text{m}$ | vibration of molecules, warm objects |
| microwave | $10^{-3}$–$1\ \text{m}$ | molecular rotation, radar |
| radio | $>1\ \text{m}$ | oscillating currents in antennas |

Higher frequency means shorter wavelength — gamma rays and X-rays carry more energy per wave than infrared and radio. (What "energy per wave" means precisely is the subject of the next module: classical physics and quantum theory disagree here, and the classical view fails.)

## 3. Emission and absorption spectra

Two complementary experiments reveal the same information:

- In **emission spectroscopy**, you excite atoms — in a flame, a discharge tube or a spark — and analyse the light they give out. The spectrum is a set of bright lines separated by darkness.
- In **absorption spectroscopy**, you pass white light through a cool gas and look at what is missing. Atoms remove exactly those wavelengths they can later emit, so the spectrum shows dark lines on a continuous background.

The key observation, first stated clearly for elements by Bunsen and Kirchhoff, is that **each element produces its own characteristic set of lines**. Sodium always gives a yellow pair, hydrogen gives a specific sequence of red, blue-green, violet and deep-violet lines. A line spectrum is therefore an atomic fingerprint: it identifies the element even at astronomical distances, and it shows that the atom can exchange energy only in definite amounts. No classical oscillator could produce such a thing — a stretched string, for example, vibrates at all frequencies, not just a few.

## 4. Hydrogen's lines

Hydrogen is the simplest atom — one electron — and its spectrum is correspondingly the cleanest. In the visible region (the part Balmer analysed first, from data collated around 1885) the lines squeeze closer together as the wavelength decreases, converging towards a limit near $364.6\ \text{nm}$.

Johannes Balmer found, purely by pattern-hunting, that the wavelengths fit

$$
\bar\nu = \frac{1}{\lambda}=R_H\left(\frac{1}{4}-\frac{1}{n^{2}}\right),\qquad n=3,4,5,\ldots
$$

where $R_H$, the **Rydberg constant**, is $1.097\times10^{7}\ \text{m}^{-1}$.

Later, other series were found in other regions of the spectrum, all fitting the generalised form Lyman guessed and Rydberg completed:

$$
\bar\nu = R_H\left(\frac{1}{n_1^{2}}-\frac{1}{n_2^{2}}\right),\qquad n_2>n_1.
$$

| Series | Region | $n_1$ | $n_2$ starts at |
| --- | --- | --- | --- |
| Lyman | ultraviolet | 1 | 2 |
| Balmer | visible | 2 | 3 |
| Paschen | infrared | 3 | 4 |
| Brackett | infrared | 4 | 5 |
| Pfund | infrared | 5 | 6 |

The integers $n_1$ and $n_2$ are not decorative: some property of the electron inside hydrogen takes only whole-number values. Explaining *why* the formula works — and predicting new series correctly — is exactly what Bohr's model does in the next module, and it is the single biggest piece of evidence behind it.

<learning-block type="concept" title="Reading the series formula">

Every series is determined only by the **final** value $n_1$. The Lyman series means the light emitted when the electron lands on level 1 from any higher level $n_2$; Balmer means landing on level 2; and so on. Successive lines of a series crowd towards the short-wavelength limit where $1/n_2\to0$:

$$
\bar\nu_{\text{limit}}=\frac{R_H}{n_1^{2}}.
$$

For the Lyman series this gives $\bar\nu=R_H$, a strikingly simple result — the limit of each series is set by the level it lands on.

</learning-block>

### Worked example 2: the first Balmer line

The electron drops from $n=3$ to $n=2$ (Balmer's $\alpha$ line, red). Compute its wavelength.

$$
\bar\nu = 1.097\times10^{7}\left(\frac{1}{2^{2}}-\frac{1}{3^{2}}\right)=1.097\times10^{7}\times\frac{5}{36}=1.52\times10^{6}\ \text{m}^{-1},
$$

$$
\lambda=\frac{1}{\bar\nu}=6.56\times10^{-7}\ \text{m}=656\ \text{nm}.
$$

Sanity check: 656 nm is deep red — exactly the most prominent line in a hydrogen discharge tube, and the one Balmer's formula was first fitted to.

<learning-block type="mistake" title="Spectrum mix-ups">

- **Confusing absorption with emission colours.** A gas adds a missing dark line in absorption and a bright line in emission for the same transition — the wavelengths are identical.
- **Swapping $n_1$ and $n_2$.** $n_1$ is where the electron *arrives*; it alone fixes which series and which region of the spectrum.
- **Assuming a continuous spectrum from an atom in a discharge tube.** Molecules and hot solids give continua; isolated atoms give lines.
- **Treating the Balmer formula as the whole story.** It is only the $n_1=2$ case of the general Rydberg formula.

</learning-block>

## Try it yourself

**A.** A frequency of $4.28\times10^{14}\ \text{Hz}$ lies in the visible. Find its wavelength in nanometres.

<details><summary>Show the reasoning</summary>

$\lambda=c/\nu=(3.00\times10^{8})/(4.28\times10^{14})=7.01\times10^{-7}\ \text{m}=701\ \text{nm}$ — deep red, at the edge of visibility.
</details>

**B.** Which transition corresponds to the second line of the Lyman series, and in what region does it lie?

<details><summary>Show the reasoning</summary>

Lyman series means arrival at $n_1=1$; the *second* line means the next available starting level, $n_2=3$. So the transition is $3\to1$, with $\bar\nu=R_H(1-\tfrac19)=9.75\times10^{6}\ \text{m}^{-1}$, giving $\lambda=103\ \text{nm}$ — firmly ultraviolet.
</details>

**C.** Why do hot solids, such as a lamp filament, give a continuous spectrum while atoms in a discharge tube give lines?

<details><summary>Show the reasoning</summary>

In a solid, atoms are packed together and their energy levels broaden into overlapping bands, so energy of any size can be exchanged — a continuum. Isolated gas atoms have sharply separated levels and can exchange only the energy gaps between them, producing lines. The difference in surroundings, not the temperature, decides the kind of spectrum.
</details>

## Remember

- Light is characterised by $c = \nu\lambda = 3.00\times10^{8}\ \text{m s}^{-1}$; higher frequency always means shorter wavelength.
- The electromagnetic spectrum runs, by increasing frequency, radio → microwave → infrared → visible → ultraviolet → X-ray → gamma ray.
- Isolated atoms emit and absorb the same discrete set of wavelengths; each element's set is unique.
- All hydrogen lines fit $\bar\nu=R_H\!\left(\dfrac{1}{n_1^2}-\dfrac{1}{n_2^2}\right)$ with $R_H=1.097\times10^{7}\ \text{m}^{-1}$: Lyman lands on 1 (UV), Balmer on 2 (visible), Paschen on 3 (IR).
- The formula is accurate but unexplained — the classical picture of a glowing atom cannot justify it, and resolving that tension is the task of the next two modules.
