## A fading signature

A blacksmith's iron and a campfire's embers tell more than "hot". Dull red, cherry red, orange, blinding white: as temperature rises, the emission brightens enormously — the fourth power at work — and its **colour** shifts. Two laws pin this story down exactly: **Wien's law** for where the glow peaks, and **Stefan–Boltzmann** for how much energy leaves. Then a third, gentler law — **Newton's law of cooling** — takes over for small temperature differences, and turns out to be the linear sibling of the same Stefan law.

## 1. Stefan–Boltzmann: the total emission

The radiated power grows as the fourth power of the absolute temperature:

$$P = e\,\sigma A\,T^{4}, \qquad \sigma = 5.67\times10^{-8}\ \text{W}\,\text{m}^{-2}\,\text{K}^{-4}.$$

Doubling $T$ multiplies $P$ by $\boldsymbol{16}$; the Sun's $5800\ \text{K}$ photosphere against a $300\ \text{K}$ background is a ratio near $(19)^4 \approx 130\,000$. Between two temperatures, the *net* loss is the difference of fourth powers against the surroundings:

$$P_{net} = e\sigma A\,(T^{4} - T_0^{4}).$$

For small differences this is algebraically trimmable. Binomial: $T = T_0 + \Delta T$ gives

$$T^{4} - T_0^{4} \approx 4T_0^{3}\,\Delta T \quad\Rightarrow\quad P_{net} \approx 4e\sigma A\,T_0^{3}\,(\theta - \theta_0).$$

Mark what happened: a ferocious $T^4$ law has quietly become a **law linear in the temperature difference**. That approximation is the opening through which Newton's cooling law enters.

## 2. Wien: the colour tells the temperature

The power radiated as function of wavelength is a distribution that rises and falls, peaking at a wavelength fixed by Wien's displacement law:

$$\lambda_m T = b = 2.9\times10^{-3}\ \text{m·K}.$$

| Radiator | $T$ | $\lambda_m = b/T$ | In words |
| --- | --- | --- | --- |
| Sun's surface | $\approx 5800\ \text{K}$ | $\approx 500\ \text{nm}$ | visible, green-yellow |
| Incandescent filament | $2700\ \text{K}$ | $\approx 1070\ \text{nm}$ | infrared-leaning dull red |
| Human skin | $310\ \text{K}$ | $\approx 9.4\ \mu\text{m}$ | deep infrared |

The law is called *displacement* because increasing temperature displaces the peak to shorter wavelengths — the iron going from dull red through orange to white haze as every part of the spectrum brightens but the short waves gain fastest. Bodies near room temperature radiate entirely in the infrared, invisible to the eye but not to thermal cameras and non-contact forehead/ear thermometers, both of which are Wien's law in a portable box.

## 3. Newton's law of cooling

Empirically, a small warm body left in a big room cools at a rate proportional to its **excess temperature** over the surroundings:

$$-\frac{d\theta}{dt} = k(\theta - \theta_0),$$

where $\theta$ is the body's temperature, $\theta_0$ the (constant) surroundings, and $k^{-1}$ has units of time. This is not a new principle; it is what linearising Stefan's law and adding conduction and convection deliver. Radiation contributes $4e\sigma A T_0^3\Delta T$ (as derived above), conduction and convection each carry roughly $hA\,\Delta T$; add them and the total loss is proportional to $\Delta T$, which is all the empirical law asserts.

**Worked example.** Coffee at $90^\circ\text{C}$ sits in a $20^\circ\text{C}$ room and falls to $70^\circ\text{C}$ in $10\ \text{min}$. When does it reach $30^\circ\text{C}$?

The solvable form follows on integrating the law — the **excess temperature decays exponentially**:

$$\theta - \theta_0 = (\theta_{in} - \theta_0)\,e^{-kt}.$$

Data: excess falls $70 \to 50$ in $10$ min, so $e^{-10k} = 50/70 = 5/7$, giving $k = \ln(7/5)/10 \approx 0.0337\ \text{min}^{-1}$.

Reaching $30^\circ\text{C}$ means excess $10$, i.e. $e^{-kt} = 10/70 = 1/7$:

$$t = \frac{\ln 7}{k} = \frac{1.95}{0.0337} \approx 58\ \text{min}.$$

Sanity checks: the later stretch should take *longer* than the first, because the drive (the excess) keeps shrinking: total time over first-leg time is $\ln 7 / \ln(7/5) \approx 5.8$, so $58$ min total is consistent. A careless linear extrapolation would promise $30$ min and be wrong. Smaller yet slower is the whole character of exponential decay.

A shortcut used in examinations: pick off ratios at equal times rather than computing $k$. If a body cools from $80^\circ\text{C}$ to $60^\circ\text{C}$ in $20$ min with surroundings at $20^\circ\text{C}$, its excess went $60 \to 40$, multiplied by $2/3$ in $20$ min. Another $20$ min multiplies by $2/3$ again: excess $40 \to 26.7$, so $\theta = 46.7^\circ\text{C}$.

<learning-block type="mistake" title="Plugging temperature where the law wants excess">

Newton's law speaks only of the **difference** $\theta - \theta_0$; the constant temperature $\theta_0$ never belongs inside the exponential. Students who write $\theta = \theta_{in}e^{-kt}$, or who apply the law to a red-hot body in frigid surroundings, produce numbers that look plausible and are wrong. Two guards: (i) always form the excess before any computation; (ii) check applicability — the law presumes $\Delta T$ small compared to absolute temperature, so it governs coffee, not blast furnaces.

</learning-block>

## 4. Three laws in harness: applications

- **Stellar thermometry**: from a star's colour, Wien gives its surface temperature; Stefan with its luminosity gives its size. Colour, temperature and radius close the triangle.
- **Thermal imaging and IR thermometry**: skin, machinery and electrical contacts radiate mid-infrared near $10\ \mu\text{m}$ (Wien, $T\approx300\ \text{K}$); detector arrays read it out as a temperature.
- **Calorimetry corrections**: no calorimeter is perfectly insulated, so real experiments extract the true mixing temperature by extrapolating the cooling tail backwards using Newton's law — this is why the law belongs in this chapter at all.
- **Design arithmetic**: radiators, absorber plates and refrigeration fins are rated by combining $P_{net} = e\sigma A(T^4-T_0^4)$ with forced-convection $hA\Delta T$ terms.

## 5. When each law applies

| Situation | Law to reach for |
| --- | --- |
| Absolute power, or net loss to cooler surroundings | Stefan–Boltzmann, $e\sigma A(T^4 - T_0^4)$ |
| Where the emitted light peaks | Wien, $\lambda_m T = b$ |
| Small $\Delta T$ over time, finding the cooling curve | Newton, exponential in $(\theta - \theta_0)$ |
| Colour of an ember vs a filament | Wien again — everything thermal radiates |

<learning-block type="check" title="A compact consistency check">

The three laws grade the same physical picture in three regimes. Large $T$, asking for watts: Stefan. Any $T$, asking for colour: Wien. Small excess sitting in a room, asking for the future: Newton's linear (exponential-in-time) version. Needing an answer at each station is the chapter's own exit test.

</learning-block>

## Try it yourself

**A.** Find the peak wavelength radiated from human skin at $310\ \text{K}$, and comment on its colour.

<details><summary>Show the reasoning</summary>

$\lambda_m = b/T = (2.9\times10^{-3})/310 = 9.4\times10^{-6}\ \text{m} = 9.4\ \mu\text{m}$ — mid-infrared, far beyond the visible. We glow in IR: thermal cameras see us by this light. Note the warm-red glow of embers by comparison sits at visible-plus-near-IR because the source is a few thousand kelvin, not $310$.
</details>

**B.** A body cools from $80^\circ\text{C}$ to $60^\circ\text{C}$ in $20\ \text{min}$ in a room at $20^\circ\text{C}$. What will its temperature be after another $20\ \text{min}$?

<details><summary>Show the reasoning</summary>

Excess: $60 \to 40$, ratio $2/3$ per $20\ \text{min}$. Next interval: $40 \times 2/3 = 26.7$ excess $= 46.7^\circ\text{C}$. Shortcut accepted because the law's own solution is exponential in the excess — equal time steps multiply the excess by equal factors.
</details>

**C.** How many times more total power does a blackbody radiate at $2900\ \text{K}$ than at $300\ \text{K}$? Which physical story does that ratio belong to?

<details><summary>Show the reasoning</summary>

Stefan: ratio $= (2900/300)^{4} \approx (9.67)^{4} \approx 8.7\times10^{3}$, roughly ten thousand. This is why even a dull-red $\sim 1000\ \text{K}$ stove bar can scorch across a metre while a $300\ \text{K}$ wall you can safely touch all day — despite both constantly radiating.
</details>

## Remember

- Emission rises like $T^{4}$ (Stefan–Boltzmann) and the net exchange is the difference of fourth powers: $e\sigma A(T^4 - T_0^4)$.
- The wavelength of peak emission $\lambda_m$ obeys $\lambda_m T = 2.9\times10^{-3}\ \text{m·K}$: hotter means bluer (shorter peak).
- For $\Delta T \ll T$, $T^4$ flattens into proportionality to $\Delta T$: that is Newton's law, $-d\theta/dt = k(\theta-\theta_0)$.
- Its exact solution is an exponential decay of the **excess**; equal time intervals multiply the excess by a constant factor — the exam shortcut.
- Newton's law needs small difference and gentle conditions; it is calibration and correction arithmetic for calorimetry, not a theory of furnaces. Applications chain together: colour (Wien) $\to$ temperature (Wien back) $\to$ power (Stefan) $\to$ cooling prediction (Newton).

The chapter now holds every tool: temperature and its scales, expansion, energy accounting in mixtures, phase changes, the three carriers of heat, and the three laws of emission and cooling. Two closing modules consolidate them: a mixed practice set, then a timed JEE-style paper.
