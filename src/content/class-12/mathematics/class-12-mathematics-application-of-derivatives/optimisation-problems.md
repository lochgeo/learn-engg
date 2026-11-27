## From "best" to a derivative

A designer choosing the dimensions of a box, a farmer fencing a field, or a company setting a price all face the same structure: something is to be maximised or minimised, but it depends on several choices linked by a constraint. The derivative does not care about the story; it needs a single-variable function on a known domain. The work is in translating the story into that form.

## 1. The optimisation method

1. **Identify the objective** — the quantity to maximise or minimise; give it a name such as $A$ or $V$.
2. **Identify the constraint** — the fixed perimeter, area, budget or length linking the variables.
3. **Reduce to one variable** — use the constraint to express the objective as $Q(x)$.
4. **State the domain** — which values of $x$ are physically or mathematically allowed.
5. **Find critical points** — solve $Q'(x)=0$ inside the domain.
6. **Classify and check** — use $Q''$, a sign chart, or endpoint values; then interpret the answer in the original problem.

Skipping steps 4 and 6 is the usual source of wrong answers: a critical point may be a minimum when a maximum was wanted, or may lie outside the feasible range.

## 2. Worked example: a rectangle of fixed perimeter

A rectangle has perimeter $40\ \text{m}$. Choose its sides to maximise the area.

Let one side be $x$ metres. Since $2(x+y)=40$, the other side is $y=20-x$, and

$$
A(x)=x(20-x)=20x-x^2,\qquad 0<x<20.
$$

Then $A'(x)=20-2x$, so $A'(x)=0$ at $x=10$; $A''(x)=-2<0$, confirming a maximum. Thus $y=10$ and

$$
A_{\max}=10\times10=100\ \text{m}^2.
$$

**Sanity check:** the optimum is a square, matching the familiar result that among rectangles of fixed perimeter the square encloses the most area. As $x\to0$ or $x\to20$ the area tends to $0$, so an interior maximum is plausible.

## 3. Worked example: an open box from a sheet

A $24\ \text{cm}$ square sheet has equal squares of side $x$ cut from its corners; the flaps fold up to make an open box. Find the largest possible volume.

After cutting, the base is $(24-2x)$ by $(24-2x)$ and the height is $x$, so

$$
V(x)=x(24-2x)^2,\qquad 0<x<12.
$$

Differentiate with the product and chain rules:

$$
V'(x)=(24-2x)^2+x\cdot2(24-2x)(-2)=(24-2x)\bigl[(24-2x)-4x\bigr]=(24-2x)(24-6x).
$$

The critical points are $x=12$ (an endpoint giving zero volume) and $x=4$. For $0<x<4$ both factors are positive, so $V'>0$; for $4<x<12$ the second factor is negative, so $V'<0$. Hence $x=4$ gives the maximum:

$$
V(4)=4(16)^2=4\times256=1024\ \text{cm}^3.
$$

**Sanity check:** the box is $16\ \text{cm}$ by $16\ \text{cm}$ by $4\ \text{cm}$; cutting nothing ($x=0$) or cutting to the middle ($x=12$) gives zero volume, so a maximum in between is expected.

## 4. Worked example: a maximum product

Find two positive numbers with sum $12$ whose product is as large as possible.

Let the numbers be $x$ and $12-x$. The product is $P(x)=x(12-x)=12x-x^2$ for $0<x<12$. Then $P'(x)=12-2x=0$ gives $x=6$, and $P''(x)=-2<0$ confirms a maximum. The numbers are $6$ and $6$, with product $36$. **Sanity check:** for a fixed sum the product is largest when the numbers are equal, as the arithmetic–geometric mean inequality also says.

<learning-block type="mistake" title="Stopping too early and ignoring the domain">

Finding $Q'(x)=0$ and announcing a maximum is not enough: check the sign of $Q'$ or $Q''$, and compare endpoint values when the interval is closed. In the box problem $x=12$ is also a root of $V'$, but it gives zero volume and is excluded by the domain $0<x<12$. A second error is leaving two variables in the objective; the derivative of $x(20-y)$ with $y$ untouched is not a one-variable function.

</learning-block>

## Try it yourself

**A.** Minimise $x+\dfrac1x$ for $x>0$.

<details><summary>Show the reasoning</summary>

$f'(x)=1-\frac1{x^2}=0$ gives $x=1$ (the negative root is outside the domain). $f''(x)=\frac2{x^3}>0$ for $x>0$, so $x=1$ is a minimum with value $1+1=2$.

</details>

**B.** A rectangle has perimeter $20\ \text{m}$. Find its maximum area.

<details><summary>Show the reasoning</summary>

Sides $x$ and $10-x$: $A=10x-x^2$, $A'=10-2x=0$ gives $x=5$, $A''=-2<0$, so the maximum area is $5\times5=25\ \text{m}^2$.

</details>

**C.** Two positive numbers have sum $12$. Minimise the sum of their squares.

<details><summary>Show the reasoning</summary>

Let the numbers be $x$ and $12-x$. Then $S=x^2+(12-x)^2$, $S'=2x-2(12-x)=4x-24=0$ gives $x=6$; $S''=4>0$, so the minimum is $36+36=72$, attained when the two numbers are equal.

</details>

## Remember

- Write the objective as one variable using the constraint, then state the feasible domain.
- Solve $Q'(x)=0$ for candidates; classify with $Q''$ or a sign chart.
- On a closed interval, compare critical-point values with endpoint values.
- Interpret the optimum back in the original units and check that it is physically sensible.
- You now have all six tools; the practice module that follows trains choosing the right one.
