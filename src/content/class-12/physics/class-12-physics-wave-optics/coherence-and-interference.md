## Two waves can add or cancel

When two waves meet, the displacement at each point is the sum of the individual displacements. Whether that sum is large or small depends on the phase difference, which in turn depends on path lengths, frequencies and the starting phases. **Interference** is the spatial pattern of reinforcement and cancellation that results. It is only steady if the sources are **coherent**.

## 1. Superposition

For two waves of the same type meeting in a linear medium, the resultant displacement is

$$
y=y_1+y_2.
$$

If the waves have the same frequency and a constant phase difference $\delta$,

$$
y_1=A_1\cos(\omega t),\qquad y_2=A_2\cos(\omega t+\delta),
$$

then the resultant amplitude is not simply $A_1+A_2$. The intensity, which is proportional to amplitude squared, becomes

$$
I=I_1+I_2+2\sqrt{I_1I_2}\cos\delta.
$$

When $I_1=I_2=I_0$,

$$
I=4I_0\cos^2\frac{\delta}{2}.
$$

## 2. Constructive and destructive interference

The phase difference $\delta$ is determined by the path difference $\Delta$:

$$
\delta=\frac{2\pi}{\lambda}\Delta+\delta_0,
$$

where $\delta_0$ is any initial phase difference between the sources.

- **Constructive:** $\delta=2\pi m$, i.e. $\Delta=m\lambda$ ($m=0,\pm1,\pm2,\dots$). Intensity maximum.
- **Destructive:** $\delta=(2m+1)\pi$, i.e. $\Delta=(m+\tfrac12)\lambda$. Intensity minimum (zero if amplitudes are equal).

## 3. Coherence

Two sources are **coherent** if they have the same frequency and a constant phase difference. Ordinary light sources (sodium lamps, incandescent bulbs) emit wave trains of finite length with random phase jumps; two independent sources are **incoherent**, and their interference pattern changes too fast to observe. A single source split into two paths (as in Young’s experiment) gives coherent sources. Lasers are coherent over long times and distances.

Spatial coherence concerns phase correlation across a wavefront; temporal coherence concerns how long the phase stays predictable. Both matter for observing interference.

## 4. Energy is conserved

Interference redistributes energy; it does not create or destroy it. Where intensity falls below the sum of the individual intensities, it rises elsewhere. Integrating over a full pattern gives the total power expected from the two sources.

## 5. Worked example

Two coherent sources emit light of wavelength $\lambda=600\ \text{nm}$. At a point, the path difference is $\Delta=450\ \text{nm}$.

$$
\frac{\Delta}{\lambda}=\frac{450}{600}=0.75=\frac34.
$$

So $\delta=2\pi\times0.75=1.5\pi$, an odd multiple of $\pi/2$ but not of $\pi$. The intensity is

$$
I=4I_0\cos^2(0.75\pi)=4I_0\cos^2(135^\circ)=4I_0(0.5)=2I_0.
$$

This is neither maximum nor zero. If $\Delta$ were $600\ \text{nm}$, the point would be bright; if $300\ \text{nm}$, dark.

Sanity check: at $\Delta=0$ the formula gives $4I_0$, four times a single source, which is the maximum possible for two equal sources. At $\Delta=\lambda/2$ it gives zero. Both match the definitions above.

## 6. A common mistake

Assuming any two light sources interfere. They do not unless they are coherent. A second error is treating interference minima as “light destroyed”; the energy is merely moved to the maxima.

<learning-block type="mistake" title="Interference errors">
- Using $\Delta=m\lambda$ for destructive and $\Delta=(m+\tfrac12)\lambda$ for constructive — the conditions are the other way around.
- Forgetting the initial phase $\delta_0$ when sources are not derived from a single split beam.
- Expecting stable fringes from two independent lamps; their phases drift randomly.
</learning-block>

## Try it yourself

**A.** Two coherent sources of equal intensity produce a point where the phase difference is $\pi/3$. What is the intensity there in terms of $I_0$ (single-source intensity)?

<details><summary>Show the reasoning</summary>

$I=4I_0\cos^2(\pi/6)=4I_0(\sqrt3/2)^2=3I_0$. The point is brighter than one source but not at maximum.
</details>

**B.** For $\lambda=500\ \text{nm}$, list the first three path differences (starting from zero) that give constructive interference, and the first three that give destructive.

<details><summary>Show the reasoning</summary>

Constructive: $0,\ 500,\ 1000\ \text{nm}$. Destructive: $250,\ 750,\ 1250\ \text{nm}$.
</details>

**C.** Why does splitting one source into two paths guarantee coherence, while using two separate lasers usually does not?

<details><summary>Show the reasoning</summary>

Splitting preserves a fixed phase relation because both beams originate from the same wave train. Two independent lasers have unrelated and drifting phases.
</details>

## Remember

- Superposition: resultant displacement is the sum.
- Steady interference needs coherence: same frequency, constant phase.
- Constructive at $\Delta=m\lambda$; destructive at $\Delta=(m+\tfrac12)\lambda$.
- Energy is redistributed, not lost.

The next module applies these ideas to the classic two-slit arrangement and derives the fringe spacing.