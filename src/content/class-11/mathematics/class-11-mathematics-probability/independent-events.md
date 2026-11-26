## When information does not help

Toss a coin and roll a die. Knowing that the coin landed heads tells you nothing about the die: the chance of a six is still $\frac16$. Such events are **independent**. This is a precise mathematical condition, not a vague claim that the events "look unrelated", and this lesson states it exactly, separates it from mutual exclusivity, and develops the formulas that follow.

## 1. Definition

Two events $A$ and $B$ are **independent** if

$$P(A\cap B)=P(A)\,P(B).$$

When $P(B)>0$, the multiplication rule of the previous lesson gives an equivalent test:

$$P(A\mid B)=\frac{P(A\cap B)}{P(B)}=\frac{P(A)P(B)}{P(B)}=P(A).$$

So independence means that conditioning on $B$ leaves the probability of $A$ unchanged. If $P(A)>0$, the symmetric statement $P(B\mid A)=P(B)$ also holds. The product definition is the safe one to use, because it remains meaningful even when one event has probability zero.

To test independence in a problem: compute $P(A)$, $P(B)$ and $P(A\cap B)$ separately, then check whether the product matches the intersection. Do not guess from the story alone.

## 2. Independence is not mutual exclusivity

These two ideas are frequently confused because both concern events occurring together.

| Idea | Condition on $A\cap B$ | Meaning |
| --- | --- | --- |
| Mutually exclusive | $P(A\cap B)=0$ | They cannot happen together. |
| Independent | $P(A\cap B)=P(A)P(B)$ | One does not affect the other's chance. |

The conditions are almost opposites. If $P(A)>0$ and $P(B)>0$, mutually exclusive events **cannot** be independent, because $0\ne P(A)P(B)$. Conversely, independent events with positive probabilities **cannot** be mutually exclusive, because their intersection has positive probability. "Rolling an even number" and "rolling an odd number" are mutually exclusive but strongly dependent: knowing one occurred rules out the other completely.

## 3. Consequences you can use

**Complements preserve independence.** If $A$ and $B$ are independent, then so are $A'$ and $B$:

$$P(A'\cap B)=P(B)-P(A\cap B)=P(B)-P(A)P(B)=P(B)\bigl(1-P(A)\bigr)=P(A')P(B).$$

The same argument shows that $A$ and $B'$, and $A'$ and $B'$, are independent pairs. This is what makes "at least one" calculations easy.

**Union of independent events.** Substituting $P(A\cap B)=P(A)P(B)$ into the addition rule,

$$P(A\cup B)=P(A)+P(B)-P(A)P(B)=1-\bigl(1-P(A)\bigr)\bigl(1-P(B)\bigr)=1-P(A')P(B').$$

The last form is the **complement trick**: "at least one of $A$, $B$" is the complement of "neither $A$ nor $B$", and the probabilities of "neither" multiply.

**More than two independent events.** If $A,B,C$ are *mutually* independent, then for any subcollection the probability of the intersection is the product of the probabilities; in particular $P(A\cap B\cap C)=P(A)P(B)P(C)$ and $P(\text{at least one})=1-P(A')P(B')P(C')$.

**Pairwise is not enough.** Pairwise independence requires the product rule for each pair only. Mutual independence additionally requires the product rule for the intersection of **all** events. Here is a standard counterexample. Toss two fair coins and set

- $A$ = "first coin is heads" $=\{HH,HT\}$,
- $B$ = "second coin is heads" $=\{HH,TH\}$,
- $C$ = "exactly one head" $=\{HT,TH\}$.

Each has probability $\frac12$, and each pair intersects in one outcome: $P(A\cap B)=P(A\cap C)=P(B\cap C)=\frac14=P(A)P(B)=P(A)P(C)=P(B)P(C)$. So the three are pairwise independent. But $A\cap B\cap C=\varnothing$, so $P(A\cap B\cap C)=0$ while $P(A)P(B)P(C)=\frac18$. They are **not** mutually independent.

## 4. A worked example

Events $A$ and $B$ are independent with $P(A)=0.6$ and $P(B)=0.5$. Find the probability of (i) both, (ii) at least one, (iii) exactly one, (iv) neither.

**Step 1 — both.** $P(A\cap B)=P(A)P(B)=0.6\times0.5=0.3$.

**Step 2 — at least one.** $P(A\cup B)=1-P(A')P(B')=1-(0.4)(0.5)=1-0.2=0.8$.

**Step 3 — exactly one.** This is $(A\cap B')\cup(A'\cap B)$, a disjoint union. Independence of the complement pairs gives

$$P(A\cap B')+P(A'\cap B)=(0.6)(0.5)+(0.4)(0.5)=0.3+0.2=0.5.$$

**Step 4 — neither.** $P(A'\cap B')=(0.4)(0.5)=0.2$.

**Sanity check.** The four disjoint outcomes "both", "A only", "B only", "neither" have probabilities $0.3+0.3+0.2+0.2=1$, as they must. Also $P(A\cap B)=0.3=P(A)P(B)$ confirms independence, and $P(A\cup B)=0.8$ equals $1-0.2$.

<learning-block type="mistake" title="Assuming independence instead of proving it">

The commonest error is multiplying $P(A)P(B)$ because the events *seem* unrelated. Independence is a claim about numbers and must be verified, or stated as a given in the question. The second error is confusing it with mutual exclusivity: if a problem says "either $A$ or $B$ but not both", the events are mutually exclusive, and $P(A\cup B)=P(A)+P(B)$ — not the independence formula. A third error is to stop after checking pairs when mutual independence of three events is required.

</learning-block>

## Try it yourself

**A.** If $A$ and $B$ are independent with $P(A)=0.7$ and $P(B)=0.4$, find $P(A\cup B)$ and $P(A'\cap B')$.

<details><summary>Show the reasoning</summary>

$P(A\cup B)=0.7+0.4-(0.7)(0.4)=1.1-0.28=0.82$. Also $P(A'\cap B')=(0.3)(0.6)=0.18$, which agrees with $1-0.82$.

</details>

**B.** A die is rolled twice. Let $A$ be "the first roll is even" and $B$ be "the second roll is even". Show that $A$ and $B$ are independent and find $P(A\cap B)$.

<details><summary>Show the reasoning</summary>

$P(A)=P(B)=\frac36=\frac12$. The two rolls have no effect on each other, and counting confirms it: $A\cap B$ consists of $3\times3=9$ ordered pairs out of 36, so $P(A\cap B)=\frac{9}{36}=\frac14=P(A)P(B)$. Hence the events are independent.

</details>

**C.** If $P(A)=0.3$, $P(B)=0.2$ and $A$, $B$ are mutually exclusive, are they independent?

<details><summary>Show the reasoning</summary>

No. Mutual exclusivity gives $P(A\cap B)=0$, while independence would require $P(A\cap B)=P(A)P(B)=0.06\ne0$. Knowing that $A$ occurred rules out $B$, so the events strongly affect each other.

</details>

## Remember

- Independence means $P(A\cap B)=P(A)P(B)$, equivalently $P(A\mid B)=P(A)$ when $P(B)>0$; verify it rather than assume it.
- Mutually exclusive means $P(A\cap B)=0$; with positive probabilities the two properties cannot both hold.
- Independence survives complements, so $P(\text{at least one})=1-P(A')P(B')$.
- Mutual independence of three or more events needs the product rule for every subcollection, not just for pairs.
- The next lesson brings counting, conditioning and independence together in mixed problems, including a way to reverse conditional probabilities.
