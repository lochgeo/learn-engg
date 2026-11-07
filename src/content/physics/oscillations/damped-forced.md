## Friction never forgets

Every oscillator analysed so far traded kinetic and potential energy internally, forever. Real ones leak: air drags the pendulum bob, internal friction warms the spring, the support absorbs the vibration. Left alone, a real oscillator dies away. And kept alive by an outside pusher — a hand on the swing, a speaker driving a string, an earthquake rattling a building — its response depends dramatically on *how well the pusher's rhythm matches the oscillator's own natural rhythm*. That match is **resonance**, and engineering history names bridges and chimneys that met it badly. This lesson adds the two missing ingredients: damping and forcing.

## 1. The damping force

The most serviceable model for the damping effect — and the one every syllabus uses — is a force proportional and opposite to the velocity:

$$
F_d=-bv,
$$

with $b$ the damping constant (units $\text{N}\,\text{s/m}=\text{kg/s}$; check $bv=\text{kg/s}\cdot\text{m/s}=\text{kg}\,\text{m/s}^2=\text{N}$). Fluid resistance at modest speeds and the internal losses of a plucked string both fit this form reasonably, and it has one property that makes the mathematics tractable: being proportional to velocity is linear, so with the Hooke term it still gives a solvable equation.

Newton's second law for the damped spring–mass oscillator:

$$
m\frac{d^2x}{dt^2}+b\frac{dx}{dt}+kx=0.
$$

No oscillator is frictionless; this equation is the default reality and nothing in it contradicts the earlier chapters — set $b=0$ and everything from Lessons 1–4 returns intact.

## 2. What the damped motion looks like

For light damping the motion is still oscillatory, but each swing falls short of the last. The solution has the shape

$$
x(t)=A_0\,e^{-bt/2m}\cos(\omega' t+\phi),
$$

so the oscillation is wrapped in an **exponential envelope** $A(t)=A_0\,e^{-bt/2m}$: equal *time* intervals chop equal *fractions* off the amplitude. Two consequences to carry around:

- The frequency shifts slightly down: $\omega^2=\omega_0^2-(b/2m)^2$, where $\omega_0=\sqrt{k/m}$ is the undamped natural frequency. For weak damping the shift is tiny, and exam problems rarely resolve it.
- The energy, proportional to $A^2$, decays as $e^{-bt/m}$ — twice as fast in the exponent as the amplitude.

Because the envelope is exponential, it has a clean half-life analogue: the amplitude halves in time

$$
t_{1/2}=\frac{2m\,\ln 2}{b}.
$$

<learning-block type="example" title="Worked example: how long to fade">

A pendulum bob of mass $0.50\ \text{kg}$ swings through air that gives a damping constant $b=0.10\ \text{kg/s}$. The amplitude halving time is

$$
t_{1/2}=\frac{2(0.50)(0.693)}{0.10}\approx6.9\ \text{s}.
$$

So the amplitude falls to an eighth after three halvings, about $21\ \text{s}$ — consistent with the everyday experience that a kicked swing dies in well under a minute. As a proportion, after each further $6.9\ \text{s}$ the amplitude is half its earlier self; the *motion is never strictly finished*, it only sinks below every practical threshold.

</learning-block>

## 3. Light, critical, heavy

The damping constant relative to $2\sqrt{mk}$ sorts all damped systems into three regimes:

- **Light (underdamped):** oscillates while decaying — the regime above.
- **Critical damping:** the damping just strong enough to remove oscillation entirely; the system returns to equilibrium in the *shortest possible time without overshooting*. Deliberately engineered: door closers, galvanometer and balance needles, vehicle suspension.
- **Heavy (overdamped):** so much damping that the system creeps back without even one crossing — slower than critical, not faster.

A useful intuition: damping removes energy between crossings; the sweet spot is exactly enough to arrive once, not so much that the drag itself slows the return.

## 4. Forced oscillations and the steady state

Now push the oscillator periodically: the equation gains a driving term, for instance $F_0\cos(\omega_d t)$ with driving frequency $\omega_d$. The early motion is a messy mixture — the oscillator's own dying vibration — but the transient fades, and a **steady state** remains: oscillation at the *driving* frequency $\omega_d$, with a fixed amplitude and a fixed phase lag behind the pusher. The frequency of the steady response is $\omega_d$, not the natural frequency; each cycle, the pusher's work input exactly balances the damping losses, so the amplitude stops changing.

The steady-state amplitude depends on how close $\omega_d$ is to $\omega_0$:

- Far below or above $\omega_0$: small response; the oscillator barely tracks the push in step or lags greatly.
- $\omega_d\approx\omega_0$: a **large** response — the amplitude peak called **resonance**.

The lighter the damping (smaller $b$), the taller and narrower that peak: an almost undamped oscillator can soak up enormous amplitude while a well-damped one responds gently. At resonance the pusher's force is in step with the oscillator's **velocity**, so power flows in during every part of the cycle — the reason resonant buildup is so efficient.

## 5. Resonance in the world

Where matching frequencies are *wanted*: the soundboard of a guitar lets a faint string vibration fill the room; a radio's tuning circuit is set to resonate with one broadcast frequency among thousands; a playground swing is pumped at exactly its natural frequency.

Where they are not: machinery-mounted floors must avoid the engine's running frequency; tall buildings and chimneys swayed dangerously when wind gusts or earthquakes matched their natural periods — the reason earthquake codes add damping; troops break step on bridges precisely so that their footfalls cannot conspire with the bridge's natural frequency; a wine glass singing under a sustained tone is resonance at its most photogenic.

One caution against folklore: a microwave oven does **not** cook by resonating water molecules at $2.45\ \text{ GHz}$; water absorbs that band broadly, and the frequency is chosen for penetration depth, not resonance. Seeing resonance claims, ask: is the push really periodic at one frequency, and is that frequency anywhere near a natural frequency of the target?

<learning-block type="mistake" title="Resonance is not “more frequency” — and damping does not speed things up">

Two durable confusions. First, resonance is not the driving growing *stronger over time* nor the frequency increasing; it is the *match* $\omega_d\approx\omega_0$ producing a large steady amplitude at that same driving frequency. Second, learners assert adding damping "makes the oscillator faster". The opposite: damping shifts the frequency slightly **down** ($\omega^2=\omega_0^2-(b/2m)^2$) and, in the overdamped limit, makes the return sluggish rather than brisk — only *critical* damping gives the quickest recovery, and it does so precisely by shutting oscillation off.

</learning-block>

## Try it yourself

**1.** A $0.40\ \text{kg}$ mass oscillates on a spring in water, with $b=0.20\ \text{kg/s}$. How long until the amplitude is halved? How long until it is a quarter of its original value?

<details><summary>Show the reasoning</summary>

$t_{1/2}=2m\ln2/b=2(0.40)(0.693)/0.20\approx2.8\ \text{s}$. Being exponential, a quarter needs two halvings: $2t_{1/2}\approx5.5\ \text{s}$ — not four times as long. The equal-fraction rule is the whole convenience of the exponential envelope.
</details>

**2.** For the same system, the damping constant is somehow raised fourfold. What happens to the halving time and to the shape of the decay?

<details><summary>Show the reasoning</summary>

$t_{1/2}\propto m/b$, so the halving time falls to a quarter, about $0.69\ \text{s}$. The motion stays oscillatory only while $b<2\sqrt{mk}$; quadrupling $b$ may push the system into the overdamped regime, where the spring creeps back without completing a single oscillation. State the damping regime before promising decay oscillations.
</details>

**3.** A child pumping a swing gets the largest build-up when pushing once per swing, at the swing's own frequency. Explain in one sentence why an off-rhythm push achieves so little — say where the energy goes.

<details><summary>Show the reasoning</summary>

At resonance the push acts in step with the motion, every push feeding the same phase of the cycle and all that work accumulating as amplitude; off-rhythm pushes arrive sometimes late in the cycle and sometimes against the motion, so energy added in one phase is largely taken back out (or cancelled) later in the cycle, and only damping absorbs the difference.
</details>

## Remember

- Model damping as $F_d=-bv$ with $b$ in kg/s; the equation of motion is $m\ddot{x}+b\dot{x}+kx=0$.
- Light damping: the amplitude decays in an exponential envelope $A=A_0e^{-bt/2m}$, halving every $2m\ln2/b$; the frequency drops slightly below $\sqrt{k/m}$.
- Critical damping is the fastest *non-oscillatory* return — the engineering choice for closers and suspensions; overdamping is slower than critical.
- Forced oscillations settle into a steady state at the **driving** frequency; the amplitude peaks near $\omega_d=\omega_0$, and the peak is taller and sharper for lighter damping.
- Resonance follows from the push being in step with the velocity where the energy flow is maximum; its victims are bridges, buildings, and machinery; its beneficiaries are soundboards, radios, and swings.

## Up next

The conceptual chapter is complete. The next module, *Oscillations: practice & mastery check*, assembles a study plan across all six lessons, sharpens the "which tool for which clue" reflexes, and walks through graded problems with fully reasoned answers — the natural pit-stop before the 50-minute timed JEE set.
