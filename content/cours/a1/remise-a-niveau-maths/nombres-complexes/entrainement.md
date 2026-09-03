---
title: Nombres complexes — fiche d'entraînement
description: Quinze questions en cinq paliers, de « qu'est-ce que i » à la formule de Moivre. Chaque question donne un indice avec un exemple similaire traité, une solution détaillée et le rappel de cours correspondant.
type: entrainement
annee: A1
matiere: Remise à niveau en maths
ordre: 3
icone: i-lucide-list-checks
---

::rappel{titre="Comment se servir de cette fiche" icone="i-lucide-compass"}
Cette fiche part de zéro : le palier 1 suppose seulement de savoir calculer avec des lettres. Chaque palier réutilise le précédent, alors mieux vaut ne pas sauter de marche.

Sous chaque question, trois boutons :

- **Indice** — la piste à suivre, sans le résultat. La fenêtre contient aussi un **exemple similaire entièrement traité**, sur d'autres nombres : à déplier seulement si la piste n'a pas suffi.
- **Voir la solution** — la correction rédigée, étape par étape.
- **Cours** — un tiroir avec le rappel de cours utile à cette question précise, et le lien vers la section complète du chapitre.

Le bon réflexe : chercher cinq minutes, puis l'indice, puis l'exemple, et la solution en dernier.
::

::carte-lien{to="/cours/a1/remise-a-niveau-maths/nombres-complexes/cours" titre="Le cours du chapitre" description="Forme algébrique, opérations, second degré, affixes, module et argument, formes trigonométrique et exponentielle, ensembles de points" type="cours" meta="8 sections"}
::

::carte-lien{to="/cours/a1/remise-a-niveau-maths/nombres-complexes/exercices" titre="Les exercices du TD" description="Les quatre exercices du programme, corrigés — à faire une fois les cinq paliers passés" type="exercices" meta="4 exercices"}
::

:::exercice{titre="Palier 1 — Apprivoiser i" theme="Reconnaître un nombre complexe, calculer ses puissances, identifier deux écritures" badge="★☆☆☆☆" icone="i-lucide-sprout"}
Rien à calculer de compliqué ici : il s'agit de prendre l'habitude d'écrire tout nombre sous la forme $a+bi$, avec $a$ et $b$ **réels**.

::exo-question{label="1." cours="xnc-forme-algebrique"}
Pour chacun des nombres suivants, donner la partie réelle et la partie imaginaire, puis préciser s'il est réel, imaginaire pur, ou ni l'un ni l'autre.

$$
z_1 = 4-7i \qquad z_2 = -5 \qquad z_3 = \frac{i}{3} \qquad z_4 = \sqrt2 - i\sqrt2
$$

#indice
Le seul geste à faire est d'écrire chaque nombre sous la forme $a+bi$, quitte à faire apparaître un $0$ là où il manque un morceau : $-5$ s'écrit $-5+0i$, et $\dfrac{i}{3}$ s'écrit $0+\dfrac13 i$.

Deux pièges à surveiller. D'abord, la partie imaginaire est un **réel** : celle de $4-7i$ est $-7$, pas $-7i$. Ensuite, le signe fait partie du coefficient : dans $a-bi$, la partie imaginaire est $-b$.

#exemple
On traite de la même manière $w_1 = -3+2i$, $w_2 = 7$ et $w_3 = -\dfrac{5i}{4}$.

**$w_1 = -3+2i$** est déjà sous la forme $a+bi$ : $\mathcal{R}e(w_1) = -3$ et $\mathcal{I}m(w_1) = 2$. Les deux parties sont non nulles, donc $w_1$ n'est ni réel ni imaginaire pur.

**$w_2 = 7$** : on écrit $w_2 = 7+0i$, donc $\mathcal{R}e(w_2) = 7$ et $\mathcal{I}m(w_2) = 0$. Une partie imaginaire nulle signifie que le nombre est **réel** — ce qui était attendu, puisque $\mathbb{R}\subset\mathbb{C}$.

**$w_3 = -\dfrac{5i}{4}$** : on écrit $w_3 = 0-\dfrac54 i$, donc $\mathcal{R}e(w_3) = 0$ et $\mathcal{I}m(w_3) = -\dfrac54$. Une partie réelle nulle signifie que le nombre est **imaginaire pur**.

#solution
On ramène chaque nombre à la forme $a+bi$ :

$$
z_1 = 4+(-7)i \qquad z_2 = -5+0i \qquad z_3 = 0+\frac13 i \qquad z_4 = \sqrt2+(-\sqrt2)i
$$

D'où la lecture :

| | $\mathcal{R}e$ | $\mathcal{I}m$ | Nature |
|---|---|---|---|
| $z_1 = 4-7i$ | $4$ | $-7$ | ni réel, ni imaginaire pur |
| $z_2 = -5$ | $-5$ | $0$ | **réel** |
| $z_3 = \dfrac{i}{3}$ | $0$ | $\dfrac13$ | **imaginaire pur** |
| $z_4 = \sqrt2-i\sqrt2$ | $\sqrt2$ | $-\sqrt2$ | ni réel, ni imaginaire pur |

Deux critères à retenir, ils resserviront à chaque palier : $\boxed{z \text{ est réel} \iff \mathcal{I}m(z) = 0}$ et $\boxed{z \text{ est imaginaire pur} \iff \mathcal{R}e(z) = 0}$.
::

::exo-question{label="2." cours="xnc-puissances-i"}
Calculer $i^3$, $i^4$, $i^{10}$ et $i^{2027}$, puis la somme $i+i^2+i^3+i^4$.

#indice
Tout part de la seule règle du jeu : $i^2 = -1$. En la réappliquant, on obtient $i^3$ puis $i^4$ — et là, quelque chose de remarquable se produit qui rend inutile tout calcul pour les grands exposants.

Pour $i^{10}$ et $i^{2027}$, la question à se poser est donc : **combien reste-t-il quand on divise l'exposant par $4$ ?**

#exemple
Même travail sur $i^7$, $i^{22}$ et $i^{101}$.

On établit d'abord le cycle, une fois pour toutes :

$$
i^1 = i, \qquad i^2 = -1, \qquad i^3 = i^2\times i = -i, \qquad i^4 = (i^2)^2 = (-1)^2 = 1
$$

Comme $i^4 = 1$, multiplier par $i^4$ ne change rien : les puissances se répètent de quatre en quatre. On écrit donc l'exposant sous la forme $4q+r$ et on ne garde que $i^r$.

$$
i^7 = i^{4\times 1+3} = (i^4)^1\times i^3 = -i
$$

$$
i^{22} = i^{4\times 5+2} = i^2 = -1
$$

$$
i^{101} = i^{4\times 25+1} = i^1 = i
$$

Le réflexe pratique : diviser l'exposant par $4$, ne regarder que le **reste**, et lire $1, i, -1, -i$ pour un reste de $0, 1, 2, 3$.

#solution
On déroule le cycle à partir de $i^2 = -1$ :

$$
i^3 = i^2\times i = -i \qquad\text{et}\qquad i^4 = i^2\times i^2 = (-1)\times(-1) = 1
$$

Comme $i^4 = 1$, les puissances de $i$ se répètent de quatre en quatre. Il suffit donc du reste de la division de l'exposant par $4$.

**Pour $i^{10}$** : $10 = 4\times 2+2$, donc

$$
i^{10} = (i^4)^2\times i^2 = 1\times(-1) = \boxed{-1}
$$

**Pour $i^{2027}$** : $2027 = 4\times 506+3$, donc

$$
i^{2027} = (i^4)^{506}\times i^3 = i^3 = \boxed{-i}
$$

**La somme** rassemble un cycle complet, et les termes s'annulent deux à deux :

$$
i+i^2+i^3+i^4 = i-1-i+1 = \boxed{0}
$$

C'est vrai de **quatre puissances consécutives quelconques** : leur somme est toujours nulle.
::

::exo-question{label="3." cours="xnc-forme-algebrique"}
Déterminer les réels $x$ et $y$ tels que

$$
(2x-1)+(y+3)i = 5-2i
$$

#indice
Deux nombres complexes sont égaux **si et seulement si** leurs parties réelles coïncident **et** leurs parties imaginaires coïncident. Une seule égalité complexe se casse donc en **deux équations réelles** indépendantes — c'est ce qu'on appelle « identifier ».

Ici, $x$ n'apparaît que dans la partie réelle et $y$ que dans la partie imaginaire : les deux équations se résolvent séparément, sans système à démêler.

#exemple
Déterminer les réels $a$ et $b$ tels que $(3a+2)+(1-b)i = -4+6i$.

Le membre de gauche est déjà sous la forme $A+Bi$ avec $A = 3a+2$ et $B = 1-b$, tous deux réels puisque $a$ et $b$ le sont. On identifie donc terme à terme :

$$
3a+2 = -4 \qquad\text{et}\qquad 1-b = 6
$$

La première équation donne $3a = -6$, soit $a = -2$. La seconde donne $-b = 5$, soit $b = -5$.

**Vérification**, toujours utile : $(3\times(-2)+2)+(1-(-5))i = -4+6i$. C'est bien le membre de droite.

#solution
Les deux membres sont écrits sous la forme $a+bi$ avec $a$ et $b$ réels — c'est la condition pour pouvoir identifier. On égalise donc partie réelle avec partie réelle, partie imaginaire avec partie imaginaire :

$$
2x-1 = 5 \qquad\text{et}\qquad y+3 = -2
$$

La première équation donne $2x = 6$, donc $x = 3$. La seconde donne $y = -5$.

$$
\boxed{x = 3 \quad\text{et}\quad y = -5}
$$

**Vérification** : $(2\times 3-1)+(-5+3)i = 5-2i$. ✓
::
:::

:::exercice{titre="Palier 2 — Calculer sans erreur de signe" theme="Somme, produit, carré, conjugué et quotient sous forme algébrique" badge="★★☆☆☆" icone="i-lucide-calculator"}
On pose dans tout ce palier

$$
z_1 = 1-2i \qquad\text{et}\qquad z_2 = -3+i
$$

Toutes les réponses sont à donner sous forme algébrique, c'est-à-dire sous la forme $a+bi$ avec $a$ et $b$ réels.

::exo-question{label="1." cours="xnc-operations"}
Donner la forme algébrique de $z_1+z_2$, de $z_1-z_2$ et de $z_1 z_2$.

#indice
Pour la somme et la différence, on regroupe parties réelles ensemble et parties imaginaires ensemble, exactement comme pour des vecteurs. Le seul piège de la différence : le signe moins se distribue sur **les deux** composantes du second nombre.

Pour le produit, on développe comme un produit de deux binômes ordinaires. Un terme en $i^2$ apparaît alors : on le remplace par $-1$, ce qui **change son signe** et le fait rejoindre la partie réelle.

#exemple
Mêmes calculs menés sur $w_1 = 5-2i$ et $w_2 = -3+6i$.

**Somme** — on additionne composante par composante :

$$
w_1+w_2 = (5-3)+(-2+6)i = 2+4i
$$

**Différence** — on distribue le signe moins sur les deux composantes de $w_2$ :

$$
w_1-w_2 = (5-(-3))+(-2-6)i = 8-8i
$$

**Produit** — double distributivité, puis remplacement de $i^2$ :

$$
w_1w_2 = (5-2i)(-3+6i) = -15+30i+6i-12i^2
$$

Or $-12i^2 = -12\times(-1) = +12$, d'où

$$
w_1w_2 = -15+12+(30+6)i = -3+36i
$$

#solution
**Somme** — composante par composante :

$$
z_1+z_2 = (1-3)+(-2+1)i = \boxed{-2-i}
$$

**Différence** — attention au signe moins, qui porte sur $-3$ **et** sur $+i$ :

$$
z_1-z_2 = (1-(-3))+(-2-1)i = \boxed{4-3i}
$$

**Produit** — on développe les quatre produits :

$$
z_1z_2 = (1-2i)(-3+i) = -3+i+6i-2i^2
$$

On remplace $i^2$ par $-1$, donc $-2i^2 = +2$ :

$$
z_1z_2 = -3+2+(1+6)i = \boxed{-1+7i}
$$
::

::exo-question{label="2." cours="xnc-operations"}
Calculer $z_1^2$. Calculer ensuite $(1+i)^2$, puis en déduire $(1+i)^4$ et $(1+i)^8$ **sans développer**.

#indice
Un carré de complexe se traite avec l'identité remarquable $(a+b)^2 = a^2+2ab+b^2$, sans rien changer à la formule. Il y a une soustraction dans $(1-2i)^2$ ? Alors **le signe moins fait partie de $b$** : on pose $b = -2i$ et on remplace $b$ par $-2i$ partout dans la formule, y compris dans le double produit et dans le carré.

Deuxième piège, dans le terme $b^2$ : c'est $(-2i)^2$ qu'il faut calculer, donc élever **à la fois** le $2$ et le $i$ au carré.

Pour la seconde partie, remarque que $4 = 2\times 2$ et $8 = 4\times 2$ : chaque puissance est le carré de la précédente. Le résultat de $(1+i)^2$ est particulièrement simple, ce qui rend la suite immédiate.

#exemple
Même travail sur $(3-i)^2$, puis sur les puissances de $1-i$.

**Le carré.** On applique $(a+b)^2 = a^2+2ab+b^2$ avec $a = 3$ et $b = -i$ — le signe moins est dans $b$, et on ne touche pas à la formule :

$$
(3-i)^2 = 3^2+2\times 3\times(-i)+(-i)^2 = 9-6i+i^2 = 9-6i-1 = 8-6i
$$

Le terme $(-i)^2$ vaut $(-1)^2\times i^2 = i^2 = -1$ : le carré efface le signe moins, mais pas le $i^2$.

**Les puissances en cascade.** On commence par le carré :

$$
(1-i)^2 = 1-2i+i^2 = 1-2i-1 = -2i
$$

Puis on élève ce résultat au carré, plutôt que de développer une puissance quatrième :

$$
(1-i)^4 = \bigl((1-i)^2\bigr)^2 = (-2i)^2 = 4i^2 = -4
$$

Et on recommence :

$$
(1-i)^8 = \bigl((1-i)^4\bigr)^2 = (-4)^2 = 16
$$

L'idée générale : quand l'exposant est une puissance de $2$, on procède par carrés successifs.

#solution
**Le carré de $z_1$.** On applique $(a+b)^2 = a^2+2ab+b^2$ avec $a = 1$ et $b = -2i$. Le signe moins est **dans $b$** : la formule reste celle du $+$, et on remplace $b$ par $-2i$ partout.

$$
z_1^2 = (1-2i)^2 = 1^2+2\times 1\times(-2i)+(-2i)^2
$$

Le double produit vaut $-4i$, et $(-2i)^2 = (-2)^2\times i^2 = 4\times(-1) = -4$ : le carré efface le signe moins, mais pas le $i^2$. D'où

$$
z_1^2 = 1-4-4i = \boxed{-3-4i}
$$

⚠️ **Un mot sur les deux écritures possibles**, parce que c'est là qu'on se trompe. On peut aussi lire $(1-2i)^2$ comme $(a-b)^2 = a^2-2ab+b^2$ avec cette fois $b = +2i$, ce qui donne $1^2-2\times 1\times 2i+(2i)^2 = 1-4i-4$ : même résultat, même calcul. Ce qu'il ne faut **pas** faire, c'est mélanger les deux — annoncer $b = -2i$ puis écrire la formule en $-2ab$ compterait le signe moins **deux fois**, et le double produit ressortirait en $+4i$ au lieu de $-4i$.

**Le carré de $1+i$** — un résultat à connaître par cœur, il revient sans cesse :

$$
(1+i)^2 = 1+2i+i^2 = 1+2i-1 = \boxed{2i}
$$

**Les puissances suivantes** s'obtiennent en élevant ce résultat au carré, puis encore au carré :

$$
(1+i)^4 = \bigl((1+i)^2\bigr)^2 = (2i)^2 = 4i^2 = \boxed{-4}
$$

$$
(1+i)^8 = \bigl((1+i)^4\bigr)^2 = (-4)^2 = \boxed{16}
$$

On retiendra que $(1+i)^2 = 2i$ et $(1-i)^2 = -2i$ : ces deux identités transforment n'importe quelle puissance de $1\pm i$ en un calcul de deux lignes.
::

::exo-question{label="3." cours="xnc-conjugue-quotient"}
Donner $\overline{z_2}$ et calculer $z_2\overline{z_2}$. En déduire la méthode, puis donner la forme algébrique de

$$
\frac{2+i}{1-3i}
$$

#indice
Le conjugué s'obtient en changeant le signe de la partie imaginaire, et lui seul. Son intérêt tient dans une propriété : $z\bar z = a^2+b^2$, un **réel positif** — plus aucun $i$ ne subsiste.

C'est exactement ce qu'il faut pour un quotient : tant qu'il reste un $i$ au dénominateur, le nombre n'est pas sous forme algébrique. On multiplie donc numérateur **et** dénominateur par le conjugué du dénominateur ; celui-ci devient réel, et il ne reste qu'à séparer la fraction en deux morceaux.

#exemple
Sur $u = 3-i$, puis sur le quotient $\dfrac{1+2i}{3-i}$.

**Conjugué et produit.** Le conjugué de $u = 3-i$ est $\bar u = 3+i$. Leur produit se calcule avec $(a-b)(a+b) = a^2-b^2$ :

$$
u\bar u = (3-i)(3+i) = 3^2-i^2 = 9+1 = 10
$$

Le résultat est bien réel positif, égal à $3^2+1^2$ : aucun terme en $i$ ne peut subsister, et s'il en reste un, c'est qu'il y a une erreur de signe.

**Le quotient.** On multiplie haut et bas par $\bar u = 3+i$ :

$$
\frac{1+2i}{3-i} = \frac{(1+2i)(3+i)}{(3-i)(3+i)} = \frac{3+i+6i+2i^2}{10}
$$

On remplace $2i^2$ par $-2$ au numérateur :

$$
\frac{1+2i}{3-i} = \frac{1+7i}{10} = \frac{1}{10}+\frac{7}{10}i
$$

La dernière étape — séparer la fraction en deux — est indispensable : c'est elle qui donne la forme $a+bi$.

#solution
**Le conjugué** de $z_2 = -3+i$ s'obtient en changeant le signe de la partie imaginaire :

$$
\overline{z_2} = -3-i
$$

**Leur produit** est réel, d'après la propriété $z\bar z = a^2+b^2$ avec $a = -3$ et $b = 1$ :

$$
z_2\overline{z_2} = (-3)^2+1^2 = 9+1 = 10
$$

**Le quotient.** Le conjugué du dénominateur $1-3i$ est $1+3i$ ; on multiplie haut et bas par lui :

$$
\frac{2+i}{1-3i} = \frac{(2+i)(1+3i)}{(1-3i)(1+3i)}
$$

Le dénominateur devient $1^2+3^2 = 10$. Au numérateur :

$$
(2+i)(1+3i) = 2+6i+i+3i^2 = 2-3+7i = -1+7i
$$

D'où, en séparant la fraction :

$$
\frac{2+i}{1-3i} = \frac{-1+7i}{10} = \boxed{-\frac{1}{10}+\frac{7}{10}i}
$$
::
:::

:::exercice{titre="Palier 3 — Résoudre dans C" theme="Équation du premier degré, discriminant négatif, condition pour qu'un nombre soit réel" badge="★★★☆☆" icone="i-lucide-equal"}
Les techniques du palier 2 servent maintenant d'outils : isoler l'inconnue, puis remettre le résultat sous forme algébrique.

::exo-question{label="1." cours="xnc-conjugue-quotient"}
Résoudre dans $\mathbb{C}$ l'équation

$$
2z+3 = iz-1
$$

#indice
C'est une équation du premier degré : elle se résout **exactement comme dans $\mathbb{R}$**. On rassemble les termes en $z$ d'un côté, les constantes de l'autre, puis on factorise par $z$.

On obtient alors $z$ sous la forme d'un quotient dont le dénominateur est complexe. Le travail n'est pas fini : c'est la méthode du conjugué de la question précédente qui donne la forme algébrique.

#exemple
Résolution de $3z-2i = iz+4$.

On rassemble les termes en $z$ à gauche et les constantes à droite :

$$
3z-iz = 4+2i
$$

On factorise par $z$ :

$$
z(3-i) = 4+2i \qquad\Longrightarrow\qquad z = \frac{4+2i}{3-i}
$$

Le coefficient $3-i$ n'est pas nul, la division est donc légitime. On termine par le conjugué du dénominateur, $3+i$ :

$$
z = \frac{(4+2i)(3+i)}{(3-i)(3+i)} = \frac{12+4i+6i+2i^2}{9+1} = \frac{10+10i}{10} = 1+i
$$

**Vérification** : $3(1+i)-2i = 3+i$, et $i(1+i)+4 = i-1+4 = 3+i$. ✓

#solution
On rassemble les termes en $z$ à gauche et les constantes à droite :

$$
2z-iz = -1-3 = -4
$$

On factorise par $z$ :

$$
z(2-i) = -4 \qquad\Longrightarrow\qquad z = \frac{-4}{2-i}
$$

Le coefficient $2-i$ est non nul, la division est donc légitime. On met le résultat sous forme algébrique en multipliant par le conjugué $2+i$ :

$$
z = \frac{-4(2+i)}{(2-i)(2+i)} = \frac{-8-4i}{2^2+1^2} = \frac{-8-4i}{5}
$$

D'où l'unique solution :

$$
\boxed{\mathcal{S} = \left\lbrace -\frac{8}{5}-\frac{4}{5}i \right\rbrace}
$$

**Vérification** : $2z+3 = -\dfrac{16}{5}-\dfrac{8}{5}i+3 = -\dfrac15-\dfrac85 i$, et $iz-1 = -\dfrac{8}{5}i-\dfrac45 i^2-1 = \dfrac45-1-\dfrac85 i = -\dfrac15-\dfrac85 i$. ✓
::

::exo-question{label="2." cours="xnc-second-degre"}
Résoudre dans $\mathbb{C}$ l'équation

$$
z^2-4z+13 = 0
$$

#indice
On applique la méthode du second degré **sans rien changer** : $\Delta = b^2-4ac$. Ici le discriminant est négatif, ce qui dans $\mathbb{R}$ signifiait « pas de solution » ; dans $\mathbb{C}$, cela signifie au contraire **deux solutions conjuguées**.

Le seul point à ne pas rater : ne jamais écrire $\sqrt{\Delta}$ quand $\Delta < 0$. On écrit $\Delta = -36 = 36i^2$, et c'est $i\sqrt{-\Delta}$ qui prend la place de $\sqrt\Delta$ dans la formule.

#exemple
Résolution de $z^2+2z+5 = 0$.

On identifie $a = 1$, $b = 2$, $c = 5$, puis on calcule le discriminant :

$$
\Delta = b^2-4ac = 4-20 = -16 < 0
$$

Il est négatif : l'équation n'a pas de solution réelle, mais **deux solutions complexes conjuguées**. On écrit $\Delta$ comme un carré, ce qui est possible grâce à $i^2 = -1$ :

$$
\Delta = -16 = 16i^2 = (4i)^2
$$

La formule habituelle s'applique alors, avec $4i$ à la place de $\sqrt\Delta$ :

$$
z = \frac{-b\pm 4i}{2a} = \frac{-2\pm 4i}{2} = -1\pm 2i
$$

Les solutions sont $-1+2i$ et $-1-2i$ : elles sont bien conjuguées l'une de l'autre, ce qui arrive **toujours** quand les coefficients $a$, $b$, $c$ sont réels. C'est une vérification gratuite.

#solution
On identifie $a = 1$, $b = -4$, $c = 13$, puis on calcule le discriminant :

$$
\Delta = (-4)^2-4\times 1\times 13 = 16-52 = -36 < 0
$$

Comme $\Delta < 0$, l'équation admet deux solutions complexes conjuguées. On écrit $\Delta$ sous forme de carré :

$$
\Delta = -36 = 36i^2 = (6i)^2
$$

Puis on applique la formule, avec $6i$ à la place de $\sqrt\Delta$ :

$$
z = \frac{-b\pm 6i}{2a} = \frac{4\pm 6i}{2} = 2\pm 3i
$$

$$
\boxed{\mathcal{S} = \lbrace 2+3i\ ;\ 2-3i \rbrace}
$$

**Vérification** par somme et produit des racines : $S = (2+3i)+(2-3i) = 4 = -\dfrac{b}{a}$ ✓ et $P = (2+3i)(2-3i) = 4+9 = 13 = \dfrac{c}{a}$ ✓
::

::exo-question{label="3." cours="xnc-forme-algebrique"}
Déterminer tous les réels $x$ tels que le nombre $(x+2i)(1-i)$ soit **réel**.

#indice
Un produit ne se lit pas : il faut d'abord le **développer** et le remettre sous la forme $A+Bi$, où $A$ et $B$ sont deux expressions **réelles** dépendant de $x$. C'est là qu'il faut être attentif à ne pas laisser un $i$ traîner dans $A$.

Une fois cette écriture obtenue, le critère du palier 1 s'applique : un nombre est réel si et seulement si sa partie imaginaire est nulle. La question devient alors une simple équation réelle en $x$.

#exemple
Déterminer les réels $t$ tels que $(t-3i)(2+i)$ soit **imaginaire pur**.

On développe d'abord, en traitant $t$ comme un réel quelconque :

$$
(t-3i)(2+i) = 2t+ti-6i-3i^2 = 2t+3+(t-6)i
$$

On a bien isolé une partie réelle $2t+3$ et une partie imaginaire $t-6$, toutes deux réelles puisque $t$ l'est.

Le nombre est imaginaire pur lorsque sa **partie réelle** est nulle :

$$
2t+3 = 0 \qquad\Longleftrightarrow\qquad t = -\frac32
$$

**Vérification** : pour $t = -\dfrac32$, le produit vaut $0+\left(-\dfrac32-6\right)i = -\dfrac{15}{2}i$, bien imaginaire pur.

Si l'énoncé avait demandé « réel », on aurait annulé $t-6$ à la place, donc $t = 6$.

#solution
On développe le produit, en gardant à l'esprit que $x$ est réel :

$$
(x+2i)(1-i) = x-xi+2i-2i^2
$$

On remplace $-2i^2$ par $+2$, puis on regroupe :

$$
(x+2i)(1-i) = (x+2)+(2-x)i
$$

Les deux coefficients $x+2$ et $2-x$ sont réels : l'écriture est bien sous forme algébrique. Le nombre est réel si et seulement si sa partie imaginaire est nulle :

$$
2-x = 0 \qquad\Longleftrightarrow\qquad \boxed{x = 2}
$$

**Vérification** : pour $x = 2$, le produit vaut $(2+2i)(1-i) = 2-2i+2i-2i^2 = 4$, qui est bien réel.
::
:::

:::exercice{titre="Palier 4 — Le plan complexe" theme="Affixes, distances, milieu, nature d'un triangle et ensembles de points" badge="★★★★☆" icone="i-lucide-map-pin"}
Le plan est muni d'un repère orthonormé direct $(O;\vec u,\vec v)$. On considère les points

$$
A(1+2i), \qquad B(4-2i), \qquad C(5+5i)
$$

où l'on a noté entre parenthèses l'**affixe** de chaque point.

::exo-question{label="1." cours="xnc-affixes"}
Déterminer l'affixe du vecteur $\overrightarrow{AB}$, la distance $AB$, puis l'affixe du milieu $I$ de $[AB]$.

#indice
Trois formules, et une seule chose à ne pas confondre : l'affixe d'un **vecteur** se calcule par « extrémité moins origine », donc $z_{\overrightarrow{AB}} = z_B-z_A$ — dans cet ordre.

La distance est le **module** de cette affixe : $AB = \lvert z_B-z_A\rvert = \sqrt{x^2+y^2}$. Et l'affixe du milieu est la moyenne des deux affixes, exactement comme les coordonnées d'un milieu sont la moyenne des coordonnées.

#exemple
Sur $P(-1+3i)$ et $Q(2-i)$.

**Affixe du vecteur** — extrémité moins origine :

$$
z_{\overrightarrow{PQ}} = z_Q-z_P = (2-(-1))+(-1-3)i = 3-4i
$$

Ce vecteur a donc pour coordonnées $(3;-4)$ dans le repère.

**Distance** — c'est le module de l'affixe précédente :

$$
PQ = \lvert 3-4i\rvert = \sqrt{3^2+(-4)^2} = \sqrt{25} = 5
$$

Une distance est toujours positive : si un signe moins apparaît, c'est qu'on a oublié un carré.

**Milieu** — moyenne des deux affixes :

$$
z_R = \frac{z_P+z_Q}{2} = \frac{(-1+3i)+(2-i)}{2} = \frac{1+2i}{2} = \frac12+i
$$

Le milieu de $[PQ]$ est donc le point de coordonnées $\left(\dfrac12;1\right)$.

#solution
**Affixe de $\overrightarrow{AB}$** — extrémité moins origine :

$$
z_{\overrightarrow{AB}} = z_B-z_A = (4-2i)-(1+2i) = \boxed{3-4i}
$$

Le vecteur $\overrightarrow{AB}$ a donc pour coordonnées $(3;-4)$.

**Distance $AB$** — c'est le module de cette affixe :

$$
AB = \lvert 3-4i\rvert = \sqrt{3^2+(-4)^2} = \sqrt{9+16} = \sqrt{25} = \boxed{5}
$$

**Affixe du milieu $I$** — moyenne des affixes de $A$ et $B$ :

$$
z_I = \frac{z_A+z_B}{2} = \frac{(1+2i)+(4-2i)}{2} = \frac{5+0i}{2} = \boxed{\frac52}
$$

Les parties imaginaires se compensent : $I$ est le point de coordonnées $\left(\dfrac52;0\right)$, situé sur l'axe des abscisses.
::

::exo-question{label="2." cours="xnc-affixes"}
Calculer $AC$ et $BC$, puis déterminer la nature du triangle $ABC$.

#indice
Trois longueurs suffisent à décider de la nature d'un triangle, et elles se calculent toutes de la même façon : $XY = \lvert z_Y-z_X\rvert$. La distance $AB$ a déjà été trouvée à la question précédente.

Ensuite, deux comparaisons à faire, dans cet ordre. **Deux longueurs égales** signalent un triangle isocèle, et disent en quel sommet. Puis la **réciproque du théorème de Pythagore** : si le carré de la plus grande longueur vaut la somme des carrés des deux autres, le triangle est rectangle — au sommet opposé au plus grand côté.

#exemple
Nature du triangle $PQR$ dont les sommets ont pour affixes $z_P = i$, $z_Q = 3+i$ et $z_R = 3+4i$.

On calcule les trois longueurs :

$$
PQ = \lvert z_Q-z_P\rvert = \lvert 3\rvert = 3
$$

$$
QR = \lvert z_R-z_Q\rvert = \lvert 3i\rvert = 3
$$

$$
PR = \lvert z_R-z_P\rvert = \lvert 3+3i\rvert = \sqrt{9+9} = 3\sqrt2
$$

**Première lecture** : $PQ = QR = 3$, donc le triangle est **isocèle en $Q$** — le sommet commun aux deux côtés égaux.

**Seconde lecture** : le plus grand côté est $PR$, et

$$
PQ^2+QR^2 = 9+9 = 18 = (3\sqrt2)^2 = PR^2
$$

D'après la réciproque du théorème de Pythagore, le triangle est **rectangle en $Q$**, le sommet opposé au plus grand côté.

Conclusion : $PQR$ est isocèle rectangle en $Q$. On remarque que l'hypoténuse vaut $\sqrt2$ fois le côté — c'est la signature d'un triangle isocèle rectangle.

#solution
On dispose déjà de $AB = 5$. On calcule les deux autres longueurs.

$$
AC = \lvert z_C-z_A\rvert = \lvert (5+5i)-(1+2i)\rvert = \lvert 4+3i\rvert = \sqrt{16+9} = \boxed{5}
$$

$$
BC = \lvert z_C-z_B\rvert = \lvert (5+5i)-(4-2i)\rvert = \lvert 1+7i\rvert = \sqrt{1+49} = \sqrt{50} = \boxed{5\sqrt2}
$$

**Isocèle.** On a $AB = AC = 5$ : le triangle est isocèle en $A$, sommet commun aux deux côtés égaux.

**Rectangle.** Le plus grand côté est $BC$, et

$$
AB^2+AC^2 = 25+25 = 50 = \left(5\sqrt2\right)^2 = BC^2
$$

D'après la réciproque du théorème de Pythagore, le triangle est rectangle en $A$.

$$
\boxed{ABC \text{ est isocèle rectangle en } A}
$$

On retrouve bien la relation caractéristique $BC = AB\sqrt2$ entre l'hypoténuse et les côtés de l'angle droit.
::

::exo-question{label="3." cours="xnc-ensembles"}
Déterminer et décrire l'ensemble des points $M$ d'affixe $z$ tels que :

a) $\lvert z-2+i\rvert = 3$ ;

b) $\lvert z-1\rvert = \lvert z+i\rvert$.

#indice
Tout repose sur une seule lecture : $\lvert z-z_A\rvert$ **est la distance** $AM$, où $A$ est le point d'affixe $z_A$. La difficulté n'est donc pas le calcul mais l'écriture : il faut faire apparaître une différence, en rangeant l'expression sous la forme $z-z_A$.

Pour a), $z-2+i$ se réécrit $z-(2-i)$ — attention au signe. Une distance à un point fixe qui vaut une constante décrit un **cercle**.

Pour b), l'égalité dit que $M$ est à égale distance de deux points fixes : c'est la définition d'une **médiatrice**. Si tu préfères vérifier par le calcul, pose $z = x+iy$ et développe les deux membres élevés au carré.

#exemple
Sur $\lvert z+3-2i\rvert = 4$, puis sur $\lvert z-2i\rvert = \lvert z+4\rvert$.

**Premier ensemble.** On range l'expression sous la forme $z-z_A$ :

$$
z+3-2i = z-(-3+2i)
$$

En notant $\Omega$ le point d'affixe $-3+2i$, la condition s'écrit $\Omega M = 4$. L'ensemble cherché est donc le **cercle de centre $\Omega(-3;2)$ et de rayon $4$**.

**Second ensemble.** On range les deux membres :

$$
\lvert z-2i\rvert = \lvert z-(-4)\rvert
$$

En notant $A$ le point d'affixe $2i$ et $B$ celui d'affixe $-4$, la condition s'écrit $AM = BM$ : l'ensemble est la **médiatrice du segment $[AB]$**, avec $A(0;2)$ et $B(-4;0)$.

**Contrôle par le calcul**, si l'on veut l'équation de cette droite. On pose $z = x+iy$ et on élève au carré :

$$
x^2+(y-2)^2 = (x+4)^2+y^2
$$

$$
-4y+4 = 8x+16 \qquad\Longleftrightarrow\qquad y = -2x-3
$$

C'est bien une droite, et elle passe par le milieu $(-2;1)$ de $[AB]$.

#solution
**a)** On range l'expression pour faire apparaître une différence :

$$
\lvert z-2+i\rvert = \lvert z-(2-i)\rvert
$$

En notant $\Omega$ le point d'affixe $2-i$, la condition devient $\Omega M = 3$ : la distance de $M$ au point fixe $\Omega$ est constante.

$$
\boxed{\text{Cercle de centre } \Omega(2;-1) \text{ et de rayon } 3}
$$

**b)** On range de même les deux membres :

$$
\lvert z-1\rvert = \lvert z-(-i)\rvert
$$

En notant $A$ le point d'affixe $1$ et $B$ celui d'affixe $-i$, la condition s'écrit $AM = BM$ : le point $M$ est équidistant de $A$ et de $B$.

$$
\boxed{\text{Médiatrice du segment } [AB], \text{ avec } A(1;0) \text{ et } B(0;-1)}
$$

**Contrôle par le calcul.** On pose $z = x+iy$ et on élève les deux membres au carré (licite, les deux sont positifs) :

$$
(x-1)^2+y^2 = x^2+(y+1)^2
$$

$$
-2x+1 = 2y+1 \qquad\Longleftrightarrow\qquad y = -x
$$

La droite d'équation $y = -x$ passe bien par le milieu $\left(\dfrac12;-\dfrac12\right)$ de $[AB]$, et sa direction $(1;-1)$ est orthogonale à $\overrightarrow{AB}\,(-1;-1)$ : c'est bien la médiatrice.
::
:::

:::exercice{titre="Palier 5 — Module, argument et forme exponentielle" theme="Passer de la forme algébrique à la forme exponentielle, et s'en servir pour les grandes puissances" badge="★★★★★" icone="i-lucide-orbit"}
Dernier palier : on change de point de vue. Plutôt que de repérer un complexe par ses coordonnées $(a;b)$, on le repère par sa **distance à l'origine** — le module — et par l'**angle** qu'il fait avec l'axe des abscisses — l'argument. Les produits et les puissances deviennent alors élémentaires.

::cercle-trigo{titre="Situer un argument sur le cercle" resume="Le couple (signe du cosinus, signe du sinus) désigne un quadrant, et un seul : c’est ce qui départage les deux angles candidats." angle="120" modes="explorer"}
::

::exo-question{label="1." cours="xnc-module-argument"}
Déterminer le module et un argument de $z = -1+i\sqrt3$, puis donner sa forme exponentielle.

#indice
L'ordre des opérations n'est pas négociable : **le module d'abord**, l'argument ensuite. Le module se calcule directement, $\lvert z\rvert = \sqrt{a^2+b^2}$, et c'est lui qui sert à normaliser pour trouver l'angle.

Pour l'argument, il faut **les deux** relations $\cos\theta = \dfrac{a}{\lvert z\rvert}$ et $\sin\theta = \dfrac{b}{\lvert z\rvert}$. Le cosinus seul laisserait deux angles en concurrence ; c'est le signe du sinus qui départage. Ici, avec un cosinus négatif et un sinus positif, l'angle est dans le deuxième quadrant.

#exemple
Sur $w = -2-2i$.

**Le module** d'abord :

$$
\lvert w\rvert = \sqrt{(-2)^2+(-2)^2} = \sqrt{8} = 2\sqrt2
$$

**L'argument** ensuite, en divisant chaque coordonnée par le module :

$$
\cos\theta = \frac{-2}{2\sqrt2} = -\frac{1}{\sqrt2} = -\frac{\sqrt2}{2}
\qquad\text{et}\qquad
\sin\theta = \frac{-2}{2\sqrt2} = -\frac{\sqrt2}{2}
$$

Le cosinus vaut $-\dfrac{\sqrt2}{2}$, ce qui laisse $\dfrac{3\pi}{4}$ et $-\dfrac{3\pi}{4}$ en concurrence. Le sinus est **négatif** : c'est donc le second. On peut le voir aussi sur la figure — les deux coordonnées sont négatives, le point est dans le troisième quadrant.

$$
\theta = -\frac{3\pi}{4} \qquad\text{donc}\qquad w = 2\sqrt2\,e^{-i\frac{3\pi}{4}}
$$

**Contrôle** : $2\sqrt2\left(\cos\left(-\dfrac{3\pi}{4}\right)+i\sin\left(-\dfrac{3\pi}{4}\right)\right) = 2\sqrt2\left(-\dfrac{\sqrt2}{2}-\dfrac{\sqrt2}{2}i\right) = -2-2i$. ✓

#solution
**Le module**, avec $a = -1$ et $b = \sqrt3$ :

$$
\lvert z\rvert = \sqrt{(-1)^2+\left(\sqrt3\right)^2} = \sqrt{1+3} = \sqrt4 = \boxed{2}
$$

**L'argument.** On divise chaque coordonnée par le module :

$$
\cos\theta = \frac{-1}{2} \qquad\text{et}\qquad \sin\theta = \frac{\sqrt3}{2}
$$

Le cosinus vaut $-\dfrac12$, ce qui laisse $\dfrac{2\pi}{3}$ et $-\dfrac{2\pi}{3}$ en concurrence. Le sinus est **positif**, donc c'est le premier : le point est dans le deuxième quadrant.

$$
\boxed{\theta = \frac{2\pi}{3} \quad (\text{mod } 2\pi)}
$$

**La forme exponentielle** rassemble les deux informations :

$$
\boxed{z = 2e^{i\frac{2\pi}{3}}}
$$

**Vérification** : $2\left(\cos\dfrac{2\pi}{3}+i\sin\dfrac{2\pi}{3}\right) = 2\left(-\dfrac12+i\dfrac{\sqrt3}{2}\right) = -1+i\sqrt3$. ✓
::

::exo-question{label="2." cours="xnc-exponentielle"}
On pose $z_1 = 1+i$ et $z_2 = \sqrt3+i$.

a) Donner la forme exponentielle de $z_1$ et de $z_2$.

b) En déduire la forme exponentielle de $\dfrac{z_1}{z_2}$.

c) Donner la forme algébrique de $\dfrac{z_1}{z_2}$, puis en déduire les valeurs exactes de $\cos\dfrac{\pi}{12}$ et $\sin\dfrac{\pi}{12}$.

#indice
Pour a), on applique deux fois la méthode de la question précédente. Les deux modules et les deux angles sont des valeurs remarquables.

Pour b), la forme exponentielle rend le quotient immédiat : **les modules se divisent, les arguments se soustraient**. Aucun conjugué n'intervient ici.

Pour c), on calcule le même quotient par l'autre méthode — celle du conjugué du dénominateur. On dispose alors de **deux écritures du même nombre**, et il suffit de les identifier : la partie réelle de l'une doit égaler la partie réelle de l'autre. C'est ce qui fait apparaître $\cos\dfrac{\pi}{12}$.

#exemple
Même démarche avec $u = \sqrt3+i$ et $v = 1-i$, pour obtenir $\cos\dfrac{5\pi}{12}$.

**Formes exponentielles.** $\lvert u\rvert = \sqrt{3+1} = 2$, avec $\cos\theta = \dfrac{\sqrt3}{2}$ et $\sin\theta = \dfrac12$, donc $\theta = \dfrac{\pi}{6}$ et $u = 2e^{i\frac{\pi}{6}}$.

De même $\lvert v\rvert = \sqrt2$, avec $\cos\varphi = \dfrac{\sqrt2}{2}$ et $\sin\varphi = -\dfrac{\sqrt2}{2}$, donc $\varphi = -\dfrac{\pi}{4}$ et $v = \sqrt2\,e^{-i\frac{\pi}{4}}$.

**Le quotient**, modules divisés et arguments soustraits :

$$
\frac{u}{v} = \frac{2}{\sqrt2}\,e^{i\left(\frac{\pi}{6}-\left(-\frac{\pi}{4}\right)\right)} = \sqrt2\,e^{i\frac{5\pi}{12}}
$$

**Le même quotient par le conjugué** :

$$
\frac{u}{v} = \frac{\left(\sqrt3+i\right)(1+i)}{(1-i)(1+i)} = \frac{\sqrt3+i\sqrt3+i-1}{2} = \frac{\sqrt3-1}{2}+\frac{\sqrt3+1}{2}i
$$

**Identification.** La première écriture donne aussi $\dfrac{u}{v} = \sqrt2\cos\dfrac{5\pi}{12}+i\sqrt2\sin\dfrac{5\pi}{12}$. En égalant les parties réelles :

$$
\sqrt2\cos\frac{5\pi}{12} = \frac{\sqrt3-1}{2}
\qquad\Longrightarrow\qquad
\cos\frac{5\pi}{12} = \frac{\sqrt3-1}{2\sqrt2} = \frac{\sqrt6-\sqrt2}{4}
$$

La dernière étape multiplie haut et bas par $\sqrt2$ pour chasser la racine du dénominateur.

#solution
**a) Les formes exponentielles.**

Pour $z_1 = 1+i$ : $\lvert z_1\rvert = \sqrt{1+1} = \sqrt2$, puis

$$
\cos\theta_1 = \frac{1}{\sqrt2} = \frac{\sqrt2}{2} \qquad\text{et}\qquad \sin\theta_1 = \frac{\sqrt2}{2}
$$

Les deux sont positifs, donc $\theta_1 = \dfrac{\pi}{4}$ et $\boxed{z_1 = \sqrt2\,e^{i\frac{\pi}{4}}}$.

Pour $z_2 = \sqrt3+i$ : $\lvert z_2\rvert = \sqrt{3+1} = 2$, puis

$$
\cos\theta_2 = \frac{\sqrt3}{2} \qquad\text{et}\qquad \sin\theta_2 = \frac12
$$

Donc $\theta_2 = \dfrac{\pi}{6}$ et $\boxed{z_2 = 2e^{i\frac{\pi}{6}}}$.

**b) Le quotient.** Les modules se divisent, les arguments se soustraient :

$$
\frac{z_1}{z_2} = \frac{\sqrt2}{2}\,e^{i\left(\frac{\pi}{4}-\frac{\pi}{6}\right)}
$$

Or $\dfrac{\pi}{4}-\dfrac{\pi}{6} = \dfrac{3\pi-2\pi}{12} = \dfrac{\pi}{12}$, d'où

$$
\boxed{\frac{z_1}{z_2} = \frac{\sqrt2}{2}\,e^{i\frac{\pi}{12}}}
$$

**c) La forme algébrique**, par la méthode du conjugué du dénominateur $\overline{z_2} = \sqrt3-i$ :

$$
\frac{z_1}{z_2} = \frac{(1+i)\left(\sqrt3-i\right)}{\left(\sqrt3+i\right)\left(\sqrt3-i\right)} = \frac{\sqrt3-i+i\sqrt3-i^2}{3+1}
$$

$$
\frac{z_1}{z_2} = \frac{\left(\sqrt3+1\right)+\left(\sqrt3-1\right)i}{4}
$$

**L'identification.** La forme exponentielle du b) se réécrit

$$
\frac{z_1}{z_2} = \frac{\sqrt2}{2}\cos\frac{\pi}{12}+i\,\frac{\sqrt2}{2}\sin\frac{\pi}{12}
$$

Un nombre complexe n'a qu'une seule forme algébrique : les deux parties réelles coïncident, et les deux parties imaginaires aussi. D'où

$$
\frac{\sqrt2}{2}\cos\frac{\pi}{12} = \frac{\sqrt3+1}{4}
\qquad\Longrightarrow\qquad
\cos\frac{\pi}{12} = \frac{2\left(\sqrt3+1\right)}{4\sqrt2} = \frac{\sqrt3+1}{2\sqrt2}
$$

On multiplie haut et bas par $\sqrt2$ pour rendre le dénominateur rationnel :

$$
\boxed{\cos\frac{\pi}{12} = \frac{\sqrt6+\sqrt2}{4}}
\qquad\text{et de même}\qquad
\boxed{\sin\frac{\pi}{12} = \frac{\sqrt6-\sqrt2}{4}}
$$

**Contrôle numérique** : $\dfrac{\sqrt6+\sqrt2}{4}\approx 0{,}966$, et $\cos 15° \approx 0{,}966$. ✓
::

::exo-question{label="3." cours="xnc-exponentielle"}
Calculer $(1+i)^{12}$, puis $\left(-1+i\sqrt3\right)^{2026}$, et donner chaque résultat sous forme algébrique.

#indice
Développer est hors de question : c'est précisément ce que la forme exponentielle permet d'éviter. La formule à utiliser est celle de Moivre, $\left(re^{i\theta}\right)^n = r^n e^{in\theta}$ — **le module est élevé à la puissance $n$, l'argument est multiplié par $n$**.

Reste le point délicat : l'angle obtenu est énorme. On le ramène dans $]-\pi;\pi]$ en lui retirant un nombre entier de tours, c'est-à-dire en travaillant modulo $2\pi$. Les deux formes exponentielles utiles ont déjà été calculées aux questions 1 et 2.

#exemple
Calcul de $\left(\sqrt3+i\right)^{10}$.

**Forme exponentielle** — déjà obtenue plus haut : $\sqrt3+i = 2e^{i\frac{\pi}{6}}$.

**Moivre** — on élève le module à la puissance $10$ et on multiplie l'argument par $10$ :

$$
\left(\sqrt3+i\right)^{10} = 2^{10}\,e^{i\frac{10\pi}{6}} = 1024\,e^{i\frac{5\pi}{3}}
$$

**Réduction de l'angle.** On retire un tour, c'est-à-dire $2\pi$ :

$$
\frac{5\pi}{3}-2\pi = -\frac{\pi}{3}
$$

**Retour à la forme algébrique** :

$$
1024\,e^{-i\frac{\pi}{3}} = 1024\left(\cos\left(-\frac{\pi}{3}\right)+i\sin\left(-\frac{\pi}{3}\right)\right) = 1024\left(\frac12-i\frac{\sqrt3}{2}\right) = 512-512i\sqrt3
$$

#solution
**Première puissance.** D'après la question 2, $1+i = \sqrt2\,e^{i\frac{\pi}{4}}$. La formule de Moivre donne

$$
(1+i)^{12} = \left(\sqrt2\right)^{12}e^{i\frac{12\pi}{4}} = 2^{6}\,e^{i3\pi} = 64\,e^{i3\pi}
$$

Or $3\pi = \pi+2\pi$, donc $e^{i3\pi} = e^{i\pi} = -1$, d'où

$$
\boxed{(1+i)^{12} = -64}
$$

**Contrôle par une autre route** : $(1+i)^2 = 2i$, donc $(1+i)^{12} = (2i)^6 = 2^6 i^6 = 64\times i^4\times i^2 = -64$. ✓

**Seconde puissance.** D'après la question 1, $-1+i\sqrt3 = 2e^{i\frac{2\pi}{3}}$. Moivre donne

$$
\left(-1+i\sqrt3\right)^{2026} = 2^{2026}\,e^{i\frac{2026\times 2\pi}{3}} = 2^{2026}\,e^{i\frac{4052\pi}{3}}
$$

**Réduction de l'angle.** On cherche le reste de $4052$ dans la division par $6$, puisque retirer un tour revient à retirer $\dfrac{6\pi}{3}$ :

$$
4052 = 6\times 675+2
$$

Donc $\dfrac{4052\pi}{3} = 675\times 2\pi+\dfrac{2\pi}{3}$, et il reste

$$
\left(-1+i\sqrt3\right)^{2026} = 2^{2026}\,e^{i\frac{2\pi}{3}}
$$

**Retour à la forme algébrique** :

$$
2^{2026}\left(-\frac12+i\frac{\sqrt3}{2}\right) = \boxed{-2^{2025}+2^{2025}\sqrt3\,i}
$$

Le nombre de départ retrouve son propre argument : c'est normal, $2026$ et $1$ ont le même reste modulo $3$, et l'argument $\dfrac{2\pi}{3}$ est d'ordre $3$.
::
:::

## Les rappels de cours de cette fiche

Ces tiroirs s'ouvrent aussi depuis le bouton **Cours** de chaque question. Ils sont regroupés ici pour permettre une relecture d'ensemble.

::extrait-cours{id="xnc-forme-algebrique" titre="Forme algébrique, partie réelle et partie imaginaire" source="/cours/a1/remise-a-niveau-maths/nombres-complexes/cours#_1-la-forme-algébrique"}
On admet l'existence d'un nombre $i$ tel que $i^2 = -1$. Tout nombre complexe s'écrit alors de façon **unique**

$$
z = a+bi, \qquad a = \mathcal{R}e(z), \quad b = \mathcal{I}m(z)
$$

où $a$ et $b$ sont **réels**. C'est la forme algébrique.

- $\mathcal{I}m(z)$ est un **réel** : $\mathcal{I}m(3-2i) = -2$, et non $-2i$.
- $z$ est **réel** $\iff \mathcal{I}m(z) = 0$ ; $z$ est **imaginaire pur** $\iff \mathcal{R}e(z) = 0$.
- **Égalité** : $z = z'$ si et seulement si les parties réelles **et** les parties imaginaires coïncident. Une égalité complexe vaut donc pour deux égalités réelles — c'est le principe de l'identification.
::

::extrait-cours{id="xnc-puissances-i" titre="Les puissances de i" source="/cours/a1/remise-a-niveau-maths/nombres-complexes/cours#_2-les-opérations"}
Tout découle de $i^2 = -1$ :

$$
i^1 = i, \qquad i^2 = -1, \qquad i^3 = -i, \qquad i^4 = 1
$$

Comme $i^4 = 1$, les puissances **se répètent de quatre en quatre**. Pour calculer $i^n$, on écrit $n = 4q+r$ et on garde $i^r$ :

$$
i^n = i^{4q+r} = \left(i^4\right)^q\times i^r = i^r
$$

En pratique : diviser l'exposant par $4$, ne regarder que le **reste**, et lire $1$, $i$, $-1$, $-i$ pour un reste de $0$, $1$, $2$, $3$.
::

::extrait-cours{id="xnc-operations" titre="Somme, produit et carré" source="/cours/a1/remise-a-niveau-maths/nombres-complexes/cours#_2-les-opérations"}
La règle du jeu tient en une phrase : **on calcule comme en algèbre ordinaire**, $i$ jouant le rôle d'une variable, et on remplace $i^2$ par $-1$ dès qu'il apparaît.

**Somme et différence** — composante par composante :

$$
(a+bi)\pm(c+di) = (a\pm c)+(b\pm d)i
$$

**Produit** — double distributivité, puis $i^2 = -1$ :

$$
(a+bi)(c+di) = ac-bd+(ad+bc)i
$$

**Carré** — l'identité remarquable $(a+b)^2 = a^2+2ab+b^2$ s'applique telle quelle, en n'oubliant pas d'élever coefficient **et** $i$ au carré dans le terme $b^2$. Une fois développée, elle donne

$$
(a+bi)^2 = a^2-b^2+2abi
$$

**Le cas d'une soustraction, où l'on se trompe le plus.** Pour $(1-2i)^2$, deux façons de faire, toutes deux justes :

$$
\underbrace{1^2+2\times 1\times(-2i)+(-2i)^2}_{(a+b)^2 \text{ avec } b = -2i}
\qquad\text{ou}\qquad
\underbrace{1^2-2\times 1\times 2i+(2i)^2}_{(a-b)^2 \text{ avec } b = +2i}
$$

Les deux donnent $1-4i-4 = -3-4i$. Ce qu'il ne faut **pas** faire, c'est les mélanger : poser $b = -2i$ **et** utiliser la formule en $-2ab$ compterait le signe moins deux fois. La règle simple : **soit le moins est dans $b$, soit il est dans la formule — jamais les deux.**

Deux carrés à connaître par cœur, ils reviennent sans cesse :

$$
(1+i)^2 = 2i \qquad\text{et}\qquad (1-i)^2 = -2i
$$
::

::extrait-cours{id="xnc-conjugue-quotient" titre="Conjugué et quotient" source="/cours/a1/remise-a-niveau-maths/nombres-complexes/cours#_2-les-opérations"}
Le **conjugué** de $z = a+bi$ est $\bar z = a-bi$ : on change le signe de la partie imaginaire. Sa propriété décisive :

$$
z\bar z = a^2+b^2 \quad\text{— un réel positif}
$$

Autres règles : $\overline{\bar z} = z$, $\overline{z_1+z_2} = \overline{z_1}+\overline{z_2}$, $\overline{z_1z_2} = \overline{z_1}\,\overline{z_2}$. Et deux caractérisations : $z$ est réel $\iff z = \bar z$ ; $z$ est imaginaire pur $\iff z = -\bar z$.

**Quotient.** Un quotient n'est pas sous forme algébrique tant qu'il reste un $i$ au dénominateur. On multiplie donc **en haut et en bas** par le conjugué du dénominateur, ce qui rend celui-ci réel :

$$
\frac{z_1}{z_2} = \frac{z_1\overline{z_2}}{z_2\overline{z_2}} = \frac{z_1\overline{z_2}}{\lvert z_2\rvert^2}
$$

On termine toujours en **séparant la fraction en deux**, pour faire apparaître la forme $a+bi$.
::

::extrait-cours{id="xnc-second-degre" titre="Équation du second degré à coefficients réels" source="/cours/a1/remise-a-niveau-maths/nombres-complexes/cours#_3-équation-du-second-degré"}
Pour $az^2+bz+c = 0$ avec $a$, $b$, $c$ réels et $a\neq 0$, on calcule $\Delta = b^2-4ac$ comme dans $\mathbb{R}$.

- Si $\Delta \geq 0$ : les racines réelles habituelles.
- Si $\Delta < 0$ : **deux racines complexes conjuguées**

$$
z = \frac{-b\pm i\sqrt{-\Delta}}{2a}
$$

**Ne jamais écrire $\sqrt{\Delta}$ quand $\Delta<0$.** On écrit $\Delta = -\lvert\Delta\rvert = \left(i\sqrt{\lvert\Delta\rvert}\right)^2$, et c'est $i\sqrt{-\Delta}$ qui prend la place de $\sqrt\Delta$.

Les coefficients étant réels, les racines sont toujours conjuguées l'une de l'autre : c'est une vérification gratuite. On peut aussi contrôler par $S = -\dfrac{b}{a}$ et $P = \dfrac{c}{a}$.
::

::extrait-cours{id="xnc-affixes" titre="Affixes, distances et milieu" source="/cours/a1/remise-a-niveau-maths/nombres-complexes/cours#_4-points-vecteurs-et-affixes"}
Le plan est muni d'un repère orthonormé direct. Au point $M(x;y)$ — comme au vecteur $\vec w\,(x;y)$ — on associe son **affixe** $z = x+yi$.

$$
z_{\overrightarrow{AB}} = z_B-z_A \quad (\text{extrémité moins origine}) \qquad AB = \lvert z_B-z_A\rvert
$$

$$
z_I = \frac{z_A+z_B}{2} \quad (\text{milieu de } [AB])
$$

Le **module** $\lvert z\rvert = \sqrt{x^2+y^2}$ est la distance $OM$ : c'est toujours un réel positif.

Pour la **nature d'un triangle**, on calcule les trois longueurs : deux égales donnent un triangle isocèle, et la réciproque du théorème de Pythagore décide s'il est rectangle.
::

::extrait-cours{id="xnc-ensembles" titre="Ensembles de points définis par un module" source="/cours/a1/remise-a-niveau-maths/nombres-complexes/cours#_4-points-vecteurs-et-affixes"}
Toute la méthode tient dans une lecture : $\lvert z-z_A\rvert$ **est la distance** $AM$, où $A$ est le point d'affixe $z_A$ et $M$ celui d'affixe $z$.

Il faut donc d'abord **ranger** l'expression sous la forme $z-z_A$, en surveillant les signes : $z+3-2i$ s'écrit $z-(-3+2i)$.

Deux configurations à reconnaître :

$$
\lvert z-z_A\rvert = r \quad\Longleftrightarrow\quad AM = r \quad\text{— cercle de centre } A \text{ et de rayon } r
$$

$$
\lvert z-z_A\rvert = \lvert z-z_B\rvert \quad\Longleftrightarrow\quad AM = BM \quad\text{— médiatrice de } [AB]
$$

En cas de doute, on peut toujours poser $z = x+iy$ et élever les deux membres au carré : on retombe sur l'équation cartésienne du cercle ou de la droite.
::

::extrait-cours{id="xnc-module-argument" titre="Module et argument" source="/cours/a1/remise-a-niveau-maths/nombres-complexes/cours#_5-module-et-argument"}
Pour $z = x+yi$ non nul :

$$
r = \lvert z\rvert = \sqrt{x^2+y^2} \qquad\text{puis}\qquad \cos\theta = \frac{x}{r}, \quad \sin\theta = \frac{y}{r}
$$

**Le module d'abord, l'argument ensuite** : c'est le module qui sert à normaliser.

L'argument exige **cosinus et sinus**. Le cosinus seul laisse deux angles en concurrence ($\cos\theta = \frac12$ ne départage pas $\frac{\pi}{3}$ de $-\frac{\pi}{3}$) ; c'est le signe du sinus qui tranche, autrement dit le quadrant où se trouve le point.

L'argument n'est défini qu'**à $2\pi$ près**, d'où la mention « mod $2\pi$ ».
::

::extrait-cours{id="xnc-exponentielle" titre="Forme exponentielle, produit, quotient et Moivre" source="/cours/a1/remise-a-niveau-maths/nombres-complexes/cours#_7-forme-exponentielle"}
Tout complexe non nul s'écrit

$$
z = re^{i\theta}, \qquad r = \lvert z\rvert > 0, \quad \theta = \arg z
$$

avec $e^{i\theta} = \cos\theta+i\sin\theta$. La contrainte $r>0$ n'est pas négociable : $-2e^{i\theta}$ n'est pas une forme exponentielle.

Les opérations deviennent alors élémentaires — **les modules se multiplient ou se divisent, les arguments s'ajoutent ou se soustraient** :

$$
r_1e^{i\theta_1}\times r_2e^{i\theta_2} = r_1r_2\,e^{i(\theta_1+\theta_2)}
\qquad
\frac{r_1e^{i\theta_1}}{r_2e^{i\theta_2}} = \frac{r_1}{r_2}\,e^{i(\theta_1-\theta_2)}
$$

**Formule de Moivre** — c'est elle qui rend les grandes puissances calculables :

$$
\left(re^{i\theta}\right)^n = r^n e^{in\theta}
$$

L'angle obtenu se ramène ensuite dans $]-\pi;\pi]$ en retirant un nombre entier de tours, c'est-à-dire modulo $2\pi$.
::
