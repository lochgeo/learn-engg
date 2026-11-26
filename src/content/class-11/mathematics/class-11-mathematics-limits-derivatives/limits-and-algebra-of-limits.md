## Why "approaching" is different from "being there"

Take $f(x)=\dfrac{x^2-1}{x-1}$. At $x=1$ the formula gives $\dfrac00$, so $f(1)$ does not exist. But feed the formula values that creep up on $1$ — $0.9,\ 0.99,\ 1.01,\ 1.1$ — and the outputs are $1.9,\ 1.99,\ 2.01,\ 2.1$. They gather around $2$. The question "what does $f$ approach as $x$ approaches $1$?" has a clean answer even though "what is $f(1)$?" has none. A limit is precisely that question: it describes behaviour *near* a point, not *at* the point.

## 1. The definition

We write

$$
\lim_{x\to a}f(x)=L
$$

and read it as "the limit of $f(x)$ as $x$ tends to $a$ is $L$". It means that by taking $x$ sufficiently close to $a$ — but never equal to $a$ — we can force $f(x)$ as close to $L$ as we please. In precise language: for every $\varepsilon>0$ there exists $\delta>0$ such that $0<|x-a|<\delta$ implies $|f(x)-L|<\varepsilon$. The condition $0<|x-a|$ is what excludes the point itself; the limit does not care how $f$ behaves at $a$.

The symbol $\lim$ asks for a number $L$ (which may be $\pm\infty$ in the extended sense), not for a method. Finding it is a separate problem.

## 2. Left-hand and right-hand limits

Values of $x$ can approach $a$ from either side, and the two approaches may give different answers.

- The **left-hand limit** is $\displaystyle\lim_{x\to a^-}f(x)$: $x<a$ and moving toward $a$.
- The **right-hand limit** is $\displaystyle\lim_{x\to a^+}f(x)$: $x>a$ and moving toward $a$.

The two-sided limit exists exactly when these agree:

$$
\lim_{x\to a}f(x)=L \iff \lim_{x\to a^-}f(x)=\lim_{x\to a^+}f(x)=L.
$$

A quick illustration is $f(x)=\dfrac{|x|}{x}$ for $x\ne0$. For $x>0$ it equals $1$; for $x<0$ it equals $-1$. So the right-hand limit is $1$, the left-hand limit is $-1$, and the two-sided limit at $0$ does not exist.

## 3. Limits you can read off directly

Two families need no trickery:

- If $p$ is a **polynomial**, then $\lim_{x\to a}p(x)=p(a)$: just substitute.
- If $f(x)=\dfrac{p(x)}{q(x)}$ is **rational** and $q(a)\ne0$, then $\lim_{x\to a}f(x)=\dfrac{p(a)}{q(a)}$.

If $q(a)=0$ but $p(a)\ne0$, the magnitude of $f$ grows without bound and the two-sided limit does not exist. If both $p(a)=0$ and $q(a)=0$, we meet the indeterminate form $\dfrac00$: the direct substitution fails, but a limit may still exist. That case calls for algebra, not for a new rule.

## 4. The algebra of limits

Once individual limits are known, they can be combined. If $\lim_{x\to a}f(x)=L$ and $\lim_{x\to a}g(x)=M$ both exist as finite numbers, then

$$
\lim_{x\to a}\big(f(x)\pm g(x)\big)=L\pm M,
$$

$$
\lim_{x\to a}\big(f(x)\,g(x)\big)=LM,
$$

$$
\lim_{x\to a}\frac{f(x)}{g(x)}=\frac{L}{M}\quad\text{provided }M\ne0,
$$

and for an integer $n\ge1$, $\lim_{x\to a}[f(x)]^n=L^n$.

These are tools, not universal laws. Each one requires the **component limits to exist**, and the quotient rule additionally requires the denominator's limit to be non-zero. When those conditions fail, the rules say nothing; they do not turn $\dfrac00$ into an answer. For $\dfrac00$, $\dfrac{\infty}{\infty}$, $\infty-\infty$ and similar **indeterminate forms**, simplify the expression first — factorise, rationalise or use a standard limit — and only then apply the rules.

## 5. A worked example

Find $\displaystyle\lim_{x\to2}\frac{x^3-8}{x-2}$.

**Step 1 — diagnose.** Substituting $x=2$ gives numerator $2^3-8=0$ and denominator $2-2=0$, so this is the form $\dfrac00$. The quotient rule cannot be used because the denominator's limit is $0$.

**Step 2 — remove the cause.** Factor a difference of cubes:

$$
x^3-8=x^3-2^3=(x-2)(x^2+2x+4).
$$

For $x\ne2$ we may cancel the common factor:

$$
\frac{x^3-8}{x-2}=x^2+2x+4.
$$

Cancelling is legitimate because a limit never evaluates the expression at $x=2$ itself.

**Step 3 — take the limit of the simpler function.** It is a polynomial, so substitute:

$$
\lim_{x\to2}(x^2+2x+4)=4+4+4=12.
$$

**Sanity check.** At $x=2.01$ the original expression is $\dfrac{2.01^3-8}{0.01}\approx\dfrac{0.1206}{0.01}\approx12.06$, close to $12$. The answer is consistent.

<learning-block type="mistake" title="Treating 0/0 as a number">

The most common error is substituting first, obtaining $\dfrac00$, and then "using the quotient rule" to conclude that the limit is $0$, $1$ or undefined. $\dfrac00$ is an *indeterminate form*: it tells you that more work is needed, not what the answer is. Here the same fraction tends to $12$. A second error is cancelling a factor and then substituting into the *original* expression; once you cancel, the simplified function is the one you must evaluate.

</learning-block>

## Try it yourself

**A.** Evaluate $\displaystyle\lim_{x\to3}\frac{x^2-9}{x-3}$.

<details><summary>Show the reasoning</summary>

Substitution gives $\dfrac00$. Factor: $x^2-9=(x-3)(x+3)$, so for $x\ne3$ the fraction equals $x+3$. Hence the limit is $3+3=6$.

</details>

**B.** Evaluate $\displaystyle\lim_{x\to0}\frac{2x+1}{x+3}$.

<details><summary>Show the reasoning</summary>

The denominator's limit is $3\ne0$, so the quotient rule applies directly: $\dfrac{2(0)+1}{0+3}=\dfrac13$.

</details>

**C.** Does $\displaystyle\lim_{x\to2}\frac{x^2+1}{x-2}$ exist?

<details><summary>Show the reasoning</summary>

The numerator tends to $5$ while the denominator tends to $0$. From the right the fraction tends to $+\infty$; from the left to $-\infty$. The left- and right-hand limits disagree, so the two-sided limit does not exist. This is *not* an indeterminate form — it is genuine blow-up.

</details>

## Remember

- A limit describes behaviour near $a$; the value of $f(a)$ is irrelevant.
- The two-sided limit exists only when the left- and right-hand limits agree.
- Algebra of limits requires the separate limits to exist, and a non-zero denominator limit for a quotient.
- $\dfrac00$ is a signal to simplify, not an answer.
- Next we collect the standard limits that handle the forms algebra alone cannot.
