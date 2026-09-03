---
title: QCM 5 — Dérivées en rafale
description: Vingt dérivées à reconnaître au premier coup d'œil — sinus, cosinus, tangente, arcsin, arccos, arctan, fonctions hyperboliques, et toutes leurs formes composées.
type: qcm
annee: A1
matiere: Remise à niveau en maths
ordre: 5
icone: i-lucide-zap
---

::rappel{titre="Le QCM le plus rentable des six" icone="i-lucide-zap"}
Vingt dérivées, rien d'autre. Sinus, cosinus, tangente, les trois arcs, les hyperboliques — et surtout leurs **formes composées**, qui sont ce qu'un QCM demande vraiment.

Le mécanisme est unique et se résume en une phrase : **la dérivée de l'intérieur sort en facteur**.

$$
\left(\sin u\right)' = u'\cos u \qquad \left(\cos u\right)' = -u'\sin u \qquad \left(\arctan u\right)' = \frac{u'}{1+u^2}
$$

Les deux erreurs qui coûtent presque toutes les questions, et qui se cumulent volontiers : **oublier le signe moins** du cosinus, et **oublier de dériver l'intérieur**. Avant de valider une réponse, deux vérifications de trois secondes — le signe est-il le bon ? le facteur $u'$ est-il là ?

On répond à tout, puis on clique sur **Corriger**.
::

:::qcm{titre="QCM 5 — Dérivées en rafale" theme="Trigonométrie, fonctions réciproques et hyperboliques, sous toutes leurs formes composées" duree="20 min" icone="i-lucide-zap"}

::qcm-question{label="1." bonne="c" cours="qcm-der-trigo"}
La dérivée de $x\mapsto\sin(2x)$ est :

#a
$\cos(2x)$

#b
$-2\cos(2x)$

#c
$2\cos(2x)$

#d
$2\sin(2x)$

#indice
$\left(\sin u\right)' = u'\cos u$. Le sinus devient cosinus **sans** signe moins, et la dérivée de l'intérieur sort en facteur.

#solution
Avec $u = 2x$ et $u' = 2$ :

$$
\left(\sin(2x)\right)' = 2\cos(2x)
$$

**Les distracteurs :** **a** oublie le facteur $2$, **b** ajoute un signe moins qui n'a rien à faire là (c'est le cosinus qui en porte un, pas le sinus), **d** ne change pas la fonction.

⚠️ **Le sens de la transformation** : $\sin \to \cos$ sans signe, $\cos \to \sin$ **avec** signe moins. Une seule des deux lignes porte un moins.
::

::qcm-question{label="2." bonne="b" cours="qcm-der-trigo"}
La dérivée de $x\mapsto\cos(3x+1)$ est :

#a
$-\sin(3x+1)$

#b
$-3\sin(3x+1)$

#c
$3\sin(3x+1)$

#d
$-3\cos(3x+1)$

#indice
Deux choses à ne pas rater en même temps : le signe moins du cosinus, **et** le facteur $u' = 3$.

Chacun des trois distracteurs en oublie exactement un.

#solution
Avec $u = 3x+1$ et $u' = 3$ :

$$
\left(\cos(3x+1)\right)' = -3\sin(3x+1)
$$

**Le tableau des erreurs** : **a** oublie $u'$, **c** oublie le signe, **d** oublie de changer la fonction.

**La vérification en deux temps**, à faire systématiquement sur ce type de question :

1. la fonction a-t-elle changé ? ($\cos$ doit devenir $\sin$)
2. le signe et le facteur $u'$ sont-ils là tous les deux ?
::

::qcm-question{label="3." bonne="a" cours="qcm-der-trigo"}
La dérivée de $\tan$ est :

#a
$1+\tan^2$

#b
$\dfrac{1}{\sin^2}$

#c
$-\dfrac{1}{\cos^2}$

#d
$\dfrac{1}{1+\tan^2}$

#indice
Deux écritures équivalentes existent, et les deux sont au programme. Retrouve-les en dérivant le quotient $\dfrac{\sin}{\cos}$ et en te servant de $\cos^2+\sin^2 = 1$.

Le résultat est-il positif ou négatif ? La tangente est-elle croissante ou décroissante ?

#solution
On dérive le quotient :

$$
\tan' = \left(\frac{\sin}{\cos}\right)' = \frac{\cos\times\cos-\sin\times(-\sin)}{\cos^2} = \frac{\cos^2+\sin^2}{\cos^2} = \frac{1}{\cos^2}
$$

Et en découpant autrement la même fraction :

$$
\frac{\cos^2+\sin^2}{\cos^2} = 1+\tan^2
$$

$$
\boxed{\tan' = 1+\tan^2 = \frac{1}{\cos^2}}
$$

**Le contrôle de bon sens** : la tangente est **strictement croissante** sur chacun de ses intervalles, donc sa dérivée est positive — ce qui élimine **c** immédiatement. Et comme $1+\tan^2 \geqslant 1$, la proposition **d**, qui vaut au plus $1$, est l'inverse du bon résultat.
::

::qcm-question{label="4." bonne="c" cours="qcm-der-composees"}
La dérivée de $x\mapsto\sin^3x$ est :

#a
$3\sin^2x$

#b
$\cos^3x$

#c
$3\sin^2x\cos x$

#d
$3\cos^2x\sin x$

#indice
$\sin^3x$ signifie $\left(\sin x\right)^3$ : c'est une **puissance de fonction**, donc $\left(u^n\right)' = n\,u'\,u^{n-1}$ avec $u = \sin x$.

Il reste donc un $\sin^2$ — et un facteur $u' = \cos x$.

#solution
Avec $u = \sin x$, $u' = \cos x$ et $n = 3$ :

$$
\left(\sin^3x\right)' = 3\cos x\,\sin^2x
$$

**Les distracteurs :** **a** applique la règle des puissances sans dériver l'intérieur, **b** dérive comme si l'exposant portait sur $x$, **d** intervertit les rôles du sinus et du cosinus.

⚠️ **Attention à la notation.** $\sin^3x$ veut dire $\left(\sin x\right)^3$, et non $\sin\left(x^3\right)$. La seconde se dériverait tout autrement : $3x^2\cos\left(x^3\right)$.
::

::qcm-question{label="5." bonne="b" cours="qcm-der-produit"}
La dérivée de $x\mapsto x\cos x$ est :

#a
$\cos x+x\sin x$

#b
$\cos x-x\sin x$

#c
$-\sin x$

#d
$-x\sin x$

#indice
Produit, avec $u = x$ et $v = \cos x$. Les deux termes de $(uv)' = u'v+uv'$ apportent quelque chose, et le signe moins vient de $\cos' = -\sin$.

#solution
Avec $u = x$, $u' = 1$, $v = \cos x$, $v' = -\sin x$ :

$$
(x\cos x)' = 1\times\cos x+x\times(-\sin x) = \cos x-x\sin x
$$

**Le signe moins n'est pas celui de la formule du produit** — qui porte un plus — mais celui de la dérivée du cosinus. C'est la nuance que teste la proposition **a**.

**Le contrôle en $x = 0$** : la formule donne $\cos 0-0 = 1$. Or près de $0$, $x\cos x \approx x$, de pente $1$. ✓
::

::qcm-question{label="6." bonne="a" cours="qcm-der-produit"}
La dérivée de $x\mapsto\dfrac{\sin x}{x}$ sur $\mathbb{R}^*$ est :

#a
$\dfrac{x\cos x-\sin x}{x^2}$

#b
$\dfrac{\cos x}{1}$

#c
$\dfrac{\sin x-x\cos x}{x^2}$

#d
$\dfrac{x\cos x+\sin x}{x^2}$

#indice
Formule du quotient, avec $u = \sin x$ et $v = x$. L'ordre compte : $u'v$ vient **en premier**, donc $x\cos x$ avant $\sin x$.

#solution
Avec $u = \sin x$, $u' = \cos x$, $v = x$, $v' = 1$ :

$$
\left(\frac{\sin x}{x}\right)' = \frac{\cos x\times x-\sin x\times 1}{x^2} = \frac{x\cos x-\sin x}{x^2}
$$

**La proposition c est l'opposé** : c'est l'erreur d'ordre dans le numérateur, $uv'-u'v$ au lieu de $u'v-uv'$. La **d** met un plus, confondant avec la formule du produit.

**Le repère** : le numérateur du quotient **commence par $u'$**, exactement comme celui du produit. Seul le signe change.
::

::qcm-question{label="7." bonne="c" cours="qcm-der-composees"}
La dérivée de $x\mapsto\cos^2x$ est :

#a
$2\cos x$

#b
$2\cos x\sin x$

#c
$-2\cos x\sin x$

#d
$-2\sin x$

#indice
Puissance de fonction avec $u = \cos x$, donc $u' = -\sin x$. Le signe moins vient de là, et de nulle part ailleurs.

#solution
Avec $u = \cos x$, $u' = -\sin x$ et $n = 2$ :

$$
\left(\cos^2x\right)' = 2\times(-\sin x)\times\cos x = -2\sin x\cos x
$$

On peut aussi l'écrire $-\sin(2x)$, grâce à la formule de duplication $\sin(2x) = 2\sin x\cos x$.

$$
\boxed{\left(\cos^2x\right)' = -2\sin x\cos x = -\sin(2x)}
$$

**Le contrôle par l'identité fondamentale** : $\cos^2x+\sin^2x = 1$ est constante, donc les dérivées de $\cos^2$ et $\sin^2$ doivent être **opposées**. Comme $\left(\sin^2x\right)' = 2\sin x\cos x$, on retrouve bien le signe moins.
::

::qcm-question{label="8." bonne="b" cours="qcm-der-arc"}
La dérivée de $x\mapsto\arctan(2x)$ est :

#a
$\dfrac{1}{1+4x^2}$

#b
$\dfrac{2}{1+4x^2}$

#c
$\dfrac{2}{1+2x^2}$

#d
$\dfrac{2}{(1+2x)^2}$

#indice
$\left(\arctan u\right)' = \dfrac{u'}{1+u^2}$. Deux endroits où le $2$ intervient, et ils ne jouent pas le même rôle : $u' = 2$ au numérateur, et $u^2 = (2x)^2$ au dénominateur.

#solution
Avec $u = 2x$ et $u' = 2$ :

$$
\left(\arctan(2x)\right)' = \frac{2}{1+(2x)^2} = \frac{2}{1+4x^2}
$$

**Les trois distracteurs, trois oublis :** **a** oublie $u'$ au numérateur, **c** oublie d'élever $2x$ au carré, **d** confond $1+u^2$ avec $(1+u)^2$.

⚠️ **Le carré porte sur $u$ tout entier**, coefficient compris : $(2x)^2 = 4x^2$, et non $2x^2$.
::

::qcm-question{label="9." bonne="d" cours="qcm-der-arc"}
La dérivée de $x\mapsto\arcsin\left(x^2\right)$ est :

#a
$\dfrac{1}{\sqrt{1-x^2}}$

#b
$\dfrac{2x}{\sqrt{1-x^2}}$

#c
$\dfrac{1}{\sqrt{1-x^4}}$

#d
$\dfrac{2x}{\sqrt{1-x^4}}$

#indice
$\left(\arcsin u\right)' = \dfrac{u'}{\sqrt{1-u^2}}$. Ici $u = x^2$, donc $u' = 2x$ **et** $u^2 = x^4$.

Deux modifications, pas une seule : chaque distracteur n'en fait qu'une.

#solution
Avec $u = x^2$ et $u' = 2x$ :

$$
\left(\arcsin\left(x^2\right)\right)' = \frac{2x}{\sqrt{1-\left(x^2\right)^2}} = \frac{2x}{\sqrt{1-x^4}}
$$

**Il faut remplacer $u$ partout** : au numérateur par sa dérivée, et sous la racine par son carré. Les distracteurs **b** et **c** n'en font chacun que la moitié.

**Le domaine, en passant** : il faut $\left\lvert x^2\right\rvert < 1$, c'est-à-dire $x\in\,]-1\,;1[$. C'est le même intervalle qu'`arcsin` lui-même, ici par coïncidence.
::

::qcm-question{label="10." bonne="a" cours="qcm-der-arc"}
La dérivée de $x\mapsto\arccos x+\arcsin x$ sur $]-1\,;1[$ est :

#a
$0$

#b
$\dfrac{2}{\sqrt{1-x^2}}$

#c
$\dfrac{1}{1+x^2}$

#d
$\dfrac{-2}{\sqrt{1-x^2}}$

#indice
Les dérivées d'$\arccos$ et d'$\arcsin$ ne diffèrent que par un signe. Que se passe-t-il quand on les additionne ?

Le résultat n'est pas un hasard : que vaut $\arccos x+\arcsin x$ ?

#solution
$$
\arccos'x+\arcsin'x = \frac{-1}{\sqrt{1-x^2}}+\frac{1}{\sqrt{1-x^2}} = 0
$$

**Ce n'est pas une coïncidence.** Une dérivée nulle sur un intervalle signifie une fonction **constante**, et cette constante se lit en évaluant en un point bien choisi, par exemple $x = 0$ :

$$
\arccos 0+\arcsin 0 = \frac{\pi}{2}+0 = \frac{\pi}{2}
$$

$$
\boxed{\arccos x+\arcsin x = \frac{\pi}{2} \quad\text{pour tout } x\in[-1\,;1]}
$$

**C'est aussi le moyen de retenir les deux dérivées** : puisque leur somme est constante, elles sont nécessairement opposées. Le signe moins va à $\arccos$, qui est décroissante.

Cette méthode — dérivée nulle plus un point — est celle qui démontre toutes les identités du chapitre, comme $\arctan x+\arctan\dfrac1x = \dfrac{\pi}{2}$ pour $x>0$.
::

::qcm-question{label="11." bonne="b" cours="qcm-der-composees"}
La dérivée de $x\mapsto e^{\sin x}$ est :

#a
$e^{\cos x}$

#b
$\cos x\,e^{\sin x}$

#c
$e^{\sin x}$

#d
$\sin x\,e^{\cos x}$

#indice
$\left(e^u\right)' = u'e^u$ : l'exponentielle reste **rigoureusement identique**, exposant compris. Seul un facteur apparaît devant.

Ici $u = \sin x$. Que vaut $u'$ ?

#solution
Avec $u = \sin x$ et $u' = \cos x$ :

$$
\left(e^{\sin x}\right)' = \cos x\,e^{\sin x}
$$

⚠️ **L'exposant ne change jamais en dérivant.** Les propositions **a** et **d** le modifient, ce qui n'arrive dans aucun cas — c'est un repère qui élimine la moitié des réponses sans le moindre calcul.

La proposition **c** oublie le facteur $u'$, l'erreur habituelle des formes composées.
::

::qcm-question{label="12." bonne="c" cours="qcm-der-composees"}
La dérivée de $x\mapsto\ln(\cos x)$ est :

#a
$\dfrac{1}{\cos x}$

#b
$\tan x$

#c
$-\tan x$

#d
$-\dfrac{1}{\sin x}$

#indice
$\left(\ln u\right)' = \dfrac{u'}{u}$, avec $u = \cos x$ donc $u' = -\sin x$.

Le quotient obtenu se simplifie en une fonction que tu connais bien.

#solution
Avec $u = \cos x$ et $u' = -\sin x$ :

$$
\left(\ln(\cos x)\right)' = \frac{-\sin x}{\cos x} = -\tan x
$$

**Deux points à ne pas rater :** le signe moins vient de $\cos' = -\sin$ (la proposition **b** l'oublie), et le quotient $\dfrac{\sin}{\cos}$ **se reconnaît** comme la tangente plutôt que de rester tel quel.

La proposition **a** oublie $u'$ purement et simplement.

**Le domaine, en passant** : il faut $\cos x > 0$, donc $x\in\left]-\dfrac{\pi}{2}+2k\pi\,;\dfrac{\pi}{2}+2k\pi\right[$. Pour un logarithme, la condition est la positivité **stricte**, pas la simple non-annulation.
::

::qcm-question{label="13." bonne="a" cours="qcm-der-composees"}
La dérivée de $x\mapsto\sqrt{\sin x}$, là où elle est définie, est :

#a
$\dfrac{\cos x}{2\sqrt{\sin x}}$

#b
$\dfrac{1}{2\sqrt{\sin x}}$

#c
$\dfrac{\cos x}{\sqrt{\sin x}}$

#d
$\dfrac{-\cos x}{2\sqrt{\sin x}}$

#indice
$\left(\sqrt u\right)' = \dfrac{u'}{2\sqrt u}$. Avec $u = \sin x$, le numérateur devient $\cos x$ — et il n'y a **rien** à simplifier avec le $2$, contrairement au cas $u = x^2$.

#solution
Avec $u = \sin x$ et $u' = \cos x$ :

$$
\left(\sqrt{\sin x}\right)' = \frac{\cos x}{2\sqrt{\sin x}}
$$

**Les distracteurs :** **b** oublie $u'$, **c** perd le facteur $2$ du dénominateur, **d** ajoute un signe moins injustifié.

⚠️ **Le $2$ ne se simplifie que si $u'$ contient un facteur $2$.** Pour $\sqrt{x^2+1}$, le $2x$ du numérateur simplifie effectivement le $2$ ; ici $\cos x$ ne le fait pas.

**Le domaine** : il faut $\sin x > 0$ **strictement** pour dériver, soit $x\in\,]2k\pi\,;\pi+2k\pi[$. Aux points où $\sin x = 0$, la fonction est définie mais la tangente est verticale.
::

::qcm-question{label="14." bonne="c" cours="qcm-der-trigo"}
La dérivée de $x\mapsto\tan(3x)$ est :

#a
$\dfrac{1}{\cos^2(3x)}$

#b
$3\tan^2(3x)$

#c
$\dfrac{3}{\cos^2(3x)}$

#d
$1+\tan^2(3x)$

#indice
$\left(\tan u\right)' = \dfrac{u'}{\cos^2u} = u'\left(1+\tan^2u\right)$. Le facteur $u' = 3$ doit apparaître, comme pour toute forme composée.

#solution
Avec $u = 3x$ et $u' = 3$ :

$$
\left(\tan(3x)\right)' = \frac{3}{\cos^2(3x)} = 3\left(1+\tan^2(3x)\right)
$$

**Les propositions a et d sont la même erreur** sous deux écritures : elles donnent la dérivée de $\tan x$ avec $3x$ substitué à l'intérieur, sans avoir dérivé l'intérieur.

La proposition **b** confond $3\left(1+\tan^2\right)$ avec $3\tan^2$ — la constante $1$ a disparu.

⚠️ Les deux écritures $\dfrac{1}{\cos^2}$ et $1+\tan^2$ sont **équivalentes** : selon la forme des propositions, il faut savoir passer de l'une à l'autre.
::

::qcm-question{label="15." bonne="b" cours="qcm-der-hyper"}
La dérivée de $x\mapsto\mathrm{sh}(2x)$ est :

#a
$2\,\mathrm{sh}(2x)$

#b
$2\,\mathrm{ch}(2x)$

#c
$-2\,\mathrm{ch}(2x)$

#d
$\mathrm{ch}(2x)$

#indice
$\mathrm{sh}' = \mathrm{ch}$, **sans aucun signe moins** — c'est là toute la différence avec la trigonométrie circulaire. Et la forme composée fait sortir $u' = 2$.

#solution
Avec $u = 2x$ et $u' = 2$ :

$$
\left(\mathrm{sh}(2x)\right)' = 2\,\mathrm{ch}(2x)
$$

**Le distracteur c est le piège de la question** : c'est le réflexe circulaire mal transposé. Côté hyperbolique, **ni $\mathrm{sh}'$ ni $\mathrm{ch}'$ ne portent de signe moins**.

$$
\mathrm{sh}' = \mathrm{ch} \qquad \mathrm{ch}' = \mathrm{sh}
$$

**Le moyen de s'en souvenir** : le signe moins existe bien côté hyperbolique, mais il est dans l'**identité** $\mathrm{ch}^2-\mathrm{sh}^2 = 1$, pas dans les dérivées. Côté circulaire, c'est l'inverse : identité en $+$, dérivée en $-$.
::

::qcm-question{label="16." bonne="a" cours="qcm-der-hyper"}
La dérivée de $x\mapsto\mathrm{ch}^2x$ est :

#a
$2\,\mathrm{ch}\,x\,\mathrm{sh}\,x$

#b
$-2\,\mathrm{ch}\,x\,\mathrm{sh}\,x$

#c
$2\,\mathrm{ch}\,x$

#d
$2\,\mathrm{sh}\,x$

#indice
Puissance de fonction, avec $u = \mathrm{ch}\,x$ donc $u' = \mathrm{sh}\,x$ — sans signe moins, contrairement au cosinus circulaire.

Compare avec la question 7 : le résultat n'a **pas** le même signe.

#solution
Avec $u = \mathrm{ch}\,x$, $u' = \mathrm{sh}\,x$ et $n = 2$ :

$$
\left(\mathrm{ch}^2x\right)' = 2\,\mathrm{sh}\,x\,\mathrm{ch}\,x = \mathrm{sh}(2x)
$$

**Le contraste avec la question 7 est tout l'intérêt de celle-ci :**

$$
\left(\cos^2x\right)' = -2\sin x\cos x \qquad\text{mais}\qquad \left(\mathrm{ch}^2x\right)' = +2\,\mathrm{sh}\,x\,\mathrm{ch}\,x
$$

Même structure, signes opposés — parce que $\cos' = -\sin$ alors que $\mathrm{ch}' = +\mathrm{sh}$.

**Le contrôle par l'identité** : $\mathrm{ch}^2-\mathrm{sh}^2 = 1$ est constante, donc $\left(\mathrm{ch}^2\right)'$ et $\left(\mathrm{sh}^2\right)'$ doivent être **égales** — et non opposées comme côté circulaire. C'est bien le cas, toutes deux valant $2\,\mathrm{sh}\,\mathrm{ch}$.
::

::qcm-question{label="17." bonne="c" cours="qcm-der-hyper"}
La dérivée de $\mathrm{th}$ est :

#a
$1+\mathrm{th}^2$

#b
$-\dfrac{1}{\mathrm{ch}^2}$

#c
$1-\mathrm{th}^2$

#d
$\dfrac{1}{\mathrm{sh}^2}$

#indice
Même calcul que pour $\tan'$, mais avec l'identité hyperbolique $\mathrm{ch}^2-\mathrm{sh}^2 = 1$ au lieu de $\cos^2+\sin^2 = 1$.

Le changement de signe dans l'identité se répercute dans le résultat.

#solution
$$
\mathrm{th}' = \left(\frac{\mathrm{sh}}{\mathrm{ch}}\right)' = \frac{\mathrm{ch}^2-\mathrm{sh}^2}{\mathrm{ch}^2} = \frac{1}{\mathrm{ch}^2}
$$

et en découpant autrement la même fraction :

$$
\frac{\mathrm{ch}^2-\mathrm{sh}^2}{\mathrm{ch}^2} = 1-\mathrm{th}^2
$$

$$
\boxed{\mathrm{th}' = 1-\mathrm{th}^2 = \frac{1}{\mathrm{ch}^2}}
$$

**Le contraste avec la tangente circulaire**, à retenir ensemble :

$$
\tan' = 1+\tan^2 \qquad \mathrm{th}' = 1-\mathrm{th}^2
$$

La proposition **a** est exactement l'erreur de transposition.

**Le contrôle de bon sens** : $\mathrm{th}$ est strictement croissante et **bornée** entre $-1$ et $1$. Sa dérivée doit donc être positive et tendre vers $0$ à l'infini — ce que fait $1-\mathrm{th}^2$, et pas $1+\mathrm{th}^2$ qui reste supérieure à $1$.
::

::qcm-question{label="18." bonne="b" cours="qcm-der-arc"}
La dérivée de $x\mapsto\mathrm{argsh}(3x)$ est :

#a
$\dfrac{3}{\sqrt{1-9x^2}}$

#b
$\dfrac{3}{\sqrt{9x^2+1}}$

#c
$\dfrac{1}{\sqrt{9x^2+1}}$

#d
$\dfrac{3}{\sqrt{3x^2+1}}$

#indice
$\left(\mathrm{argsh}\,u\right)' = \dfrac{u'}{\sqrt{u^2+1}}$. Attention à deux choses : le **$+1$** sous la racine (côté hyperbolique, pas $1-u^2$), et le carré qui porte sur $3x$ tout entier.

#solution
Avec $u = 3x$ et $u' = 3$ :

$$
\left(\mathrm{argsh}(3x)\right)' = \frac{3}{\sqrt{(3x)^2+1}} = \frac{3}{\sqrt{9x^2+1}}
$$

**Les trois distracteurs :** **a** met $1-u^2$ (la forme circulaire d'$\arcsin$), **c** oublie $u'$, **d** ne met pas $3$ au carré.

⚠️ **Le repère qui départage circulaire et hyperbolique** :

$$
\arcsin' = \frac{1}{\sqrt{1-x^2}} \qquad \mathrm{argsh}' = \frac{1}{\sqrt{x^2+1}}
$$

Les circulaires ont $1-x^2$ — d'où leur domaine borné $]-1\,;1[$ — les hyperboliques ont $x^2+1$, défini partout.
::

::qcm-question{label="19." bonne="c" cours="qcm-der-produit"}
La dérivée de $x\mapsto x\arctan x$ est :

#a
$\arctan x$

#b
$\dfrac{1}{1+x^2}$

#c
$\arctan x+\dfrac{x}{1+x^2}$

#d
$\arctan x+\dfrac{1}{1+x^2}$

#indice
Produit, avec $u = x$ et $v = \arctan x$. Le second terme est $u\times v'$ : il faut donc **garder le $x$** en facteur devant la dérivée d'arctan.

#solution
Avec $u = x$, $u' = 1$, $v = \arctan x$, $v' = \dfrac{1}{1+x^2}$ :

$$
(x\arctan x)' = 1\times\arctan x+x\times\frac{1}{1+x^2} = \arctan x+\frac{x}{1+x^2}
$$

**La proposition d est le piège** : elle oublie de multiplier $v'$ par $u = x$. C'est l'erreur la plus fréquente sur les produits où l'un des facteurs est $x$ — on écrit la dérivée du second sans la multiplier par le premier.

Les propositions **a** et **b** ne gardent qu'un seul des deux termes.

**Le contrôle en $x = 0$** : la formule donne $\arctan 0+0 = 0$. Or près de $0$, $x\arctan x\approx x^2$, de dérivée $2x$, nulle en $0$. ✓
::

::qcm-question{label="20." bonne="b" cours="qcm-der-composees"}
La dérivée de $x\mapsto\sin\left(x^2\right)$ est :

#a
$\cos\left(x^2\right)$

#b
$2x\cos\left(x^2\right)$

#c
$2x\sin\left(x^2\right)$

#d
$\cos\left(2x\right)$

#indice
Ne pas confondre avec la question 4 : ici l'exposant est **à l'intérieur** du sinus, c'est donc $u = x^2$ et non $u = \sin x$.

$\left(\sin u\right)' = u'\cos u$.

#solution
Avec $u = x^2$ et $u' = 2x$ :

$$
\left(\sin\left(x^2\right)\right)' = 2x\cos\left(x^2\right)
$$

⚠️ **La distinction à faire entre les deux notations**, et c'est exactement ce qui sépare cette question de la quatrième :

$$
\left(\sin^3x\right)' = 3\cos x\sin^2x \qquad\text{mais}\qquad \left(\sin\left(x^2\right)\right)' = 2x\cos\left(x^2\right)
$$

Dans le premier cas l'exposant porte sur **le sinus tout entier** — c'est une puissance de fonction. Dans le second il porte sur **l'argument** — c'est une composée ordinaire.

Le distracteur **d** simplifie l'intérieur comme s'il était linéaire, ce qui n'a aucun sens : $\cos\left(x^2\right)$ ne devient jamais $\cos(2x)$.
::

:::

## Les rappels de cours de ce QCM

Ces tiroirs s'ouvrent depuis le bouton **Cours** des questions ratées.

::extrait-cours{id="qcm-der-trigo" titre="Les dérivées trigonométriques" source="/cours/a1/remise-a-niveau-maths/trigonometrie/cours#_10-dérivées"}
$$
\sin' = \cos \qquad \cos' = -\sin \qquad \tan' = 1+\tan^2 = \frac{1}{\cos^2}
$$

⚠️ **Une seule des deux premières lignes porte un signe moins** : celle du cosinus. Le sinus se dérive en cosinus sans rien changer d'autre.

**Sous forme composée**, la dérivée de l'intérieur sort en facteur :

$$
\left(\sin u\right)' = u'\cos u \qquad \left(\cos u\right)' = -u'\sin u \qquad \left(\tan u\right)' = \frac{u'}{\cos^2u}
$$

**Les deux erreurs qui coûtent le plus cher, et qui se cumulent :**

1. **oublier le signe moins** du cosinus ;
2. **oublier de dériver l'intérieur** — $\left(\cos(3x)\right)' = -3\sin(3x)$, et non $-\sin(3x)$.

**La vérification en deux temps**, à faire sur chaque réponse :

- la fonction a-t-elle changé ? ($\cos\to\sin$, $\sin\to\cos$)
- le facteur $u'$ et le signe sont-ils tous les deux là ?

**Pour la tangente**, les deux écritures sont équivalentes et il faut savoir passer de l'une à l'autre selon la forme des propositions. Comme $1+\tan^2 \geqslant 1$, la dérivée est toujours **positive** : la tangente est strictement croissante sur chacun de ses intervalles.

⚠️ Tout ceci **suppose les angles en radians**.
::

::extrait-cours{id="qcm-der-composees" titre="Les formes composées : une seule idée" source="/cours/a1/remise-a-niveau-maths/fonctions-variable-reelle/cours#_5-les-formes-composées"}
**La dérivée de l'intérieur sort en facteur.** Sept écritures, un seul mécanisme :

$$
\left(u^n\right)' = n\,u'\,u^{n-1} \qquad \left(\sqrt u\right)' = \frac{u'}{2\sqrt u} \qquad \left(\frac1u\right)' = -\frac{u'}{u^2}
$$

$$
\left(e^u\right)' = u'\,e^u \qquad \left(\ln u\right)' = \frac{u'}{u} \qquad \left(\sin u\right)' = u'\cos u \qquad \left(\cos u\right)' = -u'\sin u
$$

⚠️ **L'oubli de $u'$ est l'erreur numéro un.** Le réflexe : après avoir écrit la formule, se demander « ai-je dérivé l'intérieur ? ».

**Trois repères de contrôle qui éliminent des réponses sans calcul :**

- dériver un **logarithme le fait disparaître** — toute réponse contenant encore un $\ln$ est fausse ;
- dériver une **exponentielle la laisse identique**, exposant compris — seul un facteur apparaît devant ;
- le **$2$ du dénominateur** de $\sqrt u$ ne se simplifie que si $u'$ contient un facteur $2$.

⚠️ **Deux notations à ne jamais confondre :**

$$
\sin^3x = \left(\sin x\right)^3 \quad\text{(puissance de fonction)} \qquad \sin\left(x^3\right) \quad\text{(composée ordinaire)}
$$

La première se dérive avec $\left(u^n\right)'$ et $u = \sin x$ ; la seconde avec $\left(\sin u\right)'$ et $u = x^3$. Les résultats n'ont rien à voir.

**Quand deux composées sont empilées**, on dérive de l'extérieur vers l'intérieur, un étage à la fois, en gardant chaque facteur.
::

::extrait-cours{id="qcm-der-produit" titre="Produit et quotient" source="/cours/a1/remise-a-niveau-maths/fonctions-variable-reelle/cours#_4-le-tableau-des-dérivées-usuelles"}
$$
(uv)' = u'v+uv' \qquad \left(\frac{u}{v}\right)' = \frac{u'v-uv'}{v^2}
$$

⚠️ **Le produit a un plus, le quotient un moins**, et dans le quotient **l'ordre compte** : $u'v$ en premier. Écrire $uv'-u'v$ donne l'opposé.

**Le moyen de ne jamais les confondre** : le produit est symétrique en $u$ et $v$, sa formule doit l'être aussi — d'où le $+$.

⚠️ **L'erreur spécifique aux produits contenant $x$** : dans $x\arctan x$, le second terme est $x\times\arctan'x$, pas $\arctan'x$ tout seul. On oublie souvent de multiplier par le premier facteur.

**Attention aussi au signe qui vient de la fonction, pas de la formule.** Dans $(x\cos x)' = \cos x-x\sin x$, le moins ne vient pas de la règle du produit — qui porte un plus — mais de $\cos' = -\sin$.

**La méthode, à chaque fois** : poser $u$ et $v$, calculer $u'$ et $v'$ **à part**, puis remplacer. Écrire la formule de tête est la meilleure façon de perdre un signe.

**Le contrôle en un point**, souvent instantané : évaluer la dérivée obtenue en $x = 0$ et comparer au comportement local de la fonction.
::

::extrait-cours{id="qcm-der-arc" titre="Les dérivées des fonctions réciproques" source="/cours/a1/remise-a-niveau-maths/fonctions-usuelles/cours#_6-fonctions-trigonométriques-réciproques"}
| Circulaire | Dérivée | Hyperbolique | Dérivée |
|---|---|---|---|
| $\arcsin$ | $\dfrac{1}{\sqrt{1-x^2}}$ | $\mathrm{argsh}$ | $\dfrac{1}{\sqrt{x^2+1}}$ |
| $\arccos$ | $\dfrac{-1}{\sqrt{1-x^2}}$ | $\mathrm{argch}$ | $\dfrac{1}{\sqrt{x^2-1}}$ |
| $\arctan$ | $\dfrac{1}{1+x^2}$ | $\mathrm{argth}$ | $\dfrac{1}{1-x^2}$ |

**Le repère qui départage les deux colonnes** : les **circulaires** ont $1-x^2$, d'où leur domaine borné $]-1\,;1[$ ; les **hyperboliques** ont $x^2\pm 1$. Les deux « tangentes » sont les seules sans racine.

**Sous forme composée**, comme toujours, $u'$ sort en facteur et $u$ remplace $x$ **partout** :

$$
\left(\arctan u\right)' = \frac{u'}{1+u^2} \qquad \left(\arcsin u\right)' = \frac{u'}{\sqrt{1-u^2}} \qquad \left(\mathrm{argsh}\,u\right)' = \frac{u'}{\sqrt{u^2+1}}
$$

⚠️ **Deux substitutions, pas une** : $u'$ au numérateur **et** $u^2$ au dénominateur. Pour $\arctan(2x)$, cela donne $\dfrac{2}{1+4x^2}$ — le carré porte sur $2x$ tout entier.

⚠️ Et $1+u^2$ n'est pas $(1+u)^2$.

**Deux repères pour les signes :** $\arcsin$ et $\arccos$ ont des dérivées **opposées**, leur somme valant la constante $\dfrac\pi2$ ; le signe moins va avec $\arccos$, qui est décroissante.
::

::extrait-cours{id="qcm-der-hyper" titre="Les dérivées hyperboliques" source="/cours/a1/remise-a-niveau-maths/fonctions-usuelles/cours#_7-fonctions-hyperboliques"}
$$
\mathrm{ch}' = \mathrm{sh} \qquad \mathrm{sh}' = \mathrm{ch} \qquad \mathrm{th}' = 1-\mathrm{th}^2 = \frac{1}{\mathrm{ch}^2}
$$

⚠️ **Aucun signe moins dans les deux premières.** C'est la différence à retenir absolument avec la trigonométrie circulaire.

**Le tableau des contrastes**, à mémoriser d'un bloc plutôt que ligne par ligne :

| Circulaire | Hyperbolique |
|---|---|
| $\cos^2+\sin^2 = 1$ | $\mathrm{ch}^2-\mathrm{sh}^2 = 1$ |
| $\cos' = -\sin$ | $\mathrm{ch}' = +\mathrm{sh}$ |
| $\tan' = 1+\tan^2$ | $\mathrm{th}' = 1-\mathrm{th}^2$ |
| $\left(\cos^2\right)' = -2\sin\cos$ | $\left(\mathrm{ch}^2\right)' = +2\,\mathrm{sh}\,\mathrm{ch}$ |

**La règle qui résume tout** : le signe moins existe des deux côtés, mais il **change de place**. Côté circulaire il est dans les **dérivées** ; côté hyperbolique il est dans l'**identité**.

**Deux contrôles de bon sens :**

- $\mathrm{ch}$ est une chaînette, minimale en $0$ : sa dérivée doit s'annuler en $0$ et être positive ensuite — c'est $\mathrm{sh}$, pas $-\mathrm{sh}$ ;
- $\mathrm{th}$ est croissante et **bornée** entre $-1$ et $1$ : sa dérivée doit être positive et tendre vers $0$ — c'est $1-\mathrm{th}^2$, pas $1+\mathrm{th}^2$.
::
