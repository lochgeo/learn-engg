## When the sample space shrinks

Suppose a box holds 3 red and 2 blue balls, and you draw one at random. The chance that it is red is $3/5$. Now suppose you are told the ball drawn is not blue. That information removes outcomes, and the chance of red becomes $1$. Probability changes when the condition changes the set of outcomes that are still possible.

Conditional probability formalises this idea. It answers: *given that event $B$ has already occurred, what is the probability of event $A$?* This is the basic tool behind medical test interpretation, reliability checks, card and urn problems, and the later theorems in this chapter.

## 1. Definition and notation

Let $A$ and $B$ be events associated with the same random experiment, and let $P(B)>0$. The **conditional probability of $A$ given $B$** is

$$
P(A\mid B)=\frac{P(A\cap B)}{P(B)}, \qquad P(B)>0.
$$

Read $P(A\mid B)$ as "probability of $A$ given $B$". The vertical bar is not division; it marks the condition.

- $A\cap B$ is the event that both $A$ and $B$ occur.
- The denominator $P(B)$ rescales the probability to the outcomes where $B$ is known to have occurred.
- The condition $P(B)>0$ matters because you cannot condition on an impossible event.

If all outcomes in a finite sample space are equally likely, the same formula becomes a ratio of counts:

$$
P(A\mid B)=\frac{n(A\cap B)}{n(B)}, \qquad n(B)>0.
$$

This count form is useful in cards, dice, and selection problems, but the probability form is the general definition.

## 2. Why the formula makes sense

Start from the original sample space $S$ with probability measure $P$. Once $B$ has occurred, outcomes outside $B$ are no longer relevant. The remaining outcomes are those in $B$, and the part of $A$ that can still occur is $A\cap B$.

The fraction of $B$'s probability that also lies in $A$ is therefore

$$
\frac{P(A\cap B)}{P(B)}.
$$

This gives a new probability assignment on events inside $B$. In particular, $P(B\mid B)=P(B\cap B)/P(B)=1$, which matches the idea that $B$ is certain once it is given.

<learning-block type="concept" title="Conditioning is renormalisation">

The numerator keeps only outcomes compatible with both the event and the condition. The denominator resets the total probability of the conditioned world to $1$. Forgetting the denominator is the most common source of wrong answers.

</learning-block>

## 3. A worked numerical example

A fair die is rolled once. Let $A$ be the event "the number is even" and $B$ be the event "the number is greater than 2". Find $P(A\mid B)$ and $P(B\mid A)$.

The sample space is $S=\{1,2,3,4,5,6\}$, with each outcome having probability $1/6$.

- $A=\{2,4,6\}$, so $P(A)=3/6=1/2$.
- $B=\{3,4,5,6\}$, so $P(B)=4/6=2/3$.
- $A\cap B=\{4,6\}$, so $P(A\cap B)=2/6=1/3$.

Therefore

$$
P(A\mid B)=\frac{P(A\cap B)}{P(B)}=\frac{1/3}{2/3}=\frac{1}{2}.
$$

Also

$$
P(B\mid A)=\frac{P(A\cap B)}{P(A)}=\frac{1/3}{1/2}=\frac{2}{3}.
$$

**Sanity check:** given $B=\{3,4,5,6\}$, the even numbers are $\{4,6\}$, which is 2 outcomes out of 4, so $1/2$ is right. Given $A=\{2,4,6\}$, numbers greater than 2 are $\{4,6\}$, which is 2 outcomes out of 3, so $2/3$ is right. The two conditional probabilities are different because the conditions are different.

## 4. Reading conditional probability in tables and word problems

Many problems give data as a table, a Venn diagram, or a verbal description. Before calculating, identify three things clearly:

1. **The condition:** which event is known?
2. **The intersection:** which outcomes satisfy both the required event and the condition?
3. **The denominator:** is it the probability/count of the whole sample space, or of the condition?

For example, if 60 students take mathematics, 40 take physics, and 25 take both, then

$$
P(\text{Physics}\mid \text{Mathematics})=\frac{25}{60}=\frac{5}{12},
$$

assuming a student is chosen uniformly from the 60 mathematics students. The denominator is 60, not the total number of students in the school, because the condition is "takes mathematics".

<learning-block type="mistake" title="Do not swap the condition">

$P(A\mid B)$ and $P(B\mid A)$ usually have different values. In the die example, $P(A\mid B)=1/2$ but $P(B\mid A)=2/3$. Always read the phrase after "given", "if it is known that", or "among those who" as the denominator event.

</learning-block>

## 5. Useful consequences

Rearranging the definition gives the product form

$$
P(A\cap B)=P(B)P(A\mid B), \qquad P(B)>0.
$$

By symmetry, when $P(A)>0$,

$$
P(A\cap B)=P(A)P(B\mid A).
$$

These are not new facts; they are the same relation written in a form that is convenient for multi-step experiments. The next module uses this rearrangement to build the multiplication theorem and the idea of independent events.

## Try it yourself

1. A card is drawn from a standard 52-card deck. Let $A$ be "the card is a king" and $B$ be "the card is a face card". Find $P(A\mid B)$.

<details><summary>Show the reasoning</summary>

There are 12 face cards and 4 kings, and every king is a face card. Thus

$$
P(A\mid B)=\frac{n(A\cap B)}{n(B)}=\frac{4}{12}=\frac{1}{3}.
$$

</details>

2. In a class, $P(M)=0.7$, $P(S)=0.5$, and $P(M\cap S)=0.35$, where $M$ means "passes mathematics" and $S$ means "passes science". Find $P(S\mid M)$.

<details><summary>Show the reasoning</summary>

$$
P(S\mid M)=\frac{P(M\cap S)}{P(M)}=\frac{0.35}{0.70}=0.5.
$$

The probability of passing science is the same among mathematics passers as in the whole class; this is an early hint of independence.

</details>

3. Two fair coins are tossed. Given that at least one head appears, what is the probability that both are heads?

<details><summary>Show the reasoning</summary>

The sample space is $\{HH,HT,TH,TT\}$. The condition "at least one head" gives $B=\{HH,HT,TH\}$. The event "both heads" is $A=\{HH\}$. Therefore

$$
P(A\mid B)=\frac{1/4}{3/4}=\frac{1}{3}.
$$

</details>

## Remember

- $P(A\mid B)=\dfrac{P(A\cap B)}{P(B)}$ is valid only when $P(B)>0$.
- The condition restricts the sample space; the denominator must be the probability of that condition.
- $P(A\mid B)$ and $P(B\mid A)$ are generally different quantities.
- In equally likely finite experiments, conditional probability can be computed as a ratio of counts.
- Rearranging the definition gives $P(A\cap B)=P(B)P(A\mid B)$, the bridge to the multiplication theorem.

Next, we use this product form to handle multi-stage experiments and to define what it really means for two events to be independent.
