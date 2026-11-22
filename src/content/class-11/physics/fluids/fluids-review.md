## Your study plan for today

Mechanical Properties of Fluids is one chapter, four worlds: fluids at rest, fluids in motion, fluids that resist, and fluid surfaces. A focused first pass takes about **2 hours 30 minutes**, plus this check:

1. **Pressure in a fluid (Pascal's law, hydraulics)** — 18 min
2. **Pressure with depth (barometers, manometers)** — 20 min
3. **Buoyancy and flotation (Archimedes, metacentre)** — 22 min
4. **Flow and continuity (streamlines, $Q=Av$, Reynolds)** — 20 min
5. **Bernoulli's equation (venturi, Torricelli, lift)** — 24 min
6. **Viscosity and terminal velocity (Stokes, Poiseuille)** — 22 min
7. **Surface tension and capillarity (drops, Jurin)** — 22 min
8. **This mastery check** — 25 min

After each module, close the notes and rebuild the key derivation from a blank page: $p=p_0+\rho gh$, the continuity equation, Bernoulli from work–energy, $v_t=2r^2(\rho-\sigma)g/9\eta$, and Jurin's law. Derivations are the reliable route to the applications.

After this, take the optional **JEE Main timed practice** module: a 50-minute mixed paper whose value is choosing the right tool under time pressure.

## First choose the tool

| Clue in the question | Start with |
| --- | --- |
| Force spread over an area, pistons | $p=F/A$; Pascal: $F_1/A_1=F_2/A_2$ |
| Depth, column of liquid, “how deep” | $p=p_0+\rho gh$; say gauge or absolute |
| Manometer heights given | $p_{\text{gauge}}=\rho gh$ from the level *difference* |
| Body immersed or floating | $F_B=\rho_{\text{fluid}}gV_{\text{disp}}$; floats when $F_B=W$ |
| Fraction submerged quoted | $= \rho_{\text{body}}/\rho_{\text{fluid}}$ |
| Apparent weight in fluid | $W_{\text{app}}=(\rho_{\text{body}}-\rho_{\text{fluid}})gV_{\text{total}}$ |
| Speeds in pipes of different widths | Continuity: $A_1v_1=A_2v_2$ ($r\to A$ with $\pi r^2$) |
| Pressure and speed trade-off, level | Bernoulli: $\Delta p=\tfrac12\rho(v_2^2-v_1^2)$ |
| Tank with a hole, depth $h$ below surface | Torricelli: $v=\sqrt{2gh}$ |
| Sphere falling (or rising) in a fluid | Stokes + balance: $v_t=2r^2(\rho-\sigma)g/9\eta$ |
| Pressure drop along a capillary | Poiseuille: $Q=\pi\,\Delta p\,r^4/8\eta L$ |
| Drop, bubble, film | $\Delta p=2S/R$ (one surface) or $4S/R$ (two) |
| Capillary tube, wetting or not | Jurin: $h=2S\cos\theta/r\rho g$ |

## Mastery check

Try each without peeking. Use $g=10\ \mathrm{m/s^2}$, $\rho_{\text{water}}=1000\ \mathrm{kg/m^3}$ and $p_{\text{atm}}=1.0\times10^5\ \mathrm{Pa}$ unless a question states otherwise.

### 1. A hydraulic press in words and numbers

A press has an input piston of area $5.0\ \mathrm{cm^2}$ and an output piston of area $200\ \mathrm{cm^2}$. (a) What input force keeps $320\ \mathrm{kg}$ supported? (b) If the input piston is pushed down $40\ \mathrm{cm}$, how far does the load rise?

<details><summary>Answer and reasoning</summary>

Force ratio $=A_{\text{out}}/A_{\text{in}}=200/5.0=40$. Load needed: $320\times10=3200\ \mathrm{N}$, so input $F=3200/40=80\ \mathrm{N}$. Displacement ratio is the inverse: $d_{\text{out}}=40/40=1.0\ \mathrm{cm}$. Work check: $80\times0.40=32\ \mathrm{J}$ in; $3200\times0.010=32\ \mathrm{J}$ out — Pascal multiplies force and divides distance, never creating energy.
</details>

### 2. Gauge or absolute, please

(a) Find the gauge pressure $8.0\ \mathrm{m}$ below the sea surface (density $1030\ \mathrm{kg/m^3}$). (b) The absolute pressure there.

<details><summary>Answer and reasoning</summary>

(a) $p_{\text{gauge}}=\rho gh=1030\times10\times8.0=8.2\times10^4\ \mathrm{Pa}$. (b) $p_{\text{abs}}=8.2\times10^4+1.0\times10^5=1.82\times10^5\ \mathrm{Pa}$. A question with no qualifier almost always wants the pressure *difference from atmosphere* in engineering contexts (gauge), but physics problems usually want absolute — read the sentence again before answering.
</details>

### 3. Ice in a full glass

An ice cube floats in a glass brimful of water. Does the water overflow as the ice melts?

<details><summary>Answer and reasoning</summary>

No. Floating ice displaces exactly its own *mass* of water (buoyancy balances weight). After melting, that same mass becomes water and occupies exactly the displaced volume — the level stays put. The melt adds volume where the ice's *above-water* part used to be, filling its own "punch bowl". (Ice floating in a denser liquid, or ice containing grit, are the variants where the level can rise.)
</details>

### 4. Boat, stone, bathtub logic

A rowboat floats in a pond with a heavy stone aboard. The stone is thrown overboard and sinks. Does the pond's level rise, fall, or stay the same?

<details><summary>Answer and reasoning</summary>

The level **falls**. Afloat, the stone (via the boat) displaced water equal to its own *weight*: $V_{\text{disp}}=m_s/\rho_w$. Sunken, it displaces only its own *volume*: $V=m_s/\rho_s$. Since $\rho_s>\rho_w$, $m_s/\rho_s<m_s/\rho_w$ — less water is displaced after the throw, so the level drops a little. Weigh-displacement versus volume-displacement is the whole trick.
</details>

### 5. Merging streams

Two pipes, each of cross-section $4.0\ \mathrm{cm^2}$, carry water at $2.5\ \mathrm{m/s}$ and $1.5\ \mathrm{m/s}$. They join smoothly into one pipe of area $2.0\ \mathrm{cm^2}$. Find the exit speed.

<details><summary>Answer and reasoning</summary>

$Q_1=4.0\times10^{-4}\times2.5=1.0\times10^{-3}\ \mathrm{m^3/s}$; $Q_2=4.0\times10^{-4}\times1.5=6.0\times10^{-4}\ \mathrm{m^3/s}$. Total $Q=1.6\times10^{-3}\ \mathrm{m^3/s}$. Exit: $v=Q/A=1.6\times10^{-3}/(2.0\times10^{-4})=8.0\ \mathrm{m/s}$. Flow rates add; continuity then fixes the speed.
</details>

### 6. Efflux and range

A small hole sits $4.0\ \mathrm{m}$ below the surface of a large open tank. (a) Find the efflux speed. (b) If the hole is $1.0\ \mathrm{m}$ above the ground and the jet fires horizontally, where does it land?

<details><summary>Answer and reasoning</summary>

(a) Torricelli: $v=\sqrt{2gh}=\sqrt{2\times10\times4.0}=8.9\ \mathrm{m/s}$. (b) Fall time from $1.0\ \mathrm{m}$: $t=\sqrt{2\times1.0/10}=0.447\ \mathrm{s}$. Range $=vt=8.9\times0.447\approx4.0\ \mathrm{m}$. The jet behaves exactly like a body launched horizontally at that speed — fluid leaving a tank is projectile motion in disguise.
</details>

### 7. Venturi arithmetic

Water flows through a level pipe of area $5.0\ \mathrm{cm^2}$ at $2.0\ \mathrm{m/s}$; a throat of area $1.0\ \mathrm{cm^2}$ follows. Find the throat speed and the pressure drop between wide section and throat.

<details><summary>Answer and reasoning</summary>

Area ratio $5.0\Rightarrow v_{\text{throat}}=2.0\times5.0=10\ \mathrm{m/s}$. Level Bernoulli: $\Delta p=\tfrac12\rho(v_2^2-v_1^2)=500\times(100-4)=4.8\times10^4\ \mathrm{Pa}=48\ \mathrm{kPa}$ — almost half an atmosphere, which is why venturi sensors are sensitive flow meters.
</details>

### 8. A ball bearing's slow descent

A steel sphere, radius $2.0\ \mathrm{mm}$, density $8000\ \mathrm{kg/m^3}$, falls through oil of density $800\ \mathrm{kg/m^3}$ and viscosity $0.20\ \mathrm{Pa\,s}$. Find the terminal velocity and check that Stokes' law is entitled to describe the fall.

<details><summary>Answer and reasoning</summary>

$$
v_t=\frac{2r^2(\rho-\sigma)g}{9\eta}
=\frac{2\times(2.0\times10^{-3})^2\times7200\times10}{9\times0.20}
=\frac{0.576}{1.8}=0.32\ \mathrm{m/s}.
$$

Check: $Re=\sigma v_t(2r)/\eta=800\times0.32\times0.004/0.20\approx5$ — small enough for laminar drag in practice, and comfortably inside any exam's Stokes regime.
</details>

### 9. Jurin scaling with numbers

Water rises $14.4\ \mathrm{cm}$ in a capillary of radius $0.10\ \mathrm{mm}$ ($S=0.072\ \mathrm{N/m}$, $\theta=0$, $g=10$). (a) Verify that figure. (b) What rise in a tube of radius $0.40\ \mathrm{mm}$?

<details><summary>Answer and reasoning</summary>

(a) $h=2S/(r\rho g)=0.144/(1.0\times10^{-4}\times1000\times10)=0.144\ \mathrm{m}=14.4\ \mathrm{cm}$ ✓. (b) $h\propto1/r$: radius $\times4$ ⇒ height $/4$, so $3.6\ \mathrm{cm}$. Only the radius changed; tension, angle, density and gravity are the same liquid and glass as before.
</details>

### 10. Two bubbles have an argument

Two soap bubbles ($S=0.025\ \mathrm{N/m}$) of radii $2.0\ \mathrm{cm}$ and $4.0\ \mathrm{cm}$ are blown and then connected by a narrow tube. Which way does the air move, and what pressure difference drives it?

<details><summary>Answer and reasoning</summary>

Excess pressures: small bubble $4S/R=4\times0.025/0.020=5.0\ \mathrm{Pa}$; large bubble $4\times0.025/0.040=2.5\ \mathrm{Pa}$. The *smaller* bubble has the higher interior pressure, so air flows from small into large, and the small one shrinks while the big one grows (toward one bubble keeping the sum of the two surface areas' worth of soap film). The drive is $5.0-2.5=2.5\ \mathrm{Pa}$. Whenever $\Delta p\propto1/R$, "small wins" is the direction of flow.
</details>

## Self-check

You are ready for the timed set when you can:

- convert areas and pressures ($\mathrm{cm^2\to m^2}$, $\mathrm{atm\leftrightarrow Pa}$) without slips, and name gauge versus absolute every time;
- derive $p=p_0+\rho gh$ from a force balance and read a U-tube or barometer from it;
- apply Archimedes' principle to submerged, floating, partly-submerged and rising bodies, and compute a density from apparent weight;
- combine continuity with Bernoulli on a level pipe and predict pressures from speed changes;
- set up Torricelli from Bernoulli and answer efflux problems, including projectile-style landing questions;
- obtain terminal velocity from the three-force balance and check Stokes' validity with a Reynolds number;
- compute excess pressure for a drop, a liquid-side bubble and a soap bubble *without* mixing up the factors of 2;
- state Jurin's law, its $1/r$ scaling, and the sign of $h$ when the angle of contact exceeds $90^\circ$.

If any item is shaky, revisit its module and redo its "Try it yourself" questions with the answers hidden.
