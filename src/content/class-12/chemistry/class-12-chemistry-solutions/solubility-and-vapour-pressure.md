## Why some things dissolve and others do not

Solubility is not magic; it is a competition between three kinds of interactions: solute–solute, solvent–solvent and solute–solvent. When the solute–solvent interaction is strong enough to compensate for breaking the other two, dissolution happens. This “like dissolves like” rule is a useful first guess: polar and ionic solutes dissolve in polar solvents such as water, while non-polar solutes dissolve in non-polar solvents such as hexane.

This module connects two ideas: how much solute can be held (solubility) and how the presence of a solute changes the vapour pressure of the solvent (Raoult’s law). Both are needed for the colligative properties later.

## 1. Solubility of solids in liquids

For a solid dissolving in a liquid, three processes compete: breaking solute–solute bonds, breaking solvent–solvent bonds, and forming solute–solvent bonds. The net enthalpy change $\Delta H_{\text{sol}}$ can be positive or negative. The driving force is the increase in disorder (entropy) on mixing.

- **Temperature:** for most solids in water, solubility rises with temperature because dissolution is endothermic. A few substances (for example, Ce₂(SO₄)₃) become less soluble on heating because their dissolution is exothermic.
- **Pressure:** has almost no effect on the solubility of solids or liquids because their volumes change little.
- **Nature of solute and solvent:** ionic and polar solids dissolve in polar solvents; covalent network solids (diamond, silica) do not.

A **saturated solution** holds the maximum amount of solute at a given temperature; an **unsaturated** one holds less; a **supersaturated** one holds more than the equilibrium amount and is unstable, crystallising on seeding.

## 2. Solubility of gases in liquids

Gases are much more soluble in cold liquids than in hot ones, and their solubility rises with pressure. **Henry’s law** states that, at a given temperature, the mole fraction $x$ of a gas in a liquid is proportional to the partial pressure $p$ of that gas above the liquid:

$$
p=K_H\,x,
$$

where $K_H$ is Henry’s law constant for that gas–solvent pair at that temperature. Rearranged,

$$
x=\frac{p}{K_H}.
$$

A large $K_H$ means low solubility (the gas needs a high pressure to dissolve). $K_H$ rises with temperature, so heating drives dissolved gas out — which is why warm soda goes flat faster.

Applications: scuba diving (nitrogen narcosis and decompression sickness are governed by Henry’s law), carbonated drinks, and the transport of oxygen in blood (where haemoglobin binds O₂ beyond simple dissolution).

**Worked example.** The Henry’s law constant for O₂ in water at 298 K is about $K_H=4.34\times10^4\ \text{bar}$. Find the mole fraction of O₂ dissolved in water exposed to air at $p_{\text{O}_2}=0.21\ \text{bar}$.

$$
x=\frac{0.21}{4.34\times10^4}=4.84\times10^{-6}.
$$

That tiny value explains why water carries little dissolved oxygen and why aquatic life needs special respiratory adaptations.

## 3. Vapour pressure of a pure liquid

Molecules escape from a liquid surface into the gas phase; the pressure exerted by this vapour in equilibrium with the liquid is the **vapour pressure**. It rises with temperature and depends on the strength of intermolecular forces: weak forces (ether, petrol) give high vapour pressure; strong hydrogen bonding (water, glycerol) gives low vapour pressure.

## 4. Raoult’s law

When a non-volatile solute is dissolved in a solvent, the solvent’s vapour pressure falls because solute particles occupy space at the surface and reduce the number of solvent molecules that can escape. **Raoult’s law** states that the vapour pressure of the solvent above the solution is proportional to its mole fraction in the solution:

$$
p_1=x_1\,p_1^\circ,
$$

where $p_1$ is the vapour pressure of the solvent above the solution, $x_1$ its mole fraction in the solution, and $p_1^\circ$ the vapour pressure of the pure solvent at the same temperature.

The **lowering of vapour pressure** is

$$
\Delta p_1=p_1^\circ-p_1=p_1^\circ(1-x_1)=p_1^\circ\,x_2,
$$

where $x_2$ is the mole fraction of the solute. This is the first colligative property: it depends on the number of solute particles, not their identity.

**Worked example.** Water at 298 K has $p^\circ=23.8\ \text{mmHg}$. A solution contains $x_{\text{water}}=0.90$. Find the vapour pressure above the solution.

$$
p=0.90\times23.8=21.4\ \text{mmHg}.
$$

The lowering is $23.8-21.4=2.4\ \text{mmHg}$, which equals $0.10\times23.8$. The result is below the pure-solvent value, as expected.

## 5. Dalton’s law and total vapour pressure for volatile solutes

If **both** components are volatile, each contributes to the vapour pressure independently. Raoult’s law applies to each:

$$
p_1=x_1\,p_1^\circ,\qquad p_2=x_2\,p_2^\circ.
$$

The total vapour pressure above the solution is, by **Dalton’s law**,

$$
p_{\text{total}}=p_1+p_2=x_1p_1^\circ+x_2p_2^\circ.
$$

The composition of the vapour is richer in the more volatile component: $y_1=p_1/p_{\text{total}}$, where $y_1$ is the mole fraction in the vapour. This difference between liquid and vapour composition is the basis of distillation.

**Worked example.** A mixture of benzene ($p^\circ=95\ \text{mmHg}$) and toluene ($p^\circ=28\ \text{mmHg}$) has $x_{\text{benzene}}=0.60$, $x_{\text{toluene}}=0.40$. Find the total pressure and the vapour composition.

$$
p_{\text{benzene}}=0.60\times95=57.0,\qquad
p_{\text{toluene}}=0.40\times28=11.2,\qquad
p_{\text{total}}=68.2\ \text{mmHg}.
$$

$$
y_{\text{benzene}}=\frac{57.0}{68.2}=0.836.
$$

The vapour is enriched in benzene (the more volatile component), as expected.

## 6. A reliable method for vapour-pressure problems

1. Decide whether the solute is volatile or non-volatile.
2. For a non-volatile solute, use $p_1=x_1p_1^\circ$ with $x_1$ the solvent mole fraction.
3. For two volatile components, compute each partial pressure and add them (Dalton’s law).
4. Check that $p_{\text{total}}$ lies between the two pure-component vapour pressures and that the vapour is richer in the more volatile component.

<learning-block type="mistake" title="Using molarity instead of mole fraction in Raoult’s law">
Raoult’s law is written in mole fractions, not molarities. A common error is to plug a molarity into $p=xp^\circ$. If the problem gives masses, convert to moles first; if it gives molarity, you also need the density to recover the mole fraction. Also remember that $x_1+x_2=1$ for a binary mixture — a quick check that catches arithmetic slips.
</learning-block>

## Try it yourself

**A.** The Henry’s law constant for CO₂ in water at 298 K is about $1.67\times10^3\ \text{bar}$. Find the mole fraction of CO₂ in water under a CO₂ pressure of $2.5\ \text{bar}$.

<details><summary>Show the reasoning</summary>

$x=p/K_H=2.5/(1.67\times10^3)=1.50\times10^{-3}$.

</details>

**B.** Pure water at 300 K has vapour pressure $35.7\ \text{mmHg}$. A solution has $x_{\text{water}}=0.85$. Find the vapour pressure above it.

<details><summary>Show the reasoning</summary>

$p=0.85\times35.7=30.3\ \text{mmHg}$.

</details>

**C.** For the benzene–toluene mixture above ($x_{\text{benzene}}=0.60$), find the mole fraction of benzene in the vapour at equilibrium.

<details><summary>Show the reasoning</summary>

Already computed: $y_{\text{benzene}}=57.0/68.2=0.836$.

</details>

## Check your understanding

Why does the vapour above a benzene–toluene mixture contain more benzene than the liquid does, even though no benzene is created or destroyed?

<details><summary>Reveal</summary>

Benzene is more volatile (higher pure-component vapour pressure), so it escapes into the vapour phase faster. At equilibrium the vapour must be richer in the more volatile component; otherwise the partial pressures could not satisfy both Raoult’s and Dalton’s laws. This is the principle behind fractional distillation.

</details>

## Take away

- Solubility of solids is mainly temperature-dependent; solubility of gases follows Henry’s law and rises with pressure.
- Raoult’s law links solvent vapour pressure to its mole fraction: $p_1=x_1p_1^\circ$.
- For two volatile components, add the partial pressures (Dalton’s law) and expect vapour enrichment in the more volatile one.
- Vapour-pressure lowering is the seed from which the colligative properties grow.

The next module asks when Raoult’s law holds exactly and what happens when it does not.