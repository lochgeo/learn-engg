## When order changes the answer

Three friends — Amara, Ben and Chloe — are chosen to fill the posts of president, secretary and treasurer. Assigning Amara as president and Ben as secretary is a different outcome from Ben as president and Amara as secretary, even though the same three people are involved. A count in which **order matters** is called a permutation. This lesson turns the counting principle of the previous module into a reusable formula.

## 1. Definition and notation

A **permutation** of $n$ distinct objects taken $r$ at a time is an ordered arrangement of $r$ objects selected from the $n$ available. We write it as

$$
{}^nP_r \quad\text{or}\quad P(n,r).
$$

The upper index is the pool size, the lower index is how many positions we fill. Order matters: rearranging the same objects creates a new permutation.

## 2. Deriving the formula

Fill $r$ positions one at a time from $n$ distinct objects:

- position 1: $n$ choices;
- position 2: $n-1$ choices (one object is used);
- position 3: $n-2$ choices;
- $\cdots$
- position $r$: $n-r+1$ choices.

By the multiplication principle,

$$
{}^nP_r = n(n-1)(n-2)\cdots(n-r+1).
$$

This product is awkward to write for large $r$, so multiply and divide by $(n-r)!$:

$$
n(n-1)\cdots(n-r+1)\times\frac{(n-r)!}{(n-r)!}
= \frac{n!}{(n-r)!}.
$$

Hence the key relation

$$
\boxed{{}^nP_r = \frac{n!}{(n-r)!}},\qquad 0\le r\le n.
$$

**When it fails:** the formula assumes the $n$ objects are distinct and that no object may be used twice. If repetition is allowed, the answer is $n^r$ instead, because every position always has $n$ choices. If some objects are identical, we must divide out their internal orderings (see section 4). The formula also requires $r\le n$; for $r=0$ it gives ${}^nP_0 = n!/n! = 1$, the single empty arrangement.

## 3. A worked example

**Example.** In how many ways can 3 students be arranged in a line from a class of 8?

**Solution.** Order matters (a line has a first, second and third place), and no student repeats, so use permutations:

$$
{}^8P_3 = \frac{8!}{(8-3)!} = \frac{8!}{5!}
= \frac{8\times7\times6\times5!}{5!} = 8\times7\times6 = 336.
$$

**Sanity check.** The product form $8\times7\times6$ matches the stage-by-stage count from the first stage of the counting principle. Also ${}^8P_3 < 8! = 40320$, since arranging only 3 of the 8 gives far fewer orders than arranging all 8.

## 4. When objects are repeated

If a collection has $n$ objects with $p$ alike of one kind, $q$ alike of a second kind, and the rest distinct, then

$$
\text{number of arrangements} = \frac{n!}{p!\,q!}.
$$

Each set of identical objects could be shuffled among itself in $p!$ ways without changing the visible arrangement, so those duplicates must be divided out.

**Example.** How many distinct arrangements are there of the letters of the word LEVEL?

The word has 5 letters: L appears twice, E appears twice and V once. Therefore

$$
\frac{5!}{2!\,2!} = \frac{120}{4} = 30.
$$

**Sanity check.** If all 5 letters were different there would be $5! = 120$ orders. Identifying two pairs of letters removes a factor of $2\times2 = 4$, leaving 30 — a plausible reduction.

<learning-block type="mistake" title="Using nPr when objects repeat">

Applying ${}^nP_r = n!/(n-r)!$ to the letters of LEVEL would treat the two L's and two E's as different, giving $5! = 120$. The word has only 30 distinct arrangements. Always ask: "Are the objects genuinely distinguishable?" If not, divide by the factorials of the repeated counts.

</learning-block>

## 5. A quick decision test

1. Does the problem care about position or order? If yes, you are in permutation territory.
2. Are objects chosen without replacement? If yes, use ${}^nP_r = n!/(n-r)!$; if repetition is allowed, use $n^r$.
3. Are some objects identical? Divide by the factorial of each repeated count.
4. Compute and check magnitude — a permutation of a subset should be smaller than $n!$.

## Try it yourself

**A.** Evaluate ${}^9P_4$.

<details><summary>Show the reasoning</summary>

${}^9P_4 = \dfrac{9!}{5!} = 9\times8\times7\times6 = 3024$.

</details>

**B.** How many different arrangements are there of the letters of the word THREE?

<details><summary>Show the reasoning</summary>

THREE has 5 letters, with E repeated twice and T, H, R distinct. The number of distinct arrangements is

$$
\frac{5!}{2!} = \frac{120}{2} = 60.
$$

If all five letters were different there would be $120$ orders; identifying the two E's halves that count, giving 60.

</details>

**C.** How many ways can 6 different books be arranged on a shelf if a particular book must be first?

<details><summary>Show the reasoning</summary>

Fix the special book in the first position (1 way), then arrange the remaining 5 books: $5! = 120$ ways.

</details>

## Remember

- A permutation is an **ordered** arrangement; use it when positions or roles differ.
- ${}^nP_r = \dfrac{n!}{(n-r)!}$ for distinct objects chosen without repetition, with $0\le r\le n$.
- If repetition is allowed, each position has $n$ choices, giving $n^r$.
- For identical objects, divide by the factorial of each repeated count: $\dfrac{n!}{p!\,q!}$.
- Always sanity-check against the unrestricted count $n!$.

## Where this leads

Permutations count arrangements where swapping objects creates something new. But when you only need to **select** a group — a committee, a hand of cards, a set of topics — the order of selection is irrelevant. The next lesson, **Combinations**, shows how to remove the redundant orderings by dividing ${}^nP_r$ by $r!$.
