## A matrix is an organised grid of numbers

A marks table, a bus timetable and a digital image are all grids: values arranged in rows and columns. A matrix is that idea made precise — a rectangular array of numbers with a fixed number of rows and columns. Matrices matter because they let us handle many quantities as one object. A system of linear equations becomes a single array, and a carefully chosen operation on that array replaces pages of repetitive algebra.

Formally, an $m\times n$ matrix is a rectangular array of numbers with $m$ rows and $n$ columns:

$$
A=\begin{pmatrix}
a_{11} & a_{12} & \cdots & a_{1n}\\
a_{21} & a_{22} & \cdots & a_{2n}\\
\vdots & \vdots & \ddots & \vdots\\
a_{m1} & a_{m2} & \cdots & a_{mn}
\end{pmatrix}=[a_{ij}]_{m\times n}.
$$

The entry $a_{ij}$ sits in row $i$ and column $j$ — the **row index is written first**. The order of the matrix is $m\times n$ (read "$m$ by $n$"), and the pair $(m,n)$ is part of the object's identity: change it and you have changed the matrix.

## 1. Order and the counting relation

Let $A=[a_{ij}]_{m\times n}$. Each of the $m$ rows contains $n$ entries, so the total number of entries is

$$
\text{number of entries}=m\times n.
$$

This is our first derived relation, and it comes straight from the grid structure. Two immediate consequences are worth keeping:

- If $m=n$, the matrix is **square** of order $n$; it has $n^2$ entries and a **main diagonal** consisting of $a_{11},a_{22},\ldots,a_{nn}$, exactly $n$ entries. The number of off-diagonal entries is $n^2-n$.
- If $m\ne n$, the matrix is **rectangular**. Its main diagonal still consists of the entries $a_{ii}$ for $i=1,\ldots,\min(m,n)$, but we usually reserve the word "diagonal" for square matrices.

Because the count is a product, a matrix with $24$ entries can have order $(1,24),(2,12),(3,8),(4,6),(6,4),(8,3),(12,2)$ or $(24,1)$ — but no square order, since $24$ is not a perfect square. A matrix with $25$ entries *can* be square, of order $5\times5$.

## 2. The common types

| Type | Defining condition | Shape |
| --- | --- | --- |
| Row matrix | one row | $1\times n$ |
| Column matrix | one column | $m\times1$ |
| Square matrix | rows = columns | $n\times n$ |
| Zero matrix $O$ | every entry is $0$ | any $m\times n$ |
| Diagonal matrix | $a_{ij}=0$ for $i\ne j$ | square |
| Scalar matrix | diagonal, with $a_{ii}=c$ for all $i$ | square |
| Identity matrix $I_n$ | diagonal, with $a_{ii}=1$ for all $i$ | $n\times n$ |
| Upper triangular | $a_{ij}=0$ for $i>j$ | square |
| Lower triangular | $a_{ij}=0$ for $i<j$ | square |

The types form a hierarchy. Every scalar matrix is diagonal, but a diagonal matrix need not be scalar: $\begin{pmatrix}2&0\\0&5\end{pmatrix}$ is diagonal, while $\begin{pmatrix}5&0\\0&5\end{pmatrix}=5I_2$ is scalar. Only when $c=1$ does a scalar matrix become the identity. Using the Kronecker delta, $(I_n)_{ij}=\delta_{ij}$, where $\delta_{ij}=1$ if $i=j$ and $0$ otherwise — a compact way to state the definition of $I_n$.

## 3. Equality of matrices

Two matrices $A=[a_{ij}]$ and $B=[b_{ij}]$ are **equal**, written $A=B$, exactly when

1. they have the **same order**, and
2. $a_{ij}=b_{ij}$ for every $i$ and every $j$.

Both conditions are essential. Equality is entry-by-entry, so a single mismatch in one position is enough to make two matrices unequal. This is what turns a matrix equation into a system of scalar equations — the main tool for the "find the unknowns" questions that follow.

### Worked example

Let

$$
P=\begin{pmatrix}x-2&4\\3&y+1\end{pmatrix},\qquad Q=\begin{pmatrix}5&4\\3&7\end{pmatrix}.
$$

Find $x$ and $y$ given that $P=Q$.

Both matrices are $2\times2$, so the order condition is satisfied. Equating corresponding entries:

$$
x-2=5\Rightarrow x=7,\qquad y+1=7\Rightarrow y=6.
$$

**Sanity check:** substituting back gives $P=\begin{pmatrix}5&4\\3&7\end{pmatrix}=Q$, including the entries $4$ and $3$ that were already matched. The solution is consistent.

<learning-block type="mistake" title="Equality ignores shape at your peril">

A frequent error is to equate entries of matrices with different orders, for example treating $\begin{pmatrix}1&2\end{pmatrix}$ and $\begin{pmatrix}1\\2\end{pmatrix}$ as "the same because the numbers match". They are not equal: one is $1\times2$ and the other is $2\times1$. Always check the order before equating a single entry. A related slip is reading $a_{ij}$ as column-then-row; remember that the row index comes first.

</learning-block>

## 4. Where the order shows up in practice

Suppose the marks of three students in two tests are stored as

$$
M=\begin{pmatrix}
78 & 85\\
92 & 88\\
70 & 76
\end{pmatrix}.
$$

Here $M$ is $3\times2$: rows name students, columns name tests, and $m_{21}=92$ is the first-test mark of the second student. If another matrix $N$ holds the next term's marks and we later want to combine them, $N$ must also be $3\times2$ — a $2\times3$ table might contain the same six numbers but would pair them with the wrong labels. This is the practical reason behind the order condition in equality and, later, in addition.

Notice also that transposing this table would produce a $2\times3$ matrix whose rows are tests and columns are students. The information is unchanged; only the labelling has been rearranged. We return to that operation in the module on transpose.

## Try it yourself

**A.** Classify $\begin{pmatrix}0&0&0\\0&0&0\end{pmatrix}$ as fully as you can.

<details><summary>Show the reasoning</summary>

It is a $2\times3$ matrix, so it is rectangular, not square. Every entry is zero, so it is the zero matrix $O_{2\times3}$. It is also a row-of-rows in the sense that each row is a $1\times3$ row matrix and each column is a $2\times1$ column matrix, but "zero rectangular matrix" is the most informative classification.

</details>

**B.** How many entries lie off the main diagonal of a $5\times5$ matrix?

<details><summary>Show the reasoning</summary>

A $5\times5$ matrix has $5^2=25$ entries and $5$ diagonal entries, so $25-5=20$ entries are off the diagonal. In general a square matrix of order $n$ has $n^2-n$ off-diagonal entries.

</details>

**C.** Find $p$ and $q$ if $\begin{pmatrix}p&q-1\\2&3\end{pmatrix}=\begin{pmatrix}4&5\\2&3\end{pmatrix}$.

<details><summary>Show the reasoning</summary>

Both matrices are $2\times2$. Equating entry by entry gives $p=4$ and $q-1=5$, so $q=6$. The remaining entries, $2$ and $3$, already agree.

</details>

## Remember

- An $m\times n$ matrix has $m$ rows, $n$ columns and $mn$ entries; $a_{ij}$ means row $i$, column $j$.
- A square matrix of order $n$ has $n$ diagonal entries and $n^2-n$ off-diagonal entries.
- Diagonal matrices may have zeros on the diagonal; scalar matrices have a single repeated value there, and the identity has every diagonal entry equal to $1$.
- Equality demands the same order **and** equal corresponding entries.
- One mismatched entry, or one different dimension, is enough to make two matrices unequal.

The next module, **matrix operations**, uses these orders to decide which combinations are legal: addition needs equal orders, while multiplication needs matching inner dimensions.
