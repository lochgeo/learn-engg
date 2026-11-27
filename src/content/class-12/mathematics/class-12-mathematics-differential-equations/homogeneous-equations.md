## Homogeneous functions (a quick check)
A function $f(x,y)$ is called **homogeneous of degree $n$** if
$$
f(tx, ty)= t^n f(x,y)
$$
for all $t$ (where defined). For example, $f(x,y)=x^2+y^2$ is homogeneous of degree 2, and $f(x,y)=\frac{x+y}{x-y}$ is homogeneous of degree 0.

A first order differential equation $M(x,y)\,dx + N(x,y)\,dy = 0$ is called **homogeneous** if $M$ and $N$ are homogeneous functions of the same degree. It can often be rewritten as
$$
\frac{dy}{dx}= F\left(\frac{y}{x}\right).
$$

## Substitution method
Use the substitution
$$
y = v x, \qquad \text{so that}\qquad \frac{dy}{dx}= v + x\frac{dv}{dx},
$$
where $v=v(x)$ is a new function. Substituting turns the equation into one in $v$ and $x$ that is usually separable.

### Steps
1. Check the equation is homogeneous (or write $\frac{dy}{dx}$ as a function of $y/x$).
2. Set $y=vx$, compute $\frac{dy}{dx}=v+x\frac{dv}{dx}$.
3. Substitute and simplify to separate variables $v$ and $x$.
4. Integrate, then replace $v$ by $\frac{y}{x}$.
5. Apply initial conditions if given.

### Example 1: a standard homogeneous equation
Solve $\frac{dy}{dx}= \frac{x+y}{x-y}$, $x \neq y$.

**Solution.** The right side is $\frac{1 + y/x}{1 - y/x}= F(y/x)$, so homogeneous. Let $y=vx$, $\frac{dy}{dx}=v+x\frac{dv}{dx}$.

Substitute:
$$
v + x\frac{dv}{dx}= \frac{1+v}{1-v}.
$$
Thus
$$
x\frac{dv}{dx}= \frac{1+v}{1-v}-v= \frac{1+v - v(1-v)}{1-v}= \frac{1+v - v + v^2}{1-v}= \frac{1+v^2}{1-v}.
$$
So
$$
x\frac{dv}{dx}= \frac{1+v^2}{1-v}\implies \frac{1-v}{1+v^2}\,dv= \frac{dx}{x}.
$$
Split the left side:
$$
\left(\frac{1}{1+v^2}- \frac{v}{1+v^2}\right)dv= \frac{dx}{x}.
$$
Integrate:
$$
\arctan v - \frac{1}{2}\ln(1+v^2)= \ln|x| + C.
$$
Replace $v=\frac{y}{x}$:
$$
\arctan\left(\frac{y}{x}\right)- \frac{1}{2}\ln\left(1+\frac{y^2}{x^2}\right)= \ln|x| + C.
$$
You may leave the answer in this implicit form. A common alternate form combines logarithms, but either is acceptable if correct.

**Sanity check:** the original is symmetric in a homogeneous way; the substitution gave a separable equation. No obvious sign error in the algebra above.

### Example 2: another homogeneous form
Solve $x\frac{dy}{dx}= y + x\tan\left(\frac{y}{x}\right)$.

**Solution.** Rewrite:
$$
\frac{dy}{dx}= \frac{y}{x}+ \tan\left(\frac{y}{x}\right).
$$
Let $y=vx$, $\frac{dy}{dx}=v+x\frac{dv}{dx}$:
$$
v + x\frac{dv}{dx}= v + \tan v \implies x\frac{dv}{dx}= \tan v.
$$
Separate (for $\tan v \neq 0$):
$$
\cot v\,dv= \frac{dx}{x}.
$$
Integrate:
$$
\ln|\sin v|= \ln|x| + C.
$$
So $\ln|\sin v|= \ln|C_1 x|$ (writing $\ln|C_1|$ for $C$) gives $\sin v= C_1 x$. Replace $v=\frac{y}{x}$:
$$
\sin\left(\frac{y}{x}\right)= C_1 x.
$$

<learning-block type="mistake" title="Forgetting the product rule when differentiating y = v x">
A common error is to write $\frac{dy}{dx}= \frac{dv}{dx}$ instead of $v + x\frac{dv}{dx}$. The substitution is $y=vx$ (a product), so the derivative is always $v + x\frac{dv}{dx}$. Write this down explicitly before substituting.
</learning-block>

## Try it yourself
1. Solve $\frac{dy}{dx}= \frac{y}{x}+ \sec\left(\frac{y}{x}\right)$ (use $y=vx$).
2. Show that $\frac{dy}{dx}= \frac{x^2+y^2}{2xy}$ is homogeneous and set up the separation after substitution (you may stop after separation).

<details>
<summary>Show the reasoning</summary>

**1.** Let $y=vx$, $\frac{dy}{dx}=v+x\frac{dv}{dx}= v+\sec v\implies x\frac{dv}{dx}=\sec v\implies \cos v\,dv=\frac{dx}{x}$. Integrate: $\sin v=\ln|x|+C\implies \sin\left(\frac{y}{x}\right)=\ln|x|+C$.

**2.** Right side: divide numerator and denominator by $x^2$: $\frac{1+(y/x)^2}{2(y/x)}$, which is function of $y/x$ (homogeneous degree 0). Let $y=vx$, $v+x\frac{dv}{dx}=\frac{1+v^2}{2v}\implies x\frac{dv}{dx}=\frac{1+v^2}{2v}-v=\frac{1+v^2-2v^2}{2v}=\frac{1-v^2}{2v}$. So $\frac{2v}{1-v^2}dv=\frac{dx}{x}$.

</details>

## Remember
- Homogeneous equations reduce to separable form using $y=vx$, $\frac{dy}{dx}=v+x\frac{dv}{dx}$.
- Always verify the homogeneous form first (express $\frac{dy}{dx}$ as $F(y/x)$ or check degrees).
- After integrating in $v,x$, substitute back $v=y/x$.
- Do not drop the $v$ term from the product rule.
- Next, you will study linear differential equations of the form $\frac{dy}{dx}+P(x)y=Q(x)$ and the integrating factor method.