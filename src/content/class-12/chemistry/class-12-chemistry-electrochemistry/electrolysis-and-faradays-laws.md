## Forcing chemistry with electricity

When a reaction is non-spontaneous, an external voltage can drive it. **Electrolysis** uses a direct current to decompose a compound or to deposit a metal. Faraday’s laws turn the measured current and time into an exact amount of substance, which is the basis of electroplating, refining and coulometric analysis.

## 1. The electrolytic cell

An electrolytic cell has two electrodes in an electrolyte, connected to a DC source.

- The **anode** is positive (connected to the + terminal); oxidation occurs there.
- The **cathode** is negative; reduction occurs there.

Ions migrate: cations to the cathode, anions to the anode. The external voltage must exceed the cell’s decomposition potential. Products depend on the electrolyte and on competing reactions (overpotential).

Examples:

- Molten NaCl: $\mathrm{Na^+}$ reduced to Na at cathode; $\mathrm{Cl^-}$ oxidised to $\mathrm{Cl_2}$ at anode.
- Aqueous NaCl: at cathode water is reduced to $\mathrm{H_2}$ (Na is too reactive); at anode $\mathrm{Cl^-}$ is oxidised to $\mathrm{Cl_2}$ if concentrated, otherwise water to $\mathrm{O_2}$.

## 2. Faraday’s first law

The mass $m$ of substance deposited or liberated at an electrode is directly proportional to the charge $Q$ passed:

$$
m\propto Q,\qquad Q=I\,t.
$$

Writing $m=Z\,Q$, the proportionality constant $Z$ is the **electrochemical equivalent**:

$$
Z=\frac{M}{nF},
$$

where $M$ is the molar mass, $n$ the number of electrons per ion, and $F=96500\ \text{C mol}^{-1}$. Hence

$$
m=\frac{M\,I\,t}{n\,F}.
$$

## 3. Faraday’s second law

When the same charge passes through different electrolytes, the masses deposited are proportional to their **equivalent masses** $M/n$:

$$
\frac{m_1}{m_2}=\frac{M_1/n_1}{M_2/n_2}.
$$

Equivalently, one **Faraday** ($F$ coulombs) deposits one equivalent (one mole of electrons’ worth) of any substance.

## 4. Worked examples

**Example 1 — copper deposition.** A current of $2.0\ \text{A}$ runs for $30\ \text{min}$ ($1800\ \text{s}$) through $\mathrm{CuSO_4}$ solution. $\mathrm{Cu^{2+}+2e^-\rightarrow Cu}$, so $n=2$, $M(\mathrm{Cu})=63.5\ \text{g mol}^{-1}$.

$$
Q=I t=2.0\times1800=3600\ \text{C}.
$$

$$
m=\frac{63.5\times3600}{2\times96500}
=\frac{228600}{193000}=1.18\ \text{g}.
$$

**Example 2 — time to deposit silver.** Deposit $1.08\ \text{g}$ of Ag ($M=108$, $n=1$) at $2.0\ \text{A}$.

$$
t=\frac{m\,n\,F}{M\,I}
=\frac{1.08\times1\times96500}{108\times2.0}
=\frac{104220}{216}=482.5\ \text{s}\approx8.0\ \text{min}.
$$

**Example 3 — electrolysis of water.** To produce $1.0\ \text{mol}$ of $\mathrm{H_2}$ ($2.0\ \text{g}$) at the cathode, $2\ \text{mol}$ of electrons are needed ($n=2$ per $\mathrm{H_2}$):

$$
Q=2F=1.93\times10^5\ \text{C}.
$$

At $5.0\ \text{A}$ this takes $Q/I=3.86\times10^4\ \text{s}\approx10.7\ \text{h}$. The oxygen produced is half a mole (by stoichiometry $2\mathrm{H_2O}\rightarrow2\mathrm{H_2}+\mathrm{O_2}$).

## 5. Discharge rules in aqueous solution

When several cations/anions are present, the ion discharged is the one with the higher (more positive) reduction potential for cations, or the one oxidised most readily for anions, modified by overpotential. Practical rules:

- Cations: $\mathrm{Ag^+}$, $\mathrm{Cu^{2+}}$, $\mathrm{H^+}$ (as water) discharge before $\mathrm{Na^+}$, $\mathrm{K^+}$, $\mathrm{Ca^{2+}}$.
- Anions: halides discharge before $\mathrm{OH^-}$ (water) in concentrated solution; in dilute solution $\mathrm{OH^-}$ may give $\mathrm{O_2}$.

This is why electrolysis of dilute $\mathrm{Na_2SO_4}$ simply splits water into $\mathrm{H_2}$ and $\mathrm{O_2}$.

## 6. Method for electrolysis problems

1. Write the electrode half-reaction and read $n$.
2. Convert time to seconds if current is in amperes.
3. Compute $Q=I t$, then $m=M Q/(nF)$.
4. For gas volumes, use the molar volume ($22.4\ \text{L mol}^{-1}$ at STP) after finding moles from $Q/(nF)$.
5. Check that the mass is physically plausible and that competing reactions have been considered.

<learning-block type="mistake" title="Forgetting that n is per ion, not per formula">
In Faraday’s law, $n$ is the number of electrons in the electrode half-reaction for the species being deposited. For $\mathrm{Al^{3+}+3e^-\rightarrow Al}$, $n=3$, not 1; for $\mathrm{Cu^{2+}+2e^-\rightarrow Cu}$, $n=2$. Using $n=1$ for a divalent or trivalent ion underestimates the time needed by a factor of 2 or 3. Also remember that $t$ must be in seconds when $I$ is in amperes.
</learning-block>

## Try it yourself

**A.** How much charge is needed to deposit $2.70\ \text{g}$ of aluminium from $\mathrm{Al^{3+}}$? ($M=27.0$, $n=3$.)

<details><summary>Show the reasoning</summary>

Moles of Al $=2.70/27.0=0.10\ \text{mol}$. Charge $=0.10\times3\times96500=2.895\times10^4\ \text{C}$.

</details>

**B.** A current of $3.0\ \text{A}$ for $10\ \text{min}$ deposits $0.64\ \text{g}$ of copper. Verify consistency with Faraday’s law.

<details><summary>Show the reasoning</summary>

$Q=3.0\times600=1800\ \text{C}$. Expected $m=63.5\times1800/(2\times96500)=0.593\ \text{g}$. The stated $0.64\ \text{g}$ is slightly high, suggesting current efficiency below 100% or measurement error — a useful reminder that Faraday’s law gives the theoretical maximum.

</details>

**C.** Electrolysis of acidulated water at $2.0\ \text{A}$ for $1930\ \text{s}$ produces hydrogen at STP. Find its volume.

<details><summary>Show the reasoning</summary>

$Q=2.0\times1930=3860\ \text{C}$. Moles of electrons $=3860/96500=0.040\ \text{mol}$. Moles of $\mathrm{H_2}=0.040/2=0.020\ \text{mol}$. Volume $=0.020\times22.4=0.448\ \text{L}$.

</details>

## Check your understanding

Why does electrolysis of aqueous sodium chloride give hydrogen at the cathode rather than sodium metal?

<details><summary>Reveal</summary>

Sodium has a very negative reduction potential ($-2.71\ \text{V}$), so $\mathrm{Na^+}$ is much harder to reduce than water ($\mathrm{2H_2O+2e^-\rightarrow H_2+2OH^-}$, about $-0.83\ \text{V}$ at neutral pH). Water is reduced preferentially. Sodium metal would require molten NaCl, where no water competes.

</details>

## Take away

- Electrolysis drives non-spontaneous reactions using an external DC source.
- Faraday’s first law: $m=M I t/(nF)$.
- Faraday’s second law: equal charge deposits equal equivalents.
- $n$ is the electron count in the electrode half-reaction.
- Products in aqueous solution follow discharge (overpotential) rules.
- The next module stores this chemistry in portable devices: batteries and fuel cells.