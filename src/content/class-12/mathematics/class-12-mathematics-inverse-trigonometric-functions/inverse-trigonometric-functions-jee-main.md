## JEE Main sprint: how to use this set

This is a **50-minute, no-notes** paper for after the chapter lessons. Spend about 15 minutes on Section A, 20 on Section B, 10 on Section C and 5 on Section D. Mark anything taking longer than 90 seconds and move on. The goal is not only the answer: before writing an identity, name the branch you are working in.

Every angle is in radians. There is no formula sheet in the exam, so the table below is the last thing you should look at before starting the clock.

## Conditions sheet

| Situation | Start with | Check before using it |
| --- | --- | --- |
| Principal value of a number | Solve $\sin y=x$ etc. inside the branch | Answer must lie in $\sin^{-1}\!\in[-\pi/2,\pi/2]$, $\cos^{-1}\!\in[0,\pi]$, $\tan^{-1}\!\in(-\pi/2,\pi/2)$ |
| Argument is $\sin\theta$, $\cos\theta$ or $\tan\theta$ | Reduce $\theta$ into the branch | Reduced angle has the same trig value |
| Negative input | Odd for $\sin^{-1},\tan^{-1},\csc^{-1}$; $\pi-f(x)$ for the other three | $\cos^{-1}(-x)\ne-\cos^{-1}x$ |
| Same-argument pair | $\sin^{-1}x+\cos^{-1}x=\tan^{-1}x+\cot^{-1}x=\sec^{-1}x+\csc^{-1}x=\pi/2$ | Common argument $x$ in the shared domain |
| Two inverse tangents added | $\tan^{-1}\!\big((x+y)/(1-xy)\big)$ | $xy<1$ direct; $xy>1$ with $x,y>0$ add $\pi$; $x,y<0$ subtract $\pi$ |
| Equation | Convert to algebra | Test each root in the original equation and branch |
| Inequality | Monotonicity | State whether the direction is preserved or reversed |

<learning-block type="mistake" title="The fastest sanity checks">

A sum of positive angles cannot be negative; a sum of two angles below $\pi/2$ cannot reach $\pi$; and no principal value lies outside its branch. If your answer fails one of these, fix the branch before doing more algebra.

</learning-block>

## Section A — 10 rapid MCQs

### 1. Domain

The domain of $\cos^{-1}(2x-3)$ is:

- A. $[1,2]$
- B. $[-1,1]$
- C. $[0,2]$
- D. $[1,3]$

<details><summary>Answer</summary>

**A.** Inverse cosine needs $-1\le2x-3\le1$, so $2\le2x\le4$ and $x\in[1,2]$.

</details>

### 2. Range

The range of $\tan^{-1}x$ is:

- A. $[-\pi/2,\pi/2]$
- B. $(-\pi/2,\pi/2)$
- C. $[0,\pi]$
- D. $\mathbb{R}$

<details><summary>Answer</summary>

**B.** Tangent never takes the values $\pm\pi/2$, so the principal branch is the open interval $(-\pi/2,\pi/2)$.

</details>

### 3. Principal value

The principal value of $\sin^{-1}(-1/2)$ is:

- A. $-\pi/6$
- B. $\pi/6$
- C. $7\pi/6$
- D. $-5\pi/6$

<details><summary>Answer</summary>

**A.** We need $y\in[-\pi/2,\pi/2]$ with $\sin y=-1/2$. Since $\sin(-\pi/6)=-1/2$, the value is $-\pi/6$. Options C and D are outside the branch.

</details>

### 4. A classic sum

$\tan^{-1}1+\tan^{-1}2+\tan^{-1}3$ equals:

- A. $0$
- B. $\pi/2$
- C. $\pi$
- D. $-\pi$

<details><summary>Answer</summary>

**C.** First $\tan^{-1}1+\tan^{-1}2$: here $xy=2>1$ with both positive, so the sum is $\pi+\tan^{-1}\!\big(3/(1-2)\big)=\pi+\tan^{-1}(-3)=\pi-\tan^{-1}3$. Adding $\tan^{-1}3$ gives $\pi$. Numerically $0.785+1.107+1.249\approx3.142$.

</details>

### 5. Negative input

For $x\in[-1,1]$, $\cos^{-1}(-x)$ equals:

- A. $-\cos^{-1}x$
- B. $\pi-\cos^{-1}x$
- C. $\pi+\cos^{-1}x$
- D. $\cos^{-1}x$

<details><summary>Answer</summary>

**B.** Cosine inverse is not odd. Since $\cos(\pi-\theta)=-\cos\theta$ and $\pi-\theta\in[0,\pi]$ when $\theta\in[0,\pi]$, we get $\cos^{-1}(-x)=\pi-\cos^{-1}x$. Testing $x=1$ gives $\pi$, not $-\pi/2$.

</details>

### 6. Complementary pair

For $x\in[-1,1]$, $\sin^{-1}x+\cos^{-1}x$ equals:

- A. $\pi/2$
- B. $\pi$
- C. $0$
- D. a value depending on $x$

<details><summary>Answer</summary>

**A.** Putting $\sin^{-1}x=\theta$, we have $\cos(\pi/2-\theta)=\sin\theta=x$ with $\pi/2-\theta\in[0,\pi]$, so $\cos^{-1}x=\pi/2-\theta$.

</details>

### 7. Monotonicity

Which function decreases on each interval of its domain?

- A. $\sin^{-1}x$
- B. $\tan^{-1}x$
- C. $\cos^{-1}x$
- D. $\sec^{-1}x$

<details><summary>Answer</summary>

**C.** $\cos^{-1}(-1)=\pi$ and $\cos^{-1}(1)=0$, so the curve falls as $x$ increases. The other three increase on each interval.

</details>

### 8. Double angle

$2\tan^{-1}(1/2)$ equals:

- A. $\tan^{-1}(4/3)$
- B. $\tan^{-1}(3/4)$
- C. $\tan^{-1}(1/2)$
- D. $\cos^{-1}(4/5)$

<details><summary>Answer</summary>

**A.** Since $|1/2|<1$, $2\tan^{-1}x=\tan^{-1}\!\big(2x/(1-x^2)\big)$, giving $(1)/(3/4)=4/3$. Numerically both are about $0.927$ radians; $\cos^{-1}(4/5)\approx0.644$ is not equal.

</details>

### 9. Secant inverse

The principal value of $\sec^{-1}(-2)$ is:

- A. $\pi/3$
- B. $2\pi/3$
- C. $-\pi/3$
- D. $4\pi/3$

<details><summary>Answer</summary>

**B.** $\sec^{-1}(-2)=\cos^{-1}(-1/2)=2\pi/3$, which lies in $[0,\pi]$ and is not $\pi/2$. Check: $\sec(2\pi/3)=1/(-1/2)=-2$.

</details>

### 10. Addition formula

If $\tan^{-1}x+\tan^{-1}y=\pi/4$ and $xy<1$, then $(x+y)/(1-xy)$ equals:

- A. $0$
- B. $1$
- C. $-1$
- D. $2$

<details><summary>Answer</summary>

**B.** Taking tangent of both sides gives $(x+y)/(1-xy)=\tan(\pi/4)=1$. The condition $xy<1$ ensures the direct formula applies.

</details>

## Section B — 5 numerical-value questions

### 11. Cotangent inverse

Find the principal value of $\cot^{-1}(-\sqrt3)$.

<details><summary>Answer</summary>

$\cot^{-1}(-\sqrt3)=\pi-\cot^{-1}(\sqrt3)=\pi-\pi/6=5\pi/6$. Check: $\cot(5\pi/6)=\cos(5\pi/6)/\sin(5\pi/6)=(-\sqrt3/2)/(1/2)=-\sqrt3$, and $5\pi/6\in(0,\pi)$.

</details>

### 12. Solve for $x$

Solve $\tan^{-1}(3x)+\tan^{-1}x=\pi/4$.

<details><summary>Answer</summary>

A solution needs $3x^2<1$. Then $\dfrac{3x+x}{1-3x^2}=1$, so $3x^2+4x-1=0$ and $x=\dfrac{-4\pm\sqrt{16+12}}{6}=\dfrac{-2\pm\sqrt7}{3}$. The root $(-2-\sqrt7)/3\approx-1.55$ violates $3x^2<1$ and makes both angles negative. The solution is $x=(\sqrt7-2)/3\approx0.215$.

</details>

### 13. Reduce two angles

Evaluate $\sin^{-1}(\sin(5\pi/6))+\cos^{-1}(\cos(5\pi/6))$.

<details><summary>Answer</summary>

$\sin(5\pi/6)=1/2$ and $\sin^{-1}(1/2)=\pi/6$ because $5\pi/6$ is outside $[-\pi/2,\pi/2]$. But $5\pi/6\in[0,\pi]$, so $\cos^{-1}(\cos(5\pi/6))=5\pi/6$. The sum is $\pi/6+5\pi/6=\pi$.

</details>

### 14. Chain two identities

Evaluate $2\tan^{-1}(1/3)+\tan^{-1}(1/7)$.

<details><summary>Answer</summary>

First $2\tan^{-1}(1/3)=\tan^{-1}\!\big((2/3)/(8/9)\big)=\tan^{-1}(3/4)$. Then $xy=3/28<1$, so

$$
\tan^{-1}\!\left(\frac{3/4+1/7}{1-3/28}\right)=\tan^{-1}\!\left(\frac{25/28}{25/28}\right)=\tan^{-1}1=\frac{\pi}{4}.
$$

</details>

### 15. Inequality

Find the largest real $x$ satisfying $\sin^{-1}x\le\pi/6$.

<details><summary>Answer</summary>

Since $\sin^{-1}$ is increasing on $[-1,1]$, the inequality is equivalent to $x\le\sin(\pi/6)=1/2$. The largest value is $x=1/2$.

</details>

## Section C — 3 assertion–reason questions

For each question choose: **(A)** both statements are true and the reason explains the assertion; **(B)** both are true but the reason does not explain the assertion; **(C)** the assertion is true but the reason is false; **(D)** the assertion is false but the reason is true.

### 16. Reflection error

**Assertion:** $\sin^{-1}(\sin(5\pi/6))=5\pi/6$.

**Reason:** The principal branch of $\sin^{-1}$ is $[-\pi/2,\pi/2]$.

<details><summary>Answer</summary>

**D.** The reason is true. The assertion is false: $\sin(5\pi/6)=1/2$ and $\sin^{-1}(1/2)=\pi/6$, since $5\pi/6$ is not in the principal branch.

</details>

### 17. Complementary ranges

**Assertion:** $\tan^{-1}x+\cot^{-1}x=\pi/2$ for every real $x$.

**Reason:** The range of $\tan^{-1}$ is $(-\pi/2,\pi/2)$ and the range of $\cot^{-1}$ is $(0,\pi)$.

<details><summary>Answer</summary>

**B.** Both statements are true. The ranges alone do not explain the sum; the explanation needs $\cot\theta=\tan(\pi/2-\theta)$ together with a branch check. For example at $x=-1$, $-\pi/4+3\pi/4=\pi/2$.

</details>

### 18. Branch correction

**Assertion:** $\tan^{-1}2+\tan^{-1}3=3\pi/4$.

**Reason:** For $x,y>0$ with $xy>1$, $\tan^{-1}x+\tan^{-1}y=\pi+\tan^{-1}\!\big((x+y)/(1-xy)\big)$.

<details><summary>Answer</summary>

**A.** The reason is true and directly gives the assertion: $(2+3)/(1-6)=-1$, so $\tan^{-1}(-1)=-\pi/4$ and the sum is $\pi-\pi/4=3\pi/4$. Both original angles are positive, confirming the correction.

</details>

## Section D — 2 matching / multi-statement questions

### 19. Matching

Match each value in Column I with one in Column II.

| Column I | Column II |
| --- | --- |
| (i) $\cos^{-1}(-1/2)$ | (a) $-\pi/4$ |
| (ii) $\tan^{-1}(-1)$ | (b) $2\pi/3$ |
| (iii) $\csc^{-1}(-2)$ | (c) $-\pi/6$ |

<details><summary>Answer</summary>

(i)–(b), (ii)–(a), (iii)–(c).

- $\cos^{-1}(-1/2)=\pi-\pi/3=2\pi/3$, in $[0,\pi]$.
- $\tan^{-1}(-1)=-\pi/4$, in $(-\pi/2,\pi/2)$; $3\pi/4$ is not a principal value.
- $\csc^{-1}(-2)=\sin^{-1}(-1/2)=-\pi/6$, in $[-\pi/2,\pi/2]$ and not zero.

</details>

### 20. Multi-statement

Which of the following statements are correct?

- P. $\sin^{-1}x+\cos^{-1}x=\pi/2$ for all $x\in[-1,1]$.
- Q. $\tan^{-1}(-x)=-\tan^{-1}x$ for all real $x$.
- R. $\cos^{-1}(-x)=-\cos^{-1}x$ for all $x\in[-1,1]$.
- S. $\sec^{-1}x+\csc^{-1}x=\pi/2$ for all $|x|\ge1$.

Options:

- A. P, Q and S only
- B. P, Q and R only
- C. Q, R and S only
- D. all four

<details><summary>Answer</summary>

**A.** P, Q and S are the standard complementary and oddness results. R is false: cosine inverse is not odd; the correct rule is $\cos^{-1}(-x)=\pi-\cos^{-1}x$. A single counter-example suffices: at $x=1$, $\cos^{-1}(-1)=\pi$ while $-\cos^{-1}(1)=-\pi/2$.

</details>

## Review by error, not by score

| If you missed… | Revisit | Then retry |
| --- | --- | --- |
| 1–3, 9, 11, 16 or 19 | Domains, ranges and principal values | Write the branch interval before evaluating anything. |
| 5, 7 or 20 | Graphs and properties | Check whether the function is odd or of the $\pi-f(x)$ family. |
| 6, 13 or 17 | Complementary pairs | Verify the arguments are identical and in the shared domain. |
| 4, 8, 10, 14 or 18 | Identities | Test $xy$ before applying a tangent addition or double-angle formula. |
| 12 or 15 | Solving equations and inequalities | Re-test each root in the original equation; justify the inequality direction. |

<learning-block type="recap" title="Ready to move on?">

Aim for at least 16 correct out of 20 with a written branch check on every question. A correct answer you cannot justify is a revision target, not a mastered topic.

</learning-block>
