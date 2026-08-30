---
title: Fonctions d'une variable réelle
description: Dérivées des fonctions usuelles, sommes, produits, quotients, inverses et formes composées. Six exercices et 53 dérivées, avec indices et solutions détaillées.
interactif: true
annee: A1
matiere: Mathématiques
ordre: 1
icone: i-lucide-trending-up
---

::rappel{titre="La boîte à outils du cours"}
**Tableau des dérivées usuelles (section 4)** :

| $f(x)$ | $f'(x)$ |
|---|---|
| $k$ (constante) | $0$ |
| $x^\alpha$ (tout $\alpha$) | $\alpha x^{\alpha-1}$ |
| $x$ | $1$ |
| $x^2$ | $2x$ |
| $\dfrac{1}{x} = x^{-1}$ | $-\dfrac{1}{x^2}$ |
| $\dfrac{1}{x^n} = x^{-n}$ | $-\dfrac{n}{x^{n+1}}$ |
| $\sqrt{x} = x^{1/2}$ | $\dfrac{1}{2\sqrt{x}}$ |
| $\dfrac{1}{\sqrt{x}} = x^{-1/2}$ | $-\dfrac{1}{2x\sqrt{x}}$ |
| $\ln(x)$ | $\dfrac{1}{x}$ |
| $e^x$ | $e^x$ |
| $\sin(x)$ | $\cos(x)$ |
| $\cos(x)$ | $-\sin(x)$ |

La ligne $x^\alpha$ contient toutes les lignes en puissances : c'est celle à retenir en priorité, les autres s'en déduisent en réécrivant la fonction sous forme de puissance.

**Formes composées** :

- **Prop 3.2** (composée) : $(u\circ v)'(x) = v'(x)\times u'(v(x))$
- **Prop 3.3** (puissance) : $(u^n)' = n\,u'\,u^{n-1}$
- **Prop 3.4** (racine) : $(\sqrt{u})' = \dfrac{u'}{2\sqrt{u}}$
- **Prop 3.5** (inverse) : $\left(\dfrac{1}{u}\right)' = -\dfrac{u'}{u^2}$
- **Tableau section 5** : $(e^u)' = u'e^u$, $(\ln u)' = \dfrac{u'}{u}$, $(\sin u)' = u'\cos u$, $(\cos u)' = -u'\sin u$, et en particulier $\big(\cos(ax+b)\big)' = -a\sin(ax+b)$.

**Opérations** : $(u+v)' = u'+v'$, $(k\,u)' = k\,u'$, $(uv)' = u'v+uv'$, $\left(\dfrac{u}{v}\right)' = \dfrac{u'v-uv'}{v^2}$.

**La démarche, toujours la même, en 3 étapes** :

1. **Reconnaître la structure** de $f$ : somme ? produit $uv$ ? quotient $\dfrac{u}{v}$ ? forme composée ($\dfrac{1}{u}$, $\sqrt{u}$, $u^n$, $e^u$, $\ln u$…) ? *Et avant tout : l'écriture se simplifie-t-elle ?*
2. **Poser les briques** : écrire $u$ (et $v$), calculer $u'$ (et $v'$).
3. **Appliquer la formule**, puis **simplifier** : développer, mettre au même dénominateur, factoriser.
::

:::fiche{titre="Fiche de révision — Fonctions d'une variable réelle" resume="Le cours en condensé, plus un exemple entièrement traité pour chaque type de dérivée rencontré dans les exercices. Les exemples portent sur d'autres fonctions que les énoncés : ils montrent la méthode sans livrer la réponse."}
### 1. Continuité

Une fonction est **continue** quand sa courbe se trace sans lever le crayon : ni saut, ni trou. La définition rigoureuse (Déf 1.1) demande que la limite à gauche, la limite à droite et la valeur coïncident :

$$
f \text{ continue en } x_0 \iff \lim_{x\to x_0^-}f(x) = \lim_{x\to x_0^+}f(x) = f(x_0)
$$

Sont continus (Prop 1.1) : les **polynômes** sur $\mathbb{R}$, les **fonctions rationnelles** sur leur domaine, la **racine carrée** sur $[0,+\infty[$ — ainsi que toute somme, produit, quotient à dénominateur non nul ou composée de fonctions continues (Prop 1.3, 1.4).

::exemple{id="fvr-continuite" titre="Vérifier la continuité d'une fonction définie par morceaux" pour="Le raccord entre deux morceaux : trois valeurs à comparer"}
Soit $g$ définie par $g(x) = x+2$ si $x < 0$ et $g(x) = x^2$ si $x \geqslant 0$. Est-elle continue en $0$ ?

$$
\lim_{x\to 0^-}g(x) = 0+2 = 2 \qquad \lim_{x\to 0^+}g(x) = 0 \qquad g(0) = 0
$$

La limite à gauche vaut $2$, celle à droite $0$ : elles diffèrent, la fonction fait un **saut**. Elle n'est **pas** continue en $0$.

Le même calcul mené sur $h(x) = x$ si $x<1$ et $h(x) = \dfrac1x$ si $x\geqslant 1$ donne $1$, $1$ et $1$ : les trois valeurs coïncident, donc $h$ est continue en $1$.

Deux cas de référence : la **valeur absolue** est continue sur $\mathbb{R}$ (les deux morceaux se recollent en $0$) ; la **partie entière** ne l'est pas, elle saute à chaque entier — $E(0{,}9) = 0$ mais $E(1) = 1$.
::

### 2. Théorème des valeurs intermédiaires

Si $f$ est **continue** sur $[a,b]$, elle prend **toutes** les valeurs comprises entre $f(a)$ et $f(b)$ : sans saut, impossible d'enjamber une valeur. Usage principal : prouver qu'une équation admet une solution. Si de plus $f$ est **strictement monotone**, cette solution est **unique** (théorème de la bijection, Théorème 6.1).

::exemple{id="fvr-tvi" titre="Prouver qu'une équation admet une solution, et une seule" pour="Le TVI, puis la stricte monotonie pour l'unicité"}
Montrons que $x^3+x-1 = 0$ admet une solution dans $[0,1]$.

On pose $f(x) = x^3+x-1$ : c'est un polynôme, donc $f$ est continue. On évalue aux bornes :

$$
f(0) = -1 < 0 \qquad f(1) = 1 > 0
$$

$0$ est compris entre $-1$ et $1$ : le TVI garantit l'existence d'un $c\in[0,1]$ tel que $f(c) = 0$.

**Pour l'unicité**, on ajoute la monotonie : $f'(x) = 3x^2+1 > 0$ pour tout $x$, donc $f$ est strictement croissante sur $\mathbb{R}$. Elle ne peut donc prendre la valeur $0$ qu'une seule fois : la solution est **unique**, y compris sur $\mathbb{R}$ tout entier.
::

### 3. Dérivabilité : la définition

$$
f'(a) = \lim_{h\to 0}\frac{f(a+h)-f(a)}{h} = \lim_{x\to a}\frac{f(x)-f(a)}{x-a}
$$

Le quotient $\dfrac{f(x)-f(a)}{x-a}$ est la **pente de la corde** entre les points d'abscisses $a$ et $x$. Quand $x$ se rapproche de $a$, la corde devient la tangente : $f'(a)$ est la **pente de la tangente** au point d'abscisse $a$.

⚠️ **Dérivable entraîne continue, mais pas l'inverse** (Prop 3.1). Deux contre-exemples à connaître :

- $\lvert x\rvert$ en $0$ : le taux d'accroissement vaut $\dfrac{\lvert h\rvert}{h}$, soit $-1$ à gauche et $+1$ à droite. Pas de limite unique, donc pas de dérivée — la courbe forme un angle.
- $\sqrt{x}$ en $0$ : le taux vaut $\dfrac{\sqrt h}{h} = \dfrac{1}{\sqrt h}\to+\infty$. Pas dérivable non plus, la tangente est **verticale**.

::exemple{id="fvr-definition-derivee" titre="Calculer une dérivée avec la définition" pour="Quand l'énoncé demande de revenir au taux d'accroissement"}
Prenons $f(x) = (1-x)^2$ et calculons $f'(a)$ à la main.

$$
\frac{f(a+h)-f(a)}{h} = \frac{(1-a-h)^2-(1-a)^2}{h}
$$

On reconnaît $A^2-B^2 = (A-B)(A+B)$ avec $A = 1-a-h$ et $B = 1-a$, donc $A-B = -h$ et $A+B = 2-2a-h$ :

$$
= \frac{-h\,(2-2a-h)}{h} = -(2-2a-h) \xrightarrow[h\to 0]{} -(2-2a) = 2a-2
$$

Donc $f'(a) = 2a-2$. On retrouve bien ce que donnerait la formule des composées : $\big((1-x)^2\big)' = 2(1-x)\times(-1) = 2x-2$.
::

### 4. Le tableau des dérivées usuelles

C'est la base de tout le chapitre — à savoir par cœur, dans les deux sens.

| $f(x)$ | $f'(x)$ | comment le retenir |
|---|---|---|
| $k$ (constante) | $0$ | une constante ne varie pas |
| $x$ | $1$ | |
| $x^2$ | $2x$ | |
| $x^3$ | $3x^2$ | |
| $x^\alpha$ (tout $\alpha$) | $\alpha x^{\alpha-1}$ | l'exposant descend, puis perd $1$ |
| $\dfrac{1}{x} = x^{-1}$ | $-\dfrac{1}{x^2}$ | le cas $\alpha = -1$ |
| $\dfrac{1}{x^n} = x^{-n}$ | $-\dfrac{n}{x^{n+1}}$ | le cas $\alpha = -n$ |
| $\sqrt{x} = x^{1/2}$ | $\dfrac{1}{2\sqrt{x}}$ | le cas $\alpha = \tfrac12$ |
| $\dfrac{1}{\sqrt{x}} = x^{-1/2}$ | $-\dfrac{1}{2x\sqrt{x}}$ | le cas $\alpha = -\tfrac12$ |
| $\ln x$ | $\dfrac{1}{x}$ | sur $]0,+\infty[$ |
| $e^x$ | $e^x$ | sa propre dérivée |
| $\sin x$ | $\cos x$ | |
| $\cos x$ | $-\sin x$ | c'est le cosinus qui prend le signe moins |

La ligne $x^\alpha$ **contient** toutes les autres lignes en puissances : c'est elle qu'il faut retenir en priorité, les autres s'en déduisent en réécrivant la fonction sous forme de puissance.

**Opérations** :

$$
(u+v)' = u'+v' \qquad (k\,u)' = k\,u' \qquad (uv)' = u'v+uv' \qquad \left(\frac{u}{v}\right)' = \frac{u'v-uv'}{v^2}
$$

::exemple{id="fvr-somme" titre="Dériver une somme, terme à terme" pour="Exercice 1 — la lecture directe du tableau"}
Soit $f(x) = 4x^3-6\sqrt{x}+\dfrac{7}{x}-9$. On traite **chaque terme séparément**, en sortant les coefficients :

$$
(4x^3)' = 4\times 3x^2 = 12x^2
$$

$$
(-6\sqrt{x})' = -6\times\frac{1}{2\sqrt{x}} = -\frac{3}{\sqrt{x}}
$$

$$
\left(\frac{7}{x}\right)' = 7\times\left(-\frac{1}{x^2}\right) = -\frac{7}{x^2}
$$

$$
(-9)' = 0
$$

En sommant :

$$
f'(x) = 12x^2-\frac{3}{\sqrt{x}}-\frac{7}{x^2}
$$

Les deux erreurs classiques : **oublier le $\tfrac12$** de la dérivée de la racine, et croire qu'une constante additive laisse une trace — elle disparaît complètement.
::

::exemple{id="fvr-puissances-negatives" titre="Réécrire en puissance quand le tableau ne s'applique pas tel quel" pour="Exercice 1 — racines au dénominateur, puissances de x au dénominateur"}
Le tableau ne contient pas $\dfrac{1}{x^3}$ ni $\dfrac{1}{\sqrt x}$ tels quels. On les réécrit en puissance, puis on applique $(x^\alpha)' = \alpha x^{\alpha-1}$.

**Cas $\dfrac{1}{x^3}$.** On écrit $x^{-3}$, donc

$$
\left(\frac{1}{x^3}\right)' = -3x^{-4} = -\frac{3}{x^4}
$$

**Cas $\dfrac{1}{\sqrt x}$.** On écrit $x^{-1/2}$, donc

$$
\left(\frac{1}{\sqrt x}\right)' = -\frac12 x^{-3/2} = -\frac{1}{2x\sqrt{x}}
$$

en utilisant $x^{3/2} = x\times x^{1/2} = x\sqrt{x}$ pour revenir à une écriture lisible.

**Cas $x\sqrt{x}$.** C'est $x^{3/2}$, donc sa dérivée vaut $\dfrac32 x^{1/2} = \dfrac{3\sqrt{x}}{2}$.

La règle générale : dès qu'apparaît une racine ou un $x$ au dénominateur, **passer en exposant** rend la situation immédiatement lisible.
::

::exemple{id="fvr-produit" titre="Dériver un produit avec la formule (uv)′ = u′v + uv′" pour="Exercice 2 — poser u et v, puis appliquer"}
Soit $f(x) = (3x+1)(x^2-2)$. On pose les briques avant tout calcul :

$$
u = 3x+1,\quad u' = 3 \qquad v = x^2-2,\quad v' = 2x
$$

$$
f'(x) = u'v+uv' = 3(x^2-2)+(3x+1)\times 2x
$$

On développe puis on réduit :

$$
f'(x) = 3x^2-6+6x^2+2x = 9x^2+2x-6
$$

**Vérification par l'autre chemin** : en développant d'abord, $f(x) = 3x^3+x^2-6x-2$, dont la dérivée terme à terme vaut $9x^2+2x-6$. Les deux méthodes concordent — et sur un produit de deux polynômes courts, développer d'abord est souvent plus rapide.
::

::exemple{id="fvr-simplifier" titre="Simplifier l'écriture avant de dériver" pour="Exercice 2 — le réflexe qui évite un calcul inutile"}
Avant d'appliquer une formule, il faut toujours se demander si l'expression se simplifie.

**Premier cas.** $f(x) = x^3\times\dfrac{1}{x^2}$. Inutile de sortir la formule du produit : $f(x) = x$, donc $f'(x) = 1$.

*Par le produit, on retrouverait la même chose, en trois fois plus de temps :* $u = x^3$, $u' = 3x^2$, $v = x^{-2}$, $v' = -2x^{-3}$, d'où $f' = 3x^2\times x^{-2}+x^3\times(-2x^{-3}) = 3-2 = 1$.

**Second cas.** $f(x) = \dfrac{x+1}{\sqrt{x}}$. Ce n'est pas un quotient à traiter comme tel : on sépare les deux termes.

$$
f(x) = \frac{x}{\sqrt x}+\frac{1}{\sqrt x} = \sqrt{x}+x^{-1/2}
$$

$$
f'(x) = \frac{1}{2\sqrt{x}}-\frac{1}{2x\sqrt{x}}
$$

Une somme de deux fonctions du tableau, là où la formule du quotient aurait demandé un long calcul.
::

::exemple{id="fvr-puissance-n" titre="Dériver une puissance de fonction : (uⁿ)′ = n u′ uⁿ⁻¹" pour="Exercice 2 — une parenthèse élevée à une puissance"}
Ne jamais développer une parenthèse élevée à une puissance : la **Prop 3.3** fait le travail.

$$
\big((2x+5)^4\big)' = 4\times \underbrace{2}_{u'}\times(2x+5)^3 = 8(2x+5)^3
$$

$$
\big((x^2+1)^3\big)' = 3\times\underbrace{2x}_{u'}\times(x^2+1)^2 = 6x(x^2+1)^2
$$

La structure est toujours la même : on **descend l'exposant**, on **abaisse la puissance de $1$**, et on **multiplie par la dérivée de l'intérieur**. C'est ce dernier facteur qu'on oublie le plus souvent.
::

### 5. Les formes composées

Toutes les formules ci-dessous sont un seul et même principe, la **dérivée en chaîne** (Prop 3.2) :

$$
(u\circ v)'(x) = v'(x)\times u'\big(v(x)\big)
$$

autrement dit *dérivée de l'extérieur, évaluée en l'intérieur, multipliée par la dérivée de l'intérieur*. Le facteur $u'$ qui apparaît partout, c'est cette « dérivée de l'intérieur ».

| Forme | Dérivée | Référence |
|---|---|---|
| $u^n$ | $n\,u'\,u^{n-1}$ | Prop 3.3 |
| $\sqrt{u}$ | $\dfrac{u'}{2\sqrt{u}}$ | Prop 3.4 |
| $\dfrac{1}{u}$ | $-\dfrac{u'}{u^2}$ | Prop 3.5 |
| $e^u$ | $u'e^u$ | section 5 |
| $\ln u$ | $\dfrac{u'}{u}$ | section 5 |
| $\sin u$ | $u'\cos u$ | section 5 |
| $\cos u$ | $-u'\sin u$ | section 5 |

En particulier $\big(\sin(ax+b)\big)' = a\cos(ax+b)$ et $\big(\cos(ax+b)\big)' = -a\sin(ax+b)$.

::exemple{id="fvr-inverse" titre="Dériver un inverse : (1/u)′ = −u′/u²" pour="Exercice 3 — la proposition 3.5"}
Le schéma ne varie jamais : on nomme $u$ le dénominateur, on calcule $u'$, on écrit $-\dfrac{u'}{u^2}$.

**Premier exemple.** $f(x) = \dfrac{1}{x^3+x}$, donc $u = x^3+x$ et $u' = 3x^2+1$ :

$$
f'(x) = -\frac{3x^2+1}{(x^3+x)^2}
$$

**Deuxième exemple.** $f(x) = \dfrac{1}{2x-7}$, donc $u = 2x-7$ et $u' = 2$ :

$$
f'(x) = -\frac{2}{(2x-7)^2}
$$

Trois points de vigilance : le **signe moins** est dans la formule et ne s'oublie pas ; le dénominateur est **au carré** ; et $u^2$ signifie bien $(u)^2$, parenthèses comprises — écrire $2x-7^2$ n'aurait aucun sens.
::

::exemple{id="fvr-inverse-racine" titre="Un inverse dont le dénominateur contient une racine" pour="Exercice 3 — quand u n'est pas un polynôme"}
Soit $f(x) = \dfrac{1}{\sqrt{x}-2}$. La formule est la même, seul $u'$ demande un peu d'attention.

$$
u = \sqrt{x}-2 \qquad u' = \frac{1}{2\sqrt{x}}
$$

La constante $-2$ disparaît en dérivant, et il ne reste que la dérivée de la racine. D'où

$$
f'(x) = -\frac{u'}{u^2} = -\frac{\dfrac{1}{2\sqrt{x}}}{(\sqrt{x}-2)^2} = -\frac{1}{2\sqrt{x}\,(\sqrt{x}-2)^2}
$$

La dernière étape est une simple division de fractions : diviser par $(\sqrt x-2)^2$ revient à le faire passer au dénominateur.

⚠️ **Lire l'énoncé avec soin** : $\dfrac{1}{\sqrt{x}-2}$ et $\dfrac{1}{\sqrt{x-2}}$ sont deux fonctions différentes. Dans le premier cas la racine ne porte que sur $x$ ; dans le second elle porte sur tout $x-2$, et alors $u = x-2$ avec $u' = 1$, ce qui donne $\big(\sqrt{x-2}\big)' = \dfrac{1}{2\sqrt{x-2}}$.
::

::exemple{id="fvr-constante-numerateur" titre="Une constante au numérateur : k/u au lieu de 1/u" pour="Exercice 3 — la constante sort, elle ne perturbe rien"}
Une constante multiplicative sort de la dérivée. On écrit donc $\dfrac{k}{u} = k\times\dfrac{1}{u}$, on dérive $\dfrac1u$, et on remultiplie par $k$ à la fin.

**Premier exemple.** $f(x) = \dfrac{4}{x^2+3}$, avec $u = x^2+3$ et $u' = 2x$ :

$$
f'(x) = 4\times\left(-\frac{2x}{(x^2+3)^2}\right) = -\frac{8x}{(x^2+3)^2}
$$

**Deuxième exemple, avec un signe.** $f(x) = -\dfrac{5}{2x+1}$, avec $u = 2x+1$ et $u' = 2$ :

$$
f'(x) = -5\times\left(-\frac{2}{(2x+1)^2}\right) = \frac{10}{(2x+1)^2}
$$

Les deux signes moins se compensent : la dérivée est **positive**. C'est le genre de détail qu'il faut poser calmement plutôt que de le traiter de tête.
::

::exemple{id="fvr-quotient" titre="Dériver un quotient : (u/v)′ = (u′v − uv′)/v²" pour="Exercice 4 — la formule et l'ordre des termes"}
Soit $f(x) = \dfrac{3x+2}{x-4}$. On pose les quatre ingrédients avant tout :

$$
u = 3x+2,\quad u' = 3 \qquad v = x-4,\quad v' = 1
$$

$$
f'(x) = \frac{u'v-uv'}{v^2} = \frac{3(x-4)-(3x+2)\times 1}{(x-4)^2}
$$

On développe le numérateur **en gardant les parenthèses** jusqu'au bout :

$$
3x-12-3x-2 = -14 \qquad\text{donc}\qquad f'(x) = -\frac{14}{(x-4)^2}
$$

Deux réflexes : le numérateur commence par $u'$, **dans cet ordre** — écrire $uv'-u'v$ donne l'opposé ; et le signe moins doit être distribué sur **tout** le second produit, pas seulement sur son premier terme.
::

::exemple{id="fvr-quotient-racine" titre="Un quotient contenant une racine" pour="Exercice 4 — nettoyer une fraction à étages"}
Soit $f(x) = \dfrac{\sqrt{x}}{x+3}$, avec $u = \sqrt x$, $u' = \dfrac{1}{2\sqrt x}$, $v = x+3$, $v' = 1$.

$$
f'(x) = \frac{\dfrac{1}{2\sqrt x}(x+3)-\sqrt{x}}{(x+3)^2}
$$

Cette écriture est correcte mais illisible : il reste une fraction dans la fraction. On **multiplie numérateur et dénominateur par $2\sqrt x$** pour la faire disparaître :

$$
f'(x) = \frac{(x+3)-2\sqrt{x}\times\sqrt{x}}{2\sqrt{x}\,(x+3)^2} = \frac{(x+3)-2x}{2\sqrt{x}\,(x+3)^2} = \frac{3-x}{2\sqrt{x}\,(x+3)^2}
$$

en utilisant $\sqrt x\times\sqrt x = x$. C'est la manœuvre standard dès qu'une racine apparaît dans un quotient.
::

::exemple{id="fvr-quotient-signe" titre="Un dénominateur de la forme a − x : la source d'erreurs numéro un" pour="Exercice 4 — quand v′ vaut −1"}
Soit $f(x) = \dfrac{x+2}{3-x}$. Ici $v = 3-x$, donc

$$
v' = -1
$$

C'est là que tout se joue. En appliquant la formule :

$$
f'(x) = \frac{1\times(3-x)-(x+2)\times(-1)}{(3-x)^2} = \frac{3-x+x+2}{(3-x)^2} = \frac{5}{(3-x)^2}
$$

Le produit $-(x+2)\times(-1)$ donne $+(x+2)$ : **deux signes moins qui se compensent**. Poser $v'$ explicitement avant de substituer évite l'erreur presque à coup sûr.
::

::exemple{id="fvr-quotient-simplifier" titre="Un quotient dont le numérateur ressemble au dénominateur" pour="Exercice 4 — se ramener à une constante plus un inverse"}
Soit $f(x) = \dfrac{x^2+3}{x^2+1}$. Numérateur et dénominateur ne diffèrent que d'une constante : on fait apparaître le dénominateur au numérateur.

$$
f(x) = \frac{(x^2+1)+2}{x^2+1} = 1+\frac{2}{x^2+1}
$$

Il ne reste qu'un inverse à dériver, avec $u = x^2+1$ et $u' = 2x$ :

$$
f'(x) = 0+2\times\left(-\frac{2x}{(x^2+1)^2}\right) = -\frac{4x}{(x^2+1)^2}
$$

**Vérification par la formule du quotient** :

$$
\frac{2x(x^2+1)-(x^2+3)\,2x}{(x^2+1)^2} = \frac{2x\big[(x^2+1)-(x^2+3)\big]}{(x^2+1)^2} = \frac{2x\times(-2)}{(x^2+1)^2} = -\frac{4x}{(x^2+1)^2}
$$

Même résultat — mais la première méthode donne la forme factorisée sans effort, et cette forme est bien plus commode pour étudier un signe.
::

::exemple{id="fvr-exp" titre="Dériver une exponentielle composée, et factoriser ensuite" pour="Exercice 6 — la forme e^u"}
La formule est $(e^u)' = u'e^u$ : l'exponentielle reste intacte, et la dérivée de l'exposant vient devant.

$$
\big(e^{3x-1}\big)' = 3e^{3x-1} \qquad \big(e^{-3x}\big)' = -3e^{-3x} \qquad \big(e^{x^2+x}\big)' = (2x+1)e^{x^2+x}
$$

**En produit avec un polynôme.** Soit $f(x) = e^x(x^2-4x)$. On applique $(uv)' = u'v+uv'$ avec $u = e^x$ :

$$
f'(x) = e^x(x^2-4x)+e^x(2x-4) = e^x\big(x^2-4x+2x-4\big) = e^x(x^2-2x-4)
$$

**Le réflexe de rédaction** : toujours **factoriser par l'exponentielle** à la fin. Comme $e^x > 0$, le signe de $f'$ se lit alors directement sur le polynôme restant — c'est exactement ce dont on a besoin pour un tableau de variations.
::

::exemple{id="fvr-ln" titre="Dériver un logarithme composé" pour="Exercice 6 — la forme ln u"}
La formule est $(\ln u)' = \dfrac{u'}{u}$ : la dérivée de l'intérieur au numérateur, l'intérieur au dénominateur.

$$
\big(\ln(3x^2+2)\big)' = \frac{6x}{3x^2+2} \qquad \big(\ln(5x)\big)' = \frac{5}{5x} = \frac{1}{x}
$$

Le second calcul mérite un mot : la dérivée de $\ln(5x)$ est **la même** que celle de $\ln x$. C'est cohérent, puisque $\ln(5x) = \ln 5+\ln x$ ne diffère de $\ln x$ que d'une constante.

**En produit.** $\big(x\ln x\big)' = 1\times\ln x+x\times\dfrac1x = \ln x+1$.

⚠️ Ne pas confondre $\big(\ln u\big)' = \dfrac{u'}{u}$ avec $\dfrac{1}{u}$ tout court : oublier le $u'$ est l'erreur la plus fréquente du chapitre.
::

::exemple{id="fvr-trigo" titre="Dériver un sinus ou un cosinus composé" pour="Exercice 6 — les formes sin(ax+b) et cos(ax+b)"}
$$
\big(\sin(3x)\big)' = 3\cos(3x) \qquad \big(\cos(4x+1)\big)' = -4\sin(4x+1)
$$

Le coefficient devant $x$ sort en facteur, et **seul le cosinus produit un signe moins** en étant dérivé.

**En produit avec $x$.** Soit $f(x) = x\sin(3x+2)$, avec $u = x$ et $v = \sin(3x+2)$ :

$$
f'(x) = 1\times\sin(3x+2)+x\times 3\cos(3x+2) = \sin(3x+2)+3x\cos(3x+2)
$$

**En puissance.** $\big(\sin^3x\big)'$ se lit comme $(u^3)'$ avec $u = \sin x$ :

$$
\big(\sin^3 x\big)' = 3\times\cos x\times\sin^2x = 3\sin^2x\cos x
$$
::

::exemple{id="fvr-racine-composee" titre="Dériver une racine composée : (√u)′ = u′/(2√u)" pour="Exercice 6 — la proposition 3.4"}
$$
\big(\sqrt{x^2+9}\big)' = \frac{2x}{2\sqrt{x^2+9}} = \frac{x}{\sqrt{x^2+9}} \qquad \big(\sqrt{3x-1}\big)' = \frac{3}{2\sqrt{3x-1}}
$$

Dans le premier cas, le $2$ du numérateur se simplifie avec celui du dénominateur : la simplification finale fait partie du travail attendu.

**Le domaine.** $\sqrt{u}$ est **définie** là où $u \geqslant 0$, mais **dérivable** seulement là où $u > 0$. En un point où $u$ s'annule, la tangente est verticale et la dérivée n'existe pas.
::

::exemple{id="fvr-compose-empilee" titre="Deux formes composées emboîtées" pour="Exercice 6 — un inverse dont le dénominateur contient une racine composée"}
Soit $f(x) = \dfrac{1}{\sqrt{x+2}+3}$. On procède **de l'extérieur vers l'intérieur**, une couche à la fois.

**Couche extérieure** : c'est un inverse, $\dfrac1u$ avec $u = \sqrt{x+2}+3$.

**Couche intérieure** : $u$ est une racine composée, à laquelle on applique la Prop 3.4 avec l'intérieur $x+2$, de dérivée $1$ :

$$
u' = \frac{1}{2\sqrt{x+2}}
$$

On assemble avec $\left(\dfrac1u\right)' = -\dfrac{u'}{u^2}$ :

$$
f'(x) = -\frac{\dfrac{1}{2\sqrt{x+2}}}{\big(\sqrt{x+2}+3\big)^2} = -\frac{1}{2\sqrt{x+2}\,\big(\sqrt{x+2}+3\big)^2}
$$

La méthode vaut pour tous les empilements : identifier la structure la plus extérieure, appliquer sa formule, et traiter $u'$ comme un sous-problème à part entière.
::

### 6. Où une fonction est-elle dérivable ?

Les justifications attendues, à réciter :

- **polynôme** : dérivable sur $\mathbb{R}$ ;
- **quotient** : dérivable partout où le **dénominateur ne s'annule pas** ;
- **$\sqrt{u}$** : définie où $u \geqslant 0$, dérivable où $u > 0$ ;
- **$\ln u$** : il faut $u > 0$ ; **$e^u$** : aucune contrainte.

::exemple{id="fvr-domaine" titre="Justifier un ensemble de dérivabilité" pour="Exercice 5 — la phrase de justification attendue"}
La réponse tient toujours en une ligne : on nomme la structure, puis la condition qu'elle impose.

- $P(x) = x^3-2x+1$ : **polynôme**, donc dérivable sur $\mathbb{R}$.
- $f(x) = \dfrac{2x+1}{x-3}$ : **quotient** de deux polynômes, dérivable là où le dénominateur ne s'annule pas, soit sur $\mathbb{R}\setminus\{3\}$.
- $f(x) = \ln(x-1)$ : il faut $x-1 > 0$, donc sur $]1,+\infty[$.

**Le piège à ne pas manquer.** Pour $f(x) = \dfrac{1}{x^2+x+1}$, le réflexe « quotient, donc privé de quelque chose » est faux. On calcule le discriminant :

$$
\Delta = 1^2-4\times 1\times 1 = -3 < 0
$$

Le dénominateur ne s'annule **jamais** : $f$ est dérivable sur $\mathbb{R}$ **tout entier**. Toujours vérifier le discriminant avant d'exclure des valeurs.
::

::exemple{id="fvr-domaine-racine" titre="Racine carrée : définie en un point sans y être dérivable" pour="Exercice 5 — la distinction domaine de définition / domaine de dérivabilité"}
$\sqrt{x}$ est parfaitement définie en $0$, et pourtant elle n'y est pas dérivable. Le taux d'accroissement le montre :

$$
\frac{\sqrt{h}-\sqrt{0}}{h} = \frac{\sqrt h}{h} = \frac{1}{\sqrt h} \xrightarrow[h\to 0^+]{} +\infty
$$

La limite est infinie : pas de nombre dérivable en $0$, la tangente y est **verticale**. D'où la rédaction attendue :

> $\sqrt{x}$ est définie sur $[0,+\infty[$ et dérivable sur $]0,+\infty[$, de dérivée $\dfrac{1}{2\sqrt x}$.

La même distinction vaut pour $\sqrt{u}$ : par exemple $\sqrt{x-4}$ est définie sur $[4,+\infty[$ mais dérivable seulement sur $]4,+\infty[$.
::

### 7. Bijections

**Théorème de la bijection (Théorème 6.1)** : si $f$ est **continue** et **strictement monotone** sur un intervalle $I$, alors $f$ réalise une bijection de $I$ sur $f(I)$ — chaque valeur est atteinte une fois et une seule, donc $f^{-1}$ existe. Et si $f'$ ne s'annule pas :

$$
\big(f^{-1}\big)'(y) = \frac{1}{f'\big(f^{-1}(y)\big)}
$$

::exemple{id="fvr-bijection" titre="Dériver une fonction réciproque" pour="La formule appliquée à deux cas connus, pour la vérifier"}
**Premier cas.** $f(x) = x^2$ sur $[0,+\infty[$ est continue et strictement croissante : c'est une bijection de $[0,+\infty[$ sur $[0,+\infty[$, de réciproque $f^{-1}(y) = \sqrt{y}$. La formule doit redonner la dérivée de la racine :

$$
\big(f^{-1}\big)'(y) = \frac{1}{f'(\sqrt y)} = \frac{1}{2\sqrt y}
$$

C'est bien la dérivée connue de $\sqrt{y}$.

**Second cas.** $\exp$ est une bijection de $\mathbb{R}$ sur $]0,+\infty[$, de réciproque $\ln$. Comme $\exp' = \exp$ :

$$
(\ln)'(y) = \frac{1}{e^{\ln y}} = \frac{1}{y}
$$

C'est exactement ainsi que le cours *Fonctions usuelles* construit le logarithme et sa dérivée.
::

### La démarche, toujours la même

1. **Simplifier l'écriture si possible** — c'est le réflexe qui fait gagner le plus de temps.
2. **Identifier la structure** : somme ? produit ? quotient ? forme composée ?
3. **Poser $u$ et $v$, écrire $u'$ et $v'$**, appliquer la formule, puis **simplifier** : développer, mettre au même dénominateur, factoriser.

### Les pièges à retenir

- $\sqrt{x}$ est définie en $0$ mais **pas dérivable** en $0$ ; de même pour $\sqrt u$ là où $u$ s'annule.
- $\lvert x\rvert$ est continue partout, pas dérivable en $0$ : **continue n'implique pas dérivable**.
- Le numérateur de la formule du quotient est $u'v-uv'$, **dans cet ordre**.
- $v' = -1$ pour $v = 1-x$ : la principale source d'erreurs de signe.
- Une constante multiplicative **sort** de la dérivée ; une constante additive **disparaît**.
- Dans toutes les formes composées, le facteur $u'$ s'oublie facilement — c'est lui qu'il faut écrire en premier.
:::


:::exercice{titre="Exercice 1" theme="Sommes de fonctions élémentaires"}
Déterminer la fonction dérivée des fonctions suivantes. Ce sont des sommes : on dérive **terme à terme**, chaque terme se lisant directement dans le tableau de la section 4.

::question{label="1."}
$f(x) = 2x+1$

#indice
La dérivation est linéaire : la dérivée d'une somme est la somme des dérivées. Et souviens-toi qu'une constante ne varie pas… donc sa dérivée est nulle.

Le même travail sur une autre somme : :voir-exemple[dériver une somme terme à terme]{id="fvr-somme"}.

#solution
Dérivation terme à terme : $(2x)' = 2$ et $(1)' = 0$, puisque la dérivée d'une constante est nulle.

$$
\boxed{f'(x) = 2}
$$

C'est cohérent : le graphe de $f$ est une droite de coefficient directeur $2$, et la pente d'une droite est la même en tout point.
::

::question{label="2."}
$f(x) = x^2-3x$

#indice
Deux termes, deux applications de la règle $(x^\alpha)' = \alpha x^{\alpha-1}$. Le facteur $-3$ sort de la dérivée : $(k\,u)' = k\,u'$.

Le même travail sur une autre somme : :voir-exemple[dériver une somme terme à terme]{id="fvr-somme"}.

#solution
Terme à terme, avec $(x^2)' = 2x$ et $(-3x)' = -3\times(x)' = -3$ :

$$
\boxed{f'(x) = 2x-3}
$$
::

::question{label="3."}
$f(x) = \sqrt{x}+\dfrac{1}{x}$

#indice
Les deux termes figurent tels quels dans le tableau des dérivées usuelles. Si tu ne les as pas mémorisés, réécris-les en puissances : $\sqrt{x} = x^{1/2}$ et $\dfrac{1}{x} = x^{-1}$, puis applique $(x^\alpha)' = \alpha x^{\alpha-1}$.

Le tableau est en tête de page, dans la boîte à outils. Et le même travail sur une autre somme : :voir-exemple[dériver une somme terme à terme]{id="fvr-somme"}.

#solution
Deux fonctions élémentaires du tableau :

$$
(\sqrt{x})' = \frac{1}{2\sqrt{x}} \qquad\text{et}\qquad \left(\frac{1}{x}\right)' = -\frac{1}{x^2}
$$

D'où, en sommant :

$$
\boxed{f'(x) = \frac{1}{2\sqrt{x}}-\frac{1}{x^2}}
$$

Le signe moins du second terme n'est pas une erreur de recopie : il vient de l'exposant $-1$ de $x^{-1}$.
::

::question{label="4."}
$f(x) = x^4+x^3+x^2$

#indice
Trois monômes, trois fois la même règle. À chaque fois, l'exposant descend en facteur et diminue de $1$.

Le même travail sur une autre somme : :voir-exemple[dériver une somme terme à terme]{id="fvr-somme"}.

#solution
Trois applications de $(x^\alpha)' = \alpha x^{\alpha-1}$ :

$$
(x^4)' = 4x^3, \qquad (x^3)' = 3x^2, \qquad (x^2)' = 2x
$$

$$
\boxed{f'(x) = 4x^3+3x^2+2x}
$$
::

::question{label="5."}
$f(x) = \dfrac{5}{x}+3\sqrt{x}$

#indice
Ne te laisse pas impressionner par les coefficients : ce sont des constantes multiplicatives, elles sortent de la dérivée sans rien changer. Écris $\dfrac{5}{x} = 5\times\dfrac{1}{x}$ et $3\sqrt{x} = 3\times\sqrt{x}$, puis dérive chaque fonction de base. Le piège est d'oublier le $\dfrac{1}{2}$ qui figure dans la dérivée de la racine.

Le même travail sur une autre somme, coefficients compris : :voir-exemple[dériver une somme terme à terme]{id="fvr-somme"}.

#solution
Les constantes multiplicatives « sortent » de la dérivée :

$$
\left(\frac{5}{x}\right)' = 5\times\left(-\frac{1}{x^2}\right) = -\frac{5}{x^2}, \qquad (3\sqrt{x})' = 3\times\frac{1}{2\sqrt{x}} = \frac{3}{2\sqrt{x}}
$$

$$
\boxed{f'(x) = -\frac{5}{x^2}+\frac{3}{2\sqrt{x}}}
$$

*⚠️ La correction officielle imprime $\dfrac{3}{\sqrt{x}}$ pour le second terme : le facteur $\dfrac{1}{2}$ de $(\sqrt{x})' = \dfrac{1}{2\sqrt{x}}$ a été perdu — c'est bien $\dfrac{3}{2\sqrt{x}}$.*
::

::question{label="6."}
$f(x) = -\dfrac{2}{x}+\dfrac{2}{\sqrt{x}}$

#indice
Le second terme n'est pas dans le tableau tel quel : une racine **au dénominateur**. Réécris-le en puissance, $\dfrac{1}{\sqrt{x}} = x^{-1/2}$, et la règle $(x^\alpha)' = \alpha x^{\alpha-1}$ redevient applicable. Surveille les signes : il y en a un dans l'énoncé, et un autre qui apparaîtra au cours du calcul.

La technique de réécriture, détaillée sur d'autres fonctions : :voir-exemple[passer en puissance négative]{id="fvr-puissances-negatives"}.

#solution
**Premier terme** : $-\dfrac{2}{x} = -2\times\dfrac{1}{x}$, de dérivée

$$
-2\times\left(-\frac{1}{x^2}\right) = \frac{2}{x^2}
$$

Les deux signes moins se compensent, ce terme est donc positif.

**Second terme** : on l'écrit en puissance, $\dfrac{2}{\sqrt{x}} = 2x^{-1/2}$, donc sa dérivée vaut

$$
2\times\left(-\frac{1}{2}\right)x^{-3/2} = -x^{-3/2} = -\frac{1}{x\sqrt{x}}
$$

car $x^{3/2} = x\times x^{1/2} = x\sqrt{x}$.

$$
\boxed{f'(x) = \frac{2}{x^2}-\frac{1}{x\sqrt{x}}}
$$
::
:::

:::exercice{titre="Exercice 2" theme="Produits et simplification préalable"}
Déterminer la fonction dérivée des fonctions suivantes. Réflexe numéro un : **regarder si l'écriture se simplifie** avant de dériver. Sinon, on pose $u$ et $v$, et on applique $(uv)' = u'v+uv'$.

::question{label="1."}
$f(x) = x(x-2)$

#indice
Deux chemins mènent au résultat : appliquer la formule du produit, ou développer d'abord pour retomber sur une simple somme de monômes. Essaie les deux et vérifie qu'ils donnent la même chose — c'est un bon test de ta maîtrise de la formule.

Deux chemins possibles : :voir-exemple[la formule du produit]{id="fvr-produit"} ou :voir-exemple[simplifier d'abord]{id="fvr-simplifier"}.

#solution
Produit avec $u = x$, $u' = 1$ et $v = x-2$, $v' = 1$ :

$$
f'(x) = u'v+uv' = 1\times(x-2)+x\times 1 = x-2+x
$$

$$
\boxed{f'(x) = 2x-2}
$$

*Vérification par l'autre chemin* : en développant, $f(x) = x^2-2x$, dont la dérivée est bien $2x-2$.
::

::question{label="2."}
$f(x) = (2x^2-3)(x+1)$

#indice
C'est un produit de deux polynômes : pose $u = 2x^2-3$ et $v = x+1$. Applique $(uv)' = u'v+uv'$ en veillant à ne pas intervertir $u'$ et $v'$, puis développe pour présenter un polynôme rangé par degrés décroissants.

La formule déroulée sur un autre produit : :voir-exemple[dériver un produit]{id="fvr-produit"}.

#solution
$u = 2x^2-3$, $u' = 4x$ ; $v = x+1$, $v' = 1$. La formule du produit donne :

$$
f'(x) = u'v+uv' = 4x(x+1)+(2x^2-3)\times 1
$$

On développe :

$$
f'(x) = 4x^2+4x+2x^2-3
$$

$$
\boxed{f'(x) = 6x^2+4x-3}
$$
::

::question{label="3."}
$f(x) = \sqrt{x}\times\dfrac{1}{x}$

#indice
Avant de sortir la formule du produit, regarde ce que vaut réellement cette expression : $\dfrac{\sqrt{x}}{x}$ se simplifie ! Écris tout en puissances de $x$ et additionne les exposants — il ne restera qu'une seule fonction élémentaire à dériver.

Le réflexe à avoir ici : :voir-exemple[simplifier avant de dériver]{id="fvr-simplifier"}.

#solution
**On simplifie avant de dériver.** En écrivant tout en puissances :

$$
f(x) = \sqrt{x}\times\frac{1}{x} = \frac{\sqrt{x}}{x} = \frac{1}{\sqrt{x}} = x^{-1/2}
$$

Il ne reste plus qu'une règle à appliquer :

$$
f'(x) = -\frac{1}{2}x^{-3/2}
$$

$$
\boxed{f'(x) = -\frac{1}{2x\sqrt{x}}}
$$

*La correction officielle applique directement la formule du produit : $f'(x) = \dfrac{1}{2\sqrt{x}}\times\dfrac{1}{x}-\dfrac{\sqrt{x}}{x^2}$ — c'est le même résultat, car $\dfrac{1}{2x\sqrt{x}}-\dfrac{1}{x\sqrt{x}} = -\dfrac{1}{2x\sqrt{x}}$.*
::

::question{label="4."}
$f(x) = (2x+1)\sqrt{x}$

#indice
Ici la simplification n'aide pas : c'est un vrai produit, avec un facteur polynomial et un facteur racine. Après application de la formule, tu obtiendras une somme dont un terme est une fraction : mets tout au même dénominateur $2\sqrt{x}$, en te servant de l'identité $\sqrt{x}\times\sqrt{x} = x$.

La formule déroulée sur un autre produit : :voir-exemple[dériver un produit]{id="fvr-produit"}.

#solution
$u = 2x+1$, $u' = 2$ ; $v = \sqrt{x}$, $v' = \dfrac{1}{2\sqrt{x}}$. Alors :

$$
f'(x) = u'v+uv' = 2\sqrt{x}+\frac{2x+1}{2\sqrt{x}}
$$

On met tout au même dénominateur $2\sqrt{x}$. L'astuce est de remarquer que

$$
2\sqrt{x} = \frac{2\sqrt{x}\times 2\sqrt{x}}{2\sqrt{x}} = \frac{4x}{2\sqrt{x}}
$$

puisque $\sqrt{x}\times\sqrt{x} = x$. D'où :

$$
f'(x) = \frac{4x+2x+1}{2\sqrt{x}}
$$

$$
\boxed{f'(x) = \frac{6x+1}{2\sqrt{x}}}
$$
::

::question{label="5."}
$f(x) = (x^2-3x-1)^2$

#indice
Un carré, ce n'est jamais qu'une puissance $u^n$ : la Prop 3.3 s'applique directement, avec $n = 2$. Tu pourrais aussi développer, mais tu obtiendrais un polynôme de degré $4$ à dériver — le détour est nettement plus long.

La formule sur d'autres parenthèses : :voir-exemple[dériver une puissance de fonction]{id="fvr-puissance-n"}.

#solution
C'est une **puissance** $u^n$ : on applique la **Prop 3.3**, $(u^n)' = n\,u'\,u^{n-1}$, avec $n = 2$, $u = x^2-3x-1$ et $u' = 2x-3$ :

$$
f'(x) = 2\,u'\,u^{1} = 2(2x-3)(x^2-3x-1)
$$

$$
\boxed{f'(x) = 2(2x-3)(x^2-3x-1)}
$$

*Pourquoi ne pas développer le carré ? On pourrait, mais la Prop 3.3 est plus rapide et donne un résultat déjà factorisé — bien pratique pour étudier ensuite le signe de $f'$.*
::

::question{label="6."}
$f(x) = (x^2+1)\times\dfrac{1}{x}$

#indice
Comme à la question **3.**, commence par simplifier. Multiplier par $\dfrac{1}{x}$ revient à diviser par $x$ : sépare alors la fraction en deux morceaux, et tu retomberas sur une somme de fonctions déjà croisées à l'exercice 1.

Le réflexe à avoir ici : :voir-exemple[simplifier avant de dériver]{id="fvr-simplifier"}.

#solution
**On simplifie avant de dériver.** Multiplier par $\dfrac{1}{x}$ revient à diviser par $x$, puis on scinde la fraction :

$$
f(x) = \frac{x^2+1}{x} = \frac{x^2}{x}+\frac{1}{x} = x+\frac{1}{x}
$$

C'est maintenant une simple somme, avec $(x)' = 1$ et $\left(\dfrac{1}{x}\right)' = -\dfrac{1}{x^2}$ :

$$
\boxed{f'(x) = 1-\frac{1}{x^2}}
$$
::
:::

:::exercice{titre="Exercice 3" theme="Inverses et la proposition 3.5"}
Déterminer la fonction dérivée des fonctions suivantes. Elles sont toutes de la forme $\dfrac{k}{u} = k\times\dfrac{1}{u}$ : la **Prop 3.5** donne $\left(\dfrac{1}{u}\right)' = -\dfrac{u'}{u^2}$, donc $\left(\dfrac{k}{u}\right)' = -\dfrac{k\,u'}{u^2}$. À chaque fois : poser $u$, calculer $u'$, appliquer — en surveillant les signes.

::question{label="1."}
$f(x) = \dfrac{1}{x^2+1}$

#indice
Le numérateur est constant : inutile de sortir la formule du quotient, la Prop 3.5 suffit et va plus vite. Pose $u$ égal au dénominateur, calcule $u'$, et n'oublie ni le signe moins ni le carré au dénominateur.

La formule déroulée sur d'autres inverses : :voir-exemple[dériver un inverse]{id="fvr-inverse"}.

#solution
Forme $\dfrac{1}{u}$ avec $u = x^2+1$ et $u' = 2x$. La **Prop 3.5** donne :

$$
f'(x) = -\frac{u'}{u^2} = -\frac{2x}{(x^2+1)^2}
$$

$$
\boxed{f'(x) = -\frac{2x}{(x^2+1)^2}}
$$

Remarque : $u = x^2+1$ ne s'annule jamais, $f$ est donc dérivable sur $\mathbb{R}$ tout entier.
::

::question{label="2."}
$f(x) = \dfrac{1}{\sqrt{x}+1}$

#indice
Attention à la lecture de l'énoncé : la racine ne porte que sur $x$, le dénominateur est bien $\sqrt{x}+1$. C'est encore une forme $\dfrac{1}{u}$, mais cette fois $u'$ demande la dérivée de la racine. Pense aussi à te demander sur quel intervalle tout cela a un sens.

Le même calcul avec une racine au dénominateur : :voir-exemple[inverse contenant une racine]{id="fvr-inverse-racine"}.

#solution
Forme $\dfrac{1}{u}$ avec $u = \sqrt{x}+1$ (la racine ne porte que sur $x$). La dérivée du $1$ est nulle, donc

$$
u' = \frac{1}{2\sqrt{x}} \qquad \text{sur } ]0,+\infty[
$$

La **Prop 3.5** donne alors :

$$
f'(x) = -\frac{u'}{u^2} = -\frac{\dfrac{1}{2\sqrt{x}}}{(\sqrt{x}+1)^2}
$$

Une fraction au numérateur d'une fraction : on la « descend » au dénominateur.

$$
\boxed{f'(x) = -\frac{1}{2\sqrt{x}\,(\sqrt{x}+1)^2}}
$$
::

::question{label="3."}
$f(x) = \dfrac{3}{2x^2+1}$

#indice
Le numérateur $3$ est une constante multiplicative : elle traverse la dérivation sans être modifiée. Autrement dit, dérive $\dfrac{1}{2x^2+1}$ et multiplie le tout par $3$.

Le traitement de la constante, détaillé ailleurs : :voir-exemple[une constante au numérateur]{id="fvr-constante-numerateur"}.

#solution
Forme $\dfrac{k}{u}$ avec $k = 3$, $u = 2x^2+1$ et $u' = 4x$ :

$$
f'(x) = -\frac{k\,u'}{u^2} = -\frac{3\times 4x}{(2x^2+1)^2}
$$

$$
\boxed{f'(x) = -\frac{12x}{(2x^2+1)^2}}
$$
::

::question{label="4."}
$f(x) = -\dfrac{3}{x-6}$

#indice
Ici $k = -3$ : le signe moins de l'énoncé fait partie de la constante. Combiné au signe moins de la Prop 3.5, cela va donner un résultat… positif. Prends le temps de poser le calcul plutôt que de deviner le signe final.

Le traitement de la constante et des signes : :voir-exemple[une constante au numérateur]{id="fvr-constante-numerateur"}.

#solution
Forme $\dfrac{k}{u}$ avec $k = -3$, $u = x-6$ et $u' = 1$ :

$$
f'(x) = -\frac{k\,u'}{u^2} = -\frac{(-3)\times 1}{(x-6)^2}
$$

Les deux signes moins se compensent :

$$
\boxed{f'(x) = \frac{3}{(x-6)^2}}
$$
::

::question{label="5."}
$f(x) = -\dfrac{2}{x^2+x+1}$

#indice
Même mécanique qu'à la question précédente, avec cette fois $u' $ non constant. Deux signes moins vont se rencontrer : lequel survit ? Écris la formule complète avant de simplifier, c'est le meilleur moyen de ne pas se tromper.

Le traitement de la constante et des signes : :voir-exemple[une constante au numérateur]{id="fvr-constante-numerateur"}.

#solution
Forme $\dfrac{k}{u}$ avec $k = -2$, $u = x^2+x+1$ et $u' = 2x+1$ :

$$
f'(x) = -\frac{k\,u'}{u^2} = -\frac{(-2)(2x+1)}{(x^2+x+1)^2}
$$

Les deux signes moins se compensent :

$$
\boxed{f'(x) = \frac{2(2x+1)}{(x^2+x+1)^2}}
$$
::

::question{label="6."}
$f(x) = \dfrac{1}{3-5x}$

#indice
Cette fois, c'est $u'$ qui est négatif — le $x$ est précédé d'un $-5$. Encore une rencontre de deux signes moins dans la formule de la Prop 3.5. Et note que le dénominateur, étant élevé au carré, reste positif quel que soit $x$.

La formule déroulée sur d'autres inverses : :voir-exemple[dériver un inverse]{id="fvr-inverse"}.

#solution
Forme $\dfrac{1}{u}$ avec $u = 3-5x$ et $u' = -5$ :

$$
f'(x) = -\frac{u'}{u^2} = -\frac{-5}{(3-5x)^2}
$$

Les deux signes moins se compensent :

$$
\boxed{f'(x) = \frac{5}{(3-5x)^2}}
$$

Le dénominateur étant un carré, $f'$ est strictement positive : $f$ est croissante sur chacun des deux intervalles de son domaine.
::
:::

:::exercice{titre="Exercice 4" theme="Quotients"}
Déterminer la fonction dérivée des fonctions suivantes. Le numérateur n'est plus constant : il faut la formule du quotient $\left(\dfrac{u}{v}\right)' = \dfrac{u'v-uv'}{v^2}$. Démarche systématique : poser $u$ et $v$, calculer $u'$ et $v'$, écrire le numérateur **sans se tromper d'ordre**, puis développer et simplifier — le dénominateur $v^2$, lui, reste tel quel.

::question{label="1."}
$f(x) = \dfrac{x-1}{x+2}$

#indice
Le numérateur $u'v-uv'$ n'est **pas** symétrique : l'ordre des deux termes compte, et une inversion donnerait le résultat opposé. Attention aussi au signe moins qui se distribue sur toute la parenthèse $uv'$.

La formule déroulée sur un autre quotient : :voir-exemple[dériver un quotient]{id="fvr-quotient"}.

#solution
$u = x-1$, $u' = 1$ ; $v = x+2$, $v' = 1$.

Numérateur de la formule :

$$
u'v-uv' = 1\times(x+2)-(x-1)\times 1 = x+2-x+1 = 3
$$

Le signe moins s'applique bien à **tout** le second terme, d'où le $+1$ et non $-1$. Les $x$ se simplifient et il reste une constante.

$$
\boxed{f'(x) = \frac{3}{(x+2)^2}}
$$
::

::question{label="2."}
$f(x) = \dfrac{\sqrt{x}}{x^2+1}$

#indice
Formule du quotient classique, mais $u' = \dfrac{1}{2\sqrt{x}}$ est lui-même une fraction : le numérateur obtenu sera donc une différence à mettre au même dénominateur $2\sqrt{x}$. Au final tu auras une fraction de fraction — pense à la « descendre » proprement.

Le nettoyage de la fraction à étages, détaillé ailleurs : :voir-exemple[quotient contenant une racine]{id="fvr-quotient-racine"}.

#solution
$u = \sqrt{x}$, $u' = \dfrac{1}{2\sqrt{x}}$ ; $v = x^2+1$, $v' = 2x$.

Numérateur de la formule :

$$
u'v-uv' = \frac{x^2+1}{2\sqrt{x}}-\sqrt{x}\times 2x
$$

On met au même dénominateur $2\sqrt{x}$, en utilisant $\sqrt{x}\times 2x\times 2\sqrt{x} = 4x^2$ :

$$
\frac{x^2+1-4x^2}{2\sqrt{x}} = \frac{1-3x^2}{2\sqrt{x}}
$$

Il reste à diviser par $v^2 = (x^2+1)^2$ :

$$
\boxed{f'(x) = \frac{1-3x^2}{2\sqrt{x}\,(x^2+1)^2}}
$$
::

::question{label="3."}
$f(x) = \dfrac{x^2}{x-1}$

#indice
Applique la formule, développe le numérateur puis regroupe. Le résultat se factorise joliment : cherche le facteur commun, cela rendra l'étude du signe de $f'$ immédiate.

La formule déroulée sur un autre quotient : :voir-exemple[dériver un quotient]{id="fvr-quotient"}.

#solution
$u = x^2$, $u' = 2x$ ; $v = x-1$, $v' = 1$.

Numérateur de la formule :

$$
u'v-uv' = 2x(x-1)-x^2\times 1 = 2x^2-2x-x^2 = x^2-2x
$$

On factorise par $x$ :

$$
x^2-2x = x(x-2)
$$

$$
\boxed{f'(x) = \frac{x(x-2)}{(x-1)^2}}
$$

Sous cette forme factorisée, on lit immédiatement que $f'$ s'annule en $0$ et en $2$.
::

::question{label="4."}
$f(x) = \dfrac{2x-3}{1-x}$

#indice
Le piège est au dénominateur : la dérivée de $1-x$ n'est pas $1$. Une fois ce signe correctement pris en compte, tout se simplifie et il ne reste qu'une constante au numérateur — négative.

Le piège de signe, isolé sur un autre exemple : :voir-exemple[dénominateur de la forme a moins x]{id="fvr-quotient-signe"}.

#solution
$u = 2x-3$, $u' = 2$ ; $v = 1-x$, $v' = -1$ — attention au signe, c'est le point délicat.

Numérateur de la formule :

$$
u'v-uv' = 2(1-x)-(2x-3)\times(-1) = 2-2x+2x-3 = -1
$$

$$
\boxed{f'(x) = -\frac{1}{(1-x)^2}}
$$
::

::question{label="5."}
$f(x) = \dfrac{x^2+x+1}{x^2+1}$

#indice
Les deux dérivées $u'$ et $v'$ se ressemblent beaucoup, mais elles ne sont pas égales : recopie soigneusement $u' = 2x+1$, le $+1$ n'est pas décoratif. Développe ensuite chaque produit à part avant de faire la différence, les termes de degré $3$ doivent disparaître.

Le raccourci qui évite la grosse formule : :voir-exemple[numérateur ressemblant au dénominateur]{id="fvr-quotient-simplifier"}.

#solution
$u = x^2+x+1$, $u' = 2x+1$ ; $v = x^2+1$, $v' = 2x$.

Numérateur de la formule :

$$
u'v-uv' = (2x+1)(x^2+1)-(x^2+x+1)(2x)
$$

On développe chaque morceau séparément :

$$
(2x+1)(x^2+1) = 2x^3+2x+x^2+1 \qquad\text{et}\qquad (x^2+x+1)(2x) = 2x^3+2x^2+2x
$$

Différence, les $2x^3$ et les $2x$ s'éliminant :

$$
2x^3+2x+x^2+1-2x^3-2x^2-2x = 1-x^2
$$

$$
\boxed{f'(x) = \frac{1-x^2}{(x^2+1)^2}}
$$

*⚠️ La correction officielle écrit au numérateur $2x(x^2+1)-2x(x^2+x+1)$ : le $u' = 2x+1$ y est devenu $2x$ (coquille). Avec le bon $u'$, on retrouve bien $1-x^2$.*
::

::question{label="6."}
$f(x) = \dfrac{2x^2+1}{2x^2-1}$

#indice
Ici $u'$ et $v'$ sont identiques. Plutôt que de tout développer, mets ce facteur commun en évidence dès l'écriture du numérateur : la parenthèse restante se réduit alors à une simple constante.

Le raccourci qui évite la grosse formule : :voir-exemple[numérateur ressemblant au dénominateur]{id="fvr-quotient-simplifier"}.

#solution
$u = 2x^2+1$, $u' = 4x$ ; $v = 2x^2-1$, $v' = 4x$.

Numérateur de la formule :

$$
u'v-uv' = 4x(2x^2-1)-(2x^2+1)(4x)
$$

Les deux termes ont $4x$ en facteur : on **factorise** au lieu de développer.

$$
4x\big[(2x^2-1)-(2x^2+1)\big] = 4x\times(-2) = -8x
$$

$$
\boxed{f'(x) = -\frac{8x}{(2x^2-1)^2}}
$$
::
:::

:::exercice{titre="Exercice 5" theme="Ensemble de dérivabilité et dérivée"}
Pour chacune des fonctions suivantes, donner l'ensemble sur lequel elle est dérivable et calculer sa fonction dérivée.

Trois règles suffisent ici : un polynôme est dérivable sur $\mathbb{R}$ ; un quotient est dérivable partout où le **dénominateur ne s'annule pas** ; enfin $\sqrt{x}$ est **définie** sur $[0,+\infty[$ mais **dérivable seulement sur** $]0,+\infty[$.

::question{label="1."}
$f_1(x) = \sqrt{x}$

#indice
Attention au piège classique : l'ensemble de définition et l'ensemble de dérivabilité ne coïncident pas ici. Regarde ce que devient $\dfrac{1}{2\sqrt{x}}$ quand $x$ s'approche de $0$ — que peux-tu en dire de la tangente en ce point ?

La distinction attendue ici, détaillée : :voir-exemple[définie mais pas dérivable]{id="fvr-domaine-racine"}.

#solution
$f_1$ est **définie sur $[0,+\infty[$** mais **dérivable seulement sur $]0,+\infty[$**.

En effet, en $0$ le taux d'accroissement $\dfrac{\sqrt{h}-0}{h} = \dfrac{1}{\sqrt{h}}$ tend vers $+\infty$ : la courbe admet une tangente verticale, il n'y a pas de nombre dérivé.

Sur $]0,+\infty[$ :

$$
\boxed{f_1'(x) = \frac{1}{2\sqrt{x}}}
$$
::

::question{label="2."}
$f_2(x) = \dfrac{1}{x}$

#indice
Une seule valeur pose problème, celle qui annule le dénominateur. Une fois écartée, la dérivée se lit dans le tableau — ou s'obtient en écrivant la fonction comme une puissance.

Les phrases de justification attendues : :voir-exemple[justifier un ensemble de dérivabilité]{id="fvr-domaine"}.

#solution
Le dénominateur s'annule en $x = 0$ : $f_2$ est dérivable sur $\mathbb{R}^*$.

En écrivant $f_2(x) = x^{-1}$, la règle $(x^\alpha)' = \alpha x^{\alpha-1}$ donne $-1\times x^{-2}$ :

$$
\boxed{f_2'(x) = -\frac{1}{x^2}}
$$
::

::question{label="3."}
$f_3(x) = x^2+5x-1$

#indice
Quelle est la nature de cette fonction ? Pour cette famille, la question de l'ensemble de dérivabilité ne se pose même pas : aucun dénominateur, aucune racine.

Les phrases de justification attendues : :voir-exemple[justifier un ensemble de dérivabilité]{id="fvr-domaine"}.

#solution
$f_3$ est un **polynôme**, donc dérivable sur $\mathbb{R}$.

Dérivation terme à terme : $(x^2)' = 2x$, $(5x)' = 5$, $(-1)' = 0$.

$$
\boxed{f_3'(x) = 2x+5}
$$
::

::question{label="4."}
$f_4(x) = 3x^3+5x^2-2x+2$

#indice
Même famille qu'à la question précédente : dérivable partout. Il ne reste qu'à appliquer trois fois la règle des puissances, sans oublier que la constante disparaît.

Les phrases de justification attendues : :voir-exemple[justifier un ensemble de dérivabilité]{id="fvr-domaine"}.

#solution
$f_4$ est un **polynôme**, donc dérivable sur $\mathbb{R}$.

$$
(3x^3)' = 9x^2, \qquad (5x^2)' = 10x, \qquad (-2x)' = -2, \qquad (2)' = 0
$$

$$
\boxed{f_4'(x) = 9x^2+10x-2}
$$
::

::question{label="5."}
$f_5(x) = \dfrac{3}{x}$

#indice
C'est la fonction de la question **2.** multipliée par une constante — l'ensemble de dérivabilité est donc le même, et la dérivée aussi, au facteur près.

Pour le domaine, :voir-exemple[justifier un ensemble de dérivabilité]{id="fvr-domaine"} ; pour le calcul, :voir-exemple[une constante au numérateur]{id="fvr-constante-numerateur"}.

#solution
Même dénominateur qu'en **2.** : $f_5$ est dérivable sur $\mathbb{R}^*$.

C'est $3\times\dfrac{1}{x}$, donc sa dérivée est $3\times\left(-\dfrac{1}{x^2}\right)$ :

$$
\boxed{f_5'(x) = -\frac{3}{x^2}}
$$
::

::question{label="6."}
$f_6(x) = (x+3)(x-2)$

#indice
Lis bien l'énoncé : il s'agit d'un **produit**, pas d'un quotient. C'est donc un polynôme déguisé — développe-le, ou applique $(uv)' = u'v+uv'$, les deux voies donnent le même résultat.

La formule déroulée sur un autre produit : :voir-exemple[dériver un produit]{id="fvr-produit"}.

#solution
$f_6$ est un **produit de polynômes**, donc un polynôme : dérivable sur $\mathbb{R}$.

Formule du produit avec $u = x+3$, $u' = 1$ et $v = x-2$, $v' = 1$ :

$$
f_6'(x) = u'v+uv' = (x-2)+(x+3) = 2x+1
$$

$$
\boxed{f_6'(x) = 2x+1}
$$

*Vérification en développant : $f_6(x) = x^2+x-6$, de dérivée $2x+1$.*

*⚠️ La correction officielle donne $\dfrac{-5}{(x-2)^2}$ : c'est la dérivée du **quotient** $\dfrac{x+3}{x-2}$, pas du produit $(x+3)(x-2)$ (erreur de recopie). Le bon résultat est $2x+1$.*
::

::question{label="7."}
$f_7(x) = (3x+5)(5x^2+1)$

#indice
Encore un produit, à ne pas confondre avec un quotient. Applique $(uv)' = u'v+uv'$, puis développe et regroupe par degrés : tu dois obtenir un polynôme du second degré, sans aucun dénominateur.

La formule déroulée sur un autre produit : :voir-exemple[dériver un produit]{id="fvr-produit"}.

#solution
$f_7$ est un **produit de polynômes**, donc dérivable sur $\mathbb{R}$.

$u = 3x+5$, $u' = 3$ ; $v = 5x^2+1$, $v' = 10x$ :

$$
f_7'(x) = 3(5x^2+1)+(3x+5)(10x) = 15x^2+3+30x^2+50x
$$

$$
\boxed{f_7'(x) = 45x^2+50x+3}
$$

*⚠️ Même erreur de recopie dans la correction officielle, qui applique la formule du **quotient** $\dfrac{3x+5}{5x^2+1}$ ; pour le produit demandé, le résultat est $45x^2+50x+3$ — signe $+$ entre les deux termes, et pas de dénominateur.*
::

::question{label="8."}
$f_8(x) = \dfrac{x+1}{x-1}$

#indice
Cette fois c'est bien un quotient : commence par chercher la valeur interdite. Pour le calcul, comme $u' = v' = 1$, le numérateur de la formule se réduit très vite — mais fais bien attention au signe moins devant $uv'$.

Pour le domaine, :voir-exemple[justifier un ensemble de dérivabilité]{id="fvr-domaine"} ; pour le calcul, :voir-exemple[dériver un quotient]{id="fvr-quotient"}.

#solution
Le dénominateur s'annule en $x = 1$ : $f_8$ est dérivable sur $\mathbb{R}\setminus\{1\}$.

$u = x+1$, $u' = 1$ ; $v = x-1$, $v' = 1$. Numérateur de la formule :

$$
u'v-uv' = (x-1)-(x+1) = x-1-x-1 = -2
$$

$$
\boxed{f_8'(x) = -\frac{2}{(x-1)^2}}
$$

$f_8'$ est toujours strictement négative : $f_8$ est décroissante sur chacun des deux intervalles.
::

::question{label="9."}
$f_9(x) = \dfrac{3x-4}{5-x}$

#indice
La valeur interdite se lit sur le dénominateur. Et attention : ce dénominateur est de la forme $5-x$, sa dérivée n'est donc pas $1$ — c'est exactement le piège de l'exercice 4, question **4.**

Le piège de signe au dénominateur : :voir-exemple[dénominateur de la forme a moins x]{id="fvr-quotient-signe"}.

#solution
Le dénominateur s'annule en $x = 5$ : $f_9$ est dérivable sur $\mathbb{R}\setminus\{5\}$.

$u = 3x-4$, $u' = 3$ ; $v = 5-x$, $v' = -1$. Numérateur de la formule :

$$
u'v-uv' = 3(5-x)-(3x-4)\times(-1) = 15-3x+3x-4 = 11
$$

$$
\boxed{f_9'(x) = \frac{11}{(5-x)^2}}
$$
::

::question{label="10."}
$f_{10}(x) = x^2+\dfrac{x+1}{x^2+1}$

#indice
Décompose : c'est une somme d'un polynôme et d'un quotient, chacun se dérive de son côté. Pour l'ensemble de dérivabilité, demande-toi si $x^2+1$ peut s'annuler — pense à son minimum.

La formule déroulée sur un autre quotient : :voir-exemple[dériver un quotient]{id="fvr-quotient"}.

#solution
$f_{10}$ est la somme d'un polynôme et d'un quotient dont le dénominateur vérifie $x^2+1 \geqslant 1$ : il **ne s'annule jamais**. Donc $f_{10}$ est dérivable sur $\mathbb{R}$.

Le premier terme donne $(x^2)' = 2x$. Pour le quotient, $u = x+1$, $u' = 1$ ; $v = x^2+1$, $v' = 2x$ :

$$
u'v-uv' = (x^2+1)-(x+1)(2x) = x^2+1-2x^2-2x = 1-2x-x^2
$$

En sommant les deux contributions :

$$
\boxed{f_{10}'(x) = 2x+\frac{1-2x-x^2}{(x^2+1)^2}}
$$
::
:::

:::exercice{titre="Exercice 6" theme="Exercice bilan avec exponentielle, logarithme et trigonométrie"}
Pour chacune des fonctions suivantes, déterminer sa fonction dérivée sur l'intervalle indiqué. C'est l'exercice de synthèse : pour chaque fonction, **identifier la forme** (somme ? produit ? quotient ? $\dfrac{k}{u}$ ? $e^u$ ? $\ln u$ ?), citer la formule des sections 4 et 5, puis l'appliquer.

::question{label="1."}
$f(x) = 3x+2$ sur $\mathbb{R}$

#indice
Une fonction affine : son graphe est une droite. Que vaut la pente d'une droite, et varie-t-elle d'un point à l'autre ?

Le même travail sur une autre somme : :voir-exemple[dériver une somme terme à terme]{id="fvr-somme"}.

#solution
Fonction affine : $(3x)' = 3$ et $(2)' = 0$.

$$
\boxed{f'(x) = 3}
$$
::

::question{label="2."}
$f(x) = 1-7x$ sur $\mathbb{R}$

#indice
Encore une fonction affine, mais écrite dans l'autre sens. Le coefficient devant $x$ est-il bien $7$, ou $-7$ ?

Le même travail sur une autre somme : :voir-exemple[dériver une somme terme à terme]{id="fvr-somme"}.

#solution
Fonction affine, de coefficient directeur $-7$ : $(1)' = 0$ et $(-7x)' = -7$.

$$
\boxed{f'(x) = -7}
$$
::

::question{label="3."}
$f(x) = \dfrac{1}{7}-\dfrac{5}{7}x$ sur $\mathbb{R}$

#indice
Les fractions ne changent rien à l'affaire : $\dfrac{1}{7}$ est une constante, et $\dfrac{5}{7}$ un simple coefficient. Toujours une fonction affine.

Le même travail sur une autre somme, coefficients compris : :voir-exemple[dériver une somme terme à terme]{id="fvr-somme"}.

#solution
Fonction affine : $\dfrac{1}{7}$ est une constante, de dérivée nulle, et le coefficient directeur est $-\dfrac{5}{7}$.

$$
\boxed{f'(x) = -\dfrac{5}{7}}
$$
::

::question{label="4."}
$f(x) = x^2-x+1$ sur $\mathbb{R}$

#indice
Un trinôme : trois termes, dérivés séparément. Rappelle-toi que $x$ s'écrit $x^1$ et que sa dérivée vaut $1$.

Le même travail sur une autre somme : :voir-exemple[dériver une somme terme à terme]{id="fvr-somme"}.

#solution
Polynôme, dérivé terme à terme : $(x^2)' = 2x$, $(-x)' = -1$, $(1)' = 0$.

$$
\boxed{f'(x) = 2x-1}
$$
::

::question{label="5."}
$f(x) = \dfrac{2}{3}x^3-\dfrac{1}{2}x^2+x$ sur $\mathbb{R}$

#indice
Polynôme à coefficients fractionnaires : dérive normalement, puis simplifie chaque coefficient. Les fractions se simplifient très bien contre les exposants qui descendent — surveille que le degré du premier terme reste bien $2$ après dérivation.

Le même travail sur une autre somme, coefficients compris : :voir-exemple[dériver une somme terme à terme]{id="fvr-somme"}.

#solution
Polynôme. On dérive terme à terme en simplifiant les coefficients :

$$
\left(\frac{2}{3}x^3\right)' = \frac{2}{3}\times 3x^2 = 2x^2, \qquad \left(\frac{1}{2}x^2\right)' = \frac{1}{2}\times 2x = x, \qquad (x)' = 1
$$

$$
\boxed{f'(x) = 2x^2-x+1}
$$

*⚠️ La correction officielle imprime $2x-x+1$ : l'exposant du premier terme a sauté, il faut lire $2x^2-x+1$.*
::

::question{label="6."}
$f(x) = 2\sqrt{x}$ sur $\mathbb{R}_+^*$

#indice
Fonction élémentaire multipliée par une constante. Le $2$ du facteur et le $2$ du dénominateur de $(\sqrt{x})'$ vont se rencontrer : que reste-t-il ?

La distinction attendue ici, détaillée : :voir-exemple[définie mais pas dérivable]{id="fvr-domaine-racine"}.

#solution
Fonction élémentaire multipliée par une constante : $(2\sqrt{x})' = 2\times\dfrac{1}{2\sqrt{x}}$.

Les deux $2$ se simplifient :

$$
\boxed{f'(x) = \frac{1}{\sqrt{x}}}
$$

L'intervalle $\mathbb{R}_+^*$ est bien celui de dérivabilité : en $0$, la racine n'est pas dérivable.
::

::question{label="7."}
$f(x) = x+2\ln(x)$ sur $]0,+\infty[$

#indice
Une somme de deux termes, dont un logarithme « nu » : sa dérivée est dans le tableau de la section 4, pas besoin de la Prop 3.2 ici puisqu'il n'y a rien à l'intérieur du $\ln$ hormis $x$.

La dérivée du logarithme, sur d'autres exemples : :voir-exemple[dériver un logarithme]{id="fvr-ln"}.

#solution
Somme, avec $\ln'(x) = \dfrac{1}{x}$ (section 4) et le coefficient $2$ qui sort :

$$
(x)' = 1 \qquad\text{et}\qquad (2\ln x)' = 2\times\frac{1}{x} = \frac{2}{x}
$$

$$
\boxed{f'(x) = 1+\frac{2}{x}}
$$

L'intervalle $]0,+\infty[$ est imposé par le domaine du logarithme.
::

::question{label="8."}
$f(x) = \dfrac{1}{x^2}$ sur $\mathbb{R}^*$

#indice
Deux routes possibles : écrire $f(x) = x^{-2}$ et appliquer la règle des puissances, ou voir une forme $\dfrac{1}{u}$ et appliquer la Prop 3.5. Prends-en une, puis vérifie avec l'autre — elles doivent donner exactement la même chose.

La technique de réécriture, détaillée : :voir-exemple[passer en puissance négative]{id="fvr-puissances-negatives"}.

#solution
**Première voie** — puissance : $f(x) = x^{-2}$, donc

$$
f'(x) = -2x^{-3} = -\frac{2}{x^3}
$$

**Seconde voie** — Prop 3.5 avec $u = x^2$, $u' = 2x$ :

$$
f'(x) = -\frac{2x}{x^4} = -\frac{2}{x^3}
$$

Les deux méthodes concordent.

$$
\boxed{f'(x) = -\frac{2}{x^3}}
$$
::

::question{label="9."}
$f(x) = \dfrac{1}{\sin x}+\dfrac{1}{\cos(x)}$

#indice
Deux termes, deux fois la Prop 3.5. Le second réserve une surprise : la dérivée du cosinus porte déjà un signe moins, qui va rencontrer celui de la formule. Pense aussi à te demander si « sur $\mathbb{R}$ » est vraiment tenable, vu les dénominateurs.

Deux ingrédients ici : :voir-exemple[dériver un inverse]{id="fvr-inverse"} et :voir-exemple[dériver un sinus ou un cosinus]{id="fvr-trigo"}.

#solution
Deux applications de la **Prop 3.5**.

**Premier terme** : $u = \sin x$, $u' = \cos x$, d'où

$$
\left(\frac{1}{\sin x}\right)' = -\frac{\cos x}{\sin^2 x}
$$

**Second terme** : $u = \cos x$, $u' = -\sin x$, d'où

$$
\left(\frac{1}{\cos x}\right)' = -\frac{-\sin x}{\cos^2 x} = +\frac{\sin x}{\cos^2 x}
$$

Les deux signes moins se compensent ici, ce qui explique la différence de signe entre les deux morceaux du résultat.

$$
\boxed{f'(x) = -\frac{\cos x}{\sin^2 x}+\frac{\sin x}{\cos^2 x}}
$$

*⚠️ L'énoncé écrit « sur $\mathbb{R}$ », mais il faut $\sin x \neq 0$ **et** $\cos x \neq 0$, c'est-à-dire $x \neq k\dfrac{\pi}{2}$, $k\in\mathbb{Z}$.*
::

::question{label="10."}
$f(x) = x+\dfrac{1}{\sqrt{x}}$

#indice
Le second terme est une racine au dénominateur : réécris-le en puissance pour le ramener au tableau. Et regarde d'un œil critique l'intervalle annoncé par l'énoncé — $\dfrac{1}{\sqrt{x}}$ a-t-il un sens pour tout réel ?

La technique de réécriture, détaillée : :voir-exemple[passer en puissance négative]{id="fvr-puissances-negatives"}.

#solution
Somme. Le premier terme donne $(x)' = 1$. Pour le second, on passe en puissance :

$$
\frac{1}{\sqrt{x}} = x^{-1/2} \quad\Longrightarrow\quad \left(x^{-1/2}\right)' = -\frac{1}{2}x^{-3/2} = -\frac{1}{2x\sqrt{x}}
$$

$$
\boxed{f'(x) = 1-\frac{1}{2x\sqrt{x}}}
$$

*⚠️ L'énoncé écrit « sur $\mathbb{R}$ », mais $\dfrac{1}{\sqrt{x}}$ exige $x > 0$ : le bon ensemble est $\mathbb{R}_+^*$.*
::

::question{label="11."}
$f(x) = \dfrac{5}{x+e^x}$ sur $\mathbb{R}$

#indice
Numérateur constant, donc Prop 3.5 plutôt que formule du quotient. Le dénominateur est une somme dont l'un des termes est sa propre dérivée. Interroge-toi aussi : ce dénominateur peut-il s'annuler ?

Deux ingrédients ici : :voir-exemple[une constante au numérateur]{id="fvr-constante-numerateur"} et :voir-exemple[dériver une exponentielle]{id="fvr-exp"}.

#solution
Forme $\dfrac{k}{u}$ avec $k = 5$, $u = x+e^x$ et, puisque $(e^x)' = e^x$ :

$$
u' = 1+e^x
$$

La **Prop 3.5** donne :

$$
f'(x) = -\frac{k\,u'}{u^2} = -\frac{5(1+e^x)}{(x+e^x)^2}
$$

$$
\boxed{f'(x) = -\frac{5(1+e^x)}{(x+e^x)^2}}
$$

*⚠️ Il faut $x+e^x \neq 0$ : cela exclut un unique réel $x_0 \approx -0{,}567$, celui où $e^x = -x$.*
::

::question{label="12."}
$f(x) = x(x^2+3)$ sur $\mathbb{R}$

#indice
Un produit, oui — mais avant de dégainer $(uv)' = u'v+uv'$, regarde ce que donne un simple développement. Tu obtiendras un polynôme de degré $3$ dérivable en une ligne.

Deux chemins possibles : :voir-exemple[la formule du produit]{id="fvr-produit"} ou :voir-exemple[simplifier d'abord]{id="fvr-simplifier"}.

#solution
**On développe d'abord**, c'est plus court que la formule du produit :

$$
f(x) = x^3+3x
$$

Puis dérivation terme à terme :

$$
\boxed{f'(x) = 3x^2+3}
$$

*Par la formule du produit : $1\times(x^2+3)+x\times 2x = x^2+3+2x^2 = 3x^2+3$. Même résultat.*
::

::question{label="13."}
$f(x) = e^x(x^2+2x+5)$ sur $\mathbb{R}$

#indice
Produit d'une exponentielle par un polynôme. La formule s'applique sans difficulté, mais ne t'arrête pas là : dès qu'une exponentielle apparaît dans les deux termes, le réflexe est de la mettre en facteur.

Le même produit avec une exponentielle, et la factorisation finale : :voir-exemple[dériver une exponentielle]{id="fvr-exp"}.

#solution
Produit avec $u = e^x$, $u' = e^x$ ; $v = x^2+2x+5$, $v' = 2x+2$ :

$$
f'(x) = u'v+uv' = e^x(x^2+2x+5)+e^x(2x+2)
$$

On **factorise par $e^x$** — réflexe systématique avec l'exponentielle — puis on regroupe les termes semblables :

$$
f'(x) = e^x\big[(x^2+2x+5)+(2x+2)\big] = e^x(x^2+4x+7)
$$

$$
\boxed{f'(x) = e^x(x^2+4x+7)}
$$
::

::question{label="14."}
$f(x) = (x+1)\ln(x^2+x+1)$ sur $]0,+\infty[$

#indice
C'est un produit dont le second facteur est lui-même une forme composée $\ln u$. Deux formules s'emboîtent donc : $(uv)' = u'v+uv'$ à l'extérieur, et $(\ln u)' = \dfrac{u'}{u}$ à l'intérieur. Traite le $\ln u$ à part avant de tout assembler.

Deux ingrédients ici : :voir-exemple[dériver un produit]{id="fvr-produit"} et :voir-exemple[dériver un logarithme]{id="fvr-ln"}.

#solution
Produit dont le second facteur est un $\ln u$.

**Le facteur logarithme d'abord** : avec $u = x^2+x+1$ et $u' = 2x+1$, le tableau de la section 5 donne

$$
\big(\ln(x^2+x+1)\big)' = \frac{2x+1}{x^2+x+1}
$$

**Puis le produit**, avec le premier facteur $x+1$ de dérivée $1$ :

$$
f'(x) = 1\times\ln(x^2+x+1)+(x+1)\times\frac{2x+1}{x^2+x+1}
$$

$$
\boxed{f'(x) = \ln(x^2+x+1)+\frac{(x+1)(2x+1)}{x^2+x+1}}
$$
::

::question{label="15."}
$f(x) = x\cos(2x-1)$ sur $\mathbb{R}$

#indice
Produit, avec un cosinus composé au second facteur. La formule $\big(\cos(ax+b)\big)' = -a\sin(ax+b)$ te donne directement la dérivée de ce facteur — deux erreurs classiques ici : oublier le signe moins, ou oublier le facteur $a$.

Le même schéma sur un autre produit trigonométrique : :voir-exemple[dériver un sinus ou un cosinus]{id="fvr-trigo"}.

#solution
Produit avec $u = x$, $u' = 1$ ; $v = \cos(2x-1)$.

Pour $v'$, on applique la formule de la section 5, $\big(\cos(ax+b)\big)' = -a\sin(ax+b)$, avec $a = 2$ et $b = -1$ :

$$
v' = -2\sin(2x-1)
$$

D'où :

$$
f'(x) = 1\times\cos(2x-1)+x\times\big(-2\sin(2x-1)\big)
$$

$$
\boxed{f'(x) = \cos(2x-1)-2x\sin(2x-1)}
$$
::

::question{label="16."}
$f(x) = \dfrac{1-7x}{2x+1}$ sur $\mathbb{R}-\left\{-\dfrac{1}{2}\right\}$

#indice
Quotient à numérateur non constant : formule complète. Les termes en $x$ vont se neutraliser, il ne restera qu'une constante. Et au dénominateur, recopie soigneusement $v$ avant de l'élever au carré.

La formule déroulée sur un autre quotient : :voir-exemple[dériver un quotient]{id="fvr-quotient"}.

#solution
$u = 1-7x$, $u' = -7$ ; $v = 2x+1$, $v' = 2$.

Numérateur de la formule :

$$
u'v-uv' = -7(2x+1)-(1-7x)\times 2 = -14x-7-2+14x = -9
$$

Les termes en $x$ s'éliminent.

$$
\boxed{f'(x) = -\frac{9}{(2x+1)^2}}
$$

*⚠️ La correction officielle écrit $(2x-1)^2$ au dénominateur : coquille, le dénominateur de $f$ est $2x+1$, donc $v^2 = (2x+1)^2$.*
::

::question{label="17."}
$f(x) = \dfrac{1}{x^2+x+1}$ sur $\mathbb{R}$

#indice
Numérateur constant, donc Prop 3.5. L'énoncé affirme que $f$ est dérivable sur $\mathbb{R}$ tout entier : pour t'en convaincre, calcule le discriminant du dénominateur.

Pour le calcul, :voir-exemple[dériver un inverse]{id="fvr-inverse"} ; pour le domaine et le discriminant, :voir-exemple[justifier un ensemble de dérivabilité]{id="fvr-domaine"}.

#solution
Forme $\dfrac{1}{u}$ avec $u = x^2+x+1$ et $u' = 2x+1$.

*Pourquoi « sur $\mathbb{R}$ » est correct ici* : le discriminant de $x^2+x+1$ vaut $\Delta = 1-4 = -3 < 0$, le dénominateur ne s'annule donc jamais.

La **Prop 3.5** donne :

$$
\boxed{f'(x) = -\frac{2x+1}{(x^2+x+1)^2}}
$$
::

::question{label="18."}
$f(x) = e^{-x^2}$ sur $\mathbb{R}$

#indice
Forme $e^u$ : la formule $(e^u)' = u'e^u$ conserve l'exponentielle intacte et la multiplie par la dérivée de l'exposant. Attention au signe de cet exposant, $u = -x^2$ et non $x^2$.

La formule sur d'autres exponentielles composées : :voir-exemple[dériver une exponentielle]{id="fvr-exp"}.

#solution
Forme $e^u$ (section 5) avec $u = -x^2$, donc $u' = -2x$ :

$$
f'(x) = u'e^u = -2x\,e^{-x^2}
$$

$$
\boxed{f'(x) = -2x\,e^{-x^2}}
$$

L'exponentielle n'est jamais modifiée par la dérivation : elle est simplement multipliée par $u'$.
::

::question{label="19."}
$f(x) = \dfrac{1}{\sqrt{x+1}+1}$ sur $]-1,+\infty[$

#indice
La question la plus emboîtée de l'exercice : une forme $\dfrac{1}{u}$ dont le $u$ contient lui-même une racine composée. Traite $u'$ à part avec la Prop 3.4, puis reporte dans la Prop 3.5. Tu obtiendras une fraction au numérateur d'une fraction : simplifie l'étage.

Le même empilement, couche par couche : :voir-exemple[deux formes composées emboîtées]{id="fvr-compose-empilee"}. Et pour la couche racine seule, :voir-exemple[dériver une racine composée]{id="fvr-racine-composee"}.

#solution
Forme $\dfrac{1}{u}$ avec $u = \sqrt{x+1}+1$.

**Calcul de $u'$** par la **Prop 3.4**, $(\sqrt{w})' = \dfrac{w'}{2\sqrt{w}}$, avec $w = x+1$ et $w' = 1$ :

$$
u' = \frac{1}{2\sqrt{x+1}}
$$

**Puis la Prop 3.5** :

$$
f'(x) = -\frac{u'}{u^2} = -\frac{\dfrac{1}{2\sqrt{x+1}}}{(\sqrt{x+1}+1)^2}
$$

On simplifie l'étage de fractions en faisant passer $2\sqrt{x+1}$ au dénominateur :

$$
\boxed{f'(x) = -\frac{1}{2\sqrt{x+1}\,(\sqrt{x+1}+1)^2}}
$$

La condition $x > -1$ garantit à la fois l'existence de la racine et sa dérivabilité.
::
:::
