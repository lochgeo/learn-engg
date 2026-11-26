## Your study plan for today

This chapter is three connected ideas: classify a relation, classify a function, then chain and reverse functions. A focused first pass takes about **1 hour 10 minutes**, plus a short break:

1. **Types of relations** — 22 min
2. **One-one and onto functions** — 22 min
3. **Composition and inverse functions** — 22 min
4. **This mastery check** — 25 min

After each lesson, close the explanation and try its questions from a blank page. Mark a module complete only when you can explain *why* your classification follows from the definition. After this pass, use the **JEE Main timed practice** module for a $50$-minute paper; its value lies in choosing the right tool quickly, not in learning new content.

## First choose the tool

| Clue in the question | Start with |
| --- | --- |
| "How many relations/functions?" | Count ordered pairs first: $2^{|A||B|}$, $n^m$, ${}^nP_m$ or inclusion–exclusion |
| "Reflexive / symmetric / transitive?" | Test each property separately; one counterexample disproves it |
| "Equivalence relation / equivalence class?" | Check all three properties, then list disjoint classes that partition the set |
| "Partial order?" | Check reflexive, antisymmetric and transitive (never symmetric unless trivial) |
| "One-one?" | Assume $f(a_1)=f(a_2)$ and deduce $a_1=a_2$; look for a horizontal-line failure |
| "Onto?" | Take arbitrary $b$ in the codomain and solve $f(a)=b$ |
| Domain or codomain changed | Re-read both sets; injectivity and surjectivity can change with them |
| "$g\circ f$" | Apply $f$ first, then $g$; watch the order |
| "Inverse exists?" | Check bijection; then solve $y=f(x)$ for $x$ |
| "Inverse of a chain?" | Reverse the order: $(g\circ f)^{-1}=f^{-1}\circ g^{-1}$ |

## Mastery check

Try each question without revealing the answer first.

### 1. Counting relations

How many relations are there from a set with $3$ elements to a set with $2$ elements?

<details><summary>Answer and reasoning</summary>

$A\times B$ has $3\times2=6$ ordered pairs, and each may be included or omitted, so there are $2^6=64$ relations.

</details>

### 2. Counting reflexive relations

How many reflexive relations are there on a set with $4$ elements?

<details><summary>Answer and reasoning</summary>

$A\times A$ has $4^2=16$ pairs. Reflexivity fixes the $4$ diagonal pairs, leaving $16-4=12$ free choices. Hence $2^{12}=4096$.

</details>

### 3. An equivalence relation on the integers

On $\mathbb{Z}$, define $a\,R\,b$ when $a-b$ is even. Show that $R$ is an equivalence relation and describe its classes.

<details><summary>Answer and reasoning</summary>

Reflexive: $a-a=0$ is even. Symmetric: if $a-b$ is even, then $b-a=-(a-b)$ is even. Transitive: if $a-b$ and $b-c$ are even, their sum $a-c$ is even. So $R$ is an equivalence relation. The classes are the even integers $[0]$ and the odd integers $[1]$; they are disjoint and together cover $\mathbb{Z}$.

</details>

### 4. A partial order

On $\{1,2,3\}$, let $a\,R\,b$ mean $a\le b$. Classify $R$.

<details><summary>Answer and reasoning</summary>

Reflexive: $a\le a$ always. Antisymmetric: $a\le b$ and $b\le a$ force $a=b$. Transitive: $a\le b$ and $b\le c$ give $a\le c$. It is not symmetric, since $1\le2$ is true while $2\le1$ is false. Hence $R$ is a partial order, not an equivalence relation.

</details>

### 5. Classify a familiar function

Let $f:\mathbb{R}\to\mathbb{R}$ with $f(x)=|x|$. Is it injective, surjective, both or neither?

<details><summary>Answer and reasoning</summary>

Not injective: $f(2)=f(-2)=2$ with $2\ne-2$. Not surjective onto $\mathbb{R}$: the range is $[0,\infty)$, so $b=-3$ has no preimage. It is neither.

</details>

### 6. Counting onto and one-one functions

Let $A$ have $3$ elements and $B$ have $2$. How many functions $A\to B$ are onto? How many are one-one?

<details><summary>Answer and reasoning</summary>

Onto: $2^3-\binom{2}{1}1^3=8-2=6$; the two excluded functions are the constant ones. One-one: $0$, because three distinct inputs cannot occupy only two distinct outputs.

</details>

### 7. Counting injections

How many one-one functions are there from a $4$-element set to a $6$-element set?

<details><summary>Answer and reasoning</summary>

${}^6P_4=\dfrac{6!}{(6-4)!}=6\times5\times4\times3=360$.

</details>

### 8. Find and check an inverse

For $f(x)=2x-5$, find $f^{-1}(x)$ and verify one of the cancellation laws.

<details><summary>Answer and reasoning</summary>

Put $y=2x-5$, so $x=\dfrac{y+5}{2}$ and $f^{-1}(x)=\dfrac{x+5}{2}$. Check: $f\bigl(f^{-1}(x)\bigr)=2\cdot\dfrac{x+5}{2}-5=x$, confirming $f\circ f^{-1}=I$.

</details>

### 9. Inverse pair on a restricted domain

Let $f:[0,\infty)\to[0,\infty)$ with $f(x)=x^2$ and $g:[0,\infty)\to[0,\infty)$ with $g(x)=\sqrt{x}$. Evaluate $f\circ g$ and $g\circ f$.

<details><summary>Answer and reasoning</summary>

$(f\circ g)(x)=(\sqrt{x})^2=x$ for $x\ge0$, and $(g\circ f)(x)=\sqrt{x^2}=x$ for $x\ge0$ (the restriction is essential: $\sqrt{x^2}=|x|$ on all of $\mathbb{R}$). Both compositions are the identity, so $f$ and $g$ are inverses of each other.

</details>

### 10. A composition deduction

If $g\circ f$ is injective, which of $f$ and $g$ must be injective? Give an example to settle the other one.

<details><summary>Answer and reasoning</summary>

$f$ must be injective: if $f(a_1)=f(a_2)$, then $g(f(a_1))=g(f(a_2))$, so injectivity of $g\circ f$ gives $a_1=a_2$. $g$ need not be injective on its whole domain. Example: $A=\{1\}$, $B=\{1,2\}$, $C=\{1\}$, $f(1)=1$ and $g(1)=g(2)=1$. Then $g\circ f$ is injective while $g$ is not.

</details>

## Self-check

You are ready for the timed set when you can:

- state the definitions of reflexive, symmetric, transitive, antisymmetric and equivalence, and test each on a given relation;
- explain why equivalence classes partition a set and calculate their number;
- distinguish domain, codomain and range in any function question;
- prove or disprove injectivity and surjectivity from their definitions;
- count relations, injections, surjections and bijections on finite sets;
- compose two functions in the correct order and test associativity;
- decide when an inverse exists and compute it, including for a restricted domain;
- write $(g\circ f)^{-1}=f^{-1}\circ g^{-1}$ and justify the reversed order.

If one item still feels shaky, revisit that module and redo its questions with the reveals closed.
