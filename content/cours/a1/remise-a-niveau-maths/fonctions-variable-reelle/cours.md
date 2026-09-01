---
title: Fonctions d'une variable réelle — le cours
description: Continuité, théorème des valeurs intermédiaires, dérivabilité, tableau des dérivées usuelles, formes composées et bijections. Chaque notion est suivie d'un exemple entièrement traité.
interactif: true
type: cours
annee: A1
matiere: Remise à niveau en maths
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

::carte-lien{to="/cours/a1/remise-a-niveau-maths/fonctions-variable-reelle/exercices" titre="Les exercices du TD" description="Les six exercices du programme et leurs 53 dérivées, corrigés — indice, solution et rappel de cours s’ouvrent en fenêtre sous chaque question" type="exercices" meta="6 exercices"}
::

::carte-lien{to="/cours/a1/remise-a-niveau-maths/fonctions-variable-reelle/entrainement" titre="La fiche d’entraînement" description="Quinze questions en cinq paliers, du taux d’accroissement jusqu’aux formes composées empilées" type="entrainement" meta="15 questions"}
::

## 1. Continuité

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

## 2. Théorème des valeurs intermédiaires

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

## 3. Dérivabilité : la définition

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

## 4. Le tableau des dérivées usuelles

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

## 5. Les formes composées

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

## 6. Où une fonction est-elle dérivable ?

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

## 7. Bijections

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

## La démarche, toujours la même

1. **Simplifier l'écriture si possible** — c'est le réflexe qui fait gagner le plus de temps.
2. **Identifier la structure** : somme ? produit ? quotient ? forme composée ?
3. **Poser $u$ et $v$, écrire $u'$ et $v'$**, appliquer la formule, puis **simplifier** : développer, mettre au même dénominateur, factoriser.

## Les pièges à retenir

- $\sqrt{x}$ est définie en $0$ mais **pas dérivable** en $0$ ; de même pour $\sqrt u$ là où $u$ s'annule.
- $\lvert x\rvert$ est continue partout, pas dérivable en $0$ : **continue n'implique pas dérivable**.
- Le numérateur de la formule du quotient est $u'v-uv'$, **dans cet ordre**.
- $v' = -1$ pour $v = 1-x$ : la principale source d'erreurs de signe.
- Une constante multiplicative **sort** de la dérivée ; une constante additive **disparaît**.
- Dans toutes les formes composées, le facteur $u'$ s'oublie facilement — c'est lui qu'il faut écrire en premier.
