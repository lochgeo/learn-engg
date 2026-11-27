## From one condition to a chain of events

Many real experiments happen in stages: draw a card, then draw another; test a component, then test the backup; choose a factory, then inspect an item. In such cases you rarely know $P(A\cap B)$ directly. What you usually know is the probability of the first event and the probability of the second event *after* the first has happened.

The multiplication theorem turns conditional probability into a practical calculation tool. It also leads to a precise meaning of independence: events are independent when knowing one does not change the probability of the other.

## 1. Multiplication theorem for two events

From the definition of conditional probability, if $P(B)>0$,

$$
P(A\mid B)=\frac{P(A\cap B)}{P(B)}.
$$

Rearranging gives

$$
P(A\cap B)=P(B)P(A\mid B).
$$

If $P(A)>0$, the same intersection can also be written as

$$
P(A\cap B)=P(A)P(B\mid A).
$$

These are two forms of the **multiplication theorem**. They are identical in value but differ in which event is treated as occurring first. Choose the form that matches the information given.

### Extending to three events

For three events $A$, $B$, and $C$, with $P(A)>0$ and $P(A\cap B)>0$,

$$
P(A\cap B\cap C)=P(A)P(B\mid A)P(C\mid A\cap B).
$$

The pattern continues: multiply the probability of the first event by the conditional probability of each next event given all previous ones. The conditions accumulate because each stage narrows what has already happened.

## 2. Worked example: drawing without replacement

A bag contains 5 red marbles and 3 blue marbles. Two marbles are drawn one after another **without replacement**. Find the probability that both marbles are red.

Let $R_1$ be "first marble is red" and $R_2$ be "second marble is red". We want $P(R_1\cap R_2)$.

- $P(R_1)=5/8$, because 5 of the 8 marbles are red.
- After one red marble is removed, 4 red marbles remain out of 7 total, so $P(R_2\mid R_1)=4/7$.

By the multiplication theorem,

$$
P(R_1\cap R_2)=P(R_1)P(R_2\mid R_1)=\frac{5}{8}\cdot\frac{4}{7}=\frac{20}{56}=\frac{5}{14}.
$$

**Sanity check:** the probability should be less than $P(R_1)=5/8$ because removing a red marble makes the second red draw slightly harder. Also, by direct counting, $\frac{\binom{5}{2}}{\binom{8}{2}}=\frac{10}{28}=5/14$, which agrees.

## 3. Independent events

Two events $A$ and $B$ are **independent** if the occurrence of one does not affect the probability of the other. Formally, when $P(A)>0$ and $P(B)>0$, independence means

$$
P(A\mid B)=P(A) \quad \text{and equivalently} \quad P(B\mid A)=P(B).
$$

Substituting $P(A\mid B)=P(A)$ into the multiplication theorem gives the standard test:

$$
P(A\cap B)=P(A)P(B).
$$

This product rule is the working definition used in most calculations. It also works when an event has probability 0, so it is often taken as the definition of independence.

### Independence is not the same as mutually exclusive

This distinction is vital:

| Idea | Meaning | Intersection | Typical test |
| --- | --- | --- | --- |
| Mutually exclusive | Cannot occur together | $A\cap B=\varnothing$, so $P(A\cap B)=0$ | Addition: $P(A\cup B)=P(A)+P(B)$ |
| Independent | One does not change the other's probability | $P(A\cap B)=P(A)P(B)$ | Multiplication test |

If $P(A)>0$ and $P(B)>0$, mutually exclusive events cannot be independent, because $P(A\cap B)=0$ but $P(A)P(B)>0$.

<learning-block type="mistake" title="Do not assume independence just because events sound separate">

Independence is a probability condition, not a vague feeling. Drawing without replacement makes successive draws dependent. Drawing with replacement makes them independent if each draw is identical. Always check whether the first outcome changes the second probability.

</learning-block>

## 4. Independence for more than two events

For three events $A$, $B$, $C$, pairwise independence is not enough. The events are **mutually independent** if all four conditions hold:

$$
P(A\cap B)=P(A)P(B),\quad P(A\cap C)=P(A)P(C),\quad P(B\cap C)=P(B)P(C),
$$

$$
P(A\cap B\cap C)=P(A)P(B)P(C).
$$

The last condition is the one students often forget. At JEE Main and board level, unless stated otherwise, repeated trials such as coin tosses or die rolls are usually taken as independent.

## 5. Worked example: with replacement

A fair coin is tossed and a fair die is rolled. Find the probability of getting a head and a number greater than 4.

Let $H$ be "head" and $D$ be "die shows 5 or 6". The coin toss does not affect the die roll, so the events are independent.

$$
P(H)=\frac{1}{2}, \qquad P(D)=\frac{2}{6}=\frac{1}{3}.
$$

Therefore

$$
P(H\cap D)=P(H)P(D)=\frac{1}{2}\cdot\frac{1}{3}=\frac{1}{6}.
$$

**Sanity check:** the combined sample space has $2\times 6=12$ equally likely outcomes. Favourable outcomes are $(H,5)$ and $(H,6)$, so the probability is $2/12=1/6$, matching the product rule.

## Try it yourself

1. A box has 4 good bulbs and 2 defective bulbs. Two bulbs are selected at random without replacement. Find the probability that both are defective.

<details><summary>Show the reasoning</summary>

Let $D_1$ and $D_2$ be defective on the first and second selections. Then

$$
P(D_1\cap D_2)=P(D_1)P(D_2\mid D_1)=\frac{2}{6}\cdot\frac{1}{5}=\frac{2}{30}=\frac{1}{15}.
$$

</details>

2. If $P(A)=0.4$, $P(B)=0.5$, and $P(A\cap B)=0.2$, are $A$ and $B$ independent?

<details><summary>Show the reasoning</summary>

Check the product: $P(A)P(B)=0.4\times 0.5=0.2$. Since this equals $P(A\cap B)$, the events are independent.

</details>

3. A fair die is rolled twice. Find the probability that the first roll is even and the second roll is greater than 4.

<details><summary>Show the reasoning</summary>

The rolls are independent. $P(\text{even on first})=3/6=1/2$. $P(\text{greater than 4 on second})=2/6=1/3$. Therefore the required probability is

$$
\frac{1}{2}\cdot\frac{1}{3}=\frac{1}{6}.
$$

</details>

## Remember

- Multiplication theorem: $P(A\cap B)=P(A)P(B\mid A)=P(B)P(A\mid B)$, when the relevant conditional probability is defined.
- For sequential events, condition each stage on everything that has already occurred.
- Independent events satisfy $P(A\cap B)=P(A)P(B)$; mutually exclusive events with positive probability do not.
- "Without replacement" usually signals dependence; "with replacement" or separate identical trials usually signal independence.
- For three or more events, mutual independence requires all pairwise and all joint product conditions.

Next, we use conditional probability in reverse: when an outcome is observed, Bayes' theorem tells us how to update the probability of the cause that produced it.
