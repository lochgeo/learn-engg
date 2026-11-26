## Adding the counting numbers, their squares and their cubes

Ask for $1+2+\cdots+100$ and a pupil may add a hundred numbers. Ask for the same sum to a million terms and brute force is hopeless. Yet the answer has a short closed form, and so do the sums of squares and cubes. These three sums are the **standard series** of the chapter: once they are known, many harder-looking questions reduce to writing the general term and splitting it into pieces we can already add.

Throughout this lesson $n$ is a positive integer.

## 1. Sum of the first $n$ natural numbers

Use the difference of consecutive squares:

$$
(k+1)^2-k^2=2k+1.
$$

Add this identity for $k=1,2,\ldots,n$. On the left, almost everything cancels — a **telescoping** sum — leaving $(n+1)^2-1$:

$$
(n+1)^2-1=2\sum_{k=1}^{n}k+n.
$$

Since $(n+1)^2-1=n^2+2n$, we get $2\sum k=n^2+n$, hence

$$
\boxed{\sum_{k=1}^{n}k=\frac{n(n+1)}{2}}.
$$

A geometric way to see the same result is to pair $1$ with $n$, $2$ with $n-1$, and so on: every pair totals $n+1$.

## 2. Sum of the squares

Now use the difference of consecutive cubes:

$$
(k+1)^3-k^3=3k^2+3k+1.
$$

Summing from $k=1$ to $n$ gives

$$
(n+1)^3-1=3\sum_{k=1}^{n}k^2+3\sum_{k=1}^{n}k+n.
$$

Substitute $\sum k=\tfrac{n(n+1)}{2}$ and collect the $\sum k^2$ term:

$$
3\sum_{k=1}^{n}k^2=(n+1)^3-1-n-\frac{3n(n+1)}{2}
=\frac{3n(n+1)(2n+1)}{2},
$$

so

$$
\boxed{\sum_{k=1}^{n}k^2=\frac{n(n+1)(2n+1)}{6}}.
$$

Notice the factor $2n+1$: it is the signature of a sum of squares, and forgetting it is a classic error.

## 3. Sum of the cubes

One order higher, the difference of consecutive fourth powers is

$$
(k+1)^4-k^4=4k^3+6k^2+4k+1.
$$

Summing and inserting the two previous results gives

$$
4\sum_{k=1}^{n}k^3=(n+1)^4-1-n-6\cdot\frac{n(n+1)(2n+1)}{6}-4\cdot\frac{n(n+1)}{2}=n^2(n+1)^2,
$$

and therefore

$$
\boxed{\sum_{k=1}^{n}k^3=\left[\frac{n(n+1)}{2}\right]^2}.
$$

The sum of the first $n$ cubes is the **square** of the sum of the first $n$ numbers — a striking identity worth checking on small cases. One more useful result follows from the first formula:

$$
\sum_{k=1}^{n}(2k-1)=2\cdot\frac{n(n+1)}{2}-n=n^2,
$$

the sum of the first $n$ odd numbers.

## 4. The method: write the general term first

For an unfamiliar series, do not guess a formula for the total. Write the $k$th term $a_k$, simplify it, express it using $k$, $k^2$ or $k^3$, and then apply the three standard sums. Linearity lets us add and subtract those sums term by term:

$$
\sum_{k=1}^{n}(\alpha k^2+\beta k+\gamma)=\alpha\sum k^2+\beta\sum k+\gamma n.
$$

## 5. A fully worked example

Find the sum of $1\cdot2+2\cdot3+3\cdot4+\cdots$ to $n$ terms, and evaluate it for $n=20$.

**Step 1 — general term.** The $k$th term is the product of two consecutive integers:

$$
a_k=k(k+1)=k^2+k.
$$

**Step 2 — add the pieces.**

$$
S_n=\sum_{k=1}^{n}(k^2+k)=\frac{n(n+1)(2n+1)}{6}+\frac{n(n+1)}{2}.
$$

Factor $\dfrac{n(n+1)}{2}$:

$$
S_n=\frac{n(n+1)}{2}\left(\frac{2n+1}{3}+1\right)=\frac{n(n+1)}{2}\cdot\frac{2n+4}{3}=\boxed{\frac{n(n+1)(n+2)}{3}}.
$$

**Step 3 — evaluate.** For $n=20$:

$$
S_{20}=\frac{20\cdot21\cdot22}{3}=\frac{9240}{3}=3080.
$$

**Sanity check.** At $n=1$ the formula gives $\tfrac{1\cdot2\cdot3}{3}=2$, the first term. At $n=2$ it gives $\tfrac{2\cdot3\cdot4}{3}=8$, and indeed $1\cdot2+2\cdot3=2+6=8$. Independently, $\sum_{1}^{20}k^2=\tfrac{20\cdot21\cdot41}{6}=2870$ and $\sum_{1}^{20}k=210$, totalling $3080$. The checks agree.

<learning-block type="mistake" title="Squaring a sum is not summing the squares">

It is tempting to write $\sum k^2=\big(\sum k\big)^2$ because the equality happens to be true for **cubes**. It is false for squares: with $n=2$, $\sum k^2=1+4=5$ while $(\sum k)^2=3^2=9$. Only the cube identity has that special form. A second frequent error is losing the factor $6$ in the squares formula; test it at $n=1$, where it must give $1$.

</learning-block>

## 6. Where this leads

The three standard sums handle terms built from polynomials in $k$. Some sequences are not polynomials at all, and some questions ask for the *smallest possible value* of an expression rather than a total. The next lesson brings in the AM–GM inequality for the second kind and a few mixed techniques — partial sums and telescoping — for the first.

## Try it yourself

**A.** Evaluate $1^2+2^2+\cdots+15^2$.

<details><summary>Show the reasoning</summary>

$$\sum_{k=1}^{15}k^2=\frac{15\cdot16\cdot31}{6}=\frac{7440}{6}=1240.$$

The answer lies between $15^2=225$ and $15\cdot15^2=3375$, as expected for fifteen terms growing up to $225$.

</details>

**B.** Find $\displaystyle\sum_{k=1}^{n}k(k+2)$ in closed form.

<details><summary>Show the reasoning</summary>

$a_k=k^2+2k$, so

$$S_n=\frac{n(n+1)(2n+1)}{6}+n(n+1)=\frac{n(n+1)(2n+7)}{6}.$$

Check at $n=1$: the formula gives $\tfrac{1\cdot2\cdot9}{6}=3$, and $1\cdot3=3$.

</details>

**C.** Find the sum of the first nine odd numbers without adding them one by one.

<details><summary>Show the reasoning</summary>

$\sum_{k=1}^{n}(2k-1)=n^2$, so with $n=9$ the sum is $81$. Directly, the ninth odd number is $17$ and the average of first and last is $9$, giving $9\times9=81$.

</details>

## Remember

- $\sum k=\dfrac{n(n+1)}{2}$, $\sum k^2=\dfrac{n(n+1)(2n+1)}{6}$, $\sum k^3=\left[\dfrac{n(n+1)}{2}\right]^2$.
- Sum of the first $n$ odd numbers is $n^2$.
- Write the general term first, then split it into standard sums using linearity.
- Verify a derived closed form at $n=1$ and $n=2$ before using it.
- Only the **cube** sum equals the square of $\sum k$; do not extend that pattern to squares.
- Next: inequalities and mixed sequences that are not plain APs or GPs.
