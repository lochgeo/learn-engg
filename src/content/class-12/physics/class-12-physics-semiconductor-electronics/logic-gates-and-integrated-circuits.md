## Switches that compute

If a transistor can be fully on or fully off, then a collection of transistors can represent the two states 0 and 1 and perform logical operations on them. That is the step from analogue electronics to digital electronics, and from a single device to a computer.

## 1. Binary and logic levels

Digital circuits use two voltage levels, labelled 0 (low) and 1 (high). A **logic gate** is a circuit with one or more binary inputs and a single binary output, whose output is determined by a Boolean function of the inputs.

The standard gates, with their Boolean expressions and truth tables:

- **NOT (inverter):** $Y=\overline{A}$. Output is the opposite of the input.
- **AND:** $Y=A\cdot B$. Output 1 only if both inputs are 1.
- **OR:** $Y=A+B$. Output 1 if at least one input is 1.
- **NAND:** $Y=\overline{A\cdot B}$. Output 0 only if both inputs are 1.
- **NOR:** $Y=\overline{A+B}$. Output 1 only if both inputs are 0.
- **XOR (exclusive OR):** $Y=A\oplus B$. Output 1 if the inputs differ.
- **XNOR:** $Y=\overline{A\oplus B}$. Output 1 if the inputs are equal.

NAND and NOR are **universal gates**: any Boolean function, and hence any logic circuit, can be built using only NAND gates or only NOR gates.

## 2. Building logic with transistors

A transistor in saturation/cut-off acts as a switch. By arranging switches in series or parallel between a power rail and ground, the basic gates are realised:

- Switches in **series** conduct only when all are closed → AND.
- Switches in **parallel** conduct if any is closed → OR.
- A switch whose output is taken inverted → NOT.

A NAND gate is an AND followed by an inverter; a NOR is an OR followed by an inverter. This is why NAND/NOR are natural and cheap in transistor logic.

## 3. De Morgan's laws and simplification

Two identities make circuit design practical:

$$
\overline{A\cdot B}=\overline{A}+\overline{B},\qquad
\overline{A+B}=\overline{A}\cdot\overline{B}.
$$

Together with Boolean algebra, they allow a given function to be rewritten in a form that uses fewer gates or only one gate type. For example, $A\cdot B + \overline{A}\cdot C$ is already a sum of products; its NAND-only form follows by applying De Morgan.

## 4. Integrated circuits

An **integrated circuit (IC)** places many transistors, diodes and resistors on a single silicon chip. By complexity:

- SSI: tens of components (basic gates).
- MSI: hundreds (adders, multiplexers, decoders).
- LSI: thousands.
- VLSI: millions to billions (microprocessors, memory).

By signal type: **digital ICs** process 0/1 levels (logic families such as TTL and CMOS); **analogue ICs** process continuous voltages (op-amps, regulators). CMOS logic is dominant today because of its very low static power consumption.

## 5. Worked example: evaluate and simplify

Given $F=(A+B)\cdot\overline{C}+A\cdot C$, evaluate for $A=1,\ B=0,\ C=1$:

$$
\overline{C}=0,\quad (1+0)\cdot0=0,\quad 1\cdot1=1,\quad F=0+1=1.
$$

Simplify $F=A\cdot B + A\cdot\overline{B}$:

$$
F=A(B+\overline{B})=A\cdot1=A.
$$

So the whole circuit reduces to a single wire carrying $A$. **Sanity check:** if $A=0$ both terms vanish; if $A=1$ exactly one of $B,\overline{B}$ is 1, so the sum is 1. The simplification is correct.

## 6. A common mistake

**Confusing NAND with "AND then NOT of one input"** or applying De Morgan without inverting every term. NAND inverts the *whole* product: $\overline{A\cdot B}$, not $\overline{A}\cdot B$. A second error is ignoring propagation delay and fan-out limits: a gate can drive only a finite number of inputs before its output degrades.

## Try it yourself

**A.** Write the truth table for a two-input XOR gate and say when its output is 1.

<details><summary>Show the reasoning</summary>

| A | B | A⊕B |
|---|---|-----|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

Output is 1 exactly when the inputs differ.
</details>

**B.** Show that a NAND gate can act as an inverter.

<details><summary>Show the reasoning</summary>

Tie both inputs together: $Y=\overline{A\cdot A}=\overline{A}$. The output is the NOT of $A$.
</details>

**C.** Simplify $F=\overline{A+B}+\overline{A}\cdot B$.

<details><summary>Show the reasoning</summary>

By De Morgan, $\overline{A+B}=\overline{A}\cdot\overline{B}$. So $F=\overline{A}\cdot\overline{B}+\overline{A}\cdot B=\overline{A}(\overline{B}+B)=\overline{A}$. The circuit is a single inverter.
</details>

## Remember

- Digital circuits use 0 and 1; gates implement Boolean functions.
- AND/OR/NOT are basic; NAND and NOR are universal.
- Series switches give AND, parallel give OR; inverters flip the result.
- De Morgan's laws convert between sum-of-products and product-of-sums forms.
- ICs integrate many components; CMOS dominates for low power.

This completes the concept modules. The practice module next ties together band theory, conduction, junctions, transistors and logic with a study plan and mixed problems.