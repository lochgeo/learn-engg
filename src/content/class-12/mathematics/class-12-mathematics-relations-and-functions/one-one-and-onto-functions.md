## Functions add a promise to a relation

A relation may pair one input with many outputs. A **function** makes one extra promise: each input has exactly one output. That small promise is what makes functions countable, composable and reversible.

Formally, $f:A\to B$ is a relation from $A$ to $B$ such that every $a\in A$ appears in some pair $(a,f(a))$, and $(a,b)\in f$ together with $(a,c)\in f$ forces $b=c$. The set $A$ is the **domain**, $B$ is the **codomain**, and the **range** (or image) is

$$
f(A)=\{f(a):a\in A\}\subseteq B.
$$

The word "range" is about outputs that actually occur; the codomain is the declared target set. Keeping those two apart resolves most confusion in this chapter.

## 1. One-one (injective) functions

A function is **one-one** or **injective** when distinct inputs give distinct outputs:

$$
f(a_1)=f(a_2)\ \Longrightarrow\ a_1=a_2.
$$

The equivalent contrapositive form, $a_1\ne a_2\Rightarrow f(a_1)\ne f(a_2)$, is often easier to use. On a graph, every horizontal line meets the curve at most once — the horizontal-line test. For a finite domain, injectivity means $|f(A)|=|A|$: no two inputs collapse onto the same output.

To prove injectivity algebraically, assume $f(a_1)=f(a_2)$ and deduce $a_1=a_2$. To disprove it, exhibit one pair $a_1\ne a_2$ with equal images.

## 2. Onto (surjective) functions

A function is **onto** or **surjective** when every element of the codomain is hit:

$$
\text{for every }b\in B\text{ there exists }a\in A\text{ with }f(a)=b.
$$

Equivalently, $f(A)=B$. On a finite set this forces $|A|\ge |B|$: you cannot cover five targets with only four arrows. Graphs are less helpful here; start from an arbitrary $b$ and try to solve $f(a)=b$ for $a$.

For instance, $f:\mathbb{R}\to\mathbb{R}$ with $f(x)=x^2$ is **not** onto, because $b=-1$ has no real preimage. If we change the codomain to $[0,\infty)$, the same rule becomes onto, since every non-negative $b$ equals $\left(\sqrt{b}\right)^2$.

## 3. Bijective functions

A function that is both injective and surjective is a **bijection**, a one-to-one correspondence between $A$ and $B$. For finite sets a bijection exists only when $|A|=|B|$. Bijections matter because they are exactly the functions that possess an inverse; that is the subject of the next module.

The three descriptions of a bijection on finite sets are:

| Property | Finite-set meaning |
| --- | --- |
| Injective | $|f(A)|=|A|$ |
| Surjective | $|f(A)|=|B|$ |
| Bijective | $|f(A)|=|A|=|B|$ |

## 4. Counting functions by type

Let $|A|=m$ and $|B|=n$.

- **All functions:** each of the $m$ inputs chooses one of $n$ outputs, so $n^m$.
- **Injective functions:** if $m\le n$, the first input has $n$ choices, the second $n-1$, and so on, giving
  $$
  {}^nP_m=\frac{n!}{(n-m)!}=n(n-1)\cdots(n-m+1).
  $$
  If $m>n$, no injection exists, so the count is $0$.
- **Surjective functions:** use inclusion–exclusion. Subtract functions that miss at least one codomain element, add back those missing two, and so on:
  $$
  \sum_{k=0}^{n}(-1)^k\binom{n}{k}(n-k)^m.
  $$
- **Bijective functions:** only possible when $m=n$, and then there are $n!$ of them.

### Worked numerical example

Let $A=\{1,2,3\}$ and $B=\{1,2,3,4\}$.

- Injections: $m=3\le 4=n$, so ${}^4P_3=4\times3\times2=24$.
- Surjections: $m<n$, so there are $0$ onto functions — three arrows cannot cover four targets.
- Bijections: impossible, since the set sizes differ.

Now take $A=\{1,2,3,4\}$ and $B=\{1,2\}$. Surjections:

$$
2^4-\binom{2}{1}1^4+\binom{2}{2}0^4=16-2=14.
$$

Injections are impossible here because $4>2$. Both numbers can be checked against the finite-set meanings above: of the $16$ total functions, exactly the two constant functions fail to be onto.

## 5. The quadratic on three different codomains

Consider $f(x)=x^2$.

- $f:\mathbb{R}\to\mathbb{R}$: not injective, since $f(2)=f(-2)=4$; not surjective, since $-1\notin f(\mathbb{R})$.
- $f:\mathbb{R}\to[0,\infty)$: still not injective, but now surjective, because $b=\left(\sqrt{b}\right)^2$ for every $b\ge0$.
- $f:[0,\infty)\to[0,\infty)$: injective on this restricted domain, because $x_1^2=x_2^2$ with $x_1,x_2\ge0$ gives $x_1=x_2$. It is also surjective, hence bijective.

The rule did not change; only the domain and codomain did. Always read them before classifying a function.

<learning-block type="mistake" title="Onto is about the codomain, not the domain">

Students often say a function is onto because "every input has an output" — but that is true of every function. Onto means every **codomain** element is an output. Another frequent slip is calling $x^2$ one-one because "each input gives a single value"; that describes being a function, not injectivity. Check for two *different* inputs sharing one output.

</learning-block>

## Try it yourself

**A.** Let $f:\mathbb{R}\to\mathbb{R}$ be $f(x)=3x-7$. Show that $f$ is bijective.

<details><summary>Show the reasoning</summary>

Injective: if $3a-7=3b-7$, then $3a=3b$, so $a=b$. Surjective: for any $y\in\mathbb{R}$, choose $a=(y+7)/3$, which is real and satisfies $f(a)=y$. Hence $f$ is a bijection.

</details>

**B.** How many one-one functions are there from a $4$-element set to a $6$-element set? How many onto functions in the same direction?

<details><summary>Show the reasoning</summary>

One-one: ${}^6P_4=6\times5\times4\times3=360$ (the equal-factor form $\frac{6!}{2!}$ gives the same). Onto: $0$, because a function from four elements cannot cover six targets.

</details>

**C.** Find the number of onto functions from a $3$-element set onto a $2$-element set.

<details><summary>Show the reasoning</summary>

Inclusion–exclusion gives $2^3-\binom{2}{1}1^3=8-2=6$. Equivalently, of the $8$ functions, only the two constant ones are not onto.

</details>

## Remember

- Injective: $f(a_1)=f(a_2)\Rightarrow a_1=a_2$; no two inputs share an output.
- Surjective: range equals codomain; solve $f(a)=b$ for an arbitrary $b$.
- Bijective means both, and on finite sets it requires equal set sizes.
- Counts: $n^m$ for all functions, ${}^nP_m$ for injections, inclusion–exclusion for surjections, $n!$ for bijections.
- Read the domain and codomain before classifying $x^2$ or any other rule.

Next we combine functions with **composition** and reverse them with **inverse functions**, where injectivity and surjectivity earn their keep.
