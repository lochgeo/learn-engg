## Recognising separable form
A first order differential equation is said to be in **variable separable** form if it can be written so that all terms involving $y$ (and $dy$) are on one side and all terms involving $x$ (and $dx$) are on the other. A common pattern is
$$
\frac{dy}{dx} = f(x)\,g(y).
$$
If $g(y) \neq 0$, rearrange to
$$
\frac{1}{g(y)}\,dy = f(x)\,dx,
$$
then integrate both sides:
$$
\int \frac{1}{g(y)}\,dy = \int f(x)\,dx + C.
$$

The constant of integration is usually written once (on one side). This method assumes the algebraic steps are valid in the intervals considered.

## Method
1. Write $\frac{dy}{dx}$ clearly and try to factor into a function of $x$ times a function of $y$ (or rearrange).
2. Separate: move all $y$-expressions with $dy$ to one side, all $x$-expressions with $dx$ to the other.
3. Integrate both sides, adding a single constant of integration.
4. Solve for $y$ if practical; otherwise leave the solution in implicit form if that is neater.
5. If initial conditions are given, substitute to find the constant.

### Example 1: basic separation
Solve $\frac{dy}{dx} = \frac{x}{y}$.

**Solution.** Assume $y \neq 0$. Separate variables:
$$
y\,dy = x\,dx.
$$
Integrate:
$$
\int y\,dy = \int x\,dx \implies \frac{y^2}{2} = \frac{x^2}{2} + C_1.
$$
Multiply through by 2 and write $C=2C_1$:
$$
y^2 = x^2 + C.
$$
(Equivalently $y^2 - x^2 = C$.) This is an implicit general solution. The case $y=0$ would need separate checking against the original equation; here $y=0$ only fits special choices and is usually handled by the family form in context.

### Example 2: with an initial condition
Solve $\frac{dy}{dx} = y\sin x$, with $y(0)=1$.

**Solution.** Assume $y \neq 0$. Separate:
$$
\frac{dy}{y} = \sin x\,dx.
$$
Integrate:
$$
\ln|y| = -\cos x + C.
$$
Exponentiate: $|y| = e^{-\cos x + C} = e^C e^{-\cos x}$. Write $A=\pm e^C$ (a nonzero constant in form), so $y = A e^{-\cos x}$. Note $y=0$ is also a solution of the original equation (a singular/equilibrium solution in this form); check: if $y\equiv 0$, left side context gives 0, right side 0 — yes, $y=0$ is a solution but it cannot come from $A e^{-\cos x}$ unless $A=0$ which matches $y\equiv 0$. So general solution is $y = A e^{-\cos x}$, $A$ any real constant.

Apply $y(0)=1$: $1 = A e^{-\cos 0}= A e^{-1}\implies A = e$.

Thus the particular solution is $y = e\cdot e^{-\cos x}= e^{1-\cos x}$.

**Sanity check:** at $x=0$, $y=e^{0}=1$. Yes. Differentiating mentally: gives factor $\sin x$ and $y$. Looks reasonable.

### Example 3: rearranging first
Solve $(1+x^2)\frac{dy}{dx} = 1+y^2$.

**Solution.** Rearrange:
$$
\frac{dy}{1+y^2} = \frac{dx}{1+x^2}.
$$
Integrate:
$$
\arctan y = \arctan x + C.
$$
This is a common implicit form. You may also write $y = \tan(\arctan x + C)$ if desired, but the implicit form is perfectly acceptable.

<learning-block type="mistake" title="Losing solutions when dividing by an expression in y">
Dividing both sides by $g(y)$ assumes $g(y)\neq 0$. The values of $y$ making $g(y)=0$ can be constant solutions of the original equation (check them separately). For example, in $\frac{dy}{dx}=y\sin x$, dividing by $y$ hides $y=0$ until you notice it satisfies the equation. Always verify whether constant solutions are missed.
</learning-block>

## Try it yourself
1. Solve $\frac{dy}{dx} = e^{x+y}$.
2. Solve $\frac{dy}{dx} = \frac{1+y^2}{1+x^2}$ with $y(0)=1$.
3. Solve $x\frac{dy}{dx} + y = 0$ (separable form).

<details>
<summary>Show the reasoning</summary>

**1.** Write $e^{x+y}=e^x e^y$. So $\frac{dy}{dx}=e^x e^y \implies e^{-y}dy = e^x dx$ (assuming $e^y\neq 0$, always true). Integrate: $-e^{-y}=e^x + C \implies e^{-y}= -e^x - C = K - e^x$ where $K=-C$. Thus $-y=\ln|K-e^x| \implies y= -\ln|K-e^x|$ (with appropriate domain).

**2.** Separate: $\frac{dy}{1+y^2}=\frac{dx}{1+x^2}\implies \arctan y=\arctan x + C$. $y(0)=1\implies \arctan 1=0+C\implies C=\frac{\pi}{4}$. So $\arctan y=\arctan x+\frac{\pi}{4}$.

**3.** Write $x\frac{dy}{dx}= -y\implies \frac{dy}{y}= -\frac{dx}{x}$ for $y\neq 0,x\neq 0$. Integrate: $\ln|y|= -\ln|x|+\ln|A|= \ln\left|\frac{A}{x}\right|\implies y=\frac{A}{x}$. Also check $y=0$: gives $0=0$ in original form? $x*0+0=0$ yes, so $y=0$ is included when $A=0$. Thus $y=\frac{A}{x}$.

</details>

## Remember
- Separate so each side is a single-variable differential times $dx$ or $dy$, then integrate both sides and add one constant.
- Do not forget to check constant solutions that may be lost by division.
- Use initial conditions after finding the general solution to obtain the particular solution.
- Implicit answers are fine when solving for $y$ is awkward.
- Next, you will meet homogeneous differential equations and the substitution that reduces them to separable form.