## Study plan (use this before a test)
Work in order. Stop when you can do each block without looking up the steps.

| Block | Minutes | Focus | What to produce |
| --- | --- | --- | --- |
| 1 | 5 | Classify | State order and degree (or say “not defined”) for five equations in under two minutes total |
| 2 | 5 | Solutions | From a general solution and given conditions, write the particular solution |
| 3 | 5 | Form DE | Eliminate constants from a family with 1–2 parameters |
| 4 | 5 | Solve | One variable separable, one homogeneous, one linear (first order) |
| 5 | 5 | Mixed | Pick the right method from the clue table and solve two mixed questions |

## Which tool do I reach for?
| Clue in the question | Method to try first | Watch out for |
| --- | --- | --- |
| “Order and degree of…” | Identify highest derivative; clear radicals/fractions in derivatives; check for transcendental functions of derivatives | Degree before clearing roots; saying degree exists when $\sin(dy/dx)$ appears |
| “General solution / particular solution” | Integrate stepwise by order count; apply conditions to find constants | Too few conditions for the order; combining constants into fewer than allowed by order |
| “Form the differential equation of the family…” | Count constants $n$; differentiate $n$ times; eliminate constants | Differentiating wrong number of times; leaving constants in the final equation |
| $\frac{dy}{dx}=f(x)g(y)$ or easily separated | Separate variables and integrate both sides | Dividing by $g(y)$ and losing constant solutions like $g(y)=0$ |
| $\frac{dy}{dx}=F(y/x)$ or $M,N$ homogeneous same degree | Substitute $y=vx$, $\frac{dy}{dx}=v+x\frac{dv}{dx}$, then separate | Writing $\frac{dy}{dx}=\frac{dv}{dx}$ instead of the product rule form |
| $\frac{dy}{dx}+P(x)y=Q(x)$ (or linear in $x$) | Write standard form, compute IF $=e^{\int P dx}$, use $y\cdot \text{IF}=\int Q\cdot \text{IF}\,dx + C$ | Not converting to standard form first (especially when an $x$ multiplies $\frac{dy}{dx}$) |

## Mastery questions
Work these without notes first, then check the revealed answers.

**1. (Order/degree)** Find the order and degree of $\left(\frac{d^3y}{dx^3}\right)^2 + \frac{d^2y}{dx^2} + y = 0$.

<details>
<summary>Show the reasoning</summary>

Highest derivative is $\frac{d^3y}{dx^3}$, so order is 3. The equation is polynomial in derivatives and $\left(\frac{d^3y}{dx^3}\right)^2$ has power 2, so degree is 2.

</details>

**2. (Order/degree)** Find the order and degree of $\sqrt{\frac{dy}{dx}} + y = x$.

<details>
<summary>Show the reasoning</summary>

Highest derivative is $\frac{dy}{dx}$, order 1. Clear the radical: write $\sqrt{\frac{dy}{dx}} = x-y$ then square to get $\frac{dy}{dx}= (x-y)^2$, which is polynomial in derivatives with power 1 of $\frac{dy}{dx}$. So degree is 1 (after clearing the radical by the standard classification method).

</details>

**3. (Particular solution)** The general solution of $\frac{dy}{dx}=2x$ is $y=x^2+C$. Find the particular solution with $y(2)=5$.

<details>
<summary>Show the reasoning</summary>

Substitute $x=2,y=5$: $5=4+C\implies C=1$. Particular solution is $y=x^2+1$.

</details>

**4. (Formation)** Form the differential equation of $y=Ae^{2x}+Be^{-2x}$.

<details>
<summary>Show the reasoning</summary>

Two constants. $y'=2Ae^{2x}-2Be^{-2x}$, $y''=4Ae^{2x}+4Be^{-2x}=4y$. So $y''-4y=0$.

</details>

**5. (Variable separable)** Solve $\frac{dy}{dx}= y^2\sin x$.

<details>
<summary>Show the reasoning</summary>

For $y\neq 0$, $\frac{dy}{y^2}=\sin x\,dx\implies -\frac{1}{y}= -\cos x + C\implies \frac{1}{y}=\cos x - C$. So $y=\frac{1}{\cos x + K}$ with $K=-C$. Also check $y=0$: derivative 0, right side 0, so $y=0$ is a solution (included if $K\to\infty$ in some sense, but better list: general family gives this form and $y=0$ is a singular solution of the separated steps—state $y=0$ is also a solution). A careful answer: $\frac{1}{y}=\cos x - C$ for $y\neq 0$, and $y=0$ is also a solution.

</details>

**6. (Homogeneous)** Solve $xdy - ydx= \sqrt{x^2+y^2}\,dx$.

<details>
<summary>Show the reasoning</summary>

Rewrite: $x\frac{dy}{dx}-y=\sqrt{x^2+y^2}\implies \frac{dy}{dx}=\frac{y+\sqrt{x^2+y^2}}{x}=\frac{y}{x}+\sqrt{1+(y/x)^2}$ (for $x>0$). Let $y=vx$, $v+xv'=\frac{y}{x}+\sqrt{1+(y/x)^2}= v+\sqrt{1+v^2}\implies x\frac{dv}{dx}=\sqrt{1+v^2}\implies \frac{dv}{\sqrt{1+v^2}}=\frac{dx}{x}$. Integrate: $\ln\left|v+\sqrt{1+v^2}\right|=\ln|x|+C\implies v+\sqrt{1+v^2}=Kx$. Substitute back $v=y/x$: $\frac{y}{x}+\sqrt{1+\frac{y^2}{x^2}}=Kx\implies y+\sqrt{x^2+y^2}=Kx^2$.

</details>

**7. (Linear DE)** Solve $\frac{dy}{dx}+ \frac{y}{x}= x^2$.

<details>
<summary>Show the reasoning</summary>

Standard form: $P=1/x, Q=x^2$. IF $=e^{\int 1/x dx}=x$ (for $x>0$). $y\cdot x=\int x^2\cdot x dx + C=\int x^3 dx + C=\frac{x^4}{4}+C$. So $y=\frac{x^3}{4}+\frac{C}{x}$.

</details>

**8. (Mixed)** Form the differential equation of the family of parabolas having vertex at origin and axis along $y$-axis: $y=ax^2$.

<details>
<summary>Show the reasoning</summary>

One constant $a$. Differentiate: $\frac{dy}{dx}=2ax$. From original $a=\frac{y}{x^2}$ ($x\neq 0$), substitute: $\frac{dy}{dx}=2x\cdot\frac{y}{x^2}=\frac{2y}{x}$. So $x\frac{dy}{dx}-2y=0$.

</details>

## Self-check
You are ready to move on when you can say yes to most of these:
- I can state order and degree correctly and I always clear radicals/fractions in derivatives before giving degree.
- I know when degree is not defined (transcendental functions of derivatives).
- I can form a differential equation by differentiating a family as many times as there are constants and eliminating them.
- I can solve variable separable, homogeneous (via $y=vx$), and linear first order equations without mixing up the steps.
- I remember to check for lost constant solutions when dividing, and to use the product rule for $y=vx$.