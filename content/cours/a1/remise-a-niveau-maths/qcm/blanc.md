---
title: QCM 6 — Le QCM blanc
description: Vingt questions mélangées sur les quatre chapitres, dans le désordre et sans indication de thème — la répétition générale, à faire en conditions.
type: qcm
annee: A1
matiere: Remise à niveau en maths
ordre: 6
icone: i-lucide-clipboard-check
---

::rappel{titre="À faire en conditions, une seule fois" icone="i-lucide-timer"}
Vingt questions **mélangées**, sans indication de thème et sans regroupement : trigonométrie, dérivées, complexes et fonctions usuelles se succèdent dans le désordre, exactement comme le jour du QCM.

C'est là toute la difficulté, et c'est ce qui manque aux cinq QCM précédents : le vrai travail n'est plus de calculer, mais de **reconnaître de quoi on te parle** avant de choisir la formule.

**Le mode d'emploi**, pour que la note veuille dire quelque chose :

- **25 minutes, chronomètre lancé.** C'est un peu plus d'une minute par question.
- On répond à **tout**, même en devinant — une question blanche ne t'apprend rien, une erreur si.
- On ne consulte **rien** avant d'avoir cliqué sur Corriger.

À réserver pour le jeudi 10, la veille. Le faire trop tôt gâche le seul instrument de mesure fiable dont tu disposes.
::

:::qcm{titre="QCM 6 — Le QCM blanc" theme="Vingt questions mélangées sur les quatre chapitres, en conditions" duree="25 min" icone="i-lucide-clipboard-check"}

::qcm-question{label="1." bonne="b" cours="qcm-b-trigo"}
$\sin\dfrac{\pi}{6} = $

#a
$\dfrac{\sqrt3}{2}$

#b
$\dfrac12$

#c
$\dfrac{\sqrt2}{2}$

#d
$1$

#indice
Le repère : plus l'angle est **petit**, plus le sinus est petit. $\dfrac{\pi}{6}$ est le plus petit des angles remarquables non nuls.

#solution
$$
\sin\frac{\pi}{6} = \frac12 \qquad \cos\frac{\pi}{6} = \frac{\sqrt3}{2}
$$

⚠️ **La confusion numéro un du chapitre** est d'échanger les valeurs de $\dfrac{\pi}{6}$ et $\dfrac{\pi}{3}$. Le moyen de trancher sans hésiter : à $\dfrac{\pi}{6}$, tout proche de $0$, le **sinus** doit être **petit** et le **cosinus grand**.

| $\theta$ | $0$ | $\dfrac{\pi}{6}$ | $\dfrac{\pi}{4}$ | $\dfrac{\pi}{3}$ | $\dfrac{\pi}{2}$ |
|---|---|---|---|---|---|
| $\cos\theta$ | $1$ | $\dfrac{\sqrt3}{2}$ | $\dfrac{\sqrt2}{2}$ | $\dfrac{1}{2}$ | $0$ |
| $\sin\theta$ | $0$ | $\dfrac{1}{2}$ | $\dfrac{\sqrt2}{2}$ | $\dfrac{\sqrt3}{2}$ | $1$ |
::

::qcm-question{label="2." bonne="c" cours="qcm-b-derivees"}
La dérivée de $x\mapsto\tan\left(x^2\right)$ est :

#a
$\dfrac{1}{\cos^2\left(x^2\right)}$

#b
$\dfrac{2x}{\cos^2(x)}$

#c
$\dfrac{2x}{\cos^2\left(x^2\right)}$

#d
$2x\tan\left(x^2\right)$

#indice
$\left(\tan u\right)' = \dfrac{u'}{\cos^2u}$, avec $u = x^2$.

$u$ doit être remplacé **partout** : au numérateur par sa dérivée, et à l'intérieur du cosinus tel quel.

#solution
Avec $u = x^2$ et $u' = 2x$ :

$$
\left(\tan\left(x^2\right)\right)' = \frac{2x}{\cos^2\left(x^2\right)} = 2x\left(1+\tan^2\left(x^2\right)\right)
$$

**Les distracteurs :** **a** oublie $u'$, **b** oublie de reporter $u$ à l'intérieur du cosinus, **d** confond avec une puissance.
::

::qcm-question{label="3." bonne="d" cours="qcm-b-trigo"}
Pour tout réel $\theta$, $\cos\left(\dfrac{\pi}{2}+\theta\right) = $

#a
$\sin\theta$

#b
$\cos\theta$

#c
$-\cos\theta$

#d
$-\sin\theta$

#indice
Ne confonds pas avec $\cos\left(\dfrac{\pi}{2}-\theta\right) = \sin\theta$. Ici c'est un **plus**, et le résultat change de signe.

En cas de doute, teste $\theta = \dfrac{\pi}{2}$ : le membre de gauche devient $\cos\pi = -1$.

#solution
$$
\cos\left(\frac{\pi}{2}+\theta\right) = -\sin\theta \qquad \sin\left(\frac{\pi}{2}+\theta\right) = \cos\theta
$$

**Le test $\theta = \dfrac{\pi}{2}$ tranche immédiatement** : à gauche $\cos\pi = -1$ ; à droite, seul $-\sin\dfrac{\pi}{2} = -1$ convient.

⚠️ **Les deux formules complémentaires à ne pas mélanger :**

$$
\cos\left(\frac{\pi}{2}-\theta\right) = +\sin\theta \qquad \cos\left(\frac{\pi}{2}+\theta\right) = -\sin\theta
$$

Le passage du moins au plus dans l'argument fait basculer le signe du résultat. C'est un quart de tour dans l'autre sens sur le cercle.
::

::qcm-question{label="4." bonne="b" cours="qcm-b-complexes"}
$\left\lvert -1+i\sqrt3\right\rvert = $

#a
$\sqrt2$

#b
$2$

#c
$4$

#d
$-1+\sqrt3$

#indice
$\lvert a+bi\rvert = \sqrt{a^2+b^2}$ : les signes disparaissent au carré. Et $\left(\sqrt3\right)^2 = 3$.

#solution
$$
\left\lvert -1+i\sqrt3\right\rvert = \sqrt{(-1)^2+\left(\sqrt3\right)^2} = \sqrt{1+3} = 2
$$

**Le distracteur c oublie la racine finale** — c'est $\lvert z\rvert^2$. Le **d** additionne les parties au lieu de passer par Pythagore.

**Le triangle $1$, $\sqrt3$, $2$** revient sans arrêt dans ce chapitre, exactement comme le triangle $3$, $4$, $5$. Le reconnaître fait gagner du temps.

Au passage, cet exemple précis a pour argument $\dfrac{2\pi}{3}$ : cosinus négatif, sinus positif, donc deuxième quadrant.
::

::qcm-question{label="5." bonne="a" cours="qcm-b-usuelles"}
$\displaystyle\lim_{x\to+\infty}\frac{\ln x}{\sqrt x}$ vaut :

#a
$0$

#b
$+\infty$

#c
$1$

#d
la forme est indéterminée

#indice
$\sqrt x = x^{1/2}$ est une **puissance**. Dans la hiérarchie des croissances comparées, qui gagne entre le logarithme et une puissance, même fractionnaire ?

#solution
$$
\boxed{\ln x \ \ll\ x^n \ \ll\ e^x}
$$

$\sqrt x$ est la puissance $x^{1/2}$ : si petit que soit l'exposant, la puissance bat le logarithme.

$$
\lim_{x\to+\infty}\frac{\ln x}{\sqrt x} = 0
$$

⚠️ **L'exposant fractionnaire ne change rien.** Beaucoup hésitent parce que $\sqrt x$ croît lentement — mais le logarithme croît encore plus lentement, toujours.

Et « forme indéterminée » n'est jamais une réponse finale : c'est le signal qu'il faut appliquer la hiérarchie.
::

::qcm-question{label="6." bonne="c" cours="qcm-b-trigo"}
$\arcsin\dfrac12 = $

#a
$\dfrac{\pi}{3}$

#b
$\dfrac{\pi}{4}$

#c
$\dfrac{\pi}{6}$

#d
$\dfrac{5\pi}{6}$

#indice
$\arcsin x$ est l'unique angle de $\left[-\dfrac{\pi}{2}\,;\dfrac{\pi}{2}\right]$ dont le **sinus** vaut $x$.

Une des propositions sort de cet intervalle : elle est éliminable sans calcul.

#solution
On cherche l'angle de $\left[-\dfrac{\pi}{2}\,;\dfrac{\pi}{2}\right]$ dont le sinus vaut $\dfrac12$. C'est $\dfrac{\pi}{6}$.

$$
\boxed{\arcsin\frac12 = \frac{\pi}{6}}
$$

**Les distracteurs :** **a** est $\arccos\dfrac12$ — la confusion sinus/cosinus —, **d** a bien pour sinus $\dfrac12$ mais **dépasse $\dfrac{\pi}{2}$**, donc n'appartient pas à l'intervalle d'arrivée.

**Le contrôle final, systématique** : le résultat est-il dans $\left[-\dfrac{\pi}{2}\,;\dfrac{\pi}{2}\right]$ ? Cette seule vérification élimine **d**.
::

::qcm-question{label="7." bonne="b" cours="qcm-b-derivees"}
La dérivée de $x\mapsto e^{2x}\cos x$ est :

#a
$2e^{2x}\sin x$

#b
$e^{2x}\left(2\cos x-\sin x\right)$

#c
$e^{2x}\left(2\cos x+\sin x\right)$

#d
$-2e^{2x}\sin x$

#indice
C'est un **produit** de deux formes composées. Pose $u = e^{2x}$ et $v = \cos x$, calcule $u'$ et $v'$ à part, puis factorise par $e^{2x}$.

Deux signes à surveiller : celui de $\cos'$, et celui de la formule du produit.

#solution
Avec $u = e^{2x}$, $u' = 2e^{2x}$, $v = \cos x$, $v' = -\sin x$ :

$$
\left(e^{2x}\cos x\right)' = 2e^{2x}\cos x+e^{2x}\times(-\sin x)
$$

On factorise par $e^{2x}$, qui ne s'annule jamais :

$$
= e^{2x}\left(2\cos x-\sin x\right)
$$

**Le signe moins vient de $\cos' = -\sin$**, pas de la règle du produit qui porte un plus. C'est exactement ce que teste le distracteur **c**.

⚠️ **Factoriser par l'exponentielle est le réflexe attendu** : c'est ce qui permet ensuite d'étudier le signe de la dérivée, puisque $e^{2x} > 0$ toujours et que seul le facteur entre parenthèses compte.
::

::qcm-question{label="8." bonne="a" cours="qcm-b-trigo"}
Sur $[0\,;2\pi]$, les solutions de $\sin x = \dfrac12$ sont :

#a
$\dfrac{\pi}{6}$ et $\dfrac{5\pi}{6}$

#b
$\dfrac{\pi}{6}$ et $\dfrac{11\pi}{6}$

#c
$\dfrac{\pi}{6}$ seulement

#d
$\dfrac{\pi}{6}$ et $\dfrac{7\pi}{6}$

#indice
Pour un **sinus**, la seconde famille est celle des angles **supplémentaires** : $\pi-B$, et non $-B$ comme pour le cosinus.

Le contrôle : la somme des deux solutions doit valoir $\pi$.

#solution
$\sin\dfrac{\pi}{6} = \dfrac12$, d'où les deux familles :

$$
x = \frac{\pi}{6}+2k\pi \qquad\text{ou}\qquad x = \pi-\frac{\pi}{6}+2k\pi = \frac{5\pi}{6}+2k\pi
$$

Dans $[0\,;2\pi]$, les deux valeurs $k = 0$ conviennent :

$$
\boxed{S = \left\{\frac{\pi}{6}\ ;\ \frac{5\pi}{6}\right\}}
$$

**Le contrôle géométrique** : les deux solutions d'un sinus sont symétriques par rapport à l'axe **vertical**, donc leur **somme vaut $\pi$**. Ici $\dfrac{\pi}{6}+\dfrac{5\pi}{6} = \pi$ ✓.

Le distracteur **b** applique la règle du **cosinus** (somme $2\pi$), la **c** n'écrit qu'une famille sur deux — l'erreur qui coûte le plus de points de tout le programme.
::

::qcm-question{label="9." bonne="d" cours="qcm-b-complexes"}
Un argument de $z = 2-2i$ est :

#a
$\dfrac{\pi}{4}$

#b
$\dfrac{3\pi}{4}$

#c
$\dfrac{\pi}{2}$

#d
$-\dfrac{\pi}{4}$

#indice
Calcule le module, puis **les deux** rapports. Le signe de la partie imaginaire décide du quadrant : ici elle est négative.

#solution
$$
\lvert z\rvert = \sqrt{4+4} = 2\sqrt2
$$

$$
\cos\theta = \frac{2}{2\sqrt2} = \frac{\sqrt2}{2} > 0 \qquad \sin\theta = \frac{-2}{2\sqrt2} = -\frac{\sqrt2}{2} < 0
$$

Cosinus positif, sinus négatif : **quatrième quadrant**, donc $\theta = -\dfrac{\pi}{4}$.

$$
\boxed{z = 2\sqrt2\,e^{-i\frac{\pi}{4}}}
$$

⚠️ **Le cosinus seul ne suffit jamais** : $\dfrac{\sqrt2}{2}$ laisse $\dfrac{\pi}{4}$ et $-\dfrac{\pi}{4}$ en concurrence, et c'est le **signe du sinus** qui tranche. Le distracteur **a** est exactement cette erreur.
::

::qcm-question{label="10." bonne="b" cours="qcm-b-derivees"}
La dérivée de $x\mapsto\ln\left(x^2+1\right)$ est :

#a
$\dfrac{1}{x^2+1}$

#b
$\dfrac{2x}{x^2+1}$

#c
$\dfrac{2x}{\ln\left(x^2+1\right)}$

#d
$2x\ln\left(x^2+1\right)$

#indice
$\left(\ln u\right)' = \dfrac{u'}{u}$ : la fonction passe au dénominateur, sa dérivée au numérateur.

Un repère qui élimine la moitié des propositions : dériver un logarithme **fait disparaître le logarithme**.

#solution
Avec $u = x^2+1$ et $u' = 2x$ :

$$
\left(\ln\left(x^2+1\right)\right)' = \frac{2x}{x^2+1}
$$

**Les propositions c et d contiennent encore un $\ln$** : elles étaient éliminables d'un coup d'œil. La **a** oublie $u'$.

Ici $x^2+1 > 0$ toujours : la fonction est définie et dérivable sur $\mathbb{R}$ entier, sans condition à discuter.
::

::qcm-question{label="11." bonne="c" cours="qcm-b-usuelles"}
Pour tout réel $x$, $\mathrm{ch}\,x-\mathrm{sh}\,x$ vaut :

#a
$1$

#b
$e^x$

#c
$e^{-x}$

#d
$0$

#indice
Reviens aux définitions et soustrais : les deux fractions ont le même dénominateur $2$, et les termes en $e^x$ vont se compenser.

#solution
$$
\mathrm{ch}\,x-\mathrm{sh}\,x = \frac{e^x+e^{-x}}{2}-\frac{e^x-e^{-x}}{2} = \frac{2e^{-x}}{2} = e^{-x}
$$

**Et dans l'autre sens**, l'addition donne le résultat symétrique :

$$
\mathrm{ch}\,x+\mathrm{sh}\,x = e^x
$$

Les deux ensemble disent que $\mathrm{ch}$ et $\mathrm{sh}$ sont les parties paire et impaire de l'exponentielle. C'est aussi une manière de retrouver l'identité $\mathrm{ch}^2-\mathrm{sh}^2 = 1$ :

$$
(\mathrm{ch}+\mathrm{sh})(\mathrm{ch}-\mathrm{sh}) = e^x\times e^{-x} = e^0 = 1
$$

**La méthode qui marche à tous les coups** pour une identité hyperbolique : remplacer chaque $\mathrm{ch}$ et chaque $\mathrm{sh}$ par sa définition, développer, simplifier.
::

::qcm-question{label="12." bonne="b" cours="qcm-b-trigo"}
$\tan\dfrac{\pi}{4} = $

#a
$\dfrac{\sqrt2}{2}$

#b
$1$

#c
$\sqrt2$

#d
$\dfrac{\sqrt3}{3}$

#indice
$\tan = \dfrac{\sin}{\cos}$, et en $\dfrac{\pi}{4}$ le sinus et le cosinus sont **égaux**.

#solution
$$
\tan\frac{\pi}{4} = \frac{\sin\frac{\pi}{4}}{\cos\frac{\pi}{4}} = \frac{\frac{\sqrt2}{2}}{\frac{\sqrt2}{2}} = 1
$$

**C'est la valeur pivot de la tangente**, et le meilleur repère de contrôle du chapitre : la tangente croît de $0$ à $+\infty$ sur $\left[0\,;\dfrac{\pi}{2}\right[$ en passant par $1$ en $\dfrac{\pi}{4}$.

D'où deux vérifications instantanées : tout angle **inférieur** à $\dfrac{\pi}{4}$ a une tangente **inférieure à $1$** ($\tan\dfrac{\pi}{6} = \dfrac{\sqrt3}{3} \approx 0{,}58$), et tout angle supérieur a une tangente supérieure à $1$ ($\tan\dfrac{\pi}{3} = \sqrt3 \approx 1{,}73$).
::

::qcm-question{label="13." bonne="a" cours="qcm-b-derivees"}
La dérivée de $x\mapsto\arccos(3x)$ est :

#a
$\dfrac{-3}{\sqrt{1-9x^2}}$

#b
$\dfrac{3}{\sqrt{1-9x^2}}$

#c
$\dfrac{-3}{\sqrt{1-3x^2}}$

#d
$\dfrac{-1}{\sqrt{1-9x^2}}$

#indice
$\left(\arccos u\right)' = \dfrac{-u'}{\sqrt{1-u^2}}$. Trois éléments doivent être justes en même temps : le signe moins, le facteur $u' = 3$, et le carré $(3x)^2 = 9x^2$.

Chaque distracteur en rate exactement un.

#solution
Avec $u = 3x$ et $u' = 3$ :

$$
\left(\arccos(3x)\right)' = \frac{-3}{\sqrt{1-(3x)^2}} = \frac{-3}{\sqrt{1-9x^2}}
$$

**Le signe moins va avec $\arccos$**, qui est **décroissante** — c'est le repère à garder, et le distracteur **b** l'oublie. La **c** ne met pas $3$ au carré, la **d** oublie $u'$.

**Le domaine, en passant** : il faut $\lvert 3x\rvert < 1$, soit $x\in\left]-\dfrac13\,;\dfrac13\right[$. La composition rétrécit l'intervalle.
::

::qcm-question{label="14." bonne="c" cours="qcm-b-complexes"}
$i^{2026} = $

#a
$1$

#b
$i$

#c
$-1$

#d
$-i$

#indice
Les puissances de $i$ tournent en **boucle de quatre** : $1$, $i$, $-1$, $-i$, puis tout recommence.

Il suffit donc du **reste** de la division de $2026$ par $4$.

#solution
$$
i^0 = 1 \qquad i^1 = i \qquad i^2 = -1 \qquad i^3 = -i \qquad i^4 = 1
$$

On divise l'exposant par $4$ : $2026 = 4\times 506+2$, donc le reste vaut $2$.

$$
i^{2026} = \left(i^4\right)^{506}\times i^2 = 1^{506}\times(-1) = -1
$$

**La méthode rapide en QCM** : seuls les **deux derniers chiffres** comptent pour la divisibilité par $4$. Ici $26 = 24+2$, reste $2$ — inutile de diviser $2026$ en entier.
::

::qcm-question{label="15." bonne="d" cours="qcm-b-derivees"}
La dérivée **seconde** de $x\mapsto\sin x$ est :

#a
$\sin x$

#b
$\cos x$

#c
$-\cos x$

#d
$-\sin x$

#indice
On dérive **deux fois** de suite. La première dérivation donne le cosinus ; c'est la seconde qui apporte le signe.

#solution
$$
(\sin x)' = \cos x \qquad\text{puis}\qquad (\cos x)' = -\sin x
$$

$$
\boxed{(\sin x)'' = -\sin x}
$$

**Le cycle des dérivées successives**, de période $4$ comme les puissances de $i$ :

$$
\sin x \ \to\ \cos x \ \to\ -\sin x \ \to\ -\cos x \ \to\ \sin x
$$

Il faut donc quatre dérivations pour revenir au point de départ. C'est aussi la raison pour laquelle $\sin$ et $\cos$ vérifient l'équation $y''+y = 0$ — un résultat qui revient en physique dès qu'il est question d'oscillations.
::

::qcm-question{label="16." bonne="b" cours="qcm-b-derivees"}
La dérivée de $x\mapsto\dfrac{x}{1+x^2}$ est :

#a
$\dfrac{1}{1+x^2}$

#b
$\dfrac{1-x^2}{\left(1+x^2\right)^2}$

#c
$\dfrac{1+x^2}{\left(1+x^2\right)^2}$

#d
$\dfrac{x^2-1}{\left(1+x^2\right)^2}$

#indice
Formule du quotient, avec $u = x$ et $v = 1+x^2$. Le numérateur donne $1\times(1+x^2)-x\times 2x$ : deux termes en $x^2$ qui vont se combiner.

Attention au signe final : c'est $1-x^2$ ou $x^2-1$ ?

#solution
Avec $u = x$, $u' = 1$, $v = 1+x^2$, $v' = 2x$ :

$$
\left(\frac{x}{1+x^2}\right)' = \frac{1\times\left(1+x^2\right)-x\times 2x}{\left(1+x^2\right)^2} = \frac{1+x^2-2x^2}{\left(1+x^2\right)^2}
$$

$$
\boxed{= \frac{1-x^2}{\left(1+x^2\right)^2}}
$$

**Le distracteur d est l'opposé** : c'est l'erreur d'ordre dans le numérateur du quotient, $uv'-u'v$ au lieu de $u'v-uv'$.

**Le contrôle de bon sens** : la fonction est nulle en $0$, croît, atteint un maximum, puis redescend vers $0$. Sa dérivée doit donc être positive près de $0$ — ce que donne $1-x^2$, positif pour $\lvert x\rvert < 1$, et pas $x^2-1$.

Le maximum se lit d'ailleurs directement : la dérivée s'annule en $x = 1$.
::

::qcm-question{label="17." bonne="a" cours="qcm-b-complexes"}
Le conjugué de $e^{i\theta}$ est :

#a
$e^{-i\theta}$

#b
$-e^{i\theta}$

#c
$e^{i\theta}$

#d
$\dfrac{1}{\theta}$

#indice
$e^{i\theta} = \cos\theta+i\sin\theta$. Conjuguer change le signe de la **partie imaginaire** seulement. Que devient alors $\sin\theta$, et à quel angle cela correspond-il ?

#solution
$$
\overline{e^{i\theta}} = \overline{\cos\theta+i\sin\theta} = \cos\theta-i\sin\theta
$$

Or le cosinus est **pair** et le sinus **impair**, donc $\cos\theta = \cos(-\theta)$ et $-\sin\theta = \sin(-\theta)$ :

$$
= \cos(-\theta)+i\sin(-\theta) = e^{-i\theta}
$$

$$
\boxed{\overline{e^{i\theta}} = e^{-i\theta}}
$$

**En clair** : conjuguer, c'est **changer le signe de l'argument** sans toucher au module. C'est bien la symétrie par rapport à l'axe horizontal.

**Une conséquence utile** : pour un nombre de module $1$, le conjugué et l'inverse **coïncident**, puisque $e^{i\theta}\times e^{-i\theta} = e^0 = 1$.
::

::qcm-question{label="18." bonne="c" cours="qcm-b-usuelles"}
$\displaystyle\lim_{x\to 0}\frac{\sin x}{x}$ vaut :

#a
$0$

#b
$+\infty$

#c
$1$

#d
la limite n'existe pas

#indice
Ce n'est pas une croissance comparée mais un **taux d'accroissement**. Reconnais $\dfrac{f(x)-f(0)}{x-0}$ pour une fonction bien connue, sachant que $\sin 0 = 0$.

#solution
$$
\frac{\sin x}{x} = \frac{\sin x-\sin 0}{x-0}
$$

C'est le taux d'accroissement de $\sin$ entre $0$ et $x$ : sa limite est le nombre dérivé $\sin'(0)$.

$$
\lim_{x\to 0}\frac{\sin x}{x} = \cos 0 = 1
$$

**Le réflexe général** : devant une forme $\dfrac00$ où l'on reconnaît $\dfrac{f(x)-f(a)}{x-a}$, la limite est $f'(a)$ — aucun calcul supplémentaire.

**Deux limites de la même famille**, à connaître ensemble :

$$
\lim_{x\to 0}\frac{\sin x}{x} = 1 \qquad \lim_{x\to 0}\frac{e^x-1}{x} = 1
$$

⚠️ La première **suppose $x$ en radians**. En degrés, elle vaudrait $\dfrac{\pi}{180}$ — c'est la raison profonde pour laquelle toute l'analyse travaille en radians.
::

::qcm-question{label="19." bonne="b" cours="qcm-b-trigo"}
L'équation $\cos(2x) = \cos\left(x+\dfrac{\pi}{3}\right)$ a pour première famille de solutions :

#a
$x = \dfrac{\pi}{3}+\dfrac{2k\pi}{3}$

#b
$x = \dfrac{\pi}{3}+2k\pi$

#c
$x = \dfrac{\pi}{9}+2k\pi$

#d
$x = \dfrac{\pi}{3}+k\pi$

#indice
La première famille est celle des arguments **égaux** : $2x = x+\dfrac{\pi}{3}+2k\pi$.

C'est ensuite une équation du premier degré. Le coefficient devant $x$ après regroupement vaut-il $1$ ou $3$ ? C'est lui qui décide s'il faut diviser le $2k\pi$.

#solution
Première famille, arguments égaux modulo $2\pi$ :

$$
2x = x+\frac{\pi}{3}+2k\pi
$$

On retranche $x$ des deux côtés — le coefficient devant $x$ vaut donc $1$, et il n'y a **rien à diviser** :

$$
\boxed{x = \frac{\pi}{3}+2k\pi}
$$

**Le distracteur a est le piège de la question** : il divise le $2k\pi$ par $3$ alors qu'aucune division n'a eu lieu. Cette division est nécessaire quand le regroupement laisse $3x$ — ce qui arriverait avec la **seconde** famille :

$$
2x = -x-\frac{\pi}{3}+2k\pi \ \Longrightarrow\ 3x = -\frac{\pi}{3}+2k\pi \ \Longrightarrow\ x = -\frac{\pi}{9}+\frac{2k\pi}{3}
$$

⚠️ **Le pas d'une famille dépend du coefficient de $x$** au moment de la division. Ici les deux familles n'ont donc pas le même pas : $2\pi$ pour la première, $\dfrac{2\pi}{3}$ pour la seconde.
::

::qcm-question{label="20." bonne="c" cours="qcm-b-derivees"}
La dérivée de $x\mapsto\sqrt{1+e^x}$ est :

#a
$\dfrac{1}{2\sqrt{1+e^x}}$

#b
$\dfrac{e^x}{\sqrt{1+e^x}}$

#c
$\dfrac{e^x}{2\sqrt{1+e^x}}$

#d
$\dfrac{e^x}{2\sqrt{1+e^x}}+e^x$

#indice
$\left(\sqrt u\right)' = \dfrac{u'}{2\sqrt u}$, avec $u = 1+e^x$ donc $u' = e^x$.

Le $2$ du dénominateur ne se simplifie que si $u'$ contient un facteur $2$ — ce n'est pas le cas ici.

#solution
Avec $u = 1+e^x$ et $u' = e^x$ :

$$
\left(\sqrt{1+e^x}\right)' = \frac{e^x}{2\sqrt{1+e^x}}
$$

**Les distracteurs :** **a** oublie $u'$, **b** perd le facteur $2$, **d** ajoute un terme parasite.

**Deux remarques pour finir ce QCM :**

- $1+e^x > 1 > 0$ toujours, donc la fonction est définie **et** dérivable sur $\mathbb{R}$ entier — pas de condition à discuter ;
- la dérivée est **strictement positive** partout, ce qui est cohérent : $e^x$ croît, donc $1+e^x$ croît, donc sa racine aussi.
::

:::

## Les rappels de cours de ce QCM

Ces tiroirs s'ouvrent depuis le bouton **Cours** des questions ratées. Chacun renvoie vers la section du chapitre concerné.

::extrait-cours{id="qcm-b-trigo" titre="Trigonométrie : l'essentiel" source="/cours/a1/remise-a-niveau-maths/trigonometrie/cours#_4-les-valeurs-remarquables"}
| $\theta$ | $0$ | $\dfrac{\pi}{6}$ | $\dfrac{\pi}{4}$ | $\dfrac{\pi}{3}$ | $\dfrac{\pi}{2}$ |
|---|---|---|---|---|---|
| $\cos\theta$ | $1$ | $\dfrac{\sqrt3}{2}$ | $\dfrac{\sqrt2}{2}$ | $\dfrac{1}{2}$ | $0$ |
| $\sin\theta$ | $0$ | $\dfrac{1}{2}$ | $\dfrac{\sqrt2}{2}$ | $\dfrac{\sqrt3}{2}$ | $1$ |
| $\tan\theta$ | $0$ | $\dfrac{\sqrt3}{3}$ | $1$ | $\sqrt3$ | — |

⚠️ **Le repère anti-confusion** : plus l'angle est petit, plus le **cosinus** est grand et le **sinus** petit.

**Les angles associés** — quatre symétries, pas quatre formules :

$$
\cos(-\theta) = \cos\theta \qquad \cos(\pi-\theta) = -\cos\theta \qquad \cos\left(\frac{\pi}{2}-\theta\right) = \sin\theta \qquad \cos\left(\frac{\pi}{2}+\theta\right) = -\sin\theta
$$

$$
\sin(-\theta) = -\sin\theta \qquad \sin(\pi-\theta) = \sin\theta \qquad \sin\left(\frac{\pi}{2}-\theta\right) = \cos\theta \qquad \sin\left(\frac{\pi}{2}+\theta\right) = \cos\theta
$$

**En cas de doute, teste $\theta = 0$ puis $\theta = \dfrac{\pi}{2}$.** Deux valeurs bien choisies éliminent presque toujours tout.

**Les équations** — toujours **deux** familles :

$$
\cos A = \cos B \iff A = B+2k\pi \text{ ou } A = -B+2k\pi \qquad \text{(somme } 2\pi \text{ sur un tour)}
$$

$$
\sin A = \sin B \iff A = B+2k\pi \text{ ou } A = \pi-B+2k\pi \qquad \text{(somme } \pi \text{ sur un tour)}
$$

⚠️ En divisant par le coefficient de $x$, **diviser aussi le $2k\pi$** : c'est ce qui change le pas d'une famille.

**Les réciproques** : $\arccos$ atterrit dans $[0\,;\pi]$, $\arcsin$ et $\arctan$ dans $\left[-\dfrac{\pi}{2}\,;\dfrac{\pi}{2}\right]$. Vérifier l'intervalle d'arrivée élimine la majorité des erreurs.
::

::extrait-cours{id="qcm-b-derivees" titre="Dérivées : le tableau et le mécanisme" source="/cours/a1/remise-a-niveau-maths/fonctions-variable-reelle/cours#_5-les-formes-composées"}
$$
(uv)' = u'v+uv' \qquad \left(\frac{u}{v}\right)' = \frac{u'v-uv'}{v^2}
$$

**Formes composées — une seule idée : $u'$ sort en facteur.**

$$
\left(u^n\right)' = n\,u'\,u^{n-1} \qquad \left(\sqrt u\right)' = \frac{u'}{2\sqrt u} \qquad \left(e^u\right)' = u'e^u \qquad \left(\ln u\right)' = \frac{u'}{u}
$$

$$
\left(\sin u\right)' = u'\cos u \qquad \left(\cos u\right)' = -u'\sin u \qquad \left(\tan u\right)' = \frac{u'}{\cos^2u}
$$

$$
\left(\arcsin u\right)' = \frac{u'}{\sqrt{1-u^2}} \qquad \left(\arccos u\right)' = \frac{-u'}{\sqrt{1-u^2}} \qquad \left(\arctan u\right)' = \frac{u'}{1+u^2}
$$

$$
\mathrm{sh}' = \mathrm{ch} \qquad \mathrm{ch}' = \mathrm{sh} \qquad \mathrm{th}' = 1-\mathrm{th}^2
$$

⚠️ **Les quatre erreurs qui coûtent presque tout :**

1. **oublier $u'$** — l'erreur numéro un ;
2. **oublier le signe moins** de $\cos'$ et d'$\arccos'$ ;
3. **remplacer $u$ à moitié** — il faut le reporter au numérateur **et** sous la racine ou au carré ;
4. **transposer les signes circulaires aux hyperboliques** — $\mathrm{ch}'$ et $\mathrm{sh}'$ n'ont **aucun** signe moins.

**Trois contrôles instantanés :** dériver un $\ln$ le fait disparaître ; dériver une exponentielle laisse l'exposant intact ; évaluer la dérivée en $0$ et comparer au comportement local de la courbe.
::

::extrait-cours{id="qcm-b-complexes" titre="Complexes : formes et module" source="/cours/a1/remise-a-niveau-maths/nombres-complexes/cours#_5-module-et-argument"}
**Forme algébrique** : $z = a+bi$, avec $\mathcal{I}m(z) = b$ un **réel**, sans le $i$. Et $i^2 = -1$.

**Les puissances de $i$** tournent de quatre en quatre : $1$, $i$, $-1$, $-i$. Pour $i^n$, on prend le reste de $n$ dans la division par $4$ — seuls les deux derniers chiffres comptent.

**Conjugué et quotient :**

$$
\bar z = a-bi \qquad z\bar z = \lvert z\rvert^2 \qquad \frac{a+bi}{c+di} = \frac{(a+bi)(c-di)}{c^2+d^2}
$$

⚠️ Le dénominateur devient $c^2+d^2$, pas $(c+d)^2$.

**Module et argument :**

$$
\lvert z\rvert = \sqrt{a^2+b^2} \qquad \cos\theta = \frac{a}{\lvert z\rvert} \quad\textbf{et}\quad \sin\theta = \frac{b}{\lvert z\rvert}
$$

⚠️ **Les deux rapports sont nécessaires.** Le cosinus seul laisse deux angles en concurrence ; c'est le **signe du sinus** qui tranche. C'est l'erreur la plus coûteuse du chapitre, parce qu'elle produit un résultat vraisemblable.

**Forme exponentielle**, avec $r > 0$ obligatoirement :

$$
z = re^{i\theta} \qquad \overline{e^{i\theta}} = e^{-i\theta} \qquad \left(re^{i\theta}\right)^n = r^ne^{in\theta}
$$

**Les modules se multiplient, les arguments s'additionnent.** Forme algébrique pour les sommes, exponentielle pour les produits et les puissances.
::

::extrait-cours{id="qcm-b-usuelles" titre="Fonctions usuelles : limites et hyperboliques" source="/cours/a1/remise-a-niveau-maths/fonctions-usuelles/cours#_4-limites-et-croissances-comparées"}
**La hiérarchie des croissances comparées :**

$$
\boxed{\ln x \ \ll\ x^n \ \ll\ e^x} \qquad (x\to+\infty)
$$

Elle vaut pour **tout** exposant, y compris fractionnaire : $\sqrt x = x^{1/2}$ bat encore le logarithme.

$$
\lim_{x\to+\infty}\frac{e^x}{x^n} = +\infty \qquad \lim_{x\to+\infty}\frac{\ln x}{x} = 0 \qquad \lim_{x\to 0^+}x\ln x = 0^- \qquad \lim_{x\to-\infty}xe^x = 0
$$

**Deux limites qui sont des taux d'accroissement**, et non des croissances comparées :

$$
\lim_{x\to 0}\frac{e^x-1}{x} = 1 \qquad \lim_{x\to 0}\frac{\sin x}{x} = 1
$$

Le réflexe : devant $\dfrac00$ où l'on reconnaît $\dfrac{f(x)-f(a)}{x-a}$, la limite est $f'(a)$.

⚠️ « Forme indéterminée » n'est jamais une réponse finale.

**Les fonctions hyperboliques :**

$$
\mathrm{ch}\,x = \frac{e^x+e^{-x}}{2} \qquad \mathrm{sh}\,x = \frac{e^x-e^{-x}}{2}
$$

$$
\mathrm{ch}+\mathrm{sh} = e^x \qquad \mathrm{ch}-\mathrm{sh} = e^{-x} \qquad \mathrm{ch}^2-\mathrm{sh}^2 = 1
$$

**La méthode unique** pour toute identité hyperbolique : revenir aux définitions, développer, simplifier.

⚠️ Le signe moins est dans l'**identité** côté hyperbolique, dans les **dérivées** côté circulaire.
::
