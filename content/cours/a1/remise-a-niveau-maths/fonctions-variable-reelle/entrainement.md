---
title: Fonctions d'une variable réelle — fiche d'entraînement
description: Quinze questions en cinq paliers, du tableau des dérivées jusqu'à la bijection réciproque. Chaque question donne un indice avec un exemple similaire traité, une solution détaillée et le rappel de cours correspondant.
type: entrainement
annee: A1
matiere: Remise à niveau en maths
ordre: 4
icone: i-lucide-list-checks
---

::rappel{titre="Comment se servir de cette fiche" icone="i-lucide-compass"}
Cinq paliers qui reprennent le chapitre dans l'ordre du calcul : d'abord dériver terme à terme, puis les produits et les quotients, puis les formes composées, puis la question du domaine, et enfin la continuité, le théorème des valeurs intermédiaires et les bijections. Chaque palier réutilise les précédents.

Sous chaque question, trois boutons :

- **Indice** — la piste à suivre, sans le résultat. La fenêtre contient aussi un **exemple similaire entièrement traité**, sur d'autres fonctions : à déplier seulement si la piste n'a pas suffi.
- **Voir la solution** — la correction rédigée, étape par étape.
- **Cours** — un tiroir avec le rappel de cours utile à cette question précise, et le lien vers la section complète du chapitre.

Un réflexe à prendre dès le palier 1 : **écrire $u$, $v$, $u'$ et $v'$ à part** avant d'appliquer la moindre formule. Trois lignes de plus, et la moitié des erreurs disparaissent.
::

::carte-lien{to="/cours/a1/remise-a-niveau-maths/fonctions-variable-reelle/cours" titre="Le cours du chapitre" description="Continuité, TVI, dérivabilité, tableau des dérivées usuelles, formes composées et bijections" type="cours" meta="7 sections"}
::

::carte-lien{to="/cours/a1/remise-a-niveau-maths/fonctions-variable-reelle/exercices" titre="Les exercices du TD" description="Les six exercices du programme et leurs 53 dérivées — à faire une fois les cinq paliers passés" type="exercices" meta="6 exercices"}
::

::carte-lien{to="/cours/a1/remise-a-niveau-maths/fonctions-variable-reelle/revisions" titre="Révisions dérivées" description="Trente-quatre dérivées dans le désordre des types : le vrai exercice est de reconnaître la structure avant de dériver" type="exercices" meta="34 dérivées"}
::

:::exercice{titre="Palier 1 — Dériver terme à terme" theme="Le tableau des dérivées usuelles, et le réflexe de réécriture" badge="★☆☆☆☆" icone="i-lucide-sprout"}
Aucune formule d'opération ici : rien que le tableau, appliqué morceau par morceau. Le seul vrai travail est de **reconnaître** chaque morceau, quitte à le réécrire d'abord.

::exo-question{label="1." cours="xfvr-tableau"}
Dériver les fonctions suivantes sur $\mathbb{R}$.

$$
f(x) = 3x^4-5x^2+7x-2 \qquad g(x) = \frac{x^3}{3}-\frac{x^2}{2}+x
$$

#indice
Une somme se dérive **terme à terme** : il n'existe pas d'autre règle, et il n'y a rien à combiner à la fin.

Deux points à surveiller seulement. Le coefficient devant un terme se contente de suivre le calcul : $(3x^4)' = 3\times(x^4)' = 12x^3$. Et une **constante additive disparaît** — le $-2$ de $f$ ne laisse aucune trace.

Pour $g$, les fractions sont des coefficients comme les autres : $\dfrac{x^3}{3} = \dfrac13 x^3$.

#exemple
Même travail sur $p(x) = 2x^5-4x^3+x-9$ et $q(x) = \dfrac{x^4}{4}-\dfrac{3x^2}{2}$.

**Pour $p$**, on dérive les quatre termes séparément :

$$
(2x^5)' = 10x^4 \qquad (-4x^3)' = -12x^2 \qquad (x)' = 1 \qquad (-9)' = 0
$$

$$
p'(x) = 10x^4-12x^2+1
$$

**Pour $q$**, on lit d'abord les coefficients : $q(x) = \dfrac14 x^4-\dfrac32 x^2$.

$$
\left(\frac14 x^4\right)' = \frac14\times 4x^3 = x^3
\qquad
\left(-\frac32 x^2\right)' = -\frac32\times 2x = -3x
$$

$$
q'(x) = x^3-3x
$$

Les simplifications de coefficients — le $\dfrac14\times 4$ et le $\dfrac32\times 2$ — sont exactement ce qui rend ces écritures agréables : elles sont choisies pour cela.

#solution
**Pour $f$**, terme à terme :

$$
(3x^4)' = 12x^3 \qquad (-5x^2)' = -10x \qquad (7x)' = 7 \qquad (-2)' = 0
$$

$$
\boxed{f'(x) = 12x^3-10x+7}
$$

**Pour $g$**, on lit les coefficients $\dfrac13$ et $-\dfrac12$ :

$$
\left(\frac13 x^3\right)' = \frac13\times 3x^2 = x^2
\qquad
\left(-\frac12 x^2\right)' = -\frac12\times 2x = -x
\qquad
(x)' = 1
$$

$$
\boxed{g'(x) = x^2-x+1}
$$

Au passage, ce $g'$ ne s'annule jamais : son discriminant vaut $1-4 = -3 < 0$. La fonction $g$ est donc strictement croissante sur $\mathbb{R}$ — une information qu'on obtient gratuitement, et qui resservira au palier 5.
::

::exo-question{label="2." cours="xfvr-reecriture"}
Dériver les fonctions suivantes sur $]0\,;+\infty[$.

$$
f(x) = \frac{1}{x^3} \qquad g(x) = \sqrt{x}+\frac{1}{\sqrt{x}} \qquad h(x) = \frac{5}{x^2}
$$

#indice
Aucune de ces trois fonctions ne demande la formule du quotient. Toutes se ramènent à la **seule ligne du tableau qui compte vraiment** :

$$
\left(x^\alpha\right)' = \alpha x^{\alpha-1}, \qquad \text{pour tout } \alpha
$$

L'exposant peut être négatif ou fractionnaire, cela ne change rien à la formule. Le travail consiste donc à réécrire chaque fonction sous forme de **puissance de $x$** avant de dériver — puis à revenir à une écriture lisible à la fin.

Les trois réécritures utiles : $\dfrac{1}{x^n} = x^{-n}$, $\sqrt x = x^{1/2}$, $\dfrac{1}{\sqrt x} = x^{-1/2}$.

#exemple
Même travail sur $p(x) = \dfrac{1}{x^4}$ et $q(x) = \dfrac{2}{\sqrt x}$.

**Pour $p$**, on réécrit puis on applique la formule :

$$
p(x) = x^{-4} \quad\Longrightarrow\quad p'(x) = -4x^{-5} = -\frac{4}{x^5}
$$

L'exposant **descend** de $1$ : de $-4$ on passe à $-5$. C'est le piège classique — on écrit parfois $-3$ par réflexe de « diminuer la valeur absolue ».

**Pour $q$**, la constante $2$ reste devant :

$$
q(x) = 2x^{-1/2} \quad\Longrightarrow\quad q'(x) = 2\times\left(-\frac12\right)x^{-3/2} = -x^{-3/2}
$$

On revient enfin à une écriture avec des racines, en séparant $x^{-3/2} = \dfrac{1}{x\sqrt x}$ :

$$
q'(x) = -\frac{1}{x\sqrt x}
$$

#solution
**Pour $f$** :

$$
f(x) = x^{-3} \quad\Longrightarrow\quad f'(x) = -3x^{-4} = \boxed{-\frac{3}{x^4}}
$$

**Pour $g$**, on dérive les deux termes séparément après réécriture :

$$
g(x) = x^{1/2}+x^{-1/2}
$$

$$
\left(x^{1/2}\right)' = \frac12 x^{-1/2} = \frac{1}{2\sqrt x}
\qquad
\left(x^{-1/2}\right)' = -\frac12 x^{-3/2} = -\frac{1}{2x\sqrt x}
$$

$$
\boxed{g'(x) = \frac{1}{2\sqrt x}-\frac{1}{2x\sqrt x}}
$$

On peut mettre au même dénominateur, ce qui fait apparaître le signe de $g'$ :

$$
g'(x) = \frac{x-1}{2x\sqrt x}
$$

**Pour $h$**, la constante $5$ reste devant :

$$
h(x) = 5x^{-2} \quad\Longrightarrow\quad h'(x) = 5\times(-2)x^{-3} = \boxed{-\frac{10}{x^3}}
$$
::

::exo-question{label="3." cours="xfvr-tableau"}
Dériver les fonctions suivantes, après avoir simplifié leur écriture.

$$
f(x) = \frac{x^2+3x}{x} \quad (x\neq 0) \qquad g(x) = x^2\left(1-\frac{2}{x}\right) \quad (x\neq 0) \qquad h(x) = (2x+1)^2
$$

#indice
Avant d'appliquer la moindre formule d'opération, une question à se poser systématiquement : **l'écriture se simplifie-t-elle ?**

Ici, les trois se simplifient. La première est une fraction dont le numérateur se factorise par le dénominateur. La deuxième est un produit qui se développe. La troisième est un carré qu'une identité remarquable transforme en polynôme.

Une minute de réécriture épargne à chaque fois la formule du quotient, celle du produit, ou celle de la puissance — et autant d'occasions de se tromper de signe.

#exemple
Même réflexe sur $p(x) = \dfrac{x^3-x}{x}$ et $q(x) = x\left(3+\dfrac1x\right)$.

**Pour $p$**, le numérateur se factorise par $x$ :

$$
p(x) = \frac{x(x^2-1)}{x} = x^2-1 \quad (x\neq 0)
$$

Il ne reste qu'une somme, et la dérivée est immédiate : $p'(x) = 2x$.

Passer par la formule du quotient donnerait le même résultat, au prix de cinq lignes et d'un $x^2$ au dénominateur à simplifier à la fin.

**Pour $q$**, on distribue :

$$
q(x) = 3x+\frac{x}{x} = 3x+1 \quad (x\neq 0)
$$

D'où $q'(x) = 3$. Une dérivée constante, qu'aucune formule de produit n'aurait donnée aussi vite.

**La précaution à garder** : la simplification n'est valable **que sur le domaine de départ**. La fonction $p$ ne vaut $x^2-1$ que pour $x\neq 0$ ; en $0$ elle n'existe pas, même si l'expression simplifiée, elle, y aurait un sens.

#solution
**Pour $f$**, on factorise le numérateur par $x$ :

$$
f(x) = \frac{x(x+3)}{x} = x+3 \quad (x\neq 0)
\qquad\Longrightarrow\qquad
\boxed{f'(x) = 1}
$$

**Pour $g$**, on développe :

$$
g(x) = x^2-\frac{2x^2}{x} = x^2-2x \quad (x\neq 0)
\qquad\Longrightarrow\qquad
\boxed{g'(x) = 2x-2}
$$

**Pour $h$**, l'identité remarquable $(a+b)^2 = a^2+2ab+b^2$ donne

$$
h(x) = 4x^2+4x+1
\qquad\Longrightarrow\qquad
\boxed{h'(x) = 8x+4}
$$

**Le contrôle qui vaut la peine** : la formule de la puissance composée, vue au palier 3, donne $h'(x) = 2\times 2\times(2x+1) = 4(2x+1) = 8x+4$. Les deux chemins concordent — et c'est rassurant de le vérifier une fois, sur un cas où le développement est facile.
::
:::

:::exercice{titre="Palier 2 — Produits, inverses et quotients" theme="Les trois formules d'opération, et leurs pièges de signe" badge="★★☆☆☆" icone="i-lucide-x"}
Trois formules, et toujours la même méthode en trois temps : **poser** $u$ et $v$, **calculer** $u'$ et $v'$ à part, **remplacer** puis simplifier. Les sauter de tête est la première cause d'erreur du chapitre.

::exo-question{label="1." cours="xfvr-produit"}
Dériver, sur le domaine indiqué :

$$
f(x) = (3x-2)(x^2+1) \ \text{ sur } \mathbb{R}
\qquad
g(x) = (x^2-1)\sqrt{x} \ \text{ sur } ]0\,;+\infty[
$$

#indice
$$
(uv)' = u'v+uv'
$$

**Deux termes, jamais un seul** : écrire $u'v'$ est l'erreur numéro un.

Pour $f$, le produit se développerait aussi — les deux chemins sont bons, et comparer les deux résultats est un bon contrôle.

Pour $g$, il faut la dérivée de $\sqrt x$, vue au palier 1 : $\left(\sqrt x\right)' = \dfrac{1}{2\sqrt x}$. La fin du calcul demande de mettre les deux termes au même dénominateur $2\sqrt x$ ; pour cela, se souvenir que $\sqrt x\times\sqrt x = x$.

#exemple
Même méthode sur $p(x) = (2x+1)(x^3-x)$ et $q(x) = (x+1)\sqrt x$.

**Pour $p$** — on pose les quatre briques :

$$
u = 2x+1,\quad u' = 2, \qquad v = x^3-x,\quad v' = 3x^2-1
$$

$$
p'(x) = 2(x^3-x)+(2x+1)(3x^2-1) = 2x^3-2x+6x^3-2x+3x^2-1
$$

$$
p'(x) = 8x^3+3x^2-4x-1
$$

**Pour $q$** — mêmes trois temps, avec la dérivée de la racine :

$$
u = x+1,\quad u' = 1, \qquad v = \sqrt x,\quad v' = \frac{1}{2\sqrt x}
$$

$$
q'(x) = \sqrt x+\frac{x+1}{2\sqrt x}
$$

**On met au même dénominateur** $2\sqrt x$, en utilisant $\sqrt x\times 2\sqrt x = 2x$ :

$$
q'(x) = \frac{2x}{2\sqrt x}+\frac{x+1}{2\sqrt x} = \frac{3x+1}{2\sqrt x}
$$

#solution
**Pour $f$** — on pose :

$$
u = 3x-2,\quad u' = 3, \qquad v = x^2+1,\quad v' = 2x
$$

$$
f'(x) = 3(x^2+1)+(3x-2)\times 2x = 3x^2+3+6x^2-4x
$$

$$
\boxed{f'(x) = 9x^2-4x+3}
$$

**Contrôle par le développement** : $f(x) = 3x^3+3x-2x^2-2$, donc $f'(x) = 9x^2-4x+3$. Les deux chemins donnent la même chose. ✓

**Pour $g$** — on pose :

$$
u = x^2-1,\quad u' = 2x, \qquad v = \sqrt x,\quad v' = \frac{1}{2\sqrt x}
$$

$$
g'(x) = 2x\sqrt x+\frac{x^2-1}{2\sqrt x}
$$

**Au même dénominateur**, avec $2x\sqrt x = \dfrac{2x\sqrt x\times 2\sqrt x}{2\sqrt x} = \dfrac{4x^2}{2\sqrt x}$ :

$$
g'(x) = \frac{4x^2+x^2-1}{2\sqrt x} = \boxed{\frac{5x^2-1}{2\sqrt x}}
$$

**Contrôle par la réécriture** : $g(x) = x^{5/2}-x^{1/2}$, donc $g'(x) = \dfrac52 x^{3/2}-\dfrac12 x^{-1/2}$, ce qui vaut bien $\dfrac{5x^2-1}{2\sqrt x}$ après mise au même dénominateur. ✓
::

::exo-question{label="2." cours="xfvr-inverse-quotient"}
Dériver, sur le domaine indiqué :

$$
f(x) = \frac{1}{x^2+1} \ \text{ sur } \mathbb{R}
\qquad
g(x) = \frac{3}{2x-5} \ \text{ sur } \mathbb{R}\setminus\left\{\tfrac52\right\}
$$

#indice
Inutile de sortir la formule du quotient : le numérateur est une **constante**, et la formule de l'inverse suffit.

$$
\left(\frac{1}{u}\right)' = -\frac{u'}{u^2}
\qquad\text{et donc}\qquad
\left(\frac{k}{u}\right)' = -\frac{k\,u'}{u^2}
$$

Trois choses à ne pas perdre en route : le **signe moins**, le $u'$ **au numérateur**, et le **carré** au dénominateur — que l'on ne développe jamais.

#exemple
Même méthode sur $p(x) = \dfrac{1}{x^3+x}$ et $q(x) = \dfrac{4}{1-3x}$.

**Pour $p$** — on pose $u = x^3+x$, donc $u' = 3x^2+1$ :

$$
p'(x) = -\frac{3x^2+1}{\left(x^3+x\right)^2}
$$

On laisse le dénominateur sous forme de carré : le développer ne rendrait service à personne, et c'est sous cette forme qu'on lira le signe.

**Pour $q$** — la constante $4$ sort, et $u = 1-3x$ donne $u' = -3$ :

$$
q'(x) = -\frac{4\times(-3)}{(1-3x)^2} = \frac{12}{(1-3x)^2}
$$

**Le double signe** est le vrai piège ici : celui de la formule et celui de $u'$ se compensent, et la dérivée est **positive**. C'est cohérent — quand $x$ augmente, $1-3x$ diminue, donc son inverse augmente.

#solution
**Pour $f$** — on pose $u = x^2+1$, donc $u' = 2x$ :

$$
\boxed{f'(x) = -\frac{2x}{\left(x^2+1\right)^2}}
$$

Le dénominateur ne s'annule jamais, ce qui confirme que $f$ est dérivable sur $\mathbb{R}$ tout entier. Et le signe de $f'$ est celui de $-2x$ : la fonction croît sur $]-\infty\,;0]$ puis décroît, avec un maximum en $0$.

**Pour $g$** — la constante $3$ sort de la dérivation, et $u = 2x-5$ donne $u' = 2$ :

$$
\boxed{g'(x) = -\frac{3\times 2}{(2x-5)^2} = -\frac{6}{(2x-5)^2}}
$$

Le carré au dénominateur est toujours positif : $g'$ est donc **strictement négative** partout où elle existe. La fonction $g$ est décroissante sur chacun des deux intervalles de son domaine — mais pas sur leur réunion, puisqu'elle n'est pas définie en $\dfrac52$.
::

::exo-question{label="3." cours="xfvr-inverse-quotient"}
Dériver, sur le domaine indiqué :

$$
f(x) = \frac{2x+1}{x^2+1} \ \text{ sur } \mathbb{R}
\qquad
g(x) = \frac{x+3}{4-x} \ \text{ sur } \mathbb{R}\setminus\{4\}
$$

#indice
$$
\left(\frac{u}{v}\right)' = \frac{u'v-uv'}{v^2}
$$

**L'ordre des deux termes du numérateur n'est pas négociable** : $u'v$ d'abord, $uv'$ ensuite, avec un moins entre les deux. Les intervertir change le signe de toute la dérivée.

Deux précautions au moment de remplacer. Le signe moins se distribue sur **tout** le second produit — parenthéser $uv'$ avant de développer évite l'oubli. Et pour $g$, le dénominateur est de la forme $a-x$ : sa dérivée vaut $-1$, pas $+1$.

#exemple
Même méthode sur $p(x) = \dfrac{x-1}{x+2}$ et $q(x) = \dfrac{2x}{3-x}$.

**Pour $p$** — on pose les quatre briques :

$$
u = x-1,\quad u' = 1, \qquad v = x+2,\quad v' = 1
$$

$$
p'(x) = \frac{1\times(x+2)-(x-1)\times 1}{(x+2)^2} = \frac{x+2-x+1}{(x+2)^2} = \frac{3}{(x+2)^2}
$$

Le signe moins a bien été distribué sur les **deux** termes de $x-1$, ce qui donne $-x+1$ et non $-x-1$.

**Pour $q$** — le dénominateur est en $a-x$ :

$$
u = 2x,\quad u' = 2, \qquad v = 3-x,\quad v' = -1
$$

$$
q'(x) = \frac{2(3-x)-2x\times(-1)}{(3-x)^2} = \frac{6-2x+2x}{(3-x)^2} = \frac{6}{(3-x)^2}
$$

Sans le $v' = -1$, on aurait trouvé $\dfrac{6-4x}{(3-x)^2}$ : une erreur invisible à la relecture, et pourtant complète.

#solution
**Pour $f$** — on pose :

$$
u = 2x+1,\quad u' = 2, \qquad v = x^2+1,\quad v' = 2x
$$

$$
f'(x) = \frac{2\left(x^2+1\right)-(2x+1)\times 2x}{\left(x^2+1\right)^2} = \frac{2x^2+2-4x^2-2x}{\left(x^2+1\right)^2}
$$

$$
\boxed{f'(x) = \frac{-2x^2-2x+2}{\left(x^2+1\right)^2}}
$$

On peut factoriser le numérateur par $-2$ pour lire plus facilement son signe : $f'(x) = \dfrac{-2\left(x^2+x-1\right)}{\left(x^2+1\right)^2}$.

**Pour $g$** — le dénominateur est en $4-x$, donc $v' = -1$ :

$$
u = x+3,\quad u' = 1, \qquad v = 4-x,\quad v' = -1
$$

$$
g'(x) = \frac{1\times(4-x)-(x+3)\times(-1)}{(4-x)^2} = \frac{4-x+x+3}{(4-x)^2}
$$

$$
\boxed{g'(x) = \frac{7}{(4-x)^2}}
$$

Les $x$ se sont annulés : c'est normal, une fonction de la forme $\dfrac{ax+b}{cx+d}$ a toujours une dérivée dont le numérateur est constant. C'est un contrôle gratuit — si un $x$ subsiste au numérateur, il y a une erreur.
::
:::

:::exercice{titre="Palier 3 — Les formes composées" theme="Dériver l'enveloppe, puis multiplier par la dérivée de l'intérieur" badge="★★★☆☆" icone="i-lucide-layers"}
Une seule idée gouverne tout ce palier : quand une fonction est **appliquée à une autre**, on dérive l'enveloppe en laissant l'intérieur tel quel, puis on multiplie par la dérivée de l'intérieur. Le $u'$ oublié est l'erreur la plus coûteuse du chapitre.

::exo-question{label="1." cours="xfvr-composees"}
Dériver :

$$
f(x) = \left(3x^2-x+1\right)^5 \ \text{ sur } \mathbb{R}
\qquad
g(x) = \sqrt{x^2+4} \ \text{ sur } \mathbb{R}
$$

#indice
$$
\left(u^n\right)' = n\,u'\,u^{n-1}
\qquad
\left(\sqrt{u}\right)' = \frac{u'}{2\sqrt{u}}
$$

Dans les deux cas, le geste est identique : on dérive l'enveloppe — la puissance, la racine — **en gardant l'intérieur intact**, puis on multiplie par $u'$.

Pour $f$, l'erreur classique est de dériver aussi l'intérieur dans le facteur $u^{n-1}$ : le $\left(3x^2-x+1\right)^4$ reste tel quel.

Pour $g$, on ne développe pas : la réponse se présente naturellement comme une fraction, et elle se simplifie.

#exemple
Même méthode sur $p(x) = \left(x^3+2x\right)^4$ et $q(x) = \sqrt{4x-1}$.

**Pour $p$** — on identifie l'intérieur et sa dérivée :

$$
u = x^3+2x, \qquad u' = 3x^2+2, \qquad n = 4
$$

$$
p'(x) = 4\left(3x^2+2\right)\left(x^3+2x\right)^3
$$

L'exposant passe de $4$ à $3$, le facteur $4$ sort devant, et $u'$ vient multiplier. L'intérieur, lui, n'a pas bougé dans le dernier facteur.

**Pour $q$** — on pose $u = 4x-1$, donc $u' = 4$ :

$$
q'(x) = \frac{4}{2\sqrt{4x-1}} = \frac{2}{\sqrt{4x-1}}
$$

On simplifie toujours le facteur $2$ du dénominateur contre celui du numérateur quand c'est possible : la forme finale est plus lisible.

#solution
**Pour $f$** — on pose :

$$
u = 3x^2-x+1, \qquad u' = 6x-1, \qquad n = 5
$$

$$
\boxed{f'(x) = 5(6x-1)\left(3x^2-x+1\right)^4}
$$

L'exposant descend de $5$ à $4$, et l'intérieur reste inchangé dans ce facteur. On ne développe surtout pas : sous cette forme, le signe de $f'$ se lit d'un coup d'œil, puisque $\left(3x^2-x+1\right)^4$ est positif et que tout dépend du signe de $6x-1$.

**Pour $g$** — on pose $u = x^2+4$, donc $u' = 2x$ :

$$
g'(x) = \frac{2x}{2\sqrt{x^2+4}} = \boxed{\frac{x}{\sqrt{x^2+4}}}
$$

Le domaine mérite un mot : $x^2+4$ est **strictement positif** pour tout $x$ réel, donc $g$ est définie **et** dérivable sur $\mathbb{R}$ tout entier. C'est le cas favorable — au palier 4, on verra que dès que l'intérieur peut s'annuler, les deux domaines cessent de coïncider.
::

::exo-question{label="2." cours="xfvr-composees"}
Dériver :

$$
f(x) = e^{3x^2-1} \ \text{ sur } \mathbb{R}
\qquad
g(x) = \ln\left(x^2+1\right) \ \text{ sur } \mathbb{R}
\qquad
h(x) = x\,e^{-x} \ \text{ sur } \mathbb{R}
$$

#indice
$$
\left(e^{u}\right)' = u'e^{u}
\qquad
\left(\ln u\right)' = \frac{u'}{u}
$$

L'exponentielle ne change pas en se dérivant : tout le travail est dans le $u'$ qui apparaît devant. Le logarithme, lui, disparaît complètement — il ne reste que la fraction $\dfrac{u'}{u}$.

Pour $h$, ne pas se laisser prendre : c'est d'abord un **produit**, et l'un de ses facteurs est une forme composée. On applique donc $(uv)'$, en calculant $\left(e^{-x}\right)'$ au passage — et son signe moins.

#exemple
Même méthode sur $p(x) = e^{x^2+x}$, $q(x) = \ln(3x+2)$ et $r(x) = x^2e^{2x}$.

**Pour $p$** — on pose $u = x^2+x$, donc $u' = 2x+1$ :

$$
p'(x) = (2x+1)e^{x^2+x}
$$

**Pour $q$** — on pose $u = 3x+2$, donc $u' = 3$ :

$$
q'(x) = \frac{3}{3x+2}
$$

**Pour $r$** — c'est un produit. On pose :

$$
u = x^2,\quad u' = 2x, \qquad v = e^{2x},\quad v' = 2e^{2x}
$$

$$
r'(x) = 2x\,e^{2x}+x^2\times 2e^{2x} = 2x\,e^{2x}+2x^2e^{2x}
$$

**On termine en factorisant** par ce qui est commun — c'est sous cette forme que le signe se lit :

$$
r'(x) = 2x\,e^{2x}(1+x)
$$

#solution
**Pour $f$** — on pose $u = 3x^2-1$, donc $u' = 6x$ :

$$
\boxed{f'(x) = 6x\,e^{3x^2-1}}
$$

**Pour $g$** — on pose $u = x^2+1$, donc $u' = 2x$ :

$$
\boxed{g'(x) = \frac{2x}{x^2+1}}
$$

Le dénominateur ne s'annule jamais et reste strictement positif : la condition $u>0$ du logarithme est satisfaite partout, donc $g$ est bien définie et dérivable sur $\mathbb{R}$.

**Pour $h$** — c'est un produit, dont le second facteur est composé :

$$
u = x,\quad u' = 1, \qquad v = e^{-x},\quad v' = -e^{-x}
$$

$$
h'(x) = 1\times e^{-x}+x\times\left(-e^{-x}\right) = e^{-x}-x\,e^{-x}
$$

**On factorise par $e^{-x}$** :

$$
\boxed{h'(x) = (1-x)e^{-x}}
$$

Comme $e^{-x} > 0$ toujours, le signe de $h'$ est celui de $1-x$ : la fonction $h$ croît jusqu'en $x = 1$ puis décroît. Sans la factorisation, cette lecture aurait demandé un calcul de plus.
::

::exo-question{label="3." cours="xfvr-composees"}
Dériver :

$$
f(x) = \sin\left(3x+\frac{\pi}{4}\right)
\qquad
g(x) = \cos^2 x
\qquad
h(x) = e^{\sin(2x)}
$$

#indice
$$
\left(\sin u\right)' = u'\cos u
\qquad
\left(\cos u\right)' = -u'\sin u
$$

Le signe moins appartient au **cosinus qu'on dérive**, pas au sinus — c'est le sens à retenir, et il ne s'inverse jamais.

Pour $g$, attention à l'écriture : $\cos^2 x$ signifie $(\cos x)^2$. L'enveloppe est donc le **carré**, et l'intérieur est le cosinus. C'est la formule de la puissance qui s'applique en premier.

Pour $h$, il y a **deux couches** empilées : une exponentielle, à l'intérieur de laquelle vit un sinus, lui-même appliqué à $2x$. On dérive de l'extérieur vers l'intérieur, une couche à la fois, en écrivant chaque étape sur sa propre ligne.

#exemple
Même méthode sur $p(x) = \cos(5x-1)$, $q(x) = \sin^3 x$ et $r(x) = \ln\left(\cos x\right)$.

**Pour $p$** — on pose $u = 5x-1$, donc $u' = 5$, et le cosinus dérivé donne un moins :

$$
p'(x) = -5\sin(5x-1)
$$

**Pour $q$** — l'enveloppe est la puissance $3$, l'intérieur est $\sin x$ :

$$
u = \sin x,\quad u' = \cos x,\quad n = 3
\qquad\Longrightarrow\qquad
q'(x) = 3\cos x\,\sin^2 x
$$

**Pour $r$** — l'enveloppe est le logarithme, l'intérieur le cosinus :

$$
u = \cos x,\quad u' = -\sin x
\qquad\Longrightarrow\qquad
r'(x) = \frac{-\sin x}{\cos x} = -\tan x
$$

Le résultat n'a de sens que là où $\cos x > 0$, condition d'existence du logarithme de départ.

#solution
**Pour $f$** — on pose $u = 3x+\dfrac{\pi}{4}$, donc $u' = 3$ :

$$
\boxed{f'(x) = 3\cos\left(3x+\frac{\pi}{4}\right)}
$$

Le $3$ vient de la dérivée de l'intérieur : l'oublier est l'erreur la plus fréquente sur ce type de fonction.

**Pour $g$** — on écrit $g(x) = (\cos x)^2$, l'enveloppe est le carré :

$$
u = \cos x,\quad u' = -\sin x,\quad n = 2
$$

$$
g'(x) = 2\times(-\sin x)\times\cos x = \boxed{-2\sin x\cos x}
$$

Cette expression est exactement $-\sin(2x)$, par la formule de duplication — les deux écritures sont acceptables.

**Pour $h$** — deux couches, dérivées de l'extérieur vers l'intérieur.

Couche externe, l'exponentielle : sa dérivée est elle-même, multipliée par la dérivée de son contenu.

$$
h'(x) = \big(\sin(2x)\big)'\times e^{\sin(2x)}
$$

Couche interne, le sinus appliqué à $2x$ :

$$
\big(\sin(2x)\big)' = 2\cos(2x)
$$

En rassemblant :

$$
\boxed{h'(x) = 2\cos(2x)\,e^{\sin(2x)}}
$$

Écrire la couche interne sur sa propre ligne coûte trois lignes de plus et évite l'oubli du facteur $2$ — qui, sur un empilement, se perd très facilement.
::
:::

:::exercice{titre="Palier 4 — Où une fonction est-elle dérivable ?" theme="Domaine de définition, domaine de dérivabilité, et le taux d'accroissement" badge="★★★★☆" icone="i-lucide-scan-line"}
Savoir dériver ne suffit pas : il faut aussi dire **où** la dérivée existe, et le justifier en une phrase. C'est la partie rédactionnelle du chapitre, et elle rapporte des points faciles à condition de connaître les formules toutes faites.

::exo-question{label="1." cours="xfvr-derivabilite"}
Donner l'ensemble de définition **et** l'ensemble de dérivabilité de chacune des fonctions suivantes, en justifiant.

$$
f(x) = \sqrt{x-3} \qquad g(x) = \frac{2x+1}{x^2-4} \qquad h(x) = \ln(3-x)
$$

#indice
Chaque structure impose sa condition, et la justification attendue tient en une ligne :

- **polynôme** : dérivable sur $\mathbb{R}$ ;
- **quotient** : dérivable là où le **dénominateur ne s'annule pas** ;
- **$\sqrt{u}$** : définie où $u \geqslant 0$, **dérivable seulement où $u > 0$** ;
- **$\ln u$** : il faut $u > 0$.

C'est la racine qui demande le plus d'attention : c'est le seul cas de cette liste où les deux ensembles **diffèrent**. Aux points où l'intérieur s'annule, la fonction existe encore mais n'est plus dérivable.

#exemple
Même travail sur $p(x) = \sqrt{2x+6}$ et $q(x) = \dfrac{x}{x^2-9}$.

**Pour $p$** — la racine impose $2x+6 \geqslant 0$, soit $x \geqslant -3$ :

> $p$ est définie sur $[-3\,;+\infty[$.

Pour la dérivabilité, l'inégalité devient stricte, car la dérivée $\dfrac{u'}{2\sqrt u}$ a $\sqrt u$ au dénominateur :

> $p$ est dérivable sur $]-3\,;+\infty[$, de dérivée $p'(x) = \dfrac{2}{2\sqrt{2x+6}} = \dfrac{1}{\sqrt{2x+6}}$.

En $x = -3$, la fonction existe et vaut $0$, mais la tangente y est **verticale**.

**Pour $q$** — c'est un quotient de deux polynômes. On cherche où le dénominateur s'annule :

$$
x^2-9 = 0 \iff x = -3 \ \text{ ou } \ x = 3
$$

> $q$ est définie et dérivable sur $\mathbb{R}\setminus\{-3\,;3\}$, comme quotient de fonctions dérivables dont le dénominateur ne s'y annule pas.

Pour un quotient, les deux ensembles coïncident toujours : c'est ce qui le distingue de la racine.

#solution
**Pour $f$** — la racine impose $x-3 \geqslant 0$ :

$$
\boxed{\mathcal{D}_f = [3\,;+\infty[ \qquad \mathcal{D}_{f'} = \,]3\,;+\infty[}
$$

> $f$ est définie sur $[3\,;+\infty[$ car une racine carrée exige un radicande positif ou nul, et dérivable sur $]3\,;+\infty[$ seulement, la dérivée $f'(x) = \dfrac{1}{2\sqrt{x-3}}$ n'ayant pas de sens en $3$.

En $x = 3$ la fonction existe — elle y vaut $0$ — mais sa tangente est verticale.

**Pour $g$** — quotient de deux polynômes, on annule le dénominateur :

$$
x^2-4 = 0 \iff x = -2 \ \text{ ou } \ x = 2
$$

$$
\boxed{\mathcal{D}_g = \mathcal{D}_{g'} = \mathbb{R}\setminus\{-2\,;2\}}
$$

> $g$ est définie et dérivable sur $\mathbb{R}\setminus\{-2\,;2\}$, comme quotient de fonctions dérivables dont le dénominateur ne s'annule pas sur cet ensemble.

**Pour $h$** — le logarithme impose $3-x > 0$, soit $x < 3$ :

$$
\boxed{\mathcal{D}_h = \mathcal{D}_{h'} = \,]-\infty\,;3[}
$$

> $h$ est définie et dérivable sur $]-\infty\,;3[$, comme composée de fonctions dérivables, la condition $3-x>0$ y étant satisfaite.

Sa dérivée vaut $h'(x) = \dfrac{-1}{3-x}$ : le $-1$ vient de la dérivée de l'intérieur, et c'est l'oubli classique sur ce type d'expression.
::

::exo-question{label="2." cours="xfvr-derivabilite"}
Donner l'ensemble de dérivabilité de

$$
f(x) = \frac{x+1}{x^2+x+1}
\qquad
g(x) = \frac{1}{x^2-5x+6}
$$

#indice
Devant un quotient, le réflexe « il y a un dénominateur, donc on retire des valeurs » est faux une fois sur deux. La seule question à poser est : **ce dénominateur s'annule-t-il vraiment ?**

Pour un trinôme, la réponse est donnée par le **discriminant** $\Delta = b^2-4ac$ :

- $\Delta < 0$ : le trinôme ne s'annule jamais, rien à retirer ;
- $\Delta \geqslant 0$ : on calcule les racines et on les exclut.

Le calcul du discriminant coûte une ligne et évite une réponse fausse.

#exemple
Même travail sur $p(x) = \dfrac{3}{x^2+4}$ et $q(x) = \dfrac{x}{x^2-x-2}$.

**Pour $p$** — inutile même de calculer un discriminant : $x^2 \geqslant 0$, donc $x^2+4 \geqslant 4 > 0$. Le dénominateur ne s'annule jamais.

> $p$ est dérivable sur $\mathbb{R}$ tout entier.

**Pour $q$** — on calcule le discriminant de $x^2-x-2$, avec $a = 1$, $b = -1$, $c = -2$ :

$$
\Delta = (-1)^2-4\times 1\times(-2) = 1+8 = 9 > 0
$$

Deux racines, donc :

$$
x = \frac{1\pm 3}{2} \quad\Longrightarrow\quad x = 2 \ \text{ ou } \ x = -1
$$

> $q$ est dérivable sur $\mathbb{R}\setminus\{-1\,;2\}$.

#solution
**Pour $f$** — le dénominateur est le trinôme $x^2+x+1$, avec $a = 1$, $b = 1$, $c = 1$ :

$$
\Delta = 1^2-4\times 1\times 1 = -3 < 0
$$

Le discriminant est strictement négatif : le trinôme ne s'annule **jamais**, et il garde le signe de $a$, donc il est toujours strictement positif.

$$
\boxed{f \text{ est dérivable sur } \mathbb{R}}
$$

C'est le cas où le réflexe automatique induit en erreur : il y a bien un dénominateur, et pourtant il n'y a rien à exclure.

**Pour $g$** — le dénominateur est $x^2-5x+6$, avec $a = 1$, $b = -5$, $c = 6$ :

$$
\Delta = (-5)^2-4\times 1\times 6 = 25-24 = 1 > 0
$$

Deux racines :

$$
x = \frac{5\pm 1}{2} \quad\Longrightarrow\quad x = 3 \ \text{ ou } \ x = 2
$$

$$
\boxed{g \text{ est dérivable sur } \mathbb{R}\setminus\{2\,;3\}}
$$

On peut aussi factoriser directement : $x^2-5x+6 = (x-2)(x-3)$, ce qui donne les deux valeurs sans passer par le discriminant.
::

::exo-question{label="3." cours="xfvr-taux"}
Montrer que la fonction $f(x) = \lvert x-2\rvert$ n'est pas dérivable en $2$.

#indice
Aucune formule du tableau ne s'applique ici : il faut revenir à la **définition** du nombre dérivé, c'est-à-dire à la limite du taux d'accroissement.

$$
f'(a) = \lim_{h\to 0}\frac{f(a+h)-f(a)}{h}
$$

La méthode pour montrer qu'une telle limite **n'existe pas** est toujours la même : calculer séparément la limite **à droite** ($h\to 0^+$) et la limite **à gauche** ($h\to 0^-$), et constater qu'elles diffèrent.

Le seul point technique est de savoir enlever la valeur absolue, ce qui dépend justement du signe de $h$.

#exemple
Même méthode sur $g(x) = \lvert x\rvert$ en $0$.

**On écrit le taux d'accroissement** en $a = 0$, avec $g(0) = 0$ :

$$
\frac{g(0+h)-g(0)}{h} = \frac{\lvert h\rvert}{h}
$$

**Limite à droite.** Si $h > 0$, alors $\lvert h\rvert = h$ :

$$
\frac{\lvert h\rvert}{h} = \frac{h}{h} = 1 \quad\Longrightarrow\quad \lim_{h\to 0^+}\frac{\lvert h\rvert}{h} = 1
$$

**Limite à gauche.** Si $h < 0$, alors $\lvert h\rvert = -h$ :

$$
\frac{\lvert h\rvert}{h} = \frac{-h}{h} = -1 \quad\Longrightarrow\quad \lim_{h\to 0^-}\frac{\lvert h\rvert}{h} = -1
$$

**Conclusion.** Les deux limites existent mais valent $1$ et $-1$ : elles diffèrent, donc la limite globale n'existe pas et $g$ n'est pas dérivable en $0$.

Géométriquement, la courbe présente un **point anguleux** : deux demi-tangentes de pentes $1$ et $-1$, et donc pas de tangente unique.

#solution
**Le taux d'accroissement en $2$.** On a $f(2) = \lvert 2-2\rvert = 0$, donc

$$
\frac{f(2+h)-f(2)}{h} = \frac{\lvert 2+h-2\rvert-0}{h} = \frac{\lvert h\rvert}{h}
$$

**Limite à droite.** Pour $h > 0$, on a $\lvert h\rvert = h$ :

$$
\lim_{h\to 0^+}\frac{\lvert h\rvert}{h} = \lim_{h\to 0^+}\frac{h}{h} = 1
$$

**Limite à gauche.** Pour $h < 0$, on a $\lvert h\rvert = -h$ :

$$
\lim_{h\to 0^-}\frac{\lvert h\rvert}{h} = \lim_{h\to 0^-}\frac{-h}{h} = -1
$$

**Conclusion.**

$$
\boxed{1 \neq -1 \ \Longrightarrow\ f \text{ n'est pas dérivable en } 2}
$$

Les deux limites latérales existent et sont finies, mais elles ne coïncident pas : la limite du taux d'accroissement n'existe donc pas.

**Ce que cela montre au passage.** $f$ est pourtant **continue** en $2$, puisque $\lvert x-2\rvert \to 0 = f(2)$. La continuité n'entraîne donc pas la dérivabilité — c'est le contre-exemple de référence, et l'implication ne vaut que dans l'autre sens.
::
:::

:::exercice{titre="Palier 5 — Continuité, TVI et bijection" theme="Les trois théorèmes du chapitre, et la rédaction qu'ils demandent" badge="★★★★★" icone="i-lucide-git-branch"}
Dernier palier, et le plus rédactionnel : ici, le calcul est court et c'est la **justification** qui compte. Chaque théorème a ses hypothèses, et les oublier coûte plus cher qu'une erreur de signe.

::exo-question{label="1." cours="xfvr-continuite"}
Soit $f$ définie sur $\mathbb{R}$ par

$$
f(x) = \frac{x^2-4}{x-2} \ \text{ si } x\neq 2, \qquad f(2) = a
$$

Déterminer la valeur de $a$ pour laquelle $f$ est continue en $2$.

#indice
La continuité en un point $x_0$ tient en une seule égalité, celle qui relie la limite et la valeur :

$$
\lim_{x\to x_0}f(x) = f(x_0)
$$

Ici, $f(2)$ vaut $a$ par définition. Tout le travail consiste donc à calculer la limite de l'expression quand $x$ tend vers $2$, et à poser $a$ égal à ce qu'on trouve.

La limite se présente sous la forme indéterminée $\dfrac00$. Le geste attendu : **factoriser le numérateur** pour faire apparaître le facteur $x-2$ et le simplifier. L'identité $a^2-b^2 = (a-b)(a+b)$ suffit.

#exemple
Même méthode sur $g(x) = \dfrac{x^2-9}{x-3}$ pour $x\neq 3$, avec $g(3) = b$.

**On calcule la limite en $3$.** L'expression donne $\dfrac00$ : on factorise le numérateur avec l'identité de la différence de deux carrés.

$$
\frac{x^2-9}{x-3} = \frac{(x-3)(x+3)}{x-3} = x+3 \qquad (x\neq 3)
$$

La simplification est légitime car $x \neq 3$, donc $x-3 \neq 0$.

$$
\lim_{x\to 3}\frac{x^2-9}{x-3} = \lim_{x\to 3}(x+3) = 6
$$

**On conclut.** La continuité en $3$ exige $g(3) = 6$, donc $b = 6$.

Avec cette valeur, $g$ coïncide avec la fonction $x\mapsto x+3$ sur $\mathbb{R}$ tout entier : le « trou » de la courbe en $x = 3$ vient d'être rebouché.

#solution
**On calcule la limite en $2$.** L'expression est indéterminée, de la forme $\dfrac00$. On factorise le numérateur :

$$
x^2-4 = (x-2)(x+2)
$$

$$
\frac{x^2-4}{x-2} = \frac{(x-2)(x+2)}{x-2} = x+2 \qquad (x\neq 2)
$$

La simplification est licite puisque $x\neq 2$ sur le domaine où cette expression est utilisée.

$$
\lim_{x\to 2}f(x) = \lim_{x\to 2}(x+2) = 4
$$

**On applique la définition de la continuité.** Elle exige $\displaystyle\lim_{x\to 2}f(x) = f(2)$, c'est-à-dire $4 = a$.

$$
\boxed{a = 4}
$$

**Ce que cela signifie.** Pour $a = 4$, la fonction $f$ coïncide avec $x\mapsto x+2$ sur $\mathbb{R}$ entier : la courbe est la droite d'équation $y = x+2$, sans trou. Pour toute autre valeur de $a$, il subsiste un point isolé au-dessus ou au-dessous de la droite, et la fonction est discontinue en $2$.
::

::exo-question{label="2." cours="xfvr-tvi"}
Montrer que l'équation $x^3+x-1 = 0$ admet une **unique** solution $\alpha$ dans l'intervalle $[0\,;1]$, puis donner un encadrement de $\alpha$ à $0{,}1$ près.

#indice
Le mot **unique** est le signal : il faut deux arguments, et non un seul.

1. **L'existence** vient du théorème des valeurs intermédiaires : si $f$ est continue sur $[a\,;b]$ et si $f(a)$ et $f(b)$ sont de signes contraires, alors $f$ s'annule quelque part entre les deux.
2. **L'unicité** vient de la **stricte monotonie** : si en plus $f$ est strictement croissante, elle ne peut pas repasser par $0$ une seconde fois.

La rédaction attendue énumère donc explicitement les hypothèses : continuité, signes aux bornes, puis étude du signe de $f'$.

Pour l'encadrement, il n'y a rien de malin à trouver : on teste des valeurs de dixième en dixième jusqu'à ce que le signe change.

#exemple
Même méthode sur $g(x) = x^3+3x-2$ sur $[0\,;1]$.

**Continuité.** $g$ est un polynôme, donc continue sur $[0\,;1]$.

**Signes aux bornes.**

$$
g(0) = -2 < 0 \qquad\text{et}\qquad g(1) = 1+3-2 = 2 > 0
$$

Les deux valeurs sont de signes contraires : par le théorème des valeurs intermédiaires, $g$ s'annule au moins une fois dans $]0\,;1[$.

**Stricte monotonie.**

$$
g'(x) = 3x^2+3 > 0 \quad \text{pour tout } x
$$

$g$ est donc strictement croissante sur $[0\,;1]$, et elle ne peut y prendre la valeur $0$ qu'une seule fois. La solution est **unique**.

**Encadrement.** On teste :

$$
g(0{,}5) = 0{,}125+1{,}5-2 = -0{,}375 < 0
\qquad
g(0{,}6) = 0{,}216+1{,}8-2 = 0{,}016 > 0
$$

Le signe change entre $0{,}5$ et $0{,}6$, donc $0{,}5 < \alpha < 0{,}6$.

#solution
On pose $f(x) = x^3+x-1$ sur $[0\,;1]$.

**Continuité.** $f$ est un polynôme, donc continue sur $[0\,;1]$.

**Signes aux bornes.**

$$
f(0) = -1 < 0 \qquad\text{et}\qquad f(1) = 1+1-1 = 1 > 0
$$

$f(0)$ et $f(1)$ sont de signes contraires : d'après le **théorème des valeurs intermédiaires**, il existe au moins un réel $\alpha\in\,]0\,;1[$ tel que $f(\alpha) = 0$.

**Stricte monotonie.**

$$
f'(x) = 3x^2+1
$$

Comme $3x^2 \geqslant 0$, on a $f'(x) \geqslant 1 > 0$ pour tout $x$ : $f$ est **strictement croissante** sur $[0\,;1]$. Elle ne peut donc y prendre la valeur $0$ qu'une seule fois.

$$
\boxed{\text{L'équation admet une unique solution } \alpha \text{ dans } [0\,;1]}
$$

**Encadrement à $0{,}1$ près.** On calcule de dixième en dixième :

$$
f(0{,}6) = 0{,}216+0{,}6-1 = -0{,}184 < 0
$$

$$
f(0{,}7) = 0{,}343+0{,}7-1 = 0{,}043 > 0
$$

Le changement de signe se produit entre ces deux valeurs, et la stricte croissance garantit qu'il n'y en a pas d'autre :

$$
\boxed{0{,}6 < \alpha < 0{,}7}
$$
::

::exo-question{label="3." cours="xfvr-bijection"}
Soit $f$ définie sur $\mathbb{R}$ par $f(x) = x^3+x$.

1. Montrer que $f$ réalise une bijection de $\mathbb{R}$ sur $\mathbb{R}$.
2. Calculer $\left(f^{-1}\right)'(2)$.

#indice
**Pour la bijection**, trois hypothèses à vérifier, dans cet ordre : $f$ est **continue**, **strictement monotone** sur l'intervalle, et ses **limites aux bornes** donnent l'intervalle d'arrivée. Les trois ensemble constituent le théorème de la bijection ; en omettre une suffit à invalider la conclusion.

**Pour la dérivée de la réciproque**, la formule est

$$
\left(f^{-1}\right)'(y) = \frac{1}{f'\left(f^{-1}(y)\right)}
$$

Elle demande donc de connaître $f^{-1}(2)$ — c'est-à-dire l'antécédent de $2$ par $f$. Inutile de chercher une expression de $f^{-1}$ : il suffit de **deviner** cet antécédent et de vérifier, ce qui est immédiat sur des valeurs entières.

#exemple
Même méthode sur $g(x) = x^3+2x$, avec $\left(g^{-1}\right)'(3)$ à calculer.

**Bijection.** $g$ est un polynôme, donc continue sur $\mathbb{R}$. Sa dérivée vaut

$$
g'(x) = 3x^2+2 \geqslant 2 > 0
$$

donc $g$ est strictement croissante. Enfin

$$
\lim_{x\to-\infty}g(x) = -\infty \qquad\text{et}\qquad \lim_{x\to+\infty}g(x) = +\infty
$$

D'après le théorème de la bijection, $g$ réalise une bijection de $\mathbb{R}$ sur $\mathbb{R}$.

**Antécédent de $3$.** On cherche $x$ tel que $x^3+2x = 3$. La valeur $x = 1$ convient : $1+2 = 3$. La bijectivité garantit qu'il n'y en a pas d'autre, donc $g^{-1}(3) = 1$.

**Dérivée de la réciproque.**

$$
\left(g^{-1}\right)'(3) = \frac{1}{g'(1)} = \frac{1}{3+2} = \frac15
$$

#solution
**1. La bijection.** Trois points à établir.

*Continuité* : $f$ est un polynôme, donc continue sur $\mathbb{R}$.

*Stricte monotonie* : on calcule la dérivée,

$$
f'(x) = 3x^2+1
$$

Comme $3x^2 \geqslant 0$, on a $f'(x) \geqslant 1 > 0$ pour tout réel $x$. Donc $f$ est **strictement croissante** sur $\mathbb{R}$.

*Limites aux bornes* : le terme dominant d'un polynôme impose son comportement à l'infini,

$$
\lim_{x\to-\infty}f(x) = -\infty \qquad\text{et}\qquad \lim_{x\to+\infty}f(x) = +\infty
$$

L'image de $\mathbb{R}$ est donc l'intervalle $\left]-\infty\,;+\infty\right[ = \mathbb{R}$.

$$
\boxed{f \text{ réalise une bijection de } \mathbb{R} \text{ sur } \mathbb{R}}
$$

**2. La dérivée de la réciproque.** On applique

$$
\left(f^{-1}\right)'(2) = \frac{1}{f'\left(f^{-1}(2)\right)}
$$

*Antécédent de $2$* : on cherche $x$ tel que $x^3+x = 2$. La valeur $x = 1$ convient, puisque $1+1 = 2$, et la bijectivité assure qu'elle est la seule. Donc $f^{-1}(2) = 1$.

*Application de la formule* : $f'(1) = 3\times 1+1 = 4$, d'où

$$
\boxed{\left(f^{-1}\right)'(2) = \frac14}
$$

**La lecture géométrique**, qui rend la formule évidente : les courbes de $f$ et de $f^{-1}$ sont symétriques par rapport à la droite $y = x$. Cette symétrie échange les rôles de l'abscisse et de l'ordonnée, donc elle **renverse les pentes**. Une tangente de pente $4$ au point $(1\,;2)$ devient une tangente de pente $\dfrac14$ au point $(2\,;1)$.
::
:::

## Les rappels de cours de cette fiche

Ces tiroirs s'ouvrent aussi depuis le bouton **Cours** de chaque question. Ils sont regroupés ici pour permettre une relecture d'ensemble.

::extrait-cours{id="xfvr-tableau" titre="Le tableau des dérivées usuelles, et la somme" source="/cours/a1/remise-a-niveau-maths/fonctions-variable-reelle/cours#_4-le-tableau-des-dérivées-usuelles"}
**Dériver une somme, c'est dériver terme à terme** — il n'y a pas d'autre règle :

$$
(u+v)' = u'+v' \qquad (k\,u)' = k\,u' \qquad (k)' = 0
$$

Le coefficient devant un terme se contente de suivre, et une constante additive disparaît.

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

::extrait-cours{id="xfvr-reecriture" titre="Réécrire avant de dériver" source="/cours/a1/remise-a-niveau-maths/fonctions-variable-reelle/cours#_4-le-tableau-des-dérivées-usuelles"}
Avant d'appliquer la moindre formule, une question : **l'écriture se simplifie-t-elle ?** Une minute de réécriture épargne souvent tout le calcul.

**Passer en puissance.** La ligne $x^\alpha \mapsto \alpha x^{\alpha-1}$ vaut pour **tout** exposant, entier, négatif ou fractionnaire :

$$
\frac{1}{x^n} = x^{-n} \qquad \sqrt{x} = x^{1/2} \qquad \frac{1}{\sqrt x} = x^{-1/2}
$$

$$
\left(x^{-3}\right)' = -3x^{-4} = -\frac{3}{x^4}
\qquad
\left(x^{-1/2}\right)' = -\frac12 x^{-3/2} = -\frac{1}{2x\sqrt x}
$$

L'exposant **descend** de $1$ : de $-3$ on passe à $-4$, et non à $-2$.

**Simplifier avant de dériver.** Un produit qui se développe, une fraction qui se réduit : on le fait **avant**, jamais après.

$$
f(x) = x^2\left(3-\frac{1}{x}\right) = 3x^2-x \quad\Longrightarrow\quad f'(x) = 6x-1
$$

**La précaution à garder** : la simplification ne vaut que sur le domaine de départ. $\dfrac{x^2-4}{x-2}$ vaut $x+2$ **pour $x\neq 2$** ; en $2$, l'expression initiale n'existe pas.
::

::extrait-cours{id="xfvr-produit" titre="Dériver un produit" source="/cours/a1/remise-a-niveau-maths/fonctions-variable-reelle/cours#_4-le-tableau-des-dérivées-usuelles"}
$$
(uv)' = u'v+uv'
$$

**Les deux termes, jamais un seul** : écrire $u'v'$ est l'erreur numéro un.

La méthode, en trois temps, toujours écrite noir sur blanc :

1. **poser** $u$ et $v$ ;
2. **calculer** $u'$ et $v'$ à part ;
3. **remplacer** dans la formule, puis **simplifier**.

Pour $f(x) = (2x+1)e^{x}$ : $u = 2x+1$, $u' = 2$, $v = e^x$, $v' = e^x$, d'où

$$
f'(x) = 2e^x+(2x+1)e^x = (2x+3)e^x
$$

**Toujours finir en factorisant** ce qui est commun. C'est ce qui rend la dérivée lisible, et c'est sous cette forme qu'on en étudiera le signe.

Et le réflexe préalable reste le même : si le produit se développe simplement, développer d'abord.
::

::extrait-cours{id="xfvr-inverse-quotient" titre="Dériver un inverse, dériver un quotient" source="/cours/a1/remise-a-niveau-maths/fonctions-variable-reelle/cours#_5-les-formes-composées"}
**L'inverse**, quand le numérateur est une constante :

$$
\left(\frac{1}{u}\right)' = -\frac{u'}{u^2}
\qquad
\left(\frac{k}{u}\right)' = -\frac{k\,u'}{u^2}
$$

Trois choses à ne pas perdre : le **signe moins**, le $u'$ **au numérateur**, le **carré** au dénominateur — qu'on ne développe jamais.

**Le quotient général** :

$$
\left(\frac{u}{v}\right)' = \frac{u'v-uv'}{v^2}
$$

**L'ordre des deux termes du numérateur n'est pas négociable** : $u'v$ d'abord, $uv'$ ensuite. Les intervertir change le signe de toute la dérivée. Et le moins se distribue sur **tout** le second produit — parenthéser $uv'$ avant de développer évite l'oubli.

**Le piège du dénominateur en $a-x$.** Si $v = 4-x$, alors $v' = -1$, et non $+1$. Ce seul oubli renverse le signe du second terme.

**Le raccourci quand le numérateur ressemble au dénominateur** — tenter la division avant de sortir la grosse formule :

$$
\frac{x+2}{x+1} = 1+\frac{1}{x+1} \quad\Longrightarrow\quad f'(x) = -\frac{1}{(x+1)^2}
$$

**Un contrôle gratuit** : pour $\dfrac{ax+b}{cx+d}$, le numérateur de la dérivée est toujours **constant**. Si un $x$ y subsiste, il y a une erreur.
::

::extrait-cours{id="xfvr-composees" titre="Les formes composées" source="/cours/a1/remise-a-niveau-maths/fonctions-variable-reelle/cours#_5-les-formes-composées"}
Une forme composée, c'est une fonction **appliquée à une autre**. Une seule idée : **dériver l'enveloppe en laissant l'intérieur intact, puis multiplier par la dérivée de l'intérieur**.

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

**Attention à l'écriture** : $\cos^2 x$ signifie $(\cos x)^2$. L'enveloppe est le carré, l'intérieur est le cosinus.

**Empilement.** Quand les couches s'emboîtent, on dérive **de l'extérieur vers l'intérieur**, une couche à la fois, en écrivant chaque étape sur sa propre ligne :

$$
\left(\sqrt{\ln(x^2+1)}\right)' = \frac{\big(\ln(x^2+1)\big)'}{2\sqrt{\ln(x^2+1)}} = \frac{x}{(x^2+1)\sqrt{\ln(x^2+1)}}
$$
::

::extrait-cours{id="xfvr-derivabilite" titre="Ensemble de définition, ensemble de dérivabilité" source="/cours/a1/remise-a-niveau-maths/fonctions-variable-reelle/cours#_6-où-une-fonction-est-elle-dérivable"}
Deux ensembles à ne pas confondre : celui où la fonction **existe**, et celui où elle est **dérivable**. Le second est parfois strictement plus petit.

Les justifications attendues, à réciter telles quelles :

- **polynôme** : dérivable sur $\mathbb{R}$ ;
- **quotient** : dérivable partout où le **dénominateur ne s'annule pas** ;
- **$\sqrt{u}$** : définie où $u \geqslant 0$, **dérivable seulement où $u > 0$** ;
- **$\ln u$** : il faut $u > 0$ ;
- **$e^u$** : aucune contrainte.

**Le cas de la racine**, celui qui distingue les deux ensembles : $\sqrt{x-4}$ est définie sur $[4\,;+\infty[$ et dérivable sur $]4\,;+\infty[$ seulement. En $4$, la tangente est **verticale**.

**Le piège du dénominateur.** Devant $\dfrac{1}{x^2+x+1}$, le réflexe « quotient, donc on retire des valeurs » est faux. On calcule le discriminant :

$$
\Delta = 1-4 = -3 < 0
$$

Le trinôme ne s'annule jamais : la fonction est dérivable sur $\mathbb{R}$ **tout entier**. Toujours vérifier le discriminant avant d'exclure quoi que ce soit.
::

::extrait-cours{id="xfvr-taux" titre="Le taux d'accroissement, et les points anguleux" source="/cours/a1/remise-a-niveau-maths/fonctions-variable-reelle/cours#_3-dérivabilité-la-définition"}
La définition, celle à laquelle on revient quand aucune formule ne s'applique :

$$
f'(a) = \lim_{h\to 0}\frac{f(a+h)-f(a)}{h}
$$

Ce quotient est la **pente de la corde** entre les points d'abscisses $a$ et $a+h$ ; sa limite est la pente de la **tangente**.

**Pour montrer qu'une fonction n'est pas dérivable en un point**, on calcule séparément les deux limites latérales du taux d'accroissement :

- si elles sont **différentes**, la courbe a un **point anguleux** — deux demi-tangentes, pas de tangente unique ;
- si l'une est **infinie**, la tangente est **verticale**.

Le contre-exemple de référence est $\lvert x\rvert$ en $0$ : le taux vaut $\dfrac{\lvert h\rvert}{h}$, c'est-à-dire $+1$ pour $h>0$ et $-1$ pour $h<0$.

**Ce qu'il montre.** $\lvert x\rvert$ est continue en $0$ sans y être dérivable : la continuité n'entraîne **pas** la dérivabilité. L'implication ne vaut que dans l'autre sens — une fonction dérivable en un point y est continue.
::

::extrait-cours{id="xfvr-continuite" titre="Continuité en un point" source="/cours/a1/remise-a-niveau-maths/fonctions-variable-reelle/cours#_1-continuité"}
$f$ est **continue en $x_0$** lorsque

$$
\lim_{x\to x_0}f(x) = f(x_0)
$$

Trois choses sont donc exigées d'un coup : que $f(x_0)$ existe, que la limite existe, et que les deux coïncident.

**Le cas d'une fonction définie par morceaux** est celui où la question se pose vraiment. On calcule la limite de l'expression, et on impose à la valeur au point d'être égale à ce qu'on trouve.

Quand la limite est de la forme indéterminée $\dfrac00$, le geste attendu est de **factoriser** pour simplifier le facteur qui s'annule :

$$
\frac{x^2-4}{x-2} = \frac{(x-2)(x+2)}{x-2} = x+2 \qquad (x\neq 2)
$$

d'où $\displaystyle\lim_{x\to 2}\frac{x^2-4}{x-2} = 4$.

Les identités qui servent le plus : $a^2-b^2 = (a-b)(a+b)$, et la factorisation d'un trinôme par sa racine évidente.
::

::extrait-cours{id="xfvr-tvi" titre="Le théorème des valeurs intermédiaires" source="/cours/a1/remise-a-niveau-maths/fonctions-variable-reelle/cours#_2-théorème-des-valeurs-intermédiaires"}
**Énoncé.** Si $f$ est continue sur $[a\,;b]$ et si $f(a)$ et $f(b)$ sont de signes contraires, alors l'équation $f(x) = 0$ admet **au moins une** solution dans $]a\,;b[$.

**Le mot « unique » demande un argument de plus.** Le TVI donne l'existence, jamais l'unicité. Celle-ci vient de la **stricte monotonie** : une fonction strictement croissante ne peut pas repasser deux fois par la même valeur.

**La rédaction attendue**, en trois temps :

1. $f$ est continue sur $[a\,;b]$ — dire pourquoi : polynôme, quotient dont le dénominateur ne s'annule pas, composée de fonctions continues… ;
2. $f(a)$ et $f(b)$ sont de signes contraires — donner les deux valeurs ;
3. $f'$ garde un signe strict sur $[a\,;b]$, donc $f$ y est strictement monotone — d'où l'unicité.

**Pour encadrer la solution**, on teste des valeurs au pas voulu jusqu'au changement de signe. La stricte monotonie garantit qu'il n'y en a pas d'autre ailleurs.
::

::extrait-cours{id="xfvr-bijection" titre="Bijection et dérivée de la réciproque" source="/cours/a1/remise-a-niveau-maths/fonctions-variable-reelle/cours#_7-bijections"}
**Le théorème de la bijection.** Si $f$ est **continue** et **strictement monotone** sur un intervalle $I$, alors $f$ réalise une bijection de $I$ sur $f(I)$ — l'intervalle image, que l'on obtient par les **limites aux bornes**.

Les trois hypothèses se citent explicitement dans la rédaction : en omettre une invalide la conclusion.

**La dérivée de la réciproque** :

$$
\left(f^{-1}\right)'(y) = \frac{1}{f'\left(f^{-1}(y)\right)}
$$

valable là où $f'\left(f^{-1}(y)\right) \neq 0$.

**En pratique**, on n'a jamais besoin d'une expression de $f^{-1}$. Il suffit de trouver l'**antécédent** du point considéré — souvent une valeur entière que l'on devine et que l'on vérifie —, la bijectivité garantissant qu'il est unique. On calcule ensuite $f'$ en ce point, et on prend l'inverse.

**La lecture géométrique**, qui rend la formule évidente : les courbes de $f$ et de $f^{-1}$ sont symétriques par rapport à la droite $y = x$. Cette symétrie échange abscisse et ordonnée, donc **renverse les pentes** : une tangente de pente $4$ en $(1\,;2)$ devient une tangente de pente $\dfrac14$ en $(2\,;1)$.
::
