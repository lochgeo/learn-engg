## Why the orbit must fit a whole number of waves

Bohr’s quantisation condition $mvr=n\hbar$ was postulated, not derived. de Broglie supplied the physical reason: if an electron has a wave nature, then a stable orbit is one in which the wave closes on itself smoothly. That single requirement reproduces Bohr’s condition and shows that quantisation is a consequence of wave behaviour, not an arbitrary rule.

## 1. Matter waves

de Broglie proposed that a particle of momentum $p$ has an associated wavelength

$$
\lambda = \frac{h}{p} = \frac{h}{mv}.
$$

For an electron in a circular orbit of radius $r$, the wave travels around the circumference $2\pi r$. For the orbit to be stable, the wave must join smoothly onto itself after one round trip; otherwise it interferes destructively and cancels. Hence the circumference must contain an integer number of wavelengths:

$$
2\pi r = n\lambda,\qquad n=1,2,3,\dots
$$

Substituting $\lambda=h/(mv)$:

$$
2\pi r = n\frac{h}{mv}
\quad\Rightarrow\quad
mvr = \frac{nh}{2\pi}=n\hbar.
$$

This is exactly Bohr’s angular-momentum quantisation. So the allowed orbits are those in which a standing wave fits around the loop.

## 2. Connecting to the Bohr radius

Combining the standing-wave condition with the force balance (as in the Bohr-model module) reproduces $r_n=a_0 n^2/Z$ and $E_n=-13.6\,Z^2/n^2\ \text{eV}$. The de Broglie picture therefore does not replace Bohr’s results; it explains the rule that produces them.

A useful consequence: the number of wavelengths around the $n$-th orbit is $n$. The ground state holds exactly one wave; the second state holds two; and so on. A larger orbit fits more waves because the circumference grows while the wavelength shrinks as the electron slows.

## 3. Worked example: wavelength of an orbiting electron

For hydrogen in the ground state, find the de Broglie wavelength of the electron and check that one wavelength fits the circumference.

The ground-state speed is $v_1\approx2.19\times10^6\ \text{m/s}$ and the radius is $r_1=a_0=0.529\times10^{-10}\ \text{m}$.

$$
\lambda = \frac{h}{mv}
= \frac{6.63\times10^{-34}}{(9.11\times10^{-31})(2.19\times10^6)}
\approx3.32\times10^{-10}\ \text{m}.
$$

The circumference is

$$
2\pi r_1 = 2\pi(0.529\times10^{-10})
\approx3.32\times10^{-10}\ \text{m}.
$$

The two agree, confirming that exactly one wavelength fits the ground-state orbit.

## 4. A common mistake

**Using the wrong momentum.** The de Broglie wavelength uses the electron’s momentum $mv$ in the chosen frame. A frequent error is to use the photon momentum $h/\lambda$ or the kinetic energy directly. Always compute $\lambda=h/p$ with $p=mv$ (non-relativistically) for the orbiting electron.

Another error is concluding that the standing-wave condition alone determines the orbit radius. It does not: it gives a relation between $r$ and $v$, and the Coulomb force balance is still needed to fix both. The standing wave explains *why* $n$ is an integer; the dynamics explain *what* $r$ and $v$ are.

## Try it yourself

**A.** For hydrogen in the state $n=2$, find the de Broglie wavelength and the orbit circumference, and verify they are consistent.

<details><summary>Show the reasoning</summary>

$r_2=a_0\times4=2.12\times10^{-10}\ \text{m}$; $v_2=2.19\times10^6/2=1.095\times10^6\ \text{m/s}$.

$$
\lambda=\frac{h}{mv_2}\approx6.64\times10^{-10}\ \text{m},
\qquad 2\pi r_2\approx1.33\times10^{-9}\ \text{m}=2\lambda.
$$

Two wavelengths fit the $n=2$ orbit, as expected.
</details>

**B.** Show algebraically that $2\pi r=n\lambda$ leads to $mvr=n\hbar$.

<details><summary>Show the reasoning</summary>

$\lambda=h/(mv)$. Then $2\pi r=n h/(mv)$, so $mv(2\pi r)=n h$, i.e. $mvr=n h/(2\pi)=n\hbar$.
</details>

**C.** Why does the de Broglie wavelength of the electron decrease as $n$ increases is false — actually state how $\lambda$ changes with $n$ and explain.

<details><summary>Show the reasoning</summary>

$\lambda_n=h/(mv_n)\propto n$ (since $v_n\propto1/n$), so the wavelength **increases** with $n$. The circumference $2\pi r_n\propto n^2$ grows faster, so more wavelengths fit: $n$ of them. The standing-wave condition is $2\pi r_n=n\lambda_n$, consistent with both trends.
</details>

## Remember

- de Broglie: $\lambda=h/p=h/(mv)$ for a particle.
- A stable orbit requires $2\pi r=n\lambda$, an integer number of waves.
- This gives $mvr=n\hbar$, Bohr’s quantisation condition.
- The number of wavelengths around the $n$-th orbit is $n$.

This completes the core of the chapter: Rutherford’s nucleus, Bohr’s quantised orbits, hydrogen’s spectrum, and de Broglie’s wave justification. The practice module next ties these ideas together with method selection and mastery questions.