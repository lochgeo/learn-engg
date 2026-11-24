## When the simple formula gives the wrong molar mass

The colligative formulae of the previous module count **particles**. They assume that one formula unit of solute yields one particle in solution. That assumption fails for electrolytes (which dissociate into several ions) and for solutes that associate (for example, acetic acid in benzene, which forms dimers). The measured molar mass then comes out too small or too large — an **abnormal molar mass**. The correction is the **van’t Hoff factor** $i$.

## 1. Abnormal molar mass

- **Dissociation** (e.g. NaCl → Na⁺ + Cl⁻) produces more particles than formula units, so the colligative effect is larger than predicted and the apparent molar mass is **smaller** than the true one.
- **Association** (e.g. acetic acid dimerising in benzene) produces fewer particles, so the effect is smaller and the apparent molar mass is **larger** than the true one.

The abnormal molar mass is the value calculated by blindly applying the non-electrolyte formula. It is a symptom, not a property of the substance.

## 2. The van’t Hoff factor

Define the **van’t Hoff factor** $i$ as the ratio of the observed colligative effect to the effect predicted for a non-electrolyte at the same molality:

$$
i=\frac{\text{observed }\Delta T_f}{\text{calculated }\Delta T_f}
=\frac{\text{observed }\Delta T_b}{\text{calculated }\Delta T_b}
=\frac{\text{observed }\pi}{\text{calculated }\pi}.
$$

Equivalently, $i$ is the ratio of the actual number of particles in solution to the number of formula units dissolved. For a non-electrolyte, $i=1$; for a fully dissociated binary electrolyte such as NaCl, $i=2$; for CaCl₂ (three ions), $i=3$.

The corrected colligative formulae are

$$
\Delta T_b=i\,K_b\,m,\qquad
\Delta T_f=i\,K_f\,m,\qquad
\pi=i\,MRT,\qquad
\frac{\Delta p}{p_1^\circ}=i\,x_2\ \text{(dilute)}.
$$

When computing an unknown molar mass from a measured effect, the factor must be included:

$$
M_2=\frac{i\,K_f\,w_2\,1000}{\Delta T_f\,w_1}.
$$

## 3. Degree of dissociation

For a weak electrolyte that dissociates partially, $i$ lies between 1 and the maximum number of ions. If a molecule dissociates into $n$ ions and the **degree of dissociation** is $\alpha$,

$$
i=1+\alpha(n-1).
$$

For NaCl ($n=2$): $i=1+\alpha$. For CaCl₂ ($n=3$): $i=1+2\alpha$. For a weak acid such as acetic acid in water ($n=2$), a measured $i$ gives $\alpha=i-1$, and hence the dissociation constant $K_a$.

**Worked example.** A $0.10\ \text{mol kg}^{-1}$ solution of a weak acid HX shows $\Delta T_f=0.204\ \text{K}$. Find $i$ and $\alpha$. $K_f(\text{water})=1.86$.

Calculated (non-electrolyte) depression $=1.86\times0.10=0.186\ \text{K}$.

$$
i=\frac{0.204}{0.186}=1.10,\qquad \alpha=i-1=0.10.
$$

So 10 % of the acid is dissociated at this concentration.

## 4. Degree of association

For a solute that associates, for example forming dimers, let $n$ be the number of molecules per aggregate and $\alpha$ the **degree of association**. Then

$$
i=1-\alpha+\frac{\alpha}{n}=1-\alpha\left(1-\frac{1}{n}\right).
$$

For dimerisation ($n=2$): $i=1-\alpha/2$. A measured $i<1$ signals association. Acetic acid in benzene is the classic case: its apparent molar mass is roughly double the true one because $i\approx0.5$.

## 5. Worked examples with electrolytes

**Example 1: NaCl.** $0.90\ \text{g}$ of NaCl (molar mass $58.5$) is dissolved in $100\ \text{g}$ of water. Assuming complete dissociation ($i=2$), find the freezing-point depression.

$$
m=\frac{0.90/58.5}{0.100}=0.1538\ \text{mol kg}^{-1}.
$$

$$
\Delta T_f=i\,K_f\,m=2\times1.86\times0.1538=0.572\ \text{K}.
$$

So the solution freezes at $-0.57\ ^\circ\text{C}$.

**Example 2: apparent molar mass of KCl.** Revisit the earlier measurement: $0.745\ \text{g}$ KCl in $100\ \text{g}$ water gave $\Delta T_f=0.372\ \text{K}$. With $i=2$,

$$
M_2=\frac{i\,K_f\,w_2\,1000}{\Delta T_f\,w_1}
=\frac{2\times1.86\times0.745\times1000}{0.372\times100}
=74.5\ \text{g mol}^{-1},
$$

which matches the true molar mass of KCl. The factor of 2 repairs the earlier “abnormal” value of $37.2$.

**Example 3: determining $i$ from data.** A $0.050\ \text{mol kg}^{-1}$ solution of CaCl₂ gives $\Delta T_f=0.279\ \text{K}$. Find $i$.

$$
i=\frac{0.279}{1.86\times0.050}=\frac{0.279}{0.093}=3.00.
$$

Complete dissociation into three ions is confirmed.

## 6. Method for abnormal-molar-mass problems

1. Compute the non-electrolyte (calculated) colligative effect from the given molality.
2. Take the ratio of observed to calculated to get $i$.
3. Decide whether $i>1$ (dissociation) or $i<1$ (association).
4. Use $i=1+\alpha(n-1)$ or $i=1-\alpha(1-1/n)$ to find the degree of dissociation/association.
5. For molar-mass work, multiply the non-electrolyte formula by $i$.

<learning-block type="mistake" title="Forgetting that $i$ is not always an integer">
For strong electrolytes at high dilution $i$ approaches the number of ions, but at finite concentrations ion pairing reduces it (for example, NaCl at $0.1\ \text{m}$ has $i\approx1.87$, not 2). For weak electrolytes $i$ is fractional. Treating $i$ as exactly 2 or 3 for every concentration gives small but real errors. When a problem gives measured data, compute $i$ from the data rather than assuming the ideal value.
</learning-block>

## Try it yourself

**A.** A $0.10\ \text{mol kg}^{-1}$ MgSO₄ solution freezes at $-0.28\ ^\circ\text{C}$. Find $i$ and comment.

<details><summary>Show the reasoning</summary>

$\Delta T_f=0.28\ \text{K}$. Calculated $=1.86\times0.10=0.186\ \text{K}$. $i=0.28/0.186=1.51$. Less than 2, indicating incomplete dissociation or ion pairing of MgSO₄.

</details>

**B.** Benzoic acid dimerises in benzene. A solution prepared as $1.0\ \text{mol kg}^{-1}$ by formula mass gives $\Delta T_f=2.56\ \text{K}$. $K_f(\text{benzene})=5.12$. Find $i$ and the degree of dimerisation.

<details><summary>Show the reasoning</summary>

Calculated $=5.12\times1.0=5.12\ \text{K}$. $i=2.56/5.12=0.50$. For dimerisation $i=1-\alpha/2$, so $0.50=1-\alpha/2$ and $\alpha=1.0$. Essentially complete dimerisation at this concentration.

</details>

**C.** For a $0.050\ \text{mol kg}^{-1}$ solution of a weak base BOH with $n=2$, $\Delta T_f=0.112\ \text{K}$. Find $\alpha$ and $K_b$ (base dissociation constant) approximately, assuming water as solvent.

<details><summary>Show the reasoning</summary>

$i=0.112/(1.86\times0.050)=1.20$. $\alpha=i-1=0.20$. For BOH ⇌ B⁺ + OH⁻, $K_b=\frac{c\alpha^2}{1-\alpha}\approx\frac{0.050\times0.04}{0.80}=0.0025$.

</details>

## Check your understanding

Why does the same compound (NaCl) give $i\approx2$ in very dilute aqueous solution but a smaller value at high concentration?

<details><summary>Reveal</summary>

At high concentration, ions are close enough to attract each other and form ion pairs that behave as single particles, reducing the effective particle count. Activity effects and non-ideal interactions also matter. The van’t Hoff factor is a concentration-dependent correction, not a fixed property of the compound.

</details>

## Take away

- Dissociation lowers the apparent molar mass; association raises it.
- The van’t Hoff factor $i$ corrects all colligative formulae: multiply the non-electrolyte effect by $i$.
- $i=1+\alpha(n-1)$ for dissociation; $i=1-\alpha(1-1/n)$ for association.
- Compute $i$ from measured data when possible; it varies with concentration.

The chapter review now ties all five modules together.<|end|><|start|>write to=assistant<|channel|>analysis<|message|>Created file successfully: src/content/class-12/chemistry/class-12-chemistry-solutions/abnormal-molar-mass-and-vant-hoff-factor.md