## Combining collections

A registration list holds every student; the cricket team holds some of them. To ask "who is in both?" or "who is in neither?" we need operations that build new sets from old ones. Each operation is defined by a membership test, so every law below can be checked by asking whether a given object passes the test.

Throughout this lesson, $A$, $B$ and $C$ are subsets of a stated universal set $U$.

## 1. The four basic operations

**Union** keeps members of either set:

$$
A\cup B=\{x: x\in A\ \text{or}\ x\in B\}.
$$

The word "or" is inclusive: an element in both sets is still in the union.

**Intersection** keeps only common members:

$$
A\cap B=\{x: x\in A\ \text{and}\ x\in B\}.
$$

If $A\cap B=\emptyset$, the sets are **disjoint**.

**Difference** removes from $A$ anything that also lies in $B$:

$$
A\setminus B=\{x: x\in A\ \text{and}\ x\notin B\}.
$$

It is not symmetric: $A\setminus B\ne B\setminus A$ in general.

**Complement** is the difference from the universal set:

$$
A'=U\setminus A=\{x\in U: x\notin A\}.
$$

The complement is meaningless until $U$ is fixed; the same set has different complements in different universes.

## 2. The laws they obey

These identities are membership tests in disguise. For example, $x\in A\cup B$ says "$x\in A$ or $x\in B$", which is the same statement as "$x\in B$ or $x\in A$", so union is commutative.

| Law | Union form | Intersection form |
| --- | --- | --- |
| Commutative | $A\cup B=B\cup A$ | $A\cap B=B\cap A$ |
| Associative | $(A\cup B)\cup C=A\cup(B\cup C)$ | $(A\cap B)\cap C=A\cap(B\cap C)$ |
| Idempotent | $A\cup A=A$ | $A\cap A=A$ |
| Identity | $A\cup\emptyset=A$ | $A\cap U=A$ |
| Absorption | $A\cup(A\cap B)=A$ | $A\cap(A\cup B)=A$ |
| Complement | $A\cup A'=U$ | $A\cap A'=\emptyset$ |
| Distributive | $A\cap(B\cup C)=(A\cap B)\cup(A\cap C)$ | $A\cup(B\cap C)=(A\cup B)\cap(A\cup C)$ |

**De Morgan's laws** connect complement with the other two:

$$
(A\cup B)'=A'\cap B',\qquad (A\cap B)'=A'\cup B'.
$$

To see the first, note that "not ($x\in A$ or $x\in B$)" is logically the same as "$x\notin A$ and $x\notin B$". The word "and" flips to "or" when negated, which is why union becomes intersection.

Two more relations are useful: $A\setminus B=A\cap B'$, and $A\subseteq B$ is equivalent to each of $A\cup B=B$ and $A\cap B=A$.

## 3. Deriving the two-set counting rule

Let $A$ and $B$ be finite. Adding $n(A)$ and $n(B)$ counts every element of $A\cap B$ **twice**, once in each tally. Every other element in the union is counted exactly once. Subtracting $n(A\cap B)$ once repairs the double count:

$$
\boxed{\,n(A\cup B)=n(A)+n(B)-n(A\cap B)\,}
$$

Two immediate consequences follow. If the sets are disjoint, $n(A\cap B)=0$ and $n(A\cup B)=n(A)+n(B)$. And since $A$ splits into the part shared with $B$ and the part outside $B$,

$$
n(A\setminus B)=n(A)-n(A\cap B).
$$

The same logic extends to complements: $n(A')=n(U)-n(A)$, so the two parts $A$ and $A'$ account for the whole universe exactly once.

## 4. Worked example

In a year group of $60$ students, $35$ study mathematics, $25$ study physics, and $10$ study both.

- At least one subject: $n(M\cup P)=35+25-10=50$.
- Neither subject: $60-50=10$.
- Mathematics only: $n(M\setminus P)=35-10=25$.
- Physics only: $n(P\setminus M)=25-10=15$.

Sanity check: the four disjoint groups $25+15+10+10=60$, which is the whole year group.

<learning-block type="mistake" title="Adding without subtracting the overlap">

The commonest error is reporting $35+25=60$ students taking at least one subject here. That would leave no student taking neither, and it double-counts the ten who take both. Whenever a question says "both", "and" or gives an intersection, subtract it once from the sum. Equally common is taking a complement without checking the universe: $n(A')$ is $n(U)-n(A)$, not $60-n(A)$ unless $U=60$ is actually stated.

</learning-block>

## Try it yourself

**1.** Let $U=\{1,2,3,4,5,6\}$, $A=\{1,2,3\}$ and $B=\{3,4,5\}$. Find $A\cup B$, $A\cap B$, $A\setminus B$, $B\setminus A$, $A'$ and $B'$.

<details><summary>Show the reasoning</summary>

$A\cup B=\{1,2,3,4,5\}$; $A\cap B=\{3\}$; $A\setminus B=\{1,2\}$; $B\setminus A=\{4,5\}$; $A'=\{4,5,6\}$; $B'=\{1,2,6\}$. Note that $A\setminus B$ and $B\setminus A$ differ.
</details>

**2.** For the sets in question 1, verify both De Morgan laws.

<details><summary>Show the reasoning</summary>

$(A\cup B)'=\{6\}$ and $A'\cap B'=\{4,5,6\}\cap\{1,2,6\}=\{6\}$. Also $(A\cap B)'=\{1,2,4,5,6\}$ and $A'\cup B'=\{4,5,6\}\cup\{1,2,6\}=\{1,2,4,5,6\}$. Both identities hold.
</details>

**3.** If $n(A)=18$, $n(B)=23$ and $n(A\cup B)=35$, find $n(A\cap B)$.

<details><summary>Show the reasoning</summary>

Rearrange: $n(A\cap B)=n(A)+n(B)-n(A\cup B)=18+23-35=6$. This is fewer than either set, as an intersection must be.
</details>

## Remember

- Every operation is a membership test: "or" for union, "and" for intersection, "and not" for difference.
- $n(A\cup B)=n(A)+n(B)-n(A\cap B)$ corrects exactly one double count.
- $A\setminus B=A\cap B'$; order matters in a difference.
- De Morgan's laws swap union and intersection when a complement is taken.
- Fix the universal set $U$ before writing any complement.

The two-set rule is only the beginning. The next lesson draws regions to handle three sets at once, where the overlap of all three needs to be added back.
