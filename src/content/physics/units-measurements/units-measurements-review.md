## Your study plan for today

This chapter never asks for a difficult calculation — it asks you to be exact about what your numbers *mean*. A focused first pass takes about **2 hours**, plus a short break:

1. **Physical quantities & units** — 15 min
2. **The SI system and conversions** — 20 min
3. **Uncertainty, significant figures and error combination** — 25 min
4. **Dimensions and their limits** — 20 min
5. **This mastery check** — 25 min

Close each lesson's reveals and redo its questions from a blank page before moving on. After this pass, sit the **JEE Main timed practice** set for this chapter in one uninterrupted 50-minute block — its value is in choosing between the tools under a clock, not in learning them.

## First choose the tool

| Clue in the question | Reach for |
| --- | --- |
| "How many significant figures…" | Non-zeros count; sandwiched zeros count; leading zeros never; trailing zeros only after a decimal point |
| Multiply or divide measurements, then report | Result keeps the **fewest significant figures** in the inputs |
| Add or subtract measurements | Result keeps the **fewest decimal places** |
| Trailing-zero digits look ambiguous | Scientific notation: $1.2 \times 10^{3}$ vs $1.200 \times 10^{3}$ |
| "Maximum percentage error in …" | Sums/differences: add **absolute** errors; products/powers: add **relative** errors, each scaled by its exponent |
| Several readings of the same quantity | Mean $\bar{x}$, mean absolute error $\Delta \bar{x}$, percentage error $\Delta\bar{x}/\bar{x}\times100\%$ |
| "Which instrument should the student use?" | Compare least count with the quantity: least count ÷ reading is the error you will swallow |
| A vernier or screw-gauge reading | $\text{LC}=\text{MSD}-\text{VSD}$, or pitch ÷ circular-scale divisions; reading = main scale + coinciding division × LC |
| "Can this equation be correct at all?" | Homogeneity: every added, subtracted or equated term shares the same dimensions |
| Units or dimensions of a constant | Rearrange the law for the constant, then substitute known dimensions |
| "Derive a proportionality" | Match exponents of $[M]$, $[L]$, $[T]$; leave the dimensionless constant as $k$ |
| An argument of $\sin$, $\log$ or $e^{(\,)}$ | Must be dimensionless — that fixes the constant's dimensions |

## Mastery check

Try each without looking at the answer first. Use $g=10\ \text{m/s}^2$ unless a question states otherwise.

### 1. Count the digits

State the number of significant figures in each measurement: (a) $0.00450\ \text{A}$, (b) $20.08\ \text{m}$, (c) $1200\ \text{km}$, (d) $2.50 \times 10^{3}\ \text{s}$.

<details><summary>Answer and reasoning</summary>

(a) **3** — the leading zeros, including the one right after the decimal point, only position it; the 4 and 5 are significant, and so is the final zero because it sits after the decimal point. (b) **4** — the zero between 2 and 8 is sandwiched. (c) **Ambiguous** — 1 and 2 certainly count; the trailing zeros may or may not be measured. Write $1.2 \times 10^{3}$ km for two figures or $1.200 \times 10^{3}$ km for four. (d) **3** — scientific notation states the count explicitly.
</details>

### 2. Round it

Round (a) $2.497$ to three significant figures, and (b) both $2.35$ and $2.45$ to two. Why do (b)'s two answers agree?

<details><summary>Answer and reasoning</summary>

(a) The first dropped digit is 7, so round up: $2.50$ — the final zero must be written, or you claim only two figures. (b) Under round-half-to-even, $2.35 \to 2.4$ (3 is odd, go up) and $2.45 \to 2.4$ (4 is already even, stay). Both give $2.4$ because the even rule pulls in opposite directions for the two numbers; a course that always rounds 5 up gets $2.4$ and $2.5$. Use one convention consistently.
</details>

### 3. Area from a calculator screen

A rectangle's sides measure $2.1\ \text{cm}$ and $3.456\ \text{cm}$. A calculator prints $7.2576\ \text{cm}^2$. What should the student write down, and why not more?

<details><summary>Answer and reasoning</summary>

$7.3\ \text{cm}^2$. Multiplication is limited by the least precise input: $2.1\ \text{cm}$ carries two significant figures, so the area does too. The other six digits in $7.2576$ are arithmetic, not measurement.
</details>

### 4. A chain of additions

Compute $12.4\ \text{cm} + 3.21\ \text{cm} + 0.012\ \text{cm} - 9.7\ \text{cm}$ and report it to the right precision.

<details><summary>Answer and reasoning</summary>

The exact arithmetic gives $5.922\ \text{cm}$. Addition and subtraction are limited by decimal places, and $12.4$ and $9.7$ stop at the tenths, so the honest report is $5.9\ \text{cm}$.
</details>

### 5. Write it cleanly

Express (a) $0.00045\ \text{m}$, (b) $26{,}376\ \text{km}$ in metres, and (c) one micrometre in nanometres, each in scientific notation.

<details><summary>Answer and reasoning</summary>

(a) $4.5 \times 10^{-4}\ \text{m}$. (b) $26{,}376\ \text{km} = 2.6376 \times 10^{4}\ \text{km} = 2.6376 \times 10^{7}\ \text{m}$ (kilometres to metres multiplies by $10^3$; it does not change the significant-figure count because $1000\ \text{m/km}$ is exact). (c) $1\ \mu\text{m} = 10^{-6}\ \text{m} = 10^{3} \times 10^{-9}\ \text{m} = 10^{3}\ \text{nm}$.
</details>

### 6. Read the instrument

A vernier callipers has 10 vernier divisions matching 9 main-scale divisions of $1\ \text{mm}$. While measuring a rod, the main scale reads $7\ \text{mm}$ and the 6th vernier division coincides. (a) Find the least count and the reading. (b) The same student must measure a textbook's length ($\approx 25\ \text{cm}$) and a thin wire's diameter ($\approx 0.3\ \text{mm}$). Which instruments suit each, and why?

<details><summary>Answer and reasoning</summary>

(a) $\text{LC} = \text{MSD} - \text{VSD} = 1\ \text{mm} - 0.9\ \text{mm} = 0.1\ \text{mm}$; reading $= 7\ \text{mm} + 6 \times 0.1\ \text{mm} = 7.6\ \text{mm}$. (b) The textbook: a metre rule is ideal — $1\ \text{mm}$ on $250\ \text{mm}$ is $0.4\%$, and the rule's range covers the book. The wire: a screw gauge (LC $0.01\ \text{mm}$). The vernier's $0.1\ \text{mm}$ would be about $33\%$ of a $0.3\ \text{mm}$ wire; the screw gauge reduces that to about $3\%$. Choose least count *and* range to match the job.
</details>

### 7. Five swings

A student records a pendulum's period as $2.71$, $2.64$, $2.50$, $2.79$ and $2.86\ \text{s}$. Find the mean, the mean absolute error and the percentage error, and write the result in $(x \pm \Delta x)$ form.

<details><summary>Answer and reasoning</summary>

Mean $\bar{T} = (2.71+2.64+2.50+2.79+2.86)/5 = 13.50/5 = 2.70\ \text{s}$. The magnitudes of the deviations are $0.01, 0.06, 0.20, 0.09, 0.16\ \text{s}$, whose mean is $0.52/5 = 0.104 \approx 0.10\ \text{s}$. Percentage error $= 0.104/2.70 \times 100\% \approx 3.9\%$. Report $T = (2.70 \pm 0.10)\ \text{s}$ — value and uncertainty stop at the same decimal place.
</details>

### 8. Dimensions of a constant

Stokes' law for the drag on a small sphere moving slowly through a viscous fluid is $F = 6\pi \eta r v$, with $r$ the radius and $v$ the speed. (a) Find the dimensions of the coefficient of viscosity $\eta$. (b) Surface tension is force per unit length; find its dimensions and say whether it could be confused with $\eta$ in a dimensional check.

<details><summary>Answer and reasoning</summary>

(a) $\eta = F/(6\pi r v)$, and $6\pi$ is dimensionless, so
$$
[\eta]=\frac{[M][L][T]^{-2}}{[L]\,[L][T]^{-1}}=[M][L]^{-1}[T]^{-1},
$$
which is exactly the pascal-second: $\text{Pa·s} = \text{N·s/m}^2 = \text{kg}\,\text{m}^{-1}\,\text{s}^{-1}$. (b) Surface tension has $[M][L][T]^{-2} \div [L] = [M][T]^{-2}$. Different powers of $L$ and $T$ keep the two apart — but compare with pressure, $[M][L]^{-1}[T]^{-2}$: viscosity is one full power of time away from it, so a hurried $[T]^{-1}$ versus $[T]^{-2}$ slip is exactly the kind of error a dimensions check exists to catch.
</details>

### 9. Impossible at first sight

Which of these relations is dimensionally impossible? (a) $v^2 = u^2 + 2as$, (b) $v^2 = u^2 + 2at$, (c) $p = mv$, (d) $K = \tfrac12 mv^2$. For (d), what can dimensional analysis *not* tell you?

<details><summary>Answer and reasoning</summary>

**(b)**. In (a), $2as$ has $[L][T]^{-2}\cdot[L] = [L]^2[T]^{-2}$, matching both $v^2$ and $u^2$; in (b), $2at$ has $[L][T]^{-1}$ — a velocity, not a velocity squared, so the equation cannot hold in any units. (c) and (d) are consistent. For (d) the method proves only $K \propto mv^2$: the number $\tfrac12$ is dimensionless and invisible to it — only the work–energy calculation (or experiment) fixes it.
</details>

### 10. Push the error through a formula

A cylinder's volume is $V = \pi r^{2} h$. Its radius carries a $2\%$ uncertainty and its height $1\%$. (a) Find the maximum percentage uncertainty in $V$. (b) Would reporting the diameter $D = 2r$ instead and using $V = \pi D^{2} h/4$ change the answer? (c) In a different lab, $A = (10.0 \pm 0.2)\ \text{cm}$ and $B = (9.8 \pm 0.2)\ \text{cm}$. Find $A - B$ and its percentage error, and explain why the result is so much worse than the roughly $2\%$ that each length carries on its own.

<details><summary>Answer and reasoning</summary>

(a) $\Delta V/V = 2(\Delta r/r) + \Delta h/h = 2(2\%) + 1\% = 5\%$; $\pi$ is exact and contributes nothing. (b) No. $D$'s percentage error equals $r$'s (the factor 2 is exact), and it still enters squared: $2(2\%) + 1\% = 5\%$. (c) $A - B = 0.2\ \text{cm}$ with absolute error $\pm 0.4\ \text{cm}$: differences add absolute errors. The percentage error is $0.4/0.2 \times 100\% = 200\%$. Subtracting two close numbers shrinks the result while the absolute error stays put, so relative error explodes — a warning against measuring small gaps by taking differences of large readings.
</details>

## Self-check

You are ready to move on when you can:

- state the significant-figure rules for sums versus products without a prompt;
- decide whether a trailing zero is measured or ambiguous, and rewrite the number in scientific notation;
- report any measurement as $(x \pm \Delta x)$ with matching decimal places;
- push uncertainties through sums, products, quotients, powers and roots (a square root halves the relative error);
- compute a vernier or screw-gauge least count and take a reading from it;
- reject a dimensionally inconsistent equation and extract the dimensions of a constant from a law;
- name at least three things dimensional analysis can never do;
- explain why the difference of two large, careful measurements can carry a huge percentage error.

If any line still feels shaky, revisit the module it comes from — *Uncertainty in measurement*, *Dimensions & dimensional analysis*, *The SI system* — redo its questions hidden, and then take the chapter's timed JEE Main set.
