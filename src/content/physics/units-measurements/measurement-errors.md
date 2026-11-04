## The big idea

No measurement is perfectly exact. Instruments have limited resolution, and the act of measuring can introduce small variations. A useful result tells the reader both the value and how certain that value is.

## Start here

**Accuracy** describes how close a measurement is to the accepted value. **Precision** describes how closely repeated measurements agree with one another. A set of readings can be precise but not accurate if the instrument is consistently miscalibrated.

For a measured value $x$ with an estimated absolute uncertainty $\Delta x$, the relative uncertainty is $\Delta x/x$. As a percentage:

$$
\text{percentage uncertainty} = \frac{\Delta x}{x} \times 100\%
$$

Uncertainty is part of the measurement, not a mistake to hide. When adding or subtracting measured values, absolute uncertainties are added as a cautious estimate. For multiplication or division, percentage uncertainties are added. The sections below make those rules precise: first how many digits you may write down, then how errors travel through a formula, then which instrument to reach for and how to report what you found.

## Combining errors in a calculation

When two measured quantities are added or subtracted, their **absolute** uncertainties add:

$$
\Delta(A+B)=\Delta A+\Delta B, \qquad \Delta(A-B)=\Delta A+\Delta B.
$$

Two resistors in series, $(100 \pm 2)\ \Omega$ and $(50 \pm 3)\ \Omega$, give a total of $(150 \pm 5)\ \Omega$.

When quantities are multiplied or divided, their **relative** (or percentage) uncertainties add:

$$
Z=AB \ \text{ or } \ Z=\frac{A}{B} \quad\Rightarrow\quad \frac{\Delta Z}{Z}=\frac{\Delta A}{A}+\frac{\Delta B}{B}.
$$

Raising a quantity to a power repeats it, so its relative uncertainty is multiplied by the exponent:

$$
Z=A^{n} \quad\Rightarrow\quad \frac{\Delta Z}{Z}=|n|\,\frac{\Delta A}{A}.
$$

Putting the rules together, for a product of powers

$$
Z=\frac{A^{p}\,B^{q}}{C^{r}} \quad\Rightarrow\quad \frac{\Delta Z}{Z}=p\,\frac{\Delta A}{A}+q\,\frac{\Delta B}{B}+r\,\frac{\Delta C}{C},
$$

with $p$, $q$, $r$ positive numbers. Two warnings. First, these sums give the **maximum** error; they assume every measurement missed in the unlucky direction at once. Independent random errors usually partly cancel, and a more realistic estimate combines them in quadrature ($\Delta Z \approx \sqrt{(\Delta A)^2+(\Delta B)^2}$ for a sum). Exams conventionally ask for the worst case. Second, subtracting two nearly equal measurements is the danger zone: the absolute error stays $\Delta A+\Delta B$ while the result itself shrinks, so the *percentage* error can blow up.

## Significant figures and rounding

The digits you write are a claim about how well you measured. The rules for which digits count:

1. All non-zero digits are significant: $1.42$ has three.
2. Zeros sandwiched between non-zero digits are significant: $20.08$ has four.
3. Leading zeros only place the decimal point and never count: $0.0045$ has two.
4. Trailing zeros *after* a decimal point are significant: $2.50$ has three, $2.500$ has four.
5. Trailing zeros in a bare whole number are ambiguous: $1200$ could be two, three or four figures.

**Scientific notation removes the ambiguity.** Write $1.2 \times 10^{3}$ for two figures or $1.200 \times 10^{3}$ for four; the power of ten does not affect the count. Exact counts and defined conversions (12 eggs, $1\ \text{km} = 1000\ \text{m}$) carry unlimited significant figures — they never limit a result.

When rounding to $n$ figures, look at the first dropped digit: below 5 it leaves the kept digit alone (3.14 → 3.1), above 5 raises it (2.497 → 2.50 to three figures), and exactly 5 with nothing after it is commonly resolved to the nearest *even* digit (2.35 → 2.4, but 2.45 → 2.4 as well). Rounding a 5 always upward is also seen; either convention is fine as long as you use it consistently.

For arithmetic on measurements:

- **Multiplication or division** — the answer carries as many significant figures as the least precise input: $2.1 \times 3.456 = 7.2576 \to 7.3$ (two figures, limited by $2.1$).
- **Addition or subtraction** — the answer keeps the fewest **decimal places** of any input: $12.4 + 3.21 = 15.61 \to 15.6$.

These rules and the error-combination rules above say the same thing in different languages: the weakest measurement in a chain sets how good the result can be.

## Choosing an instrument

Every instrument has a **least count** — the smallest difference it can display or read. A typical lab set:

| Instrument | Usual least count | Suits |
| --- | --- | --- |
| Metre rule / tape | $1\ \text{mm}$ | lengths from centimetres to metres |
| Vernier callipers | $0.1\ \text{mm}$ (also $0.05$ or $0.02\ \text{mm}$) | inner and outer diameters, depths |
| Screw gauge | $0.01\ \text{mm}$ | wire thickness, thin sheets, small diameters |

The least count follows from the scale geometry. For a vernier whose $N$ divisions match $N-1$ main-scale divisions, $\text{LC}=\text{MSD}-\text{VSD}$: with $1\ \text{mm}$ main-scale divisions and $10\ \text{VSD}=9\ \text{MSD}$, $\text{LC}=0.1\ \text{mm}$. For a screw gauge, $\text{LC}=\text{pitch}/\text{divisions}$: a $0.5\ \text{mm}$ pitch with 50 head-scale divisions gives $0.01\ \text{mm}$.

Choose the instrument by comparing its least count with the **task's** required relative uncertainty, not with the manufacturer's catalogue. An uncertainty of $\pm 0.1\ \text{mm}$ is nothing on a $25\ \text{cm}$ tabletop ($0.04\%$) and ruinous on a $0.3\ \text{mm}$ wire ($33\%$). The reverse mistake happens too: a screw gauge cannot measure a room because its range is millimetres. For the size of the uncertainty a scale reading supports, school practicals often take half the least count and digital instruments $\pm 1$ in the last displayed digit, while many exam answers take one full least count; when a question is silent, say which convention you used.

## Reporting a measurement honestly

Write a result as $(x \pm \Delta x)\ \text{unit}$, with the value and the uncertainty at the **same decimal place** and the uncertainty rounded to one or two significant figures. $(3.1415 \pm 0.02)\ \text{V}$ is malformed — report $(3.14 \pm 0.02)\ \text{V}$.

$(20.0 \pm 0.1)\ \text{cm}$ claims the length lies between $19.9$ and $20.1\ \text{cm}$. Repeating the measurement shrinks the effect of random error but buys no extra digits: readings $2.53$, $2.56$, $2.55\ \text{cm}$ average to $2.5466\ldots$, and you report $2.55\ \text{cm}$ — the same decimal place the readings themselves used.

<learning-block type="mistake" title="More digits never means more precision">

$3.14159 \times 2.5$: the calculator prints $7.853975$, but the $2.5\ \text{cm}$ side carries only two significant figures, so the honest answer is $7.9\ \text{cm}^2$. The opposite slip costs marks as well: reporting $2.5\ \text{cm}$ when the instrument read $2.50\ \text{cm}$ throws away a digit you genuinely measured. A full calculator display is an arithmetic result, not a measurement.

</learning-block>

## Worked example

### How certain is this length?

A strip is measured as $(20.0 \pm 0.1)\ \text{cm}$. Its percentage uncertainty is

$$
\frac{0.1}{20.0} \times 100\% = 0.5\%
$$

The uncertainty is small compared with the length, so the measurement is reasonably precise. The notation also makes clear that the final decimal place is estimated, not exact.

### How uncertain is this density?

A cube of side $L=(2.00 \pm 0.02)\ \text{cm}$ has mass $m=(25.0 \pm 1.0)\ \text{g}$. Its density is $\rho = m/L^3 = 25.0/8.00 = 3.125\ \text{g/cm}^3$. The relative errors are

$$
\frac{\Delta m}{m}=\frac{1.0}{25.0}=4\%, \qquad \frac{\Delta L}{L}=\frac{0.02}{2.00}=1\%.
$$

The cube enters the density three times, so the maximum relative error is $4\% + 3 \times 1\% = 7\%$, i.e. $\Delta\rho = 0.07 \times 3.125 \approx 0.2\ \text{g/cm}^3$:

$$
\rho = (3.1 \pm 0.2)\ \text{g/cm}^3.
$$

Sanity check: $7\%$ of roughly $3\ \text{g/cm}^3$ is about $0.2\ \text{g/cm}^3$ — the uncertainty matches the percentage we computed — and a density near $3\ \text{g/cm}^3$ is a plausible value for a light metal or ceramic.

## Try it yourself

**A time interval is $(4.0 \pm 0.2)\ \text{s}$. What is its percentage uncertainty?**

<details>
<summary>Reveal the explanation</summary>

Divide the absolute uncertainty by the measured value and multiply by 100: $(0.2/4.0)\times100\%=5\%$.
</details>

**How many significant figures are in $0.02080\ \text{s}$? Why is $2080$ harder to answer, and how do you fix the writing?**

<details>
<summary>Reveal the explanation</summary>

Four. The two leading zeros only position the decimal point; the zero between 2 and 8 is sandwiched and counts; the final zero counts because it sits after the decimal point. The bare number $2080$ is ambiguous — its trailing zero may or may not be measured. Scientific notation fixes it: $2.080 \times 10^{3}$ states four figures, $2.08 \times 10^{3}$ states three.
</details>

**A cube's side is $(2.0 \pm 0.1)\ \text{cm}$. What percentage uncertainty does its volume carry?**

<details>
<summary>Reveal the explanation</summary>

The side carries $\Delta L/L = 0.1/2.0 = 5\%$. Volume is $L^3$, so multiply by the exponent: $3 \times 5\% = 15\%$. With $V = 8.0\ \text{cm}^3$ that is $\pm 1.2\ \text{cm}^3$. A ruler one-tenth of a centimetre coarse makes a cube's volume barely known — which is exactly why the right instrument matters.
</details>

In the next lesson we check formulas a different way — by their dimensions $[M]$, $[L]$, $[T]$ — which catches a class of errors that uncertainty arithmetic cannot see.

## Remember

- Accuracy and precision describe different things.
- Report uncertainty with the measured value and its unit.
- Do not report more digits than the instrument and uncertainty support.
- Sums and differences add **absolute** uncertainties; products, quotients and powers add **relative** ones, scaled by the exponent.
- Count significant figures from the first non-zero digit, and use scientific notation whenever trailing zeros would leave the count ambiguous.
