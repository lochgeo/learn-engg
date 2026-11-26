## Real questions combine the tools

"From 6 men and 5 women, form a committee of 5 with at least 3 men, then choose a chairperson from the committee." No single formula from the earlier lessons solves this. You must select, split into cases, and then arrange a role — all in one problem. This lesson shows how to sequence those tools so that every outcome is counted exactly once.

## 1. Selection followed by arrangement

When a group is chosen and then its members receive distinct roles, use a combination for the selection and multiply by the permutations of the roles:

$$
\text{ways} = {}^nC_r \times r! = {}^nP_r.
$$

**Example.** Choose 4 people from 9 and assign them the posts of captain, vice-captain, secretary and treasurer.

$$
{}^9C_4\times4! = 126\times24 = 3024 = {}^9P_4.
$$

The equality is a useful check: assigning four distinct labels to a chosen group is exactly a permutation of four from nine. If only two of the four posts were distinct, the factor would be ${}^4P_2 = 12$ rather than $4!$, and the other two members would remain undifferentiated.

## 2. "At least" and "at most" — complementary counting

For a condition such as "at least one woman", count everything and subtract what fails the condition:

$$
\text{at least one woman} = \text{total selections} - \text{no women}.
$$

This is far shorter than adding the cases for one, two, three $\ldots$ women, and it avoids arithmetic slips in long sums.

**Example.** A committee of 4 is chosen from 6 men and 4 women. How many contain at least one woman?

$$
{}^{10}C_4 - {}^6C_4 = 210 - 15 = 195.
$$

**Sanity check.** The complementary case (all men) is small, so the answer should be close to the unrestricted total of 210; 195 is, with a difference of exactly 15.

## 3. Case splits

When a condition demands several allowed compositions, list them explicitly. The cases must be **mutually exclusive** (no outcome appears twice) and **exhaustive** (every valid outcome appears once). Then add the counts, multiplying within each case.

**Worked example.** From 6 men and 5 women, form a committee of 5 containing at least 3 men. Find the number of committees.

The allowed compositions are $(3\text{ men},2\text{ women})$, $(4,1)$ and $(5,0)$:

| Composition | Count |
| --- | --- |
| 3 men, 2 women | ${}^6C_3\times{}^5C_2 = 20\times10 = 200$ |
| 4 men, 1 woman | ${}^6C_4\times{}^5C_1 = 15\times5 = 75$ |
| 5 men, 0 women | ${}^6C_5\times{}^5C_0 = 6\times1 = 6$ |

Adding gives

$$
200 + 75 + 6 = 281 \text{ committees.}
$$

**Sanity check.** The unrestricted total is ${}^{11}C_5 = 462$. Our restricted count 281 is smaller, and the excluded cases (fewer than 3 men) should account for the remaining $462-281 = 181$: two men three women gives ${}^6C_2\times{}^5C_3 = 15\times10 = 150$, one man four women gives ${}^6C_1\times{}^5C_4 = 6\times5 = 30$, and zero men five women gives $1\times1 = 1$; $150+30+1 = 181$. The check closes exactly.

## 4. Distributing distinct objects

If $n$ distinct objects are placed into $k$ distinct boxes with no restriction, each object independently chooses a box:

$$
k^n \text{ distributions.}
$$

For "every box receives at least one object", use inclusion–exclusion: subtract distributions with an empty box, add back those with two empty boxes, and so on. For three boxes and five distinct objects:

$$
3^5 - \binom{3}{1}2^5 + \binom{3}{2}1^5 = 243 - 96 + 3 = 150.
$$

The alternating signs correct the over-subtraction: a distribution with two empty boxes was subtracted twice, so it is added back once.

<learning-block type="mistake" title="Overlapping cases counted twice">

A frequent error in case splits is to define cases such as "committee has at least 2 men" and "committee has at least 3 women". These overlap — a committee with 3 men and 3 women satisfies both — so adding the counts double-counts it. Define cases by an **exact** composition, such as exactly 2 men, exactly 3 men, and so on. If two cases can both describe the same outcome, they are not a valid partition.

</learning-block>

## 5. A working checklist

1. Decide what constitutes one outcome: a selection, an arrangement, or both.
2. Identify restricted stages and fill them first.
3. For "at least"/"at most", try the complement before listing cases.
4. When listing cases, use exact and disjoint compositions, then add.
5. Verify the result against an unrestricted total or by counting the complementary cases.

## Try it yourself

**A.** From 7 men and 4 women, choose a committee of 5 with at least 3 women. How many committees are possible?

<details><summary>Show the reasoning</summary>

Allowed compositions are 3 women 2 men and 4 women 1 man (5 women is impossible):

$${}^4C_3\times{}^7C_2 + {}^4C_4\times{}^7C_1 = 4\times21 + 1\times7 = 84 + 7 = 91.$$

</details>

**B.** How many arrangements of 4 distinct letters chosen from LEADING contain at least one vowel? (LEADING has vowels E, A, I.)

<details><summary>Show the reasoning</summary>

Count all ordered selections and subtract those using only consonants:

$${}^7P_4 - {}^4P_4 = (7\times6\times5\times4) - 24 = 840 - 24 = 816.$$

</details>

**C.** Five distinct prizes are given to 4 students so that every student gets at least one prize. How many distributions are possible?

<details><summary>Show the reasoning</summary>

Use inclusion–exclusion:

$$4^5 - \binom{4}{1}3^5 + \binom{4}{2}2^5 - \binom{4}{3}1^5 = 1024 - 972 + 192 - 4 = 240.$$

Each term corrects the over-counting of distributions with empty boxes.

</details>

## Remember

- Choose first, then assign roles: ${}^nC_r\times(\text{role arrangements})$.
- For "at least one", subtract the failing case from the total.
- Cases in a split must be exact, mutually exclusive and exhaustive.
- $k^n$ counts distributions of $n$ distinct objects into $k$ distinct boxes; use inclusion–exclusion when every box must be non-empty.
- Confirm a restricted count against the corresponding unrestricted total.

## Where this leads

You now have the complete toolkit: counting principles, permutations, combinations, restrictions and case splits. The next module, **Permutations and Combinations: practice & mastery check**, gives you a structured plan and ten questions to practise choosing the right tool before the timed JEE Main set.
