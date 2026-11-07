## Temperature is an energy measurement

Weigh a molecule and clock its speed and you can predict how hot the gas is. The linking statement is the most important sentence in kinetic theory: **the average translational kinetic energy of a molecule is proportional to the absolute temperature**, and the proportionality is the same for every gas. Temperature is not "heatstuff"; it is a reading off the distribution of molecular energies. This lesson makes that precise, works out the characteristic speeds that follow, and sketches how the speeds are distributed.

## 1. From the pressure formula to temperature

The pressure lesson ended with two expressions for the same gas. Setting them equal, $pV=\frac13Nm v_{rms}^2$ and $pV=Nk_BT$:

$$
\tfrac12m v_{rms}^2=\tfrac32k_BT.
$$

Read this as a statement about averages: the average translational kinetic energy of a **single molecule** is $\frac32k_BT$, regardless of the molecule's identity. A nitrogen molecule at $300\ \text{K}$ and a helium atom at $300\ \text{K}$ tie for the same translational energy content per particle; the lighter atom simply moves faster to arrive at the same $\frac12mv^2$. The kelvin scale now has a mechanical meaning: one kelvin corresponds to an energy change of $\frac32k_B\approx2.07\times10^{-23}\ \text{J}$ per molecule in translation.

### Worked example: energy per molecule, energy per mole

At $300\ \text{K}$, one molecule's average translational kinetic energy is

$$
\langle K\rangle=\tfrac32k_BT=\tfrac32(1.38\times10^{-23})(300)=6.2\times10^{-21}\ \text{J}.
$$

Per mole, multiply by $N_A$:

$$
\langle K\rangle_{\text{mol}}=\tfrac32RT=\tfrac32(8.314)(300)=3.74\times10^{3}\ \text{J}.
$$

These figures are tiny per molecule and respectable per mole — the mismatch is exactly what a mole of $6\times10^{23}$ is for. Sanity check: $k_BT$ is the right magnitude ($1.38\times10^{-23}\times300\approx4\times10^{-21}\ \text{J}$), and our answer is $1.5$ times it.

## 2. Three speeds, one distribution

"Typical speed" is ambiguous, because speeds in a gas are not all alike. Three conventions are in use, and each pairs with a different question:

| Speed | Definition | Ask it when the question mentions |
| --- | --- | --- |
| most probable, $v_{mp}$ | the peak of the speed distribution | where the distribution peaks |
| mean, $\langle v\rangle$ | arithmetic average of all $N$ speeds | rates of travel: collision frequency, leaks, effusion |
| root-mean-square, $v_{rms}$ | square root of the average of $v^2$ | energy: kinetic energy, pressure, temperature |

For a Maxwellian gas the formulas are

$$
v_{mp}=\sqrt{\frac{2k_BT}{m}}=\sqrt{\frac{2RT}{M}},
\qquad
\langle v\rangle=\sqrt{\frac{8k_BT}{\pi m}}=\sqrt{\frac{8RT}{\pi M}},
\qquad
v_{rms}=\sqrt{\frac{3k_BT}{m}}=\sqrt{\frac{3RT}{M}}.
$$

They carry a fixed ratio:

$$
v_{mp}:\langle v\rangle:v_{rms}=1:1.128:1.225=\sqrt2:\sqrt{8/\pi}:\sqrt3.
$$

All three grow as $\sqrt{T}$ at a fixed gas and as $1/\sqrt{M}$ at a fixed temperature. Which is "the" molecular speed is not physics but convenience: quoting $v_{rms}$ lets you recover energy immediately, quoting $\langle v\rangle$ lets you count passages per second, and quoting $v_{mp}$ matches the peak you would see on a plot.

## 3. The Maxwell distribution, in outline

James Clerk Maxwell showed that in equilibrium the speeds obey a fixed, one-hump curve:

- a molecule picked at random is most likely to be near $v_{mp}$, rarely near zero or far in the tail;
- the curve is **not** symmetric: it falls away steeply on the slow side and more gently on the fast side, so the mean sits above the peak and the rms above the mean;
- the area under the curve is fixed by $N$, so at constant $N$ raising $T$ lowers the peak and pushes it rightward; the tail to high speeds fattens.

Two consequences matter for chemistry and physics questions alike:

- **Chemical reaction rates** rise quickly with temperature because the reactant molecules that react come from the fast tail of the distribution, and a modest $T$ rise fattens and stretches that tail considerably.
- **Escape of atmospheres**: planetary gravity confines a molecule only if its speed stays below escape speed; the fastest members of the tail are the ones that leak, which is why very light molecules vanish slowly but surely from thin, hot upper atmospheres.

The lesson does not need the curve's equation — only its shape, ratio table and the $\sqrt{T}$, $1/\sqrt{M}$ scalings.

## 4. Calculating with the speeds

At $300\ \text{K}$ the values tell a story by themselves:

| Gas | $M$ ($10^{-3}\ \text{kg/mol}$) | $v_{rms}$ (m/s) | $\langle v\rangle$ (m/s) |
| --- | --- | --- | --- |
| hydrogen | 2.0 | 1930 | 1770 |
| helium | 4.0 | 1370 | 1250 |
| nitrogen | 28.0 | 517 | 476 |
| oxygen | 32.0 | 484 | 445 |

These are speeds of hundreds of metres per second — over a thousand kilometres per hour — and, notably, of the same order as the speed of sound in each gas. That is no coincidence: sound is carried by molecules nudging their neighbours, so its speed must be tied to the molecular pace.

**Temperature crossing trick.** At what temperature does hydrogen's rms speed equal oxygen's rms at $300\ \text{K}$? Speeds are equal when $\dfrac{T_{\text{H}_2}}{2}=\dfrac{T_{\text{O}_2}}{32}$, so

$$
T_{\text{H}_2}=300\times\frac{2}{32}=18.75\ \text{K}.
$$

The lighter gas needs a far lower temperature to match a heavier gas's pace — the trick appears constantly in JEE questions.

<learning-block type="check" title="Mixing two gases changes the tally, not the speeds">

In an equilibrium mixture of two gases at the same $T$, each gas keeps its own $v_{rms}=\sqrt{3k_BT/m}$ — a common temperature fixes each species' common energy per molecule. Adding a second gas does not slow the first one down: what changes is how the molecules are shared among the speeds of the combined distribution, not the set of speeds each species could have.

</learning-block>

<learning-block type="mistake" title="Grams in the speed formula">

$v_{rms}=\sqrt{3RT/M}$ demands $M$ in **kilograms per mole**: $M=32\times10^{-3}$ for oxygen, not $32$. Using $32$ produces speeds $\sqrt{1000}\approx32$ times too small, and the error often survives the dimensional check because $\text{J/mol}$ and $\text{g/mol}$ look alike. Memorise: always convert the molar mass before the square root.

</learning-block>

## Try it yourself

**1.** Compute the mean speed of nitrogen molecules at $300\ \text{K}$ ($M=28\times10^{-3}\ \text{kg/mol}$).

<details><summary>Show the reasoning</summary>

$$
\langle v\rangle=\sqrt{\frac{8RT}{\pi M}}=\sqrt{\frac{8(8.314)(300)}{\pi(0.028)}}=\sqrt{2.26\times10^{5}}\approx475\ \text{m/s}.
$$

Cross-check against the ratio rule: $v_{rms}=517\ \text{m/s}$ and $\langle v\rangle=0.921\,v_{rms}\approx476\ \text{m/s}$ — consistent.
</details>

**2.** The absolute temperature of an ideal gas rises from $T$ to $4T$. By what factor does each of $v_{mp}$, $\langle v\rangle$ and $v_{rms}$ multiply?

<details><summary>Show the reasoning</summary>

All three are proportional to $\sqrt{T}$, so each grows by $\sqrt4=2$. Note the answer is the same for all three speeds; the constant ratios never change, only the overall scale.
</details>

**3.** At the same temperature, compare the rms speeds of methane ($M=16$) and oxygen ($M=32$).

<details><summary>Show the reasoning</summary>

$$
\frac{v_{\text{CH}_4}}{v_{\text{O}_2}}=\sqrt{\frac{M_{\text{O}_2}}{M_{\text{CH}_4}}}=\sqrt{\frac{32}{16}}=\sqrt2.
$$

Methane molecules outrun oxygen molecules by a factor of about $1.41$ — lighter gas, faster pace, identical energy per molecule.
</details>

## Remember

- One molecule's average translational kinetic energy is $\frac32k_BT$ — temperature is a per-molecule energy scale shared by all gases.
- Speeds scale as $\sqrt{T}$ and drop as $1/\sqrt{M}$; the ratio $v_{mp}:\langle v\rangle:v_{rms}=1:1.128:1.225$ is fixed.
- $v_{rms}$ answers energy questions, $\langle v\rangle$ answers rate questions, $v_{mp}$ marks the distribution's peak.
- The Maxwell distribution explains why reaction rates and atmospheric escape respond sharply to temperature: the high-speed tail fattens.
- Put molar masses in kg/mol before taking the square root.
- Next lesson asks where the molecule's energy goes besides straight-line travel — spin and vibration — and why gases differ so widely in specific heat as a result.
