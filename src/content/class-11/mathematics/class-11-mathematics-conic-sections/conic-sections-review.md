## Your study plan for this chapter

The six concept modules are connected tools, not six unrelated formulae. A focused first pass takes about **2 hours 35 minutes**:

1. **Circles** — 20 min: centre, radius, power of a point, tangent length.
2. **Parabolas** — 20 min: focus, directrix, $y^2=4ax$, latus rectum, focal chord.
3. **Ellipses** — 20 min: $c^2=a^2-b^2$, focal distances, directrices.
4. **Hyperbolas** — 20 min: $c^2=a^2+b^2$, asymptotes, difference of focal distances.
5. **Identifying conics** — 18 min: the invariant $AB-H^2$ and degenerate cases.
6. **Mixed conic problems** — 25 min: tangents, discriminants and parameter elimination.
7. **This mastery check** — 25 min: mixed questions under light time pressure.

After each lesson, close it and try its questions from a blank page. Mark a lesson complete only when you can explain *why* the method applies. Take a short break after the third module. Once these feel comfortable, the **JEE Main timed practice** module offers a 50-minute mixed paper; its value lies in choosing the right tool quickly.

## First choose the tool

| Clue in the question | Start with |
| --- | --- |
| Centre and radius asked; equation has $x^2+y^2$ | $x^2+y^2+2gx+2fy+c=0$, centre $(-g,-f)$, $r=\sqrt{g^2+f^2-c}$ |
| Diameter endpoints given | $(x-x_1)(x-x_2)+(y-y_1)(y-y_2)=0$ |
| Tangent length from an outside point | $\sqrt{S_1}$, where $S_1=CP^2-r^2$ |
| Equal distance to a point and a line | Parabola $y^2=4ax$; focus $(a,0)$, directrix $x=-a$ |
| Focus–directrix ratio $e<1$, or a focal-distance sum | Ellipse; $c^2=a^2-b^2$, distances $a\pm ex$ |
| Focal-distance difference, or an equation with a minus sign | Hyperbola; $c^2=a^2+b^2$, asymptotes $y=\pm\frac ba x$ |
| General second-degree equation | Compare $AB-H^2$ with $0$, then rule out degeneracy |
| Centre of an ellipse or hyperbola | Solve $A\alpha+H\beta+G=0$, $H\alpha+B\beta+F=0$ |
| Tangent at a known point | Replace $x^2\to xx_1$, $y^2\to yy_1$, $2x\to x+x_1$ |
| Tangent of a given slope | Substitute $y=mx+c$ and set the discriminant to zero |
| Tangent to a circle | Set the centre-to-line distance equal to $r$ |
| A point defined through a moving point | Parameterise the moving point and eliminate the parameter |

## Mastery check

Try every question before opening its answer. Keep a sheet for quick sketches and sanity checks.

### 1. Centre and radius

Find the centre and radius of $x^2+y^2+4x-6y-3=0$.

<details><summary>Answer and reasoning</summary>

$g=2$, $f=-3$, $c=-3$. The centre is $(-2,3)$ and $r=\sqrt{4+9+3}=4$. Completing squares gives $(x+2)^2+(y-3)^2=16$, confirming both.

</details>

### 2. Parabola facts

For $y^2=20x$, state the focus, directrix and latus rectum, and find the focal distance of a point whose $x$-coordinate is $8$.

<details><summary>Answer and reasoning</summary>

$4a=20$ gives $a=5$: focus $(5,0)$, directrix $x=-5$, latus rectum $20$. The focal distance is $x+a=8+5=13$. Check: $y^2=160$, so $\sqrt{(8-5)^2+160}=\sqrt{169}=13$.

</details>

### 3. Ellipse facts

For $\frac{x^2}{16}+\frac{y^2}{7}=1$, find the foci, eccentricity and latus rectum.

<details><summary>Answer and reasoning</summary>

$a=4$, $b=\sqrt7$, so $c=\sqrt{16-7}=3$ and $e=3/4$. Foci are $(\pm3,0)$; the latus rectum is $2b^2/a=14/4=7/2$.

</details>

### 4. Hyperbola facts

For $\frac{x^2}{4}-\frac{y^2}{5}=1$, find the foci, eccentricity, asymptotes and latus rectum.

<details><summary>Answer and reasoning</summary>

$a=2$, $b=\sqrt5$, so $c=\sqrt{4+5}=3$ and $e=3/2$. Foci $(\pm3,0)$; asymptotes $y=\pm\frac{\sqrt5}{2}x$; latus rectum $2\cdot5/2=5$. At the vertex $(2,0)$ the focal distances are $5$ and $1$, whose difference $4=2a$ confirms the setup.

</details>

### 5. Identify before calculating

Classify $3x^2+3y^2-6x+6y+3=0$ and give its centre and radius.

<details><summary>Answer and reasoning</summary>

$A=B=3$ and $H=0$, so $AB-H^2=9>0$ with equal squared coefficients: a circle. Dividing by $3$ gives $x^2+y^2-2x+2y+1=0$, centre $(1,-1)$, $r=\sqrt{1+1-1}=1$.

</details>

### 6. A tangent with unknown contact point

Find $c>0$ such that $y=2x+c$ touches $y^2=12x$, and locate the point of contact.

<details><summary>Answer and reasoning</summary>

Here $a=3$ and $m=2$, so $c=a/m=3/2$. Substituting gives $4x^2+(6-12)x+\tfrac94=4x^2-6x+\tfrac94=0$, i.e. $(2x-\tfrac32)^2=0$, so $x=3/4$ and $y=2(\tfrac34)+\tfrac32=3$. Check $3^2=12\cdot\tfrac34=9$.

</details>

### 7. Power of a point

How long is a tangent from $(3,4)$ to the circle $x^2+y^2=9$?

<details><summary>Answer and reasoning</summary>

$PT=\sqrt{CP^2-r^2}=\sqrt{(9+16)-9}=\sqrt{16}=4$. Equivalently $S_1=9+16-9=16$.

</details>

### 8. Build an ellipse from data

An ellipse has foci $(\pm4,0)$ and major axis of length $12$. Find its equation, eccentricity and latus rectum.

<details><summary>Answer and reasoning</summary>

$c=4$ and $a=6$, so $b^2=a^2-c^2=36-16=20$. The equation is $\frac{x^2}{36}+\frac{y^2}{20}=1$, $e=c/a=2/3$, and the latus rectum is $2b^2/a=40/6=20/3$.

</details>

### 9. A vertical hyperbola

For $\frac{y^2}{9}-\frac{x^2}{16}=1$, find the foci, eccentricity and asymptotes.

<details><summary>Answer and reasoning</summary>

The transverse axis is vertical with $a=3$, $b=4$, so $c=5$ and $e=5/3$. Foci $(0,\pm5)$; asymptotes $y=\pm\frac ab x=\pm\frac34x$. At $(0,3)$ the focal distances are $2$ and $8$, and $8-2=6=2a$.

</details>

### 10. Derive from a focus and a directrix

A point moves so that its distance from $(2,0)$ is twice its distance from the line $x=-1$. Identify the locus.

<details><summary>Answer and reasoning</summary>

Write $\sqrt{(x-2)^2+y^2}=2|x+1|$ and square: $x^2-4x+4+y^2=4x^2+8x+4$, so $y^2=3x^2+12x=3(x+2)^2-12$. Hence

$$
\frac{(x+2)^2}{4}-\frac{y^2}{12}=1,
$$

a hyperbola with centre $(-2,0)$, $a=2$, $b^2=12$, $c=4$ and $e=2$. Consistency check: its foci are $(-2\pm4,0)$, one of which is $(2,0)$, and the corresponding directrix is $x=-2+a/e=-1$.

</details>

## Self-check

You are ready for the timed set when you can:

- read a centre and radius from the general circle equation and verify by completing squares;
- state focus, directrix, axis and latus rectum for any orientation of a parabola;
- explain why an ellipse uses $c^2=a^2-b^2$ but a hyperbola uses $c^2=a^2+b^2$;
- compute focal distances from $a\pm ex$ without a distance formula;
- find the asymptotes of a hyperbola and explain why the curve never meets them;
- classify a general second-degree equation using $AB-H^2$ and spot a degenerate case;
- construct a tangent at a point and a tangent of a given slope;
- derive a locus by eliminating a parameter, then check it against a known point;
- catch a wrong answer by substitution, a sketch or a simple magnitude check.

If one item still feels shaky, revisit that module and redo its questions with the answers hidden.
