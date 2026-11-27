## A direction in space needs three numbers

In a plane, one angle is enough to fix a direction. In space, a line leans towards the $x$, $y$, and $z$ axes at once, so one angle cannot carry all the information. Direction cosines solve this by recording the three cosines of the angles the line makes with the positive coordinate axes. Once those three numbers are known, the direction is fixed up to the two opposite senses along the same line.

## 1. Direction cosines

Let a line $L$ pass through the origin and make angles $\alpha$, $\beta$, and $\gamma$ with the positive $x$, $y$, and $z$ axes respectively. These are called the **direction angles**, and their cosines are the **direction cosines**:

$$
l=\cos\alpha,\qquad m=\cos\beta,\qquad n=\cos\gamma.
$$

If the line does not pass through the origin, draw a parallel line through the origin and use its direction angles. Parallel lines have the same direction, so this definition does not depend on where the line sits.

Take any point $P(x,y,z)$ on the line at distance $r=OP$ from the origin. Projecting $OP$ onto each axis gives

$$
x=lr,\qquad y=mr,\qquad z=nr.
$$

Since $OP^2=x^2+y^2+z^2=r^2$, substituting $x,y,z$ gives

$$
l^2r^2+m^2r^2+n^2r^2=r^2.
$$

For $r\neq 0$ this leaves the key identity

$$
l^2+m^2+n^2=1.
$$

This is not an extra fact to memorise separately; it is Pythagoras in three dimensions written in directional form. It also tells you that any triple claiming to be direction cosines must have squares summing to $1$.

## 2. Direction ratios

Any three numbers $a,b,c$ proportional to $l,m,n$ are called **direction ratios** (or direction numbers) of the line. If

$$
\frac{l}{a}=\frac{m}{b}=\frac{n}{c},
$$

then the common value is $\pm \frac{1}{\sqrt{a^2+b^2+c^2}}$, because $l^2+m^2+n^2=1$. Therefore

$$
(l,m,n)=\left(\frac{\pm a}{\sqrt{a^2+b^2+c^2}},\frac{\pm b}{\sqrt{a^2+b^2+c^2}},\frac{\pm c}{\sqrt{a^2+b^2+c^2}}\right).
$$

The two signs correspond to the two opposite senses along the same line. Direction ratios are convenient because they can be read directly from geometry: the line joining $P_1(x_1,y_1,z_1)$ to $P_2(x_2,y_2,z_2)$ has direction ratios

$$
a=x_2-x_1,\qquad b=y_2-y_1,\qquad c=z_2-z_1.
$$

## 3. A worked example

**Question.** Find the direction cosines of the line joining $A(2,-1,4)$ and $B(1,1,-2)$, and verify the identity.

Direction ratios are

$$
a=1-2=-1,\qquad b=1-(-1)=2,\qquad c=-2-4=-6.
$$

Their magnitude is

$$
\sqrt{a^2+b^2+c^2}=\sqrt{(-1)^2+2^2+(-6)^2}=\sqrt{1+4+36}=\sqrt{41}.
$$

Taking the positive sign (from $A$ to $B$),

$$
l=-\frac{1}{\sqrt{41}},\qquad m=\frac{2}{\sqrt{41}},\qquad n=-\frac{6}{\sqrt{41}}.
$$

**Verification.**

$$
l^2+m^2+n^2=\frac{1+4+36}{41}=\frac{41}{41}=1.
$$

The sum is exactly $1$, so the cosines are consistent. A quick sanity check: all three values lie between $-1$ and $1$, as cosines must.

<learning-block type="mistake" title="Normalising ratios, not cosines">

A common error is to treat direction ratios as if they were already direction cosines. The triple $(2,2,1)$ gives direction cosines $(2/3,2/3,1/3)$ because its magnitude is $3$, not $1$. Before using $l^2+m^2+n^2=1$, check whether you have ratios or cosines.

</learning-block>

## 4. Using the identity in problems

The identity is often used in reverse. If two direction cosines are known, the third is determined up to sign:

$$
n=\pm\sqrt{1-l^2-m^2}.
$$

The sign is decided by whether the line makes an acute or obtuse angle with the positive $z$ axis. For example, if $l=1/\sqrt{2}$ and $m=1/2$, then

$$
n^2=1-\frac{1}{2}-\frac{1}{4}=\frac{1}{4},\qquad n=\pm\frac{1}{2}.
$$

The geometry of the problem, not the algebra alone, chooses between $+$ and $-$.

## Try it yourself

1. Find the direction cosines of a line whose direction ratios are $2,-3,6$.

<details><summary>Show the reasoning</summary>

The magnitude is $\sqrt{2^2+(-3)^2+6^2}=\sqrt{49}=7$. Therefore

$$
l=\frac{2}{7},\qquad m=-\frac{3}{7},\qquad n=\frac{6}{7}.
$$

Check: $(4+9+36)/49=1$.

</details>

2. Can $1/2,1/2,1/2$ be the direction cosines of a line?

<details><summary>Show the reasoning</summary>

No. Their squares sum to $1/4+1/4+1/4=3/4\neq 1$, so the triple cannot represent direction cosines.

</details>

3. A line makes equal acute angles with the coordinate axes. Find its direction cosines.

<details><summary>Show the reasoning</summary>

Equal angles mean $l=m=n$. Using $l^2+m^2+n^2=1$ gives $3l^2=1$, so $l=1/\sqrt{3}$ because the angles are acute. The direction cosines are $(1/\sqrt{3},1/\sqrt{3},1/\sqrt{3})$.

</details>

## Remember

- Direction cosines are $l=\cos\alpha$, $m=\cos\beta$, $n=\cos\gamma$, and they always satisfy $l^2+m^2+n^2=1$.
- Direction ratios are any proportional triple; divide by $\sqrt{a^2+b^2+c^2}$ to obtain cosines.
- The same line has two opposite direction-cosine triples, corresponding to the two senses along it.
- The line through $(x_1,y_1,z_1)$ and $(x_2,y_2,z_2)$ immediately gives direction ratios $x_2-x_1,y_2-y_1,z_2-z_1$.

The next module uses these direction numbers to write the equation of a line in space, both in vector form and in Cartesian form.
