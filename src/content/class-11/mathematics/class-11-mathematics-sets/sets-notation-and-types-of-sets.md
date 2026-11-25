## A collection that knows its members

Ask someone to list "the good books in the library" and you will get an argument; ask for "the books with exactly 200 pages" and you will get a definite list. A **set** is a well-defined collection of distinct objects: for any candidate, the membership question has a clear yes-or-no answer. That one requirement turns a loose grouping into an object we can count, compare and combine.

Sets are named with capital letters and their members with small letters. If $x$ belongs to $A$ we write $x \in A$; if not, $x \notin A$. The collection with no members is the **empty set**, written $\emptyset$ or $\{\}$. A set with one member, such as $\{5\}$, is a **singleton**.

## 1. Two ways to describe a set

In **roster (tabular) form** we list the members inside braces: $A=\{2,4,6,8\}$. Order does not matter, and a repeated entry is ignored, so $\{2,4,6,8\}=\{8,6,4,2,2\}$.

In **set-builder form** we state the rule for membership:

$$
B=\{x\in\mathbb{Z}: x \text{ is even and } -3\le x\le 7\}.
$$

Read the colon as "such that". The set-builder form is essential when listing is impossible, as with $\{x\in\mathbb{R}: 0<x<1\}$.

The standard number sets recur throughout this book: $\mathbb{N}$ (natural numbers), $\mathbb{Z}$ (integers), $\mathbb{Q}$ (rational numbers) and $\mathbb{R}$ (real numbers). We write $\mathbb{Z}^+$ for positive integers. Conventions about whether $0$ belongs to $\mathbb{N}$ vary, so a careful question states which it means.

## 2. Membership, equality and subsets

The symbol $\in$ relates an **element** to a **set**. The symbol $\subseteq$ relates one **set** to another:

$$
A\subseteq B \quad\text{means}\quad \text{every element of }A\text{ is also an element of }B.
$$

Two sets are **equal**, $A=B$, exactly when $A\subseteq B$ and $B\subseteq A$; that is, they contain the same elements. If $A\subseteq B$ but $A\ne B$, we call $A$ a **proper subset** and write $A\subset B$.

Two useful facts follow straight from the definition. The empty set is a subset of every set, $\emptyset\subseteq A$ for all $A$, because there is no element of $\emptyset$ that could fail the test. Every set is a subset of itself, $A\subseteq A$. Sets with the same number of elements are called **equivalent**; equal sets are always equivalent, but equivalent sets need not be equal, since $\{1,2\}$ and $\{3,4\}$ have the same size and different members.

When every set under discussion is drawn from one fixed collection, that collection is the **universal set** $U$. It changes from problem to problem and must be stated before a complement is taken.

## 3. Where the count $2^n$ comes from

For a finite set $A$ with $n$ elements, write $n(A)=n$ for its **cardinality**. How many subsets does it have? Build a subset by deciding, for each of the $n$ elements, whether it goes in or stays out. Each element offers two independent choices, so

$$
\text{number of subsets} = \underbrace{2\times2\times\cdots\times2}_{n\ \text{times}} = 2^n.
$$

This also gives two variants we use constantly:

$$
\text{proper subsets}=2^n-1,\qquad \text{non-empty proper subsets}=2^n-2,
$$

because we remove the whole set, then the empty set as well. A second check comes from the binomial theorem: the number of subsets of size $k$ is $\binom{n}{k}$, and summing over all $k$ gives $\sum_{k=0}^{n}\binom{n}{k}=2^n$.

## 4. Worked example

Let $S$ be a committee of six people.

- Subsets: $2^6=64$.
- Proper subsets: $2^6-1=63$.
- Subsets containing a particular person: fix that person in, then choose freely from the other five, giving $2^5=32$.
- Subsets of size two: $\binom{6}{2}=15$.

Sanity check: the counts by size add to $\binom{6}{0}+\binom{6}{1}+\cdots+\binom{6}{6}=1+6+15+20+15+6+1=64$, matching $2^6$.

<learning-block type="mistake" title="Elements are not one-element sets">

Writing $2\in\{1,2,3\}$ is correct, but $\{2\}\in\{1,2,3\}$ is false: the set $\{2\}$ is not listed as a member. Write $\{2\}\subseteq\{1,2,3\}$ instead. The trap cuts both ways: in $\{\{1\},\{2\}\}$ the members are sets, so $\{2\}\in\{\{1\},\{2\}\}$ is true while $2\in\{\{1\},\{2\}\}$ is false. Read the braces one level at a time.

</learning-block>

## Try it yourself

**1.** Write $\{x\in\mathbb{Z}: x^2<5\}$ in roster form.

<details><summary>Show the reasoning</summary>

$x^2<5$ means $|x|\le 2$ for integers, so the set is $\{-2,-1,0,1,2\}$. The condition is well-defined, so this is genuinely a set.
</details>

**2.** How many subsets, proper subsets and non-empty proper subsets does $\{a,b,c,d\}$ have?

<details><summary>Show the reasoning</summary>

Here $n=4$. Subsets: $2^4=16$; proper subsets: $15$; non-empty proper subsets: $14$. The last count is $2^4-2$, removing both $\{a,b,c,d\}$ and $\emptyset$.
</details>

**3.** Is $\{\emptyset\}$ the same set as $\emptyset$?

<details><summary>Show the reasoning</summary>

No. $\emptyset$ has no elements, while $\{\emptyset\}$ has exactly one element, namely the empty set. Thus $\emptyset\in\{\emptyset\}$ and $\emptyset\subseteq\{\emptyset\}$, but $\{\emptyset\}\ne\emptyset$.
</details>

## Remember

- A set is well-defined: membership never depends on opinion.
- Use $\in$ for an element and $\subseteq$ for a subset; the two are not interchangeable.
- $A=B$ means $A\subseteq B$ and $B\subseteq A$.
- A finite set with $n$ elements has $2^n$ subsets and $2^n-1$ proper subsets.
- Always name the universal set $U$ before speaking of a complement.

Next we put several sets together and derive the counting rule that stops us counting the same element twice.
