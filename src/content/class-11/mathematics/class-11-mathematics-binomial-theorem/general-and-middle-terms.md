## One term instead of thirteen

The expansion of $(1+x)^{12}$ has thirteen terms, but a question rarely wants all of them. It may ask for "the term containing $x^5$" or "the middle term". Writing out the whole series and then hunting for the answer is slow and error-prone. The binomial theorem hands us a single expression for any chosen term, so we can go straight to the one we need.

## 1. The general term

In $(a+b)^n$, the term numbered $r+1$ is

$$
T_{r+1}=\binom{n}{r}a^{n-r}b^r,\qquad r=0,1,2,\ldots,n.
$$

It is called the **general term** because one formula generates every term: put $r=0$ for the first, $r=1$ for the second, and so on. The index $r$ counts how many times the second term $b$ has been chosen; $T_{r+1}$ is that term's position in the expansion. Notice the deliberate offset — the $(r+1)$th term uses $\binom{n}{r}$, not $\binom{n}{r+1}$.

To find a requested term, follow two steps: write $T_{r+1}$ for the particular binomial, then use the power of the variable to solve for $r$ before evaluating the coefficient.

## 2. Locating the middle of an expansion

The number of terms is $n+1$, and whether there is a single middle term depends on the parity of $n$.

- **$n$ even:** $n+1$ is odd, so there is exactly one middle term. It occurs at $r=\frac n2$, and is the $\left(\frac n2+1\right)$th term:
  $$T_{n/2+1}=\binom{n}{n/2}a^{n/2}b^{n/2}.$$
- **$n$ odd:** $n+1$ is even, so there are **two** middle terms, at $r=\frac{n-1}{2}$ and $r=\frac{n+1}{2}$, namely the $\frac{n+1}{2}$th and $\frac{n+3}{2}$th terms.

For odd $n$ the two coefficients are equal because $\binom{n}{r}=\binom{n}{n-r}$; only the powers of $a$ and $b$ are interchanged. For even $n$ there is one coefficient, $\binom{n}{n/2}$, sitting at the centre.

## 3. A worked example with two middle terms

Find the middle terms in the expansion of $\left(2x-\dfrac{1}{x^2}\right)^9$.

**Step 1 — the general term.**

$$
T_{r+1}=\binom{9}{r}(2x)^{9-r}\left(-\frac{1}{x^2}\right)^r
=\binom{9}{r}2^{9-r}(-1)^r x^{9-r-2r}
=\binom{9}{r}2^{9-r}(-1)^r x^{9-3r}.
$$

**Step 2 — choose $r$.** Since $n=9$ is odd, there are two middle terms: $r=4$ and $r=5$.

**Step 3 — evaluate.**

$$
T_{5}=\binom{9}{4}2^{5}(-1)^4x^{-3}=126\cdot32\,x^{-3}=4032x^{-3},
$$

$$
T_{6}=\binom{9}{5}2^{4}(-1)^5x^{-6}=126\cdot16\cdot(-1)x^{-6}=-2016x^{-6}.
$$

So the middle terms are $\dfrac{4032}{x^3}$ and $-\dfrac{2016}{x^6}$.

**Sanity check.** The exponent $9-3r$ falls by $3$ each time $r$ increases by $1$, so moving from $r=4$ to $r=5$ should take $x^{-3}$ to $x^{-6}$ — it does. The signs alternate $(-1)^r$, giving positive then negative, as expected for a binomial with a minus sign. The two coefficients are not equal here because the numeric factors $2^{9-r}$ differ; only the bare binomial coefficients $\binom{9}{4}$ and $\binom{9}{5}$ are equal.

<learning-block type="mistake" title="Off by one in the term number">

A frequent error is to read "the 4th term" and substitute $r=4$. The formula is $T_{r+1}$, so the 4th term means $r=3$. The same slip affects middle terms: for odd $n$ the middle positions are $r=\frac{n-1}{2}$ and $r=\frac{n+1}{2}$, not $\frac n2$ (which is not even an integer). Always state $r$ explicitly before substituting, and check that your exponents change by the right amount from one term to the next.

</learning-block>

## 4. From terms to coefficients

The general term also answers coefficient questions. In $(1+x)^n$ the coefficient of $x^k$ is simply $\binom{n}{k}$, but in something like $(1+2x)^n$ the multiplier $2^r$ inside $T_{r+1}$ must be carried along: the coefficient of $x^k$ is $\binom{n}{k}2^k$. Confusing a *term* with its *coefficient* is the main source of wrong answers here, and the next lesson builds a systematic way to handle coefficients and the identities between them.

## Try it yourself

**A.** Find the 4th term in the expansion of $(1+2x)^7$.

<details><summary>Show the reasoning</summary>

The 4th term means $r=3$:

$$T_4=\binom{7}{3}(2x)^3=35\cdot8x^3=280x^3.$$

</details>

**B.** Find the middle term of $(1+x)^{10}$.

<details><summary>Show the reasoning</summary>

Here $n=10$ is even, so there is one middle term with $r=5$:

$$T_6=\binom{10}{5}x^5=252x^5.$$

</details>

**C.** Write down the two middle terms of $(1+x)^9$.

<details><summary>Show the reasoning</summary>

For odd $n=9$, take $r=4$ and $r=5$:

$$T_5=\binom{9}{4}x^4=126x^4,\qquad T_6=\binom{9}{5}x^5=126x^5.$$

The coefficients match because $\binom{9}{4}=\binom{9}{5}$.

</details>

## Remember

- The general term is $T_{r+1}=\binom{n}{r}a^{n-r}b^r$; the $(r+1)$th term uses $\binom{n}{r}$.
- Solve for $r$ from the exponent of the variable before calculating the coefficient.
- Even $n$ gives one middle term at $r=\frac n2$; odd $n$ gives two, at $r=\frac{n-1}{2}$ and $r=\frac{n+1}{2}$.
- Keep the $(-1)^r$ sign for a binomial with a minus sign.
- A term includes the power of the variable; a coefficient is only its numeric multiplier. The next lesson, **Coefficients and identities**, uses that distinction.
