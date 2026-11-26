## Many lines, one hinge

Questions often specify a line not by its own slope and point but by a relationship: "through the intersection of these two lines, and parallel to a third". Solving for the intersection each time is wasteful. Instead, all lines passing through a fixed point form a *pencil*, and one parameter labels every member. Adding an extra condition then becomes solving for that single number.

## 1. What a family is

Let

$$
L_1:a_1x+b_1y+c_1=0,\qquad L_2:a_2x+b_2y+c_2=0
$$

intersect at $P$. For any real $\lambda$,

$$
\boxed{\;L_1+\lambda L_2=0\quad\Longleftrightarrow\quad
(a_1+\lambda a_2)x+(b_1+\lambda b_2)y+(c_1+\lambda c_2)=0\;}
$$

is a straight line, and since $P$ satisfies both $L_1$ and $L_2$ it satisfies their sum. Hence every member passes through the common point $P$: the equation is a one-parameter **family of lines** (a pencil) with hinge $P$.

Conversely, choosing $\lambda$ picks out one member, so an extra condition — passing through a particular point, being parallel or perpendicular to a given line, or lying at a given distance from the origin — determines $\lambda$ uniquely.

**Important limitation.** For no finite $\lambda$ does $L_1+\lambda L_2=0$ become exactly $L_2$; taking $\lambda\to\infty$ is not an admissible choice. If the answer you need turns out to be $L_2$ itself, the family cannot produce it and you must write $L_2$ separately.

## 2. Related families

- Through a fixed point $(h,k)$, the family is $y-k=m(x-h)$ for varying $m$, together with the vertical member $x=h$ (which the slope form misses).
- Parallel to $Ax+By+C=0$: $Ax+By+k=0$ with $k$ varying.
- Perpendicular to $Ax+By+C=0$: $Bx-Ay+k=0$ with $k$ varying; its normal $(B,-A)$ is orthogonal to $(A,B)$ because $AB+B(-A)=0$.
- At a fixed distance $p$ from the origin: $\frac{Ax+By+C}{\sqrt{A^2+B^2}}=\pm p$, giving two parallel members.

## 3. Worked example

Find the line through the intersection of $2x+3y-5=0$ and $x-y-5=0$ that is parallel to $3x-2y=0$.

**Step 1: the hinge.** From $x=y+5$, substitute into the first equation: $2(y+5)+3y-5=0$, so $5y+5=0$, giving $y=-1$ and $x=4$. The intersection is $P(4,-1)$.

**Step 2: the family.**

$$
(2x+3y-5)+\lambda(x-y-5)=0
\ \Longrightarrow\
(2+\lambda)x+(3-\lambda)y-(5+5\lambda)=0.
$$

**Step 3: impose parallelism.** Its slope is $-\dfrac{2+\lambda}{3-\lambda}$, which must equal the slope $\dfrac32$ of $3x-2y=0$:

$$
-\frac{2+\lambda}{3-\lambda}=\frac32
\ \Longrightarrow\
-2(2+\lambda)=3(3-\lambda)
\ \Longrightarrow\
\lambda=13.
$$

**Step 4: the member.** Substituting $\lambda=13$ gives $15x-10y-70=0$, i.e.

$$
3x-2y-14=0.
$$

**Sanity check.** At $P(4,-1)$: $3(4)-2(-1)-14=12+2-14=0$, so the line passes through the hinge. Its slope $3/2$ matches the target, and it is not the same as $3x-2y=0$ because the constants differ. ✓

A second illustration: the member of $(3x+2y-8)+\lambda(5x-3y+1)=0$ passing through the origin satisfies $-8+\lambda=0$, so $\lambda=8$ and the line is $43x-22y=0$ — which plainly passes through $(0,0)$ and through the hinge $\left(\frac{22}{19},\frac{43}{19}\right)$.

<learning-block type="mistake" title="Assuming the family contains every line through the hinge">

$L_1+\lambda L_2=0$ generates all lines through the intersection **except $L_2$ itself**. If a problem asks for the line through the intersection that happens to coincide with $L_2$, solving for $\lambda$ will fail or mislead you. Also, after finding $\lambda$, substitute the hinge back in: a slip in the sign of $\lambda$ still gives a line of the right *type* but through the wrong point.

</learning-block>

## Try it yourself

**A.** Find the member of the family through the intersection of $x+y-2=0$ and $x-y=0$ that is perpendicular to $2x-y+3=0$.

<details><summary>Show the reasoning</summary>

The hinge is $(1,1)$. The given line has slope $2$, so the required slope is $-\tfrac12$. From $(1+\lambda)x+(1-\lambda)y-2=0$, set $-\frac{1+\lambda}{1-\lambda}=-\frac12$, giving $2(1+\lambda)=1-\lambda$, so $\lambda=-\tfrac13$. This yields $2x+4y-6=0$, i.e. $x+2y-3=0$, which passes through $(1,1)$ with slope $-\tfrac12$. ✓

</details>

**B.** Which member of the family $(2x+y-5)+\lambda(x-2y)=0$ passes through $(3,-1)$?

<details><summary>Show the reasoning</summary>

Substituting $(3,-1)$: $(6-1-5)+\lambda(3+2)=0$, so $\lambda=0$. The member is simply $2x+y-5=0$ (the first generator itself); it does pass through $(3,-1)$ since $6-1-5=0$. ✓

</details>

## Remember

- $L_1+\lambda L_2=0$ is a line through the intersection of $L_1$ and $L_2$ for every real $\lambda$.
- It misses $L_2$ itself; handle that case separately.
- Use the extra condition (a point, parallelism, perpendicularity or distance) to fix $\lambda$, then verify with the hinge.
- Parallel and perpendicular families are $Ax+By+k=0$ and $Bx-Ay+k=0$.
- Next: conditions can also define a *curve* directly — we turn to loci and shifting the origin.
