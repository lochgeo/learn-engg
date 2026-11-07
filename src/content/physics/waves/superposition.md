## Two sounds, one room

Two people speaking in one room are both heard clearly; a single loudspeaker can be heard around a corner. This everyday overlap is one of the deepest linearity facts in physics: when two or more waves arrive at the same place, the net displacement is simply their sum, with each wave carrying on as if the others were not there. That rule — superposition — is also the machine behind reflection, interference, standing waves and beats, the four effects that fill the rest of this chapter.

## 1. The principle of superposition

If waves $y_1(x,t)$ and $y_2(x,t)$ arrive at the same point, the net displacement is

$$
y=y_1+y_2 .
$$

The displacements add *with sign*: a positive crest and a negative trough arriving together cancel momentarily. The principle is exact for small-amplitude disturbances, because the medium's response is linear; violently loud blasts and shallow-water breakers exceed the linear regime and break the rule. JEE-level work stays inside the linear regime, so superposition may be applied without ceremony.

## 2. Reflection: what a boundary does

A wave travelling down a string meets an end. What comes back depends on the end.

- **Rigid (fixed) end** — the string is tied to a wall. The endpoint cannot move, so the returning displacement must cancel the incoming one there: the reflected pulse is **inverted** (crest comes back as trough). The reflection carries a **phase change of $\pi$**.
- **Free end** — the string endpoint slides without resistance. No restoring force is needed to match a boundary condition, so the reflected pulse returns **un-reflected**, the same way up: **no phase change**.

The same rules apply to sound in a pipe: a closed (rigid) end reflects with a phase change of $\pi$ and forces a displacement **node**; an open end reflects with no phase change and behaves like a displacement **antinode**. This pairing of reflection rules with nodes and antinodes is exactly what the next lesson exploits to count the harmonics of strings and organ pipes.

## 3. Interference of two travelling waves

Now send two *coherent* waves — same frequency, and a phase difference that stays constant for long enough to matter — through the same region. Adding two sinusoids of the same frequency always yields another sinusoid of that frequency, with amplitude

$$
A_r=\sqrt{A_1^2+A_2^2+2A_1A_2\cos\delta},
$$

where $\delta$ is their phase difference. In intensities, using $I\propto A^2$:

$$
I_r=I_1+I_2+2\sqrt{I_1I_2}\cos\delta .
$$

The cross term is the whole story of interference.

- **Constructive:** $\delta=2n\pi$, path difference $\Delta x=n\lambda$. Waves in step; $\cos\delta=1$:

  $$
  A_r=A_1+A_2,\qquad I_{\max}=\left(\sqrt{I_1}+\sqrt{I_2}\right)^2 .
  $$

- **Destructive:** $\delta=(2n+1)\pi$, path difference $\Delta x=\left(n+\tfrac12\right)\lambda$. Waves opposed; $\cos\delta=-1$:

  $$
  A_r=|A_1-A_2|,\qquad I_{\min}=\left(\sqrt{I_1}-\sqrt{I_2}\right)^2 .
  $$

Two consequences worth internalising:

1. **Nearly cancelling.** Equal amplitudes give $A_r=0$ at destructive points — true silence — but unequal amplitudes never fully cancel: the minimum is the *difference* of the amplitudes, not zero.
2. **Energy is redistributed, not destroyed.** Where the two waves cancel, energy seems to be missing; the loud zones pay for it. Two equal sources, each of intensity $I$, paint minima of $0$ and maxima of $4I$ against a plain superposition sum of $2I$: averaged over the whole pattern, the surplus at the maxima exactly compensates the silent zones. No source of energy has vanished.

<learning-block type="example" title="Worked example: three relative phases">

Two coherent waves of amplitudes $4\ \text{mm}$ and $3\ \text{mm}$ overlap. Find the resultant amplitude when their phase difference is (a) $0$, (b) $90^\circ$, (c) $180^\circ$.

**(a)** In step (constructive):
$$
A_r=4+3=7\ \text{mm}.
$$

**(b)** Perpendicular in phase sense, $\cos90^\circ=0$:
$$
A_r=\sqrt{4^2+3^2}=\sqrt{25}=5\ \text{mm}.
$$

**(c)** Opposed (destructive):
$$
A_r=|4-3|=1\ \text{mm}.
$$

Sanity check: the results must lie between the sum $7\ \text{mm}$ and the difference $1\ \text{mm}$ — and the $3$–$4$–$5$ triple in part (b) is the classic Pythagorean appearance of orthogonal phases. All three answers sit inside the permitted band.

</learning-block>

## 4. Path difference as the working tool

In practice, questions hand you a **path difference** $\Delta x$ between two routes to the same point, not a phase. Convert once:

$$
\Delta\phi=\frac{2\pi}{\lambda}\,\Delta x,
$$

then decide constructive versus destructive:

| Path difference | Verdict |
| --- | --- |
| $n\lambda$ ($n$ integer) | constructive |
| $\left(n+\tfrac12\right)\lambda$ | destructive |
| anything between | partial |

Two identical sources side by side radiating in phase paint alternating loud and quiet zones into space: step along a line and the sound swells and fades with period set by $\lambda$. Where the two routes grew by a wavelength between one loud zone and the next, the pattern's spacing is predictable — the basis of interference demonstrations with two speakers fed from one signal source.

<learning-block type="mistake" title="Interference errors to unlearn">

- **Arithmetic addition of intensities always.** $I_1+I_2$ only when $\cos\delta=0$. The interference term $2\sqrt{I_1I_2}\cos\delta$ is what makes maxima exceed the sum and minima fall below it.
- **Calling unequal-amplitude cancellation zero.** $A_1=5$, $A_2=3$ gives a minimum of $2$, not silence. Only equal amplitudes cancel completely.
- **Reversing the case rules.** Trailing half-wavelength *path* difference means destructive, not constructive — check by asking whether the crests arrive together (yes: constructive; no: destructive).
- **Forgetting the reflection phase flip at a rigid wall.** A crest arriving at a fixed end does not bounce back as a crest.

</learning-block>

## Try it yourself

**A.** Two coherent waves of intensities $I$ and $4I$ overlap with zero phase difference. Find the maximum and minimum intensities in the region.

<details><summary>Show the reasoning</summary>

Amplitudes go as $\sqrt{I}$: $A_1\propto1$, $A_2\propto2$ (arbitrary units). Maximum amplitude $=1+2=3$, so

$$
I_{\max}=9I.
$$

Minimum amplitude $=|2-1|=1$, so

$$
I_{\min}=I.
$$

The maxima run $9I$ against $4I+I=5I$ from plain addition — the interference term lifted them above the arithmetic sum.
</details>

**B.** Two speakers driven by the same oscillator are $2.0\ \text{m}$ apart; a listener $4.0\ \text{m}$ away on the perpendicular bisector hears a loud tone of wavelength $0.68\ \text{m}$. What path difference would put the listener in a quiet zone, and is there any on that line?

<details><summary>Show the reasoning</summary>

Quiet zones need path difference $\left(n+\tfrac12\right)\lambda=\{0.34,\ 1.02,\ 1.70,\ 2.38,\dots\}\ \text{m}$. On the perpendicular bisector both paths are equal, $\Delta x=0$: a constructive maximum. The nearest quiet zones lie symmetrically *off* the bisector — so the listener stands in a loud zone precisely on it, and must step sideways to find silence.
</details>

**C.** A pulse travels down a string and reflects from a rigid wall; at the same time, another identical pulse arrives in phase from the far side. Describe the displacement at the wall one instant after they meet.

<details><summary>Show the reasoning</summary>

The reflected pulse is inverted by the rigid end (phase change $\pi$), so the two pulses — one erect, one inverted — cancel at the wall: the wall point stays at rest, as it must, since a rigid wall cannot be displaced. This is the boundary condition that later forces a node there in every standing-wave pattern on a fixed string.
</details>

## Remember

- Superposition is plain vector-like addition of displacements, valid for the small-amplitude, linear regime that exam problems assume.
- Rigid end: reflected pulse inverts (phase change $\pi$); free end: no phase change. Pipes echo this as node at a closed end, antinode at an open end.
- Resultant of two coherent waves: $A_r=\sqrt{A_1^2+A_2^2+2A_1A_2\cos\delta}$; convert path difference to $\delta=2\pi\Delta x/\lambda$ first.
- Constructive: $\Delta x=n\lambda$; destructive: $\Delta x=(n+\frac12)\lambda$.
- Unequal amplitudes never cancel fully: minima equal the amplitude *difference*.
- Interference redistributes energy; it never destroys it.
- Next lesson: send a wave at *both* ends of one string and the interference becomes a fixed pattern — nodes, antinodes and the harmony of strings and pipes.
