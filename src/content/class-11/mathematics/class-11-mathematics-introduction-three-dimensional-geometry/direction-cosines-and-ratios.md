## Direction matters, length does not

Two lines can be parallel while one is twice as long as the other, or have the same length but point in quite different directions. To describe the *tilt* of a line we therefore ignore its length and record the three angles it makes with the positive coordinate axes. Through their cosines those angles give a compact, testable description of direction.

## 1. Direction cosines

Let a line make angles $\alpha$, $\beta$, $\gamma$ with the positive $x$-, $y$- and $z$-axes. Its **direction cosines** are

$$l = \cos\alpha,\qquad m = \cos\beta,\qquad n = \cos\gamma.$$

Take a directed line and a vector $\vec r$ of length $r$ along it. Its components are $(r l, r m, r n)$, because each component equals the length times the cosine of the angle with the corresponding axis. Applying the distance-from-origin result of the first module,

$$r^2 = (r l)^2 + (r m)^2 + (r n)^2 = r^2(l^2 + m^2 + n^2).$$

Since $r > 0$,

$$l^2 + m^2 + n^2 = 1.$$

This is the defining check for direction cosines: the squares always add to one. Reversing the direction of the line gives $(-l, -m, -n)$, which still satisfies the relation.

## 2. Direction ratios

Often a calculation produces three numbers proportional to the cosines rather than the cosines themselves. Any triple $(a, b, c)$ with

$$a : b : c = l : m : n$$

is a set of **direction ratios** for the line. Unlike cosines, ratios are not unique: $(2, 3, 6)$, $(4, 6, 12)$ and $(-2, -3, -6)$ all describe the same direction. To recover the cosines from ratios, divide by the length of the ratio vector:

$$l = \frac{a}{\sqrt{a^2+b^2+c^2}},\quad m = \frac{b}{\sqrt{a^2+b^2+c^2}},\quad n = \frac{c}{\sqrt{a^2+b^2+c^2}}.$$

The sign of the square root selects one of the two directions; reversing all three signs gives the other. For the line joining $(x_1,y_1,z_1)$ and $(x_2,y_2,z_2)$, a convenient set of ratios is simply the coordinate differences

$$(x_2 - x_1,\ y_2 - y_1,\ z_2 - z_1).$$

The coordinate axes themselves have direction cosines $(1,0,0)$, $(0,1,0)$ and $(0,0,1)$.

## 3. Angle between two lines

Let two directed lines have unit direction vectors $(l_1, m_1, n_1)$ and $(l_2, m_2, n_2)$. Their scalar product gives

$$\cos\theta = l_1 l_2 + m_1 m_2 + n_1 n_2.$$

If only ratios $(a_1,b_1,c_1)$ and $(a_2,b_2,c_2)$ are known, normalise each first:

$$\cos\theta = \frac{a_1 a_2 + b_1 b_2 + c_1 c_2}{\sqrt{a_1^2+b_1^2+c_1^2}\ \sqrt{a_2^2+b_2^2+c_2^2}}.$$

Two useful consequences follow:

- **Perpendicular lines:** $a_1 a_2 + b_1 b_2 + c_1 c_2 = 0$.
- **Parallel lines:** $\dfrac{a_1}{a_2} = \dfrac{b_1}{b_2} = \dfrac{c_1}{c_2}$.

Because a line has no preferred direction in most geometry questions, the angle between two lines is taken as the acute or right angle. If the formula returns a negative cosine, report the angle using $|\cos\theta|$; the negative value only says the chosen directions happen to be opposed.

## 4. Worked example

A line joins $P(1, 2, 3)$ to $Q(4, 6, 3)$. Its direction ratios are

$$(4-1,\ 6-2,\ 3-3) = (3, 4, 0).$$

The length of this ratio vector is $\sqrt{9 + 16 + 0} = 5$, so the direction cosines are

$$l = \frac{3}{5},\quad m = \frac{4}{5},\quad n = 0.$$

Sanity checks: $l^2 + m^2 + n^2 = 9/25 + 16/25 + 0 = 1$. Because $n = 0$, the line is perpendicular to the $z$-axis, which agrees with $P$ and $Q$ having equal $z$-coordinates — the line is parallel to the $XY$ plane. The angle with the $x$-axis satisfies $\cos\alpha = 3/5$, so $\alpha \approx 53.1^\circ$.

<learning-block type="example" title="Testing perpendicularity without an angle">

For lines with ratios $(1, 2, 3)$ and $(-2, 1, 0)$ the product sum is $-2 + 2 + 0 = 0$, so they are perpendicular. No angle calculation is needed.

</learning-block>

<learning-block type="mistake" title="Forcing direction ratios to have unit length">

Direction ratios need not satisfy $a^2 + b^2 + c^2 = 1$; only direction cosines do. Multiplying every ratio by the same number leaves the line unchanged, so infinitely many ratio triples describe one direction. If you find yourself solving $a^2+b^2+c^2=1$ for given ratios, you have mixed up the two ideas — divide by the square root instead.

</learning-block>

## Try it yourself

**A.** Find the direction cosines of a line whose direction ratios are $(1, 2, 2)$.

<details><summary>Show the reasoning</summary>

The normalising length is $\sqrt{1+4+4} = 3$, giving $(1/3, 2/3, 2/3)$. Check: $1/9 + 4/9 + 4/9 = 1$.

</details>

**B.** A line makes angles $60^\circ$ and $45^\circ$ with the $x$- and $y$-axes. Find its direction cosine $n$ with the $z$-axis.

<details><summary>Show the reasoning</summary>

$l = 1/2$ and $m = \sqrt2/2$, so $l^2 + m^2 = 1/4 + 1/2 = 3/4$. Hence $n^2 = 1/4$ and the acute choice is $n = 1/2$.

</details>

**C.** Are lines with ratios $(2, -1, 3)$ and $(1, 2, 0)$ perpendicular?

<details><summary>Show the reasoning</summary>

$2\cdot 1 + (-1)\cdot 2 + 3\cdot 0 = 2 - 2 + 0 = 0$, so yes, they are perpendicular.

</details>

## Remember

- Direction cosines are $\cos\alpha$, $\cos\beta$, $\cos\gamma$ and always satisfy $l^2+m^2+n^2=1$.
- Direction ratios are any proportional triple; divide by $\sqrt{a^2+b^2+c^2}$ to obtain cosines.
- Use the product sum $a_1a_2+b_1b_2+c_1c_2$ to test perpendicularity and equal ratios for parallelism.
- Report the acute angle between two lines.

Direction ratios also describe the tilt of a plane's normal, which leads into the equations of planes and loci in the next module.
