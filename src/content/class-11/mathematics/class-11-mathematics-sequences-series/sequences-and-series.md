## A list, and the number it adds up to

A savings plan that adds a little more each month, the number of grains on successive squares of a chessboard, the bounce heights of a ball: each is an **ordered list** of numbers, and each raises the same two questions. What is the number at position $n$, and what do the first $n$ numbers add up to? The first question belongs to a **sequence**; the second belongs to the **series** built from it. This chapter answers both questions for the patterns that occur most often — and the two answers turn out to be linked by one short relation.

## 1. What a sequence is

A sequence is a function whose domain is the positive integers $1,2,3,\ldots$ and whose values are numbers. We write its values in order,

$$
a_1,\ a_2,\ a_3,\ \ldots,\ a_n,\ \ldots
$$

and call $a_n$ the **general term** or $n$th term. The sequence itself is denoted $\{a_n\}$ or $(a_n)$. A sequence is **finite** if it stops after a fixed number of terms and **infinite** if it continues without end.

The order matters: $1,2,3$ and $3,2,1$ are different sequences, even though they contain the same numbers. A rule, rather than a short list, normally defines the sequence:

- $a_n = 2n$ gives $2,4,6,8,\ldots$;
- $a_n = \dfrac{1}{n}$ gives $1,\dfrac12,\dfrac13,\dfrac14,\ldots$;
- $a_n = (-1)^n$ gives $-1,1,-1,1,\ldots$.

The same sequence can have several rules; we usually choose the simplest one that fits all the listed terms, and we check it against every given term.

## 2. What a series is, and sigma notation

Adding the terms of a sequence produces a **series**:

$$
a_1+a_2+a_3+\cdots+a_n+\cdots
$$

The sum of the first $n$ terms is the **partial sum** $S_n$:

$$
S_n=a_1+a_2+\cdots+a_n=\sum_{k=1}^{n}a_k.
$$

The symbol $\sum$ is a Greek capital sigma; the index $k$ runs from the lower limit $1$ to the upper limit $n$. The letter $k$ is a dummy index — replacing it by any other letter changes nothing. Two small rules follow from the definition and are used constantly:

$$
\sum_{k=1}^{n}(a_k+b_k)=\sum_{k=1}^{n}a_k+\sum_{k=1}^{n}b_k,
\qquad
\sum_{k=1}^{n}c\,a_k=c\sum_{k=1}^{n}a_k
$$

for a constant $c$. A series is **finite** if it has finitely many terms; an infinite series needs a careful definition of what "the sum" means, a point we return to with geometric progressions.

## 3. The key relation between a term and a partial sum

Suppose we know the partial sum $S_n$ but not the individual terms. Write the sums for $n$ and for $n-1$:

$$
S_n=a_1+a_2+\cdots+a_{n-1}+a_n,\qquad
S_{n-1}=a_1+a_2+\cdots+a_{n-1}.
$$

Everything cancels except the last term, so for $n\ge 2$,

$$
a_n=S_n-S_{n-1}.
$$

For the first term there is no previous partial sum to subtract, so $a_1=S_1$. Taking $S_0=0$ makes the same formula work at $n=1$ as well. This relation is the bridge between the two halves of the chapter: a formula for a sum immediately yields a formula for the general term, and later we will run it in the other direction to add up sequences whose general term we know.

## 4. A worked example: recovering the general term

A sequence has partial sums $S_n=n^2+2n$. Find $a_1$, $a_n$ and the first four terms, then check the result.

**Step 1 — first term.** $a_1=S_1=1+2=3$.

**Step 2 — general term.** For $n\ge 2$,

$$
a_n=S_n-S_{n-1}=(n^2+2n)-\big[(n-1)^2+2(n-1)\big].
$$

Expand the bracket: $(n-1)^2+2(n-1)=n^2-2n+1+2n-2=n^2-1$. Hence

$$
a_n=(n^2+2n)-(n^2-1)=2n+1.
$$

**Step 3 — list and check.** The first four terms are $3,5,7,9$. Their sum is $3+5+7+9=24$, while $S_4=16+8=24$. They agree. Notice that the formula $2n+1$ also gives $a_1=3$, so no exception is needed.

<learning-block type="mistake" title="Mixing up a term with a sum">

The commonest error is treating $S_n$ as the $n$th term. If $S_n=n^2+2n$, writing $a_n=n^2+2n$ would give $a_1=3$ but $a_2=8$, while the true second term is $S_2-S_1=8-3=5$. Always subtract consecutive partial sums. A second slip is to apply $a_n=S_n-S_{n-1}$ at $n=1$ without defining $S_0$: set $S_0=0$, or handle $a_1$ separately.

</learning-block>

## 5. Where this leads

Once we can move between $a_n$ and $S_n$, two tasks remain: recognise a pattern in $a_n$, and find a closed formula for $S_n$. The next two lessons do exactly that for the two great families of sequences — the **arithmetic progression**, where terms change by a fixed difference, and the **geometric progression**, where they change by a fixed ratio.

## Try it yourself

**A.** Write the first four terms of the sequence defined by $a_n=\dfrac{n}{n+1}$.

<details><summary>Show the reasoning</summary>

Substitute $n=1,2,3,4$: $\dfrac12,\ \dfrac23,\ \dfrac34,\ \dfrac45$. The general term states the rule; individual terms come from substitution.

</details>

**B.** Evaluate $\displaystyle\sum_{k=1}^{5}(2k-1)$ by writing out the terms.

<details><summary>Show the reasoning</summary>

The terms are $1,3,5,7,9$, and their sum is $25$. (This illustrates the identity $\sum_{k=1}^{n}(2k-1)=n^2$, which we derive later.)

</details>

**C.** A sequence has $S_n=3n^2-n$. Find $a_n$ and verify that $a_1+a_2=S_2$.

<details><summary>Show the reasoning</summary>

$a_1=S_1=3-1=2$. For $n\ge2$,

$$a_n=(3n^2-n)-\big[3(n-1)^2-(n-1)\big]=3n^2-n-(3n^2-7n+4)=6n-4.$$

Thus $a_1=2$, $a_2=8$. Then $S_2=12-2=10$ and $a_1+a_2=2+8=10$, as required. The formula $6n-4$ also works at $n=1$.

</details>

## Remember

- A sequence is an ordered list with a general term $a_n$; a series is the sum of its terms.
- $\displaystyle S_n=\sum_{k=1}^{n}a_k$ is the partial sum of the first $n$ terms.
- $\displaystyle a_n=S_n-S_{n-1}$ for $n\ge2$, with $a_1=S_1$ (or $S_0=0$).
- Check a derived general term against the first few listed terms and against $S_n$.
- Next we use this relation to build the sum formulas for arithmetic and geometric progressions.
