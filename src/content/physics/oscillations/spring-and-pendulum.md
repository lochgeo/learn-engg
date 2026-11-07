## From a generic ω to real systems

Everything so far has been written in terms of $\omega$, the property of "some oscillator". Real problems hand you a spring and a block, or a string and a bob, and ask *how long one cycle takes*. This lesson evaluates the defining condition $a=-\omega^2x$ for the two systems every syllabus lives on:

$$
\omega=\sqrt{\frac{k}{m}}
\qquad\text{and}\qquad
T=2\pi\sqrt{\frac{L}{g}},
$$

plus the wiring around them: springs combined in series and parallel, springs hanging vertically, and the *physical* pendulum where the swinging body is not a point mass. The method never changes — write Newton's second law for a small displacement from equilibrium, collect the coefficient, read off $\omega^2$.

## 1. The spring–mass oscillator

A mass $m$ on a spring of constant $k$ displaced by $x$ from its relaxed state feels $F=-kx$; so $ma=-kx$ gives $a=-(k/m)x$. Comparing with $a=-\omega^2x$:

$$
\omega=\sqrt{\frac{k}{m}},\qquad
T=2\pi\sqrt{\frac{m}{k}},\qquad
f=\frac{1}{2\pi}\sqrt{\frac{k}{m}}.
$$

Mass-reading: a stiffer spring (larger $k$) or a lighter mass (smaller $m$) makes faster oscillation. And as established earlier, the period is independent of amplitude — the whole point of the harmonic regime.

<learning-block type="example" title="Worked example: the desk oscillator">

A block of $m=0.25\ \text{kg}$ sits on a frictionless surface attached to a spring of $k=100\ \text{N/m}$. Sliding: $\omega=\sqrt{100/0.25}=20\ \text{rad/s}$, hence $T=2\pi/\omega=2\pi/20\approx0.31\ \text{s}$ and $f\approx3.2\ \text{Hz}$. Sanity check on $k/m$: units are $\text{N}\,\text{m}^{-1}/\text{kg}=\text{kg}\,\text{m}\,\text{s}^{-2}\,\text{m}^{-1}\,\text{kg}^{-1}=\text{s}^{-2}$, so $\omega$ comes out in $\text{s}^{-1}$ — radians per second, as expected.

</learning-block>

## 2. Springs in series and in parallel

Combos of identical-looking question but different physics:

- **Parallel** (both springs stretch by the same extension $x$; forces add): $k_{\text{eff}}=k_1+k_2$.
- **Series** (both springs carry the same force; extensions add): $\dfrac{1}{k_{\text{eff}}}=\dfrac{1}{k_1}+\dfrac{1}{k_2}$.

Two springs of the *same* constant $k$: in series the effective constant halves to $k/2$, so the period grows by $\sqrt2$; in parallel it doubles to $2k$, so the period shrinks by $\sqrt2$. The mnemonic worth keeping: springs combine like capacitors — reciprocals in series, direct constants in parallel.

For springs of $k_1=100\ \text{N/m}$ and $k_2=300\ \text{N/m}$: in parallel, $k_{\text{eff}}=400\ \text{N/m}$; in series, $1/k_{\text{eff}}=1/100+1/300=4/300$, so $k_{\text{eff}}=75\ \text{N/m}$. Note that the series arrangement is always *softer* than either spring alone.

## 3. The vertical spring: gravity moves the centre, not the period

Hang the block from a vertical spring. It sits in equilibrium where $k\,\delta=mg$, i.e. stretched by $\delta=mg/k$ below the natural length. Now displace by $y$ from *that equilibrium*: the net extra force is $-ky$, gravity being constant. Newton's law again reads $ma=-ky$, so

$$
\omega=\sqrt{\frac{k}{m}}
$$

exactly as on the table — gravity has shifted the centre of oscillation but changed nothing about the oscillation. Two consequences:

- Amplitude must be measured from the **equilibrium position**, not the unstretched length.
- For **any** constant effective gravity — stronger, weaker, zero — the period is the same; only the equilibrium position shifts by $mg_{\text{eff}}/k$. Gravity changes where the oscillator sits, never how quickly it beats.

## 4. The simple pendulum

For a bob of mass $m$ on a light string of length $L$, displaced by angle $\theta$, the tangential restoring force is $-mg\sin\theta$. For small $\theta$ (say up to $10^\circ$–$15^\circ$), $\sin\theta\approx\theta$ in radians, and with arc length $s=L\theta$:

$$
m\frac{d^2s}{dt^2}=-mg\,\theta=-\frac{mg}{L}\,s
\;\Rightarrow\;
\omega=\sqrt{\frac{g}{L}},\qquad
T=2\pi\sqrt{\frac{L}{g}}.
$$

Three signatures of this formula, each guaranteeing an exam question somewhere:

- **Mass cancels** — force and inertia both carry the mass.
- **Only $g$ and $L$ matter** — amplitude (within small-angle) does not.
- **Only $g_{\text{eff}}$ in the formula** — a lift accelerating upward at $a$ presses the bob down harder, so the bob behaves as if $g_{\text{eff}}=g+a$ and $T$ shortens; accelerating downward at $a$ gives $g_{\text{eff}}=g-a$, and in free fall $g_{\text{eff}}=0$, when the pendulum simply does not oscillate (there is no restoring tension at all).

<learning-block type="example" title="Worked example: the seconds pendulum">

With $g=10\ \text{m/s}^2$, find the length of a pendulum with $T=2.0\ \text{s}$. Squaring the period formula: $L=gT^2/4\pi^2=10(4.0)/39.48\approx1.01\ \text{m}$. Sanity check: roughly a metre — the everyday experience that a desk pendulum swings rather fast, a doorway pendulum about once every two seconds, agrees.

</learning-block>

## 5. The physical pendulum

A rigid body pivoted about a horizontal axis — a bar, a door, a swinging plate — behaves similarly: displaced by angle $\theta$, the restoring **torque** is $\tau=-mgd\sin\theta$ with $d$ the distance from pivot to centre of mass. Small-angle approximation, $\tau=I(d^2\theta/dt^2)$ with $I$ the moment of inertia about the pivot, gives

$$
\omega=\sqrt{\frac{mgd}{I}},\qquad
T=2\pi\sqrt{\frac{I}{mgd}}.
$$

Setting $I=md^2$ (whole mass concentrated at distance $d$) recovers $T=2\pi\sqrt{d/g}$ — the simple pendulum as a special case. A uniform rod of length $L$ pivoted at one end has $I=mL^2/3$ and $d=L/2$, so

$$
T=2\pi\sqrt{\frac{2L}{3g}},
$$

e.g. $L=1.2\ \text{m}$ at $g=10\ \text{m/s}^2$: $T=2\pi\sqrt{2.4/30}=2\pi(0.283)\approx1.78\ \text{s}$. Compared with a simple pendulum of the same length $L$, the rod is faster, because much of its mass sits closer to the pivot.

<learning-block type="mistake" title="“A heavier bob swings more slowly”">

The reflex "more mass → slower" fails here twice over. In $ma=-mg\sin\theta$ the mass appears on both sides and cancels; in $T=2\pi\sqrt{m/k}$ for a spring–mass system heavier *slows* the motion — but only there, because the restoring force $-kx$ does **not** carry the mass. So: pendulum period is mass-independent; spring–mass period grows with $\sqrt{m}$. A related trap is measuring $L$ from the *support to the top of the bob* rather than the centre of the bob — the formula wants the centre of mass of the whole swinging assembly.

</learning-block>

## Try it yourself

**1.** A $0.50\ \text{kg}$ block is hung from two springs, each of $k=200\ \text{N/m}$, connected one below the other (that is, in series). What is the period?

<details><summary>Show the reasoning</summary>

Springs one after the other are in **series**: $1/k_{\text{eff}}=1/200+1/200$, so $k_{\text{eff}}=100\ \text{N/m}$. Then $T=2\pi\sqrt{m/k_{\text{eff}}}=2\pi\sqrt{0.50/100}=2\pi\sqrt{0.005}=2\pi(0.0707)\approx0.44\ \text{s}$.
</details>

**2.** A pendulum has period $T$ on Earth. Taken to a planet with surface gravity $g/4$, what is its new period?

<details><summary>Show the reasoning</summary>

$T=2\pi\sqrt{L/g}\propto1/\sqrt g$. With $g\to g/4$, $T\to2T$: the period doubles. Note the mass of the bob would make no difference however heavy the planet.
</details>

**3.** A pendulum clock keeps perfect time in London. At the equator, where $g$ is about $0.5\%$ smaller, will it run fast or slow, and which single adjustment repairs it?

<details><summary>Show the reasoning</summary>

Smaller $g$ means larger $T=2\pi\sqrt{L/g}$, so each beat lasts longer and the clock **loses** time (runs slow). Since $T\propto\sqrt L$, the fix is to **shorten** the pendulum — by a fractional amount about half of the $0.5\%$, i.e. roughly $0.25\%$, to bring $T$ back down.
</details>

## Remember

- Spring–mass: $\omega=\sqrt{k/m}$, $T=2\pi\sqrt{m/k}$. Stiffer and lighter swing faster; amplitude plays no part.
- Springs in **parallel** add constants; in **series** their reciprocals add (weakest arrangement). Two identical springs: $k/2$ in series, $2k$ in parallel.
- A vertical spring's oscillation is unchanged by gravity except that the equilibrium shifts by $mg/k$; measure amplitude *from equilibrium*.
- Simple pendulum: $T=2\pi\sqrt{L/g}$ — mass-free, amplitude-free (small angles), and depends on effective $g$ (lift upward: $g+a$; free fall: no oscillation).
- Physical pendulum: $T=2\pi\sqrt{I/(mgd)}$, giving $2\pi\sqrt{2L/3g}$ for a uniform rod pivoted at its end.

## Up next

One family of formulas remains before oscillators meet resistance. The next lesson, *SHM and uniform circular motion*, closes the loop opened in the first lesson: the reference circle gives the general solution $x=A\cos(\omega t+\phi)$, a foolproof way to read the initial phase from initial conditions, and the method for combining two simple harmonic motions into one.

*(Session note: this module's coverage of spring combinations, the vertical spring and the physical pendulum completes the toolkit used later in the chapter review.)*
