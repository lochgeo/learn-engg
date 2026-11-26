## Your study plan for today

This chapter is four connected tools, not four formulas to memorise. A focused first pass takes about **1½ hours**, plus a short break:

| Stage | Time |
| --- | --- |
| Binomial expansion: theorem and counting argument | 20 min |
| General and middle terms | 20 min |
| Coefficients and identities | 20 min |
| Applications: constants, approximations, divisibility | 20 min |
| This mastery check | 25 min |

After each lesson, close the explanation and try its questions from a blank page. Mark a lesson complete only when you can say *why* the method applies, not just what answer it produced. Take a short break after the second stage.

Once you can solve these one at a time, use the **JEE Main timed practice** module for a $50$-minute mixed paper. Its value is in choosing a tool quickly under pressure.

## Choose the tool first

| Clue in the question | Start with |
| --- | --- |
| "expand fully" | $\sum_{r=0}^{n}\binom{n}{r}a^{n-r}b^r$, with signs $(-1)^r$ for a minus |
| "$(r+1)$th term" or "term containing $x^k$" | $T_{r+1}=\binom{n}{r}a^{n-r}b^r$; solve for $r$ from the exponent |
| "middle term" | $r=\frac n2$ for even $n$; $r=\frac{n-1}{2},\frac{n+1}{2}$ for odd $n$ |
| "coefficient of $x^k$" | The numeric multiplier only; keep factors such as $2^k$ |
| "sum of coefficients" | Substitute $x=1$ into the whole expression |
| "sum of even/odd coefficients" | Combine $P(1)$ and $P(-1)$ to get $2^{n-1}$ each |
| "greatest coefficient" | $\binom{n}{n/2}$ for even $n$; the equal central pair for odd $n$ |
| "term independent of $x$" | Set the exponent of $x$ in $T_{r+1}$ to zero |
| "approximate a power near 1" | First two or three terms when $|x|$ is small |
| "prove divisible by $k^2$" | Expand $(1+k)^n$ and remove $1+nk$ |

## Mastery check

Try every question without looking at the answer. The set gets harder as it goes.

### 1. A small expansion

Expand $(1+x)^4$ completely.

<details><summary>Answer and reasoning</summary>

The coefficients are $1,4,6,4,1$, so $(1+x)^4=1+4x+6x^2+4x^3+x^4$. Check at $x=1$: $16$ on both sides.

</details>

### 2. A named term

Find the 5th term of $(1+x)^8$.

<details><summary>Answer and reasoning</summary>

The 5th term means $r=4$: $T_5=\binom{8}{4}x^4=70x^4$. The offset $T_{r+1}$ is essential here.

</details>

### 3. Coefficient versus term

Find the coefficient of $x^3$ in $(1+x)^7$.

<details><summary>Answer and reasoning</summary>

The coefficient is $\binom{7}{3}=35$. The *term* would be $35x^3$; the question asks only for the number.

</details>

### 4. Sum of coefficients with an inner factor

Find the sum of all coefficients in $(1+3x)^5$.

<details><summary>Answer and reasoning</summary>

Set $x=1$ in the whole expression: $(1+3)^5=4^5=1024$. Using $2^5$ would ignore the factor $3$ inside the bracket.

</details>

### 5. A middle term with a minus sign

Find the middle term of $\left(2x-\dfrac{1}{x}\right)^6$.

<details><summary>Answer and reasoning</summary>

$T_{r+1}=\binom{6}{r}(2x)^{6-r}(-x^{-1})^r=\binom{6}{r}2^{6-r}(-1)^r x^{6-2r}$. With $n=6$ even, the middle has $r=3$:

$$T_4=\binom{6}{3}2^3(-1)^3x^0=20\cdot8\cdot(-1)=-160.$$

The middle term is the constant $-160$; the sign is negative because $r=3$ is odd.

</details>

### 6. A constant term

Find the term independent of $x$ in $\left(2x^2-\dfrac{1}{x}\right)^9$.

<details><summary>Answer and reasoning</summary>

$T_{r+1}=\binom{9}{r}(2x^2)^{9-r}(-x^{-1})^r=\binom{9}{r}2^{9-r}(-1)^r x^{18-3r}$. Independence requires $18-3r=0$, so $r=6$. Then

$$T_7=\binom{9}{6}2^3(-1)^6=84\cdot8=672.$$

The constant term is $672$.

</details>

### 7. Even and odd coefficients

Show that the even-index coefficients of $(1+x)^7$ add to the same value as the odd-index ones, and find that value.

<details><summary>Answer and reasoning</summary>

From $P(1)$ the total is $2^7=128$; from $P(-1)$ the alternating sum is $0$, so even sum = odd sum. Each is $2^{6}=64$. Directly, even indices give $1+21+35+7=64$ and odd indices give $7+35+21+1=64$.

</details>

### 8. Approximation with three terms

Use the first three terms of the binomial expansion to estimate $(1.01)^{10}$.

<details><summary>Answer and reasoning</summary>

$$(1+0.01)^{10}\approx1+10(0.01)+\binom{10}{2}(0.01)^2=1+0.1+45(0.0001)=1.1045.$$

The next term, $\binom{10}{3}(0.01)^3=0.00012$, shows the figure is good to about three decimal places.

</details>

### 9. Symmetry of coefficients

If $\binom{n}{2}=\binom{n}{7}$, find $n$.

<details><summary>Answer and reasoning</summary>

By symmetry $\binom{n}{r}=\binom{n}{n-r}$, so equality of $\binom{n}{2}$ and $\binom{n}{7}$ with distinct indices requires $n=2+7=9$. Check: $\binom{9}{2}=\binom{9}{7}=36$.

</details>

### 10. A divisibility proof without expansion

Prove that $4^n-3n-1$ is divisible by $9$ for every positive integer $n$.

<details><summary>Answer and reasoning</summary>

Write $4=1+3$:

$$4^n=(1+3)^n=1+3n+\binom{n}{2}9+\binom{n}{3}27+\cdots.$$

Hence $4^n-3n-1=9\left[\binom{n}{2}+\binom{n}{3}3+\cdots\right]$, an integer multiple of $9$. Checks: $n=1$ gives $0$; $n=2$ gives $16-6-1=9$.

</details>

## Self-check

You are ready for the timed set when you can:

- expand a binomial with the correct number of terms and alternating signs;
- write $T_{r+1}$ from memory and solve for $r$ from a power of $x$;
- find one or two middle terms and justify the count from the parity of $n$;
- tell a coefficient from a term, including numeric factors inside the brackets;
- obtain sums of coefficients from $P(1)$ and $P(-1)$;
- find a constant term and keep its sign and numeric multiplier;
- approximate a power near $1$ and say when the approximation breaks down;
- prove a divisibility claim by expanding $(1+k)^n$;
- check an answer by a substitution such as $x=1$ or a small value of $n$.

If one item still feels shaky, revisit that lesson and redo its questions before hiding the answers.
