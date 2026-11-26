## Counting without listing

A café menu offers 4 starters, 5 main courses and 3 desserts. How many different three-course meals can you order? You could write out every combination, but that is slow and easy to get wrong. Counting theory answers questions like this by breaking a task into stages and combining the number of choices at each stage. The whole chapter rests on two rules: when stages happen together you multiply, and when they are alternatives you add.

## 1. The multiplication (counting) principle

Suppose a task splits into two **successive** stages. If the first stage can be done in $m$ ways and, for each of those, the second can be done in $n$ ways, then the whole task can be done in

$$
m\times n \text{ ways.}
$$

The reason is a tree diagram: the first stage gives $m$ branches, and each branch splits into $n$ twigs, producing $m$ groups of $n$ outcomes. The rule extends to any number of stages: multiply the number of choices at each stage.

For the café menu, choosing a starter **and** a main **and** a dessert gives

$$
4\times 5\times 3 = 60 \text{ possible meals.}
$$

The word "and" is the signal to multiply. Each choice is independent of the others — picking a particular starter does not change how many mains are available.

### With and without repetition

A code consists of 2 letters followed by 2 digits.

- If letters and digits may repeat: $26\times26\times10\times10 = 67600$ codes.
- If the two letters must be distinct but digits may repeat: $26\times25\times10\times10 = 65000$ codes.

The second position has only 25 options because one letter has already been used. Whenever a choice removes an option for a later stage, adjust that stage's count.

## 2. The addition principle

If two tasks are **mutually exclusive** alternatives — you can do one or the other but not both — and the first can be done in $m$ ways and the second in $n$ ways, then there are

$$
m+n \text{ ways.}
$$

For example, a club with 12 senior members and 10 junior members can choose a single representative in $12+10=22$ ways. The word "or" usually signals addition, but only when the cases do not overlap. If a person could belong to both groups, adding would count that person twice.

> **The key distinction:** multiply for stages of one task ("and"), add for alternative cases ("or"). Many exam errors come from using the wrong operation, not from arithmetic.

## 3. Factorials

Arranging $n$ distinct objects in a row means filling $n$ positions. The first position has $n$ choices, the second $n-1$, and so on down to 1, so the number of arrangements is

$$
n! = n(n-1)(n-2)\cdots 2\times 1.
$$

By convention $0! = 1$: there is exactly one way to arrange nothing (do nothing), and this convention makes the formulas in later modules work at the boundary cases.

Five different books can be placed on a shelf in $5! = 120$ orders. The factorial grows very fast: $10! = 3\,628\,800$, which is why we need compact formulas instead of lists.

## 4. A worked example with a sanity check

**Example.** A school badge has a code made from 2 distinct letters chosen from the alphabet, followed by 2 digits that may repeat. How many different codes are possible?

**Solution.** Treat the code as four stages:

| Stage | Choices |
| --- | --- |
| First letter | 26 |
| Second letter | 25 (distinct from the first) |
| First digit | 10 |
| Second digit | 10 (repetition allowed) |

By the multiplication principle,

$$
26\times25\times10\times10 = 650\times100 = 65000 \text{ codes.}
$$

**Sanity check.** Allowing the letters to repeat would give $67600$, so forcing them distinct must give fewer codes. Our answer $65000 < 67600$, as expected. The reduction is $2600 = 26\times10\times10$, exactly the codes we removed (those with two identical letters).

<learning-block type="mistake" title="Adding the cases that should be multiplied">

A common error is to see "2 letters and 2 digits" and compute $26+26+10+10=72$. These are stages of one code, so they must be multiplied, not added. Addition is reserved for genuine alternatives, such as "a code with 2 letters **or** a code with 2 digits". Before choosing an operation, say aloud whether you are completing one task in stages or selecting between separate cases.

</learning-block>

## Try it yourself

**A.** A restaurant has 6 starters, 4 mains and 5 desserts. How many different three-course meals can be ordered?

<details><summary>Show the reasoning</summary>

These are three stages of one meal, so multiply: $6\times4\times5 = 120$ meals.

</details>

**B.** A committee is formed by choosing one person from a group of 9 teachers **or** one person from a group of 7 students. How many choices are there if the groups do not overlap?

<details><summary>Show the reasoning</summary>

The two sources are mutually exclusive alternatives, so add: $9+7 = 16$ choices.

</details>

**C.** How many 3-digit codes can be written using the digits 1 to 6 if no digit may repeat and the first digit must be even?

<details><summary>Show the reasoning</summary>

Fill the restricted stage first. The first digit must be 2, 4 or 6: 3 choices. The second digit then has 5 remaining choices and the third has 4. Total $3\times5\times4 = 60$ codes. Filling the restricted position first avoids having to subtract invalid cases later.

</details>

## Remember

- Multiply for successive stages ("and"); add for mutually exclusive alternatives ("or").
- When a choice removes an option for a later stage, reduce that stage's count.
- $n!$ counts arrangements of $n$ distinct objects, and $0! = 1$ by convention.
- Fill the most restricted position first, then count the remaining stages.
- Check your answer against a nearby case (repetition allowed versus forbidden) to catch factor errors.

## Where this leads

The multiplication principle gives us the number of ordered arrangements directly; the next lesson, **Permutations**, packages that counting into a formula ${}^nP_r$ for arranging $r$ objects chosen from $n$. When order stops mattering, the following lesson on **Combinations** adjusts the count by dividing out rearrangements.
