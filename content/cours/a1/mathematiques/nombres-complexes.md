---
title: Nombres complexes
description: Forme algébrique, équations du second degré dans C, affixes et forme exponentielle. Quatre exercices avec indices et solutions détaillées.
interactif: true
annee: A1
matiere: Mathématiques
ordre: 3
icone: i-lucide-git-compare-arrows
---

::rappel{titre="La boîte à outils du cours"}
- **Opérations** : on calcule avec $i$ comme avec une variable algébrique, en remplaçant $i^2$ par $-1$.
- **Conjugué** : $\overline{a+bi} = a-bi$, avec la propriété clé $z\bar{z} = a^2+b^2$ — un réel.
- **Quotients** : pour mettre $\dfrac{z_1}{z_2}$ sous forme algébrique, **multiplier numérateur et dénominateur par le conjugué du dénominateur**.
- **Second degré** : $\Delta = b^2-4ac$ ; si $\Delta < 0$, deux racines complexes conjuguées $z = \dfrac{-b \pm i\sqrt{-\Delta}}{2a}$.
- **Affixes** : au point $M(x,y)$ — ou au vecteur $\vec{w}(x,y)$ — on associe $z = x+yi$.
- **Module et argument** : $\lvert z \rvert = \sqrt{x^2+y^2}$, puis $\cos\theta = \dfrac{x}{\lvert z \rvert}$ et $\sin\theta = \dfrac{y}{\lvert z \rvert}$.
- **Milieu** : $z_M = \dfrac{z_A+z_B}{2}$. **Distance** : $AB = \lvert z_B-z_A \rvert$.
- **Forme exponentielle** : $z = re^{i\theta}$ avec $r = \lvert z \rvert > 0$.
::

:::exercice{titre="Exercice 1" theme="Forme algébrique d'une somme, d'un produit et d'un quotient"}
On pose $z_1 = 2+3i$ et $z_2 = 4-2i$. Donner la forme algébrique de chacune des expressions suivantes.

::question{label="a)"}
$z_1 + z_2$

#indice
L'addition de deux complexes se fait « composante par composante », exactement comme pour des vecteurs : on additionne les parties réelles entre elles, et les parties imaginaires entre elles. Aucune règle particulière à connaître ici, $i$ se comporte comme une variable qu'on factorise.

#solution
On regroupe les parties réelles d'un côté, les parties imaginaires de l'autre :

$$z_1+z_2 = (2+4)+(3-2)i = 6+i$$

La forme algébrique cherchée est donc $\boxed{6+i}$, de partie réelle $6$ et de partie imaginaire $1$.
::

::question{label="b)"}
$z_1 \times z_2$

#indice
Développe le produit comme un produit de deux binômes (double distributivité, la même que pour $(a+b)(c+d)$). Le seul point spécifique aux complexes intervient à la fin : il reste un terme en $i^2$, qu'il faut remplacer par $-1$ — attention, cela change le signe de ce terme et il rejoint alors la partie réelle.

#solution
Double distributivité :

$$z_1 z_2 = (2+3i)(4-2i) = 8-4i+12i-6i^2$$

On remplace $i^2$ par $-1$, donc $-6i^2 = +6$ :

$$z_1 z_2 = 8+6+(-4+12)i = \boxed{14+8i}$$
::

::question{label="c)"}
$z_1^2$

#indice
C'est un carré : l'identité remarquable $(a+b)^2 = a^2+2ab+b^2$ s'applique telle quelle. Le piège classique est le terme $(3i)^2$ : n'oublie pas d'élever **à la fois** le $3$ et le $i$ au carré.

#solution
Identité remarquable, avec $a = 2$ et $b = 3i$ :

$$z_1^2 = (2+3i)^2 = 4+2\times 2\times 3i+(3i)^2$$

Or $(3i)^2 = 9i^2 = -9$, d'où :

$$z_1^2 = 4-9+12i = \boxed{-5+12i}$$
::

::question{label="d)"}
$z_1 \times \overline{z_1}$

#indice
Tu peux développer, mais il y a beaucoup plus rapide : le produit d'un complexe par son conjugué est une propriété du cours qui donne directement un **nombre réel**. Regarde la formule $z\bar z = a^2+b^2$ — le résultat ne comporte aucun $i$.

#solution
C'est exactement la propriété du cours $z\bar z = a^2+b^2$, avec $a = 2$ et $b = 3$ :

$$z_1\overline{z_1} = 2^2+3^2 = 4+9 = \boxed{13}$$

Vérification en développant, si l'on préfère : $(2+3i)(2-3i) = 4-9i^2 = 4+9 = 13$. C'est le carré du module de $z_1$, et c'est précisément ce qui rend la méthode du conjugué utile aux questions suivantes.
::

::question{label="e)"}
$\dfrac{1}{z_2}$

#indice
Un quotient n'est pas sous forme algébrique tant qu'il reste un $i$ au dénominateur. La méthode du cours consiste à multiplier haut et bas par le conjugué du dénominateur : grâce à la question **d)**, le dénominateur devient alors un réel, et il ne reste qu'à séparer les deux morceaux de la fraction.

#solution
On multiplie numérateur et dénominateur par $\overline{z_2} = 4+2i$ :

$$\frac{1}{z_2} = \frac{\overline{z_2}}{z_2\overline{z_2}} = \frac{4+2i}{4^2+2^2} = \frac{4+2i}{20}$$

Il reste à séparer partie réelle et partie imaginaire, puis à simplifier chaque fraction :

$$\frac{1}{z_2} = \frac{4}{20}+\frac{2}{20}i = \boxed{\frac{1}{5}+\frac{1}{10}i}$$
::

::question{label="f)"}
$\dfrac{z_1}{z_2}$

#indice
Même méthode qu'en **e)** : on multiplie haut et bas par $\overline{z_2}$. Le dénominateur a déjà été calculé à la question précédente, il ne reste donc qu'un produit de deux complexes à développer au numérateur — attention à ne pas confondre $\overline{z_2}$ avec $z_2$ dans ce développement.

#solution
On multiplie par le conjugué du dénominateur :

$$\frac{z_1}{z_2} = \frac{z_1\overline{z_2}}{z_2\overline{z_2}} = \frac{(2+3i)(4+2i)}{20}$$

Développement du numérateur :

$$(2+3i)(4+2i) = 8+4i+12i+6i^2 = 8-6+16i = 2+16i$$

D'où :

$$\frac{z_1}{z_2} = \frac{2+16i}{20} = \boxed{\frac{1}{10}+\frac{4}{5}i}$$
::
:::

:::exercice{titre="Exercice 2" theme="Équation du second degré à discriminant négatif"}
Résoudre dans $\mathbb{C}$ l'équation $x^2+x+1 = 0$.

::question{label="1."}
Déterminer l'ensemble des solutions.

#indice
La méthode est exactement celle du second degré vue au lycée : on identifie $a$, $b$, $c$ puis on calcule le discriminant. La seule différence est ce qu'on fait quand $\Delta < 0$ : dans $\mathbb{R}$ on concluait « pas de solution », dans $\mathbb{C}$ on écrit $\sqrt{\Delta} = i\sqrt{-\Delta}$ et les deux racines existent bel et bien.

#solution
Ici $a = 1$, $b = 1$, $c = 1$. Le discriminant vaut :

$$\Delta = b^2-4ac = 1-4 = -3 < 0$$

$\Delta$ est strictement négatif : l'équation admet **deux racines complexes conjuguées**, données par la formule du cours avec $\sqrt{-\Delta} = \sqrt{3}$ :

$$z_1 = \frac{-b-i\sqrt{-\Delta}}{2a} = \frac{-1-i\sqrt{3}}{2}, \qquad z_2 = \frac{-1+i\sqrt{3}}{2}$$

$$\boxed{S = \left\{\frac{-1-i\sqrt{3}}{2},\; \frac{-1+i\sqrt{3}}{2}\right\}}$$

**Vérification** par somme et produit des racines : $z_1+z_2 = -1 = -\dfrac{b}{a}$, et $z_1z_2 = \dfrac{(-1)^2-(i\sqrt3)^2}{4} = \dfrac{1+3}{4} = 1 = \dfrac{c}{a}$. Les deux correspondent.
::
:::

:::exercice{titre="Exercice 3" theme="Lecture graphique et affixes"}
Le repère est orthonormé, un carreau valant une unité. Les points lus sur la figure sont $M_1(2,1)$, $M_2(0,3)$, $M_3(-2,0)$, $M_4(4,2)$ et $M_5(-4,-3)$.

::question{label="a)"}
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

::question{label="b)"}
Donner l'affixe du vecteur $\overrightarrow{M_2M_4}$.

#indice
Souviens-toi de la formule des coordonnées d'un vecteur : $\overrightarrow{AB}$ a pour coordonnées $(x_B-x_A,\ y_B-y_A)$. La même règle vaut pour les affixes — « extrémité moins origine ». Le sens compte : $\overrightarrow{M_2M_4}$ et $\overrightarrow{M_4M_2}$ ont des affixes opposées.

#solution
L'affixe d'un vecteur $\overrightarrow{AB}$ est $z_B-z_A$, soit ici :

$$z_{\overrightarrow{M_2M_4}} = z_4-z_2 = (4+2i)-3i = \boxed{4-i}$$

On peut le relire sur la figure : pour aller de $M_2(0,3)$ à $M_4(4,2)$, on avance de $4$ vers la droite et on descend de $1$, ce qui correspond bien au vecteur de coordonnées $(4,-1)$.
::

::question{label="c)"}
Calculer l'affixe du milieu du segment $[M_2M_3]$.

#indice
La formule du milieu se transpose des coordonnées aux affixes sans changement : c'est la moyenne des deux affixes. Attention à bien diviser **les deux** parties par $2$, la réelle comme l'imaginaire.

#solution
Propriété du cours : $z_M = \dfrac{z_A+z_B}{2}$. Avec $z_2 = 3i$ et $z_3 = -2$ :

$$z = \frac{z_2+z_3}{2} = \frac{3i+(-2)}{2} = \frac{-2+3i}{2} = \boxed{-1+\frac{3}{2}i}$$

Le milieu a donc pour coordonnées $\left(-1,\ \dfrac{3}{2}\right)$, ce qui est cohérent avec une lecture graphique entre $M_2(0,3)$ et $M_3(-2,0)$.
::
:::

:::exercice{titre="Exercice 4" theme="Forme exponentielle"}
Donner une forme exponentielle du nombre complexe $z = \sqrt{3}-3i$.

::question{label="1."}
Écrire $z$ sous la forme $re^{i\theta}$.

#indice
La méthode se déroule toujours en trois temps : module, puis argument, puis écriture finale. Pour l'argument, calcule **les deux** valeurs $\cos\theta$ et $\sin\theta$ — une seule ne suffit pas à déterminer l'angle, puisque deux angles distincts partagent le même cosinus. Ici le signe de la partie imaginaire t'indique déjà dans quel demi-plan chercher.

#solution
**Étape 1 — le module.** Avec $x = \sqrt{3}$ et $y = -3$ :

$$\lvert z \rvert = \sqrt{(\sqrt{3})^2+(-3)^2} = \sqrt{3+9} = \sqrt{12} = 2\sqrt{3}$$

**Étape 2 — l'argument.** On calcule le cosinus et le sinus :

$$\cos\theta = \frac{\sqrt{3}}{2\sqrt{3}} = \frac{1}{2} \qquad\text{et}\qquad \sin\theta = \frac{-3}{2\sqrt{3}} = -\frac{\sqrt{3}}{2}$$

Le second calcul mérite un mot : $\dfrac{3}{2\sqrt3} = \dfrac{3\sqrt3}{2\times 3} = \dfrac{\sqrt3}{2}$ après multiplication par $\sqrt3$ en haut et en bas.

L'angle remarquable dont le cosinus vaut $\dfrac{1}{2}$ et le sinus $-\dfrac{\sqrt{3}}{2}$ est :

$$\theta = -\frac{\pi}{3} \quad [2\pi]$$

**Étape 3 — conclusion.**

$$\boxed{z = 2\sqrt{3}\,e^{-i\pi/3}}$$

**Vérification** : $2\sqrt{3}\left(\cos\left(-\frac{\pi}{3}\right)+i\sin\left(-\frac{\pi}{3}\right)\right) = 2\sqrt{3}\left(\frac{1}{2}-i\frac{\sqrt{3}}{2}\right) = \sqrt{3}-3i$. On retrouve bien $z$.
::
:::
