## The sliding siren

An ambulance thunders past with its siren on: the pitch drops abruptly as it passes, even though the siren itself blasts just one fixed note. Nothing in the medium changed — what changed is the *rate at which the wave crests reach you*. When source and observer approach, crests crowd together and the note sharpens; when they separate, crests stretch apart and the note flattens. This frequency shift is the **Doppler effect**, and mastering its signs is the whole skill.

## 1. The general formula and the sign convention

Let the emitted frequency be $f$, the speed of sound in still air $v$, the observer's speed $v_o$ and the source's speed $v_s$ along the line joining them. The received frequency is

$$
f' = f\,\frac{v+v_o}{v+v_s},
$$

with a **single, fixed ruler**: measure the direction from **listener to source** at the moment of emission, and take as positive each speed $v_o$ or $v_s$ that points from listener toward source. Under that convention the formula above is universal — no case-by-case bonus or minus to remember.

A cruder but popular shortcut uses paired signs:

$$
f' = f\,\frac{v\pm v_o}{v\mp v_s},
$$

upper signs for approach, lower signs for separation. It works if you never mismatch the signs; the ruler convention avoids that trap. Two anchors to keep you honest:

- **Everything approaching adds to $f'$; everything receding subtracts from it.**
- The effect involves motion **along the line joining** source and observer. Velocity across that line (catching up sideways, crossing at an angle) contributes nothing directly at that instant.

Also note the asymmetry that will matter below: numerator changes (observer, $+v_o$) are additions to a ratio factor; denominator changes (source, $+v_s$) divide. Physically, a moving source bunches the wavefronts in the air itself, whereas a moving observer merely skims past wavefronts already spaced — the two situations are genuinely different in magnitude.

## 2. Source moving, observer at rest

A source chasing its own wavefronts compresses the spacing ahead of it. In one period $T=1/f$ the source advances $v_sT$, so the wavelength ahead shrinks to

$$
\lambda' = \lambda - v_sT = \frac{v-v_s}{f},
\qquad
\text{observed } f'=\frac{v}{\lambda'}=f\,\frac{v}{v-v_s}.
$$

Ahead of the source, pitch rises by the factor $\dfrac{v}{v-v_s}>1$. Behind, wavefronts stretch: $f'=f\dfrac{v}{v+v_s}<1$. For a source moving straight along the line through the observer (or very close to it), the pitch descends extremely rapidly through the emitted value at the instant of closest approach, swinging from the sharpened value toward the flattened one — the characteristic "eeeeeeeee—ooooooooh" of a passing vehicle.

## 3. Observer moving, source at rest

An observer running *toward* the source at $v_o$ sweeps past crests faster than they arrive: the crest encounter rate climbs from $v/\lambda$ to $(v+v_o)/\lambda$:

$$
f' = f\,\frac{v+v_o}{v}\quad\text{(approaching)},\qquad
f' = f\,\frac{v-v_o}{v}\quad\text{(receding)}.
$$

The wavelength in the air is untouched here — the crests still sit $\lambda$ apart — only the rate of encountering them changes.

<learning-block type="example" title="Worked example: the ambulance pass-by">

A siren emits $500\ \text{Hz}$. It drives straight toward a stationary listener at $20\ \text{m/s}$, passes at the closest point, and drives away at the same speed. Take the speed of sound as $340\ \text{m/s}$. Find the pitch heard just before and just after passing.

**Approaching** (source toward listener):

$$
f' = f\,\frac{v}{v-v_s}=500\times\frac{340}{320}=531\ \text{Hz}.
$$

**Receding:**

$$
f' = 500\times\frac{340}{360}=472\ \text{Hz}.
$$

Sanity check: both frequencies bracket the emitted $500\ \text{Hz}$ — one above, one below — and the drop across the pass, about $59\ \text{Hz}$, is larger than the source speed relative to $v$ ($20/340\approx6\%$) would naively suggest: the two shifts add rather than cancel. A listener hears a sharp note bending down through a rapid slide into a flat note.

</learning-block>

## 4. Both moving; wind

Apply the ruler convention directly. If source and observer approach each other along the line joining them,

$$
f' = f\,\frac{v+v_o}{v-v_s}.
$$

Both factors push $f'$ up; when they recede from each other, both push it down. If their motions cross at an angle, use only each speed's component *along the line joining them at that instant* — and note that the line's direction changes as they move, so $f'$ varies continuously through a flyby rather than snapping.

A steady wind blowing along the line of sight leaves the observed frequency unchanged: it alters $v$ for the wavefronts, but both the observer-side factor and the source-side factor scale identically, and the ratio is untouched. Wind matters for *timing* (downwind arrivals are faster), not for pitch.

## 5. Limits of the effect

- **Source at the sound speed:** the denominator $v-v_s$ reaches zero ahead of the source — wavefronts pile up into one plane, an enormous pressure pulse. A stationary observer directly ahead hears nothing normal at all.
- **Supersonic source:** the source outruns its own wavefronts; the piled-up fronts form the **Mach cone**, heard on the ground as a sonic boom after the aircraft has already passed. The Doppler formula's $v<v_s$ regime ahead of the source is a signal that the simple model has left its domain, not that the frequency turns imaginary.
- **Formula validity:** within ordinary Newtonian kinematics the equation is exact for the stated speeds; its real failures are the moving-medium subtleties and the supersonic cases above.

For **light**, an analogous shift exists (red shift for receding galaxies, blue shift for approaching), but the formula differs from the sound case — no medium, and relativistic corrections — which is why the sound version must never be quoted for light without care.

<learning-block type="mistake" title="Doppler sign errors">

- **Sign soup.** Mixing the +/− shortcut for approach with a source that is actually receding. Fix it once: everything approaching pushes $f'$ up; write the formula, then check whether the result rose or fell as predicted before doing arithmetic.
- **Symmetrising source and observer.** $v_s=v_o$ does *not* give the same shift magnitude: $f(v+v_o)/v$ versus $fv/(v-v_s)$ differ ($v_o=34$, $v=340$: $1.10f$ for the runner, but $1.111...f$ for the source at the same speed). The source shift is slightly larger.
- **Applying the effect across the perpendicular.** A source passing *at* its closest approach (moving straight across the line joining them) produces no shift at that instant; the pitch slide happens before and after.
- **Using the sound formula for light.** Different physics, different formula.

</learning-block>

## Try it yourself

**A.** A train sounds a $400\ \text{Hz}$ horn while moving directly away from a stationary listener at $40\ \text{m/s}$ ($v=340\ \text{m/s}$). Find the frequency heard.

<details><summary>Show the reasoning</summary>

$$
f'=f\,\frac{v}{v+v_s}=400\times\frac{340}{380}\approx358\ \text{Hz}.
$$

About 10 per cent flat — a correctly lower pitch for a receding source.
</details>

**B.** A stationary source emits $250\ \text{Hz}$. A cyclist rides toward it at $34\ \text{m/s}$ ($v=340\ \text{m/s}$). Find the frequency she hears.

<details><summary>Show the reasoning</summary>

Only the observer moves:

$$
f'=f\,\frac{v+v_o}{v}=250\times\frac{374}{340}=275\ \text{Hz}.
$$

A 10 per cent sharpening — and note: she would perceive *the same 10 per cent* riding away ($250\times0.90=225\ \text{Hz}$), whereas a source at the same $34\ \text{m/s}$ shifts by $1/0.9\approx11.1$ per cent. Observer and source shifts are not mirror images.
</details>

**C.** A source emitting $440\ \text{Hz}$ approaches a listener at $10\ \text{m/s}$ while the listener cycles toward the source at $10\ \text{m/s}$ ($v=340\ \text{m/s}$). Find the observed frequency.

<details><summary>Show the reasoning</summary>

Both approach, so both factors raise $f'$:

$$
f'=440\times\frac{340+10}{340-10}=440\times\frac{350}{330}\approx467\ \text{Hz}.
$$

The numerator gain and denominator loss compound — roughly $+3\%$ from the cyclist and $+3\%$ from the source, whose product agrees with the direct computation.
</details>

## Remember

- $f'=f\dfrac{v+v_o}{v+v_s}$ with a single ruler: positive direction from listener to source; anything approaching raises $f'$.
- Moving source: wavelength itself re-spaces, $f'=fv/(v\mp v_s)$; moving observer: only the encounter rate changes, $f'=f(v\pm v_o)/v$. The source case shifts slightly more for equal speeds.
- A passing source slides from $fv/(v-v_s)$ down to $fv/(v+v_s)$ — the drop, not the two values alone, is the standard exam quantity.
- Wind along the line of sight leaves $f'$ unchanged.
- Beyond the sound speed, crest pile-up replaces the formula: the Mach cone and sonic boom.
- With the wave, standing-wave, beat and Doppler tools all on the table, the next lesson (practice check) assembles them into one mixed revision session.
