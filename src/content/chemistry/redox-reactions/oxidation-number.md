## A number for the electron ledger

In the zinc–copper reaction the electron transfer was easy to see because ions carried written charges. But in

$$
\mathrm{Fe_2O_3 + 3CO \rightarrow 2Fe + 3CO_2}
$$

there is not a single ion in sight, yet iron has been reduced and carbon oxidised. To run the electron audit on neutral molecules we agree to convert each bond, provisionally, into a purely ionic one and ask what charge each atom would then carry. That hypothetical charge is the **oxidation number** (or oxidation state). It is bookkeeping, not reality — real bonds between unlike elements are rarely 100 per cent ionic — but the convention is exact enough to detect every electron transfer, and it is the workhorse of the JEE redox questions.

## 1. The rules for assigning oxidation numbers

Learn these as a ladder: apply the earlier rules first, and the last rule (the sum) fixes whatever is left.

1. **Free elements are 0**: $\mathrm{O_2}$, $\mathrm{S_8}$, $\mathrm{P_4}$, $\mathrm{Fe}$, $\mathrm{Na}$ — all 0.
2. **A monatomic ion equals its charge**: $\mathrm{Na^+}$ is $+1$, $\mathrm{S^{2-}}$ is $-2$.
3. **Fluorine is $-1$ in every compound.** It is so electronegative that no atom takes electrons from it.
4. **Hydrogen is $+1$**, except in metal hydrides such as $\mathrm{NaH}$ and $\mathrm{CaH_2}$, where it is $-1$.
5. **Oxygen is $-2$**, with exceptions you memorise once: in peroxides ($\mathrm{H_2O_2}$, $\mathrm{Na_2O_2}$, $\mathrm{BaO_2}$) each O is $-1$ because the two oxygens share an O–O bond; in $\mathrm{OF_2}$ oxygen is $+2$ because fluorine outranks it; in superoxides such as $\mathrm{KO_2}$ it averages $-\tfrac12$.
6. **The sum over a formula equals the charge**: 0 for a neutral molecule, the ion charge for a polyatomic ion.

Bonds between two atoms of the *same* element contribute nothing, which is why the two oxygens of a peroxide can share their bond without penalty.

## 2. Working examples

**Potassium permanganate** — average the known ones, leave the unknown as $x$:

$$
(+1) + x + 4(-2) = 0 \quad\Rightarrow\quad x = +7
$$

so Mn in $\mathrm{KMnO_4}$ is $+7$.

**Dichromate ion** — apply the sum to the $2-$ charge:

$$
2x + 7(-2) = -2 \quad\Rightarrow\quad 2x = +12 \quad\Rightarrow\quad x = +6
$$

so Cr in $\mathrm{Cr_2O_7^{2-}}$ is $+6$, and each chromium atom can accept three electrons on its way to $\mathrm{Cr^{3+}}$.

**Sodium bicarbonate** — work down the ladder: Na $+1$, H $+1$, O $-2$ each, carbon last:

$$
(+1) + (+1) + x + 3(-2) = 0 \quad\Rightarrow\quad x = +4
$$

**Hydrogen as the negative partner** — in $\mathrm{NaBH_4}$: Na is $+1$, each hydrogen bonded to the less electronegative boron is $-1$, so boron is

$$
(+1) + x + 4(-1) = 0 \quad\Rightarrow\quad x = +3
$$

<learning-block type="check" title="Quick self-test">

Assign oxidation numbers without looking back: N in $\mathrm{NH_4^+}$, S in $\mathrm{S_4O_6^{2-}}$, O in $\mathrm{KO_2}$, P in $\mathrm{H_3PO_4}$.

Answers: N is $-3$ (H is $+1$, sum $=+1$); the four sulphurs average $+2.5$ (total charge $+10$ over four atoms); oxygen in superoxide averages $-\tfrac12$; phosphorus is $+5$.

</learning-block>

## 3. Fractional and average oxidation states

Rule 6 delivers an *average* per atom of that element. Averages need not be whole numbers:

- In magnetite $\mathrm{Fe_3O_4}$: the total iron charge over three atoms is $+8$, so the average is $+\tfrac83$. The compound is really $\mathrm{FeO \cdot Fe_2O_3}$ — one $\mathrm{Fe^{2+}}$ and two $\mathrm{Fe^{3+}}$ — and the fractional number is the mean of the two genuine states $+2$ and $+3$.
- In sodium thiosulphate $\mathrm{Na_2S_2O_3}$: two sodiums and three oxygens fix $+6$ on the pair of sulphurs, so the average is $+2$. The actual atoms are inequivalent: the central sulphur (bonded only to sulphur and oxygen) is $+5$ and the terminal one is $-1$.
- In the tetrathionate ion $\mathrm{S_4O_6^{2-}}$ the average is $+2.5$, though in reality two inner sulphurs are 0 and two outer ones are $+5$.

The average cannot be negative when the element sits between more electronegative atoms overall, and it must lie between that element's lowest and highest plausible states; use that to catch arithmetic slips.

## 4. Oxidation numbers as a probe for electron transfer

A change of oxidation number is the mark of a redox reaction: increase means oxidation (electron loss), decrease means reduction (electron gain). In $\mathrm{Fe_2O_3 + 3CO \rightarrow 2Fe + 3CO_2}$:

- Fe: $+3 \rightarrow 0$, a gain of 3 electrons per atom — reduced.
- C in CO: $+2 \rightarrow +4$ — lost 2 electrons per atom — oxidised.
- O: $-2 \rightarrow -2$ throughout — untouched.

So iron(III) oxide is the oxidising agent and carbon monoxide the reducing agent, exactly the judgement module 1 trained on ions, now extended to molecules.

<learning-block type="mistake" title="Where oxidation-number work goes wrong">

- **Applying oxygen as $-2$ blindly.** In $\mathrm{H_2O_2}$ and $\mathrm{KO_2}$ the special values $-1$ and $-\tfrac12$ change every downstream answer; check for O–O bonds first.
- **Forgetting that the sum equals the ion charge, not zero.** For $\mathrm{Cr_2O_7^{2-}}$ the right-hand side is $-2$, not $0$; one sign slip gives Cr $=+5$, an impossible-looking value worth catching.
- **Treating the oxidation number as actual charge.** In $\mathrm{CO_2}$ carbon is not really a $+4$ ion sitting inside the molecule; the number is a formalism for electron counting only.
- **Averaging over the wrong count.** A fractional result like $+\tfrac83$ refers to one of three atoms; reductions must still be per atom, so always divide the total electron change by the number of atoms.

</learning-block>

## Try it yourself

**A.** Assign oxidation numbers to every atom in $\mathrm{K}_4\mathrm{P}_2\mathrm{O}_7$ (potassium pyrophosphate).

<details><summary>Show the reasoning</summary>

Potassium is always $+1$: four of them give $+4$. Oxygen is $-2$ seven times, giving $-14$. The sum must be 0, so the two phosphorus atoms together carry $+10$, an average of $+5$ each. The formula is symmetric, so $\mathrm{K}$ $+1$, $\mathrm{P}$ $+5$, $\mathrm{O}$ $-2$ is the consistent assignment.

</details>

**B.** A compound has the formula $\mathrm{KI O_3}$ written informally; iodine sits in the oxyanion $\mathrm{IO_3^-}$. What is the oxidation number of iodine?

<details><summary>Show the reasoning</summary>

Oxygen is $-2$ three times, $-6$ total. The sum must equal the ion charge $-1$: $x + (-6) = -1$ gives $x = +5$. Iodine is $+5$ in the iodate ion. Note the same value holds in $\mathrm{KIO_3}$ as a whole: K $+1$, three O $-6$, so I must be $+5$ again.

</details>

**C.** In the reaction $\mathrm{3CuO + 2NH_3 \rightarrow N_2 + 3Cu + 3H_2O}$, use oxidation numbers to identify what is oxidised, what is reduced, and then name the two agents.

<details><summary>Show the reasoning</summary>

In $\mathrm{NH_3}$ nitrogen is $-3$; in $\mathrm{N_2}$ it is 0. Nitrogen rises by 3, losing electrons: ammonia is oxidised, so it is the reducing agent. Copper falls from $+2$ in CuO to 0 in Cu: copper is reduced, so copper(II) oxide is the oxidising agent. Hydrogen stays $+1$ and oxygen stays $-2$ throughout.

</details>

## Remember

- The oxidation number is a formal charge per atom after converting every bond to ionic form; it exists for electron bookkeeping only.
- Element 0 and monatomic ion = charge are the anchor rules; F $-1$, H $+1$ (metal hydrides $-1$), O $-2$ (peroxides $-1$) fill the common cases.
- The sum over a formula equals the molecular charge — zero only for neutral molecules.
- A fractional value means the atoms are inequivalent or it is an average over inequivalent atoms, as in $\mathrm{Fe_3O_4}$ ($+\tfrac83$) and $\mathrm{S_4O_6^{2-}}$ ($+2.5$).
- Oxidation number increase = oxidation; decrease = reduction; no change = not a redox partner.

Numbers in hand, the next module sorts whole reactions into families — combination, decomposition, displacement, disproportionation — by looking at which elements shift and in which direction.
