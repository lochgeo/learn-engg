## A mirror is a controlled bounce

When light meets a polished surface, it reflects. The two laws of reflection are simple but powerful: the incident ray, the reflected ray and the normal at the point of incidence all lie in one plane, and the angle of incidence equals the angle of reflection. A **plane mirror** uses this to form an image that is virtual, erect, the same size as the object, laterally inverted, and as far behind the mirror as the object is in front.

Spherical mirrors curve the reflecting surface. A **concave** mirror curves inward (toward the incoming light) and can converge rays; a **convex** mirror curves outward and always diverges them. Both are described by the same geometry and the same formula once a sign convention is fixed.

## 1. The geometry of a spherical mirror

For a spherical mirror of radius of curvature $R$:

- **Pole** $P$: the centre of the reflecting surface.
- **Centre of curvature** $C$: centre of the sphere of which the mirror is a part, on the principal axis.
- **Principal focus** $F$: the point where rays parallel to the principal axis meet (concave) or appear to diverge from (convex) after reflection.
- **Focal length** $f$: distance $PF$. For a spherical mirror, $f=R/2$.

Only rays close to the principal axis (paraxial rays) behave this neatly; rays far from the axis suffer spherical aberration and do not meet at one point.

## 2. Sign convention (Cartesian)

All distances are measured from the pole $P$, with light travelling left to right:

- Distances to the **right** (direction of light) are **positive**; to the **left**, **negative**.
- Distances measured **upward** are positive; **downward**, negative.
- A real object in front of the mirror has $u<0$.
- Concave mirror: $R<0$, $f<0$. Convex mirror: $R>0$, $f>0$.

With this convention, the mirror formula holds for every case without special rules:

$$
\frac{1}{v}+\frac{1}{u}=\frac{1}{f}.
$$

Here $u$ is the object distance, $v$ the image distance, $f$ the focal length. A negative $v$ means a real image in front of the mirror; a positive $v$ means a virtual image behind it.

## 3. Magnification

The linear magnification is

$$
m=\frac{h_i}{h_o}=-\frac{v}{u}.
$$

- $|m|>1$: image is enlarged; $|m|<1$: diminished.
- $m<0$: image is inverted; $m>0$: erect.

For a plane mirror, $R\to\infty$, $f\to\infty$, and the formula gives $v=-u$ with $m=+1$, exactly the familiar result.

## 4. A worked example

A concave mirror has radius of curvature $60\ \text{cm}$. An object $3\ \text{cm}$ tall is placed $45\ \text{cm}$ in front of it. Locate the image and its size.

With the Cartesian convention: $R=-60\ \text{cm}$, so $f=R/2=-30\ \text{cm}$, and $u=-45\ \text{cm}$.

$$
\frac{1}{v}=\frac{1}{f}-\frac{1}{u}
=\frac{1}{-30}-\frac{1}{-45}
=-\frac{1}{30}+\frac{1}{45}
=\frac{-3+2}{90}
=-\frac{1}{90}.
$$

Thus $v=-90\ \text{cm}$: a real image $90\ \text{cm}$ in front of the mirror, beyond the centre of curvature. The magnification is

$$
m=-\frac{v}{u}=-\frac{-90}{-45}=-2,
$$

so the image is inverted and $6\ \text{cm}$ tall. Sanity check: an object between $F$ and $C$ of a concave mirror should give a real, inverted, enlarged image beyond $C$ — exactly what we found.

## 5. Convex mirrors and use cases

A convex mirror has $f>0$. For any real object ($u<0$), the formula gives $v>0$: the image is always virtual, erect and diminished, and lies behind the mirror. That is why convex mirrors are used as rear-view mirrors — they give a wide field of view, and the diminished image is an acceptable trade for seeing more of the road.

<learning-block type="mistake" title="The sign of the object distance">
A very common error is to insert $u=+45\ \text{cm}$ for a real object. That flips every sign in the answer and can turn a real image into a virtual one. Fix the convention first: a real object in front of the mirror is on the incoming side, so $u$ is negative. Do the same for $f$: concave means negative, convex means positive.
</learning-block>

## Try it yourself

**A.** A convex mirror of focal length $20\ \text{cm}$ has an object $30\ \text{cm}$ in front of it. Find the image distance and magnification.

<details><summary>Show the reasoning</summary>

$f=+20\ \text{cm}$, $u=-30\ \text{cm}$. Then

$$
\frac{1}{v}=\frac{1}{f}-\frac{1}{u}=\frac{1}{20}-\frac{1}{-30}=\frac{1}{20}+\frac{1}{30}=\frac{1}{12},
$$

so $v=+12\ \text{cm}$: a virtual image $12\ \text{cm}$ behind the mirror. The magnification is $m=-v/u=-12/(-30)=+0.4$: erect and diminished.

</details>

**B.** A concave mirror produces a real image three times the size of the object. If the object is $20\ \text{cm}$ in front, find the focal length.

<details><summary>Show the reasoning</summary>

Real, inverted image means $m=-3$. With $u=-20\ \text{cm}$, $m=-v/u$ gives $-3=-v/(-20)$, so $v=-60\ \text{cm}$. Then

$$
\frac{1}{f}=\frac{1}{v}+\frac{1}{u}=\frac{1}{-60}+\frac{1}{-20}=-\frac{1}{15},
$$

so $f=-15\ \text{cm}$: a concave mirror of radius $30\ \text{cm}$.

</details>

**C.** Why does a convex mirror never form a real image of a real object?

<details><summary>Show the reasoning</summary>

For a real object $u<0$ and a convex mirror $f>0$,

$$
\frac{1}{v}=\frac{1}{f}-\frac{1}{u}>0,
$$

so $v>0$ always: the image is virtual, behind the mirror. A convex mirror diverges reflected rays, so they never converge in front of it.

</details>

## Remember

- Reflection laws: equal angles, same plane.
- Mirror formula $1/v+1/u=1/f$ works for all spherical mirrors once the Cartesian signs are fixed.
- Concave: $f<0$; convex: $f>0$; real object: $u<0$.
- Magnification $m=-v/u$: negative means inverted, positive means erect.
- Convex mirrors always give virtual, erect, diminished images — the reason for their wide use.

The next lesson moves from reflection to refraction: what happens when light crosses from one transparent medium into another.