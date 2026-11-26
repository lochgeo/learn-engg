## A relation is a rule for pairing things

Picture a school timetable. It pairs classes with teachers: one teacher may take several classes, and some classes may share a teacher. A relation records such pairings without promising that each class has exactly one partner. That looser structure is the right language for "equals", "is a friend of", "divides" and "has the same remainder as" — all described on one footing.

Let $A$ and $B$ be sets. A **relation $R$ from $A$ to $B$** is a subset of the Cartesian product $A\times B$. If $(a,b)\in R$ we write $a\,R\,b$; otherwise $a$ is not related to $b$. A relation **on** $A$ is a subset of $A\times A$.

Because $A\times B$ contains $|A|\,|B|$ ordered pairs and each pair may be included or omitted independently, the number of relations from $A$ to $B$ is

$$
\text{number of relations}=2^{|A|\,|B|}.
$$

With $|A|=2$ and $|B|=3$ this gives $2^6=64$ relations. This count is our first worked numerical result and it follows directly from the definition.

## 1. The two extreme relations

- The **empty (void) relation** is $R=\varnothing$: no element is related to anything. On a non-empty set it fails reflexivity.
- The **universal relation** is $R=A\times A$: every element is related to every element, including itself. It is reflexive, symmetric and transitive, so it is an equivalence relation with exactly one equivalence class.

For a relation on an $n$-element set, $A\times A$ has $n^2$ ordered pairs; a relation is simply a choice of which of those $n^2$ pairs to keep.

## 2. The three properties that decide the type

Let $R$ be a relation on $A$.

- **Reflexive:** $(a,a)\in R$ for every $a\in A$. Every element is related to itself. If even one diagonal pair $(a,a)$ is missing, $R$ is not reflexive.
- **Symmetric:** if $(a,b)\in R$ then $(b,a)\in R$ for all $a,b\in A$. A link always works both ways.
- **Transitive:** if $(a,b)\in R$ and $(b,c)\in R$, then $(a,c)\in R$ for all $a,b,c\in A$. A two-step chain always implies the shortcut.

These are universal statements: one counterexample is enough to break a property, while proving it requires checking every qualifying case. On a finite set you can check the ordered pairs one by one; on an infinite set you need an argument, as in the congruence example below.

## 3. Equivalence relations and partitions

A relation that is reflexive, symmetric **and** transitive is an **equivalence relation**. It behaves like equality inside a coarser view of the set.

For $a\in A$, the **equivalence class** of $a$ is

$$
[a]=\{x\in A:(x,a)\in R\}.
$$

Two classes are either identical or disjoint, and their union is $A$. Thus an equivalence relation **partitions** $A$ into non-overlapping blocks. Conversely, any partition of $A$ defines an equivalence relation by declaring two elements related exactly when they lie in the same block.

### A congruence example

On the integers, define $a\,R\,b$ when $a\equiv b\pmod n$, meaning $n$ divides $a-b$. Check the three properties:

- Reflexive: $a-a=0$ and $n\mid 0$.
- Symmetric: if $n\mid(a-b)$ then $n\mid(b-a)$, since $b-a=-(a-b)$.
- Transitive: if $n\mid(a-b)$ and $n\mid(b-c)$, then $(a-b)+(b-c)=a-c$ is divisible by $n$.

So congruence modulo $n$ is an equivalence relation. Its classes are the $n$ residue classes $[0],[1],\ldots,[n-1]$, a partition of $\mathbb{Z}$ into $n$ blocks.

### A finite numerical example

Let $A=\{1,2,3,4,5,6\}$ and let $a\,R\,b$ mean "$a$ and $b$ have the same parity". The odd block is $\{1,3,5\}$ and the even block is $\{2,4,6\}$. Each block contributes every ordered pair of its own elements, so

$$
|R|=3\times3+3\times3=18.
$$

The relation is an equivalence relation with classes $[1]=\{1,3,5\}$ and $[2]=\{2,4,6\}$; these two disjoint sets cover $A$.

## 4. Partial orders

A relation is **antisymmetric** if $(a,b)\in R$ and $(b,a)\in R$ force $a=b$. A relation that is reflexive, antisymmetric and transitive is a **partial order**; it captures ideas such as "less than or equal to" and "divides", where two different elements cannot point at each other.

Take $A=\{1,2,3,4\}$ and let $a\,R\,b$ mean "$a$ divides $b$". Listing the pairs:

$$
R=\{(1,1),(1,2),(1,3),(1,4),(2,2),(2,4),(3,3),(4,4)\},
$$

so $|R|=8$. It is reflexive (all four diagonal pairs appear), antisymmetric (for instance $(1,2)\in R$ but $(2,1)\notin R$), and transitive ($1\mid2$ and $2\mid4$ give $1\mid4$). It is **not** symmetric, so it is a partial order, not an equivalence relation.

## 5. Counting reflexive relations

On an $n$-element set, $A\times A$ has $n^2$ pairs. Reflexivity forces all $n$ diagonal pairs $(a,a)$ to belong to $R$. The remaining $n^2-n$ off-diagonal pairs may each be chosen freely, giving

$$
\text{reflexive relations}=2^{\,n^2-n}.
$$

For $n=3$ this is $2^{9-3}=2^6=64$; for $n=4$ it is $2^{16-4}=2^{12}=4096$. Notice the contrast with the unrestricted count $2^{n^2}$, which is $2^9=512$ when $n=3$.

<learning-block type="mistake" title="Reflexive and symmetric does not force transitive">

A very common error is to assume that two properties automatically give the third. On $A=\{1,2,3\}$ let
$R=\{(1,1),(2,2),(3,3),(1,2),(2,1),(2,3),(3,2)\}$. Every diagonal pair is present, so $R$ is reflexive, and each off-diagonal link has its reverse, so $R$ is symmetric. But $(1,2)\in R$ and $(2,3)\in R$ while $(1,3)\notin R$, so $R$ is **not** transitive. Always test chains explicitly.

</learning-block>

## Try it yourself

**A.** On $A=\{1,2,3\}$, let $R=\{(1,1),(2,2),(3,3),(1,2)\}$. Classify it.

<details><summary>Show the reasoning</summary>

Reflexive: yes, all three diagonal pairs are present. Symmetric: no, $(1,2)\in R$ but $(2,1)\notin R$. Transitive: yes — the only possible chain would need a pair starting at $2$ other than $(2,2)$, and $(1,2)$ followed by $(2,2)$ simply returns $(1,2)$, which is present. So $R$ is reflexive and transitive but not symmetric, hence not an equivalence relation.

</details>

**B.** On $\mathbb{Z}$, let $a\,R\,b$ mean $a\equiv b\pmod 5$. How many equivalence classes are there, and what are they?

<details><summary>Show the reasoning</summary>

Congruence modulo $5$ is an equivalence relation by the argument in section 3. The classes are the residue classes $[0],[1],[2],[3],[4]$ — five of them — and they partition the integers according to the remainder on division by $5$.

</details>

**C.** How many symmetric relations are there on a two-element set?

<details><summary>Show the reasoning</summary>

For $A=\{1,2\}$, the diagonal pairs $(1,1)$ and $(2,2)$ may each be chosen freely: $2^2=4$ choices. The off-diagonal pairs $(1,2)$ and $(2,1)$ must be chosen together, giving $2$ choices. Total $4\times2=8$. In general a symmetric relation on an $n$-element set has $2^{n(n+1)/2}$ possibilities, since only one of each mirrored pair is free.

</details>

## Remember

- A relation on $A$ is any subset of $A\times A$; there are $2^{n^2}$ of them when $|A|=n$.
- Reflexive means every $(a,a)$ is present; symmetric means every link has its reverse; transitive means every two-step chain has a shortcut.
- Equivalence relations are reflexive, symmetric and transitive, and their classes partition the set.
- Partial orders are reflexive, antisymmetric and transitive; divisibility is the standard example.
- One counterexample disproves a property; proving it needs a general argument.

Next, we narrow relations to **functions**, where each input has exactly one output, and learn to recognise one-one and onto functions.
