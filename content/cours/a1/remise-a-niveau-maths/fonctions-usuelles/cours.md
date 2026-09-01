---
title: Fonctions usuelles — le cours
description: Exponentielle, logarithme, équations et limites, trigonométrie, fonctions réciproques et fonctions hyperboliques. Chaque notion est suivie d'un exemple entièrement traité.
interactif: true
type: cours
annee: A1
matiere: Remise à niveau en maths
ordre: 1
icone: i-lucide-function-square
---

::rappel{titre="La boîte à outils du cours"}

- **Déf 1.2** (ln = réciproque de exp) : pour $x>0$, $\;y = \ln(x) \iff e^y = x$.
- **Prop 1.11** : $e^{\ln x} = x$ (pour $x>0$) et $\ln(e^x) = x$.
- **Prop 1.2 / 1.12** (propriétés algébriques) : $e^{a+b} = e^a e^b$, $\ln(ab) = \ln a+\ln b$, $\ln\dfrac{a}{b} = \ln a-\ln b$, $\ln(a^n) = n\ln a$…
- **Prop 1.3** : $e^x > 0$ pour tout $x$. **Prop 1.4 / 1.15** : exp et ln sont **strictement croissantes**.
- **Prop 1.5 / 1.16** (limites) et **Prop 1.6 / 1.17** (croissances comparées : $\lim_{x\to+\infty}\dfrac{e^x}{x} = +\infty$, $\lim_{x\to+\infty}\dfrac{\ln x}{x} = 0$…).
- **Prop 1.9** : $(e^{u})' = u'e^{u}$. **Prop 1.20** : $(\ln u)' = \dfrac{u'}{u}$ (pour $u>0$).
- **Prop 2.3** : $\sin' = \cos$, $\cos' = -\sin$.
- **Déf 3.1** : $\arccos : [-1,1]\to[0,\pi]$, $\arcsin : [-1,1]\to\left[-\frac{\pi}{2},\frac{\pi}{2}\right]$, $\arctan : \mathbb{R}\to\left]-\frac{\pi}{2},\frac{\pi}{2}\right[$, réciproques de cos, sin, tan restreintes. **Prop 3.1–3.3** : $\arccos(\cos x) = x$ **seulement** si $x\in[0,\pi]$, etc. **Prop 3.4** : leurs dérivées.
- **Déf 4.1** : $\mathrm{ch}\,x = \dfrac{e^x+e^{-x}}{2}$, $\mathrm{sh}\,x = \dfrac{e^x-e^{-x}}{2}$, $\mathrm{th}\,x = \dfrac{\mathrm{sh}\,x}{\mathrm{ch}\,x}$. **Prop 4.1** : $\mathrm{ch}^2x-\mathrm{sh}^2x = 1$.
- Du chapitre *Fonctions d'une variable réelle* : $(uv)' = u'v+uv'$, $\left(\dfrac{u}{v}\right)' = \dfrac{u'v-uv'}{v^2}$, $(\sqrt{u})' = \dfrac{u'}{2\sqrt{u}}$, $\left(\dfrac{1}{u}\right)' = -\dfrac{u'}{u^2}$.

::

::carte-lien{to="/cours/a1/remise-a-niveau-maths/fonctions-usuelles/exercices" titre="Les exercices du TD" description="Les dix exercices du programme, corrigés — indice, solution et rappel de cours s’ouvrent en fenêtre sous chaque question" type="exercices" meta="10 exercices"}
::

::carte-lien{to="/cours/a1/remise-a-niveau-maths/fonctions-usuelles/entrainement" titre="La fiche d’entraînement" description="Quinze questions en cinq paliers, des règles de calcul sur exp et ln jusqu’aux réciproques hyperboliques" type="entrainement" meta="15 questions"}
::

::carte-lien{to="/cours/a1/remise-a-niveau-maths/trigonometrie/cours" titre="Guide : comprendre le cercle trigonométrique" description="Les sections 5 et 6 supposent le cercle acquis. S’il ne l’est pas, tout y est repris depuis le début, figure manipulable à l’appui" icone="i-lucide-compass" meta="Cercle interactif"}
::

## 1. Exponentielle

C'est **l'unique** fonction dérivable vérifiant $f' = f$ et $f(0) = 1$ (Théorème 1.1). Tout le reste en découle. On note $e = \exp(1)\approx 2{,}718$ et $\exp(x) = e^x$.

**Les règles algébriques (Prop 1.2)** — l'exponentielle transforme les sommes en produits :

$$
e^{a+b} = e^ae^b \qquad e^{-a} = \frac{1}{e^a} \qquad e^{a-b} = \frac{e^a}{e^b} \qquad (e^a)^n = e^{na}
$$

**Les faits essentiels** :

- $e^x > 0$ **pour tout $x$** (Prop 1.3) : une exponentielle n'est jamais nulle ni négative. Réflexe : dans un signe de dérivée, un facteur $e^{\text{quelque chose}}$ s'élimine toujours.
- **Strictement croissante** (Prop 1.4) : $e^a < e^b \iff a < b$, et $e^a = e^b \iff a = b$.
- **Limites** : $\displaystyle\lim_{x\to-\infty}e^x = 0$ et $\displaystyle\lim_{x\to+\infty}e^x = +\infty$.
- **Dérivée composée** (Prop 1.9) : $(e^u)' = u'e^u$.

::exemple{id="fu-exp-regles" titre="Manipuler les exponentielles avec les règles algébriques" pour="Le préalable à toute équation ou simplification"}
Toutes ces simplifications consistent à **ramener l'expression à une seule exponentielle**, en additionnant ou soustrayant les exposants.

$$
e^{x+2} = e^2e^x \qquad e^{3x} = (e^x)^3 \qquad \frac{e^{5x}}{e^{2x}} = e^{3x}
$$

**Un cas avec plusieurs facteurs.** Simplifier $\dfrac{e^{x}\,e^{2x+1}}{e^{x-1}}$ : on calcule l'exposant total,

$$
x+(2x+1)-(x-1) = 2x+2 \qquad\text{donc}\qquad \frac{e^{x}\,e^{2x+1}}{e^{x-1}} = e^{2x+2}
$$

**Un cas avec une parenthèse.** $e^{-x}(e^x+1) = e^{-x}e^x+e^{-x} = e^0+e^{-x} = 1+e^{-x}$.

Le point à ne jamais oublier : $e^{a+b} = e^ae^b$, mais $e^{a}+e^{b}$ **ne se simplifie pas**. Une somme d'exponentielles reste une somme.
::

## 2. Logarithme népérien

$\exp$ est continue et strictement croissante de $\mathbb{R}$ sur $]0,+\infty[$ : c'est une bijection, et sa réciproque est **ln** (Déf 1.2).

$$
\text{pour } x>0 : \quad y = \ln x \iff e^y = x
$$

$$
e^{\ln x} = x \ (x>0) \qquad \ln(e^x) = x \qquad \ln 1 = 0 \qquad \ln e = 1
$$

⚠️ **ln n'est définie que sur $]0,+\infty[$.** Premier réflexe devant toute équation ou inéquation : le **domaine**.

**Les règles algébriques (Prop 1.12)** — le logarithme transforme les produits en sommes :

$$
\ln(ab) = \ln a+\ln b \qquad \ln\frac1b = -\ln b \qquad \ln\frac ab = \ln a-\ln b \qquad \ln(a^n) = n\ln a \qquad \ln\sqrt a = \frac12\ln a
$$

**Les faits essentiels** : strictement croissante (Prop 1.15), donc $\ln a = \ln b \iff a = b$ et $\ln a \leqslant \ln b \iff a \leqslant b$ pour $a,b>0$ ; signe négatif sur $]0,1[$ et positif sur $]1,+\infty[$ ; limites $-\infty$ en $0^+$ et $+\infty$ en $+\infty$ ; dérivées $\ln'(x) = \dfrac1x$ et $(\ln u)' = \dfrac{u'}{u}$.

::exemple{id="fu-ln-regles" titre="Manipuler les logarithmes avec les règles algébriques" pour="Décomposer, recomposer, et faire disparaître un ln"}
$$
\ln 8 = \ln(2^3) = 3\ln 2 \qquad \ln 6 = \ln 2+\ln 3 \qquad \ln\frac34 = \ln 3-2\ln 2
$$

$$
\ln\sqrt5 = \frac12\ln 5 \qquad \ln\frac{1}{e^2} = -2
$$

**Faire disparaître un logarithme.** L'égalité $e^{\ln a} = a$ est l'outil central :

$$
e^{2\ln 3} = \left(e^{\ln 3}\right)^2 = 3^2 = 9
$$

**Simplifier une différence.** $\ln(4e^3)-\ln 4 = \big(\ln 4+3\big)-\ln 4 = 3$.

Le piège symétrique de celui de l'exponentielle : $\ln(a+b)$ **ne se décompose pas**. Seuls les produits, quotients et puissances se transforment.
::

## 3. Équations et inéquations avec ln et exp

**La méthode, en trois étapes qui ne changent jamais :**

1. **Domaine.** Chaque $\ln(A)$ impose $A > 0$ ; on intersecte toutes les conditions. Une exponentielle n'impose rien.
2. **Transformer.** $\ln A = \ln B \iff A = B$ ; $\ln A = c \iff A = e^c$ ; $e^A = c$ (avec $c>0$) $\iff A = \ln c$. Pour les inéquations, la stricte croissance **conserve le sens** de l'inégalité.
3. **Vérifier** que les solutions trouvées appartiennent bien au domaine — et les écarter sinon.

::exemple{id="fu-equation-ln" titre="Résoudre une équation de la forme ln(A) = c" pour="Exercice 1 — les trois étapes sur un cas simple"}
Résolvons $\ln(2x-6) = 2$.

**Domaine.** Il faut $2x-6 > 0$, soit $x > 3$. On travaille donc sur $]3,+\infty[$.

**Transformation.** On applique l'exponentielle des deux côtés, ce qui est licite puisqu'elle est strictement croissante :

$$
2x-6 = e^2 \quad\Longrightarrow\quad x = \frac{e^2+6}{2} = 3+\frac{e^2}{2}
$$

**Vérification.** $e^2\approx 7{,}39$, donc $x \approx 6{,}69 > 3$ : la solution appartient au domaine.

$$
S = \left\{3+\frac{e^2}{2}\right\}
$$

⚠️ On laisse la réponse sous forme exacte, avec $e^2$ — pas de valeur décimale approchée dans l'ensemble solution.
::

::exemple{id="fu-equation-exp" titre="Résoudre une équation de la forme exp(A) = c" pour="Exercice 1 — le chemin inverse, et le cas impossible"}
Résolvons $e^{3x+1} = 5$.

Aucune contrainte de domaine ici : l'exponentielle est définie partout. On applique $\ln$ des deux côtés :

$$
3x+1 = \ln 5 \quad\Longrightarrow\quad x = \frac{\ln 5-1}{3} \qquad S = \left\{\frac{\ln 5-1}{3}\right\}
$$

**Le cas où il n'y a pas de solution.** Considérons $e^{2x} = -4$. Inutile de calculer : une exponentielle est **toujours strictement positive**, elle ne peut pas valoir $-4$. Donc $S = \varnothing$.

C'est le réflexe à avoir avant tout calcul : $e^A = c$ n'a de sens que si $c > 0$.
::

::exemple{id="fu-equation-ln-ln" titre="Résoudre une équation de la forme ln(A) = ln(B)" pour="Exercice 1 — quand le logarithme est des deux côtés"}
Résolvons $\ln(x+5) = \ln(2x-1)$.

**Domaine.** Deux conditions : $x+5 > 0$, soit $x > -5$, et $2x-1 > 0$, soit $x > \dfrac12$. L'intersection donne $x > \dfrac12$.

**Transformation.** La stricte croissance de $\ln$ permet de supprimer les logarithmes :

$$
x+5 = 2x-1 \quad\Longrightarrow\quad x = 6
$$

**Vérification.** $6 > \dfrac12$ : la solution convient. $S = \{6\}$.

**Deux issues possibles qu'il faut accepter.** L'égalité des arguments peut aboutir à une **contradiction** — auquel cas $S = \varnothing$ — ou fournir une valeur **hors du domaine**, qu'il faut alors rejeter. Une équation qui n'a aucune solution est un résultat parfaitement valide : il faut le conclure explicitement plutôt que de chercher l'erreur.
::

::exemple{id="fu-inequation-ln" titre="Résoudre une inéquation avec des logarithmes" pour="Exercice 2 — le domaine, puis le sens de l'inégalité"}
Résolvons $\ln(3x) \leqslant \ln(x+2)$.

**Domaine.** Il faut $3x > 0$ et $x+2 > 0$, soit $x > 0$ et $x > -2$. L'intersection est $]0,+\infty[$.

**Transformation.** $\ln$ étant **strictement croissante**, l'inégalité entre les logarithmes équivaut à la même inégalité entre les arguments, **dans le même sens** :

$$
3x \leqslant x+2 \quad\Longrightarrow\quad 2x \leqslant 2 \quad\Longrightarrow\quad x \leqslant 1
$$

**Intersection avec le domaine.** On croise $x \leqslant 1$ avec $x > 0$ :

$$
S = \,]0,\,1]
$$

L'erreur la plus fréquente n'est pas dans le calcul mais dans l'oubli du domaine : sans lui, on aurait écrit $]-\infty,1]$, qui contient des valeurs où l'inéquation n'a aucun sens.
::

::exemple{id="fu-signe-second-degre" titre="Étudier le signe d'un trinôme du second degré" pour="Exercices 2 et 3 — trouver un domaine, ou le signe d'une dérivée"}
C'est l'outil dont on a besoin dès qu'un $\ln$ ou une racine porte sur un polynôme de degré $2$.

Résolvons $x^2-x-6 > 0$. On cherche d'abord les racines :

$$
\Delta = (-1)^2-4\times 1\times(-6) = 1+24 = 25 \qquad x = \frac{1\pm 5}{2} \in \{-2,\ 3\}
$$

**La règle du signe** : un trinôme est **du signe de $a$ à l'extérieur des racines**, et du signe contraire entre elles. Ici $a = 1 > 0$, donc le trinôme est positif à l'extérieur :

$$
S = \,]-\infty,\,-2[\ \cup\ ]3,+\infty[
$$

⚠️ **Quand $a < 0$, tout s'inverse** : un trinôme comme $-x^2+4x-3$ (racines $1$ et $3$) est **positif entre ses racines**, sur $]1,3[$, et négatif à l'extérieur. C'est le cas typique quand un logarithme porte sur un trinôme de coefficient dominant négatif : son domaine est alors un **intervalle borné**.
::

## 4. Limites et croissances comparées

- **L'exponentielle bat les puissances** (Prop 1.6, 1.7) : $\displaystyle\lim_{x\to+\infty}\frac{e^x}{x^n} = +\infty$ et $\displaystyle\lim_{x\to-\infty}x\,e^x = 0$.
- **Les puissances battent le logarithme** (Prop 1.17) : $\displaystyle\lim_{x\to+\infty}\frac{\ln x}{x} = 0$ et $\displaystyle\lim_{x\to 0^+}x\ln x = 0^-$.
- $\displaystyle\lim_{x\to 0}\frac{e^x-1}{x} = 1$ (Prop 1.8) : c'est le taux d'accroissement de $\exp$ en $0$.

::exemple{id="fu-croissances-comparees" titre="Lever une forme indéterminée avec les croissances comparées" pour="Exercice 3 — les limites aux bornes du domaine"}
La hiérarchie à retenir : **exponentielle $\gg$ puissances $\gg$ logarithme**. Celui qui gagne impose sa limite.

$$
\lim_{x\to+\infty}\frac{e^x}{x^2} = +\infty \qquad\text{donc}\qquad \lim_{x\to+\infty}\frac{x^2}{e^x} = 0
$$

**Une différence indéterminée.** Pour $\displaystyle\lim_{x\to+\infty}\left(e^x-x^{10}\right)$, la forme est $\infty-\infty$. On **factorise par le terme dominant** :

$$
e^x-x^{10} = e^x\left(1-\frac{x^{10}}{e^x}\right)
$$

La parenthèse tend vers $1-0 = 1$ et $e^x\to+\infty$, donc la limite est $+\infty$.

**Un produit indéterminé.** Pour $\displaystyle\lim_{x\to 0^+}x\ln x$, la forme est $0\times(-\infty)$ : le cours donne directement $0^-$ — c'est la puissance qui l'emporte.

**Le réflexe général** : devant $\infty-\infty$ ou $0\times\infty$, factoriser par le terme le plus fort, puis appliquer la hiérarchie.
::

::exemple{id="fu-limite-composee" titre="Calculer une limite par changement de variable" pour="Exercice 3 — quand l'exposant est lui-même une fonction"}
Quand l'expression contient une fonction composée, on **pose une nouvelle variable** et on regarde vers quoi elle tend.

**Un exposant qui explose.** Pour $\displaystyle\lim_{x\to 0^+}e^{-1/x}$, on pose $X = \dfrac1x$. Quand $x\to 0^+$, on a $X\to+\infty$, et l'expression devient $e^{-X}$, qui tend vers $0$.

$$
\lim_{x\to 0^+}e^{-1/x} = 0
$$

**Attention au côté.** La même expression en $0^-$ donne $X\to-\infty$, donc $e^{-X}\to+\infty$ : la limite **dépend du côté**. Dès que $\dfrac1x$ apparaît, il faut traiter $0^+$ et $0^-$ séparément.

**Une composition avec un logarithme.** Pour $\displaystyle\lim_{x\to+\infty}\frac{\ln x}{\sqrt x}$, on pose $X = \sqrt x$, donc $x = X^2$ et $\ln x = 2\ln X$ :

$$
\frac{\ln x}{\sqrt x} = \frac{2\ln X}{X}\xrightarrow[X\to+\infty]{} 0
$$
::

::exemple{id="fu-etude-plan" titre="Mener une étude de fonction complète" pour="Exercice 3 — le plan à suivre, du domaine au tableau de variations"}
Le plan ne varie jamais. Déroulons-le sur $g(x) = (x-1)e^x$.

**1. Domaine.** Produit d'un polynôme et d'une exponentielle, tous deux définis partout : $D_g = \mathbb{R}$.

**2. Limites aux bornes.**

En $+\infty$ : $x-1\to+\infty$ et $e^x\to+\infty$, donc $g(x)\to+\infty$.

En $-\infty$ : la forme est $(-\infty)\times 0$. On développe et on applique les croissances comparées, $xe^x\to 0$ et $e^x\to 0$ :

$$
g(x) = xe^x-e^x \xrightarrow[x\to-\infty]{} 0
$$

Comme $g$ est négative près de $-\infty$, la courbe s'approche de l'axe des abscisses **par en dessous** : l'axe est une **asymptote horizontale**.

**3. Dérivée, puis factorisation.**

$$
g'(x) = 1\times e^x+(x-1)e^x = e^x\big(1+x-1\big) = x\,e^x
$$

**4. Signe de la dérivée.** Comme $e^x > 0$ pour tout $x$, le signe de $g'$ est **exactement celui de $x$** : négatif avant $0$, positif après.

**5. Tableau de variations.**

| $x$ | $-\infty$ | | $0$ | | $+\infty$ |
|---|---|---|---|---|---|
| $g'(x)$ | | $-$ | $0$ | $+$ | |
| $g(x)$ | $0$ | décroissante | $-1$ | croissante | $+\infty$ |

$g$ admet donc un **minimum** en $0$, valant $g(0) = -1$.

**Ce qu'il faut retenir** : factoriser la dérivée par l'exponentielle est ce qui rend l'étape 4 immédiate. Sans cette factorisation, le signe de $g'$ serait bien plus pénible à discuter.
::

::exemple{id="fu-tvi" titre="Montrer qu'une équation a une solution unique sur un intervalle" pour="Exercice 3 — quand une fonction auxiliaire s'annule une seule fois"}
La méthode combine deux ingrédients : le **TVI** pour l'existence, la **stricte monotonie** pour l'unicité.

Montrons que $x-2+\ln x = 0$ admet une solution unique sur $]0,+\infty[$.

**Continuité.** $g(x) = x-2+\ln x$ est somme d'un polynôme et de $\ln$, donc continue sur $]0,+\infty[$.

**Monotonie.** $g'(x) = 1+\dfrac1x > 0$ sur $]0,+\infty[$ : $g$ est **strictement croissante**.

**Changement de signe.** On évalue en deux points bien choisis :

$$
g(1) = 1-2+0 = -1 < 0 \qquad g(2) = 2-2+\ln 2 = \ln 2 > 0
$$

**Conclusion.** $g$ est continue et strictement croissante, et change de signe entre $1$ et $2$ : elle s'annule **une fois et une seule**, en un réel $\alpha \in\ ]1,2[$.

C'est aussi ce schéma qu'on applique lorsque l'énoncé demande de montrer qu'une dérivée s'annule une seule fois par intervalle : on étudie la dérivée seconde pour obtenir la monotonie, puis on encadre.
::

## 5. Trigonométrie

Sur le cercle de rayon $1$, $\cos\alpha$ est l'**abscisse** du point et $\sin\alpha$ son **ordonnée**. D'où $\cos^2\alpha+\sin^2\alpha = 1$ et $-1\leqslant\cos,\sin\leqslant 1$.

::cercle-trigo{titre="Le cercle, à garder sous les yeux" resume="Déplace le point : le segment horizontal est cos α, le vertical est sin α. L’onglet « Symétries » montre d’où viennent les formules d’angles associés." angle="60" modes="explorer,symetries,equations"}
::

Tout ce qui suit se lit sur cette figure. Le détail complet — radians, quadrants, méthode pour ramener un angle — est repris dans le [guide dédié](/cours/a1/remise-a-niveau-maths/trigonometrie/cours).

| $x$ | $0$ | $\dfrac{\pi}{6}$ | $\dfrac{\pi}{4}$ | $\dfrac{\pi}{3}$ | $\dfrac{\pi}{2}$ | $\pi$ |
|---|---|---|---|---|---|---|
| $\cos x$ | $1$ | $\dfrac{\sqrt3}{2}$ | $\dfrac{\sqrt2}{2}$ | $\dfrac12$ | $0$ | $-1$ |
| $\sin x$ | $0$ | $\dfrac12$ | $\dfrac{\sqrt2}{2}$ | $\dfrac{\sqrt3}{2}$ | $1$ | $0$ |

La ligne des cosinus se lit $\dfrac{\sqrt4}{2},\dfrac{\sqrt3}{2},\dfrac{\sqrt2}{2},\dfrac{\sqrt1}{2},\dfrac{\sqrt0}{2}$ — et celle des sinus est la même, à l'envers.

**Parité et périodicité** : $\cos(-x) = \cos x$ (paire), $\sin(-x) = -\sin x$ (impaire), et les deux sont $2\pi$-périodiques.

**Dérivées** : $\sin' = \cos$, $\cos' = -\sin$, $\big(\sin(ax+b)\big)' = a\cos(ax+b)$, $\big(\cos(ax+b)\big)' = -a\sin(ax+b)$.

::exemple{id="fu-trigo-valeurs" titre="Ramener un angle dans le tableau des valeurs remarquables" pour="Exercice 4 — se ramener au premier quadrant"}
Un angle qui ne figure pas dans le tableau s'y ramène par **périodicité** puis **parité**.

$$
\cos\left(-\frac{\pi}{3}\right) = \cos\frac{\pi}{3} = \frac12 \qquad\text{(le cosinus est pair)}
$$

$$
\sin\left(\frac{13\pi}{6}\right) = \sin\left(\frac{\pi}{6}+2\pi\right) = \sin\frac{\pi}{6} = \frac12 \qquad\text{(période } 2\pi\text{)}
$$

$$
\cos\left(\frac{7\pi}{4}\right) = \cos\left(\frac{7\pi}{4}-2\pi\right) = \cos\left(-\frac{\pi}{4}\right) = \frac{\sqrt2}{2}
$$

**Les deux relations qui servent le plus** :

$$
\sin\theta = \cos\left(\frac{\pi}{2}-\theta\right) \qquad \sin(\pi-\theta) = \sin\theta
$$

La première permet de convertir un sinus en cosinus — indispensable pour résoudre une équation qui mélange les deux.
::

::exemple{id="fu-equation-trigo-cos" titre="Résoudre une équation cos(A) = cos(B)" pour="Exercice 4 — les deux familles de solutions"}
La formule du cours :

$$
\cos A = \cos B \iff A = B+2k\pi \ \text{ ou }\ A = -B+2k\pi \qquad (k\in\mathbb{Z})
$$

Résolvons $\cos x = -\dfrac{\sqrt2}{2}$ sur $[0,2\pi]$.

**Étape 1 — reconnaître l'angle.** On cherche $B$ tel que $\cos B = -\dfrac{\sqrt2}{2}$ : c'est $B = \dfrac{3\pi}{4}$.

**Étape 2 — écrire les deux familles.**

$$
x = \frac{3\pi}{4}+2k\pi \qquad\text{ou}\qquad x = -\frac{3\pi}{4}+2k\pi
$$

**Étape 3 — sélectionner celles de l'intervalle.** Dans $[0,2\pi]$, la première famille donne $\dfrac{3\pi}{4}$ (pour $k=0$). La seconde donne, pour $k=1$ :

$$
-\frac{3\pi}{4}+2\pi = \frac{5\pi}{4}
$$

$$
S = \left\{\frac{3\pi}{4},\ \frac{5\pi}{4}\right\}
$$

**Ne jamais s'arrêter à une seule famille** : un cosinus prend chaque valeur deux fois par tour, une fois au-dessus de l'axe et une fois en dessous.
::

::exemple{id="fu-equation-trigo-sin-cos" titre="Résoudre une équation mêlant sinus et cosinus" pour="Exercice 4 — tout convertir en cosinus d'abord"}
Quand les deux fonctions apparaissent, on **convertit l'une en l'autre** avec $\sin\theta = \cos\left(\dfrac{\pi}{2}-\theta\right)$, puis on applique la formule des cosinus.

Résolvons $\sin(2x) = \cos\left(x+\dfrac{\pi}{6}\right)$.

**Conversion.** L'identité $\sin\theta = \cos\!\left(\dfrac{\pi}{2}-\theta\right)$ est vraie pour **tout** $\theta$ : on a donc le droit d'y poser $\theta = 2x$, à condition de remplacer $\theta$ partout.

$$
\sin\big(\underbrace{2x}_{\theta}\big) = \cos\!\left(\frac{\pi}{2}-\underbrace{2x}_{\theta}\right)
$$

Le membre de gauche est maintenant un cosinus, le membre de droite n'a pas bougé : l'équation est devenue une égalité entre deux cosinus, à laquelle on peut appliquer la formule précédente.

$$
\cos\left(\frac{\pi}{2}-2x\right) = \cos\left(x+\frac{\pi}{6}\right)
$$

D'où vient l'identité elle-même : c'est la symétrie du cercle par rapport à la diagonale $y=x$, qui échange abscisse et ordonnée donc cosinus et sinus. Le détail est dans le [guide de trigonométrie](/cours/a1/remise-a-niveau-maths/trigonometrie/cours#_6-les-angles-associés-ou-les-quatre-symétries).

**Ce que la formule donne ici.** On applique $\cos A = \cos B$ avec $A = \dfrac{\pi}{2}-2x$ et $B = x+\dfrac{\pi}{6}$. Elle produit **deux** équations, et chacune est une banale équation du premier degré : on rassemble les $x$ d'un côté, les multiples de $\pi$ de l'autre, puis on isole $x$.

**Première famille — $A = B+2k\pi$**, les arguments sont égaux modulo $2\pi$ :

$$
\frac{\pi}{2}-2x = x+\frac{\pi}{6}+2k\pi
$$

On ajoute $2x$ des deux côtés pour vider le membre de gauche de ses $x$, et on retranche $\dfrac{\pi}{6}$ pour vider le membre de droite de sa constante :

$$
\frac{\pi}{2}-\frac{\pi}{6} = 3x+2k\pi
$$

À gauche, même dénominateur : $\dfrac{\pi}{2} = \dfrac{3\pi}{6}$, donc $\dfrac{3\pi}{6}-\dfrac{\pi}{6} = \dfrac{2\pi}{6} = \dfrac{\pi}{3}$.

$$
\frac{\pi}{3} = 3x+2k\pi \qquad\Longrightarrow\qquad 3x = \frac{\pi}{3}-2k\pi
$$

Reste à diviser **tout** le membre de droite par $3$ — le $2k\pi$ compris, c'est là qu'on se trompe :

$$
x = \frac{\pi}{9}-\frac{2k\pi}{3} \qquad\text{soit}\qquad x = \frac{\pi}{9}+\frac{2k\pi}{3} \quad (k\in\mathbb{Z})
$$

Les deux écritures désignent le même ensemble : $k$ parcourt $\mathbb{Z}$, donc $-k$ aussi. Autant garder le signe $+$.

**Seconde famille — $A = -B+2k\pi$**, les arguments sont opposés modulo $2\pi$. Le piège est le signe : $-B = -\left(x+\dfrac{\pi}{6}\right) = -x-\dfrac{\pi}{6}$, le moins se distribue sur les **deux** termes.

$$
\frac{\pi}{2}-2x = -x-\frac{\pi}{6}+2k\pi
$$

Même manœuvre : on ajoute $2x$ des deux côtés, puis $\dfrac{\pi}{6}$.

$$
\frac{\pi}{2}+\frac{\pi}{6} = x+2k\pi
$$

Et $\dfrac{3\pi}{6}+\dfrac{\pi}{6} = \dfrac{4\pi}{6} = \dfrac{2\pi}{3}$, d'où :

$$
x = \frac{2\pi}{3}+2k\pi \qquad (k\in\mathbb{Z})
$$

::rappel{titre="Pourquoi les deux familles n'ont pas le même pas" icone="i-lucide-ruler"}
Première famille : $x = \dfrac{\pi}{9}+\dfrac{2k\pi}{3}$ — les solutions sont espacées de $\dfrac{2\pi}{3}$, il y en a **trois par tour**.

Seconde famille : $x = \dfrac{2\pi}{3}+2k\pi$ — espacées de $2\pi$, **une seule par tour**.

L'écart vient de la division par $3$ de la première famille, elle-même héritée du $2x$ de l'énoncé : le coefficient devant $x$ divise le pas. C'est l'erreur la plus fréquente au moment de lister les solutions d'un intervalle donné — on n'en trouve qu'une là où il y en a trois.
::

**Vérification sur un représentant de chaque famille.** Pour $x = \dfrac{\pi}{9}$ : $\sin\dfrac{2\pi}{9} = \sin 40° \approx 0{,}643$ et $\cos\left(\dfrac{\pi}{9}+\dfrac{\pi}{6}\right) = \cos 50°\approx 0{,}643$. Pour $x = \dfrac{2\pi}{3}$ : $\sin\dfrac{4\pi}{3} = -\dfrac{\sqrt3}{2}$ et $\cos\dfrac{5\pi}{6} = -\dfrac{\sqrt3}{2}$. Les deux familles conviennent.

Vérifier un représentant de chaque famille est le meilleur moyen de détecter une erreur de signe dans ce type de résolution.
::

::exemple{id="fu-derivee-trigo" titre="Dériver une expression trigonométrique" pour="Exercice 5 — somme, produit, puissance et quotient"}
Tout repose sur $\sin' = \cos$, $\cos' = -\sin$, et les formules générales appliquées telles quelles.

**Somme.** $\big(x^3+\sin x\big)' = 3x^2+\cos x$.

**Composée.** $\big(\cos(3x)\big)' = -3\sin(3x)$ — le coefficient sort, et le cosinus donne un signe moins.

$$
\big(\sin(x^2)\big)' = 2x\cos(x^2)
$$

**Produit.** $\big(x\sin x\big)' = \sin x+x\cos x$.

**Puissance.** $\big(\cos^4x\big)'$ se lit comme $(u^4)'$ avec $u = \cos x$ et $u' = -\sin x$ :

$$
\big(\cos^4x\big)' = 4\times(-\sin x)\times\cos^3x = -4\sin x\cos^3x
$$

**Quotient.** Soit $f(x) = \dfrac{\sin x}{1+\cos x}$, avec $u' = \cos x$ et $v' = -\sin x$ :

$$
f'(x) = \frac{\cos x(1+\cos x)+\sin^2x}{(1+\cos x)^2} = \frac{\cos x+\cos^2x+\sin^2x}{(1+\cos x)^2} = \frac{1+\cos x}{(1+\cos x)^2} = \frac{1}{1+\cos x}
$$

L'avant-dernière étape utilise $\cos^2+\sin^2 = 1$ : **penser systématiquement à cette identité** pour simplifier un résultat trigonométrique qui paraît compliqué.
::

## 6. Fonctions trigonométriques réciproques

$\cos$, $\sin$ et $\tan$ ne sont pas bijectives sur $\mathbb{R}$ : on les **restreint** à un intervalle de stricte monotonie avant d'inverser.

| Fonction | restreinte à | Réciproque | à valeurs dans |
|---|---|---|---|
| $\cos$ | $[0,\pi]$ | $\arccos : [-1,1]\to$ | $[0,\pi]$ |
| $\sin$ | $\left[-\frac{\pi}{2},\frac{\pi}{2}\right]$ | $\arcsin : [-1,1]\to$ | $\left[-\frac{\pi}{2},\frac{\pi}{2}\right]$ |
| $\tan$ | $\left]-\frac{\pi}{2},\frac{\pi}{2}\right[$ | $\arctan : \mathbb{R}\to$ | $\left]-\frac{\pi}{2},\frac{\pi}{2}\right[$ |

**Dérivées** : $\arccos'x = \dfrac{-1}{\sqrt{1-x^2}}$, $\arcsin'x = \dfrac{1}{\sqrt{1-x^2}}$, $\arctan'x = \dfrac{1}{1+x^2}$.

::cercle-trigo{titre="Pourquoi arccos(cos x) ne rend pas toujours x" resume="L’arc épais est l’intervalle où la réciproque a le droit d’atterrir. Déplace θ en dehors : le résultat change." angle="225" mode="reciproques" modes="reciproques"}
::

::exemple{id="fu-arc-valeurs" titre="Calculer une valeur d'arccos, arcsin ou arctan" pour="Exercice 6 — la lecture inverse du tableau, dans le bon intervalle"}
La phrase à se répéter : **$\arccos x$ est l'unique angle de $[0,\pi]$ dont le cosinus vaut $x$** — et de même pour les autres, chacun avec son intervalle.

**Un arccos.** Quel angle de $[0,\pi]$ a pour cosinus $-\dfrac12$ ? On sait que $\cos\dfrac{\pi}{3} = \dfrac12$, et l'angle de cosinus opposé dans $[0,\pi]$ est son supplémentaire :

$$
\arccos\left(-\frac12\right) = \pi-\frac{\pi}{3} = \frac{2\pi}{3}
$$

**Un arcsin.** Quel angle de $\left[-\dfrac{\pi}{2},\dfrac{\pi}{2}\right]$ a pour sinus $-\dfrac{\sqrt3}{2}$ ? Le sinus est impair, donc

$$
\arcsin\left(-\frac{\sqrt3}{2}\right) = -\arcsin\frac{\sqrt3}{2} = -\frac{\pi}{3}
$$

**Un arctan.** $\arctan(-1) = -\dfrac{\pi}{4}$, car $\tan\left(-\dfrac{\pi}{4}\right) = -1$ et $-\dfrac{\pi}{4}$ appartient bien à $\left]-\dfrac{\pi}{2},\dfrac{\pi}{2}\right[$.

**La vérification à faire à chaque fois** : le résultat appartient-il à l'intervalle de la fonction ? $\arccos$ ne renvoie jamais de valeur négative ; $\arcsin$ et $\arctan$ ne dépassent jamais $\dfrac{\pi}{2}$ en valeur absolue.
::

::exemple{id="fu-arc-compose" titre="Le piège de arccos(cos x) et de ses analogues" pour="Exercice 6 — quand l'angle sort de l'intervalle de la réciproque"}
$\arccos(\cos x) = x$ **uniquement si** $x\in[0,\pi]$. Sinon, il faut d'abord ramener l'angle dans le bon intervalle, **sans changer la valeur du cosinus**.

**Premier cas.** Calculons $\arccos\left(\cos\dfrac{5\pi}{4}\right)$. L'angle $\dfrac{5\pi}{4}$ n'est pas dans $[0,\pi]$. On cherche donc un angle de $[0,\pi]$ ayant le même cosinus :

$$
\cos\frac{5\pi}{4} = \cos\left(-\frac{5\pi}{4}\right) = \cos\left(-\frac{5\pi}{4}+2\pi\right) = \cos\frac{3\pi}{4}
$$

et $\dfrac{3\pi}{4}\in[0,\pi]$, donc la réponse est $\dfrac{3\pi}{4}$ — **pas** $\dfrac{5\pi}{4}$.

**Deuxième cas.** Pour $\arcsin\left(\sin\dfrac{2\pi}{3}\right)$, l'intervalle visé est $\left[-\dfrac{\pi}{2},\dfrac{\pi}{2}\right]$. On utilise $\sin(\pi-\theta) = \sin\theta$ :

$$
\sin\frac{2\pi}{3} = \sin\left(\pi-\frac{2\pi}{3}\right) = \sin\frac{\pi}{3} \qquad\text{et}\qquad \frac{\pi}{3}\in\left[-\frac{\pi}{2},\frac{\pi}{2}\right]
$$

La réponse est donc $\dfrac{\pi}{3}$.

**Dans l'autre sens, aucun piège** : $\cos(\arccos x) = x$ pour **tout** $x\in[-1,1]$. C'est la composition « réciproque à l'extérieur » qui demande de la vigilance.
::

::exemple{id="fu-derivee-nulle" titre="Démontrer une identité par dérivée nulle plus un point" pour="Exercice 6 — la méthode pour prouver qu'une somme est constante"}
Pour montrer qu'une expression vaut une constante sur un intervalle, on montre que **sa dérivée est nulle**, puis on l'évalue **en un point bien choisi**.

Montrons que $\arctan x+\arctan\dfrac1x = \dfrac{\pi}{2}$ pour tout $x > 0$.

**Étape 1 — poser la fonction.** $f(x) = \arctan x+\arctan\dfrac1x$ sur $]0,+\infty[$.

**Étape 2 — dériver.** Le second terme est une composée, avec $u = \dfrac1x$ et $u' = -\dfrac{1}{x^2}$ :

$$
f'(x) = \frac{1}{1+x^2}+\left(-\frac{1}{x^2}\right)\times\frac{1}{1+\dfrac{1}{x^2}}
$$

On simplifie le second terme en multipliant haut et bas par $x^2$ :

$$
\left(-\frac{1}{x^2}\right)\times\frac{x^2}{x^2+1} = -\frac{1}{x^2+1}
$$

$$
f'(x) = \frac{1}{1+x^2}-\frac{1}{1+x^2} = 0
$$

**Étape 3 — conclure avec un point.** Une fonction de dérivée nulle sur un **intervalle** y est constante. On évalue en $x = 1$ :

$$
f(1) = \arctan 1+\arctan 1 = \frac{\pi}{4}+\frac{\pi}{4} = \frac{\pi}{2}
$$

Donc $f(x) = \dfrac{\pi}{2}$ pour tout $x>0$.

⚠️ **L'argument exige un intervalle.** Sur une réunion d'intervalles disjoints, la constante peut différer d'un morceau à l'autre — c'est exactement ce qui se passe ici pour $x<0$, où la somme vaut $-\dfrac{\pi}{2}$.
::

## 7. Fonctions hyperboliques

$$
\mathrm{ch}\,x = \frac{e^x+e^{-x}}{2} \qquad \mathrm{sh}\,x = \frac{e^x-e^{-x}}{2} \qquad \mathrm{th}\,x = \frac{\mathrm{sh}\,x}{\mathrm{ch}\,x}
$$

$\mathrm{ch}\,0 = 1$, $\mathrm{sh}\,0 = 0$, $\mathrm{th}\,0 = 0$. **ch est paire, sh et th impaires.** $\mathrm{ch}\,x\geqslant 1$ toujours — donc jamais nul, ce qui autorise à diviser par $\mathrm{ch}$ sans discussion.

Le parallèle avec la trigonométrie circulaire permet de tout mémoriser d'un coup :

| Trigonométrie circulaire | Trigonométrie hyperbolique |
|---|---|
| $\cos^2+\sin^2 = 1$ | $\mathrm{ch}^2-\mathrm{sh}^2 = 1$ |
| $\sin' = \cos$, $\cos' = -\sin$ | $\mathrm{sh}' = \mathrm{ch}$, $\mathrm{ch}' = \mathrm{sh}$ — **aucun signe moins** |
| $\cos(a+b) = \cos a\cos b-\sin a\sin b$ | $\mathrm{ch}(a+b) = \mathrm{ch}\,a\,\mathrm{ch}\,b+\mathrm{sh}\,a\,\mathrm{sh}\,b$ |
| $\sin(a+b) = \sin a\cos b+\sin b\cos a$ | $\mathrm{sh}(a+b) = \mathrm{sh}\,a\,\mathrm{ch}\,b+\mathrm{sh}\,b\,\mathrm{ch}\,a$ |

::exemple{id="fu-hyperbolique-def" titre="Démontrer une identité hyperbolique en revenant aux exponentielles" pour="Exercice 7 — la méthode unique de tout l'exercice"}
La méthode ne varie jamais : **remplacer chaque ch et chaque sh par sa définition**, développer, simplifier.

Démontrons $\mathrm{ch}^2x-\mathrm{sh}^2x = 1$.

$$
\mathrm{ch}^2x-\mathrm{sh}^2x = \frac{(e^x+e^{-x})^2-(e^x-e^{-x})^2}{4}
$$

On développe les deux carrés, en notant que $e^x\times e^{-x} = e^0 = 1$ :

$$
(e^x+e^{-x})^2 = e^{2x}+2+e^{-2x} \qquad (e^x-e^{-x})^2 = e^{2x}-2+e^{-2x}
$$

La différence ne laisse que les termes centraux :

$$
\frac{(e^{2x}+2+e^{-2x})-(e^{2x}-2+e^{-2x})}{4} = \frac{4}{4} = 1
$$

**Un contrôle numérique pour se rassurer.** Avec $a = \ln 2$ :

$$
\mathrm{ch}(\ln 2) = \frac{2+\frac12}{2} = \frac54 \qquad \mathrm{sh}(\ln 2) = \frac{2-\frac12}{2} = \frac34
$$

et l'on vérifie $\left(\dfrac54\right)^2-\left(\dfrac34\right)^2 = \dfrac{25-9}{16} = 1$.

**Le réflexe de développement** : les produits croisés font apparaître $e^{x}e^{-x} = 1$ et $e^{x}e^{y} = e^{x+y}$. C'est de là que viennent toutes les simplifications.
::

::exemple{id="fu-hyperbolique-derivee" titre="Dériver une expression hyperbolique" pour="Exercice 8 — les formules et leurs composées"}
Les deux formules de base, **sans aucun signe moins** :

$$
\mathrm{ch}' = \mathrm{sh} \qquad \mathrm{sh}' = \mathrm{ch}
$$

**Composées.** $\big(\mathrm{ch}(3x)\big)' = 3\,\mathrm{sh}(3x)$ et $\big(\mathrm{sh}(x^2)\big)' = 2x\,\mathrm{ch}(x^2)$.

**Puissance.** $\big(\mathrm{sh}^2x\big)' = 2\,\mathrm{sh}\,x\,\mathrm{ch}\,x$, qu'on peut réécrire $\mathrm{sh}(2x)$ grâce à la formule de duplication.

**Quotient.** Pour $\mathrm{th}(2x) = \dfrac{\mathrm{sh}(2x)}{\mathrm{ch}(2x)}$, la formule du quotient donne

$$
\big(\mathrm{th}(2x)\big)' = \frac{2\,\mathrm{ch}(2x)\,\mathrm{ch}(2x)-\mathrm{sh}(2x)\times 2\,\mathrm{sh}(2x)}{\mathrm{ch}^2(2x)} = \frac{2\big(\mathrm{ch}^2(2x)-\mathrm{sh}^2(2x)\big)}{\mathrm{ch}^2(2x)} = \frac{2}{\mathrm{ch}^2(2x)}
$$

en utilisant $\mathrm{ch}^2-\mathrm{sh}^2 = 1$ à la dernière étape. **C'est toujours cette identité qui conclut** les calculs de dérivées hyperboliques.
::

## 8. Fonctions hyperboliques réciproques

$\mathrm{argsh} : \mathbb{R}\to\mathbb{R}$, $\mathrm{argch} : [1,+\infty[\ \to[0,+\infty[$, $\mathrm{argth} : \,]-1,1[\ \to\mathbb{R}$.

$$
\mathrm{argsh}'x = \frac{1}{\sqrt{x^2+1}} \qquad \mathrm{argch}'x = \frac{1}{\sqrt{x^2-1}} \qquad \mathrm{argth}'x = \frac{1}{1-x^2}
$$

$$
\mathrm{argsh}\,x = \ln\left(x+\sqrt{x^2+1}\right) \qquad \mathrm{argch}\,x = \ln\left(x+\sqrt{x^2-1}\right) \qquad \mathrm{argth}\,x = \frac12\ln\frac{1+x}{1-x}
$$

::exemple{id="fu-derivee-reciproque" titre="Calculer la dérivée d'une fonction réciproque" pour="Exercice 9 — dériver l'égalité f(f⁻¹(x)) = x"}
La méthode en trois temps, illustrée sur $\arcsin$ — la démarche est identique pour argsh, argch et argth.

**1. Partir de l'égalité de définition.** Pour $x\in\,]-1,1[$ :

$$
\sin\big(\arcsin x\big) = x
$$

**2. Dériver les deux membres**, en traitant la gauche comme une composée :

$$
\arcsin'(x)\times\cos\big(\arcsin x\big) = 1 \qquad\Longrightarrow\qquad \arcsin'(x) = \frac{1}{\cos\big(\arcsin x\big)}
$$

**3. Éliminer la composée avec l'identité fondamentale.** De $\cos^2+\sin^2 = 1$ on tire

$$
\cos\big(\arcsin x\big) = \pm\sqrt{1-\sin^2(\arcsin x)} = \pm\sqrt{1-x^2}
$$

**et c'est ici qu'on justifie le signe** : $\arcsin x$ appartient à $\left[-\dfrac{\pi}{2},\dfrac{\pi}{2}\right]$, intervalle sur lequel le cosinus est **positif**. On garde donc la racine positive :

$$
\arcsin'(x) = \frac{1}{\sqrt{1-x^2}}
$$

**Pour les fonctions hyperboliques**, c'est $\mathrm{ch}^2-\mathrm{sh}^2 = 1$ qui joue le rôle de l'identité fondamentale, et la justification du signe repose sur $\mathrm{ch}\geqslant 1 > 0$. La troisième étape est toujours la seule qui demande une vraie rédaction.
::

::exemple{id="fu-egalite-fonctions" titre="Démontrer que deux fonctions sont égales" pour="Exercice 10 — même dérivée plus une valeur commune"}
Pour prouver $f = g$ sur un intervalle, il suffit de montrer que $f' = g'$ et que $f$ et $g$ coïncident **en un point**.

Montrons que $\ln(1+e^x) = x+\ln(1+e^{-x})$ pour tout réel $x$.

**1. Poser les deux fonctions.** $f(x) = \ln(1+e^x)$ et $g(x) = x+\ln(1+e^{-x})$, toutes deux définies sur $\mathbb{R}$ puisque $1+e^{\pm x} > 0$.

**2. Dériver.**

$$
f'(x) = \frac{e^x}{1+e^x}
$$

$$
g'(x) = 1+\frac{-e^{-x}}{1+e^{-x}} = \frac{(1+e^{-x})-e^{-x}}{1+e^{-x}} = \frac{1}{1+e^{-x}}
$$

Il reste à voir que les deux expressions coïncident : on multiplie numérateur et dénominateur de $g'$ par $e^x$,

$$
\frac{1}{1+e^{-x}} = \frac{e^x}{e^x+1} = f'(x)
$$

**3. Comparer en un point.** $f(0) = \ln 2$ et $g(0) = 0+\ln 2 = \ln 2$.

**Conclusion.** $f-g$ a une dérivée nulle sur l'intervalle $\mathbb{R}$ et s'annule en $0$ : elle est identiquement nulle, donc $f = g$ partout.

**L'autre méthode possible**, souvent plus courte pour les fonctions réciproques : appliquer la fonction directe aux deux membres. Pour une égalité de la forme $\mathrm{argsh}\,x = A$, il suffit de vérifier que $\mathrm{sh}(A) = x$ et que $A$ est dans le bon ensemble d'arrivée.
::

## Les pièges à retenir

- $\ln$ exige un argument **strictement positif** : commencer par le domaine, finir par la vérification.
- $e^{\text{quelque chose}} > 0$ toujours : l'exponentielle disparaît de l'étude du signe, et $e^A = c$ n'a de solution que si $c>0$.
- Croissances comparées : **l'exponentielle bat les puissances, les puissances battent le logarithme**.
- $\arccos(\cos x) = x$ **uniquement** sur $[0,\pi]$ ; sinon, ramener l'angle d'abord.
- $\mathrm{ch}' = \mathrm{sh}$ et $\mathrm{sh}' = \mathrm{ch}$ : **aucun signe moins**, contrairement à $\cos' = -\sin$.
- $\mathrm{ch}^2-\mathrm{sh}^2 = 1$ : un **moins**, là où la trigonométrie circulaire a un plus.
- Une identité à démontrer sur un intervalle : penser « **dérivée nulle et valeur en un point** ».
