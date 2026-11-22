## How to use this timed set

This is a **50-minute, no-notes** paper in the JEE Main style, for after the chapter lessons and the mastery check. Spend roughly 15 minutes on Section A, 12 on Section B, 12 on Section C, 8 on Section D, and hold 3 minutes in reserve for review. Mark a question for revisit after 90 seconds; unit-and-measurement questions are short by design, and almost every one can be settled without a long calculation.

Use $g = 10\ \text{m/s}^2$ unless a question states otherwise. For numerical answers, give the value rounded to a sensible number of significant figures — that habit is part of the syllabus of this chapter.

## Conditions and formula sheet

| Situation | Start with | Check before using it |
| --- | --- | --- |
| Speed in km/h wanted in m/s | multiply by $\tfrac{5}{18}$ | The factor is exact; it never limits significant figures. |
| Percentage error of a product or quotient | add the percentage errors | Use **maximum** errors, the exam convention. |
| A quantity is raised to the power $n$ | multiply its percentage error by $n$ | The exponent matters even when $n = \tfrac12$. |
| Sum or difference of measurements | add the **absolute** errors | The result keeps the fewest decimal places of the inputs. |
| Rounding a value with a trailing 5 | round so the last kept digit is even | Applies when nothing non-zero follows the 5. |
| "Which equation could be correct?" | match dimensions of every term | Dimless constants ($2$, $\tfrac12$, $\pi$) are invisible to this check. |
| Naming a derived quantity from its formula | write the dimensions, then simplify | Cancel $L$ and $T$ exponents explicitly. |

<learning-block type="mistake" title="Fast sanity checks for this chapter">

Stop and re-examine your setup if: taking a square root made a percentage error **grow** (a root halves it, a power multiplies it); a rounded result claims more digits than its uncertainty supports; a "dimensionless" answer still carries units; or a unit conversion changed the number of significant figures you report.

</learning-block>

## Section A — 10 rapid MCQs

Warm up with these single-mark questions: they test recognition rather than stamina, so keep each one to well under a minute.

### 1. Counting digits

The number of significant figures in $0.00685$ is:

- A. 3
- B. 4
- C. 5
- D. 6

<details><summary>Answer</summary>

**A.** The leading zeros are placeholders only; 6, 8 and 5 count, giving 3 significant figures.

</details>

### 2. Base units

Which of the following is **not** an SI base unit?

- A. candela
- B. mole
- C. newton
- D. ampere

<details><summary>Answer</summary>

**C.** The newton is derived from mass, length and time: $1\ \text{N} = 1\ \text{kg·m·s}^{-2}$. Candela, mole and ampere are three of the seven base units.

</details>

### 3. Errors through a product of powers

The quantity $X = \dfrac{a^2 b^3}{\sqrt{c}}$ is computed from measured $a$, $b$, $c$ with percentage errors $2\%$, $3\%$ and $1\%$ respectively. The maximum percentage error in $X$ is:

- A. $8\%$
- B. $9.5\%$
- C. $13.5\%$
- D. $18\%$

<details><summary>Answer</summary>

**C.** Multiply each percentage error by its exponent and add:

$$
2(2\%) + 3(3\%) + \tfrac12(1\%) = 4\% + 9\% + 0.5\% = 13.5\%.
$$

</details>

### 4. Speed conversion

A scooter moves at $18\ \text{km/h}$. Its speed in m/s is:

- A. $2\ \text{m/s}$
- B. $5\ \text{m/s}$
- C. $10\ \text{m/s}$
- D. $18\ \text{m/s}$

<details><summary>Answer</summary>

**B.** $18 \times \tfrac{5}{18} = 5\ \text{m/s}$.

</details>

### 5. Dimensional consistency

For uniformly accelerated motion ($u$ = initial speed), which equation is dimensionally **incorrect**?

- A. $v = u + at$
- B. $s = ut + \tfrac12 at^2$
- C. $v^2 = u^2 + 2as$
- D. $s = \tfrac12 at^3$

<details><summary>Answer</summary>

**D.** The right side gives $[L][T]^{-2}[T]^3 = [L][T]$, which is not a length. In options A–C every term reduces to $[L][T]^{-1}$ or $[L]$ consistently.

</details>

### 6. Rounding convention

$2.745$ rounded to 3 significant figures is:

- A. $2.74$
- B. $2.75$
- C. $2.70$
- D. $2.80$

<details><summary>Answer</summary>

**A.** A bare 5 is dropped after an even digit (4), so the digit stays even: $2.74$. The alternative $2.75$ applies only when the last kept digit is odd.

</details>

### 7. Error in a difference

Two lengths are measured as $a = (10.0 \pm 0.1)\ \text{cm}$ and $b = (4.0 \pm 0.1)\ \text{cm}$. The absolute error in $x = a - b$ is:

- A. $0$
- B. $0.1\ \text{cm}$
- C. $0.2\ \text{cm}$
- D. $0.4\ \text{cm}$

<details><summary>Answer</summary>

**C.** Errors in a difference add, exactly as in a sum: $\Delta x = 0.1 + 0.1 = 0.2\ \text{cm}$. Note the relative error grows when subtracting: the value shrank to $6.0\ \text{cm}$ but the error did not.

</details>

### 8. Choosing an instrument

The thickness of a sheet is about $0.3\ \text{mm}$. Which instrument is appropriate for a sensible measurement?

- A. metre rule (least count $1\ \text{mm}$)
- B. vernier callipers (least count $0.1\ \text{mm}$)
- C. screw gauge (least count $0.01\ \text{mm}$)
- D. any of these work equally well

<details><summary>Answer</summary>

**C.** With a millimetre rule the reading would be almost all uncertainty; the callipers' $0.1\ \text{mm}$ least count is already about a third of the $0.3\ \text{mm}$ sheet. The screw gauge's $0.01\ \text{mm}$ least count makes the uncertainty a few per cent.

</details>

### 9. Recognising the same dimensions

Impulse equals force times the time for which it acts. Its dimensional formula is:

- A. $[M][L][T]^{-1}$
- B. $[M][L]^2[T]^{-1}$
- C. $[M][L][T]^{-2}$
- D. $[M][L]^2[T]^{-2}$

<details><summary>Answer</summary>

**A.** $[F][t] = [M][L][T]^{-2}[T] = [M][L][T]^{-1}$ — the same as momentum, as the impulse–momentum idea demands.

</details>

### 10. Not dimensionless

Which of these quantities is **not** dimensionless?

- A. surface tension
- B. relative density
- C. strain
- D. an angle measured in radians

<details><summary>Answer</summary>

**A.** Surface tension is force per unit length: $[M][T]^{-2}$. Relative density is a ratio of densities, strain a ratio of lengths, and a radian is length over length — all dimensionless.

</details>

## Section B — 5 numerical-value questions

### 11. Period from repeated oscillations

A stopwatch (least count $0.1\ \text{s}$) times 20 oscillations of a pendulum as $40.0\ \text{s}$. Find the period with its maximum error.

<details><summary>Answer</summary>

The count 20 is exact. The period is

$$
T = \frac{40.0}{20} = 2.000\ \text{s}, \qquad \Delta T = \frac{0.1}{20} = 0.005\ \text{s}.
$$

Report $T = (2.000 \pm 0.005)\ \text{s}$. Dividing a larger clock reading by a count is exactly why timing many oscillations shrinks the relative error.

</details>

### 12. Error in the volume of a cube

The side of a cube is measured as $l = (2.0 \pm 0.1)\ \text{cm}$. Find the maximum percentage error in the computed volume.

<details><summary>Answer</summary>

Volume is $V = l^3$, so the percentage error is multiplied by 3:

$$
\frac{\Delta V}{V}\times100\% = 3\times\frac{0.1}{2.0}\times100\% = 15\%.
$$

(With $V = 8\ \text{cm}^3$ this corresponds to $\Delta V = 1.2\ \text{cm}^3$.)

</details>

### 13. Resistance from measured current and voltage

For a resistor, the voltage is $(100 \pm 5)\ \text{V}$ and the current is $(10 \pm 0.2)\ \text{A}$. Find $R = V/I$ with its maximum absolute error.

<details><summary>Answer</summary>

The central value is $R = \frac{100}{10} = 10\ \Omega$. Percentage errors add:

$$
\frac{\Delta R}{R}\times100\% = 5\% + 2\% = 7\%, \qquad \Delta R = 0.7\ \Omega.
$$

So $R = (10 \pm 0.7)\ \Omega$.

</details>

### 14. Error propagated into $g$

In $g = \dfrac{4\pi^2 l}{T^2}$, the length $l$ carries a $2\%$ error and the period $T$ a $3\%$ error. Find the maximum percentage error in $g$.

<details><summary>Answer</summary>

$T$ appears squared (the factor $4\pi^2$ is exact), so its error counts twice:

$$
\frac{\Delta g}{g}\times100\% = 2\% + 2(3\%) = 8\%.
$$

This is why examiners love pendulum questions: a modest $3\%$ timing error already dominates the length error.

</details>

### 15. Scientific notation with correct rounding

Evaluate $(5.2\times10^{-6}) \times (3.0\times10^{-2})$ and report the product to the appropriate number of significant figures.

<details><summary>Answer</summary>

$$
(5.2)(3.0)\times10^{-8} = 15.6\times10^{-8} = 1.56\times10^{-7}.
$$

Each factor carries 2 significant figures, so round the mantissa: $1.6\times10^{-7}$.

</details>

## Section C — 3 assertion–reason questions

Each question has an **Assertion (A)** and a **Reason (R)**. Choose:

- **A.** both A and R are true, and R is the correct explanation of A
- **B.** both A and R are true, but R is not the correct explanation of A
- **C.** A is true but R is false
- **D.** A is false but R is true

### 16. Energy and torque

**A:** Work and torque have the same dimensional formula, $[M][L]^2[T]^{-2}$.
**R:** Both quantities can be written as a force multiplied by a distance.

<details><summary>Answer</summary>

**A.** Work is $F d$ with displacement along the force; torque is $F d$ with the distance a lever arm. Both give $[M][L][T]^{-2}[L] = [M][L]^2[T]^{-2}$. Same dimensions, but they are different quantities — a reminder that dimensional analysis cannot distinguish quantities sharing a formula shape.

</details>

### 17. Precise but wrong

**A:** Repeated readings from a miscalibrated balance can agree closely with each other yet all be wrong.
**R:** A systematic error shifts every reading by about the same amount and so does not show up as scatter.

<details><summary>Answer</summary>

**A.** Precision reflects the agreement (scatter) of readings; accuracy reflects closeness to the true value. A calibration error displaces all readings alike, so the set can be tight and still off-target.

</details>

### 18. What dimensional analysis cannot do

**A:** Dimensional analysis can determine the numerical value of a dimensionless constant such as $\tfrac12$ or $2\pi$ appearing in a formula.
**R:** Dimensional methods only require the base dimensions to balance on the two sides of an equation.

<details><summary>Answer</summary>

**D.** The assertion is false: balancing $[M]$, $[L]$ and $[T]$ leaves every dimensionless factor undetermined — $\tfrac12$ in $s = \tfrac12at^2$ and $2\pi$ in $T = 2\pi\sqrt{l/g}$ both come from experiment or derivation. The reason is a true statement about what the method does.

</details>

## Section D — 2 matching / multi-statement questions

### 19. Match the dimensions

Match each quantity in List-I with its dimensional formula in List-II.

| List-I | List-II |
| --- | --- |
| P. Power | 1. $[M][L]^{-1}[T]^{-2}$ |
| Q. Momentum | 2. $[T]^{-1}$ |
| R. Pressure | 3. $[M][L]^2[T]^{-3}$ |
| S. Frequency | 4. $[M][L][T]^{-1}$ |

<details><summary>Answer</summary>

P–3, Q–4, R–1, S–2.

- Power = energy/time: $[M][L]^2[T]^{-2}[T]^{-1} = [M][L]^2[T]^{-3}$.
- Momentum = mass × velocity: $[M][L][T]^{-1}$.
- Pressure = force/area: $[M][L][T]^{-2}/[L]^2 = [M][L]^{-1}[T]^{-2}$.
- Frequency = 1/period: $[T]^{-1}$.

</details>

### 20. Three statements to judge

Consider these statements:

- **S1:** The mass $0.0300\ \text{g}$ is stated to three significant figures.
- **S2:** The length "$2300\ \text{m}$" unambiguously shows the precision of the measurement.
- **S3:** The sum $12.4 + 1.02 = 13.42$ should be reported as $13.4$.

How many of the statements are correct?

<details><summary>Answer</summary>

**Two — S1 and S3.**

- S1 is correct: the two leading zeros are placeholders; 3, 0, 0 are the significant figures.
- S2 is wrong: trailing zeros without a decimal point or an explicit power of ten are ambiguous — write $2.3\times10^3\ \text{m}$ or $2.300\times10^3\ \text{m}$ to state the precision.
- S3 is correct: for addition the result keeps the fewest decimal places among the inputs (one), and 13.42 rounds to 13.4.

</details>

## Review by error, not by score

| If you missed… | Revisit | Then retry |
| --- | --- | --- |
| 1, 6, 15, 20 | Significant figures & rounding | Count digits first, then apply one rounding rule at the end. |
| 2, 4 | The SI system | Build derived units from base units instead of recalling them. |
| 3, 7, 8, 11, 12, 13, 14, 17 | Uncertainty in measurement | Separate absolute from percentage error before combining anything; pick the instrument by least count. |
| 5, 9, 10, 16, 18, 19 | Dimensions & dimensional analysis | Write $[M]$, $[L]$, $[T]$ exponents explicitly; remember the method's limits. |

<learning-block type="recap" title="After the paper">

Aim for at least 15 of 20 correct within the 50 minutes. Questions solved correctly but slowly, or solved by elimination without understanding, are revision targets: units and measurement is a judgment chapter, and the judgement only comes from redoing the ones you got wrong.

</learning-block>
