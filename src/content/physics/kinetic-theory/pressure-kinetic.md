## Pressure as momentum rain

Push a finger into the wind and you feel molecules drumming against it. The same drumming, averaged over a wall, is pressure. A gas at atmospheric pressure delivers around $10^{27}$ to $10^{28}$ collisions onto every square metre of container per second, each one a tiny momentum kick. Because the collisions are so many and there is hardly any pattern, the effect is perfectly steady. This lesson makes those kicks into a formula.

## 1. One collision, one kick

Consider a molecule of mass $m$ heading toward a wall along the $x$-axis with velocity component $v_x$. The wall gives it a perfectly elastic bounce:

$$
\Delta p_x=mv_{x,\text{after}}-mv_{x,\text{before}}=-mv_x-(+mv_x)=-2mv_x.
$$

By Newton's third law the molecule gives the wall $+2mv_x$ of momentum. Momentum delivered per unit time is force, so a single molecule's steady push on the wall is (momentum per bounce) × (bounces per second) — a rate argument, not a static one.

## 2. Adding up the whole gas

Take a cube of side $l$ containing $N$ molecules. Track one molecule with velocity components $(v_x,v_y,v_z)$:

- Time to cross the box and return to the same wall: $\Delta t=2l/v_x$.
- Momentum given per bounce: $2mv_x$.
- Average force this molecule exerts on that wall:

$$
F_{1}=\frac{2mv_x}{2l/v_x}=\frac{mv_x^2}{l}.
$$

Summing over all molecules and dividing by the wall area $l^2$:

$$
p=\frac{1}{l^3}\sum_{i}m v_{ix}^2=\frac{1}{V}\sum_i m v_{ix}^2.
$$

Now use randomness. Because speeds point helter-skelter, the three squared components of a molecule are on average equal:

$$
\langle v_x^2\rangle=\langle v_y^2\rangle=\langle v_z^2\rangle=\tfrac13\langle v^2\rangle.
$$

Replacing the instantaneous average $\frac{1}{N}\sum_i v_{ix}^2$ by $\frac13\langle v^2\rangle$, where $v_{rms}=\sqrt{\langle v^2\rangle}$, and writing $\sum_i m=Nm$ gives the central result:

$$
\boxed{pV=\tfrac13Nm\,v_{rms}^2=\tfrac13 m_{\text{tot}}v_{rms}^2}
$$

where $m_{\text{tot}}=Nm$ is the total mass of gas on the volume. Every term carries its meaning: $Nm$ counts how much momentum-carrying gas there is, $v_{rms}^2$ measures the typical squared momentum per unit mass, and the $\frac13$ is purely geometric — one of three directions is aimed at each wall.

### The numbers behind the drumming

The result is worth pinning to the hook. A nitrogen molecule has mass $m=0.028/(6.02\times10^{23})=4.65\times10^{-26}\ \text{kg}$; at room temperature $v_{rms}\approx517\ \text{m/s}$, so the typical wall-facing component is $v_x\approx v_{rms}/\sqrt3\approx300\ \text{m/s}$ and each bounce hands over $2mv_x\approx2.8\times10^{-23}\ \text{N}\cdot\text{s}$. To add up to a full atmosphere ($1.0\times10^{5}\ \text{N}$ on one square metre), the wall therefore receives

$$
\frac{1.0\times10^{5}}{2.8\times10^{-23}}\approx4\times10^{27}\ \text{collisions per square metre per second}.
$$

A single kick is far below any instrument's reach; pressure exists only because the kicks are nearly uncountable.

<learning-block type="mistake" title="Averaging speeds instead of squared speeds">

The formula uses $v_{rms}$, the square root of the **average of the squares**, not the ordinary average speed $\langle v\rangle$. Pressure comes from the momentum delivered per collision multiplied by collisions per time, and both grow with speed, so what compounds is $v^2$. For a typical gas $\langle v\rangle\approx0.92\,v_{rms}$: swapping one for the other shrinks the pressure prediction by about $15\%$.

</learning-block>

## 3. Same slot, different rearrangements

Dividing the boxed result by $V$ and using $Nm/V=\rho$, the density of the gas:

$$
p=\tfrac13\rho v_{rms}^2
\quad\Longrightarrow\quad
v_{rms}=\sqrt{\frac{3p}{\rho}}=\sqrt{\frac{3k_BT}{m}}.
$$

The middle expression is astonishingly compact: it converts a pressure and a density measurement directly into a molecular speed, touching neither moles nor temperature nor even the identity of the gas. The right-hand equality arrives by writing $pV=Nk_BT$ for the same gas — comparing the two expressions will play a starring role in the next lesson.

## 4. Why the mass does not matter at fixed temperature

Square the last relation: $mv_{rms}^{2}=3k_BT$. At a given temperature this product of molecular mass and squared rms speed **is set**, whatever the gas. In the pressure formula $p=\frac13\frac{N}{V}mv_{rms}^2$, the $m v_{rms}^2$ pair therefore collapses to $3k_BT$, leaving

$$
p=\tfrac13\frac{N}{V}\left(3k_BT\right)=\frac{Nk_BT}{V}.
$$

Rig the picture: heavy molecules hit harder (each kick is bigger) but slower (arrivals are fewer). At the same temperature the two effects **exactly cancel**. That is why a flask of hydrogen and a flask of oxygen at the same pressure, volume and temperature hold the same number of molecules per unit volume, not the same mass — Avogadro's law has left the land of assumption and become kinematics.

### Worked example: pressure of a helium cylinder

A $10\ \text{litre}(=10^{-2}\ \text{m}^3)$ cylinder holds $5.0\ \text{g}$ of helium ($M=4.0\times10^{-3}\ \text{kg/mol}$) at $300\ \text{K}$.

Step 1 — rms speed from the temperature:

$$
v_{rms}=\sqrt{\frac{3RT}{M}}=\sqrt{\frac{3(8.314)(300)}{0.004}}=\sqrt{1.87\times10^{6}}\approx1.37\times10^{3}\ \text{m/s}.
$$

Step 2 — molecular density: helium's density is $\rho=m_{\text{tot}}/V=0.005/0.01=0.50\ \text{kg/m}^3$.

Step 3 — pressure from the kinetic formula:

$$
p=\tfrac13\rho v_{rms}^{2}=\tfrac13(0.50)(1.37\times10^{3})^{2}\approx3.1\times10^{5}\ \text{Pa}.
$$

Sanity check with the ideal-gas law directly: $n=0.005/0.004=1.25\ \text{mol}$, so $p=nRT/V=(1.25)(8.314)(300)/0.01=3.12\times10^{5}\ \text{Pa}$. The two routes agree because together they **are** the same physics written twice.

## Try it yourself

**1.** In a fixed volume at fixed number of molecules, the rms speed of a gas doubles. What happens to the pressure, and why?

<details><summary>Show the reasoning</summary>

The kinetic formula $pV=\frac13Nm v_{rms}^2$ contains $v_{rms}^2$, so with $N$ and $V$ fixed, pressure scales as the **square**: it becomes four times larger. (Through $v_{rms}^2\propto T$ this is really the statement that heating from $T$ to $4T$ at fixed volume quadruples the pressure.)
</details>

**2.** Estimate the rms speed of oxygen molecules ($M=32\times10^{-3}\ \text{kg/mol}$) at $300\ \text{K}$.

<details><summary>Show the reasoning</summary>

$$
v_{rms}=\sqrt{\frac{3(8.314)(300)}{0.032}}=\sqrt{2.34\times10^{5}}\approx484\ \text{m/s},
$$
i.e. about $1700\ \text{km/h}$ — molecular motion is fast, which is how the same room fills up with a smell so quickly (with one caveat the fifth lesson will name).
</details>

**3.** Two flasks at the same pressure, volume and temperature hold helium and nitrogen. Compare (a) their numbers of molecules and (b) their typical molecular speeds.

<details><summary>Show the reasoning</summary>

(a) Equal: $pV=Nk_BT$ fixes $N$; neither flask knows the molecular mass. (b) Nitrogen's molecules are $7$ times as heavy as helium's, and at the same temperature $v_{rms}=\sqrt{3k_BT/m}$ gives a speed slower by $\sqrt7$: nitrogen molecules move at about $38\%$ of helium's speed.
</details>

## Remember

- Pressure is **momentum per unit time per unit area**, summed over a very many brief events.
- Follow one molecule's repeated round trips to a wall, add over all molecules, and randomness does the rest: $pV=\frac13Nm v_{rms}^2=\frac13m_{\text{tot}}v_{rms}^2$.
- Dividing by density gives the speed directly: $v_{rms}=\sqrt{3p/\rho}$.
- Pressure always involves $v^2$; never average speeds without squaring.
- At the same temperature, equal volumes of any gases hold the same number of molecules, because each molecule's kick ($\propto m v_{rms}^2$) is identical.
- Next lesson explains the star of step 2 above: where exactly the equality $m v_{rms}^2=3k_BT$ comes from.
