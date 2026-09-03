---
title: Nombres complexes — exercices du TD
description: Les quatre exercices du TD, corrigés. Sous chaque question, un indice, la solution détaillée et le rappel de cours utile, tous trois en fenêtre.
type: exercices
annee: A1
matiere: Remise à niveau en maths
ordre: 2
icone: i-lucide-pencil-line
---

::rappel{titre="Comment se servir de cette page" icone="i-lucide-compass"}
Les exercices du TD, dans l'ordre du sujet. Sous chaque question, trois boutons — et aucun ne quitte la page :

- **Indice** — la piste à suivre, sans le résultat.
- **Voir la solution** — la correction rédigée, étape par étape.
- **Cours** — un tiroir avec le rappel utile à cette question précise, et le lien vers la section du cours où la méthode est déroulée sur un exemple entièrement traité.

Le bon réflexe : chercher, puis l'indice, puis le cours, et la solution en dernier.
::

::carte-lien{to="/cours/a1/remise-a-niveau-maths/nombres-complexes/cours" titre="Le cours du chapitre" description="Forme algébrique, opérations, second degré, affixes, module et argument, formes trigonométrique et exponentielle, ensembles de points" type="cours" meta="8 sections"}
::

::carte-lien{to="/cours/a1/remise-a-niveau-maths/nombres-complexes/entrainement" titre="La fiche d’entraînement" description="Si ces exercices démarrent trop haut : quinze questions en cinq paliers, de « qu’est-ce que i » à la formule de Moivre" type="entrainement" meta="15 questions"}
::

:::exercice{titre="Exercice 1" theme="Forme algébrique d'une somme, d'un produit et d'un quotient"}
On pose $z_1 = 2+3i$ et $z_2 = 4-2i$. Donner la forme algébrique de chacune des expressions suivantes.

::exo-question{label="a)" cours="cours-operations"}
$z_1 + z_2$

#indice
L'addition de deux complexes se fait « composante par composante », exactement comme pour des vecteurs : on additionne les parties réelles entre elles, et les parties imaginaires entre elles. Aucune règle particulière à connaître ici, $i$ se comporte comme une variable qu'on factorise.

#solution
On regroupe les parties réelles d'un côté, les parties imaginaires de l'autre :

$$
z_1+z_2 = (2+4)+(3-2)i = 6+i
$$

La forme algébrique cherchée est donc $\boxed{6+i}$, de partie réelle $6$ et de partie imaginaire $1$.
::

::exo-question{label="b)" cours="cours-operations"}
$z_1 \times z_2$

#indice
Développe le produit comme un produit de deux binômes (double distributivité, la même que pour $(a+b)(c+d)$). Le seul point spécifique aux complexes intervient à la fin : il reste un terme en $i^2$, qu'il faut remplacer par $-1$ — attention, cela change le signe de ce terme et il rejoint alors la partie réelle.

#solution
Double distributivité :

$$
z_1 z_2 = (2+3i)(4-2i) = 8-4i+12i-6i^2
$$

On remplace $i^2$ par $-1$, donc $-6i^2 = +6$ :

$$
z_1 z_2 = 8+6+(-4+12)i = \boxed{14+8i}
$$
::

::exo-question{label="c)" cours="cours-operations"}
$z_1^2$

#indice
C'est un carré : l'identité remarquable $(a+b)^2 = a^2+2ab+b^2$ s'applique telle quelle. Le piège classique est le terme $(3i)^2$ : n'oublie pas d'élever **à la fois** le $3$ et le $i$ au carré.

#solution
Identité remarquable, avec $a = 2$ et $b = 3i$ :

$$
z_1^2 = (2+3i)^2 = 4+2\times 2\times 3i+(3i)^2
$$

Or $(3i)^2 = 9i^2 = -9$, d'où :

$$
z_1^2 = 4-9+12i = \boxed{-5+12i}
$$
::

::exo-question{label="d)" cours="cours-conjugue-quotient"}
$z_1 \times \overline{z_1}$

#indice
Tu peux développer, mais il y a beaucoup plus rapide : le produit d'un complexe par son conjugué est une propriété du cours qui donne directement un **nombre réel**. Regarde la formule $z\bar z = a^2+b^2$ — le résultat ne comporte aucun $i$.

#solution
C'est exactement la propriété du cours $z\bar z = a^2+b^2$, avec $a = 2$ et $b = 3$ :

$$
z_1\overline{z_1} = 2^2+3^2 = 4+9 = \boxed{13}
$$

Vérification en développant, si l'on préfère : $(2+3i)(2-3i) = 4-9i^2 = 4+9 = 13$. C'est le carré du module de $z_1$, et c'est précisément ce qui rend la méthode du conjugué utile aux questions suivantes.
::

::exo-question{label="e)" cours="cours-conjugue-quotient"}
$\dfrac{1}{z_2}$

#indice
Un quotient n'est pas sous forme algébrique tant qu'il reste un $i$ au dénominateur. La méthode du cours consiste à multiplier haut et bas par le conjugué du dénominateur : grâce à la question **d)**, le dénominateur devient alors un réel, et il ne reste qu'à séparer les deux morceaux de la fraction.

#solution
On multiplie numérateur et dénominateur par $\overline{z_2} = 4+2i$ :

$$
\frac{1}{z_2} = \frac{\overline{z_2}}{z_2\overline{z_2}} = \frac{4+2i}{4^2+2^2} = \frac{4+2i}{20}
$$

Il reste à séparer partie réelle et partie imaginaire, puis à simplifier chaque fraction :

$$
\frac{1}{z_2} = \frac{4}{20}+\frac{2}{20}i = \boxed{\frac{1}{5}+\frac{1}{10}i}
$$
::

::exo-question{label="f)" cours="cours-conjugue-quotient"}
$\dfrac{z_1}{z_2}$

#indice
Même méthode qu'en **e)** : on multiplie haut et bas par $\overline{z_2}$. Le dénominateur a déjà été calculé à la question précédente, il ne reste donc qu'un produit de deux complexes à développer au numérateur — attention à ne pas confondre $\overline{z_2}$ avec $z_2$ dans ce développement.

#solution
On multiplie par le conjugué du dénominateur :

$$
\frac{z_1}{z_2} = \frac{z_1\overline{z_2}}{z_2\overline{z_2}} = \frac{(2+3i)(4+2i)}{20}
$$

Développement du numérateur :

$$
(2+3i)(4+2i) = 8+4i+12i+6i^2 = 8-6+16i = 2+16i
$$

D'où :

$$
\frac{z_1}{z_2} = \frac{2+16i}{20} = \boxed{\frac{1}{10}+\frac{4}{5}i}
$$
::
:::

:::exercice{titre="Exercice 2" theme="Équation du second degré à discriminant négatif"}
Résoudre dans $\mathbb{C}$ l'équation $x^2+x+1 = 0$.

::exo-question{label="1." cours="cours-second-degre"}
Déterminer l'ensemble des solutions.

#indice
La méthode est exactement celle du second degré vue au lycée : on identifie $a$, $b$, $c$ puis on calcule le discriminant. La seule différence est ce qu'on fait quand $\Delta < 0$ : dans $\mathbb{R}$ on concluait « pas de solution », dans $\mathbb{C}$ on écrit $\sqrt{\Delta} = i\sqrt{-\Delta}$ et les deux racines existent bel et bien.

#solution
Ici $a = 1$, $b = 1$, $c = 1$. Le discriminant vaut :

$$
\Delta = b^2-4ac = 1-4 = -3 < 0
$$

$\Delta$ est strictement négatif : l'équation admet **deux racines complexes conjuguées**, données par la formule du cours avec $\sqrt{-\Delta} = \sqrt{3}$ :

$$
z_1 = \frac{-b-i\sqrt{-\Delta}}{2a} = \frac{-1-i\sqrt{3}}{2}, \qquad z_2 = \frac{-1+i\sqrt{3}}{2}
$$

$$
\boxed{S = \left\{\frac{-1-i\sqrt{3}}{2},\; \frac{-1+i\sqrt{3}}{2}\right\}}
$$

**Vérification** par somme et produit des racines : $z_1+z_2 = -1 = -\dfrac{b}{a}$, et $z_1z_2 = \dfrac{(-1)^2-(i\sqrt3)^2}{4} = \dfrac{1+3}{4} = 1 = \dfrac{c}{a}$. Les deux correspondent.
::
:::

:::exercice{titre="Exercice 3" theme="Lecture graphique et affixes"}
Le repère est orthonormé, un carreau valant une unité. Les points lus sur la figure sont $M_1(2,1)$, $M_2(0,3)$, $M_3(-2,0)$, $M_4(4,2)$ et $M_5(-4,-3)$.

::exo-question{label="a)" cours="cours-affixes"}
Donner l'affixe des points $M_1$, $M_2$, $M_3$, $M_4$ et $M_5$.

#indice
La correspondance est directe : l'abscisse devient la partie réelle, l'ordonnée la partie imaginaire. Deux cas méritent attention — un point situé sur l'axe des ordonnées, dont l'affixe est un **imaginaire pur**, et un point sur l'axe des abscisses, dont l'affixe est un **réel**.

#solution
On applique $M(x,y) \mapsto z = x+yi$ :

| Point | Coordonnées | Affixe |
|---|---|---|
| $M_1$ | $(2,\,1)$ | $z_1 = 2+i$ |
| $M_2$ | $(0,\,3)$ | $z_2 = 3i$ (imaginaire pur) |
| $M_3$ | $(-2,\,0)$ | $z_3 = -2$ (réel) |
| $M_4$ | $(4,\,2)$ | $z_4 = 4+2i$ |
| $M_5$ | $(-4,\,-3)$ | $z_5 = -4-3i$ |

$M_2$ est sur l'axe des ordonnées, donc sa partie réelle est nulle ; $M_3$ est sur l'axe des abscisses, donc sa partie imaginaire est nulle.
::

::exo-question{label="b)" cours="cours-affixes"}
Donner l'affixe du vecteur $\overrightarrow{M_2M_4}$.

#indice
Souviens-toi de la formule des coordonnées d'un vecteur : $\overrightarrow{AB}$ a pour coordonnées $(x_B-x_A,\ y_B-y_A)$. La même règle vaut pour les affixes — « extrémité moins origine ». Le sens compte : $\overrightarrow{M_2M_4}$ et $\overrightarrow{M_4M_2}$ ont des affixes opposées.

#solution
L'affixe d'un vecteur $\overrightarrow{AB}$ est $z_B-z_A$, soit ici :

$$
z_{\overrightarrow{M_2M_4}} = z_4-z_2 = (4+2i)-3i = \boxed{4-i}
$$

On peut le relire sur la figure : pour aller de $M_2(0,3)$ à $M_4(4,2)$, on avance de $4$ vers la droite et on descend de $1$, ce qui correspond bien au vecteur de coordonnées $(4,-1)$.
::

::exo-question{label="c)" cours="cours-affixes"}
Calculer l'affixe du milieu du segment $[M_2M_3]$.

#indice
La formule du milieu se transpose des coordonnées aux affixes sans changement : c'est la moyenne des deux affixes. Attention à bien diviser **les deux** parties par $2$, la réelle comme l'imaginaire.

#solution
Propriété du cours : $z_M = \dfrac{z_A+z_B}{2}$. Avec $z_2 = 3i$ et $z_3 = -2$ :

$$
z = \frac{z_2+z_3}{2} = \frac{3i+(-2)}{2} = \frac{-2+3i}{2} = \boxed{-1+\frac{3}{2}i}
$$

Le milieu a donc pour coordonnées $\left(-1,\ \dfrac{3}{2}\right)$, ce qui est cohérent avec une lecture graphique entre $M_2(0,3)$ et $M_3(-2,0)$.
::
:::

:::exercice{titre="Exercice 4" theme="Forme exponentielle"}
Donner une forme exponentielle du nombre complexe $z = \sqrt{3}-3i$.

::exo-question{label="1." cours="cours-module-exponentielle"}
Écrire $z$ sous la forme $re^{i\theta}$.

#indice
La méthode se déroule toujours en trois temps : module, puis argument, puis écriture finale. Pour l'argument, calcule **les deux** valeurs $\cos\theta$ et $\sin\theta$ — une seule ne suffit pas à déterminer l'angle, puisque deux angles distincts partagent le même cosinus. Ici le signe de la partie imaginaire t'indique déjà dans quel demi-plan chercher.

#solution
**Étape 1 — le module.** Avec $x = \sqrt{3}$ et $y = -3$ :

$$
\lvert z \rvert = \sqrt{(\sqrt{3})^2+(-3)^2} = \sqrt{3+9} = \sqrt{12} = 2\sqrt{3}
$$

**Étape 2 — l'argument.** On calcule le cosinus et le sinus :

$$
\cos\theta = \frac{\sqrt{3}}{2\sqrt{3}} = \frac{1}{2} \qquad\text{et}\qquad \sin\theta = \frac{-3}{2\sqrt{3}} = -\frac{\sqrt{3}}{2}
$$

Le second calcul mérite un mot : $\dfrac{3}{2\sqrt3} = \dfrac{3\sqrt3}{2\times 3} = \dfrac{\sqrt3}{2}$ après multiplication par $\sqrt3$ en haut et en bas.

L'angle remarquable dont le cosinus vaut $\dfrac{1}{2}$ et le sinus $-\dfrac{\sqrt{3}}{2}$ est :

$$
\theta = -\frac{\pi}{3} \quad [2\pi]
$$

**Étape 3 — conclusion.**

$$
\boxed{z = 2\sqrt{3}\,e^{-i\pi/3}}
$$

**Vérification** : $2\sqrt{3}\left(\cos\left(-\frac{\pi}{3}\right)+i\sin\left(-\frac{\pi}{3}\right)\right) = 2\sqrt{3}\left(\frac{1}{2}-i\frac{\sqrt{3}}{2}\right) = \sqrt{3}-3i$. On retrouve bien $z$.
::
:::

## Les rappels de cours de cette page

Ces tiroirs s'ouvrent depuis le bouton **Cours** de chaque question. Ils sont regroupés ici pour permettre une relecture d'ensemble.

::extrait-cours{id="cours-operations" titre="Somme, produit et carré" source="/cours/a1/remise-a-niveau-maths/nombres-complexes/cours#_2-les-opérations"}
La règle du jeu tient en une phrase : **on calcule comme en algèbre ordinaire**, $i$ jouant le rôle d'une variable, et on remplace $i^2$ par $-1$ dès qu'il apparaît.

**Somme et différence** — composante par composante :

$$
(a+bi)\pm(c+di) = (a\pm c)+(b\pm d)i
$$

**Produit** — double distributivité, puis $i^2 = -1$ :

$$
(a+bi)(c+di) = ac-bd+(ad+bc)i
$$

**Carré** — l'identité remarquable $(a+b)^2 = a^2+2ab+b^2$ s'applique telle quelle, en n'oubliant pas d'élever coefficient **et** $i$ au carré dans le terme $b^2$. Une fois développée, elle donne

$$
(a+bi)^2 = a^2-b^2+2abi
$$

**Le cas d'une soustraction, où l'on se trompe le plus.** Pour $(1-2i)^2$, deux façons de faire, toutes deux justes :

$$
\underbrace{1^2+2\times 1\times(-2i)+(-2i)^2}_{(a+b)^2 \text{ avec } b = -2i}
\qquad\text{ou}\qquad
\underbrace{1^2-2\times 1\times 2i+(2i)^2}_{(a-b)^2 \text{ avec } b = +2i}
$$

Les deux donnent $1-4i-4 = -3-4i$. Ce qu'il ne faut **pas** faire, c'est les mélanger : poser $b = -2i$ **et** utiliser la formule en $-2ab$ compterait le signe moins deux fois. La règle simple : **soit le moins est dans $b$, soit il est dans la formule — jamais les deux.**

Deux carrés à connaître par cœur, ils reviennent sans cesse :

$$
(1+i)^2 = 2i \qquad\text{et}\qquad (1-i)^2 = -2i
$$
::

::extrait-cours{id="cours-conjugue-quotient" titre="Conjugué et quotient" source="/cours/a1/remise-a-niveau-maths/nombres-complexes/cours#_2-les-opérations"}
Le **conjugué** de $z = a+bi$ est $\bar z = a-bi$ : on change le signe de la partie imaginaire. Sa propriété décisive :

$$
z\bar z = a^2+b^2 \quad\text{— un réel positif}
$$

Autres règles : $\overline{\bar z} = z$, $\overline{z_1+z_2} = \overline{z_1}+\overline{z_2}$, $\overline{z_1z_2} = \overline{z_1}\,\overline{z_2}$. Et deux caractérisations : $z$ est réel $\iff z = \bar z$ ; $z$ est imaginaire pur $\iff z = -\bar z$.

**Quotient.** Un quotient n'est pas sous forme algébrique tant qu'il reste un $i$ au dénominateur. On multiplie donc **en haut et en bas** par le conjugué du dénominateur, ce qui rend celui-ci réel :

$$
\frac{z_1}{z_2} = \frac{z_1\overline{z_2}}{z_2\overline{z_2}} = \frac{z_1\overline{z_2}}{\lvert z_2\rvert^2}
$$

On termine toujours en **séparant la fraction en deux**, pour faire apparaître la forme $a+bi$.
::

::extrait-cours{id="cours-second-degre" titre="Équation du second degré à coefficients réels" source="/cours/a1/remise-a-niveau-maths/nombres-complexes/cours#_3-équation-du-second-degré"}
Pour $az^2+bz+c = 0$ avec $a$, $b$, $c$ réels et $a\neq 0$, on calcule $\Delta = b^2-4ac$ comme dans $\mathbb{R}$.

- Si $\Delta \geq 0$ : les racines réelles habituelles.
- Si $\Delta < 0$ : **deux racines complexes conjuguées**

$$
z = \frac{-b\pm i\sqrt{-\Delta}}{2a}
$$

**Ne jamais écrire $\sqrt{\Delta}$ quand $\Delta<0$.** On écrit $\Delta = -\lvert\Delta\rvert = \left(i\sqrt{\lvert\Delta\rvert}\right)^2$, et c'est $i\sqrt{-\Delta}$ qui prend la place de $\sqrt\Delta$.

Les coefficients étant réels, les racines sont toujours conjuguées l'une de l'autre : c'est une vérification gratuite. On peut aussi contrôler par $S = -\dfrac{b}{a}$ et $P = \dfrac{c}{a}$.
::

::extrait-cours{id="cours-affixes" titre="Affixes, distances et milieu" source="/cours/a1/remise-a-niveau-maths/nombres-complexes/cours#_4-points-vecteurs-et-affixes"}
Le plan est muni d'un repère orthonormé direct. Au point $M(x;y)$ — comme au vecteur $\vec w\,(x;y)$ — on associe son **affixe** $z = x+yi$.

$$
z_{\overrightarrow{AB}} = z_B-z_A \quad (\text{extrémité moins origine}) \qquad AB = \lvert z_B-z_A\rvert
$$

$$
z_I = \frac{z_A+z_B}{2} \quad (\text{milieu de } [AB])
$$

Le **module** $\lvert z\rvert = \sqrt{x^2+y^2}$ est la distance $OM$ : c'est toujours un réel positif.

Pour la **nature d'un triangle**, on calcule les trois longueurs : deux égales donnent un triangle isocèle, et la réciproque du théorème de Pythagore décide s'il est rectangle.
::

::extrait-cours{id="cours-module-exponentielle" titre="Module, argument et forme exponentielle" source="/cours/a1/remise-a-niveau-maths/nombres-complexes/cours#_5-module-et-argument"}
Pour $z = x+yi$ non nul :

$$
r = \lvert z\rvert = \sqrt{x^2+y^2} \qquad\text{puis}\qquad \cos\theta = \frac{x}{r}, \quad \sin\theta = \frac{y}{r}
$$

**Le module d'abord, l'argument ensuite** : c'est le module qui sert à normaliser.

L'argument exige **cosinus et sinus**. Le cosinus seul laisse deux angles en concurrence ($\cos\theta = \frac12$ ne départage pas $\frac{\pi}{3}$ de $-\frac{\pi}{3}$) ; c'est le signe du sinus qui tranche, autrement dit le quadrant où se trouve le point.

L'argument n'est défini qu'**à $2\pi$ près**, d'où la mention « mod $2\pi$ ».

Tout complexe non nul s'écrit

$$
z = re^{i\theta}, \qquad r = \lvert z\rvert > 0, \quad \theta = \arg z
$$

avec $e^{i\theta} = \cos\theta+i\sin\theta$. La contrainte $r>0$ n'est pas négociable : $-2e^{i\theta}$ n'est pas une forme exponentielle.

Les opérations deviennent alors élémentaires — **les modules se multiplient ou se divisent, les arguments s'ajoutent ou se soustraient** :

$$
r_1e^{i\theta_1}\times r_2e^{i\theta_2} = r_1r_2\,e^{i(\theta_1+\theta_2)}
\qquad
\frac{r_1e^{i\theta_1}}{r_2e^{i\theta_2}} = \frac{r_1}{r_2}\,e^{i(\theta_1-\theta_2)}
$$

**Formule de Moivre** — c'est elle qui rend les grandes puissances calculables :

$$
\left(re^{i\theta}\right)^n = r^n e^{in\theta}
$$

L'angle obtenu se ramène ensuite dans $]-\pi;\pi]$ en retirant un nombre entier de tours, c'est-à-dire modulo $2\pi$.
::
