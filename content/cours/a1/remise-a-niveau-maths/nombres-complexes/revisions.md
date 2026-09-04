---
title: Révisions nombres complexes — exercices
description: La fiche de révisions du chapitre, dans l'ordre du sujet — formes algébrique, trigonométrique et exponentielle, équations dans C, ensembles de points et transformations du plan.
type: exercices
annee: A1
matiere: Remise à niveau en maths
ordre: 4
icone: i-lucide-pencil-line
---

::rappel{titre="Comment se servir de cette page" icone="i-lucide-compass"}
La fiche de révisions en entier, dans l'ordre du sujet. Sous chaque question, trois boutons — et aucun ne quitte la page :

- **Indice** — la piste à suivre, sans le résultat.
- **Voir la solution** — la correction rédigée, étape par étape.
- **Cours** — un tiroir avec le rappel utile à cette question précise, et le lien vers la section du cours.

Cette fiche va bien plus loin que le TD : elle traverse les **trois écritures** d'un complexe — algébrique, trigonométrique, exponentielle — puis les met au service de la géométrie du plan. Le fil conducteur, d'un bout à l'autre :

1. quelle **écriture** est la bonne pour ce calcul ? Algébrique pour les sommes, exponentielle pour les produits et les puissances.
2. si l'énoncé mélange les deux, **convertir** d'abord, calculer ensuite.
3. dès qu'apparaît $\bar z$ ou une condition du type « est réel », **poser $z = x+iy$** et séparer partie réelle et partie imaginaire.
::

::carte-lien{to="/cours/a1/remise-a-niveau-maths/nombres-complexes/cours" titre="Le cours du chapitre" description="Forme algébrique, opérations, second degré, affixes, module et argument, formes trigonométrique et exponentielle, ensembles de points" type="cours" meta="8 sections"}
::

::carte-lien{to="/cours/a1/remise-a-niveau-maths/nombres-complexes/exercices" titre="Les exercices du TD" description="Les quatre exercices du programme : formes algébriques, second degré, lecture graphique et forme exponentielle" type="exercices" meta="4 exercices"}
::

::carte-lien{to="/cours/a1/remise-a-niveau-maths/nombres-complexes/entrainement" titre="La fiche d’entraînement" description="Si cette fiche démarre trop haut : quinze questions en cinq paliers, de « qu’est-ce que i » jusqu’à la formule de Moivre" type="entrainement" meta="15 questions"}
::

:::exercice{titre="Exercice 1" theme="Forme algébrique : sommes, produits et puissances" icone="i-lucide-plus"}
Donner la forme algébrique des complexes suivants, c'est-à-dire les écrire sous la forme $a+bi$ avec $a$ et $b$ réels.

::exo-question{label="1." cours="cours-operations"}
$$
z = 3+2i-1+3i
$$

#indice
Aucun produit ici, seulement une somme : on regroupe les termes sans $i$ entre eux, et les termes en $i$ entre eux. Le $i$ se comporte exactement comme une lettre qu'on factorise.

#solution
On regroupe les parties réelles d'un côté, les parties imaginaires de l'autre :

$$
z = (3-1)+(2+3)i
$$

$$
\boxed{z = 2+5i}
$$
::

::exo-question{label="2." cours="cours-operations"}
$$
z = 6+i-(2+4i)
$$

#indice
Le piège est la parenthèse précédée d'un moins : elle change le signe des **deux** termes qu'elle contient, pas seulement du premier.

#solution
On distribue le signe moins avant de regrouper :

$$
z = 6+i-2-4i = (6-2)+(1-4)i
$$

$$
\boxed{z = 4-3i}
$$
::

::exo-question{label="3." cours="cours-operations"}
$$
z = 12-3i-4-5+8i
$$

#indice
Cinq termes en vrac, aucune parenthèse : il suffit de trier. Trois réels d'un côté, deux imaginaires de l'autre.

#solution
$$
z = (12-4-5)+(-3+8)i
$$

$$
\boxed{z = 3+5i}
$$
::

::exo-question{label="4." cours="cours-operations"}
$$
z = (1+2i)(4+3i)
$$

#indice
Double distributivité, comme pour $(a+b)(c+d)$. Le seul point propre aux complexes arrive à la fin : il reste un terme en $i^2$, qu'il faut remplacer par $-1$ — ce qui change son signe et le fait passer du côté réel.

#solution
On développe les quatre produits :

$$
z = 4+3i+8i+6i^2
$$

On remplace $i^2$ par $-1$, donc $6i^2 = -6$ :

$$
z = (4-6)+(3+8)i
$$

$$
\boxed{z = -2+11i}
$$
::

::exo-question{label="5." cours="cours-operations"}
$$
z = (3-i)(2+7i)
$$

#indice
Même méthode qu'à la question précédente. Surveille le signe du terme en $i^2$ : ici le $i$ du premier facteur porte déjà un moins, et $-i\times 7i = -7i^2 = +7$.

#solution
$$
z = 6+21i-2i-7i^2 = 6+7+(21-2)i
$$

$$
\boxed{z = 13+19i}
$$
::

::exo-question{label="6." cours="cours-operations"}
$$
z = (1+i)^2
$$

#indice
C'est une identité remarquable, $(a+b)^2 = a^2+2ab+b^2$, avec $b = i$. Le terme $b^2$ vaut donc $i^2 = -1$ : il annule exactement le $a^2$.

Ce résultat mérite d'être retenu, il resservira aux questions 9 et 10 et dans tout le reste de la fiche.

#solution
$$
z = 1^2+2\times 1\times i+i^2 = 1+2i-1
$$

$$
\boxed{z = 2i}
$$

**À retenir** : $(1+i)^2 = 2i$ et, de la même façon, $(1-i)^2 = -2i$. Ces deux carrés transforment un binôme en un imaginaire pur, ce qui simplifie énormément les puissances élevées.
::

::exo-question{label="7." cours="cours-operations"}
$$
z = \left(3+i\sqrt5\right)\left(3-i\sqrt5\right)
$$

#indice
Ne développe pas quatre produits pour rien : les deux facteurs sont **conjugués** l'un de l'autre. C'est l'identité $(a+b)(a-b) = a^2-b^2$, et le résultat est forcément un réel positif.

#solution
Identité remarquable, avec $a = 3$ et $b = i\sqrt5$ :

$$
z = 3^2-\left(i\sqrt5\right)^2 = 9-i^2\times 5 = 9+5
$$

$$
\boxed{z = 14}
$$

C'est le cas général $z\bar z = \lvert z\rvert^2$ : le produit d'un complexe par son conjugué est toujours un réel positif, et c'est exactement ce qui rend possible la méthode de l'exercice 2.
::

::exo-question{label="8." cours="cours-operations"}
$$
z = (2-5i)^2
$$

#indice
Identité remarquable $(a-b)^2 = a^2-2ab+b^2$ avec $a = 2$ et $b = 5i$. Attention au dernier terme : $b^2 = (5i)^2 = 25i^2 = -25$, il est **négatif** alors que le signe devant lui est un plus.

#solution
$$
z = 4-2\times 2\times 5i+(5i)^2 = 4-20i+25i^2 = 4-25-20i
$$

$$
\boxed{z = -21-20i}
$$
::

::exo-question{label="9." cours="cours-operations"}
$$
z = (1+i)(2-3i)(1+i)
$$

#indice
Trois facteurs, mais deux sont identiques : commence par regrouper les deux $(1+i)$, dont le carré est déjà connu depuis la question 6. Le calcul se réduit alors à un seul produit.

#solution
On regroupe les facteurs égaux :

$$
z = (1+i)^2(2-3i) = 2i(2-3i)
$$

On distribue, puis $-6i^2 = +6$ :

$$
z = 4i-6i^2 = 6+4i
$$

$$
\boxed{z = 6+4i}
$$
::

::exo-question{label="10." cours="cours-operations"}
$$
z = (2+i)^2(1-2i)
$$

#indice
Deux étapes, dans l'ordre : le carré d'abord, le produit ensuite. Ne développe surtout pas tout d'un bloc, c'est la porte ouverte aux erreurs de signe.

#solution
**Le carré.**

$$
(2+i)^2 = 4+4i+i^2 = 3+4i
$$

**Le produit.**

$$
z = (3+4i)(1-2i) = 3-6i+4i-8i^2 = 3+8+(-6+4)i
$$

$$
\boxed{z = 11-2i}
$$
::
:::

:::exercice{titre="Exercice 2" theme="Rendre réel le dénominateur d'un quotient" icone="i-lucide-divide"}
Donner la forme algébrique des complexes suivants en rendant le dénominateur réel.

Le principe est le même à chaque fois : **multiplier haut et bas par le conjugué du dénominateur**. Comme $z\bar z = \lvert z\rvert^2$, le dénominateur devient un réel, et il ne reste qu'à diviser chaque partie.

::exo-question{label="1." cours="cours-conjugue-quotient"}
$$
z = \frac{1}{1-i}
$$

#indice
Le conjugué de $1-i$ est $1+i$. Multiplie numérateur et dénominateur par ce nombre : au dénominateur tu obtiendras $1^2+1^2$, sans aucun $i$.

#solution
On multiplie haut et bas par $1+i$ :

$$
z = \frac{1\times(1+i)}{(1-i)(1+i)} = \frac{1+i}{1^2+1^2} = \frac{1+i}{2}
$$

$$
\boxed{z = \frac12+\frac12 i}
$$

**Contrôle.** $\left(\dfrac12+\dfrac12 i\right)(1-i) = \dfrac12-\dfrac12 i+\dfrac12 i-\dfrac12 i^2 = \dfrac12+\dfrac12 = 1$. C'est bien l'inverse de $1-i$.
::

::exo-question{label="2." cours="cours-conjugue-quotient"}
$$
z = \frac{1}{2-i\sqrt3}
$$

#indice
La racine ne change rien à la méthode : le conjugué de $2-i\sqrt3$ est $2+i\sqrt3$, et le dénominateur deviendra $2^2+\left(\sqrt3\right)^2$.

#solution
$$
z = \frac{2+i\sqrt3}{\left(2-i\sqrt3\right)\left(2+i\sqrt3\right)} = \frac{2+i\sqrt3}{4+3} = \frac{2+i\sqrt3}{7}
$$

$$
\boxed{z = \frac27+\frac{\sqrt3}{7}i}
$$
::

::exo-question{label="3." cours="cours-conjugue-quotient"}
$$
z = \frac{1}{4-3i}
$$

#indice
Conjugué $4+3i$, dénominateur $4^2+3^2 = 25$. Un cas où les nombres tombent particulièrement bien.

#solution
$$
z = \frac{4+3i}{4^2+3^2} = \frac{4+3i}{25}
$$

$$
\boxed{z = \frac{4}{25}+\frac{3}{25}i}
$$
::

::exo-question{label="4." cours="cours-conjugue-quotient"}
$$
z = \frac{4-6i}{3+2i}
$$

#indice
Ici le numérateur n'est plus $1$ : après multiplication par le conjugué $3-2i$, il faudra développer le produit $(4-6i)(3-2i)$ comme à l'exercice 1. Le résultat est plus simple qu'il n'y paraît.

#solution
On multiplie haut et bas par $3-2i$ :

$$
z = \frac{(4-6i)(3-2i)}{3^2+2^2} = \frac{12-8i-18i+12i^2}{13}
$$

$$
z = \frac{12-12-26i}{13} = \frac{-26i}{13}
$$

$$
\boxed{z = -2i}
$$

La partie réelle est nulle : $z$ est un **imaginaire pur**.
::

::exo-question{label="5." cours="cours-conjugue-quotient"}
$$
z = \frac{5+15i}{1+2i}
$$

#indice
Conjugué $1-2i$, dénominateur $1+4 = 5$. Tu peux aussi factoriser $5$ au numérateur pour alléger le calcul.

#solution
$$
z = \frac{(5+15i)(1-2i)}{1^2+2^2} = \frac{5-10i+15i-30i^2}{5} = \frac{5+30+5i}{5}
$$

$$
\boxed{z = 7+i}
$$
::

::exo-question{label="6." cours="cours-conjugue-quotient"}
$$
z = \frac{1+2i}{1-2i}
$$

#indice
Numérateur et dénominateur sont conjugués l'un de l'autre. Le dénominateur devient donc $\lvert 1+2i\rvert^2 = 5$, et le numérateur devient le **carré** de $1+2i$.

#solution
$$
z = \frac{(1+2i)(1+2i)}{1^2+2^2} = \frac{(1+2i)^2}{5} = \frac{1+4i+4i^2}{5} = \frac{-3+4i}{5}
$$

$$
\boxed{z = -\frac35+\frac45 i}
$$

**Contrôle utile.** $\lvert z\rvert = \dfrac{\sqrt{9+16}}{5} = 1$ : le quotient de deux complexes conjugués est toujours de module $1$, puisqu'ils ont le même module.
::

::exo-question{label="7." cours="cours-conjugue-quotient"}
$$
z = \frac{3-6i}{3+i}+\frac{4}{3-i}
$$

#indice
Deux quotients à traiter **séparément** — chacun avec le conjugué de **son** dénominateur — puis on additionne les deux formes algébriques obtenues. Ne cherche pas de dénominateur commun, ce serait plus long.

#solution
**Premier quotient**, conjugué $3-i$, dénominateur $9+1 = 10$ :

$$
\frac{3-6i}{3+i} = \frac{(3-6i)(3-i)}{10} = \frac{9-3i-18i+6i^2}{10} = \frac{3-21i}{10}
$$

**Second quotient**, conjugué $3+i$ :

$$
\frac{4}{3-i} = \frac{4(3+i)}{10} = \frac{12+4i}{10}
$$

**Somme**, les deux dénominateurs valant déjà $10$ :

$$
z = \frac{3+12+(-21+4)i}{10} = \frac{15-17i}{10}
$$

$$
\boxed{z = \frac32-\frac{17}{10}i}
$$
::

::exo-question{label="8." cours="cours-conjugue-quotient"}
$$
z = \left(\frac{4-6i}{2-3i}\right)\left(\frac{1+3i}{3+2i}\right)
$$

#indice
Avant de te lancer dans deux multiplications par un conjugué, **regarde le premier quotient** : le numérateur n'est-il pas un multiple du dénominateur ? Une simplification immédiate évite tout le calcul.

#solution
**Le premier quotient se simplifie**, car $4-6i = 2(2-3i)$ :

$$
\frac{4-6i}{2-3i} = \frac{2(2-3i)}{2-3i} = 2
$$

**Le second quotient**, conjugué $3-2i$, dénominateur $9+4 = 13$ :

$$
\frac{1+3i}{3+2i} = \frac{(1+3i)(3-2i)}{13} = \frac{3-2i+9i-6i^2}{13} = \frac{9+7i}{13}
$$

**Produit** :

$$
z = 2\times\frac{9+7i}{13}
$$

$$
\boxed{z = \frac{18}{13}+\frac{14}{13}i}
$$
::
:::

:::exercice{titre="Exercice 3" theme="Équations du premier degré et équations produit" icone="i-lucide-equal"}
Résoudre dans $\mathbb{C}$ les équations suivantes. Donner la solution sous forme algébrique.

Une équation du premier degré se résout dans $\mathbb{C}$ **exactement comme dans $\mathbb{R}$**, en trois temps : on trie les termes, on factorise par $z$, on divise. La seule différence est qu'à la fin, le quotient obtenu se traite par la méthode de l'exercice 2.

⚠️ **Trier, c'est déplacer — et déplacer, c'est changer de signe.** Tout terme qui traverse le signe égal change de signe ; ceux qui restent de leur côté n'y touchent pas. C'est là que se perdent la plupart des points.

::exo-question{label="1." cours="cours-equations"}
$$
(1+i)z = 3-i
$$

#indice
Une équation du premier degré se résout dans $\mathbb{C}$ exactement comme dans $\mathbb{R}$ : on isole $z$ en divisant par le coefficient. Le quotient obtenu se traite ensuite par la méthode de l'exercice 2.

#solution
On isole $z$ :

$$
z = \frac{3-i}{1+i}
$$

On multiplie haut et bas par le conjugué $1-i$, le dénominateur valant $1+1 = 2$ :

$$
z = \frac{(3-i)(1-i)}{2} = \frac{3-3i-i+i^2}{2} = \frac{2-4i}{2}
$$

$$
\boxed{z = 1-2i}
$$

**Vérification.** $(1+i)(1-2i) = 1-2i+i-2i^2 = 3-i$. C'est bien le second membre.
::

::exo-question{label="2." cours="cours-equations"}
$$
2z+1-i = iz+2
$$

#indice
Il y a des $z$ des deux côtés : on les rassemble d'un côté, les constantes de l'autre, puis on **factorise $z$**. Le coefficient obtenu, $2-i$, n'est pas réel, mais cela ne change rien à la méthode.

#solution
**On trie les termes.** Ceux qui contiennent $z$ vont à gauche, les constantes à droite. Trois termes doivent donc traverser le signe égal, et chacun change de signe en le faisant :

- $iz$ était à droite → il passe à gauche en $-iz$ ;
- $+1$ était à gauche → il passe à droite en $-1$ ;
- $-i$ était à gauche → il passe à droite en $+i$.

$$
2z-iz = 2-1+i
$$

Le membre de droite se réduit, $2-1 = 1$. On **factorise** ensuite le membre de gauche par $z$ :

$$
(2-i)z = 1+i
$$

$$
z = \frac{1+i}{2-i} = \frac{(1+i)(2+i)}{4+1} = \frac{2+i+2i+i^2}{5} = \frac{1+3i}{5}
$$

$$
\boxed{z = \frac15+\frac35 i}
$$
::

::exo-question{label="3." cours="cours-equations"}
$$
(2z+1-i)(iz+3) = 0
$$

#indice
Un produit est nul si et seulement si l'un de ses facteurs l'est — cette règle vaut dans $\mathbb{C}$ comme dans $\mathbb{R}$. Deux équations du premier degré à résoudre, donc deux solutions.

Pour la seconde, souviens-toi que $\dfrac{1}{i} = -i$ : diviser par $i$ revient à multiplier par $-i$.

#solution
**Premier facteur.**

$$
2z+1-i = 0 \quad\Longrightarrow\quad z = \frac{-1+i}{2}
$$

**Second facteur.**

$$
iz+3 = 0 \quad\Longrightarrow\quad z = \frac{-3}{i} = -3\times\frac1i = -3\times(-i) = 3i
$$

$$
\boxed{S = \left\{-\frac12+\frac12 i\ ;\ 3i\right\}}
$$

**Vérification du second.** $i\times 3i+3 = 3i^2+3 = -3+3 = 0$.
::

::exo-question{label="4." cours="cours-equations"}
$$
\frac{z+1}{z-1} = 2i
$$

#indice
Commence par écarter la valeur interdite : le dénominateur ne doit pas être nul, donc $z \neq 1$. Multiplie ensuite les deux membres par $z-1$ pour retomber sur une équation du premier degré, et rassemble les $z$.

#solution
Pour $z \neq 1$, on multiplie les deux membres par $z-1$ :

$$
z+1 = 2i(z-1)
$$

On distribue le $2i$ à droite — il multiplie **les deux** termes de la parenthèse :

$$
z+1 = 2iz-2i
$$

**On trie maintenant les termes.** Il y a un terme à déplacer de chaque côté :

| Terme | Où il est | Ce qu'il devient |
|---|---|---|
| $z$ | à gauche | il y reste, inchangé |
| $+1$ | à gauche | passe à droite en $-1$ |
| $2iz$ | à droite | passe à gauche en $-2iz$ |
| $-2i$ | à droite | il y reste, inchangé |

Autrement dit, on retranche $2iz$ aux deux membres, puis $1$ aux deux membres :

$$
z+1-2iz = -2i \qquad\text{puis}\qquad z-2iz = -2i-1
$$

Le $-1$ qui apparaît à droite n'est rien d'autre que le $+1$ qui était à gauche : **en traversant le signe égal, il a changé de signe**. Le $-2i$, lui, n'a pas bougé — il était déjà du bon côté, et garde donc son signe.

On **factorise** enfin le membre de gauche par $z$ :

$$
(1-2i)z = -1-2i
$$

$$
z = \frac{-1-2i}{1-2i} = \frac{(-1-2i)(1+2i)}{1+4} = \frac{-1-2i-2i-4i^2}{5} = \frac{3-4i}{5}
$$

$$
\boxed{z = \frac35-\frac45 i}
$$

Cette valeur est bien différente de $1$, elle est donc recevable.
::

::exo-question{label="5." cours="cours-equations"}
$$
(iz+1)(z+3i)(z-1+4i) = 0
$$

#indice
Trois facteurs, donc trois équations du premier degré et trois solutions. Aucune n'est difficile : pour la première, repasse par $\dfrac1i = -i$.

#solution
**Premier facteur.**

$$
iz+1 = 0 \quad\Longrightarrow\quad z = \frac{-1}{i} = -1\times(-i) = i
$$

**Deuxième facteur.** $z+3i = 0$, donc $z = -3i$.

**Troisième facteur.** $z-1+4i = 0$, donc $z = 1-4i$.

$$
\boxed{S = \left\{i\ ;\ -3i\ ;\ 1-4i\right\}}
$$
::
:::

:::exercice{titre="Exercice 4" theme="De la forme trigonométrique à la forme algébrique" icone="i-lucide-arrow-right-left"}
Écrire sous forme algébrique les nombres donnés par leur module et leur argument, notés $[r\,;\theta]$.

Le sens facile : deux lectures dans le tableau des angles remarquables, et c'est fini.

$$
z = [r\,;\theta] = r\left(\cos\theta+i\sin\theta\right) \qquad a = r\cos\theta \qquad b = r\sin\theta
$$

::exo-question{label="1." cours="cours-trigonometrique"}
$$
z_1 = \left[3\,;\frac{\pi}{4}\right]
$$

#indice
Lis $\cos\dfrac\pi4$ et $\sin\dfrac\pi4$ dans le tableau — ils sont égaux — puis multiplie chacun par le module $3$.

#solution
$$
a = 3\cos\frac\pi4 = 3\times\frac{\sqrt2}{2} \qquad b = 3\sin\frac\pi4 = 3\times\frac{\sqrt2}{2}
$$

$$
\boxed{z_1 = \frac{3\sqrt2}{2}+\frac{3\sqrt2}{2}\,i}
$$

Partie réelle et partie imaginaire égales et positives : le point est sur la bissectrice du premier quadrant, ce qui est bien la direction de l'angle $\dfrac\pi4$.
::

::exo-question{label="2." cours="cours-trigonometrique"}
$$
z_2 = \left[4\,;\frac{\pi}{2}\right]
$$

#indice
$\dfrac\pi2$ est l'angle de l'axe vertical : le cosinus y est nul. Le résultat sera donc un imaginaire pur.

#solution
$$
a = 4\cos\frac\pi2 = 0 \qquad b = 4\sin\frac\pi2 = 4
$$

$$
\boxed{z_2 = 4i}
$$
::

::exo-question{label="3." cours="cours-trigonometrique"}
$$
z_3 = [7\,;\pi]
$$

#indice
$\pi$ est l'angle du demi-axe horizontal négatif : le sinus y est nul, le cosinus vaut $-1$. Le résultat est un réel.

#solution
$$
a = 7\cos\pi = -7 \qquad b = 7\sin\pi = 0
$$

$$
\boxed{z_3 = -7}
$$

⚠️ $-7$ a pour module $7$ et pour argument $\pi$ : le module reste **positif**, c'est l'argument qui porte le signe.
::

::exo-question{label="4." cours="cours-trigonometrique"}
$$
z_4 = [2\,;0]
$$

#indice
Argument nul : le point est sur le demi-axe horizontal positif. Un réel positif, donc, et lequel ?

#solution
$$
a = 2\cos 0 = 2 \qquad b = 2\sin 0 = 0
$$

$$
\boxed{z_4 = 2}
$$

Cas général à retenir : $[r\,;0] = r$ pour tout réel $r > 0$.
::

::exo-question{label="5." cours="cours-trigonometrique"}
$$
z_5 = \left[5\,;-\frac{\pi}{6}\right]
$$

#indice
L'angle est négatif : on tourne dans le sens horaire, donc le point est **sous** l'axe horizontal et la partie imaginaire sera négative. Le cosinus, lui, ne change pas de signe : il est pair.

#solution
$$
a = 5\cos\left(-\frac\pi6\right) = 5\cos\frac\pi6 = \frac{5\sqrt3}{2}
$$

$$
b = 5\sin\left(-\frac\pi6\right) = -5\sin\frac\pi6 = -\frac52
$$

$$
\boxed{z_5 = \frac{5\sqrt3}{2}-\frac52\,i}
$$
::

::exo-question{label="6." cours="cours-trigonometrique"}
$$
z_6 = \left[\sqrt2\,;\frac{3\pi}{4}\right]
$$

#indice
$\dfrac{3\pi}{4}$ est dans le deuxième quadrant : cosinus négatif, sinus positif. Les deux valent $\dfrac{\sqrt2}{2}$ au signe près, et le module est justement $\sqrt2$ — la simplification est totale.

#solution
$$
a = \sqrt2\times\left(-\frac{\sqrt2}{2}\right) = -1 \qquad b = \sqrt2\times\frac{\sqrt2}{2} = 1
$$

$$
\boxed{z_6 = -1+i}
$$
::

::exo-question{label="7." cours="cours-trigonometrique"}
$$
z_7 = \left[3\,;\frac{5\pi}{6}\right]
$$

#indice
Encore le deuxième quadrant. $\dfrac{5\pi}{6} = \pi-\dfrac\pi6$ : son cosinus est l'opposé de celui de $\dfrac\pi6$, son sinus est le même.

#solution
$$
a = 3\cos\frac{5\pi}{6} = -\frac{3\sqrt3}{2} \qquad b = 3\sin\frac{5\pi}{6} = \frac32
$$

$$
\boxed{z_7 = -\frac{3\sqrt3}{2}+\frac32\,i}
$$
::

::exo-question{label="8." cours="cours-trigonometrique"}
$$
z_8 = \left[\sqrt3\,;\frac{2\pi}{3}\right]
$$

#indice
$\dfrac{2\pi}{3} = \pi-\dfrac\pi3$, toujours dans le deuxième quadrant. Pense à simplifier $\sqrt3\times\dfrac{\sqrt3}{2}$ à la fin.

#solution
$$
a = \sqrt3\times\left(-\frac12\right) = -\frac{\sqrt3}{2} \qquad b = \sqrt3\times\frac{\sqrt3}{2} = \frac32
$$

$$
\boxed{z_8 = -\frac{\sqrt3}{2}+\frac32\,i}
$$
::

::exo-question{label="9." cours="cours-trigonometrique"}
$$
z = \left[4\,;-\frac{\pi}{4}\right]
$$

#indice
Angle négatif du quatrième quadrant : cosinus positif, sinus négatif, tous deux égaux à $\dfrac{\sqrt2}{2}$ au signe près.

#solution
$$
a = 4\times\frac{\sqrt2}{2} = 2\sqrt2 \qquad b = 4\times\left(-\frac{\sqrt2}{2}\right) = -2\sqrt2
$$

$$
\boxed{z = 2\sqrt2-2\sqrt2\,i}
$$
::

::exo-question{label="10." cours="cours-trigonometrique"}
$$
z = \left[5\sqrt3\,;\frac{\pi}{6}\right]
$$

#indice
Le module contient une racine : le produit $5\sqrt3\times\dfrac{\sqrt3}{2}$ va se simplifier, puisque $\sqrt3\times\sqrt3 = 3$.

#solution
$$
a = 5\sqrt3\times\frac{\sqrt3}{2} = \frac{5\times 3}{2} = \frac{15}{2} \qquad b = 5\sqrt3\times\frac12 = \frac{5\sqrt3}{2}
$$

$$
\boxed{z = \frac{15}{2}+\frac{5\sqrt3}{2}\,i}
$$
::

::exo-question{label="11." cours="cours-trigonometrique"}
$$
z = \left[3\sqrt2\,;-\frac{3\pi}{4}\right]
$$

#indice
Troisième quadrant : cosinus **et** sinus négatifs. Et là encore $\sqrt2\times\dfrac{\sqrt2}{2} = 1$ simplifie tout.

#solution
$$
a = 3\sqrt2\times\left(-\frac{\sqrt2}{2}\right) = -3 \qquad b = 3\sqrt2\times\left(-\frac{\sqrt2}{2}\right) = -3
$$

$$
\boxed{z = -3-3i}
$$
::

::exo-question{label="12." cours="cours-trigonometrique"}
$$
z = \left[7\sqrt2\,;0\right]
$$

#indice
Argument nul, donc $z$ est un réel positif — égal à son module.

#solution
$$
\boxed{z = 7\sqrt2}
$$
::

::exo-question{label="13." cours="cours-trigonometrique"}
$$
z = \left[2\sqrt3\,;-\frac{2\pi}{3}\right]
$$

#indice
$-\dfrac{2\pi}{3}$ est dans le troisième quadrant : les deux parties seront négatives.

#solution
$$
a = 2\sqrt3\times\left(-\frac12\right) = -\sqrt3 \qquad b = 2\sqrt3\times\left(-\frac{\sqrt3}{2}\right) = -3
$$

$$
\boxed{z = -\sqrt3-3i}
$$
::
:::

:::exercice{titre="Exercice 5" theme="De la forme algébrique à la forme trigonométrique" icone="i-lucide-arrow-left-right"}
Écrire sous forme trigonométrique les nombres suivants.

Le sens exigeant : un module, puis **deux** rapports à calculer. Le cosinus seul laisse toujours deux angles en concurrence, c'est le signe du sinus qui tranche.

$$
r = \sqrt{a^2+b^2} \qquad \cos\theta = \frac{a}{r} \qquad \sin\theta = \frac{b}{r}
$$

::exo-question{label="1." cours="cours-trigonometrique"}
$$
z_1 = 3
$$

#indice
Un réel positif est déjà sur le demi-axe horizontal positif. Pas besoin de calcul : quel est son module, quel est son argument ?

#solution
$$
\lvert z_1\rvert = \sqrt{3^2+0^2} = 3 \qquad \cos\theta = 1 \qquad \sin\theta = 0
$$

$$
\boxed{z_1 = [3\,;0]}
$$
::

::exo-question{label="2." cours="cours-trigonometrique"}
$$
z_2 = 2i
$$

#indice
Partie réelle nulle et partie imaginaire positive : le point est sur le demi-axe vertical **vers le haut**.

#solution
$$
\lvert z_2\rvert = 2 \qquad \cos\theta = \frac02 = 0 \qquad \sin\theta = \frac22 = 1
$$

$$
\boxed{z_2 = \left[2\,;\frac\pi2\right]}
$$
::

::exo-question{label="3." cours="cours-trigonometrique"}
$$
z_3 = -5
$$

#indice
Le module est une longueur : il vaut $5$, pas $-5$. C'est l'argument qui doit rendre compte du signe.

#solution
$$
\lvert z_3\rvert = 5 \qquad \cos\theta = \frac{-5}{5} = -1 \qquad \sin\theta = 0
$$

$$
\boxed{z_3 = [5\,;\pi]}
$$

⚠️ Écrire $[-5\,;0]$ serait faux : la forme trigonométrique exige un module **strictement positif**.
::

::exo-question{label="4." cours="cours-trigonometrique"}
$$
z_4 = -i\sqrt2
$$

#indice
Imaginaire pur de partie imaginaire négative : demi-axe vertical vers le bas.

#solution
$$
\lvert z_4\rvert = \sqrt2 \qquad \cos\theta = 0 \qquad \sin\theta = \frac{-\sqrt2}{\sqrt2} = -1
$$

$$
\boxed{z_4 = \left[\sqrt2\,;-\frac\pi2\right]}
$$
::

::exo-question{label="5." cours="cours-trigonometrique"}
$$
z = 1+i
$$

#indice
Module $\sqrt2$. Les deux rapports vaudront $\dfrac{1}{\sqrt2}$, qu'il faut rendre reconnaissable en multipliant haut et bas par $\sqrt2$.

#solution
$$
\lvert z\rvert = \sqrt{1+1} = \sqrt2
$$

$$
\cos\theta = \frac{1}{\sqrt2} = \frac{\sqrt2}{2} \qquad \sin\theta = \frac{\sqrt2}{2}
$$

Les deux positifs et égaux : premier quadrant, bissectrice.

$$
\boxed{z = \left[\sqrt2\,;\frac\pi4\right]}
$$
::

::exo-question{label="6." cours="cours-trigonometrique"}
$$
z = 3-3i
$$

#indice
Factorise $3$ pour retomber sur $3(1-i)$ : le module et l'argument se lisent alors depuis la question précédente, au signe de la partie imaginaire près.

#solution
$$
\lvert z\rvert = \sqrt{9+9} = \sqrt{18} = 3\sqrt2
$$

$$
\cos\theta = \frac{3}{3\sqrt2} = \frac{\sqrt2}{2} \qquad \sin\theta = \frac{-3}{3\sqrt2} = -\frac{\sqrt2}{2}
$$

Cosinus positif, sinus négatif : quatrième quadrant.

$$
\boxed{z = \left[3\sqrt2\,;-\frac\pi4\right]}
$$
::

::exo-question{label="7." cours="cours-trigonometrique"}
$$
z = 1+i\sqrt3
$$

#indice
Module $2$ — c'est le triangle $1$, $\sqrt3$, $2$ qui revient sans arrêt. Les rapports $\dfrac12$ et $\dfrac{\sqrt3}{2}$ désignent alors un angle du premier quadrant.

#solution
$$
\lvert z\rvert = \sqrt{1+3} = 2
$$

$$
\cos\theta = \frac12 \qquad \sin\theta = \frac{\sqrt3}{2}
$$

$$
\boxed{z = \left[2\,;\frac\pi3\right]}
$$

Attention à ne pas confondre : $\cos\theta = \dfrac12$ va avec $\dfrac\pi3$, tandis que $\cos\theta = \dfrac{\sqrt3}{2}$ va avec $\dfrac\pi6$.
::

::exo-question{label="8." cours="cours-trigonometrique"}
$$
z = 2\sqrt3-2i
$$

#indice
Même triangle qu'à la question précédente, mais les rôles sont échangés et la partie imaginaire est négative.

#solution
$$
\lvert z\rvert = \sqrt{12+4} = 4
$$

$$
\cos\theta = \frac{2\sqrt3}{4} = \frac{\sqrt3}{2} \qquad \sin\theta = \frac{-2}{4} = -\frac12
$$

Quatrième quadrant.

$$
\boxed{z = \left[4\,;-\frac\pi6\right]}
$$
::

::exo-question{label="9." cours="cours-trigonometrique"}
$$
z = \frac32-\frac{\sqrt3}{2}\,i
$$

#indice
Les fractions ne changent rien : $a = \dfrac32$ et $b = -\dfrac{\sqrt3}{2}$. Le module vaut $\sqrt{\dfrac94+\dfrac34}$, à simplifier avant de calculer les rapports.

#solution
$$
\lvert z\rvert = \sqrt{\frac94+\frac34} = \sqrt{\frac{12}{4}} = \sqrt3
$$

$$
\cos\theta = \frac{3/2}{\sqrt3} = \frac{3}{2\sqrt3} = \frac{\sqrt3}{2} \qquad \sin\theta = \frac{-\sqrt3/2}{\sqrt3} = -\frac12
$$

$$
\boxed{z = \left[\sqrt3\,;-\frac\pi6\right]}
$$

Le passage $\dfrac{3}{2\sqrt3} = \dfrac{\sqrt3}{2}$ s'obtient en multipliant haut et bas par $\sqrt3$ : $\dfrac{3\sqrt3}{6} = \dfrac{\sqrt3}{2}$.
::

::exo-question{label="10." cours="cours-trigonometrique"}
$$
z = -\frac32-\frac{3\sqrt3}{2}\,i
$$

#indice
Le module tombe rond. Ensuite, les deux rapports sont négatifs : il ne reste qu'un seul angle remarquable possible.

#solution
$$
\lvert z\rvert = \sqrt{\frac94+\frac{27}{4}} = \sqrt{\frac{36}{4}} = 3
$$

$$
\cos\theta = \frac{-3/2}{3} = -\frac12 \qquad \sin\theta = \frac{-3\sqrt3/2}{3} = -\frac{\sqrt3}{2}
$$

Les deux négatifs : troisième quadrant.

$$
\boxed{z = \left[3\,;-\frac{2\pi}{3}\right]}
$$
::

::exo-question{label="11." cours="cours-trigonometrique"}
$$
z = 5\sqrt2-5i\sqrt2
$$

#indice
Factorise $5\sqrt2$ : il ne reste que $1-i$, dont l'argument est déjà connu.

#solution
$$
\lvert z\rvert = \sqrt{50+50} = \sqrt{100} = 10
$$

$$
\cos\theta = \frac{5\sqrt2}{10} = \frac{\sqrt2}{2} \qquad \sin\theta = -\frac{\sqrt2}{2}
$$

$$
\boxed{z = \left[10\,;-\frac\pi4\right]}
$$
::

::exo-question{label="12." cours="cours-trigonometrique"}
$$
z = 5+3i
$$

#indice
Ici l'angle n'est **pas** remarquable : aucun tableau ne donnera $\cos\theta = \dfrac{5}{\sqrt{34}}$. L'énoncé demande donc une valeur approchée en radians. Comme $z$ est dans le premier quadrant, l'arc tangente s'applique directement.

#solution
$$
\lvert z\rvert = \sqrt{25+9} = \sqrt{34}
$$

$$
\cos\theta = \frac{5}{\sqrt{34}} > 0 \qquad \sin\theta = \frac{3}{\sqrt{34}} > 0
$$

Les deux positifs : premier quadrant, où l'arc tangente donne directement l'angle.

$$
\theta = \arctan\frac35 \approx 0{,}540 \text{ rad}
$$

$$
\boxed{z \approx \left[\sqrt{34}\,;0{,}540\right]}
$$

**Contrôle.** $\sqrt{34} \approx 5{,}83$, et $5{,}83\cos(0{,}540) \approx 5$, $5{,}83\sin(0{,}540) \approx 3$.
::

::exo-question{label="13." cours="cours-trigonometrique"}
$$
z = 2+7i
$$

#indice
Même situation que la question précédente : premier quadrant, angle non remarquable, valeur approchée attendue.

#solution
$$
\lvert z\rvert = \sqrt{4+49} = \sqrt{53}
$$

$$
\cos\theta = \frac{2}{\sqrt{53}} > 0 \qquad \sin\theta = \frac{7}{\sqrt{53}} > 0
$$

$$
\theta = \arctan\frac72 \approx 1{,}292 \text{ rad}
$$

$$
\boxed{z \approx \left[\sqrt{53}\,;1{,}292\right]}
$$

L'angle est proche de $\dfrac\pi2 \approx 1{,}571$, ce qui est cohérent : la partie imaginaire domine largement la partie réelle, le point est presque sur l'axe vertical.
::
:::

:::exercice{titre="Exercice 6" theme="La forme exponentielle : les mêmes nombres, une autre notation" icone="i-lucide-repeat"}
::rappel{titre="Pourquoi cet exercice est plus court que les deux précédents" icone="i-lucide-info"}
La feuille reprend ici, nombre pour nombre, les listes des exercices 4 et 5 — seule la **notation** change. Or

$$
r e^{i\theta} = r\left(\cos\theta+i\sin\theta\right) = [r\,;\theta]
$$

sont trois écritures du **même** nombre : $e^{i\theta}$ n'est qu'un nom abrégé pour $\cos\theta+i\sin\theta$. Les calculs sont donc identiques, et les recopier un par un n'apprendrait rien.

Chaque question ci-dessous traite donc une liste entière : la méthode est rappelée une fois, puis les résultats sont donnés en tableau. Le détail de chaque calcul est dans les exercices 4 et 5, à la question de même rang.
::

::exo-question{label="1." cours="cours-exponentielle"}
Écrire sous forme algébrique :

$$
z_1 = 3e^{i\frac{\pi}{4}} \quad z_2 = 4e^{i\frac{\pi}{2}} \quad z_3 = 7e^{i\pi} \quad z_4 = 2e^{i0}
$$

$$
z_5 = 5e^{-i\frac{\pi}{6}} \quad z_6 = \sqrt2\,e^{i\frac{3\pi}{4}} \quad z_7 = 3e^{i\frac{5\pi}{6}} \quad z_8 = \sqrt3\,e^{i\frac{2\pi}{3}}
$$

#indice
Remplace $e^{i\theta}$ par $\cos\theta+i\sin\theta$ et tu retombes exactement sur l'exercice 4 : $a = r\cos\theta$, $b = r\sin\theta$.

#solution
La méthode, sur $z_1$ :

$$
z_1 = 3e^{i\frac\pi4} = 3\left(\cos\frac\pi4+i\sin\frac\pi4\right) = 3\left(\frac{\sqrt2}{2}+i\frac{\sqrt2}{2}\right)
$$

Les huit résultats, identiques à ceux de l'exercice 4 :

| | $z_1$ | $z_2$ | $z_3$ | $z_4$ |
|---|---|---|---|---|
| forme algébrique | $\dfrac{3\sqrt2}{2}+\dfrac{3\sqrt2}{2}i$ | $4i$ | $-7$ | $2$ |

| | $z_5$ | $z_6$ | $z_7$ | $z_8$ |
|---|---|---|---|---|
| forme algébrique | $\dfrac{5\sqrt3}{2}-\dfrac52 i$ | $-1+i$ | $-\dfrac{3\sqrt3}{2}+\dfrac32 i$ | $-\dfrac{\sqrt3}{2}+\dfrac32 i$ |

**Les quatre valeurs à connaître par cœur**, qui reviennent constamment :

$$
e^{i0} = 1 \qquad e^{i\frac\pi2} = i \qquad e^{i\pi} = -1 \qquad e^{-i\frac\pi2} = -i
$$
::

::exo-question{label="2." cours="cours-exponentielle"}
Écrire sous forme algébrique :

$$
z_1 = 4e^{-i\frac{\pi}{4}} \quad z_2 = 5\sqrt3\,e^{i\frac{\pi}{6}} \quad z_3 = 3\sqrt2\,e^{-i\frac{3\pi}{4}} \quad z_4 = 7\sqrt2\,e^{i0} \quad z_5 = 2\sqrt3\,e^{-i\frac{2\pi}{3}}
$$

#indice
Même travail. Surveille les modules qui contiennent une racine : $\sqrt2\times\dfrac{\sqrt2}{2} = 1$ et $\sqrt3\times\dfrac{\sqrt3}{2} = \dfrac32$ simplifient beaucoup.

#solution
| | $z_1$ | $z_2$ | $z_3$ | $z_4$ | $z_5$ |
|---|---|---|---|---|---|
| forme algébrique | $2\sqrt2-2\sqrt2\,i$ | $\dfrac{15}{2}+\dfrac{5\sqrt3}{2}i$ | $-3-3i$ | $7\sqrt2$ | $-\sqrt3-3i$ |

Le détail de chaque calcul est aux questions 9 à 13 de l'exercice 4.
::

::exo-question{label="3." cours="cours-exponentielle"}
Écrire sous forme exponentielle :

$$
z_1 = 3 \quad z_2 = 2i \quad z_3 = -5 \quad z_4 = -i\sqrt2
$$

$$
z_5 = 1+i \quad z_6 = 3-3i \quad z_7 = 1+i\sqrt3 \quad z_8 = 2\sqrt3-2i
$$

#indice
Le sens exigeant : module d'abord, **puis les deux rapports** $\cos\theta = \dfrac{a}{r}$ et $\sin\theta = \dfrac{b}{r}$. Une fois $\theta$ identifié, il ne reste qu'à écrire $re^{i\theta}$ au lieu de $[r\,;\theta]$.

#solution
| | $z_1$ | $z_2$ | $z_3$ | $z_4$ |
|---|---|---|---|---|
| forme exponentielle | $3e^{i0}$ | $2e^{i\frac\pi2}$ | $5e^{i\pi}$ | $\sqrt2\,e^{-i\frac\pi2}$ |

| | $z_5$ | $z_6$ | $z_7$ | $z_8$ |
|---|---|---|---|---|
| forme exponentielle | $\sqrt2\,e^{i\frac\pi4}$ | $3\sqrt2\,e^{-i\frac\pi4}$ | $2e^{i\frac\pi3}$ | $4e^{-i\frac\pi6}$ |

Le détail est aux questions 1 à 8 de l'exercice 5.

⚠️ Le module reste **strictement positif** : $-5$ s'écrit $5e^{i\pi}$, jamais $-5e^{i0}$.
::

::exo-question{label="4." cours="cours-exponentielle"}
Écrire sous forme exponentielle :

$$
z_1 = \frac32-\frac{\sqrt3}{2}\,i \quad z_2 = -\frac32-\frac{3\sqrt3}{2}\,i \quad z_3 = 5\sqrt2-5i\sqrt2 \quad z_4 = 5+3i \quad z_5 = 2+7i
$$

Pour $z_4$ et $z_5$, on donnera une approximation en radians de l'angle $\theta$.

#indice
Les trois premiers ont un argument remarquable. Les deux derniers non : ils sont dans le premier quadrant, donc $\theta = \arctan\dfrac{b}{a}$ s'applique directement.

#solution
| | $z_1$ | $z_2$ | $z_3$ |
|---|---|---|---|
| forme exponentielle | $\sqrt3\,e^{-i\frac\pi6}$ | $3e^{-i\frac{2\pi}{3}}$ | $10\,e^{-i\frac\pi4}$ |

Pour les deux derniers, module exact et argument approché :

$$
z_4 \approx \sqrt{34}\,e^{0{,}540\,i} \qquad z_5 \approx \sqrt{53}\,e^{1{,}292\,i}
$$

Le détail est aux questions 9 à 13 de l'exercice 5.
::
:::

:::exercice{titre="Exercice 7" theme="Produits, quotients et puissances en forme exponentielle" icone="i-lucide-x"}
On considère les nombres complexes suivants :

$$
z_1 = 3e^{i\frac{\pi}{4}} \quad z_2 = e^{i\frac{\pi}{3}} \quad z_3 = 5e^{i\frac{2\pi}{3}} \quad z_4 = 6e^{i\frac{\pi}{6}} \quad z_5 = 2e^{i\frac{\pi}{2}} \quad z_6 = e^{i\pi}
$$

Déterminer le module et l'argument des nombres demandés. Toute cette série repose sur trois règles, et sur rien d'autre :

$$
re^{i\theta}\times r'e^{i\theta'} = rr'\,e^{i(\theta+\theta')} \qquad \frac{re^{i\theta}}{r'e^{i\theta'}} = \frac{r}{r'}\,e^{i(\theta-\theta')} \qquad \left(re^{i\theta}\right)^n = r^n e^{in\theta}
$$

**Les modules se multiplient, les arguments s'additionnent.** C'est tout l'intérêt de cette écriture.

::exo-question{label="a." cours="cours-exponentielle"}
$$
z = z_1\times z_2
$$

#indice
Multiplie les modules, additionne les arguments. Pour la somme $\dfrac\pi4+\dfrac\pi3$, passe par le dénominateur commun $12$.

#solution
$$
z = 3\times 1\,e^{i\left(\frac\pi4+\frac\pi3\right)}
$$

Somme des arguments, au dénominateur commun $12$ :

$$
\frac\pi4+\frac\pi3 = \frac{3\pi}{12}+\frac{4\pi}{12} = \frac{7\pi}{12}
$$

$$
\boxed{\lvert z\rvert = 3 \qquad \arg z = \frac{7\pi}{12}}
$$
::

::exo-question{label="b." cours="cours-exponentielle"}
$$
z = \frac{z_1}{z_2}
$$

#indice
Les modules se divisent, les arguments se **soustraient**. Comme $\lvert z_2\rvert = 1$, le module ne bouge pas.

#solution
$$
z = \frac31\,e^{i\left(\frac\pi4-\frac\pi3\right)} \qquad \frac\pi4-\frac\pi3 = \frac{3\pi-4\pi}{12} = -\frac{\pi}{12}
$$

$$
\boxed{\lvert z\rvert = 3 \qquad \arg z = -\frac{\pi}{12}}
$$

$z_2$ est de module $1$ : le diviser par lui **fait tourner** sans changer la longueur.
::

::exo-question{label="c." cours="cours-exponentielle"}
$$
z = (z_1)^3
$$

#indice
Le module est élevé à la puissance $3$, l'argument est **multiplié** par $3$. Ne confonds pas les deux opérations.

#solution
$$
z = 3^3\,e^{3i\frac\pi4} = 27\,e^{i\frac{3\pi}{4}}
$$

$$
\boxed{\lvert z\rvert = 27 \qquad \arg z = \frac{3\pi}{4}}
$$

Développer $\left(\dfrac{3\sqrt2}{2}+\dfrac{3\sqrt2}{2}i\right)^3$ à la main donnerait le même résultat, avec dix fois plus de calculs : c'est exactement ce que cette forme évite.
::

::exo-question{label="d." cours="cours-exponentielle"}
$$
z = \frac{z_5}{z_6}
$$

#indice
$z_6 = e^{i\pi}$ vaut $-1$. Diviser par $-1$ ou multiplier par $-1$, c'est la même chose — l'argument tourne d'un demi-tour dans les deux cas.

#solution
$$
z = \frac21\,e^{i\left(\frac\pi2-\pi\right)} = 2e^{-i\frac\pi2}
$$

$$
\boxed{\lvert z\rvert = 2 \qquad \arg z = -\frac{\pi}{2}}
$$

Sous forme algébrique, $z = -2i$. Contrôle direct : $\dfrac{2i}{-1} = -2i$.
::

::exo-question{label="e." cours="cours-exponentielle"}
$$
z = z_3\times z_4
$$

#indice
Modules $5$ et $6$, arguments $\dfrac{2\pi}{3}$ et $\dfrac\pi6$. Dénominateur commun $6$ pour la somme.

#solution
$$
z = 30\,e^{i\left(\frac{2\pi}{3}+\frac\pi6\right)} \qquad \frac{2\pi}{3}+\frac\pi6 = \frac{4\pi}{6}+\frac{\pi}{6} = \frac{5\pi}{6}
$$

$$
\boxed{\lvert z\rvert = 30 \qquad \arg z = \frac{5\pi}{6}}
$$
::

::exo-question{label="f." cours="cours-exponentielle"}
$$
z = z_5\times z_6
$$

#indice
La somme des arguments donne $\dfrac{3\pi}{2}$, qui sort de l'intervalle $]-\pi\,;\pi]$. On ramène en retirant un tour complet, $2\pi$.

#solution
$$
z = 2\times 1\,e^{i\left(\frac\pi2+\pi\right)} = 2e^{i\frac{3\pi}{2}}
$$

On ramène l'argument dans $]-\pi\,;\pi]$ :

$$
\frac{3\pi}{2}-2\pi = -\frac{\pi}{2}
$$

$$
\boxed{\lvert z\rvert = 2 \qquad \arg z = -\frac{\pi}{2}}
$$

Même résultat qu'à la question d., et ce n'est pas un hasard : $z_6 = -1$, donc multiplier ou diviser par $z_6$ revient au même.
::

::exo-question{label="g." cours="cours-exponentielle"}
$$
z = \frac{z_3}{z_4}
$$

#indice
Le module devient une fraction, qui ne se simplifie pas. L'argument, lui, tombe sur une valeur très simple.

#solution
$$
z = \frac56\,e^{i\left(\frac{2\pi}{3}-\frac\pi6\right)} \qquad \frac{2\pi}{3}-\frac\pi6 = \frac{4\pi-\pi}{6} = \frac{3\pi}{6} = \frac{\pi}{2}
$$

$$
\boxed{\lvert z\rvert = \frac56 \qquad \arg z = \frac{\pi}{2}}
$$

Argument $\dfrac\pi2$ : $z$ est un imaginaire pur de partie imaginaire positive, $z = \dfrac56 i$.
::

::exo-question{label="h." cours="cours-exponentielle"}
$$
z = (z_5)^8
$$

#indice
$2^8$ d'un côté, $8\times\dfrac\pi2$ de l'autre. Le second résultat est un multiple entier de $2\pi$ : que vaut alors l'exponentielle ?

#solution
$$
z = 2^8\,e^{8i\frac\pi2} = 256\,e^{4i\pi}
$$

$4\pi$ est **deux tours complets** : on revient au point de départ, donc $e^{4i\pi} = 1$.

$$
\boxed{\lvert z\rvert = 256 \qquad \arg z = 0}
$$

$z = 256$, un réel positif. Contrôle par la forme algébrique : $z_5 = 2i$, et $(2i)^8 = 2^8 i^8 = 256\times 1 = 256$.
::

::exo-question{label="i." cours="cours-exponentielle"}
$$
z = \frac{1}{z_2}
$$

#indice
L'inverse retourne le module et **change le signe** de l'argument. Ici le module vaut $1$, donc seul l'argument bouge.

#solution
$$
z = \frac{1}{1}\,e^{-i\frac\pi3} = e^{-i\frac\pi3}
$$

$$
\boxed{\lvert z\rvert = 1 \qquad \arg z = -\frac{\pi}{3}}
$$

Pour un nombre de module $1$, l'inverse et le conjugué coïncident : $\dfrac{1}{z_2} = \overline{z_2}$.
::

::exo-question{label="j." cours="cours-exponentielle"}
Écrire $z_1$ et $z_2$ sous forme exponentielle :

$$
z_1 = -2\sqrt2+2i\sqrt2 \qquad z_2 = 3-3i\sqrt3
$$

#indice
Retour au sens exigeant de l'exercice 5 : module d'abord, puis les deux rapports. Pour $z_1$, remarque que $\left(2\sqrt2\right)^2 = 8$ ; pour $z_2$, que $\left(3\sqrt3\right)^2 = 27$.

#solution
**Pour $z_1$.**

$$
\lvert z_1\rvert = \sqrt{8+8} = \sqrt{16} = 4
$$

$$
\cos\theta = \frac{-2\sqrt2}{4} = -\frac{\sqrt2}{2} \qquad \sin\theta = \frac{2\sqrt2}{4} = \frac{\sqrt2}{2}
$$

Cosinus négatif, sinus positif : deuxième quadrant, donc $\theta = \dfrac{3\pi}{4}$.

$$
\boxed{z_1 = 4e^{i\frac{3\pi}{4}}}
$$

**Pour $z_2$.**

$$
\lvert z_2\rvert = \sqrt{9+27} = \sqrt{36} = 6
$$

$$
\cos\theta = \frac36 = \frac12 \qquad \sin\theta = \frac{-3\sqrt3}{6} = -\frac{\sqrt3}{2}
$$

Cosinus positif, sinus négatif : quatrième quadrant, donc $\theta = -\dfrac\pi3$.

$$
\boxed{z_2 = 6e^{-i\frac{\pi}{3}}}
$$
::

::exo-question{label="k." cours="cours-exponentielle"}
En déduire la forme exponentielle de :

$$
z_1z_2 \qquad \frac{1}{z_1} \qquad \frac{1}{z_2} \qquad \frac{z_1}{z_2} \qquad \frac{z_2}{z_1}
$$

#indice
« En déduire » veut dire : ne recalcule rien à partir des formes algébriques. Les trois règles suffisent, avec $r = 4$, $\theta = \dfrac{3\pi}{4}$ et $r' = 6$, $\theta' = -\dfrac\pi3$.

Le dénominateur commun des arguments est $12$. Et pense à ramener chaque résultat dans $]-\pi\,;\pi]$.

#solution
Les arguments au dénominateur commun $12$ : $\dfrac{3\pi}{4} = \dfrac{9\pi}{12}$ et $-\dfrac\pi3 = -\dfrac{4\pi}{12}$.

**Le produit.**

$$
z_1z_2 = 24\,e^{i\left(\frac{9\pi}{12}-\frac{4\pi}{12}\right)} = \boxed{24\,e^{i\frac{5\pi}{12}}}
$$

**Les deux inverses**, module retourné et argument opposé :

$$
\frac{1}{z_1} = \boxed{\frac14\,e^{-i\frac{3\pi}{4}}} \qquad \frac{1}{z_2} = \boxed{\frac16\,e^{i\frac{\pi}{3}}}
$$

**Les deux quotients.** Pour $\dfrac{z_1}{z_2}$, la soustraction des arguments donne

$$
\frac{9\pi}{12}-\left(-\frac{4\pi}{12}\right) = \frac{13\pi}{12}
$$

qui dépasse $\pi$ : on retire un tour, $\dfrac{13\pi}{12}-2\pi = -\dfrac{11\pi}{12}$.

$$
\frac{z_1}{z_2} = \boxed{\frac23\,e^{-i\frac{11\pi}{12}}}
$$

Le second quotient est l'inverse du premier :

$$
\frac{z_2}{z_1} = \boxed{\frac32\,e^{i\frac{11\pi}{12}}}
$$

**Contrôle.** Le produit des deux quotients doit valoir $1$ : $\dfrac23\times\dfrac32 = 1$ pour les modules, et $-\dfrac{11\pi}{12}+\dfrac{11\pi}{12} = 0$ pour les arguments. Cohérent.
::
:::

:::exercice{titre="Exercice 8" theme="Conjugués" icone="i-lucide-flip-horizontal"}
Déterminer le conjugué de chaque nombre complexe et donner sa forme algébrique.

Deux chemins existent : calculer $z$ d'abord puis changer le signe de sa partie imaginaire, ou conjuguer chaque facteur en se servant de $\overline{z_1z_2} = \overline{z_1}\times\overline{z_2}$. Le premier est plus sûr tant qu'on n'est pas à l'aise.

::exo-question{label="1." cours="cours-conjugue-quotient"}
$$
z = (3+i)(-13-2i)
$$

#indice
Développe le produit, réduis, puis change le signe de la partie imaginaire. Rien de plus.

#solution
$$
z = -39-6i-13i-2i^2 = -39+2+(-6-13)i = -37-19i
$$

$$
\boxed{\bar z = -37+19i}
$$
::

::exo-question{label="2." cours="cours-conjugue-quotient"}
$$
z = i(1-i)^3
$$

#indice
Ne développe pas le cube d'un coup. Passe par $(1-i)^2 = -2i$, un résultat qui revient sans cesse, puis multiplie une fois de plus par $(1-i)$.

#solution
**Le carré, puis le cube.**

$$
(1-i)^2 = 1-2i+i^2 = -2i
$$

$$
(1-i)^3 = -2i(1-i) = -2i+2i^2 = -2-2i
$$

**Le produit final.**

$$
z = i(-2-2i) = -2i-2i^2 = 2-2i
$$

$$
\boxed{\bar z = 2+2i}
$$
::

::exo-question{label="3." cours="cours-conjugue-quotient"}
$$
z = \frac{2-3i}{8+5i}
$$

#indice
Un quotient : multiplie haut et bas par le conjugué du dénominateur, $8-5i$. Le dénominateur devient $8^2+5^2$.

#solution
$$
z = \frac{(2-3i)(8-5i)}{8^2+5^2} = \frac{16-10i-24i+15i^2}{89} = \frac{1-34i}{89}
$$

$$
\boxed{\bar z = \frac{1}{89}+\frac{34}{89}i}
$$

**Raccourci.** On aurait pu conjuguer directement le quotient : $\overline{\left(\dfrac{z_1}{z_2}\right)} = \dfrac{\overline{z_1}}{\overline{z_2}} = \dfrac{2+3i}{8-5i}$, ce qui redonne le même résultat.
::

::exo-question{label="4." cours="cours-conjugue-quotient"}
$$
z = \frac{2}{i+1}-\frac{3}{1-i}
$$

#indice
Deux quotients à traiter séparément, chacun avec le conjugué de son propre dénominateur. Attention, $i+1$ et $1-i$ **ne sont pas** le même nombre : ils sont conjugués l'un de l'autre.

#solution
**Premier quotient**, conjugué $1-i$, dénominateur $1+1 = 2$ :

$$
\frac{2}{1+i} = \frac{2(1-i)}{2} = 1-i
$$

**Second quotient**, conjugué $1+i$ :

$$
\frac{3}{1-i} = \frac{3(1+i)}{2} = \frac32+\frac32 i
$$

**Différence.**

$$
z = 1-i-\frac32-\frac32 i = -\frac12-\frac52 i
$$

$$
\boxed{\bar z = -\frac12+\frac52 i}
$$
::
:::

:::exercice{titre="Exercice 9" theme="Équations du second degré, dont une avec le conjugué" icone="i-lucide-square-radical"}
Résoudre dans $\mathbb{C}$ chacune des équations suivantes.

::exo-question{label="1." cours="cours-equations"}
$$
2z^2-6z+5 = 0
$$

#indice
Coefficients réels : le discriminant s'applique tel quel. S'il est négatif, écris $\sqrt{\Delta}$ sous la forme $i\sqrt{\lvert\Delta\rvert}$ — jamais $\sqrt{-4}$, qui n'a pas de sens.

#solution
Avec $a = 2$, $b = -6$, $c = 5$ :

$$
\Delta = (-6)^2-4\times 2\times 5 = 36-40 = -4
$$

$\Delta < 0$, donc $\sqrt{\Delta} = i\sqrt4 = 2i$ et les racines sont conjuguées :

$$
z = \frac{6\pm 2i}{4} = \frac{3\pm i}{2}
$$

$$
\boxed{S = \left\{\frac{3-i}{2}\ ;\ \frac{3+i}{2}\right\}}
$$

**Vérification par somme et produit.** La somme des racines vaut $3 = -\dfrac{b}{a} = \dfrac64$… soit $\dfrac32$ ? Non : $\dfrac{3-i}{2}+\dfrac{3+i}{2} = 3$, et $-\dfrac{b}{a} = \dfrac{6}{2} = 3$. Le produit vaut $\dfrac{9+1}{4} = \dfrac{10}{4} = \dfrac52 = \dfrac{c}{a}$. Les deux contrôles passent.
::

::exo-question{label="2." cours="cours-equations"}
$$
z^2+z+1 = 0
$$

#indice
Même méthode, avec $a = b = c = 1$. Le résultat est célèbre : ce sont les deux racines cubiques de l'unité autres que $1$.

#solution
$$
\Delta = 1-4 = -3 \qquad \sqrt\Delta = i\sqrt3
$$

$$
z = \frac{-1\pm i\sqrt3}{2}
$$

$$
\boxed{S = \left\{\frac{-1-i\sqrt3}{2}\ ;\ \frac{-1+i\sqrt3}{2}\right\}}
$$

Ces deux nombres sont de module $1$ et d'arguments $\pm\dfrac{2\pi}{3}$ : élevés au cube, ils donnent $e^{\pm 2i\pi} = 1$.
::

::exo-question{label="3." cours="cours-equations"}
$$
z^2+2\bar z+1 = 0
$$

#indice
⚠️ **Le discriminant ne s'applique pas** : l'équation contient $\bar z$, elle n'est donc pas polynomiale en $z$. Dès qu'un conjugué apparaît, le réflexe est de poser $z = x+iy$ avec $x$ et $y$ **réels**, puis d'écrire que la partie réelle et la partie imaginaire sont nulles toutes les deux.

Une équation complexe équivaut ainsi à un **système** de deux équations réelles.

#solution
On pose $z = x+iy$, donc $z^2 = x^2-y^2+2ixy$ et $\bar z = x-iy$.

$$
x^2-y^2+2ixy+2x-2iy+1 = 0
$$

Un complexe est nul si et seulement si ses deux parties le sont :

$$
\begin{cases} x^2-y^2+2x+1 = 0 \\ 2xy-2y = 0 \end{cases}
$$

**On commence par la seconde**, qui se factorise :

$$
2y(x-1) = 0 \quad\Longrightarrow\quad y = 0 \ \text{ ou }\ x = 1
$$

**Cas $y = 0$.** La première équation devient $x^2+2x+1 = 0$, soit $(x+1)^2 = 0$, donc $x = -1$. D'où $z = -1$.

**Cas $x = 1$.** La première équation devient $1-y^2+2+1 = 0$, soit $y^2 = 4$, donc $y = \pm 2$. D'où $z = 1+2i$ et $z = 1-2i$.

$$
\boxed{S = \left\{-1\ ;\ 1+2i\ ;\ 1-2i\right\}}
$$

**Trois solutions pour une équation qui ressemble à un second degré** : c'est bien la preuve que le discriminant n'avait rien à faire ici.

**Vérification** sur $z = 1+2i$ : $z^2 = 1+4i+4i^2 = -3+4i$, et $2\bar z = 2-4i$. La somme $-3+4i+2-4i+1$ vaut bien $0$.
::
:::

:::exercice{titre="Exercice 10" theme="Affixes, longueurs et nature d'un triangle" icone="i-lucide-triangle"}
$A$, $B$ et $C$ sont les points d'affixes respectives

$$
z_A = -1+i \qquad z_B = 2+i \qquad z_C = -\frac12-\frac12 i
$$

::exo-question{label="1." cours="cours-affixes"}
Placer les points $A$, $B$ et $C$ dans un repère orthonormé.

#indice
L'affixe $a+bi$ correspond au point de coordonnées $(a\,;b)$ : la partie réelle est l'abscisse, la partie imaginaire l'ordonnée.

#solution
On lit directement les coordonnées :

| Point | Affixe | Coordonnées |
|---|---|---|
| $A$ | $-1+i$ | $(-1\,;1)$ |
| $B$ | $2+i$ | $(2\,;1)$ |
| $C$ | $-\dfrac12-\dfrac12 i$ | $\left(-\dfrac12\,;-\dfrac12\right)$ |

$A$ et $B$ ont la même ordonnée $1$ : le segment $[AB]$ est **horizontal**, ce qui rendra la suite plus facile à contrôler.
::

::exo-question{label="2." cours="cours-affixes"}
Calculer les affixes des vecteurs $\overrightarrow{AB}$, $\overrightarrow{AC}$ et $\overrightarrow{BC}$.

#indice
Affixe d'un vecteur : **extrémité moins origine**. Pour $\overrightarrow{AB}$, c'est $z_B-z_A$, dans cet ordre — l'inverse donnerait le vecteur opposé.

#solution
$$
z_{\overrightarrow{AB}} = z_B-z_A = (2+i)-(-1+i) = 3
$$

$$
z_{\overrightarrow{AC}} = z_C-z_A = \left(-\frac12+1\right)+\left(-\frac12-1\right)i = \frac12-\frac32 i
$$

$$
z_{\overrightarrow{BC}} = z_C-z_B = \left(-\frac12-2\right)+\left(-\frac12-1\right)i = -\frac52-\frac32 i
$$

L'affixe de $\overrightarrow{AB}$ est un **réel** : le vecteur est horizontal, ce qui confirme la lecture de la question précédente.
::

::exo-question{label="3." cours="cours-affixes"}
En déduire les longueurs $AB$, $AC$ et $BC$. Le triangle $ABC$ est-il rectangle en $C$ ?

#indice
Une longueur est le **module** de l'affixe du vecteur correspondant : $AB = \lvert z_B-z_A\rvert$.

Pour la nature du triangle, applique la réciproque du théorème de Pythagore — mais attention à l'hypoténuse : si l'angle droit est en $C$, alors c'est $[AB]$ qui est l'hypoténuse, donc c'est $AB^2$ qu'il faut comparer à $AC^2+BC^2$.

#solution
$$
AB = \lvert 3\rvert = 3
$$

$$
AC = \sqrt{\left(\frac12\right)^2+\left(-\frac32\right)^2} = \sqrt{\frac14+\frac94} = \sqrt{\frac{10}{4}} = \frac{\sqrt{10}}{2}
$$

$$
BC = \sqrt{\left(-\frac52\right)^2+\left(-\frac32\right)^2} = \sqrt{\frac{25}{4}+\frac94} = \sqrt{\frac{34}{4}} = \frac{\sqrt{34}}{2}
$$

**Test de Pythagore.** On travaille sur les carrés, ce qui évite les racines :

$$
AC^2+BC^2 = \frac{10}{4}+\frac{34}{4} = \frac{44}{4} = 11 \qquad AB^2 = 9
$$

$$
\boxed{11 \neq 9 \text{ : le triangle } ABC \text{ n'est pas rectangle en } C}
$$

**Contrôle par le produit scalaire.** Avec $\overrightarrow{CA}\left(-\dfrac12\,;\dfrac32\right)$ et $\overrightarrow{CB}\left(\dfrac52\,;\dfrac32\right)$ :

$$
\overrightarrow{CA}\cdot\overrightarrow{CB} = -\frac12\times\frac52+\frac32\times\frac32 = -\frac54+\frac94 = 1 \neq 0
$$

Le produit scalaire n'est pas nul, les deux méthodes concordent.
::
:::

:::exercice{titre="Exercice 11" theme="Quand un quotient est-il réel, quand est-il imaginaire pur ?" icone="i-lucide-scan-line"}
Soit $z = x+iy$, où $x$ et $y$ sont deux réels tels que $(x\,;y) \neq (1\,;0)$. On pose

$$
Z = \frac{z+2i}{z-1}
$$

Déterminer l'ensemble des points d'affixe $z$ tels que :

::exo-question{label="1." cours="cours-ensembles"}
$Z$ soit un nombre réel.

#indice
La seule méthode : écrire $Z$ sous forme algébrique en multipliant haut et bas par le conjugué du dénominateur, puis annuler la **partie imaginaire**.

Le dénominateur devient $(x-1)^2+y^2$, un réel strictement positif tant que $z \neq 1$ : il ne peut donc jamais annuler quoi que ce soit, seul le numérateur compte.

#solution
On remplace $z$ par $x+iy$ :

$$
Z = \frac{x+i(y+2)}{(x-1)+iy}
$$

On multiplie haut et bas par le conjugué du dénominateur :

$$
Z = \frac{\left(x+i(y+2)\right)\left((x-1)-iy\right)}{(x-1)^2+y^2}
$$

**Le numérateur**, développé et rangé :

$$
\mathcal{R}e = x(x-1)+y(y+2) \qquad \mathcal{I}m = (y+2)(x-1)-xy
$$

La partie imaginaire se simplifie beaucoup :

$$
(y+2)(x-1)-xy = xy-y+2x-2-xy = 2x-y-2
$$

**$Z$ est réel** lorsque cette partie imaginaire s'annule, le dénominateur ne pouvant pas l'être :

$$
\boxed{2x-y-2 = 0}
$$

C'est la **droite** d'équation $y = 2x-2$, privée du point $A(1\,;0)$ où $Z$ n'est pas défini.

**Contrôle.** Le point $(0\,;-2)$ vérifie l'équation, et correspond à $z = -2i$ : alors $Z = \dfrac{-2i+2i}{-2i-1} = 0$, qui est bien réel.
::

::exo-question{label="2." cours="cours-ensembles"}
$Z$ soit un imaginaire pur.

#indice
Cette fois c'est la **partie réelle** qu'on annule, calculée à la question précédente. Développe et regroupe : tu verras apparaître $x^2+y^2$, signature d'un cercle.

N'oublie pas d'exclure les points interdits — celui où $Z$ n'existe pas, et celui où $Z = 0$, car $0$ n'est pas un imaginaire pur.

#solution
On annule la partie réelle trouvée plus haut :

$$
x(x-1)+y(y+2) = 0 \quad\Longrightarrow\quad \boxed{x^2+y^2-x+2y = 0}
$$

**On reconnaît un cercle** en complétant les carrés :

$$
\left(x-\frac12\right)^2-\frac14+(y+1)^2-1 = 0 \quad\Longrightarrow\quad \left(x-\frac12\right)^2+(y+1)^2 = \frac54
$$

C'est le cercle de centre $\left(\dfrac12\,;-1\right)$ et de rayon $\sqrt{\dfrac54} = \dfrac{\sqrt5}{2}$.

**Les deux points à retirer**, tous deux situés sur ce cercle :

- $A(1\,;0)$, où $Z$ n'est pas défini ;
- $(0\,;-2)$, c'est-à-dire $z = -2i$, où $Z = 0$ — et $0$ n'est pas un imaginaire pur.

**Remarque.** Ce cercle passe par $A$ et par le point d'affixe $-2i$ : ce sont exactement les deux affixes qui annulent le dénominateur et le numérateur de $Z$. Ce n'est pas un hasard, et c'est un bon moyen de contrôler le résultat.
::
:::

:::exercice{titre="Exercice 12" theme="Ensembles de points" icone="i-lucide-circle-dashed"}
Dans chaque cas, trouver l'ensemble des points dont l'affixe $z$ satisfait la condition indiquée.

Un module est une **distance** : $\lvert z-z_A\rvert = AM$. Tout l'exercice consiste à faire apparaître cette forme, puis à lire la figure.

::exo-question{label="1." cours="cours-ensembles"}
$$
\lvert z-3\rvert = \lvert z-1+i\rvert
$$

#indice
Réécris chaque membre sous la forme $\lvert z-z_A\rvert$, quitte à factoriser un signe : $z-1+i$ s'écrit $z-(1-i)$. Tu obtiendras alors $AM = BM$, ce qui caractérise une figure très classique.

#solution
On met les deux membres sous la forme $\lvert z-z_A\rvert$ :

$$
\lvert z-3\rvert = \lvert z-(1-i)\rvert
$$

Avec $A$ d'affixe $3$, soit $(3\,;0)$, et $B$ d'affixe $1-i$, soit $(1\,;-1)$, la condition s'écrit $AM = BM$.

$$
\boxed{\text{la médiatrice du segment } [AB]}
$$

**Contrôle par le calcul.** Avec $z = x+iy$, on élève les deux membres au carré :

$$
(x-3)^2+y^2 = (x-1)^2+(y+1)^2
$$

$$
x^2-6x+9+y^2 = x^2-2x+1+y^2+2y+1
$$

$$
-6x+9 = -2x+2+2y \quad\Longrightarrow\quad 4x+2y-7 = 0
$$

Une équation du premier degré : c'est bien une droite. Son point de passage $\left(\dfrac32\,;\dfrac12\right)$ est le milieu de $[AB]$, comme attendu.
::

::exo-question{label="2." cours="cours-ensembles"}
$$
\lvert z+2-i\rvert = \sqrt5
$$

#indice
Fais apparaître un signe moins à l'intérieur du module : $z+2-i = z-(-2+i)$. Le centre est le point d'affixe $-2+i$, et surtout **pas** $2-i$.

#solution
On réécrit :

$$
\lvert z-(-2+i)\rvert = \sqrt5
$$

La distance de $M$ au point $A(-2\,;1)$ est constante et vaut $\sqrt5$.

$$
\boxed{\text{le cercle de centre } A(-2\,;1) \text{ et de rayon } \sqrt5}
$$

⚠️ L'erreur classique est de lire le centre $(2\,;-1)$. Le module s'écrit $\lvert z-z_A\rvert$ : ce qui figure après le signe moins est l'affixe du centre, il faut donc changer les signes de ce qu'on lit dans l'énoncé.
::

::exo-question{label="3." cours="cours-ensembles"}
$$
\lvert z+3-i\rvert \leqslant 2
$$

#indice
Même réécriture que précédemment, mais l'égalité est devenue une **inégalité large** : l'ensemble n'est plus une courbe mais une surface, bord compris.

#solution
$$
\lvert z-(-3+i)\rvert \leqslant 2
$$

La distance de $M$ au point $A(-3\,;1)$ est **au plus** $2$ :

$$
\boxed{\text{le disque fermé de centre } A(-3\,;1) \text{ et de rayon } 2}
$$

« Fermé » parce que l'inégalité est large : le cercle frontière fait partie de l'ensemble. Avec $<$ strict, on aurait le disque **ouvert**, privé de son bord.
::
:::

:::exercice{titre="Exercice 13" theme="Une transformation du plan complexe" icone="i-lucide-orbit"}
Le plan complexe est muni d'un repère orthonormé direct $(O\,;\vec u,\vec v)$. On note $A$ le point d'affixe $i$. À tout point $M$ du plan, distinct de $A$, d'affixe $z$, on associe le point $M'$ d'affixe

$$
z' = \frac{iz}{z-i}
$$

::exo-question{label="1.a." cours="cours-ensembles"}
Déterminer les points $M$ tels que $M = M'$.

#indice
$M = M'$ signifie $z' = z$. Multiplie par $z-i$ pour te débarrasser du quotient, ramène tout d'un côté, puis **factorise** — tu obtiendras une équation produit.

#solution
On cherche $z$ tel que, pour $z \neq i$ :

$$
\frac{iz}{z-i} = z \quad\Longrightarrow\quad iz = z(z-i)
$$

On ramène tout à droite et on factorise par $z$ :

$$
z(z-i)-iz = 0 \quad\Longrightarrow\quad z(z-i-i) = 0 \quad\Longrightarrow\quad z(z-2i) = 0
$$

$$
\boxed{z = 0 \quad\text{ou}\quad z = 2i}
$$

Les points invariants sont donc l'origine $O$ et le point d'affixe $2i$, tous deux différents de $A$ : les deux conviennent.
::

::exo-question{label="1.b." cours="cours-ensembles"}
Déterminer l'affixe du point $B'$ associé au point $B$ d'affixe $1$.

#indice
Remplace simplement $z$ par $1$ dans la formule, puis rends le dénominateur réel.

#solution
$$
z_{B'} = \frac{i\times 1}{1-i} = \frac{i(1+i)}{(1-i)(1+i)} = \frac{i+i^2}{2} = \frac{-1+i}{2}
$$

$$
\boxed{z_{B'} = -\frac12+\frac12 i}
$$
::

::exo-question{label="1.c." cours="cours-ensembles"}
Déterminer l'affixe du point $C$ tel que l'affixe de son image $C'$ soit $2$.

#indice
Cette fois c'est l'image qui est connue : on résout $\dfrac{iz}{z-i} = 2$ d'inconnue $z$. Multiplie par $z-i$, rassemble les $z$, factorise.

#solution
$$
\frac{iz}{z-i} = 2 \quad\Longrightarrow\quad iz = 2z-2i
$$

$$
iz-2z = -2i \quad\Longrightarrow\quad (i-2)z = -2i
$$

$$
z = \frac{-2i}{i-2} = \frac{-2i(-2-i)}{(-2+i)(-2-i)} = \frac{4i+2i^2}{4+1} = \frac{-2+4i}{5}
$$

$$
\boxed{z_C = -\frac25+\frac45 i}
$$

**Vérification.** $z_C-i = -\dfrac25-\dfrac15 i$, et $iz_C = -\dfrac45-\dfrac25 i = 2\left(-\dfrac25-\dfrac15 i\right)$. Le quotient vaut bien $2$.
::

::exo-question{label="2.a." cours="cours-ensembles"}
On pose $z = x+iy$ et $z' = x'+iy'$, avec $x$, $x'$, $y$, $y'$ réels. Déterminer $x'$ et $y'$ en fonction de $x$ et $y$.

#indice
Écris le quotient avec $z = x+iy$, puis multiplie haut et bas par le conjugué du dénominateur. Le dénominateur devient $x^2+(y-1)^2$ — c'est le module au carré de $z-i$.

Le numérateur demande du soin : $iz = i(x+iy) = -y+ix$, la multiplication par $i$ échangeant les rôles de $x$ et $y$ avec un changement de signe.

#solution
**Le numérateur de départ.**

$$
iz = i(x+iy) = ix+i^2y = -y+ix
$$

**Le dénominateur.** $z-i = x+i(y-1)$, de conjugué $x-i(y-1)$ et de module au carré $x^2+(y-1)^2$.

$$
z' = \frac{(-y+ix)\left(x-i(y-1)\right)}{x^2+(y-1)^2}
$$

**On développe le numérateur** :

$$
(-y+ix)\left(x-i(y-1)\right) = -xy+iy(y-1)+ix^2-i^2x(y-1)
$$

$$
= -xy+x(y-1)+i\left(y^2-y+x^2\right) = -x+i\left(x^2+y^2-y\right)
$$

Les termes $-xy$ et $+xy$ se compensent, ce qui simplifie beaucoup la partie réelle.

$$
\boxed{x' = \frac{-x}{x^2+(y-1)^2} \qquad y' = \frac{x^2+y^2-y}{x^2+(y-1)^2}}
$$
::

::exo-question{label="2.b." cours="cours-ensembles"}
Déterminer l'ensemble $\Gamma$ des points $M$, distincts de $A$, pour lesquels $z'$ est réel.

#indice
$z'$ est réel quand $y' = 0$. Comme le dénominateur ne s'annule jamais pour $M \neq A$, il suffit d'annuler le numérateur. Complète ensuite le carré en $y$ pour reconnaître la figure.

#solution
$$
z' \in \mathbb{R} \iff y' = 0 \iff x^2+y^2-y = 0
$$

On complète le carré en $y$ :

$$
x^2+\left(y-\frac12\right)^2-\frac14 = 0 \quad\Longrightarrow\quad x^2+\left(y-\frac12\right)^2 = \frac14
$$

$$
\boxed{\Gamma \text{ est le cercle de centre } \left(0\,;\frac12\right) \text{ et de rayon } \frac12, \text{ privé de } A}
$$

**Contrôle sur les points déjà rencontrés.** $O(0\,;0)$ appartient à $\Gamma$, et son image est $0$, réel. $C\left(-\dfrac25\,;\dfrac45\right)$ aussi, puisque $\dfrac{4}{25}+\dfrac{16}{25}-\dfrac{20}{25} = 0$, et son image est $2$, réel. En revanche $B(1\,;0)$ n'y est pas, et son image $-\dfrac12+\dfrac12 i$ n'est effectivement pas réelle.

Ce cercle a pour diamètre le segment $[OA]$ : il passe par $O$ et par $A$, ce dernier étant exclu.
::

::exo-question{label="2.c." cours="cours-ensembles"}
Placer $A$, $B$, $B'$, $C$, $C'$ et représenter $\Gamma$ sur une figure, l'unité graphique valant $4$ cm.

#indice
Rassemble d'abord toutes les coordonnées dans un tableau, puis trace. Avec $4$ cm par unité, une longueur de $\dfrac12$ mesure $2$ cm sur la feuille.

#solution
| Point | Affixe | Coordonnées | Position sur la feuille |
|---|---|---|---|
| $A$ | $i$ | $(0\,;1)$ | $4$ cm au-dessus de $O$ |
| $B$ | $1$ | $(1\,;0)$ | $4$ cm à droite de $O$ |
| $B'$ | $-\dfrac12+\dfrac12 i$ | $\left(-\dfrac12\,;\dfrac12\right)$ | $2$ cm à gauche, $2$ cm en haut |
| $C$ | $-\dfrac25+\dfrac45 i$ | $(-0{,}4\,;0{,}8)$ | $1{,}6$ cm à gauche, $3{,}2$ cm en haut |
| $C'$ | $2$ | $(2\,;0)$ | $8$ cm à droite de $O$ |

**Le cercle $\Gamma$** : centre $\left(0\,;\dfrac12\right)$, c'est-à-dire $2$ cm au-dessus de $O$, et rayon $\dfrac12$, soit $2$ cm. Il passe par $O$ et par $A$, dont le segment $[OA]$ est un diamètre. Le point $A$ est marqué comme **exclu**, par un petit cercle vide.

**Contrôle visuel** : $C$ doit tomber exactement sur $\Gamma$, et $B'$ également — on vérifie que $\left(-\dfrac12\right)^2+\left(\dfrac12-\dfrac12\right)^2 = \dfrac14$, ce qui est bien le carré du rayon. En revanche $B$ est nettement à l'extérieur.
::

::exo-question{label="3.a." cours="cours-ensembles"}
Soit $z$ un nombre complexe différent de $i$. Montrer que

$$
z'-i = \frac{-1}{z-i}
$$

#indice
Pars du membre de gauche, remplace $z'$ par son expression, et mets au même dénominateur $z-i$. Le numérateur va se simplifier de façon spectaculaire.

#solution
$$
z'-i = \frac{iz}{z-i}-i = \frac{iz-i(z-i)}{z-i}
$$

On développe le numérateur :

$$
iz-iz+i^2 = i^2 = -1
$$

$$
\boxed{z'-i = \frac{-1}{z-i}} \qquad\blacksquare
$$
::

::exo-question{label="3.b." cours="cours-ensembles"}
On suppose que $M$, d'affixe $z$, appartient au cercle $\gamma$ de centre $A$ et de rayon $1$. Montrer que $M'$ appartient à $\gamma$.

#indice
Appartenir à $\gamma$, c'est être à distance $1$ de $A$, autrement dit $\lvert z-i\rvert = 1$. Prends le module de l'égalité de la question précédente, en te souvenant que le module d'un quotient est le quotient des modules.

#solution
$M \in \gamma$ signifie $AM = 1$, c'est-à-dire

$$
\lvert z-i\rvert = 1
$$

On prend le module de l'égalité démontrée à la question précédente :

$$
\lvert z'-i\rvert = \left\lvert\frac{-1}{z-i}\right\rvert = \frac{\lvert -1\rvert}{\lvert z-i\rvert} = \frac{1}{1} = 1
$$

Or $\lvert z'-i\rvert = AM'$.

$$
\boxed{AM' = 1 \text{ : le point } M' \text{ appartient lui aussi à } \gamma} \qquad\blacksquare
$$

**Ce que cela signifie.** La transformation laisse le cercle $\gamma$ **globalement invariant** : elle déplace ses points le long du cercle, sans jamais les en faire sortir. La relation $z'-i = \dfrac{-1}{z-i}$ montre d'ailleurs que la distance à $A$ est toujours **inversée** — les points proches de $A$ partent au loin, et réciproquement.
::
:::

## Les rappels de cours de cette page

Ces tiroirs s'ouvrent depuis le bouton **Cours** de chaque question. Ils sont regroupés ici pour permettre une relecture d'ensemble.

::extrait-cours{id="cours-operations" titre="Somme, produit et carré" source="/cours/a1/remise-a-niveau-maths/nombres-complexes/cours#_2-les-opérations"}
Tout se calcule **comme avec des lettres**, avec une seule règle en plus : $i^2 = -1$.

**Somme et différence** — composante par composante :

$$
(a+bi)+(c+di) = (a+c)+(b+d)i
$$

**Produit** — double distributivité, puis on remplace $i^2$ par $-1$. Le terme en $i^2$ change de signe et **rejoint la partie réelle** :

$$
(a+bi)(c+di) = ac-bd+(ad+bc)i
$$

**Carrés** — les identités remarquables valent telles quelles, avec $b^2i^2 = -b^2$ :

$$
(a+bi)^2 = a^2-b^2+2abi \qquad (a+bi)(a-bi) = a^2+b^2
$$

Le second produit est **toujours un réel positif** : c'est $z\bar z = \lvert z\rvert^2$, et c'est le moteur de toute la méthode des quotients.

**Deux carrés à connaître par cœur**, tant ils reviennent :

$$
(1+i)^2 = 2i \qquad (1-i)^2 = -2i
$$

**Les puissances de $i$** tournent en boucle de quatre : $i^0 = 1$, $i^1 = i$, $i^2 = -1$, $i^3 = -i$, puis $i^4 = 1$ et tout recommence. Pour $i^n$, on divise $n$ par $4$ et on ne garde que le reste.
::

::extrait-cours{id="cours-conjugue-quotient" titre="Conjugué et quotient" source="/cours/a1/remise-a-niveau-maths/nombres-complexes/cours#_2-les-opérations"}
Le **conjugué** de $z = a+bi$ est $\bar z = a-bi$ : on change le signe de la seule partie imaginaire. Géométriquement, c'est le symétrique par rapport à l'axe horizontal.

$$
z\bar z = a^2+b^2 = \lvert z\rvert^2 \qquad \overline{z_1z_2} = \overline{z_1}\ \overline{z_2} \qquad \overline{\left(\frac{z_1}{z_2}\right)} = \frac{\overline{z_1}}{\overline{z_2}}
$$

**La méthode du quotient**, la plus utilisée du chapitre : **multiplier haut et bas par le conjugué du dénominateur**. Comme $z\bar z$ est réel, le $i$ disparaît du dénominateur.

$$
\frac{a+bi}{c+di} = \frac{(a+bi)(c-di)}{c^2+d^2}
$$

Il ne reste plus qu'à distribuer le dénominateur réel sur chaque partie.

**Deux raccourcis qui font gagner du temps :**

$$
\frac1i = -i \qquad \frac{1}{a+bi} = \frac{a-bi}{a^2+b^2}
$$

⚠️ Un quotient n'est **pas terminé** tant qu'il reste un $i$ au dénominateur. Et avant de se lancer, un coup d'œil : le numérateur ne serait-il pas un multiple du dénominateur ?
::

::extrait-cours{id="cours-equations" titre="Équations dans C" source="/cours/a1/remise-a-niveau-maths/nombres-complexes/cours#_3-équation-du-second-degré"}
**Premier degré.** $az+b = c$ se résout comme dans $\mathbb{R}$, en trois temps.

1. **Trier** : les termes contenant $z$ à gauche, les constantes à droite.
2. **Factoriser** par $z$ : on obtient $(\ldots)z = \ldots$, le facteur pouvant être un complexe.
3. **Diviser**, puis rendre le dénominateur réel avec le conjugué.

⚠️ **Trier, c'est déplacer — et déplacer, c'est changer de signe.** Tout terme qui traverse le signe égal change de signe ; ceux qui restent de leur côté n'y touchent pas. Sur $z+1 = 2iz-2i$, le $+1$ part à droite en $-1$ et le $2iz$ part à gauche en $-2iz$, ce qui donne $z-2iz = -2i-1$, tandis que le $-2i$ ne bouge pas.

**Équation produit.** Un produit est nul si et seulement si l'un de ses facteurs l'est — la règle vaut dans $\mathbb{C}$ comme dans $\mathbb{R}$. Chaque facteur donne une solution.

**Second degré à coefficients réels**, $az^2+bz+c = 0$ avec $\Delta = b^2-4ac$ :

| $\Delta$ | Solutions |
|---|---|
| $\Delta > 0$ | deux réelles, $\dfrac{-b\pm\sqrt\Delta}{2a}$ |
| $\Delta = 0$ | une racine double, $-\dfrac{b}{2a}$ |
| $\Delta < 0$ | deux complexes **conjuguées**, $\dfrac{-b\pm i\sqrt{\lvert\Delta\rvert}}{2a}$ |

⚠️ Ne jamais écrire $\sqrt{-3}$ : quand $\Delta < 0$, c'est $i\sqrt{3}$ qui apparaît.

**Contrôle systématique** : la somme des racines vaut $-\dfrac{b}{a}$ et leur produit $\dfrac{c}{a}$.

⚠️ **Dès que $\bar z$ figure dans l'équation, le discriminant ne s'applique plus** : l'équation n'est pas polynomiale en $z$. On pose alors $z = x+iy$ et on annule séparément la partie réelle et la partie imaginaire — une équation complexe équivaut à un système de deux équations réelles. Le nombre de solutions peut alors dépasser le degré apparent.
::

::extrait-cours{id="cours-trigonometrique" titre="La forme trigonométrique, et les deux sens" source="/cours/a1/remise-a-niveau-maths/nombres-complexes/cours#_6-la-forme-trigonométrique"}
$$
z = r\left(\cos\theta+i\sin\theta\right) = [r\,;\theta] \qquad (r = \lvert z\rvert > 0)
$$

⚠️ $[r\,;\theta]$ n'est **pas** un couple de coordonnées : $r$ est une longueur, $\theta$ un angle.

| Sens | On connaît | On calcule |
|---|---|---|
| Trigonométrique → algébrique | $r$ et $\theta$ | $a = r\cos\theta$, $b = r\sin\theta$ |
| Algébrique → trigonométrique | $a$ et $b$ | $r = \sqrt{a^2+b^2}$, puis $\cos\theta = \dfrac{a}{r}$ **et** $\sin\theta = \dfrac{b}{r}$ |

**Les deux rapports sont nécessaires** : le cosinus seul laisse toujours deux angles candidats, c'est le signe du sinus qui départage.

| $\theta$ | $0$ | $\dfrac{\pi}{6}$ | $\dfrac{\pi}{4}$ | $\dfrac{\pi}{3}$ | $\dfrac{\pi}{2}$ | $\pi$ |
|---|---|---|---|---|---|---|
| $\cos\theta$ | $1$ | $\dfrac{\sqrt3}{2}$ | $\dfrac{\sqrt2}{2}$ | $\dfrac{1}{2}$ | $0$ | $-1$ |
| $\sin\theta$ | $0$ | $\dfrac{1}{2}$ | $\dfrac{\sqrt2}{2}$ | $\dfrac{\sqrt3}{2}$ | $1$ | $0$ |

**Les quatre cas des axes**, à reconnaître d'un coup d'œil : $[r\,;0] = r$, $\left[r\,;\dfrac\pi2\right] = ri$, $[r\,;\pi] = -r$, $\left[r\,;-\dfrac\pi2\right] = -ri$.

**Quand le rapport ne se lit pas directement**, on rend le dénominateur rationnel : $\dfrac{1}{\sqrt2} = \dfrac{\sqrt2}{2}$, $\dfrac{3}{2\sqrt3} = \dfrac{\sqrt3}{2}$.

**Quand l'angle n'est pas remarquable**, on donne une valeur approchée en radians. Dans le premier quadrant, $\theta = \arctan\dfrac{b}{a}$ convient directement.
::

::extrait-cours{id="cours-exponentielle" titre="La forme exponentielle et ses trois règles" source="/cours/a1/remise-a-niveau-maths/nombres-complexes/cours#_7-forme-exponentielle"}
En notant $e^{i\theta} = \cos\theta+i\sin\theta$, tout complexe non nul s'écrit

$$
z = re^{i\theta} \qquad (r = \lvert z\rvert > 0,\ \theta = \arg z)
$$

C'est **la même chose** que la forme trigonométrique, avec une notation plus courte — et qui hérite des règles de l'exponentielle :

$$
re^{i\theta}\times r'e^{i\theta'} = rr'\,e^{i(\theta+\theta')} \qquad \frac{re^{i\theta}}{r'e^{i\theta'}} = \frac{r}{r'}\,e^{i(\theta-\theta')} \qquad \left(re^{i\theta}\right)^n = r^n e^{in\theta}
$$

**Les modules se multiplient, les arguments s'additionnent.** D'où la règle de choix : **forme algébrique pour les sommes, forme exponentielle pour les produits et les puissances**.

À connaître :

$$
e^{i0} = 1 \qquad e^{i\frac\pi2} = i \qquad e^{i\pi} = -1 \qquad e^{-i\frac\pi2} = -i \qquad e^{2ik\pi} = 1
$$

**Ramener l'argument dans $]-\pi\,;\pi]$** : un argument n'est défini qu'à $2k\pi$ près, on ajoute ou retire donc des tours complets jusqu'à tomber dans cet intervalle. Par exemple $\dfrac{3\pi}{2}$ devient $\dfrac{3\pi}{2}-2\pi = -\dfrac\pi2$.

⚠️ La forme exponentielle exige $r > 0$. Une écriture comme $-2e^{i\theta}$ n'en est pas une : il faut la corriger en $2e^{i(\theta+\pi)}$.
::

::extrait-cours{id="cours-affixes" titre="Affixes, distances et nature d'un triangle" source="/cours/a1/remise-a-niveau-maths/nombres-complexes/cours#_4-points-vecteurs-et-affixes"}
Le point $M(a\,;b)$ a pour **affixe** $z_M = a+bi$ : partie réelle en abscisse, partie imaginaire en ordonnée.

$$
z_{\overrightarrow{AB}} = z_B-z_A \qquad AB = \lvert z_B-z_A\rvert \qquad z_{\text{milieu de }[AB]} = \frac{z_A+z_B}{2}
$$

⚠️ Affixe d'un vecteur : **extrémité moins origine**. Dans l'autre sens, on obtient le vecteur opposé.

**Deux lectures immédiates** : une affixe **réelle** signifie un vecteur horizontal, une affixe **imaginaire pure** un vecteur vertical.

**Nature d'un triangle.** On calcule les trois longueurs, puis :

- deux longueurs égales → triangle **isocèle** ;
- réciproque de Pythagore → triangle **rectangle**, à condition de comparer le carré du **plus grand** côté à la somme des deux autres.

⚠️ Si l'angle droit est cherché en $C$, l'hypoténuse est $[AB]$ : c'est $AB^2$ qu'on compare à $AC^2+BC^2$.

**Contrôle par le produit scalaire** : le triangle est rectangle en $C$ si et seulement si $\overrightarrow{CA}\cdot\overrightarrow{CB} = 0$, produit scalaire calculé sur les coordonnées des deux vecteurs.
::

::extrait-cours{id="cours-ensembles" titre="Ensembles de points et transformations" source="/cours/a1/remise-a-niveau-maths/nombres-complexes/cours#_8-ensembles-de-points-et-transformations"}
Un module est une **distance** : $\lvert z_B-z_A\rvert = AB$. Toute condition écrite avec des modules décrit donc une figure.

| Condition sur $z$ | Ensemble des points $M$ |
|---|---|
| $\lvert z-z_A\rvert = r$ | le **cercle** de centre $A$ et de rayon $r$ |
| $\lvert z-z_A\rvert \leqslant r$ | le **disque** fermé de centre $A$ et de rayon $r$ |
| $\lvert z-z_A\rvert = \lvert z-z_B\rvert$ | la **médiatrice** du segment $[AB]$ |

⚠️ Le premier réflexe est de faire apparaître la forme $\lvert z-z_A\rvert$, quitte à changer les signes : $\lvert z+2-i\rvert$ s'écrit $\lvert z-(-2+i)\rvert$, et le centre est $(-2\,;1)$, pas $(2\,;-1)$.

**L'autre méthode, quand les modules ne suffisent pas** : poser $z = x+iy$ avec $x$ et $y$ réels, rendre le dénominateur réel s'il y a un quotient, puis séparer les deux parties.

$$
Z \text{ est réel} \iff \mathcal{I}m(Z) = 0 \qquad Z \text{ est imaginaire pur} \iff \mathcal{R}e(Z) = 0
$$

Une équation en $x$ et $y$ du **premier degré** décrit une droite ; une équation où apparaît $x^2+y^2$ décrit un **cercle**, qu'on identifie en complétant les carrés :

$$
x^2+y^2+\alpha x+\beta y = 0 \quad\Longrightarrow\quad \left(x+\frac\alpha2\right)^2+\left(y+\frac\beta2\right)^2 = \frac{\alpha^2+\beta^2}{4}
$$

⚠️ **Ne jamais oublier d'exclure les points interdits** : celui qui annule un dénominateur, et — pour « imaginaire pur » — celui qui annule $Z$ tout entier, puisque $0$ n'est pas un imaginaire pur.
::
