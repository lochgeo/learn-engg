## A curve traced by a moving point

A particle's position may be given as $x=2\cos t$, $y=3\sin t$: neither coordinate is stated as a function of the other, yet together they trace an ellipse. Time $t$ is a **parameter**, and the path is described *parametrically*. We still want the slope of the curve and the way that slope changes. The chain rule supplies both without any need to eliminate $t$.

## 1. The first derivative

If $x=x(t)$ and $y=y(t)$, then, regarding $y$ as a function of $x$,

$$
\frac{dy}{dt}=\frac{dy}{dx}\cdot\frac{dx}{dt}.
$$

Provided $\frac{dx}{dt}\ne0$, rearrange to obtain the working formula

$$
\frac{dy}{dx}=\frac{\dfrac{dy}{dt}}{\dfrac{dx}{dt}}.
$$

The condition matters: when $\frac{dx}{dt}=0$ but $\frac{dy}{dt}\ne0$, the tangent is vertical and $\frac{dy}{dx}$ is undefined. Dividing by zero here would be a genuine error, not a harmless shortcut.

For an explicit function $y=f(x)$, apply the same rules directly. For example, if $y=e^{2x}+\sin x$, then

$$
y'=2e^{2x}+\cos x,\qquad y''=4e^{2x}-\sin x.
$$

## 2. The second derivative

The second derivative is the derivative of the first derivative with respect to $x$, not a squared quantity. Since $\frac{dy}{dx}$ is normally a function of $t$, use the chain rule a second time:

$$
\frac{d^2y}{dx^2}=\frac{d}{dx}\left(\frac{dy}{dx}\right)
=\frac{\dfrac{d}{dt}\left(\dfrac{dy}{dx}\right)}{\dfrac{dx}{dt}}.
$$

The final division by $\frac{dx}{dt}$ is the step most often forgotten. Notice also the notation: $\frac{d^2y}{dx^2}$ means $\frac{d}{dx}\!\left(\frac{dy}{dx}\right)$, whereas $\left(\frac{dy}{dx}\right)^2$ is the square of the slope. They are entirely different objects.

## 3. Worked example: a parametric curve

Let $x=t^2$, $y=t^3$ with $t>0$. Find $\frac{dy}{dx}$ and $\frac{d^2y}{dx^2}$ at $t=2$.

First derivative:

$$
\frac{dx}{dt}=2t,\qquad \frac{dy}{dt}=3t^2,
\qquad
\frac{dy}{dx}=\frac{3t^2}{2t}=\frac{3t}{2}\quad(t>0).
$$

At $t=2$, the slope is $3$. For the second derivative, differentiate this slope with respect to $t$ and then divide by $\frac{dx}{dt}$:

$$
\frac{d}{dt}\left(\frac{3t}{2}\right)=\frac32,
\qquad
\frac{d^2y}{dx^2}=\frac{\tfrac32}{2t}=\frac{3}{4t}.
$$

At $t=2$, the second derivative is $\frac38$.

**Sanity check by eliminating the parameter.** Since $x=t^2$ and $t>0$, $t=\sqrt x$, so $y=t^3=x^{3/2}$. Then $y'=\frac32\sqrt x$, which at $x=4$ is $3$, and $y''=\frac{3}{4\sqrt x}$, which at $x=4$ is $\frac38$. Both results agree.

## 4. The same idea for implicit curves

For a relation such as $x^2+y^2=25$, differentiate both sides with respect to $x$, remembering that $y$ is a function of $x$:

$$
2x+2y\,y'=0 \quad\Longrightarrow\quad y'=-\frac{x}{y}.
$$

At $(3,4)$ the slope is $-\frac34$, which is perpendicular to the radius of slope $\frac43$ — exactly what a tangent to a circle should be.

Differentiate $x+y\,y'=0$ once more:

$$
1+(y')^2+y\,y''=0 \quad\Longrightarrow\quad y''=-\frac{1+(y')^2}{y}.
$$

At $(3,4)$, $y''=-\frac{1+9/16}{4}=-\frac{25}{64}$.

**Sanity check.** The upper semicircle is $y=\sqrt{25-x^2}$. Differentiating twice gives $y''=-\frac{25}{(25-x^2)^{3/2}}$, which at $x=3$ is $-\frac{25}{64}$. The explicit and implicit routes agree.

<learning-block type="mistake" title="Two traps in the second derivative">

The first trap is stopping at $\frac{d}{dt}\left(\frac{dy}{dx}\right)$ and calling it $\frac{d^2y}{dx^2}$; the chain rule demands a further division by $\frac{dx}{dt}$. The second is writing $\frac{d^2y}{dx^2}=\left(\frac{dy}{dx}\right)^2$. For $y=x^3$ at $x=1$, the slope is $3$ but $\left(\frac{dy}{dx}\right)^2=9$ while $\frac{d^2y}{dx^2}=6x=6$. Also check that $\frac{dx}{dt}\ne0$ before using the parametric formula at all.

</learning-block>

## Try it yourself

**A.** For $x=t^2+1$, $y=t^3$, find $\frac{dy}{dx}$ and $\frac{d^2y}{dx^2}$ at $t=2$.

<details><summary>Show the reasoning</summary>

$\frac{dx}{dt}=2t$ and $\frac{dy}{dt}=3t^2$, so $\frac{dy}{dx}=\frac{3t}{2}=3$ at $t=2$. Its $t$-derivative is $\frac32$, so $\frac{d^2y}{dx^2}=\frac{3/2}{2t}=\frac{3}{4t}=\frac38$ at $t=2$. Eliminating $t$ gives $y=(x-1)^{3/2}$, whose derivatives at $x=5$ are also $3$ and $\frac38$.

</details>

**B.** For $y=\ln x$, find $y''$ at $x=2$.

<details><summary>Show the reasoning</summary>

$y'=\frac1x$, so $y''=-\frac{1}{x^2}=-\frac14$ at $x=2$. The negative sign records that $\ln x$ is increasing but bending downwards (concave).

</details>

**C.** Find $y''$ from $x^2-y^2=9$ and evaluate it at $(5,4)$ on the upper branch.

<details><summary>Show the reasoning</summary>

Differentiating: $2x-2y\,y'=0$, so $y'=\frac{x}{y}=\frac54$ at $(5,4)$. Differentiating $x-y\,y'=0$ gives $1-(y')^2-y\,y''=0$, hence $y''=\frac{1-(y')^2}{y}=\frac{1-25/16}{4}=-\frac{9}{64}$. The upper branch $y=\sqrt{x^2-9}$ gives the same value.

</details>

## Remember

- $\frac{dy}{dx}=\frac{dy/dt}{dx/dt}$ when $\frac{dx}{dt}\ne0$; a zero denominator with nonzero numerator means a vertical tangent.
- $\frac{d^2y}{dx^2}=\dfrac{\frac{d}{dt}(dy/dx)}{dx/dt}$ — differentiate with respect to $t$, then divide by $\frac{dx}{dt}$ again.
- $\frac{d^2y}{dx^2}$ is the derivative of the slope, not its square.
- Implicit differentiation treats $y$ as a function of $x$; every derivative of $y$ must carry a $y'$ factor.
- The mean value theorems connect a function's average rate of change to its derivative; the next module states exactly when that connection is guaranteed.
