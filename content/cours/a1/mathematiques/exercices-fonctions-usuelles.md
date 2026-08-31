---
title: Fonctions usuelles — fiche d'entraînement
description: Quinze questions en cinq paliers, des règles de calcul sur exp et ln jusqu'aux réciproques hyperboliques. Chaque question donne un indice avec un exemple similaire traité, une solution détaillée et le rappel de cours correspondant.
annee: A1
matiere: Mathématiques
ordre: 5
icone: i-lucide-list-checks
---

::rappel{titre="Comment se servir de cette fiche" icone="i-lucide-compass"}
Cinq paliers qui reprennent le chapitre dans l'ordre : les règles de calcul, puis les équations, puis la dérivation et les limites, puis la trigonométrie et ses réciproques, et enfin les fonctions hyperboliques. Chaque palier réutilise les précédents.

Sous chaque question, trois boutons :

- **Indice** — la piste à suivre, sans le résultat. La fenêtre contient aussi un **exemple similaire entièrement traité**, sur d'autres expressions : à déplier seulement si la piste n'a pas suffi.
- **Voir la solution** — la correction rédigée, étape par étape.
- **Cours** — un tiroir avec le rappel de cours utile à cette question précise, et le lien vers la section complète du chapitre.
::

::carte-lien{to="/cours/a1/mathematiques/fonctions-usuelles" titre="Le chapitre : cours et exercices du TD" description="La fiche de révision complète et les dix exercices corrigés du programme" icone="i-lucide-function-square" meta="Cours + 10 exercices"}
::

:::exercice{titre="Palier 1 — Domaines et règles de calcul" theme="Où une expression a un sens, et comment la simplifier" badge="★☆☆☆☆" icone="i-lucide-sprout"}
Avant de dériver ou de résoudre quoi que ce soit, deux automatismes : savoir **où** une expression existe, et savoir la **réduire**. Tout le reste du chapitre s'appuie dessus.

::exo-question{label="1." cours="xfu-domaines"}
Déterminer l'ensemble de définition de chacune des fonctions suivantes.

$$
f(x) = \ln\left(x^2-4\right) \qquad g(x) = \ln(3-x)+\ln(x+1) \qquad h(x) = \frac{1}{e^x-1}
$$

#indice
Trois contraintes seulement, et elles se repèrent à l'œil : ce qui est **sous un logarithme** doit être **strictement positif**, ce qui est **au dénominateur** doit être **non nul**, et l'exponentielle, elle, n'impose jamais rien — elle est définie sur $\mathbb{R}$ tout entier.

Quand il y a **deux** logarithmes, les deux conditions doivent être vraies **en même temps** : on intersecte les deux ensembles, on ne les réunit pas.

Pour $x^2-4$, un tableau de signes ou la factorisation $(x-2)(x+2)$ donne la réponse.

#exemple
Même travail sur $u(x) = \ln\left(9-x^2\right)$, $v(x) = \ln(x-2)+\ln(5-x)$ et $w(x) = \dfrac{1}{e^x-e}$.

**Pour $u$**, on impose $9-x^2 > 0$, c'est-à-dire $(3-x)(3+x) > 0$. Ce trinôme, de coefficient dominant négatif, est positif **entre** ses racines :

$$
\mathcal{D}_u = \left]-3\,;\,3\right[
$$

**Pour $v$**, les deux conditions doivent tenir simultanément :

$$
x-2 > 0 \quad\text{et}\quad 5-x > 0 \qquad\Longleftrightarrow\qquad x > 2 \quad\text{et}\quad x < 5
$$

L'intersection des deux donne $\mathcal{D}_v = \left]2\,;\,5\right[$. Prendre la réunion serait l'erreur classique.

**Pour $w$**, le dénominateur doit être non nul :

$$
e^x-e \neq 0 \iff e^x \neq e^1 \iff x \neq 1
$$

car l'exponentielle est strictement croissante, donc injective. D'où $\mathcal{D}_w = \left]-\infty\,;\,1\right[\,\cup\,\left]1\,;\,+\infty\right[$.

#solution
**Pour $f$**, on impose $x^2-4 > 0$, soit $(x-2)(x+2) > 0$. Ce trinôme de coefficient dominant positif est positif **à l'extérieur** de ses racines $-2$ et $2$ :

$$
\boxed{\mathcal{D}_f = \left]-\infty\,;\,-2\right[\,\cup\,\left]2\,;\,+\infty\right[}
$$

**Pour $g$**, les deux logarithmes imposent chacun leur condition, et il faut les deux à la fois :

$$
3-x > 0 \quad\text{et}\quad x+1 > 0 \qquad\Longleftrightarrow\qquad x < 3 \quad\text{et}\quad x > -1
$$

$$
\boxed{\mathcal{D}_g = \left]-1\,;\,3\right[}
$$

**Pour $h$**, seule compte l'annulation du dénominateur :

$$
e^x-1 \neq 0 \iff e^x \neq e^0 \iff x \neq 0
$$

$$
\boxed{\mathcal{D}_h = \mathbb{R}^* = \left]-\infty\,;\,0\right[\,\cup\,\left]0\,;\,+\infty\right[}
$$

À noter : l'exponentielle n'a apporté aucune contrainte de définition — elle n'en apporte jamais.
::

::exo-question{label="2." cours="xfu-regles"}
Simplifier les expressions suivantes, en supposant $x > 0$ là où c'est nécessaire.

$$
A = e^{2\ln 5} \qquad B = \ln 8-3\ln 2 \qquad C = e^{\ln x+1} \qquad D = \ln\left(e^{-3}\right)
$$

#indice
Deux fonctions réciproques l'une de l'autre : $e^{\ln t} = t$ pour $t>0$, et $\ln\left(e^t\right) = t$ pour tout réel $t$. Tout l'exercice consiste à **fabriquer** ces motifs.

Pour $A$, fais entrer le facteur $2$ dans le logarithme grâce à $n\ln t = \ln\left(t^n\right)$ — ou, ce qui revient au même, lis $e^{2\ln 5}$ comme $\left(e^{\ln 5}\right)^2$.

Pour $B$, transforme $8$ en puissance de $2$. Pour $C$, sépare l'exponentielle d'une somme en produit d'exponentielles.

#exemple
Simplification de $A' = e^{3\ln 2}$, $B' = \ln 27-2\ln 3$, $C' = e^{\ln x-2}$ et $D' = \ln\left(e^{5}\right)$.

**Pour $A'$**, on fait entrer le $3$ dans le logarithme :

$$
A' = e^{3\ln 2} = e^{\ln\left(2^3\right)} = e^{\ln 8} = 8
$$

On aurait aussi pu écrire $A' = \left(e^{\ln 2}\right)^3 = 2^3 = 8$ : les deux lectures sont équivalentes.

**Pour $B'$**, on ramène tout à $\ln 3$ en écrivant $27 = 3^3$ :

$$
B' = \ln\left(3^3\right)-2\ln 3 = 3\ln 3-2\ln 3 = \ln 3
$$

**Pour $C'$**, on sépare l'exponentielle de la somme en produit :

$$
C' = e^{\ln x}\times e^{-2} = \frac{x}{e^2}
$$

**Pour $D'$**, c'est l'identité directe : $D' = 5$, sans condition, puisque $e^5>0$ toujours.

#solution
**$A = e^{2\ln 5}$.** On fait entrer le facteur dans le logarithme :

$$
A = e^{\ln\left(5^2\right)} = e^{\ln 25} = \boxed{25}
$$

**$B = \ln 8-3\ln 2$.** On écrit $8 = 2^3$ :

$$
B = \ln\left(2^3\right)-3\ln 2 = 3\ln 2-3\ln 2 = \boxed{0}
$$

**$C = e^{\ln x+1}$.** L'exponentielle d'une somme est le produit des exponentielles :

$$
C = e^{\ln x}\times e^{1} = \boxed{ex} \qquad (x>0)
$$

**$D = \ln\left(e^{-3}\right)$.** Identité directe, valable pour tout réel :

$$
D = \boxed{-3}
$$
::

::exo-question{label="3." cours="xfu-regles"}
Écrire le plus simplement possible :

$$
E = \ln\left(\sqrt{e}\right) \qquad F = e^{-\ln 3} \qquad G = \ln\left(\frac{e^5}{e^2}\right) \qquad H = \ln 2+\ln 50-\ln 4
$$

#indice
Une racine carrée est une puissance $\tfrac12$, et un exposant négatif est l'inverse : $e^{-t} = \dfrac{1}{e^t}$. Ces deux réécritures suffisent pour $E$ et $F$.

Pour $G$, deux routes : simplifier la fraction d'exponentielles **avant** d'appliquer le logarithme, ou utiliser $\ln\dfrac{a}{b} = \ln a-\ln b$. La première est plus courte.

Pour $H$, regroupe **tout** en un seul logarithme avant de conclure.

#exemple
Simplification de $E' = \ln\left(\sqrt[3]{e}\right)$, $F' = e^{-2\ln 5}$ et $H' = \ln 3+\ln 12-\ln 4$.

**Pour $E'$**, la racine cubique est une puissance $\tfrac13$ :

$$
E' = \ln\left(e^{\frac13}\right) = \frac13
$$

**Pour $F'$**, on passe par l'inverse :

$$
F' = e^{-\ln\left(5^2\right)} = e^{\ln\left(\frac{1}{25}\right)} = \frac{1}{25}
$$

On peut aussi écrire $F' = \dfrac{1}{e^{2\ln 5}} = \dfrac{1}{25}$, ce qui revient au même.

**Pour $H'$**, on regroupe tout sous un seul logarithme :

$$
H' = \ln\left(\frac{3\times 12}{4}\right) = \ln 9 = 2\ln 3
$$

La dernière écriture n'est pas obligatoire, mais c'est celle qu'on attend quand la consigne dit « le plus simplement possible ».

#solution
**$E = \ln\left(\sqrt e\right)$.** La racine est une puissance $\tfrac12$ :

$$
E = \ln\left(e^{\frac12}\right) = \boxed{\frac12}
$$

**$F = e^{-\ln 3}$.** L'exposant négatif donne l'inverse :

$$
F = \frac{1}{e^{\ln 3}} = \boxed{\frac13}
$$

**$G = \ln\left(\dfrac{e^5}{e^2}\right)$.** On simplifie la fraction avant tout :

$$
G = \ln\left(e^{5-2}\right) = \ln\left(e^3\right) = \boxed{3}
$$

**$H = \ln 2+\ln 50-\ln 4$.** On regroupe sous un seul logarithme :

$$
H = \ln\left(\frac{2\times 50}{4}\right) = \ln 25 = \boxed{2\ln 5}
$$
::
:::

:::exercice{titre="Palier 2 — Équations et inéquations" theme="Changement de variable, conditions d'existence, sens de variation" badge="★★☆☆☆" icone="i-lucide-equal"}
Trois réflexes à installer : poser $X = e^x$ quand l'exponentielle apparaît à deux puissances, **écrire les conditions d'existence avant de résoudre**, et se rappeler que $\ln$ comme $\exp$ sont strictement croissantes — donc qu'elles conservent le sens d'une inégalité.

::exo-question{label="1." cours="xfu-equations"}
Résoudre dans $\mathbb{R}$ l'équation

$$
e^{2x}-5e^x+6 = 0
$$

#indice
L'équation ne contient que des puissances de $e^x$ : en effet $e^{2x} = \left(e^x\right)^2$. En posant $X = e^x$, elle devient un simple trinôme du second degré en $X$.

Un point à ne surtout pas oublier au retour : $X = e^x$ est **strictement positif**. Une racine négative ou nulle du trinôme devrait donc être écartée — ici il faudra vérifier que ce n'est pas le cas.

#exemple
Résolution de $e^{2x}-e^x-6 = 0$.

On remarque $e^{2x} = \left(e^x\right)^2$ et on pose $X = e^x$, avec la contrainte $X>0$ :

$$
X^2-X-6 = 0
$$

Discriminant : $\Delta = 1+24 = 25$, donc $\sqrt\Delta = 5$ et

$$
X = \frac{1-5}{2} = -2 \qquad\text{ou}\qquad X = \frac{1+5}{2} = 3
$$

**Retour à $x$.** La valeur $X = -2$ est à rejeter : une exponentielle n'est jamais négative. Il reste $e^x = 3$, donc

$$
x = \ln 3
$$

**Vérification** : $e^{2\ln 3}-e^{\ln 3}-6 = 9-3-6 = 0$. ✓

#solution
On remarque que $e^{2x} = \left(e^x\right)^2$ et on pose $X = e^x$, avec $X>0$. L'équation devient

$$
X^2-5X+6 = 0
$$

Discriminant : $\Delta = 25-24 = 1$, donc $\sqrt\Delta = 1$ et

$$
X = \frac{5-1}{2} = 2 \qquad\text{ou}\qquad X = \frac{5+1}{2} = 3
$$

**Retour à $x$.** Les deux racines sont strictement positives, donc **aucune n'est à rejeter** :

$$
e^x = 2 \iff x = \ln 2 \qquad\text{et}\qquad e^x = 3 \iff x = \ln 3
$$

$$
\boxed{\mathcal{S} = \lbrace \ln 2\ ;\ \ln 3 \rbrace}
$$

**Vérification** pour $x = \ln 2$ : $e^{2\ln 2}-5e^{\ln 2}+6 = 4-10+6 = 0$. ✓
::

::exo-question{label="2." cours="xfu-equations"}
Résoudre dans $\mathbb{R}$ l'équation

$$
\ln(x+3)+\ln(x-1) = \ln 5
$$

#indice
La toute première chose à écrire — avant le moindre calcul — ce sont les **conditions d'existence** : les deux quantités sous logarithme doivent être strictement positives, simultanément. Elles se résument à une seule inégalité.

Ensuite, on regroupe le membre de gauche en un seul logarithme grâce à $\ln a+\ln b = \ln(ab)$, et on utilise l'injectivité : $\ln A = \ln B \iff A = B$ (sur le domaine).

Le trinôme obtenu a deux racines. C'est la condition d'existence, posée au départ, qui décide laquelle garder.

#exemple
Résolution de $\ln(x+1)+\ln(x+4) = \ln 4$.

**Conditions d'existence.** Il faut $x+1>0$ et $x+4>0$, soit $x>-1$ et $x>-4$ : la plus contraignante l'emporte, donc $x>-1$.

**Résolution.** On regroupe puis on identifie :

$$
\ln\bigl((x+1)(x+4)\bigr) = \ln 4 \iff (x+1)(x+4) = 4
$$

$$
x^2+5x+4 = 4 \iff x^2+5x = 0 \iff x(x+5) = 0
$$

Les racines sont $0$ et $-5$.

**Tri par la condition d'existence.** On avait $x>-1$ : la racine $-5$ est **à rejeter**, elle rendrait les logarithmes de départ indéfinis. Reste $x = 0$.

$$
\mathcal{S} = \lbrace 0 \rbrace
$$

**Vérification** : $\ln 1+\ln 4 = 0+\ln 4 = \ln 4$. ✓

#solution
**Conditions d'existence.** Il faut

$$
x+3>0 \quad\text{et}\quad x-1>0 \qquad\Longleftrightarrow\qquad x>-3 \quad\text{et}\quad x>1
$$

La seconde est la plus contraignante : on travaille donc sur $\left]1\,;\,+\infty\right[$.

**Résolution.** On regroupe le membre de gauche, puis on utilise l'injectivité du logarithme :

$$
\ln\bigl((x+3)(x-1)\bigr) = \ln 5 \iff (x+3)(x-1) = 5
$$

$$
x^2+2x-3 = 5 \iff x^2+2x-8 = 0
$$

Discriminant : $\Delta = 4+32 = 36$, donc $\sqrt\Delta = 6$ et

$$
x = \frac{-2-6}{2} = -4 \qquad\text{ou}\qquad x = \frac{-2+6}{2} = 2
$$

**Tri par la condition d'existence.** Seule $x = 2$ appartient à $\left]1\,;\,+\infty\right[$ ; $x = -4$ est à rejeter.

$$
\boxed{\mathcal{S} = \lbrace 2 \rbrace}
$$

**Vérification** : $\ln 5+\ln 1 = \ln 5+0 = \ln 5$. ✓
::

::exo-question{label="3." cours="xfu-inequations"}
Résoudre dans $\mathbb{R}$ les inéquations suivantes.

a) $\ln(2x-1) \leqslant 1$

b) $e^{-x} > 3$

#indice
Pour a), commence encore par la condition d'existence. Puis écris le membre de droite **comme un logarithme** : $1 = \ln e$. Comme $\ln$ est strictement croissante, l'inégalité entre les logarithmes équivaut à la même inégalité entre les arguments — **le sens est conservé**.

Pour b), la même idée avec l'autre fonction : on compose par $\ln$, strictement croissante elle aussi, donc le sens ne change pas non plus. Attention en revanche à la dernière étape : diviser par $-1$, ou multiplier par $-1$, **inverse** le sens de l'inégalité.

N'oublie pas d'intersecter la solution obtenue en a) avec la condition d'existence.

#exemple
Résolution de $\ln(3x+2) < 2$, puis de $e^{2x} \leqslant 5$.

**Première inéquation.** Condition d'existence : $3x+2>0$, soit $x>-\dfrac23$.

On écrit le membre de droite comme un logarithme : $2 = \ln\left(e^2\right)$. La fonction $\ln$ étant strictement croissante :

$$
\ln(3x+2) < \ln\left(e^2\right) \iff 3x+2 < e^2 \iff x < \frac{e^2-2}{3}
$$

On intersecte avec la condition d'existence :

$$
\mathcal{S} = \left]-\frac23\,;\,\frac{e^2-2}{3}\right[
$$

**Seconde inéquation.** Pas de condition d'existence : l'exponentielle est définie partout, et strictement positive, donc on peut composer par $\ln$, croissante :

$$
e^{2x} \leqslant 5 \iff 2x \leqslant \ln 5 \iff x \leqslant \frac{\ln 5}{2}
$$

$$
\mathcal{S} = \left]-\infty\,;\,\frac{\ln 5}{2}\right]
$$

#solution
**a) $\ln(2x-1) \leqslant 1$.**

Condition d'existence : $2x-1>0$, soit $x>\dfrac12$.

On écrit $1 = \ln e$, puis on utilise la stricte croissance de $\ln$ :

$$
\ln(2x-1) \leqslant \ln e \iff 2x-1 \leqslant e \iff x \leqslant \frac{e+1}{2}
$$

En intersectant avec la condition d'existence :

$$
\boxed{\mathcal{S} = \left]\frac12\,;\,\frac{e+1}{2}\right]}
$$

Numériquement, $\dfrac{e+1}{2}\approx 1{,}859$ : l'ensemble n'est pas vide, ce qui est rassurant.

**b) $e^{-x} > 3$.**

L'exponentielle est définie sur $\mathbb{R}$ : aucune condition. Les deux membres sont strictement positifs, on compose par $\ln$, strictement croissante — le sens est conservé :

$$
e^{-x} > 3 \iff -x > \ln 3
$$

On multiplie par $-1$, ce qui **inverse** l'inégalité :

$$
\boxed{\mathcal{S} = \left]-\infty\,;\,-\ln 3\right[}
$$

**Contrôle** : pour $x = -2 < -\ln 3 \approx -1{,}10$, on a $e^{2}\approx 7{,}39 > 3$. ✓
::
:::

:::exercice{titre="Palier 3 — Dériver, puis passer à la limite" theme="Formules de dérivation composée, croissances comparées, étude complète" badge="★★★☆☆" icone="i-lucide-trending-up"}
On passe à l'analyse. Les deux formules qui portent tout le palier : $\left(e^u\right)' = u'e^u$ et $\bigl(\ln u\bigr)' = \dfrac{u'}{u}$.

::exo-question{label="1." cours="xfu-derivees"}
Calculer la dérivée de chacune des fonctions suivantes, sur l'intervalle indiqué.

$$
f(x) = x^2e^{-x} \ \text{ sur } \mathbb{R} \qquad
g(x) = \frac{\ln x}{x} \ \text{ sur } \left]0;+\infty\right[ \qquad
h(x) = \ln\left(1+e^x\right) \ \text{ sur } \mathbb{R}
$$

#indice
Trois formes différentes, donc trois formules différentes : commence par **identifier la structure** avant de dériver.

$f$ est un **produit** : $(uv)' = u'v+uv'$, avec $v = e^{-x}$ dont la dérivée est $-e^{-x}$ — le signe moins vient du $u' = -1$ dans $\left(e^u\right)' = u'e^u$.

$g$ est un **quotient** : $\left(\dfrac{u}{v}\right)' = \dfrac{u'v-uv'}{v^2}$.

$h$ est une **composée** $\ln u$ : sa dérivée est $\dfrac{u'}{u}$. Ici $u = 1+e^x$ ne s'annule jamais, ce qui justifie la dérivabilité sur $\mathbb{R}$.

Pense à factoriser le résultat : c'est sous forme factorisée qu'on lira son signe au moment de l'étude.

#exemple
Dérivées de $u(x) = xe^{2x}$, $v(x) = \dfrac{e^x}{x}$ et $w(x) = \ln\left(x^2+1\right)$.

**Un produit.** Avec $a(x) = x$ et $b(x) = e^{2x}$, on a $a'=1$ et $b' = 2e^{2x}$ :

$$
u'(x) = 1\times e^{2x}+x\times 2e^{2x} = (1+2x)e^{2x}
$$

On factorise par $e^{2x}$ : comme cette exponentielle est toujours strictement positive, le signe de $u'$ est celui de $1+2x$, et c'est immédiat à lire.

**Un quotient.** Avec $a(x) = e^x$ et $b(x) = x$ :

$$
v'(x) = \frac{e^x\times x-e^x\times 1}{x^2} = \frac{e^x(x-1)}{x^2}
$$

Là encore, la factorisation isole le seul facteur qui change de signe, $x-1$.

**Une composée.** Avec $c(x) = x^2+1$, qui ne s'annule jamais :

$$
w'(x) = \frac{c'(x)}{c(x)} = \frac{2x}{x^2+1}
$$

#solution
**$f(x) = x^2e^{-x}$** est un produit. Avec $u = x^2$ et $v = e^{-x}$, donc $u' = 2x$ et $v' = -e^{-x}$ :

$$
f'(x) = 2x\,e^{-x}+x^2\times\left(-e^{-x}\right) = \left(2x-x^2\right)e^{-x}
$$

$$
\boxed{f'(x) = x(2-x)\,e^{-x}}
$$

L'exponentielle étant strictement positive, le signe de $f'$ est celui de $x(2-x)$.

**$g(x) = \dfrac{\ln x}{x}$** est un quotient. Avec $u = \ln x$ et $v = x$, donc $u' = \dfrac1x$ et $v' = 1$ :

$$
g'(x) = \frac{\dfrac1x\times x-\ln x\times 1}{x^2}
$$

$$
\boxed{g'(x) = \frac{1-\ln x}{x^2}}
$$

Le dénominateur est strictement positif : le signe de $g'$ est celui de $1-\ln x$, donc $g$ croît jusqu'à $x = e$ puis décroît.

**$h(x) = \ln\left(1+e^x\right)$** est une composée $\ln u$, avec $u = 1+e^x > 0$ sur $\mathbb{R}$ — ce qui justifie au passage que $h$ soit définie et dérivable partout :

$$
\boxed{h'(x) = \frac{e^x}{1+e^x}}
$$

Cette dérivée est strictement positive : $h$ est strictement croissante sur $\mathbb{R}$.
::

::exo-question{label="2." cours="xfu-limites"}
Déterminer les limites suivantes.

$$
\lim_{x\to+\infty}\frac{e^x}{x^3} \qquad \lim_{x\to 0^+}x\ln x \qquad \lim_{x\to+\infty}\left(x-\ln x\right)
$$

#indice
Les deux premières sont des **formes indéterminées** que le cours tranche directement, à condition de reconnaître laquelle : « $\dfrac{\infty}{\infty}$ » pour la première, « $0\times\infty$ » pour la deuxième. La phrase à retenir : **l'exponentielle l'emporte sur toute puissance, et toute puissance l'emporte sur le logarithme**.

La troisième est de la forme « $\infty-\infty$ » : aucune croissance comparée ne s'applique telle quelle. Le geste standard consiste à **factoriser par le terme dominant**, ici $x$, pour faire apparaître un quotient dont on connaît la limite.

#exemple
Calcul de $\displaystyle\lim_{x\to+\infty}\frac{e^x}{x^2}$, $\displaystyle\lim_{x\to 0^+}\sqrt x\,\ln x$ et $\displaystyle\lim_{x\to+\infty}\left(2x-3\ln x\right)$.

**Première limite.** Forme « $\dfrac{\infty}{\infty}$ ». C'est exactement la croissance comparée $\dfrac{e^x}{x^n}\to+\infty$ :

$$
\lim_{x\to+\infty}\frac{e^x}{x^2} = +\infty
$$

**Deuxième limite.** Forme « $0\times(-\infty)$ ». On se ramène à la croissance comparée connue en écrivant $\sqrt x\,\ln x = \sqrt x\ln x$, et l'on sait que $x^{\alpha}\ln x\to 0$ en $0^+$ pour tout $\alpha>0$ :

$$
\lim_{x\to 0^+}\sqrt x\,\ln x = 0
$$

**Troisième limite.** Forme « $\infty-\infty$ ». On factorise par le terme dominant :

$$
2x-3\ln x = x\left(2-\frac{3\ln x}{x}\right)
$$

Or $\dfrac{\ln x}{x}\to 0$ en $+\infty$, donc la parenthèse tend vers $2$, et le produit vers $+\infty$ :

$$
\lim_{x\to+\infty}\left(2x-3\ln x\right) = +\infty
$$

#solution
**Première limite.** Forme indéterminée « $\dfrac{\infty}{\infty}$ ». La croissance comparée dit que l'exponentielle l'emporte sur toute puissance de $x$ :

$$
\boxed{\lim_{x\to+\infty}\frac{e^x}{x^3} = +\infty}
$$

**Deuxième limite.** Forme indéterminée « $0\times(-\infty)$ », puisque $\ln x\to-\infty$ en $0^+$. C'est la seconde croissance comparée du cours :

$$
\boxed{\lim_{x\to 0^+}x\ln x = 0}
$$

**Troisième limite.** Forme indéterminée « $\infty-\infty$ ». On factorise par $x$, le terme dominant :

$$
x-\ln x = x\left(1-\frac{\ln x}{x}\right)
$$

Or $\dfrac{\ln x}{x}\to 0$ quand $x\to+\infty$ : la parenthèse tend vers $1$, tandis que $x\to+\infty$. Le produit tend donc vers $+\infty$ :

$$
\boxed{\lim_{x\to+\infty}\left(x-\ln x\right) = +\infty}
$$
::

::exo-question{label="3." cours="xfu-etude"}
On considère $f(x) = x-\ln x$, définie sur $\left]0\,;\,+\infty\right[$.

a) Déterminer les limites de $f$ en $0^+$ et en $+\infty$.

b) Étudier les variations de $f$ et dresser son tableau de variations.

c) Démontrer que l'équation $f(x) = 2$ admet exactement **deux** solutions sur $\left]0\,;\,+\infty\right[$, et donner une valeur approchée de chacune au centième.

#indice
Pour a), la limite en $+\infty$ a été calculée à la question précédente. En $0^+$, il n'y a **pas** d'indétermination : $x\to 0$ et $-\ln x\to+\infty$, les deux termes vont dans le même sens.

Pour b), dérive puis **mets $f'$ au même dénominateur** : sous la forme $\dfrac{x-1}{x}$, le signe se lit d'un coup, car $x>0$ sur tout l'intervalle.

Pour c), c'est le théorème des valeurs intermédiaires, appliqué **séparément sur chaque intervalle de monotonie** — c'est là qu'il faut être rigoureux : une seule application donnerait une seule solution, alors qu'il y en a deux. Sur chaque branche, il faut citer la continuité, la stricte monotonie, et vérifier que $2$ est bien encadré par les valeurs aux extrémités. Les valeurs approchées se cherchent ensuite par balayage à la calculatrice.

#exemple
Même démarche, en plus court, sur $g(x) = x-2\ln x$ sur $\left]0\,;\,+\infty\right[$.

**Limites.** En $0^+$ : $x\to 0$ et $-2\ln x\to+\infty$, donc $g(x)\to+\infty$. En $+\infty$ : on factorise, $g(x) = x\left(1-\dfrac{2\ln x}{x}\right)\to+\infty$.

**Variations.** On dérive puis on réduit au même dénominateur :

$$
g'(x) = 1-\frac{2}{x} = \frac{x-2}{x}
$$

Comme $x>0$, le signe de $g'$ est celui de $x-2$ : négatif sur $\left]0;2\right[$, nul en $2$, positif ensuite. La fonction décroît puis croît, avec un minimum

$$
g(2) = 2-2\ln 2 \approx 0{,}61
$$

**Nombre de solutions de $g(x) = 3$.** Le minimum vaut environ $0{,}61 < 3$, et $g$ tend vers $+\infty$ des deux côtés : on applique le théorème des valeurs intermédiaires **sur chaque branche**.

Sur $\left]0\,;\,2\right]$, $g$ est continue et strictement décroissante, avec $\lim_{0^+}g = +\infty$ et $g(2)\approx 0{,}61$. Comme $3$ appartient à $\left[g(2)\,;\,+\infty\right[$, il existe une unique solution dans cet intervalle. Le balayage donne $\alpha \approx 0{,}25$, car $g(0{,}25)\approx 3{,}02$ et $g(0{,}26)\approx 2{,}95$.

Sur $\left[2\,;\,+\infty\right[$, $g$ est continue et strictement croissante, de $g(2)\approx 0{,}61$ vers $+\infty$ : là encore une unique solution, $\beta \approx 6{,}85$, car $g(6{,}84)\approx 2{,}99$ et $g(6{,}85)\approx 3{,}00$.

Au total, exactement deux solutions.

#solution
**a) Les limites.**

En $0^+$ : $x\to 0$ tandis que $\ln x\to-\infty$, donc $-\ln x\to+\infty$. Les deux termes vont dans le même sens, il n'y a pas d'indétermination :

$$
\boxed{\lim_{x\to 0^+}f(x) = +\infty}
$$

En $+\infty$ : c'est la limite de la question 2, obtenue en factorisant par $x$ :

$$
\boxed{\lim_{x\to+\infty}f(x) = +\infty}
$$

**b) Les variations.** $f$ est dérivable sur $\left]0;+\infty\right[$ et

$$
f'(x) = 1-\frac1x = \frac{x-1}{x}
$$

Comme $x>0$, le signe de $f'(x)$ est celui de $x-1$ : négatif sur $\left]0;1\right[$, nul en $1$, positif sur $\left]1;+\infty\right[$. La fonction admet donc un **minimum** en $1$, de valeur

$$
f(1) = 1-\ln 1 = 1
$$

::tableau-variations
---
titre: Variations de f sur ]0 ; +∞[
variable: x
bornes: ['0', '1', '+∞']
barres: [0]
lignes:
  - nom: f′(x)
    type: signe
    entre: ['−', '+']
    aux: ['', '0', '']
  - nom: f
    type: variation
    aux: ['+∞', '1', '+∞']
---
::

Au passage, ce tableau démontre l'inégalité classique $\ln x \leqslant x-1$ pour tout $x>0$, puisque $f$ ne descend jamais en dessous de $1$… soit $x-\ln x \geqslant 1$.

**c) L'équation $f(x) = 2$.** Le minimum de $f$ vaut $1$, et $2>1$ : la valeur $2$ est atteinte de part et d'autre du minimum. On applique le théorème des valeurs intermédiaires **sur chacun des deux intervalles de monotonie**.

*Sur $\left]0\,;\,1\right]$* : $f$ est continue et **strictement décroissante**, avec $\lim_{x\to 0^+}f(x) = +\infty$ et $f(1) = 1$. Comme $2\in\left[1\,;\,+\infty\right[$, l'équation admet **une unique solution** $\alpha$ dans cet intervalle.

*Sur $\left[1\,;\,+\infty\right[$* : $f$ est continue et **strictement croissante**, avec $f(1) = 1$ et $\lim_{x\to+\infty}f(x) = +\infty$. Comme $2\in\left[1\,;\,+\infty\right[$, l'équation admet **une unique solution** $\beta$ dans cet intervalle.

Ces deux intervalles recouvrent tout le domaine, donc

$$
\boxed{f(x) = 2 \text{ admet exactement deux solutions}}
$$

**Valeurs approchées**, par balayage :

$$
f(0{,}15)\approx 2{,}047 \quad\text{et}\quad f(0{,}16)\approx 1{,}993 \qquad\Longrightarrow\qquad \boxed{\alpha \approx 0{,}16}
$$

$$
f(3{,}14)\approx 1{,}996 \quad\text{et}\quad f(3{,}15)\approx 2{,}003 \qquad\Longrightarrow\qquad \boxed{\beta \approx 3{,}15}
$$

(plus précisément $\alpha\approx 0{,}1586$ et $\beta\approx 3{,}1462$).
::
:::

:::exercice{titre="Palier 4 — Trigonométrie et réciproques" theme="Équations trigonométriques, arccos, arcsin, arctan et leurs dérivées" badge="★★★★☆" icone="i-lucide-compass"}
Deux difficultés distinctes ici. D'abord, une équation trigonométrique a **deux familles** de solutions par équation — jamais une seule. Ensuite, les fonctions réciproques ne rendent la valeur de départ **que si l'on est dans leur intervalle d'arrivée**.

::cercle-trigo{titre="D’où viennent les deux familles de solutions" resume="La droite coupe le cercle en deux points : d’où deux solutions par tour, et deux familles à écrire." mode="equations" modes="equations"}
::

::exo-question{label="1." cours="xfu-equations-trigo"}
Résoudre sur l'intervalle $\left[0\,;\,2\pi\right[$ les équations suivantes.

a) $2\cos x-\sqrt3 = 0$

b) $\sin(2x) = \sin\left(x+\dfrac{\pi}{3}\right)$

#indice
Pour a), isole d'abord $\cos x$, puis reconnais une valeur remarquable. L'équation $\cos x = \cos a$ a **deux** familles de solutions : $x = a+2k\pi$ et $x = -a+2k\pi$. Il reste à ne garder que celles qui tombent dans $\left[0;2\pi\right[$ — attention, $-\dfrac{\pi}{6}$ n'y est pas, mais son représentant $\dfrac{11\pi}{6}$ y est.

Pour b), la règle sœur : $\sin A = \sin B$ équivaut à $A = B+2k\pi$ **ou** $A = \pi-B+2k\pi$. Traite les deux cas séparément, résous chacun en $x$, puis fais varier $k$ pour balayer $\left[0;2\pi\right[$. La seconde famille en donne plusieurs : dans un cas comme celui-ci, le coefficient devant $x$ est $3$, donc les solutions se répètent tous les $\dfrac{2\pi}{3}$.

#exemple
Résolution sur $\left[0;2\pi\right[$ de $2\sin x+1 = 0$, puis de $\cos(3x) = \cos\left(x+\dfrac{\pi}{2}\right)$.

**Première équation.** On isole : $\sin x = -\dfrac12$. On reconnaît $\sin\left(-\dfrac{\pi}{6}\right) = -\dfrac12$, d'où les deux familles

$$
x = -\frac{\pi}{6}+2k\pi \qquad\text{ou}\qquad x = \pi+\frac{\pi}{6}+2k\pi = \frac{7\pi}{6}+2k\pi
$$

Sur $\left[0;2\pi\right[$, la première famille donne $-\dfrac{\pi}{6}+2\pi = \dfrac{11\pi}{6}$, la seconde donne $\dfrac{7\pi}{6}$ :

$$
\mathcal{S} = \left\lbrace \frac{7\pi}{6}\ ;\ \frac{11\pi}{6} \right\rbrace
$$

**Seconde équation.** On applique $\cos A = \cos B \iff A = B+2k\pi$ ou $A = -B+2k\pi$.

*Premier cas* : $3x = x+\dfrac{\pi}{2}+2k\pi$, donc $2x = \dfrac{\pi}{2}+2k\pi$, soit $x = \dfrac{\pi}{4}+k\pi$. Sur $\left[0;2\pi\right[$ : $\dfrac{\pi}{4}$ et $\dfrac{5\pi}{4}$.

*Second cas* : $3x = -x-\dfrac{\pi}{2}+2k\pi$, donc $4x = -\dfrac{\pi}{2}+2k\pi$, soit $x = -\dfrac{\pi}{8}+\dfrac{k\pi}{2}$. Sur $\left[0;2\pi\right[$, pour $k = 1,2,3,4$ : $\dfrac{3\pi}{8}$, $\dfrac{7\pi}{8}$, $\dfrac{11\pi}{8}$, $\dfrac{15\pi}{8}$.

Au total six solutions. Le nombre de solutions n'a rien d'arbitraire : plus le coefficient devant $x$ est grand, plus l'équation en produit sur un tour.

#solution
**a) $2\cos x-\sqrt3 = 0$.**

On isole le cosinus :

$$
\cos x = \frac{\sqrt3}{2}
$$

C'est une valeur remarquable : $\cos\dfrac{\pi}{6} = \dfrac{\sqrt3}{2}$. D'où les deux familles

$$
x = \frac{\pi}{6}+2k\pi \qquad\text{ou}\qquad x = -\frac{\pi}{6}+2k\pi, \quad k\in\mathbb{Z}
$$

Sur $\left[0\,;\,2\pi\right[$, la première famille fournit $\dfrac{\pi}{6}$ ; la seconde fournit $-\dfrac{\pi}{6}+2\pi = \dfrac{11\pi}{6}$.

$$
\boxed{\mathcal{S} = \left\lbrace \frac{\pi}{6}\ ;\ \frac{11\pi}{6} \right\rbrace}
$$

**b) $\sin(2x) = \sin\left(x+\dfrac{\pi}{3}\right)$.**

On applique $\sin A = \sin B \iff A = B+2k\pi$ ou $A = \pi-B+2k\pi$.

*Première famille* :

$$
2x = x+\frac{\pi}{3}+2k\pi \qquad\Longleftrightarrow\qquad x = \frac{\pi}{3}+2k\pi
$$

Sur $\left[0;2\pi\right[$, seul $k = 0$ convient : $x = \dfrac{\pi}{3}$.

*Seconde famille* :

$$
2x = \pi-\left(x+\frac{\pi}{3}\right)+2k\pi = \frac{2\pi}{3}-x+2k\pi
$$

$$
3x = \frac{2\pi}{3}+2k\pi \qquad\Longleftrightarrow\qquad x = \frac{2\pi}{9}+\frac{2k\pi}{3}
$$

Les solutions se répètent tous les $\dfrac{2\pi}{3}$. Sur $\left[0;2\pi\right[$ : pour $k = 0$, $\dfrac{2\pi}{9}$ ; pour $k = 1$, $\dfrac{8\pi}{9}$ ; pour $k = 2$, $\dfrac{14\pi}{9}$ ; pour $k = 3$, on obtient $\dfrac{20\pi}{9} > 2\pi$, exclu.

$$
\boxed{\mathcal{S} = \left\lbrace \frac{2\pi}{9}\ ;\ \frac{\pi}{3}\ ;\ \frac{8\pi}{9}\ ;\ \frac{14\pi}{9} \right\rbrace}
$$

**Vérification** pour $x = \dfrac{2\pi}{9}$ : $\sin\dfrac{4\pi}{9} = \sin 80° \approx 0{,}985$, et $\sin\left(\dfrac{2\pi}{9}+\dfrac{\pi}{3}\right) = \sin\dfrac{5\pi}{9} = \sin 100°\approx 0{,}985$. ✓
::

::exo-question{label="2." cours="xfu-reciproques"}
Donner les valeurs exactes de

$$
\arccos\left(-\frac12\right), \qquad \arcsin\left(\sin\frac{5\pi}{6}\right), \qquad \arctan\left(\tan\frac{4\pi}{3}\right)
$$

puis simplifier $\cos(\arcsin x)$ pour $x\in\left[-1\,;\,1\right]$.

#indice
La phrase à se répéter : **$\arccos t$ est l'unique angle de $\left[0;\pi\right]$ dont le cosinus vaut $t$**, $\arcsin t$ l'unique angle de $\left[-\dfrac{\pi}{2};\dfrac{\pi}{2}\right]$ dont le sinus vaut $t$, et $\arctan t$ l'unique angle de $\left]-\dfrac{\pi}{2};\dfrac{\pi}{2}\right[$ dont la tangente vaut $t$.

Le piège des deux expressions du milieu : $\arcsin(\sin\theta)$ ne rend $\theta$ **que si $\theta$ appartient déjà au bon intervalle**. Sinon, il faut d'abord calculer $\sin\theta$, puis chercher l'angle du bon intervalle qui a ce sinus.

Pour la dernière, pose $\theta = \arcsin x$ et sers-toi de $\cos^2\theta+\sin^2\theta = 1$. Le point délicat est le **signe** de la racine : il se décide en regardant dans quel intervalle vit $\theta$.

#exemple
Sur $\arcsin\left(-\dfrac{\sqrt2}{2}\right)$, $\arccos\left(\cos\dfrac{7\pi}{4}\right)$ et $\sin(\arccos x)$.

**Premier calcul.** On cherche l'angle de $\left[-\dfrac{\pi}{2};\dfrac{\pi}{2}\right]$ dont le sinus vaut $-\dfrac{\sqrt2}{2}$. C'est $-\dfrac{\pi}{4}$ :

$$
\arcsin\left(-\frac{\sqrt2}{2}\right) = -\frac{\pi}{4}
$$

**Deuxième calcul.** L'angle $\dfrac{7\pi}{4}$ n'appartient **pas** à $\left[0;\pi\right]$ : on ne peut pas simplifier directement. On calcule d'abord

$$
\cos\frac{7\pi}{4} = \frac{\sqrt2}{2}
$$

puis on cherche l'angle de $\left[0;\pi\right]$ de même cosinus, c'est-à-dire $\dfrac{\pi}{4}$ :

$$
\arccos\left(\cos\frac{7\pi}{4}\right) = \frac{\pi}{4} \neq \frac{7\pi}{4}
$$

**Troisième calcul.** On pose $\theta = \arccos x$, donc $\theta\in\left[0;\pi\right]$ et $\cos\theta = x$. Alors

$$
\sin^2\theta = 1-x^2 \qquad\Longrightarrow\qquad \sin\theta = \pm\sqrt{1-x^2}
$$

Sur $\left[0;\pi\right]$, le sinus est **positif ou nul** : on garde la racine positive.

$$
\sin(\arccos x) = \sqrt{1-x^2}
$$

#solution
**$\arccos\left(-\dfrac12\right)$.** On cherche l'angle de $\left[0;\pi\right]$ dont le cosinus vaut $-\dfrac12$. On sait que $\cos\dfrac{\pi}{3} = \dfrac12$, et l'angle de cosinus opposé dans $\left[0;\pi\right]$ est son supplémentaire :

$$
\boxed{\arccos\left(-\frac12\right) = \pi-\frac{\pi}{3} = \frac{2\pi}{3}}
$$

**$\arcsin\left(\sin\dfrac{5\pi}{6}\right)$.** Attention : $\dfrac{5\pi}{6}\notin\left[-\dfrac{\pi}{2};\dfrac{\pi}{2}\right]$, on ne peut pas simplifier directement. On calcule d'abord le sinus :

$$
\sin\frac{5\pi}{6} = \sin\left(\pi-\frac{\pi}{6}\right) = \sin\frac{\pi}{6} = \frac12
$$

puis on cherche l'angle du bon intervalle dont le sinus vaut $\dfrac12$ :

$$
\boxed{\arcsin\left(\sin\frac{5\pi}{6}\right) = \frac{\pi}{6}}
$$

**$\arctan\left(\tan\dfrac{4\pi}{3}\right)$.** De même, $\dfrac{4\pi}{3}\notin\left]-\dfrac{\pi}{2};\dfrac{\pi}{2}\right[$. La tangente étant $\pi$-périodique :

$$
\tan\frac{4\pi}{3} = \tan\left(\frac{4\pi}{3}-\pi\right) = \tan\frac{\pi}{3} = \sqrt3
$$

$$
\boxed{\arctan\left(\tan\frac{4\pi}{3}\right) = \frac{\pi}{3}}
$$

**$\cos(\arcsin x)$.** On pose $\theta = \arcsin x$, donc $\theta\in\left[-\dfrac{\pi}{2};\dfrac{\pi}{2}\right]$ et $\sin\theta = x$. La relation fondamentale donne

$$
\cos^2\theta = 1-\sin^2\theta = 1-x^2 \qquad\Longrightarrow\qquad \cos\theta = \pm\sqrt{1-x^2}
$$

Sur $\left[-\dfrac{\pi}{2};\dfrac{\pi}{2}\right]$, le cosinus est **positif ou nul** : c'est ce qui lève l'ambiguïté de signe.

$$
\boxed{\cos(\arcsin x) = \sqrt{1-x^2}}
$$

**Contrôle** en $x = 1$ : $\arcsin 1 = \dfrac{\pi}{2}$ et $\cos\dfrac{\pi}{2} = 0 = \sqrt{1-1}$. ✓
::

::exo-question{label="3." cours="xfu-reciproques"}
a) Calculer la dérivée de $x\mapsto \arctan(2x)$ sur $\mathbb{R}$.

b) On pose, pour $x>0$,

$$
\varphi(x) = \arctan x+\arctan\frac1x
$$

Montrer que $\varphi$ est constante sur $\left]0\,;\,+\infty\right[$, puis déterminer cette constante.

#indice
Pour a), la formule est $\left(\arctan u\right)' = \dfrac{u'}{1+u^2}$. Attention à élever **tout** $u$ au carré, coefficient compris.

Pour b), la méthode standard pour prouver qu'une fonction est constante : montrer que **sa dérivée est nulle sur un intervalle**. La mention « sur un intervalle » n'est pas décorative — c'est elle qui justifie la conclusion, et c'est pourquoi l'énoncé se restreint à $\left]0;+\infty\right[$.

La dérivée de $x\mapsto\arctan\dfrac1x$ demande la formule composée avec $u = \dfrac1x$, donc $u' = -\dfrac{1}{x^2}$. Simplifie la fraction obtenue en multipliant haut et bas par $x^2$.

Une fois la dérivée nulle établie, il reste à **évaluer $\varphi$ en un point bien choisi** : $x = 1$ donne un calcul immédiat.

#exemple
Même démarche sur $\psi(x) = \arcsin x+\arccos x$, définie sur $\left]-1\,;\,1\right[$.

**Dérivation.** On utilise $\left(\arcsin x\right)' = \dfrac{1}{\sqrt{1-x^2}}$ et $\left(\arccos x\right)' = -\dfrac{1}{\sqrt{1-x^2}}$ :

$$
\psi'(x) = \frac{1}{\sqrt{1-x^2}}-\frac{1}{\sqrt{1-x^2}} = 0
$$

**Conclusion.** La dérivée est nulle sur l'**intervalle** $\left]-1;1\right[$ : $\psi$ y est donc constante.

**Détermination de la constante.** On évalue en un point commode, ici $x = 0$ :

$$
\psi(0) = \arcsin 0+\arccos 0 = 0+\frac{\pi}{2} = \frac{\pi}{2}
$$

Donc $\arcsin x+\arccos x = \dfrac{\pi}{2}$ pour tout $x$ de $\left]-1;1\right[$ — et l'égalité s'étend par continuité aux bornes.

#solution
**a)** Avec $u(x) = 2x$, donc $u'(x) = 2$ :

$$
\left(\arctan(2x)\right)' = \frac{u'}{1+u^2} = \boxed{\frac{2}{1+4x^2}}
$$

Le piège évité : $u^2 = (2x)^2 = 4x^2$, et non $2x^2$.

**b)** La fonction $\varphi$ est dérivable sur $\left]0;+\infty\right[$ comme somme de fonctions dérivables ($x\mapsto\frac1x$ ne s'y annule pas). On dérive terme à terme, le second avec $u = \dfrac1x$ et $u' = -\dfrac{1}{x^2}$ :

$$
\varphi'(x) = \frac{1}{1+x^2}+\frac{-\dfrac{1}{x^2}}{1+\dfrac{1}{x^2}}
$$

On simplifie la seconde fraction en multipliant numérateur et dénominateur par $x^2$ :

$$
\frac{-\dfrac{1}{x^2}}{1+\dfrac{1}{x^2}} = \frac{-1}{x^2+1}
$$

D'où

$$
\varphi'(x) = \frac{1}{1+x^2}-\frac{1}{1+x^2} = 0
$$

La dérivée est nulle sur l'**intervalle** $\left]0;+\infty\right[$ : $\varphi$ y est donc **constante**.

**La constante.** On évalue en $x = 1$, où les deux termes sont égaux :

$$
\varphi(1) = \arctan 1+\arctan 1 = \frac{\pi}{4}+\frac{\pi}{4} = \frac{\pi}{2}
$$

$$
\boxed{\arctan x+\arctan\frac1x = \frac{\pi}{2} \quad \text{pour tout } x>0}
$$

À noter : sur $\left]-\infty;0\right[$, le même calcul donne une dérivée nulle, mais la constante y vaut $-\dfrac{\pi}{2}$. C'est exactement pourquoi il faut raisonner **sur un intervalle** : la réunion des deux demi-droites n'en est pas un.
::
:::

:::exercice{titre="Palier 5 — Fonctions hyperboliques" theme="Identités, dérivées et expression logarithmique des réciproques" badge="★★★★★" icone="i-lucide-waves"}
Rien de nouveau à apprendre ici : $\mathrm{ch}$ et $\mathrm{sh}$ ne sont que des combinaisons de $e^x$ et $e^{-x}$. Tout se démontre en revenant à ces définitions — c'est le réflexe à garder pour tout ce palier.

$$
\mathrm{ch}\,x = \frac{e^x+e^{-x}}{2} \qquad \mathrm{sh}\,x = \frac{e^x-e^{-x}}{2} \qquad \mathrm{th}\,x = \frac{\mathrm{sh}\,x}{\mathrm{ch}\,x}
$$

::exo-question{label="1." cours="xfu-hyperboliques"}
a) Démontrer que, pour tout réel $x$, $\ \mathrm{ch}^2x-\mathrm{sh}^2x = 1$.

b) Exprimer $\mathrm{ch}(2x)$ en fonction de $\mathrm{ch}\,x$ **seulement**.

#indice
Pour a), la voie la plus courte n'est pas de développer les deux carrés séparément mais d'utiliser l'identité $a^2-b^2 = (a-b)(a+b)$ : les deux facteurs $\mathrm{ch}\,x-\mathrm{sh}\,x$ et $\mathrm{ch}\,x+\mathrm{sh}\,x$ se simplifient spectaculairement.

Pour b), pars du membre de gauche en revenant à la définition : $\mathrm{ch}(2x) = \dfrac{e^{2x}+e^{-2x}}{2}$. Développe ensuite $\mathrm{ch}^2x$ et compare les deux — la consigne « en fonction de $\mathrm{ch}\,x$ seulement » indique que le $\mathrm{sh}$ doit disparaître, ce que permet l'identité de la question a).

#exemple
Démonstration de $\mathrm{sh}(2x) = 2\,\mathrm{sh}\,x\,\mathrm{ch}\,x$.

On part du membre de **droite**, qui est le plus riche, et on revient aux définitions :

$$
2\,\mathrm{sh}\,x\,\mathrm{ch}\,x = 2\times\frac{e^x-e^{-x}}{2}\times\frac{e^x+e^{-x}}{2} = \frac{\left(e^x-e^{-x}\right)\left(e^x+e^{-x}\right)}{2}
$$

Le numérateur est une différence de deux carrés :

$$
\left(e^x\right)^2-\left(e^{-x}\right)^2 = e^{2x}-e^{-2x}
$$

D'où

$$
2\,\mathrm{sh}\,x\,\mathrm{ch}\,x = \frac{e^{2x}-e^{-2x}}{2} = \mathrm{sh}(2x)
$$

La règle de conduite : **revenir aux exponentielles**, et guetter les identités remarquables — c'est presque toujours par là que ça se dénoue.

#solution
**a)** On applique $a^2-b^2 = (a-b)(a+b)$ avec $a = \mathrm{ch}\,x$ et $b = \mathrm{sh}\,x$. Les deux facteurs se calculent instantanément :

$$
\mathrm{ch}\,x-\mathrm{sh}\,x = \frac{e^x+e^{-x}-e^x+e^{-x}}{2} = e^{-x}
$$

$$
\mathrm{ch}\,x+\mathrm{sh}\,x = \frac{e^x+e^{-x}+e^x-e^{-x}}{2} = e^{x}
$$

D'où

$$
\mathrm{ch}^2x-\mathrm{sh}^2x = e^{-x}\times e^{x} = e^{0} = \boxed{1}
$$

C'est l'analogue hyperbolique de $\cos^2+\sin^2 = 1$ — avec un signe moins, qui fait toute la différence.

**b)** On revient à la définition pour le membre de gauche :

$$
\mathrm{ch}(2x) = \frac{e^{2x}+e^{-2x}}{2}
$$

On développe $\mathrm{ch}^2x$ :

$$
\mathrm{ch}^2x = \left(\frac{e^x+e^{-x}}{2}\right)^2 = \frac{e^{2x}+2+e^{-2x}}{4}
$$

D'où $4\,\mathrm{ch}^2x-2 = e^{2x}+e^{-2x} = 2\,\mathrm{ch}(2x)$, c'est-à-dire

$$
\boxed{\mathrm{ch}(2x) = 2\,\mathrm{ch}^2x-1}
$$

**Contrôle** en $x = 0$ : $\mathrm{ch}\,0 = 1$, et $2\times 1-1 = 1 = \mathrm{ch}\,0$. ✓
::

::exo-question{label="2." cours="xfu-hyperboliques"}
a) Calculer $\mathrm{ch}'$ et $\mathrm{sh}'$.

b) En déduire que, pour tout réel $x$,

$$
\mathrm{th}'(x) = \frac{1}{\mathrm{ch}^2x} = 1-\mathrm{th}^2x
$$

#indice
Pour a), dérive directement les définitions. Le seul point d'attention est la dérivée de $e^{-x}$, qui vaut $-e^{-x}$ : c'est ce signe qui fait que les deux fonctions **s'échangent** en se dérivant, sans le signe moins du cas trigonométrique.

Pour b), $\mathrm{th}$ est un quotient : applique $\left(\dfrac{u}{v}\right)' = \dfrac{u'v-uv'}{v^2}$. Le numérateur obtenu est exactement l'identité de la question 1.

Pour la seconde égalité, ne recommence pas le calcul : reprends le numérateur $\mathrm{ch}^2-\mathrm{sh}^2$ **avant** de le simplifier en $1$, et divise chaque terme par $\mathrm{ch}^2$.

#exemple
Dérivation de $\mathrm{coth} = \dfrac{\mathrm{ch}}{\mathrm{sh}}$ sur $\mathbb{R}^*$.

On applique la formule du quotient, avec $u = \mathrm{ch}$ et $v = \mathrm{sh}$, donc $u' = \mathrm{sh}$ et $v' = \mathrm{ch}$ :

$$
\mathrm{coth}'(x) = \frac{\mathrm{sh}\,x\times\mathrm{sh}\,x-\mathrm{ch}\,x\times\mathrm{ch}\,x}{\mathrm{sh}^2x} = \frac{\mathrm{sh}^2x-\mathrm{ch}^2x}{\mathrm{sh}^2x}
$$

Le numérateur vaut $-1$ d'après l'identité fondamentale :

$$
\mathrm{coth}'(x) = -\frac{1}{\mathrm{sh}^2x}
$$

Et en divisant le numérateur $\mathrm{sh}^2-\mathrm{ch}^2$ terme à terme par $\mathrm{sh}^2$ avant de simplifier, on obtient l'autre écriture :

$$
\mathrm{coth}'(x) = 1-\mathrm{coth}^2x
$$

#solution
**a)** On dérive les définitions, en se souvenant que $\left(e^{-x}\right)' = -e^{-x}$ :

$$
\mathrm{ch}'(x) = \frac{e^x-e^{-x}}{2} = \boxed{\mathrm{sh}\,x}
$$

$$
\mathrm{sh}'(x) = \frac{e^x+e^{-x}}{2} = \boxed{\mathrm{ch}\,x}
$$

Les deux fonctions s'échangent en se dérivant, **sans signe moins** — contrairement au couple $\cos/\sin$.

**b)** $\mathrm{th} = \dfrac{\mathrm{sh}}{\mathrm{ch}}$ est un quotient bien défini partout, car $\mathrm{ch}\,x \geqslant 1 > 0$ pour tout réel. La formule du quotient donne

$$
\mathrm{th}'(x) = \frac{\mathrm{ch}\,x\times\mathrm{ch}\,x-\mathrm{sh}\,x\times\mathrm{sh}\,x}{\mathrm{ch}^2x} = \frac{\mathrm{ch}^2x-\mathrm{sh}^2x}{\mathrm{ch}^2x}
$$

**Première écriture** : le numérateur vaut $1$ d'après la question 1 :

$$
\boxed{\mathrm{th}'(x) = \frac{1}{\mathrm{ch}^2x}}
$$

**Seconde écriture** : on reprend le numérateur **avant** simplification et on divise terme à terme :

$$
\frac{\mathrm{ch}^2x-\mathrm{sh}^2x}{\mathrm{ch}^2x} = 1-\frac{\mathrm{sh}^2x}{\mathrm{ch}^2x} = \boxed{1-\mathrm{th}^2x}
$$

Cette dérivée est strictement positive : $\mathrm{th}$ est strictement croissante sur $\mathbb{R}$.
::

::exo-question{label="3." cours="xfu-hyperboliques-reciproques"}
a) Montrer que $\mathrm{sh}$ réalise une bijection de $\mathbb{R}$ sur $\mathbb{R}$.

b) En résolvant $\mathrm{sh}\,y = x$ d'inconnue $y$, démontrer que sa réciproque vérifie

$$
\mathrm{argsh}\,x = \ln\left(x+\sqrt{x^2+1}\right)
$$

c) En déduire la dérivée de $\mathrm{argsh}$.

#indice
Pour a), le théorème de la bijection : continuité, stricte monotonie sur un intervalle, et limites aux bornes. La stricte monotonie vient du signe de $\mathrm{sh}' = \mathrm{ch}$, dont on connaît le signe sans calcul.

Pour b), tout repose sur une astuce de changement de variable. L'équation $\dfrac{e^y-e^{-y}}{2} = x$ devient, après multiplication par $2e^y$, une équation du second degré en $X = e^y$. Résous-la, puis **écarte la racine négative** : $e^y$ est strictement positif. Le fait que $\sqrt{x^2+1}>\lvert x\rvert$ est ce qui permet de trancher.

Pour c), deux routes. Soit dériver directement l'expression logarithmique — pense à réduire au même dénominateur, la simplification est spectaculaire. Soit utiliser la formule de la dérivée d'une réciproque avec l'identité $\mathrm{ch}^2-\mathrm{sh}^2 = 1$.

#exemple
Même travail, en plus court, sur $\mathrm{argth}$ : montrer que $\mathrm{argth}\,x = \dfrac12\ln\dfrac{1+x}{1-x}$ sur $\left]-1;1\right[$.

On résout $\mathrm{th}\,y = x$ d'inconnue $y$. En revenant aux exponentielles :

$$
\frac{e^y-e^{-y}}{e^y+e^{-y}} = x
$$

On multiplie haut et bas par $e^y$ pour chasser les exposants négatifs, et on pose $X = e^{2y}$ :

$$
\frac{e^{2y}-1}{e^{2y}+1} = x \qquad\Longrightarrow\qquad \frac{X-1}{X+1} = x
$$

On résout en $X$ :

$$
X-1 = x(X+1) \iff X(1-x) = 1+x \iff X = \frac{1+x}{1-x}
$$

Cette quantité est bien strictement positive pour $x\in\left]-1;1\right[$, ce qui est indispensable puisque $X = e^{2y}$. On revient à $y$ :

$$
2y = \ln\frac{1+x}{1-x} \qquad\Longrightarrow\qquad y = \frac12\ln\frac{1+x}{1-x}
$$

Le schéma est toujours le même : **chasser les exponentielles négatives, poser $X = e^{y}$ ou $e^{2y}$, résoudre, écarter les racines négatives, revenir par le logarithme.**

#solution
**a) La bijection.**

$\mathrm{sh}$ est dérivable donc continue sur $\mathbb{R}$, et $\mathrm{sh}' = \mathrm{ch}$. Or

$$
\mathrm{ch}\,x = \frac{e^x+e^{-x}}{2} \geqslant 1 > 0
$$

(somme de deux quantités strictement positives ; le minimum $1$ est atteint en $0$). Donc $\mathrm{sh}$ est **strictement croissante** sur $\mathbb{R}$.

Ses limites : $\displaystyle\lim_{x\to-\infty}\mathrm{sh}\,x = -\infty$ et $\displaystyle\lim_{x\to+\infty}\mathrm{sh}\,x = +\infty$.

D'après le théorème de la bijection, $\mathrm{sh}$ réalise une bijection de $\mathbb{R}$ sur $\mathbb{R}$. Sa réciproque est notée $\mathrm{argsh}$.

**b) L'expression logarithmique.**

On résout $\mathrm{sh}\,y = x$ d'inconnue $y\in\mathbb{R}$ :

$$
\frac{e^y-e^{-y}}{2} = x \iff e^y-e^{-y} = 2x
$$

On multiplie par $e^y$, strictement positif, pour chasser l'exposant négatif :

$$
e^{2y}-2x\,e^y-1 = 0
$$

On pose $X = e^y$, avec la contrainte $X>0$ :

$$
X^2-2xX-1 = 0
$$

Discriminant : $\Delta = 4x^2+4 = 4\left(x^2+1\right) > 0$, donc $\sqrt\Delta = 2\sqrt{x^2+1}$ et

$$
X = \frac{2x\pm 2\sqrt{x^2+1}}{2} = x\pm\sqrt{x^2+1}
$$

**Choix de la racine.** Comme $x^2+1 > x^2$, on a $\sqrt{x^2+1} > \lvert x\rvert \geqslant x$, donc $x-\sqrt{x^2+1} < 0$ : cette racine est à **rejeter**, puisque $X = e^y > 0$. Il reste

$$
e^y = x+\sqrt{x^2+1} \qquad\Longrightarrow\qquad \boxed{y = \mathrm{argsh}\,x = \ln\left(x+\sqrt{x^2+1}\right)}
$$

**Contrôle** en $x = 0$ : $\ln\left(0+1\right) = 0$, et $\mathrm{sh}\,0 = 0$. ✓

**c) La dérivée.**

On dérive l'expression obtenue, de la forme $\ln u$ avec $u(x) = x+\sqrt{x^2+1} > 0$. La dérivée de $\sqrt{x^2+1}$ est $\dfrac{2x}{2\sqrt{x^2+1}} = \dfrac{x}{\sqrt{x^2+1}}$, donc

$$
u'(x) = 1+\frac{x}{\sqrt{x^2+1}} = \frac{\sqrt{x^2+1}+x}{\sqrt{x^2+1}}
$$

Le numérateur de $u'$ est exactement $u$ : c'est ce qui fait tout tomber.

$$
\mathrm{argsh}'(x) = \frac{u'(x)}{u(x)} = \frac{u(x)}{\sqrt{x^2+1}}\times\frac{1}{u(x)}
$$

$$
\boxed{\mathrm{argsh}'(x) = \frac{1}{\sqrt{x^2+1}}}
$$

**Contrôle par la formule de la réciproque** : $\mathrm{argsh}'(x) = \dfrac{1}{\mathrm{ch}\left(\mathrm{argsh}\,x\right)}$, et comme $\mathrm{ch}^2 = 1+\mathrm{sh}^2$ avec $\mathrm{ch}>0$, on a $\mathrm{ch}\left(\mathrm{argsh}\,x\right) = \sqrt{1+x^2}$. Même résultat. ✓
::
:::

## Les rappels de cours de cette fiche

Ces tiroirs s'ouvrent aussi depuis le bouton **Cours** de chaque question. Ils sont regroupés ici pour permettre une relecture d'ensemble.

::extrait-cours{id="xfu-domaines" titre="Où une expression est définie" source="/cours/a1/mathematiques/fonctions-usuelles#_2-logarithme-népérien"}
Trois contraintes, et trois seulement :

- **Sous un logarithme** : l'argument doit être **strictement positif**. $\ln u$ existe si et seulement si $u>0$.
- **Au dénominateur** : la quantité doit être **non nulle**.
- **Sous une racine carrée** : le radicande doit être positif ou nul.

L'**exponentielle n'impose jamais rien** : elle est définie sur $\mathbb{R}$ tout entier, et elle est toujours strictement positive.

Quand plusieurs contraintes coexistent, elles doivent tenir **simultanément** : on **intersecte** les ensembles obtenus, on ne les réunit pas.

Enfin, $\exp$ et $\ln$ sont strictement croissantes donc **injectives** :

$$
e^a = e^b \iff a = b \qquad\text{et}\qquad \ln a = \ln b \iff a = b \quad (a,b>0)
$$
::

::extrait-cours{id="xfu-regles" titre="Règles de calcul sur exp et ln" source="/cours/a1/mathematiques/fonctions-usuelles#_1-exponentielle"}
Les deux fonctions sont **réciproques** l'une de l'autre :

$$
e^{\ln t} = t \ \ (t>0) \qquad\text{et}\qquad \ln\left(e^t\right) = t \ \ (t\in\mathbb{R})
$$

**Exponentielle** — elle transforme les sommes en produits :

$$
e^{a+b} = e^a e^b \qquad e^{-a} = \frac{1}{e^a} \qquad \left(e^a\right)^n = e^{na}
$$

**Logarithme** — il transforme les produits en sommes :

$$
\ln(ab) = \ln a+\ln b \qquad \ln\frac{a}{b} = \ln a-\ln b \qquad \ln\left(a^n\right) = n\ln a
$$

Valeurs à connaître : $e^0 = 1$, $\ln 1 = 0$, $\ln e = 1$. Et une réécriture qui sert sans cesse : $\sqrt t = t^{1/2}$, donc $\ln\sqrt t = \dfrac12\ln t$.
::

::extrait-cours{id="xfu-equations" titre="Équations avec exp et ln" source="/cours/a1/mathematiques/fonctions-usuelles#_3-équations-et-inéquations-avec-ln-et-exp"}
**Toujours commencer par les conditions d'existence**, avant le moindre calcul : elles serviront à trier les solutions à la fin.

**Équation en $e^x$ à deux puissances.** On pose $X = e^x$ — en notant que $X>0$ — pour se ramener à un trinôme. Au retour, **toute racine négative ou nulle est à rejeter**.

**Équation avec plusieurs logarithmes.** On regroupe en un seul logarithme par $\ln a+\ln b = \ln(ab)$, puis on utilise l'injectivité :

$$
\ln A = \ln B \iff A = B \quad\text{(sur le domaine de définition)}
$$

Les racines obtenues doivent ensuite être confrontées aux conditions d'existence : c'est là que se perdent la plupart des points.
::

::extrait-cours{id="xfu-inequations" titre="Inéquations avec exp et ln" source="/cours/a1/mathematiques/fonctions-usuelles#_3-équations-et-inéquations-avec-ln-et-exp"}
$\exp$ et $\ln$ sont **strictement croissantes** : composer une inégalité par l'une ou l'autre **conserve son sens**.

$$
e^a < e^b \iff a<b \qquad\text{et}\qquad \ln a<\ln b \iff a<b \quad (a,b>0)
$$

La méthode : écrire les deux membres sous la même forme — $1 = \ln e$, $2 = \ln\left(e^2\right)$, $3 = e^{\ln 3}$ — puis retirer la fonction des deux côtés.

Deux pièges :

- **La condition d'existence** subsiste : la solution finale est l'**intersection** de l'ensemble trouvé avec le domaine.
- **Multiplier ou diviser par un nombre négatif inverse l'inégalité** — c'est l'erreur classique de la dernière ligne, quand il reste un $-x$ à isoler.
::

::extrait-cours{id="xfu-derivees" titre="Dérivées composées" source="/cours/a1/mathematiques/fonctions-usuelles#_1-exponentielle"}
Les deux formules de base, toujours sous forme composée :

$$
\left(e^u\right)' = u'e^u \qquad \left(\ln u\right)' = \frac{u'}{u} \quad (u>0)
$$

En particulier $\left(e^{-x}\right)' = -e^{-x}$ et $\left(e^{ax}\right)' = a\,e^{ax}$.

Et les trois opérations, à identifier **avant** de se lancer :

$$
(uv)' = u'v+uv' \qquad \left(\frac uv\right)' = \frac{u'v-uv'}{v^2} \qquad \left(f\circ u\right)' = u'\times f'\circ u
$$

**Toujours factoriser le résultat** : c'est sous forme factorisée qu'on lit le signe de la dérivée. Une exponentielle en facteur est toujours strictement positive, elle ne contribue donc jamais au signe.
::

::extrait-cours{id="xfu-limites" titre="Croissances comparées" source="/cours/a1/mathematiques/fonctions-usuelles#_4-limites-et-croissances-comparées"}
La phrase à retenir : **l'exponentielle l'emporte sur toute puissance, et toute puissance l'emporte sur le logarithme.**

En $+\infty$, pour tout $n>0$ :

$$
\lim_{x\to+\infty}\frac{e^x}{x^n} = +\infty \qquad \lim_{x\to+\infty}\frac{\ln x}{x^n} = 0
$$

En $0^+$ et en $-\infty$, pour tout $n>0$ :

$$
\lim_{x\to 0^+}x^n\ln x = 0 \qquad \lim_{x\to-\infty}x^n e^x = 0
$$

Ces limites ne s'appliquent que sur les formes « $\dfrac{\infty}{\infty}$ » et « $0\times\infty$ ». Pour une forme « $\infty-\infty$ », le geste standard est de **factoriser par le terme dominant** afin de faire apparaître un quotient dont on connaît la limite.
::

::extrait-cours{id="xfu-etude" titre="Étude de fonction et théorème des valeurs intermédiaires" source="/cours/a1/mathematiques/fonctions-usuelles#_4-limites-et-croissances-comparées"}
**Le plan d'une étude** : domaine, limites aux bornes, dérivée, signe de la dérivée (après factorisation ou mise au même dénominateur), tableau de variations avec les valeurs aux extremums.

**Théorème des valeurs intermédiaires, version bijection.** Si $f$ est **continue** et **strictement monotone** sur un intervalle $\left[a;b\right]$, alors pour tout $k$ compris entre $f(a)$ et $f(b)$, l'équation $f(x) = k$ admet une **unique** solution dans $\left[a;b\right]$.

Les trois hypothèses se citent explicitement dans la rédaction, et les bornes infinies s'utilisent via les limites.

⚠️ **Quand la fonction n'est pas monotone sur tout le domaine, on applique le théorème séparément sur chaque intervalle de monotonie.** C'est ainsi qu'on obtient deux solutions plutôt qu'une — et l'oublier est l'erreur la plus fréquente.

Les valeurs approchées se cherchent ensuite par balayage à la calculatrice.
::

::extrait-cours{id="xfu-equations-trigo" titre="Équations trigonométriques" source="/cours/a1/mathematiques/fonctions-usuelles#_5-trigonométrie"}
Une droite coupe le cercle en **deux** points : il y a donc **deux familles** de solutions, jamais une seule.

$$
\cos A = \cos B \iff A = B+2k\pi \quad\text{ou}\quad A = -B+2k\pi
$$

$$
\sin A = \sin B \iff A = B+2k\pi \quad\text{ou}\quad A = \pi-B+2k\pi
$$

avec $k\in\mathbb{Z}$. La méthode : isoler la fonction, reconnaître une valeur remarquable, écrire les deux familles, résoudre chacune en $x$, puis **faire varier $k$** pour ne garder que les solutions de l'intervalle demandé.

Si le coefficient de $x$ vaut $n$ après résolution, les solutions d'une même famille se répètent tous les $\dfrac{2\pi}{n}$ : il y en a donc $n$ par tour.

Pour passer d'un sinus à un cosinus, on utilise $\sin\theta = \cos\left(\dfrac{\pi}{2}-\theta\right)$.
::

::extrait-cours{id="xfu-reciproques" titre="Arccos, arcsin, arctan" source="/cours/a1/mathematiques/fonctions-usuelles#_6-fonctions-trigonométriques-réciproques"}
Chaque réciproque a **son** intervalle d'arrivée, et c'est lui qui décide de tout :

| | définie sur | à valeurs dans |
|---|---|---|
| $\arccos$ | $\left[-1;1\right]$ | $\left[0\,;\,\pi\right]$ |
| $\arcsin$ | $\left[-1;1\right]$ | $\left[-\dfrac{\pi}{2}\,;\,\dfrac{\pi}{2}\right]$ |
| $\arctan$ | $\mathbb{R}$ | $\left]-\dfrac{\pi}{2}\,;\,\dfrac{\pi}{2}\right[$ |

⚠️ $\arccos(\cos\theta)$ ne rend $\theta$ **que si** $\theta\in\left[0;\pi\right]$. Sinon : calculer d'abord $\cos\theta$, puis chercher l'angle du bon intervalle ayant ce cosinus.

Les dérivées :

$$
\arcsin'x = \frac{1}{\sqrt{1-x^2}} \qquad \arccos'x = \frac{-1}{\sqrt{1-x^2}} \qquad \arctan'x = \frac{1}{1+x^2}
$$

Pour simplifier $\cos(\arcsin x)$ ou $\sin(\arccos x)$, on pose $\theta$ égal à l'arc, on utilise $\cos^2\theta+\sin^2\theta = 1$, et **c'est l'intervalle d'arrivée qui fixe le signe de la racine**.

Enfin, pour montrer qu'une combinaison de ces fonctions est constante, on montre que **sa dérivée est nulle sur un intervalle**, puis on évalue en un point bien choisi.
::

::extrait-cours{id="xfu-hyperboliques" titre="Cosinus, sinus et tangente hyperboliques" source="/cours/a1/mathematiques/fonctions-usuelles#_7-fonctions-hyperboliques"}
Ce ne sont que des combinaisons d'exponentielles :

$$
\mathrm{ch}\,x = \frac{e^x+e^{-x}}{2} \qquad \mathrm{sh}\,x = \frac{e^x-e^{-x}}{2} \qquad \mathrm{th}\,x = \frac{\mathrm{sh}\,x}{\mathrm{ch}\,x}
$$

**Le réflexe pour toute démonstration : revenir à ces définitions**, puis guetter les identités remarquables. Deux simplifications reviennent sans cesse :

$$
\mathrm{ch}\,x+\mathrm{sh}\,x = e^{x} \qquad \mathrm{ch}\,x-\mathrm{sh}\,x = e^{-x}
$$

**Identité fondamentale** — noter le signe moins, qui la distingue du cas trigonométrique :

$$
\mathrm{ch}^2x-\mathrm{sh}^2x = 1
$$

**Dérivées** — les deux fonctions s'échangent, **sans signe moins** :

$$
\mathrm{ch}' = \mathrm{sh} \qquad \mathrm{sh}' = \mathrm{ch} \qquad \mathrm{th}' = \frac{1}{\mathrm{ch}^2} = 1-\mathrm{th}^2
$$

Enfin $\mathrm{ch}\,x \geqslant 1$ pour tout réel : $\mathrm{ch}$ ne s'annule jamais, ce qui rend $\mathrm{th}$ définie sur $\mathbb{R}$.
::

::extrait-cours{id="xfu-hyperboliques-reciproques" titre="Argsh, argch, argth" source="/cours/a1/mathematiques/fonctions-usuelles#_8-fonctions-hyperboliques-réciproques"}
**La méthode**, toujours la même, pour obtenir l'expression logarithmique d'une réciproque : on résout l'équation $\mathrm{sh}\,y = x$ (ou $\mathrm{ch}$, ou $\mathrm{th}$) d'inconnue $y$.

1. Revenir aux exponentielles et multiplier par $e^y$ pour chasser les exposants négatifs.
2. Poser $X = e^y$ : on obtient une équation du second degré.
3. Résoudre, puis **écarter la racine négative ou nulle**, puisque $X = e^y>0$.
4. Revenir à $y$ par le logarithme.

Les trois résultats :

$$
\mathrm{argsh}\,x = \ln\left(x+\sqrt{x^2+1}\right) \quad (x\in\mathbb{R})
$$

$$
\mathrm{argch}\,x = \ln\left(x+\sqrt{x^2-1}\right) \quad (x\geqslant 1)
$$

$$
\mathrm{argth}\,x = \frac12\ln\frac{1+x}{1-x} \quad (\lvert x\rvert<1)
$$

Et les dérivées correspondantes :

$$
\mathrm{argsh}'x = \frac{1}{\sqrt{x^2+1}} \qquad \mathrm{argch}'x = \frac{1}{\sqrt{x^2-1}} \qquad \mathrm{argth}'x = \frac{1}{1-x^2}
$$
::
