## Chaining machines, and running them backwards

Imagine a vending machine that turns coins into a token, and a second machine that turns a token into a drink. Doing one after the other is **composition**. If each machine can be run backwards exactly, the combined process can too — and the order in which you undo the machines matters.

Let $f:A\to B$ and $g:B\to C$. The **composition** $g\circ f:A\to C$ is defined by

$$
(g\circ f)(a)=g\bigl(f(a)\bigr).
$$

For this to make sense, every output of $f$ must be an acceptable input for $g$; matching the codomain of $f$ to the domain of $g$ guarantees that. Read $g\circ f$ right to left: apply $f$ first, then $g$.

## 1. Composition is not commutative but is associative

In general $g\circ f\ne f\circ g$ — the two may even have different domains and codomains. When both exist, they must be computed separately.

Composition **is** associative. If $f:A\to B$, $g:B\to C$ and $h:C\to D$, then

$$
\bigl((h\circ g)\circ f\bigr)(a)=h\bigl(g(f(a))\bigr)=\bigl(h\circ(g\circ f)\bigr)(a)
$$

for every $a\in A$, so $(h\circ g)\circ f=h\circ(g\circ f)$. Parentheses can be omitted in a chain of three or more.

## 2. What composition preserves

Three results recur in board and JEE questions:

- If $g\circ f$ is injective, then $f$ is injective. If $f(a_1)=f(a_2)$, applying $g$ gives $(g\circ f)(a_1)=(g\circ f)(a_2)$, hence $a_1=a_2$.
- If $g\circ f$ is surjective, then $g$ is surjective: every $c\in C$ equals $g(f(a))$ for some $a$, so $c$ is an output of $g$.
- If $f$ and $g$ are both injective, then $g\circ f$ is injective; if both are surjective, so is $g\circ f$; if both are bijections, so is $g\circ f$.

The converses fail in general: $g\circ f$ injective does not force $g$ injective on all of $B$, only on the outputs of $f$.

## 3. The inverse function

A function $f:A\to B$ is **invertible** exactly when it is bijective. Its inverse $f^{-1}:B\to A$ is defined by

$$
f^{-1}(b)=a\quad\text{iff}\quad f(a)=b.
$$

Bijectivity is needed on both counts: injectivity makes the preimage $a$ unique, and surjectivity guarantees that every $b\in B$ has one. From the definition follow the two cancellation laws

$$
f\circ f^{-1}=I_B,\qquad f^{-1}\circ f=I_A,
$$

where $I_A(a)=a$ and $I_B(b)=b$ are identity functions. To derive the first, take $b\in B$ and put $a=f^{-1}(b)$; then $f(a)=b$, so $f(f^{-1}(b))=b$.

**How to find an inverse:** write $y=f(x)$, solve algebraically for $x$ in terms of $y$, then replace $y$ by the input variable. Graphically, the curve $y=f^{-1}(x)$ is the reflection of $y=f(x)$ in the line $y=x$.

For two invertible functions, undoing a chain reverses the order:

$$
(g\circ f)^{-1}=f^{-1}\circ g^{-1}.
$$

To see why, note that $g\circ f$ sends $a$ to $g(f(a))$; to return, first undo $g$ with $g^{-1}$, then undo $f$ with $f^{-1}$.

## 4. Worked example: polynomials

Let $f:\mathbb{R}\to\mathbb{R}$, $f(x)=2x+3$ and $g:\mathbb{R}\to\mathbb{R}$, $g(x)=x^2-1$.

$$
(g\circ f)(x)=(2x+3)^2-1=4x^2+12x+8,
$$

$$
(f\circ g)(x)=2(x^2-1)+3=2x^2+1.
$$

They differ, confirming that composition is not commutative.

Now invert $f$. Put $y=2x+3$, so $x=(y-3)/2$, giving

$$
f^{-1}(y)=\frac{y-3}{2}.
$$

Sanity check: $f(f^{-1}(y))=2\cdot\frac{y-3}{2}+3=y$, and $f^{-1}(f(x))=\frac{2x+3-3}{2}=x$. Both cancellation laws hold.

The function $g$ is not injective on $\mathbb{R}$, since $g(1)=g(-1)=0$, so it has no inverse there. Restrict its domain to $[0,\infty)$ and codomain to $[-1,\infty)$: then $g$ is bijective and $g^{-1}(y)=\sqrt{y+1}$.

## 5. Worked example: a fractional linear function

Let $f:\mathbb{R}\setminus\{-1\}\to\mathbb{R}\setminus\{1\}$ be $f(x)=\dfrac{x-1}{x+1}$. Solve $y=f(x)$:

$$
y(x+1)=x-1\ \Longrightarrow\ yx+y=x-1\ \Longrightarrow\ x(y-1)=-(y+1),
$$

so

$$
f^{-1}(y)=\frac{y+1}{1-y}.
$$

Check with a convenient value: $f(3)=\frac{2}{4}=\frac12$, and $f^{-1}\!\left(\frac12\right)=\frac{3/2}{1/2}=3$. Also $y=1$ is excluded from the codomain, which is consistent with the denominator $1-y$ being zero there.

<learning-block type="mistake" title="Inverse does not mean reciprocal">

Writing $f^{-1}(x)=1/f(x)$ is the single most common error in this topic. The superscript $-1$ denotes undoing a function, not raising it to a power. A second error is inverting a function that is only injective but not onto its stated codomain: $f:\mathbb{R}\to\mathbb{R}$ with $f(x)=e^x$ has no inverse as written, because negative codomain elements are never reached. Change the codomain to $(0,\infty)$ and the inverse $\ln x$ exists.

</learning-block>

## Try it yourself

**A.** For $f(x)=3x-4$, find $f^{-1}(x)$ and verify one cancellation law.

<details><summary>Show the reasoning</summary>

Put $y=3x-4$, so $x=(y+4)/3$ and $f^{-1}(x)=\dfrac{x+4}{3}$. Then $f(f^{-1}(x))=3\cdot\dfrac{x+4}{3}-4=x$, as required.

</details>

**B.** Let $f:\{1,2,3\}\to\{1,2,3\}$ be given by $f(1)=2$, $f(2)=3$, $f(3)=1$. Write $f^{-1}$ and $f\circ f$ as lists of values.

<details><summary>Show the reasoning</summary>

$f$ is a cycle and hence bijective. Reversing the arrows: $f^{-1}(1)=3$, $f^{-1}(2)=1$, $f^{-1}(3)=2$. Composing forward: $(f\circ f)(1)=f(2)=3$, $(f\circ f)(2)=f(3)=1$, $(f\circ f)(3)=f(1)=2$.

</details>

**C.** If $f:A\to B$ and $g:B\to C$ are bijections, express $(g\circ f)^{-1}$ and justify the order.

<details><summary>Show the reasoning</summary>

$(g\circ f)^{-1}=f^{-1}\circ g^{-1}$. A value $c\in C$ passes through $g^{-1}$ to reach $B$, then through $f^{-1}$ to reach $A$. Formally, $(f^{-1}\circ g^{-1})(g(f(a)))=f^{-1}(f(a))=a$.

</details>

## Remember

- $(g\circ f)(a)=g(f(a))$: apply the right-hand function first; order matters.
- Composition is associative but not commutative.
- $g\circ f$ injective forces $f$ injective; $g\circ f$ surjective forces $g$ surjective.
- An inverse exists only for a bijection, and $f\circ f^{-1}=I_B$, $f^{-1}\circ f=I_A$.
- To invert, solve $y=f(x)$ for $x$; to invert a chain, reverse the order: $(g\circ f)^{-1}=f^{-1}\circ g^{-1}$.

The **practice and mastery check** next pulls these three modules together and trains you to pick the right tool from a question's wording alone.
