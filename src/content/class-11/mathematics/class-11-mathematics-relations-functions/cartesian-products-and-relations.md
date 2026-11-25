## From listing to pairing

A set answers one question: "is this object in the collection?" Many real questions need more than that. A map reference pairs an east–west number with a north–south number; a timetable pairs a day with a period; a marksheet pairs a student with a score. In each case the *pair* carries information that the two entries alone do not, and the order carries part of the meaning: the coordinate $(3,5)$ is not the coordinate $(5,3)$.

This lesson formalises pairing in two steps. The **Cartesian product** collects every possible ordered pair from two sets. A **relation** then selects the pairs that satisfy some condition. We finish by classifying relations on a single set, because the word "relation" in board and JEE questions usually refers to those properties.

## 1. Ordered pairs

An **ordered pair** $(a,b)$ is a list of two entries with a first position and a second position. Two ordered pairs are equal exactly when both entries match:

$$
(a,b)=(c,d)\quad\Longleftrightarrow\quad a=c\ \text{and}\ b=d.
$$

Contrast this with sets, where $\{a,b\}=\{b,a\}$. For pairs, $(1,2)\ne(2,1)$ whenever $1\ne2$. The entries are called the **first component** and **second component**; they may come from different sets and may even be equal to each other.

## 2. The Cartesian product

For sets $A$ and $B$, the Cartesian product is the set of all ordered pairs with the first entry from $A$ and the second from $B$:

$$
A\times B=\{(a,b):a\in A,\ b\in B\}.
$$

Reading the definition gives a counting rule. There are $n(A)$ choices for the first component and, independently, $n(B)$ choices for the second, so

$$
n(A\times B)=n(A)\,n(B).
$$

The product is generally **not commutative**: $A\times B\ne B\times A$ as sets, because reversing the order reverses every pair. It is empty as soon as either set is empty, so $A\times\emptyset=\emptyset$. The familiar plane is $\mathbb{R}\times\mathbb{R}$, written $\mathbb{R}^2$; every point is an ordered pair of real coordinates.

### A small illustration

Take $A=\{1,2\}$ and $B=\{a,b\}$. Then

$$
A\times B=\{(1,a),(1,b),(2,a),(2,b)\},\qquad
B\times A=\{(a,1),(a,2),(b,1),(b,2)\}.
$$

Both have $2\times2=4$ elements, but $(1,a)$ appears only in the first set. Equal size does not mean equal set.

## 3. Relations: choosing which pairs count

A **relation** $R$ from $A$ to $B$ is any subset of $A\times B$. If $A=B$ we say that $R$ is a relation **on** $A$. We write $aRb$ to mean $(a,b)\in R$, and $a\not Rb$ when the pair is absent.

Three sets are attached to a relation:

- the **domain**, $\operatorname{dom}R=\{a\in A:(a,b)\in R\text{ for some }b\}$;
- the **range**, $\{b\in B:(a,b)\in R\text{ for some }a\}$;
- the **codomain**, the target set $B$, which need not be fully used.

Because a relation is just a subset of $A\times B$, and a set with $nm$ elements has $2^{nm}$ subsets,

$$
\text{number of relations from }A\text{ to }B=2^{\,n(A)n(B)}.
$$

### Relations defined by a rule

The relation $R=\{(x,y)\in\mathbb{R}^2:y=x^2\}$ has domain $\mathbb{R}$, because every real $x$ produces a pair, and range $[0,\infty)$, because a square is never negative. The rule picks out one curve from the whole plane. A different rule, $x^2+y^2=4$, picks out a circle; its domain and range are both $[-2,2]$.

## 4. Reflexive, symmetric and transitive

For a relation $R$ on a set $A$:

- **reflexive** means $(a,a)\in R$ for every $a\in A$;
- **symmetric** means $(a,b)\in R\Rightarrow(b,a)\in R$;
- **transitive** means $(a,b)\in R$ and $(b,c)\in R\Rightarrow(a,c)\in R$.

A relation with all three is an **equivalence relation**, and it splits $A$ into disjoint equivalence classes. On $\mathbb{Z}$, define $mRn$ when $m-n$ is even. It is reflexive since $m-m=0$, symmetric because negating an even number keeps it even, and transitive because the sum of two even numbers is even. There are exactly two classes: the even integers and the odd integers.

For a contrast, $\le$ on $\mathbb{R}$ is reflexive and transitive but not symmetric: $2\le3$ does not give $3\le2$. A relation can hold one property and fail another, so each must be tested separately.

## 5. Worked example

Let $A=\{1,2\}$ and $B=\{a,b,c\}$, and take

$$
R=\{(1,a),(1,c),(2,b)\}\subseteq A\times B.
$$

Then $n(A\times B)=2\times3=6$, and the number of possible relations from $A$ to $B$ is $2^6=64$. Here $\operatorname{dom}R=\{1,2\}$ and the range is $\{a,b,c\}$: both entries of $A$ occur as first components, and all three entries of $B$ occur as second components.

**Sanity check.** The domain must be a subset of $A$ and the range a subset of $B$; both are. Since each of the six pairs is either in or out, the count $64$ is a power of two, as every subset count must be.

<learning-block type="mistake" title="Reversing a product, or confusing domain with codomain">

Two errors recur. First, $A\times B$ and $B\times A$ have the same size but are not the same set unless $A=B$: $(1,a)$ and $(a,1)$ are different objects. Second, the range of a relation is the set of second components that *actually appear*, while the codomain is the set we aimed at. For $R=\{(1,a)\}$ from $\{1,2\}$ to $\{a,b\}$, the domain is $\{1\}$, not $\{1,2\}$, and the range is $\{a\}$, not $\{a,b\}$.

</learning-block>

## Try it yourself

**1.** Let $A=\{1,2\}$ and $B=\{3,4,5\}$. List $A\times B$ and find the number of relations from $A$ to $B$.

<details><summary>Show the reasoning</summary>

$A\times B=\{(1,3),(1,4),(1,5),(2,3),(2,4),(2,5)\}$, so $n(A\times B)=6$. A relation is any subset of these six pairs, giving $2^6=64$ relations.

</details>

**2.** On $\{1,2,3\}$, test $R=\{(1,1),(2,2)\}$ for reflexivity, symmetry and transitivity.

<details><summary>Show the reasoning</summary>

It is **not reflexive**, because $(3,3)$ is missing. It **is symmetric**: reversing a diagonal pair gives the same pair. It **is transitive**: the only composable pairs are diagonal ones such as $(1,1)$ followed by $(1,1)$, which already require $(1,1)$.

</details>

**3.** For $S=\{(x,y)\in\mathbb{R}^2:x^2+y^2=4\}$, state the domain and range, and decide whether $S$ is a function from $\mathbb{R}$ to $\mathbb{R}$.

<details><summary>Show the reasoning</summary>

Both domain and range are $[-2,2]$, since $x^2\le4$ and $y^2\le4$. It is not a function: at $x=0$ the pairs $(0,2)$ and $(0,-2)$ both belong to $S$, so one input has two outputs.

</details>

## Remember

- $(a,b)$ is ordered: $(a,b)=(c,d)$ needs both entries to match.
- $A\times B=\{(a,b):a\in A,b\in B\}$ and $n(A\times B)=n(A)n(B)$.
- A relation from $A$ to $B$ is any subset of $A\times B$; there are $2^{n(A)n(B)}$ of them.
- Domain and range list first and second components that actually occur; the codomain is the target set.
- Reflexive, symmetric and transitive are independent tests; all three make an equivalence relation.

Next, we narrow relations to the special case where each input has exactly one output — a function — and learn to recognise one from its graph.
