## The big idea

Work tells us **how much** energy was transferred. Power tells us **how quickly** it was transferred. Two motors can do the same work but have different power if one takes less time.

## 1. Average power

Over a time interval $\Delta t$,

$$
P_{avg}=\frac{W}{\Delta t}=\frac{\Delta E}{\Delta t}.
$$

The SI unit is the watt: $1\ \text{W}=1\ \text{J/s}$. A kilowatt is $1000\ \text{W}$. Power is not energy; multiplying power by time gives transferred energy when power is constant.

### Worked example: climbing stairs

A $50\ \text{kg}$ student climbs a vertical height of $3.0\ \text{m}$ in $5.0\ \text{s}$. The gain in gravitational potential energy is $mgh=1470\ \text{J}$, so the average useful mechanical power is

$$
P_{avg}=1470/5.0=294\ \text{W}.
$$

The student’s body uses more metabolic energy because muscles are not perfectly efficient.

## 2. Instantaneous power

Power at a particular instant is the rate of doing work:

$$
P=\frac{dW}{dt}=\vec F\cdot\vec v=Fv\cos\theta.
$$

If force and velocity point in the same direction, $P=Fv$. If they are opposite, power delivered by that force is negative. A perpendicular force has zero instantaneous power. This is why the centripetal force in uniform circular motion does no work.

### A useful motor relation

When a vehicle moves steadily against a resistive force $F$ at speed $v$, the motor must supply the same forward force. The required mechanical power is approximately $P=Fv$. Doubling speed doubles the required power if the resisting force stays constant. In real vehicles, air drag itself usually rises with speed, so the actual power demand rises faster.

## 3. Efficiency

Not all input energy becomes the useful output we want. Efficiency is

$$
\eta=\frac{\text{useful output energy}}{\text{input energy}}=\frac{\text{useful output power}}{\text{input power}}.
$$

It is often reported as a percentage. For an ordinary device, $0\leq\eta\leq1$; the rest of the input is transferred to unwanted forms such as heat or sound.

## Practice

**A.** A pump lifts $200\ \text{kg}$ of water by $5\ \text{m}$ in $10\ \text{s}$. What is the average useful output power? Use $g=10\ \text{m/s}^2$.

<details><summary>Show the reasoning</summary>

The gain in gravitational energy is $mgh=10{,}000\ \text{J}$. Thus $P=10{,}000/10=1000\ \text{W}=1.0\ \text{kW}$.
</details>

**B.** A motor supplies $2.0\ \text{kW}$ of input power at $75\%$ efficiency. What useful power is delivered?

<details><summary>Show the reasoning</summary>

$$
P_{useful}=\eta P_{in}=0.75(2.0\ \text{kW})=1.5\ \text{kW}.
$$
</details>

## Take away

- Work is measured in joules; power is measured in watts.
- Instantaneous power is the dot product $\vec F\cdot\vec v$.
- Efficiency compares useful output with input; it is not an energy source.
