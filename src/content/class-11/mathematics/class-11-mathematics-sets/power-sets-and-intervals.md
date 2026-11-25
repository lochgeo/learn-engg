## From members to collections of collections

The set $\{1,2\}$ has two members. But it also has four subsets: $\emptyset$, $\{1\}$, $\{2\}$ and $\{1,2\}$. Those four subsets can themselves be gathered into a new set, called the **power set**. This is a genuine change of level: the members of a power set are sets, not numbers. The same shift appears when we move from discrete lists to intervals, where a "set" contains infinitely many real numbers described by inequalities.

## 1. The power set

For any set $A$, the **power set** $\mathcal{P}(A)$ is the set of all subsets of $A$:

$$
\mathcal{P}(A)=\{X: X\subseteq A\}.
$$

If $n(A)=n$ is finite, the argument from the first lesson gives

$$
n\big(\mathcal{P}(A)\big)=2^n.
$$

For $A=\{a,b\}$ we get $\mathcal{P}(A)=\{\emptyset,\{a\},\{b\},\{a,b\}\}$, so $n(\mathcal{P}(A))=4=2^2$. Applying the operation twice,

$$
n\big(\mathcal{P}(\mathcal{P}(A))\big)=2^{2^n}.
$$

With $n=3$ this is $2^8=256$, a number large enough to show why we count rather than list.

A refined count is often needed. To find how many subsets of an $n$-element set contain a fixed element $p$ but exclude another fixed element $q$, keep $p$ in, keep $q$ out, and decide freely about the remaining $n-2$ elements: that gives $2^{n-2}$ subsets. If only $p$ is fixed in, the answer is $2^{n-1}$, and exactly half of all subsets contain $p$.

## 2. Intervals as sets of real numbers

An interval is a set of real numbers described by bounds. Square brackets include the endpoint; round brackets exclude it.

| Notation | Meaning | Type |
| --- | --- | --- |
| $[a,b]$ | $a\le x\le b$ | closed |
| $(a,b)$ | $a<x<b$ | open |
| $[a,b)$ | $a\le x<b$ | closed on the left |
| $(a,b]$ | $a<x\le b$ | closed on the right |
| $[a,\infty)$ | $x\ge a$ | unbounded |
| $(-\infty,b)$ | $x<b$ | unbounded |

The symbol $\infty$ is never a real number, so it always takes a round bracket. The whole real line is $(-\infty,\infty)=\mathbb{R}$.

Set operations on intervals follow the same definitions as before, with inequalities replacing lists:

$$
[1,3]\cup[2,4]=[1,4],\qquad [1,3]\cap[2,4]=[2,3],\qquad [1,3]\cap[4,5]=\emptyset.
$$

Two intervals that merely touch at one included point do overlap there. Thus $[1,2]\cup(2,3]=[1,3]$, because $2$ belongs to the first interval and every number above $2$ up to $3$ belongs to the second. By contrast $(1,2)\cup(2,3)$ is *not* a single interval, because the point $2$ is missing. Complements are taken in $\mathbb{R}$ unless another universe is stated:

$$
[a,b]'=(-\infty,a)\cup(b,\infty).
$$

Intervals such as $(1,2)$ contain infinitely many real numbers, so the formula $2^n$ does not apply to them; it is a statement about **finite** sets. This chapter uses cardinality only for finite collections.

## 3. Worked example

Let $A=\{1,2,3,4\}$ and take the universe for intervals to be $\mathbb{R}$.

- $\mathcal{P}(A)$ has $2^4=16$ members.
- Subsets of $A$ containing $1$: $2^3=8$.
- Subsets containing $1$ but not $2$: $2^2=4$.
- Subsets of even size: $\binom{4}{0}+\binom{4}{2}+\binom{4}{4}=1+6+1=8$.
- $[0,4]\cap(2,6]=(2,4]$, since the left endpoint $2$ is excluded by the second interval.
- Complement of $[1,3]$ in $\mathbb{R}$: $(-\infty,1)\cup(3,\infty)$.

Sanity check: even-sized and odd-sized subsets must split the $16$ subsets equally here, and $\binom{4}{1}+\binom{4}{3}=4+4=8$ confirms it.

<learning-block type="mistake" title="Endpoints and levels of membership">

Two errors dominate this topic. First, treating $(1,2)$ as if it contained $1$ and $2$: the round bracket excludes them, so $(1,2)\cap[2,3]=\emptyset$, not $\{2\}$. Second, writing $1\in\mathcal{P}(A)$ for $A=\{1,2,3,4\}$: the number $1$ is not a subset. The correct statements are $1\in A$, $\{1\}\in\mathcal{P}(A)$ and $\{1\}\subseteq A$. A power set's members are always themselves sets, including $\emptyset$.

</learning-block>

## Try it yourself

**1.** A finite set $A$ satisfies $n(\mathcal{P}(A))=64$. Find $n(A)$ and $n(\mathcal{P}(\mathcal{P}(A)))$.

<details><summary>Show the reasoning</summary>

$2^n=64=2^6$, so $n(A)=6$. Then $n(\mathcal{P}(\mathcal{P}(A)))=2^{64}$, an enormous integer — which is why we leave it as a power rather than evaluating it.
</details>

**2.** How many subsets of $\{1,2,3,4,5\}$ contain $3$ but not $4$?

<details><summary>Show the reasoning</summary>

Fix $3$ in and $4$ out. The remaining elements $\{1,2,5\}$ are free, giving $2^3=8$ subsets.
</details>

**3.** Find $[1,5]\cup[7,9]$, $(-2,3]\cap[0,4)$ and the complement of $(1,4]$ in $\mathbb{R}$.

<details><summary>Show the reasoning</summary>

$[1,5]\cup[7,9]$ is two disjoint intervals and cannot be merged. $(-2,3]\cap[0,4)=[0,3]$: the lower bound is $0$ (included by both) and the upper bound is $3$ (included by the first, and $3<4$ so included by the second). The complement of $(1,4]$ is $(-\infty,1]\cup(4,\infty)$, with $1$ included but $4$ excluded.
</details>

## Remember

- $\mathcal{P}(A)$ contains subsets as its elements, including $\emptyset$ and $A$ itself.
- For finite $A$, $n(\mathcal{P}(A))=2^{n(A)}$; fixing one element in halves the count.
- Square brackets include an endpoint; round brackets exclude it; $\infty$ always takes a round bracket.
- Intersections take the tighter bound, unions may or may not merge into one interval.
- Only finite sets have the count $2^n$; intervals of real numbers are infinite sets.

You now have the whole toolkit. The practice module next trains you to choose the right tool from a question's wording before you start calculating.
