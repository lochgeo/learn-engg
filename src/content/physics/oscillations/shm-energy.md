## The exchange that keeps the motion going

Stand a pendulum swinging and watch: at the ends of the swing it momentarily stops, at the centre it flashes through fastest. Nothing is being rushed or delayed by any outside help — the motion persists because energy is being handed back and forth between two accounts. At the extremes the energy sits entirely in the **potential** account (stretched spring, height gained); at the centre it sits entirely in the **kinetic** account; in between the two accounts always sum to the same total. This lesson makes that bookkeeping exact, and the energy view turns out to be the *fastest* route to several results you already met in kinematics.

Throughout, take a system whose small oscillations are harmonic, so the restoring force is $F=-kx$ and $\omega^2=k/m$. For the spring–mass oscillator $k$ is the spring constant; the final formulas depend only on $\omega$, so they transfer unchanged to pendulums and every other harmonic system.

## 1. The two accounts

**Potential energy.** Stretching or compressing the spring by $x$ stores

$$
U(x)=\frac12kx^2=\frac12\,m\omega^2x^2.
$$

It is zero at the equilibrium position and grows symmetrically on both sides — a parabola in $x$.

**Kinetic energy.** Using $v=\pm\omega\sqrt{A^2-x^2}$ from the last lesson,

$$
K=\frac12mv^2=\frac12m\omega^2(A^2-x^2)=\frac12k(A^2-x^2).
$$

**Total.** Adding them, the $x$-dependence cancels:

$$
E=K+U=\frac12kA^2=\frac12\,m\omega^2A^2=\frac12\,mv_{\max}^2.
$$

Three useful readings of one equation:

- The total energy is **fixed by the amplitude alone** (given the system). Doubling the amplitude **quadruples** the energy, because $E\propto A^2$.
- $E=\frac12m\omega^2A^2$ connects to the kinematic quantities: rearranging $E=\frac12m(\omega A)^2$ shows the top speed must be $v_{\max}=\omega A$, in agreement with the last lesson.
- $E$ does **not** depend on the period, the phase, or where the oscillator currently is. It is set once, at the moment you set the amplitude (that is, when the motion starts).

<learning-block type="concept" title="A caution about systems and zeros">

$U=\frac12kx^2$ already *chooses its own zero* at the equilibrium position; it is the spring's energy measured relative to equilibrium, the only bookkeeping in which $K+U$ comes out constant. For a **vertical** spring the gravitational potential energy shifts the equilibrium downward by $mg/k$; oscillations about that *new* equilibrium still satisfy $E=\frac12kA^2$ with $A$ measured from equilibrium — the extra constant just gets absorbed. When in doubt, measure displacement and potential energy from the equilibrium state the oscillator actually oscillates about.

</learning-block>

## 2. The energy–position graph

Plot $U=\frac12kx^2$: a parabola with its vertex at the origin. Draw a horizontal line at height $E=\frac12kA^2$; where that line meets the parabola ($x=\pm A$) are the **turning points**, beyond which $K$ would be negative — impossible. Between them, the vertical gap between the line and the parabola is $K=E-U$, so:

- at $x=0$: $U=0$, $K=E$ — full kinetic account;
- at $x=\pm A$: $K=0$, $U=E$ — full potential account;
- where $K=U$, the gap and the shaded parabola region are equal, which forces
  $\frac12kx^2=\tfrac{E}{2}=\tfrac14kA^2$, so
  $|x|=A/\sqrt2\approx0.71A$.

Each crossing point splits the total energy half and half. A favourite exam question simply asks *where* kinetic and potential energy are equal, or *what fraction* of $E$ is kinetic at some stated displacement.

Fractions at $x=A/2$ (also popular): $U=\frac12k(A/2)^2=E/4$, so $K=3E/4$. Kinetic energy still holds three quarters even halfway out.

## 3. The energy–time graphs

Substitute $x=A\cos\omega t$:

$$
U(t)=\frac12kA^2\cos^2(\omega t+\phi),
\qquad
K(t)=\frac12kA^2\sin^2(\omega t+\phi).
$$

Both accounts bob up and down between $0$ and $E$ — but notice they oscillate at **twice the frequency** of the displacement, because they peak twice per cycle (once each side of equilibrium). Averaged over a full cycle, $\langle\cos^2\rangle=\langle\sin^2\rangle=1/2$, so each account holds, on average, exactly half the total energy:

$$
\langle K\rangle=\langle U\rangle=\frac{E}{2}.
$$

## 4. The same bookkeeping for a pendulum

For a simple pendulum of length $L$ and small amplitude $\theta_{\max}$ in radians, height change is $h=L\theta_{\max}^2/2$ at the extreme, so

$$
E=mgL\frac{\theta_{\max}^2}{2},
$$

and the speed at angle $\theta$ follows from $E=K+mgh(\theta)$ exactly as before. The algebra differs ($\theta$ replaces $x$), the pattern does not.

## Worked example

A block of mass $m=0.50\ \text{kg}$ on a frictionless surface is attached to a spring of constant $k=200\ \text{N/m}$, pulled out to $A=10\ \text{cm}$ and released.

**Step 1 — total energy.** $E=\frac12kA^2=\frac12(200)(0.10)^2=1.0\ \text{J}$.

**Step 2 — angular frequency and max speed.** $\omega=\sqrt{k/m}=\sqrt{200/0.50}=20\ \text{rad/s}$; $v_{\max}=\omega A=2.0\ \text{m/s}$.

**Step 3 — check by kinetic energy.** $K_{\max}=\frac12(0.50)(2.0)^2=1.0\ \text{J}=E$. Consistent.

**Step 4 — at $x=5.0\ \text{cm}$.** $U=\frac12(200)(0.050)^2=0.25\ \text{J}$, so $K=E-U=0.75\ \text{J}$ and

$$
|v|=\sqrt{2K/m}=\sqrt{2(0.75)/0.50}\approx1.7\ \text{m/s}.
$$

Cross-check with the kinematic route: $|v|=\omega\sqrt{A^2-x^2}=20\sqrt{0.0100-0.0025}=20(0.0866)\approx1.7\ \text{m/s}$. The two independent routes agree — a habit worth copying: when a shortcut is new, run the long way once.

<learning-block type="mistake" title="“At the centre the energy is zero”">

Because the potential energy $\frac12kx^2$ vanishes at $x=0$, learners sometimes conclude the oscillator "has no energy" as it sweeps through equilibrium. It has **all** of it — the total $E$ is constant at every position; only the *split* between $K$ and $U$ moves. A second, related slip is scaling energy linearly with amplitude: since $E\propto A^2$, an oscillator pulled to $3A$ stores nine times the energy, not three. If an exam option list offers $E/4$ and $E/2$ for the potential energy at $x=A/2$, the answer is $E/4$ — compute the square before thinking thirds.

</learning-block>

## Try it yourself

**1.** A block of mass $0.25\ \text{kg}$ rides on a spring of constant $k=100\ \text{N/m}$ with amplitude $4.0\ \text{cm}$. Find the total energy, the angular frequency and the maximum speed.

<details><summary>Show the reasoning</summary>

$E=\frac12(100)(0.040)^2=0.080\ \text{J}$. $\omega=\sqrt{100/0.25}=20\ \text{rad/s}$. $v_{\max}=\omega A=20(0.040)=0.80\ \text{m/s}$. Check: $K_{\max}=\frac12(0.25)(0.80)^2=0.080\ \text{J}$ — matches.
</details>

**2.** At what displacement of any harmonic oscillator are kinetic and potential energies equal, and what is the speed there in terms of $v_{\max}$?

<details><summary>Show the reasoning</summary>

 Equal shares need $U=E/2$, so $\frac12kx^2=\frac14kA^2$, giving $|x|=A/\sqrt2\approx0.71A$. There $K=E/2=\frac12mv^2$, so $v=v_{\max}/\sqrt2$.
</details>

**3.** The amplitude of an oscillator is somehow increased from $A$ to $3A$ by an external push. By what factor does its total energy change? By what factor does its maximum speed change?

<details><summary>Show the reasoning</summary>

$E\propto A^2$, so the energy becomes $9E$. But $v_{\max}=\omega A$ depends linearly on amplitude, so the maximum speed merely triples — provided the system's $\omega$ is unchanged (same spring and mass).
</details>

## Remember

- $E=K+U=\frac12kA^2=\frac12m\omega^2A^2$: fixed by amplitude; doubling $A$ quadruples $E$.
- At every instant $K=E-U$; the oscillator is never "energyless" at the centre — kinetic energy is simply at its peak there.
- On the $U(x)$ parabola, the horizontal line $E$ cuts the $x$-axis at the turning points $\pm A$, and $K=U$ at $|x|=A/\sqrt2$, where each holds $E/2$.
- $K(t)$ and $U(t)$ each oscillate at twice the displacement frequency, averaging $E/2$ each over a cycle.
- Energy methods often beat kinematic ones in this chapter: write $E$ once, subtract $U(x)$, and the speed follows.

## Up next

So far every formula carries a generic $\omega$. The next lesson, *Spring-mass systems and the pendulum*, finally evaluates $\omega$ for the two workhorse systems — $\omega=\sqrt{k/m}$ for spring–mass, $2\pi\sqrt{L/g}$ for the pendulum — and covers the arrangements exams love: springs in series and in parallel, vertical springs, and the physical pendulum.
