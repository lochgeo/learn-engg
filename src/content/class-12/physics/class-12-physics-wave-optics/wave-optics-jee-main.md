## JEE Main timed practice: wave optics

This is a **50-minute, no-notes** practice set for after you complete the chapter lessons. Spend roughly 15 minutes on Section A, 20 on Section B, 10 on Section C, and 5 on Section D. Mark a question for review after 90 seconds; do not let one calculation consume the paper.

Use $c=3.0\times10^8\ \text{m/s}$ and take refractive indices as given. Before writing an equation, name the phenomenon: boundary bending, interference, diffraction or polarisation.

## Conditions sheet

| Situation | Start with | Check before using it |
| --- | --- | --- |
| Wavefront at a boundary | $\angle i=\angle r$ or $n_1\sin i=n_2\sin r$ | Angles are measured from the normal. |
| Total internal reflection | $\sin C=n_2/n_1$ | Requires $n_1>n_2$. |
| Two coherent sources | $\Delta=m\lambda$ (bright), $(m+\tfrac12)\lambda$ (dark) | Path difference, not position difference. |
| Young’s fringes | $\beta=\lambda D/d$ | $d$ is slit separation, not width. |
| Single slit | $a\sin\theta=m\lambda$ | $m=0$ is the central maximum. |
| Polarised light through an analyser | $I=I_0\cos^2\theta$ | Incident light must already be polarised. |
| Unpolarised light through a polariser | $I=I_0/2$ | Then apply Malus for further polarisers. |
| Brewster angle | $\tan\theta_B=n_2/n_1$ | Different from the critical angle. |

<learning-block type="mistake" title="Fastest sanity checks">
If your interference answer gives a fringe width smaller than the wavelength, or your refraction angle exceeds $90^\circ$ without total internal reflection being considered, stop and revisit the setup. A number with the right unit can still come from an inverted ratio.
</learning-block>

## Section A — 10 rapid MCQs

### 1. Wavelet speed

In Huygens’ construction, the secondary wavelets in a medium of refractive index $n$ travel at speed:

- A. $c$
- B. $c/n$
- C. $nc$
- D. $c/n^2$

<details><summary>Answer</summary>

**B.** The wavelet speed is the wave speed in that medium, $v=c/n$. Using $c$ would ignore the medium.

Working: Huygens’ principle uses the actual propagation speed of the wave in the medium through which the wavefront advances.
</details>

### 2. Reflection law

The equality of angles of incidence and reflection follows from Huygens’ construction because:

- A. the two media have the same refractive index
- B. the incident and reflected wavelets have equal radii
- C. the boundary is perfectly smooth
- D. frequency is conserved

<details><summary>Answer</summary>

**B.** Both wavelets travel in the same medium for the same time, so their radii are equal, forcing the two angles to be equal.

Working: The reflected wave remains in the original medium, so $v\,\Delta t$ is the same for both wavelets.
</details>

### 3. Refraction direction

When light enters a denser medium from air, the refracted ray:

- A. bends away from the normal
- B. bends toward the normal
- C. is undeviated
- D. undergoes total internal reflection

<details><summary>Answer</summary>

**B.** A denser medium has smaller speed, so $r<i$ and the ray bends toward the normal.

Working: Snell’s law $n_1\sin i=n_2\sin r$ with $n_2>n_1$ gives $\sin r<\sin i$.
</details>

### 4. Critical angle existence

Total internal reflection can occur only when light travels from:

- A. rarer to denser medium
- B. denser to rarer medium
- C. any medium to any other medium at grazing incidence
- D. vacuum to any medium

<details><summary>Answer</summary>

**B.** Total internal reflection requires $n_1>n_2$.

Working: If $n_1\le n_2$, Snell’s law always has a real solution for $r$.
</details>

### 5. Coherence

Two light sources are coherent if they have:

- A. the same intensity
- B. the same frequency and a constant phase difference
- C. the same wavelength in vacuum only
- D. the same polarisation

<details><summary>Answer</summary>

**B.** Coherence requires same frequency and a stable phase relation.

Working: Equal intensity or polarisation alone does not produce steady interference.
</details>

### 6. Fringe width

In Young’s experiment, if the slit separation $d$ is doubled while $\lambda$ and $D$ are unchanged, the fringe width:

- A. doubles
- B. halves
- C. becomes four times
- D. is unchanged

<details><summary>Answer</summary>

**B.** $\beta=\lambda D/d$, so $\beta\propto 1/d$.

Working: Doubling $d$ halves the spacing between fringes.
</details>

### 7. Single-slit central maximum

For a single slit of width $a$, the central maximum extends between:

- A. $m=0$ and $m=1$
- B. $m=-1$ and $m=+1$
- C. $m=-2$ and $m=+2$
- D. $m=0$ only

<details><summary>Answer</summary>

**B.** Minima occur at $m=\pm1,\pm2,\dots$; the central maximum lies between the first minima on either side.

Working: Its angular width is $2\lambda/a$, twice a side lobe.
</details>

### 8. Malus’s law

Plane-polarised light of intensity $I_0$ passes through an analyser at $60^\circ$. The transmitted intensity is:

- A. $I_0/2$
- B. $I_0/4$
- C. $3I_0/4$
- D. $I_0$

<details><summary>Answer</summary>

**B.** $I=I_0\cos^2 60^\circ=I_0/4$.

Working: $\cos60^\circ=1/2$, squared is $1/4$.
</details>

### 9. Brewster angle

For air to glass ($n=1.5$), Brewster’s angle is approximately:

- A. $33.7^\circ$
- B. $41.8^\circ$
- C. $56.3^\circ$
- D. $90^\circ$

<details><summary>Answer</summary>

**C.** $\tan\theta_B=1.5$, so $\theta_B\approx56.3^\circ$.

Working: This is not the critical angle ($41.8^\circ$).
</details>

### 10. Diffraction and aperture

If a single slit is made narrower, the diffraction pattern on the screen:

- A. becomes narrower
- B. becomes wider
- C. disappears
- D. is unchanged

<details><summary>Answer</summary>

**B.** The first minimum moves to larger $\theta$ because $\sin\theta_1=\lambda/a$ increases as $a$ decreases.

Working: A narrower aperture diffracts more.
</details>

## Section B — 5 numerical-value questions

### 11. Refraction angle

Light in air strikes glass ($n=1.50$) at $30^\circ$. Find the angle of refraction in degrees (to one decimal place).

<details><summary>Answer</summary>

$\sin r=\sin30^\circ/1.50=0.5/1.5=0.333$, so $r=\sin^{-1}(0.333)\approx19.5^\circ$.
</details>

### 12. Critical angle

Find the critical angle in degrees (to one decimal place) for light going from glass ($n=1.50$) to air.

<details><summary>Answer</summary>

$\sin C=1/1.50=0.667$, so $C=\sin^{-1}(0.667)\approx41.8^\circ$.
</details>

### 13. Fringe width

In Young’s experiment, $\lambda=5.0\times10^{-7}\ \text{m}$, $D=1.0\ \text{m}$, $d=0.25\ \text{mm}$. Find the fringe width in millimetres.

<details><summary>Answer</summary>

$\beta=\lambda D/d=(5.0\times10^{-7}\times1.0)/(2.5\times10^{-4})=2.0\times10^{-3}\ \text{m}=2.0\ \text{mm}$.
</details>

### 14. First minimum position

A single slit of width $0.10\ \text{mm}$ is illuminated by $\lambda=5.0\times10^{-7}\ \text{m}$; the screen is $2.0\ \text{m}$ away. Find the distance of the first minimum from the centre in millimetres.

<details><summary>Answer</summary>

$\sin\theta_1=\lambda/a=5.0\times10^{-7}/1.0\times10^{-4}=5.0\times10^{-3}$. Position $y_1=D\tan\theta_1\approx2.0\times5.0\times10^{-3}=0.010\ \text{m}=10\ \text{mm}$.
</details>

### 15. Malus intensity

Unpolarised light of intensity $120\ \text{W/m}^2$ passes through a polariser and then an analyser at $30^\circ$. Find the final intensity in $\text{W/m}^2$.

<details><summary>Answer</summary>

After polariser: $60\ \text{W/m}^2$. After analyser: $60\cos^2 30^\circ=60\times0.75=45\ \text{W/m}^2$.
</details>

## Section C — 3 assertion–reason questions

### 16. Transverse nature

**Assertion (A):** Light is a transverse wave.

**Reason (R):** Light can be polarised.

- A. Both A and R are true and R is the correct explanation of A.
- B. Both A and R are true but R is not the correct explanation of A.
- C. A is true but R is false.
- D. A is false but R is true.

<details><summary>Answer</summary>

**A.** Polarisation is possible only for transverse waves, so R explains A.
</details>

### 17. Central fringe

**Assertion (A):** In Young’s double-slit experiment the central fringe is bright.

**Reason (R):** At the centre of the screen the path difference from the two slits is zero.

- A. Both A and R are true and R is the correct explanation of A.
- B. Both A and R are true but R is not the correct explanation of A.
- C. A is true but R is false.
- D. A is false but R is true.

<details><summary>Answer</summary>

**A.** Zero path difference gives constructive interference, so the centre is bright.
</details>

### 18. Diffraction of all waves

**Assertion (A):** Diffraction is observed for all types of waves.

**Reason (R):** Huygens’ principle applies to every wave.

- A. Both A and R are true and R is the correct explanation of A.
- B. Both A and R are true but R is not the correct explanation of A.
- C. A is true but R is false.
- D. A is false but R is true.

<details><summary>Answer</summary>

**A.** Huygens’ construction predicts spreading at apertures for any wave, so diffraction is universal.
</details>

## Section D — 2 matching/multi-statement questions

### 19. Match the formula

Match each phenomenon to its defining formula.

| Phenomenon | Formula |
| --- | --- |
| P. Reflection law | 1. $n_1\sin i=n_2\sin r$ |
| Q. Refraction law | 2. $\angle i=\angle r$ |
| R. Critical angle | 3. $\sin C=n_2/n_1$ |
| S. Brewster angle | 4. $\tan\theta_B=n_2/n_1$ |

Choose the correct matching:

- A. P-2, Q-1, R-3, S-4
- B. P-1, Q-2, R-3, S-4
- C. P-2, Q-1, R-4, S-3
- D. P-1, Q-2, R-4, S-3

<details><summary>Answer</summary>

**A.** Reflection uses equal angles; refraction uses Snell’s law; critical angle uses sine ratio; Brewster uses tangent ratio.
</details>

### 20. Multi-statement

Which of the following statements are correct?

1. A narrower single slit produces a wider central maximum.
2. In Young’s experiment, the central fringe is bright.
3. Malus’s law can be applied directly to unpolarised light.
4. At Brewster’s angle, reflected light is completely polarised.

- A. 1, 2 and 4 only
- B. 1 and 2 only
- C. 2, 3 and 4 only
- D. All four

<details><summary>Answer</summary>

**A.** Statements 1, 2 and 4 are correct. Statement 3 is false: Malus requires already polarised light; unpolarised light is first halved by a polariser.
</details>

## Review by error, not by score

| If you missed… | Revisit | Then retry |
| --- | --- | --- |
| 1–4 or 11–12 | Reflection, refraction and total internal reflection | Redraw the wavefront at the boundary. |
| 5–7, 13–14 or 19 | Interference and Young’s experiment | Check path difference and which $d$ is used. |
| 8–10 or 15 | Single-slit diffraction and polarisation | Re-derive the minimum condition and Malus’s law. |
| 16–18 or 20 | Conceptual links | Explain the phenomenon before calculating. |

<learning-block type="recap" title="Ready for exam conditions?">
Aim for at least 17 correct out of 20 with a written method choice for every question. Questions you solve correctly but cannot justify are revision targets, not mastered topics.
</learning-block>