## An equation with a direction built into it

Faraday’s experiments give a qualitative rule: change the flux, get an emf. To use that rule we need a precise relation between the two, and a way to decide which way the induced current flows. The first is **Faraday’s law**; the second is **Lenz’s law**. The minus sign that links them is not decoration. It encodes one of the most reliable statements in physics: the induced effect always works against the change that produced it.

## 1. Faraday’s law of induction

For a circuit with a single loop, the induced emf is the negative rate of change of magnetic flux through it:

$$
\varepsilon=-\frac{d\Phi_B}{dt}.
$$

For a coil of $N$ turns, each turn is linked by the same flux, so the emf is $N$ times larger:

$$
\varepsilon=-N\frac{d\Phi_B}{dt}.
$$

If the flux changes at a steady rate, the average emf over an interval is

$$
\varepsilon_{\text{avg}}=-N\frac{\Delta\Phi_B}{\Delta t}.
$$

The unit check is immediate: flux is in webers and time in seconds, so

$$
1\ \text{V}=1\ \text{Wb/s}.
$$

The quantity $\varepsilon$ is an emf, not a force. It is the work per unit charge that the induced electric field would do around the circuit. A voltmeter across the coil reads the terminal voltage, which may differ from the emf if the coil has resistance.

<learning-block type="concept" title="The minus sign needs a convention">

A sign only means something after you choose a positive direction around the loop and a positive normal to its area. Choose the normal, then take the current direction given by the right-hand grip rule as positive. With that convention, the minus sign in Faraday’s law is Lenz’s law in symbols. In numerical work it is safer to compute the magnitude with $N|\Delta\Phi_B|/\Delta t$ and then find the direction physically.

</learning-block>

## 2. Lenz’s law: oppose the change

Lenz’s law states:

> The induced current flows in the direction that produces a magnetic field opposing the change in magnetic flux that caused it.

Notice the careful wording. The induced field opposes the **change**, not necessarily the external field.

- If the external flux is **increasing**, the induced field points **opposite** to the external field, trying to reduce the flux.
- If the external flux is **decreasing**, the induced field points **in the same direction** as the external field, trying to maintain the flux.

A reliable four-step method is:

1. Choose a normal and determine the direction of the external field through the loop.
2. Decide whether the flux through the loop is increasing or decreasing.
3. Draw the induced field: opposite the external field if the flux is increasing, along it if the flux is decreasing.
4. Use the right-hand grip rule on the induced field to find the current direction.

## 3. Two pictures of the same event

Imagine a circular loop lying in the plane of the page. A magnetic field points **into the page** and its magnitude is increasing.

- The flux into the page is increasing.
- The induced field must therefore point **out of the page**.
- Point the right thumb out of the page; the fingers curl **anticlockwise**. That is the induced current direction, viewed from the front.

Now reverse the change: let the same inward field decrease. The flux into the page is falling, so the induced field points **into the page** to support it. The right-hand grip rule now gives a **clockwise** current. Same loop, same field direction, opposite current, because the change reversed.

## 4. Why Lenz’s law has to be true

Lenz’s law is energy conservation in disguise. Suppose the induced current helped the change instead of opposing it. Push a magnet towards a coil: the coil would attract the magnet, accelerating it, which would increase the flux faster, which would increase the current, which would pull harder. The magnet and current would grow without any external work. That is a perpetual-motion machine.

In reality, pushing a magnet into a coil requires work against the magnetic repulsion. That mechanical work becomes electrical energy, and then usually heat in the coil’s resistance. Pulling the magnet out also requires work, because the coil now attracts the departing magnet. The direction of the force always resists the relative motion.

## 5. Worked example: emf, current and direction

A coil has $N=100$ turns and radius $r=5.0\ \text{cm}$. It lies perpendicular to a magnetic field that points into the page. The field increases uniformly from zero to $0.20\ \text{T}$ in $0.10\ \text{s}$. The coil resistance is $2.0\ \Omega$. Find the average emf, the current, and the direction of the current.

The area is

$$
A=\pi r^2=\pi(0.050)^2=7.85\times10^{-3}\ \text{m}^2.
$$

The flux through one turn changes by

$$
|\Delta\Phi_B|=BA=(0.20)(7.85\times10^{-3})=1.57\times10^{-3}\ \text{Wb}.
$$

Hence

$$
|\varepsilon|=N\frac{|\Delta\Phi_B|}{\Delta t}
=100\frac{1.57\times10^{-3}}{0.10}=1.57\ \text{V}.
$$

The current is

$$
I=\frac{|\varepsilon|}{R}=\frac{1.57}{2.0}=0.79\ \text{A}.
$$

For the direction: the external field into the page is increasing, so the induced field must point **out of the page**. Viewed from the front, the right-hand grip rule gives an **anticlockwise** current.

**Sanity check.** A $1.6\ \text{V}$ emf across $2.0\ \Omega$ gives about $0.8\ \text{A}$, consistent with the calculation. The current lasts only while the field is changing. Once the field is steady at $0.20\ \text{T}$, the flux is constant and the current falls to zero.

## 6. A useful connection: flux from area change

Faraday’s law is not restricted to changing field strengths. A rectangular loop of width $\ell$ whose length $x$ is increasing at speed $v$ has area $A=\ell x$. If the field is perpendicular to the loop and constant,

$$
\Phi_B=BA=B\ell x,
\qquad
\frac{d\Phi_B}{dt}=B\ell\frac{dx}{dt}=B\ell v.
$$

So the induced emf has magnitude

$$
|\varepsilon|=B\ell v.
$$

This is the **motional emf** of a rod sliding on rails, which we derive independently from the magnetic force on charges in the next module. The agreement between the two routes is a useful check on both.

<learning-block type="mistake" title="“The induced field always opposes the applied field”">

This is the classic Lenz’s-law error. The induced field opposes the **change** in flux, not the applied field itself.

- Field into the page, **increasing** → induced field out of the page.
- Field into the page, **decreasing** → induced field into the page.

If you always draw the induced field opposite the applied field, you will get the current direction wrong whenever the flux is decreasing. A second common slip is to count the turns twice: use $N\Delta\Phi_B/\Delta t$, where $\Delta\Phi_B$ is the flux through **one** turn, or use $\Delta(N\Phi_B)/\Delta t$ once. Do not multiply by $N$ in both places.

</learning-block>

## Try it yourself

**A.** A $40$-turn coil of area $0.015\ \text{m}^2$ is perpendicular to a field that falls from $0.60\ \text{T}$ to $0.20\ \text{T}$ in $0.20\ \text{s}$. Find the average emf magnitude.

<details><summary>Show the reasoning</summary>

The flux change per turn is

$$
|\Delta\Phi_B|=(0.60-0.20)(0.015)=6.0\times10^{-3}\ \text{Wb}.
$$

Thus

$$
|\varepsilon|=40\frac{6.0\times10^{-3}}{0.20}=1.2\ \text{V}.
$$

</details>

**B.** The coil in A lies in the plane of the page, and the external field points into the page and is decreasing. In which direction does the induced current flow, viewed from the front?

<details><summary>Show the reasoning</summary>

The inward flux is decreasing, so the induced field points **into the page** to oppose the decrease. The right-hand grip rule with the thumb into the page gives a **clockwise** current.

</details>

**C.** A bar magnet is dropped through a horizontal coil, with its north pole leading downward. Describe the induced current as the magnet approaches and after it has passed below the coil.

<details><summary>Show the reasoning</summary>

Below a north pole the field points downward. As the magnet approaches, the downward flux through the coil increases, so the induced field points upward. Viewed from above, that is an **anticlockwise** current.

After the magnet passes below the coil, the downward flux is decreasing. The induced field now points downward, so the current reverses and is **clockwise** viewed from above. The current changes direction as the magnet leaves, which is why the galvanometer deflection reverses.

</details>

## Remember

- Faraday’s law: $\varepsilon=-N\,d\Phi_B/dt$; the average form uses $\Delta\Phi_B/\Delta t$.
- The emf exists only while the flux is changing, and it is larger when the change is faster.
- Lenz’s law: the induced current opposes the **change** in flux, not the flux itself.
- Increasing flux → induced field opposes the external field; decreasing flux → induced field supports it.
- Lenz’s law is energy conservation: the induced effect always resists the motion or change that drives it.

The next module applies these ideas to a conductor moving through a field, where the flux change comes from motion and the energy accounting becomes especially clear.
