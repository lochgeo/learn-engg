## Information changes the question

A fair die is rolled. Before you see anything, the chance of a six is $\frac16$. Now suppose someone tells you, truthfully, that the number is even. The chance of a six becomes $\frac13$, because only $\{2,4,6\}$ remain possible. The die did not change; the *information* did. Conditional probability is the tool that makes this narrowing precise: it restricts attention to outcomes consistent with what we now know.

## 1. The reduced sample space

Let $A$ and $B$ be events of a sample space $S$, with $P(B)>0$. If we are told that $B$ has occurred, every outcome outside $B$ becomes impossible. The relevant sample space is no longer $S$ but $B$ itself, and an event $A$ occurs precisely when the outcome lies in $A\cap B$. So the desired probability compares the favourable part $A\cap B$ with the whole remaining space $B$.

For equally likely outcomes this gives the intuitive ratio

$$P(A\mid B)=\frac{|A\cap B|}{|B|},\qquad |B|>0.$$

To obtain a formula that also works when outcomes are not equally likely, divide numerator and denominator by $n(S)$ in the equally likely case:

$$\frac{|A\cap B|}{n(S)}\Big/\frac{|B|}{n(S)}=\frac{P(A\cap B)}{P(B)}.$$

That ratio is the general definition.

## 2. Definition and the multiplication rule

The **conditional probability of $A$ given $B$** is

$$P(A\mid B)=\frac{P(A\cap B)}{P(B)},\qquad P(B)>0.$$

The symbol $A\mid B$ is read "A given B". The denominator is essential: it rescales probabilities to the reduced space, so that $P(B\mid B)=1$.

Multiplying both sides by $P(B)$ gives the **multiplication rule**,

$$P(A\cap B)=P(B)\,P(A\mid B).$$

Swapping the roles of $A$ and $B$ gives the equally valid form $P(A\cap B)=P(A)\,P(B\mid A)$. The two are the same statement, and equating them yields

$$P(A)\,P(B\mid A)=P(B)\,P(A\mid B).$$

This relation is the seed of Bayes' theorem, which we use in a later lesson.

## 3. Conditional probability behaves like a probability

Once $B$ is fixed, $P(\cdot\mid B)$ satisfies the three axioms on the reduced space $B$:

- $P(B\mid B)=\dfrac{P(B)}{P(B)}=1$ and $P(\varnothing\mid B)=0$;
- $0\le P(A\mid B)\le 1$ because $A\cap B\subseteq B$ and probabilities are non-negative;
- if $A_1,A_2$ are disjoint, then $(A_1\cup A_2)\cap B=(A_1\cap B)\cup(A_2\cap B)$ is a disjoint union, so conditional probabilities add.

So every rule already derived — complement, addition and so on — can be used inside the conditioned space, provided you write the bar $|\;B$ on **every** term. For instance $P(A'\mid B)=1-P(A\mid B)$, but $P(A'\mid B')$ is a different quantity altogether.

## 4. A worked example with two dice

Two fair dice are rolled. Let $B$ be "the sum is 8" and $A$ be "at least one die shows a 5". Find $P(A\mid B)$ and $P(B\mid A)$.

**Step 1 — the conditioning event.** $B=\{(2,6),(3,5),(4,4),(5,3),(6,2)\}$, so $P(B)=\dfrac{5}{36}$.

**Step 2 — the overlap.** Only $(3,5)$ and $(5,3)$ also contain a 5, so $A\cap B=\{(3,5),(5,3)\}$ and $P(A\cap B)=\dfrac{2}{36}$.

**Step 3 — divide.**

$$P(A\mid B)=\frac{2/36}{5/36}=\frac25,\qquad\text{equivalently}\qquad \frac{|A\cap B|}{|B|}=\frac25.$$

**Step 4 — reverse the condition.** Event $A$ contains the eleven pairs with at least one 5, namely $(5,1),\ldots,(5,6)$ and $(1,5),\ldots,(6,5)$, with $(5,5)$ counted once. Therefore

$$P(B\mid A)=\frac{2/36}{11/36}=\frac{2}{11}.$$

**Sanity check.** The two answers differ, as they should: knowing the sum is 8 makes a 5 fairly likely ($2/5$), while knowing that a 5 appeared makes a sum of 8 less likely ($2/11$). Both lie between 0 and 1. Note also that $P(A)=\frac{11}{36}\approx0.31$ while $P(A\mid B)=0.4$: the new information raises the probability.

<learning-block type="mistake" title="Wrong denominator, wrong direction">

Two errors dominate. First, computing $P(A\mid B)$ as $\dfrac{|A\cap B|}{n(S)}$ — using the original 36 outcomes instead of the reduced 5. Once $B$ is given, the denominator must be $|B|$ (or $P(B)$). Second, silently reversing the condition: $P(A\mid B)\ne P(B\mid A)$ in general. Read the phrase after "given that" carefully — that event goes in the denominator. Finally, $P(A\mid B)$ is undefined when $P(B)=0$; there is no meaningful conditioning on an impossible event.

</learning-block>

## Try it yourself

**A.** A bag holds 5 red and 3 blue balls. Two are drawn without replacement. Find the probability that the second is red given that the first is red.

<details><summary>Show the reasoning</summary>

After a red ball is removed, 4 red and 3 blue remain — 7 balls in all. Hence the conditional probability is $\frac47$. The same result follows from $\frac{P(R_1\cap R_2)}{P(R_1)}=\frac{(5/8)(4/7)}{5/8}=\frac47$.

</details>

**B.** Two fair coins are tossed. Given that at least one head appeared, find the probability that both appeared.

<details><summary>Show the reasoning</summary>

The reduced space is $\{HH,HT,TH\}$, with three equally likely outcomes; only $HH$ is favourable. Hence $P(HH\mid\text{at least one head})=\frac13$. Without the information the answer would be $\frac14$ — the conditioning matters.

</details>

**C.** If $P(A)=0.6$, $P(B)=0.5$ and $P(A\cap B)=0.2$, find $P(A\mid B)$ and $P(B\mid A)$.

<details><summary>Show the reasoning</summary>

$P(A\mid B)=\dfrac{0.2}{0.5}=0.4$ and $P(B\mid A)=\dfrac{0.2}{0.6}=\dfrac13$. Both are valid probabilities, and they differ because the denominators differ.

</details>

## Remember

- Conditioning means restricting the sample space to the event you are told occurred; that event supplies the denominator.
- $P(A\mid B)=\dfrac{P(A\cap B)}{P(B)}$ requires $P(B)>0$; with equally likely outcomes use $\dfrac{|A\cap B|}{|B|}$.
- The multiplication rule $P(A\cap B)=P(B)P(A\mid B)=P(A)P(B\mid A)$ connects the two orders.
- $P(A\mid B)$ and $P(B\mid A)$ are generally different; name which event is "given" before calculating.
- The next lesson studies the special case where learning that $B$ occurred leaves $P(A)$ unchanged — the idea of independence.
