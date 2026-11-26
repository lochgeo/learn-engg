## Real questions do not announce their tool

An examination problem rarely says "use the addition rule" or "this is conditional". It says "given that", "at least one", "chosen at random from one of two boxes", and expects you to decide. This lesson gathers the tools of the chapter into a decision method and adds two results — total probability and Bayes' theorem — that let you work backwards from an observed outcome to its likely cause.

## 1. A decision method

Before writing any formula, work through these steps.

1. **Name the experiment** and write the sample space, or at least say what one outcome is. Decide whether outcomes are equally likely.
2. **Translate the wording.** "Or" suggests a union; "and" suggests an intersection; "not" suggests a complement; "given that" signals conditioning.
3. **Check relationships.** Are the events mutually exclusive? Are they stated to be independent? The answer selects the formula.
4. **Choose and compute.** Use counting for equally likely spaces, the addition rule for unions, the multiplication rule for intersections, and independence only where justified.
5. **Sanity-check.** A probability lies in $[0,1]$; a posterior lies between 0 and 1; disjoint pieces of the whole must sum to 1.

## 2. The law of total probability

Suppose $A_1,A_2,\ldots,A_n$ **partition** the sample space: they are mutually exclusive, exhaustive, and each has positive probability. Think of them as the possible "cases" or "causes". For any event $E$, the sets $E\cap A_i$ are disjoint and their union is $E$, because the $A_i$ cover $S$. Hence

$$
E=(E\cap A_1)\cup(E\cap A_2)\cup\cdots\cup(E\cap A_n),
$$

and by additivity followed by the multiplication rule,

$$P(E)=\sum_{i=1}^{n}P(E\cap A_i)=\sum_{i=1}^{n}P(A_i)\,P(E\mid A_i).$$

In words: weigh the probability of $E$ in each case by the probability of that case, then add. This is the **law of total probability**. It is the correct replacement for "just count outcomes" when the cases have unequal likelihoods.

## 3. Bayes' theorem

Now reverse the question. We observe that $E$ has happened and ask which case $A_i$ produced it. The multiplication rule gives two expressions for the same intersection:

$$P(A_i\cap E)=P(A_i)\,P(E\mid A_i)=P(E)\,P(A_i\mid E).$$

Dividing by $P(E)>0$ and substituting the total-probability expression for $P(E)$,

$$P(A_i\mid E)=\frac{P(A_i)\,P(E\mid A_i)}{\displaystyle\sum_{j=1}^{n}P(A_j)\,P(E\mid A_j)}.$$

This is **Bayes' theorem**. The term $P(A_i)$ is the **prior** belief in case $i$; $P(A_i\mid E)$ is the **posterior** after seeing $E$; the factor $P(E\mid A_i)$ is how well that case explains the evidence. Bayes' theorem is simply the definition of conditional probability plus total probability — no new axiom is involved. It requires the $A_i$ to form a partition and $P(E)>0$.

## 4. Repeated independent trials

Many problems involve the same experiment repeated $n$ times with a constant success probability $p$ and independent trials. If $X$ is the number of successes, then

$$P(X=r)=\binom{n}{r}p^{\,r}(1-p)^{\,n-r},\qquad r=0,1,\ldots,n.$$

**Why?** Any specified pattern with $r$ successes has probability $p^r(1-p)^{n-r}$ by independence, and there are $\binom nr$ ways to choose which $r$ of the $n$ trials succeed; these patterns are mutually exclusive, so their probabilities add. The formula is valid only when the trials are independent and $p$ is the same each time. A useful companion result is

$$P(X\ge1)=1-P(X=0)=1-(1-p)^n.$$

## 5. Worked example: which urn supplied the red ball?

Urn 1 contains 3 red and 2 blue balls; urn 2 contains 1 red and 4 blue balls. An urn is chosen at random with equal probability, then one ball is drawn at random from it. The ball is red. Find the probability that urn 1 was chosen.

Let $U_1,U_2$ be the choices of urn and $R$ the event "the ball is red". The priors are $P(U_1)=P(U_2)=\frac12$; the likelihoods are $P(R\mid U_1)=\frac35$ and $P(R\mid U_2)=\frac15$.

**Step 1 — total probability of the evidence.**

$$P(R)=\frac12\cdot\frac35+\frac12\cdot\frac15=\frac{3}{10}+\frac{1}{10}=\frac{4}{10}=\frac25.$$

**Step 2 — Bayes.**

$$P(U_1\mid R)=\frac{P(U_1)P(R\mid U_1)}{P(R)}=\frac{\frac12\cdot\frac35}{\frac25}=\frac{3/10}{4/10}=\frac34.$$

**Sanity check.** Urn 1 is richer in red balls, so observing red should raise its probability above the prior $\frac12$; the posterior $\frac34$ does exactly that. As a further check, $P(U_2\mid R)=\frac{1/10}{4/10}=\frac14$, and the two posterior probabilities sum to 1.

## 6. Worked example: repeated shots

A shooter hits a target with probability $0.8$ on each shot, independently. In three shots find the probability of (i) exactly two hits and (ii) at least one hit.

$$P(X=2)=\binom32(0.8)^2(0.2)=3(0.64)(0.2)=0.384,$$

$$P(X\ge1)=1-(0.2)^3=1-0.008=0.992.$$

**Sanity check.** Both values lie in $[0,1]$, and $P(X\ge1)$ is close to 1 because a miss is unlikely; the four outcome probabilities $0.008,0.096,0.384,0.512$ sum to 1.

<learning-block type="mistake" title="Reversing the condition and dropping the priors">

Two errors recur. First, answering $P(E\mid A_i)$ when $P(A_i\mid E)$ was asked — the urn example asks for the *urn given red*, not *red given the urn*. Write the words out before substituting. Second, using Bayes' theorem without prior weights, for example answering $\frac{3/5}{3/5+1/5}=\frac34$ by coincidence here but going wrong whenever the urns are chosen with unequal probabilities. Always multiply each likelihood by the probability of its case. A third error is using the binomial formula when trials are not independent or the success probability changes.

</learning-block>

## Try it yourself

**A.** Box I has 2 white and 3 black balls; box II has 3 white and 2 black balls. A box is chosen at random and a ball drawn from it; the ball is white. Find the probability it came from box I.

<details><summary>Show the reasoning</summary>

$P(W\mid \text{I})=\frac25$ and $P(W\mid \text{II})=\frac35$, with equal priors. Then $P(W)=\frac12\cdot\frac25+\frac12\cdot\frac35=\frac12$, and $P(\text{I}\mid W)=\frac{(1/2)(2/5)}{1/2}=\frac25$. Box II has more white balls, so its posterior is larger, as expected.

</details>

**B.** A fair coin is tossed 4 times. Find the probability of exactly 2 heads and of at least one head.

<details><summary>Show the reasoning</summary>

$P(X=2)=\binom42\left(\frac12\right)^4=\frac{6}{16}=\frac38$. Also $P(X\ge1)=1-\left(\frac12\right)^4=\frac{15}{16}$. The six patterns with two heads are equally likely among the 16 possible sequences.

</details>

**C.** An event $A$ has $P(A)=0.4$. Given $A$, an event $B$ occurs with probability $0.5$; given $A'$, it occurs with probability $0.2$. Find $P(B)$ and $P(A\mid B)$.

<details><summary>Show the reasoning</summary>

$P(B)=P(A)P(B\mid A)+P(A')P(B\mid A')=(0.4)(0.5)+(0.6)(0.2)=0.2+0.12=0.32$. Then $P(A\cap B)=(0.4)(0.5)=0.2$, so $P(A\mid B)=\frac{0.2}{0.32}=\frac58$. The posterior exceeds the prior because $B$ is more likely when $A$ holds.

</details>

## Remember

- Translate the wording first: "or" $\to$ union, "and" $\to$ intersection, "not" $\to$ complement, "given that" $\to$ conditioning.
- Total probability: $P(E)=\sum P(A_i)P(E\mid A_i)$ when the $A_i$ partition $S$.
- Bayes: $P(A_i\mid E)=\dfrac{P(A_i)P(E\mid A_i)}{\sum_j P(A_j)P(E\mid A_j)}$ — include the priors in both numerator and denominator.
- For $n$ independent identical trials, $P(X=r)=\binom nr p^r(1-p)^{n-r}$ and $P(X\ge1)=1-(1-p)^n$.
- Always sanity-check direction (which event is "given") and range (a probability in $[0,1]$, posteriors summing to 1).
- The next module is a mastery check: ten mixed questions with no hints, followed by a timed paper.
