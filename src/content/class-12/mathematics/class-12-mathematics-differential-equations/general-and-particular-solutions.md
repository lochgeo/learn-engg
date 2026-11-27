## Solutions as functions or relations
A **solution** of a differential equation is any function $y = \phi(x)$ (or any relation $g(x,y)=0$ that can be treated as giving $y$ implicitly) which, when substituted into the equation together with its derivatives, satisfies it for all $x$ in some interval.

For instance, $y = x^2 + C$ gives $\frac{dy}{dx} = 2x$ for any constant $C$. Substituting shows $2x = 2x$, so $y = x^2 + C$ is a solution of $\frac{dy}{dx}=2x$ for every real $C$.

## General solution
The **general solution** of an ordinary differential equation is a solution that contains as many independent arbitrary constants as the order of the equation.

- A first order equation typically has one arbitrary constant.
- A second order equation typically has two independent arbitrary constants.

Geometrically, the general solution of a first order equation often represents a **family of curves** (one curve for each value of the constant). For example, $y = x^2 + C$ is a family of parabolas shifted vertically.

<learning-block type="concept" title="Independent arbitrary constants">
Constants are called independent if you cannot combine them into fewer constants. For example, $y = (C_1 + C_2)x$ is really $y = Cx$ with one constant, so it does not count as two independent constants. In standard problems, the form you obtain directly gives the correct count equal to the order.
</learning-block>

## Particular solution
A **particular solution** is obtained from the general solution by assigning specific values to the arbitrary constants, using extra conditions.

Common conditions:
- An **initial condition** such as $y(x_0)=y_0$ (and for higher order, also values of derivatives at $x_0$).
- A **boundary condition** such as values of $y$ at two different points (common in some applications).

### Example 1: first order, one condition
Verify that $y = A\cos x + B\sin x$ is a general solution form idea? No—wait: check $\frac{d^2y}{dx^2} + y = 0$ gives that form with two constants (order 2). But let us use a clear first order example.

Find the particular solution of
$$
\frac{dy}{dx} = 3x^2, \qquad \text{with } y(1)=4.
$$

**Solution.** Integrate both sides with respect to $x$:
$$
y = \int 3x^2\, dx = x^3 + C,
$$
where $C$ is an arbitrary constant. This is the general solution (order 1, one constant).

Apply $y(1)=4$: $4 = (1)^3 + C \implies C = 3$.

Thus the particular solution is $y = x^3 + 3$.

**Sanity check:** $\frac{dy}{dx}=3x^2$ matches, and at $x=1$, $y=1+3=4$ matches. Reasonable.

### Example 2: second order, two conditions
Given that $y = A x + B$ is the general solution of $\frac{d^2y}{dx^2}=0$, find the particular solution with $y(0)=2$ and $\frac{dy}{dx}\Big|_{x=0}=5$.

**Solution.** From $y = A x + B$, differentiate: $\frac{dy}{dx}=A$.

Use $\frac{dy}{dx}(0)=5 \implies A=5$.
Use $y(0)=2 \implies 0 + B = 2 \implies B=2$.

So the particular solution is $y = 5x + 2$.

**Sanity check:** second derivative is $0$, matches. Values at 0 are correct.

<learning-block type="mistake" title="Using too few or too many conditions">
A first order differential equation needs one condition to fix one constant; a second order needs two independent conditions. Supplying only one condition for a second order equation leaves you with a one-parameter family, not a unique particular solution. Also, do not invent extra conditions—read them carefully from the problem (initial values of $y$ and/or derivatives at the same point, or stated boundary values).
</learning-block>

## How the order controls the constant count
When you solve by integration step by step, each integration introduces one arbitrary constant. A first order equation gives one integration step in the usual methods you will meet, producing one constant. A second order gives two integrations, producing two constants. This is a practical reason the order matters before you even solve.

## Try it yourself
1. Show by substitution that $y = C e^{2x}$ is a solution of $\frac{dy}{dx}=2y$ for any constant $C$. State whether this is general or particular as written.
2. For $\frac{dy}{dx}=2y$ with $y(0)=5$, find the particular solution.
3. A curve satisfies $\frac{d^2y}{dx^2}=6x$ with $y(0)=1$, $\frac{dy}{dx}(0)=2$. Find $y(x)$.

<details>
<summary>Show the reasoning</summary>

**1.** If $y = C e^{2x}$, then $\frac{dy}{dx}=2C e^{2x}=2y$. Yes, it satisfies the equation. It contains one arbitrary constant and the equation is first order, so this is the general solution (for the family it represents).

**2.** From general solution $y=C e^{2x}$, use $y(0)=5$: $5 = C e^{0}=C$. So $y=5e^{2x}$.

**3.** Integrate once: $\frac{dy}{dx}=3x^2 + A$. Use $\frac{dy}{dx}(0)=2 \implies A=2$, so $\frac{dy}{dx}=3x^2+2$. Integrate again: $y=x^3+2x+B$. Use $y(0)=1 \implies B=1$. Thus $y=x^3+2x+1$.

</details>

## Remember
- A solution satisfies the differential equation after substitution; a general solution includes all arbitrary constants allowed by the order.
- A particular solution comes from applying given conditions to fix those constants.
- First order usually means one constant and one condition; second order usually means two constants and two conditions.
- Count independent constants carefully; do not treat combined constants as separate.
- Next, you will learn how differential equations can be formed by eliminating arbitrary constants from a given family of curves.