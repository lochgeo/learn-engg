## Why fluids obey different rules

Push a brick with your fingertip and the brick pushes back exactly where you touched it. Push a bowl of water instead and the water simply moves aside — it cannot hold its shape against a sideways nudge. That single difference, that a fluid at rest cannot resist being sheared, explains almost everything in this chapter: why pressure points equally in all directions, why a small push can lift a lorry, and why rivers, pipeline jets and blood flow the way they do.

## 1. Pressure: force spread over area

A fluid pushes on any surface it touches. The push is measured by **pressure**, the normal force per unit area:

$$
p=\frac{F}{A},
$$

where $F$ is the force acting perpendicular to a surface of area $A$. Because both force and area are usually large or small numbers, remember the unit ladder: the SI unit is the pascal, $1\ \text{Pa}=1\ \text{N/m}^2$, and $1\ \text{bar}=10^5\ \text{Pa}$, $1\ \text{atm}=1.013\times10^5\ \text{Pa}$. A number worth memorising: the weight of the whole atmosphere pushes on every square metre of you with about $10^5\ \text{N}$ — the force of a small car spread over a metre squared.

Pressure, not total force, decides what happens at a contact. A person of mass $60\ \text{kg}$ standing on high heels presses with about $600\ \text{N}$ over a contact area of roughly $8\ \text{cm}^2=8\times10^{-4}\ \text{m}^2$:

$$
p=\frac{600}{8\times10^{-4}}=7.5\times10^5\ \text{Pa},
$$

seven times atmospheric pressure — which is why heels mark a wooden floor — while the same person lying flat spreads the same weight over about $0.2\ \text{m}^2$ and manages only $\sim3\times10^3\ \text{Pa}$.

## 2. The special direction of fluid pressure

A solid can support forces *along* its surfaces (shear). A fluid at rest cannot: any sideways force imbalance would make one layer slide over another, and the fluid would keep deforming until the sliding stopped. At rest, therefore, the force on any internal surface — or any container wall — is purely **normal** to that surface, and its magnitude is the same no matter how the surface is oriented. This is what we mean when we say the pressure at a point acts equally in all directions.

Two consequences you will use constantly:

- A dam wall feels a push perpendicular to its face, no matter how the wall is tipped.
- Any imagined surface inside the liquid has fluid on both sides pushing on it normally from each side.

## 3. Pascal's law

**Pascal's law:** a pressure change applied to an enclosed fluid is transmitted undiminished to every point of the fluid and to the walls of the container.

The reason follows from the argument above. If some point of the enclosed fluid felt a larger pressure than a neighbouring point at the same height, fluid would flow from the high-pressure point to the low-pressure point. Static fluid, by definition, does not flow, so no such imbalance can survive: the applied pressure is felt everywhere. The fluid acts like a perfect messenger — it carries the pressure without reducing it.

Pascal's law holds for a fluid that is enclosed and at rest (or moving so slowly that we can ignore flow effects). It is exactly the static-limit idea; when the fluid moves, pressure changes also come from speed and height differences, as later modules show.

## 4. Hydraulic machines: multiplying force with pressure

Put two pistons of different areas on the same enclosed liquid. By Pascal's law the pressure under each is the same:

$$
\frac{F_1}{A_1}=\frac{F_2}{A_2}
\qquad\Rightarrow\qquad
F_2=F_1\,\frac{A_2}{A_1}.
$$

A small force on a small piston becomes a large force on a large piston. The liquid's pressure is the intermediary.

<learning-block type="example" title="Worked example: a hydraulic lift">

A mechanic presses with $F_1=100\ \text{N}$ on the input piston of area $A_1=10\ \text{cm}^2=1.0\times10^{-3}\ \text{m}^2$. The output piston has area $A_2=500\ \text{cm}^2=5.0\times10^{-2}\ \text{m}^2$.

The applied pressure is

$$
p=\frac{F_1}{A_1}=\frac{100}{1.0\times10^{-3}}=1.0\times10^5\ \text{Pa},
$$

so the lift can support

$$
F_2=p\,A_2=(1.0\times10^5)(5.0\times10^{-2})=5.0\times10^3\ \text{N},
$$

which balances a $500\ \text{kg}$ car (using $g=10\ \text{m/s}^2$). Sanity check: the force multiplication factor is $A_2/A_1=50$, and $100\times50=5000\ \text{N}$.

Now the trap. If the mechanic's piston descends by $d_1=25\ \text{cm}=0.25\ \text{m}$, the volume pushed in is $A_1d_1$; the output piston rises by

$$
d_2=\frac{A_1d_1}{A_2}=\frac{0.25}{50}=5.0\times10^{-3}\ \text{m}=5\ \text{mm}.
$$

Work in $=100\times0.25=25\ \text{J}$; work out $=5000\times0.005=25\ \text{J}$. The machine multiplies **force** by 50, and divides **distance** by 50. Energy is not free.

</learning-block>

Car brakes use the same idea in reverse proportions: the pedal pushes a small **master cylinder**; the pressure travels through brake fluid to wider **wheel cylinders** at each wheel. A $100\ \text{N}$ pedal force on a master cylinder of area $2\ \text{cm}^2$ gives $p=100/(2\times10^{-4})=5\times10^5\ \text{Pa}$, so a wheel cylinder of $8\ \text{cm}^2$ delivers $5\times10^5\times8\times10^{-4}=400\ \text{N}$ to the brake shoe.

<learning-block type="mistake" title="“The lift creates energy”">

The commonest error with hydraulic machines is reading $F_2\gg F_1$ as free force. Always follow the distance: the output piston moves less, in exactly the inverse ratio. If an exam question quotes both a force ratio and an equal travel distance for both pistons, the setup is physically impossible — real friction also eats a little of the input work. And check every area conversion: $1\ \text{cm}^2=10^{-4}\ \text{m}^2$, not $10^{-2}$.

</learning-block>

## Try it yourself

**A. A woman of mass $50\ \text{kg}$ stands on a single stiletto heel of tip area $1.0\ \text{cm}^2$. What pressure does her heel exert on the floor? Use $g=10\ \text{m/s}^2$.**

<details><summary>Show the reasoning</summary>

$F=mg=500\ \text{N}$ over $A=1.0\times10^{-4}\ \text{m}^2$ gives $p=500/(1.0\times10^{-4})=5.0\times10^6\ \text{Pa}$, about $50$ atmospheres. Real floors care about pressure, not weight.
</details>

**B. In a brake line, the master cylinder has area $1.5\ \text{cm}^2$ and the pedal force on it is $90\ \text{N}$. Each of the four wheel cylinders has area $6.0\ \text{cm}^2$. Find the force at each wheel cylinder assuming an ideal fluid.**

<details><summary>Show the reasoning</summary>

$p=90/(1.5\times10^{-4})=6.0\times10^5\ \text{Pa}$. Each wheel cylinder gives $F=6.0\times10^5\times6.0\times10^{-4}=360\ \text{N}$. The same pressure reaches all four cylinders because Pascal's law does not divide pressure among branches.
</details>

**C. A design claims a hydraulic jack with an input piston of $1.0\ \text{cm}^2$ and an output piston of $200\ \text{cm}^2$ lifts a $1000\ \text{kg}$ load when pressed $3\ \text{cm}$ with $150\ \text{N}$. Check the claim.**

<details><summary>Show the reasoning</summary>

Force available: ratio $200$, so $F_2=150\times200=3.0\times10^4\ \text{N}$, enough for a $1000\ \text{kg}$ load ($10^4\ \mathrm{N}$ with $g=10$). But the load moves only $3/200=0.015\ \text{cm}=0.15\ \text{mm}$. The force part of the claim is fine; the implied easy lifting speed is where intuition fails.
</details>

## Remember

- Pressure is normal force per area: $p=F/A$, measured in pascals; $1\ \text{atm}=1.013\times10^5\ \text{Pa}$.
- A fluid at rest cannot sustain shear, so its push on any surface is perpendicular, equal in all directions at a point.
- Pascal's law: enclosed static fluid transmits an applied pressure change undiminished.
- Hydraulic systems trade distance for force: $F_2/F_1=A_2/A_1$, and ideal work in equals work out.
- Convert areas with $1\ \text{cm}^2=10^{-4}\ \text{m}^2$ before anything else.

Pressure that a hand applies is one thing; pressure that depth applies is another. The next module works out how pressure grows inside a standing liquid, and how barometers and manometers turn that growth into a measuring instrument.
