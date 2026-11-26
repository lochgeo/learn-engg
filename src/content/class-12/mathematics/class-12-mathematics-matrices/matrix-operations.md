## Combining grids: three different operations

If two shops record the same five products in the same order, their price lists can be added entry by entry. Scale every price by a tax factor and every entry is multiplied by the same number. But "multiplying two price lists" is not a meaningful idea — matrix multiplication answers a different question: it combines a row of one table with a column of another to produce a single number. Recognising which operation fits is the first skill in this module.

## 1. Addition and subtraction

Let $A=[a_{ij}]$ and $B=[b_{ij}]$ be matrices of the **same order** $m\times n$. Their sum and difference are defined entry by entry:

$$
A+B=[a_{ij}+b_{ij}],\qquad A-B=[a_{ij}-b_{ij}].
$$

If the orders differ, neither operation is defined, even if the two arrays contain the same count of numbers.

Addition behaves like ordinary numerical addition:

- $A+B=B+A$ (commutative), and $(A+B)+C=A+(B+C)$ (associative);
- $A+O=O+A=A$, where $O$ is the zero matrix of the same order;
- $A+(-A)=O$, where $-A=[-a_{ij}]$ is the additive inverse.

Because each property is checked entry by entry, these follow directly from the corresponding properties of real numbers.

## 2. Scalar multiplication

For a number $k$ (a **scalar**) and a matrix $A=[a_{ij}]$,

$$
kA=[k\,a_{ij}].
$$

Every entry is multiplied by $k$; the order of the matrix is unchanged. The useful rules are

$$
k(lA)=(kl)A,\qquad (k+l)A=kA+lA,\qquad k(A+B)=kA+kB.
$$

Each is proved by looking at the $(i,j)$ entry on both sides. For the last one, the $(i,j)$ entry of $k(A+B)$ is $k(a_{ij}+b_{ij})$, which equals $ka_{ij}+kb_{ij}$ by distributivity of real numbers — exactly the $(i,j)$ entry of $kA+kB$.

<learning-block type="concept" title="Subtraction is addition in disguise">

We define $A-B$ as $A+(-B)$ rather than as a new operation. That is why the order requirement for subtraction is identical to the one for addition, and why all the addition rules carry over without new proofs.

</learning-block>

## 3. Matrix multiplication

Suppose $A$ is $m\times n$ and $B$ is $n\times p$. The product $AB$ is defined and has order $m\times p$:

$$
(m\times n)\,(n\times p)=(m\times p).
$$

The **inner dimensions must agree** ($n$ columns of $A$ against $n$ rows of $B$); the **outer dimensions** give the size of the answer. If $A$ is $2\times3$ and $B$ is $2\times2$, then $AB$ does not exist, although $BA$ does and is $2\times3$.

The $(i,j)$ entry of $AB$ is the dot product of row $i$ of $A$ with column $j$ of $B$:

$$
(AB)_{ij}=\sum_{k=1}^{n}a_{ik}b_{kj}
=a_{i1}b_{1j}+a_{i2}b_{2j}+\cdots+a_{in}b_{nj}.
$$

To see why, follow one row of $A$ through the product: each entry $a_{ik}$ is paired with the entry $b_{kj}$ that sits in the same position $k$ of column $j$, and the results are summed. The sum has exactly $n$ terms, so the inner dimension controls the length of each dot product.

Multiplication is associative and distributive but **not commutative**:

$$
A(BC)=(AB)C,\qquad A(B+C)=AB+AC,\qquad (B+C)A=BA+CA,
$$

while $AB=BA$ is generally false. Two further cautions follow from the definition:

- $AB=O$ does **not** force $A=O$ or $B=O$.
- $AB=AC$ with $A\ne O$ does **not** force $B=C$ (cancellation is not valid).

For a square matrix, positive powers are defined by repeated multiplication: $A^2=AA$, $A^3=AAA$, with $A^0=I$. The usual laws $A^rA^s=A^{r+s}$ and $(A^r)^s=A^{rs}$ then hold.

## 4. Worked example: order, product and non-commutativity

Let

$$
A=\begin{pmatrix}2&1\\0&3\end{pmatrix},\qquad B=\begin{pmatrix}1&2\\4&0\end{pmatrix}.
$$

Both are $2\times2$, so $AB$ and $BA$ both exist and are $2\times2$. Compute $AB$ one entry at a time:

$$
AB=\begin{pmatrix}
2(1)+1(4) & 2(2)+1(0)\\
0(1)+3(4) & 0(2)+3(0)
\end{pmatrix}
=\begin{pmatrix}6&4\\12&0\end{pmatrix}.
$$

Now reverse the order:

$$
BA=\begin{pmatrix}
1(2)+2(0) & 1(1)+2(3)\\
4(2)+0(0) & 4(1)+0(3)
\end{pmatrix}
=\begin{pmatrix}2&7\\8&4\end{pmatrix}.
$$

Since $\begin{pmatrix}6&4\\12&0\end{pmatrix}\ne\begin{pmatrix}2&7\\8&4\end{pmatrix}$, we have $AB\ne BA$.

**Sanity check:** the $(1,1)$ entry of $AB$ used row 1 of $A$, namely $(2,1)$, against column 1 of $B$, namely $(1,4)$. In $BA$ the same position uses $(1,2)$ against $(2,0)$ instead. Different pairings, different answers — the discrepancy is expected, not a calculation error.

## 5. A zero product from nonzero factors

Take $A=\begin{pmatrix}0&1\\0&0\end{pmatrix}$ and $B=\begin{pmatrix}1&0\\0&0\end{pmatrix}$. Neither is the zero matrix, yet

$$
AB=\begin{pmatrix}0(1)+1(0)&0(0)+1(0)\\0(1)+0(0)&0(0)+0(0)\end{pmatrix}
=\begin{pmatrix}0&0\\0&0\end{pmatrix}.
$$

So a zero product does not allow us to conclude that one factor vanished.

<learning-block type="mistake" title="Treating matrices like numbers">

The most common error is importing the arithmetic of numbers without checking. $AB$ is not $BA$, $AB=O$ does not imply $A=O$ or $B=O$, and $AB=AC$ does not imply $B=C$. Each of these fails for matrices but holds for ordinary nonzero numbers, which is exactly why the habit is dangerous.

</learning-block>

## Try it yourself

**A.** If $A$ is $3\times2$ and $B$ is $2\times4$, what is the order of $AB$? Is $BA$ defined?

<details><summary>Show the reasoning</summary>

$AB$ is $3\times4$: the inner dimensions $2$ match, and the outer dimensions $3$ and $4$ give the answer. $BA$ is not defined, because $B$ has $4$ columns while $A$ has $3$ rows.

</details>

**B.** With $A=\begin{pmatrix}1&0\\2&-1\end{pmatrix}$ and $B=\begin{pmatrix}0&3\\1&2\end{pmatrix}$, find $3A-2B$.

<details><summary>Show the reasoning</summary>

$3A=\begin{pmatrix}3&0\\6&-3\end{pmatrix}$ and $2B=\begin{pmatrix}0&6\\2&4\end{pmatrix}$, so $3A-2B=\begin{pmatrix}3&-6\\4&-7\end{pmatrix}$. Subtraction is entry by entry and requires both matrices to be $2\times2$, which they are.

</details>

**C.** For $A=\begin{pmatrix}1&2\\3&4\end{pmatrix}$, compute $A^2$.

<details><summary>Show the reasoning</summary>

$A^2=AA=\begin{pmatrix}1(1)+2(3)&1(2)+2(4)\\3(1)+4(3)&3(2)+4(4)\end{pmatrix}=\begin{pmatrix}7&10\\15&22\end{pmatrix}$. Powers are only defined for square matrices.

</details>

## Remember

- Add or subtract only matrices of the same order, entry by entry.
- $kA$ multiplies every entry by $k$ and leaves the order unchanged.
- $(m\times n)(n\times p)$ exists and is $m\times p$; the $(i,j)$ entry is a row–column dot product with $n$ terms.
- Multiplication is associative and distributive but not commutative; zero products and cancellation are both treacherous.
- $A^0=I$ and positive powers need a square matrix.

Next we meet the **transpose**, which flips rows and columns. Its most surprising rule is that $(AB)^T=B^TA^T$: the order reverses, just as it does when we invert a product later in the chapter.
