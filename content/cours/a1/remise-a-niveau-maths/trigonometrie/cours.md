---
title: Trigonométrie — comprendre le cercle
description: Le cercle trigonométrique expliqué de zéro, en quatre étapes, avec une figure interactive et un contrôle express de trois questions à la fin de chaque section — radians, valeurs remarquables, angles associés, équations, réciproques, formules d'addition, et la liste de ce qu'il faut réellement savoir par cœur.
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

**Chaque section se termine par un contrôle express de trois questions.** Il se fait en une minute, juste après avoir lu la section, et il sert à une seule chose : savoir si on peut passer à la suivante. Une réponse fausse, et on relit les quelques lignes juste au-dessus — c'est le moment où ça coûte le moins cher.

Les tests de passage ci-dessus restent plus exigeants que ces contrôles, et c'est voulu : écrire de mémoire est un exercice plus dur que reconnaître parmi trois propositions. Fais le contrôle pour vérifier que tu as compris, le test de passage pour vérifier que tu as **retenu**.

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

::qcm-question{label="1." bonne="b"}
Sur le cercle de rayon $1$, le point $M$ repéré par l'angle $\theta$ a pour coordonnées :

#a
$\left(\sin\theta\ ;\cos\theta\right)$

#b
$\left(\cos\theta\ ;\sin\theta\right)$

#c
$\left(\tan\theta\ ;\cos\theta\right)$

#solution
**Le cosinus est l'abscisse, le sinus l'ordonnée** — dans cet ordre, et c'est la phrase qui porte tout le chapitre.

Le moyen de ne jamais l'inverser : dans un repère on écrit toujours $(x\ ;y)$, et $\cos$ vient avant $\sin$ dans l'alphabet comme $x$ vient avant $y$.
::

::qcm-question{label="2." bonne="c"}
Sur le cercle, on compte les angles :

#a
dans le sens des aiguilles d'une montre

#b
dans le sens des aiguilles d'une montre si $\theta > 0$, dans l'autre sinon

#c
dans le sens inverse des aiguilles d'une montre

#solution
Le **sens direct** est le sens inverse des aiguilles d'une montre, toujours. Un angle négatif ne change pas cette convention : il signifie simplement qu'on parcourt le cercle **à rebours** du sens direct.

C'est ce qui rend $\cos(-\theta) = \cos\theta$ lisible : partir dans l'autre sens amène au point symétrique par rapport à l'axe horizontal, qui a la même abscisse.
::

::qcm-question{label="3." bonne="a"}
Pourquoi fixe-t-on le rayon du cercle à $1$ ?

#a
pour que $\cos\theta$ et $\sin\theta$ soient directement les coordonnées du point

#b
pour que le périmètre du cercle vaille $\pi$

#c
parce que le sinus ne peut pas dépasser $1$

#solution
Dans un triangle rectangle, $\cos\alpha = \dfrac{\text{adjacent}}{\text{hypoténuse}}$. En fixant l'hypoténuse à $1$, le quotient **disparaît** : le côté adjacent *est* le cosinus.

$$
\cos\alpha = \frac{\text{adjacent}}{1} = \text{adjacent}
$$

**b** est faux — le périmètre vaut $2\pi$. **c** inverse cause et conséquence : le sinus est borné **parce que** le point reste sur le cercle, ce n'est pas la raison du choix du rayon.
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
$60°$ valent, en radians :

#a
$\dfrac{\pi}{6}$

#b
$\dfrac{\pi}{3}$

#c
$\dfrac{\pi}{4}$

#solution
On multiplie par $\dfrac{\pi}{180}$ :

$$
60\times\frac{\pi}{180} = \frac{\pi}{3}
$$

**Le repère sans calcul** : $60°$ est le **sixième** d'un tour, et un tour vaut $2\pi$, donc $\dfrac{2\pi}{6} = \dfrac{\pi}{3}$.

⚠️ Ne pas lire « $60$ » et écrire « $\dfrac{\pi}{6}$ » par réflexe : $\dfrac{\pi}{6}$ correspond à $30°$.
::

::qcm-question{label="2." bonne="c"}
Un tour complet vaut :

#a
$\pi$ radians

#b
$360$ radians

#c
$2\pi$ radians

#solution
Le radian mesure un angle par la **longueur de l'arc** découpé sur le cercle de rayon $1$. Le périmètre de ce cercle valant $2\pi$, un tour complet mesure $2\pi$ radians.

**a** est le demi-tour, l'angle plat. **b** confond les deux unités : $360$ est la mesure du tour **en degrés**.
::

::qcm-question{label="3." bonne="b"}
Pourquoi l'analyse travaille-t-elle en radians plutôt qu'en degrés ?

#a
parce que c'est plus précis

#b
parce que $\sin' = \cos$ n'est vrai qu'en radians

#c
c'est une convention sans conséquence sur les calculs

#solution
C'est la seule raison d'être du radian. En degrés, la dérivée du sinus vaudrait

$$
\frac{\pi}{180}\cos x
$$

et **toutes** les formules du programme traîneraient ce facteur. Le radian est l'unité qui rend l'analyse propre.

⚠️ Conséquence pratique : une calculatrice en mode « degré » donne des dérivées et des limites fausses.
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
Pour tout réel $\theta$, $\cos^2\theta+\sin^2\theta$ vaut :

#a
$1$

#b
$\theta$

#c
$2$

#solution
C'est **l'identité de Pythagore**, la formule la plus utilisée du programme. Elle dit simplement que le point $M\left(\cos\theta\ ;\sin\theta\right)$ est à distance $1$ de l'origine :

$$
OM^2 = x_M^2+y_M^2 = \cos^2\theta+\sin^2\theta = 1
$$

Elle est vraie pour **tout** $\theta$, sans exception ni condition.
::

::qcm-question{label="2." bonne="b"}
Si $\theta$ place le point dans le deuxième quadrant, en haut à gauche, alors :

#a
$\cos\theta > 0$ et $\sin\theta > 0$

#b
$\cos\theta < 0$ et $\sin\theta > 0$

#c
$\cos\theta < 0$ et $\sin\theta < 0$

#solution
Rien à apprendre : **à gauche de l'axe vertical, l'abscisse est négative**, donc le cosinus aussi ; **au-dessus de l'axe horizontal, l'ordonnée est positive**, donc le sinus aussi.

$$
\cos\theta < 0 \qquad \sin\theta > 0
$$

**Le réflexe qui sert partout ailleurs** : le couple (signe du cosinus, signe du sinus) désigne un quadrant et un seul. C'est exactement ce qui permet de trancher l'argument d'un nombre complexe.
::

::qcm-question{label="3." bonne="c"}
Laquelle de ces affirmations est vraie pour **tout** réel $\theta$ ?

#a
$\cos\theta \geqslant 0$

#b
$\cos\theta \leqslant \sin\theta$

#c
$-1 \leqslant \cos\theta \leqslant 1$

#solution
Le point reste sur le cercle de rayon $1$ : son abscisse comme son ordonnée sont comprises entre $-1$ et $1$.

$$
-1 \leqslant \cos\theta \leqslant 1 \qquad\qquad -1 \leqslant \sin\theta \leqslant 1
$$

**a** est faux dès que le point passe à gauche de l'axe vertical, par exemple en $\theta = \pi$. **b** est faux en $\theta = 0$, où $\cos 0 = 1$ et $\sin 0 = 0$.
::

:::


## 4. Les valeurs remarquables

Cinq angles suffisent, les autres s'y ramènent (section 6).

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

::cercle-trigo{titre="Placer les angles usuels" resume="Clique sur une étiquette du cercle, ou sur une pastille sous la figure : les valeurs exactes s’affichent à droite." angle="30" modes="explorer"}
::

:::qcm{titre="Contrôle express — les valeurs remarquables" icone="i-lucide-circle-check-big" compact}

::qcm-question{label="1." bonne="c"}
$\cos\dfrac{\pi}{6} = $

#a
$\dfrac12$

#b
$\dfrac{\sqrt2}{2}$

#c
$\dfrac{\sqrt3}{2}$

#solution
$$
\cos\frac{\pi}{6} = \frac{\sqrt3}{2} \qquad \sin\frac{\pi}{6} = \frac12
$$

⚠️ **La confusion numéro un du chapitre** est d'échanger $\dfrac{\pi}{6}$ et $\dfrac{\pi}{3}$. Le moyen de trancher sans hésiter : $\dfrac{\pi}{6}$ est un **petit** angle, tout proche de $0$ — le point est donc presque à droite du cercle, avec une **grande** abscisse et une **petite** ordonnée. Grand cosinus, petit sinus.
::

::qcm-question{label="2." bonne="a"}
$\sin\dfrac{\pi}{3} = $

#a
$\dfrac{\sqrt3}{2}$

#b
$\dfrac12$

#c
$\dfrac{\sqrt2}{2}$

#solution
$$
\sin\frac{\pi}{3} = \frac{\sqrt3}{2} \qquad \cos\frac{\pi}{3} = \frac12
$$

$\dfrac{\pi}{3}$ est le **grand** angle des deux : le point est presque en haut du cercle, donc le sinus est grand et le cosinus petit. C'est l'exact miroir de la question précédente.

**La suite unique à retenir**, celle des cosinus de $0$ à $\dfrac{\pi}{2}$ :

$$
\frac{\sqrt4}{2},\quad \frac{\sqrt3}{2},\quad \frac{\sqrt2}{2},\quad \frac{\sqrt1}{2},\quad \frac{\sqrt0}{2}
$$

Les sinus sont la même suite lue à l'envers.
::

::qcm-question{label="3." bonne="b"}
Quand $\theta$ passe de $0$ à $\dfrac{\pi}{2}$ :

#a
le cosinus et le sinus croissent tous les deux

#b
le cosinus décroît et le sinus croît

#c
le cosinus croît et le sinus décroît

#solution
Le point part de $(1\ ;0)$ et monte vers $(0\ ;1)$ : il se déplace **vers la gauche** — l'abscisse, donc le cosinus, **décroît** de $1$ à $0$ — et **vers le haut** — l'ordonnée, donc le sinus, **croît** de $0$ à $1$.

$$
\cos : 1 \longrightarrow 0 \qquad\qquad \sin : 0 \longrightarrow 1
$$

**C'est le contrôle à faire sur son propre tableau** : s'il dit le contraire, les deux lignes ont été inversées.
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

::qcm-question{label="1." bonne="b"}
Pour tout réel $\theta$, $\cos(-\theta) = $

#a
$-\cos\theta$

#b
$\cos\theta$

#c
$\sin\theta$

#solution
Tourner de $-\theta$ amène au **symétrique par rapport à l'axe horizontal** : l'abscisse ne bouge pas, seule l'ordonnée change de signe.

$$
\cos(-\theta) = \cos\theta \qquad \text{le cosinus est \textbf{pair}}
$$
::

::qcm-question{label="2." bonne="a"}
Pour tout réel $\theta$, $\sin(-\theta) = $

#a
$-\sin\theta$

#b
$\sin\theta$

#c
$-\cos\theta$

#solution
Même symétrie que ci-dessus, mais c'est l'ordonnée qu'on lit cette fois — et c'est elle qui change de signe.

$$
\sin(-\theta) = -\sin\theta \qquad \text{le sinus est \textbf{impair}}
$$

**Les deux se retiennent ensemble** : une seule des deux fonctions porte le signe moins, et c'est le sinus.
::

::qcm-question{label="3." bonne="c"}
$\cos\dfrac{13\pi}{6}$ est égal à :

#a
$-\cos\dfrac{\pi}{6}$

#b
$\cos\dfrac{\pi}{3}$

#c
$\cos\dfrac{\pi}{6}$

#solution
On retire un tour complet, ce qui ramène au même point du cercle :

$$
\frac{13\pi}{6} = \frac{\pi}{6}+\frac{12\pi}{6} = \frac{\pi}{6}+2\pi
$$

$$
\cos\frac{13\pi}{6} = \cos\frac{\pi}{6} = \frac{\sqrt3}{2}
$$

**C'est toujours la première étape** devant un angle inhabituel : ajouter ou retirer des $2\pi$ pour se ramener dans $[0\,;2\pi[$, avant même de chercher une symétrie.
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

::cercle-trigo{titre="Les quatre symétries" resume="Coche ou décoche une symétrie pour voir où atterrit le point, et quelle formule elle produit." angle="30" mode="symetries" modes="explorer,symetries"}
::

Les quatre cas sont détaillés un par un ci-dessous. **Le tableau récapitulatif est à la fin** : il ne sert à rien tant que le mécanisme n'est pas acquis, et il devient inutile une fois qu'il l'est.

Dans les quatre exemples, on part du même angle $\theta = \dfrac{\pi}{3}$, pour lequel

$$
\cos\frac{\pi}{3} = \frac12 \qquad\qquad \sin\frac{\pi}{3} = \frac{\sqrt3}{2}
$$

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

::qcm-question{label="1." bonne="c"}
Pour tout réel $\theta$, $\cos(\pi-\theta) = $

#a
$\cos\theta$

#b
$\sin\theta$

#c
$-\cos\theta$

#solution
$\pi-\theta$ est le symétrique de $\theta$ **par rapport à l'axe vertical**. Le point garde sa hauteur mais son abscisse devient l'opposée.

Or l'abscisse, c'est le cosinus :

$$
\cos(\pi-\theta) = -\cos\theta
$$

**Il n'y a rien à apprendre ici** : on regarde où atterrit le point, et la ligne du tableau s'écrit toute seule.
::

::qcm-question{label="2." bonne="c"}
L'angle $\pi+\theta$ envoie le point de l'autre côté du centre, donc de l'autre côté des **deux** axes. Par conséquent :

#a
seul le cosinus change de signe

#b
seul le sinus change de signe

#c
le cosinus et le sinus changent tous les deux de signe

#solution
La règle unique de la section : **une coordonnée change de signe si, et seulement si, le point traverse l'axe correspondant.** Ici il les traverse tous les deux.

$$
\cos(\pi+\theta) = -\cos\theta \qquad\qquad \sin(\pi+\theta) = -\sin\theta
$$

**a** décrit le miroir vertical $\pi-\theta$, **b** le miroir horizontal $-\theta$. Les trois premières symétries ne sont que les trois combinaisons possibles de ces deux traversées — il n'y a donc rien à apprendre, seulement à regarder où va le point.
::

::qcm-question{label="3." bonne="b"}
$\sin(2x)$ peut aussi s'écrire :

#a
$\cos\left(\dfrac{\pi}{2}-x\right)$

#b
$\cos\left(\dfrac{\pi}{2}-2x\right)$

#c
$\cos\left(\pi-2x\right)$

#solution
L'identité des **angles complémentaires** est $\sin\theta = \cos\left(\dfrac{\pi}{2}-\theta\right)$. C'est une identité : elle vaut pour **tout** $\theta$, donc aussi pour $\theta = 2x$ — à condition de remplacer $\theta$ **partout**.

$$
\sin(2x) = \cos\left(\frac{\pi}{2}-2x\right)
$$

**a** n'a remplacé $\theta$ qu'à moitié : il reste un $x$ là où il faudrait $2x$. **c** utilise la mauvaise symétrie — $\cos(\pi-2x)$ vaut $-\cos(2x)$, ce qui n'a rien à voir.

⚠️ **C'est le mécanisme exact** qui permet de résoudre une équation mêlant sinus et cosinus : on ne transforme pas l'équation, on réécrit un sinus en cosinus pour que les deux membres parlent la même langue.
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

::qcm-question{label="1." bonne="b"}
$\tan\theta$ est définie à condition que :

#a
$\sin\theta \neq 0$

#b
$\cos\theta \neq 0$

#c
$\theta \neq 0$

#solution
$\tan\theta = \dfrac{\sin\theta}{\cos\theta}$ : c'est le **dénominateur** qui doit être non nul.

$$
\cos\theta \neq 0 \iff \theta \neq \frac{\pi}{2}+k\pi
$$

Sur la figure, c'est le moment où le rayon devient **parallèle** à la droite verticale d'abscisse $1$ : il ne la coupe plus, et la tangente n'existe pas.
::

::qcm-question{label="2." bonne="a"}
La fonction tangente est périodique de période :

#a
$\pi$

#b
$2\pi$

#c
$\dfrac{\pi}{2}$

#solution
Le point diamétralement opposé à $M$ donne le **même** point d'intersection avec la droite verticale : la tangente reprend donc la même valeur au bout d'un **demi-tour**.

$$
\tan(\theta+k\pi) = \tan\theta
$$

⚠️ **C'est la seule des trois fonctions à ne pas être $2\pi$-périodique.** Conséquence directe : l'équation $\tan A = \tan B$ n'a qu'**une** famille de solutions, $A = B+k\pi$, là où $\cos$ et $\sin$ en donnent deux.
::

::qcm-question{label="3." bonne="c"}
$\tan\dfrac{\pi}{4} = $

#a
$\dfrac{\sqrt2}{2}$

#b
$\sqrt3$

#c
$1$

#solution
En $\dfrac{\pi}{4}$, le sinus et le cosinus sont **égaux**, donc leur quotient vaut $1$ :

$$
\tan\frac{\pi}{4} = \frac{\frac{\sqrt2}{2}}{\frac{\sqrt2}{2}} = 1
$$

**C'est la valeur pivot**, et le meilleur repère de contrôle du chapitre : tout angle inférieur à $\dfrac{\pi}{4}$ a une tangente inférieure à $1$, tout angle supérieur une tangente supérieure à $1$.
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

::qcm-question{label="1." bonne="c"}
$\cos A = \cos B$ équivaut à :

#a
$A = B+2k\pi$

#b
$A = B+k\pi$

#c
$A = B+2k\pi$ ou $A = -B+2k\pi$

#solution
Deux angles ont le même **cosinus** lorsqu'ils sont **opposés** : ce sont les deux points où la droite verticale d'abscisse $\cos B$ coupe le cercle, symétriques par rapport à l'axe horizontal.

$$
\cos A = \cos B \iff A = B+2k\pi \ \text{ ou }\ A = -B+2k\pi
$$

⚠️ **C'est là qu'on perd le plus de points de tout le chapitre** : n'écrire que la première famille donne un ensemble de solutions faux, même si les angles trouvés sont justes.
::

::qcm-question{label="2." bonne="b"}
Sur $[0\,;2\pi]$, l'équation $\cos x = \dfrac12$ a :

#a
une solution

#b
deux solutions

#c
aucune solution

#solution
La droite verticale d'abscisse $\dfrac12$ coupe le cercle en **deux** points, symétriques par rapport à l'axe horizontal :

$$
x = \frac{\pi}{3} \qquad\text{et}\qquad x = -\frac{\pi}{3}+2\pi = \frac{5\pi}{3}
$$

Les deux appartiennent bien à $[0\,;2\pi]$.

**Le raisonnement général** : tant que $-1 < k < 1$, la droite coupe le cercle en deux points, donc $\cos x = k$ a **toujours** deux solutions par tour.
::

::qcm-question{label="3." bonne="a"}
Si $3x = \dfrac{\pi}{3}+2k\pi$, alors :

#a
$x = \dfrac{\pi}{9}+\dfrac{2k\pi}{3}$

#b
$x = \dfrac{\pi}{9}+2k\pi$

#c
$x = \pi+\dfrac{2k\pi}{3}$

#solution
On divise **tout** par $3$, le terme en $k$ compris :

$$
x = \frac{\pi}{9}+\frac{2k\pi}{3}
$$

⚠️ **C'est l'étape la plus souvent ratée du chapitre.** Le $2k\pi$ n'est pas une décoration qu'on recopie : c'est un terme de l'équation, et il se divise comme les autres.

**La conséquence à voir** : les solutions sont espacées de $\dfrac{2\pi}{3}$, soit **trois par tour** et non une. Il faut y penser au moment de lister celles d'un intervalle donné.
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
$\arccos$ est à valeurs dans :

#a
$[0\,;\pi]$

#b
$\left[-\dfrac{\pi}{2}\,;\dfrac{\pi}{2}\right]$

#c
$[-1\,;1]$

#solution
$\arccos x$ est **l'unique angle de $[0\,;\pi]$** dont le cosinus vaut $x$.

**c** est l'ensemble de **départ**, pas d'arrivée : $\arccos$ est définie sur $[-1\,;1]$ et arrive dans $[0\,;\pi]$. **b** est l'intervalle d'arrivée d'$\arcsin$.

| Réciproque | définie sur | à valeurs dans |
|---|---|---|
| $\arccos$ | $[-1\,;1]$ | $[0\,;\pi]$ |
| $\arcsin$ | $[-1\,;1]$ | $\left[-\dfrac{\pi}{2}\,;\dfrac{\pi}{2}\right]$ |
| $\arctan$ | $\mathbb{R}$ | $\left]-\dfrac{\pi}{2}\,;\dfrac{\pi}{2}\right[$ |
::

::qcm-question{label="2." bonne="b"}
$\arcsin\dfrac12 = $

#a
$\dfrac{\pi}{3}$

#b
$\dfrac{\pi}{6}$

#c
$\dfrac{5\pi}{6}$

#solution
On cherche l'angle de $\left[-\dfrac{\pi}{2}\,;\dfrac{\pi}{2}\right]$ dont le **sinus** vaut $\dfrac12$. C'est $\dfrac{\pi}{6}$.

**a** est $\arccos\dfrac12$ — la confusion sinus/cosinus. **c** a bien pour sinus $\dfrac12$, mais **dépasse $\dfrac{\pi}{2}$** : il n'est pas dans l'intervalle d'arrivée.

**Le contrôle systématique**, à faire sur toute question de réciproque : le résultat est-il dans le bon intervalle ? Il élimine à lui seul une proposition sur trois.
::

::qcm-question{label="3." bonne="c"}
$\arccos\left(\cos\dfrac{5\pi}{4}\right) = $

#a
$\dfrac{5\pi}{4}$

#b
$-\dfrac{5\pi}{4}$

#c
$\dfrac{3\pi}{4}$

#solution
$\arccos(\cos x) = x$ **seulement si** $x\in[0\,;\pi]$. Or $\dfrac{5\pi}{4}$ dépasse $\pi$ : la simplification est interdite.

On ramène l'angle dans $[0\,;\pi]$ **sans changer la valeur du cosinus**, à l'aide de la parité puis de la périodicité :

$$
\cos\frac{5\pi}{4} = \cos\left(-\frac{5\pi}{4}\right) = \cos\left(-\frac{5\pi}{4}+2\pi\right) = \cos\frac{3\pi}{4}
$$

et $\dfrac{3\pi}{4}$ est bien dans $[0\,;\pi]$.

⚠️ **Dans l'autre sens, aucun piège** : $\cos(\arccos x) = x$ pour tout $x\in[-1\,;1]$. C'est la réciproque **à l'extérieur** qui demande de la vigilance.
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

::qcm-question{label="1." bonne="b"}
$\cos' = $

#a
$\sin$

#b
$-\sin$

#c
$-\cos$

#solution
$$
\sin' = \cos \qquad\qquad \cos' = -\sin
$$

**Une seule des deux lignes porte un signe moins**, et c'est celle du cosinus.

**Pourquoi**, sur la figure : quand $\theta$ augmente à partir de $0$, le point part vers la gauche, donc son abscisse — le cosinus — **diminue**. Une fonction qui décroît a une dérivée négative.
::

::qcm-question{label="2." bonne="c"}
La dérivée de $x\mapsto\sin(3x)$ est :

#a
$\cos(3x)$

#b
$-3\cos(3x)$

#c
$3\cos(3x)$

#solution
$\left(\sin u\right)' = u'\cos u$, avec $u = 3x$ et $u' = 3$ :

$$
\left(\sin(3x)\right)' = 3\cos(3x)
$$

**a** oublie le facteur $u'$ — l'erreur numéro un. **b** ajoute un signe moins qui appartient au cosinus, pas au sinus.

**Les deux vérifications de trois secondes**, à faire sur chaque dérivée composée : la fonction a-t-elle changé ? le facteur $u'$ est-il là ?
::

::qcm-question{label="3." bonne="a"}
$\arccos'x = $

#a
$\dfrac{-1}{\sqrt{1-x^2}}$

#b
$\dfrac{1}{\sqrt{1-x^2}}$

#c
$\dfrac{1}{1+x^2}$

#solution
$$
\arcsin'x = \frac{1}{\sqrt{1-x^2}} \qquad \arccos'x = \frac{-1}{\sqrt{1-x^2}} \qquad \arctan'x = \frac{1}{1+x^2}
$$

**Deux repères** qui évitent les erreurs : les deux « arc » en racine vont ensemble et sont **opposés** l'un de l'autre — leur somme vaut la constante $\dfrac{\pi}{2}$, donc la dérivée de cette somme est nulle. Et le signe moins va avec $\arccos$, qui est **décroissante**, comme le cosinus sur $[0\,;\pi]$.

$\arctan$ est la seule des trois sans racine.
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

::qcm-question{label="1." bonne="c"}
$\cos(a+b) = $

#a
$\cos a\cos b$

#b
$\cos a\cos b+\sin a\sin b$

#c
$\cos a\cos b-\sin a\sin b$

#solution
$$
\cos(a+b) = \cos a\cos b-\sin a\sin b
$$

**Le cosinus garde les fonctions ensemble et retourne le signe** — c'est ce retournement, contraire à l'intuition, qui fait l'essentiel des erreurs. **b** est la formule de $\cos(a-b)$.

**Le contrôle en trois secondes** : avec $a = b = \dfrac{\pi}{2}$, on doit retrouver $\cos\pi = -1$. La version **c** donne $0-1 = -1$ ; la version **b** donnerait $0+1 = 1$, donc elle est fausse.
::

::qcm-question{label="2." bonne="a"}
$\sin(2a) = $

#a
$2\sin a\cos a$

#b
$\sin^2a-\cos^2a$

#c
$2\sin a$

#solution
C'est la formule d'addition $\sin(a+b) = \sin a\cos b+\cos a\sin b$ dans le cas $b = a$ :

$$
\sin(2a) = \sin a\cos a+\cos a\sin a = 2\sin a\cos a
$$

**b** est, au signe près, la formule de $\cos(2a)$ — c'est la confusion classique entre les deux duplications. **c** oublie le cosinus.

**Le contrôle** : en $a = \dfrac{\pi}{2}$, $\sin\pi$ doit valoir $0$. La proposition **a** donne $2\times 1\times 0 = 0$ ; la **c** donnerait $2$.
::

::qcm-question{label="3." bonne="b"}
$\cos^2a$ peut aussi s'écrire :

#a
$\dfrac{1-\cos(2a)}{2}$

#b
$\dfrac{1+\cos(2a)}{2}$

#c
$1-\cos(2a)$

#solution
On part de la forme $\cos(2a) = 2\cos^2a-1$, et on isole le carré :

$$
\cos^2a = \frac{1+\cos(2a)}{2}
$$

**a** est la formule de $\sin^2a$ : les deux ne diffèrent que par le signe, et l'échange est l'erreur la plus fréquente.

**Le contrôle, imparable** : en $a = 0$, $\cos^2 0 = 1$. La proposition **b** donne $\dfrac{1+1}{2} = 1$ ; la **a** donne $0$, la **c** donne $0$. Une seule survit.

**À quoi ça sert** : c'est la seule façon de dériver ou d'intégrer un $\cos^2$ sans s'y reprendre à deux fois.
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

:::exercice{titre="S'entraîner" theme="Sept questions pour vérifier que la figure est bien lue"}

::question{label="1."}

Convertir $135°$ en radians, puis $\dfrac{7\pi}{6}$ en degrés.

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

::question{label="2."}

Donner les valeurs exactes de $\cos\left(-\dfrac{5\pi}{6}\right)$ et $\sin\left(-\dfrac{5\pi}{6}\right)$.

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

::question{label="3."}

Dans quel quadrant se trouve un angle $\theta$ tel que $\cos\theta < 0$ et $\sin\theta > 0$ ? Donner un angle remarquable qui convient.

#indice

Le cosinus est l'abscisse et le sinus l'ordonnée : traduis chaque condition en « à gauche / à droite » et « au-dessus / en dessous » de l'origine. L'intersection des deux demi-plans est un quadrant unique.

#solution

$\cos\theta < 0$ signifie que l'abscisse est négative : le point est **à gauche** de l'axe vertical. $\sin\theta > 0$ signifie que l'ordonnée est positive : le point est **au-dessus** de l'axe horizontal.

Les deux ensemble : en haut à gauche, c'est-à-dire le **2ᵉ quadrant**, soit $\theta\in\left]\dfrac{\pi}{2},\pi\right[$.

Trois angles remarquables y sont : $\dfrac{2\pi}{3}$, $\dfrac{3\pi}{4}$ et $\dfrac{5\pi}{6}$. Par exemple $\theta = \dfrac{2\pi}{3}$, avec $\cos\theta = -\dfrac12 < 0$ et $\sin\theta = \dfrac{\sqrt3}{2} > 0$.

C'est exactement le raisonnement qu'on tient pour déterminer l'argument d'un nombre complexe.

::

::question{label="4."}

Simplifier $A = \cos(\pi-x)+\cos(\pi+x)+\sin\left(\dfrac{\pi}{2}+x\right)$.

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

::question{label="5."}

Résoudre $\sin x = \dfrac{\sqrt3}{2}$ sur $[0,2\pi]$.

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

::question{label="6."}

Résoudre $\cos(2x) = -\dfrac12$ sur $[0,\pi]$.

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

::question{label="7."}

Calculer $\arccos\left(\cos\dfrac{7\pi}{6}\right)$ et $\arcsin\left(\sin\dfrac{5\pi}{4}\right)$.

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
