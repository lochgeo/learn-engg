## When a nucleus is unstable

Not every combination of protons and neutrons is bound. Nuclei that sit too far from the valley of stability rearrange themselves by emitting radiation—**radioactivity**. This module catalogues the three common decay modes, derives the exponential decay law from a simple statistical picture, and defines the half-life, mean life and activity that every problem uses.

## 1. The three common decays

**Alpha ($\alpha$) decay.** The nucleus ejects a helium-4 nucleus ($^4_2\mathrm{He}$), so $Z$ drops by 2 and $A$ drops by 4:
$$
^A_Z\mathrm{X} \to {}^{A-4}_{Z-2}\mathrm{Y} + {}^4_2\mathrm{He}.
$$
Typical of heavy nuclei ($A\gtrsim 210$). The alpha particle is tightly bound, so emitting it is energetically favourable when the parent is heavy enough.

**Beta ($\beta$) decay.** A neutron converts to a proton (or vice versa), with emission of an electron/positron and a neutrino:
$$
n \to p + e^- + \bar\nu_e,\qquad
p \to n + e^+ + \nu_e.
$$
In nuclear notation, $\beta^-$ decay raises $Z$ by 1 at fixed $A$; $\beta^+$ decay lowers $Z$ by 1. A neutrino is emitted so that energy and momentum are conserved; it interacts so weakly that it escapes.

**Gamma ($\gamma$) decay.** An excited nucleus drops to a lower energy state by emitting a photon. Neither $Z$ nor $A$ changes; only the internal energy changes. Gamma emission often follows alpha or beta decay, when the daughter is left in an excited state.

The type of decay is governed by which process lowers the mass (and hence the energy) of the system. The **Q-value** of a decay is the mass difference between parent and products, converted to energy; a decay occurs only if $Q>0$.

## 2. The decay law

Radioactive decay is a random process for individual nuclei, but for a large sample the number $N(t)$ remaining undecayed obeys a simple law. The rate of decay is proportional to the number present:

$$
\frac{dN}{dt} = -\lambda N,
$$

where $\lambda$ is the **decay constant** (probability per unit time that a given nucleus decays). Integrating,

$$
N(t)=N_0\,e^{-\lambda t}.
$$

The **activity** $A(t)$ is the decay rate (decays per unit time):

$$
A(t) = -\frac{dN}{dt} = \lambda N(t) = A_0\,e^{-\lambda t},
\qquad A_0=\lambda N_0.
$$

Activity is measured in becquerels ($1\ \text{Bq}=1\ \text{decay/s}$) or curies ($1\ \text{Ci}=3.7\times10^{10}\ \text{Bq}$).

## 3. Half-life and mean life

The **half-life** $T_{1/2}$ is the time for half the sample to decay:

$$
\frac{N_0}{2}=N_0 e^{-\lambda T_{1/2}}
\;\Rightarrow\;
T_{1/2}=\frac{\ln 2}{\lambda}=\frac{0.693}{\lambda}.
$$

The **mean life** $\tau$ is the average lifetime of a nucleus:

$$
\tau = \frac{1}{\lambda} = \frac{T_{1/2}}{\ln 2}\approx1.443\,T_{1/2}.
$$

These three quantities ($\lambda$, $T_{1/2}$, $\tau$) carry the same information; convert carefully and do not confuse half-life with mean life in formulas.

## 4. Worked example: carbon-14 dating

Carbon-14 has half-life $T_{1/2}=5730\ \text{y}$. Find its decay constant and the fraction remaining after $11460\ \text{y}$.

Decay constant:
$$
\lambda = \frac{0.693}{5730\ \text{y}} \approx 1.21\times10^{-4}\ \text{y}^{-1}.
$$

After $t=11460\ \text{y}=2\,T_{1/2}$:
$$
\frac{N}{N_0}=e^{-\lambda t}=e^{-0.693\times2}=e^{-1.386}=0.25.
$$

So one quarter remains, as expected after two half-lives.

**Sanity check:** the fraction is between 0 and 1, decreases with time, and equals $(1/2)^{t/T_{1/2}}$; for $t=2T_{1/2}$ that is $1/4$. Consistent.

## 5. A common mistake

**Using $\lambda$ and $T_{1/2}$ interchangeably.** A problem may give a half-life and ask for activity after time $t$; the correct expression is $A=A_0\,2^{-t/T_{1/2}}$ or $A=A_0\,e^{-0.693\,t/T_{1/2}}$. Writing $A=A_0\,e^{-T_{1/2}t}$ is dimensionally wrong and gives nonsense. Always convert to $\lambda$ first if you use the exponential form, or use the base-2 form with the half-life directly.

A second error is treating the decay of a *single* nucleus as predictable; the law is statistical and applies to large samples. For a few atoms, only probabilities are meaningful.

## Try it yourself

**A.** A sample has activity $800\ \text{Bq}$; after $6\ \text{h}$ it is $100\ \text{Bq}$. Find the half-life.

<details><summary>Show the reasoning</summary>

Activity fell by factor $8$, i.e. $2^3$, so $3$ half-lives elapsed in $6\ \text{h}$. Thus $T_{1/2}=2\ \text{h}$.
</details>

**B.** Iodine-131 has half-life $8\ \text{days}$. What fraction remains after $24\ \text{days}$?

<details><summary>Show the reasoning</summary>

$24/8=3$ half-lives, so fraction $=(1/2)^3=1/8=0.125$.
</details>

**C.** Convert a mean life of $10\ \text{s}$ to a half-life.

<details><summary>Show the reasoning</summary>

$\tau=1/\lambda=10\ \text{s}$, so $\lambda=0.1\ \text{s}^{-1}$ and $T_{1/2}=\ln2/\lambda=0.693/0.1=6.93\ \text{s}$.
</details>

## Remember

- Decays: $\alpha$ (He nucleus, $Z\to Z-2$, $A\to A-4$), $\beta$ (electron/positron + neutrino, $A$ fixed), $\gamma$ (photon, $Z,A$ fixed).
- Decay law: $N=N_0 e^{-\lambda t}$; activity $A=\lambda N$.
- Half-life $T_{1/2}=\ln2/\lambda$; mean life $\tau=1/\lambda=1.443\,T_{1/2}$.
- A decay occurs only if its Q-value is positive.
- Use base-2 or convert half-life to $\lambda$ carefully.

The next module uses binding energy and decay concepts together: fission and fusion, chain reactions, and the energy released in reactors and stars.<|end|><|start|>write to=assistant<|channel|>analysis<|message|>Created file successfully: src/content/class-12/physics/class-12-physics-nuclei/radioactivity-and-decay-laws.md