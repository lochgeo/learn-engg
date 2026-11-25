## JEE Main sprint: how to use this set

This is a **50-minute, no-notes** paper for after you have finished the chapter lessons. Spend about 15 minutes on Section A, 15 on Section B, 10 on Section C and 10 on Section D. Mark any question still open after 90 seconds and move on; a quick return later often solves it.

The goal is not only an answer. Before writing anything, name the tool: a conversion, a quadrant sign, an identity, a graph reading, or a general-solution family. Angles are in radians unless a degree sign is shown.

## Formula and conditions sheet

| Situation | Start with | Check before using it |
| --- | --- | --- |
| A formula contains $s=r\theta$ or sector area | Convert degrees by multiplying by $\pi/180$ | The angle must be in radians |
| You need the sign of a ratio | Locate the quadrant and apply ASTC | Only one or two ratios are positive per quadrant |
| One ratio is given, another is wanted | $\sin^2\theta+\cos^2\theta=1$ | The square fixes magnitude only; the quadrant fixes sign |
| A combined angle appears | Addition or double-angle formulae | Keep the $\mp$ sign in $\cos(A\pm B)$ |
| A sum or product of two ratios appears | Sum-to-product or product-to-sum | Use half the sum and half the difference |
| Period, amplitude or range is asked | $y=a\sin(bx+c)+d$ | Period is $2\pi/|b|$, not $2\pi|b|$ |
| "All solutions" is asked | $\sin$: $n\pi+(-1)^n\alpha$; $\cos$: $2n\pi\pm\alpha$; $\tan$: $n\pi+\alpha$ | Include the integer parameter $n$ |
| An interval is specified | Generate solutions by substituting integer $n$ | Check both endpoints and confirm the count on a sketch |

<learning-block type="mistake" title="Two checks that cost no time">

If an answer gives a sine or cosine outside $[-1,1]$, a "period" that grows when the input is multiplied, or a single solution where the question asked for a general solution, stop immediately. These are setup errors, not arithmetic slips.

</learning-block>

## Section A — 10 rapid MCQs

### 1. Degrees to radians

$240^\circ$ in radians is:

- A. $\dfrac{2\pi}{3}$
- B. $\dfrac{3\pi}{4}$
- C. $\dfrac{4\pi}{3}$
- D. $\dfrac{5\pi}{3}$

<details><summary>Answer</summary>

**C.** $240^\circ\times\dfrac{\pi}{180}=\dfrac{4\pi}{3}$ rad. It lies in quadrant III, between $\pi$ and $\frac{3\pi}{2}$, which is a useful extra check.

</details>

### 2. A standard value in another quadrant

$\sin150^\circ$ equals:

- A. $-\dfrac12$
- B. $\dfrac12$
- C. $\dfrac{\sqrt3}{2}$
- D. $-\dfrac{\sqrt3}{2}$

<details><summary>Answer</summary>

**B.** $150^\circ=180^\circ-30^\circ$ is in quadrant II, where sine is positive. The reference angle is $30^\circ$, so $\sin150^\circ=\sin30^\circ=\dfrac12$.

</details>

### 3. Recovering cosine

If $\sin\theta=\dfrac35$ and $\theta$ is acute, then $\cos\theta$ is:

- A. $\dfrac34$
- B. $\dfrac45$
- C. $\dfrac25$
- D. $\dfrac54$

<details><summary>Answer</summary>

**B.** $\cos^2\theta=1-\dfrac9{25}=\dfrac{16}{25}$. An acute angle has positive cosine, so $\cos\theta=\dfrac45$. The $3$–$4$–$5$ triangle makes the magnitudes immediate.

</details>

### 4. Period of a compressed function

The fundamental period of $\tan 3x$ is:

- A. $\pi$
- B. $2\pi$
- C. $\dfrac\pi3$
- D. $3\pi$

<details><summary>Answer</summary>

**C.** $\tan$ has fundamental period $\pi$, and multiplying the input by $3$ divides the period by $3$: $T=\dfrac\pi3$.

</details>

### 5. A double angle in disguise

The value of $\sin15^\circ\cos15^\circ$ is:

- A. $\dfrac14$
- B. $\dfrac12$
- C. $\dfrac{\sqrt3}{4}$
- D. $\dfrac{\sqrt2}{4}$

<details><summary>Answer</summary>

**A.** From $\sin2A=2\sin A\cos A$, we get $\sin15^\circ\cos15^\circ=\dfrac12\sin30^\circ=\dfrac12\cdot\dfrac12=\dfrac14$.

</details>

### 6. The cosine difference formula

Which identity is correct?

- A. $\cos(A-B)=\cos A\cos B-\sin A\sin B$
- B. $\cos(A-B)=\cos A\cos B+\sin A\sin B$
- C. $\cos(A-B)=\sin A\cos B+\cos A\sin B$
- D. $\cos(A-B)=\cos A\sin B-\sin A\cos B$

<details><summary>Answer</summary>

**B.** Setting $A=B$ in option B gives $\cos0=1$, which works for the difference formula. Option A would give $\cos0=0$, so it cannot be right. Option C is the sine addition formula.

</details>

### 7. Range of a shifted wave

The range of $y=2\sin x+3$ is:

- A. $[1,5]$
- B. $[2,3]$
- C. $[-2,5]$
- D. $[3,5]$

<details><summary>Answer</summary>

**A.** Since $\sin x\in[-1,1]$, we have $2\sin x\in[-2,2]$ and $y\in[3-2,3+2]=[1,5]$. The midline is $y=3$ and the amplitude is $2$.

</details>

### 8. General solution of tangent

The general solution of $\tan x=1$ is:

- A. $x=2n\pi+\dfrac\pi4$
- B. $x=n\pi+\dfrac\pi4$
- C. $x=n\pi\pm\dfrac\pi4$
- D. $x=2n\pi\pm\dfrac\pi4$

<details><summary>Answer</summary>

**B.** The principal angle is $\dfrac\pi4$ and tangent repeats with period $\pi$, so $x=n\pi+\dfrac\pi4$, $n\in\mathbb Z$. Option A misses the solutions shifted by an odd multiple of $\pi$.

</details>

### 9. Arc length

In a circle of radius $2$, an angle of $\dfrac\pi2$ radians subtends an arc of length:

- A. $\pi$
- B. $2\pi$
- C. $\dfrac\pi2$
- D. $4\pi$

<details><summary>Answer</summary>

**A.** $s=r\theta=2\times\dfrac\pi2=\pi$. This is one quarter of the circumference $4\pi$, as $\frac\pi2$ is one quarter of a full turn.

</details>

### 10. Tangent from cosine

If $\cos\theta=-\dfrac12$ and $\theta$ lies in quadrant II, then $\tan\theta$ equals:

- A. $\sqrt3$
- B. $-\sqrt3$
- C. $\dfrac1{\sqrt3}$
- D. $-\dfrac1{\sqrt3}$

<details><summary>Answer</summary>

**B.** $\sin^2\theta=1-\dfrac14=\dfrac34$, and sine is positive in quadrant II, so $\sin\theta=\dfrac{\sqrt3}{2}$. Then $\tan\theta=\dfrac{\sqrt3/2}{-1/2}=-\sqrt3$.

</details>

## Section B — 5 numerical-value questions

### 11. Evaluate a combined sine

Find the exact value of $\sin75^\circ\cos15^\circ+\cos75^\circ\sin15^\circ$.

<details><summary>Answer</summary>

This is $\sin(75^\circ+15^\circ)=\sin90^\circ=1$ by the sine addition formula. Recognising the pattern is much faster than evaluating each factor separately.

</details>

### 12. Secant plus tangent

If $\sin\theta=\dfrac5{13}$ and $\theta$ is in quadrant II, find $\sec\theta+\tan\theta$.

<details><summary>Answer</summary>

$\cos^2\theta=1-\dfrac{25}{169}=\dfrac{144}{169}$, and cosine is negative in quadrant II, so $\cos\theta=-\dfrac{12}{13}$. Hence $\sec\theta=-\dfrac{13}{12}$ and $\tan\theta=\dfrac{5/13}{-12/13}=-\dfrac5{12}$. Their sum is $-\dfrac{18}{12}=-\dfrac32$.

</details>

### 13. A cosine double angle

Find the exact value of $\cos^215^\circ-\sin^215^\circ$.

<details><summary>Answer</summary>

By the double-angle formula this is $\cos30^\circ=\dfrac{\sqrt3}{2}$. The sign is positive because $30^\circ$ is acute.

</details>

### 14. Amplitude times period

For $y=5\sin\!\left(\dfrac x2+\dfrac\pi4\right)$, find the product of the amplitude and the fundamental period.

<details><summary>Answer</summary>

Amplitude $=5$. With $b=\dfrac12$, the period is $\dfrac{2\pi}{1/2}=4\pi$. The product is $5\times4\pi=20\pi$.

</details>

### 15. Sum of solutions

Find the sum of all solutions of $\cos2x=\cos x$ in $0\le x\le2\pi$.

<details><summary>Answer</summary>

Using $\cos2x=2\cos^2x-1$, put $c=\cos x$: $2c^2-c-1=0=(2c+1)(c-1)$. Thus $\cos x=1$, giving $x=0,2\pi$, or $\cos x=-\dfrac12$, giving $x=\dfrac{2\pi}{3},\dfrac{4\pi}{3}$. The four solutions sum to $0+\dfrac{2\pi}{3}+\dfrac{4\pi}{3}+2\pi=4\pi$.

</details>

## Section C — 3 assertion–reason questions

For each question choose: **A** — both statements true and the reason correctly explains the assertion; **B** — both true but the reason does not explain the assertion; **C** — assertion true but reason false; **D** — assertion false but reason true.

### 16. Tangent repetition

**Assertion:** $\tan(x+\pi)=\tan x$ wherever both sides are defined.

**Reason:** The fundamental period of $\tan x$ is $\pi$.

<details><summary>Answer</summary>

**A.** Both are true, and the reason is exactly why the assertion holds: adding one full tangent period leaves the value unchanged. Adding $\pi$ moves the radius to the opposite point, which has the same slope.

</details>

### 17. Does sine determine cosine?

**Assertion:** If $\sin\theta=\dfrac12$ then $\cos\theta=\dfrac{\sqrt3}{2}$.

**Reason:** $\sin^2\theta+\cos^2\theta=1$.

<details><summary>Answer</summary>

**D.** The reason is true, but the assertion is false: $\theta=\dfrac{5\pi}{6}$ also has $\sin\theta=\dfrac12$ and gives $\cos\theta=-\dfrac{\sqrt3}{2}$. The identity fixes only $\cos^2\theta$; the quadrant fixes the sign.

</details>

### 18. Monotonicity versus addition

**Assertion:** $\sin30^\circ+\sin60^\circ>\sin90^\circ$.

**Reason:** $\sin x$ is increasing on $\left[0,\dfrac\pi2\right]$.

<details><summary>Answer</summary>

**B.** Both are true: $\dfrac12+\dfrac{\sqrt3}{2}\approx1.366>1$, and sine does increase on that interval. But monotonicity does not explain the inequality — it says nothing about adding two sine values. The inequality holds simply because both terms are positive and their sum exceeds $1$; sine is not an additive function.

</details>

## Section D — matching and multi-statement questions

### 19. Match each function to its fundamental period

Match Column I with Column II.

| Column I — function | Column II — period |
| --- | --- |
| (i) $\sin2x$ | (p) $\pi$ |
| (ii) $\tan\dfrac x2$ | (q) $\dfrac\pi2$ |
| (iii) $\cos4x$ | (r) $2\pi$ |
| (iv) $\cos\dfrac x2$ | (s) $4\pi$ |

<details><summary>Answer</summary>

(i)–(p), (ii)–(r), (iii)–(q), (iv)–(s). For $\sin(bx)$ or $\cos(bx)$ the period is $\dfrac{2\pi}{|b|}$, giving $\pi$, $\dfrac\pi2$ and $4\pi$ respectively. For $\tan(bx)$ the period is $\dfrac\pi{|b|}$, and with $b=\dfrac12$ that is $2\pi$.

</details>

### 20. Which statements are correct?

Choose the combination of correct statements.

1. $\sin(A+B)=\sin A+\sin B$
2. $\cos2A=1-2\sin^2A$
3. $\tan(A-B)=\dfrac{\tan A-\tan B}{1+\tan A\tan B}$
4. $\sin C-\sin D=2\cos\dfrac{C+D}{2}\sin\dfrac{C-D}{2}$

- A. (i), (ii) and (iii) only
- B. (ii), (iii) and (iv) only
- C. (i) and (iv) only
- D. all four

<details><summary>Answer</summary>

**B.** Statement (i) is false: sine is not additive. Testing $A=B=30^\circ$ gives $\sin60^\circ\approx0.866$ on the left but $\sin30^\circ+\sin30^\circ=1$ on the right. Statements (ii), (iii) and (iv) are standard double-angle, tangent-difference and sum-to-product identities respectively, so B is the correct combination.

</details>

## Review by error, not by score

| If you missed… | Revisit | Then retry |
| --- | --- | --- |
| 1, 9 | Angles, arcs and the unit circle | Convert to radians before using any arc formula. |
| 2, 3, 10, 17 | Angles and identities | Draw the quadrant, then apply ASTC before fixing a sign. |
| 5, 6, 11, 13, 18, 20 | Sum and product formulae | Write the full formula and test a pair of standard angles. |
| 4, 7, 14, 19 | Graphs and periodic behaviour | Divide the standard period by $|b|$; read amplitude from half the peak-to-trough gap. |
| 8, 12, 15 | Trigonometric equations | Write the general family first, then generate interval solutions. |

<learning-block type="recap" title="Ready to move on?">

Aim for at least 16 correct out of 20 with a written method choice for each question. A question you answer correctly but cannot justify is a revision target, not a mastered topic.

</learning-block>
