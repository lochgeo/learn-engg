## The junction that makes one-way current

Join a piece of p-type semiconductor to a piece of n-type and something remarkable happens at the interface: a thin region becomes depleted of mobile carriers and develops a built-in electric field. That region is the **p–n junction**, and it is the physical reason a diode conducts in one direction and blocks the other.

## 1. Formation of the junction

Before contact, the p-side has many holes and few electrons; the n-side has many electrons and few holes. On contact, diffusion drives majority carriers across the boundary: holes from p to n, electrons from n to p. Where they meet they recombine, exposing the fixed donor ions on the n-side (positive) and acceptor ions on the p-side (negative). The resulting thin layer with no mobile carriers is the **depletion region**, and the separated charge creates an electric field pointing from n to p.

The field opposes further diffusion. Equilibrium is reached when the drift current due to the field balances the diffusion current. The potential difference across the depletion region is the **barrier potential** (or built-in potential) $V_0$:

$$
eV_0 \approx E_g \text{ (roughly)},\qquad V_0\approx0.7\ \text{V for Si},\ 0.3\ \text{V for Ge}.
$$

A more precise form uses the carrier densities: $V_0=(k_BT/e)\ln(N_AN_D/n_i^2)$.

## 2. Forward bias

Connect the p-side to the positive terminal and the n-side to the negative terminal. The applied voltage opposes the built-in field, narrowing the depletion region and lowering the barrier. Once the applied voltage exceeds $V_0$ (about $0.6$–$0.7\ \text{V}$ for silicon), majority carriers flood across and a large current flows. The current rises roughly exponentially:

$$
I = I_s\left(e^{V/V_T}-1\right),\qquad V_T=\frac{k_BT}{e}\approx0.026\ \text{V at }300\ \text{K},
$$

where $I_s$ is the small **reverse saturation current**. $V_T$ is the thermal voltage.

## 3. Reverse bias

Connect the p-side to the negative terminal. The applied field adds to the built-in field, widening the depletion region and raising the barrier. Majority carriers are pulled away from the junction; only the tiny minority-carrier current $I_s$ flows, essentially independent of voltage. The diode is "off".

If the reverse voltage is large enough, **breakdown** occurs: the field accelerates carriers to energies that ionise lattice atoms (avalanche) or tunnel across the narrow depletion region (Zener). Either way the reverse current rises sharply. Diodes are rated by their breakdown voltage.

## 4. The diode as a device

A p–n junction is a **diode**: a two-terminal device that passes current easily in one direction (forward) and blocks it in the other (reverse). Its symbol is an arrow (the anode, p-side) pointing toward a bar (the cathode, n-side): conventional current flows in the arrow's direction. Real diodes have a small forward resistance, a large reverse resistance, and a maximum reverse voltage.

## 5. Worked example: forward current

A silicon diode has $I_s=10^{-12}\ \text{A}$ at $300\ \text{K}$. Find the current at a forward bias of $0.60\ \text{V}$.

$$
V_T=\frac{k_BT}{e}=0.0259\ \text{V},\qquad
\frac{V}{V_T}=\frac{0.60}{0.0259}=23.2.
$$

$$
I = 10^{-12}\left(e^{23.2}-1\right)
   \approx 10^{-12}\times(1.2\times10^{10})
   \approx 1.2\times10^{-2}\ \text{A}=12\ \text{mA}.
$$

**Sanity check:** at $V=0.70\ \text{V}$ the exponent is $27.0$ and $I\approx1.2\ \text{A}$, which is unrealistically large for a small diode — this shows that the ideal equation ignores series resistance, which limits real current. The exponential model is valid only for small forward currents.

## 6. A common mistake

**Ignoring the barrier potential when estimating "on" voltage.** A diode does not conduct appreciably until the applied forward voltage exceeds $V_0$; below that, the current is tiny. Treating a diode as a perfect conductor for any $V>0$ (or as an open circuit for any $V<0$ including breakdown) gives wrong circuit answers. A second error is using the ideal diode equation in reverse breakdown, where it no longer applies.

## Try it yourself

**A.** Explain why the depletion region is called "depleted" and what charge sits in it.

<details><summary>Show the reasoning</summary>

It is depleted of mobile carriers (electrons and holes), which have diffused away and recombined. What remains is the fixed, ionised donor and acceptor atoms: positive on the n-side, negative on the p-side.
</details>

**B.** A diode is reverse-biased at $5\ \text{V}$, well below breakdown. What is its current approximately, and what does it depend on?

<details><summary>Show the reasoning</summary>

Approximately $I_s$, the reverse saturation current. It depends mainly on temperature and minority-carrier concentration, not on the applied voltage (until breakdown).
</details>

**C.** Estimate the ratio of forward current at $0.70\ \text{V}$ to that at $0.60\ \text{V}$ for the same diode at the same temperature.

<details><summary>Show the reasoning</summary>

$I(0.70)/I(0.60)\approx e^{(0.70-0.60)/0.0259}=e^{3.86}\approx47$. Each $0.026\ \text{V}$ multiplies the current by $e\approx2.7$.
</details>

## Remember

- A p–n junction forms a depletion region with a built-in barrier $V_0$.
- Forward bias lowers the barrier and gives exponential current; reverse bias raises it and gives only $I_s$.
- Thermal voltage $V_T=k_BT/e\approx0.026\ \text{V}$ at $300\ \text{K}$.
- Breakdown occurs at sufficiently large reverse voltage.
- The diode symbol: anode (p) is the arrow, cathode (n) is the bar.

The next module uses the one-way property of the diode to convert alternating current into direct current, and introduces diodes built for special jobs.