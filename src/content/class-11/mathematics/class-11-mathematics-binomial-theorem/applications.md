## One theorem, several jobs

The same general term that gave us middle terms also answers questions that look unrelated: which term has no $x$ in it, what $(1.02)^5$ is to three decimal places, and why $6^n-5n-1$ is always a multiple of $25$. None of these needs a new formula. They need the discipline to write $T_{r+1}$ correctly and to keep every numeric factor that travels with it.

## 1. The term independent of $x$

In a binomial whose terms contain powers of $x$, the general term has the shape (coefficient)$\times x^{\text{some expression in }r}$. A term is **independent of $x$** — a constant term — when that exponent is zero. Set the exponent equal to zero, solve for $r$, and then evaluate the whole coefficient.

This is a two-part calculation. Finding $r$ uses only the powers; evaluating the term uses the binomial coefficient, every numeric factor inside the brackets, and the sign. Dropping one of those factors is the usual cause of a wrong answer.

## 2. Worked example: a constant term

Find the term independent of $x$ in $\left(2x-\dfrac{1}{x^2}\right)^{12}$.

**Step 1 — general term.**

$$
T_{r+1}=\binom{12}{r}(2x)^{12-r}\left(-\frac{1}{x^2}\right)^r
=\binom{12}{r}2^{12-r}(-1)^r x^{12-r-2r}
=\binom{12}{r}2^{12-r}(-1)^r x^{12-3r}.
$$

**Step 2 — solve for $r$.** Independence of $x$ requires $12-3r=0$, so $r=4$, which is the fifth term.

**Step 3 — evaluate the coefficient.** Using $\binom{12}{4}=495$:

$$
T_5=495\cdot 2^{8}\cdot(-1)^4=495\cdot256=126720.
$$

**Sanity check.** The exponent $12-3r$ decreases by $3$ for each step in $r$, so an integer solution $r=4$ is plausible. Since $r$ is even, $(-1)^r=+1$ and the constant term is positive; a first term $2x$ and a negative second term with an even power indeed give a positive product.

## 3. Approximating powers

For a number close to $1$, write it as $1+x$ with $x$ small and use the first few terms:

$$
(1+x)^n=1+nx+\binom{n}{2}x^2+\binom{n}{3}x^3+\cdots.
$$

When $|x|\ll1$, the higher powers of $x$ shrink quickly, so $1+nx$ is a first estimate and adding the quadratic term improves it. The approximation **fails** when $x$ is not small, or when the required precision is finer than the first neglected term. Always estimate the size of that neglected term before trusting the digits.

For example, with $x=0.02$ and $n=5$, the quadratic term is about $0.004$ and the cubic term about $0.00008$, so two terms give roughly $1.10$ while four terms give $1.10408$ — accurate to about four decimal places.

## 4. Divisibility proofs

Binomial expansion makes certain divisibility statements almost mechanical. Write the base as $1+k$, expand, and separate the first two terms:

$$
(1+k)^n=1+nk+\binom{n}{2}k^2+\binom{n}{3}k^3+\cdots.
$$

Every term from the third onward contains $k^2$. Hence $(1+k)^n-nk-1$ is divisible by $k^2$ for every positive integer $n$.

Apply this to $6^n-5n-1$. Since $6=1+5$, take $k=5$:

$$
6^n=(1+5)^n=1+5n+\binom{n}{2}25+\binom{n}{3}125+\cdots,
$$

$$
6^n-5n-1=25\left[\binom{n}{2}+\binom{n}{3}5+\cdots\right].
$$

The bracket is an integer, so $6^n-5n-1$ is divisible by $25$. Checks: $n=1$ gives $0$, $n=2$ gives $25$, $n=3$ gives $200$ — all multiples of $25$.

## 5. Selecting tools for a question

| Clue in the question | Tool |
| --- | --- |
| "term independent of $x$" | Set the exponent of $x$ in $T_{r+1}$ to zero |
| "coefficient of $x^k$" | Solve for $r$ from the exponent, then keep all numeric factors |
| "middle term" | Use $r=\frac n2$, or $r=\frac{n-1}{2},\frac{n+1}{2}$ |
| "sum of coefficients" | Substitute $x=1$ into the whole expression |
| "approximate $(1+x)^n$" | First two or three terms, with $|x|$ small |
| "prove divisible by $k^2$" | Expand $(1+k)^n$ and isolate the terms beyond $1+nk$ |

<learning-block type="mistake" title="Finding r is only half the job">

In a constant-term question, getting $r$ right is not the same as getting the term right. In $\left(2x-\frac{1}{x^2}\right)^{12}$ the coefficient contains $2^{12-r}$ and $(-1)^r$ as well as $\binom{12}{r}$; writing just $\binom{12}{4}=495$ loses both. The same care applies to approximations: $1+nx$ is a fine first estimate for $(1.02)^5$ but not for $(1.2)^5$, where $x=0.2$ is not small and the dropped terms are large.

</learning-block>

## Try it yourself

**A.** Find the term independent of $x$ in $\left(x+\dfrac{1}{x}\right)^8$.

<details><summary>Show the reasoning</summary>

$T_{r+1}=\binom{8}{r}x^{8-r}(x^{-1})^r=\binom{8}{r}x^{8-2r}$. Set $8-2r=0$, so $r=4$ and the constant term is $\binom{8}{4}=70$.

</details>

**B.** Use the binomial theorem to find $(0.99)^5$ correct to four decimal places.

<details><summary>Show the reasoning</summary>

Write $0.99=1-0.01$:

$$(1-0.01)^5=1-5(0.01)+10(0.01)^2-10(0.01)^3+5(0.01)^4-\cdots$$
$$=1-0.05+0.001-0.00001+0.00000005-\cdots=0.95099005\ldots$$

The next omitted term is about $10^{-10}$, so to four decimal places the answer is $0.9510$. The two-term estimate $0.95$ is not precise enough.

</details>

**C.** Prove that $3^{2n}-8n-1$ is divisible by $64$ for every positive integer $n$.

<details><summary>Show the reasoning</summary>

Note $3^{2n}=9^n=(1+8)^n$. Expanding,

$$9^n=1+8n+\binom{n}{2}64+\binom{n}{3}512+\cdots.$$

Therefore $9^n-8n-1=64\left[\binom{n}{2}+\binom{n}{3}8+\cdots\right]$, an integer multiple of $64$. Checks: $n=1$ gives $0$, and $n=2$ gives $81-16-1=64$.

</details>

## Remember

- For a constant term, set the exponent of $x$ in $T_{r+1}$ to zero, then evaluate the whole coefficient.
- Carry the sign $(-1)^r$ and every numeric factor inside the brackets.
- The approximation $(1+x)^n\approx1+nx$ requires $|x|$ small; check the first neglected term.
- $(1+k)^n-nk-1$ is divisible by $k^2$ — a quick route to many divisibility proofs.
- You now have the full toolkit; consolidate it with the **Binomial Theorem: practice & mastery check**, then test it under time in the **JEE Main timed practice** set.
