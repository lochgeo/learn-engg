## Why the last digit carries a message

When you write down a measurement, the digits do two jobs at once: they give the size of the quantity, and they advertise how well it was measured. In $2.34\ \text{cm}$, the 2 and the 3 are certain; the 4 is the estimated digit, the one the observer had to judge between scale markings. Keep every digit your instrument supports, and drop every digit you cannot justify — that discipline is what **significant figures** are for.

> A calculator will happily print eight digits after a quotient. Only you can decide how many of them the measuring process actually earns.

## 1. Counting significant figures

Start with counting — the rules are short, and everything else in this lesson builds on them. A quoted value's significant figures are the digits that carry certainty or one judged digit beyond it. The rules:

- All **non-zero digits** count.
- **Zeros between non-zero digits** count: in $2.308$, the zero is trapped and counts, giving 4 significant figures.
- **Leading zeros** are placeholders only: $0.052$ has 2 significant figures (the 5 and the 2).
- **Trailing zeros count** when a decimal point is present: $2.300\ \text{m}$ has 4 significant figures.
- Trailing zeros **without** a decimal point are ambiguous: $2300$ could be 2, 3 or 4 significant figures. Scientific notation removes the doubt.

| Quoted value | Significant figures | Why |
| --- | --- | --- |
| $2.308$ | 4 | interior zero is trapped |
| $0.052$ | 2 | leading zeros are placeholders |
| $2.300\ \text{m}$ | 4 | trailing zeros follow a decimal point |
| $2300$ | ambiguous | rewrite as $2.3\times10^3$ (2 SF) or $2.300\times10^3$ (4 SF) |
| $6.20\times10^{-3}$ | 3 | notation states the precision explicitly |

## 2. Scientific notation: making every zero honest

In scientific notation a value is written as a number between 1 and 10 multiplied by a power of ten. Every digit you write is then significant, so the notation doubles as a precision statement:

$$
2300\ \text{m} = 2.3\times10^3\ \text{m} = 2.30\times10^3\ \text{m} = 2.300\times10^3\ \text{m}
$$

All three mean the same length; they differ only in the precision claimed. This is why unit conversions must never invent precision: expressing $1.2\ \text{m}$ in millimetres gives $1.2\times10^3\ \text{mm}$ (2 significant figures), not $1200\ \text{mm}$, which pretends to know the length to the nearest millimetre.

## 3. Rounding rules

Round only once, at the end of a calculation, using the full unrounded digits throughout. Look at the digits you are about to drop:

- First dropped digit **below 5** — keep the last kept digit: $2.344 \to 2.34$ (3 SF).
- First dropped digit **above 5** — round the last kept digit up: $2.356 \to 2.36$ (3 SF).
- A **5 followed by any non-zero digit** also rounds up: $2.3451 \to 2.35$ (3 SF).
- A **bare 5, with nothing but zeros after it**, rounds so the last kept digit is **even**: $2.345 \to 2.34$ (the 4 stays), but $2.355 \to 2.36$ (the 5 goes up to 6). This convention, used in exam marking schemes, stops a systematic upward drift when many values are rounded.

Calculators typically round a bare $5$ upward. Either way, state your convention and apply it consistently within one calculation.

## 4. How many digits survive arithmetic?

Two situations, two rules:

- **Multiplication and division:** the result keeps as many significant figures as the input with the **fewest** significant figures. In $4.234 \times 1.3 = 5.5042$, the factor $1.3$ has only 2 significant figures, so report $5.5$.
- **Addition and subtraction:** the result keeps as many **decimal places** as the input with the fewest. In $12.60 + 3.4 = 16.00$, the sum is honest only to one decimal place: $16.0$.

**Exact numbers are free.** Counts, definitions such as $1\ \text{m} = 100\ \text{cm}$, and clean factors like the 2 in $2\pi r$ have unlimited precision and never limit the result. Timing twenty oscillations divides by exactly 20, so a stopwatch reading of $40.0\ \text{s}$ gives a period of $2.00\ \text{s}$: three significant figures in, three out. (Carrying the least-count uncertainty as in the previous lesson refines that to $(2.000 \pm 0.005)\ \text{s}$ — the extra digits are earned by the stated error, not invented.)

## Worked example

### A density you can defend

A metal block has mass $27.4\ \text{g}$; its volume, measured by displacement, is $10.1\ \text{cm}^3$. Find its density.

$$
\rho = \frac{m}{V} = \frac{27.4\ \text{g}}{10.1\ \text{cm}^3} = 2.7128\ldots\ \text{g/cm}^3
$$

Both inputs have 3 significant figures, so the result is reported as

$$
\rho = 2.71\ \text{g/cm}^3.
$$

**Sanity check:** metals have densities from roughly $0.5$ to $20\ \text{g/cm}^3$, and $2.71\ \text{g/cm}^3$ sits near aluminium. Also, quoting $2.7128$ would be dishonest: the volume's last digit is the estimated one, so the third figure of the density is already uncertain.

## Try it yourself

**1. How many significant figures do these contain: $0.00290\ \text{kg}$, $1.040\ \text{s}$, and $700\ \text{m}$ written without a decimal point? Rewrite the last one to show 3 significant figures.**

<details><summary>Show the reasoning</summary>

$0.00290\ \text{kg}$: the leading zeros are placeholders, so 2, 9 and the trailing 0 count — 3 significant figures. $1.040\ \text{s}$: trapped zero plus trailing zero after a decimal point — 4 significant figures. $700\ \text{m}$ is ambiguous; to claim 3 significant figures write $7.00\times10^2\ \text{m}$.

</details>

**2. Round $4.65$ and $0.004212$ to 2 significant figures.**

<details><summary>Show the reasoning</summary>

In $4.65$ a bare 5 is dropped after an even 6, so the digit stays even: $4.6$. In $0.004212$ the leading zeros are placeholders; keeping two figures gives $0.0042$.

</details>

**3. A notebook entry reads: “masses $2.42\ \text{g}$, $3.1\ \text{g}$ and $1.156\ \text{g}$; total $6.676\ \text{g}$.” Then a speed is computed as $60.0\ \text{m}$ in $12.1\ \text{s}$ and the calculator shows $4.958677686$. Report both results properly.**

<details><summary>Show the reasoning</summary>

The sum $6.676\ \text{g}$ must match the fewest decimal places among the inputs, which is one: report $6.7\ \text{g}$. For the division, both inputs have 3 significant figures, so report $4.96\ \text{m/s}$ — not the calculator's ten digits.

</details>

<learning-block type="mistake" title="Four ways precision is faked or lost">

- **Quoting the whole calculator display.** The measuring process earns only as many digits as its inputs support; round the final result once.
- **Calling trailing zeros insignificant everywhere.** In $2.300\ \text{m}$ they state the instrument's precision — they are significant.
- **Counting leading zeros.** In $0.006\ \text{m}$ the zeros only place the decimal point; the value has 1 significant figure.
- **Converting units and adding zeros.** $1.2\ \text{m}$ is $1.2\times10^3\ \text{mm}$, not $1200\ \text{mm}$ that feigns millimetre precision.

</learning-block>

## Remember

- The rules for counting are mechanical; the goal is not — it is to make the last digit match what the instrument and the uncertainty (previous lesson) really support.
- Trailing zeros without a decimal point or an explicit power of ten say nothing about precision; rewrite the number.
- Round once, at the end: fewest **significant figures** for products and quotients, fewest **decimal places** for sums and differences.
- Exact counts and definitions never limit precision.
- Carrying honest digits forward is also what makes a dimensional check meaningful — in the next lesson, dimensions test whether an equation is even built from compatible terms.
