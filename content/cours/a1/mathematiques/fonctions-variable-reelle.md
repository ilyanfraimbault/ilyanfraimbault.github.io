---
title: Fonctions d'une variable réelle
description: Dérivées des fonctions usuelles, sommes, produits, quotients, inverses et formes composées. Six exercices et 53 dérivées, avec indices et solutions détaillées.
interactif: true
annee: A1
matiere: Mathématiques
ordre: 1
icone: i-lucide-trending-up
---

::rappel{titre="La boîte à outils du cours"}
**Dérivées des fonctions élémentaires (section 4)** :

| $f$ | $f'$ |
|---|---|
| $x^\alpha$ (tout $\alpha$) | $\alpha x^{\alpha-1}$ |
| $\ln(x)$ | $\dfrac{1}{x}$ |
| $e^x$ | $e^x$ |
| $\sin(x)$ | $\cos(x)$ |
| $\cos(x)$ | $-\sin(x)$ |

La ligne $x^\alpha$ couvre tous les cas usuels : $x' = 1$, $(x^2)' = 2x$, et surtout $\sqrt{x} = x^{1/2}$ donc $(\sqrt{x})' = \dfrac{1}{2\sqrt{x}}$, et $\dfrac{1}{x} = x^{-1}$ donc $\left(\dfrac{1}{x}\right)' = -\dfrac{1}{x^2}$.

**Formes composées** :

- **Prop 3.2** (composée) : $(u\circ v)'(x) = v'(x)\times u'(v(x))$
- **Prop 3.3** (puissance) : $(u^n)' = n\,u'\,u^{n-1}$
- **Prop 3.4** (racine) : $(\sqrt{u})' = \dfrac{u'}{2\sqrt{u}}$
- **Prop 3.5** (inverse) : $\left(\dfrac{1}{u}\right)' = -\dfrac{u'}{u^2}$
- **Tableau section 5** : $(e^u)' = u'e^u$, $(\ln u)' = \dfrac{u'}{u}$, $(\sin u)' = u'\cos u$, $(\cos u)' = -u'\sin u$, et en particulier $\big(\cos(ax+b)\big)' = -a\sin(ax+b)$.

**Opérations** : $(u+v)' = u'+v'$, $(k\,u)' = k\,u'$, $(uv)' = u'v+uv'$, $\left(\dfrac{u}{v}\right)' = \dfrac{u'v-uv'}{v^2}$.

**La démarche, toujours la même, en 3 étapes** :

1. **Reconnaître la structure** de $f$ : somme ? produit $uv$ ? quotient $\dfrac{u}{v}$ ? forme composée ($\dfrac{1}{u}$, $\sqrt{u}$, $u^n$, $e^u$, $\ln u$…) ? *Et avant tout : l'écriture se simplifie-t-elle ?*
2. **Poser les briques** : écrire $u$ (et $v$), calculer $u'$ (et $v'$).
3. **Appliquer la formule**, puis **simplifier** : développer, mettre au même dénominateur, factoriser.
::

:::exercice{titre="Exercice 1" theme="Sommes de fonctions élémentaires"}
Déterminer la fonction dérivée des fonctions suivantes. Ce sont des sommes : on dérive **terme à terme**, chaque terme se lisant directement dans le tableau de la section 4.

::question{label="1."}
$f(x) = 2x+1$

#indice
La dérivation est linéaire : la dérivée d'une somme est la somme des dérivées. Et souviens-toi qu'une constante ne varie pas… donc sa dérivée est nulle.

#solution
Dérivation terme à terme : $(2x)' = 2$ et $(1)' = 0$, puisque la dérivée d'une constante est nulle.

$$\boxed{f'(x) = 2}$$

C'est cohérent : le graphe de $f$ est une droite de coefficient directeur $2$, et la pente d'une droite est la même en tout point.
::

::question{label="2."}
$f(x) = x^2-3x$

#indice
Deux termes, deux applications de la règle $(x^\alpha)' = \alpha x^{\alpha-1}$. Le facteur $-3$ sort de la dérivée : $(k\,u)' = k\,u'$.

#solution
Terme à terme, avec $(x^2)' = 2x$ et $(-3x)' = -3\times(x)' = -3$ :

$$\boxed{f'(x) = 2x-3}$$
::

::question{label="3."}
$f(x) = \sqrt{x}+\dfrac{1}{x}$

#indice
Les deux termes figurent tels quels dans le tableau des dérivées usuelles. Si tu ne les as pas mémorisés, réécris-les en puissances : $\sqrt{x} = x^{1/2}$ et $\dfrac{1}{x} = x^{-1}$, puis applique $(x^\alpha)' = \alpha x^{\alpha-1}$.

#solution
Deux fonctions élémentaires du tableau :

$$(\sqrt{x})' = \frac{1}{2\sqrt{x}} \qquad\text{et}\qquad \left(\frac{1}{x}\right)' = -\frac{1}{x^2}$$

D'où, en sommant :

$$\boxed{f'(x) = \frac{1}{2\sqrt{x}}-\frac{1}{x^2}}$$

Le signe moins du second terme n'est pas une erreur de recopie : il vient de l'exposant $-1$ de $x^{-1}$.
::

::question{label="4."}
$f(x) = x^4+x^3+x^2$

#indice
Trois monômes, trois fois la même règle. À chaque fois, l'exposant descend en facteur et diminue de $1$.

#solution
Trois applications de $(x^\alpha)' = \alpha x^{\alpha-1}$ :

$$(x^4)' = 4x^3, \qquad (x^3)' = 3x^2, \qquad (x^2)' = 2x$$

$$\boxed{f'(x) = 4x^3+3x^2+2x}$$
::

::question{label="5."}
$f(x) = \dfrac{5}{x}+3\sqrt{x}$

#indice
Ne te laisse pas impressionner par les coefficients : ce sont des constantes multiplicatives, elles sortent de la dérivée sans rien changer. Écris $\dfrac{5}{x} = 5\times\dfrac{1}{x}$ et $3\sqrt{x} = 3\times\sqrt{x}$, puis dérive chaque fonction de base. Le piège est d'oublier le $\dfrac{1}{2}$ qui figure dans la dérivée de la racine.

#solution
Les constantes multiplicatives « sortent » de la dérivée :

$$\left(\frac{5}{x}\right)' = 5\times\left(-\frac{1}{x^2}\right) = -\frac{5}{x^2}, \qquad (3\sqrt{x})' = 3\times\frac{1}{2\sqrt{x}} = \frac{3}{2\sqrt{x}}$$

$$\boxed{f'(x) = -\frac{5}{x^2}+\frac{3}{2\sqrt{x}}}$$

*⚠️ La correction officielle imprime $\dfrac{3}{\sqrt{x}}$ pour le second terme : le facteur $\dfrac{1}{2}$ de $(\sqrt{x})' = \dfrac{1}{2\sqrt{x}}$ a été perdu — c'est bien $\dfrac{3}{2\sqrt{x}}$.*
::

::question{label="6."}
$f(x) = -\dfrac{2}{x}+\dfrac{2}{\sqrt{x}}$

#indice
Le second terme n'est pas dans le tableau tel quel : une racine **au dénominateur**. Réécris-le en puissance, $\dfrac{1}{\sqrt{x}} = x^{-1/2}$, et la règle $(x^\alpha)' = \alpha x^{\alpha-1}$ redevient applicable. Surveille les signes : il y en a un dans l'énoncé, et un autre qui apparaîtra au cours du calcul.

#solution
**Premier terme** : $-\dfrac{2}{x} = -2\times\dfrac{1}{x}$, de dérivée

$$-2\times\left(-\frac{1}{x^2}\right) = \frac{2}{x^2}$$

Les deux signes moins se compensent, ce terme est donc positif.

**Second terme** : on l'écrit en puissance, $\dfrac{2}{\sqrt{x}} = 2x^{-1/2}$, donc sa dérivée vaut

$$2\times\left(-\frac{1}{2}\right)x^{-3/2} = -x^{-3/2} = -\frac{1}{x\sqrt{x}}$$

car $x^{3/2} = x\times x^{1/2} = x\sqrt{x}$.

$$\boxed{f'(x) = \frac{2}{x^2}-\frac{1}{x\sqrt{x}}}$$
::
:::

:::exercice{titre="Exercice 2" theme="Produits et simplification préalable"}
Déterminer la fonction dérivée des fonctions suivantes. Réflexe numéro un : **regarder si l'écriture se simplifie** avant de dériver. Sinon, on pose $u$ et $v$, et on applique $(uv)' = u'v+uv'$.

::question{label="1."}
$f(x) = x(x-2)$

#indice
Deux chemins mènent au résultat : appliquer la formule du produit, ou développer d'abord pour retomber sur une simple somme de monômes. Essaie les deux et vérifie qu'ils donnent la même chose — c'est un bon test de ta maîtrise de la formule.

#solution
Produit avec $u = x$, $u' = 1$ et $v = x-2$, $v' = 1$ :

$$f'(x) = u'v+uv' = 1\times(x-2)+x\times 1 = x-2+x$$

$$\boxed{f'(x) = 2x-2}$$

*Vérification par l'autre chemin* : en développant, $f(x) = x^2-2x$, dont la dérivée est bien $2x-2$.
::

::question{label="2."}
$f(x) = (2x^2-3)(x+1)$

#indice
C'est un produit de deux polynômes : pose $u = 2x^2-3$ et $v = x+1$. Applique $(uv)' = u'v+uv'$ en veillant à ne pas intervertir $u'$ et $v'$, puis développe pour présenter un polynôme rangé par degrés décroissants.

#solution
$u = 2x^2-3$, $u' = 4x$ ; $v = x+1$, $v' = 1$. La formule du produit donne :

$$f'(x) = u'v+uv' = 4x(x+1)+(2x^2-3)\times 1$$

On développe :

$$f'(x) = 4x^2+4x+2x^2-3$$

$$\boxed{f'(x) = 6x^2+4x-3}$$
::

::question{label="3."}
$f(x) = \sqrt{x}\times\dfrac{1}{x}$

#indice
Avant de sortir la formule du produit, regarde ce que vaut réellement cette expression : $\dfrac{\sqrt{x}}{x}$ se simplifie ! Écris tout en puissances de $x$ et additionne les exposants — il ne restera qu'une seule fonction élémentaire à dériver.

#solution
**On simplifie avant de dériver.** En écrivant tout en puissances :

$$f(x) = \sqrt{x}\times\frac{1}{x} = \frac{\sqrt{x}}{x} = \frac{1}{\sqrt{x}} = x^{-1/2}$$

Il ne reste plus qu'une règle à appliquer :

$$f'(x) = -\frac{1}{2}x^{-3/2}$$

$$\boxed{f'(x) = -\frac{1}{2x\sqrt{x}}}$$

*La correction officielle applique directement la formule du produit : $f'(x) = \dfrac{1}{2\sqrt{x}}\times\dfrac{1}{x}-\dfrac{\sqrt{x}}{x^2}$ — c'est le même résultat, car $\dfrac{1}{2x\sqrt{x}}-\dfrac{1}{x\sqrt{x}} = -\dfrac{1}{2x\sqrt{x}}$.*
::

::question{label="4."}
$f(x) = (2x+1)\sqrt{x}$

#indice
Ici la simplification n'aide pas : c'est un vrai produit, avec un facteur polynomial et un facteur racine. Après application de la formule, tu obtiendras une somme dont un terme est une fraction : mets tout au même dénominateur $2\sqrt{x}$, en te servant de l'identité $\sqrt{x}\times\sqrt{x} = x$.

#solution
$u = 2x+1$, $u' = 2$ ; $v = \sqrt{x}$, $v' = \dfrac{1}{2\sqrt{x}}$. Alors :

$$f'(x) = u'v+uv' = 2\sqrt{x}+\frac{2x+1}{2\sqrt{x}}$$

On met tout au même dénominateur $2\sqrt{x}$. L'astuce est de remarquer que

$$2\sqrt{x} = \frac{2\sqrt{x}\times 2\sqrt{x}}{2\sqrt{x}} = \frac{4x}{2\sqrt{x}}$$

puisque $\sqrt{x}\times\sqrt{x} = x$. D'où :

$$f'(x) = \frac{4x+2x+1}{2\sqrt{x}}$$

$$\boxed{f'(x) = \frac{6x+1}{2\sqrt{x}}}$$
::

::question{label="5."}
$f(x) = (x^2-3x-1)^2$

#indice
Un carré, ce n'est jamais qu'une puissance $u^n$ : la Prop 3.3 s'applique directement, avec $n = 2$. Tu pourrais aussi développer, mais tu obtiendrais un polynôme de degré $4$ à dériver — le détour est nettement plus long.

#solution
C'est une **puissance** $u^n$ : on applique la **Prop 3.3**, $(u^n)' = n\,u'\,u^{n-1}$, avec $n = 2$, $u = x^2-3x-1$ et $u' = 2x-3$ :

$$f'(x) = 2\,u'\,u^{1} = 2(2x-3)(x^2-3x-1)$$

$$\boxed{f'(x) = 2(2x-3)(x^2-3x-1)}$$

*Pourquoi ne pas développer le carré ? On pourrait, mais la Prop 3.3 est plus rapide et donne un résultat déjà factorisé — bien pratique pour étudier ensuite le signe de $f'$.*
::

::question{label="6."}
$f(x) = (x^2+1)\times\dfrac{1}{x}$

#indice
Comme à la question **3.**, commence par simplifier. Multiplier par $\dfrac{1}{x}$ revient à diviser par $x$ : sépare alors la fraction en deux morceaux, et tu retomberas sur une somme de fonctions déjà croisées à l'exercice 1.

#solution
**On simplifie avant de dériver.** Multiplier par $\dfrac{1}{x}$ revient à diviser par $x$, puis on scinde la fraction :

$$f(x) = \frac{x^2+1}{x} = \frac{x^2}{x}+\frac{1}{x} = x+\frac{1}{x}$$

C'est maintenant une simple somme, avec $(x)' = 1$ et $\left(\dfrac{1}{x}\right)' = -\dfrac{1}{x^2}$ :

$$\boxed{f'(x) = 1-\frac{1}{x^2}}$$
::
:::

:::exercice{titre="Exercice 3" theme="Inverses et la proposition 3.5"}
Déterminer la fonction dérivée des fonctions suivantes. Elles sont toutes de la forme $\dfrac{k}{u} = k\times\dfrac{1}{u}$ : la **Prop 3.5** donne $\left(\dfrac{1}{u}\right)' = -\dfrac{u'}{u^2}$, donc $\left(\dfrac{k}{u}\right)' = -\dfrac{k\,u'}{u^2}$. À chaque fois : poser $u$, calculer $u'$, appliquer — en surveillant les signes.

::question{label="1."}
$f(x) = \dfrac{1}{x^2+1}$

#indice
Le numérateur est constant : inutile de sortir la formule du quotient, la Prop 3.5 suffit et va plus vite. Pose $u$ égal au dénominateur, calcule $u'$, et n'oublie ni le signe moins ni le carré au dénominateur.

#solution
Forme $\dfrac{1}{u}$ avec $u = x^2+1$ et $u' = 2x$. La **Prop 3.5** donne :

$$f'(x) = -\frac{u'}{u^2} = -\frac{2x}{(x^2+1)^2}$$

$$\boxed{f'(x) = -\frac{2x}{(x^2+1)^2}}$$

Remarque : $u = x^2+1$ ne s'annule jamais, $f$ est donc dérivable sur $\mathbb{R}$ tout entier.
::

::question{label="2."}
$f(x) = \dfrac{1}{\sqrt{x}+1}$

#indice
Attention à la lecture de l'énoncé : la racine ne porte que sur $x$, le dénominateur est bien $\sqrt{x}+1$. C'est encore une forme $\dfrac{1}{u}$, mais cette fois $u'$ demande la dérivée de la racine. Pense aussi à te demander sur quel intervalle tout cela a un sens.

#solution
Forme $\dfrac{1}{u}$ avec $u = \sqrt{x}+1$ (la racine ne porte que sur $x$). La dérivée du $1$ est nulle, donc

$$u' = \frac{1}{2\sqrt{x}} \qquad \text{sur } ]0,+\infty[$$

La **Prop 3.5** donne alors :

$$f'(x) = -\frac{u'}{u^2} = -\frac{\dfrac{1}{2\sqrt{x}}}{(\sqrt{x}+1)^2}$$

Une fraction au numérateur d'une fraction : on la « descend » au dénominateur.

$$\boxed{f'(x) = -\frac{1}{2\sqrt{x}\,(\sqrt{x}+1)^2}}$$
::

::question{label="3."}
$f(x) = \dfrac{3}{2x^2+1}$

#indice
Le numérateur $3$ est une constante multiplicative : elle traverse la dérivation sans être modifiée. Autrement dit, dérive $\dfrac{1}{2x^2+1}$ et multiplie le tout par $3$.

#solution
Forme $\dfrac{k}{u}$ avec $k = 3$, $u = 2x^2+1$ et $u' = 4x$ :

$$f'(x) = -\frac{k\,u'}{u^2} = -\frac{3\times 4x}{(2x^2+1)^2}$$

$$\boxed{f'(x) = -\frac{12x}{(2x^2+1)^2}}$$
::

::question{label="4."}
$f(x) = -\dfrac{3}{x-6}$

#indice
Ici $k = -3$ : le signe moins de l'énoncé fait partie de la constante. Combiné au signe moins de la Prop 3.5, cela va donner un résultat… positif. Prends le temps de poser le calcul plutôt que de deviner le signe final.

#solution
Forme $\dfrac{k}{u}$ avec $k = -3$, $u = x-6$ et $u' = 1$ :

$$f'(x) = -\frac{k\,u'}{u^2} = -\frac{(-3)\times 1}{(x-6)^2}$$

Les deux signes moins se compensent :

$$\boxed{f'(x) = \frac{3}{(x-6)^2}}$$
::

::question{label="5."}
$f(x) = -\dfrac{2}{x^2+x+1}$

#indice
Même mécanique qu'à la question précédente, avec cette fois $u' $ non constant. Deux signes moins vont se rencontrer : lequel survit ? Écris la formule complète avant de simplifier, c'est le meilleur moyen de ne pas se tromper.

#solution
Forme $\dfrac{k}{u}$ avec $k = -2$, $u = x^2+x+1$ et $u' = 2x+1$ :

$$f'(x) = -\frac{k\,u'}{u^2} = -\frac{(-2)(2x+1)}{(x^2+x+1)^2}$$

Les deux signes moins se compensent :

$$\boxed{f'(x) = \frac{2(2x+1)}{(x^2+x+1)^2}}$$
::

::question{label="6."}
$f(x) = \dfrac{1}{3-5x}$

#indice
Cette fois, c'est $u'$ qui est négatif — le $x$ est précédé d'un $-5$. Encore une rencontre de deux signes moins dans la formule de la Prop 3.5. Et note que le dénominateur, étant élevé au carré, reste positif quel que soit $x$.

#solution
Forme $\dfrac{1}{u}$ avec $u = 3-5x$ et $u' = -5$ :

$$f'(x) = -\frac{u'}{u^2} = -\frac{-5}{(3-5x)^2}$$

Les deux signes moins se compensent :

$$\boxed{f'(x) = \frac{5}{(3-5x)^2}}$$

Le dénominateur étant un carré, $f'$ est strictement positive : $f$ est croissante sur chacun des deux intervalles de son domaine.
::
:::

:::exercice{titre="Exercice 4" theme="Quotients"}
Déterminer la fonction dérivée des fonctions suivantes. Le numérateur n'est plus constant : il faut la formule du quotient $\left(\dfrac{u}{v}\right)' = \dfrac{u'v-uv'}{v^2}$. Démarche systématique : poser $u$ et $v$, calculer $u'$ et $v'$, écrire le numérateur **sans se tromper d'ordre**, puis développer et simplifier — le dénominateur $v^2$, lui, reste tel quel.

::question{label="1."}
$f(x) = \dfrac{x-1}{x+2}$

#indice
Le numérateur $u'v-uv'$ n'est **pas** symétrique : l'ordre des deux termes compte, et une inversion donnerait le résultat opposé. Attention aussi au signe moins qui se distribue sur toute la parenthèse $uv'$.

#solution
$u = x-1$, $u' = 1$ ; $v = x+2$, $v' = 1$.

Numérateur de la formule :

$$u'v-uv' = 1\times(x+2)-(x-1)\times 1 = x+2-x+1 = 3$$

Le signe moins s'applique bien à **tout** le second terme, d'où le $+1$ et non $-1$. Les $x$ se simplifient et il reste une constante.

$$\boxed{f'(x) = \frac{3}{(x+2)^2}}$$
::

::question{label="2."}
$f(x) = \dfrac{\sqrt{x}}{x^2+1}$

#indice
Formule du quotient classique, mais $u' = \dfrac{1}{2\sqrt{x}}$ est lui-même une fraction : le numérateur obtenu sera donc une différence à mettre au même dénominateur $2\sqrt{x}$. Au final tu auras une fraction de fraction — pense à la « descendre » proprement.

#solution
$u = \sqrt{x}$, $u' = \dfrac{1}{2\sqrt{x}}$ ; $v = x^2+1$, $v' = 2x$.

Numérateur de la formule :

$$u'v-uv' = \frac{x^2+1}{2\sqrt{x}}-\sqrt{x}\times 2x$$

On met au même dénominateur $2\sqrt{x}$, en utilisant $\sqrt{x}\times 2x\times 2\sqrt{x} = 4x^2$ :

$$\frac{x^2+1-4x^2}{2\sqrt{x}} = \frac{1-3x^2}{2\sqrt{x}}$$

Il reste à diviser par $v^2 = (x^2+1)^2$ :

$$\boxed{f'(x) = \frac{1-3x^2}{2\sqrt{x}\,(x^2+1)^2}}$$
::

::question{label="3."}
$f(x) = \dfrac{x^2}{x-1}$

#indice
Applique la formule, développe le numérateur puis regroupe. Le résultat se factorise joliment : cherche le facteur commun, cela rendra l'étude du signe de $f'$ immédiate.

#solution
$u = x^2$, $u' = 2x$ ; $v = x-1$, $v' = 1$.

Numérateur de la formule :

$$u'v-uv' = 2x(x-1)-x^2\times 1 = 2x^2-2x-x^2 = x^2-2x$$

On factorise par $x$ :

$$x^2-2x = x(x-2)$$

$$\boxed{f'(x) = \frac{x(x-2)}{(x-1)^2}}$$

Sous cette forme factorisée, on lit immédiatement que $f'$ s'annule en $0$ et en $2$.
::

::question{label="4."}
$f(x) = \dfrac{2x-3}{1-x}$

#indice
Le piège est au dénominateur : la dérivée de $1-x$ n'est pas $1$. Une fois ce signe correctement pris en compte, tout se simplifie et il ne reste qu'une constante au numérateur — négative.

#solution
$u = 2x-3$, $u' = 2$ ; $v = 1-x$, $v' = -1$ — attention au signe, c'est le point délicat.

Numérateur de la formule :

$$u'v-uv' = 2(1-x)-(2x-3)\times(-1) = 2-2x+2x-3 = -1$$

$$\boxed{f'(x) = -\frac{1}{(1-x)^2}}$$
::

::question{label="5."}
$f(x) = \dfrac{x^2+x+1}{x^2+1}$

#indice
Les deux dérivées $u'$ et $v'$ se ressemblent beaucoup, mais elles ne sont pas égales : recopie soigneusement $u' = 2x+1$, le $+1$ n'est pas décoratif. Développe ensuite chaque produit à part avant de faire la différence, les termes de degré $3$ doivent disparaître.

#solution
$u = x^2+x+1$, $u' = 2x+1$ ; $v = x^2+1$, $v' = 2x$.

Numérateur de la formule :

$$u'v-uv' = (2x+1)(x^2+1)-(x^2+x+1)(2x)$$

On développe chaque morceau séparément :

$$(2x+1)(x^2+1) = 2x^3+2x+x^2+1 \qquad\text{et}\qquad (x^2+x+1)(2x) = 2x^3+2x^2+2x$$

Différence, les $2x^3$ et les $2x$ s'éliminant :

$$2x^3+2x+x^2+1-2x^3-2x^2-2x = 1-x^2$$

$$\boxed{f'(x) = \frac{1-x^2}{(x^2+1)^2}}$$

*⚠️ La correction officielle écrit au numérateur $2x(x^2+1)-2x(x^2+x+1)$ : le $u' = 2x+1$ y est devenu $2x$ (coquille). Avec le bon $u'$, on retrouve bien $1-x^2$.*
::

::question{label="6."}
$f(x) = \dfrac{2x^2+1}{2x^2-1}$

#indice
Ici $u'$ et $v'$ sont identiques. Plutôt que de tout développer, mets ce facteur commun en évidence dès l'écriture du numérateur : la parenthèse restante se réduit alors à une simple constante.

#solution
$u = 2x^2+1$, $u' = 4x$ ; $v = 2x^2-1$, $v' = 4x$.

Numérateur de la formule :

$$u'v-uv' = 4x(2x^2-1)-(2x^2+1)(4x)$$

Les deux termes ont $4x$ en facteur : on **factorise** au lieu de développer.

$$4x\big[(2x^2-1)-(2x^2+1)\big] = 4x\times(-2) = -8x$$

$$\boxed{f'(x) = -\frac{8x}{(2x^2-1)^2}}$$
::
:::

:::exercice{titre="Exercice 5" theme="Ensemble de dérivabilité et dérivée"}
Pour chacune des fonctions suivantes, donner l'ensemble sur lequel elle est dérivable et calculer sa fonction dérivée.

Trois règles suffisent ici : un polynôme est dérivable sur $\mathbb{R}$ ; un quotient est dérivable partout où le **dénominateur ne s'annule pas** ; enfin $\sqrt{x}$ est **définie** sur $[0,+\infty[$ mais **dérivable seulement sur** $]0,+\infty[$.

::question{label="1."}
$f_1(x) = \sqrt{x}$

#indice
Attention au piège classique : l'ensemble de définition et l'ensemble de dérivabilité ne coïncident pas ici. Regarde ce que devient $\dfrac{1}{2\sqrt{x}}$ quand $x$ s'approche de $0$ — que peux-tu en dire de la tangente en ce point ?

#solution
$f_1$ est **définie sur $[0,+\infty[$** mais **dérivable seulement sur $]0,+\infty[$**.

En effet, en $0$ le taux d'accroissement $\dfrac{\sqrt{h}-0}{h} = \dfrac{1}{\sqrt{h}}$ tend vers $+\infty$ : la courbe admet une tangente verticale, il n'y a pas de nombre dérivé.

Sur $]0,+\infty[$ :

$$\boxed{f_1'(x) = \frac{1}{2\sqrt{x}}}$$
::

::question{label="2."}
$f_2(x) = \dfrac{1}{x}$

#indice
Une seule valeur pose problème, celle qui annule le dénominateur. Une fois écartée, la dérivée se lit dans le tableau — ou s'obtient en écrivant la fonction comme une puissance.

#solution
Le dénominateur s'annule en $x = 0$ : $f_2$ est dérivable sur $\mathbb{R}^*$.

En écrivant $f_2(x) = x^{-1}$, la règle $(x^\alpha)' = \alpha x^{\alpha-1}$ donne $-1\times x^{-2}$ :

$$\boxed{f_2'(x) = -\frac{1}{x^2}}$$
::

::question{label="3."}
$f_3(x) = x^2+5x-1$

#indice
Quelle est la nature de cette fonction ? Pour cette famille, la question de l'ensemble de dérivabilité ne se pose même pas : aucun dénominateur, aucune racine.

#solution
$f_3$ est un **polynôme**, donc dérivable sur $\mathbb{R}$.

Dérivation terme à terme : $(x^2)' = 2x$, $(5x)' = 5$, $(-1)' = 0$.

$$\boxed{f_3'(x) = 2x+5}$$
::

::question{label="4."}
$f_4(x) = 3x^3+5x^2-2x+2$

#indice
Même famille qu'à la question précédente : dérivable partout. Il ne reste qu'à appliquer trois fois la règle des puissances, sans oublier que la constante disparaît.

#solution
$f_4$ est un **polynôme**, donc dérivable sur $\mathbb{R}$.

$$(3x^3)' = 9x^2, \qquad (5x^2)' = 10x, \qquad (-2x)' = -2, \qquad (2)' = 0$$

$$\boxed{f_4'(x) = 9x^2+10x-2}$$
::

::question{label="5."}
$f_5(x) = \dfrac{3}{x}$

#indice
C'est la fonction de la question **2.** multipliée par une constante — l'ensemble de dérivabilité est donc le même, et la dérivée aussi, au facteur près.

#solution
Même dénominateur qu'en **2.** : $f_5$ est dérivable sur $\mathbb{R}^*$.

C'est $3\times\dfrac{1}{x}$, donc sa dérivée est $3\times\left(-\dfrac{1}{x^2}\right)$ :

$$\boxed{f_5'(x) = -\frac{3}{x^2}}$$
::

::question{label="6."}
$f_6(x) = (x+3)(x-2)$

#indice
Lis bien l'énoncé : il s'agit d'un **produit**, pas d'un quotient. C'est donc un polynôme déguisé — développe-le, ou applique $(uv)' = u'v+uv'$, les deux voies donnent le même résultat.

#solution
$f_6$ est un **produit de polynômes**, donc un polynôme : dérivable sur $\mathbb{R}$.

Formule du produit avec $u = x+3$, $u' = 1$ et $v = x-2$, $v' = 1$ :

$$f_6'(x) = u'v+uv' = (x-2)+(x+3) = 2x+1$$

$$\boxed{f_6'(x) = 2x+1}$$

*Vérification en développant : $f_6(x) = x^2+x-6$, de dérivée $2x+1$.*

*⚠️ La correction officielle donne $\dfrac{-5}{(x-2)^2}$ : c'est la dérivée du **quotient** $\dfrac{x+3}{x-2}$, pas du produit $(x+3)(x-2)$ (erreur de recopie). Le bon résultat est $2x+1$.*
::

::question{label="7."}
$f_7(x) = (3x+5)(5x^2+1)$

#indice
Encore un produit, à ne pas confondre avec un quotient. Applique $(uv)' = u'v+uv'$, puis développe et regroupe par degrés : tu dois obtenir un polynôme du second degré, sans aucun dénominateur.

#solution
$f_7$ est un **produit de polynômes**, donc dérivable sur $\mathbb{R}$.

$u = 3x+5$, $u' = 3$ ; $v = 5x^2+1$, $v' = 10x$ :

$$f_7'(x) = 3(5x^2+1)+(3x+5)(10x) = 15x^2+3+30x^2+50x$$

$$\boxed{f_7'(x) = 45x^2+50x+3}$$

*⚠️ Même erreur de recopie dans la correction officielle, qui applique la formule du **quotient** $\dfrac{3x+5}{5x^2+1}$ ; pour le produit demandé, le résultat est $45x^2+50x+3$ — signe $+$ entre les deux termes, et pas de dénominateur.*
::

::question{label="8."}
$f_8(x) = \dfrac{x+1}{x-1}$

#indice
Cette fois c'est bien un quotient : commence par chercher la valeur interdite. Pour le calcul, comme $u' = v' = 1$, le numérateur de la formule se réduit très vite — mais fais bien attention au signe moins devant $uv'$.

#solution
Le dénominateur s'annule en $x = 1$ : $f_8$ est dérivable sur $\mathbb{R}\setminus\{1\}$.

$u = x+1$, $u' = 1$ ; $v = x-1$, $v' = 1$. Numérateur de la formule :

$$u'v-uv' = (x-1)-(x+1) = x-1-x-1 = -2$$

$$\boxed{f_8'(x) = -\frac{2}{(x-1)^2}}$$

$f_8'$ est toujours strictement négative : $f_8$ est décroissante sur chacun des deux intervalles.
::

::question{label="9."}
$f_9(x) = \dfrac{3x-4}{5-x}$

#indice
La valeur interdite se lit sur le dénominateur. Et attention : ce dénominateur est de la forme $5-x$, sa dérivée n'est donc pas $1$ — c'est exactement le piège de l'exercice 4, question **4.**

#solution
Le dénominateur s'annule en $x = 5$ : $f_9$ est dérivable sur $\mathbb{R}\setminus\{5\}$.

$u = 3x-4$, $u' = 3$ ; $v = 5-x$, $v' = -1$. Numérateur de la formule :

$$u'v-uv' = 3(5-x)-(3x-4)\times(-1) = 15-3x+3x-4 = 11$$

$$\boxed{f_9'(x) = \frac{11}{(5-x)^2}}$$
::

::question{label="10."}
$f_{10}(x) = x^2+\dfrac{x+1}{x^2+1}$

#indice
Décompose : c'est une somme d'un polynôme et d'un quotient, chacun se dérive de son côté. Pour l'ensemble de dérivabilité, demande-toi si $x^2+1$ peut s'annuler — pense à son minimum.

#solution
$f_{10}$ est la somme d'un polynôme et d'un quotient dont le dénominateur vérifie $x^2+1 \geqslant 1$ : il **ne s'annule jamais**. Donc $f_{10}$ est dérivable sur $\mathbb{R}$.

Le premier terme donne $(x^2)' = 2x$. Pour le quotient, $u = x+1$, $u' = 1$ ; $v = x^2+1$, $v' = 2x$ :

$$u'v-uv' = (x^2+1)-(x+1)(2x) = x^2+1-2x^2-2x = 1-2x-x^2$$

En sommant les deux contributions :

$$\boxed{f_{10}'(x) = 2x+\frac{1-2x-x^2}{(x^2+1)^2}}$$
::
:::

:::exercice{titre="Exercice 6" theme="Exercice bilan avec exponentielle, logarithme et trigonométrie"}
Pour chacune des fonctions suivantes, déterminer sa fonction dérivée sur l'intervalle indiqué. C'est l'exercice de synthèse : pour chaque fonction, **identifier la forme** (somme ? produit ? quotient ? $\dfrac{k}{u}$ ? $e^u$ ? $\ln u$ ?), citer la formule des sections 4 et 5, puis l'appliquer.

::question{label="1."}
$f(x) = 3x+2$ sur $\mathbb{R}$

#indice
Une fonction affine : son graphe est une droite. Que vaut la pente d'une droite, et varie-t-elle d'un point à l'autre ?

#solution
Fonction affine : $(3x)' = 3$ et $(2)' = 0$.

$$\boxed{f'(x) = 3}$$
::

::question{label="2."}
$f(x) = 1-7x$ sur $\mathbb{R}$

#indice
Encore une fonction affine, mais écrite dans l'autre sens. Le coefficient devant $x$ est-il bien $7$, ou $-7$ ?

#solution
Fonction affine, de coefficient directeur $-7$ : $(1)' = 0$ et $(-7x)' = -7$.

$$\boxed{f'(x) = -7}$$
::

::question{label="3."}
$f(x) = \dfrac{1}{7}-\dfrac{5}{7}x$ sur $\mathbb{R}$

#indice
Les fractions ne changent rien à l'affaire : $\dfrac{1}{7}$ est une constante, et $\dfrac{5}{7}$ un simple coefficient. Toujours une fonction affine.

#solution
Fonction affine : $\dfrac{1}{7}$ est une constante, de dérivée nulle, et le coefficient directeur est $-\dfrac{5}{7}$.

$$\boxed{f'(x) = -\dfrac{5}{7}}$$
::

::question{label="4."}
$f(x) = x^2-x+1$ sur $\mathbb{R}$

#indice
Un trinôme : trois termes, dérivés séparément. Rappelle-toi que $x$ s'écrit $x^1$ et que sa dérivée vaut $1$.

#solution
Polynôme, dérivé terme à terme : $(x^2)' = 2x$, $(-x)' = -1$, $(1)' = 0$.

$$\boxed{f'(x) = 2x-1}$$
::

::question{label="5."}
$f(x) = \dfrac{2}{3}x^3-\dfrac{1}{2}x^2+x$ sur $\mathbb{R}$

#indice
Polynôme à coefficients fractionnaires : dérive normalement, puis simplifie chaque coefficient. Les fractions se simplifient très bien contre les exposants qui descendent — surveille que le degré du premier terme reste bien $2$ après dérivation.

#solution
Polynôme. On dérive terme à terme en simplifiant les coefficients :

$$\left(\frac{2}{3}x^3\right)' = \frac{2}{3}\times 3x^2 = 2x^2, \qquad \left(\frac{1}{2}x^2\right)' = \frac{1}{2}\times 2x = x, \qquad (x)' = 1$$

$$\boxed{f'(x) = 2x^2-x+1}$$

*⚠️ La correction officielle imprime $2x-x+1$ : l'exposant du premier terme a sauté, il faut lire $2x^2-x+1$.*
::

::question{label="6."}
$f(x) = 2\sqrt{x}$ sur $\mathbb{R}_+^*$

#indice
Fonction élémentaire multipliée par une constante. Le $2$ du facteur et le $2$ du dénominateur de $(\sqrt{x})'$ vont se rencontrer : que reste-t-il ?

#solution
Fonction élémentaire multipliée par une constante : $(2\sqrt{x})' = 2\times\dfrac{1}{2\sqrt{x}}$.

Les deux $2$ se simplifient :

$$\boxed{f'(x) = \frac{1}{\sqrt{x}}}$$

L'intervalle $\mathbb{R}_+^*$ est bien celui de dérivabilité : en $0$, la racine n'est pas dérivable.
::

::question{label="7."}
$f(x) = x+2\ln(x)$ sur $]0,+\infty[$

#indice
Une somme de deux termes, dont un logarithme « nu » : sa dérivée est dans le tableau de la section 4, pas besoin de la Prop 3.2 ici puisqu'il n'y a rien à l'intérieur du $\ln$ hormis $x$.

#solution
Somme, avec $\ln'(x) = \dfrac{1}{x}$ (section 4) et le coefficient $2$ qui sort :

$$(x)' = 1 \qquad\text{et}\qquad (2\ln x)' = 2\times\frac{1}{x} = \frac{2}{x}$$

$$\boxed{f'(x) = 1+\frac{2}{x}}$$

L'intervalle $]0,+\infty[$ est imposé par le domaine du logarithme.
::

::question{label="8."}
$f(x) = \dfrac{1}{x^2}$ sur $\mathbb{R}^*$

#indice
Deux routes possibles : écrire $f(x) = x^{-2}$ et appliquer la règle des puissances, ou voir une forme $\dfrac{1}{u}$ et appliquer la Prop 3.5. Prends-en une, puis vérifie avec l'autre — elles doivent donner exactement la même chose.

#solution
**Première voie** — puissance : $f(x) = x^{-2}$, donc

$$f'(x) = -2x^{-3} = -\frac{2}{x^3}$$

**Seconde voie** — Prop 3.5 avec $u = x^2$, $u' = 2x$ :

$$f'(x) = -\frac{2x}{x^4} = -\frac{2}{x^3}$$

Les deux méthodes concordent.

$$\boxed{f'(x) = -\frac{2}{x^3}}$$
::

::question{label="9."}
$f(x) = \dfrac{1}{\sin x}+\dfrac{1}{\cos(x)}$

#indice
Deux termes, deux fois la Prop 3.5. Le second réserve une surprise : la dérivée du cosinus porte déjà un signe moins, qui va rencontrer celui de la formule. Pense aussi à te demander si « sur $\mathbb{R}$ » est vraiment tenable, vu les dénominateurs.

#solution
Deux applications de la **Prop 3.5**.

**Premier terme** : $u = \sin x$, $u' = \cos x$, d'où

$$\left(\frac{1}{\sin x}\right)' = -\frac{\cos x}{\sin^2 x}$$

**Second terme** : $u = \cos x$, $u' = -\sin x$, d'où

$$\left(\frac{1}{\cos x}\right)' = -\frac{-\sin x}{\cos^2 x} = +\frac{\sin x}{\cos^2 x}$$

Les deux signes moins se compensent ici, ce qui explique la différence de signe entre les deux morceaux du résultat.

$$\boxed{f'(x) = -\frac{\cos x}{\sin^2 x}+\frac{\sin x}{\cos^2 x}}$$

*⚠️ L'énoncé écrit « sur $\mathbb{R}$ », mais il faut $\sin x \neq 0$ **et** $\cos x \neq 0$, c'est-à-dire $x \neq k\dfrac{\pi}{2}$, $k\in\mathbb{Z}$.*
::

::question{label="10."}
$f(x) = x+\dfrac{1}{\sqrt{x}}$

#indice
Le second terme est une racine au dénominateur : réécris-le en puissance pour le ramener au tableau. Et regarde d'un œil critique l'intervalle annoncé par l'énoncé — $\dfrac{1}{\sqrt{x}}$ a-t-il un sens pour tout réel ?

#solution
Somme. Le premier terme donne $(x)' = 1$. Pour le second, on passe en puissance :

$$\frac{1}{\sqrt{x}} = x^{-1/2} \quad\Longrightarrow\quad \left(x^{-1/2}\right)' = -\frac{1}{2}x^{-3/2} = -\frac{1}{2x\sqrt{x}}$$

$$\boxed{f'(x) = 1-\frac{1}{2x\sqrt{x}}}$$

*⚠️ L'énoncé écrit « sur $\mathbb{R}$ », mais $\dfrac{1}{\sqrt{x}}$ exige $x > 0$ : le bon ensemble est $\mathbb{R}_+^*$.*
::

::question{label="11."}
$f(x) = \dfrac{5}{x+e^x}$ sur $\mathbb{R}$

#indice
Numérateur constant, donc Prop 3.5 plutôt que formule du quotient. Le dénominateur est une somme dont l'un des termes est sa propre dérivée. Interroge-toi aussi : ce dénominateur peut-il s'annuler ?

#solution
Forme $\dfrac{k}{u}$ avec $k = 5$, $u = x+e^x$ et, puisque $(e^x)' = e^x$ :

$$u' = 1+e^x$$

La **Prop 3.5** donne :

$$f'(x) = -\frac{k\,u'}{u^2} = -\frac{5(1+e^x)}{(x+e^x)^2}$$

$$\boxed{f'(x) = -\frac{5(1+e^x)}{(x+e^x)^2}}$$

*⚠️ Il faut $x+e^x \neq 0$ : cela exclut un unique réel $x_0 \approx -0{,}567$, celui où $e^x = -x$.*
::

::question{label="12."}
$f(x) = x(x^2+3)$ sur $\mathbb{R}$

#indice
Un produit, oui — mais avant de dégainer $(uv)' = u'v+uv'$, regarde ce que donne un simple développement. Tu obtiendras un polynôme de degré $3$ dérivable en une ligne.

#solution
**On développe d'abord**, c'est plus court que la formule du produit :

$$f(x) = x^3+3x$$

Puis dérivation terme à terme :

$$\boxed{f'(x) = 3x^2+3}$$

*Par la formule du produit : $1\times(x^2+3)+x\times 2x = x^2+3+2x^2 = 3x^2+3$. Même résultat.*
::

::question{label="13."}
$f(x) = e^x(x^2+2x+5)$ sur $\mathbb{R}$

#indice
Produit d'une exponentielle par un polynôme. La formule s'applique sans difficulté, mais ne t'arrête pas là : dès qu'une exponentielle apparaît dans les deux termes, le réflexe est de la mettre en facteur.

#solution
Produit avec $u = e^x$, $u' = e^x$ ; $v = x^2+2x+5$, $v' = 2x+2$ :

$$f'(x) = u'v+uv' = e^x(x^2+2x+5)+e^x(2x+2)$$

On **factorise par $e^x$** — réflexe systématique avec l'exponentielle — puis on regroupe les termes semblables :

$$f'(x) = e^x\big[(x^2+2x+5)+(2x+2)\big] = e^x(x^2+4x+7)$$

$$\boxed{f'(x) = e^x(x^2+4x+7)}$$
::

::question{label="14."}
$f(x) = (x+1)\ln(x^2+x+1)$ sur $]0,+\infty[$

#indice
C'est un produit dont le second facteur est lui-même une forme composée $\ln u$. Deux formules s'emboîtent donc : $(uv)' = u'v+uv'$ à l'extérieur, et $(\ln u)' = \dfrac{u'}{u}$ à l'intérieur. Traite le $\ln u$ à part avant de tout assembler.

#solution
Produit dont le second facteur est un $\ln u$.

**Le facteur logarithme d'abord** : avec $u = x^2+x+1$ et $u' = 2x+1$, le tableau de la section 5 donne

$$\big(\ln(x^2+x+1)\big)' = \frac{2x+1}{x^2+x+1}$$

**Puis le produit**, avec le premier facteur $x+1$ de dérivée $1$ :

$$f'(x) = 1\times\ln(x^2+x+1)+(x+1)\times\frac{2x+1}{x^2+x+1}$$

$$\boxed{f'(x) = \ln(x^2+x+1)+\frac{(x+1)(2x+1)}{x^2+x+1}}$$
::

::question{label="15."}
$f(x) = x\cos(2x-1)$ sur $\mathbb{R}$

#indice
Produit, avec un cosinus composé au second facteur. La formule $\big(\cos(ax+b)\big)' = -a\sin(ax+b)$ te donne directement la dérivée de ce facteur — deux erreurs classiques ici : oublier le signe moins, ou oublier le facteur $a$.

#solution
Produit avec $u = x$, $u' = 1$ ; $v = \cos(2x-1)$.

Pour $v'$, on applique la formule de la section 5, $\big(\cos(ax+b)\big)' = -a\sin(ax+b)$, avec $a = 2$ et $b = -1$ :

$$v' = -2\sin(2x-1)$$

D'où :

$$f'(x) = 1\times\cos(2x-1)+x\times\big(-2\sin(2x-1)\big)$$

$$\boxed{f'(x) = \cos(2x-1)-2x\sin(2x-1)}$$
::

::question{label="16."}
$f(x) = \dfrac{1-7x}{2x+1}$ sur $\mathbb{R}-\left\{-\dfrac{1}{2}\right\}$

#indice
Quotient à numérateur non constant : formule complète. Les termes en $x$ vont se neutraliser, il ne restera qu'une constante. Et au dénominateur, recopie soigneusement $v$ avant de l'élever au carré.

#solution
$u = 1-7x$, $u' = -7$ ; $v = 2x+1$, $v' = 2$.

Numérateur de la formule :

$$u'v-uv' = -7(2x+1)-(1-7x)\times 2 = -14x-7-2+14x = -9$$

Les termes en $x$ s'éliminent.

$$\boxed{f'(x) = -\frac{9}{(2x+1)^2}}$$

*⚠️ La correction officielle écrit $(2x-1)^2$ au dénominateur : coquille, le dénominateur de $f$ est $2x+1$, donc $v^2 = (2x+1)^2$.*
::

::question{label="17."}
$f(x) = \dfrac{1}{x^2+x+1}$ sur $\mathbb{R}$

#indice
Numérateur constant, donc Prop 3.5. L'énoncé affirme que $f$ est dérivable sur $\mathbb{R}$ tout entier : pour t'en convaincre, calcule le discriminant du dénominateur.

#solution
Forme $\dfrac{1}{u}$ avec $u = x^2+x+1$ et $u' = 2x+1$.

*Pourquoi « sur $\mathbb{R}$ » est correct ici* : le discriminant de $x^2+x+1$ vaut $\Delta = 1-4 = -3 < 0$, le dénominateur ne s'annule donc jamais.

La **Prop 3.5** donne :

$$\boxed{f'(x) = -\frac{2x+1}{(x^2+x+1)^2}}$$
::

::question{label="18."}
$f(x) = e^{-x^2}$ sur $\mathbb{R}$

#indice
Forme $e^u$ : la formule $(e^u)' = u'e^u$ conserve l'exponentielle intacte et la multiplie par la dérivée de l'exposant. Attention au signe de cet exposant, $u = -x^2$ et non $x^2$.

#solution
Forme $e^u$ (section 5) avec $u = -x^2$, donc $u' = -2x$ :

$$f'(x) = u'e^u = -2x\,e^{-x^2}$$

$$\boxed{f'(x) = -2x\,e^{-x^2}}$$

L'exponentielle n'est jamais modifiée par la dérivation : elle est simplement multipliée par $u'$.
::

::question{label="19."}
$f(x) = \dfrac{1}{\sqrt{x+1}+1}$ sur $]-1,+\infty[$

#indice
La question la plus emboîtée de l'exercice : une forme $\dfrac{1}{u}$ dont le $u$ contient lui-même une racine composée. Traite $u'$ à part avec la Prop 3.4, puis reporte dans la Prop 3.5. Tu obtiendras une fraction au numérateur d'une fraction : simplifie l'étage.

#solution
Forme $\dfrac{1}{u}$ avec $u = \sqrt{x+1}+1$.

**Calcul de $u'$** par la **Prop 3.4**, $(\sqrt{w})' = \dfrac{w'}{2\sqrt{w}}$, avec $w = x+1$ et $w' = 1$ :

$$u' = \frac{1}{2\sqrt{x+1}}$$

**Puis la Prop 3.5** :

$$f'(x) = -\frac{u'}{u^2} = -\frac{\dfrac{1}{2\sqrt{x+1}}}{(\sqrt{x+1}+1)^2}$$

On simplifie l'étage de fractions en faisant passer $2\sqrt{x+1}$ au dénominateur :

$$\boxed{f'(x) = -\frac{1}{2\sqrt{x+1}\,(\sqrt{x+1}+1)^2}}$$

La condition $x > -1$ garantit à la fois l'existence de la racine et sa dérivabilité.
::
:::
