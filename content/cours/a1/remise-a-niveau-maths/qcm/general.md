---
title: QCM 1 — Un peu de tout
description: Vingt questions mélangées sur les quatre chapitres, dans la composition du sujet — dérivation, nombres complexes, trigonométrie en contexte et fonctions usuelles.
type: qcm
annee: A1
matiere: Remise à niveau en maths
ordre: 1
icone: i-lucide-shuffle
---

::rappel{titre="Pourquoi ce QCM mélange tout" icone="i-lucide-shuffle"}
Vingt questions, **une seule bonne réponse** par question, prises dans les **quatre chapitres** et volontairement mêlées : une dérivée, puis un complexe, puis une réciproque, sans regroupement ni annonce de thème.

C'est la forme du sujet. Au QCM, **aucun thème n'arrive seul** — et la trigonométrie moins que tout autre : elle se présente sous forme d'une dérivée de $\sin(3x)$ à calculer, d'un argument de nombre complexe à trouver, d'un $\arcsin$ à dériver. C'est la raison pour laquelle il n'y a pas de QCM consacré à la seule trigonométrie : ce serait s'entraîner à un exercice qui n'existe pas.

**Le mode d'emploi.** On répond à tout, puis on clique sur **Corriger** en bas de page : rien ne se révèle avant. Une fois la copie rendue, chaque question ratée ouvre ses trois boutons — **Indice** pour le raisonnement, **Voir la solution** pour la correction rédigée, **Cours** pour le rappel exact qui manquait.

Cliquer une seconde fois sur une proposition la désélectionne, si tu préfères laisser une question blanche plutôt que de deviner.

**À faire en premier, sans avoir rien révisé.** C'est le diagnostic : la note n'a aucune importance, la répartition des erreurs en a une.
::

::carte-lien{to="/cours/a1/remise-a-niveau-maths/trigonometrie/cours" titre="Le cours de trigonométrie" description="Le cercle expliqué de zéro, figure interactive à l'appui — avec la liste de ce qu'il faut réellement savoir par cœur" type="cours" meta="11 sections"}
::

::carte-lien{to="/cours/a1/remise-a-niveau-maths" titre="Les quatre chapitres" description="Trigonométrie, fonctions d'une variable réelle, fonctions usuelles et nombres complexes : cours, exercices et fiches d'entraînement" icone="i-lucide-sigma" meta="4 chapitres"}
::

:::qcm{titre="QCM 1 — Un peu de tout" theme="Vingt questions mélangées sur les quatre chapitres, dans la composition du sujet" duree="1 h" icone="i-lucide-shuffle"}

::qcm-question{label="1." bonne="c" cours="qcm-g-derivees"}
La fonction $f$ définie sur $\mathbb{R}$ par $f(x) = \sin x\cos x$ a pour dérivée :

#a
$f'(x) = -\sin x\cos x$

#b
$f'(x) = \cos^2x+\sin^2x$

#c
$f'(x) = \cos^2x-\sin^2x$

#d
$f'(x) = 1$

#indice
C'est un **produit** : $(uv)' = u'v+uv'$, avec $u = \sin$ et $v = \cos$.

Attention au signe : c'est le **cosinus** qui se dérive en $-\sin$, pas l'inverse.

#solution
Avec $u = \sin x$, $u' = \cos x$, $v = \cos x$ et $v' = -\sin x$ :

$$
f'(x) = \cos x\times\cos x+\sin x\times(-\sin x) = \cos^2x-\sin^2x
$$

$$
\boxed{f'(x) = \cos^2x-\sin^2x = \cos(2x)}
$$

**Le second chemin, plus court** : $\sin x\cos x = \dfrac12\sin(2x)$, donc $f'(x) = \dfrac12\times 2\cos(2x) = \cos(2x)$. Les deux routes se rejoignent — c'est exactement le contrôle indépendant à faire quand on hésite.

**Les distracteurs :** **b** met un **plus** au lieu d'un moins, et vaut donc $1$ quel que soit $x$ — c'est l'identité de Pythagore, pas une dérivée ; **d** est cette même confusion menée jusqu'au bout ; **a** ne dérive rien du tout.

⚠️ La confusion **$\cos^2-\sin^2$ contre $\cos^2+\sin^2$** est fréquente et coûteuse : la première dépend de $x$, la seconde vaut $1$ partout.
::

::qcm-question{label="2." bonne="a" cours="qcm-g-complexes"}
La forme algébrique du nombre complexe $z = \dfrac{2+i}{3-i}$ est :

#a
$\dfrac12+\dfrac12 i$

#b
$\dfrac23-i$

#c
$\dfrac{5+5i}{8}$

#d
$\dfrac12-\dfrac12 i$

#indice
Un quotient ne devient une forme algébrique qu'après avoir **rendu le dénominateur réel**. On multiplie donc les deux termes par le **conjugué du dénominateur**, ici $3+i$.

Au dénominateur, $(3-i)(3+i)$ ne se développe pas : c'est $3^2+1^2$.

#solution
On multiplie numérateur et dénominateur par $\overline{3-i} = 3+i$ :

$$
z = \frac{(2+i)(3+i)}{(3-i)(3+i)} = \frac{6+2i+3i+i^2}{3^2+1^2} = \frac{5+5i}{10}
$$

$$
\boxed{z = \frac12+\frac12 i}
$$

**Les distracteurs :** **b** divise les parties réelles entre elles et les parties imaginaires entre elles — un quotient de complexes ne se calcule **jamais** ainsi ; **c** utilise $3^2-1^2 = 8$ au dénominateur, en oubliant que $i^2 = -1$ retourne le signe ; **d** se trompe de signe sur la partie imaginaire, typiquement en multipliant par $3-i$ au lieu du conjugué.

**La règle à retenir** : pour tout complexe $z = a+ib$,

$$
z\bar z = a^2+b^2
$$

C'est **toujours** une somme, jamais une différence — et c'est ce qui rend le dénominateur réel et positif.
::

::qcm-question{label="3." bonne="d" cours="qcm-g-derivees"}
La fonction $f$ définie sur $\mathbb{R}$ par $f(x) = \cos(3x)$ a pour dérivée :

#a
$f'(x) = -\sin(3x)$

#b
$f'(x) = 3\sin(3x)$

#c
$f'(x) = 3\cos(3x)$

#d
$f'(x) = -3\sin(3x)$

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

::qcm-question{label="4." bonne="b" cours="qcm-g-trigo"}
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

::qcm-question{label="5." bonne="b" cours="qcm-g-derivees"}
La fonction $f$ définie sur $\mathbb{R}$ par $f(x) = e^{3x}\sin x$ a pour dérivée :

#a
$f'(x) = 3e^{3x}\cos x$

#b
$f'(x) = e^{3x}\left(3\sin x+\cos x\right)$

#c
$f'(x) = e^{3x}\left(\sin x+3\cos x\right)$

#d
$f'(x) = 3e^{3x}\sin x+\cos x$

#indice
Produit de deux fonctions, chacune demandant sa propre règle : $\left(e^{3x}\right)' = 3e^{3x}$ et $\left(\sin x\right)' = \cos x$.

Le facteur $3$ vient de la dérivée de l'exposant : il accompagne donc le terme où l'exponentielle a été dérivée, pas l'autre.

#solution
Avec $u = e^{3x}$, $u' = 3e^{3x}$, $v = \sin x$ et $v' = \cos x$ :

$$
f'(x) = 3e^{3x}\sin x+e^{3x}\cos x
$$

$$
\boxed{f'(x) = e^{3x}\left(3\sin x+\cos x\right)}
$$

**Les distracteurs, un par erreur :** **a** ne dérive que le premier facteur et oublie tout le second terme ; **c** attribue le $3$ au mauvais terme — c'est l'erreur la plus tentante, parce que la forme factorisée masque d'où vient le coefficient ; **d** oublie de factoriser et laisse un $\cos x$ orphelin, sans exponentielle, ce qui est dimensionnellement impossible.

**Le contrôle en dix secondes** : en $x = 0$, $f'(0)$ doit valoir $3\times 0+1 = 1$. La proposition **c** donne $3$, la **a** donne $3$, la **d** donne $1$ aussi — ce contrôle élimine deux propositions sur trois, et la factorisation tranche la dernière.
::

::qcm-question{label="6." bonne="d" cours="qcm-g-complexes"}
Un argument du nombre complexe $z = -\sqrt3+i$ est :

#a
$\dfrac{\pi}{6}$

#b
$\dfrac{2\pi}{3}$

#c
$-\dfrac{5\pi}{6}$

#d
$\dfrac{5\pi}{6}$

#indice
D'abord le module, ensuite l'angle. $\rho = \sqrt{a^2+b^2}$, puis $\cos\theta = \dfrac{a}{\rho}$ **et** $\sin\theta = \dfrac{b}{\rho}$.

Partie réelle négative, partie imaginaire positive : le point est en haut à gauche. Une seule proposition est dans ce quadrant.

#solution
**Le module :**

$$
\rho = \sqrt{\left(-\sqrt3\right)^2+1^2} = \sqrt{3+1} = 2
$$

**Les deux rapports**, jamais un seul :

$$
\cos\theta = \frac{-\sqrt3}{2} \qquad \sin\theta = \frac{1}{2}
$$

Cosinus négatif, sinus positif : deuxième quadrant. L'angle du premier quadrant ayant ces valeurs absolues est $\dfrac{\pi}{6}$, son symétrique par rapport à l'axe vertical est $\pi-\dfrac{\pi}{6}$.

$$
\boxed{\theta = \frac{5\pi}{6}}
$$

**Les distracteurs :** **a** ignore les signes et donne l'angle de référence ; **c** a le bon angle de référence mais le mauvais quadrant — c'est le point $-\sqrt3-i$ ; **b** confond $\dfrac{\pi}{6}$ et $\dfrac{\pi}{3}$ dans la lecture du tableau, car $\dfrac{2\pi}{3} = \pi-\dfrac{\pi}{3}$.

⚠️ **C'est de la trigonométrie pure, déguisée en nombres complexes.** Le couple (signe du cosinus, signe du sinus) désigne un quadrant et un seul : c'est le même réflexe qu'à la section 3 du cours de trigonométrie, et il tombe ici bien plus souvent que sur une question de cercle.
::

::qcm-question{label="7." bonne="c" cours="qcm-g-reciproques"}
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

::qcm-question{label="8." bonne="a" cours="qcm-g-derivees"}
La fonction $f$ définie et dérivable sur $]0\,;\pi[$ par $f(x) = \ln(\sin x)$ a pour dérivée :

#a
$f'(x) = \dfrac{\cos x}{\sin x}$

#b
$f'(x) = \dfrac{1}{\sin x}$

#c
$f'(x) = -\dfrac{\cos x}{\sin x}$

#d
$f'(x) = \dfrac{1}{\cos x}$

#indice
$\left(\ln u\right)' = \dfrac{u'}{u}$. Ici $u = \sin x$ : que vaut $u'$ ?

Le numérateur n'est jamais $1$ quand l'intérieur n'est pas $x$ tout seul.

#solution
Avec $u = \sin x$ et $u' = \cos x$ :

$$
f'(x) = \frac{\cos x}{\sin x}
$$

$$
\boxed{f'(x) = \frac{1}{\tan x}}
$$

L'intervalle $]0\,;\pi[$ n'est pas décoratif : c'est exactement là que $\sin x > 0$, donc là où $\ln(\sin x)$ existe.

**Les distracteurs :** **b** oublie $u'$ au numérateur — l'erreur numéro un des composées ; **c** ajoute un signe moins qui n'a aucune raison d'être, le logarithme n'en porte pas ; **d** dérive la mauvaise fonction à l'intérieur.

**Le contrôle de bon sens** : sur $\left]0\,;\dfrac{\pi}{2}\right[$ le sinus **croît**, donc son logarithme aussi, donc $f'$ doit y être **positive**. La proposition **c**, négative sur cet intervalle, est éliminée sans calcul.
::

::qcm-question{label="9." bonne="b" cours="qcm-g-usuelles"}
$\displaystyle\lim_{x\to+\infty}\frac{e^x}{x^3}$ vaut :

#a
$0$

#b
$+\infty$

#c
$1$

#d
$3$

#indice
C'est une **croissance comparée**, pas une forme indéterminée à lever par le calcul.

Une seule phrase suffit : à l'infini, qui l'emporte entre l'exponentielle et une puissance de $x$ ?

#solution
La hiérarchie des croissances, valable pour **toute** puissance $n$ :

$$
\lim_{x\to+\infty}\frac{e^x}{x^n} = +\infty \qquad\qquad \lim_{x\to+\infty}\frac{\ln x}{x^n} = 0
$$

L'exponentielle l'emporte sur toute puissance, et toute puissance l'emporte sur le logarithme.

$$
\boxed{\text{exponentielle} \gg \text{puissances} \gg \text{logarithme}}
$$

$$
\lim_{x\to+\infty}\frac{e^x}{x^3} = +\infty
$$

**Les distracteurs :** **a** inverse la hiérarchie et donnerait la limite de $\dfrac{x^3}{e^x}$ ; **c** suppose une compensation qui n'existe pas ; **d** confond la limite avec l'exposant.

⚠️ **L'exposant ne change rien.** $x^3$, $x^{10}$ ou $x^{100}$ : l'exponentielle finit toujours par gagner. C'est ce qui rend cette question mécanique — il n'y a rien à calculer, seulement une hiérarchie à connaître.
::

::qcm-question{label="10." bonne="a" cours="qcm-g-second-degre"}
Dans $\mathbb{C}$, l'équation $z^2-2z+5 = 0$ a pour solutions :

#a
$\{1+2i\ ;\ 1-2i\}$

#b
$\{-1+2i\ ;\ -1-2i\}$

#c
$\{2+4i\ ;\ 2-4i\}$

#d
aucune solution

#indice
Le discriminant est négatif : $\Delta = b^2-4ac = 4-20$.

Quand $\Delta < 0$, la racine carrée fait apparaître un $i$ : on écrit $\sqrt{\Delta} = i\sqrt{\lvert\Delta\rvert}$, puis on applique la formule habituelle.

#solution
$$
\Delta = (-2)^2-4\times 1\times 5 = 4-20 = -16 \qquad\text{donc}\qquad \sqrt{\Delta} = 4i
$$

$$
z = \frac{2\pm 4i}{2}
$$

$$
\boxed{z_1 = 1+2i \qquad z_2 = 1-2i}
$$

**Les distracteurs :** **b** oublie le signe de $-b$ dans la formule ; **c** oublie de diviser par $2a$ ; **d** est le réflexe du lycée — dans $\mathbb{R}$ il n'y aurait effectivement pas de solution, mais dans $\mathbb{C}$ **un discriminant négatif en donne toujours deux**.

**Les deux contrôles gratuits**, quand les coefficients sont réels :

- les racines sont **conjuguées** l'une de l'autre, ce qui élimine toute proposition non symétrique ;
- leur **somme** vaut $-\dfrac{b}{a} = 2$ et leur **produit** $\dfrac{c}{a} = 5$. Pour **a** : $1+2i+1-2i = 2$ et $(1+2i)(1-2i) = 1+4 = 5$. Les deux tombent juste.
::

::qcm-question{label="11." bonne="d" cours="qcm-g-reciproques"}
La fonction $f = \arctan$, définie et dérivable sur $\mathbb{R}$, a pour dérivée :

#a
$f'(x) = -\dfrac{1}{\sqrt{1-x^2}}$

#b
$f'(x) = -\dfrac{1}{1+x^2}$

#c
$f'(x) = \dfrac{1}{\sqrt{1-x^2}}$

#d
$f'(x) = \dfrac{1}{1+x^2}$

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

::qcm-question{label="12." bonne="c" cours="qcm-g-reciproques"}
La fonction $f$ définie et dérivable sur $\left]-\dfrac12\,;\dfrac12\right[$ par $f(x) = \arcsin(2x)$ a pour dérivée :

#a
$f'(x) = \dfrac{2}{\sqrt{1-2x^2}}$

#b
$f'(x) = \dfrac{1}{\sqrt{1-4x^2}}$

#c
$f'(x) = \dfrac{2}{\sqrt{1-4x^2}}$

#d
$f'(x) = \dfrac{-2}{\sqrt{1-4x^2}}$

#indice
$\left(\arcsin u\right)' = \dfrac{u'}{\sqrt{1-u^2}}$, avec $u = 2x$.

Le $u$ doit être remplacé **partout** : au numérateur par $u'$, et sous la racine par $u^2$ — donc $(2x)^2$, pas $2x^2$.

#solution
Avec $u = 2x$ et $u' = 2$ :

$$
f'(x) = \frac{2}{\sqrt{1-(2x)^2}} = \frac{2}{\sqrt{1-4x^2}}
$$

L'intervalle vient de la même condition : $\arcsin(2x)$ n'est dérivable que si $\lvert 2x\rvert < 1$, soit $\lvert x\rvert < \dfrac12$.

**Les distracteurs :** **b** oublie $u'$ ; **d** met le signe moins d'$\arccos$ sur $\arcsin$ ; **a** est **le remplacement à moitié** — le $u$ a bien été reporté au numérateur mais pas sous la racine, où $(2x)^2$ est devenu $2x^2$.

⚠️ **Le carré porte sur tout $u$.** C'est l'erreur la plus discrète des trois, parce que le résultat ressemble au bon. Écrire $\sqrt{1-(2x)^2}$ avant de développer coûte deux secondes et l'évite.
::

::qcm-question{label="13." bonne="a" cours="qcm-g-equations"}
Sur $[0\,;2\pi]$, l'ensemble des solutions de $\cos x = \dfrac12$ est :

#a
$\left\{\dfrac{\pi}{3}\ ;\ \dfrac{5\pi}{3}\right\}$

#b
$\left\{\dfrac{\pi}{3}\ ;\ \dfrac{2\pi}{3}\right\}$

#c
$\left\{\dfrac{\pi}{3}\right\}$

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

::qcm-question{label="14." bonne="b" cours="qcm-g-second-degre"}
$(1+i)^6 = $

#a
$8i$

#b
$-8i$

#c
$-8$

#d
$8$

#indice
Ne développe surtout pas la puissance sixième. Calcule d'abord $(1+i)^2$ : le résultat est remarquablement simple.

Ensuite, $(1+i)^6 = \left((1+i)^2\right)^3$.

#solution
**L'étape qui change tout :**

$$
(1+i)^2 = 1+2i+i^2 = 2i
$$

$$
(1+i)^6 = \left((1+i)^2\right)^3 = (2i)^3 = 8i^3 = 8\times i^2\times i = -8i
$$

**Le second chemin, par la forme exponentielle**, qui donne le même résultat et sert de contrôle :

$$
1+i = \sqrt2\,e^{i\frac{\pi}{4}} \qquad\text{donc}\qquad (1+i)^6 = \left(\sqrt2\right)^6e^{i\frac{6\pi}{4}} = 8\,e^{i\frac{3\pi}{2}} = -8i
$$

**Les distracteurs :** **a** perd un signe en calculant $i^3$ — c'est $-i$, pas $+i$ ; **c** confond $i^3$ et $i^2$ ; **d** oublie que la puissance produit un imaginaire.

⚠️ **Les puissances de $i$ tournent par quatre** : $i^1 = i$, $i^2 = -1$, $i^3 = -i$, $i^4 = 1$, puis ça recommence. Pour $i^n$, on divise $n$ par $4$ et seul le **reste** compte.
::

::qcm-question{label="15." bonne="d" cours="qcm-g-derivees"}
La fonction $f$ définie sur $\mathbb{R}^*$ par $f(x) = \dfrac{\cos x}{x}$ a pour dérivée :

#a
$f'(x) = \dfrac{-\sin x}{x^2}$

#b
$f'(x) = \dfrac{x\sin x-\cos x}{x^2}$

#c
$f'(x) = \dfrac{-x\sin x+\cos x}{x^2}$

#d
$f'(x) = \dfrac{-x\sin x-\cos x}{x^2}$

#indice
$\left(\dfrac{u}{v}\right)' = \dfrac{u'v-uv'}{v^2}$. L'ordre compte : c'est $u'v$ **moins** $uv'$, jamais l'inverse.

Ici $u = \cos x$, donc $u' = -\sin x$ : il y a **deux** signes moins à gérer, celui de la formule et celui du cosinus.

#solution
Avec $u = \cos x$, $u' = -\sin x$, $v = x$ et $v' = 1$ :

$$
f'(x) = \frac{(-\sin x)\times x-\cos x\times 1}{x^2} = \frac{-x\sin x-\cos x}{x^2}
$$

$$
\boxed{f'(x) = -\frac{x\sin x+\cos x}{x^2}}
$$

**Les distracteurs :** **a** ne dérive que le numérateur et oublie le terme $-uv'$ ; **c** perd le signe moins du second terme ; **b** intervertit les deux termes de la formule du quotient.

**Le contrôle de bon sens** : quand $x\to 0^+$, $f(x) = \dfrac{\cos x}{x}$ part vers $+\infty$ **en décroissant**, donc $f'$ doit y être très négative. Le numérateur de **d** tend vers $-1$, celui de **c** vers $+1$ : le contrôle tranche entre les deux propositions qui se ressemblent le plus.
::

::qcm-question{label="16." bonne="c" cours="qcm-g-usuelles"}
L'équation $e^{2x}-3e^x+2 = 0$ a pour ensemble de solutions :

#a
$\{\ln 2\}$

#b
$\{1\ ;\ 2\}$

#c
$\{0\ ;\ \ln 2\}$

#d
$\{\ln 3\ ;\ \ln 2\}$

#indice
Pose $X = e^x$. Comme $e^{2x} = \left(e^x\right)^2 = X^2$, l'équation devient un **second degré** tout à fait ordinaire.

Une fois $X$ trouvé, il reste à revenir à $x$ — et c'est l'étape qu'on oublie.

#solution
On pose $X = e^x$, avec $X > 0$ :

$$
X^2-3X+2 = 0 \qquad \Delta = 9-8 = 1 \qquad X = \frac{3\pm 1}{2}
$$

Donc $X = 1$ ou $X = 2$, les deux étant bien strictement positifs. **On revient ensuite à $x$** :

$$
e^x = 1 \iff x = 0 \qquad\qquad e^x = 2 \iff x = \ln 2
$$

$$
\boxed{S = \{0\ ;\ \ln 2\}}
$$

**Les distracteurs :** **b** est exactement l'oubli de la dernière étape — ce sont les valeurs de $X$, pas de $x$ ; **a** oublie la solution $X = 1$, sans doute parce que $\ln 1 = 0$ ne « ressemble » pas à une solution ; **d** lit les coefficients de l'équation au lieu de résoudre.

⚠️ **$X = 1$ donne $x = 0$, pas $x = 1$.** C'est la solution la plus souvent perdue de tout le chapitre.

**Le contrôle** : on reporte. Pour $x = 0$ : $e^0-3e^0+2 = 1-3+2 = 0$. Pour $x = \ln 2$ : $e^{2\ln 2} = 4$, donc $4-3\times 2+2 = 0$. Les deux conviennent.
::

::qcm-question{label="17." bonne="b" cours="qcm-g-reciproques"}
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

::qcm-question{label="18." bonne="d" cours="qcm-g-complexes"}
L'ensemble des points $M$ d'affixe $z$ tels que $\lvert z-1\rvert = \lvert z+i\rvert$ est :

#a
le cercle de centre $A(1\,;0)$ et de rayon $1$

#b
le disque de centre $O$ et de rayon $1$

#c
la droite $(AB)$, avec $A(1\,;0)$ et $B(0\,;-1)$

#d
la médiatrice du segment $[AB]$, avec $A(1\,;0)$ et $B(0\,;-1)$

#indice
$\lvert z-z_A\rvert$ n'est pas un calcul, c'est une **distance** : c'est la longueur $AM$.

Réécris $\lvert z+i\rvert$ sous la forme $\lvert z-z_B\rvert$ pour identifier $B$. La condition devient alors une phrase de géométrie très simple.

#solution
On réécrit les deux membres comme des distances :

$$
\lvert z-1\rvert = AM \ \text{ avec } z_A = 1 \qquad\qquad \lvert z+i\rvert = \lvert z-(-i)\rvert = BM \ \text{ avec } z_B = -i
$$

La condition s'écrit donc $AM = BM$ : $M$ est **équidistant** de $A(1\,;0)$ et de $B(0\,;-1)$.

$$
\boxed{\text{la médiatrice de }[AB]}
$$

**Les distracteurs :** **a** et **b** répondent à une condition de la forme $\lvert z-z_A\rvert = r$, qui donne un cercle — ou un disque avec une inégalité —, pas une égalité entre deux distances ; **c** confond la médiatrice avec la droite $(AB)$ elle-même, alors qu'elle lui est perpendiculaire.

**Les trois traductions à connaître**, et elles se distinguent au premier coup d'œil :

| Condition | Ensemble |
|---|---|
| $\lvert z-z_A\rvert = r$ | le **cercle** de centre $A$ et de rayon $r$ |
| $\lvert z-z_A\rvert \leqslant r$ | le **disque** de centre $A$ et de rayon $r$ |
| $\lvert z-z_A\rvert = \lvert z-z_B\rvert$ | la **médiatrice** de $[AB]$ |

⚠️ Le signe du terme constant est piégeux : $\lvert z+i\rvert$ correspond au point d'affixe $-i$, et non $+i$.
::

::qcm-question{label="19." bonne="a" cours="qcm-g-derivees"}
La fonction $f$ définie sur $\mathbb{R}$ par $f(x) = e^{\cos x}$ a pour dérivée :

#a
$f'(x) = -\sin x\,e^{\cos x}$

#b
$f'(x) = e^{\cos x}$

#c
$f'(x) = \sin x\,e^{\cos x}$

#d
$f'(x) = e^{-\sin x}$

#indice
$\left(e^u\right)' = u'e^u$ : l'exponentielle ne change pas, et la dérivée de l'exposant sort **en facteur devant**.

Ici $u = \cos x$. Le signe moins de $\cos'$ ne disparaît pas en route.

#solution
Avec $u = \cos x$ et $u' = -\sin x$ :

$$
f'(x) = -\sin x\,e^{\cos x}
$$

**Les distracteurs :** **b** oublie complètement $u'$ ; **c** oublie le signe moins de la dérivée du cosinus ; **d** dérive **dans** l'exposant au lieu de sortir le facteur — c'est l'erreur de structure la plus grave des trois, car elle change la nature de la fonction.

⚠️ **$\left(e^u\right)'$ n'est jamais $e^{u'}$.** L'exponentielle reste intacte ; c'est un **facteur** qui apparaît devant elle, pas une modification de l'exposant.

**Le contrôle** : en $x = 0$, le cosinus est à son maximum, donc $f = e^{\cos x}$ aussi, donc $f'(0) = 0$. Seules **a** et **c** l'annulent — et le signe se tranche juste après $0$, où le cosinus décroît, donc $f$ aussi, donc $f' < 0$. C'est **a**.
::

::qcm-question{label="20." bonne="c" cours="qcm-g-trigo"}
Laquelle de ces égalités est vraie pour **tout** réel $\theta$ ?

#a
$\sin\theta = \cos\left(\dfrac{\pi}{2}+\theta\right)$

#b
$\sin\theta = \cos(\pi-\theta)$

#c
$\sin\theta = \cos\left(\dfrac{\pi}{2}-\theta\right)$

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
- $\cos(\pi-0) = -1 \neq 0$, et $\cos(0-\pi) = -1 \neq 0$ : les propositions **b** et **d** valent toutes deux $-\cos\theta$.

**La leçon de méthode** : un seul contre-exemple ne suffit pas toujours, mais deux valeurs bien choisies — $0$ et $\dfrac{\pi}{2}$ — éliminent presque toujours tout.

Cette identité est celle qui permet de convertir un sinus en cosinus, indispensable dès qu'une équation mélange les deux.
::

:::

## Les rappels de cours de ce QCM

Ces tiroirs s'ouvrent depuis le bouton **Cours** des questions ratées. Ils sont regroupés ici pour une relecture d'ensemble avant de refaire le QCM.

::extrait-cours{id="qcm-g-derivees" titre="Dérivées : le mécanisme des composées" source="/cours/a1/remise-a-niveau-maths/fonctions-variable-reelle/cours#_5-les-formes-composées"}
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

**Le produit et le quotient**, qui reviennent dans la moitié des questions de dérivation :

$$
(uv)' = u'v+uv' \qquad\qquad \left(\frac{u}{v}\right)' = \frac{u'v-uv'}{v^2}
$$

⚠️ L'ordre du quotient n'est pas symétrique : c'est $u'v$ **moins** $uv'$. L'intervertir change le signe du résultat.
::

::extrait-cours{id="qcm-g-trigo" titre="Valeurs remarquables, identité fondamentale, symétries" source="/cours/a1/remise-a-niveau-maths/trigonometrie/cours#_4-les-valeurs-remarquables"}
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

::extrait-cours{id="qcm-g-reciproques" titre="arccos, arcsin, arctan : valeurs et dérivées" source="/cours/a1/remise-a-niveau-maths/trigonometrie/cours#_9-les-fonctions-réciproques-arccos-arcsin-arctan"}
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

::extrait-cours{id="qcm-g-equations" titre="Résoudre une équation trigonométrique" source="/cours/a1/remise-a-niveau-maths/trigonometrie/cours#_8-résoudre-une-équation-trigonométrique"}
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

::extrait-cours{id="qcm-g-complexes" titre="Complexes : quotients, module et argument" source="/cours/a1/remise-a-niveau-maths/nombres-complexes/cours#_5-module-et-argument"}
**Le quotient.** Une fraction n'est pas une forme algébrique tant que son dénominateur n'est pas réel. On multiplie donc les deux termes par le **conjugué du dénominateur** :

$$
\frac{z_1}{z_2} = \frac{z_1\overline{z_2}}{z_2\overline{z_2}} \qquad\text{avec}\qquad z\bar z = a^2+b^2
$$

Ce dénominateur est **toujours une somme de carrés**, donc réel et positif. C'est tout l'intérêt de la manœuvre.

**Le module** est une longueur — la distance de l'origine au point d'affixe $z$ :

$$
\lvert z\rvert = \sqrt{a^2+b^2} \qquad\qquad \lvert z-z_A\rvert = AM
$$

**L'argument** se trouve avec les **deux** rapports, jamais un seul :

$$
\cos\theta = \frac{a}{\rho} \qquad\qquad \sin\theta = \frac{b}{\rho}
$$

⚠️ **Le cosinus seul ne suffit jamais.** Il laisse deux angles possibles, symétriques par rapport à l'axe horizontal ; c'est le **signe du sinus** qui tranche. Autrement dit, le couple (signe de $a$, signe de $b$) désigne un quadrant, et un seul.

**Les trois ensembles de points à reconnaître :**

| Condition | Ensemble |
|---|---|
| $\lvert z-z_A\rvert = r$ | le **cercle** de centre $A$, de rayon $r$ |
| $\lvert z-z_A\rvert \leqslant r$ | le **disque** de centre $A$, de rayon $r$ |
| $\lvert z-z_A\rvert = \lvert z-z_B\rvert$ | la **médiatrice** de $[AB]$ |

**La forme exponentielle**, enfin, avec $\rho > 0$ :

$$
z = \rho\left(\cos\theta+i\sin\theta\right) = \rho\,e^{i\theta} \qquad \overline{\rho e^{i\theta}} = \rho e^{-i\theta}
$$
::

::extrait-cours{id="qcm-g-second-degre" titre="Second degré dans ℂ et puissances de i" source="/cours/a1/remise-a-niveau-maths/nombres-complexes/cours#_3-équation-du-second-degré"}
**Dans $\mathbb{C}$, un discriminant négatif n'empêche rien** : il donne toujours deux solutions, conjuguées l'une de l'autre. La seule différence avec $\mathbb{R}$ est l'écriture de la racine :

$$
\Delta < 0 \quad\Longrightarrow\quad \sqrt{\Delta} = i\sqrt{\lvert\Delta\rvert} \qquad\text{puis}\qquad z = \frac{-b\pm i\sqrt{\lvert\Delta\rvert}}{2a}
$$

⚠️ On écrit $i\sqrt{\lvert\Delta\rvert}$, **jamais** $\sqrt{\Delta}$ : la racine carrée d'un nombre négatif n'a pas de sens en tant que telle.

**Les deux contrôles gratuits**, quand $a$, $b$ et $c$ sont réels :

$$
z_1+z_2 = -\frac{b}{a} \qquad\qquad z_1z_2 = \frac{c}{a}
$$

Les deux racines étant conjuguées, toute proposition qui n'est pas symétrique est fausse d'emblée.

**Les puissances de $i$ tournent par quatre :**

$$
i^1 = i \qquad i^2 = -1 \qquad i^3 = -i \qquad i^4 = 1
$$

Pour $i^n$, on divise $n$ par $4$ et **seul le reste compte**.

**Pour une puissance élevée d'un complexe**, on ne développe pas : on passe par la forme exponentielle, ou on calcule d'abord le carré s'il est simple. $(1+i)^2 = 2i$ transforme n'importe quelle puissance paire de $1+i$ en puissance de $2i$.

$$
z^n = \rho^n e^{in\theta}
$$
::

::extrait-cours{id="qcm-g-usuelles" titre="exp, ln, équations et croissances comparées" source="/cours/a1/remise-a-niveau-maths/fonctions-usuelles/cours#_4-limites-et-croissances-comparées"}
**La hiérarchie des croissances**, à connaître sans hésiter — c'est ce qui lève l'indétermination sans aucun calcul :

$$
\boxed{\text{exponentielle} \gg \text{puissances} \gg \text{logarithme}}
$$

$$
\lim_{x\to+\infty}\frac{e^x}{x^n} = +\infty \qquad \lim_{x\to+\infty}\frac{\ln x}{x^n} = 0 \qquad \lim_{x\to+\infty}x^ne^{-x} = 0
$$

L'exposant $n$ ne change rien : l'exponentielle finit toujours par l'emporter.

**Les équations en exp.** Dès que $e^{2x}$ apparaît à côté de $e^x$, on pose $X = e^x$ — avec la contrainte $X > 0$ — et on résout un second degré ordinaire.

$$
e^{2x} = \left(e^x\right)^2 = X^2
$$

⚠️ **La dernière étape est celle qu'on oublie** : une fois $X$ trouvé, il faut revenir à $x$ par $x = \ln X$. Et $X = 1$ donne $x = 0$, pas $x = 1$.

**Les règles algébriques**, qui servent à préparer le terrain :

$$
e^{a+b} = e^ae^b \qquad \ln(ab) = \ln a+\ln b \qquad \ln\left(a^n\right) = n\ln a \qquad e^{\ln a} = a
$$

**Le sens de variation ne change jamais** : $\exp$ et $\ln$ sont toutes deux **strictement croissantes**, donc une inéquation qu'on leur applique **garde** son sens.
::
