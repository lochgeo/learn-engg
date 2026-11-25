## One circle, many equivalent forms

A trigonometric identity is an equality between two expressions that holds for every angle where both are defined. Identities are not extra facts to memorise in isolation: almost all of them come from the single unit-circle equation $\cos^2\theta+\sin^2\theta=1$ and the definitions of the six ratios. Learning to move between forms is what turns a messy expression into a solvable one.

## 1. The fundamental identity

A point on the unit circle has coordinates $(\cos\theta,\sin\theta)$, and its distance from the origin is $1$. Pythagoras gives

$$
\cos^2\theta+\sin^2\theta=1\qquad\text{for every real }\theta.
$$

This is the **Pythagorean identity**. It is true for all angles, whatever the quadrant, because squaring removes the sign. It lets you replace $\sin^2\theta$ by $1-\cos^2\theta$ (or the reverse), which is the single most common move in simplification.

## 2. Reciprocal and quotient identities

The other four functions are defined in terms of sine and cosine:

$$
\tan\theta=\frac{\sin\theta}{\cos\theta},\qquad
\cot\theta=\frac{\cos\theta}{\sin\theta},\qquad
\sec\theta=\frac{1}{\cos\theta},\qquad
\csc\theta=\frac{1}{\sin\theta}.
$$

The first two are **quotient** identities; the last two are **reciprocal** identities. Each has a domain restriction: $\tan$ and $\sec$ require $\cos\theta\ne0$, while $\cot$ and $\csc$ require $\sin\theta\ne0$. These restrictions matter when you prove an identity — an equality is only claimed where both sides exist.

A useful consequence of the quotient definition is

$$
\tan\theta\cdot\cot\theta=1\qquad(\sin\theta\cos\theta\ne0).
$$

## 3. Two more Pythagorean identities

Divide $\cos^2\theta+\sin^2\theta=1$ through by $\cos^2\theta$ (valid when $\cos\theta\ne0$):

$$
\frac{\cos^2\theta}{\cos^2\theta}+\frac{\sin^2\theta}{\cos^2\theta}=\frac{1}{\cos^2\theta}
\quad\Longrightarrow\quad
1+\tan^2\theta=\sec^2\theta.
$$

Dividing instead by $\sin^2\theta$ gives the companion result:

$$
1+\cot^2\theta=\csc^2\theta.
$$

These three identities are the same geometric fact seen through different ratios. Keep all three in view: the first relates sine and cosine, the second is convenient when tangent appears, and the third when cotangent appears.

## 4. Complementary-angle relations

Swapping sine and cosine corresponds to reflecting a point across the line $y=x$, which changes $\theta$ into $\frac\pi2-\theta$. Hence

$$
\sin\!\left(\frac\pi2-\theta\right)=\cos\theta,\qquad
\cos\!\left(\frac\pi2-\theta\right)=\sin\theta,\qquad
\tan\!\left(\frac\pi2-\theta\right)=\cot\theta.
$$

These explain why $\sin30^\circ=\cos60^\circ$ and why tables of standard angles only need to list half the entries. They also convert between the sine and cosine forms of a equation — for instance $\sin(2x)=\cos x$ becomes $\cos(\frac\pi2-2x)=\cos x$, a form the general solution rules of a later module can handle.

## 5. Worked example: recovering the missing ratio

Suppose $\sin\theta=\dfrac35$ and $\theta$ lies in quadrant II. Find $\cos\theta$ and $\tan\theta$.

From the fundamental identity,

$$
\cos^2\theta=1-\sin^2\theta=1-\frac9{25}=\frac{16}{25},
\qquad\text{so}\qquad \cos\theta=\pm\frac45.
$$

The equation only fixes the square, so we need the quadrant. In quadrant II cosine is negative (ASTC), therefore $\cos\theta=-\dfrac45$. Then

$$
\tan\theta=\frac{\sin\theta}{\cos\theta}=\frac{3/5}{-4/5}=-\frac34.
$$

**Sanity check.** The numbers $3,4,5$ form a right triangle, so the magnitudes are right. The signs $(-,-)$ for cosine and tangent match quadrant II, where only sine is positive.

## 6. Worked example: proving an identity

Show that

$$
\frac{\sin\theta}{1+\cos\theta}+\frac{1+\cos\theta}{\sin\theta}=\frac{2}{\sin\theta}
$$

wherever both sides are defined.

Put the two fractions over a common denominator:

$$
\frac{\sin^2\theta+(1+\cos\theta)^2}{\sin\theta\,(1+\cos\theta)}
=\frac{\sin^2\theta+1+2\cos\theta+\cos^2\theta}{\sin\theta\,(1+\cos\theta)}.
$$

Now use $\sin^2\theta+\cos^2\theta=1$ in the numerator:

$$
\frac{1+1+2\cos\theta}{\sin\theta\,(1+\cos\theta)}
=\frac{2(1+\cos\theta)}{\sin\theta\,(1+\cos\theta)}=\frac{2}{\sin\theta}.
$$

The cancellation requires $1+\cos\theta\ne0$, i.e. $\cos\theta\ne-1$; the original left side also requires $\sin\theta\ne0$. Both conditions hold on the common domain, so the identity is proved.

<learning-block type="mistake" title="Losing the sign when taking a square root">

From $\cos^2\theta=16/25$ it is wrong to conclude $\cos\theta=4/5$ automatically. The squared equation has two roots, and only the quadrant decides which one is correct. A second common error is treating $\dfrac{1}{1+\cos\theta}$ as $\cos\theta$-independent when cancelling factors: you may divide by $1+\cos\theta$ only after noting it is non-zero. Finally, $\sin^2\theta+\cos^2\theta=1$ is often misquoted as $\sin\theta+\cos\theta=1$; test it at $\theta=\pi/4$ and the error is obvious, since $\sqrt2/2+\sqrt2/2=\sqrt2\ne1$.

</learning-block>

## 7. A reliable simplification routine

1. Replace every ratio with sine and cosine if no clear identity applies.
2. Look for $\sin^2\theta+\cos^2\theta=1$ or one of its two variants.
3. Factor before cancelling, and write down any value you exclude from the domain.
4. Stop when both sides match, or when you have a single ratio you can evaluate.

## Try it yourself

**1.** If $\cos\theta=-\dfrac{12}{13}$ and $\theta$ is in quadrant III, find $\sin\theta$ and $\tan\theta$.

<details><summary>Show the reasoning</summary>

$\sin^2\theta=1-144/169=25/169$, so $|\sin\theta|=5/13$. Quadrant III has sine negative, so $\sin\theta=-5/13$. Then $\tan\theta=(-5/13)/(-12/13)=5/12$, positive as expected in quadrant III.

</details>

**2.** Simplify $\dfrac{1}{\sec^2\theta}+\dfrac{1}{\csc^2\theta}$.

<details><summary>Show the reasoning</summary>

Using reciprocals, $\dfrac{1}{\sec^2\theta}=\cos^2\theta$ and $\dfrac{1}{\csc^2\theta}=\sin^2\theta$. Their sum is $\cos^2\theta+\sin^2\theta=1$.

</details>

**3.** Prove that $(\tan\theta+\cot\theta)\sin\theta\cos\theta=1$ where defined.

<details><summary>Show the reasoning</summary>

Write $\tan\theta=\sin\theta/\cos\theta$ and $\cot\theta=\cos\theta/\sin\theta$. Then the bracket is $\dfrac{\sin^2\theta+\cos^2\theta}{\sin\theta\cos\theta}=\dfrac{1}{\sin\theta\cos\theta}$. Multiplying by $\sin\theta\cos\theta$ gives $1$.

</details>

## Remember

- $\cos^2\theta+\sin^2\theta=1$ is the source of all three Pythagorean identities.
- $1+\tan^2\theta=\sec^2\theta$ and $1+\cot^2\theta=\csc^2\theta$ come from dividing by $\cos^2\theta$ and $\sin^2\theta$.
- $\tan=\sin/\cos$, $\cot=\cos/\sin$, $\sec=1/\cos$, $\csc=1/\sin$; each has a domain restriction.
- A squared identity never fixes a sign — use ASTC to choose the correct root.
- Complementary-angle relations swap sine and cosine and turn tangent into cotangent.

These identities let you rewrite single angles. The next module turns to how the functions behave as $x$ varies, and why their graphs repeat.
