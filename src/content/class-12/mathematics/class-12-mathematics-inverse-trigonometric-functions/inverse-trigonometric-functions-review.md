## Your study plan for today

These four modules are a connected toolkit: branches define the functions, graphs reveal their symmetry, identities combine angles, and equations put the tools to work. A focused first pass takes about **2 hours**, plus this check:

| Step | Module | Minutes |
| --- | --- | --- |
| 1 | Domains, ranges and principal values | 25 |
| 2 | Graphs and properties | 25 |
| 3 | Identities | 30 |
| 4 | Solving inverse trigonometric equations | 30 |
| 5 | This mastery check | 25 |

Work each question from a blank page before opening its reveal. Mark a module complete only when you can reproduce its branch table without looking. After this pass, the **JEE Main timed practice** module offers a $50$-minute mixed paper; save it until the individual tools feel automatic.

## First choose the tool

| Clue in the question | Start with |
| --- | --- |
| "domain of $f(x)$" with an inverse inside | Set the inverse's argument range: $[-1,1]$ or $|x|\ge1$ |
| "principal value" of a plain number | Solve $\sin y=x$ (etc.) inside the principal branch |
| Argument is $\sin\theta$, $\cos\theta$ or $\tan\theta$ | Reduce $\theta$ into the branch using symmetry/periodicity, then evaluate |
| Negative input, e.g. $\cos^{-1}(-x)$ | Odd rule for $\sin^{-1},\tan^{-1},\csc^{-1}$; $\pi-f(x)$ for the other three |
| A pair like $\sin^{-1}x+\cos^{-1}x$ at the same $x$ | Complementary identity $=\pi/2$ |
| Two $\tan^{-1}$ terms added or subtracted | $\tan^{-1}\!\big((x\pm y)/(1\mp xy)\big)$ **with** a branch test |
| Double or triple angle | $\tan^{-1}\!\big(2x/(1-x^2)\big)$ for $|x|<1$, or the triple-angle form |
| An equation | Convert to algebra, then test every root in the original equation |
| An inequality | Use monotonicity and state whether the direction flips |
| A sum that looks impossible (negative from positive angles) | Check $xy>1$ and add or subtract $\pi$ |

## Mastery check

Try each question without looking at the answer. Angles are in radians.

### 1. Find a domain

Find the domain of $f(x)=\sin^{-1}(2x-1)$.

<details><summary>Answer and reasoning</summary>

Inverse sine accepts inputs in $[-1,1]$, so $-1\le 2x-1\le1$. Adding $1$: $0\le2x\le2$, hence $x\in[0,1]$.

</details>

### 2. A principal value with a negative argument

Evaluate $\cos^{-1}(-1/2)$.

<details><summary>Answer and reasoning</summary>

The branch is $[0,\pi]$, so the angle is in the second quadrant: $\cos^{-1}(-1/2)=\pi-\cos^{-1}(1/2)=\pi-\pi/3=2\pi/3$. Check: $\cos(2\pi/3)=-1/2$.

</details>

### 3. Reduce the angle first

Evaluate $\sin^{-1}(\sin(7\pi/6))$.

<details><summary>Answer and reasoning</summary>

$7\pi/6$ is outside $[-\pi/2,\pi/2]$. Since $\sin(7\pi/6)=-1/2$ and $-\pi/6$ lies in the branch with $\sin(-\pi/6)=-1/2$, the value is $-\pi/6$.

</details>

### 4. Read the graph

Which of the six inverse trig functions decrease on each interval of their domain? Justify briefly.

<details><summary>Answer and reasoning</summary>

$\cos^{-1}$, $\cot^{-1}$ and $\csc^{-1}$ decrease; $\sin^{-1}$, $\tan^{-1}$ and $\sec^{-1}$ increase. For example $\cos^{-1}(-1)=\pi$ but $\cos^{-1}(1)=0$, so the cosine-inverse curve falls. Their derivatives are negative, while the other three have positive derivatives.

</details>

### 5. Use an oddness rule

Evaluate $\csc^{-1}(-2)$.

<details><summary>Answer and reasoning</summary>

Cosecant inverse is odd: $\csc^{-1}(-2)=-\csc^{-1}(2)=-\sin^{-1}(1/2)=-\pi/6$. Check: $\csc(-\pi/6)=-2$.

</details>

### 6. Complementary pair

Evaluate $\sec^{-1}(2)+\csc^{-1}(2)$.

<details><summary>Answer and reasoning</summary>

For $|x|\ge1$, $\sec^{-1}x+\csc^{-1}x=\pi/2$. Explicitly, $\sec^{-1}(2)=\cos^{-1}(1/2)=\pi/3$ and $\csc^{-1}(2)=\sin^{-1}(1/2)=\pi/6$, and $\pi/3+\pi/6=\pi/2$.

</details>

### 7. Addition formula, safe case

Evaluate $\tan^{-1}(1/2)+\tan^{-1}(1/3)$.

<details><summary>Answer and reasoning</summary>

$xy=1/6<1$, so $\tan^{-1}\!\left(\frac{1/2+1/3}{1-1/6}\right)=\tan^{-1}\!\left(\frac{5/6}{5/6}\right)=\tan^{-1}1=\pi/4$.

</details>

### 8. Addition formula, branch correction needed

Evaluate $\tan^{-1}2+\tan^{-1}3$.

<details><summary>Answer and reasoning</summary>

$xy=6>1$ with both positive, so $\pi$ must be added. The raw arctangent is $\tan^{-1}\!\big(5/(1-6)\big)=\tan^{-1}(-1)=-\pi/4$, hence the sum is $\pi-\pi/4=3\pi/4$. Both original angles are positive, so a negative result would be impossible.

</details>

### 9. Solve an equation and reject a root

Solve $\tan^{-1}(2x)+\tan^{-1}(3x)=\pi/4$.

<details><summary>Answer and reasoning</summary>

A solution needs $6x^2<1$. Then $\frac{5x}{1-6x^2}=1$, giving $6x^2+5x-1=0$ and roots $x=1/6$, $x=-1$. The root $-1$ breaks $6x^2<1$ and makes both angles negative, so it is extraneous. The solution is $x=1/6$.

</details>

### 10. Solve an inequality

Solve $\sin^{-1}x>\cos^{-1}x$ for $x\in[-1,1]$.

<details><summary>Answer and reasoning</summary>

Use $\cos^{-1}x=\pi/2-\sin^{-1}x$: the inequality becomes $2\sin^{-1}x>\pi/2$, so $\sin^{-1}x>\pi/4$. Since $\sin^{-1}$ is increasing, $x>\sin(\pi/4)=1/\sqrt2$. With the domain cap, the solution set is $(1/\sqrt2,\,1]$.

</details>

## Self-check

You are ready to move on when you can:

- write the domain and principal branch of all six functions from memory;
- reduce $\sin^{-1}(\sin\theta)$ and $\cos^{-1}(\cos\theta)$ for any $\theta$ by finding an equivalent angle in the branch;
- apply the correct negative-input rule, including $\cos^{-1}(-x)=\pi-\cos^{-1}x$;
- explain why $\sin^{-1}$, $\tan^{-1}$, $\sec^{-1}$ rise while the other three fall;
- use complementary pairs to collapse a same-argument sum to $\pi/2$;
- add two inverse tangents with the correct $xy<1$, $xy>1$ or $xy=1$ handling;
- derive and use $2\tan^{-1}x=\tan^{-1}(2x/(1-x^2))$ with its $|x|<1$ condition;
- solve an inverse trig equation and reject roots that fail the original equation;
- solve an inequality using monotonicity with the direction justified;
- check every numeric answer against the principal branch and the sign of the angles involved.

If one item still feels shaky, revisit that module and redo its questions with the reveals closed.
