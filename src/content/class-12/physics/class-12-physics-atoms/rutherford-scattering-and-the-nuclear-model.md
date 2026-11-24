## Why the atom cannot be a solid sphere

For a decade after Thomson’s plum-pudding model, the accepted picture was a sphere of positive charge with electrons embedded in it, like raisins in a pudding. That model predicts that a fast, heavy, positively charged projectile shot through a thin foil should be deflected only slightly, because the positive charge is spread out and never concentrated.

Rutherford’s group tested this by firing alpha particles (helium nuclei, charge $+2e$, mass $4\ \text{u}$) from a radium source at a gold foil only a few hundred atoms thick. Most particles passed straight through, but a small fraction were deflected through large angles, and roughly $1$ in $8000$ bounced back toward the source. A diffuse positive charge cannot produce such large deflections; the only explanation is that the atom’s positive charge and nearly all its mass are concentrated in a tiny central **nucleus**, with electrons orbiting in the surrounding empty space.

## 1. The scattering geometry

An alpha particle approaches a nucleus of charge $+Ze$ with impact parameter $b$ (the perpendicular distance between its initial line of motion and the nucleus) and initial kinetic energy $K$. The Coulomb repulsion bends the trajectory. The angle between the incoming and outgoing directions is the **scattering angle** $\theta$.

For a head-on collision ($b=0$) the alpha particle stops momentarily at a distance $r_{\min}$ from the centre, where all its kinetic energy has become electrostatic potential energy:

$$
K = \frac{1}{4\pi\varepsilon_0}\frac{(2e)(Ze)}{r_{\min}}.
$$

Hence

$$
r_{\min} = \frac{1}{4\pi\varepsilon_0}\frac{2Ze^2}{K}.
$$

This is the **distance of closest approach**. It sets an upper bound on the nuclear radius: if $r_{\min}$ is a few femtometres, the nucleus must be smaller than that.

For a general impact parameter, the relation between $b$ and $\theta$ is

$$
b = \frac{1}{4\pi\varepsilon_0}\frac{2Ze^2}{2K}\cot\frac{\theta}{2}
   = \frac{1}{4\pi\varepsilon_0}\frac{Ze^2}{K}\cot\frac{\theta}{2}.
$$

Small $b$ gives large $\theta$; large $b$ gives small $\theta$. The number of particles scattered into a given solid angle is proportional to $\csc^4(\theta/2)$, so backscattering, although rare, is not zero.

## 2. What the experiment established

- The nucleus is very small compared with the atom (radius of order $10^{-15}\ \text{m}$ versus $10^{-10}\ \text{m}$).
- The nucleus carries charge $+Ze$ and contains almost all the mass.
- The atom is mostly empty space; electrons occupy the volume outside the nucleus.
- The Coulomb law holds down to nuclear distances, at least for the energies used.

A **nuclear model** of the atom therefore replaces the pudding with a heavy, tiny, positively charged core plus orbiting electrons. It explains scattering but leaves two problems for later modules: classical orbiting electrons should radiate and spiral in, and the spectrum should be continuous. Bohr resolved both with quantisation.

## 3. Worked example: distance of closest approach

An alpha particle of kinetic energy $5.0\ \text{MeV}$ heads straight for a gold nucleus ($Z=79$). Take $1/(4\pi\varepsilon_0)=9.0\times10^9\ \text{N·m}^2/\text{C}^2$ and $e=1.6\times10^{-19}\ \text{C}$. Find the distance of closest approach.

First convert the energy: $K=5.0\times10^6\times1.6\times10^{-19}\ \text{J}=8.0\times10^{-13}\ \text{J}$.

$$
r_{\min} = \frac{(9.0\times10^9)(2)(79)(1.6\times10^{-19})^2}{8.0\times10^{-13}}.
$$

The numerator is $(9.0\times10^9)(2)(79)(2.56\times10^{-38})\approx3.67\times10^{-26}\ \text{J·m}$, so

$$
r_{\min}\approx\frac{3.67\times10^{-26}}{8.0\times10^{-13}}\approx4.6\times10^{-14}\ \text{m}.
$$

**Sanity check:** this is about $46\ \text{fm}$, roughly ten times the actual gold nuclear radius, so the alpha particle never touches the nucleus; the Coulomb picture is self-consistent at this energy. A heavier nucleus or lower energy would give a smaller $r_{\min}$.

## 4. A common mistake

**Treating $r_{\min}$ as the nuclear radius.** The distance of closest approach depends on the projectile’s energy: a faster alpha particle gets closer. It is an upper bound on the nuclear size, not a measurement of it. To measure the radius itself one needs higher-energy projectiles or electron scattering, where the strong force and nuclear structure matter.

Another frequent error is forgetting the factor of $2$ in the alpha charge when writing the potential energy $q_1q_2/(4\pi\varepsilon_0 r)$; using $+e$ instead of $+2e$ halves the answer.

## Try it yourself

**A.** An alpha particle of energy $7.7\ \text{MeV}$ approaches a silver nucleus ($Z=47$). Find the distance of closest approach.

<details><summary>Show the reasoning</summary>

$K=7.7\times10^6\times1.6\times10^{-19}=1.23\times10^{-12}\ \text{J}$.

$$
r_{\min}=\frac{(9.0\times10^9)(2)(47)(2.56\times10^{-38})}{1.23\times10^{-12}}
\approx2.75\times10^{-14}\ \text{m}.
$$

The answer is of order $10^{-14}\ \text{m}$, smaller than for gold at lower energy because the nucleus is lighter and the projectile faster.
</details>

**B.** In the formula above, if the scattering angle $\theta$ increases from $60^\circ$ to $120^\circ$, does the impact parameter $b$ increase or decrease?

<details><summary>Show the reasoning</summary>

$b\propto\cot(\theta/2)$. As $\theta$ rises, $\theta/2$ rises from $30^\circ$ to $60^\circ$, so $\cot$ falls from $\sqrt3$ to $1/\sqrt3$. Thus $b$ **decreases**: a closer approach is needed to scatter through a larger angle.
</details>

**C.** Why did most alpha particles pass through the foil undeflected?

<details><summary>Show the reasoning</summary>

The nucleus occupies only about one part in $10^{15}$ of the atom’s volume, so the probability of a close encounter is tiny. Most particles travel through empty space and feel essentially no force.
</details>

## Remember

- Rutherford scattering showed the atom has a small, dense, positive nucleus surrounded by empty space.
- Distance of closest approach: $r_{\min}=\frac{1}{4\pi\varepsilon_0}\frac{2Ze^2}{K}$ for an alpha particle.
- $r_{\min}$ is an upper bound on nuclear size, not the radius itself.
- Impact parameter and scattering angle are inversely related through $\cot(\theta/2)$.

The nuclear model sets the stage; the next module asks how electrons can orbit without radiating and why atoms emit only certain wavelengths. The Bohr model answers both.