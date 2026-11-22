## The big idea

Dimensions describe the kind of quantity in an equation, independent of the particular units used. Length has dimension $[L]$, time $[T]$, and mass $[M]$. Dimensional analysis uses these labels to check whether a physical equation could be correct.

## Start here

The bracket notation looks abstract, but you already think this way: calling a speed "metres per second" is really naming it by length and time. Speed is distance divided by time, so its dimension is $[L][T]^{-1}$. Acceleration is change in speed divided by time, giving $[L][T]^{-2}$. A force has the dimensions of mass multiplied by acceleration: $[M][L][T]^{-2}$.

For an equation to be dimensionally consistent, the dimensions on its left and right sides must match. Quantities added together must also have the same dimensions. This is a quick check, not a proof: an equation can pass the check and still have the wrong numerical constant.

### The principle of homogeneity

Every term added, subtracted or equated must carry the same dimensions. $s = ut + \tfrac12 a t^3$ breaks the rule immediately: $ut$ is a length, $a t^3$ is not, so no version of that equation can describe a position. Pure numbers ($\tfrac12$, $\pi$, a count of objects) are dimensionless and never affect the check.

### Dimensions of common derived quantities

| Quantity | Built from | Dimensions |
| --- | --- | --- |
| Area | length × length | $[L]^{2}$ |
| Volume | length cubed | $[L]^{3}$ |
| Speed | length ÷ time | $[L][T]^{-1}$ |
| Acceleration | speed ÷ time | $[L][T]^{-2}$ |
| Force | mass × acceleration | $[M][L][T]^{-2}$ |
| Momentum | mass × velocity | $[M][L][T]^{-1}$ |
| Pressure | force ÷ area | $[M][L]^{-1}[T]^{-2}$ |
| Energy or work | force × distance | $[M][L]^{2}[T]^{-2}$ |
| Power | energy ÷ time | $[M][L]^{2}[T]^{-3}$ |
| Density | mass ÷ volume | $[M][L]^{-3}$ |
| Frequency | reciprocal time | $[T]^{-1}$ |
| Strain, angle, magnification | ratio of like quantities | $[M^{0}L^{0}T^{0}]$ |

Read the last rows twice. Pressure shares its dimensions with **energy density** (energy ÷ volume reduces to the same combination), and energy shares its own with **torque** (force × distance, however you group it). A dimension labels a quantity's *type*, never its identity.

## Worked example

### Check the distance formula

Suppose an object starts from rest and accelerates uniformly. A proposed relation is $s = \frac12 at^2$. The left side has dimension $[L]$. On the right:

$$
[a][t]^2 = ([L][T]^{-2})[T]^2 = [L]
$$

Both sides have the dimension of length, so the formula passes this dimensional check.

### The units of a constant

Newton's law of gravitation is $F = G\,m_1 m_2 / r^2$. Solve for the constant:

$$
G=\frac{F r^{2}}{m_1 m_2} \quad\Rightarrow\quad [G]=\frac{[M][L][T]^{-2}\,[L]^{2}}{[M]^{2}}=[M]^{-1}[L]^{3}[T]^{-2}.
$$

That is exactly what the published unit says: $G = 6.67 \times 10^{-11}\ \text{N·m}^2\text{/kg}^2$, and because $1\ \text{N}=1\ \text{kg·m/s}^2$, the same unit reads $\text{m}^{3}\,\text{kg}^{-1}\,\text{s}^{-2}$. Dimensions and units must tell the same story.

### Deriving the form of a relation

The period $T$ of a simple pendulum is assumed to depend only on its length $l$ and on the gravitational field strength $g$: $T = k\,l^{a} g^{b}$ with $k$ dimensionless. Matching the powers of $L$ and $T$:

$$
[T]^{1}=[L]^{a}\left([L][T]^{-2}\right)^{b} \quad\Rightarrow\quad L: a+b=0, \qquad T: 1=-2b.
$$

So $a=\tfrac12$, $b=-\tfrac12$, and $T=k\sqrt{l/g}$ — the square-root law, with $k$ left as a blank. The value $k = 2\pi$ comes from experiment or from solving the dynamics, not from this method. And the true period drifts slightly with swing amplitude, but an amplitude is an angle: dimensionless, therefore invisible here.

## Where dimensional analysis fails

The pendulum shows the method's power and its limits at once. Keep the limits in view:

- **Dimensionless constants are unreachable.** The method gives $T \propto \sqrt{l/g}$ but never the $2\pi$ — just as it never supplies the $\tfrac12$ in $K=\tfrac12 mv^2$.
- **Dimensionless variables are invisible.** If the answer depends on a ratio — an angle, a coefficient of friction, a shape factor — no exponent equation in $[M]$, $[L]$, $[T]$ can ever see it.
- **Too many variables leave the exponents underdetermined.** Mechanics has three base dimensions, so a relation among up to three dimensional quantities can be pinned down; with four or more, the equations run out before the unknowns do.
- **Transcendental functions are off-limits.** $A\sin(\omega t)$ and $N_0 e^{-\lambda t}$ pass the check only once the arguments are known to be dimensionless; dimensional analysis cannot *discover* a sine or an exponential.
- **One dimension, many quantities.** Torque and energy, pressure and energy density share dimensions yet remain different physics. The method classifies; it does not identify.
- **Scalars and vectors look identical.** Dimensions carry no information about direction.

<learning-block type="mistake" title="Over-reading a passed check">

A dimensionally consistent equation is a *candidate*, not a proven result — $\tfrac12$, $1$ and $2\pi$ all pass. Equally common: assuming matching dimensions means matching quantities, and writing expressions such as $5\ \text{m} + 12\ \text{s}$ that add a length to a time. The check works term by term: everything added, subtracted or equated must share the same dimensions, and nothing more can be concluded from a pass.

</learning-block>

## Try it yourself

**Could the equation $v = u + at$ be dimensionally consistent?**

<details>
<summary>Reveal the explanation</summary>

Yes. Velocity $v$ and initial velocity $u$ both have dimension $[L][T]^{-1}$. Acceleration times time has dimension $([L][T]^{-2})[T] = [L][T]^{-1}$, so all terms match.
</details>

**Planck's constant appears in $E = h\nu$, linking a quantum's energy to its frequency. What are its dimensions?**

<details>
<summary>Reveal the explanation</summary>

$h = E/\nu$, so $[h] = [E]/[\nu] = [M][L]^{2}[T]^{-2} \div [T]^{-1} = [M][L]^{2}[T]^{-1}$ — matching its unit, the joule-second.

</details>

**Radioactive decay follows $N = N_0 e^{-\lambda t}$. What does dimensional consistency force on $\lambda$, and could the method have predicted the exponential form?**

<details>
<summary>Reveal the explanation</summary>

The exponent $\lambda t$ must be dimensionless, so $[\lambda] = [T]^{-1}$: a decay constant is a rate, counted in $\text{s}^{-1}$. But dimensional analysis cannot produce $e^{-\lambda t}$ in the first place — exponential (and trigonometric) shapes come from the physics, not from matching powers.

</details>

The chapter's practice module and timed set put all of this — dimensions, significant figures and error arithmetic — under exam-style pressure.

## Remember

- Dimensions identify what kind of quantity is being measured.
- Every term in an equation must have matching dimensions.
- Passing the check does not guarantee that an equation is correct.
- A dimension classifies a quantity's type; several different quantities can share one dimension.
- The method cannot fix a dimensionless constant, cannot see dimensionless variables, and falls short when too many quantities are involved.
