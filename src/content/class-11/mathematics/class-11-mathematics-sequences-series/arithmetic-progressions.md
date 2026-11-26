## The same step, every time

A sequence that climbs by the same amount at each step is everywhere: $3,7,11,15,\ldots$ for seat numbers in rows, or the simple interest added to a deposit each year. The step is constant, so there are no surprises — and that single fact is enough to write down both the $n$th term and the sum of the first $n$ terms without listing them. Such a sequence is an **arithmetic progression**.

## 1. Definition and notation

A sequence $a_1,a_2,a_3,\ldots$ is an **arithmetic progression** (AP) if

$$
a_{n+1}-a_n=d\quad\text{for every }n,
$$

where $d$ is a constant called the **common difference**. We write the first term as $a$ (so $a=a_1$). If $d>0$ the terms increase, if $d<0$ they decrease, and if $d=0$ every term equals $a$.

The difference is found by subtracting any term from the one after it: $d=a_2-a_1=a_3-a_2$. Because it is constant, we can also recover it from two far-apart terms:

$$
d=\frac{a_q-a_p}{q-p}\qquad(q\ne p).
$$

## 2. The general term

Starting from $a_1=a$, each step adds $d$:

$$
a_2=a+d,\quad a_3=a+2d,\quad a_4=a+3d.
$$

The pattern is that the term at position $n$ has had $n-1$ steps applied, not $n$:

$$
\boxed{\,a_n=a+(n-1)d\,}.
$$

A useful companion form is $a_n=dn+(a-d)$, which shows that an AP's general term is always **linear** in $n$. Conversely, if the general term is linear in $n$, the sequence is an AP, and its common difference is the coefficient of $n$.

## 3. The sum of the first $n$ terms

Let $l=a_n=a+(n-1)d$ be the last term we want to include. Write the sum forwards and backwards:

$$
S_n=a+(a+d)+(a+2d)+\cdots+(l-d)+l,
$$
$$
S_n=l+(l-d)+(l-2d)+\cdots+(a+d)+a.
$$

Adding column by column, every column has the same total $a+l$, and there are $n$ columns. Hence $2S_n=n(a+l)$, or

$$
\boxed{\,S_n=\frac{n}{2}(a+l)=\frac{n}{2}\big[2a+(n-1)d\big]\,}.
$$

Use the first form when the last term is known, and the second when $a$ and $d$ are known. Both need the same three ingredients: how many terms, the first term and either the last term or the common difference.

## 4. The arithmetic mean

If three numbers $a,b,c$ are in AP, the equal steps give $b-a=c-b$, so

$$
b=\frac{a+c}{2}.
$$

We call $b$ the **arithmetic mean** of $a$ and $c$. More generally, inserting $m$ numbers between $a$ and $c$ to form an AP requires a common difference $d=\dfrac{c-a}{m+1}$, because there are $m+1$ equal steps from $a$ to $c$.

## 5. A fully worked example

The sequence $3,7,11,15,\ldots$ is an AP.

**(i) Find the 20th term.** Here $a=3$ and $d=7-3=4$:

$$
a_{20}=a+(20-1)d=3+19(4)=3+76=79.
$$

**(ii) Find the sum of the first 20 terms.** Using the last-term form,

$$
S_{20}=\frac{20}{2}(a+a_{20})=10(3+79)=10(82)=820.
$$

**(iii) Which term equals $99$?** Set $a_n=99$:

$$
3+(n-1)4=99\ \Rightarrow\ 4(n-1)=96\ \Rightarrow\ n=25.
$$

**Sanity check.** The general term simplifies to $a_n=4n-1$. It gives $a_1=3$, $a_4=15$ and $a_{20}=79$, matching the list. The average of the first and last of the twenty terms is $(3+79)/2=41$, and $20\times41=820$, confirming the sum. Finally $a_{25}=4(25)-1=99$, so part (iii) is consistent.

<learning-block type="mistake" title="One step too many in the nth term">

The most common error is writing $a_n=a+nd$ instead of $a+(n-1)d$. The first term has had **zero** steps, so $a_1=a+0\cdot d$; by position $n$ there have been $n-1$ steps. A quick guard is to substitute $n=1$ into your formula: it must return $a$. A second error is using $n(a+l)$ for the sum and forgetting the factor $\tfrac12$; check a one-term case ($S_1=a$) to catch it.

</learning-block>

## 6. Recognising an AP in disguise

Because $a_n$ is linear in $n$, a sequence defined by $a_n=pn+q$ is an AP with common difference $p$. This is often faster than computing differences term by term. Conversely, if the partial sums are quadratic with no constant term, say $S_n=\alpha n^2+\beta n$, then $a_n=S_n-S_{n-1}=2\alpha n+(\beta-\alpha)$, an AP with difference $2\alpha$. These two tests appear frequently in examination questions and link back to the relation from **Sequences and series**.

A related but different pattern is a geometric progression, where the ratio, not the difference, is constant. We turn to it next.

## Try it yourself

**A.** For the AP $12,8,4,0,\ldots$, find $a_{15}$ and $S_{15}$.

<details><summary>Show the reasoning</summary>

$a=12$, $d=-4$. Then $a_{15}=12+14(-4)=12-56=-44$, and

$$S_{15}=\frac{15}{2}(12+(-44))=\frac{15}{2}(-32)=-240.$$

The negative terms are expected once the sequence passes zero, so a negative sum is reasonable.

</details>

**B.** Insert five arithmetic means between $4$ and $34$.

<details><summary>Show the reasoning</summary>

There are $5+1=6$ equal steps, so $d=(34-4)/6=5$. The inserted numbers are $9,14,19,24,29$. Check: $4,9,14,19,24,29,34$ has six differences of $5$.

</details>

**C.** The third term of an AP is $10$ and the eighth term is $25$. Find the first term and the common difference.

<details><summary>Show the reasoning</summary>

$a+2d=10$ and $a+7d=25$. Subtracting gives $5d=15$, so $d=3$ and $a=10-6=4$. Check: $a_8=4+7(3)=25$.

</details>

## Remember

- An AP has constant difference $d=a_{n+1}-a_n$ and general term $a_n=a+(n-1)d$.
- $\displaystyle S_n=\frac n2(a+l)=\frac n2[2a+(n-1)d]$, with $l=a_n$.
- The arithmetic mean of $a$ and $c$ is $\dfrac{a+c}{2}$; inserting $m$ means needs $m+1$ steps.
- Always test your $n$th-term formula at $n=1$; it must give the first term.
- Next: replace the constant difference by a constant ratio to obtain a geometric progression.
