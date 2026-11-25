## Combining two angles into one

Why does $\sin 75^\circ$ have an exact value even though $75^\circ$ is not a standard angle? Because $75^\circ=45^\circ+30^\circ$, and there are formulae that turn a function of a sum into functions of the parts. The same identities explain interference of waves, the algebra of rotations and most of the equation-solving tricks to come.

## 1. Deriving the cosine difference formula

Put two points on the unit circle: $P=(\cos A,\sin A)$ and $Q=(\cos B,\sin B)$. The squared distance between them is

$$
PQ^2=(\cos A-\cos B)^2+(\sin A-\sin B)^2
=2-2(\cos A\cos B+\sin A\sin B),
$$

using $\cos^2+\sin^2=1$ twice. Triangle $OPQ$ has $OP=OQ=1$ and included angle $A-B$, so the cosine rule gives

$$
PQ^2=1^2+1^2-2\cos(A-B)=2-2\cos(A-B).
$$

Equating the two expressions yields the **cosine difference formula**:

$$
\cos(A-B)=\cos A\cos B+\sin A\sin B.
$$

Everything else follows from this one result by substituting negatives and using complementary angles.

## 2. The four addition formulae

Replace $B$ by $-B$ and use $\cos(-B)=\cos B$, $\sin(-B)=-\sin B$:

$$
\cos(A+B)=\cos A\cos B-\sin A\sin B.
$$

Now write $\sin(A+B)=\cos\!\left(\frac\pi2-(A+B)\right)=\cos\!\left(\left(\frac\pi2-A\right)-B\right)$ and apply the difference formula:

$$
\sin(A+B)=\sin A\cos B+\cos A\sin B,\qquad
\sin(A-B)=\sin A\cos B-\cos A\sin B.
$$

Dividing $\sin(A+B)$ by $\cos(A+B)$ and simplifying each term by $\cos A\cos B$ gives the tangent version:

$$
\tan(A+B)=\frac{\tan A+\tan B}{1-\tan A\tan B},\qquad
\tan(A-B)=\frac{\tan A-\tan B}{1+\tan A\tan B}.
$$

The tangent formulae require $\cos A\cos B\ne0$ and, for the first, $1-\tan A\tan B\ne0$; when the denominator vanishes the sum is an odd multiple of $\frac\pi2$ and the tangent is undefined.

## 3. Double-angle and half-angle forms

Setting $B=A$ in the addition formulae gives the **double-angle formulae**:

$$
\sin 2A=2\sin A\cos A,
$$

$$
\cos 2A=\cos^2A-\sin^2A=2\cos^2A-1=1-2\sin^2A,
$$

$$
\tan 2A=\frac{2\tan A}{1-\tan^2A}.
$$

The three equivalent forms of $\cos2A$ are all worth knowing: choose the one that matches the other functions in the problem. If sine appears, use $1-2\sin^2A$; if cosine appears, use $2\cos^2A-1$; if you need symmetry, use $\cos^2A-\sin^2A$.

Replacing $2A$ by $x$ gives the **half-angle formulae**:

$$
\sin\frac x2=\pm\sqrt{\frac{1-\cos x}{2}},\qquad
\cos\frac x2=\pm\sqrt{\frac{1+\cos x}{2}},
$$

with the sign chosen from the quadrant of $\frac x2$. Two sign-free variants of the tangent half-angle are often handier:

$$
\tan\frac x2=\frac{\sin x}{1+\cos x}=\frac{1-\cos x}{\sin x}.
$$

## 4. Product-to-sum and sum-to-product

Writing the addition formulae for $\sin(X+Y)$ and $\sin(X-Y)$ and adding them cancels the $\cos X\sin Y$ terms, leaving $2\sin X\cos Y$. Now put $C=X+Y$ and $D=X-Y$, so $X=\frac{C+D}{2}$ and $Y=\frac{C-D}{2}$. This gives the **sum-to-product** identities:

$$
\sin C+\sin D=2\sin\frac{C+D}{2}\cos\frac{C-D}{2},
$$

$$
\sin C-\sin D=2\cos\frac{C+D}{2}\sin\frac{C-D}{2},
$$

$$
\cos C+\cos D=2\cos\frac{C+D}{2}\cos\frac{C-D}{2},
$$

$$
\cos C-\cos D=-2\sin\frac{C+D}{2}\sin\frac{C-D}{2}.
$$

Reversing these relations gives the **product-to-sum** forms, useful for integrating products later:

$$
\sin A\cos B=\tfrac12\bigl[\sin(A+B)+\sin(A-B)\bigr],
$$

$$
\cos A\cos B=\tfrac12\bigl[\cos(A+B)+\cos(A-B)\bigr],
$$

$$
\sin A\sin B=\tfrac12\bigl[\cos(A-B)-\cos(A+B)\bigr].
$$

## 5. Worked example: an exact value

Evaluate $\sin75^\circ$ exactly. Write $75^\circ=45^\circ+30^\circ$ and use the sine addition formula:

$$
\sin75^\circ=\sin45^\circ\cos30^\circ+\cos45^\circ\sin30^\circ
=\frac{\sqrt2}{2}\cdot\frac{\sqrt3}{2}+\frac{\sqrt2}{2}\cdot\frac12
=\frac{\sqrt6+\sqrt2}{4}.
$$

**Sanity check.** Numerically $(\sqrt6+\sqrt2)/4\approx(2.449+1.414)/4\approx0.966$, and $\sin75^\circ$ is close to $\sin90^\circ=1$, so the magnitude is plausible. Since $75^\circ=90^\circ-15^\circ$, the complementary relation also gives $\sin75^\circ=\cos15^\circ$, which the cosine difference formula produces from $45^\circ-30^\circ$.

## 6. Worked example: turning a sum into a product

Simplify $\sin50^\circ+\sin10^\circ$. With the sum-to-product identity,

$$
\sin50^\circ+\sin10^\circ
=2\sin\frac{50^\circ+10^\circ}{2}\cos\frac{50^\circ-10^\circ}{2}
=2\sin30^\circ\cos20^\circ
=\cos20^\circ.
$$

**Sanity check.** $2\sin30^\circ=1$, and numerically $\sin50^\circ+\sin10^\circ\approx0.766+0.174=0.940$, while $\cos20^\circ\approx0.940$. The identity checks out.

<learning-block type="mistake" title="Treating a sum as if functions were linear">

The most persistent error is assuming $\sin(A+B)=\sin A+\sin B$. Test it with $A=60^\circ$, $B=30^\circ$: $\sin90^\circ=1$, whereas $\sin60^\circ+\sin30^\circ\approx0.866+0.5=1.366$, which is even greater than $1$ and therefore impossible for a sine value. Trigonometric functions are not linear, so the addition formulae are essential. A second common slip is the sign in $\cos(A-B)$: it is **plus** $\sin A\sin B$, not minus. The derivation above is the safest way to settle it if you forget.

</learning-block>

## 7. Choosing a formula quickly

| The expression contains | Reach for |
| --- | --- |
| $\sin(A\pm B)$ or $\cos(A\pm B)$ | Addition formulae |
| $\tan(A\pm B)$ | Tangent addition, then divide by the denominator |
| $\sin 2x$, $\cos 2x$ | Double angle; pick the form matching the rest of the expression |
| $\sin\frac x2$, $\cos\frac x2$ | Half angle, with the sign fixed by the quadrant |
| $\sin C+\sin D$ or a similar pair | Sum-to-product |
| $\sin A\cos B$ or $\cos A\cos B$ | Product-to-sum |

## Try it yourself

**1.** Find the exact value of $\cos15^\circ$.

<details><summary>Show the reasoning</summary>

$\cos15^\circ=\cos(45^\circ-30^\circ)=\cos45^\circ\cos30^\circ+\sin45^\circ\sin30^\circ=\dfrac{\sqrt6+\sqrt2}{4}$. This equals $\sin75^\circ$, as complementary angles require.

</details>

**2.** Express $\cos70^\circ+\cos10^\circ$ as a product.

<details><summary>Show the reasoning</summary>

$\cos C+\cos D=2\cos\frac{C+D}{2}\cos\frac{C-D}{2}$, so the expression is $2\cos40^\circ\cos30^\circ=\sqrt3\cos40^\circ$.

</details>

**3.** If $\sin x=\frac35$ with $x$ in quadrant I, find $\sin2x$ and $\cos2x$.

<details><summary>Show the reasoning</summary>

In quadrant I, $\cos x=\frac45$. Then $\sin2x=2\cdot\frac35\cdot\frac45=\frac{24}{25}$ and $\cos2x=1-2\sin^2x=1-\frac{18}{25}=\frac7{25}$. The pair satisfies $\sin^22x+\cos^22x=\frac{576+49}{625}=1$.

</details>

## Remember

- $\cos(A-B)=\cos A\cos B+\sin A\sin B$ is the source of all the addition formulae.
- $\sin(A\pm B)=\sin A\cos B\pm\cos A\sin B$; $\cos(A\pm B)=\cos A\cos B\mp\sin A\sin B$.
- $\cos2A$ has three forms: $\cos^2A-\sin^2A$, $2\cos^2A-1$, $1-2\sin^2A$.
- Sum-to-product turns a sum of two sines or cosines into a product of a sum-angle and a difference-angle term.
- $\sin(A+B)\ne\sin A+\sin B$; verify a forgotten sign with a pair of standard angles.

With addition formulae you can rewrite expressions involving several angles. The final concept module uses them to solve equations instead of merely transforming them.
