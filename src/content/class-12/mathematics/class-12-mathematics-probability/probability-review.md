## How to use this review

This chapter is a decision-making chapter: most mistakes come from choosing the wrong probability tool, not from difficult arithmetic. Use this review after the five concept modules. Aim for about 25 minutes: 5 minutes to scan the method map, 15 minutes solving, and 5 minutes checking errors.

## Study plan

| Time | Focus | What to do |
| ---: | --- | --- |
| 5 min | Formula and condition check | Write the key formulas for conditional probability, multiplication, Bayes, expectation, variance, and binomial probability from memory. |
| 7 min | Method selection | For each question below, name the tool before calculating. |
| 10 min | Mastery questions | Solve Questions 1–9. Reveal answers only after committing to a method and a number. |
| 3 min | Error audit | Classify mistakes: wrong condition, wrong denominator, independence assumption, missing combination, or arithmetic. |

## Which tool do I reach for?

| Clue in the question | Reach for | Watch out for |
| --- | --- | --- |
| "Given that...", "if it is known that..." | Conditional probability $P(A\mid B)=\frac{P(A\cap B)}{P(B)}$ | The denominator is the condition, not the whole sample space. |
| Two-stage draw/selection, "then..." | Multiplication theorem $P(A\cap B)=P(A)P(B\mid A)$ | Update the second probability after the first event when there is no replacement. |
| "Independent" trials or events | Product rule $P(A\cap B)=P(A)P(B)$ | Independence must be justified; mutually exclusive is different. |
| Observed effect, asks for cause/source | Bayes' theorem with total probability in denominator | Do not give $P(\text{effect}\mid \text{cause})$ when the reverse is asked. |
| A value $X$ with probabilities | Random variable distribution; check $\sum p_i=1$ | Compute $E(X)=\sum x_ip_i$, not an unweighted average. |
| "Exactly $r$ successes in $n$ trials" | Binomial $P(X=r)=\binom{n}{r}p^rq^{n-r}$ | Confirm fixed $n$, two outcomes, constant $p$, independence. |
| "At least/at most/none" in repeated trials | Binomial sum or complement | Complement is often faster for "at least one". |

## Mastery questions

Try each question before opening the answer. Use the method clue as a hint, not as a substitute for reasoning.

### 1. Conditional probability from counts

A card is drawn from a standard 52-card deck. Given that the card is red, what is the probability that it is a king?

<details><summary>Answer and reasoning</summary>

The condition is "red", so the denominator is 26. Red kings are 2. Therefore

$$
P(\text{king}\mid \text{red})=\frac{2}{26}=\frac{1}{13}.
$$

</details>

### 2. Multiplication without replacement

A bag contains 6 white and 4 black balls. Two balls are drawn one after another without replacement. Find the probability that both are black.

<details><summary>Answer and reasoning</summary>

Let $B_1,B_2$ be black on first and second draws. By multiplication theorem,

$$
P(B_1\cap B_2)=P(B_1)P(B_2\mid B_1)=\frac{4}{10}\cdot\frac{3}{9}=\frac{12}{90}=\frac{2}{15}.
$$

</details>

### 3. Test for independence

If $P(A)=0.5$, $P(B)=0.6$, and $P(A\cup B)=0.8$, determine whether $A$ and $B$ are independent.

<details><summary>Answer and reasoning</summary>

First find the intersection:

$$
P(A\cap B)=P(A)+P(B)-P(A\cup B)=0.5+0.6-0.8=0.3.
$$

Now test independence: $P(A)P(B)=0.5\times 0.6=0.3$. Since this equals $P(A\cap B)$, events $A$ and $B$ are independent.

</details>

### 4. Bayes' theorem

Factory I produces 30% of bulbs and Factory II produces 70%. The defective rates are 2% for Factory I and 3% for Factory II. A bulb chosen at random is defective. Find the probability that it came from Factory I.

<details><summary>Answer and reasoning</summary>

Let $F_1,F_2$ be factories and $D$ be defective. Total probability:

$$
P(D)=0.30(0.02)+0.70(0.03)=0.006+0.021=0.027.
$$

Bayes' theorem:

$$
P(F_1\mid D)=\frac{0.30(0.02)}{0.027}=\frac{0.006}{0.027}=\frac{2}{9}\approx 0.2222.
$$

</details>

### 5. Mean of a random variable

A random variable $X$ has the distribution:

| $x$ | 0 | 1 | 2 | 3 |
| --- | ---: | ---: | ---: | ---: |
| $P(X=x)$ | 0.2 | 0.3 | 0.4 | 0.1 |

Find $E(X)$.

<details><summary>Answer and reasoning</summary>

$$
E(X)=0(0.2)+1(0.3)+2(0.4)+3(0.1)=0+0.3+0.8+0.3=1.4.
$$

</details>

### 6. Variance of a random variable

For the distribution in Question 5, find $\operatorname{Var}(X)$.

<details><summary>Answer and reasoning</summary>

Compute $E(X^2)$:

$$
E(X^2)=0^2(0.2)+1^2(0.3)+2^2(0.4)+3^2(0.1)=0+0.3+1.6+0.9=2.8.
$$

Using $E(X)=1.4$,

$$
\operatorname{Var}(X)=E(X^2)-[E(X)]^2=2.8-(1.4)^2=2.8-1.96=0.84.
$$

</details>

### 7. Binomial exact probability

The probability that a student solves a problem is $3/5$. If he attempts 5 independent problems, find the probability that he solves exactly 4.

<details><summary>Answer and reasoning</summary>

Here $n=5$, $r=4$, $p=3/5$, $q=2/5$.

$$
P(X=4)=\binom{5}{4}\left(\frac{3}{5}\right)^4\left(\frac{2}{5}\right)^1=5\cdot\frac{81}{625}\cdot\frac{2}{5}=\frac{810}{3125}=0.2592.
$$

</details>

### 8. Binomial at least one

A machine produces defective items with probability 0.1. If 4 items are selected independently, find the probability that at least one is defective.

<details><summary>Answer and reasoning</summary>

Use the complement:

$$
P(X\ge 1)=1-P(X=0)=1-\binom{4}{0}(0.1)^0(0.9)^4=1-(0.9)^4.
$$

Since $(0.9)^4=0.6561$,

$$
P(X\ge 1)=1-0.6561=0.3439.
$$

</details>

### 9. Mixed Bayes and binomial reasoning

A bag is chosen at random from two bags. Bag I has 3 red and 2 blue balls; Bag II has 1 red and 4 blue balls. A ball drawn from the chosen bag is red. Find the probability that Bag I was chosen. Then, if this same experiment (choose a bag at random, draw one ball, replace it, repeat) is performed independently 3 times, find the probability of getting a red ball exactly twice in total.

<details><summary>Answer and reasoning</summary>

**First part (Bayes):** $P(B_1)=P(B_2)=1/2$, $P(R\mid B_1)=3/5$, $P(R\mid B_2)=1/5$.

$$
P(R)=\frac{1}{2}\cdot\frac{3}{5}+\frac{1}{2}\cdot\frac{1}{5}=\frac{4}{10}=\frac{2}{5}.
$$

$$
P(B_1\mid R)=\frac{(1/2)(3/5)}{2/5}=\frac{3/10}{4/10}=\frac{3}{4}.
$$

**Second part (binomial):** each trial has success probability $p=P(R)=2/5$, with $n=3$, $q=3/5$.

$$
P(X=2)=\binom{3}{2}\left(\frac{2}{5}\right)^2\left(\frac{3}{5}\right)^1=3\cdot\frac{4}{25}\cdot\frac{3}{5}=\frac{36}{125}=0.288.
$$

</details>

## Self-check

You are ready for the timed set when you can:

- write $P(A\mid B)$ with the correct denominator without hesitation;
- decide from the wording whether events are dependent, independent, or mutually exclusive;
- set up a Bayes table and make the posterior probabilities add to 1;
- verify a random variable distribution by checking $\sum p_i=1$;
- compute $E(X)$ and $\operatorname{Var}(X)$ without confusing $E(X^2)$ with $[E(X)]^2$;
- recognise a binomial situation and include the $\binom{n}{r}$ factor;
- use complements efficiently for "at least one" questions.

If any item is weak, revisit the corresponding concept module and redo its "Try it yourself" questions before attempting the JEE Main timed set.
