## The bridge between what you can weigh and what you cannot count

A single drop of water weighing $0.05\ \text{g}$ carries roughly $1.7\times10^{21}$ molecules. No balance counts molecules; every balance reports grams. Chemistry therefore needs a **fixed exchange rate** between mass and number of particles. That exchange rate is the mole, and once it is in place, every mass you ever weigh can be converted into a head-count of atoms, molecules or formula units.

## 1. Relative atomic mass: choosing a common scale

Absolute atomic masses are absurdly small — a hydrogen atom is about $1.67\times10^{-24}\ \text{g}$ — so chemists divide all of them by one reference. The modern scale takes the carbon-12 atom as the standard:

$$
\text{relative atomic mass of an element}=\frac{\text{mass of one atom of the element}}{\tfrac{1}{12}\times\text{mass of one atom of }{}^{12}\mathrm{C}}.
$$

The unit attached is the unified mass, $1\ \text{u}=\dfrac{1}{12}$ of a C-12 atom's mass $=1.66\times10^{-24}\ \text{g}$. On this scale hydrogen is about $1.008\ \text{u}$, carbon $12.011\ \text{u}$. Because it is a ratio, relative atomic mass is in practice treated as a pure number per atom.

## 2. Average atomic mass: what the table of atomic masses really lists

Most elements are mixtures of isotopes, so the quoted atomic mass is the **weighted average** over the natural isotope mixture.

<learning-block type="example" title="Chlorine, the classic case">

Natural chlorine is about $75\%$ Cl-35 (mass $35\ \text{u}$) and $25\%$ Cl-37 (mass $37\ \text{u}$). The average is

$$
\text{mass}=\frac{(75)(35)+(25)(37)}{100}=\frac{2625+925}{100}=35.5\ \text{u}.
$$

Note carefully: **no single chlorine atom weighs $35.5\ \text{u}$**. Individual atoms weigh $35$ or $37$; the average is what a bulk measurement reveals.

</learning-block>

## 3. Molecular mass and formula mass

Sum the atomic masses over all atoms in a particle and you get its molecular (or formula) mass. In this book, worked examples use rounded integer values — H = 1, C = 12, N = 14, O = 16, Na = 23, S = 32, Cl = 35.5, Ca = 40, Fe = 56 — for clean arithmetic.

| Substance | Adding up | Mass in u |
| --- | --- | --- |
| Water, H2O | $2(1)+16$ | $18$ |
| Carbon dioxide, CO2 | $12+2(16)$ | $44$ |
| Ammonia, NH3 | $14+3(1)$ | $17$ |
| Sodium carbonate, Na2CO3 | $2(23)+12+3(16)$ | $106$ |
| Sodium chloride, NaCl | $23+35.5$ | $58.5$ |

NaCl is not made of molecules, so $58.5$ is called a **formula mass**: it is the mass of one formula unit of the ionic lattice.

## 4. The mole and Avogadro's number

The mole (symbol mol) is defined as the amount of substance containing as many elementary entities as there are atoms in exactly $12\ \text{g}$ of carbon-12:

$$
N_A=6.022\times10^{23}\ \text{mol}^{-1}.
$$

The paying-off fact: a **molar mass** — one mole of any species — equals that species' atomic or molecular mass **expressed in grams**. One mole of water: $18\ \text{g}$ and $6.022\times10^{23}$ molecules. One mole of carbon: $12\ \text{g}$ and $6.022\times10^{23}$ atoms. The scale transfers from the atomic level in u to the macroscopic level in g with no conversion factor at all.

Four bridges convert between the chemist's accounts:

| You want | You know | Bridge |
| --- | --- | --- |
| moles $n$ | mass $m$ (g) | $n=\dfrac{m}{M}$ with $M$ the molar mass in g/mol |
| particles $N$ | moles $n$ | $N=n\times6.022\times10^{23}$ |
| moles $n$ | gas volume at STP | $n=\dfrac{V\ (\text{L})}{22.4}$ |
| mass $m$ | moles $n$ | $m=nM$ |

<learning-block type="example" title="Counting what $9\ \text{g}$ of water contains">

Molar mass of water is $18\ \text{g/mol}$, so

$$
n=\frac{9}{18}=0.5\ \text{mol}.
$$

Molecules: $N=0.5\times6.022\times10^{23}=3.011\times10^{23}$ molecules.

Atoms: each water molecule holds 3 atoms, so there are $3\times3.011\times10^{23}=9.033\times10^{23}$ atoms.

Sanity check: the atom count is exactly three times the molecule count, matching the H2O geometry. A wrong power of ten would show up immediately against that multiplier.

</learning-block>

For gases only, one extra bridge exists: at standard temperature and pressure (STP, $273\ \text{K}$ and $1\ \text{atm}$) one mole of any ideal gas occupies $22.4\ \text{L}$. So a $5.6\ \text{L}$ sample of oxygen at STP is $5.6/22.4=0.25\ \text{mol}$, weighing $0.25\times32=8\ \text{g}$ — the same reckoning if you had weighed the gas in a flask. This bridge is *volume-linked* and fails for liquids and solids, whose molar volumes differ wildly by substance; and it assumes ideal behaviour, which real gases only approximate.

## 5. Choosing the right bridge in a question

Most mole-concept questions are one or two bridge applications:

1. Name what is given (grams, litres at STP, or a particle count) and what is asked.
2. Convert the given quantity to moles first — moles are the currency every other quantity is priced in.
3. Apply the one bridge that lands on the requested quantity.
4. Attach units to the number, then check its order of magnitude.

<learning-block type="mistake" title="Moles are amount, not mass">

Two classic slips. First, treating 'one mole' as 'one gram-scale handful' of anything: a mole of oxygen **gas** (O2) is $32\ \text{g}$, not $16\ \text{g}$ — moles count particles, so you must use the formula mass of the particle present. Second, dividing by $6.022\times10^{23}$ when a question asks for molecules: the bridge multiplies moles by $N_A$ to get counts, so answer options like $3.011\times10^{23}$ and $3.011\times10^{-23}$ look similar but differ by $46$ orders of magnitude.

</learning-block>

## Try it yourself

**A.** How many moles and how many molecules are in $22\ \text{g}$ of CO2?

<details><summary>Show the reasoning</summary>

$$
n=\frac{22}{44}=0.5\ \text{mol},\qquad N=0.5\times6.022\times10^{23}=3.011\times10^{23}\ \text{molecules}.
$$
</details>

**B.** Which contains more atoms: $1\ \text{g}$ of hydrogen gas (H2) or $1\ \text{g}$ of oxygen gas (O2)?

<details><summary>Show the reasoning</summary>

$1\ \text{g}$ H2 $=\tfrac{1}{2}\ \text{mol}=3.011\times10^{23}$ molecules $=6.022\times10^{23}$ atoms (diatomic). $1\ \text{g}$ O2 $=\tfrac{1}{32}\ \text{mol}=1.88\times10^{22}$ molecules $=3.76\times10^{22}$ atoms. Hydrogen wins by a factor of about $16$, even though the masses are equal: light atoms pack more of them per gram.
</details>

**C.** What mass of ammonia occupies $2.24\ \text{L}$ at STP?

<details><summary>Show the reasoning</summary>

$$
n=\frac{2.24}{22.4}=0.1\ \text{mol},\qquad m=nM=0.1\times17=1.7\ \text{g}.
$$
</details>

## Remember

- Moles are the central currency: convert whatever is given into moles before anything else.
- $M$ in g per mol carries the same number as the particle mass in u — memorise the pairing, not a list.
- Isotope averages explain why atomic masses like Cl $35.5$ are not whole; no single atom needs to 'be' that value.
- $22.4\ \text{L}$ at STP belongs to gases alone; liquids and solids have no such clean bridge.
- Percentages of elements and formulae of compounds — the next module — are all mole bookkeeping in disguise.
