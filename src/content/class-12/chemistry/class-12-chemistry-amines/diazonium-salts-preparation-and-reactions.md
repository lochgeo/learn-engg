## An unstable ion that opens many doors

Benzenediazonium chloride has the formula $\mathrm{C_6H_5N_2^+Cl^-}$. The cation contains a linear $\mathrm{C{-}N{\equiv}N}$ unit, with the positive charge shared between the two nitrogen atoms. It is unstable above about $5^\circ\text{C}$ and explosive when dry, so it is never isolated for routine synthesis. It is prepared fresh, kept cold and used immediately.

That instability is exactly what makes it useful. The diazonium group is an excellent leaving group: dinitrogen, $\mathrm{N_2}$, is one of the most stable molecules known. Replacing $\mathrm{N_2}$ by almost any nucleophile gives a product that would be difficult to make directly from aniline. The diazonium salt is therefore a **synthetic hub**: one intermediate, many products.

## 1. Preparation by diazotisation

Aniline is treated with sodium nitrite and excess hydrochloric acid at $273$–$278\ \text{K}$:

$$
\mathrm{C_6H_5NH_2+NaNO_2+2HCl \xrightarrow{273-278\ \text{K}} C_6H_5N_2^+Cl^-+NaCl+2H_2O}.
$$

The acid generates nitrous acid, which produces the nitrosonium ion:

$$
\mathrm{HNO_2+H^+ \rightarrow NO^++H_2O}.
$$

The amine attacks $\mathrm{NO^+}$ to give an N-nitrosamine, which rearranges with loss of water to the diazonium ion. The mechanism is not needed for routine answers, but it explains two practical points:

- **The solution must stay acidic.** Acid keeps nitrous acid available and prevents the diazonium ion from coupling with unreacted aniline.
- **The temperature must stay low.** Above about $5^\circ\text{C}$ the diazonium ion decomposes to phenol and nitrogen.

The nitrite is usually used in slight excess, because any unreacted aniline would compete in the later coupling step.

## 2. Stability and decomposition

Warming a diazonium salt solution hydrolyses it:

$$
\mathrm{C_6H_5N_2^+Cl^-+H_2O \xrightarrow{\text{warm}} C_6H_5OH+N_2+HCl}.
$$

This is a useful reaction, not just a nuisance: it converts aniline into phenol under mild conditions. The key is to keep the solution cold until you are ready for this step.

Dry diazonium salts are dangerous. They can decompose explosively, so they are handled only as dilute cold solutions. The solid is never isolated in a school or undergraduate laboratory.

## 3. Replacing the diazonium group

The general pattern is

$$
\mathrm{ArN_2^+X^-+Nu^- \rightarrow Ar{-}Nu+N_2+X^-}.
$$

The table collects the standard replacements.

| Reagent and conditions | Product | Name of reaction |
| --- | --- | --- |
| warm water | phenol | hydrolysis |
| $\mathrm{H_3PO_2}$ | benzene | deamination |
| $\mathrm{KI}$ | iodobenzene | — |
| $\mathrm{CuCl/HCl}$ | chlorobenzene | Sandmeyer |
| $\mathrm{CuBr/HBr}$ | bromobenzene | Sandmeyer |
| $\mathrm{CuCN/KCN}$ | benzonitrile | Sandmeyer |
| $\mathrm{HBF_4}$, then heat | fluorobenzene | Balz–Schiemann |
| $\mathrm{SnCl_2/HCl}$ | phenylhydrazine | reduction |

Three details are worth fixing in memory:

- **Fluoride is the exception.** Copper(I) fluoride is not a convenient Sandmeyer reagent, so fluorobenzene is made through the tetrafluoroborate salt, which decomposes on heating to give the aryl fluoride and boron trifluoride.
- **Hypophosphorous acid removes the group completely.** It replaces $\mathrm{N_2^+}$ by hydrogen, so it is the way to delete an amino group from an aromatic ring.
- **Reduction is different from substitution.** Tin(II) chloride does not replace the diazonium group; it reduces it to a hydrazine.

## 4. Coupling reactions

A diazonium ion is a weak electrophile. It attacks only rings that are strongly activated, such as phenols, phenol ethers and aromatic amines. The attack occurs at the para position, or at the ortho position if para is blocked.

With phenol in alkaline solution, the phenoxide ion is the reactive species:

$$
\mathrm{C_6H_5N_2^+Cl^-+C_6H_5OH \xrightarrow{NaOH} p{-}HOC_6H_4N{=}NC_6H_5+HCl}.
$$

The product, $p$-hydroxyazobenzene, is an **azo dye**. The $-\mathrm{N{=}N{-}}$ link connects two aromatic rings and extends conjugation, which is why azo compounds are intensely coloured.

With aniline in weakly acidic solution, coupling gives $p$-aminoazobenzene:

$$
\mathrm{C_6H_5N_2^+Cl^-+C_6H_5NH_2 \rightarrow p{-}H_2NC_6H_4N{=}NC_6H_5+HCl}.
$$

The medium must be only weakly acidic: strong acid protonates aniline and removes the activating lone pair, while alkaline conditions convert the diazonium ion into a diazotate that does not couple.

A ring bearing a deactivating group, such as nitrobenzene, does not couple at all. Activation is a requirement, not a convenience.

## 5. Worked example: Sandmeyer yield

Aniline has molar mass $93.1\ \text{g mol}^{-1}$; bromobenzene has molar mass $157.0\ \text{g mol}^{-1}$. A $4.65\ \text{g}$ sample of aniline is diazotised and treated with copper(I) bromide and hydrobromic acid. The isolated mass of bromobenzene is $6.28\ \text{g}$. Find the percentage yield.

**Moles of aniline:**

$$
n=\frac{4.65}{93.1}=4.99\times10^{-2}\ \text{mol}.
$$

**Theoretical mass of bromobenzene.** Diazotisation and Sandmeyer substitution are both one-to-one in the aromatic ring:

$$
m_{\text{theoretical}}=(4.99\times10^{-2})(157.0)=7.84\ \text{g}.
$$

**Percentage yield:**

$$
\text{yield}=\frac{6.28}{7.84}\times100\%=80.1\%.
$$

**Sanity check.** The mass increases because $\mathrm{Br}$ ($79.9$) replaces $\mathrm{NH_2}$ ($16.0$), a gain of $63.9\ \text{g mol}^{-1}$: $93.1+63.9=157.0$. The yield is below $100\%$, and the product mass is larger than the starting mass, as the substituent change requires.

## 6. Why the diazonium route is so useful

Direct substitution of an amino group is not possible: $\mathrm{NH_2}$ is a poor leaving group and would require harsh conditions. The diazonium ion solves that problem by converting the amino group into an excellent leaving group, $\mathrm{N_2}$. The sequence

$$
\text{nitroarene} \rightarrow \text{aniline} \rightarrow \text{diazonium} \rightarrow \text{product}
$$

lets you place groups on an aromatic ring that cannot be introduced by ordinary electrophilic substitution. Iodobenzene, for example, is difficult to make by direct iodination but easy to make from aniline through the diazonium salt. The same logic underlies azo dye synthesis, where the diazonium ion supplies the electrophilic half of the coupling.

<learning-block type="mistake" title="Diazonium errors to avoid">

- **Letting the solution warm before the intended reaction.** The diazonium salt decomposes to phenol and nitrogen.
- **Using Sandmeyer conditions for fluorobenzene.** Fluoride needs the Balz–Schiemann route through the tetrafluoroborate salt.
- **Trying to couple with a deactivated ring.** Benzene, nitrobenzene and benzoic acid are not activated enough; phenols and anilines are.
- **Evaporating the solution to obtain the solid salt.** Dry diazonium salts can explode; keep them in cold dilute solution.

</learning-block>

## Try it yourself

**A.** Convert aniline into phenol in two steps, naming the intermediate.

<details><summary>Show the reasoning</summary>

Diazotise aniline with sodium nitrite and hydrochloric acid at $0$–$5^\circ\text{C}$ to form benzenediazonium chloride, then warm the solution with water. Hydrolysis replaces the diazonium group by $-\mathrm{OH}$ and releases nitrogen, giving phenol.

</details>

**B.** Why is the diazotisation mixture kept strongly acidic as well as cold?

<details><summary>Show the reasoning</summary>

Acid keeps nitrous acid available for forming the nitrosonium ion and stabilises the diazonium ion. It also protonates any unreacted aniline, preventing that aniline from coupling with the diazonium salt and producing an azo dye as an impurity.

</details>

**C.** Calculate the mass of sodium nitrite, $\mathrm{NaNO_2}$ ($M=69.0\ \text{g mol}^{-1}$), needed to diazotise $9.30\ \text{g}$ of aniline completely.

<details><summary>Show the reasoning</summary>

$n(\text{aniline})=9.30/93.1=0.0999\ \text{mol}$. The reaction uses one mole of nitrite per mole of amine, so $m(\mathrm{NaNO_2})=0.0999\times69.0=6.89\ \text{g}$. In practice a slight excess is used.

</details>

## Remember

- Diazotisation is done with $\mathrm{NaNO_2}$ and excess $\mathrm{HCl}$ at $273$–$278\ \text{K}$.
- The diazonium ion is stable only in cold, acidic, dilute solution; warming gives phenol.
- Sandmeyer reactions replace $\mathrm{N_2^+}$ with Cl, Br or CN; iodide uses KI directly; fluoride uses $\mathrm{HBF_4}$.
- Hypophosphorous acid removes the amino group entirely, giving benzene.
- Coupling needs an activated ring and gives intensely coloured azo dyes.

The final concept module assembles these reactions into multi-step syntheses, where the order of steps matters as much as the choice of reagents.
