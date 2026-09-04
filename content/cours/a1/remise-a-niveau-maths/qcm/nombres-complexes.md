---
title: QCM 4 — Nombres complexes
description: Vingt questions à choix unique sur la forme algébrique, le conjugué, les quotients, le second degré, les affixes, le module, l'argument et la forme exponentielle.
type: qcm
annee: A1
matiere: Remise à niveau en maths
ordre: 4
icone: i-lucide-git-compare-arrows
---

::rappel{titre="Comment se déroule ce QCM" icone="i-lucide-compass"}
Vingt questions, **une seule bonne réponse** par question. On répond à tout, puis on clique sur **Corriger** en bas de page : rien ne se révèle avant.

Une fois la copie rendue, chaque question ratée ouvre ses trois boutons — **Indice**, **Voir la solution**, **Cours**.

Un conseil propre à ce chapitre : la moitié des erreurs de QCM sur les complexes sont des **erreurs de signe** sur $i^2$. Quand un calcul te paraît trop simple, relis la ligne où $i^2$ disparaît.
::

::carte-lien{to="/cours/a1/remise-a-niveau-maths/nombres-complexes/cours" titre="Le cours du chapitre" description="Forme algébrique, opérations, second degré, affixes, module et argument, formes trigonométrique et exponentielle, ensembles de points" type="cours" meta="8 sections"}
::

:::qcm{titre="QCM 4 — Nombres complexes" theme="De la forme algébrique aux ensembles de points, dans l'ordre du cours" duree="1 h" icone="i-lucide-git-compare-arrows"}

::qcm-question{label="1." bonne="c" cours="qcm-nc-algebrique"}
La partie imaginaire de $z = 3-2i$ est :

#a
$-2i$

#b
$2$

#c
$-2$

#d
$3$

#indice
La partie imaginaire est un nombre **réel** : c'est le coefficient devant $i$, et le $i$ n'en fait pas partie.

Attention aussi au signe : il est porté par le coefficient.

#solution
Avec $z = a+bi$, on a $\mathcal{R}e(z) = a$ et $\mathcal{I}m(z) = b$.

$$
z = 3+(-2)i \quad\Longrightarrow\quad \mathcal{R}e(z) = 3,\ \ \mathcal{I}m(z) = -2
$$

⚠️ **Deux pièges dans une seule question :**

- $\mathcal{I}m(z)$ ne contient **jamais** de $i$ — c'est un réel. La proposition **a** est l'erreur la plus fréquente du chapitre ;
- le signe moins appartient à la partie imaginaire, ce qui élimine **b**.
::

::qcm-question{label="2." bonne="b" cours="qcm-nc-algebrique"}
$(2+3i)(1-i) = $

#a
$5-i$

#b
$5+i$

#c
$-1+i$

#d
$2-3i$

#indice
Double distributivité, exactement comme $(a+b)(c+d)$. Le seul point spécifique arrive à la fin : le terme en $i^2$ devient réel **et change de signe**.

#solution
$$
(2+3i)(1-i) = 2-2i+3i-3i^2
$$

On remplace $i^2$ par $-1$, donc $-3i^2 = +3$ :

$$
= 2+3+(-2+3)i = 5+i
$$

⚠️ Le distracteur **a** correspond à l'oubli du changement de signe sur le terme imaginaire ; on obtient $5-i$ en confondant $-2i+3i$ avec $-2i-3i$ ou similaire. Recompter les deux termes en $i$ séparément est le meilleur garde-fou.
::

::qcm-question{label="3." bonne="a" cours="qcm-nc-algebrique"}
$(1+i)^2 = $

#a
$2i$

#b
$2$

#c
$1+i^2$

#d
$1+2i$

#indice
Identité remarquable $(a+b)^2 = a^2+2ab+b^2$ avec $b = i$. Le terme $b^2$ vaut $i^2 = -1$ : il **annule exactement** le $a^2$.

Ce résultat revient sans cesse, il vaut la peine d'être retenu.

#solution
$$
(1+i)^2 = 1^2+2\times 1\times i+i^2 = 1+2i-1 = 2i
$$

**À mémoriser, les deux se compensent joliment :**

$$
(1+i)^2 = 2i \qquad (1-i)^2 = -2i
$$

Ces carrés transforment un binôme en imaginaire pur, ce qui rend les grandes puissances immédiates : $(1+i)^4 = (2i)^2 = -4$, et $(1+i)^8 = 16$.
::

::qcm-question{label="4." bonne="c" cours="qcm-nc-conjugue"}
Pour tout complexe $z$, le produit $z\bar z$ vaut :

#a
$z^2$

#b
$\lvert z\rvert$

#c
$\lvert z\rvert^2$

#d
un imaginaire pur

#indice
Écris $z = a+bi$ et développe $(a+bi)(a-bi)$ : c'est l'identité $(x+y)(x-y) = x^2-y^2$, et le $y^2$ apporte un $i^2$.

Le résultat est-il réel ? positif ?

#solution
$$
z\bar z = (a+bi)(a-bi) = a^2-(bi)^2 = a^2-b^2i^2 = a^2+b^2
$$

Et $a^2+b^2$ est exactement $\lvert z\rvert^2$.

$$
\boxed{z\bar z = \lvert z\rvert^2}
$$

Le résultat est **toujours un réel positif** — jamais un imaginaire pur. C'est précisément cette propriété qui fait marcher la méthode du quotient : multiplier par le conjugué du dénominateur le rend réel.

⚠️ Ne pas confondre avec le **carré** : $z^2 = a^2-b^2+2abi$ n'a aucune raison d'être réel.
::

::qcm-question{label="5." bonne="b" cours="qcm-nc-conjugue"}
$\dfrac{1}{i} = $

#a
$i$

#b
$-i$

#c
$1$

#d
$-1$

#indice
Applique la méthode générale : multiplie haut et bas par le conjugué de $i$, qui est $-i$. Ou plus rapide, multiplie haut et bas par $i$ et sers-toi de $i^2 = -1$.

#solution
$$
\frac1i = \frac{1\times i}{i\times i} = \frac{i}{i^2} = \frac{i}{-1} = -i
$$

$$
\boxed{\frac1i = -i}
$$

**Un raccourci à connaître par cœur** : il apparaît dès qu'une équation a un coefficient $i$ devant l'inconnue. Résoudre $iz = 3$ donne $z = \dfrac3i = -3i$, et non $3i$.

**Le contrôle** : $i\times(-i) = -i^2 = 1$. C'est bien l'inverse.
::

::qcm-question{label="6." bonne="a" cours="qcm-nc-conjugue"}
La forme algébrique de $\dfrac{3+2i}{1-i}$ est :

#a
$\dfrac12+\dfrac52 i$

#b
$\dfrac52+\dfrac12 i$

#c
$3+2i$

#d
$\dfrac{1+5i}{4}$

#indice
Multiplie numérateur et dénominateur par le conjugué du dénominateur, soit $1+i$. Le dénominateur devient $1^2+1^2$, un réel.

Attention à ne pas oublier de développer le numérateur : il ne se contente pas de recopier.

#solution
$$
\frac{3+2i}{1-i} = \frac{(3+2i)(1+i)}{(1-i)(1+i)} = \frac{3+3i+2i+2i^2}{1^2+1^2}
$$

$$
= \frac{3-2+5i}{2} = \frac{1+5i}{2}
$$

$$
\boxed{z = \frac12+\frac52 i}
$$

⚠️ Le distracteur **d** est le piège du dénominateur : $(1-i)(1+i) = 1+1 = 2$, et non $4$. La formule est $a^2+b^2$, pas $(a+b)^2$.

**Le contrôle** : $\left(\dfrac12+\dfrac52 i\right)(1-i) = \dfrac12-\dfrac12 i+\dfrac52 i-\dfrac52 i^2 = \dfrac12+\dfrac52+2i = 3+2i$. ✓
::

::qcm-question{label="7." bonne="b" cours="qcm-nc-second-degre"}
Dans $\mathbb{C}$, l'équation $z^2+z+1 = 0$ a pour solutions :

#a
$\dfrac{-1\pm\sqrt3}{2}$

#b
$\dfrac{-1\pm i\sqrt3}{2}$

#c
aucune solution

#d
$\dfrac{1\pm i\sqrt3}{2}$

#indice
Calcule le discriminant. S'il est négatif, l'équation n'a pas de solution **réelle**, mais elle en a toujours deux dans $\mathbb{C}$ — c'est tout l'intérêt du chapitre.

La racine d'un discriminant négatif s'écrit $i\sqrt{\lvert\Delta\rvert}$, jamais $\sqrt{\Delta}$.

#solution
Avec $a = b = c = 1$ :

$$
\Delta = 1^2-4\times 1\times 1 = -3 \quad\Longrightarrow\quad \sqrt\Delta = i\sqrt3
$$

$$
z = \frac{-b\pm i\sqrt{\lvert\Delta\rvert}}{2a} = \frac{-1\pm i\sqrt3}{2}
$$

**Les trois distracteurs encodent trois erreurs distinctes :**

- **a** oublie le $i$ — c'est écrire $\sqrt{-3} = \sqrt3$, ce qui n'a pas de sens ;
- **c** est le réflexe de terminale, valable dans $\mathbb{R}$ mais faux dans $\mathbb{C}$ ;
- **d** oublie le signe moins de $-b$.

**Le contrôle par somme et produit** : la somme des racines doit valoir $-\dfrac{b}{a} = -1$. Ici $\dfrac{-1+i\sqrt3}{2}+\dfrac{-1-i\sqrt3}{2} = -1$. ✓
::

::qcm-question{label="8." bonne="c" cours="qcm-nc-second-degre"}
Pour une équation $az^2+bz+c = 0$ à coefficients réels et de discriminant $\Delta = -16$, on a :

#a
$\sqrt\Delta = -4$

#b
$\sqrt\Delta = 4$

#c
$\sqrt\Delta = 4i$

#d
$\Delta$ n'a pas de racine

#indice
On cherche un nombre dont le carré vaut $-16$. Vérifie chaque proposition en l'élevant au carré.

#solution
$$
(4i)^2 = 16i^2 = -16 \qquad\text{donc}\qquad \sqrt\Delta = 4i
$$

En pratique on écrit toujours $\sqrt{\Delta} = i\sqrt{\lvert\Delta\rvert}$ : ici $i\sqrt{16} = 4i$.

**Pourquoi les autres tombent :** $(-4)^2 = 16$ et $4^2 = 16$, tous deux positifs. Et la proposition **d** confond « pas de racine réelle » avec « pas de racine ».

⚠️ **Ne jamais écrire $\sqrt{-16}$.** La notation $\sqrt{\ }$ est réservée aux réels positifs ; dans $\mathbb{C}$ on fait sortir le $i$ d'abord.
::

::qcm-question{label="9." bonne="b" cours="qcm-nc-affixes"}
$A$ et $B$ ont pour affixes $z_A = 1+2i$ et $z_B = 4-i$. L'affixe du vecteur $\overrightarrow{AB}$ est :

#a
$5+i$

#b
$3-3i$

#c
$-3+3i$

#d
$\dfrac52+\dfrac12 i$

#indice
Affixe d'un vecteur : **extrémité moins origine**. Dans l'autre sens on obtient le vecteur opposé, qui est le distracteur suivant.

#solution
$$
z_{\overrightarrow{AB}} = z_B-z_A = (4-i)-(1+2i) = (4-1)+(-1-2)i = 3-3i
$$

**Les trois distracteurs sont les trois erreurs classiques :**

- **a** additionne au lieu de soustraire ;
- **c** soustrait dans le mauvais sens : c'est $z_{\overrightarrow{BA}}$, le vecteur opposé ;
- **d** est l'affixe du **milieu** de $[AB]$, c'est-à-dire $\dfrac{z_A+z_B}{2}$.

**Le repère** : « extrémité moins origine », comme pour les coordonnées d'un vecteur en géométrie ordinaire.
::

::qcm-question{label="10." bonne="c" cours="qcm-nc-module"}
$\lvert 3-4i\rvert = $

#a
$-1$

#b
$7$

#c
$5$

#d
$25$

#indice
Le module est une **longueur** : c'est la distance de l'origine au point $(3\,;-4)$, donnée par Pythagore. Il est donc toujours positif, et il y a une racine carrée à la fin.

#solution
$$
\lvert 3-4i\rvert = \sqrt{3^2+(-4)^2} = \sqrt{9+16} = \sqrt{25} = 5
$$

**Les distracteurs :** **a** additionne les parties ($3-4$), **b** les additionne en valeur absolue, **d** oublie la racine carrée — c'est $\lvert z\rvert^2$.

⚠️ Le module est **toujours positif ou nul**, quels que soient les signes de $a$ et $b$ : ils passent au carré. Une réponse négative est éliminable sans calcul.

Le triangle $3$, $4$, $5$ revient sans arrêt, tout comme $1$, $\sqrt3$, $2$.
::

::qcm-question{label="11." bonne="a" cours="qcm-nc-module"}
Pour tous complexes non nuls $z_1$ et $z_2$ :

#a
$\lvert z_1z_2\rvert = \lvert z_1\rvert\lvert z_2\rvert$

#b
$\lvert z_1+z_2\rvert = \lvert z_1\rvert+\lvert z_2\rvert$

#c
$\lvert z_1z_2\rvert = \lvert z_1\rvert+\lvert z_2\rvert$

#d
$\lvert \bar z_1\rvert = -\lvert z_1\rvert$

#indice
Le module se comporte bien avec les **produits** et les quotients, mal avec les sommes. Pour éliminer les mauvaises propositions, teste $z_1 = 1$ et $z_2 = -1$.

#solution
$$
\boxed{\lvert z_1z_2\rvert = \lvert z_1\rvert\lvert z_2\rvert} \qquad \left\lvert\frac{z_1}{z_2}\right\rvert = \frac{\lvert z_1\rvert}{\lvert z_2\rvert} \qquad \lvert\bar z\rvert = \lvert z\rvert
$$

**Le contre-exemple qui tue la proposition b** : avec $z_1 = 1$ et $z_2 = -1$, la somme vaut $0$ donc son module vaut $0$, tandis que $\lvert z_1\rvert+\lvert z_2\rvert = 2$. En général on a seulement l'**inégalité triangulaire** $\lvert z_1+z_2\rvert \leqslant \lvert z_1\rvert+\lvert z_2\rvert$.

La proposition **d** est absurde : un module est positif, et conjuguer ne change pas la distance à l'origine — c'est une symétrie.

**La conséquence pratique** : devant un produit ou une puissance, on passe en module et argument. Devant une somme, on reste en forme algébrique.
::

::qcm-question{label="12." bonne="c" cours="qcm-nc-module"}
Un argument de $-5$ est :

#a
$0$

#b
$-\dfrac{\pi}{2}$

#c
$\pi$

#d
$-5$ n'a pas d'argument

#indice
$-5$ est un réel **négatif** : le point correspondant est sur le demi-axe horizontal, du côté des abscisses négatives.

Quel angle mène à ce demi-axe ?

#solution
Le point d'affixe $-5$ a pour coordonnées $(-5\,;0)$ : il est sur le demi-axe horizontal négatif, atteint par l'angle $\pi$.

$$
\lvert -5\rvert = 5 \qquad \arg(-5) = \pi\ [2\pi]
$$

$$
-5 = 5\left(\cos\pi+i\sin\pi\right) = 5e^{i\pi}
$$

⚠️ **L'erreur à ne pas commettre** : écrire $-5 = -5e^{i0}$. La forme trigonométrique et la forme exponentielle exigent un module **strictement positif**. Le signe est porté par l'argument, jamais par le module.

Tout complexe non nul a un argument ; seul $0$ n'en a pas, puisqu'il ne définit aucune direction.
::

::qcm-question{label="13." bonne="d" cours="qcm-nc-module"}
On cherche un argument $\theta$ de $z$, et on trouve $\cos\theta = \dfrac{\sqrt2}{2}$. On peut conclure :

#a
$\theta = \dfrac{\pi}{4}$

#b
$\theta = -\dfrac{\pi}{4}$

#c
$\theta = \dfrac{3\pi}{4}$

#d
il manque le sinus pour trancher

#indice
Combien d'angles d'un tour complet ont ce cosinus ? Trace la droite verticale d'abscisse $\dfrac{\sqrt2}{2}$ et regarde combien de fois elle coupe le cercle.

#solution
La droite verticale d'abscisse $\dfrac{\sqrt2}{2}$ coupe le cercle en **deux** points, symétriques par rapport à l'axe horizontal : $\dfrac{\pi}{4}$ et $-\dfrac{\pi}{4}$. Le cosinus seul ne les départage pas.

$$
\cos\theta = \frac{a}{\lvert z\rvert} \quad\textbf{et}\quad \sin\theta = \frac{b}{\lvert z\rvert}
$$

**Les deux rapports sont nécessaires**, toujours. C'est le signe du sinus qui désigne le bon des deux candidats.

La proposition **c** est en plus fausse dans tous les cas : $\cos\dfrac{3\pi}{4} = -\dfrac{\sqrt2}{2}$, avec un signe moins.

C'est l'erreur la plus coûteuse du chapitre, parce qu'elle donne un résultat qui a l'air juste — bon module, bon angle « à un signe près ».
::

::qcm-question{label="14." bonne="b" cours="qcm-nc-trigo"}
La forme trigonométrique de $z = 1-i$ est :

#a
$\left[\sqrt2\,;\dfrac{\pi}{4}\right]$

#b
$\left[\sqrt2\,;-\dfrac{\pi}{4}\right]$

#c
$\left[2\,;-\dfrac{\pi}{4}\right]$

#d
$\left[\sqrt2\,;\dfrac{3\pi}{4}\right]$

#indice
Module d'abord : $\sqrt{1^2+(-1)^2}$. Puis les deux rapports.

La partie imaginaire est négative : dans quel quadrant se trouve le point, et quel doit être le signe de l'angle ?

#solution
$$
\lvert z\rvert = \sqrt{1+1} = \sqrt2
$$

$$
\cos\theta = \frac{1}{\sqrt2} = \frac{\sqrt2}{2} > 0 \qquad \sin\theta = \frac{-1}{\sqrt2} = -\frac{\sqrt2}{2} < 0
$$

Cosinus positif, sinus négatif : **quatrième quadrant**, donc $\theta = -\dfrac{\pi}{4}$.

$$
\boxed{z = \left[\sqrt2\,;-\frac{\pi}{4}\right] = \sqrt2\,e^{-i\frac{\pi}{4}}}
$$

**Les distracteurs :** **a** est $1+i$ (on a oublié le signe du sinus), **c** confond $\lvert z\rvert$ et $\lvert z\rvert^2$, **d** place le point dans le mauvais quadrant.

**Le contrôle systématique** : on redéveloppe. $\sqrt2\left(\dfrac{\sqrt2}{2}-i\dfrac{\sqrt2}{2}\right) = 1-i$. ✓
::

::qcm-question{label="15." bonne="a" cours="qcm-nc-exponentielle"}
La forme algébrique de $2e^{i\frac{\pi}{3}}$ est :

#a
$1+i\sqrt3$

#b
$\sqrt3+i$

#c
$2+2i\sqrt3$

#d
$\dfrac12+i\dfrac{\sqrt3}{2}$

#indice
$e^{i\theta}$ n'est qu'un nom court pour $\cos\theta+i\sin\theta$. Remplace, puis multiplie **les deux** parties par le module.

Attention à ne pas confondre $\cos\dfrac{\pi}{3}$ et $\cos\dfrac{\pi}{6}$.

#solution
$$
2e^{i\frac{\pi}{3}} = 2\left(\cos\frac{\pi}{3}+i\sin\frac{\pi}{3}\right) = 2\left(\frac12+i\frac{\sqrt3}{2}\right)
$$

$$
\boxed{z = 1+i\sqrt3}
$$

**Les distracteurs :** **b** échange cosinus et sinus (ce serait $\dfrac{\pi}{6}$), **c** multiplie par $2$ sans avoir divisé — on a pris $\cos = 1$ et $\sin = \sqrt3$ —, **d** oublie complètement le module.

**Le contrôle** : $\lvert 1+i\sqrt3\rvert = \sqrt{1+3} = 2$, ce qui est bien le module de départ. Toute réponse dont le module n'est pas $2$ était éliminable.
::

::qcm-question{label="16." bonne="c" cours="qcm-nc-exponentielle"}
Pour $z = re^{i\theta}$ avec $r > 0$ et $n$ entier, $z^n$ vaut :

#a
$r\,e^{in\theta}$

#b
$r^n e^{i\theta}$

#c
$r^n e^{in\theta}$

#d
$nr\,e^{in\theta}$

#indice
L'exponentielle suit ses règles habituelles : $\left(e^{a}\right)^n = e^{na}$. Et le module, lui, est un nombre ordinaire qu'on élève à la puissance $n$.

Les deux subissent l'exposant, mais pas de la même façon.

#solution
$$
\left(re^{i\theta}\right)^n = r^n\,e^{in\theta}
$$

Le module est **élevé** à la puissance $n$, l'argument est **multiplié** par $n$. Confondre les deux opérations est l'erreur que guettent les distracteurs **a** et **b**.

**Les trois règles du chapitre, ensemble :**

$$
re^{i\theta}\times r'e^{i\theta'} = rr'e^{i(\theta+\theta')} \qquad \frac{re^{i\theta}}{r'e^{i\theta'}} = \frac{r}{r'}e^{i(\theta-\theta')} \qquad \left(re^{i\theta}\right)^n = r^ne^{in\theta}
$$

**Les modules se multiplient, les arguments s'additionnent.** C'est pourquoi on passe en exponentielle devant un produit ou une puissance, et qu'on reste en algébrique devant une somme.
::

::qcm-question{label="17." bonne="b" cours="qcm-nc-exponentielle"}
Avec $z_1 = 2e^{i\frac{\pi}{4}}$ et $z_2 = 3e^{i\frac{\pi}{6}}$, le produit $z_1z_2$ vaut :

#a
$5e^{i\frac{5\pi}{12}}$

#b
$6e^{i\frac{5\pi}{12}}$

#c
$6e^{i\frac{\pi}{24}}$

#d
$6e^{i\frac{2\pi}{10}}$

#indice
Modules multipliés, arguments additionnés. Pour la somme $\dfrac{\pi}{4}+\dfrac{\pi}{6}$, passe par le dénominateur commun $12$.

#solution
**Les modules se multiplient** : $2\times 3 = 6$.

**Les arguments s'additionnent**, au dénominateur commun $12$ :

$$
\frac{\pi}{4}+\frac{\pi}{6} = \frac{3\pi}{12}+\frac{2\pi}{12} = \frac{5\pi}{12}
$$

$$
\boxed{z_1z_2 = 6\,e^{i\frac{5\pi}{12}}}
$$

**Les distracteurs :** **a** additionne les modules, **c** multiplie les arguments au lieu de les additionner, **d** additionne numérateurs et dénominateurs séparément — l'erreur de fraction classique.
::

::qcm-question{label="18." bonne="d" cours="qcm-nc-exponentielle"}
$(1+i)^8 = $

#a
$1$

#b
$256$

#c
$16i$

#d
$16$

#indice
Développer huit fois serait interminable. Passe en forme exponentielle : $1+i$ a pour module $\sqrt2$ et pour argument $\dfrac{\pi}{4}$.

L'argument obtenu sera un multiple entier de $2\pi$ — que vaut alors l'exponentielle ?

#solution
$$
1+i = \sqrt2\,e^{i\frac{\pi}{4}} \quad\Longrightarrow\quad (1+i)^8 = \left(\sqrt2\right)^8 e^{8i\frac{\pi}{4}} = \left(\sqrt2\right)^8 e^{2i\pi}
$$

Le module : $\left(\sqrt2\right)^8 = \left(2^{1/2}\right)^8 = 2^4 = 16$.

L'argument : $2\pi$ est un tour complet, donc $e^{2i\pi} = 1$.

$$
\boxed{(1+i)^8 = 16}
$$

**Le contrôle par l'autre chemin** : $(1+i)^2 = 2i$, donc $(1+i)^4 = (2i)^2 = -4$, et $(1+i)^8 = (-4)^2 = 16$. Les deux méthodes concordent.

Le distracteur **b** est $2^8$ : c'est l'erreur consistant à élever $2$ au lieu de $\sqrt2$.
::

::qcm-question{label="19." bonne="b" cours="qcm-nc-ensembles"}
L'ensemble des points $M$ d'affixe $z$ tels que $\lvert z-2+i\rvert = 3$ est :

#a
le cercle de centre $(2\,;1)$ et de rayon $3$

#b
le cercle de centre $(2\,;-1)$ et de rayon $3$

#c
le disque de centre $(2\,;-1)$ et de rayon $3$

#d
la médiatrice d'un segment

#indice
Un module est une distance : $\lvert z-z_A\rvert = AM$. Il faut donc faire apparaître la forme $z-z_A$, quitte à réécrire l'intérieur.

$z-2+i$ s'écrit $z-(\ldots)$ — attention aux signes.

Et l'égalité est **stricte**, pas une inégalité.

#solution
On réécrit l'intérieur du module sous la forme $z-z_A$ :

$$
z-2+i = z-(2-i)
$$

La condition $\lvert z-(2-i)\rvert = 3$ dit que la distance de $M$ au point d'affixe $2-i$, soit $A(2\,;-1)$, vaut constamment $3$.

$$
\boxed{\text{le cercle de centre } A(2\,;-1) \text{ et de rayon } 3}
$$

⚠️ **Le piège du signe**, qui fait tomber la moitié des candidats : ce qui figure **après** le signe moins est l'affixe du centre. Il faut donc changer les signes de ce qu'on lit dans l'énoncé — d'où $2-i$ et non $2+i$. La proposition **a** est cette erreur exacte.

**La proposition c confond égalité et inégalité** : $=$ donne un cercle, $\leqslant$ donne un disque.
::

::qcm-question{label="20." bonne="c" cours="qcm-nc-ensembles"}
Soit $Z$ un complexe écrit sous forme algébrique. « $Z$ est un imaginaire pur » se traduit par :

#a
$\mathcal{I}m(Z) = 0$

#b
$\lvert Z\rvert = 1$

#c
$\mathcal{R}e(Z) = 0$

#d
$Z = \bar Z$

#indice
Un imaginaire pur s'écrit $bi$ : il n'a **pas** de partie réelle. Ne confonds pas avec « $Z$ est réel », qui est la condition symétrique.

#solution
$$
Z \text{ imaginaire pur} \iff \mathcal{R}e(Z) = 0 \qquad\qquad Z \text{ réel} \iff \mathcal{I}m(Z) = 0
$$

Les propositions **a** et **d** sont deux écritures de « $Z$ est **réel** », car $Z = \bar Z$ signifie exactement que la partie imaginaire est nulle.

La proposition **b** décrit le cercle unité, sans rapport.

**En pratique**, pour un quotient : on le met sous forme algébrique en multipliant par le conjugué du dénominateur, puis on annule la partie voulue. L'équation obtenue décrit une droite si elle est du premier degré, un cercle si $x^2+y^2$ y apparaît.

⚠️ Et on **exclut les points interdits** : celui qui annule le dénominateur, et — pour « imaginaire pur » — celui qui annule $Z$, puisque $0$ n'est pas un imaginaire pur.
::

:::

## Les rappels de cours de ce QCM

Ces tiroirs s'ouvrent depuis le bouton **Cours** des questions ratées.

::extrait-cours{id="qcm-nc-algebrique" titre="Forme algébrique et opérations" source="/cours/a1/remise-a-niveau-maths/nombres-complexes/cours#_2-les-opérations"}
Tout complexe s'écrit $z = a+bi$ avec $a$ et $b$ **réels** : $\mathcal{R}e(z) = a$, $\mathcal{I}m(z) = b$.

⚠️ La partie imaginaire est un **réel**, sans le $i$ : $\mathcal{I}m(3-2i) = -2$.

Les calculs se mènent comme avec des lettres, avec une seule règle en plus, $i^2 = -1$ :

$$
(a+bi)+(c+di) = (a+c)+(b+d)i \qquad (a+bi)(c+di) = ac-bd+(ad+bc)i
$$

Dans le produit, le terme en $i^2$ **change de signe et rejoint la partie réelle**. C'est là que se logent la plupart des erreurs.

**Les identités remarquables valent telles quelles :**

$$
(a+bi)^2 = a^2-b^2+2abi \qquad (1+i)^2 = 2i \qquad (1-i)^2 = -2i
$$

**Les puissances de $i$ tournent en boucle de quatre** : $i^0 = 1$, $i^1 = i$, $i^2 = -1$, $i^3 = -i$, puis tout recommence. Pour $i^n$, on divise $n$ par $4$ et on garde le reste.
::

::extrait-cours{id="qcm-nc-conjugue" titre="Conjugué et quotient" source="/cours/a1/remise-a-niveau-maths/nombres-complexes/cours#_2-les-opérations"}
Le conjugué de $z = a+bi$ est $\bar z = a-bi$ : seul le signe de la partie imaginaire change. Géométriquement, c'est la symétrie par rapport à l'axe horizontal.

$$
z\bar z = a^2+b^2 = \lvert z\rvert^2 \qquad \overline{z_1z_2} = \overline{z_1}\,\overline{z_2} \qquad z = \bar z \iff z \text{ est réel}
$$

Le produit $z\bar z$ est **toujours un réel positif**. C'est ce qui fait marcher la méthode centrale du chapitre :

$$
\frac{a+bi}{c+di} = \frac{(a+bi)(c-di)}{c^2+d^2}
$$

**Multiplier haut et bas par le conjugué du dénominateur**, puis distribuer le dénominateur réel sur chaque partie.

⚠️ Le dénominateur devient $c^2+d^2$, et non $(c+d)^2$.

**Deux raccourcis qui font gagner du temps :**

$$
\frac1i = -i \qquad \frac{1}{a+bi} = \frac{a-bi}{a^2+b^2}
$$

Un quotient n'est **pas terminé** tant qu'il reste un $i$ au dénominateur.
::

::extrait-cours{id="qcm-nc-second-degre" titre="Le second degré dans C" source="/cours/a1/remise-a-niveau-maths/nombres-complexes/cours#_3-équation-du-second-degré"}
Pour $az^2+bz+c = 0$ à coefficients **réels**, avec $\Delta = b^2-4ac$ :

| $\Delta$ | Solutions |
|---|---|
| $\Delta > 0$ | deux réelles, $\dfrac{-b\pm\sqrt\Delta}{2a}$ |
| $\Delta = 0$ | une racine double, $-\dfrac{b}{2a}$ |
| $\Delta < 0$ | deux complexes **conjuguées**, $\dfrac{-b\pm i\sqrt{\lvert\Delta\rvert}}{2a}$ |

**Dans $\mathbb{C}$, il y a toujours des solutions.** « Pas de solution » est un réflexe de terminale qui n'a plus cours ici.

⚠️ **Ne jamais écrire $\sqrt{-3}$.** On fait sortir le $i$ d'abord : $\sqrt{-3}$ devient $i\sqrt3$, et $\sqrt{-16}$ devient $4i$.

**Le contrôle systématique** : somme des racines $= -\dfrac{b}{a}$, produit $= \dfrac{c}{a}$. Deux calculs de dix secondes qui attrapent presque toutes les erreurs de signe.

⚠️ Si $\bar z$ apparaît dans l'équation, le discriminant **ne s'applique plus** : l'équation n'est pas polynomiale en $z$. On pose $z = x+iy$ et on annule séparément partie réelle et partie imaginaire.
::

::extrait-cours{id="qcm-nc-affixes" titre="Affixes, vecteurs et distances" source="/cours/a1/remise-a-niveau-maths/nombres-complexes/cours#_4-points-vecteurs-et-affixes"}
Le point $M(a\,;b)$ a pour affixe $z_M = a+bi$ : partie réelle en abscisse, partie imaginaire en ordonnée.

$$
z_{\overrightarrow{AB}} = z_B-z_A \qquad AB = \lvert z_B-z_A\rvert \qquad z_{\text{milieu}} = \frac{z_A+z_B}{2}
$$

⚠️ **Extrémité moins origine.** Dans l'autre sens on obtient le vecteur opposé — c'est le distracteur favori des QCM.

**Deux lectures immédiates** : une affixe **réelle** signifie un vecteur horizontal, une affixe **imaginaire pure** un vecteur vertical.

**Nature d'un triangle** : on calcule les trois longueurs comme des modules, puis deux longueurs égales donnent un isocèle, et la réciproque de Pythagore un rectangle — en comparant le carré du **plus grand** côté à la somme des deux autres.
::

::extrait-cours{id="qcm-nc-module" titre="Module et argument" source="/cours/a1/remise-a-niveau-maths/nombres-complexes/cours#_5-module-et-argument"}
$$
\lvert z\rvert = \sqrt{a^2+b^2} \qquad \text{(une longueur, donc toujours positive)}
$$

$$
\lvert z_1z_2\rvert = \lvert z_1\rvert\lvert z_2\rvert \qquad \left\lvert\frac{z_1}{z_2}\right\rvert = \frac{\lvert z_1\rvert}{\lvert z_2\rvert} \qquad \lvert\bar z\rvert = \lvert z\rvert \qquad z\bar z = \lvert z\rvert^2
$$

⚠️ Le module se comporte bien avec les produits, **mal avec les sommes** : on a seulement $\lvert z_1+z_2\rvert \leqslant \lvert z_1\rvert+\lvert z_2\rvert$.

**L'argument** est l'angle $(\vec u,\overrightarrow{OM})$, défini à $2k\pi$ près. La méthode du cours :

$$
\cos\theta = \frac{a}{\lvert z\rvert} \qquad\textbf{et}\qquad \sin\theta = \frac{b}{\lvert z\rvert}
$$

**Les deux rapports sont nécessaires.** Le cosinus seul laisse toujours deux angles en concurrence, symétriques par rapport à l'axe horizontal ; c'est le **signe du sinus** qui tranche. C'est l'erreur la plus coûteuse du chapitre, parce qu'elle produit un résultat vraisemblable.

| $\theta$ | $0$ | $\dfrac{\pi}{6}$ | $\dfrac{\pi}{4}$ | $\dfrac{\pi}{3}$ | $\dfrac{\pi}{2}$ | $\pi$ |
|---|---|---|---|---|---|---|
| $\cos\theta$ | $1$ | $\dfrac{\sqrt3}{2}$ | $\dfrac{\sqrt2}{2}$ | $\dfrac{1}{2}$ | $0$ | $-1$ |
| $\sin\theta$ | $0$ | $\dfrac{1}{2}$ | $\dfrac{\sqrt2}{2}$ | $\dfrac{\sqrt3}{2}$ | $1$ | $0$ |
::

::extrait-cours{id="qcm-nc-trigo" titre="La forme trigonométrique" source="/cours/a1/remise-a-niveau-maths/nombres-complexes/cours#_6-la-forme-trigonométrique"}
$$
z = r\left(\cos\theta+i\sin\theta\right) = [r\,;\theta] \qquad (r = \lvert z\rvert > 0)
$$

⚠️ $[r\,;\theta]$ n'est **pas** un couple de coordonnées : $r$ est une longueur, $\theta$ un angle.

| Sens | On connaît | On calcule |
|---|---|---|
| Trigonométrique → algébrique | $r$ et $\theta$ | $a = r\cos\theta$, $b = r\sin\theta$ |
| Algébrique → trigonométrique | $a$ et $b$ | $r = \sqrt{a^2+b^2}$, puis $\cos\theta = \dfrac{a}{r}$ **et** $\sin\theta = \dfrac{b}{r}$ |

**Les quatre cas des axes**, à reconnaître d'un coup d'œil : $[r\,;0] = r$, $\left[r\,;\dfrac\pi2\right] = ri$, $[r\,;\pi] = -r$, $\left[r\,;-\dfrac\pi2\right] = -ri$.

⚠️ **Le module reste strictement positif.** $-5$ s'écrit $[5\,;\pi]$, jamais $[-5\,;0]$. Le signe est porté par l'argument.

**Le contrôle systématique** : on redéveloppe pour retomber sur l'énoncé. Trente secondes qui attrapent toutes les erreurs de quadrant.
::

::extrait-cours{id="qcm-nc-exponentielle" titre="La forme exponentielle et ses trois règles" source="/cours/a1/remise-a-niveau-maths/nombres-complexes/cours#_7-forme-exponentielle"}
En notant $e^{i\theta} = \cos\theta+i\sin\theta$, tout complexe non nul s'écrit $z = re^{i\theta}$ avec $r = \lvert z\rvert > 0$.

$$
re^{i\theta}\times r'e^{i\theta'} = rr'e^{i(\theta+\theta')} \qquad \frac{re^{i\theta}}{r'e^{i\theta'}} = \frac{r}{r'}e^{i(\theta-\theta')} \qquad \left(re^{i\theta}\right)^n = r^ne^{in\theta}
$$

**Les modules se multiplient, les arguments s'additionnent.** Pour une puissance, le module est **élevé** à la puissance $n$ et l'argument **multiplié** par $n$ — deux opérations différentes qu'il ne faut pas intervertir.

D'où la règle de choix : **forme algébrique pour les sommes, forme exponentielle pour les produits et les puissances**.

À connaître :

$$
e^{i0} = 1 \qquad e^{i\frac\pi2} = i \qquad e^{i\pi} = -1 \qquad e^{-i\frac\pi2} = -i \qquad e^{2ik\pi} = 1
$$

**Ramener l'argument dans $]-\pi\,;\pi]$** en ajoutant ou retirant des tours complets : $\dfrac{3\pi}{2}$ devient $-\dfrac{\pi}{2}$.

⚠️ La forme exponentielle exige $r > 0$ : $-2e^{i\theta}$ n'en est pas une, il faut écrire $2e^{i(\theta+\pi)}$.
::

::extrait-cours{id="qcm-nc-ensembles" titre="Ensembles de points" source="/cours/a1/remise-a-niveau-maths/nombres-complexes/cours#_8-ensembles-de-points-et-transformations"}
Un module est une **distance** : $\lvert z_B-z_A\rvert = AB$. Toute condition écrite avec des modules décrit donc une figure.

| Condition sur $z$ | Ensemble des points $M$ |
|---|---|
| $\lvert z-z_A\rvert = r$ | le **cercle** de centre $A$ et de rayon $r$ |
| $\lvert z-z_A\rvert \leqslant r$ | le **disque** fermé de centre $A$ et de rayon $r$ |
| $\lvert z-z_A\rvert = \lvert z-z_B\rvert$ | la **médiatrice** du segment $[AB]$ |

⚠️ **Le piège du signe.** Le premier réflexe est de faire apparaître la forme $\lvert z-z_A\rvert$, quitte à changer les signes : $\lvert z-2+i\rvert$ s'écrit $\lvert z-(2-i)\rvert$, et le centre est $(2\,;-1)$, pas $(2\,;1)$.

**Quand les modules ne suffisent pas**, on pose $z = x+iy$ et on sépare les deux parties :

$$
Z \text{ réel} \iff \mathcal{I}m(Z) = 0 \qquad Z \text{ imaginaire pur} \iff \mathcal{R}e(Z) = 0
$$

Une équation du **premier degré** en $x$ et $y$ décrit une droite ; une équation où apparaît $x^2+y^2$ décrit un cercle, qu'on identifie en complétant les carrés.

⚠️ Toujours **exclure les points interdits** : celui qui annule un dénominateur, et celui qui annule $Z$ dans le cas « imaginaire pur ».
::
