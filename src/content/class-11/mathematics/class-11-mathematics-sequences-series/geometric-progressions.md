## Multiplication instead of addition

A ball dropped from a height bounces to a fixed fraction of its previous height; a population grows by a fixed percentage each year; a chessboard legend doubles the grains on every square. In each case the step is **multiplicative**, not additive. The list $2,6,18,54,\ldots$ does not add $4$ each time — it multiplies by $3$. This is a **geometric progression**, and its sum formula has one extra condition that the arithmetic formula did not: sometimes an infinite sum is possible at all.

## 1. Definition and notation

A sequence $a_1,a_2,a_3,\ldots$ is a **geometric progression** (GP) if

$$
\frac{a_{n+1}}{a_n}=r\quad\text{for every }n,
$$

where $r$ is a fixed nonzero number called the **common ratio**. The first term is $a$. Since each term is the previous one times $r$,

$$
a_2=ar,\quad a_3=ar^2,\quad a_4=ar^3.
$$

After $n-1$ multiplications we reach

$$
\boxed{\,a_n=ar^{\,n-1}\,}.
$$

Again the exponent is $n-1$, not $n$: the first term has had no multiplications. If $r>0$ all terms keep the sign of $a$; if $r<0$ the signs alternate.

## 2. Sum of the first $n$ terms

Let $S_n=a+ar+ar^2+\cdots+ar^{n-1}$. Multiply the whole sum by $r$:

$$
rS_n=ar+ar^2+\cdots+ar^{n-1}+ar^{n}.
$$

Subtracting cancels every middle power of $r$, leaving $S_n-rS_n=a-ar^n$, so

$$
\boxed{\,S_n=\frac{a(1-r^n)}{1-r}=\frac{a(r^n-1)}{r-1}\quad (r\ne1)\,}.
$$

The two versions are identical; choose whichever keeps the signs tidy. For $r=1$ every term is $a$, so the separate answer is $S_n=na$ — never substitute $r=1$ into either fraction.

## 3. Sum to infinity, and when it exists

Suppose $|r|<1$. Then $r^n\to0$ as $n\to\infty$, so $S_n=\dfrac{a(1-r^n)}{1-r}$ approaches a finite limit:

$$
\boxed{\,S_\infty=\frac{a}{1-r}\quad\text{only when }|r|<1\,}.
$$

If $|r|\ge1$ the terms do not shrink to zero and the infinite sum **does not converge**; for $r=1$ the partial sums grow in magnitude without settling, and for $r=-1$ they oscillate. This condition is not a technicality — it is the most tested point in the topic. For example, $1,2,4,8,\ldots$ has $r=2$ and no finite sum to infinity, whereas $1,\tfrac12,\tfrac14,\ldots$ has sum $2$.

## 4. Geometric mean

If $a,b,c$ are consecutive terms of a GP with positive terms, then $b/a=c/b$, so

$$
b^2=ac\quad\Longrightarrow\quad b=\sqrt{ac}.
$$

We call $b$ the **geometric mean** of $a$ and $c$. For positive numbers it is the counterpart of the arithmetic mean $\tfrac12(a+c)$, and the two means will be compared in a later lesson. Inserting $m$ geometric means between positive $a$ and $c$ requires $r=\left(\dfrac ca\right)^{1/(m+1)}$, again because there are $m+1$ equal steps.

## 5. A fully worked example

For the GP $2,6,18,54,\ldots$:

**(i) Find the sixth term.** Here $a=2$ and $r=6/2=3$:

$$
a_6=ar^{5}=2(3^5)=2(243)=486.
$$

**(ii) Find the sum of the first six terms.** Using $r>1$, the second form of the sum is tidier:

$$
S_6=\frac{a(r^6-1)}{r-1}=\frac{2(3^6-1)}{3-1}=\frac{2(729-1)}{2}=728.
$$

**(iii) Decide whether the infinite sum exists.** Since $|r|=3>1$, it does not; the terms grow and no finite total is approached.

**Sanity check.** Listing the six terms gives $2+6+18+54+162+486=728$, matching the formula. The last term $486$ is more than half of the total $728$, which is exactly what we expect when the ratio is greater than $1$ — early terms are negligible compared with late ones. For contrast, the GP $1,\tfrac12,\tfrac14,\ldots$ has $S_\infty=\dfrac{1}{1-1/2}=2$, and its partial sums $1,\ 1.5,\ 1.75,\ 1.875,\ldots$ visibly approach $2$.

<learning-block type="mistake" title="Using the infinite-sum formula without checking the ratio">

Applying $S_\infty=\dfrac{a}{1-r}$ to every GP produces nonsense: for $a=2,r=3$ it gives $2/(1-3)=-1$, while the terms are positive and growing. Check $|r|<1$ **before** using the formula. A second common slip is to take the ratio in the wrong direction; $r=a_2/a_1$, not $a_1/a_2$. Verify your $r$ by multiplying the second term by it and checking that you recover the third.

</learning-block>

## 6. Where this leads

A GP is one example of a sequence whose general term is known and whose sum can be found by a systematic trick — here, multiplying by $r$ and subtracting. The same idea of writing a general term and summing it drives the **special series** in the next lesson, where we add powers of the integers rather than powers of a fixed ratio.

## Try it yourself

**A.** In a GP, $a_3=18$ and $a_5=162$. Find $a$ and $r$ (take $r>0$).

<details><summary>Show the reasoning</summary>

$a_5/a_3=r^2=162/18=9$, so $r=3$. Then $a_3=ar^2=9a=18$, giving $a=2$. Check: $a_5=2(3^4)=162$.

</details>

**B.** Find the sum to infinity of $5+\dfrac52+\dfrac54+\cdots$.

<details><summary>Show the reasoning</summary>

Here $a=5$, $r=\tfrac12$, and $|r|<1$, so

$$S_\infty=\frac{5}{1-\tfrac12}=10.$$

The partial sums $5,7.5,8.75,\ldots$ approach $10$, so the magnitude is sensible.

</details>

**C.** Insert two geometric means between $3$ and $81$ (positive terms).

<details><summary>Show the reasoning</summary>

There are $2+1=3$ steps, so $r^3=81/3=27$, giving $r=3$. The means are $9$ and $27$: the sequence $3,9,27,81$ has constant ratio $3$.

</details>

## Remember

- A GP has constant ratio $r=a_{n+1}/a_n$ and general term $a_n=ar^{\,n-1}$.
- $\displaystyle S_n=\frac{a(1-r^n)}{1-r}$ for $r\ne1$; if $r=1$, use $S_n=na$.
- $\displaystyle S_\infty=\frac{a}{1-r}$ exists only when $|r|<1$.
- The geometric mean of positive $a,c$ is $\sqrt{ac}$; inserting $m$ means needs $m+1$ steps.
- Next: sums of powers of integers, found by identifying a general term and adding it.
