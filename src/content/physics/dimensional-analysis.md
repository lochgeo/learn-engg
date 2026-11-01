## The big idea

Dimensions describe the kind of quantity in an equation, independent of the particular units used. Length has dimension $[L]$, time $[T]$, and mass $[M]$. Dimensional analysis uses these labels to check whether a physical equation could be correct.

## Start here

Speed is distance divided by time, so its dimension is $[L][T]^{-1}$. Acceleration is change in speed divided by time, giving $[L][T]^{-2}$. A force has the dimensions of mass multiplied by acceleration: $[M][L][T]^{-2}$.

For an equation to be dimensionally consistent, the dimensions on its left and right sides must match. Quantities added together must also have the same dimensions. This is a quick check, not a proof: an equation can pass the check and still have the wrong numerical constant.

## Worked example

### Check the distance formula

Suppose an object starts from rest and accelerates uniformly. A proposed relation is $s = \frac12 at^2$. The left side has dimension $[L]$. On the right:

$$
[a][t]^2 = ([L][T]^{-2})[T]^2 = [L]
$$

Both sides have the dimension of length, so the formula passes this dimensional check.

## Try it yourself

**Could the equation $v = u + at$ be dimensionally consistent?**

<details>
<summary>Reveal the explanation</summary>

Yes. Velocity $v$ and initial velocity $u$ both have dimension $[L][T]^{-1}$. Acceleration times time has dimension $([L][T]^{-2})[T] = [L][T]^{-1}$, so all terms match.
</details>

## Remember

- Dimensions identify what kind of quantity is being measured.
- Every term in an equation must have matching dimensions.
- Passing the check does not guarantee that an equation is correct.
