## Rust is electrochemistry

**Corrosion** is the slow destruction of a metal by electrochemical reaction with its environment. Rusting of iron is the familiar example, but the same mechanism attacks most metals. Understanding it as a galvanic process explains why some conditions accelerate it and how prevention methods work.

## 1. What corrosion is

A metal tends to revert to its ore: the refined metal is thermodynamically unstable relative to its oxide/hydroxide in the presence of oxygen and water. The process is electrochemical — local anodes and cathodes form on the metal surface, connected by the metal itself and by a thin surface electrolyte (moisture).

## 2. Mechanism of rusting (iron)

Overall reaction:

$$
4\mathrm{Fe(s)}+3\mathrm{O_2(g)}+6\mathrm{H_2O(l)}\rightarrow2\mathrm{Fe_2O_3\cdot3H_2O(s)}.
$$

Electrochemical steps:

- Anode (oxidation): $\mathrm{Fe(s)\rightarrow Fe^{2+}(aq)+2e^-}$
- Cathode (reduction, neutral/basic): $\mathrm{O_2(g)+2H_2O(l)+4e^-\rightarrow4OH^-(aq)}$

The $\mathrm{Fe^{2+}}$ and $\mathrm{OH^-}$ combine to form $\mathrm{Fe(OH)_2}$, which is further oxidised by oxygen to hydrated iron(III) oxide — rust. Rust is porous and flakes off, exposing fresh iron, so corrosion continues.

## 3. Factors that accelerate corrosion

- **Moisture and oxygen** — both are reactants.
- **Electrolytes** (salt, acid) in the moisture raise conductivity and speed ion migration.
- **Galvanic coupling** — contact with a more noble metal (e.g. copper rivets on iron) makes iron the anode of a galvanic cell.
- **Stress and scratches** — strained regions are slightly more anodic.
- **pH** — acidic conditions favour the cathodic reduction of oxygen/protons.

## 4. Prevention

- **Barrier protection**: paint, oil, grease, plastic coatings — keep oxygen and water away. Requires maintenance; a scratch can localise corrosion.
- **Galvanising**: coat iron with zinc. Zinc is more reactive ($E^\circ_\mathrm{Zn^{2+}/Zn}=-0.76\ \text{V}$) and corrodes sacrificially; even a scratch is protected because zinc becomes the anode.
- **Tinning**: coat with tin. Tin is less reactive, so it protects only while intact; a scratch exposes iron, which then corrodes faster (iron becomes the anode).
- **Cathodic protection**: connect the structure to a more reactive metal (Mg, Zn, Al) as a **sacrificial anode**, or impress a current making the structure the cathode.
- **Alloying**: stainless steel (Cr, Ni) forms a passive oxide film.

## 5. Worked example

Estimate the mass of iron lost if a structure corrodes at a steady current of $0.50\ \text{A}$ for one year. $\mathrm{Fe\rightarrow Fe^{2+}+2e^-}$, $M(\mathrm{Fe})=55.85\ \text{g mol}^{-1}$, $n=2$.

$$
t=1\ \text{yr}=3.15\times10^7\ \text{s},\qquad Q=I t=0.50\times3.15\times10^7=1.58\times10^7\ \text{C}.
$$

$$
m=\frac{55.85\times1.58\times10^7}{2\times96500}
=\frac{8.82\times10^8}{1.93\times10^5}
\approx4.57\times10^3\ \text{g}\approx4.6\ \text{kg}.
$$

If protected by a magnesium sacrificial anode for the same charge, magnesium consumed ($\mathrm{Mg\rightarrow Mg^{2+}+2e^-}$, $M=24.3$, $n=2$) would be

$$
m_\mathrm{Mg}=\frac{24.3\times1.58\times10^7}{2\times96500}\approx2.0\ \text{kg},
$$

which is why sacrificial anodes are sized and replaced periodically.

## 6. Method for corrosion problems

1. Identify the anode metal (the one oxidised) and the cathode reaction (usually oxygen reduction).
2. Write the half-reactions and overall rusting equation.
3. For quantitative loss, use Faraday’s law with the metal’s $n$.
4. For prevention, compare reduction potentials: a coating metal protects sacrificially only if it is more reactive than iron.
5. Check that the proposed protection does not create a worse galvanic couple if damaged.

<learning-block type="mistake" title="Assuming any metal coating protects">
A coating protects sacrificially only if the coating metal is more reactive than the substrate. Zinc on iron (galvanising) works even when scratched; tin on iron (tinning) does not — a scratch makes iron the anode and corrosion accelerates. Conversely, connecting iron to copper speeds up rusting. Always compare reduction potentials before choosing a protection scheme.
</learning-block>

## Try it yourself

**A.** Explain why iron rusts faster in salt water than in pure water.

<details><summary>Show the reasoning</summary>

Salt water is a better electrolyte: higher ionic conductivity lets $\mathrm{Fe^{2+}}$, $\mathrm{OH^-}$ and electrons migrate faster between local anodes and cathodes, increasing the corrosion current.

</details>

**B.** A steel tank is to be protected cathodically. Should it be connected to a block of magnesium or a block of copper? Justify with potentials.

<details><summary>Show the reasoning</summary>

Magnesium ($E^\circ=-2.37\ \text{V}$) is more reactive than iron ($-0.44\ \text{V}$), so it becomes the anode and corrodes sacrificially, forcing the steel to be the cathode. Copper ($+0.34\ \text{V}$) is less reactive and would make iron the anode, accelerating corrosion.

</details>

**C.** Why does aluminium, despite being reactive ($E^\circ=-1.66\ \text{V}$), resist corrosion well?

<details><summary>Show the reasoning</summary>

It forms a thin, adherent, insoluble oxide layer ($\mathrm{Al_2O_3}$) that passivates the surface and blocks oxygen and water. The thermodynamic tendency to corrode is high, but the kinetics are suppressed by the protective film.

</details>

## Check your understanding

Distinguish galvanising from tinning, including what happens when each coating is scratched.

<details><summary>Reveal</summary>

Galvanising coats iron with zinc, which is more reactive; zinc corrodes sacrificially and even a scratch is protected. Tinning coats iron with tin, which is less reactive; tin protects only while intact, and a scratch exposes iron, which then corrodes faster than uncoated iron because iron becomes the anode of an iron–tin couple.

</details>

## Take away

- Corrosion is electrochemical oxidation, usually with oxygen reduction as the cathode reaction.
- Rusting needs iron, oxygen and water; electrolytes accelerate it.
- Galvanising and sacrificial anodes work because the protector is more reactive than iron.
- Tinning and copper contact can worsen corrosion if the coating is damaged.
- Faraday’s law quantifies metal loss from a corrosion current.
- This concludes the concept modules; the review module ties the whole chapter together.