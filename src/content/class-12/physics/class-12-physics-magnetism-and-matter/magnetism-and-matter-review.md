## Your study plan for today

This chapter connects four ideas: the dipole field of a bar magnet, the global constraint that field lines close, the way matter responds to a field, and how magnets are engineered. A focused first pass takes about **2.5 hours**:

1. **Bar magnets and magnetic field** — 25 min
2. **Gauss's law and Earth's magnetism** — 25 min
3. **Magnetisation and magnetic intensity** — 25 min
4. **Magnetic properties of materials** — 30 min
5. **Permanent magnets and electromagnets** — 25 min
6. **This mastery check** — 25 min

After each lesson, close the notes and re-derive the key formula from a blank page. Save the JEE Main timed set for when you can solve each tool on its own.

## First choose the tool

| Clue in the question | Start with |
| --- | --- |
| Field on axis/equator of a short magnet | $B_{\text{axial}}=\frac{\mu_0}{4\pi}\frac{2M}{r^3}$, $B_{\text{eq}}=\frac{\mu_0}{4\pi}\frac{M}{r^3}$ |
| Torque or energy of a dipole in a field | $\tau=MB\sin\theta$, $U=-MB\cos\theta$ |
| Closed surface / no monopoles | $\oint \vec B\cdot d\vec A=0$ |
| Earth's field components | $B_H=B\cos I$, $B_V=B\sin I$, $\tan I=B_V/B_H$ |
| Field inside a material | $B=\mu_0(H+M)=\mu_0\mu_r H$ |
| Linear material response | $M=\chi_m H$, $\mu_r=1+\chi_m$ |
| Paramagnet temperature dependence | $\chi=C/T$; ferromagnet above $T_C$: $\chi=C/(T-T_C)$ |
| Permanent vs electromagnet design | Hard (high $H_c$) for permanent; soft (high $\mu_r$) for switching |
| Magnetic circuit | $\mathcal{F}=NI$, reluctance $\mathcal{R}=l/(\mu A)$ |
| Saturation check | Compare computed $B$ with $B_{\text{sat}}\sim1.5$–$2\ \text{T}$ for iron |

## Mastery check

Use $g=10\ \text{m/s}^2$? Not needed here; use $\mu_0/(4\pi)=10^{-7}$ and standard constants. Try each without looking at the answer first.

### 1. Short magnet field

A short magnet has moment $M=4.0\ \text{A}\,\text{m}^2$. Find the field on its axis and on its equator at $r=0.20\ \text{m}$.

<details><summary>Answer and reasoning</summary>

$B_{\text{axial}}=(10^{-7})\,2(4.0)/(0.20)^3 = 8.0\times10^{-7}/8.0\times10^{-3}=1.0\times10^{-4}\ \text{T}$.

$B_{\text{eq}}=5.0\times10^{-5}\ \text{T}$ (half). Axial is twice equatorial, as expected.

</details>

### 2. Dipole torque and energy

A magnet with $M=3.0\ \text{A}\,\text{m}^2$ sits in $B=0.40\ \text{T}$ at $45^\circ$. Find the torque and the potential energy. How much work does the field do if it rotates to $0^\circ$?

<details><summary>Answer and reasoning</summary>

$\tau=MB\sin45^\circ=(3.0)(0.40)(0.707)=0.849\ \text{N}\,\text{m}$.

$U=-MB\cos45^\circ=-(3.0)(0.40)(0.707)=-0.849\ \text{J}$.

$W_{\text{field}}=MB(\cos45^\circ-\cos0^\circ)=1.2(0.707-1)=-0.351\ \text{J}$? Wait: $W_{\text{field}} = -\Delta U = MB(\cos\theta_i-\cos\theta_f) = 1.2(0.707-1) = -0.351\ \text{J}$. Negative because the field does negative work when the angle *increases*; here rotating from $45^\circ$ to $0^\circ$ decreases the angle, so the field does *positive* work: $W=MB(\cos45^\circ-\cos0^\circ)$? Let me recompute carefully.

$U_i=-MB\cos45^\circ=-0.849\ \text{J}$. $U_f=-MB\cos0^\circ=-1.2\ \text{J}$. $\Delta U=U_f-U_i=-0.351\ \text{J}$. Work by field $=-\Delta U=+0.351\ \text{J}$. So the field does $+0.35\ \text{J}$ of work, consistent with the dipole moving toward stable alignment.

</details>

### 3. Earth's field

At a place, $B_H=2.5\times10^{-5}\ \text{T}$ and dip $I=40^\circ$. Find $B_V$ and $B$. Is this nearer the equator or a pole?

<details><summary>Answer and reasoning</summary>

$B_V=B_H\tan40^\circ=2.5\times10^{-5}\times0.839=2.10\times10^{-5}\ \text{T}$.

$B=B_H/\cos40^\circ=2.5\times10^{-5}/0.766=3.26\times10^{-5}\ \text{T}$.

Dip $40^\circ$ is closer to the equator ($0^\circ$) than to a pole ($90^\circ$).

</details>

### 4. Magnetisation

A solenoid with $n=500\ \text{turns/m}$ carries $I=3.0\ \text{A}$ and has a core with $\mu_r=300$. Find $H$, $B$ and $M$.

<details><summary>Answer and reasoning</summary>

$H=nI=1.5\times10^3\ \text{A}/\text{m}$.

$B=\mu_0\mu_r H=(4\pi\times10^{-7})(300)(1.5\times10^3)=5.65\times10^{-1}\ \text{T}$.

$M=(\mu_r-1)H\approx(299)(1.5\times10^3)=4.49\times10^5\ \text{A}/\text{m}$.

Check: $\mu_0(H+M)\approx0.565\ \text{T}$. Consistent and below saturation.

</details>

### 5. Susceptibility and temperature

A paramagnet has $\chi=2.0\times10^{-3}$ at $300\ \text{K}$. What is $\chi$ at $150\ \text{K}$? If its Curie temperature (as a ferromagnet) is $T_C=800\ \text{K}$, is it paramagnetic or ferromagnetic at $700\ \text{K}$?

<details><summary>Answer and reasoning</summary>

Curie law: $\chi\propto 1/T$, so at $150\ \text{K}$, $\chi=4.0\times10^{-3}$.

At $700\ \text{K}<T_C$, the material is ferromagnetic (below Curie temperature), not paramagnetic. The Curie–Weiss law applies only above $T_C$.

</details>

### 6. Hysteresis and material choice

Which material (hard or soft) is appropriate for (a) a transformer core, (b) a permanent magnet, (c) an electromagnet that must switch 50 times per second?

<details><summary>Answer and reasoning</summary>

(a) Soft — narrow loop, low loss. (b) Hard — high $H_c$, $B_r$. (c) Soft — must follow current with minimal lag and hysteresis loss.

</details>

### 7. Magnetic circuit

An electromagnet coil has $N=200$ turns, $I=5.0\ \text{A}$, and an air gap of $1.0\ \text{mm}$ with area $2.0\times10^{-3}\ \text{m}^2$. Estimate $B$ in the gap (ignore core reluctance).

<details><summary>Answer and reasoning</summary>

$\mathcal{F}=NI=1000\ \text{A·turns}$.

$\mathcal{R}=g/(\mu_0 A)=1.0\times10^{-3}/[(4\pi\times10^{-7})(2.0\times10^{-3})]
=1.0\times10^{-3}/(2.513\times10^{-9})
=3.98\times10^5\ \text{A·turns}/\text{Wb}$.

$\Phi=\mathcal{F}/\mathcal{R}=1000/3.98\times10^5=2.51\times10^{-3}\ \text{Wb}$.

$B=\Phi/A=2.51\times10^{-3}/2.0\times10^{-3}=1.26\ \text{T}$. Below saturation — plausible.

</details>

### 8. Gauss's law for magnetism

A student claims that the net magnetic flux through a closed surface surrounding the north pole of a bar magnet is positive. Explain why this is wrong.

<details><summary>Answer and reasoning</summary>

Gauss's law for magnetism says $\oint \vec B\cdot d\vec A=0$ for any closed surface. Field lines leaving the north pole re-enter through the south pole (or close at infinity); they cannot terminate. Any closed surface around the north pole alone still has field lines leaving through its sides/bottom, so the net flux is zero, not positive.

</details>

### 9. Earth's magnetism — declination and dip

Why does a compass at the magnetic equator point north–south while at a magnetic pole it fails to settle horizontally?

<details><summary>Answer and reasoning</summary>

At the magnetic equator, $I=0^\circ$, so $B_H=B$ (maximum horizontal component) and $B_V=0$; the needle aligns with $B_H$. At a pole, $I=90^\circ$, so $B_H=0$; there is no horizontal restoring force and the needle is vertical.

</details>

### 10. Saturation sanity check

An electromagnet calculation gives $B=8\ \text{T}$ in an iron core. What should you conclude?

<details><summary>Answer and reasoning</summary>

The linear formula has exceeded its validity: iron saturates near $1.5$–$2\ \text{T}$. The true field is at most $\sim2\ \text{T}$; the excess "field" is an artefact of using a constant $\mu_r$ past saturation. Use the material's $B$–$H$ curve.

</details>

## Self-check

You are ready to move on when you can:

- compute the axial and equatorial fields of a short magnet and explain the factor of two;
- relate $\tau$, $U$ and work for a dipole in a uniform field;
- state Gauss's law for magnetism and explain why monopoles do not exist;
- resolve Earth's field into $B_H$ and $B_V$ and compute $I$;
- use $B=\mu_0(H+M)$ and $\mu_r=1+\chi_m$ with correct SI units;
- distinguish dia, para and ferro materials and apply Curie/Curie–Weiss laws;
- read a hysteresis loop: saturation, retentivity, coercivity;
- choose hard vs soft material for a given application;
- check a computed $B$ against saturation.

If one item still feels shaky, revisit that module and redo its questions without the reveal. Then attempt the timed JEE Main set.