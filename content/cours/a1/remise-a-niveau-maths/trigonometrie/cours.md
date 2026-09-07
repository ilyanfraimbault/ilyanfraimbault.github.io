---
title: Trigonométrie — comprendre le cercle
description: Le cercle trigonométrique expliqué de zéro, en quatre étapes, avec une figure interactive, un contrôle express après chaque section et huit exercices en fin de chapitre — radians, valeurs remarquables, angles associés, équations, réciproques, formules d'addition, et la liste de ce qu'il faut réellement savoir par cœur.
interactif: true
type: cours
annee: A1
matiere: Remise à niveau en maths
ordre: 1
icone: i-lucide-compass
---

::rappel{titre="À quoi sert cette page" icone="i-lucide-compass"}
La trigonométrie du programme tient dans **une seule figure** : le cercle de rayon $1$. Tout le reste — les valeurs remarquables, les formules d'angles associés, les deux familles de solutions d'une équation, le comportement bizarre de $\arccos(\cos x)$ — se lit dessus.

Cette page reprend donc tout depuis le début, chaque notion étant accompagnée du cercle **manipulable** : déplace le point, la figure et les valeurs suivent. Les chapitres [Fonctions usuelles](/cours/a1/remise-a-niveau-maths/fonctions-usuelles/cours) et [Nombres complexes](/cours/a1/remise-a-niveau-maths/nombres-complexes/cours) s'appuient ensuite sur ce qui est expliqué ici.
::

::carte-lien{to="/cours/a1/remise-a-niveau-maths/trigonometrie/entrainement" titre="La fiche d’entraînement" description="Une fois le guide lu : quinze questions en cinq paliers, du radian jusqu’aux fonctions réciproques" type="entrainement" meta="15 questions"}
::

::rappel{titre="Par où commencer, si tu pars de zéro" icone="i-lucide-footprints"}
Le chapitre se lit dans l'ordre, mais il se **travaille en quatre étapes**, et chacune ne sert à rien tant que la précédente n'est pas acquise. Ne passe à la suivante que si tu réponds à son test de passage **sans regarder**.

**Étape 1 — le socle (§1 à §4).** Le cercle, le radian, et la seule phrase qui porte tout le chapitre : *le cosinus est une abscisse, le sinus une ordonnée*. Plus les cinq valeurs remarquables.
→ *Test de passage :* écris de mémoire le tableau des $\cos$ et $\sin$ pour $0$, $\dfrac{\pi}{6}$, $\dfrac{\pi}{4}$, $\dfrac{\pi}{3}$, $\dfrac{\pi}{2}$.

**Étape 2 — se déplacer sur le cercle (§5 et §6).** Périodicité, parité, et les quatre symétries. Ce ne sont **pas** des formules à apprendre : ce sont quatre façons de regarder la même figure.
→ *Test de passage :* calcule $\cos\dfrac{11\pi}{6}$ et $\sin\dfrac{3\pi}{4}$ en expliquant chaque étape.

**Étape 3 — calculer (§7, §8 et §11).** La tangente, les équations et leurs **deux** familles de solutions, puis les formules d'addition.
→ *Test de passage :* résous $\cos x = -\dfrac12$ sur $[0\,;2\pi]$, et trouve les **deux** solutions.

**Étape 4 — l'analyse (§9 et §10).** Les réciproques et les dérivées. C'est court, et **c'est ce qui tombe le plus au QCM** : à ne surtout pas garder pour la fin si le temps manque.
→ *Test de passage :* donne les dérivées de $\sin$, $\cos$, $\tan$, $\arcsin$, $\arccos$ et $\arctan$.

**Chaque section se termine par un contrôle express de trois questions.** Il se fait en deux minutes, juste après avoir lu la section, et il sert à une seule chose : savoir si on peut passer à la suivante. Une réponse fausse, et on relit les quelques lignes juste au-dessus — c'est le moment où ça coûte le moins cher.

**Ce sont des exercices, pas des questions de cours.** On n'y demande jamais de réciter une formule : on demande de **calculer** $\cos\dfrac{5\pi}{6}$, de résoudre $\sin x = \dfrac{\sqrt2}{2}$, de dériver $\tan(2x)$. Savoir énoncer une règle et savoir s'en servir sont deux choses différentes, et c'est la seconde que le QCM mesure.

**Et le chapitre se termine par huit exercices**, toujours au format QCM mais d'un autre calibre : deux ou trois étapes chacun, plusieurs sections mobilisées à la fois, dont un problème concret. Ils sont à garder pour la fin, une fois tout lu.

Les tests de passage ci-dessus restent plus exigeants, et c'est voulu : écrire de mémoire est plus dur que reconnaître parmi trois propositions. Fais le contrôle pour vérifier que tu sais **t'en servir**, le test de passage pour vérifier que tu as **retenu**.

**Si tu n'as qu'une heure devant toi**, fais l'étape 1 puis l'étape 4, et reviens aux étapes 2 et 3 ensuite. C'est le seul ordre qui rapporte des points immédiatement : une dérivée de $\sin(3x)$ se calcule sans rien savoir des symétries.

La section [Ce qu'il faut savoir par cœur](#ce-quil-faut-savoir-par-cœur), en fin de page, sépare le peu qui s'apprend du beaucoup qui se relit sur la figure.
::

## 1. Du triangle rectangle au cercle

Au collège, le cosinus se définit dans un **triangle rectangle** :

$$
\cos\alpha = \frac{\text{adjacent}}{\text{hypoténuse}} \qquad \sin\alpha = \frac{\text{opposé}}{\text{hypoténuse}}
$$

$$
\tan\alpha = \frac{\text{opposé}}{\text{adjacent}} = \frac{\sin\alpha}{\cos\alpha}
$$

*(« adjacent » et « opposé » désignent les côtés adjacent et opposé à l'angle $\alpha$.)*

Cette définition a deux défauts : elle ne marche que pour un angle **aigu** (entre $0$ et $90°$), et elle oblige à traîner une hypoténuse dont la longueur ne nous intéresse pas.

**L'idée du cercle trigonométrique** : on fixe une fois pour toutes l'hypoténuse à $1$. Concrètement, on place le triangle dans un repère, l'angle au centre $O$, et on fait tourner le point $M$ sur le cercle de rayon $1$. Comme l'hypoténuse vaut $1$, les deux quotients ci-dessus se simplifient d'eux-mêmes :

$$
\cos\alpha = \frac{\text{adjacent}}{1} = \text{adjacent} \qquad \sin\alpha = \frac{\text{opposé}}{1} = \text{opposé}
$$

Autrement dit, **le côté adjacent est l'abscisse du point $M$, et le côté opposé son ordonnée**. D'où la définition qu'on garde pour tout le reste du cours — si $M$ est le point du cercle de rayon $1$ repéré par l'angle $\theta$, alors

$$
\boxed{\;M\,(\cos\theta\ ;\ \sin\theta)\;}
$$

Le gain est immédiat : le point peut maintenant tourner **sans limite**, dans les deux sens, et $\cos$ et $\sin$ restent définis pour tout angle — y compris obtus, négatif, ou supérieur à un tour.

::cercle-trigo{titre="Le cercle trigonométrique" resume="Déplace le point M, ou clique n’importe où dans le cercle. Le segment horizontal est cos θ, le segment vertical est sin θ." angle="60" modes="explorer"}
::

**Deux conventions, à ne jamais oublier** :

- On part **de l'axe horizontal, à droite** (le point $(1;0)$), c'est-à-dire de l'angle $0$.
- On tourne dans le **sens direct**, c'est-à-dire **anti-horaire**. Un angle négatif se lit donc dans le sens des aiguilles d'une montre.

:::qcm{titre="Contrôle express — la figure" icone="i-lucide-circle-check-big" compact}

::qcm-question{label="1." bonne="c"}
Un point du cercle a pour coordonnées $(0\ ;-1)$. L'angle qui le repère est :

#a
$\dfrac{\pi}{2}$

#b
$\pi$

#c
$\dfrac{3\pi}{2}$

#solution
Abscisse nulle, ordonnée $-1$ : le point est **tout en bas** du cercle. En partant de la droite et en tournant dans le sens direct, on y arrive après trois quarts de tour.

$$
\cos\frac{3\pi}{2} = 0 \qquad \sin\frac{3\pi}{2} = -1
$$

**a** est le point du haut $(0\ ;1)$, **b** le point de gauche $(-1\ ;0)$.
::

::qcm-question{label="2." bonne="b"}
On lit sur le cercle que l'abscisse du point $M$ vaut $-\dfrac12$. On en déduit :

#a
$\sin\theta = -\dfrac12$

#b
$\cos\theta = -\dfrac12$

#c
$\tan\theta = -\dfrac12$

#solution
**L'abscisse est le cosinus.** C'est la lecture horizontale, celle qu'on fait sur l'axe des $x$.

$$
M\left(\cos\theta\ ;\sin\theta\right)
$$

L'ordonnée aurait donné le sinus, et la tangente ne se lit pas du tout sur ces deux axes : elle se lit sur la droite verticale d'abscisse $1$.
::

::qcm-question{label="3." bonne="a"}
Dans un triangle rectangle, l'hypoténuse mesure $2$ et le côté adjacent à l'angle $\alpha$ mesure $1$. Alors $\alpha$ vaut :

#a
$\dfrac{\pi}{3}$

#b
$\dfrac{\pi}{6}$

#c
$\dfrac{\pi}{4}$

#solution
$$
\cos\alpha = \frac{\text{adjacent}}{\text{hypoténuse}} = \frac{1}{2}
$$

L'angle dont le cosinus vaut $\dfrac12$ est $\dfrac{\pi}{3}$, soit $60°$.

⚠️ **Le piège classique** : $\dfrac{\pi}{6}$ a pour **sinus** $\dfrac12$, pas pour cosinus. Le repère qui tranche : $\dfrac{\pi}{6}$ est un petit angle, donc son cosinus est **grand** — $\dfrac{\sqrt3}{2}$.
::

:::



## 2. Le radian, ou pourquoi π traîne partout

Un angle peut se mesurer en degrés — un tour complet vaut $360°$ — mais en analyse on le mesure en **radians** : la mesure d'un angle est alors **la longueur de l'arc qu'il découpe** sur le cercle de rayon $1$.

Comme le périmètre de ce cercle vaut $2\pi$, un tour complet vaut $2\pi$ radians. D'où toute la table de conversion :

| Tour | Angle | En degrés | En radians |
|---|---|---|---|
| tour complet | — | $360°$ | $2\pi$ |
| demi-tour | angle plat | $180°$ | $\pi$ |
| quart de tour | angle droit | $90°$ | $\dfrac{\pi}{2}$ |
| sixième de tour | — | $60°$ | $\dfrac{\pi}{3}$ |
| huitième de tour | — | $45°$ | $\dfrac{\pi}{4}$ |
| douzième de tour | — | $30°$ | $\dfrac{\pi}{6}$ |

**La conversion**, dans les deux sens, découle de $180° = \pi$ :

$$
\text{degrés} \longrightarrow \text{radians} \ : \ \times\frac{\pi}{180}
$$

$$
\text{radians} \longrightarrow \text{degrés} \ : \ \times\frac{180}{\pi}
$$

::rappel{titre="Pourquoi s'embêter avec les radians ?" icone="i-lucide-help-circle"}
Parce que les formules de dérivation n'y sont vraies qu'en radians. $\sin' = \cos$ **suppose** que $x$ est en radians ; en degrés, la dérivée vaudrait $\frac{\pi}{180}\cos x$, et toutes les formules du chapitre se traîneraient ce facteur. Le radian est le choix qui rend l'analyse propre — c'est sa seule raison d'être.
::

:::qcm{titre="Contrôle express — le radian" icone="i-lucide-circle-check-big" compact}

::qcm-question{label="1." bonne="b"}
$135°$ valent, en radians :

#a
$\dfrac{2\pi}{3}$

#b
$\dfrac{3\pi}{4}$

#c
$\dfrac{5\pi}{6}$

#solution
On multiplie par $\dfrac{\pi}{180}$ :

$$
135\times\frac{\pi}{180} = \frac{135\pi}{180} = \frac{3\pi}{4}
$$

**Le contrôle sans calcul** : $135° = 180°-45°$, et $45°$ vaut $\dfrac{\pi}{4}$. Donc $\pi-\dfrac{\pi}{4} = \dfrac{3\pi}{4}$.

Les distracteurs correspondent à $120°$ et $150°$.
::

::qcm-question{label="2." bonne="a"}
$\dfrac{7\pi}{6}$ vaut, en degrés :

#a
$210°$

#b
$240°$

#c
$150°$

#solution
On multiplie par $\dfrac{180}{\pi}$, ce qui revient à remplacer $\pi$ par $180$ :

$$
\frac{7\times 180}{6} = 7\times 30 = 210°
$$

**Le raccourci qui va toujours plus vite** : $\dfrac{\pi}{6}$ vaut $30°$, donc $\dfrac{7\pi}{6}$ vaut $7\times 30 = 210°$. Il suffit de connaître la valeur en degrés du dénominateur.
::

::qcm-question{label="3." bonne="c"}
Sur le cercle de rayon $1$, on part de $0$ et on tourne jusqu'à l'angle $\dfrac{5\pi}{4}$. La longueur de l'arc parcouru vaut :

#a
$225$

#b
$\dfrac{5\pi}{8}$

#c
$\dfrac{5\pi}{4}$

#solution
C'est **la définition même du radian** : sur le cercle de rayon $1$, la mesure de l'angle **est** la longueur de l'arc qu'il découpe. Il n'y a aucun calcul à faire.

$$
\text{longueur d'arc} = \theta = \frac{5\pi}{4}
$$

**a** est la mesure en degrés, qui ne mesure aucune longueur. **b** divise par $2$ sans raison.

**Le contrôle** : un tour complet fait $2\pi$ de long, et $\dfrac{5\pi}{4}$ est un peu plus d'un demi-tour — cohérent.
::

:::



## 3. Lire un cosinus et un sinus sur le cercle

Une fois la figure en place, tout se lit directement.

**Le cosinus est une abscisse, le sinus une ordonnée.** C'est la phrase à se répéter. Elle donne à elle seule trois propriétés :

- **L'encadrement** : le point reste sur le cercle, donc son abscisse et son ordonnée restent entre $-1$ et $1$.

$$
-1 \leqslant \cos\theta \leqslant 1 \qquad\qquad -1 \leqslant \sin\theta \leqslant 1
$$

- **L'identité de Pythagore** : $M$ est à distance $1$ de l'origine, et $OM^2 = x_M^2+y_M^2$. Donc

$$
\boxed{\cos^2\theta+\sin^2\theta = 1} \qquad \text{pour \textbf{tout} } \theta
$$

- **Les signes**, qui ne dépendent que du quadrant où se trouve $M$ :

| Quadrant | Angle | $\cos\theta$ | $\sin\theta$ |
|---|---|---|---|
| 1ᵉʳ (en haut à droite) | $\left]0,\dfrac{\pi}{2}\right[$ | $+$ | $+$ |
| 2ᵉ (en haut à gauche) | $\left]\dfrac{\pi}{2},\pi\right[$ | $-$ | $+$ |
| 3ᵉ (en bas à gauche) | $\left]\pi,\dfrac{3\pi}{2}\right[$ | $-$ | $-$ |
| 4ᵉ (en bas à droite) | $\left]\dfrac{3\pi}{2},2\pi\right[$ | $+$ | $-$ |

Ce tableau **n'est pas à apprendre** : il se relit sur la figure en une seconde. À gauche de l'axe vertical, l'abscisse est négative, donc le cosinus aussi ; sous l'axe horizontal, l'ordonnée est négative, donc le sinus aussi.

::rappel{titre="Le réflexe qui sert dans tout le programme" icone="i-lucide-target"}
Le couple **(signe du cosinus, signe du sinus)** désigne un quadrant, et un seul. C'est exactement ce qui permet de trancher un argument de nombre complexe : $\cos\theta = -\frac12$ laisse hésiter entre $\frac{2\pi}{3}$ et $-\frac{2\pi}{3}$, mais ajouter $\sin\theta > 0$ ne laisse plus qu'une possibilité.
::

:::qcm{titre="Contrôle express — lire le cercle" icone="i-lucide-circle-check-big" compact}

::qcm-question{label="1." bonne="a"}
On sait que $\cos\theta = \dfrac35$ et que $\theta$ est dans le premier quadrant. Alors $\sin\theta$ vaut :

#a
$\dfrac45$

#b
$\dfrac25$

#c
$-\dfrac45$

#solution
On passe par l'identité de Pythagore :

$$
\sin^2\theta = 1-\cos^2\theta = 1-\frac{9}{25} = \frac{16}{25}
$$

$$
\sin\theta = \pm\frac45
$$

**C'est le quadrant qui tranche le signe** : dans le premier, le sinus est positif.

$$
\boxed{\sin\theta = \frac45}
$$

**b** soustrait les fractions au lieu de leurs carrés, **c** garde la mauvaise racine.
::

::qcm-question{label="2." bonne="c"}
Pour $\theta = \dfrac{4\pi}{3}$, les signes de $\cos\theta$ et $\sin\theta$ sont :

#a
$\cos\theta > 0$ et $\sin\theta < 0$

#b
$\cos\theta < 0$ et $\sin\theta > 0$

#c
$\cos\theta < 0$ et $\sin\theta < 0$

#solution
$\dfrac{4\pi}{3}$ est entre $\pi$ et $\dfrac{3\pi}{2}$ : le point est **en bas à gauche**, dans le troisième quadrant.

À gauche de l'axe vertical, l'abscisse est négative — donc le cosinus. Sous l'axe horizontal, l'ordonnée est négative — donc le sinus.

$$
\cos\frac{4\pi}{3} = -\frac12 \qquad \sin\frac{4\pi}{3} = -\frac{\sqrt3}{2}
$$

Rien à apprendre : on regarde de quel côté de chaque axe se trouve le point.
::

::qcm-question{label="3." bonne="b"}
Peut-on avoir en même temps $\cos\theta = \dfrac34$ et $\sin\theta = \dfrac34$ ?

#a
oui, à condition que $\theta$ soit dans le premier quadrant

#b
non, aucun angle ne convient

#c
oui, pour $\theta = \dfrac{\pi}{4}$

#solution
On teste l'identité de Pythagore, qui doit être vérifiée **pour tout** angle :

$$
\cos^2\theta+\sin^2\theta = \frac{9}{16}+\frac{9}{16} = \frac{18}{16} = \frac98 \neq 1
$$

Aucun angle ne peut donc avoir ces deux valeurs.

**c** est le bon réflexe mais la mauvaise valeur : en $\dfrac{\pi}{4}$ le cosinus et le sinus sont bien **égaux**, mais ils valent $\dfrac{\sqrt2}{2} \approx 0{,}707$, et non $\dfrac34 = 0{,}75$.

**C'est un contrôle à faire systématiquement** : un couple $(\cos, \sin)$ dont la somme des carrés ne fait pas $1$ est impossible, quel que soit le reste de l'énoncé.
::

:::



## 4. Les valeurs remarquables

Cinq angles suffisent à mémoriser. **Les douze autres se lisent, ils ne s'apprennent pas** — la méthode est juste en dessous du tableau.

| $x$ | $0$ | $\dfrac{\pi}{6}$ | $\dfrac{\pi}{4}$ | $\dfrac{\pi}{3}$ | $\dfrac{\pi}{2}$ |
|---|---|---|---|---|---|
| $\cos x$ | $1$ | $\dfrac{\sqrt3}{2}$ | $\dfrac{\sqrt2}{2}$ | $\dfrac{1}{2}$ | $0$ |
| $\sin x$ | $0$ | $\dfrac{1}{2}$ | $\dfrac{\sqrt2}{2}$ | $\dfrac{\sqrt3}{2}$ | $1$ |

**Le moyen mnémotechnique** : écris la ligne des cosinus sous la forme

$$
\frac{\sqrt4}{2},\quad \frac{\sqrt3}{2},\quad \frac{\sqrt2}{2},\quad \frac{\sqrt1}{2},\quad \frac{\sqrt0}{2}
$$

Les entiers descendent de $4$ à $0$, et la ligne des sinus est la même **lue à l'envers**. Il n'y a donc qu'une seule suite à retenir.

**La vérification de bon sens** : quand $\theta$ augmente de $0$ à $\frac{\pi}{2}$, le point monte et se déplace vers la gauche. Le cosinus (l'abscisse) **décroît** de $1$ à $0$, le sinus (l'ordonnée) **croît** de $0$ à $1$. Si ton tableau dit le contraire, tu as inversé les deux lignes.

### Lire n'importe quel point du cercle, sans rien apprendre de plus

Les douze angles remarquables hors des axes ne cachent **aucune valeur nouvelle**. Il n'y en a que trois dans tout le cercle : $\dfrac12$, $\dfrac{\sqrt2}{2}$ et $\dfrac{\sqrt3}{2}$. Ce qui change d'un quadrant à l'autre, ce sont **les signes**, et rien d'autre.

D'où une méthode en deux temps, valable partout, qui ne demande de retenir aucune formule supplémentaire.

::rappel{titre="Le dénominateur donne les valeurs, le quadrant donne les signes" icone="i-lucide-key"}
**1. Le dénominateur désigne la ligne du tableau.** Tout angle remarquable hors des axes s'écrit $\dfrac{n\pi}{d}$ avec $d$ valant $6$, $4$ ou $3$ — et **les valeurs sont toujours celles de $\dfrac{\pi}{d}$**, au signe près.

| Dénominateur | $\lvert\cos\rvert$ | $\lvert\sin\rvert$ |
|---|---|---|
| $6$ | $\dfrac{\sqrt3}{2}$ | $\dfrac12$ |
| $4$ | $\dfrac{\sqrt2}{2}$ | $\dfrac{\sqrt2}{2}$ |
| $3$ | $\dfrac12$ | $\dfrac{\sqrt3}{2}$ |

**2. Le quadrant donne les deux signes**, et il se lit sur la figure : à gauche de l'axe vertical le cosinus est négatif, sous l'axe horizontal le sinus est négatif.

Pour trouver le quadrant sans dessiner, on compare la fraction $\dfrac{n}{d}$ à $\dfrac12$, $1$ et $\dfrac32$ — c'est-à-dire à un quart, un demi et trois quarts de tour.

**C'est tout.** Aucune des douze positions ne demande autre chose.
::

**Deux exemples déroulés :**

$\cos\dfrac{5\pi}{6}$ — le dénominateur est $6$, donc la valeur absolue du cosinus est $\dfrac{\sqrt3}{2}$. Comme $\dfrac56$ est entre $\dfrac12$ et $1$, le point est dans le deuxième quadrant, en haut à gauche, où le cosinus est négatif.

$$
\cos\frac{5\pi}{6} = -\frac{\sqrt3}{2}
$$

$\sin\dfrac{4\pi}{3}$ — dénominateur $3$, donc le sinus vaut $\dfrac{\sqrt3}{2}$ en valeur absolue. Comme $\dfrac43$ est entre $1$ et $\dfrac32$, le point est dans le troisième quadrant, en bas à gauche, où le sinus est négatif.

$$
\sin\frac{4\pi}{3} = -\frac{\sqrt3}{2}
$$

::rappel{titre="Et le raccourci par l'angle de référence, qui revient au même" icone="i-lucide-git-compare-arrows"}
Beaucoup préfèrent passer par l'**angle de référence** : l'écart entre le rayon et l'axe **horizontal** le plus proche. Il vaut toujours $\dfrac{\pi}{6}$, $\dfrac{\pi}{4}$ ou $\dfrac{\pi}{3}$, et se calcule selon le quadrant :

| Quadrant | Position | Angle de référence |
|---|---|---|
| 1 | en haut à droite | $\theta$ |
| 2 | en haut à gauche | $\pi-\theta$ |
| 3 | en bas à gauche | $\theta-\pi$ |
| 4 | en bas à droite | $2\pi-\theta$ |

C'est exactement la même chose : le calcul redonne toujours $\dfrac{\pi}{d}$. Sur $\dfrac{5\pi}{6}$, on retrouve $\pi-\dfrac{5\pi}{6} = \dfrac{\pi}{6}$ — le dénominateur l'annonçait déjà.

⚠️ **Une écriture à surveiller** dans ce raccourci : le supplémentaire de $\dfrac{\pi}{3}$ s'écrit $\pi-\dfrac{\pi}{3} = \dfrac{2\pi}{3}$, et **jamais $1-\dfrac{\pi}{3}$**. Le demi-tour vaut $\pi$, pas $1$ — écrire $1$ mélange une mesure d'angle avec un nombre sans dimension, et le résultat n'est plus un angle remarquable du tout.
::

**Le tableau complet**, une fois la méthode comprise — à ne pas apprendre, mais à savoir reconstruire :

| Quadrant | Dénominateur $6$ | Dénominateur $4$ | Dénominateur $3$ |
|---|---|---|---|
| **1** en haut à droite | $\dfrac{\pi}{6}$ : $\left(\dfrac{\sqrt3}{2}\,;\dfrac12\right)$ | $\dfrac{\pi}{4}$ : $\left(\dfrac{\sqrt2}{2}\,;\dfrac{\sqrt2}{2}\right)$ | $\dfrac{\pi}{3}$ : $\left(\dfrac12\,;\dfrac{\sqrt3}{2}\right)$ |
| **2** en haut à gauche | $\dfrac{5\pi}{6}$ : $\left(-\dfrac{\sqrt3}{2}\,;\dfrac12\right)$ | $\dfrac{3\pi}{4}$ : $\left(-\dfrac{\sqrt2}{2}\,;\dfrac{\sqrt2}{2}\right)$ | $\dfrac{2\pi}{3}$ : $\left(-\dfrac12\,;\dfrac{\sqrt3}{2}\right)$ |
| **3** en bas à gauche | $\dfrac{7\pi}{6}$ : $\left(-\dfrac{\sqrt3}{2}\,;-\dfrac12\right)$ | $\dfrac{5\pi}{4}$ : $\left(-\dfrac{\sqrt2}{2}\,;-\dfrac{\sqrt2}{2}\right)$ | $\dfrac{4\pi}{3}$ : $\left(-\dfrac12\,;-\dfrac{\sqrt3}{2}\right)$ |
| **4** en bas à droite | $\dfrac{11\pi}{6}$ : $\left(\dfrac{\sqrt3}{2}\,;-\dfrac12\right)$ | $\dfrac{7\pi}{4}$ : $\left(\dfrac{\sqrt2}{2}\,;-\dfrac{\sqrt2}{2}\right)$ | $\dfrac{5\pi}{3}$ : $\left(\dfrac12\,;-\dfrac{\sqrt3}{2}\right)$ |

Chaque colonne ne contient **qu'un seul couple de valeurs**, répété quatre fois avec les quatre combinaisons de signes. C'est ce que dit la méthode, écrit en entier.

**Le contrôle qui rattrape presque toutes les erreurs de signe** : sur la figure, un point en haut a un sinus positif, un point à droite un cosinus positif. Deux regards, aucun calcul.

::cercle-trigo{titre="Placer les angles usuels" resume="Clique sur une étiquette du cercle, ou sur une pastille sous la figure : les valeurs exactes s’affichent à droite." angle="30" modes="explorer"}
::

:::qcm{titre="Contrôle express — les valeurs remarquables" icone="i-lucide-circle-check-big" compact}

::qcm-question{label="1." bonne="b"}
$\cos\dfrac{5\pi}{4} = $

#a
$\dfrac{\sqrt2}{2}$

#b
$-\dfrac{\sqrt2}{2}$

#c
$-\dfrac12$

#solution
**Le dénominateur donne la valeur** : il vaut $4$, donc le cosinus vaut $\dfrac{\sqrt2}{2}$ en valeur absolue — celle de $\dfrac{\pi}{4}$.

**Le quadrant donne le signe** : $\dfrac54$ est entre $1$ et $\dfrac32$, donc le point est dans le troisième quadrant, **en bas à gauche**. À gauche, le cosinus est négatif.

$$
\cos\frac{5\pi}{4} = -\frac{\sqrt2}{2}
$$

**c** a le bon signe mais la mauvaise valeur : $\dfrac12$ appartient au dénominateur $3$, pas au $4$.

**Le contrôle** : $\dfrac{5\pi}{4}$ est juste après $\pi$, donc tout près du point $(-1\ ;0)$ — un cosinus proche de $-1$, ce que $-\dfrac{\sqrt2}{2} \approx -0{,}71$ respecte.
::

::qcm-question{label="2." bonne="c"}
$2\sin\dfrac{\pi}{3}\cos\dfrac{\pi}{3} = $

#a
$\dfrac{\sqrt3}{4}$

#b
$\dfrac12$

#c
$\dfrac{\sqrt3}{2}$

#solution
On remplace, puis on simplifie :

$$
2\times\frac{\sqrt3}{2}\times\frac12 = \frac{\sqrt3}{2}
$$

**Le second chemin**, plus rapide une fois la section 11 lue : $2\sin a\cos a = \sin(2a)$, donc l'expression vaut $\sin\dfrac{2\pi}{3} = \dfrac{\sqrt3}{2}$. Les deux routes se rejoignent.

**a** oublie le facteur $2$ de devant.
::

::qcm-question{label="3." bonne="a"}
$\cos^2\dfrac{\pi}{6}-\sin^2\dfrac{\pi}{6} = $

#a
$\dfrac12$

#b
$1$

#c
$\dfrac{\sqrt3}{2}$

#solution
On élève au carré **avant** de soustraire :

$$
\left(\frac{\sqrt3}{2}\right)^2-\left(\frac12\right)^2 = \frac34-\frac14 = \frac12
$$

⚠️ **b** est le piège : c'est la valeur de $\cos^2+\sin^2$. Avec un **moins**, le résultat dépend de l'angle et ne vaut certainement pas $1$.

**Le second chemin** : $\cos^2a-\sin^2a = \cos(2a)$, donc l'expression vaut $\cos\dfrac{\pi}{3} = \dfrac12$. Même résultat.
::

:::



## 5. Périodicité et parité

**Périodicité.** Ajouter un tour complet ramène au même point. Donc, pour tout $k\in\mathbb{Z}$ :

$$
\cos(\theta+2k\pi) = \cos\theta \qquad\qquad \sin(\theta+2k\pi) = \sin\theta
$$

C'est ce qui permet de **ramener n'importe quel angle dans $[0,2\pi[$** avant de chercher sa valeur : $\dfrac{13\pi}{6} = \dfrac{\pi}{6}+2\pi$ donne le même point que $\dfrac{\pi}{6}$.

**Parité.** Tourner de $-\theta$ au lieu de $\theta$, c'est prendre le symétrique par rapport à l'axe horizontal : l'abscisse ne bouge pas, l'ordonnée change de signe.

$$
\cos(-\theta) = \cos\theta \quad \text{(cos est \textbf{paire})} \qquad\qquad \sin(-\theta) = -\sin\theta \quad \text{(sin est \textbf{impaire})}
$$

:::qcm{titre="Contrôle express — périodicité et parité" icone="i-lucide-circle-check-big" compact}

::qcm-question{label="1." bonne="c"}
$\cos\dfrac{9\pi}{4} = $

#a
$-\dfrac{\sqrt2}{2}$

#b
$\dfrac12$

#c
$\dfrac{\sqrt2}{2}$

#solution
On retire un tour complet, c'est-à-dire $2\pi = \dfrac{8\pi}{4}$ :

$$
\frac{9\pi}{4}-2\pi = \frac{9\pi}{4}-\frac{8\pi}{4} = \frac{\pi}{4}
$$

$$
\cos\frac{9\pi}{4} = \cos\frac{\pi}{4} = \frac{\sqrt2}{2}
$$

**La méthode** : mettre $2\pi$ au même dénominateur que l'angle, puis retrancher. Ici $2\pi$ devient $\dfrac{8\pi}{4}$, et la soustraction se fait sur les numérateurs.
::

::qcm-question{label="2." bonne="b"}
$\sin\left(-\dfrac{\pi}{6}\right) = $

#a
$\dfrac12$

#b
$-\dfrac12$

#c
$-\dfrac{\sqrt3}{2}$

#solution
Le sinus est **impair** : changer le signe de l'angle change le signe du résultat.

$$
\sin\left(-\frac{\pi}{6}\right) = -\sin\frac{\pi}{6} = -\frac12
$$

**a** traiterait le sinus comme une fonction paire — c'est le cosinus qui l'est. **c** confond les valeurs de $\dfrac{\pi}{6}$ et de $\dfrac{\pi}{3}$.
::

::qcm-question{label="3." bonne="a"}
$\sin\dfrac{25\pi}{6} = $

#a
$\dfrac12$

#b
$-\dfrac12$

#c
$\dfrac{\sqrt3}{2}$

#solution
L'angle dépasse largement un tour : on retire des tours complets jusqu'à retomber dans $[0\,;2\pi[$. Ici $2\pi = \dfrac{12\pi}{6}$, et il faut en retirer **deux** :

$$
\frac{25\pi}{6}-\frac{24\pi}{6} = \frac{\pi}{6}
$$

$$
\sin\frac{25\pi}{6} = \sin\frac{\pi}{6} = \frac12
$$

**Le raccourci** : $25 = 24+1$, et $24$ est un multiple de $12$. Il suffit donc de regarder le **reste** de $25$ dans la division par $12$.
::

:::



## 6. Les angles associés, ou les quatre symétries

Il n'y a pas huit formules à retenir dans cette section. Il y a **une seule question** à se poser, toujours la même :

::rappel{titre="La question qui remplace les huit formules" icone="i-lucide-key"}
**Où atterrit le point, et qu'arrive-t-il à ses deux coordonnées ?**

Comme l'abscisse **est** le cosinus et l'ordonnée **est** le sinus, répondre à cette question, c'est écrire la formule. Il n'y a rien de plus.
::

Et la réponse suit une règle unique pour les trois premières symétries :

$$
\boxed{\text{une coordonnée change de signe si, et seulement si, le point traverse l'axe correspondant}}
$$

- le point traverse l'axe **horizontal** → l'ordonnée change de signe → **le sinus** change de signe ;
- le point traverse l'axe **vertical** → l'abscisse change de signe → **le cosinus** change de signe.

Deux axes, deux réponses indépendantes : cela fait exactement trois cas non triviaux, et ce sont les trois premières symétries. La quatrième est d'une autre nature — elle ne change aucun signe, elle **échange** les deux coordonnées.

Les quatre cas sont détaillés un par un ci-dessous, **chacun avec sa propre figure** : un seul point image à la fois, plutôt que quatre superposés. **Le tableau récapitulatif est à la fin** — il ne sert à rien tant que le mécanisme n'est pas acquis, et devient inutile une fois qu'il l'est.

Dans les quatre cas, on part du même angle $\theta = \dfrac{\pi}{3}$, soit $60°$, pour lequel

$$
\cos\frac{\pi}{3} = \frac12 \qquad\qquad \sin\frac{\pi}{3} = \frac{\sqrt3}{2}
$$

Sur chaque figure, **$M$ est le point de départ et $M'$ son image**. Fais glisser le point : la figure et les valeurs suivent, et la relation reste vraie quel que soit l'angle.

### Symétrie 1 — l'angle opposé, le miroir horizontal

**L'angle est $-\theta$.** Le point bascule **sous** l'axe horizontal, à la verticale de sa position de départ. Il traverse donc l'axe horizontal, et lui seul.

Son abscisse ne bouge pas, son ordonnée devient l'opposée :

$$
\cos(-\theta) = \cos\theta \qquad\qquad \sin(-\theta) = -\sin\theta
$$

**Sur l'exemple**, avec $-\dfrac{\pi}{3}$ :

$$
\cos\left(-\frac{\pi}{3}\right) = \frac12 \qquad\qquad \sin\left(-\frac{\pi}{3}\right) = -\frac{\sqrt3}{2}
$$

::cercle-trigo{titre="Le miroir horizontal, sur un exemple" resume="θ vaut π/3, soit 60°. Le point image est à la même distance de l’axe horizontal, mais dessous : même abscisse, ordonnée opposée." angle="60" mode="symetries" modes="symetries" symetries="oppose"}
::

C'est la **parité** vue à la section 5 : le cosinus est pair, le sinus est impair.

### Symétrie 2 — l'angle supplémentaire, le miroir vertical

**L'angle est $\pi-\theta$.** Le point bascule **à gauche** de l'axe vertical, à la même hauteur. Il traverse l'axe vertical, et lui seul.

Son ordonnée ne bouge pas, son abscisse devient l'opposée :

$$
\cos(\pi-\theta) = -\cos\theta \qquad\qquad \sin(\pi-\theta) = \sin\theta
$$

**Sur l'exemple**, avec $\pi-\dfrac{\pi}{3} = \dfrac{2\pi}{3}$ :

$$
\cos\frac{2\pi}{3} = -\frac12 \qquad\qquad \sin\frac{2\pi}{3} = \frac{\sqrt3}{2}
$$

::cercle-trigo{titre="Le miroir vertical, sur un exemple" resume="θ vaut π/3, soit 60° ; son image est en 2π/3. Les deux points sont à la même hauteur, de part et d’autre de l’axe vertical." angle="60" mode="symetries" modes="symetries" symetries="supplementaire"}
::

⚠️ **C'est cette symétrie qui produit la seconde famille de solutions** de l'équation $\sin A = \sin B$ : deux angles ont le même sinus lorsqu'ils sont **supplémentaires**, pas seulement lorsqu'ils sont égaux.

### Symétrie 3 — le demi-tour

**L'angle est $\pi+\theta$.** Le point part de l'autre côté du centre. Il traverse **les deux** axes, donc les deux coordonnées changent de signe :

$$
\cos(\pi+\theta) = -\cos\theta \qquad\qquad \sin(\pi+\theta) = -\sin\theta
$$

**Sur l'exemple**, avec $\pi+\dfrac{\pi}{3} = \dfrac{4\pi}{3}$ :

$$
\cos\frac{4\pi}{3} = -\frac12 \qquad\qquad \sin\frac{4\pi}{3} = -\frac{\sqrt3}{2}
$$

::cercle-trigo{titre="Le demi-tour, sur un exemple" resume="θ vaut π/3, soit 60° ; son image est en 4π/3. Le point est passé de l’autre côté du centre, donc des deux axes à la fois." angle="60" mode="symetries" modes="symetries" symetries="antipode"}
::

Rien à apprendre ici non plus : c'est la symétrie 1 suivie de la symétrie 2, donc les deux effets se cumulent.

### Symétrie 4 — l'angle complémentaire, le miroir diagonal

**L'angle est $\dfrac{\pi}{2}-\theta$.** Celle-ci est **d'une autre nature**, et c'est la seule qu'il faut regarder à part. Le miroir est la diagonale $y = x$, et réfléchir un point dans cette diagonale revient à **échanger son abscisse et son ordonnée** :

$$
M\left(\cos\theta\ ;\sin\theta\right) \longmapsto M'\left(\sin\theta\ ;\cos\theta\right)
$$

Aucun signe ne change. Ce sont les **rôles** de $\cos$ et $\sin$ qui s'échangent :

$$
\cos\left(\frac{\pi}{2}-\theta\right) = \sin\theta \qquad\qquad \sin\left(\frac{\pi}{2}-\theta\right) = \cos\theta
$$

**Sur l'exemple**, avec $\dfrac{\pi}{2}-\dfrac{\pi}{3} = \dfrac{\pi}{6}$ :

$$
\cos\frac{\pi}{6} = \frac{\sqrt3}{2} = \sin\frac{\pi}{3} \qquad\qquad \sin\frac{\pi}{6} = \frac12 = \cos\frac{\pi}{3}
$$

::cercle-trigo{titre="Le miroir diagonal, sur un exemple" resume="θ vaut π/3, soit 60° ; son image est en π/6. Compare les deux couples de coordonnées : ce sont les mêmes, échangées." angle="60" mode="symetries" modes="symetries" symetries="complementaire"}
::

Les valeurs de $\dfrac{\pi}{6}$ et de $\dfrac{\pi}{3}$ sont bien les mêmes, **croisées**. C'est d'ailleurs la vraie raison pour laquelle ces deux angles se confondent si facilement.

::rappel{titre="Pourquoi celle-là échange, au lieu de changer les signes" icone="i-lucide-help-circle"}
La démonstration la plus courte tient dans un triangle rectangle. Ses deux angles aigus valent **ensemble** $\dfrac{\pi}{2}$ : si l'un vaut $\theta$, l'autre vaut $\dfrac{\pi}{2}-\theta$. On dit qu'ils sont **complémentaires**.

Or le côté **opposé** au premier angle est le côté **adjacent** au second. Donc « opposé sur hypoténuse » pour l'un — c'est-à-dire le sinus — est exactement « adjacent sur hypoténuse » pour l'autre — c'est-à-dire le cosinus.

$$
\sin\theta = \cos\left(\frac{\pi}{2}-\theta\right)
$$

**C'est la plus utile des quatre en pratique** : c'est elle qui convertit un sinus en cosinus, ce dont on a besoin dès qu'une équation mélange les deux.
::

### Le tableau, une fois le mécanisme compris

| Angle | Le point… | Cosinus | Sinus |
|---|---|---|---|
| $-\theta$ | traverse l'axe **horizontal** | $\cos(-\theta) = \cos\theta$ | $\sin(-\theta) = -\sin\theta$ |
| $\pi-\theta$ | traverse l'axe **vertical** | $\cos(\pi-\theta) = -\cos\theta$ | $\sin(\pi-\theta) = \sin\theta$ |
| $\pi+\theta$ | traverse **les deux** | $\cos(\pi+\theta) = -\cos\theta$ | $\sin(\pi+\theta) = -\sin\theta$ |
| $\dfrac{\pi}{2}-\theta$ | **échange** ses coordonnées | $\cos\!\left(\dfrac{\pi}{2}-\theta\right) = \sin\theta$ | $\sin\!\left(\dfrac{\pi}{2}-\theta\right) = \cos\theta$ |

Une cinquième ligne s'obtient en remplaçant $\theta$ par $-\theta$ dans la quatrième — elle n'est pas à apprendre, seulement à savoir retrouver :

$$
\cos\left(\frac{\pi}{2}+\theta\right) = -\sin\theta \qquad\qquad \sin\left(\frac{\pi}{2}+\theta\right) = \cos\theta
$$

### Reconnaître laquelle utiliser

C'est le seul vrai réflexe à installer. On regarde **comment l'angle est écrit** :

| L'angle ressemble à… | Symétrie à employer | Exemple |
|---|---|---|
| $\pi - \ldots$ | le miroir vertical | $\dfrac{5\pi}{6} = \pi-\dfrac{\pi}{6}$ |
| $\pi + \ldots$ | le demi-tour | $\dfrac{7\pi}{6} = \pi+\dfrac{\pi}{6}$ |
| $-\ldots$ ou $2\pi - \ldots$ | le miroir horizontal | $\dfrac{11\pi}{6} = 2\pi-\dfrac{\pi}{6}$ |
| un sinus à convertir en cosinus | le miroir diagonal | $\sin\dfrac{\pi}{3} = \cos\!\left(\dfrac{\pi}{2}-\dfrac{\pi}{3}\right) = \cos\dfrac{\pi}{6}$ |

**Les trois premières lignes servent à calculer une valeur** : on réécrit l'angle inconnu en fonction d'un angle **du tableau des valeurs remarquables**, puis on applique la symétrie. La quatrième sert à autre chose : elle ne simplifie pas un angle, elle **change de fonction**, et c'est ce qu'on lui demande dans les équations.

::rappel{titre="Le point qui bloque le plus souvent : θ n'est pas forcément un angle « nu »" icone="i-lucide-key"}
Ces formules sont des **identités** : elles sont vraies pour *tout* $\theta$. On a donc le droit de remplacer $\theta$ par n'importe quelle expression — à condition de la remplacer **partout**.

Avec $\theta = 2x$ :

$$
\sin(2x) = \cos\!\left(\frac{\pi}{2}-2x\right)
$$

Avec $\theta = x+\dfrac{\pi}{3}$ :

$$
\sin\!\left(x+\frac{\pi}{3}\right) = \cos\!\left(\frac{\pi}{2}-\left(x+\frac{\pi}{3}\right)\right) = \cos\!\left(\frac{\pi}{6}-x\right)
$$

⚠️ **Le piège est dans la parenthèse.** Le signe moins porte sur **toute** l'expression : $-\left(x+\dfrac{\pi}{3}\right)$ vaut $-x-\dfrac{\pi}{3}$, et non $-x+\dfrac{\pi}{3}$.

C'est le mécanisme exact de la conversion utilisée pour résoudre une équation qui mélange sinus et cosinus. On ne « transforme » pas l'équation : on réécrit un sinus en cosinus pour que les deux membres soient écrits avec la même fonction.
::

::rappel{titre="La méthode générale pour un angle quelconque" icone="i-lucide-list-ordered"}
1. **Périodicité** : ajouter ou retirer des $2\pi$ pour ramener l'angle dans $[0,2\pi[$ — ou dans $]-\pi,\pi]$, souvent plus commode.
2. **Symétrie** : reconnaître l'écriture — voir le tableau ci-dessus — pour ramener l'angle dans le premier quadrant $\left[0,\frac{\pi}{2}\right]$.
3. **Table** : lire la valeur dans le tableau des valeurs remarquables.
4. **Signe** : le remettre d'après le quadrant de départ.

Exemple complet : $\cos\dfrac{11\pi}{6}$. On a $\dfrac{11\pi}{6} = 2\pi-\dfrac{\pi}{6}$, donc c'est $\cos\!\left(-\dfrac{\pi}{6}\right) = \cos\dfrac{\pi}{6} = \dfrac{\sqrt3}{2}$. Contrôle : $\dfrac{11\pi}{6}$ est dans le 4ᵉ quadrant, où le cosinus est positif. Cohérent.
::


:::qcm{titre="Contrôle express — les angles associés" icone="i-lucide-circle-check-big" compact}

::qcm-question{label="1." bonne="b"}
$\cos\dfrac{5\pi}{6} = $

#a
$\dfrac{\sqrt3}{2}$

#b
$-\dfrac{\sqrt3}{2}$

#c
$-\dfrac12$

#solution
On réécrit l'angle pour faire apparaître une valeur remarquable :

$$
\frac{5\pi}{6} = \pi-\frac{\pi}{6}
$$

C'est le **miroir vertical** : le cosinus change de signe, le sinus non.

$$
\cos\frac{5\pi}{6} = -\cos\frac{\pi}{6} = -\frac{\sqrt3}{2}
$$

**Le contrôle** : $\dfrac{5\pi}{6}$ est dans le deuxième quadrant, en haut à gauche, où le cosinus est négatif. Cohérent.

**c** confond $\dfrac{\pi}{6}$ et $\dfrac{\pi}{3}$ dans la lecture du tableau.
::

::qcm-question{label="2." bonne="a"}
$\sin\dfrac{7\pi}{6} = $

#a
$-\dfrac12$

#b
$\dfrac12$

#c
$-\dfrac{\sqrt3}{2}$

#solution
$$
\frac{7\pi}{6} = \pi+\frac{\pi}{6}
$$

C'est le **demi-tour** : les deux coordonnées changent de signe.

$$
\sin\frac{7\pi}{6} = -\sin\frac{\pi}{6} = -\frac12
$$

**Le contrôle** : $\dfrac{7\pi}{6}$ est juste après $\pi$, donc dans le troisième quadrant, en bas à gauche, où le sinus est négatif. Cohérent.
::

::qcm-question{label="3." bonne="c"}
$\sin(3x)$ s'écrit aussi :

#a
$\cos\left(\dfrac{\pi}{2}-x\right)$

#b
$\cos\left(\pi-3x\right)$

#c
$\cos\left(\dfrac{\pi}{2}-3x\right)$

#solution
L'identité des angles complémentaires, $\sin\theta = \cos\left(\dfrac{\pi}{2}-\theta\right)$, vaut pour **tout** $\theta$ — donc pour $\theta = 3x$, à condition de le remplacer **partout**.

$$
\sin(3x) = \cos\left(\frac{\pi}{2}-3x\right)
$$

**a** n'a fait le remplacement qu'à moitié : il reste un $x$ là où il faudrait $3x$. **b** utilise la mauvaise symétrie — $\cos(\pi-3x)$ vaut $-\cos(3x)$, ce qui n'a rien à voir.

**Le contrôle en dix secondes** : teste en $x = 0$. À gauche $\sin 0 = 0$ ; à droite $\cos\dfrac{\pi}{2} = 0$. Les deux collent. La proposition **b** donnerait $\cos\pi = -1$, donc elle est fausse.
::

:::



## 7. La tangente

$$
\tan\theta = \frac{\sin\theta}{\cos\theta} \qquad \text{définie pour } \cos\theta\neq 0,\ \text{c'est-à-dire } \theta \neq \frac{\pi}{2}+k\pi
$$

Sur la figure, elle se lit sur la **droite verticale d'abscisse $1$** : on prolonge le rayon $OM$ jusqu'à cette droite, et l'ordonnée du point d'arrivée vaut $\tan\theta$. Coche « Montrer tan θ » ci-dessous pour la voir apparaître.

::cercle-trigo{titre="Où se lit la tangente" resume="Coche « Montrer tan θ » sous la figure, puis fais tourner le point vers π/2 : le rayon devient parallèle à la droite, et la tangente part à l’infini." angle="45" modes="explorer"}
::

Ce que la figure rend évident :

- Quand $\theta\to\frac{\pi}{2}$, le rayon devient **parallèle** à la droite verticale : il ne la coupe plus. C'est exactement pour cela que $\tan\frac{\pi}{2}$ n'existe pas.
- Le point diamétralement opposé donne **le même** point d'intersection : la tangente est $\pi$-périodique, et non $2\pi$-périodique.

$$
\tan(\theta+k\pi) = \tan\theta \qquad \tan(-\theta) = -\tan\theta
$$

Les valeurs remarquables s'en déduisent par simple division :

| $x$ | $0$ | $\dfrac{\pi}{6}$ | $\dfrac{\pi}{4}$ | $\dfrac{\pi}{3}$ | $\dfrac{\pi}{2}$ |
|---|---|---|---|---|---|
| $\tan x$ | $0$ | $\dfrac{\sqrt3}{3}$ | $1$ | $\sqrt3$ | non définie |

:::qcm{titre="Contrôle express — la tangente" icone="i-lucide-circle-check-big" compact}

::qcm-question{label="1." bonne="c"}
$\tan\dfrac{2\pi}{3} = $

#a
$\sqrt3$

#b
$-\dfrac{\sqrt3}{3}$

#c
$-\sqrt3$

#solution
On calcule le quotient, après avoir lu les deux valeurs :

$$
\cos\frac{2\pi}{3} = -\frac12 \qquad \sin\frac{2\pi}{3} = \frac{\sqrt3}{2}
$$

$$
\tan\frac{2\pi}{3} = \frac{\frac{\sqrt3}{2}}{-\frac12} = -\sqrt3
$$

**Le contrôle de signe** : dans le deuxième quadrant, sinus positif et cosinus négatif, donc leur quotient est **négatif**. Cela élimine **a** sans calcul.

**b** est $\tan\dfrac{\pi}{6}$ au signe près : c'est l'inverse du bon résultat.
::

::qcm-question{label="2." bonne="a"}
$\tan\dfrac{5\pi}{4} = $

#a
$1$

#b
$-1$

#c
$\sqrt3$

#solution
La tangente est **$\pi$-périodique**, pas $2\pi$-périodique : on retire donc $\pi$, et non un tour complet.

$$
\frac{5\pi}{4}-\pi = \frac{\pi}{4}
$$

$$
\tan\frac{5\pi}{4} = \tan\frac{\pi}{4} = 1
$$

**Le contrôle** : dans le troisième quadrant, cosinus et sinus sont tous deux négatifs, donc leur quotient est **positif**. Cela élimine **b**.

C'est tout l'intérêt de la période $\pi$ : deux points diamétralement opposés donnent la même tangente.
::

::qcm-question{label="3." bonne="b"}
Parmi ces trois valeurs, pour laquelle $\tan x$ n'existe-t-elle pas ?

#a
$x = \dfrac{\pi}{3}$

#b
$x = \dfrac{3\pi}{2}$

#c
$x = \pi$

#solution
La tangente n'existe pas là où le **dénominateur** s'annule, c'est-à-dire là où $\cos x = 0$.

$$
\cos\frac{3\pi}{2} = 0 \quad\Longrightarrow\quad \tan\frac{3\pi}{2} \text{ n'existe pas}
$$

**c** est le piège : en $\pi$, c'est le **sinus** qui s'annule, pas le cosinus. La tangente y existe donc, et vaut $\dfrac{0}{-1} = 0$.

$$
\tan x \text{ existe pour } x \neq \frac{\pi}{2}+k\pi
$$
::

:::



## 8. Résoudre une équation trigonométrique

C'est là qu'on perd le plus de points, toujours pour la même raison : **on n'écrit qu'une famille de solutions sur les deux**. La figure explique pourquoi il y en a deux.

Résoudre $\cos x = k$, c'est chercher les points du cercle dont **l'abscisse** vaut $k$ : on trace la droite verticale d'abscisse $k$, et on regarde où elle coupe le cercle. Tant que $-1 < k < 1$, elle le coupe en **deux points**, symétriques par rapport à l'axe horizontal. De même pour $\sin x = k$, avec une droite horizontale et deux points symétriques par rapport à l'axe vertical.

::cercle-trigo{titre="Les deux solutions d’une équation" resume="Choisis cos ou sin, fais varier k, et regarde la droite couper le cercle. Les deux familles de solutions s’écrivent en dessous." mode="equations" modes="equations"}
::

**Les deux formules du cours** — ce sont les seules à connaître :

$$
\cos A = \cos B \iff A = B+2k\pi \ \text{ ou }\ A = -B+2k\pi \qquad (k\in\mathbb{Z})
$$

$$
\sin A = \sin B \iff A = B+2k\pi \ \text{ ou }\ A = \pi-B+2k\pi \qquad (k\in\mathbb{Z})
$$

Elles se lisent sur la figure : deux angles ont le même cosinus lorsqu'ils sont **opposés** (symétrie par rapport à l'axe horizontal), et le même sinus lorsqu'ils sont **supplémentaires** (symétrie par rapport à l'axe vertical).

Pour la tangente, les deux points d'intersection sont diamétralement opposés, d'où une seule famille avec un pas de $\pi$ :

$$
\tan A = \tan B \iff A = B+k\pi \qquad (k\in\mathbb{Z})
$$

::rappel{titre="La marche à suivre, à chaque fois" icone="i-lucide-list-ordered"}
1. **Uniformiser** : s'il y a un sinus d'un côté et un cosinus de l'autre, tout convertir avec $\sin\theta = \cos\!\left(\frac{\pi}{2}-\theta\right)$.
2. **Reconnaître** l'angle de référence : quel angle usuel a ce cosinus (ou ce sinus) ?
3. **Écrire les deux familles**, sans oublier le $+2k\pi$.
4. **Résoudre chacune** — voir l'encadré ci-dessous : à ce stade il n'y a plus de trigonométrie du tout.
5. **Sélectionner** celles qui tombent dans l'intervalle demandé, en faisant varier $k$ — la seconde famille exige souvent $k=1$.
6. **Vérifier** un représentant de chaque famille dans l'équation de départ.
::

::rappel{titre="Résoudre une famille : c'est du premier degré, rien de plus" icone="i-lucide-calculator"}
Une fois la famille écrite, $x$ n'apparaît plus que dans des sommes : c'est une **équation du premier degré**, et le $2k\pi$ se traite comme n'importe quelle constante. Sur l'exemple $\cos\!\left(\frac{\pi}{2}-2x\right) = \cos\!\left(x+\frac{\pi}{6}\right)$ :

1. **Distribuer le signe** dans la famille « arguments opposés ». Si $B = x+\frac{\pi}{6}$, alors $-B = -x-\frac{\pi}{6}$ : le moins tombe sur les **deux** termes, pas seulement sur le premier.
2. **Rassembler** : les $x$ d'un côté, les multiples de $\pi$ de l'autre.
3. **Réduire au même dénominateur** les fractions de $\pi$ — c'est là que $\frac{\pi}{2}-\frac{\pi}{6}$ devient $\frac{\pi}{3}$, et $\frac{\pi}{2}+\frac{\pi}{6}$ devient $\frac{2\pi}{3}$.
4. **Diviser par le coefficient de $x$** — et diviser **aussi** le $2k\pi$. C'est l'étape la plus souvent ratée : $3x = \frac{\pi}{3}-2k\pi$ donne $x = \frac{\pi}{9}-\frac{2k\pi}{3}$, pas $x = \frac{\pi}{9}-2k\pi$.
5. **Le signe devant $k$ est libre** : $k$ parcourt $\mathbb{Z}$, donc $-\frac{2k\pi}{3}$ et $+\frac{2k\pi}{3}$ décrivent exactement le même ensemble. On écrit $+$ par convention.

**Conséquence de l'étape 4 : les deux familles n'ont pas le même pas.** Si $x$ arrive avec un coefficient $3$, ses solutions sont espacées de $\frac{2\pi}{3}$ — trois par tour — alors qu'une famille où $x$ reste seul en a une seule par tour. Il faut y penser au moment de lister les solutions d'un intervalle.
::

:::qcm{titre="Contrôle express — les équations" icone="i-lucide-circle-check-big" compact}

::qcm-question{label="1." bonne="b"}
Sur $[0\,;2\pi[$, l'ensemble des solutions de $\sin x = \dfrac{\sqrt2}{2}$ est :

#a
$\left\{\dfrac{\pi}{4}\right\}$

#b
$\left\{\dfrac{\pi}{4}\ ;\dfrac{3\pi}{4}\right\}$

#c
$\left\{\dfrac{\pi}{4}\ ;\dfrac{5\pi}{4}\right\}$

#solution
La droite **horizontale** d'ordonnée $\dfrac{\sqrt2}{2}$ coupe le cercle en deux points, symétriques par rapport à l'axe **vertical**. Deux angles ont le même sinus quand ils sont **supplémentaires** :

$$
x = \frac{\pi}{4} \qquad\text{ou}\qquad x = \pi-\frac{\pi}{4} = \frac{3\pi}{4}
$$

**a** est l'erreur numéro un du chapitre : n'écrire qu'une famille sur deux.

**c** applique la règle du **cosinus** — les angles opposés — à une équation en sinus. Contrôle : $\sin\dfrac{5\pi}{4} = -\dfrac{\sqrt2}{2}$, le mauvais signe.
::

::qcm-question{label="2." bonne="c"}
Sur $[0\,;2\pi[$, l'ensemble des solutions de $\cos x = -\dfrac12$ est :

#a
$\left\{\dfrac{2\pi}{3}\right\}$

#b
$\left\{\dfrac{\pi}{3}\ ;\dfrac{2\pi}{3}\right\}$

#c
$\left\{\dfrac{2\pi}{3}\ ;\dfrac{4\pi}{3}\right\}$

#solution
L'angle de référence est $\dfrac{\pi}{3}$, dont le cosinus vaut $\dfrac12$. Comme on veut $-\dfrac12$, on part de $\pi-\dfrac{\pi}{3} = \dfrac{2\pi}{3}$.

Pour le cosinus, la seconde solution est l'angle **opposé**, ramené dans l'intervalle :

$$
-\frac{2\pi}{3}+2\pi = \frac{4\pi}{3}
$$

$$
S = \left\{\frac{2\pi}{3}\ ;\frac{4\pi}{3}\right\}
$$

**Le contrôle** : les deux points doivent être symétriques par rapport à l'axe **horizontal**, donc l'un en haut à gauche et l'autre en bas à gauche. C'est bien le cas — alors que **b** propose deux points du haut, dont un à droite où le cosinus est positif.
::

::qcm-question{label="3." bonne="a"}
Les solutions de $2x = \dfrac{\pi}{3}+2k\pi$ sont :

#a
$x = \dfrac{\pi}{6}+k\pi$

#b
$x = \dfrac{\pi}{6}+2k\pi$

#c
$x = \dfrac{\pi}{3}+k\pi$

#solution
On divise **tout** par $2$, le terme en $k$ compris :

$$
x = \frac{\pi}{6}+\frac{2k\pi}{2} = \frac{\pi}{6}+k\pi
$$

⚠️ **b est l'erreur la plus fréquente du chapitre** : recopier le $2k\pi$ sans le diviser. Ce n'est pas une décoration, c'est un terme de l'équation.

**La conséquence concrète** : avec un pas de $\pi$, il y a **deux** solutions par tour au lieu d'une. Sur $[0\,;2\pi[$ on trouve $\dfrac{\pi}{6}$ et $\dfrac{7\pi}{6}$, alors que **b** n'en donnerait qu'une.
::

:::



## 9. Les fonctions réciproques : arccos, arcsin, arctan

$\cos$, $\sin$ et $\tan$ prennent chaque valeur une infinité de fois : elles ne sont pas bijectives, donc **elles n'ont pas de réciproque** telles quelles. On les **restreint** d'abord à un intervalle où elles sont strictement monotones — un arc du cercle sur lequel chaque valeur n'est atteinte qu'une fois.

| Fonction | restreinte à | Réciproque | à valeurs dans | Dérivée |
|---|---|---|---|---|
| $\cos$ | $[0,\pi]$ | $\arccos : [-1,1]\to$ | $[0,\pi]$ | $\dfrac{-1}{\sqrt{1-x^2}}$ |
| $\sin$ | $\left[-\frac{\pi}{2},\frac{\pi}{2}\right]$ | $\arcsin : [-1,1]\to$ | $\left[-\frac{\pi}{2},\frac{\pi}{2}\right]$ | $\dfrac{1}{\sqrt{1-x^2}}$ |
| $\tan$ | $\left]-\frac{\pi}{2},\frac{\pi}{2}\right[$ | $\arctan : \mathbb{R}\to$ | $\left]-\frac{\pi}{2},\frac{\pi}{2}\right[$ | $\dfrac{1}{1+x^2}$ |

La phrase qui les définit toutes : **$\arccos x$ est l'unique angle de $[0,\pi]$ dont le cosinus vaut $x$** — et de même pour les autres, chacun avec son intervalle.

::cercle-trigo{titre="Le piège de arccos(cos x)" resume="L’arc épais est l’intervalle où la réciproque a le droit d’atterrir. Déplace θ hors de cet arc : le résultat n’est plus θ." angle="225" mode="reciproques" modes="reciproques"}
::

D'où **le piège** : $\arccos(\cos x) = x$ **seulement si** $x\in[0,\pi]$. Sinon, $\arccos$ renvoie l'autre angle de $[0,\pi]$ ayant le même cosinus — c'est exactement le second point d'intersection de la section 8.

**La méthode** : ramener l'angle dans l'intervalle de la réciproque **sans changer la valeur** de la fonction, à l'aide des symétries de la section 6.

$$
\arccos\!\left(\cos\frac{5\pi}{4}\right) : \quad \cos\frac{5\pi}{4} = \cos\!\left(-\frac{5\pi}{4}\right) = \cos\!\left(-\frac{5\pi}{4}+2\pi\right) = \cos\frac{3\pi}{4} \quad\text{et}\quad \frac{3\pi}{4}\in[0,\pi]
$$

La réponse est donc $\dfrac{3\pi}{4}$, et non $\dfrac{5\pi}{4}$.

**Dans l'autre sens, aucun piège** : $\cos(\arccos x) = x$ pour tout $x\in[-1,1]$, $\sin(\arcsin x) = x$, $\tan(\arctan x) = x$. C'est la composition « réciproque **à l'extérieur** » qui demande de la vigilance.

:::qcm{titre="Contrôle express — les réciproques" icone="i-lucide-circle-check-big" compact}

::qcm-question{label="1." bonne="a"}
$\arccos\left(-\dfrac{\sqrt2}{2}\right) = $

#a
$\dfrac{3\pi}{4}$

#b
$\dfrac{\pi}{4}$

#c
$\dfrac{5\pi}{4}$

#solution
On cherche l'unique angle **de $[0\,;\pi]$** dont le cosinus vaut $-\dfrac{\sqrt2}{2}$.

L'angle de référence est $\dfrac{\pi}{4}$ ; comme le cosinus doit être négatif, on prend son supplémentaire :

$$
\pi-\frac{\pi}{4} = \frac{3\pi}{4}
$$

**b** oublie le signe moins. **c** a bien le bon cosinus, mais $\dfrac{5\pi}{4}$ **sort de $[0\,;\pi]$** : c'est le contrôle systématique à faire sur toute question de réciproque.
::

::qcm-question{label="2." bonne="b"}
$\arcsin\left(\sin\dfrac{5\pi}{6}\right) = $

#a
$\dfrac{5\pi}{6}$

#b
$\dfrac{\pi}{6}$

#c
$-\dfrac{\pi}{6}$

#solution
On ne simplifie **pas** : $\arcsin(\sin x) = x$ exige $x\in\left[-\dfrac{\pi}{2}\,;\dfrac{\pi}{2}\right]$, et $\dfrac{5\pi}{6}$ en sort.

On calcule donc l'intérieur d'abord :

$$
\sin\frac{5\pi}{6} = \sin\left(\pi-\frac{\pi}{6}\right) = \sin\frac{\pi}{6} = \frac12
$$

puis on applique $\arcsin$ :

$$
\arcsin\frac12 = \frac{\pi}{6}
$$

**a** est exactement le piège. **Le réflexe qui sauve** : le résultat doit tomber dans $\left[-\dfrac{\pi}{2}\,;\dfrac{\pi}{2}\right]$ — $\dfrac{5\pi}{6}$ n'y est pas.
::

::qcm-question{label="3." bonne="c"}
$\arccos\left(\cos\dfrac{7\pi}{6}\right) = $

#a
$\dfrac{7\pi}{6}$

#b
$\dfrac{\pi}{6}$

#c
$\dfrac{5\pi}{6}$

#solution
Même piège, autre intervalle : $\arccos$ arrive dans $[0\,;\pi]$, et $\dfrac{7\pi}{6}$ en sort.

$$
\cos\frac{7\pi}{6} = \cos\left(\pi+\frac{\pi}{6}\right) = -\cos\frac{\pi}{6} = -\frac{\sqrt3}{2}
$$

$$
\arccos\left(-\frac{\sqrt3}{2}\right) = \frac{5\pi}{6}
$$

**b** oublie que le cosinus est **négatif** et renvoie l'angle de référence.

**Le contrôle** : $\dfrac{5\pi}{6}$ est bien dans $[0\,;\pi]$, et son cosinus vaut bien $-\dfrac{\sqrt3}{2}$. Les deux conditions sont remplies.
::

:::



## 10. Dérivées

$$
\sin' = \cos \qquad \cos' = -\sin \qquad \tan' = 1+\tan^2 = \frac{1}{\cos^2}
$$

et, avec une composée $u$ :

$$
\big(\sin u\big)' = u'\cos u \qquad \big(\cos u\big)' = -u'\sin u \qquad \big(\sin(ax+b)\big)' = a\cos(ax+b)
$$

Le seul point de vigilance est le **signe moins** de la dérivée du cosinus. Il se retrouve sur la figure : quand $\theta$ augmente à partir de $0$, le point part vers la gauche, donc son abscisse — le cosinus — **diminue**. Une fonction qui décroît a bien une dérivée négative.

:::qcm{titre="Contrôle express — les dérivées" icone="i-lucide-circle-check-big" compact}

::qcm-question{label="1." bonne="c"}
La dérivée de $x\mapsto\cos(5x)$ est :

#a
$-\sin(5x)$

#b
$5\sin(5x)$

#c
$-5\sin(5x)$

#solution
$\left(\cos u\right)' = -u'\sin u$, avec $u = 5x$ et $u' = 5$ :

$$
\left(\cos(5x)\right)' = -5\sin(5x)
$$

**Deux choses arrivent en même temps, et il faut les deux** : le cosinus se dérive en $-\sin$, **et** la dérivée de l'intérieur sort en facteur.

**a** oublie le facteur $5$, **b** oublie le signe moins. Chacune coûte la question à elle seule.
::

::qcm-question{label="2." bonne="b"}
La dérivée de $x\mapsto\tan(2x)$ est :

#a
$\dfrac{1}{\cos^2(2x)}$

#b
$\dfrac{2}{\cos^2(2x)}$

#c
$\dfrac{-2}{\cos^2(2x)}$

#solution
$\tan' = \dfrac{1}{\cos^2}$, et la forme composée fait sortir $u' = 2$ :

$$
\left(\tan(2x)\right)' = \frac{2}{\cos^2(2x)} = 2\left(1+\tan^2(2x)\right)
$$

**a** oublie $u'$. **c** ajoute un signe moins qui n'existe pas : la tangente est **croissante** sur chacun de ses intervalles, donc sa dérivée est positive — ce contrôle élimine **c** sans calcul.
::

::qcm-question{label="3." bonne="a"}
La dérivée de $x\mapsto\arcsin(3x)$ est :

#a
$\dfrac{3}{\sqrt{1-9x^2}}$

#b
$\dfrac{1}{\sqrt{1-9x^2}}$

#c
$\dfrac{3}{\sqrt{1-3x^2}}$

#solution
$\left(\arcsin u\right)' = \dfrac{u'}{\sqrt{1-u^2}}$, avec $u = 3x$ et $u' = 3$ :

$$
\left(\arcsin(3x)\right)' = \frac{3}{\sqrt{1-(3x)^2}} = \frac{3}{\sqrt{1-9x^2}}
$$

**b** oublie $u'$ au numérateur.

⚠️ **c est le piège discret** : le $u$ a été reporté au numérateur mais pas sous la racine, où $(3x)^2$ est devenu $3x^2$. **Le carré porte sur tout $u$** — écrire $\sqrt{1-(3x)^2}$ avant de développer coûte deux secondes et l'évite.
::

:::



## 11. Les formules d'addition et de duplication

Ces formules ne servent presque jamais seules : elles servent **dans les autres chapitres**. C'est la duplication qui transforme $\big(\mathrm{sh}^2x\big)'$ en $\mathrm{sh}(2x)$, et c'est l'addition qui fait marcher la multiplication des nombres complexes sous forme exponentielle.

**Les quatre formules d'addition :**

$$
\cos(a+b) = \cos a\cos b-\sin a\sin b \qquad \cos(a-b) = \cos a\cos b+\sin a\sin b
$$

$$
\sin(a+b) = \sin a\cos b+\cos a\sin b \qquad \sin(a-b) = \sin a\cos b-\cos a\sin b
$$

**Le moyen de ne pas les confondre**, en deux lignes :

- le **cosinus** garde les fonctions **ensemble** ($\cos\cos$, puis $\sin\sin$) et **retourne** le signe ;
- le **sinus** **mélange** les fonctions ($\sin\cos$, puis $\cos\sin$) et **garde** le signe.

**La duplication** n'est que le cas $b = a$ :

$$
\sin(2a) = 2\sin a\cos a \qquad \cos(2a) = \cos^2a-\sin^2a
$$

En remplaçant $\sin^2a$ par $1-\cos^2a$, puis $\cos^2a$ par $1-\sin^2a$, la deuxième prend deux autres visages — les trois sont utiles :

$$
\cos(2a) = \cos^2a-\sin^2a = 2\cos^2a-1 = 1-2\sin^2a
$$

**Et la linéarisation** s'en déduit en isolant le carré. Elle sert dès qu'on veut dériver ou intégrer un $\cos^2$ :

$$
\cos^2a = \frac{1+\cos(2a)}{2} \qquad\qquad \sin^2a = \frac{1-\cos(2a)}{2}
$$

::rappel{titre="Tu peux les retrouver au lieu de les apprendre" icone="i-lucide-refresh-cw"}
Les formules d'addition **sont** la multiplication des nombres complexes de module $1$. Développe le produit et compare :

$$
\left(\cos a+i\sin a\right)\left(\cos b+i\sin b\right) = \underbrace{\cos a\cos b-\sin a\sin b}_{\text{partie réelle}}+i\underbrace{\left(\sin a\cos b+\cos a\sin b\right)}_{\text{partie imaginaire}}
$$

Or ce produit vaut $e^{ia}\times e^{ib} = e^{i(a+b)} = \cos(a+b)+i\sin(a+b)$. En identifiant partie réelle et partie imaginaire, les **deux** formules d'addition tombent d'un coup.

**Le contrôle en trois secondes**, si tu hésites sur un signe : prends $a = b = 0$. Toute formule correcte doit donner $\cos 0 = 1$ et $\sin 0 = 0$. Puis prends $a = b = \dfrac{\pi}{2}$ : $\cos\pi$ doit valoir $-1$, ce que seule la version avec le **moins** produit.
::

**Les angles associés de la section 6 en sont des cas particuliers.** Avec $b = \pi$, la première formule donne $\cos(a+\pi) = \cos a\times(-1)-\sin a\times 0 = -\cos a$ — exactement la ligne du tableau. Il n'y a donc pas vingt formules à retenir dans ce chapitre, mais **une seule**, dont tout le reste se déduit.

:::qcm{titre="Contrôle express — addition et duplication" icone="i-lucide-circle-check-big" compact}

::qcm-question{label="1." bonne="b"}
$\cos\dfrac{7\pi}{12} = $

#a
$\dfrac{\sqrt6-\sqrt2}{4}$

#b
$\dfrac{\sqrt2-\sqrt6}{4}$

#c
$\dfrac{\sqrt2+\sqrt6}{4}$

#solution
$\dfrac{7\pi}{12}$ n'est pas au tableau, mais il se **décompose** en deux angles qui y sont :

$$
\frac{7\pi}{12} = \frac{4\pi}{12}+\frac{3\pi}{12} = \frac{\pi}{3}+\frac{\pi}{4}
$$

On applique alors la formule d'addition :

$$
\cos\left(\frac{\pi}{3}+\frac{\pi}{4}\right) = \cos\frac{\pi}{3}\cos\frac{\pi}{4}-\sin\frac{\pi}{3}\sin\frac{\pi}{4}
$$

$$
= \frac12\times\frac{\sqrt2}{2}-\frac{\sqrt3}{2}\times\frac{\sqrt2}{2} = \frac{\sqrt2}{4}-\frac{\sqrt6}{4}
$$

**Le contrôle de signe, imparable** : $\dfrac{7\pi}{12}$ dépasse $\dfrac{\pi}{2}$, donc le point est dans le deuxième quadrant et le cosinus doit être **négatif**. Or $\sqrt6 > \sqrt2$, donc **b** est bien négative — **a** et **c** sont positives et tombent d'elles-mêmes.
::

::qcm-question{label="2." bonne="a"}
On sait que $\sin a = \dfrac35$ et $\cos a = \dfrac45$. Alors $\sin(2a) = $

#a
$\dfrac{24}{25}$

#b
$\dfrac{12}{25}$

#c
$\dfrac{7}{25}$

#solution
$$
\sin(2a) = 2\sin a\cos a = 2\times\frac35\times\frac45 = \frac{24}{25}
$$

**b** oublie le facteur $2$ de la formule. **c** est la valeur de $\cos(2a)$ — la confusion entre les deux duplications.

**Le contrôle** : les données sont cohérentes, puisque $\left(\dfrac35\right)^2+\left(\dfrac45\right)^2 = \dfrac{9+16}{25} = 1$. Et $\dfrac{24}{25}$ reste bien inférieur à $1$, comme doit l'être tout sinus.
::

::qcm-question{label="3." bonne="c"}
Avec les mêmes valeurs $\sin a = \dfrac35$ et $\cos a = \dfrac45$, $\cos(2a) = $

#a
$-\dfrac{7}{25}$

#b
$1$

#c
$\dfrac{7}{25}$

#solution
$$
\cos(2a) = \cos^2a-\sin^2a = \frac{16}{25}-\frac{9}{25} = \frac{7}{25}
$$

⚠️ **b** est le piège : c'est ce que donnerait $\cos^2a+\sin^2a$, avec un **plus**. La duplication du cosinus est une **différence**.

**a** inverse l'ordre des deux carrés. Le contrôle qui tranche : $a$ est un angle du premier quadrant assez petit — son cosinus $\dfrac45$ dépasse son sinus —, donc $2a$ reste dans le premier quadrant et son cosinus est **positif**.

**Les deux réponses ensemble** vérifient d'ailleurs Pythagore : $\left(\dfrac{24}{25}\right)^2+\left(\dfrac{7}{25}\right)^2 = \dfrac{576+49}{625} = 1$.
::

:::



## Ce qu'il faut savoir par cœur

Le chapitre paraît immense parce qu'il contient une trentaine de formules. En réalité **six choses s'apprennent**, et tout le reste se relit sur la figure ou se redémontre en dix secondes. Voici la séparation, classée par rapport de points au QCM.

### Les six choses à savoir

**1. Les six dérivées.** C'est ce qui tombe le plus lourdement, et c'est purement de la mémoire.

$$
\sin' = \cos \qquad \cos' = -\sin \qquad \tan' = 1+\tan^2 = \frac{1}{\cos^2}
$$

$$
\arcsin'x = \frac{1}{\sqrt{1-x^2}} \qquad \arccos'x = \frac{-1}{\sqrt{1-x^2}} \qquad \arctan'x = \frac{1}{1+x^2}
$$

Deux repères qui évitent les quatre erreurs classiques : **seuls $\cos$ et $\arccos$ portent un signe moins**, et **les deux « arc » en racine vont ensemble**, opposés l'un de l'autre, tandis qu'$\arctan$ est le seul sans racine.

**2. La ligne des valeurs remarquables.** Une seule suite à retenir, celle des cosinus :

$$
\frac{\sqrt4}{2},\quad \frac{\sqrt3}{2},\quad \frac{\sqrt2}{2},\quad \frac{\sqrt1}{2},\quad \frac{\sqrt0}{2} \qquad\text{pour}\qquad 0,\ \frac{\pi}{6},\ \frac{\pi}{4},\ \frac{\pi}{3},\ \frac{\pi}{2}
$$

Les sinus sont la même suite **lue à l'envers**. Rien d'autre n'est à mémoriser : $\tan$ s'obtient en divisant.

**3. Le cosinus est une abscisse, le sinus une ordonnée.** Ce n'est pas une formule, c'est la phrase qui permet de reconstruire les signes, l'encadrement, les symétries et les arguments de complexes.

**4. L'identité de Pythagore.**

$$
\cos^2\theta+\sin^2\theta = 1
$$

**5. Les intervalles d'arrivée des trois réciproques.** C'est ce que le QCM vérifie en écrivant l'ensemble de définition dans l'énoncé.

| Réciproque | définie sur | à valeurs dans |
|---|---|---|
| $\arccos$ | $[-1\,;1]$ | $[0\,;\pi]$ |
| $\arcsin$ | $[-1\,;1]$ | $\left[-\dfrac{\pi}{2}\,;\dfrac{\pi}{2}\right]$ |
| $\arctan$ | $\mathbb{R}$ | $\left]-\dfrac{\pi}{2}\,;\dfrac{\pi}{2}\right[$ |

**6. Les deux formules d'équation**, avec leurs **deux** familles :

$$
\cos A = \cos B \iff A = B+2k\pi \ \text{ ou }\ A = -B+2k\pi
$$

$$
\sin A = \sin B \iff A = B+2k\pi \ \text{ ou }\ A = \pi-B+2k\pi
$$

### Ce qui ne s'apprend pas

Tout ce qui suit se **relit** ou se **redémontre**, et vouloir l'apprendre par cœur est le meilleur moyen de le confondre :

- **les signes par quadrant** — à gauche de l'axe vertical le cosinus est négatif, sous l'axe horizontal le sinus l'est ;
- **les quatre symétries** de la section 6 — chacune est une réflexion du cercle, et la ligne du tableau s'écrit en regardant où atterrit le point ;
- **les valeurs de la tangente** — c'est $\dfrac{\sin}{\cos}$, une division ;
- **les formules d'addition** — le produit $e^{ia}e^{ib}$ les redonne, comme montré à la section 11 ;
- **la périodicité et la parité** — un tour complet ramène au même point, et $-\theta$ est le symétrique par rapport à l'axe horizontal.

::rappel{titre="Le test de cinq minutes, à refaire tous les deux jours" icone="i-lucide-timer"}
Feuille blanche, rien sous les yeux :

1. le tableau des $\cos$ et $\sin$ pour les cinq angles remarquables ;
2. les six dérivées ;
3. les intervalles d'arrivée d'$\arccos$, $\arcsin$ et $\arctan$.

Ces trois points sont **tout** ce qui doit être en mémoire immédiate. S'ils sortent sans hésitation, la trigonométrie du QCM est acquise — le reste se lit sur une figure que tu peux redessiner en dix secondes au brouillon.

C'est aussi la raison pour laquelle ce chapitre n'a pas de QCM à lui : au QCM, la trigonométrie n'arrive jamais seule. Elle arrive **dans** une dérivée à calculer, **dans** l'argument d'un nombre complexe, **dans** une fonction réciproque à dériver. C'est là qu'il faut savoir la reconnaître.
::

## Les pièges à retenir

- **Une équation trigonométrique a deux familles de solutions**, pas une. La droite coupe le cercle en deux points.
- **Un $+2k\pi$ oublié**, et l'ensemble des solutions est faux même si les angles sont bons.
- **Le cosinus seul ne détermine pas l'angle** : il faut le sinus (ou le quadrant) pour trancher.
- **$\arccos(\cos x) = x$ est faux en général** — vrai uniquement sur $[0,\pi]$.
- **Les formules de dérivation supposent des radians.**
- $\tan$ est $\pi$-périodique, alors que $\cos$ et $\sin$ sont $2\pi$-périodiques.
- **Dans $\cos(a+b)$ le signe se retourne**, alors qu'il se conserve dans $\sin(a+b)$. C'est l'inverse de ce que l'intuition suggère.
- **Six formules s'apprennent, pas trente** — voir la section précédente. Confondre les deux listes coûte du temps de révision, pas des points.

## Exercices — le chapitre en situation

Les contrôles express des sections précédentes vérifient un point à la fois, juste après l'avoir lu. Ceux-ci sont d'une autre nature : **ce sont de vrais exercices**, qui demandent deux ou trois étapes et mobilisent plusieurs sections à la fois. Le format reste celui du QCM, parce que c'est celui de l'épreuve — mais la question, elle, est un exercice.

À faire **une fois le chapitre lu en entier**, sans revenir en arrière.

:::qcm{titre="Huit exercices, format QCM" theme="Deux ou trois étapes chacun, plusieurs sections mobilisées à la fois" duree="20 min" icone="i-lucide-pencil-ruler"}

::qcm-question{label="1." bonne="c"}
Un point $M$ du cercle a pour abscisse $-\dfrac35$ et se situe dans le **troisième** quadrant. Que vaut $\tan\theta$ ?

#a
$-\dfrac43$

#b
$\dfrac34$

#c
$\dfrac43$

#d
$-\dfrac34$

#indice
Trois étapes. L'abscisse te donne le cosinus ; l'identité de Pythagore te donne le sinus **au signe près** ; le quadrant tranche ce signe. La tangente est ensuite un simple quotient.

#solution
**1. Le cosinus se lit directement** : $\cos\theta = -\dfrac35$.

**2. Le sinus par Pythagore :**

$$
\sin^2\theta = 1-\frac{9}{25} = \frac{16}{25} \qquad\text{donc}\qquad \sin\theta = \pm\frac45
$$

**3. Le quadrant tranche.** Dans le troisième, le sinus est **négatif** : $\sin\theta = -\dfrac45$.

**4. Le quotient :**

$$
\tan\theta = \frac{-\frac45}{-\frac35} = \frac45\times\frac53 = \frac43
$$

**Le contrôle de signe, à faire avant même le calcul** : dans le troisième quadrant, cosinus et sinus sont **tous deux négatifs**, donc leur quotient est **positif**. Cela élimine **a** et **d** d'un coup.
::

::qcm-question{label="2." bonne="b"}
Pour tout réel $x$, $\sin(\pi-x)+\cos\left(\dfrac{\pi}{2}+x\right)$ vaut :

#a
$2\sin x$

#b
$0$

#c
$2\cos x$

#d
$\sin x-\cos x$

#indice
Deux angles associés, un par terme. Traite-les séparément avant d'additionner.

Le second est celui qu'on oublie : $\dfrac{\pi}{2}+x$ n'est pas $\dfrac{\pi}{2}-x$, et le résultat n'est pas le même.

#solution
**Terme par terme :**

$$
\sin(\pi-x) = \sin x \qquad\qquad \cos\left(\frac{\pi}{2}+x\right) = -\sin x
$$

$$
\sin x+(-\sin x) = 0
$$

$$
\boxed{\text{l'expression est nulle pour tout } x}
$$

**Le contrôle en cinq secondes** : teste en $x = 0$. On obtient $\sin\pi+\cos\dfrac{\pi}{2} = 0+0 = 0$. Puis en $x = \dfrac{\pi}{2}$ : $\sin\dfrac{\pi}{2}+\cos\pi = 1-1 = 0$. Deux valeurs, deux zéros — seule **b** survit.

⚠️ **Le piège est le signe de $\cos\left(\dfrac{\pi}{2}+x\right)$.** Avec un **moins** dans la parenthèse on obtiendrait $+\sin x$, et la somme vaudrait $2\sin x$ — c'est exactement la proposition **a**.
::

::qcm-question{label="3." bonne="d"}
Sur $[0\,;2\pi[$, combien l'équation $2\cos^2x-1 = 0$ a-t-elle de solutions ?

#a
$1$

#b
$2$

#c
$8$

#d
$4$

#indice
Isole $\cos^2x$, puis passe à la racine — **sans oublier que le carré admet deux racines opposées**.

Chacune des deux valeurs de $\cos x$ donne ensuite ses propres solutions sur un tour.

#solution
**1. On isole :**

$$
\cos^2x = \frac12 \qquad\text{donc}\qquad \cos x = \frac{\sqrt2}{2} \ \text{ ou }\ \cos x = -\frac{\sqrt2}{2}
$$

**2. Chaque valeur donne deux solutions** sur un tour, la droite verticale coupant le cercle en deux points :

$$
\cos x = \frac{\sqrt2}{2} \ \Rightarrow\ x = \frac{\pi}{4} \ \text{ ou }\ \frac{7\pi}{4}
$$

$$
\cos x = -\frac{\sqrt2}{2} \ \Rightarrow\ x = \frac{3\pi}{4} \ \text{ ou }\ \frac{5\pi}{4}
$$

$$
\boxed{\text{quatre solutions}}
$$

**Le second chemin**, plus court : $2\cos^2x-1 = \cos(2x)$, donc l'équation s'écrit $\cos(2x) = 0$, soit $2x = \dfrac{\pi}{2}+k\pi$, soit $x = \dfrac{\pi}{4}+\dfrac{k\pi}{2}$. Un pas de $\dfrac{\pi}{2}$ donne bien **quatre** solutions par tour.

**b** est l'erreur classique : ne garder qu'une des deux racines du carré.
::

::qcm-question{label="4." bonne="a"}
La fonction $f$ définie sur $\mathbb{R}$ par $f(x) = 3\sin(2x)$ atteint son maximum. Ce maximum, et la plus petite valeur positive de $x$ où il est atteint, sont :

#a
$3$, en $x = \dfrac{\pi}{4}$

#b
$3$, en $x = \dfrac{\pi}{2}$

#c
$6$, en $x = \dfrac{\pi}{4}$

#d
$1$, en $x = \dfrac{\pi}{4}$

#indice
Le sinus ne dépasse jamais $1$ : le maximum de $f$ est donc lisible sans calcul.

Pour le **où**, cherche à quel moment $\sin(2x)$ atteint $1$ — et n'oublie pas que c'est $2x$, et non $x$, qui doit valoir $\dfrac{\pi}{2}$.

#solution
**Le maximum.** Comme $-1 \leqslant \sin(2x) \leqslant 1$, on a $-3 \leqslant f(x) \leqslant 3$. Le maximum vaut donc $3$, atteint quand $\sin(2x) = 1$.

**L'endroit.** Le sinus vaut $1$ en $\dfrac{\pi}{2}$ :

$$
2x = \frac{\pi}{2} \qquad\text{donc}\qquad x = \frac{\pi}{4}
$$

$$
\boxed{f\left(\frac{\pi}{4}\right) = 3\sin\frac{\pi}{2} = 3}
$$

**Les distracteurs :** **c** multiplie l'amplitude par le coefficient intérieur, qui n'y est pour rien ; **d** oublie le facteur $3$ ; **b** est **l'erreur de fond** — résoudre $x = \dfrac{\pi}{2}$ au lieu de $2x = \dfrac{\pi}{2}$.

⚠️ **Le coefficient devant le sinus fixe l'amplitude, celui devant le $x$ fixe la période.** Ils ne jouent jamais le même rôle : ici la période vaut $\dfrac{2\pi}{2} = \pi$, et l'amplitude $3$.
::

::qcm-question{label="5." bonne="c"}
La fonction $f$ définie sur $\mathbb{R}$ par $f(x) = \sin^2x$ a pour dérivée en $\dfrac{\pi}{4}$ :

#a
$\dfrac12$

#b
$\dfrac{\sqrt2}{2}$

#c
$1$

#d
$2$

#indice
$\sin^2x$ se lit $\left(\sin x\right)^2$ : c'est une puissance, donc $\left(u^2\right)' = 2u\,u'$.

Une fois la dérivée obtenue, une formule de duplication la simplifie beaucoup avant de remplacer.

#solution
**1. On dérive la puissance :**

$$
f'(x) = 2\sin x\times\cos x
$$

**2. On reconnaît la duplication**, ce qui évite tout calcul de valeurs :

$$
f'(x) = 2\sin x\cos x = \sin(2x)
$$

**3. On évalue :**

$$
f'\left(\frac{\pi}{4}\right) = \sin\frac{\pi}{2} = 1
$$

**Le chemin direct donne la même chose**, en remplaçant sans simplifier :

$$
f'\left(\frac{\pi}{4}\right) = 2\times\frac{\sqrt2}{2}\times\frac{\sqrt2}{2} = 2\times\frac{2}{4} = 1
$$

**a** oublie le facteur $2$ de la dérivée d'une puissance. **b** ne dérive qu'un des deux facteurs.
::

::qcm-question{label="6." bonne="b"}
On résout $\cos(2x) = \cos\left(x+\dfrac{\pi}{3}\right)$. La famille de solutions issue de « **arguments égaux** » est :

#a
$x = -\dfrac{\pi}{9}+\dfrac{2k\pi}{3}$

#b
$x = \dfrac{\pi}{3}+2k\pi$

#c
$x = \dfrac{\pi}{9}+\dfrac{2k\pi}{3}$

#d
$x = \dfrac{\pi}{3}+\dfrac{2k\pi}{3}$

#indice
$\cos A = \cos B$ donne deux familles : $A = B+2k\pi$ et $A = -B+2k\pi$. On ne demande ici que la **première**.

Écris-la, puis résous : c'est une équation du premier degré, où le $2k\pi$ se traite comme n'importe quelle constante.

#solution
**La première famille** s'écrit avec les arguments **égaux** :

$$
2x = x+\frac{\pi}{3}+2k\pi
$$

On retranche $x$ aux deux membres :

$$
\boxed{x = \frac{\pi}{3}+2k\pi}
$$

Ici $x$ se retrouve seul avec un coefficient $1$ : **le $2k\pi$ n'est donc pas divisé**, et le pas reste $2\pi$ — une solution par tour.

**a est l'autre famille**, celle des arguments opposés : $2x = -x-\dfrac{\pi}{3}+2k\pi$, d'où $3x = -\dfrac{\pi}{3}+2k\pi$ et $x = -\dfrac{\pi}{9}+\dfrac{2k\pi}{3}$. Le coefficient $3$ divise cette fois le terme en $k$, d'où un pas de $\dfrac{2\pi}{3}$ — **trois** solutions par tour.

⚠️ **Les deux familles n'ont donc pas le même pas.** C'est ce qui rend le décompte des solutions d'un intervalle piégeux, et **d** est exactement ce mélange : le bon angle avec le pas de l'autre famille.
::

::qcm-question{label="7." bonne="d"}
La hauteur d'un flotteur, en mètres, est donnée par $h(t) = 2+\sin\left(\dfrac{\pi t}{6}\right)$, où $t$ est le temps en heures. Le flotteur est à sa hauteur maximale pour la première fois à :

#a
$t = 1{,}5$ h

#b
$t = 6$ h

#c
$t = 12$ h

#d
$t = 3$ h

#indice
La hauteur est maximale quand le sinus vaut $1$, c'est-à-dire quand son **argument** vaut $\dfrac{\pi}{2}$.

Écris l'équation sur l'argument, puis résous en $t$. Attention : ce n'est pas $t$ qui doit valoir $\dfrac{\pi}{2}$.

#solution
Le sinus est maximal, égal à $1$, quand son argument vaut $\dfrac{\pi}{2}$ :

$$
\frac{\pi t}{6} = \frac{\pi}{2}
$$

On simplifie par $\pi$, puis on multiplie par $6$ :

$$
\frac{t}{6} = \frac12 \qquad\text{donc}\qquad t = 3
$$

$$
\boxed{h(3) = 2+1 = 3 \text{ mètres, au bout de 3 heures}}
$$

**Le contrôle par la période**, qui vaut à lui seul la question : la période est

$$
T = \frac{2\pi}{\frac{\pi}{6}} = 12 \text{ heures}
$$

Le maximum arrive au **quart** de la période — comme $\sin$ atteint son maximum au quart de son tour —, soit $\dfrac{12}{4} = 3$ heures. Les deux méthodes se rejoignent.

**c** confond le maximum avec un cycle complet, **b** avec un demi-cycle.
::

::qcm-question{label="8." bonne="c"}
$\arccos\left(\cos\dfrac{13\pi}{6}\right) = $

#a
$\dfrac{13\pi}{6}$

#b
$\dfrac{11\pi}{6}$

#c
$\dfrac{\pi}{6}$

#d
$\dfrac{5\pi}{6}$

#indice
Deux étapes, dans cet ordre. D'abord ramène l'angle dans $[0\,;2\pi[$ avec la périodicité. Ensuite seulement, vérifie s'il appartient à l'intervalle d'arrivée d'$\arccos$.

Simplifier directement en $\dfrac{13\pi}{6}$ est faux : le résultat d'un $\arccos$ ne dépasse jamais $\pi$.

#solution
**1. La périodicité** ramène l'angle sur un tour :

$$
\frac{13\pi}{6}-2\pi = \frac{13\pi}{6}-\frac{12\pi}{6} = \frac{\pi}{6}
$$

$$
\cos\frac{13\pi}{6} = \cos\frac{\pi}{6} = \frac{\sqrt3}{2}
$$

**2. On applique $\arccos$**, en vérifiant l'intervalle :

$$
\arccos\frac{\sqrt3}{2} = \frac{\pi}{6} \qquad\text{et}\qquad \frac{\pi}{6}\in[0\,;\pi] \ \checkmark
$$

**a est le piège principal** : simplifier $\arccos(\cos x)$ en $x$ sans vérifier que $x$ appartient à $[0\,;\pi]$. Ici $\dfrac{13\pi}{6}$ dépasse même un tour complet.

**b** a bien le bon cosinus — $\dfrac{11\pi}{6}$ est l'opposé de $\dfrac{\pi}{6}$ — mais sort de $[0\,;\pi]$. **d** se trompe de signe sur le cosinus.

⚠️ **Le contrôle systématique** : tout résultat d'$\arccos$ est entre $0$ et $\pi$. Trois propositions sur quatre s'éliminent ici sans le moindre calcul.
::

:::

:::exercice{titre="S'entraîner" theme="Sept questions pour vérifier que la figure est bien lue"}

::question{label="1." bonne="c"}

Convertir $135°$ en radians, puis $\dfrac{7\pi}{6}$ en degrés.

#a
$135° = \dfrac{4\pi}{3}$ et $\dfrac{7\pi}{6} = 210°$

#b
$135° = \dfrac{3\pi}{4}$ et $\dfrac{7\pi}{6} = 150°$

#c
$135° = \dfrac{3\pi}{4}$ et $\dfrac{7\pi}{6} = 210°$

#d
$135° = \dfrac{3\pi}{4}$ et $\dfrac{7\pi}{6} = 240°$

#indice

Une seule égalité à utiliser dans les deux sens : $180° = \pi$. Pour aller des degrés aux radians, on multiplie par $\dfrac{\pi}{180}$ ; pour revenir, par $\dfrac{180}{\pi}$. Simplifie la fraction obtenue.

#solution

**Des degrés aux radians :**

$$
135 \times \frac{\pi}{180} = \frac{135\pi}{180} = \frac{3\pi}{4}
$$

*(on simplifie par $45$ : $135 = 3\times45$ et $180 = 4\times45$)*

**Des radians aux degrés :**

$$
\frac{7\pi}{6} \times \frac{180}{\pi} = \frac{7\times180}{6} = 7\times30 = 210°
$$

**Contrôle** : $\frac{3\pi}{4}$ est entre $\frac{\pi}{2}$ et $\pi$, donc l'angle est obtus — cohérent avec $135°$. Et $210°$ dépasse $180°$, donc le point est dans le 3ᵉ quadrant — cohérent avec $\frac{7\pi}{6}$, juste après $\pi$.

::

::question{label="2." bonne="a"}

Donner les valeurs exactes de $\cos\left(-\dfrac{5\pi}{6}\right)$ et $\sin\left(-\dfrac{5\pi}{6}\right)$.

#a
$\cos\left(-\dfrac{5\pi}{6}\right) = -\dfrac{\sqrt3}{2}$ et $\sin\left(-\dfrac{5\pi}{6}\right) = -\dfrac12$

#b
$\cos\left(-\dfrac{5\pi}{6}\right) = \dfrac{\sqrt3}{2}$ et $\sin\left(-\dfrac{5\pi}{6}\right) = -\dfrac12$

#c
$\cos\left(-\dfrac{5\pi}{6}\right) = -\dfrac{\sqrt3}{2}$ et $\sin\left(-\dfrac{5\pi}{6}\right) = \dfrac12$

#d
$\cos\left(-\dfrac{5\pi}{6}\right) = -\dfrac12$ et $\sin\left(-\dfrac{5\pi}{6}\right) = -\dfrac{\sqrt3}{2}$

#indice

Commence par la parité pour te débarrasser du signe moins, puis ramène $\frac{5\pi}{6}$ dans le premier quadrant avec la symétrie $\pi-\theta$. Termine par un contrôle de signe : dans quel quadrant se trouve réellement $-\frac{5\pi}{6}$ ?

#solution

**Étape 1 — la parité.** $\cos$ est paire, $\sin$ est impaire :

$$
\cos\left(-\frac{5\pi}{6}\right) = \cos\frac{5\pi}{6} \qquad \sin\left(-\frac{5\pi}{6}\right) = -\sin\frac{5\pi}{6}
$$

**Étape 2 — la symétrie $\pi-\theta$.** Comme $\dfrac{5\pi}{6} = \pi-\dfrac{\pi}{6}$ :

$$
\cos\frac{5\pi}{6} = -\cos\frac{\pi}{6} = -\frac{\sqrt3}{2} \qquad \sin\frac{5\pi}{6} = \sin\frac{\pi}{6} = \frac12
$$

**Étape 3 — conclusion.**

$$
\cos\left(-\frac{5\pi}{6}\right) = -\frac{\sqrt3}{2} \qquad \sin\left(-\frac{5\pi}{6}\right) = -\frac12
$$

**Contrôle de signe.** $-\dfrac{5\pi}{6}$ équivaut à $-\dfrac{5\pi}{6}+2\pi = \dfrac{7\pi}{6}$ : le point est dans le 3ᵉ quadrant, où cosinus **et** sinus sont négatifs. Les deux résultats le sont bien.

::

::question{label="3." bonne="d"}

Dans quel quadrant se trouve un angle $\theta$ tel que $\cos\theta < 0$ et $\sin\theta > 0$ ? Donner un angle remarquable qui convient.

#a
le 3ᵉ quadrant, $\theta\in\left]\pi,\dfrac{3\pi}{2}\right[$ — par exemple $\dfrac{5\pi}{4}$

#b
le 4ᵉ quadrant, $\theta\in\left]\dfrac{3\pi}{2},2\pi\right[$ — par exemple $\dfrac{7\pi}{4}$

#c
le 1ᵉʳ quadrant, $\theta\in\left]0,\dfrac{\pi}{2}\right[$ — par exemple $\dfrac{\pi}{4}$

#d
le 2ᵉ quadrant, $\theta\in\left]\dfrac{\pi}{2},\pi\right[$ — par exemple $\dfrac{3\pi}{4}$

#indice

Le cosinus est l'abscisse et le sinus l'ordonnée : traduis chaque condition en « à gauche / à droite » et « au-dessus / en dessous » de l'origine. L'intersection des deux demi-plans est un quadrant unique.

#solution

$\cos\theta < 0$ signifie que l'abscisse est négative : le point est **à gauche** de l'axe vertical. $\sin\theta > 0$ signifie que l'ordonnée est positive : le point est **au-dessus** de l'axe horizontal.

Les deux ensemble : en haut à gauche, c'est-à-dire le **2ᵉ quadrant**, soit $\theta\in\left]\dfrac{\pi}{2},\pi\right[$.

Trois angles remarquables y sont : $\dfrac{2\pi}{3}$, $\dfrac{3\pi}{4}$ et $\dfrac{5\pi}{6}$. Par exemple $\theta = \dfrac{2\pi}{3}$, avec $\cos\theta = -\dfrac12 < 0$ et $\sin\theta = \dfrac{\sqrt3}{2} > 0$.

C'est exactement le raisonnement qu'on tient pour déterminer l'argument d'un nombre complexe.

::

::question{label="4." bonne="b"}

Simplifier $A = \cos(\pi-x)+\cos(\pi+x)+\sin\left(\dfrac{\pi}{2}+x\right)$.

#a
$A = \cos x$

#b
$A = -\cos x$

#c
$A = -3\cos x$

#d
$A = \sin x-\cos x$

#indice

Traite les trois termes séparément avec le tableau des angles associés — inutile de calculer quoi que ce soit, il n'y a que des signes à ajuster. Les deux premiers donnent la même chose ; le troisième se convertit en cosinus.

#solution

**Terme par terme**, avec le tableau de la section 6 :

$$
\cos(\pi-x) = -\cos x \qquad \cos(\pi+x) = -\cos x \qquad \sin\left(\frac{\pi}{2}+x\right) = \cos x
$$

**Somme :**

$$
A = -\cos x-\cos x+\cos x = -\cos x
$$

**Vérification numérique** en $x = 0$ : $A = \cos\pi+\cos\pi+\sin\dfrac{\pi}{2} = -1-1+1 = -1$, et $-\cos 0 = -1$. Cohérent.

::

::question{label="5." bonne="c"}

Résoudre $\sin x = \dfrac{\sqrt3}{2}$ sur $[0,2\pi]$.

#a
$S = \left\{\dfrac{\pi}{3}\right\}$

#b
$S = \left\{\dfrac{\pi}{6},\ \dfrac{5\pi}{6}\right\}$

#c
$S = \left\{\dfrac{\pi}{3},\ \dfrac{2\pi}{3}\right\}$

#d
$S = \left\{\dfrac{\pi}{3},\ \dfrac{4\pi}{3}\right\}$

#indice

Reconnais d'abord l'angle de référence dans le tableau. Attention : pour un **sinus**, la seconde famille n'est pas l'opposé mais le **supplémentaire** — la droite est horizontale, et les deux points d'intersection sont symétriques par rapport à l'axe **vertical**.

#solution

**Angle de référence** : $\dfrac{\sqrt3}{2} = \sin\dfrac{\pi}{3}$. L'équation s'écrit donc $\sin x = \sin\dfrac{\pi}{3}$.

**Les deux familles :**

$$
x = \frac{\pi}{3}+2k\pi \qquad\text{ou}\qquad x = \pi-\frac{\pi}{3}+2k\pi = \frac{2\pi}{3}+2k\pi
$$

**Dans $[0,2\pi]$**, chaque famille donne un représentant, avec $k=0$ :

$$
\boxed{S = \left\{\frac{\pi}{3},\ \frac{2\pi}{3}\right\}}
$$

**Lecture sur le cercle** : la droite horizontale d'ordonnée $\dfrac{\sqrt3}{2}$ coupe le cercle en deux points situés en haut, l'un à droite, l'autre à gauche — les deux solutions.

::

::question{label="6." bonne="a"}

Résoudre $\cos(2x) = -\dfrac12$ sur $[0,\pi]$.

#a
$S = \left\{\dfrac{\pi}{3},\ \dfrac{2\pi}{3}\right\}$

#b
$S = \left\{\dfrac{2\pi}{3},\ \dfrac{4\pi}{3}\right\}$

#c
$S = \left\{\dfrac{2\pi}{3}\right\}$

#d
$S = \left\{\dfrac{\pi}{6},\ \dfrac{5\pi}{6}\right\}$

#indice

Pose l'équation sur $2x$ d'abord, comme si c'était l'inconnue : deux familles, avec des $+2k\pi$. Ce n'est qu'ensuite que tu divises par $2$ — et la division transforme le pas $2k\pi$ en $k\pi$, ce qui produit **deux fois plus** de solutions par tour. Fais varier $k$ jusqu'à sortir de $[0,\pi]$.

#solution

**Angle de référence** : $-\dfrac12 = \cos\dfrac{2\pi}{3}$.

**Les deux familles sur $2x$ :**

$$
2x = \frac{2\pi}{3}+2k\pi \qquad\text{ou}\qquad 2x = -\frac{2\pi}{3}+2k\pi
$$

**On divise par $2$** — c'est l'étape où le pas devient $k\pi$ :

$$
x = \frac{\pi}{3}+k\pi \qquad\text{ou}\qquad x = -\frac{\pi}{3}+k\pi
$$

**Sélection dans $[0,\pi]$.** Première famille : $k=0$ donne $\dfrac{\pi}{3}$ ; $k=1$ donne $\dfrac{4\pi}{3} > \pi$, rejeté. Seconde famille : $k=0$ donne $-\dfrac{\pi}{3} < 0$, rejeté ; $k=1$ donne $-\dfrac{\pi}{3}+\pi = \dfrac{2\pi}{3}$, accepté.

$$
\boxed{S = \left\{\frac{\pi}{3},\ \frac{2\pi}{3}\right\}}
$$

**Vérification** : $\cos\left(2\times\dfrac{\pi}{3}\right) = \cos\dfrac{2\pi}{3} = -\dfrac12$ et $\cos\left(2\times\dfrac{2\pi}{3}\right) = \cos\dfrac{4\pi}{3} = -\dfrac12$. Les deux conviennent.

::

::question{label="7." bonne="b"}

Calculer $\arccos\left(\cos\dfrac{7\pi}{6}\right)$ et $\arcsin\left(\sin\dfrac{5\pi}{4}\right)$.

#a
$\arccos\left(\cos\dfrac{7\pi}{6}\right) = \dfrac{7\pi}{6}$ et $\arcsin\left(\sin\dfrac{5\pi}{4}\right) = \dfrac{5\pi}{4}$

#b
$\arccos\left(\cos\dfrac{7\pi}{6}\right) = \dfrac{5\pi}{6}$ et $\arcsin\left(\sin\dfrac{5\pi}{4}\right) = -\dfrac{\pi}{4}$

#c
$\arccos\left(\cos\dfrac{7\pi}{6}\right) = \dfrac{5\pi}{6}$ et $\arcsin\left(\sin\dfrac{5\pi}{4}\right) = \dfrac{\pi}{4}$

#d
$\arccos\left(\cos\dfrac{7\pi}{6}\right) = \dfrac{\pi}{6}$ et $\arcsin\left(\sin\dfrac{5\pi}{4}\right) = -\dfrac{\pi}{4}$

#indice

Dans les deux cas, l'angle de départ **n'est pas** dans l'intervalle de la réciproque : la réponse ne sera donc pas l'angle de départ. Cherche l'angle de l'intervalle visé qui a la **même** valeur de cosinus (respectivement de sinus), en utilisant une symétrie.

#solution

**Premier calcul.** $\arccos$ renvoie dans $[0,\pi]$, or $\dfrac{7\pi}{6}\notin[0,\pi]$. On cherche un angle de $[0,\pi]$ ayant le même cosinus, avec la parité :

$$
\cos\frac{7\pi}{6} = \cos\left(-\frac{7\pi}{6}\right) = \cos\left(-\frac{7\pi}{6}+2\pi\right) = \cos\frac{5\pi}{6}
$$

et $\dfrac{5\pi}{6}\in[0,\pi]$, donc

$$
\arccos\left(\cos\frac{7\pi}{6}\right) = \frac{5\pi}{6}
$$

**Second calcul.** $\arcsin$ renvoie dans $\left[-\dfrac{\pi}{2},\dfrac{\pi}{2}\right]$, or $\dfrac{5\pi}{4}$ n'y est pas. On utilise $\sin(\pi-\theta) = \sin\theta$, donc $\sin\theta = \sin(\pi-\theta)$ avec $\theta = \dfrac{5\pi}{4}$ :

$$
\sin\frac{5\pi}{4} = \sin\left(\pi-\frac{5\pi}{4}\right) = \sin\left(-\frac{\pi}{4}\right)
$$

et $-\dfrac{\pi}{4}\in\left[-\dfrac{\pi}{2},\dfrac{\pi}{2}\right]$, donc

$$
\arcsin\left(\sin\frac{5\pi}{4}\right) = -\frac{\pi}{4}
$$

**Contrôle** : $\cos\dfrac{7\pi}{6} = -\dfrac{\sqrt3}{2} = \cos\dfrac{5\pi}{6}$, et $\sin\dfrac{5\pi}{4} = -\dfrac{\sqrt2}{2} = \sin\left(-\dfrac{\pi}{4}\right)$. Les deux réponses ont bien la bonne valeur, dans le bon intervalle.

::

:::
