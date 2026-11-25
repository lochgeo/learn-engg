## A molecule that can copy itself

Every protein in a cell is specified by information stored in a long, unchanging molecule. The problem is not just storage but copying: the information must survive being read and be passed on with very few mistakes. DNA solves this with a simple chemical trick — two strands held together by specific hydrogen bonds, so that either strand can serve as a template for rebuilding its partner.

## 1. Nucleosides and nucleotides

A **nucleoside** is a nitrogenous base joined to a pentose sugar. Add a phosphate group and you have a **nucleotide**, the monomer of nucleic acids.

| Part | DNA | RNA |
| --- | --- | --- |
| Sugar | 2-deoxyribose | ribose |
| Purine bases | adenine (A), guanine (G) | adenine (A), guanine (G) |
| Pyrimidine bases | cytosine (C), thymine (T) | cytosine (C), uracil (U) |

Purines (A, G) have a fused two-ring system; pyrimidines (C, T, U) have a single six-membered ring. The base attaches to the sugar's $C1'$ through an **N-glycosidic bond** — at $N9$ of a purine, at $N1$ of a pyrimidine. Phosphate links the $3'$ carbon of one sugar to the $5'$ carbon of the next through a **phosphodiester bond**, giving the chain a direction written $5'\to3'$. Names follow the base: adenosine plus phosphate gives AMP; add two more phosphates and you reach ATP, the cell's energy currency.

The sole difference between the sugars is an $-OH$ at the $2'$ position: present in ribose, absent (hence *deoxy*) in DNA. That single oxygen makes RNA far more prone to hydrolysis, which is one reason DNA is the long-term archive.

## 2. Double helix and base pairing

DNA consists of two polynucleotide chains running **antiparallel** — one $5'\to3'$, the other $3'\to5'$ — twisted into a double helix. The sugar–phosphate backbone sits outside; the flat bases stack inside. Pairing is **complementary** and specific:

- adenine pairs with thymine through **two** hydrogen bonds;
- guanine pairs with cytosine through **three** hydrogen bonds.

A purine always pairs with a pyrimidine, so the helix has a constant width of about $2\ \text{nm}$. In the common B-DNA form there are roughly $10.5$ base pairs per turn, with successive pairs about $0.34\ \text{nm}$ apart.

Because pairing is specific, knowing one strand automatically determines the other. That is the physical basis of replication and of transcription.

## 3. Chargaff's rule

Erwin Chargaff measured base composition across species and found:

$$
[A]=[T], \qquad [G]=[C], \qquad \text{purines}=\text{pyrimidines}.
$$

The first two equalities follow directly from the pairing rules: every A faces a T and every G faces a C, in each double-stranded molecule. The composition itself varies between species, but the equalities hold. Note the rule applies to **double-stranded** DNA; a single strand has no such constraint.

## 4. RNA and the genetic code

RNA is usually single-stranded and uses uracil in place of thymine. Three functional kinds are worth naming:

- **mRNA** carries a copied coding sequence from DNA to the ribosome;
- **tRNA** carries an amino acid and reads the code with its anticodon;
- **rRNA** forms part of the ribosome and catalyses peptide-bond formation — a ribozyme.

The code is read in **triplets** called codons. With four bases, the number of distinct triplets is

$$
4^3=64.
$$

Sixty-one codons specify the twenty amino acids and three are stop signals (UAA, UAG, UGA); AUG both codes for methionine and serves as the usual start signal. The code is therefore **degenerate** — most amino acids have more than one codon — but never ambiguous: one codon never specifies two different amino acids.

## 5. Worked example: base composition

A double-stranded DNA sample contains $20\%$ adenine. Find the percentages of the other bases, and the number of hydrogen bonds if the sample has $1000$ bases in total.

Since $[A]=[T]$, thymine is also $20\%$. The remaining $60\%$ is shared equally between G and C because $[G]=[C]$, so each is $30\%$.

For $1000$ bases:

$$
n_A=n_T=200, \qquad n_G=n_C=300.
$$

Every A–T pair contributes two hydrogen bonds and every G–C pair contributes three. The number of pairs of each type equals the number of bases of either member, so

$$
H=2(200)+3(300)=400+900=1300\ \text{hydrogen bonds}.
$$

**Sanity check:** purines $A+G=200+300=500$ and pyrimidines $T+C=200+300=500$; they match, as Chargaff requires. The total pairs are $200+300=500$, which is half of $1000$ bases. The hydrogen-bond count lies between $2\times500=1000$ and $3\times500=1500$, as it must.

## 6. A second numerical pattern

A single strand of length $n$ can have $4^n$ possible sequences: a meaningful contrast with the tiny number of distinct bases. For a 6-base stretch that is $4^6=4096$ sequences. The enormous sequence space is how a small chemical alphabet encodes enormous variety.

<learning-block type="mistake" title="Nucleoside versus nucleotide, and U versus T">

A nucleoside is base + sugar; a nucleotide is base + sugar + phosphate. Forgetting the phosphate loses the polymerisation handle. The other frequent slip is mixing up the bases: thymine belongs to DNA and uracil to RNA. If a question shows U in a "DNA" strand, it is either RNA or an error. Also remember the hydrogen-bond counts — A–T has two, G–C has three — because they drive the worked numericals.

</learning-block>

## Try it yourself

**A.** A double-stranded DNA has $28\%$ guanine. Find the percentages of A, T and C.

<details><summary>Show the reasoning</summary>

$[C]=[G]=28\%$, so G+C = $56\%$. The remaining $44\%$ splits equally: $[A]=[T]=22\%$. Check: purines $A+G=22+28=50\%$ and pyrimidines $T+C=22+28=50\%$, as required.

</details>

**B.** One DNA strand reads $5'$-ATGCTT-$3'$. Write the complementary strand in the $5'\to3'$ direction.

<details><summary>Show the reasoning</summary>

The partner read antiparallel is $3'$-TACGAA-$5'$. Reversed into the conventional $5'\to3'$ direction it is $5'$-AAGCAT-$3'$. Simply writing TACGAA and calling it $5'\to3'$ would be wrong.

</details>

**C.** Why is the genetic code described as degenerate but not ambiguous?

<details><summary>Show the reasoning</summary>

Degenerate means several codons can specify the same amino acid — there are 64 codons for only 20 amino acids plus stop signals. Not ambiguous means any single codon specifies at most one amino acid, so a ribosome reading a codon never has to choose between different meanings.

</details>

## Remember

- Nucleotide = base + sugar + phosphate; nucleoside lacks the phosphate.
- Purines A and G pair with pyrimidines T (DNA) or U (RNA) — A–T/U has two H-bonds, G–C has three.
- DNA is antiparallel and double-stranded; Chargaff's $[A]=[T]$, $[G]=[C]$ follows from pairing.
- RNA is usually single-stranded, uses uracil and comes as mRNA, tRNA and rRNA.
- 64 codons, 61 for amino acids, 3 stop; the code is degenerate but unambiguous.

Next, Hormones are another class of information carrier — chemical signals rather than a stored code.
