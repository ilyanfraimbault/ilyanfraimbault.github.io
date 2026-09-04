---
title: QCM 1 — Trigonométrie
description: Vingt questions à choix unique sur le cercle, les valeurs remarquables, les angles associés, la tangente, les équations et les fonctions réciproques.
type: qcm
annee: A1
matiere: Remise à niveau en maths
ordre: 1
icone: i-lucide-compass
---

::rappel{titre="Comment se déroule ce QCM" icone="i-lucide-compass"}
Vingt questions, **une seule bonne réponse** par question. On répond à tout, puis on clique sur **Corriger** en bas de page : rien ne se révèle avant.

Une fois la copie rendue, chaque question ratée ouvre ses trois boutons — **Indice** pour le raisonnement, **Voir la solution** pour la correction rédigée, **Cours** pour le rappel exact qui manquait.

Cliquer une seconde fois sur une proposition la désélectionne, si tu préfères laisser une question blanche plutôt que de deviner. Une question blanche compte comme fausse, mais tu sauras au moins que tu ne savais pas.
::

::carte-lien{to="/cours/a1/remise-a-niveau-maths/trigonometrie/cours" titre="Le cours de trigonométrie" description="Le cercle expliqué de zéro, figure interactive à l'appui : radians, valeurs remarquables, angles associés, équations, arccos et arcsin" type="cours" meta="10 sections"}
::

:::qcm{titre="QCM 1 — Trigonométrie" theme="Du radian aux fonctions réciproques, dans l'ordre du cours" duree="1 h" icone="i-lucide-compass"}

::qcm-question{label="1." bonne="a" cours="qcm-radian"}
Combien vaut $150°$ en radians ?

#a
$\dfrac{5\pi}{6}$

#b
$\dfrac{3\pi}{4}$

#c
$\dfrac{2\pi}{3}$

#d
$\dfrac{5\pi}{4}$

#indice
La conversion se fait par proportionnalité : $180°$ correspond à $\pi$ radians. On multiplie donc le nombre de degrés par $\dfrac{\pi}{180}$, puis on simplifie la fraction.

#solution
$$
150\times\frac{\pi}{180} = \frac{150\pi}{180} = \frac{5\pi}{6}
$$

On simplifie par $30$. Contrôle rapide : $\dfrac{5\pi}{6}$ est un peu moins que $\pi$, donc un peu moins que $180°$ — cohérent avec $150°$.

Les distracteurs correspondent à $135°$, $120°$ et $225°$.
::

::qcm-question{label="2." bonne="b" cours="qcm-radian"}
Le point $M$ du cercle trigonométrique associé à l'angle $\theta$ a pour coordonnées :

#a
$(\sin\theta\ ;\ \cos\theta)$

#b
$(\cos\theta\ ;\ \sin\theta)$

#c
$(\tan\theta\ ;\ 1)$

#d
$(\theta\ ;\ \sin\theta)$

#indice
C'est la définition même du cosinus et du sinus sur le cercle. L'ordre est celui de l'alphabet et celui des axes : **c**osinus en abscisse, **s**inus en ordonnée.

#solution
Par définition, sur le cercle de rayon $1$ :

$$
M\left(\cos\theta\ ;\ \sin\theta\right)
$$

Le cosinus se lit **horizontalement**, le sinus **verticalement**. Inverser les deux est l'erreur la plus coûteuse du chapitre, car elle contamine tout le reste : signes, symétries, équations.

Moyen mnémotechnique : cosinus et abscisse commencent tous deux par une consonne de « **c**ôté horizontal » ; sinus et ordonnée montent tous deux.
::

::qcm-question{label="3." bonne="b" cours="qcm-valeurs"}
$\cos\dfrac{2\pi}{3} = $

#a
$\dfrac12$

#b
$-\dfrac12$

#c
$-\dfrac{\sqrt3}{2}$

#d
$\dfrac{\sqrt3}{2}$

#indice
$\dfrac{2\pi}{3}$ vaut $120°$ : le point est dans le **deuxième quadrant**, où l'abscisse est négative. Le cosinus est donc négatif, ce qui élimine déjà deux propositions.

Ensuite, $\dfrac{2\pi}{3} = \pi-\dfrac{\pi}{3}$, donc son cosinus est l'opposé de celui de $\dfrac{\pi}{3}$.

#solution
$$
\cos\frac{2\pi}{3} = \cos\left(\pi-\frac{\pi}{3}\right) = -\cos\frac{\pi}{3} = -\frac12
$$

⚠️ Le piège classique est de confondre les valeurs de $\dfrac{\pi}{3}$ et de $\dfrac{\pi}{6}$ :

$$
\cos\frac{\pi}{3} = \frac12 \qquad \cos\frac{\pi}{6} = \frac{\sqrt3}{2}
$$

Le repère : plus l'angle est **petit**, plus le cosinus est **grand**. À $\dfrac{\pi}{6}$, tout proche de $0$, le cosinus est proche de $1$ — c'est donc $\dfrac{\sqrt3}{2}$.
::

::qcm-question{label="4." bonne="b" cours="qcm-valeurs"}
$\sin\left(-\dfrac{\pi}{4}\right) = $

#a
$\dfrac{\sqrt2}{2}$

#b
$-\dfrac{\sqrt2}{2}$

#c
$-\dfrac12$

#d
$\dfrac12$

#indice
Le sinus est une fonction **impaire** : changer le signe de l'angle change le signe du résultat. Commence donc par calculer $\sin\dfrac{\pi}{4}$, puis applique cette parité.

#solution
Le sinus est impair, donc

$$
\sin\left(-\frac{\pi}{4}\right) = -\sin\frac{\pi}{4} = -\frac{\sqrt2}{2}
$$

**Le contrôle géométrique** : un angle négatif place le point **sous** l'axe horizontal, donc son ordonnée — le sinus — est négative. Toute réponse positive était éliminable d'emblée.

À ne pas confondre : $\cos$ est **pair** ($\cos(-\theta) = \cos\theta$), $\sin$ et $\tan$ sont **impairs**.
::

::qcm-question{label="5." bonne="b" cours="qcm-valeurs"}
Pour tout réel $\theta$, $\cos^2\theta+\sin^2\theta$ vaut :

#a
$0$

#b
$1$

#c
$2$

#d
cela dépend de $\theta$

#indice
C'est le théorème de Pythagore appliqué au triangle rectangle dont l'hypoténuse est le rayon du cercle — et ce rayon vaut $1$.

#solution
$$
\boxed{\cos^2\theta+\sin^2\theta = 1} \qquad \text{pour \textbf{tout} } \theta
$$

Le point $M(\cos\theta\ ;\sin\theta)$ est sur le cercle de rayon $1$ : sa distance à l'origine vaut $1$, ce qui s'écrit exactement $\sqrt{\cos^2\theta+\sin^2\theta} = 1$.

C'est l'identité la plus utilisée de tout le programme. Elle sert notamment à retrouver un cosinus à partir d'un sinus, et à établir les dérivées de $\arcsin$ et $\arccos$.
::

::qcm-question{label="6." bonne="b" cours="qcm-symetries"}
Pour tout réel $\theta$, $\cos(\pi-\theta) = $

#a
$\cos\theta$

#b
$-\cos\theta$

#c
$\sin\theta$

#d
$-\sin\theta$

#indice
$\pi-\theta$ est le symétrique de $\theta$ par rapport à l'**axe vertical**. Cette symétrie conserve la hauteur du point et change le signe de son abscisse.

Or l'abscisse, c'est le cosinus.

#solution
La symétrie par rapport à l'axe vertical envoie $M(\cos\theta\ ;\sin\theta)$ sur $M'(-\cos\theta\ ;\sin\theta)$ : l'ordonnée ne bouge pas, l'abscisse change de signe.

$$
\cos(\pi-\theta) = -\cos\theta \qquad \sin(\pi-\theta) = \sin\theta
$$

**Le contrôle numérique**, à faire quand un doute subsiste : prends $\theta = 0$. Alors $\cos(\pi-0) = \cos\pi = -1$, tandis que $\cos 0 = 1$. C'est bien l'opposé.

Cette vérification sur une valeur particulière départage instantanément les quatre propositions d'une question d'angles associés.
::

::qcm-question{label="7." bonne="a" cours="qcm-symetries"}
Pour tout réel $\theta$, $\sin(\pi-\theta) = $

#a
$\sin\theta$

#b
$-\sin\theta$

#c
$\cos\theta$

#d
$-\cos\theta$

#indice
Même symétrie qu'à la question précédente — celle par rapport à l'axe vertical. Elle conserve l'ordonnée du point, et l'ordonnée est le sinus.

#solution
$$
\sin(\pi-\theta) = \sin\theta
$$

Deux angles **supplémentaires** ont le même sinus. C'est exactement pourquoi l'équation $\sin A = \sin B$ possède la famille $A = \pi-B+2k\pi$ en plus de $A = B+2k\pi$.

**Contrôle** : $\theta = \dfrac{\pi}{6}$ donne $\sin\dfrac{5\pi}{6} = \dfrac12 = \sin\dfrac{\pi}{6}$. Cohérent.
::

::qcm-question{label="8." bonne="b" cours="qcm-symetries"}
Laquelle de ces égalités est vraie pour **tout** réel $\theta$ ?

#a
$\sin\theta = \cos\left(\dfrac{\pi}{2}+\theta\right)$

#b
$\sin\theta = \cos\left(\dfrac{\pi}{2}-\theta\right)$

#c
$\sin\theta = \cos(\pi-\theta)$

#d
$\sin\theta = \cos(\theta-\pi)$

#indice
C'est l'identité des **angles complémentaires** : deux angles dont la somme vaut $\dfrac{\pi}{2}$ échangent leur cosinus et leur sinus.

En cas d'hésitation entre les deux premières, teste $\theta = 0$ : le sinus vaut alors $0$, et une seule des deux propositions donne $0$.

#solution
$$
\boxed{\sin\theta = \cos\left(\frac{\pi}{2}-\theta\right)}
$$

C'est la symétrie par rapport à la diagonale $y = x$, qui échange abscisse et ordonnée donc cosinus et sinus.

**Pourquoi les autres sont fausses**, en testant $\theta = 0$ où $\sin 0 = 0$ :

- $\cos\left(\dfrac{\pi}{2}+0\right) = 0$… la proposition **a** passe ce test. Il faut donc un second point : en $\theta = \dfrac{\pi}{2}$, $\sin = 1$ mais $\cos\pi = -1$. En réalité $\cos\left(\dfrac{\pi}{2}+\theta\right) = -\sin\theta$, c'est l'**opposé**.
- $\cos(\pi-0) = -1 \neq 0$, et $\cos(0-\pi) = -1 \neq 0$ : les propositions **c** et **d** valent toutes deux $-\cos\theta$.

**La leçon de méthode** : un seul contre-exemple ne suffit pas toujours, mais deux valeurs bien choisies — $0$ et $\dfrac{\pi}{2}$ — éliminent presque toujours tout.

Cette identité est celle qui permet de convertir un sinus en cosinus, indispensable dès qu'une équation mélange les deux.
::

::qcm-question{label="9." bonne="c" cours="qcm-tangente"}
$\tan\theta$ est définie pour :

#a
tout réel $\theta$

#b
$\theta \neq k\pi$

#c
$\theta \neq \dfrac{\pi}{2}+k\pi$

#d
$\theta \neq \dfrac{\pi}{2}+2k\pi$

#indice
$\tan\theta = \dfrac{\sin\theta}{\cos\theta}$ : la tangente n'existe pas là où le **dénominateur** s'annule. Reste à se demander où le cosinus est nul, et à écrire **toutes** ces valeurs d'un coup.

#solution
$$
\tan\theta = \frac{\sin\theta}{\cos\theta} \quad\text{définie pour }\cos\theta \neq 0
$$

Le cosinus s'annule aux deux extrémités de l'axe vertical, c'est-à-dire en $\dfrac{\pi}{2}$ et en $-\dfrac{\pi}{2}$, puis de $\pi$ en $\pi$ :

$$
\boxed{\theta \neq \frac{\pi}{2}+k\pi}
$$

**Pourquoi le pas est $\pi$ et non $2\pi$.** Le cosinus s'annule **deux fois par tour**, en haut et en bas du cercle. Écrire $\dfrac{\pi}{2}+2k\pi$ (proposition **d**) n'exclut que le point du haut et oublie celui du bas.

La proposition **b** est l'ensemble où le **sinus** s'annule : c'est la condition d'existence de $\dfrac{1}{\tan\theta}$, pas de $\tan\theta$.
::

::qcm-question{label="10." bonne="b" cours="qcm-tangente"}
La fonction tangente est périodique de période :

#a
$2\pi$

#b
$\pi$

#c
$\dfrac{\pi}{2}$

#d
$4\pi$

#indice
Sur le cercle, la tangente se lit à l'intersection de la droite $(OM)$ prolongée avec la droite verticale d'abscisse $1$. Que se passe-t-il si l'on remplace $M$ par le point diamétralement opposé ?

#solution
Le point diamétralement opposé à $M$ donne **le même** point d'intersection, puisque c'est la même droite $(OM)$.

$$
\tan(\theta+k\pi) = \tan\theta
$$

La tangente est donc $\pi$-périodique, alors que le sinus et le cosinus sont $2\pi$-périodiques.

**La conséquence pratique** : l'équation $\tan A = \tan B$ n'a **qu'une seule** famille de solutions, $A = B+k\pi$, là où $\cos A = \cos B$ et $\sin A = \sin B$ en ont deux.

Algébriquement : $\dfrac{\sin(\theta+\pi)}{\cos(\theta+\pi)} = \dfrac{-\sin\theta}{-\cos\theta} = \tan\theta$, les deux signes moins se compensent.
::

::qcm-question{label="11." bonne="c" cours="qcm-tangente"}
$\tan\dfrac{\pi}{3} = $

#a
$\dfrac{\sqrt3}{3}$

#b
$1$

#c
$\sqrt3$

#d
$3$

#indice
Il n'y a rien à mémoriser de plus : $\tan = \dfrac{\sin}{\cos}$, et les deux valeurs sont dans le tableau des angles remarquables.

#solution
$$
\tan\frac{\pi}{3} = \frac{\sin\frac{\pi}{3}}{\cos\frac{\pi}{3}} = \frac{\frac{\sqrt3}{2}}{\frac12} = \frac{\sqrt3}{2}\times 2 = \sqrt3
$$

⚠️ Le distracteur **a**, $\dfrac{\sqrt3}{3}$, est $\tan\dfrac{\pi}{6}$ — l'angle complémentaire. Les deux sont inverses l'un de l'autre, puisque $\tan\left(\dfrac{\pi}{2}-\theta\right) = \dfrac{1}{\tan\theta}$.

**Le contrôle de bon sens** : la tangente croît de $0$ à $+\infty$ sur $\left[0,\dfrac{\pi}{2}\right[$, et vaut $1$ en $\dfrac{\pi}{4}$. Comme $\dfrac{\pi}{3} > \dfrac{\pi}{4}$, la réponse doit être **supérieure à 1** — ce qui élimine **a** et **b** immédiatement.
::

::qcm-question{label="12." bonne="b" cours="qcm-equations"}
Pour tous réels $A$ et $B$, $\cos A = \cos B$ équivaut à :

#a
$A = B+2k\pi$ uniquement

#b
$A = B+2k\pi$ ou $A = -B+2k\pi$

#c
$A = B+2k\pi$ ou $A = \pi-B+2k\pi$

#d
$A = B+k\pi$

#indice
Deux angles ont le même cosinus lorsqu'ils ont la même **abscisse** sur le cercle : la droite verticale correspondante le coupe en deux points, symétriques par rapport à l'axe **horizontal**.

Quelle relation lie deux angles symétriques par rapport à l'axe horizontal ?

#solution
$$
\boxed{\cos A = \cos B \iff A = B+2k\pi \ \text{ ou }\ A = -B+2k\pi} \qquad (k\in\mathbb{Z})
$$

Deux angles symétriques par rapport à l'axe horizontal sont **opposés** : d'où la seconde famille en $-B$.

**La proposition c est celle du sinus**, pas du cosinus : deux angles ont le même sinus quand ils sont **supplémentaires**, d'où $\pi-B$.

$$
\sin A = \sin B \iff A = B+2k\pi \ \text{ ou }\ A = \pi-B+2k\pi
$$

**La proposition a** est l'erreur qui coûte le plus de points à l'examen : n'écrire qu'une famille sur deux. Un cosinus prend chaque valeur **deux fois par tour**.
::

::qcm-question{label="13." bonne="b" cours="qcm-equations"}
Pour tous réels $A$ et $B$, $\sin A = \sin B$ équivaut à :

#a
$A = B+2k\pi$ ou $A = -B+2k\pi$

#b
$A = B+2k\pi$ ou $A = \pi-B+2k\pi$

#c
$A = B+k\pi$

#d
$A = B+2k\pi$ uniquement

#indice
Même raisonnement qu'à la question précédente, mais avec une droite **horizontale** : elle coupe le cercle en deux points symétriques par rapport à l'axe **vertical**.

Deux angles symétriques par rapport à l'axe vertical sont supplémentaires.

#solution
$$
\boxed{\sin A = \sin B \iff A = B+2k\pi \ \text{ ou }\ A = \pi-B+2k\pi}
$$

**Ne pas confondre les deux formules.** Le moyen de ne jamais se tromper est de ne pas les apprendre par cœur, mais de les relire sur le cercle :

| Équation | Symétrie | Seconde famille |
|---|---|---|
| $\cos A = \cos B$ | axe **horizontal** | angles **opposés**, $-B$ |
| $\sin A = \sin B$ | axe **vertical** | angles **supplémentaires**, $\pi-B$ |

La proposition **a** est celle du cosinus, la **c** celle de la tangente.
::

::qcm-question{label="14." bonne="c" cours="qcm-equations"}
Sur $[0\,;2\pi]$, l'ensemble des solutions de $\cos x = \dfrac12$ est :

#a
$\left\{\dfrac{\pi}{3}\right\}$

#b
$\left\{\dfrac{\pi}{3}\ ;\ \dfrac{2\pi}{3}\right\}$

#c
$\left\{\dfrac{\pi}{3}\ ;\ \dfrac{5\pi}{3}\right\}$

#d
$\left\{\dfrac{\pi}{3}\ ;\ \dfrac{4\pi}{3}\right\}$

#indice
Écris les **deux** familles, $x = \dfrac{\pi}{3}+2k\pi$ et $x = -\dfrac{\pi}{3}+2k\pi$, puis cherche dans chacune les valeurs qui tombent dans $[0\,;2\pi]$. La seconde famille exige $k = 1$.

#solution
**Étape 1 — l'angle de référence.** $\cos\dfrac{\pi}{3} = \dfrac12$.

**Étape 2 — les deux familles.**

$$
x = \frac{\pi}{3}+2k\pi \qquad\text{ou}\qquad x = -\frac{\pi}{3}+2k\pi
$$

**Étape 3 — sélectionner dans $[0\,;2\pi]$.** La première donne $\dfrac{\pi}{3}$ pour $k=0$. La seconde donne $-\dfrac{\pi}{3}$, hors de l'intervalle : on prend $k=1$.

$$
-\frac{\pi}{3}+2\pi = \frac{-\pi+6\pi}{3} = \frac{5\pi}{3}
$$

$$
\boxed{S = \left\{\frac{\pi}{3}\ ;\ \frac{5\pi}{3}\right\}}
$$

**Le contrôle géométrique** : les deux solutions doivent être symétriques par rapport à l'axe horizontal, donc leur somme doit valoir $2\pi$. Ici $\dfrac{\pi}{3}+\dfrac{5\pi}{3} = 2\pi$. ✓

La proposition **b** est l'erreur de symétrie — $\dfrac{2\pi}{3}$ est le supplémentaire, c'est la règle du **sinus**. La **d** confond avec la symétrie centrale.
::

::qcm-question{label="15." bonne="b" cours="qcm-reciproques"}
L'ensemble de définition de $\arccos$ est :

#a
$\mathbb{R}$

#b
$[-1\,;1]$

#c
$[0\,;\pi]$

#d
$\left[-\dfrac{\pi}{2}\,;\dfrac{\pi}{2}\right]$

#indice
$\arccos x$ répond à la question : « quel angle a pour cosinus $x$ ? ». Cette question n'a de sens que si $x$ est une valeur **atteinte** par un cosinus.

Ne confonds pas l'ensemble de **départ** (les valeurs qu'on donne) avec l'ensemble d'**arrivée** (les angles qu'on obtient).

#solution
$$
\arccos : [-1\,;1] \longrightarrow [0\,;\pi]
$$

Un cosinus vaut toujours entre $-1$ et $1$ : on ne peut donc demander $\arccos(2)$, qui n'existe pas.

**La proposition c est l'ensemble d'arrivée**, pas de départ — c'est la confusion la plus fréquente. Le tableau complet :

| Fonction | Départ | Arrivée |
|---|---|---|
| $\arccos$ | $[-1\,;1]$ | $[0\,;\pi]$ |
| $\arcsin$ | $[-1\,;1]$ | $\left[-\dfrac{\pi}{2}\,;\dfrac{\pi}{2}\right]$ |
| $\arctan$ | $\mathbb{R}$ | $\left]-\dfrac{\pi}{2}\,;\dfrac{\pi}{2}\right[$ |

$\arctan$ est le seul défini sur $\mathbb{R}$ tout entier, parce que la tangente, elle, prend toutes les valeurs réelles.
::

::qcm-question{label="16." bonne="c" cours="qcm-reciproques"}
$\arccos\left(-\dfrac12\right) = $

#a
$-\dfrac{\pi}{3}$

#b
$\dfrac{\pi}{3}$

#c
$\dfrac{2\pi}{3}$

#d
$\dfrac{4\pi}{3}$

#indice
La phrase à se répéter : $\arccos x$ est l'**unique angle de $[0\,;\pi]$** dont le cosinus vaut $x$.

Deux propositions sortent de cet intervalle : elles sont éliminables sans le moindre calcul.

#solution
On cherche l'angle de $[0\,;\pi]$ dont le cosinus vaut $-\dfrac12$. On sait que $\cos\dfrac{\pi}{3} = \dfrac12$, et le cosinus opposé s'obtient par le supplémentaire :

$$
\arccos\left(-\frac12\right) = \pi-\frac{\pi}{3} = \frac{2\pi}{3}
$$

**Les trois autres propositions se réfutent en une seconde** :

- $-\dfrac{\pi}{3}$ est **négatif** : $\arccos$ ne renvoie jamais de valeur négative.
- $\dfrac{\pi}{3}$ a pour cosinus $+\dfrac12$, pas $-\dfrac12$.
- $\dfrac{4\pi}{3}$ dépasse $\pi$ : hors de l'intervalle d'arrivée.

**Le réflexe à garder** : après tout calcul d'arccos, vérifier que le résultat est bien dans $[0\,;\pi]$. Cette seule vérification élimine la majorité des erreurs.
::

::qcm-question{label="17." bonne="b" cours="qcm-reciproques"}
$\arcsin\left(\sin\dfrac{2\pi}{3}\right) = $

#a
$\dfrac{2\pi}{3}$

#b
$\dfrac{\pi}{3}$

#c
$-\dfrac{\pi}{3}$

#d
$\dfrac{\pi}{6}$

#indice
⚠️ La réponse **n'est pas** $\dfrac{2\pi}{3}$ : la simplification $\arcsin(\sin x) = x$ n'est valable que si $x$ appartient déjà à $\left[-\dfrac{\pi}{2}\,;\dfrac{\pi}{2}\right]$, ce qui n'est pas le cas ici.

Il faut d'abord remplacer $\dfrac{2\pi}{3}$ par un angle **de cet intervalle ayant le même sinus**. Quelle symétrie conserve le sinus ?

#solution
$\dfrac{2\pi}{3} \approx 120°$ n'est pas dans $\left[-\dfrac{\pi}{2}\,;\dfrac{\pi}{2}\right]$ : on ne peut pas simplifier directement.

On utilise $\sin(\pi-\theta) = \sin\theta$, qui change l'angle **sans changer le sinus** :

$$
\sin\frac{2\pi}{3} = \sin\left(\pi-\frac{2\pi}{3}\right) = \sin\frac{\pi}{3}
$$

Et $\dfrac{\pi}{3}$ appartient bien à $\left[-\dfrac{\pi}{2}\,;\dfrac{\pi}{2}\right]$, donc

$$
\boxed{\arcsin\left(\sin\frac{2\pi}{3}\right) = \frac{\pi}{3}}
$$

**La règle générale, à connaître dans les deux sens :**

$$
\sin(\arcsin x) = x \ \text{ toujours} \qquad \arcsin(\sin x) = x \ \text{ seulement si } x\in\left[-\frac{\pi}{2}\,;\frac{\pi}{2}\right]
$$

C'est la composition avec la **réciproque à l'extérieur** qui demande de la vigilance. Dans l'autre sens, aucun piège.
::

::qcm-question{label="18." bonne="b" cours="qcm-reciproques"}
La fonction $\arctan$ est à valeurs dans :

#a
$[0\,;\pi]$

#b
$\left]-\dfrac{\pi}{2}\,;\dfrac{\pi}{2}\right[$

#c
$[-1\,;1]$

#d
$\mathbb{R}$

#indice
$\arctan$ est la réciproque de la tangente **restreinte** à l'intervalle où celle-ci est strictement croissante et prend toutes les valeurs réelles.

Attention aux crochets : les bornes sont-elles atteintes ?

#solution
$$
\arctan : \mathbb{R} \longrightarrow \left]-\frac{\pi}{2}\,;\frac{\pi}{2}\right[
$$

**Les crochets sont ouverts**, et ce n'est pas un détail : $\tan\dfrac{\pi}{2}$ n'existe pas, donc $\dfrac{\pi}{2}$ n'est jamais atteint. La fonction s'en approche seulement, ce qui se lit sur les asymptotes horizontales :

$$
\lim_{x\to+\infty}\arctan x = \frac{\pi}{2} \qquad \lim_{x\to-\infty}\arctan x = -\frac{\pi}{2}
$$

La proposition **a** est l'ensemble d'arrivée d'$\arccos$, la **d** son ensemble de **départ**.
::

::qcm-question{label="19." bonne="c" cours="qcm-derivees"}
La fonction $f$ définie sur $\mathbb{R}$ par $f(x) = \cos(3x)$ a pour dérivée :

#a
$f'(x) = -\sin(3x)$

#b
$f'(x) = 3\sin(3x)$

#c
$f'(x) = -3\sin(3x)$

#d
$f'(x) = 3\cos(3x)$

#indice
Deux choses arrivent en même temps, et il faut les deux : le cosinus se dérive en $-\sin$, **et** la forme composée fait sortir la dérivée de l'intérieur.

$$
\left(\cos u\right)' = -u'\sin u
$$

#solution
Avec $u = 3x$, donc $u' = 3$ :

$$
\left(\cos(3x)\right)' = -3\sin(3x)
$$

**Les deux erreurs qu'encodent les distracteurs :**

- **a** oublie le facteur $3$ — on a dérivé le cosinus sans dériver l'intérieur ;
- **b** oublie le signe moins — on a traité $\cos$ comme $\sin$.

Chacune coûte la question à elle seule, et elles se cumulent volontiers.

**Le tableau à ne jamais confondre :**

$$
\sin' = \cos \qquad \cos' = -\sin
$$

⚠️ Ces formules **supposent que $x$ est en radians**. C'est la vraie raison d'être du radian dans tout le programme.
::

::qcm-question{label="20." bonne="a" cours="qcm-derivees"}
La fonction $f = \arctan$, définie et dérivable sur $\mathbb{R}$, a pour dérivée :

#a
$f'(x) = \dfrac{1}{1+x^2}$

#b
$f'(x) = -\dfrac{1}{1+x^2}$

#c
$f'(x) = \dfrac{1}{\sqrt{1-x^2}}$

#d
$f'(x) = -\dfrac{1}{\sqrt{1-x^2}}$

#indice
Deux des propositions comportent une racine : ce sont les dérivées d'$\arcsin$ et d'$\arccos$, définies seulement sur $]-1\,;1[$.

Or $\arctan$ est définie sur $\mathbb{R}$ tout entier — sa dérivée doit donc l'être aussi. Cela élimine déjà la moitié des réponses.

#solution
$$
\boxed{\arctan'(x) = \frac{1}{1+x^2}}
$$

**Le tableau des trois réciproques :**

| Fonction | Dérivée | Définie sur |
|---|---|---|
| $\arcsin$ | $\dfrac{1}{\sqrt{1-x^2}}$ | $]-1\,;1[$ |
| $\arccos$ | $\dfrac{-1}{\sqrt{1-x^2}}$ | $]-1\,;1[$ |
| $\arctan$ | $\dfrac{1}{1+x^2}$ | $\mathbb{R}$ |

**Deux repères pour ne pas se tromper :**

- $\arcsin$ et $\arccos$ ont des dérivées **opposées**, ce qui est logique : leur somme vaut la constante $\dfrac{\pi}{2}$, donc la dérivée de cette somme est nulle.
- Le signe moins va avec $\arccos$, qui est **décroissante** — comme le cosinus sur $[0\,;\pi]$.
::

:::

## Les rappels de cours de ce QCM

Ces tiroirs s'ouvrent depuis le bouton **Cours** des questions ratées. Ils sont regroupés ici pour une relecture d'ensemble avant de refaire le QCM.

::extrait-cours{id="qcm-radian" titre="Le radian et la lecture du cercle" source="/cours/a1/remise-a-niveau-maths/trigonometrie/cours#_2-le-radian-ou-pourquoi-π-traîne-partout"}
**Le radian** mesure un angle par la **longueur d'arc** qu'il découpe sur le cercle de rayon $1$. Le tour complet mesurant $2\pi$, la conversion est une simple proportionnalité :

$$
\text{radians} = \text{degrés}\times\frac{\pi}{180} \qquad \text{degrés} = \text{radians}\times\frac{180}{\pi}
$$

| Degrés | $0$ | $30$ | $45$ | $60$ | $90$ | $180$ | $360$ |
|---|---|---|---|---|---|---|---|
| Radians | $0$ | $\dfrac{\pi}{6}$ | $\dfrac{\pi}{4}$ | $\dfrac{\pi}{3}$ | $\dfrac{\pi}{2}$ | $\pi$ | $2\pi$ |

**La lecture du cercle**, base de tout le reste : le point $M$ associé à $\theta$ a pour coordonnées

$$
M\left(\cos\theta\ ;\ \sin\theta\right)
$$

**cos en abscisse, sin en ordonnée.** Les angles se comptent depuis le demi-axe horizontal positif, dans le **sens inverse des aiguilles d'une montre** — un angle négatif tourne donc dans le sens horaire, vers le bas.

⚠️ Les formules de dérivation $\sin' = \cos$ et $\cos' = -\sin$ ne sont vraies **qu'en radians**. C'est toute la raison d'être de cette unité.
::

::extrait-cours{id="qcm-valeurs" titre="Valeurs remarquables, parité, identité fondamentale" source="/cours/a1/remise-a-niveau-maths/trigonometrie/cours#_4-les-valeurs-remarquables"}
| $\theta$ | $0$ | $\dfrac{\pi}{6}$ | $\dfrac{\pi}{4}$ | $\dfrac{\pi}{3}$ | $\dfrac{\pi}{2}$ |
|---|---|---|---|---|---|
| $\cos\theta$ | $1$ | $\dfrac{\sqrt3}{2}$ | $\dfrac{\sqrt2}{2}$ | $\dfrac{1}{2}$ | $0$ |
| $\sin\theta$ | $0$ | $\dfrac{1}{2}$ | $\dfrac{\sqrt2}{2}$ | $\dfrac{\sqrt3}{2}$ | $1$ |

**Comment retenir ce tableau sans l'apprendre.** Les numérateurs des cosinus se lisent $\sqrt4$, $\sqrt3$, $\sqrt2$, $\sqrt1$, $\sqrt0$ sur $2$ — ils **décroissent**. Les sinus font l'inverse. Le repère : plus l'angle est petit, plus le cosinus est grand.

⚠️ La confusion numéro un est $\dfrac{\pi}{6}$ contre $\dfrac{\pi}{3}$ : $\cos\dfrac{\pi}{6} = \dfrac{\sqrt3}{2}$ mais $\cos\dfrac{\pi}{3} = \dfrac12$.

**L'identité fondamentale**, la plus utilisée du programme :

$$
\cos^2\theta+\sin^2\theta = 1 \qquad \text{pour \textbf{tout} } \theta
$$

**Périodicité et parité :**

$$
\cos(\theta+2k\pi) = \cos\theta \qquad \sin(\theta+2k\pi) = \sin\theta
$$

$$
\cos(-\theta) = \cos\theta \ \text{(paire)} \qquad \sin(-\theta) = -\sin\theta \ \text{(impaire)}
$$
::

::extrait-cours{id="qcm-symetries" titre="Les angles associés, ou les quatre symétries" source="/cours/a1/remise-a-niveau-maths/trigonometrie/cours#_6-les-angles-associés-ou-les-quatre-symétries"}
Ces formules ne sont **rien d'autre** que quatre symétries du cercle. Plutôt que de les apprendre, on les relit sur la figure.

| Angle | Symétrie | Cosinus | Sinus |
|---|---|---|---|
| $-\theta$ | axe **horizontal** | $\cos(-\theta) = \cos\theta$ | $\sin(-\theta) = -\sin\theta$ |
| $\pi-\theta$ | axe **vertical** | $\cos(\pi-\theta) = -\cos\theta$ | $\sin(\pi-\theta) = \sin\theta$ |
| $\pi+\theta$ | centre $O$ | $\cos(\pi+\theta) = -\cos\theta$ | $\sin(\pi+\theta) = -\sin\theta$ |
| $\dfrac{\pi}{2}-\theta$ | diagonale $y=x$ | $\cos\!\left(\dfrac{\pi}{2}-\theta\right) = \sin\theta$ | $\sin\!\left(\dfrac{\pi}{2}-\theta\right) = \cos\theta$ |

**Comment retrouver une ligne sans l'avoir apprise.** Le symétrique par rapport à l'axe vertical a la même hauteur mais l'abscisse opposée. Or l'abscisse est le cosinus, la hauteur est le sinus : le cosinus change de signe, le sinus non. La ligne est écrite.

**La quatrième est la plus utile** — les angles complémentaires. C'est elle qui convertit un sinus en cosinus :

$$
\sin\theta = \cos\!\left(\frac{\pi}{2}-\theta\right)
$$

Elle est vraie pour **tout** $\theta$ : on peut y remplacer $\theta$ par n'importe quelle expression, à condition de le faire partout. Avec $\theta = 2x$ : $\sin(2x) = \cos\!\left(\dfrac{\pi}{2}-2x\right)$.

**La vérification qui sauve** : en cas de doute entre deux formules, teste $\theta = 0$ puis $\theta = \dfrac{\pi}{2}$. Deux valeurs bien choisies éliminent presque toujours tout.
::

::extrait-cours{id="qcm-tangente" titre="La tangente" source="/cours/a1/remise-a-niveau-maths/trigonometrie/cours#_7-la-tangente"}
$$
\tan\theta = \frac{\sin\theta}{\cos\theta} \qquad \text{définie pour }\cos\theta\neq 0,\ \text{c'est-à-dire }\theta\neq\frac{\pi}{2}+k\pi
$$

Sur la figure, elle se lit sur la **droite verticale d'abscisse $1$** : on prolonge le rayon $OM$ jusqu'à cette droite, et l'ordonnée du point d'arrivée vaut $\tan\theta$.

**Deux conséquences que la figure rend évidentes :**

- quand $\theta\to\dfrac{\pi}{2}$, le rayon devient **parallèle** à la droite et ne la coupe plus — d'où l'absence de $\tan\dfrac{\pi}{2}$ ;
- le point diamétralement opposé donne **le même** point d'intersection, donc la tangente est $\pi$-périodique, et non $2\pi$-périodique.

$$
\tan(\theta+k\pi) = \tan\theta \qquad \tan(-\theta) = -\tan\theta
$$

| $\theta$ | $0$ | $\dfrac{\pi}{6}$ | $\dfrac{\pi}{4}$ | $\dfrac{\pi}{3}$ | $\dfrac{\pi}{2}$ |
|---|---|---|---|---|---|
| $\tan\theta$ | $0$ | $\dfrac{\sqrt3}{3}$ | $1$ | $\sqrt3$ | non définie |

⚠️ $\tan\dfrac{\pi}{6} = \dfrac{\sqrt3}{3}$ et $\tan\dfrac{\pi}{3} = \sqrt3$ sont **inverses** l'un de l'autre. La tangente valant $1$ en $\dfrac{\pi}{4}$ et croissant ensuite, tout angle supérieur à $\dfrac{\pi}{4}$ a une tangente supérieure à $1$ : c'est le contrôle de bon sens à faire.
::

::extrait-cours{id="qcm-equations" titre="Résoudre une équation trigonométrique" source="/cours/a1/remise-a-niveau-maths/trigonometrie/cours#_8-résoudre-une-équation-trigonométrique"}
**On perd des points toujours pour la même raison : n'écrire qu'une famille de solutions sur les deux.** Un cosinus prend chaque valeur deux fois par tour.

$$
\cos A = \cos B \iff A = B+2k\pi \ \text{ ou }\ A = -B+2k\pi
$$

$$
\sin A = \sin B \iff A = B+2k\pi \ \text{ ou }\ A = \pi-B+2k\pi
$$

$$
\tan A = \tan B \iff A = B+k\pi
$$

**Elles se lisent sur le cercle** : deux angles ont le même cosinus quand ils sont **opposés** (symétrie horizontale), le même sinus quand ils sont **supplémentaires** (symétrie verticale). Pour la tangente, les deux points sont diamétralement opposés, d'où une seule famille de pas $\pi$.

**La marche à suivre, à chaque fois :**

1. **Uniformiser** : s'il y a un sinus d'un côté et un cosinus de l'autre, tout convertir avec $\sin\theta = \cos\!\left(\dfrac{\pi}{2}-\theta\right)$.
2. **Reconnaître** l'angle de référence dans le tableau.
3. **Écrire les deux familles**, sans oublier le $+2k\pi$.
4. **Résoudre chacune** : c'est du premier degré, le $2k\pi$ se traitant comme une constante. ⚠️ En divisant par le coefficient de $x$, diviser **aussi** le $2k\pi$.
5. **Sélectionner** celles de l'intervalle demandé en faisant varier $k$ — la seconde famille exige souvent $k=1$.
6. **Vérifier** un représentant de chaque famille.

**Le contrôle sur $[0\,;2\pi]$** : deux solutions d'un cosinus doivent être symétriques par rapport à l'axe horizontal, donc leur **somme vaut $2\pi$**. Pour un sinus, leur somme vaut $\pi$.
::

::extrait-cours{id="qcm-reciproques" titre="arccos, arcsin, arctan" source="/cours/a1/remise-a-niveau-maths/trigonometrie/cours#_9-les-fonctions-réciproques-arccos-arcsin-arctan"}
$\cos$, $\sin$ et $\tan$ prennent chaque valeur une infinité de fois : elles ne sont pas bijectives. On les **restreint** d'abord à un intervalle de stricte monotonie.

| Fonction | Départ | Arrivée | Dérivée |
|---|---|---|---|
| $\arccos$ | $[-1\,;1]$ | $[0\,;\pi]$ | $\dfrac{-1}{\sqrt{1-x^2}}$ |
| $\arcsin$ | $[-1\,;1]$ | $\left[-\dfrac{\pi}{2}\,;\dfrac{\pi}{2}\right]$ | $\dfrac{1}{\sqrt{1-x^2}}$ |
| $\arctan$ | $\mathbb{R}$ | $\left]-\dfrac{\pi}{2}\,;\dfrac{\pi}{2}\right[$ | $\dfrac{1}{1+x^2}$ |

**La phrase qui les définit toutes** : $\arccos x$ est l'**unique angle de $[0\,;\pi]$** dont le cosinus vaut $x$ — et de même pour les autres, chacun avec son intervalle.

⚠️ **Ne pas confondre départ et arrivée.** On donne un **nombre** entre $-1$ et $1$, on obtient un **angle**.

**Le piège des compositions :**

$$
\cos(\arccos x) = x \ \text{ toujours, pour } x\in[-1\,;1]
$$

$$
\arccos(\cos x) = x \ \textbf{ seulement si } x\in[0\,;\pi]
$$

Sinon, il faut d'abord ramener l'angle dans le bon intervalle **sans changer la valeur** de la fonction, à l'aide des symétries : $\cos(-\theta) = \cos\theta$ et la périodicité pour $\arccos$, $\sin(\pi-\theta) = \sin\theta$ pour $\arcsin$.

**Le réflexe final** : le résultat est-il bien dans l'intervalle d'arrivée ? $\arccos$ n'est jamais négatif ; $\arcsin$ et $\arctan$ ne dépassent jamais $\dfrac{\pi}{2}$ en valeur absolue.
::

::extrait-cours{id="qcm-derivees" titre="Les dérivées trigonométriques" source="/cours/a1/remise-a-niveau-maths/trigonometrie/cours#_10-dérivées"}
$$
\sin' = \cos \qquad \cos' = -\sin \qquad \tan' = 1+\tan^2 = \frac{1}{\cos^2}
$$

**Sous forme composée**, la dérivée de l'intérieur sort en facteur :

$$
\left(\sin u\right)' = u'\cos u \qquad \left(\cos u\right)' = -u'\sin u
$$

Les deux erreurs qui coûtent le plus cher, et qui se cumulent volontiers :

- **oublier le signe moins** du cosinus ;
- **oublier de dériver l'intérieur** : $\left(\cos(3x)\right)' = -3\sin(3x)$, et non $-\sin(3x)$.

**Les réciproques :**

$$
\arcsin'x = \frac{1}{\sqrt{1-x^2}} \qquad \arccos'x = \frac{-1}{\sqrt{1-x^2}} \qquad \arctan'x = \frac{1}{1+x^2}
$$

Deux repères : $\arcsin$ et $\arccos$ ont des dérivées **opposées** — leur somme vaut la constante $\dfrac{\pi}{2}$ — et le signe moins va avec $\arccos$, qui est décroissante. Seule $\arctan$ a une dérivée définie sur $\mathbb{R}$ tout entier, sans racine.

⚠️ Tout ceci **suppose les angles en radians**.
::
