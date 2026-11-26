## When the order does not matter

A cricket coach must pick 11 players from a squad of 15. Once the team is chosen, the order in which the names were written down is irrelevant — the same eleven players form the same team. A count that ignores order is a **combination**. This lesson converts the permutations of the previous lesson into selections by dividing out the rearrangements that do not change the chosen group.

## 1. Definition and notation

A **combination** of $n$ distinct objects taken $r$ at a time is an unordered selection of $r$ objects from the $n$ available. We write

$$
{}^nC_r \quad\text{or}\quad \binom{n}{r},
$$

read as "n choose r". Two selections are the same combination if they contain exactly the same objects, regardless of the order in which they were picked.

## 2. Deriving the formula

From the previous lesson, the number of **ordered** arrangements of $r$ objects chosen from $n$ is

$$
{}^nP_r = \frac{n!}{(n-r)!}.
$$

Now take any one unordered selection of $r$ objects. Its members can be arranged among themselves in $r!$ different orders, and all of those orders correspond to the same selection. Therefore each selection has been counted $r!$ times in ${}^nP_r$, so

$$
{}^nC_r \times r! = {}^nP_r.
$$

Dividing gives the key relation

$$
\boxed{{}^nC_r = \frac{{}^nP_r}{r!} = \frac{n!}{r!\,(n-r)!}},\qquad 0\le r\le n.
$$

**When it fails:** the objects must be distinct and each may be chosen at most once. For repeated objects or selections with replacement, a different method is needed. The formula requires $r\le n$; at the boundary ${}^nC_0 = {}^nC_n = \frac{n!}{n!} = 1$, which makes sense: there is one way to choose nothing and one way to choose everything.

## 3. Two useful identities

**Symmetry.** Choosing $r$ objects to keep is exactly the same as choosing the remaining $n-r$ objects to leave out. Hence

$$
{}^nC_r = {}^nC_{n-r}.
$$

Algebra confirms it: ${}^nC_{n-r} = \dfrac{n!}{(n-r)!\,r!} = {}^nC_r$. This lets you replace a large lower index by a smaller one, for example ${}^{50}C_{48} = {}^{50}C_2 = 1225$.

**Pascal's identity.** Split selections of $r$ from $n+1$ objects according to whether a chosen particular object is included or not:

$$
{}^{n+1}C_r = {}^nC_{r-1} + {}^nC_r.
$$

Check with numbers: ${}^5C_2 = {}^4C_1 + {}^4C_2 = 4 + 6 = 10$.

## 4. Worked examples

**Example 1.** Evaluate ${}^{10}C_4$.

$$
{}^{10}C_4 = \frac{10!}{4!\,6!} = \frac{10\times9\times8\times7}{4\times3\times2\times1}
= \frac{5040}{24} = 210.
$$

**Sanity check.** The related permutation is ${}^{10}P_4 = 5040$, exactly $4! = 24$ times larger, as the derivation predicts: $210\times24 = 5040$.

**Example 2.** A committee of 5 is formed from 7 men and 5 women, with exactly 3 men and 2 women. How many committees are possible?

Choose the men **and** the women, so multiply two combinations:

$$
{}^7C_3\times{}^5C_2 = 35\times10 = 350.
$$

**Sanity check.** Both factors are greater than 1 and their product is less than the total number of committees of 5 from 12 people, which is ${}^{12}C_5 = 792$. A restricted count should be smaller than the unrestricted one, and $350 < 792$, consistent.

<learning-block type="mistake" title="Using a combination when the posts are different">

Suppose 3 people are chosen from 8 and then assigned the distinct posts of president, secretary and treasurer. Using ${}^8C_3 = 56$ counts each group once, but each group can fill the three posts in $3! = 6$ ways. The correct count is ${}^8C_3\times3! = 56\times6 = 336 = {}^8P_3$. Ask: "Once chosen, do the people receive different labels?" If yes, multiply by the number of arrangements of those labels.

</learning-block>

## 5. A reliable method

1. Decide whether order matters. If it does not, use combinations.
2. Split the selection into independent sub-choices (men and women, for instance) and multiply their combination counts.
3. Use ${}^nC_r = {}^nC_{n-r}$ to simplify large lower indices.
4. Check that a restricted answer is smaller than the corresponding unrestricted answer.

## Try it yourself

**A.** Evaluate ${}^9C_4$.

<details><summary>Show the reasoning</summary>

${}^9C_4 = \dfrac{9!}{4!\,5!} = \dfrac{9\times8\times7\times6}{4\times3\times2\times1} = \dfrac{3024}{24} = 126$.

</details>

**B.** From 5 men and 6 women, a group of 3 men and 2 women is selected. How many groups are possible?

<details><summary>Show the reasoning</summary>

${}^5C_3\times{}^6C_2 = 10\times15 = 150$ groups. The two sub-choices are stages of one selection, so multiply.

</details>

**C.** How many different 5-card hands can be dealt from a standard deck of 52 cards?

<details><summary>Show the reasoning</summary>

Order within a hand is irrelevant, so

$${}^{52}C_5 = \frac{52\times51\times50\times49\times48}{5!} = \frac{311\,875\,200}{120} = 2\,598\,960.$$

This is far smaller than the ordered count ${}^{52}P_5$, as it should be.

</details>

## Remember

- A combination is an **unordered** selection: ${}^nC_r = \dfrac{n!}{r!\,(n-r)!}$.
- ${}^nC_r = {}^nC_{n-r}$; use it to work with the smaller lower index.
- Pascal's identity ${}^nC_r + {}^nC_{r-1} = {}^{n+1}C_r$ splits cases by whether a particular object is included.
- If selected objects then receive distinct roles, multiply by the relevant factorial.
- Restricted selections must be checked against the unrestricted total.

## Where this leads

Combinations and permutations are the two building blocks, but real questions rarely hand them to you cleanly. The next lesson, **Restrictions and arrangements**, shows how to handle conditions such as "these two must sit together" or "these two must never be adjacent" using block, gap and complement methods.
