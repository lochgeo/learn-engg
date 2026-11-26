## One focus, one line, one equal-distance rule

A satellite dish collects parallel rays because every point on its curved surface is the same distance from a fixed point as from a fixed straight line. That single rule — distance to a point equals distance to a line — produces the parabola. It is the path of an unpowered projectile, the shape of a suspension cable under uniform load, and the first conic whose eccentricity is exactly one.

## 1. Focus, directrix and the standard equation

Let the fixed point $S(a,0)$, with $a>0$, be the **focus**, and let the fixed line $x=-a$ be the **directrix**. For a point $P(x,y)$ on the locus,

$$
PS=\text{perpendicular distance of }P\text{ from }x=-a.
$$

In coordinates, $PS=\sqrt{(x-a)^2+y^2}$ and the distance to the directrix is $|x+a|$. Points of the locus lie to the right of the directrix, so $|x+a|=x+a$. Squaring both sides gives

$$
(x-a)^2+y^2=(x+a)^2
\;\Longrightarrow\;
x^2-2ax+a^2+y^2=x^2+2ax+a^2
\;\Longrightarrow\;
\boxed{\ y^2=4ax\ }.
$$

Here $a$ is the distance from the vertex to the focus, **not** the coefficient of $x$; the coefficient is $4a$. The equation contains no first power of $y$, which is the algebraic signature of symmetry about the $x$-axis.

## 2. The vocabulary of a parabola

For $y^2=4ax$:

| Feature | Value |
| --- | --- |
| Axis | the $x$-axis, $y=0$ |
| Vertex | $(0,0)$ |
| Focus | $S(a,0)$ |
| Directrix | $x=-a$ |
| Latus rectum | length $4a$ |
| Parametric point | $(at^2,\,2at)$ |

The **latus rectum** is the chord through the focus perpendicular to the axis. Putting $x=a$ into $y^2=4ax$ gives $y^2=4a^2$, so $y=\pm 2a$ and the chord length is $4a$. The parametric point works because $(2at)^2=4a(at^2)$ for every $t$.

Two facts are used constantly:

- **Focal distance.** For $P(x,y)$ on the parabola, $PS$ equals the distance to the directrix, namely $x+a$.
- **Focal chord.** A chord through the focus whose endpoints have parameters $t_1,t_2$ satisfies $t_1t_2=-1$. To see this, the chord joining $(at_1^2,2at_1)$ and $(at_2^2,2at_2)$ has slope $\frac{2}{t_1+t_2}$; requiring it to pass through $(a,0)$ reduces to $t_1t_2=-1$.

## 3. The four orientations

Replace $a$ by $-a$, or interchange $x$ and $y$:

| Equation | Opens | Focus | Directrix |
| --- | --- | --- | --- |
| $y^2=4ax$ | right | $(a,0)$ | $x=-a$ |
| $y^2=-4ax$ | left | $(-a,0)$ | $x=a$ |
| $x^2=4ay$ | up | $(0,a)$ | $y=-a$ |
| $x^2=-4ay$ | down | $(0,-a)$ | $y=a$ |

Always take $a>0$ and let the sign in the equation decide the direction. The axis is the coordinate axis that is *not* squared.

## 4. A fully worked example

Study $y^2=16x$.

Comparing with $y^2=4ax$ gives $4a=16$, so $a=4$. The focus is $(4,0)$, the directrix is $x=-4$, the axis is $y=0$, and the latus rectum has length $16$.

Now take the point of the parabola with parameter $t=2$:

$$
P=(at^2,2at)=(4\cdot4,\,2\cdot4\cdot2)=(16,16).
$$

Its focal distance is $x+a=16+4=20$, and directly $\sqrt{(16-4)^2+16^2}=\sqrt{144+256}=20$.

The other end of the focal chord through $P$ has parameter $-1/2$ (because $2\cdot(-\tfrac12)=-1$), giving $Q=(4\cdot\tfrac14,\,8\cdot(-\tfrac12))=(1,-4)$. Its focal distance is $1+4=5$. Since the focus lies between the ends of a focal chord, the chord length is $20+5=25$. A direct distance check gives $\sqrt{(16-1)^2+(16+4)^2}=\sqrt{225+400}=25$, confirming the result.

<learning-block type="mistake" title="Mistaking a for 4a">

In $y^2=16x$ the focus is $(4,0)$, not $(16,0)$. The coefficient of $x$ is $4a$, so divide by $4$ before writing the focus, directrix or latus rectum. A second error is treating the directrix as $x=a$ for a right-opening parabola: the directrix lies *behind* the vertex, at $x=-a$, while the focus lies inside the opening.

</learning-block>

## Try it yourself

**A.** Find the focus, directrix and latus rectum of $x^2=-12y$.

<details><summary>Show the reasoning</summary>

Here $4a=12$, so $a=3$. The parabola opens downwards: focus $(0,-3)$, directrix $y=3$, latus rectum length $12$.

</details>

**B.** A point on $y^2=8x$ has $x=8$. Find its distance from the focus without using the distance formula.

<details><summary>Show the reasoning</summary>

$a=2$, so the focal distance is $x+a=8+2=10$. Indeed $y^2=64$ gives $y=\pm8$ and $\sqrt{(8-2)^2+8^2}=10$.

</details>

**C.** One end of a focal chord of $y^2=4x$ is the point with parameter $t=3$. Find the other end.

<details><summary>Show the reasoning</summary>

$a=1$, so $t_1t_2=-1$ gives $t_2=-1/3$. The point is $(t_2^2,2t_2)=(1/9,-2/3)$.

</details>

## Remember

- The parabola is the locus whose distance to a focus equals its distance to a directrix; its eccentricity is $1$.
- Derive $y^2=4ax$ from $(x-a)^2+y^2=(x+a)^2$; $a$ is one quarter of the coefficient of $x$.
- Focus $(a,0)$, directrix $x=-a$, latus rectum $4a$, parametric point $(at^2,2at)$.
- Focal distance is $x+a$; a focal chord has $t_1t_2=-1$.
- Next, let the focus-directrix ratio drop below one: the closed curve called an ellipse.
