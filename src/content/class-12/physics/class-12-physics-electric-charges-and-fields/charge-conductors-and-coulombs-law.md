## Why a rubbed balloon holds on

Rub a balloon on a woollen sleeve and it will cling to a wall for hours. Nothing visible has been added to the balloon; it has simply acquired a tiny excess of one kind of electric charge, and the wall responds. The same interaction holds atoms together, drives nerve signals and makes lightning. This chapter builds that story from a single measurable quantity: **charge**.

## 1. Charge is quantised, conserved and additive

The SI unit of charge is the **coulomb** (C). Charge comes in two signs, conventionally called positive and negative. Two positive charges repel, two negative charges repel, and a positive and a negative charge attract.

Charge is **quantised**: every isolated charge is an integer multiple of the elementary charge

$$
e=1.60\times10^{-19}\ \text{C}.
$$

For a body carrying $n$ extra electrons, $q=-ne$; for $n$ missing electrons, $q=+ne$. This does not mean charge can only be created in lumps of $e$ in every context — quarks carry thirds of $e$ — but no free particle with a smaller charge has ever been observed.

Charge is also **conserved**. Rubbing does not create charge; it separates charge that was already there. If a plastic rod gains electrons from fur, the fur is left with an equal positive charge. The total charge of an isolated system stays constant.

Finally, charge is **additive**: the net charge of a collection is the algebraic sum of its parts. Two charges of $+3\ \mu\text{C}$ and $-5\ \mu\text{C}$ together behave, from far away, like a single charge of $-2\ \mu\text{C}$.

A useful scale check: a charge of $-1.0\ \mu\text{C}$ corresponds to

$$
n=\frac{1.0\times10^{-6}}{1.60\times10^{-19}}\approx6.3\times10^{12}
$$

electrons. Everyday charged objects hold enormous numbers of electrons but a very small charge in coulombs.

## 2. Conductors, insulators and charging

In a **conductor** — a metal, graphite, or an electrolyte — some electrons are free to move through the material. In an **insulator** — glass, rubber, dry air, most plastics — electrons are bound to individual atoms or molecules. A semiconductor sits between these extremes.

That single difference controls how objects become charged:

- **Friction** transfers electrons between materials that are pressed together. The material that holds electrons more weakly loses them; the other gains them.
- **Contact** lets charge flow between a charged conductor and a neutral conductor until their potentials match.
- **Induction** uses a nearby charged object to rearrange charge in a neutral conductor. If the conductor is then earthed while the charged object is still near, it keeps a net charge of the opposite sign after the earth connection is removed.

In electrostatic equilibrium, the electric field inside a conductor is zero. If it were not, free electrons would keep moving. This has two consequences used throughout the chapter: any excess charge on a conductor resides on its **outer surface**, and the field just outside a conductor is perpendicular to that surface. Sharp points concentrate charge, which is why lightning rods are pointed.

## 3. Coulomb's law

For two point charges $q_1$ and $q_2$ separated by a distance $r$ in vacuum, the magnitude of the force on either charge is

$$
F=\frac{1}{4\pi\varepsilon_0}\frac{|q_1q_2|}{r^2},
$$

where $\varepsilon_0=8.85\times10^{-12}\ \text{C}^2\,\text{N}^{-1}\text{m}^{-2}$ is the **permittivity of free space**. The constant combination is

$$
k=\frac{1}{4\pi\varepsilon_0}\approx9.0\times10^{9}\ \text{N}\,\text{m}^2\,\text{C}^{-2}.
$$

The force acts along the line joining the charges: like charges repel, unlike charges attract. In vector form, with $\hat r_{12}$ pointing from charge 1 to charge 2,

$$
\vec F_{12}=\frac{1}{4\pi\varepsilon_0}\frac{q_1q_2}{r^2}\hat r_{12},
$$

which gives the force **on charge 2 due to charge 1**. The signs then produce the direction automatically: a positive product points along $+\hat r_{12}$ (repulsion), a negative product points along $-\hat r_{12}$ (attraction). The force on charge 1 due to charge 2 is equal and opposite, as Newton's third law requires.

Coulomb's law is an **inverse-square law**. Doubling either charge doubles the force; doubling the separation reduces it to one quarter. In a material of relative permittivity $\varepsilon_r$, the force between charges at rest is reduced to $F/\varepsilon_r$ because the material is polarised and partially screens the interaction.

## 4. Superposition: many charges at once

For three or more charges, the force on one charge is the **vector sum** of the forces from each of the others:

$$
\vec F=\vec F_{12}+\vec F_{13}+\cdots.
$$

Each pair obeys Coulomb's law as if the other charges were absent. A third charge does not shield or modify the force between two particular charges; it merely adds its own contribution. Because the forces are vectors, add components rather than magnitudes unless all forces are along the same line.

## 5. Worked example: force between two small spheres

Two small charged spheres carry $q_1=+2.0\ \mu\text{C}$ and $q_2=-3.0\ \mu\text{C}$. Their centres are $30\ \text{cm}$ apart in air.

Convert to SI first: $q_1=2.0\times10^{-6}\ \text{C}$, $q_2=-3.0\times10^{-6}\ \text{C}$, $r=0.30\ \text{m}$. For the magnitude, use the absolute values:

$$
F=(9.0\times10^9)\frac{(2.0\times10^{-6})(3.0\times10^{-6})}{(0.30)^2}
=(9.0\times10^9)\frac{6.0\times10^{-12}}{0.090}=0.60\ \text{N}.
$$

The charges have opposite signs, so the force is attractive. The force on $q_1$ points towards $q_2$, and the force on $q_2$ points towards $q_1$; the two forces are equal in magnitude and opposite in direction.

**Sanity check.** A force of $0.6\ \text{N}$ on a small sphere is comparable to the weight of a $60\ \text{g}$ mass — noticeable, but not absurd. Had the separation been left as the bare number $30$, the calculation would have given $0.054/900=6\times10^{-5}\ \text{N}$, ten thousand times too small. That slip is the reason every length goes into metres before substituting.

### How strong is the electric force?

Two protons separated by $1.0\ \text{fm}=1.0\times10^{-15}\ \text{m}$ (a nuclear separation) experience

$$
F_e=(9.0\times10^9)\frac{(1.60\times10^{-19})^2}{(1.0\times10^{-15})^2}
\approx2.3\times10^{2}\ \text{N},
$$

while their gravitational attraction is only about $1.9\times10^{-34}\ \text{N}$. The electric force is roughly $10^{36}$ times stronger. Gravity dominates on astronomical scales only because large bodies are almost exactly neutral.

## 6. Where the formula needs care

Coulomb's law in the form above applies to **point charges** or to spherically symmetric charge distributions viewed from outside. For an extended charged rod, ring or plate, divide the object into small elements and integrate, or use Gauss's law when symmetry permits. At very short distances and high fields, quantum and relativistic effects modify the simple picture; moving charges also produce magnetic forces, which belong to the next chapter of the course.

<learning-block type="mistake" title="Common Coulomb's-law errors">

- **Leaving distances in centimetres.** Convert every length to metres before substituting; $r$ is squared, so the error grows quickly.
- **Using signed charges in the magnitude formula.** The magnitude uses $|q_1q_2|$; use the signs only to decide attraction or repulsion.
- **Adding force magnitudes for non-collinear charges.** Forces are vectors: resolve into components before adding.
- **Thinking a third charge changes a two-charge force.** By superposition, the pair force is unchanged; the third charge adds its own force.

</learning-block>

## Try it yourself

**A.** Two identical charges of $+2.0\ \mu\text{C}$ are $10\ \text{cm}$ apart in air. Find the magnitude of the force between them.

<details><summary>Show the reasoning</summary>

$$
F=(9.0\times10^9)\frac{(2.0\times10^{-6})^2}{(0.10)^2}
=(9.0\times10^9)\frac{4.0\times10^{-12}}{0.010}=3.6\ \text{N}.
$$

The force is repulsive because both charges are positive.
</details>

**B.** How many electrons must be removed from a neutral body to give it a charge of $+32\ \mu\text{C}$?

<details><summary>Show the reasoning</summary>

Removing electrons leaves positive charge. The number is

$$
n=\frac{32\times10^{-6}}{1.60\times10^{-19}}=2.0\times10^{14}.
$$

The body has lost $2.0\times10^{14}$ electrons; its protons now outnumber its electrons by that amount.
</details>

**C.** Charges $+q$ and $+4q$ are fixed $0.50\ \text{m}$ apart. Where on the line between them is the net force on a third charge zero?

<details><summary>Show the reasoning</summary>

Let the point be a distance $x$ from $+q$. The two forces must have equal magnitudes:

$$
\frac{kqQ}{x^2}=\frac{k(4q)Q}{(0.50-x)^2}
\quad\Rightarrow\quad
\frac{1}{x}=\frac{2}{0.50-x}.
$$

Thus $0.50-x=2x$, so $x=0.50/3\approx0.17\ \text{m}$ from the smaller charge. The zero-force point is closer to the weaker charge, as expected.
</details>

## Remember

- Charge is quantised in units of $e=1.60\times10^{-19}\ \text{C}$, conserved, and additive as a signed quantity.
- Conductors allow charge to move; in electrostatic equilibrium the field inside a conductor is zero and excess charge sits on its surface.
- Coulomb's law gives the magnitude $F=k|q_1q_2|/r^2$ and acts along the line joining the charges.
- Forces from several charges add as vectors; every pair contributes independently.
- Convert to metres and use absolute charges for magnitude, then decide attraction or repulsion from the signs.

The next module turns the force picture into a local one: the electric field at every point around a charge.
