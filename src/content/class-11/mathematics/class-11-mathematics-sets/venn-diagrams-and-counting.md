## Drawing the overlap

Two-set questions can be handled with one subtraction. With three sets the picture gets crowded: a student may like all three subjects, and that one group is counted in three different totals. A Venn diagram turns the bookkeeping into labelled regions, so each person is placed in exactly one box before any arithmetic begins.

Draw a rectangle for the universal set $U$ and one closed curve for each set. With two sets the rectangle is cut into four regions: only $A$, only $B$, both, and neither. With three sets there are eight regions: seven inside at least one curve plus the outside. Labelling regions is usually safer than manipulating formulas.

## 1. Labelling the three-set diagram

Let the three sets be $A$, $B$ and $C$. Name the seven inner regions:

- $a,b,c$: in $A$ only, $B$ only, $C$ only (exactly one set);
- $d,e,f$: in $A\cap B$ only, $B\cap C$ only, $A\cap C$ only (exactly two sets);
- $g$: in $A\cap B\cap C$ (all three);
- $h$: outside all three.

Then the information given in a question translates as

$$
\begin{aligned}
n(A)&=a+d+f+g, & n(B)&=b+d+e+g, & n(C)&=c+e+f+g,\\
n(A\cap B)&=d+g, & n(B\cap C)&=e+g, & n(A\cap C)&=f+g,\\
n(A\cap B\cap C)&=g. & &
\end{aligned}
$$

The practical rule is to start with the innermost region $g$, then find $d,e,f$ by subtracting $g$ from the pairwise intersections, and finally find $a,b,c$ by subtracting the already-known pieces from the single-set totals.

## 2. Deriving the three-set inclusion–exclusion rule

Add the three single-set counts. An element in exactly one set is counted once; one in exactly two sets is counted twice; one in all three is counted three times. Subtracting the three pairwise counts removes the exactly-two elements once (good) but removes the triple element three times, leaving it counted zero times. Adding $n(A\cap B\cap C)$ once restores it:

$$
\boxed{\,n(A\cup B\cup C)=n(A)+n(B)+n(C)-n(A\cap B)-n(B\cap C)-n(A\cap C)+n(A\cap B\cap C)\,}
$$

Checking with the region labels: the right-hand side is

$$
(a+b+c)+2(d+e+f)+3g-(d+e+f)-3g+g=a+b+c+d+e+f+g,
$$

which is exactly the number of elements inside at least one curve.

Two siblings of this formula answer the common "exactly" questions:

$$
\text{exactly one}=n(A)+n(B)+n(C)-2\big[n(A\cap B)+n(B\cap C)+n(A\cap C)\big]+3n(A\cap B\cap C),
$$

$$
\text{exactly two}=n(A\cap B)+n(B\cap C)+n(A\cap C)-3n(A\cap B\cap C).
$$

The first subtracts the extra contributions of the double and triple regions; the second removes the triple region from each pairwise count. "At least two" means exactly two plus the triple region, i.e. the pairwise sum minus twice the triple count.

## 3. Worked example

A survey of $100$ students records drinks liked: $50$ like tea ($T$), $40$ like coffee ($C$), $30$ like juice ($J$); $20$ like tea and coffee, $15$ like coffee and juice, $10$ like tea and juice; $5$ like all three.

Using inclusion–exclusion:

$$
n(T\cup C\cup J)=50+40+30-(20+15+10)+5=120-45+5=80.
$$

So $20$ like none of the three. For the finer counts, work outward from the centre:

- $g=5$ (all three);
- $d=20-5=15$ (tea and coffee only);
- $e=15-5=10$ (coffee and juice only);
- $f=10-5=5$ (tea and juice only);
- $a=50-15-5-5=25$ (tea only);
- $b=40-15-10-5=10$ (coffee only);
- $c=30-10-5-5=10$ (juice only).

Exactly one is $a+b+c=25+10+10=45$, which the formula gives as $120-2(45)+3(5)=45$. Exactly two is $15+10+5=30$, and $45+30+5=80$ confirms the union total.

<learning-block type="mistake" title="Forgetting to add the centre back">

The classic error is stopping at $120-45=75$ and reporting that $25$ students like none. The five who like all three were subtracted three times after being added three times, so they vanished; they must be added back once, giving $80$ and $20$ respectively. A second error is confusing "exactly two" with "at least two". In the example, exactly two is $30$ while at least two is $30+5=35$. Always say which one the question asks for.

</learning-block>

## Try it yourself

**1.** In a club of $150$ members, $80$ play chess, $70$ play bridge, $60$ play scrabble; $30$ play chess and bridge, $25$ bridge and scrabble, $20$ chess and scrabble; $10$ play all three. How many play at least one game?

<details><summary>Show the reasoning</summary>

$n(C\cup B\cup S)=80+70+60-(30+25+20)+10=210-75+10=145$. Hence $5$ members play none.
</details>

**2.** For the club in question 1, how many play exactly one game and how many play exactly two?

<details><summary>Show the reasoning</summary>

Exactly one $=210-2(75)+3(10)=210-150+30=90$. Exactly two $=75-3(10)=45$. Check: $90+45+10=145$, matching the union.
</details>

**3.** Find the seven region counts for the club in question 1.

<details><summary>Show the reasoning</summary>

$g=10$; $d=30-10=20$ (chess and bridge only); $e=25-10=15$ (bridge and scrabble only); $f=20-10=10$ (chess and scrabble only); $a=80-20-10-10=40$; $b=70-20-15-10=25$; $c=60-15-10-10=25$. The inner regions sum to $40+25+25+20+15+10+10=145$, as required.
</details>

## Remember

- Label the innermost intersection first, then work outwards.
- Inclusion–exclusion alternates signs: add singles, subtract pairs, add the triple.
- "At least one" includes every region inside the curves; "exactly two" excludes the centre.
- Check answers by adding the disjoint regions — they must reproduce the union.
- If the implied "neither" count is negative, the given data are inconsistent; say so rather than forcing an answer.

The same counting discipline works with continuous collections. The next lesson moves from finite lists to power sets and intervals.
