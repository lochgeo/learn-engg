## One calculator answer, many possible angles

Type $\sin^{-1}(0.5)$ into a calculator and it returns about $0.5236$ radians, which is $\pi/6$. Yet $\sin(5\pi/6)=0.5$ too, and so does $\sin(13\pi/6)$. The equation $\sin\theta=0.5$ has infinitely many solutions, but $\sin^{-1}(0.5)$ has exactly one. The reason is that inverse sine is not the reverse of the whole sine function — it is the reverse of one carefully chosen piece of it. That piece is called the **principal branch**, and fixing it determines the domain and range of every inverse trigonometric function.

## 1. Why an inverse needs a restricted domain

A function is invertible only when it is one-to-one and onto its codomain. Sine on all of $\mathbb{R}$ fails both tests: $\sin 0=\sin\pi=0$ (many-to-one), and no angle has sine equal to $2$ (not onto $\mathbb{R}$). Restrict the domain to $[-\pi/2,\pi/2]$ and both problems disappear: on that interval sine climbs steadily from $-1$ to $1$, taking every value in $[-1,1]$ exactly once. The restricted function has a true inverse:

$$
y=\sin^{-1}x\quad\Longleftrightarrow\quad x=\sin y\ \text{ and }\ -\frac{\pi}{2}\le y\le\frac{\pi}{2}.
$$

The superscript $-1$ means "undo the function", not "raise to the power $-1$". For every inverse below we choose the largest convenient interval on which the original trigonometric function is one-to-one and covers its full range. That interval becomes the **range (principal branch)** of the inverse; the original function's range becomes the inverse's **domain**.

## 2. The six principal branches

| Function | Domain | Principal-value branch (range) |
| --- | --- | --- |
| $\sin^{-1}x$ | $[-1,1]$ | $\left[-\dfrac{\pi}{2},\dfrac{\pi}{2}\right]$ |
| $\cos^{-1}x$ | $[-1,1]$ | $[0,\pi]$ |
| $\tan^{-1}x$ | $\mathbb{R}$ | $\left(-\dfrac{\pi}{2},\dfrac{\pi}{2}\right)$ |
| $\cot^{-1}x$ | $\mathbb{R}$ | $(0,\pi)$ |
| $\sec^{-1}x$ | $(-\infty,-1]\cup[1,\infty)$ | $[0,\pi]\setminus\left\{\dfrac{\pi}{2}\right\}$ |
| $\csc^{-1}x$ | $(-\infty,-1]\cup[1,\infty)$ | $\left[-\dfrac{\pi}{2},\dfrac{\pi}{2}\right]\setminus\{0\}$ |

The choices are not arbitrary. Cosine is one-to-one on $[0,\pi]$, tangent on $(-\pi/2,\pi/2)$, and cotangent on $(0,\pi)$; each branch covers every value of the respective function exactly once. The last two rows follow from the first two by reciprocation:

$$
\sec^{-1}x=\cos^{-1}\!\left(\frac{1}{x}\right),\qquad \csc^{-1}x=\sin^{-1}\!\left(\frac{1}{x}\right),\qquad |x|\ge 1.
$$

**Deriving the cosecant range.** For $x\ge 1$ we have $1/x\in(0,1]$, so $\sin^{-1}(1/x)\in(0,\pi/2]$. For $x\le-1$ we have $1/x\in[-1,0)$, so $\sin^{-1}(1/x)\in[-\pi/2,0)$. The value $0$ is missing because $1/x$ can never equal $0$ for a finite $x$; this is why the branch excludes $0$. Identical reasoning with $\cos^{-1}$ explains why $\sec^{-1}$ never equals $\pi/2$.

## 3. Principal value and the cancellation relations

The **principal value** is simply the value of the inverse function on its principal branch. Two compositions are worth separating carefully:

- $\sin(\sin^{-1}x)=x$ for every $x\in[-1,1]$;
- $\sin^{-1}(\sin x)=x$ **only** for $x\in[-\pi/2,\pi/2]$.

The first always works because $\sin^{-1}x$ is an angle whose sine is $x$. The second can fail: $\sin^{-1}(\sin 5\pi/6)$ is not $5\pi/6$, because $5\pi/6$ lies outside the branch. The parallel statements are $\cos(\cos^{-1}x)=x$ for $x\in[-1,1]$ with $\cos^{-1}(\cos x)=x$ only on $[0,\pi]$, and $\tan(\tan^{-1}x)=x$ for all real $x$ with $\tan^{-1}(\tan x)=x$ only on $(-\pi/2,\pi/2)$.

### Worked example: finding principal values

Find (a) $\sin^{-1}(1/2)$, (b) $\cos^{-1}(-1/2)$, (c) $\tan^{-1}(-1)$, (d) $\sin^{-1}(\sin(5\pi/6))$, (e) $\cos^{-1}(\cos(7\pi/6))$.

**(a)** We need $y\in[-\pi/2,\pi/2]$ with $\sin y=1/2$. That is $y=\pi/6$.

**(b)** We need $y\in[0,\pi]$ with $\cos y=-1/2$. Cosine is negative in the second quadrant, so $y=\pi-\pi/3=2\pi/3$.

**(c)** We need $y\in(-\pi/2,\pi/2)$ with $\tan y=-1$. That is $y=-\pi/4$, not $3\pi/4$.

**(d)** First $\sin(5\pi/6)=\sin(\pi-5\pi/6)=\sin(\pi/6)=1/2$. Since $\pi/6\in[-\pi/2,\pi/2]$, the principal value is $\pi/6$.

**(e)** $\cos(7\pi/6)=\cos(2\pi-7\pi/6)=\cos(5\pi/6)=-\sqrt{3}/2$. Since $5\pi/6\in[0,\pi]$, the principal value is $5\pi/6$.

**Sanity check:** every answer lies inside the branch stated in the table: $\pi/6\in[-\pi/2,\pi/2]$, $2\pi/3$ and $5\pi/6$ lie in $[0,\pi]$, and $-\pi/4\in(-\pi/2,\pi/2)$. If a candidate value fails this check, it is not a principal value.

## 4. A three-step method for principal values

1. Name the function and write down its principal interval from the table.
2. If the argument is $\sin\theta$, $\cos\theta$ or $\tan\theta$, use periodicity and symmetry to replace $\theta$ by an angle inside that interval with the same sine, cosine or tangent.
3. Evaluate and verify that the result lies in the interval. If the argument is a plain number, solve $\sin y=x$ (or the relevant function) directly in the interval.

<learning-block type="mistake" title="Two errors that cost marks">

- **Reading $\sin^{-1}x$ as $1/\sin x$.** The reciprocal of sine is cosecant, written $\csc x$; the inverse function is $\sin^{-1}x$. They are entirely different objects.
- **Quoting the angle you were given.** $\sin^{-1}(\sin 5\pi/6)\ne 5\pi/6$ and $\cos^{-1}(-1/2)\ne-\pi/3$. Always check the answer against the branch before writing it down.

</learning-block>

## Try it yourself

**A.** Find the principal value of $\cos^{-1}(\cos(4\pi/3))$.

<details><summary>Show the reasoning</summary>

$\cos(4\pi/3)=-1/2$. The principal branch of $\cos^{-1}$ is $[0,\pi]$, and the angle there with cosine $-1/2$ is $2\pi/3$. Hence $\cos^{-1}(\cos(4\pi/3))=2\pi/3$, not $4\pi/3$.

</details>

**B.** Find the principal value of $\tan^{-1}(\tan(3\pi/4))$.

<details><summary>Show the reasoning</summary>

$\tan(3\pi/4)=-1$. The branch of $\tan^{-1}$ is $(-\pi/2,\pi/2)$, where the angle with tangent $-1$ is $-\pi/4$. So the value is $-\pi/4$.

</details>

**C.** Find the principal value of $\sec^{-1}(-2)$.

<details><summary>Show the reasoning</summary>

Use $\sec^{-1}x=\cos^{-1}(1/x)$: here $\sec^{-1}(-2)=\cos^{-1}(-1/2)=2\pi/3$. Check: $\sec(2\pi/3)=1/\cos(2\pi/3)=1/(-1/2)=-2$, and $2\pi/3\in[0,\pi]$ with $2\pi/3\ne\pi/2$.

</details>

## Remember

- An inverse trig function exists only after the original function is restricted to a one-to-one branch.
- Memorise the six domain–range pairs; they are the contract every later identity must respect.
- $\sec^{-1}x=\cos^{-1}(1/x)$ and $\csc^{-1}x=\sin^{-1}(1/x)$ for $|x|\ge1$.
- The principal value always lies in the stated branch — verify this before accepting an answer.
- $\sin^{-1}(\sin x)=x$ only on $[-\pi/2,\pi/2]$; reduce the angle first outside that interval.

The **graphs and properties** module next turns these branches into curves, which makes the symmetry relations visible rather than memorised.
