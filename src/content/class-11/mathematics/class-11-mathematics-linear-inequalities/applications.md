## Inequalities are the language of limits

"At least", "at most", "no fewer than", "cannot exceed" — these phrases describe limits, not equalities. A model turns them into variables and inequalities, then the algebraic and graphical tools from earlier modules answer the question. The hard part is rarely the calculation; it is deciding what each number means and which way the sign points.

## 1. Translating words into signs

| Phrase | Inequality |
| --- | --- |
| at least $k$, no less than $k$, minimum $k$ | $\ge k$ |
| at most $k$, no more than $k$, maximum $k$ | $\le k$ |
| more than $k$, exceeds $k$ | $>k$ |
| less than $k$, below $k$ | $<k$ |
| between $p$ and $q$, inclusive | $p\le x\le q$ |

Then name the variables with their units: "let $t$ be the third-test score, out of 100". Non-negativity is often unstated but essential when $t$ counts objects or measures a mass. If the variable counts people or indivisible items, only **integer** points of the region are admissible.

## 2. One-variable pattern: a bounded number

Twice a number plus $5$ is at least $13$ but less than $25$. Find the possible integers.

Let the number be $x$. The sentence becomes the chain

$$13\le 2x+5<25.$$

Subtract $5$: $8\le 2x<20$. Divide by $2>0$: $4\le x<10$. Since $x$ must be an integer, the solutions are $4,5,6,7,8,9$.

**Check.** At $x=4$ the expression equals $13$, included; at $x=9$ it equals $23$, still below $25$; at $x=10$ it equals $25$ and is correctly excluded.

## 3. One-variable pattern: an average requirement

A student scores $42$ and $58$ in two tests, each out of $100$. What is the lowest third-test score that gives an average of at least $55$?

Let the third score be $t$. Then

$$\frac{42+58+t}{3}\ge 55\iff 100+t\ge 165\iff t\ge 65.$$

Because $t\le 100$, the feasible interval is $[65,100]$; the required minimum is $65$ marks.

**Check.** With $t=65$ the average is $\frac{165}{3}=55$, exactly the threshold. With $t=64$ it is $\frac{164}{3}\approx54.67$, below the requirement. The answer is a score the student can actually obtain, so the data are consistent.

## 4. Two-variable pattern: a feasible mix

A dietician mixes two foods. Food P costs 5 rupees per kilogram and supplies $10\ \text{mg}$ of vitamin A and $5\ \text{mg}$ of vitamin B per kilogram. Food Q costs 4 rupees per kilogram and supplies $4\ \text{mg}$ of A and $12\ \text{mg}$ of B per kilogram. At least $40\ \text{mg}$ of A and $60\ \text{mg}$ of B are needed. Which mix is cheapest?

Let $p$ and $q$ be the kilograms of P and Q. The constraints are

$$p\ge 0,\quad q\ge 0,\quad 10p+4q\ge 40,\quad 5p+12q\ge 60.$$

The last two simplify to $5p+2q\ge 20$ and $5p+12q\ge 60$. The feasible region is the intersection of the half-planes above both lines in the first quadrant. Its corner points are:

| Corner | Source | A supplied | B supplied | Cost $5p+4q$ |
| --- | --- | --- | --- | --- |
| $(0,10)$ | A-line meets $p=0$ | $40$ | $120$ | $40$ |
| $\left(\frac{12}{5},4\right)$ | the two lines intersect | $40$ | $60$ | $28$ |
| $(12,0)$ | B-line meets $q=0$ | $120$ | $60$ | $60$ |

For the intersection, subtract $5p+2q=20$ from $5p+12q=60$ to get $10q=40$, so $q=4$ and then $5p=12$, giving $p=\frac{12}{5}=2.4$.

The cheapest feasible mix is $2.4\ \text{kg}$ of P and $4\ \text{kg}$ of Q, costing 28 rupees. Since both costs are positive, moving away from the origin can only increase the total, so the minimum occurs at a corner point — an idea developed fully in linear programming later.

**Check.** At $(2.4,4)$, vitamin A is $10(2.4)+4(4)=24+16=40\ \text{mg}$ and vitamin B is $5(2.4)+12(4)=12+48=60\ \text{mg}$: both requirements are met exactly. A tempting point such as $(0,5)$ fails A ($20<40$), which is why it is not a corner of the feasible region.

## 5. Integer points in a region

Suppose each unit counts a whole machine. A makes $2\ \text{kg}$ of flour and $1\ \text{kg}$ of sugar per unit; B makes $1\ \text{kg}$ of flour and $3\ \text{kg}$ of sugar per unit. Only $10\ \text{kg}$ of flour and $15\ \text{kg}$ of sugar are available. With $a,b\ge 0$ the constraints are

$$2a+b\le 10,\qquad a+3b\le 15.$$

The continuous region has corners $(0,0)$, $(5,0)$, $(3,4)$ and $(0,5)$; $(5,0)$ and $(0,5)$ come from the axes, while $(3,4)$ comes from solving $2a+b=10$ and $a+3b=15$. If $a$ and $b$ count machines, only lattice points such as $(3,4)$ are real plans. The feasible region alone does not decide this — the meaning of the variable does.

## 6. A common mistake

<learning-block type="mistake" title="Sign and unit errors in translation">

Writing "at least 40" as $10p+4q\le 40$ reverses the requirement: the mixture must *supply* $40$ or more, so the sign is $\ge$. Another frequent error is forgetting $p\ge 0$ and $q\ge 0$ and then accepting a negative mass as a valid corner point. Finally, keep units attached: $10p$ is in milligrams only because $p$ is measured in kilograms and the coefficient is $10\ \text{mg/kg}$. A numeric answer without its unit has not finished the problem.

</learning-block>

## 7. Modelling routine

1. Define each variable with its unit and state any non-negativity restriction.
2. Translate every phrase into an inequality, checking the direction of each sign.
3. Solve algebraically for one variable, or shade the feasible region for two.
4. If the variable counts indivisible objects, keep only integer points.
5. Interpret the answer in the original situation and test it in every constraint.

## Try it yourself

**1.** A number decreased by $7$ is greater than three times the number. Find the possible values.

<details><summary>Show the reasoning</summary>

$x-7>3x$ gives $-7>2x$, so $x<-3.5$. Check $x=-4$: $-11>-12$ is true; check $x=-3$: $-10>-9$ is false, consistent with the cutoff.

</details>

**2.** Scores of $38$ and $52$ are already recorded. If the average of three tests must exceed $50$, what is the lowest integer third score?

<details><summary>Show the reasoning</summary>

$\frac{38+52+t}{3}>50$ gives $90+t>150$, so $t>60$. The lowest integer score satisfying this is $61$ (and $t\le100$ is available). At $t=61$ the average is $\frac{151}{3}\approx50.33>50$.

</details>

**3.** Write the constraints for the machine problem in section 5 and verify that $(3,4)$ satisfies them.

<details><summary>Show the reasoning</summary>

The constraints are $2a+b\le10$, $a+3b\le15$, $a\ge0$, $b\ge0$. At $(3,4)$: $2(3)+4=10\le10$ and $3+3(4)=15\le15$, with both variables non-negative. It lies on both resource boundaries, so all flour and sugar are used exactly.

</details>

## Remember

- Map "at least" to $\ge$ and "at most" to $\le$ before doing any algebra.
- State non-negativity and unit restrictions explicitly; they often decide whether an answer is possible.
- A chain of conditions is solved by applying the same operation to every part.
- For two variables, describe the feasible region and check candidate points in all constraints.
- Always read the final interval back in words and test a boundary value.

The next module gathers these tools into a timed practice set: first choose the method, then calculate. Use the mastery check to find which of the four concept modules still needs another pass.
