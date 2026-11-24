## Electricity from chemistry, and chemistry from electricity

A redox reaction that is thermodynamically spontaneous can be made to do electrical work if its oxidation and reduction half-reactions are physically separated and connected by a wire. The device that does this is a **galvanic (voltaic) cell**. Run in the opposite direction, the same hardware uses an external power supply to force a non-spontaneous reaction — an **electrolytic cell**. This module sets up the vocabulary, the cell notation and the way electrode potentials are combined.

## 1. Half-reactions, electrodes and electron flow

Every electrochemical cell contains two **electrodes** (conductors, usually metals or graphite) dipping into an **electrolyte** (a solution containing ions).

- **Oxidation** (loss of electrons) occurs at the **anode**.
- **Reduction** (gain of electrons) occurs at the **cathode**.

Electrons released at the anode travel through the external circuit to the cathode. To keep each half-cell electrically neutral, ions move internally through a **salt bridge** (or porous pot): anions drift toward the anode, cations toward the cathode.

A useful mnemonic: **An Ox, Red Cat** (Anode = Oxidation, Reduction = Cathode). The electrodes are named by the reaction, not by their electrical sign — a point that causes many errors (see the mistake block).

## 2. The Daniel cell: a concrete galvanic cell

The classic example pairs zinc and copper:

- Anode (oxidation): $\mathrm{Zn(s)\rightarrow Zn^{2+}(aq)+2e^-}$
- Cathode (reduction): $\mathrm{Cu^{2+}(aq)+2e^-\rightarrow Cu(s)}$
- Overall: $\mathrm{Zn(s)+Cu^{2+}(aq)\rightarrow Zn^{2+}(aq)+Cu(s)}$

The cell is written in **cell notation** as

$$
\mathrm{Zn(s)\,|\,Zn^{2+}(aq)\,||\,Cu^{2+}(aq)\,|\,Cu(s)}.
$$

Convention: anode on the left, cathode on the right; a single vertical bar $|$ is a phase boundary, and the double bar $||$ is the salt bridge. The cell potential (emf) for this reaction under standard conditions is $E^\circ_\text{cell}=+1.10\ \text{V}$.

## 3. Galvanic versus electrolytic cells

| Feature | Galvanic cell | Electrolytic cell |
| --- | --- | --- |
| Reaction spontaneity | spontaneous ($\Delta G<0$) | non-spontaneous ($\Delta G>0$) |
| Energy conversion | chemical → electrical | electrical → chemical |
| Anode charge | negative (source of electrons) | positive (connected to + terminal) |
| Cathode charge | positive | negative |
| External power needed? | no | yes |

The same physical cell can be either, depending on the direction of current. What fixes the labels “anode” and “cathode” is **oxidation/reduction**, not the sign of the electrode.

## 4. Electrode potentials and the standard hydrogen electrode

The absolute potential of a single electrode cannot be measured; only differences are meaningful. By convention the **standard hydrogen electrode (SHE)** — $\mathrm{H^+(aq,\ 1\ M)\,|\,H_2(g,\ 1\ bar)\,|\,Pt}$ — is assigned $E^\circ=0.00\ \text{V}$. All other **standard reduction potentials** $E^\circ$ are measured relative to it, with the half-reaction written as a reduction.

A short list (298 K, all as reductions):

| Half-reaction | $E^\circ$ (V) |
| --- | --- |
| $\mathrm{Ag^+(aq)+e^-\rightarrow Ag(s)}$ | $+0.80$ |
| $\mathrm{Cu^{2+}(aq)+2e^-\rightarrow Cu(s)}$ | $+0.34$ |
| $\mathrm{2H^+(aq)+2e^-\rightarrow H_2(g)}$ | $0.00$ |
| $\mathrm{Pb^{2+}(aq)+2e^-\rightarrow Pb(s)}$ | $-0.13$ |
| $\mathrm{Ni^{2+}(aq)+2e^-\rightarrow Ni(s)}$ | $-0.25$ |
| $\mathrm{Fe^{2+}(aq)+2e^-\rightarrow Fe(s)}$ | $-0.44$ |
| $\mathrm{Zn^{2+}(aq)+2e^-\rightarrow Zn(s)}$ | $-0.76$ |
| $\mathrm{Mg^{2+}(aq)+2e^-\rightarrow Mg(s)}$ | $-2.37$ |

A more positive $E^\circ$ means a stronger tendency to be reduced; the species on the left is a stronger oxidising agent.

## 5. Combining potentials

For a cell written with anode on the left and cathode on the right,

$$
E^\circ_\text{cell}=E^\circ_\text{cathode}-E^\circ_\text{anode},
$$

where both $E^\circ$ values are the **reduction** potentials. Equivalently, $E^\circ_\text{cell}=E^\circ_\text{reduction}+E^\circ_\text{oxidation}$, with the oxidation potential being the negative of the reduction potential. The result must be positive for a spontaneous galvanic cell.

The standard Gibbs energy change follows from

$$
\Delta G^\circ=-nF E^\circ_\text{cell},
$$

where $n$ is the number of electrons transferred in the balanced overall reaction and $F=96500\ \text{C mol}^{-1}$ is Faraday’s constant. A positive $E^\circ_\text{cell}$ gives a negative $\Delta G^\circ$, confirming spontaneity.

## 6. Worked example

Find $E^\circ_\text{cell}$ and $\Delta G^\circ$ for

$$
\mathrm{Zn(s)\,|\,Zn^{2+}(aq)\,||\,Ag^+(aq)\,|\,Ag(s)}.
$$

Cathode (reduction): $\mathrm{Ag^++e^-\rightarrow Ag}$, $E^\circ=+0.80\ \text{V}$. Anode (reduction, as tabulated): $\mathrm{Zn^{2+}+2e^-\rightarrow Zn}$, $E^\circ=-0.76\ \text{V}$.

$$
E^\circ_\text{cell}=0.80-(-0.76)=1.56\ \text{V}.
$$

Balance electrons: multiply the silver half-reaction by 2, so $n=2$:

$$
\Delta G^\circ=-(2)(96500)(1.56)=-3.01\times10^5\ \text{J mol}^{-1}=-301\ \text{kJ mol}^{-1}.
$$

Sanity check: zinc is far below silver in the table, so zinc should oxidise spontaneously and the cell potential should be large and positive — it is.

## 7. A reliable method for cell problems

1. Split the overall reaction into two half-reactions and identify which is oxidation (anode) and which is reduction (cathode).
2. Write both as reductions and read their $E^\circ$ values from the table.
3. Compute $E^\circ_\text{cell}=E^\circ_\text{cathode}-E^\circ_\text{anode}$.
4. Balance electrons to find $n$, then $\Delta G^\circ=-nFE^\circ_\text{cell}$ if asked.
5. Check the sign: a galvanic cell must have $E^\circ_\text{cell}>0$.

<learning-block type="mistake" title="Anode/cathode versus positive/negative">
It is tempting to say “the anode is always negative”. That is only true for a galvanic cell. In an electrolytic cell the anode is connected to the positive terminal of the power supply and is positive. The names anode and cathode are fixed by oxidation and reduction; the electrical sign depends on whether the cell is producing or consuming electrical energy. Also, never add two reduction potentials directly without flipping the sign of the oxidation half-reaction — that is the most common arithmetic error in cell-potential questions.
</learning-block>

## Try it yourself

**A.** Write the cell notation and find $E^\circ_\text{cell}$ for a cell in which magnesium is oxidised and copper(II) is reduced.

<details><summary>Show the reasoning</summary>

Anode: $\mathrm{Mg\rightarrow Mg^{2+}+2e^-}$; cathode: $\mathrm{Cu^{2+}+2e^-\rightarrow Cu}$. Notation: $\mathrm{Mg(s)\,|\,Mg^{2+}(aq)\,||\,Cu^{2+}(aq)\,|\,Cu(s)}$. $E^\circ_\text{cell}=0.34-(-2.37)=2.71\ \text{V}$.

</details>

**B.** A cell has $E^\circ_\text{cell}=0.46\ \text{V}$ and transfers 2 electrons. Is the reaction spontaneous under standard conditions, and what is $\Delta G^\circ$?

<details><summary>Show the reasoning</summary>

$E^\circ_\text{cell}>0$, so the reaction is spontaneous. $\Delta G^\circ=-(2)(96500)(0.46)=-8.88\times10^4\ \text{J mol}^{-1}\approx -88.8\ \text{kJ mol}^{-1}$.

</details>

**C.** Which metal in the table is the strongest reducing agent, and why?

<details><summary>Show the reasoning</summary>

Magnesium, with the most negative reduction potential ($-2.37\ \text{V}$). The lower the reduction potential, the more easily the metal is oxidised, so it is the strongest reducing agent in the list.

</details>

## Check your understanding

Why must a salt bridge (or porous pot) be present in a galvanic cell? What would happen without it?

<details><summary>Reveal</summary>

Without ion migration, positive charge would build up around the cathode (as cations are consumed/produced) and negative charge around the anode, quickly creating an opposing potential that stops the current. The salt bridge supplies inert ions that migrate to neutralise these charge build-ups, completing the circuit.

</details>

## Take away

- A galvanic cell separates a spontaneous redox reaction into two half-cells and produces electrical work.
- Anode = oxidation, cathode = reduction, always; electrical sign follows from cell type.
- $E^\circ_\text{cell}=E^\circ_\text{cathode}-E^\circ_\text{anode}$, using reduction potentials.
- $\Delta G^\circ=-nF E^\circ_\text{cell}$ links thermodynamics to electrochemistry.
- The next module shows how the cell potential changes when concentrations are not standard.