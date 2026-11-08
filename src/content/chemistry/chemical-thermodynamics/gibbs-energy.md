## A spontaneity test that reads only the system

The second law gives the correct criterion — total entropy rises — but it demands an audit of the *universe*. Nobody carries a surroundings-meter. When the process runs at constant temperature and pressure (which is almost all of chemistry), the surroundings are a bath that simply receives or pays the heat $\Delta H_{\text{sys}}$, so their entropy change is fixed by the system:

$$
\Delta S_{\text{surroundings}} = -\frac{\Delta H_{\text{system}}}{T}.
$$

Insert this into $\Delta S_{\text{total}} = \Delta S_{\text{sys}} + \Delta S_{\text{surr}} > 0$ and multiply through by $-T$ (which reverses the inequality):

$$
\Delta H_{\text{system}} - T\,\Delta S_{\text{system}} < 0.
$$

Everything in that last line is a system property. The combination earns a name: the **Gibbs energy**.

## 1. Definition and the master equation

$$
G = H - TS, \qquad \Delta G = \Delta H - T\,\Delta S \quad (\text{at constant } T).
$$

$G$ is a state function, extensive, usually quoted in kJ. The equation is a statement that $\Delta G$ trades two things off: the enthalpy change (energy paid or received as heat at constant pressure) against the entropy change priced at $T$ joules per kelvin. **Watch the units:** $\Delta H$ in kJ and $\Delta S$ in $\text{J\,K}^{-1}$ — divide $\Delta S$ by $1000$ before subtracting, or the temperature term will be wrong by three orders of magnitude.

## 2. The criterion at constant temperature and pressure

| $\Delta G$ | Meaning |
| --- | --- |
| $< 0$ | the process is spontaneous in the written direction |
| $= 0$ | the system is at equilibrium; neither direction is favoured |
| $> 0$ | not spontaneous; the reverse process has $\Delta G<0$ |

This is exactly the second law, renamed. A negative $\Delta G$ *is* a positive $\Delta S_{\text{total}}$ under constant $T$ and $P$; the price $-T\Delta S_{\text{total}}$ for that translation is that the test applies only under those conditions. And as with spontaneity in general: $\Delta G$ says nothing about rate. Hydrogen peroxide solution has a large negative $\Delta G$ for decomposition, and a sealed bottle sits for months.

## 3. Reading the signs: which term wins?

Because $\Delta G = \Delta H - T\Delta S$, four sign combinations exhaust the possibilities:

| $\Delta H$ | $\Delta S$ | $\Delta G$ | Spontaneous when | Example |
| --- | --- | --- | --- | --- |
| $-$ | $+$ | always $-$ | all temperatures | combustion of carbon: $\Delta H^\circ = -393.5\ \text{kJ\,mol}^{-1}$, $\Delta S^\circ$ slightly positive |
| $-$ | $-$ | $-$ at low $T$ | below $T = \Delta H/\Delta S$ | freezing water; rusting in the sense of gas-consuming combination reactions |
| $+$ | $+$ | $-$ at high $T$ | above $T = \Delta H/\Delta S$ | thermal decomposition of carbonates; evaporation above the boiling point |
| $+$ | $-$ | always $+$ | never | $\mathrm{3O_2(g) \rightarrow 2O_3(g)}$: endothermic *and* fewer gas moles |

When $\Delta H$ and $\Delta S$ have the same sign, the switch happens where $\Delta G = 0$:

$$
T_{\text{switch}} = \frac{\Delta H}{\Delta S},
$$

using kelvin and matching units. Below it one term dominates, above it the other — which is why a reaction can be non-spontaneous on the bench and spontaneous in a kiln.

### Worked example: limestone in a kiln

For $\mathrm{CaCO_3(s) \rightarrow CaO(s) + CO_2(g)}$, tabulated data give $\Delta H^\circ = +178.3\ \text{kJ\,mol}^{-1}$ and $\Delta S^\circ = +160.5\ \text{J\,K}^{-1}\text{mol}^{-1}$ (one mole of gas released — the entropy term is genuinely on the reaction's side, just outgunned at room temperature).

**At $298\ \text{K}$:**

$$
\Delta G^\circ = 178.3 - (298.15)(0.1605) = 178.3 - 47.9 = +130.4\ \text{kJ\,mol}^{-1} > 0,
$$

so limestone does not decompose on the bench.

**Switch temperature:**

$$
T = \frac{\Delta H^\circ}{\Delta S^\circ} = \frac{178\,300}{160.5} = 1111\ \text{K} \approx 838\,^\circ\text{C}.
$$

**At $1200\ \text{K}$:** $\Delta G^\circ = 178.3 - 1200(0.1605) = 178.3 - 192.6 = -14.3\ \text{kJ\,mol}^{-1} < 0$ — decomposition runs.

**Sanity check.** Lime has been made in kilns at glowing-heat temperatures for millennia; a switch near $1100\ \text{K}$ matches how the process is actually run, and at room temperature the prediction "never on the bench" matches every old building standing there.

## 4. Standard Gibbs energies of formation

As with enthalpy, define $\Delta_\text{f}G^\circ$ for forming one mole from elements in their standard states, with elements at zero, and compute reaction values the Hess way:

$$
\Delta G^\circ_{\text{rxn}} = \sum \nu\,\Delta_\text{f}G^\circ(\text{products}) - \sum \nu\,\Delta_\text{f}G^\circ(\text{reactants}),
$$

or from the component data, $\Delta G^\circ = \Delta H^\circ - T\Delta S^\circ$ — both routes must agree for the same reaction, which is a useful cross-check in exams. Note the difference from entropy tables: $\Delta_\text{f}G^\circ$ of elements **is** zero (it is a formation quantity), whereas $S^\circ$ of elements is not (it is absolute).

## 5. Coupling: paying for an uphill reaction

Because $\Delta G$ adds when equations add, a thermodynamically uphill step ($\Delta G>0$) can be dragged along by a downhill partner as long as the *sum* is negative. Metallurgy is built on this:

$$
\mathrm{Fe_2O_3(s) + 2Al(l) \rightarrow Al_2O_3(s) + 2Fe(l)}
$$

Iron oxide does not give up its oxygen to anything that can afford it — but with $\Delta_\text{f}G^\circ(\mathrm{Al_2O_3}) = -1582\ \text{kJ\,mol}^{-1}$ versus $\Delta_\text{f}G^\circ(\mathrm{Fe_2O_3}) = -742\ \text{kJ\,mol}^{-1}$, aluminium's appetite for oxygen contributes

$$
\Delta G^\circ = -1582 - (-742) = -840\ \text{kJ\,mol}^{-1},
$$

so the overall reaction is strongly spontaneous — spectacularly so, as the thermite reaction demonstrates. Living cells make the same move with ATP: an energetically unfavourable synthesis is written as a sum of steps whose total $\Delta G$ is negative.

<learning-block type="mistake" title="Four classic Gibbs slips">

- **Reading $\Delta G<0$ as "will happen soon".** The diamond-to-graphite conversion has $\Delta G<0$ at room conditions; kinetics ignores thermodynamics entirely. $\Delta G$ predicts possibility and direction, never rate.
- **Celsius in $T\Delta S$.** The $T$ is absolute. Freezing tests done with $T = 0$ instead of $273$ produce nonsense.
- **kJ against J.** $\Delta H$ in kJ and $\Delta S$ in J/K without conversion flips conclusions about which term dominates.
- **Assuming exothermic means spontaneous.** The table in §3 lists two of four cases where $\Delta H<0$ still needs low temperature to cooperate; endothermic processes *can* be spontaneous when entropy rises enough (evaporation does exactly that).

</learning-block>

## Try it yourself

**A.** A reaction has $\Delta H^\circ = -84\ \text{kJ\,mol}^{-1}$, $\Delta S^\circ = +125\ \text{J\,K}^{-1}\text{mol}^{-1}$. Find $\Delta G^\circ$ at $298\ \text{K}$ and classify.

<details><summary>Show the reasoning</summary>

$\Delta G^\circ = -84 - (298.15)(0.125) = -84 - 37.3 = -121.3\ \text{kJ\,mol}^{-1}$. Negative enthalpy *and* positive entropy: the sum is negative at every temperature. Spontaneous at all $T$ — the first row of the sign table.
</details>

**B.** Use $\Delta H_{\text{fus}} = 6.01\ \text{kJ\,mol}^{-1}$ and $\Delta S_{\text{fus}} = 22.0\ \text{J\,K}^{-1}\text{mol}^{-1}$ to decide whether water freezes spontaneously at $263\ \text{K}$ and at $298\ \text{K}$.

<details><summary>Show the reasoning</summary>

For freezing, flip both signs: $\Delta H = -6010\ \text{J\,mol}^{-1}$, $\Delta S = -22.0\ \text{J\,K}^{-1}\text{mol}^{-1}$. At $263\ \text{K}$: $\Delta G = -6010 + (263)(22.0) = -6010 + 5786 = -224\ \text{J\,mol}^{-1} < 0$ — ice forms. At $298\ \text{K}$: $\Delta G = -6010 + 6556 = +546\ \text{J\,mol}^{-1} > 0$ — ice melts instead. And $\Delta H/\Delta S = 6010/22.0 = 273\ \text{K}$: the switch is exactly the melting point, as it must be.
</details>

**C.** A reaction has $\Delta G^\circ = +50\ \text{kJ\,mol}^{-1}$. Suggest, without numbers, how it could still be made to run.

<details><summary>Show the reasoning</summary>

Couple it to a step with $\Delta G^\circ$ more negative than $-50\ \text{kJ\,mol}^{-1}$; enthalpies and Gibbs energies add across summed equations. Industrially this is what reduction with carbon or aluminium does for "unreactive" metal oxides; biologically it is what ATP does. Alternatively change conditions (concentrations), since $\Delta G$ — unlike $\Delta G^\circ$ — depends on the mixture, the subject of the next module.
</details>

## Remember

- $\Delta G = \Delta H - T\Delta S$ *is* the second law rewritten for constant $T$ and $P$: negative $\Delta G$, positive total entropy.
- Sign-pair logic: both favourable $\to$ always; both unfavourable $\to$ never; opposed $\to$ temperature decides, switching at $T = \Delta H/\Delta S$.
- Convert $\Delta S$ to kJ and $T$ to kelvin before computing; these two slips outnumber all others.
- $\Delta_\text{f}G^\circ$ of an element in its standard state is zero; $S^\circ$ of the same element is not.
- Unfavourable steps run when summed with favourable ones — coupling is the only way to "force" thermodynamics, short of changing $T$ or composition.

$\Delta G$ tells you *which way now*; but every real reaction stops at an equilibrium composition somewhere between the ends. The link between $\Delta G^\circ$ and that stopping point — the equilibrium constant — is the last module of the chapter.
