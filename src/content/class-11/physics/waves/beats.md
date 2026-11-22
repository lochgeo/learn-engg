## Two notes nearly the same

Sound two tuning forks an octave apart and you hear a pleasant chord. Sound two forks only $1$ or $2\ \text{Hz}$ apart and you hear something stranger: a single tone that swells and fades — loud, soft, loud — several times a second. That slow throb is a **beat**, and it arises from the same superposition machinery as everything else in this chapter. Piano tuners exploit it daily: they adjust a string until the beats against a reference fork vanish.

## 1. Superposing close frequencies

Take two waves of equal amplitude arriving at one point with frequencies $f_1$ and $f_2$ ($f_1>f_2$):

$$
y_1=A\sin(2\pi f_1 t),\qquad
y_2=A\sin(2\pi f_2 t).
$$

Adding them with the same sum-to-product identity used for standing waves:

$$
y=y_1+y_2
=2A\,\cos\!\big(2\pi\tfrac{f_1-f_2}{2}\,t\big)\sin\!\big(2\pi\tfrac{f_1+f_2}{2}\,t\big).
$$

Interesting things happen because the two factors play different roles:

- The fast factor $\sin\!\big(2\pi\frac{f_1+f_2}{2}t\big)$ is a tone at the **average frequency** — that is the pitch the ear follows.
- The slow factor $\cos\!\big(2\pi\frac{f_1-f_2}{2}t\big)$ is a slowly varying **envelope** that scales the amplitude between $0$ and $2A$.

The two waves march in and out of step. When their crests coincide the amplitudes add ($2A$, a **loud maximum**); when a crest meets a trough they cancel (a **silence**). The envelope's cosine swings through a full cycle at frequency $\frac{f_1-f_2}{2}$, but $|\cos|$ peaks twice per envelope cycle — at $+1$ and again at $-1$. Loudness maxima therefore recur at

$$
f_{\text{beat}}=|f_1-f_2|,
$$

once every $\dfrac{1}{|f_1-f_2|}$ seconds — the **beat period**. Note the amplitude envelope itself breathes at half that rate; it is the *loudness*, not the envelope, that repeats with the beat period.

For unequal amplitudes the silences become shallow dips rather than true zeros, but the recurrence rate of maxima is still $|f_1-f_2|$ — beat counting does not require matching amplitudes.

## 2. Reading the two graphs of a beat

The superposition result rewards one picture and one habit:

- **y–t graph at a fixed point:** a fast oscillation riding inside a slow envelope, the classic "throb" drawn in every acoustics text. The envelope touches zero whenever the two phase-opposed crests meet exactly, and swells to $2A$ whenever the crests coincide.
- **Envelope zero crossings versus loudness maxima.** The envelope $2A\cos\!\big(\pi\Delta f\,t\big)$ completes a cycle at $\dfrac{2}{\Delta f}$, but the ear registers *loudness*, and $|\cos|$ spikes twice per envelope cycle — once even when the envelope dips through a negative peak. Misreading the envelope as the beat signal is the most common factor-of-two error in this topic.

**A second example with unequal amplitudes.** Forks of frequency difference $3\ \text{Hz}$ with amplitudes $5\ \text{mm}$ and $3\ \text{mm}$ overlap. The amplitude envelope swings between $5+3=8\ \text{mm}$ and $|5-3|=2\ \text{mm}$ — the dips are audible as *soft* passages, never silences — but the loudness still peaks once every $\tfrac13\ \text{s}$: three beats per second. Unequal amplitudes change the depth of the throb, not its rate.

## 3. Where beats stop being beats

The ear tracks the throb only while $|f_1-f_2|$ stays small — of the order of $10\ \text{Hz}$ or less. Push the difference further and the perception changes character: the note seems rough and wavering near the boundary, and beyond roughly $10\ \text{Hz}$ for mid-range tones the ear hears two separate pitches, not one wobbling tone. Beat counting as an experimental technique therefore relies on choosing or adjusting a reference fork until the difference is small enough to *hear as* beats. At the other limit, exactly zero beats means the frequencies match — the null condition that gives precision tuning its accuracy.

<learning-block type="example" title="Worked example: the wax test">

A tuning fork of unknown frequency produces $6$ beats per second with a standard $512\ \text{Hz}$ fork. A little wax is stuck to one prong of the unknown fork — and now only $4$ beats per second are heard. Find the unknown frequency.

**Step 1: scope.** $6$ beats/s pins the unknown at $512\pm6$: either $506\ \text{Hz}$ or $518\ \text{Hz}$.

**Step 2: what wax does.** Adding wax loads the prong, lowering the fork's frequency slightly.

**Step 3: which branch fits?** If the unknown were $506\ \text{Hz}$, lowering it would *increase* the gap to $512$ (beats would rise past $6$). Instead the beats fell to $4$ — the gap closed — so the unknown must lie *above* the standard and moved toward it:

$$
f_{\text{unknown}}=512+6=518\ \text{Hz}.
$$

Sanity check: at $518\ \text{Hz}$ ($6$ beats), a light load dropping it to $516\ \text{Hz}$ gives $|516-512|=4$ beats — exactly what was heard.

</learning-block>

<learning-block type="mistake" title="Beat mistakes">

- **Halving the beat frequency.** The envelope factor carries $\frac{f_1-f_2}{2}$, but loudness peaks twice per envelope cycle. The observed beat count is $|f_1-f_2|$, not half of it.
- **Assuming the unknown sits below the standard.** Beats alone never say *which side* the unknown is on. You need a second observation — wax (lowers), or a second fork — to fix it.
- **Using beats when the gap is wide.** The ear hears beats as a throb only up to roughly $10\ \text{Hz}$ or so. Beyond that it perceives two separate notes, not a throb — beat counting stops being possible.
- **Adding frequencies for the beat rate.** The perceived pitch sits at the *average* frequency; the beat rate involves the *difference*.

</learning-block>

## Try it yourself

**A.** Forks of $340\ \text{Hz}$ and $344\ \text{Hz}$ sound together. How many beats are heard in $10\ \text{s}$, and what pitch does a listener follow?

<details><summary>Show the reasoning</summary>

$$
f_{\text{beat}}=|344-340|=4\ \text{Hz}
\quad\Rightarrow\quad
4\times10=40\ \text{beats in}\ 10\ \text{s}.
$$

The tone sits at the average, $\frac{340+344}{2}=342\ \text{Hz}$. A $4\ \text{Hz}$ throb sits comfortably within the ear's beat-tracking range.
</details>

**B.** A fork X produces $8$ beats per second with a $512\ \text{Hz}$ standard. When wax is added to X, the beats drop to $4$ per second. Find the frequency of X, and what a *second*, lighter load would continue to do.

<details><summary>Show the reasoning</summary>

Scope: $X=504$ or $520\ \text{Hz}$. Wax lowers X. If $X=504$, lowering would push the gap beyond $8$ — beats would rise. Beats fell, so the unknown was above: $X=512+8=520\ \text{Hz}$, now carrying wax and reading $516\ \text{Hz}$ ($4$ beats). More wax keeps lowering X, sweeping it through $514,\ 512,\ 510,\dots$: the beats would fall to zero as $X$ passes $512$, then grow again from the far side. That "beats null out then re-grow" sweep is how the wax test actually pinpoints an unknown frequency.
</details>

**C.** A piano note produces $3$ beats per second against a $256\ \text{Hz}$ fork. Can you tell from the beats alone whether the note is sharp or flat?

<details><summary>Show the reasoning</summary>

No. Beats fix only the *magnitude* of the gap: the note is at $253$ or $259\ \text{Hz}$, both giving $3$ beats/s. To resolve the direction, perturb the note in a known way — for example, tighten (sharpen) the string slightly: if the beats then *increase*, the note was already sharp (above $256$); if they decrease, it was flat. Tuners reason exactly this way, using a known direction of adjustment.
</details>

## Remember

- Superposing $f_1$ and $f_2$ yields a tone at the average frequency whose amplitude throb repeats at $|f_1-f_2|$.
- Beat period $=\dfrac{1}{|f_1-f_2|}$; beats are audible as distinct throbs only while the difference stays small (about $10\ \text{Hz}$ or less).
- Beat counting gives $|f_1-f_2|$ but never the sign; resolve the ambiguity with a frequency-lowering (wax) or a controlled retune.
- Loading a tuning fork with wax always lowers its frequency — the standard diagnostic move.
- Zero beats mean equal frequencies: the null method behind precision tuning.
- Next lesson: what happens when the *source itself* moves — the pitch slide of a passing siren, the Doppler effect.
