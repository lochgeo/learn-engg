## Two ways to make a magnet

A magnet can be "permanent" — it keeps its field with no power supply — or "electromagnetic" — its field exists only while current flows. The choice between them is not about strength alone; it is about control, energy, temperature and the material's place on the hard–soft spectrum.

## 1. Permanent magnets

A permanent magnet is made from a **hard** magnetic material (high coercivity $H_c$ and high retentivity $B_r$): steel, alnico, ferrites, or rare-earth alloys such as NdFeB. The manufacturing process magnetises the material to saturation and the domains then stay locked in place, so the field persists without external power.

Advantages: no power, no heat, compact, reliable. Limitations: the field cannot be switched off or varied easily; strong permanent magnets are brittle and can be demagnetised by heat, shock or a strong opposing field; and their field is fixed in magnitude and direction.

The magnetic moment of a permanent magnet can be estimated from its volume $V$ and saturation magnetisation $M_s$:

$$
M_{\text{mag}} = M_s V.
$$

For a bar magnet of length $2l$ and cross-section $A$, with $M_s\approx1.5\times10^6\ \text{A}/\text{m}$ for a good steel, the moment is $M_s(2l)A$.

## 2. Electromagnets

An electromagnet is a coil (solenoid) carrying current, usually with a **soft** iron core to amplify the field. Because soft iron has high permeability and low coercivity, it magnetises strongly while current flows and loses nearly all magnetisation when the current stops. The field is

$$
B = \mu_0\mu_r n I
$$

for a long solenoid with $n$ turns per metre, provided the core is unsaturated. Strength is controlled by:

- current $I$,
- number of turns $N$ (or turns per length $n$),
- core material ($\mu_r$),
- geometry (shorter air gap → stronger field for a given magnetomotive force).

The magnetomotive force is $\mathcal{F}=NI$ (ampere-turns); the field in a magnetic circuit is $\mathcal{F}/\mathcal{R}$, where $\mathcal{R}$ is the reluctance of the path. This is the magnetic analogue of Ohm's law and is the design tool for electromagnets, relays and transformers.

## 3. Comparing the two

| Feature | Permanent magnet | Electromagnet |
| --- | --- | --- |
| Power needed | None | Continuous current |
| Switchable | No (not easily) | Yes |
| Field strength | Fixed | Adjustable |
| Heat | None from magnet | Joule heating in coil |
| Best material | Hard (high $H_c$) | Soft (high $\mu_r$, low $H_c$) |
| Typical use | Speakers, motors, fridge magnets, compasses | Cranes, relays, MRI, maglev, magnetic locks |

## 4. Magnetic shielding

A high-permeability enclosure (soft iron) provides a low-reluctance path for field lines, diverting them around a protected region. This is how sensitive instruments are shielded from stray fields. The effectiveness depends on the material's $\mu_r$ and on the geometry: a closed shell shields better than an open sheet, and DC fields are easier to shield than AC fields, which require laminated cores to reduce eddy-current losses.

## 5. Worked example: lifting electromagnet

A lifting magnet has a coil of $N=500$ turns carrying $I=10\ \text{A}$, with a soft-iron core of relative permeability $\mu_r=1000$ and an air gap of length $g=2.0\ \text{mm}$ (the gap dominates the reluctance). Estimate the flux density in the gap.

The magnetomotive force is

$$
\mathcal{F}=NI=(500)(10)=5.0\times10^3\ \text{A·turns}.
$$

The reluctance of the gap (area $A=0.01\ \text{m}^2$) is

$$
\mathcal{R}_{\text{gap}} = \frac{g}{\mu_0 A}
= \frac{2.0\times10^{-3}}{(4\pi\times10^{-7})(0.01)}
\approx 1.59\times10^5\ \text{A·turns}/\text{Wb}.
$$

The core reluctance is negligible by comparison, so the flux is

$$
\Phi = \frac{\mathcal{F}}{\mathcal{R}_{\text{gap}}}
\approx \frac{5.0\times10^3}{1.59\times10^5}
\approx 3.14\times10^{-2}\ \text{Wb}.
$$

The flux density in the gap is

$$
B = \frac{\Phi}{A} \approx \frac{3.14\times10^{-2}}{0.01}
= 3.14\ \text{T}.
$$

This exceeds the saturation of iron, so in reality the core would saturate and the actual $B$ would be lower (around $1.5$–$2\ \text{T}$); the linear calculation is an upper bound. The corresponding attractive pressure on a steel plate is $B^2/(2\mu_0)\approx3.9\times10^6\ \text{Pa}$ in the linear estimate — enough to lift several tonnes.

Sanity check: industrial lifting magnets operate at a few tesla in the gap and lift tonnes of scrap; the computed order of magnitude is realistic, and the saturation caveat is exactly the kind of limit a designer must check.

## 6. A common mistake

**Using a permanent magnet's material for an electromagnet core, or vice versa.** A hard material in an AC electromagnet would have a huge hysteresis loss and overheat; a soft material used as a permanent magnet would demagnetise under the first shock or temperature rise. Also, do not forget that an electromagnet's field is proportional to $NI$ only in the unsaturated regime — once the core saturates, increasing current adds little field and wastes power.

## Try it yourself

**A.** A solenoid with $n=2000\ \text{turns/m}$ carries $I=1.5\ \text{A}$. Its soft-iron core has $\mu_r=800$ (unsaturated). Find $B$.

<details><summary>Show the reasoning</summary>

$B = \mu_0\mu_r n I = (4\pi\times10^{-7})(800)(2000)(1.5)$.

$4\pi\times10^{-7}\times800 = 1.005\times10^{-3}$; times $3000 = 3.02\ \text{T}$. Again near saturation; for a better estimate use a lower $\mu_r$ or the $B$–$H$ curve.

</details>

**B.** Why does an electromagnet switch off when the current stops, while a permanent magnet does not?

<details><summary>Show the reasoning</summary>

The electromagnet's core is soft iron with low coercivity: without the magnetising field $H$ from the coil, the domains return to a random configuration and $M\approx0$. A permanent magnet's hard material has high coercivity, so the domains stay aligned.

</details>

**C.** A relay needs to pull in quickly and release cleanly when de-energised. Which material property matters most?

<details><summary>Show the reasoning</summary>

Low coercivity (and low remanence), i.e. a soft magnetic material, so the magnetisation follows the current with minimal lag and residual field.

</details>

## Remember

- Permanent magnets: hard materials, high $H_c$, $B_r$; field fixed, no power.
- Electromagnets: soft core + coil; field $B\propto NI$ (unsaturated), switchable.
- Magnetomotive force $\mathcal{F}=NI$; field in a gap set by gap reluctance.
- Always check saturation: linear formulas are upper bounds.
- Shielding uses high-$\mu_r$ soft material to divert field lines.
- Match material hardness to application: hard for permanent, soft for switching.

This completes the chapter's core ideas: from the field of a single bar magnet, through Gauss's law and Earth's field, to how matter responds and how magnets are engineered. The review module ties them together.