## Why expand a power at all?

Multiplying out $(a+b)^2$ or $(a+b)^3$ is easy enough. But $(1.02)^8$ to three decimal places, or the coefficient of a particular term in $(2x-3)^{12}$, cannot be found by patient multiplication. The **binomial theorem** replaces the whole repeated multiplication with one formula and tells us the exact multiplier of every term. A *binomial* is an expression with two terms; the theorem describes what happens when we raise such an expression to a power.

We state it first for a **positive integer** exponent $n$. That restriction matters: the finite sum below exists because $n$ counts how many factors we multiply together.

## 1. The binomial theorem

For a positive integer $n$,

$$
(a+b)^n=\binom{n}{0}a^n+\binom{n}{1}a^{n-1}b+\binom{n}{2}a^{n-2}b^2+\cdots+\binom{n}{n}b^n
=\sum_{r=0}^{n}\binom{n}{r}a^{n-r}b^r.
$$

Here $\binom{n}{r}$, read as "n choose r", is the **binomial coefficient**

$$
\binom{n}{r}=\frac{n!}{r!(n-r)!},\qquad 0\le r\le n.
$$

Each bracket $\binom{n}{r}$ is an ordinary integer; $\binom{n}{0}=\binom{n}{n}=1$. The expansion contains exactly $n+1$ terms, because $r$ takes the values $0,1,2,\ldots,n$. The power of $a$ falls from $n$ to $0$ while the power of $b$ rises from $0$ to $n$, so in every term the two powers add to $n$.

## 2. Where the coefficients come from

The formula is not a trick to memorise; it is a counting argument. Write the power as $n$ identical factors:

$$
(a+b)^n=\underbrace{(a+b)(a+b)\cdots(a+b)}_{n\ \text{factors}}.
$$

To build one term of the expansion, choose $a$ or $b$ from each factor and multiply the choices. If we pick $b$ from exactly $r$ of the factors and $a$ from the remaining $n-r$, the product is $a^{n-r}b^r$, regardless of which factors supplied the $b$'s. The number of ways to choose those $r$ factors is $\binom{n}{r}$. Adding all the contributions gives the theorem.

This argument also explains two features at once: why the coefficient of $a^{n-r}b^r$ is $\binom{n}{r}$, and why there are $n+1$ distinct terms (one for each possible number of $b$'s).

## 3. When the second term is negative

Since $-b$ is just another expression, replace $b$ by $-b$ in the theorem:

$$
(a-b)^n=\sum_{r=0}^{n}\binom{n}{r}a^{n-r}(-b)^r
=\sum_{r=0}^{n}(-1)^r\binom{n}{r}a^{n-r}b^r.
$$

The signs now alternate: positive, negative, positive, and so on, because $(-1)^r$ is $+1$ for even $r$ and $-1$ for odd $r$. The magnitudes of the coefficients are unchanged. In particular, $(1+x)^n$ has all positive coefficients, while $(1-x)^n$ alternates.

## 4. A fully worked expansion

Expand $(2a-b)^4$ and check the result.

**Step 1 — write the template.** Here the first term is $2a$, the second is $-b$, and $n=4$:

$$
(2a-b)^4=\sum_{r=0}^{4}\binom{4}{r}(2a)^{4-r}(-b)^r.
$$

**Step 2 — evaluate each term.** Using $\binom{4}{0}=1$, $\binom{4}{1}=4$, $\binom{4}{2}=6$, $\binom{4}{3}=4$, $\binom{4}{4}=1$:

| $r$ | Term |
| --- | --- |
| 0 | $1\cdot(2a)^4=16a^4$ |
| 1 | $4\cdot(2a)^3(-b)=-32a^3b$ |
| 2 | $6\cdot(2a)^2b^2=24a^2b^2$ |
| 3 | $4\cdot(2a)(-b)^3=-8ab^3$ |
| 4 | $1\cdot b^4=b^4$ |

**Step 3 — assemble.**

$$
(2a-b)^4=16a^4-32a^3b+24a^2b^2-8ab^3+b^4.
$$

**Sanity check.** The powers of $a$ and $b$ in each term add to $4$, and the signs alternate as required for a minus sign. Put $a=1,b=1$: the left side is $(2-1)^4=1$, while the right side gives $16-32+24-8+1=1$. The two agree, so the coefficients are consistent.

<learning-block type="mistake" title="Losing the minus in a minus">

The commonest error is expanding $(a-b)^n$ with every coefficient positive, as if it were $(a+b)^n$. The sign belongs to the second term: it contributes $(-b)^r=(-1)^r b^r$. Keep the $(-1)^r$ factor with each term until the end, and let $r$ be even or odd decide the sign. A second, quieter error is writing down $n$ terms instead of $n+1$ — remember that $r$ starts at $0$.

</learning-block>

## 5. When you only need one term

Expanding all $n+1$ terms is wasteful if the question asks for a single coefficient or the middle term. The same formula, isolated as $T_{r+1}=\binom{n}{r}a^{n-r}b^r$, is the tool for that job; the next lesson develops it and shows how to locate the middle of an expansion.

## Try it yourself

**A.** Expand $(1+x)^4$ fully.

<details><summary>Show the reasoning</summary>

Using $\binom{4}{0},\ldots,\binom{4}{4}=1,4,6,4,1$:

$$(1+x)^4=1+4x+6x^2+4x^3+x^4.$$

Check at $x=1$: left side $2^4=16$, right side $1+4+6+4+1=16$.

</details>

**B.** Expand $(a-2b)^3$.

<details><summary>Show the reasoning</summary>

$$(a-2b)^3=\binom{3}{0}a^3+\binom{3}{1}a^2(-2b)+\binom{3}{2}a(-2b)^2+\binom{3}{3}(-2b)^3,$$
$$=a^3-6a^2b+12ab^2-8b^3.$$

Check at $a=b=1$: $(1-2)^3=-1$ and $1-6+12-8=-1$, so the alternating signs are right.

</details>

**C.** How many terms are there in the expansion of $(1+x)^{12}$?

<details><summary>Show the reasoning</summary>

The index $r$ runs from $0$ to $12$, giving $12+1=13$ terms. The count depends only on $n$, not on the terms inside the bracket.

</details>

## Remember

- The theorem holds for a positive integer $n$ and gives $n+1$ terms.
- The coefficient of $a^{n-r}b^r$ is $\binom{n}{r}=\frac{n!}{r!(n-r)!}$.
- In every term the exponents of the two binomial terms add to $n$.
- For $(a-b)^n$ the sign of the $r$th term is $(-1)^r$; the magnitudes do not change.
- Use the whole expansion for small $n$, but move to the general term when only one term is wanted, as in **General and middle terms**.
