## Flip a graph across a diagonal

Draw $y=\sin x$ for $-\pi/2\le x\le\pi/2$ and reflect the paper across the line $y=x$. The axes swap roles: the point $(\pi/6,1/2)$ becomes $(1/2,\pi/6)$, and the reflected curve is exactly $y=\sin^{-1}x$. No new curve needs to be memorised. Every inverse trig graph is the reflection of one restricted trigonometric graph in $y=x$, and the symmetry of that picture explains most of the identities in this chapter.

## 1. The reflection principle

Reflecting in $y=x$ interchanges domain and range. If $(a,b)$ lies on the restricted graph of $f$, then $(b,a)$ lies on the graph of $f^{-1}$. Two consequences follow at once:

- The domain of $f^{-1}$ is the range of $f$, and the range of $f^{-1}$ is the domain of $f$ — exactly the pairs listed in the first module.
- Where the restricted graph of $f$ has a horizontal tangent, the inverse has a vertical tangent, and vice versa.

For instance, $\sin$ has a horizontal tangent at $\theta=\pi/2$, so $\sin^{-1}$ has a vertical tangent at $x=1$; tangent has vertical asymptotes at $\pm\pi/2$, so $\tan^{-1}$ has horizontal asymptotes at $y=\pm\pi/2$.

## 2. Reading the six curves

| Curve | Key points | Shape on each interval of its domain |
| --- | --- | --- |
| $y=\sin^{-1}x$ | $(-1,-\pi/2)$, $(0,0)$, $(1,\pi/2)$ | Increasing S-curve with vertical tangents at the ends |
| $y=\cos^{-1}x$ | $(-1,\pi)$, $(0,\pi/2)$, $(1,0)$ | Decreasing curve, mirror image of $\sin^{-1}$ about the $x$-axis shifted up by $\pi/2$ |
| $y=\tan^{-1}x$ | $(0,0)$; $(1,\pi/4)$, $(-1,-\pi/4)$ | Increasing, horizontal asymptotes $y=\pm\pi/2$ |
| $y=\cot^{-1}x$ | $(0,\pi/2)$; $(1,\pi/4)$, $(-1,3\pi/4)$ | Decreasing, horizontal asymptotes $y=0$ and $y=\pi$ |
| $y=\sec^{-1}x$ | $(1,0)$, $(-1,\pi)$ | Increasing on $[1,\infty)$ toward $y=\pi/2$ and on $(-\infty,-1]$ from $y=\pi/2$ toward $\pi$; the line $y=\pi/2$ is never met |
| $y=\csc^{-1}x$ | $(1,\pi/2)$, $(-1,-\pi/2)$ | Decreasing on $[1,\infty)$ toward $y=0$ and on $(-\infty,-1]$ toward $y=0$; the line $y=0$ is never met |

All angles are in radians. The curves for $\sec^{-1}$ and $\csc^{-1}$ have two separate pieces because their domains exclude the gap $(-1,1)$.

## 3. Symmetry: negative inputs

Three of the functions are odd; the other three turn a negative input into a supplementary angle.

| Function | Value at $-x$ | Type |
| --- | --- | --- |
| $\sin^{-1}x$ | $-\sin^{-1}x$ | odd |
| $\cos^{-1}x$ | $\pi-\cos^{-1}x$ | neither |
| $\tan^{-1}x$ | $-\tan^{-1}x$ | odd |
| $\cot^{-1}x$ | $\pi-\cot^{-1}x$ | neither |
| $\sec^{-1}x$ | $\pi-\sec^{-1}x$ | neither |
| $\csc^{-1}x$ | $-\csc^{-1}x$ | odd |

**Deriving two of them.** Let $\theta=\sin^{-1}(-x)$, so $\sin\theta=-x$ with $\theta\in[-\pi/2,\pi/2]$. Then $\sin(-\theta)=x$ and $-\theta$ is also in the branch, so $-\theta=\sin^{-1}x$, giving $\sin^{-1}(-x)=-\sin^{-1}x$.

Now let $\phi=\cos^{-1}(-x)$, so $\cos\phi=-x$ with $\phi\in[0,\pi]$. Since $\cos(\pi-\phi)=-\cos\phi=x$ and $\pi-\phi\in[0,\pi]$, we get $\cos^{-1}(x)=\pi-\phi$, hence $\cos^{-1}(-x)=\pi-\cos^{-1}x$. The remaining rows follow the same pattern: use $\tan(-\theta)=-\tan\theta$, $\cot(\pi-\theta)=-\cot\theta$ and $\sec(\pi-\theta)=-\sec\theta$.

## 4. Complementary pairs and monotonicity

For $x$ in the common domain,

$$
\sin^{-1}x+\cos^{-1}x=\frac{\pi}{2},\qquad \tan^{-1}x+\cot^{-1}x=\frac{\pi}{2},\qquad \sec^{-1}x+\csc^{-1}x=\frac{\pi}{2}.
$$

To derive the first, put $\sin^{-1}x=\theta\in[-\pi/2,\pi/2]$. Then $\cos(\pi/2-\theta)=\sin\theta=x$, and $\pi/2-\theta\in[0,\pi]$, so it is the principal value of $\cos^{-1}x$. Hence $\cos^{-1}x=\pi/2-\theta$. The other two use $\tan(\pi/2-\theta)=\cot\theta$ and $\sec(\pi/2-\theta)=\csc\theta$ with the same branch check.

Reading slopes from the reflected curves gives the monotonicity:

- $\sin^{-1}$, $\tan^{-1}$ and $\sec^{-1}$ are **increasing** on each interval of their domains;
- $\cos^{-1}$, $\cot^{-1}$ and $\csc^{-1}$ are **decreasing** on each interval of their domains.

For example, $\cos^{-1}(-1)=\pi$ while $\cos^{-1}(1)=0$, so the curve must fall as $x$ grows. Differentiating confirms this: the derivatives of $\sin^{-1}x$, $\tan^{-1}x$ and $\sec^{-1}x$ are positive, while those of $\cos^{-1}x$, $\cot^{-1}x$ and $\csc^{-1}x$ are negative. These derivatives are derived properly in the *Continuity and Differentiability* chapter; here the graph is the evidence.

## 5. Worked example: symmetry in numbers

Evaluate $\cos^{-1}(-1/2)+\cos^{-1}(1/2)$ and $\sec^{-1}(-2)+\csc^{-1}(-2)$.

For the first pair, $\cos^{-1}(1/2)=\pi/3$. Using the symmetry rule, $\cos^{-1}(-1/2)=\pi-\pi/3=2\pi/3$. The sum is

$$
\frac{2\pi}{3}+\frac{\pi}{3}=\pi.
$$

Graphically the points $(1/2,\pi/3)$ and $(-1/2,2\pi/3)$ are symmetric about $(0,\pi/2)$, so their heights add to $\pi$ — a useful check without recalculating either angle.

For the second pair, $\sec^{-1}(-2)=\cos^{-1}(-1/2)=2\pi/3$ and $\csc^{-1}(-2)=\sin^{-1}(-1/2)=-\pi/6$. Their sum is $2\pi/3-\pi/6=\pi/2$, agreeing with the complementary-pair identity for $|x|\ge1$.

**Sanity check:** both results are pure numbers (radian measures); the first lies between $0$ and $2\pi$ as a sum of two values from $[0,\pi]$, and the second matches an identity that holds for every $|x|\ge1$.

<learning-block type="mistake" title="Not every inverse function is odd">

It is tempting to transfer the rule $\sin^{-1}(-x)=-\sin^{-1}x$ to cosine and write $\cos^{-1}(-x)=-\cos^{-1}x$. That is false: $\cos^{-1}(-1)=\pi$, whereas $-\cos^{-1}(1)=-\pi/2$. The correct rule is $\cos^{-1}(-x)=\pi-\cos^{-1}x$. A second error is calling all six functions increasing; $\cos^{-1}$, $\cot^{-1}$ and $\csc^{-1}$ decrease on their domains.

</learning-block>

## Try it yourself

**A.** Find $\cot^{-1}(-1)$.

<details><summary>Show the reasoning</summary>

$\cot^{-1}(-1)=\pi-\cot^{-1}(1)=\pi-\pi/4=3\pi/4$. Check: $\cot(3\pi/4)=-1$ and $3\pi/4\in(0,\pi)$.

</details>

**B.** Find $\csc^{-1}(-2)$ and state which symmetry rule you used.

<details><summary>Show the reasoning</summary>

Cosecant inverse is odd, so $\csc^{-1}(-2)=-\csc^{-1}(2)=-\sin^{-1}(1/2)=-\pi/6$. Check: $\sin(-\pi/6)=-1/2$, so $\csc(-\pi/6)=-2$, and $-\pi/6$ lies in the branch excluding $0$.

</details>

**C.** Without calculating either angle separately, find $\sec^{-1}(2)+\csc^{-1}(2)$.

<details><summary>Show the reasoning</summary>

The complementary identity gives $\pi/2$ for any $|x|\ge1$. Checking explicitly: $\sec^{-1}(2)=\cos^{-1}(1/2)=\pi/3$ and $\csc^{-1}(2)=\sin^{-1}(1/2)=\pi/6$, and $\pi/3+\pi/6=\pi/2$.

</details>

## Remember

- Each inverse graph is the reflection of a restricted trig graph in $y=x$.
- $\sin^{-1}$, $\tan^{-1}$, $\csc^{-1}$ are odd; $\cos^{-1}$, $\cot^{-1}$, $\sec^{-1}$ obey $f(-x)=\pi-f(x)$.
- $\sin^{-1}x+\cos^{-1}x=\tan^{-1}x+\cot^{-1}x=\sec^{-1}x+\csc^{-1}x=\pi/2$.
- $\sin^{-1}$, $\tan^{-1}$, $\sec^{-1}$ increase; the other three decrease on each interval of their domains.
- Symmetry about a point on the graph turns into an arithmetic check on the corresponding angles.

The **identities** module uses the tangent addition formula to combine two inverse tangent values into one — the tool most often needed in exam problems.
