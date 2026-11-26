## Your study plan for today

This chapter is a set of tools for turning a rule into a term and a term into a total. A focused first pass takes about **2 hours**, plus this 25-minute check:

| Stage | Time |
| --- | --- |
| Sequences and series: general term and partial sums | 20 min |
| Arithmetic progressions: term, sum, arithmetic mean | 20 min |
| Geometric progressions: term, finite and infinite sums | 20 min |
| Special series: sums of $k$, $k^2$, $k^3$ | 20 min |
| AM–GM and mixed sequences: bounds, telescoping, AGP | 20 min |
| This mastery check | 25 min |

Work each stage with the answers hidden, then check. Mark a stage complete only when you can say *why* the chosen formula applies. After the second stage take a short break. Once you can solve these questions one at a time, use the **JEE Main timed practice** module for a $50$-minute paper; its value lies in choosing the tool quickly.

## Choose the tool first

| Clue in the question | Start with |
| --- | --- |
| "constant difference" or terms like $2,5,8,\ldots$ | AP: $a_n=a+(n-1)d$, $\;S_n=\frac n2(a+l)$ |
| "constant ratio" or terms like $3,6,12,\ldots$ | GP: $a_n=ar^{n-1}$, $\;S_n=\frac{a(1-r^n)}{1-r}$ |
| "sum to infinity" | Check $|r|<1$, then $S_\infty=\frac{a}{1-r}$ |
| "general term is $k^2+k$" or similar polynomial | Split into $\sum k$, $\sum k^2$, $\sum k^3$ |
| "given $S_n$, find $a_n$" | $a_n=S_n-S_{n-1}$, with $a_1=S_1$ |
| "least value of $x+\frac{k}{x}$" | AM–GM; equality at $x=\sqrt k$ |
| "fraction with consecutive factors" | Partial fractions, then telescope |
| "AP factor times GP factor" | Multiply the sum by $r$ and subtract |
| "insert $m$ means" | $m+1$ equal steps: $d=\frac{c-a}{m+1}$ or $r=(c/a)^{1/(m+1)}$ |

## Mastery check

Try every question before revealing the answer. The set gets harder as it goes.

### 1. An AP term

Find the fifteenth term of $2,5,8,11,\ldots$

<details><summary>Answer and reasoning</summary>

$a=2$, $d=3$, so $a_{15}=2+14(3)=44$. Testing the formula at $n=1$ gives $2$, as it should.

</details>

### 2. An AP total

Find the sum of the first twelve terms of the same progression.

<details><summary>Answer and reasoning</summary>

First $a_{12}=2+11(3)=35$. Then $S_{12}=\dfrac{12}{2}(2+35)=6(37)=222$. The other form gives $\dfrac{12}{2}[4+11(3)]=222$ too.

</details>

### 3. A GP term

Find the seventh term of $3,6,12,24,\ldots$

<details><summary>Answer and reasoning</summary>

$a=3$, $r=2$, so $a_7=3\cdot2^6=3\cdot64=192$.

</details>

### 4. A GP with negative ratio

Find the sum of the first five terms of $1,-2,4,-8,\ldots$

<details><summary>Answer and reasoning</summary>

$r=-2$, so $S_5=\dfrac{1-(-2)^5}{1-(-2)}=\dfrac{1+32}{3}=11$. Directly: $1-2+4-8+16=11$, confirming the alternating signs.

</details>

### 5. An infinite sum

Find $5+\dfrac52+\dfrac54+\cdots$.

<details><summary>Answer and reasoning</summary>

$a=5$, $r=\tfrac12$ with $|r|<1$, so $S_\infty=\dfrac{5}{1-1/2}=10$. The partial sums $5,7.5,8.75,\ldots$ approach $10$ from below.

</details>

### 6. A polynomial general term

Evaluate $\displaystyle\sum_{k=1}^{10}k(k+1)$.

<details><summary>Answer and reasoning</summary>

$k(k+1)=k^2+k$, so

$$S_{10}=\frac{10\cdot11\cdot21}{6}+\frac{10\cdot11}{2}=385+55=440.$$

Equivalently, $\frac{n(n+1)(n+2)}{3}$ with $n=10$ gives $\frac{10\cdot11\cdot12}{3}=440$.

</details>

### 7. From partial sums to terms

A sequence satisfies $S_n=n^2+2n$. Find $a_1$ and $a_n$.

<details><summary>Answer and reasoning</summary>

$a_1=S_1=3$. For $n\ge2$,

$$a_n=(n^2+2n)-\big[(n-1)^2+2(n-1)\big]=(n^2+2n)-(n^2-1)=2n+1.$$

Check: $a_1+a_2=3+5=8=S_2=4+4$.

</details>

### 8. A minimum by AM–GM

Minimise $2x+\dfrac8x$ for $x>0$, and state where the minimum occurs.

<details><summary>Answer and reasoning</summary>

AM–GM gives $2x+\dfrac8x\ge2\sqrt{2x\cdot8/x}=2\sqrt{16}=8$. Equality needs $2x=\dfrac8x$, so $x^2=4$ and $x=2$. At $x=2$ the value is $4+4=8$.

</details>

### 9. An arithmetico-geometric sum

Sum $1+2x+3x^2+4x^3+\cdots$ to infinity for $|x|<1$, and evaluate it at $x=\tfrac12$.

<details><summary>Answer and reasoning</summary>

The coefficients $1,2,3,\ldots$ form an AP while the powers form a GP, so this is arithmetico-geometric with $a=1$, $d=1$, $r=x$. Using

$$S=\frac{a}{1-r}+\frac{dr}{(1-r)^2},$$

we get

$$S=\frac{1}{1-x}+\frac{x}{(1-x)^2}=\frac{1}{(1-x)^2}.$$

At $x=\tfrac12$ this is $\dfrac{1}{(1/2)^2}=4$. As a check, the first four terms $1+1+0.75+0.5=3.25$, so a positive tail bringing the total to $4$ is plausible.

</details>

### 10. A telescoping sum

Find $\displaystyle\sum_{k=1}^{n}\frac{1}{k(k+1)}$ and check it at $n=3$.

<details><summary>Answer and reasoning</summary>

Write $\dfrac{1}{k(k+1)}=\dfrac1k-\dfrac1{k+1}$. The sum telescopes to $1-\dfrac{1}{n+1}=\dfrac{n}{n+1}$. At $n=3$ the direct sum is $\tfrac12+\tfrac16+\tfrac1{12}=\tfrac{6+2+1}{12}=\tfrac34$, and the formula gives $\tfrac{3}{4}$.

</details>

## Self-check

You are ready for the timed set when you can:

- write $a_n$ and $S_n$ for any AP or GP and justify the $n-1$ in the exponent or difference;
- use $S_\infty=\dfrac{a}{1-r}$ only after checking $|r|<1$;
- add $k$, $k^2$ and $k^3$ from memory and split a polynomial term into these sums;
- recover $a_n$ from $S_n$, including the separate first term;
- apply AM–GM with its positivity and equality conditions;
- recognise a telescoping fraction and an arithmetico-geometric term;
- check a derived formula at $n=1$ and at one more small value;
- say which tool applies before starting any calculation.

If one item still feels shaky, revisit that lesson and redo its questions with the answers hidden.
