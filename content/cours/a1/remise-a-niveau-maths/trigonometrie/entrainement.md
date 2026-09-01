---
title: Trigonométrie — fiche d'entraînement
description: Quinze questions en cinq paliers, du radian jusqu'aux fonctions réciproques. Chaque question donne un indice avec un exemple similaire traité, une solution détaillée et le rappel de cours correspondant.
type: entrainement
annee: A1
matiere: Remise à niveau en maths
ordre: 2
icone: i-lucide-list-checks
---

::rappel{titre="Comment se servir de cette fiche" icone="i-lucide-compass"}
Cette fiche part de zéro : le palier 1 suppose seulement de savoir qu'un tour fait $360°$. Chaque palier réutilise le précédent, alors mieux vaut ne pas sauter de marche.

Sous chaque question, trois boutons :

- **Indice** — la piste à suivre, sans le résultat. La fenêtre contient aussi un **exemple similaire entièrement traité**, sur d'autres angles : à déplier seulement si la piste n'a pas suffi.
- **Voir la solution** — la correction rédigée, étape par étape.
- **Cours** — un tiroir avec le rappel de cours utile à cette question précise, et le lien vers la section complète du guide.

Un conseil propre à ce chapitre : **garder le cercle du guide ouvert à côté**. Presque toutes les réponses se lisent dessus avant de se calculer.
::

::carte-lien{to="/cours/a1/remise-a-niveau-maths/trigonometrie/cours" titre="Le cours du chapitre" description="Le cercle expliqué de zéro, avec une figure manipulable : radians, valeurs remarquables, angles associés, équations et réciproques" type="cours" meta="10 sections"}
::

:::exercice{titre="Palier 1 — Le radian et le tour du cercle" theme="Convertir, placer un angle, reconnaître son quadrant" badge="★☆☆☆☆" icone="i-lucide-sprout"}
Avant toute formule, une seule chose à acquérir : savoir **où** se trouve un angle sur le cercle. Tout le reste se lit ensuite sur la figure.

::exo-question{label="1." cours="xtr-radian"}
Convertir en radians les angles de $30°$, $135°$ et $210°$. Convertir en degrés les angles de $\dfrac{\pi}{5}$ et $\dfrac{7\pi}{6}$.

#indice
Une seule égalité à retenir, et les deux conversions s'en déduisent :

$$
180° = \pi \ \text{rad}
$$

Pour aller des degrés aux radians, on multiplie donc par $\dfrac{\pi}{180}$ ; pour revenir, on multiplie par $\dfrac{180}{\pi}$. Aucune formule de plus n'est nécessaire.

Le réflexe qui évite les erreurs : simplifier la fraction **avant** de multiplier par $\pi$.

#exemple
Même travail sur $45°$, $300°$, puis sur $\dfrac{2\pi}{3}$.

**$45°$ en radians** — on multiplie par $\dfrac{\pi}{180}$ et on simplifie la fraction :

$$
45\times\frac{\pi}{180} = \frac{45}{180}\pi = \frac{1}{4}\pi = \frac{\pi}{4}
$$

**$300°$ en radians** — même geste :

$$
300\times\frac{\pi}{180} = \frac{300}{180}\pi = \frac{5}{3}\pi = \frac{5\pi}{3}
$$

**$\dfrac{2\pi}{3}$ en degrés** — on multiplie par $\dfrac{180}{\pi}$, et les $\pi$ se simplifient :

$$
\frac{2\pi}{3}\times\frac{180}{\pi} = \frac{2\times 180}{3} = 120°
$$

Le contrôle de bon sens, à faire systématiquement : $\dfrac{2\pi}{3}$ est un peu plus que $\dfrac{\pi}{2}$, donc un peu plus que $90°$. On trouve $120°$ : c'est cohérent.

#solution
**Des degrés vers les radians**, en multipliant par $\dfrac{\pi}{180}$ :

$$
30° = \frac{30}{180}\pi = \boxed{\frac{\pi}{6}}
\qquad
135° = \frac{135}{180}\pi = \boxed{\frac{3\pi}{4}}
\qquad
210° = \frac{210}{180}\pi = \boxed{\frac{7\pi}{6}}
$$

Pour $135°$, la simplification passe par $\dfrac{135}{180} = \dfrac{27}{36} = \dfrac{3}{4}$ ; pour $210°$, par $\dfrac{210}{180} = \dfrac{7}{6}$.

**Des radians vers les degrés**, en multipliant par $\dfrac{180}{\pi}$ :

$$
\frac{\pi}{5} = \frac{180}{5} = \boxed{36°}
\qquad
\frac{7\pi}{6} = \frac{7\times 180}{6} = \boxed{210°}
$$

La dernière ligne confirme la troisième : les deux conversions sont bien réciproques l'une de l'autre.
::

::exo-question{label="2." cours="xtr-radian"}
Pour chacun des angles $\dfrac{2\pi}{3}$, $-\dfrac{\pi}{4}$ et $\dfrac{5\pi}{4}$, dire dans quel quadrant se trouve le point du cercle associé, puis donner le **signe** de son cosinus et de son sinus.

#indice
Le cercle est coupé en quatre quadrants par les deux axes. Les frontières sont $0$, $\dfrac{\pi}{2}$, $\pi$ et $\dfrac{3\pi}{2}$ — ou, pour un angle négatif, on tourne dans le sens **des aiguilles d'une montre**.

Il suffit alors de situer l'angle entre deux de ces bornes. Le signe se lit ensuite directement : le **cosinus est l'abscisse** du point, le **sinus est son ordonnée**. À gauche de l'axe vertical, le cosinus est négatif ; en dessous de l'axe horizontal, le sinus est négatif.

#exemple
Même travail sur $\dfrac{3\pi}{4}$, $-\dfrac{2\pi}{3}$ et $\dfrac{11\pi}{6}$.

**$\dfrac{3\pi}{4}$** — on compare à $\dfrac{\pi}{2} = \dfrac{2\pi}{4}$ et à $\pi = \dfrac{4\pi}{4}$ :

$$
\frac{2\pi}{4} < \frac{3\pi}{4} < \frac{4\pi}{4}
$$

L'angle est donc entre $\dfrac{\pi}{2}$ et $\pi$ : **deuxième quadrant**, en haut à gauche. Le point y a une abscisse négative et une ordonnée positive, donc $\cos < 0$ et $\sin > 0$.

**$-\dfrac{2\pi}{3}$** — l'angle est négatif : on tourne vers le bas. Comme $-\pi < -\dfrac{2\pi}{3} < -\dfrac{\pi}{2}$, on arrive en bas à gauche : **troisième quadrant**, avec $\cos < 0$ et $\sin < 0$.

**$\dfrac{11\pi}{6}$** — c'est presque un tour complet ($2\pi = \dfrac{12\pi}{6}$), il manque $\dfrac{\pi}{6}$. On est donc juste en dessous de l'axe des abscisses, à droite : **quatrième quadrant**, avec $\cos > 0$ et $\sin < 0$.

#solution
**$\dfrac{2\pi}{3}$** : comme $\dfrac{\pi}{2} = \dfrac{3\pi}{6}$ et $\dfrac{2\pi}{3} = \dfrac{4\pi}{6}$, on a $\dfrac{\pi}{2} < \dfrac{2\pi}{3} < \pi$. C'est le **deuxième quadrant** (en haut à gauche) :

$$
\boxed{\cos\frac{2\pi}{3} < 0 \quad\text{et}\quad \sin\frac{2\pi}{3} > 0}
$$

**$-\dfrac{\pi}{4}$** : angle négatif compris entre $-\dfrac{\pi}{2}$ et $0$, donc **quatrième quadrant** (en bas à droite) :

$$
\boxed{\cos\left(-\frac{\pi}{4}\right) > 0 \quad\text{et}\quad \sin\left(-\frac{\pi}{4}\right) < 0}
$$

**$\dfrac{5\pi}{4}$** : compris entre $\pi = \dfrac{4\pi}{4}$ et $\dfrac{3\pi}{2} = \dfrac{6\pi}{4}$, donc **troisième quadrant** (en bas à gauche) :

$$
\boxed{\cos\frac{5\pi}{4} < 0 \quad\text{et}\quad \sin\frac{5\pi}{4} < 0}
$$

Ce réflexe resservira à chaque palier : c'est le couple des deux signes qui désigne un quadrant, et un seul.
::

::exo-question{label="3." cours="xtr-valeurs"}
Donner les valeurs exactes de $\cos\dfrac{\pi}{6}$, $\sin\dfrac{\pi}{4}$, $\cos\dfrac{\pi}{3}$ et $\sin\dfrac{\pi}{2}$.

#indice
Trois angles seulement sont à connaître par cœur — $\dfrac{\pi}{6}$, $\dfrac{\pi}{4}$, $\dfrac{\pi}{3}$ — plus les cas évidents $0$ et $\dfrac{\pi}{2}$.

Le moyen mnémotechnique le plus sûr : écrire les cosinus dans l'ordre croissant de l'angle sous la forme $\dfrac{\sqrt{n}}{2}$, avec $n = 3, 2, 1$. Les sinus suivent la liste **à l'envers**, puisque le sinus croît quand le cosinus décroît.

#exemple
On reconstitue toute la ligne, une fois pour toutes.

Pour $\dfrac{\pi}{6}$, $\dfrac{\pi}{4}$ et $\dfrac{\pi}{3}$, les cosinus s'écrivent tous $\dfrac{\sqrt n}{2}$ avec $n$ qui **descend** de $3$ à $1$ :

$$
\cos\frac{\pi}{6} = \frac{\sqrt3}{2}, \qquad
\cos\frac{\pi}{4} = \frac{\sqrt2}{2}, \qquad
\cos\frac{\pi}{3} = \frac{\sqrt1}{2} = \frac12
$$

Les sinus prennent la même liste en sens inverse, avec $n$ qui **monte** de $1$ à $3$ :

$$
\sin\frac{\pi}{6} = \frac12, \qquad
\sin\frac{\pi}{4} = \frac{\sqrt2}{2}, \qquad
\sin\frac{\pi}{3} = \frac{\sqrt3}{2}
$$

**Deux contrôles gratuits.** D'abord $\dfrac{\pi}{4}$ est sur la diagonale, donc son cosinus et son sinus sont égaux : la ligne du milieu est cohérente. Ensuite, l'identité $\cos^2+\sin^2 = 1$ doit tenir ; pour $\dfrac{\pi}{6}$ :

$$
\left(\frac{\sqrt3}{2}\right)^2+\left(\frac12\right)^2 = \frac34+\frac14 = 1
$$

#solution
On lit la ligne des valeurs remarquables :

$$
\boxed{\cos\frac{\pi}{6} = \frac{\sqrt3}{2}}
\qquad
\boxed{\sin\frac{\pi}{4} = \frac{\sqrt2}{2}}
\qquad
\boxed{\cos\frac{\pi}{3} = \frac12}
\qquad
\boxed{\sin\frac{\pi}{2} = 1}
$$

Les deux premières se retrouvent sur le cercle : $\dfrac{\pi}{6}$ est un petit angle, son point est donc très à droite — abscisse proche de $1$, et $\dfrac{\sqrt3}{2}\approx 0{,}87$ convient. Pour $\dfrac{\pi}{2}$, le point est tout en haut du cercle, en $(0\,;1)$ : son ordonnée vaut bien $1$, et au passage $\cos\dfrac{\pi}{2} = 0$.
::
:::

:::exercice{titre="Palier 2 — Ramener un angle dans le tour" theme="Périodicité, parité, et lecture d'un angle quelconque" badge="★★☆☆☆" icone="i-lucide-rotate-cw"}
Un angle plus grand qu'un tour, ou négatif, ne demande aucun calcul nouveau : il suffit de le **ramener** sur le cercle, puis de lire.

::exo-question{label="1." cours="xtr-periodicite"}
Simplifier $\cos(x+2\pi)$, $\sin(x-4\pi)$, $\cos(-x)$ et $\sin(-x)$.

#indice
Deux propriétés, et rien d'autre.

La première est la **périodicité** : ajouter un tour complet ramène au même point du cercle, donc ne change ni le cosinus ni le sinus. C'est vrai pour un tour comme pour un nombre entier de tours.

La seconde est la **parité** : remplacer $x$ par $-x$ revient à passer au point symétrique par rapport à l'axe horizontal. L'abscisse ne bouge pas, l'ordonnée change de signe. Reste à traduire cela sur $\cos$ et $\sin$.

#exemple
Même travail sur $\sin(x+6\pi)$, $\cos(x-2\pi)$ et $\cos(-x)+\sin(-x)$.

**$\sin(x+6\pi)$** — comme $6\pi = 3\times 2\pi$, on ajoute trois tours complets. Le point d'arrivée est exactement le même :

$$
\sin(x+6\pi) = \sin x
$$

**$\cos(x-2\pi)$** — on retire un tour, ce qui ne change rien non plus :

$$
\cos(x-2\pi) = \cos x
$$

**$\cos(-x)+\sin(-x)$** — le point d'angle $-x$ est le symétrique de celui d'angle $x$ par rapport à l'axe des abscisses. Son abscisse est inchangée, son ordonnée est opposée, donc $\cos(-x) = \cos x$ et $\sin(-x) = -\sin x$ :

$$
\cos(-x)+\sin(-x) = \cos x-\sin x
$$

La formule à retenir sous forme de phrase : **le cosinus est pair, le sinus est impair.**

#solution
**Périodicité** — ajouter ou retirer un nombre entier de tours ne déplace pas le point :

$$
\boxed{\cos(x+2\pi) = \cos x}
\qquad
\boxed{\sin(x-4\pi) = \sin x}
$$

pour la seconde, $4\pi = 2\times 2\pi$, soit deux tours retirés.

**Parité** — le point d'angle $-x$ est le symétrique du point d'angle $x$ par rapport à l'axe des abscisses : même abscisse, ordonnée opposée. Or l'abscisse est le cosinus et l'ordonnée est le sinus, d'où

$$
\boxed{\cos(-x) = \cos x}
\qquad
\boxed{\sin(-x) = -\sin x}
$$

Ces quatre égalités servent à chaque fois qu'un angle sort de l'intervalle $[0\,;2\pi[$ : on commence par s'y ramener, et seulement ensuite on lit la valeur.
::

::exo-question{label="2." cours="xtr-periodicite"}
Calculer les valeurs exactes de $\cos\dfrac{17\pi}{6}$ et de $\sin\left(-\dfrac{11\pi}{4}\right)$.

#indice
Aucune de ces deux valeurs n'est dans la table : il faut d'abord **ramener l'angle dans un tour**, en lui retirant ou en lui ajoutant un multiple entier de $2\pi$.

Le calcul pratique : écrire $2\pi$ avec le même dénominateur que l'angle. Ici $2\pi = \dfrac{12\pi}{6}$ pour le premier, et $2\pi = \dfrac{8\pi}{4}$ pour le second. On retranche alors autant de tours que possible.

Pour l'angle négatif, deux chemins mènent au but : ajouter des tours jusqu'à devenir positif, ou commencer par utiliser l'imparité du sinus. Les deux donnent le même résultat.

#exemple
Même travail sur $\cos\dfrac{13\pi}{3}$ et $\sin\left(-\dfrac{7\pi}{6}\right)$.

**$\cos\dfrac{13\pi}{3}$** — on écrit $2\pi = \dfrac{6\pi}{3}$, et on retire deux tours :

$$
\frac{13\pi}{3}-2\times\frac{6\pi}{3} = \frac{13\pi-12\pi}{3} = \frac{\pi}{3}
$$

Donc $\cos\dfrac{13\pi}{3} = \cos\dfrac{\pi}{3} = \dfrac12$.

**$\sin\left(-\dfrac{7\pi}{6}\right)$** — on commence par l'imparité, qui remet l'angle en positif :

$$
\sin\left(-\frac{7\pi}{6}\right) = -\sin\frac{7\pi}{6}
$$

Il reste à lire $\sin\dfrac{7\pi}{6}$. Comme $\dfrac{7\pi}{6} = \pi+\dfrac{\pi}{6}$, le point est dans le troisième quadrant, symétrique de celui de $\dfrac{\pi}{6}$ par rapport à l'origine : son ordonnée est l'opposée, soit $-\dfrac12$. Finalement

$$
\sin\left(-\frac{7\pi}{6}\right) = -\left(-\frac12\right) = \frac12
$$

#solution
**$\cos\dfrac{17\pi}{6}$** — on écrit $2\pi = \dfrac{12\pi}{6}$ et on retire un tour :

$$
\frac{17\pi}{6}-\frac{12\pi}{6} = \frac{5\pi}{6}
$$

L'angle $\dfrac{5\pi}{6} = \pi-\dfrac{\pi}{6}$ place le point dans le deuxième quadrant, symétrique de celui de $\dfrac{\pi}{6}$ par rapport à l'axe vertical : l'abscisse change de signe.

$$
\cos\frac{17\pi}{6} = \cos\frac{5\pi}{6} = -\cos\frac{\pi}{6} = \boxed{-\frac{\sqrt3}{2}}
$$

**$\sin\left(-\dfrac{11\pi}{4}\right)$** — on ajoute un tour, écrit $2\pi = \dfrac{8\pi}{4}$ :

$$
-\frac{11\pi}{4}+\frac{8\pi}{4} = -\frac{3\pi}{4}
$$

Puis l'imparité du sinus ramène à un angle positif :

$$
\sin\left(-\frac{3\pi}{4}\right) = -\sin\frac{3\pi}{4} = -\sin\left(\pi-\frac{\pi}{4}\right) = -\sin\frac{\pi}{4} = \boxed{-\frac{\sqrt2}{2}}
$$

**Contrôle de cohérence** : $-\dfrac{3\pi}{4}$ est dans le troisième quadrant, où le sinus est négatif. Le résultat l'est bien.
::

::exo-question{label="3." cours="xtr-tangente"}
Donner $\tan\dfrac{\pi}{4}$, $\tan\dfrac{\pi}{3}$ et $\tan\left(-\dfrac{\pi}{6}\right)$. Pour quelles valeurs de $x$ la tangente n'est-elle pas définie ?

#indice
La tangente n'est pas une nouvelle fonction à apprendre : c'est un **quotient** de deux valeurs déjà connues,

$$
\tan x = \frac{\sin x}{\cos x}
$$

Les trois calculs demandés se ramènent donc à des valeurs de la table, à simplifier. Pense à rationaliser le résultat quand un $\sqrt3$ traîne au dénominateur.

Pour la dernière question, il n'y a rien à calculer : une fraction n'existe pas quand son dénominateur s'annule. Reste à dire **où** le cosinus s'annule sur le cercle.

#exemple
Même travail sur $\tan\dfrac{\pi}{6}$ et $\tan\dfrac{2\pi}{3}$.

**$\tan\dfrac{\pi}{6}$** — on divise les deux valeurs de la table :

$$
\tan\frac{\pi}{6} = \frac{\sin\frac{\pi}{6}}{\cos\frac{\pi}{6}} = \frac{\frac12}{\frac{\sqrt3}{2}} = \frac12\times\frac{2}{\sqrt3} = \frac{1}{\sqrt3}
$$

On rationalise en multipliant haut et bas par $\sqrt3$ :

$$
\frac{1}{\sqrt3} = \frac{\sqrt3}{3}
$$

**$\tan\dfrac{2\pi}{3}$** — le point est dans le deuxième quadrant, où $\cos\dfrac{2\pi}{3} = -\dfrac12$ et $\sin\dfrac{2\pi}{3} = \dfrac{\sqrt3}{2}$ :

$$
\tan\frac{2\pi}{3} = \frac{\frac{\sqrt3}{2}}{-\frac12} = -\sqrt3
$$

Le signe négatif était prévisible : dans ce quadrant, le sinus est positif et le cosinus négatif, donc leur quotient est négatif.

#solution
**$\tan\dfrac{\pi}{4}$** — cosinus et sinus y sont égaux, le quotient vaut donc $1$ :

$$
\tan\frac{\pi}{4} = \frac{\frac{\sqrt2}{2}}{\frac{\sqrt2}{2}} = \boxed{1}
$$

**$\tan\dfrac{\pi}{3}$** :

$$
\tan\frac{\pi}{3} = \frac{\frac{\sqrt3}{2}}{\frac12} = \sqrt3 \qquad\text{soit}\qquad \boxed{\tan\frac{\pi}{3} = \sqrt3}
$$

**$\tan\left(-\dfrac{\pi}{6}\right)$** — le cosinus est pair et le sinus impair, donc la tangente est **impaire** :

$$
\tan\left(-\frac{\pi}{6}\right) = -\tan\frac{\pi}{6} = -\frac{1}{\sqrt3} = \boxed{-\frac{\sqrt3}{3}}
$$

**Où la tangente n'existe pas.** Le quotient perd son sens quand $\cos x = 0$, c'est-à-dire aux deux points du cercle situés sur l'axe vertical : $x = \dfrac{\pi}{2}$ et $x = -\dfrac{\pi}{2}$, puis tous ceux qui s'en déduisent par un nombre entier de demi-tours.

$$
\boxed{\tan x \text{ est définie pour } x \neq \frac{\pi}{2}+k\pi, \quad k\in\mathbb{Z}}
$$
::
:::

:::exercice{titre="Palier 3 — Les angles associés" theme="Les quatre symétries du cercle, et comment s'en servir" badge="★★★☆☆" icone="i-lucide-flip-horizontal"}
Les formules d'angles associés ne s'apprennent pas par cœur : elles se **lisent** sur la figure. Chaque ligne correspond à une symétrie, et il suffit de suivre ce que deviennent l'abscisse et l'ordonnée du point.

::exo-question{label="1." cours="xtr-associes"}
Exprimer $\cos(\pi-x)$, $\sin(\pi-x)$, $\cos(\pi+x)$ et $\sin(\pi+x)$ en fonction de $\cos x$ et $\sin x$.

#indice
Ne cherche pas à retenir les quatre lignes : place le point d'angle $x$ sur le cercle, puis demande-toi **où atterrit** le point d'angle $\pi-x$, puis celui d'angle $\pi+x$.

- $\pi-x$ : c'est le symétrique par rapport à l'**axe vertical**. L'ordonnée est conservée, l'abscisse change de signe.
- $\pi+x$ : c'est le demi-tour, donc le symétrique par rapport à l'**origine**. Les deux coordonnées changent de signe.

Il ne reste qu'à traduire : abscisse $=\cos$, ordonnée $=\sin$.

#exemple
Même raisonnement pour les deux autres symétries, $-x$ et $\dfrac{\pi}{2}-x$.

**Le cas $-x$** — symétrie par rapport à l'axe **horizontal**. L'abscisse est conservée, l'ordonnée est opposée :

$$
\cos(-x) = \cos x \qquad \sin(-x) = -\sin x
$$

**Le cas $\dfrac{\pi}{2}-x$** — symétrie par rapport à la **première bissectrice**, la droite d'équation $y = x$. Cette symétrie **échange** l'abscisse et l'ordonnée :

$$
\cos\left(\frac{\pi}{2}-x\right) = \sin x \qquad \sin\left(\frac{\pi}{2}-x\right) = \cos x
$$

C'est la formule dite « de conversion » : elle permet de transformer un sinus en cosinus, ce qui servira au palier 4 pour résoudre une équation mêlant les deux.

**Le contrôle qui ne trompe pas** : tester sur une valeur connue. Avec $x = \dfrac{\pi}{6}$, la dernière ligne annonce $\sin\left(\dfrac{\pi}{2}-\dfrac{\pi}{6}\right) = \cos\dfrac{\pi}{6}$, c'est-à-dire $\sin\dfrac{\pi}{3} = \dfrac{\sqrt3}{2}$. C'est exact.

#solution
**Symétrie par rapport à l'axe vertical — l'angle $\pi-x$.** Le point d'angle $\pi-x$ a la même hauteur que celui d'angle $x$, mais se trouve de l'autre côté de l'axe des ordonnées. Son abscisse est donc opposée, son ordonnée inchangée :

$$
\boxed{\cos(\pi-x) = -\cos x} \qquad \boxed{\sin(\pi-x) = \sin x}
$$

**Symétrie par rapport à l'origine — l'angle $\pi+x$.** Ajouter $\pi$, c'est faire un demi-tour : le point part à l'exact opposé. Les deux coordonnées changent de signe :

$$
\boxed{\cos(\pi+x) = -\cos x} \qquad \boxed{\sin(\pi+x) = -\sin x}
$$

**Vérification sur une valeur connue**, avec $x = \dfrac{\pi}{3}$. La première ligne annonce $\cos\dfrac{2\pi}{3} = -\cos\dfrac{\pi}{3} = -\dfrac12$ : c'est bien la valeur attendue dans le deuxième quadrant, où le cosinus est négatif.
::

::exo-question{label="2." cours="xtr-associes"}
Simplifier l'expression

$$
A = \cos(\pi-x)+\sin\left(\frac{\pi}{2}+x\right)+\cos(-x)+\sin(\pi+x)
$$

#indice
Chaque terme se traite **séparément**, avec la symétrie qui lui correspond, avant toute tentative de regroupement. Écris les quatre transformations les unes sous les autres, puis additionne.

Le seul terme qui n'a pas encore été rencontré est $\sin\left(\dfrac{\pi}{2}+x\right)$. Deux façons de l'obtenir : le lire directement sur le cercle — c'est la rotation d'un quart de tour — ou passer par $\dfrac{\pi}{2}+x = \dfrac{\pi}{2}-(-x)$ et réutiliser la formule de conversion, puis la parité.

#exemple
Même travail sur $B = \sin(\pi-x)+\cos\left(\dfrac{\pi}{2}-x\right)-\sin(-x)$.

On traite les trois termes un par un :

$$
\sin(\pi-x) = \sin x
\qquad
\cos\left(\frac{\pi}{2}-x\right) = \sin x
\qquad
\sin(-x) = -\sin x
$$

Attention au signe moins de l'énoncé devant le troisième terme : il porte sur $\sin(-x)$, qui vaut déjà $-\sin x$. Les deux signes se compensent :

$$
-\sin(-x) = -(-\sin x) = +\sin x
$$

En rassemblant :

$$
B = \sin x+\sin x+\sin x = 3\sin x
$$

**Le contrôle** : avec $x = \dfrac{\pi}{2}$, l'énoncé donne $\sin\dfrac{\pi}{2}+\cos 0-\sin\left(-\dfrac{\pi}{2}\right) = 1+1+1 = 3$, et la forme simplifiée donne $3\sin\dfrac{\pi}{2} = 3$. Les deux coïncident.

#solution
On transforme les quatre termes séparément.

$$
\cos(\pi-x) = -\cos x
$$

$$
\sin\left(\frac{\pi}{2}+x\right) = \cos x
$$

Pour ce deuxième terme, on écrit $\dfrac{\pi}{2}+x = \dfrac{\pi}{2}-(-x)$, puis on applique la conversion et la parité du cosinus :

$$
\sin\left(\frac{\pi}{2}-(-x)\right) = \cos(-x) = \cos x
$$

Les deux derniers sont directs :

$$
\cos(-x) = \cos x \qquad\text{et}\qquad \sin(\pi+x) = -\sin x
$$

En rassemblant :

$$
A = -\cos x+\cos x+\cos x-\sin x
$$

Les deux premiers termes s'annulent, et il reste

$$
\boxed{A = \cos x-\sin x}
$$

**Vérification** avec $x = 0$ : l'énoncé donne $\cos\pi+\sin\dfrac{\pi}{2}+\cos 0+\sin\pi = -1+1+1+0 = 1$, et la forme simplifiée donne $\cos 0-\sin 0 = 1$. ✓
::

::exo-question{label="3." cours="xtr-associes"}
Sans calculatrice, donner les valeurs exactes de $\cos\dfrac{5\pi}{6}$, $\sin\dfrac{7\pi}{4}$ et $\cos\dfrac{4\pi}{3}$.

#indice
Aucun de ces trois angles n'est dans la table, mais chacun est le **symétrique** d'un angle qui, lui, y est. La méthode tient en deux temps :

1. écrire l'angle sous la forme $\pi-\alpha$, $\pi+\alpha$ ou $2\pi-\alpha$, où $\alpha$ vaut $\dfrac{\pi}{6}$, $\dfrac{\pi}{4}$ ou $\dfrac{\pi}{3}$ ;
2. appliquer la formule d'angle associé correspondante.

Le contrôle final se fait sur le **signe** : le quadrant où se trouve l'angle impose le signe du résultat, indépendamment de tout calcul.

#exemple
Même travail sur $\sin\dfrac{2\pi}{3}$ et $\cos\dfrac{7\pi}{6}$.

**$\sin\dfrac{2\pi}{3}$** — on cherche l'écriture qui fait apparaître un angle de la table :

$$
\frac{2\pi}{3} = \pi-\frac{\pi}{3}
$$

C'est la symétrie par rapport à l'axe vertical, qui **conserve** le sinus :

$$
\sin\frac{2\pi}{3} = \sin\frac{\pi}{3} = \frac{\sqrt3}{2}
$$

Cohérent : l'angle est dans le deuxième quadrant, où le sinus est positif.

**$\cos\dfrac{7\pi}{6}$** — cette fois :

$$
\frac{7\pi}{6} = \pi+\frac{\pi}{6}
$$

C'est le demi-tour, qui **change le signe** du cosinus :

$$
\cos\frac{7\pi}{6} = -\cos\frac{\pi}{6} = -\frac{\sqrt3}{2}
$$

Cohérent encore : troisième quadrant, cosinus négatif.

#solution
**$\cos\dfrac{5\pi}{6}$** — on écrit $\dfrac{5\pi}{6} = \pi-\dfrac{\pi}{6}$, symétrie par rapport à l'axe vertical, qui oppose le cosinus :

$$
\cos\frac{5\pi}{6} = -\cos\frac{\pi}{6} = \boxed{-\frac{\sqrt3}{2}}
$$

**$\sin\dfrac{7\pi}{4}$** — on écrit $\dfrac{7\pi}{4} = 2\pi-\dfrac{\pi}{4}$. Retirer un angle à un tour complet revient à prendre l'opposé, et le sinus est impair :

$$
\sin\frac{7\pi}{4} = \sin\left(-\frac{\pi}{4}\right) = -\sin\frac{\pi}{4} = \boxed{-\frac{\sqrt2}{2}}
$$

**$\cos\dfrac{4\pi}{3}$** — on écrit $\dfrac{4\pi}{3} = \pi+\dfrac{\pi}{3}$, le demi-tour, qui oppose le cosinus :

$$
\cos\frac{4\pi}{3} = -\cos\frac{\pi}{3} = \boxed{-\frac12}
$$

**Contrôle des trois signes par les quadrants** : $\dfrac{5\pi}{6}$ est en haut à gauche (cosinus négatif ✓), $\dfrac{7\pi}{4}$ en bas à droite (sinus négatif ✓), $\dfrac{4\pi}{3}$ en bas à gauche (cosinus négatif ✓).
::
:::

:::exercice{titre="Palier 4 — Résoudre une équation trigonométrique" theme="Les deux familles de solutions, et ce qu'il faut en garder" badge="★★★★☆" icone="i-lucide-equal"}
C'est le point du chapitre qui coûte le plus de points aux examens, pour une raison simple : une équation trigonométrique a **une infinité** de solutions, réparties en **deux familles**, et on en oublie systématiquement une.

::exo-question{label="1." cours="xtr-equations"}
Résoudre dans $\mathbb{R}$ l'équation $\cos x = \dfrac12$, puis donner les solutions appartenant à $[0\,;2\pi[$.

#indice
Le point de départ est toujours le même : trouver **un** angle $\alpha$ dont le cosinus vaut la valeur demandée. Ici, $\alpha$ est dans la table.

Ensuite vient la partie qu'on oublie. Sur le cercle, l'équation $\cos x = \dfrac12$ demande les points d'**abscisse** $\dfrac12$ : la droite verticale correspondante coupe le cercle en **deux** points, symétriques par rapport à l'axe horizontal. D'où deux familles de solutions, et non une.

$$
\cos x = \cos\alpha \iff x = \alpha+2k\pi \quad\text{ou}\quad x = -\alpha+2k\pi, \quad k\in\mathbb{Z}
$$

Pour la seconde question, il ne reste qu'à faire varier $k$ et à garder ce qui tombe dans l'intervalle.

#exemple
Même travail sur $\cos x = -\dfrac{\sqrt2}{2}$, avec les solutions de $[0\,;2\pi[$.

**Trouver un angle.** On sait que $\cos\dfrac{\pi}{4} = \dfrac{\sqrt2}{2}$ ; comme la valeur cherchée est négative, on prend le symétrique par rapport à l'axe vertical :

$$
\cos\frac{3\pi}{4} = -\cos\frac{\pi}{4} = -\frac{\sqrt2}{2}
$$

On pose donc $\alpha = \dfrac{3\pi}{4}$.

**Les deux familles** :

$$
x = \frac{3\pi}{4}+2k\pi \qquad\text{ou}\qquad x = -\frac{3\pi}{4}+2k\pi, \quad k\in\mathbb{Z}
$$

**Le tri dans $[0\,;2\pi[$.** La première famille donne $\dfrac{3\pi}{4}$ pour $k = 0$ ; pour $k = 1$ on dépasse $2\pi$. La seconde donne un nombre négatif pour $k = 0$, donc on prend $k = 1$ :

$$
-\frac{3\pi}{4}+2\pi = \frac{-3\pi+8\pi}{4} = \frac{5\pi}{4}
$$

D'où $S = \left\{\dfrac{3\pi}{4}\,;\dfrac{5\pi}{4}\right\}$ — deux solutions, comme les deux points d'intersection annoncés.

#solution
**Un angle de référence.** La table donne directement

$$
\cos\frac{\pi}{3} = \frac12
$$

**Les deux familles.** La droite verticale d'abscisse $\dfrac12$ coupe le cercle en deux points symétriques par rapport à l'axe horizontal, d'angles $\dfrac{\pi}{3}$ et $-\dfrac{\pi}{3}$ :

$$
\boxed{x = \frac{\pi}{3}+2k\pi \quad\text{ou}\quad x = -\frac{\pi}{3}+2k\pi, \quad k\in\mathbb{Z}}
$$

**Les solutions de $[0\,;2\pi[$.** Première famille : $k = 0$ donne $\dfrac{\pi}{3}$, et $k = 1$ donne $\dfrac{\pi}{3}+2\pi > 2\pi$, trop grand. Seconde famille : $k = 0$ donne $-\dfrac{\pi}{3}$, négatif, donc on prend $k = 1$ :

$$
-\frac{\pi}{3}+2\pi = \frac{-\pi+6\pi}{3} = \frac{5\pi}{3}
$$

$$
\boxed{S_{[0;2\pi[} = \left\{\frac{\pi}{3}\,;\frac{5\pi}{3}\right\}}
$$

Deux solutions dans un tour : c'est exactement le nombre de points d'intersection lus sur la figure. Une seule solution trouvée aurait été le signe qu'une famille a été oubliée.
::

::exo-question{label="2." cours="xtr-equations"}
Résoudre dans $\mathbb{R}$ l'équation $\sin(2x) = \dfrac{\sqrt3}{2}$.

#indice
Deux différences avec la question précédente, et une seule vraie difficulté.

D'abord, il s'agit d'un **sinus** : les solutions se lisent sur une droite **horizontale**, qui coupe le cercle en deux points symétriques par rapport à l'axe **vertical**. La seconde famille est donc en $\pi-\alpha$, et non en $-\alpha$ :

$$
\sin X = \sin\alpha \iff X = \alpha+2k\pi \quad\text{ou}\quad X = \pi-\alpha+2k\pi
$$

Ensuite, l'inconnue est $2x$ et non $x$. Le bon réflexe est de résoudre **d'abord** en $X = 2x$, puis de diviser **toute la ligne** par $2$ — le $2k\pi$ compris. C'est là que se perdent les points : $\dfrac{2k\pi}{2} = k\pi$, pas $2k\pi$.

#exemple
Même travail sur $\sin(3x) = \dfrac{\sqrt2}{2}$.

**Un angle de référence** : $\sin\dfrac{\pi}{4} = \dfrac{\sqrt2}{2}$, donc $\alpha = \dfrac{\pi}{4}$.

**On résout d'abord en $X = 3x$**, avec les deux familles du sinus :

$$
3x = \frac{\pi}{4}+2k\pi \qquad\text{ou}\qquad 3x = \pi-\frac{\pi}{4}+2k\pi = \frac{3\pi}{4}+2k\pi
$$

**On divise ensuite par $3$, terme à terme** :

$$
x = \frac{\pi}{12}+\frac{2k\pi}{3} \qquad\text{ou}\qquad x = \frac{\pi}{4}+\frac{2k\pi}{3}, \quad k\in\mathbb{Z}
$$

Le pas entre deux solutions consécutives d'une même famille n'est plus $2\pi$ mais $\dfrac{2\pi}{3}$ : c'est normal, la fonction $x\mapsto\sin(3x)$ est trois fois plus rapide, donc trois fois plus de solutions par tour.

#solution
**Un angle de référence.** La table donne

$$
\sin\frac{\pi}{3} = \frac{\sqrt3}{2}
$$

**On résout en $X = 2x$.** La droite horizontale d'ordonnée $\dfrac{\sqrt3}{2}$ coupe le cercle en deux points symétriques par rapport à l'axe vertical, d'angles $\dfrac{\pi}{3}$ et $\pi-\dfrac{\pi}{3} = \dfrac{2\pi}{3}$ :

$$
2x = \frac{\pi}{3}+2k\pi \qquad\text{ou}\qquad 2x = \frac{2\pi}{3}+2k\pi, \quad k\in\mathbb{Z}
$$

**On divise par $2$**, sans oublier le terme en $2k\pi$ :

$$
\boxed{x = \frac{\pi}{6}+k\pi \quad\text{ou}\quad x = \frac{\pi}{3}+k\pi, \quad k\in\mathbb{Z}}
$$

**Vérification** sur la première solution, avec $k = 0$ : $\sin\left(2\times\dfrac{\pi}{6}\right) = \sin\dfrac{\pi}{3} = \dfrac{\sqrt3}{2}$. ✓ Et sur la seconde : $\sin\left(2\times\dfrac{\pi}{3}\right) = \sin\dfrac{2\pi}{3} = \dfrac{\sqrt3}{2}$. ✓
::

::exo-question{label="3." cours="xtr-equations"}
Résoudre dans $\mathbb{R}$ l'équation $\sin x = \cos(2x)$.

#indice
Tant que l'équation mêle un sinus et un cosinus, aucune des deux formules de résolution ne s'applique : il faut d'abord **tout écrire avec la même fonction**.

C'est le rôle de la formule de conversion vue au palier 3 :

$$
\sin x = \cos\left(\frac{\pi}{2}-x\right)
$$

Une fois les deux membres sous forme de cosinus, on est ramené à une équation $\cos A = \cos B$, dont les deux familles sont

$$
A = B+2k\pi \quad\text{ou}\quad A = -B+2k\pi
$$

Chacune donne une équation du premier degré en $x$. Attention : dans la seconde, les $x$ des deux membres ne se regroupent pas comme dans la première.

#exemple
Même méthode sur $\cos x = \sin(3x)$.

**Convertir.** On transforme le sinus en cosinus :

$$
\sin(3x) = \cos\left(\frac{\pi}{2}-3x\right)
$$

L'équation devient $\cos x = \cos\left(\dfrac{\pi}{2}-3x\right)$.

**Première famille** : les deux angles sont égaux modulo $2\pi$.

$$
x = \frac{\pi}{2}-3x+2k\pi \iff 4x = \frac{\pi}{2}+2k\pi \iff x = \frac{\pi}{8}+\frac{k\pi}{2}
$$

**Seconde famille** : les deux angles sont opposés modulo $2\pi$.

$$
x = -\left(\frac{\pi}{2}-3x\right)+2k\pi \iff x = -\frac{\pi}{2}+3x+2k\pi
$$

$$
\iff -2x = -\frac{\pi}{2}+2k\pi \iff x = \frac{\pi}{4}-k\pi
$$

Comme $k$ parcourt tout $\mathbb{Z}$, écrire $-k\pi$ ou $+k\pi$ revient au même : on garde $x = \dfrac{\pi}{4}+k\pi$.

#solution
**Convertir le sinus en cosinus.**

$$
\sin x = \cos\left(\frac{\pi}{2}-x\right)
$$

L'équation s'écrit donc

$$
\cos\left(\frac{\pi}{2}-x\right) = \cos(2x)
$$

**Première famille — les angles sont égaux modulo $2\pi$.**

$$
\frac{\pi}{2}-x = 2x+2k\pi \iff \frac{\pi}{2} = 3x+2k\pi \iff x = \frac{\pi}{6}-\frac{2k\pi}{3}
$$

Comme $k$ décrit $\mathbb{Z}$, le signe devant $\dfrac{2k\pi}{3}$ est sans importance :

$$
x = \frac{\pi}{6}+\frac{2k\pi}{3}, \quad k\in\mathbb{Z}
$$

**Seconde famille — les angles sont opposés modulo $2\pi$.**

$$
\frac{\pi}{2}-x = -2x+2k\pi \iff \frac{\pi}{2}+x = 2k\pi \iff x = -\frac{\pi}{2}+2k\pi
$$

**Conclusion.**

$$
\boxed{x = \frac{\pi}{6}+\frac{2k\pi}{3} \quad\text{ou}\quad x = -\frac{\pi}{2}+2k\pi, \quad k\in\mathbb{Z}}
$$

**Vérification** sur $x = \dfrac{\pi}{6}$ : d'un côté $\sin\dfrac{\pi}{6} = \dfrac12$, de l'autre $\cos\dfrac{\pi}{3} = \dfrac12$. ✓ Et sur $x = -\dfrac{\pi}{2}$ : $\sin\left(-\dfrac{\pi}{2}\right) = -1$ et $\cos(-\pi) = -1$. ✓
::
:::

:::exercice{titre="Palier 5 — Arccos, arcsin et arctan" theme="Les fonctions réciproques, et le piège de arccos(cos x)" badge="★★★★★" icone="i-lucide-undo-2"}
Une dernière marche, et c'est la plus glissante du chapitre. Les fonctions réciproques renvoient **un seul** angle là où l'équation en avait une infinité : tout le sujet est de savoir **lequel**.

::exo-question{label="1." cours="xtr-reciproques"}
Calculer $\arccos\dfrac{\sqrt2}{2}$, $\arcsin\left(-\dfrac12\right)$ et $\arctan(1)$.

#indice
Chacune de ces trois fonctions répond à la question « quel angle a ce cosinus / ce sinus / cette tangente ? » — mais en n'ayant le droit de répondre que **dans un intervalle imposé** :

$$
\arccos : [-1\,;1]\to[0\,;\pi]
\qquad
\arcsin : [-1\,;1]\to\left[-\frac{\pi}{2}\,;\frac{\pi}{2}\right]
\qquad
\arctan : \mathbb{R}\to\left]-\frac{\pi}{2}\,;\frac{\pi}{2}\right[
$$

La méthode est donc en deux temps : trouver tous les angles qui conviennent, puis **garder celui qui est dans le bon intervalle**. Pour l'arcsin d'une valeur négative, attention : la réponse est négative, elle n'est pas dans $[0\,;\pi]$.

#exemple
Même travail sur $\arccos\left(-\dfrac12\right)$ et $\arcsin\dfrac{\sqrt3}{2}$.

**$\arccos\left(-\dfrac12\right)$** — on cherche l'angle de $[0\,;\pi]$ dont le cosinus vaut $-\dfrac12$. Deux angles du tour conviennent, $\dfrac{2\pi}{3}$ et $-\dfrac{2\pi}{3}$, mais un seul est dans $[0\,;\pi]$ :

$$
\arccos\left(-\frac12\right) = \frac{2\pi}{3}
$$

Remarque utile : l'intervalle $[0\,;\pi]$ est la **moitié haute** du cercle. L'arccos d'un nombre négatif est donc toujours un angle **obtus**, compris entre $\dfrac{\pi}{2}$ et $\pi$.

**$\arcsin\dfrac{\sqrt3}{2}$** — on cherche l'angle de $\left[-\dfrac{\pi}{2}\,;\dfrac{\pi}{2}\right]$ dont le sinus vaut $\dfrac{\sqrt3}{2}$. Les candidats du tour sont $\dfrac{\pi}{3}$ et $\dfrac{2\pi}{3}$ ; seul le premier est dans l'intervalle :

$$
\arcsin\frac{\sqrt3}{2} = \frac{\pi}{3}
$$

#solution
**$\arccos\dfrac{\sqrt2}{2}$** — l'angle cherché doit être dans $[0\,;\pi]$. Les angles de cosinus $\dfrac{\sqrt2}{2}$ sont $\dfrac{\pi}{4}$ et $-\dfrac{\pi}{4}$ ; seul $\dfrac{\pi}{4}$ convient :

$$
\boxed{\arccos\frac{\sqrt2}{2} = \frac{\pi}{4}}
$$

**$\arcsin\left(-\dfrac12\right)$** — l'angle cherché doit être dans $\left[-\dfrac{\pi}{2}\,;\dfrac{\pi}{2}\right]$. Les angles de sinus $-\dfrac12$ sont $-\dfrac{\pi}{6}$ et $\pi+\dfrac{\pi}{6} = \dfrac{7\pi}{6}$ ; seul le premier est dans l'intervalle :

$$
\boxed{\arcsin\left(-\frac12\right) = -\frac{\pi}{6}}
$$

Le signe se retient sans calcul : $\arcsin$ est une fonction **impaire**, donc $\arcsin(-t) = -\arcsin(t)$.

**$\arctan(1)$** — l'angle cherché doit être dans $\left]-\dfrac{\pi}{2}\,;\dfrac{\pi}{2}\right[$. On a vu au palier 2 que $\tan\dfrac{\pi}{4} = 1$, et $\dfrac{\pi}{4}$ est bien dans l'intervalle :

$$
\boxed{\arctan(1) = \frac{\pi}{4}}
$$
::

::exo-question{label="2." cours="xtr-reciproques"}
Calculer $\arccos\left(\cos\dfrac{\pi}{5}\right)$, puis $\arccos\left(\cos\dfrac{7\pi}{5}\right)$. Commenter.

#indice
La tentation est d'écrire que les deux fonctions se simplifient et de répondre l'angle de départ à chaque fois. C'est vrai **une seule fois sur deux**, et c'est tout l'objet de la question.

$$
\arccos(\cos x) = x \quad\textbf{seulement si}\quad x\in[0\,;\pi]
$$

Le réflexe correct est donc de **commencer par regarder si l'angle est dans $[0\,;\pi]$**. S'il n'y est pas, la simplification est interdite : il faut d'abord trouver l'angle de $[0\,;\pi]$ qui a le **même cosinus** que celui de l'énoncé, ce que donne l'une des symétries du palier 3.

#exemple
Même travail sur $\arccos\left(\cos\dfrac{\pi}{7}\right)$ et $\arccos\left(\cos\dfrac{9\pi}{5}\right)$.

**$\arccos\left(\cos\dfrac{\pi}{7}\right)$** — on vérifie d'abord l'intervalle. On a $0 \leqslant \dfrac{\pi}{7} \leqslant \pi$, donc la simplification est légitime :

$$
\arccos\left(\cos\frac{\pi}{7}\right) = \frac{\pi}{7}
$$

**$\arccos\left(\cos\dfrac{9\pi}{5}\right)$** — cette fois $\dfrac{9\pi}{5} > \pi$ : interdit de simplifier. On cherche donc l'angle de $[0\,;\pi]$ de même cosinus. Comme $\dfrac{9\pi}{5} = 2\pi-\dfrac{\pi}{5}$, et que retirer un angle à un tour complet revient à prendre l'opposé :

$$
\cos\frac{9\pi}{5} = \cos\left(-\frac{\pi}{5}\right) = \cos\frac{\pi}{5}
$$

Et $\dfrac{\pi}{5}$, lui, est bien dans $[0\,;\pi]$ :

$$
\arccos\left(\cos\frac{9\pi}{5}\right) = \frac{\pi}{5}
$$

#solution
**Premier cas.** On vérifie l'intervalle : $0 \leqslant \dfrac{\pi}{5} \leqslant \pi$. La simplification est donc licite :

$$
\boxed{\arccos\left(\cos\frac{\pi}{5}\right) = \frac{\pi}{5}}
$$

**Second cas.** Ici $\dfrac{7\pi}{5} > \pi$ : l'angle n'est pas dans l'intervalle d'arrivée de l'arccos, et répondre $\dfrac{7\pi}{5}$ serait faux. On cherche l'angle de $[0\,;\pi]$ ayant le même cosinus. On écrit

$$
\frac{7\pi}{5} = 2\pi-\frac{3\pi}{5}
$$

d'où, par parité du cosinus,

$$
\cos\frac{7\pi}{5} = \cos\left(-\frac{3\pi}{5}\right) = \cos\frac{3\pi}{5}
$$

Or $\dfrac{3\pi}{5}$ est bien dans $[0\,;\pi]$, donc

$$
\boxed{\arccos\left(\cos\frac{7\pi}{5}\right) = \frac{3\pi}{5}}
$$

**Ce qu'il faut retenir.** L'arccos ne « défait » pas le cosinus : il renvoie **toujours** un angle de $[0\,;\pi]$, quel que soit l'angle de départ. Sur le cercle, cela revient à replier la moitié basse sur la moitié haute — deux angles symétriques par rapport à l'axe horizontal ont le même cosinus, et l'arccos ne peut en rendre qu'un.

La règle jumelle vaut pour l'arcsin, avec un autre intervalle : $\arcsin(\sin x) = x$ seulement si $x\in\left[-\dfrac{\pi}{2}\,;\dfrac{\pi}{2}\right]$.
::

::exo-question{label="3." cours="xtr-reciproques"}
Simplifier $\cos(\arcsin t)$ pour $t\in[-1\,;1]$.

#indice
Attention au sens de lecture : ici la réciproque est **à l'intérieur**, et c'est ce qui rend la simplification possible sans condition.

Pose $\theta = \arcsin t$. Deux choses sont alors vraies, et ce sont les deux seules dont tu as besoin :

- $\sin\theta = t$, par définition de l'arcsin ;
- $\theta\in\left[-\dfrac{\pi}{2}\,;\dfrac{\pi}{2}\right]$, puisque c'est l'intervalle d'arrivée.

L'identité $\cos^2\theta+\sin^2\theta = 1$ donne alors $\cos\theta$ **au signe près**. C'est la seconde information qui lève l'ambiguïté : sur cet intervalle, où se trouve le point sur le cercle, et quel est donc le signe de son abscisse ?

#exemple
Même méthode sur $\sin(\arccos t)$, pour $t\in[-1\,;1]$.

**On pose** $\theta = \arccos t$. Par définition, $\cos\theta = t$ et $\theta\in[0\,;\pi]$.

**L'identité fondamentale** donne

$$
\sin^2\theta = 1-\cos^2\theta = 1-t^2 \quad\Longrightarrow\quad \sin\theta = \pm\sqrt{1-t^2}
$$

**On tranche par l'intervalle.** Sur $[0\,;\pi]$, le point est dans la moitié **haute** du cercle : son ordonnée y est positive ou nulle, donc $\sin\theta \geqslant 0$. On garde la racine positive :

$$
\sin(\arccos t) = \sqrt{1-t^2}
$$

**Contrôle** avec $t = 0$ : $\arccos 0 = \dfrac{\pi}{2}$, donc $\sin\left(\dfrac{\pi}{2}\right) = 1$, et la formule donne $\sqrt{1-0} = 1$. ✓

#solution
**On pose** $\theta = \arcsin t$. Par définition de l'arcsin,

$$
\sin\theta = t \qquad\text{et}\qquad \theta\in\left[-\frac{\pi}{2}\,;\frac{\pi}{2}\right]
$$

**L'identité fondamentale** donne le carré du cosinus :

$$
\cos^2\theta = 1-\sin^2\theta = 1-t^2 \quad\Longrightarrow\quad \cos\theta = \pm\sqrt{1-t^2}
$$

**L'intervalle tranche le signe.** L'intervalle $\left[-\dfrac{\pi}{2}\,;\dfrac{\pi}{2}\right]$ correspond à la moitié **droite** du cercle, où l'abscisse — donc le cosinus — est positive ou nulle. On garde la racine positive :

$$
\boxed{\cos(\arcsin t) = \sqrt{1-t^2}}
$$

**Deux contrôles.** Avec $t = 0$ : $\arcsin 0 = 0$ et $\cos 0 = 1$, contre $\sqrt{1-0} = 1$. ✓ Avec $t = 1$ : $\arcsin 1 = \dfrac{\pi}{2}$ et $\cos\dfrac{\pi}{2} = 0$, contre $\sqrt{1-1} = 0$. ✓

Le résultat est valable **sans condition** sur $t$, contrairement à la question précédente : c'est parce que la fonction réciproque est ici la plus intérieure, et que son intervalle d'arrivée est connu d'avance.
::
:::

## Les rappels de cours de cette fiche

Ces tiroirs s'ouvrent aussi depuis le bouton **Cours** de chaque question. Ils sont regroupés ici pour permettre une relecture d'ensemble.

::extrait-cours{id="xtr-radian" titre="Le radian, et où se trouve un angle" source="/cours/a1/remise-a-niveau-maths/trigonometrie/cours#_2-le-radian-ou-pourquoi-π-traîne-partout"}
Le radian mesure un angle par la **longueur d'arc** qu'il découpe sur le cercle de rayon $1$. Un tour complet mesure donc $2\pi$, et un demi-tour $\pi$ :

$$
180° = \pi \ \text{rad}
$$

D'où les deux conversions, qui n'en font qu'une :

$$
\text{degrés}\to\text{radians} : \times\frac{\pi}{180}
\qquad
\text{radians}\to\text{degrés} : \times\frac{180}{\pi}
$$

**Les quatre quadrants** se lisent sur les bornes $0$, $\dfrac{\pi}{2}$, $\pi$, $\dfrac{3\pi}{2}$. Un angle **positif** tourne dans le sens inverse des aiguilles d'une montre, un angle **négatif** dans l'autre sens.

Comme le cosinus est l'**abscisse** du point et le sinus son **ordonnée**, le quadrant donne immédiatement les deux signes :

| Quadrant | Angle | $\cos$ | $\sin$ |
|---|---|---|---|
| 1 — haut droite | $\left]0\,;\frac{\pi}{2}\right[$ | $+$ | $+$ |
| 2 — haut gauche | $\left]\frac{\pi}{2}\,;\pi\right[$ | $-$ | $+$ |
| 3 — bas gauche | $\left]\pi\,;\frac{3\pi}{2}\right[$ | $-$ | $-$ |
| 4 — bas droite | $\left]\frac{3\pi}{2}\,;2\pi\right[$ | $+$ | $-$ |
::

::extrait-cours{id="xtr-valeurs" titre="Les valeurs remarquables" source="/cours/a1/remise-a-niveau-maths/trigonometrie/cours#_4-les-valeurs-remarquables"}
Trois angles à connaître, plus les deux cas évidents :

| $x$ | $0$ | $\dfrac{\pi}{6}$ | $\dfrac{\pi}{4}$ | $\dfrac{\pi}{3}$ | $\dfrac{\pi}{2}$ |
|---|---|---|---|---|---|
| $\cos x$ | $1$ | $\dfrac{\sqrt3}{2}$ | $\dfrac{\sqrt2}{2}$ | $\dfrac12$ | $0$ |
| $\sin x$ | $0$ | $\dfrac12$ | $\dfrac{\sqrt2}{2}$ | $\dfrac{\sqrt3}{2}$ | $1$ |

**Le moyen de ne jamais se tromper** : écrire les cosinus sous la forme $\dfrac{\sqrt n}{2}$ avec $n = 4, 3, 2, 1, 0$, et lire la ligne des sinus **à l'envers**.

Deux contrôles gratuits, à utiliser systématiquement :

- $\dfrac{\pi}{4}$ est sur la diagonale, donc $\cos = \sin$ ;
- l'identité fondamentale doit tenir : $\cos^2 x+\sin^2 x = 1$.
::

::extrait-cours{id="xtr-periodicite" titre="Périodicité et parité" source="/cours/a1/remise-a-niveau-maths/trigonometrie/cours#_5-périodicité-et-parité"}
**Périodicité** — ajouter un nombre entier de tours ramène au même point du cercle :

$$
\cos(x+2k\pi) = \cos x \qquad \sin(x+2k\pi) = \sin x, \quad k\in\mathbb{Z}
$$

**Parité** — le point d'angle $-x$ est le symétrique de celui d'angle $x$ par rapport à l'axe horizontal : même abscisse, ordonnée opposée.

$$
\cos(-x) = \cos x \quad (\textbf{pair}) \qquad \sin(-x) = -\sin x \quad (\textbf{impair})
$$

**La méthode pour un angle quelconque**, en deux temps :

1. écrire $2\pi$ avec le même dénominateur que l'angle, puis retirer ou ajouter autant de tours que nécessaire pour tomber dans $[0\,;2\pi[$ ;
2. reconnaître l'angle obtenu comme symétrique d'un angle de la table, et appliquer la formule d'angle associé correspondante.

Le contrôle final se fait toujours sur le **signe**, imposé par le quadrant.
::

::extrait-cours{id="xtr-associes" titre="Les angles associés, ou les quatre symétries" source="/cours/a1/remise-a-niveau-maths/trigonometrie/cours#_6-les-angles-associés-ou-les-quatre-symétries"}
Ces formules ne s'apprennent pas : elles se lisent sur la figure. Chaque ligne est une symétrie, et il suffit de suivre ce que deviennent l'abscisse et l'ordonnée du point.

**Symétrie / axe horizontal — l'angle $-x$** : abscisse conservée, ordonnée opposée.

$$
\cos(-x) = \cos x \qquad \sin(-x) = -\sin x
$$

**Symétrie / axe vertical — l'angle $\pi-x$** : abscisse opposée, ordonnée conservée.

$$
\cos(\pi-x) = -\cos x \qquad \sin(\pi-x) = \sin x
$$

**Symétrie / origine — l'angle $\pi+x$** : demi-tour, les deux coordonnées s'opposent.

$$
\cos(\pi+x) = -\cos x \qquad \sin(\pi+x) = -\sin x
$$

**Symétrie / première bissectrice — l'angle $\dfrac{\pi}{2}-x$** : les deux coordonnées s'**échangent**.

$$
\cos\left(\frac{\pi}{2}-x\right) = \sin x \qquad \sin\left(\frac{\pi}{2}-x\right) = \cos x
$$

Cette dernière est la **formule de conversion** : c'est elle qui permet de transformer un sinus en cosinus pour résoudre une équation mêlant les deux.

Le réflexe de vérification, sur n'importe laquelle de ces lignes : la tester avec $x = \dfrac{\pi}{6}$, dont on connaît toutes les valeurs.
::

::extrait-cours{id="xtr-tangente" titre="La tangente" source="/cours/a1/remise-a-niveau-maths/trigonometrie/cours#_7-la-tangente"}
$$
\tan x = \frac{\sin x}{\cos x}
$$

Ce n'est pas une fonction de plus à mémoriser : toutes ses valeurs se déduisent de la table des cosinus et des sinus.

$$
\tan 0 = 0 \qquad \tan\frac{\pi}{6} = \frac{\sqrt3}{3} \qquad \tan\frac{\pi}{4} = 1 \qquad \tan\frac{\pi}{3} = \sqrt3
$$

**Domaine.** Le quotient perd son sens là où le cosinus s'annule, c'est-à-dire aux deux points du cercle situés sur l'axe vertical :

$$
\tan x \text{ définie pour } x \neq \frac{\pi}{2}+k\pi, \quad k\in\mathbb{Z}
$$

**Parité.** Le cosinus étant pair et le sinus impair, leur quotient est **impair** : $\tan(-x) = -\tan x$.

**Période.** Contrairement au cosinus et au sinus, la tangente est de période $\pi$ et non $2\pi$ : un demi-tour change les deux signes, qui se compensent dans le quotient.
::

::extrait-cours{id="xtr-equations" titre="Résoudre une équation trigonométrique" source="/cours/a1/remise-a-niveau-maths/trigonometrie/cours#_8-résoudre-une-équation-trigonométrique"}
Une équation trigonométrique a une infinité de solutions, réparties en **deux familles**. Oublier la seconde est l'erreur la plus fréquente du chapitre.

$$
\cos X = \cos\alpha \iff X = \alpha+2k\pi \ \text{ ou } \ X = -\alpha+2k\pi, \quad k\in\mathbb{Z}
$$

$$
\sin X = \sin\alpha \iff X = \alpha+2k\pi \ \text{ ou } \ X = \pi-\alpha+2k\pi, \quad k\in\mathbb{Z}
$$

**Pourquoi deux familles, et pourquoi ces formes.** Résoudre $\cos X = c$, c'est chercher les points d'**abscisse** $c$ : la droite **verticale** correspondante coupe le cercle en deux points symétriques par rapport à l'axe horizontal, d'où le $-\alpha$. Pour le sinus, on cherche une **ordonnée** : la droite est **horizontale**, les deux points sont symétriques par rapport à l'axe vertical, d'où le $\pi-\alpha$.

**Quand l'inconnue est $ax+b$** : on résout d'abord en posant $X = ax+b$, puis on divise **toute la ligne** par $a$, le terme $2k\pi$ compris. C'est là que se perdent les points : $\dfrac{2k\pi}{a}$, et non $2k\pi$.

**Quand l'équation mêle sinus et cosinus** : on convertit d'abord tout dans la même fonction avec $\sin x = \cos\left(\dfrac{\pi}{2}-x\right)$, puis on applique la formule du cosinus.

**Pour ne garder que les solutions d'un intervalle**, on fait varier $k$ dans chaque famille et on retient ce qui tombe dedans. Le nombre de solutions trouvées doit correspondre au nombre de points d'intersection lus sur la figure.
::

::extrait-cours{id="xtr-reciproques" titre="Arccos, arcsin, arctan" source="/cours/a1/remise-a-niveau-maths/trigonometrie/cours#_9-les-fonctions-réciproques-arccos-arcsin-arctan"}
Une équation trigonométrique a une infinité de solutions ; une **fonction** ne peut en rendre qu'une. On restreint donc chaque fonction à un intervalle où elle est strictement monotone, et c'est là que vit la réciproque :

$$
\arccos : [-1\,;1]\to[0\,;\pi]
\qquad
\arcsin : [-1\,;1]\to\left[-\frac{\pi}{2}\,;\frac{\pi}{2}\right]
\qquad
\arctan : \mathbb{R}\to\left]-\frac{\pi}{2}\,;\frac{\pi}{2}\right[
$$

**Le sens facile est toujours vrai** — la réciproque est à l'intérieur, et sa sortie est dans le bon intervalle par construction :

$$
\cos(\arccos t) = t \quad \text{et} \quad \sin(\arcsin t) = t, \qquad t\in[-1\,;1]
$$

**Le sens piégeux est conditionnel** :

$$
\arccos(\cos x) = x \ \textbf{ seulement si } x\in[0\,;\pi]
\qquad
\arcsin(\sin x) = x \ \textbf{ seulement si } x\in\left[-\frac{\pi}{2}\,;\frac{\pi}{2}\right]
$$

Si $x$ n'y est pas, on cherche d'abord l'angle **de l'intervalle** qui a le même cosinus (ou le même sinus), à l'aide des angles associés, et c'est lui la réponse.

**Simplifier une expression mixte** — $\cos(\arcsin t)$, $\sin(\arccos t)$ — se fait toujours en trois temps : poser $\theta$ égal à la réciproque, écrire les **deux** informations qu'elle donne (la valeur **et** l'intervalle), puis utiliser $\cos^2\theta+\sin^2\theta = 1$, l'intervalle servant à choisir le signe de la racine.

**Dérivées**, pour mémoire :

$$
\arccos'(t) = \frac{-1}{\sqrt{1-t^2}}
\qquad
\arcsin'(t) = \frac{1}{\sqrt{1-t^2}}
\qquad
\arctan'(t) = \frac{1}{1+t^2}
$$
::
