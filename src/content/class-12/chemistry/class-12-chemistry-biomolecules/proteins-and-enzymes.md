## From amino acid to working machine

A single amino acid is a small, fairly ordinary molecule. Join a few dozen to a few thousand of them in a fixed order and the chain folds into a haemoglobin molecule that carries oxygen, or an enzyme that copies DNA with remarkable precision. Nothing new is invented at the level of atoms — the same amide bond, hydrogen bond and hydrophobic contact do all the work. The properties come from **sequence** and **shape**.

## 1. Amino acids: the alphabet

A standard $\alpha$-amino acid has a central carbon bonded to an amino group ($-NH_2$), a carboxyl group ($-COOH$), a hydrogen and a side chain $R$ that distinguishes one amino acid from another. Proline is the exception: its side chain loops back to the nitrogen, making it an imino acid.

Twenty amino acids are encoded by the genetic code. They are grouped as **essential** (the body cannot make them, so they must be eaten — for example leucine, lysine and tryptophan) and **non-essential** (they can be synthesised). Both kinds carry an amino group and a carboxyl group, so in the solid state and in neutral solution they exist as **zwitterions**, with $-NH_3^+$ and $-COO^-$ and no net charge.

Because the two groups can each gain or lose a proton, amino acids are **amphoteric**. At the **isoelectric point** ($pI$) the net charge is zero and the molecule migrates in neither direction in an electric field. Below the $pI$ it is net positive; above it, net negative.

## 2. Peptide bonds and counting

A **peptide bond** is the amide link $-CO-NH-$ formed when the carboxyl of one amino acid condenses with the amino of another, eliminating one molecule of water. For a linear peptide of $n$ residues:

$$
\text{peptide bonds} = n-1, \qquad \text{water molecules lost}=n-1.
$$

So a tetrapeptide has three peptide bonds and loses three waters. The bond is planar because of resonance between the carbonyl and the nitrogen, and the two neighbouring $\alpha$-carbons are almost always *trans*. This rigidity is the first step towards ordered folding.

## 3. Four levels of structure

| Level | What it is | Main stabilising interactions |
| --- | --- | --- |
| Primary | the exact amino-acid sequence | covalent peptide bonds |
| Secondary | local repeating patterns | hydrogen bonds along the backbone |
| Tertiary | overall 3-D fold of one chain | hydrophobic interactions, H-bonds, ionic bonds, van der Waals, disulphide bridges |
| Quaternary | assembly of several chains | the same interactions between subunits |

The **$\alpha$-helix** is a secondary structure held by hydrogen bonds within one chain, with about $3.6$ residues per turn. The **$\beta$-pleated sheet** is held by hydrogen bonds between different chains or different parts of one chain. Fibrous proteins such as keratin and collagen are long and structural; globular proteins such as myoglobin and most enzymes are compact and soluble.

Haemoglobin illustrates quaternary structure: four subunits (two $\alpha$ chains and two $\beta$ chains) assemble into one oxygen-carrying unit. Each chain folds separately; together they regulate one another's oxygen affinity.

## 4. Denaturation

Heat, strong acid or alkali, organic solvents and heavy-metal ions can disrupt the secondary, tertiary and quaternary structures while leaving the primary sequence intact. This **denaturation** destroys biological activity because shape, not composition, is what the protein uses. It is often irreversible: a cooked egg white will not become clear again.

## 5. Enzymes and how they catalyse

An **enzyme** is a biological catalyst — in almost all cases a globular protein, though a few RNA molecules (ribozymes) also catalyse reactions. Its **active site** is a small cleft whose shape and chemical groups fit the **substrate**.

Two models describe the fit. The lock-and-key model pictures a rigid match; the more accurate **induced-fit** model has the active site change shape when the substrate binds. Either way, specificity follows: an enzyme acts on one substrate or one class of closely related substrates.

An enzyme lowers the activation energy $E_a$ by stabilising the transition state. It speeds up both forward and reverse reactions, so it **does not change the equilibrium constant or $\Delta G$**, and it is **not consumed**. It can be inhibited, and it works best at an optimum pH and temperature; away from the optimum the rate drops, and high temperature denatures the protein.

Some enzymes need a non-protein **cofactor**: a metal ion such as $Zn^{2+}$ or $Mg^{2+}$, or an organic **coenzyme** often derived from a vitamin. The inactive protein alone is the apoenzyme; protein plus cofactor is the active holoenzyme.

## 6. Deriving the rate law

For the simplest scheme

$$
E+S \;\rightleftharpoons\; ES \;\rightarrow\; E+P,
$$

the initial rate is $v=k_2[ES]$. Applying the steady-state idea to the intermediate $ES$ and eliminating $[ES]$ in favour of the total enzyme concentration gives the **Michaelis–Menten equation**:

$$
v=\frac{V_{\max}[S]}{K_m+[S]}, \qquad V_{\max}=k_2[E]_{\text{total}}.
$$

Here $K_m$ is the substrate concentration at which the enzyme works at half its maximum speed. That follows directly from the equation: put $[S]=K_m$ and

$$
v=\frac{V_{\max}K_m}{K_m+K_m}=\frac{V_{\max}}{2}.
$$

So a **small** $K_m$ means the enzyme reaches half speed at a low substrate concentration, i.e. it has a high apparent affinity for that substrate.

## 7. Worked example: using the rate law

An enzyme has $V_{\max}=120\ \mu\text{mol/min}$ and $K_m=0.50\ \text{mmol/L}$. Find the initial rate when $[S]=2.0\ \text{mmol/L}$.

$$
v=\frac{120\times 2.0}{0.50+2.0}=\frac{240}{2.5}=96\ \mu\text{mol/min}.
$$

**Sanity check:** at $[S]=K_m=0.50\ \text{mmol/L}$ the rate would be $60\ \mu\text{mol/min}$, exactly half of $V_{\max}$, as the derivation requires. Since $2.0\ \text{mmol/L}$ is four times $K_m$, the rate should be above $60$ but below $120$; $96$ is $80\%$ of $V_{\max}$, consistent.

As a second check on chain counting: a protein of two chains with 20 and 30 residues has $(20-1)+(30-1)=48$ peptide bonds, not $49$, because each chain loses one bond at its ends.

<learning-block type="mistake" title="Catalysts do not get consumed">

Writing an enzyme on the reactant side, or claiming it "pushes" an unfavourable reaction forward, is wrong. An enzyme changes the *rate*, not the equilibrium position or the free-energy change. The same error appears in saying denaturation breaks peptide bonds: denaturation unfolds the shape; hydrolysis is what breaks the primary structure.

</learning-block>

## Try it yourself

**A.** A linear peptide has 6 residues. How many peptide bonds does it contain, and how many water molecules were eliminated when it formed?

<details><summary>Show the reasoning</summary>

For a linear chain, bonds and waters both equal $n-1$. With $n=6$, there are 5 peptide bonds and 5 water molecules were lost. A cyclic hexapeptide would instead have 6 of each.

</details>

**B.** For the enzyme above, find $[S]$ at which the rate is $90\ \mu\text{mol/min}$.

<details><summary>Show the reasoning</summary>

$90=120[S]/(0.50+[S])$, so $90(0.50+[S])=120[S]$, giving $45=30[S]$ and $[S]=1.5\ \text{mmol/L}$. This lies between $K_m=0.50$ and the saturating value, consistent with a rate that is $75\%$ of $V_{\max}$.

</details>

**C.** Why does raising the temperature beyond about $40^\circ\text{C}$ usually *reduce* the rate of a human enzyme reaction, when higher temperature normally speeds reactions up?

<details><summary>Show the reasoning</summary>

Modest warming increases kinetic energy and the rate, but beyond the optimum the protein begins to denature: the active site loses its precise shape and the catalytic rate collapses. The loss of structure outweighs the kinetic gain.

</details>

## Remember

- Amino acids are amphoteric zwitterions; at the isoelectric point the net charge is zero.
- A linear peptide of $n$ residues has $n-1$ peptide bonds and loses $n-1$ waters.
- Structure runs primary $\to$ secondary $\to$ tertiary $\to$ quaternary; denaturation disrupts all but the primary level.
- Enzymes lower $E_a$, are not consumed and do not alter equilibrium; $K_m$ is the $[S]$ giving $v=V_{\max}/2$.
- Vitamins often supply the coenzymes that enzymes need — the link developed in the next lesson.

Next we meet Vitamins, several of which are precisely the coenzyme parts that enzymes borrow.
