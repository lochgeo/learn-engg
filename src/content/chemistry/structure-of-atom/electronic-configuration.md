## Rules for filling the address book

Quantum numbers list the possible homes for electrons; a configuration tells you which homes are actually occupied. Rules are needed because electrons are not poured in randomly — they settle in a definite order decided by energy, mutual repulsion and the strangeness of $4s$ versus $3d$. This module distils the order into three usable rules plus two well-known exceptions, and it is the bridge from one electron in hydrogen to the entire periodic table.

## 1. Rule one: the Aufbau (build-up) principle

Electrons occupy the orbitals of lowest available energy first. But "lowest energy" is not simply a matter of $n$: attraction to the nucleus and repulsion from other electrons make an orbital's energy depend on both its shell and its shape. The useful shortcut is the **$(n+l)$ rule**:

> Fill in order of increasing $n+l$; when two orbitals tie, fill the one with the smaller $n$ first.

| orbital | $n$ | $l$ | $n+l$ | fill order |
| --- | --- | --- | --- | --- |
| 1s | 1 | 0 | 1 | 1 |
| 2s | 2 | 0 | 2 | 2 |
| 2p | 2 | 1 | 3 | 3 |
| 3s | 3 | 0 | 3 | 4 |
| 3p | 3 | 1 | 4 | 5 |
| 4s | 4 | 0 | 4 | 6 |
| 3d | 3 | 2 | 5 | 7 |
| 4p | 4 | 1 | 5 | 8 |
| 5s | 5 | 0 | 5 | 9 |
| 4d | 4 | 2 | 6 | 10 |
| 5p | 5 | 1 | 6 | 11 |
| 6s | 6 | 0 | 6 | 12 |
| 4f | 4 | 3 | 7 | 13 |
| 5d | 5 | 2 | 7 | 14 |
| 6p | 6 | 1 | 7 | 15 |

One tie in the table deserves a glance: $2p$ and $3s$ both have $n+l=3$, and the smaller-$n$ rule puts $2p$ first. And $4s$ fills before $3d$ even though its $n$ is larger: an s orbital penetrates close to the nucleus, dodging the shielding that other electrons create, which lowers its energy below a diffuse $3d$. (The tabulated order is what needs memorising; the physics behind it belongs to shielding and penetration, treated when you study periodic trends.)

### Worked example 1: sodium

Sodium has $Z=11$. Pour electrons along the table: 1s takes 2, 2s takes 2, 2p takes 6, and the last electron goes to 3s:

$$
\mathrm{Na}:\ 1s^{2}\,2s^{2}\,2p^{6}\,3s^{1}=\ [\mathrm{Ne}]\,3s^{1}.
$$

The bracket notation concentrates attention on the valence electron — a lone $3s^1$, which explains sodium's loss of one electron in reactions.

## 2. Rule two: the Pauli exclusion principle

No two electrons in the same atom may have the same set of four quantum numbers. Since an orbital fixes three of them, at most **two electrons can occupy one orbital**, and they must differ in spin: one $m_s=+\frac12$ paired with one $m_s=-\frac12$. This is why capacities are 2, 6, 10, 14 electrons for s, p, d, f subshells — one pair per orbital.

## 3. Rule three: Hund's rule of maximum multiplicity

When electrons enter a set of equal-energy (degenerate) orbitals, they first occupy empty orbitals singly, with parallel spins, before any pairing occurs. Aluminium's $3p^1$ is easy; nitrogen's $2p^3$ is the classic:

$$
\mathrm{N}:2p^{3}\quad
\begin{array}{ccc}
\uparrow & \uparrow & \uparrow
\end{array}
$$

three singly occupied orbitals with parallel spins, rather than one pair and one lone electron. The reason is energetic: separate orbitals are spatially separate regions, so unpaired electrons keep their mutual repulsion down; beyond that, parallel spins gain extra stabilisation from quantum-mechanical **exchange energy** — an effect we return to below, because it also explains the exceptions.

### Worked example 2: iron

$Z=26$: the first 18 electrons give the argon core, then $n+l$ order puts in $4s^2$ before $3d$. Putting the two parts together,

$$
\mathrm{Fe}:\ [\mathrm{Ar}]\,3d^{6}4s^{2}.
$$

The convention is to **write** the configuration in order of $n$ ($3d$ then $4s$) even though $4s$ filled first. Within $3d^6$, Hund's rule applies: five orbitals each receive an electron, and the sixth pairs into one of them, leaving **four unpaired electrons** in iron.

<learning-block type="mistake" title="Configuration errors">

- **Filling $3d$ before $4s$.** The $n+l$ order — $4s$ wins — is what you fill by.
- **Ordering the written configuration by fill order.** Filling follows $n+l$, but the written form is sorted by $n$: $[\mathrm{Ar}]3d^64s^2$ for iron, not $[\mathrm{Ar}]4s^23d^6$.
- **Applying Hund's rule where it does not operate.** It orders electrons *within* a degenerate set only; it says nothing about choosing between $4s$ and $3d$, whose energies differ.
- **Removing electrons from the wrong subshell in ions.** Electrons leave the outermost shell first — $4s$ leaves before $3d$ even though $4s$ was filled first.

</learning-block>

## 4. The anomalies: chromium and copper

Strictly following the rules would give chromium ($Z=24$) $[\mathrm{Ar}]3d^44s^2$ and copper ($Z=29$) $[\mathrm{Ar}]3d^94s^2$. Spectroscopy says otherwise, and the configurations below are the measured ground states:

$$
\mathrm{Cr}:\ [\mathrm{Ar}]\,3d^{5}4s^{1}\qquad\qquad \mathrm{Cu}:\ [\mathrm{Ar}]\,3d^{10}4s^{1}.
$$

One $4s$ electron has moved into the $3d$ set, and the arrangements it produces are **exactly half-filled** ($d^5$) or **fully filled** ($d^{10}$). Both are more stable than the rules alone predict. Two arguments support the shift:

1. **Symmetry.** Half-filled and filled subshells distribute charge evenly about the atom; uneven, lopsided arrangements are slightly less stable.
2. **Exchange energy.** Two parallel, unpaired electrons in different orbitals "exchange" places at no cost and gain stabilisation each time. The number of such exchanges grows steeply as unpaired electrons accumulate. Count them for the disputing chromium states: $3d^5$ offers $\binom{5}{2}=10$ exchange pairs; the rival $3d^44s^2$ offers $\binom42=6$. Four extra stabilising exchanges, at the price of losing the (small) $4s$–$3d$ energy gap, tip the balance towards $d^54s^1$. Copper makes the same trade for a full shell.

The lesson is that the Aufbau order is a habit, not a law: as shells become comparable in energy, occupation can flip them.

## 5. Electron configurations of ions

Ions are made by removing (or adding) electrons from the ground state of the neutral atom, taking first from the outermost shell — the highest $n$:

- $\mathrm{Fe}^{3+}$: from $[\mathrm{Ar}]3d^64s^2$ remove the two $4s$ and one $3d$ → $[\mathrm{Ar}]3d^{5}$ — a half-filled set, which helps explain why Fe³⁺ is a common, stable ion.
- $\mathrm{Cu}^{2+}$: from $[\mathrm{Ar}]3d^{10}4s^1$ remove the lone $4s$ and one $3d$ → $[\mathrm{Ar}]3d^{9}$ — with one unpaired electron, and magnetic evidence confirms it.
- $\mathrm{Cl}^{-}$: add one electron to $[\mathrm{Ne}]3s^23p^5$ → $[\mathrm{Ar}]$ — a closed shell, which is why chlorine stops there rather than carrying on to $3d$.

## 6. Why any of this matters

Configurations are the currency of everything else in chemistry: valence electrons define an element's group, subshell by subshell, and the block structure of the periodic table is nothing but the Aufbau order displayed as a map. Master the three rules and the two anomalies and most periodic-table behaviour becomes readable from the configuration alone.

## Try it yourself

**A.** Write the full ground-state configuration of chlorine ($Z=17$) and state its number of unpaired electrons.

<details><summary>Show the reasoning</summary>

$1s^{2}2s^{2}2p^{6}3s^{2}3p^{5}$, or $[\mathrm{Ne}]3s^{2}3p^{5}$. In $3p^5$, three orbitals hold five electrons: one orbital has a pair, the other two are singly occupied — **one unpaired electron**, which is why chlorine atoms are (mildly) paramagnetic.
</details>

**B.** Give the ground-state configurations of Cu²⁺ and Cr³⁺, and count unpaired electrons in each.

<details><summary>Show the reasoning</summary>

$\mathrm{Cu}^{2+}=[\mathrm{Ar}]3d^{9}$: one unpaired. $\mathrm{Cr}^{3+}=[\mathrm{Ar}]3d^{3}$: three unpaired, all in separate orbitals by Hund's rule. Note both ions lost $4s$ electrons first, even though their neutral atoms fill $4s$ first.
</details>

**C.** A classmate writes nitrogen as $1s^2 2s^2 2p^4$, drawn with two electrons paired in one $2p$ orbital and the remaining pair split singly over the other two orbitals. What exactly is wrong, and what does the correct picture look like?

<details><summary>Show the reasoning</summary>

Two errors at once: nitrogen has $Z=7$, so the count should be $2p^3$, not $2p^4$; and within $2p^3$, Hund's rule demands three singly occupied orbitals with parallel spins $\uparrow\uparrow\uparrow$, not a pair plus a solo. The right configuration is $1s^{2}2s^{2}2p^{3}$ with three unpaired electrons.
</details>

## Remember

- Fill by the $(n+l)$ rule, ties going to smaller $n$: $\ldots 3p$, then $4s$, then $3d$; write the final configuration sorted by $n$.
- Pauli: two electrons maximum per orbital, spins opposed; capacities 2, 6, 10, 14.
- Hund: degenerate orbitals fill singly, spins parallel, before pairing — driven by lower repulsion and exchange energy.
- Cr is $[\mathrm{Ar}]3d^{5}4s^{1}$ and Cu is $[\mathrm{Ar}]3d^{10}4s^{1}$: half-filled and fully filled sets are extra stable.
- Ions are made by losing outermost ($4s$ before $3d$ in the metals) and gaining into the open subshell.
- Next comes the practice module, where every tool of this chapter is called for in mixed problems.
