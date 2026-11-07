## Waves that stand still

Pluck a guitar string: the note holds one pitch, steady, as if the wave had stopped moving. It has — sort of. The string cannot store a travelling wave: both ends are fixed, so every travelling wave reflects repeatedly, and the superposition of waves shuttling both ways is a **standing wave** — an oscillation pattern whose nodes never move. That fixed pattern is why a string, an open pipe and a closed pipe each sing a characteristic ladder of notes called harmonics. This lesson builds that structure from the two reflection rules of the previous lesson.

## 1. How a standing wave forms

Superpose two identical waves travelling in opposite directions:

$$
y_1=A\sin(kx-\omega t),\qquad
y_2=A\sin(kx+\omega t).
$$

Their sum (standard identity: $\sin P+\sin Q=2\sin\frac{P+Q}{2}\cos\frac{P-Q}{2}$):

$$
y=y_1+y_2=2A\sin kx\cdot\cos\omega t .
$$

Read this carefully — the position and time factors have **separated**:

- The amplitude of oscillation at position $x$ is $2A\sin kx$: it depends only on where you are.
- The time dependence $\cos\omega t$ is shared by *every* point: no wave shape slides along anywhere.

The special points:

- **Nodes** (no motion at all): $\sin kx=0$, so

  $$
  x=\frac{n\lambda}{2},\qquad n=0,1,2,\dots
  $$

- **Antinodes** (maximum swing, amplitude $2A$): $\sin kx=\pm1$, so

  $$
  x=\left(n+\tfrac12\right)\frac{\lambda}{2}=\frac{(2n+1)\lambda}{4}.
  $$

Nodes sit half a wavelength apart, and each node has an antinode exactly halfway between. Between two adjacent nodes every particle oscillates **in phase** — they all reach their extremes together — while neighbouring spans (one node apart) oscillate in *opposite* phases. Energy sloshes back and forth between kinetic and elastic forms near each antinode but crosses no node: a standing wave transports no net energy. Compare with the progressive wave, where the shape glides along carrying energy forever.

## 2. Strings fixed at both ends

A string of length $L$ pinned at both ends must have a node at each end — a rigid end forbids motion there (reflection inverts, so the ends cancel). With nodes at both ends, a whole number of half-wavelengths must fit between them:

$$
L=\frac{n\lambda_n}{2}
\quad\Rightarrow\quad
\lambda_n=\frac{2L}{n},\qquad
f_n=\frac{v}{\lambda_n}=\frac{nv}{2L},\qquad n=1,2,3,\dots
$$

with $v=\sqrt{T/\mu}$ from the wave-speed lesson. The allowed frequencies form a ladder:

- $n=1$: the **fundamental** (first harmonic), $\lambda_1=2L$, longest wavelength, lowest pitch.
- $n=2,3,\dots$: the **overtones**; $f_n=nf_1$ — a string carries **all harmonics** in the ratio $1:2:3:4:\dots$.

Nodes of the $n$th harmonic sit at $x=0,\ L/n,\ 2L/n,\ \dots,\ L$ — so the $n$th harmonic has $n-1$ interior nodes and $n$ antinodes. For odd $n$ the centre of the string is an antinode; for even $n$ it is a node. Touching the string lightly at a point "captures" whichever harmonics have a node there — the physical basis of harmonics on a guitar.

## 3. Organ pipes: closed and open

Host the standing wave in an air column instead of a string. The boundary rule repeats with the nodes relabelled: displacement **node** at a closed end (air cannot move into a wall), displacement **antinode** at an open end (reflection without phase change there is like a free end).

**Pipe closed at one end** (open at the mouth, closed at the other). Node at the closed end, antinode at the open end — an odd number of quarter-wavelengths fits:

$$
L=\frac{(2n-1)\lambda}{4},\quad n=1,2,3,\dots
$$

$$
\lambda_1=4L,\qquad f_1=\frac{v}{4L},\qquad
f=\frac{(2n-1)v}{4L}.
$$

Only **odd harmonics** sound: $f_1,\,3f_1,\,5f_1,\dots$ The $2f_1$ mode needs antinodes at *both* ends, which a closed pipe cannot supply. The fundamental wavelength $\lambda_1=4L$ — a closed pipe of the same length as an open pipe sounds an octave lower.

**Pipe open at both ends.** Antinodes at both ends; a whole number of half-wavelengths fits:

$$
L=\frac{n\lambda}{2}
\quad\Rightarrow\quad
f_1=\frac{v}{2L},\qquad f_n=\frac{nv}{2L}.
$$

**All harmonics** are available, $1:2:3:\dots$, just like a string. This richer overtone content is part of why an open pipe sounds brighter than a closed one of the same length.

## 4. End correction

The pressure-release antinode of an open end actually sits a little *outside* the pipe's mouth, so the effective acoustic length exceeds the measured length. Rayleigh's estimate for a pipe of radius $r$:

$$
e\approx0.6\,r,
$$

so a closed pipe has effective length $L+e$ and an open pipe $L+2e$ (one correction per open end). Neglecting end correction systematically overestimates all pipe frequencies — the standard reason a tuning-fork resonant-tube experiment returns lengths slightly shorter than $\lambda/4$.

<learning-block type="example" title="Worked examples: a string and a pipe">

**String.** A wire of length $0.75\ \text{m}$ and linear density $1.0\ \text{g/m}$ is stretched to $90\ \text{N}$. Find its fundamental and third-harmonic frequencies.

$$
v=\sqrt{\frac{T}{\mu}}=\sqrt{\frac{90}{1.0\times10^{-3}}}=300\ \text{m/s},
\qquad
f_1=\frac{v}{2L}=\frac{300}{1.5}=200\ \text{Hz},
$$

$$
f_3=3f_1=600\ \text{Hz},\qquad \lambda_3=\frac{2L}{3}=0.50\ \text{m}.
$$

Sanity check: the third harmonic packs three loops into the wire — nodes at $0,\ 0.25,\ 0.50,\ 0.75\ \text{m}$ and antinodes at $0.125,\ 0.375,\ 0.625\ \text{m}$ — a consistent pattern.

**Closed pipe.** A tube closed at one end resonates with a $512\ \text{Hz}$ tuning fork held at its mouth ($v=340\ \text{m/s}$). Find the two shortest resonating lengths.

$$
\lambda=\frac{v}{f}=\frac{340}{512}\approx0.664\ \text{m}.
$$

First resonance (quarter-wavelength column): $L=\lambda/4\approx0.166\ \text{m}$. Second: $L=3\lambda/4\approx0.499\ \text{m}$. The ratio of successive resonant lengths is $3:1$ — the signature of a closed pipe, since successive resonances skip the even harmonics.

</learning-block>

<learning-block type="mistake" title="Standing-wave traps">

- **Counting antinodes as $n$ or $n+1$ at random.** The $n$th harmonic of a fixed string has $n$ antinodes and $n-1$ interior nodes; the ends are nodes too, respectively ($n+1$ nodes including the ends).
- **Using $f=v/4L$ for an open pipe.** That formula belongs to a *closed* pipe. Open pipe: $f_1=v/2L$.
- **Expecting even harmonics from a closed pipe.** Only odd multiples exist. Successive resonances sit at $3:1$ in length, or $1:3$ in frequency.
- **Forgetting end correction.** Acoustic lengths exceed measured lengths by about $0.6r$ per open end; ignoring it shifts every pipe answer up by a few per cent.
- **Thinking particles are out of phase across an antinode.** Particles within one nodal span move together; the phase flip happens *across a node*.

</learning-block>

## Try it yourself

**A.** A $0.60\ \text{m}$ string fixed at both ends carries waves at $240\ \text{m/s}$. Find its fundamental frequency and the number of nodes (including the ends) when vibrating in its second harmonic.

<details><summary>Show the reasoning</summary>

$$
f_1=\frac{v}{2L}=\frac{240}{1.2}=200\ \text{Hz}.
$$

Second harmonic: two loops fit, $\lambda=2L/2=0.60\ \text{m}$; nodes at $0,\ 0.30,\ 0.60\ \text{m}$ — **three** nodes including the ends (one interior node at the midpoint).
</details>

**B.** An open pipe of length $0.25\ \text{m}$ carries sound at $340\ \text{m/s}$. Find its fundamental frequency, and the fundamental of a *closed* pipe of the same length. Comment on the ratio.

<details><summary>Show the reasoning</summary>

Open pipe:

$$
f_1=\frac{v}{2L}=\frac{340}{0.50}=680\ \text{Hz}.
$$

Closed pipe of the same length:

$$
f_1'=\frac{v}{4L}=\frac{340}{1.0}=340\ \text{Hz}.
$$

The closed pipe is exactly an octave below — the standing wave must squeeze a quarter-wavelength into the same space that the open pipe fills with a half-wavelength.
</details>

**C.** An open pipe of length $20.0\ \text{cm}$ and radius $1.0\ \text{cm}$ carries sound at $340\ \text{m/s}$. Estimate its fundamental frequency including end correction.

<details><summary>Show the reasoning</summary>

End correction per open end: $e=0.6r=0.6\times1.0=0.6\ \text{cm}$. Both ends are open, so the effective length is

$$
L_{\text{eff}}=20.0+2(0.6)=21.2\ \text{cm}=0.212\ \text{m}.
$$

$$
f_1=\frac{v}{2L_{\text{eff}}}=\frac{340}{2\times0.212}\approx802\ \text{Hz}.
$$

Without the correction the estimate would be $850\ \text{Hz}$ — about a 6 per cent overshoot, enough to mis-tune any instrument check.
</details>

## Remember

- A standing wave is the superposition of two identical opposite waves: $y=2A\sin kx\cos\omega t$ — amplitude set by position, time dependence shared by all.
- Nodes at $x=n\lambda/2$, antinodes at $x=(2n+1)\lambda/4$; nodes half a wavelength apart; no net energy transport.
- String fixed both ends: $f_n=nv/2L$, all harmonics present.
- Closed pipe: $f_n=(2n-1)v/4L$ — odd harmonics only; open pipe: $f_n=nv/2L$ — all harmonics; the open pipe of equal length sounds an octave higher.
- End correction: add about $0.6r$ per open end to the acoustic length.
- Next lesson: two tones of nearly equal frequency — the same superposition machinery, but now heard as beats, a slow loud–soft throb.
