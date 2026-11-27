## When rates appear as equations
Many questions in physics, geometry and everyday modelling begin with a statement about a rate: how fast a quantity changes with respect to another. When that statement is written down algebraically, it often contains a derivative, and the task becomes to recognise the equation and classify it before trying to solve it.

A **differential equation** is any equation that involves an independent variable, a dependent variable (usually written $y$), and at least one of its derivatives $\frac{dy}{dx}, \frac{d^2y}{dx^2}, \ldots$. For example, $\frac{dy}{dx} = 2x$ and $x\frac{d^2y}{dx^2} + \left(\frac{dy}{dx}\right)^3 = 0$ are differential equations. The unknown is the function $y(x)$ (or the relation $F(x,y)=0$) that satisfies the equation.

<learning-block type="concept" title="What we mean by an ordinary differential equation">
In this chapter we deal with **ordinary differential equations (ODEs)**: equations where the unknown function depends on a single independent variable, so only ordinary derivatives appear. Equations that involve partial derivatives of functions of several variables are not treated here.
</learning-block>

## Order of a differential equation
The **order** of a differential equation is the order of the highest derivative of the dependent variable that appears in the equation.

- $\frac{dy}{dx} + y = e^x$ has order $1$ (highest is $\frac{dy}{dx}$).
- $\frac{d^2y}{dx^2} + 3\frac{dy}{dx} + 2y = 0$ has order $2$ (highest is $\frac{d^2y}{dx^2}$).
- $\left(\frac{d^3y}{dx^3}\right)^2 + x\frac{dy}{dx} = 0$ has order $3$ even though that derivative is squared.

The order tells you the largest “level” of change present. It also hints at how many arbitrary constants you should expect in a general solution (developed in the next module).

## Degree of a differential equation
The **degree** of a differential equation is the power (positive integer) of the highest order derivative, after the equation has been made polynomial in all derivatives of the dependent variable (that is, no fractional powers or non-integer powers of derivatives remain) and free of radicals involving derivatives.

Take care with steps:
1. Write the equation in a form that is rational and polynomial in derivatives such as $\frac{dy}{dx}, \frac{d^2y}{dx^2}, \ldots$ by clearing fractions and eliminating roots that involve derivatives.
2. Identify the highest order derivative.
3. Its power (as a whole derivative term, not as powers inside other expressions) is the degree.

### Example 1: finding order and degree
Find the order and degree of
$$
\left(\frac{d^2y}{dx^2}\right)^3 + \left(\frac{dy}{dx}\right)^4 + y = 0.
$$

**Solution.** The derivatives present are $\frac{dy}{dx}$ (order 1) and $\frac{d^2y}{dx^2}$ (order 2). The highest order is $2$, so order $= 2$.

The equation is already polynomial in derivatives. The highest order derivative $\frac{d^2y}{dx^2}$ appears as $\left(\frac{d^2y}{dx^2}\right)^3$, power $3$. Thus degree $= 3$.

### Example 2: clearing a radical before giving degree
Find the order and degree of
$$
\sqrt{1 + \left(\frac{dy}{dx}\right)^2} = \frac{d^2y}{dx^2}.
$$

**Solution.** Highest derivative is $\frac{d^2y}{dx^2}$ (order 2), so order $= 2$.

Now remove the square root. Square both sides carefully:
$$
1 + \left(\frac{dy}{dx}\right)^2 = \left(\frac{d^2y}{dx^2}\right)^2.
$$
This is polynomial in derivatives. The highest order derivative is $\frac{d^2y}{dx^2}$ raised to the power $2$. Hence degree $= 2$ (after clearing the radical).

Note: squaring can introduce extraneous algebraic relations, but for the purpose of classifying order and degree in standard board questions you clear radicals involving derivatives first, then read the degree from the resulting polynomial form.

### Example 3: order but degree not defined
Consider
$$
\frac{d^2y}{dx^2} + \sin\left(\frac{dy}{dx}\right) = 0.
$$
The highest order derivative is $\frac{d^2y}{dx^2}$, so order $= 2$. However, the term $\sin\left(\frac{dy}{dx}\right)$ means the equation cannot be written as a polynomial in derivatives (it involves a transcendental function of a derivative). In such cases the degree is **not defined**.

<learning-block type="mistake" title="Reading degree before removing radicals or fractional powers">
A common error is to take the power shown while a square root still covers a derivative, for example saying the degree is $1$ from $\sqrt{\cdots} = \frac{d^2y}{dx^2}$ without squaring. Always clear radicals and fractional powers of derivatives first; only then read the power of the highest order derivative. Also check whether the result is actually polynomial in derivatives—if not, the degree is not defined.
</learning-block>

## A quick sanity check
Order is about “which derivative is highest” (a level). Degree is about “to what power that highest derivative appears” after algebraic cleaning. If you ever see $\ln\left(\frac{dy}{dx}\right)$, $e^{\frac{d^2y}{dx^2}}$, or $\sin(\cdots)$ acting on a derivative, pause: degree is usually not defined.

## Try it yourself
1. State the order and degree (if defined) of $\left(\frac{dy}{dx}\right)^3 + 5y = x^2$.
2. State the order and degree (if defined) of $1 + \left(\frac{dy}{dx}\right)^2 = k^2\left(\frac{d^2y}{dx^2}\right)^2$ (with $k$ a constant).
3. State the order and degree (if defined) of $\frac{d^3y}{dx^3} + y\left(\frac{dy}{dx}\right)^2 = 0$.

<details>
<summary>Show the reasoning</summary>

**1.** Highest derivative is $\frac{dy}{dx}$, so order $= 1$. The equation is polynomial in derivatives and the power of $\frac{dy}{dx}$ is $3$. Degree $= 3$.

**2.** Highest derivative is $\frac{d^2y}{dx^2}$, so order $= 2$. No radicals remain and it is polynomial in derivatives; $\left(\frac{d^2y}{dx^2}\right)^2$ has power $2$. Degree $= 2$.

**3.** Highest derivative is $\frac{d^3y}{dx^3}$, so order $= 3$. It appears as $\frac{d^3y}{dx^3}$ to the power $1$ (and $\frac{dy}{dx}$ is lower order). Polynomial in derivatives, so degree $= 1$.

</details>

## Remember
- Order is the highest derivative order present; degree is the power of that highest derivative only after making the equation polynomial and radical-free in derivatives.
- If any derivative appears inside $\sin, \cos, \ln, e^{(\cdots)}$ or similar, the degree is not defined.
- Squaring to remove a square root is a classification step for degree in this course, but remember it can create extra algebraic solutions later when you solve equations.
- Always state “degree not defined” clearly when the polynomial condition fails.
- Next, you will see what is meant by a general solution and a particular solution of a differential equation and why the order controls the number of arbitrary constants.