## From counting to assigning numbers

The last lesson taught us to list outcomes and count them. Now we ask a sharper question: how much belief should an event carry? We want a rule that takes any event and returns a single number between 0 and 1, and that behaves consistently when we combine events. Rather than invent such a rule for each experiment, we write down three properties we insist on — the **axioms of probability** — and derive everything else from them.

## 1. The three axioms

Let $S$ be a sample space and let $P$ be a function that assigns a real number $P(E)$ to every event $E\subseteq S$. The assignment is a probability if it satisfies:

1. **Non-negativity and bound:** $0\le P(E)\le 1$ for every event $E$.
2. **Certainty:** $P(S)=1$.
3. **Additivity:** if $E_1,E_2,\ldots$ are mutually exclusive events, then
   $$P(E_1\cup E_2\cup\cdots)=P(E_1)+P(E_2)+\cdots.$$

For a finite sample space, axiom 3 is only needed for finitely many events. The number $P(E)$ is the **probability** of $E$: zero means impossible, one means certain, and values in between measure likelihood. These are not theorems to prove — they are the rules of the game. Their power is that useful results follow from them automatically.

## 2. Classical probability is a special case

Suppose $S$ is finite with $n$ outcomes that are **equally likely**. By symmetry each simple event has the same probability, say $p$. Since the $n$ simple events are mutually exclusive and together make up $S$, axioms 2 and 3 give

$$1=P(S)=\underbrace{p+p+\cdots+p}_{n\text{ times}}=np,\qquad\text{so }p=\frac1n.$$

If an event $E$ contains $|E|$ of these simple events, additivity gives the classical formula

$$P(E)=\frac{|E|}{n}=\frac{\text{number of favourable outcomes}}{\text{total number of equally likely outcomes}}.$$

**When it fails.** The formula is not universal. If you record only the sum of two dice, the eleven possible sums are *not* equally likely: a sum of 7 can arise in six ways, a sum of 12 in only one. Applying $|E|/11$ there gives nonsense. The same warning applies to a biased coin or any experiment where the outcomes have unequal weights. The axioms still hold; only the counting shortcut breaks.

## 3. Results derived from the axioms

**The impossible event.** Since $\varnothing\cup S=S$ and the two are disjoint, axiom 3 gives $P(\varnothing)+P(S)=P(S)$, hence

$$P(\varnothing)=0.$$

**The complement rule.** An event $E$ and its complement $E'$ are mutually exclusive and exhaustive, so $E\cup E'=S$. Therefore

$$P(E)+P(E')=1,\qquad\text{so}\qquad P(E')=1-P(E).$$

This is the single most useful consequence when a question asks for "at least one" or "none".

**Monotonicity.** If $A\subseteq B$, then $B=A\cup(B-A)$ with the two parts disjoint. Hence $P(B)=P(A)+P(B-A)\ge P(A)$, because probabilities are non-negative. A larger event cannot have smaller probability.

**The addition rule.** For any two events $A$ and $B$, write $A\cup B=A\cup(B-A)$, a disjoint union, so

$$P(A\cup B)=P(A)+P(B-A).$$

Also $B=(A\cap B)\cup(B-A)$, again disjoint, giving $P(B-A)=P(B)-P(A\cap B)$. Substituting,

$$P(A\cup B)=P(A)+P(B)-P(A\cap B).$$

When $A$ and $B$ are mutually exclusive, $P(A\cap B)=0$ and the rule reduces to simple addition — exactly the counting identity from the previous lesson, now expressed for probabilities.

## 4. Odds

Some board-exam questions use *odds* instead of probability. If $P(E)=p$, the **odds in favour** of $E$ are $p:(1-p)$ and the **odds against** are $(1-p):p$. For example, if $P(E)=\frac{4}{13}$, the odds in favour are $\frac{4}{13}:\frac{9}{13}$, that is $4:9$. Converting back, probability $=$ (odds in favour first term) $/$ (sum of both terms).

## 5. A worked example with a deck of cards

One card is drawn at random from a well-shuffled pack of 52. Let $K$ be "the card is a king" and $H$ be "the card is a heart". All 52 cards are equally likely.

- There are 4 kings, so $P(K)=\dfrac{4}{52}=\dfrac{1}{13}$.
- There are 13 hearts, so $P(H)=\dfrac{13}{52}=\dfrac14$.
- Exactly one card is both, the king of hearts, so $P(K\cap H)=\dfrac{1}{52}$.

By the addition rule,

$$P(K\cup H)=\frac{4}{52}+\frac{13}{52}-\frac{1}{52}=\frac{16}{52}=\frac{4}{13}.$$

**Sanity check.** Counting the union directly: 13 hearts plus the 3 kings that are not hearts gives 16 cards, and $16/52=4/13$. The answer lies between $P(H)=1/4$ and $P(K)+P(H)=17/52$, as the addition rule requires whenever the events overlap.

<learning-block type="mistake" title="Adding overlapping probabilities">

The classic error is writing $P(K\cup H)=\frac{4}{52}+\frac{13}{52}=\frac{17}{52}$ and counting the king of hearts twice. Subtract the intersection unless you have first established that the events are mutually exclusive. A second error is to apply $P(E)=|E|/n$ to outcomes that are not equally likely — always check that assumption before counting.

</learning-block>

## Try it yourself

**A.** If $P(E)=0.32$, find $P(E')$ and the odds in favour of $E$.

<details><summary>Show the reasoning</summary>

$P(E')=1-0.32=0.68$. The odds in favour are $0.32:0.68$, which simplifies to $8:17$.

</details>

**B.** For two events $A$ and $B$, $P(A)=0.5$, $P(B)=0.4$ and $P(A\cap B)=0.2$. Find $P(A\cup B)$ and $P(A')$.

<details><summary>Show the reasoning</summary>

$P(A\cup B)=0.5+0.4-0.2=0.7$ and $P(A')=1-0.5=0.5$. Because the intersection is non-zero, the events are not mutually exclusive, so plain addition would wrongly give $0.9$.

</details>

**C.** A fair die is thrown. Find the probability of getting an even number or a multiple of 3.

<details><summary>Show the reasoning</summary>

With equally likely outcomes, $E=\{2,4,6\}$ and $M=\{3,6\}$, so $|E|=3$, $|M|=2$ and $|E\cap M|=1$. Hence $P(E\cup M)=\dfrac{3+2-1}{6}=\dfrac{4}{6}=\dfrac23$. The favourable set is $\{2,3,4,6\}$, as expected.

</details>

## Remember

- A probability assignment must satisfy $0\le P(E)\le 1$, $P(S)=1$ and additivity over mutually exclusive events.
- Classical probability $P(E)=|E|/n$ follows from the axioms **only** for equally likely outcomes; never use it for unequal weights.
- Derive, do not memorise blindly: $P(\varnothing)=0$, $P(E')=1-P(E)$, and $P(A\cup B)=P(A)+P(B)-P(A\cap B)$.
- If $A\subseteq B$ then $P(A)\le P(B)$; subtract the intersection before adding overlapping events.
- The addition rule handles "or". The next lesson handles a different question — how probabilities change when we are told that something has already happened.
