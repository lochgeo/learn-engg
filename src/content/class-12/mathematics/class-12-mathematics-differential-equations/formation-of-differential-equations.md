## From a family of curves to a differential equation
Sometimes a family of curves is given by an equation containing arbitrary constants, for example $y = m x + c$ (a family of straight lines) or $y = A\cos x + B\sin x$. Differentiating repeatedly and eliminating those constants produces a differential equation whose general solution is that family. This process is called **formation of a differential equation**.

The guiding rule is: if the family has $n$ independent arbitrary constants, differentiate the given relation $n$ times to obtain $n+1$ equations in total (the original plus the derivatives). Then eliminate the $n$ constants to get one differential equation of order $n$.

## Method (step by step)
1. Write the given family with all arbitrary constants shown clearly.
2. Count the number of independent arbitrary constants, say $n$.
3. Differentiate with respect to $x$, $n$ times, treating $y$ as a function of $x$.
4. Use the $n+1$ equations to eliminate the constants algebraically.
5. The result is the required differential equation (state it in a neat form).

### Example 1: one constant, first order
Form the differential equation of the family $y = C x^2$, where $C$ is an arbitrary constant.

**Solution.** There is $1$ constant, so differentiate once:
$$
\frac{dy}{dx} = 2C x.
$$
From the original, $C = \frac{y}{x^2}$ (for $x \neq 0$). Substitute:
$$
\frac{dy}{dx} = 2x \cdot \frac{y}{x^2} = \frac{2y}{x}.
$$
Thus the differential equation is
$$
x\frac{dy}{dx} - 2y = 0.
$$
(You may also see it written as $\frac{dy}{dx}=\frac{2y}{x}$; either form is acceptable if clear.)

### Example 2: two constants, second order
Form the differential equation of the family $y = A e^x + B e^{-x}$, where $A$ and $B$ are arbitrary constants.

**Solution.** Two constants, so differentiate twice.

First derivative:
$$
\frac{dy}{dx} = A e^x - B e^{-x}.
$$
Second derivative:
$$
\frac{d^2y}{dx^2} = A e^x + B e^{-x}.
$$
Notice that $\frac{d^2y}{dx^2} = (A e^x + B e^{-x}) = y$. So
$$
\frac{d^2y}{dx^2} - y = 0.
$$

**Sanity check:** order is 2, which matches 2 constants. Substituting $y = A e^x + B e^{-x}$ back gives 0 = 0. Reasonable.

### Example 3: eliminating constants carefully
Form the differential equation of all circles passing through the origin and having centres on the $x$-axis.

**Solution.** A circle with centre $(a, 0)$ on the $x$-axis and passing through the origin has radius $|a|$. Its equation is
$$
(x - a)^2 + (y - 0)^2 = a^2 \implies x^2 - 2a x + a^2 + y^2 = a^2 \implies x^2 + y^2 = 2a x,
$$
with $a$ an arbitrary constant ($a \neq 0$ in general).

Differentiate with respect to $x$:
$$
2x + 2y\frac{dy}{dx} = 2a \implies x + y\frac{dy}{dx} = a.
$$
Substitute $a = x + y\frac{dy}{dx}$ into $x^2 + y^2 = 2a x$:
$$
x^2 + y^2 = 2x\left(x + y\frac{dy}{dx}\right).
$$
Expand: $x^2 + y^2 = 2x^2 + 2x y\frac{dy}{dx}$.

Rearrange:
$$
y^2 - x^2 = 2x y\frac{dy}{dx}, \quad \text{i.e.}\quad 2x y\frac{dy}{dx} + x^2 - y^2 = 0.
$$

<learning-block type="mistake" title="Differentiating the wrong number of times">
A frequent error is to differentiate fewer times than the number of constants, leaving a constant still present, or to differentiate once more than needed and create extra work. Count independent arbitrary constants first: that count equals the order of the differential equation you must obtain, so you differentiate exactly that many times.
</learning-block>

## Try it yourself
1. Form the differential equation of $y = m x$, where $m$ is an arbitrary constant.
2. Form the differential equation of $y = A\cos x + B\sin x$, where $A$ and $B$ are arbitrary constants.
3. Form the differential equation of the family $y^2 = 4a x$, where $a$ is an arbitrary constant.

<details>
<summary>Show the reasoning</summary>

**1.** One constant. Differentiate: $\frac{dy}{dx}=m$. Substitute $m=\frac{dy}{dx}$ into $y=m x$ gives $y = x\frac{dy}{dx}$, so $x\frac{dy}{dx}-y=0$.

**2.** Two constants. $y=A\cos x+B\sin x$, $\frac{dy}{dx}=-A\sin x+B\cos x$, $\frac{d^2y}{dx^2}=-A\cos x-B\sin x= -y$. Thus $\frac{d^2y}{dx^2}+y=0$.

**3.** One constant. Differentiate: $2y\frac{dy}{dx}=4a \implies y\frac{dy}{dx}=2a$. From original, $a=\frac{y^2}{4x}$ (for $x\neq 0$). Substitute: $y\frac{dy}{dx}=2\cdot\frac{y^2}{4x}=\frac{y^2}{2x}$. Rearranged: $2x y\frac{dy}{dx}-y^2=0$ (and note $y=0$ is a singular case but the standard form from this method is $2x\frac{dy}{dx}-y=0$ when $y\neq 0$).

</details>

## Remember
- The number of independent arbitrary constants in the family equals the order of the differential equation formed.
- Differentiate the family relation as many times as there are constants, then eliminate all constants.
- Keep algebra tidy; substituting stepwise reduces mistakes.
- The final answer should contain no arbitrary constants, only $x, y,$ and derivatives.
- Next, you will study a direct solution method: equations where variables can be separated.