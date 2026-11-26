## Adding coefficients without expanding

What is the sum of all coefficients in the expansion of $(1+x)^{20}$? Expanding twenty-one terms to answer would be absurd. Yet the answer is immediate if you notice that a polynomial's coefficients add up when you set its variable to $1$. This lesson collects the small set of substitutions and identities that turn coefficient questions into one-line arguments.

## 1. Coefficient is not term

From the general term $T_{r+1}=\binom{n}{r}a^{n-r}b^r$, the **coefficient** is the numeric multiplier $\binom{n}{r}$; the **term** also carries the powers of the variables. In $(1+x)^n$ the coefficient of $x^k$ is $\binom{n}{k}$. In $(1+2x)^n$ the general term is $\binom{n}{r}2^r x^r$, so the coefficient of $x^k$ is $\binom{n}{k}2^k$. State which one a question asks for before doing any arithmetic.

## 2. Sum of coefficients by substitution

Let $P(x)=(1+x)^n=\sum_{r=0}^{n}\binom{n}{r}x^r$. Setting $x=1$ makes every power of $x$ equal to $1$, so the right side becomes the sum of the coefficients:

$$
P(1)=\sum_{r=0}^{n}\binom{n}{r}=2^n.
$$

The same principle works for any expression: **the sum of the coefficients of $P(x)$ is $P(1)$**. For $(1+2x)^n$ we get $(1+2)^n=3^n$, not $2^n$. For a two-variable expression $(a+b)^n$, set both variables to $1$ and obtain $2^n$ again.

## 3. Even and odd coefficients

Now set $x=-1$ in the same expansion:

$$
(1-1)^n=\sum_{r=0}^{n}(-1)^r\binom{n}{r}=0\qquad (n\ge 1).
$$

The positive contributions come from even $r$, the negative ones from odd $r$. Writing $E$ for the sum of the even-index coefficients and $O$ for the odd-index sum, this says $E-O=0$. Together with $E+O=2^n$ from the previous section we get

$$
E=O=2^{n-1}.
$$

So in $(1+x)^n$ the even-index coefficients and the odd-index coefficients each add to half the total.

## 4. Identities worth keeping

These follow from the factorial definition or from simple substitutions in $(1+x)^n$:

| Identity | Why it holds |
| --- | --- |
| $\binom{n}{r}=\binom{n}{n-r}$ | symmetry: choosing $r$ or leaving out $n-r$ is the same choice |
| $\binom{n}{r}+\binom{n}{r+1}=\binom{n+1}{r+1}$ | Pascal's rule, from counting subsets by whether they contain one element |
| $\binom{n}{r}=\dfrac{n}{r}\binom{n-1}{r-1}$ | rearrange the factorials |
| $\displaystyle\sum_{r=0}^{n}r\binom{n}{r}=n2^{n-1}$ | differentiate $(1+x)^n$, then put $x=1$ |
| $\displaystyle\sum_{r=0}^{n}r(r-1)\binom{n}{r}=n(n-1)2^{n-2}$ | differentiate twice, then put $x=1$ |

To justify the fourth row, differentiate the expansion:

$$
n(1+x)^{n-1}=\sum_{r=1}^{n}r\binom{n}{r}x^{r-1}.
$$

Putting $x=1$ gives $n2^{n-1}$ on the left and the required sum on the right. The term $r=0$ contributes nothing, so including it changes nothing.

The **greatest binomial coefficient** is $\binom{n}{n/2}$ when $n$ is even, and the equal pair $\binom{n}{(n-1)/2}=\binom{n}{(n+1)/2}$ when $n$ is odd — the coefficients rise to the middle and then fall by symmetry.

## 5. Worked example: identities in action

For $n=5$, find the sum of coefficients, the even and odd sums, and $\sum r\binom{5}{r}$. Verify each directly.

**Sum:** $2^5=32$.

**Even indices** ($r=0,2,4$): $\binom{5}{0}+\binom{5}{2}+\binom{5}{4}=1+10+5=16$.
**Odd indices** ($r=1,3,5$): $\binom{5}{1}+\binom{5}{3}+\binom{5}{5}=5+10+1=16$. Each equals $2^{4}=16$, as predicted.

**Weighted sum:** the identity gives $5\cdot2^{4}=80$. Directly,

$$
0(1)+1(5)+2(10)+3(10)+4(5)+5(1)=5+20+30+20+5=80.
$$

**Sanity check.** The even and odd sums are equal, as they must be for $n\ge1$, and together they make $32$. The weighted sum lies between $0$ and $5\times32=160$, so $80$ is a sensible value.

<learning-block type="mistake" title="Substituting into only part of the expression">

Learners often say "the sum of coefficients is $2^n$" for every binomial. That is true for $(1+x)^n$ or $(a+b)^n$, but the sum of coefficients of $(1+2x)^n$ is $3^n$: setting $x=1$ must be done in the *whole* expression, including the numeric factors inside it. A related error is to forget the constant term when adding coefficients — $x^0$ counts, since $1^0=1$.

</learning-block>

## 6. Where this leads

Coefficient identities are the engine behind the chapter's practical questions: finding a term that does not contain $x$, extracting a specific coefficient from a product of binomials, approximating a numeric power, and proving divisibility. Those are the subject of **Applications**, where the general term and these identities are combined.

## Try it yourself

**A.** Find the sum of all coefficients in $(1+3x)^4$.

<details><summary>Show the reasoning</summary>

Set $x=1$ in the whole expression: $(1+3)^4=4^4=256$. The answer is not $2^4$, because the factor $3$ inside the bracket also contributes to the coefficients.

</details>

**B.** Evaluate $\sum_{r=0}^{6}\binom{6}{r}$ and $\sum_{r=0}^{6}(-1)^r\binom{6}{r}$.

<details><summary>Show the reasoning</summary>

Put $x=1$ for the first sum: $2^6=64$. Put $x=-1$ for the second: $(1-1)^6=0$. Hence the even-index and odd-index coefficients are each $2^5=32$.

</details>

**C.** Which coefficient is greatest in $(1+x)^9$?

<details><summary>Show the reasoning</summary>

Since $n=9$ is odd, the greatest coefficients are the equal pair $\binom{9}{4}=\binom{9}{5}=126$.

</details>

## Remember

- The coefficient of $x^r$ in $(1+x)^n$ is $\binom{n}{r}$; keep numeric factors such as $2^r$ when they are present.
- The sum of coefficients is $P(1)$, and the alternating sum is $P(-1)$.
- In $(1+x)^n$, even-index and odd-index coefficients each sum to $2^{n-1}$.
- Use $\binom{n}{r}=\binom{n}{n-r}$, Pascal's rule, and $\sum r\binom{n}{r}=n2^{n-1}$ to avoid long expansions.
- These identities become calculation tools in **Applications**, the next lesson.
