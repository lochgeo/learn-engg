## Your study plan for this chapter

Relations and Functions is a chapter of small definitions with sharp boundaries: one missing pair, one excluded endpoint, or one ignored domain restriction changes the answer. A focused first pass takes about **1 hour 30 minutes**, plus a short break.

| Step | Module | Minutes |
| --- | --- | --- |
| 1 | Cartesian products and relations | 20 |
| 2 | Functions and their graphs | 20 |
| 3 | Domain, range and algebra of functions | 20 |
| 4 | Special functions | 20 |
| 5 | Short break | 10 |
| 6 | This mastery check | 25 |

After each step, close the explanation and redo its "Try it yourself" questions from a blank page. Mark a step done only when you can state the definition before reading it — especially the difference between domain, range and codomain.

The optional **JEE Main timed practice** module is a $50$-minute paper. Save it until the tools below feel separate in your head; its purpose is choosing the right one quickly, not learning the tools for the first time.

## First choose the tool

| Clue in the question | Reach for |
| --- | --- |
| "List ordered pairs", "how many pairs" | $A\times B=\{(a,b):a\in A,b\in B\}$ and $n(A)n(B)$. |
| "How many relations / functions" | $2^{n(A)n(B)}$ for relations, $n(B)^{n(A)}$ for functions. |
| Reflexive, symmetric, transitive | Test each separately: diagonals, reversed pairs, chained pairs. |
| "Is this a function?" | One output per input; check the vertical line test on a graph. |
| "One-one / onto / bijective" | Equal outputs imply equal inputs; compare range with codomain. |
| A denominator, even root or logarithm | Intersect conditions to get the domain; exclude zero denominators. |
| "Find the range" | Solve $y=f(x)$ for real $x$, or read extrema from the graph. |
| $f\pm g$, $fg$, $f/g$ | Common domain; for $f/g$ also exclude zeros of $g$. |
| A composite $(f\circ g)(x)$ | Apply $g$ first; require $x\in D_g$ and $g(x)\in D_f$. |
| $\lvert x\rvert$, $[x]$, $\operatorname{sgn}(x)$ | Piecewise definitions; triangle inequality; $x=[x]+\{x\}$. |
| $f(-x)$ compared with $f(x)$ | Even if equal, odd if negated, otherwise neither. |

## Mastery check

Try each question before opening its answer. Work on a separate sheet and write the domain wherever a formula appears.

### 1. Counting pairs and relations

Let $A=\{1,2\}$ and $B=\{p,q,r\}$. Find $n(A\times B)$ and the number of relations from $A$ to $B$. Is $A\times B$ the same set as $B\times A$?

<details><summary>Answer and reasoning</summary>

$n(A\times B)=2\times3=6$. A relation is any subset of these six pairs, so there are $2^6=64$ relations. The sets $A\times B$ and $B\times A$ have the same size but are different: $(1,p)$ belongs to the first and $(p,1)$ to the second.

</details>

### 2. Testing relation properties

On $\{1,2,3\}$, let $R=\{(1,2),(2,1),(1,1)\}$. Decide whether $R$ is reflexive, symmetric and transitive.

<details><summary>Answer and reasoning</summary>

Not reflexive: $(2,2)$ and $(3,3)$ are missing. Symmetric: the reverse of every listed pair is listed. Not transitive: $(2,1)$ and $(1,2)$ are present but $(2,2)$ is not. So $R$ is symmetric only.

</details>

### 3. Which rules are functions?

Decide which of these are functions from $\mathbb{R}$ to $\mathbb{R}$: (i) $y^2=x$; (ii) $y=1/(x-3)$; (iii) $y=|x|$.

<details><summary>Answer and reasoning</summary>

(i) No: $x=4$ gives $y=\pm2$, two outputs. (ii) No: $x=3$ has no output, so the claimed domain $\mathbb{R}$ is wrong; it is a function on $\mathbb{R}\setminus\{3\}$. (iii) Yes: every real input has exactly one non-negative distance from zero.

</details>

### 4. Domain and range of a shifted root

Find the domain and range of $g(x)=\sqrt{x-2}+1$.

<details><summary>Answer and reasoning</summary>

The root needs $x\ge2$, so the domain is $[2,\infty)$. Since $\sqrt{x-2}\ge0$, we get $g(x)\ge1$, and $g(x)=1$ at $x=2$; as $x$ grows, $\sqrt{x-2}$ grows without bound. The range is $[1,\infty)$.

</details>

### 5. Counting functions with constraints

Let $f:\{1,2,3\}\to\{a,b\}$. How many functions are there in total? How many are onto, and how many are one-one?

<details><summary>Answer and reasoning</summary>

Total: $2^3=8$. The two constant functions are not onto, so $6$ are onto. No function is one-one: a one-one map needs at least three distinct outputs, but the codomain has only two. Check the inequalities: onto needs $3\ge2$ (true), one-one needs $3\le2$ (false).

</details>

### 6. Composition is order-sensitive

With $f(x)=x^2$ and $g(x)=x+1$, find $f\circ g$ and $g\circ f$, and show they are different.

<details><summary>Answer and reasoning</summary>

$(f\circ g)(x)=f(x+1)=(x+1)^2$ and $(g\circ f)(x)=g(x^2)=x^2+1$. Both have domain $\mathbb{R}$, but at $x=1$ they give $4$ and $2$ respectively. Equality would require $(x+1)^2=x^2+1$, i.e. $2x=0$, which holds only at $x=0$.

</details>

### 7. Floors and fractional parts

Evaluate $[-1.7]$, $\{-1.7\}$, $[3]$ and $[0.99]$.

<details><summary>Answer and reasoning</summary>

Since $-2\le-1.7<-1$, we have $[-1.7]=-2$ and $\{-1.7\}=-1.7-(-2)=0.3$. Also $[3]=3$ and $[0.99]=0$. Check: $-2+0.3=-1.7$ and $0+0.99=0.99$.

</details>

### 8. A range found through a discriminant

Find the range of $g(x)=\dfrac{2x}{x^2+1}$ for $x\in\mathbb{R}$.

<details><summary>Answer and reasoning</summary>

Set $y=\dfrac{2x}{x^2+1}$, so $yx^2-2x+y=0$. A real $x$ needs $4-4y^2\ge0$, hence $-1\le y\le1$. The value $y=1$ occurs at $x=1$ and $y=-1$ at $x=-1$; $y=0$ occurs at $x=0$ (where the equation is linear, not quadratic). The range is $[-1,1]$.

</details>

### 9. Solving a modulus equation

Solve $|x-2|+|x+3|=5$ over the real numbers.

<details><summary>Answer and reasoning</summary>

The expression is the sum of the distances from $x$ to $2$ and to $-3$. Those two points are $5$ apart, so the sum equals $5$ exactly for $x$ between them, inclusive: $x\in[-3,2]$. Outside that interval the sum exceeds $5$. A piecewise check agrees: for $x\ge2$ the sum is $2x+1$, giving only $x=2$; for $x\le-3$ it is $-2x-1$, giving only $x=-3$; between them it is identically $5$.

</details>

### 10. Even, odd or neither?

Classify $x^3+x$, $x^2+1$, $|x|$, $x^2+x$ and the zero function.

<details><summary>Answer and reasoning</summary>

$x^3+x$ is odd since $f(-x)=-x^3-x=-f(x)$. $x^2+1$ and $|x|$ are even since $f(-x)=f(x)$. $x^2+x$ is neither: $f(-x)=x^2-x$ matches neither $f(x)$ nor $-f(x)$. The zero function is both, because $0=0$ and $0=-0$; it is the only function that is both even and odd on a symmetric domain containing more than one point.

</details>

## Self-check

You are ready for the timed set when you can:

- count ordered pairs, relations and functions from the sizes of the underlying sets;
- test reflexivity, symmetry and transitivity without mixing them up;
- tell from a formula or a graph whether a relation is a function;
- state the domain before solving any range problem;
- compute a range by solving $y=f(x)$, including the discriminant method for a rational function;
- find the domain of $f/g$ and of a composite without relying on a simplified expression;
- evaluate floors and fractional parts of negative numbers correctly;
- use the triangle inequality to bound a modulus sum;
- recognise even and odd functions from $f(-x)$, including the zero-function exception;
- check that every answer has the right endpoints, brackets and set notation.

If one item still feels shaky, revisit that lesson and redo its questions without the reveal.
