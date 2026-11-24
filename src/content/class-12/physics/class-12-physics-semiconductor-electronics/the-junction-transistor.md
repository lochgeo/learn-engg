## Three regions, two junctions, one controlling current

A transistor is a three-terminal semiconductor device whose central idea is **control**: a small current (or voltage) at one terminal regulates a much larger current between the other two. That single idea underlies amplifiers, switches and, ultimately, digital computers.

## 1. Structure

A **bipolar junction transistor (BJT)** is two p–n junctions sharing a thin middle region. There are two types:

- **n-p-n**: n-type emitter, p-type base, n-type collector.
- **p-n-p**: p-type emitter, n-type base, p-type collector.

The **emitter** is heavily doped and injects carriers; the **base** is thin and lightly doped; the **collector** is moderately doped and collects carriers. The three terminals are E, B and C. In diagrams the emitter arrow points in the direction of conventional current for an n-p-n (outward from base) and opposite for a p-n-p.

## 2. Biasing and operation

For active (amplifier) mode:

- Emitter–base junction: **forward** biased.
- Collector–base junction: **reverse** biased.

In an n-p-n, forward bias injects electrons from the emitter into the base. The base is so thin that most electrons diffuse across it without recombining and are swept into the collector by the reverse-biased collector field. Thus a small base current controls a large collector current.

Current conservation at the terminals:

$$
I_E = I_B + I_C.
$$

## 3. Current gains

Two gains are defined:

$$
\alpha = \frac{I_C}{I_E}\quad(\text{common-base gain}),\qquad
\beta = \frac{I_C}{I_B}\quad(\text{common-emitter gain}).
$$

Since $I_B=I_E-I_C$, the two are related:

$$
\beta = \frac{\alpha}{1-\alpha},\qquad \alpha=\frac{\beta}{\beta+1}.
$$

For a good transistor $\alpha\approx0.98$–$0.995$, so $\beta\approx50$–$200$.

## 4. Transistor as an amplifier

A small AC signal applied to the base, superimposed on a DC bias, produces a larger variation in collector current. With a load resistor $R_C$ in the collector circuit, the output voltage variation is

$$
\Delta V_{out} = -\beta\,\Delta I_B\,R_C,
$$

so the voltage gain is roughly $-\beta R_C/R_{in}$. The minus sign indicates phase inversion for a common-emitter stage. The transistor does not create energy; it uses a small input signal to modulate a larger DC supply.

## 5. Transistor as a switch

Driven hard into **saturation** (both junctions forward-biased), the transistor acts as a closed switch with a small voltage drop. Driven to **cut-off** (both junctions reverse-biased), it acts as an open switch. This on/off behaviour is the basis of digital logic and power control.

## 6. Worked example

An n-p-n transistor has $\alpha=0.985$ and emitter current $I_E=5.0\ \text{mA}$. Find $I_C$, $I_B$ and $\beta$.

$$
I_C=\alpha I_E=0.985\times5.0=4.925\ \text{mA}.
$$

$$
I_B=I_E-I_C=5.0-4.925=0.075\ \text{mA}=75\ \mu\text{A}.
$$

$$
\beta=\frac{I_C}{I_B}=\frac{4.925}{0.075}\approx65.7,
\qquad\text{or}\qquad
\beta=\frac{\alpha}{1-\alpha}=\frac{0.985}{0.015}\approx65.7.
$$

**Sanity check:** $I_B$ is about $1.5\%$ of $I_E$, consistent with $\alpha$ near 1. A base current of $75\ \mu\text{A}$ controlling $4.9\ \text{mA}$ is exactly the amplification a transistor provides.

## 7. A common mistake

**Treating the base current as zero.** It is small but essential: without it, the transistor cannot be in active mode and $I_C=\beta I_B$ fails. A second error is confusing $\alpha$ and $\beta$ or using $\beta$ for a common-base circuit. Always identify the configuration (common-base, common-emitter or common-collector) before choosing the gain.

## Try it yourself

**A.** A transistor has $\beta=120$. What is $\alpha$?

<details><summary>Show the reasoning</summary>

$\alpha=\beta/(\beta+1)=120/121\approx0.992$. Very close to 1, as expected for a good transistor.
</details>

**B.** In active mode, why must the collector–base junction be reverse-biased?

<details><summary>Show the reasoning</summary>

The reverse bias creates a strong field that sweeps the injected carriers (electrons in an n-p-n) from the base into the collector, preventing them from recombining in the base and allowing the collector current to be large and controlled.
</details>

**C.** A common-emitter amplifier has $\beta=100$, $R_C=2\ \text{k}\Omega$ and base current change $20\ \mu\text{A}$. Estimate the output voltage change.

<details><summary>Show the reasoning</summary>

$\Delta I_C=\beta\Delta I_B=100\times20\times10^{-6}=2.0\ \text{mA}$. $\Delta V_{out}=-\Delta I_C R_C=-2.0\times10^{-3}\times2000=-4.0\ \text{V}$. The minus sign is phase inversion.
</details>

## Remember

- A BJT has two junctions sharing a thin base; emitter injects, collector collects.
- Active mode: emitter–base forward, collector–base reverse.
- $I_E=I_B+I_C$; $\alpha=I_C/I_E$, $\beta=I_C/I_B$, with $\beta=\alpha/(1-\alpha)$.
- Small base current controls large collector current — amplification.
- Saturation and cut-off give switching behaviour.

The next module moves from analogue amplification to digital logic: using transistors (and diodes) as switches that implement Boolean operations.