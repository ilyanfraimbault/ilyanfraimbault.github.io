---
title: Révisions dérivées — exercices
description: Les trente-quatre dérivées de la fiche de révisions, dans l'ordre du sujet. Sous chaque question, un indice, la solution détaillée et le rappel de cours utile.
type: exercices
annee: A1
matiere: Remise à niveau en maths
ordre: 3
icone: i-lucide-pencil-line
---

::rappel{titre="Comment se servir de cette page" icone="i-lucide-compass"}
Trente-quatre dérivées à calculer, dans l'ordre exact de la fiche. Sous chaque question, trois boutons — et aucun ne quitte la page :

- **Indice** — la piste à suivre, sans le résultat.
- **Voir la solution** — la correction rédigée, étape par étape.
- **Cours** — un tiroir avec le rappel utile à cette question précise, et le lien vers la section du cours.

Contrairement au TD, cette fiche **ne regroupe pas les fonctions par type** : une somme succède à un quotient, une racine à une forme composée. C'est tout son intérêt, et c'est aussi ce qui la rend difficile — le vrai travail est de **reconnaître la structure** avant d'appliquer la moindre formule. Le réflexe à garder, question après question :

1. l'écriture se **simplifie**-t-elle ? (développer, réduire, passer en puissance)
2. sinon, quelle est sa **structure** ? somme, produit $uv$, quotient $\dfrac{u}{v}$, forme composée ?
3. **poser** $u$ et $v$, calculer $u'$ et $v'$ **à part**, puis remplacer et simplifier.
::

::carte-lien{to="/cours/a1/remise-a-niveau-maths/fonctions-variable-reelle/cours" titre="Le cours du chapitre" description="Continuité, TVI, dérivabilité, tableau des dérivées usuelles, formes composées et bijections" type="cours" meta="7 sections"}
::

::carte-lien{to="/cours/a1/remise-a-niveau-maths/fonctions-variable-reelle/exercices" titre="Les exercices du TD" description="Les six exercices du programme et leurs 53 dérivées, groupés par type de fonction" type="exercices" meta="6 exercices"}
::

::carte-lien{to="/cours/a1/remise-a-niveau-maths/fonctions-variable-reelle/entrainement" titre="La fiche d’entraînement" description="Si ces dérivées démarrent trop haut : quinze questions en cinq paliers, du tableau jusqu’à la bijection réciproque" type="entrainement" meta="15 questions"}
::

:::exercice{titre="Révisions dérivées" theme="Trente-quatre fonctions à dériver, dans l'ordre du sujet et sans regroupement par type" icone="i-lucide-list-ordered"}

::exo-question{label="1." cours="cours-tableau"}
$$
f(x) = -5x^3+4x^2-9x-5
$$

#indice
Un polynôme se dérive **terme à terme**, et chaque terme relève de la ligne $\left(x^\alpha\right)' = \alpha x^{\alpha-1}$ du tableau. Les coefficients suivent sans rien changer, et la constante $-5$ disparaît.

#solution
On dérive les quatre termes séparément :

$$
(-5x^3)' = -15x^2 \qquad (4x^2)' = 8x \qquad (-9x)' = -9 \qquad (-5)' = 0
$$

$$
\boxed{f'(x) = -15x^2+8x-9}
$$

$f$ est un polynôme : elle est dérivable sur $\mathbb{R}$.
::

::exo-question{label="2." cours="cours-tableau"}
$$
f(x) = -\frac12 x^4+3x^3-4x^2+\sqrt3\,x+1
$$

#indice
Même geste qu'à la question précédente. Le seul piège est le terme $\sqrt3\,x$ : le radical porte sur le $3$ **seul**, donc $\sqrt3$ est une **constante** qui multiplie $x$. Sa dérivée est $\sqrt3$, et non quelque chose en $\dfrac{1}{2\sqrt x}$.

#solution
Terme à terme, en traitant $\sqrt3$ comme le coefficient constant qu'il est :

$$
\left(-\frac12 x^4\right)' = -\frac12\times 4x^3 = -2x^3
\qquad
(3x^3)' = 9x^2
$$

$$
(-4x^2)' = -8x
\qquad
\left(\sqrt3\,x\right)' = \sqrt3
\qquad
(1)' = 0
$$

$$
\boxed{f'(x) = -2x^3+9x^2-8x+\sqrt3}
$$

Dérivable sur $\mathbb{R}$, comme tout polynôme — le coefficient irrationnel n'y change rien.
::

::exo-question{label="3." cours="cours-tableau"}
$$
f(x) = -\sqrt{x}+\frac{x^2}{2}
$$

#indice
Une somme de deux termes, tous deux dans le tableau : $\left(\sqrt x\right)' = \dfrac{1}{2\sqrt x}$, et $\dfrac{x^2}{2}$ n'est que $\dfrac12 x^2$.

Attention au domaine : la racine impose $x \geqslant 0$ pour l'existence, mais seulement $x > 0$ pour la dérivabilité.

#solution
On dérive les deux termes :

$$
\left(-\sqrt x\right)' = -\frac{1}{2\sqrt x}
\qquad
\left(\frac12 x^2\right)' = \frac12\times 2x = x
$$

$$
\boxed{f'(x) = -\frac{1}{2\sqrt x}+x}
$$

$f$ est définie sur $[0\,;+\infty[$ et dérivable sur $]0\,;+\infty[$ seulement : en $0$, la racine a une tangente verticale.
::

::exo-question{label="4." cours="cours-produit"}
$$
f(x) = (x-2)\sqrt{x}
$$

#indice
Deux chemins mènent au résultat, et les deux sont bons.

Le plus rapide : **distribuer d'abord**, ce qui donne $x\sqrt x-2\sqrt x$, soit $x^{3/2}-2x^{1/2}$ — deux puissances que le tableau dérive directement.

Le plus classique : la formule du produit $(uv)' = u'v+uv'$, avec $u = x-2$ et $v = \sqrt x$. Il faudra alors mettre les deux termes au même dénominateur $2\sqrt x$, en se souvenant que $\sqrt x\times\sqrt x = x$.

#solution
**Par la formule du produit.** On pose

$$
u = x-2,\quad u' = 1, \qquad v = \sqrt x,\quad v' = \frac{1}{2\sqrt x}
$$

$$
f'(x) = \sqrt x+\frac{x-2}{2\sqrt x}
$$

On met au même dénominateur, avec $\sqrt x = \dfrac{2x}{2\sqrt x}$ :

$$
f'(x) = \frac{2x+x-2}{2\sqrt x} = \boxed{\frac{3x-2}{2\sqrt x}}
$$

**Contrôle par la réécriture.** $f(x) = x^{3/2}-2x^{1/2}$, donc

$$
f'(x) = \frac32 x^{1/2}-x^{-1/2} = \frac{3\sqrt x}{2}-\frac{1}{\sqrt x} = \frac{3x-2}{2\sqrt x}
$$

Les deux chemins concordent. Dérivable sur $]0\,;+\infty[$.
::

::exo-question{label="5." cours="cours-tableau"}
$$
f(x) = \frac{x^3+12x-1}{4}
$$

#indice
Ne pas se laisser impressionner par la barre de fraction : le dénominateur est une **constante**, pas une fonction. Il n'y a donc aucune formule de quotient à sortir.

On écrit $f(x) = \dfrac14\left(x^3+12x-1\right)$, et le $\dfrac14$ se contente de suivre.

#solution
Le facteur constant $\dfrac14$ sort de la dérivation :

$$
f'(x) = \frac14\left(x^3+12x-1\right)' = \frac14\left(3x^2+12\right)
$$

$$
\boxed{f'(x) = \frac{3x^2+12}{4}}
$$

On peut aussi l'écrire $\dfrac34 x^2+3$. Dérivable sur $\mathbb{R}$.
::

::exo-question{label="6." cours="cours-composees"}
$$
f(x) = (7x-2)^2
$$

#indice
Deux chemins, encore. Le développement $(7x-2)^2 = 49x^2-28x+4$ marche très bien ici.

Mais c'est l'occasion d'appliquer la formule de la puissance composée, qui seule tiendra pour un exposant $4$ ou $5$ :

$$
\left(u^n\right)' = n\,u'\,u^{n-1}
$$

avec $u = 7x-2$ et donc $u' = 7$ — c'est ce facteur $7$ qu'on oublie.

#solution
**Par la forme composée.** On pose $u = 7x-2$, donc $u' = 7$ et $n = 2$ :

$$
f'(x) = 2\times 7\times(7x-2) = 14(7x-2)
$$

$$
\boxed{f'(x) = 98x-28}
$$

**Contrôle par le développement.** $f(x) = 49x^2-28x+4$, donc $f'(x) = 98x-28$. ✓

Dérivable sur $\mathbb{R}$.
::

::exo-question{label="7." cours="cours-reecriture"}
$$
f(x) = \left(\sqrt{x}+1\right)^2
$$

#indice
Ici le développement est nettement plus court, parce que le carré d'une racine **efface** la racine :

$$
\left(\sqrt x+1\right)^2 = x+2\sqrt x+1
$$

Il ne reste qu'une somme de termes du tableau.

La forme composée fonctionne aussi, avec $u = \sqrt x$ et $u' = \dfrac{1}{2\sqrt x}$ ; le facteur $2$ se simplifie alors avec celui du dénominateur.

#solution
**Par le développement.** L'identité $(a+b)^2 = a^2+2ab+b^2$ donne

$$
f(x) = \left(\sqrt x\right)^2+2\sqrt x+1 = x+2\sqrt x+1
$$

$$
f'(x) = 1+2\times\frac{1}{2\sqrt x} = \boxed{1+\frac{1}{\sqrt x}}
$$

On peut regrouper : $f'(x) = \dfrac{\sqrt x+1}{\sqrt x}$.

**Contrôle par la forme composée.** Avec $u = \sqrt x+1$ et $u' = \dfrac{1}{2\sqrt x}$ :

$$
f'(x) = 2\times\frac{1}{2\sqrt x}\times\left(\sqrt x+1\right) = \frac{\sqrt x+1}{\sqrt x}
$$

Même résultat. Dérivable sur $]0\,;+\infty[$.
::

::exo-question{label="8." cours="cours-tableau"}
$$
f(x) = x+\sin x
$$

#indice
Une somme, donc deux dérivations indépendantes. Les deux termes sont dans le tableau, et le sinus s'y dérive en cosinus — sans signe moins, celui-ci n'apparaissant que dans l'autre sens.

#solution
$$
(x)' = 1 \qquad (\sin x)' = \cos x
$$

$$
\boxed{f'(x) = 1+\cos x}
$$

Dérivable sur $\mathbb{R}$. Remarque utile : comme $\cos x \geqslant -1$, on a $f'(x) \geqslant 0$, donc $f$ est croissante sur $\mathbb{R}$, avec des tangentes horizontales aux points où $\cos x = -1$.
::

::exo-question{label="9." cours="cours-produit"}
$$
f(x) = x\sin x
$$

#indice
Un produit, cette fois : $u = x$ et $v = \sin x$. Rien ne se simplifie au préalable, la formule $(uv)' = u'v+uv'$ est le seul chemin.

Le réflexe qui coûte des points : écrire $u'v'$, c'est-à-dire $\cos x$ tout seul. Il faut **deux** termes.

#solution
On pose

$$
u = x,\quad u' = 1, \qquad v = \sin x,\quad v' = \cos x
$$

$$
f'(x) = 1\times\sin x+x\times\cos x
$$

$$
\boxed{f'(x) = \sin x+x\cos x}
$$

Rien ne se factorise ici : la forme obtenue est la forme finale. Dérivable sur $\mathbb{R}$.
::

::exo-question{label="10." cours="cours-reecriture"}
$$
f(x) = \frac{4}{x^3}
$$

#indice
Inutile de sortir la formule de l'inverse : le dénominateur est une simple puissance de $x$. On **réécrit** :

$$
\frac{4}{x^3} = 4x^{-3}
$$

et la ligne $\left(x^\alpha\right)' = \alpha x^{\alpha-1}$ s'applique telle quelle. Attention, l'exposant **descend** : de $-3$ on passe à $-4$.

#solution
On réécrit en puissance négative :

$$
f(x) = 4x^{-3}
$$

$$
f'(x) = 4\times(-3)x^{-4} = -12x^{-4}
$$

$$
\boxed{f'(x) = -\frac{12}{x^4}}
$$

C'est l'exposant qui apporte le signe moins : la dérivée est **négative** partout où elle existe. Cohérent, $f$ est décroissante sur chacun des deux intervalles de son domaine $\mathbb{R}^*$.
::

::exo-question{label="11." cours="cours-inverse"}
$$
f(x) = \frac{2}{3x-5}
$$

#indice
Le numérateur est une **constante** : la formule du quotient serait du gaspillage. Celle de l'inverse suffit :

$$
\left(\frac{k}{u}\right)' = -\frac{k\,u'}{u^2}
$$

avec $u = 3x-5$, donc $u' = 3$. Trois choses à ne pas perdre : le signe moins, le $u'$ au numérateur, le carré au dénominateur — qu'on ne développe pas.

#solution
On pose $u = 3x-5$, donc $u' = 3$ :

$$
f'(x) = -\frac{2\times 3}{(3x-5)^2}
$$

$$
\boxed{f'(x) = -\frac{6}{(3x-5)^2}}
$$

Le carré au dénominateur est toujours positif : $f'$ est strictement négative, donc $f$ décroît sur chacun des deux intervalles de $\mathbb{R}\setminus\left\{\dfrac53\right\}$ — mais pas sur leur réunion.
::

::exo-question{label="12." cours="cours-quotient"}
$$
f(x) = \frac{1-2x}{x-2}
$$

#indice
Un vrai quotient : $u = 1-2x$ et $v = x-2$.

$$
\left(\frac{u}{v}\right)' = \frac{u'v-uv'}{v^2}
$$

L'ordre des deux termes du numérateur n'est pas négociable, et le signe moins se distribue sur **tout** le second produit — parenthéser $uv'$ avant de développer évite l'oubli.

Un contrôle gratuit à connaître : pour un quotient de la forme $\dfrac{ax+b}{cx+d}$, le numérateur de la dérivée est toujours **constant**. Si un $x$ y subsiste, il y a une erreur.

#solution
On pose

$$
u = 1-2x,\quad u' = -2, \qquad v = x-2,\quad v' = 1
$$

$$
f'(x) = \frac{-2(x-2)-(1-2x)\times 1}{(x-2)^2} = \frac{-2x+4-1+2x}{(x-2)^2}
$$

Les termes en $x$ s'annulent, comme annoncé :

$$
\boxed{f'(x) = \frac{3}{(x-2)^2}}
$$

La dérivée est strictement positive : $f$ croît sur $]-\infty\,;2[$ et sur $]2\,;+\infty[$. Dérivable sur $\mathbb{R}\setminus\{2\}$.
::

::exo-question{label="13." cours="cours-tableau"}
$$
f(x) = x^4+x^2+1
$$

#indice
Un polynôme : terme à terme, sans autre règle. La constante $1$ disparaît.

#solution
$$
(x^4)' = 4x^3 \qquad (x^2)' = 2x \qquad (1)' = 0
$$

$$
\boxed{f'(x) = 4x^3+2x}
$$

On peut factoriser pour lire le signe : $f'(x) = 2x\left(2x^2+1\right)$. Comme $2x^2+1 > 0$, le signe de $f'$ est celui de $x$ : $f$ décroît puis croît, avec un minimum en $0$. Dérivable sur $\mathbb{R}$.
::

::exo-question{label="14." cours="cours-tableau"}
$$
f(x) = 2x^4-3x^3+\frac12 x^2
$$

#indice
Même chose. Le coefficient $\dfrac12$ du dernier terme se simplifie agréablement contre le $2$ que fait descendre la dérivation.

#solution
$$
(2x^4)' = 8x^3
\qquad
(-3x^3)' = -9x^2
\qquad
\left(\frac12 x^2\right)' = \frac12\times 2x = x
$$

$$
\boxed{f'(x) = 8x^3-9x^2+x}
$$

Factorisable en $x\left(8x^2-9x+1\right)$, soit $x(8x-1)(x-1)$ — utile si l'on doit ensuite dresser un tableau de signes. Dérivable sur $\mathbb{R}$.
::

::exo-question{label="15." cours="cours-quotient"}
$$
f(x) = \frac{x^2+x-1}{x^2+x+1}
$$

#indice
La formule du quotient s'applique, mais regarde d'abord les deux polynômes : ils ne diffèrent que par leur constante. Leurs **dérivées sont donc identiques**, toutes deux égales à $2x+1$.

Ce facteur commun se met en évidence dans le numérateur avant tout développement, et le calcul tient alors en deux lignes au lieu de six.

#solution
On pose

$$
u = x^2+x-1,\quad u' = 2x+1, \qquad v = x^2+x+1,\quad v' = 2x+1
$$

$$
f'(x) = \frac{(2x+1)\left(x^2+x+1\right)-\left(x^2+x-1\right)(2x+1)}{\left(x^2+x+1\right)^2}
$$

Le facteur $(2x+1)$ est commun aux deux termes du numérateur :

$$
f'(x) = \frac{(2x+1)\left[\left(x^2+x+1\right)-\left(x^2+x-1\right)\right]}{\left(x^2+x+1\right)^2} = \frac{(2x+1)\times 2}{\left(x^2+x+1\right)^2}
$$

$$
\boxed{f'(x) = \frac{2(2x+1)}{\left(x^2+x+1\right)^2}}
$$

**Le domaine.** Le dénominateur $x^2+x+1$ a pour discriminant $1-4 = -3 < 0$ : il ne s'annule jamais. $f$ est donc dérivable sur $\mathbb{R}$ **tout entier**, malgré la barre de fraction.
::

::exo-question{label="16." cours="cours-quotient"}
$$
f(x) = \frac{x^2+3x+2}{x^2-5x+6}
$$

#indice
Premier réflexe devant deux trinômes : **factoriser**, au cas où quelque chose se simplifierait. Ici $x^2+3x+2 = (x+1)(x+2)$ et $x^2-5x+6 = (x-2)(x-3)$ — aucun facteur commun, donc pas de raccourci. Mais la factorisation du dénominateur donne le domaine.

Reste la formule du quotient, avec $u' = 2x+3$ et $v' = 2x-5$. Développer les deux produits **séparément** avant de soustraire, en parenthésant le second.

#solution
**Le domaine d'abord.** $x^2-5x+6 = (x-2)(x-3)$ s'annule en $2$ et en $3$ : $f$ est dérivable sur $\mathbb{R}\setminus\{2\,;3\}$.

**La dérivée.** On pose

$$
u = x^2+3x+2,\quad u' = 2x+3, \qquad v = x^2-5x+6,\quad v' = 2x-5
$$

On développe les deux produits du numérateur séparément :

$$
(2x+3)\left(x^2-5x+6\right) = 2x^3-10x^2+12x+3x^2-15x+18 = 2x^3-7x^2-3x+18
$$

$$
\left(x^2+3x+2\right)(2x-5) = 2x^3-5x^2+6x^2-15x+4x-10 = 2x^3+x^2-11x-10
$$

Puis on soustrait, en surveillant chaque signe :

$$
\left(2x^3-7x^2-3x+18\right)-\left(2x^3+x^2-11x-10\right) = -8x^2+8x+28
$$

$$
\boxed{f'(x) = \frac{-8x^2+8x+28}{\left(x^2-5x+6\right)^2}}
$$

On peut factoriser par $-4$ : $f'(x) = \dfrac{-4\left(2x^2-2x-7\right)}{\left(x^2-5x+6\right)^2}$.

**Le contrôle** : les termes en $x^3$ doivent disparaître, puisque le degré du numérateur d'une dérivée de quotient est toujours inférieur d'au moins un au produit attendu. S'il en reste un, c'est qu'une erreur s'est glissée dans un développement.
::

::exo-question{label="17." cours="cours-quotient"}
$$
f(x) = x+1-\frac{2x}{x+3}
$$

#indice
C'est une **somme**, dont l'un des termes est un quotient. On dérive donc terme à terme, et seul le dernier demande du travail.

Le signe moins de l'énoncé porte sur toute la fraction : il se reporte tel quel sur la dérivée de celle-ci.

Pour $\dfrac{2x}{x+3}$, c'est encore une fonction de la forme $\dfrac{ax+b}{cx+d}$ : son numérateur dérivé sera constant.

#solution
On dérive les trois morceaux séparément. Les deux premiers sont immédiats :

$$
(x)' = 1 \qquad (1)' = 0
$$

Pour le quotient, on pose $u = 2x$, $u' = 2$, $v = x+3$, $v' = 1$ :

$$
\left(\frac{2x}{x+3}\right)' = \frac{2(x+3)-2x\times 1}{(x+3)^2} = \frac{2x+6-2x}{(x+3)^2} = \frac{6}{(x+3)^2}
$$

En reportant, avec le signe moins de l'énoncé :

$$
\boxed{f'(x) = 1-\frac{6}{(x+3)^2}}
$$

Dérivable sur $\mathbb{R}\setminus\{-3\}$.
::

::exo-question{label="18." cours="cours-quotient"}
$$
f(x) = \frac{x^2+2x+6}{x-1}
$$

#indice
Formule du quotient, avec $u = x^2+2x+6$ et $v = x-1$. Le dénominateur étant de degré $1$, sa dérivée vaut $1$ : le second produit est simplement $u$ lui-même, précédé du signe moins.

Le numérateur obtenu est un trinôme qui se factorise — utile pour la suite si l'on doit étudier les variations.

#solution
**Le domaine.** $x-1$ s'annule en $1$ : $f$ est dérivable sur $\mathbb{R}\setminus\{1\}$.

**La dérivée.** On pose

$$
u = x^2+2x+6,\quad u' = 2x+2, \qquad v = x-1,\quad v' = 1
$$

$$
f'(x) = \frac{(2x+2)(x-1)-\left(x^2+2x+6\right)}{(x-1)^2}
$$

On développe le premier produit, puis on retire **tout** le second :

$$
(2x+2)(x-1) = 2x^2-2x+2x-2 = 2x^2-2
$$

$$
2x^2-2-x^2-2x-6 = x^2-2x-8
$$

$$
\boxed{f'(x) = \frac{x^2-2x-8}{(x-1)^2}}
$$

Le numérateur se factorise : $x^2-2x-8 = (x-4)(x+2)$, ce qui donne directement les deux points où la tangente est horizontale, en $x = -2$ et $x = 4$.
::

::exo-question{label="19." cours="cours-reecriture"}
$$
f(x) = \frac{4x+7}{x^2}
$$

#indice
La formule du quotient marche, mais il y a bien plus rapide : **séparer la fraction en deux**, puisque le dénominateur est un simple monôme.

$$
\frac{4x+7}{x^2} = \frac{4x}{x^2}+\frac{7}{x^2} = \frac4x+\frac{7}{x^2}
$$

On réécrit alors en puissances négatives, et le tableau fait le reste.

#solution
**Par la réécriture.** On sépare, on simplifie, on passe en puissances :

$$
f(x) = \frac{4}{x}+\frac{7}{x^2} = 4x^{-1}+7x^{-2}
$$

$$
f'(x) = -4x^{-2}-14x^{-3} = -\frac{4}{x^2}-\frac{14}{x^3}
$$

Au même dénominateur $x^3$ :

$$
\boxed{f'(x) = -\frac{4x+14}{x^3}}
$$

**Contrôle par la formule du quotient**, avec $u = 4x+7$, $u' = 4$, $v = x^2$, $v' = 2x$ :

$$
\frac{4x^2-(4x+7)\times 2x}{x^4} = \frac{4x^2-8x^2-14x}{x^4} = \frac{-4x^2-14x}{x^4} = -\frac{4x+14}{x^3}
$$

Même résultat, après simplification par $x$. Dérivable sur $\mathbb{R}^*$.
::

::exo-question{label="20." cours="cours-quotient"}
$$
f(x) = \frac{2-x^2}{2+x^2}
$$

#indice
Formule du quotient, avec $u = 2-x^2$ et $v = 2+x^2$. Attention au signe de $u'$ : le $-x^2$ donne $-2x$.

Les deux développements du numérateur produisent chacun un terme en $x^3$, et ces deux termes **s'éliminent**. C'est le contrôle à faire en priorité.

#solution
On pose

$$
u = 2-x^2,\quad u' = -2x, \qquad v = 2+x^2,\quad v' = 2x
$$

$$
f'(x) = \frac{-2x\left(2+x^2\right)-\left(2-x^2\right)\times 2x}{\left(2+x^2\right)^2}
$$

On développe les deux produits :

$$
-2x\left(2+x^2\right) = -4x-2x^3
\qquad
\left(2-x^2\right)\times 2x = 4x-2x^3
$$

$$
\left(-4x-2x^3\right)-\left(4x-2x^3\right) = -4x-2x^3-4x+2x^3 = -8x
$$

$$
\boxed{f'(x) = -\frac{8x}{\left(2+x^2\right)^2}}
$$

**Le domaine.** $2+x^2 \geqslant 2 > 0$ pour tout réel : le dénominateur ne s'annule jamais, et $f$ est dérivable sur $\mathbb{R}$ tout entier.
::

::exo-question{label="21." cours="cours-reecriture"}
$$
f(x) = \frac{1}{\sqrt{x}}
$$

#indice
Ni quotient ni inverse à traiter comme tels : c'est une **puissance de $x$**, et une seule réécriture suffit.

$$
\frac{1}{\sqrt x} = x^{-1/2}
$$

La ligne $\left(x^\alpha\right)' = \alpha x^{\alpha-1}$ vaut pour les exposants fractionnaires comme pour les autres. L'exposant descend de $1$ : de $-\dfrac12$ à $-\dfrac32$.

#solution
On réécrit puis on applique la formule :

$$
f(x) = x^{-1/2}
\qquad\Longrightarrow\qquad
f'(x) = -\frac12 x^{-3/2}
$$

On revient à une écriture avec des racines, en notant que $x^{3/2} = x\sqrt x$ :

$$
\boxed{f'(x) = -\frac{1}{2x\sqrt x}}
$$

Définie et dérivable sur $]0\,;+\infty[$ — la racine au dénominateur exclut $0$ des deux côtés.
::

::exo-question{label="22." cours="cours-reecriture"}
$$
f(x) = \frac{2}{5x}-\frac{3x}{4}
$$

#indice
Une somme de deux termes, dont aucun n'exige de formule de quotient : les deux dénominateurs sont des constantes multipliées par $x$, ou des constantes tout court.

On lit les coefficients : $\dfrac{2}{5x} = \dfrac25 x^{-1}$ et $\dfrac{3x}{4} = \dfrac34 x$.

#solution
On réécrit chaque terme en isolant son coefficient :

$$
f(x) = \frac25 x^{-1}-\frac34 x
$$

$$
\left(\frac25 x^{-1}\right)' = \frac25\times(-1)x^{-2} = -\frac{2}{5x^2}
\qquad
\left(-\frac34 x\right)' = -\frac34
$$

$$
\boxed{f'(x) = -\frac{2}{5x^2}-\frac34}
$$

Les deux termes sont négatifs : $f$ décroît sur chacun des deux intervalles de $\mathbb{R}^*$.
::

::exo-question{label="23." cours="cours-composees"}
$$
f(x) = \frac{1}{(2x-1)^2}
$$

#indice
Deux lectures possibles, et la plus économique est celle qui voit une **puissance négative d'une forme composée** :

$$
\frac{1}{(2x-1)^2} = (2x-1)^{-2}
$$

La formule $\left(u^n\right)' = n\,u'\,u^{n-1}$ vaut pour $n$ négatif : ici $n = -2$, $u = 2x-1$ et $u' = 2$. L'exposant descend à $-3$.

L'autre lecture — la formule de l'inverse avec $u = (2x-1)^2$ — fonctionne aussi, au prix d'une dérivation composée supplémentaire.

#solution
On réécrit en puissance négative et on applique la formule composée :

$$
f(x) = (2x-1)^{-2}
$$

$$
f'(x) = -2\times 2\times(2x-1)^{-3} = -4(2x-1)^{-3}
$$

$$
\boxed{f'(x) = -\frac{4}{(2x-1)^3}}
$$

Attention : le dénominateur est ici au **cube**, donc il change de signe de part et d'autre de $\dfrac12$ — contrairement aux carrés des questions précédentes. Dérivable sur $\mathbb{R}\setminus\left\{\dfrac12\right\}$.
::

::exo-question{label="24." cours="cours-quotient"}
$$
f(x) = \frac{x^2-4x+8}{2x-5}
$$

#indice
Formule du quotient, avec $u = x^2-4x+8$ et $v = 2x-5$. Le $v' = 2$ multiplie **tout** le numérateur $u$ dans le second terme : parenthéser avant de distribuer le signe moins.

Comme à la question 18, les termes en $x^2$ ne s'éliminent pas — le résultat reste un trinôme.

#solution
**Le domaine.** $2x-5$ s'annule en $\dfrac52$ : $f$ est dérivable sur $\mathbb{R}\setminus\left\{\dfrac52\right\}$.

**La dérivée.** On pose

$$
u = x^2-4x+8,\quad u' = 2x-4, \qquad v = 2x-5,\quad v' = 2
$$

$$
f'(x) = \frac{(2x-4)(2x-5)-2\left(x^2-4x+8\right)}{(2x-5)^2}
$$

On développe les deux morceaux :

$$
(2x-4)(2x-5) = 4x^2-10x-8x+20 = 4x^2-18x+20
$$

$$
2\left(x^2-4x+8\right) = 2x^2-8x+16
$$

$$
\left(4x^2-18x+20\right)-\left(2x^2-8x+16\right) = 2x^2-10x+4
$$

$$
\boxed{f'(x) = \frac{2x^2-10x+4}{(2x-5)^2}}
$$

On peut factoriser par $2$ : $f'(x) = \dfrac{2\left(x^2-5x+2\right)}{(2x-5)^2}$.
::

::exo-question{label="25." cours="cours-inverse"}
$$
f(x) = 4x-1+\frac{1}{4-x}
$$

#indice
Une somme dont seul le dernier terme demande une formule. Le numérateur y étant constant, c'est celle de l'inverse :

$$
\left(\frac1u\right)' = -\frac{u'}{u^2}
$$

Tout le piège tient dans $u = 4-x$, dont la dérivée vaut $\mathbf{-1}$ et non $+1$. Ce signe moins rencontre celui de la formule, et les deux se compensent.

#solution
Les deux premiers termes sont immédiats : $(4x)' = 4$ et $(-1)' = 0$.

Pour le troisième, on pose $u = 4-x$, donc $u' = -1$ :

$$
\left(\frac{1}{4-x}\right)' = -\frac{-1}{(4-x)^2} = \frac{1}{(4-x)^2}
$$

Les deux signes moins se compensent, et la dérivée de ce terme est **positive**.

$$
\boxed{f'(x) = 4+\frac{1}{(4-x)^2}}
$$

Les deux termes étant strictement positifs, $f$ est croissante sur chacun des deux intervalles de $\mathbb{R}\setminus\{4\}$.
::

::exo-question{label="26." cours="cours-quotient"}
$$
f(x) = \frac{1}{x^2}\sin x
$$

#indice
L'écriture est celle d'un produit, mais il est plus simple de la lire comme un **quotient** :

$$
\frac{1}{x^2}\sin x = \frac{\sin x}{x^2}
$$

avec $u = \sin x$ et $v = x^2$. Le numérateur obtenu se simplifie ensuite par $x$, puisque ses deux termes en contiennent un.

La lecture « produit », avec $u = x^{-2}$ et $v = \sin x$, donne bien sûr le même résultat.

#solution
On écrit $f(x) = \dfrac{\sin x}{x^2}$ et on pose

$$
u = \sin x,\quad u' = \cos x, \qquad v = x^2,\quad v' = 2x
$$

$$
f'(x) = \frac{x^2\cos x-2x\sin x}{x^4}
$$

Les deux termes du numérateur contiennent un facteur $x$, que l'on simplifie contre le dénominateur :

$$
f'(x) = \frac{x\left(x\cos x-2\sin x\right)}{x^4}
$$

$$
\boxed{f'(x) = \frac{x\cos x-2\sin x}{x^3}}
$$

Ne pas oublier cette simplification : c'est elle qui fait passer le dénominateur de $x^4$ à $x^3$. Dérivable sur $\mathbb{R}^*$.
::

::exo-question{label="27." cours="cours-inverse"}
$$
f(x) = \frac{1}{\cos x}
$$

#indice
Numérateur constant, donc formule de l'inverse, avec $u = \cos x$.

Le seul point d'attention est $u' = -\sin x$ : ce signe moins rencontre celui de la formule, et les deux se compensent. La dérivée est donc **positive** là où le sinus l'est.

#solution
On pose $u = \cos x$, donc $u' = -\sin x$ :

$$
f'(x) = -\frac{-\sin x}{\cos^2 x}
$$

$$
\boxed{f'(x) = \frac{\sin x}{\cos^2 x}}
$$

**Le domaine.** Le cosinus s'annule en $\dfrac{\pi}{2}+k\pi$ : $f$ est définie et dérivable sur $\mathbb{R}$ privé de ces valeurs.

Cette fonction porte un nom, la **sécante**, et sa dérivée s'écrit aussi $\tan x\times\dfrac{1}{\cos x}$ — la même chose, réarrangée.
::

::exo-question{label="28." cours="cours-composees"}
$$
f(x) = \sqrt{x-4}
$$

#indice
Une racine composée :

$$
\left(\sqrt u\right)' = \frac{u'}{2\sqrt u}
$$

avec $u = x-4$, donc $u' = 1$.

C'est aussi le cas type où **domaine de définition et domaine de dérivabilité diffèrent** : la racine existe dès que $u \geqslant 0$, mais la dérivée a $\sqrt u$ au dénominateur, ce qui impose $u > 0$.

#solution
On pose $u = x-4$, donc $u' = 1$ :

$$
\boxed{f'(x) = \frac{1}{2\sqrt{x-4}}}
$$

**Les deux domaines.** La racine impose $x-4 \geqslant 0$ pour l'existence, et $x-4 > 0$ pour la dérivabilité :

$$
\mathcal{D}_f = [4\,;+\infty[ \qquad \mathcal{D}_{f'} = \,]4\,;+\infty[
$$

En $x = 4$, la fonction existe et vaut $0$, mais sa tangente est **verticale**.
::

::exo-question{label="29." cours="cours-composees"}
$$
f(x) = (-2x+3)^4
$$

#indice
Développer un exposant $4$ serait long et inutile : c'est le cas où la formule de la puissance composée s'impose.

$$
\left(u^n\right)' = n\,u'\,u^{n-1}
$$

avec $u = -2x+3$ et $u' = -2$. Le facteur $n\,u'$ vaut donc $4\times(-2) = -8$, et l'exposant descend à $3$.

#solution
On pose $u = -2x+3$, donc $u' = -2$ et $n = 4$ :

$$
f'(x) = 4\times(-2)\times(-2x+3)^3
$$

$$
\boxed{f'(x) = -8(-2x+3)^3}
$$

On peut aussi l'écrire $-8(3-2x)^3$, ce qui est la même chose.

**Le contrôle de signe** : pour $x < \dfrac32$, la parenthèse est positive, donc $f'$ est négative et $f$ décroît ; elle croît ensuite. Le minimum en $x = \dfrac32$ est cohérent avec une puissance paire. Dérivable sur $\mathbb{R}$.
::

::exo-question{label="30." cours="cours-composees"}
$$
f(x) = \left(\frac{x-3}{x-2}\right)^2
$$

#indice
Deux couches emboîtées : un **carré**, à l'intérieur duquel vit un **quotient**. On dérive de l'extérieur vers l'intérieur.

$$
f' = 2\,u'\,u \qquad\text{avec}\qquad u = \frac{x-3}{x-2}
$$

Le calcul de $u'$ est celui d'un quotient $\dfrac{ax+b}{cx+d}$ : son numérateur sera constant. Écrire cette étape sur sa propre ligne évite de mélanger les deux couches.

#solution
**Couche interne.** On pose $u = \dfrac{x-3}{x-2}$, et on la dérive comme un quotient :

$$
u' = \frac{1\times(x-2)-(x-3)\times 1}{(x-2)^2} = \frac{x-2-x+3}{(x-2)^2} = \frac{1}{(x-2)^2}
$$

**Couche externe.** La formule du carré donne

$$
f'(x) = 2\,u'\,u = 2\times\frac{1}{(x-2)^2}\times\frac{x-3}{x-2}
$$

$$
\boxed{f'(x) = \frac{2(x-3)}{(x-2)^3}}
$$

Les deux dénominateurs se rassemblent en $(x-2)^3$. Dérivable sur $\mathbb{R}\setminus\{2\}$, et la dérivée s'annule en $x = 3$ — le point où la fonction elle-même vaut $0$, ce qui est cohérent pour un carré.
::

::exo-question{label="31." cours="cours-quotient"}
$$
f(x) = x^2+1-\frac{2x}{x+3}
$$

#indice
C'est la question 17 avec un $x^2$ à la place du $x$ : le terme fractionnaire est **identique**, seule la partie polynomiale change.

On dérive donc terme à terme, et le travail sur $\dfrac{2x}{x+3}$ a déjà été fait — l'occasion de vérifier qu'on retombe bien sur $\dfrac{6}{(x+3)^2}$.

#solution
Les deux premiers termes sont immédiats : $\left(x^2\right)' = 2x$ et $(1)' = 0$.

Pour le quotient, avec $u = 2x$, $u' = 2$, $v = x+3$, $v' = 1$ :

$$
\left(\frac{2x}{x+3}\right)' = \frac{2(x+3)-2x}{(x+3)^2} = \frac{6}{(x+3)^2}
$$

En reportant, signe moins compris :

$$
\boxed{f'(x) = 2x-\frac{6}{(x+3)^2}}
$$

Dérivable sur $\mathbb{R}\setminus\{-3\}$.
::

::exo-question{label="32." cours="cours-produit"}
$$
f(x) = \sqrt{x-1}\,\sqrt{3-x}
$$

#indice
Deux chemins, et le second est nettement plus court.

**Par le produit** : $u = \sqrt{x-1}$ et $v = \sqrt{3-x}$, en n'oubliant pas que $v' = \dfrac{-1}{2\sqrt{3-x}}$ — le signe moins vient de la dérivée de $3-x$.

**Par le regroupement** : un produit de deux racines est la racine du produit,

$$
\sqrt{x-1}\,\sqrt{3-x} = \sqrt{(x-1)(3-x)} = \sqrt{-x^2+4x-3}
$$

et il ne reste qu'une seule racine composée à dériver.

Commence par le domaine : il faut $x-1 \geqslant 0$ **et** $3-x \geqslant 0$.

#solution
**Le domaine.** Les deux radicandes doivent être positifs : $x \geqslant 1$ et $x \leqslant 3$, donc

$$
\mathcal{D}_f = [1\,;3] \qquad \mathcal{D}_{f'} = \,]1\,;3[
$$

**Par le regroupement.** On écrit

$$
f(x) = \sqrt{(x-1)(3-x)} = \sqrt{-x^2+4x-3}
$$

et on pose $u = -x^2+4x-3$, donc $u' = -2x+4$ :

$$
f'(x) = \frac{-2x+4}{2\sqrt{-x^2+4x-3}} = \frac{2(2-x)}{2\sqrt{-x^2+4x-3}}
$$

$$
\boxed{f'(x) = \frac{2-x}{\sqrt{(x-1)(3-x)}}}
$$

**Contrôle par la formule du produit.** Avec $u = \sqrt{x-1}$, $u' = \dfrac{1}{2\sqrt{x-1}}$, $v = \sqrt{3-x}$, $v' = \dfrac{-1}{2\sqrt{3-x}}$ :

$$
f'(x) = \frac{\sqrt{3-x}}{2\sqrt{x-1}}-\frac{\sqrt{x-1}}{2\sqrt{3-x}}
$$

Au même dénominateur $2\sqrt{x-1}\sqrt{3-x}$, les numérateurs deviennent $(3-x)$ et $(x-1)$ :

$$
f'(x) = \frac{(3-x)-(x-1)}{2\sqrt{(x-1)(3-x)}} = \frac{4-2x}{2\sqrt{(x-1)(3-x)}} = \frac{2-x}{\sqrt{(x-1)(3-x)}}
$$

Même résultat. La dérivée s'annule en $x = 2$, milieu de l'intervalle : la fonction y atteint son maximum, ce que la symétrie de $[1\,;3]$ laissait prévoir.
::

::exo-question{label="33." cours="cours-produit"}
$$
f(x) = \frac{x-1}{x+3}\sqrt{x}
$$

#indice
Un **produit** dont le premier facteur est lui-même un quotient. Deux couches, donc, mais elles ne s'emboîtent pas : elles se juxtaposent.

$$
u = \frac{x-1}{x+3} \qquad v = \sqrt x
$$

On calcule $u'$ à part, comme un quotient ordinaire — son numérateur sera constant — puis on applique $(uv)' = u'v+uv'$.

La mise au même dénominateur finale demande de choisir $2\sqrt x\,(x+3)^2$, et de se souvenir que $\sqrt x\times\sqrt x = x$.

#solution
**Le domaine.** La racine impose $x \geqslant 0$ et le quotient exclut $-3$, qui n'y est pas : $f$ est définie sur $[0\,;+\infty[$ et dérivable sur $]0\,;+\infty[$.

**Les briques.** On pose

$$
u = \frac{x-1}{x+3},\qquad u' = \frac{1\times(x+3)-(x-1)\times 1}{(x+3)^2} = \frac{4}{(x+3)^2}
$$

$$
v = \sqrt x,\qquad v' = \frac{1}{2\sqrt x}
$$

**La formule du produit.**

$$
f'(x) = \frac{4\sqrt x}{(x+3)^2}+\frac{x-1}{(x+3)\times 2\sqrt x}
$$

**Mise au même dénominateur** $2\sqrt x\,(x+3)^2$. Le premier terme est multiplié en haut et en bas par $2\sqrt x$, ce qui donne $4\sqrt x\times 2\sqrt x = 8x$ ; le second par $(x+3)$ :

$$
f'(x) = \frac{8x+(x-1)(x+3)}{2\sqrt x\,(x+3)^2}
$$

On développe le produit du numérateur :

$$
(x-1)(x+3) = x^2+3x-x-3 = x^2+2x-3
$$

$$
8x+x^2+2x-3 = x^2+10x-3
$$

$$
\boxed{f'(x) = \frac{x^2+10x-3}{2\sqrt x\,(x+3)^2}}
$$
::

::exo-question{label="34." cours="cours-composees"}
$$
f(x) = \left(\frac{x+3}{\sqrt{x}-1}\right)^2
$$

#indice
La plus longue de la fiche, mais elle n'ajoute rien de neuf : c'est la question 30 avec une racine dans le dénominateur interne.

Trois couches à traiter dans l'ordre, chacune sur sa propre ligne :

1. le **carré** extérieur, qui donne $2\,u'\,u$ ;
2. le **quotient** $u = \dfrac{x+3}{\sqrt x-1}$ ;
3. la **racine** $\left(\sqrt x-1\right)' = \dfrac{1}{2\sqrt x}$, qui apparaît dans le calcul de $u'$.

Le numérateur de $u'$ contient une fraction à étages : on la nettoie en multipliant haut et bas par $2\sqrt x$. Et il se factorise, en posant mentalement $t = \sqrt x$.

#solution
**Le domaine.** La racine impose $x \geqslant 0$, et le dénominateur $\sqrt x-1$ s'annule en $x = 1$. $f$ est donc définie sur $[0\,;1[\,\cup\,]1\,;+\infty[$, et dérivable sur $]0\,;1[\,\cup\,]1\,;+\infty[$.

**Couche interne — le quotient.** On pose $u = \dfrac{x+3}{\sqrt x-1}$, avec au numérateur $x+3$ de dérivée $1$, et au dénominateur $\sqrt x-1$ de dérivée $\dfrac{1}{2\sqrt x}$ :

$$
u' = \frac{\left(\sqrt x-1\right)-(x+3)\times\dfrac{1}{2\sqrt x}}{\left(\sqrt x-1\right)^2}
$$

On nettoie la fraction à étages du numérateur en le multipliant par $\dfrac{2\sqrt x}{2\sqrt x}$ :

$$
\left(\sqrt x-1\right)-\frac{x+3}{2\sqrt x} = \frac{2\sqrt x\left(\sqrt x-1\right)-(x+3)}{2\sqrt x} = \frac{2x-2\sqrt x-x-3}{2\sqrt x} = \frac{x-2\sqrt x-3}{2\sqrt x}
$$

$$
u' = \frac{x-2\sqrt x-3}{2\sqrt x\left(\sqrt x-1\right)^2}
$$

**Couche externe — le carré.**

$$
f'(x) = 2\,u'\,u = 2\times\frac{x-2\sqrt x-3}{2\sqrt x\left(\sqrt x-1\right)^2}\times\frac{x+3}{\sqrt x-1}
$$

Le facteur $2$ se simplifie, et les deux dénominateurs se rassemblent :

$$
\boxed{f'(x) = \frac{(x+3)\left(x-2\sqrt x-3\right)}{\sqrt x\left(\sqrt x-1\right)^3}}
$$

**La factorisation qui rend le résultat lisible.** En posant $t = \sqrt x$, le facteur $x-2\sqrt x-3$ s'écrit $t^2-2t-3 = (t-3)(t+1)$, d'où

$$
f'(x) = \frac{(x+3)\left(\sqrt x-3\right)\left(\sqrt x+1\right)}{\sqrt x\left(\sqrt x-1\right)^3}
$$

Sous cette forme, le signe se lit : la dérivée s'annule pour $\sqrt x = 3$, c'est-à-dire en $x = 9$.
::
:::

## Les rappels de cours de cette page

Ces tiroirs s'ouvrent depuis le bouton **Cours** de chaque question. Ils sont regroupés ici pour permettre une relecture d'ensemble.

::extrait-cours{id="cours-tableau" titre="Le tableau des dérivées usuelles, et la somme" source="/cours/a1/remise-a-niveau-maths/fonctions-variable-reelle/cours#_4-le-tableau-des-dérivées-usuelles"}
**Dériver une somme, c'est dériver terme à terme** — il n'y a pas d'autre règle :

$$
(u+v)' = u'+v' \qquad (k\,u)' = k\,u' \qquad (k)' = 0
$$

Le coefficient devant un terme se contente donc de suivre, et une constante additive disparaît.

Le tableau à connaître :

| $f(x)$ | $f'(x)$ |
|---|---|
| $k$ (constante) | $0$ |
| $x^\alpha$ (tout $\alpha$) | $\alpha x^{\alpha-1}$ |
| $x$ | $1$ |
| $x^2$ | $2x$ |
| $\dfrac{1}{x} = x^{-1}$ | $-\dfrac{1}{x^2}$ |
| $\sqrt{x} = x^{1/2}$ | $\dfrac{1}{2\sqrt{x}}$ |
| $\ln(x)$ | $\dfrac{1}{x}$ |
| $e^x$ | $e^x$ |
| $\sin(x)$ | $\cos(x)$ |
| $\cos(x)$ | $-\sin(x)$ |

**Une seule ligne est vraiment à retenir** : celle de $x^\alpha$. Toutes les lignes en puissances, racines et inverses s'en déduisent en réécrivant la fonction sous forme de puissance.
::

::extrait-cours{id="cours-reecriture" titre="Réécrire avant de dériver" source="/cours/a1/remise-a-niveau-maths/fonctions-variable-reelle/cours#_4-le-tableau-des-dérivées-usuelles"}
Avant d'appliquer la moindre formule, une question : **l'écriture se simplifie-t-elle ?** Une minute de réécriture épargne souvent tout le calcul.

**Passer en puissance négative.** La ligne $x^\alpha \mapsto \alpha x^{\alpha-1}$ vaut pour **tout** exposant, entier, négatif ou fractionnaire. On ramène donc inverses et racines à des puissances :

$$
\frac{1}{x^3} = x^{-3} \quad\Longrightarrow\quad \left(x^{-3}\right)' = -3x^{-4} = -\frac{3}{x^4}
$$

$$
\sqrt{x} = x^{1/2} \quad\Longrightarrow\quad \left(x^{1/2}\right)' = \frac12 x^{-1/2} = \frac{1}{2\sqrt x}
$$

$$
\frac{1}{\sqrt x} = x^{-1/2} \quad\Longrightarrow\quad \left(x^{-1/2}\right)' = -\frac12 x^{-3/2} = -\frac{1}{2x\sqrt x}
$$

**Simplifier avant de dériver.** Un produit qui se développe, une fraction qui se réduit, un logarithme qui s'éclate : on le fait **avant**, jamais après.

$$
f(x) = x^2\left(3-\frac{1}{x}\right) = 3x^2-x \quad\Longrightarrow\quad f'(x) = 6x-1
$$

Passer par la formule du produit ici donnerait le même résultat, au prix de trois lignes de calcul et d'une occasion de plus de se tromper de signe.
::

::extrait-cours{id="cours-produit" titre="Dériver un produit" source="/cours/a1/remise-a-niveau-maths/fonctions-variable-reelle/cours#_4-le-tableau-des-dérivées-usuelles"}
$$
(uv)' = u'v+uv'
$$

**Les deux termes, jamais un seul** : l'erreur classique est d'écrire $u'v'$, qui est faux.

La méthode, en trois temps, toujours écrite noir sur blanc :

1. **poser** $u$ et $v$ ;
2. **calculer** $u'$ et $v'$ à part ;
3. **remplacer** dans la formule, puis **simplifier**.

Pour $f(x) = (2x+1)e^{x}$ : $u = 2x+1$, $u' = 2$, $v = e^x$, $v' = e^x$, d'où

$$
f'(x) = 2e^x+(2x+1)e^x = (2x+3)e^x
$$

**Toujours finir en factorisant** ce qui est commun — ici $e^x$. C'est ce qui rend la dérivée lisible, et c'est sous cette forme qu'on en étudiera le signe.

Et le réflexe préalable reste le même : si le produit se développe simplement, développer d'abord.
::

::extrait-cours{id="cours-inverse" titre="Dériver un inverse" source="/cours/a1/remise-a-niveau-maths/fonctions-variable-reelle/cours#_5-les-formes-composées"}
$$
\left(\frac{1}{u}\right)' = -\frac{u'}{u^2}
$$

Trois choses à ne pas perdre en route : le **signe moins**, le $u'$ **au numérateur**, et le **carré** au dénominateur.

Pour $f(x) = \dfrac{1}{3x^2+1}$ : $u = 3x^2+1$, $u' = 6x$, d'où

$$
f'(x) = -\frac{6x}{\left(3x^2+1\right)^2}
$$

**Une constante au numérateur** sort simplement du calcul :

$$
\left(\frac{k}{u}\right)' = k\left(\frac{1}{u}\right)' = -\frac{k\,u'}{u^2}
$$

Attention au cumul des signes : si $k$ est négatif, le moins de la formule et celui de $k$ se compensent, et la dérivée est positive.

**Une racine au dénominateur** se traite de la même façon, en écrivant $\dfrac{1}{\sqrt u} = \left(\dfrac1w\right)$ avec $w = \sqrt u$ et $w' = \dfrac{u'}{2\sqrt u}$ :

$$
\left(\frac{1}{\sqrt u}\right)' = -\frac{u'}{2u\sqrt u}
$$

On nettoie ensuite la fraction à étages en multipliant numérateur et dénominateur par $\sqrt u$.
::

::extrait-cours{id="cours-quotient" titre="Dériver un quotient" source="/cours/a1/remise-a-niveau-maths/fonctions-variable-reelle/cours#_5-les-formes-composées"}
$$
\left(\frac{u}{v}\right)' = \frac{u'v-uv'}{v^2}
$$

**L'ordre des deux termes du numérateur n'est pas négociable** : $u'v$ d'abord, $uv'$ ensuite, avec un moins entre les deux. Les intervertir change le signe de toute la dérivée.

Pour $f(x) = \dfrac{2x+1}{x-3}$ : $u = 2x+1$, $u' = 2$, $v = x-3$, $v' = 1$, d'où

$$
f'(x) = \frac{2(x-3)-(2x+1)}{(x-3)^2} = \frac{2x-6-2x-1}{(x-3)^2} = \frac{-7}{(x-3)^2}
$$

Le signe moins se distribue sur **tout** le second produit : c'est là que se perdent la plupart des points.

**Le piège du dénominateur en $a-x$.** Si $v = 4-x$, alors $v' = -1$, et non $+1$. Ce seul oubli renverse le signe du second terme.

**Le raccourci quand le numérateur ressemble au dénominateur.** Avant de sortir la grosse formule, tenter la division :

$$
\frac{x+2}{x+1} = \frac{(x+1)+1}{x+1} = 1+\frac{1}{x+1}
\quad\Longrightarrow\quad
f'(x) = -\frac{1}{(x+1)^2}
$$

Une ligne au lieu de quatre, et aucune occasion de se tromper de signe.
::

::extrait-cours{id="cours-composees" titre="Les formes composées" source="/cours/a1/remise-a-niveau-maths/fonctions-variable-reelle/cours#_5-les-formes-composées"}
Une forme composée, c'est une fonction **appliquée à une autre** : $\sqrt{u}$, $u^n$, $e^u$, $\ln u$, $\sin u$. La règle générale porte un nom — dérivée de la composée — et une seule idée : **dériver l'enveloppe, puis multiplier par la dérivée de l'intérieur**.

$$
\left(u^n\right)' = n\,u'\,u^{n-1}
\qquad
\left(\sqrt{u}\right)' = \frac{u'}{2\sqrt{u}}
\qquad
\left(\frac{1}{u}\right)' = -\frac{u'}{u^2}
$$

$$
\left(e^{u}\right)' = u'e^{u}
\qquad
\left(\ln u\right)' = \frac{u'}{u}
\qquad
\left(\sin u\right)' = u'\cos u
\qquad
\left(\cos u\right)' = -u'\sin u
$$

Le cas le plus fréquent, $u = ax+b$, donne $u' = a$ :

$$
\big(\cos(ax+b)\big)' = -a\sin(ax+b)
\qquad
\big(e^{ax+b}\big)' = a\,e^{ax+b}
$$

**Le $u'$ qui manque** est l'erreur numéro un du chapitre : $\left(e^{3x}\right)' = 3e^{3x}$, pas $e^{3x}$.

**Empilement.** Quand les couches s'emboîtent — $\sqrt{\ln(x^2+1)}$, par exemple — on dérive **de l'extérieur vers l'intérieur**, une couche à la fois, en gardant les autres intactes :

$$
\left(\sqrt{\ln(x^2+1)}\right)' = \frac{\big(\ln(x^2+1)\big)'}{2\sqrt{\ln(x^2+1)}} = \frac{\dfrac{2x}{x^2+1}}{2\sqrt{\ln(x^2+1)}} = \frac{x}{(x^2+1)\sqrt{\ln(x^2+1)}}
$$

Écrire chaque couche sur sa propre ligne coûte trois lignes et évite la plupart des erreurs.
::
