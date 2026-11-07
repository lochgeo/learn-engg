## A wall of molecules

One cubic centimetre of classroom air holds about $2.7\times10^{19}$ molecules. No useful theory can follow each one. But the measured facts of a gas — its pressure, volume and temperature — are what trillions of rapidly moving particles do **on average**. Kinetic theory is the branch of physics that builds a simple mathematical model of those particles and explains the gas laws from it, rather than treating the gas laws as separate empirical guesses.

The chapter travels in one direction: from the model's assumptions to pressure (molecular collisions), to temperature and molecular speeds, to how energy is shared among types of motion and why gases differ in specific heat, to how far a molecule travels between collisions, and finally to what the world looks like when the ideal model stops working.

## 1. The molecular assumptions

The **ideal-gas model** describes a gas as a huge number of identical molecules in ceaseless random motion. Its assumptions, stated once and leaned on throughout this chapter, are:

- Molecules are vanishingly small compared with the space between them: at atmospheric pressure a gas molecule spends almost all its time tens of molecular diameters from its nearest neighbour.
- Molecules move in straight lines between collisions, with all directions equally likely and speeds spread over a wide range.
- Collisions between molecules, and between molecules and the container walls, are perfectly **elastic**: they conserve kinetic energy exactly.
- There are no forces between molecules except during the instant of collision. Gravity acting on molecules is ignored.
- Newtonian mechanics applies to every collision.

Each assumption can fail. Section 4 says where, and later lessons in this chapter quantify the failures. Kept inside its limits, the model is astonishingly accurate, and every later formula — pressure, speeds, specific heats, mean free path — is a consequence of this list.

## 2. The equation of state

The model's central prediction is that pressure $p$, volume $V$, number of moles $n$ and absolute temperature $T$ of a dilute gas obey

$$
pV=nRT=Nk_BT,
$$

where $R=8.314\ \text{J mol}^{-1}\text{K}^{-1}$, $N=nN_A$ is the number of molecules, $N_A=6.02\times10^{23}\ \text{mol}^{-1}$, and $k_B=R/N_A=1.38\times10^{-23}\ \text{J/K}$ is the **Boltzmann constant**, which converts a temperature into a per-molecule energy scale. The temperature must be in kelvin, and every quantity in it must be stated in SI units before any two-state comparison.

## 3. The gas laws fall out of the equation

Because $pV=nRT$ holds for all dilute gases, the classical gas laws follow by holding two of the four quantities fixed and letting the equation decide the rest:

| What is held constant | Consequence | Name |
| --- | --- | --- |
| $T,n$ | $pV=$ constant | Boyle's law |
| $p,n$ | $V/T=$ constant | Charles' law |
| $V,n$ | $p/T=$ constant | pressure (Gay-Lussac's) law |
| $p,T$ | $V\propto n$ | Avogadro's law |
| $p,V$ | $T\propto n$ | not a gas law: it fails |

Avogadro's law deserves a comment: **equal volumes of gases at the same pressure and temperature hold the same number of molecules**, regardless of their mass. A litre of hydrogen and a litre of oxygen at the same $p$ and $T$ contain the same count of molecules, not the same mass. At standard temperature and pressure (STP: $273\ \text{K}$ and $1.013\times10^{5}\ \text{Pa}$), one mole of any ideal gas occupies

$$
V=\frac{nRT}{p}=\frac{(1)(8.314)(273)}{1.013\times10^{5}}=2.24\times10^{-2}\ \text{m}^3\approx22.4\ \text{litre}.
$$

A density form follows too. Writing $n=m_{\text{tot}}/M$, where $m_{\text{tot}}$ is the mass of gas and $M$ the molar mass, and using $\rho=m_{\text{tot}}/V$:

$$
p=\frac{\rho RT}{M}.
$$

This connects the equation of state straight to a density measurement, and the next lesson uses exactly this door.

### Worked example: density of oxygen at STP

Using $p=\rho RT/M$ with $M=32\times10^{-3}\ \text{kg/mol}$:

$$
\rho=\frac{pM}{RT}=\frac{(1.013\times10^{5})(32\times10^{-3})}{(8.314)(273)}=\frac{3242}{2269}=1.43\ \text{kg/m}^3.
$$

Sanity check: air measures about $1.29\ \text{kg/m}^3$, and oxygen's molar mass ($32$) sits above air's effective molar mass ($29$), so oxygen should be a little denser — consistent.

A number worth carrying: at STP the number density is about $2.7\times10^{25}\ \text{m}^{-3}$, so the mean spacing between molecules is roughly $(2.7\times10^{25})^{-1/3}\approx3.4\ \text{nm}$, near ten molecular diameters — because a molecule measures a few tenths of a nanometre across. This is the quantitative backing for the first assumption.

### Worked example: how many molecules in a breath?

A person's half-litre breath at room conditions is close to $1.0\ \text{atm}$ and $300\ \text{K}$. Moles:

$$
n=\frac{pV}{RT}=\frac{(1.013\times10^{5})(5.0\times10^{-4})}{(8.314)(300)}=2.03\times10^{-2}\ \text{mol}.
$$

Molecules:

$$
N=nN_A=(2.03\times10^{-2})(6.02\times10^{23})=1.2\times10^{22}.
$$

Sanity check: at STP the same volume would hold $0.50/22.4=0.0223\ \text{mol}$, and the warmer breath holds slightly fewer — consistent with $2.03\times10^{-2}$. Each breath mixes at once with the vastness of the atmosphere.

## 4. When the model breaks

The model assumes zero molecular size and zero attraction. Both stop being negligible in the same situations:

- **High pressure.** Squeezed hard, the molecules' own volume is no longer tiny compared with the container. The gas becomes harder to compress than the ideal law predicts.
- **Low temperature.** When molecules are slow, the weak attractions get time to matter, and the gas eventually condenses to a liquid. An ideal gas, by its own assumptions, could never condense.

The rule of thumb: **an ideal gas should be dilute and its temperature well above its boiling point.** Helium at room temperature obeys $pV=nRT$ to better than a percent over a wide range; carbon dioxide near its liquefaction temperature does not. The later lesson on real gases turns these qualitative failures into equations you can calculate with.

| Condition | Which assumption gives way | Effect |
| --- | --- | --- |
| very high pressure | point molecules | measured $pV$ exceeds $nRT$ |
| low temperature, moderate pressure | no attractions | measured $pV$ falls below $nRT$ |
| approach to the boiling point | no attractions | gas condenses, model loses meaning |
| plasma, extreme fields | elastic Newtonian collisions | model needs replacing entirely |


<learning-block type="mistake" title="Substituting degrees Celsius into gas laws">

The gas laws are **proportionalities**. $p\propto T$ assumes $T$ is measured from the true zero of energy. Celsius has its zero at the freezing point of water, not the zero of molecular kinetic energy, so doubling the Celsius reading does not double anything. Convert with $T_{\text{K}}=T_{\text{°C}}+273$ **before** every ratio, including when both temperatures are given in Celsius.

</learning-block>

## Try it yourself

**1.** A sealed rigid canister of gas warms from $27^\circ\text{C}$ to $127^\circ\text{C}$. By what factor does the pressure multiply if the moles stay fixed?

<details><summary>Show the reasoning</summary>

Constant $V$ and $n$ give $p\propto T$ in kelvin: $p_2/p_1=T_2/T_1=(127+273)/(27+273)=400/300=1.33$.
</details>

**2.** A gas at fixed pressure and $300\ \text{K}$ occupies $2.0\ \text{litre}$. What volume does it fill at $400\ \text{K}$ with the same moles and pressure?

<details><summary>Show the reasoning</summary>

Charles' law: $V_2=V_1(T_2/T_1)=2.0\times400/300=2.7\ \text{litre}$ (two significant figures: $2.67\ \text{litre}$).
</details>

**3.** Two flasks of equal volume at the same pressure and temperature hold helium and nitrogen. Which statement is guaranteed: equal masses, equal numbers of molecules, or equal densities?

<details><summary>Show the reasoning</summary>

Avogadro's law guarantees **equal numbers of molecules**: equal $V$ at equal $p$ and $T$ means equal $n$. Masses then differ by the molar-mass ratio ($M_{\text{N}_2}/M_{\text{He}}=7$), and so do the densities.
</details>

## Remember

- The ideal-gas model: tiny, identical, elastic, non-interacting particles in random motion.
- $pV=nRT=Nk_BT$; the temperature is always kelvin, and $R=N_Ak_B$ links the molar and molecular constants.
- Every gas law is this one equation with two quantities held constant.
- Avogadro's law compares **numbers**, not masses: equal volumes at equal $p,\,T$ hold equal molecule counts.
- The model fails when molecules are crowded (high $p$) or sluggish (low $T$); the next lesson derives pressure itself from molecular collisions.
