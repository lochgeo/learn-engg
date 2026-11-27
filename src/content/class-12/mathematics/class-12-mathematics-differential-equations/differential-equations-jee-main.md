## How to use this paper
Set aside **50 minutes** with no notes, phone, or formula sheet beyond the table below. Attempt in order. Mark unsure questions and return only if time remains. Do not spend more than about 5 minutes on any single question.

**Allowed reference (use only these unless a question states otherwise):** use $g=10\ \text{m/s^2}$ only if a question involves mechanics; here it is not needed. Focus on standard calculus facts.

| Item | Reminder |
| --- | --- |
| Order/degree | Order = highest derivative order. Degree = power of that highest derivative after making the equation polynomial and radical-free in derivatives; degree not defined if any derivative appears inside $\sin,\ln,e^{(\cdots)}$ etc. |
| General solution | Number of independent arbitrary constants equals the order (in standard cases). Particular solution uses given conditions. |
| Formation | Differentiate the family as many times as the number of constants, then eliminate constants. |
| Variable separable | $\frac{dy}{dx}=f(x)g(y)\implies \frac{dy}{g(y)}=f(x)dx$ (check $g(y)=0$ cases). |
| Homogeneous | $\frac{dy}{dx}=F(y/x)$, use $y=vx, \frac{dy}{dx}=v+x\frac{dv}{dx}$. |
| Linear (first order) | $\frac{dy}{dx}+P(x)y=Q(x)$, IF $=e^{\int P dx}$, $y\cdot \text{IF}=\int Q\cdot \text{IF}\,dx + C$. |

## Section A — Rapid MCQs (10 questions)
Choose the single best option. Each answer is hidden below.

**A1.** The order and degree of $\left(\frac{d^2y}{dx^2}\right)^4 + \left(\frac{dy}{dx}\right)^6 + y = 0$ are
(a) order 2, degree 4 (b) order 4, degree 2 (c) order 2, degree 6 (d) order 6, degree 2

<details>
<summary>Answer</summary>

**(a).** Highest derivative is $\frac{d^2y}{dx^2}$ so order 2. It appears as power 4, equation polynomial in derivatives, so degree 4.

</details>

**A2.** The degree of $\sqrt{1+\left(\frac{dy}{dx}\right)^2}= \frac{d^2y}{dx^2}$ is
(a) 1 (b) 2 (c) 3 (d) not defined

<details>
<summary>Answer</summary>

**(b).** Square: $1+\left(\frac{dy}{dx}\right)^2= \left(\frac{d^2y}{dx^2}\right)^2$. Highest order derivative $\frac{d^2y}{dx^2}$ has power 2.

</details>

**A3.** The differential equation obtained by eliminating the arbitrary constant from $y=Cx$ is
(a) $y'=y/x$ (b) $y'=x/y$ (c) $xy'+y=0$ (d) $y''=0$

<details>
<summary>Answer</summary>

**(a).** From $y=Cx$, $C=y/x$. Also $\frac{dy}{dx}=C$, so $\frac{dy}{dx}=y/x$.

</details>

**A4.** The general solution of $\frac{dy}{dx}=3x^2$ is
(a) $y=x^3$ (b) $y=x^3+C$ (c) $y=6x+C$ (d) $y=3x^3+C$

<details>
<summary>Answer</summary>

**(b).** Integrate: $y=\int 3x^2 dx= x^3+C$.

</details>

**A5.** The solution of $\frac{dy}{dx}=e^{x-y}$ is
(a) $e^y=e^x+C$ (b) $e^{-y}=e^x+C$ (c) $e^y+e^x=C$ (d) $y=x+C$

<details>
<summary>Answer</summary>

**(a).** Write $e^{x-y}=e^x/e^y\implies e^y dy=e^x dx\implies e^y=e^x+C$.

</details>

**A6.** The substitution used to solve a homogeneous differential equation $\frac{dy}{dx}=F(y/x)$ is
(a) $y=v+x$ (b) $y=vx$ (c) $x=vy$ (d) $v=y^2/x^2$

<details>
<summary>Answer</summary>

**(b).** Standard substitution is $y=vx$, giving $\frac{dy}{dx}=v+x\frac{dv}{dx}$.

</details>

**A7.** The integrating factor of $\frac{dy}{dx}+y\tan x=\sec x$ is
(a) $\cos x$ (b) $\sec x$ (c) $\tan x$ (d) $e^{\tan x}$

<details>
<summary>Answer</summary>

**(b).** $P=\tan x$, IF $=e^{\int \tan x dx}=e^{\ln|\sec x|}=\sec x$ (in suitable interval).

</details>

**A8.** The order of the differential equation representing all parabolas with axis parallel to $y$-axis is
(a) 1 (b) 2 (c) 3 (d) 4

<details>
<summary>Answer</summary>

**(b).** General form $y=ax^2+bx+c$ has three constants, so order 3? Wait: parabolas with axis parallel to $y$-axis are $y=ax^2+bx+c$, $a\neq 0$ — three arbitrary constants, hence order 3 differential equation. But wait: let us be careful. Alternatively $y-k=a(x-h)^2$ gives two parameters plus? No: standard: $y=ax^2+bx+c$ is 3 constants => differentiating 3 times gives order 3. Yes. So answer is (c) 3.

Wait, let me check carefully: "all parabolas with axis parallel to y-axis" — equation is $y = ax^2 + bx + c$, $a\neq 0$. Three arbitrary constants $a,b,c$, so forming DE gives order 3. Yes. So (c).

</details>

**A9.** A particular solution of $\frac{dy}{dx}=y$ with $y(0)=3$ is
(a) $y=3x$ (b) $y=3e^x$ (c) $y=e^{3x}$ (d) $y=x+3$

<details>
<summary>Answer</summary>

**(b).** General solution $y=Ce^x$. $y(0)=C=3$, so $y=3e^x$.

</details>

**A10.** The equation $\frac{d^2y}{dx^2}+\sin\left(\frac{dy}{dx}\right)=0$ has
(a) order 2, degree 1 (b) order 2, degree not defined (c) order 1, degree 2 (d) order 2, degree 2

<details>
<summary>Answer</summary>

**(b).** Highest derivative is second order, but $\sin(dy/dx)$ means not polynomial in derivatives, so degree not defined.

</details>

## Section B — Numerical value questions (5 questions)
Give the numerical/value answer. Answers hidden below.

**B1.** Find the order of the differential equation $\left(\frac{d^4y}{dx^4}\right)^3 + 5\left(\frac{d^2y}{dx^2}\right)^5 = 0$.

<details>
<summary>Answer</summary>

Highest derivative is $\frac{d^4y}{dx^4}$, so order = **4**.

</details>

**B2.** If the general solution of a differential equation is $y = A\cos x + B\sin x$, how many arbitrary constants does it have?

<details>
<summary>Answer</summary>

There are **2** arbitrary constants ($A$ and $B$).

</details>

**B3.** Solve $\frac{dy}{dx}=1+y^2$, $y(0)=0$. Find $y\left(\frac{\pi}{4}\right)$.

<details>
<summary>Answer</summary>

Separate: $\frac{dy}{1+y^2}=dx\implies \arctan y= x+C$. $y(0)=0\implies C=0$. So $y=\tan x$. $y(\pi/4)=\tan(\pi/4)= **1**$.

</details>

**B4.** For the linear equation $\frac{dy}{dx}+3y=0$, the integrating factor is $e^{kx}$. Find $k$.

<details>
<summary>Answer</summary>

$P=3$, IF $=e^{\int 3 dx}=e^{3x}$, so $k= **3**$.

</details>

**B5.** The differential equation formed from $y=mx$ (one constant) is $x\frac{dy}{dx}-y=0$. What is its order?

<details>
<summary>Answer</summary>

It is a first order equation, so order = **1**.

</details>

## Section C — Assertion–Reason (3 questions)
Choose: (a) both true and R explains A, (b) both true but R does not explain A, (c) A true R false, (d) A false R true.

**C1.** Assertion (A): The degree of $\left(\frac{dy}{dx}\right)^2 + y = 0$ is 2.  
Reason (R): Degree is the power of the highest order derivative after the equation is polynomial in derivatives.

<details>
<summary>Answer</summary>

**(a).** Highest derivative is first order ($dy/dx$) with power 2, equation is polynomial in derivatives, so degree is 2. R correctly states the method and explains A.

</details>

**C2.** Assertion (A): $\frac{dy}{dx}=y/x$ is a homogeneous differential equation.  
Reason (R): It can be written as $\frac{dy}{dx}=F(y/x)$.

<details>
<summary>Answer</summary>

**(a).** Right side is $F(y/x)$ with $F(t)=t$, which is the definition used here; R explains A.

</details>

**C3.** Assertion (A): The integrating factor of $\frac{dy}{dx}-y=x$ is $e^x$.  
Reason (R): For $\frac{dy}{dx}+P(x)y=Q(x)$, IF is $e^{\int P(x)dx}$ and here $P(x)=-1$.

<details>
<summary>Answer</summary>

**(d).** A is false: IF is $e^{\int -1 dx}=e^{-x}$, not $e^x$. R is true as a statement of formula and correctly identifies $P=-1$.

</details>

## Section D — Matching / multi-statement (2 questions)

**D1.** Match the equation type (List I) with a suitable first step (List II):
- P. $\frac{dy}{dx}=\frac{x+y}{x-y}$  —  1. Write as $\frac{dy}{dx}+Py=Q$ and find IF
- Q. $\frac{dy}{dx}+2xy=x$          —  2. Use substitution $y=vx$
- R. $\frac{dy}{dx}=xy$              —  3. Separate as $\frac{dy}{y}=x dx$ (for $y\neq 0$)

<details>
<summary>Answer</summary>

P → 2 (homogeneous form $F(y/x)$). Q → 1 (linear in $y$: $\frac{dy}{dx}+2x\cdot y=x$). R → 3 (separable). So **P-2, Q-1, R-3**.

</details>

**D2.** Consider the family $y=Cx^2$ (one arbitrary constant).
- Statement 1: Differentiating once gives $\frac{dy}{dx}=2Cx$.
- Statement 2: Eliminating $C$ gives $x\frac{dy}{dx}=2y$.

Which is correct?
(a) Only 1 (b) Only 2 (c) Both 1 and 2 (d) Neither

<details>
<summary>Answer</summary>

**(c).** From $y=Cx^2$, $\frac{dy}{dx}=2Cx$ (1 is true). From original, $C=y/x^2$, substitute: $\frac{dy}{dx}=2x(y/x^2)=2y/x\implies x\frac{dy}{dx}=2y$ (2 is true).

</details>

## If you got these wrong, revisit
- **A1, A2, A8, B1, C1:** order and degree (clearing radicals, transcendental cases, counting constants from family form).
- **A3, A4, B5, D2:** forming differential equations and basic integration for general/particular solutions.
- **A5, B3:** variable separable equations and applying initial conditions.
- **A6, C2, D1 (P):** homogeneous equations and the $y=vx$ substitution.
- **A7, B4, C3, D1 (Q):** linear first order equations and integrating factor (including getting into standard form).