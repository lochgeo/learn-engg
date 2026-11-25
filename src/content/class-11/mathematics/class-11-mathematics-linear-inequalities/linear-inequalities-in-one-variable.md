## From a budget line to a solution set

A phone plan charges a fixed 299 plus 2 per gigabyte, and you can spend at most 400. If $g$ is the gigabytes used, "how much can I use?" becomes $299+2g\le 400$. The answer is not one number but an interval: $g\le 50.5$, so up to 50.5 GB, or 50 whole gigabytes if the provider rounds down. This module turns statements of the form $ax+b\,\square\,c$ into intervals, including the awkward cases where the coefficient is negative or the unknown sits in a denominator.

## 1. The general linear inequality in one variable

An inequality is **linear in one variable** when it can be written as

$$ax+b\,\square\,c,\qquad a,b,c\in\mathbb R,\ a\ne 0,$$

where $\square$ stands for one of $<$, $\le$, $>$ or $\ge$. Apply the order rules from the previous module to isolate $x$:

$$ax+b<c\iff ax<c-b\iff
\begin{cases}
x<\dfrac{c-b}{a}, & a>0,\\[6pt]
x>\dfrac{c-b}{a}, & a<0.
\end{cases}$$

The boundary point $\dfrac{c-b}{a}$ is where the corresponding *equation* holds; it splits the number line into two half-lines. Exactly one of those half-lines is kept, and the sign of $a$ tells you which. All four inequality symbols follow the same routine — only the inclusion or exclusion of the boundary changes.

If $a=0$ the expression is no longer linear: the inequality reduces to a statement such as $b<c$, which is either true for every real $x$ or false for every real $x$.

## 2. Unknowns on both sides

Collect the variable terms first:

$$ax+b\le cx+d\iff (a-c)x\le d-b.$$

Then decide the direction from the sign of $a-c$. For instance,

$$5x-4>2x+8\iff 3x>12\iff x>4.$$

The boundary $x=4$ is excluded because the inequality is strict. Substituting $x=4$ into the original statement gives $16>16$, false, as expected.

## 3. Rational inequalities that reduce to linear ones

An inequality such as $\dfrac{2x-1}{x+3}\le 1$ is not linear as written, but becomes linear after rearrangement. The golden rule is: **never multiply by an expression whose sign you do not know**. Instead, bring everything to one side and combine into a single fraction:

$$\frac{2x-1}{x+3}\le 1\iff\frac{(2x-1)-(x+3)}{x+3}\le 0\iff\frac{x-4}{x+3}\le 0.$$

A quotient can change sign only where its numerator is zero or its denominator is zero. Here those points are $x=4$ and $x=-3$; the denominator's zero must be excluded whatever the inequality symbol.

| Interval | $x-4$ | $x+3$ | Quotient |
| --- | --- | --- | --- |
| $x<-3$ | negative | negative | positive |
| $-3<x<4$ | negative | positive | negative |
| $x>4$ | positive | positive | positive |

The quotient is non-positive only in the middle interval, and $x=4$ gives zero, which is allowed. Hence the solution is $(-3,4)$.

**Check.** At $x=0$, $\dfrac{-1}{3}\le 1$ holds. At $x=4$, $\dfrac{7}{7}=1$ holds with equality. At $x=-3$ the expression is undefined, so the endpoint must be open.

## 4. Modulus inequalities

For $r>0$, $|x-a|$ is the distance from $x$ to $a$. Therefore

$$|x-a|<r\iff a-r<x<a+r,$$

$$|x-a|>r\iff x<a-r\ \text{or}\ x>a+r.$$

For the non-strict versions, replace the outer inequalities by $\le$ and $\ge$; the boundary points are then included.

### Worked example

Solve $|2x-3|\le 5$.

$$ -5\le 2x-3\le 5\iff -2\le 2x\le 8\iff -1\le x\le 4.$$

The solution is $[-1,4]$.

**Sanity check.** At $x=-1$, $|2(-1)-3|=|-5|=5$, allowed. At $x=4$, $|5|=5$, allowed. At $x=5$, $|7|=7>5$, so $5$ is correctly outside; at $x=-2$, $|-7|=7>5$, also outside. The two endpoints behave differently from points just beyond them, which is exactly what a closed interval predicts.

If $r<0$, then $|x-a|<r$ has no solution and $|x-a|>r$ is true for every real $x$; distance is never negative.

## 5. A common mistake

<learning-block type="mistake" title="Cross-multiplying by an unknown sign">

Writing $\dfrac{x-4}{x+3}\le 0$ as $x-4\le 0$ is wrong, because multiplying by $x+3$ reverses the inequality wherever $x+3<0$ and is meaningless where $x+3=0$. The same trap appears in "divide both sides by $x$". Use a sign table, or split into cases with $x+3>0$ and $x+3<0$. A second frequent error is forgetting to exclude the pole: $x=-3$ can never be a solution of a rational inequality whose denominator vanishes there.

</learning-block>

## 6. A dependable routine

1. Move all terms to one side; combine into a single fraction if necessary.
2. Find the boundary values where the expression is zero or undefined.
3. For a linear expression, isolate $x$ and reverse the sign only if you divide by a negative.
4. For a quotient, test the sign on each interval between boundary values.
5. Write the answer as an interval, then test an interior point and each endpoint.

## Try it yourself

**1.** Solve $3(2-x)\ge 4x+8$.

<details><summary>Show the reasoning</summary>

$6-3x\ge 4x+8$ gives $-7x\ge 2$, so dividing by $-7$ reverses the sign: $x\le -\dfrac27$. Check $x=0$ in the original: $6\ge 8$ is false, and $0$ is indeed outside the solution.

</details>

**2.** Solve $\dfrac{x+2}{x-4}\ge 0$.

<details><summary>Show the reasoning</summary>

The numerator is zero at $-2$ and the denominator at $4$. The quotient is positive for $x<-2$ (negative over negative), negative for $-2<x<4$, and positive for $x>4$. Include $-2$ because zero satisfies $\ge 0$, exclude $4$ because the expression is undefined there. Answer: $(-\infty,-2]\cup(4,\infty)$.

</details>

**3.** Solve $|3-2x|>7$.

<details><summary>Show the reasoning</summary>

Either $3-2x<-7$, giving $-2x<-10$ and $x>5$, or $3-2x>7$, giving $-2x>4$ and $x<-2$. The solution is $(-\infty,-2)\cup(5,\infty)$. Check $x=6$: $|-9|=9>7$; check $x=0$: $3$ is not greater than $7$.

</details>

## Remember

- Isolate the variable; the sign of the coefficient decides whether the inequality reverses.
- A boundary point is included only for $\le$ or $\ge$.
- Rational inequalities need a sign table: zeros may be included, poles never are.
- $|x-a|<r$ is a single interval; $|x-a|>r$ is two rays, for $r>0$.
- Verify by substituting a point from the answer and one point just outside it.

A single variable gives intervals. The next module adds a second variable, where each inequality keeps a half-plane and a system keeps their overlap.
