## Stretching a solid is storing work

Draw a bow, compress the spring of a watch, load the cable of a crane — in every case work has been pumped into a deformed solid and parked there as elastic potential energy. This module keeps the account: how much work stretching a wire actually costs, where that energy lives in the material, and the small but important fraction that never comes back because of hysteresis.

## 1. Work done in stretching a wire

Stretching a wire from $0$ to $\Delta L$ in the Hooke region needs a force that grows uniformly from zero to its final value $F$. You cannot bill the work at the full final force for the whole distance — the force *starts* at zero. Averaging the smoothly varying force gives

$$
W=\frac{1}{2}\,F\,\Delta L.
$$

On a graph of force against extension the work is the **area under the curve**: a triangle with base $\Delta L$ and height $F$. If the stretching is done slowly (quasi-statically) and stays within the elastic region, essentially all of this work is stored as elastic potential energy in the stretched wire, released intact when the wire is allowed to shorten again.

## 2. Energy density: where the energy lives

The stored energy is spread through the material. Divide by the wire's volume $V=AL$:

$$
u=\frac{U}{AL}
=\frac{\frac12F\Delta L}{AL}
=\frac12\,\sigma\varepsilon
=\frac12\,Y\varepsilon^2
=\frac{\sigma^2}{2Y}.
$$

This **energy density** $u$ is energy per unit volume, in $\text{J/m}^3$ — a quantity with exactly the dimensions of pressure, which is one reason stress-strain ideas keep reappearing inside thermodynamics. All three forms are useful: the first works with directly given data, the second works purely in strain, and the third is handy when you know the stress rather than the extension. Since $u\propto\varepsilon^2$, doubling the strain quadruples the stored energy per unit volume — pushing a spring twice as far costs four times the energy.

Note the scope: $u=\tfrac12\sigma\varepsilon$ assumes a linear loading curve. Beyond the proportional limit the correct energy per unit volume is the *area under the actual stress–strain curve*, which is larger than the triangle.

## 3. The spring analogy: a wire is a spring with $k=YA/L$

Compare $F=\dfrac{YA}{L}\Delta L$ with $F=k x$: a stretched wire is a spring with effective stiffness

$$
k=\frac{YA}{L},
\qquad
U=\frac12\,k\,(\Delta L)^2.
$$

The formula carries real intuition: thick, short, stiff-material objects are stiff springs; thin, long, soft wires are compliant ones. Cut a wire into two equal halves and each half has $k'=2k$ and stores half the energy of the original under the same total load. This is also why real machinery does not try to store elastic energy in straight bars: a helical coil multiplies the extension a given piece of metal can experience, capturing far more energy per kilogram than a straight wire ever could.

### What a change of length does to stiffness and energy

Doubling a wire's length by joining two identical wires end to end halves the effective constant: $k'=YA/2L=k/2$ — compliances in series add, exactly as springs in series do. It also doubles the stored energy at the same final force, since

$$
U'=\frac{F^2}{2k'}=\frac{F^2}{2(k/2)}=2\,U.
$$

The consistency check is satisfying: each half carries the full force and stores $U=\frac12F^2/k$ on its own, and the two halves add back to $2U$. Stress, by contrast, is unchanged by the extra length — stress lives in the cross-section, while extension, compliance and stored energy all grow with length.

## 4. Worked example: energy in a stretched steel wire

Take the chapter's running specimen: a steel wire of length $L=2.0\ \text{m}$, area $A=1.0\times10^{-6}\ \text{m}^2$, carrying $F=100\ \text{N}$, with $Y=2.0\times10^{11}\ \text{Pa}$. From the first module, $\Delta L=1.0\ \text{mm}$, $\sigma=1.0\times10^8\ \text{Pa}$, $\varepsilon=5.0\times10^{-4}$.

**Energy stored.**

$$
U=\frac12 F\Delta L=\frac12(100)(1.0\times10^{-3})=5.0\times10^{-2}\ \text{J}.
$$

**Energy density.** The wire's volume is $AL=(1.0\times10^{-6})(2.0)=2.0\times10^{-6}\ \text{m}^3$, so

$$
u=\frac{0.050}{2.0\times10^{-6}}=2.5\times10^4\ \text{J/m}^3.
$$

**Cross-check via the density formula.**

$$
u=\frac12\sigma\varepsilon=\frac12(1.0\times10^8)(5.0\times10^{-4})=2.5\times10^4\ \text{J/m}^3.
$$

Both routes agree, which is the point: any value of $u$ must match $\dfrac{1}{2}\sigma\varepsilon$ exactly, because the triangle's area is the same fact written two ways.

**A sobering comparison.** The wire's mass is $\rho AL=(7.8\times10^3)(2.0\times10^{-6})\approx0.016\ \text{kg}$, so it stores only about $3\ \text{J per kilogram}$. Fuels and batteries store millions of joules per kilogram. Springs are for *short bursts and precise release*, not for bulk energy storage.

## 5. Energy lost in hysteresis

When a material is loaded and unloaded along different branches of its stress–strain curve, the work put in exceeds the work recovered by the **area of the hysteresis loop**:

$$
\text{dissipated per cycle}=(\text{loop area})\times(\text{volume}).
$$

That energy is gone from the mechanical account; it has become thermal energy inside the material. A practical estimate makes the idea concrete. A $50\ \text{g}$ rubber ball dropped from $1.0\ \text{m}$ rebounds to $0.6\ \text{m}$: the mechanical energy lost per bounce is $mg\,\Delta h$, about $(0.05)(10)(0.40)=0.20\ \text{J}$. With a ball volume of $5\times10^{-5}\ \text{m}^3$, the loop area contributes roughly $0.20/5\times10^{-5}=4\times10^3\ \text{J/m}^3$ of energy per cycle per unit volume — small numbers per bounce, large numbers across thousands of bounces, and tyres, dampers and mounts warm up accordingly.

So the design question is always which role the material plays. Spring steel is chosen where the loop must be thin (clock springs, machine suspensions); rubber compounds are chosen where the loop must be thick (vibration isolation, shoe soles, tyre tread rubber for grip).

<learning-block type="mistake" title="The missing half">

- **Using $W=F\Delta L$ with the *final* force.** That over-counts by a factor of two for a linearly rising force. The correct quasi-static result is $\frac12F\Delta L$. ($F\Delta L$ would be right only if the full force acted throughout, which is not the case when stretching from zero.)
- **Forgetting the wire's own force direction.** During stretching, the *external agent* does $+\frac12F\Delta L$ while the wire's resistive force does $-\frac12F\Delta L$. The wire stores the energy; it does not do positive work on the agent.
- **Applying $u=\frac12\sigma\varepsilon$ past the proportional limit.** Beyond it, take the area under the measured curve instead — the stored energy is larger than the triangular estimate.

</learning-block>

## Try it yourself

**A.** A load stretches a steel wire by $0.50\ \text{mm}$, the final tension being $200\ \text{N}$. How much elastic energy is stored?

<details><summary>Show the reasoning</summary>

$U=\frac12F\Delta L=\frac12(200)(0.50\times10^{-3})=0.050\ \text{J}$. Note the loading force started at zero, so the average force was $100\ \text{N}$ over the $0.50\ \text{mm}$.
</details>

**B.** Find the elastic energy density in a material stretched to a strain of $2.0\times10^{-4}$, given $Y=2.0\times10^{11}\ \text{Pa}$.

<details><summary>Show the reasoning</summary>

$u=\frac12Y\varepsilon^2=\frac12(2.0\times10^{11})(2.0\times10^{-4})^2=\frac12(2.0\times10^{11})(4.0\times10^{-8})=4.0\times10^3\ \text{J/m}^3$. Strain enters squared, so weaker deformations store surprisingly little.
</details>

**C.** A rubber mount of volume $1.0\times10^{-4}\ \text{m}^3$ dissipates $2.0\times10^4\ \text{J/m}^3$ per cycle and is cycled $10$ times per second. Estimate the rate at which it heats its surroundings.

<details><summary>Show the reasoning</summary>

Energy per cycle: $(2.0\times10^4)(1.0\times10^{-4})=2.0\ \text{J}$. At $10$ cycles/s, the dissipated power is about $20\ \text{W}$. That continuous trickle of heat is why such mounts stay warm in service.
</details>

## Remember

- Work done stretching a Hookean wire is $W=\frac12F\Delta L$; the stored energy equals it for slow loading within the elastic region.
- Stress it as $u=\frac12\sigma\varepsilon=\frac12Y\varepsilon^2=\sigma^2/2Y$, in $\text{J/m}^3$; triple check which of stress or strain you have been given.
- A wire of material $Y$, area $A$, length $L$ is a spring of constant $k=YA/L$.
- The hysteresis loop area times volume is energy lost per cycle — the basis of every vibration damper.
- Next module: temperature is another way to change a solid's dimensions — and when expansion is blocked, *stress* replaces *motion*.
