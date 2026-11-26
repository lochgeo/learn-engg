## JEE Main sprint: how to use this set

This is a **50-minute, no-notes** paper for after you complete the chapter lessons. Spend about 15 minutes on Section A, 15 on Section B, 10 on Section C and 10 on Section D. Mark any question that is still open after 90 seconds and move on. The goal is not just an answer: before writing a formula, decide whether order matters and whether you are multiplying stages or adding cases.

## Conditions and formula sheet

| Situation | Start with | Check before using it |
| --- | --- | --- |
| Stages of one task ("and") | Multiply the counts | Are later stages reduced by earlier choices? |
| Exclusive alternatives ("or") | Add the counts | Can an outcome belong to both cases? |
| Ordered selection | ${}^nP_r = \dfrac{n!}{(n-r)!}$ | Objects distinct, no repetition, $r\le n$ |
| Unordered selection | ${}^nC_r = \dfrac{n!}{r!\,(n-r)!}$ | Does swapping members create nothing new? |
| Repeated identical objects | $\dfrac{n!}{p!\,q!\cdots}$ | Divide by each repeated factorial |
| Symmetry and Pascal | ${}^nC_r = {}^nC_{n-r}$; ${}^{n+1}C_r = {}^nC_{r-1}+{}^nC_r$ | Use symmetry to shrink a large lower index |
| Objects adjacent | Block method | Multiply by arrangements inside the block |
| Objects never adjacent | Complement or gap method | Total minus "together", or place into gaps |
| Circular seating | $(n-1)!$ | Halve only if reflections are the same |
| "At least one" | Total minus the failing case | Is the complement genuinely exclusive? |
| Distinct objects into boxes | $k^n$; inclusion–exclusion if none empty | Are boxes and objects both distinguishable? |

<learning-block type="mistake" title="The fastest sanity checks">

A combination answer must be no larger than the matching permutation answer, a restricted count must be no larger than the unrestricted total, and ${}^nC_r$ must equal ${}^nC_{n-r}$. If any of these fail, revisit the setup before moving on.

</learning-block>

## Section A — 10 rapid MCQs

### 1. Evaluate ${}^7P_3$

- A. $210$
- B. $35$
- C. $840$
- D. $5040$

<details><summary>Answer</summary>

**A.** ${}^7P_3 = \dfrac{7!}{4!} = 7\times6\times5 = 210$. Option B is the corresponding combination ${}^7C_3$; option D is $7!$.

</details>

### 2. Evaluate ${}^7C_3$

- A. $210$
- B. $35$
- C. $21$
- D. $5040$

<details><summary>Answer</summary>

**B.** ${}^7C_3 = \dfrac{7\times6\times5}{3!} = \dfrac{210}{6} = 35$. This is ${}^7P_3$ divided by $3!$, because the three chosen members have no internal order.

</details>

### 3. Arrangements of CHITRA

The letters of CHITRA are all distinct. How many arrangements are there?

- A. $120$
- B. $360$
- C. $720$
- D. $1440$

<details><summary>Answer</summary>

**C.** There are 6 distinct letters, so the count is $6! = 720$.

</details>

### 4. Three-digit numbers

How many 3-digit numbers can be formed from the digits $1,2,3,4,5$ without repetition?

- A. $60$
- B. $125$
- C. $27$
- D. $120$

<details><summary>Answer</summary>

**A.** Order matters and no digit repeats: ${}^5P_3 = 5\times4\times3 = 60$. Option B would allow repetition, $5^3$.

</details>

### 5. An identity

Which identity is true for all $0\le r\le n$?

- A. ${}^nP_0 = 0$
- B. ${}^nC_r = {}^nC_{n-r}$
- C. ${}^nC_n = n$
- D. ${}^nP_r = {}^nC_r$

<details><summary>Answer</summary>

**B.** Choosing $r$ objects to keep is the same as choosing the $n-r$ objects to leave out. The others fail at simple cases: ${}^nP_0 = 1$, ${}^nC_n = 1$, and ${}^nP_r = r!\,{}^nC_r$.

</details>

### 6. Around a table

How many ways can 5 distinct people sit around a round table?

- A. $120$
- B. $60$
- C. $24$
- D. $25$

<details><summary>Answer</summary>

**C.** Rotations are identical, so fix one person: $(5-1)! = 4! = 24$. Option A is the linear count $5!$.

</details>

### 7. A pair together

Six people sit in a row and two particular people must sit together. How many arrangements are possible?

- A. $120$
- B. $240$
- C. $480$
- D. $720$

<details><summary>Answer</summary>

**B.** Tie the pair into a block. The block plus 4 others give $5! = 120$ orders, and the block has $2! = 2$ internal orders: $120\times2 = 240$. Option C is the count with the pair kept apart.

</details>

### 8. Diagonals

The number of diagonals of a hexagon is:

- A. $6$
- B. $9$
- C. $12$
- D. $15$

<details><summary>Answer</summary>

**B.** Each of the 6 vertices has $6-3 = 3$ diagonals, and each diagonal is counted twice: $\dfrac{6\times3}{2} = 9$.

</details>

### 9. A committee

How many committees of 4 can be chosen from 7 people?

- A. $35$
- B. $210$
- C. $840$
- D. $28$

<details><summary>Answer</summary>

**A.** Only membership matters: ${}^7C_4 = \dfrac{7!}{4!\,3!} = 35$. By symmetry this equals ${}^7C_3$.

</details>

### 10. Repeated letters

How many distinct arrangements are there of the letters of LEVEL?

- A. $120$
- B. $60$
- C. $30$
- D. $24$

<details><summary>Answer</summary>

**C.** There are 5 letters, with L repeated twice and E repeated twice:

$$\frac{5!}{2!\,2!} = \frac{120}{4} = 30.$$

</details>

## Section B — 5 numerical-value questions

### 11. A ratio of counts

Evaluate $\dfrac{{}^9P_4}{{}^9C_4}$.

<details><summary>Answer</summary>

${}^nP_r = r!\,{}^nC_r$, so the ratio is $4! = \mathbf{24}$. Directly, ${}^9P_4 = 3024$ and ${}^9C_4 = 126$, and $3024\div126 = 24$.

</details>

### 12. At least one vowel

How many 4-letter arrangements with distinct letters can be made from the letters of LEADING that contain at least one vowel? (The vowels are E, A, I.)

<details><summary>Answer</summary>

Count all ordered selections and subtract those made only from the 4 consonants L, D, N, G:

$${}^7P_4 - {}^4P_4 = 840 - 24 = \mathbf{816}.$$

</details>

### 13. A restricted committee

From 6 men and 5 women, a committee of 5 is formed with at least 3 men. How many committees are possible?

<details><summary>Answer</summary>

Split into exact compositions:

$${}^6C_3{}^5C_2 + {}^6C_4{}^5C_1 + {}^6C_5{}^5C_0 = 20\times10 + 15\times5 + 6\times1 = 200+75+6 = \mathbf{281}.$$

</details>

### 14. Non-adjacent letters

How many arrangements of the letters of ARRANGE have the two A's not adjacent?

<details><summary>Answer</summary>

The unrestricted count for 7 letters with A twice and R twice is $\dfrac{7!}{2!\,2!} = 1260$. With the two A's tied together, treat AA as one object alongside R, R, N, G, E: $\dfrac{6!}{2!} = 360$ arrangements, and the identical A's give no internal ordering. Hence the number with the A's apart is

$$1260 - 360 = \mathbf{900}.$$

</details>

### 15. Filling every box

Five distinct books are given to 3 distinct students, with each student receiving at least one book. How many distributions are possible?

<details><summary>Answer</summary>

By inclusion–exclusion:

$$3^5 - \binom{3}{1}2^5 + \binom{3}{2}1^5 = 243 - 96 + 3 = \mathbf{150}.$$

</details>

## Section C — 3 assertion–reason questions

For each, choose: **A** — both assertion and reason are true and the reason correctly explains the assertion; **B** — both are true but the reason is not the correct explanation; **C** — assertion true, reason false; **D** — assertion false, reason true.

### 16. Deriving ${}^nP_r$

**Assertion:** The number of permutations of $n$ distinct objects taken $r$ at a time is ${}^nP_r = \dfrac{n!}{(n-r)!}$.

**Reason:** The first position can be filled in $n$ ways, the second in $n-1$ ways, and so on until $r$ positions are filled.

<details><summary>Answer</summary>

**A.** Multiplying $n(n-1)\cdots(n-r+1)$ and then multiplying and dividing by $(n-r)!$ gives exactly $\dfrac{n!}{(n-r)!}$. The reason is the derivation of the assertion.

</details>

### 17. Symmetry

**Assertion:** ${}^nC_r = {}^nC_{n-r}$ for $0\le r\le n$.

**Reason:** Choosing $r$ objects to include is equivalent to choosing the $n-r$ objects to leave out; the two choices are in one-to-one correspondence.

<details><summary>Answer</summary>

**A.** The correspondence pairs each selection with its complement, so the two counts are equal. Algebraically, ${}^nC_{n-r} = \dfrac{n!}{(n-r)!\,r!} = {}^nC_r$.

</details>

### 18. Circular arrangements

**Assertion:** The number of circular arrangements of $n$ distinct objects is $n!$.

**Reason:** Rotating a circular arrangement does not produce a new arrangement, so rotations of the same linear order are equivalent.

<details><summary>Answer</summary>

**D.** The reason is true but the assertion is false. Fixing one object removes the rotational freedom, leaving $(n-1)!$ arrangements, not $n!$.

</details>

## Section D — 2 matching or multi-statement questions

### 19. Match the situation to the count

Match each item in Column I with one count in Column II.

| Column I | Column II |
| --- | --- |
| (i) Arrange 4 distinct books in a row | (p) $35$ |
| (ii) Choose 3 of 7 students for a committee | (q) $24$ |
| (iii) Seat 6 distinct people around a round table | (r) $60$ |
| (iv) Form 3-digit numbers from 5 distinct digits without repetition | (s) $6$ |
|  | (t) $120$ |

<details><summary>Answer</summary>

(i) $\to$ (q): $4! = 24$.
(ii) $\to$ (p): ${}^7C_3 = 35$.
(iii) $\to$ (t): $(6-1)! = 5! = 120$.
(iv) $\to$ (r): ${}^5P_3 = 5\times4\times3 = 60$.

Option (s), $6$, is unused; it is $3!$, a tempting but wrong answer for (i) and (iv).

</details>

### 20. How many statements are correct?

(i) $0! = 1$.
(ii) ${}^nC_r = {}^nC_{n-r}$ for $0\le r\le n$.
(iii) ${}^7P_3 = {}^7C_3\times3!$.
(iv) The number of circular arrangements of 6 distinct objects is $6!$.

- A. One
- B. Two
- C. Three
- D. Four

<details><summary>Answer</summary>

**C.** Statements (i), (ii) and (iii) are correct: $0! = 1$ by convention; combinations are symmetric; and ${}^7C_3\times3! = 35\times6 = 210 = {}^7P_3$. Statement (iv) is false — circular arrangements of 6 distinct objects number $(6-1)! = 120$, not $720$. So exactly three statements are correct.

</details>

## Review by error, not by score

| If you missed… | Revisit | Then retry |
| --- | --- | --- |
| 1–2, 5, 9, 16–17 or 20(ii) | Permutations and combinations | Write both formulas and state which one order demands. |
| 3, 10 or 14 | Repeated objects | Divide by the factorial of every repeated count. |
| 6, 18 or 20(iv) | Circular arrangements | Fix one object and count $(n-1)!$. |
| 7 or 4 | Block method and restricted first stages | Multiply by internal orders; fill constrained positions first. |
| 11–13, 15 or 20(iii) | Mixed counting | Use complements, exact case splits and inclusion–exclusion. |
| 8 | Geometry counting | Divide the vertex-by-vertex count by two. |

<learning-block type="recap" title="What to carry forward">

Aim for at least 16 correct out of 20 with a written reason for each tool choice. A question you answer correctly but cannot justify is a revision target, not a mastered topic. These same counting tools reappear in the Binomial Theorem and underpin the probability chapter later in Class 11.

</learning-block>
