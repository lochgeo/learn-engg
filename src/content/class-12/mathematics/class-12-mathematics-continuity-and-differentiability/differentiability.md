## When a curve has one clear tangent

A cyclist's distance–time graph rises steadily, then has a sharp corner where she turns back. Just before the corner the slope is positive; just after it the slope is negative. No single tangent line fits the corner, so there is no well-defined instantaneous speed at that instant. Continuity says the pieces meet; **differentiability** says they meet smoothly, with one slope.

The slope of the tangent at $x=a$ is the limit of chord slopes. That limit is the derivative, and it must be the same whether we approach from the left or the right.

## 1. The definition

The **derivative of $f$ at $a$** is

$$
f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}{h},
$$

provided this limit exists and is finite. Equivalently, $f'(a)=\lim_{x\to a}\frac{f(x)-f(a)}{x-a}$.

Because a two-sided limit must agree from both directions, define the one-sided derivatives

$$
f'_-(a)=\lim_{h\to0^-}\frac{f(a+h)-f(a)}{h},\qquad
f'_+(a)=\lim_{h\to0^+}\frac{f(a+h)-f(a)}{h}.
$$

Then $f$ is differentiable at $a$ exactly when $f'_-(a)$ and $f'_+(a)$ both exist and are equal. Their common value is $f'(a)$. Geometrically, $f'_-(a)$ and $f'_+(a)$ are the slopes of the two one-sided tangents; differentiability demands that they be the same line.

## 2. Differentiability forces continuity

This is a theorem worth deriving, because it explains why we test continuity first.

For $x\ne a$, write the difference in a suggestive way:

$$
f(x)-f(a)=\frac{f(x)-f(a)}{x-a}\,(x-a).
$$

If $f$ is differentiable at $a$, the first factor tends to $f'(a)$ as $x\to a$, while $x-a\to0$. The product therefore tends to $f'(a)\cdot0=0$:

$$
\lim_{x\to a}\bigl(f(x)-f(a)\bigr)=0 \quad\Longrightarrow\quad \lim_{x\to a}f(x)=f(a).
$$

So **differentiable at $a$ implies continuous at $a$**. The converse is false, and the standard counterexample is $f(x)=|x|$ at $0$. It is continuous there because $\lim_{x\to0}|x|=0=f(0)$. But for $x>0$ the quotient $\frac{|x|-0}{x}=1$, while for $x<0$ it is $-1$. Hence $f'_+(0)=1$ and $f'_-(0)=-1$, and no derivative exists. The graph has a corner.

## 3. Worked example: continuity is not enough

Let

$$
f(x)=\begin{cases}x^2+1,&x\le1\\3x-1,&x>1\end{cases}
$$

and examine $x=1$.

**Continuity.** $f(1)=1^2+1=2$, and the right-hand limit is $3(1)-1=2$. The pieces meet, so $f$ is continuous at $1$.

**One-sided derivatives.** From the left, differentiate $x^2+1$ to get $2x$, so $f'_-(1)=2$. From the right, differentiate $3x-1$ to get $3$, so $f'_+(1)=3$. Since $2\ne3$, the function is **not** differentiable at $1$.

**Sanity check.** The left branch has slope $2$ as it reaches $(1,2)$; the right branch leaves $(1,2)$ with slope $3$. The graph joins but kinks, exactly as the numbers predict. Continuity passed and differentiability failed — the implication runs only one way.

Now change the right branch to $2x$ and set $g(x)=\begin{cases}x^2+k,&x\le1\\2x,&x>1\end{cases}$. Continuity requires $1+k=2$, so $k=1$; then $g'_-(1)=2$ and $g'_+(1)=2$, so $g$ is differentiable at $1$. A differentiable join needs both the heights and the slopes to match.

## 4. A small catalogue of differentiability

- Polynomials, $\sin x$, $\cos x$, $e^x$ and $\ln x$ are differentiable at every point of their domains.
- Rational functions are differentiable wherever the denominator is nonzero.
- $|f|$ can fail to be differentiable where $f$ crosses zero, even if $f$ itself is differentiable there: $|x|$ at $0$ is the model case.
- At an endpoint of a domain such as $[a,b]$, only the one-sided derivative is available. In this chapter, differentiability on an open interval means the ordinary two-sided derivative at each interior point.

When a formula is given in pieces, never differentiate the pieces and stop. First check that the values join, then check that the derivatives join.

<learning-block type="mistake" title="Confusing the two implications">

A common error is writing "continuous, therefore differentiable". The function $|x|$ at $0$ disproves it: continuous, with LHD $-1$ and RHD $1$, yet not differentiable. The valid direction is differentiable $\Rightarrow$ continuous. Another slip is applying the derivative formula of one branch at the join without checking the other branch; a smooth-looking formula on the left says nothing about a kink on the right.

</learning-block>

## Try it yourself

**A.** Show from the definition that $f(x)=3x+2$ is differentiable at $x=1$ and find $f'(1)$.

<details><summary>Show the reasoning</summary>

$\frac{f(1+h)-f(1)}{h}=\frac{[3(1+h)+2]-5}{h}=\frac{3h}{h}=3$ for every $h\ne0$. The limit is $3$, so $f'(1)=3$, which is the slope of the straight line.

</details>

**B.** Determine whether $f(x)=\begin{cases}x^2,&x\le0\\x,&x>0\end{cases}$ is differentiable at $0$.

<details><summary>Show the reasoning</summary>

It is continuous: both one-sided limits and $f(0)$ equal $0$. But $f'_-(0)=\lim_{h\to0^-}\frac{h^2}{h}=0$, whereas $f'_+(0)=\lim_{h\to0^+}\frac{h}{h}=1$. The derivatives differ, so it is not differentiable at $0$.

</details>

**C.** Find $a$ and $b$ so that $f(x)=\begin{cases}ax+b,&x\le1\\x^2,&x>1\end{cases}$ is differentiable at $1$.

<details><summary>Show the reasoning</summary>

Continuity needs $a+b=1$. Matching slopes needs $a=2$, the derivative of $x^2$ at $1$. Hence $b=-1$. Check: the left branch gives $2(1)-1=1$, matching $1^2$, and both derivatives equal $2$.

</details>

## Remember

- $f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}{h}$, when the two one-sided limits exist and agree.
- Differentiable at $a$ $\Rightarrow$ continuous at $a$; the reverse implication fails, as $|x|$ at $0$ shows.
- At a piecewise join, check heights first and slopes second; both must match.
- $|f|$ may introduce a corner exactly where $f$ changes sign.
- The next module introduces the exponential and logarithm, whose derivatives we can find by applying these same limit ideas.
