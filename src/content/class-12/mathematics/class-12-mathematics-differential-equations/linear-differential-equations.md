## Standard form
A first order **linear differential equation** in $y$ is written as
$$
\frac{dy}{dx} + P(x)\,y = Q(x),
$$
where $P(x)$ and $Q(x)$ are functions of $x$ only (or constants). It is called “linear” because $y$ and $\frac{dy}{dx}$ appear to the first power and are not multiplied together.

Examples: $\frac{dy}{dx}+2y=e^x$ (with $P=2, Q=e^x$), and $\frac{dy}{dx}-\frac{y}{x}=x^2$.

There is also a linear form in $x$: $\frac{dx}{dy}+P_1(y)x=Q_1(y)$. The same method applies with $y$ as the independent variable.

## Integrating factor (IF)
For $\frac{dy}{dx}+P(x)y=Q(x)$, define the **integrating factor**
$$
\text{IF}= e^{\int P(x)\,dx}.
$$
(You may omit the constant of integration inside this integral; it cancels later.)

Multiply the whole equation by IF:
$$
e^{\int P dx}\frac{dy}{dx}+ P e^{\int P dx}\,y= Q e^{\int P dx}.
$$
The left side becomes $\frac{d}{dx}\left(y\cdot e^{\int P dx}\right)$. So
$$
\frac{d}{dx}\left(y\cdot \text{IF}\right)= Q(x)\cdot \text{IF},
$$
and integrating gives the general solution
$$
y\cdot \text{IF}= \int Q(x)\cdot \text{IF}\,dx + C.
$$

## Method
1. Write the equation in standard form $\frac{dy}{dx}+Py=Q$.
2. Compute $\text{IF}=e^{\int P dx}$.
3. Write $y\cdot \text{IF}= \int Q\cdot \text{IF}\,dx + C$ and evaluate the integral.
4. Solve for $y$ if needed. Apply conditions if given.

### Example 1: a straightforward case
Solve $\frac{dy}{dx}+ 2y= e^x$.

**Solution.** Here $P=2$, $Q=e^x$.

$\text{IF}= e^{\int 2 dx}= e^{2x}$.

Multiply? Or use formula: $y\cdot e^{2x}= \int e^x\cdot e^{2x}\,dx + C= \int e^{3x}\,dx + C= \frac{e^{3x}}{3}+ C$.

Thus
$$
y= \frac{e^{3x}}{3e^{2x}}+ \frac{C}{e^{2x}}= \frac{e^x}{3}+ C e^{-2x}.
$$

**Sanity check:** as a quick test, $y=C e^{-2x}$ solves the homogeneous part $\frac{dy}{dx}+2y=0$; the particular form $\frac{e^x}{3}$ gives $\frac{e^x}{3}+\frac{2e^x}{3}=e^x$. Yes.

### Example 2: equation needing rearrangement
Solve $x\frac{dy}{dx}+ y= x^2$.

**Solution.** Divide by $x$ (assuming $x\neq 0$):
$$
\frac{dy}{dx}+ \frac{1}{x}y= x.
$$
So $P=\frac{1}{x}$, $Q=x$.

$\text{IF}= e^{\int \frac{1}{x}dx}= e^{\ln|x|}= |x|$. For an interval where $x>0$, IF $=x$ (a standard choice; sign handling gives the same family form in practice here).

Use $x>0$: IF $=x$. Then
$$
y\cdot x= \int x\cdot x\,dx + C= \int x^2\,dx + C= \frac{x^3}{3}+ C.
$$
So $y= \frac{x^2}{3}+ \frac{C}{x}$.

### Example 3: linear in x
Solve $\frac{dx}{dy}+ \frac{x}{y}= y^2$ (with $y\neq 0$).

**Solution.** This is linear in $x$: $\frac{dx}{dy}+ P_1(y)x= Q_1(y)$, $P_1=\frac{1}{y}$, $Q_1=y^2$.

$\text{IF}= e^{\int \frac{1}{y}dy}= e^{\ln|y|}= |y|$. Take $y>0$, IF $=y$.

Then
$$
x\cdot y= \int y^2\cdot y\,dy + C= \int y^3\,dy + C= \frac{y^4}{4}+ C.
$$
So $x= \frac{y^3}{4}+ \frac{C}{y}$.

<learning-block type="mistake" title="Forgetting to put the equation into standard form first">
A common error is to read $P(x)$ directly from an unarranged equation. For example, in $x\frac{dy}{dx}+y=x^2$ you must divide by $x$ first to get $\frac{dy}{dx}+\frac{1}{x}y=x$, so $P(x)=1/x$, not $1$. Always convert to $\frac{dy}{dx}+Py=Q$ before computing the integrating factor.
</learning-block>

## Try it yourself
1. Solve $\frac{dy}{dx}+ y= e^{-x}$.
2. Solve $\frac{dy}{dx}- \frac{2y}{x}= x$, $x>0$.
3. Solve $\frac{dy}{dx}+ y\tan x= \sec x$.

<details>
<summary>Show the reasoning</summary>

**1.** $P=1, Q=e^{-x}, \text{IF}=e^x$. $y e^x=\int e^{-x}e^x dx + C=\int 1 dx + C= x+C$. So $y=(x+C)e^{-x}$.

**2.** $P=-2/x, \text{IF}=e^{\int -2/x dx}=e^{-2\ln x}=x^{-2}=1/x^2$. $y/x^2=\int x\cdot (1/x^2)dx + C=\int (1/x)dx + C=\ln x + C$ (for $x>0$). So $y=x^2(\ln x + C)$.

**3.** $P=\tan x, \int \tan x dx=\ln|\sec x|, \text{IF}=e^{\ln|\sec x|}=\sec x$ (in intervals where $\sec x>0$). $y\sec x=\int \sec x\cdot \sec x dx + C=\int \sec^2 x dx + C=\tan x + C$. So $y=\sin x + C\cos x$.

</details>

## Remember
- Linear form is $\frac{dy}{dx}+P(x)y=Q(x)$; get it into this shape before computing IF.
- $\text{IF}=e^{\int P dx}$ and the solution is $y\cdot \text{IF}=\int Q\cdot \text{IF}\,dx + C$.
- For linear equations in $x$, treat $y$ as the independent variable throughout.
- Include the constant of integration when you integrate $\int Q\cdot \text{IF}\,dx$.
- You have now covered the core solution methods for this chapter; the next module is a practice and mastery check.