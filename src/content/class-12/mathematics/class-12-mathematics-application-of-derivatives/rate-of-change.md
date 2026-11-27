## The speedometer answers a question about an instant

A car's trip meter says it covered $120$ km in two hours, so its *average* speed was $60$ km/h. At no instant during the journey need the speedometer have read exactly $60$ — unless the speed varied smoothly, in which case it did. The average describes the whole interval; the speedometer describes one moment. The derivative is the mathematical instrument that turns an interval average into an instantaneous rate.

The same distinction appears in the laboratory: the average rate at which a reactant is consumed over a minute is not the rate at the instant a catalyst is added. When a question asks "how fast *now*", it is asking for a derivative.

## 1. Average rate and instantaneous rate

For a quantity $y$ that depends on $x$, the average rate of change from $x=a$ to $x=b$ is

$$
\frac{\Delta y}{\Delta x}=\frac{f(b)-f(a)}{b-a}.
$$

Geometrically this is the slope of the chord joining two points on the graph of $f$. Shrink the interval by writing $b=a+h$:

$$
\text{instantaneous rate at }a=\lim_{h\to0}\frac{f(a+h)-f(a)}{h}=f'(a).
$$

The limit is the slope of the tangent at $a$, so **the derivative at a point is the instantaneous rate of change of the function at that point**. This is why the units of a derivative are "units of $y$ per unit of $x$": if $y$ is metres and $x$ is seconds, $dy/dx$ is metres per second.

## 2. From derivative to change: the differential

Let $x$ change by a small amount $\Delta x$. Because

$$
f'(x)=\lim_{\Delta x\to0}\frac{\Delta y}{\Delta x},
$$

for small $\Delta x$ we have $\Delta y\approx f'(x)\Delta x$. We name the small change in the input the **differential** $dx$ and define

$$
dy=f'(x)\,dx.
$$

Here $dx$ is an independent small number (we may choose it), while $dy$ is the resulting predicted change in $y$. For small $dx$, $dy$ approximates the true change $\Delta y$; the error is of order $(dx)^2$, so halving $dx$ roughly quarters the error. This is the idea behind the approximations module later in the chapter.

## 3. Related rates: letting time enter

If $x$ and $y$ are both functions of time $t$, differentiating an equation relating them with respect to $t$ produces a relation between their rates. The chain rule supplies the missing factors:

$$
\frac{dy}{dt}=\frac{dy}{dx}\cdot\frac{dx}{dt}.
$$

For a circle of radius $r$, the area $A=\pi r^2$ gives

$$
\frac{dA}{dt}=2\pi r\frac{dr}{dt}.
$$

If the radius grows at $3\ \text{cm/s}$, then at $r=10\ \text{cm}$ the area grows at $2\pi(10)(3)=60\pi\ \text{cm}^2/\text{s}$. **Sanity check:** the result is positive because area increases with radius, and its size (about $188\ \text{cm}^2/\text{s}$) is plausible for a circle of circumference roughly $63\ \text{cm}$ expanding at $3\ \text{cm/s}$ — each second adds a thin ring of area $2\pi r\,dr$.

## 4. A fully worked example: the sliding ladder

A $5\ \text{m}$ ladder leans against a wall. Its foot is pulled away from the wall at $0.5\ \text{m/s}$. How fast is the top sliding down when the foot is $3\ \text{m}$ from the wall?

Let $x$ be the foot's distance from the wall and $y$ the height of the top. Pythagoras gives, at every instant,

$$
x^2+y^2=25.
$$

Differentiate with respect to time $t$:

$$
2x\frac{dx}{dt}+2y\frac{dy}{dt}=0.
$$

At the instant in question $x=3$, so $y=\sqrt{25-9}=4$. Also $dx/dt=0.5$. Substituting,

$$
2(3)(0.5)+2(4)\frac{dy}{dt}=0\quad\Rightarrow\quad 3+8\frac{dy}{dt}=0\quad\Rightarrow\quad \frac{dy}{dt}=-\frac38=-0.375\ \text{m/s}.
$$

The negative sign says the height is decreasing: the top slides **down** at $0.375\ \text{m/s}$. **Sanity check:** the $3$–$4$–$5$ triangle is exact, and $|dy/dt|<|dx/dt|$ here because the top is higher than the foot's distance — a small horizontal move produces a smaller vertical drop.

<learning-block type="mistake" title="Confusing the variable you differentiate with">

The commonest error is mixing up $dy/dx$ and $dy/dt$. In the ladder problem, writing $dy/dx=-x/y$ is correct, but it answers "how much does the height fall per metre of foot movement", not "how fast does the top move". Multiply by $dx/dt$ to get a rate in time. A second error is substituting the numerical value $x=3$ *before* differentiating: doing so turns $x$ into a constant and wrongly sets $dx/dt=0$. Differentiate first, substitute second.

</learning-block>

## Try it yourself

**A.** For $A=\pi r^2$, find $dA/dr$ at $r=7\ \text{cm}$ and state its units.

<details><summary>Show the reasoning</summary>

$dA/dr=2\pi r=14\pi\ \text{cm}^2$ per centimetre of radius (about $44.0\ \text{cm}^2/\text{cm}$). A derivative has the units of the output divided by those of the input, here area per length.

</details>

**B.** Air is pumped into a spherical balloon at $100\ \text{cm}^3/\text{s}$. How fast does the radius grow when $r=5\ \text{cm}$?

<details><summary>Show the reasoning</summary>

$V=\frac43\pi r^3$, so $\frac{dV}{dt}=4\pi r^2\frac{dr}{dt}$. With $dV/dt=100$ and $r=5$: $100=4\pi(25)\frac{dr}{dt}=100\pi\frac{dr}{dt}$, giving $\frac{dr}{dt}=\frac1\pi\approx0.318\ \text{cm/s}$.

</details>

**C.** A particle's position is $s(t)=t^2+3t$ metres after $t$ seconds. Find its velocity at $t=2$ and compare it with its average speed over $[0,2]$.

<details><summary>Show the reasoning</summary>

$v=ds/dt=2t+3$, so $v(2)=7\ \text{m/s}$. The average speed over $[0,2]$ is $\frac{s(2)-s(0)}{2}=\frac{(4+6)-0}{2}=5\ \text{m/s}$. They differ because the velocity rises throughout the interval; by the mean value theorem the instantaneous value matches the average at $t=1$.

</details>

## Remember

- Average rate over $[a,b]$ is the chord slope $\frac{f(b)-f(a)}{b-a}$; instantaneous rate at $a$ is the tangent slope $f'(a)$.
- The derivative's units are "output units per input unit", a quick check on any rate answer.
- For small $dx$, $dy=f'(x)dx$ estimates the true change $\Delta y$, with an error of order $(dx)^2$.
- Related rates need the chain rule: differentiate the geometric relation first, then substitute numbers.
- Next, use the *sign* of the derivative to decide where a function rises and where it falls.
