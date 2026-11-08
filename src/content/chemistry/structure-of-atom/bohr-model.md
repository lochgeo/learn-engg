## A model built to fix two failures

Bohr (1913) attacked Rutherford's failures head on. His starting point was the one clean, quantitative clue available: hydrogen's line spectrum from the previous module. Instead of patching classical physics, Bohr *postulated* that the classical rules simply do not apply inside the atom, then dared the model to reproduce the Rydberg formula. It does — with a correct prediction of the Rydberg constant — and it remains the compact mental model that every quantum-numbers discussion starts from.

## 1. The postulates

Bohr made three claims about a hydrogen atom with one electron of charge $-e$ orbiting a nucleus of charge $+Ze$ ($Z=1$ for H, 2 for He⁺, 3 for Li²⁺):

1. **Stationary states.** The electron moves only in certain fixed circular orbits of definite radii and definite energy, and *while it stays in one there is no radiation at all*. Energy is exchanged only when the electron jumps between orbits.
2. **Quantised orbits.** Only those orbits occur for which the angular momentum is a whole multiple of $\hbar=h/2\pi$:

$$
mvr=\frac{nh}{2\pi},\qquad n=1,2,3,\ldots
$$

where $m$ is the electron mass, $v$ its speed and $r$ the orbital radius.
3. **Jumps emit or absorb photons.** A jump between orbits of energy $E_{high}$ and $E_{low}$ absorbs or emits one photon with frequency fixed by the energy difference:

$$
h\nu=E_{high}-E_{low}.
$$

The electron never radiates *while* in orbit, and never occupies the gap between orbits.

## 2. The orbital radius

Classical mechanics still applies *inside* an orbit: the Coulomb attraction supplies the centripetal force:

$$
\frac{kZe^{2}}{r^{2}}=\frac{mv^{2}}{r},\qquad k=\frac{1}{4\pi\varepsilon_0}=9.0\times10^{9}\ \text{N m}^2\ \text{C}^{-2}.
$$

Couple this with the quantisation condition $mvr=nh/2\pi$ and eliminate $v$. The radius of the $n$-th orbit comes out as

$$
r_{n}=\frac{n^{2}}{Z}\times52.9\ \text{pm}.
$$

For hydrogen in its lowest orbit, $r_1 = 52.9\ \text{pm} = 0.529\ \text{Å}$ — the celebrated **Bohr radius**, which sets the size scale of all atoms. Note the scalings: radius grows as $n^2$ (higher orbits rapidly balloon) and shrinks in proportion to $Z$ (a stronger nuclear pull squeezes the orbit).

## 3. The orbital speed

Substituting back gives the speed in the $n$-th orbit:

$$
v_{n}=\frac{Z}{n}\times2.18\times10^{6}\ \text{m s}^{-1}.
$$

Electrons are fast: in hydrogen's ground state about 1% of the speed of light. Notice this is where the model must eventually fail — speed and position together would pin the electron down completely, which the uncertainty principle (later in this chapter) forbids. Bohr's model pre-dates that principle and ignores it.

## 4. The orbit energy

With kinetic energy $K=\tfrac12mv^2=kZe^2/2r$ and potential energy $U=-kZe^2/r$, the total energy is

$$
E=K+U=-\frac{kZe^{2}}{2r}.
$$

Inserting the quantised radius:

$$
E_{n}=-\frac{Z^{2}}{n^{2}}\times2.18\times10^{-18}\ \text{J}\ \ =\ \ -\frac{Z^{2}}{n^{2}}\times13.6\ \text{eV}\ \ =\ \ -\frac{Z^{2}}{n^{2}}\times1312\ \text{kJ mol}^{-1}.
$$

The **negative sign says the electron is bound**. Energy must be added to free it, and exactly $|E_n|$ is the ionisation energy from level $n$. As $n\to\infty$, $E_n\to0$: the ionised electron is free and no longer belongs to a level at all. The ground state ($n=1$) sits deepest, and higher levels cluster ever closer to $0$.

<learning-block type="concept" title="Why the levels crowd together">

$E_n\propto1/n^2$ is a lopsided ladder: the gap $1\to2$ costs $10.2\ \text{eV}$, while the gap $10\to11$ costs only about $0.024\ \text{eV}$. This is exactly the bunching seen in spectra — lines of a series crowd together towards the series limit, where the ionised continuum begins. One formula therefore reproduces both the spacing pattern and the convergence of hydrogen's spectrum.

</learning-block>

## 5. The spectral series, explained

A jump from $n_2$ down to $n_1$ emits a photon with

$$
h\nu=E_{high}-E_{low}=2.18\times10^{-18}Z^{2}\left(\frac{1}{n_1^{2}}-\frac{1}{n_2^{2}}\right),
$$

so the emitted wavenumber is

$$
\bar\nu=\frac{E_{high}-E_{low}}{hc}=R_HZ^{2}\left(\frac{1}{n_1^{2}}-\frac{1}{n_2^{2}}\right).
$$

Dividing the fundamental constants out gives $R_H=1.097\times10^{7}\ \text{m}^{-1}$ — the same number spectroscopists had measured, now derived from $m$, $e$, $h$ and $c$ alone. The Lyman, Balmer, Paschen series of the earlier module drop out automatically, each corresponding to a ladder of arrivals at $n_1=1,2,3\ldots$

Bohr did even better than fit: the formula predicts correctly for **hydrogen-like ions** when $Z$ is inserted. Helium ion He⁺ ($Z=2$) has orbit radii four times smaller and energies four times deeper than hydrogen's; its spectral lines should appear at four times the frequency of hydrogen's — telescopes found exactly such lines in the stars.

### Worked example: the red line of hydrogen

For the transition $3\to2$ in hydrogen:

$$
E_2=-\frac{13.6}{4}=-3.40\ \text{eV},\qquad E_3=-\frac{13.6}{9}=-1.51\ \text{eV}.
$$

The emitted photon carries $\Delta E=-1.51-(-3.40)=1.89\ \text{eV}=3.03\times10^{-19}\ \text{J}$:

$$
\lambda=\frac{hc}{\Delta E}=\frac{1240\ \text{eV nm}}{1.89\ \text{eV}}=656\ \text{nm}.
$$

Sanity check: 656 nm is the red Balmer line from the earlier worked example — two different theories, one radiated wavelength. That cross-agreement is the model's strongest selling point.

<learning-block type="mistake" title="Bohr-model errors">

- **Using 13.6 eV for ions.** Multiply by $Z^2$: ionising He⁺ from its ground state needs $4\times13.6=54.4\ \text{eV}$, not 13.6.
- **Dropping the sign of the energy.** $E_n$ is negative for a bound electron; ionisation energies are the positive magnitudes.
- **Forgetting the radius scaling.** $r_n\propto n^2/Z$: the second orbit of hydrogen is four times the first, not twice.
- **Expecting radiation while the electron is in orbit.** In this model the only source of a photon is a jump between levels.

</learning-block>

## 6. Limits of the model

Bohr's model was the summit of the old quantum theory, and it fails precisely where it counts:

1. **Line splitting.** Real hydrogen lines resolve into closely spaced fine-structure multiplets, and shift in magnetic fields (the Zeeman effect). Orbits defined by one integer cannot produce either.
2. **Multi-electron atoms.** Nothing here says how two or more electrons twist around each other; the model cannot predict any other element's spectrum.
3. **No account of chemical behaviour** — bond formation, molecular shape, reactivity — which is what chemistry is about.
4. **Inconsistent with the uncertainty principle.** A defined circular orbit with defined speed violates $\Delta x\,\Delta p\ge h/4\pi$; the electron cannot know both where it is and which way it is going. That principle appears in the dual-nature module.

## Try it yourself

**A.** Compute the ionisation energy of hydrogen from its ground state in kJ mol⁻¹ and in eV.

<details><summary>Show the reasoning</summary>

From $n=1$: $|E_1|=1312\ \text{kJ mol}^{-1}=13.6\ \text{eV}$ per atom. The bridge between units is that $1\ \text{eV}$ per particle $=96.5\ \text{kJ mol}^{-1}$, so $13.6\times96.5=1312$ — the two unit systems tell the same story.
</details>

**B.** Find the radius of the innermost orbit of Li²⁺ ($Z=3$).

<details><summary>Show the reasoning</summary>

$r_1=52.9\ \text{pm}\times n^2/Z=52.9/3=17.6\ \text{pm}$. The triple nuclear charge pulls the single electron in three times closer than in hydrogen — a hydrogen-like ion, not a lithium atom with filled shells.
</details>

**C.** A hydrogen atom absorbs a photon of wavelength 102.6 nm. Which orbit does the electron reach?

<details><summary>Show the reasoning</summary>

The photon energy is $1240/102.6=12.1\ \text{eV}$. Reaching orbit $n$ from the ground state costs $13.6-13.6/n^2$: for $n=2$ this is $10.2\ \text{eV}$; for $n=3$ it is $13.6-1.51=12.1\ \text{eV}$. So the electron lands on $n=3$ — upward Lyman-series transitions always start at $n_1=1$.
</details>

## Remember

- Postulates: fixed orbits, $mvr=nh/2\pi$ allowed, photons emitted only in jumps with $h\nu=\Delta E$.
- $r_n=52.9\ \text{pm}\times n^2/Z$; $v_n=2.18\times10^6\ \text{m s}^{-1}\times Z/n$.
- $E_n=-13.6\ \text{eV}\times Z^2/n^2=-2.18\times10^{-18}\ \text{J}\times Z^2/n^2$; negative means bound.
- Jumps give $\bar\nu=R_HZ^2(1/n_1^2-1/n_2^2)$ and derive the measured $R_H$ from fundamental constants.
- Valid only for one-electron atoms; it cannot explain fine structure, multi-electron atoms or chemistry — the model that succeeds there requires waves, and that is the next step.
