## Your study plan for today

This chapter is a chain of consequences. A changing flux produces an emf; the emf drives a current whose direction opposes the change; motion can create the flux change; the same physics appears in bulk metal and in a coil’s own current; finally, a rotating coil turns it into an AC supply. A focused first pass takes about **2 hours 30 minutes**, including a short break:

1. **Magnetic flux and Faraday’s experiments** — 22 min
2. **Faraday’s law and Lenz’s law** — 22 min
3. **Motional emf and energy considerations** — 22 min
4. **Eddy currents** — 22 min
5. **Inductance and the AC generator** — 22 min
6. **This mastery check** — 25 min

After each lesson, close the notes and re-derive its central relation on a blank page. Mark a lesson complete only when you can also state the direction of the induced effect and check the energy balance. Save the JEE Main timed set for when the individual tools feel secure.

## First choose the tool

| Clue in the question | Start with |
| --- | --- |
| Flux through a loop at an angle | $\Phi_B=BA\cos\theta$; $\theta$ is measured from the normal |
| Emf from a field that changes with time | $\varepsilon=-N\,\Delta\Phi_B/\Delta t$ for an average, or $-N\,d\Phi_B/dt$ |
| Direction of an induced current | Lenz: find whether flux rises or falls, then oppose the change |
| A rod sliding on rails | $\varepsilon=B\ell v$, $I=\varepsilon/R$ |
| Force needed to keep a rod moving | Magnetic drag $F=B^2\ell^2v/R$, opposite the motion |
| Energy in a rod-and-rails circuit | $P_{\text{mech}}=Fv=I^2R=P_{\text{elec}}$ |
| A metal plate in a changing field | Eddy currents; Lenz gives the braking direction |
| Transformer core heating | Eddy-current loss; laminations or ferrite reduce it |
| Current in a coil changing | Self-induced emf $\varepsilon=-L\,dI/dt$ |
| Energy stored in a coil | $U=\frac12LI^2$ |
| Two magnetically coupled coils | Mutual inductance: $\varepsilon_2=-M\,dI_1/dt$ |
| A coil rotating in a uniform field | $\varepsilon_0=NAB\omega$, $\omega=2\pi f$ |
| A graph of flux against time | Emf is the negative slope of the graph |

## Mastery check

Try each question before opening the answer. Use $g=10\ \text{m/s}^2$ where mechanics is involved. Keep units on every result and state the direction whenever the question asks for it.

### 1. Flux at an angle

A loop of area $0.025\ \text{m}^2$ lies in a uniform field of $0.40\ \text{T}$. The normal to the loop makes $60^\circ$ with the field. Find the flux through the loop.

<details><summary>Answer and reasoning</summary>

$$
\Phi_B=BA\cos\theta=(0.40)(0.025)\cos60^\circ
=(0.010)(0.50)=5.0\times10^{-3}\ \text{Wb}.
$$

The angle is measured from the normal, so the cosine is appropriate. If the angle had been given between the field and the plane, the flux would use $\sin60^\circ$ instead.

</details>

### 2. Average emf and current

A $250$-turn coil of area $0.012\ \text{m}^2$ is perpendicular to a field. The field rises uniformly from $0.20\ \text{T}$ to $0.60\ \text{T}$ in $0.20\ \text{s}$. The coil resistance is $3.0\ \Omega$. Find the average emf and the current.

<details><summary>Answer and reasoning</summary>

The flux change per turn is

$$
|\Delta\Phi_B|=(0.60-0.20)(0.012)=4.8\times10^{-3}\ \text{Wb}.
$$

Thus

$$
|\varepsilon|=N\frac{|\Delta\Phi_B|}{\Delta t}
=250\frac{4.8\times10^{-3}}{0.20}=6.0\ \text{V}.
$$

The current is

$$
I=\frac{6.0}{3.0}=2.0\ \text{A}.
$$

The power dissipated is $I^2R=(2.0)^2(3.0)=12\ \text{W}$.

</details>

### 3. Direction from Lenz’s law

A circular loop lies in the plane of the page. A magnetic field points into the page and its magnitude is decreasing. In which direction does the induced current flow, viewed from the front?

<details><summary>Answer and reasoning</summary>

The inward flux is decreasing. The induced current must produce a field **into the page** to oppose the decrease. By the right-hand grip rule, with the thumb pointing into the page, the fingers curl **clockwise**. The current is therefore clockwise viewed from the front.

The key phrase is “oppose the change.” The induced field is in the same direction as the external field here because the external flux is falling.

</details>

### 4. Rod on rails: full circuit

A rod of length $0.40\ \text{m}$ moves at $6.0\ \text{m/s}$ perpendicular to a $0.25\ \text{T}$ field. The total resistance of the circuit is $1.5\ \Omega$. Find the emf, current, magnetic drag force and electrical power.

<details><summary>Answer and reasoning</summary>

$$
|\varepsilon|=B\ell v=(0.25)(0.40)(6.0)=0.60\ \text{V},
$$

$$
I=\frac{0.60}{1.5}=0.40\ \text{A},
$$

$$
F_m=BI\ell=(0.25)(0.40)(0.40)=0.040\ \text{N},
$$

$$
P=I^2R=(0.40)^2(1.5)=0.24\ \text{W}.
$$

Check the mechanical side: the external agent must push with $0.040\ \text{N}$ at $6.0\ \text{m/s}$, giving $0.24\ \text{W}$. The two powers agree.

</details>

### 5. Energy after the push stops

A $0.15\ \text{kg}$ rod is moving at $8.0\ \text{m/s}$ on rails and is then left to coast with only magnetic braking. How much heat is produced before it stops? Explain why the deceleration is not constant.

<details><summary>Answer and reasoning</summary>

All the initial kinetic energy becomes heat:

$$
Q=\frac12mv^2=\frac12(0.15)(8.0)^2=4.8\ \text{J}.
$$

The braking force is $B^2\ell^2v/R$, which is proportional to $v$. As the rod slows, the emf, current and force all decrease, so the deceleration decreases. The rod approaches rest gradually rather than stopping at a constant rate.

</details>

### 6. Solenoid inductance and stored energy

A solenoid has $600$ turns, length $0.30\ \text{m}$, area $3.0\times10^{-4}\ \text{m}^2$, and an air core. Find its inductance and the energy stored when it carries $2.5\ \text{A}$.

<details><summary>Answer and reasoning</summary>

$$
L=\frac{\mu_0N^2A}{\ell}
=\frac{(4\pi\times10^{-7})(600)^2(3.0\times10^{-4})}{0.30}.
$$

The numerator is $(1.2566\times10^{-6})(3.6\times10^{5})(3.0\times10^{-4})=1.357\times10^{-4}$, so

$$
L=\frac{1.357\times10^{-4}}{0.30}=4.52\times10^{-4}\ \text{H}.
$$

The stored energy is

$$
U=\frac12LI^2=\frac12(4.52\times10^{-4})(2.5)^2
=1.41\times10^{-3}\ \text{J}=1.41\ \text{mJ}.
$$

A current changing at $12\ \text{A/s}$ would induce a back emf of $L(12)=5.4\times10^{-3}\ \text{V}$, a few millivolts.

</details>

### 7. Generator peak and rms

A generator coil has $200$ turns, area $0.010\ \text{m}^2$, and rotates at $50\ \text{Hz}$ in a $0.25\ \text{T}$ field. Find the peak and rms emf.

<details><summary>Answer and reasoning</summary>

$$
\omega=2\pi f=2\pi(50)=314\ \text{rad/s}.
$$

$$
\varepsilon_0=NAB\omega
=(200)(0.010)(0.25)(314)=157\ \text{V}.
$$

$$
\varepsilon_{\text{rms}}=\frac{157}{\sqrt2}=111\ \text{V}.
$$

The peak occurs when the coil plane is parallel to the field, where the flux is zero but changing most rapidly.

</details>

### 8. Lamination and loss

A transformer core dissipates $64\ \text{W}$ in eddy currents. It is rebuilt with laminations one-eighth as thick, keeping the same total iron and the same flux. Estimate the new eddy-current loss.

<details><summary>Answer and reasoning</summary>

Eddy-current loss per unit volume scales as $t^2$. Replacing $t$ by $t/8$ multiplies the loss by $1/64$:

$$
P_{\text{new}}\approx\frac{64}{64}=1.0\ \text{W}.
$$

The loss is greatly reduced but not zero: each lamination still has finite thickness. Hysteresis loss is a separate contribution and is not removed by lamination.

</details>

### 9. A magnet falling through a copper tube

A bar magnet is dropped through a vertical copper tube. It falls much more slowly than it would in air, even though copper is not ferromagnetic. Explain the origin of the retarding force, and state whether the magnet eventually reaches a steady speed.

<details><summary>Answer and reasoning</summary>

As the magnet moves, the magnetic flux through loops of copper changes. Eddy currents are induced in the tube wall, and by Lenz’s law their magnetic field opposes the relative motion. The upward magnetic force grows with speed, so the magnet’s acceleration is reduced.

The magnet reaches a terminal speed when the upward magnetic force balances its weight. At that point the net force is zero and the speed stays constant. The loss of gravitational potential energy appears as heat in the copper, not as kinetic energy of the magnet.

</details>

### 10. Why Lenz’s law cannot be reversed

Explain why an induced current that aided the change in flux would violate conservation of energy. Use a magnet approaching a coil as the example.

<details><summary>Answer and reasoning</summary>

Suppose the induced current attracted the approaching magnet instead of repelling it. The magnet would accelerate, its flux through the coil would change faster, the induced current would grow, and the attraction would grow further. The magnet and the current would gain energy without any external agent doing work, which is a perpetual-motion machine.

In reality the induced current repels the approaching magnet. An external push must do work against that repulsion, and that work becomes the electrical energy dissipated in the coil. Lenz’s law is therefore the direction that conservation of energy requires, not an extra assumption.

</details>

## Self-check

You are ready to move on when you can:

- compute magnetic flux with the correct angle to the normal;
- use Faraday’s law in both average and instantaneous form, including the factor $N$;
- determine the direction of an induced current with Lenz’s law in both increasing-flux and decreasing-flux cases;
- derive and apply motional emf $\varepsilon=B\ell v$ and identify the positive end of the rod;
- check an induction problem with an energy balance, $P_{\text{mech}}=I^2R$;
- explain eddy currents, magnetic braking, and the effect of laminations;
- calculate self-inductance, stored magnetic energy and a self-induced emf;
- use mutual inductance and the generator relation $\varepsilon_0=NAB\omega$;
- spot the difference between a quantity and its rate of change — flux versus emf, current versus $dI/dt$.

If one row still feels shaky, revisit that module and redo its worked example from a blank page before trying the timed set. Then treat the JEE Main paper as a test of choosing the right relation under time pressure, not as a test of memory.
