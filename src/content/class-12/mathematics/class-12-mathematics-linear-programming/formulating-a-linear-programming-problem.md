## Why optimisation needs a language

A factory can make two products, but machine hours, labour, and raw material are limited. A diet plan must meet nutrition targets without exceeding cost. A transport schedule must move goods while keeping fuel use low. In each case, the question is not merely "what is possible?" but "what is best among the possible choices?"

Linear programming gives this question a precise mathematical form. We describe the choices by variables, describe the goal by a function, and describe the limits by inequalities. The word *linear* matters: the objective and every constraint are linear expressions in the decision variables. That restriction makes the problem tractable and gives the graphical and algebraic methods used in this chapter.

## The ingredients of a linear programme

A linear programming problem (LPP) has four parts.

1. **Decision variables.** These represent the quantities we can control, such as $x$ units of product A and $y$ units of product B. They are usually written as $x\ge 0$, $y\ge 0$ when negative quantities make no sense.
2. **Objective function.** This is the linear function to be maximised or minimised, for example
   $$
   Z = ax + by.
   $$
   Here $Z$ is the value we care about: profit, cost, time, distance, or another quantity. The coefficients $a$ and $b$ are constants with appropriate units.
3. **Constraints.** These are linear inequalities or equations that limit the decision variables. A machine-hour limit might be $2x + 3y \le 120$. A minimum requirement might be $x + y \ge 10$.
4. **Non-negativity restrictions.** In most practical problems, $x \ge 0$ and $y \ge 0$. These are constraints too, and they must not be forgotten.

A formulation is complete only when all four parts are stated clearly. Writing the objective function without constraints, or writing constraints without declaring the variables, leaves the problem undefined.

## Translating words into mathematics

The safest formulation method is to move in a fixed order.

| Step | What to do | Common check |
| --- | --- | --- |
| Identify variables | Name what can be chosen and write their units. | Can you answer "what does $x$ represent?" in one sentence? |
| Write the objective | Express the quantity to maximise or minimise as a linear function. | Are the coefficients per-unit values with matching units? |
| Write resource constraints | Convert each limit into $\le$, $\ge$, or $=$. | Does the inequality direction match "at most" or "at least"? |
| Add non-negativity | Include $x\ge 0, y\ge 0$ where required. | Would a negative value be meaningful? |

The inequality direction is a language issue before it is a mathematics issue. "At most 100 hours available" means total hours used $\le 100$. "At least 40 units required" means total units supplied $\ge 40$. Reversing this direction changes the feasible region completely.

## Worked example: formulating a production problem

A workshop makes two types of gift boxes: standard and deluxe. A standard box needs $2$ hours of assembly and $1$ metre of decorative ribbon. A deluxe box needs $1$ hour of assembly and $2$ metres of ribbon. The workshop has at most $40$ assembly hours and at most $50$ metres of ribbon available each day. The profit is Rs. $30$ on each standard box and Rs. $20$ on each deluxe box. Formulate the LPP to maximise daily profit, assuming all boxes made are sold.

### Formulation

Let $x$ be the number of standard boxes and $y$ the number of deluxe boxes made per day.

The profit to be maximised is
$$
Z = 30x + 20y.
$$

Assembly hours give
$$
2x + y \le 40.
$$

Ribbon gives
$$
x + 2y \le 50.
$$

The variables cannot be negative:
$$
x \ge 0, \qquad y \ge 0.
$$

So the LPP is: maximise $Z = 30x + 20y$ subject to $2x+y\le 40$, $x+2y\le 50$, $x\ge 0$, $y\ge 0$.

### Sanity check

Check the units and the boundary meaning. In $2x+y\le 40$, the term $2x$ has units (hours/box)(boxes) = hours, and $y$ has hours/box multiplied by boxes, so the left side is total assembly hours. The point $(20,0)$ uses exactly $40$ hours and gives $Z=600$. The point $(0,25)$ uses exactly $50$ metres of ribbon and gives $Z=500$. Both are feasible and produce sensible profits, so the formulation is internally consistent.

<learning-block type="mistake" title="Mixing up the constraint direction">
When a problem states "at most 40 hours are available", the correct constraint is $2x + y \le 40$, not $\ge 40$. The symbol $\le$ describes a ceiling; $\ge$ describes a floor. A quick test is to try the point $(0,0)$: making nothing should be feasible when only resource ceilings are present. If $(0,0)$ fails your inequality, the direction is probably reversed.
</learning-block>

## Try it yourself

1. A baker makes loaves of type A and type B. Each loaf of A needs $300\ \text{g}$ flour and $20\ \text{g}$ butter. Each loaf of B needs $200\ \text{g}$ flour and $40\ \text{g}$ butter. The baker has $12\ \text{kg}$ flour and $1.6\ \text{kg}$ butter available. Profit is Rs. $15$ per loaf of A and Rs. $18$ per loaf of B. Formulate the LPP to maximise profit.

<details><summary>Show the reasoning</summary>

Let $x$ be the number of loaves of type A and $y$ the number of loaves of type B.

Convert available quantities to grams: $12\ \text{kg}=12000\ \text{g}$ and $1.6\ \text{kg}=1600\ \text{g}$.

Objective: maximise $Z = 15x + 18y$.

Flour: $300x + 200y \le 12000$, which simplifies to $3x + 2y \le 120$.

Butter: $20x + 40y \le 1600$, which simplifies to $x + 2y \le 80$.

Non-negativity: $x\ge 0, y\ge 0$.

The simplified flour constraint is equivalent because dividing both sides of an inequality by a positive number preserves its direction.

</details>

2. A student wants to buy notebooks and pens. A notebook costs Rs. $40$ and a pen costs Rs. $10$. She needs at least $5$ items in total and can spend at most Rs. $200$. She wants to maximise the number of notebooks purchased. Formulate the LPP.

<details><summary>Show the reasoning</summary>

Let $x$ be the number of notebooks and $y$ the number of pens.

Objective: maximise $Z = x$.

Total items: $x + y \ge 5$.

Budget: $40x + 10y \le 200$, which simplifies to $4x + y \le 20$.

Non-negativity: $x\ge 0, y\ge 0$.

The objective is linear even though it contains only $x$; this is allowed because $Z=1\cdot x+0\cdot y$.

</details>

3. A company transports packages using vans and trucks. Each van carries $8$ packages and costs Rs. $300$ per trip. Each truck carries $20$ packages and costs Rs. $600$ per trip. At least $120$ packages must be delivered, and at most $8$ vehicles can be used. Formulate the LPP to minimise cost.

<details><summary>Show the reasoning</summary>

Let $x$ be the number of van trips and $y$ the number of truck trips.

Objective: minimise $C = 300x + 600y$.

Package requirement: $8x + 20y \ge 120$, which simplifies to $2x + 5y \ge 30$.

Vehicle limit: $x + y \le 8$.

Non-negativity: $x\ge 0, y\ge 0$.

A useful check: $(0,6)$ delivers $120$ packages with cost $3600$, while $(5,3)$ would violate the vehicle limit because $8>8$ is false. The constraints correctly exclude it.

</details>

## Remember

- An LPP is defined by decision variables, a linear objective function, linear constraints, and non-negativity restrictions.
- "At most" translates to $\le$ and "at least" translates to $\ge$; test the direction with a simple point such as $(0,0)$.
- Keep units consistent before simplifying constraints; divide by positive constants only.
- A formulation is not solved yet. The next step is to represent the constraints graphically and identify where all of them are satisfied together.