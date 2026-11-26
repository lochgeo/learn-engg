## JEE Main sprint: how to use this set

This is a **50-minute, no-notes** paper for after the chapter lessons and the mastery check. Spend roughly 15 minutes on Section A, 18 on Section B, 10 on Section C and 7 on Section D. Mark any question that passes 90 seconds and return to it; do not let one list of ordered pairs consume the paper.

Before writing anything, name the sets and ask what is being counted or tested. Most errors here are reading errors — a missed domain restriction or a confusion between codomain and range — not algebraic slips.

## Conditions and formula sheet

| Situation | Start with | Check before using it |
| --- | --- | --- |
| Counting relations from $A$ to $B$ | $2^{|A|\,|B|}$ | Ordered pairs, not unordered pairs |
| Counting reflexive relations on $n$ elements | $2^{n^2-n}$ | The $n$ diagonal pairs are forced |
| Counting all functions $A\to B$ | $n^m$ for $|A|=m,\ |B|=n$ | Every input chooses one output |
| Counting injections | ${}^nP_m=\dfrac{n!}{(n-m)!}$, or $0$ if $m>n$ | Distinct inputs need distinct outputs |
| Counting surjections | $\sum_{k=0}^{n}(-1)^k\binom{n}{k}(n-k)^m$ | Range must cover the whole codomain |
| Counting bijections | $n!$ when $m=n$, otherwise $0$ | Both properties at once |
| Equivalence relation | Reflexive, symmetric, transitive | Classes must partition the set |
| Partial order | Reflexive, antisymmetric, transitive | Antisymmetric, not symmetric |
| Testing injectivity | $f(a_1)=f(a_2)\Rightarrow a_1=a_2$ | Check all pairs, or find one collision |
| Testing surjectivity | Solve $f(a)=b$ for arbitrary $b\in B$ | The codomain, not the domain, is the target |
| Composition | $(g\circ f)(a)=g(f(a))$ | Apply $f$ first; check domain matching |
| Inverse | Exists iff $f$ is bijective | Solve $y=f(x)$ for $x$; reverse a chain's order |

<learning-block type="mistake" title="Two fast sanity checks">

An injection from a larger finite set into a smaller one is impossible, and a surjection the other way is impossible. Also, $f^{-1}$ is an inverse function, never $1/f$. If either check fails, revisit the setup before doing more algebra.

</learning-block>

## Section A — 10 rapid MCQs

### 1. How many relations?

The number of relations from a $2$-element set to a $3$-element set is:

- A. $6$
- B. $8$
- C. $64$
- D. $216$

<details><summary>Answer</summary>

**C.** The product has $2\times3=6$ ordered pairs and each may be in or out, so there are $2^6=64$ relations.

</details>

### 2. An equivalence relation

Which relation on $\{1,2,3\}$ is an equivalence relation?

- A. $\{(1,1),(2,2),(3,3),(1,2)\}$
- B. $\{(1,1),(2,2),(3,3),(1,2),(2,1),(2,3),(3,2)\}$
- C. $\{(1,1),(2,2),(3,3),(1,2),(2,1),(1,3),(3,1),(2,3),(3,2)\}$
- D. $\{(1,2),(2,3),(1,3)\}$

<details><summary>Answer</summary>

**C.** This is the universal relation $A\times A$, so it is reflexive, symmetric and transitive. A fails symmetry because $(1,2)$ has no reverse; B fails transitivity because $(1,2)$ and $(2,3)$ are present but $(1,3)$ is not; D fails reflexivity.

</details>

### 3. A cubic

The function $f:\mathbb{R}\to\mathbb{R}$, $f(x)=x^3$ is:

- A. injective but not surjective
- B. surjective but not injective
- C. bijective
- D. neither

<details><summary>Answer</summary>

**C.** If $a^3=b^3$ then $a=b$, so $f$ is injective. For any $b\in\mathbb{R}$, $a=\sqrt[3]{b}$ is real and satisfies $a^3=b$, so $f$ is surjective. Hence it is bijective.

</details>

### 4. Bijections on a five-element set

The number of bijections from a $5$-element set onto itself is:

- A. $5$
- B. $25$
- C. $120$
- D. $3125$

<details><summary>Answer</summary>

**C.** A bijection on a finite set is a permutation, so the count is $5!=120$.

</details>

### 5. Injections between finite sets

The number of one-one functions from a $3$-element set to a $5$-element set is:

- A. $8$
- B. $15$
- C. $60$
- D. $125$

<details><summary>Answer</summary>

**C.** ${}^5P_3=5\times4\times3=60$. The inputs choose distinct outputs one after another.

</details>

### 6. A simple inverse

For $f(x)=2x+1$, the inverse function $f^{-1}(x)$ is:

- A. $2x-1$
- B. $\dfrac{x-1}{2}$
- C. $\dfrac{x+1}{2}$
- D. $\dfrac{1}{2x+1}$

<details><summary>Answer</summary>

**B.** Put $y=2x+1$, so $x=(y-1)/2$ and $f^{-1}(x)=\dfrac{x-1}{2}$. Check: $2\cdot\dfrac{x-1}{2}+1=x$.

</details>

### 7. Reading a composition

If $g\circ f$ is injective, which statement must be true?

- A. $g$ is injective
- B. $f$ is injective
- C. both are injective
- D. neither need be injective

<details><summary>Answer</summary>

**B.** If $f(a_1)=f(a_2)$ then $g(f(a_1))=g(f(a_2))$, so injectivity of $g\circ f$ gives $a_1=a_2$. $g$ need only be injective on the range of $f$, not on all of its domain.

</details>

### 8. Divisibility

The relation "divides" on the positive integers is:

- A. an equivalence relation
- B. a partial order
- C. symmetric but not reflexive
- D. neither reflexive nor transitive

<details><summary>Answer</summary>

**B.** Divisibility is reflexive ($a\mid a$), antisymmetric ($a\mid b$ and $b\mid a$ give $a=b$ for positive integers) and transitive, so it is a partial order. It is not symmetric: $2$ divides $4$, but $4$ does not divide $2$.

</details>

### 9. Bijections compose

If $f$ and $g$ are both bijections, then $g\circ f$ is:

- A. injective only
- B. surjective only
- C. bijective
- D. neither, in general

<details><summary>Answer</summary>

**C.** Both properties survive composition: an injection followed by an injection is injective, and a surjection followed by a surjection is surjective.

</details>

### 10. A familiar range

For $f:\mathbb{R}\to\mathbb{R}$, $f(x)=x^2$, the range is:

- A. $\mathbb{R}$
- B. $[0,\infty)$
- C. $(0,\infty)$
- D. $\{0\}$

<details><summary>Answer</summary>

**B.** Since $x^2\ge0$ for all real $x$, and every $b\ge0$ equals $\left(\sqrt{b}\right)^2$, the set of actual outputs is $[0,\infty)$. It is a proper subset of the codomain $\mathbb{R}$.

</details>

## Section B — 5 numerical-value questions

### 11. Relations on one set

How many relations are there on a set containing $3$ elements?

<details><summary>Answer</summary>

There are $3^2=9$ ordered pairs in $A\times A$, so $2^9=512$ relations.

</details>

### 12. Reflexive relations

How many reflexive relations are there on a set containing $5$ elements?

<details><summary>Answer</summary>

The $5$ diagonal pairs are compulsory and the remaining $25-5=20$ pairs are free, giving $2^{20}=1\,048\,576$.

</details>

### 13. Onto functions

Let $|A|=4$ and $|B|=3$. Find the number of onto functions from $A$ to $B$.

<details><summary>Answer</summary>

By inclusion–exclusion:

$$
3^4-\binom{3}{1}2^4+\binom{3}{2}1^4=81-48+3=36.
$$

(The term for three missing codomain elements is $0^4=0$.) Equivalently, $3!\,S(4,3)=6\times6=36$.

</details>

### 14. Evaluate an inverse

Let $f(x)=\dfrac{2x+1}{x-1}$ for $x\ne1$. Find $f^{-1}(3)$.

<details><summary>Answer</summary>

We need $x$ with $\dfrac{2x+1}{x-1}=3$. Then $2x+1=3x-3$, so $x=4$. Hence $f^{-1}(3)=4$; check $f(4)=\dfrac{9}{3}=3$.

</details>

### 15. A cycle

Let $f:\{1,2,3\}\to\{1,2,3\}$ be $f(1)=2$, $f(2)=3$, $f(3)=1$. Find $(f\circ f)(1)+f^{-1}(1)$.

<details><summary>Answer</summary>

$(f\circ f)(1)=f(2)=3$. Since $f(3)=1$, we have $f^{-1}(1)=3$. The sum is $3+3=6$.

</details>

## Section C — 3 assertion–reason questions

For each, choose: **A** — both statements true and the reason explains the assertion; **B** — both true but the reason does not explain the assertion; **C** — assertion true, reason false; **D** — assertion false, reason true.

### 16. Identity relation

**Assertion:** The identity relation on a non-empty set is an equivalence relation.
**Reason:** The identity relation is reflexive, symmetric and transitive.

<details><summary>Answer</summary>

**A.** The identity relation contains exactly the pairs $(a,a)$. It is reflexive by definition, symmetric because reversing $(a,a)$ changes nothing, and transitive because $(a,a)$ followed by $(a,a)$ gives $(a,a)$. The reason states precisely the defining property, so it explains the assertion.

</details>

### 17. Invertibility

**Assertion:** $f:\mathbb{R}\to\mathbb{R}$, $f(x)=x^2$ is not invertible.
**Reason:** A function is invertible if and only if it is bijective.

<details><summary>Answer</summary>

**A.** The reason is the theorem, and it is true. The assertion holds because $x^2$ is neither injective ($f(1)=f(-1)$) nor surjective onto $\mathbb{R}$ (no negative output). The theorem directly explains why invertibility fails.

</details>

### 18. Composition properties

**Assertion:** If $f$ and $g$ are injective, then $g\circ f$ is injective.
**Reason:** If $f$ and $g$ are surjective, then $g\circ f$ is surjective.

<details><summary>Answer</summary>

**B.** Both statements are true. The reason concerns surjectivity, whereas the assertion concerns injectivity; it is a separate result and does not explain the assertion. For the assertion, if $g(f(a_1))=g(f(a_2))$, injectivity of $g$ gives $f(a_1)=f(a_2)$, and injectivity of $f$ gives $a_1=a_2$.

</details>

## Section D — 2 matching and multi-statement questions

### 19. Match the relation to its property

On $A=\{1,2,3\}$, match each relation to exactly one property.

- (i) $R_1=\{(1,1),(2,2),(3,3),(1,2),(2,1)\}$
- (ii) $R_2=\{(1,1),(2,2),(3,3),(1,2),(2,3),(1,3)\}$
- (iii) $R_3=\{(1,1),(2,2),(3,3),(1,2),(2,1),(2,3),(3,2)\}$

Properties:

- (a) equivalence relation
- (b) reflexive and transitive but not symmetric
- (c) reflexive and symmetric but not transitive

<details><summary>Answer</summary>

(i)–(a): $R_1$ is reflexive; every off-diagonal pair has its reverse; and the only chains, $(1,2),(2,1)$ and $(2,1),(1,2)$, produce $(1,1)$ and $(2,2)$, which are present. So it is transitive and hence an equivalence relation; its classes are $\{1,2\}$ and $\{3\}$.

(ii)–(b): $R_2$ is reflexive and transitive — the only new chain $(1,2),(2,3)$ produces $(1,3)$, which is listed — but $(1,2)$ has no reverse, so it is not symmetric.

(iii)–(c): $R_3$ is reflexive and symmetric, since $(1,2),(2,1)$ and $(2,3),(3,2)$ come in pairs. It is not transitive: $(1,2)$ and $(2,3)$ are present but $(1,3)$ is absent.

</details>

### 20. Which statements are true?

Let $A$ have $4$ elements and $B$ have $2$ elements. Decide the truth of:

- (i) The number of functions $A\to B$ is $16$.
- (ii) The number of onto functions $A\to B$ is $14$.
- (iii) The number of one-one functions $A\to B$ is $0$.
- (iv) The number of constant functions $A\to B$ is $4$.

<details><summary>Answer</summary>

(i) True: $2^4=16$.

(ii) True: $2^4-\binom{2}{1}1^4=16-2=14$.

(iii) True: an injection needs $4\le2$, which fails.

(iv) False: a constant function sends all four inputs to one chosen element of $B$, so there are exactly $2$, not $4$.

The true statements are (i), (ii) and (iii).

</details>

## Review by error, not by score

| If you missed… | Revisit | Then retry |
| --- | --- | --- |
| 1, 4, 5, 11, 12, 13, 20 | Counting relations and functions | Write the ordered-pair count first, then apply inclusion–exclusion where needed. |
| 2, 8, 19 | Types of relations | Test reflexive, symmetric and transitive explicitly; find one counterexample. |
| 3, 5, 10 | Injective and surjective | Solve $f(a_1)=f(a_2)$ and $f(a)=b$ rather than trusting a sketch. |
| 6, 14, 15, 17 | Inverse functions | Check bijectivity, then solve $y=f(x)$ and verify a cancellation law. |
| 7, 9, 18 | Composition | Apply the right-hand function first and prove each property from its definition. |
| 16, 18 | Assertion–reason | Decide whether both statements are true *before* deciding whether one explains the other. |

<learning-block type="recap" title="Ready to move on?">

Aim for at least $16$ correct out of $20$ with a written method for every question. A question you answer correctly but cannot justify is a revision target, not a mastered topic.

</learning-block>
