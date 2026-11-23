## When series and parallel rules run out

Some circuits cannot be reduced to a single equivalent resistance. A bridge with a galvanometer across its middle, or two batteries feeding the same network, has branches that are neither simply in series nor simply in parallel. Kirchhoff's rules handle every such circuit by applying two conservation laws systematically. They are not extra physics; they are charge conservation and energy conservation written for a network.

## 1. The junction rule

At any junction in a steady-state circuit, the total current entering equals the total current leaving:

$$
\sum I_{\text{in}}=\sum I_{\text{out}}.
$$

Equivalently, with signs chosen consistently, the algebraic sum of the currents at a junction is zero. The rule follows from **conservation of charge**: charge cannot pile up at a junction in a steady state. If it did, the junction would charge and the currents would change with time.

The junction rule is about currents, not potential differences. It applies to every node, but in a network with $N$ nodes only $N-1$ junction equations are independent; the last one is implied by the others.

## 2. The loop rule

Around any closed loop, the algebraic sum of the potential changes is zero:

$$
\sum \Delta V=0.
$$

The rule follows from the conservative nature of the electrostatic field: after a complete trip, a charge returns to the same potential. A source's emf is the non-electrostatic work per unit charge that raises the charge's potential inside the source, so it appears as a potential rise when traversed in the direction of the emf.

Use one sign convention and apply it without exception. A workable one is:

| When traversing… | Potential change |
| --- | --- |
| a resistor in the direction of the assumed current | $-IR$ |
| a resistor opposite to the assumed current | $+IR$ |
| a source from its negative to its positive terminal | $+\varepsilon$ |
| a source from its positive to its negative terminal | $-\varepsilon$ |

Internal resistance is treated as a resistor $r$ in series with an ideal source of emf $\varepsilon$. The direction of the assumed current decides the sign of the $Ir$ term.

In a network with $B$ branches and $N$ nodes, you need $N-1$ independent junction equations and $B-N+1$ independent loop equations. Choosing loops that each contain a new branch is the simplest way to keep them independent.

## 3. A reliable solution routine

1. Draw the circuit and label every node.
2. Assign a current to each branch with an arrow. The arrows are guesses; a negative final value means the actual current is opposite.
3. Write junction equations using those arrows.
4. Choose independent loops and traverse each in a stated direction, writing $\sum\Delta V=0$.
5. Solve the equations simultaneously. Keep the signs while solving; do not flip an arrow halfway through.
6. Interpret a negative current as a reversal of the guessed direction, and check the power balance if time allows.

## 4. Worked example: a two-source circuit

A circuit has two nodes, $A$ at the top and $B$ at the bottom, joined by three branches.

- **Left branch:** a $12\ \text{V}$ cell with its positive terminal towards $A$, in series with $1.0\ \Omega$ of internal resistance.
- **Right branch:** a $6.0\ \text{V}$ cell with its positive terminal also towards $A$, in series with $1.0\ \Omega$ of internal resistance.
- **Middle branch:** a $4.0\ \Omega$ resistor.

Assume $I_1$ flows up the left branch into $A$, $I_2$ flows up the right branch into $A$, and $I_3$ flows down the middle branch away from $A$.

**Junction at $A$:**

$$
I_1+I_2=I_3.
$$

**Left loop** (up the left branch, down the middle branch):

$$
12-1.0I_1-4.0I_3=0.
$$

**Right loop** (up the right branch, down the middle branch):

$$
6.0-1.0I_2-4.0I_3=0.
$$

From the loop equations,

$$
I_1=12-4I_3,
\qquad
I_2=6.0-4I_3.
$$

Substitute into the junction equation:

$$
(12-4I_3)+(6.0-4I_3)=I_3
\quad\Longrightarrow\quad
18=9I_3
\quad\Longrightarrow\quad
I_3=2.0\ \text{A}.
$$

Then

$$
I_1=12-8.0=4.0\ \text{A},
\qquad
I_2=6.0-8.0=-2.0\ \text{A}.
$$

The negative sign means $I_2$ actually flows **down** the right branch, into the positive terminal of the $6.0\ \text{V}$ cell. That cell is being charged, not discharged.

**Check the potential difference.** Across the middle branch, $V_A-V_B=I_3R=8.0\ \text{V}$. From the left branch, $V_A-V_B=12-(4.0)(1.0)=8.0\ \text{V}$. From the right branch, $V_A-V_B=6.0-(-2.0)(1.0)=8.0\ \text{V}$. All three agree, which is a strong check on the signs.

**Check the power.** The $12\ \text{V}$ source supplies $\varepsilon I=(12)(4.0)=48\ \text{W}$. The left internal resistance dissipates $I_1^2r=16\ \text{W}$, the middle resistor dissipates $I_3^2R=16\ \text{W}$, and the right branch absorbs $6.0(2.0)+ (2.0)^2(1.0)=12+4=16\ \text{W}$ (the cell stores energy chemically and its internal resistance heats). The total is $48\ \text{W}$, so the balance closes.

<learning-block type="mistake" title="A negative current does not mean the circuit is impossible">

If the algebra gives $I=-2.0\ \text{A}$ for an arrow pointing up, the current is $2.0\ \text{A}$ downward. Keep the magnitude and reverse the arrow only in the interpretation. The other frequent error is a sign slip in a loop: traversing a resistor **with** the assumed current is a drop, not a rise, and going through a source from positive to negative is a drop. Write the chosen convention at the top of your working and never mix conventions inside one loop.

</learning-block>

## Try it yourself

**A.** Five amperes enters a junction along one wire. Two amperes leaves along a second wire. Find the current in the third wire.

<details><summary>Show the reasoning</summary>

By the junction rule, the currents leaving must total the current entering:

$$
I_3=5-2=3\ \text{A}.
$$

The direction must be away from the junction if the other two wires are the only connections.

</details>

**B.** A $10\ \text{V}$ cell of negligible internal resistance is connected to $2.0\ \Omega$ and $3.0\ \Omega$ resistors in series. Use a loop equation to find the current and the potential difference across each resistor.

<details><summary>Show the reasoning</summary>

Traverse the loop in the direction of the current:

$$
10-2.0I-3.0I=0
\quad\Longrightarrow\quad
I=\frac{10}{5.0}=2.0\ \text{A}.
$$

The potential differences are

$$
V_2=(2.0)(2.0)=4.0\ \text{V},
\qquad
V_3=(2.0)(3.0)=6.0\ \text{V}.
$$

They add to $10\ \text{V}$, the emf of the cell.

</details>

**C.** A $15\ \text{V}$ supply of negligible internal resistance is connected through a $2.0\ \Omega$ resistor to the positive terminal of a $12\ \text{V}$ battery of internal resistance $1.0\ \Omega$. Find the charging current and the battery's terminal voltage.

<details><summary>Show the reasoning</summary>

The supply and the battery oppose each other. The net emf driving the current is $15-12=3.0\ \text{V}$, and the total resistance is $2.0+1.0=3.0\ \Omega$:

$$
I=\frac{3.0}{3.0}=1.0\ \text{A}.
$$

The battery is being charged, so its terminal voltage is raised:

$$
V=12+(1.0)(1.0)=13\ \text{V}.
$$

</details>

## Remember

- The junction rule is charge conservation: current in equals current out at every node in steady state.
- The loop rule is energy conservation per unit charge: the potential changes around any closed loop sum to zero.
- Traversing a resistor with the assumed current gives $-IR$; against it gives $+IR$. A source gives $+\varepsilon$ from negative to positive.
- With $B$ branches and $N$ nodes, use $N-1$ independent junction equations and $B-N+1$ independent loop equations.
- Negative answers mean the assumed direction was reversed, not that the circuit is invalid; always verify with a potential-difference or power check.

Kirchhoff's rules make the next module possible: a bridge circuit works precisely because a galvanometer branch can be arranged to carry zero current, and that condition follows from these rules.
