## When a condition changes the count

Seating eight guests at a round table is straightforward: there are $7!$ circular orders. But if two guests are inseparable friends, or two others refuse to sit next to each other, the simple formula no longer applies. This lesson collects the small set of tricks that turn a restricted arrangement into an unrestricted one you already know how to count.

## 1. Fixing positions

If a particular object must occupy a particular position, put it there first and arrange the rest freely. With $n$ objects and one fixed position, the count is $(n-1)!$.

**Example.** Arrange 6 books in a row with a dictionary fixed in the middle (position 3). The dictionary has 1 possible place and the other 5 books can be ordered in $5! = 120$ ways.

If two positions are fixed by two specified objects, the remaining $n-2$ objects give $(n-2)!$ arrangements.

## 2. "Together" — the block method

When a set of objects must be adjacent, tie them into a single block and treat the block as one object. Remember to multiply by the number of orders **inside** the block.

**Example.** Arrange 6 people in a row with Amara and Ben side by side.

Tie A and B into a block. We now have 5 objects to arrange: the block plus the other 4 people, giving $5! = 120$ orders. Inside the block A and B can be AB or BA, so multiply by $2! = 2$:

$$
5!\times2! = 120\times2 = 240.
$$

**Sanity check.** The unrestricted count is $6! = 720$, and the restricted count 240 is exactly one third of it, a plausible fraction.

## 3. "Never together" — complement or gaps

For "must not be adjacent", two methods work.

**Complement method.** Subtract the "together" count from the unrestricted count:

$$
6! - 240 = 720 - 240 = 480.
$$

**Gap method.** Arrange the other 4 people first: $4! = 24$ orders. They create 5 gaps (before the first, between each pair, and after the last). Choose 2 distinct gaps and place A and B in them in either order: ${}^5P_2 = 20$ ways. Total

$$
4!\times{}^5P_2 = 24\times20 = 480.
$$

Both methods agree, which is a useful check. The complement method is fastest when only one pair must be separated; the gap method extends to three or more separated people.

## 4. Circular arrangements

Around a circle there is no distinguished starting seat: rotating everyone one place gives the same arrangement. Fix one object as a reference point, then arrange the remaining $n-1$ objects relative to it:

$$
\text{circular arrangements of } n \text{ distinct objects} = (n-1)!.
$$

**Example.** Seven people around a round table: $(7-1)! = 6! = 720$ arrangements. If two of them must sit together, tie them into a block, giving 6 objects around the circle: $(6-1)! = 5! = 120$ circular orders, times $2! = 2$ internal orders, so $240$.

**Clockwise versus anticlockwise matters.** Seating is usually counted so that a mirror image is a different arrangement. If a necklace may be flipped over, reflections also coincide and the count is halved to $(n-1)!/2$. Use this only when the problem explicitly says the arrangement can be turned over.

## 5. Repeated letters with a condition

For words, combine the repeated-letter division of the previous lesson with a restriction.

**Example.** Arrange the letters of MOTHER with the vowels O and E together.

The six letters are distinct. Tie O and E into a block, giving 5 objects: M, T, H, R and the block. Arrange them in $5! = 120$ ways, then order O and E inside the block in $2! = 2$ ways:

$$
5!\times2! = 240.
$$

For a word with repeated letters, such as BANANA, first count the unrestricted arrangements as $\dfrac{6!}{3!\,2!} = 60$, then apply the chosen restriction to that framework.

<learning-block type="mistake" title="Forgetting the internal order of a block">

The most common error in "together" questions is tying the objects into a block and stopping at $5! = 120$ for the Amara–Ben example. The block can be AB or BA, so the answer must double to 240. The exception is when the tied objects are identical — two A's in a word form only one block, not two. Always ask: "Can I tell the members of the block apart?"

</learning-block>

## Try it yourself

**A.** Five people sit in a row and one particular person must sit in the centre. How many arrangements are possible?

<details><summary>Show the reasoning</summary>

Fix that person in the centre (1 way) and arrange the other 4 in $4! = 24$ ways. Answer: 24.

</details>

**B.** How many ways can 8 distinct people be seated around a circular table?

<details><summary>Show the reasoning</summary>

Circular arrangements of 8 distinct objects: $(8-1)! = 7! = 5040$.

</details>

**C.** How many arrangements of the letters of BANANA have no two A's adjacent?

<details><summary>Show the reasoning</summary>

First arrange the non-A letters B, N, N: there are $\dfrac{3!}{2!} = 3$ distinct orders. Each order creates 4 gaps (before, between the two N's and the B, and after). Choose 3 of the 4 gaps for the three identical A's: ${}^4C_3 = 4$ ways. Total $3\times4 = 12$ arrangements. The gap method places the A's into distinct gaps so they can never touch.

</details>

## Remember

- Fix specified positions first, then arrange what remains.
- "Together" means block: arrange the block as one object, then multiply by its internal orders.
- "Not together" means complement (total minus together) or gaps (place separated objects into gaps between the others).
- Circular orders of $n$ distinct objects number $(n-1)!$; halve only if reflections count as the same.
- Divide by factorials of repeated counts before applying any arrangement restriction.

## Where this leads

Restrictions handle one condition at a time. The next lesson, **Mixed counting problems**, combines these tools with combinations and case splits — including "at least" and "at most" conditions — to solve the multi-step questions that dominate exam papers.
