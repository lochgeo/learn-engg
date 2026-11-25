## JEE Main sprint: how to use this set

This is a **50-minute, no-notes** paper for after you finish the chapter lessons. Spend roughly 15 minutes on Section A, 15 on Section B, 10 on Section C and 10 on Section D. Mark any question that passes 90 seconds and come back to it; one stubborn subset count should not consume the paper.

Before writing, name the tool: a membership test, a subset count, a two-set correction, inclusion–exclusion, or a power-set count. Most wrong answers here come from picking the wrong tool, not from arithmetic. This is a pure mathematics set, so no physical constant is required.

## Conditions and formula sheet

| Clue | Start with | Check before trusting it |
| --- | --- | --- |
| Roster or builder form | Test each candidate for membership | Well-defined rule; no repeated members. |
| Element versus set | $x\in A$ or $X\subseteq A$ | A one-element set is not the same as its element. |
| Number of subsets | $2^n$, proper $2^n-1$, non-empty proper $2^n-2$ | The set must be finite; $n=n(A)$. |
| Union or intersection | Membership test with "or" or "and" | "Or" is inclusive. |
| Two sets with an overlap | $n(A\cup B)=n(A)+n(B)-n(A\cap B)$ | Subtract the intersection once. |
| Three sets | Add singles, subtract pairs, add triple | Distinguish "exactly two" from "at least two". |
| Power set | $n(\mathcal{P}(A))=2^n$, twice gives $2^{2^n}$ | Members of $\mathcal{P}(A)$ are sets. |
| Fixed element in a subset | $2^{n-1}$ if fixed in, $2^{n-2}$ if one more fixed out | Reduce the free elements correctly. |
| Intervals | Translate brackets to inequalities | $\infty$ takes a round bracket; state the universe. |
| Equality of sets | Prove both inclusions | Duplicates and order are irrelevant. |

<learning-block type="mistake" title="Three instant sanity checks">

If a "neither" count comes out negative, the data contradict each other. If a subset count is not a power of two, a factor was missed. If an interval answer includes an endpoint that a round bracket excluded, redo the bound comparison.

</learning-block>

## Section A — 10 rapid MCQs

### 1. A well-defined collection

Which of the following is a set in the mathematical sense?

- A. the tall students in a class
- B. the even integers between $1$ and $9$
- C. the most interesting novels on a shelf
- D. the good films of the year

<details><summary>Answer</summary>

**B.** Membership is decidable: the collection is $\{2,4,6,8\}$. The words "tall", "interesting" and "good" are matters of opinion, so the other options are not well-defined.
</details>

### 2. An element or a subset?

Let $A=\{1,2,3\}$. Which statement is true?

- A. $2\in A$
- B. $\{2\}\in A$
- C. $2\subseteq A$
- D. $\emptyset\in A$

<details><summary>Answer</summary>

**A.** The number $2$ is listed as a member. Option B is false because the listed members are numbers, not sets; the correct form is $\{2\}\subseteq A$. Option C misuses $\subseteq$, which relates sets, and D is false because the empty set is not listed as a member, though $\emptyset\subseteq A$ is true.
</details>

### 3. Counting subsets

The number of subsets of $\{a,b,c,d,e\}$ is:

- A. $16$
- B. $24$
- C. $31$
- D. $32$

<details><summary>Answer</summary>

**D.** There are $n=5$ elements, each independently in or out, so $2^5=32$ subsets. Option C is the number of proper subsets, a common near miss.
</details>

### 4. Proper subsets

If $n(A)=7$, the number of proper subsets of $A$ is:

- A. $128$
- B. $127$
- C. $126$
- D. $64$

<details><summary>Answer</summary>

**B.** Proper subsets are all subsets except $A$ itself: $2^7-1=128-1=127$. Option A forgets to exclude $A$; option C also excludes $\emptyset$.
</details>

### 5. Disjoint sets

If $A$ and $B$ are disjoint with $n(A)=4$ and $n(B)=5$, then $n(A\cup B)$ equals:

- A. $9$
- B. $20$
- C. $1$
- D. $5$

<details><summary>Answer</summary>

**A.** Disjoint means $n(A\cap B)=0$, so $n(A\cup B)=4+5-0=9$.
</details>

### 6. De Morgan's law

For subsets $A,B$ of a universal set $U$, the set $(A\cup B)'$ equals:

- A. $A'\cup B'$
- B. $A'\cap B'$
- C. $A\cap B$
- D. $A'\cup B$

<details><summary>Answer</summary>

**B.** "Not in $A$ or $B$" means "not in $A$ **and** not in $B$", so $(A\cup B)'=A'\cap B'$.
</details>

### 7. Inclusion–exclusion

If $n(A)=20$, $n(B)=15$ and $n(A\cap B)=5$, then $n(A\cup B)$ is:

- A. $30$
- B. $35$
- C. $40$
- D. $25$

<details><summary>Answer</summary>

**A.** $n(A\cup B)=20+15-5=30$. Adding without subtracting would give the wrong value $35$.
</details>

### 8. Intersecting intervals

$[1,5]\cap(3,7]$ equals:

- A. $[3,5]$
- B. $(3,5]$
- C. $[3,5)$
- D. $(3,7]$

<details><summary>Answer</summary>

**B.** The lower limit is the larger of $1$ and $3$, and $3$ is excluded by $(3,7]$; the upper limit is the smaller of $5$ and $7$, and $5$ is included by $[1,5]$. Hence the intersection is $(3,5]$.
</details>

### 9. Reverse power set

If $n(\mathcal{P}(A))=16$, then $n(A)$ is:

- A. $2$
- B. $4$
- C. $8$
- D. $16$

<details><summary>Answer</summary>

**B.** Since $2^n=16=2^4$, we get $n(A)=4$. Option A would give only $4$ subsets.
</details>

### 10. Complement identity

For any set $A$ contained in the universal set $U$, the set $A\cup A'$ equals:

- A. $\emptyset$
- B. $A$
- C. $U$
- D. $A'$

<details><summary>Answer</summary>

**C.** Every element of $U$ is either in $A$ or not in $A$, so the union is the whole universe. The companion identity is $A\cap A'=\emptyset$.
</details>

## Section B — 5 numerical-value questions

### 11. Recovering the size

A finite set has $254$ non-empty proper subsets. Find $n(A)$.

<details><summary>Answer</summary>

Non-empty proper subsets number $2^n-2$. So $2^n-2=254$, giving $2^n=256=2^8$ and $n(A)=8$. Check: $256-2=254$.
</details>

### 12. Newspapers

In a survey of $200$ people, $120$ read newspaper X, $90$ read Y and $30$ read both. How many read neither?

<details><summary>Answer</summary>

$n(X\cup Y)=120+90-30=180$, so $200-180=20$ read neither. Check by regions: X only $90$, Y only $60$, both $30$, neither $20$, total $200$.
</details>

### 13. Three subjects

In a class of $50$, $25$ like mathematics, $20$ like physics and $18$ like chemistry; $10$ like mathematics and physics, $8$ like physics and chemistry, $7$ like mathematics and chemistry; $4$ like all three. How many like none?

<details><summary>Answer</summary>

At least one $=25+20+18-(10+8+7)+4=63-25+4=42$. Hence $50-42=8$ like none. Consistency check: exactly one is $63-2(25)+3(4)=25$, exactly two is $25-3(4)=13$, and $25+13+4=42$.
</details>

### 14. Symmetric difference

With $n(A)=5$, $n(B)=6$ and $n(A\cap B)=2$, find $n(A\triangle B)$, where $A\triangle B=(A\setminus B)\cup(B\setminus A)$.

<details><summary>Answer</summary>

$n(A\setminus B)=5-2=3$ and $n(B\setminus A)=6-2=4$. These two parts are disjoint, so $n(A\triangle B)=3+4=7$, the same as $5+6-2(2)=7$.
</details>

### 15. A fixed member

Let $A=\{1,2,3,4\}$. How many subsets of $A$ contain $2$ but not $3$?

<details><summary>Answer</summary>

Keep $2$ in and $3$ out; the free elements are $\{1,4\}$, so there are $2^2=4$ subsets: $\{2\}$, $\{1,2\}$, $\{2,4\}$ and $\{1,2,4\}$.
</details>

## Section C — 3 assertion–reason questions

For each, choose: **A** = both true and the reason correctly explains the assertion; **B** = both true but the reason is not the correct explanation; **C** = assertion true, reason false; **D** = assertion false, reason true.

### 16. Equal sets

**Assertion:** If $A\subseteq B$ and $B\subseteq A$, then $A=B$.
**Reason:** Two sets are equal exactly when they have the same elements.

<details><summary>Answer</summary>

**A.** The first inclusion makes every element of $A$ an element of $B$, and the second does the reverse, so the membership lists coincide. That is precisely the definition quoted in the reason.
</details>

### 17. A set as a member

**Assertion:** $\{1,2\}\in\{1,2,3\}$.
**Reason:** The numbers $1$ and $2$ are elements of $\{1,2,3\}$.

<details><summary>Answer</summary>

**D.** The reason is true, but the assertion is false: the listed members of $\{1,2,3\}$ are the numbers $1,2,3$, and the set $\{1,2\}$ is not among them. The correct statement is $\{1,2\}\subseteq\{1,2,3\}$.
</details>

### 18. Difference as intersection

**Assertion:** $A\setminus B=A\cap B'$.
**Reason:** $A\cap B=\emptyset$ for all sets $A$ and $B$.

<details><summary>Answer</summary>

**C.** The assertion is true: $x\in A\setminus B$ means "$x\in A$ and $x\notin B$", which is "$x\in A$ and $x\in B'$". The reason is false, since arbitrary sets may overlap.
</details>

## Section D — 2 matching / multi-statement questions

### 19. Match the forms

Match each expression in Column I with an equivalent expression in Column II.

| Column I | Column II |
| --- | --- |
| (i) $A\setminus B$ | (p) $A'\cap B'$ |
| (ii) $(A\cup B)'$ | (q) $A\cap B'$ |
| (iii) $A\triangle B$ | (r) $A$ |
| (iv) $A\cap U$ | (s) $(A\setminus B)\cup(B\setminus A)$ |

<details><summary>Answer</summary>

(i) $\to$ (q), (ii) $\to$ (p), (iii) $\to$ (s), (iv) $\to$ (r).

Working: $A\setminus B=A\cap B'$ by the membership test; $(A\cup B)'=A'\cap B'$ by De Morgan's law; $A\triangle B$ is defined as the union of the two one-sided differences; and $A\cap U=A$ because $A\subseteq U$. Note that (ii) matches (p), not the union form of De Morgan's law.
</details>

### 20. Which statements are correct?

Let $U=\{1,2,3,4,5,6\}$, $A=\{1,2,3\}$ and $B=\{3,4,5\}$. Decide which statements are true:

- (a) $A$ and $B$ are disjoint.
- (b) $n(A\cup B)=5$.
- (c) $A'\cap B'=\{6\}$.
- (d) $B\setminus A=\{4,5\}$.

<details><summary>Answer</summary>

**(b), (c) and (d) are true; (a) is false.**

$A\cap B=\{3\}$, so the sets are not disjoint. $A\cup B=\{1,2,3,4,5\}$ has five elements. $A'=\{4,5,6\}$ and $B'=\{1,2,6\}$, so $A'\cap B'=\{6\}$, which also equals $(A\cup B)'$. Finally $B\setminus A$ removes the shared element $3$ from $B$, leaving $\{4,5\}$.
</details>

## Review by error, not by score

| If you missed… | Revisit | Then retry |
| --- | --- | --- |
| 1, 2, 17 | Sets, notation and types of sets | Say whether each symbol compares elements or sets. |
| 3, 4, 9, 11, 15 | The $2^n$ counts | Identify the free elements before counting. |
| 5, 6, 7, 10, 14, 18 | Set operations | Write the membership test, then apply inclusion–exclusion. |
| 13 | Venn diagrams and counting | Add singles, subtract pairs, add the triple; check with regions. |
| 8 | Power sets and intervals | Translate each bracket into an inequality. |
| 16, 19, 20 | Mixed reasoning across lessons | Name the tool first, then justify every option you reject. |

<learning-block type="recap" title="Ready to move on?">

Aim for at least $16$ correct out of $20$, with a written justification for each. A question you answer correctly but cannot explain is a revision target, not a mastered topic.

</learning-block>
