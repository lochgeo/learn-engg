## JEE Main sprint: how to use this set

This is a **50-minute, no-notes** paper for after you finish the chapter lessons. Spend roughly 15 minutes on Section A, 15 on Section B, 10 on Section C and 10 on Section D. Mark any question that passes 90 seconds and return to it; one stubborn range problem should not cost the rest of the paper.

Before writing, name the tool: an ordered-pair count, a relation test, a function test, a domain restriction, a range calculation, or the definition of a special function. This is a pure mathematics set, so no physical constants are needed. Give the domain whenever you write a formula, and check endpoints against the original condition rather than against a simplified expression.

## Conditions and formula sheet

| Clue | Start with | Check before trusting it |
| --- | --- | --- |
| All ordered pairs from $A$ and $B$ | $A\times B=\{(a,b):a\in A,b\in B\}$ | Order matters; $n(A\times B)=n(A)n(B)$. |
| Counting relations | $2^{n(A)n(B)}$ | A relation is any subset of $A\times B$. |
| Counting functions | $n(B)^{n(A)}$ | Every input must choose one output. |
| Reflexive / symmetric / transitive | Diagonals / reversed pairs / chained pairs | Test each property independently. |
| One-one / onto | $f(x_1)=f(x_2)\Rightarrow x_1=x_2$; range $=$ codomain | One-one needs $n(A)\le n(B)$; onto needs $n(A)\ge n(B)$. |
| Domain | Exclude zero denominators, negative even roots, non-positive logs | Intersect all conditions; a root in a denominator needs $>0$. |
| Range | Solve $y=f(x)$ for real $x$ | Verify endpoints are actually attained. |
| Algebra of functions | Common domain; $f/g$ also excludes zeros of $g$ | Simplification never enlarges a domain. |
| Composite | $(f\circ g)(x)=f(g(x))$ | Require $x\in D_g$ and $g(x)\in D_f$. |
| $\lvert x\rvert$, $[x]$, $\operatorname{sgn}(x)$ | Piecewise definitions; $[x]=n\iff n\le x<n+1$ | Floor negative numbers downward; $\{x\}\in[0,1)$. |
| $f(-x)$ | Even if $f(-x)=f(x)$; odd if $f(-x)=-f(x)$ | Domain must be symmetric about zero. |

<learning-block type="mistake" title="Three instant sanity checks">

A relation count must be a power of two, and a function count between finite sets must be a power of $n(B)$. A range found by a quadratic discriminant must be checked at its endpoints. A domain must never include a number that makes a denominator zero or an even root negative.

</learning-block>

## Section A — 10 rapid MCQs

### 1. Counting relations

If $n(A)=3$ and $n(B)=4$, the number of relations from $A$ to $B$ is:

- A. $12$
- B. $64$
- C. $81$
- D. $4096$

<details><summary>Answer</summary>

**D.** Here $n(A\times B)=3\times4=12$. A relation is a subset of $A\times B$, so there are $2^{12}=4096$ relations. Option A counts pairs; option C is $3^4$, the number of functions in the reverse direction.

</details>

### 2. Two products

Let $A=\{1,2\}$ and $B=\{a,b,c\}$. Which statement is true?

- A. $A\times B=B\times A$
- B. $n(A\times B)=n(B\times A)=6$
- C. $A\times B$ has $5$ elements
- D. $B\times A=\emptyset$

<details><summary>Answer</summary>

**B.** Both products contain $2\times3=6$ ordered pairs, but they are different sets: $(1,a)\in A\times B$ while $(a,1)\in B\times A$. Neither product is empty, and neither has five elements.

</details>

### 3. Classifying a relation

On $\{1,2,3\}$, let $R=\{(1,2),(2,1),(1,1)\}$. Then $R$ is:

- A. reflexive only
- B. symmetric only
- C. transitive only
- D. an equivalence relation

<details><summary>Answer</summary>

**B.** Symmetry holds because the reverse of each listed pair is listed. Reflexivity fails since $(2,2)$ and $(3,3)$ are absent. Transitivity fails since $(2,1)$ and $(1,2)$ would require $(2,2)$, which is absent.

</details>

### 4. A modulus function

For $f:\mathbb{R}\to\mathbb{R}$ given by $f(x)=|x|$, the function is:

- A. one-one and onto
- B. onto but not one-one
- C. one-one but not onto
- D. neither one-one nor onto

<details><summary>Answer</summary>

**D.** Not one-one: $f(2)=f(-2)=2$. Not onto: the range is $[0,\infty)$, so no negative real number is an image.

</details>

### 5. A domain with a root in the denominator

The domain of $f(x)=\dfrac1{\sqrt{x-1}}$ is:

- A. $[1,\infty)$
- B. $(1,\infty)$
- C. $\mathbb{R}\setminus\{1\}$
- D. $(-\infty,1)$

<details><summary>Answer</summary>

**B.** The square root requires $x-1\ge0$, but the denominator also requires $\sqrt{x-1}\ne0$, which excludes $x=1$. Hence $x>1$. Option A forgets that the denominator cannot vanish.

</details>

### 6. Range of a semicircle

The range of $f(x)=\sqrt{4-x^2}$ is:

- A. $[-2,2]$
- B. $[0,2]$
- C. $[0,4]$
- D. $(0,2)$

<details><summary>Answer</summary>

**B.** The domain is $[-2,2]$, on which $0\le4-x^2\le4$. The square root therefore lies in $[0,2]$; both endpoints occur, at $x=\pm2$ and $x=0$. Option A describes the domain, not the range.

</details>

### 7. Composition order

With $f(x)=x^2$ and $g(x)=2x$, the value of $(f\circ g)(x)$ is:

- A. $2x^2$
- B. $4x^2$
- C. $4x^4$
- D. $2x^3$

<details><summary>Answer</summary>

**B.** Apply $g$ first: $(f\circ g)(x)=f(2x)=(2x)^2=4x^2$. Option A would come from $2f(x)$, a different operation.

</details>

### 8. Floor of a negative number

The value of $[-0.5]$ is:

- A. $-1$
- B. $0$
- C. $0.5$
- D. $1$

<details><summary>Answer</summary>

**A.** The floor is the greatest integer less than or equal to $-0.5$. Since $-1\le-0.5<0$, the value is $-1$. Check: $\{-0.5\}=-0.5-(-1)=0.5$, which lies in $[0,1)$.

</details>

### 9. Symmetry

The function $f(x)=x^3$ is:

- A. even
- B. odd
- C. both even and odd
- D. neither

<details><summary>Answer</summary>

**B.** $f(-x)=(-x)^3=-x^3=-f(x)$, so $f$ is odd. Its graph has rotational symmetry about the origin.

</details>

### 10. Onto functions

The number of onto functions from a set with $3$ elements to a set with $2$ elements is:

- A. $4$
- B. $6$
- C. $8$
- D. $9$

<details><summary>Answer</summary>

**B.** There are $2^3=8$ functions in total. The two constant functions miss one element of the codomain; the remaining $8-2=6$ are onto.

</details>

## Section B — 5 numerical-value questions

### 11. Functions between finite sets

Let $n(A)=4$ and $n(B)=2$. How many functions are there from $A$ to $B$?

<details><summary>Answer</summary>

$2^4=16$. Each of the four inputs independently chooses one of the two outputs.

</details>

### 12. Relations on one set

How many relations are there on a set containing exactly three elements?

<details><summary>Answer</summary>

The set has $3\times3=9$ ordered pairs in its Cartesian product with itself, so the number of relations is $2^9=512$.

</details>

### 13. A domain endpoint

If the domain of $f(x)=\sqrt{x-3}$ is $[a,\infty)$, find $a$.

<details><summary>Answer</summary>

$a=3$. The radicand requires $x-3\ge0$, so $x\ge3$; the endpoint is included because $\sqrt0=0$ is defined.

</details>

### 14. A maximum value

Find the maximum value of $f(x)=\dfrac{x}{x^2+1}$ for real $x$.

<details><summary>Answer</summary>

Let $y=\dfrac{x}{x^2+1}$, so $yx^2-x+y=0$. Real solutions require $1-4y^2\ge0$, hence $|y|\le\frac12$. The upper endpoint is attained at $x=1$, where $f(1)=\frac12$. The maximum value is $\frac12$ (or $0.5$).

</details>

### 15. A minimum of two moduli

Find the minimum value of $g(x)=|x-1|+|x+2|$.

<details><summary>Answer</summary>

By the triangle inequality, $|x-1|+|x+2|\ge|(x-1)-(x+2)|=3$. Equality holds for $-2\le x\le1$, for example at $x=0$: $1+2=3$. The minimum value is $3$.

</details>

## Section C — 3 assertion–reason questions

For each, choose: **A** = both true and the reason correctly explains the assertion; **B** = both true but the reason is not the correct explanation; **C** = assertion true, reason false; **D** = assertion false, reason true.

### 16. Relations as subsets

**Assertion:** Every relation from $A$ to $B$ is a subset of $A\times B$.

**Reason:** The set $A\times B$ contains every ordered pair $(a,b)$ with $a\in A$ and $b\in B$.

<details><summary>Answer</summary>

**A.** The reason is the definition of the Cartesian product, and the assertion is the definition of a relation. Because $A\times B$ already contains all candidate pairs, any relation is one of its subsets — the reason explains the assertion.

</details>

### 17. A function with a restricted domain

**Assertion:** $f(x)=\sqrt{x}$ with domain $\mathbb{R}$ is a function from $\mathbb{R}$ to $\mathbb{R}$.

**Reason:** A function must assign exactly one output to each input in its domain.

<details><summary>Answer</summary>

**D.** The reason is a correct part of the definition, but the assertion is false: for $x<0$ the square root is not real, so $\mathbb{R}$ cannot be the domain. On the domain $[0,\infty)$ the rule is a function.

</details>

### 18. Functions versus relations

**Assertion:** Every function is a relation.

**Reason:** Every relation is a function.

<details><summary>Answer</summary>

**C.** The assertion is true: a function is a relation with the extra condition of one output per input. The reason is false: a relation may give two outputs for one input, as $x^2+y^2=4$ does at $x=0$.

</details>

## Section D — 2 matching / multi-statement questions

### 19. Match the range

Match each function in Column I with its range in Column II.

| Column I | Column II |
| --- | --- |
| (i) $f_1(x)=\lvert x\rvert$ | (p) $[0,\infty)$ |
| (ii) $f_2(x)=\sqrt{9-x^2}$ | (q) $[0,3]$ |
| (iii) $f_3(x)=x^2+1$ | (r) $[1,\infty)$ |
| (iv) $f_4(x)=-\lvert x\rvert$ | (s) $(-\infty,0]$ |

<details><summary>Answer</summary>

(i) $\to$ (p), (ii) $\to$ (q), (iii) $\to$ (r), (iv) $\to$ (s).

Working: $|x|$ is a non-negative distance and attains $0$ at $x=0$, so its range is $[0,\infty)$. For $\sqrt{9-x^2}$ the domain is $[-3,3]$ and $0\le9-x^2\le9$, giving $[0,3]$ with both endpoints attained. Since $x^2\ge0$, $x^2+1\ge1$ and $1$ is attained at $x=0$, giving $[1,\infty)$. Finally $-|x|\le0$ attains $0$ and is unbounded below, giving $(-\infty,0]$.

</details>

### 20. Which statements are true?

(i) $A\times B=B\times A$ for all sets $A$ and $B$.

(ii) If $f:A\to B$ and $g:B\to C$, then $g\circ f:A\to C$.

(iii) If both $f\circ g$ and $g\circ f$ exist, then $f\circ g=g\circ f$.

(iv) The identity function $i:\mathbb{R}\to\mathbb{R}$, $i(x)=x$, is bijective.

<details><summary>Answer</summary>

Statements **(ii)** and **(iv)** are true.

(i) is false: take $A=\{1\}$ and $B=\{2\}$; then $(1,2)\in A\times B$ but $(1,2)\notin B\times A$.

(ii) is true: for $a\in A$, $f(a)\in B$, so $g(f(a))\in C$; the composite is defined on all of $A$.

(iii) is false: with $f(x)=x^2$ and $g(x)=x+1$ on $\mathbb{R}$, $(f\circ g)(x)=(x+1)^2$ while $(g\circ f)(x)=x^2+1$; at $x=1$ these are $4$ and $2$.

(iv) is true: $i(x_1)=i(x_2)$ gives $x_1=x_2$, so $i$ is one-one, and every real $y$ equals $i(y)$, so the range equals the codomain.

</details>

## Review by error, not by score

| If you missed… | Revisit | Then retry |
| --- | --- | --- |
| 1, 2, 11, 12 | Cartesian products and relations | Count pairs first, then decide whether you need subsets (relations) or choices (functions). |
| 3, 16, 18 | Relation properties and definitions | Test reflexivity, symmetry and transitivity separately; distinguish relation from function. |
| 4, 9, 10 | Functions and their graphs | State the range explicitly before deciding onto; use $f(-x)$ for symmetry. |
| 5, 6, 13, 14 | Domain and range | Write every condition, intersect them, and verify range endpoints are attained. |
| 7, 20(iii) | Algebra of functions | Apply the inner function first and keep the inner domain. |
| 8, 15, 19, 20(i) | Special functions | Use piecewise definitions, the triangle inequality and ordered pairs. |
| 17 | Domain of a function | Check that every claimed input produces a real output. |

<learning-block type="recap" title="Ready to move on?">

Aim for at least 16 correct out of 20, with a written reason for each. Questions you answer correctly but cannot justify are revision targets, not mastered topics.

</learning-block>
