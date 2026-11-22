## Real questions are chains, not single jumps

Examination questions rarely stop after one conversion. "What mass of precipitate forms when solution X meets solution Y?" is a chain: mass → moles → moles → mass or concentration again. The individual links are already familiar; what remains is to connect them fluently and to keep the arithmetic honest — which is where significant figures and sanity checks earn their keep.

## 1. The chain map

Every quantitative route runs through **moles**. Five links cover nearly all questions in this chapter:

| From | To | Link |
| --- | --- | --- |
| mass | moles | $n=m/M$ |
| moles | particles | $\times\,6.022\times10^{23}$ |
| moles | gas volume at STP | $V=22.4\,n$ (L) |
| moles | moles of another species | reaction coefficients (ratio) |
| moles ↔ concentration | solution volume | $n=M\times V$ (solution in L), plus density to move between volume and mass |

A useful discipline: before computing, sketch the chain of links you will use. If your sketch includes a gap (say, solution volume but no density), the *data* are insufficient — noticing this before calculating is a skill examiners reward.

## 2. A full chain: preparing and then diluting a standard solution

<learning-block type="example" title="Standard sodium carbonate, two steps">

**Step 1 — weigh out.** To prepare $250\ \text{mL}$ of $0.10\ \text{M}$ Na2CO3 $(M=106)$:

$$
n=M\times V=0.10\times0.250=0.025\ \text{mol},\qquad
m=nM=0.025\times106=2.65\ \text{g}.
$$

**Step 2 — dilute.** Take $20\ \text{mL}$ of this solution and dilute to $100\ \text{mL}$. Moles taken: $n=0.10\times0.020=2.0\times10^{-3}$ mol — unchanged by dilution. New molarity:

$$
M_2=\frac{2.0\times10^{-3}}{0.100}=0.020\ \text{M}.
$$

Chain used: concentration → moles → mass, then volume-proportional concentration again. Each step is one link; nothing exotic.

</learning-block>

## 3. A longer chain: reaction plus gas plus concentration

<learning-block type="example" title="Aluminium dissolving in hydrochloric acid">

$2.7\ \text{g}$ of aluminium ($M=27$) dissolves completely in excess dilute HCl:

$$
\mathrm{2\,Al + 6\,HCl \rightarrow 2\,AlCl_3 + 3\,H_2}.
$$

**Moles of metal:** $n=2.7/27=0.1\ \text{mol}$ (zinc from the stoichiometry module would have been $6.5/65=0.1$ mol too; only the coefficients differ).

**Hydrogen:** from the recipe, $2$ mol Al give $3$ mol H2, so $n(\mathrm{H_2})=0.1\times\tfrac{3}{2}=0.15$ mol. At STP:

$$
V=22.4\times0.15=3.36\ \text{L}.
$$

**Salt produced:** $n(\mathrm{AlCl_3})=0.1$ mol $=0.1\times133.5=13.35\ \text{g}$; if the solution is then made up to $500\ \text{mL}$, its molarity is

$$
M=\frac{0.1}{0.500}=0.2\ \text{mol/L}.
$$

One feed mass produced three answers, each via a single link of the map. Note the excess HCl never enters any calculation except as the licence to say the limiting reactant (Al) fully reacts.

</learning-block>

## 4. Significant figures in chemical arithmetic

Chains multiply measurement uncertainty, so answers should not claim more precision than the data carry.

**Counting significant figures:** leading zeros never count ($0.032$ → 2 s.f.); captured and trailing zeros do ($0.0500$ → 3 s.f.); write ambiguous trailing zeros in scientific notation ($140$ as $1.40\times10^{2}$ to show 3 s.f.).

**After multiplying or dividing:** round to the *fewest significant figures* among the inputs.

$$
4.2\times1.53=6.426\rightarrow6.4\ \text{(2 s.f., set by 4.2)}.
$$

**After adding or subtracting:** round to the *fewest decimal places*.

$$
12.11+18.0+1.012=31.122\rightarrow31.1\ \text{(1 decimal, set by 18.0)}.
$$

Exact counted quantities (2 atoms of H in a formula, a recipe coefficient) carry infinite precision and never limit the result.

## 5. Sanity checks that catch real errors

- **Units balance.** A mass in grams cannot be compared directly with a volume in litres; if the final unit is not what the question asked, something in the chain is mislabelled.
- **Round-trip.** Convert your answer back the other way. Computed $3.36\ \text{L}$ of H2 from $0.15$ mol? Then $0.15=\frac{3.36}{22.4}$ must hold.
- **Reference points.** $0.1$ mol of any ideal gas is $2.24\ \text{L}$, one mole of carbon is $12\ \text{g}$, one molar solution contains $0.1$ mol in $100\ \text{mL}$ — memorise a few and judge magnitudes against them.
- **Limit check.** If a limiting reagent was found, the other reactant must show a non-negative leftover, and the sum of products plus leftovers must match the initial masses.
- **Significant-figure honesty.** Reporting $6.426$ from a chain seeded by $4.2$ overstates what was measured.

<learning-block type="mistake" title="Precision inflation">

An answer written $0.200000$ from inputs good to two significant figures misdescribes the measurement. In chains, keep intermediate values unrounded (guard digits), and round **only the final answer** to the correct count — rounding at every step compounds error in the opposite direction.

</learning-block>

## Try it yourself

**A.** Excess AgNO3 solution is added to a solution containing $0.01$ mol of NaCl. What mass of AgCl ($M=143.5$) precipitates?

<details><summary>Show the reasoning</summary>

$\mathrm{Ag^+ + Cl^- \rightarrow AgCl}$: one chloride ion gives one formula unit. So $n(\mathrm{AgCl})=0.01$ mol and $m=0.01\times143.5=1.435\ \text{g}$ ≈ $1.4\ \text{g}$ (2 s.f., limited by $0.01$ having one s.f. — in practice report $1.4$).
</details>

**B.** What is the mass of $0.56$ L of oxygen gas (O2) measured at STP?

<details><summary>Show the reasoning</summary>

$n=0.56/22.4=0.025$ mol; $m=0.025\times32=0.80\ \text{g}$.
</details>

**C.** $25\ \text{mL}$ of $0.5\ \text{M}$ HCl is mixed with $25\ \text{mL}$ of $0.5\ \text{M}$ NaOH in a calorimeter. How many moles of water form, and how many moles of chloride and sodium ions remain in solution?

<details><summary>Show the reasoning</summary>

Each solution holds $0.5\times0.025=0.0125$ mol. The neutralisation $\mathrm{H^+ + OH^- \rightarrow H_2O}$ is $1:1$, so $0.0125$ mol of water forms with all ions unreacted as spectators: $0.0125$ mol Na+ and $0.0125$ mol Cl− stay dissolved. A quick magnitude check: $0.0125$ mol of water is about $0.2\ \text{g}$ — no measured mass scale would be needed to trust it.
</details>

## Remember

- Sketch the chain of links before any multi-step numerical question; a missing bridge means missing data, and showing that is a valid answer.
- Moles are the hub: mass, particles, gas volume, reactions and concentrations all connect through them.
- Significant figures: fewest s.f. for products and quotients, fewest decimal places for sums and differences; exact counts never limit.
- Keep guard digits through the chain and round once, at the end.
- Use reference anchors — $22.4$ L per mole of gas, molar masses of common species — to spot absurd magnitudes instantly.
