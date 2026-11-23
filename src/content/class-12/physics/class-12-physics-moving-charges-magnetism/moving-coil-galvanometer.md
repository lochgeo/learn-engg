## Turning a tiny current into a visible deflection

A moving-coil galvanometer is a current loop pivoted in a radial magnetic field, restored by a spring. It is the bridge between the torque on a loop and a practical instrument: the deflection is proportional to the current, and by adding a shunt or a series resistor the same movement becomes an ammeter or a voltmeter.

## 1. Construction and principle

A rectangular coil of $N$ turns and area $A$ is suspended (or pivoted) between the poles of a permanent magnet. The pole pieces are shaped so that the magnetic field is **radial**: at every position of the coil, $\vec B$ is in the plane of the coil and perpendicular to the axis of rotation. A phosphor-bronze spring provides a restoring torque.

When current $I$ flows through the coil, the torque on it is

$$
\tau_m = N I A B,
$$

because $\vec B$ is always perpendicular to the normal of the coil in the radial field, so $\sin\theta=1$. The spring exerts a restoring torque proportional to the twist angle $\phi$:

$$
\tau_s = k\phi,
$$

where $k$ is the torsional constant. At equilibrium,

$$
N I A B = k\phi \quad\Rightarrow\quad \phi = \left(\frac{NAB}{k}\right) I.
$$

Thus the deflection is directly proportional to the current: $\phi\propto I$.

## 2. Sensitivities

**Current sensitivity** is the deflection per unit current:

$$
S_i = \frac{\phi}{I} = \frac{NAB}{k}\quad (\text{rad/A or div/A}).
$$

**Voltage sensitivity** is the deflection per unit voltage across the galvanometer:

$$
S_v = \frac{\phi}{V} = \frac{NAB}{kR_g} = \frac{S_i}{R_g},
$$

where $R_g$ is the resistance of the coil. A good voltmeter needs high voltage sensitivity, which favours a large $NAB/k$ and a small $R_g$; but increasing turns also increases $R_g$, so the design is a trade-off.

## 3. Converting to an ammeter

To measure a larger current $I$ with a galvanometer whose full-scale current is $I_g$ and resistance is $R_g$, connect a small **shunt** resistance $S$ in parallel. The shunt carries the excess current $I-I_g$ while the galvanometer carries $I_g$. Since the potential difference across both is the same,

$$
I_g R_g = (I-I_g) S \quad\Rightarrow\quad S = \frac{I_g R_g}{I-I_g}.
$$

The shunt is very small, so the ammeter’s overall resistance stays low.

## 4. Converting to a voltmeter

To measure a voltage $V$ larger than the galvanometer’s full-scale voltage $V_g=I_g R_g$, connect a large series resistance $R$ so that the total resistance is $R_g+R$ and the current at full scale is $I_g$:

$$
V = I_g(R_g+R) \quad\Rightarrow\quad R = \frac{V}{I_g}-R_g.
$$

The series resistance is large, so the voltmeter’s overall resistance stays high and it draws little current.

## 5. Worked example

A galvanometer has $R_g=50\ \Omega$ and full-scale current $I_g=1.0\times10^{-3}\ \text{A}$.

**Ammeter of range $1.0\ \text{A}$:**

$$
S = \frac{I_g R_g}{I-I_g}
  = \frac{(1.0\times10^{-3})(50)}{1.0-1.0\times10^{-3}}
  = \frac{5.0\times10^{-2}}{0.999}
  \approx 5.0\times10^{-2}\ \Omega.
$$

**Voltmeter of range $10\ \text{V}$:**

$$
R = \frac{10}{1.0\times10^{-3}}-50 = 1.0\times10^{4}-50 = 9.95\times10^{3}\ \Omega.
$$

Sanity check: the shunt is tiny and the series resistor is large, exactly as required for an ammeter (low resistance) and a voltmeter (high resistance). The galvanometer’s own full-scale voltage is only $50\ \text{mV}$, so a $10\ \text{V}$ range needs roughly $10\ \text{k}\Omega$ in series.

## 6. A common mistake

**Putting the shunt in series or the multiplier in parallel.** An ammeter needs the shunt in *parallel* so most of the current bypasses the delicate coil; a voltmeter needs the multiplier in *series* so the coil current stays at full scale. A second error is forgetting that $I_g$ is the current through the coil, not the total current, when computing the shunt. A third is treating the galvanometer’s resistance as negligible in the voltmeter calculation.

## Try it yourself

**A.** A galvanometer has $R_g=100\ \Omega$ and $I_g=50\ \mu\text{A}$. Design an ammeter of range $5.0\ \text{A}$.

<details><summary>Show the reasoning</summary>

$S=I_g R_g/(I-I_g)=(50\times10^{-6})(100)/(5.0-50\times10^{-6})=5.0\times10^{-3}/4.99995\approx1.0\times10^{-3}\ \Omega$.

</details>

**B.** Using the same galvanometer, design a voltmeter of range $100\ \text{V}$.

<details><summary>Show the reasoning</summary>

$R=V/I_g-R_g=100/(50\times10^{-6})-100=2.0\times10^{6}-100\approx2.0\times10^{6}\ \Omega$.

</details>

**C.** Why must the magnetic field in a moving-coil galvanometer be radial?

<details><summary>Show the reasoning</summary>

In a radial field, $\vec B$ stays in the plane of the coil and perpendicular to its normal at every angle, so $\sin\theta=1$ and the torque $NIAB$ is independent of deflection. The deflection is then strictly proportional to the current. In a uniform non-radial field the torque would vary with angle and the scale would not be linear.

</details>

## Remember

- Equilibrium: $NIAB=k\phi$, so $\phi\propto I$.
- Current sensitivity $S_i=NAB/k$; voltage sensitivity $S_v=S_i/R_g$.
- Ammeter shunt (parallel): $S=I_g R_g/(I-I_g)$.
- Voltmeter multiplier (series): $R=V/I_g-R_g$.
- Radial field makes the torque independent of deflection, giving a linear scale.

This completes the concept modules; the review and JEE Main modules consolidate them.<|end|><|start|>write to=assistant<|channel|>analysis<|message|>Created file successfully: src/content/class-12/physics/class-12-physics-moving-charges-magnetism/moving-coil-galvanometer.md