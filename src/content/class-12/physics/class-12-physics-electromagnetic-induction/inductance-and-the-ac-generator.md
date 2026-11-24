## The coil that pushes back when the current changes

Connect a coil in series with a lamp and a battery, then close the switch. The lamp brightens gradually rather than instantly. Open the switch and a spark may jump across the gap. The coil is not a resistor in disguise; at steady current it behaves almost like ordinary wire. What it opposes is a **change** in current.

The reason is self-induction. The current in the coil creates a magnetic field, and that field threads the coil itself. When the current changes, the flux through the coil changes, so Faraday’s law induces an emf in the very coil that carries the current. The same principle, applied to a coil rotating in a magnetic field, gives the alternating-current generator.

## 1. Self-inductance

For a coil carrying current $I$, the magnetic flux through one turn is proportional to $I$. Write the flux linkage as

$$
N\Phi_B=LI,
$$

where $L$ is the **self-inductance** of the coil. For a coil wound on a non-magnetic core, $L$ depends only on geometry — number of turns, area, length — and not on the current. A magnetic core can increase $L$ by a large factor, but only while the core remains below saturation.

Differentiate the flux linkage:

$$
\varepsilon=-\frac{d(N\Phi_B)}{dt}=-L\frac{dI}{dt}.
$$

This is the self-induced emf. The minus sign again expresses Lenz’s law: the induced emf opposes the change in current. If the current is increasing, the emf acts against the current; if the current is decreasing, the emf acts in the same direction as the current, trying to keep it going.

The SI unit of inductance is the **henry**:

$$
1\ \text{H}=1\ \text{Wb/A}=1\ \text{V}\cdot\text{s/A}.
$$

A henry is a large unit; laboratory coils often have inductances in millihenries or microhenries.

## 2. Energy stored in an inductor

Building a current in an inductor requires work against the back emf. The electrical power delivered to the inductor is

$$
P=\varepsilon I=LI\frac{dI}{dt}.
$$

The work needed to raise the current from zero to $I$ is

$$
U=\int_0^I LI'\,dI'=\frac12LI^2.
$$

This is the **magnetic energy** stored in the coil. It is returned to the circuit when the current falls, which is why an inductor can produce a large voltage spike when a circuit is broken quickly.

The energy is stored in the magnetic field, not in the wire. For a long solenoid the field is $B=\mu_0nI$, and the field fills the volume $A\ell$. The magnetic energy density is

$$
u_B=\frac{B^2}{2\mu_0}.
$$

Multiplying by the volume gives

$$
U=u_B A\ell=\frac{(\mu_0nI)^2}{2\mu_0}A\ell
=\frac12\mu_0n^2A\ell\,I^2,
$$

which matches $\frac12LI^2$ with $L=\mu_0n^2A\ell$. The two expressions are the same physics seen from different levels.

## 3. Inductance of a long solenoid

For a solenoid with $N$ turns, length $\ell$, cross-sectional area $A$, and $n=N/\ell$ turns per metre, the field inside is $B=\mu_0nI$. The flux through one turn is $BA$, so the flux linkage is

$$
N\Phi_B=N(BA)=N(\mu_0nI)A.
$$

Using $N=n\ell$,

$$
L=\frac{N\Phi_B}{I}=\mu_0n^2A\ell=\frac{\mu_0N^2A}{\ell}.
$$

The assumptions are the usual ones for a long solenoid: the length is much greater than the diameter, end effects are neglected, and the core is not saturated. A core of relative permeability $\mu_r$ multiplies $L$ by $\mu_r$, provided the core remains linear.

## 4. Worked example: solenoid inductance and stored energy

A solenoid has $N=1000$ turns, length $\ell=0.50\ \text{m}$, and cross-sectional area $A=1.0\times10^{-3}\ \text{m}^2$. It has an air core. Find its inductance, the energy stored when it carries $3.0\ \text{A}$, and the back emf when the current changes at $20\ \text{A/s}$.

The turn density is $n=N/\ell=1000/0.50=2000\ \text{turns/m}$. Thus

$$
L=\mu_0n^2A\ell
=(4\pi\times10^{-7})(2000)^2(1.0\times10^{-3})(0.50).
$$

Evaluating,

$$
L=(1.2566\times10^{-6})(4.0\times10^{6})(5.0\times10^{-4})
=2.51\times10^{-3}\ \text{H}.
$$

The stored energy at $3.0\ \text{A}$ is

$$
U=\frac12LI^2=\frac12(2.51\times10^{-3})(3.0)^2
=1.13\times10^{-2}\ \text{J}=11.3\ \text{mJ}.
$$

The back emf magnitude for $dI/dt=20\ \text{A/s}$ is

$$
|\varepsilon|=L\frac{dI}{dt}=(2.51\times10^{-3})(20)=5.03\times10^{-2}\ \text{V}=50\ \text{mV}.
$$

**Sanity check.** A few millihenries is typical for a laboratory solenoid of this size, and tens of millijoules is a modest stored energy. The back emf is small here because the current is changing relatively slowly; a faster change or a larger inductance would raise it proportionally.

## 5. Mutual inductance and the transformer idea

Two coils placed near each other are coupled magnetically. A current $I_1$ in the primary creates a flux through the secondary, so the secondary flux linkage is proportional to $I_1$:

$$
N_2\Phi_{21}=MI_1,
$$

where $M$ is the **mutual inductance**. A changing primary current induces an emf in the secondary:

$$
\varepsilon_2=-M\frac{dI_1}{dt}.
$$

The unit is again the henry. For a given pair of coils, $M$ depends on their sizes, separation, orientation and any core. A useful reciprocity theorem states that the same $M$ describes the reverse situation: a changing current in coil 2 induces the same flux linkage per ampere in coil 1. A transformer is designed to make $M$ large by winding both coils on a common high-permeability core.

For example, if $M=0.25\ \text{H}$ and the primary current changes by $4.0\ \text{A}$ in $0.10\ \text{s}$, the average secondary emf magnitude is

$$
|\varepsilon_2|=M\frac{\Delta I_1}{\Delta t}
=(0.25)\frac{4.0}{0.10}=10\ \text{V}.
$$

## 6. The AC generator

A rectangular coil of $N$ turns and area $A$ rotates with constant angular speed $\omega$ in a uniform magnetic field $B$. Let $\theta$ be the angle between the field and the normal to the coil, and let $\theta=\omega t$. The flux through one turn is

$$
\Phi_B=BA\cos\omega t.
$$

The flux linkage is $N\Phi_B$, so Faraday’s law gives

$$
\varepsilon=-N\frac{d\Phi_B}{dt}
=-N\frac{d}{dt}(BA\cos\omega t)
=NAB\omega\sin\omega t.
$$

The emf is sinusoidal, with **peak value**

$$
\varepsilon_0=NAB\omega.
$$

The frequency is $f=\omega/(2\pi)$. The emf is zero when $\sin\omega t=0$, which occurs when the flux is maximum (coil plane perpendicular to the field). It is maximum when $\sin\omega t=\pm1$, which occurs when the flux is zero (coil plane parallel to the field). This is the opposite of what many students expect: the emf depends on how fast the flux is changing, not on how much flux there is.

A generator with **slip rings** delivers alternating current to the external circuit. Replacing the slip rings with a split-ring commutator reverses the connections every half-turn and produces a unidirectional, pulsating output — a simple DC generator.

### Worked example: generator output

A generator coil has $N=120$ turns, area $A=0.020\ \text{m}^2$, and rotates at $50\ \text{Hz}$ in a field $B=0.50\ \text{T}$. Find the peak and rms emf.

The angular frequency is

$$
\omega=2\pi f=2\pi(50)=314\ \text{rad/s}.
$$

The peak emf is

$$
\varepsilon_0=NAB\omega
=(120)(0.020)(0.50)(314)=377\ \text{V}.
$$

The rms value for a sine wave is

$$
\varepsilon_{\text{rms}}=\frac{\varepsilon_0}{\sqrt2}
=\frac{377}{1.414}=267\ \text{V}.
$$

**Sanity check.** A few hundred volts peak from a $50\ \text{Hz}$, $120$-turn coil of ordinary size is realistic for a small generator. Doubling the rotation speed doubles the peak emf, because both the flux change per unit time and the angular frequency increase together.

<learning-block type="mistake" title="Inductance is not resistance, and peak emf is not at peak flux">

An inductor does not “block current.” A steady current flows through an ideal inductor with no emf at all; the inductor only opposes a **change** in current. Treating $L$ as a resistance, or expecting a voltage drop $LI$, gives nonsense.

In a generator, the emf is **maximum when the flux is zero**, because that is when the flux is changing fastest. Students often mark the peak emf at the orientation of maximum flux. Remember: a graph of $\cos\omega t$ has its steepest slope at its zero crossings.

Finally, do not drop the number of turns from the solenoid formula. The correct expression is $L=\mu_0N^2A/\ell$, not $\mu_0NA/\ell$.

</learning-block>

## Try it yourself

**A.** A solenoid has $N=800$ turns, length $0.32\ \text{m}$, area $2.0\times10^{-4}\ \text{m}^2$, and an air core. Find $L$.

<details><summary>Show the reasoning</summary>

$$
L=\frac{\mu_0N^2A}{\ell}
=\frac{(4\pi\times10^{-7})(800)^2(2.0\times10^{-4})}{0.32}.
$$

Numerically,

$$
L=\frac{(1.2566\times10^{-6})(6.4\times10^{5})(2.0\times10^{-4})}{0.32}
=5.0\times10^{-4}\ \text{H}.
$$

That is about $0.50\ \text{mH}$.

</details>

**B.** The current in a $0.20\ \text{H}$ coil rises uniformly from $1.0\ \text{A}$ to $3.0\ \text{A}$ in $0.10\ \text{s}$. Find the average back-emf magnitude and the change in stored magnetic energy.

<details><summary>Show the reasoning</summary>

The rate of change is

$$
\frac{\Delta I}{\Delta t}=\frac{3.0-1.0}{0.10}=20\ \text{A/s},
$$

so

$$
|\varepsilon|=L\frac{\Delta I}{\Delta t}=(0.20)(20)=4.0\ \text{V}.
$$

The energy changes by

$$
\Delta U=\frac12L(I_f^2-I_i^2)
=\frac12(0.20)(9.0-1.0)=0.80\ \text{J}.
$$

The supply must provide this energy in addition to any resistive losses.

</details>

**C.** A generator has $N=50$ turns, area $0.040\ \text{m}^2$, field $0.30\ \text{T}$, and rotates at $60\ \text{Hz}$. Find the peak emf.

<details><summary>Show the reasoning</summary>

$$
\omega=2\pi(60)=377\ \text{rad/s},
$$

$$
\varepsilon_0=NAB\omega=(50)(0.040)(0.30)(377)=226\ \text{V}.
$$

The rms value would be $226/\sqrt2\approx160\ \text{V}$.

</details>

**D.** At what orientation of the generator coil is the induced emf maximum, and what is the flux at that instant?

<details><summary>Show the reasoning</summary>

The emf is maximum when the coil plane is **parallel** to the field, so the normal is perpendicular to the field. At that instant the flux through the coil is zero, but it is changing at its fastest rate. The emf is zero when the coil plane is perpendicular to the field and the flux is maximum.

</details>

## Remember

- Self-inductance is defined by $N\Phi_B=LI$; the induced emf is $\varepsilon=-L\,dI/dt$.
- The unit of inductance is the henry; $1\ \text{H}=1\ \text{V}\cdot\text{s/A}$.
- An inductor stores energy $U=\frac12LI^2$, in its magnetic field.
- A long solenoid has $L=\mu_0N^2A/\ell=\mu_0n^2A\ell$.
- Mutual inductance gives $\varepsilon_2=-M\,dI_1/dt$; it is the basis of the transformer.
- A rotating coil produces $\varepsilon=NAB\omega\sin\omega t$, with peak $\varepsilon_0=NAB\omega$.

The practice module now combines flux, Lenz’s law, motional emf, eddy currents and inductance into a single problem-solving routine.
