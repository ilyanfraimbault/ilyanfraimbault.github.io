---
title: Trigonométrie — comprendre le cercle
description: Le cercle trigonométrique expliqué de zéro, en quatre étapes et avec une figure interactive — radians, valeurs remarquables, angles associés, équations, réciproques, formules d'addition, et la liste de ce qu'il faut réellement savoir par cœur.
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

## 6. Les angles associés, ou les quatre symétries

C'est le point qui coûte le plus de temps quand on l'apprend par cœur — et le plus rapide quand on le lit sur la figure. Les quatre formules ne sont **rien d'autre** que quatre symétries du cercle.

::cercle-trigo{titre="Les quatre symétries" resume="Coche ou décoche une symétrie pour voir où atterrit le point, et quelle formule elle produit." angle="30" mode="symetries" modes="explorer,symetries"}
::

| Angle | Symétrie | Cosinus | Sinus |
|---|---|---|---|
| $-\theta$ | par rapport à l'axe **horizontal** | $\cos(-\theta) = \cos\theta$ | $\sin(-\theta) = -\sin\theta$ |
| $\pi-\theta$ | par rapport à l'axe **vertical** | $\cos(\pi-\theta) = -\cos\theta$ | $\sin(\pi-\theta) = \sin\theta$ |
| $\pi+\theta$ | par rapport au **centre $O$** | $\cos(\pi+\theta) = -\cos\theta$ | $\sin(\pi+\theta) = -\sin\theta$ |
| $\dfrac{\pi}{2}-\theta$ | par rapport à la **diagonale** $y=x$ | $\cos\!\left(\dfrac{\pi}{2}-\theta\right) = \sin\theta$ | $\sin\!\left(\dfrac{\pi}{2}-\theta\right) = \cos\theta$ |

**Comment retrouver une ligne sans l'avoir apprise.** Prends $\pi-\theta$ : le symétrique de $M$ par rapport à l'axe vertical a la même hauteur mais l'abscisse opposée. Or l'abscisse, c'est le cosinus, et la hauteur, c'est le sinus. Donc le cosinus change de signe et le sinus non. La ligne du tableau est écrite.

La quatrième, dite des **angles complémentaires**, est la plus utile en pratique : c'est elle qui permet de convertir un sinus en cosinus, indispensable dès qu'une équation mélange les deux.

$$
\sin\theta = \cos\!\left(\frac{\pi}{2}-\theta\right)
$$

**Pourquoi cette symétrie-là échange cosinus et sinus.** Réfléchir un point par rapport à la diagonale $y=x$ revient à **échanger son abscisse et son ordonnée** : le point $M(\cos\theta\,;\ \sin\theta)$ devient $M'(\sin\theta\,;\ \cos\theta)$. Et cette réflexion envoie l'angle $\theta$ sur l'angle $\frac{\pi}{2}-\theta$ — décoche puis recoche la symétrie sur la figure ci-dessus pour le voir. Donc l'abscisse du point d'angle $\frac{\pi}{2}-\theta$, c'est-à-dire $\cos\!\left(\frac{\pi}{2}-\theta\right)$, vaut l'ordonnée du point d'angle $\theta$, c'est-à-dire $\sin\theta$.

Dans un triangle rectangle, c'est encore plus court : les deux angles aigus valent ensemble $\frac{\pi}{2}$, donc si l'un vaut $\theta$, l'autre vaut $\frac{\pi}{2}-\theta$. Or le côté **opposé** au premier est le côté **adjacent** au second : « opposé sur hypoténuse » pour l'un est exactement « adjacent sur hypoténuse » pour l'autre.

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

C'est le mécanisme exact de la conversion utilisée pour résoudre une équation qui mélange sinus et cosinus. On ne « transforme » pas l'équation : on réécrit un sinus en cosinus pour que les deux membres soient écrits avec la même fonction.
::

Une cinquième s'en déduit, en remplaçant $\theta$ par $-\theta$ :

$$
\cos\!\left(\frac{\pi}{2}+\theta\right) = -\sin\theta \qquad\qquad \sin\!\left(\frac{\pi}{2}+\theta\right) = \cos\theta
$$

::rappel{titre="La méthode générale pour un angle quelconque" icone="i-lucide-list-ordered"}
1. **Périodicité** : ajouter ou retirer des $2\pi$ pour ramener l'angle dans $[0,2\pi[$ — ou dans $]-\pi,\pi]$, souvent plus commode.
2. **Symétrie** : utiliser une ligne du tableau ci-dessus pour ramener l'angle dans le premier quadrant $\left[0,\frac{\pi}{2}\right]$.
3. **Table** : lire la valeur dans le tableau des valeurs remarquables.
4. **Signe** : le remettre d'après le quadrant de départ.

Exemple complet : $\cos\dfrac{11\pi}{6}$. On a $\dfrac{11\pi}{6} = 2\pi-\dfrac{\pi}{6}$, donc c'est $\cos\!\left(-\dfrac{\pi}{6}\right) = \cos\dfrac{\pi}{6} = \dfrac{\sqrt3}{2}$. Contrôle : $\dfrac{11\pi}{6}$ est dans le 4ᵉ quadrant, où le cosinus est positif. Cohérent.
::

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

## 10. Dérivées

$$
\sin' = \cos \qquad \cos' = -\sin \qquad \tan' = 1+\tan^2 = \frac{1}{\cos^2}
$$

et, avec une composée $u$ :

$$
\big(\sin u\big)' = u'\cos u \qquad \big(\cos u\big)' = -u'\sin u \qquad \big(\sin(ax+b)\big)' = a\cos(ax+b)
$$

Le seul point de vigilance est le **signe moins** de la dérivée du cosinus. Il se retrouve sur la figure : quand $\theta$ augmente à partir de $0$, le point part vers la gauche, donc son abscisse — le cosinus — **diminue**. Une fonction qui décroît a bien une dérivée négative.

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
