## Your study plan for today

The chapter is a set of connected tools, not a list of formulas to memorise. A focused first pass takes about **2 hours 45 minutes**, split as:

1. **Stress, strain and Hooke's law** — 20 min
2. **The elastic moduli** — 22 min
3. **The stress–strain curve** — 22 min
4. **Elastic potential energy** — 20 min
5. **Thermal stress** — 18 min
6. **Beams, columns and structural limits** — 18 min
7. **This mastery check** — 25 min

After each lesson, close the book and attempt its questions from a blank page. Only mark the lesson complete when you can explain *why* the method applies, not merely reproduce the algebra. Take a short break before this mastery check.

Once you can solve each lesson's tools one at a time, run the final **JEE Main timed practice** module: a $50$-minute, no-notes set whose value is choosing the right tool under time pressure.

## First choose the tool

| Clue in the question | Start with |
| --- | --- |
| A force on a known area, or a load to rate | Stress: $\sigma=F/A$ |
| An extension asked for | $\Delta L=FL/AY$; strain $\varepsilon=\Delta L/L$ |
| Sideways thinning mentioned | Poisson: $\nu=-(\Delta d/d)/(\Delta L/L)$ |
| Volume squeezed by pressure | Bulk: $\Delta V/V=\Delta p/B$; sphere hint: $\Delta V/V\approx3\,\Delta r/r$ |
| A top face slides or an angle is given | Shear: $\gamma=\sigma/G=\Delta x/h$ |
| Energy stored in a stretched wire | $U=\frac12F\Delta L$, $u=\frac12\sigma\varepsilon$ |
| Treated as a spring, or cut into pieces | $k=YA/L$, $U=\frac12k(\Delta L)^2$ |
| Heated or cooled then restrained | $\sigma=Y\alpha\Delta T$; free $\Delta L=L\alpha\Delta T$ |
| A load–unload cycle exceeded the limit | Loop area = energy dissipated per volume |
| Beam stress, buckling or a height limit | $\sigma=My/I$, $P=\pi^2EI/L^2$, $h\approx\sigma_{\text{limit}}/\rho g$ |

## Mastery check

Attempt each question before opening the answer. Use $g=10\ \text{m/s}^2$ unless stated otherwise.

### 1. Rate a tie rod

A circular steel tie rod of radius $2.0\ \text{mm}$ carries a tensile force of $500\ \text{N}$. Find the tensile stress.

<details><summary>Answer and reasoning</summary>

$A=\pi r^2=\pi(2.0\times10^{-3})^2=1.26\times10^{-5}\ \text{m}^2$, so $\sigma=F/A=500/(1.26\times10^{-5})\approx4.0\times10^7\ \text{Pa}=40\ \text{MPa}$.
</details>

### 2. From stress to strain and extension

For the same rod, $Y=2.0\times10^{11}\ \text{Pa}$ and its length is $2.0\ \text{m}$. Find the strain and the extension.

<details><summary>Answer and reasoning</summary>

$\varepsilon=\sigma/Y=(3.98\times10^7)/(2.0\times10^{11})=2.0\times10^{-4}$. Then $\Delta L=\varepsilon L=(2.0\times10^{-4})(2.0)=4.0\times10^{-4}\ \text{m}=0.4\ \text{mm}$. The direct route $\Delta L=FL/AY$ gives the identical $0.4\ \text{mm}$.
</details>

### 3. Poisson's ratio in action

The rod's diameter is $4.0\ \text{mm}$ and $\nu=0.3$. Find the change in diameter under the $500\ \text{N}$ load.

<details><summary>Answer and reasoning</summary>

Lateral strain $=-\nu\,\varepsilon=-(0.3)(2.0\times10^{-4})=-6.0\times10^{-5}$. So $\Delta d=(6.0\times10^{-5})(4.0\times10^{-3})=2.4\times10^{-7}\ \text{m}=0.24\ \mu\text{m}$, a *decrease*. Thinning on stretching is always the sign to check.
</details>

### 4. Squeezing a block

A brass block of volume $2.0\ \text{L}$ is put under a uniform pressure increase of $3.0\times10^7\ \text{Pa}$. Taking $B=6.0\times10^{10}\ \text{Pa}$, find the volume decrease.

<details><summary>Answer and reasoning</summary>

$\Delta V/V=\Delta p/B=(3.0\times10^7)/(6.0\times10^{10})=5.0\times10^{-4}$. So $\Delta V=(5.0\times10^{-4})(2.0\times10^{-3})=1.0\times10^{-6}\ \text{m}^3=1.0\ \text{cm}^3$. A $300$-atmosphere squeeze shrinks it by just $0.05\%$.
</details>

### 5. A shear standard

A steel block experiences a shear stress of $3.85\times10^6\ \text{Pa}$. With $G=7.7\times10^{10}\ \text{Pa}$, find the shear strain and the shift of a level $20\ \text{cm}$ above the fixed base.

<details><summary>Answer and reasoning</summary>

$\gamma=\sigma/G=5.0\times10^{-5}\ \text{rad}$; $\Delta x=h\gamma=(0.20)(5.0\times10^{-5})=1.0\times10^{-5}\ \text{m}=10\ \mu\text{m}$. Shear strain is an angle in radians, dimensionless.
</details>

### 6. Energy in a stretched wire

A wire's tension ramps from zero to $200\ \text{N}$ as its extension grows to $0.50\ \text{mm}$. Find the stored elastic energy.

<details><summary>Answer and reasoning</summary>

$U=\frac12F\Delta L=\frac12(200)(0.50\times10^{-3})=0.050\ \text{J}$. The factor half exists because the average force during loading is $100\ \text{N}$, not $200\ \text{N}$.
</details>

### 7. A rail on a hot day

A $20\ \text{m}$ steel rail ($\alpha=1.2\times10^{-5}\ \text{K}^{-1}$) is heated by $40\ ^\circ\text{C}$. Find the free expansion it wants and the stress if fully clamped ($Y=2.0\times10^{11}\ \text{Pa}$).

<details><summary>Answer and reasoning</summary>

Free expansion: $\Delta L=L\alpha\Delta T=(20)(1.2\times10^{-5})(40)=9.6\times10^{-3}\ \text{m}=9.6\ \text{mm}$. If clamped, the suppressed strain $\alpha\Delta T=4.8\times10^{-4}$ reappears as compressive stress $\sigma=Y\alpha\Delta T=9.6\times10^7\ \text{Pa}=96\ \text{MPa}$ — independent of the rail's length and area.
</details>

### 8. Work backwards to the modulus

A copper wire of length $1.0\ \text{m}$ and area $0.50\ \text{mm}^2$ stretches by $2.0\ \text{mm}$ under a $200\ \text{N}$ load. Find the modulus and identify the plausible material.

<details><summary>Answer and reasoning</summary>

$Y=FL/(A\Delta L)=\dfrac{200\times1.0}{(5.0\times10^{-7})(2.0\times10^{-3})}=\dfrac{200}{1.0\times10^{-9}}=2.0\times10^{11}\ \text{Pa}$. That is a *steel* value, not copper's $1.1\times10^{11}$ — so either the material label or a measurement is wrong. Given data must cross-check against the table row you name.
</details>

### 9. Reading a curve

A specimen obeys Hooke's law up to the point $(\varepsilon,\sigma)=(1.2\times10^{-3},\ 2.4\times10^8\ \text{Pa})$ and fractures at a strain of $0.25$. Identify the modulus and classify the material.

<details><summary>Answer and reasoning</summary>

In the proportional region $Y=\sigma/\varepsilon=(2.4\times10^8)/(1.2\times10^{-3})=2.0\times10^{11}\ \text{Pa}$. A fracture strain of $25\%$, a hundred times the yield-scale strain, is unmistakably **ductile**. Note that the fracture strain alone was enough for the classification.
</details>

### 10. Stress in a girder

A beam's two flanges have area $2.0\times10^{-3}\ \text{m}^2$ each, with centroids $0.30\ \text{m}$ apart; approximate $I\approx A_fd^2/2$. For a bending moment $3.0\times10^4\ \text{N·m}$, find the bending stress in the flanges.

<details><summary>Answer and reasoning</summary>

$I\approx\frac{(2.0\times10^{-3})(0.30)^2}{2}=9.0\times10^{-5}\ \text{m}^4$. Flange distance $y=0.15\ \text{m}$ from the neutral axis: $\sigma=My/I=(3.0\times10^4)(0.15)/(9.0\times10^{-5})=5.0\times10^7\ \text{Pa}=50\ \text{MPa}$. The mid-depth of the beam carries zero bending stress.
</details>

## Self-check

You are ready to move on when you can:

- compute stress, strain and extension in any order from $\sigma=F/A$, $\varepsilon=\sigma/Y$ and $\Delta L=FL/AY$;
- pick the right modulus — $Y$, $B$ or $G$ — from the way a body is loaded, and use $\nu$ to obtain lateral or volume change;
- name, in order, the landmarks on a stress–strain curve and classify a material as ductile or brittle from a fracture strain;
- split the cost of stretching between stored energy ($\frac12F\Delta L$, $u=\frac12\sigma\varepsilon$) and hysteresis losses per cycle;
- convert a blocked thermal expansion into the stress $\sigma=Y\alpha\Delta T$ and state its sign;
- explain an I-beam, a buckling load and a mountain-height limit with the three structural relations $\sigma=My/I$, $P=\pi^2EI/L^2$, $h\approx\sigma_{\text{limit}}/\rho g$;
- catch answers with the wrong property $\text{J/m}^3$ versus $\text{Pa}$, the missing factor $\frac12$, or a borrowed modulus.

If any item still feels shaky, return to that lesson and redo its questions without the reveal — then attempt the timed paper.
