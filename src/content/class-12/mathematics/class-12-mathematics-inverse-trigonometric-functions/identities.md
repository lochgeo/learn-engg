## Two angles become one

A surveyor knows two small angles of elevation, $1/2$ and $1/3$ radians in tangent units, and wants the angle of the combined sight line. Adding inverse tangents directly is awkward; adding their tangents is easy, provided you remember to return to the correct branch. This is the central skill of the chapter: combine angles with an ordinary trigonometric addition formula, then correct the answer using the principal branch.

## 1. The complementary identities

Three pairings hold on their common domains:

$$
\sin^{-1}x+\cos^{-1}x=\frac{\pi}{2},\qquad \tan^{-1}x+\cot^{-1}x=\frac{\pi}{2},\qquad \sec^{-1}x+\csc^{-1}x=\frac{\pi}{2}.
$$

They were derived from the graphs in the previous module. Here they serve as the first simplification move: whenever an expression contains both members of a pair at the *same* argument, replace one with the other and cancel.

## 2. Deriving the tangent addition identity

Let $\alpha=\tan^{-1}x$ and $\beta=\tan^{-1}y$, so $\alpha,\beta\in(-\pi/2,\pi/2)$ and $\tan\alpha=x$, $\tan\beta=y$. The ordinary addition formula gives

$$
\tan(\alpha+\beta)=\frac{\tan\alpha+\tan\beta}{1-\tan\alpha\tan\beta}=\frac{x+y}{1-xy}.
$$

If $xy<1$, the sum $\alpha+\beta$ still lies in $(-\pi/2,\pi/2)$, so applying $\tan^{-1}$ returns it unchanged:

$$
\tan^{-1}x+\tan^{-1}y=\tan^{-1}\!\left(\frac{x+y}{1-xy}\right),\qquad xy<1.
$$

If $xy>1$ with $x,y>0$, then $\alpha+\beta\in(\pi/2,\pi)$; the arctangent returns $\alpha+\beta-\pi$, so we must add $\pi$. If $x,y<0$ and $xy>1$, then $\alpha+\beta\in(-\pi,-\pi/2)$ and we must subtract $\pi$. If $xy=1$ the denominator vanishes and the sum is $\pm\pi/2$. The full statement is

$$
\tan^{-1}x+\tan^{-1}y=
\begin{cases}
\tan^{-1}\!\left(\dfrac{x+y}{1-xy}\right), & xy<1,\\[2mm]
\pi+\tan^{-1}\!\left(\dfrac{x+y}{1-xy}\right), & x>0,\ y>0,\ xy>1,\\[2mm]
-\pi+\tan^{-1}\!\left(\dfrac{x+y}{1-xy}\right), & x<0,\ y<0,\ xy>1.
\end{cases}
$$

## 3. Difference, double and triple angles

Replacing $y$ by $-y$ gives the difference formula

$$
\tan^{-1}x-\tan^{-1}y=\tan^{-1}\!\left(\frac{x-y}{1+xy}\right),\qquad xy>-1,
$$

with a $\pm\pi$ correction when $xy<-1$ (add $\pi$ if $x>0>y$, subtract $\pi$ if $y>0>x$). Setting $y=x$ when $|x|<1$ yields the double-angle forms

$$
2\tan^{-1}x=\tan^{-1}\!\left(\frac{2x}{1-x^2}\right)=\sin^{-1}\!\left(\frac{2x}{1+x^2}\right)=\cos^{-1}\!\left(\frac{1-x^2}{1+x^2}\right)\ (x\ge0).
$$

The middle form needs $|x|\le1$ so that $2\tan^{-1}x\in[-\pi/2,\pi/2]$; the last needs $x\ge0$ so that $2\tan^{-1}x\in[0,\pi]$. The triple-angle form, valid for $|x|<1/\sqrt{3}$, is

$$
3\tan^{-1}x=\tan^{-1}\!\left(\frac{3x-x^3}{1-3x^2}\right).
$$

All three come from the same recipe: set $\theta=\tan^{-1}x$, use $\tan 2\theta$ or $\tan 3\theta$, then check that the resulting multiple of $\theta$ lies in the branch of the function you are using.

## 4. Sine and cosine versions

For $x,y\in[-1,1]$, writing $\alpha=\sin^{-1}x$, $\beta=\sin^{-1}y$ and expanding $\sin(\alpha+\beta)$ gives

$$
\sin^{-1}x+\sin^{-1}y=\sin^{-1}\!\left(x\sqrt{1-y^2}+y\sqrt{1-x^2}\right),
$$

provided $\alpha+\beta\in[-\pi/2,\pi/2]$ — guaranteed if $x^2+y^2\le1$ or $xy\le0$. When $x,y>0$ and $x^2+y^2>1$ the sum exceeds $\pi/2$ and the right side must be replaced by $\pi-\sin^{-1}(\cdots)$. Similarly,

$$
\cos^{-1}x+\cos^{-1}y=\cos^{-1}\!\left(xy-\sqrt{1-x^2}\sqrt{1-y^2}\right)\quad\text{if }x+y\ge0,
$$

and $2\pi-\cos^{-1}(\cdots)$ if $x+y<0$, because a sum of two angles from $[0,\pi]$ can reach as high as $2\pi$. The tangent versions are usually safer because their single branch condition, $xy<1$, is easy to test.

## 5. Worked examples with numbers

**Example 1.** Evaluate $\tan^{-1}(1/2)+\tan^{-1}(1/3)$.

Here $xy=1/6<1$, so the direct formula applies:

$$
\tan^{-1}\!\left(\frac{\tfrac12+\tfrac13}{1-\tfrac16}\right)=\tan^{-1}\!\left(\frac{5/6}{5/6}\right)=\tan^{-1}1=\frac{\pi}{4}.
$$

**Sanity check:** both angles are positive and each is less than $\pi/4$, so their sum is less than $\pi/2$; $\pi/4\approx0.785$ radians matches $\tan^{-1}1$.

**Example 2.** Evaluate $\tan^{-1}2+\tan^{-1}3$.

Now $xy=6>1$ with both positive, so the $\pi$ correction is essential:

$$
\frac{2+3}{1-6}=\frac{5}{-5}=-1,\qquad \tan^{-1}(-1)=-\frac{\pi}{4},
$$

$$
\tan^{-1}2+\tan^{-1}3=\pi-\frac{\pi}{4}=\frac{3\pi}{4}.
$$

**Sanity check:** $\tan^{-1}2\approx1.107$ and $\tan^{-1}3\approx1.249$; their sum is about $2.356$, which is $3\pi/4$. Quoting $-\pi/4$ would be a negative answer for the sum of two positive angles — an immediate signal of a missed branch correction.

**Example 3.** Show $2\tan^{-1}(1/3)=\tan^{-1}(3/4)$.

Since $|1/3|<1$,

$$
\frac{2(1/3)}{1-1/9}=\frac{2/3}{8/9}=\frac34,
$$

so $2\tan^{-1}(1/3)=\tan^{-1}(3/4)$. Numerically both are about $0.6435$ radians.

<learning-block type="mistake" title="The branch condition is part of the formula">

Writing $\tan^{-1}x+\tan^{-1}y=\tan^{-1}\!\big((x+y)/(1-xy)\big)$ without testing $xy$ gives $-\pi/4$ for $\tan^{-1}2+\tan^{-1}3$, which is wrong by a whole $\pi$. A related error is using $2\tan^{-1}x=\tan^{-1}(2x/(1-x^2))$ for $|x|>1$: at $x=2$ the left side exceeds $\pi/2$, outside the range of $\tan^{-1}$, so a $\pi$ correction is needed there too.

</learning-block>

## Try it yourself

**A.** Evaluate $\tan^{-1}(1/2)+\tan^{-1}(1/3)$ without a calculator.

<details><summary>Show the reasoning</summary>

$xy=1/6<1$, so $\tan^{-1}\!\left(\frac{5/6}{5/6}\right)=\tan^{-1}1=\pi/4$.

</details>

**B.** Evaluate $\tan^{-1}2+\tan^{-1}3$, stating why the naive formula fails.

<details><summary>Show the reasoning</summary>

Here $xy=6>1$, so the sum lies beyond $\pi/2$. The naive formula gives $\tan^{-1}(-1)=-\pi/4$; adding $\pi$ gives the correct $3\pi/4$.

</details>

**C.** Express $2\tan^{-1}(1/3)$ as a single $\tan^{-1}$.

<details><summary>Show the reasoning</summary>

With $|x|<1$, $2\tan^{-1}x=\tan^{-1}\!\big(2x/(1-x^2)\big)$. For $x=1/3$ the argument is $(2/3)/(8/9)=3/4$, so the answer is $\tan^{-1}(3/4)$.

</details>

## Remember

- Always test the branch condition before applying an addition identity; $xy<1$ is the key test for tangent.
- For $x,y>0$ with $xy>1$, add $\pi$; for $x,y<0$ with $xy>1$, subtract $\pi$.
- $2\tan^{-1}x=\tan^{-1}(2x/(1-x^2))$ only for $|x|<1$ without correction.
- Complementary pairs collapse $\sin^{-1}x+\cos^{-1}x$, $\tan^{-1}x+\cot^{-1}x$ and $\sec^{-1}x+\csc^{-1}x$ to $\pi/2$.
- End with a magnitude check: a sum of positive angles cannot be negative, and a sum of two angles below $\pi/2$ cannot exceed $\pi$.

The next module turns these identities into a method for solving equations, where rejecting an inadmissible root matters as much as finding it.
