## Why classical physics could not explain a glowing oven

By the end of the nineteenth century, classical physics had a serious embarrassment on its hands. Theory predicted that a hot oven — a "black body" — should radiate **more and more energy without limit as the wavelength gets shorter**, so baking bread should flood your kitchen with X-rays and ultraviolet light. It does not. Max Planck cut the deadlock in 1900 with a shocking proposal: walls emit and absorb energy not continuously, but in **packets**. Five years later the same idea explained the photoelectric effect, which is where we pick the story up.

## 1. Planck's quantum hypothesis

Planck proposed that the energy of atomic oscillators in matter is quantised:

$$
E_n=nh\nu,\qquad n=1,2,3,\ldots
$$

An oscillator can have energy $0$, $h\nu$, $2h\nu$, but never $1.5h\nu$, and when it emits or absorbs radiation it jumps between these values in whole steps of

$$
h=6.626\times10^{-34}\ \text{J s},
$$

now called **Planck's constant**. Because $h$ is so tiny, jumps of size $h\nu$ are invisible to everyday experience — a pendulum swinging at $1\ \text{Hz}$ changes its energy in steps of $10^{-34}\ \text{J}$ — so classical physics works perfectly fine for large objects. At the atomic scale, quantisation is unavoidable, and it reshapes the radiation spectrum itself.

This is why the classical "no limit" prediction fails. Radiation at very short wavelength demands quanta of large energy $h\nu$ — far larger than a typical thermal energy at room temperature — so the population of such high-energy steps is negligible and the ultraviolet emission is strongly suppressed.

## 2. The photoelectric effect

Shine light of a high-enough frequency on a metal surface in vacuum and electrons come off. This is the **photoelectric effect**, noticed by Hertz in 1887 and studied carefully in the decades after. Its features are startling:

1. **Threshold.** Below a certain frequency $\nu_0$ (per metal), no electrons are emitted at all — no matter how intense the light. Intensity fixes how *many* electrons leave per second, not whether any leave.
2. **Instantaneous emission.** Above threshold, electrons appear with no measurable delay, even in faint light.
3. **Kinetic energy depends on frequency, not brightness.** Brighter light of the same colour ejects *more* electrons, each with the same maximum kinetic energy; higher-frequency light ejects electrons with greater kinetic energy.

A classical wave picture gets all three wrong. A wave spreads its energy over the whole surface, so a very bright low-frequency light should eventually accumulate enough energy to eject electrons, and faint light should take more time than bright light. Neither happens.

## 3. Einstein's photon explanation

Einstein (1905) took Planck's packets seriously and applied them to light itself. Light of frequency $\nu$ consists of particles — **photons** — each carrying

$$
E=h\nu.
$$

One photon interacts with one electron, and the transaction must balance energy:

$$
h\nu = W_0 + \frac{1}{2}mv_{max}^2,
$$

or

$$
\frac{1}{2}mv_{max}^{2}=h\nu-W_0,
$$

where $W_0$ (or $\phi$), the **work function**, is the minimum energy needed to pull an electron out of the metal surface. Every feature now follows:

- If $h\nu<W_0$, i.e. $\nu<\nu_0=W_0/h$: no emission, however intense. Intensity means more photons, but each photon is individually too weak.
- Faint but above-threshold light works instantly: one photon does not need to queue up behind others.
- More intensity: more photons per second, so more electrons per second, all with the same energy spread.
- Higher frequency: each photon carries more energy, so each electron leaves faster.

Measuring the maximum kinetic energy uses a **stopping potential** $V_0$: the retarding voltage at which even the fastest electrons are turned back. Since $eV_0=\tfrac12mv_{max}^2$,

$$
V_0=\frac{h\nu-W_0}{e}.
$$

Varying the light's frequency and reading the frequency where the current just dies maps out $\nu_0$; more precisely, plotting $V_0$ against $\nu$ gives a straight line of slope $h/e$ — Millikan used exactly this to measure $h$ and check Einstein's formula.

## 4. The photon

As a particle of light, the photon is peculiar: it carries energy $h\nu$ and momentum $p=h\nu/c=h/\lambda$, and travels at $c$, but has zero rest mass and no charge. Light intensity measures the *number* of photons arriving per second, not the energy of each one.

<learning-block type="concept" title="Photons by the trillion">

A modest laser pointer of $5\ \text{mW}$ at $\lambda=650\ \text{nm}$ emits

$$
\frac{P}{h\nu}=\frac{5.0\times10^{-3}\ \text{W}}{hc/\lambda}=\frac{5.0\times10^{-3}}{(6.626\times10^{-34})(3.00\times10^{8})/(650\times10^{-9})}=\frac{5.0\times10^{-3}}{3.06\times10^{-19}\ \text{J}}=1.6\times10^{16}\ \text{photons s}^{-1}.
$$

Bright sunlight and dim starlight differ by the photon *rate*; the energy *per photon* depends only on colour. Keep the two ideas in separate pockets.

</learning-block>

### Worked example: threshold and stopping potential

A metal has threshold wavelength $\lambda_0=620\ \text{nm}$. Light of wavelength $310\ \text{nm}$ falls on it. Find the work function, the maximum kinetic energy and the stopping potential.

$\phi = W_0 = h\nu_0 = hc/\lambda_0$. Using the handy product $hc=1.99\times10^{-25}\ \text{J m}$:

$$
W_0=\frac{1.99\times10^{-25}}{620\times10^{-9}}=3.2\times10^{-19}\ \text{J}\approx2.0\ \text{eV}.
$$

For the incident light, each photon carries $hc/\lambda=(1.99\times10^{-25})/(310\times10^{-9})=6.4\times10^{-19}\ \text{J}=4.0\ \text{eV}$, so

$$
\frac{1}{2}mv_{max}^2=6.4\times10^{-19}-3.2\times10^{-19}=3.2\times10^{-19}\ \text{J}=2.0\ \text{eV},
$$

and the stopping potential is $V_0 = K_{max}/e = 2.0\ \text{V}$.

Sanity check: $\lambda=310\ \text{nm}$ is half $\lambda_0$, so each photon carries double the work energy, and the leftover is one photon's worth — consistent.

<learning-block type="mistake" title="Photoelectric pitfalls">

- **Expecting brighter light to eject electrons below threshold.** Intensity cannot split a photon into two; below $\nu_0$, no emission occurs at any intensity.
- **Reporting a "negative kinetic energy".** If your calculation gives $K_{max}<0$, the frequency is below threshold and the answer is "no emission", not a negative speed.
- **Confusing work function with stopping potential.** $W_0$ is an energy in joules (or eV); $V_0$ is a voltage in volts. They are related by $eV_0=K_{max}$, not equal.
- **Using joules and electron-volts in the same equation.** Convert one into the other with $1\ \text{eV}=1.60\times10^{-19}\ \text{J}$ before adding.

</learning-block>

## Try it yourself

**A.** Compute the energy, in joules and electron-volts, of a photon of $\lambda=450\ \text{nm}$.

<details><summary>Show the reasoning</summary>

$E=hc/\lambda=(1.99\times10^{-25})/(450\times10^{-9})=4.42\times10^{-19}\ \text{J}=2.76\ \text{eV}$ (dividing by $1.60\times10^{-19}$). In eV, a quicker route is $E\ (\text{eV})=1240/\lambda\ (\text{nm}) = 1240/450 = 2.76$.
</details>

**B.** A certain metal ejects electrons when lit at $5.00\times10^{14}\ \text{Hz}$ but not at $4.50\times10^{14}\ \text{Hz}$. What can you say about its work function?

<details><summary>Show the reasoning</summary>

Below threshold at $4.50\times10^{14}\ \text{Hz}$ means $h\nu<W_0$, so $W_0>6.626\times10^{-34}\times4.50\times10^{14}=2.98\times10^{-19}\ \text{J}$. Above threshold at $5.00\times10^{14}\ \text{Hz}$ means $W_0\le3.31\times10^{-19}\ \text{J}$. The work function lies between $2.98\times10^{-19}\ \text{J}$ and $3.31\times10^{-19}\ \text{J}$ — between $1.86\ \text{eV}$ and $2.07\ \text{eV}$.
</details>

**C.** Why does the photoelectric effect support the particle nature of light more strongly than the wave theory supports the wave nature?

<details><summary>Show the reasoning</summary>

Because the effect's time behaviour and frequency behaviour cannot be recovered from wave theory at all: waves spread energy smoothly and slowly, and brightness, not colour, would matter to them. The experiment instead shows light arriving in whole, indivisible packets whose energy depends on frequency — properties of particles. Evidence of *one* model's success is weak; evidence that the other model *fails* is strong.
</details>

## Remember

- Matter emits and absorbs radiation in packets: $E=nh\nu$ with $h=6.626\times10^{-34}\ \text{J s}$.
- Each photon carries energy $E=h\nu$; photon energy is also $hc/\lambda$ — equivalently $1240/\lambda(\text{nm})$ in electron-volts.
- Photoelectric effect: $h\nu=W_0+K_{max}$, with $W_0=h\nu_0$ the work function and $eV_0=K_{max}$.
- Intensity sets the number of photoelectrons; frequency sets their maximum kinetic energy.
- Below threshold frequency, nothing happens — quantisation wins, whatever the intensity.
- The photon idea becomes more powerful still when de Broglie reverses it, in the dual nature module later in this chapter.
