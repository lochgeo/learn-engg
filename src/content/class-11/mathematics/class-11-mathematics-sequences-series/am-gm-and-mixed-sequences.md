## Two ways of being "average"

Of all rectangles with perimeter $20\ \text{cm}$, which has the largest area? If the sides are $x$ and $10-x$, the area is $x(10-x)$ — and the answer turns out to be the square. The tool that settles this in one line is the **AM–GM inequality**. It compares the two means we have already met: the arithmetic mean belongs to an AP, the geometric mean to a GP, and for positive numbers the arithmetic mean is never smaller. The second half of this lesson collects sequences that are not pure APs or GPs but can still be summed by rewriting their general term.

## 1. The inequality for two numbers

For positive $a$ and $b$,

$$
\frac{a+b}{2}\ \ge\ \sqrt{ab}.
$$

The proof is a single square being non-negative:

$$
(\sqrt a-\sqrt b)^2\ge0\ \Rightarrow\ a+b-2\sqrt{ab}\ge0\ \Rightarrow\ \frac{a+b}{2}\ge\sqrt{ab}.
$$

Equality holds **only** when $\sqrt a=\sqrt b$, that is when $a=b$. The left side $\tfrac12(a+b)$ is the arithmetic mean (the middle term of the AP $a,\tfrac{a+b}{2},b$); the right side $\sqrt{ab}$ is the geometric mean (the middle term of the GP $a,\sqrt{ab},b$). The inequality therefore says that, for the same two positive endpoints, the AP's middle term is at least the GP's middle term.

For $n$ positive numbers the same statement is

$$
\frac{a_1+a_2+\cdots+a_n}{n}\ge(a_1a_2\cdots a_n)^{1/n},
$$

again with equality only when all $n$ numbers are equal. We mainly use the two-number form.

## 2. A minimisation tool

If $x>0$ and $k>0$, applying AM–GM to $x$ and $k/x$ gives

$$
x+\frac{k}{x}\ \ge\ 2\sqrt{x\cdot\frac{k}{x}}=2\sqrt{k},
$$

with equality when $x=k/x$, i.e. $x=\sqrt k$. So the expression has a least value $2\sqrt k$, attained at $x=\sqrt k$. No calculus is needed.

**Worked example.** Minimise $x+\dfrac9x$ for $x>0$.

AM–GM gives $x+\dfrac9x\ge2\sqrt9=6$, with equality when $x=\dfrac9x$, so $x^2=9$ and $x=3$ (the positive root). At $x=3$ the expression is $3+3=6$. As a check, the derivative $1-9/x^2$ vanishes at $x=3$ and the expression grows both as $x\to0^+$ and as $x\to\infty$, so $6$ really is the minimum.

<learning-block type="mistake" title="AM–GM needs positive numbers">

Applying AM–GM to $-2$ and $-8$ would give $(-5)\ge4$, which is absurd; the inequality is stated for **positive** terms only. Also, the inequality gives a lower bound but not where it is attained — always state the equality condition $x=\sqrt k$ when a minimum is asked for. Finally, an upper bound cannot be found this way: $x+9/x$ has no maximum for $x>0$.

</learning-block>

## 3. Mixed sequence: general term from partial sums

A sequence may be given by its partial sums rather than its terms. The relation from the first lesson is the whole method:

$$
a_n=S_n-S_{n-1}\quad(n\ge2),\qquad a_1=S_1.
$$

**Example.** If $S_n=2^n-1$, then for $n\ge2$,

$$
a_n=(2^n-1)-(2^{n-1}-1)=2^n-2^{n-1}=2^{n-1},
$$

and $a_1=S_1=1$, which agrees with $2^{0}$. The sequence is the GP $1,2,4,8,\ldots$. Check: its first three terms sum to $7=2^3-1$.

## 4. Mixed sequence: telescoping

Sometimes a term can be written as a difference of two consecutive quantities, so all the middle pieces cancel. Since

$$
\frac{1}{k(k+1)}=\frac1k-\frac1{k+1},
$$

we obtain

$$
\sum_{k=1}^{n}\frac{1}{k(k+1)}=\left(1-\frac12\right)+\left(\frac12-\frac13\right)+\cdots+\left(\frac1n-\frac1{n+1}\right)=1-\frac1{n+1}=\frac{n}{n+1}.
$$

Check at $n=1$: the single term is $\tfrac12$ and the formula gives $\tfrac12$. The same decomposition works for many fractions whose denominator factors into consecutive terms.

## 5. Mixed sequence: arithmetico-geometric terms

A term that is an AP expression times a GP expression,

$$
a_k=[a+(k-1)d]\,r^{\,k-1},
$$

is called **arithmetico-geometric**. To add such terms, multiply the sum by $r$ and subtract, just as for a GP. For the infinite case with $|r|<1$,

$$
S=a+(a+d)r+(a+2d)r^2+\cdots,\qquad rS=ar+(a+d)r^2+\cdots,
$$

so $(1-r)S=a+dr+dr^2+\cdots=a+\dfrac{dr}{1-r}$, giving

$$
\boxed{\,S=\frac{a}{1-r}+\frac{dr}{(1-r)^2}\quad(|r|<1)\,}.
$$

**Worked example.** Sum $1+2x+3x^2+4x^3+\cdots$ for $|x|<1$, and find the value at $x=\tfrac12$.

Here $a=1$, $d=1$ and $r=x$:

$$
S=\frac{1}{1-x}+\frac{x}{(1-x)^2}=\frac{(1-x)+x}{(1-x)^2}=\frac{1}{(1-x)^2}.
$$

At $x=\tfrac12$ this is $\dfrac{1}{(1/2)^2}=4$. As a check, the first four terms at $x=\tfrac12$ are $1+1+0.75+0.5=3.25$, and the remaining tail $4(0.125)+5(0.0625)+\cdots$ is positive and of about the right size to reach $4$.

## 6. Choosing a method

The chapter now has several tools. Ask what the general term looks like: a constant difference suggests the AP formulas; a constant ratio suggests the GP formulas; a polynomial in $k$ suggests the standard power sums; a difference of neighbouring terms suggests telescoping; an AP factor times a GP factor suggests multiply-and-subtract. The next module practises making that choice quickly, and the timed paper tests it under pressure.

## Try it yourself

**A.** Minimise $4x+\dfrac{25}{x}$ for $x>0$.

<details><summary>Show the reasoning</summary>

Apply AM–GM to $4x$ and $\dfrac{25}{x}$: their sum is at least $2\sqrt{4x\cdot 25/x}=2\sqrt{100}=20$. Equality requires $4x=25/x$, so $x^2=25/4$ and $x=5/2$. At that point $10+10=20$.

</details>

**B.** A sequence has $S_n=n^3$. Find $a_1$, $a_2$ and $a_n$.

<details><summary>Show the reasoning</summary>

$a_1=S_1=1$, and $a_2=S_2-S_1=8-1=7$. For $n\ge2$,

$$a_n=n^3-(n-1)^3=3n^2-3n+1.$$

Check at $n=2$: $12-6+1=7$.

</details>

**C.** Find $\displaystyle\sum_{k=1}^{n}\frac{1}{(k+1)(k+2)}$.

<details><summary>Show the reasoning</summary>

Since $\dfrac{1}{(k+1)(k+2)}=\dfrac{1}{k+1}-\dfrac{1}{k+2}$, the sum telescopes to $\dfrac12-\dfrac{1}{n+2}=\dfrac{n}{2(n+2)}$. Check at $n=1$: $\tfrac12-\tfrac13=\tfrac16$, and $\tfrac{1}{2\cdot3}=\tfrac16$.

</details>

## Remember

- For positive $a,b$: $\dfrac{a+b}{2}\ge\sqrt{ab}$, with equality exactly when $a=b$.
- For $x>0$, $x+\dfrac{k}{x}\ge2\sqrt{k}$, attained at $x=\sqrt k$.
- $a_n=S_n-S_{n-1}$ recovers a sequence from its partial sums.
- Telescoping works when a term is written as a difference of neighbouring terms.
- An arithmetico-geometric sum with $|r|<1$ is $\dfrac{a}{1-r}+\dfrac{dr}{(1-r)^2}$.
- Next: a practice module that asks which tool to reach for, then a timed paper.
