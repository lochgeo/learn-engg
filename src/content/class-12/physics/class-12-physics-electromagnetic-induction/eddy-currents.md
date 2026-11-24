## The copper pendulum that refuses to swing

Suspend a solid copper plate between the poles of a strong electromagnet so that it can swing like a pendulum. With the magnet off, it swings for a long time. Switch the magnet on, and the same plate is brought to rest in a few swings. The copper is not attracted to the magnet in the way iron is; there is no steady pull holding it. Something inside the metal is resisting the motion.

That something is a set of **eddy currents**: induced currents that circulate through the bulk of a conductor whenever the magnetic flux through it changes. They are the same Faraday–Lenz effect as in a wire loop, but the “wire” is now a sheet of metal with countless possible paths.

## 1. Why bulk conductors get circulating currents

In a wire circuit, the path is fixed and the induced emf drives current along it. In a solid conductor, a changing magnetic field creates an induced electric field throughout the material. Charges move in whatever closed loops the geometry allows. These loops are called **eddy currents** or Foucault currents.

The rules from the previous modules apply without change:

- The emf is proportional to the rate of change of flux through each loop.
- The current direction is given by Lenz’s law: it produces a field opposing the change.
- The current dissipates energy as heat according to $I^2R$.

Because a thick piece of metal has low resistance, even a modest induced emf can drive a large current. That is why eddy currents can be both useful and troublesome.

## 2. A moving conductor: braking without contact

Imagine a metal plate entering a region of magnetic field. The flux through the part of the plate inside the field is increasing, so eddy currents circulate in the plate. Their magnetic field opposes the increase, which means the magnetic force on the plate opposes its motion. As the plate leaves the field, the flux is decreasing, the currents reverse, and the force again opposes the motion.

The result is a **magnetic brake**. Two features distinguish it from friction:

- It works without contact, so there is no wear between brake pads and wheel.
- The braking force falls to zero as the motion stops. At rest the flux is constant, so no eddy currents flow and no braking force remains. A magnetic brake cannot hold a stationary load the way a friction brake can.

The force grows with speed, so eddy-current braking is gentle at low speed and strong at high speed. This is desirable in trains, roller coasters and some gym equipment, where a smooth, speed-dependent retarding force is safer than a sudden grab.

## 3. Energy accounting

Where does the energy go? The eddy currents flow through the resistance of the metal, so electrical energy becomes **thermal energy**. The energy comes from the mechanical work done against the magnetic drag, or from the electrical supply that produces the changing field.

The heating can be dramatic. In an induction furnace, a crucible of metal is placed inside a coil carrying a high-frequency alternating current. The changing field induces large eddy currents in the metal, and the metal melts in its own Joule heating. No flame touches the charge. An induction cooktop uses the same idea on a smaller scale: the alternating field induces currents in the base of a steel or iron pan, heating the pan while the ceramic surface stays relatively cool.

## 4. Reducing unwanted eddy currents

In a transformer or an electric motor, eddy currents are a loss. The changing flux that links the windings also links the iron core, so the core heats up even though it is not part of the intended circuit. Two standard countermeasures are used.

**Lamination.** The core is built from thin sheets of steel, electrically insulated from one another by a thin oxide or varnish layer. Each sheet can still carry eddy currents, but only within its own thickness. The large loops that would have crossed the whole core are broken into many small, high-resistance loops. The total loss falls sharply.

**High-resistivity magnetic materials.** Ferrites are ceramic magnetic materials with much higher resistivity than steel. They are used in high-frequency transformers and inductors, where laminated steel would still dissipate too much.

The scaling is worth remembering. For a sheet of thickness $t$ in an alternating field of frequency $f$, the eddy-current power loss per unit volume has the form

$$
\frac{P}{V}\propto \frac{B^2f^2t^2}{\rho},
$$

where $\rho$ is the resistivity of the material. The exact numerical factor depends on geometry, but the dependencies are reliable: doubling the frequency quadruples the loss, and halving the thickness reduces the loss to about one quarter. This is why high-frequency cores are made of very thin laminations or of ferrite.

The $t^2$ dependence follows from Faraday’s law applied to a loop of size about $t$ inside the sheet. Around such a loop, $E(4t)\sim t^2\,dB/dt$, so the induced field is $E\sim t\,dB/dt$. The current density is $J=E/\rho$, and the power dissipated per unit volume is $J^2\rho\sim t^2(dB/dt)^2/\rho$. For a sinusoidal field, $dB/dt$ has amplitude $\omega B$, which gives the stated scaling.

## 5. Worked example: lamination saves power

A solid transformer core dissipates $36\ \text{W}$ in eddy currents at $50\ \text{Hz}$. The core is rebuilt from laminations, each one-quarter as thick as the original solid block, with the same total volume and the same magnetic flux. Estimate the new eddy-current loss.

For a fixed material and flux, the loss per unit volume scales as $t^2$. Replacing $t$ by $t/4$ multiplies the loss by

$$
\left(\frac14\right)^2=\frac{1}{16}.
$$

Thus

$$
P_{\text{new}}\approx\frac{36}{16}=2.25\ \text{W}.
$$

**Sanity check.** A reduction from $36\ \text{W}$ to about $2.3\ \text{W}$ is large but not miraculous; it is exactly what the $t^2$ scaling predicts for a fourfold thinner sheet. The remaining loss is not zero, because each lamination still has a finite thickness and can carry small currents. In a real transformer, hysteresis loss in the core also remains and is not reduced by lamination.

## 6. Applications where eddy currents are the point

| Device | How eddy currents are used |
| --- | --- |
| Electromagnetic brake | Opposes relative motion without contact; force falls as speed falls |
| Induction furnace | Large currents melt metal by Joule heating |
| Induction cooktop | Currents heat the pan base directly |
| Galvanometer damping | A metal vane between magnet poles damps oscillation without friction |
| Metal detector | A changing field induces currents in nearby metal, which alter the detector’s field |
| Coin validator | Distinguishes coins by their conductivity and magnetic response |
| Speedometer | A rotating magnet drags an aluminium cup by eddy currents, moving the needle |

## 7. A common mistake: eddy currents are not magnetic attraction

<learning-block type="mistake" title="“The magnet attracts the copper”">

A copper plate is not ferromagnetic, so the damping is not ordinary magnetic attraction. It is caused by **induced currents** driven by a changing flux. That is why the damping disappears when the plate is stationary, even though the magnet is still there.

Two related errors are common:

- **Thinking laminations stop eddy currents completely.** They reduce the currents by breaking up the conducting paths; they do not eliminate them.
- **Thinking eddy currents are always wasteful.** In a transformer core they are a loss, but in a brake, furnace or cooktop they are the intended mechanism.

If a question says a metal plate moves through a field, ask first whether the flux through it is changing. A stationary plate in a static field has no eddy currents, even if the field is strong.

</learning-block>

## Try it yourself

**A.** Why does a solid iron transformer core become hot in use, and why does a laminated core become less hot?

<details><summary>Show the reasoning</summary>

The alternating current produces an alternating magnetic flux in the core, which induces eddy currents in the iron. These currents dissipate $I^2R$ heat. Lamination divides the core into thin insulated sheets, so the eddy-current paths are short and have much higher resistance. The currents, and therefore the heating, are greatly reduced. Hysteresis heating is a separate effect and is not removed by lamination.

</details>

**B.** A copper disc spins between the poles of a magnet and then the driving torque is removed. Describe the braking torque, and state what happens once the disc stops.

<details><summary>Show the reasoning</summary>

While the disc rotates, different parts of it move through the field, so the flux through conducting loops in the disc keeps changing. Eddy currents flow, and their magnetic forces oppose the rotation. The braking torque decreases as the disc slows, because the induced emf and current decrease with speed. When the disc stops, the flux through each part is constant, the eddy currents cease, and the braking torque becomes zero.

</details>

**C.** A metal plate $0.20\ \text{m}$ wide moves at $3.0\ \text{m/s}$ through a $0.50\ \text{T}$ field, with the field, velocity and width mutually perpendicular. Estimate the emf that drives eddy currents across the plate.

<details><summary>Show the reasoning</summary>

Treat the width of the plate like the length of a moving rod:

$$
|\varepsilon|\approx B\ell v=(0.50)(0.20)(3.0)=0.30\ \text{V}.
$$

This is only the driving emf. The actual current depends on the resistance of the eddy-current paths, which is small in a thick conductor, so the currents can be large.

</details>

**D.** Why are ferrite cores preferred to steel cores in high-frequency transformers?

<details><summary>Show the reasoning</summary>

Ferrites have much higher electrical resistivity than steel. For the same changing flux, the eddy currents are smaller, so the $I^2R$ heating is smaller. At high frequency the induced emfs are large and the eddy-current loss in a conducting steel core would be unacceptable, so a high-resistivity magnetic material is needed.

</details>

## Remember

- Eddy currents are induced currents circulating in the bulk of a conductor when the flux through it changes.
- Lenz’s law makes them oppose relative motion: this gives contactless magnetic braking that vanishes at rest.
- They dissipate energy as heat; this is useful in induction heating and a loss in transformer cores.
- Laminations break up the conducting paths; eddy loss per unit volume scales roughly as $B^2f^2t^2/\rho$.
- Ferrites reduce eddy currents at high frequency because of their high resistivity.

The next module turns to a coil’s response to its **own** changing current, and then uses the same induction law to explain how a rotating coil generates an alternating emf.
