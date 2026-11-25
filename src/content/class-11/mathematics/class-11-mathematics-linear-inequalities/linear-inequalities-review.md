## Your study plan for this chapter

Linear inequalities is a set of small tools that combine: order rules, interval notation, algebraic solution, half-plane graphs and translation from words. A focused first pass takes about **1 hour 45 minutes**, plus a short break.

1. **Inequalities and the number line** — 20 min
2. **Linear inequalities in one variable** — 20 min
3. **Systems of inequalities and graphs** — 20 min
4. **Applications** — 20 min
5. **This mastery check** — 25 min

After each lesson, close the explanation and redo its questions from a blank page. Mark a module complete only when you can explain *why* the method works, not just reproduce the answer. After this pass, use the **JEE Main timed practice** module for a 50-minute mixed paper; its value is in choosing a method quickly under pressure.

## First choose the tool

| Clue in the question | Start with |
| --- | --- |
| Statement about order, or a set of numbers | Number line; read bounds into interval notation. |
| Negative coefficient in front of $x$ | Isolate $x$ and reverse the inequality sign. |
| A chain $a<f(x)\le b$ | Apply every operation to all three parts. |
| Quotient with $x$ in the denominator | Bring to one side; sign table; exclude the pole. |
| Modulus $|x-a|\,\square\,r$ | Distance interpretation: one interval or two rays. |
| Squared expression $x^2<k^2$ | Rewrite as $|x|<k$, then as $-k<x<k$. |
| Two variables and one inequality | Draw the boundary line; test a point; shade one side. |
| Braced system of inequalities | Intersect the half-planes; verify each vertex. |
| "At least", "at most", "cannot exceed" | Translate to $\ge$ or $\le$; add non-negativity. |
| Variables count objects | Keep only integer points of the feasible region. |

## Mastery check

Try each question before opening its answer. Work on a separate sheet and write the solution set in interval notation wherever possible.

### 1. Read an interval

Write $\{x\in\mathbb R:-3<x\le 7\}$ in interval notation. Is $7$ a solution?

<details><summary>Answer and reasoning</summary>

The left bound is open and the right bound is closed, so the set is $(-3,7]$. Yes, $7$ is a solution because the inequality on that side is $\le$.

</details>

### 2. Variables on both sides

Solve $5x-3\ge 2x+9$.

<details><summary>Answer and reasoning</summary>

$3x\ge 12$, so $x\ge 4$, that is $[4,\infty)$. Check: at $x=4$ both sides are $17$, so the endpoint is included.

</details>

### 3. A negative denominator constant

Solve $-\dfrac{2x-1}{3}>4$.

<details><summary>Answer and reasoning</summary>

Multiply by $3>0$: $-(2x-1)>12$, so $-2x+1>12$ and $-2x>11$. Dividing by $-2$ reverses the sign: $x<-\dfrac{11}{2}$. Check $x=-6$: $-\frac{-13}{3}=\frac{13}{3}>4$, correct.

</details>

### 4. A rational inequality

Solve $\dfrac{x-2}{x+1}\le 0$.

<details><summary>Answer and reasoning</summary>

The numerator vanishes at $2$ and the denominator at $-1$. For $x<-1$ the quotient is positive; for $-1<x<2$ it is negative; for $x>2$ it is positive. Include $x=2$ because zero satisfies $\le 0$, exclude $x=-1$ because the expression is undefined there. Answer: $(-1,2]$.

</details>

### 5. Modulus below a threshold

Solve $|3x+1|<7$.

<details><summary>Answer and reasoning</summary>

$-7<3x+1<7$, so $-8<3x<6$ and $-\dfrac83<x<2$. The solution is $\left(-\dfrac83,2\right)$; both endpoints are excluded because the inequality is strict.

</details>

### 6. Modulus above a threshold

Solve $|2-x|\ge 5$.

<details><summary>Answer and reasoning</summary>

Either $2-x\le -5$, giving $x\ge 7$, or $2-x\ge 5$, giving $x\le -3$. The solution is $(-\infty,-3]\cup[7,\infty)$. Check $x=8$: $|-6|=6\ge5$; check $x=0$: $2$ fails, as it should.

</details>

### 7. Sketch a region

Describe the region $x+2y\le 6$, $x\ge 0$, $y\ge 0$ and give its vertices.

<details><summary>Answer and reasoning</summary>

The line $x+2y=6$ joins $(6,0)$ and $(0,3)$. The origin satisfies $0\le6$, so keep the side containing the origin in the first quadrant. The result is a bounded triangle with vertices $(0,0)$, $(6,0)$ and $(0,3)$, boundary included.

</details>

### 8. A system with no solution

Solve the system $2x+y\ge 6$, $2x+y\le 3$.

<details><summary>Answer and reasoning</summary>

The two boundaries are parallel lines with the same slope. One condition keeps the side above $2x+y=6$, the other the side below $2x+y=3$, and no point lies in both. The solution set is empty, $\varnothing$.

</details>

### 9. Translate a resource problem

Pens use $1$ unit of ink and $2$ units of paper each; notebooks use $3$ units of ink and $1$ unit of paper each. There are $12$ units of ink and $10$ units of paper. Write the constraints for $p$ pens and $n$ notebooks, and decide whether $(3,2)$ is feasible.

<details><summary>Answer and reasoning</summary>

The constraints are $p\ge0$, $n\ge0$, $p+3n\le12$ (ink) and $2p+n\le10$ (paper). At $(3,2)$: $3+3(2)=9\le12$ and $2(3)+2=8\le10$, so the point is feasible. If pens and notebooks are counted in whole units, only lattice points of this region are real plans.

</details>

### 10. A quotient against one

Solve $\dfrac{2x-1}{x-3}\ge 1$.

<details><summary>Answer and reasoning</summary>

Bring all terms to one side: $\dfrac{(2x-1)-(x-3)}{x-3}=\dfrac{x+2}{x-3}\ge0$. The sign changes at $-2$ (zero) and $3$ (pole). The quotient is positive for $x<-2$, negative for $-2<x<3$, positive for $x>3$. Include $-2$, exclude $3$. Answer: $(-\infty,-2]\cup(3,\infty)$. Check $x=4$: $\frac71\ge1$; check $x=0$: $\frac13<1$, correctly outside.

</details>

## Self-check

You are ready for the timed set when you can:

- read any inequality chain and state its interval, including which endpoints are included;
- explain why dividing by a negative reverses the sign, and apply it to every part of a chain;
- solve a quotient inequality with a sign table without cross-multiplying by an unknown sign;
- convert $|x-a|\,\square\,r$ into one interval or two rays, with $r>0$ checked;
- shade the correct side of a line using a test point that is not on the line;
- find and verify the vertices of a bounded system, and recognise empty or unbounded regions;
- translate "at least" and "at most" correctly and add non-negativity where needed;
- state whether a variable must be an integer and say why that matters;
- check a numeric answer by substituting boundary and interior values.

If one item still feels shaky, revisit that concept module and redo its questions without the reveal.
