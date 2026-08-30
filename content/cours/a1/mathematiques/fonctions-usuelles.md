---
title: Fonctions usuelles
description: Exponentielle, logarithme, fonctions trigonométriques réciproques et fonctions hyperboliques. Dix exercices corrigés avec indices et solutions détaillées.
interactif: true
annee: A1
matiere: Mathématiques
ordre: 2
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

::carte-lien{to="/cours/a1/mathematiques/trigonometrie" titre="Guide : comprendre le cercle trigonométrique" description="Les sections 5 et 6 ci-dessous supposent le cercle acquis. S’il ne l’est pas, tout y est repris depuis le début, figure manipulable à l’appui" icone="i-lucide-compass" meta="Cercle interactif"}
::

:::fiche{titre="Fiche de révision — Fonctions usuelles" resume="Le cours en condensé, plus un exemple entièrement traité pour chaque type de question des exercices. Les exemples portent sur d'autres fonctions que les énoncés : ils montrent la méthode sans livrer la réponse."}
### 1. Exponentielle

C'est **l'unique** fonction dérivable vérifiant $f' = f$ et $f(0) = 1$ (Théorème 1.1). Tout le reste en découle. On note $e = \exp(1)\approx 2{,}718$ et $\exp(x) = e^x$.

**Les règles algébriques (Prop 1.2)** — l'exponentielle transforme les sommes en produits :

$$e^{a+b} = e^ae^b \qquad e^{-a} = \frac{1}{e^a} \qquad e^{a-b} = \frac{e^a}{e^b} \qquad (e^a)^n = e^{na}$$

**Les faits essentiels** :

- $e^x > 0$ **pour tout $x$** (Prop 1.3) : une exponentielle n'est jamais nulle ni négative. Réflexe : dans un signe de dérivée, un facteur $e^{\text{quelque chose}}$ s'élimine toujours.
- **Strictement croissante** (Prop 1.4) : $e^a < e^b \iff a < b$, et $e^a = e^b \iff a = b$.
- **Limites** : $\displaystyle\lim_{x\to-\infty}e^x = 0$ et $\displaystyle\lim_{x\to+\infty}e^x = +\infty$.
- **Dérivée composée** (Prop 1.9) : $(e^u)' = u'e^u$.

::exemple{id="fu-exp-regles" titre="Manipuler les exponentielles avec les règles algébriques" pour="Le préalable à toute équation ou simplification"}
Toutes ces simplifications consistent à **ramener l'expression à une seule exponentielle**, en additionnant ou soustrayant les exposants.

$$e^{x+2} = e^2e^x \qquad e^{3x} = (e^x)^3 \qquad \frac{e^{5x}}{e^{2x}} = e^{3x}$$

**Un cas avec plusieurs facteurs.** Simplifier $\dfrac{e^{x}\,e^{2x+1}}{e^{x-1}}$ : on calcule l'exposant total,

$$x+(2x+1)-(x-1) = 2x+2 \qquad\text{donc}\qquad \frac{e^{x}\,e^{2x+1}}{e^{x-1}} = e^{2x+2}$$

**Un cas avec une parenthèse.** $e^{-x}(e^x+1) = e^{-x}e^x+e^{-x} = e^0+e^{-x} = 1+e^{-x}$.

Le point à ne jamais oublier : $e^{a+b} = e^ae^b$, mais $e^{a}+e^{b}$ **ne se simplifie pas**. Une somme d'exponentielles reste une somme.
::

### 2. Logarithme népérien

$\exp$ est continue et strictement croissante de $\mathbb{R}$ sur $]0,+\infty[$ : c'est une bijection, et sa réciproque est **ln** (Déf 1.2).

$$\text{pour } x>0 : \quad y = \ln x \iff e^y = x$$

$$e^{\ln x} = x \ (x>0) \qquad \ln(e^x) = x \qquad \ln 1 = 0 \qquad \ln e = 1$$

⚠️ **ln n'est définie que sur $]0,+\infty[$.** Premier réflexe devant toute équation ou inéquation : le **domaine**.

**Les règles algébriques (Prop 1.12)** — le logarithme transforme les produits en sommes :

$$\ln(ab) = \ln a+\ln b \qquad \ln\frac1b = -\ln b \qquad \ln\frac ab = \ln a-\ln b \qquad \ln(a^n) = n\ln a \qquad \ln\sqrt a = \frac12\ln a$$

**Les faits essentiels** : strictement croissante (Prop 1.15), donc $\ln a = \ln b \iff a = b$ et $\ln a \leqslant \ln b \iff a \leqslant b$ pour $a,b>0$ ; signe négatif sur $]0,1[$ et positif sur $]1,+\infty[$ ; limites $-\infty$ en $0^+$ et $+\infty$ en $+\infty$ ; dérivées $\ln'(x) = \dfrac1x$ et $(\ln u)' = \dfrac{u'}{u}$.

::exemple{id="fu-ln-regles" titre="Manipuler les logarithmes avec les règles algébriques" pour="Décomposer, recomposer, et faire disparaître un ln"}
$$\ln 8 = \ln(2^3) = 3\ln 2 \qquad \ln 6 = \ln 2+\ln 3 \qquad \ln\frac34 = \ln 3-2\ln 2$$

$$\ln\sqrt5 = \frac12\ln 5 \qquad \ln\frac{1}{e^2} = -2$$

**Faire disparaître un logarithme.** L'égalité $e^{\ln a} = a$ est l'outil central :

$$e^{2\ln 3} = \left(e^{\ln 3}\right)^2 = 3^2 = 9$$

**Simplifier une différence.** $\ln(4e^3)-\ln 4 = \big(\ln 4+3\big)-\ln 4 = 3$.

Le piège symétrique de celui de l'exponentielle : $\ln(a+b)$ **ne se décompose pas**. Seuls les produits, quotients et puissances se transforment.
::

### 3. Équations et inéquations avec ln et exp

**La méthode, en trois étapes qui ne changent jamais :**

1. **Domaine.** Chaque $\ln(A)$ impose $A > 0$ ; on intersecte toutes les conditions. Une exponentielle n'impose rien.
2. **Transformer.** $\ln A = \ln B \iff A = B$ ; $\ln A = c \iff A = e^c$ ; $e^A = c$ (avec $c>0$) $\iff A = \ln c$. Pour les inéquations, la stricte croissance **conserve le sens** de l'inégalité.
3. **Vérifier** que les solutions trouvées appartiennent bien au domaine — et les écarter sinon.

::exemple{id="fu-equation-ln" titre="Résoudre une équation de la forme ln(A) = c" pour="Exercice 1 — les trois étapes sur un cas simple"}
Résolvons $\ln(2x-6) = 2$.

**Domaine.** Il faut $2x-6 > 0$, soit $x > 3$. On travaille donc sur $]3,+\infty[$.

**Transformation.** On applique l'exponentielle des deux côtés, ce qui est licite puisqu'elle est strictement croissante :

$$2x-6 = e^2 \quad\Longrightarrow\quad x = \frac{e^2+6}{2} = 3+\frac{e^2}{2}$$

**Vérification.** $e^2\approx 7{,}39$, donc $x \approx 6{,}69 > 3$ : la solution appartient au domaine.

$$S = \left\{3+\frac{e^2}{2}\right\}$$

⚠️ On laisse la réponse sous forme exacte, avec $e^2$ — pas de valeur décimale approchée dans l'ensemble solution.
::

::exemple{id="fu-equation-exp" titre="Résoudre une équation de la forme exp(A) = c" pour="Exercice 1 — le chemin inverse, et le cas impossible"}
Résolvons $e^{3x+1} = 5$.

Aucune contrainte de domaine ici : l'exponentielle est définie partout. On applique $\ln$ des deux côtés :

$$3x+1 = \ln 5 \quad\Longrightarrow\quad x = \frac{\ln 5-1}{3} \qquad S = \left\{\frac{\ln 5-1}{3}\right\}$$

**Le cas où il n'y a pas de solution.** Considérons $e^{2x} = -4$. Inutile de calculer : une exponentielle est **toujours strictement positive**, elle ne peut pas valoir $-4$. Donc $S = \varnothing$.

C'est le réflexe à avoir avant tout calcul : $e^A = c$ n'a de sens que si $c > 0$.
::

::exemple{id="fu-equation-ln-ln" titre="Résoudre une équation de la forme ln(A) = ln(B)" pour="Exercice 1 — quand le logarithme est des deux côtés"}
Résolvons $\ln(x+5) = \ln(2x-1)$.

**Domaine.** Deux conditions : $x+5 > 0$, soit $x > -5$, et $2x-1 > 0$, soit $x > \dfrac12$. L'intersection donne $x > \dfrac12$.

**Transformation.** La stricte croissance de $\ln$ permet de supprimer les logarithmes :

$$x+5 = 2x-1 \quad\Longrightarrow\quad x = 6$$

**Vérification.** $6 > \dfrac12$ : la solution convient. $S = \{6\}$.

**Deux issues possibles qu'il faut accepter.** L'égalité des arguments peut aboutir à une **contradiction** — auquel cas $S = \varnothing$ — ou fournir une valeur **hors du domaine**, qu'il faut alors rejeter. Une équation qui n'a aucune solution est un résultat parfaitement valide : il faut le conclure explicitement plutôt que de chercher l'erreur.
::

::exemple{id="fu-inequation-ln" titre="Résoudre une inéquation avec des logarithmes" pour="Exercice 2 — le domaine, puis le sens de l'inégalité"}
Résolvons $\ln(3x) \leqslant \ln(x+2)$.

**Domaine.** Il faut $3x > 0$ et $x+2 > 0$, soit $x > 0$ et $x > -2$. L'intersection est $]0,+\infty[$.

**Transformation.** $\ln$ étant **strictement croissante**, l'inégalité entre les logarithmes équivaut à la même inégalité entre les arguments, **dans le même sens** :

$$3x \leqslant x+2 \quad\Longrightarrow\quad 2x \leqslant 2 \quad\Longrightarrow\quad x \leqslant 1$$

**Intersection avec le domaine.** On croise $x \leqslant 1$ avec $x > 0$ :

$$S = \,]0,\,1]$$

L'erreur la plus fréquente n'est pas dans le calcul mais dans l'oubli du domaine : sans lui, on aurait écrit $]-\infty,1]$, qui contient des valeurs où l'inéquation n'a aucun sens.
::

::exemple{id="fu-signe-second-degre" titre="Étudier le signe d'un trinôme du second degré" pour="Exercices 2 et 3 — trouver un domaine, ou le signe d'une dérivée"}
C'est l'outil dont on a besoin dès qu'un $\ln$ ou une racine porte sur un polynôme de degré $2$.

Résolvons $x^2-x-6 > 0$. On cherche d'abord les racines :

$$\Delta = (-1)^2-4\times 1\times(-6) = 1+24 = 25 \qquad x = \frac{1\pm 5}{2} \in \{-2,\ 3\}$$

**La règle du signe** : un trinôme est **du signe de $a$ à l'extérieur des racines**, et du signe contraire entre elles. Ici $a = 1 > 0$, donc le trinôme est positif à l'extérieur :

$$S = \,]-\infty,\,-2[\ \cup\ ]3,+\infty[$$

⚠️ **Quand $a < 0$, tout s'inverse** : un trinôme comme $-x^2+4x-3$ (racines $1$ et $3$) est **positif entre ses racines**, sur $]1,3[$, et négatif à l'extérieur. C'est le cas typique quand un logarithme porte sur un trinôme de coefficient dominant négatif : son domaine est alors un **intervalle borné**.
::

### 4. Limites et croissances comparées

- **L'exponentielle bat les puissances** (Prop 1.6, 1.7) : $\displaystyle\lim_{x\to+\infty}\frac{e^x}{x^n} = +\infty$ et $\displaystyle\lim_{x\to-\infty}x\,e^x = 0$.
- **Les puissances battent le logarithme** (Prop 1.17) : $\displaystyle\lim_{x\to+\infty}\frac{\ln x}{x} = 0$ et $\displaystyle\lim_{x\to 0^+}x\ln x = 0^-$.
- $\displaystyle\lim_{x\to 0}\frac{e^x-1}{x} = 1$ (Prop 1.8) : c'est le taux d'accroissement de $\exp$ en $0$.

::exemple{id="fu-croissances-comparees" titre="Lever une forme indéterminée avec les croissances comparées" pour="Exercice 3 — les limites aux bornes du domaine"}
La hiérarchie à retenir : **exponentielle $\gg$ puissances $\gg$ logarithme**. Celui qui gagne impose sa limite.

$$\lim_{x\to+\infty}\frac{e^x}{x^2} = +\infty \qquad\text{donc}\qquad \lim_{x\to+\infty}\frac{x^2}{e^x} = 0$$

**Une différence indéterminée.** Pour $\displaystyle\lim_{x\to+\infty}\left(e^x-x^{10}\right)$, la forme est $\infty-\infty$. On **factorise par le terme dominant** :

$$e^x-x^{10} = e^x\left(1-\frac{x^{10}}{e^x}\right)$$

La parenthèse tend vers $1-0 = 1$ et $e^x\to+\infty$, donc la limite est $+\infty$.

**Un produit indéterminé.** Pour $\displaystyle\lim_{x\to 0^+}x\ln x$, la forme est $0\times(-\infty)$ : le cours donne directement $0^-$ — c'est la puissance qui l'emporte.

**Le réflexe général** : devant $\infty-\infty$ ou $0\times\infty$, factoriser par le terme le plus fort, puis appliquer la hiérarchie.
::

::exemple{id="fu-limite-composee" titre="Calculer une limite par changement de variable" pour="Exercice 3 — quand l'exposant est lui-même une fonction"}
Quand l'expression contient une fonction composée, on **pose une nouvelle variable** et on regarde vers quoi elle tend.

**Un exposant qui explose.** Pour $\displaystyle\lim_{x\to 0^+}e^{-1/x}$, on pose $X = \dfrac1x$. Quand $x\to 0^+$, on a $X\to+\infty$, et l'expression devient $e^{-X}$, qui tend vers $0$.

$$\lim_{x\to 0^+}e^{-1/x} = 0$$

**Attention au côté.** La même expression en $0^-$ donne $X\to-\infty$, donc $e^{-X}\to+\infty$ : la limite **dépend du côté**. Dès que $\dfrac1x$ apparaît, il faut traiter $0^+$ et $0^-$ séparément.

**Une composition avec un logarithme.** Pour $\displaystyle\lim_{x\to+\infty}\frac{\ln x}{\sqrt x}$, on pose $X = \sqrt x$, donc $x = X^2$ et $\ln x = 2\ln X$ :

$$\frac{\ln x}{\sqrt x} = \frac{2\ln X}{X}\xrightarrow[X\to+\infty]{} 0$$
::

::exemple{id="fu-etude-plan" titre="Mener une étude de fonction complète" pour="Exercice 3 — le plan à suivre, du domaine au tableau de variations"}
Le plan ne varie jamais. Déroulons-le sur $g(x) = (x-1)e^x$.

**1. Domaine.** Produit d'un polynôme et d'une exponentielle, tous deux définis partout : $D_g = \mathbb{R}$.

**2. Limites aux bornes.**

En $+\infty$ : $x-1\to+\infty$ et $e^x\to+\infty$, donc $g(x)\to+\infty$.

En $-\infty$ : la forme est $(-\infty)\times 0$. On développe et on applique les croissances comparées, $xe^x\to 0$ et $e^x\to 0$ :

$$g(x) = xe^x-e^x \xrightarrow[x\to-\infty]{} 0$$

Comme $g$ est négative près de $-\infty$, la courbe s'approche de l'axe des abscisses **par en dessous** : l'axe est une **asymptote horizontale**.

**3. Dérivée, puis factorisation.**

$$g'(x) = 1\times e^x+(x-1)e^x = e^x\big(1+x-1\big) = x\,e^x$$

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

$$g(1) = 1-2+0 = -1 < 0 \qquad g(2) = 2-2+\ln 2 = \ln 2 > 0$$

**Conclusion.** $g$ est continue et strictement croissante, et change de signe entre $1$ et $2$ : elle s'annule **une fois et une seule**, en un réel $\alpha \in\ ]1,2[$.

C'est aussi ce schéma qu'on applique lorsque l'énoncé demande de montrer qu'une dérivée s'annule une seule fois par intervalle : on étudie la dérivée seconde pour obtenir la monotonie, puis on encadre.
::

### 5. Trigonométrie

Sur le cercle de rayon $1$, $\cos\alpha$ est l'**abscisse** du point et $\sin\alpha$ son **ordonnée**. D'où $\cos^2\alpha+\sin^2\alpha = 1$ et $-1\leqslant\cos,\sin\leqslant 1$.

::cercle-trigo{titre="Le cercle, à garder sous les yeux" resume="Déplace le point : le segment horizontal est cos α, le vertical est sin α. L’onglet « Symétries » montre d’où viennent les formules d’angles associés." angle="60" modes="explorer,symetries,equations"}
::

Tout ce qui suit se lit sur cette figure. Le détail complet — radians, quadrants, méthode pour ramener un angle — est repris dans le [guide dédié](/cours/a1/mathematiques/trigonometrie).

| $x$ | $0$ | $\dfrac{\pi}{6}$ | $\dfrac{\pi}{4}$ | $\dfrac{\pi}{3}$ | $\dfrac{\pi}{2}$ | $\pi$ |
|---|---|---|---|---|---|---|
| $\cos x$ | $1$ | $\dfrac{\sqrt3}{2}$ | $\dfrac{\sqrt2}{2}$ | $\dfrac12$ | $0$ | $-1$ |
| $\sin x$ | $0$ | $\dfrac12$ | $\dfrac{\sqrt2}{2}$ | $\dfrac{\sqrt3}{2}$ | $1$ | $0$ |

La ligne des cosinus se lit $\dfrac{\sqrt4}{2},\dfrac{\sqrt3}{2},\dfrac{\sqrt2}{2},\dfrac{\sqrt1}{2},\dfrac{\sqrt0}{2}$ — et celle des sinus est la même, à l'envers.

**Parité et périodicité** : $\cos(-x) = \cos x$ (paire), $\sin(-x) = -\sin x$ (impaire), et les deux sont $2\pi$-périodiques.

**Dérivées** : $\sin' = \cos$, $\cos' = -\sin$, $\big(\sin(ax+b)\big)' = a\cos(ax+b)$, $\big(\cos(ax+b)\big)' = -a\sin(ax+b)$.

::exemple{id="fu-trigo-valeurs" titre="Ramener un angle dans le tableau des valeurs remarquables" pour="Exercice 4 — se ramener au premier quadrant"}
Un angle qui ne figure pas dans le tableau s'y ramène par **périodicité** puis **parité**.

$$\cos\left(-\frac{\pi}{3}\right) = \cos\frac{\pi}{3} = \frac12 \qquad\text{(le cosinus est pair)}$$

$$\sin\left(\frac{13\pi}{6}\right) = \sin\left(\frac{\pi}{6}+2\pi\right) = \sin\frac{\pi}{6} = \frac12 \qquad\text{(période } 2\pi\text{)}$$

$$\cos\left(\frac{7\pi}{4}\right) = \cos\left(\frac{7\pi}{4}-2\pi\right) = \cos\left(-\frac{\pi}{4}\right) = \frac{\sqrt2}{2}$$

**Les deux relations qui servent le plus** :

$$\sin\theta = \cos\left(\frac{\pi}{2}-\theta\right) \qquad \sin(\pi-\theta) = \sin\theta$$

La première permet de convertir un sinus en cosinus — indispensable pour résoudre une équation qui mélange les deux.
::

::exemple{id="fu-equation-trigo-cos" titre="Résoudre une équation cos(A) = cos(B)" pour="Exercice 4 — les deux familles de solutions"}
La formule du cours :

$$\cos A = \cos B \iff A = B+2k\pi \ \text{ ou }\ A = -B+2k\pi \qquad (k\in\mathbb{Z})$$

Résolvons $\cos x = -\dfrac{\sqrt2}{2}$ sur $[0,2\pi]$.

**Étape 1 — reconnaître l'angle.** On cherche $B$ tel que $\cos B = -\dfrac{\sqrt2}{2}$ : c'est $B = \dfrac{3\pi}{4}$.

**Étape 2 — écrire les deux familles.**

$$x = \frac{3\pi}{4}+2k\pi \qquad\text{ou}\qquad x = -\frac{3\pi}{4}+2k\pi$$

**Étape 3 — sélectionner celles de l'intervalle.** Dans $[0,2\pi]$, la première famille donne $\dfrac{3\pi}{4}$ (pour $k=0$). La seconde donne, pour $k=1$ :

$$-\frac{3\pi}{4}+2\pi = \frac{5\pi}{4}$$

$$S = \left\{\frac{3\pi}{4},\ \frac{5\pi}{4}\right\}$$

**Ne jamais s'arrêter à une seule famille** : un cosinus prend chaque valeur deux fois par tour, une fois au-dessus de l'axe et une fois en dessous.
::

::exemple{id="fu-equation-trigo-sin-cos" titre="Résoudre une équation mêlant sinus et cosinus" pour="Exercice 4 — tout convertir en cosinus d'abord"}
Quand les deux fonctions apparaissent, on **convertit l'une en l'autre** avec $\sin\theta = \cos\left(\dfrac{\pi}{2}-\theta\right)$, puis on applique la formule des cosinus.

Résolvons $\sin(2x) = \cos\left(x+\dfrac{\pi}{6}\right)$.

**Conversion.**

$$\sin(2x) = \cos\left(\frac{\pi}{2}-2x\right) \qquad\text{donc}\qquad \cos\left(\frac{\pi}{2}-2x\right) = \cos\left(x+\frac{\pi}{6}\right)$$

**Première famille** — les arguments sont égaux modulo $2\pi$ :

$$\frac{\pi}{2}-2x = x+\frac{\pi}{6}+2k\pi \;\Longrightarrow\; \frac{\pi}{3} = 3x+2k\pi \;\Longrightarrow\; x = \frac{\pi}{9}-\frac{2k\pi}{3}$$

**Seconde famille** — les arguments sont opposés modulo $2\pi$ :

$$\frac{\pi}{2}-2x = -x-\frac{\pi}{6}+2k\pi \;\Longrightarrow\; \frac{2\pi}{3} = x+2k\pi \;\Longrightarrow\; x = \frac{2\pi}{3}-2k\pi$$

**Vérification sur un représentant de chaque famille.** Pour $x = \dfrac{\pi}{9}$ : $\sin\dfrac{2\pi}{9} = \sin 40° \approx 0{,}643$ et $\cos\left(\dfrac{\pi}{9}+\dfrac{\pi}{6}\right) = \cos 50°\approx 0{,}643$. Pour $x = \dfrac{2\pi}{3}$ : $\sin\dfrac{4\pi}{3} = -\dfrac{\sqrt3}{2}$ et $\cos\dfrac{5\pi}{6} = -\dfrac{\sqrt3}{2}$. Les deux familles conviennent.

Vérifier un représentant de chaque famille est le meilleur moyen de détecter une erreur de signe dans ce type de résolution.
::

::exemple{id="fu-derivee-trigo" titre="Dériver une expression trigonométrique" pour="Exercice 5 — somme, produit, puissance et quotient"}
Tout repose sur $\sin' = \cos$, $\cos' = -\sin$, et les formules générales appliquées telles quelles.

**Somme.** $\big(x^3+\sin x\big)' = 3x^2+\cos x$.

**Composée.** $\big(\cos(3x)\big)' = -3\sin(3x)$ — le coefficient sort, et le cosinus donne un signe moins.

$$\big(\sin(x^2)\big)' = 2x\cos(x^2)$$

**Produit.** $\big(x\sin x\big)' = \sin x+x\cos x$.

**Puissance.** $\big(\cos^4x\big)'$ se lit comme $(u^4)'$ avec $u = \cos x$ et $u' = -\sin x$ :

$$\big(\cos^4x\big)' = 4\times(-\sin x)\times\cos^3x = -4\sin x\cos^3x$$

**Quotient.** Soit $f(x) = \dfrac{\sin x}{1+\cos x}$, avec $u' = \cos x$ et $v' = -\sin x$ :

$$f'(x) = \frac{\cos x(1+\cos x)+\sin^2x}{(1+\cos x)^2} = \frac{\cos x+\cos^2x+\sin^2x}{(1+\cos x)^2} = \frac{1+\cos x}{(1+\cos x)^2} = \frac{1}{1+\cos x}$$

L'avant-dernière étape utilise $\cos^2+\sin^2 = 1$ : **penser systématiquement à cette identité** pour simplifier un résultat trigonométrique qui paraît compliqué.
::

### 6. Fonctions trigonométriques réciproques

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

$$\arccos\left(-\frac12\right) = \pi-\frac{\pi}{3} = \frac{2\pi}{3}$$

**Un arcsin.** Quel angle de $\left[-\dfrac{\pi}{2},\dfrac{\pi}{2}\right]$ a pour sinus $-\dfrac{\sqrt3}{2}$ ? Le sinus est impair, donc

$$\arcsin\left(-\frac{\sqrt3}{2}\right) = -\arcsin\frac{\sqrt3}{2} = -\frac{\pi}{3}$$

**Un arctan.** $\arctan(-1) = -\dfrac{\pi}{4}$, car $\tan\left(-\dfrac{\pi}{4}\right) = -1$ et $-\dfrac{\pi}{4}$ appartient bien à $\left]-\dfrac{\pi}{2},\dfrac{\pi}{2}\right[$.

**La vérification à faire à chaque fois** : le résultat appartient-il à l'intervalle de la fonction ? $\arccos$ ne renvoie jamais de valeur négative ; $\arcsin$ et $\arctan$ ne dépassent jamais $\dfrac{\pi}{2}$ en valeur absolue.
::

::exemple{id="fu-arc-compose" titre="Le piège de arccos(cos x) et de ses analogues" pour="Exercice 6 — quand l'angle sort de l'intervalle de la réciproque"}
$\arccos(\cos x) = x$ **uniquement si** $x\in[0,\pi]$. Sinon, il faut d'abord ramener l'angle dans le bon intervalle, **sans changer la valeur du cosinus**.

**Premier cas.** Calculons $\arccos\left(\cos\dfrac{5\pi}{4}\right)$. L'angle $\dfrac{5\pi}{4}$ n'est pas dans $[0,\pi]$. On cherche donc un angle de $[0,\pi]$ ayant le même cosinus :

$$\cos\frac{5\pi}{4} = \cos\left(-\frac{5\pi}{4}\right) = \cos\left(-\frac{5\pi}{4}+2\pi\right) = \cos\frac{3\pi}{4}$$

et $\dfrac{3\pi}{4}\in[0,\pi]$, donc la réponse est $\dfrac{3\pi}{4}$ — **pas** $\dfrac{5\pi}{4}$.

**Deuxième cas.** Pour $\arcsin\left(\sin\dfrac{2\pi}{3}\right)$, l'intervalle visé est $\left[-\dfrac{\pi}{2},\dfrac{\pi}{2}\right]$. On utilise $\sin(\pi-\theta) = \sin\theta$ :

$$\sin\frac{2\pi}{3} = \sin\left(\pi-\frac{2\pi}{3}\right) = \sin\frac{\pi}{3} \qquad\text{et}\qquad \frac{\pi}{3}\in\left[-\frac{\pi}{2},\frac{\pi}{2}\right]$$

La réponse est donc $\dfrac{\pi}{3}$.

**Dans l'autre sens, aucun piège** : $\cos(\arccos x) = x$ pour **tout** $x\in[-1,1]$. C'est la composition « réciproque à l'extérieur » qui demande de la vigilance.
::

::exemple{id="fu-derivee-nulle" titre="Démontrer une identité par dérivée nulle plus un point" pour="Exercice 6 — la méthode pour prouver qu'une somme est constante"}
Pour montrer qu'une expression vaut une constante sur un intervalle, on montre que **sa dérivée est nulle**, puis on l'évalue **en un point bien choisi**.

Montrons que $\arctan x+\arctan\dfrac1x = \dfrac{\pi}{2}$ pour tout $x > 0$.

**Étape 1 — poser la fonction.** $f(x) = \arctan x+\arctan\dfrac1x$ sur $]0,+\infty[$.

**Étape 2 — dériver.** Le second terme est une composée, avec $u = \dfrac1x$ et $u' = -\dfrac{1}{x^2}$ :

$$f'(x) = \frac{1}{1+x^2}+\left(-\frac{1}{x^2}\right)\times\frac{1}{1+\dfrac{1}{x^2}}$$

On simplifie le second terme en multipliant haut et bas par $x^2$ :

$$\left(-\frac{1}{x^2}\right)\times\frac{x^2}{x^2+1} = -\frac{1}{x^2+1}$$

$$f'(x) = \frac{1}{1+x^2}-\frac{1}{1+x^2} = 0$$

**Étape 3 — conclure avec un point.** Une fonction de dérivée nulle sur un **intervalle** y est constante. On évalue en $x = 1$ :

$$f(1) = \arctan 1+\arctan 1 = \frac{\pi}{4}+\frac{\pi}{4} = \frac{\pi}{2}$$

Donc $f(x) = \dfrac{\pi}{2}$ pour tout $x>0$.

⚠️ **L'argument exige un intervalle.** Sur une réunion d'intervalles disjoints, la constante peut différer d'un morceau à l'autre — c'est exactement ce qui se passe ici pour $x<0$, où la somme vaut $-\dfrac{\pi}{2}$.
::

### 7. Fonctions hyperboliques

$$\mathrm{ch}\,x = \frac{e^x+e^{-x}}{2} \qquad \mathrm{sh}\,x = \frac{e^x-e^{-x}}{2} \qquad \mathrm{th}\,x = \frac{\mathrm{sh}\,x}{\mathrm{ch}\,x}$$

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

$$\mathrm{ch}^2x-\mathrm{sh}^2x = \frac{(e^x+e^{-x})^2-(e^x-e^{-x})^2}{4}$$

On développe les deux carrés, en notant que $e^x\times e^{-x} = e^0 = 1$ :

$$(e^x+e^{-x})^2 = e^{2x}+2+e^{-2x} \qquad (e^x-e^{-x})^2 = e^{2x}-2+e^{-2x}$$

La différence ne laisse que les termes centraux :

$$\frac{(e^{2x}+2+e^{-2x})-(e^{2x}-2+e^{-2x})}{4} = \frac{4}{4} = 1$$

**Un contrôle numérique pour se rassurer.** Avec $a = \ln 2$ :

$$\mathrm{ch}(\ln 2) = \frac{2+\frac12}{2} = \frac54 \qquad \mathrm{sh}(\ln 2) = \frac{2-\frac12}{2} = \frac34$$

et l'on vérifie $\left(\dfrac54\right)^2-\left(\dfrac34\right)^2 = \dfrac{25-9}{16} = 1$.

**Le réflexe de développement** : les produits croisés font apparaître $e^{x}e^{-x} = 1$ et $e^{x}e^{y} = e^{x+y}$. C'est de là que viennent toutes les simplifications.
::

::exemple{id="fu-hyperbolique-derivee" titre="Dériver une expression hyperbolique" pour="Exercice 8 — les formules et leurs composées"}
Les deux formules de base, **sans aucun signe moins** :

$$\mathrm{ch}' = \mathrm{sh} \qquad \mathrm{sh}' = \mathrm{ch}$$

**Composées.** $\big(\mathrm{ch}(3x)\big)' = 3\,\mathrm{sh}(3x)$ et $\big(\mathrm{sh}(x^2)\big)' = 2x\,\mathrm{ch}(x^2)$.

**Puissance.** $\big(\mathrm{sh}^2x\big)' = 2\,\mathrm{sh}\,x\,\mathrm{ch}\,x$, qu'on peut réécrire $\mathrm{sh}(2x)$ grâce à la formule de duplication.

**Quotient.** Pour $\mathrm{th}(2x) = \dfrac{\mathrm{sh}(2x)}{\mathrm{ch}(2x)}$, la formule du quotient donne

$$\big(\mathrm{th}(2x)\big)' = \frac{2\,\mathrm{ch}(2x)\,\mathrm{ch}(2x)-\mathrm{sh}(2x)\times 2\,\mathrm{sh}(2x)}{\mathrm{ch}^2(2x)} = \frac{2\big(\mathrm{ch}^2(2x)-\mathrm{sh}^2(2x)\big)}{\mathrm{ch}^2(2x)} = \frac{2}{\mathrm{ch}^2(2x)}$$

en utilisant $\mathrm{ch}^2-\mathrm{sh}^2 = 1$ à la dernière étape. **C'est toujours cette identité qui conclut** les calculs de dérivées hyperboliques.
::

### 8. Fonctions hyperboliques réciproques

$\mathrm{argsh} : \mathbb{R}\to\mathbb{R}$, $\mathrm{argch} : [1,+\infty[\ \to[0,+\infty[$, $\mathrm{argth} : \,]-1,1[\ \to\mathbb{R}$.

$$\mathrm{argsh}'x = \frac{1}{\sqrt{x^2+1}} \qquad \mathrm{argch}'x = \frac{1}{\sqrt{x^2-1}} \qquad \mathrm{argth}'x = \frac{1}{1-x^2}$$

$$\mathrm{argsh}\,x = \ln\left(x+\sqrt{x^2+1}\right) \qquad \mathrm{argch}\,x = \ln\left(x+\sqrt{x^2-1}\right) \qquad \mathrm{argth}\,x = \frac12\ln\frac{1+x}{1-x}$$

::exemple{id="fu-derivee-reciproque" titre="Calculer la dérivée d'une fonction réciproque" pour="Exercice 9 — dériver l'égalité f(f⁻¹(x)) = x"}
La méthode en trois temps, illustrée sur $\arcsin$ — la démarche est identique pour argsh, argch et argth.

**1. Partir de l'égalité de définition.** Pour $x\in\,]-1,1[$ :

$$\sin\big(\arcsin x\big) = x$$

**2. Dériver les deux membres**, en traitant la gauche comme une composée :

$$\arcsin'(x)\times\cos\big(\arcsin x\big) = 1 \qquad\Longrightarrow\qquad \arcsin'(x) = \frac{1}{\cos\big(\arcsin x\big)}$$

**3. Éliminer la composée avec l'identité fondamentale.** De $\cos^2+\sin^2 = 1$ on tire

$$\cos\big(\arcsin x\big) = \pm\sqrt{1-\sin^2(\arcsin x)} = \pm\sqrt{1-x^2}$$

**et c'est ici qu'on justifie le signe** : $\arcsin x$ appartient à $\left[-\dfrac{\pi}{2},\dfrac{\pi}{2}\right]$, intervalle sur lequel le cosinus est **positif**. On garde donc la racine positive :

$$\arcsin'(x) = \frac{1}{\sqrt{1-x^2}}$$

**Pour les fonctions hyperboliques**, c'est $\mathrm{ch}^2-\mathrm{sh}^2 = 1$ qui joue le rôle de l'identité fondamentale, et la justification du signe repose sur $\mathrm{ch}\geqslant 1 > 0$. La troisième étape est toujours la seule qui demande une vraie rédaction.
::

::exemple{id="fu-egalite-fonctions" titre="Démontrer que deux fonctions sont égales" pour="Exercice 10 — même dérivée plus une valeur commune"}
Pour prouver $f = g$ sur un intervalle, il suffit de montrer que $f' = g'$ et que $f$ et $g$ coïncident **en un point**.

Montrons que $\ln(1+e^x) = x+\ln(1+e^{-x})$ pour tout réel $x$.

**1. Poser les deux fonctions.** $f(x) = \ln(1+e^x)$ et $g(x) = x+\ln(1+e^{-x})$, toutes deux définies sur $\mathbb{R}$ puisque $1+e^{\pm x} > 0$.

**2. Dériver.**

$$f'(x) = \frac{e^x}{1+e^x}$$

$$g'(x) = 1+\frac{-e^{-x}}{1+e^{-x}} = \frac{(1+e^{-x})-e^{-x}}{1+e^{-x}} = \frac{1}{1+e^{-x}}$$

Il reste à voir que les deux expressions coïncident : on multiplie numérateur et dénominateur de $g'$ par $e^x$,

$$\frac{1}{1+e^{-x}} = \frac{e^x}{e^x+1} = f'(x)$$

**3. Comparer en un point.** $f(0) = \ln 2$ et $g(0) = 0+\ln 2 = \ln 2$.

**Conclusion.** $f-g$ a une dérivée nulle sur l'intervalle $\mathbb{R}$ et s'annule en $0$ : elle est identiquement nulle, donc $f = g$ partout.

**L'autre méthode possible**, souvent plus courte pour les fonctions réciproques : appliquer la fonction directe aux deux membres. Pour une égalité de la forme $\mathrm{argsh}\,x = A$, il suffit de vérifier que $\mathrm{sh}(A) = x$ et que $A$ est dans le bon ensemble d'arrivée.
::

### Les pièges à retenir

- $\ln$ exige un argument **strictement positif** : commencer par le domaine, finir par la vérification.
- $e^{\text{quelque chose}} > 0$ toujours : l'exponentielle disparaît de l'étude du signe, et $e^A = c$ n'a de solution que si $c>0$.
- Croissances comparées : **l'exponentielle bat les puissances, les puissances battent le logarithme**.
- $\arccos(\cos x) = x$ **uniquement** sur $[0,\pi]$ ; sinon, ramener l'angle d'abord.
- $\mathrm{ch}' = \mathrm{sh}$ et $\mathrm{sh}' = \mathrm{ch}$ : **aucun signe moins**, contrairement à $\cos' = -\sin$.
- $\mathrm{ch}^2-\mathrm{sh}^2 = 1$ : un **moins**, là où la trigonométrie circulaire a un plus.
- Une identité à démontrer sur un intervalle : penser « **dérivée nulle et valeur en un point** ».
:::


:::exercice{titre="Exercice 1" theme="Équations avec exponentielle et logarithme"}

Résoudre les équations suivantes après avoir déterminé le domaine de résolution.

**La méthode, toujours en 3 étapes :**

1. **Domaine de résolution** : chaque $\ln(A)$ exige $A > 0$ (ln n'est définie que sur $]0,+\infty[$) ; $e^A$ ne pose aucune condition. Le domaine est l'**intersection** des conditions.
2. **Se débarrasser de ln/exp** grâce à la bijection (Déf 1.2 et stricte croissance) : $\ln(A) = c \iff A = e^c$ ; $e^A = c$ avec $c>0$ $\iff A = \ln c$ ; $\ln(A) = \ln(B) \iff A = B$.
3. **Vérifier** que les solutions trouvées appartiennent au domaine, puis conclure par l'ensemble $S$.

::question{label="1."}

$\ln(x+1) = 1$

#indice

Commence toujours par la condition d'existence : sous un logarithme, l'argument doit être strictement positif. Ensuite, pour faire disparaître le $\ln$, compose par l'exponentielle, qui est sa réciproque (Déf 1.2). N'oublie pas la dernière étape : vérifier que ce que tu trouves est bien dans le domaine.

Les trois étapes déroulées sur une autre équation : :voir-exemple[équation de la forme ln(A) = c]{id="fu-equation-ln"}.

#solution

**Domaine** : $x+1 > 0 \iff x > -1$, donc $D = \left]-1,+\infty\right[$.

**Résolution** : $\ln(x+1) = 1 \iff x+1 = e^1 \iff x = e-1$.

**Vérification** : $e-1 \approx 1{,}72 > -1$ ✓

$$\boxed{S = \{e-1\}}$$

::

::question{label="2."}

$e^{x-1} = 3$

#indice

Ici, aucune condition d'existence à poser : l'exponentielle est définie sur $\mathbb{R}$ tout entier. Avant de composer par $\ln$, assure-toi simplement que le second membre est strictement positif — c'est ce qui autorise le passage au logarithme.

Le chemin inverse, sur une autre équation : :voir-exemple[équation de la forme exp(A) = c]{id="fu-equation-exp"}. Si l'écriture de l'exposant te gêne, :voir-exemple[les règles algébriques de l'exponentielle]{id="fu-exp-regles"}.

#solution

**Domaine** : aucune condition, $D = \mathbb{R}$.

**Résolution** : $3 > 0$ donc on peut composer par ln : $x-1 = \ln 3 \iff x = 1+\ln 3$.

$$\boxed{S = \{1+\ln 3\}}$$

::

::question{label="3."}

$\ln(x^2+1) = \ln(2x)$

#indice

Deux logarithmes égaux : la bijectivité de $\ln$ permet d'identifier directement les arguments. Attention au domaine, les deux conditions ne sont pas de même nature — l'une est automatiquement vérifiée, l'autre non. Une fois l'équation polynomiale obtenue, cherche une identité remarquable plutôt que de dérouler le discriminant.

La méthode sur une autre équation du même type : :voir-exemple[équation ln(A) = ln(B)]{id="fu-equation-ln-ln"}. Pour manipuler les logarithmes eux-mêmes, :voir-exemple[les règles algébriques du logarithme]{id="fu-ln-regles"}.

#solution

**Domaine** : $x^2+1 > 0$ est **toujours vrai** (somme d'un carré et de 1) ; $2x > 0 \iff x > 0$. Donc $D = \left]0,+\infty\right[$.

**Résolution** : $\ln A = \ln B \iff A = B$ :

$$x^2+1 = 2x \iff x^2-2x+1 = 0 \iff (x-1)^2 = 0 \iff x = 1$$

*(identité remarquable, une racine double)*

**Vérification** : $1 > 0$ ✓

$$\boxed{S = \{1\}}$$

::

::question{label="4."}

$\ln(x-2) = \ln(x+1)$

#indice

Même principe qu'à la question précédente : on identifie les arguments. Mais regarde ce qui reste après simplification — si les $x$ disparaissent en laissant une égalité numérique fausse, l'équation n'a tout simplement aucune solution. Tu peux aussi anticiper le résultat en comparant $x-2$ et $x+1$ et en invoquant la stricte croissance de $\ln$.

La méthode sur une autre équation du même type : :voir-exemple[équation ln(A) = ln(B)]{id="fu-equation-ln-ln"}.

#solution

**Domaine** : $x-2 > 0$ **et** $x+1 > 0$, c'est-à-dire $x > 2$ et $x > -1$ ; l'intersection donne $D = \left]2,+\infty\right[$.

**Résolution** : $x-2 = x+1 \iff -2 = 1$ : **impossible**.

$$\boxed{S = \varnothing}$$

*(Logique : $x-2 < x+1$ pour tout $x$, et ln est strictement croissante, donc $\ln(x-2) < \ln(x+1)$ toujours — les deux membres ne peuvent jamais être égaux.)*

::

:::

:::exercice{titre="Exercice 2" theme="Inéquations avec logarithme"}

Résoudre les inéquations suivantes après avoir déterminé le domaine de résolution.

**Méthode : les mêmes 3 étapes qu'à l'exercice 1**, mais à l'étape 2 on utilise la **stricte croissance de ln** (Prop 1.15) : elle conserve le sens des inégalités,

$$\ln(A) \leqslant \ln(B) \iff A \leqslant B \quad (\text{sur le domaine où } A, B > 0).$$

::question{label="1."}

$\ln(x-2) \leqslant \ln(2x-1)$

#indice

La stricte croissance de $\ln$ (Prop 1.15) conserve le sens de l'inégalité : tu peux comparer directement les arguments. Le vrai travail est ailleurs — le domaine impose déjà une contrainte forte, et il faut se demander si l'inégalité obtenue y ajoute vraiment quelque chose.

Le domaine puis le sens de l'inégalité, sur un autre exemple : :voir-exemple[inéquation avec des logarithmes]{id="fu-inequation-ln"}.

#solution

**Domaine** : $x-2 > 0$ et $2x-1 > 0$, soit $x > 2$ et $x > \frac{1}{2}$, d'où $D = \left]2,+\infty\right[$.

**Résolution** : $x-2 \leqslant 2x-1 \iff -2+1 \leqslant 2x-x \iff -1 \leqslant x$.

**Intersection avec $D$** : tout $x > 2$ vérifie $x \geqslant -1$, donc la condition est toujours satisfaite sur $D$.

$$\boxed{S = \left]2,+\infty\right[}$$

::

::question{label="2."}

$\ln\!\left(1+\dfrac{2}{x}\right) \geqslant \ln x$

#indice

Pour le domaine, une des deux conditions découle de l'autre : si $x>0$, que peux-tu dire du signe de $\dfrac{2}{x}$ ? Ensuite tu obtiens une inéquation avec une fraction : multiplier par $x$ est licite ici car $x$ est strictement positif, donc le sens de l'inégalité ne change pas. Termine par un tableau de signes du trinôme.

Pour la méthode, :voir-exemple[inéquation avec des logarithmes]{id="fu-inequation-ln"} ; pour le signe du trinôme obtenu, :voir-exemple[signe d'un second degré]{id="fu-signe-second-degre"}.

#solution

**Domaine** : il faut $x > 0$ (pour $\ln x$) et $1+\frac{2}{x} > 0$ ; or si $x > 0$ alors $\frac{2}{x} > 0$ donc $1+\frac{2}{x} > 1 > 0$ automatiquement. $D = \left]0,+\infty\right[$.

**Résolution** : $1+\dfrac{2}{x} \geqslant x$. On multiplie par $x > 0$ (le sens ne change pas car $x$ est positif) :

$$x+2 \geqslant x^2 \iff x^2-x-2 \leqslant 0$$

**Signe du trinôme** : $\Delta = 1+8 = 9$, racines $x = \dfrac{1\pm 3}{2}$, soit $-1$ et $2$. Coefficient $a = 1 > 0$, donc le trinôme est **négatif entre ses racines** : $-1 \leqslant x \leqslant 2$.

**Intersection avec $D$** : $0 < x \leqslant 2$.

$$\boxed{S = \left]0, 2\right]}$$

::

::question{label="3."}

$\ln x \leqslant \ln(x^2-2x)$

#indice

Le domaine demande ici un vrai tableau de signes : la condition $x^2-2x>0$ se factorise et donne une réunion d'intervalles, qu'il faut ensuite croiser avec $x>0$. Le piège classique est d'oublier cette intersection et de garder une branche qui n'existe pas.

Pour la méthode, :voir-exemple[inéquation avec des logarithmes]{id="fu-inequation-ln"} ; pour le signe du trinôme obtenu, :voir-exemple[signe d'un second degré]{id="fu-signe-second-degre"}.

#solution

**Domaine** : $x > 0$ et $x^2-2x > 0 \iff x(x-2) > 0 \iff x < 0$ ou $x > 2$. Intersection : $D = \left]2,+\infty\right[$.

**Résolution** : $x \leqslant x^2-2x \iff 0 \leqslant x^2-3x \iff x(x-3) \geqslant 0 \iff x \leqslant 0$ ou $x \geqslant 3$.

**Intersection avec $D$** : $x \geqslant 3$.

$$\boxed{S = \left[3,+\infty\right[}$$

::

:::

::::exercice{titre="Exercice 3" theme="Études de fonctions"}

Pour chacune des fonctions suivantes : déterminer le domaine de définition, calculer la dérivée et préciser le domaine de dérivabilité, étudier le signe de la dérivée, puis dresser le tableau de variations.

**La méthode imposée par l'énoncé, en 4 étapes :**

1. **Domaine de définition** : conditions d'existence ($\sqrt{A}$ exige $A \geqslant 0$ ; $\ln A$ exige $A > 0$ ; $\frac{1}{A}$ exige $A \neq 0$).
2. **Dérivée** avec les formules composées (Prop 1.9 pour $e^u$, Prop 1.20 pour $\ln u$…) et **domaine de dérivabilité**.
3. **Signe de $f'$** : on écarte les facteurs toujours positifs ($e^u > 0$ par Prop 1.3, une racine carrée, un carré…) et on étudie le signe du facteur restant. Si ce signe n'est pas évident, on étudie une **fonction auxiliaire**.
4. **Limites aux bornes** (croissances comparées si besoin) et **tableau de variations**.

:::question{label="1."}

Étudier $f_1 : x \mapsto e^{\sqrt{x}}$

#indice

Le domaine est dicté par la racine carrée. Attention à la nuance entre domaine de définition et domaine de dérivabilité : la fonction racine est définie en $0$ mais n'y est pas dérivable. Pour la dérivée, c'est la Prop 1.9 avec $u = \sqrt{x}$ ; pour le signe, souviens-toi qu'une exponentielle est toujours strictement positive.

Le plan complet déroulé sur une autre fonction : :voir-exemple[mener une étude de fonction]{id="fu-etude-plan"}. Pour les limites, :voir-exemple[croissances comparées]{id="fu-croissances-comparees"}.

#solution

**Domaine** : $\sqrt{x}$ exige $x \geqslant 0$, d'où $D_{f_1} = [0,+\infty[$.

**Dérivée** : forme $e^u$ avec $u = \sqrt{x}$, dérivable sur $]0,+\infty[$ seulement (la racine carrée n'est pas dérivable en $0$), $u' = \dfrac{1}{2\sqrt{x}}$. Par la Prop 1.9 :

$$f_1'(x) = \frac{1}{2\sqrt{x}}\,e^{\sqrt{x}} \quad \text{sur } ]0,+\infty[$$

**Signe** : $e^{\sqrt{x}} > 0$ (Prop 1.3) et $\dfrac{1}{2\sqrt{x}} > 0$, donc $f_1' > 0$ : $f_1$ est **strictement croissante**.

**Limites et valeurs** : $f_1(0) = e^0 = 1$ ; quand $x\to+\infty$, $\sqrt{x}\to+\infty$ donc $e^{\sqrt{x}}\to+\infty$ (composition de limites).

::tableau-variations
---
titre: Variations de f₁ sur [0 ; +∞[
bornes: ['0', '+∞']
lignes:
  - nom: f₁′(x)
    type: signe
    entre: ['+']
  - nom: f₁
    type: variation
    aux: ['1', '+∞']
---
::

:::

:::question{label="2."}

Étudier $f_2 : x \mapsto \ln(-x^2+3x-2)$

#indice

Le domaine se lit sur le signe d'un trinôme du second degré : calcule ses racines et rappelle-toi qu'avec $a<0$ le trinôme est positif *entre* les racines. Bonne nouvelle pour l'étape suivante : sur ce domaine le dénominateur de $f_2'$ (donné par la Prop 1.20) est strictement positif, donc seul le numérateur décide du signe.

Le plan complet déroulé sur une autre fonction : :voir-exemple[mener une étude de fonction]{id="fu-etude-plan"}. Pour le domaine, :voir-exemple[signe d'un second degré]{id="fu-signe-second-degre"}.

#solution

**Domaine** : il faut $-x^2+3x-2 > 0$. Racines du trinôme : $\Delta = 9-8 = 1$, $x = \dfrac{-3\pm 1}{-2}$, soit $x = 1$ et $x = 2$. Coefficient $a = -1 < 0$, donc le trinôme est **positif entre ses racines** :

$$D_{f_2} = \left]1, 2\right[$$

**Dérivée** : forme $\ln u$ avec $u = -x^2+3x-2 > 0$ sur $D$, $u' = -2x+3$. Par la Prop 1.20 :

$$f_2'(x) = \frac{-2x+3}{-x^2+3x-2} \quad \text{sur } ]1,2[$$

**Signe** : le dénominateur est $> 0$ sur $D$ (c'est la condition du domaine), donc $f_2'(x)$ est du signe de $-2x+3$, qui s'annule en $x = \frac{3}{2}$ : positif avant, négatif après.

**Limites et valeurs** : aux deux bornes, $u \to 0^+$ donc $\ln u \to -\infty$ (Prop 1.16). Maximum en $\frac{3}{2}$ :

$$f_2\left(\tfrac{3}{2}\right) = \ln\left(-\tfrac{9}{4}+\tfrac{9}{2}-2\right) = \ln\tfrac{1}{4} = -2\ln 2$$

::tableau-variations
---
titre: Variations de f₂ sur ]1 ; 2[
bornes: ['1', '3/2', '2']
lignes:
  - nom: f₂′(x)
    type: signe
    entre: ['+', '−']
    aux: ['', '0', '']
  - nom: f₂
    type: variation
    aux: ['−∞', '−2ln 2', '−∞']
---
::

⚠️ *Le tableau de la correction officielle affiche $\ln(3)$ comme maximum : c'est une coquille — $f_2\left(\frac{3}{2}\right) = \ln\frac{1}{4} = -2\ln 2$ (et $-x^2+3x-2$ ne dépasse jamais $\frac{1}{4}$, donc $\ln 3$ est impossible).*

:::

:::question{label="3."}

Étudier $f_3 : x \mapsto x\,e^{1/x}$

#indice

C'est un produit : applique $(uv)' = u'v+uv'$, avec la Prop 1.9 pour dériver $e^{1/x}$ (la dérivée de $\frac{1}{x}$ vaut $-\frac{1}{x^2}$). Pense ensuite à **factoriser par l'exponentielle** : c'est ce qui rend le signe lisible. Il y a quatre bornes à traiter, et en $0^+$ tu auras besoin d'une croissance comparée après le changement de variable $X = \frac{1}{x}$.

Le plan complet déroulé sur une autre fonction : :voir-exemple[mener une étude de fonction]{id="fu-etude-plan"}. Pour la limite de l'exposant, :voir-exemple[changement de variable]{id="fu-limite-composee"}.

#solution

**Domaine** : $\frac{1}{x}$ exige $x \neq 0$, d'où $D_{f_3} = \mathbb{R}^*$.

**Dérivée** : produit $u\times v$ avec $u = x$, $u' = 1$ et $v = e^{1/x}$, $v' = -\dfrac{1}{x^2}e^{1/x}$ (Prop 1.9 avec $\frac{1}{x}$ de dérivée $-\frac{1}{x^2}$) :

$$f_3'(x) = e^{1/x}+x\left(-\frac{1}{x^2}\right)e^{1/x} = e^{1/x}\left(1-\frac{1}{x}\right) = e^{1/x}\,\frac{x-1}{x} \quad \text{sur } \mathbb{R}^*$$

*(on factorise toujours par l'exponentielle)*

**Signe** : $e^{1/x} > 0$, donc $f_3'$ est du signe du quotient $\dfrac{x-1}{x}$ :

::tableau-variations
---
titre: Signe du quotient (x − 1)/x
bornes: ['−∞', '0', '1', '+∞']
barres: [1]
lignes:
  - nom: x − 1
    type: signe
    entre: ['−', '−', '+']
    aux: ['', '', '0', '']
  - nom: x
    type: signe
    entre: ['−', '+', '+']
  - nom: (x − 1)/x
    type: signe
    entre: ['+', '−', '+']
    aux: ['', '', '0', '']
---
::

**Limites** (les 4 bornes) :

- $x\to-\infty$ : $\frac{1}{x}\to 0$ donc $e^{1/x}\to 1$, et $f_3(x) \to -\infty$.
- $x\to 0^-$ : $\frac{1}{x}\to-\infty$ donc $e^{1/x}\to 0$ (Prop 1.5), et $x\to 0$ : le produit tend vers $0^-$.
- $x\to 0^+$ : $\frac{1}{x}\to+\infty$. On pose $X = \frac{1}{x}$ : $f_3(x) = \dfrac{e^X}{X} \to +\infty$ par **croissance comparée** (Prop 1.6).
- $x\to+\infty$ : $e^{1/x}\to 1$ donc $f_3(x)\to+\infty$.
- Minimum local en $1$ : $f_3(1) = e$.

::tableau-variations
---
titre: Variations de f₃ sur ℝ*
bornes: ['−∞', '0', '1', '+∞']
barres: [1]
lignes:
  - nom: f₃′(x)
    type: signe
    entre: ['+', '−', '+']
    aux: ['', '', '0', '']
  - nom: f₃
    type: variation
    aux: ['−∞', ['0⁻', '+∞'], 'e', '+∞']
---
::

:::

:::question{label="4."}

Étudier $f_4 : x \mapsto \dfrac{\sin x}{x}$

#indice

Commence par exploiter la parité pour te ramener à $]0,+\infty[$. La dérivée est un quotient, et son signe est celui de $g(x) = x\cos x-\sin x$ : ce signe n'est pas lisible directement, il faut donc étudier $g$ comme **fonction auxiliaire**. Sa dérivée se simplifie très joliment, et le signe de $\sin$ te découpera $]0,+\infty[$ en intervalles $[n\pi,(n+1)\pi]$ selon la parité de $n$ ; le théorème des valeurs intermédiaires fera le reste. En $0$, reconnais un taux d'accroissement.

Le plan complet déroulé sur une autre fonction : :voir-exemple[mener une étude de fonction]{id="fu-etude-plan"}. Pour l'unicité du point d'annulation, :voir-exemple[TVI et stricte monotonie]{id="fu-tvi"}.

#solution

**Étape 1 — domaine et symétries.** $x \neq 0$, donc $D_{f_4} = \mathbb{R}^*$. On remarque que $f_4$ est **paire** ($f_4(-x) = \dfrac{-\sin x}{-x} = f_4(x)$, Prop 2.1) — on l'étudie donc sur $]0,+\infty[$ — et qu'elle est **prolongeable par continuité en 0** en posant $f_4(0) = 1$ (cf. la limite ci-dessous).

**Étape 2 — dérivée.** Quotient avec $u = \sin x$, $u' = \cos x$ (Prop 2.3) et $v = x$, $v' = 1$ :

$$f_4'(x) = \frac{x\cos x-\sin x}{x^2} \quad \text{sur } \mathbb{R}^*$$

**Étape 3 — signe, via une fonction auxiliaire.** $x^2 > 0$, donc $f_4'$ est du signe de $g(x) = x\cos x-\sin x$, qu'on étudie sur $]0,+\infty[$ :

$$g'(x) = \cos x - x\sin x-\cos x = -x\sin x$$

Or, sur $]0,+\infty[$, $\sin x \geqslant 0 \iff x \in [n\pi,(n+1)\pi]$ avec $n$ **pair**. Donc $g$ est **strictement décroissante** sur chacun des intervalles $[n\pi,(n+1)\pi]$ avec $n$ pair, et **strictement croissante** sur $[n\pi,(n+1)\pi]$ avec $n$ impair.

Aux bornes : $g(n\pi) = n\pi\cos(n\pi)-\sin(n\pi) = (-1)^n\,n\pi$. Sur chaque $[n\pi,(n+1)\pi]$, $g$ est donc continue, strictement monotone, et change de signe ($n$ pair : de $n\pi$ à $-(n+1)\pi$ ; $n$ impair : de $-n\pi$ à $(n+1)\pi$). D'après le **théorème des valeurs intermédiaires**, il existe un **unique** réel $x_n$ dans chaque intervalle $[n\pi,(n+1)\pi]$ tel que $g(x_n) = 0$. D'où les tableaux de variations de $g$ :

Pour $n$ **pair** :

::tableau-variations
---
titre: Variations de g sur [nπ ; (n+1)π], n pair
bornes: ['nπ', 'xₙ', '(n+1)π']
lignes:
  - nom: g′(x)
    type: signe
    entre: ['−', '−']
    aux: ['0', '', '0']
  - nom: g
    type: variation
    aux: ['nπ', '0', '−(n+1)π']
---
::

Pour $n$ **impair** :

::tableau-variations
---
titre: Variations de g sur [nπ ; (n+1)π], n impair
bornes: ['nπ', 'xₙ', '(n+1)π']
lignes:
  - nom: g′(x)
    type: signe
    entre: ['+', '+']
    aux: ['0', '', '0']
  - nom: g
    type: variation
    aux: ['−nπ', '0', '(n+1)π']
---
::

**Étape 4 — tableau de variations de $f_4$.** $f_4'$ est du signe de $g$, et $f_4(n\pi) = \dfrac{\sin(n\pi)}{n\pi} = 0$ à chaque borne :

Pour $n$ **pair** :

::tableau-variations
---
titre: Variations de f₄ sur [nπ ; (n+1)π], n pair
bornes: ['nπ', 'xₙ', '(n+1)π']
lignes:
  - nom: g(x)
    type: signe
    entre: ['+', '−']
    aux: ['', '0', '']
  - nom: f₄
    type: variation
    aux: ['0', 'f₄(xₙ)', '0']
---
::

Pour $n$ **impair** :

::tableau-variations
---
titre: Variations de f₄ sur [nπ ; (n+1)π], n impair
bornes: ['nπ', 'xₙ', '(n+1)π']
lignes:
  - nom: g(x)
    type: signe
    entre: ['−', '+']
    aux: ['', '0', '']
  - nom: f₄
    type: variation
    aux: ['0', 'f₄(xₙ)', '0']
---
::

*(Cas particulier $n = 0$ : $g(0) = 0$ et $g$ strictement décroissante donnent $g < 0$ sur $]0,\pi]$, donc $x_0 = 0$ : $f_4$ est **strictement décroissante** sur $]0,\pi]$, de $1$ vers $0$.)*

**Étape 5 — limites.**

- $x\to 0$ : $\dfrac{\sin x}{x} = \dfrac{\sin x-\sin 0}{x-0} \to \sin'(0) = \cos(0) = 1$ *(c'est un taux d'accroissement : même argument que la Prop 1.8 du cours pour $\frac{e^x-1}{x}$)* — d'où le prolongement par continuité $f_4(0) = 1$.
- $x\to+\infty$ : $\left\lvert\dfrac{\sin x}{x}\right\rvert \leqslant \dfrac{1}{x} \to 0$, donc $f_4 \to 0$ par **encadrement** ($f_4$ oscille en s'amortissant vers $0$, ses extrema étant les $f_4(x_n)$).

:::

:::question{label="5."}

Étudier $f_5 : x \mapsto \sqrt{x^2-5x+6}$

#indice

Sous une racine carrée, l'expression doit être positive **ou nulle** : le domaine contient donc les racines du trinôme, mais le domaine de dérivabilité, lui, les exclut (la formule $(\sqrt u)' = \frac{u'}{2\sqrt u}$ exige $u>0$). Une fois la dérivée écrite, regarde où s'annule son numérateur : la valeur trouvée réserve une surprise.

Le plan complet déroulé sur une autre fonction : :voir-exemple[mener une étude de fonction]{id="fu-etude-plan"}. Pour le domaine, :voir-exemple[signe d'un second degré]{id="fu-signe-second-degre"}.

#solution

**Domaine** : $x^2-5x+6 \geqslant 0$. Racines : $\Delta = 25-24 = 1$, $x = \dfrac{5\pm 1}{2}$, soit $2$ et $3$. Comme $a = 1 > 0$, le trinôme est positif **à l'extérieur** des racines :

$$D_{f_5} = \left]-\infty,2\right] \cup \left[3,+\infty\right[$$

**Dérivée** : forme $\sqrt{u}$ avec $u = x^2-5x+6$, $u' = 2x-5$ :

$$f_5'(x) = \frac{2x-5}{2\sqrt{x^2-5x+6}} \quad \text{sur } ]-\infty,2[\,\cup\,]3,+\infty[$$

*(pas de dérivée en $2$ ni en $3$ : $u$ s'y annule, la formule $(\sqrt{u})' = \frac{u'}{2\sqrt{u}}$ exige $u > 0$ — tangentes verticales)*

**Signe** : le dénominateur est $> 0$, donc $f_5'$ est du signe de $2x-5$, qui s'annule en $\frac{5}{2}$… qui est **hors du domaine**. Sur $]-\infty,2[$ : $2x-5 < -1 < 0$, donc $f_5$ est décroissante. Sur $]3,+\infty[$ : $2x-5 > 1 > 0$, donc $f_5$ est croissante.

**Limites et valeurs** : $f_5(2) = 0$, $f_5(3) = 0$ ; en $\pm\infty$, $x^2-5x+6 \to +\infty$ donc $f_5 \to +\infty$.

::tableau-variations
---
titre: Variations de f₅ sur ]−∞ ; 2] ∪ [3 ; +∞[
bornes: ['−∞', '2', '3', '+∞']
lignes:
  - nom: f₅′(x)
    type: signe
    entre: ['−', '‖', '+']
  - nom: f₅
    type: variation
    aux: ['+∞', '0', '0', '+∞']
---
::

:::

:::question{label="6."}

Étudier $f_6 : x \mapsto e^x\ln(x+1)$

#indice

Produit d'une exponentielle et d'un logarithme : dérive avec $(uv)'$, puis factorise par $e^x$ qui est toujours positif. Le crochet restant n'a pas un signe évident — introduis-le comme fonction auxiliaire $h$, dérive-la, trouve son minimum et regarde son signe. Attention aussi à la borne gauche du domaine, où le logarithme explose.

Le plan complet déroulé sur une autre fonction : :voir-exemple[mener une étude de fonction]{id="fu-etude-plan"}. Pour les limites, :voir-exemple[croissances comparées]{id="fu-croissances-comparees"}.

#solution

**Domaine** : $x+1 > 0$, d'où $D_{f_6} = \left]-1,+\infty\right[$.

**Dérivée** : produit avec $u = e^x$, $u' = e^x$ et $v = \ln(x+1)$, $v' = \dfrac{1}{x+1}$ (Prop 1.20) :

$$f_6'(x) = e^x\ln(x+1)+\frac{e^x}{x+1} = e^x\left[\ln(x+1)+\frac{1}{x+1}\right] \quad \text{sur } ]-1,+\infty[$$

**Signe** : $e^x > 0$, donc $f_6'$ est du signe de $h(x) = \ln(x+1)+\dfrac{1}{x+1}$. Ce signe n'est pas évident, d'où une **étude auxiliaire** :

$$h'(x) = \frac{1}{x+1}-\frac{1}{(x+1)^2} = \frac{(x+1)-1}{(x+1)^2} = \frac{x}{(x+1)^2}$$

$h' < 0$ sur $]-1,0[$ et $h' > 0$ sur $]0,+\infty[$ : $h$ atteint son **minimum en $0$**, qui vaut $h(0) = \ln 1+1 = 1 > 0$. Donc $h > 0$ partout, donc $f_6' > 0$ : $f_6$ est **strictement croissante**.

**Limites** : quand $x\to -1^+$, $e^x \to e^{-1}$ (fini, positif) et $\ln(x+1)\to-\infty$, donc $f_6\to-\infty$. Quand $x\to+\infty$, les deux facteurs tendent vers $+\infty$, donc $f_6\to+\infty$.

::tableau-variations
---
titre: Variations de f₆ sur ]−1 ; +∞[
bornes: ['−1', '+∞']
lignes:
  - nom: f₆′(x)
    type: signe
    entre: ['+']
  - nom: f₆
    type: variation
    aux: ['−∞', '+∞']
---
::

:::

::::

:::exercice{titre="Exercice 4" theme="Équations trigonométriques"}

Résoudre les équations trigonométriques suivantes.

**Méthode** : on se ramène à une égalité entre **deux cosinus** (ou deux sinus), puis on utilise la lecture du cercle trigonométrique (Déf 2.1, avec la parité de cos et la périodicité, Prop 2.1–2.2) :

$$\cos A = \cos B \iff A = B+2k\pi \;\text{ ou }\; A = -B+2k\pi \quad(k\in\mathbb{Z})$$

et la formule des angles complémentaires pour convertir un sinus : $\sin\theta = \cos\!\left(\dfrac{\pi}{2}-\theta\right)$.

::cercle-trigo{titre="D’où viennent les deux familles de solutions" resume="La droite coupe le cercle en deux points : d’où deux solutions par tour, et deux familles à écrire." mode="equations" modes="equations"}
::

::question{label="1."}

Déterminer les réels $x$ tels que $\cos\left(x-\dfrac{\pi}{4}\right) = \sin\left(2x-\dfrac{\pi}{3}\right)$.

#indice

Tant que tu as un cosinus d'un côté et un sinus de l'autre, tu ne peux rien conclure : convertis d'abord le sinus en cosinus avec les angles complémentaires. Ensuite, l'égalité de deux cosinus donne **deux** familles de solutions, pas une seule — ne perds pas la seconde en chemin, et n'oublie pas le $2k\pi$.

La conversion puis les deux familles, sur une autre équation : :voir-exemple[équation mêlant sinus et cosinus]{id="fu-equation-trigo-sin-cos"}.

#solution

**Étape 1 — tout mettre en cosinus** :

$$\sin\left(2x-\frac{\pi}{3}\right) = \cos\left(\frac{\pi}{2}-\left(2x-\frac{\pi}{3}\right)\right) = \cos\left(\frac{5\pi}{6}-2x\right)$$

*(calcul : $\frac{\pi}{2}+\frac{\pi}{3} = \frac{3\pi+2\pi}{6} = \frac{5\pi}{6}$)*

**Étape 2 — égalité de deux cosinus** : $\cos\left(x-\frac{\pi}{4}\right) = \cos\left(\frac{5\pi}{6}-2x\right)$ donne deux familles.

**Famille 1** : $x-\dfrac{\pi}{4} = \dfrac{5\pi}{6}-2x+2k\pi$

$$3x = \frac{5\pi}{6}+\frac{\pi}{4}+2k\pi = \frac{10\pi+3\pi}{12}+2k\pi = \frac{13\pi}{12}+2k\pi$$

$$x = \frac{13\pi}{36}+\frac{2k\pi}{3}$$

**Famille 2** : $x-\dfrac{\pi}{4} = -\dfrac{5\pi}{6}+2x+2k\pi$

$$-x = -\frac{5\pi}{6}+\frac{\pi}{4}+2k\pi = -\frac{7\pi}{12}+2k\pi \quad\Longrightarrow\quad x = \frac{7\pi}{12}-2k\pi$$

Comme $k$ parcourt tout $\mathbb{Z}$, on écrit simplement $x = \dfrac{7\pi}{12}+2k\pi$.

$$\boxed{S = \left\{\frac{13\pi}{36}+\frac{2k\pi}{3},\; k\in\mathbb{Z}\right\}\cup\left\{\frac{7\pi}{12}+2k\pi,\; k\in\mathbb{Z}\right\}}$$

*(Vérifié numériquement : cela donne bien exactement 4 solutions par tour, par exemple $\frac{13\pi}{36}, \frac{7\pi}{12}, \frac{37\pi}{36}, \frac{61\pi}{36}$ dans $[0,2\pi[$.)*

::

::question{label="2."}

Résoudre sur l'intervalle indiqué : $\cos(x) = \dfrac{1}{2}$ dans $[0,2\pi]$.

#indice

Reconnais d'abord une valeur remarquable du cercle : quel angle usuel a pour cosinus $\frac{1}{2}$ ? Les deux familles de solutions donnent chacune un représentant dans $[0,2\pi]$ — pour la seconde, il faut choisir la bonne valeur de $k$ afin de retomber dans l'intervalle demandé.

La même méthode avec une autre valeur : :voir-exemple[équation cos(A) = cos(B)]{id="fu-equation-trigo-cos"}. Pour reconnaître l'angle, :voir-exemple[valeurs remarquables]{id="fu-trigo-valeurs"}.

#solution

**Valeur remarquable** : $\dfrac{1}{2} = \cos\dfrac{\pi}{3}$. Donc :

$$\cos x = \cos\frac{\pi}{3} \iff x = \frac{\pi}{3}+2k\pi \;\text{ ou }\; x = -\frac{\pi}{3}+2k\pi$$

**Dans $[0,2\pi]$** : la première famille donne $x = \dfrac{\pi}{3}$ (avec $k=0$) ; la seconde donne $x = -\dfrac{\pi}{3}+2\pi = \dfrac{5\pi}{3}$ (avec $k=1$).

$$\boxed{S = \left\{\frac{\pi}{3},\; \frac{5\pi}{3}\right\}}$$

⚠️ *L'énoncé dit « inéquation » mais écrit une équation ($=$). Si l'intention était $\cos x \leqslant \frac{1}{2}$, la lecture du cercle donne $S = \left[\frac{\pi}{3}, \frac{5\pi}{3}\right]$ (l'arc où le cosinus, c'est-à-dire l'abscisse sur le cercle, est sous $\frac{1}{2}$).*

::

:::

:::exercice{titre="Exercice 5" theme="Dérivées de fonctions trigonométriques"}

Soit $f$ une fonction définie sur $\mathbb{R}$. Calculer $f'(x)$ dans chacun des cas suivants.

**Méthode** : mêmes réflexes que dans le chapitre *Fonctions d'une variable réelle* (identifier la forme : somme, produit, carré, quotient), avec $\sin' = \cos$ et $\cos' = -\sin$ (Prop 2.3), et $\big(\sin(ax+b)\big)' = a\cos(ax+b)$.

::question{label="1."}

$f(x) = x^2+\cos x$

#indice

C'est une somme : on dérive terme à terme. Le seul point de vigilance est le signe apporté par la dérivée du cosinus (Prop 2.3).

Les mêmes formules sur d'autres expressions : :voir-exemple[dériver une expression trigonométrique]{id="fu-derivee-trigo"}.

#solution

Somme, dérivée terme à terme :

$$\boxed{f'(x) = 2x-\sin x}$$

::

::question{label="2."}

$f(x) = \sin 2x$

#indice

C'est une composée de la forme $\sin(ax+b)$. Le facteur $a$ ne disparaît pas : il sort devant grâce à la dérivation en chaîne. Oublier ce facteur est l'erreur la plus fréquente.

Les mêmes formules sur d'autres expressions : :voir-exemple[dériver une expression trigonométrique]{id="fu-derivee-trigo"}.

#solution

Forme $\sin(ax+b)$ avec $a = 2$, $b = 0$ :

$$\boxed{f'(x) = 2\cos 2x}$$

::

::question{label="3."}

$f(x) = \cos x\sin x$

#indice

Applique la formule du produit $(uv)' = u'v+uv'$ avec $u = \cos x$ et $v = \sin x$. Les deux termes obtenus se regroupent en une expression bien connue — que tu peux relier à un angle double si tu le souhaites.

Les mêmes formules sur d'autres expressions : :voir-exemple[dériver une expression trigonométrique]{id="fu-derivee-trigo"}.

#solution

Produit, avec $u = \cos x$, $u' = -\sin x$ et $v = \sin x$, $v' = \cos x$ :

$$f'(x) = -\sin x\sin x+\cos x\cos x = \cos^2x-\sin^2x$$

$$\boxed{f'(x) = \cos^2x-\sin^2x \;(= \cos 2x)}$$

::

::question{label="4."}

$f(x) = \sin^2x$

#indice

Vois-y un carré $u^2$, dont la dérivée est $2uu'$. Il ne s'agit pas de dériver « le carré » seul : le facteur $u'$ est indispensable.

Le cas de la puissance y est traité sur une autre fonction : :voir-exemple[dériver une expression trigonométrique]{id="fu-derivee-trigo"}.

#solution

Carré $u^2$ (avec $n = 2$), $u = \sin x$, $u' = \cos x$ :

$$\boxed{f'(x) = 2\sin x\cos x \;(= \sin 2x)}$$

::

::question{label="5."}

$f(x) = x^2\cos x$

#indice

Produit d'un polynôme et d'un cosinus : formule $(uv)'$. Le deuxième terme hérite du signe moins de la dérivée du cosinus, ne le perds pas.

Le cas du produit y est traité sur une autre fonction : :voir-exemple[dériver une expression trigonométrique]{id="fu-derivee-trigo"}.

#solution

Produit, avec $u = x^2$, $u' = 2x$ et $v = \cos x$, $v' = -\sin x$ :

$$\boxed{f'(x) = 2x\cos x-x^2\sin x}$$

::

::question{label="6."}

$f(x) = \cos^2x$

#indice

Même schéma qu'à la question 4, mais cette fois $u = \cos x$ : le facteur $u'$ change de signe, et donc le résultat aussi.

Le cas de la puissance y est traité sur une autre fonction : :voir-exemple[dériver une expression trigonométrique]{id="fu-derivee-trigo"}.

#solution

Carré $u^2$, avec $u = \cos x$, $u' = -\sin x$ :

$$\boxed{f'(x) = -2\sin x\cos x \;(= -\sin 2x)}$$

::

::question{label="7."}

$f(x) = \sin x+\cos x$

#indice

Une somme, donc rien de plus qu'un usage direct de $\sin' = \cos$ et $\cos' = -\sin$. Sois très attentif aux signes : c'est exactement là que la correction officielle se trompe.

Les mêmes formules sur d'autres expressions : :voir-exemple[dériver une expression trigonométrique]{id="fu-derivee-trigo"}.

#solution

Somme, dérivée terme à terme :

$$\boxed{f'(x) = \cos x-\sin x}$$

⚠️ *La correction officielle imprime $-\cos x+\sin x$ : erreur de signe — puisque $\sin' = \cos$ et $\cos' = -\sin$, la dérivée est bien $\cos x-\sin x$.*

::

::question{label="8."}

$f(x) = \dfrac{2\cos x+3}{2\cos x-3}$

#indice

C'est un quotient : applique $\left(\frac{u}{v}\right)' = \frac{u'v-uv'}{v^2}$. Le numérateur semble lourd, mais $u'$ et $v'$ sont **identiques** : factorise par ce facteur commun et tout se simplifie d'un coup. Pense aussi à justifier que le dénominateur ne s'annule jamais.

Le cas du quotient y est traité sur une autre fonction, simplification comprise : :voir-exemple[dériver une expression trigonométrique]{id="fu-derivee-trigo"}.

#solution

Quotient, avec $u = 2\cos x+3$, $u' = -2\sin x$ et $v = 2\cos x-3$, $v' = -2\sin x$.

Numérateur : $-2\sin x(2\cos x-3)-(2\cos x+3)(-2\sin x)$. On **factorise par $-2\sin x$** :

$$-2\sin x\big[(2\cos x-3)-(2\cos x+3)\big] = -2\sin x\times(-6) = 12\sin x$$

$$\boxed{f'(x) = \frac{12\sin x}{(2\cos x-3)^2}}$$

*(Remarque : $\lvert\cos x\rvert\leqslant 1$ donc $2\cos x-3 \leqslant -1 < 0$ : le dénominateur ne s'annule jamais, $f$ est dérivable sur $\mathbb{R}$.)*

::

:::

:::exercice{titre="Exercice 6" theme="Fonctions trigonométriques réciproques"}

On étudie les fonctions $\arccos$, $\arcsin$ et $\arctan$, réciproques des fonctions trigonométriques restreintes (Déf 3.1).

::question{label="1. a)"}

Calculer les valeurs de $\arccos$ et $\arcsin$ en $0$, $1$, $\dfrac{1}{2}$, $\dfrac{\sqrt{2}}{2}$, $\dfrac{\sqrt{3}}{2}$.

#indice

Lis le cercle trigonométrique « à l'envers » : $\arccos(x)$ est l'unique angle **de $[0,\pi]$** dont le cosinus vaut $x$, et $\arcsin(x)$ l'unique angle **de $\left[-\frac{\pi}{2},\frac{\pi}{2}\right]$** dont le sinus vaut $x$. L'intervalle d'arrivée n'est pas un détail : c'est lui qui rend la réponse unique.

La lecture inverse expliquée sur d'autres valeurs : :voir-exemple[calculer un arccos ou un arcsin]{id="fu-arc-valeurs"}.

#solution

**Méthode** : $\arccos(x)$ est **l'unique angle de $[0,\pi]$** dont le cosinus vaut $x$ ; $\arcsin(x)$ est **l'unique angle de $\left[-\frac{\pi}{2},\frac{\pi}{2}\right]$** dont le sinus vaut $x$ (Déf 3.1). On lit donc les valeurs remarquables du cercle trigonométrique « à l'envers ».

| $x$ | $0$ | $1$ | $\frac{1}{2}$ | $\frac{\sqrt{2}}{2}$ | $\frac{\sqrt{3}}{2}$ |
|---|---|---|---|---|---|
| $\arccos x$ | $\frac{\pi}{2}$ | $0$ | $\frac{\pi}{3}$ | $\frac{\pi}{4}$ | $\frac{\pi}{6}$ |
| $\arcsin x$ | $0$ | $\frac{\pi}{2}$ | $\frac{\pi}{6}$ | $\frac{\pi}{4}$ | $\frac{\pi}{3}$ |

*(Exemple de lecture : $\cos\frac{\pi}{3} = \frac{1}{2}$ et $\frac{\pi}{3}\in[0,\pi]$, donc $\arccos\frac{1}{2} = \frac{\pi}{3}$.)*

::

::question{label="1. b)"}

Calculer les valeurs de $\arctan$ en $0$, $1$, $\sqrt{3}$, $\dfrac{1}{\sqrt{3}}$, puis calculer $\arctan\left(\tan\dfrac{7\pi}{3}\right)$.

#indice

Même lecture inverse que précédemment, cette fois dans $\left]-\frac{\pi}{2},\frac{\pi}{2}\right[$. Pour la dernière valeur, méfie-toi du réflexe « $\arctan(\tan\theta)=\theta$ » : cette simplification n'est valable que si $\theta$ appartient à l'intervalle d'arrivée de $\arctan$. Commence par réduire l'angle modulo la période de la tangente.

Pour les valeurs, :voir-exemple[calculer un arctan]{id="fu-arc-valeurs"} ; pour la composition, :voir-exemple[le piège de arccos(cos x)]{id="fu-arc-compose"}.

#solution

**Méthode** : même lecture inverse, avec des valeurs dans $\left]-\frac{\pi}{2},\frac{\pi}{2}\right[$ :

| $x$ | $0$ | $1$ | $\sqrt{3}$ | $\frac{1}{\sqrt{3}}$ |
|---|---|---|---|---|
| $\arctan x$ | $0$ | $\frac{\pi}{4}$ | $\frac{\pi}{3}$ | $\frac{\pi}{6}$ |

**Le piège** $\arctan\left(\tan\dfrac{7\pi}{3}\right)$ : la Prop 3.3 dit que $\arctan(\tan\theta) = \theta$ **seulement si** $\theta \in \left]-\frac{\pi}{2},\frac{\pi}{2}\right[$. Or $\dfrac{7\pi}{3} \notin \left]-\frac{\pi}{2},\frac{\pi}{2}\right[$ : on **ne peut pas** répondre $\frac{7\pi}{3}$.

On réduit d'abord l'angle : $\dfrac{7\pi}{3} = \dfrac{\pi}{3}+2\pi$, donc $\tan\dfrac{7\pi}{3} = \tan\dfrac{\pi}{3}$ (périodicité). Et cette fois $\dfrac{\pi}{3} \in \left]-\frac{\pi}{2},\frac{\pi}{2}\right[$, donc :

$$\arctan\left(\tan\frac{7\pi}{3}\right) = \arctan\left(\tan\frac{\pi}{3}\right) = \boxed{\frac{\pi}{3}}$$

::

::question{label="2."}

Montrer que $\arccos x+\arcsin x = \dfrac{\pi}{2}$ pour tout $x\in[-1,1]$.

#indice

Pour prouver qu'une expression est constante, la stratégie du cours est toujours la même : poser $f$ égale à cette expression, montrer que $f' = 0$ sur un intervalle, puis identifier la constante en **calculant $f$ en un point bien choisi** (prends le plus simple possible). Les dérivées de $\arccos$ et $\arcsin$ sont dans la Prop 3.4 ; pense à traiter les deux bornes à part, car $f$ n'y est pas dérivable.

La même méthode sur une autre identité : :voir-exemple[dérivée nulle plus un point]{id="fu-derivee-nulle"}.

#solution

**Méthode du cours** (même schéma que la démonstration de la Prop 4.3 pour argsh) : pour montrer qu'une fonction est constante, on montre que **sa dérivée est nulle** sur un intervalle, puis on calcule sa **valeur en un point**.

Posons $f(x) = \arccos x+\arcsin x$ sur $[-1,1]$.

- $f$ est dérivable sur $]-1,1[$ (Prop 3.4) et :

$$f'(x) = \frac{-1}{\sqrt{1-x^2}}+\frac{1}{\sqrt{1-x^2}} = 0$$

- Donc $f$ est **constante** sur $]-1,1[$. Sa valeur : en $x = 0$,

$$f(0) = \arccos 0+\arcsin 0 = \frac{\pi}{2}+0 = \frac{\pi}{2}$$

- Donc $f(x) = \dfrac{\pi}{2}$ sur $]-1,1[$. Aux bornes, on vérifie directement : $f(1) = 0+\dfrac{\pi}{2}$ ✓ et $f(-1) = \pi+\left(-\dfrac{\pi}{2}\right) = \dfrac{\pi}{2}$ ✓.

$$\boxed{\forall x\in[-1,1],\quad \arccos x+\arcsin x = \frac{\pi}{2}}$$

::

:::

:::exercice{titre="Exercice 7" theme="Identités hyperboliques"}

Démontrer les égalités suivantes.

**Méthode du cours** (celle de la démonstration de la Prop 4.1) : **revenir aux définitions exponentielles** (Déf 4.1), développer avec les propriétés algébriques de exp (Prop 1.2), puis regrouper.

::question{label="1."}

Pour tous réels $a$ et $b$ : $\mathrm{ch}(a+b) = \mathrm{ch}\,a\,\mathrm{ch}\,b+\mathrm{sh}\,a\,\mathrm{sh}\,b$

#indice

Pars du membre de **droite** — c'est celui qui se développe — en remplaçant $\mathrm{ch}$ et $\mathrm{sh}$ par leurs définitions exponentielles (Déf 4.1). Développe les deux produits séparément, puis additionne : les termes croisés doivent disparaître.

La méthode déroulée sur une autre identité : :voir-exemple[revenir aux exponentielles]{id="fu-hyperbolique-def"}.

#solution

On développe le membre de droite :

$$\mathrm{ch}\,a\,\mathrm{ch}\,b+\mathrm{sh}\,a\,\mathrm{sh}\,b = \frac{(e^a+e^{-a})(e^b+e^{-b})}{4}+\frac{(e^a-e^{-a})(e^b-e^{-b})}{4}$$

Premier produit : $e^{a+b}+e^{a-b}+e^{-a+b}+e^{-a-b}$.

Second produit : $e^{a+b}-e^{a-b}-e^{-a+b}+e^{-a-b}$.

En sommant, les termes croisés **se compensent** :

$$= \frac{2e^{a+b}+2e^{-(a+b)}}{4} = \frac{e^{a+b}+e^{-(a+b)}}{2} = \mathrm{ch}(a+b) \qquad\blacksquare$$

::

::question{label="2."}

Pour tout réel $a$ : $\mathrm{ch}(2a) = \mathrm{ch}^2a+\mathrm{sh}^2a = 2\,\mathrm{ch}^2a-1 = 1+2\,\mathrm{sh}^2a$

#indice

Il y a trois écritures à obtenir, mais une seule idée : calcule séparément la **somme** $\mathrm{ch}^2a+\mathrm{sh}^2a$ et la **différence** $\mathrm{ch}^2a-\mathrm{sh}^2a$ à partir des définitions exponentielles. La somme te donne la première égalité, la différence (Prop 4.1) permet de passer aux deux autres par substitution. Souviens-toi que $e^a\cdot e^{-a}=1$ en développant les carrés.

La méthode déroulée sur une autre identité : :voir-exemple[revenir aux exponentielles]{id="fu-hyperbolique-def"}.

#solution

**Méthode de la correction** : on calcule séparément $\mathrm{ch}^2a+\mathrm{sh}^2a$ et $\mathrm{ch}^2a-\mathrm{sh}^2a$ à partir des définitions exponentielles. Soit $a$ un réel.

**Somme** :

$$\mathrm{ch}^2a+\mathrm{sh}^2a = \left(\frac{e^a+e^{-a}}{2}\right)^2+\left(\frac{e^a-e^{-a}}{2}\right)^2 = \frac{e^{2a}+e^{-2a}+2}{4}+\frac{e^{2a}+e^{-2a}-2}{4} = 2\cdot\frac{e^{2a}+e^{-2a}}{4} = \mathrm{ch}(2a)$$

*(en développant les carrés avec $e^a\cdot e^{-a} = 1$)*

**Différence** :

$$\mathrm{ch}^2a-\mathrm{sh}^2a = \frac{e^{2a}+e^{-2a}+2}{4}-\frac{e^{2a}+e^{-2a}-2}{4} = \frac{4}{4} = 1$$

*(on retrouve la Prop 4.1)*

Ainsi $\mathrm{ch}(2a) = \mathrm{ch}^2a+\mathrm{sh}^2a$ ; et comme $\mathrm{ch}^2a-\mathrm{sh}^2a = 1$, c'est-à-dire $\mathrm{sh}^2a = \mathrm{ch}^2a-1$ et $\mathrm{ch}^2a = 1+\mathrm{sh}^2a$, on obtient en substituant :

$$\mathrm{ch}(2a) = 2\,\mathrm{ch}^2a-1 = 1+2\,\mathrm{sh}^2a \qquad\blacksquare$$

*(Variante plus rapide : prendre $b = a$ dans l'égalité 1, puis utiliser la Prop 4.1.)*

::

::question{label="3."}

Pour tous réels $a$ et $b$ : $\mathrm{sh}(a+b) = \mathrm{sh}\,a\,\mathrm{ch}\,b+\mathrm{sh}\,b\,\mathrm{ch}\,a$

#indice

Exactement la même démarche qu'à la question 1 : définitions exponentielles, développement des deux produits, puis somme. Repère bien quels termes croisés se compensent cette fois — ce ne sont pas les mêmes qu'avant.

La méthode déroulée sur une autre identité : :voir-exemple[revenir aux exponentielles]{id="fu-hyperbolique-def"}.

#solution

Même méthode :

$$\mathrm{sh}\,a\,\mathrm{ch}\,b+\mathrm{sh}\,b\,\mathrm{ch}\,a = \frac{(e^a-e^{-a})(e^b+e^{-b})}{4}+\frac{(e^b-e^{-b})(e^a+e^{-a})}{4}$$

Premier produit : $e^{a+b}+e^{a-b}-e^{b-a}-e^{-a-b}$.

Second produit : $e^{a+b}+e^{b-a}-e^{a-b}-e^{-a-b}$.

Somme (les termes en $e^{a-b}$ et $e^{b-a}$ se compensent) :

$$= \frac{2e^{a+b}-2e^{-(a+b)}}{4} = \mathrm{sh}(a+b) \qquad\blacksquare$$

::

::question{label="4."}

Pour tout réel $a$ : $\mathrm{sh}(2a) = 2\,\mathrm{sh}\,a\,\mathrm{ch}\,a$

#indice

Inutile de tout recalculer : tu viens d'établir une formule d'addition qui contient déjà celle-ci. Il suffit de choisir judicieusement les deux variables.

La méthode déroulée sur une autre identité : :voir-exemple[revenir aux exponentielles]{id="fu-hyperbolique-def"}.

#solution

On prend $b = a$ dans l'égalité de la question 3 :

$$\mathrm{sh}(2a) = \mathrm{sh}\,a\,\mathrm{ch}\,a+\mathrm{sh}\,a\,\mathrm{ch}\,a = \boxed{2\,\mathrm{sh}\,a\,\mathrm{ch}\,a} \qquad\blacksquare$$

::

::question{label="5."}

Pour tous réels $a$ et $b$ : $\mathrm{th}(a+b) = \dfrac{\mathrm{th}\,a+\mathrm{th}\,b}{1+\mathrm{th}\,a\,\mathrm{th}\,b}$

#indice

Puisque $\mathrm{th} = \frac{\mathrm{sh}}{\mathrm{ch}}$, forme le quotient des deux formules d'addition déjà démontrées. Pour faire apparaître des tangentes hyperboliques, divise haut et bas par un produit bien choisi — et justifie que cette division est licite en te rappelant que $\mathrm{ch}$ ne s'annule jamais.

La méthode déroulée sur une autre identité : :voir-exemple[revenir aux exponentielles]{id="fu-hyperbolique-def"}.

#solution

**Stratégie** : $\mathrm{th} = \dfrac{\mathrm{sh}}{\mathrm{ch}}$, donc on fait le quotient des égalités 3 et 1 :

$$\mathrm{th}(a+b) = \frac{\mathrm{sh}(a+b)}{\mathrm{ch}(a+b)} = \frac{\mathrm{sh}\,a\,\mathrm{ch}\,b+\mathrm{sh}\,b\,\mathrm{ch}\,a}{\mathrm{ch}\,a\,\mathrm{ch}\,b+\mathrm{sh}\,a\,\mathrm{sh}\,b}$$

Pour faire apparaître des th, on **divise numérateur et dénominateur par $\mathrm{ch}\,a\,\mathrm{ch}\,b$** (licite : $\mathrm{ch} \geqslant 1$ ne s'annule jamais) :

$$= \frac{\dfrac{\mathrm{sh}\,a}{\mathrm{ch}\,a}+\dfrac{\mathrm{sh}\,b}{\mathrm{ch}\,b}}{1+\dfrac{\mathrm{sh}\,a}{\mathrm{ch}\,a}\dfrac{\mathrm{sh}\,b}{\mathrm{ch}\,b}} = \frac{\mathrm{th}\,a+\mathrm{th}\,b}{1+\mathrm{th}\,a\,\mathrm{th}\,b} \qquad\blacksquare$$

::

:::

:::exercice{titre="Exercice 8" theme="Dérivées des fonctions hyperboliques"}

Démontrer que, pour tout réel $x$, les égalités suivantes sont vraies.

**Méthode du cours** (démonstration de la Prop 4.2) : **dériver les définitions exponentielles**, en n'oubliant pas que $(e^{-x})' = -e^{-x}$ (Prop 1.9 avec $u = -x$).

::question{label="1."}

$\mathrm{ch}'x = \mathrm{sh}\,x$

#indice

Repars de la définition $\mathrm{ch}\,x = \frac{e^x+e^{-x}}{2}$ et dérive terme à terme. Le point à surveiller est la dérivée de $e^{-x}$ : la Prop 1.9 fait apparaître un signe moins.

Les formules et leurs composées : :voir-exemple[dériver une expression hyperbolique]{id="fu-hyperbolique-derivee"}.

#solution

$$\mathrm{ch}'x = \left(\frac{e^x+e^{-x}}{2}\right)' = \frac{e^x-e^{-x}}{2} = \boxed{\mathrm{sh}\,x}$$

::

::question{label="2."}

$\mathrm{sh}'x = \mathrm{ch}\,x$

#indice

Même démarche qu'à la question précédente, mais avec un signe moins déjà présent dans la définition. Les deux signes moins se combinent : sois attentif à ce double changement.

Les formules et leurs composées : :voir-exemple[dériver une expression hyperbolique]{id="fu-hyperbolique-derivee"}.

#solution

$$\mathrm{sh}'x = \left(\frac{e^x-e^{-x}}{2}\right)' = \frac{e^x-(-e^{-x})}{2} = \frac{e^x+e^{-x}}{2} = \boxed{\mathrm{ch}\,x}$$

::

::question{label="3."}

$\mathrm{th}'x = 1-\mathrm{th}^2x = \dfrac{1}{\mathrm{ch}^2x}$

#indice

Comme $\mathrm{th}$ est un quotient de $\mathrm{sh}$ par $\mathrm{ch}$, applique $\left(\frac{u}{v}\right)'$ avec les deux dérivées que tu viens d'établir. Le résultat se lit ensuite de **deux** façons : en simplifiant le numérateur grâce à la Prop 4.1, ou en séparant la fraction en deux morceaux.

Le même calcul de quotient sur une expression voisine : :voir-exemple[dériver une expression hyperbolique]{id="fu-hyperbolique-derivee"}.

#solution

$\mathrm{th} = \dfrac{\mathrm{sh}}{\mathrm{ch}}$ : formule du **quotient**, avec les deux dérivées qu'on vient d'établir :

$$\mathrm{th}'x = \frac{\mathrm{sh}'x\,\mathrm{ch}\,x-\mathrm{sh}\,x\,\mathrm{ch}'x}{\mathrm{ch}^2x} = \frac{\mathrm{ch}^2x-\mathrm{sh}^2x}{\mathrm{ch}^2x}$$

Deux lectures de ce résultat, qui donnent les deux formes demandées :

- avec la **Prop 4.1**, le numérateur vaut $1$ : $\mathrm{th}'x = \dfrac{1}{\mathrm{ch}^2x}$ ;
- en séparant la fraction : $\mathrm{th}'x = 1-\dfrac{\mathrm{sh}^2x}{\mathrm{ch}^2x} = 1-\mathrm{th}^2x$.

$$\boxed{\mathrm{th}'x = 1-\mathrm{th}^2x = \frac{1}{\mathrm{ch}^2x}} \qquad\blacksquare$$

::

:::

:::exercice{titre="Exercice 9" theme="Dérivées des fonctions hyperboliques réciproques"}

Démontrer les formules de dérivation suivantes.

**Méthode du cours** (celle des démonstrations des Prop 3.4 et 4.3) : on part de l'égalité $f(f^{-1}(x)) = x$, on **dérive les deux membres** (le membre de gauche avec la formule de la composée), puis on isole $(f^{-1})'(x)$. Il reste à exprimer le résultat en fonction de $x$ grâce à $\mathrm{ch}^2-\mathrm{sh}^2 = 1$, **en justifiant le signe** au moment de prendre une racine carrée.

::question{label="1."}

Pour tout $x > 1$ : $\mathrm{argch}'x = \dfrac{1}{\sqrt{x^2-1}}$

#indice

Dérive l'identité $\mathrm{ch}(\mathrm{argch}\,x) = x$ et isole la dérivée cherchée. Tu obtiens alors un $\mathrm{sh}(\mathrm{argch}\,x)$ qu'il faut exprimer en fonction de $x$ : la Prop 4.1 donne son **carré**. Le point délicat est le choix du signe de la racine — appuie-toi sur le signe de $\mathrm{argch}\,x$ quand $x>1$.

Les trois temps de la méthode, sur une autre réciproque : :voir-exemple[dérivée d'une fonction réciproque]{id="fu-derivee-reciproque"}.

#solution

On dérive l'égalité $\mathrm{ch}(\mathrm{argch}\,x) = x$ :

$$\mathrm{argch}'x\times\mathrm{sh}(\mathrm{argch}\,x) = 1 \quad\Longrightarrow\quad \mathrm{argch}'x = \frac{1}{\mathrm{sh}(\mathrm{argch}\,x)}$$

Exprimons $\mathrm{sh}(\mathrm{argch}\,x)$ en fonction de $x$ : par la Prop 4.1,

$$\mathrm{sh}^2(\mathrm{argch}\,x) = \mathrm{ch}^2(\mathrm{argch}\,x)-1 = x^2-1$$

**Justification du signe** : pour $x > 1$, $\mathrm{argch}\,x > 0$ et $\mathrm{sh}\,t > 0$ quand $t > 0$, donc on prend la racine **positive** : $\mathrm{sh}(\mathrm{argch}\,x) = +\sqrt{x^2-1}$.

$$\boxed{\mathrm{argch}'x = \frac{1}{\sqrt{x^2-1}}} \qquad\blacksquare$$

::

::question{label="2."}

Pour tout réel $x$ : $\mathrm{argsh}'x = \dfrac{1}{\sqrt{x^2+1}}$

#indice

Même mécanique : dérive $\mathrm{sh}(\mathrm{argsh}\,x) = x$. Cette fois, la justification du signe est immédiate — il suffit de se rappeler l'encadrement vérifié par $\mathrm{ch}$ sur $\mathbb{R}$ tout entier.

Les trois temps de la méthode, sur une autre réciproque : :voir-exemple[dérivée d'une fonction réciproque]{id="fu-derivee-reciproque"}.

#solution

On dérive $\mathrm{sh}(\mathrm{argsh}\,x) = x$ :

$$\mathrm{argsh}'x\times\mathrm{ch}(\mathrm{argsh}\,x) = 1 \quad\Longrightarrow\quad \mathrm{argsh}'x = \frac{1}{\mathrm{ch}(\mathrm{argsh}\,x)}$$

Par la Prop 4.1 : $\mathrm{ch}^2(\mathrm{argsh}\,x) = 1+\mathrm{sh}^2(\mathrm{argsh}\,x) = 1+x^2$, et comme $\mathrm{ch} \geqslant 1 > 0$ **toujours**, $\mathrm{ch}(\mathrm{argsh}\,x) = +\sqrt{x^2+1}$.

$$\boxed{\mathrm{argsh}'x = \frac{1}{\sqrt{x^2+1}}} \qquad\blacksquare$$

::

::question{label="3."}

Pour tout $x$ tel que $\lvert x\rvert < 1$ : $\mathrm{argth}'x = \dfrac{1}{1-x^2}$

#indice

Dérive $\mathrm{th}(\mathrm{argth}\,x) = x$ en réutilisant la forme $\mathrm{th}' = 1-\mathrm{th}^2$ démontrée à l'exercice 8 : c'est elle qui fait apparaître directement $x$, sans racine carrée ni discussion de signe. Vérifie simplement que le facteur obtenu ne s'annule pas.

Les trois temps de la méthode, sur une autre réciproque : :voir-exemple[dérivée d'une fonction réciproque]{id="fu-derivee-reciproque"}.

#solution

On dérive $\mathrm{th}(\mathrm{argth}\,x) = x$, en utilisant $\mathrm{th}' = 1-\mathrm{th}^2$ (exercice 8) :

$$\mathrm{argth}'x\times\big(1-\mathrm{th}^2(\mathrm{argth}\,x)\big) = 1$$

Or $\mathrm{th}(\mathrm{argth}\,x) = x$, donc $1-\mathrm{th}^2(\mathrm{argth}\,x) = 1-x^2 \neq 0$ (car $\lvert x\rvert<1$) :

$$\boxed{\mathrm{argth}'x = \frac{1}{1-x^2}} \qquad\blacksquare$$

::

:::

:::exercice{titre="Exercice 10" theme="Expressions logarithmiques des fonctions hyperboliques inverses"}

Démontrer les expressions logarithmiques suivantes.

**Méthode du cours** (exactement la démonstration de la Prop 4.3, 3ᵉ point) : pour montrer que deux fonctions sont égales sur un intervalle, on montre qu'elles ont **la même dérivée** (elles diffèrent alors d'une constante) et qu'elles coïncident **en un point** (la constante est alors nulle). Les dérivées des fonctions $\mathrm{arg}$ sont connues par l'exercice 9.

::question{label="1."}

Pour tout $x \geqslant 1$ : $\mathrm{argch}\,x = \ln\left(x+\sqrt{x^2-1}\right)$

#indice

Pose $f$ égale au membre de droite, vérifie d'abord qu'elle est bien définie, puis dérive-la avec la Prop 1.20. Au moment de simplifier, mets le numérateur au même dénominateur : un facteur commun avec $u$ apparaît et disparaît. Il ne reste plus qu'à comparer les deux fonctions **en un point** bien choisi — la borne $x=1$ est la plus économique.

La méthode sur une autre égalité : :voir-exemple[démontrer que deux fonctions sont égales]{id="fu-egalite-fonctions"}.

#solution

Posons $f(x) = \ln\left(x+\sqrt{x^2-1}\right)$. *(Bien défini : pour $x\geqslant 1$, $x+\sqrt{x^2-1} \geqslant 1 > 0$.)*

Dérivons sur $]1,+\infty[$, forme $\ln u$ avec $u = x+\sqrt{x^2-1}$, $u' = 1+\dfrac{2x}{2\sqrt{x^2-1}} = 1+\dfrac{x}{\sqrt{x^2-1}}$ :

$$f'(x) = \frac{1+\dfrac{x}{\sqrt{x^2-1}}}{x+\sqrt{x^2-1}} = \frac{\dfrac{\sqrt{x^2-1}+x}{\sqrt{x^2-1}}}{x+\sqrt{x^2-1}} = \frac{1}{\sqrt{x^2-1}} = \mathrm{argch}'x$$

*(le facteur $x+\sqrt{x^2-1}$ se simplifie — c'est tout l'intérêt de cette forme)*

Donc $f$ et $\mathrm{argch}$ diffèrent d'une constante sur $[1,+\infty[$. En $x = 1$ : $f(1) = \ln(1+0) = 0$ et $\mathrm{argch}\,1 = 0$ (car $\mathrm{ch}\,0 = 1$). La constante est nulle :

$$\boxed{\forall x\geqslant 1,\quad \mathrm{argch}\,x = \ln\left(x+\sqrt{x^2-1}\right)} \qquad\blacksquare$$

::

::question{label="2."}

Pour tout $x$ réel : $\mathrm{argsh}\,x = \ln\left(x+\sqrt{x^2+1}\right)$

#indice

C'est la démonstration du cours, mot pour mot. Avant de dériver, justifie que l'argument du logarithme est strictement positif pour **tout** réel $x$, y compris négatif : compare $\sqrt{x^2+1}$ à $\lvert x\rvert$. Le calcul de la dérivée est ensuite le même qu'à la question précédente, et $x=0$ est le point de comparaison naturel.

La méthode sur une autre égalité : :voir-exemple[démontrer que deux fonctions sont égales]{id="fu-egalite-fonctions"}.

#solution

*(C'est mot pour mot la démonstration de la Prop 4.3 du cours.)* Posons $f(x) = \ln\left(x+\sqrt{x^2+1}\right)$. *(Bien défini sur $\mathbb{R}$ : $\sqrt{x^2+1} > \sqrt{x^2} = \lvert x\rvert \geqslant -x$, donc $x+\sqrt{x^2+1} > 0$.)*

$$f'(x) = \frac{1+\dfrac{x}{\sqrt{x^2+1}}}{x+\sqrt{x^2+1}} = \frac{\dfrac{\sqrt{x^2+1}+x}{\sqrt{x^2+1}}}{x+\sqrt{x^2+1}} = \frac{1}{\sqrt{x^2+1}} = \mathrm{argsh}'x$$

Et $f(0) = \ln(0+1) = 0 = \mathrm{argsh}\,0$ (car $\mathrm{sh}\,0 = 0$). Donc :

$$\boxed{\forall x\in\mathbb{R},\quad \mathrm{argsh}\,x = \ln\left(x+\sqrt{x^2+1}\right)} \qquad\blacksquare$$

::

::question{label="3."}

Pour tout $x$ tel que $-1 < x < 1$ : $\mathrm{argth}\,x = \dfrac{1}{2}\ln\left(\dfrac{1+x}{1-x}\right)$

#indice

Avant de dériver, casse le logarithme du quotient en différence de deux logarithmes (Prop 1.12) : c'est licite car les deux facteurs sont strictement positifs sur $]-1,1[$, et cela rend la dérivation immédiate. Attention au signe apporté par la dérivée de $1-x$. Compare ensuite en $x=0$.

La méthode sur une autre égalité : :voir-exemple[démontrer que deux fonctions sont égales]{id="fu-egalite-fonctions"}.

#solution

Posons $f(x) = \dfrac{1}{2}\ln\left(\dfrac{1+x}{1-x}\right) = \dfrac{1}{2}\big[\ln(1+x)-\ln(1-x)\big]$ (Prop 1.12, licite car $1+x>0$ et $1-x>0$ sur $]-1,1[$).

$$f'(x) = \frac{1}{2}\left[\frac{1}{1+x}-\frac{-1}{1-x}\right] = \frac{1}{2}\times\frac{(1-x)+(1+x)}{(1+x)(1-x)} = \frac{1}{2}\times\frac{2}{1-x^2} = \frac{1}{1-x^2} = \mathrm{argth}'x$$

Et $f(0) = \dfrac{1}{2}\ln 1 = 0 = \mathrm{argth}\,0$ (car $\mathrm{th}\,0 = 0$). Donc :

$$\boxed{\forall x\in\left]-1,1\right[,\quad \mathrm{argth}\,x = \frac{1}{2}\ln\left(\frac{1+x}{1-x}\right)} \qquad\blacksquare$$

::

:::
