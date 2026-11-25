## Why "less than" needs a number line

A lift notice saying "maximum 8 people" does not pick out one exact number; it describes a whole set of allowed loads. The same thing happens with a temperature range, a budget cap or a passing mark. An equality pins down a single value, while an **inequality** describes a region of the number line. This module builds the vocabulary and the order rules that make those regions precise, so later modules can solve for the unknown inside them.

Read $a<b$ as a statement about position: $a$ lies to the **left** of $b$ on the number line. Equivalently, the difference $b-a$ is positive. The picture tells you which side to shade; the difference tells you which algebra is legal.

## 1. Order on the real numbers

For real numbers $a$ and $b$,

$$a<b\iff b-a>0,\qquad a>b\iff a-b>0.$$

Exactly one of $a<b$, $a=b$ or $a>b$ holds (trichotomy), and $a<b$ together with $b<c$ implies $a<c$ (transitivity). These are properties of the real numbers as an **ordered field**; they are what make inequality manipulation valid.

Two order-preserving rules follow directly from what "positive" means:

- **Addition.** If $a<b$ and $c$ is any real number, then $a+c<b+c$, because $(b+c)-(a+c)=b-a>0$.
- **Multiplication by a positive.** If $a<b$ and $c>0$, then $ac<bc$, because $bc-ac=c(b-a)>0$ is a product of two positive numbers.

**Multiplication by a negative reverses the order.** Let $a<b$ and $c<0$. Then $-c>0$, so $(-c)(b-a)>0$. Expanding gives $ac-bc>0$, hence $ac>bc$. Division by $c$ is multiplication by $1/c$, which has the same sign as $c$, so division by a negative reverses the inequality too.

<learning-block type="concept" title="The reversal is a theorem">

Multiplying or dividing an inequality by a negative number **reverses** the sign; adding, subtracting, multiplying or dividing by a positive number does not. Multiplying by $-1$ reflects the number line, so left and right swap. This is why the reversal must be applied to *every* part of a compound inequality.

</learning-block>

## 2. Interval notation

An interval is a name for a connected piece of the number line. The table lists the standard forms for real $a<b$.

| Inequality | Interval | Endpoints |
| --- | --- | --- |
| $a<x<b$ | $(a,b)$ | both excluded |
| $a\le x\le b$ | $[a,b]$ | both included |
| $a<x\le b$ | $(a,b]$ | left excluded, right included |
| $a\le x<b$ | $[a,b)$ | left included, right excluded |
| $x<a$ | $(-\infty,a)$ | $a$ excluded |
| $x\le a$ | $(-\infty,a]$ | $a$ included |
| $x>a$ | $(a,\infty)$ | $a$ excluded |
| $x\ge a$ | $[a,\infty)$ | $a$ included |

A round bracket means the endpoint is not a solution, a square bracket means it is. The symbol $\infty$ is not a real number, so it always takes a round bracket. Set-builder notation says the same thing in words: $(a,b]=\{x\in\mathbb R: a<x\le b\}$.

## 3. Two relations worth deriving

**Reciprocals.** If $a$ and $b$ have the same sign and $a<b$, then $\dfrac1b<\dfrac1a$. Indeed $ab>0$, so dividing $a<b$ by $ab$ gives $\dfrac1b<\dfrac1a$. The "same sign" condition is essential: from $-1<2$ we get $\frac12>-1$, not $\frac12<-1$.

**Squares.** Since $\sqrt{x^2}=|x|$ and squaring is increasing on non-negative numbers,

$$x^2<k^2\iff |x|<k\iff -k<x<k\qquad(k>0).$$

This is not the same as $x<k$. For example, $x^2<9$ keeps $-4$ out but also keeps $-2$ in; its solution is $(-3,3)$. The condition $k>0$ matters: $x^2<0$ has no real solution at all.

## 4. A fully worked compound inequality

Solve $-5\le 3-2x<7$ and write the solution as an interval.

The chain means two conditions at once: $-5\le 3-2x$ **and** $3-2x<7$. Subtract $3$ from every part:

$$-8\le -2x<4.$$

Now divide every part by $-2$ and reverse both inequalities:

$$4\ge x>-2,\quad\text{that is}\quad -2<x\le 4.$$

The solution set is $(-2,4]$.

**Sanity check.** Try $x=0$: $3-0=3$, which lies between $-5$ and $7$, so $0$ must be included — it is. Try the endpoints: $x=4$ gives $3-8=-5$, allowed because the left inequality is non-strict; $x=-2$ gives $3+4=7$, excluded because the right one is strict. Try $x=5$: $3-10=-7<-5$, correctly outside.

## 5. A common mistake

<learning-block type="mistake" title="Reversing only one side of a chain">

From $-8\le -2x<4$, a common slip is to reverse the left sign but forget the right, or to write $4\ge x<4$ after turning only one of them. The correct result is $4\ge x>-2$. A chain is one object: dividing by a negative reflects the whole number line, so **both** inequality signs must turn. The safe habit is to split the chain into two inequalities, solve each separately and intersect the answers.

</learning-block>

## Try it yourself

**1.** Write "$x\ge -1$ and $x<6$" in interval notation.

<details><summary>Show the reasoning</summary>

The lower bound is included and the upper bound is excluded, so the set is $[-1,6)$. The number $-1$ is a solution; $6$ is not.

</details>

**2.** Compare $\dfrac59$ and $\dfrac7{11}$ without using decimals.

<details><summary>Show the reasoning</summary>

Both denominators are positive, so cross-multiplication preserves order: $\dfrac59<\dfrac7{11}$ exactly when $5\times11<7\times9$. Since $55<56$, we have $\dfrac59<\dfrac7{11}$. Multiplying by a positive quantity is what makes this legal.

</details>

**3.** Solve $1<\dfrac{x+1}{2}\le 4$.

<details><summary>Show the reasoning</summary>

Multiply every part by $2>0$: $2<x+1\le 8$. Subtract $1$: $1<x\le 7$. The solution is $(1,7]$; the upper endpoint $7$ is included because the original right inequality was non-strict.

</details>

## Remember

- $a<b$ means $a$ lies left of $b$, equivalently $b-a>0$.
- Adding anything preserves order; multiplying or dividing by a negative reverses it.
- Square brackets include an endpoint; round brackets exclude it; $\infty$ always gets a round bracket.
- $x^2<k^2\iff |x|<k$ for $k>0$; reciprocals require both numbers to have the same sign.
- Check a solution by testing an interior point and both endpoints of the interval.

The next module uses these rules to isolate the unknown in $ax+b<c$, including cases where the coefficient of $x$ is negative.
