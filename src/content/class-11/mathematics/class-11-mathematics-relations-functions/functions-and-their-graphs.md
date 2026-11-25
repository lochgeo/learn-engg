## When a relation becomes predictable

A relation may allow one input to produce several outputs. The circle $x^2+y^2=4$ does: the input $x=0$ gives both $y=2$ and $y=-2$. Many useful rules, however, behave like a vending machine — press one button and get exactly one item. A **function** is a relation with that property: each input in its domain has one and only one output. This restriction is what lets us write $f(x)$ and treat the output as determined by the input.

## 1. The definition

A **function** $f$ from a set $A$ to a set $B$, written $f:A\to B$, is a relation that assigns to **every** $a\in A$ **exactly one** element $f(a)\in B$. The set $A$ is the **domain**, $B$ is the **codomain**, and the **range** (or image) is

$$
f(A)=\{f(a):a\in A\}\subseteq B.
$$

Two clauses matter. "Every input" rules out leaving an element of $A$ unmapped, as happens with $1/x$ declared on all of $\mathbb{R}$. "Exactly one output" rules out one input mapping to two values, as happens with $y^2=x$ on $\mathbb{R}$.

We read $f:x\mapsto x^2$ as "the function $f$ sends $x$ to $x^2$", and $f(a)$ is the **image** of $a$. An element of $B$ may have several preimages, one preimage, or none at all.

### Counting functions

For a function $f:A\to B$, each of the $n(A)$ inputs independently chooses one of the $n(B)$ outputs. Hence

$$
\text{number of functions from }A\text{ to }B=n(B)^{\,n(A)}.
$$

Compare this with the $2^{n(A)n(B)}$ relations of the previous lesson: functions are a much smaller subset.

## 2. One-one, onto and bijective

- **One-one (injective):** different inputs give different outputs. If $f(a_1)=f(a_2)$ then $a_1=a_2$.
- **Onto (surjective):** every element of $B$ is an image; the range equals the codomain.
- **Bijective:** both one-one and onto; such a function can be reversed uniquely.

For finite sets, a one-one function needs $n(A)\le n(B)$, and an onto function needs $n(A)\ge n(B)$. When $n(A)=n(B)$, either property forces the other.

## 3. Reading a graph

The **graph** of $f$ is the set of points $\{(x,f(x)):x$ in the domain$\}$ in the Cartesian plane. Two visual tests follow directly from the definition:

- **Vertical line test.** A curve is the graph of a function precisely when no vertical line meets it more than once for an $x$ in the claimed domain. The circle fails; the parabola $y=x^2$ passes.
- **Horizontal line test.** A function is one-one precisely when no horizontal line meets its graph more than once. The parabola fails this test, which is why $x^2$ on $\mathbb{R}$ is not injective.

Common shapes are worth recognising. The **identity function** $f(x)=x$ has a straight line through the origin. A **constant function** $f(x)=c$ has a horizontal line, one-to-many in inputs but one output overall. The modulus function $|x|$ is a V with its point at the origin; $x^2$ is a parabola with its lowest point at the origin. These shapes return in the lesson on special functions.

### The inverse relation

Reflecting a graph in the line $y=x$ swaps inputs and outputs. The reflected relation need not be a function: reflecting $y=x^2$ gives $x=y^2$, which fails the vertical line test. Restricting the original domain to $[0,\infty)$ makes it one-one, and then the reflection is the genuine inverse function $f^{-1}(x)=\sqrt{x}$. This is why "one-one" matters before an inverse is written down.

## 4. Worked example

Let $A=\{1,2,3\}$ and $B=\{p,q\}$.

- Total functions: $2^3=8$, since each of the three inputs chooses $p$ or $q$.
- Onto functions: the eight include the two constants (all inputs to $p$, or all to $q$), which are not onto. So $8-2=6$ are onto.
- One-one functions: none, because three inputs cannot receive distinct outputs from a two-element codomain.

**Sanity check.** The counts agree with the finite-set conditions: onto needs $3\ge2$, which holds, while one-one needs $3\le2$, which fails.

As a second check, decide which relations on $\mathbb{R}$ are functions:

| Rule | Function on $\mathbb{R}$? | Reason |
| --- | --- | --- |
| $y=x^2$ | Yes | One square for each real $x$. |
| $y^2=x$ | No | $x=4$ gives $y=2$ and $y=-2$. |
| $y=1/(x-3)$ | No | $x=3$ has no output; it works on $\mathbb{R}\setminus\{3\}$. |
| $y=\lvert x\rvert$ | Yes | One non-negative distance for each $x$. |

<learning-block type="mistake" title="Range is not codomain">

Writing $f:\mathbb{R}\to\mathbb{R}$ for $f(x)=x^2$ is legitimate, but the range is $[0,\infty)$, not $\mathbb{R}$. The function is therefore not onto, even though it is a perfectly good function. Another common error is declaring $y=1/(x-2)$ to be a function on $\mathbb{R}$: the missing input $x=2$ must be removed from the domain before the word "function" applies.

</learning-block>

## Try it yourself

**1.** How many functions are there from $\{a,b,c,d\}$ to $\{0,1\}$? How many are onto?

<details><summary>Show the reasoning</summary>

There are $2^4=16$ functions. The two constant functions are not onto, so $16-2=14$ are onto.

</details>

**2.** Does the graph of $x=y^2$ pass the vertical line test? Answer the same question for $y=x^2$.

<details><summary>Show the reasoning</summary>

$x=y^2$ fails: at $x=4$ the vertical line contains $y=2$ and $y=-2$. The parabola $y=x^2$ passes: each vertical line touches it at exactly one point.

</details>

**3.** For $f(x)=x^2$ on $\mathbb{R}$, is $f$ one-one? What simple domain change makes it one-one?

<details><summary>Show the reasoning</summary>

No: $f(2)=f(-2)=4$. Restricting the domain to $[0,\infty)$ removes the duplicate inputs, and on that restricted domain $x^2$ is one-one (and its inverse is $\sqrt{x}$).

</details>

## Remember

- A function assigns to **every** input exactly **one** output.
- The range $f(A)$ sits inside the codomain $B$ and may be smaller than $B$.
- There are $n(B)^{n(A)}$ functions from $A$ to $B$.
- Vertical lines test "function"; horizontal lines test "one-one".
- Onto means range equals codomain; bijective means one-one and onto together.

The next lesson makes the domain precise: a formula such as $1/(x-2)$ or $\sqrt{x}$ only works on part of the real line, and combining functions changes that set.
